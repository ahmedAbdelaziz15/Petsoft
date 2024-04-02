"use client";

import { usePetContext } from "@/lib/hook";

export default function Stats() {
  const { numberOfPets } = usePetContext();
  return (
    <section className="text-center">
      <p className="text-xl font-bold leading-6">{numberOfPets}</p>
      <p className="opacity-80">current guests</p>
    </section>
  );
}