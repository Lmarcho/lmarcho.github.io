# Magento Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features particle effects, smooth animations, and a professional design showcasing Magento 2 development projects.

## 🚀 Features

- **Modern Tech Stack**: React 19, Tailwind CSS v4, Vite, Framer Motion
- **Particle Effects**: Interactive particle backgrounds using @tsparticles
- **Smooth Animations**: Scroll-based animations and transitions
- **Fully Responsive**: Mobile-first design with breakpoints at 425px, 768px, and 1200px
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Fast load times with code splitting and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📋 Sections

1. **Hero** - Eye-catching introduction with particle effects
2. **About** - Professional bio and profile information
3. **Skills** - Technical skills categorized by domain with progress bars
4. **Projects** - Grid showcase of 9 Magento projects with hover effects
5. **Experience** - Timeline of professional work history
6. **Contact** - Contact information with icons

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment to GitHub Pages

### Automated Deployment

The site is configured for GitHub Pages deployment. To deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production build

3. Deploy to GitHub Pages (the dist folder should be deployed to the root or gh-pages branch)

### Manual Deployment

If you want to manually deploy:

1. Build the project: `npm run build`
2. Copy contents of `dist/` to your GitHub Pages branch
3. Commit and push

## 📝 Customization

### Update Portfolio Content

Edit `/src/data/portfolioData.js` to customize:
- Personal information
- Skills and expertise
- Project details
- Work experience
- Contact information
- Social media links

### Update Colors

Modify the theme in `/src/index.css`:
```css
@theme {
  --color-magento-orange: #f26522;
  --color-magento-gray: #29323c;
  /* Add more custom colors */
}
```

### Update Images

Place your images in the `/img` folder and update the paths in `portfolioData.js`

## 🏗️ Project Structure

```
lmarcho.github.io/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ParticlesBackground.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── img/ (images directory)
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Technologies Used

- **React** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **@tsparticles** - Particle effects
- **React Icons** - Icon library

## 📄 License

Copyright © 2025 Lakshitha. All rights reserved.

## 🤝 Contact

- Email: lmathngadeera@gmail.com
- LinkedIn: [linkedin.com/in/lmarcho](https://www.linkedin.com/in/lmarcho/)
- Website: [lmarcho.com](https://lmarcho.com)
