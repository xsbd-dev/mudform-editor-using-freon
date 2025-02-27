// Generated by the Freon Language Generator.
// Will be overwritten with every generation.
import { InterpreterContext, RtObject, RtError } from "@freon4dsl/core";
import {
    ValueDef,
    SimpleValueDef,
    EntityDef,
    TransitionDef,
    ValueAttribute,
    ReferenceAttribute,
    DbType,
    ConceptDefinitions,
} from "../../language/gen/index.js";

/**
 * The base class containing all interpreter functions that should be defined.
 * All functions throw an error when called.
 */
export class MuDForM_ModelInterpreterBase {
    constructor() {}

    evalValueDef(node: ValueDef, ctx: InterpreterContext): RtObject {
        throw new RtError("evalValueDef is not defined");
    }

    evalSimpleValueDef(node: SimpleValueDef, ctx: InterpreterContext): RtObject {
        throw new RtError("evalSimpleValueDef is not defined");
    }

    evalEntityDef(node: EntityDef, ctx: InterpreterContext): RtObject {
        throw new RtError("evalEntityDef is not defined");
    }

    evalTransitionDef(node: TransitionDef, ctx: InterpreterContext): RtObject {
        throw new RtError("evalTransitionDef is not defined");
    }

    evalValueAttribute(node: ValueAttribute, ctx: InterpreterContext): RtObject {
        throw new RtError("evalValueAttribute is not defined");
    }

    evalReferenceAttribute(node: ReferenceAttribute, ctx: InterpreterContext): RtObject {
        throw new RtError("evalReferenceAttribute is not defined");
    }

    evalDbType(node: DbType, ctx: InterpreterContext): RtObject {
        throw new RtError("evalDbType is not defined");
    }

    evalConceptDefinitions(node: ConceptDefinitions, ctx: InterpreterContext): RtObject {
        throw new RtError("evalConceptDefinitions is not defined");
    }
}
