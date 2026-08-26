import { NextResponse } from "next/server";

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

type NowPlayingResponse = {
  configured: boolean;
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

type SpotifyTrack = {
  name: string;
  artists?: { name: string }[];
  album?: { images?: { url: string }[] };
  external_urls?: { spotify?: string };
};

function trackToResponse(track: SpotifyTrack, isPlaying: boolean): NowPlayingResponse {
  return {
    configured: true,
    isPlaying,
    title: track.name,
    artist: track.artists?.map((a) => a.name).join(", "),
    albumImageUrl: track.album?.images?.[0]?.url,
    songUrl: track.external_urls?.spotify,
  };
}

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { access_token?: string };
  return data.access_token ?? null;
}

async function getLastPlayed(accessToken: string): Promise<NowPlayingResponse> {
  const response = await fetch(RECENTLY_PLAYED_URL, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (!response.ok) return { configured: true, isPlaying: false };

  const data = await response.json();
  const track = data?.items?.[0]?.track as SpotifyTrack | undefined;

  if (!track) return { configured: true, isPlaying: false };

  return trackToResponse(track, false);
}

export async function GET() {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return NextResponse.json<NowPlayingResponse>(
      { configured: false, isPlaying: false },
      { status: 200 }
    );
  }

  const response = await fetch(NOW_PLAYING_URL, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (response.status === 204 || !response.ok) {
    return NextResponse.json(await getLastPlayed(accessToken));
  }

  const data = await response.json();
  const track = data?.item as SpotifyTrack | undefined;

  if (!track) {
    return NextResponse.json(await getLastPlayed(accessToken));
  }

  return NextResponse.json(trackToResponse(track, Boolean(data.is_playing)));
}
