"use client";

import { useState } from "react";
import Link from "next/link";

export default function HowItWorks() {
  const [hasIncome, setHasIncome] = useState(null);
  const [hasId, setHasId] = useState(null);
  const [residesInNig, setResidesInNig] = useState(null);

  const calculateEligibility = () => {
    if (hasIncome === null || hasId === null || residesInNig === null) {
      return "pending";
    }
    if (hasIncome && hasId && residesInNig) {
      return "approved";
    }
    return "declined";
  };

  const status = calculateEligibility();

  return (
    <div style={{ padding: "60px 0 100px" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Clear & Stress-Free</span>
          <h1 style={{ fontSize: "40px", marginTop: "8px", color: "var(--primary-navy)" }}>Shopping Made Easy</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "12px" }}>
            Learn how UPA spreads payments comfortably over time, making quality living accessible without high one-time costs.
          </p>
        </div>

        {/* Timeline Steps Card Deck */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "80px" }}>
          {/* Step 1 */}
          <div className="glass-card" style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr", gap: "24px", backgroundColor: "#fff" }} className="grid-2">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--primary-emerald)", fontWeight: "800", textTransform: "uppercase" }}>Step One</span>
              <h2 style={{ fontSize: "24px", marginTop: "8px", marginBottom: "16px" }}>Choose Your Product</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Browse our curated selection of high-quality verified items. From premium smartphones (Samsung, Apple) to essential home power systems (generators, inverters) and home appliances.
              </p>
              <div style={{ marginTop: "16px" }}>
                <Link href="/contact" style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px" }}>
                  Browse Products Catalog →
                </Link>
              </div>
            </div>
            <div style={{ backgroundColor: "var(--bg-neutral)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "72px", padding: "40px" }}>
              🛒
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card" style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr", gap: "24px", backgroundColor: "#fff" }} className="grid-2">
            <div style={{ backgroundColor: "var(--bg-neutral)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "72px", padding: "40px" }} className="mobile-order-2">
              📝
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--primary-emerald)", fontWeight: "800", textTransform: "uppercase" }}>Step Two</span>
              <h2 style={{ fontSize: "24px", marginTop: "8px", marginBottom: "16px" }}>Apply in Minutes</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Complete a brief, 3-minute profile check online. Input standard demographic info, income bracket details, and verify your ID (using secure BVN/NIN government portals) for instant credit pre-approval.
              </p>
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--primary-emerald)" }}>✓</span>
                <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600" }}>Instant approval matching. Zero credit checks.</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card" style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr", gap: "24px", backgroundColor: "#fff" }} className="grid-2">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--primary-emerald)", fontWeight: "800", textTransform: "uppercase" }}>Step Three</span>
              <h2 style={{ fontSize: "24px", marginTop: "8px", marginBottom: "16px" }}>Pay Small Small</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Pay an initial down payment (usually 20% of the total order value) securely through our online checkout. The remaining 80% is comfortably spread across equal monthly repayments (3, 6, or 9 months) at absolutely 0.00% interest.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--bg-neutral)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "72px", padding: "40px" }}>
              💳
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card" style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr", gap: "24px", backgroundColor: "#fff" }} className="grid-2">
            <div style={{ backgroundColor: "var(--bg-neutral)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "72px", padding: "40px" }} className="mobile-order-2">
              🚚
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--primary-emerald)", fontWeight: "800", textTransform: "uppercase" }}>Step Four</span>
              <h2 style={{ fontSize: "24px", marginTop: "8px", marginBottom: "16px" }}>Enjoy Your Product</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Once your downpayment is paid, we coordinate home delivery within 48 hours in major metropolitan hubs (Jos, Abuja, Port Harcourt). Take ownership immediately while continuing your comfortable repayment plan.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Pre-Qualification Checker Card */}
        <div className="glass-card gradient-primary-bg" style={{ padding: "50px 40px", borderRadius: "var(--radius-lg)", color: "white" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "12px", textTransform: "uppercase" }}>Pre-Check</span>
            <h2 style={{ color: "white", fontSize: "28px", marginTop: "8px" }}>Check Your Eligibility Now</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", marginTop: "8px" }}>
              Select these quick indicators to see if you pre-qualify for UPA instant credit!
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "40px" }} className="grid-3">
            {/* Income */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "12px", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", fontWeight: "500" }}>
                1. Steady monthly income?
              </div>
              <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <button
                  onClick={() => setHasIncome(true)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: hasIncome === true ? "var(--primary-emerald)" : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontWeight: "600"
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => setHasIncome(false)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: hasIncome === false ? "#ef4444" : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontWeight: "600"
                  }}
                >
                  No
                </button>
              </div>
            </div>

            {/* ID document */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "12px", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", fontWeight: "500" }}>
                2. Do you have a NIN or BVN?
              </div>
              <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <button
                  onClick={() => setHasId(true)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: hasId === true ? "var(--primary-emerald)" : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontWeight: "600"
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => setHasId(false)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: hasId === false ? "#ef4444" : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontWeight: "600"
                  }}
                >
                  No
                </button>
              </div>
            </div>

            {/* Reside in Nigeria */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "12px", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", fontWeight: "500" }}>
                3. Do you reside in Nigeria?
              </div>
              <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <button
                  onClick={() => setResidesInNig(true)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: residesInNig === true ? "var(--primary-emerald)" : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontWeight: "600"
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => setResidesInNig(false)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: residesInNig === false ? "#ef4444" : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontWeight: "600"
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          {/* Eligibility Simulator output */}
          <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
            {status === "pending" && (
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", margin: 0 }}>
                Please select answers to the questions above to calculate eligibility status.
              </p>
            )}
            
            {status === "approved" && (
              <div style={{ animation: "fadeIn 0.5s" }}>
                <span style={{ fontSize: "40px" }}>🎉</span>
                <h3 style={{ color: "var(--primary-emerald)", fontSize: "22px", margin: "12px 0 8px" }}>You are Fully Eligible!</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", maxWidth: "560px", margin: "0 auto 24px" }}>
                  You meet all basic metrics for instant pre-approved credit. Create your account and explore products inside the shop immediately!
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 32px" }}>
                  Go to Shop Catalog
                </Link>
              </div>
            )}

            {status === "declined" && (
              <div style={{ animation: "fadeIn 0.5s" }}>
                <span style={{ fontSize: "40px" }}>⚠️</span>
                <h3 style={{ color: "#f87171", fontSize: "22px", margin: "12px 0 8px" }}>Additional Verification Required</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", maxWidth: "560px", margin: "0 auto 24px" }}>
                  UPA requires active identification, steady source of funds, and a Nigerian residence for automatic digital approvals. You can still apply, but our human team will need to manually review your references.
                </p>
                <Link href="/contact" className="btn btn-outline-white" style={{ padding: "10px 32px" }}>
                  Contact support for details
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
