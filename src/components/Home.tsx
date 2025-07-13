"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useMotionTemplate,
} from "framer-motion";
import { handleWhatsAppClick } from "../utils/whatsapp";

export default function Home() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const [isTouch, setIsTouch] = useState(false);
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);
    const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

    // Fix: use tagged template literal for useMotionTemplate
    const spotlightBg = useMotionTemplate`
      radial-gradient(ellipse 400px 300px at ${springX}% ${springY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 80%, transparent 100%)
    `;

    // Mouse move for spotlight
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isTouch) return;
        const rect = spotlightRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Touch move for spotlight
    const handleTouchMove = (e: React.TouchEvent) => {
        setIsTouch(true);
        const rect = spotlightRef.current?.getBoundingClientRect();
        if (!rect) return;
        const touch = e.touches[0];
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        const y = ((touch.clientY - rect.top) / rect.height) * 100;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <>
            <section
                id="home"
                ref={spotlightRef}
                className="relative min-h-screen flex items-center justify-center bg-[#F4F3EF] overflow-hidden"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* Framer Motion Spotlight */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                        background: spotlightBg,
                        mixBlendMode: "lighten",
                    }}
                />

                {/* Content */}
                <motion.div
                    className="relative z-20 flex flex-col md:flex-row items-center w-[90%] px-6 py-16 md:py-32"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <motion.h1
                            className="font-playfair text-3xl md:text-5xl font-bold text-[#6A994E] drop-shadow-lg leading-tight"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            <span className="relative inline-block">
                                Glow Naturally
                                <span className="absolute left-0 bottom-0 w-full h-2 bg-[#FFCAD4] rounded-full opacity-60 -z-10 animate-pulse"></span>
                            </span>
                            <br />
                            with{" "}
                            <span className="text-[#C1121F] font-lora">
                                Aura Herbals
                            </span>{" "}
                            Rosemary Water
                        </motion.h1>
                        <motion.p
                            className="font-lora text-lg md:text-2xl text-[#1B1B1B] mt-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            Pure, herbal care for radiant, healthy hair and
                            skin.
                        </motion.p>
                        <motion.button
                            onClick={() => handleWhatsAppClick("order")}
                            className="inline-block mt-8 px-8 py-4 bg-[#C1121F] text-white font-montserrat font-bold text-lg rounded-full shadow-lg transition-transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-[#FFCAD4]/60 animate-glow cursor-pointer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Buy Now @ ₹199
                        </motion.button>
                    </div>
                    {/* Product Image */}
                    <motion.div
                        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <div className="relative w-full  h-96 flex items-center justify-center mx-auto">
                            {/* Soft glassy/blurred ellipse backdrop */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[90%] h-[100%] bg-white/70 blur-lg rounded-3xl shadow-2xl" />
                            </div>
                            <Image
                                src="/herbs-bg.png"
                                alt="Aura Herbals Rosemary Water"
                                width={400}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                                priority
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </motion.div>
                <style jsx global>{`
                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        100% {
                            background-position: 100% 50%;
                        }
                    }
                    .animate-gradient {
                        background-size: 200% 200%;
                        animation: gradient 8s ease-in-out infinite alternate;
                    }
                    .animate-glow {
                        box-shadow: 0 0 24px 0 #ffcad4aa, 0 2px 8px 0 #c1121f22;
                        animation: pulse 2s infinite alternate;
                    }
                    @keyframes pulse {
                        0% {
                            box-shadow: 0 0 24px 0 #ffcad4aa,
                                0 2px 8px 0 #c1121f22;
                        }
                        100% {
                            box-shadow: 0 0 48px 8px #ffcad4cc,
                                0 4px 16px 0 #c1121f44;
                        }
                    }
                `}</style>
            </section>
        </>
    );
}
