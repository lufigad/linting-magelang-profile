import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Apa saja jenis layanan linting yang tersedia?",
      answer:
        "Kami menyediakan layanan linting manual dan semi otomatis. Linting manual cocok untuk produksi premium dengan detail tinggi, sedangkan semi otomatis efisien untuk volume besar dengan tetap menjaga kualitas.",
    },
    {
      question: "Berapa minimal order untuk menggunakan jasa linting?",
      answer:
        "Kami sangat fleksibel dalam volume produksi. Minimal order dapat disesuaikan dengan kebutuhan Anda, mulai dari pesanan kecil hingga skala besar. Silakan hubungi kami untuk diskusi lebih detail.",
    },
    {
      question: "Berapa lama waktu pengerjaan produksi?",
      answer:
        "Waktu pengerjaan tergantung pada volume dan jenis linting yang dipilih. Untuk estimasi yang akurat, kami akan mengevaluasi pesanan Anda terlebih dahulu. Kami berkomitmen untuk menyelesaikan tepat waktu sesuai kesepakatan.",
    },
    {
      question: "Apakah tersedia layanan konsultasi untuk produksi rokok?",
      answer:
        "Ya, kami menyediakan layanan konsultasi gratis untuk membantu Anda mengoptimalkan proses produksi, pemilihan metode linting yang tepat, dan strategi efisiensi produksi.",
    },
    {
      question: "Bagaimana standar kebersihan dan kualitas produksi?",
      answer:
        "Kami menerapkan standar higienis tinggi dengan fasilitas produksi modern. Setiap tahap produksi melalui quality control ketat dan dikerjakan oleh tenaga profesional berpengalaman untuk menjamin kualitas terbaik.",
    },
    {
      question: "Apakah bisa melayani berbagai merek rokok?",
      answer:
        "Tentu saja! Kami berpengalaman melayani berbagai merek rokok dengan spesifikasi yang berbeda-beda. Tim kami akan menyesuaikan dengan kebutuhan dan standar merek Anda.",
    },
    {
      question: "Bagaimana cara memesan layanan linting?",
      answer:
        "Anda dapat menghubungi kami melalui formulir kontak di website, email, atau telepon. Tim kami akan segera merespons untuk diskusi kebutuhan, quotation, dan detail pesanan Anda.",
    },
    {
      question: "Apakah ada garansi kualitas untuk hasil produksi?",
      answer:
        "Kami menjamin kualitas setiap produk dengan sistem quality control berlapis. Jika ada ketidaksesuaian dengan standar yang disepakati, kami siap untuk melakukan perbaikan.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-smooth py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
