# Implementation Plan

- [ ] 1. Initialize Astro project and configure content collections
  - Create new Astro project with `npm create astro@latest`
  - Configure `astro.config.mjs` for static output and content directory
  - Set up content collection schema in `src/content/config.ts` with Zod validation for blog posts
  - Create `content/blog/` directory structure for markdown files
  - _Requirements: 1.1, 1.3, 1.4, 2.1_

- [ ] 2. Create base layout and styling system
  - Implement `src/layouts/Layout.astro` with HTML structure, meta tags, and viewport configuration
  - Create global CSS file with CSS custom properties for theming (colors, fonts, spacing)
  - Add responsive design utilities and mobile-first breakpoints
  - Configure syntax highlighting theme for code blocks
  - _Requirements: 2.4, 6.4_

- [ ] 3. Build homepage with blog post listing
  - Create `src/pages/index.astro` that fetches all blog posts using content collections API
  - Implement post sorting by date (newest first)
  - Build post card components displaying title, date, description, and tags
  - Add links to individual blog posts
  - Style the homepage with responsive grid layout
  - _Requirements: 2.2, 6.1, 6.2, 6.3_

- [ ] 4. Implement dynamic blog post pages
  - Create `src/pages/blog/[...slug].astro` for dynamic routing
  - Implement `getStaticPaths()` to generate routes for all blog posts
  - Render markdown content with proper formatting
  - Display post metadata (title, date, tags)
  - Add navigation link back to homepage
  - Style individual post pages with readable typography
  - _Requirements: 2.3, 2.4, 6.3_

- [ ] 5. Create sample blog posts for testing
  - Write 2-3 sample markdown files in `content/blog/` with proper frontmatter
  - Include various markdown elements (headings, lists, links, code blocks, images)
  - Add sample images to `content/blog/assets/images/` if needed
  - Verify posts appear correctly on homepage and individual pages
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 6. Set up Docker configuration
  - Create multi-stage Dockerfile with Node.js builder stage and Nginx production stage
  - Configure builder stage to install dependencies and run Astro build
  - Configure production stage to copy built files to Nginx html directory
  - Set up port exposure (80) and Nginx startup command
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ] 7. Create Docker Compose configuration
  - Write `docker-compose.yml` with blog service definition
  - Configure port mapping (3000:80 for local testing)
  - Add restart policy (unless-stopped)
  - Set up build context and dockerfile reference
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 8. Add Coolify deployment documentation
  - Create `DEPLOYMENT.md` with step-by-step Coolify setup instructions
  - Document Git repository connection process
  - Explain environment variable configuration options
  - Include troubleshooting tips for common deployment issues
  - Add notes about automatic deployment on Git push
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 9. Create project documentation
  - Write comprehensive `README.md` with project overview and features
  - Document local development setup (`npm install`, `npm run dev`)
  - Add instructions for building and testing Docker image locally
  - Include content creation guide for writing blog posts in Obsidian
  - Document frontmatter schema and markdown support
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 10. Add .gitignore and configuration files
  - Create `.gitignore` to exclude node_modules, dist, and build artifacts
  - Add `.dockerignore` to optimize Docker build context
  - Create `package.json` with necessary scripts (dev, build, preview)
  - Configure TypeScript settings if needed for type checking
  - _Requirements: 2.1, 3.1_
