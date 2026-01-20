export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="font-medium hover:text-primary transition-colors"
          >
            home
          </a>
        </div>

        {/* <Dialog open={chatOpen} onOpenChange={setChatOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <HugeiconsIcon icon={MessageIcon} strokeWidth={2} />
              Chat Toggle
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Chat</DialogTitle>
              <DialogDescription>
                Chat functionality would be implemented here. For Q&A, start a chat.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                This is a placeholder for a chat interface. You can integrate your preferred chat solution here.
              </p>
            </div>
          </DialogContent>
        </Dialog> */}
      </div>
    </nav>
  );
}
