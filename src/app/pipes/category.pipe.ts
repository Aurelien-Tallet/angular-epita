import { Pipe } from "@angular/core";
import { Cocktail } from "@app/models/cocktail.model";

@Pipe({
    name: "category",
})
export class categoryPipe {
    transform(cocktails: Array<Cocktail>, category: string): Array<Cocktail> {
        if (category === "") {
            return cocktails;
        }
        return cocktails.filter((c: Cocktail) => c.category?.toLowerCase() === category.toLowerCase());
    }
}