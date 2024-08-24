import Typography from "@/components/shared/Typography";

type TitleProps = {
  title: string;
  subTitle: string;
};

export default ({ title, subTitle }: TitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography size="h1" className="font-bold">
        {title}
      </Typography>
      <Typography size="h6" className="w-auto md:w-96">
        {subTitle}
      </Typography>
    </div>
  );
};
