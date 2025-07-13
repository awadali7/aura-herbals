// Performance monitoring utilities
export const measurePerformance = () => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Measure Core Web Vitals
    if ("PerformanceObserver" in window) {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log("LCP:", lastEntry.startTime);

            // Send to analytics if needed
            if (lastEntry.startTime < 2500) {
                console.log("✅ LCP is good (< 2.5s)");
            } else {
                console.log("⚠️ LCP needs improvement (> 2.5s)");
            }
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                const fidEntry = entry as PerformanceEventTiming;
                console.log(
                    "FID:",
                    fidEntry.processingStart - fidEntry.startTime
                );

                if (fidEntry.processingStart - fidEntry.startTime < 100) {
                    console.log("✅ FID is good (< 100ms)");
                } else {
                    console.log("⚠️ FID needs improvement (> 100ms)");
                }
            });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                const clsEntry = entry as PerformanceEntry & {
                    hadRecentInput?: boolean;
                    value?: number;
                };
                if (!clsEntry.hadRecentInput && clsEntry.value !== undefined) {
                    clsValue += clsEntry.value;
                }
            }
            console.log("CLS:", clsValue);

            if (clsValue < 0.1) {
                console.log("✅ CLS is good (< 0.1)");
            } else {
                console.log("⚠️ CLS needs improvement (> 0.1)");
            }
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
    }

    // Measure page load time
    window.addEventListener("load", () => {
        const loadTime = performance.now();
        console.log("Page load time:", loadTime);

        if (loadTime < 3000) {
            console.log("✅ Page load time is good (< 3s)");
        } else {
            console.log("⚠️ Page load time needs improvement (> 3s)");
        }
    });

    // Measure image load times
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("load", () => {
            const loadTime = performance.now();
            console.log(`Image loaded: ${img.src} in ${loadTime}ms`);
        });
    });
};

// Resource timing
export const getResourceTiming = () => {
    if (typeof window === "undefined") return;
    if ("performance" in window) {
        const resources = performance.getEntriesByType("resource");
        resources.forEach((resource) => {
            console.log(`${resource.name}: ${resource.duration}ms`);
        });
    }
};

// Memory usage
export const getMemoryUsage = () => {
    if (typeof window === "undefined") return;
    if ("memory" in performance) {
        const memory = (
            performance as Performance & {
                memory: {
                    usedJSHeapSize: number;
                    totalJSHeapSize: number;
                    jsHeapSizeLimit: number;
                };
            }
        ).memory;
        console.log("Memory usage:", {
            used: Math.round(memory.usedJSHeapSize / 1048576) + " MB",
            total: Math.round(memory.totalJSHeapSize / 1048576) + " MB",
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + " MB",
        });
    }
};
