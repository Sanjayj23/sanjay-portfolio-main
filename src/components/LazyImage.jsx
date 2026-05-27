import clsx from "clsx";

/** Compressed portfolio images with native lazy loading (use eager only above the fold). */
export function LazyImage({ src, alt, className, style, eager = false, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(className)}
      style={style}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      {...props}
    />
  );
}
