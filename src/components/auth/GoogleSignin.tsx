import Image from "next/image";
import Button from "@/components/shared/Button";

export default () => {
  return (
    <Button variant="secondary" className="gap-2">
      <Image src="/google-logo.png" height="20" width="20" alt="google-logo" />
      Continue with Google
    </Button>
  );
};
