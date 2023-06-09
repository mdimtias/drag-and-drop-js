// Event listeners for drag events
document.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.style.opacity = '0.8';
});

document.addEventListener('dragend', (event) => {
  event.target.style.opacity = '1';
});

document.addEventListener('dragover', (event) => {
  event.preventDefault();
});

document.addEventListener('drop', (event) => {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/plain');
  const droppedItem = document.getElementById(itemId);
  const container2 = event.target.closest('.item-container');
  if (container2 && container2.id === 'container2') {
    if (droppedItem) {
      container2.appendChild(droppedItem.cloneNode(true));
      displaySuccessMessage();
    }
  }
});

// Reset button functionality
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');
  const itemsToReset = container2.querySelectorAll('.item');
   itemsToReset.forEach((item) => {
     container1.appendChild(item);
    });
    container2.innerHTML = '';
});

// Function to display a success message
function displaySuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.textContent = 'Item dropped successfully!';
  successMessage.classList.add('success-message');
  document.body.appendChild(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 2000);
}