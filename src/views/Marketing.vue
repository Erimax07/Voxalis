<script setup>
import router from '@/router'
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const activeTab = ref('strategy')

onMounted(() => {
    isVisible.value = true
})

const socialMediaAspects = [
    {
        id: 'strategy',
        title: 'Individuelle Strategie',
        icon: '🎯',
        description: 'Wir entwickeln eine maßgeschneiderte Social Media Strategie, die perfekt zu Ihrem Unternehmen und Ihren Zielen passt.',
        details: [
            'Zielgruppenanalyse und Persona-Entwicklung',
            'Plattform-spezifische Strategieentwicklung',
            'Content-Kalender und Posting-Zeitpläne',
            'Messbare Ziele und KPI-Definition'
        ]
    },
    {
        id: 'content',
        title: 'Hochwertige Inhalte',
        icon: '✨',
        description: 'Wir erstellen ansprechende, authentische Inhalte, die Ihre Zielgruppe begeistern und zum Handeln motivieren.',
        details: [
            'Professionelle Grafiken und Videos',
            'Authentische Texte mit Persönlichkeit',
            'Story-basierte Content-Formate',
            'Trend-bewusste und zeitgemäße Inhalte'
        ]
    },
    {
        id: 'management',
        title: 'Accountverwaltung',
        icon: '⚙️',
        description: 'Wir übernehmen die komplette Verwaltung Ihrer Social Media Accounts, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
        details: [
            'Tägliche Betreuung und Monitoring',
            'Community Management und Interaktion',
            'Regelmäßige Performance-Analysen',
            'Proaktive Krisenkommunikation'
        ]
    },
    {
        id: 'growth',
        title: 'Gezieltes Wachstum',
        icon: '📈',
        description: 'Mit datenbasierten Ansätzen und bewährten Methoden fördern wir das organische Wachstum Ihrer Online-Präsenz.',
        details: [
            'Follower-Aufbau durch echte Interaktion',
            'Engagement-Rate Optimierung',
            'Reichweiten-Steigerung durch smarte Hashtags',
            'Conversion-optimierte Call-to-Actions'
        ]
    }
]

const processSteps = [
    {
        step: '1',
        title: 'Analyse & Beratung',
        description: 'Wir analysieren Ihre aktuelle Situation und entwickeln gemeinsam Ziele'
    },
    {
        step: '2',
        title: 'Strategieentwicklung',
        description: 'Individuelle Social Media Strategie für Ihr Unternehmen'
    },
    {
        step: '3',
        title: 'Content-Planung',
        description: 'Erstellung eines detaillierten Content-Kalenders'
    },
    {
        step: '4',
        title: 'Umsetzung',
        description: 'Professionelle Content-Erstellung und Veröffentlichung'
    },
    {
        step: '5',
        title: 'Monitoring & Optimierung',
        description: 'Kontinuierliche Analyse und Strategieanpassung'
    }
]

const platforms = [
    { name: 'Instagram', icon: '📸', color: '#E4405F' },
    { name: 'Facebook', icon: '👥', color: '#1877F2' },
    // { name: 'LinkedIn', icon: '💼', color: '#0A66C2' },
    { name: 'TikTok', icon: '🎵', color: '#000000' },
    { name: 'YouTube', icon: '📺', color: '#FF0000' },
    { name: 'Twitter/X', icon: '🐦', color: '#1DA1F2' }
]

function toContact(){
    router.push('/contact');
}
</script>

