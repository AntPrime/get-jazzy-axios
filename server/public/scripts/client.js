function onReady() {
    console.log('Hello from client.js');

    axios({
        method: 'GET',
        url: '/artist'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response.data);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });

    // TODO Add Axios request for /songs and display on DOM
}
    // Use axios to GET quotes from our server.
    // What is the method type: GET
    // What is the path: '/quotes'
    axios({
      method: "GET",
      url: "/songs",
    })
      .then(function (response) {
        console.log("Data From Server", response.data)
        let quotesFromServer = response.data;
        let contentDiv = document.querySelector('#songTableBody');
        for (let songs of quotesFromServer) {
            contentDiv.innerHTML += `
            <tr>
                <td>${songs.title}</td>
                <td>${songs.artist}</td>
            </tr>
        `;
        }
    }).catch((error) => {
        console.log("Oops, GET to /quotes broke!", error)

      });

    

onReady()
