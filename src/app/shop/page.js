"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Extended Product Data for Nigerian Market (with expanded iPhone catalog)
const PRODUCTS = [
  { 
    id: 1, 
    name: "Apple iPhone 15 Pro Max", 
    category: "Smartphones", 
    price: 1450000, 
    image: "/iphone_15_pro.png",
    isActive: true,
    desc: "The ultimate flagship: massive 6.7\" screen, premium titanium body, 5x optical telephoto camera, and 256GB starting storage.",
    specs: {
      screen: "6.7\" Super Retina XDR OLED, Always-On, 120Hz ProMotion",
      camera: "48MP Pro Main + 12MP Ultra-Wide + 12MP 5x Optical Telephoto Zoom",
      battery: "Maximum battery life (Up to 29 hours video playback)",
      storage: "256GB Ultra-Fast NVMe Storage",
      ram: "8GB RAM",
      processor: "A17 Pro industry-first 3nm chip with 6-core GPU"
    }
  },
  { 
    id: 2, 
    name: "Apple iPhone 15 Pro", 
    category: "Smartphones", 
    price: 1200000, 
    image: "/iphone_15_pro.png",
    isActive: true,
    desc: "Premium aerospace-grade titanium design, console-level A17 Pro gaming chip, and pro 3x zoom triple camera.",
    specs: {
      screen: "6.1\" Super Retina XDR OLED, Always-On, 120Hz ProMotion",
      camera: "48MP Pro Main + 12MP Ultra-Wide + 12MP 3x Optical Telephoto Zoom",
      battery: "All-day video playback (Up to 23 hours)",
      storage: "128GB Ultra-Fast NVMe Storage",
      ram: "8GB RAM",
      processor: "A17 Pro industry-first 3nm chip with 6-core GPU"
    }
  },
  { 
    id: 3, 
    name: "Apple iPhone 15", 
    category: "Smartphones", 
    price: 880000, 
    image: "/iphone_15_pro.png",
    isActive: true,
    desc: "The modern standard: features the revolutionary Dynamic Island, 48MP Dual-Lens camera, and universal USB-C connectivity.",
    specs: {
      screen: "6.1\" Super Retina XDR OLED display with Dynamic Island",
      camera: "48MP Dual-Lens Main Camera + 12MP Ultra-Wide & 2x Telephoto",
      battery: "Up to 20 hours video playback + USB-C charge",
      storage: "128GB Internal Storage",
      ram: "6GB RAM",
      processor: "A16 Bionic processor with 5-core GPU"
    }
  },
  { 
    id: 4, 
    name: "Apple iPhone 14", 
    category: "Smartphones", 
    price: 680000, 
    image: "/iphone_15_pro.png",
    isActive: true,
    desc: "Robust workhorse: cinematic video modes, Action Mode stabilization, and the reliable high-efficiency A15 chip.",
    specs: {
      screen: "6.1\" Super Retina XDR OLED screen with Ceramic Shield",
      camera: "12MP Advanced Dual-Lens with Action Mode & Photonic Engine",
      battery: "Up to 20 hours video playback",
      storage: "128GB ROM Storage",
      ram: "6GB RAM",
      processor: "A15 Bionic processor with 5-core GPU"
    }
  },
  { 
    id: 5, 
    name: "Apple iPhone 13", 
    category: "Smartphones", 
    price: 520000, 
    image: "/iphone_15_pro.png",
    isActive: true,
    desc: "Sweet-spot premium: outstanding dual camera, excellent efficiency, and modern design at our most accessible iPhone rate.",
    specs: {
      screen: "6.1\" Super Retina XDR OLED display",
      camera: "12MP Advanced Dual-Lens with Cinematic Mode (1080p at 30 fps)",
      battery: "Up to 19 hours video playback",
      storage: "128GB ROM Storage",
      ram: "4GB RAM",
      processor: "A15 Bionic processor with 4-core GPU"
    }
  },
  { 
    id: 6, 
    name: "Samsung Galaxy A55 5G", 
    category: "Smartphones", 
    price: 450000, 
    image: "/samsung_a55.png",
    isActive: true,
    desc: "Super AMOLED display, exceptional low-light triple camera, and robust 5G connectivity.",
    specs: {
      screen: "6.6\" Super AMOLED, 120Hz fluid refresh",
      camera: "50MP OIS Main + 12MP Ultra-Wide + 5MP Macro",
      battery: "5,000mAh (Up to 2 days life) + 25W Fast Charge",
      storage: "128GB Internal Storage (expandable)",
      ram: "8GB RAM for high-speed multitasking",
      processor: "Exynos 1480 Octa-Core 5G"
    }
  },
  { 
    id: 7, 
    name: "Xiaomi Redmi Note 13", 
    category: "Smartphones", 
    price: 260000, 
    image: "/redmi_note_13.png",
    isActive: true,
    desc: "Super-resolution 108MP camera, smooth 120Hz display, and rapid turbo charging in a sleek profile.",
    specs: {
      screen: "6.67\" FHD+ AMOLED Display, 120Hz refresh",
      camera: "108MP Ultra-Clear Main + 8MP Ultra-Wide + 2MP Macro",
      battery: "5,000mAh with 33W Fast Turbo Charging",
      storage: "128GB ROM Storage",
      ram: "6GB RAM (+ virtual RAM expansion)",
      processor: "MediaTek Dimensity 6080 5G Processor"
    }
  },
  // Upcoming roadmap categories - marked coming soon
  { id: 8, name: "HP Pavilion 15 Laptop", category: "Laptops", price: 650000, icon: "💻", isActive: false, desc: "Sleek student & business workhorse with Core i5 and 16GB RAM." },
  { id: 9, name: "Apple MacBook Air M2", category: "Laptops", price: 1400000, icon: "💻", isActive: false, desc: "Ultrathin luxury notebook with Apple M2 chip and all-day silent battery." },
  { id: 10, name: "LG 55\" 4K Smart TV", category: "Televisions", price: 520000, icon: "📺", isActive: false, desc: "Immersive home theater with HDR10 Pro, WebOS smart apps, and satellite." },
  { id: 11, name: "Hisense 43\" Smart TV", category: "Televisions", price: 280000, icon: "📺", isActive: false, desc: "Crisp Full HD panel preloaded with Netflix, YouTube, and digital sound." },
  { id: 12, name: "Samsung Double Door Fridge", category: "Refrigerators", price: 850000, icon: "❄️", isActive: false, desc: "Premium 320L double-door cooling system with digital inverter saving." },
  { id: 13, name: "Firman 3.5KVA Eco Generator", category: "Generators", price: 380000, icon: "⚡", isActive: false, desc: "Essential power backups with key start and 100% copper windings." },
  { id: 14, name: "Sumec Firman 6.5KVA Generator", category: "Generators", price: 720000, icon: "⚡", isActive: false, desc: "Heavy-duty power generator suitable for powering entire houses." },
  { id: 15, name: "Panasonic Microwave Oven", category: "Home Appliances", price: 120000, icon: "🔌", isActive: false, desc: "Family-sized grill microwave with digital touch defrost." },
  { id: 16, name: "Scanfrost Gas Cooker (4 Burners)", category: "Home Appliances", price: 340000, icon: "🍳", isActive: false, desc: "Stainless steel gas oven, grill hobs, and automatic ignition." },
  { id: 17, name: "Sony WH-1000XM4 Headphones", category: "Electronics", price: 250000, icon: "🎧", isActive: false, desc: "World-class active noise cancellation over-ear headset." },
  { id: 18, name: "Modern L-Shaped Sectional Sofa", category: "Furniture", price: 680000, icon: "🛋️", isActive: false, desc: "High-density foam sectional seating, luxury durable fabric." },
];

