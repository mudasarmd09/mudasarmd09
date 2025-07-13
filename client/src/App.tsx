
import { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Router, Switch } from "wouter";
import { ThemeProvider } from "./components/ThemeProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { FullPageLoader } from "./components/LoadingSpinner";
import { SEO } from "./components/SEO";
import type { SeoMetadata } from "./types/portfolio";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Configure React Query for optimal performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error) => {
        // Don't retry on 404s
        if (error instanceof Error && error.message.includes('404')) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

// SEO metadata for the portfolio
const seoMetadata: SeoMetadata = {
  title: "Mudasar MD - Senior Full Stack Developer | React.js, Node.js, Blockchain Expert",
  description: "Senior Full Stack Developer with 5+ years of experience building enterprise-grade applications. Specializing in React.js, Node.js, TypeScript, Blockchain, and AI/ML integration. Available for Fortune 500 projects.",
  keywords: [
    "Senior Full Stack Developer",
    "React.js Expert",
    "Node.js Developer",
    "TypeScript Specialist",
    "Blockchain Developer",
    "Web3 Engineer",
    "Smart Contracts",
    "AI/ML Integration",
    "Enterprise Applications",
    "Fortune 500 Developer",
    "Mudasar MD",
    "Pakistan Developer",
    "Remote Developer"
  ],
  author: "Mudasar MD",
  canonical: typeof window !== 'undefined' ? window.location.origin : undefined
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <SEO metadata={seoMetadata} />
          <Suspense fallback={<FullPageLoader />}>
            <Toaster />
            <Sonner />
            <Router>
              <Switch>
                <Route path="/" component={Index} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
