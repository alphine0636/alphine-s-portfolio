// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize meal planner if on menu page
    if (document.querySelector('.planning-grid')) {
        initMealPlanner();
    }
    
    // Load recipes if on menu page
    if (document.querySelector('.recipe-cards')) {
        loadRecipes();
    }
    
    // Filter functionality if on menu page
    if (document.querySelector('.filter-btn')) {
        setupFilters();
    }
    
    // Setup smooth scrolling for all pages
    setupSmoothScrolling();
    
    // Setup active navigation highlighting
    setupActiveNav();

    /* KOREAN BBQ TOGGLE INITIALIZATION */
    if (document.querySelector('.recipe-page.korean-bbq')) {
        // Open first section by default
        const firstSection = document.querySelector('.recipe-page.korean-bbq .content');
        if (firstSection) {
            firstSection.classList.add('show');
            currentOpenSection = firstSection;
        }
        
        // Check for saved dark mode preference
        if (localStorage.getItem('koreanBBQDarkMode') === 'true') {
            document.querySelector('.recipe-page.korean-bbq').classList.add('dark-mode');
        }
    }
});

// KOREAN BBQ TOGGLE FUNCTIONALITY
let currentOpenSection = null;

function toggleSection(id) {
    const section = document.getElementById(id);
    
    // If clicking the already open section, close it
    if (section === currentOpenSection) {
        section.classList.remove('show');
        currentOpenSection = null;
        return;
    }
    
    // Close any currently open section
    if (currentOpenSection) {
        currentOpenSection.classList.remove('show');
    }
    
    // Open the clicked section
    section.classList.add('show');
    currentOpenSection = section;
}

function toggleDarkMode() {
    const recipePage = document.querySelector('.recipe-page.korean-bbq');
    recipePage.classList.toggle('dark-mode');
    localStorage.setItem('koreanBBQDarkMode', recipePage.classList.contains('dark-mode'));
}

/* EXISTING RECIPE DATA AND FUNCTIONS */
const recipes = [
    {
        id: 1,
        title: "Pilau",
        image: "pilau.jpg",
        category: "main",
        time: "50 mins",
        servings: 5,
        calories: 366,
        description: "Spiced rice cooked with tender beef and mad flavor. A certified classic. 🍚🔥",
        link: "pilau.html"
    },
    {
        id: 2,
        title: "Korean BBQ Beef Short Ribs",
        image: "ribs.jpg",
        category: "main",
        time: "3 hrs marination + 20 mins cook",
        servings: 4,
        calories: 431,
        description: "Juicy, smoky ribs marinated in sweet and spicy Korean BBQ sauce. Next-level vibes. 🍖✨",
        link: "korean-bbq.html"
    }
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function initMealPlanner() {
    const planningGrid = document.querySelector('.planning-grid');
    
    days.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.dataset.day = day.toLowerCase();
        
        dayCard.innerHTML = `
            <h4>${day}</h4>
            <p class="planned-meal">No meal planned</p>
        `;
        
        dayCard.addEventListener('click', function() {
            document.querySelectorAll('.day-card').forEach(card => {
                card.classList.remove('selected');
            });
            this.classList.add('selected');
        });
        
        planningGrid.appendChild(dayCard);
    });
    
    // Load saved meal plan
    const mealPlan = JSON.parse(localStorage.getItem('mealPlan')) || {};
    Object.entries(mealPlan).forEach(([day, recipe]) => {
        const dayCard = document.querySelector(`.day-card[data-day="${day}"]`);
        if (dayCard) {
            dayCard.querySelector('.planned-meal').textContent = recipe;
        }
    });
}

function loadRecipes(filter = 'all') {
    const recipeContainer = document.querySelector('.recipe-cards');
    recipeContainer.innerHTML = '';
    
    const filteredRecipes = filter === 'all' 
        ? recipes 
        : recipes.filter(recipe => recipe.category === filter);
    
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('a');
        recipeCard.className = 'recipe-card';
        recipeCard.href = recipe.link;
        
        recipeCard.innerHTML = `
            <div class="card-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="card-content">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-users"></i> Serves ${recipe.servings}</span>
                </div>
                <div class="hover-details">
                    <p>${recipe.description}</p>
                    <span class="view-recipe">View Recipe →</span>
                </div>
            </div>
        `;
        
        recipeContainer.appendChild(recipeCard);
    });
}

function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadRecipes(this.dataset.filter);
        });
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}