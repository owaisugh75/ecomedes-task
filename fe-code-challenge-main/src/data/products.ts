export type Product = {
  brand: string;
  sku: string;
  name: string;
  description: string;
  image: URL;
  showSupport: boolean;
};

export const products: Product[] = [
  {
    brand: "HP",
    sku: "81B03EA-Switzerland",
    name: "ENVY x360 2-in-1 Laptop 15-ey0652nz",
    description:
      'Experience the power to create any way, anywhere with the HP Envy x360 15.6". Combine the creative power of your devices with HP Palette. Speed meets endurance with the AMD Ryzen\u2122 Processor[1], plus with the 15.6" display, you get beautiful, brilliant colors. Look your best on video calls with a 5MP Camera[2] with Auto Frame and AI Noise Reduction.',
    image: new URL(
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08146094.png"
    ),
    showSupport: true,
  },
  {
    brand: "HP",
    sku: "358X5PA-New Zealand",
    name: "Chromebox G3",
    description:
      "Optimize the productivity of your workforce with the flexibility to provide scalable performance and storage. The compact design makes setup easy with plenty of ports, fast, stable connections, and Chrome OS auto updates.[1]",
    image: new URL(
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06928013.png"
    ),
    showSupport: true,
  },
  {
    brand: "HP",
    sku: "6K4S8PA-New Zealand",
    name: "ProBook 445 14 inch G9 Notebook PC",
    description:
      "The HP ProBook 445 Laptop provides growing businesses with the commercial-grade performance, HP Wolf Security for Business[5], and durability in a compact design. This PC is powered by an AMD processor[2] and protected with always-on security you can trust.",
    image: new URL(
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08065488.png"
    ),
    showSupport: true,
  },
  {
    brand: "HP",
    sku: "8F0R9PA-Australia",
    name: "t740 Thin Client Bundle",
    description:
      "Deliver secure, powerhouse performance to your graphics-intensive virtual, cloud, and local computing environments with the HP t740 Thin Client, our most powerful desktop thin client that supports up to six 4K displays.[1]",
    image: new URL(
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06426330.png"
    ),
    showSupport: true,
  },
  {
    brand: "Abet Laminati S.p.A.",
    sku: "rocks",
    name: "Rocks",
    description:
      'PRINT HPL is a high-pressure decorative laminate, in other words a panel consisting of layers of cellulose fibres that are impregnated with thermosetting resins and subjected to a high pressure process consisting in the simultaneous application of heat and pressure. This causes at the same time the fluidization and polycondensation of the resins, resulting in a homogeneous, non-porous material with the required surface finish. HPL is supplied as panels, available in different sizes, thicknesses and surface finishes. The nominal thickness we produce ranges from 0.6 to 30 mm. Basically, 60% of HPL consists of paper, while the remaining 40% consists of thermosetting resins, tipically phenolic resin for the core layers and melamine resin for the surface layer(s). Some HPL laminates have metal layers reinforced core, while others have metal foils or wood veneers as the decorative surface. PRINT HPL is also available in a flame retardant grade (called "F1") which, due to its unique and in any case halogen-free composition, ensures even better fire reaction classification than the standard version.',
    image: new URL(
      "https://ecomedes-library.s3.us-west-2.amazonaws.com/scs/product-images/abet-laminati-s-p-a_rocks_ae283bf6-5152-4dcf-8ed3-7a7b578f8a58.jpg"
    ),
    showSupport: false,
  },
];
