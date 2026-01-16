<script setup>
import { ref, computed } from 'vue';

// --- State Management ---
const isMenuOpen = ref(false);
const activeFilter = ref('cat-me');
const lightboxOpen = ref(false);
const currentLightboxImage = ref('');

// --- Gallery Data (Easier to manage than raw HTML) ---
const galleryImages = [
  { id: 1, src: '/image/me1.jpg', category: 'cat-me', alt: 'Me 1' },
  { id: 2, src: '/image/me2.jpg', category: 'cat-me', alt: 'Me 2' },
  { id: 3, src: '/image/me3.jpeg', category: 'cat-me', alt: 'Me 3' },
  { id: 4, src: '/image/mr4.jpeg', category: 'cat-me', alt: 'Me 4' },
  { id: 5, src: '/image/mygirl1.jpg', category: 'cat-girl', alt: 'Girl 1' },
  { id: 6, src: '/image/mygirl2.jpg', category: 'cat-girl', alt: 'Girl 2' },
  { id: 7, src: '/image/mygirl3.jpeg', category: 'cat-girl', alt: 'Girl 3' },
  { id: 8, src: '/image/mygirl4.jpeg', category: 'cat-girl', alt: 'Girl 4' },
  { id: 9, src: '/image/fam1.jpg', category: 'cat-fam', alt: 'Fam 1' },
  { id: 10, src: '/image/fam2.jpg', category: 'cat-fam', alt: 'Fam 2' },
  { id: 11, src: '/image/fam3.jpg', category: 'cat-fam', alt: 'Fam 3' },
  { id: 12, src: '/image/fam4.jpeg', category: 'cat-fam', alt: 'Fam 4' },
  { id: 13, src: '/image/bois1.jpg', category: 'cat-bois', alt: 'Bois 1' },
  { id: 14, src: '/image/bois2.jpg', category: 'cat-bois', alt: 'Bois 2' },
  { id: 15, src: '/image/bois3.jpeg', category: 'cat-bois', alt: 'Bois 3' },
  { id: 16, src: '/image/bois4.jpeg', category: 'cat-bois', alt: 'Bois 4' },
];

// --- Logic ---

// Computed property to automatically filter images
const filteredImages = computed(() => {
  return galleryImages.filter(img => img.category === activeFilter.value);
});

// Toggle Mobile Menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Set Filter
const setFilter = (category) => {
  activeFilter.value = category;
};

// Lightbox Handlers
const openLightbox = (src) => {
  currentLightboxImage.value = src;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  currentLightboxImage.value = '';
};
</script>

