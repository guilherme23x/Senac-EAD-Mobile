const menuToggle = document.getElementById('menu-toggle');
const navigation = document.querySelector('.barra-lateral');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});