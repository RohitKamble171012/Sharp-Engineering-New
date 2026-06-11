// Auto-import all 30 uploaded photos as CDN URLs.
const modules = import.meta.glob("../assets/photos/*.asset.json", { eager: true });
const all: Record<string, string> = {};
for (const [path, mod] of Object.entries(modules)) {
  const key = path.split("/").pop()!.replace(".asset.json", ""); // e.g. photo-01.jpg
  all[key] = mod.default.url;
}

export const photo = (n: number) => all[`photo-${String(n).padStart(2, "0")}.jpg`];

export const photos = Array.from({ length: 30 }, (_, i) => photo(i + 1));

// photo-01 to photo-17, photo-27, photo-28, photo-29 = product shots
// photo-18 to photo-26 = facility interior shots
// photo-30 = facility exterior / hero
export const heroPhoto = photo(30);
export const facadePhoto = photo(26);
export const facilityPhotos = [18, 19, 20, 21, 22, 23, 24, 25, 26].map(photo);
export const productPhotos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 27, 28, 29].map(
  (n) => ({ src: photo(n), idx: n }),
);

export const productCatalog: {
  id: number;
  name: string;
  category: "Drum Gear Shift" | "Drum Change" | "Shafts & Axles" | "Engine Components";
  material: string;
  process: string;
  src: string;
}[] = [
  {
    id: 1,
    name: "KSP Housing",
    category: "Drum Gear Shift",
    material: "Cast Iron",
    process: "CNC Turning + Milling",
    src: photo(1),
  },
  {
    id: 2,
    name: "Impeller Hub",
    category: "Engine Components",
    material: "Cast Iron",
    process: "CNC Turning + VMC Machining",
    src: photo(2),
  },
  {
    id: 3,
    name: "Royal Enfield — L: 100.6mm",
    category: "Shafts & Axles",
    material: "EN24 Steel",
    process: "CNC Turning + Precision Grinding",
    src: photo(3),
  },
  {
    id: 4,
    name: "Royal Enfield — L: 135mm",
    category: "Shafts & Axles",
    material: "EN24 Steel",
    process: "CNC Turning + Precision Grinding",
    src: photo(4),
  },
  {
    id: 5,
    name: "Bajaj Drum Change",
    category: "Drum Change",
    material: "Cast Iron",
    process: "CNC Turning + Drilling",
    src: photo(5),
  },
  {
    id: 6,
    name: "Bajaj Drum Gear Shift GL",
    category: "Drum Gear Shift",
    material: "Cast Iron",
    process: "CNC Turning + Milling",
    src: photo(6),
  },
  {
    id: 7,
    name: "KWA — Drum Gear Shift",
    category: "Drum Gear Shift",
    material: "Cast Iron",
    process: "CNC Turning + VMC Machining",
    src: photo(7),
  },
  {
    id: 8,
    name: "KTC — Drum Gear Shift",
    category: "Drum Gear Shift",
    material: "Cast Iron",
    process: "CNC Turning + Milling",
    src: photo(8),
  },
  {
    id: 9,
    name: "KZAA (FF) — Drum Gear Shift",
    category: "Drum Gear Shift",
    material: "Cast Iron",
    process: "CNC + VMC Multi-axis Machining",
    src: photo(9),
  },
  {
    id: 10,
    name: "KZAA (SF) — Drum Gear Shift",
    category: "Drum Gear Shift",
    material: "Cast Iron",
    process: "CNC + VMC Multi-axis Machining",
    src: photo(10),
  },
  {
    id: 11,
    name: "JW — Drum Change",
    category: "Drum Change",
    material: "EN8 Steel",
    process: "CNC Turning + Boring",
    src: photo(11),
  },
  {
    id: 12,
    name: "DK / JG — Drum Change",
    category: "Drum Change",
    material: "EN8 Steel",
    process: "CNC Turning + Drilling",
    src: photo(12),
  },
  {
    id: 13,
    name: "DGS Mahindra Sample",
    category: "Drum Change",
    material: "EN8 Steel",
    process: "CNC + VMC Machining",
    src: photo(13),
  },
  {
    id: 14,
    name: "Drum Gear Shift — Altus Leo",
    category: "Drum Gear Shift",
    material: "Cast Iron",
    process: "CNC Turning + Milling",
    src: photo(14),
  },
  {
    id: 15,
    name: "Engineering Enterprises — Axle",
    category: "Shafts & Axles",
    material: "EN19 Steel",
    process: "CNC Turning + Thread Milling",
    src: photo(15),
  },
  {
    id: 16,
    name: "Fluid Line — Axle",
    category: "Shafts & Axles",
    material: "Cast Iron",
    process: "CNC Turning + Face Milling",
    src: photo(16),
  },
  {
    id: 17,
    name: "Auto Part — Shaft",
    category: "Shafts & Axles",
    material: "EN24 Steel",
    process: "CNC Turning + Cylindrical Grinding",
    src: photo(17),
  },
  {
    id: 18,
    name: "Camshaft — Type A",
    category: "Engine Components",
    material: "Hardened Alloy Steel",
    process: "CNC Turning + Cam Milling (HAAS)",
    src: photo(27),
  },
  {
    id: 19,
    name: "Camshaft — Type B",
    category: "Engine Components",
    material: "Hardened Alloy Steel",
    process: "CNC Turning + VMC Keyway + SPM Tapping",
    src: photo(28),
  },
  {
    id: 20,
    name: "Rotor Oil Filter — Hero",
    category: "Engine Components",
    material: "Cast Iron",
    process: "CNC Turning + VMC Machining",
    src: photo(29),
  },
];