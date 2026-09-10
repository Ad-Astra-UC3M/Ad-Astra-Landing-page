import WhatsAppGroupButton from "../../components/WhatsAppGroupButton.jsx";

/**
 * Vista aislada para incrustar en la página de agradecimiento de Tally.
 * La altura debe fijarse a 120 px en el bloque de iframe de Tally.
 */
export default function WhatsAppJoinPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-transparent p-4">
      <WhatsAppGroupButton />
    </section>
  );
}
