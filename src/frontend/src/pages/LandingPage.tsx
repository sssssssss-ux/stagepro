import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Image,
  Layers,
  Palette,
  Shield,
  Star,
  Upload,
  Wand2,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  navigate: (page: Page) => void;
}

const STYLE_CARDS = [
  { name: "Modern", emoji: "🏙️" },
  { name: "Minimalist", emoji: "⬜" },
  { name: "Scandinavian", emoji: "🌲" },
  { name: "Industrial", emoji: "🏭" },
  { name: "Bohemian", emoji: "🌿" },
  { name: "Luxury", emoji: "✨" },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Results",
    desc: "AI generates your staged room in seconds",
  },
  {
    icon: Palette,
    title: "Multiple Styles",
    desc: "Modern, Luxury, Scandinavian, Bohemian & more",
  },
  {
    icon: Image,
    title: "HD Quality",
    desc: "Photorealistic renders you can download",
  },
  {
    icon: Shield,
    title: "100 Free Stagings",
    desc: "Get started with 100 free AI stagings",
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function LandingPage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar navigate={navigate} currentPage="landing" />

      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 text-center px-6 overflow-hidden">
          {/* Purple glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.50 0.24 290 / 0.15) 0%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
              <Wand2 className="w-4 h-4" />
              100 Free AI Stagings — No Credit Card
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 max-w-4xl mx-auto">
              Transform Empty Spaces Into{" "}
              <span className="text-primary">Dream Homes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Upload a photo of any empty room and watch our AI instantly stage
              it with stunning furniture and decor. Perfect for real estate
              listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("staging")}
                size="lg"
                className="px-8 py-6 text-base font-semibold shadow-glow"
                data-ocid="hero.upload.primary_button"
              >
                <Upload className="mr-2 h-5 w-5" />
                Start Staging for Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-semibold border-border"
                onClick={() => navigate("dashboard")}
                data-ocid="hero.samples.secondary_button"
              >
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Mockup Showcase */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border shadow-card"
            style={{ background: "oklch(0.13 0.025 285)" }}
          >
            {/* Mockup top bar */}
            <div className="px-5 py-3 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="mx-auto text-xs font-medium text-muted-foreground">
                StagePro Design Studio
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-5 text-foreground">
                Your Design Journey
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Step 1 */}
                <div className="rounded-xl border-2 border-dashed border-border p-6 flex flex-col items-center justify-center gap-3 min-h-40">
                  <Upload className="h-8 w-8 text-primary" />
                  <p className="font-semibold text-sm text-foreground">
                    1. Upload Photo
                  </p>
                  <p className="text-xs text-center text-muted-foreground">
                    Drop your room image here
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-xl p-4 bg-secondary">
                  <p className="font-semibold text-sm mb-3 text-foreground">
                    2. Select Style
                  </p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {STYLE_CARDS.map((s, i) => (
                      <div
                        key={s.name}
                        className="rounded-lg p-2 text-center text-xs font-medium border border-border"
                        style={{
                          background:
                            i === 0
                              ? "oklch(0.50 0.24 290)"
                              : "oklch(0.18 0.03 285)",
                          color: i === 0 ? "white" : "oklch(0.75 0.04 285)",
                        }}
                      >
                        <div className="text-lg mb-0.5">{s.emoji}</div>
                        {s.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="rounded-xl overflow-hidden border border-border">
                  <p className="font-semibold text-sm p-3 bg-secondary text-foreground">
                    3. AI Results
                  </p>
                  <div className="relative">
                    <img
                      src="/assets/generated/room-before.dim_800x500.jpg"
                      alt="Before"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary shadow-glow flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After preview */}
              <div className="mt-4 rounded-xl overflow-hidden relative border border-border">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src="/assets/generated/room-before.dim_800x500.jpg"
                      alt="Before"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold bg-background/80 text-foreground">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/assets/generated/room-after.dim_800x500.jpg"
                      alt="After"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold bg-primary text-white">
                      After
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/60">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features + Testimonials */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
                Key Features
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {FEATURES.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="font-semibold text-sm mb-1 text-foreground">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
                Success Stories
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                  <img
                    src="/assets/generated/success-bedroom.dim_400x280.jpg"
                    alt="Luxury bedroom"
                    className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {STARS.map((n) => (
                        <Star
                          key={n}
                          className="h-3 w-3 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      &ldquo;Completely transformed my listing!&rdquo;
                    </p>
                    <p className="text-xs mt-1 text-muted-foreground">
                      Sarah K. — Dark navy &amp; gold luxury redesign
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                  <img
                    src="/assets/generated/success-kitchen.dim_400x280.jpg"
                    alt="Industrial kitchen"
                    className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {STARS.map((n) => (
                        <Star
                          key={n}
                          className="h-3 w-3 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      &ldquo;The industrial look is perfect!&rdquo;
                    </p>
                    <p className="text-xs mt-1 text-muted-foreground">
                      Marcus T. — Industrial loft kitchen redesign
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-muted-foreground">
                    Over 50,000 rooms staged worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center rounded-2xl py-16 px-8 bg-card border border-border"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, oklch(0.50 0.24 290 / 0.12) 0%, oklch(0.13 0.025 285) 70%)",
            }}
          >
            <Wand2 className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
              Ready to Transform Your Space?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Upload your room photo and experience AI-powered virtual staging
              for free.
            </p>
            <Button
              onClick={() => navigate("staging")}
              size="lg"
              className="px-10 py-6 text-base font-semibold shadow-glow"
              data-ocid="cta.start.primary_button"
            >
              Start Staging Now — It&apos;s Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
