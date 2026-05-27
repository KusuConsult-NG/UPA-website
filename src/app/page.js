"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // Live Installment Calculator State
  const [purchaseAmount, setPurchaseAmount] = useState(150000); // Default ₦150k
  const [repaymentMonths, setRepaymentMonths] = useState(3);     // Default 3 Months

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Categories helper list with dynamic styling icons
  const categories = [
    { name: "Smartphones", icon: "📱", color: "#E0F2FE", text: "#0369A1", href: "/shop?cat=smartphones" },
    { name: "Laptops", icon: "💻", color: "#F0FDF4", text: "#15803D", href: "/shop?cat=laptops" },
    { name: "Televisions", icon: "📺", color: "#EFF6FF", text: "#1D4ED8", href: "/shop?cat=televisions" },
    { name: "Refrigerators", icon: "❄️", color: "#F5F3FF", text: "#6D28D9", href: "/shop?cat=refrigerators" },
    { name: "Generators", icon: "⚡", color: "#FFFBEB", text: "#B45309", href: "/shop?cat=generators" },
    { name: "Home Appliances", icon: "🔌", color: "#ECFDF5", text: "#047857", href: "/shop?cat=appliances" },
    { name: "Electronics", icon: "🎧", color: "#FDF2F8", text: "#BE185D", href: "/shop?cat=electronics" },
    { name: "Furniture", icon: "🛋️", color: "#FFF7ED", text: "#C2410C", href: "/shop?cat=furniture" },
  ];

  // Why choose UPA benefits
  const benefits = [
    { title: "Flexible Installments", desc: "Spread payments across manageable plans that fit your income.", icon: "📅" },
    { title: "Zero Interest", desc: "No hidden charges or outrageous interest rates.", icon: "🏷️" },
    { title: "Fast Approval", desc: "Quick and simple application process.", icon: "⚡" },
    { title: "Trusted Products", desc: "Access quality and verified products from reliable vendors.", icon: "🛡️" },
    { title: "Secure Payments", desc: "Your payments and personal information remain protected.", icon: "🔒" },
    { title: "Customer Support", desc: "Friendly support whenever you need help.", icon: "🤝" },
  ];

  // FAQ list
  const faqs = [
    {
      q: "How do installment payments work?",
      a: "You make a small initial down payment (usually 20% of the item's total cost) and then spread the remaining balance over agreed monthly installments (1, 2, or 3 months) that comfortably fit your income."
    },
    {
      q: "Is there interest on payments?",
      a: "No! UPA is dedicated to financial empowerment. We offer entirely interest-free (0.00% APR) installment plans. What you see is exactly what you pay."
    },
    {
      q: "What products can I buy?",
      a: "You can shop from a wide variety of high-quality verified items including smartphones, laptops, televisions, refrigerators, generators, power systems, furniture, and kitchen appliances."
    },
    {
      q: "How long does approval take?",
      a: "Our verification process is quick and stress-free. Most digital applications are reviewed and approved within minutes after validating your basic profile information."
    },
    {
      q: "What happens if I miss a payment?",
      a: "We understand that life comes with unexpected responsibilities. If you miss a payment, our supportive customer empathy team will reach out to help you reorganize and continue your installment plan smoothly, with absolutely zero aggressive debt tactics."
    }
  ];

  // Calculator Math
  const downPayment = purchaseAmount * 0.2;
  const remainingAmount = purchaseAmount - downPayment;
  const monthlyRepayment = remainingAmount / repaymentMonths;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Visual background accents */}
      <div className="accent-glow-green" style={{ top: "10%", right: "-10%" }}></div>
      <div className="accent-glow-blue" style={{ top: "40%", left: "-15%" }}></div>

      {/* 1. HOMEPAGE HERO SECTION */}
      <section style={{ padding: "80px 0 100px", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }}>
          <div className="animated-slide-up" style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
            <span style={{
              display: "inline-block",
              padding: "6px 16px",
              backgroundColor: "var(--emerald-light)",
              color: "var(--emerald-dark)",
              fontSize: "14px",
              fontWeight: "700",
              borderRadius: "var(--radius-full)",
              marginBottom: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
              🇳🇬 Now Active in Nigeria
            </span>
            <h1 className="text-gradient-emerald" style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
              Own What You Need.<br />Pay Small Small.
            </h1>
            <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "32px", fontWeight: "400" }}>
              Get quality phones, appliances, gadgets, and everyday essentials today while paying in convenient interest-free installments.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "40px", flexWrap: "wrap" }}>
              <Link href="/shop" className="btn btn-primary">
                Shop Now <span>→</span>
              </Link>
              <Link href="/how-it-works" className="btn btn-outline">
                How It Works
              </Link>
            </div>
            
            {/* Hero Message block */}
            <div className="glass-card" style={{ padding: "24px 32px", textAlign: "left", borderLeft: "4px solid var(--primary-emerald)" }}>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>
                <strong>At UPA, we believe everyone deserves access to quality products without financial pressure.</strong> Whether it’s a new smartphone, generator, TV, laptop, or home appliance, UPA helps you spread payments comfortably over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT UPA SECTION */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--bg-neutral)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "60px" }}>
            {/* Content left */}
            <div>
              <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>About UPA</span>
              <h2 style={{ fontSize: "36px", marginTop: "12px", marginBottom: "24px", color: "var(--primary-navy)", lineHeight: "1.2" }}>
                Making Everyday Shopping Affordable for Africans
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8", marginBottom: "16px" }}>
                United Pay For Africa (UPA) is a Nigerian-based installment shopping platform created to help people buy the things they need without paying everything upfront.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8", marginBottom: "16px" }}>
                We understand that many hardworking people struggle to purchase important items because of high one-time costs. UPA solves this by allowing customers to pay gradually in flexible installments with zero interest.
              </p>
              <p style={{ color: "var(--text-primary)", fontSize: "16px", fontWeight: "600", lineHeight: "1.8" }}>
                Our goal is simple: to make quality products accessible, affordable, and stress-free for everyone.
              </p>
            </div>

            {/* Illustration Card Right */}
            <div className="glass-card" style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "24px", background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)", color: "white" }}>
              <div style={{ fontSize: "40px" }}>🤝</div>
              <h3 style={{ color: "white", fontSize: "24px", margin: 0 }}>Built on Empathy & Trust</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.7", fontSize: "15px", margin: 0 }}>
                Unlike traditional credit programs with aggressive terms, UPA is designed as a partner in your growth. We focus on lifestyle enhancement, convenience, and absolute pricing transparency.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "24px" }}>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "800", color: "var(--primary-emerald)" }}>0%</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)" }}>Interest Ever</div>
                </div>
                <div>
                  <div style={{ fontSize: "28px", fontWeight: "800", color: "var(--primary-emerald)" }}>20%</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)" }}>Down Payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section style={{ padding: "100px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Simple Process</span>
          <h2 style={{ fontSize: "36px", marginTop: "12px", marginBottom: "60px" }}>Shopping Made Easy</h2>
          
          <div className="grid-4" style={{ textAlign: "left" }}>
            {/* Step 1 */}
            <div className="glass-card" style={{ padding: "32px", position: "relative" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--emerald-light)", color: "var(--emerald-dark)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px", marginBottom: "24px" }}>1</div>
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>Choose Your Product</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
                Browse from a wide range of trusted products including phones, electronics, appliances, and home essentials.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="glass-card" style={{ padding: "32px", position: "relative" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--emerald-light)", color: "var(--emerald-dark)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px", marginBottom: "24px" }}>2</div>
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>Apply in Minutes</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
                Complete a simple verification process to confirm your details. No complex financial histories required.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card" style={{ padding: "32px", position: "relative" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--emerald-light)", color: "var(--emerald-dark)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px", marginBottom: "24px" }}>3</div>
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>Pay Small Small</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
                Make a small down payment and spread the rest across comfortable monthly options.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-card" style={{ padding: "32px", position: "relative" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--emerald-light)", color: "var(--emerald-dark)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "18px", marginBottom: "24px" }}>4</div>
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>Enjoy Your Product</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
                Receive your item immediately while continuing your scheduled payments comfortably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE UPA SECTION */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-neutral)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 60px" }}>
            <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Why UPA</span>
            <h2 style={{ fontSize: "36px", marginTop: "12px" }}>Why Thousands Will Trust UPA</h2>
          </div>

          <div className="grid-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#fff" }}>
                <div style={{ fontSize: "36px" }}>{benefit.icon}</div>
                <h3 style={{ fontSize: "20px" }}>{benefit.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED CATEGORIES SECTION */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Explore Catalog</span>
              <h2 style={{ fontSize: "36px", marginTop: "12px" }}>Shop What Matters Most</h2>
            </div>
            <Link href="/shop" className="btn btn-outline" style={{ padding: "10px 24px", fontSize: "14px" }}>
              View All Categories
            </Link>
          </div>

          <div className="grid-4">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href} className="glass-card" style={{
                padding: "24px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                backgroundColor: "#fff"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: cat.color,
                  fontSize: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "var(--primary-navy)" }}>{cat.name}</h3>
                  <span style={{ fontSize: "12px", color: "var(--primary-emerald)", fontWeight: "700" }}>Shop Installments →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST & SOCIAL PROOF SECTION */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-neutral)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "60px" }}>
            {/* Visual representation */}
            <div style={{ position: "relative" }}>
              {/* Custom SVG mockup for everyday Africans */}
              <div className="glass-card" style={{ padding: "40px", backgroundColor: "#fff", borderLeft: "8px solid var(--primary-emerald)" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌍</div>
                <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Supporting Dreams</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>
                  “UPA represents a promise of credit dignity. We're building a system designed around realistic salaries, seasonal crops, student budgets, and startup revenues.”
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--primary-navy)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>CN</div>
                  <div>
                    <h4 style={{ fontSize: "14px", margin: 0 }}>Chinedu Nwachukwu</h4>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Lekki business owner & father</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Context details */}
            <div>
              <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Financial Dignity</span>
              <h2 style={{ fontSize: "36px", marginTop: "12px", marginBottom: "24px" }}>Built for Everyday People</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8", marginBottom: "16px" }}>
                UPA is designed for workers, business owners, students, families, and entrepreneurs who want better access to quality products without financial strain.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8" }}>
                We are building a platform that supports dreams, improves lifestyles, and creates financial flexibility for Africans everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAYMENT FLEXIBILITY & LIVE CALCULATOR SECTION */}
      <section id="calculator" style={{ padding: "100px 0", position: "relative" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "60px" }}>
            {/* Info */}
            <div>
              <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Payment Flexibility</span>
              <h2 style={{ fontSize: "36px", marginTop: "12px", marginBottom: "24px" }}>
                Affordable Payments That Work for You
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
                We know life comes with responsibilities. That’s why UPA offers flexible payment plans designed around real people and real incomes.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8", marginBottom: "32px" }}>
                No pressure. No impossible repayment plans. Just simple and convenient installment shopping.
              </p>
              
              <div style={{ display: "flex", gap: "24px" }}>
                <div style={{ borderLeft: "3px solid var(--primary-emerald)", paddingLeft: "16px" }}>
                  <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Zero Interest</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Absolute cost transparency</p>
                </div>
                <div style={{ borderLeft: "3px solid var(--primary-emerald)", paddingLeft: "16px" }}>
                  <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>Flexible Durations</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>1, 2, or 3 monthly plans</p>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Widget */}
            <div className="glass-card" style={{ padding: "40px", backgroundColor: "#fff", boxShadow: "var(--shadow-xl)" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "24px", textAlign: "center", color: "var(--primary-navy)" }}>Repayment Simulator</h3>
              
              {/* Slider for amount */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontWeight: "600", fontSize: "15px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Total Item Cost</span>
                  <span style={{ color: "var(--primary-navy)", fontSize: "18px" }}>₦{purchaseAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="1200000"
                  step="10000"
                  value={purchaseAmount}
                  onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                  style={{
                    width: "100%",
                    accentColor: "var(--primary-emerald)",
                    height: "6px",
                    borderRadius: "3px",
                    cursor: "pointer"
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>
                  <span>₦30,000</span>
                  <span>₦600,000</span>
                  <span>₦1,200,000</span>
                </div>
              </div>

              {/* Repayment Month selector */}
              <div style={{ marginBottom: "32px" }}>
                <label style={{ display: "block", marginBottom: "12px", fontWeight: "600", fontSize: "15px", color: "var(--text-secondary)" }}>
                  Repayment Duration
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                  {[1, 2, 3].map((months) => (
                    <button
                      key={months}
                      onClick={() => setRepaymentMonths(months)}
                      style={{
                        padding: "12px",
                        borderRadius: "var(--radius-md)",
                        border: repaymentMonths === months ? "2px solid var(--primary-emerald)" : "1px solid var(--border-light)",
                        backgroundColor: repaymentMonths === months ? "var(--emerald-light)" : "transparent",
                        color: repaymentMonths === months ? "var(--emerald-dark)" : "var(--text-secondary)",
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

              {/* Results Grid */}
              <div style={{
                backgroundColor: "var(--bg-neutral)",
                padding: "24px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Initial Down Payment (20%)</span>
                  <strong style={{ color: "var(--primary-navy)" }}>₦{downPayment.toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Interest Rate</span>
                  <strong style={{ color: "var(--primary-emerald)" }}>0.00% (No Interest)</strong>
                </div>
                <div style={{ height: "1px", backgroundColor: "var(--border-light)" }}></div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>Monthly Payment</span>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Spread over {repaymentMonths} {repaymentMonths === 1 ? "month" : "months"}</div>
                  </div>
                  <strong style={{ color: "var(--emerald-dark)", fontSize: "24px", fontWeight: "800" }}>
                    ₦{Math.ceil(monthlyRepayment).toLocaleString()}
                  </strong>
                </div>
              </div>

              <Link
                href={`/shop?amount=${purchaseAmount}`}
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "24px" }}
              >
                Apply for this Credit Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-neutral)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Got Questions?</span>
            <h2 style={{ fontSize: "36px", marginTop: "12px" }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "24px 32px",
                  backgroundColor: "#fff",
                  transform: "none",
                  cursor: "pointer"
                }}
                onClick={() => toggleFaq(i)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: "600", color: "var(--primary-navy)", margin: 0 }}>
                    {faq.q}
                  </h3>
                  <span style={{
                    fontSize: "24px",
                    fontWeight: "300",
                    color: "var(--primary-emerald)",
                    transition: "transform 0.2s",
                    transform: openFaq === i ? "rotate(45deg)" : "none"
                  }}>
                    +
                  </span>
                </div>
                
                {openFaq === i && (
                  <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--border-light)" }}>
                    <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MOBILE APP PROMOTION */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="glass-card-dark gradient-primary-bg" style={{ padding: "60px 48px", borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }}>
              {/* Content left */}
              <div style={{ maxWidth: "540px" }}>
                <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>UPA Mobile App</span>
                <h2 style={{ fontSize: "36px", marginTop: "12px", marginBottom: "24px", color: "white" }}>
                  Manage Everything From Your Phone
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "16px", lineHeight: "1.8", marginBottom: "32px" }}>
                  Track payments, manage installments, receive friendly payment reminders, and shop easily directly from the UPA mobile app.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                  <span className="btn btn-primary" style={{ cursor: "default", opacity: 0.8 }}>
                    📲 Coming Soon
                  </span>
                  <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)", fontWeight: "500" }}>
                    Launching shortly on App Store & Google Play
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section style={{ padding: "80px 0 100px", textAlign: "center", position: "relative" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 44px)", color: "var(--primary-navy)", marginBottom: "16px" }}>
            Start Shopping Smarter Today
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: "1.6", marginBottom: "32px" }}>
            Get the products you need today and pay comfortably over time with UPA.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/shop" className="btn btn-primary">
              Shop Now
            </Link>
            <Link href="/how-it-works" className="btn btn-outline">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* 11. SUGGESTED HOMEPAGE CLOSING MESSAGE */}
      <section style={{ padding: "60px 0", backgroundColor: "var(--bg-neutral)", borderTop: "1px solid var(--border-light)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "var(--primary-navy)", marginBottom: "16px" }}>
            UPA is making quality living more accessible for Africans.
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
            From smartphones to home essentials, we help you buy what you need now and pay comfortably over time.
            Because everyone deserves access to a better lifestyle without financial stress.
          </p>
        </div>
      </section>
    </div>
  );
}
