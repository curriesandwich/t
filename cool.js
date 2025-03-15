define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
    t.isDark = true;
    t.cssClass = "ace-tomorrow-night";
    t.cssText = `
        .ace-tomorrow-night .ace_gutter {
            background: transparent;
            color: #C5C8C6;
        }
        .ace-tomorrow-night .ace_print-margin {
            width: 1px;
            background: transparent;
        }
        .ace-tomorrow-night {
            background-color: transparent;
            color: #C5C8C6;
            background-image: url('https://i.imgur.com/example.jpeg');
            background-size: cover;
            background-position: center;
        }
        .ace-tomorrow-night .ace_cursor {
            color: #AEAFAD;
        }
        .ace-tomorrow-night .ace_marker-layer .ace_selection {
            background: rgba(55, 59, 65, 0.5);
        }
        .ace-tomorrow-night.ace_multiselect .ace_selection.ace_start {
            box-shadow: 0 0 3px 0px transparent;
        }
        .ace-tomorrow-night .ace_marker-layer .ace_step {
            background: rgba(102, 82, 0, 0.5);
        }
        .ace-tomorrow-night .ace_marker-layer .ace_bracket {
            margin: -1px 0 0 -1px;
            border: 1px solid #4B4E55;
        }
        .ace-tomorrow-night .ace_marker-layer .ace_active-line {
            background: rgba(40, 42, 46, 0.5);
        }
        .ace-tomorrow-night .ace_gutter-active-line {
            background-color: rgba(40, 42, 46, 0.5);
        }
        .ace-tomorrow-night .ace_marker-layer .ace_selected-word {
            border: 1px solid rgba(55, 59, 65, 0.5);
        }
        .ace-tomorrow-night .ace_invisible {
            color: #4B4E55;
        }
        .ace-tomorrow-night .ace_indent-guide {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y;
        }
    `;
    
    var r = e("../lib/dom");
    r.importCssString(t.cssText, t.cssClass);
});

(function () {
    window.require(["ace/theme/tomorrow_night"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