function ShopContent() {
  const searchParams = useSearchParams();

  // Search & Filter State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(1500000);

  // Active detail modal state (Smartphones)
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalRepaymentMonths, setModalRepaymentMonths] = useState(3);

  // Wizard credit application state (Smartphones)
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);

  // Coming Soon Notification State
  const [comingSoonProduct, setComingSoonProduct] = useState(null);
  const [notificationEmail, setNotificationEmail] = useState("");
  const [notificationRegistered, setNotificationRegistered] = useState(false);

  // Form Fields (Credit Wizard)
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [incomeBracket, setIncomeBracket] = useState("₦150,000 - ₦350,000");
  const [idType, setIdType] = useState("BVN");
  const [idNumber, setIdNumber] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Read homepage parameters if they exist
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      const catMap = {
        smartphones: "Smartphones",
        laptops: "Laptops",
        televisions: "Televisions",
        refrigerators: "Refrigerators",
        generators: "Generators",
        appliances: "Home Appliances",
        electronics: "Electronics",
        furniture: "Furniture"
      };
      if (catMap[cat.toLowerCase()]) {
        setSelectedCategory(catMap[cat.toLowerCase()]);
      }
    }

    const amount = searchParams.get("amount");
    if (amount) {
      setMaxPrice(Math.max(Number(amount), 300000));
    }
  }, [searchParams]);

  const categoriesList = ["All", "Smartphones", "Laptops", "Televisions", "Refrigerators", "Generators", "Home Appliances", "Electronics", "Furniture"];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleOpenPlan = (product) => {
    if (product.isActive) {
      setActiveProduct(product);
      setModalRepaymentMonths(3);
    } else {
      setComingSoonProduct(product);
      setNotificationEmail("");
      setNotificationRegistered(false);
    }
  };

  const handleClosePlan = () => {
    setActiveProduct(null);
  };

  const handleOpenWizard = () => {
    setWizardStep(1);
    setIsWizardOpen(true);
  };

  const handleCloseWizard = () => {
    setIsWizardOpen(false);
    setFullName("");
    setPhone("");
    setIdNumber("");
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (wizardStep === 1) {
      setWizardStep(2);
    } else if (wizardStep === 2) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setWizardStep(3);
      }, 2500);
    }
  };

  const handleRegisterNotification = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setNotificationRegistered(true);
    }, 1200);
  };

  return (
    <div style={{ padding: "60px 0 100px", minHeight: "80vh" }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Showcase Catalog</span>
          <h1 style={{ fontSize: "36px", marginTop: "8px" }}>Explore UPA Installments</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", marginTop: "8px", maxWidth: "600px", margin: "8px auto 0" }}>
            Select any <strong style={{ color: "var(--primary-navy)", fontWeight: "700" }}>Smartphone</strong> to run a live payment simulation and credit wizard preview. Other items represent our launch roadmap.
          </p>
        </div>

        {/* Catalog Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }} className="grid-responsive-layout">
          
          {/* Sidebar Filters */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", alignContent: "start" }}>
            {/* Search Card */}
            <div className="glass-card" style={{ padding: "24px", backgroundColor: "#fff" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "16px", color: "var(--primary-navy)" }}>Search Catalog</h3>
              <input
                type="text"
                placeholder="Search phones, appliances..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-light)",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "inherit"
                }}
              />
            </div>

            {/* Categories filter list */}
            <div className="glass-card" style={{ padding: "24px", backgroundColor: "#fff" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "16px", color: "var(--primary-navy)" }}>Category</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "8px 12px",
                      textAlign: "left",
                      borderRadius: "var(--radius-sm)",
                      border: "none",
                      backgroundColor: selectedCategory === cat ? "var(--emerald-light)" : "transparent",
                      color: selectedCategory === cat ? "var(--emerald-dark)" : "var(--text-secondary)",
                      fontWeight: selectedCategory === cat ? "700" : "500",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    {cat}
                    {cat !== "All" && cat !== "Smartphones" && (
                      <span style={{ fontSize: "9px", padding: "2px 6px", backgroundColor: "var(--accent-amber-light)", color: "var(--accent-amber)", borderRadius: "var(--radius-sm)", marginLeft: "8px", fontWeight: "700" }}>Soon</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Limit Filter */}
            <div className="glass-card" style={{ padding: "24px", backgroundColor: "#fff" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "16px", color: "var(--primary-navy)" }}>Max Budget</h3>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px" }}>
                <span>Limit:</span>
                <strong style={{ color: "var(--primary-navy)" }}>₦{maxPrice.toLocaleString()}</strong>
              </div>
              <input
                type="range"
                min="150000"
                max="1500000"
                step="50000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--primary-emerald)", cursor: "pointer" }}
              />
            </div>
          </div>

          {/* Product Grid Area */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
            {filteredProducts.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "28px" }}>
                {filteredProducts.map((p) => {
                  const dp = p.price * 0.2;
                  const mo = (p.price - dp) / 3;

                  return (
                    <div
                      key={p.id}
                      className="glass-card"
                      style={{
                        padding: "24px",
                        backgroundColor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        opacity: p.isActive ? 1 : 0.8,
                        position: "relative"
                      }}
                    >
                      {/* Coming soon badge */}
                      {!p.isActive && (
                        <div style={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          backgroundColor: "var(--accent-amber)",
                          color: "var(--primary-navy)",
                          fontSize: "11px",
                          fontWeight: "800",
                          padding: "6px 12px",
                          borderRadius: "var(--radius-full)",
                          zIndex: 10,
                          boxShadow: "var(--shadow-sm)"
                        }}>
                          Coming Soon ⏳
                        </div>
                      )}

                      {/* Product Media Image Card */}
                      <div style={{
                        height: "220px",
                        backgroundColor: "var(--bg-neutral)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        marginBottom: "20px",
                        padding: "12px",
                        border: "1px solid var(--border-light)"
                      }}>
                        {p.isActive ? (
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            style={{ 
                              height: "100%", 
                              width: "100%", 
                              objectFit: "contain",
                              transition: "transform var(--transition-normal)"
                            }} 
                            className="product-card-img"
                          />
                        ) : (
                          <div style={{ fontSize: "80px" }}>{p.icon}</div>
                        )}
                      </div>

                      {/* Details */}
                      <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase" }}>{p.category}</span>
                      <h3 style={{ fontSize: "20px", marginTop: "4px", marginBottom: "8px", color: "var(--primary-navy)" }}>
                        {p.name}
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "20px", flexGrow: "1" }}>
                        {p.desc}
                      </p>

                      {/* Phone quick specifications panel */}
                      {p.isActive && p.specs && (
                        <div style={{
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                          marginBottom: "20px",
                          paddingTop: "12px",
                          borderTop: "1px solid var(--border-light)"
                        }}>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <span>📸</span>
                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.specs.camera.split("+")[0]} camera</span>
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <span>💾</span>
                            <span>{p.specs.ram.split(" ")[0]} RAM + {p.specs.storage.split(" ")[0]} Storage</span>
                          </div>
                        </div>
                      )}

                      {/* Repayment details banner */}
                      <div style={{
                        padding: "12px 16px",
                        backgroundColor: p.isActive ? "var(--bg-neutral)" : "#FFFDF5",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "13px",
                        marginBottom: "20px",
                        borderLeft: p.isActive ? "3px solid var(--primary-emerald)" : "3px solid var(--accent-amber)"
                      }}>
                        {p.isActive ? (
                          <>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                              <span>Downpayment:</span>
                              <strong>₦{dp.toLocaleString()}</strong>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <span>3 Months Installment:</span>
                              <strong style={{ color: "var(--emerald-dark)" }}>₦{Math.ceil(mo).toLocaleString()}/mo</strong>
                            </div>
                          </>
                        ) : (
                          <div style={{ color: "var(--accent-amber)", fontWeight: "600", fontSize: "12px" }}>
                            🚀 Catalog launches next phase. Pre-register today!
                          </div>
                        )}
                      </div>

                      {/* Pricing Footer */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                        <div>
                          <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Total Value</div>
                          <strong style={{ fontSize: "18px", color: "var(--primary-navy)" }}>₦{p.price.toLocaleString()}</strong>
                        </div>
                        <button
                          onClick={() => handleOpenPlan(p)}
                          className={`btn ${p.isActive ? "btn-primary" : "btn-outline"}`}
                          style={{ 
                            padding: "10px 16px", 
                            fontSize: "12px",
                            borderColor: p.isActive ? "transparent" : "var(--accent-amber)",
                            color: p.isActive ? "white" : "var(--primary-navy)"
                          }}
                        >
                          {p.isActive ? "View Plan" : "Notify Me"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="glass-card" style={{ padding: "60px 24px", textAlign: "center", backgroundColor: "#fff" }}>
                <span style={{ fontSize: "48px" }}>🔍</span>
                <h3 style={{ fontSize: "20px", marginTop: "16px", marginBottom: "8px" }}>No Products Found</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  Relax your searches or raise the budget slider!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PLAN DETAILS MODAL (ACTIVE SMARTPHONES) */}
      {activeProduct && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          padding: "24px"
        }}>
          <div className="glass-card" style={{
            width: "100%",
            maxWidth: "580px",
            backgroundColor: "#fff",
            padding: "36px",
            boxShadow: "var(--shadow-xl)",
            position: "relative",
            maxHeight: "92vh",
            overflowY: "auto"
          }}>
            {/* Close Button */}
            <button
              onClick={handleClosePlan}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "var(--text-muted)"
              }}
            >
              &times;
            </button>

            {/* Header info */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px", marginBottom: "28px", alignItems: "center" }}>
              <div style={{
                height: "120px",
                backgroundColor: "var(--bg-neutral)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                border: "1px solid var(--border-light)"
              }}>
                <img src={activeProduct.image} alt={activeProduct.name} style={{ height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <span style={{ fontSize: "11px", color: "var(--primary-emerald)", fontWeight: "700", textTransform: "uppercase" }}>Smartphone Plan</span>
                <h3 style={{ fontSize: "24px", color: "var(--primary-navy)", margin: "4px 0" }}>{activeProduct.name}</h3>
                <strong style={{ fontSize: "16px", color: "var(--text-secondary)" }}>Value: ₦{activeProduct.price.toLocaleString()}</strong>
              </div>
            </div>

            {/* Detailed specifications list */}
            {activeProduct.specs && (
              <div style={{
                backgroundColor: "var(--bg-neutral)",
                padding: "20px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                marginBottom: "24px"
              }}>
                <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "12px", color: "var(--primary-navy)", borderBottom: "1px solid var(--border-light)", paddingBottom: "6px" }}>
                  Device Technical Specifications
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12.5px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "8px" }}>
                    <span style={{ color: "var(--text-muted)" }}>Display</span>
                    <strong style={{ color: "var(--text-secondary)" }}>{activeProduct.specs.screen}</strong>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "8px" }}>
                    <span style={{ color: "var(--text-muted)" }}>Camera system</span>
                    <strong style={{ color: "var(--text-secondary)" }}>{activeProduct.specs.camera}</strong>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "8px" }}>
                    <span style={{ color: "var(--text-muted)" }}>Battery & speed</span>
                    <strong style={{ color: "var(--text-secondary)" }}>{activeProduct.specs.battery}</strong>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "8px" }}>
                    <span style={{ color: "var(--text-muted)" }}>Memory & storage</span>
                    <strong style={{ color: "var(--text-secondary)" }}>{activeProduct.specs.storage} | {activeProduct.specs.ram}</strong>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "8px" }}>
                    <span style={{ color: "var(--text-muted)" }}>Processor</span>
                    <strong style={{ color: "var(--text-secondary)" }}>{activeProduct.specs.processor}</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Repayment Month selector */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", marginBottom: "12px", fontWeight: "600", fontSize: "14px", color: "var(--text-secondary)" }}>
                Choose Installment Timeline
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {[1, 2, 3].map((months) => (
                  <button
                    key={months}
                    onClick={() => setModalRepaymentMonths(months)}
                    style={{
                      padding: "10px",
                      borderRadius: "var(--radius-md)",
                      border: modalRepaymentMonths === months ? "2px solid var(--primary-emerald)" : "1px solid var(--border-light)",
                      backgroundColor: modalRepaymentMonths === months ? "var(--emerald-light)" : "transparent",
                      color: modalRepaymentMonths === months ? "var(--emerald-dark)" : "var(--text-secondary)",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    {months} {months === 1 ? "Month" : "Months"}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation breakdowns */}
            <div style={{
              backgroundColor: "var(--bg-neutral)",
              padding: "20px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-light)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "28px"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ color: "var(--text-secondary)" }}>Initial Down Payment (20% due today)</span>
                <strong>₦{(activeProduct.price * 0.2).toLocaleString()}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ color: "var(--text-secondary)" }}>Interest Charge (UPA Promise)</span>
                <strong style={{ color: "var(--primary-emerald)" }}>0.00% (Interest Free)</strong>
              </div>
              <div style={{ height: "1px", backgroundColor: "var(--border-light)" }}></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>Monthly Repayment</span>
                  <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>Spread across {modalRepaymentMonths} {modalRepaymentMonths === 1 ? "month" : "months"}</div>
                </div>
                <strong style={{ color: "var(--emerald-dark)", fontSize: "22px", fontWeight: "800" }}>
                  ₦{Math.ceil((activeProduct.price * 0.8) / modalRepaymentMonths).toLocaleString()}
                </strong>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "16px" }}>
              <button
                onClick={handleClosePlan}
                className="btn btn-outline"
                style={{ flex: 1, padding: "10px 0" }}
              >
                Back
              </button>
              <button
                onClick={handleOpenWizard}
                className="btn btn-primary"
                style={{ flex: 2, padding: "10px 0" }}
              >
                Apply for Installments
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ROADMAP NOTIFY ME DIALOG (ROADMAP PRODUCTS) */}
      {comingSoonProduct && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2500,
          padding: "24px"
        }}>
          <div className="glass-card" style={{
            width: "100%",
            maxWidth: "460px",
            backgroundColor: "#fff",
            padding: "36px",
            boxShadow: "var(--shadow-xl)",
            position: "relative"
          }}>
            <button
              onClick={() => setComingSoonProduct(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "var(--text-muted)"
              }}
            >
              &times;
            </button>

            {notificationRegistered ? (
              <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
                <span style={{ fontSize: "56px" }}>🔔</span>
                <h3 style={{ fontSize: "20px", color: "var(--primary-navy)", marginTop: "16px", marginBottom: "8px" }}>Notification Registered!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Excellent! We have successfully registered your address. You will receive immediate priority notification as soon as UPA launches the <strong>{comingSoonProduct.category}</strong> catalog in Nigeria!
                </p>
                <button
                  onClick={() => setComingSoonProduct(null)}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "10px 0" }}
                >
                  Return to Shop
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterNotification}>
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <span style={{ fontSize: "56px" }}>⏳</span>
                  <h3 style={{ fontSize: "22px", color: "var(--primary-navy)", marginTop: "8px" }}>Coming Soon</h3>
                  <span style={{ fontSize: "13px", color: "var(--accent-amber)", fontWeight: "700", textTransform: "uppercase" }}>
                    Category Roadmap: {comingSoonProduct.category}
                  </span>
                </div>
                
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                  The <strong>{comingSoonProduct.name}</strong> plan is scheduled for our Phase 2 expansion. Register your interest below to receive priority access and early-bird notifications!
                </p>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. subscriber@unitedpay4africa.com"
                    value={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-light)",
                      fontSize: "14px",
                      outline: "none",
                      fontFamily: "inherit"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isVerifying}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px 0", backgroundColor: "var(--accent-amber)", color: "var(--primary-navy)", fontWeight: "800" }}
                >
                  {isVerifying ? "Registering Interest..." : "Notify Me When Launched"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* CREDIT APPLICATION WIZARD MODAL (ACTIVE SMARTPHONES) */}
      {isWizardOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3000,
          padding: "24px"
        }}>
          <div className="glass-card" style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "#fff",
            padding: "36px",
            boxShadow: "var(--shadow-xl)",
            position: "relative",
            maxHeight: "95vh",
            overflowY: "auto"
          }}>
            {wizardStep !== 3 && (
              <button
                onClick={handleCloseWizard}
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "var(--text-muted)"
                }}
              >
                &times;
              </button>
            )}

            {wizardStep !== 3 && (
              <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
                <div style={{ height: "4px", flex: 1, borderRadius: "2px", backgroundColor: "var(--primary-emerald)" }}></div>
                <div style={{ height: "4px", flex: 1, borderRadius: "2px", backgroundColor: wizardStep >= 2 ? "var(--primary-emerald)" : "var(--border-light)" }}></div>
                <div style={{ height: "4px", flex: 1, borderRadius: "2px", backgroundColor: "var(--border-light)" }}></div>
              </div>
            )}

            {/* STEP 1 */}
            {wizardStep === 1 && (
              <form onSubmit={handleNextStep}>
                <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--primary-navy)" }}>Tell Us About Yourself</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "24px" }}>
                  Let's check your eligibility. We keep all records completely encrypted.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babajide Alao"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-light)",
                        fontSize: "14px",
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 803 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-light)",
                        fontSize: "14px",
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>Monthly Salary/Income Bracket</label>
                    <select
                      value={incomeBracket}
                      onChange={(e) => setIncomeBracket(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-light)",
                        fontSize: "14px",
                        outline: "none",
                        fontFamily: "inherit",
                        backgroundColor: "white"
                      }}
                    >
                      <option>Under ₦150,000</option>
                      <option>₦150,000 - ₦350,000</option>
                      <option>₦350,000 - ₦650,000</option>
                      <option>₦650,000+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px 0" }}
                >
                  Continue
                </button>
              </form>
            )}

            {/* STEP 2 */}
            {wizardStep === 2 && (
              <form onSubmit={handleNextStep}>
                <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--primary-navy)" }}>Verify Digital Identity</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "20px" }}>
                  To process pre-approval instantly, select one national document category.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>Select Identifier Document</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      {["BVN", "NIN"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setIdType(type)}
                          style={{
                            padding: "10px",
                            borderRadius: "var(--radius-md)",
                            border: idType === type ? "2px solid var(--primary-emerald)" : "1px solid var(--border-light)",
                            backgroundColor: idType === type ? "var(--emerald-light)" : "transparent",
                            color: idType === type ? "var(--emerald-dark)" : "var(--text-secondary)",
                            fontWeight: "700",
                            cursor: "pointer"
                          }}
                        >
                          {type === "BVN" ? "Bank Verification (BVN)" : "National Identity (NIN)"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px" }}>Enter 11-Digit {idType} Number</label>
                    <input
                      type="text"
                      required
                      pattern="\d{11}"
                      maxLength="11"
                      placeholder={`Enter 11-digit ${idType}`}
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value.replace(/\D/g, ""))}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-light)",
                        fontSize: "14px",
                        outline: "none",
                        fontFamily: "inherit",
                        letterSpacing: "0.2em",
                        textAlign: "center"
                      }}
                    />
                  </div>

                  <div style={{
                    padding: "12px 16px",
                    backgroundColor: "#EFF6FF",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid #BFDBFE",
                    fontSize: "12px",
                    color: "#1E3A8A",
                    lineHeight: "1.6"
                  }}>
                    🛡️ <strong>Government Verified API Match:</strong> We only verify your identity match using secure government endpoints. UPA will never debit your account or share details without your approval.
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isVerifying || idNumber.length !== 11}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px 0", position: "relative" }}
                >
                  {isVerifying ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <span className="spinner" style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid white",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 0.6s linear infinite"
                      }}></span>
                      Verifying with Government APIs...
                    </span>
                  ) : "Submit Verification Application"}
                </button>
                
                <style jsx>{`
                  @keyframes spin {
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </form>
            )}

            {/* STEP 3 */}
            {wizardStep === 3 && (
              <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
                <div style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "var(--emerald-light)",
                  color: "var(--primary-emerald)",
                  fontSize: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  animation: "bounce 1s"
                }}>
                  ✓
                </div>

                <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "var(--primary-navy)" }}>Pre-Approval Successful!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "32px" }}>
                  Congratulations <strong>{fullName}</strong>, you have been pre-approved for the installment purchase of the <strong>{activeProduct.name}</strong>.
                </p>

                <div style={{
                  backgroundColor: "var(--bg-neutral)",
                  padding: "20px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  textAlign: "left",
                  fontSize: "14px",
                  marginBottom: "32px"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Down Payment Required:</span>
                    <strong>₦{(activeProduct.price * 0.2).toLocaleString()}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Monthly Repayment:</span>
                    <strong style={{ color: "var(--emerald-dark)" }}>
                      ₦{Math.ceil((activeProduct.price * 0.8) / modalRepaymentMonths).toLocaleString()}/mo
                    </strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Duration:</span>
                    <strong>{modalRepaymentMonths} {modalRepaymentMonths === 1 ? "Month" : "Months"} (0% Interest)</strong>
                  </div>
                  <div style={{ height: "1px", backgroundColor: "var(--border-light)" }}></div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
                    🚚 First delivery estimate: within 48 hours of downpayment payment.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <button
                    onClick={() => {
                      handleCloseWizard();
                      handleClosePlan();
                    }}
                    className="btn btn-primary"
                    style={{ width: "100%", padding: "12px 0" }}
                  >
                    Finish & Pay Down Payment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={
      <div style={{ padding: "100px 0", textAlign: "center" }}>
        <h3>Loading UPA Catalog...</h3>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
