

// console.log("connected succesfully")

document.getElementById("post-pop-up").addEventListener("click", function(){
    document.getElementsByClassName("section2-upload-like-comment")[0].classList.add("active")
});


document.getElementById("post").addEventListener("click", function(){
    document.getElementsByClassName("Upload-container")[0].classList.add("active")
});


function toggle(){
    var blur= document.getElementById("blur1");

    blur.classList.toggle("active")

    var blur= document.getElementById("blur2");

    blur.classList.toggle("active")

    var blur= document.getElementById("blur3");

    blur.classList.toggle("active")

    var blur= document.getElementById("blur4");

    blur.classList.toggle("active")
}



// console.log(-1)

document.getElementById("post-pop-up").addEventListener("click", function(){
    document.getElementsByClassName("Upload-container")[0].classList.remove("active")
});

document.getElementById("remove-pop-up").addEventListener("click", function(){
    document.getElementsByClassName("Upload-container")[0].classList.remove("active")
});

// console.log(0)

var text= document.getElementById("title");

var imgbox = document.getElementById("imgbox");

// console.log(1)

text.onkeyup= text.onkeypress= function(){
    document.getElementById("prev-text").innerHTML= this.value;
}

var loadFile = function(event){
    imgbox.style.backgroundImage= "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}

// console.log(2)




let like= document.querySelector(".ri-heart-fill");
let dislike= document.querySelector(".ri-dislike-fill");
// let like= document.querySelectorAll(".ri-heart-3-line");
let retweet= document.querySelector(".ri-loop-right-line");


let input1= document.querySelector("#input1");
let input2= document.querySelector("#input2");
let input4= document.querySelector("#input4");

like.addEventListener('click', ()=>{
    input1.value= parseInt(input1.value) + 1;
    input1.style.color = "red";
    like.style.color= "red";
});

dislike.addEventListener('click', ()=>{
    input2.value= parseInt(input2.value) + 1;
    
});

retweet.addEventListener('click', ()=>{
    input4.value= parseInt(input4.value) + 1;
});


