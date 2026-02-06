export default function UI() {
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
            <div className="absolute top-8 right-8 pointer-events-auto">
                <a
                    href="/resume.pdf"
                    download="Varshith_Reddy_Resume.pdf"
                    className="group flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                    <span className="text-sm font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">Resume</span>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                        <svg className="w-4 h-4 text-cyan-500 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Dynamic Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 select-none">
                <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </div>
    )
}
