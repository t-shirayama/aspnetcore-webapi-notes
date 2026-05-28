# Repository Guidelines

## Project Structure

- `docs/` contains the learning notes. Use numbered chapter folders and numbered Markdown files.
- `src/` contains the React viewer that loads Markdown from `docs/`.
- `public/` contains static assets such as the favicon.
- `.github/workflows/pages.yml` builds and deploys the site to GitHub Pages.

## Documentation Rules

- Keep each note small enough to reread independently.
- Put reference links in the chapter's final `参考サイト` note.
- Prefer Microsoft Learn and official ASP.NET Core documentation for references.
- Use backticks for API names, commands, HTTP methods, headers, and code identifiers.

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Vite server.
- `npm run build` verifies TypeScript and production output.
- `npm run preview` serves the production build locally.
