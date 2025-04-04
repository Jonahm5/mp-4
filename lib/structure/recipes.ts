import {ExtendedIngredient} from "@/lib/structure/extendedIngredients";
import {AnalyzedInstructions} from "@/lib/structure/analyzedInstructions";


export interface Recipe{
    title: string;
    image: string;
    readyInMinutes: number;
    extendedIngredients: ExtendedIngredient[];
    analyzedInstructions: AnalyzedInstructions[];
}