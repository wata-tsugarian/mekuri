import Icon from '@mdi/react';
import { mdiTune } from '@mdi/js';
import { mdiCalendarMonth } from '@mdi/js';
import { mdiPoll } from '@mdi/js';

export default function WhyUsSection () {
  return (
    <div
      className="flex flex-col w-full max-w-300 gap-16"
    >
      <div
        className="flex flex-col gap-4 text-center md:text-left"
      >
        <h2
          className="text-3xl font-extrabold leading-tight tracking-tight text-text-main dark:text-white md:text-4xl"
        >
          めくり が選ばれる理由
        </h2>
        <p
          className="max-w-150 text-lg text-text-muted dark:text-gray-400"
        >
          シンプルで心地よい、毎日使いたくなる機能を揃えました。
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        <div
          className="group flex flex-col gap-6 p-8 transition-all border border-gray-100 rounded-2xl shadow-soft bg-background-light hover:border-primary/20 hover:shadow-lg dark:bg-gray-900/50 dark:border-gray-800"
        >
          <div
            className="flex items-center justify-center transition-colors rounded-xl size-14 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
          >
            <Icon path={mdiTune} size={1} />
          </div>
          <div
            className="flex flex-col gap-3"
          >
            <h3
              className="text-xl font-bold text-text-main dark:text-white"
            >
              かんたん設定
            </h3>
            <p
              className="text-sm leading-relaxed text-text-muted dark:text-gray-400"
            >
              目標日と名前を入力するだけ。複雑な操作は必要ありません。数秒であなただけのカレンダーが完成します。
            </p>
          </div>
        </div>

        <div
          className="group flex flex-col gap-6 p-8 transition-all border border-gray-100 rounded-2xl shadow-soft bg-background-light hover:border-primary/20 hover:shadow-lg dark:bg-gray-900/50 dark:border-gray-800"
        >
          <div
            className="flex items-center justify-center transition-colors rounded-xl size-14 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
          >
            <Icon path={mdiCalendarMonth} size={1} />
          </div>
          <div
            className="flex flex-col gap-3"
          >
            <h3
              className="text-xl font-bold text-text-main dark:text-white"
            >
              毎日のルーティン
            </h3>
            <p
              className="text-sm leading-relaxed text-text-muted dark:text-gray-400"
            >
              毎朝、画面をスワイプしてページを破る。リアルな質感と音が、新しい一日の始まりを告げます。
            </p>
          </div>
        </div>

        <div
          className="group flex flex-col gap-6 p-8 transition-all border border-gray-100 rounded-2xl shadow-soft bg-background-light hover:border-primary/20 hover:shadow-lg dark:bg-gray-900/50 dark:border-gray-800"
        >
          <div
            className="flex items-center justify-center transition-colors rounded-xl size-14 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
          >
            <Icon path={mdiPoll} size={1} />
          </div>
          <div
            className="flex flex-col gap-3"
          >
            <h3
              className="text-xl font-bold text-text-main dark:text-white"
            >
              進捗の可視化
            </h3>
            <p
              className="text-sm leading-relaxed text-text-muted dark:text-gray-400"
            >
              これまで歩んできた道のりと、目標までの残りの日数を美しく表示。モチベーション維持をサポートします。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}