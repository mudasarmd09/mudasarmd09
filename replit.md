# Mudasar MD Portfolio - Project Configuration

## Overview

This is a full-stack portfolio application for Mudasar MD, a Senior Full Stack Developer specializing in React.js, Node.js, Web3, Blockchain, and AI/ML technologies. The application is built with modern technologies and features a professional design showcasing skills, projects, and experience.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript for robust API development
- **Server Setup**: Custom server configuration with middleware for logging and error handling
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Built-in session handling capabilities

### Database Architecture
- **Primary Database**: PostgreSQL via Neon Database (serverless)
- **ORM**: Drizzle ORM with Zod schema validation
- **Migration Strategy**: Drizzle Kit for database migrations and schema management

## Key Components

### Core Application Structure
1. **Client Application** (`client/`): React-based frontend with TypeScript
2. **Server Application** (`server/`): Express.js backend with TypeScript
3. **Shared Schema** (`shared/`): Common database schemas and types
4. **UI Components** (`client/src/components/ui/`): Reusable shadcn/ui components

### Main Portfolio Sections
- **Hero Section**: Professional introduction with animated background particles
- **About Section**: Personal story and achievements with statistics
- **Skills Section**: Technical expertise categorized by domain
- **Experience Section**: Professional journey and accomplishments
- **Projects Section**: Showcase of completed projects with technologies used
- **Contact Section**: Contact form with EmailJS integration

### Key Features
- **Theme Support**: Dark/light mode with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimization**: Meta tags, Open Graph, and structured data
- **Performance**: Lazy loading, intersection observers, and optimized animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Data Flow

### Frontend Data Management
1. **React Query**: Handles server state, caching, and data synchronization
2. **Form Handling**: React Hook Form with Zod validation
3. **Theme Context**: Global theme state management
4. **Custom Hooks**: Reusable logic for scrolling, intersection observation, and navigation

### API Structure
- **Health Check**: `/api/health` for application status
- **Basic API**: `/api` for testing and basic operations
- Current setup uses in-memory storage with plans for PostgreSQL integration

### Email Integration
- **EmailJS**: Client-side email sending for contact form
- **Service Configuration**: Configured with template and public key setup

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **TypeScript**: Full TypeScript support across frontend and backend
- **Styling**: Tailwind CSS, shadcn/ui, Radix UI primitives
- **Backend**: Express.js, Drizzle ORM, Neon Database
- **Build Tools**: Vite, ESBuild, PostCSS

### Third-Party Integrations
- **Email Service**: EmailJS for contact form functionality
- **Database**: Neon Database (serverless PostgreSQL)
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS-based animations with Tailwind utilities

### Development Tools
- **Hot Reload**: Vite HMR for rapid development
- **Type Checking**: TypeScript compiler with strict configuration
- **Code Quality**: ESLint-ready setup, consistent formatting

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild compiles Express server to `dist/index.js`
3. **Static Assets**: Handled through Vite's asset pipeline

### Environment Configuration
- **Development**: Hot reload with tsx for TypeScript execution
- **Production**: Compiled JavaScript with environment variable support
- **Database**: Neon Database URL configuration via environment variables

### Hosting Considerations
- **Static Assets**: Can be served via CDN or static hosting
- **Server**: Node.js environment required for Express backend
- **Database**: Serverless PostgreSQL via Neon Database

### Scripts Available
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both frontend and backend for production
- `npm start`: Run production server
- `npm run check`: TypeScript type checking
- `npm run db:push`: Push database schema changes

### Performance Optimizations
- **Code Splitting**: Vite handles automatic code splitting
- **Asset Optimization**: Automatic image and CSS optimization
- **Bundle Analysis**: Built-in Vite analysis tools
- **Caching Strategy**: React Query provides intelligent caching

## Development Notes

The application uses a monorepo structure with shared TypeScript configuration. The portfolio is designed to be easily customizable with Mudasar MD's personal information and projects. The codebase follows modern React patterns with hooks, TypeScript interfaces, and component composition.

The database schema is currently minimal but extensible for future features like a blog, project management, or user authentication. The application is production-ready with proper error handling, loading states, and professional UI/UX design.