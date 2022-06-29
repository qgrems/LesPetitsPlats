class App
{

    constructor()
    {
        this.pageSection = document.querySelector(".page_section");
        this.search = document.querySelector("#containerSearch");
        this.modalFilterAppliance= document.querySelector('card_filer');
        
        this.pageApi = new MenuApi ('./data/menu.json');
    }
    
    async main()
    {
        const menuData = await this.pageApi.getMenu()

        let FiltersIngredients
        let filterIngredient
        let filtersAppareils
        let filterAppareil
        let filtersUstensils
        let filterUstensil

        let tabIngredients={}
        let tabAppareils = {}
        let tabUstensiles = {}
        let tableauingredient = {}

        this.menufiltre = [...menuData.recipes]
        let retourfiltre = actualisationSelectBox(this.menufiltre)
        tabIngredients = retourfiltre.tabIngredients
        tabAppareils = retourfiltre.tabAppareils
        tabUstensiles = retourfiltre.tabUstensiles
        
        let filters
        let filter
        filters = new Search()
        filter = filters.renderSearch()
        this.search.appendChild(filter)
        this.render()

        this.tagIngredients = document.querySelector(".modalFilterIngredients")
        FiltersIngredients = new IngredientsTags(tabIngredients)
        filterIngredient=FiltersIngredients.rendertags()
        this.tagIngredients.appendChild(filterIngredient)

        this.tagAppareil = document.querySelector(".modalFilterAppareils")
        filtersAppareils= new AppareilsTags(tabAppareils)
        filterAppareil = filtersAppareils.rendertags()
        this.tagAppareil.appendChild(filterAppareil)

        this.tagsUstensils = document.querySelector(".modalFilterUstensiles")
        filtersUstensils= new UstensilsTags(tabUstensiles)
        filterUstensil = filtersUstensils.rendertags()
        this.tagsUstensils.appendChild(filterUstensil)
        
        const searchBarre = document.getElementById('search_value')
        searchBarre.addEventListener('keyup', () =>{
            if(search_value.value.length >=3)
            {
                document.querySelector(".page_section").innerHTML=""
                const input = searchBarre.value
                this.tagIngredients.innerHTML=""
                this.tagAppareil.innerHTML=""
                this.tagsUstensils.innerHTML=""
                let resultatFiltre =menuData.recipes.filter(menu=>(menu.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.appliance.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.description.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.ingredients[0].ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())||menu.ingredients[1].ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())))
                this.menufiltre=resultatFiltre
                let retourfiltre = actualisationSelectBox(this.menufiltre)

                tabIngredients = retourfiltre.tabIngredients
                tabAppareils = retourfiltre.tabAppareils
                tabUstensiles = retourfiltre.tabUstensiles
                this.render()

                this.tagIngredients = document.querySelector(".modalFilterIngredients")
                FiltersIngredients = new IngredientsTags(tabIngredients)
                filterIngredient=FiltersIngredients.rendertags()
                this.tagIngredients.appendChild(filterIngredient)
                
                this.tagAppareil = document.querySelector(".modalFilterAppareils")
                filtersAppareils= new AppareilsTags(tabAppareils)
                filterAppareil = filtersAppareils.rendertags()
                this.tagAppareil.appendChild(filterAppareil)
                this.tagsUstensils = document.querySelector(".modalFilterUstensiles")
                filtersUstensils= new UstensilsTags(tabUstensiles)
                filterUstensil = filtersUstensils.rendertags()
                this.tagsUstensils.appendChild(filterUstensil)
            //
            }
            else 
            {
                document.querySelector(".page_section").innerHTML=""
                this.menufiltre = [...menuData.recipes]
                this.render();
            }
        })
       
            let allUstensile = this.menufiltre.map(ust => this.menufiltre)
           
        // tri a l'écrit pour les tags des appareils
        const searchAppareils = document.getElementById('appareils') ;
        searchAppareils.addEventListener('keyup', () =>{
            this.tagAppareil.innerHTML=""
            const valueAppareils = searchAppareils.value
            let resultatFiltreAppareils =menuData.recipes.filter(menu=>(menu.appliance.toLocaleLowerCase().includes(valueAppareils.toLocaleLowerCase())))
            this.menufiltre=resultatFiltreAppareils
            let retourappareil = actualisationSelectBox(this.menufiltre)
            tabAppareils = retourappareil.tabAppareils
            this.tagAppareil = document.querySelector(".modalFilterAppareils")
            filtersAppareils= new AppareilsTags(tabAppareils)
            filterAppareil = filtersAppareils.rendertags()
            this.tagAppareil.appendChild(filterAppareil)
        })
        // tri a l'écrit pour les tags des ingredients
        const searchIngredients = document.getElementById('ingredients')
        searchIngredients.addEventListener('keyup',() =>{
            
            this.tagIngredients.innerHTML=""
            const valueIngredients = searchIngredients.value
            let resultatFilterIngredients = menuData.recipes.filter(menu=>(menu.ingredients[0,1].ingredient.toLocaleLowerCase().includes(valueIngredients.toLocaleLowerCase())))
            this.menufiltre=resultatFilterIngredients
            let retourIngredient = actualisationSelectBox(this.menufiltre)
            tabIngredients = retourIngredient.tabIngredients
            this.tagIngredients = document.querySelector(".modalFilterIngredients")
            FiltersIngredients = new IngredientsTags(tabIngredients)
            filterIngredient = FiltersIngredients.rendertags()
            this.tagIngredients.appendChild(filterIngredient)

            })

        // tri a l'écrit pour les tags des Ustensiles
        const searchUstensils = document.getElementById('ustensiles')
        searchUstensils.addEventListener('keyup',() =>{
            this.tagsUstensils.innerHTML=""
            const valueUstensils = searchUstensils.value
            let resultatFilterUstensils = menuData.recipes.filter(menu=>(menu.ustensils[0].toLocaleLowerCase().includes(valueUstensils.toLocaleLowerCase())))
            this.menufiltre=resultatFilterUstensils
            console.log(this.menufiltre)
            let retourUstensils = actualisationSelectBox(this.menufiltre)
            tabUstensiles = retourUstensils.tabUstensiles
            this.tagsUstensils = document.querySelector(".modalFilterUstensiles")
            filtersUstensils = new UstensilsTags(tabUstensiles)
            filterUstensil = filtersUstensils.rendertags()
            this.tagsUstensils.appendChild(filterUstensil)
        })


    }
    
    render()
    {
        let filters
        let filter
        
        this.menufiltre.forEach((menu) => {
            //affichage des card menu
            const menuModel = new Menus(menu);    
            const userCardDOM = menuModel.render();
            this.pageSection.appendChild(userCardDOM);
        });
    
    }
     ajouFiltreActif(type,value)
    {
        let tag
        let tagActif
        this.tags= document.querySelector("#tags");
        tag = new Tags(type,value)
        tagActif = tag.renderTags()
        this.tags.appendChild(tagActif)
    }
}


const app = new App()
app.main();