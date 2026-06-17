import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Abstract Background Gradient */}
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-400 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 ease-in-out">
              Announcing our next generation platform.{" "}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-[64px] leading-tight text-navy font-bold font-jakarta tracking-tight">
              Welcome to <span className="text-[#0CBF83]">SoftMind Solutions</span> 
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Transforming your ideas into stunning digital realities. We build high-performance, modern, and engaging web applications tailored for your success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-full px-8 shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-105">
                Get started
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-all duration-300">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
