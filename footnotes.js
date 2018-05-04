let wrapper     = document.getElementById("popup-wrapper"); 
let index       = document.getElementById("popup-index"); 
let content     = document.getElementById("popup-content"); 
let closeButton = document.getElementById("popup-close"); 

function getFootnoteContent(index) {
    let fnCount = document.getElementById("fn:1").parentNode.children.length;
    let fnList = []; 
    for (let x=1; x <= fnCount; x++) {
        let footnote = document.getElementById(`fn:${x}`);
        fnList.push(footnote);
    };

    return fnList[index-1].innerHTML.trim();
};

function footnotePopup() {
    let fnReturn = document.getElementsByClassName("footnote-return"); 
    while (fnReturn.length > 0) {
        fnReturn[0].parentNode.removeChild(fnReturn[0]);
    };

    let refList = document.querySelectorAll("sup");
    for (let x = 0; x < refList.length; x++) {
        refList[x].addEventListener("click", function(event) {
            event.preventDefault();    
            index.innerHTML = refList[x].id.substring(6,7) + ".";            
            content.innerHTML = getFootnoteContent(refList[x].id.substring(6,7));
            wrapper.style.display = "flex";
        });
    };

    closeButton.addEventListener("click", function(event) {
        wrapper.style.display = "none";
    });
};

footnotePopup();
