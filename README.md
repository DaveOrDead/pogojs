# PogoJS

[![travis build](https://img.shields.io/travis/DaveOrDead/pogojs.svg?style=flat-square)](https://travis-ci.org/DaveOrDead/pogojs) [![codecov coverage](https://img.shields.io/codecov/c/github/DaveOrDead/pogojs.svg?style=flat-square)](https://codecov.io/gh/DaveOrDead/pogojs) [![npm](https://img.shields.io/npm/v/pogojs.svg)](https://www.npmjs.com/package/pogojs)

JavaScript microlibrary to accompany [Pogostack](http://www.pogostack.com)

Some Pogo applications rely on partial page refreshes via AJAX.

This can cause problems with javascript events being bound to the dynamically loaded content. Binding events to the document is one solution but we felt a cleaner way would be to rebind when the partials are loaded in. This library makes this easy to achieve.


## Usage

### Register

We use HTML class hooks to bind events to elements.  Our chosen naming convention is `pogo-`. These classes indicate the JavaScript is attached and have no cosmetics applied. For example, a dropdown component may have the class `pogo-dropdown-menu`.

The first step is to register these classes with Pogo. In the dropdown component file we would have the following:

#### Example
```
register({
    func: toggleMenu, // the function to be called
    hook: 'dropdownMenu', // the classname in camelcase `pogo-dropdown-menu
    type: 'click' // the event type
});
```
Multiple events are added as additional arguments. 

#### Example
```
register({
    func: toggleMenu, // the function to be called
    hook: 'dropdownMenu', // the classname in camelcase `pogo-dropdown-menu
    type: 'click' // the event type
}, {
    func: myNewFunc,
    hook: 'someHook',
    type: 'change'
});
```
The `type` key can be any of the standard JS events or a custom `immediate` which will trigger as soon as the partial is loaded.


### Bind

On initial page load, a sweep is done to look for classes beginning `pogo-`.  PogoJS then checks it's `register` for any events which are due to be bound to those classes.

This happens automatically on full page refreshes.

For partial refreshes you will need to call Pogo's `bind` function.

#### Example
```
bind(); // this will rebind to all `pogo-` classes on the page

<div id="my_container" ></div>

const container = document.querySelector('#my_container');

bind(container); // this will excusively bind to `pogo-` classes in the new partial loaded inside the container.

``` 


### Pogoset

Allows read access, to all the custom pogo attributes (`pogo-*`) set on an HTML element. It returns an object with one entry for each custom pogo attribute.

This utility behaves in a similar way to the `dataset` property.

* The name of a custom pogo attribute in HTML begins with `pogo-`. It must contain only letters, numbers and the following characters: dash (-), dot (.), colon (:), underscore (_) -- but NOT any ASCII capital letters (A to Z).
* The name of a custom pogo attribute in Javascript is the name of the same HTML attribute but in camelCase, with the leading `pogo` removed and with no hyp.


#### Example
```
<div id="user" pogo-id="1234567890" pogo-user="johndoe" pogo-date-of-birth="27-04-1983">John Doe</div>

const el = document.querySelector('#user');

const {id, user, dateOfBirth} = pogoset(el);

// id === '1234567890'
// user === 'johndoe'
// dateOfBirth === '27-04-1983'
```
