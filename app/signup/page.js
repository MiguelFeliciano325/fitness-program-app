"use client";

import { useState } from "react";

import { supabase } from "../../lib/supabase";

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event) {
      event.preventDefault();
      setIsLoading(true);
      try {
      const { error } = await supabase.auth.signUp({
        email,
        password
      });
      if (error) {
        setErrorMessage(error.message);
        setSuccessMessage("");
      } else {
        setErrorMessage("");
        setSuccessMessage("Account created successfully!");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
    }

  return (
    <main className="container py-5">
      <h1>Create Account</h1>
      <div className="card">
        <div className="card-body">
          <h2>Sign Up</h2>
          {errorMessage && <div className="text-danger">{errorMessage}</div>}
          {successMessage && <div className="text-success">{successMessage}</div>}
          <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <input type="password" className="form-control mt-3" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={6} required />
            <button type="submit" className="btn btn-success mt-3" disabled={isLoading}>{isLoading ? "Creating Account..." : "Create Account"}</button>
          </form>
        </div>
      </div>
    </main>
  );
}