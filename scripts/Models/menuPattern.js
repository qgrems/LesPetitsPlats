class Menus {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._servings = data.servings;
        this._time = data.time;
        this._description = data.description;
        this._appliance = data.appliance;
        this._ustensils = data.ustensils;
        this._ingredients = data.ingredients;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get serving() {
        return this._serving;
    }
    get ingredients() {
        return this._ingredients;
    }
    get time() {
        return this._time;
    }
    get description() {
        return this._description;
    }
    get appliance() {
        return this._appliance;
    }
    get ustensils() {
        return this._ustensils;
    }
    get quantity() {
        return this._quantity;
    }
    get unit() {
        return this._unit;
    }
    render() {
        let ingredients = "";
        for (let i in this._ingredients) {
            if (this._ingredients[i].quantity && this._ingredients[i].unit) {
                ingredients += `<p>${this.ingredients[i].ingredient}:${this.ingredients[i].quantity} ${this.ingredients[i].unit}</p>`;
            } else if (this._ingredients[i].quantity) {
                ingredients += `<p>${this.ingredients[i].ingredient}:${this.ingredients[i].quantity}</p>`;
            }
        }

        const article = document.createElement("article");
        article.innerHTML = `
        <div class="card">
            <header class="card_header">
            </header>
            <footer class="card_footer">
                <div class="card_name_time">
                    <p>${this.name}</p>
                    <p><i class="far fa-clock"></i>${this.time}</p>
                </div>
                <div class="card_ingredients_description">
                    <div class="card_ingredients">
                    ${ingredients}
                    </div>
                    <div class="card_description">
                        <p class="description">${this._description}</p>
                    </div>
                </div>
            </footer>
        </div>
        `;
        return article;
    }
}
