//your JS code here. If required.
// Get all the square elements
const squares = document.querySelectorAll('.square');

// Add a mouseover event listener to each square
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    // Loop through all squares
    squares.forEach(otherSquare => {
      // If the current square is not the one being hovered over, change its color
      if (otherSquare !== square) {
        otherSquare.style.backgroundColor = '#6F4E37'; // Coffee color
      }
    });
  });

  // Add a mouseout event listener to each square
  square.addEventListener('mouseout', () => {
    // Change all squares back to lavender
    squares.forEach(otherSquare => {
      otherSquare.style.backgroundColor = '#E6E6FA'; // Lavender color
    });
  });
});