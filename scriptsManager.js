function includeJs(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);    
}

function includeCss(file) {
    var link = document.createElement("link");
    link.href = file;
    link.type = "text/css";
    link.rel = "stylesheet";a
    link.media = "screen,print";

    document.getElementsByTagName("head")[0].appendChild(link);
}

/* Include Many js files */
includeJs('js/exampleJsFile.js');
includeJs('js/anotherExampleJsFile.js');

/* Include custom css files */
includeCss("css/exampleCssFile.css");
