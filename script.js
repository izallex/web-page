
        // Retrieve saved opened doors from localStorage
        const openedDoors = JSON.parse(localStorage.getItem('openedDoors')) || [];

        // Function to apply the opened state on page load
        function markOpenedDoors() {
            document.querySelectorAll('.door').forEach(door => {
                const doorNumber = door.getAttribute('data-day');
                if (openedDoors.includes(doorNumber)) {
                    door.classList.add('opened');
                    door.querySelector('.door-inner').style.transform = 'rotateY(180deg)';
                }
            });
        }

        // Call the function to mark the opened doors when the page is loaded
        markOpenedDoors();


      
    
    
