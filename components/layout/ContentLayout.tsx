interface ContentLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentLayout({ children, className = '' }: ContentLayoutProps) {
  return (
    <div className={`w-full max-w-4xl space-y-golden-2xl ${className}`}>
      {children}
    </div>
  )
}