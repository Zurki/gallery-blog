# Obsidian-Astro Blog

A modern static blog system that combines the power of Obsidian for content creation with Astro for static site generation, containerized with Docker and deployable via Coolify.

## Features

- ✅ Write blog posts in Obsidian using Markdown
- ✅ Static site generation with Astro
- ✅ Docker containerization for consistent deployment
- ✅ Docker Compose for easy orchestration
- ✅ Coolify-ready for simple server deployment
- ✅ Automatic syntax highlighting for code blocks
- ✅ Tag support for post organization
- ✅ Draft post support
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap and RSS feed included
- ✅ Responsive design for mobile and desktop

## Project Structure

```text
.
├── content/              # Obsidian vault - write your blog posts here!
│   └── blog/            # Blog post markdown files
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global styles
│   └── content.config.ts # Content collection schema
├── public/              # Static assets
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose configuration
├── DEPLOYMENT.md        # Detailed deployment guide
└── astro.config.mjs     # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker and Docker Compose (for containerized deployment)
- Obsidian (optional, but recommended for content creation)

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:4321`

The dev server includes hot reload, so changes to your content or code will update automatically.

### Creating Blog Posts

#### Using Obsidian

1. Open Obsidian and create a vault pointing to the `content/blog/` directory
2. Create a new markdown file with frontmatter:

```markdown
---
title: "Your Post Title"
date: 2025-10-26
description: "A brief description of your post"
tags: ["tag1", "tag2"]
draft: false
---

# Your Content Here

Write your blog post using standard markdown...
```

#### Frontmatter Schema

All blog posts require the following frontmatter:

- `title` (string, required): The post title
- `date` (date, required): Publication date in YYYY-MM-DD format
- `description` (string, required): Brief summary for post listings
- `tags` (array, optional): Array of tag strings
- `draft` (boolean, optional): Set to `true` to hide from production

#### Supported Markdown Features

- Headings (H1-H6)
- Bold, italic, strikethrough
- Lists (ordered and unordered)
- Links and images
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- Horizontal rules

### Building for Production

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The built site will be in the `dist/` directory.

## Docker Deployment

### Build and Run Locally

Build the Docker image:

```bash
docker build -t obsidian-astro-blog .
```

Run the container:

```bash
docker run -p 3000:80 obsidian-astro-blog
```

Visit `http://localhost:3000` to see your blog.

### Using Docker Compose

Start the blog:

```bash
docker-compose up -d
```

Stop the blog:

```bash
docker-compose down
```

The blog will be available at `http://localhost:3000`.

## Coolify Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

Quick steps:

1. Push your code to a Git repository
2. Connect the repository to Coolify
3. Coolify will auto-detect the Docker Compose configuration
4. Deploy and access your blog!

Coolify supports automatic deployments on Git push, making updates seamless.

## Customization

### Site Configuration

Edit `src/consts.ts` to update site metadata:

```typescript
export const SITE_TITLE = 'Your Blog Title';
export const SITE_DESCRIPTION = 'Your blog description';
```

Update `astro.config.mjs` to set your production URL:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### Styling

Global styles are in `src/styles/global.css`. The blog uses CSS custom properties for easy theming:

```css
:root {
  --accent: 136, 58, 234;
  --accent-light: 224, 204, 250;
  --accent-dark: 49, 10, 101;
  /* ... */
}
```

### Adding Pages

Create new `.astro` files in `src/pages/` to add pages:

- `src/pages/about.astro` → `/about`
- `src/pages/contact.astro` → `/contact`

## Commands Reference

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Install dependencies                        |
| `npm run dev`          | Start dev server at `localhost:4321`        |
| `npm run build`        | Build production site to `./dist/`          |
| `npm run preview`      | Preview production build locally            |
| `docker-compose up -d` | Start blog in Docker (background)           |
| `docker-compose down`  | Stop Docker containers                      |
| `docker build -t blog .` | Build Docker image                        |

## Troubleshooting

### Content Not Showing

- Ensure markdown files are in `content/blog/`
- Check frontmatter is valid YAML
- Verify `draft` is not set to `true`
- Restart dev server

### Build Errors

- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors with `npm run astro check`
- Verify all frontmatter matches the schema

### Docker Issues

- Ensure Docker is running
- Check port 3000 is not already in use
- Review Docker logs: `docker-compose logs`

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Obsidian Documentation](https://help.obsidian.md/)
- [Docker Documentation](https://docs.docker.com/)
- [Coolify Documentation](https://coolify.io/docs)

## License

See [LICENSE](./LICENSE) file for details.
