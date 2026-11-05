/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  

// Add this to your existing script.js (keep your IntersectionObserver code)
const resumeBtn = document.querySelector('.resume-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.target.style.transform = `scale(1.05) translate(${x * 5}px, ${y * 5}px)`;
  });
  
  resumeBtn.addEventListener('mouseleave', () => {
    resumeBtn.style.transform = 'scale(1.05)';
  });
}





const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* Add interactive scaling on hover */
const hoverElements = document.querySelectorAll('a, button, .card, .cert-item');

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });

  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});