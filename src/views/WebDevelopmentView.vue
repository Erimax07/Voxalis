<script setup>
import router from '@/router'
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const activeTab = ref('design')

onMounted(() => {
    isVisible.value = true
})

const webDevAspects = [
    {
        id: 'design',
        title: 'Ansprechendes Design',
        icon: '🎨',
        description: 'Wir gestalten Ihre Webseite so, dass sie die Persönlichkeit Ihres Unternehmens perfekt widerspiegelt.',
        details: [
            'Individuelle Farbpaletten und Typografie',
            'Responsive Design für alle Geräte',
            'Benutzerfreundliche Navigation',
            'Professionelle Bildauswahl und -bearbeitung'
        ]
    },
    {
        id: 'development',
        title: 'Moderne Entwicklung',
        icon: '💻',
        description: 'Mit neuesten Technologien programmieren wir eine schnelle, sichere und zukunftssichere Webseite.',
        details: [
            'Sauberer, wartbarer Code',
            'Schnelle Ladezeiten',
            'Suchmaschinenoptimierung (SEO)',
            'Sichere Programmierung'
        ]
    },
    {
        id: 'content',
        title: 'Inhalte & Struktur',
        icon: '📝',
        description: 'Gemeinsam entwickeln wir eine klare Content-Strategie, die Ihre Botschaft optimal vermittelt.',
        details: [
            'Strukturierte Inhaltsplanung',
            'Professionelle Texterstellung',
            'Optimierte Bildintegration',
            'Call-to-Action Strategien'
        ]
    },
    {
        id: 'management',
        title: 'Einfache Verwaltung',
        icon: '⚙️',
        description: 'Nach dem Launch übernehmen wir die technische Verwaltung, damit Sie sich auf Ihr Geschäft konzentrieren können.',
        details: [
            'Regelmäßige Updates und Backups',
            'Performance-Monitoring',
            'Technischer Support',
            'Einfache Änderungsmöglichkeiten'
        ]
    }
]

const processSteps = [
    {
        step: '1',
        title: 'Erstberatung',
        description: 'Wir lernen Ihr Unternehmen und Ihre Ziele kennen'
    },
    {
        step: '2',
        title: 'Konzeption',
        description: 'Entwicklung der Webseiten-Struktur'
    },
    {
        step: '3',
        title: 'Design',
        description: 'Visuelle Gestaltung nach Ihren Vorstellungen'
    },
    {
        step: '4',
        title: 'Entwicklung',
        description: 'Professionelle Programmierung und Testing'
    },
    {
        step: '5',
        title: 'Launch & Support',
        description: 'Veröffentlichung und fortlaufende Betreuung'
    }
]

function toContact(){
    router.push('/contact');
}
</script>

<template>
    <div class="webdev-service">
        <!-- Hero Section -->
        <section class="hero-section" :class="{ 'fade-in': isVisible }">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">Web Entwicklung</h1>
                    <p class="hero-subtitle">Ihre digitale Visitenkarte mit Persönlichkeit</p>
                    <div class="hero-description">
                        <p>
                            !Ihr Unternehmen / Verein hat Persönlichkeit – und das soll man sehen! Mit Ihnen gemeinsam
                            programmieren wir eine individuelle Webseite, die Ihren wahren Charakter zeigt. Ganz
                            unkompliziert und mit einem echten Blick fürs Detail.!
                        </p>
                        <p>
                            <strong>Zudem übernehmen wir die Verwaltung der Webseite.</strong>
                        </p>
                    </div>
                    <button class="cta-button" v-on:click="toContact()">
                        Kostenlose Beratung vereinbaren
                    </button>
                </div>
            </div>
        </section>

        <!-- Main Aspects Section -->
        <section class="aspects-section">
            <div class="container">
                <h2 class="section-title">Unsere Leistungen im Detail</h2>

                <div class="aspects-tabs">
                    <div class="tab-buttons">
                        <button v-for="aspect in webDevAspects" :key="aspect.id" q
                            @click="activeTab = aspect.id; console.log(activeTab)"
                            :class="['tab-button', { active: activeTab === aspect.id }]">
                            <span class="tab-icon">{{ aspect.icon }}</span>
                            {{ aspect.title }}
                        </button>
                    </div>

                    <div class="tab-content">
                        <div v-for="aspect in webDevAspects" :key="aspect.id" class="aspect-content">
                            <div v-if="aspect.id === activeTab">
                                
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

        <!-- Process Section -->
        <section class="process-section">
            <div class="container">
                <h2 class="section-title">Unser partnerschaftlicher Prozess</h2>
                <p class="section-subtitle">So entstehen Webseiten, die wirken und begeistern</p>

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
                        <div class="benefit-icon">🔍</div>
                        <h3>Detailverliebt</h3>
                        <p>Jedes Element wird mit Sorgfalt gestaltet – von der Farbauswahl bis zur Benutzerführung.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon">⚡</div>
                        <h3>Zukunftssicher</h3>
                        <p>Moderne Technologien sorgen für schnelle, sichere und langlebige Webseiten.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon">🎯</div>
                        <h3>Unkompliziert</h3>
                        <p>Einfache Prozesse und klare Kommunikation – ohne technisches Fachchinesisch.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="final-cta">
            <div class="container">
                <div class="cta-content">
                    <h2>Bereit für Ihre neue Webseite?</h2>
                    <p>Lassen Sie uns gemeinsam eine Webseite entwickeln, die Ihr Unternehmen perfekt repräsentiert.</p>
                    <div class="cta-buttons">
                        <button class="cta-button primary" v-on:click="toContact()">Projekt besprechen</button>
                        <!-- <button class="cta-button secondary">Portfolio ansehen</button> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.webdev-service {
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
    grid-template-columns: 2fr 1fr;
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

.floating-elements {
    position: relative;
    width: 100%;
    height: 100%;
}

.element {
    position: absolute;
    font-size: 3rem;
    animation: float 6s ease-in-out infinite;
    background: white;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.element-1 {
    top: 10%;
    left: 20%;
    animation-delay: 0s;
}

.element-2 {
    top: 30%;
    right: 10%;
    animation-delay: 1.5s;
}

.element-3 {
    bottom: 30%;
    left: 10%;
    animation-delay: 3s;
}

.element-4 {
    bottom: 10%;
    right: 30%;
    animation-delay: 4.5s;
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

/* Process Section */
.process-section {
    background: var(--secondary-color);
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

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
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

    .process-timeline {
        flex-direction: column;
        gap: 40px;
    }

    .step-connector {
        display: none;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .cta-button {
        width: 250px;
    }
}
</style>