<template>
  <section ref="sloganRef" class="slogan-section">
    <div class="container">
      <div class="slogan-content">
        <h2 class="slogan-text">
          <span class="highlight">Jeder Betrieb</span> verdient eine 
          <a href="#main-services-view-link" class="highlight-a">schöne, individuelle Webseite</a>, 
          die nicht nur gut aussieht, sondern 
          <span class="highlight">wirklich praktikabel ist</span> – 
          unabhängig vom Budget oder technischer Vorerfahrung.
        </h2>
      </div>
      <div class="accent-line"></div>
    </div>
  </section>
</template>

<script setup>
import router from '@/router'
import { ref, onMounted } from 'vue'

const sloganRef = ref(null)

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
})
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
}

@media (max-width: 480px) {
  .slogan-section {
    padding: 40px 10px;
  }
  
  .quote-mark {
    font-size: 2.5rem;
  }
}
</style>