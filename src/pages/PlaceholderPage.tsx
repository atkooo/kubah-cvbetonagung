import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../components/ui/Container";
import { FloatingActions } from "../components/home/FloatingActions";

interface PlaceholderPageProps {
  title: string;
}

const emptySlots = [
  "Hero / intro",
  "Konten utama",
  "Detail pendukung",
  "CTA / FAQ",
];

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-[#030a16] font-serif text-[#E2E8F0] selection:bg-[#C5A85C] selection:text-[#030a16]">
      <Header />

      <main className="border-b border-[#C5A85C]/15">
        <section className="border-b border-[#C5A85C]/15 bg-[#030a16] py-20">
          <Container>
            <div className="min-h-[18rem] border border-dashed border-[#C5A85C]/25 bg-[#08152c]/25 p-8">
              <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C5A85C]">
                Halaman SEO
              </span>
              <h1 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#E2E8F0] md:text-5xl">
                {title}
              </h1>
            </div>
          </Container>
        </section>

        <section className="bg-[#030a16]/70 py-16">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              {emptySlots.map((slot) => (
                <div
                  key={slot}
                  className="min-h-[16rem] border border-dashed border-[#C5A85C]/20 bg-[#08152c]/20 p-6"
                >
                  <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#94A3B8]">
                    {slot}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}
