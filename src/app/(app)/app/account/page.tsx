import ContentBlock from "@/components/ContentBlock";
import Heading from "@/components/Heading";

export default function Page() {
  return (
    <main>
      <Heading className="my-8 text-white">Your Account</Heading>

      <ContentBlock className="h-[500px] flex justify-center items-center">
        <p>Logged in as ...</p>
      </ContentBlock>
    </main>
  );
}
