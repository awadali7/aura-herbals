"use client";

import { motion } from "framer-motion";
import { LuLeaf, LuSparkles } from "react-icons/lu";
import { handleWhatsAppClick } from "../utils/whatsapp";
import Image from "next/image";

const benefits = [
    {
        icon: (
            <Image
                src="/healthcare.png"
                alt="Healthcare"
                width={40}
                height={40}
                className="object-contain"
            />
        ),
        title: "Prevents Hair Fall",
        description:
            "Strengthens hair follicles and reduces breakage for healthier, fuller hair.",
    },
    {
        icon: (
            <Image
                src="/boost.png"
                alt="Boost"
                width={40}
                height={40}
                className="object-contain"
            />
        ),
        title: "Boosts Growth",
        description:
            "Stimulates hair follicles and promotes natural hair growth cycle.",
    },
    {
        icon: (
            <Image
                src="/frost.png"
                alt="Frost"
                width={40}
                height={40}
                className="object-contain"
            />
        ),
        title: "Cools Scalp",
        description:
            "Provides soothing relief and maintains optimal scalp temperature.",
    },
];

const ingredients = [
    {
        name: "Hibiscus",
        description: "Natural hair conditioner and growth promoter",
        image: "/hibiscus.png",
    },
    {
        name: "Betel Leaf",
        description: "Antimicrobial properties for scalp health",
        image: "/betel-leaf.png",
    },
    {
        name: "Fenugreek",
        description: "Rich in proteins for hair strength and shine",
        image: "/fenugreek.png",
    },
];

export default function ProductBenefits() {
    return (
        <section id="benefits" className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
                        <LuSparkles size={16} />
                        Natural Benefits
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#6A994E] mb-6 leading-tight">
                        Transform Your Hair
                        <br />
                        <span className="text-[#C1121F]">Naturally</span>
                    </h2>
                    <p className="font-lora text-xl text-[#1B1B1B] max-w-3xl mx-auto leading-relaxed opacity-90">
                        Experience the power of nature with our carefully
                        selected ingredients that work together to give you the
                        hair you deserve.
                    </p>
                </motion.div>
                {/* Benefits Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            className="bg-[#F4F3EF] rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                boxShadow:
                                    "0 20px 40px rgba(106, 153, 78, 0.1)",
                            }}
                        >
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-[#FFCAD4]/40 rounded-full flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="font-montserrat text-xl font-bold text-[#1B1B1B] mb-3">
                                {benefit.title}
                            </h3>
                            <p className="font-lora text-[#666] leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Ingredients Section */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-white via-[#F4F3EF] to-[#FFCAD4]/10 rounded-3xl p-8 sm:p-10  md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6A994E]/5 to-transparent rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#FFCAD4]/20 to-transparent rounded-full blur-2xl"></div>
                        </div>

                        {/* Header */}
                        <div className="text-center mb-16 relative z-10">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
                                <LuLeaf size={16} />
                                Pure Natural Ingredients
                            </div>
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#6A994E] mb-6">
                                Made with Nature&apos;s Finest
                            </h3>
                            <p className="font-lora text-xl text-[#1B1B1B] max-w-3xl mx-auto leading-relaxed opacity-90">
                                Our rosemary water is crafted using traditional
                                wisdom and the purest natural ingredients for
                                optimal hair care.
                            </p>
                        </div>

                        {/* Ingredients Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {ingredients.map((ingredient, index) => (
                                <motion.div
                                    key={ingredient.name}
                                    className="group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-[#6A994E]/30">
                                        {/* Ingredient icon */}
                                        <div className="flex justify-center mb-6">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 border-2 border-[#6A994E]/20">
                                                <Image
                                                    src={ingredient.image}
                                                    alt={ingredient.name}
                                                    width={32}
                                                    height={32}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        {/* Ingredient name */}
                                        <h4 className="font-montserrat text-xl font-bold text-[#6A994E] mb-3">
                                            {ingredient.name}
                                        </h4>

                                        {/* Description */}
                                        <p className="font-lora text-[#666] leading-relaxed">
                                            {ingredient.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <motion.div
                            className="text-center mt-12 relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                onClick={() => handleWhatsAppClick("inquiry")}
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6A994E] to-[#8FBC8F] text-white px-8 py-4 rounded-full font-montserrat font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LuLeaf size={20} />
                                Discover More Benefits
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
