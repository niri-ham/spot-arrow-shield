import type { Service, Product } from "./types";

// TODO(Lovable Cloud): replace with supabase.from("services").select()
const SERVICES: Service[] = [
  {
    id: "svc-1",
    slug: "video-surveillance",
    title: "Video Surveillance Installation",
    icon: "Camera",
    summary:
      "Professional installation of CCTV and IP camera systems for homes and businesses, indoors and out.",
    bullets: [
      "AI-capable security cameras",
      "Indoor and outdoor coverage",
      "Residential and commercial setups",
      "Clean, concealed wiring",
    ],
  },
  {
    id: "svc-2",
    slug: "remote-monitoring",
    title: "Remote Monitoring Setup",
    icon: "Smartphone",
    summary:
      "Watch your property from anywhere with secure mobile and desktop access, live view, and playback.",
    bullets: [
      "Mobile phone access",
      "PC and tablet access",
      "Live camera viewing",
      "Remote playback and alerts",
    ],
  },
  {
    id: "svc-3",
    slug: "maintenance-support",
    title: "Maintenance & Technical Support",
    icon: "Wrench",
    summary:
      "Long-term care for your security system — troubleshooting, repairs, and ongoing optimization.",
    bullets: [
      "Camera adjustments and tuning",
      "System repairs and firmware updates",
      "Troubleshooting and diagnostics",
      "Priority ongoing support",
    ],
  },
  {
    id: "svc-4",
    slug: "network-design",
    title: "Network Design & Installation",
    icon: "Network",
    summary:
      "Reliable LAN and Wi-Fi infrastructure engineered for security systems and daily operations.",
    bullets: [
      "LAN and structured network setup",
      "Business-grade Wi-Fi coverage",
      "Network planning for homes and offices",
      "Reliable backbone for cameras and devices",
    ],
  },
  {
    id: "svc-5",
    slug: "network-optimization",
    title: "Network Optimization & Security",
    icon: "ShieldCheck",
    summary:
      "Faster, safer networks. We eliminate dead zones and harden business connectivity.",
    bullets: [
      "Improve speed and stability",
      "Secure business networks",
      "Reduce dropouts and dead zones",
      "Optimize for cameras and IoT",
    ],
  },
  {
    id: "svc-6",
    slug: "access-control",
    title: "Access Control Installation",
    icon: "KeyRound",
    summary:
      "Control who enters, when, and where — for offices, warehouses, and restricted areas.",
    bullets: [
      "Door access systems",
      "Keycard and keypad entry",
      "Restricted-area control",
      "Multi-door management",
    ],
  },
  {
    id: "svc-7",
    slug: "structured-cabling",
    title: "Structured Cabling",
    icon: "Cable",
    summary:
      "Clean, organized cable infrastructure for cameras, networks, and access systems.",
    bullets: [
      "Data and ethernet cabling",
      "Fiber optic runs",
      "Cable management and labeling",
      "Future-ready infrastructure",
    ],
  },
  {
    id: "svc-8",
    slug: "systems-integration",
    title: "Systems Integration",
    icon: "Workflow",
    summary:
      "Unified security — cameras, alarms, access control, and networking working as one system.",
    bullets: [
      "Unified camera + access + alarm",
      "Single-pane management",
      "Custom design for your property",
      "Built around how you operate",
    ],
  },
];

// TODO(Lovable Cloud): replace with supabase.from("products").select()
const PRODUCTS: Product[] = [
  { id: "p1", name: "AI-Capable Cameras", category: "Surveillance", icon: "Cpu" },
  { id: "p2", name: "CCTV Cameras", category: "Surveillance", icon: "Camera" },
  { id: "p3", name: "IP Cameras", category: "Surveillance", icon: "Video" },
  { id: "p4", name: "NVR / DVR Systems", category: "Recording", icon: "HardDrive" },
  { id: "p5", name: "Network Switches", category: "Networking", icon: "Network" },
  { id: "p6", name: "Routers & Access Points", category: "Networking", icon: "Wifi" },
  { id: "p7", name: "Access Control Devices", category: "Access", icon: "KeyRound" },
  { id: "p8", name: "Cabling & Fiber Optics", category: "Infrastructure", icon: "Cable" },
];

export const getServices = (): Service[] => SERVICES;
export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getProducts = (): Product[] => PRODUCTS;
