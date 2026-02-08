import { Link, usePage } from '@inertiajs/react';
import { UserProps } from '@/types';
import { Button } from '@/components/ui/button';
import Icon from '@mdi/react';
import { mdiAccountEdit } from '@mdi/js';
import { mdiLogout } from '@mdi/js';

interface PageProps {
  currentUser: UserProps | null;
  [key: string]: unknown;
}

export default function Mypage() {
  const { currentUser } = usePage<PageProps>().props;

  return (
    <>
      <div className="min-h-screen bg-base-200 p-4 font-calendar">
        <div className="card w-full max-w-2xl mx-auto">
          <div className="card-body text-center">
            {currentUser ? (
              <div className="flex flex-col items-center justify-center gap-4">
                {currentUser.avatar_url && (
                  <div className="avatar">
                    <div className="h-full w-full rounded-full overflow-hidden">
                      <img src={currentUser.avatar_url} alt="icon" className="object-cover w-full h-full" />
                    </div>
                  </div>
                )}

                <div className="text-center space-y-2 mb-10 max-w-md w-full animate-fade-in-up">
                  <h1 className="text-2xl md:text-3xl font-bold text-text-main tracking-tight">
                    {currentUser.name}
                  </h1>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xs items-center">
                  <Button className="flex w-full items-center justify-center cursor-pointer rounded-xl px-8 transition-all sm:w-64 hover:scale-105">
                    <Icon path={mdiAccountEdit} size={1} />
                    <span>プロフィール編集</span>
                  </Button>

                  <Link
                    href="/logout"
                    method="delete"
                    className="w-full flex justify-center"
                  >
                    <Button className="flex w-full items-center justify-center cursor-pointer rounded-xl px-8 transition-all sm:w-64 hover:scale-105">
                      <Icon path={mdiLogout} size={1} />
                      <span>ログアウト</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <p>ユーザー情報が取得できませんでした。</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}