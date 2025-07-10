import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const [location] = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location
    );
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4">
      <Card className="w-full max-w-md border-border/50 bg-background/80 backdrop-blur-sm shadow-xl">
        <CardContent className="p-8 text-center">
          {/* 404 Number with gradient */}
          <div className="mb-6">
            <h1 className="text-8xl font-bold gradient-text mb-2">404</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-3">Page Not Found</h2>
            <p className="text-muted-foreground leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              asChild 
              className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-blue/80 hover:to-portfolio-purple/80 text-white font-medium"
            >
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-border/50 hover:bg-muted/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Current path info for debugging */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6 p-3 bg-muted/30 rounded-lg border border-border/30">
              <p className="text-xs text-muted-foreground">
                Attempted route: <code className="bg-muted/50 px-2 py-1 rounded">{location}</code>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
