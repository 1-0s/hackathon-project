import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user_cred = { email, password };
    if (email && password) {
      // send user credentials to backend
      console.log(user_cred);
      router.push("/signup");
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };
  return (
    <>
      <section className="bg-teal-100 h-[500px] grid place-items-center my-auto">
        <div className="text-center">
          <h1 className="mb-5 font-bold text-xl">Welcome back, sign in!</h1>

          {/* form */}
          <form className="flex flex-col items-center" onSubmit={submitHandler}>
            <input
              ref={emailRef}
              type="email"
              className="mb-3 w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
              placeholder="Email address:"
              required
            />
            <input
              ref={passwordRef}
              type="password"
              className="w-64 md:w-80 pl-3 py-2 text-xs outline-none border-solid border-[1px] border-pup"
              placeholder="Password:"
              required
            />
            <button
              className="mt-3 py-[6px] bg-pup text-sm text-white w-[80px] "
              type="submit"
            >
              Login
            </button>
          </form>

          {/* redirection */}
          <p className="text-sm mt-3">
            Don&apos;t have an account?
            <span className="text-pup cursor-pointer font-bold">
              <Link href="/register"> Signup</Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
