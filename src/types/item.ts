import {Tag} from "./tag";

export class Item {
    name: string;
    description: string;
    src: string;
    tags:Tag[];

    constructor(name: string, description: string, tags:Tag[], src: string) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.src = src;
    }
}