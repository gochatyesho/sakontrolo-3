
GetData()

const container = document.getElementById("container")

function GetData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.json())
    .then((posts) =>  {
        posts.forEach((post) => {
            createElement(post);
        });
    })
    .catch((err) => console.log(err));
}

function createElement(post) {
    const card = document.createElement("div");
    const titleContainer = document.createElement("div")
    const bodyContainer = document.createElement("div");
    const title = document.createElement("h5");
    const body = document.createElement("p");


    title.innerHTML = post.title;
    body.innerHTML = post.body;

    card.classList.add("card");
    titleContainer.classList.add("titleContainer");
    bodyContainer.classList.add("bodyContainer");
    title.classList.add("title");
    body.classList.add("body");


    container.append(card);
    card.append(titleContainer);
    card.append(bodyContainer);
    titleContainer.append(title);
    bodyContainer.append(body);
}