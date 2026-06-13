import { useState } from "react";

const SignUp = ({ onRouteChange }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        setError("");
        setIsLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Registration successful — route to sign in
                onRouteChange("signin");
            } else {
                setError(data.message || "Sign up failed. Please try again.");
            }
        } catch (err) {
            console.error("Sign up error:", err);
            setError("Unable to connect to server. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signin-container">
            <article className="signin-card">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Sign Up</h2>
                    {error && <p className="signin-error">{error}</p>}
                    <div>
                        <label htmlFor="signup-name">Name</label>
                        <input
                            type="text"
                            id="signup-name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="signup-email">Email</label>
                        <input
                            type="email"
                            id="signup-email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="signup-password">Password</label>
                        <input
                            type="password"
                            id="signup-password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="signin-btn"
                        onClick={handleSignUp}
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                    <a href="#0" className="signin-link" onClick={() => onRouteChange("signin")}>
                        Already have an account? Sign in
                    </a>
                </form>
            </article>
        </div>
    );
};

export default SignUp;
