/*
 * Generate Messages
 */

let message = [];

function addMessage(text) {
    // Storing the message
    const chat = {
        text,
        id: Date.now()
    }

    message.push(chat);
    console.log(message);

    // Message to screen
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend',
        `<p class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </p>`
    );
}

const form = document.querySelector('#messageForm');
form.addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.typedMessage');

    const text = input.value.trim();

    if(text !== ''){
        addMessage(text);
        input.value = '';
        input.focus();
    }

});
