import Image from 'next/image';
import Reveal from './Reveal';

type StackImage = { src: string; alt: string; bg?: string; objectPosition?: string; external?: boolean };

export default function ImageStack({ images }: { images: StackImage[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {images.map((img) => (
        <Reveal
          key={img.src}
          style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 16px 44px rgba(72,22,32,0.16)', border: '1px solid rgba(72,22,32,0.06)', background: img.bg || '#fdf1e4', aspectRatio: '16/10', position: 'relative' }}
        >
          {img.external ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: img.objectPosition || 'top' }} />
          ) : (
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: img.objectPosition || 'top' }} />
          )}
        </Reveal>
      ))}
    </div>
  );
}
