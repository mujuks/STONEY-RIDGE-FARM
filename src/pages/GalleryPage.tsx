import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import { SECTION_COPY } from "../data";

export default function GalleryPage() {
  return (
    <>
      <PageHeader {...SECTION_COPY.gallery} />
      <section className="gallery">
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
