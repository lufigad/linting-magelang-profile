import { Card } from "@/components/ui/card";
import { Hand, Cog, Package, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hand,
      title: "Linting Manual",
      description:
        "Layanan linting rokok secara manual dengan keahlian tangan terampil untuk hasil berkualitas tinggi dan presisi sempurna.",
    },
    {
      icon: Cog,
      title: "Linting Semi Otomatis",
      description:
        "Proses linting menggunakan mesin semi otomatis untuk efisiensi produksi lebih tinggi dengan tetap menjaga kualitas premium.",
    },
    {
      icon: Package,
      title: "Pengemasan Rokok",
      description:
        "Layanan pengemasan rokok profesional dengan standar kebersihan tinggi dan packaging yang rapi sesuai kebutuhan klien.",
    },
    {
      icon: MessageSquare,
      title: "Konsultasi Produksi",
      description:
        "Konsultasi mengenai strategi produksi rokok linting, optimasi proses, dan solusi efisiensi untuk bisnis Anda.",
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Layanan Kami
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan linting rokok profesional untuk memenuhi
            kebutuhan produksi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card shadow-soft hover:shadow-hover transition-smooth border-border text-center hover-scale group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
