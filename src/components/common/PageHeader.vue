<template>
  <header class="app-header">
    <div class="header-content">
      <h1 class="logo">
        <router-link to="/" class="logo-link">Voxalis</router-link>
      </h1>
     
      <nav class="main-nav">
        <router-link  to="/"  class="nav-link">Home</router-link>
        <router-link  to="/services" class="nav-link">Dienste</router-link>
        <!-- <router-link to="/portfolio" class="nav-link">Portfolio</router-link> -->
        <router-link  to="/about" class="nav-link">Über</router-link>
        <router-link  to="/contact" class="nav-link">Kontakt</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No props or reactive data needed for this simple navigation
</script>

<style scoped>
/* CSS Custom Properties für bessere Wartbarkeit */

.app-header {
  background-color: var(--secondary-color);
  border-bottom: 2px solid var(--line-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: var(--max-Width);
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