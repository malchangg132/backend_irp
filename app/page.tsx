export default function BackendHomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h1>🚀 Backend API - IndoApril</h1>
      <p>Server backend untuk aplikasi kasir/produk sudah berjalan dengan normal.</p>
      
      <h2>Daftar Endpoint API yang Tersedia:</h2>
      <ul>
        <li>
          <code>GET /api/products</code> — Mengambil semua data produk
        </li>
        <li>
          <code>POST /api/products</code> — Menambah produk baru
        </li>
        <li>
          <code>GET /api/products/[id]</code> — Mengambil detail produk berdasarkan ID
        </li>
        <li>
          <code>PUT /api/products/[id]</code> — Mengubah data produk berdasarkan ID
        </li>
        <li>
          <code>DELETE /api/products/[id]</code> — Menghapus produk berdasarkan ID
        </li>
      </ul>

      <p style={{ marginTop: "30px", color: "#666" }}>
        Silakan arahkan bagian Frontend untuk melakukan <code>fetch()</code> ke endpoint di atas.
      </p>
    </main>
  );
}