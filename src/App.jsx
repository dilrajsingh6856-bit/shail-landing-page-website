import {
  ArrowRight,
  ChevronRight,
  Circle,
  Sparkles,
} from 'lucide-react'
import { TextGlitch } from './components/TextGlitch.jsx'
import ASMRBackground from './components/ASMRBackground.jsx'

export default function ShailLandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-white selection:text-black">
      <BackgroundGrid />

      <HeroSection />

      <FragmentationSection />

      <WorkflowSection />

      <PhilosophySection />

      <PricingSection />

      <FinalCTA />
    </main>
  )
}

function BackgroundGrid() {
  return (
    <div className="fixed inset-0 opacity-[0.045] pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24 overflow-hidden">
      {/* Dynamic kinetic particle background */}
      <ASMRBackground />

      <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-6 py-3 mb-10 bg-white/[0.02] backdrop-blur-sm">
            <Circle className="w-2 h-2 fill-cyan-300 text-cyan-300" />

            <span className="text-[12px] tracking-[0.28em] uppercase text-cyan-200/90">
              Workflow Continuity Runtime
            </span>
          </div>

          <div className="leading-[0.88] tracking-[-0.08em] font-semibold text-[64px] sm:text-[88px] lg:text-[112px]">
            <TextGlitch text="STOP" delay={0.0} />
            <TextGlitch text="RE-" delay={0.1} />
            <TextGlitch text="EXPLAINING" delay={0.2} />
            <TextGlitch text="YOUR" gradientClass="from-cyan-300 to-cyan-200" delay={0.3} />
            <TextGlitch text="WORK." delay={0.4} />
          </div>

          <p className="mt-10 text-[18px] md:text-[22px] leading-[1.7] text-white/58 max-w-[620px] font-light">
            SHAIL makes your AI tools remember context,
            decisions, workflows, and intent — across ChatGPT,
            Claude, Cursor, browsers, cloud data, and local systems.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="h-14 px-8 bg-white text-black rounded-full text-[15px] font-medium hover:opacity-90 transition-all duration-300">
              Join Waitlist
            </button>

            <button className="h-14 px-8 border border-white/10 rounded-full text-[15px] text-white/72 hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-2">
              Watch Runtime
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative h-[760px] hidden lg:block">
          <div className="absolute left-0 top-0 w-[46%] h-full">
            <ChaosPanel />
          </div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="w-px h-[520px] bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent" />

              <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan-200" />
                </div>

                <div className="text-center">
                  <div className="text-[12px] uppercase tracking-[0.26em] text-white/38">
                    SHAIL
                  </div>

                  <div className="text-[14px] text-white/60 mt-1">
                    Continuity Runtime
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-[48%] h-full">
            <ProductPanel />
          </div>
        </div>
      </div>
    </section>
  )
}

