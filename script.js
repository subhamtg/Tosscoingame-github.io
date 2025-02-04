const coin = document.getElementById('coin');
const result = document.getElementById('result');
const tossButton = document.getElementById('tossButton');

// Function to handle the coin toss
function tossCoin() {
  result.innerText = ''; // Clear previous result
  coin.classList.add('spin'); // Start the spinning animation

  // Determine result after animation ends
  setTimeout(() => {
    const isHeads = Math.random() > 0.5;
    result.innerText = isHeads ? 'Heads' : 'Tails';
    coin.classList.remove('spin'); // Reset the animation
    coin.style.transform = isHeads ? 'rotateY(0deg)' : 'rotateY(180deg)';
  }, 1500); // Match animation duration
}

// Add event listeners to the button and coin
tossButton.addEventListener('click', tossCoin);
coin.addEventListener('click', tossCoin);