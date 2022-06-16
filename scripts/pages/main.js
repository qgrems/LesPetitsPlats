class App
{

    constructor()
    {
        this.pageSection = document.querySelector(".page_section");
        this.search = document.querySelector("#containerSearch");
        this.tags= document.querySelector('#tags');
        this.modalFilterAppliance= document.getElementsByClassName('modalFilterAppareils');
        this.pageApi = new MenuApi ('./data/menu.json');
    }


    async main()
    {

        function filterFiltre (menu)
        {
            for(let j in menu.ingredients)
            {

                    tabIngredients[menu.ingredients[j].ingredient] = menu.ingredients[j].ingredient

            }
            for(let j in menu)
            {
                tabUstensiles[menu.ustensils] = menu.ustensils
            }
            for(let j in menu)
            {
                tabAppareils[menu.appliance] = menu.appliance
            }    
        }
        const menuData = await this.pageApi.getMenu()

        let filters
        let filter

   

        let tabIngredients={}
        let tabAppareils = {}
        let tabUstensiles = {}

        this.menufiltre = [...menuData.recipes]
        let retourfiltre = actualisationSelectBox(this.menufiltre)
        tabIngredients = retourfiltre.tabIngredients
        tabAppareils = retourfiltre.tabAppareils
        tabUstensiles = retourfiltre.tabUstensiles

        filters = new Search(tabIngredients,tabAppareils,tabUstensiles)
        filter = filters.renderSearch()
        this.search.innerHTML=""
        this.search.appendChild(filter);
        this.render();
        const searchBarre = document.getElementById('search_value');
        searchBarre.addEventListener('keyup', () =>{
            if(search_value.value.length >=3)
            {
                document.querySelector(".page_section").innerHTML=""
                const input = searchBarre.value
                let resultatFiltre =menuData.recipes.filter(menu=>(menu.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || menu.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.description.toLocaleLowerCase().includes(input.toLocaleLowerCase())))
                this.menufiltre=resultatFiltre
                let retourfiltre = actualisationSelectBox(this.menufiltre)
                tabIngredients = retourfiltre.tabIngredients
                tabAppareils = retourfiltre.tabAppareils
                tabUstensiles = retourfiltre.tabUstensiles
                filters = new Search(tabIngredients,tabAppareils,tabUstensiles)
                filter = filters.renderSearch()
                this.search.innerHTML=""
                this.search.appendChild(filter);
                this.render()

            //let ingredientsFilter = menu.ingred   ients.filter(ingredients => ingredients.ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
            }
            else 
            {
                document.querySelector(".page_section").innerHTML=""
                this.menufiltre = [...menuData.recipes]
                this.render();
            }
        })
        const searchAppareils = document.getElementById('appareils') ;
        searchAppareils.addEventListener('keyup', () =>{
            
            const valueAppareils = searchAppareils.value
            let resultatFiltreAppareils =menuData.recipes.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(valueAppareils.toLocaleLowerCase())))
            this.menufiltre=resultatFiltreAppareils
            let retourappareil = actualisationSelectBox(this.menufiltre)
            tabAppareils = retourappareil.tabAppareils
            this.search.innerHTML=""
            filters = new Search(tabIngredients,tabAppareils,tabUstensiles)
            filter = filters.renderSearch()
            this.modalFilterAppliance.innerHTML=""
            this.search.appendChild(filter);
            this.render()
        })
    }
    render()
    {
        this.menufiltre.forEach((menu) => {
            
            //affichage des card menu
            const menuModel = new Menus(menu);        
            const userCardDOM = menuModel.render();
            this.pageSection.appendChild(userCardDOM);
        });
    }
     ajouFiltreActif(type,value)
    {
        const tag = new Tags(type,value)
        this.tags = tag.renderTags()
        this.tags.appendChild(tags);
        this.renderTags()
    }
}


const app = new App()
app.main();