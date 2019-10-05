const listContainer = document.getElementById('listContainer');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  console.log('toggleBtn was clicked');
  listContainer.classList.toggle('nav-active');
});
