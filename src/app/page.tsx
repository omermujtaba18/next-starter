import Footer from "@/components/partials/footers/Footer";
import Header from "@/components/partials/headers/Header";
import Link from "@/components/shared/Link";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-grow"></main>
      <Footer />
    </>
  );
}
