document.addEventListener('DOMContentLoaded', function() {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const resetButton = document.getElementById('resetButton');
    let draggedItem = null;
  
    // Event listener for drag start on items
    container1.addEventListener('dragstart', function(e) {
      draggedItem = e.target;
      e.dataTransfer.setData('text/plain', null); // Firefox requires this to be set to allow dragging
      e.target.classList.add('dragging');
    });
  
    // Event listener for drag end on items
    container1.addEventListener('dragend', function(e) {
      e.target.classList.remove('dragging');
    });
  
    // Event listener for drag over on container2
    container2.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
  
    // Event listener for drop on container2
    container2.addEventListener('drop', function(e) {
      e.preventDefault();
      container2.appendChild(draggedItem);
      draggedItem = null;
      showSuccessMessage();
    });
  
    // Event listener for reset button click
    resetButton.addEventListener('click', function() {
      container1.innerHTML = `
        <div class="item" draggable="true">Item 1</div>
        <div class="item" draggable="true">Item 2</div>
        <div class="item" draggable="true">Item 3</div>
        <div class="item" draggable="true">Item 4</div>
      `;
      container2.innerHTML = '';
    });
  
    // Function to show success message
    function showSuccessMessage() {
      const successMessage = document.createElement('p');
      successMessage.classList.add('success-message');
      successMessage.textContent = 'Item dropped successfully!';
      container2.appendChild(successMessage);
      setTimeout(function() {
        successMessage.remove();
      }, 2000);
    }
  });
  