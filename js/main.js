function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);

}

function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

function drag_over(event) {
    event.preventDefault();
    return false;
}
var list = document.getElementById('list');
var num = 3;

function changeText2(e) {
    var path = e.slot;
    var node = document.createElement("LI");                
    var myImage = new Image(80,80);
    myImage.src = path;
    myImage.draggable=false;      
    node.appendChild(myImage);   
    node.className="item";
    node.draggable=true;       
    node.ondragstart=function(){drag_start(event)};
    num +=1;
    node.id="txt"+num;
    document.getElementById("list").appendChild(node);
}




var previewimg=document.getElementById("previewimg");



//********************menu***************************\\


function menu(selector) {
    let menu = $(selector);
    let button = menu.find('.menu-button');
    let items = menu.find('.menu-item');
    let preview = menu.find('.preview');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    items.on('mouseenter', (event) => {
        let target = event.target;
        if (target.className == 'menu-item') {
        previewimg.src=target.slot;
            
            
        }
    });

    items.on('mouseleave', (event) => {
        button.css('background-color','white');
    });

    function toggleMenu() {
        menu.toggleClass('menu-active');
        if (menu.hasClass('menu-active')) {
            preview.css('left', '230px');
            $('body').css('overflow', 'hidden')
        } else {
            $('body').css('overflow', 'visible')
            preview.css('left', '-10%');
        }
    }
}
<<<<<<< HEAD
menu('.menu');
=======
menu('.menu');
>>>>>>> a34aa5a06ecc7f596e1e4e3d012e7d80c3741db8
