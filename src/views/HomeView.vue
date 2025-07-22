<template>
  <section  class="slogan-section">
    <div class="container">
      <div class="slogan-content">
        <h2 class="slogan-text">
          <strong>Jeder Betrieb</strong> verdient eine 
          <a href="#main-services-view-link" class="highlight-a">schöne, individuelle Webseite</a>, 
          die nicht nur professionell aussieht, sondern 
          <strong>wirklich praktikabel</strong> ist - 
          <!-- unabhängig vom Budget oder technischer Vorerfahrung. -->Ja
        </h2>
      </div>
      <div class="accent-line"></div>
    </div>
  </section>
  <div class="main-services-view" id="main-services-view-link">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">
                        Professionelle Webseiten für kleine Unternehmen
                    </h1>

                    <div class="hero-actions">
                        <router-link to="/services" class="cta-button primary" @click="trackServiceClick">
                            Unsere Services entdecken
                        </router-link>
                        <a href="#features-section-scroll" class="cta-button secondary">

                            Mehr erfahren


                        </a>
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
                    <div v-for="feature in features" :key="feature.id" class="feature-card"
                        :class="{ 'animate': isVisible }">
                        <div class="feature-icon">
                            {{ feature.icon }}
                        </div>
                        <h3 class="feature-title">{{ feature.title }}</h3>
                        <p class="feature-description">{{ feature.description }}</p>
                    </div>
                </div>
                <div class="features-cta">
                    <router-link to="/services/webentwicklung" class="services-link" @click="trackServiceClick">
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
                        <router-link to="/services" class="cta-button primary">
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
    <div class="social-media-view" id="social-media-view-link">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">
                        Social Media Marketing für lokale Unternehmen
                    </h1>
                    <p class="hero-slogan">
                        Erreichen Sie mehr Kunden durch professionelle Social Media Präsenz. 
                        Von Content-Erstellung bis Community-Management – alles aus einer Hand.
                    </p>

                    <div class="hero-actions">
                        <router-link to="/social-media-services" class="cta-button primary" @click="trackSocialMediaClick">
                            Social Media Services
                        </router-link>
                        <a href="#social-features-section" class="cta-button secondary">
                            Mehr erfahren
                        </a>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="social-mockup">
                        <div class="phone-mockup">
                            <div class="phone-screen">
                                <div class="social-post" v-for="(post, index) in mockupPosts" :key="index" 
                                     :style="{ animationDelay: index * 0.3 + 's' }">
                                    <div class="post-header">
                                        <div class="profile-pic" :style="{ backgroundColor: post.color }"></div>
                                        <div class="post-info">
                                            <span class="business-name">{{ post.business }}</span>
                                            <span class="post-time">{{ post.time }}</span>
                                        </div>
                                    </div>
                                    <div class="post-content" :style="{ backgroundColor: post.bgColor }">
                                        <span class="post-icon">{{ post.icon }}</span>
                                    </div>
                                    <div class="post-actions">
                                        <span class="action-icon">❤️</span>
                                        <span class="action-icon">💬</span>
                                        <span class="action-icon">📤</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Overview -->
        <section ref="socialFeaturesSection" class="features-section" id="social-features-section">
            <div class="container">
                <h2 class="section-title">Ihre Social Media Erfolgsgeschichte</h2>
                <div class="features-grid">
                    <div v-for="(feature, index) in socialFeatures" :key="feature.id" class="feature-card"
                        :class="{ 'animate': isVisible }" 
                        :style="{ animationDelay: (index * 0.15) + 's' }">
                        <div class="feature-icon" :style="{ background: feature.gradient }">
                            {{ feature.icon }}
                        </div>
                        <h3 class="feature-title">{{ feature.title }}</h3>
                        <p class="feature-description">{{ feature.description }}</p>
                        <div class="feature-stats" v-if="feature.stats">
                            <span class="stat-highlight">{{ feature.stats }}</span>
                        </div>
                    </div>
                </div>
                <div class="features-cta">
                    <router-link to="/services/socialmediamarketing" class="services-link" @click="trackSocialMediaClick">
                        Alle Social Media Services ansehen
                        <span class="arrow">→</span>
                    </router-link>
                </div>
            </div>
        </section>

        

        
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const sloganRef = ref(null);
const router = useRouter();
const featuresSection = ref(null);
const isVisible = ref(false);
const socialFeaturesSection = ref(null)


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { 
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  })

  if (sloganRef.value) {
    observer.observe(sloganRef.value)
  }
      if (featuresSection.value) {
        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.3
        })
        observer.observe(featuresSection.value)
    }
        if (socialFeaturesSection.value) {
        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.3
        })
        observer.observe(socialFeaturesSection.value)
    }
})




// Data

