define(function (require, exports, module) {

    "use strict";

    var Surface = require("famous/core/Surface");

    function MyWidget() {

        this.surface = new Surface({
            content: "This is my Widget",
            properties: {
                border: "1px red solid"
            }
        })
    }


    MyWidget.prototype.render = function (){


        return {

            target: [
                {
                    size: [100, 100],
                    origin: [0.5, 0.5],
                    align: [0.5, 0.5],
                    target: this.surface.render()
                }
            ]
        }
    };


    module.exports = MyWidget;


});