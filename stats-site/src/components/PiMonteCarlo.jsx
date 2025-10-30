import { useState } from "react";

function randomPoint() {
  const x = Math.random();
  const y = Math.random();
  const inside = x * x + y * y <= 1;
  return { x, y, inside };
}

export default function PiMonteCarlo() {
  const [points, setPoints] = useState([]);
  const [nInside, setNInside] = useState(0);

  const addPoints = (k = 500) => {
    const newPts = [];
    let inside = 0;
    for (let i = 0; i < k; i++) {
      const p = randomPoint();
      newPts.push(p);
      if (p.inside) inside++;
    }
    setPoints((prev) => [...prev, ...newPts].slice(-2000)); // keep last 2000 so ui doesn't die
    setNInside((prev) => prev + inside);
  };

  const total = points.length;
  const piEst = total > 0 ? (4 * nInside) / total : 0;

  return (
    <div className="card">
      <h2>monte carlo: estimate π</h2>
      <p style={{ marginTop: 0 }}>
        throw random points in the unit square. count fraction inside quarter
        circle. π ≈ 4 × (inside / total).
      </p>
      <div className="pi-grid">
        <div>
          <div className="pi-canvas">
            {points.map((p, i) => (
              <div
                key={i}
                className={p.inside ? "dot in" : "dot out"}
                style={{
                  left: `${p.x * 100}%`,
                  top: `${p.y * 100}%`,
                }}
              />
            ))}
            {/* quarter circle visual */}
            <div className="quarter" />
          </div>
        </div>
        <div>
          <p>
            total points: <strong>{total}</strong>
          </p>
          <p>
            inside circle: <strong>{nInside}</strong>
          </p>
          <p>
            π estimate: <strong>{piEst.toFixed(5)}</strong>
          </p>
          <button onClick={() => addPoints(200)} className="btn">
            throw 200 points
          </button>
          <button onClick={() => addPoints(2000)} className="btn secondary">
            throw 2,000 points
          </button>
        </div>
      </div>
      <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
        note: estimate converges slowly. variance ∝ 1/n.
      </p>
    </div>
  );
}
