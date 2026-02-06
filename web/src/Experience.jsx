import { ScrollControls, Scroll, Image, Float, Stars, Sparkles, RoundedBox, useScroll, useTexture } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { user, projects, certificates, skills, contact, education } from './data'

export default function Experience() {
    const { width, height } = useThree((state) => state.viewport)

    // 7.5 pages - fully reveal Contact and Profiles section
    const pages = 7.5

    return (
        <>
            <color attach="background" args={['#010101']} />

            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} color="#00eeee" />
            <spotLight position={[-10, -10, -10]} angle={0.2} penumbra={1} intensity={1} color="#ff00ff" />
            <ambientLight intensity={0.3} />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
            <Sparkles count={200} scale={15} size={2} speed={0.2} opacity={0.3} noise={0.1} color="#ffffff" />

            <ScrollControls pages={pages} damping={0.1}>

                {/* 3D DECORATIVE LAYER */}
                <Scroll>
                    {/* Page 1: Hero Photo */}
                    <Section3D offset={0}>
                        <group position={[width * 0.25, 0, 0]}>
                            <HeroPhoto />
                        </group>
                    </Section3D>
                </Scroll>

                {/* HTML LAYER */}
                <Scroll html className="w-full text-white">

                    {/* HERO */}
                    <section className="h-screen w-full flex items-center px-10 sm:px-32">
                        <div className="max-w-2xl">
                            <p className="text-cyan-400 font-mono tracking-widest mb-4 uppercase text-sm">Hello, I'm</p>
                            <h1 className="text-6xl sm:text-8xl font-bold mb-6 tracking-tight">
                                {user.name.split(' ').map((n, i) => (
                                    <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-orange-400" : ""}>{n} </span>
                                ))}
                            </h1>
                            <p className="text-2xl sm:text-3xl font-semibold mb-8">
                                <span className="text-cyan-400">Data Analyst</span> <span className="text-gray-600">&</span> <span className="text-orange-400">Developer</span>
                            </p>
                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg mb-10 border-l-2 border-zinc-800 pl-6">
                                {user.summary}
                            </p>
                        </div>
                    </section>

                    {/* EDUCATION */}
                    <section className="min-h-screen py-32 px-10 sm:px-32">
                        <div className="text-center mb-20">
                            <p className="text-orange-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Academic Background</p>
                            <h2 className="text-5xl font-bold mb-6">Education</h2>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-8">
                            {education.map((edu, index) => (
                                <div key={edu.id} className="group relative">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-fuchsia-500 rounded-full"></div>
                                    <div className="pl-12 pb-8">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-cyan-400 absolute left-[-5px] top-2"></div>
                                            <span className="text-sm font-mono text-cyan-400">{edu.period}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
                                        <p className="text-xl text-gray-300 mb-1">{edu.institution}</p>
                                        <p className="text-gray-500 mb-3">{edu.location}</p>
                                        <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg">
                                            <span className="text-orange-400 font-bold">{edu.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section className="min-h-screen py-32 px-10 sm:px-20 bg-black/40">
                        <div className="text-center mb-20">
                            <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
                            <h2 className="text-5xl font-bold mb-6">Featured <span className="text-fuchsia-400">Projects</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {projects.map(p => (
                                <div key={p.id} className="group bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
                                    <span className="text-xs font-mono text-cyan-400/80 mb-4 block">{p.date}</span>
                                    <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden">{p.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tech.map(t => <span key={t} className="text-[10px] uppercase px-3 py-1 bg-zinc-800 border border-zinc-700 text-cyan-400 rounded-full">{t}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SKILLS */}
                    <section className="min-h-screen py-32 px-10 sm:px-32 flex flex-col md:flex-row gap-24">
                        <div className="flex-1">
                            <p className="text-fuchsia-400 font-mono text-xs uppercase mb-4">Expertise</p>
                            <h2 className="text-5xl font-bold mb-12">Technical Skills</h2>
                            <div className="space-y-10">
                                {skills.map(s => (
                                    <div key={s.name}>
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="flex items-center gap-3">
                                                {s.logo && <img src={s.logo} alt={s.name} className="w-8 h-8 object-contain" />}
                                                <span className="text-xl font-medium">{s.name}</span>
                                            </div>
                                            <span style={{ color: s.color }}>{s.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full transition-all" style={{ width: `${s.level}%`, backgroundColor: s.color }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 hidden md:block">
                            {/* Decorative 3D element placeholder space */}
                        </div>
                    </section>

                    {/* CERTIFICATIONS & WORKSHOPS */}
                    <section className="min-h-screen py-32 px-10 sm:px-20 bg-black/60">
                        <div className="text-center mb-16">
                            <p className="text-orange-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Credentials</p>
                            <h2 className="text-5xl font-bold mb-6">Certifications & <span className="text-cyan-400">Workshops</span></h2>
                            <p className="text-zinc-500">Click to view the full certificate</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {certificates.map((c, i) => (
                                <a
                                    key={c.id}
                                    href={c.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all hover:bg-zinc-800/80"
                                >
                                    <div className="w-full aspect-[4/3] mb-4 bg-zinc-950 rounded-lg overflow-hidden flex items-center justify-center relative">
                                        {c.type === 'image' ? (
                                            <img src={c.src} alt={c.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-2">
                                                <svg className="w-12 h-12 text-zinc-700 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7h-4V4l4 5z" /></svg>
                                                <span className="text-[10px] font-mono text-zinc-600 uppercase">PDF Certificate</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                                            <span className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full">View Full</span>
                                        </div>
                                    </div>
                                    <h4 className="text-sm font-bold group-hover:text-white transition-colors mb-1 line-clamp-1">{c.title}</h4>
                                    <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">{c.issuer}</p>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* PROFILES & CONTACT */}
                    <section className="min-h-screen py-32 px-10 sm:px-32 flex flex-col gap-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Coding Profiles */}
                            <div>
                                <p className="text-cyan-400 font-mono text-xs uppercase mb-4">Challenge</p>
                                <h2 className="text-5xl font-bold mb-12">Coding Profiles</h2>
                                <div className="space-y-6">
                                    {contact.coding.map(profile => (
                                        <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className="block group">
                                            <div className="flex items-center justify-between p-6 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-cyan-400 transition-all duration-300">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl group-hover:text-cyan-400 transition-colors">
                                                        {profile.name === 'LeetCode' ? 'L' : 'H'}
                                                    </div>
                                                    <span className="text-xl font-bold">{profile.name}</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                                                    <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Socials & Connect */}
                            <div>
                                <p className="text-fuchsia-400 font-mono text-xs uppercase mb-4">Connect</p>
                                <h2 className="text-5xl font-bold mb-12">Social & Reach</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        {contact.socials.map(social => (
                                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                                                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all duration-300 group-hover:-translate-y-1">
                                                    {social.name === 'GitHub' ? 'G' : 'In'}
                                                </div>
                                                <span className="text-xs font-mono text-zinc-500 group-hover:text-fuchsia-400 transition-colors">{social.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="space-y-4 pt-4 border-t border-zinc-800">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-cyan-400 border border-zinc-800">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-mono text-zinc-500 uppercase">Email Me</p>
                                                <a href={`mailto:${contact.email}`} className="text-lg font-bold hover:text-cyan-400 transition-colors">{contact.email}</a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-orange-400 border border-zinc-800">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-mono text-zinc-500 uppercase">Call Me</p>
                                                <a href={`tel:${contact.phone}`} className="text-lg font-bold hover:text-orange-400 transition-colors">{contact.phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Footer */}
                        <div className="pt-24 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-xs font-mono tracking-widest uppercase">
                            <p>© 2026 {user.name}</p>
                            <p>Built with React & ThreeJS</p>
                        </div>
                    </section>

                </Scroll>

            </ScrollControls>
        </>
    )
}

function Section3D({ children, offset }) {
    const { height } = useThree((state) => state.viewport)
    return <group position={[0, -height * offset, 0]}>{children}</group>
}

function HeroPhoto() {
    const meshRef = useRef()
    const glowRef = useRef()
    const texture = useTexture(user.photo)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.position.y = Math.sin(t * 1.5) * 0.1
        glowRef.current.scale.setScalar(1 + Math.sin(t * 4) * 0.05)
    })
    return (
        <group>
            <mesh ref={glowRef}><circleGeometry args={[1.7, 64]} /><meshBasicMaterial color="#00eeee" transparent opacity={0.1} /></mesh>
            <mesh position={[0, 0, -0.01]}><circleGeometry args={[1.55, 64]} /><meshBasicMaterial color="#00eeee" toneMapped={false} /></mesh>
            <group ref={meshRef}>
                <mesh>
                    <circleGeometry args={[1.5, 64]} />
                    <meshBasicMaterial map={texture} toneMapped={false} />
                </mesh>
            </group>
        </group>
    )
}
