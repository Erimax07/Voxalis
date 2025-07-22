<template>
  <div class="main-services-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Professionelle Webseiten für kleine Unternehmen
          </h1>
          
          <div class="hero-actions">
            <router-link 
              to="/services" 
              class="cta-button primary"
              @click="trackServiceClick"
            >
              Unsere Services entdecken
            </router-link>
            <button
              class="cta-button secondary"
              href="#features-section-scroll"
            >
              Mehr erfahren
        </button>
          </div>
        </div>
        <!-- <div class="hero-visual">
          <div class="website-mockup">
            <div class="mockup-header">
              <div class="mockup-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="mockup-content">
              <div class="mockup-element header"></div>
              <div class="mockup-element nav"></div>
              <div class="mockup-element content-1"></div>
              <div class="mockup-element content-2"></div>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Features Overview -->
    <section ref="featuresSection" class="features-section" id="features-section-scroll">
      <div class="container">
        <h2 class="section-title">Was wir für Ihr Unternehmen tun</h2>
        <div class="features-grid">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            class="feature-card"
            :class="{ 'animate': isVisible }"
          >
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
        <div class="features-cta">
          <router-link 
            to="/services" 
            class="services-link"
            @click="trackServiceClick"
          >
            Alle Services im Detail ansehen
            <span class="arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-section">
      <div class="container">
        <div class="why-choose-content">
          <div class="why-choose-text">
            <h2 class="section-title">Warum unsere Webseiten?</h2>
            <ul class="benefits-list">
              <li v-for="benefit in benefits" :key="benefit">
                <span class="check-icon">✓</span>
                {{ benefit }}
              </li>
            </ul>
            <router-link 
              to="/services" 
              class="cta-button primary"
              @click="trackServiceClick"
            >
              Jetzt Services ansehen
            </router-link>
          </div>
          <div class="why-choose-visual">
            <div class="stats-card">
              <div class="stat">
                <span class="stat-number">!100+</span>
                <span class="stat-label">!Zufriedene Kunden</span>
              </div>
              <div class="stat">
                <span class="stat-number">!24/7</span>
                <span class="stat-label">!Support</span>
              </div>
              <div class="stat">
                <span class="stat-number">!30 Tage</span>
                <span class="stat-label">!Geld-zurück-Garantie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const featuresSection = ref(null)
const isVisible = ref(false)

// Data
const slogan = ref("Jeder Betrieb verdient eine schöne, individuelle Webseite die nicht nur gut aussieht, sondern wirklich praktikabel ist unabhängig vom Budget oder technischer Vorerfahrung.")

const features = reactive([
  {
    id: 1,
    icon: '🎨',
    title: 'Individuelles Design',
    description: 'Maßgeschneiderte Webseiten, die Ihr Unternehmen perfekt repräsentieren'
  },
  {
    id: 2,
    icon: '📃',
    title: 'Eigene Anpassung',
    description: 'Wir sorgen dafür, dass sie ihre eigene Wepseite verwalten und anpassen können.'
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Schnell & Sicher',
    description: 'Blitzschnelle Ladezeiten und höchste Sicherheitsstandards'
  },
  {
    id: 4,
    icon: '🚀',
    title: 'SEO-Optimiert',
    description: 'Bessere Sichtbarkeit bei Google und anderen Suchmaschinen'
  },
  {
    id: 5,
    icon: '💰',
    title: 'Fair & Transparent',
    description: 'Klare Preise ohne versteckte Kosten für jedes Budget'
  },
  {
    id: 6,
    icon: '🛠️',
    title: 'Einfache Wartung',
    description: 'Benutzerfreundliche Verwaltung ohne technische Vorkenntnisse durch Wordpress'
  }
])

const benefits = reactive([
  'Vollständige Kontrolle über Ihre Webseite',
  'Persönlicher Ansprechpartner',
  'Schnelle Umsetzung',
  'Nachhaltige Lösungen'
])

// Methods
const scrollToWepsite = () => {
  featuresSection.value?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}
const scrollToFeatures = () => {
  featuresSection.value?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

const trackServiceClick = () => {
  // Analytics tracking could be added here
  console.log('User clicked on services link')
}

// Intersection Observer for animations
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible.value = true
    }
  })
}

onMounted(() => {
  if (featuresSection.value) {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3
    })
    observer.observe(featuresSection.value)
  }
})
</script>

<style scoped>
/* CSS Variables */
:root {
  --primary-color: #b49999;
  --secondary-color: #ecf0f1;
  --accent-color: #3498db;
  --text-color: #2c3e50;
  --line-color: #bdc3c7;
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

.main-services-view {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--secondary-color) 0%, #fff 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23bdc3c7" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.1;
}

.hero-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1.2;
  margin-bottom: 30px;
}

.hero-slogan {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 15px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  transition: var(--transition);
  cursor: pointer;
  font-size: 1rem;
}

.cta-button.primary {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 4px 15px rgba(180, 153, 153, 0.3);
}

.cta-button.primary:hover {
  background: #a08888;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(180, 153, 153, 0.4);
}

.cta-button.secondary {
  background: transparent;
  color: var(--text-color);
  border-color: var(--line-color);
}

.cta-button.secondary:hover {
  background: var(--secondary-color);
  border-color: var(--primary-color);
}

/* Website Mockup */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.website-mockup {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid var(--line-color);
}

.mockup-header {
  background: #f8f9fa;
  padding: 15px 20px;
  border-bottom: 1px solid var(--line-color);
}

.mockup-dots {
  display: flex;
  gap: 8px;
}

.mockup-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--line-color);
}

.mockup-dots span:nth-child(1) { background: #ff5f57; }
.mockup-dots span:nth-child(2) { background: #ffbd2e; }
.mockup-dots span:nth-child(3) { background: #28ca42; }

.mockup-content {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mockup-element {
  border-radius: 4px;
  background: var(--secondary-color);
}

.mockup-element.header {
  height: 40px;
  background: var(--primary-color);
  opacity: 0.3;
}

.mockup-element.nav {
  height: 20px;
  width: 60%;
  background: var(--accent-color);
  opacity: 0.3;
}

.mockup-element.content-1 {
  height: 60px;
}

.mockup-element.content-2 {
  height: 40px;
  width: 80%;
}

/* Features Section */
.features-section {
  padding: 100px 0;
  background: white;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-color);
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: var(--border-radius);
  background: white;
  border: 1px solid var(--line-color);
  transition: var(--transition);
  opacity: 0;
  transform: translateY(30px);
}

.feature-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 15px;
}

.feature-description {
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
}

.features-cta {
  text-align: center;
}

.services-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 15px 30px;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.services-link:hover {
  background: var(--secondary-color);
  transform: translateX(5px);
}

.arrow {
  transition: var(--transition);
}

.services-link:hover .arrow {
  transform: translateX(5px);
}

/* Why Choose Section */
.why-choose-section {
  background: var(--secondary-color);
  padding: 100px 0;
}

.why-choose-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: var(--text-color);
}

.check-icon {
  color: #27ae60;
  font-weight: bold;
  font-size: 1.2rem;
}

.stats-card {
  background: white;
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .why-choose-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .stats-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-slogan {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
}
</style>