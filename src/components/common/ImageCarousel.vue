<template>
  <div class="carousel-container">
    <!-- Carousel Wrapper -->
    <div class="carousel-wrapper" @mouseenter="pauseAutoSlide" @mouseleave="resumeAutoSlide">
      <!-- Images Container -->
      <div class="images-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          class="image-slide"
          :class="{ active: index === currentIndex }"
        >
          <img 
            :src="image.src" 
            :alt="image.alt" 
            class="carousel-image"
            @load="onImageLoad"
          />
          <div class="image-overlay">
            <h3 class="image-title">{{ image.title }}</h3>
            <p class="image-description">{{ image.description }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button 
        class="nav-arrow nav-arrow-left" 
        @click="goToPrevious"
        :disabled="images.length <= 1"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>
      
      <button 
        class="nav-arrow nav-arrow-right" 
        @click="goToNext"
        :disabled="images.length <= 1"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      <!-- Loading Indicator -->
      <div v-if="isLoading" class="loading-indicator">
        <div class="spinner"></div>
      </div>
    </div>

    <!-- Indicator Dots -->
    <div class="indicators" v-if="images.length > 1">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="indicator-dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      >
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Component props
const props = defineProps({
  autoSlideInterval: {
    type: Number,
    default: 10000 // 10 seconds
  },
  showOverlay: {
    type: Boolean,
    default: true
  }
})

// Reactive state
const currentIndex = ref(0)
const isLoading = ref(true)
const isPaused = ref(false)
const autoSlideTimer = ref(null)

// Sample images - replace these paths with your actual image paths
const images = ref([
  {
    src: '/images/slide1.jpeg', // Place your images in the public/images folder
    alt: 'Beautiful landscape',
    title: 'Stunning Nature',
    description: 'Discover the beauty of natural landscapes'
  },
  {
    src: '/images/slide2.jpeg',
    alt: 'Modern architecture',
    title: 'Modern Design',
    description: 'Explore contemporary architectural marvels'
  },
  {
    src: '/images/slide3.jpeg',
    alt: 'City skyline',
    title: 'Urban Views',
    description: 'Experience the pulse of city life'
  },
  {
    src: '/images/slide4.jpeg',
    alt: 'Peaceful sunset',
    title: 'Golden Hour',
    description: 'Witness breathtaking sunset moments'
  }
])

// Computed properties
const totalSlides = computed(() => images.value.length)

// Methods
const goToNext = () => {
  if (totalSlides.value > 1) {
    currentIndex.value = (currentIndex.value + 1) % totalSlides.value
  }
}

const goToPrevious = () => {
  if (totalSlides.value > 1) {
    currentIndex.value = currentIndex.value === 0 ? totalSlides.value - 1 : currentIndex.value - 1
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoSlide()
}

const startAutoSlide = () => {
  if (totalSlides.value > 1 && !isPaused.value) {
    autoSlideTimer.value = setInterval(() => {
      goToNext()
    }, props.autoSlideInterval)
  }
}

const stopAutoSlide = () => {
  if (autoSlideTimer.value) {
    clearInterval(autoSlideTimer.value)
    autoSlideTimer.value = null
  }
}

const resetAutoSlide = () => {
  stopAutoSlide()
  startAutoSlide()
}

const pauseAutoSlide = () => {
  isPaused.value = true
  stopAutoSlide()
}

const resumeAutoSlide = () => {
  isPaused.value = false
  startAutoSlide()
}

const onImageLoad = () => {
  isLoading.value = false
}

// Lifecycle hooks
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})

// Keyboard navigation
const handleKeydown = (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      goToPrevious()
      break
    case 'ArrowRight':
      goToNext()
      break
    case ' ':
      event.preventDefault()
      isPaused.value ? resumeAutoSlide() : pauseAutoSlide()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>


.carousel-container {
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  background: var(--background-primary);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.images-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.image-slide.active .carousel-image {
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 40px 30px 20px;
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.image-slide:hover .image-overlay {
  transform: translateY(0);
}

.image-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.image-description {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text-color);
  backdrop-filter: blur(10px);
  z-index: 10;
  background-color: var(--background-primary);
}

.nav-arrow:hover {
  background-color: var(--background-primary);
  color: var(--accent-color);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: translateY(-50%) scale(1);
}

.nav-arrow-left {
  left: 20px;
}

.nav-arrow-right {
  right: 20px;
}

.indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 12px;
  background: var(--secondary-color);
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--line-color);
  background: transparent;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
}

.indicator-dot:hover {
  border-color: var(--primary-color);
  transform: scale(1.2);
}

.indicator-dot.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  transform: scale(1.3);
}

.indicator-dot.active::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  opacity: 0.3;
}

.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--line-color);
  border-top: 4px solid var(--accent-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .carousel-wrapper {
    height: 300px;
  }
  
  .nav-arrow {
    width: 40px;
    height: 40px;
  }
  
  .nav-arrow-left {
    left: 10px;
  }
  
  .nav-arrow-right {
    right: 10px;
  }
  
  .image-title {
    font-size: 1.4rem;
  }
  
  .image-description {
    font-size: 0.9rem;
  }
  
  .indicators {
    padding: 15px;
    gap: 8px;
  }
  
  .indicator-dot {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    height: 250px;
  }
  
  .image-overlay {
    padding: 20px 15px 10px;
  }
}
</style>