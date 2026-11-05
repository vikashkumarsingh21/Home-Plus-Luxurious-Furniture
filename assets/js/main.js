/**
 * HOME PLUS LUXURIOUS FURNITURE - RAJKOT
 * Interactive Frontend Engine
 * Handles Product Filtering, Quick-View Modal, WhatsApp Quote Builder,
 * VIP Visit Booking, Mobile Navigation, and Toast Alerts.
 */

// Furniture Catalogue Data
const furnitureProducts = [
  {
    id: 'sofa-1',
    category: 'sofas',
    categoryName: 'Living Room Sofas',
    name: 'The Versailles Chesterfield 7-Seater',
    tag: 'Signature Bestseller',
    shortDesc: 'Handcrafted deep-button tufted sectional upholstered in Italian top-grain cognac leather.',
    fullDesc: 'The Versailles Chesterfield is the crowning jewel of any luxury Rajkot residence. Built on a kiln-dried, seasoned teakwood frame, it features genuine brass nailhead trimming, diamond deep-button tufting, and multi-layer high-resilience foam for royal comfort that never sags.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    dimensions: '118" L x 88" W x 32" H (Customizable)',
    wood: '100% Solid Seasoned Sagwan (Teakwood)',
    upholstery: 'Italian Top-Grain Leather / Premium Velvet',
    cushioning: '40-Density Sleepwell Super-Soft Foam with Featherblend Top',
    warranty: '5 Years Structural Frame Warranty'
  },
  {
    id: 'sofa-2',
    category: 'sofas',
    categoryName: 'Living Room Sofas',
    name: 'Aura Curved Bouclé Architectural Sofa',
    tag: 'Modern Luxury',
    shortDesc: 'Sensuous organic silhouette wrapped in imported Belgian cream bouclé with champagne gold base.',
    fullDesc: 'Designed for contemporary luxury villas and high-end penthouses. The Aura series combines organic fluid curves with ultra-plush tactile bouclé fabric and an integrated brushed champagne brass plinth.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
    dimensions: '102" L x 42" D x 30" H',
    wood: 'Seasoned Hardwood & High-Grade Marine Plywood',
    upholstery: 'Imported Belgian Textured Bouclé (Stain Resistant)',
    cushioning: 'Dual-Layer High Resilience Ergonomic Foam',
    warranty: '5 Years Frame & Spring System Warranty'
  },
  {
    id: 'sofa-3',
    category: 'sofas',
    categoryName: 'Living Room Sofas',
    name: 'The Regal Maharaja Wingback Lounge Chair',
    tag: 'Artisan Heritage',
    shortDesc: 'Statement accent chair with hand-carved teakwood cabriole legs and jewel-toned royal velvet.',
    fullDesc: 'An iconic silhouette honoring royal Indian luxury. Every contour is sculpted by master craftsmen in Rajkot, paired with antique brass studding and lumbar bolster support.',
    image: 'https://images.unsplash.com/photo-1580481077198-466d6d3765e9?auto=format&fit=crop&w=1000&q=80',
    dimensions: '34" W x 36" D x 46" H',
    wood: 'Hand-carved Solid Teakwood (CP Teak)',
    upholstery: 'Royal Sapphire / Amber Gold Velvet',
    cushioning: 'High-Density Ortho-Comfort Base',
    warranty: '5 Years Warranty'
  },
  {
    id: 'bed-1',
    category: 'bedroom',
    categoryName: 'Master Bedroom Sets',
    name: 'Imperial Teakwood Grandeur King Bed',
    tag: 'Masterpiece',
    shortDesc: 'Palatial upholstered king bed with integrated warm LED backlighting and heavy-duty hydraulic storage.',
    fullDesc: 'Transform your bedroom into a 7-star retreat. Hand-joined from seasoned Sagwan teak with horizontal fluted velvet paneling, integrated floating walnut nightstands, and German hydraulic lift storage.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    dimensions: 'King Size: 78" W x 84" L x 54" Headboard Height',
    wood: 'Heavy-gauge Solid Teak & Natural Walnut Veneer',
    upholstery: 'Textured Cashmere Linen / Suede Fabric',
    cushioning: 'Zero-Sag Padded Acoustic Headboard',
    warranty: '7 Years Warranty on Wood & German Hydraulics'
  },
  {
    id: 'bed-2',
    category: 'bedroom',
    categoryName: 'Master Bedroom Sets',
    name: 'Monarch Floating Upholstered Bed Suite',
    tag: 'Minimalist Opulence',
    shortDesc: 'Low-profile architectural platform bed with wrap-around cantilevered walnut side tables.',
    fullDesc: 'Emphasizing clean lines and serene luxury. Built with an internal steel reinforcement and perimeter ambient halo lighting that casts a soft warm glow across your flooring.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80',
    dimensions: 'King Size: 84" W x 88" L x 42" H',
    wood: 'Treated Seasoned Hardwood with Walnut Finish',
    upholstery: 'Premium Oatmeal Linen Blend',
    cushioning: 'Ergonomic 35-Density Headrest Cushioning',
    warranty: '5 Years Structural Warranty'
  },
  {
    id: 'dining-1',
    category: 'dining',
    categoryName: 'Dining & Entertaining',
    name: 'Milano Calacatta Marble 8-Seater Suite',
    tag: 'Bestseller Dining',
    shortDesc: 'Polished Italian Calacatta marble slab top supported by sculptural walnut & brushed brass pedestals.',
    fullDesc: 'Make every dinner an unforgettable banquet. Features a book-matched 20mm Italian Calacatta Gold marble slab with stain-shield nano-coating, accompanied by 8 ergonomic curved armchairs.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
    dimensions: 'Dining Table: 96" L x 44" W x 30" H + 8 Chairs',
    wood: 'Solid Teak Pedestal with Brushed Champagne Brass',
    upholstery: 'Italian Nappa Leather / Microfiber Fabric Chairs',
    cushioning: 'Dual Density Chair Seating with Lumbar Pitch',
    warranty: '5 Years Warranty on Table Base & Chair Joinery'
  },
  {
    id: 'dining-2',
    category: 'dining',
    categoryName: 'Dining & Entertaining',
    name: 'The Artisan Live-Edge Teak Dining Ensemble',
    tag: 'Natural Luxury',
    shortDesc: 'Continuous single-slab seasoned teakwood table highlighting authentic organic grain and butterflies.',
    fullDesc: 'Each table is a one-of-a-kind natural sculpture. Crafted from carefully dried, 60+ year old seasoned teakwood logs, finished with food-safe botanical oils and paired with matte black forged legs.',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80',
    dimensions: '84" L x 40" W x 30" H (Custom length available)',
    wood: 'Single Slab Natural Seasoned Teakwood',
    upholstery: 'Solid Wood Chairs or Leather Padded Chairs',
    cushioning: 'High-Resilience Premium Seat Foam',
    warranty: '10 Years Warranty Against Termite & Wood Warping'
  },
  {
    id: 'office-1',
    category: 'office',
    categoryName: 'Executive & Office',
    name: 'Presidential Teakwood Executive Desk & Credenza',
    tag: 'Corporate Prestige',
    shortDesc: 'Commanding executive workstation with integrated wire management, leather blotter, and drawer locks.',
    fullDesc: 'Engineered for business leaders, industrialists, and doctors in Rajkot. Built with heavy-duty teakwood construction, American walnut veneer, discreet wireless charging pad cutouts, and concealed safety compartments.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    dimensions: 'Desk: 78" L x 38" W x 30" H | Credenza: 60" L x 18" D x 30" H',
    wood: 'Seasoned Teakwood & Natural Walnut Veneer',
    upholstery: 'Hand-stitched Brown Saddle Leather Top Inlay',
    cushioning: 'Soft-close Blum German hardware drawers',
    warranty: '5 Years Complete Hardware & Structural Warranty'
  },
  {
    id: 'custom-1',
    category: 'custom',
    categoryName: 'Bespoke & Custom',
    name: 'Custom Architectural Walk-In Wardrobe & Vanity',
    tag: 'Bespoke Atelier',
    shortDesc: 'Floor-to-ceiling built-in wardrobe suite featuring tinted fluted glass, warm LED illumination, and velvet jewelry trays.',
    fullDesc: 'We tailor-make walk-in wardrobes and master bedroom suites to your architect’s exact AutoCAD/3D drawings. Fully customized compartments for traditional Gujarati bridal wear, suits, watches, and bags.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
    dimensions: 'Tailor-made to exact room height and length',
    wood: 'BWP Marine Grade Plywood & Imported Veneers',
    upholstery: 'Suede Lining in Drawers & Vanity Stool',
    cushioning: 'Soft-Damped Acoustic Hinges & Aluminum Profiles',
    warranty: '10 Years Structural & Termite Proof Warranty'
  },
  {
    id: 'custom-2',
    category: 'custom',
    categoryName: 'Bespoke & Custom',
    name: 'Artisan Media Wall & Fluted Walnut Credenza',
    tag: 'Living Room Statement',
    shortDesc: 'Architectural TV console wall with fluted wood slats, sintered stone backdrop, and floating drawers.',
    fullDesc: 'Elevate your main hall with a bespoke media entertainment wall. Features ambient linear warm LEDs, acoustic fluted panels, and custom cutouts for soundbars and gaming consoles.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    dimensions: 'Custom modular sizing from 8 ft to 16 ft length',
    wood: 'Solid Teak Slats & Natural Walnut Veneer',
    upholstery: 'N/A (Italian Sintered Stone accent option)',
    cushioning: 'Hettich German Push-to-Open Soft Glides',
    warranty: '5 Years Complete Warranty'
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProducts('all');
  initCategoryFilters();
  initWhatsAppQuoteForm();
  initModalListeners();
  initSmoothScroll();
  initScrollSpy();
  initDefaultDate();
});

