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
            
                document.querySelector('.chat-input button').addEventListener('click', () => {
                    const input = document.querySelector('.chat-input input');
                    const message = input.value;
                    if (message) {
                        const userMessage = document.createElement('div');
                        userMessage.classList.add('message', 'user');
                        userMessage.textContent = message;
                        document.querySelector('.chat-messages').appendChild(userMessage);
            
                        const aiMessage = document.createElement('div');
                        aiMessage.classList.add('message', 'ai');
                        aiMessage.textContent = "I'm sorry to hear you're facing an issue. Could you please provide more details, such as the location and nature of the problem? I'll make sure to report it and get the necessary help as quickly as possible.";
                        document.querySelector('.chat-messages').appendChild(aiMessage);
            
                        input.value = '';
                        document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
                    }
                });