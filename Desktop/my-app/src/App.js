import { useEffect, useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/photos")
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  const filtered = photos.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Photos</h1>

      <input
        placeholder="Search chey mama..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ccc" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {filtered.map((p, i) => (
          <div key={i} onClick={() => setSelected(p)} style={{ cursor: "pointer", border: "1px solid #ddd", padding: "10px", borderRadius: "10px" }}>
            <img src={p.url} alt={p.title} style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
            <p>{p.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={selected.url} alt={selected.title} style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: "10px" }} />
        </div>
      )}
    </div>
  );
}

export default App;