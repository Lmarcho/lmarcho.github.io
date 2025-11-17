# CLAUDE.md - AI Assistant Guide

## Project Overview

This is a personal portfolio website for Lakshitha Marchorage (LMarcho), a Senior Magento Full Stack Developer with 5+ years of experience. The website showcases professional eCommerce projects and provides contact information for potential clients and employers.

**Live Site:** https://lmarcho.com
**Repository Type:** GitHub Pages static site
**License:** MIT License (Copyright 2020 Web Cifar)

## Technology Stack

### Core Technologies
- **HTML5** - Semantic markup with accessibility features (ARIA labels)
- **CSS3** - Custom styling with CSS variables, animations, and responsive design
- **Vanilla JavaScript** - No frameworks, pure ES6+ JavaScript
- **Particles.js v2.0.0** - Animated particle background effects (CDN)
- **Google Fonts** - Montserrat font family (300, 400, 700 weights)

### External Dependencies
- Particles.js: `https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js`
- Icons: Icons8 (via CDN for contact and social icons)

### Hosting & Deployment
- **GitHub Pages** - Automatic deployment from main branch
- **Custom Domain:** lmarcho.com (configured via CNAME file)
- **No Build Process** - Direct HTML/CSS/JS deployment

## Project Structure

```
lmarcho.github.io/
├── index.html              # Main HTML file (single-page application)
├── style.css               # All styles and media queries
├── app.js                  # JavaScript functionality
├── particles.json          # Particles.js configuration
├── Lakshitha_Resume.pdf    # Downloadable resume
├── CNAME                   # Custom domain configuration (lmarcho.com)
├── LICENSE                 # MIT License
├── robots.txt              # SEO: Search engine directives
├── sitemap.xml             # SEO: Site structure for search engines
└── img/                    # Image assets
    ├── cover.webp          # Hero background image
    ├── file.webp           # Profile photo
    ├── nomin.webp          # Project screenshots
    ├── j20.webp
    ├── arienti.webp
    ├── chihuly.webp
    ├── bonz.webp
    ├── airport.webp
    ├── buyabans.webp
    ├── kiddoz.webp
    ├── kdgcars.webp
    ├── sun.png             # Theme toggle icon (unused)
    ├── moon.png            # Theme toggle icon (unused)
    └── Oldimages/          # Legacy PNG versions (before WebP conversion)
```

## Website Structure

### Single-Page Application Sections

