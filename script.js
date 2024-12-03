document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const halloweenSong = document.getElementById('halloweenSong');
  
    // Add a new task
    addButton.addEventListener('click', () => {
      const task = taskInput.value.trim(); // Get and trim the input value
  
      if (task !== '') { // Ensure input is not empty
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = task; // Set the text of the list item
  
        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          taskList.removeChild(listItem); // Remove the task
          checkTaskListEmpty(); // Check if the task list is empty
        });
  
        listItem.appendChild(deleteButton); // Add the delete button
        taskList.appendChild(listItem); // Add the list item to the task list
        taskInput.value = ''; // Clear the input field
  
        // Play Halloween song
        halloweenSong.currentTime = 0; // Reset the song to the beginning
        halloweenSong.play();
      }
    });
  
    // Function to check if the task list is empty
    function checkTaskListEmpty() {
      if (taskList.children.length === 0) { // If no tasks are in the list
        halloweenSong.pause(); // Pause the song
        halloweenSong.currentTime = 0; // Reset the song to the beginning
      }
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    const pupils = document.querySelectorAll('.pupil');
  
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      pupils.forEach((pupil) => {
        // Get the pupil's parent eye position
        const eyeRect = pupil.parentElement.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  
        // Calculate the angle between the cursor and the eye center
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
  
        // Move the pupil within the eye, constrained to its boundaries
        const pupilOffset = 10; // Adjust to ensure the pupil stays within the eye
        const pupilX = Math.cos(angle) * pupilOffset;
        const pupilY = Math.sin(angle) * pupilOffset;
  
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    });
  });
  
  
