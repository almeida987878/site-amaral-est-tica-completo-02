import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { whatsappLink } from "@/lib/whatsapp";
import { contact } from "@/data/contact";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-offwhite px-6 pt-32 text-center">
        <span className="eyebrow">Erro 404</span>
        <h1 className="mt-4 font-display text-4xl font-semibold text-espresso sm:text-5xl">
          Esta página não foi encontrada.
        </h1>
        <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-stone">
          O endereço acessado não existe ou foi movido. Volte para a página inicial ou fale
          diretamente com a equipe da {contact.brand}.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-espresso px-8 py-4 font-body text-sm font-semibold text-offwhite shadow-card transition-colors hover:bg-ink"
          >
            Voltar para o início
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-rosegold px-8 py-4 font-body text-sm font-semibold text-rosegold-dark transition-colors hover:bg-rosegold hover:text-white"
          >
            Falar no WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
