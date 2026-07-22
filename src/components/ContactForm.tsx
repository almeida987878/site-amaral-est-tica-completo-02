"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { confirmedTreatments } from "@/data/treatments";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { maskPhone } from "@/lib/utils";
import { Reveal } from "./ui/Reveal";

type FormState = {
  name: string;
  phone: string;
  interest: string;
  period: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  interest: "",
  period: "",
  message: "",
  consent: false,
};

const periods = ["Manhã", "Tarde", "Noite", "Sem preferência"];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (form.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Informe um WhatsApp válido, com DDD.";
    }
    if (!form.consent) nextErrors.consent = "É necessário autorizar o contato para continuar.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const lines = [
      "Olá, vim pelo site da Clínica Renata Amaral e gostaria de solicitar um contato.",
      `Nome: ${form.name}`,
      `WhatsApp: ${form.phone}`,
      form.interest && `Procedimento de interesse: ${form.interest}`,
      form.period && `Melhor período para atendimento: ${form.period}`,
      form.message && `Mensagem: ${form.message}`,
    ].filter(Boolean);

    window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setForm(initialState);
  }

  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Contato</span>
          <h2 className="balance mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Prefere que a gente te chame?
          </h2>
          <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-stone">
            Preencha os dados abaixo. Ao enviar, abriremos o WhatsApp com sua mensagem já
            formatada para nossa equipe.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-6 rounded-card border border-beige bg-white p-8 shadow-card sm:grid-cols-2 lg:p-10"
          >
            <div className="sm:col-span-1">
              <label htmlFor="name" className="font-body text-sm font-medium text-charcoal">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="mt-2 w-full rounded-soft border border-beige bg-offwhite px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 font-body text-xs text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="phone" className="font-body text-sm font-medium text-charcoal">
                WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="(11) 90000-0000"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: maskPhone(e.target.value) }))}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className="mt-2 w-full rounded-soft border border-beige bg-offwhite px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 font-body text-xs text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="interest" className="font-body text-sm font-medium text-charcoal">
                Procedimento de interesse
              </label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))}
                className="mt-2 w-full rounded-soft border border-beige bg-offwhite px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
              >
                <option value="">Selecione (opcional)</option>
                {confirmedTreatments.map((treatment) => (
                  <option key={treatment.slug} value={treatment.name}>
                    {treatment.name}
                  </option>
                ))}
                <option value="Outro">Outro / ainda não sei</option>
              </select>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="period" className="font-body text-sm font-medium text-charcoal">
                Melhor período para atendimento
              </label>
              <select
                id="period"
                name="period"
                value={form.period}
                onChange={(e) => setForm((prev) => ({ ...prev, period: e.target.value }))}
                className="mt-2 w-full rounded-soft border border-beige bg-offwhite px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
              >
                <option value="">Selecione (opcional)</option>
                {periods.map((period) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="font-body text-sm font-medium text-charcoal">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="mt-2 w-full resize-none rounded-soft border border-beige bg-offwhite px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-rosegold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 font-body text-xs leading-relaxed text-stone">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
                  aria-invalid={Boolean(errors.consent)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-beige text-rosegold focus:ring-rosegold"
                />
                <span>
                  Autorizo o contato pelo WhatsApp informado e li a{" "}
                  <Link
                    href="/privacidade"
                    className="font-medium text-rosegold-dark underline underline-offset-2"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1.5 font-body text-xs text-red-600">{errors.consent}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn-shine mt-2 inline-flex items-center justify-center rounded-full bg-rosegold px-8 py-4 font-body text-sm font-semibold text-white shadow-card transition-all duration-350 hover:scale-[1.01] hover:bg-rosegold-dark sm:col-span-2"
            >
              Solicitar contato
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
