"use client";
import SocialIcons from "@/Common/SocialIcons";
import { Href } from "@/utils/Constant";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { login, loginAgent } from "../../services/login.service";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassWord, setShowPassWord] = useState(false);
  // const [formValues, setFormValues] = useState({
  //   email: "Test@gmail.com",
  //   password: "Test@123",
  // });
  // const { email, password } = formValues;

  const router = useRouter();
  // const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setFormValues({ ...formValues, [event.target.name]: event.target.value });
  // };

  const formSubmitHandle = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const data = { email, password };
    let res;

    res = await login(data);
    if (res?.success) {
      window.localStorage.setItem("userData", JSON.stringify(res.data));
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(res.data?.accessToken)
      );
      Cookies.set("token", JSON.stringify(true));
      router.push("/dashboard");
      toast.success("Login successful");
    } else if (!res?.success) {
      const role = "agent";
      if (role === "agent") {
        res = await loginAgent(data);
        if (res?.success) {
          window.localStorage.setItem("userData", JSON.stringify(res.data));
          window.localStorage.setItem(
            "accessToken",
            JSON.stringify(res.data?.accessToken)
          );
          Cookies.set("token", JSON.stringify(true));
          router.push("/dashboard");
          toast.success("Login successful");
        }
      }
    } else {
      throw new Error("Invalid credentials");
    }
  };

  return (
    <form className="theme-form" method="post" onSubmit={formSubmitHandle}>
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
            type={showPassWord ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control"
            autoComplete="new-password"
          />
          <div className="show-hide">
            <span
              onClick={() => setShowPassWord(!showPassWord)}
              className={!showPassWord ? "show" : ""}
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