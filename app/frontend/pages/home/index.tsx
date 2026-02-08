import HeroSection from "@/features/landing/HeroSection";
import WhyUsSection from "@/features/landing/WhyUsSection";

export default function Home () {
  return (
    <>
      <main
        className="flex flex-1 flex-col font-calendar"
      >
        <section
          className="flex flex-1 justify-center px-4 py-12 lg:px-40 lg:py-24"
        >
          <HeroSection />
        </section>
        <section
          className="flex justify-center px-4 py-24 dark:bg-background-dark lg:px-40"
        >
          <WhyUsSection />
        </section>
      </main>
    </>
  );
}