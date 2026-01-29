/* ===================================
   QuickToolsHub Universal Template
   Auto-loads Header & Footer
   =================================== */

// Configuration
const SITE_CONFIG = {
    siteName: 'QuickToolsHub',
    siteTagline: 'Free Online Tools',
    baseUrl: '../../', // Adjust based on tool location
    year: new Date().getFullYear()
};

// Social Media Links
const SOCIAL_LINKS = [
    { icon: 'fa-facebook', url: '#', name: 'Facebook', color: 'bg-blue-600' },
    { icon: 'fa-twitter', url: '#', name: 'Twitter', color: 'bg-blue-400' },
    { icon: 'fa-instagram', url: '#', name: 'Instagram', color: 'bg-pink-600' },
    { icon: 'fa-youtube', url: '#', name: 'YouTube', color: 'bg-red-600' },
    { icon: 'fa-linkedin', url: '#', name: 'LinkedIn', color: 'bg-blue-700' },
    { icon: 'fa-whatsapp', url: '#', name: 'WhatsApp', color: 'bg-green-600' }
];

// Categories for Footer
const CATEGORIES = [
    { name: 'AI Tools', icon: 'fa-robot' },
    { name: 'SEO Tools', icon: 'fa-chart-line' },
    { name: 'Social Media', icon: 'fa-youtube', fab: true },
    { name: 'Student Tools', icon: 'fa-graduation-cap' },
    { name: 'Utility Tools', icon: 'fa-wrench' },
    { name: 'Design Tools', icon: 'fa-palette' },
    { name: 'Web Dev Tools', icon: 'fa-code' }
];

// Generate Header HTML
function generateHeader() {
    return `
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <a href="${SITE_CONFIG.baseUrl}index.html" class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-tools text-white text-xl"></i>
                    </div>
                    <div>
                        <h1 class="font-bold text-xl text-gray-800">${SITE_CONFIG.siteName}</h1>
                        <p class="text-xs text-gray-500">${SITE_CONFIG.siteTagline}</p>
                    </div>
                </a>
                
                <nav class="hidden md:flex items-center space-x-6">
                    <a href="${SITE_CONFIG.baseUrl}index.html" class="text-gray-700 hover:text-blue-600 font-medium transition">
                        <i class="fas fa-home mr-1"></i>Home
                    </a>
                    <a href="${SITE_CONFIG.baseUrl}blog.html" class="text-gray-700 hover:text-blue-600 font-medium transition">
                        <i class="fas fa-blog mr-1"></i>Blog
                    </a>
                    <a href="${SITE_CONFIG.baseUrl}resources.html" class="text-gray-700 hover:text-blue-600 font-medium transition">
                        <i class="fas fa-book mr-1"></i>Resources
                    </a>
                    <a href="${SITE_CONFIG.baseUrl}contact.html" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                        <i class="fas fa-envelope mr-1"></i>Contact
                    </a>
                </nav>
                
                <button id="mobileMenuBtn" class="md:hidden text-gray-700" aria-label="Toggle mobile menu">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
            
            <div id="mobileMenu" class="hidden md:hidden mt-4 space-y-2">
                <a href="${SITE_CONFIG.baseUrl}index.html" class="block py-2 hover:text-blue-600 transition">
                    <i class="fas fa-home mr-2"></i>Home
                </a>
                <a href="${SITE_CONFIG.baseUrl}blog.html" class="block py-2 hover:text-blue-600 transition">
                    <i class="fas fa-blog mr-2"></i>Blog
                </a>
                <a href="${SITE_CONFIG.baseUrl}resources.html" class="block py-2 hover:text-blue-600 transition">
                    <i class="fas fa-book mr-2"></i>Resources
                </a>
                <a href="${SITE_CONFIG.baseUrl}contact.html" class="block py-2 hover:text-blue-600 transition">
                    <i class="fas fa-envelope mr-2"></i>Contact
                </a>
            </div>
        </div>
    </header>
    `;
}

// Generate Breadcrumb HTML
function generateBreadcrumb(toolName, category = 'Tools') {
    return `
    <div class="bg-gray-100 py-3">
        <div class="container mx-auto px-4">
            <div class="flex items-center text-sm text-gray-600">
                <a href="${SITE_CONFIG.baseUrl}index.html" class="hover:text-blue-600 transition">
                    <i class="fas fa-home mr-1"></i>Home
                </a>
                <i class="fas fa-chevron-right mx-2 text-xs"></i>
                <a href="${SITE_CONFIG.baseUrl}index.html#tools" class="hover:text-blue-600 transition">${category}</a>
                <i class="fas fa-chevron-right mx-2 text-xs"></i>
                <span class="text-gray-800 font-medium">${toolName}</span>
            </div>
        </div>
    </div>
    `;
}

