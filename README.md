# Laravel Inertia Vue Starter Kit

A modern Laravel starter kit with Inertia, Vue 3, and an enhanced developer experience inspired by Nuxt.

## Tech Stack

- **PHP** 8.4+ with Laravel 12
- **Runtime**: Bun
- **Frontend**: Vue 3 with Inertia v2
- **Styling**: Tailwind CSS 4
- **State Management**: VueUse
- **Icons**: Lucide + Phosphor (auto-imported)
- **Linting/Formatting**:
  - PHP: Mago (replacing Pint)
  - JS/TS/Vue: Ultracite (oxlint + oxfmt)
- **Type Safety**: TypeScript + Wayfinder

## Features

### Nuxt-like Developer Experience

This starter kit brings Nuxt-like conveniences to Vue development:

| Feature                     | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| **Auto-import Composables** | Functions in `resources/js/composables/` are auto-imported        |
| **Auto-load Components**    | Components in `resources/js/components/` are auto-registered      |
| **Auto-load Icons**         | Any icon from Lucide/Phosphor is available as `<IconName />`      |
| **Type-safe Routes**        | Wayfinder generates TypeScript functions from Laravel controllers |

### Code Examples

**Composables (auto-imported)**
```vue
<script setup>
// useDark() is auto-imported from resources/js/composables/
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
```

**Components (auto-registered)**
```vue
<template>
  <!-- DarkModeToggle.vue is auto-registered -->
  <DarkModeToggle />
</template>
```

**Icons (auto-imported)**
```vue
<template>
  <IconHome />
  <IconSettings />
  <IconUser />
</template>
```

**Wayfinder Routes (type-safe)**
```typescript
import { show } from '@/actions/App/Http/Controllers/PostController'

// Type-safe routing
const post = show(1) // { url: "/posts/1", method: "get" }
```

## Getting Started

### Prerequisites

- PHP 8.4+
- Bun
- Composer

### Installation

```bash
# Install PHP dependencies
composer install

# Install JavaScript dependencies
bun install

# Start development servers
bun run dev
```

### Available Commands

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `bun run dev`       | Start Vite dev server        |
| `bun run build`     | Build for production         |
| `bun run build:ssr` | Build for SSR                |
| `bun run format`    | Format JS/TS/Vue (ultracite) |
| `bun run lint`      | Lint JS/TS/Vue (ultracite)   |
| `composer lint`     | Lint PHP (mago)              |
| `composer format`   | Format PHP (mago)            |
| `php artisan test`  | Run Pest tests               |

## Project Structure

```
/
├── app/                    # Laravel application
│   ├── Http/Controllers/   # Controllers (auto-discovered by Wayfinder)
│   ├── Models/             # Eloquent models
│   └── Providers/          # Service providers
├── bootstrap/              # Laravel bootstrap files
├── config/                 # Configuration files
├── database/               # Migrations, factories, seeders
├── resources/
│   └── js/
│       ├── app.ts          # Inertia app entry
│       ├── ssr.ts          # SSR entry point
│       ├── components/     # Auto-registered Vue components
│       ├── composables/    # Auto-imported Vue composables
│       ├── lib/            # Utility libraries
│       └── pages/          # Inertia pages
├── routes/                 # Route definitions
├── storage/                # Storage files
├── tests/                  # Pest tests
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── mago.toml               # Mago configuration
```

## Configuration Files

| File             | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| `vite.config.ts` | Vite plugins (AutoImport, Components, Icons, Wayfinder) |
| `tsconfig.json`  | TypeScript configuration with paths alias               |
| `mago.toml`      | Mago PHP linter/formatter rules                         |
| `.oxlintrc.json` | Oxlint configuration                                    |
| `.oxfmtrc.jsonc` | Oxfmt configuration                                     |
| `boost.json`     | Laravel Boost MCP configuration                         |

## Icon Sets

This starter kit includes two icon sets:

- **Lucide** (`@iconify-json/lucide`) - Clean, modern icons
- **Phosphor** (`@iconify-json/ph`) - Versatile icon family

Usage: `<Icon[Name] />` where Name is the icon identifier in kebab-case.

## Learn More

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [VueUse](https://vueuse.org)
- [Mago Documentation](https://mago.carthage.software)
- [Ultracite Documentation](https://ultracite.js.org)
