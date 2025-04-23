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
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        ちょい熱マーケティング道場EC
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-4">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-700 mt-1">¥{item.price}（送料込）</p>
            <p className="text-sm text-gray-600 mt-2">{item.story}</p>
            <div className="mt-4 flex gap-2">
              <Link
                href={`https://example.base.shop/items/${item.id}`}
                target="_blank"
                className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
              >
                購入する（BASE）
              </Link>
              <button className="text-sm text-blue-500 underline">SNSでシェア</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
