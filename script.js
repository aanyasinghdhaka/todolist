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
  
    document.addEventListener('DOMContentLoaded', () => {
    const ghost = document.getElementById('ghost');
    const message = ghost.querySelector('.message');
    
    const spookyFacts = [
      '👻 Did you know? Vampires hate garlic!',
      '🎃 Bats can eat up to 1,200 mosquitoes an hour!',
      '🦇 Ghosts are said to appear at midnight!',
      '💀 The "Jack-o\'-lantern" originates from Ireland!',
      '👻 Ghosts are often depicted as transparent figures, but in reality, they might just be people with unfinished business!',
      '🎃 In Japan, ghost sightings are common around Obon, a festival where spirits are believed to return to their homes.',
      '👀 The "Boo!" sound we associate with ghosts was likely popularized by Halloween costumes and playful ghosts in cartoons.',
      '👻 Ghosts aren’t always scary; some just want to be noticed, not feared.',
      '📖 The most famous ghost in literature, Shakespeare’s ghost, is featured in "Hamlet."',
      '🎩 Ghosts in Victorian times were often seen as a sign of impending death, but they weren\'t always malevolent.',
      '👻 In pop culture, ghosts are often seen wearing white sheets, but that comes from old-timey ghost stories rather than actual hauntings.',
      '🧠 The concept of a “ghost in the machine” is a reference to the idea of artificial intelligence developing consciousness. Spooky!',
      '👻 Casper, the friendly ghost, is one of the most well-known ghosts in pop culture.',
      '💀 The ghost of Marie Laveau, a famous voodoo queen from New Orleans, is said to haunt the city to this day.',
      '👻 Ghosts have been said to haunt houses, but they can also haunt trees, graveyards, and even cars.',
      '🎃 Ghost stories are a huge part of Halloween traditions around the world.',
      '👻 The term "phantasm" comes from the Greek word "phantasma," meaning an apparition or illusion.',
      '🕯 In some cultures, ghosts are thought to be the spirits of ancestors who return to visit their descendants.',
      '👻 Ghosts in horror movies are often portrayed as eerie, but in folklore, many were seen as helpful or protective.',
      '💭 The concept of “lost souls” comes from the belief that spirits cannot find peace until their purpose is fulfilled.',
      '📖 Ghosts are a common theme in literature, from Shakespeare’s “Hamlet” to Dickens’ “A Christmas Carol.”',
      '👣 The idea of ghostly footprints or strange sounds dates back to ancient civilizations.',
      '🌙 In some cultures, it\'s believed that ghosts will only appear at midnight!',
      '🍂 The "Jack-o\'-lantern" originates from Ireland!',
      '👻 The first recorded ghost sighting in the United States was in 1691 in New England.',
      '🏰 The Tower of London is said to be one of the most haunted places in the UK, with sightings of ghosts like Anne Boleyn.',
      '👀 Ghosts are believed to be able to pass through walls because they don’t have physical bodies!',
      '🎃 During the Victorian era, people used to take photos with their deceased loved ones, making it a popular “ghostly” tradition.',
      '🦇 The famous ghostly wail of a banshee is said to predict death in Irish folklore.',
      '🕯 Some cultures believe that lighting a candle can help guide spirits to the afterlife.',
      '📚 The word "ghost" comes from the Old English word "gast," meaning spirit or soul.',
      '🏚 In ancient Egypt, it was believed that ghosts of ancestors could bring protection and blessings.',
      '🌙 In many cultures, ghosts are said to be more active during a full moon.',
      '🧟‍♂️ Zombie-like ghosts are a common trope in Asian horror, with spirits rising from the grave to haunt the living.',
      '🖼 In the Victorian era, "spirit photography" became popular, where ghosts would supposedly appear in photographs of people.',
      '🎃 In Scotland, people believed that Halloween was a time when the boundary between the world of the living and the dead was thinnest.',
      '👻 Not all ghosts are visible; some are believed to communicate through smells, sounds, or temperature changes.',
      '🛏 There’s a legend that if a ghost visits you in your sleep, it’s a loved one checking in on you.',
      '👹 The famous "Headless Horseman" from "The Legend of Sleepy Hollow" is a ghostly figure that roams the night.',
      '🧟‍♀️ In some cultures, ghosts are believed to have unfinished business that keeps them roaming the earth.',
      '🕯 A "ghost light" is a mysterious light often seen on railroads and is thought to be a spirit trying to find its way home.',
      '💀 Ghosts are said to be most active around anniversaries of their death or during significant emotional events.',
      '🐾 Animals like cats and dogs are believed to be able to sense ghosts or spirits, often acting strangely around them.',
      '🎤 The idea of a "haunting" might have started from people’s imaginations running wild with strange sounds or experiences.',
      '🌳 In parts of Europe, it\'s believed that trees can house the souls of the dead, making them sacred and sometimes haunted.',
      '🏰 Some castles in Europe are known for ghostly sightings of former kings and queens.',
      '💭 The famous "Lady in White" is a common ghost myth worldwide, often a woman seeking her lost love.',
      '🌚 In folklore, ghosts often haunt places where they experienced strong emotions or traumatic events.',
      '🍂 Ghosts are believed to sometimes be attracted to places with a lot of history, such as old hotels or battlefields.',
      '👀 In Japanese folklore, ghosts (called "Yūrei") are depicted with long, unkempt hair and wearing white burial kimono.',
      '🦇 Vampires and ghosts are often linked in popular culture, with both being undead creatures.',
      '🏚 The famous "Amityville Horror" house is known for its ghostly activity and inspired books and films.',
      '🔮 Spirits are said to be able to communicate through objects like pendulums, mirrors, or even Ouija boards.',
      '🌍 Ghosts are believed to be present worldwide, with different cultures having their own unique legends and spirits.'
    ];
    
  
    ghost.addEventListener('mouseover', () => {
      const randomFact = spookyFacts[Math.floor(Math.random() * spookyFacts.length)];
      message.textContent = randomFact;
    });
  });
