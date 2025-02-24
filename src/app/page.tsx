
import { HydrateClient } from "~/trpc/server";
import Header from "./_components/header";
import Form from "./_components/form/form";
import FAQ from "./_components/faq";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-white text-black">
        <Header className="mt-14"/>
        <Form/>
        <FAQ/>
      </main>
    </HydrateClient>
  );
}
