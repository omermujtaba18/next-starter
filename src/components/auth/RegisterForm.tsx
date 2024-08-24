import Form from "@/components/shared/Form";
import Button from "@/components/shared/Button";

export default () => {
  return (
    <form className="flex flex-col gap-4">
      <Form.Input type="text" label="Your Name" placeholder="John Doe" />
      <Form.Input type="email" label="Email" placeholder="john@example.com" />
      <Form.Input type="password" label="Password" placeholder="----------" />
      <Button variant="primary">Create account</Button>
      <p className="text-sm w-80 text-gray-500">
        By clicking this button, you agree to our Terms of service and Privacy
        policy.
      </p>
    </form>
  );
};
