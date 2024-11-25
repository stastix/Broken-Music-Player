import FormNewSong from "./(components)/form-new-song";
import { getCurrentUser } from "./lib/session";

export default async function Home() {
  return (
    <main className="max-w-4xl mx-auto my-5">
      <FormNewSong />
    </main>
  );
}
