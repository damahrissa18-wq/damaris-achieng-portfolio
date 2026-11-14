import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 p-6 text-center text-zinc-700 ${className}`}
      >
        <ImageOff className="mb-3 h-7 w-7 text-zinc-400" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-display text-sm font-semibold tracking-tight text-zinc-900">
          {fallbackTitle}
        </span>
        {fallbackSubtitle && (
          <span className="mt-1 text-xs text-zinc-500">{fallbackSubtitle}</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
