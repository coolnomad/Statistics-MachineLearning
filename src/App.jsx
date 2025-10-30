import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import LessonPage from "./components/LessonPage.jsx";
import PiMonteCarlo from "./components/PiMonteCarlo.jsx";
import "./index.css";

const runs = [
  {
    id: "mutual-exclusivity-wext",
    title: "weighted exact test for mutually exclusive mutations (wext)",
    tags: ["omics", "discrete", "exact test"],
  },
  {
    id: "zero-inflated-gamma",
    title: "zero-inflated gamma for fantasy/hockey scores",
    tags: ["bayes", "mixture"],
  },
  {
    id: "copy-number-vs-crispr",
    title: "cn ↔ crispr dependency modeling",
    tags: ["high-dim", "nonlinear", "depmap"],
  },
];

function Topbar({ theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div>
        <h1>statistics &amp; ml notebook</h1>
        <p className="tagline">simulation first. proofs available.</p>
      </div>
      <button className="theme-btn" onClick={onToggleTheme}>
        {theme === "dark" ? "light" : "dark"}
      </button>
    </header>
  );
}

function Sidebar() {
  const { pathname } = useLocation();
  const isActive = (p) => (pathname === p ? "active" : "");
  return (
    <aside className="sidebar">
      <div className="sb-section">
        <div className="sb-title">curriculum</div>
        <Link to="/" className={`sb-link ${isActive("/")}`}>
          overview
        </Link>
        <Link
          to="/probability"
          className={`sb-link ${isActive("/probability")}`}
        >
          probability
        </Link>
                <Link
          to="/random_variable"
          className={`sb-link ${isActive("/random_variable")}`}
        >
          random variables
        </Link>
        <Link to="/inference" className={`sb-link ${isActive("/inference")}`}>
          inference
        </Link>
      </div>
      <div className="sb-section">
        <div className="sb-title">playbook</div>
        <Link to="/playbook" className={`sb-link ${isActive("/playbook")}`}>
          modeling cases
        </Link>
      </div>
    </aside>
  );
}

function Home() {
  return (
    <>
      <section className="card">
        <h2>modules</h2>
        <ul>
          <li>
            <Link to="/probability">Probability Foundations</Link>
          </li>
          <li>
            <Link to="/random_variable">Behavior of a Random Variable</Link>
          </li>
          <li>
            <Link to="/inference">Inference &amp; Estimation</Link>
          </li>
          <li>regression &amp; glm</li>
          <li>bayesian modeling</li>
          <li>high-dimensional / omics examples</li>
        </ul>
      </section>

      <section className="card">
        <h2>modeling playbook</h2>
        <p>stored runs of “how do i model x?”</p>
        <div>
          {runs.map((r) => (
            <div key={r.id} className="run">
              <div style={{ fontWeight: 500 }}>{r.title}</div>
              <div>
                {r.tags.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "0.75rem" }}>
          <Link to="/playbook">view all →</Link>
        </p>
      </section>
    </>
  );
}

function Playbook() {
  return (
    <section className="card">
      <h2>modeling playbook</h2>
      <p>captured “how to model x?” cases.</p>
      <ul>
        <li>wext for mutual exclusivity</li>
        <li>zero-inflated gamma for fantasy scores</li>
        <li>cn ↔ crispr dependency modeling</li>
      </ul>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // apply to <html>
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <>
      <Topbar theme={theme} onToggleTheme={toggleTheme} />
      <div className="shell">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/probability"
              element={
              <>
              <LessonPage file="/lessons/probability.md" />
              <PiMonteCarlo />
              </>
            }
            />
            <Route
              path="/random_variable"
              element={<LessonPage file="/lessons/random_variable.md" />}
            />

            <Route
              path="/inference"
              element={<LessonPage file="/lessons/inference.md" />}
            />
            <Route path="/playbook" element={<Playbook />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