// Mock data for phone display
const mockupPosts = reactive([
    { business: 'Café Luna', time: '2h', icon: '☕', color: '#8B4513', bgColor: '#FFF8DC' },
    { business: 'Blumen Schmidt', time: '4h', icon: '🌸', color: '#FF69B4', bgColor: '#FFF0F5' },
    { business: 'Auto Meyer', time: '1d', icon: '🚗', color: '#4169E1', bgColor: '#F0F8FF' }
])
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



// Social media features
const socialFeatures = reactive([
    {
        id: 1,
        icon: '📱',
        title: 'Content Creation',
        description: 'Professionelle Posts, Stories und Videos für alle sozialen Netzwerke',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        stats: 'iWHUERFGIAwhg'
    },
    {
        id: 2,
        icon: '🎯',
        title: 'Zielgruppen-Marketing',
        description: 'Erreichen Sie genau die Kunden, die Sie suchen - lokal und überregional',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        stats: '+200% Reichweite'
    },
    {
        id: 3,
        icon: '📊',
        title: 'Performance Tracking',
        description: 'Detaillierte Analysen und monatliche Reports für nachhaltigen Erfolg',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        stats: 'Transparente Erfolge'
    },
    {
        id: 4,
        icon: '💬',
        title: 'Community Management',
        description: 'Professionelle Betreuung Ihrer Community und schnelle Kundenanfragen',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        stats: '< 2h Antwortzeit'
    },
    {
        id: 5,
        icon: '🚀',
        title: 'Advertising Kampagnen',
        description: 'Gezielte Werbeanzeigen für maximale Sichtbarkeit bei minimalem Budget',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        stats: 'ROI +300%'
    },
    {
        id: 6,
        icon: '🎨',
        title: 'Brand Design',
        description: 'Einheitliches Design für alle Plattformen - Ihre Marke im Fokus',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        stats: 'Wiedererkennungswert'
    }
])

// Platform data
const platforms = reactive([
    { name: 'Facebook', icon: 'f', color: '#1877F2' },
    { name: 'Instagram', icon: '📷', color: '#E4405F' },
    { name: 'LinkedIn', icon: 'in', color: '#0077B5' },
    { name: 'TikTok', icon: '🎵', color: '#000000' },
    { name: 'YouTube', icon: '▶️', color: '#FF0000' },
    { name: 'X (Twitter)', icon: '🐦', color: '#1DA1F2' }
])

// Chart data for engagement visualization
const chartData = reactive([
    { height: 25, color: '#b49999', label: '1K' },
    { height: 45, color: '#3498db', label: '2.5K' },
    { height: 70, color: '#27ae60', label: '4K' },
    { height: 90, color: '#e74c3c', label: '6.2K' }
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

// Methods
const trackSocialMediaClick = () => {
    // Analytics tracking for social media clicks
    console.log('Social Media service clicked')
}

// Intersection Observer for animations
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isVisible.value = true
        }
    })
}


</script>

<style scoped>
:root {
  --primary-color: #b0b0b0;
  --secondary-color: #ededed;
  --accent-color: #6faed9;
  --text-color: #2c3e50;
  --line-color: #bdc3c7;
  --border-radius: 8px;
}

.slogan-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--secondary-color) 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slogan-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.slogan-content {
  text-align: center;
  position: relative;
}

.quote-mark {
  font-size: 4rem;
  color: var(--accent-color);
  font-family: Georgia, serif;
  line-height: 1;
  opacity: 0;
  transform: scale(0.5);
  animation: quote-fade-in 0.8s ease forwards;
}

.animate-in .quote-mark {
  animation-delay: 0.3s;
}

.quote-mark.closing {
  animation-delay: 1.2s;
  margin-left: auto;
  margin-right: 0;
  text-align: right;
}

.slogan-text {
  font-size: clamp(1.5rem, 3.5vw, 2.8rem);
  font-weight: 300;
  line-height: 1.4;
  color: var(--text-color);
  margin: 30px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  opacity: 0;
  transform: translateY(20px);
  animation: text-slide-in 1s ease forwards;
}

.animate-in .slogan-text {
  animation-delay: 0.5s;
}

.highlight {
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  animation: underline-grow 0.8s ease forwards;
}

.highlight-a{
  color: var(--accent-color);
  text-decoration: none;
}

.animate-in .highlight:nth-child(1)::after {
  animation-delay: 1s;
}

.animate-in .highlight:nth-child(2)::after {
  animation-delay: 1.3s;
}

.animate-in .highlight:nth-child(3)::after {
  animation-delay: 1.6s;
}

.accent-line {
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
  margin: 40px auto 0;
  border-radius: 2px;
  opacity: 0;
  transform: scaleX(0);
  animation: line-expand 0.6s ease forwards;
}

.animate-in .accent-line {
  animation-delay: 1.8s;
}

/* Background decoration */
.slogan-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(111, 174, 217, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.slogan-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(176, 176, 176, 0.08) 0%, transparent 70%);
  border-radius: 50%;
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

.mockup-dots span:nth-child(1) {
    background: #ff5f57;
}

