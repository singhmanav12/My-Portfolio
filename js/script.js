document.addEventListener('DOMContentLoaded', () => {
    // Mechanical button press effect
    const buttons = document.querySelectorAll('.brutal-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.classList.add('pressed');
        });
        
        btn.addEventListener('mouseup', () => {
            btn.classList.remove('pressed');
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('pressed');
        });
    });

    // Terminal typing effect for cli-prompt
    const promptText = "~/projects/portfolio$";
    const promptElement = document.querySelector('.cli-prompt');
    
    // Clear and retype (optional cool effect on load)
    if (promptElement) {
        // Keep the blinker span
        promptElement.innerHTML = '<span class="blink">_</span>';
        let i = 0;
        const typeWriter = () => {
            if (i < promptText.length) {
                promptElement.innerHTML = promptText.substring(0, i + 1) + ' <span class="blink">_</span>';
                i++;
                setTimeout(typeWriter, 50 + Math.random() * 50);
            }
        };
        setTimeout(typeWriter, 500);
    }
});
