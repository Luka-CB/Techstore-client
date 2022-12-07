import { v4 as uuid } from "uuid";
import cell from "./assets/images/dummies/cell.jpg";
import cell2 from "./assets/images/dummies/cell2.webp";
import cell3 from "./assets/images/dummies/cell3.jpg";
import cell4 from "./assets/images/dummies/cell4.webp";
import cell5 from "./assets/images/dummies/cell5.webp";
import computer from "./assets/images/dummies/computer.jfif";
import computer2 from "./assets/images/dummies/computer2.jpg";
import computer3 from "./assets/images/dummies/computer3.jpg";
import computer4 from "./assets/images/dummies/computer4.webp";
import computer5 from "./assets/images/dummies/computer5.jpg";
import computer6 from "./assets/images/dummies/computer6.jpg";
import computer7 from "./assets/images/dummies/computer7.webp";
import tv from "./assets/images/dummies/tv.png";
import tv2 from "./assets/images/dummies/tv2.webp";
import tv3 from "./assets/images/dummies/tv3.jpg";
import tv4 from "./assets/images/dummies/tv4.jpg";
import tv5 from "./assets/images/dummies/tv5.webp";
import tv6 from "./assets/images/dummies/tv6.webp";
import tv7 from "./assets/images/dummies/tv7.webp";

const cellImgs = [cell, cell2, cell3, cell4, cell5];
const tvImgs = [tv, tv2, tv3, tv4, tv5, tv6, tv7];
const computerImgs = [
  computer,
  computer2,
  computer3,
  computer4,
  computer5,
  computer6,
  computer7,
];

export const tvs = [
  {
    _id: uuid(),
    name: "Samsung S95B OLED",
    brand: "Sumsung",
    year: 2022,
    type: "OLED",
    resolution: "4k",
    Sizes: ["56", "65"],
    images: tvImgs,
    quantity: 5,
  },
  {
    _id: uuid(),
    name: "Samsung QN90B QLED",
    brand: "Sumsung",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["43", "50", "55", "65", "75", "85"],
    images: tvImgs,
    quantity: 3,
  },
  {
    _id: uuid(),
    name: "Samsung Q80/Q80B QLED",
    brand: "Sumsung",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["50", "55", "65", "75", "85"],
    images: tvImgs,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Samsung AU8000",
    brand: "Sumsung",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["43", "50", "55", "60", "65", "70", "75", "85"],
    images: tvImgs,
    quantity: 8,
  },
  {
    _id: uuid(),
    name: "LG C2",
    brand: "LG",
    year: 2022,
    type: "OLED",
    resolution: "4k",
    Sizes: ["42", "48", "55", "65", "77", "83"],
    images: tvImgs,
    quantity: 10,
  },
  {
    _id: uuid(),
    name: "LG C1",
    brand: "LG",
    year: 2022,
    type: "OLED",
    resolution: "4k",
    Sizes: ["48", "55", "65", "77"],
    images: tvImgs,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "LG G2",
    brand: "LG",
    year: 2022,
    type: "OLED",
    resolution: "4k",
    Sizes: ["55", "65", "77"],
    images: tvImgs,
    quantity: 6,
  },
  {
    _id: uuid(),
    name: "LG A2",
    brand: "LG",
    year: 2022,
    type: "OLED",
    resolution: "4k",
    Sizes: ["48", "55", "65"],
    images: tvImgs,
    quantity: 7,
  },
  {
    _id: uuid(),
    name: "LG Nano90",
    brand: "LG",
    year: 2022,
    type: "LED-LCD",
    resolution: "4k",
    Sizes: ["55", "65", "75", "86"],
    images: tvImgs,
    quantity: 2,
  },
  {
    _id: uuid(),
    name: "Sony A95K OLED",
    brand: "Sony",
    year: 2022,
    type: "OLED",
    resolution: "4k",
    Sizes: ["55", "65"],
    images: tvImgs,
    quantity: 4,
  },
  {
    _id: uuid(),
    name: "Sony X95K",
    brand: "Sony",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["65", "75", "85"],
    images: tvImgs,
    quantity: 11,
  },
  {
    _id: uuid(),
    name: "Sony X90K",
    brand: "Sony",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["55", "65", "75", "85"],
    images: tvImgs,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Sony X80K",
    brand: "Sony",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["40", "50", "55", "65", "75", "85"],
    images: tvImgs,
    quantity: 5,
  },
  {
    _id: uuid(),
    name: "Hisense U9DG",
    brand: "Hisense",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["75"],
    images: tvImgs,
    quantity: 3,
  },
  {
    _id: uuid(),
    name: "Hisense U8H",
    brand: "Hisense",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["55", "65", "75"],
    images: tvImgs,
    quantity: 0,
  },
  {
    _id: uuid(),
    name: "Hisense U7H",
    brand: "Hisense",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["55", "65", "75", "85"],
    images: tvImgs,
    quantity: 8,
  },
  {
    _id: uuid(),
    name: "Hisense U6H",
    brand: "Hisense",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["50", "55", "65", "75"],
    images: tvImgs,
    quantity: 8,
  },
  {
    _id: uuid(),
    name: "Hisense A6H",
    brand: "Hisense",
    year: 2022,
    type: "LED",
    resolution: "4k",
    Sizes: ["43", "50", "55", "65", "75"],
    images: tvImgs,
    quantity: 2,
  },
];

