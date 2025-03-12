(function(){
    "use strict";
    var _0x3d2e = [
        "[Mr.Negotiv]",
        "log",
        "[Mr.Negotiv] test play password 1891273e1315e",
        "json",
        "[Mr.Negotiv] test play password 1891273e1315e",
        "Enter telegram token @nerest_skripts:",
        "[Mr.Negotiv] test play password 1891273e1315e:",
        "[Mr.Negotiv] test play password 1891273e1315e:",
        "Token expired! Please contact support @nerest_skripts",
        "[Mr.Negotiv] test play password 1891273e1315e:",
        "Device limit reached! Please contact support @nerest_skripts",
        "[Mr.Negotiv] test play password 1891273e1315e:",
        "User",
        "Hello ",
        "! The token is correct, thank you for your purchase.",
        "[Mr.Negotiv] test play password 1891273e1315e:",
        "script",
        "src",
        "onload",
        "[Mr.Negotiv] test play password 1891273e1315e",
        "onerror",
        "[Mr.Negotiv] test play password 1891273e1315e",
        "test play password 1891273e1315e.",
        "Invalid token! telegram @nerest_skripts",
        "[Mr.Negotiv] test play password 1891273e1315e:",
        "find",
        "active",
        "token",
        "devices",
        "max_devices",
        "expiry_date",
        "createElement",
        "getTime",
        "head",
        "appendChild",
        "user"
    ];
    console[_0x3d2e[1]](_0x3d2e[0]);
    fetch(atob("aHR0cHM6Ly9tcm5lZ290aXYxLmdpdGh1Yi5pby90b2tlbnMvdG9rZXMvdG9rZW5zLmpzb24=") + "?")
    .then(function(a){
        console[_0x3d2e[1]](_0x3d2e[2]);
        return a[_0x3d2e[3]]();
    })
    .then(function(b){
        console[_0x3d2e[1]](_0x3d2e[4], b);
        var c = prompt(_0x3d2e[5]);
        console[_0x3d2e[1]](_0x3d2e[6], c);
        var d = b[_0x3d2e[25]](function(e){ return e[_0x3d2e[27]] === c && e[_0x3d2e[26]]; });
        console[_0x3d2e[1]](_0x3d2e[7], d);
        if(d){
            var f = new Date();
            var g = new Date(d[_0x3d2e[30]]);
            if(g < f){
                alert(_0x3d2e[8]);
                console.error(_0x3d2e[9], d[_0x3d2e[30]]);
                return;
            }
            if(d[_0x3d2e[28]] >= d[_0x3d2e[29]]){
                alert(_0x3d2e[10]);
                console.error(_0x3d2e[11], d[_0x3d2e[28]]);
                return;
            }
            var h = d[_0x3d2e[35]] || _0x3d2e[12];
            alert(_0x3d2e[13] + h + _0x3d2e[14]);
            console[_0x3d2e[1]](_0x3d2e[15], h);
            var i = document[_0x3d2e[31]](_0x3d2e[16]);
            i[_0x3d2e[17]] = atob("aHR0cHM6Ly9tcm5lZ290aXYxLmdpdGh1Yi5pby9teS13ZWJzaXRlL2Fzc2V0cy9yaWdodENsaWNrTW9kdWxlLmpz") + "?v=" + new Date()[_0x3d2e[32]]();
            i[_0x3d2e[18]] = function(){ console[_0x3d2e[1]](_0x3d2e[19]); };
            i[_0x3d2e[20]] = function(){ console.error(_0x3d2e[21]); alert(_0x3d2e[22]); };
            document[_0x3d2e[33]][_0x3d2e[34]](i);
        } else {
            alert(_0x3d2e[23]);
            console.error(_0x3d2e[24], c);
        }
    })
    ["catch"](function(j){
        console.error("[Mr.Negotiv] Ошибка запроса:", j);
        alert("Update failed, contact @nerest_skripts");
    });
})();
