import Icon from '@mdi/react';
import { mdiTimerSand } from '@mdi/js';
import { Button } from '@/components/ui/button';

export default function GettingSection () {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

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
      <form
        action="/auth/google_oauth2"
        method="post"
        className="w-full sm:w-auto"
      >
        <input
          type="hidden"
          name="authenticity_token"
          value={csrfToken || ''}
        />
        <Button
          type="submit"
          className="cursor-pointer rounded-xl px-8 transition-all w-full sm:w-64 justify-center hover:scale-105"
        >
          <img
            src="/auth/google.png"
            alt="Google Logo"
            className="w-6 h-6"
          />
          <span
            className="text-base"
          >
            Google でログイン
          </span>
        </Button>
      </form>
    </div>
  );
}