import GoogleSignin from "@/components/auth/GoogleSignin";
import Prompt from "@/components/auth/Prompt";
import RegisterForm from "@/components/auth/RegisterForm";
import Title from "@/components/auth/Title";
import Divider from "@/components/shared/Divider";

export default function SignIn() {
  return (
    <section className="flex flex-col justify-center w-auto container mx-auto gap-14">
      <div className="flex flex-col gap-8 border-0 md:border md:border-gray-700 p-6 md:p-10">
        <Title
          title="Create your account"
          subTitle="Hi, Welcome to our platform!"
        />
        <div>
          <GoogleSignin />
          <Divider text="or create with email" />
          <RegisterForm />
        </div>
        <Prompt
          text="Already have an account?"
          linkText="Login here"
          href="/login"
        />
      </div>
    </section>
  );
}
