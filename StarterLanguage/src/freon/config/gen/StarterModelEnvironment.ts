// Generated by the Freon Language Generator.
import {
    FreEditor,
    FreEnvironment,
    FreReader,
    FreCompositeTyper,
    FreValidator,
    FreStdlib,
    FreWriter,
    FreInterpreter,
    FreScoperComposite,
    FreLanguageEnvironment,
    FreProjectionHandler,
} from "@freon4dsl/core";
import { StarterModelActions, initializeEditorDef, initializeProjections } from "../../editor/gen/index.js";
import { initializeScoperDef } from "../../scoper/gen/index.js";
import { initializeTypers } from "../../typer/gen/index.js";
import { StarterModelValidator } from "../../validator/gen/index.js";
import { StarterModelStdlib } from "../../stdlib/gen/StarterModelStdlib.js";
import { StarterModelModelUnitWriter } from "../../writer/gen/StarterModelModelUnitWriter.js";
import { StarterModelModelUnitReader } from "../../reader/gen/StarterModelModelUnitReader.js";
import { MainStarterModelInterpreter } from "../../interpreter/MainStarterModelInterpreter.js";
import { StarterModel, DummyUnit, initializeLanguage } from "../../language/gen/index.js";

/**
 * Class StarterModelEnvironment provides the link between all parts of the language environment.
 * It holds the currently used editor, scoper, typer, etc, thus providing an entry point for,
 * for instance, the editor to find the right scoper, or for the validator to find the typer
 * to use.
 * This class uses the singleton pattern to ensure that only one instance of the class is present.
 */
export class StarterModelEnvironment implements FreEnvironment {
    private static environment: FreEnvironment; // the only instance of this class

    /**
     * This method implements the singleton pattern
     */
    public static getInstance(): FreEnvironment {
        if (this.environment === undefined || this.environment === null) {
            this.environment = new StarterModelEnvironment();
            FreLanguageEnvironment.setInstance(this.environment);
        }
        return this.environment;
    }

    /**
     * A private constructor, as demanded by the singleton pattern.
     */
    private constructor() {
        const actions = new StarterModelActions();
        const myComposite = new FreProjectionHandler();
        this.editor = new FreEditor(myComposite, this, actions);
        initializeLanguage();
        initializeProjections(myComposite);
        initializeEditorDef();
        initializeScoperDef(this.scoper);
        initializeTypers(this.typer);
        this.projectionHandler = myComposite;
    }

    /**
     * Returns a new model with name 'modelName'.
     *
     * @param modelName
     */
    newModel(modelName: string): StarterModel {
        const model = new StarterModel();
        model.name = modelName;
        return model;
    }

    // the parts of the language environment
    editor: FreEditor;
    scoper: FreScoperComposite = new FreScoperComposite("main");
    typer: FreCompositeTyper = new FreCompositeTyper("main");
    validator: FreValidator = new StarterModelValidator();
    writer: FreWriter = new StarterModelModelUnitWriter();
    reader: FreReader = new StarterModelModelUnitReader();
    interpreter: FreInterpreter = new MainStarterModelInterpreter();
    projectionHandler: FreProjectionHandler;
    languageName: string = "StarterModel";
    fileExtensions: Map<string, string> = new Map([["DummyUnit", "dum"]]);
}
