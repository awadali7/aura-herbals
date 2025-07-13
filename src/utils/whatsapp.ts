// WhatsApp integration utilities
export const openWhatsApp = (
    message: string,
    phoneNumber: string = "919074934653"
) => {
    if (typeof window === "undefined") return;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
};

// Pre-defined messages for different actions
export const whatsappMessages = {
    order: `Hi! I'd like to place an order for Aura Herbals Rosemary Water.

Product: Aura Herbals Rosemary Water
Price: ₹199

Please help me with the ordering process.`,

    inquiry: `Hi! I have some questions about Aura Herbals Rosemary Water.

Could you please provide more information about:
- Product details
- Shipping information
- Payment options
- Delivery time

Thank you!`,

    bulk: `Hi! I'm interested in bulk ordering Aura Herbals Rosemary Water.

Please provide information about:
- Bulk pricing
- Minimum order quantity
- Delivery options
- Payment terms

Thank you!`,

    support: `Hi! I need customer support for Aura Herbals Rosemary Water.

Please help me with my inquiry.`,

    custom: (
        productName: string,
        price: string
    ) => `Hi! I'd like to place an order for ${productName}.

Product: ${productName}
Price: ${price}

Please help me with the ordering process.`,
};

// Function to handle different types of WhatsApp interactions
export const handleWhatsAppClick = (
    type: "order" | "inquiry" | "bulk" | "support" | "custom",
    customData?: { productName: string; price: string }
) => {
    let message = "";

    switch (type) {
        case "order":
            message = whatsappMessages.order;
            break;
        case "inquiry":
            message = whatsappMessages.inquiry;
            break;
        case "bulk":
            message = whatsappMessages.bulk;
            break;
        case "support":
            message = whatsappMessages.support;
            break;
        case "custom":
            if (customData) {
                message = whatsappMessages.custom(
                    customData.productName,
                    customData.price
                );
            } else {
                message = whatsappMessages.order;
            }
            break;
        default:
            message = whatsappMessages.order;
    }

    openWhatsApp(message);
};