<template>
  <header class="header">
    <a href="#" class="logo">RKSG :3</a>
    <nav class="navbar">
      <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
        <li class="nav-item"><a href="#about" class="nav-link" @click="isMenuOpen = false">About Me</a></li>
        <li class="nav-item"><a href="#education" class="nav-link" @click="isMenuOpen = false">Education</a></li>
        <li class="nav-item"><a href="#gallery" class="nav-link" @click="isMenuOpen = false">Gallery</a></li>
        <li class="nav-item"><a href="#hobbies" class="nav-link" @click="isMenuOpen = false">Hobbies</a></li>
        <li class="nav-item"><a href="#resources" class="nav-link" @click="isMenuOpen = false">Resources</a></li>
      </ul>
      <div class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>

  <section id="about" class="section">
    <div class="container">
      <div class="about-content">
        <div class="text-side">
          <div class="mini-tagline">
            <span class="line"></span> PROFESSIONAL & LAZY
          </div>
          <h1 class="hero-name">
            <span class="top-text">MY NAME IS</span><br>
            <span class="bottom-text">KHALIL</span>
          </h1>
          <p class="hero-description">
            Hello! I am an Information Technology student and a self-proclaimed lazy developer.
            I focus on finding the most efficient solutions to complex problems.
          </p>
          <div class="social-icons">
            <a href="https://instagram.com/rei.sales" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/khalilgalido" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/khalil-galido-266030369/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="img-side">
          <img src="/image/nobg1.png" alt="Profile" class="hero-img">
        </div>
      </div>
    </div>
  </section>

  <section id="education" class="section">
    <div class="container">
      <h1 class="section-title">Education</h1>
      
      <div class="pill-timeline">
        <div class="timeline-line"></div>

        <div class="timeline-row left">
          <div class="timeline-dot"></div>
          <div class="timeline-date">September 2024</div>
          <div class="timeline-pill">
            <h3>Asia Pacific College</h3>
            <h4>Bachelor of Science</h4>
            <p>in Information Technology</p>
          </div>
          <div class="timeline-img">
            <img src="/image/Asia_Pacific_College_Logo(2).png" alt="APC">
          </div>
        </div>

        <div class="timeline-row right">
          <div class="timeline-dot"></div>
          <div class="timeline-date">August 2020</div>
          <div class="timeline-pill">
            <h3>Don Bosco Technical Institute</h3>
            <h4>STEM Strand</h4>
            <p>Graduated with Honors</p>
          </div>
          <div class="timeline-img">
            <img src="/image/db.png" alt="Don Bosco">
          </div>
        </div>

        <div class="timeline-row left">
            <div class="timeline-dot"></div>
            <div class="timeline-date">June 2016</div>
            <div class="timeline-pill">
                <h3>Thy Covenant Montessorri</h3>
                <h4>Secondary Education</h4>
                <p>With Honors</p>
            </div>
            <div class="timeline-img">
                <img src="/image/tcms.png" alt="TCMS">
            </div>
        </div>

        <div class="timeline-row right">
            <div class="timeline-dot"></div>
            <div class="timeline-date">June 2014</div>
            <div class="timeline-pill">
                <h3>PNOWA CLC</h3>
                <h4>Elementary Diploma</h4>
                <p>With Honors</p>
            </div>
            <div class="timeline-img">
                <img src="/image/pnowa.png" alt="PNOWA">
            </div>
        </div>

      </div>
    </div>
  </section>

  <section id="gallery" class="section">
    <div class="container">
      <h1 class="section-title">Gallery</h1>

      <div class="filter-container text-center mb-5">
        <button class="btn btn-custom-filter" :class="{ active: activeFilter === 'cat-me' }" @click="setFilter('cat-me')">Me</button>
        <button class="btn btn-custom-filter" :class="{ active: activeFilter === 'cat-girl' }" @click="setFilter('cat-girl')">Me n My Girl</button>
        <button class="btn btn-custom-filter" :class="{ active: activeFilter === 'cat-fam' }" @click="setFilter('cat-fam')">Me w The Fam</button>
        <button class="btn btn-custom-filter" :class="{ active: activeFilter === 'cat-bois' }" @click="setFilter('cat-bois')">Me n The bois</button>
      </div>

      <div class="gallery-flex-container">
        <div 
          v-for="img in filteredImages" 
          :key="img.id" 
          class="gallery-item"
        >
          <div class="gallery-wrap">
            <a href="javascript:void(0)" @click="openLightbox(img.src)">
              <img :src="img.src" :alt="img.alt">
              <div class="overlay"><i class="fas fa-search"></i></div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="lightboxOpen" class="lightbox-modal" @click.self="closeLightbox">
      <span class="close-modal" @click="closeLightbox">&times;</span>
      <img class="lightbox-content" :src="currentLightboxImage" alt="Expanded View">
    </div>
  </section>

  <section id="hobbies" class="section">
    <div class="container">
      <h1 class="section-title">Hobbies & Interests</h1>
      <div class="hobbies-list">
        <div class="hobby-card">
          <div class="icon-box"><i class="fas fa-basketball-ball"></i></div>
          <h3>Basketball</h3>
          <p>
            I'm a very active person, because I came from a sporty family...
            My favorite player is LEBONBON.
          </p>
        </div>
        <div class="hobby-card">
          <div class="icon-box"><i class="fas fa-gamepad"></i></div>
          <h3>Gaming</h3>
          <p>
            It may be a typical guy’s hobby, but it truly is a one-of-a-kind experience...
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="resources" class="section">
    <div class="container">
        <div class="resources-header">
            <h1 class="section-title">Resources</h1>
            <span class="header-line"></span>
        </div>
        <div class="resources-grid">
            <div class="resource-item"><a href="https://www.canva.com" target="_blank" class="resource-link">Canva</a> - For background designs.</div>
            <div class="resource-item"><a href="https://github.com" target="_blank" class="resource-link">GitHub</a> - Platform for version control.</div>
            <div class="resource-item"><a href="https://developer.mozilla.org" target="_blank" class="resource-link">HTML/CSS</a> - Documentation.</div>
            <div class="resource-item"><a href="https://gemini.google.com" target="_blank" class="resource-link">Gemini</a> - AI code assistance.</div>
        </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 Khalil Galido MIDTERM WEBPROG PROJECT.</p>
  </footer>
</template>

<style>
/* PASTE YOUR 'css/mystyle.css' CONTENT HERE 
  OR IMPORT IT. 
*/

/* Basic Layout resets needed if mystyle.css is missing */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Work Sans', sans-serif; }

/* Utility Classes used in Template */
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }
.section { padding: 60px 0; }
.section-title { text-align: center; margin-bottom: 40px; font-family: 'Abril Fatface', cursive; }
.text-center { text-align: center; }
.mb-5 { margin-bottom: 3rem; }

/* Navbar Active State for Mobile (Vue Logic) */
.nav-menu.active {
    /* Add your mobile menu visible styles here */
    left: 0; 
}

/* Lightbox Styles */
.lightbox-modal {
    position: fixed; z-index: 1000; left: 0; top: 0;
    width: 100%; height: 100%; overflow: auto;
    background-color: rgba(0,0,0,0.9);
    display: flex; justify-content: center; align-items: center;
}
.lightbox-content {
    max-width: 90%; max-height: 80%;
}
.close-modal {
    position: absolute; top: 15px; right: 35px;
    color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;
}

/* Gallery Filter Active State */
.btn-custom-filter.active {
    background-color: #333; /* Change to your theme color */
    color: white;
}
</style>