import { Pipe, PipeTransform } from "@angular/core";
import { Cocktail } from "@app/models/cocktail.model";

@Pipe({
    name: "nonAlcoholic",
})
export class nonAlcoholicPipe implements PipeTransform {
    transform(cocktails: Array<Cocktail>, nonAlcoholic: boolean): Array<Cocktail> {
        if (nonAlcoholic) {
            return cocktails.filter((c: Cocktail) => (c.alcoholic === "Non alcoholic") || (c.alcoholic === "Optional alcohol"));
        } else {
            return cocktails.filter((c: Cocktail) => c.alcoholic === "Alcoholic" || c.alcoholic === "Optional alcohol");
        }
    }
}
