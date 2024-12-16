import Aboutpageinfo from "@/components/Aboutpageinfo";
import Aboutpagetext from "@/components/Aboutpagetext";

export default function About() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#E3E3E3] container-color-[#E3E3E3]  mx-auto px-10 "
      style={{ paddingTop: "80px&quot;}}
    >
      <Aboutpageinfo />
      <Aboutpagetext />
    </main>
  );
}
