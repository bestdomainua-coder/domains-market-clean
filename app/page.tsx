export default function Page() {
  const domains = [
    { name: "vape.com.ua", price: "$2,500" },
    { name: "free.com.ua", price: "$5,000" },
    { name: "pancake.com.ua", price: "$1,200" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      color: "#fff",
      padding: "40px",
      fontFamily: "Inter, sans-serif"
    }}>

      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "60px"
      }}>
        <h1 style={{
          fontSize: "24px",
          fontWeight: "600",
          letterSpacing: "1px"
        }}>
          DOMAINS MARKET
        </h1>

        <button style={{
          background: "transparent",
          border: "1px solid #334155",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "12px",
          backdropFilter: "blur(10px)"
        }}>
          Sell Domain
        </button>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        marginBottom: "80px"
      }}>
        <h2 style={{
          fontSize: "56px",
          fontWeight: "700",
          background: "linear-gradient(90deg, #38bdf8, #22c55e)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px"
        }}>
          Premium Domain Marketplace
        </h2>

        <p style={{
          color: "#94a3b8",
          fontSize: "18px",
          marginBottom: "40px"
        }}>
          Buy and sell high-value domain names
        </p>

        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative"
        }}>
          <input
            placeholder="Search domain..."
            style={{
              width: "100%",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #1e293b",
              background: "rgba(2,6,23,0.8)",
              backdropFilter: "blur(20px)",
              color: "#fff",
              fontSize: "16px",
              boxShadow: "0 0 30px rgba(56,189,248,0.15)"
            }}
          />
        </div>
      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "30px"
      }}>
        {domains.map((d, i) => (
          <div key={i} style={{
            padding: "30px",
            borderRadius: "20px",
            background: "rgba(15,23,42,0.6)",
            border: "1px solid rgba(148,163,184,0.1)",
            backdropFilter: "blur(20px)",
            transition: "0.3s",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {d.name}
            </h3>

            <p style={{
              color: "#22c55e",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              {d.price}
            </p>

            <button style={{
              width: "100%",
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(135deg, #38bdf8, #22c55e)",
              color: "#000",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(56,189,248,0.4)"
            }}>
              Buy Domain
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}
