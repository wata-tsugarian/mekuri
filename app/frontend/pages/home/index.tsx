import { Button } from "@/components/ui/button"
import Icon from '@mdi/react';
import { mdiTune } from '@mdi/js';
import { mdiCalendarMonth } from '@mdi/js';
import { mdiPoll } from '@mdi/js';

export default function Home () {
  return (
    <>
      <main
        className="flex flex-1 flex-col font-calendar"
      >
        <section
          className="flex flex-1 justify-center px-4 py-12 lg:px-40 lg:py-24"
        >
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
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  className="cursor-pointer rounded-xl px-8 transition-all">
                  <span className="text-base font-bold">使い方</span>
                </Button>
              </div>
            </div>
            <div
              className="flex flex-1 items-center justify-center lg:justify-end"
            >
              <div
                className="relative aspect-4/3 w-full max-w-137.5 overflow-hidden rounded-2xl bg-linear-to-br from-gray-100 to-gray-200 shadow-2xl dark:from-gray-800 dark:to-gray-900"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCppYIaSeqB5mSAKFZ2KzaNOewAkfVk1VRxp3AMw8XCS42XS6R-31xN4dbAcf4UgGeXLKUtbbLOOnMp55hRLIT5gcUmnG6y6GNnXwwHu9e4ylD_ZqvTxJMUL2KkcxXRJJdXbCCuB2V_xiS58OurzEZIOKF3RUPLCMEWD5CwSxsuJI2WMz5On_jlS59YVXBwSjNa8KdZmev3OtJ64A0NaMJ53BB5LF74Mf6o3MSNBawFo6aH7dPtjIVktCqCDtKzHMpFnnNz4BBbkHwr')]"
                >
                  <div
                    className="absolute inset-0 bg-primary/5 mix-blend-overlay"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="flex justify-center px-4 py-24 bg-white dark:bg-background-dark lg:px-40"
        >
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
        </section>
      </main>
    </>
  )
}