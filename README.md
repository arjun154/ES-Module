# ES-Module
Pair Programming 

## Problem

Create your own jQuery library using ES libraries, constructor, prototype chain:

It should contain

* .each
```javascript
  $(".target").each(function(){...})
```

* chaining of operations
```javascript
  example:  
  $( ".target" ).firstMethod().secondMethod();
```


* show
```javascript
  $( ".target" ).show();
```javascript

*hide
```javascript
  $( ".target" ).hide();
```

Bonus features

* fade in
* fade out
* other animations like slide in etc
* custom animation like shake / vibrate (use your creativity)

Boilerplate code
```javascript
  function JQuery(selector){
      this.nodes = document.querySelectorAll(selector);
      this.length = this.nodes.length;
  }

  jQuery.prototype.each = function(){
    // add code
  }

  jQuery.prototype.show = function(){
    // add code
  }

  jQuery.prototype.hide = function(){
    // add code
  }

  function $(selector){
      return new jQuery(selector)
  }

  export default $
```
references:

* https://api.jquery.com/each/
