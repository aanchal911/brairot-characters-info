// 💡 Utility function: open alert box with info
function openInfo(character) {
    switch (character) {
      case 'bombardiro':
        alert('Bombardiro Crocodillo: The flying croc who breaks every rule and eats vibes.');
        break;
      case 'sahur':
        alert('Tung Tung Tung Sahur: The chaotic noisemaker who solos for breakfast.');
        break;
      case 'tralalero':
        alert('Tralalero Tralala: Marine-born Nike sneaker organism with god-tier drip.');
        break;
    }
  }
  
  // 🧠 Hover Tooltip
  document.querySelectorAll('.character').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#ff4f4f55';
    });
    el.addEventListener('mouseleave', () => {
      el.style.backgroundColor = '';
    });
  });
  
  // 🔍 Image Zoom on Hover
  document.querySelectorAll('.character img').forEach((img) => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.2)';
      img.style.transition = '0.3s ease';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // 🎇 Click Highlight
  document.querySelectorAll('.character').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('clicked');
      setTimeout(() => card.classList.remove('clicked'), 500);
    });
  });
  
  // 🪄 Easter Egg Trigger
  document.addEventListener('keydown', (e) => {
    if (e.key === 'i') {
      alert('You unlocked Italian Brainrot Mode 🧠🍝');
    }
  });
  