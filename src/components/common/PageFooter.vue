<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-logo">Voxalis</h3>
        <p class="footer-description">
          Jedes Betrieb verdient eine professionelle, individuelle Webseite, die nicht nur gut aussieht, sondern wirklich zielführend ist- unabhängig vom Budget oder technischer Vorerfahrung
        </p>
      </div>
      
      <div class="footer-section">
        <h4>Services</h4>
        <ul class="footer-links">
          <li><router-link to="/services/webentwicklung">Websiten Entwicklung</router-link></li>
          <li><router-link to="/services/socialmediamarketing">Social Media Marketing</router-link></li>
          <!-- <li><router-link to="/services">SEO Optimization</router-link></li> -->
          <!-- <li><router-link to="/services">Content Creation</router-link></li> -->
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Company</h4>
        <ul class="footer-links">
          <li><router-link to="/about">Über</router-link></li>
          <!-- <li><router-link to="/portfolio">Portfolio</router-link></li> -->
          <li><router-link to="/contact">Kontakt</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <router-link to="/contact" class="no-decoration"><h4>Kontakt</h4></router-link>
        <div class="social-links">
          <!-- <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">Twitter</a> -->
        </div>
        <div class="contact-info">
          <router-link to="/contact" class="no-decoration"><p>Email: {{ contact.email.primary }}</p></router-link>
          <router-link to="/contact" class="no-decoration"><p>Telefon: {{ contact.phone.primary }}</p></router-link>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; {{ currentYear }} Voxalis. All rights reserved.</p>
        <div class="legal-links">
          <a href="#">Datenschutzeinstellungen </a>
          <a href="#">Nutzungsbedingungen</a>
          <a href="#">Impressum</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { contact } from '@/config/seiteConfig';
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>

.no-decoration{
  text-decoration: none;
}

.app-footer {
  background-color: black;
  color: #ffffff;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #ffffff;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer-description {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #3498db;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-link {
  color: #cccccc;
  text-decoration: none;
  padding: 0.5rem;
  border: 1px solid #333333;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #ffffff;
  border-color: #3498db;
  background-color: #3498db;
}

.contact-info p {
  color: #cccccc;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding: 1rem 0;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.legal-links {
  display: flex;
  gap: 1rem;
}

.legal-links a {
  color: #cccccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #3498db;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 1.5rem 1rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>