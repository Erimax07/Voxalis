
<script setup>

</script>



<template>
  <div class="about slide-left" ref="el2">
    <h2>Über uns</h2>
    <p class="slide-in-right">Wir sind ein junges Unternehmen, das sich auf Webentwicklung und Social Media Marketing spezialisiert hat. Für uns geht es allerdings nicht nur darum Webseiten zu bauen. Es geht darum Unternehmen sichtbar zu machen, Vertrauen zu schaffen und Wachstum zu ermöglichen. Wir glauben: Wer etwas leistet, sollte auch online dafür stehen können. Und dafür sind wir da.</p>

  </div>
</template>


<style scoped>
.slide-left,
.slide-right,
.slide-up {

  animation: slide-in 0.8s ease forwards;
}

.slide-left {
  animation-name: slide-from-left;
}

.slide-right {
  animation-name: slide-from-right;
}

.slide-up {
  animation-name: slide-from-bottom;
}

@keyframes slide-from-left {
  from {
    opacity: 0;
    transform: translateX(-500px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-from-right {
  from {
    opacity: 0;
    transform: translateX(500px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-from-bottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>