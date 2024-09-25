# Angular

## Components
A way provided by Angular to build a modular user interface.
It is also a custom html template that can be use in other components, creating a tree like structure.
Components can have inputs, which are set at the component usage, and outputs, that can be trasmited to other components.

## Templates 
Are the actual html that is going to be rendered, angular provides funtionality to bind data to templates
- {{String interpolation}}
- [Property biding]
- (Event biding)
- [(ngModel)] -> 2 way binding for form input fields.

@if & @for template syntax are available from angular 17, *ngIf & *ngFor are used for older versions.

To add css class is used a [class] binding sintex

ngSumit is used in template to prevent default behavior on submit button in a form, and handle the submition in the client.

'<ng-content>' is a template anotation to define a rendering place inside the template definition for components wraped under the main template component tag

## Signals
Angular is able to listen for changes in components data and render it when its needed, with it zones implementation
there is a new way, in which a signal is defined, and other components can subscribe to it and be updated when the signal changes, signals are available from angular 16.

## Pipes
Are use also in the templates to format data in the template directly

## Services
Can be used to implement logic and also to be injected in components through dependency injection.