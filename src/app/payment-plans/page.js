import Link from "next/link";

export default function PaymentPlans() {
  const tiers = [
    {
      months: 3,
      name: "Swift Ownership Plan",
      desc: "Perfect for gadgets, smartphones, and smaller household electronics.",
      benefit: "Own it in 90 days. Shortest repayment period, ideal for rapid budgeting cycles.",
      downPayment: "20% Down Payment",
      rate: "0% Interest & Fees"
    },
    {
      months: 6,
      name: "Standard Balanced Plan",
      desc: "Highly popular. Perfect for medium power generators, TVs, and student laptops.",
      benefit: "Optimal balance between low monthly outlays and quick loan closure.",
      downPayment: "20% Down Payment",
      rate: "0% Interest & Fees"
    },
    {
      months: 9,
      name: "Max Affordability Plan",
      desc: "Ideal for high-capacity generators, commercial refrigerators, and complete home furniture sets.",
      benefit: "Lowest possible monthly outlays, structured specifically around steady incomes.",
      downPayment: "20% Down Payment",
      rate: "0% Interest & Fees"
    }
  ];

  return (
    <div style={{ padding: "60px 0 100px" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Tailored Repayments</span>
          <h1 style={{ fontSize: "40px", marginTop: "8px", color: "var(--primary-navy)" }}>Affordable Payments That Work for You</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "12px", maxWidth: "680px", margin: "12px auto 0" }}>
            We know life comes with responsibilities. UPA offers flexible, interest-free payment durations designed around real people.
          </p>
        </div>

        {/* Repayment Tiers Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "80px" }}>
          {tiers.map((t) => (
            <div key={t.months} className="glass-card" style={{ padding: "36px", display: "grid", gridTemplateColumns: "1fr", gap: "24px", backgroundColor: "#fff" }} className="grid-3">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} className="col-span-2">
                <span style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  backgroundColor: "var(--emerald-light)",
                  color: "var(--emerald-dark)",
                  fontSize: "12px",
                  fontWeight: "700",
                  borderRadius: "var(--radius-full)",
                  width: "fit-content",
                  marginBottom: "12px"
                }}>
                  {t.months} Months Spread
                </span>
                <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>{t.name}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "8px" }}>
                  {t.desc}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", fontStyle: "italic" }}>
                  💡 <strong>Repayment dynamic:</strong> {t.benefit}
                </p>
              </div>

              {/* Specs side */}
              <div style={{
                backgroundColor: "var(--bg-neutral)",
                padding: "24px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "12px",
                textAlign: "center"
              }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>Down Payment</div>
                  <strong style={{ fontSize: "16px", color: "var(--primary-navy)" }}>{t.downPayment}</strong>
                </div>
                <div style={{ height: "1px", backgroundColor: "var(--border-light)" }}></div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>Interest Rate</div>
                  <strong style={{ fontSize: "16px", color: "var(--primary-emerald)" }}>{t.rate}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Comparison Table (Traditional Loan vs UPA) */}
        <div className="glass-card" style={{ padding: "40px", backgroundColor: "#fff", marginBottom: "80px" }}>
          <h3 style={{ fontSize: "22px", textAlign: "center", color: "var(--primary-navy)", marginBottom: "16px" }}>
            The 0% Interest Difference
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "14px", textAlign: "center", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
            Traditional consumer loans add compounding interest, processing fees, and insurance charges. Here is a direct calculation of a smartphone purchase (total value ₦300,000) spread over 6 months:
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border-light)", color: "var(--primary-navy)" }}>
                  <th style={{ padding: "12px 8px", fontWeight: "700" }}>Payment Factor</th>
                  <th style={{ padding: "12px 8px", fontWeight: "700" }}>Standard Microfinance Loan</th>
                  <th style={{ padding: "12px 8px", fontWeight: "700", color: "var(--primary-emerald)" }}>UPA Installment Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "12px 8px", fontWeight: "500" }}>Initial Downpayment</td>
                  <td style={{ padding: "12px 8px", color: "var(--text-secondary)" }}>₦0 - ₦60,000 (Varies)</td>
                  <td style={{ padding: "12px 8px", fontWeight: "600", color: "var(--primary-navy)" }}>₦60,000 (Fixed 20%)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "12px 8px", fontWeight: "500" }}>Monthly Interest Rate</td>
                  <td style={{ padding: "12px 8px", color: "#ef4444" }}>4.5% - 8.0% Monthly</td>
                  <td style={{ padding: "12px 8px", fontWeight: "700", color: "var(--primary-emerald)" }}>0.00% (No Interest)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "12px 8px", fontWeight: "500" }}>Hidden Admin / Setup Fees</td>
                  <td style={{ padding: "12px 8px", color: "#ef4444" }}>₦15,000 - ₦30,000</td>
                  <td style={{ padding: "12px 8px", fontWeight: "600" }}>₦0.00 (None)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)", backgroundColor: "var(--bg-neutral)" }}>
                  <td style={{ padding: "12px 8px", fontWeight: "700" }}>Total Out-of-Pocket Paid</td>
                  <td style={{ padding: "12px 8px", color: "#ef4444", fontWeight: "700" }}>₦380,000+</td>
                  <td style={{ padding: "12px 8px", color: "var(--emerald-dark)", fontWeight: "800" }}>₦300,000 (Exactly Original Price)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Merchant Partnership Promo */}
        <div className="glass-card gradient-primary-bg" style={{ padding: "50px 40px", color: "white", borderRadius: "var(--radius-lg)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px", alignItems: "center" }} className="grid-2">
            <div>
              <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "12px", textTransform: "uppercase" }}>Merchant Networks</span>
              <h2 style={{ color: "white", fontSize: "28px", marginTop: "8px", marginBottom: "16px" }}>
                Partner With UPA
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                Are you an authorized vendor selling quality smartphones, appliances, power equipment, or furniture in Nigeria? Partner with UPA to list your inventory! We increase your sales conversion rates by letting customers pay small small, while paying you, the merchant, 100% upfront value.
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <div className="glass-card" style={{ padding: "24px 20px", display: "inline-block", textAlign: "left", width: "100%", maxWidth: "340px", color: "var(--primary-navy)" }}>
                <h4 style={{ fontSize: "16px", marginBottom: "12px" }}>Integration Guidelines</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                  <div>✓ Instant full merchant payouts</div>
                  <div>✓ Zero technical API setup overheads</div>
                  <div>✓ Direct advertising exposure</div>
                </div>
                <Link href="/contact?topic=Merchant+Integration" className="btn btn-primary" style={{ width: "100%", padding: "10px 0", fontSize: "13px" }}>
                  Apply as Brand Partner
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
