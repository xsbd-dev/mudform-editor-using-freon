// Generated by the Freon Language Generator.
import { FreError, FreErrorSeverity } from "@freon4dsl/core";
import { StarterModelDefaultWorker } from "../utils/gen/StarterModelDefaultWorker.js";
import { StarterModelCheckerInterface } from "./gen/StarterModelValidator.js";

export class CustomStarterModelValidator extends StarterModelDefaultWorker implements StarterModelCheckerInterface {
    errorList: FreError[] = [];
}
