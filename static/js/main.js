// main.js — students will add JavaScript here as features are built

// Video Modal Functionality
(function() {
    const modal = document.getElementById('video-modal');
    const openBtn = document.getElementById('open-modal');
    const closeBtn = document.querySelector('.modal-close');
    const video = document.getElementById('modal-video');
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (!modal || !openBtn) return;

    function openModal() {
        video.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        video.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
