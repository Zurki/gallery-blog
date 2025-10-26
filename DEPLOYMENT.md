# Deployment Guide

This guide explains how to deploy your Obsidian-Astro blog using Coolify.

## Prerequisites

- A server with Coolify installed
- Git repository containing your blog code
- Domain name (optional, but recommended)

## Deployment Steps

### 1. Push Your Code to Git

Ensure your blog is in a Git repository (GitHub, GitLab, Gitea, etc.):

```bash
git add .
git commit -m "Initial blog setup"
git push origin main
```

### 2. Connect Repository to Coolify

1. Log in to your Coolify dashboard
2. Click "New Resource" → "Application"
3. Select "Public Repository" or connect your Git provider
4. Enter your repository URL
5. Select the branch to deploy (usually `main`)

### 3. Configure Build Settings

Coolify will automatically detect the `docker-compose.yml` file. If not:

1. Set Build Pack to "Docker Compose"
2. Ensure the Dockerfile path is set to `./Dockerfile`
3. Set the compose file path to `./docker-compose.yml`

### 4. Configure Port Mapping

- Internal Port: `80` (Nginx serves on port 80)
- External Port: Coolify will assign automatically or use your custom domain

### 5. Environment Variables (Optional)

You can add environment variables in Coolify's UI if needed:

- `SITE_URL`: Your production domain
- Any other custom variables

### 6. Deploy

1. Click "Deploy" in Coolify
2. Monitor the build logs
3. Wait for the deployment to complete

### 7. Configure Domain (Optional)

1. In Coolify, go to your application settings
2. Add your domain name
3. Enable automatic SSL/TLS (Let's Encrypt)
4. Update DNS records to point to your Coolify server

## Automatic Deployments

Coolify can automatically redeploy when you push to your Git repository:

1. Go to application settings in Coolify
2. Enable "Automatic Deployment"
3. Configure webhook (if using private repository)

Now every `git push` will trigger a new deployment!

## Updating Content

### Adding New Blog Posts

1. Create a new markdown file in `content/blog/`
2. Add frontmatter with title, date, description, and tags
3. Write your content in markdown
4. Commit and push:

```bash
git add content/blog/new-post.md
git commit -m "Add new blog post"
git push
```

Coolify will automatically rebuild and deploy your updated blog.

### Editing Existing Posts

1. Edit the markdown file in `content/blog/`
2. Commit and push changes
3. Coolify will redeploy automatically

## Troubleshooting

### Build Fails

- Check Coolify build logs for errors
- Ensure all dependencies are in `package.json`
- Verify Docker and docker-compose syntax

### Site Not Accessible

- Check port mappings in Coolify
- Verify firewall rules on your server
- Ensure Nginx is running in the container

### Content Not Updating

- Clear browser cache
- Check if the build completed successfully
- Verify the markdown file has correct frontmatter

### Docker Build Issues

Test locally first:

```bash
# Build the Docker image
docker build -t my-blog .

# Run the container
docker run -p 3000:80 my-blog

# Visit http://localhost:3000
```

## Performance Optimization

### Enable Caching

Add Nginx caching configuration by creating a custom `nginx.conf` if needed.

### Image Optimization

Astro automatically optimizes images during build. Use appropriate image formats and sizes.

### CDN Integration

Consider using a CDN like Cloudflare for:
- Faster global content delivery
- DDoS protection
- Additional caching layer

## Backup Strategy

### Content Backup

Your content is already backed up in Git! Just ensure you:
- Push regularly
- Use a remote repository (GitHub, GitLab, etc.)
- Consider multiple remotes for redundancy

### Database Backup

Not applicable—this is a static site with no database.

## Monitoring

### Coolify Monitoring

Coolify provides:
- Container status
- Resource usage (CPU, memory)
- Deployment history
- Build logs

### External Monitoring

Consider adding:
- Uptime monitoring (UptimeRobot, Pingdom)
- Analytics (Plausible, Google Analytics)
- Error tracking (Sentry)

## Security Considerations

### HTTPS

Always enable HTTPS through Coolify's Let's Encrypt integration.

### Updates

Keep dependencies updated:

```bash
npm update
npm audit fix
```

### Container Security

- Use official base images (node:20-alpine, nginx:alpine)
- Regularly rebuild to get security patches
- Don't expose unnecessary ports

## Cost Optimization

### Server Resources

This blog is lightweight and can run on:
- 1 CPU core
- 512MB RAM
- 10GB storage

### Coolify Efficiency

Coolify manages multiple applications on one server, reducing costs compared to separate hosting for each project.

## Support

- **Astro Docs**: https://docs.astro.build/
- **Coolify Docs**: https://coolify.io/docs
- **Docker Docs**: https://docs.docker.com/

## Next Steps

- Customize the design in `src/styles/global.css`
- Add more pages (About, Contact, etc.)
- Integrate RSS feed (already included)
- Add analytics
- Set up a custom domain
