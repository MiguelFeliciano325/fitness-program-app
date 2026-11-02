# Copilot instructions for the Fitness Progress App

## Project goal
- This repository is a fitness accountability app for a college student balancing school, work, and basketball.
- The MVP is intentionally narrow: workout logging and weekly exercise goal tracking, not broad fitness analytics.
- Keep the product centered on consistency and follow-through: the user misses workouts when tired or busy, so the app should reduce friction and make accountability easier.

## Architecture at a glance
- The app is a web app built with Next.js + React + JavaScript + CSS.
- Use Next.js route handlers as the app backend/API layer instead of spinning up a separate Express server.
- Persist domain data in Supabase PostgreSQL; treat it as the source of truth for workout history, exercises, and weekly goals.
- Deploy to Vercel; the app should be designed to run cleanly in a serverless Next.js environment.
- The primary flow is: user interaction in the frontend -> Next.js API route -> Supabase -> response back to UI.

## Domain model and MVP behavior
- Core entities should reflect the README: workout sessions, exercise details, and weekly goal progress.
- The main user problem is missing sessions when tired, busy, or alone. Prioritize small, repeatable actions over complex dashboards.
- MVP examples: logging exercise name, sets, reps, weight; tracking `2/4` sessions completed for the week; making up missed sessions later in the week instead of abandoning the plan.
- Features such as calorie tracking are explicitly out of scope; photo verification, XP/levels, and personal records are later-phase ideas.

## Product conventions to preserve
- Prefer simple, mobile-friendly interactions; the app is used around busy schedules, often from a phone.
- Focus on accountability and consistency rather than motivational fluff.
- Keep the interface focused on “what did I do this week?” and “what do I need to do next?”
- Avoid overbuilding generic analytics before the user can reliably log and complete sessions.

## Code and implementation guidance
- For any new feature, anchor it to the README user story: reducing skipped workouts and improving follow-through.
- Keep business logic close to user-facing workflows; this is a small app, not a multi-service system.
- When adding routes, prefer server-side Next.js handlers with clear CRUD behavior for workout data and weekly goals.
- Use Supabase client/server patterns that match a single-database app: store structured data, fetch updated counts for weekly completion, and keep queries small and explicit.
- Favor direct, readable patterns over abstraction layers that do not yet exist.

## Workflow expectations
- There is no separate backend repo or monorepo; the app is a single Next.js project.
- Use the repo’s README as the product source of truth for requirements and scope.
- If a proposed feature conflicts with the README MVP, default to the simpler MVP and document the tradeoff.
- Keep changes aligned with the problem statement: workout consistency, flexible weekly planning, and independent accountability.

## Example of good fit
- A new “weekly goal card” that shows completed sessions and remaining sessions is on-brand.
- A generic “nutrition dashboard” would not match the specified MVP and would likely broaden scope unnecessarily.
- A “make-up session” workflow is likely more valuable than adding gamified systems before the core logging flow works
