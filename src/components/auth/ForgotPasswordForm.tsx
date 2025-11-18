import Form from "@/components/shared/Form";
import Button from "@/components/shared/Button";

const ForgotPasswordForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Form.Input type="email" label="Email" placeholder="john@example.com" />
      <Button variant="primary">Reset</Button>
    </form>
  );
};

export default ForgotPasswordForm;
