# Class diagram for language MuDForM_Model
```mermaid
    %%{init: {'theme': 'forest'} }%%
    classDiagram
    direction TD
    %% other possibilites: LR RL DT TB (same as TD)
    class ValueDef {
        <<abstract>>
        + identifier name
    }
    class SimpleValueDef {
        
        + string doc
    }
    class EntityDef {
        
        + identifier name
		+ string doc
    }
    class TransitionDef {
        
        + identifier name
		+ string doc
    }
    class ValueAttribute {
        
        + identifier name
    }
    class ReferenceAttribute {
        
        + identifier name
    }
    class DbType {
        <<enumeration>>
        bigdec
		bigint
		boolean
		bytes
		double
		float
		instant
		keyword
		long
		string
		symbol
		uuid
		uri
    }
    class ConceptDefinitions {
        <<modelunit>>
        + identifier name
    }

    ConceptDefinitions *-- "0..*" SimpleValueDef : simple_values

		ConceptDefinitions *-- "0..*" EntityDef : entities

		ConceptDefinitions *-- "0..*" TransitionDef : transitions

        
    ValueDef <|-- SimpleValueDef

        EntityDef *-- "0..*" ValueAttribute : properties

		EntityDef *-- "0..*" ReferenceAttribute : relations
TransitionDef *-- "0..*" ValueAttribute : parameters

		TransitionDef *-- "0..*" ReferenceAttribute : involvements

        SimpleValueDef --> "1" DbType : db_type
ValueAttribute --> "1" ValueDef : valueRef
ReferenceAttribute --> "1" EntityDef : entityRef

        
```
