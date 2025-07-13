"use client";

import { useEffect } from "react";
import {
    measurePerformance,
    getResourceTiming,
    getMemoryUsage,
} from "../utils/performance";

export default function PerformanceOptimizer() {
    useEffect(() => {
        // Only run on client side
        if (typeof window === "undefined") return;

        // Preload critical resources
        const preloadCriticalResources = () => {
            // Preload hero image
            const heroImage = new Image();
            heroImage.src = "/herbs-bg.png";

            // Preload fonts if needed
            if ("fonts" in document) {
                document.fonts.ready.then(() => {
                    console.log("Fonts loaded");
                });
            }
        };

        // Intersection Observer for lazy loading
        const setupLazyLoading = () => {
            if ("IntersectionObserver" in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const img = entry.target as HTMLImageElement;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.classList.remove("lazy");
                                imageObserver.unobserve(img);
                            }
                        }
                    });
                });

                // Observe all lazy images
                document.querySelectorAll("img[data-src]").forEach((img) => {
                    imageObserver.observe(img);
                });
            }
        };

        // Service Worker registration for caching
        const registerServiceWorker = async () => {
            if ("serviceWorker" in navigator) {
                try {
                    await navigator.serviceWorker.register("/sw.js");
                    console.log("Service Worker registered");
                } catch (error) {
                    console.log("Service Worker registration failed:", error);
                }
            }
        };

        // Initialize performance optimizations
        preloadCriticalResources();
        setupLazyLoading();
        registerServiceWorker();

        // Start performance monitoring
        measurePerformance();

        // Monitor resources after page load
        window.addEventListener("load", () => {
            setTimeout(() => {
                getResourceTiming();
                getMemoryUsage();
            }, 1000);
        });

        // Cleanup
        return () => {
            // Cleanup if needed
        };
    }, []);

    return null; // This component doesn't render anything
}
