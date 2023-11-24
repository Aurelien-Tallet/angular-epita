import { Pipe } from "@angular/core";

@Pipe({
    name: "category",
})
export class categoryPipe {
    transform(drinks: Array<any>, category: string): Array<any> {
        if (category === "") {
            return drinks;
        }
        return drinks.filter((drink: any) => drink.strCategory?.toLowerCase() === category.toLowerCase());
    }
}