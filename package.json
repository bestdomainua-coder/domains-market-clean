export default function Page() {
  const domains = [
    { name: "vape.com.ua", price: "$2,500" },
    { name: "free.com.ua", price: "$5,000" },
    { name: "pancake.com.ua", price: "$1,200" },
  ];

  return (
    <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "28px" }}>Domains Market</h1>
        <button style={{
          background: "#111",
          border: "1px solid #333",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "10px"
        }}>
          Sell Domain
        </button>
      </div>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a, #020617)",
        padding: "60px",
        borderRadius: "20px",
        marginBottom: "50px",
        border: "1px solid #1e293b"
      }}>
        <h2 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Find Your Perfect Domain
        </h2>
        <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
          Premium domains for startups, brands and businesses
        </p>

        <input
          placeholder="Search domain..."
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid #334155",
            background: "#020617",
            color: "#fff",
            fontSize: "16px"
          }}
        />
      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "25px"
      }}>
        {domains.map((d, i) => (
          <div key={i} style={{
            background: "#020617",
            border: "1px solid #1e293b",
            borderRadius: "18px",
            padding: "25px"
          }}>
            <h3 style={{ marginBottom: "10px" }}>{d.name}</h3>
            <p style={{ color: "#22c55e", fontWeight: "bold" }}>{d.price}</p>

            <button style={{
              marginTop: "15px",
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(135deg, #22c55e, #06b6d4)",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Buy Domain
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}
