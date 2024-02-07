import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex bg-white p-4 rounded-md shadow-md">
        <span className="text-2xl font-bold">Πελατολόγιο Lexis</span>
        <Button name="Είσοδος" path={"/clients"} />
      </div>
    </main>
  );
}
