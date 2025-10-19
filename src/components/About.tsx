import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const advantages = [
    {
      title: "Kualitas Linting Presisi dan Rapi",
      description: "Setiap batang rokok dilinting dengan ketelitian tinggi untuk hasil sempurna",
    },
    {
      title: "Tenaga Kerja Berpengalaman",
      description: "Tim profesional dengan pengalaman bertahun-tahun di industri linting rokok",
    },
    {
      title: "Proses Produksi Higienis",
      description: "Standar kebersihan tinggi dan kontrol kualitas di setiap tahap produksi",
    },
    {
      title: "Fleksibel dalam Volume Produksi",
      description: "Mampu melayani pesanan dalam berbagai skala, dari kecil hingga besar",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tentang Kami
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            PT Linting Magelang Sejahtera adalah perusahaan yang bergerak di bidang jasa
            linting rokok dengan tenaga kerja terampil dan berpengalaman. Berlokasi di
            Magelang, Jawa Tengah, kami menyediakan layanan linting untuk berbagai merek
            rokok dengan kualitas tinggi dan efisiensi produksi yang terjamin.
          </p>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            Dengan dedikasi penuh terhadap kualitas dan kepuasan klien, kami telah menjadi
            mitra terpercaya bagi berbagai produsen rokok di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card shadow-soft hover:shadow-hover transition-smooth border-border"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
