// Generated by the Freon Language Generator.
// This file contains the input to the AGL parser generator
// (see https://https://github.com/dhakehurst/net.akehurst.language).
// The grammar in this file is read by MuDForM_ModelModelUnitReader

export const MuDForM_ModelGrammarStr = `
namespace MuDForM_ModelLanguage
grammar MuDForM_ModelGrammar {

// rules for "ConceptTypeDefinitions"
ConceptTypeDefinitions = 'ConceptTypeDefinitions' identifier '\{'
	 'doc' stringLiteral
	 'values'
	 ValueTypeDef*
	 'entities'
	 EntityTypeDef*
	 'transitions'
	 TransitionTypeDef*
	 '}' ;

ValueTypeDef = 'ValueTypeDef' identifier '\{'
	 'doc' stringLiteral
	 'type' ValueType
	 '}' ;

SimpleValueType = 'SimpleValueType' '\{'
	 'primitive_type' DatomicType
	 '}' ;

ProductValueType = 'ProductValueType' '\{'
	 'fields'
	 TypeField*
	 '}' ;

TypeField = 'TypeField' '\{'
	 'label' stringLiteral
	 'type' ValueType
	 '}' ;

SumValueType = 'SumValueType' '\{'
	 'fields'
	 TypeField*
	 '}' ;

ListValueType = 'ListValueType' '\{'
	 'list' ValueType
	 '}' ;

ValueTypeReference = 'ValueTypeReference' '\{'
	 'defRef' __fre_reference
	 '}' ;

EntityTypeDef = 'EntityTypeDef' identifier '\{'
	 'doc' stringLiteral
	 'properties'
	 ValueAttribute*
	 'relations'
	 ReferenceAttribute*
	 '}' ;

ValueAttribute = 'ValueAttribute' '\{'
	 'label' stringLiteral
	 'valueRef' __fre_reference
	 '}' ;

ReferenceAttribute = 'ReferenceAttribute' '\{'
	 'label' stringLiteral
	 'entityRef' __fre_reference
	 '}' ;

TransitionTypeDef = 'TransitionTypeDef' identifier '\{'
	 'doc' stringLiteral
	 'parameters'
	 ValueAttribute*
	 'involvements'
	 ReferenceAttribute*
	 '}' ;

ValueType = SimpleValueType 
    | ProductValueType 
    | SumValueType 
    | ListValueType 
    | ValueTypeReference  ;

DatomicType = 'bigdec'
	| 'bigint'
	| 'boolean'
	| 'bytes'
	| 'double'
	| 'float'
	| 'instant'
	| 'keyword'
	| 'long'
	| 'string'
	| 'symbol'
	| 'uuid'
	| 'uri' ;

// common rules

__fre_reference = [ identifier / '.' ]+ ;

// white space and comments
skip WHITE_SPACE = "\\s+" ;
skip SINGLE_LINE_COMMENT = "//[^\\r\\n]*" ;
skip MULTI_LINE_COMMENT = "/\\*[^*]*\\*+(?:[^*/][^*]*\\*+)*/" ;

// the predefined basic types
leaf identifier          = "[a-zA-Z_][a-zA-Z0-9_]*" ;
/* see https://stackoverflow.com/questions/37032620/regex-for-matching-a-string-literal-in-java */
leaf stringLiteral       = '"' "[^\\"\\\\]*(\\\\.[^\\"\\\\]*)*" '"' ;
leaf numberLiteral       = "[0-9]+";
leaf booleanLiteral      = 'false' | 'true';

}`; // end of grammar
