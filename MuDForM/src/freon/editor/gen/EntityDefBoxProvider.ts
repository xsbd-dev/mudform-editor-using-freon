// Generated by the Freon Language Generator.
import { Box, BoxUtil, FreBoxProvider, FreProjectionHandler, BoxFactory } from "@freon4dsl/core";

import { EntityDef } from "../../language/gen/index.js";

/**
 * This class implements the box provider for a single node of type EntityDef.
 * The box provider is able to create the (tree of) boxes for the node, based
 * on the projections that are currently selected by the user.
 * The top of the tree of boxes is always a box of type ElementBox, which is
 * a box that will never be rendered itself, only its content will. Thus, we
 * have a stable entry in the complete box tree for every FreNode node.
 */
export class EntityDefBoxProvider extends FreBoxProvider {
    constructor(mainHandler: FreProjectionHandler) {
        super(mainHandler);
        this.knownBoxProjections = ["default"];
        this.knownTableProjections = ["default"];
        this.conceptName = "EntityDef";
    }

    protected getContent(projectionName: string): Box {
        // console.log("GET CONTENT " + this._node?.freId() + ' ' +  this._node?.freLanguageConcept() + ' ' + projectionName);
        // see if we need to use a custom projection
        if (!this.knownBoxProjections.includes(projectionName) && !this.knownTableProjections.includes(projectionName)) {
            const BOX: Box = this.mainHandler.executeCustomProjection(this._node, projectionName);
            if (!!BOX) {
                // found one, so return it
                return BOX;
            }
        } else {
            // select the box to return based on the projectionName
            if (projectionName === "default") {
                return this.getDefault();
            }
        }
        // in all other cases, return the default
        return this.getDefault();
    }

    private getDefault(): Box {
        return BoxFactory.verticalLayout(this._node as EntityDef, "EntityDef-overall", "", [
            BoxFactory.horizontalLayout(
                this._node as EntityDef,
                "EntityDef-hlist-line-0",
                "",
                [
                    BoxUtil.labelBox(this._node as EntityDef, "EntityDef", "top-1-line-0-item-0"),
                    BoxUtil.textBox(this._node as EntityDef, "name"),
                    BoxUtil.labelBox(this._node as EntityDef, "\{", "top-1-line-0-item-2"),
                ],
                { selectable: false },
            ),
            BoxUtil.indentBox(
                this._node as EntityDef,
                4,
                "1",
                BoxFactory.horizontalLayout(
                    this._node as EntityDef,
                    "EntityDef-hlist-line-1",
                    "",
                    [
                        BoxUtil.labelBox(this._node as EntityDef, "doc", "top-1-line-1-item-0"),
                        BoxUtil.textBox(this._node as EntityDef, "doc"),
                    ],
                    { selectable: false },
                ),
            ),
            BoxUtil.indentBox(
                this._node as EntityDef,
                4,
                "2",
                BoxUtil.labelBox(this._node as EntityDef, "properties", "top-1-line-2-item-0"),
            ),
            BoxUtil.indentBox(
                this._node as EntityDef,
                8,
                "3",
                BoxUtil.verticalPartListBox(
                    this._node as EntityDef,
                    (this._node as EntityDef).properties,
                    "properties",
                    null,
                    this.mainHandler,
                ),
            ),
            BoxUtil.indentBox(
                this._node as EntityDef,
                4,
                "4",
                BoxUtil.labelBox(this._node as EntityDef, "relations", "top-1-line-4-item-0"),
            ),
            BoxUtil.indentBox(
                this._node as EntityDef,
                8,
                "5",
                BoxUtil.verticalPartListBox(
                    this._node as EntityDef,
                    (this._node as EntityDef).relations,
                    "relations",
                    null,
                    this.mainHandler,
                ),
            ),
            BoxUtil.labelBox(this._node as EntityDef, "}", "top-1-line-6-item-0"),
        ]);
    }
}
