import { useState } from "react";

const photos = [
  { name: "Mountain", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" },
  { name: "Lake", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
  { name: "Dog", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600" },
  { name: "Nature", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600" },
  { name: "Forest", img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600" },
  { name: "Coffee", img: "https://images.unsplash.com/photo-1509042239860-f550ce482bb3?w=600" },
];

function App() {
  const [search, setSearch] = useState("");
  const filtered = photos.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Photos</h1>
      <input
        placeholder="Search photos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 10, width: "100%", maxWidth: 300, marginBottom: 20 }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
        {filtered.map((p) => (
          <div key={p.name} style={{ width: 160 }}>
            <img src={p.img} alt={p.name} style={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 10 }} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
