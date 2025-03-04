Feature: modeling and generating

actors in this feature file
- Mo: a M1 modeler, typically ... {finding this out is part of the experiment} 
- Flo: a M1 validator, typically a workflow architect.

Both actors want a zero-install tool.
this is the prime motivator for adopting Freon for Mo.

all steps below are browser based, using our linux server at xsbd.cppintra.net 
(unless stated otherwise)

Mo creates a model
- expressing observable product behavior of a CPP product
- using the MuDForM language

Flo validates a model
- reviewing it interactively (aka "walking the model")
- relative to the Gherkin scenarios (aka "walking the spec")
the two walkers are independent browser tabs, but the content on display is linked.
the spec walker follows the model walker (aka "walking in tandem")
this is outside the scope of this feature spec




Scenario: creating a new model unit in a new model

* Mo creates a new Model say DFE
* Mo creates a new Model Unit say JMP in DFE
* Mo defines MuDForm based concepts in JMP
* Mo saves the JMP Model Unit


Scenario: generating an executable model for the xSBD validator

Q: what is the unit of generation, deployement, execution?
A: initially, this is the entire Model.
Often a smaller part (one model unit) is changed, the rest remains unaltered.
At this stage we are not interested in efficiency, we are interested in reducing complexity.
Make it work before you make it fast.

Implementation note: [[work for Jos]]
the generator is written in clojure and wrapped in a bash script.
the Freon Web App has to add one menu item 
- that triggers a Freon Web Server end point
- that runs the generator script.

* Mo opens a model in the Freon Web App
* Mo starts the generation of the model in the Freon Web App
* the generator reads the freon model from 'Freon/MuDForM/modelstore'
* the generator transforms the freon model a clojure model
* the generator writes the clojure model in 'Models/DFE/generated'
* the generator completes the generation of the model

Scenario: using the executable model in the Model Walker
out of scope for the editor
* Flo launches the Model Walker for DFE in a browser
* Flo launches the Spec Walker for DFE in a browser




