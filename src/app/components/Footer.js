import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Footer Grid */}
        <div className="grid-4 footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", padding: "4px 12px", backgroundColor: "#ffffff", borderRadius: "8px" }}>
              <img src="/upa_logo.png" alt="UPA Logo" style={{ height: "35px", width: "auto" }} />
            </Link>
            <p className="footer-tagline" style={{ marginTop: "16px", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", lineHeight: "1.6" }}>
              United Pay For Africa (UPA) is a financial empowerment platform built for everyday Africans. We make quality products accessible and affordable without financial stress.
            </p>
          </div>

          {/* Column 1: Core Pages */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/shop" className="footer-link">Shop Products</Link></li>
              <li><Link href="/how-it-works" className="footer-link">How It Works</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/faqs" className="footer-link">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 2: Additional Pages */}
          <div>
            <h4 className="footer-heading">Features</h4>
            <ul className="footer-links">
              <li><Link href="/payment-plans" className="footer-link">Payment Plans</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Support</Link></li>
              <li>
                <span className="footer-link" style={{ cursor: "default", opacity: 0.6 }}>
                  Partner With Us <small style={{ color: "var(--primary-emerald)", fontWeight: "bold" }}>(Soon)</small>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Office */}
          <div>
            <h4 className="footer-heading">Contact & Trust</h4>
            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)", lineHeight: "1.6", marginBottom: "16px" }}>
              <strong>Headquarters:</strong><br />
              No. 20, Ahmedu Bello Way,<br />
              Jos, Plateau State, Nigeria.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--primary-emerald)", fontSize: "16px" }}>✓</span>
                <span>0% Interest Repayments</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--primary-emerald)", fontSize: "16px" }}>✓</span>
                <span>Verified Brand Partners</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--primary-emerald)", fontSize: "16px" }}>✓</span>
                <span>Secure SSL Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "13px" }}>
            &copy; {currentYear} United Pay For Africa (UPA). All rights reserved. Built with pride for African empowerment.
          </p>

          {/* Social Links */}
          <div className="footer-socials">
            {/* Twitter */}
            <a href="#" className="social-icon" aria-label="Twitter X">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
