(() => {
  "use strict";
  var n = {
      28: (n, e, r) => {
        r.d(e, { Z: () => c });
        var t = r(81),
          o = r.n(t),
          a = r(645),
          i = r.n(a)()(o());
        i.push([
          n.id,
          "body {\r\n  background-color: gray;\r\n}\r\n\r\n.container {\r\n  margin: 20%;\r\n  background-color: #fff;\r\n  box-shadow: 8px 8px 5px black;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  padding: 1% 3% 1% 3%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.input {\r\n  display: flex;\r\n  padding: 1% 3% 1% 3%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.toDo {\r\n  border-bottom: none;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  font-family: italics, sans-serif;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  padding: 1% 3% 1% 3%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.clear {\r\n  text-align: center;\r\n  padding: 1% 3% 1% 3%;\r\n  background-color: whitesmoke;\r\n}\r\n\r\nhr {\r\n  margin: 0;\r\n  color: #d3d3d3;\r\n}\r\n",
          "",
        ]);
        const c = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  t = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  t &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += n(e)),
                  t && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (n, r, t, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (t)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (t && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function r(n) {
          for (var r = -1, t = 0; t < e.length; t++)
            if (e[t].identifier === n) {
              r = t;
              break;
            }
          return r;
        }
        function t(n, t) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              d = t.base ? s[0] + t.base : s[0],
              l = a[d] || 0,
              u = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var p = r(u),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var v = o(f, t);
              (t.byIndex = c),
                e.splice(c, 0, { identifier: u, updater: v, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var r = e.domAPI(e);
          return (
            r.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                r.update((n = e));
              } else r.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = t((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = r(a[i]);
              e[c].references--;
            }
            for (var s = t(n, o), d = 0; d < a.length; d++) {
              var l = r(a[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, r) {
          var t = (function (n) {
            if (void 0 === e[n]) {
              var r = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (n) {
                  r = null;
                }
              e[n] = r;
            }
            return e[n];
          })(n);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(r);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, r) => {
        n.exports = function (n) {
          var e = r.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (r) {
              !(function (n, e, r) {
                var t = "";
                r.supports && (t += "@supports (".concat(r.supports, ") {")),
                  r.media && (t += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (t += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (t += r.css),
                  o && (t += "}"),
                  r.media && (t += "}"),
                  r.supports && (t += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(t, n, e.options);
              })(e, n, r);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function r(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var a = (e[t] = { id: t, exports: {} });
    return n[t](a, a.exports, r), a.exports;
  }
  (r.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (n, e) => {
      for (var t in e)
        r.o(e, t) &&
          !r.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (r.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n = r(379),
        e = r.n(n),
        t = r(795),
        o = r.n(t),
        a = r(569),
        i = r.n(a),
        c = r(565),
        s = r.n(c),
        d = r(216),
        l = r.n(d),
        u = r(589),
        p = r.n(u),
        f = r(28),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = s()),
        (v.insert = i().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = l()),
        e()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals;
      const m = document.querySelector(".list"),
        h = [
          { description: "Hack NASA", completed: !1, index: 0 },
          { description: "Start Webpack Project", completed: !1, index: 1 },
          { description: "Make Dinner", completed: !0, index: 2 },
        ];
      window.onload = (() => {
        const n = h.sort((n, e) => n.index - e.index);
        for (let e = 0; e < n.length; e += 1)
          m.insertAdjacentHTML(
            "beforeend",
            `\n      <div class="task">\n        <div>\n          <input class="check" type="checkbox" name="item-${n[e].index}">\n          <label for="item-${n[e].index}">${n[e].description}</label>\n        </div>\n        <div class="material-icons-outlined">\n          more_vert\n        </div>\n      </div>\n      <hr>\n    `
          );
      })();
    })();
})();
