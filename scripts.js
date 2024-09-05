document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});


// Add event listener to filter by title letters
document.querySelectorAll('.filter-letter').forEach(letter => {
    letter.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const selectedLetter = event.target.getAttribute('data-letter');
        if (selectedLetter === 'All') {
            showAllCards();
        } else {
            filterCardsByLetter(selectedLetter);
        }
    });
});

function filterCardsByLetter(letter) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent;
        // Show the card if the title starts with the selected letter
        if (title.toUpperCase().startsWith(letter.toUpperCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function showAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
}

