// For the hamburger menu bars and times

let show = document.getElementsByClassName("show")[0],
    noList = document.getElementsByClassName("noList")[0],
    noshow = document.getElementsByClassName("noshow")[0],
    times = document.getElementsByClassName("times")[0];

show.addEventListener("click", function(){
    if (show.classList.contains('show')){
        show.classList.remove("show");
        show.classList.add("noshow");
        noshow.classList.remove("noshow");
        noshow.classList.add("show");
        noList.classList.remove("noList");
        noList.classList.add("list");
    }
})
times.addEventListener("click", function(){
    if (times.classList.contains('show')){
        show.classList.remove("noshow");
        show.classList.add("show");
        times.classList.remove("show");
        times.classList.add("noshow");
        noList.classList.remove("list");
        noList.classList.add("noList");
    }
})


// dropdown menu automation 

let drop = document.getElementsByClassName('drop')[0],
    doNotDrop = document.getElementsByClassName('doNotDrop')[0],
    here = document.getElementsByClassName('here')[0];

drop.addEventListener('click', function(){
    if (drop.classList.contains('drop')){
        doNotDrop.classList.toggle('doNotDrop');
    }
})