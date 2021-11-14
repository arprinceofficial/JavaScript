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