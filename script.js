document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const footer = document.getElementById('footer');
    footer.innerHTML = `Copyright &copy; ${currentYear} Front BootCamp`;
});
