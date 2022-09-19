let i = 0;
let j = 0;
let k = 0;
function closeModalFilter() {
    closeTags();
    document.querySelector(".ingredients").style.width = "150px";
    document.querySelector(".appareils").style.width = "150px";
    document.querySelector(".ustensiles").style.width = "150px";
    document.querySelector("#arrowIngredients").classList.remove("rotate");
    document.querySelector("#arrowAppareils").classList.remove("rotate");
    document.querySelector("#arrowUstensils").classList.remove("rotate");
    document.querySelector(".modalFilterIngredients").style.display = "none";
    document.querySelector(".modalFilterAppareils").style.display = "none";
    document.querySelector(".modalFilterUstensiles").style.display = "none";
}

function launchModalIngredients(dataIngredients) {
    i++;
    if (j == 1) {
        j--;
    }
    if (k == 1) k--;

    document.querySelector(".ingredients").style.width = "310px";
    document.querySelector(".appareils").style.width = "150px";
    document.querySelector(".ustensiles").style.width = "150px";
    document.querySelector(".modalFilterIngredients").style.width = "310px";
    document.querySelector("#arrowIngredients").classList.add("rotate");
    document.querySelector("#arrowAppareils").classList.remove("rotate");
    document.querySelector("#arrowUstensils").classList.remove("rotate");
    document.querySelector(".modalFilterIngredients").style.display = "flex";
    document.querySelector(".modalFilterAppareils").style.display = "none";
    document.querySelector(".modalFilterUstensiles").style.display = "none";
    if (i == 2) {
        closeModalFilter();
    }
}

function launchModalAppareils(dataAppareils) {
    j++;
    if (i == 1) {
        i--;
    }
    if (k == 1) k--;

    document.querySelector(".ingredients").style.width = "150px";
    document.querySelector(".ustensiles").style.width = "150px";
    document.querySelector(".appareils").style.width = "310px";
    document.querySelector(".modalFilterAppareils").style.width = "310px";
    document.querySelector("#arrowUstensils").classList.remove("rotate");
    document.querySelector("#arrowIngredients").classList.remove("rotate");
    document.querySelector("#arrowAppareils").classList.add("rotate");
    document.querySelector(".modalFilterAppareils").style.display = "flex";
    document.querySelector(".modalFilterIngredients").style.display = "none";
    document.querySelector(".modalFilterUstensiles").style.display = "none";
    if (j == 2) {
        closeModalFilter();
    }
}

function launchModalUstensils(dataUstensils) {
    k++;
    if (i == 1) {
        i--;
    }
    if (j == 1) j--;

    document.querySelector(".ingredients").style.width = "150px";
    document.querySelector(".appareils").style.width = "150px";
    document.querySelector(".ustensiles").style.width = "310px";
    document.querySelector(".modalFilterUstensiles").style.width = "310px";
    document.querySelector("#arrowIngredients").classList.remove("rotate");
    document.querySelector("#arrowAppareils").classList.remove("rotate");
    document.querySelector("#arrowUstensils").classList.add("rotate");
    document.querySelector(".modalFilterUstensiles").style.display = "flex";
    document.querySelector(".modalFilterIngredients").style.display = "none";
    document.querySelector(".modalFilterAppareils").style.display = "none";
    if (k == 2) {
        closeModalFilter();
    }
}

function closeTags() {
    if (i == 2) {
        i = i - 2;
        if (j == 1) {
            j--;
        }
        if (k == 1) {
            k--;
        }
    }
    if (j == 2) {
        j = j - 2;
        if (i == 1) {
            i--;
        }
        if (k == 1) {
            k--;
            console.log("wow");
        }
    }
    if (k == 2) {
        k = k - 2;
        if (j == 1) {
            j--;
        }
        if (i == 1) {
            i--;
        }
    }
}
