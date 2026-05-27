import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "UPA - Own What You Need. Pay Small Small.",
  description: "Get quality phones, electronics, appliances, and home essentials in Nigeria today while paying in convenient interest-free installments.",
  icons: {
    icon: "/upa_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Padding top is added to offset the fixed header */}
        <main style={{ paddingTop: "80px", flex: "1 0 auto", minHeight: "calc(100vh - 80px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
