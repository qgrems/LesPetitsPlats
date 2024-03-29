function actualisationSelectBox(menuRestant) {
    let tabIngredients = {};
    let tabAppareils = {};
    let tabUstensiles = {};

    menuRestant.forEach((menu) => {
        for (let j in menu.ingredients) {
            tabIngredients[menu.ingredients[j].ingredient] =
                menu.ingredients[j].ingredient;
        }
        for (let j in menu.ustensils) {
            tabUstensiles[menu.ustensils[j]] = menu.ustensils[j];
        }

        tabAppareils[menu.appliance] = menu.appliance;
    });
    return { tabIngredients, tabAppareils, tabUstensiles };
}

this.pageSection = document.querySelector(".page_section");
let FiltersIngredients;
let filterIngredient;
let filtersAppareils;
let filterAppareil;
let filtersUstensils;
let filterUstensil;

let menuFilterTags = [];

let menuFilterData;
let tabIngredients = {};
let tabAppareils = {};
let tabUstensiles = {};
let tableauingredient = {};

let tagIngredients = document.querySelector(".modalFilterIngredients");
let tagAppareil = document.querySelector(".modalFilterAppareils");
let tagsUstensils = document.querySelector(".modalFilterUstensiles");
tag = 0;
let quitTags = document.querySelector(".quittags");

// triage des cards avec La recherche principale + triage des tags en fonction de la recherche principale
function triageResearch(menuData, tagIngredients, tagAppareil, tagsUstensils) {
    const searchBarre = document.getElementById("search_value");

    const input = searchBarre.value;

    let resultatFiltre = menuData.filter(
        (menu) =>
            menu.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
            menu.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
            menu.description
                .toLocaleLowerCase()
                .includes(input.toLocaleLowerCase()) ||
            menu.ingredients[0].ingredient
                .toLocaleLowerCase()
                .includes(input.toLocaleLowerCase()) ||
            menu.ingredients[1].ingredient
                .toLocaleLowerCase()
                .includes(input.toLocaleLowerCase())
    );

    this.menufiltre = resultatFiltre;

    menuFilterTags = resultatFiltre;
    searchBarre.addEventListener("keyup", () => {
        if (search_value.value.length < 3) {
            let type;
            let value;
            Alltags(
                type,
                value,
                menus,
                tagAppareil,
                filtersAppareils,
                filterAppareil,
                tagIngredients,
                FiltersIngredients,
                filterIngredient,
                tagsUstensils,
                filterUstensil,
                filtersUstensils
            );
            this.menufiltre = menus;
        }
    });
    if (this.menufiltre.length < 1) {
        document.querySelector("#error").innerHTML =
            "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.";
    } else document.querySelector("#error").innerHTML = "";
}
//triage avec les tags
this.filtreAppareil = {};
this.filtreIngredients = {};
this.filtreUstensils = {};
let newFilter;
let incrementation = 0;

let tag2Appareils;
let tag2Ingredients;
let tag2Ustensils;

