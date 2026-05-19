// Hardcoded services data
export const servicesData = [
  {
    title: "Haircut",
    slug: "haircut",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg"
    ],
    description: "Precision cutting and structural styling tailored to your unique facial geometry and hair texture. Our expert stylists use techniques that enhance your natural features.",
    enabled: true,
    redirectUrl: "/services/haircut"
  },
  {
    title: "Hair Color",
    slug: "haircolor",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
      "/image/home/calixta-bridal-makeup.jpeg"
    ],
    description: "Balayage, foilage, and global corrections using elite European formulations. Experience color alchemy that transforms your look.",
    enabled: true,
    redirectUrl: "/services/haircolor"
  },
  {
    title: "Hair Treatments",
    slug: "hair-treatments",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj.jpeg"
    ],
    description: "Deep reconstructive keratin and hydration therapies for mirror-like shine. Restore vitality to damaged and color-treated hair.",
    enabled: true,
    redirectUrl: "/services/hair-treatments"
  },
  {
    title: "Men's Grooming",
    slug: "mens-grooming",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg",
      "/image/home/calixta-bridal-makeup.jpeg"
    ],
    description: "Bespoke beard sculpting and precise cutting for the modern gentleman. Grooming that exudes sophistication.",
    enabled: true,
    redirectUrl: "/services/mens-grooming"
  },
  {
    title: "Men's Facial",
    slug: "mens-facial",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg"
    ],
    description: "Tailored facial treatments designed for men's skin. Rejuvenation and refinement in one luxurious experience.",
    enabled: true,
    redirectUrl: "/services/mens-facial"
  },
  {
    title: "Manicure & Pedicure",
    slug: "manicure-pedicure",
    images: [
      "/image/home/calixta-bridal-makeup.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg"
    ],
    description: "Artisan nail care with premium finishes and hand treatments. Elegance from fingertips to toes.",
    enabled: true,
    redirectUrl: "/services/manicure-pedicure"
  },
  {
    title: "Nail Extensions",
    slug: "nail-extensions",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj.jpeg"
    ],
    description: "Bespoke nail extensions with custom designs and premium gel applications. Flawless nails that last.",
    enabled: true,
    redirectUrl: "/services/nail-extensions"
  },
  {
    title: "Bridal Makeup",
    slug: "bridal-makeup",
    images: [
      "/image/home/calixta-bridal-makeup.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg"
    ],
    description: "Flawless high-definition artistry for your most exclusive day. Bridal beauty that stands out in every frame.",
    enabled: true,
    redirectUrl: "/services/bridal-makeup"
  },
  {
    title: "Groom Makeup",
    slug: "groom-makeup",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
      "/image/home/calixta-bridal-makeup.jpeg"
    ],
    description: "Sophisticated makeup artistry for the groom. Subtle enhancement that commands presence.",
    enabled: true,
    redirectUrl: "/services/groom-makeup"
  },
  {
    title: "Party Makeup",
    slug: "party-makeup",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj.jpeg"
    ],
    description: "Event-ready makeup that transitions beautifully from day to night. Flawless artistry for your special occasions.",
    enabled: true,
    redirectUrl: "/services/party-makeup"
  },
  {
    title: "Waxing",
    slug: "waxing",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg"
    ],
    description: "Premium waxing services using the finest products. Smooth, radiant skin with long-lasting results.",
    enabled: true,
    redirectUrl: "/services/waxing"
  },
  {
    title: "Facials",
    slug: "facials",
    images: [
      "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg",
      "/image/home/calixta-bridal-makeup.jpeg"
    ],
    description: "Customized facial treatments for every skin type. Rejuvenation that reveals your natural radiance.",
    enabled: true,
    redirectUrl: "/services/facials"
  },
  {
    title: "Eyelash Extensions",
    slug: "eyelash-extensions",
    images: [
      "/image/home/calixta-bridal-makeup.jpeg",
      "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg"
    ],
    description: "Luxurious lash extensions that enhance your natural beauty. Voluminous, long-lasting lashes that frame your eyes.",
    enabled: true,
    redirectUrl: "/services/eyelash-extensions"
  }
];

// Helper function to get all enabled services
export function getEnabledServices() {
  return servicesData.filter(service => service.enabled);
}

// Helper function to get a service by slug
export function getServiceBySlug(slug) {
  return servicesData.find(service => service.slug === slug);
}

// Helper function to get all slugs
export function getAllServiceSlugs() {
  return servicesData.map(service => service.slug);
}
