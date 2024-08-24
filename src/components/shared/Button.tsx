type Variant = "primary" | "secondary";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export default ({ variant = "primary", className, children }: ButtonProps) => {
  const variantClass: { [key in Variant]: string } = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-500",
    secondary:
      "border border-gray-300 hover:bg-black hover:text-white active:bg-gray-800",
  };

  const buttonClass = `flex w-full items-center justify-center px-5 py-2 tracking-wider group ${variantClass[variant]} ${className}`;

  return <button className={buttonClass}>{children}</button>;
};
