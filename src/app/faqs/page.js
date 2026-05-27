"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_DATA = [
  {
    q: "How do installment payments work?",
    a: "You make a small initial down payment (usually 20% of the item's total cost) at checkout, and then spread the remaining balance over agreed monthly installments (1, 2, or 3 months) that comfortably fit your income schedule.",
    category: "Payments"
  },
  {
    q: "Is there interest on payments?",
    a: "No! UPA is dedicated to financial empowerment. We offer entirely interest-free (0.00% APR) installment plans. There are no hidden fees, compound charges, or inflated interest additions. What you see is exactly what you pay.",
    category: "Payments"
  },
  {
    q: "What products can I buy?",
    a: "You can shop from a wide variety of high-quality verified items including smartphones, laptops, televisions, refrigerators, generators, power systems, furniture, and kitchen appliances. We expand our catalog frequently.",
    category: "Shopping"
  },
  {
    q: "How long does approval take?",
    a: "Our verification process is quick and stress-free. Most digital applications are reviewed and pre-approved within minutes after validating your basic profile information (such as your name, phone, and NIN/BVN document).",
    category: "Approval"
  },
  {
    q: "What happens if I miss a payment?",
    a: "We understand that life comes with unexpected responsibilities. If you miss a scheduled payment, our supportive customer empathy team will reach out to help you reorganize and continue your installment plan smoothly, with absolutely zero aggressive collection tactics or penalties.",
    category: "Support"
  },
  {
    q: "What documentation do I need to register?",
    a: "All you need is a valid phone number, details regarding your income/employment, and a government-verified digital ID (either your Bank Verification Number - BVN or National Identification Number - NIN) to verify your account in minutes.",
    category: "Approval"
  },
  {
    q: "Can I pay off my installment plan early?",
    a: "Absolutely! You can choose to pay off your outstanding balance early at any time through your dashboard with absolutely no prepayment penalties or extra fees. It actually improves your UPA credit standing!",
    category: "Payments"
  },
  {
    q: "Is my personal information secure?",
    a: "Yes, security is our primary priority. We use bank-grade 256-bit SSL encryption to protect all database fields and communicate strictly with verified government identity APIs. UPA will never debit your account or share details without your explicit approval.",
    category: "Support"
  }
];

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["All", "Payments", "Shopping", "Approval", "Support"];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "60px 0 100px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Answers on Demand</span>
          <h1 style={{ fontSize: "40px", marginTop: "8px", color: "var(--primary-navy)" }}>Frequently Asked Questions</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "12px" }}>
            Search questions or select categories to learn more about UPA repayments, credit checks, and purchasing.
          </p>
        </div>

        {/* Live Search Controls Card */}
        <div className="glass-card" style={{ padding: "24px", backgroundColor: "#fff", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            placeholder="Search FAQs (e.g. 'interest', 'BVN', 'missed payment')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-light)",
              fontSize: "15px",
              outline: "none",
              fontFamily: "inherit"
            }}
          />

          {/* Category badges */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(null); // Close active FAQ
                }}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-full)",
                  border: "none",
                  backgroundColor: selectedCategory === cat ? "var(--primary-navy)" : "var(--bg-neutral)",
                  color: selectedCategory === cat ? "white" : "var(--text-secondary)",
                  fontWeight: "600",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Expandable Accordions List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "60px" }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
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
                <div style={{ display: "flex", justifyItems: "center", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{
                      fontSize: "10px",
                      padding: "4px 8px",
                      backgroundColor: "var(--bg-neutral)",
                      color: "var(--text-muted)",
                      borderRadius: "var(--radius-sm)",
                      fontWeight: "700",
                      textTransform: "uppercase"
                    }}>
                      {faq.category}
                    </span>
                    <h3 style={{ fontSize: "16px", fontWeight: "600", color: "var(--primary-navy)", margin: 0 }}>
                      {faq.q}
                    </h3>
                  </div>
                  <span style={{
                    fontSize: "24px",
                    fontWeight: "300",
                    color: "var(--primary-emerald)",
                    transition: "transform 0.2s",
                    transform: openIndex === i ? "rotate(45deg)" : "none"
                  }}>
                    +
                  </span>
                </div>

                {openIndex === i && (
                  <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--border-light)" }}>
                    <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="glass-card" style={{ padding: "60px 24px", textAlign: "center", backgroundColor: "#fff" }}>
              <span style={{ fontSize: "40px" }}>❓</span>
              <h3 style={{ fontSize: "18px", marginTop: "16px", marginBottom: "8px" }}>No Matches Found</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                Try searching for other words like "interest" or "approval" or clear your query filter.
              </p>
            </div>
          )}
        </div>

        {/* Support Callout banner */}
        <div className="glass-card gradient-primary-bg" style={{ padding: "40px", textAlign: "center", color: "white", borderRadius: "var(--radius-lg)" }}>
          <h3 style={{ color: "white", fontSize: "22px", marginBottom: "8px" }}>Still Have Unanswered Questions?</h3>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", marginBottom: "24px" }}>
            Our customer care team is online and ready to support you with gentle guidance.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 28px" }}>
            Talk to Customer Empathy Team
          </Link>
        </div>
      </div>
    </div>
  );
}