<template>
    <div class="socialmedia-service">
        <!-- Hero Section -->
        <section class="hero-section" :class="{ 'fade-in': isVisible }">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">Social Media Marketing</h1>
                        <p class="hero-subtitle">Ihre Marke im digitalen Rampenlicht</p>
                        <div class="hero-description">
                            <p>
                                Mit unserer umfassenden Erfahrung im Social Media Marketing entwickeln wir gemeinsam mit
                                Ihnen eine individuelle Strategie, die das Wachstum Ihres Unternehmens gezielt fördert.
                            </p>
                            <p>
                                <strong>Wir erstellen hochwertige Inhalte und übernehmen die Accountverwaltung –
                                    verständlich, effizient und transparent.</strong>
                            </p>
                        </div>
                        <button class="cta-button" v-on:click="toContact()">
                            Kostenlose Strategie-Beratung
                        </button>
                    </div>
                    <div class="hero-visual">
                        <div class="social-platforms">
                            <div v-for="(platform, index) in platforms" :key="platform.name" class="platform-bubble"
                                :style="{
                                    animationDelay: `${index * 0.3}s`,
                                    backgroundColor: platform.color + '20',
                                    borderColor: platform.color
                                }">
                                <span class="platform-icon">{{ platform.icon }}</span>
                                <span class="platform-name">{{ platform.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Aspects Section -->
        <section class="aspects-section">
            <div class="container">
                <h2 class="section-title">Unsere Social Media Expertise</h2>

                <div class="aspects-tabs">
                    <div class="tab-buttons">
                        <button v-for="aspect in socialMediaAspects" :key="aspect.id" v-on:click="activeTab = aspect.id"
                            :class="['tab-button', { active: activeTab === aspect.id }]">
                            <span class="tab-icon">{{ aspect.icon }}</span>
                            {{ aspect.title }}
                        </button>
                    </div>

                    <div class="tab-content">
                        <div v-for="aspect in socialMediaAspects" :key="aspect.id" 
                            class="aspect-content">
                            <div v-if="activeTab === aspect.id"> 
                                <div class="aspect-header">
                                <span class="aspect-icon">{{ aspect.icon }}</span>
                                <h3>{{ aspect.title }}</h3>
                            </div>
                            <p class="aspect-description">{{ aspect.description }}</p>
                            <ul class="aspect-features">
                                <li v-for="detail in aspect.details" :key="detail" class="feature-item">
                                    <span class="feature-check">✓</span>
                                    {{ detail }}
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Platforms Section -->
        <section class="platforms-section">
            <div class="container">
                <h2 class="section-title">Plattformen, die wir beherrschen</h2>
                <p class="section-subtitle">Jede Plattform hat ihre eigene Sprache – wir sprechen sie alle</p>

                <div class="platforms-grid">
                    <div v-for="platform in platforms" :key="platform.name" class="platform-card"
                        :style="{ borderTopColor: platform.color }">
                        <div class="platform-header">
                            <span class="platform-large-icon">{{ platform.icon }}</span>
                            <h3>{{ platform.name }}</h3>
                        </div>
                        <div class="platform-features">
                            <div class="feature-tag" v-if="platform.name === 'Instagram'">Stories & Reels</div>
                            <div class="feature-tag" v-if="platform.name === 'Facebook'">Community Building</div>
                            <div class="feature-tag" v-if="platform.name === 'LinkedIn'">B2B Marketing</div>
                            <div class="feature-tag" v-if="platform.name === 'TikTok'">Viral Content</div>
                            <div class="feature-tag" v-if="platform.name === 'YouTube'">Video Marketing</div>
                            <div class="feature-tag" v-if="platform.name === 'Twitter/X'">Real-time Engagement</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="process-section">
            <div class="container">
                <h2 class="section-title">Unser transparenter Arbeitsprozess</h2>
                <p class="section-subtitle">Von der Strategie bis zum messbaren Erfolg</p>

                <div class="process-timeline">
                    <div v-for="(step, index) in processSteps" :key="step.step" class="process-step"
                        :style="{ animationDelay: `${index * 0.2}s` }">
                        <div class="step-number">{{ step.step }}</div>
                        <div class="step-content">
                            <h4>{{ step.title }}</h4>
                            <p>{{ step.description }}</p>
                        </div>
                        <div v-if="index < processSteps.length - 1" class="step-connector"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits Section -->
        <section class="benefits-section">
            <div class="container">
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-icon">🎯</div>
                        <h3>Verständlich</h3>
                        <p>Keine Fachbegriffe, keine Verwirrung – wir erklären alles in einfachen Worten und halten Sie
                            immer auf dem Laufenden.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon">⚡</div>
                        <h3>Effizient</h3>
                        <p>Optimierte Prozesse und bewährte Methoden sorgen für maximale Effizienz bei minimalem Aufwand
                            für Sie.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon">📊</div>
                        <h3>Transparent</h3>
                        <p>Regelmäßige Reports und offene Kommunikation – Sie wissen immer, wie Ihre Kampagnen
                            performen.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon">🚀</div>
                        <h3>Wachstumsorientiert</h3>
                        <p>Jede Maßnahme zielt darauf ab, Ihr Unternehmen nachhaltig und messbar wachsen zu lassen.</p>
                    </div>
                </div>
            </div>
        </section>

       

        <!-- CTA Section -->
        <section class="final-cta">
            <div class="container">
                <div class="cta-content">
                    <h2>Bereit für Ihren Social Media Erfolg?</h2>
                    <p>Lassen Sie uns gemeinsam eine Strategie entwickeln, die Ihr Unternehmen online zum Strahlen
                        bringt.</p>
                    <div class="cta-buttons">
                        <button class="cta-button primary">Strategie-Gespräch vereinbaren</button>
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

.socialmedia-service {
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
    margin-bottom: 30px;
    font-weight: 300;
}

.hero-description {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 40px;
}

.hero-description p {
    margin-bottom: 15px;
}

.cta-button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
}

.cta-button:hover {
    background: #a08888;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.hero-visual {
    position: relative;
    height: 400px;
}

.social-platforms {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-items: center;
}

.platform-bubble {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 15px;
    border-radius: 15px;
    border: 2px solid;
    animation: floatIn 1s ease-out both;
    transition: var(--transition);
    cursor: pointer;
}

.platform-bubble:hover {
    transform: translateY(-5px) scale(1.05);
}

.platform-icon {
    font-size: 2rem;
}

.platform-name {
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
}

/* Aspects Section */
.aspects-section {
    padding: 80px 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.section-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: var(--text-color);
    margin-bottom: 50px;
    opacity: 0.8;
}

.aspects-tabs {
    max-width: 900px;
    margin: 0 auto;
}

.tab-buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 40px;
}

