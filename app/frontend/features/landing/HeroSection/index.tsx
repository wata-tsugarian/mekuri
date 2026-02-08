import { Link } from '@inertiajs/react';
import { Button } from "@/components/ui/button";

export default function HeroSection () {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

  return (
    <div
      className="flex w-full max-w-300 flex-col gap-12 lg:flex-row lg:items-center lg:gap-20"
    >
      <div
        className="flex flex-1 flex-col justify-center gap-8 text-left"
      >
        <div
          className="flex flex-col gap-6"
        >
          <h1
            className="text-4xl font-extrabold leading-tight tracking-tight text-text-main dark:text-white sm:text-5xl lg:text-6xl"
          >
            <span
              className="inline-block"
            >
              日をめくる<span className="text-blue-600">喜び</span>を、
            </span>
            <span className="inline-block">
              デジタルでも。
            </span>
          </h1>
          <h2
            className="max-w-135 text-lg font-medium leading-relaxed text-text-muted dark:text-gray-400"
          >
            紙を破る感覚を再現した、新しいカウントダウンアプリ。目標までの毎日を、ただ待つのではなく「体験」へと変えましょう。
          </h2>
        </div>
        <div
          className="flex flex-col gap-4"
        >
          <Link
            href="/guide"
          >
            <Button
              className="cursor-pointer rounded-xl px-8 transition-all w-full sm:w-64 justify-center"
            >
              <span
                className="text-base"
              >
                使い方
              </span>
            </Button>
          </Link>
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
              className="cursor-pointer rounded-xl px-8 transition-all w-full sm:w-64 justify-center"
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
      </div>
      <div
        className="flex flex-1 items-center justify-center lg:justify-end"
      >
        <div
          className="relative aspect-4/3 w-full max-w-137.5 overflow-hidden rounded-2xl bg-linear-to-br from-gray-100 to-gray-200 shadow-2xl dark:from-gray-800 dark:to-gray-900"
        >
          <div
            className="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-[url('/landing/landing_calendar.png')]"
          >
            <div
              className="absolute inset-0 bg-primary/5 mix-blend-overlay"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}