const addCardBtn = document.getElementById('add-card-btn');
const cardContainer = document.querySelector('.card-container');
const resetBtn = document.getElementById('reset-btn');
const uploadBtn = document.getElementById('upload-btn');

let cardCount = 1;

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
        <input type="text" id="serial-number-${cardCount}" placeholder="Serial Number">
        <input type="text" id="location-${cardCount}" placeholder="Location">
        <textarea id="comment-${cardCount}" placeholder="Comment"></textarea>
        <input type="file" id="image-input-${cardCount}" accept="image/*">
        <button class="delete-btn">Delete</button>
    `;
    newCard.querySelector('.delete-btn').addEventListener('click', () => {
        newCard.remove();
        cardCount--;
    });
    cardContainer.appendChild(newCard);
    cardCount++;
});

resetBtn.addEventListener('click', () => {
    cardContainer.innerHTML = '';
    cardCount = 1;
});

uploadBtn.addEventListener('click', () => {
    // TO DO: implement upload functionality
    console.log('Upload button clicked!');
});
