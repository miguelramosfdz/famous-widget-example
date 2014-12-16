define(function (require, exports, module) {

    "use strict";

    var Engine = require("famous/core/Engine"),
        MyWidget = require("MyWidget");

    var context = Engine.createContext(),
        widget = new MyWidget();


    context.setPerspective(1000);

    context.add(widget);

    widget.eventOutput.on("update", function (event) {
        console.log("We are scrolling");
    });
});