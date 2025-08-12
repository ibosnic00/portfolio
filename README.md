# Ivan Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`

2. **Push your code** to trigger the GitHub Actions workflow:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Check the Actions tab** to see the deployment progress

### Cloudflare Setup

1. **Add your domain** to Cloudflare:
   - Add `afterfive.hr` as a domain
   - Update nameservers if needed

2. **Create DNS records**:
   - Type: `CNAME`
   - Name: `www`
   - Target: `ibosnic00.github.io`
   - Proxy status: ✅ Proxied (orange cloud)

3. **Configure Page Rules** (optional):
   - `afterfive.hr/*` → Forwarding URL (301) → `https://www.afterfive.hr/$1`

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## 📁 Project Structure

- `app/` - Next.js app router pages
- `components/` - Reusable UI components
- `lib/` - Utility functions
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions deployment

## 🎨 Features

- Responsive design with Tailwind CSS
- Dark/light theme support
- Scroll-based animations
- Dynamic gradient background
- Interactive skill cards
- Project showcase
- Contact form

## 🔧 Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- Framer Motion (animations)
