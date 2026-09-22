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

    // Simulate loading progress
    if (preloaderProgress && preloader) {
        gsap.to(preloaderProgress, {
            width: "100%",
            duration: 1.0,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(preloader, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete: () => {
                        // Start hero fade ups AFTER preloader finishes
                        gsap.to('.hero .fade-up', {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: 0.2,
                            ease: "power3.out"
                        });
                    }
                });
            }
        });
    }

    // --- 1. Interactive Grid Background ---
    const gridContainer = document.getElementById('interactive-grid');
    const blockSize = 80; 
    let cols = 0;
    let rows = 0;
    let blocks = [];

    function createGrid() {
        if (!gridContainer) return;
        gridContainer.innerHTML = '';
        cols = Math.floor(window.innerWidth / blockSize) + 1;
        rows = Math.floor(window.innerHeight / blockSize) + 1;
        
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${blockSize}px)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, ${blockSize}px)`;
        
        const totalBlocks = cols * rows;
        blocks = [];
        
        for (let i = 0; i < totalBlocks; i++) {
            const block = document.createElement('div');
            block.classList.add('grid-block');
            gridContainer.appendChild(block);
            blocks.push(block);
        }
    }

    createGrid();
    window.addEventListener('resize', createGrid);

    // Track mouse and light up block
    window.addEventListener('mousemove', (e) => {
        if (!blocks.length) return;
        const col = Math.floor(e.clientX / blockSize);
        const row = Math.floor(e.clientY / blockSize);
        const index = row * cols + col;
        
        if (index >= 0 && index < blocks.length) {
            const block = blocks[index];
            block.classList.add('active');
            
            // Remove active class after a tiny delay so it fades out slowly
            setTimeout(() => {
                block.classList.remove('active');
            }, 100);
        }
    });

    // --- 2. Typing Effect Logic ---
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        const phrases = [
            "Building secure infrastructure.",
            "Optimizing CI/CD pipelines.",
            "Scaling distributed systems."
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

            let typingSpeed = isDeleting ? 30 : 60;

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
        setTimeout(typeEffect, 2000);
    }

    // --- 4. Terminal Typing Animation ---
    const terminalCode = document.getElementById('terminal-code');
    if (terminalCode) {
        const yamlCode = `apiVersion: v1
kind: Developer
metadata:
  name: manavendra-pratap-singh
  role: Cloud & DevOps Engineer
  location: Indore, India
spec:
  status: seeking_entry_level
  stack:
    cloud: ["AWS"]
    containers: ["Docker", "Kubernetes"]
    iac: ["Terraform"]
    cicd: ["Jenkins", "GitHub Actions"]
  languages:
    - Python
    - Go
    - TypeScript
    - C/C++`;
        
        let i = 0;
        function typeTerminal() {
            if (i < yamlCode.length) {
                terminalCode.textContent += yamlCode.charAt(i);
                i++;
                setTimeout(typeTerminal, 10 + Math.random() * 20);
            }
        }
        
        // Start typing a bit after load
        setTimeout(typeTerminal, 2500);
    }

    // --- 3. Scroll Animations ---
    
    // Fade Up Elements (About, Skills, Timeline, Projects)
    // Note: Hero fade-ups are handled in the preloader onComplete
    const fadeUpElements = document.querySelectorAll('section:not(.hero) .fade-up');
    fadeUpElements.forEach(el => {
        let delay = 0;
        if (el.classList.contains('delay-1')) delay = 0.15;
        if (el.classList.contains('delay-2')) delay = 0.3;
        if (el.classList.contains('delay-3')) delay = 0.45;
        
        // Initial state
        gsap.set(el, { y: 30, opacity: 0 });

        gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%", 
            }
        });
    });
});