function Alltags(
    type,
    value,
    menuData,
    tagAppareil,
    filtersAppareils,
    filterAppareil,
    tagIngredients,
    FiltersIngredients,
    filterIngredient,
    tagsUstensils,
    filterUstensil,
    filtersUstensils,
    menuFilterData
) {
    setTimeout(() => {
        triageResearch(menuData, tagIngredients, tagAppareil, tagsUstensils);
        tag2Appareils = tagAppareil;
        tag2Ingredients = tagIngredients;
        tag2Ustensils = tagsUstensils;

        let tagIngredientValid = document.querySelectorAll(
            ".tagIngredients .tagText"
        );
        this.tagTabIngredient = [];
        this.tagTabAppliance = [];
        this.tagTabUstensil = [];
        for (let i = 0; i < tagIngredientValid.length; i++) {
            this.tagTabIngredient.push(tagIngredientValid[i].innerHTML);
        }
        let tagApplianceValid = document.querySelectorAll(".tagAppliance .tagText");

        for (let i = 0; i < tagApplianceValid.length; i++) {
            this.tagTabAppliance.push(tagApplianceValid[i].innerHTML);
        }

        let tagUstensilValid = document.querySelectorAll(".tagUstensils .tagText");

        for (let i = 0; i < tagUstensilValid.length; i++) {
            this.tagTabUstensil.push(tagUstensilValid[i].innerHTML);
        }
        //boucle for sur chaque tagtab

        for (let i in this.tagTabIngredient) {
            this.menufiltre = tritagIngredient(
                this.menufiltre,
                this.tagTabIngredient[i]
            );
        }
        for (let i in this.tagTabAppliance) {
            this.menufiltre = this.menufiltre.filter((menu) =>
                menu.appliance.includes(this.tagTabAppliance)
            );
        }
        for (let i in this.tagTabUstensil) {
            this.menufiltre = triTagUstensil(this.menufiltre, this.tagTabUstensil[i]);
        }
        // faire 3 fonctions

        triageAppareils(
            this.menufiltre,
            tagAppareil,
            filtersAppareils,
            filterAppareil
        );
        triageIngredients(
            this.menufiltre,
            tagIngredients,
            FiltersIngredients,
            filterIngredient
        );
        triageUstensils(
            this.menufiltre,
            tagsUstensils,
            filtersUstensils,
            filterUstensil
        );
        this.pageSection.innerHTML = "";
        tagIngredients.innerHTML = "";
        tagAppareil.innerHTML = "";
        tagsUstensils.innerHTML = "";
        this.retourfiltre = actualisationSelectBox(this.menufiltre);
        rechargeTags(retourfiltre, tagIngredients, tagAppareil, tagsUstensils);

        reaffichage();
    }, 100);
}
function tritagIngredient(ingredientData, tagIngredient) {
    let datas = ingredientData.filter((menu) => {
        for (let i in menu.ingredients) {
            if (menu.ingredients[i].ingredient.includes(tagIngredient)) {
                return true;
            }
        }
        return false;
    });
    return datas;
}

function triTagUstensil(ustensilData, tagUstensil) {
    let datas = ustensilData.filter((menu) => {
        console.log(tagUstensil);
        for (let i in menu.ustensils) {
            if (menu.ustensils[i].includes(tagUstensil)) {
                return true;
            }
        }
        return false;
    });
    return datas;
}

//triage des Appareils

function triageAppareils(
    menuData,
    tagAppareil,
    filtersAppareils,
    filterAppareil
) {
    const searchAppareils = document.getElementById("appareils");
    const searchBarre = document.getElementById("search_value");

    if (searchBarre.value.length < 3) {
        tagAppareil.innerHTML = "";
        const valueAppareils = searchAppareils.value;
        let resultatFiltreAppareils = menuData.filter((menu) =>
            menu.appliance
                .toLocaleLowerCase()
                .includes(valueAppareils.toLocaleLowerCase())
        );
        this.menufiltre = resultatFiltreAppareils;
        let retourappareil = actualisationSelectBox(this.menufiltre);
        tabAppareils = retourappareil.tabAppareils;
        filtersAppareils = new AppareilsTags(tabAppareils);
        filterAppareil = filtersAppareils.rendertags();
        tagAppareil.appendChild(filterAppareil);
    } else {
        tagAppareil.innerHTML = "";
        const valueAppareils = searchAppareils.value;
        let resultatFiltreAppareils = this.menufiltre.filter((menu) =>
            menu.appliance
                .toLocaleLowerCase()
                .includes(valueAppareils.toLocaleLowerCase())
        );
        this.menufiltre = resultatFiltreAppareils;
        let retourappareil = actualisationSelectBox(this.menufiltre);
        tabAppareils = retourappareil.tabAppareils;
        filtersAppareils = new AppareilsTags(tabAppareils);
        filterAppareil = filtersAppareils.rendertags();
        tagAppareil.appendChild(filterAppareil);
    }
}
//triage des Ingredients

