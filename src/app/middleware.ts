import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const res = NextResponse.next();

  res.headers.set('pathname', request.nextUrl.pathname); // Using set() instead of append() to overwrite any existing value
  res.headers.append('Access-Control-Allow-Credentials', 'true');
  res.headers.append('Access-Control-Allow-Origin', '*');
  res.headers.append(
    'Access-Control-Allow-Methods',
    'GET,DELETE,PATCH,POST,PUT',
  );
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  return res;
}

export const config = {
  matcher: '/api/:path*',
};