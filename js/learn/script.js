window.addEventListener("load", () => {
    for (let i = 0; i < document.getElementById("right").children.length; i += 1) {
        let elem = document.getElementById("right").children[i];
        let key = document.createElement("div");
        key.classList.add("entry");
        key.innerText = `关于${elem.children[0].innerText}...`;
        elem.children[0].innerText = `关于「${elem.children[0].innerText}」`;
        if (i === 0) {
            key.classList.add("left-active");
            elem.classList.add("right-active");
        }
        key.addEventListener("click", () => {
            document.getElementsByClassName("left-active")[0].classList.remove("left-active");
            key.classList.add("left-active");
            document.getElementsByClassName("right-active")[0].classList.remove("right-active");
            elem.classList.add("right-active");
            refreshBtn();
        });
        document.getElementById("left").appendChild(key);
    }

    document.getElementById("previous").addEventListener("click", () => {
        let previous = document.getElementsByClassName("left-active")[0].previousElementSibling;
        if (previous != undefined) {
            previous.scrollIntoView();
            previous.click();
        }
    });
    document.getElementById("next").addEventListener("click", () => {
        let next = document.getElementsByClassName("left-active")[0].nextElementSibling;
        if (next != undefined) {
            next.scrollIntoView();
            next.click();
        }
    });
});

function refreshBtn() {
    if (document.getElementsByClassName("left-active")[0].previousElementSibling == undefined) {
        document.getElementById("previous").classList.add("btn-disabled");
    }
    else {
        document.getElementById("previous").classList.remove("btn-disabled");
    }
    if (document.getElementsByClassName("left-active")[0].nextElementSibling == undefined) {
        document.getElementById("next").classList.add("btn-disabled");
    }
    else {
        document.getElementById("next").classList.remove("btn-disabled");
    }
};