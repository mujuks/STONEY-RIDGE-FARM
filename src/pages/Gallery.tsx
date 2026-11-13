import GallerySection from "../components/GallerySection";
import PageHero from "../components/PageHero";
import { GALLERY_SECTION } from "../data/site";

export default function Gallery() {
  return (
    <>
      <PageHero
        navId="gallery"
        eyebrow={GALLERY_SECTION.eyebrow}
        title={GALLERY_SECTION.title}
        text={GALLERY_SECTION.text}
      />
      <GallerySection headless />
    </>
  );
}
