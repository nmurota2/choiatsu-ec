import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      id: 1,
      name: "みかんジュース",
      price: 1200,
      image: "/sample-mikan.jpg",
      story: "愛媛の農家さんが丁寧に搾った、無添加100%のみかんジュースです。"
    },
    {
      id: 2,
      name: "手作りゆずジャム",
      price: 850,
      image: "/sample-yuzu.jpg",
      story: "高知県の山奥で採れた香り高いゆずを使った、手作りのジャムです。"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* ヘッダーエリア */}
      <header className="w-full bg-white shadow-md py-6 px-4 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">🔥</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 tracking-wide">
            ちょい熱マーケティング道場
          </h1>
        </div>
      </header>

      {/* バナー */}
      <section className="bg-orange-100 py-8 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-orange-800 mb-2">
          熱い想いが詰まった、あなただけの“ごほうび”を見つけよう。
        </h2>
        <p className="text-sm text-orange-700">地域の名品 × ストーリー × ちょい熱マーケティング</p>
      </section>

      {/* 商品一覧 */}
      <section className="py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl p-6 transition hover:scale-[1.01]">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={350}
                className="rounded-lg object-cover w-full h-auto"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">{item.name}</h2>
              <p className="text-lg font-semibold text-orange-500 mt-1">¥{item.price}（送料込）</p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">{item.story}</p>
              <div className="mt-6 flex gap-3">
                <Link
                  href={`https://example.base.shop/items/${item.id}`}
                  target="_blank"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl text-sm font-medium shadow"
                >
                  購入する（BASE）
                </Link>
                <button className="text-blue-500 hover:text-blue-700 text-sm underline">SNSでシェア</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
