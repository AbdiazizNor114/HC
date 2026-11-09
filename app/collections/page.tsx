import Collection from "@/components/Collection";
export const metadata = { title: "Collections" };
export default function Page() {
  return (
    <div className="section page-section">
      <div className="page-heading">
        <div className="eyebrow">TEXTURE, COLOUR & A LITTLE INSPIRATION</div>
        <h1>
          Find your kind of <em>beautiful.</em>
        </h1>
        <p>
          Thoughtfully chosen curtains, carpets, and blinds. Made for the way
          you live.
        </p>
      </div>
      <Collection />
    </div>
  );
}
