const popupWrapper = document.querySelector("#popup-wrapper");
const popupIndex = document.querySelector("#popup-index");
const popupContent = document.querySelector("#popup-content");
const popupCloseButton = document.querySelector("#popup-close");

function getFootnoteContent(index) {
    const id = "fn:" + index;
    const fn = document.getElementById(id);
    return fn.innerHTML.trim();
};

function footnotePopup() {
    const fnReturns = document.querySelectorAll("a.footnote-return");
    const fnRefs = document.querySelectorAll("sup.footnote-ref");

    fnReturns.forEach(function(fnReturn) {
        const parent = fnReturn.parentNode;
        parent.removeChild(fnReturn);
    });

    fnRefs.forEach(function(fnRef) {
        fnRef.addEventListener("click", handler("refs", fnRef));
    });

    window.addEventListener("scroll", handler("close"));
    popupCloseButton.addEventListener("click", handler("close"));

    function handler(type, node) {
        return function(event) {
            if (type === "close") {
                popupWrapper.style.display = "none";
            }

            if (type === "refs") {
                event.preventDefault();

                const index = node.id.substring(6, 7);
                popupIndex.innerHTML = index + ".";
                popupContent.innerHTML = getFootnoteContent(index);
                popupWrapper.style.display = "flex";
            }
        };
    };
};

footnotePopup();
