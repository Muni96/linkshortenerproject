# UI Components — shadcn/ui

## Overview

All UI in this app is built exclusively with **shadcn/ui** components. Never create custom component primitives — always reach for an existing shadcn/ui component first.

## Rules

- **Never** build custom UI primitives (buttons, inputs, dialogs, cards, etc.). Use the shadcn/ui equivalent.
- **Always** install new components via the CLI: `npx shadcn@latest add <component>`.
- **Always** use the `cn()` utility from `@/lib/utils` for conditional or merged class names.
- **Never** override shadcn/ui component internals — extend via `className` props instead.
- Components live in `@/components/ui` and must not be moved or renamed.

## Project Configuration

| Setting | Value |
|---|---|
| Style | `new-york` |
| Base color | `neutral` |
| CSS variables | enabled |
| Icon library | `lucide-react` |
| RSC support | enabled |

## Adding Components

```bash
npx shadcn@latest add <component-name>
```

Components are installed into `components/ui/`. Import them using the `@/components/ui` alias.

## Styling

- Tailwind CSS v4 is used for all styling.
- Global styles and CSS variable tokens are defined in `app/globals.css`.
- Avoid inline styles. Use Tailwind utility classes and `cn()` for dynamic styles.

## Icons

Use `lucide-react` for all icons — it is the configured icon library for this project.

```tsx
import { LinkIcon } from "lucide-react";
```
