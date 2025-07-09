
export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <span className="text-red-500 text-xl">❤️</span>
            <span className="text-muted-foreground">and lots of</span>
            <span className="text-xl">☕</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Mudasar MD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
