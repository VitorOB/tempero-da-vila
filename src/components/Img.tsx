import type { ImageKey } from "../data/site";
import { useSite } from "../i18n/lang";

type Props = {
  name: ImageKey;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Use alt="" quando a imagem for só decorativa ao lado de um texto que já diz o mesmo. */
  decorative?: boolean;
};

/** Imagem WebP responsiva (800w e 1600w) com width/height para evitar salto de layout. */
export function Img({ name, sizes, className, priority = false, decorative = false }: Props) {
  const img = useSite().site.images[name];
  const height800 = Math.round((img.height / img.width) * 800);
  return (
    <img
      src={`${img.src}-800.webp`}
      srcSet={`${img.src}-800.webp 800w, ${img.src}-1600.webp 1600w`}
      sizes={sizes}
      width={800}
      height={height800}
      alt={decorative ? "" : img.alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // React 18 ainda não tipa fetchPriority; o atributo em minúsculas é passado direto ao DOM.
      {...{ fetchpriority: priority ? "high" : "auto" }}
    />
  );
}
