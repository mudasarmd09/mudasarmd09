export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="block sm:inline">
                Crafted <span className="gradient-text font-semibold">for Excellence</span>
              </span>
              <span className="hidden sm:inline text-portfolio-blue mx-2">•</span>
              <span className="block sm:inline mt-1 sm:mt-0">
                Engineered <span className="gradient-text font-semibold">for Impact</span>
              </span>
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Mudasar MD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}