// Assuming `Table` is an existing AEM Sidekick table instance
document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.aem-sidekick-table'); // Replace with the actual table selector

  // Create a new row for the star rating block
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');
  newCell.colSpan = table.rows[0].cells.length; // Span across all columns
  newCell.innerHTML = `
    <div class="star-rating-block">
      <h3>Rate your experience</h3>
      <p>How would you rate our service today?</p>
      <div class="star-rating">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star-rating-value">0</span>/5
      </div>
    </div>
  `;

  newRow.appendChild(newCell);
  table.appendChild(newRow);

  // Add star rating functionality
  const stars = newCell.querySelectorAll('.star-rating .star');
  stars.forEach((star, idx) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i <= idx);
      });
      newCell.querySelector('.star-rating-value').textContent = idx + 1;
    });
  });
});