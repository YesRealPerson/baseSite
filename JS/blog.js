let dates = document.getElementsByClassName("date");
let blogTitle = document.getElementsByClassName("blogTitle");

const dateSearch = (query) => {
    for(let i = 0; i < dates.length; i++){
        let item = dates[i];
        let text = item.innerHTML.toLowerCase();
        if(text.indexOf(query) == -1){
            item.parentElement.parentElement.style.display = "none";
        }else{
            item.parentElement.parentElement.style.display = "block";
        }
    }
}

const titleSearch = (query) => {
    for(let i = 0; i < blogTitle.length; i++){
        let item = blogTitle[i];
        let text = item.innerHTML.toLowerCase();
        if(text.indexOf(query) == -1){
            item.parentElement.parentElement.style.display = "none";
        }else{
            item.parentElement.parentElement.style.display = "block";
        }
    }
}

document.getElementById("searchBox").addEventListener("input", e => {
    let query = document.getElementById("searchBox").value.toLowerCase();
    if(query.indexOf("/") == -1){
        titleSearch(query);
    }else{
        dateSearch(query);
    }
})