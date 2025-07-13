"use client";

import { motion } from "framer-motion";

import { handleWhatsAppClick } from "../utils/whatsapp";
import Image from "next/image";

export default function FloatingWhatsApp() {
    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <motion.button
                onClick={() => handleWhatsAppClick("order")}
                className=" transition-all duration-300 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Chat with us on WhatsApp"
            >
                <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                />
            </motion.button>

            {/* Tooltip */}
            <motion.div
                className="absolute bottom-20 right-0 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                Order Now!
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </motion.div>
        </motion.div>
    );
}
