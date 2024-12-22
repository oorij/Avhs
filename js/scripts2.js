document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  // Function to detect which section is in view on page load
  const findInitialSection = () => {
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        section.classList.add('visible');
        break;
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the section is in view
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 } // Trigger when at least 10% of the section is visible
  );

  // Observe sections for animations when scrolling
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Handle the initial section on page load
  findInitialSection();
});