export const computers = [
  {
    _id: uuid(),
    name: "Lenovo IdeaCentre AIO 3",
    brand: "Lenovo",
    type: "all-in-one",
    processor: "AMD Athlon Silver / 3050U",
    os: "Windows 10 Home",
    graphics: "AMD Radeon Graphics",
    display: '21.5" 1920x1080 LED',
    memory: "4096 MB",
    storage: {
      type: "SSD",
      ssdInterface: "M.2",
      size: "256 GB",
    },
    colors: [
      {
        name: "Business Black",
        code: "#1e1f1e",
      },
      {
        name: "Foggy White",
        code: "#f2f8f7",
      },
    ],
    camera: "720p",
    weight: "6.81kg",
    price: 699.99,
    quantity: 6,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "HP 15 2Q8Z7EA",
    brand: "HP",
    type: "Laptop",
    processor: "Intel Core i3 / 1005G1",
    os: "Free Dos",
    graphics: "Intel UHD Graphics",
    display: '15.6" 1920x1080 FHD',
    memory: "4 GB",
    storage: {
      type: "SSD",
      ssdInterface: "",
      size: "256 GB",
    },
    colors: [
      {
        name: "Black",
        code: "#252626",
      },
    ],
    camera: "yes",
    weight: "1.81kg",
    price: 389.99,
    quantity: 4,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "Asus ROG Strix G10",
    brand: "Asus",
    type: "Desktop",
    processor: "Intel Core i5 / 11400F",
    os: "Free Dos",
    graphics: "GeForce GTX 1660 Ti",
    display: "",
    memory: "16384 MB",
    storage: {
      type: "SSD",
      ssdInterface: "M.2",
      size: "512 GB",
    },
    colors: [
      {
        name: "Gray",
        code: "#808080",
      },
    ],
    camera: "",
    weight: "8kg",
    price: 1734.16,
    quantity: 4,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "Acer Aspire 3",
    brand: "Acer",
    type: "Laptop",
    processor: "Intel Core i3 / 1005G1",
    os: "Free Dos",
    graphics: "Nvidia GeForce MX330",
    display: '15.6" 1920x1080 LCD',
    memory: "4 GB",
    storage: {
      type: "HDD",
      ssdInterface: "M.2",
      size: "1 TB",
    },
    colors: [
      {
        name: "Charcoal Black",
        code: "#36454f",
      },
    ],
    camera: "",
    weight: "8kg",
    price: 516.3,
    quantity: 7,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "HP 24-dp0026ur",
    brand: "HP",
    type: "all-in-one",
    processor: "AMD Ryzen 3 / 4300U",
    os: "Free Dos",
    graphics: "AMD Radeon Graphics",
    display: '23.8" 1920x1080 WLED',
    memory: "8192 MB",
    storage: {
      type: "SSD",
      ssdInterface: "M.2",
      size: "256 GB",
    },
    colors: [
      {
        name: "Silver",
        code: "#c0c0c0",
      },
    ],
    camera: "1080p",
    weight: "7.71kg",
    price: 791.98,
    quantity: 4,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "Lenovo V15 Gen 2",
    brand: "Lenovo",
    type: "Laptop",
    processor: "Intel Core i5 / 1135G7",
    os: "Free Dos",
    graphics: "intel iris Xe Graphics",
    display: '15.6" 1920x1080 FHD',
    memory: "8 GB",
    storage: {
      type: "SSD",
      ssdInterface: "M.2",
      size: "512 GB",
    },
    colors: [
      {
        name: "Black",
        code: "#242323",
      },
      {
        name: "Iron Gray",
        code: "#52595d",
      },
    ],
    camera: "720p",
    weight: "1.7kg",
    price: 737.73,
    quantity: 8,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "Apple iMac 24",
    brand: "Apple",
    type: "all-in-one",
    processor: "M1",
    os: "macOS Big Sur",
    graphics: "Apple 7-core GPU",
    display: '23.5" 4480 x 2520 LED',
    memory: "8192 MB",
    storage: {
      type: "SSD",
      ssdInterface: "NVMe",
      size: "512 GB",
    },
    colors: [
      {
        name: "Blue",
        code: "#007aff",
      },
      {
        name: "Green",
        code: "#8db600",
      },
      {
        name: "Pink",
        code: "#fb9bcb",
      },
      {
        name: "Silver",
        code: "#aaa9ad",
      },
    ],
    camera: "1080p",
    weight: "4.48kg",
    price: 2202.85,
    quantity: 3,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "Apple Macbook Pro 14 inch 2021",
    brand: "Apple",
    type: "Laptop",
    processor: "Apple M1 Pro",
    os: "macOS",
    graphics: "Apple 14-core GPU",
    display: '14.2" 3024x1964 XDR',
    memory: "16 GB",
    storage: {
      type: "SSD",
      ssdInterface: "",
      size: "512 GB",
    },
    colors: [
      {
        name: "Silver",
        code: "#aaa9ad",
      },
      {
        name: "Space Gray",
        code: "#707070",
      },
    ],
    camera: "1080p",
    weight: "1.6kg",
    price: 2509.16,
    quantity: 5,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "Dell Vostro 3510",
    brand: "Dell",
    type: "Laptop",
    processor: "Intel Core i5 / 1135G7",
    os: "Ubuntu",
    graphics: "Intel UHD Graphics",
    display: '15.6" 1920X1080 FHD',
    memory: "8 GB",
    storage: {
      type: "SSD",
      ssdInterface: "M.2",
      size: "512 GB",
    },
    colors: [
      {
        name: "Carbon Black",
        code: "#293542",
      },
      {
        name: "Titan Gray",
        code: "#52576c",
      },
    ],
    camera: "yes",
    weight: "1.69kg",
    price: 848.44,
    quantity: 4,
    images: computerImgs,
  },
  {
    _id: uuid(),
    name: "Asus ExpertCenter E5 AiO 24",
    brand: "Asus",
    type: "all-in-one",
    processor: "Intel Core i5 / 11500B",
    os: "Windows 11 Home",
    graphics: "Intel UHD Graphics",
    display: '23.8" 1920X1080 FHD',
    memory: "8 GB",
    storage: {
      type: "SSD",
      ssdInterface: "M.2",
      size: "512 GB",
    },
    colors: [
      {
        name: "Black",
        code: "#242323",
      },
    ],
    camera: "720p",
    weight: "9kg",
    price: 1032.97,
    quantity: 6,
    images: computerImgs,
  },
];

