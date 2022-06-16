

function closeModalFilter()
{
    document.querySelector('.ingredients').style.width= "150px"
    document.querySelector('.appareils').style.width= "150px"
    document.querySelector('.ustensiles').style.width= "150px"
    document.querySelector('#arrowIngredients').classList.remove('rotate');
    document.querySelector('#arrowAppareils').classList.remove('rotate');
    document.querySelector('#arrowUstensils').classList.remove('rotate');
    document.querySelector(".modalFilterIngredients").style.display = "none";
    document.querySelector(".modalFilterAppareils").style.display = "none";
    document.querySelector(".modalFilterUstensiles").style.display = "none";
}

function launchModalIngredients(dataIngredients)
{
    document.querySelector('.ingredients').style.width= "500px"
    document.querySelector('.appareils').style.width= "150px"
    document.querySelector('.ustensiles').style.width= "150px"
    document.querySelector('#arrowIngredients').classList.add('rotate');
    document.querySelector('#arrowAppareils').classList.remove('rotate');
    document.querySelector('#arrowUstensils').classList.remove('rotate');
    document.querySelector(".modalFilterIngredients").style.display = "flex";
    document.querySelector(".modalFilterAppareils").style.display = "none";
    document.querySelector(".modalFilterUstensiles").style.display = "none";
}

function launchModalAppareils(dataAppareils)
{
    document.querySelector('.ingredients').style.width= "150px"
    document.querySelector('.ustensiles').style.width= "150px"
    document.querySelector('.appareils').style.width= "400px"
    document.querySelector('#arrowUstensils').classList.remove('rotate');
    document.querySelector('#arrowIngredients').classList.remove('rotate');
    document.querySelector('#arrowAppareils').classList.add('rotate');
    document.querySelector(".modalFilterAppareils").style.display = "flex";
    document.querySelector(".modalFilterIngredients").style.display = "none";
    document.querySelector(".modalFilterUstensiles").style.display = "none";
}

function launchModalUstensils(dataUstensils)
{
    document.querySelector('.ingredients').style.width= "150px"
    document.querySelector('.appareils').style.width= "150px"
    document.querySelector('.ingredients').style.width= "150px"
    document.querySelector('.ustensiles').style.width= "400px"
    document.querySelector('#arrowIngredients').classList.remove('rotate');
    document.querySelector('#arrowAppareils').classList.remove('rotate');
    document.querySelector('#arrowUstensils').classList.add('rotate');
    document.querySelector(".modalFilterUstensiles").style.display = "flex";
    document.querySelector(".modalFilterIngredients").style.display = "none";
    document.querySelector(".modalFilterAppareils").style.display = "none";
}