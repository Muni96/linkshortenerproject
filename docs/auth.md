# Authentication — Clerk

## Overview

All authentication in this app is handled exclusively by **Clerk**. No other auth libraries, custom session handling, or alternative providers should ever be introduced.

## Rules

- **Never** implement custom authentication logic. Clerk is the only auth method.
- **Always** use Clerk's Next.js helpers (`@clerk/nextjs`) for both server and client-side auth.
- Use `clerkMiddleware()` in `middleware.ts` to enforce route protection at the edge.

## Protected Routes

- `/dashboard` is a protected route — users **must** be signed in to access it.
- Unauthenticated users attempting to reach `/dashboard` must be redirected to sign in.

## Homepage Redirect

- Authenticated users visiting `/` (the homepage) must be redirected to `/dashboard`.

## Sign In / Sign Up UI

- Sign in and sign up flows must **always** be launched as a **Clerk modal**.
- Never navigate to a dedicated `/sign-in` or `/sign-up` page.
- Use the `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components from `@clerk/nextjs`.

## Useful Clerk Helpers

| Helper | Usage |
|---|---|
| `auth()` | Server Components / Route Handlers — get `userId`, `sessionId` |
| `currentUser()` | Server Components — get full user object |
| `useAuth()` | Client Components — reactive auth state |
| `useUser()` | Client Components — reactive user object |
| `<SignedIn>` / `<SignedOut>` | Conditionally render UI based on auth state |
