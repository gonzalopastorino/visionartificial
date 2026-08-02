import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactHero from "../components/contact/ContactHero";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCallToAction from "../components/contact/ContactCallToAction";

function Contact() {
  return (
    <section>

      <ContactHero />

      <section className="py-20 px-6">
        <div className="
          max-w-[1200px]
          mx-auto
          grid
          lg:grid-cols-2
          gap-12
        ">

          <ContactInfo />

          <ContactForm />

        </div>
      </section>


      <ContactMap />

      <ContactFAQ />

      <ContactCallToAction />

    </section>
  );
}

export default Contact;