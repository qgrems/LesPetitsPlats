class Ingredients {
    constructor(ingredients) {
        this._ingredient = ingredients.ingredient;
        this._quantity = ingredients.quantity;
        this._unit = ingredients.unit;
    }

    get ingredient() {
        return this._ingredient;
    }
    get quantity() {
        return this._quantity;
    }
    get unit() {
        return this._unit;
    }

    renderIngredient() {
        const article = document.createElement("section");
        article.innerHTML = `
        <div>
           
        </div>
        
        `;
    }
}
