/* ===================================
   QuickToolsHub JavaScript
   Version: 2.0 - Simplified
   =================================== */

// Global variables
let allTools = [];

// Load tools from JSON file
async function loadTools() {
    try {
        const response = await fetch('tools.json');
        const data = await response.json();
        allTools = data.tools;
        renderTools();
    } catch (error) {
        console.error('Error loading tools:', error);
        // Fallback: show the single tool directly
        renderFallbackTool();
    }
}

// Render tools to the grid
function renderTools() {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;
    
    if (!allTools || allTools.length === 0) {
        renderFallbackTool();
        return;
    }
    
    grid.innerHTML = allTools.map(tool => {
        const colorClasses = getColorClasses(tool.color);
        return `
        <div class="tool-card bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6 border-2 border-${tool.color}-100">
            <div class="text-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-r ${colorClasses.gradient} rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas ${tool.icon} text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">${tool.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${tool.description || ''}</p>
                ${tool.badge ? `<span class="inline-block ${getBadgeClass(tool.badge)} text-xs font-bold px-3 py-1 rounded-full mb-3">${tool.badge}</span>` : ''}
            </div>
            <a href="${tool.url}" class="block bg-gradient-to-r ${colorClasses.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition text-center font-medium">
                <i class="fas fa-arrow-right mr-2"></i>Use Tool
            </a>
        </div>
    `;
    }).join('');
    
    // Add coming soon cards
    addComingSoonCards();
}

// Fallback when JSON fails to load
function renderFallbackTool() {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;
    
    grid.innerHTML = `
        <div class="tool-card bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6 border-2 border-blue-100">
            <div class="text-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-file-word text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">PDF to Word Converter</h3>
                <p class="text-gray-600 text-sm mb-4">Convert PDF and images to Word documents with perfect formatting</p>
                <span class="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">HOT</span>
            </div>
            <a href="tools/utility/pdf-to-word.html" class="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition text-center font-medium">
                <i class="fas fa-arrow-right mr-2"></i>Use Tool
            </a>
        </div>
    `;
    
    addComingSoonCards();
}

// Add coming soon placeholder cards
function addComingSoonCards() {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;
    
    const comingSoonHTML = `
        <div class="tool-card bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6 border-2 border-gray-200 opacity-60">
            <div class="text-center mb-4">
                <div class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-question text-gray-500 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-600 mb-2">Coming Soon</h3>
                <p class="text-gray-500 text-sm mb-4">New tool will be available here</p>
                <span class="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-3">SOON</span>
            </div>
            <button class="block w-full bg-gray-300 text-gray-600 px-6 py-3 rounded-lg cursor-not-allowed text-center font-medium" disabled>
                <i class="fas fa-lock mr-2"></i>Coming Soon
            </button>
        </div>
    `;
    
    // Add 2 coming soon cards
    grid.innerHTML += comingSoonHTML + comingSoonHTML;
}

// Get color classes for gradient
function getColorClasses(color) {
    const colorMap = {
        blue: { gradient: 'from-blue-500 to-purple-500' },
        green: { gradient: 'from-green-500 to-teal-500' },
        red: { gradient: 'from-red-500 to-pink-500' },
        purple: { gradient: 'from-purple-500 to-pink-500' },
        orange: { gradient: 'from-orange-500 to-red-500' },
        teal: { gradient: 'from-teal-500 to-cyan-500' },
        yellow: { gradient: 'from-yellow-500 to-orange-500' },
        pink: { gradient: 'from-pink-500 to-rose-500' },
        indigo: { gradient: 'from-indigo-500 to-purple-500' },
        gray: { gradient: 'from-gray-500 to-slate-500' }
    };
    
    return colorMap[color] || colorMap.blue;
}

// Get badge class
function getBadgeClass(badge) {
    const badgeMap = {
        'HOT': 'bg-red-500 text-white',
        'NEW': 'bg-green-500 text-white',
        'POPULAR': 'bg-yellow-400 text-yellow-900'
    };
    
    return badgeMap[badge] || 'bg-blue-500 text-white';
}

// Mobile menu toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadTools();
    initializeMobileMenu();
    initializeSmoothScroll();
    
    console.log('QuickToolsHub initialized successfully!');
});
