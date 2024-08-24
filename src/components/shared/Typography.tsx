type TypographySize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type TypographyProps = {
  size?: TypographySize;
  className?: string;
  children: React.ReactNode;
};

export default ({ size = "h1", className, children }: TypographyProps) => {
  return {
    h1: <h1 className={`text-4xl ${className}`}>{children}</h1>,
    h2: <h2 className={`text-3xl ${className}`}>{children}</h2>,
    h3: <h3 className={`text-2xl ${className}`}>{children}</h3>,
    h4: <h4 className={`text-xl ${className}`}>{children}</h4>,
    h5: <h5 className={`text-lg ${className}`}>{children}</h5>,
    h6: <h6 className={`text-base ${className}`}>{children}</h6>,
    p: <p className={`text-base ${className}`}>{children}</p>,
  }[size];
};
