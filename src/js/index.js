var head = document.getElementsByTagName('HEAD')[0];

window.addEventListener("load", initPageLoadEvent)

function initPageLoadEvent() {
    // Create the stylesheet for the document
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './../src/styles/style.css';
    head.appendChild(link);

    // Extras
    
}