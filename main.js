requirejs.config({
    baseUrl: ".",
    paths: {
        famous: "lib/famous/src"
    }
});

require(["app"]);