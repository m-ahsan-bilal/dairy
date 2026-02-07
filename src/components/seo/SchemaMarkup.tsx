import { CONFIG } from "@/lib/config";

export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Qasim Milk Shop",
    "image": "https://qasimmilk.com/logo.png", // Placeholder
    "telephone": CONFIG.contact.phone,
    "email": CONFIG.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop #4, Main Market, Johar Town",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.4697, // Approximate Johar Town coords
      "longitude": 74.2728
    },
    "url": "https://qasimmilk.com",
    "priceRange": "Rs. 200 - Rs. 12000",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
