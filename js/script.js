// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a saved section in localStorage
    const savedSection = localStorage.getItem('currentSection');
    
    // Hide all sections initially
    document.querySelectorAll('.content').forEach(function(section) {
        section.style.display = 'none';
        section.style.opacity = 0;
    });
    
    // Show the saved section or default to home page
    if (savedSection && document.getElementById(savedSection)) {
        document.getElementById(savedSection).style.display = 'flex';
        document.getElementById(savedSection).style.opacity = 1;
    } else {
        document.getElementById('homePage').style.display = 'flex';
        document.getElementById('homePage').style.opacity = 1;
    }
    
    // Preload images for better performance
    preloadImages();
});

// Function to preload images
function preloadImages() {
    const images = [
        'image/sayyid.jpg',
        'image/Drone.png',
        'image/Kamera.png',
        'image/Web Dev.png',
        'image/portfolio-placeholder.jpg',
        'image/project-1.jpg',
        'image/project-2.jpg',
        'image/project-3.jpg',
        'image/project-4.jpg'
    ];
    
    images.forEach(function(src) {
        const img = new Image();
        img.src = src;
    });
}

// Function to save current section to localStorage
function saveCurrentSection(sectionId) {
    localStorage.setItem('currentSection', sectionId);
}

// Function to change from home page to about me section
function changeSectiontwo() {
    fadeOut(document.getElementById('homePage'), function() {
        fadeIn(document.getElementById('aboutMe'));
        saveCurrentSection('aboutMe');
    });
}

// Function to go back to home page
function backSectionOne() {
    const currentSection = document.querySelector('.content[style*="display: flex"]');
    fadeOut(currentSection, function() {
        fadeIn(document.getElementById('homePage'));
        saveCurrentSection('homePage');
    });
}

// Function to show portfolio section
function showPortfolio() {
    fadeOut(document.getElementById('aboutMe'), function() {
        fadeIn(document.getElementById('portofolio'));
        saveCurrentSection('portofolio');
    });
}

// Function to go back to about me section
function backToAboutMe() {
    fadeOut(document.getElementById('portofolio'), function() {
        fadeIn(document.getElementById('aboutMe'));
        saveCurrentSection('aboutMe');
    });
}

// Function to show the gallery section
function showGallery() {
    const currentSection = document.querySelector('.content[style*="display: flex"]');
    fadeOut(currentSection, function() {
        fadeIn(document.getElementById('gallery'));
        saveCurrentSection('gallery');
    });
}

function showWebProjects() {
    const currentSection = document.querySelector('.content[style*="display: flex"]');
    fadeOut(currentSection, function() {
        fadeIn(document.getElementById('webProjects'));
        saveCurrentSection('webProjects');
    });
}

// Function to show drone footage section
function showDroneFootage() {
    const currentSection = document.querySelector('.content[style*="display: flex"]');
    fadeOut(currentSection, function() {
        fadeIn(document.getElementById('droneFootage'));
        saveCurrentSection('droneFootage');
    });
}

// Function to go back to portfolio section from gallery
function backToPortfolio() {
    fadeOut(document.getElementById('gallery'), function() {
        fadeIn(document.getElementById('portofolio'));
        saveCurrentSection('portofolio');
    });
}

// Function to go back to portfolio section from web projects
function backToPortfolioFromProjects() {
    fadeOut(document.getElementById('webProjects'), function() {
        fadeIn(document.getElementById('portofolio'));
        saveCurrentSection('portofolio');
    });
}

// Function to go back to portfolio section from drone footage
function backToPortfolioFromDrone() {
    fadeOut(document.getElementById('droneFootage'), function() {
        fadeIn(document.getElementById('portofolio'));
        saveCurrentSection('portofolio');
    });
}

// Helper function to fade out an element
function fadeOut(element, callback) {
    let opacity = 1;
    const timer = setInterval(function() {
        if (opacity <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
            if (callback) callback();
        }
        element.style.opacity = opacity;
        opacity -= 0.1;
    }, 30);
}

// Helper function to fade in an element
function fadeIn(element) {
    let opacity = 0;
    element.style.display = 'flex';
    element.style.opacity = opacity;
    
    const timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
    }, 30);
}

// Add lazy loading for images to improve performance
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy");
    
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        let lazyLoadThrottleTimeout;
        
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }
            
            lazyLoadThrottleTimeout = setTimeout(function() {
                const scrollTop = window.pageYOffset;
                
                lazyImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                
                if (lazyImages.length == 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationChange", lazyLoad);
                }
            }, 20);
        }
        
        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationChange", lazyLoad);
    }
});

// Add animation to floating icons
document.addEventListener('DOMContentLoaded', function() {
    animateFloatingIcons();
});

function animateFloatingIcons() {
    const droneIcon = document.querySelector('.drone-icon');
    const cameraIcon = document.querySelector('.camera-icon');
    const webdevIcon = document.querySelector('.webdev-icon');
    
    if (droneIcon && cameraIcon && webdevIcon) {
        // Set initial positions
        setRandomPosition(droneIcon);
        setRandomPosition(cameraIcon);
        setRandomPosition(webdevIcon);
        
        // Start animations
        animateIcon(droneIcon);
        animateIcon(cameraIcon);
        animateIcon(webdevIcon);
    }
}

function setRandomPosition(element) {
    const container = document.querySelector('.floating-icons');
    if (!container) return;
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    const x = Math.random() * (containerWidth - 100);
    const y = Math.random() * (containerHeight - 100);
    
    element.style.transform = `translate(${x}px, ${y}px)`;
}

function animateIcon(element) {
    const container = document.querySelector('.floating-icons');
    if (!container) return;
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    const duration = 5000 + Math.random() * 5000; // 5-10 seconds
    
    function move() {
        const x = Math.random() * (containerWidth - 100);
        const y = Math.random() * (containerHeight - 100);
        
        element.style.transition = `transform ${duration/1000}s ease-in-out`;
        element.style.transform = `translate(${x}px, ${y}px)`;
        
        setTimeout(move, duration);
    }
    
    move();
}

// Handle responsive design
window.addEventListener('resize', function() {
    adjustLayoutForScreenSize();
});

function adjustLayoutForScreenSize() {
    const width = window.innerWidth;
    
    // Adjust portfolio grid for smaller screens
    if (width < 768) {
        document.querySelectorAll('.portfolio-grid').forEach(grid => {
            grid.style.gridTemplateColumns = '1fr';
        });
    } else if (width < 992) {
        document.querySelectorAll('.portfolio-grid').forEach(grid => {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        });
    } else {
        document.querySelectorAll('.portfolio-grid').forEach(grid => {
            grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        });
    }
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', function() {
    adjustLayoutForScreenSize();
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effects to portfolio items
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});