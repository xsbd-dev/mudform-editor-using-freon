// Generated by the Freon Language Generator.
import { FreError, FreErrorSeverity } from "@freon4dsl/core";
import { MuDForM_ModelDefaultWorker } from "../utils/gen/MuDForM_ModelDefaultWorker.js";
import { MuDForM_ModelCheckerInterface } from "./gen/MuDForM_ModelValidator.js";

export class CustomMuDForM_ModelValidator extends MuDForM_ModelDefaultWorker implements MuDForM_ModelCheckerInterface {
    errorList: FreError[] = [];
}
