import Link from 'next/link';

export default function Button({ href, children, variant = 'primary', className = '' }) {
  // Base styles for all buttons: uppercase, tracking-widest (letter spacing), smooth transitions
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase transition-all duration-500 ease-out font-medium";
  
  // Luxury variants
  const variants = {
    primary: "bg-luxury-gold text-black hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
    secondary: "border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black",
  };

  // If an href is passed, render a Next.js Link for fast client-side routing
  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a standard HTML button
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}