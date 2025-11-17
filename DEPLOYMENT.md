# Deployment Guide

## 🚀 Deploying Your Portfolio to GitHub Pages

Your portfolio has been rebuilt with modern React and is ready for deployment! Here are your deployment options:

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

A GitHub Actions workflow has been created at `.github/workflows/deploy.yml` that will automatically build and deploy your site when you merge to the main branch.

**Steps:**

1. **Merge your feature branch to main:**
   ```bash
   # Create a pull request on GitHub or merge locally
   git checkout main
   git merge claude/magento-portfolio-rebuild-01UDDLQJKBKXr7R5yCL8BDWk
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on the next push to main

3. **That's it!** Your site will be live at `https://lmarcho.com` (or `https://lmarcho.github.io`)

### Option 2: Manual Deployment

If you prefer to deploy manually:

**Steps:**

1. **Build the project:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your production-ready site.

2. **Deploy the dist folder:**

   **Method A: Using gh-pages branch**
   ```bash
   # Install gh-pages if needed
   npm install -g gh-pages

   # Deploy dist folder
   gh-pages -d dist
   ```

   **Method B: Copy to root and commit**
   ```bash
   # Build first
   npm run build

   # Copy dist contents to root (be careful!)
   cp -r dist/* .
   git add .
   git commit -m "Deploy built site"
   git push origin main
   ```

### Option 3: Deploy to a Different Branch

If you want to keep your source code on `main` and deploy on `gh-pages`:

1. **Update vite.config.js base path if needed:**
   ```javascript
   export default defineConfig({
     base: '/', // or '/lmarcho.github.io/' if deploying to username.github.io repo
     // ... rest of config
   })
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   # Then use gh-pages or manual method above
   ```

## 🔧 Important Deployment Notes

### Custom Domain (lmarcho.com)

If you're using a custom domain:

1. Keep your `CNAME` file in the root directory (if you have one)
2. Or add it to the `public` folder in your React app
3. Configure DNS settings in your domain registrar:
   - Add an A record pointing to GitHub's IPs
   - Or a CNAME record pointing to `lmarcho.github.io`

### After Deployment

1. **Test your site:**
   - Check all sections load correctly
   - Verify particle effects work
   - Test mobile responsiveness
   - Check all project links

2. **Monitor GitHub Actions:**
   - Go to the "Actions" tab in your repository
   - Watch the deployment workflow run
   - Check for any errors

## 📝 Making Changes After Deployment

To update your portfolio:

1. **Edit the content:**
   - Update `src/data/portfolioData.js` for content changes
   - Modify components in `src/components/` for design changes

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to preview

3. **Build and deploy:**
   ```bash
   npm run build
   # Then push to main or deploy manually
   ```

## 🎨 Customization Tips

### Update Your Projects
Edit `/src/data/portfolioData.js`:
```javascript
projects: [
  {
    id: 10,
    title: "New Project",
    description: "Description here",
    technologies: ["Magento 2", "PHP", "React"],
    image: "/img/new-project.webp",
    url: "https://example.com",
    featured: true,
  },
]
```

### Change Colors
Modify `/src/index.css`:
```css
@theme {
  --color-magento-orange: #your-color;
  --color-magento-gray: #your-color;
}
```

### Add New Images
1. Place images in `/img` folder
2. Use WebP format for best performance
3. Update paths in `portfolioData.js`

## 🐛 Troubleshooting

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Review error messages in the terminal

**Site not loading:**
- Check GitHub Pages is enabled in repository settings
- Verify the base path in `vite.config.js`
- Ensure the correct branch is selected for deployment

**Images not showing:**
- Verify image paths are correct (use `/img/...` not `./img/...`)
- Check that images exist in the `img` folder
- Ensure images are included in the git repository

## 📦 Backup

Your old site files have been moved to the `old-site` directory:
- `old-site/app.js`
- `old-site/style.css`
- `old-site/particles.json`

Keep these as a backup or remove them once you're happy with the new site.

## 🎉 You're All Set!

Your modern portfolio is ready to impress potential clients and employers. Good luck with your Magento development career!
