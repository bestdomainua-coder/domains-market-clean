export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* NAV */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-lg tracking-widest font-semibold">
          DOMAINS MARKET
        </h1>

        <button className="px-5 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
          Sell Domain
        </button>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mt-20 px-6">
        
        <h2 className="text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Find Premium Domains
          </span>
        </h2>

        <p className="text-slate-400 text-lg mb-10">
          Buy and sell high-quality domain names for your business
        </p>

        {/* SEARCH */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 blur-2xl opacity-20 rounded-2xl"></div>

          <input
            placeholder="Search domain..."
            className="relative w-full p-5 rounded-2xl bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
          />
        </div>
      </section>

      {/* FEATURED DOMAINS */}
      <section className="max-w-7xl mx-auto px-6 mt-28">
        
        <h3 className="text-xl mb-6">Featured Domains</h3>

        <div className="grid md:grid-cols-3 gap-8">
          
          {["vape.com.ua", "free.com.ua", "pancake.com.ua"].map((d, i) => (
            <div
              key={i}
              className="group bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:scale-[1.03] transition"
            >
              <h4 className="text-lg mb-2">{d}</h4>

              <p className="text-green-400 font-semibold mb-4">
                ${[2500, 5000, 1200][i]}
              </p>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold hover:opacity-90 transition">
                Buy Domain
              </button>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
