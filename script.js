const button = document.getElementById('changeBtn');
const message = document.getElementById('message');
let colors = ['#F9C74F', '#90BE6D', '#F94144', '#577590', '#43AA8B'];
let current = 0;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[current];
  message.classList.remove('hidden');
  message.classList.add('show');
  current = (current + 1) % colors.length;
});
