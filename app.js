document.getElementById('jokeBtn').addEventListener('click', function() {
    const url = 'https://dad-jokes7.p.rapidapi.com/dad-jokes/joke-of-the-day';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '478ce20ed9msh6f74b7acb848dd9p13b7f2jsn51b361372da7',
            'x-rapidapi-host': 'dad-jokes7.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response

            const fullJoke = data.joke || "No joke found";
            
            // Try to split the joke at the first punctuation mark or manually handle split if needed
            const splitIndex = fullJoke.indexOf('?') !== -1 ? fullJoke.indexOf('?') + 1 : fullJoke.indexOf('.') + 1;
            
            const setup = splitIndex > 0 ? fullJoke.slice(0, splitIndex) : fullJoke;
            const punchline = splitIndex > 0 ? fullJoke.slice(splitIndex).trim() : '';

            // Display the setup first
            document.getElementById('jokeDisplay').innerText = setup;

            // After a 3-second delay, show the punchline if available
            setTimeout(() => {
                if (punchline) {
                    document.getElementById('jokeDisplay').innerText += '\n' + punchline;
                }
            }, 3000);
        })
        .catch(error => {
            document.getElementById('jokeDisplay').innerText = 'Oops! Something went wrong.';
            console.error(error);
        });
});