function initDefaultDate() {
  const vipDate = document.getElementById('vipDate');
  if (vipDate) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrowStr = today.toISOString().split('T')[0];
    vipDate.min = new Date().toISOString().split('T')[0];
    vipDate.value = tomorrowStr;
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], aside[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// 1. Sticky Navbar & Mobile Drawer
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenuDrawer');
  const closeMobileMenu = document.getElementById('closeMobileMenu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Mobile Menu toggling
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMobileMenu && mobileMenu) {
    closeMobileMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu when clicking any nav link inside it
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });
}

// 2. Render Products Grid
function renderProducts(filterCategory) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = filterCategory === 'all' 
    ? furnitureProducts 
    : furnitureProducts.filter(item => item.category === filterCategory);

  grid.innerHTML = filtered.map(item => `
    <div class="lux-card flex flex-col group" data-category="${item.category}">
      <div class="img-zoom-wrap h-64 sm:h-72 w-full bg-stone-900 relative">
        <img 
          src="${item.image}" 
          alt="${item.name} - Home Plus Luxurious Furniture Rajkot" 
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80';"
        />
        <div class="absolute top-4 left-4">
          <span class="lux-badge" style="background: rgba(15, 12, 10, 0.75); color: var(--color-gold-300); border-color: var(--color-gold-400);">
            ${item.tag}
          </span>
        </div>
        <div class="absolute bottom-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded text-xs font-medium text-stone-200 border border-stone-700/50">
          ${item.categoryName}
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-serif text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
            ${item.name}
          </h3>
          <p class="text-stone-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            ${item.shortDesc}
          </p>

          <div class="space-y-1.5 py-3 border-t border-b border-stone-200/80 text-xs text-stone-700 mb-5">
            <div class="flex items-center gap-2">
              <span class="text-amber-700 font-semibold">Wood:</span>
              <span class="truncate">${item.wood}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-amber-700 font-semibold">Dimensions:</span>
              <span class="truncate">${item.dimensions}</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2.5 pt-2">
          <button 
            type="button"
            onclick="openQuickView('${item.id}')"
            class="w-full py-2.5 px-3 border border-stone-300 rounded-lg text-xs font-semibold text-stone-800 hover:bg-stone-100 hover:border-amber-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <svg class="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            Quick View
          </button>

          <button 
            type="button"
            onclick="enquireProductWhatsApp('${item.id}')"
            class="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.179.18-.077.354.101.174.449.741.964 1.2 0.662.59 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
            </svg>
            Enquire
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Category Filter Tab Switching
function initCategoryFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-filter');
      renderProducts(category);
    });
  });
}

// 4. Quick View Modal Handler
function openQuickView(productId) {
  const product = furnitureProducts.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('modalContentContainer');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="rounded-xl overflow-hidden bg-stone-900 border border-stone-800 shadow-inner">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-80 md:h-[420px] object-cover"
          onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80';"
        />
      </div>

      <div class="space-y-4">
        <div>
          <span class="lux-badge mb-2">${product.tag}</span>
          <h2 class="text-2xl md:text-3xl font-serif text-stone-900 mt-1">${product.name}</h2>
          <p class="text-amber-800 font-medium text-sm">${product.categoryName} • Bespoke Available</p>
        </div>

        <p class="text-stone-600 text-sm leading-relaxed">${product.fullDesc}</p>

        <div class="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-2 text-xs">
          <div class="flex justify-between border-b border-stone-200/70 pb-2">
            <span class="text-stone-500">Timber / Wood:</span>
            <span class="font-semibold text-stone-900">${product.wood}</span>
          </div>
          <div class="flex justify-between border-b border-stone-200/70 pb-2">
            <span class="text-stone-500">Upholstery:</span>
            <span class="font-semibold text-stone-900">${product.upholstery}</span>
          </div>
          <div class="flex justify-between border-b border-stone-200/70 pb-2">
            <span class="text-stone-500">Cushioning Tech:</span>
            <span class="font-semibold text-stone-900">${product.cushioning}</span>
          </div>
          <div class="flex justify-between border-b border-stone-200/70 pb-2">
            <span class="text-stone-500">Standard Dimensions:</span>
            <span class="font-semibold text-stone-900">${product.dimensions}</span>
          </div>
          <div class="flex justify-between pt-1 text-amber-800 font-semibold">
            <span>Official Warranty:</span>
            <span>${product.warranty}</span>
          </div>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row gap-3">
          <button 
            type="button" 
            onclick="enquireProductWhatsApp('${product.id}')"
            class="btn-whatsapp flex-1 justify-center text-sm"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.179.18-.077.354.101.174.449.741.964 1.2 0.662.59 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z"/>
            </svg>
            Enquire on WhatsApp
          </button>

          <a 
            href="tel:+919327999970" 
            class="py-3 px-5 border border-stone-800 bg-stone-900 text-stone-100 hover:bg-stone-800 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call Showroom
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// 5. WhatsApp Integration Helpers
function enquireProductWhatsApp(productId) {
  const product = furnitureProducts.find(p => p.id === productId);
  if (!product) return;

  const phone = '919327999970';
  const text = `*Hello Home Plus Luxurious Furniture (Rajkot)* 👋\n\nI am interested in learning more about:\n• *Product:* ${product.name}\n• *Category:* ${product.categoryName}\n• *Wood/Material:* ${product.wood}\n\nPlease share availability, pricing, fabric customization options, and showroom address at JP Towers, Tagore Road.\n\nThank you!`;
  
  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
}

// 6. Interactive Custom Order / WhatsApp Quote Generator Form
function initWhatsAppQuoteForm() {
  const form = document.getElementById('customEnquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const furnitureType = document.getElementById('furnitureType').value;
    const materialPref = document.getElementById('materialPref').value;
    const roomSize = document.getElementById('roomDimensions').value.trim();
    const message = document.getElementById('customMessage').value.trim();
    const location = document.getElementById('clientLocation').value;

    if (!name || !phone) {
      showToast('Please provide your name and phone number.', 'Missing Information');
      return;
    }

    const waPhone = '919327999970';
    const formattedMsg = `*New Bespoke Furniture Inquiry - Home Plus Rajkot* 🛋️\n\n` +
      `• *Client Name:* ${name}\n` +
      `• *Contact Number:* ${phone}\n` +
      `• *Furniture Requirement:* ${furnitureType || 'Not specified'}\n` +
      `• *Material / Finish:* ${materialPref || 'Open to recommendation'}\n` +
      `• *Room / Size Info:* ${roomSize || 'Standard'}\n` +
      `• *Client Location:* ${location || 'Rajkot'}\n` +
      `• *Additional Notes:* ${message || 'Looking for catalogue and pricing'}\n\n` +
      `Please connect with me with design options and showroom consultation details.`;

    const encoded = encodeURIComponent(formattedMsg);
    const waUrl = `https://wa.me/${waPhone}?text=${encoded}`;

    showToast('Redirecting to WhatsApp to send your inquiry...', 'Connecting with Home Plus');

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  });
}

