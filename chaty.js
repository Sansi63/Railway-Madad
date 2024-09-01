const ctx = document.getElementById('complaintChart').getContext('2d');
                const complaintChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Resolved', 'Unresolved', 'In Progress'],
                        datasets: [{
                            label: 'Number of Complaints',
                            data: [12, 5, 3],
                            backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(tooltipItem) {
                                        return tooltipItem.label + ': ' + tooltipItem.raw;
                                    }
                                }
                            }
                        }
                    }
                });
            
// chat.js

// Array to hold chat history
const chatMessages = document.querySelector('.chat-messages');

// Function to append a message to the chat
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (sender === 'user') {
        messageElement.classList.add('user');
    } else {
        messageElement.classList.add('ai');
    }
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
}

// Function to generate bot responses
function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();
    let botResponse = '';

    if (userInput.includes('hello') || userInput.includes('hi')) {
        botResponse = 'Hello! How can I assist you today? You can ask me about lodging a complaint, tracking a complaint, or general help.';
    } 
    else if (userInput.includes('register complaint')) {
        botResponse = 'To register a complaint, please visit the "Lodge Complaint" section or provide me with the details, and I will guide you through it.';
    } else if (userInput.includes('track complaint')) {
        botResponse = 'To track your complaint, please enter your complaint ID, and I will provide the status.';
    } else if (userInput.includes('thank you') || userInput.includes('thanks')) {
        botResponse = 'You\'re welcome! If you have any more questions, feel free to ask.';
    } 
    else if(userInput.includes('any russians booked in tharki express')){
        botResponse = 'Yes there are two Russians booked in this express train. One is in coach no S7/00036/LB and another one is in S8/360041/DL. Hope you enjoy with them. ';
    }
    else if (userInput.includes('complaint id')) {
        botResponse = 'Please provide the complaint ID you would like to track, and I will fetch the details for you.';
    } else {
        botResponse = 'I\'m sorry, I didn\'t understand that. Could you please rephrase or ask about lodging a complaint, tracking a complaint, or general help?';
    }

    return botResponse;
}

// Function to handle sending messages
function sendMessage() {
    const userInputElement = document.querySelector('.chat-input input');
    const userInput = userInputElement.value.trim();
    if (userInput === '') return;

    appendMessage('user', userInput);
    
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage('ai', botResponse);
    }, 500); // Simulate a delay for bot response

    userInputElement.value = ''; // Clear input field
}

// Event listener for send button
document.querySelector('.chat-input button').addEventListener('click', sendMessage);

// Event listener for pressing 'Enter' key
document.querySelector('.chat-input input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