export const cellPhones = [
  {
    _id: uuid(),
    name: "OnePlus Nord CE 2 5G",
    brand: "OnePlus",
    year: 2022,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "160.6 x 73.2 x 7.8 mm",
      weight: "173 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "AMOLED / 90Hz / HDR10+",
      size: '6.43"',
      resolution: "1080 x 2400",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 11",
      chipset: "MediaTek MT6877 Dimensity 900",
      cpu: "Octa-core (2x2.4 GHz Cortex-A78)",
      gpu: "Mali-G68 MC4",
    },
    memory: {
      cardSlot: "microSDXC (dedicated slot)",
      internal: "128 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          "64 MP, f/1.8, 26mm (wide)",
          "8 MP, f/2.2, 119˚ (ultrawide)",
          "2 MP, f/2.4 (macro)",
        ],
      },
      features: "LED flash / HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120fps, gyro-EIS",
    },
    selfieCamera: {
      picture: { type: "Single", details: "16 MP, f/2.4, 27mm (wide), 1.0µm" },
      features: "HDR",
      video: "1080p@30/60fps, gyro-EIS",
    },
    Battery: "Li-Po 4500 mAh, non-removable",
    colors: [
      {
        name: "Gray Mirror",
        code: "#d4e1ec",
      },
      {
        name: "Bahama Blue",
        code: "#355e94",
      },
    ],
    price: 219,
    quantity: 8,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "OnePlus Nord 2T",
    brand: "OnePlus",
    year: 2022,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "159.1 x 73.2 x 8.2 mm",
      weight: "190 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "AMOLED / 90Hz / HDR10+",
      size: '6.43"',
      resolution: "1080 x 2400",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 12",
      chipset: "MediaTek Dimensity 1300",
      cpu: "Octa-core (1x3.0 GHz Cortex-A78)",
      gpu: "Mali-G77 MC9",
    },
    memory: {
      cardSlot: "no",
      internal: "128 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          "50 MP, f/1.9, 24mm (wide)",
          "8 MP, f/2.2, 120˚ (ultrawide)",
          "2 MP, f/2.4 (macro)",
        ],
      },
      features: "Dual-LED flash / HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120/480fps, gyro-EIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '32 MP, f/2.4, (wide), 1/2.8", 0.8µm',
      },
      features: "Auto HDR",
      video: "1080p@30fps, gyro-EIS",
    },
    Battery: "Li-Po 4500 mAh, non-removable",
    colors: [
      {
        name: "Gray Shadow",
        code: "#8d9093",
      },
      {
        name: "Jade Fog",
        code: "#d6e9d9",
      },
    ],
    price: 309,
    quantity: 5,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "OnePlus 10R",
    brand: "OnePlus",
    year: 2022,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "163.3 x 75.5 x 8.2 mm",
      weight: "186 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "Fluid AMOLED / 1B colors / 120Hz / HDR10+",
      size: '6.7"',
      resolution: "1080 x 2412",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 12, upgradable to Android 13, OxygenOS 13",
      chipset: "MediaTek Dimensity 8100-Max",
      cpu: "Octa-core (4x2.85 GHz Cortex-A78)",
      gpu: "Mali-G610 MC6",
    },
    memory: {
      cardSlot: "no",
      internal: "256 GB",
      ram: "12 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          "50 MP, f/1.8, 24mm (wide)",
          "8 MP, f/2.2, 15mm, 120˚ (ultrawide)",
          "2 MP, f/2.4 (macro)",
        ],
      },
      features: "LED flash / HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120fps, gyro-EIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '16 MP, f/2.4, 26mm (wide), 1/3.09", 1.0µm',
      },
      features: "HDR",
      video: "1080p@30fps, gyro-EIS",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Sierra Black",
        code: "#291811",
      },
      {
        name: "Forest Green",
        code: "#228b22",
      },
      {
        name: "Prime Blue",
        code: "#0064a1",
      },
    ],
    price: 499.49,
    quantity: 7,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy S20 FE 5G",
    brand: "Samsung",
    year: 2020,
    network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    body: {
      dimensions: "159.8 x 74.5 x 8.4 mm",
      weight: "190 g",
      sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "Super AMOLED / 120Hz / HDR10+",
      size: '6.5"',
      resolution: "1080 x 2400",
      protection: "Corning Gorilla Glass 3",
    },
    platform: {
      os: "Android 10, upgradable to Android 13, One UI 5",
      chipset: "Qualcomm SM8250 Snapdragon 865 5G",
      cpu: "Octa-core (4x1.80 GHz Cortex-A55)",
      gpu: "Adreno 650",
    },
    memory: {
      cardSlot: "microSDXC (uses shared SIM slot)",
      internal: "256 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '12 MP, f/1.8, 26mm (wide), 1/1.76", 1.8µm, Dual Pixel PDAF, OIS',
          '8 MP, f/2.4, 76mm (telephoto), 1/4.5", 1.0µm, PDAF, OIS, 3x optical zoom',
          '12 MP, f/2.2, 13mm, 123˚ (ultrawide), 1/3.0", 1.12µm',
        ],
      },
      features: "LED flash / auto-HDR / panorama",
      video: "4K@30/60fps / 1080p@30/60fps / gyro-EIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '32 MP, f/2.2, 26mm (wide), 1/2.74", 0.8µm',
      },
      features: "HDR",
      video: "4K@30/60fps / 1080p@30/60fps / gyro-EIS",
    },
    Battery: "Li-Ion 4500 mAh, non-removable",
    colors: [
      {
        name: "Cloud Lavender",
        code: "#c8c6df",
      },
      {
        name: "Cloud Mint",
        code: "#c0fcee",
      },
      {
        name: "Cloud Navy",
        code: "#597cde",
      },
      {
        name: "Cloud White",
        code: "#f2f2ed",
      },
      {
        name: "Cloud Red",
        code: "#d0cccc",
      },
      {
        name: "Cloud Orange",
        code: "#c9c8c5",
      },
    ],
    price: 309.99,
    quantity: 3,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy A53 5G",
    brand: "Samsung",
    year: 2022,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "159.6 x 74.8 x 8.1 mm",
      weight: "189 g",
      sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "Super AMOLED / 120Hz / 800 nits",
      size: '6.5"',
      resolution: "1080 x 2400",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 12, upgradable to Android 13, One UI 5",
      chipset: "Exynos 1280",
      cpu: "Octa-core (2x2.4 GHz Cortex-A78)",
      gpu: "Mali-G68",
    },
    memory: {
      cardSlot: "microSDXC (uses shared SIM slot)",
      internal: "128 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Quad",
        details: [
          '64 MP, f/1.8, 26mm (wide), 1/1.7X", 0.8µm, PDAF, OIS',
          "12 MP, f/2.2, 123˚ (ultrawide), 1.12µm",
          "5 MP, f/2.4, (macro)",
          "5 MP, f/2.4, (depth)",
        ],
      },
      features: "LED flash / HDR / panorama",
      video: "4K@30fps / 1080p@30/60fps / gyro-EIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '32 MP, f/2.2, 26mm (wide), 1/2.8", 0.8µm',
      },
      features: "HDR",
      video: "4K@30fps / 1080p@30fps",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Black",
        code: "#222222",
      },
      {
        name: "White",
        code: "#ffffff",
      },
      {
        name: "Blue",
        code: "#d6e7f7",
      },
      {
        name: "Peach",
        code: "#f7d4b8",
      },
    ],
    price: 334,
    quantity: 9,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy S22 Ultra 5G",
    brand: "Samsung",
    year: 2022,
    network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    body: {
      dimensions: "163.3 x 77.9 x 8.9 mm",
      weight: "228 g",
      sim: "Dual SIM (2 Nano-SIMs and eSIM, dual stand-by)",
    },
    display: {
      type: "Dynamic AMOLED 2X / 120Hz / HDR10+ / 1750 nits",
      size: '6.8"',
      resolution: "1440 x 3088",
      protection: "Corning Gorilla Glass Victus+",
    },
    platform: {
      os: "Android 12, upgradable to Android 13, One UI 5",
      chipset: "Exynos 2200",
      cpu: "Octa-core (1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510)",
      gpu: "Xclipse 920",
    },
    memory: {
      cardSlot: "No",
      internal: "512 GB",
      ram: "12 GB",
    },
    mainCamera: {
      picture: {
        type: "Quad",
        details: [
          '108 MP, f/1.8, 23mm (wide), 1/1.33", 0.8µm, PDAF, Laser AF, OIS',
          '10 MP, f/4.9, 230mm (periscope telephoto), 1/3.52", 1.12µm, dual pixel PDAF',
          '10 MP, f/2.4, 70mm (telephoto), 1/3.52", 1.12µm, dual pixel PDAF, OIS, 3x optical zoom',
          '12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, dual pixel PDAF, Super Steady video',
        ],
      },
      features: "LED flash / Auto HDR / panorama",
      video:
        "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '40 MP, f/2.2, 26mm (wide), 1/2.82", 0.7µm, PDAF',
      },
      features: "Dual video call, Auto-HDR",
      video: "4K@30/60fps, 1080p@30fps",
    },
    Battery: "Li-Ion 5000 mAh, non-removable",
    colors: [
      {
        name: "Phantom Black",
        code: "#262626",
      },
      {
        name: "White",
        code: "#f5f5f5",
      },
      {
        name: "Burgundy",
        code: "#6a4b51",
      },
      {
        name: "Green",
        code: "#465f5b",
      },
      {
        name: "Graphite",
        code: "#797d80",
      },
      {
        name: "Red",
        code: "#c35642",
      },
      {
        name: "Sky Blue",
        code: "#bacee9",
      },
      {
        name: "Bora Purple",
        code: "#b89fc9",
      },
    ],
    price: 729,
    quantity: 5,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Sony Xperia 5 IV",
    brand: "Sony",
    year: 2022,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "156 x 67 x 8.2 mm",
      weight: "172 g",
      sim: "Nano-SIM and eSIM",
    },
    display: {
      type: "OLED / 1B colors / 120Hz / HDR BT.2020",
      size: '6.1"',
      resolution: "1080 x 2520",
      protection: "Corning Gorilla Glass Victus",
    },
    platform: {
      os: "Android 12, upgradable to Android 13",
      chipset: "Qualcomm SM8450 Snapdragon 8 Gen 1",
      cpu: "Octa-core (1x3.00 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510)",
      gpu: "Adreno 730",
    },
    memory: {
      cardSlot: "microSDXC (uses shared SIM slot)",
      internal: "256 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '12 MP, f/1.7, 24mm (wide), 1/1.7", 1.8µm, Dual Pixel PDAF, OIS',
          '12 MP, f/2.4, 60mm (telephoto), 1/3.5", Dual Pixel PDAF, OIS',
          '12 MP, f/2.2, 124˚, 16mm (ultrawide), 1/2.5", Dual Pixel PDAF',
        ],
      },
      features:
        "Zeiss optics / Zeiss T* lens coating / LED flash / HDR / panorama / eye tracking",
      video:
        "4K@24/25/30/60/120fps HDR, 1080p@30/60/120fps; 5-axis gyro-EIS, OIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '12 MP, f/2.0, 24mm (wide), 1/2.9", 1.25µm',
      },
      features: "HDR",
      video: "4K@30fps, 1080p@30/60fps, 5-axis gyro-EIS",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Green",
        code: "#416768",
      },
      {
        name: "Black",
        code: "#303030",
      },
      {
        name: "Ecru White",
        code: "#ebeae5",
      },
    ],
    price: 769.99,
    quantity: 4,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Sony Xperia Pro-I",
    brand: "Sony",
    year: 2021,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "166 x 72 x 8.9 mm",
      weight: "211 g",
      sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "OLED / 1B colors / 120Hz / HDR BT.2020",
      size: '6.5"',
      resolution: "1644 x 3840",
      protection: "Corning Gorilla Glass Victus",
    },
    platform: {
      os: "Android 11",
      chipset: "Qualcomm SM8350 Snapdragon 888 5G",
      cpu: "Octa-core (1x2.84 GHz Cortex-X1 & 3x2.42 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55)",
      gpu: "Adreno 660",
    },
    memory: {
      cardSlot: "microSDXC (uses shared SIM slot)",
      internal: "512 GB",
      ram: "12 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '12 MP, f/2.0-4.0, 24mm (wide), 1.0"-type, 2.4µm, PDAF, OIS (315 PDAF points, 90% frame coverage)',
          '12 MP, f/2.4, 50mm (telephoto), 1/2.9", PDAF, 2x optical zoom, OIS',
          '12 MP, f/2.2, 124˚, 16mm (ultrawide), 1/2.55", Dual Pixel PDAF',
          "0.3 MP, TOF 3D, (depth)",
        ],
      },
      features:
        "Zeiss optics / Zeiss T* lens coating / LED flash / HDR / panorama / 12-bit RAW / eye tracking",
      video:
        "4K@24/25/30/60/120fps HDR, 1080p@30/60/120fps; 5-axis gyro-EIS, OIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '8 MP, f/2.0, 24mm (wide), 1/4", 1.12µm',
      },
      features: "HDR",
      video: "1080p@30fps, 5-axis gyro-EIS",
    },
    Battery: "Li-Po 4500 mAh, non-removable",
    colors: [
      {
        name: "Frosted Black",
        code: "#323232",
      },
    ],
    price: 990,
    quantity: 2,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Apple iPhone 14 Pro",
    brand: "Apple",
    year: 2022,
    network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    body: {
      dimensions: "147.5 x 71.5 x 7.9 mm",
      weight: "206 g",
      sim: "Nano-SIM and eSIM",
    },
    display: {
      type: "LTPO Super Retina XDR OLED / 120Hz / HDR10 / Dolby Vision / 1000 nits (typ) / 2000 nits (HBM)",
      size: '6.1"',
      resolution: "1179 x 2556",
      protection: "Ceramic Shield glass",
    },
    platform: {
      os: "iOS 16, upgradable to iOS 16.1",
      chipset: "Apple A16 Bionic (4 nm)",
      cpu: "Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)",
      gpu: "Apple GPU (5-core graphics)",
    },
    memory: {
      cardSlot: "No",
      internal: "1 TB",
      ram: "6 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '48 MP, f/1.8, 24mm (wide), 1/1.28", 1.22µm, dual pixel PDAF, sensor-shift OIS',
          '12 MP, f/2.8, 77mm (telephoto), 1/3.5", PDAF, OIS, 3x optical zoom',
          '12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, dual pixel PDAF',
          "TOF 3D LiDAR scanner (depth)",
        ],
      },
      features: "Dual-LED dual-tone flash / HDR (photo/panorama)",
      video:
        "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), stereo sound rec",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '12 MP, f/1.9, 23mm (wide), 1/3.6", PDAF, OIS',
      },
      features: "HDR / Cinematic mode (4K@24/30fps)",
      video: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
    },
    Battery: "Li-Ion 3200 mAh, non-removable (12.38 Wh)",
    colors: [
      {
        name: "Space Black",
        code: "#41403e",
      },
      {
        name: "Silver",
        code: "#fdfffc",
      },
      {
        name: "Gold",
        code: "#fef0d6",
      },
      {
        name: "Deep Purple",
        code: "#7e7182",
      },
    ],
    price: 975,
    quantity: 6,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Apple iPhone 13 Pro",
    brand: "Apple",
    year: 2021,
    network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    body: {
      dimensions: "146.7 x 71.5 x 7.7 mm",
      weight: "204 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "Super Retina XDR OLED / 120Hz / HDR10 / Dolby Vision / 1000 nits (HBM) / 1200 nits (peak)",
      size: '6.1"',
      resolution: "1170 x 2532",
      protection: "Ceramic Shield glass",
    },
    platform: {
      os: "iOS 15, upgradable to iOS 16.1",
      chipset: "Apple A15 Bionic (5 nm)",
      cpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
      gpu: "Apple GPU (5-core graphics)",
    },
    memory: {
      cardSlot: "No",
      internal: "512 GB",
      ram: "6 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '12 MP, f/1.5, 26mm (wide), 1/1.7", 1.9µm, dual pixel PDAF, sensor-shift OIS',
          '12 MP, f/2.8, 77mm (telephoto), PDAF, 1/3.5", OIS, 3x optical zoom',
          '12 MP, f/1.8, 13mm, 120˚ (ultrawide), 1/3.5", PDAF',
          "TOF 3D LiDAR scanner (depth)",
        ],
      },
      features: "Dual-LED dual-tone flash / HDR (photo/panorama)",
      video:
        "4K@24/30/60fps, 1080p@30/60/120/240fps, 10‑bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (1080p@30fps), stereo sound rec.",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details:
          "12 MP, f/2.2, 23mm (wide), 1/3.6 / SL 3D, (depth/biometrics sensor)",
      },
      features: "HDR",
      video: "4K@24/25/30/60fps, 1080p@30/60/120fps, gyro-EIS",
    },
    Battery: "Li-Ion 3095 mAh, non-removable (12.11 Wh)",
    colors: [
      {
        name: "Graphite",
        code: "#1a2129",
      },
      {
        name: "Silver",
        code: "#f9f4f0",
      },
      {
        name: "Gold",
        code: "#fee2de",
      },
      {
        name: "Sierra Blue",
        code: "#256080",
      },
      {
        name: "Alpine Green",
        code: "#586958",
      },
    ],
    price: 892,
    quantity: 7,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Xiaomi 12 Lite",
    brand: "Xiaomi",
    year: 2022,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "159.3 x 73.7 x 7.3 mm",
      weight: "173 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "AMOLED / 68B colors / 120Hz / HDR10 / Dolby Vision / HDR10+ / 950 nits (peak)",
      size: '6.55"',
      resolution: "1080 x 2400",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 12, MIUI 13",
      chipset: "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
      cpu: "Octa-core (1x2.4 GHz Cortex-A78 & 3x2.2 GHz Cortex-A78 & 4x1.9 GHz Cortex-A55)",
      gpu: "Adreno 642L",
    },
    memory: {
      cardSlot: "No",
      internal: "128 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '108 MP, f/1.9, 26mm (wide), 1/1.52", 0.7µm, PDAF',
          '8 MP, f/2.2, 120˚ (ultrawide), 1/4.0", 1.12µm',
          "2 MP, f/2.4, (macro)",
        ],
      },
      features: "Dual-LED dual-tone flash / HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120fps; gyro-EIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '32 MP, f/2.5, (wide), 1/2.8", 0.8µm, AF',
      },
      features: "HDR / panorama",
      video: "1080p@30/60fps, 720p@120fps",
    },
    Battery: "Li-Po 4300 mAh, non-removable",
    colors: [
      {
        name: "Black",
        code: "#677786",
      },
      {
        name: "Lite Green",
        code: "#bef9f7",
      },
      {
        name: "Lite Pink",
        code: "#fad6f8",
      },
    ],
    price: 359,
    quantity: 9,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Xiaomi 12T Pro",
    brand: "Xiaomi",
    year: 2022,
    network: "GSM / HSPA / LTE / 5G",
    body: {
      dimensions: "163.1 x 75.9 x 8.6 mm",
      weight: "205 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "AMOLED / 68B colors / 120Hz / Dolby Vision / HDR10+ / 500 nits (typ) / 900 nits (peak)",
      size: '6.67"',
      resolution: "1220 x 2712",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 12, MIUI 13",
      chipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
      cpu: "Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x2.0 GHz Cortex-A510)",
      gpu: "Adreno 730",
    },
    memory: {
      cardSlot: "No",
      internal: "256 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '200 MP, f/1.7, (wide), 1/1.22", 0.64µm, PDAF, OIS',
          '8 MP, f/2.2, 120˚ (ultrawide), 1/4", 1.12µm',
          "2 MP, f/2.4, (macro)",
        ],
      },
      features: "Dual-LED dual-tone flash / HDR / panorama",
      video: "8K@24fps, 4K@30/60fps, 1080p@30/60/120/240fps, HDR10+",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '20 MP, f/2.2, (wide), 1/3.47", 0.8µm',
      },
      features: "HDR / panorama",
      video: "1080p@30/60fps, HDR",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Black",
        code: "#3b3c41",
      },
      {
        name: "Silver",
        code: "#b0b1b6",
      },
      {
        name: "Blue",
        code: "#82b1cf",
      },
    ],
    price: 591,
    quantity: 12,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Xiaomi Redmi Note 12 Pro+",
    brand: "Xiaomi",
    year: 2022,
    network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    body: {
      dimensions: "162.9 x 76 x 9 mm",
      weight: "208.4 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "OLED / 1B colors / 120Hz / Dolby Vision / HDR10+ / 500 nits (typ) / 900 nits (HBM)",
      size: '6.67"',
      resolution: "1080 x 2400",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 12, MIUI 13",
      chipset: "MediaTek Dimensity 1080 (6 nm)",
      cpu: "Octa-core (2x2.6 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)",
      gpu: "Mali-G68 MC4",
    },
    memory: {
      cardSlot: "No",
      internal: "256 GB",
      ram: "12 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '200 MP, f/1.7, 24mm (wide), 1/1.4", 0.56µm, PDAF, OIS',
          '8 MP, f/1.9, 119˚ (ultrawide), 1/4", 1.12µm',
          "2 MP, f/2.4, (macro)",
        ],
      },
      features: "Dual-LED dual-tone flash / HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120fps, 720p@960fps",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '16 MP, (wide), 1/3.06", 1.0µm',
      },
      features: "HDR",
      video: "1080p@30/60fps",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Black",
        code: "#4f4e53",
      },
      {
        name: "White",
        code: "#efefef",
      },
      {
        name: "Blue",
        code: "#9fc7e1",
      },
    ],
    price: 339,
    quantity: 15,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Realme 10 Pro+",
    brand: "Realme",
    year: 2022,
    network: "GSM / CDMA / HSPA / CDMA2000 / LTE / 5G",
    body: {
      dimensions: "161.5 x 73.9 x 7.8 mm or 8 mm",
      weight: "173 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "AMOLED / 1B colors / 120Hz / HDR10+ / 800 nits",
      size: '6.7"',
      resolution: "1080 x 2412",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 13, Realme UI 4.0",
      chipset: "MediaTek Dimensity 1080 (6 nm)",
      cpu: "Octa-core (2x2.6 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)",
      gpu: "Mali-G68 MC4",
    },
    memory: {
      cardSlot: "No",
      internal: "256 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '108 MP, f/1.8, 24mm (wide), 1/1.67", 0.64µm, PDAF',
          "8 MP, f/2.2, 16mm, 112˚ (ultrawide)",
          "2 MP, f/2.4, (macro)",
        ],
      },
      features: "LED flash / HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120/480fps, 720p@960fps, gyro-EIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: "16 MP, f/2.5, 25mm (wide)",
      },
      features: "Panorama",
      video: "1080p@30fps",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Black",
        code: "#1f2025",
      },
      {
        name: "Starlight",
        code: "#c0d4cc",
      },
      {
        name: "Blue",
        code: "#b2def3",
      },
    ],
    price: 429.69,
    quantity: 15,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Realme C35",
    brand: "Realme",
    year: 2022,
    network: "GSM / HSPA / LTE",
    body: {
      dimensions: "164.4 x 75.6 x 8.1 mm",
      weight: "189 g",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      type: "IPS LCD / 480 nits (typ) / 600 nits (HBM)",
      size: '6.6"',
      resolution: "1080 x 2408",
      protection: "Panda Glass",
    },
    platform: {
      os: "Android 11, Realme UI 2.0",
      chipset: "Unisoc Tiger T616 (12 nm)",
      cpu: "Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
      gpu: "Mali-G57 MP1",
    },
    memory: {
      cardSlot: "microSDXC (dedicated slot)",
      internal: "128 GB",
      ram: "4 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '50 MP, f/1.8, 26mm (wide), 1/2.76", 0.64µm, PDAF',
          "2 MP, f/2.4, (macro)",
          "0.3 MP, f/2.8, (depth)",
        ],
      },
      features: "LED flash / HDR / panorama",
      video: "1080p@30fps",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '8 MP, f/2.0, 26mm (wide), 1/4.0", 1.12µm',
      },
      features: "HDR",
      video: "720p@30fps",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Glowing Black",
        code: "#131522",
      },
      {
        name: "Glowing Green",
        code: "#c7e1be",
      },
    ],
    price: 156,
    quantity: 9,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Google Pixel 7 Pro",
    brand: "Google",
    year: 2022,
    network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    body: {
      dimensions: "162.9 x 76.6 x 8.9 mm",
      weight: "212 g",
      sim: "Nano-SIM and eSIM",
    },
    display: {
      type: "LTPO AMOLED / 120Hz / HDR10+ / 1000 nits (HBM) / 1500 nits (peak)",
      size: '6.7"',
      resolution: "1440 x 3120",
      protection: "Corning Gorilla Glass Victus",
    },
    platform: {
      os: "Android 13",
      chipset: "Google Tensor G2 (5 nm)",
      cpu: "Octa-core (2x2.85 GHz Cortex-X1 & 2x2.35 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55)",
      gpu: "Mali-G710 MP7",
    },
    memory: {
      cardSlot: "No",
      internal: "512 GB",
      ram: "12 GB",
    },
    mainCamera: {
      picture: {
        type: "Triple",
        details: [
          '50 MP, f/1.9, 25mm (wide), 1/1.31", 1.2µm, multi-directional PDAF, Laser AF, OIS',
          '48 MP, f/3.5, 120mm (telephoto), 1/2.55", 0.7µm, multi-directional PDAF, OIS, 5x optical zoom',
          '12 MP, f/2.2, 126˚ (ultrawide), 1/2.9", 1.25µm, AF',
        ],
      },
      features: "Dual-LED flash / Pixel Shift / Auto-HDR / panorama",
      video: "4K@30/60fps, 1080p@30/60/120/240fps; gyro-EIS, OIS, 10-bit HDR",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: '10.8 MP, f/2.2, 21mm (ultrawide), 1/3.1", 1.22µm',
      },
      features: "Auto-HDR / panorama",
      video: "4K@30/60fps, 1080p@30/60fps",
    },
    Battery: "Li-Po 5000 mAh, non-removable",
    colors: [
      {
        name: "Obsidian",
        code: "#292929",
      },
      {
        name: "Snow",
        code: "#eeeeee",
      },
      {
        name: "Hazel",
        code: "#9b9d9a",
      },
    ],
    price: 708,
    quantity: 8,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Google Pixel 6",
    brand: "Google",
    year: 2021,
    network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    body: {
      dimensions: "158.6 x 74.8 x 8.9 mm",
      weight: "207 g",
      sim: "Nano-SIM and eSIM",
    },
    display: {
      type: "AMOLED / 90Hz / HDR10+",
      size: '6.4"',
      resolution: "1080 x 2400",
      protection: "Corning Gorilla Glass Victus",
    },
    platform: {
      os: "Android 12, upgradable to Android 13",
      chipset: "Google Tensor (5 nm)",
      cpu: "Octa-core (2x2.80 GHz Cortex-X1 & 2x2.25 GHz Cortex-A76 & 4x1.80 GHz Cortex-A55)",
      gpu: "Mali-G78 MP20",
    },
    memory: {
      cardSlot: "No",
      internal: "256 GB",
      ram: "8 GB",
    },
    mainCamera: {
      picture: {
        type: "Dual",
        details: [
          '50 MP, f/1.9, 25mm (wide), 1/1.31", 1.2µm, Dual Pixel PDAF, Laser AF, OIS',
          "12 MP, f/2.2, 17mm, 114˚ (ultrawide), 1.25µm",
        ],
      },
      features: "Dual-LED flash / Pixel Shift / Auto-HDR / panorama",
      video: "4K@30/60fps, 1080p@30/60/120/240fps; gyro-EIS, OIS",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: "8 MP, f/2.0, 24mm (wide), 1.12µm",
      },
      features: "Auto-HDR / panorama",
      video: "1080p@30fps",
    },
    Battery: "Li-Ion 4614 mAh, non-removable",
    colors: [
      {
        name: "Sorta Seafoam",
        code: "#bec9c5",
      },
      {
        name: "Kinda Coral",
        code: "#e7c8b3",
      },
      {
        name: "Stormy Black",
        code: "#292a2c",
      },
    ],
    price: 399.99,
    quantity: 14,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Google Pixel 3",
    brand: "Google",
    year: 2018,
    network: "GSM / CDMA / HSPA / EVDO / LTE",
    body: {
      dimensions: "145.6 x 68.2 x 7.9 mm",
      weight: "148 g",
      sim: "Nano-SIM and eSIM",
    },
    display: {
      type: "P-OLED / HDR",
      size: '5.5"',
      resolution: "1080 x 2160",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 9.0 (Pie), upgradable to Android 12",
      chipset: "Qualcomm SDM845 Snapdragon 845 (10 nm)",
      cpu: "Octa-core (4x2.5 GHz Kryo 385 Gold & 4x1.6 GHz Kryo 385 Silver)",
      gpu: "Adreno 630",
    },
    memory: {
      cardSlot: "No",
      internal: "128 GB",
      ram: "4 GB",
    },
    mainCamera: {
      picture: {
        type: "Single",
        details: [
          '12.2 MP, f/1.8, 28mm (wide), 1/2.55", 1.4µm, dual pixel PDAF, OIS',
        ],
      },
      features: "Dual-LED flash / Pixel Shift / Auto-HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120fps, 1080p@30fps (gyro-EIS)",
    },
    selfieCamera: {
      picture: {
        type: "Dual",
        details:
          "8 MP, f/1.8, 28mm (wide), PDAF / 8 MP, f/2.2, 19mm (ultrawide), no AF",
      },
      features: "Auto-HDR",
      video: "1080p@30fps",
    },
    Battery: "Li-Po 2915 mAh, non-removable",
    colors: [
      {
        name: "Clearly White",
        code: "#f8f8f8",
      },
      {
        name: "Just Black",
        code: "#303032",
      },
      {
        name: "Not Pink",
        code: "#ecdedd",
      },
    ],
    price: 278.99,
    quantity: 7,
    images: cellImgs,
  },
  {
    _id: uuid(),
    name: "Google Pixel 4 XL",
    brand: "Google",
    year: 2019,
    network: "GSM / CDMA / HSPA / EVDO / LTE",
    body: {
      dimensions: "160.4 x 75.1 x 8.2 mm",
      weight: "193 g",
      sim: "Nano-SIM and eSIM",
    },
    display: {
      type: "P-OLED / 90Hz / HDR",
      size: '6.3"',
      resolution: "1440 x 3040",
      protection: "Corning Gorilla Glass 5",
    },
    platform: {
      os: "Android 10, upgradable to Android 13",
      chipset: "Qualcomm SM8150 Snapdragon 855 (7 nm)",
      cpu: "Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)",
      gpu: "Adreno 640",
    },
    memory: {
      cardSlot: "No",
      internal: "128 GB",
      ram: "6 GB",
    },
    mainCamera: {
      picture: {
        type: "Dual",
        details: [
          '12.2 MP, f/1.7, 27mm (wide), 1/2.55", 1.4µm, dual pixel PDAF, OIS',
          '16 MP, f/2.4, 50mm (telephoto), 1/3.6", 1.0µm, PDAF, OIS, 2x optical zoom',
        ],
      },
      features: "Dual-LED flash / Pixel Shift / Auto-HDR / panorama",
      video: "4K@30fps, 1080p@30/60/120fps, 1080p@30fps (gyro-EIS)",
    },
    selfieCamera: {
      picture: {
        type: "Single",
        details: "8 MP, f/2.0, 22mm (wide), 1.22µm, no AF",
      },
      features: "Auto-HDR",
      video: "1080p@30fps",
    },
    Battery: "Li-Po 3700 mAh, non-removable",
    colors: [
      {
        name: "Clearly White",
        code: "#e9edf0",
      },
      {
        name: "Just Black",
        code: "#141414",
      },
      {
        name: "Oh So Orange",
        code: "#e47a62",
      },
    ],
    price: 365.99,
    quantity: 4,
    images: cellImgs,
  },
];
