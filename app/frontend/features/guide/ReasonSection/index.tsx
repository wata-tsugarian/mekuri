import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

export default function ReasonSelection () {
  return (
    <>
      <div
        className="flex-1 flex flex-col gap-6"
      >
        <h2
          className="text-3xl font-bold text-[#0d141b] dark:text-white leading-tight"
        >
          なぜ「感触」が大切なのか？
        </h2>
        <p
          className="text-[#0d141b]/70 dark:text-white/70 text-lg leading-relaxed"
        >
          忙しい日々の中で、「めくり」は「待つこと」に温かみを与えます。一日一回、自分の指で紙を取り除くという小さな儀式が、流れていく時間を意識させ、今日という一日の価値を再確認させてくれます。
        </p>
        <ul
          className="flex flex-col gap-4 mt-2"
        >
          <li
            className="flex items-center gap-3 text-[#0d141b] dark:text-white font-medium"
          >
            <Icon path={mdiCheckCircle} size={1} />
            毎日の穏やかな習慣に
          </li>
          <li
            className="flex items-center gap-3 text-[#0d141b] dark:text-white font-medium"
          >
            <Icon path={mdiCheckCircle} size={1} />
            近づく未来を目で見て実感
          </li>
          <li
            className="flex items-center gap-3 text-[#0d141b] dark:text-white font-medium"
          >
            <Icon path={mdiCheckCircle} size={1} />
            心地よい「破る」インタラクション
          </li>
        </ul>
      </div>

      <div
        className="flex-1 w-full h-100 rounded-2xl overflow-hidden shadow-lg relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80, bg-[url('/guide/guide_documents.png')]"
        ></div>
        <div
          className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent"
        ></div>
        <div
          className="z-10 bg-white dark:bg-[#1a2634] p-8 rounded-xl shadow-2xl max-w-xs w-full flex flex-col items-center gap-5 border border-slate-200 dark:border-slate-700"
        >
          <span
            className="text-xs font-bold text-primary uppercase tracking-widest"
          >
            目標まであと
          </span>
          <div
            className="flex items-baseline gap-1"
          >
            <span
              className="text-7xl font-black text-[#0d141b] dark:text-white"
            >
              14
            </span>
            <span
              className="text-lg font-bold text-[#0d141b] dark:text-white"
            >
              日
            </span>
          </div>

          <div
            className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden"
          >
            <div
              className="h-full w-2/3 bg-primary rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}