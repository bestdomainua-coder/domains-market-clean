export default function Page() {
  const domains = [
    { name: "vape.com.ua", price: "$2,500" },
    { name: "free.com.ua", price: "$5,000" },
    { name: "pancake.com.ua", price: "$1,200" },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-10">
      
      {/* NAV */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-16">
        <h1 className="text-xl font-semibold tracking-wide">
          DOMAINS MARKET
        </h1>

        <button className="px-5 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
          Sell Domain
        </button>
      </div>

      {/* HERO */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
          Premium Domain Marketplace
        </h2>

        <p className="text-slate-400 mb-10">
          Buy and sell high-value domain names
        </p>

        <div className="max-w-xl mx-auto relative">
          <input
            placeholder="Search domain..."
            className="w-full p-5 rounded-2xl bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {domains.map((d, i) => (
          <div
            key={i}
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-lg mb-2">{d.name}</h3>

            <p className="text-green-400 font-semibold mb-4">
              {d.price}
            </p>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold hover:opacity-90 transition">
              Buy Domain
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}
