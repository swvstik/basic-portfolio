const role = document.getElementById("role");
const roles = ["a front-end developer.", "a game developer.", "a machine-learning enthusiast."];
let index = 0;

setInterval(() => {
  
  role.textContent = roles[index];
  index = (index + 1) % roles.length;
}, 2000);

let gameDevClicks = 0;

document.getElementById('gameDevIcon').addEventListener('click', function() {
  gameDevClicks++;
  if (gameDevClicks === 5) {
    document.getElementById('dialogBox').style.display = 'block';
  }
});

document.getElementById('runCatButton').addEventListener('click', function() {
  document.getElementById('runcat').style.display = 'block';
  document.getElementById('runcat').style.animationPlayState = 'running';
});

document.getElementById('stopCatButton').addEventListener('click', function() {
  document.getElementById('runcat').style.animationPlayState = 'paused';
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('runcat').style.animationPlayState = 'paused';
  document.getElementById('dialogBox').style.display = 'none';
  gameDevClicks = 0;
});

