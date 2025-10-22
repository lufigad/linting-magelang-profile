import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("kontak");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fasilitas produksi PT Satu Desa Mandiri"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-in">
          Mitra Produksi Terpercaya
          <br />
          <span className="text-secondary">Solusi Terbaik Untuk Anda</span>
        </h1>
        <p className="text-lg sm:text-xl text-background/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Layanan berkualitas tinggi dengan tenaga kerja terampil dan
          berpengalaman. Kami mengutamakan presisi, efisiensi, dan standar
          higienis dalam setiap proses produksi.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent text-accent-foreground hover:opacity-90 shadow-hover animate-fade-in group"
        >
          Hubungi Kami Sekarang
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
