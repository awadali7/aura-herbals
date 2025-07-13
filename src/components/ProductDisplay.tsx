"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuLeaf } from "react-icons/lu";
import { handleWhatsAppClick } from "../utils/whatsapp";

const features = [
    {
        icon: (
            <Image
                src="/planet-earth.png"
                alt="Natural"
                width={20}
                height={20}
                className="object-contain"
            />
        ),
        label: "Natural",
    },
    {
        icon: (
            <Image
                src="/non-toxic.png"
                alt="No Chemicals"
                width={20}
                height={20}
                className="object-contain"
            />
        ),
        label: "No Chemicals",
    },
    {
        icon: (
            <Image
                src="/anti-dandruff.png"
                alt="Prevents Dandruff"
                width={80}
                height={80}
                className="object-contain"
            />
        ),
        label: "Prevents Dandruff",
    },
];

export default function ProductDisplay() {
    return (
        <section
            id="products"
            className=" py-20 bg-[#F4F3EF] flex flex-col items-center justify-center"
        >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
                <LuLeaf size={16} />
                Premium Natural Care
            </div>
            <section className="w-full flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full px-4 md:px-8">
                    {/* Product Image with glassy/blurred highlight and hover zoom */}
                    <div className="relative flex-1 flex justify-center items-center">
                        {/* Glassy/blurred ellipse */}
                        <motion.div
                            className="relative w-60 h-80 md:w-80 md:h-[28rem] z-10"
                            whileHover={{
                                scale: 1.07,
                                y: -8,
                                boxShadow: "0 8px 32px 0 #c1121f22",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 24,
                            }}
                        >
                            <Image
                                src="/product-img-1.jpeg" // Replace with your product image
                                alt="Aura Herbals Rosemary Water"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                    {/* Product Details */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#6A994E] leading-tight">
                                Aura Herbals Rosemary Water
                            </h2>
                        </div>
                        <p className="font-lora text-lg md:text-xl text-[#1B1B1B] max-w-md">
                            Experience the pure power of nature for your hair
                            and scalp. Our rosemary water is crafted for those
                            who value natural beauty and effective care.
                        </p>
                        {/* Features */}
                        <div className="flex gap-6 mt-2">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.label}
                                    className="flex flex-col items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.2 + i * 0.1,
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f7f7f7]  text-2xl md:text-3xl mb-1 ">
                                        {f.icon}
                                    </span>
                                    <span className="font-montserrat text-xs md:text-sm text-[#666] mt-1 tracking-wide">
                                        {f.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        {/* Price and CTA */}
                        <div className="max-md:w-full mt-6">
                            <motion.button
                                onClick={() => handleWhatsAppClick("order")}
                                className="inline-block px-8 max-md:w-full py-3 bg-[#6A994E] text-white font-montserrat font-bold text-base md:text-lg rounded-full shadow-lg transition-transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-[#FFCAD4]/60 cursor-pointer"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Buy Now
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
