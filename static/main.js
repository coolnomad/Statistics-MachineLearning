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

function renderRuns() {
  const container = document.getElementById("runs");
  if (!container) return;
  runs.forEach((r) => {
    const div = document.createElement("div");
    div.className = "run";
    div.style.marginBottom = "0.75rem";

    const title = document.createElement("div");
    title.textContent = r.title;
    title.style.fontWeight = "500";
    div.appendChild(title);

    const tagWrap = document.createElement("div");
    r.tags.forEach((t) => {
      const span = document.createElement("span");
      span.className = "badge";
      span.textContent = t;
      tagWrap.appendChild(span);
    });
    div.appendChild(tagWrap);

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderRuns);
