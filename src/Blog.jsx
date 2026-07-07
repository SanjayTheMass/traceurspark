export default function Blog() {
  return (
    <section className="section">
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Blog</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Insights, tips, and stories from the Traceurs Park community.
          </p>
          
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {[1, 2, 3].map((i) => (
              <article key={i} style={{ 
                marginBottom: "40px",
                padding: "30px",
                background: "#f5f5f5",
                borderRadius: "10px",
                borderLeft: "4px solid var(--primary)"
              }}>
                <h3 style={{ color: "var(--primary)", marginBottom: "10px" }}>Blog Post Title {i}</h3>
                <p style={{ fontSize: "0.9rem", color: "#999", marginBottom: "15px" }}>Published on June {15 + i}, 2024</p>
                <p>This is a preview of blog post {i}. Our blog features articles about movement training, fitness tips, success stories from our community, and insights from our experienced coaches.</p>
                <a href="#" style={{ color: "var(--accent)", fontWeight: "bold", textDecoration: "none" }}>Read More →</a>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "60px", textAlign: "center", padding: "40px", background: "#f5f5f5", borderRadius: "10px" }}>
            <h3>More Content Coming</h3>
            <p>We are regularly publishing articles and insights. Subscribe to stay updated with our latest posts!</p>
          </div>
        </div>
      </section>
  );
}
