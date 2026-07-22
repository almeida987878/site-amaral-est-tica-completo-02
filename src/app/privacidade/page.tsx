import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Clínica Renata Amaral Estética Avançada trata os dados enviados pelo site.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-offwhite px-6 pb-24 pt-36 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow">Política de Privacidade</span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Como cuidamos das suas informações
          </h1>
          <div className="mt-8 space-y-6 font-body text-sm leading-relaxed text-stone">
            <p>
              Esta página explica, de forma simples, como os dados preenchidos no formulário de
              contato do site da {contact.legalName} são utilizados.
            </p>
            <h2 className="font-display text-xl text-espresso">Quais dados coletamos</h2>
            <p>
              Coletamos apenas as informações que você preenche voluntariamente no formulário de
              contato: nome, número de WhatsApp, procedimento de interesse, período de preferência
              e mensagem.
            </p>
            <h2 className="font-display text-xl text-espresso">Como usamos essas informações</h2>
            <p>
              Os dados são utilizados exclusivamente para que nossa equipe possa entrar em contato
              com você pelo WhatsApp e dar continuidade ao seu agendamento ou dúvida. Não
              compartilhamos essas informações com terceiros para fins de marketing.
            </p>
            <h2 className="font-display text-xl text-espresso">Como o formulário funciona</h2>
            <p>
              Ao enviar o formulário, seu navegador abre o WhatsApp com uma mensagem já formatada
              contendo os dados informados, direcionada ao número oficial da clínica. O site não
              armazena esses dados em nenhum servidor próprio.
            </p>
            <h2 className="font-display text-xl text-espresso">Seus direitos</h2>
            <p>
              Você pode solicitar, a qualquer momento pelo WhatsApp, a exclusão do histórico de
              conversa com a nossa equipe ou esclarecer dúvidas sobre o uso das suas informações.
            </p>
            <h2 className="font-display text-xl text-espresso">Contato</h2>
            <p>
              Em caso de dúvidas sobre esta política, entre em contato pelo WhatsApp{" "}
              {contact.whatsappDisplay} ou pelo Instagram {contact.instagramHandle}.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
