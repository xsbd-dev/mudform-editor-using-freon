# Inheritance diagram for language MuDForM_Model
```mermaid
    %%{init: {'theme': 'forest'} }%%
    classDiagram
    direction TD
    %% other possibilites: LR RL DT TB (same as TD)
    class SimpleValueDef {
        
        + string doc
    }
    class ValueDef {
        <<abstract>>
        + identifier name
    }
    ValueDef <|-- SimpleValueDef

```
