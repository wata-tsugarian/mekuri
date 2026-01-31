type Props = {
  content: string
}

export default function HelloComponent ({ content }: Props) {
  return (
    <main>
      <h1 className="flex items-center justify-center">
        Hello from {content}
      </h1>
      <div className="flex items-center justify-center">
        <button
          onClick={() => alert("Reactのイベントも動いているぞ!")}
          className="cursor-pointer"
        >
          動作確認ボタン
        </button>
      </div>
    </main>
  )
}