.tab-button {
    background: var(--secondary-color);
    border: 2px solid transparent;
    padding: 20px 15px;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-weight: 600;
}

.tab-button:hover {
    border-color: var(--primary-color);
    transform: translateY(-3px);
}

.tab-button.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.tab-icon {
    font-size: 2rem;
}

.tab-content {
    background: white;
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.aspect-content {
    animation: fadeIn 0.5s ease-out;
}

.aspect-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}

.aspect-icon {
    font-size: 3rem;
}

.aspect-header h3 {
    font-size: 2rem;
    color: var(--primary-color);
}

.aspect-description {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: var(--text-color);
}

.aspect-features {
    list-style: none;
    padding: 0;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 0;
    font-size: 1.1rem;
}

.feature-check {
    color: var(--accent-color);
    font-weight: bold;
    font-size: 1.2rem;
}

/* Platforms Section */
.platforms-section {
    background: var(--secondary-color);
    padding: 80px 0;
}

.platforms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
    margin-top: 50px;
}

.platform-card {
    background: white;
    padding: 30px 20px;
    border-radius: var(--border-radius);
    text-align: center;
    border-top: 4px solid;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.platform-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.platform-header {
    margin-bottom: 20px;
}

.platform-large-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 10px;
}

.platform-header h3 {
    font-size: 1.3rem;
    color: var(--primary-color);
}

.platform-features {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
}

.feature-tag {
    background: var(--secondary-color);
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 0.85rem;
    color: var(--text-color);
}

/* Process Section */
.process-section {
    padding: 80px 0;
}

.process-timeline {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
}

.process-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation: slideInUp 0.8s ease-out both;
}

.step-number {
    background: var(--primary-color);
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.step-content {
    text-align: center;
    padding: 0 15px;
}

.step-content h4 {
    font-size: 1.3rem;
    color: var(--primary-color);
    margin-bottom: 10px;
}

.step-connector {
    position: absolute;
    top: 30px;
    left: calc(100% - 15px);
    width: calc(100% - 30px);
    height: 3px;
    background: var(--line-color);
    z-index: -1;
}

/* Benefits Section */
.benefits-section {
    background: var(--secondary-color);
    padding: 80px 0;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.benefit-card {
    background: white;
    padding: 40px 30px;
    border-radius: var(--border-radius);
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}

.benefit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.benefit-icon {
    font-size: 3rem;
    margin-bottom: 20px;
}

.benefit-card h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.benefit-card p {
    line-height: 1.6;
    color: var(--text-color);
}


/* Final CTA */
.final-cta {
    background: linear-gradient(135deg, var(--primary-color) 0%, #a08888 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.cta-content p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
}

.cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-button.primary {
    background: white;
    color: var(--primary-color);
}

.cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.cta-button.secondary:hover {
    background: white;
    color: var(--primary-color);
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
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes floatIn {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.8);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
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

    .tab-buttons {
        grid-template-columns: repeat(2, 1fr);
    }

    .platforms-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .process-timeline {
        flex-direction: column;
        gap: 40px;
    }

    .step-connector {
        display: none;
    }

    .results-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .cta-button {
        width: 250px;
    }

    .social-platforms {
        gap: 10px;
    }

    .platform-bubble {
        padding: 15px 10px;
    }
}

@media (max-width: 480px) {
    .platforms-grid {
        grid-template-columns: 1fr;
    }

    .results-grid {
        grid-template-columns: 1fr;
    }
}
</style>