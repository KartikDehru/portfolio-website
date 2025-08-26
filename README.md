# 🚀 Kartik Dehru - Web3 Developer Portfolio

A beautiful, design-heavy portfolio website showcasing Web3 development skills, blockchain projects, and decentralized applications. Built with HTML, CSS, and JavaScript featuring modern design principles, smooth animations, and responsive layout.

## ✨ Features

- **Web3 Focused**: Showcases blockchain development and smart contract expertise
- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- **Mobile-First**: Optimized for mobile devices with hamburger navigation
- **Performance Optimized**: Efficient animations and smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Skills Visualization**: Animated skill bars and progress indicators

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content to match your portfolio

## 📁 File Structure

```
portfolio_website/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:

- **Hero Section**: Update your name, title, and tagline
- **About Section**: Modify your bio, experience, and statistics
- **Contact Section**: Update your contact details
- **Social Links**: Add your social media profiles

### 2. Projects
Replace the sample projects in the projects section:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <!-- Add your project image here -->
        <img src="path/to/your/project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your project description</p>
        <div class="project-tags">
            <span class="tag">Technology Used</span>
        </div>
    </div>
</div>
```

### 3. Skills
Update the skills section with your expertise:

```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-react"></i>
    </div>
    <span class="skill-name">React</span>
    <div class="skill-level">
        <div class="skill-bar" data-level="85"></div>
    </div>
</div>
```

### 4. Colors and Styling
Modify the color scheme in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-color: #333;
    --light-bg: #f8f9fa;
}
```

### 5. Images
Replace placeholder elements with your actual images:

- **Profile Picture**: Update the about section image
- **Project Images**: Add screenshots of your projects
- **Background Images**: Customize hero section backgrounds

## 🎨 Design Features

### Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Display Font**: Playfair Display (elegant serif for headings)
- **Google Fonts**: Automatically loaded from Google Fonts

### Color Scheme
- **Primary Gradient**: Blue to Purple (#667eea → #764ba2)
- **Accent Colors**: Pink to Red (#f093fb → #f5576c)
- **Neutral Colors**: Clean whites, grays, and dark accents

### Animations
- **Entrance Animations**: Fade-in effects for sections
- **Hover Effects**: Interactive project cards and buttons
- **Scroll Animations**: Elements animate as they come into view
- **Floating Elements**: Subtle parallax effects in hero section

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Performance Features

- **Optimized Animations**: 60fps smooth animations
- **Throttled Scroll Events**: Efficient scroll handling
- **Intersection Observer**: Modern scroll animation API
- **CSS Transitions**: Hardware-accelerated animations

## 📝 Adding New Sections

To add a new section, follow this pattern:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Section Title</h2>
            <div class="title-underline"></div>
        </div>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for description and viewport
- Proper heading hierarchy
- Alt text placeholders for images

## 🔒 Security Considerations

- Form validation on client-side
- No external dependencies that could pose security risks
- Clean, sanitized HTML structure

## 🚀 Deployment

### Local Development
1. Open `index.html` in your browser
2. Use a local server for development (recommended)

### Web Hosting
1. Upload all files to your web hosting service
2. Ensure `index.html` is in the root directory
3. Test all functionality after deployment

### GitHub Pages
1. Push code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your portfolio will be available at `username.github.io/repository-name`

## 🎨 Advanced Customization

### Adding Custom CSS
Create a separate CSS file for custom styles:

```html
<link rel="stylesheet" href="custom-styles.css">
```

### Adding JavaScript Libraries
Include additional libraries in the head section:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>
```

### Custom Animations
Add new keyframe animations in CSS:

```css
@keyframes customAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
```

## 📞 Support

If you need help customizing your portfolio:
1. Check the HTML structure for reference
2. Modify CSS variables for quick color changes
3. Use browser developer tools to inspect elements
4. Test changes on different screen sizes

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉**

Your portfolio website is now ready to showcase your skills and projects to the world!
