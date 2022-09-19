class Tags {
    constructor(type, value, index) {
        this._value = value;
        this._type = type;
        this._index = index;
    }

    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get index() {
        return this._index;
    }

    renderTags() {
        const article = document.createElement("div");
        article.classList.add("tagIngredients");
        article.innerHTML = `
        <div class="tagButtonIngredients"><div class="sizetexttags"><p class="tagText">${this.value}</p></div><i class="far fa-times-circle quittags" onclick=closeTagsIngredients(event,"${this.index}")></i></div>
        `;
        return article;
    }
}
