import Footer from "@/components/partials/footers/Footer";
import Header from "@/components/partials/headers/Header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex flex-grow">{children}</main>
      <Footer />
    </>
  );
}
