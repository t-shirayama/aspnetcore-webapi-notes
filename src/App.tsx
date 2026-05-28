import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Chapter, chapters, getChapter } from "./content";
import { chapterHref, homeHref, parseRoute } from "./router";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return useMemo(() => parseRoute(hash), [hash]);
}

function resetScrollImmediately() {
  window.scrollTo(0, 0);
}

function navigateHash(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  ) {
    return;
  }

  event.preventDefault();
  resetScrollImmediately();

  if (window.location.hash !== href) {
    window.location.hash = href;
  }
}

function Header() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href={homeHref()}
        aria-label="ASP.NET Core Web API Notes home"
        onClick={(event) => navigateHash(event, homeHref())}
      >
        <span className="brand-mark">API</span>
        <span>
          <strong>ASP.NET Core Web API Notes</strong>
          <small>HTTP APIs with .NET learning notes</small>
        </span>
      </a>
    </header>
  );
}

function HomePage() {
  const totalNotes = chapters.reduce((sum, chapter) => sum + chapter.notes.length, 0);

  return (
    <main className="home">
      <section className="home-intro">
        <p className="eyebrow">Learning notes</p>
        <h1>ASP.NET Core Web API の学習メモ</h1>
        <p>
          HTTP、ルーティング、DI、認証、データアクセス、テストまで、章ごとに読み返せるノートです。
        </p>
        <div className="stats" aria-label="content summary">
          <span>{chapters.length} chapters</span>
          <span>{totalNotes} notes</span>
        </div>
      </section>

      <section className="chapter-grid" aria-label="chapters">
        {chapters.map((chapter) => (
          <a
            className="chapter-card"
            href={chapterHref(chapter.id)}
            key={chapter.id}
            onClick={(event) => navigateHash(event, chapterHref(chapter.id))}
          >
            <span className="chapter-number">{String(chapter.order).padStart(2, "0")}</span>
            <h2>{chapter.title}</h2>
            <p>{chapter.notes.length} notes</p>
          </a>
        ))}
      </section>
    </main>
  );
}

function ChapterNav({ currentChapter }: { currentChapter: Chapter }) {
  return (
    <aside className="chapter-nav" aria-label="chapter navigation">
      <a className="back-link" href={homeHref()} onClick={(event) => navigateHash(event, homeHref())}>
        Home
      </a>
      <nav>
        {chapters.map((chapter) => (
          <a
            aria-current={chapter.id === currentChapter.id ? "page" : undefined}
            href={chapterHref(chapter.id)}
            key={chapter.id}
            onClick={(event) => navigateHash(event, chapterHref(chapter.id))}
          >
            <span>{String(chapter.order).padStart(2, "0")}</span>
            {chapter.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function ChapterPage({ chapter }: { chapter: Chapter }) {
  return (
    <main className="chapter-layout">
      <ChapterNav currentChapter={chapter} />
      <section className="note-column">
        <div className="chapter-title">
          <p className="eyebrow">Chapter {String(chapter.order).padStart(2, "0")}</p>
          <h1>{chapter.title}</h1>
          <p>{chapter.folderName}</p>
        </div>

        {chapter.notes.map((note) => (
          <article className="note-card" id={note.id} key={note.id}>
            <header className="note-header">
              <span>{String(note.order).padStart(2, "0")}</span>
              <h2>{note.title}</h2>
            </header>
            <div className="markdown-body">
              <ReactMarkdown
                rehypePlugins={[[rehypeHighlight, { detect: false, ignoreMissing: true }]]}
                remarkPlugins={[remarkGfm]}
              >
                {note.markdown}
              </ReactMarkdown>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="home">
      <section className="home-intro">
        <p className="eyebrow">Not found</p>
        <h1>章が見つかりませんでした</h1>
        <p>URL を確認するか、ホームから章を選び直してください。</p>
        <a className="primary-link" href={homeHref()} onClick={(event) => navigateHash(event, homeHref())}>
          Home
        </a>
      </section>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();
  const routeKey = route.name === "chapter" ? `chapter:${route.chapterId}` : "home";

  useLayoutEffect(() => {
    resetScrollImmediately();
  }, [routeKey]);

  if (route.name === "chapter") {
    const chapter = getChapter(route.chapterId);
    return (
      <>
        <Header />
        {chapter ? <ChapterPage chapter={chapter} /> : <NotFoundPage />}
      </>
    );
  }

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}
