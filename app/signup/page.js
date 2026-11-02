"use client";

import { useState } from "react";

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      const newUser = {
        email,
        password
      };
      console.log("Signup form submitted");
    }

  return (
    <main className="container py-5">
      <h1>Create Account</h1>
      <div className="card">
        <div className="card-body">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <input type="password" className="form-control mt-3" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={6} required />
            <button type="submit" className="btn btn-success mt-3">Create Account</button>
          </form>
        </div>
      </div>
    </main>
  );
}