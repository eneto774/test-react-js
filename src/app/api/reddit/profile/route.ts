/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const accessToken = searchParams.get('accessToken');

  if (!accessToken) {
    return NextResponse.json({ error: 'Access token is required' }, { status: 400 });
  }

  try {
    const response = await axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'next-14',
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error('Reddit API Error:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to fetch Reddit profile' }, { status: 500 });
  }
}
