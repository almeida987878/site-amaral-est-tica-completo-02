import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AuthorityBar } from "@/components/AuthorityBar";
import { About } from "@/components/About";
import { Space } from "@/components/Space";
import { Treatments } from "@/components/Treatments";
import { Differentials } from "@/components/Differentials";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Gallery } from "@/components/Gallery";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Location } from "@/components/Location";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <About />
        <Space />
        <Treatments />
        <Differentials />
        <BeforeAfterSlider />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
        <Location />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
