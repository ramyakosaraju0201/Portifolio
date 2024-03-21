// This requires adding JavaScript to your code
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const windowHeight = window.innerHeight;
      if (sectionTop - windowHeight < 100) {
        section.classList.add('fade-in');
      } else {
        section.classList.remove('fade-in');
      }
    }
  });
  