import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background font-sans">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          ricardohq.com — coming soon
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Building something great. Stay tuned.
        </p>
        <Button size="lg" variant="default">
          Learn More
        </Button>
      </main>
    </div>
  );
}
