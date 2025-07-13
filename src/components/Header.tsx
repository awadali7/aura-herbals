"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LuX,
    LuPackage,
    LuSparkles,
    LuMessageSquare,
    LuPhone,
} from "react-icons/lu";
import { handleWhatsAppClick } from "../utils/whatsapp";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home", icon: <LuPackage size={18} /> },
    { name: "Products", href: "#products", icon: <LuPackage size={18} /> },
    { name: "Benefits", href: "#benefits", icon: <LuSparkles size={18} /> },
    { name: "Reviews", href: "#reviews", icon: <LuMessageSquare size={18} /> },
    { name: "Contact", href: "#contact", icon: <LuPhone size={18} /> },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        // Prevent body scroll when menu is open
        if (typeof document !== "undefined") {
            if (!menuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
        if (typeof document !== "undefined") {
            document.body.style.overflow = "unset";
        }
    };

    return (
        <header className="w-full bg-[#F4F3EF] px-6 md:px-12 py-4 flex items-center justify-between z-50 relative">
            {/* Brand Name */}
            <Link
                href="#home"
                className="font-playfair text-2xl md:text-3xl font-bold text-[#6A994E] tracking-tight"
            >
                <Image
                    src="/logo.png"
                    alt="Aura Herbals"
                    width={100}
                    height={100}
                />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="font-montserrat text-base text-[#1B1B1B] hover:text-[#C1121F] transition px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
                    >
                        {link.name}
                    </Link>
                ))}
                <button
                    onClick={() => handleWhatsAppClick("order")}
                    className="ml-4 px-5 py-2 bg-[#C1121F] text-white rounded-full font-montserrat font-bold shadow hover:bg-[#a30e18] transition cursor-pointer"
                >
                    Buy Now
                </button>
            </nav>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden relative w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6A994E]/50"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <motion.div
                    animate={menuOpen ? "open" : "closed"}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-1"
                >
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 6 },
                        }}
                        className="block w-5 h-0.5 bg-[#6A994E] rounded-full origin-center"
                    />
                    <motion.span
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        className="block w-5 h-0.5 bg-[#6A994E] rounded-full"
                    />
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -6 },
                        }}
                        className="block w-5 h-0.5 bg-[#6A994E] rounded-full origin-center"
                    />
                </motion.div>
            </button>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                            onClick={closeMenu}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 300,
                                duration: 0.4,
                            }}
                            className="fixed top-4 right-4 left-4 bottom-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl z-50 md:hidden overflow-hidden"
                        >
                            {/* Menu Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/30">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/logo.png"
                                        alt="Aura Herbals"
                                        width={32}
                                        height={32}
                                        className="rounded-xl"
                                    />
                                    <h3 className="font-playfair text-lg font-bold text-[#6A994E]">
                                        Aura Herbals
                                    </h3>
                                </div>
                                <button
                                    onClick={closeMenu}
                                    className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                                >
                                    <LuX size={16} className="text-[#6A994E]" />
                                </button>
                            </div>

                            {/* Menu Content */}
                            <div className="flex-1 p-6 overflow-y-auto">
                                {/* Navigation Links */}
                                <nav className="space-y-3 mb-8">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: index * 0.08,
                                                duration: 0.4,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={closeMenu}
                                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 hover:border-[#6A994E]/30 hover:shadow-lg transition-all duration-300 group"
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-br from-[#6A994E] to-[#8FBC8F] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                                    <div className="text-white">
                                                        {link.icon}
                                                    </div>
                                                </div>
                                                <span className="font-montserrat font-medium text-[#1B1B1B] group-hover:text-[#6A994E] transition-colors duration-300">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* CTA Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className="space-y-4"
                                >
                                    {/* Buy Now Button */}
                                    <button
                                        onClick={() => {
                                            handleWhatsAppClick("order");
                                            closeMenu();
                                        }}
                                        className="block w-full py-4 bg-gradient-to-r from-[#C1121F] to-[#a30e18] text-white font-montserrat font-semibold text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                    >
                                        Buy Now @ ₹199
                                    </button>

                                    {/* Contact Info */}
                                    <div className="p-4 bg-white/50 rounded-2xl border border-white/40">
                                        <h4 className="font-montserrat font-semibold text-[#6A994E] mb-3 text-sm">
                                            Quick Contact
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            <a
                                                href="mailto:auraherbals006@gmail.com"
                                                className="block text-[#1B1B1B] hover:text-[#C1121F] transition-colors duration-200"
                                            >
                                                auraherbals006@gmail.com
                                            </a>
                                            <a
                                                href="tel:9074934653"
                                                className="block text-[#1B1B1B] hover:text-[#C1121F] transition-colors duration-200"
                                            >
                                                +91 9074934653
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
