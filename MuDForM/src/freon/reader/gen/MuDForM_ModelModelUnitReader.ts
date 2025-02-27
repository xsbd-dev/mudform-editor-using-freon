// Generated by the Freon Language Generator.
import { FreReader, FreModelUnit } from "@freon4dsl/core";
/* The following does not work with the command line toot because it is commonjs
           Unclear why, but the lines below seem to work ok.
        import { net } from "net.akehurst.language-agl-processor";
        import LanguageProcessor = net.akehurst.language.api.processor.LanguageProcessor;
        import Agl = net.akehurst.language.agl.processor.Agl;
        import AutomatonKind_api = net.akehurst.language.api.processor.AutomatonKind_api;
        */
import agl from "net.akehurst.language-agl-processor";
import LanguageProcessor = agl.net.akehurst.language.api.processor.LanguageProcessor;
import Agl = agl.net.akehurst.language.agl.processor.Agl;
import AutomatonKind_api = agl.net.akehurst.language.api.processor.AutomatonKind_api;
import { MuDForM_Model } from "../../language/gen/index.js";
import { MuDForM_ModelGrammarStr } from "./MuDForM_ModelGrammar.js";
import { MuDForM_ModelSyntaxAnalyser } from "./MuDForM_ModelSyntaxAnalyser.js";
import { MuDForM_ModelSemanticAnalyser } from "./MuDForM_ModelSemanticAnalyser.js";

/**
 *   Class MuDForM_ModelModelUnitReader is a wrapper for the various parsers of
 *   modelunits.
 */
export class MuDForM_ModelModelUnitReader implements FreReader {
    analyser: MuDForM_ModelSyntaxAnalyser = new MuDForM_ModelSyntaxAnalyser();
    parser: LanguageProcessor = Agl.processorFromString(MuDForM_ModelGrammarStr, this.analyser, null, null);

    /**
     * Parses and performs a syntax analysis on 'sentence', using the parser and analyser
     * for 'metatype', if available. If 'sentence' is correct, a model unit will be created,
     * otherwise an error wil be thrown containing the parse or analysis error.
     * @param sentence      the input string which will be parsed
     * @param metatype      the type of the unit to be created
     * @param model         the model to which the unit will be added
     * @param sourceName    the (optional) name of the source that contains 'sentence'
     */
    readFromString(sentence: string, metatype: string, model: MuDForM_Model, sourceName?: string): FreModelUnit {
        this.analyser.sourceName = sourceName;
        let startRule: string = "";
        // choose the correct parser
        if (metatype === "ConceptTypeDefinitions") {
            startRule = "ConceptTypeDefinitions";
        }

        // parse the input
        let unit: FreModelUnit = null;
        if (this.parser) {
            try {
                let asm;
                if (startRule.length > 0) {
                    asm = this.parser.processForGoal(null, startRule, sentence, AutomatonKind_api.LOOKAHEAD_1);
                } else {
                    asm = this.parser.process(null, sentence, AutomatonKind_api.LOOKAHEAD_1);
                }
                unit = asm as FreModelUnit;
            } catch (e) {
                // strip the error message, otherwise it's too long for the webapp
                let mess = e.message.replace("Could not match goal,", "Parse error in " + sourceName + ":");
                if (!!mess && mess.length > 0) {
                    console.log(mess);
                    throw new Error(mess);
                } else {
                    throw e;
                }
            }
            // do semantic analysis taking into account the whole model, because references could be pointing anywhere
            if (!!model) {
                try {
                    if (model.getUnits().filter((existing) => existing.name === unit.name).length > 0) {
                        throw new Error(`Unit named '${unit.name}' already exists.`);
                    } else {
                        model.addUnit(unit);
                        const semAnalyser = new MuDForM_ModelSemanticAnalyser();
                        semAnalyser.correct(unit);
                    }
                } catch (e) {
                    console.log(e.message);
                    throw e;
                }
            }
        } else {
            throw new Error(`No parser for ${metatype} available: grammar incorrect.`);
        }
        return unit;
    }
}
