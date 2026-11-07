import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="A glimpse of farm life"
        title="Little moments from nature."
        lead="From the colors of the harvest to the beauty of the countryside, here's a visual taste of the farm-to-table spirit."
      />
      <section className="gallery">
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
