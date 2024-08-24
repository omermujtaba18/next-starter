import Link from "@/components/shared/Link";

type PromptProps = {
  text: string;
  linkText: string;
  href: string;
};

export default ({ text, linkText, href }: PromptProps) => {
  return (
    <div className="flex text-gray-500 gap-1">
      {text} <Link href={href} text={linkText} />
    </div>
  );
};
