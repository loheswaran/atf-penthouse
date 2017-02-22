var penthouse = require('penthouse'),
    path = require('path'),
    fs = require('fs'),
    __basedir = './';
console.log("inisde penthouse....");
penthouse({
    url: 'https://m-int1.walgreens.com/search/results.jsp?Ntt=shampoo',
    css: '/Users/loheswaran_g/Work/ATF/search-all.css',
    // OPTIONAL params
    width: 767,                    // viewport width
    height: 600,                    // viewport height
    timeout: 30000,                 // ms; abort critical CSS generation after this timeout
    strict: false,                  // set to true to throw on CSS errors (will run faster if no errors)
    maxEmbeddedBase64Length: 1000,  // characters; strip out inline base64 encoded resources larger than this
    renderWaitTime: 2000,            // ms; render wait timeout before CSS processing starts (default: 100)
    blockJSRequests: false,          // set to false to load (external) JS (default: true)
}, function(err, criticalCss) {
    if (err) {
        console.log("inside error....", err);
        // handle error
        throw err;
    }
    console.log("criticalCss : ", criticalCss);
    fs.writeFileSync('search-atf-mobile.css', criticalCss);
});