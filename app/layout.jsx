import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Ngajol - Platform Ngaji Online",
  description: "Web Application for ngaji",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </head>
      <body className="bg-body font-poppins ">
        <Navbar />
        <div className="container mx-auto px-5 md:px-14 mt-28">{children}</div>

        <Footer />
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </body>
    </html>
  );
}
