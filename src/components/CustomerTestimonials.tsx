"use client";
import { motion } from "framer-motion";
import { LuQuote, LuStar } from "react-icons/lu";

const testimonials = [
    {
        name: "Lakshmi Nair",
        quote: "Aura Herbals എന്റെ മുടി മാറ്റി! രോസ്മരി വാട്ടർ കൊണ്ട് മുടി ഉതിർച്ച കുറഞ്ഞു.",
        rating: 5,
        location: "Thiruvananthapuram",
    },
    {
        name: "Anjali Menon",
        quote: "സ്കാൽപ്പ് ശാന്തമായി തോന്നുന്നു, മുടി വളർച്ച വളരെ മെച്ചപ്പെട്ടു.",
        rating: 5,
        location: "Kochi",
    },
    {
        name: "Meera Pillai",
        quote: "അനേകം പ്രോഡക്ട്സ് ശ്രമിച്ചതിനു ശേഷം Aura Herbals ഫലം കണ്ടു.",
        rating: 5,
        location: "Kozhikode",
    },
];

export default function CustomerTestimonials() {
    return (
        <section id="reviews" className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#6A994E] mb-3">
                        What Customers Say
                    </h2>
                    <p className="font-lora text-[#666] max-w-2xl mx-auto">
                        Real experiences from our happy customers.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            className="bg-[#F4F3EF] rounded-xl p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -3 }}
                        >
                            {/* Quote */}
                            <div className="flex justify-center mb-4">
                                <LuQuote size={20} className="text-[#6A994E]" />
                            </div>

                            <p className="font-lora text-[#1B1B1B] leading-relaxed mb-4 italic text-sm">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            {/* Rating */}
                            <div className="flex justify-center mb-4">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <LuStar
                                                key={i}
                                                size={14}
                                                className="text-yellow-400 fill-current"
                                            />
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-8 h-8 bg-[#6A994E] rounded-full flex items-center justify-center">
                                    <span className="font-montserrat font-bold text-white text-xs">
                                        {testimonial.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-montserrat font-bold text-[#1B1B1B] text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="font-lora text-[#666] text-xs">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
