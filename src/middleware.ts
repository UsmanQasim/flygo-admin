import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token"); // Retrieve the token from cookies

  // Check if the path requires authentication and the token is missing
  if (!isPublicPath(path) && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If the user is trying to access authentication-related pages while already authenticated, redirect to dashboard
  if (isAuthPage(path) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// Function to check if the path is a public path
function isPublicPath(path: string): boolean {
  const publicPaths = ["/", "/login", "/register", "/auth/login"];
  return publicPaths.includes(path);
}

// Function to check if the path is an authentication-related path
function isAuthPage(path: string): boolean {
  return path.split("/")[1] === "auth";
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/booking",
    "/setting",
    "/login",
    "/register",
    "/auth/login",
    "/users/:path*",
  ],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   if (path.split("/")[1] !== "auth" && !request.cookies.has("token")) {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   if (path.split("/")[1] === "auth" && request.cookies.has("token")) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }
// }

// export const config = {
//   matcher: [
//     "/",
//     "/dashboard",
//     "/booking",
//     // "/reviews",
//     "/setting",
//     "/login",
//     "/register",
//     "/auth/login",
//     "/users/:path*",
//     // "/tour/:path*",
//     // "/hotel/:path*",
//     // "/restaurant/:path*",
//     // "/cab/:path*",
//   ],
// };
