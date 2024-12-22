document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.letter-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' class when section is in view
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
const letterText = document.querySelectorAll('.letter-text');
letterText.forEach((element) => {
  let text = element.innerHTML;
  element.innerHTML = '';
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // Adjust typing speed here
    }
  }

  typeWriter();
});
