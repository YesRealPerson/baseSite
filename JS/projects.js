let list = document.getElementById("projects");

const start = async () => {
    let response = await fetch("https://repos.spark952.workers.dev/");
    const data = await response.json();
    console.log(data);
    for(let i = 0; i < data.length; i++){
        let title = document.createElement("h3");
        title.className = "projectName"
        title.innerText = data[i].name;
        let readme = document.createElement("div");
        if(data[i].readme == "404: Not Found"){
            data[i].readme = "There is no readme for this project!";
        }else{
            data[i].readme = marked.parse(data[i].readme)
        }
        readme.innerHTML = `<a href="${data[i].url}">Link</a><br>Language: ${data[i].langauge}<br><br>README.md:<br><div class="markdown">${data[i].readme}</div><br><br><br>`
        list.appendChild(title);
        list.appendChild(readme);
    }
}

start();