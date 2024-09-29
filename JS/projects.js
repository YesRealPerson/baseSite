let list = document.getElementById("projects");

const start = async () => {
    let response = await fetch("https://repos.spark952.workers.dev/");
    list.innerHTML = "";
    const data = await response.json();
    console.log(data);
    for(let i = 0; i < data.length; i++){
        let greater = document.createElement("div");
        let title = document.createElement("h3");
        title.className = "projectName";
        title.innerHTML = `<a href="${data[i].url}">${data[i].name}</a>`;
        let readme = document.createElement("div");
        readme.className = "readme";
        if(data[i].readme == "404: Not Found"){
            data[i].readme = "There is no readme for this project!";
        }else{
            data[i].readme = marked.parse(data[i].readme)
        }
        readme.innerHTML = `Language: ${data[i].langauge}<br><br>README.md:<br><div class="markdown">${data[i].readme}</div><br><br><br>`
        greater.appendChild(title);
        greater.appendChild(readme);
        list.appendChild(greater);
    }
}

start();

document.getElementById("searchBox").addEventListener("input", e => {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let projects = document.getElementsByClassName("projectName");
    let readmes = document.getElementsByClassName("readme");
    for(let i = 0; i < projects.length; i++){
        if(projects[i].innerText.toLowerCase().indexOf(query) == -1 && readmes[i].innerText.toLowerCase().indexOf(query) == -1){
            projects[i].parentElement.style.display = "none";
        }else{
            projects[i].parentElement.style.display = "block";
        }
    }
})