"use client";
import { useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { useSearchParams } from "next/navigation";
import Loader from "@/layouts/Loader";

function AcceptRedirects() {
  const searchParams = useSearchParams();
  const token = searchParams.get("__t") as string;

  useEffect(() => {
    const decodedToken = decodeURIComponent(token);
    if (decodedToken) {
      setCookie(null, "accessToken", decodedToken, { secure: true });
      setCookie(null, "token", "true", { path: "/", secure: true });
      window.location.href = "/booking";
    } else {
      window.location.href = "/";
    }
  }, [token]);

  return (
    <div>
      <Loader />
    </div>
  );
}

export default AcceptRedirects;
