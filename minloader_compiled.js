var LoadMinimumSyntaxHighlighter = function() {
    function m(a) {
        var c = document.createElement("link");
        c.setAttribute("rel", "stylesheet");
        c.setAttribute("type", "text/css");
        c.setAttribute("href", a);
        h(c) }

    function n(a, c) {
        var b = document.createElement("script");
        b.setAttribute("type", "text/javascript");
        b.setAttribute("src", a);
        c ? (b.onload = b.onreadystatechange = function() {
            if (!b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, d = !1, k() }, s(function() { h(b) })) : h(b) }

    function h(a) { document.getElementsByTagName("head")[0].appendChild(a) }

    function t(a) { p(function() { d = !0;
            a();
            d = !1 }) }

    function s(a) { p(function() { d = !0;
            a() }) }

    function p(a) { d || 0 != f.length ? f.push(function() { a();
            k() }) : (a(), k()) }

    function k() {
        if (!d && 0 < f.length) {
            var a = f[0];
            f.splice(0, 1);
            a() } }

    function a(a, c, b) { this.name = a;
        this.brushNames = c;
        this.file = b }
    for (var f = [], d = !1, q = {}, e = [new a("ActionScript3", ["as3", "actionscript3"], "shBrushAS3.js"), new a("Bash/shell", ["bash", "shell"], "shBrushBash.js"), new a("ColdFusion", ["cf", "coldfusion"], "shBrushColdFusion.js"), new a("C#", ["c-sharp", "csharp"],
                "shBrushCSharp.js"), new a("C++", ["cpp", "c"], "shBrushCpp.js"), new a("CSS", ["css"], "shBrushCss.js"), new a("Delphi", ["delphi", "pas", "pascal"], "shBrushDelphi.js"), new a("Diff", ["diff", "patch"], "shBrushDiff.js"), new a("Erlang", ["erl", "erlang"], "shBrushErlang.js"), new a("Groovy", ["groovy"], "shBrushGroovy.js"), new a("JavaScript", ["js", "jscript", "javascript"], "shBrushJScript.js"), new a("Java", ["java"], "shBrushJava.js"), new a("JavaFX", ["jfx", "javafx"], "shBrushJavaFX.js"), new a("Perl", ["perl", "pl"], "shBrushPerl.js"),
            new a("PHP", ["php"], "shBrushPhp.js"), new a("Plain Text", ["plain", "text"], "shBrushPlain.js"), new a("PowerShell", ["ps", "powershell"], "shBrushPowerShell.js"), new a("Python", ["py", "python"], "shBrushPython.js"), new a("Ruby", ["rails", "ror", "ruby"], "shBrushRuby.js"), new a("Scala", ["scala"], "shBrushScala.js"), new a("SQL", ["sql"], "shBrushSql.js"), new a("Visual Basic", ["vb", "vbnet"], "shBrushVb.js"), new a("XML", ["xml", "xhtml", "xslt", "html", "xhtml"], "shBrushXml.js")
        ], r = [], g = 0; g < e.length; g++) r[e[g].name] = "./scripts/" +
        e[g].file;
    var l = 0;
    q.load = function() {
        function a(b) {
            for (var c = 0; c < e.length; c++)
                for (var d = 0; d < e[c].brushNames.length; d++)
                    if (b == e[c].brushNames[d]) { b = e[c].name;
                        c = r; "" != c[b] && (n(c[b], !0), c[b] = "", l++);
                        return } }
        for (var c = document.getElementsByTagName("pre"), b = 0; b < c.length; b++) {
            var d = c[b].className.match(/(brush:\s*)([^\s;]+)(\s*;*)/);
            null != d && (0 == l && (m("./styles/shCore.css"), m("./styles/shThemeDefault.css"), n("./scripts/shCore.js", !0)), a(d[2]))
        }
        0 < l && t(function() { SyntaxHighlighter.vars.discoveredBrushes = null;
            SyntaxHighlighter.highlight() })
    };
    return q
}();
