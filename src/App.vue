<script setup>
import { RouterView } from 'vue-router';
import PageHeader from './components/common/PageHeader.vue';
import PageFooter from './components/common/PageFooter.vue';
</script>

<template>
  <div id="app">
    <PageHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <PageFooter />
  </div>
</template>

<style>
/* CSS Custom Properties für bessere Wartbarkeit */
/* :root {
  --primary-color: #b0b0b0;
  --secondary-color: #ededed;
  --accent-color: #6faed9;
  --text-color: #2c3e50;
  --line-color: #bdc3c7;
  --border-radius: 8px;
  --transition: all 0.3s ease;
} */

:root {

  --primary-color: #b0b0b0;
  --secondary-color: #ededed;
  --accent-color: #6faed9;
  --text-color: #2c3e50;
  --line-color: #bdc3c7;
  --border-radius: 8px;
  --transition: all 0.3s ease;

  
  --background-primary: #ffffff;
  --background-secondary: #0a0a0a;
  --background-tertiary: #ffffff;

    --border-color: #d9d9d9;
  --hover-color: #d1d1d1;

}

@media (prefers-color-scheme: dark) {
    :root {
   --primary-color: #3d3d3d;
  --secondary-color: #0f0f0f;
  --accent-color: #5ba3d4;
  --text-color: #f0f4f8;
  --line-color: #2d2d2d;

  --background-primary: #0a0a0a;
  --background-secondary: #0a0a0a;
  --background-tertiary: #212121;

    --border-color: #2d2d2d;
  --hover-color: #282828;
      background: var(--background-primary);
    }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: var(--secondary-color);
  border-bottom: 2px solid var(--line-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}
.main{
  min-height: 80hv;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.logo-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
}

.logo-link:hover {
  color: var(--accent-color);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-weight: 500;
}

.nav-link:hover {
  background-color: var(--accent-color);
  color: white;
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background-color: var(--primary-color);
  color: white;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    min-height: auto;
    padding: 1rem;
  }
  
  .main-nav {
    gap: 1rem;
  }
  
  .nav-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .main-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 1.5rem;
  }
  
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>