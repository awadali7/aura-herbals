"use client";

import { motion } from "framer-motion";
import { LuHeart, LuMail, LuPhone, LuInstagram } from "react-icons/lu";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-br from-[#1B1B1B] via-[#2D2D2D] to-[#1B1B1B] text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6A994E]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#FFCAD4]/5 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Aura Herbals"
                                width={48}
                                height={48}
                                className="rounded-xl"
                            />
                            <h3 className="font-playfair text-2xl font-bold">
                                Aura Herbals
                            </h3>
                        </div>
                        <p className="font-lora text-base opacity-90 leading-relaxed ">
                            Experience the pure power of nature for your hair
                            and scalp. Our rosemary water is crafted for those
                            who value natural beauty and effective care.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-montserrat font-bold text-lg mb-6">
                            Quick Links
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="#home"
                                className="block font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="#products"
                                className="block font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                Products
                            </a>
                            <a
                                href="#benefits"
                                className="block font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                Benefits
                            </a>
                            <a
                                href="#reviews"
                                className="block font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                Reviews
                            </a>
                            <a
                                href="#contact"
                                className="block font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-montserrat font-bold text-lg mb-6">
                            Contact
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:auraherbals006@gmail.com"
                                className="flex items-center justify-center md:justify-start gap-3 font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                <LuMail size={16} />
                                auraherbals006@gmail.com
                            </a>
                            <a
                                href="tel:9074934653"
                                className="flex items-center justify-center md:justify-start gap-3 font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                <LuPhone size={16} />
                                9074934653
                            </a>
                            <a
                                href="https://instagram.com/aura__herbals"
                                className="flex items-center justify-center md:justify-start gap-3 font-lora text-sm opacity-80 hover:text-[#6A994E] hover:opacity-100 transition-all duration-300"
                            >
                                <LuInstagram size={16} />
                                @aura__herbals
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                />

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="font-lora text-sm opacity-80 flex items-center justify-center md:justify-start gap-2">
                            © 2024 Aura Herbals. All rights reserved.
                        </p>
                    </div>

                    {/* Made with love */}
                    <div className="text-center md:text-right">
                        <p className="font-lora text-sm opacity-80 flex items-center justify-center md:justify-end gap-2">
                            Made with
                            <LuHeart
                                size={14}
                                className="text-[#FFCAD4] animate-pulse"
                            />
                            in India
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
