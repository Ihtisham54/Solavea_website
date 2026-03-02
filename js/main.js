

// Initialize
document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // HAMBURGER MOBILE MENU TOGGLE
  // =============================================
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburgerBtn.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // Premium Page-Load Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;

        // Calculate delay based on index in group if it has a dataset index
        const delay = target.dataset.delay || 0;

        setTimeout(() => {
          target.classList.add('visible');
        }, delay);

        obs.unobserve(target);
      }
    });
  }, observerOptions);

  // Select key elements to animate
  const animatedElements = document.querySelectorAll(
    'main h1, main h2, main h3, main p, .btn, .feature-item, .process-step, .industry-pill, img, li'
  );

  animatedElements.forEach((el) => {
    // Add base animation classes
    el.classList.add('animate-on-scroll', 'fade-up');

    // Auto-stagger logic for lists/grids
    // Check if element is part of a grid or list to apply stagger
    const parent = el.parentElement;
    if (parent.classList.contains('features-grid') ||
      parent.classList.contains('process-steps') ||
      parent.classList.contains('industries-list') ||
      parent.tagName === 'UL') {

      const index = Array.from(parent.children).indexOf(el);
      // 60ms stagger per item
      el.dataset.delay = index * 60;
    }

    observer.observe(el);
  });


  // Add active class to nav links based on URL
  const currentPath = window.location.pathname;
  const allNavLinks = document.querySelectorAll('.nav-links a');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else if ((currentPath === '/' || currentPath.endsWith('/index.html')) && (href === './' || href === '/')) {
      link.classList.add('active');
    }
  });

  // Smooth Scroll for Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
