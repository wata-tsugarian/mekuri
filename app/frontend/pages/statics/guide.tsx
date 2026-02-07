import Icon from '@mdi/react';
import { mdiCalendarEdit } from '@mdi/js';
import { mdiGestureSwipeUp } from '@mdi/js';
import { mdiPartyPopper } from '@mdi/js';
import { mdiCheckCircle } from '@mdi/js';
import { mdiTimerSand } from '@mdi/js';

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-[#1a2634] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(19, 127, 236, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0FaizYEBb4UupLzXi9f0Vrfk1hPxZ-o1QV3yG2Rq29hRNsfRs2OMlhEtI_ahsraakF8hBR05yTtHGt9PFL6v5zLQ0WMmnCUiIO4qjNOBHJyeRXuMY1AKf7HimRrCEYP7qFs0QlAQxtpJoiInDdlCHvWK0V6ww0kwdJnCDTl_FaG74Xsz4aCys-gB5uBybDzU7amEqIt1TdUI7opn1casvg-PH2GyFxl1B5hllzY0_RP6ZKKm72vU8ueCHTUCiFHDmvDFb6jbH1QDM")'
                }}
              >
                <div className="absolute top-4 left-4 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  01
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <Icon path={mdiCalendarEdit} size={1} />
                </div>
                <h3 className="text-2xl font-bold text-[#0d141b] dark:text-white leading-tight">目標を決める</h3>
                <p className="text-[#0d141b]/70 dark:text-white/70 text-base leading-relaxed">
                  まずはあなたの特別な日を設定しましょう。記念日、締め切り、旅行など、カレンダーをめくるのが楽しみになるような目標を決めます。
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-[#1a2634] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(19, 127, 236, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBowMzQDA8Glf34XaRcaCmwqgSHaz2_I0UyFNSsRY34-MyvRlJFHpgu7LF40eIKnG2W-KgdFL99daG3WV6GZne4-ZVcyzQAlpeo71xzaCvaCjAtmiulmFH7ihg91LCNKX-oVh6ACPKr0MmeVrTBVLz6GPWfnGqTb2p2ZEk41UCeh8_QKXErKJPNkrV3JHIVzUjJddngI8IUys0zEicqjaGZT-5FN1u-g5D8QQdZuulE89waA6Pgpx0BIL6MLsC3YYRZl-plbIlZPDcF")'
                }}
              >
                <div className="absolute top-4 left-4 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  02
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <Icon path={mdiGestureSwipeUp} size={1} />
                </div>
                <h3 className="text-2xl font-bold text-[#0d141b] dark:text-white leading-tight">毎日破る</h3>
                <p className="text-[#0d141b]/70 dark:text-white/70 text-base leading-relaxed">
                  毎朝、「めくり」を開いて一日を始めましょう。画面をスワイプして昨日の紙を「破る」感覚を味わうと、新しい一日が姿を現します。
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-[#1a2634] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(19, 127, 236, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCbRvmI2akzyjqA-TeuKP8WBjzzcRHzTSKhCfnGKQYOZ61JVLQJ9uYi3uYNP2bthV7HXxirJBe6C9pqpEX5kN5K52vD6Cfmj1OVuDRdDH_Fxp01FZ0-jTAnVM1o--wFa_xdJCRhJUxONQf7TtF4lLgm9zgNW8Nr0OngOCSNJj0E4r0NrJZrzezaK2MPkYIRUFUloLbkJG8uCnyCt03RzOQ-jumFQBTK8iWrzUDtDyPYGKVBGk_JyYxyZaI2EH-xOTPk3nLw1IIFFBF")'
                }}
              >
                <div className="absolute top-4 left-4 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  03
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <Icon path={mdiPartyPopper} size={1} />
                </div>
                <h3 className="text-2xl font-bold text-[#0d141b] dark:text-white leading-tight">当日を迎える</h3>
                <p className="text-[#0d141b]/70 dark:text-white/70 text-base leading-relaxed">
                  めくるたびに薄くなっていく束を楽しみながら、カウントダウンを続けましょう。当日までの「待ち遠しい時間」も大切な思い出になります。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-240 py-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-[#0d141b] dark:text-white leading-tight">
              なぜ「感触」が大切なのか？
            </h2>
            <p className="text-[#0d141b]/70 dark:text-white/70 text-lg leading-relaxed">
              忙しい日々の中で、「めくり」は「待つこと」に温かみを与えます。一日一回、自分の指で紙を取り除くという小さな儀式が、流れていく時間を意識させ、今日という一日の価値を再確認させてくれます。
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-center gap-3 text-[#0d141b] dark:text-white font-medium">
                <Icon path={mdiCheckCircle} size={1} />
                毎日の穏やかな習慣に
              </li>
              <li className="flex items-center gap-3 text-[#0d141b] dark:text-white font-medium">
                <Icon path={mdiCheckCircle} size={1} />
                近づく未来を目で見て実感
              </li>
              <li className="flex items-center gap-3 text-[#0d141b] dark:text-white font-medium">
                <Icon path={mdiCheckCircle} size={1} />
                心地よい「破る」インタラクション
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full h-100 rounded-2xl overflow-hidden shadow-lg relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRFiezYp8gb2a6kGHEr73e7aUKSSP-vcMD_WTHaeKyLo70PYlCuQGPnDsKzUQsGRLsymZl1eMJ6tQL2P7FST61Y2xC8VTJcerLNN_UiIbRcEdln5WxawHtouHWXX-ndHIcc_tSLysjZN-TB59GKCva15i5-NVI6hnSHNzDjbDxUQL-7gM7jmO3n5wWn4JwePfGLXkZU_SbOV2_-RJdBFjiKfbWOAGQxgQI6XJoyjUenLulgXs0_Zud6dBfYlJJtZ_9x4MFcLa77y8V")' }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent"></div>
            <div className="z-10 bg-white dark:bg-[#1a2634] p-8 rounded-xl shadow-2xl max-w-xs w-full flex flex-col items-center gap-5 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">目標まであと</span>
              <div className="flex items-baseline gap-1">
                <span className="text-7xl font-black text-[#0d141b] dark:text-white">14</span>
                <span className="text-lg font-bold text-[#0d141b] dark:text-white">日</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary/5 dark:bg-primary/10 py-20 px-4 mt-10 rounded-[2rem] border border-primary/10">
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
              <button className="flex min-w-60 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-10 bg-primary text-slate-50 text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                今すぐ無料で始める
              </button>
            </div>
            <p className="text-sm text-[#0d141b]/50 dark:text-white/50 mt-4">
              登録は無料。クレジットカードは必要ありません。
            </p>
          </div>
        </section>
      </main>
    </>
  )
}