import { useState } from "react";

const SignIn = ({ onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    onRouteChange("SignIn");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <article className="w-full max-w-md p-10 rounded-2xl bg-white/15 backdrop-blur-l border border-white/25 shadow-2xl">
        <form>
          <fieldset className="border-none p-0 m-0">
            <legend className="text-2xl font-semibold text-white mb-6 text-center">Sign In</legend>
            <div className="mb-5">
              <label className="block font-semibold text-sm text-white/85 mb-2" htmlFor="email-address">Email</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-base"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block font-semibold text-sm text-white/85 mb-2" htmlFor="password">Password</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-base"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div>
            <input
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-blue-400 border-none text-white font-bold text-base cursor-pointer shadow-lg hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] transition-all duration-200"
              type="button"
              onClick={handleSignIn}
              value="Sign In"
            />
          </div>
          <div className="text-center mt-5">
            <a href="#0" className="text-white/70 text-sm underline cursor-pointer hover:text-white transition-colors duration-200">Sign up</a>
          </div>
        </form>
      </article>
    </div>
  );
};

export default SignIn;
