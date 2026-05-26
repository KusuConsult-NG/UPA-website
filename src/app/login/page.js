"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginContent() {
  const searchParams = useSearchParams();

  // Tab State
  const [activeTab, setActiveTab] = useState("login"); // 'login' or 'register'

  // Input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [bvnNin, setBvnNin] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Status Simulation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Read URL query parameter on load
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "register") {
      setActiveTab("register");
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock verification delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsLoggedIn(true);
    }, 2000);
  };

  return (
    <div style={{ padding: "80px 0 120px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "460px" }}>
        
        {isLoggedIn ? (
          /* Celebratory Logged In Dashboard Simulated Card */
          <div className="glass-card" style={{ padding: "48px 40px", textAlign: "center", backgroundColor: "#fff" }}>
            <span style={{ fontSize: "56px" }}>👋</span>
            <h2 style={{ fontSize: "24px", color: "var(--primary-navy)", marginTop: "16px", marginBottom: "12px" }}>
              Welcome back, {activeTab === "register" ? fullName || "User" : email.split("@")[0] || "Customer"}!
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "32px" }}>
              Simulated security authentication succeeded. Your UPA dashboard is fully active and synchronized with Jos endpoints.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "12px 0", width: "100%" }}>
                Go to Shop & Purchase
              </Link>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setEmail("");
                  setPassword("");
                  setFullName("");
                  setPhone("");
                  setBvnNin("");
                }}
                className="btn btn-outline"
                style={{ padding: "12px 0", width: "100%" }}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          /* Normal Authentication card */
          <div className="glass-card" style={{ padding: "40px", backgroundColor: "#fff", boxShadow: "var(--shadow-xl)" }}>
            
            {/* Header Logos */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <Link href="/" style={{ fontSize: "28px", fontWeight: "800", color: "var(--primary-navy)" }}>
                UPA<span style={{ color: "var(--primary-emerald)" }}>.</span>
              </Link>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", marginTop: "4px" }}>
                Own What You Need. Pay Small Small.
              </p>
            </div>

            {/* Tab buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "var(--bg-neutral)", padding: "4px", borderRadius: "var(--radius-md)", marginBottom: "32px" }}>
              <button
                onClick={() => setActiveTab("login")}
                style={{
                  padding: "10px 0",
                  borderRadius: "var(--radius-sm)",
                  border: "none",
                  backgroundColor: activeTab === "login" ? "white" : "transparent",
                  color: activeTab === "login" ? "var(--primary-navy)" : "var(--text-secondary)",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  boxShadow: activeTab === "login" ? "var(--shadow-sm)" : "none",
                  transition: "all var(--transition-fast)"
                }}
              >
                Log In
              </button>
              <button
                onClick={() => setActiveTab("register")}
                style={{
                  padding: "10px 0",
                  borderRadius: "var(--radius-sm)",
                  border: "none",
                  backgroundColor: activeTab === "register" ? "white" : "transparent",
                  color: activeTab === "register" ? "var(--primary-navy)" : "var(--text-secondary)",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  boxShadow: activeTab === "register" ? "var(--shadow-sm)" : "none",
                  transition: "all var(--transition-fast)"
                }}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {/* Registration Extra Fields */}
              {activeTab === "register" && (
                <>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adebayo Ibrahim"
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
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 810 123 4567"
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
                </>
              )}

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. customer@upa.africa"
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
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                  Security Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              {/* Register Digital Identity Checkbox to promote confidence */}
              {activeTab === "register" && (
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>
                    Bank Verification Number (BVN) / NIN <small style={{ color: "var(--text-muted)", fontWeight: "normal" }}>(Optional now)</small>
                  </label>
                  <input
                    type="text"
                    maxLength="11"
                    placeholder="Enter 11-digit BVN or NIN"
                    value={bvnNin}
                    onChange={(e) => setBvnNin(e.target.value.replace(/\D/g, ""))}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-light)",
                      fontSize: "14px",
                      outline: "none",
                      fontFamily: "inherit",
                      textAlign: "center",
                      letterSpacing: bvnNin ? "0.1em" : "normal"
                    }}
                  />
                  <span style={{ display: "block", fontSize: "11px", color: "var(--text-muted)", marginTop: "6px", lineHeight: "1.4" }}>
                    Entering this now pre-qualifies your account for instant credit during shopping!
                  </span>
                </div>
              )}

              {/* Actions row */}
              {activeTab === "login" && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: "var(--text-secondary)" }}>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{ accentColor: "var(--primary-emerald)" }}
                    />
                    Remember Me
                  </label>
                  <a href="#" style={{ color: "var(--primary-emerald)", fontWeight: "600" }}>Forgot Password?</a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: "100%", padding: "12px 0", marginTop: "12px" }}
              >
                {isSubmitting ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <span className="spinner" style={{
                      width: "16px",
                      height: "16px",
                      border: "2px solid white",
                      borderTopColor: "transparent",
                      borderRadius: "50%",
                      animation: "spin 0.6s linear infinite"
                    }}></span>
                    Authenticating UPA Profile...
                  </span>
                ) : activeTab === "login" ? "Secure Log In" : "Register UPA Profile"}
              </button>

              <style jsx>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={
      <div style={{ padding: "100px 0", textAlign: "center" }}>
        <h3>Loading Sign In Portal...</h3>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
