// Fetching a JSON file
fetch('./movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
    .then((response) => response.text())
    .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/bradtraversy')
    .then((response) => response.json())
    .then((data) => (document.querySelector('h1').textContent = data.login));

/*
  COMMON FETCH OPTIONS
  method: HTTP method you want to use
  body: Data you want to send. Usually to be put in a database, etc
  headers: Any HTTP headers you want to send
*/

function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123',
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}

createPost({ title: 'My Post', body: 'This is my Post' });