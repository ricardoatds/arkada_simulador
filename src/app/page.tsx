
import { HydrateClient } from "~/trpc/server";
import Form from "./_components/form/form";
import Footer from "./_components/footer";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center text-black mx-6 mb-20">
        <Form/>
        <Footer/>
      </main>
    </HydrateClient>
  );
}
