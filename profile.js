export class Profile {
    constructor(title, name, url) {
        this.title = title;
        this.name = name;
        this.url = url;
    }

    get data() {
        return {
            title: this.title,
            name: this.name,
            url: this.url,
        };
    };
}