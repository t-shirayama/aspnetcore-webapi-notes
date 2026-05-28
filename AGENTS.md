# Repository Guidelines

## Project Structure

- `docs/` contains concise reference notes for later review. Use numbered chapter folders and numbered Markdown files.
- `src/` contains the React viewer that loads Markdown from `docs/`.
- `public/` contains static assets such as the favicon.
- `.github/workflows/pages.yml` builds and deploys the site to GitHub Pages.

## Documentation Rules

- Keep each note small enough to revisit independently while implementing.
- Put reference links in the chapter's final `参考サイト` note.
- Prefer Microsoft Learn and official ASP.NET Core documentation for references.
- Use backticks for API names, commands, HTTP methods, headers, and code identifiers.
- Add Mermaid diagrams when they make the note easier to understand, especially for request flows, responsibility boundaries, status-code decisions, authentication and authorization, DI, middleware, EF Core, OpenAPI, testing, and security topics.
- Prefer `flowchart` Mermaid diagrams for explanatory notes. Keep diagrams focused, and pair them with short surrounding prose so the diagram supports the text instead of replacing it.

## Commands

- `npm ci` installs dependencies.
- `npm run dev` starts the local Vite server.
- `npm run build` verifies TypeScript and production output.
- `npm run preview` serves the production build locally.
