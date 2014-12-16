define(function (require, exports, module) {

    "use strict";

    var Engine = require("famous/core/Engine"),
        MyWidget = require("MyWidget");

    var context = Engine.createContext();


    context.setPerspective(1000);

    context.add(new MyWidget());
});