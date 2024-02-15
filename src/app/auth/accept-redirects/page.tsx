// "use client";

// import { useEffect } from "react";

// import { useSearchParams } from "next/navigation";
// import { useCookies } from "next-client-cookies";

// function AcceptRedirects() {
//   const cookies = useCookies();
//   const searchParams = useSearchParams();

//   const token = searchParams.get("__t") as string;

//   useEffect(() => {
//     const decodedToken = decodeURI(token);
//     if (decodedToken) {
//       cookies.set("accessToken", `"${decodeURI(token)}"`, { secure: true });
//       cookies.set("token", "true", { path: "/", secure: true });

//       window.location.href = "/booking";
//     } else {
//       window.location.href = "/";
//     }
//   }, [token]);

//   return <div>Please wait...</div>;
// }

// export default AcceptRedirects;

const page = () => {
  return <div>page</div>;
};

export default page;
