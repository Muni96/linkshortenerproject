# Agent Instructions — Link Shortener Project

This file is the entry point for LLM agents working in this codebase. Read this file first, then consult the referenced documents in `/docs` before making any changes.

## Project Overview

A full-stack URL shortener application built with Next.js 16 (App Router), TypeScript, Clerk authentication, Drizzle ORM, and a Neon PostgreSQL database. The UI is composed with shadcn/ui components styled via Tailwind CSS v4.

## Mandatory Reading

> **CRITICAL: You MUST read the relevant file(s) listed below BEFORE writing a single line of code. This is non-negotiable. Skipping this step will result in incorrect implementations that violate project conventions. No exceptions.**

Before writing or modifying any code, read the following documents in order. ALWAYS refer to the relevant .md file BEFORE generating any code:

- [Authentication](docs/auth.md) — Clerk setup, protected routes, modal sign in/up, and auth helpers.
- [UI Components](docs/ui.md) — shadcn/ui usage rules, component installation, styling, and icons.

If your task involves authentication or protected routes → **read `docs/auth.md` first.**
If your task involves UI, components, styling, or icons → **read `docs/ui.md` first.**
If your task spans multiple areas → **read all relevant docs files before starting.**


## Quick Rules

- **Never** install a new dependency without confirming it aligns with the existing tech stack.
- **Always** use the App Router (`app/` directory). Never use `pages/`.
- **Always** write TypeScript — no `.js` or `.jsx` files.
- **Always** use Drizzle ORM for database access. Never write raw SQL outside of Drizzle query builders.
- **Always** protect authenticated routes using Clerk middleware or server-side auth helpers.
- **Always** use shadcn/ui components before reaching for custom implementations.
- **Always** use the `cn()` utility from `@/lib/utils` for conditional class merging.
- **Never** commit secrets or expose `process.env` values to the client.
