// Generated by the Freon Language Generator.
import {
    ConceptDefinitions,
    DbType,
    EntityDef,
    MuDForM_Model,
    ReferenceAttribute,
    SimpleValueDef,
    TransitionDef,
    ValueAttribute,
    ValueDef,
} from "../../language/gen/index.js";
import { MuDForM_ModelWorker } from "./MuDForM_ModelWorker.js";

/**
 * Class MuDForM_ModelDefaultWorker is part of the implementation of the visitor pattern on models.
 * It implements the interface MuDForM_ModelWorker with empty methods, and can thus be used as
 * base to any class that needs to traverse the model tree.
 * Class MuDForM_ModelWalker implements the traversal of the model tree. This class implements
 * the actual visiting of each node in the tree.
 */
export class MuDForM_ModelDefaultWorker implements MuDForM_ModelWorker {
    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeMuDForM_Model(modelelement: MuDForM_Model): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterMuDForM_Model(modelelement: MuDForM_Model): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeConceptDefinitions(modelelement: ConceptDefinitions): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterConceptDefinitions(modelelement: ConceptDefinitions): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeValueDef(modelelement: ValueDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterValueDef(modelelement: ValueDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeSimpleValueDef(modelelement: SimpleValueDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterSimpleValueDef(modelelement: SimpleValueDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeEntityDef(modelelement: EntityDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterEntityDef(modelelement: EntityDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeTransitionDef(modelelement: TransitionDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterTransitionDef(modelelement: TransitionDef): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeValueAttribute(modelelement: ValueAttribute): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterValueAttribute(modelelement: ValueAttribute): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeReferenceAttribute(modelelement: ReferenceAttribute): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterReferenceAttribute(modelelement: ReferenceAttribute): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' before visiting its children.
     * @param modelelement
     */
    public execBeforeDbType(modelelement: DbType): boolean {
        return false;
    }

    /**
     * Visits 'modelelement' after visiting its children.
     * @param modelelement
     */
    public execAfterDbType(modelelement: DbType): boolean {
        return false;
    }
}
