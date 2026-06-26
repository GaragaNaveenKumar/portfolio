import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImage from "../assets/bg-lowpoly.png";

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed background layer — low-poly image, content floats above it on glass */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
      </div>

      {/* subtle screen-glass texture sitting above the whole page */}
      <div className="screen-glass" aria-hidden="true" />

      <Header />
      <main className="relative min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
