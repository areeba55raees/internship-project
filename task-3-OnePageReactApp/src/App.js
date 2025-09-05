import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  CalendarCheck2,
  ListChecks,
  BellRing,
  ShieldCheck,
  Quote,
  Star,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>
    {children}
  </section>
);
// Feature Card Component made cause it is reused multiple times in Feature section
const FeatureCard = ({ Icon, title, description, index }) => (
  <Reveal delay={0.05 * index}>
    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-xl bg-indigo-50 grid place-content-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  </Reveal>
);

// Testimonial Card Component made cause it is reused multiple times in Testimonial section
const Testimonial = ({ quote, name, role, index }) => (
  <Reveal delay={0.05 * index}>
    <figure className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
      <Quote className="h-6 w-6 text-indigo-500 mb-3" />
      <blockquote className="text-slate-700 leading-relaxed">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold text-slate-900">{name}</span>
        <span className="text-slate-500"> · {role}</span>
      </figcaption>
    </figure>
  </Reveal>
);

// Price Card Component made cause it is reused multiple times
const PriceCard = ({ name, price, features, highlighted, index }) => (
  <Reveal delay={0.05 * index}>
    <div
      className={`rounded-2xl border p-6 shadow-sm bg-white/80 backdrop-blur flex flex-col ${{
        true: "border-indigo-300 ring-1 ring-indigo-100",
        false: "border-slate-200 hover:ring-1 hover:ring-indigo-300"
      }[highlighted ? "true" : "false"]}`}
    >
      <h3 className="text-slate-900 font-semibold text-lg">{name}</h3>
      <div className="mt-2 mb-4">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        <span className="text-slate-500">/mo</span>
      </div>
      <ul className="space-y-2 text-sm text-slate-700 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-auto inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
          highlighted
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        Choose {name}
      </button>
    </div>
  </Reveal>
);

function TaskFlowLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 grid place-content-center rounded-lg bg-indigo-600 text-white">TF</div>
            <span className="hidden sm:block">TaskFlow</span>
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#testimonials" className="hover:text-indigo-600">Reviews</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <a href="#pricing" className="inline-flex rounded-xl bg-indigo-600 text-white text-sm font-semibold px-3 py-2 hover:bg-indigo-700">
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <Section id="hero" className="pt-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16">
          <Reveal>
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-indigo-700 bg-indigo-50 px-2 py-1 rounded">
                Organize better. Do more.
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                Meet <span className="text-indigo-600">TaskFlow</span> — your daily
                task manager
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                Capture tasks, set priorities, and stay focused. TaskFlow keeps your
                day simple, clear, and productive across all your devices.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex justify-center items-center rounded-xl px-4 py-3 bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                  Start Free
                </a>
                <a href="#features" className="inline-flex justify-center items-center rounded-xl px-4 py-3 border border-slate-300 font-semibold hover:bg-slate-50">
                  See Features
                </a>
              </div>
              <div className="mt-6 flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                <span className="ml-2 text-sm text-slate-600">Loved by 10k+ users</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-indigo-100 blur-2xl" />
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <ul className="space-y-3">
                  {[
                    "📌 Plan sprint tasks",
                    "✅ Check today’s priorities",
                    "🔔 Review reminders",
                    "🧩 Drag to reorder"
                  ].map((t, i) => (
                    <li key={i} className="rounded-xl border border-slate-200 p-3 hover:bg-slate-50">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="py-16">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Stay on top of everything</h2>
        </Reveal>
        <p className="max-w-2xl mx-auto text-center text-slate-600 mt-3">
          Powerful features that keep you organized and in control of your day.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            Icon={CalendarCheck2}
            title="Smart Scheduling"
            description="Auto‑schedule tasks by priority and available time blocks."
            index={0}
          />
          <FeatureCard
            Icon={ListChecks}
            title="Kanban & Lists"
            description="Switch between simple lists and Kanban boards anytime."
            index={1}
          />
          <FeatureCard
            Icon={BellRing}
            title="Reminders & Focus"
            description="Set reminders and enable focus mode to beat distractions."
            index={2}
          />
          <FeatureCard
            Icon={ShieldCheck}
            title="Sync & Backup"
            description="Your data stays safe and synced across all devices."
            index={3}
          />
          <FeatureCard
            Icon={Check}
            title="Templates"
            description="Start faster with ready‑made templates for recurring work."
            index={4}
          />
          <FeatureCard
            Icon={Star}
            title="Insights"
            description="Weekly activity reports help you improve productivity."
            index={5}
          />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" className="py-16">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">What users say</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Testimonial
            quote="TaskFlow cut my planning time in half. The focus mode is a game changer."
            name="Aisha K."
            role="Frontend Developer"
            index={0}
          />
          <Testimonial
            quote="Our team loves the Kanban boards. Simple, fast, and beautiful."
            name="Hassan R."
            role="Product Manager"
            index={1}
          />
          <Testimonial
            quote="Reminders keep me on track. I finally end my day with an empty list!"
            name="Sana M."
            role="Student"
            index={2}
          />
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" className="py-16">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Simple pricing</h2>
        </Reveal>
        <p className="max-w-2xl mx-auto text-center text-slate-600 mt-3">
          Start free. Upgrade when you need advanced features.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <PriceCard
            name="Free"
            price="$0"
            features={[
              "Up to 3 projects",
              "Basic reminders",
              "Mobile & web access"
            ]}
            highlighted={false}
            index={0}
          />
          <PriceCard
            name="Pro"
            price="$9"
            features={[
              "Unlimited projects",
              "Kanban boards",
              "Focus mode & templates",
              "Priority support"
            ]}
            highlighted
            index={1}
          />
          <PriceCard
            name="Team"
            price="$19"
            features={[
              "All Pro features",
              "Team spaces & roles",
              "Admin controls",
              "Advanced reports"
            ]}
            highlighted={false}
            index={2}
          />
        </div>
      </Section>

      {/* FOOTER */}
      <footer id="contact" className="mt-20 border-t border-slate-200 bg-white/60">
        <Section className="py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 grid place-content-center rounded-lg bg-indigo-600 text-white">TF</div>
              <span className="font-semibold">TaskFlow</span>
              <span className="text-slate-500 text-sm">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-600 hover:text-indigo-600 inline-flex items-center gap-2">
                <Mail className="h-5 w-5" /> Contact
              </a>
              <a href="#" className="text-slate-600 hover:text-indigo-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-indigo-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
export default TaskFlowLanding;
