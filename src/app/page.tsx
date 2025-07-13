import React from "react";
import Home from "@/components/Home";
import ProductDisplay from "@/components/ProductDisplay";
import ProductBenefits from "@/components/ProductBenefits";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function page() {
    return (
        <>
            <Home />
            <ProductDisplay />
            <ProductBenefits />
            <CustomerTestimonials />
            <ContactSection />
            <Footer />
        </>
    );
}

export default page;
