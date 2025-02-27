// Generated by the Freon Language Generator.
import { net } from "net.akehurst.language-agl-processor";
import SyntaxAnalyser = net.akehurst.language.api.syntaxAnalyser.SyntaxAnalyser;
import SharedPackedParseTree = net.akehurst.language.api.sppt.SharedPackedParseTree;
import SPPTBranch = net.akehurst.language.api.sppt.SPPTBranch;
import SPPTLeaf = net.akehurst.language.api.sppt.SPPTLeaf;
import SPPTNode = net.akehurst.language.api.sppt.SPPTNode;
import { FreNamedNode, FreParseLocation, FreNodeReference } from "@freon4dsl/core";
import { ConceptTypeDefinitionsSyntaxAnalyserPart, MuDForM_ModelCommonSyntaxAnalyserPart } from "./index.js";

/**
 *   Class MuDForM_ModelSyntaxAnalyser is the main syntax analyser.
 *   The actual work is being done by its parts, one for each model unit,
 *   and one common part that contains the methods used in multiple units.
 *
 */
export class MuDForM_ModelSyntaxAnalyser implements SyntaxAnalyser {
    sourceName: string = "";
    locationMap: any;
    private _unit_ConceptTypeDefinitions_analyser: ConceptTypeDefinitionsSyntaxAnalyserPart = new ConceptTypeDefinitionsSyntaxAnalyserPart(
        this,
    );
    private _unit_common_analyser: MuDForM_ModelCommonSyntaxAnalyserPart = new MuDForM_ModelCommonSyntaxAnalyserPart(this);

    clear(): void {
        throw new Error("Method not implemented.");
    }

    transform<T>(sppt: SharedPackedParseTree): T {
        if (!!sppt.root) {
            return this.transformSharedPackedParseTreeNode(sppt.root) as unknown as T;
        } else {
            return null;
        }
    }

    public transformSharedPackedParseTreeNode(node: SPPTNode): any {
        if (!!node) {
            try {
                if (node.isLeaf) {
                    return this.transformSharedPackedParseTreeLeaf(node);
                } else if (node.isBranch) {
                    return this.transformSharedPackedParseTreeBranch(node as SPPTBranch);
                }
            } catch (e) {
                if (e.message.startsWith("Syntax error in ") || e.message.startsWith("Error in MuDForM_ModelSyntaxAnalyser")) {
                    throw e;
                } else {
                    // add more info to the error message
                    throw new Error(
                        `Syntax error in "${this.sourceName} (line: ${node.location.line}, column: ${node.location.column})": ${e.message}`,
                    );
                }
                // console.log(e.message + e.stack);
            }
        } else {
            return null;
        }
    }

    private transformSharedPackedParseTreeLeaf(node: SPPTNode): any {
        let tmp = ((node as SPPTLeaf)?.nonSkipMatchedText).trim();
        if (tmp.length > 0) {
            if (tmp.startsWith('"')) {
                // stringLiteral, strip the surrounding quotes
                tmp = tmp.slice(1, tmp.length - 1);
                return tmp;
            } else if (tmp == "false") {
                // booleanLiteral
                return false;
            } else if (tmp == "true") {
                // booleanLiteral
                return true;
            } else if (Number.isInteger(parseInt(tmp, 10))) {
                // numberLiteral
                return parseInt(tmp, 10);
            } else {
                // identifier
                return tmp;
            }
        }
        return null;
    }

    private transformSharedPackedParseTreeBranch(branch: SPPTBranch): any {
        const brName: string = branch.name;
        if ("ConceptTypeDefinitions" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformConceptTypeDefinitions(branch);
        } else if ("ValueTypeDef" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformValueTypeDef(branch);
        } else if ("SimpleValueType" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformSimpleValueType(branch);
        } else if ("ProductValueType" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformProductValueType(branch);
        } else if ("TypeField" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformTypeField(branch);
        } else if ("SumValueType" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformSumValueType(branch);
        } else if ("ListValueType" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformListValueType(branch);
        } else if ("ValueTypeReference" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformValueTypeReference(branch);
        } else if ("EntityTypeDef" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformEntityTypeDef(branch);
        } else if ("ValueAttribute" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformValueAttribute(branch);
        } else if ("ReferenceAttribute" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformReferenceAttribute(branch);
        } else if ("TransitionTypeDef" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformTransitionTypeDef(branch);
        } else if ("ValueType" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformValueType(branch);
        } else if ("DatomicType" === brName) {
            return this._unit_ConceptTypeDefinitions_analyser.transformDatomicType(branch);
        } else if ("__fre_reference" === brName) {
            return this.transform__fre_reference(branch);
        } else {
            throw new Error(`Error in MuDForM_ModelSyntaxAnalyser: ${brName} not handled for node '${branch?.matchedText}'`);
        }
    }

