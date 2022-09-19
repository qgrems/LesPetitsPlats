class TagsUstensils {
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

    renderTagsUstensils() {
        const article = document.createElement("div");
        article.classList.add("tagUstensils");
        article.innerHTML = `
        <div class="tagButtonUstensils ${this.value}"><div class="sizetexttags"><p class="tagText">${this.value}</p></div> <i class="far fa-times-circle quittags" onclick=closeTagsUstensils(event,"${this.index}")></i></div>
        `;
        return article;
    }
}
