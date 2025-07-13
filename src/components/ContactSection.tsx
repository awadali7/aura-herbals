"use client";

import { motion } from "framer-motion";
import { LuMail, LuPhone, LuInstagram, LuMessageCircle } from "react-icons/lu";
import Image from "next/image";
import { handleWhatsAppClick } from "../utils/whatsapp";

const contactInfo = [
    {
        icon: <LuMail size={24} />,
        label: "Email",
        value: "auraherbals006@gmail.com",
        link: "mailto:auraherbals006@gmail.com",
    },
    {
        icon: <LuPhone size={24} />,
        label: "Phone",
        value: "9074934653",
        link: "tel:9074934653",
    },
    {
        icon: <LuInstagram size={24} />,
        label: "Instagram",
        value: "@aura__herbals",
        link: "https://instagram.com/aura__herbals",
    },
    {
        icon: <LuMessageCircle size={24} />,
        label: "WhatsApp",
        value: "9074934653",
        link: "https://wa.me/919074934653",
        action: "whatsapp",
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative flex items-center justify-center bg-[#F4F3EF] overflow-hidden py-12 md:py-20"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-[#6A994E]/10 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-24 md:w-48 h-24 md:h-48 bg-gradient-to-tr from-[#FFCAD4]/20 to-transparent rounded-full blur-xl md:blur-2xl"></div>
            </div>

            <div className="relative z-20 flex flex-col items-center w-[95%] md:w-[90%] px-4 md:px-6">
                {/* Centered Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#6A994E] mb-3 md:mb-4">
                        Let&apos;s Connect
                    </h2>
                    <p className="font-lora text-base md:text-lg text-[#1B1B1B] opacity-90 max-w-xs md:max-w-2xl mx-auto px-4 md:px-0">
                        Ready to start your hair care journey? Connect with us
                        through any of these channels.
                    </p>
                </motion.div>

                {/* Content Row - Contact Details and Image */}
                <div className="flex flex-col lg:flex-row items-center w-full gap-8 md:gap-12 lg:gap-16">
                    {/* Left Side - Contact Information */}
                    <motion.div
                        className="w-full lg:flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Contact Details */}
                        <div className="space-y-4 md:space-y-6">
                            {contactInfo.map((contact, index) => (
                                <motion.div
                                    key={contact.label}
                                    className="group block"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.2 + index * 0.1,
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 5 }}
                                >
                                    {contact.action === "whatsapp" ? (
                                        <button
                                            onClick={() =>
                                                handleWhatsAppClick("inquiry")
                                            }
                                            className="w-full text-left"
                                        >
                                            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/80 transition-all duration-300 group-hover:shadow-lg">
                                                {/* Icon */}
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#6A994E] to-[#8FBC8F] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                                                    <div className="text-white">
                                                        {contact.icon}
                                                    </div>
                                                </div>

                                                {/* Text */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-montserrat font-bold text-[#1B1B1B] text-sm md:text-lg mb-1 group-hover:text-[#6A994E] transition-colors duration-300 truncate">
                                                        {contact.label}
                                                    </h3>
                                                    <p className="font-lora text-[#666] text-xs md:text-sm break-all">
                                                        {contact.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    ) : (
                                        <a
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/80 transition-all duration-300 group-hover:shadow-lg">
                                                {/* Icon */}
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#6A994E] to-[#8FBC8F] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                                                    <div className="text-white">
                                                        {contact.icon}
                                                    </div>
                                                </div>

                                                {/* Text */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-montserrat font-bold text-[#1B1B1B] text-sm md:text-lg mb-1 group-hover:text-[#6A994E] transition-colors duration-300 truncate">
                                                        {contact.label}
                                                    </h3>
                                                    <p className="font-lora text-[#666] text-xs md:text-sm break-all">
                                                        {contact.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Photo */}
                    <motion.div
                        className="w-full lg:flex-1 flex justify-center mt-8 lg:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full max-w-sm md:max-w-md">
                            {/* Background decorative circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6A994E]/20 to-[#8FBC8F]/20 rounded-full blur-2xl md:blur-3xl"></div>

                            {/* Photo container */}
                            <motion.div
                                className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl md:shadow-2xl border border-white/30"
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden">
                                    <Image
                                        src="/square_image.jpeg"
                                        alt="Aura Herbals Contact"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Overlay text */}
                                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Image
                                            src="/logo.png"
                                            alt="Aura Herbals"
                                            width={20}
                                            height={20}
                                            className="rounded-lg"
                                        />
                                        <h3 className="font-playfair font-bold text-[#6A994E] text-sm md:text-lg">
                                            Aura Herbals
                                        </h3>
                                    </div>
                                    <p className="font-lora text-[#666] text-xs md:text-sm">
                                        Natural hair care solutions
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
