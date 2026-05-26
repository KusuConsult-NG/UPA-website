import Link from "next/link";

export default function About() {
  const pillars = [
    { title: "Empathetic Access", desc: "Traditional credit is built on stress. We build terms around real lives, incomes, and realities.", icon: "🌱" },
    { title: "Zero Interest", desc: "No hidden charges, compound rates, or outrageous penalties. Absolute cost clarity.", icon: "🏷️" },
    { title: "Quality Guarantee", desc: "We only partner with trusted, verified vendors. Your items are guaranteed authentic.", icon: "🛡️" },
    { title: "African Growth", desc: "Created in Nigeria to foster financial inclusion, wealth-building, and digital readiness.", icon: "🌍" },
  ];

  return (
    <div style={{ padding: "60px 0 100px" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Our Mission</span>
          <h1 style={{ fontSize: "40px", marginTop: "8px", color: "var(--primary-navy)" }}>Making Shopping Affordable for Africans</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "12px", maxWidth: "680px", margin: "12px auto 0" }}>
            We are building a platform that supports dreams, improves lifestyles, and creates financial flexibility for Africans everywhere.
          </p>
        </div>

        {/* Narrative Split Block */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", marginBottom: "80px" }} className="grid-2">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "28px", color: "var(--primary-navy)", marginBottom: "20px" }}>The UPA Story</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px" }}>
              United Pay For Africa (UPA) is a Nigerian-based installment shopping platform created to help people buy the things they need without paying everything upfront.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px" }}>
              We understand that many hardworking people struggle to purchase important items because of high one-time costs. UPA solves this by allowing customers to pay gradually in flexible installments with zero interest.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", fontWeight: "600" }}>
              Our goal is simple: to make quality products accessible, affordable, and stress-free for everyone.
            </p>
          </div>
          
          <div className="glass-card gradient-primary-bg" style={{ padding: "40px", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: "var(--radius-lg)" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🇳🇬</div>
            <h3 style={{ color: "white", fontSize: "22px", marginBottom: "12px" }}>Rooted in Nigeria</h3>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
              Operating proudly from Lagos, UPA is built specifically to address credit challenges in sub-Saharan Africa. We support local merchants, empower households, and provide young families, students, and entrepreneurs with a dignified runway to own what matters.
            </p>
          </div>
        </div>

        {/* Mission Pillars Grid */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", textAlign: "center", color: "var(--primary-navy)", marginBottom: "40px" }}>
            Our Guiding Pillars
          </h2>
          <div className="grid-2">
            {pillars.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: "32px", backgroundColor: "#fff", display: "flex", gap: "20px" }}>
                <div style={{ fontSize: "36px", height: "fit-content" }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{p.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA callout */}
        <div className="glass-card" style={{ padding: "40px", textAlign: "center", backgroundColor: "var(--bg-neutral)", border: "1px solid var(--border-light)" }}>
          <h3 style={{ fontSize: "22px", color: "var(--primary-navy)", marginBottom: "12px" }}>Ready to Start Shopping Responsibly?</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginBottom: "24px", maxWidth: "540px", margin: "0 auto 24px" }}>
            Join thousands of everyday Nigerians who trust UPA to power their lifestyles with absolute transparency and interest-free convenience.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/shop" className="btn btn-primary" style={{ padding: "10px 28px" }}>
              Explore Shop
            </Link>
            <Link href="/how-it-works" className="btn btn-outline" style={{ padding: "10px 28px" }}>
              Read Guidelines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