// Generate Footer HTML
function generateFooter() {
    const socialLinksHTML = SOCIAL_LINKS.map(link => `
        <a href="${link.url}" class="w-10 h-10 bg-gray-700 hover:${link.color} rounded-full flex items-center justify-center transition" aria-label="${link.name}">
            <i class="fab ${link.icon}"></i>
        </a>
    `).join('');
    
    const categoriesHTML = CATEGORIES.map(cat => `
        <li>
            <a href="${SITE_CONFIG.baseUrl}index.html#tools" class="hover:text-white transition">
                <i class="${cat.fab ? 'fab' : 'fas'} ${cat.icon} mr-2"></i>${cat.name}
            </a>
        </li>
    `).join('');
    
    return `
    <footer class="bg-gray-800 text-white py-12 mt-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                <!-- Brand -->
                <div>
                    <h3 class="font-bold text-lg mb-4">
                        <i class="fas fa-tools mr-2"></i>${SITE_CONFIG.siteName}
                    </h3>
                    <p class="text-gray-400 text-sm">Free online tools for everyone. Fast, simple, and secure.</p>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><a href="${SITE_CONFIG.baseUrl}index.html" class="hover:text-white transition"><i class="fas fa-home mr-2"></i>Home</a></li>
                        <li><a href="${SITE_CONFIG.baseUrl}blog.html" class="hover:text-white transition"><i class="fas fa-blog mr-2"></i>Blog</a></li>
                        <li><a href="${SITE_CONFIG.baseUrl}resources.html" class="hover:text-white transition"><i class="fas fa-book mr-2"></i>Resources</a></li>
                        <li><a href="${SITE_CONFIG.baseUrl}index.html#tools" class="hover:text-white transition"><i class="fas fa-tools mr-2"></i>All Tools</a></li>
                    </ul>
                </div>
                
                <!-- Categories -->
                <div>
                    <h4 class="font-bold mb-4">Categories</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        ${categoriesHTML}
                    </ul>
                </div>
                
                <!-- Company -->
                <div>
                    <h4 class="font-bold mb-4">Company</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><a href="${SITE_CONFIG.baseUrl}about.html" class="hover:text-white transition"><i class="fas fa-info-circle mr-2"></i>About Us</a></li>
                        <li><a href="${SITE_CONFIG.baseUrl}contact.html" class="hover:text-white transition"><i class="fas fa-envelope mr-2"></i>Contact</a></li>
                        <li><a href="${SITE_CONFIG.baseUrl}privacy.html" class="hover:text-white transition"><i class="fas fa-shield-alt mr-2"></i>Privacy Policy</a></li>
                        <li><a href="${SITE_CONFIG.baseUrl}terms.html" class="hover:text-white transition"><i class="fas fa-file-contract mr-2"></i>Terms</a></li>
                    </ul>
                </div>
                
                <!-- Social Links -->
                <div>
                    <h4 class="font-bold mb-4">Follow Us</h4>
                    <div class="flex flex-wrap gap-3 mb-4">
                        ${socialLinksHTML}
                    </div>
                    <p class="text-gray-400 text-xs">Connect with us for updates!</p>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; ${SITE_CONFIG.year} ${SITE_CONFIG.siteName}. All rights reserved.</p>
                <p class="mt-2 text-xs">Made with <i class="fas fa-heart text-red-500"></i> for everyone</p>
            </div>
        </div>
    </footer>
    `;
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
}

// Main initialization function
function initUniversalTemplate(toolName, category) {
    // Load Header
    const headerPlaceholder = document.getElementById('universal-header');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = generateHeader();
    }
    
    // Load Breadcrumb
    const breadcrumbPlaceholder = document.getElementById('universal-breadcrumb');
    if (breadcrumbPlaceholder && toolName) {
        breadcrumbPlaceholder.innerHTML = generateBreadcrumb(toolName, category);
    }
    
    // Load Footer
    const footerPlaceholder = document.getElementById('universal-footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooter();
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    console.log('✅ Universal template loaded successfully!');
}

// Auto-initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Get tool name from page title or meta tag
    const toolName = document.querySelector('meta[name="tool-name"]')?.content || 
                     document.title.split('-')[0].trim();
    const category = document.querySelector('meta[name="tool-category"]')?.content || 'Tools';
    
    initUniversalTemplate(toolName, category);
});