// 7. VIP Showroom Visit Scheduler Modal
function openVIPModal() {
  const modal = document.getElementById('vipVisitModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeVIPModal() {
  const modal = document.getElementById('vipVisitModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function submitVIPVisit(event) {
  event.preventDefault();
  const name = document.getElementById('vipName').value.trim();
  const phone = document.getElementById('vipPhone').value.trim();
  const date = document.getElementById('vipDate').value;
  const time = document.getElementById('vipTime').value;
  const interest = document.getElementById('vipInterest').value;

  if (!name || !phone || !date) {
    showToast('Please fill in your name, phone number, and preferred date.', 'Incomplete Form');
    return;
  }

  const waPhone = '919327999970';
  const text = `*VIP Showroom Visit Booking - Home Plus Luxurious Furniture* 🏛️\n\n` +
    `• *Client Name:* ${name}\n` +
    `• *Phone:* ${phone}\n` +
    `• *Requested Date:* ${date}\n` +
    `• *Preferred Time Slot:* ${time}\n` +
    `• *Area of Interest:* ${interest}\n\n` +
    `I would like to schedule a personal walkthrough at your showroom: Shop No. 1, 2, 3, JP Towers, Tagore Road, Rajkot. Please confirm the appointment slot.`;

  closeVIPModal();
  showToast('Booking submitted! Opening WhatsApp to confirm your slot.', 'Appointment Scheduled');

  setTimeout(() => {
    window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`, '_blank');
  }, 400);
}

// 8. Modal Backdrop Click Handlers
function initModalListeners() {
  const quickViewModal = document.getElementById('quickViewModal');
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) {
        closeQuickView();
      }
    });
  }

  const vipModal = document.getElementById('vipVisitModal');
  if (vipModal) {
    vipModal.addEventListener('click', (e) => {
      if (e.target === vipModal) {
        closeVIPModal();
      }
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeVIPModal();
    }
  });
}

// 9. Toast Notification System
function showToast(message, title = 'Notification') {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'lux-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="text-amber-400 mt-0.5">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div>
        <p class="font-serif font-semibold text-white text-sm">${title}</p>
        <p class="text-stone-300 text-xs mt-0.5 leading-normal">${message}</p>
      </div>
    </div>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4200);
}

// 10. Smooth Scrolling with Offset
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = 85;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
