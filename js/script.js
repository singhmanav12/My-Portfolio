document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.error("GSAP or ScrollTrigger not loaded!");
    }

    // --- 1. Custom Mix-Blend-Mode Cursor ---
    const cursor = document.querySelector('.cursor');
    
    // Use GSAP quickTo for highly performant cursor tracking
    const cursorX = gsap.quickTo(cursor, "left", {duration: 0.4, ease: "power3"});
    const cursorY = gsap.quickTo(cursor, "top", {duration: 0.4, ease: "power3"});

    window.addEventListener('mousemove', (e) => {
        // Move cursor smoothly
        cursorX(e.clientX);
        cursorY(e.clientY);
    });

    // Hover effect for project rows -> turns cursor into "VIEW"
    document.querySelectorAll('[data-cursor]').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursor.innerHTML = item.getAttribute('data-cursor');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursor.innerHTML = '';
        });
    });

    // --- 2. Fluid Orb Follower ---
    const orb = document.querySelector('.orb');
    if (orb) {
        // GSAP is much smoother than CSS transitions for mouse following
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
            
            // Calculate distance from center of the element
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            
            // Move element towards mouse using GSAP
            gsap.to(this, {
                x: (x / rect.width) * strength,
                y: (y / rect.height) * strength,
                duration: 0.5,
                ease: "power2.out"
            });
        });
        
        el.addEventListener('mouseleave', function() {
            // Elastic snap back to original position
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // --- 4. Hero Text Reveal Animation ---
    const charWraps = document.querySelectorAll('.char-wrap');
    charWraps.forEach(wrap => {
        const text = wrap.textContent;
        wrap.innerHTML = '';
        // Split text into individual span tags for character animation
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Handle spaces correctly
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(110%)'; // Hide below clip mask
            wrap.appendChild(span);
        }
    });

    // Animate characters upwards sequentially
    gsap.to('.char-wrap span', {
        y: '0%',
        duration: 1.2,
        stagger: 0.03,
        ease: "power4.out",
        delay: 0.2
    });

    // --- 5. Scroll Animations ---
    
    // Parallax effect on the entire Hero content when scrolling down
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

    // Project Rows Reveal from bottom
    const projectRows = document.querySelectorAll('.project-row');
    projectRows.forEach(row => {
        gsap.from(row, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                start: "top 90%", // Trigger when top of row hits 90% viewport height
            }
        });
    });
});
