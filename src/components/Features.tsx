import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Shield, TrendingUp, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Award,
      title: "Standar Kualitas Tinggi",
      description: "Setiap produk melalui quality control ketat untuk memastikan hasil terbaik",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Tenaga kerja terlatih dengan pengalaman puluhan tahun di industri",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Clock,
      title: "Pengiriman Tepat Waktu",
      description: "Komitmen kami untuk selalu menyelesaikan pesanan sesuai deadline",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Proses Higienis & Aman",
      description: "Fasilitas produksi modern dengan standar kebersihan internasional",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      title: "Kapasitas Produksi Besar",
      description: "Mampu menangani volume produksi skala besar dengan efisien",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Headphones,
      title: "Layanan Pelanggan 24/7",
      description: "Tim support siap membantu kebutuhan Anda kapan saja",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keunggulan yang membuat kami menjadi pilihan utama untuk jasa linting rokok
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card shadow-soft hover:shadow-hover transition-smooth border-border group"
              >
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
