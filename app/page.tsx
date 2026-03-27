export default function Page() {
  const domains = [
    { name: "vape.com.ua", price: "$2,500" },
    { name: "free.com.ua", price: "$5,000" },
    { name: "pancake.com.ua", price: "$1,200" },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500 opacity-10 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-green-500 opacity-10 blur-[200px] rounded-full"></div>

      {/* NAV */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <h1 className="text-lg tracking-[0.2em] font-semibold">
          DOMAINS MARKET
        </h1>

        <button className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
          Sell Domain
        </button>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mt-24 px-6 relative z-10">
        
        <h2 className="text-[64px] leading-[1.1] font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Premium Domain Marketplace
          </span>
        </h2>

        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          Buy and sell high-value domain names for startups, brands and businesses
        </p>

        {/* SEARCH */}
        <div className="relative max-w-2xl mx-auto group">
          
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 blur-2xl opacity-20 group-hover:opacity-40 transition rounded-2xl"></div>

          <input
            placeholder="Search domain (e.g. crypto.com.ua)"
            className="relative w-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg placeholder:text-slate-500"
          />
        </div>

      </section>

      {/* DOMAINS */}
      <section className="max-w-7xl mx-auto px-6 mt-32 relative z-10">
        
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-xl">Featured Domains</h3>
          <span className="text-slate-500 text-sm">Premium selection</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {domains.map((d, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition hover:scale-[1.03] hover:border-cyan-400/30"
            >
              {/* glow hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-10 blur-xl transition"></div>

              <h4 className="text-lg mb-2 relative z-10">{d.name}</h4>

              <p className="text-green-400 font-semibold mb-4 relative z-10">
                {d.price}
              </p>

              <button className="relative z-10 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold hover:opacity-90 transition">
                Buy Domain
              </button>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
