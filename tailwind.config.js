/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6A994E", // Herbal Green
                secondary: "#FFCAD4", // Blush Pink
                accent: "#C1121F", // Hibiscus Red
                background: "#F4F3EF", // Soft Cream / Beige
                text: "#1B1B1B", // Dark Charcoal
                subtext: "#666666", // Muted Grey
            },
            fontFamily: {
                brand: ['"Playfair Display"', "serif"],
                heading: ["Lora", "serif"],
                body: ["Poppins", "Nunito", "sans-serif"],
                label: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
