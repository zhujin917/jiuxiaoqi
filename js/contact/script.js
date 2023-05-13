window.addEventListener("load", () => {
    document.getElementById("copyQQNumberBtn").addEventListener("click", function () {
        navigator.clipboard.writeText(this.previousElementSibling.innerText).then(() => {
            this.style.background = "#00B050";
            this.innerText = "已复制";
        });
    });
});