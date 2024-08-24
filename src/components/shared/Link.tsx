import * as NextLink from "next/link";
import Typography from "@/components/shared/Typography";

type LinkProps = { text: string; href: string; className?: string };

export default ({ text, href, className }: LinkProps) => {
  return (
    <NextLink.default
      href={href}
      className={`hover:underline hover:underline-offset-4 text-gray-500 hover:text-gray-900 ${className}`}
    >
      <Typography size="p">{text}</Typography>
    </NextLink.default>
  );
};
