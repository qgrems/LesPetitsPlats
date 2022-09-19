class MenuApi {
    constructor(url) {
        this.url = url
    }

    getMenu() {
        return fetch(this.url).then(Res => Res.json())
    }
}