var buttonlist = document.getElementsByClassName("button");
var buttons = buttonlist[0].getElementsByTagName("div");
var n = buttons.length;
var content = document.getElementsByClassName("text");
var textcontent = content[0].getElementsByTagName("div");
var arrows = document.getElementsByClassName("arrow");
var arrow = arrows[0].getElementsByTagName("div");


for (let i = 0; i < n; i++) {
    buttons[i].index = i;
    // When click the button, the related text will be shown
    buttons[i].onclick = function () {
        console.log("here");
        for (let j = 0; j < n; j++) {
            buttons[j].className = 'blue';
            textcontent[j].style.display = "none";
            arrow[j].style.visibility = "hidden";    
        }
        arrow[buttons[i].index].style.visibility = "visible";
        textcontent[buttons[i].index].style.display = "block";
        buttons[i].className = 'red';
    }


}