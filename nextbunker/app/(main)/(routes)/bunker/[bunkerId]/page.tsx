import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">бункер</h1>
      <Button variant="destructive">БУНКЕР</Button>
      <UserButton/>
      <ModeToggle/>
    </div>
  );
}
