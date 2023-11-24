import { Pipe, PipeTransform } from "@angular/core";
import { Drink } from "@app/models/drink.interface";

@Pipe({
    name: "nonAlcoholic",
})
export class nonAlcoholicPipe implements PipeTransform {
    transform(drinks: Array<Drink>, nonAlcoholic: boolean): Array<Drink> {
        if (nonAlcoholic) {
            return drinks.filter((drink: Drink) => (drink.strAlcoholic === "Non alcoholic") || (drink.strAlcoholic === "Optional alcohol"));
        } else {
            return drinks.filter((drink: Drink) => drink.strAlcoholic === "Alcoholic" || drink.strAlcoholic === "Optional alcohol");
        }
    }
}
