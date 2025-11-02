import { initDragDrop } from './drag-drop.js';

// Clickable buttons
// жмешь - скрывается вся ненужная информация.
const menuBtns = document.querySelectorAll('.menu-btn');

const inventorySection = document.querySelector('.inventory-section');
const recipesSection = document.querySelector('.recipes-section');
const controlPanel = document.querySelector('.control-panel');

function showPanel(panel) {
    inventorySection.style.display = 'none';
    recipesSection.style.display = 'none';
    controlPanel.style.display = 'none';

    if (panel === 'inventory') {
        inventorySection.style.height = "100%";
        inventorySection.style.display = 'block';
        recipesSection.style.height="250px"
    }
    else if (panel === 'recipes') {
        recipesSection.style.height = "100%";
        recipesSection.style.display = 'block';
        inventorySection.style.height = "250px"

    }
    else if (panel === 'home') {
        inventorySection.style.display = 'block';
        recipesSection.style.display = 'block';
        controlPanel.style.display = 'block';
        inventorySection.style.height = "250px"
        recipesSection.style.height="250px"
    }
}

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (btn.textContent.includes('🏠')) showPanel('home');
        else if (btn.textContent.includes('🎒')) showPanel('inventory');
        else if (btn.textContent.includes('📜')) showPanel('recipes');
        else showPanel('home'); 
    });
});

initDragDrop();