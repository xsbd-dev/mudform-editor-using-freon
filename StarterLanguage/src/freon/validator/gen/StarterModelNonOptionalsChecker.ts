// Generated by the Freon Language Generator.
import { FreError, FreErrorSeverity, FreWriter, FreLanguageEnvironment } from "@freon4dsl/core";
import { StarterModel, DummyUnit } from "../../language/gen/index.js";
import { StarterModelDefaultWorker } from "../../utils/gen/index.js";
import { StarterModelCheckerInterface } from "./StarterModelValidator.js";

/**
 * Class StarterModelNonOptionalsChecker is part of the implementation of the default validator.
 * It checks whether non-optional properties, as such defined in the .ast definition, indeed
 * have a value.
 * Class StarterModelWalker implements the traversal of the model tree. This class implements
 * the actual checking of each node in the tree.
 */
export class StarterModelNonOptionalsChecker extends StarterModelDefaultWorker implements StarterModelCheckerInterface {
    // 'myWriter' is used to provide error messages on the nodes in the model tree
    myWriter: FreWriter = FreLanguageEnvironment.getInstance().writer;
    // 'errorList' holds the errors found while traversing the model tree
    errorList: FreError[] = [];

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * If an error is found, it is considered 'fatal', which means that no other checks on
     * 'modelelement' are performed.
     *
     * @param modelelement
     */
    public execBeforeStarterModel(modelelement: StarterModel): boolean {
        if (modelelement.name === null || modelelement.name === undefined || modelelement.name?.length === 0) {
            this.errorList.push(
                new FreError("Property 'name' must have a value", modelelement, modelelement.name, "name", FreErrorSeverity.Error),
            );
        }

        return false;
    }

    /**
     * Checks 'modelelement' before checking its children.
     * Found errors are pushed onto 'errorlist'.
     * If an error is found, it is considered 'fatal', which means that no other checks on
     * 'modelelement' are performed.
     *
     * @param modelelement
     */
    public execBeforeDummyUnit(modelelement: DummyUnit): boolean {
        if (modelelement.name === null || modelelement.name === undefined || modelelement.name?.length === 0) {
            this.errorList.push(
                new FreError("Property 'name' must have a value", modelelement, modelelement.name, "name", FreErrorSeverity.Error),
            );
        }

        return false;
    }
}
