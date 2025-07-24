<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const activeValue = ref('visibility')

onMounted(() => {
  isVisible.value = true
})



const teamMembers = [
  {
    name: 'Erik',
    role: 'Web Development & Strategy',
    image: '/images/erik-placeholder.jpg',
    description: 'Erik bringt technische Expertise und strategisches Denken zusammen. Mit seinem Blick für Details und modernen Entwicklungsansätzen schafft er Webseiten, die nicht nur gut aussehen, sondern auch performen.',
    skills: ['Vue.js & React', 'UX/UI Design', 'SEO Optimierung', 'Performance']
  },
  {
    name: 'Paul',
    role: 'Social Media & Marketing',
    image: '/images/paul-placeholder.jpg',
    description: 'Paul versteht es, Geschichten zu erzählen, die bewegen. Seine Kreativität und sein Gespür für Trends machen aus Ihren Inhalten echte Magneten für Ihre Zielgruppe.',
    skills: ['Content Creation', 'Social Strategy', 'Community Management', 'Analytics']
  }
]

const stats = [
  { number: '2024', label: 'Gegründet' },
  { number: '50+', label: 'Projekte' },
  { number: '25+', label: 'Zufriedene Kunden' },
  { number: '100%', label: 'Leidenschaft' }
]
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section" :class="{ 'fade-in': isVisible }">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Über uns</h1>
          <div class="hero-text">
            <p class="intro-text">
              Wir sind ein junges Unternehmen, das sich auf Webentwicklung und Social Media Marketing spezialisiert hat. Für uns geht es allerdings nicht nur darum Webseiten zu bauen.
            </p>
            <p class="mission-text">
              <strong>Es geht darum Unternehmen sichtbar zu machen, Vertrauen zu schaffen und Wachstum zu ermöglichen.</strong>
            </p>
            <p class="belief-text">
              Wir glauben: Wer etwas leistet, sollte auch online dafür stehen können. <em>Und dafür sind wir da.</em>
            </p>
          </div>
        </div>
        
      </div>
    </section>



    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">Unser Team</h2>
        <p class="section-subtitle">Die Köpfe hinter den Ideen</p>
        
        <div class="team-grid">
          <div 
            v-for="member in teamMembers" 
            :key="member.name" 
            class="team-card"
          >
            <div class="member-image">
              <div class="image-placeholder">
                <span class="member-initial">{{ member.name.charAt(0) }}</span>
              </div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-description">{{ member.description }}</p>
              <div class="member-skills">
                <span 
                  v-for="skill in member.skills" 
                  :key="skill" 
                  class="skill-tag"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-content">
          <h2 class="story-title">Unsere Geschichte</h2>
          <div class="story-text">
            <p>
              Als wir 2024 starteten, hatten wir eine klare Vision: Kleine und mittelständische Unternehmen verdienen dieselbe professionelle Online-Präsenz wie die Großen. Oft fehlt es jedoch an Zeit, Ressourcen oder dem technischen Know-how.
            </p>
            <p>
              Genau hier setzen wir an. Mit unserer Kombination aus technischer Expertise und kreativer Leidenschaft helfen wir Unternehmen dabei, ihre wahre Stärke online zu zeigen. Jedes Projekt ist für uns einzigartig – genau wie das Unternehmen dahinter.
            </p>
            <p>
              <strong>Unser Antrieb?</strong> Die Überzeugung, dass gute Arbeit belohnt werden sollte – durch Sichtbarkeit, Vertrauen und messbares Wachstum.
            </p>
          </div>
        </div>
      </div>
    </section>

   

   
  </div>
</template>

<style scoped>
:root {
  --primary-color: #b49999;
  --secondary-color: #ecf0f1;
  --accent-color: #3498db;
  --text-color: #2c3e50;
  --line-color: #bdc3c7;
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

.about-page {
  min-height: 100vh;
  color: var(--text-color);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--secondary-color) 0%, #f8f9fa 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.hero-section.fade-in {
  animation: fadeInUp 1s ease-out;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 40px;
  font-weight: 300;
}

.hero-text {
  font-size: 1.1rem;
  line-height: 1.7;
}

.hero-text p {
  margin-bottom: 20px;
}

.intro-text {
  color: var(--text-color);
}

.mission-text {
  color: var(--primary-color);
  font-size: 1.2rem;
}

.belief-text {
  color: var(--text-color);
  font-style: italic;
}

/* Team Section */
.team-section {
  background: var(--secondary-color);
  padding: 80px 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.team-card {
  background: white;
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: var(--transition);
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.member-image {
  text-align: center;
  margin-bottom: 30px;
}

.image-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.member-initial {
  font-size: 3rem;
  color: white;
  font-weight: bold;
}

.member-name {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 8px;
  text-align: center;
}

.member-role {
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
}

.member-description {
  line-height: 1.6;
  margin-bottom: 25px;
  text-align: center;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.skill-tag {
  background: var(--secondary-color);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-color);
  font-weight: 500;
}



/* Story Section */
.story-section {
  padding: 80px 0;
  background: var(--secondary-color);
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.story-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 40px;
}

.story-text {
  font-size: 1.2rem;
  line-height: 1.7;
}

.story-text p {
  margin-bottom: 25px;
}



/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  

}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  

}
</style>