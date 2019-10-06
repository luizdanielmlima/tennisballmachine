// Solves menu hiding initial section content on jumping with # !
const shiftWindow = () => {
  scrollBy(0, -50);
};
if (location.hash) shiftWindow();
window.addEventListener('hashchange', shiftWindow);

// Variables for the menu and nav
const listContainer = document.getElementById('listContainer');
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.querySelectorAll('.nav__link');
const navLinksArr = Array.prototype.slice.call(navLinks);

// listens to burger click, opens menu
toggleBtn.addEventListener('click', () => {
  // console.log('toggleBtn was clicked');
  listContainer.classList.toggle('nav-active');
});

// Listen to menu links, closes menu
navLinksArr.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    // console.log('menu Item was clicked');
    listContainer.classList.toggle('nav-active');
  });
});
