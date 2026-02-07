import { Link, usePage } from '@inertiajs/react';
import { UserProps } from '@/types';

// InertiaのデフォルトのPage型を拡張しても良いですが、ここではシンプルに定義します
interface PageProps {
  currentUser: UserProps | null;
  [key: string]: unknown; // その他Inertiaが自動で付与するprops用
}

export default function Mypage() {
  // 4. usePageにジェネリクス(<PageProps>)を渡して型を効かせる
  const { currentUser } = usePage<PageProps>().props;

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl mx-auto">
        <div className="card-body text-center">
          <h2 className="card-title justify-center text-2xl mb-4">
            仮マイページ
          </h2>

          {currentUser ? (
            <div className="flex flex-col items-center gap-4">
              {/* Googleアイコンの表示 */}
              {currentUser.avatar_url && (
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={currentUser.avatar_url} alt="icon" />
                  </div>
                </div>
              )}

              <div className="text-left mt-4 p-4 bg-gray-100 rounded-lg w-full">
                <p><strong>名前:</strong> {currentUser.name}</p>
                <p><strong>Email:</strong> {currentUser.email}</p>
                <p><strong>UID:</strong> {currentUser.uid}</p>
              </div>

              <div className="card-actions justify-end mt-6 w-full">
                <Link
                  href="/logout"
                  method="delete"
                  as="button"
                  className="btn btn-error btn-outline"
                >
                  ログアウト
                </Link>
              </div>
            </div>
          ) : (
            <p>ユーザー情報が取得できませんでした。</p>
          )}
        </div>
      </div>
    </div>
  );
}