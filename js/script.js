document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.error("GSAP or ScrollTrigger not loaded!");
    }

    // --- 0. Preloader Logic ---
    const preloader = document.querySelector('.preloader');
    const preloaderProgress = document.querySelector('.preloader-progress');
    
    // Split text into individual span tags for character animation
    const charWraps = document.querySelectorAll('.char-wrap');
    charWraps.forEach(wrap => {
        const text = wrap.textContent;
        wrap.innerHTML = '';
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; 
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(110%)'; 
            wrap.appendChild(span);
        }
    });

    // Simulate loading progress
    gsap.to(preloaderProgress, {
        width: "100%",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(preloader, {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => {
                    // Start hero text reveal AFTER preloader finishes
                    gsap.to('.char-wrap span', {
                        y: '0%',
                        duration: 1.2,
                        stagger: 0.03,
                        ease: "power4.out"
                    });
                }
            });
        }
    });


    // --- 1. Custom Mix-Blend-Mode Cursor ---
    const cursor = document.querySelector('.cursor');
    
    const cursorX = gsap.quickTo(cursor, "left", {duration: 0.4, ease: "power3"});
    const cursorY = gsap.quickTo(cursor, "top", {duration: 0.4, ease: "power3"});

    window.addEventListener('mousemove', (e) => {
        cursorX(e.clientX);
        cursorY(e.clientY);
    });

    document.querySelectorAll('a, .btn-primary, .btn-outline, .btn-outline-sm').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });

    // --- 2. Fluid Orb Follower ---
    const orb = document.querySelector('.orb');
    if (orb) {
        const orbX = gsap.quickTo(orb, "x", {duration: 1.5, ease: "power2.out"});
        const orbY = gsap.quickTo(orb, "y", {duration: 1.5, ease: "power2.out"});
        
        window.addEventListener('mousemove', (e) => {
            orbX(e.clientX);
            orbY(e.clientY);
        });
    }

    // --- 3. Magnetic Element Physics ---
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const strength = parseFloat(this.dataset.strength) || 20; 
            
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            
            gsap.to(this, {
                x: (x / rect.width) * strength,
                y: (y / rect.height) * strength,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        el.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // --- 4. Typing Effect Logic ---
    const typingTextElement = document.querySelector('.typing-text');
    const phrases = [
        "building secure infrastructure.",
        "optimizing CI/CD pipelines.",
        "scaling distributed systems."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing new word
        }

        setTimeout(typeEffect, typingSpeed);
    }
    // Start typing effect slightly after preloader finishes
    setTimeout(typeEffect, 2500);

    // --- 5. Scroll Animations ---
    
    // Parallax effect on Hero
    gsap.to('.hero-content', {
        y: -150,
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Fade Up Elements (About, Bento Boxes, Timeline, Projects)
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => {
        let delay = 0;
        if (el.classList.contains('delay-1')) delay = 0.2;
        if (el.classList.contains('delay-2')) delay = 0.4;
        
        gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", 
            }
        });
    });
});
