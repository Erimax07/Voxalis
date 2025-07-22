<template>
  <div class="services-view">
    <!-- Header Section -->
    <div class="services-header">
      <div class="header-content">
        <h1 class="services-title">Unsere Dienste</h1>
        <p class="services-subtitle">
          Webseiten mit Charakter und Social Media Marketing, das wirklich ankommt! Mit frischen Ideen und einem Gespür für Trends bringen wir Ihre Marke ins digitale Rampenlicht.
        </p>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="services-container">
      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="service-island"
          @click="navigateToService(service.id)"
        >
          <!-- Service Image -->
          <div class="service-image-container">
            <img 
              :src="service.image" 
              :alt="service.title"
              class="service-image"
              loading="lazy"
            />
            <div class="image-overlay">
              <div class="overlay-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Service Content -->
          <div class="service-content">
            <div class="service-header">
              <h3 class="service-title">{{ service.title }}</h3>
              <div class="service-category">{{ service.category }}</div>
            </div>
            
            <p class="service-description">{{ service.description }}</p>
            
            <div class="service-features">
              <div 
                v-for="feature in service.features" 
                :key="feature"
                class="feature-tag"
              >
                {{ feature }}
              </div>
            </div>
            
            <div class="service-footer">
              <div class="service-action">
                <span class="action-text">Zu den Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Sind Sie bereit, loszulegen?</h2>
        <p class="cta-description">
          Kontaktieren Sie uns noch heute, um Ihre spezifischen Anforderungen zu besprechen und die perfekte Lösung zu finden
        </p>
        <RouterLink to="contact" class="cta-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Kontaktieren sie uns
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Services data - replace with your actual services
const services = ref([
  {
    id: 1,
    title: 'Web Entwicklung',
    link: '/services/webentwicklung',
    category: 'Development',
    description: 'Wir entwickeln gemeinsam mit Ihnen eine maßgeschneiderte, professionelle Webseite, die den Charakter Ihres Unternehmens widerspiegelt. In einfacher, partnerschaftlicher Zusammenarbeit schaffen wir einen digitalen Auftritt, der wirkt und begeistert. Zudem übernehmen wir die Verwaltung der Webseite.“ oder „Ihr Unternehmen hat Persönlichkeit – und das soll man sehen! Mit Ihnen gemeinsam programmieren wir eine individuelle Webseite, die Ihren wahren Charakter zeigt. Ganz unkompliziert und mit einem echten Blick fürs Detail. Zudem übernehmen wir die Verwaltung der Webseite.',
    image: '/images/programmingService.jpg',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
  },
  {
    id: 2,
    title: 'Social Media Marketing',
    link: '/services/socialmediamarketing',
    category: 'Marketing',
    description: 'Mit unserer umfassenden Erfahrung im Social Media Marketing entwickeln wir gemeinsam mit Ihnen eine individuelle Strategie, die das Wachstum Ihres Unternehmens gezielt fördert. Wir erstellen hochwertige Inhalte und übernehmen die Accountverwaltung – verständlich, effizient und transparent.',
    image: '/images/marketingService.jpg',
    features: ['UI/UX Design', 'Prototyping', 'User Testing']
  }
])

// Navigation methods
const navigateToService = (serviceId) => {
    var id = services.value.findIndex(service => service.id === serviceId);
    console.log(id);
    router.push(services.value[id].link);
    
}

const navigateToContact = () => {

}
</script>

<style scoped>

.services-view {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--secondary-color) 0%, #f8f9fa 100%);
}

/* Header Section */
.services-header {
  padding: 4rem 2rem 2rem;
  text-align: center;
  background: white;
  border-bottom: 1px solid var(--line-color);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.services-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.services-subtitle {
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.7;
  margin: 0;
  line-height: 1.6;
}

/* Services Container */
.services-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  align-items: stretch;
}

/* Service Island */
.service-island {
  background: white;
  border-radius: calc(var(--border-radius) * 2);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
  cursor: pointer;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-island:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--primary-color);
}

/* Service Image */
.service-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.service-island:hover .service-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: var(--transition);
  backdrop-filter: blur(10px);
}

.service-island:hover .image-overlay {
  opacity: 1;
  transform: scale(1);
}

.overlay-icon {
  color: var(--text-color);
}

/* Service Content */
.service-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.service-header {
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.service-category {
  display: inline-block;
  padding: 4px 12px;
  background: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.service-description {
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

/* Service Features */
.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  padding: 6px 12px;
  background: var(--secondary-color);
  color: var(--text-color);
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 500;
}

/* Service Footer */
.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--line-color);
  margin-top: auto;
}

.service-price {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.price-label {
  font-size: 0.75rem;
  color: var(--text-color);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.price-value {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--accent-color);
}

.service-action {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--primary-color);
  font-weight: 500;
  transition: var(--transition);
}

.service-island:hover .service-action {
  color: var(--accent-color);
  transform: translateX(4px);
}

/* CTA Section */
.cta-section {
  background: var(--text-color);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.cta-description {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.cta-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
}

@media (max-width: 768px) {
  .services-header {
    padding: 3rem 1rem 1.5rem;
  }
  
  .services-title {
    font-size: 2.5rem;
  }
  
  .services-container {
    padding: 3rem 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .cta-section {
    padding: 3rem 1rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .services-title {
    font-size: 2rem;
  }
  
  .services-subtitle {
    font-size: 1rem;
  }
  
  .service-content {
    padding: 1.25rem;
  }
  
  .service-title {
    font-size: 1.25rem;
  }
  
  .cta-title {
    font-size: 1.75rem;
  }
}
</style>