import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function LessonPage({ file }) {
  const [content, setContent] = useState("loading...");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent(`# error loading ${file}`));
  }, [file]);

  return (
    <section className="card">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </section>
  );
}

export default LessonPage;
