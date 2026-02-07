import Icon from '@mdi/react';
import { mdiCalendarEdit } from '@mdi/js';
import { mdiGestureSwipeUp } from '@mdi/js';
import { mdiPartyPopper } from '@mdi/js';

export default function AboutSection () {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <div
        className="group relative flex flex-col rounded-xl bg-white dark:bg-[#1a2634] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden"
      >
        <div
          className="h-48 w-full bg-cover bg-center relative bg-[linear-gradient(135deg,rgba(19,127,236,0.1)_0%,rgba(255,255,255,0.8)_100%),url('/guide/guide_calendar.png')]"
        >
          <div
            className="absolute top-4 left-4 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg z-10"
          >
            01
          </div>
        </div>
        <div
          className="p-8 flex flex-col gap-4 flex-1"
        >
          <div
            className="flex items-center gap-3 text-primary mb-1"
          >
            <Icon path={mdiCalendarEdit} size={1} />
          </div>
          <h3
            className="text-2xl font-bold text-[#0d141b] dark:text-white leading-tight"
          >
            目標を決める
          </h3>
          <p
            className="text-[#0d141b]/70 dark:text-white/70 text-base leading-relaxed"
          >
            まずはあなたの特別な日を設定しましょう。記念日、締め切り、旅行など、カレンダーをめくるのが楽しみになるような目標を決めます。
          </p>
        </div>
      </div>

      <div
        className="group relative flex flex-col rounded-xl bg-white dark:bg-[#1a2634] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden"
      >
        <div
          className="h-48 w-full bg-cover bg-center relative bg-[linear-gradient(135deg,rgba(19,127,236,0.1)_0%,rgba(255,255,255,0.8)_100%),url('/guide/guide_defeat.png')]"
        >
          <div
            className="absolute top-4 left-4 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg z-10"
          >
            02
          </div>
        </div>
        <div
          className="p-8 flex flex-col gap-4 flex-1"
        >
          <div
            className="flex items-center gap-3 text-primary mb-1"
          >
            <Icon path={mdiGestureSwipeUp} size={1} />
          </div>
          <h3
            className="text-2xl font-bold text-[#0d141b] dark:text-white leading-tight"
          >
            毎日破る
          </h3>
          <p
            className="text-[#0d141b]/70 dark:text-white/70 text-base leading-relaxed"
          >
            毎朝、「めくり」を開いて一日を始めましょう。画面をスワイプして昨日の紙を「破る」感覚を味わうと、新しい一日が姿を現します。
          </p>
        </div>
      </div>

      <div
        className="group relative flex flex-col rounded-xl bg-white dark:bg-[#1a2634] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden"
      >
        <div
          className="h-48 w-full bg-cover bg-center relative bg-[linear-gradient(135deg,rgba(19,127,236,0.1)_0%,rgba(255,255,255,0.8)_100%),url('/guide/guide_celebration.png')]"
        >
          <div
            className="absolute top-4 left-4 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg z-10"
          >
            03
          </div>
        </div>
        <div
          className="p-8 flex flex-col gap-4 flex-1"
        >
          <div
            className="flex items-center gap-3 text-primary mb-1"
          >
            <Icon path={mdiPartyPopper} size={1} />
          </div>
          <h3
            className="text-2xl font-bold text-[#0d141b] dark:text-white leading-tight"
          >
            当日を迎える
          </h3>
          <p
            className="text-[#0d141b]/70 dark:text-white/70 text-base leading-relaxed"
          >
            めくるたびに薄くなっていく束を楽しみながら、カウントダウンを続けましょう。当日までの「待ち遠しい時間」も大切な思い出になります。
          </p>
        </div>
      </div>
    </div>
  );
}