function triageIngredients(
    menuData,
    tagIngredients,
    FiltersIngredients,
    filterIngredient
) {
    const searchIngredients = document.getElementById("ingredients");
    const searchBarre = document.getElementById("search_value");
    if (searchBarre.value.length < 3) {
        tagIngredients.innerHTML = "";
        const valueIngredients = searchIngredients.value;
        let resultatFilterIngredients = menuData.filter((menu) => {
            for (let i in menu.ingredients) {
                if (
                    menu.ingredients[i].ingredient
                        .toLocaleLowerCase()
                        .includes(valueIngredients.toLocaleLowerCase())
                ) {
                    return true;
                }
            }
            return false;
            //menu.ingredients[0].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase())))
        });

        this.menufiltre = resultatFilterIngredients;
        let retourIngredient = actualisationSelectBox(this.menufiltre);
        tabIngredients = retourIngredient.tabIngredients;
        FiltersIngredients = new IngredientsTags(tabIngredients);
        filterIngredient = FiltersIngredients.rendertags();
        tagIngredients.appendChild(filterIngredient);
    } else {
        tagIngredients.innerHTML = "";
        const valueIngredients = searchIngredients.value;
        let resultatFilterIngredients = this.menufiltre.filter((menu) => {
            for (let i in menu.ingredients) {
                if (
                    menu.ingredients[i].ingredient
                        .toLocaleLowerCase()
                        .includes(valueIngredients.toLocaleLowerCase())
                ) {
                    return true;
                }
            }
            return false;
            //menu.ingredients[0].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase())))
        });

        this.menufiltre = resultatFilterIngredients;
        let retourIngredient = actualisationSelectBox(this.menufiltre);
        tabIngredients = retourIngredient.tabIngredients;
        FiltersIngredients = new IngredientsTags(tabIngredients);
        filterIngredient = FiltersIngredients.rendertags();
        tagIngredients.appendChild(filterIngredient);
    }
}

//triage Ustensils
function triageUstensils(
    menuData,
    tagsUstensils,
    filtersUstensils,
    filterUstensil
) {
    const searchUstensils = document.getElementById("ustensiles");

    const searchBarre = document.getElementById("search_value");
    if (searchBarre.value.length < 3) {
        tagsUstensils.innerHTML = "";
        const valueUstensils = searchUstensils.value;
        let resultatFilterUstensils = menuData.filter((menu) => {
            for (let i in menu.ustensils) {
                if (
                    menu.ustensils[i]
                        .toLocaleLowerCase()
                        .includes(valueUstensils.toLocaleLowerCase())
                ) {
                    return true;
                }
            }
            return false;
        });

        //(menu.ustensils[0].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase())))
        this.menufiltre = resultatFilterUstensils;
        let retourUstensils = actualisationSelectBox(this.menufiltre);
        tabUstensiles = retourUstensils.tabUstensiles;
        filtersUstensils = new UstensilsTags(tabUstensiles);
        filterUstensil = filtersUstensils.rendertags();
        tagsUstensils.appendChild(filterUstensil);
    } else {
        tagsUstensils.innerHTML = "";
        const valueUstensils = searchUstensils.value;
        let resultatFilterUstensils = this.menufiltre.filter((menu) => {
            for (let i in menu.ustensils) {
                if (
                    menu.ustensils[i]
                        .toLocaleLowerCase()
                        .includes(valueUstensils.toLocaleLowerCase())
                ) {
                    return true;
                }
            }
            return false;
        });

        //(menu.ustensils[0].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase())))
        this.menufiltre = resultatFilterUstensils;
        let retourUstensils = actualisationSelectBox(this.menufiltre);
        tabUstensiles = retourUstensils.tabUstensiles;
        filtersUstensils = new UstensilsTags(tabUstensiles);
        filterUstensil = filtersUstensils.rendertags();
        tagsUstensils.appendChild(filterUstensil);
    }
}

