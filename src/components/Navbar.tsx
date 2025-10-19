import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">LM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">
                PT Linting Magelang Sejahtera
              </h1>
              <p className="text-xs text-muted-foreground">Jasa Linting Rokok Profesional</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("layanan")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("galeri")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Galeri
            </button>
            <Button
              onClick={() => scrollToSection("kontak")}
              className="bg-primary text-primary-foreground hover:opacity-90"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("tentang")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("layanan")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("galeri")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Galeri
            </button>
            <Button
              onClick={() => scrollToSection("kontak")}
              className="w-full bg-primary text-primary-foreground"
            >
              Hubungi Kami
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
