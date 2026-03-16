import { Link } from "@tanstack/react-router";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
