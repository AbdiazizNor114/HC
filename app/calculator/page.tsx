import Calculator from "@/components/Calculator";
export const metadata = { title: "Price Calculator" };
export default function Page() {
  return (
    <section className="section page-section">
      <div className="page-heading">
        <div className="eyebrow">NO GUESSWORK. JUST POSSIBILITIES.</div>
        <h1>
          Your perfect fit <em>starts here.</em>
        </h1>
        <p>
          Choose a style, add your measurements, and see your space take shape.
        </p>
      </div>
      <Calculator />
      <p className="center muted small">
        All rates are illustrative demo prices in Kenyan shillings. No payment
        is taken.
      </p>
    </section>
  );
}
