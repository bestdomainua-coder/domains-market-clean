"use client";

import { motion } from "framer-motion";

export default function Page() {
  const domains = [
    { name: "vape.com.ua", price: 2500 },
    { name: "free.com.ua", price: 5000 },
    { name: "pancake.com.ua", price: 1200 },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500 opacity-10 blur-[200px] rounded-full"></div>

      {/* NAV */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center"
      >
        <h1 className="tracking-[0.2em]">DOMAINS MARKET</h1>

        <button className="px-5 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition">
          Sell Domain
        </button>
      </motion.div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mt-24 px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[64px] font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Premium Domain Marketplace
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 mb-12"
        >
          Buy and sell high-value domain names
        </motion.p>

        {/* SEARCH */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative max-w-2xl mx-auto group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 blur-2xl opacity-20 group-hover:opacity-40 transition rounded-2xl"></div>

          <input
            placeholder="Search domain..."
            className="relative w-full p-6 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </motion.div>
      </section>

      {/* DOMAINS */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid md:grid-cols-3 gap-8">
          
          {domains.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            >
              <h4 className="mb-2">{d.name}</h4>

              <p className="text-green-400 mb-4">
                ${d.price}
              </p>

              <button
                onClick={() => alert(`Buy ${d.name}`)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold"
              >
                Buy Domain
              </button>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}
