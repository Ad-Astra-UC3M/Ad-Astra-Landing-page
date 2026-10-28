import WhatsAppGroupButton from "../../components/WhatsAppGroupButton.jsx";

/**
 * Vista aislada para incrustar en la página de agradecimiento de Tally.
 * La altura puede fijarse a 64 px en el bloque de iframe de Tally.
 */
export default function WhatsAppJoinPage() {
  return (
    <section className="flex items-center justify-center bg-[#fcfdf4] p-1">
      <WhatsAppGroupButton compact />
    </section>
  );
}
