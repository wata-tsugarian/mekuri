import Icon from '@mdi/react';
import { mdiTimerSand } from '@mdi/js';
import { Button } from '@/components/ui/button';

export default function GettingSection () {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
      <div className="size-16 rounded-2xl bg-white dark:bg-background-dark shadow-md flex items-center justify-center text-primary mb-2">
        <Icon path={mdiTimerSand} size={2} />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-[#0d141b] dark:text-white tracking-tight">
        カウントダウンを始めましょう
      </h2>
      <p className="text-[#0d141b]/70 dark:text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
        多くの方が、毎日の「めくる」体験を楽しんでいます。<br className="hidden md:block"/>あなたも今日から、自分だけのカレンダーをめくってみませんか？
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
        <Button className="flex min-w-60 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-10 bg-primary text-slate-50 text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300">
          今すぐ無料で始める
        </Button>
      </div>
    </div>
  );
}