import { useState } from 'react';

const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%232c1810' width='100' height='100'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='40'%3E🍖%3C/text%3E%3C/svg%3E";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export default function Img({ fallback = FALLBACK, ...props }: ImgProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <img {...props} src={fallback} alt={props.alt || ''} className={props.className} />;
  }
  return <img {...props} onError={() => setFailed(true)} />;
}
