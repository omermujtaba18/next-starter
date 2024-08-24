import Footer from "@/components/partials/footers/Footer";
import Header from "@/components/partials/headers/Header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header hideNav />
      <main className="flex flex-grow">{children}</main>
      <Footer />
    </>
  );
}
