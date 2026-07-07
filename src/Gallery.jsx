export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Gallery</h1>
        <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
          Explore moments from our training sessions, events, and community gatherings.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{ 
              background: "linear-gradient(135deg, #ddd 0%, #f5f5f5 100%)",
              aspectRatio: "1",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#999"
            }}>
              Gallery Image {i}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "60px", textAlign: "center", padding: "40px", background: "#f5f5f5", borderRadius: "10px" }}>
          <h3>Gallery Coming Soon</h3>
            <p>We are collecting and organizing photos from our recent training sessions and events. Check back soon to see our community in action!</p>
          </div>
      </div>
    </section>
  );
}
