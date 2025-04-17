interface GradientTextProps {
  text: string;
  from: string;
  to: string;
  via?: string;
  className?: string;
}

export default function GradientText({ 
  text, 
  from, 
  to, 
  via, 
  className = "" 
}: GradientTextProps) {
  const gradientClass = via 
    ? `bg-gradient-to-r ${from} ${via} ${to}`
    : `bg-gradient-to-r ${from} ${to}`;

  return (
    <span className={`inline-block text-transparent bg-clip-text ${gradientClass} ${className}`}>
      {text}
    </span>
  );
}