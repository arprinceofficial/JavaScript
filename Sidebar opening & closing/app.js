// const toggle = document.getElementById('toggle');
// console.log('Toggle: ', toggle);
// console.log('Document Ready State', document.readyState);
// toggle.onclick = function() {
//     toggle.classList.toggle('active');
// }

// const toggle = document.getElementById('toggle');
// const sidebar = document.getElementById('sidebar');

// document.onclick = function(e) {
//     if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
//         toggle.classList.remove('active');
//         sidebar.classList.remove('active');
//     }
// }

// toggle Animation
let toggle = document.querySelector('#toggle');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}


// sidebar open & close
let toggleBtn = document.querySelector('#toggle');

function toggleSidebar() {
    let sideBarNode = document.querySelector('#sidebar');
    sideBarNode.classList.toggle('show');

}

toggleBtn.addEventListener('click', toggleSidebar);


// changing background color by clicking div 
var bool = true;

function myFunction() {



    (bool) ? document.getElementById("sidebar").style.background = "red":
        document.getElementById("sidebar").style.background = "yellow";
    bool = !bool;

}



// RightArrow on & off
let RightArrow = document.querySelector('#RightArrow');
RightArrow.onclick = function() {
    RightArrow.classList.toggle('active');

    // console.log('RightArrow.classList: ', RightArrow.classList);

    // RightArrow.classList.toggle('active');

    // console.log('After Add Method: ');
    // console.log('RightArrow.classList: ', RightArrow.classList);

}


// mouseoverHandler by hover mouse and see the magic 
function clickHandler(event) {
    console.log('Click Handler', event);
}

function mouseoverHandler(event) {
    console.log('Mouseover Handler: ', event);
}

RightArrow.addEventListener('click', clickHandler);
RightArrow.addEventListener('mouseover', () => {
    console.log('Mouse Over');
});

RightArrow.addEventListener('mouseenter', () => {
    console.log('Mouse enter')
})



// sidebar2 bottom to up start here
let sidebar2 = document.querySelector('#sidebar-02');
let bottombtn = document.querySelector('#toggle-02');

bottombtn.onclick = function() {
    bottombtn.classList.toggle('active');
    sidebar2.classList.toggle('show-02');
}