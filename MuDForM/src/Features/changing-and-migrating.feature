Feature: Changing language AST and Migrating its models

    this feature file outlines a way of working for languages changes and model migrations,
    based on existing concepts in Freon.
    How far can we get without building new and fancy stuff?

    this file only addresses changes in the AST.
    changes in other aspects may or may not require migration -- TODO

    the general approach is: manual migration using 'deprecated' markers
    OPEN ISSUE
    Q: how to mark an AST entry as 'deprecated'
    A: for concepts you may use a 'marker interface'
    for features (properties, containments, references) I do not know.
    How about changing the editor, add style "strikethrough"
    How about adding a validator that marks the feature as 'invalid'
    How about adding a validator category 'deprecated' (a kind of warning)

    actors
    - Peter: M2 modeler, hard core developer, favorite tool is VScode on laptop
    - Mo: M1 modeler, domain expert, prefers zero-install tools using browser


    Background:
        * Peter has defined a lanuage in freon
        * Mo has made one or more model units using this language


    Scenario: change the name of a property

        * Peter opens the language definition
        * Peter marks the property to change as 'deprecated'
        * Peter creates a new property with the new name
        * Peter bumps the language version
        * Peter saves the language definition

        * Mo opens a model unit
        * the editor shows the deprecated property as 'deprecated'
        * the editor shows the new property with no value yet
        * Mo copies the value from the deprecated property to the new property
        * Mo sets the value of the deprecated property to null
        * Question: howto set value to null
        * Question: make sure deprecated/null properties are not saved.

        * OPEN ISSUE are we able to run a check that all deprecated properties have been processed?

        * Peter opens the language definition
        * Peter removes the deprecated property from the language
        * Peter bumps the language version
        * Peter saves the language definition


    Scenario: change the value type of a property
        * TODO

    Scenario: move a property from one concept to another
        * TODO

    Scenario: split a concept in two parts, a parent and a child
        * TODO

# ETC ETC
# combine two containments with a simple value into one with a composite value
# split one containments with a composite value in two with a simpler value
# 


