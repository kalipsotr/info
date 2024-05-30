function copyToClipboard(elementId) {
    var text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(function() {
        var popup = document.getElementById("popup");
        popup.classList.add("show");
        setTimeout(function() {
            popup.classList.remove("show");
        }, 3000);
    }, function(err) {
        console.error('Kopyalama hatası: ', err);
    });
}
