var istatus = document.querySelector("h2");
var btn = document.querySelector("#add");
check = 0;

btn.addEventListener("click",function() {
    if(check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "grey";
        btn.style.color = "black";
        check = 1;
    }
     else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        check = 0;
    }
})