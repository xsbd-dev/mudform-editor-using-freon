// Generated by the Freon Language Generator.
import {} from "../../language/gen/index.js";
import { StarterModelWorker, StarterModelDefaultWorker } from "../../utils/gen/index.js";
import { FreNamedNode, FreLanguage, FreLanguageEnvironment, FreNodeReference, FreNode } from "@freon4dsl/core";

export class StarterModelSemanticAnalysisWalker extends StarterModelDefaultWorker implements StarterModelWorker {
    changesToBeMade: Map<FreNode, FreNode> = null;

    constructor(changesToBeMade: Map<FreNode, FreNode>) {
        super();
        this.changesToBeMade = changesToBeMade;
    }

    private findReplacement(modelelement: FreNode, referredElem: FreNodeReference<FreNamedNode>) {
        const scoper = FreLanguageEnvironment.getInstance().scoper;
        const possibles = scoper.getVisibleElements(modelelement).filter((elem) => elem.name === referredElem.name);
        if (possibles.length > 0) {
            // element probably refers to something with another type
            let replacement: FreNode = null;
            for (const elem of possibles) {
                const metatype = elem.freLanguageConcept();
            }
            this.changesToBeMade.set(modelelement, replacement);
        } else {
            // true error, or boolean "true" or "false"
        }
    }
}
