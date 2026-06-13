import { useState } from "react";

const SignIn = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    fetch(`${import.meta.env.VITE_API_URL}/signin`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          loadUser(data.user);
          onRouteChange("home");
        } else {
          setError(data.message || "Invalid email or password.");
        }
      }).catch(() => setError("Unable to connect to server."));
  }


  return (
    <div className="signin-container">
      <article className="signin-card">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Sign In</h2>
          {error && <p className="signin-error">{error}</p>}
          <div>
            <label htmlFor="email-address">Email</label>
            <input
              type="email"
              id="email-address"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="signin-btn"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <a
            href="#0"
            className="signin-link"
            onClick={() => onRouteChange("signup")}
          >
            Don't have an account? Sign up
          </a>
        </form>
      </article>
    </div>
  );
};

export default SignIn;
