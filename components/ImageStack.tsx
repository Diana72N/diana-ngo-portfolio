import Image from 'next/image';
import Reveal from './Reveal';

type StackImage = { src: string; alt: string; objectPosition?: string; external?: boolean };

export default function ImageStack({ images }: { images: StackImage[] }) {
  return (
    <div className="image-stack">
      {images.map((img) => (
        <Reveal key={img.src} className="frame">
          {img.external ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img.src} alt={img.alt} style={{ objectPosition: img.objectPosition }} />
          ) : (
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: img.objectPosition }} />
          )}
        </Reveal>
      ))}
    </div>
  );
}
