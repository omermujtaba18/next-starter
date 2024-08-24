import Header from "@/components/partials/headers/Header";
import Button from "@/components/shared/Button";
import Divider from "@/components/shared/Divider";
import Form from "@/components/shared/Form";
import Typography from "@/components/shared/Typography";
import Link from "next/link";

export default function Design() {
  const navs = ["Typography", "Buttons", "Form", "Divider"];

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 px-5 md:px-0">
        <div className="flex gap-40">
          <div className="flex flex-col gap-4">
            {navs.map((nav, index) => (
              <nav key={`nav-${index}`}>
                <Link href={`#${nav.toLowerCase()}`}>
                  <Typography
                    size="h4"
                    className="hover:underline hover:underline-offset-8"
                  >
                    {nav}
                  </Typography>
                </Link>
              </nav>
            ))}
          </div>
          <div className="flex-grow">
            <section className="mb-10" id="typography">
              <Typography className="font-bold mb-4">Typography</Typography>
              <Typography size="h1">Heading 1</Typography>
              <Typography size="h2">Heading 2</Typography>
              <Typography size="h3">Heading 3</Typography>
              <Typography size="h4">Heading 4</Typography>
              <Typography size="h5">Heading 5</Typography>
              <Typography size="h6">Heading 6</Typography>
            </section>
            <section className="mb-10" id="buttons">
              <Typography className="font-bold mb-4">Buttons</Typography>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 w-full md:w-1/2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                </div>
                <div className="flex gap-4 w-full md:w-1/2">
                  <Button variant="primary" className="gap-2">
                    Primary with Icon
                    <svg
                      width="15"
                      height="15"
                      className="fill-white"
                      viewBox="0 0 500 500"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <svg
                      width="15"
                      height="15"
                      className="fill-black group-hover:fill-white"
                      viewBox="0 0 500 500"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                    Secondary with Icon
                  </Button>
                </div>
              </div>
            </section>
            <section className="mb-10" id="form">
              <Typography className="font-bold mb-4">Form</Typography>
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <Typography className="font-bold" size="h4">
                  Form Input
                </Typography>
                <Form.Input
                  type="text"
                  label="Email"
                  placeholder="Enter your email address"
                  autoComplete="username"
                />
                <Form.Input
                  type="password"
                  label="Password"
                  autoComplete="current-password"
                />

                <Typography className="font-bold" size="h4">
                  Checkbox
                </Typography>
                <Form.Checkbox label="Check this!" />

                <Typography className="font-bold" size="h4">
                  Radio Button
                </Typography>
                <Form.Radio label="Option 1" name="radio" value="radio-1" />
                <Form.Radio label="Option 2" name="radio" value="radio-2" />
                <Form.Radio label="Option 3" name="radio" value="radio-3" />
              </div>
            </section>
            <section className="mb-10" id="divider">
              <Typography className="font-bold mb-4">Divider</Typography>
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <Divider text="This is a divider" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
