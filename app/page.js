"use client";

import { useState } from "react";

import { supabase } from "../lib/supabase";

export default function NewSession() {
  const [activityType, setActivityType] = useState("gym");
  const [sessionDate, setSessionDate] = useState(new Date().toLocaleDateString("en-CA"));
  const [isSubmitted, setIsSubmitted] = useState(false);


  async function handleSubmit(event) {
  event.preventDefault();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    alert("Please log in before saving a session.");
    return;
  }

  const newSession = {
    activity_type: activityType,
    session_date: sessionDate,
    user_id: user.id
  };

  const { error } = await supabase.from("sessions").insert([newSession]);
  if (error) {
    alert("failed to save session: " + error.message);
    setIsSubmitted(false);
  } else {
    setIsSubmitted(true);
  }
}



  return (
    <main className="container py-5">
      <h1>Log a Session</h1>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body"> 
              <h2>Session Details</h2>
              <form onSubmit={handleSubmit}>
                <p>Choose your activity</p>
                <select 
                value={activityType}
                onChange={(event) => {setActivityType(event.target.value); setIsSubmitted(false); } }
                className="form-select">

                  <option value="gym">Gym Workout</option>
                  <option value="home">Home Workout</option>
                  <option value="walk">Walk</option>
                  <option value="basketball">Basketball</option>
                </select>
                <p>Session Date</p>
                <input 
                type="date" 
                value={sessionDate}
                onChange={(event) => {setSessionDate(event.target.value); setIsSubmitted(false); }}
                className="form-control"
                onClick={(event) => event.currentTarget.showPicker()} />
                <button type="submit" className="btn btn-success mt-3">submit</button>
              </form>
    
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <h2>Session Preview</h2>
              <p>Activity: {activityType}</p>
              <p>Date: {sessionDate}</p>
              {isSubmitted && <p>Session submitted!</p>}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}