let count = 1;
newFunction();

setInterval( function(){
    nextImage();
},2000)


function newFunction() {
    document.getElementById("radio1").checked = true;
}

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}