import AppHeader from "@/components/AppHeader";
import Backgroundpattern from "@/components/BackgroundPattern";
import PetContextProvider from "@/context/PetContextProvider";
import SearchContextProvider from "@/context/SearchContextProvider";
import { Pet } from "@/lib/types";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );
  if (!response.ok) {
    throw new Error("Could not fetch pets");
  }
  const data: Pet[] = await response.json();

  return (
    <>
      <Backgroundpattern />
      <div className="max-w-[1050px] mx-auto px-4">
        <AppHeader />
        <SearchContextProvider>
          <PetContextProvider data={data}>{children}</PetContextProvider>
        </SearchContextProvider>
      </div>
    </>
  );
}
