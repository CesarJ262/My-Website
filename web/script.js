document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------
    // Matrix Background Effect
    // -----------------------------------------
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        // Characters to use in the matrix
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
        const characters = letters.split('');
        
        const fontSize = 14;
        let columns = Math.floor(width / fontSize);
        
        // Array of drops - one per column
        let drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = Math.random() * -100; // start at random negative positions
        }
        
        let isPaused = false;

        // Drawing the characters
        function drawMatrix() {
            if (isPaused) return;

            // Translucent background to show trail
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, width, height);
            
            ctx.fillStyle = '#00ff41'; // Green text
            ctx.font = fontSize + 'px monospace';
            
            // Loop over columns
            for (let i = 0; i < drops.length; i++) {
                // Pick a random character
                const text = characters[Math.floor(Math.random() * characters.length)];
                
                // Draw the character
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                // Randomly reset drops to top
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        // Render loop
        setInterval(drawMatrix, 33); // ~30fps
        
        // Pause control logic
        const pauseBtn = document.getElementById('pause-matrix-btn');
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => {
                isPaused = !isPaused;
                const icon = pauseBtn.querySelector('i');
                if (isPaused) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                } else {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                }
            });
        }
        
        // Handle resize
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / fontSize);
            
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
        });
    }

    // -----------------------------------------
    // Scroll Reveal Animation
    // -----------------------------------------
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // pixels before element is considered visible
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    
    // Trigger once on load
    reveal();

    // -----------------------------------------
    // Back to Top Button
    // -----------------------------------------
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log("System initialized. Welcome to the Matrix.");
});
