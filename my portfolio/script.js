function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  const skillsList = document.querySelector('.skills-list');
let isAnimating = false;
let isMobile = window.innerWidth <= 768; 

function moveSkillsList() {
    if (!isMobile && !isAnimating) {
        isAnimating = true;
        let position = window.innerWidth; 
        const speed = 3;

        function animate() {
            position -= speed;
            skillsList.style.transform = `translateX(${position}px)`;

            // Reset position when list has moved completely off the screen
            if (position < -skillsList.offsetWidth) {
                position = window.innerWidth;
            }

            requestAnimationFrame(animate);
        }

        animate();
    } else {
        skillsList.style.transform = 'none';
    }
}

moveSkillsList();

// Update animation status on window resize
window.addEventListener('resize', function() {
    isMobile = window.innerWidth <= 768; 
    if (isMobile) {
        skillsList.style.transform = 'none';
    }
    isAnimating = false; 
    moveSkillsList(); 
});




  