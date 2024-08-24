import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import Title from "@/components/auth/Title";

export default function SignIn() {
  return (
    <section className="flex flex-col justify-center w-full md:w-auto container mx-auto gap-14">
      <div className="flex flex-col gap-8 border-0 md:border md:border-gray-700 p-6 md:p-10">
        <Title
          title="Reset your password"
          subTitle="Enter the email associated with your account and we’ll send you a link to reset password"
        />
        <div>
          <ForgotPasswordForm />
        </div>
      </div>
    </section>
  );
}