1. **Header/Navigation** (`#header`)
   - Fixed header with brand logo "LMarcho"
   - Hamburger menu for mobile devices
   - Navigation links: Home, Projects, About, Contact
   - Dynamic background color on scroll (transparent → #29323c after 250px)

2. **Hero Section** (`#hero`)
   - Full-screen background image with particle effects
   - Animated text reveal: "Hi, I'm Lakshitha, Magento Full Stack Developer"
   - CTA button linking to portfolio section
   - Particle background: `#particles-js-cover`

3. **Projects Section** (`#projects`)
   - Showcases 9 major eCommerce projects
   - Each project card includes:
     - Project name and description
     - Technologies used
     - Live site link (CTA button)
     - Project screenshot
   - Alternating layout (row/row-reverse for visual variety)
   - Particle background: `#particles-js-projects`

4. **About Section** (`#about`)
   - Profile photo with decorative border
   - Brief bio: "Senior Software Engineer with over 5 years of experience"
   - Resume download button
   - Particle background: `#particles-js-about`

5. **Contact Section** (`#contact`)
   - Three contact methods:
     - Phone: +94 71 969 0981, +94 76 125 1679
     - Email: lmathngadeera@gmail.com
     - Address: Moratuwa, Colombo, Sri Lanka
   - Particle background: `#particles-js-consult`

6. **Footer** (`#footer`)
   - Brand name and tagline: "Your Complete Web Solution"
   - Social media links: LinkedIn, Skype, Facebook, Instagram
   - Copyright notice: "Copyright © 2021 Lmarcho. All rights reserved"

## Key Features & Functionality

### JavaScript Features (app.js)

1. **Mobile Navigation**
   - Hamburger menu toggle functionality
   - Closes menu when navigation item is clicked
   - Smooth animations using CSS transitions

2. **Scroll Effects**
   - Header background changes from transparent to `#29323c` after scrolling 250px
   - Provides better contrast and visibility

3. **Particles.js Integration**
   - Four particle instances loaded on different sections:
     - `particles-js-cover` (Hero)
     - `particles-js-projects` (Projects)
     - `particles-js-about` (About)
     - `particles-js-consult` (Contact)
   - Configuration loaded from `particles.json`

4. **Dark Theme Toggle (Commented Out)**
   - Lines 27-36 in app.js contain unused dark theme code
   - CSS variables for theming exist but aren't actively used
   - Theme icons (sun.png, moon.png) exist but unused

### CSS Architecture

1. **CSS Variables (Custom Properties)**
   ```css
   --primary-color: #edf2fc
   --secondary--color: #253529
   ```
   - Note: typo in variable name (`--secondary--color` has double dash)

2. **Design System**
   - Brand color: Crimson (#DC143C)
   - Font: Montserrat (Google Fonts)
   - Base font size: 10px (for rem calculations)
   - Smooth scroll behavior enabled

3. **Animations**
   - `text_reveal` - Hero text fade-in
   - `text_reveal_box` - Animated color bar over text
   - `text_reveal_name` - Name color transition to crimson
   - `hamburger_puls` - Pulsing effect on hamburger icon

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoints:
     - Mobile: < 425px (special handling)
     - Tablet: 768px
     - Desktop: 1200px
   - Flexible layouts using flexbox
   - Full-screen mobile menu overlay

### Image Optimization

- **WebP Format:** All main images use WebP for better performance
- **Lazy Loading:** Images use `loading="lazy"` attribute
- **Explicit Dimensions:** Width and height attributes prevent layout shift
- **Old Images:** PNG versions preserved in `img/Oldimages/` folder

## Development Conventions

### Code Style

1. **HTML**
   - Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
   - ARIA labels for accessibility
   - Open Graph and Twitter Card meta tags for social sharing
   - Comments mark major sections

2. **CSS**
   - BEM-like naming convention (e.g., `.projects-header`, `.project-item`)
   - Organized by sections with clear comments
   - Media queries grouped at end of file
   - Consistent spacing and indentation

3. **JavaScript**
   - ES6+ syntax (arrow functions, const/let)
   - Event delegation for menu items
   - Clear variable naming (camelCase)
   - Commented-out code preserved for potential future use

### File Naming Conventions

- **Images:** lowercase with descriptive names (e.g., `airport.webp`, `buyabans.webp`)
- **Core files:** lowercase (e.g., `index.html`, `style.css`, `app.js`)
- **Config files:** lowercase (e.g., `robots.txt`, `sitemap.xml`)
- **Special files:** PascalCase or uppercase (e.g., `CNAME`, `LICENSE`, `Lakshitha_Resume.pdf`)

## SEO Configuration

### Implemented SEO Features

1. **Meta Tags** (index.html:8-18)
   - Title: "L Marcho"
   - Description: "Lakshitha - Magento Full Stack Developer Portfolio"
   - Author: "Lakshitha"
   - Robots: "index, follow"

2. **Open Graph Tags**
   - og:title, og:description, og:image, og:url
   - Twitter Card: summary_large_image

3. **Sitemap (sitemap.xml)**
   - Homepage: Priority 1.00
   - Sections (#projects, #about, #contact): Priority 0.80

4. **Robots.txt**
   - Allows all user agents
   - References sitemap

5. **Structured Data**
   - Semantic HTML provides implicit structure
   - Could benefit from JSON-LD schema.org markup (not currently implemented)

## Development Workflow

### Git Workflow

1. **Branch Strategy**
   - Development branch: `develop` (historical)
   - Feature branches: `claude/claude-md-*` pattern for AI assistant work
   - Main branch: Automatic GitHub Pages deployment

2. **Recent Commits** (Reference)
   ```
   b7206b6 - header background color remove
   eef6bbf - add new projects and updates
   b5682b4 - Merge pull request #1 from Lmarcho/develop
   ```

3. **Deployment Process**
   - Direct push to main branch
   - GitHub Pages automatically deploys changes
   - No build step required
   - Changes are live within minutes

### Making Changes

**To add a new project:**

1. Open `index.html`
2. Navigate to the `#projects` section (line 79)
3. Copy an existing `.project-item` div (lines 86-96 or similar)
4. Update the content:
   - Project name in `<h1>`
   - Description in `<p>` tags
   - Technologies in second `<p>`
   - Link URL in `<a href="">`
   - Image path in `<img src="">`
5. Add the project image to `/img/` directory (WebP format preferred)
6. Commit and push to main branch

**To update contact information:**

1. Edit `index.html` lines 266-288 (contact section)
2. Update footer social links (lines 299-303)

**To modify styling:**

1. Edit `style.css`
2. Respect existing CSS variable system
3. Test responsive behavior at all breakpoints
4. Consider both light theme (current) and potential dark theme

**To update resume:**

1. Replace `Lakshitha_Resume.pdf` with new version
2. Keep the same filename or update link in index.html (line 254)

## AI Assistant Guidelines

### When Working on This Repository

1. **Preserve Simplicity**
   - This is a static site with no build process
   - Don't introduce unnecessary dependencies
   - Keep the vanilla JavaScript approach unless specifically requested

2. **Maintain Performance**
   - Use WebP images for new assets
   - Keep file sizes reasonable
   - Preserve lazy loading attributes on images
   - Don't add heavy libraries without justification

3. **Respect Design Patterns**
   - Follow existing BEM-like CSS naming
   - Maintain the single-page application structure
   - Keep the crimson accent color consistent
   - Preserve responsive design patterns

4. **Testing Considerations**
   - Test at mobile (< 425px), tablet (768px), and desktop (1200px+) sizes
   - Verify hamburger menu functionality
   - Check scroll effects and animations
   - Validate all external links

5. **Content Updates**
   - When adding projects, maintain the alternating layout pattern
   - Keep project descriptions concise (2-3 short paragraphs)
   - Include all technologies used
   - Verify live site URLs are working

6. **SEO Maintenance**
   - Update sitemap.xml when adding new sections
   - Maintain semantic HTML structure
   - Keep alt text descriptive for images
   - Preserve meta tags and Open Graph data

### Common Tasks

**Add a New Project:**
```html
<div class="project-item">
    <div class="project-info">
        <h1>Project Name</h1>
        <p>Brief description of the project and your role.</p>
        <p>Technologies - List, Of, Technologies, Used</p>
        <p><a href="https://example.com/" class="cta">Project Name</a></p>
    </div>
    <div class="project-img">
        <img src="./img/project-name.webp" alt="Project Name" loading="lazy" width="400" height="300" />
    </div>
</div>
```

**Update Particle Configuration:**
Edit `particles.json` to adjust:
- Particle count: `particles.number.value`
- Movement speed: `particles.move.speed`
- Link distance: `particles.line_linked.distance`
- Interaction modes: `interactivity.modes`

**Enable Dark Theme:**
Uncomment lines 27-36 in `app.js` and add a theme toggle button to the HTML.

### Known Issues & Technical Debt

1. **CSS Variable Typo:** `--secondary--color` has double dash (intentional or typo?)
2. **Dark Theme:** Partially implemented but commented out
3. **Console Logs:** Particles.js callbacks log to console (harmless but unnecessary in production)
4. **Copyright Year:** Footer shows "2021" - should be updated or made dynamic
5. **Theme Icons:** sun.png and moon.png exist but unused
6. **No Error Handling:** JavaScript assumes DOM elements exist
7. **Old Images Folder:** Contains legacy PNG files that could be removed to save space

### Performance Considerations

- **Current Performance:** Excellent (static HTML, minimal JS, WebP images)
- **Particles.js:** Loaded via CDN (v2.0.0), consider upgrading if performance issues
- **Font Loading:** Uses Google Fonts with preconnect for faster loading
- **Critical CSS:** Inline styles for hero background (good practice)
- **Image Format:** WebP is excellent, consider AVIF for even better compression
- **No Service Worker:** Could add for offline functionality if needed

### Security Considerations

- **External Resources:** Particles.js and icons loaded from CDN
  - Particles.js: No integrity hash (consider adding SRI)
  - Icons8: Hotlinked images (consider hosting locally)
- **No User Input:** Static site with no forms = minimal attack surface
- **HTTPS:** Enforced via GitHub Pages and CNAME
- **No Sensitive Data:** All information is public-facing

### Accessibility Notes

- **ARIA Labels:** Present on navigation elements
- **Semantic HTML:** Good structure with proper heading hierarchy
- **Alt Text:** Most images have alt attributes
- **Color Contrast:** Should verify crimson on dark backgrounds meets WCAG AA
- **Keyboard Navigation:** Hamburger menu may need keyboard support improvements
- **Focus Indicators:** Could be more visible

## Deployment Checklist

Before pushing changes to main branch:

- [ ] Test all navigation links
- [ ] Verify external project links are working
- [ ] Check responsive design at all breakpoints (425px, 768px, 1200px+)
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Test hamburger menu functionality
- [ ] Verify particle effects load correctly
- [ ] Check page load speed
- [ ] Ensure all images have alt attributes
- [ ] Validate sitemap.xml if structure changed
- [ ] Test social media links in footer
- [ ] Verify resume PDF downloads correctly
- [ ] Check browser console for errors
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

## Resources & References

### External Documentation
- **Particles.js:** https://github.com/VincentGarreau/particles.js/
- **GitHub Pages:** https://docs.github.com/en/pages
- **WebP Format:** https://developers.google.com/speed/webp

### Design Resources
- **Icons8:** https://icons8.com/
- **Google Fonts:** https://fonts.google.com/specimen/Montserrat

### Tools for Development
- **Image Conversion:** Use tools like Squoosh (https://squoosh.app/) for WebP conversion
- **HTML Validator:** https://validator.w3.org/
- **CSS Validator:** https://jigsaw.w3.org/css-validator/
- **Lighthouse:** For performance and accessibility audits
- **Mobile Testing:** Chrome DevTools device emulation

## Future Enhancements (Potential)

### Low Priority
- [ ] Implement dark theme toggle functionality
- [ ] Add contact form with backend (Formspree, Netlify Forms, etc.)
- [ ] Add project filtering by technology
- [ ] Create dedicated project detail pages
- [ ] Add testimonials section
- [ ] Implement blog/articles section
- [ ] Add loading animations
- [ ] Integrate Google Analytics or privacy-friendly alternative

### Medium Priority
- [ ] Add JSON-LD structured data for better SEO
- [ ] Improve accessibility (WCAG AA compliance)
- [ ] Add service worker for offline functionality
- [ ] Optimize font loading (font-display: swap)
- [ ] Add preload hints for critical assets
- [ ] Update copyright year to be dynamic

### High Priority (If Scaling)
- [ ] Migrate to static site generator (Jekyll, 11ty, Hugo) for easier content management
- [ ] Add build process for CSS minification
- [ ] Implement JavaScript bundling and tree-shaking
- [ ] Add automated testing
- [ ] Set up CI/CD pipeline
- [ ] Consider headless CMS for project management

---

**Last Updated:** 2025-11-17
**AI Assistant:** Claude Code
**Repository Owner:** Lakshitha Marchorage (Lmarcho)
**Maintained By:** AI assistants should update this file when making significant structural changes