function closeTagsIngredients(event, index) {
    this.pageSection.innerHTML = "";
    let type;
    let value = "";
    event.target.parentElement.parentElement.remove();
    Alltags(
        type,
        value,
        menus,
        tag2Appareils,
        filtersAppareils,
        filterAppareil,
        tag2Ingredients,
        FiltersIngredients,
        filterIngredient,
        tag2Ustensils,
        filterUstensil,
        filtersUstensils
    );
}
let menus;
function allMenu(datasMenu) {
    menus = datasMenu;
}

function closeTagsAppareils(event, index) {
    let type;
    let value = "";
    this.pageSection.innerHTML = "";
    event.target.parentElement.parentElement.remove();
    Alltags(
        type,
        value,
        menus,
        tag2Appareils,
        filtersAppareils,
        filterAppareil,
        tag2Ingredients,
        FiltersIngredients,
        filterIngredient,
        tag2Ustensils,
        filterUstensil,
        filtersUstensils
    );
}
function closeTagsUstensils(event, index) {
    let type;
    let value = "";
    this.pageSection.innerHTML = "";
    event.target.parentElement.parentElement.remove();
    Alltags(
        type,
        value,
        menus,
        tag2Appareils,
        filtersAppareils,
        filterAppareil,
        tag2Ingredients,
        FiltersIngredients,
        filterIngredient,
        tag2Ustensils,
        filterUstensil,
        filtersUstensils
    );
}

function reaffichage() {
    this.pageSection = document.querySelector(".page_section");
    this.pageSection.innerHTML = "";
    this.menufiltre.forEach((menu) => {
        //affichage des card menu
        const menuModel = new Menus(menu);
        const userCardDOM = menuModel.render();
        pageSection.appendChild(userCardDOM);
    });
}

function allUstensils(ustensils) {
    for (let j in ustensils) {
        tabUstensiles[ustensils[j]] = ustensils[j];
        return tabUstensiles[ustensils[j]];
    }
}

function rechargeTags(
    retourfiltre,
    tagIngredients,
    tagAppareil,
    tagsUstensils
) {
    tabIngredients = retourfiltre.tabIngredients;
    tabAppareils = retourfiltre.tabAppareils;
    tabUstensiles = retourfiltre.tabUstensiles;

    FiltersIngredients = new IngredientsTags(tabIngredients);
    filterIngredient = FiltersIngredients.rendertags();
    tagIngredients.appendChild(filterIngredient);

    filtersAppareils = new AppareilsTags(tabAppareils);
    filterAppareil = filtersAppareils.rendertags();
    tagAppareil.appendChild(filterAppareil);

    filtersUstensils = new UstensilsTags(tabUstensiles);
    filterUstensil = filtersUstensils.rendertags();
    tagsUstensils.appendChild(filterUstensil);
}

function triageIngredient(menuData, value) {
    let resultatFiltreIngredients = this.menufiltre.filter((menu) => {
        for (let i in menu.ingredients) {
            if (
                menu.ingredients[i].ingredient
                    .toLocaleLowerCase()
                    .includes(value.toLocaleLowerCase())
            ) {
                return true;
            }
        }
        return false;
    });
    return resultatFiltreIngredients;
}

function triageAppliance(menuData, input) {
    let resultatFiltreAppliance = menuData.filter((menu) =>
        menu.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );

    return resultatFiltreAppliance;
}
function triageUstensil(menuData, value) {
    let resultatFiltreUstensils = menuData.filter((menu) => {
        for (let i in menu.ustensils) {
            if (
                menu.ustensils[i]
                    .toLocaleLowerCase()
                    .includes(value.toLocaleLowerCase())
            ) {
                return true;
            }
        }
        return false;
    });
    return resultatFiltreUstensils;
}
