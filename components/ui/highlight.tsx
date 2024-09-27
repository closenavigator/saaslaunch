interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className = '' }: HighlightProps) {
  return <span className={`highlight-text ${className}`}>{children}</span>;
}