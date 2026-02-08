import { PropsWithChildren } from 'react';
import { useEffect } from 'react'
import { usePage } from '@inertiajs/react'
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function DefaultLayout({ children }: PropsWithChildren) {
  const { flash } = usePage<{ flash: { notice?: string; alert?: string } }>().props

  useEffect(() => {
    // notice があれば toast を表示
    if (flash.notice) {
      toast.success(flash.notice)
    }
    // alert があれば toast を表示
    if (flash.alert) {
      toast.error(flash.alert)
    }
  }, [flash]) // flash が更新されるたびに実行

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* フラッシュメッセージ */}
      <Toaster />

      {/* メインコンテンツ */}
      <main className="grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div>
          {children}
        </div>
      </main>

    </div>
  )
}