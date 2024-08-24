import GoogleSignin from "@/components/auth/GoogleSignin";
import LoginForm from "@/components/auth/LoginForm";
import Prompt from "@/components/auth/Prompt";
import Title from "@/components/auth/Title";
import Divider from "@/components/shared/Divider";

export default function SignIn() {
  return (
    <section className="flex flex-col justify-center w-full md:w-auto container mx-auto gap-14">
      <div className="flex flex-col gap-8 border-0 md:border md:border-gray-700 p-6 md:p-10">
        <Title title="Login to your account" subTitle="Hi, Welcome back!" />
        <div>
          <GoogleSignin />
          <Divider text="or login with email" />
          <LoginForm />
        </div>
        <Prompt
          text="Not registered yet?"
          linkText="Create your account"
          href="/register"
        />
      </div>
    </section>
  );
}
