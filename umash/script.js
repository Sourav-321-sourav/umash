// Create ripple effect on click
function createRipple(event) {
    const card = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    card.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Redirect to video with loading animation
function redirectToVideo(url, event) {
    createRipple(event);
    
    // Show loading animation
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    
    // Delay redirect to allow animations to complete
    setTimeout(() => {
        window.location.href = url;
    }, 800);
}

// Hide loader when page loads (in case user returns)
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});