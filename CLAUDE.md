# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website built with React 18 and TypeScript. The project showcases creative work including CG, interactive design, performance art, and photography through a modern web interface.

## Development Commands

### Package Management
- `npm install` - Install dependencies
- `npm ci` - Install dependencies for CI/CD
- `npm update` - Update dependencies

### Build Commands
- `npm run dev` - Start Next.js development server (http://localhost:3000)
- `npm run build` - Build the project for production
- `npm run start` - Start Next.js production server

### Testing Commands
- No test scripts configured yet
- Consider adding: Jest, React Testing Library, or Playwright

### Code Quality Commands
- `npm run lint` - Run Next.js ESLint
- `npm run format` - Format code with Prettier
- `npx tsc --noEmit` - Run TypeScript type checking (add as npm script)

### Development Tools
- Consider adding:
  - `@next/bundle-analyzer` for bundle analysis
  - Storybook for component development

## Technology Stack

### Core Technologies
- **Next.js 15.1.0** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Static typing
- **Node.js 20** - Runtime environment

### Styling
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Bootstrap 5.3** - Component library
- **CSS Modules** - Component-scoped styles

### UI Components
- **Embla Carousel** - Carousel/slider component
- **React Bootstrap** - Bootstrap components for React
- **React Slick** - Carousel component
- **React Slideshow** - Slideshow component

### Analytics & Performance
- **Vercel Analytics** - Web analytics
- **Vercel Speed Insights** - Performance monitoring

### Development Tools
- **ESLint** - Code linting (Next.js config)
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## Project Structure

### File Organization
```
app/                # Next.js App Router pages and layouts
├── layout.tsx     # Root layout
├── page.tsx       # Home page
├── globals.css    # Global styles
├── about/         # About page
├── contact/       # Contact page
├── work/          # Work portfolio pages
│   ├── [project]/ # Individual project pages
└── performance/   # Performance art pages

components/        # React components (mix of .jsx and .tsx)
├── Navbar.jsx     # Navigation component
├── HeroSection.jsx
├── EmblaCarousel.jsx
└── [others...]

public/           # Static assets
├── img/          # Images organized by category
│   ├── projects/
│   ├── about/
│   └── top/
└── favicon/      # Favicon files
```

### Naming Conventions
- **Pages**: Use kebab-case directories in app/ (`work/lexus/page.tsx`)
- **Components**: PascalCase files and exports (`HeroSection.jsx`)
- **Functions**: camelCase (`getUserData`)
- **CSS Classes**: Mix of Tailwind utilities and custom classes
- **Images**: Descriptive names, various formats (.jpg, .png, .webp)

## TypeScript Configuration

### Current Setup
- **Strict mode**: Enabled
- **Target**: ES2017
- **JSX**: Preserve (Next.js handles transformation)
- **Path alias**: `@/*` maps to project root
- **Mixed codebase**: Both .tsx (pages) and .jsx (components)

### Migration Strategy
- Components are currently in .jsx - consider gradual migration to .tsx
- Add types for props and state
- Use Next.js built-in types (`NextPage`, `GetServerSideProps`, etc.)

## Code Quality Standards

### ESLint Configuration
- Use recommended ESLint rules for JavaScript/TypeScript
- Enable React-specific rules if using React
- Configure import/export rules for consistent module usage
- Set up accessibility rules for inclusive development

### Prettier Configuration
- Use consistent indentation (2 spaces recommended)
- Set maximum line length (80-100 characters)
- Use single quotes for strings
- Add trailing commas for better git diffs

### Testing Standards
- Aim for 80%+ test coverage
- Write unit tests for utilities and business logic
- Use integration tests for component interactions
- Implement e2e tests for critical user flows
- Follow AAA pattern (Arrange, Act, Assert)

## Performance Optimization

### Next.js Optimizations
- **Image Optimization**: Use `next/image` for automatic optimization
- **Font Optimization**: Use `next/font` for web fonts
- **Code Splitting**: Automatic per-route code splitting
- **Prefetching**: Automatic link prefetching in viewport

### Current Issues to Address
- Large image files in public/img/ - consider optimization
- Multiple carousel libraries - standardize on one
- Mixed component formats (.jsx/.tsx) - standardize

## Security Guidelines

### Dependencies
- Regularly audit dependencies with `npm audit`
- Keep dependencies updated
- Use lock files (`package-lock.json`, `yarn.lock`)
- Avoid dependencies with known vulnerabilities

### Code Security
- Sanitize user inputs
- Use HTTPS for API calls
- Implement proper authentication and authorization
- Store sensitive data securely (environment variables)
- Use Content Security Policy (CSP) headers

## Development Workflow

### Getting Started
1. Ensure Node.js 20+ is installed
2. Run `npm install`
3. Start dev server: `npm run dev`
4. Open http://localhost:3000

### Before Committing
1. Run linting: `npm run lint`
2. Format code: `npm run format`
3. Type check: `npx tsc --noEmit`
4. Test build: `npm run build`

### Deployment
- Optimized for Vercel deployment
- Automatic deployments from main branch
- Preview deployments for pull requests