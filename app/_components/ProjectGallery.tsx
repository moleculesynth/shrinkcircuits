type ProjectGalleryProps = {
  images: string[];
  altPrefix: string;
};

export function ProjectGallery({ images, altPrefix }: ProjectGalleryProps) {
  return (
    <div className="gallery" aria-label={`${altPrefix} photo gallery`}>
      {images.map((src, index) => (
        <figure className="gallery-item" key={src}>
          <img
            src={src}
            alt={`${altPrefix}, photograph ${index + 1} of ${images.length}`}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}
