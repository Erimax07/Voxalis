<template>
  <div class="contact-wrapper">
    <div class="contact-island">
      <!-- Header -->
      <div class="contact-header">
        <div class="header-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <h3 class="contact-title">Get In Touch</h3>
      </div>

      <!-- Contact Items -->
      <div class="contact-items">
        <!-- Email Contact -->
        <div class="contact-item">
          <div class="contact-info">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-details">
              <h4 class="contact-label">Email</h4>
              <p class="contact-value">email@example.com</p>
            </div>
          </div>
          <a href="mailto:email@example.com" class="contact-button email-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Send Email
          </a>
        </div>

        <!-- Phone Contact -->
        <div class="contact-item">
          <div class="contact-info">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contact-details">
              <h4 class="contact-label">Phone</h4>
              <p class="contact-value">+05890000111</p>
            </div>
          </div>
          <a href="tel:+05890000111" class="contact-button phone-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call Now
          </a>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="contact-decoration">
        <div class="decoration-dot"></div>
        <div class="decoration-dot"></div>
        <div class="decoration-dot"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple component
</script>

<style scoped>


.contact-wrapper {
  display: flex;
  justify-content: center;
  margin: 20vh 0;
  padding: 0 20px;
}

.contact-island {
  position: relative;
  background: var(--secondary-color);
  border: 2px solid var(--line-color);
  border-radius: calc(var(--border-radius) * 2);
  padding: 2rem;
  min-width: 400px;
  max-width: 500px;
  width: 100%;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 8px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  overflow: hidden;
}

.contact-island::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color));
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.contact-island:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 1px 8px rgba(0, 0, 0, 0.05);
  border-color: var(--primary-color);
}

.contact-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--line-color);
}

.header-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  flex-shrink: 0;
}

.contact-title {
  margin: 0;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  transition: var(--transition);
}

.contact-item:hover {
  border-color: var(--primary-color);
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--secondary-color);
  color: var(--text-color);
  border-radius: 50%;
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
}

.contact-label {
  margin: 0 0 4px 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  margin: 0;
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
}

.contact-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: none;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  flex-shrink: 0;
}

.email-button {
  background: var(--accent-color);
  color: white;
}

.email-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.phone-button {
  background: var(--primary-color);
  color: white;
}

.phone-button:hover {
  background: #a08888;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(180, 153, 153, 0.3);
}

.contact-decoration {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line-color);
}

.decoration-dot {
  width: 6px;
  height: 6px;
  background: var(--line-color);
  border-radius: 50%;
  transition: var(--transition);
}

.contact-island:hover .decoration-dot:nth-child(1) {
  background: var(--primary-color);
  animation: pulse 1.5s infinite;
}

.contact-island:hover .decoration-dot:nth-child(2) {
  background: var(--accent-color);
  animation: pulse 1.5s infinite 0.2s;
}

.contact-island:hover .decoration-dot:nth-child(3) {
  background: var(--primary-color);
  animation: pulse 1.5s infinite 0.4s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-wrapper {
    margin: 10vh 0;
    padding: 0 15px;
  }
  
  .contact-island {
    min-width: 300px;
    padding: 1.5rem;
  }
  
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    text-align: left;
  }
  
  .contact-info {
    width: 100%;
  }
  
  .contact-button {
    align-self: stretch;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .contact-island {
    min-width: 280px;
    padding: 1.25rem;
  }
  
  .contact-header {
    margin-bottom: 1.5rem;
  }
  
  .contact-title {
    font-size: 1.25rem;
  }
  
  .contact-items {
    gap: 1.25rem;
  }
}
</style>