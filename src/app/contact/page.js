"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("Repayment Support");
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission load
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      
      // Auto hide success toast after 5s
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div style={{ padding: "60px 0 100px", position: "relative" }}>
      {/* Toast success alert notification */}
      {showToast && (
        <div style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          backgroundColor: "#10b981",
          color: "white",
          padding: "16px 28px",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--shadow-xl)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 4000,
          animation: "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}>
          <span style={{ fontSize: "20px" }}>✓</span>
          <div>
            <strong style={{ display: "block" }}>Message Transmitted!</strong>
            <span style={{ fontSize: "12px", opacity: 0.9 }}>UPA customer care will contact you shortly.</span>
          </div>
          <button
            onClick={() => setShowToast(false)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              marginLeft: "12px"
            }}
          >
            &times;
          </button>
        </div>
      )}

      {/* Slide-in toast keyframes */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="container" style={{ maxWidth: "1000px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "var(--primary-emerald)", fontWeight: "700", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Get in Touch</span>
          <h1 style={{ fontSize: "40px", marginTop: "8px", color: "var(--primary-navy)" }}>We are Here to Listen</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "12px" }}>
            Reach out to our customer care team with any inquiries, repayment planning help, or merchant feedback.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid-2" style={{ gap: "48px", alignItems: "start" }}>
          {/* Info cards left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Headquarters */}
            <div className="glass-card" style={{ padding: "32px", backgroundColor: "#fff", display: "flex", gap: "20px" }}>
              <div style={{ fontSize: "32px" }}>📍</div>
              <div>
                <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "var(--primary-navy)" }}>Jos Headquarters</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                  No. 20, Ahmedu Bello Way,<br />
                  Jos, Plateau State, Nigeria.
                </p>
              </div>
            </div>

            {/* Email Channels */}
            <div className="glass-card" style={{ padding: "32px", backgroundColor: "#fff", display: "flex", gap: "20px" }}>
              <div style={{ fontSize: "32px" }}>✉️</div>
              <div>
                <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "var(--primary-navy)" }}>Digital Enquiries</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                  <strong>General:</strong> support@unitedpay4africa.com<br />
                  <strong>Partnerships:</strong> merchants@unitedpay4africa.com
                </p>
              </div>
            </div>

            {/* Voice support */}
            <div className="glass-card" style={{ padding: "32px", backgroundColor: "#fff", display: "flex", gap: "20px" }}>
              <div style={{ fontSize: "32px" }}>📞</div>
              <div>
                <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "var(--primary-navy)" }}>Phone Channels</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                  <strong>Hotline:</strong> +234 8147961666<br />
                  <strong>Support Hours:</strong> Mon - Sat, 8 AM - 6 PM
                </p>
              </div>
            </div>
          </div>

          {/* Form Card Right */}
          <div className="glass-card" style={{ padding: "40px", backgroundColor: "#fff" }}>
            <h3 style={{ fontSize: "22px", marginBottom: "8px", color: "var(--primary-navy)" }}>Send a Message</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "24px" }}>
              Have custom installment needs? Fill out our checklist and we'll reply today.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tolulope Alabi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. tolu@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                  Support Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
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
                  <option>Repayment Support</option>
                  <option>Digital ID Verification Match</option>
                  <option>Product Inventory Request</option>
                  <option>Merchant Integration (API)</option>
                  <option>Other Feedback</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                  Detailed Message
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="How can UPA help you today?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-light)",
                    fontSize: "14px",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical"
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: "100%", padding: "12px 0", marginTop: "8px" }}
              >
                {isSubmitting ? "Transmitting Ticket..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
