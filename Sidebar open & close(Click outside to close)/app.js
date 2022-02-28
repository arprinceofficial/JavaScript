VerifyProduct = document.getElementById('VerifyProduct');
sidebar = document.getElementById('sidebar');
VerifyProduct.addEventListener('click', function(event) {
    sidebar.classList.toggle('active');
});
close = document.getElementById('close');
close.addEventListener('click', function(event) {
    sidebar.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (sidebar.classList.contains('active') && !event.target.isEqualNode(VerifyProduct) && !event.target.isEqualNode(sidebar) && !sidebar.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});