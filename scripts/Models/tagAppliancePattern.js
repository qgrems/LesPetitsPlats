class TagsAppliance {
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

    renderTagsAppliance() {
        const article = document.createElement("div");
        article.classList.add("tagAppliance");
        article.innerHTML = `<div class="tagButtonAppliance ${this.index}"><div class="sizetexttags"><p class="tagText">${this.value}</p> </div><i class="far fa-times-circle quittags" onclick=closeTagsAppareils(event,"${this.index}")></i></div>
        `;
        return article;
    }
}
