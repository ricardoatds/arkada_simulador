
import { HydrateClient } from "~/trpc/server";
import Header from "./_components/header";
import Form from "./_components/form/form";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-white text-black mx-6 mb-20">
        <Header className="mt-14"/>
        <Form/>
      </main>
    </HydrateClient>
  );
}
