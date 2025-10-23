import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} PT Satu Desa Mandiri. All rights reserved.
            </p>
            {/* <p className="text-xs text-background/70 mt-1">
              Jasa Produksi Profesional di Magelang
            </p> */}
          </div>

          {/* <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