function ChaosPanel() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent rounded-[40px]" />

      <div className="space-y-5 w-full max-w-[360px]">
        {[
          'project_context_final_v2.md',
          'copy this into Claude',
          'where did i save that prompt?',
          'memory.md',
          'ChatGPT conversation #12',
          're-explaining architecture...',
        ].map((item, i) => (
          <div
            key={i}
            className="border border-white/8 bg-white/[0.025] rounded-2xl px-5 py-4 backdrop-blur-sm"
          >
            <div className="text-[13px] text-white/40 mb-2 uppercase tracking-[0.18em]">
              Fragment
            </div>

            <div className="text-[15px] text-white/75">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductPanel() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-[0_0_120px_rgba(255,255,255,0.04)]">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
          alt="SHAIL Runtime"
          className="w-[720px] h-auto object-cover"
          fetchPriority="high"
        />
      </div>
    </div>
  )
}

function FragmentationSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[760px]">
          <div className="text-[12px] uppercase tracking-[0.26em] text-white/38 mb-6">
            Fragmentation
          </div>

          <h2 className="text-[44px] md:text-[68px] tracking-[-0.06em] leading-[0.95] font-semibold">
            Modern work breaks continuity.
          </h2>

          <p className="mt-8 text-[20px] leading-[1.8] text-white/58 max-w-[700px]">
            Every tool reset breaks momentum.
            Every lost session interrupts thought.
            Every repeated explanation slows cognition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-24">
          {[
            {
              title: 'Founders',
              desc: 'Re-explaining startup context across AI tools.',
            },
            {
              title: 'Developers',
              desc: 'Losing debugging continuity between sessions.',
            },
            {
              title: 'Researchers',
              desc: 'Fragmented notes, citations, and discoveries.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/8 rounded-[28px] p-10 bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="text-[13px] uppercase tracking-[0.24em] text-white/34 mb-6">
                {item.title}
              </div>

              <div className="text-[30px] tracking-[-0.04em] leading-[1.1] font-medium text-white/92">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkflowSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-20 border-t border-white/6">
      <div className="max-w-[1500px] mx-auto space-y-40">
        <WorkflowBlock
          eyebrow="Capture"
          title="Capture continuity automatically."
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
        />

        <WorkflowBlock
          eyebrow="Retrieve"
          title="Retrieve the right context instantly."
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop"
          reverse={true}
        />

        <WorkflowBlock
          eyebrow="Inject"
          title="Give AI the missing continuity."
          image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </section>
  )
}

function WorkflowBlock({ eyebrow, title, image, reverse }) {
  return (
    <div
      className={
        reverse
          ? 'grid lg:grid-cols-2 gap-20 items-center lg:[&>*:first-child]:order-2'
          : 'grid lg:grid-cols-2 gap-20 items-center'
      }
    >
      <div>
        <div className="text-[12px] uppercase tracking-[0.26em] text-cyan-200/70 mb-6">
          {eyebrow}
        </div>

        <h3 className="text-[42px] md:text-[64px] tracking-[-0.06em] leading-[0.94] font-semibold max-w-[620px]">
          {title}
        </h3>

        <p className="mt-8 text-[19px] leading-[1.8] text-white/56 max-w-[560px]">
          SHAIL preserves continuity across your workflow —
          capturing context, retrieving relevant memory, and
          restoring momentum across sessions.
        </p>

        <button className="mt-10 flex items-center gap-3 text-white/84 hover:text-white transition-colors">
          Explore Runtime
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#090909] shadow-[0_0_120px_rgba(255,255,255,0.03)]">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function PhilosophySection() {
  return (
    <section className="relative py-48 px-6 md:px-12 lg:px-20 border-t border-white/6">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="text-[12px] uppercase tracking-[0.28em] text-white/36 mb-8">
          Philosophy
        </div>

        <h2 className="text-[52px] md:text-[88px] leading-[0.94] tracking-[-0.07em] font-semibold">
          Technology should preserve thought.
        </h2>

        <p className="mt-12 text-[22px] leading-[1.9] text-white/58 max-w-[880px] mx-auto font-light">
          Modern AI tools are powerful.
          But every reset breaks momentum.
          Every missing context switch interrupts thinking.
          SHAIL exists to preserve continuity across your digital workflow.
        </p>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-20 border-t border-white/6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="text-[12px] uppercase tracking-[0.26em] text-white/38 mb-6">
            Pricing
          </div>

          <h2 className="text-[48px] md:text-[72px] tracking-[-0.06em] leading-[0.96] font-semibold">
            Start with continuity.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Free',
              price: '$0',
              cta: 'Join Waitlist',
            },
            {
              title: 'Pro',
              price: '$19',
              cta: 'Coming Soon',
            },
            {
              title: 'Enterprise',
              price: 'Custom',
              cta: 'Talk to Founder',
            },
          ].map((tier, i) => (
            <div
              key={i}
              className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10"
            >
              <div className="text-[14px] uppercase tracking-[0.22em] text-white/38 mb-10">
                {tier.title}
              </div>

              <div className="text-[68px] tracking-[-0.07em] font-semibold leading-none">
                {tier.price}
              </div>

              <button className="mt-12 h-14 w-full rounded-full bg-white text-black font-medium hover:opacity-90 transition-all duration-300">
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative py-48 px-6 md:px-12 lg:px-20 border-t border-white/6">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-[54px] md:text-[96px] tracking-[-0.08em] leading-[0.9] font-semibold">
          Your  tools  should  remember  your  work.
        </h2>

        <p className="mt-10 text-[22px] leading-[1.8] text-white/56 max-w-[760px] mx-auto">
        GET THE FLOW now!! 
        </p>

        <button className="mt-14 h-16 px-10 rounded-full bg-white text-black text-[16px] font-medium hover:opacity-90 transition-all duration-300">
          Join Waitlist
        </button>
      </div>
    </section>
  )
}
