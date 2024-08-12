import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello App!</h1>
      <Button variant="bordered" color="primary">click me!</Button>
    </div>
  );
}