.mockup-dots span:nth-child(2) {
    background: #ffbd2e;
}

.mockup-dots span:nth-child(3) {
    background: #28ca42;
}

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

.social-media-view {
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 80px 0;
    position: relative;
    overflow: hidden;
    color: white;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="1" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1.5" fill="white" opacity="0.1"/></svg>');
}

.hero-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: white;
    line-height: 1.2;
    margin-bottom: 30px;
}

.hero-slogan {
    font-size: 1.25rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
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
    background: rgba(255, 255, 255, 0.2);
    color: white;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button.primary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.cta-button.secondary {
    background: transparent;
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
}

.cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
}

/* Social Media Mockup */
.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-mockup {
    perspective: 1000px;
}

.phone-mockup {
    width: 300px;
    height: 600px;
    background: #000;
    border-radius: 25px;
    padding: 20px 15px;
    position: relative;
    transform: rotateY(-15deg) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.phone-screen {
    width: 100%;
    height: 100%;
    background: #f8f9fa;
    border-radius: 20px;
    padding: 20px 15px;
    overflow: hidden;
    position: relative;
}

.social-post {
    background: white;
    border-radius: 12px;
    margin-bottom: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    animation: slideInPost 0.6s ease forwards;
    opacity: 0;
    transform: translateX(50px);
}

@keyframes slideInPost {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.post-header {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    gap: 10px;
}

.profile-pic {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: var(--accent-color);
}

.post-info {
    display: flex;
    flex-direction: column;
}

.business-name {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--text-color);
}

.post-time {
    font-size: 0.75rem;
    color: #666;
}

.post-content {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background: var(--secondary-color);
}

.post-actions {
    display: flex;
    gap: 20px;
    padding: 10px 15px;
    border-top: 1px solid #eee;
}

.action-icon {
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s;
}

.action-icon:hover {
    transform: scale(1.1);
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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.feature-card {
    text-align: center;
    padding: 40px 30px;
    border-radius: 15px;
    background: white;
    border: 1px solid var(--line-color);
    transition: var(--transition);
    opacity: 0;
    transform: translateY(30px);
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
}

.feature-card:hover::before {
    left: 100%;
}

.feature-card.animate {
    opacity: 1;
    transform: translateY(0);
}

.feature-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border-color: transparent;
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
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
    margin-bottom: 15px;
}

.feature-stats {
    margin-top: 15px;
}

.stat-highlight {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
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

/* Platforms Section */
.platforms-section {
    background: var(--secondary-color);
    padding: 100px 0;
}

.platforms-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.platforms-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
}

.platform-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: var(--border-radius);
    color: white;
    font-weight: 600;
    transition: var(--transition);
    cursor: pointer;
}

.platform-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.platform-icon {
    font-size: 2rem;
    margin-bottom: 8px;
}

.platform-name {
    font-size: 0.9rem;
}

/* Engagement Chart */
.engagement-chart {
    background: white;
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.engagement-chart h3 {
    text-align: center;
    color: var(--text-color);
    margin-bottom: 30px;
}

.chart-bars {
    display: flex;
    align-items: end;
    gap: 20px;
    height: 200px;
    margin-bottom: 10px;
}

.chart-bar {
    flex: 1;
    border-radius: 4px 4px 0 0;
    position: relative;
    animation: growBar 1s ease forwards;
    transform-origin: bottom;
    transform: scaleY(0);
}

@keyframes growBar {
    to {
        transform: scaleY(1);
    }
}

.bar-label {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-color);
}

.chart-labels {
    display: flex;
    justify-content: space-between;
    color: #666;
    font-size: 0.9rem;
}

/* Success Section */
.success-section {
    padding: 100px 0;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    color: white;
}

.success-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.success-card {
    text-align: center;
    padding: 40px 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: var(--transition);
}

.success-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
}

.success-icon {
    font-size: 3rem;
    margin-bottom: 20px;
}

.success-metric {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.success-description {
    opacity: 0.9;
    line-height: 1.6;
}

/* Animations */
@keyframes quote-fade-in {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(-10deg);
  }
  to {
    opacity: 0.7;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes text-slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underline-grow {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes line-expand {
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .slogan-section {
    padding: 60px 15px;
  }
  
  .quote-mark {
    font-size: 3rem;
  }
  
  .slogan-text {
    margin: 20px 0;
  }
  
  .accent-line {
    width: 60px;
    margin-top: 30px;
  }
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
        .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }

    .phone-mockup {
        transform: none;
        width: 250px;
        height: 500px;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .platforms-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .platforms-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .success-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
  .slogan-section {
    padding: 40px 10px;
  }
  
  .quote-mark {
    font-size: 2.5rem;
  }
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
    .hero-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .platforms-grid {
        grid-template-columns: 1fr;
    }

    .success-grid {
        grid-template-columns: 1fr;
    }
}
</style>











