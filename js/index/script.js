window.addEventListener("load", () => {
    document.getElementById("main_content_close").addEventListener("click", () => {
        document.getElementById("main_content").style.opacity = "0";
        document.getElementById("home").style.opacity = "1";
        setTimeout(() => {
            document.getElementById("main_content").style.display = "none";
            document.getElementById("home").style.display = "block";
        }, 200);
    });
    document.getElementById("main_content_frame").addEventListener("load", () => {
        document.getElementById("main_content").style.display = "block";
        setTimeout(() => {
            document.getElementById("main_content").style.opacity = "1";
            document.getElementById("main_loading").style.display = "";
        }, 600);
    });

    document.getElementById("main_home_left_avatar").addEventListener("dblclick", () => {
        document.getElementById("main_home_left_cover").style.display = "block";
        document.getElementById("background_music").style.right = "15px";
        document.getElementById("background_music_audio").play();
    });

    document.getElementById("home_learn").addEventListener("click", () => {
        document.getElementById("main_content_title").innerText = "了解";
        showHomeContent("learn");
    });
    document.getElementById("home_projects").addEventListener("click", () => {
        document.getElementById("main_content_title").innerText = "项目";
        showHomeContent("projects");
    });
    document.getElementById("home_contact").addEventListener("click", () => {
        document.getElementById("main_content_title").innerText = "联系";
        showHomeContent("contact");
    });
    document.getElementById("home_donate").addEventListener("click", () => {
        document.getElementById("main_content_title").innerText = "捐助";
        showHomeContent("donate");
    });
});

function showHomeContent(name) {
    document.getElementById("home").style.opacity = "0";
    document.getElementById("main_loading").style.display = "block";
    document.getElementById("main_content_frame").src = `/html/${name}.html`;
};

window.addEventListener("load", () => {
    let hash = location.hash;
    if (hash.length > 1) {
        let targetDom = document.getElementById(`home_${hash.substring(1)}`);
        if (targetDom) {
            targetDom.click();
        }
    }
});