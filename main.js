alert("Deji is freaking awesome!");

// ========== Change Nav style on scroll ==========

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0)
});