    /**
     * Generic method to get the children of a branch. Throws an error if no children can be found.
     */
    public getChildren(branch: SPPTBranch): any {
        if (!!branch && !!branch.nonSkipChildren) {
            try {
                return branch.nonSkipChildren.toArray();
            } catch (e) {
                throw new Error(`Cannot follow branch: ${e.message} (${branch.matchedText.trimEnd()})`);
            }
        }
        return null;
    }

    /**
     * Generic method to get the optional group of a branch. Throws an error if no group can be found.
     */
    public getGroup(branch: SPPTBranch) {
        // take the first element in the [0..1] optional group or multi branch
        let group: any = branch;
        let stop: boolean = false;
        while (!stop) {
            let nextOne: any = null;
            try {
                nextOne = group.nonSkipChildren?.toArray()[0];
            } catch (e) {
                throw new Error(`Cannot follow group: ${e.message} (${group.matchedText})`);
            }
            if (!nextOne || (!nextOne.name.includes("multi") && !nextOne.name.includes("group"))) {
                stop = true; // found a branch with actual content, return its parent!
            } else {
                group = nextOne;
            }
        }
        return group;
    }

    public transform__fre_reference(branch: SPPTBranch) {
        if (branch.name.includes("multi") || branch.name.includes("List")) {
            // its a path name
            return this.transformSharedPackedParseTreeList<string>(branch, ".");
        } else {
            // its a single name
            return this.transformSharedPackedParseTreeLeaf(branch);
        }
    }

    /**
     * Generic method to transform references
     * ...FreNodeRef = identifier;
     */
    public freNodeRef<T extends FreNamedNode>(branch: SPPTBranch, typeName: string): FreNodeReference<T> {
        let referred: string | string[] | T = this.transformSharedPackedParseTreeNode(branch);
        if (this.getChildren(branch)?.length > 1) {
            // its a path name
            referred = this.transformSharedPackedParseTreeList<string>(branch, ".");
        }
        if (referred === null || referred === undefined) {
            // throw new Error(`Syntax error in "${branch?.parent?.matchedText}": cannot create empty reference`);
            return null;
        } else if (typeof referred === "string" && (referred as string).length === 0) {
            // throw new Error(`Syntax error in "${branch?.parent?.matchedText}": cannot create empty reference`);
            return null;
        } else {
            return FreNodeReference.create<T>(referred, typeName);
        }
    }

    /**
     * Generic method to transform lists
     */
    public transformSharedPackedParseTreeList<T>(branch: SPPTBranch, separator?: string): T[] {
        let result: T[] = [];
        const children = this.getChildren(branch);
        if (!!children) {
            for (const child of children) {
                let element: any = this.transformSharedPackedParseTreeNode(child);
                if (element !== null && element !== undefined) {
                    if (separator === null || separator === undefined) {
                        result.push(element);
                    } else {
                        if (element !== separator) {
                            result.push(element);
                        }
                    }
                }
            }
        }
        return result;
    }

    /**
     * Generic method to transform lists of references
     */
    public transformSharedPackedParseTreeRefList<T extends FreNamedNode>(
        branch: SPPTBranch,
        typeName: string,
        separator?: string,
    ): FreNodeReference<T>[] {
        let result: FreNodeReference<T>[] = [];
        const children = this.getChildren(branch);
        if (!!children) {
            for (const child of children) {
                let refName: any = this.transformSharedPackedParseTreeNode(child);
                if (refName !== null && refName !== undefined) {
                    if (separator === null || separator === undefined) {
                        result.push(FreNodeReference.create<T>(refName, typeName));
                    } else {
                        if (refName !== separator) {
                            result.push(FreNodeReference.create<T>(refName, typeName));
                        }
                    }
                }
            }
        }
        return result;
    }

    public location(branch: SPPTBranch): FreParseLocation {
        return FreParseLocation.create({
            filename: this.sourceName,
            line: branch.location.line,
            column: branch.location.column,
        });
    }
}
