"use client";
import { Href } from "@/utils/Constant";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { login, loginAgent } from "@/services/login";
import { setCookie } from "nookies";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { email, password };

    try {
      const res = await login(data);

      if (
        res?.success &&
        res.data &&
        res.data.accessToken &&
        res.data.role &&
        res.data.name
      ) {
        setCookie(null, "accessToken", res.data.accessToken, {
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
        setCookie(null, "token", "true", { path: "/" });
        setCookie(null, "user", "true", { path: "/" });
        setCookie(null, "userData", JSON.stringify(res.data.name), {
          path: "/",
        });
        setCookie(null, "role", res.data.role, { path: "/" });
        router.push("/dashboard");
        toast.success("Login successful");
      } else if (!res?.success) {
        const agentRes = await loginAgent(data);
        if (
          agentRes?.success &&
          agentRes.data &&
          agentRes.data.accessToken &&
          agentRes.data.role
        ) {
          setCookie(null, "accessToken", agentRes.data.accessToken, {
            maxAge: 30 * 24 * 60 * 60, // 30 days
            path: "/",
          });
          setCookie(null, "token", "true", { path: "/" });
          setCookie(null, "user", "false", { path: "/" });
          setCookie(null, "userData", JSON.stringify(agentRes.data), {
            path: "/",
          });
          setCookie(null, "role", agentRes.data.role, { path: "/" });
          router.push("/dashboard");
          toast.success("Login successful");
        }
      } else {
        toast.error("Login Failed");
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid credentials");
    }
  };

  return (
    <form
      className="theme-form shawdow-lg"
      method="post"
      onSubmit={formSubmitHandle}
    >
      <h4>Sign in to account</h4>
      <p>Enter your email &amp; password to login</p>
      <div className="form-group">
        <label className="col-form-label form-label-title ">
          Email Address
        </label>
        <input
          type="email"
          required
          name="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="col-form-label form-label-title ">Password</label>
        <div className="form-input position-relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control"
            autoComplete="new-password"
          />
          <div className="show-hide">
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={!showPassword ? "show" : ""}
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-0">
        <div className="checkbox p-0">
          <input id="checkbox1" type="checkbox" />
          <label className="text-muted" htmlFor="checkbox1">
            Remember password
          </label>
        </div>
        <a className="link" href={Href}>
          Forgot password?
        </a>
        <div className="text-end mt-3">
          <button className="btn btn-primary btn-block w-100" type="submit">
            Sign in
          </button>
        </div>
      </div>
      {/* <h6 className="text-muted mt-4 or">Or Sign in with</h6> */}
      {/* <SocialIcons />
      <p className="mt-4 mb-0 text-center">
        Don't have account?
        <Link className="ms-2" href="/register">
          Create Account
        </Link>
      </p> */}
    </form>
  );
};
export default LoginForm;
