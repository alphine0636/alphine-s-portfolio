# Mary Aphline Atieno - Personal Website

A beautiful personal website showcasing Mary Aphline Atieno's academic journey, culinary passion, and commitment to sustainable living.

## Table of Contents
- [Features](#features)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Customization](#customization)
- [License](#license)

## Features ✨

- **Responsive Design**: Looks great on all devices
- **Interactive Elements**: Toggle sections, dark mode, and hover effects
- **Modern UI**: Clean layout with beautiful color scheme
- **Recipe Showcase**: Professional presentation of culinary creations
- **Personal Branding**: Highlights academic and personal interests

## Pages 📚

1. **Homepage** - Introduction and highlights
2. **About** - Academic background and personal interests
3. **Menu** - Collection of favorite recipes
4. **Recipe Pages** - Detailed cooking instructions with:
   - Interactive toggles
   - Nutrition information
   - Beautiful imagery

## Technologies Used 💻

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/-Font_Awesome-528DD7?style=flat-square&logo=font-awesome&logoColor=white)

## Installation 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mary-aphline-website.git
   ```
2. Open the project folder:
   ```bash
   cd mary-aphline-website
   ```
3. Launch the website by opening `index.html` in your browser.

## Customization 🎨

### Color Scheme
Modify the CSS variables in `style.css`:
```css
:root {
    --primary: #0047AB;  /* Deep Blue */
    --secondary: #89CFF0;  /* Light Sky Blue */
    --dark: #002F6C;  /* Navy Blue */
    --light: #E0F7FA;  /* Light Cyan */
    --text: #001F3F;  /* Dark Text */
    --white: #FFFFFF;
}
```

### Adding Recipes
Edit the `recipes` array in `script.js`:
```javascript
const recipes = [
    {
        id: 3,
        title: "New Recipe",
        image: "./images/new-recipe.jpg",
        category: "main",
        time: "45 mins",
        servings: 4,
        calories: 350,
        description: "Delicious new recipe description",
        link: "new-recipe.html"
    }
];
```

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by Mary Aphline Atieno</p>
  <p>
    <a href="https://instagram.com/aphlinelola" target="_blank">
      <i class="fab fa-instagram"></i> @aphlinelola
    </a>
  </p>
</div>
