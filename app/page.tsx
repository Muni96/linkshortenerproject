import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Link2,
  BarChart3,
  Zap,
  ShieldCheck,
  Globe,
  MousePointerClick,
} from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Instant URL Shortening",
    description:
      "Paste any long URL and get a clean, compact link in seconds. Share it anywhere with ease.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "Track how many times your links are clicked and gain insights into your audience engagement.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Our redirects are optimised for speed so your visitors reach their destination without delay.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Every link is stored securely and monitored to ensure maximum uptime and trustworthiness.",
  },
  {
    icon: Globe,
    title: "Share Everywhere",
    description:
      "Short links work perfectly on social media, emails, print materials, and anywhere else you need them.",
  },
  {
    icon: MousePointerClick,
    title: "Easy Management",
    description:
      "View, edit, and delete all your links from one simple dashboard — no clutter, just control.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-24 text-center">
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            <Link2 className="size-3" />
            Free to get started
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Shorten links.
            <br />
            <span className="text-muted-foreground">Track results.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Turn long, unwieldy URLs into short, memorable links — and see
            exactly how they perform with built-in click analytics.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <SignUpButton mode="modal">
            <Button size="lg">Get started for free</Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </main>

      {/* Features */}
      <section className="border-t bg-muted/40 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need
            </h2>
            <p className="mt-3 text-muted-foreground">
              All the tools to create, manage, and measure your links in one
              place.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Link Shortener. All rights reserved.
      </footer>
    </div>
  );
}
