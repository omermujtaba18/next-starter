import Form from "@/components/shared/Form";
import Button from "@/components/shared/Button";
import Link from "@/components/shared/Link";

export default () => {
  return (
    <form className="flex flex-col gap-4">
      <Form.Input type="email" label="Email" placeholder="john@example.com" />
      <Form.Input type="password" label="Password" placeholder="----------" />
      <Link
        href="/forgot-password"
        text="Forgot your password?"
        className="flex justify-end"
      />
      <Button variant="primary">Login</Button>
      <p className="text-sm w-80 text-gray-500">
        By clicking this button, you agree to our Terms of service and Privacy
        policy.
      </p>
    </form>
  );
};
