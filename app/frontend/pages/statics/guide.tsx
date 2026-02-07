import AboutSection from '@/features/guide/AboutSection';
import ReasonSelection from '@/features/guide/ReasonSection';
import GettingSection from '@/features/guide/GettingSection';

export default function GuidePage () {
  return (
    <>
      <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-10 gap-16 font-calendar">
        <section className="flex flex-col items-center text-center max-w-3xl gap-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
            使い方ガイド
          </div>
          <h1 className="text-[#0d141b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.02em]">
            時の流れを、<br/>手触りのある体験に。
          </h1>
          <p className="text-[#0d141b]/70 dark:text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            「めくり」は、紙の日めくりカレンダーが持つ心地よさをデジタルで再現しました。一日一日を丁寧に「破る」ことで、大切な日への期待を深めましょう。
          </p>
        </section>

        <section className="w-full max-w-300 flex flex-col gap-10">
          <AboutSection />
        </section>

        <section className="w-full max-w-240 py-12 flex flex-col md:flex-row items-center gap-12">
          <ReasonSelection />
        </section>

        <section className="w-full bg-primary/5 dark:bg-primary/10 py-20 px-4 mt-10 rounded-[2rem] border border-primary/10">
          <GettingSection />
        </section>
      </main>
    </>
  )
}