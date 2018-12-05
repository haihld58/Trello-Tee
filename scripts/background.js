! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(b) : "object" == typeof module && module.exports ? module.exports = b() : a.log = b()
}(this, function() {
    "use strict";

    function a(a) {
        return typeof console === h ? !1 : void 0 !== console[a] ? b(console, a) : void 0 !== console.log ? b(console, "log") : g
    }

    function b(a, b) {
        var c = a[b];
        if ("function" == typeof c.bind) return c.bind(a);
        try {
            return Function.prototype.bind.call(c, a)
        } catch (d) {
            return function() {
                return Function.prototype.apply.apply(c, [a, arguments])
            }
        }
    }

    function c(a, b, c) {
        return function() {
            typeof console !== h && (d.call(this, b, c), this[a].apply(this, arguments))
        }
    }

    function d(a, b) {
        for (var c = 0; c < i.length; c++) {
            var d = i[c];
            this[d] = a > c ? g : this.methodFactory(d, a, b)
        }
    }

    function e(b, d, e) {
        return a(b) || c.apply(this, arguments)
    }

    function f(a, b, c) {
        function f(a) {
            var b = (i[a] || "silent").toUpperCase();
            try {
                return void(window.localStorage[l] = b)
            } catch (c) {}
            try {
                window.document.cookie = encodeURIComponent(l) + "=" + b + ";"
            } catch (c) {}
        }

        function g() {
            var a;
            try {
                a = window.localStorage[l]
            } catch (b) {}
            if (typeof a === h) try {
                var c = window.document.cookie,
                    d = c.indexOf(encodeURIComponent(l) + "=");
                d && (a = /^([^;]+)/.exec(c.slice(d))[1])
            } catch (b) {}
            return void 0 === k.levels[a] && (a = void 0), a
        }
        var j, k = this,
            l = "loglevel";
        a && (l += ":" + a), k.levels = {
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            SILENT: 5
        }, k.methodFactory = c || e, k.getLevel = function() {
            return j
        }, k.setLevel = function(b, c) {
            if ("string" == typeof b && void 0 !== k.levels[b.toUpperCase()] && (b = k.levels[b.toUpperCase()]), !("number" == typeof b && b >= 0 && b <= k.levels.SILENT)) throw "log.setLevel() called with invalid level: " + b;
            return j = b, c !== !1 && f(b), d.call(k, b, a), typeof console === h && b < k.levels.SILENT ? "No console available for logging" : void 0
        }, k.setDefaultLevel = function(a) {
            g() || k.setLevel(a, !1)
        }, k.enableAll = function(a) {
            k.setLevel(k.levels.TRACE, a)
        }, k.disableAll = function(a) {
            k.setLevel(k.levels.SILENT, a)
        };
        var m = g();
        null == m && (m = null == b ? "WARN" : b), k.setLevel(m, !1)
    }
    var g = function() {},
        h = "undefined",
        i = ["trace", "debug", "info", "warn", "error"],
        j = new f,
        k = {};
    j.getLogger = function(a) {
        if ("string" != typeof a || "" === a) throw new TypeError("You must supply a name when creating a logger.");
        var b = k[a];
        return b || (b = k[a] = new f(a, j.getLevel(), j.methodFactory)), b
    };
    var l = typeof window !== h ? window.log : void 0;
    return j.noConflict = function() {
        return typeof window !== h && window.log === j && (window.log = l), j
    }, j
}), ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
            if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && xa(a),
            p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
             "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.4",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        },
        aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            xa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                 (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g,
        oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                             (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c)
        })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a)
        },
        data: function(a, b, c) {
            return sa.access(a, b, c)
        },
        removeData: function(a, b) {
            sa.remove(a, b)
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c)
        },
        _removeData: function(a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a)
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        },
        ya = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|pointer|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                     (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                     (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                         (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                        _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {},
        Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? bb.unshift(a) : bb.push(a)
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a),
                f = _.speed(b, c, d),
                g = function() {
                    var b = I(this, _.extend({}, a), f);
                    (e || ra.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = _.timers,
                    g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ra.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0,
            c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(),
        kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = a.location.href,
        wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
        yb = /\[\]$/,
        zb = /\r?\n/g,
        Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cb = 0,
        Db = {},
        Eb = {
            0: 200,
            1223: 204
        },
        Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gb = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}),
    function(a) {
        function b(a) {
            return a && a.Object === Object ? a : null
        }

        function c(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) b.push(a[c]);
            return b
        }

        function d(a) {
            return function() {
                try {
                    return a.apply(this, arguments)
                } catch (b) {
                    return Za.e = b, Za
                }
            }
        }

        function e(a) {
            throw a
        }

        function f(a, b) {
            if (_a && b.stack && "object" == typeof a && null !== a && a.stack && -1 === a.stack.indexOf(db)) {
                for (var c = [], d = b; d; d = d.source) d.stack && c.unshift(d.stack);
                c.unshift(a.stack);
                var e = c.join("\n" + db + "\n");
                a.stack = g(e)
            }
        }

        function g(a) {
            for (var b = a.split("\n"), c = [], d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                h(f) || i(f) || !f || c.push(f)
            }
            return c.join("\n")
        }

        function h(a) {
            var b = k(a);
            if (!b) return !1;
            var c = b[0],
                d = b[1];
            return c === bb && d >= cb && Gg >= d
        }

        function i(a) {
            return -1 !== a.indexOf("(module.js:") || -1 !== a.indexOf("(node.js:")
        }

        function j() {
            if (_a) try {
                throw new Error
            } catch (a) {
                var b = a.stack.split("\n"),
                    c = b[0].indexOf("@") > 0 ? b[1] : b[2],
                    d = k(c);
                if (!d) return;
                return bb = d[0], d[1]
            }
        }

        function k(a) {
            var b = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);
            if (b) return [b[1], Number(b[2])];
            var c = /at ([^ ]+):(\d+):(?:\d+)$/.exec(a);
            if (c) return [c[1], Number(c[2])];
            var d = /.*@(.+):(\d+)$/.exec(a);
            return d ? [d[1], Number(d[2])] : void 0
        }

        function l(b, c, d, e, f, g) {
            var h = Sb(b),
                i = h.length,
                j = Sb(c),
                k = j.length;
            if (i !== k && !e) return !1;
            for (var l, m = i; m--;)
                if (l = h[m], !(e ? l in c : Pb.call(c, l))) return !1;
            for (var n = e; ++m < i;) {
                l = h[m];
                var o, p = b[l],
                    q = c[l];
                if (!(o === a ? d(p, q, e, f, g) : o)) return !1;
                n || (n = "constructor" === l)
            }
            if (!n) {
                var r = b.constructor,
                    s = c.constructor;
                if (r !== s && "constructor" in b && "constructor" in c && !("function" == typeof r && r instanceof r && "function" == typeof s && s instanceof s)) return !1
            }
            return !0
        }

        function m(a, b, c) {
            switch (c) {
                case sb:
                case tb:
                    return +a === +b;
                case ub:
                    return a.name === b.name && a.message === b.message;
                case xb:
                    return a !== +a ? b !== +b : a === +b;
                case zb:
                case Bb:
                    return a === b + ""
            }
            return !1
        }

        function n(a) {
            return !!a && "object" == typeof a
        }

        function o(a) {
            return "number" == typeof a && a > -1 && a % 1 === 0 && Rb >= a
        }

        function p(a) {
            return n(a) && o(a.length) && !!Nb[Qb.call(a)]
        }

        function q(a, b) {
            for (var c = -1, d = a.length; ++c < d;)
                if (b(a[c], c, a)) return !0;
            return !1
        }

        function r(b, c, d, e, f, g) {
            var h = -1,
                i = b.length,
                j = c.length;
            if (i !== j && !(e && j > i)) return !1;
            for (; ++h < i;) {
                var k, l = b[h],
                    m = c[h];
                if (k !== a) {
                    if (k) continue;
                    return !1
                }
                if (e) {
                    if (!q(c, function(a) {
                        return l === a || d(l, a, e, f, g)
                    })) return !1
                } else if (l !== m && !d(l, m, e, f, g)) return !1
            }
            return !0
        }

        function s(a, b, c, d, e, f) {
            var g = Ub(a),
                h = Ub(b),
                i = rb,
                j = rb;
            g || (i = Qb.call(a), i === qb ? i = yb : i !== yb && (g = p(a))), h || (j = Qb.call(b), j === qb && (j = yb));
            var k = i === yb && !Tb(a),
                n = j === yb && !Tb(b),
                o = i === j;
            if (o && !g && !k) return m(a, b, i);
            if (!d) {
                var q = k && Pb.call(a, "__wrapped__"),
                    s = n && Pb.call(b, "__wrapped__");
                if (q || s) return c(q ? a.value() : a, s ? b.value() : b, d, e, f)
            }
            if (!o) return !1;
            e || (e = []), f || (f = []);
            for (var t = e.length; t--;)
                if (e[t] === a) return f[t] === b;
            e.push(a), f.push(b);
            var u = (g ? r : l)(a, b, c, d, e, f);
            return e.pop(), f.pop(), u
        }

        function t(a, b, c, d, e) {
            return a === b ? !0 : null == a || null == b || !ba(a) && !n(b) ? a !== a && b !== b : s(a, b, t, c, d, e)
        }

        function u(a, b) {
            for (var c = new Array(a), d = 0; a > d; d++) c[d] = b();
            return c
        }

        function v(a, b) {
            this.id = a, this.value = b
        }

        function w(a, b) {
            this.scheduler = a, this.disposable = b, this.isDisposed = !1
        }

        function x(a, b) {
            b.isDisposed || (b.isDisposed = !0, b.disposable.dispose())
        }

        function y(a) {
            this._s = a, this.isDisposed = !1
        }

        function z(a) {
            this._s = a
        }

        function A(a) {
            this._s = a, this._l = a.length, this._i = 0
        }

        function B(a) {
            this._a = a
        }

        function C(a) {
            this._a = a, this._l = G(a), this._i = 0
        }

        function D(a) {
            return "number" == typeof a && Pa.isFinite(a)
        }

        function E(b) {
            var c, d = b[kb];
            if (!d && "string" == typeof b) return c = new z(b), c[kb]();
            if (!d && b.length !== a) return c = new B(b), c[kb]();
            if (!d) throw new TypeError("Object is not iterable");
            return b[kb]()
        }

        function F(a) {
            var b = +a;
            return 0 === b ? b : isNaN(b) ? b : 0 > b ? -1 : 1
        }

        function G(a) {
            var b = +a.length;
            return isNaN(b) ? 0 : 0 !== b && D(b) ? (b = F(b) * Math.floor(Math.abs(b)), 0 >= b ? 0 : b > ld ? ld : b) : b
        }

        function H(a, b) {
            return pc(a) || (a = wc), new nd(b, a)
        }

        function I(a, b) {
            this.observer = a, this.parent = b
        }

        function J(a, b) {
            return a.amb(b)
        }

        function K() {
            return !1
        }

        function L() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            return b
        }

        function K() {
            return !1
        }

        function L() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            return b
        }

        function K() {
            return !1
        }

        function M() {
            return []
        }

        function K() {
            return !1
        }

        function M() {
            return []
        }

        function L() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            return b
        }

        function N(a) {
            return function(b) {
                return a.subscribe(b)
            }
        }

        function O(a) {
            return a.toArray()
        }

        function P(a) {
            return a.length > 0
        }

        function Q(a) {
            return {
                "@@iterator": function() {
                    return {
                        next: function() {
                            return {
                                done: !1,
                                value: a
                            }
                        }
                    }
                }
            }
        }

        function Q(a) {
            return {
                "@@iterator": function() {
                    return {
                        next: function() {
                            return {
                                done: !1,
                                value: a
                            }
                        }
                    }
                }
            }
        }

        function R(a, b, c) {
            var d = ob(b, c, 3);
            return a.map(function(b, c) {
                var e = d(b, c, a);
                return Xa(e) && (e = dd(e)), (nb(e) || mb(e)) && (e = md(e)), e
            }).concatAll()
        }

        function S(a, b, c) {
            for (var d = 0, e = a.length; e > d; d++)
                if (c(a[d], b)) return d;
            return -1
        }

        function T(a) {
            this.comparer = a, this.set = []
        }

        function U(b, c) {
            return function(d) {
                for (var e = d, f = 0; c > f; f++) {
                    var g = e[b[f]];
                    if ("undefined" == typeof g) return a;
                    e = g
                }
                return e
            }
        }

        function V(a) {
            if (0 === a.length) throw new eb;
            return a[0]
        }

        function W(a, b, c, d) {
            var e = ob(b, c, 3);
            return new xg(function(b) {
                return a.subscribe(new gf(b, a, e, d))
            }, a)
        }

        function X(a) {
            return a ? Sc.isObservable(a) ? a : Xa(a) ? Sc.fromPromise(a) : aa(a) || _(a) ? qf.call(this, a) : Ya(a) ? $.call(this, a) : nb(a) || mb(a) ? Y.call(this, a) : ba(a) ? Z.call(this, a) : a : a
        }

        function Y(a) {
            return Sc.from(a).concatMap(function(a) {
                return Sc.isObservable(a) || ba(a) ? X.call(null, a) : Qa.Observable.just(a)
            }).toArray()
        }

        function Z(b) {
            function c(b, c) {
                d[c] = a, f.push(b.map(function(a) {
                    d[c] = a
                }))
            }
            for (var d = new b.constructor, e = Object.keys(b), f = [], g = 0, h = e.length; h > g; g++) {
                var i = e[g],
                    j = X.call(this, b[i]);
                j && Sc.isObservable(j) ? c(j, i) : d[i] = b[i]
            }
            return Sc.forkJoin.apply(Sc, f).map(function() {
                return d
            })
        }

        function $(a) {
            var b = this;
            return new xg(function(c) {
                a.call(b, function() {
                    var a = arguments[0],
                        b = arguments[1];
                    if (a) return c.onError(a);
                    if (arguments.length > 2) {
                        for (var d = [], e = 1, f = arguments.length; f > e; e++) d.push(arguments[e]);
                        b = d
                    }
                    c.onNext(b), c.onCompleted()
                })
            })
        }

        function _(a) {
            return Ya(a.next) && Ya(a["throw"])
        }

        function aa(a) {
            var b = a.constructor;
            return b ? "GeneratorFunction" === b.name || "GeneratorFunction" === b.displayName ? !0 : _(b.prototype) : !1
        }

        function ba(a) {
            return Object == a.constructor
        }

        function ca(a, b, c, d) {
            var e = new Cg;
            return d.push(da(e, b, c)), a.apply(b, d), e.asObservable()
        }

        function da(a, b, c) {
            return function() {
                for (var d = arguments.length, e = new Array(d), f = 0; d > f; f++) e[f] = arguments[f];
                if (Ya(c)) {
                    if (e = $a(c).apply(b, e), e === Za) return a.onError(e.e);
                    a.onNext(e)
                } else e.length <= 1 ? a.onNext(e[0]) : a.onNext(e);
                a.onCompleted()
            }
        }

        function ea(a, b, c, d) {
            var e = new Cg;
            return d.push(fa(e, b, c)), a.apply(b, d), e.asObservable()
        }

        function fa(a, b, c) {
            return function() {
                var d = arguments[0];
                if (d) return a.onError(d);
                for (var e = arguments.length, f = [], g = 1; e > g; g++) f[g - 1] = arguments[g];
                if (Ya(c)) {
                    var f = $a(c).apply(b, f);
                    if (f === Za) return a.onError(f.e);
                    a.onNext(f)
                } else f.length <= 1 ? a.onNext(f[0]) : a.onNext(f);
                a.onCompleted()
            }
        }

        function ga(a) {
            return Pa.StaticNodeList ? a instanceof Pa.StaticNodeList || a instanceof Pa.NodeList : "[object NodeList]" === Object.prototype.toString.call(a)
        }

        function ha(a, b, c) {
            this._e = a, this._n = b, this._fn = c, this._e.addEventListener(this._n, this._fn, !1), this.isDisposed = !1
        }

        function ia(a, b, c) {
            var d = new _b,
                e = Object.prototype.toString.call(a);
            if (ga(a) || "[object HTMLCollection]" === e)
                for (var f = 0, g = a.length; g > f; f++) d.add(ia(a.item(f), b, c));
            else a && d.add(new ha(a, b, c));
            return d
        }

        function ja(a, b, c) {
            return new xg(function(d) {
                function e(a, b) {
                    if (j[b] = a, g[b] = !0, h || (h = g.every(Sa))) {
                        if (f) return d.onError(f);
                        var e = $a(c).apply(null, j);
                        if (e === Za) return d.onError(e.e);
                        d.onNext(e)
                    }
                    i && j[1] && d.onCompleted()
                }
                var f, g = [!1, !1],
                    h = !1,
                    i = !1,
                    j = new Array(2);
                return new jc(a.subscribe(function(a) {
                    e(a, 0)
                }, function(a) {
                    j[1] ? d.onError(a) : f = a
                }, function() {
                    i = !0, j[1] && d.onCompleted()
                }), b.subscribe(function(a) {
                    e(a, 1)
                }, function(a) {
                    d.onError(a)
                }, function() {
                    i = !0, e(!0, 1)
                }))
            }, a)
        }

        function O(a) {
            return a.toArray()
        }

        function ka(a, b) {
            return a.groupJoin(this, b, jd, function(a, b) {
                return b
            })
        }

        function la(a) {
            var b = this;
            return new xg(function(c) {
                var d = new Bg,
                    e = new _b,
                    f = new lc(e);
                return c.onNext(Yb(d, f)), e.add(b.subscribe(function(a) {
                    d.onNext(a)
                }, function(a) {
                    d.onError(a), c.onError(a)
                }, function() {
                    d.onCompleted(), c.onCompleted()
                })), Xa(a) && (a = dd(a)), e.add(a.subscribe(function(a) {
                    d.onCompleted(), d = new Bg, c.onNext(Yb(d, f))
                }, function(a) {
                    d.onError(a), c.onError(a)
                }, function() {
                    d.onCompleted(), c.onCompleted()
                })), f
            }, b)
        }

        function ma(a) {
            var b = this;
            return new xg(function(c) {
                function d() {
                    var b;
                    try {
                        b = a()
                    } catch (f) {
                        return void c.onError(f)
                    }
                    Xa(b) && (b = dd(b));
                    var i = new hc;
                    e.setDisposable(i), i.setDisposable(b.take(1).subscribe(Ra, function(a) {
                        h.onError(a), c.onError(a)
                    }, function() {
                        h.onCompleted(), h = new Bg, c.onNext(Yb(h, g)), d()
                    }))
                }
                var e = new ic,
                    f = new _b(e),
                    g = new lc(f),
                    h = new Bg;
                return c.onNext(Yb(h, g)), f.add(b.subscribe(function(a) {
                    h.onNext(a)
                }, function(a) {
                    h.onError(a), c.onError(a)
                }, function() {
                    h.onCompleted(), c.onCompleted()
                })), d(), g
            }, b)
        }

        function na(a, b) {
            return new Hf(a, b)
        }

        function L() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            return b
        }

        function oa(a) {
            this.patterns = a
        }

        function pa(a, b) {
            this.expression = a, this.selector = b
        }

        function qa(a) {
            return function(b) {
                a.onError(b)
            }
        }

        function ra(a, b) {
            return function() {
                var c = $a(a.selector).apply(a, arguments);
                return c === Za ? b.onError(c.e) : void b.onNext(c)
            }
        }

        function sa(a, b, c) {
            var d = a.get(b);
            if (!d) {
                var e = new Pf(b, c);
                return a.set(b, e), e
            }
            return d
        }

        function ta(a, b, c) {
            this.joinObserverArray = a, this.onNext = b, this.onCompleted = c, this.joinObservers = new Of;
            for (var d = 0, e = this.joinObserverArray.length; e > d; d++) {
                var f = this.joinObserverArray[d];
                this.joinObservers.set(f, f);
            }
        }

        function ua(a, b) {
            return new Qf(a, b)
        }

        function va(a, b, c) {
            return new xg(function(d) {
                var e = a,
                    f = oc(b);
                return c.scheduleRecursiveFuture(0, e, function(a, b) {
                    if (f > 0) {
                        var g = c.now();
                        e = new Date(e.getTime() + f), e.getTime() <= g && (e = new Date(g + f))
                    }
                    d.onNext(a), b(a + 1, new Date(e))
                })
            })
        }

        function wa(a, b, c) {
            return a === b ? new xg(function(a) {
                return c.schedulePeriodic(0, b, function(b) {
                    return a.onNext(b), b + 1
                })
            }) : gd(function() {
                return va(new Date(c.now() + a), b, c)
            })
        }

        function xa(a, b, c) {
            return new xg(function(d) {
                var e, f = !1,
                    g = new ic,
                    h = null,
                    i = [],
                    j = !1;
                return e = a.materialize().timestamp(c).subscribe(function(a) {
                    var e, k;
                    "E" === a.value.kind ? (i = [], i.push(a), h = a.value.error, k = !j) : (i.push({
                        value: a.value,
                        timestamp: a.timestamp + b
                    }), k = !f, f = !0), k && (null !== h ? d.onError(h) : (e = new hc, g.setDisposable(e), e.setDisposable(c.scheduleRecursiveFuture(null, b, function(a, b) {
                        var e, g, k, l;
                        if (null === h) {
                            j = !0;
                            do k = null, i.length > 0 && i[0].timestamp - c.now() <= 0 && (k = i.shift().value), null !== k && k.accept(d); while (null !== k);
                            l = !1, g = 0, i.length > 0 ? (l = !0, g = Math.max(0, i[0].timestamp - c.now())) : f = !1, e = h, j = !1, null !== e ? d.onError(e) : l && b(null, g)
                        }
                    }))))
                }), new jc(e, g)
            }, a)
        }

        function ya(a, b, c) {
            return gd(function() {
                return xa(a, b - c.now(), c)
            })
        }

        function za(a, b, c) {
            var d, e;
            return Ya(b) ? e = b : (d = b, e = c), new xg(function(b) {
                function c() {
                    i.setDisposable(a.subscribe(function(a) {
                        var c = $a(e)(a);
                        if (c === Za) return b.onError(c.e);
                        var d = new hc;
                        g.add(d), d.setDisposable(c.subscribe(function() {
                            b.onNext(a), g.remove(d), f()
                        }, function(a) {
                            b.onError(a)
                        }, function() {
                            b.onNext(a), g.remove(d), f()
                        }))
                    }, function(a) {
                        b.onError(a)
                    }, function() {
                        h = !0, i.dispose(), f()
                    }))
                }

                function f() {
                    h && 0 === g.length && b.onCompleted()
                }
                var g = new _b,
                    h = !1,
                    i = new ic;
                return d ? i.setDisposable(d.subscribe(c, function(a) {
                    b.onError(a)
                }, c)) : c(), new jc(i, g)
            }, a)
        }

        function Aa(a, b) {
            return new xg(function(c) {
                var d, e = !1,
                    f = new ic,
                    g = 0,
                    h = a.subscribe(function(a) {
                        var h = $a(b)(a);
                        if (h === Za) return c.onError(h.e);
                        Xa(h) && (h = dd(h)), e = !0, d = a, g++;
                        var i = g,
                            j = new hc;
                        f.setDisposable(j), j.setDisposable(h.subscribe(function() {
                            e && g === i && c.onNext(d), e = !1, j.dispose()
                        }, function(a) {
                            c.onError(a)
                        }, function() {
                            e && g === i && c.onNext(d), e = !1, j.dispose()
                        }))
                    }, function(a) {
                        f.dispose(), c.onError(a), e = !1, g++
                    }, function() {
                        f.dispose(), e && c.onNext(d), c.onCompleted(), e = !1, g++
                    });
                return new jc(h, f)
            }, a)
        }

        function O(a) {
            return a.toArray()
        }

        function O(a) {
            return a.toArray()
        }

        function Ba(a, b, c, d) {
            return Ya(b) && (d = c, c = b, b = sd()), Sc.isObservable(d) || (d = yd(new _f)), new xg(function(e) {
                function f(a) {
                    function b() {
                        return l = c === k
                    }
                    var c = k,
                        f = new hc;
                    i.setDisposable(f), f.setDisposable(a.subscribe(function() {
                        b() && h.setDisposable(d.subscribe(e)), f.dispose()
                    }, function(a) {
                        b() && e.onError(a)
                    }, function() {
                        b() && h.setDisposable(d.subscribe(e))
                    }))
                }

                function g() {
                    var a = !l;
                    return a && k++, a
                }
                var h = new ic,
                    i = new ic,
                    j = new hc;
                h.setDisposable(j);
                var k = 0,
                    l = !1;
                return f(b), j.setDisposable(a.subscribe(function(a) {
                    if (g()) {
                        e.onNext(a);
                        var b = $a(c)(a);
                        if (b === Za) return e.onError(b.e);
                        f(Xa(b) ? dd(b) : b)
                    }
                }, function(a) {
                    g() && e.onError(a)
                }, function() {
                    g() && e.onCompleted()
                })), new jc(h, i)
            }, a)
        }

        function Ca(a, b, c, d) {
            return pc(c) && (d = c, c = yd(new _f)), c instanceof Error && (c = yd(c)), pc(d) || (d = Bc), Sc.isObservable(c) || (c = yd(new _f)), new xg(function(e) {
                function f() {
                    var a = g;
                    k.setDisposable(d.scheduleFuture(null, b, function() {
                        j = g === a, j && (Xa(c) && (c = dd(c)), i.setDisposable(c.subscribe(e)))
                    }))
                }
                var g = 0,
                    h = new hc,
                    i = new ic,
                    j = !1,
                    k = new ic;
                return i.setDisposable(h), f(), h.setDisposable(a.subscribe(function(a) {
                    j || (g++, e.onNext(a), f())
                }, function(a) {
                    j || (g++, e.onError(a))
                }, function() {
                    j || (g++, e.onCompleted())
                })), new jc(i, k)
            }, a)
        }

        function Da(a) {
            return {
                "@@transducer/init": function() {
                    return a
                },
                "@@transducer/step": function(a, b) {
                    return a.onNext(b)
                },
                "@@transducer/result": function(a) {
                    return a.onCompleted()
                }
            }
        }

        function Ea(a) {
            this.predicate = a
        }

        function Fa(a) {
            this.predicate = a
        }

        function Ga(a, b) {
            var c = this;
            this.scheduler = a, this.messages = b, this.subscriptions = [], this.observers = [];
            for (var d = 0, e = this.messages.length; e > d; d++) {
                var f = this.messages[d],
                    g = f.value;
                ! function(b) {
                    a.scheduleAbsolute(null, f.time, function() {
                        for (var a = c.observers.slice(0), d = 0, e = a.length; e > d; d++) b.accept(a[d]);
                        return dc
                    })
                }(g)
            }
        }
        var Ha = {
                "function": !0,
                object: !0
            },
            Ia = Ha[typeof exports] && exports && !exports.nodeType ? exports : null,
            Ja = Ha[typeof module] && module && !module.nodeType ? module : null,
            Ka = b(Ia && Ja && "object" == typeof global && global),
            La = b(Ha[typeof self] && self),
            Ma = b(Ha[typeof window] && window),
            Na = Ja && Ja.exports === Ia ? Ia : null,
            Oa = b(Ha[typeof this] && this),
            Pa = Ka || Ma !== (Oa && Oa.window) && Ma || La || Oa || Function("return this")(),
            Qa = {
                internals: {},
                config: {
                    Promise: Pa.Promise
                },
                helpers: {}
            },
            Ra = Qa.helpers.noop = function() {},
            Sa = Qa.helpers.identity = function(a) {
                return a
            },
            Ta = Qa.helpers.defaultNow = Date.now,
            Ua = Qa.helpers.defaultComparer = function(a, b) {
                return Vb(a, b)
            },
            Va = Qa.helpers.defaultSubComparer = function(a, b) {
                return a > b ? 1 : b > a ? -1 : 0
            },
            Wa = (Qa.helpers.defaultKeySerializer = function(a) {
                return a.toString()
            }, Qa.helpers.defaultError = function(a) {
                throw a
            }),
            Xa = Qa.helpers.isPromise = function(a) {
                return !!a && "function" != typeof a.subscribe && "function" == typeof a.then
            },
            Ya = Qa.helpers.isFunction = function() {
                var a = function(a) {
                    return "function" == typeof a || !1
                };
                return a(/x/) && (a = function(a) {
                    return "function" == typeof a && "[object Function]" == toString.call(a)
                }), a
            }(),
            Za = {
                e: {}
            },
            $a = Qa.internals.tryCatch = function(a) {
                if (!Ya(a)) throw new TypeError("fn must be a function");
                return d(a)
            };
        Qa.config.longStackSupport = !1;
        var _a = !1,
            ab = $a(function() {
                throw new Error
            })();
        _a = !!ab.e && !!ab.e.stack;
        var bb, cb = j(),
            db = "From previous event:",
            eb = Qa.EmptyError = function() {
                this.message = "Sequence contains no elements.", Error.call(this)
            };
        eb.prototype = Object.create(Error.prototype), eb.prototype.name = "EmptyError";
        var fb = Qa.ObjectDisposedError = function() {
            this.message = "Object has been disposed", Error.call(this)
        };
        fb.prototype = Object.create(Error.prototype), fb.prototype.name = "ObjectDisposedError";
        var gb = Qa.ArgumentOutOfRangeError = function() {
            this.message = "Argument out of range", Error.call(this)
        };
        gb.prototype = Object.create(Error.prototype), gb.prototype.name = "ArgumentOutOfRangeError";
        var hb = Qa.NotSupportedError = function(a) {
            this.message = a || "This operation is not supported", Error.call(this)
        };
        hb.prototype = Object.create(Error.prototype), hb.prototype.name = "NotSupportedError";
        var ib = Qa.NotImplementedError = function(a) {
            this.message = a || "This operation is not implemented", Error.call(this)
        };
        ib.prototype = Object.create(Error.prototype), ib.prototype.name = "NotImplementedError";
        var jb = Qa.helpers.notImplemented = function() {
                throw new ib
            },
            kb = (Qa.helpers.notSupported = function() {
                throw new hb
            }, "function" == typeof Symbol && Symbol.iterator || "_es6shim_iterator_");
        Pa.Set && "function" == typeof(new Pa.Set)["@@iterator"] && (kb = "@@iterator");
        var lb = Qa.doneEnumerator = {
                done: !0,
                value: a
            },
            mb = Qa.helpers.isIterable = function(b) {
                return b && b[kb] !== a
            },
            nb = Qa.helpers.isArrayLike = function(b) {
                return b && b.length !== a
            };
        Qa.helpers.iterator = kb;
        var ob = Qa.internals.bindCallback = function(a, b, c) {
                if ("undefined" == typeof b) return a;
                switch (c) {
                    case 0:
                        return function() {
                            return a.call(b)
                        };
                    case 1:
                        return function(c) {
                            return a.call(b, c)
                        };
                    case 2:
                        return function(c, d) {
                            return a.call(b, c, d)
                        };
                    case 3:
                        return function(c, d, e) {
                            return a.call(b, c, d, e)
                        }
                }
                return function() {
                    return a.apply(b, arguments)
                }
            },
            pb = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            qb = (pb.length, "[object Arguments]"),
            rb = "[object Array]",
            sb = "[object Boolean]",
            tb = "[object Date]",
            ub = "[object Error]",
            vb = "[object Function]",
            wb = "[object Map]",
            xb = "[object Number]",
            yb = "[object Object]",
            zb = "[object RegExp]",
            Ab = "[object Set]",
            Bb = "[object String]",
            Cb = "[object WeakMap]",
            Db = "[object ArrayBuffer]",
            Eb = "[object Float32Array]",
            Fb = "[object Float64Array]",
            Gb = "[object Int8Array]",
            Hb = "[object Int16Array]",
            Ib = "[object Int32Array]",
            Jb = "[object Uint8Array]",
            Kb = "[object Uint8ClampedArray]",
            Lb = "[object Uint16Array]",
            Mb = "[object Uint32Array]",
            Nb = {};
        Nb[Eb] = Nb[Fb] = Nb[Gb] = Nb[Hb] = Nb[Ib] = Nb[Jb] = Nb[Kb] = Nb[Lb] = Nb[Mb] = !0, Nb[qb] = Nb[rb] = Nb[Db] = Nb[sb] = Nb[tb] = Nb[ub] = Nb[vb] = Nb[wb] = Nb[xb] = Nb[yb] = Nb[zb] = Nb[Ab] = Nb[Bb] = Nb[Cb] = !1;
        var Ob = Object.prototype,
            Pb = Ob.hasOwnProperty,
            Qb = Ob.toString,
            Rb = Math.pow(2, 53) - 1,
            Sb = Object.keys || function() {
                var a = Object.prototype.hasOwnProperty,
                    b = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    d = c.length;
                return function(e) {
                    if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
                    var f, g, h = [];
                    for (f in e) a.call(e, f) && h.push(f);
                    if (b)
                        for (g = 0; d > g; g++) a.call(e, c[g]) && h.push(c[g]);
                    return h
                }
            }(),
            ba = Qa.internals.isObject = function(a) {
                var b = typeof a;
                return !!a && ("object" === b || "function" === b)
            },
            Tb = function() {
                try {
                    Object({
                        toString: 0
                    } + "")
                } catch (a) {
                    return function() {
                        return !1
                    }
                }
                return function(a) {
                    return "function" != typeof a.toString && "string" == typeof(a + "")
                }
            }(),
            Ub = Array.isArray || function(a) {
                return n(a) && o(a.length) && Qb.call(a) === rb
            },
            Vb = Qa.internals.isEqual = function(a, b) {
                return t(a, b)
            },
            Wb = ({}.hasOwnProperty, Array.prototype.slice, Qa.internals.inherits = function(a, b) {
                function c() {
                    this.constructor = a
                }
                c.prototype = b.prototype, a.prototype = new c
            }),
            Xb = Qa.internals.addProperties = function(a) {
                for (var b = [], c = 1, d = arguments.length; d > c; c++) b.push(arguments[c]);
                for (var e = 0, f = b.length; f > e; e++) {
                    var g = b[e];
                    for (var h in g) a[h] = g[h]
                }
            },
            Yb = Qa.internals.addRef = function(a, b) {
                return new xg(function(c) {
                    return new jc(b.getDisposable(), a.subscribe(c))
                })
            };
        v.prototype.compareTo = function(a) {
            var b = this.value.compareTo(a.value);
            return 0 === b && (b = this.id - a.id), b
        };
        var Zb = Qa.internals.PriorityQueue = function(a) {
                this.items = new Array(a), this.length = 0
            },
            $b = Zb.prototype;
        $b.isHigherPriority = function(a, b) {
            return this.items[a].compareTo(this.items[b]) < 0
        }, $b.percolate = function(a) {
            if (!(a >= this.length || 0 > a)) {
                var b = a - 1 >> 1;
                if (!(0 > b || b === a) && this.isHigherPriority(a, b)) {
                    var c = this.items[a];
                    this.items[a] = this.items[b], this.items[b] = c, this.percolate(b)
                }
            }
        }, $b.heapify = function(a) {
            if (+a || (a = 0), !(a >= this.length || 0 > a)) {
                var b = 2 * a + 1,
                    c = 2 * a + 2,
                    d = a;
                if (b < this.length && this.isHigherPriority(b, d) && (d = b), c < this.length && this.isHigherPriority(c, d) && (d = c), d !== a) {
                    var e = this.items[a];
                    this.items[a] = this.items[d], this.items[d] = e, this.heapify(d)
                }
            }
        }, $b.peek = function() {
            return this.items[0].value
        }, $b.removeAt = function(b) {
            this.items[b] = this.items[--this.length], this.items[this.length] = a, this.heapify()
        }, $b.dequeue = function() {
            var a = this.peek();
            return this.removeAt(0), a
        }, $b.enqueue = function(a) {
            var b = this.length++;
            this.items[b] = new v(Zb.count++, a), this.percolate(b)
        }, $b.remove = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this.items[b].value === a) return this.removeAt(b), !0;
            return !1
        }, Zb.count = 0;
        var _b = Qa.CompositeDisposable = function() {
                var a, b, c = [];
                if (Array.isArray(arguments[0])) c = arguments[0];
                else
                    for (b = arguments.length, c = new Array(b), a = 0; b > a; a++) c[a] = arguments[a];
                this.disposables = c, this.isDisposed = !1, this.length = c.length
            },
            ac = _b.prototype;
        ac.add = function(a) {
            this.isDisposed ? a.dispose() : (this.disposables.push(a), this.length++)
        }, ac.remove = function(a) {
            var b = !1;
            if (!this.isDisposed) {
                var c = this.disposables.indexOf(a); - 1 !== c && (b = !0, this.disposables.splice(c, 1), this.length--, a.dispose())
            }
            return b
        }, ac.dispose = function() {
            if (!this.isDisposed) {
                this.isDisposed = !0;
                for (var a = this.disposables.length, b = new Array(a), c = 0; a > c; c++) b[c] = this.disposables[c];
                for (this.disposables = [], this.length = 0, c = 0; a > c; c++) b[c].dispose()
            }
        };
        var bc = Qa.Disposable = function(a) {
            this.isDisposed = !1, this.action = a || Ra
        };
        bc.prototype.dispose = function() {
            this.isDisposed || (this.action(), this.isDisposed = !0)
        };
        var cc = bc.create = function(a) {
                return new bc(a)
            },
            dc = bc.empty = {
                dispose: Ra
            },
            ec = bc.isDisposable = function(a) {
                return a && Ya(a.dispose)
            },
            fc = bc.checkDisposed = function(a) {
                if (a.isDisposed) throw new fb
            },
            gc = bc._fixup = function(a) {
                return ec(a) ? a : dc
            },
            hc = Qa.SingleAssignmentDisposable = function() {
                this.isDisposed = !1, this.current = null
            };
        hc.prototype.getDisposable = function() {
            return this.current
        }, hc.prototype.setDisposable = function(a) {
            if (this.current) throw new Error("Disposable has already been assigned");
            var b = this.isDisposed;
            !b && (this.current = a), b && a && a.dispose()
        }, hc.prototype.dispose = function() {
            if (!this.isDisposed) {
                this.isDisposed = !0;
                var a = this.current;
                this.current = null, a && a.dispose()
            }
        };
        var ic = Qa.SerialDisposable = function() {
            this.isDisposed = !1, this.current = null
        };
        ic.prototype.getDisposable = function() {
            return this.current
        }, ic.prototype.setDisposable = function(a) {
            var b = this.isDisposed;
            if (!b) {
                var c = this.current;
                this.current = a
            }
            c && c.dispose(), b && a && a.dispose()
        }, ic.prototype.dispose = function() {
            if (!this.isDisposed) {
                this.isDisposed = !0;
                var a = this.current;
                this.current = null
            }
            a && a.dispose()
        };
        var jc = Qa.BinaryDisposable = function(a, b) {
            this._first = a, this._second = b, this.isDisposed = !1
        };
        jc.prototype.dispose = function() {
            if (!this.isDisposed) {
                this.isDisposed = !0;
                var a = this._first;
                this._first = null, a && a.dispose();
                var b = this._second;
                this._second = null, b && b.dispose()
            }
        };
        var kc = Qa.NAryDisposable = function(a) {
            this._disposables = a, this.isDisposed = !1
        };
        kc.prototype.dispose = function() {
            if (!this.isDisposed) {
                this.isDisposed = !0;
                for (var a = 0, b = this._disposables.length; b > a; a++) this._disposables[a].dispose();
                this._disposables.length = 0
            }
        };
        var lc = Qa.RefCountDisposable = function() {
            function a(a) {
                this.disposable = a, this.disposable.count++, this.isInnerDisposed = !1
            }

            function b(a) {
                this.underlyingDisposable = a, this.isDisposed = !1, this.isPrimaryDisposed = !1, this.count = 0
            }
            return a.prototype.dispose = function() {
                this.disposable.isDisposed || this.isInnerDisposed || (this.isInnerDisposed = !0, this.disposable.count--, 0 === this.disposable.count && this.disposable.isPrimaryDisposed && (this.disposable.isDisposed = !0, this.disposable.underlyingDisposable.dispose()))
            }, b.prototype.dispose = function() {
                this.isDisposed || this.isPrimaryDisposed || (this.isPrimaryDisposed = !0, 0 === this.count && (this.isDisposed = !0, this.underlyingDisposable.dispose()))
            }, b.prototype.getDisposable = function() {
                return this.isDisposed ? dc : new a(this)
            }, b
        }();
        w.prototype.dispose = function() {
            this.scheduler.schedule(this, x)
        };
        var mc = Qa.internals.ScheduledItem = function(a, b, c, d, e) {
            this.scheduler = a, this.state = b, this.action = c, this.dueTime = d, this.comparer = e || Va, this.disposable = new hc
        };
        mc.prototype.invoke = function() {
            this.disposable.setDisposable(this.invokeCore())
        }, mc.prototype.compareTo = function(a) {
            return this.comparer(this.dueTime, a.dueTime)
        }, mc.prototype.isCancelled = function() {
            return this.disposable.isDisposed
        }, mc.prototype.invokeCore = function() {
            return gc(this.action(this.scheduler, this.state))
        };
        var nc = Qa.Scheduler = function() {
                function a() {}
                a.isScheduler = function(b) {
                    return b instanceof a
                };
                var b = a.prototype;
                return b.schedule = function(a, b) {
                    throw new ib
                }, b.scheduleFuture = function(b, c, d) {
                    var e = c;
                    return e instanceof Date && (e -= this.now()), e = a.normalize(e), 0 === e ? this.schedule(b, d) : this._scheduleFuture(b, e, d)
                }, b._scheduleFuture = function(a, b, c) {
                    throw new ib
                }, a.now = Ta, a.prototype.now = Ta, a.normalize = function(a) {
                    return 0 > a && (a = 0), a
                }, a
            }(),
            oc = nc.normalize,
            pc = nc.isScheduler;
        ! function(a) {
            function b(a, b) {
                function c(b) {
                    function d(a, b) {
                        return g ? f.remove(i) : h = !0, e(b, c), dc
                    }
                    var g = !1,
                        h = !1,
                        i = a.schedule(b, d);
                    h || (f.add(i), g = !0)
                }
                var d = b[0],
                    e = b[1],
                    f = new _b;
                return e(d, c), f
            }

            function c(a, b) {
                function c(b, d) {
                    function g(a, b) {
                        return h ? f.remove(j) : i = !0, e(b, c), dc
                    }
                    var h = !1,
                        i = !1,
                        j = a.scheduleFuture(b, d, g);
                    i || (f.add(j), h = !0)
                }
                var d = b[0],
                    e = b[1],
                    f = new _b;
                return e(d, c), f
            }
            a.scheduleRecursive = function(a, c) {
                return this.schedule([a, c], b)
            }, a.scheduleRecursiveFuture = function(a, b, d) {
                return this.scheduleFuture([a, d], b, c)
            }
        }(nc.prototype),
            function(a) {
                a.schedulePeriodic = function(a, b, c) {
                    if ("undefined" == typeof Pa.setInterval) throw new hb;
                    b = oc(b);
                    var d = a,
                        e = Pa.setInterval(function() {
                            d = c(d)
                        }, b);
                    return cc(function() {
                        Pa.clearInterval(e)
                    })
                }
            }(nc.prototype),
            function(a) {
                a.catchError = a["catch"] = function(a) {
                    return new Cc(this, a)
                }
            }(nc.prototype);
        var qc, rc, sc = Qa.internals.SchedulePeriodicRecursive = function() {
                function a(a) {
                    return function(b, c) {
                        c(0, a._period);
                        var d = $a(a._action)(a._state);
                        d === Za && (a._cancel.dispose(), e(d.e)), a._state = d
                    }
                }

                function b(a, b, c, d) {
                    this._scheduler = a, this._state = b, this._period = c, this._action = d
                }
                return b.prototype.start = function() {
                    var b = new hc;
                    return this._cancel = b, b.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, a(this))), b
                }, b
            }(),
            tc = function(a) {
                function b() {
                    a.call(this)
                }
                return Wb(b, a), b.prototype.schedule = function(a, b) {
                    return gc(b(this, a))
                }, b
            }(nc),
            uc = nc.immediate = new tc,
            vc = function(a) {
                function b() {
                    for (; d.length > 0;) {
                        var a = d.dequeue();
                        !a.isCancelled() && a.invoke()
                    }
                }

                function c() {
                    a.call(this)
                }
                var d;
                return Wb(c, a), c.prototype.schedule = function(a, c) {
                    var f = new mc(this, a, c, this.now());
                    if (d) d.enqueue(f);
                    else {
                        d = new Zb(4), d.enqueue(f);
                        var g = $a(b)();
                        d = null, g === Za && e(g.e)
                    }
                    return f.disposable
                }, c.prototype.scheduleRequired = function() {
                    return !d
                }, c
            }(nc),
            wc = nc.currentThread = new vc,
            xc = function() {
                var a, b = Ra;
                if (Pa.setTimeout) a = Pa.setTimeout, b = Pa.clearTimeout;
                else {
                    if (!Pa.WScript) throw new hb;
                    a = function(a, b) {
                        Pa.WScript.Sleep(b), a()
                    }
                }
                return {
                    setTimeout: a,
                    clearTimeout: b
                }
            }(),
            yc = xc.setTimeout,
            zc = xc.clearTimeout;
        ! function() {
            function a(b) {
                if (f) yc(function() {
                    a(b)
                }, 0);
                else {
                    var c = d[b];
                    if (c) {
                        f = !0;
                        var g = $a(c)();
                        rc(b), f = !1, g === Za && e(g.e)
                    }
                }
            }

            function b() {
                if (!Pa.postMessage || Pa.importScripts) return !1;
                var a = !1,
                    b = Pa.onmessage;
                return Pa.onmessage = function() {
                    a = !0
                }, Pa.postMessage("", "*"), Pa.onmessage = b, a
            }
            var c = 1,
                d = {},
                f = !1;
            rc = function(a) {
                delete d[a]
            };
            var g = new RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                h = "function" == typeof(h = Ka && Na && Ka.setImmediate) && !g.test(h) && h;
            if (Ya(h)) qc = function(b) {
                var e = c++;
                return d[e] = b, h(function() {
                    a(e)
                }), e
            };
            else if ("undefined" != typeof process && "[object process]" === {}.toString.call(process)) qc = function(b) {
                var e = c++;
                return d[e] = b, process.nextTick(function() {
                    a(e)
                }), e
            };
            else if (b()) {
                var i = "ms.rx.schedule" + Math.random(),
                    j = function(b) {
                        "string" == typeof b.data && b.data.substring(0, i.length) === i && a(b.data.substring(i.length))
                    };
                Pa.addEventListener("message", j, !1), qc = function(a) {
                    var b = c++;
                    return d[b] = a, Pa.postMessage(i + b, "*"), b
                }
            } else if (Pa.MessageChannel) {
                var k = new Pa.MessageChannel;
                k.port1.onmessage = function(b) {
                    a(b.data)
                }, qc = function(a) {
                    var b = c++;
                    return d[b] = a, k.port2.postMessage(b), b
                }
            } else qc = "document" in Pa && "onreadystatechange" in Pa.document.createElement("script") ? function(b) {
                var e = Pa.document.createElement("script"),
                    f = c++;
                return d[f] = b, e.onreadystatechange = function() {
                    a(f), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
                }, Pa.document.documentElement.appendChild(e), f
            } : function(b) {
                var e = c++;
                return d[e] = b, yc(function() {
                    a(e)
                }, 0), e
            }
        }();
        var Ac = function(a) {
                function b() {
                    a.call(this)
                }

                function c(a, b, c, d) {
                    return function() {
                        a.setDisposable(bc._fixup(b(c, d)))
                    }
                }

                function d(a) {
                    this._id = a, this.isDisposed = !1
                }

                function e(a) {
                    this._id = a, this.isDisposed = !1
                }
                return Wb(b, a), d.prototype.dispose = function() {
                    this.isDisposed || (this.isDisposed = !0, rc(this._id))
                }, e.prototype.dispose = function() {
                    this.isDisposed || (this.isDisposed = !0, zc(this._id))
                }, b.prototype.schedule = function(a, b) {
                    var e = new hc,
                        f = qc(c(e, b, this, a));
                    return new jc(e, new d(f))
                }, b.prototype._scheduleFuture = function(a, b, d) {
                    if (0 === b) return this.schedule(a, d);
                    var f = new hc,
                        g = yc(c(f, d, this, a), b);
                    return new jc(f, new e(g))
                }, b
            }(nc),
            Bc = nc["default"] = nc.async = new Ac,
            Cc = function(a) {
                function b(b, c) {
                    this._scheduler = b, this._handler = c, this._recursiveOriginal = null, this._recursiveWrapper = null, a.call(this)
                }
                return Wb(b, a), b.prototype.schedule = function(a, b) {
                    return this._scheduler.schedule(a, this._wrap(b))
                }, b.prototype._scheduleFuture = function(a, b, c) {
                    return this._scheduler.schedule(a, b, this._wrap(c))
                }, b.prototype.now = function() {
                    return this._scheduler.now()
                }, b.prototype._clone = function(a) {
                    return new b(a, this._handler)
                }, b.prototype._wrap = function(a) {
                    var b = this;
                    return function(c, d) {
                        var f = $a(a)(b._getRecursiveWrapper(c), d);
                        return f === Za ? (b._handler(f.e) || e(f.e), dc) : gc(f)
                    }
                }, b.prototype._getRecursiveWrapper = function(a) {
                    if (this._recursiveOriginal !== a) {
                        this._recursiveOriginal = a;
                        var b = this._clone(a);
                        b._recursiveOriginal = a, b._recursiveWrapper = b, this._recursiveWrapper = b
                    }
                    return this._recursiveWrapper
                }, b.prototype.schedulePeriodic = function(a, b, c) {
                    var d = this,
                        f = !1,
                        g = new hc;
                    return g.setDisposable(this._scheduler.schedulePeriodic(a, b, function(a) {
                        if (f) return null;
                        var b = $a(c)(a);
                        return b === Za ? (f = !0, d._handler(b.e) || e(b.e), g.dispose(), null) : b
                    })), g
                }, b
            }(nc),
            Dc = Qa.Notification = function() {
                function a() {}
                return a.prototype._accept = function(a, b, c) {
                    throw new ib
                }, a.prototype._acceptObserver = function(a, b, c) {
                    throw new ib
                }, a.prototype.accept = function(a, b, c) {
                    return a && "object" == typeof a ? this._acceptObserver(a) : this._accept(a, b, c)
                }, a.prototype.toObservable = function(a) {
                    var b = this;
                    return pc(a) || (a = uc), new xg(function(c) {
                        return a.schedule(b, function(a, b) {
                            b._acceptObserver(c), "N" === b.kind && c.onCompleted()
                        })
                    })
                }, a
            }(),
            Ec = function(a) {
                function b(a) {
                    this.value = a, this.kind = "N"
                }
                return Wb(b, a), b.prototype._accept = function(a) {
                    return a(this.value)
                }, b.prototype._acceptObserver = function(a) {
                    return a.onNext(this.value)
                }, b.prototype.toString = function() {
                    return "OnNext(" + this.value + ")"
                }, b
            }(Dc),
            Fc = function(a) {
                function b(a) {
                    this.error = a, this.kind = "E"
                }
                return Wb(b, a), b.prototype._accept = function(a, b) {
                    return b(this.error)
                }, b.prototype._acceptObserver = function(a) {
                    return a.onError(this.error)
                }, b.prototype.toString = function() {
                    return "OnError(" + this.error + ")"
                }, b
            }(Dc),
            Gc = function(a) {
                function b() {
                    this.kind = "C"
                }
                return Wb(b, a), b.prototype._accept = function(a, b, c) {
                    return c()
                }, b.prototype._acceptObserver = function(a) {
                    return a.onCompleted()
                }, b.prototype.toString = function() {
                    return "OnCompleted()"
                }, b
            }(Dc),
            Hc = Dc.createOnNext = function(a) {
                return new Ec(a)
            },
            Ic = Dc.createOnError = function(a) {
                return new Fc(a)
            },
            Jc = Dc.createOnCompleted = function() {
                return new Gc
            },
            Kc = Qa.Observer = function() {};
        Kc.prototype.toNotifier = function() {
            var a = this;
            return function(b) {
                return b.accept(a)
            }
        }, Kc.prototype.asObserver = function() {
            var a = this;
            return new Oc(function(b) {
                a.onNext(b)
            }, function(b) {
                a.onError(b)
            }, function() {
                a.onCompleted()
            })
        }, Kc.prototype.checked = function() {
            return new Pc(this)
        };
        var Lc = Kc.create = function(a, b, c) {
            return a || (a = Ra), b || (b = Wa), c || (c = Ra), new Oc(a, b, c)
        };
        Kc.fromNotifier = function(a, b) {
            var c = ob(a, b, 1);
            return new Oc(function(a) {
                return c(Hc(a))
            }, function(a) {
                return c(Ic(a))
            }, function() {
                return c(Jc())
            })
        }, Kc.prototype.notifyOn = function(a) {
            return new Rc(a, this)
        }, Kc.prototype.makeSafe = function(a) {
            return new AnonymousSafeObserver(this._onNext, this._onError, this._onCompleted, a)
        };
        var Mc, Nc = Qa.internals.AbstractObserver = function(a) {
                function b() {
                    this.isStopped = !1
                }
                return Wb(b, a), b.prototype.next = jb, b.prototype.error = jb, b.prototype.completed = jb, b.prototype.onNext = function(a) {
                    !this.isStopped && this.next(a)
                }, b.prototype.onError = function(a) {
                    this.isStopped || (this.isStopped = !0, this.error(a))
                }, b.prototype.onCompleted = function() {
                    this.isStopped || (this.isStopped = !0, this.completed())
                }, b.prototype.dispose = function() {
                    this.isStopped = !0
                }, b.prototype.fail = function(a) {
                    return this.isStopped ? !1 : (this.isStopped = !0, this.error(a), !0)
                }, b
            }(Kc),
            Oc = Qa.AnonymousObserver = function(a) {
                function b(b, c, d) {
                    a.call(this), this._onNext = b, this._onError = c, this._onCompleted = d
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._onNext(a)
                }, b.prototype.error = function(a) {
                    this._onError(a)
                }, b.prototype.completed = function() {
                    this._onCompleted()
                }, b
            }(Nc),
            Pc = function(a) {
                function b(b) {
                    a.call(this), this._observer = b, this._state = 0
                }
                Wb(b, a);
                var c = b.prototype;
                return c.onNext = function(a) {
                    this.checkAccess();
                    var b = $a(this._observer.onNext).call(this._observer, a);
                    this._state = 0, b === Za && e(b.e)
                }, c.onError = function(a) {
                    this.checkAccess();
                    var b = $a(this._observer.onError).call(this._observer, a);
                    this._state = 2, b === Za && e(b.e)
                }, c.onCompleted = function() {
                    this.checkAccess();
                    var a = $a(this._observer.onCompleted).call(this._observer);
                    this._state = 2, a === Za && e(a.e)
                }, c.checkAccess = function() {
                    if (1 === this._state) throw new Error("Re-entrancy detected");
                    if (2 === this._state) throw new Error("Observer completed");
                    0 === this._state && (this._state = 1)
                }, b
            }(Kc),
            Qc = Qa.internals.ScheduledObserver = function(a) {
                function b(b, c) {
                    a.call(this), this.scheduler = b, this.observer = c, this.isAcquired = !1, this.hasFaulted = !1, this.queue = [], this.disposable = new ic
                }

                function c(a, b) {
                    return function() {
                        a.onNext(b)
                    }
                }

                function d(a, b) {
                    return function() {
                        a.onError(b)
                    }
                }

                function f(a) {
                    return function() {
                        a.onCompleted()
                    }
                }

                function g(a, b) {
                    var c;
                    if (!(a.queue.length > 0)) return void(a.isAcquired = !1);
                    c = a.queue.shift();
                    var d = $a(c)();
                    return d === Za ? (a.queue = [], a.hasFaulted = !0, e(d.e)) : void b(a)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this.queue.push(c(this.observer, a))
                }, b.prototype.error = function(a) {
                    this.queue.push(d(this.observer, a))
                }, b.prototype.completed = function() {
                    this.queue.push(f(this.observer))
                }, b.prototype.ensureActive = function() {
                    var a = !1;
                    !this.hasFaulted && this.queue.length > 0 && (a = !this.isAcquired, this.isAcquired = !0), a && this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, g))
                }, b.prototype.dispose = function() {
                    a.prototype.dispose.call(this), this.disposable.dispose()
                }, b
            }(Nc),
            Rc = function(a) {
                function b(b, c, d) {
                    a.call(this, b, c), this._cancel = d
                }
                return Wb(b, a), b.prototype.next = function(b) {
                    a.prototype.next.call(this, b), this.ensureActive()
                }, b.prototype.error = function(b) {
                    a.prototype.error.call(this, b), this.ensureActive()
                }, b.prototype.completed = function() {
                    a.prototype.completed.call(this), this.ensureActive()
                }, b.prototype.dispose = function() {
                    a.prototype.dispose.call(this), this._cancel && this._cancel.dispose(), this._cancel = null
                }, b
            }(Qc),
            Sc = Qa.Observable = function() {
                function a(a, b) {
                    return function(c) {
                        var d = c.onError;
                        return c.onError = function(b) {
                            f(b, a), d.call(c, b)
                        }, b.call(a, c)
                    }
                }

                function b() {
                    if (Qa.config.longStackSupport && _a) {
                        var b = this._subscribe,
                            c = $a(e)(new Error).e;
                        this.stack = c.stack.substring(c.stack.indexOf("\n") + 1), this._subscribe = a(this, b)
                    }
                }
                return Mc = b.prototype, b.isObservable = function(a) {
                    return a && Ya(a.subscribe)
                }, Mc.subscribe = Mc.forEach = function(a, b, c) {
                    return this._subscribe("object" == typeof a ? a : Lc(a, b, c))
                }, Mc.subscribeOnNext = function(a, b) {
                    return this._subscribe(Lc("undefined" != typeof b ? function(c) {
                        a.call(b, c)
                    } : a))
                }, Mc.subscribeOnError = function(a, b) {
                    return this._subscribe(Lc(null, "undefined" != typeof b ? function(c) {
                        a.call(b, c)
                    } : a))
                }, Mc.subscribeOnCompleted = function(a, b) {
                    return this._subscribe(Lc(null, null, "undefined" != typeof b ? function() {
                        a.call(b)
                    } : a))
                }, b
            }(),
            Tc = Qa.ObservableBase = function(a) {
                function b(a) {
                    return a && Ya(a.dispose) ? a : Ya(a) ? cc(a) : dc
                }

                function c(a, c) {
                    var d = c[0],
                        f = c[1],
                        g = $a(f.subscribeCore).call(f, d);
                    g !== Za || d.fail(Za.e) || e(Za.e), d.setDisposable(b(g))
                }

                function d() {
                    a.call(this)
                }
                return Wb(d, a), d.prototype._subscribe = function(a) {
                    var b = new yg(a),
                        d = [b, this];
                    return wc.scheduleRequired() ? wc.schedule(d, c) : c(null, d), b
                }, d.prototype.subscribeCore = jb, d
            }(Sc),
            Uc = Qa.FlatMapObservable = function(a) {
                function b(b, c, d, e) {
                    this.resultSelector = Ya(d) ? d : null, this.selector = ob(Ya(c) ? c : function() {
                        return c
                    }, e, 3), this.source = b, a.call(this)
                }

                function c(a, b, c, d) {
                    this.i = 0, this.selector = b, this.resultSelector = c, this.source = d, this.o = a, Nc.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new c(a, this.selector, this.resultSelector, this))
                }, Wb(c, Nc), c.prototype._wrapResult = function(a, b, c) {
                    return this.resultSelector ? a.map(function(a, d) {
                        return this.resultSelector(b, a, c, d)
                    }, this) : a
                }, c.prototype.next = function(a) {
                    var b = this.i++,
                        c = $a(this.selector)(a, b, this.source);
                    return c === Za ? this.o.onError(c.e) : (Xa(c) && (c = dd(c)), (nb(c) || mb(c)) && (c = Sc.from(c)), void this.o.onNext(this._wrapResult(c, a, b)))
                }, c.prototype.error = function(a) {
                    this.o.onError(a)
                }, c.prototype.completed = function() {
                    this.o.onCompleted()
                }, b
            }(Tc),
            Vc = Qa.internals.Enumerable = function() {};
        y.prototype.dispose = function() {
            this.isDisposed || (this.isDisposed = !0, this._s.isDisposed = !0)
        };
        var Wc = function(a) {
            function b(b) {
                this.sources = b, a.call(this)
            }

            function c(a, b) {
                if (!a.isDisposed) {
                    var c = $a(a.e.next).call(a.e);
                    if (c === Za) return a.o.onError(c.e);
                    if (c.done) return a.o.onCompleted();
                    var e = c.value;
                    Xa(e) && (e = dd(e));
                    var f = new hc;
                    a.subscription.setDisposable(f), f.setDisposable(e.subscribe(new d(a, b)))
                }
            }

            function d(a, b) {
                this._state = a, this._recurse = b, Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = new ic,
                    d = {
                        isDisposed: !1,
                        o: a,
                        subscription: b,
                        e: this.sources[kb]()
                    },
                    e = wc.scheduleRecursive(d, c);
                return new kc([b, e, new y(d)])
            }, Wb(d, Nc), d.prototype.next = function(a) {
                this._state.o.onNext(a)
            }, d.prototype.error = function(a) {
                this._state.o.onError(a)
            }, d.prototype.completed = function() {
                this._recurse(this._state)
            }, b
        }(Tc);
        Vc.prototype.concat = function() {
            return new Wc(this)
        };
        var Xc = function(a) {
            function b(b) {
                this.sources = b, a.call(this)
            }

            function c(a, b) {
                if (!a.isDisposed) {
                    var c = $a(a.e.next).call(a.e);
                    if (c === Za) return a.o.onError(c.e);
                    if (c.done) return null !== a.lastError ? a.o.onError(a.lastError) : a.o.onCompleted();
                    var e = c.value;
                    Xa(e) && (e = dd(e));
                    var f = new hc;
                    a.subscription.setDisposable(f), f.setDisposable(e.subscribe(new d(a, b)))
                }
            }

            function d(a, b) {
                this._state = a, this._recurse = b, Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = new ic,
                    d = {
                        isDisposed: !1,
                        e: this.sources[kb](),
                        subscription: b,
                        lastError: null,
                        o: a
                    },
                    e = wc.scheduleRecursive(d, c);
                return new kc([b, e, new y(d)])
            }, Wb(d, Nc), d.prototype.next = function(a) {
                this._state.o.onNext(a)
            }, d.prototype.error = function(a) {
                this._state.lastError = a, this._recurse(this._state)
            }, d.prototype.completed = function() {
                this._state.o.onCompleted()
            }, b
        }(Tc);
        Vc.prototype.catchError = function() {
            return new Xc(this)
        };
        var Yc = function(a) {
                function b(a, b) {
                    this.v = a, this.c = null == b ? -1 : b
                }

                function c(a) {
                    this.v = a.v, this.l = a.c
                }
                return Wb(b, a), b.prototype[kb] = function() {
                    return new c(this)
                }, c.prototype.next = function() {
                    return 0 === this.l ? lb : (this.l > 0 && this.l--, {
                        done: !1,
                        value: this.v
                    })
                }, b
            }(Vc),
            Zc = Vc.repeat = function(a, b) {
                return new Yc(a, b)
            },
            $c = function(a) {
                function b(a, b, c) {
                    this.s = a, this.fn = b ? ob(b, c, 3) : null
                }

                function c(a) {
                    this.i = -1, this.s = a.s, this.l = this.s.length, this.fn = a.fn
                }
                return Wb(b, a), b.prototype[kb] = function() {
                    return new c(this)
                }, c.prototype.next = function() {
                    return ++this.i < this.l ? {
                        done: !1,
                        value: this.fn ? this.fn(this.s[this.i], this.i, this.s) : this.s[this.i]
                    } : lb
                }, b
            }(Vc),
            _c = Vc.of = function(a, b, c) {
                return new $c(a, b, c)
            },
            ad = function(a) {
                function b(b, c) {
                    this.source = b, this._s = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Rc(this._s, a))
                }, b
            }(Tc);
        Mc.observeOn = function(a) {
            return new ad(this, a)
        };
        var bd = function(a) {
            function b(b, c) {
                this.source = b, this._s = c, a.call(this)
            }

            function c(a, b) {
                var c = b[0],
                    d = b[1],
                    e = b[2];
                d.setDisposable(new w(a, c.subscribe(e)))
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = new hc,
                    d = new ic;
                return d.setDisposable(b), b.setDisposable(this._s.schedule([this.source, d, a], c)), d
            }, b
        }(Tc);
        Mc.subscribeOn = function(a) {
            return new bd(this, a)
        };
        var cd = function(a) {
                function b(b, c) {
                    this._p = b, this._s = c, a.call(this)
                }

                function c(a, b) {
                    var c = b[0],
                        d = b[1];
                    c.onNext(d), c.onCompleted()
                }

                function d(a, b) {
                    var c = b[0],
                        d = b[1];
                    c.onError(d)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new hc,
                        e = this;
                    return this._p.then(function(d) {
                        b.setDisposable(e._s.schedule([a, d], c))
                    }, function(c) {
                        b.setDisposable(e._s.schedule([a, c], d))
                    }), b
                }, b
            }(Tc),
            dd = Sc.fromPromise = function(a, b) {
                return b || (b = Bc), new cd(a, b)
            };
        Mc.toPromise = function(a) {
            if (a || (a = Qa.config.Promise), !a) throw new hb("Promise type not provided nor in Rx.config.Promise");
            var b = this;
            return new a(function(a, c) {
                var d;
                b.subscribe(function(a) {
                    d = a
                }, c, function() {
                    a(d)
                })
            })
        };
        var ed = function(a) {
            function b(b) {
                this.source = b, a.call(this)
            }

            function c(a) {
                this.o = a, this.a = [], Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return this.source.subscribe(new c(a))
            }, Wb(c, Nc), c.prototype.next = function(a) {
                this.a.push(a)
            }, c.prototype.error = function(a) {
                this.o.onError(a)
            }, c.prototype.completed = function() {
                this.o.onNext(this.a), this.o.onCompleted()
            }, b
        }(Tc);
        Mc.toArray = function() {
            return new ed(this)
        }, Sc.create = function(a, b) {
            return new xg(a, b)
        };
        var fd = function(a) {
                function b(b) {
                    this._f = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = $a(this._f)();
                    return b === Za ? yd(b.e).subscribe(a) : (Xa(b) && (b = dd(b)), b.subscribe(a))
                }, b
            }(Tc),
            gd = Sc.defer = function(a) {
                return new fd(a)
            },
            hd = function(a) {
                function b(b) {
                    this.scheduler = b, a.call(this)
                }

                function c(a, b) {
                    this.observer = a, this.scheduler = b
                }

                function d(a, b) {
                    return b.onCompleted(), dc
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new c(a, this.scheduler);
                    return b.run()
                }, c.prototype.run = function() {
                    var a = this.observer;
                    return this.scheduler === uc ? d(null, a) : this.scheduler.schedule(a, d);
                }, b
            }(Tc),
            id = new hd(uc),
            jd = Sc.empty = function(a) {
                return pc(a) || (a = uc), a === uc ? id : new hd(a)
            },
            kd = function(a) {
                function b(b, c, d) {
                    this._iterable = b, this._fn = c, this._scheduler = d, a.call(this)
                }

                function c(a, b, c) {
                    return function(d, e) {
                        var f = $a(b.next).call(b);
                        if (f === Za) return a.onError(f.e);
                        if (f.done) return a.onCompleted();
                        var g = f.value;
                        return Ya(c) && (g = $a(c)(g, d), g === Za) ? a.onError(g.e) : (a.onNext(g), void e(d + 1))
                    }
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = Object(this._iterable),
                        d = E(b);
                    return this._scheduler.scheduleRecursive(0, c(a, d, this._fn))
                }, b
            }(Tc),
            ld = Math.pow(2, 53) - 1;
        z.prototype[kb] = function() {
            return new A(this._s)
        }, A.prototype[kb] = function() {
            return this
        }, A.prototype.next = function() {
            return this._i < this._l ? {
                done: !1,
                value: this._s.charAt(this._i++)
            } : lb
        }, B.prototype[kb] = function() {
            return new C(this._a)
        }, C.prototype[kb] = function() {
            return this
        }, C.prototype.next = function() {
            return this._i < this._l ? {
                done: !1,
                value: this._a[this._i++]
            } : lb
        };
        var md = Sc.from = function(a, b, c, d) {
                if (null == a) throw new Error("iterable cannot be null.");
                if (b && !Ya(b)) throw new Error("mapFn when provided must be a function");
                if (b) var e = ob(b, c, 2);
                return pc(d) || (d = wc), new kd(a, e, d)
            },
            nd = function(a) {
                function b(b, c) {
                    this._args = b, this._scheduler = c, a.call(this)
                }

                function c(a, b) {
                    var c = b.length;
                    return function(d, e) {
                        c > d ? (a.onNext(b[d]), e(d + 1)) : a.onCompleted()
                    }
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this._scheduler.scheduleRecursive(0, c(a, this._args))
                }, b
            }(Tc),
            od = Sc.fromArray = function(a, b) {
                return pc(b) || (b = wc), new nd(a, b)
            },
            pd = function(a) {
                function b(b, c, d, e, f) {
                    this._initialState = b, this._cndFn = c, this._itrFn = d, this._resFn = e, this._s = f, a.call(this)
                }

                function c(a, b) {
                    if (a.first) a.first = !1;
                    else if (a.newState = $a(a.self._itrFn)(a.newState), a.newState === Za) return a.o.onError(a.newState.e);
                    var c = $a(a.self._cndFn)(a.newState);
                    if (c === Za) return a.o.onError(c.e);
                    if (c) {
                        var d = $a(a.self._resFn)(a.newState);
                        if (d === Za) return a.o.onError(d.e);
                        a.o.onNext(d), b(a)
                    } else a.o.onCompleted()
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = {
                        o: a,
                        self: this,
                        first: !0,
                        newState: this._initialState
                    };
                    return this._s.scheduleRecursive(b, c)
                }, b
            }(Tc);
        Sc.generate = function(a, b, c, d, e) {
            return pc(e) || (e = wc), new pd(a, b, c, d, e)
        }, Sc.of = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            return new nd(b, wc)
        }, Sc.ofWithScheduler = function(a) {
            for (var b = arguments.length, c = new Array(b - 1), d = 1; b > d; d++) c[d - 1] = arguments[d];
            return new nd(c, a)
        }, Sc.ofArrayChanges = function(a) {
            if (!Array.isArray(a)) throw new TypeError("Array.observe only accepts arrays.");
            if ("function" != typeof Array.observe && "function" != typeof Array.unobserve) throw new TypeError("Array.observe is not supported on your platform");
            return new xg(function(b) {
                function c(a) {
                    for (var c = 0, d = a.length; d > c; c++) b.onNext(a[c])
                }
                return Array.observe(a, c),
                    function() {
                        Array.unobserve(a, c)
                    }
            })
        }, Sc.ofObjectChanges = function(a) {
            if (null == a) throw new TypeError("object must not be null or undefined.");
            if ("function" != typeof Object.observe && "function" != typeof Object.unobserve) throw new TypeError("Object.observe is not supported on your platform");
            return new xg(function(b) {
                function c(a) {
                    for (var c = 0, d = a.length; d > c; c++) b.onNext(a[c])
                }
                return Object.observe(a, c),
                    function() {
                        Object.unobserve(a, c)
                    }
            })
        };
        var qd = function(a) {
                function b() {
                    a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return dc
                }, b
            }(Tc),
            rd = new qd,
            sd = Sc.never = function() {
                return rd
            },
            td = function(a) {
                function b(b, c) {
                    this._o = b, this._keys = Object.keys(b), this._scheduler = c, a.call(this)
                }

                function c(a, b, c) {
                    return function(d, e) {
                        if (d < c.length) {
                            var f = c[d];
                            a.onNext([f, b[f]]), e(d + 1)
                        } else a.onCompleted()
                    }
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this._scheduler.scheduleRecursive(0, c(a, this._o, this._keys))
                }, b
            }(Tc);
        Sc.pairs = function(a, b) {
            return b || (b = wc), new td(a, b)
        };
        var ud = function(a) {
            function b(b, c, d) {
                this.start = b, this.rangeCount = c, this.scheduler = d, a.call(this)
            }

            function c(a, b, c) {
                return function(d, e) {
                    b > d ? (c.onNext(a + d), e(d + 1)) : c.onCompleted()
                }
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return this.scheduler.scheduleRecursive(0, c(this.start, this.rangeCount, a))
            }, b
        }(Tc);
        Sc.range = function(a, b, c) {
            return pc(c) || (c = wc), new ud(a, b, c)
        };
        var vd = function(a) {
            function b(b, c, d) {
                this.value = b, this.repeatCount = null == c ? -1 : c, this.scheduler = d, a.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = new I(a, this);
                return b.run()
            }, b
        }(Tc);
        I.prototype.run = function() {
            function a(a, d) {
                return (-1 === a || a > 0) && (b.onNext(c), a > 0 && a--), 0 === a ? b.onCompleted() : void d(a)
            }
            var b = this.observer,
                c = this.parent.value;
            return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, a)
        }, Sc.repeat = function(a, b, c) {
            return pc(c) || (c = wc), new vd(a, b, c)
        };
        var wd = function(a) {
                function b(b, c) {
                    this._value = b, this._scheduler = c, a.call(this)
                }

                function c(a, b) {
                    var c = b[0],
                        d = b[1];
                    return d.onNext(c), d.onCompleted(), dc
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = [this._value, a];
                    return this._scheduler === uc ? c(null, b) : this._scheduler.schedule(b, c)
                }, b
            }(Tc),
            xd = (Sc["return"] = Sc.just = function(a, b) {
                return pc(b) || (b = uc), new wd(a, b)
            }, function(a) {
                function b(b, c) {
                    this._error = b, this._scheduler = c, a.call(this)
                }

                function c(a, b) {
                    var c = b[0],
                        d = b[1];
                    return d.onError(c), dc
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = [this._error, a];
                    return this._scheduler === uc ? c(null, b) : this._scheduler.schedule(b, c)
                }, b
            }(Tc)),
            yd = Sc["throw"] = function(a, b) {
                return pc(b) || (b = uc), new xd(a, b)
            },
            zd = function(a) {
                function b(b, c) {
                    this._resFn = b, this._obsFn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = dc,
                        c = $a(this._resFn)();
                    if (c === Za) return new jc(yd(c.e).subscribe(a), b);
                    c && (b = c);
                    var d = $a(this._obsFn)(c);
                    return d === Za ? new jc(yd(d.e).subscribe(a), b) : new jc(d.subscribe(a), b)
                }, b
            }(Tc);
        Sc.using = function(a, b) {
            return new zd(a, b)
        }, Mc.amb = function(a) {
            var b = this;
            return new xg(function(c) {
                function d() {
                    f || (f = g, j.dispose())
                }

                function e() {
                    f || (f = h, i.dispose())
                }
                var f, g = "L",
                    h = "R",
                    i = new hc,
                    j = new hc;
                Xa(a) && (a = dd(a));
                var k = Lc(function(a) {
                        d(), f === g && c.onNext(a)
                    }, function(a) {
                        d(), f === g && c.onError(a)
                    }, function() {
                        d(), f === g && c.onCompleted()
                    }),
                    l = Lc(function(a) {
                        e(), f === h && c.onNext(a)
                    }, function(a) {
                        e(), f === h && c.onError(a)
                    }, function() {
                        e(), f === h && c.onCompleted()
                    });
                return i.setDisposable(b.subscribe(k)), j.setDisposable(a.subscribe(l)), new jc(i, j)
            })
        }, Sc.amb = function() {
            var a, b = sd();
            if (Array.isArray(arguments[0])) a = arguments[0];
            else {
                var c = arguments.length;
                a = new Array(a);
                for (var d = 0; c > d; d++) a[d] = arguments[d]
            }
            for (var d = 0, c = a.length; c > d; d++) b = J(b, a[d]);
            return b
        };
        var Ad = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new hc,
                        c = new ic;
                    return c.setDisposable(b), b.setDisposable(this.source.subscribe(new Bd(a, c, this._fn))), c
                }, b
            }(Tc),
            Bd = function(a) {
                function b(b, c, d) {
                    this._o = b, this._s = c, this._fn = d, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._o.onNext(a)
                }, b.prototype.completed = function() {
                    return this._o.onCompleted()
                }, b.prototype.error = function(a) {
                    var b = $a(this._fn)(a);
                    if (b === Za) return this._o.onError(b.e);
                    Xa(b) && (b = dd(b));
                    var c = new hc;
                    this._s.setDisposable(c), c.setDisposable(b.subscribe(this._o))
                }, b
            }(Nc);
        Mc["catch"] = function(a) {
            return Ya(a) ? new Ad(this, a) : Cd([this, a])
        };
        var Cd = Sc["catch"] = function() {
            var a;
            if (Array.isArray(arguments[0])) a = arguments[0];
            else {
                var b = arguments.length;
                a = new Array(b);
                for (var c = 0; b > c; c++) a[c] = arguments[c]
            }
            return _c(a).catchError()
        };
        Mc.combineLatest = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            return Array.isArray(b[0]) ? b[0].unshift(this) : b.unshift(this), Fd.apply(this, b)
        };
        var Dd = function(a) {
                function b(b, c) {
                    this._params = b, this._cb = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    for (var b = this._params.length, c = new Array(b), d = {
                        hasValue: u(b, K),
                        hasValueAll: !1,
                        isDone: u(b, K),
                        values: new Array(b)
                    }, e = 0; b > e; e++) {
                        var f = this._params[e],
                            g = new hc;
                        c[e] = g, Xa(f) && (f = dd(f)), g.setDisposable(f.subscribe(new Ed(a, e, this._cb, d)))
                    }
                    return new kc(c)
                }, b
            }(Tc),
            Ed = function(a) {
                function b(b, c, d, e) {
                    this._o = b, this._i = c, this._cb = d, this._state = e, a.call(this)
                }

                function c(a) {
                    return function(b, c) {
                        return c !== a
                    }
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (this._state.values[this._i] = a, this._state.hasValue[this._i] = !0, this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(Sa))) {
                        var b = $a(this._cb).apply(null, this._state.values);
                        if (b === Za) return this._o.onError(b.e);
                        this._o.onNext(b)
                    } else this._state.isDone.filter(c(this._i)).every(Sa) && this._o.onCompleted()
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._state.isDone[this._i] = !0, this._state.isDone.every(Sa) && this._o.onCompleted()
                }, b
            }(Nc),
            Fd = Sc.combineLatest = function() {
                for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
                var d = Ya(b[a - 1]) ? b.pop() : L;
                return Array.isArray(b[0]) && (b = b[0]), new Dd(b, d)
            };
        Mc.concat = function() {
            for (var a = [], b = 0, c = arguments.length; c > b; b++) a.push(arguments[b]);
            return a.unshift(this), Id.apply(null, a)
        };
        var Gd = function(a) {
                function b(b, c) {
                    this._s = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._s.o.onNext(a)
                }, b.prototype.error = function(a) {
                    this._s.o.onError(a)
                }, b.prototype.completed = function() {
                    this._s.i++, this._fn(this._s)
                }, b
            }(Nc),
            Hd = function(a) {
                function b(b) {
                    this._sources = b, a.call(this)
                }

                function c(a, b) {
                    if (!a.disposable.isDisposed) {
                        if (a.i === a.sources.length) return a.o.onCompleted();
                        var c = a.sources[a.i];
                        Xa(c) && (c = dd(c));
                        var d = new hc;
                        a.subscription.setDisposable(d), d.setDisposable(c.subscribe(new Gd(a, b)))
                    }
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new ic,
                        d = cc(Ra),
                        e = {
                            o: a,
                            i: 0,
                            subscription: b,
                            disposable: d,
                            sources: this._sources
                        },
                        f = uc.scheduleRecursive(e, c);
                    return new kc([b, d, f])
                }, b
            }(Tc),
            Id = Sc.concat = function() {
                var a;
                if (Array.isArray(arguments[0])) a = arguments[0];
                else {
                    a = new Array(arguments.length);
                    for (var b = 0, c = arguments.length; c > b; b++) a[b] = arguments[b]
                }
                return new Hd(a)
            };
        Mc.concatAll = function() {
            return this.merge(1)
        };
        var Jd = function(a) {
                function b(b, c) {
                    this.source = b, this.maxConcurrent = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new _b;
                    return b.add(this.source.subscribe(new Kd(a, this.maxConcurrent, b))), b
                }, b
            }(Tc),
            Kd = function(a) {
                function b(b, c, d) {
                    this.o = b, this.max = c, this.g = d, this.done = !1, this.q = [], this.activeCount = 0, a.call(this)
                }

                function c(b, c) {
                    this.parent = b, this.sad = c, a.call(this)
                }
                return Wb(b, a), b.prototype.handleSubscribe = function(a) {
                    var b = new hc;
                    this.g.add(b), Xa(a) && (a = dd(a)), b.setDisposable(a.subscribe(new c(this, b)))
                }, b.prototype.next = function(a) {
                    this.activeCount < this.max ? (this.activeCount++, this.handleSubscribe(a)) : this.q.push(a)
                }, b.prototype.error = function(a) {
                    this.o.onError(a)
                }, b.prototype.completed = function() {
                    this.done = !0, 0 === this.activeCount && this.o.onCompleted()
                }, Wb(c, a), c.prototype.next = function(a) {
                    this.parent.o.onNext(a)
                }, c.prototype.error = function(a) {
                    this.parent.o.onError(a)
                }, c.prototype.completed = function() {
                    this.parent.g.remove(this.sad), this.parent.q.length > 0 ? this.parent.handleSubscribe(this.parent.q.shift()) : (this.parent.activeCount--, this.parent.done && 0 === this.parent.activeCount && this.parent.o.onCompleted())
                }, b
            }(Nc);
        Mc.merge = function(a) {
            return "number" != typeof a ? Ld(this, a) : new Jd(this, a)
        };
        var Ld = Sc.merge = function() {
                var a, b, c = [],
                    d = arguments.length;
                if (arguments[0])
                    if (pc(arguments[0]))
                        for (a = arguments[0], b = 1; d > b; b++) c.push(arguments[b]);
                    else
                        for (a = uc, b = 0; d > b; b++) c.push(arguments[b]);
                else
                    for (a = uc, b = 1; d > b; b++) c.push(arguments[b]);
                return Array.isArray(c[0]) && (c = c[0]), H(a, c).mergeAll()
            },
            Md = function(a) {
                function b(b) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new _b,
                        c = new hc;
                    return b.add(c), c.setDisposable(this.source.subscribe(new Nd(a, b))), b
                }, b
            }(Tc),
            Nd = function(a) {
                function b(b, c) {
                    this.o = b, this.g = c, this.done = !1, a.call(this)
                }

                function c(b, c) {
                    this.parent = b, this.sad = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = new hc;
                    this.g.add(b), Xa(a) && (a = dd(a)), b.setDisposable(a.subscribe(new c(this, b)))
                }, b.prototype.error = function(a) {
                    this.o.onError(a)
                }, b.prototype.completed = function() {
                    this.done = !0, 1 === this.g.length && this.o.onCompleted()
                }, Wb(c, a), c.prototype.next = function(a) {
                    this.parent.o.onNext(a)
                }, c.prototype.error = function(a) {
                    this.parent.o.onError(a)
                }, c.prototype.completed = function() {
                    this.parent.g.remove(this.sad), this.parent.done && 1 === this.parent.g.length && this.parent.o.onCompleted()
                }, b
            }(Nc);
        Mc.mergeAll = function() {
            return new Md(this)
        };
        var Od = Qa.CompositeError = function(a) {
            this.innerErrors = a, this.message = "This contains multiple errors. Check the innerErrors", Error.call(this)
        };
        Od.prototype = Object.create(Error.prototype), Od.prototype.name = "CompositeError";
        var Pd = function(a) {
                function b(b) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new _b,
                        c = new hc,
                        d = {
                            isStopped: !1,
                            errors: [],
                            o: a
                        };
                    return b.add(c), c.setDisposable(this.source.subscribe(new Qd(b, d))), b
                }, b
            }(Tc),
            Qd = function(a) {
                function b(b, c) {
                    this._group = b, this._state = c, a.call(this)
                }

                function c(a, b) {
                    0 === b.length ? a.onCompleted() : 1 === b.length ? a.onError(b[0]) : a.onError(new Od(b))
                }

                function d(b, c, d) {
                    this._inner = b, this._group = c, this._state = d, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = new hc;
                    this._group.add(b), Xa(a) && (a = dd(a)), b.setDisposable(a.subscribe(new d(b, this._group, this._state)))
                }, b.prototype.error = function(a) {
                    this._state.errors.push(a), this._state.isStopped = !0, 1 === this._group.length && c(this._state.o, this._state.errors)
                }, b.prototype.completed = function() {
                    this._state.isStopped = !0, 1 === this._group.length && c(this._state.o, this._state.errors)
                }, Wb(d, a), d.prototype.next = function(a) {
                    this._state.o.onNext(a)
                }, d.prototype.error = function(a) {
                    this._state.errors.push(a), this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && c(this._state.o, this._state.errors)
                }, d.prototype.completed = function() {
                    this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && c(this._state.o, this._state.errors)
                }, b
            }(Nc);
        Sc.mergeDelayError = function() {
            var a;
            if (Array.isArray(arguments[0])) a = arguments[0];
            else {
                var b = arguments.length;
                a = new Array(b);
                for (var c = 0; b > c; c++) a[c] = arguments[c]
            }
            var d = H(null, a);
            return new Pd(d)
        }, Mc.onErrorResumeNext = function(a) {
            if (!a) throw new Error("Second observable is required");
            return Td([this, a])
        };
        var Rd = function(a) {
                function b(b) {
                    this.sources = b, a.call(this)
                }

                function c(a, b) {
                    if (a.pos < a.sources.length) {
                        var c = a.sources[a.pos++];
                        Xa(c) && (c = dd(c));
                        var d = new hc;
                        a.subscription.setDisposable(d), d.setDisposable(c.subscribe(new Sd(a, b)))
                    } else a.o.onCompleted()
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new ic,
                        d = {
                            pos: 0,
                            subscription: b,
                            o: a,
                            sources: this.sources
                        },
                        e = uc.scheduleRecursive(d, c);
                    return new jc(b, e)
                }, b
            }(Tc),
            Sd = function(a) {
                function b(b, c) {
                    this._state = b, this._recurse = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._state.o.onNext(a)
                }, b.prototype.error = function() {
                    this._recurse(this._state)
                }, b.prototype.completed = function() {
                    this._recurse(this._state)
                }, b
            }(Nc),
            Td = Sc.onErrorResumeNext = function() {
                var a = [];
                if (Array.isArray(arguments[0])) a = arguments[0];
                else {
                    var b = arguments.length;
                    a = new Array(b);
                    for (var c = 0; b > c; c++) a[c] = arguments[c]
                }
                return new Rd(a)
            },
            Ud = function(a) {
                function b(b, c) {
                    this._s = b, this._o = Xa(c) ? dd(c) : c, this._open = !1, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new hc;
                    b.setDisposable(this._s.subscribe(new Vd(a, this))), Xa(this._o) && (this._o = dd(this._o));
                    var c = new hc;
                    return c.setDisposable(this._o.subscribe(new Wd(a, this, c))), new jc(b, c)
                }, b
            }(Tc),
            Vd = function(a) {
                function b(b, c) {
                    this._o = b, this._p = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._p._open && this._o.onNext(a)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.onCompleted = function() {
                    this._p._open && this._o.onCompleted()
                }, b
            }(Nc),
            Wd = function(a) {
                function b(b, c, d) {
                    this._o = b, this._p = c, this._r = d, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function() {
                    this._p._open = !0, this._r.dispose()
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.onCompleted = function() {
                    this._r.dispose()
                }, b
            }(Nc);
        Mc.skipUntil = function(a) {
            return new Ud(this, a)
        };
        var Xd = function(a) {
            function b(b) {
                this.source = b, a.call(this)
            }

            function c(a, b) {
                this.o = a, this.inner = b, this.stopped = !1, this.latest = 0, this.hasLatest = !1, Nc.call(this)
            }

            function d(a, b) {
                this.parent = a, this.id = b, Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = new ic,
                    d = this.source.subscribe(new c(a, b));
                return new jc(d, b)
            }, Wb(c, Nc), c.prototype.next = function(a) {
                var b = new hc,
                    c = ++this.latest;
                this.hasLatest = !0, this.inner.setDisposable(b), Xa(a) && (a = dd(a)), b.setDisposable(a.subscribe(new d(this, c)))
            }, c.prototype.error = function(a) {
                this.o.onError(a)
            }, c.prototype.completed = function() {
                this.stopped = !0, !this.hasLatest && this.o.onCompleted()
            }, Wb(d, Nc), d.prototype.next = function(a) {
                this.parent.latest === this.id && this.parent.o.onNext(a)
            }, d.prototype.error = function(a) {
                this.parent.latest === this.id && this.parent.o.onError(a)
            }, d.prototype.completed = function() {
                this.parent.latest === this.id && (this.parent.hasLatest = !1, this.parent.stopped && this.parent.o.onCompleted())
            }, b
        }(Tc);
        Mc["switch"] = Mc.switchLatest = function() {
            return new Xd(this)
        };
        var Yd = function(a) {
                function b(b, c) {
                    this.source = b, this.other = Xa(c) ? dd(c) : c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return new jc(this.source.subscribe(a), this.other.subscribe(new Zd(a)))
                }, b
            }(Tc),
            Zd = function(a) {
                function b(b) {
                    this._o = b, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function() {
                    this._o.onCompleted()
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.onCompleted = Ra, b
            }(Nc);
        Mc.takeUntil = function(a) {
            return new Yd(this, a)
        };
        var $d = function(a) {
                function b(b, c, d) {
                    this._s = b, this._ss = c, this._cb = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    for (var b = this._ss.length, c = {
                        hasValue: u(b, K),
                        hasValueAll: !1,
                        values: new Array(b)
                    }, d = this._ss.length, e = new Array(d + 1), f = 0; d > f; f++) {
                        var g = this._ss[f],
                            h = new hc;
                        Xa(g) && (g = dd(g)), h.setDisposable(g.subscribe(new _d(a, f, c))), e[f] = h
                    }
                    var i = new hc;
                    return i.setDisposable(this._s.subscribe(new ae(a, this._cb, c))), e[d] = i, new kc(e)
                }, b
            }(Tc),
            _d = function(a) {
                function b(b, c, d) {
                    this._o = b, this._i = c, this._state = d, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._state.values[this._i] = a, this._state.hasValue[this._i] = !0, this._state.hasValueAll = this._state.hasValue.every(Sa)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = Ra, b
            }(Nc),
            ae = function(a) {
                function b(b, c, d) {
                    this._o = b, this._cb = c, this._state = d, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = [a].concat(this._state.values);
                    if (this._state.hasValueAll) {
                        var c = $a(this._cb).apply(null, b);
                        return c === Za ? this._o.onError(c.e) : void this._o.onNext(c)
                    }
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.withLatestFrom = function() {
            if (0 === arguments.length) throw new Error("invalid arguments");
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            var d = Ya(b[a - 1]) ? b.pop() : L;
            return Array.isArray(b[0]) && (b = b[0]), new $d(this, b, d)
        };
        var be = function(a) {
                function b(b, c) {
                    this._s = b, this._cb = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    for (var b = this._s.length, c = new Array(b), d = u(b, K), e = u(b, M), f = 0; b > f; f++) {
                        var g = this._s[f],
                            h = new hc;
                        c[f] = h, Xa(g) && (g = dd(g)), h.setDisposable(g.subscribe(new ce(a, f, this, e, d)))
                    }
                    return new kc(c)
                }, b
            }(Tc),
            ce = function(a) {
                function b(b, c, d, e, f) {
                    this._o = b, this._i = c, this._p = d, this._q = e, this._d = f, a.call(this)
                }

                function c(a) {
                    return a.length > 0
                }

                function d(a) {
                    return a.shift()
                }

                function e(a) {
                    return function(b, c) {
                        return c !== a
                    }
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (this._q[this._i].push(a), this._q.every(c)) {
                        var b = this._q.map(d),
                            f = $a(this._p._cb).apply(null, b);
                        if (f === Za) return this._o.onError(f.e);
                        this._o.onNext(f)
                    } else this._d.filter(e(this._i)).every(Sa) && this._o.onCompleted()
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._d[this._i] = !0, this._d.every(Sa) && this._o.onCompleted()
                }, b
            }(Nc);
        Mc.zip = function() {
            if (0 === arguments.length) throw new Error("invalid arguments");
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            var d = Ya(b[a - 1]) ? b.pop() : L;
            Array.isArray(b[0]) && (b = b[0]);
            var e = this;
            return b.unshift(e), new be(b, d)
        }, Sc.zip = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            Array.isArray(b[0]) && (b = Ya(b[1]) ? b[0].concat(b[1]) : b[0]);
            var d = b.shift();
            return d.zip.apply(d, b)
        };
        var de = function(a) {
                function b(b, c) {
                    this.sources = b, this._cb = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    for (var b = this.sources, c = b.length, d = new Array(c), e = {
                        q: u(c, M),
                        done: u(c, K),
                        cb: this._cb,
                        o: a
                    }, f = 0; c > f; f++) ! function(a) {
                        var c = b[a],
                            f = new hc;
                        (nb(c) || mb(c)) && (c = md(c)), d[a] = f, f.setDisposable(c.subscribe(new ee(e, a)))
                    }(f);
                    return new kc(d)
                }, b
            }(Tc),
            ee = function(a) {
                function b(b, c) {
                    this._s = b, this._i = c, a.call(this)
                }

                function c(a) {
                    return a.length > 0
                }

                function d(a) {
                    return a.shift()
                }

                function e(a) {
                    return function(b, c) {
                        return c !== a
                    }
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (this._s.q[this._i].push(a), this._s.q.every(c)) {
                        var b = this._s.q.map(d),
                            f = $a(this._s.cb).apply(null, b);
                        if (f === Za) return this._s.o.onError(f.e);
                        this._s.o.onNext(f)
                    } else this._s.done.filter(e(this._i)).every(Sa) && this._s.o.onCompleted()
                }, b.prototype.error = function(a) {
                    this._s.o.onError(a)
                }, b.prototype.completed = function() {
                    this._s.done[this._i] = !0, this._s.done.every(Sa) && this._s.o.onCompleted()
                }, b
            }(Nc);
        Mc.zipIterable = function() {
            if (0 === arguments.length) throw new Error("invalid arguments");
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            var d = Ya(b[a - 1]) ? b.pop() : L,
                e = this;
            return b.unshift(e), new de(b, d)
        }, Mc.asObservable = function() {
            return new xg(N(this), this)
        }, Mc.bufferWithCount = function(a, b) {
            return "number" != typeof b && (b = a), this.windowWithCount(a, b).flatMap(O).filter(P)
        };
        var fe = function(a) {
                function b(b) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new ge(a))
                }, b
            }(Tc),
            ge = function(a) {
                function b(b) {
                    this._o = b, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    a.accept(this._o)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.dematerialize = function() {
            return new fe(this)
        };
        var he = function(a) {
                function b(b, c, d) {
                    this.source = b, this.keyFn = c, this.comparer = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new ie(a, this.keyFn, this.comparer))
                }, b
            }(Tc),
            ie = function(a) {
                function b(b, c, d) {
                    this.o = b, this.keyFn = c, this.comparer = d, this.hasCurrentKey = !1, this.currentKey = null, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b, c = a;
                    return Ya(this.keyFn) && (c = $a(this.keyFn)(a), c === Za) ? this.o.onError(c.e) : this.hasCurrentKey && (b = $a(this.comparer)(this.currentKey, c), b === Za) ? this.o.onError(b.e) : void(this.hasCurrentKey && b || (this.hasCurrentKey = !0, this.currentKey = c, this.o.onNext(a)))
                }, b.prototype.error = function(a) {
                    this.o.onError(a)
                }, b.prototype.completed = function() {
                    this.o.onCompleted()
                }, b
            }(Nc);
        Mc.distinctUntilChanged = function(a, b) {
            return b || (b = Ua), new he(this, a, b)
        };
        var je = function(a) {
            function b(b, c, d, e) {
                this.source = b, this._oN = c, this._oE = d, this._oC = e, a.call(this)
            }

            function c(a, b) {
                this.o = a, this.t = !b._oN || Ya(b._oN) ? Lc(b._oN || Ra, b._oE || Ra, b._oC || Ra) : b._oN, this.isStopped = !1, Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return this.source.subscribe(new c(a, this))
            }, Wb(c, Nc), c.prototype.next = function(a) {
                var b = $a(this.t.onNext).call(this.t, a);
                b === Za && this.o.onError(b.e), this.o.onNext(a)
            }, c.prototype.error = function(a) {
                var b = $a(this.t.onError).call(this.t, a);
                return b === Za ? this.o.onError(b.e) : void this.o.onError(a)
            }, c.prototype.completed = function() {
                var a = $a(this.t.onCompleted).call(this.t);
                return a === Za ? this.o.onError(a.e) : void this.o.onCompleted()
            }, b
        }(Tc);
        Mc["do"] = Mc.tap = Mc.doAction = function(a, b, c) {
            return new je(this, a, b, c)
        }, Mc.doOnNext = Mc.tapOnNext = function(a, b) {
            return this.tap("undefined" != typeof b ? function(c) {
                a.call(b, c)
            } : a)
        }, Mc.doOnError = Mc.tapOnError = function(a, b) {
            return this.tap(Ra, "undefined" != typeof b ? function(c) {
                a.call(b, c)
            } : a)
        }, Mc.doOnCompleted = Mc.tapOnCompleted = function(a, b) {
            return this.tap(Ra, null, "undefined" != typeof b ? function() {
                a.call(b)
            } : a)
        };
        var ke = function(a) {
            function b(b, c, d) {
                this.source = b, this._fn = ob(c, d, 0), a.call(this)
            }

            function c(a, b) {
                this.isDisposed = !1, this._s = a, this._fn = b
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = $a(this.source.subscribe).call(this.source, a);
                return b === Za && (this._fn(), e(b.e)), new c(b, this._fn)
            }, c.prototype.dispose = function() {
                if (!this.isDisposed) {
                    var a = $a(this._s.dispose).call(this._s);
                    this._fn(), a === Za && e(a.e)
                }
            }, b
        }(Tc);
        Mc["finally"] = function(a, b) {
            return new ke(this, a, b)
        };
        var le = function(a) {
            function b(b) {
                this.source = b, a.call(this)
            }

            function c(a) {
                this.o = a, this.isStopped = !1
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return this.source.subscribe(new c(a))
            }, c.prototype.onNext = Ra, c.prototype.onError = function(a) {
                this.isStopped || (this.isStopped = !0, this.o.onError(a))
            }, c.prototype.onCompleted = function() {
                this.isStopped || (this.isStopped = !0, this.o.onCompleted())
            }, c.prototype.dispose = function() {
                this.isStopped = !0
            }, c.prototype.fail = function(a) {
                return this.isStopped ? !1 : (this.isStopped = !0, this.observer.onError(a), !0)
            }, b
        }(Tc);
        Mc.ignoreElements = function() {
            return new le(this)
        };
        var me = function(a) {
                function b(b, c) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new ne(a))
                }, b
            }(Tc),
            ne = function(a) {
                function b(b) {
                    this._o = b, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._o.onNext(Hc(a))
                }, b.prototype.error = function(a) {
                    this._o.onNext(Ic(a)), this._o.onCompleted()
                }, b.prototype.completed = function() {
                    this._o.onNext(Jc()), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.materialize = function() {
            return new me(this)
        }, Mc.repeat = function(a) {
            return Zc(this, a).concat()
        }, Mc.retry = function(a) {
            return Zc(this, a).catchError()
        };
        var oe = function(a) {
            function b(a) {
                return {
                    isDisposed: !1,
                    dispose: function() {
                        this.isDisposed || (this.isDisposed = !0, a.isDisposed = !0)
                    }
                }
            }

            function c(b, c) {
                this.source = b, this._notifier = c, a.call(this)
            }
            return Wb(c, a), c.prototype.subscribeCore = function(a) {
                var c, d = new Bg,
                    e = new Bg,
                    f = this._notifier(d),
                    g = f.subscribe(e),
                    h = this.source["@@iterator"](),
                    i = {
                        isDisposed: !1
                    },
                    j = new ic,
                    k = wc.scheduleRecursive(null, function(b, f) {
                        if (!i.isDisposed) {
                            var g = h.next();
                            if (g.done) return void(c ? a.onError(c) : a.onCompleted());
                            var k = g.value;
                            Xa(k) && (k = dd(k));
                            var l = new hc,
                                m = new hc;
                            j.setDisposable(new jc(m, l)), l.setDisposable(k.subscribe(function(b) {
                                a.onNext(b)
                            }, function(b) {
                                m.setDisposable(e.subscribe(f, function(b) {
                                    a.onError(b)
                                }, function() {
                                    a.onCompleted()
                                })), d.onNext(b), l.dispose()
                            }, function() {
                                a.onCompleted()
                            }))
                        }
                    });
                return new kc([g, j, k, b(i)])
            }, c
        }(Tc);
        Mc.retryWhen = function(a) {
            return new oe(Q(this), a)
        };
        var pe = function(a) {
            function b(a) {
                return {
                    isDisposed: !1,
                    dispose: function() {
                        this.isDisposed || (this.isDisposed = !0, a.isDisposed = !0)
                    }
                }
            }

            function c(b, c) {
                this.source = b, this._notifier = c, a.call(this)
            }
            return Wb(c, a), c.prototype.subscribeCore = function(a) {
                var c, d = new Bg,
                    e = new Bg,
                    f = this._notifier(d),
                    g = f.subscribe(e),
                    h = this.source["@@iterator"](),
                    i = {
                        isDisposed: !1
                    },
                    j = new ic,
                    k = wc.scheduleRecursive(null, function(b, f) {
                        if (!i.isDisposed) {
                            var g = h.next();
                            if (g.done) return void(c ? a.onError(c) : a.onCompleted());
                            var k = g.value;
                            Xa(k) && (k = dd(k));
                            var l = new hc,
                                m = new hc;
                            j.setDisposable(new jc(m, l)), l.setDisposable(k.subscribe(function(b) {
                                a.onNext(b)
                            }, function(b) {
                                a.onError(b)
                            }, function() {
                                m.setDisposable(e.subscribe(f, function(b) {
                                    a.onError(b)
                                }, function() {
                                    a.onCompleted()
                                })), d.onNext(null), l.dispose()
                            }))
                        }
                    });
                return new kc([g, j, k, b(i)])
            }, c
        }(Tc);
        Mc.repeatWhen = function(a) {
            return new pe(Q(this), a)
        };
        var qe = function(a) {
                function b(b, c, d, e) {
                    this.source = b, this.accumulator = c, this.hasSeed = d, this.seed = e, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new re(a, this))
                }, b
            }(Tc),
            re = function(a) {
                function b(b, c) {
                    this._o = b, this._p = c, this._fn = c.accumulator, this._hs = c.hasSeed, this._s = c.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    return !this._hv && (this._hv = !0), this._ha ? this._a = $a(this._fn)(this._a, a, this._i, this._p) : (this._a = this._hs ? $a(this._fn)(this._s, a, this._i, this._p) : a, this._ha = !0), this._a === Za ? this._o.onError(this._a.e) : (this._o.onNext(this._a), void this._i++)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    !this._hv && this._hs && this._o.onNext(this._s), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.scan = function() {
            var a, b = !1,
                c = arguments[0];
            return 2 === arguments.length && (b = !0, a = arguments[1]), new qe(this, c, b, a)
        };
        var se = function(a) {
                function b(b, c) {
                    this.source = b, this._c = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new te(a, this._c))
                }, b
            }(Tc),
            te = function(a) {
                function b(b, c) {
                    this._o = b, this._c = c, this._q = [], a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._q.push(a), this._q.length > this._c && this._o.onNext(this._q.shift())
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.skipLast = function(a) {
            if (0 > a) throw new gb;
            return new se(this, a)
        }, Mc.startWith = function() {
            var a, b = 0;
            arguments.length && pc(arguments[0]) ? (a = arguments[0], b = 1) : a = uc;
            for (var c = [], d = b, e = arguments.length; e > d; d++) c.push(arguments[d]);
            return _c([od(c, a), this]).concat()
        };
        var ue = function(a) {
            function b(b, c) {
                this._o = b, this._c = c, this._q = [], a.call(this)
            }
            return Wb(b, a), b.prototype.next = function(a) {
                this._q.push(a), this._q.length > this._c && this._q.shift()
            }, b.prototype.error = function(a) {
                this._o.onError(a)
            }, b.prototype.completed = function() {
                for (; this._q.length > 0;) this._o.onNext(this._q.shift());
                this._o.onCompleted()
            }, b
        }(Nc);
        Mc.takeLast = function(a) {
            if (0 > a) throw new gb;
            var b = this;
            return new xg(function(c) {
                return b.subscribe(new ue(c, a))
            }, b)
        };
        var ve = function(a) {
            function b(b, c) {
                this._o = b, this._c = c, this._q = [], a.call(this)
            }
            return Wb(b, a), b.prototype.next = function(a) {
                this._q.push(a), this._q.length > this._c && this._q.shift()
            }, b.prototype.error = function(a) {
                this._o.onError(a)
            }, b.prototype.completed = function() {
                this._o.onNext(this._q), this._o.onCompleted()
            }, b
        }(Nc);
        Mc.takeLastBuffer = function(a) {
            if (0 > a) throw new gb;
            var b = this;
            return new xg(function(c) {
                return b.subscribe(new ve(c, a))
            }, b)
        }, Mc.windowWithCount = function(a, b) {
            var c = this;
            if (+a || (a = 0), Math.abs(a) === 1 / 0 && (a = 0), 0 >= a) throw new gb;
            if (null == b && (b = a), +b || (b = 0), Math.abs(b) === 1 / 0 && (b = 0), 0 >= b) throw new gb;
            return new xg(function(d) {
                function e() {
                    var a = new Bg;
                    i.push(a), d.onNext(Yb(a, g))
                }
                var f = new hc,
                    g = new lc(f),
                    h = 0,
                    i = [];
                return e(), f.setDisposable(c.subscribe(function(c) {
                    for (var d = 0, f = i.length; f > d; d++) i[d].onNext(c);
                    var g = h - a + 1;
                    g >= 0 && g % b === 0 && i.shift().onCompleted(), ++h % b === 0 && e()
                }, function(a) {
                    for (; i.length > 0;) i.shift().onError(a);
                    d.onError(a)
                }, function() {
                    for (; i.length > 0;) i.shift().onCompleted();
                    d.onCompleted()
                })), g
            }, c)
        }, Mc.selectConcat = Mc.concatMap = function(a, b, c) {
            return Ya(a) && Ya(b) ? this.concatMap(function(c, d) {
                var e = a(c, d);
                return Xa(e) && (e = dd(e)), (nb(e) || mb(e)) && (e = md(e)), e.map(function(a, e) {
                    return b(c, a, d, e)
                })
            }) : Ya(a) ? R(this, a, c) : R(this, function() {
                return a
            })
        }, Mc.concatMapObserver = Mc.selectConcatObserver = function(a, b, c, d) {
            var e = this,
                f = ob(a, d, 2),
                g = ob(b, d, 1),
                h = ob(c, d, 0);
            return new xg(function(a) {
                var b = 0;
                return e.subscribe(function(c) {
                    var d;
                    try {
                        d = f(c, b++)
                    } catch (e) {
                        return void a.onError(e)
                    }
                    Xa(d) && (d = dd(d)), a.onNext(d)
                }, function(b) {
                    var c;
                    try {
                        c = g(b)
                    } catch (d) {
                        return void a.onError(d)
                    }
                    Xa(c) && (c = dd(c)), a.onNext(c), a.onCompleted()
                }, function() {
                    var b;
                    try {
                        b = h()
                    } catch (c) {
                        return void a.onError(c)
                    }
                    Xa(b) && (b = dd(b)), a.onNext(b), a.onCompleted()
                })
            }, this).concatAll()
        };
        var we = function(a) {
            function b(b, c) {
                this._o = b, this._d = c, this._f = !1, a.call(this)
            }
            return Wb(b, a), b.prototype.next = function(a) {
                this._f = !0, this._o.onNext(a)
            }, b.prototype.error = function(a) {
                this._o.onError(a)
            }, b.prototype.completed = function() {
                !this._f && this._o.onNext(this._d), this._o.onCompleted()
            }, b
        }(Nc);
        Mc.defaultIfEmpty = function(b) {
            var c = this;
            return b === a && (b = null), new xg(function(a) {
                return c.subscribe(new we(a, b))
            }, c)
        }, T.prototype.push = function(a) {
            var b = -1 === S(this.set, a, this.comparer);
            return b && this.set.push(a), b
        };
        var xe = function(a) {
                function b(b, c, d) {
                    this.source = b, this._keyFn = c, this._cmpFn = d, a.call(this);
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new ye(a, this._keyFn, this._cmpFn))
                }, b
            }(Tc),
            ye = function(a) {
                function b(b, c, d) {
                    this._o = b, this._keyFn = c, this._h = new T(d), a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = a;
                    return Ya(this._keyFn) && (b = $a(this._keyFn)(a), b === Za) ? this._o.onError(b.e) : void(this._h.push(b) && this._o.onNext(a))
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.distinct = function(a, b) {
            return b || (b = Ua), new xe(this, a, b)
        }, Mc.groupBy = function(a, b) {
            return this.groupByUntil(a, b, sd)
        }, Mc.groupByUntil = function(b, c, d) {
            var e = this;
            return new xg(function(f) {
                var g = new Of,
                    h = new _b,
                    i = new lc(h),
                    j = function(a) {
                        return function(b) {
                            b.onError(a)
                        }
                    };
                return h.add(e.subscribe(function(e) {
                    var k = $a(b)(e);
                    if (k === Za) return g.forEach(j(k.e)), f.onError(k.e);
                    var l = !1,
                        m = g.get(k);
                    if (m === a && (m = new Bg, g.set(k, m), l = !0), l) {
                        var n = new Ag(k, m, i),
                            o = new Ag(k, m),
                            p = $a(d)(o);
                        if (p === Za) return g.forEach(j(p.e)), f.onError(p.e);
                        f.onNext(n);
                        var q = new hc;
                        h.add(q), q.setDisposable(p.take(1).subscribe(Ra, function(a) {
                            g.forEach(j(a)), f.onError(a)
                        }, function() {
                            g["delete"](k) && m.onCompleted(), h.remove(q)
                        }))
                    }
                    var r = e;
                    return Ya(c) && (r = $a(c)(e), r === Za) ? (g.forEach(j(r.e)), f.onError(r.e)) : void m.onNext(r)
                }, function(a) {
                    g.forEach(j(a)), f.onError(a)
                }, function() {
                    g.forEach(function(a) {
                        a.onCompleted()
                    }), f.onCompleted()
                })), i
            }, e)
        };
        var ze = function(a) {
            function b(b, c, d) {
                this.source = b, this.selector = ob(c, d, 3), a.call(this)
            }

            function c(a, b) {
                return function(c, d, e) {
                    return a.call(this, b.selector(c, d, e), d, e)
                }
            }

            function d(a, b, c) {
                this.o = a, this.selector = b, this.source = c, this.i = 0, Nc.call(this)
            }
            return Wb(b, a), b.prototype.internalMap = function(a, d) {
                return new b(this.source, c(a, this), d)
            }, b.prototype.subscribeCore = function(a) {
                return this.source.subscribe(new d(a, this.selector, this))
            }, Wb(d, Nc), d.prototype.next = function(a) {
                var b = $a(this.selector)(a, this.i++, this.source);
                return b === Za ? this.o.onError(b.e) : void this.o.onNext(b)
            }, d.prototype.error = function(a) {
                this.o.onError(a)
            }, d.prototype.completed = function() {
                this.o.onCompleted()
            }, b
        }(Tc);
        Mc.map = Mc.select = function(a, b) {
            var c = "function" == typeof a ? a : function() {
                return a
            };
            return this instanceof ze ? this.internalMap(c, b) : new ze(this, c, b)
        }, Mc.pluck = function() {
            var a = arguments.length,
                b = new Array(a);
            if (0 === a) throw new Error("List of properties cannot be empty.");
            for (var c = 0; a > c; c++) b[c] = arguments[c];
            return this.map(U(b, a))
        }, Mc.flatMap = Mc.selectMany = function(a, b, c) {
            return new Uc(this, a, b, c).mergeAll()
        }, Mc.flatMapObserver = Mc.selectManyObserver = function(a, b, c, d) {
            var e = this;
            return new xg(function(f) {
                var g = 0;
                return e.subscribe(function(b) {
                    var c;
                    try {
                        c = a.call(d, b, g++)
                    } catch (e) {
                        return void f.onError(e)
                    }
                    Xa(c) && (c = dd(c)), f.onNext(c)
                }, function(a) {
                    var c;
                    try {
                        c = b.call(d, a)
                    } catch (e) {
                        return void f.onError(e)
                    }
                    Xa(c) && (c = dd(c)), f.onNext(c), f.onCompleted()
                }, function() {
                    var a;
                    try {
                        a = c.call(d)
                    } catch (b) {
                        return void f.onError(b)
                    }
                    Xa(a) && (a = dd(a)), f.onNext(a), f.onCompleted()
                })
            }, e).mergeAll()
        }, Qa.Observable.prototype.flatMapLatest = function(a, b, c) {
            return new Uc(this, a, b, c).switchLatest()
        };
        var Ae = function(a) {
            function b(b, c) {
                this.source = b, this._count = c, a.call(this)
            }

            function c(a, b) {
                this._o = a, this._r = b, Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return this.source.subscribe(new c(a, this._count))
            }, Wb(c, Nc), c.prototype.next = function(a) {
                this._r <= 0 ? this._o.onNext(a) : this._r--
            }, c.prototype.error = function(a) {
                this._o.onError(a)
            }, c.prototype.completed = function() {
                this._o.onCompleted()
            }, b
        }(Tc);
        Mc.skip = function(a) {
            if (0 > a) throw new gb;
            return new Ae(this, a)
        };
        var Be = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Ce(a, this))
                }, b
            }(Tc),
            Ce = function(a) {
                function b(b, c) {
                    this._o = b, this._p = c, this._i = 0, this._r = !1, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (!this._r) {
                        var b = $a(this._p._fn)(a, this._i++, this._p);
                        if (b === Za) return this._o.onError(b.e);
                        this._r = !b
                    }
                    this._r && this._o.onNext(a)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.skipWhile = function(a, b) {
            var c = ob(a, b, 3);
            return new Be(this, c)
        };
        var De = function(a) {
            function b(b, c) {
                this.source = b, this._count = c, a.call(this)
            }

            function c(a, b) {
                this._o = a, this._c = b, this._r = b, Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return this.source.subscribe(new c(a, this._count))
            }, Wb(c, Nc), c.prototype.next = function(a) {
                this._r-- > 0 && (this._o.onNext(a), this._r <= 0 && this._o.onCompleted())
            }, c.prototype.error = function(a) {
                this._o.onError(a)
            }, c.prototype.completed = function() {
                this._o.onCompleted()
            }, b
        }(Tc);
        Mc.take = function(a, b) {
            if (0 > a) throw new gb;
            return 0 === a ? jd(b) : new De(this, a)
        };
        var Ee = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Fe(a, this))
                }, b
            }(Tc),
            Fe = function(a) {
                function b(b, c) {
                    this._o = b, this._p = c, this._i = 0, this._r = !0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    return this._r && (this._r = $a(this._p._fn)(a, this._i++, this._p), this._r === Za) ? this._o.onError(this._r.e) : void(this._r ? this._o.onNext(a) : this._o.onCompleted())
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.takeWhile = function(a, b) {
            var c = ob(a, b, 3);
            return new Ee(this, c)
        };
        var Ge = function(a) {
            function b(b, c, d) {
                this.source = b, this.predicate = ob(c, d, 3), a.call(this)
            }

            function c(a, b) {
                return function(c, d, e) {
                    return b.predicate(c, d, e) && a.call(this, c, d, e)
                }
            }

            function d(a, b, c) {
                this.o = a, this.predicate = b, this.source = c, this.i = 0, Nc.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return this.source.subscribe(new d(a, this.predicate, this))
            }, b.prototype.internalFilter = function(a, d) {
                return new b(this.source, c(a, this), d)
            }, Wb(d, Nc), d.prototype.next = function(a) {
                var b = $a(this.predicate)(a, this.i++, this.source);
                return b === Za ? this.o.onError(b.e) : void(b && this.o.onNext(a))
            }, d.prototype.error = function(a) {
                this.o.onError(a)
            }, d.prototype.completed = function() {
                this.o.onCompleted()
            }, b
        }(Tc);
        Mc.filter = Mc.where = function(a, b) {
            return this instanceof Ge ? this.internalFilter(a, b) : new Ge(this, a, b)
        };
        var He = function(a) {
                function b(b, c, d) {
                    this.source = b, this._k = c, this._c = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Ie(a, this._k, this._c))
                }, b
            }(Tc),
            Ie = function(a) {
                function b(b, c, d) {
                    this._o = b, this._k = c, this._c = d, this._v = null, this._hv = !1, this._l = [], a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = $a(this._k)(a);
                    if (b === Za) return this._o.onError(b.e);
                    var c = 0;
                    if (this._hv) {
                        if (c = $a(this._c)(b, this._v), c === Za) return this._o.onError(c.e)
                    } else this._hv = !0, this._v = b;
                    c > 0 && (this._v = b, this._l = []), c >= 0 && this._l.push(a)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(this._l), this._o.onCompleted()
                }, b
            }(Nc),
            Je = function(a) {
                function b(b, c, d, e) {
                    this.source = b, this.accumulator = c, this.hasSeed = d, this.seed = e, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Ke(a, this))
                }, b
            }(Tc),
            Ke = function(a) {
                function b(b, c) {
                    this._o = b, this._p = c, this._fn = c.accumulator, this._hs = c.hasSeed, this._s = c.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    return !this._hv && (this._hv = !0), this._ha ? this._a = $a(this._fn)(this._a, a, this._i, this._p) : (this._a = this._hs ? $a(this._fn)(this._s, a, this._i, this._p) : a, this._ha = !0), this._a === Za ? this._o.onError(this._a.e) : void this._i++
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._hv && this._o.onNext(this._a), !this._hv && this._hs && this._o.onNext(this._s), !this._hv && !this._hs && this._o.onError(new eb), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.reduce = function() {
            var a, b = !1,
                c = arguments[0];
            return 2 === arguments.length && (b = !0, a = arguments[1]), new Je(this, c, b, a)
        };
        var Le = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Me(a, this._fn, this.source))
                }, b
            }(Tc),
            Me = function(a) {
                function b(b, c, d) {
                    this._o = b, this._fn = c, this._s = d, this._i = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = $a(this._fn)(a, this._i++, this._s);
                    return b === Za ? this._o.onError(b.e) : void(Boolean(b) && (this._o.onNext(!0), this._o.onCompleted()))
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(!1), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.some = function(a, b) {
            var c = ob(a, b, 3);
            return new Le(this, c)
        };
        var Ne = function(a) {
                function b(b) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Oe(a))
                }, b
            }(Tc),
            Oe = function(a) {
                function b(b) {
                    this._o = b, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function() {
                    this._o.onNext(!1), this._o.onCompleted()
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(!0), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.isEmpty = function() {
            return new Ne(this)
        };
        var Pe = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Qe(a, this._fn, this.source))
                }, b
            }(Tc),
            Qe = function(a) {
                function b(b, c, d) {
                    this._o = b, this._fn = c, this._s = d, this._i = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = $a(this._fn)(a, this._i++, this._s);
                    return b === Za ? this._o.onError(b.e) : void(Boolean(b) || (this._o.onNext(!1), this._o.onCompleted()))
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(!0), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.every = function(a, b) {
            var c = ob(a, b, 3);
            return new Pe(this, c)
        };
        var Re = function(a) {
                function b(b, c, d) {
                    var e = +d || 0;
                    Math.abs(e) === 1 / 0 && (e = 0), this.source = b, this._elem = c, this._n = e, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this._n < 0 ? (a.onNext(!1), a.onCompleted(), dc) : this.source.subscribe(new Se(a, this._elem, this._n))
                }, b
            }(Tc),
            Se = function(a) {
                function b(b, c, d) {
                    this._o = b, this._elem = c, this._n = d, this._i = 0, a.call(this)
                }

                function c(a, b) {
                    return 0 === a && 0 === b || a === b || isNaN(a) && isNaN(b)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._i++ >= this._n && c(a, this._elem) && (this._o.onNext(!0), this._o.onCompleted())
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(!1), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.includes = function(a, b) {
            return new Re(this, a, b)
        };
        var Te = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Ue(a, this._fn, this.source))
                }, b
            }(Tc),
            Ue = function(a) {
                function b(b, c, d) {
                    this._o = b, this._fn = c, this._s = d, this._i = 0, this._c = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (this._fn) {
                        var b = $a(this._fn)(a, this._i++, this._s);
                        if (b === Za) return this._o.onError(b.e);
                        Boolean(b) && this._c++
                    } else this._c++
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(this._c), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.count = function(a, b) {
            var c = ob(a, b, 3);
            return new Te(this, c)
        };
        var Ve = function(a) {
                function b(b, c, d) {
                    this.source = b, this._e = c, this._n = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this._n < 0 ? (a.onNext(-1), a.onCompleted(), dc) : this.source.subscribe(new We(a, this._e, this._n))
                }, b
            }(Tc),
            We = function(a) {
                function b(b, c, d) {
                    this._o = b, this._e = c, this._n = d, this._i = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._i >= this._n && a === this._e && (this._o.onNext(this._i), this._o.onCompleted()), this._i++
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(-1), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.indexOf = function(a, b) {
            var c = +b || 0;
            return Math.abs(c) === 1 / 0 && (c = 0), new Ve(this, a, c)
        };
        var Xe = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Ye(a, this._fn, this.source))
                }, b
            }(Tc),
            Ye = function(a) {
                function b(b, c, d) {
                    this._o = b, this._fn = c, this._s = d, this._i = 0, this._c = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (this._fn) {
                        var b = $a(this._fn)(a, this._i++, this._s);
                        if (b === Za) return this._o.onError(b.e);
                        this._c += b
                    } else this._c += a
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(this._c), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.sum = function(a, b) {
            var c = ob(a, b, 3);
            return new Xe(this, c)
        }, Mc.minBy = function(a, b) {
            return b || (b = Va), new He(this, a, function(a, c) {
                return -1 * b(a, c)
            })
        }, Mc.min = function(a) {
            return this.minBy(Sa, a).map(V)
        }, Mc.maxBy = function(a, b) {
            return b || (b = Va), new He(this, a, b)
        }, Mc.max = function(a) {
            return this.maxBy(Sa, a).map(V)
        };
        var Ze = function(a) {
                function b(b, c) {
                    this.source = b, this._fn = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new $e(a, this._fn, this.source))
                }, b
            }(Tc),
            $e = function(a) {
                function b(b, c, d) {
                    this._o = b, this._fn = c, this._s = d, this._c = 0, this._t = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (this._fn) {
                        var b = $a(this._fn)(a, this._c++, this._s);
                        if (b === Za) return this._o.onError(b.e);
                        this._t += b
                    } else this._c++, this._t += a
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    return 0 === this._c ? this._o.onError(new eb) : (this._o.onNext(this._t / this._c), void this._o.onCompleted())
                }, b
            }(Nc);
        Mc.average = function(a, b) {
            var c, d = this;
            return Ya(a) && (c = ob(a, b, 3)), new Ze(d, c)
        }, Mc.sequenceEqual = function(a, b) {
            var c = this;
            return b || (b = Ua), new xg(function(d) {
                var e = !1,
                    f = !1,
                    g = [],
                    h = [],
                    i = c.subscribe(function(a) {
                        if (h.length > 0) {
                            var c = h.shift(),
                                e = $a(b)(c, a);
                            if (e === Za) return d.onError(e.e);
                            e || (d.onNext(!1), d.onCompleted())
                        } else f ? (d.onNext(!1), d.onCompleted()) : g.push(a)
                    }, function(a) {
                        d.onError(a)
                    }, function() {
                        e = !0, 0 === g.length && (h.length > 0 ? (d.onNext(!1), d.onCompleted()) : f && (d.onNext(!0), d.onCompleted()))
                    });
                (nb(a) || mb(a)) && (a = md(a)), Xa(a) && (a = dd(a));
                var j = a.subscribe(function(a) {
                    if (g.length > 0) {
                        var c = g.shift(),
                            f = $a(b)(c, a);
                        if (f === Za) return d.onError(f.e);
                        f || (d.onNext(!1), d.onCompleted())
                    } else e ? (d.onNext(!1), d.onCompleted()) : h.push(a)
                }, function(a) {
                    d.onError(a)
                }, function() {
                    f = !0, 0 === h.length && (g.length > 0 ? (d.onNext(!1), d.onCompleted()) : e && (d.onNext(!0), d.onCompleted()))
                });
                return new jc(i, j)
            }, c)
        };
        var _e = function(a) {
                function b(b, c, d) {
                    this.source = b, this._i = c, this._d = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new af(a, this._i, this._d))
                }, b
            }(Tc),
            af = function(b) {
                function c(a, c, d) {
                    this._o = a, this._i = c, this._d = d, b.call(this)
                }
                return Wb(c, b), c.prototype.next = function(a) {
                    0 === this._i-- && (this._o.onNext(a), this._o.onCompleted())
                }, c.prototype.error = function(a) {
                    this._o.onError(a)
                }, c.prototype.completed = function() {
                    this._d === a ? this._o.onError(new gb) : (this._o.onNext(this._d), this._o.onCompleted())
                }, c
            }(Nc);
        Mc.elementAt = function(a, b) {
            if (0 > a) throw new gb;
            return new _e(this, a, b)
        };
        var bf = function(b) {
            function c(a, c, d) {
                this._o = a, this._obj = c, this._s = d, this._i = 0, this._hv = !1, this._v = null, b.call(this)
            }
            return Wb(c, b), c.prototype.next = function(a) {
                var b = !1;
                if (this._obj.predicate) {
                    var c = $a(this._obj.predicate)(a, this._i++, this._s);
                    if (c === Za) return this._o.onError(c.e);
                    Boolean(c) && (b = !0)
                } else this._obj.predicate || (b = !0);
                if (b) {
                    if (this._hv) return this._o.onError(new Error("Sequence contains more than one matching element"));
                    this._hv = !0, this._v = a
                }
            }, c.prototype.error = function(a) {
                this._o.onError(a)
            }, c.prototype.completed = function() {
                this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === a ? this._o.onError(new eb) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
            }, c
        }(Nc);
        Mc.single = function(a, b) {
            var c = {},
                d = this;
            if (c = "object" == typeof arguments[0] ? arguments[0] : {
                predicate: arguments[0],
                thisArg: arguments[1],
                defaultValue: arguments[2]
            }, Ya(c.predicate)) {
                var e = c.predicate;
                c.predicate = ob(e, c.thisArg, 3)
            }
            return new xg(function(a) {
                return d.subscribe(new bf(a, c, d))
            }, d)
        };
        var cf = function(a) {
                function b(b, c) {
                    this.source = b, this._obj = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new df(a, this._obj, this.source))
                }, b
            }(Tc),
            df = function(b) {
                function c(a, c, d) {
                    this._o = a, this._obj = c, this._s = d, this._i = 0, b.call(this)
                }
                return Wb(c, b), c.prototype.next = function(a) {
                    if (this._obj.predicate) {
                        var b = $a(this._obj.predicate)(a, this._i++, this._s);
                        if (b === Za) return this._o.onError(b.e);
                        Boolean(b) && (this._o.onNext(a), this._o.onCompleted())
                    } else this._obj.predicate || (this._o.onNext(a), this._o.onCompleted())
                }, c.prototype.error = function(a) {
                    this._o.onError(a)
                }, c.prototype.completed = function() {
                    this._obj.defaultValue === a ? this._o.onError(new eb) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
                }, c
            }(Nc);
        Mc.first = function() {
            var a = {};
            if (a = "object" == typeof arguments[0] ? arguments[0] : {
                predicate: arguments[0],
                thisArg: arguments[1],
                defaultValue: arguments[2]
            }, Ya(a.predicate)) {
                var b = a.predicate;
                a.predicate = ob(b, a.thisArg, 3)
            }
            return new cf(this, a)
        };
        var ef = function(a) {
                function b(b, c) {
                    this.source = b, this._obj = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new ff(a, this._obj, this.source))
                }, b
            }(Tc),
            ff = function(b) {
                function c(a, c, d) {
                    this._o = a, this._obj = c, this._s = d, this._i = 0, this._hv = !1, this._v = null, b.call(this)
                }
                return Wb(c, b), c.prototype.next = function(a) {
                    var b = !1;
                    if (this._obj.predicate) {
                        var c = $a(this._obj.predicate)(a, this._i++, this._s);
                        if (c === Za) return this._o.onError(c.e);
                        Boolean(c) && (b = !0)
                    } else this._obj.predicate || (b = !0);
                    b && (this._hv = !0, this._v = a)
                }, c.prototype.error = function(a) {
                    this._o.onError(a)
                }, c.prototype.completed = function() {
                    this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === a ? this._o.onError(new eb) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
                }, c
            }(Nc);
        Mc.last = function() {
            var a = {};
            if (a = "object" == typeof arguments[0] ? arguments[0] : {
                predicate: arguments[0],
                thisArg: arguments[1],
                defaultValue: arguments[2]
            }, Ya(a.predicate)) {
                var b = a.predicate;
                a.predicate = ob(b, a.thisArg, 3)
            }
            return new ef(this, a)
        };
        var gf = function(a) {
            function b(b, c, d, e) {
                this._o = b, this._s = c, this._cb = d, this._y = e, this._i = 0, a.call(this)
            }
            return Wb(b, a), b.prototype.next = function(a) {
                var b = $a(this._cb)(a, this._i, this._s);
                return b === Za ? this._o.onError(b.e) : void(b ? (this._o.onNext(this._y ? this._i : a), this._o.onCompleted()) : this._i++)
            }, b.prototype.error = function(a) {
                this._o.onError(a)
            }, b.prototype.completed = function() {
                this._y && this._o.onNext(-1), this._o.onCompleted()
            }, b
        }(Nc);
        Mc.find = function(a, b) {
            return W(this, a, b, !1)
        }, Mc.findIndex = function(a, b) {
            return W(this, a, b, !0)
        };
        var hf = function(a) {
                function b(b) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new jf(a))
                }, b
            }(Tc),
            jf = function(a) {
                function b(b) {
                    this._o = b, this._s = new Pa.Set, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._s.add(a)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(this._s), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.toSet = function() {
            if ("undefined" == typeof Pa.Set) throw new TypeError;
            return new hf(this)
        };
        var kf = function(a) {
                function b(b, c, d) {
                    this.source = b, this._k = c, this._e = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new lf(a, this._k, this._e))
                }, b
            }(Tc),
            lf = function(a) {
                function b(b, c, d) {
                    this._o = b, this._k = c, this._e = d, this._m = new Pa.Map, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = $a(this._k)(a);
                    if (b === Za) return this._o.onError(b.e);
                    var c = a;
                    return this._e && (c = $a(this._e)(a), c === Za) ? this._o.onError(c.e) : void this._m.set(b, c)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onNext(this._m), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.toMap = function(a, b) {
            if ("undefined" == typeof Pa.Map) throw new TypeError;
            return new kf(this, a, b)
        };
        var mf = function(a) {
                function b(b, c, d) {
                    this.source = b, this._b = c, this._e = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new nf(a, this._b, this._e))
                }, b
            }(Tc),
            nf = function(a) {
                function b(b, c, d) {
                    this._o = b, this._b = c, this._e = d, this._i = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._i >= this._b && (this._e === this._i ? this._o.onCompleted() : this._o.onNext(a)), this._i++
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.slice = function(a, b) {
            var c = a || 0;
            if (0 > c) throw new Qa.ArgumentOutOfRangeError;
            if ("number" == typeof b && c > b) throw new Qa.ArgumentOutOfRangeError;
            return new mf(this, c, b)
        };
        var of = function(a) {
                function b(b, c, d) {
                    this.source = b, this._e = c, this._n = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this._n < 0 ? (a.onNext(-1), a.onCompleted(), dc) : this.source.subscribe(new pf(a, this._e, this._n))
                }, b
            }(Tc),
            pf = function(a) {
                function b(b, c, d) {
                    this._o = b, this._e = c, this._n = d, this._v = 0, this._hv = !1, this._i = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._i >= this._n && a === this._e && (this._hv = !0, this._v = this._i), this._i++
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._hv ? this._o.onNext(this._v) : this._o.onNext(-1), this._o.onCompleted()
                }, b
            }(Nc);
        Mc.lastIndexOf = function(a, b) {
            var c = +b || 0;
            return Math.abs(c) === 1 / 0 && (c = 0), new of(this, a, c)
        }, Sc.wrap = function(a) {
            function b() {
                return Sc.spawn.call(this, a.apply(this, arguments))
            }
            return b.__generatorFunction__ = a, b
        };
        var qf = Sc.spawn = function() {
            for (var a = arguments[0], b = this, c = [], d = 1, e = arguments.length; e > d; d++) c.push(arguments[d]);
            return new xg(function(d) {
                function e(b) {
                    var c = $a(a.next).call(a, b);
                    return c === Za ? d.onError(c.e) : void g(c)
                }

                function f(b) {
                    var c = $a(a.next).call(a, b);
                    return c === Za ? d.onError(c.e) : void g(c)
                }

                function g(a) {
                    if (a.done) return d.onNext(a.value), void d.onCompleted();
                    var c = X.call(b, a.value),
                        g = null,
                        i = !1;
                    Sc.isObservable(c) ? h.add(c.subscribe(function(a) {
                        i = !0, g = a
                    }, f, function() {
                        i && e(g)
                    })) : f(new TypeError("type not supported"))
                }
                var h = new _b;
                return Ya(a) && (a = a.apply(b, c)), a && Ya(a.next) ? (e(), h) : (d.onNext(a), d.onCompleted())
            })
        };
        Sc.start = function(a, b, c) {
            return rf(a, b, c)()
        };
        var rf = Sc.toAsync = function(a, b, c) {
            return pc(c) || (c = Bc),
                function() {
                    var d = arguments,
                        e = new Cg;
                    return c.schedule(null, function() {
                        var c;
                        try {
                            c = a.apply(b, d)
                        } catch (f) {
                            return void e.onError(f)
                        }
                        e.onNext(c), e.onCompleted()
                    }), e.asObservable()
                }
        };
        Sc.fromCallback = function(a, b, c) {
            return function() {
                "undefined" == typeof b && (b = this);
                for (var d = arguments.length, e = new Array(d), f = 0; d > f; f++) e[f] = arguments[f];
                return ca(a, b, c, e)
            }
        }, Sc.fromNodeCallback = function(a, b, c) {
            return function() {
                "undefined" == typeof b && (b = this);
                for (var d = arguments.length, e = new Array(d), f = 0; d > f; f++) e[f] = arguments[f];
                return ea(a, b, c, e)
            }
        }, ha.prototype.dispose = function() {
            this.isDisposed || (this._e.removeEventListener(this._n, this._fn, !1), this.isDisposed = !0)
        }, Qa.config.useNativeEvents = !1;
        var sf = function(a) {
            function b(b, c, d) {
                this._el = b, this._n = c, this._fn = d, a.call(this)
            }

            function c(a, b) {
                return function() {
                    var c = arguments[0];
                    return Ya(b) && (c = $a(b).apply(null, arguments), c === Za) ? a.onError(c.e) : void a.onNext(c)
                }
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return ia(this._el, this._n, c(a, this._fn))
            }, b
        }(Tc);
        Sc.fromEvent = function(a, b, c) {
            return a.addListener ? uf(function(c) {
                a.addListener(b, c)
            }, function(c) {
                a.removeListener(b, c)
            }, c) : Qa.config.useNativeEvents || "function" != typeof a.on || "function" != typeof a.off ? new sf(a, b, c).publish().refCount() : uf(function(c) {
                a.on(b, c)
            }, function(c) {
                a.off(b, c)
            }, c)
        };
        var tf = function(a) {
                function b(b, c, d) {
                    this._add = b, this._del = c, this._fn = d, a.call(this)
                }

                function c(a, b) {
                    return function() {
                        var c = arguments[0];
                        return Ya(b) && (c = $a(b).apply(null, arguments), c === Za) ? a.onError(c.e) : void a.onNext(c)
                    }
                }

                function d(a, b, c) {
                    this._del = a, this._fn = b, this._ret = c, this.isDisposed = !1
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = c(a, this._fn),
                        e = this._add(b);
                    return new d(this._del, b, e)
                }, d.prototype.dispose = function() {
                    this.isDisposed || (Ya(this._del) && this._del(this._fn, this._ret), this.isDisposed = !0)
                }, b
            }(Tc),
            uf = Sc.fromEventPattern = function(a, b, c) {
                return new tf(a, b, c).publish().refCount()
            };
        Sc.startAsync = function(a) {
            var b = $a(a)();
            return b === Za ? yd(b.e) : dd(b)
        };
        var vf = function(a) {
            function b(b, c) {
                this.source = b, this.controller = new Bg, c && c.subscribe ? this.pauser = this.controller.merge(c) : this.pauser = this.controller, a.call(this)
            }
            return Wb(b, a), b.prototype._subscribe = function(a) {
                var b = this.source.publish(),
                    c = b.subscribe(a),
                    d = dc,
                    e = this.pauser.distinctUntilChanged().subscribe(function(a) {
                        a ? d = b.connect() : (d.dispose(), d = dc)
                    });
                return new kc([c, d, e])
            }, b.prototype.pause = function() {
                this.controller.onNext(!1)
            }, b.prototype.resume = function() {
                this.controller.onNext(!0)
            }, b
        }(Sc);
        Mc.pausable = function(a) {
            return new vf(this, a)
        };
        var wf = function(b) {
            function c(a, c) {
                this.source = a, this.controller = new Bg, c && c.subscribe ? this.pauser = this.controller.merge(c) : this.pauser = this.controller, b.call(this)
            }
            return Wb(c, b), c.prototype._subscribe = function(b) {
                function c() {
                    for (; e.length > 0;) b.onNext(e.shift())
                }
                var d, e = [],
                    f = ja(this.source, this.pauser.startWith(!1).distinctUntilChanged(), function(a, b) {
                        return {
                            data: a,
                            shouldFire: b
                        }
                    }).subscribe(function(f) {
                        d !== a && f.shouldFire !== d ? (d = f.shouldFire, f.shouldFire && c()) : (d = f.shouldFire, f.shouldFire ? b.onNext(f.data) : e.push(f.data))
                    }, function(a) {
                        c(), b.onError(a)
                    }, function() {
                        c(), b.onCompleted()
                    });
                return f
            }, c.prototype.pause = function() {
                this.controller.onNext(!1)
            }, c.prototype.resume = function() {
                this.controller.onNext(!0)
            }, c
        }(Sc);
        Mc.pausableBuffered = function(a) {
            return new wf(this, a)
        };
        var xf = function(a) {
                function b(b, c, d) {
                    a.call(this), this.subject = new yf(c, d), this.source = b.multicast(this.subject).refCount()
                }
                return Wb(b, a), b.prototype._subscribe = function(a) {
                    return this.source.subscribe(a)
                }, b.prototype.request = function(a) {
                    return this.subject.request(null == a ? -1 : a)
                }, b
            }(Sc),
            yf = function(a) {
                function b(b, c) {
                    null == b && (b = !0), a.call(this), this.subject = new Bg, this.enableQueue = b, this.queue = b ? [] : null, this.requestedCount = 0, this.requestedDisposable = null, this.error = null, this.hasFailed = !1, this.hasCompleted = !1, this.scheduler = c || wc
                }
                return Wb(b, a), Xb(b.prototype, Kc, {
                    _subscribe: function(a) {
                        return this.subject.subscribe(a)
                    },
                    onCompleted: function() {
                        this.hasCompleted = !0, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Dc.createOnCompleted()) : (this.subject.onCompleted(), this.disposeCurrentRequest())
                    },
                    onError: function(a) {
                        this.hasFailed = !0, this.error = a, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Dc.createOnError(a)) : (this.subject.onError(a), this.disposeCurrentRequest())
                    },
                    onNext: function(a) {
                        this.requestedCount <= 0 ? this.enableQueue && this.queue.push(Dc.createOnNext(a)) : (0 === this.requestedCount-- && this.disposeCurrentRequest(), this.subject.onNext(a))
                    },
                    _processRequest: function(a) {
                        if (this.enableQueue)
                            for (; this.queue.length > 0 && (a > 0 || "N" !== this.queue[0].kind);) {
                                var b = this.queue.shift();
                                b.accept(this.subject), "N" === b.kind ? a-- : (this.disposeCurrentRequest(), this.queue = [])
                            }
                        return a
                    },
                    request: function(a) {
                        this.disposeCurrentRequest();
                        var b = this;
                        return this.requestedDisposable = this.scheduler.schedule(a, function(a, c) {
                            var d = b._processRequest(c),
                                e = b.hasCompleted || b.hasFailed;
                            return !e && d > 0 ? (b.requestedCount = d, cc(function() {
                                b.requestedCount = 0
                            })) : void 0
                        }), this.requestedDisposable
                    },
                    disposeCurrentRequest: function() {
                        this.requestedDisposable && (this.requestedDisposable.dispose(), this.requestedDisposable = null)
                    }
                }), b
            }(Sc);
        Mc.controlled = function(a, b) {
            return a && pc(a) && (b = a, a = !0), null == a && (a = !0), new xf(this, a, b)
        };
        var zf = function(a) {
            function b(b) {
                a.call(this), this.source = b
            }

            function c(a, b) {
                b.source.request(1)
            }
            Wb(b, a), b.prototype._subscribe = function(a) {
                return this.subscription = this.source.subscribe(new d(a, this, this.subscription)), new jc(this.subscription, Bc.schedule(this, c))
            };
            var d = function(a) {
                function c(b, c, d) {
                    a.call(this), this.observer = b, this.observable = c, this.cancel = d, this.scheduleDisposable = null
                }

                function d(a, b) {
                    b.observable.source.request(1)
                }
                return Wb(c, a), c.prototype.completed = function() {
                    this.observer.onCompleted(), this.dispose()
                }, c.prototype.error = function(a) {
                    this.observer.onError(a), this.dispose()
                }, c.prototype.next = function(a) {
                    this.observer.onNext(a), this.scheduleDisposable = Bc.schedule(this, d)
                }, b.dispose = function() {
                    this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), a.prototype.dispose.call(this)
                }, c
            }(Nc);
            return b
        }(Sc);
        xf.prototype.stopAndWait = function() {
            return new zf(this)
        };
        var Af = function(a) {
            function b(b, c) {
                a.call(this), this.source = b, this.windowSize = c
            }

            function c(a, b) {
                b.source.request(b.windowSize)
            }
            Wb(b, a), b.prototype._subscribe = function(a) {
                return this.subscription = this.source.subscribe(new d(a, this, this.subscription)), new jc(this.subscription, Bc.schedule(this, c))
            };
            var d = function(a) {
                function b(b, c, d) {
                    this.observer = b, this.observable = c, this.cancel = d, this.received = 0, this.scheduleDisposable = null, a.call(this)
                }

                function c(a, b) {
                    b.observable.source.request(b.observable.windowSize)
                }
                return Wb(b, a), b.prototype.completed = function() {
                    this.observer.onCompleted(), this.dispose()
                }, b.prototype.error = function(a) {
                    this.observer.onError(a), this.dispose()
                }, b.prototype.next = function(a) {
                    this.observer.onNext(a), this.received = ++this.received % this.observable.windowSize, 0 === this.received && (this.scheduleDisposable = Bc.schedule(this, c))
                }, b.prototype.dispose = function() {
                    this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), a.prototype.dispose.call(this)
                }, b
            }(Nc);
            return b
        }(Sc);
        xf.prototype.windowed = function(a) {
            return new Af(this, a)
        }, Mc.pipe = function(a) {
            function b() {
                c.resume()
            }
            var c = this.pausableBuffered();
            return a.addListener("drain", b), c.subscribe(function(b) {
                !a.write(String(b)) && c.pause()
            }, function(b) {
                a.emit("error", b)
            }, function() {
                !a._isStdio && a.end(), a.removeListener("drain", b)
            }), c.resume(), a
        };
        var Bf = function(a) {
            function b(b, c, d) {
                this.source = b, this._fn1 = c, this._fn2 = d, a.call(this)
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = this.source.multicast(this._fn1());
                return new jc(this._fn2(b).subscribe(a), b.connect())
            }, b
        }(Tc);
        Mc.multicast = function(a, b) {
            return Ya(a) ? new Bf(this, a, b) : new Ef(this, a)
        }, Mc.publish = function(a) {
            return a && Ya(a) ? this.multicast(function() {
                return new Bg
            }, a) : this.multicast(new Bg)
        }, Mc.share = function() {
            return this.publish().refCount()
        }, Mc.publishLast = function(a) {
            return a && Ya(a) ? this.multicast(function() {
                return new Cg
            }, a) : this.multicast(new Cg)
        }, Mc.publishValue = function(a, b) {
            return 2 === arguments.length ? this.multicast(function() {
                return new Dg(b)
            }, a) : this.multicast(new Dg(a))
        }, Mc.shareValue = function(a) {
            return this.publishValue(a).refCount()
        }, Mc.replay = function(a, b, c, d) {
            return a && Ya(a) ? this.multicast(function() {
                return new Eg(b, c, d)
            }, a) : this.multicast(new Eg(b, c, d))
        }, Mc.shareReplay = function(a, b, c) {
            return this.replay(null, a, b, c).refCount()
        };
        var Cf = function(a, b) {
            this._s = a, this._o = b
        };
        Cf.prototype.dispose = function() {
            if (!this._s.isDisposed && null !== this._o) {
                var a = this._s.observers.indexOf(this._o);
                this._s.observers.splice(a, 1), this._o = null
            }
        };
        var Df = function(a) {
                function b(b) {
                    this.source = b, this._count = 0, this._connectableSubscription = null, a.call(this)
                }

                function c(a, b) {
                    this._p = a, this._s = b, this.isDisposed = !1
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = this.source.subscribe(a);
                    return 1 === ++this._count && (this._connectableSubscription = this.source.connect()), new c(this, b)
                }, c.prototype.dispose = function() {
                    this.isDisposed || (this.isDisposed = !0, this._s.dispose(), 0 === --this._p._count && this._p._connectableSubscription.dispose())
                }, b
            }(Tc),
            Ef = Qa.ConnectableObservable = function(a) {
                function b(b, c) {
                    this.source = b, this._connection = null, this._source = b.asObservable(), this._subject = c, a.call(this)
                }

                function c(a, b) {
                    this._p = a, this._s = b
                }
                return Wb(b, a), c.prototype.dispose = function() {
                    this._s && (this._s.dispose(), this._s = null, this._p._connection = null)
                }, b.prototype.connect = function() {
                    if (!this._connection) {
                        var a = this._source.subscribe(this._subject);
                        this._connection = new c(this, a)
                    }
                    return this._connection
                }, b.prototype._subscribe = function(a) {
                    return this._subject.subscribe(a)
                }, b.prototype.refCount = function() {
                    return new Df(this)
                }, b
            }(Sc);
        Mc.singleInstance = function() {
            function a() {
                return d || (d = !0, b = c["finally"](function() {
                    d = !1
                }).publish().refCount()),
                    b
            }
            var b, c = this,
                d = !1;
            return new xg(function(b) {
                return a().subscribe(b)
            })
        }, Mc.join = function(a, b, c, d) {
            var e = this;
            return new xg(function(f) {
                var g = new _b,
                    h = !1,
                    i = !1,
                    j = 0,
                    k = 0,
                    l = new Of,
                    m = new Of,
                    n = function(a) {
                        f.onError(a)
                    };
                return g.add(e.subscribe(function(a) {
                    var c = j++,
                        e = new hc;
                    l.set(c, a), g.add(e);
                    var i = $a(b)(a);
                    return i === Za ? f.onError(i.e) : (e.setDisposable(i.take(1).subscribe(Ra, n, function() {
                        l["delete"](c) && 0 === l.size && h && f.onCompleted(), g.remove(e)
                    })), void m.forEach(function(b) {
                        var c = $a(d)(a, b);
                        return c === Za ? f.onError(c.e) : void f.onNext(c)
                    }))
                }, n, function() {
                    h = !0, (i || 0 === l.size) && f.onCompleted()
                })), g.add(a.subscribe(function(a) {
                    var b = k++,
                        e = new hc;
                    m.set(b, a), g.add(e);
                    var h = $a(c)(a);
                    return h === Za ? f.onError(h.e) : (e.setDisposable(h.take(1).subscribe(Ra, n, function() {
                        m["delete"](b) && 0 === m.size && i && f.onCompleted(), g.remove(e)
                    })), void l.forEach(function(b) {
                        var c = $a(d)(b, a);
                        return c === Za ? f.onError(c.e) : void f.onNext(c)
                    }))
                }, n, function() {
                    i = !0, (h || 0 === m.size) && f.onCompleted()
                })), g
            }, e)
        }, Mc.groupJoin = function(a, b, c, d) {
            var e = this;
            return new xg(function(f) {
                function g(a) {}
                var h = new _b,
                    i = new lc(h),
                    j = new Of,
                    k = new Of,
                    l = 0,
                    m = 0,
                    g = function(a) {
                        return function(b) {
                            b.onError(a)
                        }
                    };
                return h.add(e.subscribe(function(a) {
                    var c = new Bg,
                        e = l++;
                    j.set(e, c);
                    var m = $a(d)(a, Yb(c, i));
                    if (m === Za) return j.forEach(g(m.e)), f.onError(m.e);
                    f.onNext(m), k.forEach(function(a) {
                        c.onNext(a)
                    });
                    var n = new hc;
                    h.add(n);
                    var o = $a(b)(a);
                    return o === Za ? (j.forEach(g(o.e)), f.onError(o.e)) : void n.setDisposable(o.take(1).subscribe(Ra, function(a) {
                        j.forEach(g(a)), f.onError(a)
                    }, function() {
                        j["delete"](e) && c.onCompleted(), h.remove(n)
                    }))
                }, function(a) {
                    j.forEach(g(a)), f.onError(a)
                }, function() {
                    f.onCompleted()
                })), h.add(a.subscribe(function(a) {
                    var b = m++;
                    k.set(b, a);
                    var d = new hc;
                    h.add(d);
                    var e = $a(c)(a);
                    return e === Za ? (j.forEach(g(e.e)), f.onError(e.e)) : (d.setDisposable(e.take(1).subscribe(Ra, function(a) {
                        j.forEach(g(a)), f.onError(a)
                    }, function() {
                        k["delete"](b), h.remove(d)
                    })), void j.forEach(function(b) {
                        b.onNext(a)
                    }))
                }, function(a) {
                    j.forEach(g(a)), f.onError(a)
                })), i
            }, e)
        }, Mc.buffer = function() {
            return this.window.apply(this, arguments).flatMap(O)
        }, Mc.window = function(a, b) {
            return 1 === arguments.length && "function" != typeof arguments[0] ? la.call(this, a) : "function" == typeof a ? ma.call(this, a) : ka.call(this, a, b)
        };
        var Ff = function(a) {
                function b(b) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Gf(a))
                }, b
            }(Tc),
            Gf = function(a) {
                function b(b) {
                    this._o = b, this._p = null, this._hp = !1, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._hp ? this._o.onNext([this._p, a]) : this._hp = !0, this._p = a
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.pairwise = function() {
            return new Ff(this)
        }, Mc.partition = function(a, b) {
            var c = ob(a, b, 3);
            return [this.filter(a, b), this.filter(function(a, b, d) {
                return !c(a, b, d)
            })]
        };
        var Hf = function(a) {
            function b(a, b) {
                this.c = a, this.s = b
            }
            return Wb(b, a), b.prototype[kb] = function() {
                var a = this;
                return {
                    next: function() {
                        return a.c() ? {
                            done: !1,
                            value: a.s
                        } : {
                            done: !0,
                            value: void 0
                        }
                    }
                }
            }, b
        }(Vc);
        Mc.letBind = Mc.let = function(a) {
            return a(this)
        }, Sc["if"] = function(a, b, c) {
            return gd(function() {
                return c || (c = jd()), Xa(b) && (b = dd(b)), Xa(c) && (c = dd(c)), "function" == typeof c.now && (c = jd(c)), a() ? b : c
            })
        }, Sc["for"] = Sc.forIn = function(a, b, c) {
            return _c(a, b, c).concat()
        };
        var If = Sc["while"] = Sc.whileDo = function(a, b) {
            return Xa(b) && (b = dd(b)), na(a, b).concat()
        };
        Mc.doWhile = function(a) {
            return Id([this, If(a, this)])
        }, Sc["case"] = function(a, b, c) {
            return gd(function() {
                Xa(c) && (c = dd(c)), c || (c = jd()), pc(c) && (c = jd(c));
                var d = b[a()];
                return Xa(d) && (d = dd(d)), d || c
            })
        };
        var Jf = function(a) {
                function b(b, c, d) {
                    this.source = b, this._fn = c, this._scheduler = d, a.call(this)
                }

                function c(a, b) {
                    var c, d = a[0],
                        e = a[1];
                    if (!(d.q.length > 0)) return void(d.isAcquired = !1);
                    c = d.q.shift();
                    var f = new hc;
                    d.d.add(f), f.setDisposable(c.subscribe(new Kf(d, e, f))), b([d, e])
                }
                return Wb(b, a), b.prototype._ensureActive = function(a) {
                    var b = !1;
                    a.q.length > 0 && (b = !a.isAcquired, a.isAcquired = !0), b && a.m.setDisposable(this._scheduler.scheduleRecursive([a, this], c))
                }, b.prototype.subscribeCore = function(a) {
                    var b = new ic,
                        c = new _b(b),
                        d = {
                            q: [],
                            m: b,
                            d: c,
                            activeCount: 0,
                            isAcquired: !1,
                            o: a
                        };
                    return d.q.push(this.source), d.activeCount++, this._ensureActive(d), c
                }, b
            }(Tc),
            Kf = function(a) {
                function b(b, c, d) {
                    this._s = b, this._p = c, this._m1 = d, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._s.o.onNext(a);
                    var b = $a(this._p._fn)(a);
                    return b === Za ? this._s.o.onError(b.e) : (this._s.q.push(b), this._s.activeCount++, void this._p._ensureActive(this._s))
                }, b.prototype.error = function(a) {
                    this._s.o.onError(a)
                }, b.prototype.completed = function() {
                    this._s.d.remove(this._m1), this._s.activeCount--, 0 === this._s.activeCount && this._s.o.onCompleted()
                }, b
            }(Nc);
        Mc.expand = function(a, b) {
            return pc(b) || (b = wc), new Jf(this, a, b)
        };
        var Lf = function(a) {
                function b(b, c) {
                    this._sources = b, this._cb = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    if (0 === this._sources.length) return a.onCompleted(), dc;
                    for (var b = this._sources.length, c = {
                        finished: !1,
                        hasResults: new Array(b),
                        hasCompleted: new Array(b),
                        results: new Array(b)
                    }, d = new _b, e = 0, f = this._sources.length; f > e; e++) {
                        var g = this._sources[e];
                        Xa(g) && (g = dd(g)), d.add(g.subscribe(new Mf(a, c, e, this._cb, d)))
                    }
                    return d
                }, b
            }(Tc),
            Mf = function(a) {
                function b(b, c, d, e, f) {
                    this._o = b, this._s = c, this._i = d, this._cb = e, this._subs = f, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._s.finished || (this._s.hasResults[this._i] = !0, this._s.results[this._i] = a)
                }, b.prototype.error = function(a) {
                    this._s.finished = !0, this._o.onError(a), this._subs.dispose()
                }, b.prototype.completed = function() {
                    if (!this._s.finished) {
                        if (!this._s.hasResults[this._i]) return this._o.onCompleted();
                        this._s.hasCompleted[this._i] = !0;
                        for (var a = 0; a < this._s.results.length; a++)
                            if (!this._s.hasCompleted[a]) return;
                        this._s.finished = !0;
                        var b = $a(this._cb).apply(null, this._s.results);
                        if (b === Za) return this._o.onError(b.e);
                        this._o.onNext(b), this._o.onCompleted()
                    }
                }, b
            }(Nc);
        Sc.forkJoin = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            var d = Ya(b[a - 1]) ? b.pop() : L;
            return Array.isArray(b[0]) && (b = b[0]), new Lf(b, d)
        }, Mc.forkJoin = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            return Array.isArray(b[0]) ? b[0].unshift(this) : b.unshift(this), Sc.forkJoin.apply(null, b)
        }, Mc.manySelect = Mc.extend = function(a, b) {
            pc(b) || (b = Qa.Scheduler.immediate);
            var c = this;
            return gd(function() {
                var d;
                return c.map(function(a) {
                    var b = new Nf(a);
                    return d && d.onNext(a), d = b, b
                }).tap(Ra, function(a) {
                    d && d.onError(a)
                }, function() {
                    d && d.onCompleted()
                }).observeOn(b).map(a)
            }, c)
        };
        var Nf = function(a) {
                function b(b) {
                    a.call(this), this.head = b, this.tail = new Cg
                }
                return Wb(b, a), Xb(b.prototype, Kc, {
                    _subscribe: function(a) {
                        var b = new _b;
                        return b.add(wc.schedule(this, function(c, d) {
                            a.onNext(d.head), b.add(d.tail.mergeAll().subscribe(a))
                        })), b
                    },
                    onCompleted: function() {
                        this.onNext(Sc.empty())
                    },
                    onError: function(a) {
                        this.onNext(Sc["throw"](a))
                    },
                    onNext: function(a) {
                        this.tail.onNext(a), this.tail.onCompleted()
                    }
                }), b
            }(Sc),
            Of = Pa.Map || function() {
                function b() {
                    this.size = 0, this._values = [], this._keys = []
                }
                return b.prototype["delete"] = function(a) {
                    var b = this._keys.indexOf(a);
                    return -1 === b ? !1 : (this._values.splice(b, 1), this._keys.splice(b, 1), this.size--, !0)
                }, b.prototype.get = function(b) {
                    var c = this._keys.indexOf(b);
                    return -1 === c ? a : this._values[c]
                }, b.prototype.set = function(a, b) {
                    var c = this._keys.indexOf(a);
                    return -1 === c ? (this._keys.push(a), this._values.push(b), this.size++) : this._values[c] = b, this
                }, b.prototype.forEach = function(a, b) {
                    for (var c = 0; c < this.size; c++) a.call(b, this._values[c], this._keys[c])
                }, b
            }();
        oa.prototype.and = function(a) {
            return new oa(this.patterns.concat(a))
        }, oa.prototype.thenDo = function(a) {
            return new pa(this, a)
        }, pa.prototype.activate = function(a, b, c) {
            for (var d = [], e = qa(b), f = 0, g = this.expression.patterns.length; g > f; f++) d.push(sa(a, this.expression.patterns[f], e));
            var h = new ta(d, ra(this, b), function() {
                for (var a = 0, b = d.length; b > a; a++) d[a].removeActivePlan(h);
                c(h)
            });
            for (f = 0, g = d.length; g > f; f++) d[f].addActivePlan(h);
            return h
        }, ta.prototype.dequeue = function() {
            this.joinObservers.forEach(function(a) {
                a.queue.shift()
            })
        }, ta.prototype.match = function() {
            var a, b, c = !0;
            for (a = 0, b = this.joinObserverArray.length; b > a; a++)
                if (0 === this.joinObserverArray[a].queue.length) {
                    c = !1;
                    break
                }
            if (c) {
                var d = [],
                    e = !1;
                for (a = 0, b = this.joinObserverArray.length; b > a; a++) d.push(this.joinObserverArray[a].queue[0]), "C" === this.joinObserverArray[a].queue[0].kind && (e = !0);
                if (e) this.onCompleted();
                else {
                    this.dequeue();
                    var f = [];
                    for (a = 0, b = d.length; a < d.length; a++) f.push(d[a].value);
                    this.onNext.apply(this, f)
                }
            }
        };
        var Pf = function(a) {
            function b(b, c) {
                a.call(this), this.source = b, this.onError = c, this.queue = [], this.activePlans = [], this.subscription = new hc, this.isDisposed = !1
            }
            Wb(b, a);
            var c = b.prototype;
            return c.next = function(a) {
                if (!this.isDisposed) {
                    if ("E" === a.kind) return this.onError(a.error);
                    this.queue.push(a);
                    for (var b = this.activePlans.slice(0), c = 0, d = b.length; d > c; c++) b[c].match()
                }
            }, c.error = Ra, c.completed = Ra, c.addActivePlan = function(a) {
                this.activePlans.push(a)
            }, c.subscribe = function() {
                this.subscription.setDisposable(this.source.materialize().subscribe(this))
            }, c.removeActivePlan = function(a) {
                this.activePlans.splice(this.activePlans.indexOf(a), 1), 0 === this.activePlans.length && this.dispose()
            }, c.dispose = function() {
                a.prototype.dispose.call(this), this.isDisposed || (this.isDisposed = !0, this.subscription.dispose())
            }, b
        }(Nc);
        Mc.and = function(a) {
            return new oa([this, a])
        }, Mc.thenDo = function(a) {
            return new oa([this]).thenDo(a)
        }, Sc.when = function() {
            var a, b = arguments.length;
            if (Array.isArray(arguments[0])) a = arguments[0];
            else {
                a = new Array(b);
                for (var c = 0; b > c; c++) a[c] = arguments[c]
            }
            return new xg(function(b) {
                var c = [],
                    d = new Of,
                    e = Lc(function(a) {
                        b.onNext(a)
                    }, function(a) {
                        d.forEach(function(b) {
                            b.onError(a)
                        }), b.onError(a)
                    }, function(a) {
                        b.onCompleted()
                    });
                try {
                    for (var f = 0, g = a.length; g > f; f++) c.push(a[f].activate(d, e, function(a) {
                        var d = c.indexOf(a);
                        c.splice(d, 1), 0 === c.length && b.onCompleted()
                    }))
                } catch (h) {
                    return yd(h).subscribe(b)
                }
                var i = new _b;
                return d.forEach(function(a) {
                    a.subscribe(), i.add(a)
                }), i
            })
        };
        var Qf = function(a) {
                function b(b, c) {
                    this._dt = b, this._s = c, a.call(this)
                }

                function c(a, b) {
                    b.onNext(0), b.onCompleted()
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this._s.scheduleFuture(a, this._dt, c)
                }, b
            }(Tc),
            Rf = Sc.interval = function(a, b) {
                return wa(a, a, pc(b) ? b : Bc)
            };
        Sc.timer = function(b, c, d) {
            var e;
            return pc(d) || (d = Bc), null != c && "number" == typeof c ? e = c : pc(c) && (d = c), (b instanceof Date || "number" == typeof b) && e === a ? ua(b, d) : b instanceof Date && e !== a ? va(b, c, d) : wa(b, e, d)
        };
        Mc.delay = function() {
            var a = arguments[0];
            if ("number" == typeof a || a instanceof Date) {
                var b = a,
                    c = arguments[1];
                return pc(c) || (c = Bc), b instanceof Date ? ya(this, b, c) : xa(this, b, c)
            }
            if (Sc.isObservable(a) || Ya(a)) return za(this, a, arguments[1]);
            throw new Error("Invalid arguments")
        };
        var Sf = function(a) {
                function b(b, c, d) {
                    pc(d) || (d = Bc), this.source = b, this._dt = c, this._s = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new ic;
                    return new jc(this.source.subscribe(new Tf(a, this._dt, this._s, b)), b)
                }, b
            }(Tc),
            Tf = function(a) {
                function b(b, c, d, e) {
                    this._o = b, this._d = c, this._scheduler = d, this._c = e, this._v = null, this._hv = !1, this._id = 0, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._hv = !0, this._v = a;
                    var b = ++this._id,
                        c = new hc;
                    this._c.setDisposable(c), c.setDisposable(this._scheduler.scheduleFuture(this, this._d, function(c, d) {
                        d._hv && d._id === b && d._o.onNext(a), d._hv = !1
                    }))
                }, b.prototype.error = function(a) {
                    this._c.dispose(), this._o.onError(a), this._hv = !1, this._id++
                }, b.prototype.completed = function() {
                    this._c.dispose(), this._hv && this._o.onNext(this._v), this._o.onCompleted(), this._hv = !1, this._id++
                }, b
            }(Nc);
        Mc.debounce = function() {
            if (Ya(arguments[0])) return Aa(this, arguments[0]);
            if ("number" == typeof arguments[0]) return new Sf(this, arguments[0], arguments[1]);
            throw new Error("Invalid arguments")
        }, Mc.windowWithTime = function(a, b, c) {
            var d, e = this;
            return null == b && (d = a), pc(c) || (c = Bc), "number" == typeof b ? d = b : pc(b) && (d = a, c = b), new xg(function(b) {
                function f() {
                    var a = new hc,
                        e = !1,
                        g = !1;
                    l.setDisposable(a), j === i ? (e = !0, g = !0) : i > j ? e = !0 : g = !0;
                    var n = e ? j : i,
                        o = n - m;
                    m = n, e && (j += d), g && (i += d), a.setDisposable(c.scheduleFuture(null, o, function() {
                        if (g) {
                            var a = new Bg;
                            k.push(a), b.onNext(Yb(a, h))
                        }
                        e && k.shift().onCompleted(), f()
                    }))
                }
                var g, h, i = d,
                    j = a,
                    k = [],
                    l = new ic,
                    m = 0;
                return g = new _b(l), h = new lc(g), k.push(new Bg), b.onNext(Yb(k[0], h)), f(), g.add(e.subscribe(function(a) {
                    for (var b = 0, c = k.length; c > b; b++) k[b].onNext(a)
                }, function(a) {
                    for (var c = 0, d = k.length; d > c; c++) k[c].onError(a);
                    b.onError(a)
                }, function() {
                    for (var a = 0, c = k.length; c > a; a++) k[a].onCompleted();
                    b.onCompleted()
                })), h
            }, e)
        }, Mc.windowWithTimeOrCount = function(a, b, c) {
            var d = this;
            return pc(c) || (c = Bc), new xg(function(e) {
                function f(b) {
                    var d = new hc;
                    g.setDisposable(d), d.setDisposable(c.scheduleFuture(null, a, function() {
                        if (b === k) {
                            j = 0;
                            var a = ++k;
                            l.onCompleted(), l = new Bg, e.onNext(Yb(l, i)), f(a)
                        }
                    }))
                }
                var g = new ic,
                    h = new _b(g),
                    i = new lc(h),
                    j = 0,
                    k = 0,
                    l = new Bg;
                return e.onNext(Yb(l, i)), f(0), h.add(d.subscribe(function(a) {
                    var c = 0,
                        d = !1;
                    l.onNext(a), ++j === b && (d = !0, j = 0, c = ++k, l.onCompleted(), l = new Bg, e.onNext(Yb(l, i))), d && f(c)
                }, function(a) {
                    l.onError(a), e.onError(a)
                }, function() {
                    l.onCompleted(), e.onCompleted()
                })), i
            }, d)
        }, Mc.bufferWithTime = function(a, b, c) {
            return this.windowWithTime(a, b, c).flatMap(O)
        }, Mc.bufferWithTimeOrCount = function(a, b, c) {
            return this.windowWithTimeOrCount(a, b, c).flatMap(O)
        };
        var Uf = function(a) {
                function b(b, c) {
                    this.source = b, this._s = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Vf(a, this._s))
                }, b
            }(Tc),
            Vf = function(a) {
                function b(b, c) {
                    this._o = b, this._s = c, this._l = c.now(), a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = this._s.now(),
                        c = b - this._l;
                    this._l = b, this._o.onNext({
                        value: a,
                        interval: c
                    })
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.timeInterval = function(a) {
            return pc(a) || (a = Bc), new Uf(this, a)
        };
        var Wf = function(a) {
                function b(b, c) {
                    this.source = b, this._s = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new Xf(a, this._s))
                }, b
            }(Tc),
            Xf = function(a) {
                function b(b, c) {
                    this._o = b, this._s = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._o.onNext({
                        value: a,
                        timestamp: this._s.now()
                    })
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.timestamp = function(a) {
            return pc(a) || (a = Bc), new Wf(this, a)
        };
        var Yf = function(a) {
                function b(b, c) {
                    this.source = b, this._sampler = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = {
                        o: a,
                        atEnd: !1,
                        value: null,
                        hasValue: !1,
                        sourceSubscription: new hc
                    };
                    return b.sourceSubscription.setDisposable(this.source.subscribe(new $f(b))), new jc(b.sourceSubscription, this._sampler.subscribe(new Zf(b)))
                }, b
            }(Tc),
            Zf = function(a) {
                function b(b) {
                    this._s = b, a.call(this)
                }
                return Wb(b, a), b.prototype._handleMessage = function() {
                    this._s.hasValue && (this._s.hasValue = !1, this._s.o.onNext(this._s.value)), this._s.atEnd && this._s.o.onCompleted()
                }, b.prototype.next = function() {
                    this._handleMessage()
                }, b.prototype.error = function(a) {
                    this._s.onError(a)
                }, b.prototype.completed = function() {
                    this._handleMessage()
                }, b
            }(Nc),
            $f = function(a) {
                function b(b) {
                    this._s = b, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._s.hasValue = !0, this._s.value = a
                }, b.prototype.error = function(a) {
                    this._s.o.onError(a)
                }, b.prototype.completed = function() {
                    this._s.atEnd = !0, this._s.sourceSubscription.dispose()
                }, b
            }(Nc);
        Mc.sample = function(a, b) {
            return pc(b) || (b = Bc), "number" == typeof a ? new Yf(this, Rf(a, b)) : new Yf(this, a)
        };
        var _f = Qa.TimeoutError = function(a) {
            this.message = a || "Timeout has occurred", this.name = "TimeoutError", Error.call(this)
        };
        _f.prototype = Object.create(Error.prototype), Mc.timeout = function() {
            var a = arguments[0];
            if (a instanceof Date || "number" == typeof a) return Ca(this, a, arguments[1], arguments[2]);
            if (Sc.isObservable(a) || Ya(a)) return Ba(this, a, arguments[1], arguments[2]);
            throw new Error("Invalid arguments")
        };
        var ag = function(a) {
            function b(b, c, d, e, f, g) {
                this._state = b, this._cndFn = c, this._itrFn = d, this._resFn = e, this._timeFn = f, this._s = g, a.call(this)
            }

            function c(a, b) {
                if (a.hasResult && a.o.onNext(a.result), a.first) a.first = !1;
                else if (a.newState = $a(a.self._itrFn)(a.newState), a.newState === Za) return a.o.onError(a.newState.e);
                if (a.hasResult = $a(a.self._cndFn)(a.newState), a.hasResult === Za) return a.o.onError(a.hasResult.e);
                if (a.hasResult) {
                    if (a.result = $a(a.self._resFn)(a.newState), a.result === Za) return a.o.onError(a.result.e);
                    var c = $a(a.self._timeFn)(a.newState);
                    if (c === Za) return a.o.onError(c.e);
                    b(a, c)
                } else a.o.onCompleted()
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = {
                    o: a,
                    self: this,
                    newState: this._state,
                    first: !0,
                    hasResult: !1
                };
                return this._s.scheduleRecursiveFuture(b, new Date(this._s.now()), c)
            }, b
        }(Tc);
        Sc.generateWithAbsoluteTime = function(a, b, c, d, e, f) {
            return pc(f) || (f = Bc), new ag(a, b, c, d, e, f)
        };
        var bg = function(a) {
            function b(b, c, d, e, f, g) {
                this._state = b, this._cndFn = c, this._itrFn = d, this._resFn = e, this._timeFn = f, this._s = g, a.call(this)
            }

            function c(a, b) {
                if (a.hasResult && a.o.onNext(a.result), a.first) a.first = !1;
                else if (a.newState = $a(a.self._itrFn)(a.newState), a.newState === Za) return a.o.onError(a.newState.e);
                if (a.hasResult = $a(a.self._cndFn)(a.newState), a.hasResult === Za) return a.o.onError(a.hasResult.e);
                if (a.hasResult) {
                    if (a.result = $a(a.self._resFn)(a.newState), a.result === Za) return a.o.onError(a.result.e);
                    var c = $a(a.self._timeFn)(a.newState);
                    if (c === Za) return a.o.onError(c.e);
                    b(a, c)
                } else a.o.onCompleted()
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = {
                    o: a,
                    self: this,
                    newState: this._state,
                    first: !0,
                    hasResult: !1
                };
                return this._s.scheduleRecursiveFuture(b, 0, c)
            }, b
        }(Tc);
        Sc.generateWithRelativeTime = function(a, b, c, d, e, f) {
            return pc(f) || (f = Bc), new bg(a, b, c, d, e, f)
        };
        var cg = function(a) {
            function b(b, c, d) {
                this.source = b, this._dt = c, this._s = d, a.call(this)
            }

            function c(a, b) {
                var c = b[0],
                    d = b[1],
                    e = b[2];
                e.setDisposable(c.subscribe(d))
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                var b = new ic;
                return b.setDisposable(this._s.scheduleFuture([this.source, a, b], this._dt, c)), b
            }, b
        }(Tc);
        Mc.delaySubscription = function(a, b) {
            return pc(b) || (b = Bc), new cg(this, a, b)
        };
        var dg = function(a) {
                function b(b, c, d) {
                    this.source = b, this._d = c, this._s = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new eg(a, this))
                }, b
            }(Tc),
            eg = function(a) {
                function b(b, c) {
                    this._o = b, this._s = c._s, this._d = c._d, this._q = [], a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = this._s.now();
                    for (this._q.push({
                        interval: b,
                        value: a
                    }); this._q.length > 0 && b - this._q[0].interval >= this._d;) this._o.onNext(this._q.shift().value)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    for (var a = this._s.now(); this._q.length > 0 && a - this._q[0].interval >= this._d;) this._o.onNext(this._q.shift().value);
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.skipLastWithTime = function(a, b) {
            return pc(b) || (b = Bc), new dg(this, a, b)
        };
        var fg = function(a) {
                function b(b, c, d) {
                    this.source = b, this._d = c, this._s = d, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this.source.subscribe(new gg(a, this._d, this._s))
                }, b
            }(Tc),
            gg = function(a) {
                function b(b, c, d) {
                    this._o = b, this._d = c, this._s = d, this._q = [], a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    var b = this._s.now();
                    for (this._q.push({
                        interval: b,
                        value: a
                    }); this._q.length > 0 && b - this._q[0].interval >= this._d;) this._q.shift()
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    for (var a = this._s.now(); this._q.length > 0;) {
                        var b = this._q.shift();
                        a - b.interval <= this._d && this._o.onNext(b.value)
                    }
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.takeLastWithTime = function(a, b) {
            return pc(b) || (b = Bc), new fg(this, a, b)
        }, Mc.takeLastBufferWithTime = function(a, b) {
            var c = this;
            return pc(b) || (b = Bc), new xg(function(d) {
                var e = [];
                return c.subscribe(function(c) {
                    var d = b.now();
                    for (e.push({
                        interval: d,
                        value: c
                    }); e.length > 0 && d - e[0].interval >= a;) e.shift()
                }, function(a) {
                    d.onError(a)
                }, function() {
                    for (var c = b.now(), f = []; e.length > 0;) {
                        var g = e.shift();
                        c - g.interval <= a && f.push(g.value)
                    }
                    d.onNext(f), d.onCompleted()
                })
            }, c)
        };
        var hg = function(a) {
            function b(b, c, d) {
                this.source = b, this._d = c, this._s = d, a.call(this)
            }

            function c(a, b) {
                b.onCompleted()
            }
            return Wb(b, a), b.prototype.subscribeCore = function(a) {
                return new jc(this._s.scheduleFuture(a, this._d, c), this.source.subscribe(a))
            }, b
        }(Tc);
        Mc.takeWithTime = function(a, b) {
            return pc(b) || (b = Bc), new hg(this, a, b)
        };
        var ig = function(a) {
                function b(b, c, d) {
                    this.source = b, this._d = c, this._s = d, this._open = !1, a.call(this)
                }

                function c(a, b) {
                    b._open = !0
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return new jc(this._s.scheduleFuture(this, this._d, c), this.source.subscribe(new jg(a, this)))
                }, b
            }(Tc),
            jg = function(a) {
                function b(b, c) {
                    this._o = b, this._p = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._p._open && this._o.onNext(a)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.skipWithTime = function(a, b) {
            return pc(b) || (b = Bc), new ig(this, a, b)
        };
        var kg = function(a) {
                function b(b, c, d) {
                    this.source = b, this._st = c, this._s = d, a.call(this)
                }

                function c(a, b) {
                    b._open = !0
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return this._open = !1, new jc(this._s.scheduleFuture(this, this._st, c), this.source.subscribe(new lg(a, this)))
                }, b
            }(Tc),
            lg = function(a) {
                function b(b, c) {
                    this._o = b, this._p = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    this._p._open && this._o.onNext(a)
                }, b.prototype.error = function(a) {
                    this._o.onError(a)
                }, b.prototype.completed = function() {
                    this._o.onCompleted()
                }, b
            }(Nc);
        Mc.skipUntilWithTime = function(a, b) {
            return pc(b) || (b = Bc), new kg(this, a, b)
        }, Mc.takeUntilWithTime = function(a, b) {
            pc(b) || (b = Bc);
            var c = this;
            return new xg(function(d) {
                return new jc(b.scheduleFuture(d, a, function(a, b) {
                    b.onCompleted()
                }), c.subscribe(d))
            }, c)
        }, Mc.throttle = function(a, b) {
            pc(b) || (b = Bc);
            var c = +a || 0;
            if (0 >= c) throw new RangeError("windowDuration cannot be less or equal zero.");
            var d = this;
            return new xg(function(a) {
                var e = 0;
                return d.subscribe(function(d) {
                    var f = b.now();
                    (0 === e || f - e >= c) && (e = f, a.onNext(d))
                }, function(b) {
                    a.onError(b)
                }, function() {
                    a.onCompleted()
                })
            }, d)
        };
        var mg = function(a) {
            function b(b, c) {
                this._o = b, this._xform = c, a.call(this)
            }
            return Wb(b, a), b.prototype.next = function(a) {
                var b = $a(this._xform["@@transducer/step"]).call(this._xform, this._o, a);
                b === Za && this._o.onError(b.e)
            }, b.prototype.error = function(a) {
                this._o.onError(a)
            }, b.prototype.completed = function() {
                this._xform["@@transducer/result"](this._o)
            }, b
        }(Nc);
        Mc.transduce = function(a) {
            var b = this;
            return new xg(function(c) {
                var d = a(Da(c));
                return b.subscribe(new mg(c, d))
            }, b)
        };
        var ng = function(a) {
                function b(b) {
                    this.source = b, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    var b = new hc,
                        c = new _b,
                        d = {
                            hasCurrent: !1,
                            isStopped: !1,
                            o: a,
                            g: c
                        };
                    return c.add(b), b.setDisposable(this.source.subscribe(new og(d))), c
                }, b
            }(Tc),
            og = function(a) {
                function b(b) {
                    this._s = b, a.call(this)
                }

                function c(b, c) {
                    this._s = b, this._i = c, a.call(this)
                }
                return Wb(b, a), b.prototype.next = function(a) {
                    if (!this._s.hasCurrent) {
                        this._s.hasCurrent = !0, Xa(a) && (a = dd(a));
                        var b = new hc;
                        this._s.g.add(b), b.setDisposable(a.subscribe(new c(this._s, b)))
                    }
                }, b.prototype.error = function(a) {
                    this._s.o.onError(a)
                }, b.prototype.completed = function() {
                    this._s.isStopped = !0, !this._s.hasCurrent && 1 === this._s.g.length && this._s.o.onCompleted()
                }, Wb(c, a), c.prototype.next = function(a) {
                    this._s.o.onNext(a)
                }, c.prototype.error = function(a) {
                    this._s.o.onError(a)
                }, c.prototype.completed = function() {
                    this._s.g.remove(this._i), this._s.hasCurrent = !1, this._s.isStopped && 1 === this._s.g.length && this._s.o.onCompleted()
                }, b
            }(Nc);
        Mc.switchFirst = function() {
            return new ng(this)
        }, Mc.flatMapFirst = Mc.selectManyFirst = function(a, b, c) {
            return new Uc(this, a, b, c).switchFirst()
        }, Qa.Observable.prototype.flatMapWithMaxConcurrent = function(a, b, c, d) {
            return new Uc(this, b, c, d).merge(a)
        };
        var pg = Qa.VirtualTimeScheduler = function(a) {
            function b(b, c) {
                this.clock = b, this.comparer = c, this.isEnabled = !1, this.queue = new Zb(1024), a.call(this)
            }
            Wb(b, a);
            var c = b.prototype;
            return c.now = function() {
                return this.toAbsoluteTime(this.clock)
            }, c.schedule = function(a, b) {
                return this.scheduleAbsolute(a, this.clock, b)
            }, c.scheduleFuture = function(a, b, c) {
                var d = b instanceof Date ? this.toRelativeTime(b - this.now()) : this.toRelativeTime(b);
                return this.scheduleRelative(a, d, c)
            }, c.add = jb, c.toAbsoluteTime = jb, c.toRelativeTime = jb, c.schedulePeriodic = function(a, b, c) {
                var d = new sc(this, a, b, c);
                return d.start()
            }, c.scheduleRelative = function(a, b, c) {
                var d = this.add(this.clock, b);
                return this.scheduleAbsolute(a, d, c)
            }, c.start = function() {
                if (!this.isEnabled) {
                    this.isEnabled = !0;
                    do {
                        var a = this.getNext();
                        null !== a ? (this.comparer(a.dueTime, this.clock) > 0 && (this.clock = a.dueTime), a.invoke()) : this.isEnabled = !1
                    } while (this.isEnabled)
                }
            }, c.stop = function() {
                this.isEnabled = !1
            }, c.advanceTo = function(a) {
                var b = this.comparer(this.clock, a);
                if (this.comparer(this.clock, a) > 0) throw new gb;
                if (0 !== b && !this.isEnabled) {
                    this.isEnabled = !0;
                    do {
                        var c = this.getNext();
                        null !== c && this.comparer(c.dueTime, a) <= 0 ? (this.comparer(c.dueTime, this.clock) > 0 && (this.clock = c.dueTime), c.invoke()) : this.isEnabled = !1
                    } while (this.isEnabled);
                    this.clock = a
                }
            }, c.advanceBy = function(a) {
                var b = this.add(this.clock, a),
                    c = this.comparer(this.clock, b);
                if (c > 0) throw new gb;
                0 !== c && this.advanceTo(b)
            }, c.sleep = function(a) {
                var b = this.add(this.clock, a);
                if (this.comparer(this.clock, b) >= 0) throw new gb;
                this.clock = b
            }, c.getNext = function() {
                for (; this.queue.length > 0;) {
                    var a = this.queue.peek();
                    if (!a.isCancelled()) return a;
                    this.queue.dequeue()
                }
                return null
            }, c.scheduleAbsolute = function(a, b, c) {
                function d(a, b) {
                    return e.queue.remove(f), c(a, b)
                }
                var e = this,
                    f = new mc(this, a, d, b, this.comparer);
                return this.queue.enqueue(f), f.disposable
            }, b
        }(nc);
        Qa.HistoricalScheduler = function(a) {
            function b(b, c) {
                var d = null == b ? 0 : b,
                    e = c || Va;
                a.call(this, d, e)
            }
            Wb(b, a);
            var c = b.prototype;
            return c.add = function(a, b) {
                return a + b
            }, c.toAbsoluteTime = function(a) {
                return new Date(a).getTime()
            }, c.toRelativeTime = function(a) {
                return a
            }, b
        }(Qa.VirtualTimeScheduler), Ea.prototype.equals = function(a) {
            return a === this ? !0 : null == a ? !1 : "N" !== a.kind ? !1 : this.predicate(a.value)
        }, Fa.prototype.equals = function(a) {
            return a === this ? !0 : null == a ? !1 : "E" !== a.kind ? !1 : this.predicate(a.error)
        };
        var qg = Qa.ReactiveTest = {
                created: 100,
                subscribed: 200,
                disposed: 1e3,
                onNext: function(a, b) {
                    return "function" == typeof b ? new rg(a, new Ea(b)) : new rg(a, Dc.createOnNext(b))
                },
                onError: function(a, b) {
                    return "function" == typeof b ? new rg(a, new Fa(b)) : new rg(a, Dc.createOnError(b))
                },
                onCompleted: function(a) {
                    return new rg(a, Dc.createOnCompleted())
                },
                subscribe: function(a, b) {
                    return new sg(a, b)
                }
            },
            rg = Qa.Recorded = function(a, b, c) {
                this.time = a, this.value = b, this.comparer = c || Ua
            };
        rg.prototype.equals = function(a) {
            return this.time === a.time && this.comparer(this.value, a.value)
        }, rg.prototype.toString = function() {
            return this.value.toString() + "@" + this.time
        };
        var sg = Qa.Subscription = function(a, b) {
            this.subscribe = a, this.unsubscribe = b || Number.MAX_VALUE
        };
        sg.prototype.equals = function(a) {
            return this.subscribe === a.subscribe && this.unsubscribe === a.unsubscribe
        }, sg.prototype.toString = function() {
            return "(" + this.subscribe + ", " + (this.unsubscribe === Number.MAX_VALUE ? "Infinite" : this.unsubscribe) + ")"
        };
        var tg = Qa.MockDisposable = function(a) {
            this.scheduler = a, this.disposes = [], this.disposes.push(this.scheduler.clock)
        };
        tg.prototype.dispose = function() {
            this.disposes.push(this.scheduler.clock)
        };
        var ug = function(a) {
            function b(b) {
                a.call(this), this.scheduler = b, this.messages = []
            }
            Wb(b, a);
            var c = b.prototype;
            return c.onNext = function(a) {
                this.messages.push(new rg(this.scheduler.clock, Dc.createOnNext(a)))
            }, c.onError = function(a) {
                this.messages.push(new rg(this.scheduler.clock, Dc.createOnError(a)))
            }, c.onCompleted = function() {
                this.messages.push(new rg(this.scheduler.clock, Dc.createOnCompleted()))
            }, b
        }(Kc);
        Ga.prototype.then = function(b, c) {
            var d = this;
            this.subscriptions.push(new sg(this.scheduler.clock));
            var e, f = this.subscriptions.length - 1,
                g = Qa.Observer.create(function(c) {
                    var h = b(c);
                    if (h && "function" == typeof h.then) e = h;
                    else {
                        var i = d.scheduler.clock;
                        e = new Ga(d.scheduler, [Qa.ReactiveTest.onNext(i, a), Qa.ReactiveTest.onCompleted(i)])
                    }
                    var j = d.observers.indexOf(g);
                    d.observers.splice(j, 1), d.subscriptions[f] = new sg(d.subscriptions[f].subscribe, d.scheduler.clock)
                }, function(a) {
                    c(a);
                    var b = d.observers.indexOf(g);
                    d.observers.splice(b, 1), d.subscriptions[f] = new sg(d.subscriptions[f].subscribe, d.scheduler.clock)
                });
            return this.observers.push(g), e || new Ga(this.scheduler, this.messages)
        };
        var vg = function(a) {
                function b(b, c) {
                    a.call(this);
                    var d, e, f = this;
                    this.scheduler = b, this.messages = c, this.subscriptions = [], this.observers = [];
                    for (var g = 0, h = this.messages.length; h > g; g++) d = this.messages[g], e = d.value,
                        function(a) {
                            b.scheduleAbsolute(null, d.time, function() {
                                for (var b = f.observers.slice(0), c = 0, d = b.length; d > c; c++) a.accept(b[c]);
                                return dc
                            })
                        }(e)
                }
                return Wb(b, a), b.prototype._subscribe = function(a) {
                    var b = this;
                    this.observers.push(a), this.subscriptions.push(new sg(this.scheduler.clock));
                    var c = this.subscriptions.length - 1;
                    return cc(function() {
                        var d = b.observers.indexOf(a);
                        b.observers.splice(d, 1), b.subscriptions[c] = new sg(b.subscriptions[c].subscribe, b.scheduler.clock)
                    })
                }, b
            }(Sc),
            wg = function(a) {
                function b(b, c) {
                    a.call(this), this.scheduler = b, this.messages = c, this.subscriptions = []
                }
                return Wb(b, a), b.prototype._subscribe = function(a) {
                    var b, c, d = this;
                    this.subscriptions.push(new sg(this.scheduler.clock));
                    for (var e = this.subscriptions.length - 1, f = new _b, g = 0, h = this.messages.length; h > g; g++) b = this.messages[g], c = b.value,
                        function(c) {
                            f.add(d.scheduler.scheduleRelative(null, b.time, function() {
                                return c.accept(a), dc
                            }))
                        }(c);
                    return cc(function() {
                        d.subscriptions[e] = new sg(d.subscriptions[e].subscribe, d.scheduler.clock), f.dispose()
                    })
                }, b
            }(Sc);
        Qa.TestScheduler = function(a) {
            function b(a, b) {
                return a > b ? 1 : b > a ? -1 : 0
            }

            function c() {
                a.call(this, 0, b)
            }
            return Wb(c, a), c.prototype.scheduleAbsolute = function(b, c, d) {
                return c <= this.clock && (c = this.clock + 1), a.prototype.scheduleAbsolute.call(this, b, c, d)
            }, c.prototype.add = function(a, b) {
                return a + b
            }, c.prototype.toAbsoluteTime = function(a) {
                return new Date(a).getTime()
            }, c.prototype.toRelativeTime = function(a) {
                return a
            }, c.prototype.startScheduler = function(a, b) {
                b || (b = {}), null == b.created && (b.created = qg.created), null == b.subscribed && (b.subscribed = qg.subscribed), null == b.disposed && (b.disposed = qg.disposed);
                var c, d, e = this.createObserver();
                return this.scheduleAbsolute(null, b.created, function() {
                    return c = a(), dc
                }), this.scheduleAbsolute(null, b.subscribed, function() {
                    return d = c.subscribe(e), dc
                }), this.scheduleAbsolute(null, b.disposed, function() {
                    return d.dispose(), dc
                }), this.start(), e
            }, c.prototype.createHotObservable = function() {
                var a, b = arguments.length;
                if (Array.isArray(arguments[0])) a = arguments[0];
                else {
                    a = new Array(b);
                    for (var c = 0; b > c; c++) a[c] = arguments[c]
                }
                return new vg(this, a)
            }, c.prototype.createColdObservable = function() {
                var a, b = arguments.length;
                if (Array.isArray(arguments[0])) a = arguments[0];
                else {
                    a = new Array(b);
                    for (var c = 0; b > c; c++) a[c] = arguments[c]
                }
                return new wg(this, a)
            }, c.prototype.createResolvedPromise = function(a, b) {
                return new Ga(this, [Qa.ReactiveTest.onNext(a, b), Qa.ReactiveTest.onCompleted(a)])
            }, c.prototype.createRejectedPromise = function(a, b) {
                return new Ga(this, [Qa.ReactiveTest.onError(a, b)])
            }, c.prototype.createObserver = function() {
                return new ug(this)
            }, c
        }(pg);
        var xg = Qa.AnonymousObservable = function(a) {
                function b(a) {
                    return a && Ya(a.dispose) ? a : Ya(a) ? cc(a) : dc
                }

                function c(a, c) {
                    var d = c[0],
                        f = c[1],
                        g = $a(f.__subscribe).call(f, d);
                    g !== Za || d.fail(Za.e) || e(Za.e), d.setDisposable(b(g))
                }

                function d(b, c) {
                    this.source = c, this.__subscribe = b, a.call(this)
                }
                return Wb(d, a), d.prototype._subscribe = function(a) {
                    var b = new yg(a),
                        d = [b, this];
                    return wc.scheduleRequired() ? wc.schedule(d, c) : c(null, d), b
                }, d
            }(Sc),
            yg = function(a) {
                function b(b) {
                    a.call(this), this.observer = b, this.m = new hc
                }
                Wb(b, a);
                var c = b.prototype;
                return c.next = function(a) {
                    var b = $a(this.observer.onNext).call(this.observer, a);
                    b === Za && (this.dispose(), e(b.e))
                }, c.error = function(a) {
                    var b = $a(this.observer.onError).call(this.observer, a);
                    this.dispose(), b === Za && e(b.e)
                }, c.completed = function() {
                    var a = $a(this.observer.onCompleted).call(this.observer);
                    this.dispose(), a === Za && e(a.e)
                }, c.setDisposable = function(a) {
                    this.m.setDisposable(a)
                }, c.getDisposable = function() {
                    return this.m.getDisposable()
                }, c.dispose = function() {
                    a.prototype.dispose.call(this), this.m.dispose()
                }, b
            }(Nc),
            zg = function(a) {
                function b(b, c) {
                    this._m = b, this._u = c, a.call(this)
                }
                return Wb(b, a), b.prototype.subscribeCore = function(a) {
                    return new jc(this._m.getDisposable(), this._u.subscribe(a));
                }, b
            }(Tc),
            Ag = function(a) {
                function b(b, c, d) {
                    a.call(this), this.key = b, this.underlyingObservable = d ? new zg(d, c) : c
                }
                return Wb(b, a), b.prototype._subscribe = function(a) {
                    return this.underlyingObservable.subscribe(a)
                }, b
            }(Sc),
            Bg = Qa.Subject = function(a) {
                function b() {
                    a.call(this), this.isDisposed = !1, this.isStopped = !1, this.observers = [], this.hasError = !1
                }
                return Wb(b, a), Xb(b.prototype, Kc.prototype, {
                    _subscribe: function(a) {
                        return fc(this), this.isStopped ? this.hasError ? (a.onError(this.error), dc) : (a.onCompleted(), dc) : (this.observers.push(a), new Cf(this, a))
                    },
                    hasObservers: function() {
                        return fc(this), this.observers.length > 0
                    },
                    onCompleted: function() {
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0;
                            for (var a = 0, b = c(this.observers), d = b.length; d > a; a++) b[a].onCompleted();
                            this.observers.length = 0
                        }
                    },
                    onError: function(a) {
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0, this.error = a, this.hasError = !0;
                            for (var b = 0, d = c(this.observers), e = d.length; e > b; b++) d[b].onError(a);
                            this.observers.length = 0
                        }
                    },
                    onNext: function(a) {
                        if (fc(this), !this.isStopped)
                            for (var b = 0, d = c(this.observers), e = d.length; e > b; b++) d[b].onNext(a)
                    },
                    dispose: function() {
                        this.isDisposed = !0, this.observers = null
                    }
                }), b.create = function(a, b) {
                    return new Fg(a, b)
                }, b
            }(Sc),
            Cg = Qa.AsyncSubject = function(a) {
                function b() {
                    a.call(this), this.isDisposed = !1, this.isStopped = !1, this.hasValue = !1, this.observers = [], this.hasError = !1
                }
                return Wb(b, a), Xb(b.prototype, Kc.prototype, {
                    _subscribe: function(a) {
                        return fc(this), this.isStopped ? (this.hasError ? a.onError(this.error) : this.hasValue ? (a.onNext(this.value), a.onCompleted()) : a.onCompleted(), dc) : (this.observers.push(a), new Cf(this, a))
                    },
                    hasObservers: function() {
                        return fc(this), this.observers.length > 0
                    },
                    onCompleted: function() {
                        var a, b;
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0;
                            var d = c(this.observers),
                                b = d.length;
                            if (this.hasValue)
                                for (a = 0; b > a; a++) {
                                    var e = d[a];
                                    e.onNext(this.value), e.onCompleted()
                                } else
                                for (a = 0; b > a; a++) d[a].onCompleted();
                            this.observers.length = 0
                        }
                    },
                    onError: function(a) {
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0, this.hasError = !0, this.error = a;
                            for (var b = 0, d = c(this.observers), e = d.length; e > b; b++) d[b].onError(a);
                            this.observers.length = 0
                        }
                    },
                    onNext: function(a) {
                        fc(this), this.isStopped || (this.value = a, this.hasValue = !0)
                    },
                    dispose: function() {
                        this.isDisposed = !0, this.observers = null, this.error = null, this.value = null
                    }
                }), b
            }(Sc),
            Dg = Qa.BehaviorSubject = function(a) {
                function b(b) {
                    a.call(this), this.value = b, this.observers = [], this.isDisposed = !1, this.isStopped = !1, this.hasError = !1
                }
                return Wb(b, a), Xb(b.prototype, Kc.prototype, {
                    _subscribe: function(a) {
                        return fc(this), this.isStopped ? (this.hasError ? a.onError(this.error) : a.onCompleted(), dc) : (this.observers.push(a), a.onNext(this.value), new Cf(this, a))
                    },
                    getValue: function() {
                        return fc(this), this.hasError && e(this.error), this.value
                    },
                    hasObservers: function() {
                        return fc(this), this.observers.length > 0
                    },
                    onCompleted: function() {
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0;
                            for (var a = 0, b = c(this.observers), d = b.length; d > a; a++) b[a].onCompleted();
                            this.observers.length = 0
                        }
                    },
                    onError: function(a) {
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0, this.hasError = !0, this.error = a;
                            for (var b = 0, d = c(this.observers), e = d.length; e > b; b++) d[b].onError(a);
                            this.observers.length = 0
                        }
                    },
                    onNext: function(a) {
                        if (fc(this), !this.isStopped) {
                            this.value = a;
                            for (var b = 0, d = c(this.observers), e = d.length; e > b; b++) d[b].onNext(a)
                        }
                    },
                    dispose: function() {
                        this.isDisposed = !0, this.observers = null, this.value = null, this.error = null
                    }
                }), b
            }(Sc),
            Eg = Qa.ReplaySubject = function(a) {
                function b(a, b) {
                    return cc(function() {
                        b.dispose(), !a.isDisposed && a.observers.splice(a.observers.indexOf(b), 1)
                    })
                }

                function d(b, c, d) {
                    this.bufferSize = null == b ? e : b, this.windowSize = null == c ? e : c, this.scheduler = d || wc, this.q = [], this.observers = [], this.isStopped = !1, this.isDisposed = !1, this.hasError = !1, this.error = null, a.call(this)
                }
                var e = Math.pow(2, 53) - 1;
                return Wb(d, a), Xb(d.prototype, Kc.prototype, {
                    _subscribe: function(a) {
                        fc(this);
                        var c = new Qc(this.scheduler, a),
                            d = b(this, c);
                        this._trim(this.scheduler.now()), this.observers.push(c);
                        for (var e = 0, f = this.q.length; f > e; e++) c.onNext(this.q[e].value);
                        return this.hasError ? c.onError(this.error) : this.isStopped && c.onCompleted(), c.ensureActive(), d
                    },
                    hasObservers: function() {
                        return fc(this), this.observers.length > 0
                    },
                    _trim: function(a) {
                        for (; this.q.length > this.bufferSize;) this.q.shift();
                        for (; this.q.length > 0 && a - this.q[0].interval > this.windowSize;) this.q.shift()
                    },
                    onNext: function(a) {
                        if (fc(this), !this.isStopped) {
                            var b = this.scheduler.now();
                            this.q.push({
                                interval: b,
                                value: a
                            }), this._trim(b);
                            for (var d = 0, e = c(this.observers), f = e.length; f > d; d++) {
                                var g = e[d];
                                g.onNext(a), g.ensureActive()
                            }
                        }
                    },
                    onError: function(a) {
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0, this.error = a, this.hasError = !0;
                            var b = this.scheduler.now();
                            this._trim(b);
                            for (var d = 0, e = c(this.observers), f = e.length; f > d; d++) {
                                var g = e[d];
                                g.onError(a), g.ensureActive()
                            }
                            this.observers.length = 0
                        }
                    },
                    onCompleted: function() {
                        if (fc(this), !this.isStopped) {
                            this.isStopped = !0;
                            var a = this.scheduler.now();
                            this._trim(a);
                            for (var b = 0, d = c(this.observers), e = d.length; e > b; b++) {
                                var f = d[b];
                                f.onCompleted(), f.ensureActive()
                            }
                            this.observers.length = 0
                        }
                    },
                    dispose: function() {
                        this.isDisposed = !0, this.observers = null
                    }
                }), d
            }(Sc),
            Fg = Qa.AnonymousSubject = function(a) {
                function b(b, c) {
                    this.observer = b, this.observable = c, a.call(this)
                }
                return Wb(b, a), Xb(b.prototype, Kc.prototype, {
                    _subscribe: function(a) {
                        return this.observable.subscribe(a)
                    },
                    onCompleted: function() {
                        this.observer.onCompleted()
                    },
                    onError: function(a) {
                        this.observer.onError(a)
                    },
                    onNext: function(a) {
                        this.observer.onNext(a)
                    }
                }), b
            }(Sc);
        Qa.Pauser = function(a) {
            function b() {
                a.call(this)
            }
            return Wb(b, a), b.prototype.pause = function() {
                this.onNext(!1)
            }, b.prototype.resume = function() {
                this.onNext(!0)
            }, b
        }(Bg), "function" == typeof define && "object" == typeof define.amd && define.amd ? (Pa.Rx = Qa, define(function() {
            return Qa
        })) : Ia && Ja ? Na ? (Ja.exports = Qa).Rx = Qa : Ia.Rx = Qa : Pa.Rx = Qa;
        var Gg = j()
    }.call(this),
    function(a, b) {
        var c = "object" == typeof exports && exports && ("object" == typeof a && a && a == a.global && (window = a), exports);
        "function" == typeof define && define.amd ? define(["rx", "jquery", "exports"], function(c, d, e) {
            return a.Rx = b(a, e, c, d), a.Rx
        }) : "object" == typeof module && module && module.exports == c ? module.exports = b(a, module.exports, require("rx"), require("jquery")) : a.Rx = b(a, {}, a.Rx, jQuery)
    }(this, function(a, b, c, d, e) {
        function f(a) {
            return k(a).publish().refCount()
        }

        function g(a, b, c) {
            var d = c[0];
            "number" == typeof d || "string" == typeof d ? d = {
                duration: d
            } : d || (d = {}), 2 === c.length && (d.easing = c[1]);
            var e = new j;
            return d.complete = function() {
                e.onNext(a), e.onCompleted()
            }, a[b](d), e.asObservable()
        }
        var h = c.Observable,
            i = h.prototype,
            j = c.AsyncSubject,
            k = h.create,
            l = (h.createWithDisposable, c.Disposable.empty, Array.prototype.slice),
            m = d.fn;
        d.Deferred && (d.Deferred.toObservable = function(a) {
            var b = new j;
            return a.done(function() {
                b.onNext(l.call(arguments)), b.onCompleted()
            }).fail(function() {
                b.onError(l.call(arguments))
            }), b
        }, i.toDeferred = function() {
            var a = d.Deferred();
            return this.subscribe(function(b) {
                a.resolve(b)
            }, function(b) {
                a.reject(b)
            }), a
        }), d.Callbacks && (d.Callbacks.prototype.toObservable = function() {
            var a = this;
            return k(function(b) {
                function c(a) {
                    b.onNext(a)
                }
                return a.add(c),
                    function() {
                        a.remove(c)
                    }
            })
        }), m.on && (m.onAsObservable = function() {
            var a, b = this,
                c = l.call(arguments, 0);
            return f(function(d) {
                function e(a) {
                    a.additionalArguments = l.call(arguments, 1), d.onNext(a)
                }
                return a = c.slice(), a.push(e), b.on.apply(b, a),
                    function() {
                        b.off.apply(b, a)
                    }
            })
        }), m.bindAsObservable = function(a, b) {
            var c = this;
            return f(function(d) {
                function e(a) {
                    a.additionalArguments = l.call(arguments, 1), d.onNext(a)
                }
                return c.bind(a, b, e),
                    function() {
                        c.unbind(a, b, e)
                    }
            })
        }, m.delegateAsObservable = function(a, b, c) {
            var d = this;
            return f(function(e) {
                function f(a) {
                    a.additionalArguments = l.call(arguments, 1), e.onNext(a)
                }
                return d.delegate(a, b, c, f),
                    function() {
                        d.undelegate(a, b, f)
                    }
            })
        }, m.live && (m.liveAsObservable = function(a, b) {
            var c = this;
            return f(function(d) {
                function e(a) {
                    a.additionalArguments = l.call(arguments, 1), d.onNext(a)
                }
                return c.live(a, b, e),
                    function() {
                        c.die(a, b, e)
                    }
            })
        }), m.changeAsObservable = function(a) {
            return this.bindAsObservable("change", a)
        }, m.clickAsObservable = function(a) {
            return this.bindAsObservable("click", a)
        }, m.dblclickAsObservable = function(a) {
            return this.bindAsObservable("dblclick", a)
        }, m.focusAsObservable = function(a) {
            return this.bindAsObservable("focus", a)
        }, m.focusinAsObservable = function(a) {
            return this.bindAsObservable("focusin", a)
        }, m.focusoutAsObservable = function(a) {
            return this.bindAsObservable("focusout", a)
        }, m.keypressAsObservable = function(a) {
            return this.bindAsObservable("keypress", a)
        }, m.keydownAsObservable = function(a) {
            return this.bindAsObservable("keydown", a)
        }, m.keyupAsObservable = function(a) {
            return this.bindAsObservable("keyup", a)
        }, m.loadAsObservable = function(a) {
            return this.bindAsObservable("load", a)
        }, m.mousedownAsObservable = function(a) {
            return this.bindAsObservable("mousedown", a)
        }, m.mouseenterAsObservable = function(a) {
            return this.bindAsObservable("mouseenter", a)
        }, m.mouseleaveAsObservable = function(a) {
            return this.bindAsObservable("mouseleave", a)
        }, m.mousemoveAsObservable = function(a) {
            return this.bindAsObservable("mousemove", a)
        }, m.mouseoutAsObservable = function(a) {
            return this.bindAsObservable("mouseout", a)
        }, m.mouseoverAsObservable = function(a) {
            return this.bindAsObservable("mouseover", a)
        }, m.mouseupAsObservable = function(a) {
            return this.bindAsObservable("mouseup", a)
        }, m.resizeAsObservable = function(a) {
            return this.bindAsObservable("resize", a)
        }, m.scrollAsObservable = function(a) {
            return this.bindAsObservable("scroll", a)
        }, m.selectAsObservable = function(a) {
            return this.bindAsObservable("select", a)
        }, m.submitAsObservable = function(a) {
            return this.bindAsObservable("submit", a)
        }, m.unloadAsObservable = function(a) {
            return this.bindAsObservable("unload", a)
        }, m.oneAsObservable = function(a) {
            var b, c = this,
                d = l.call(arguments, 0);
            return f(function(a) {
                function e(b) {
                    b.additionalArguments = l.call(arguments, 1), a.onNext(b)
                }
                b = d.slice(), b.push(e), c.one.apply(c, b)
            })
        }, m.readyAsObservable = function() {
            var a = this;
            return f(function(b) {
                function c(a) {
                    b.onNext(a)
                }
                a.ready(c)
            })
        }, m.hideAsObservable = function(a) {
            return g(this, "hide", arguments)
        }, m.showAsObservable = function(a) {
            return g(this, "show", arguments)
        }, m.animateAsObservable = function(a, b) {
            "number" == typeof b || "string" == typeof b ? b = {
                duration: b
            } : b || (b = {}), 3 === arguments.length && (b.easing = arguments[2]);
            var c = new j;
            return b.complete = function() {
                c.onNext(this), c.onCompleted()
            }, this.animate(a, b), c.asObservable()
        }, m.fadeInAsObservable = function(a) {
            return g(this, "fadeIn", arguments)
        }, m.fadeToAsObservable = function(a, b, c) {
            var d = new j;
            return this.fadeTo(a, b, c, function() {
                d.onNext(m), d.onCompleted()
            }), d.asObservable()
        }, m.fadeOutAsObservable = function(a) {
            return g(this, "fadeOut", arguments)
        }, m.fadeToggleAsObservable = function(a) {
            return g(this, "fadeToggle", arguments)
        }, m.slideDownAsObservable = function(a) {
            return g(this, "slideDown", arguments)
        }, m.slideUpAsObservable = function(a) {
            return g(this, "slideUp", arguments)
        }, m.slideToggleAsObservable = function(a) {
            return g(this, "slideToggle", arguments)
        }, m.toggleAsObservable = function(a, b) {
            return g(this, "toggle", arguments)
        };
        var n = d.ajaxAsObservable = function(a) {
            var b = new j,
                c = {
                    success: function(a, c, d) {
                        b.onNext({
                            data: a,
                            textStatus: c,
                            jqXHR: d
                        }), b.onCompleted()
                    },
                    error: function(a, c, d) {
                        b.onError({
                            jqXHR: a,
                            textStatus: c,
                            errorThrown: d
                        })
                    }
                };
            return d.extend(!0, c, a), d.ajax(c), b
        };
        return d.getAsObservable = function(a, b, c) {
            return n({
                url: a,
                dataType: c,
                data: b
            })
        }, d.getJSONAsObservable = function(a, b) {
            return n({
                url: a,
                dataType: "json",
                data: b
            })
        }, d.getScriptAsObservable = function(a) {
            return n({
                url: a,
                dataType: "script"
            })
        }, d.postAsObservable = function(a, b, c) {
            return n({
                url: a,
                dataType: c,
                data: b,
                type: "POST"
            })
        }, c
    }),
    function() {
        var a, b, c, d, e, f, g = {
                version: 1,
                apiEndpoint: "https://api.trello.com",
                authEndpoint: "https://trello.com",
                intentEndpoint: "https://trello.com"
            },
            h = [].slice;
        f = function(a, d, f) {
            var g, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
            for (p = f.key, w = f.token, i = f.apiEndpoint, j = f.authEndpoint, n = f.intentEndpoint, x = f.version, l = i + "/" + x + "/", s = a.location, g = {
                version: function() {
                    return x
                },
                key: function() {
                    return p
                },
                setKey: function(a) {
                    p = a
                },
                token: function() {
                    return w
                },
                setToken: function(a) {
                    w = a
                },
                rest: function() {
                    var a, b, c, e;
                    return b = arguments[0], a = 2 <= arguments.length ? h.call(arguments, 1) : [], e = t(a), c = e[0], a = e[1], f = {
                        url: "" + l + c,
                        type: b,
                        data: {},
                        dataType: "json",
                        success: e[2],
                        error: e[3]
                    }, p && (f.data.key = p), w && (f.data.token = w), null != a && d.extend(f.data, a), d.ajax(f)
                },
                authorized: function() {
                    return null != w
                },
                deauthorize: function() {
                    w = null, y("token", w)
                },
                authorize: function(b) {
                    var h, i, l, m, n;
                    if (f = d.extend(!0, {
                        type: "redirect",
                        persist: !0,
                        interactive: !0,
                        scope: {
                            read: !0,
                            write: !1,
                            account: !1
                        },
                        expiration: "30days"
                    }, b), b = /[&#]?token=([0-9a-f]{64})/, i = function() {
                        return f.persist && null != w ? y("token", w) : void 0
                    }, f.persist && null == w && (w = u("token")), null == w && (w = null != (l = b.exec(s.hash)) ? l[1] : void 0), this.authorized()) return i(), s.hash = s.hash.replace(b, ""), "function" == typeof f.success ? f.success() : void 0;
                    if (!f.interactive) return "function" == typeof f.error ? f.error() : void 0;
                    switch (m = function() {
                        var a, b;
                        a = f.scope, b = [];
                        for (h in a)(n = a[h]) && b.push(h);
                        return b
                    }().join(","), f.type) {
                        case "popup":
                            ! function() {
                                var b, d, h, l, n, o;
                                return e("authorized", function(a) {
                                    return function(a) {
                                        return a ? (i(), "function" == typeof f.success ? f.success() : void 0) : "function" == typeof f.error ? f.error() : void 0
                                    }
                                }(this)), d = a.screenX + (a.innerWidth - 550) / 2, o = a.screenY + (a.innerHeight - 725) / 2, h = null != (n = /^[a-z]+:\/\/[^\/]*/.exec(s)) ? n[0] : void 0, b = a.open(k({
                                    return_url: h,
                                    callback_method: "postMessage",
                                    scope: m,
                                    expiration: f.expiration,
                                    name: f.name
                                }), "trello", "width=550,height=725,left=" + d + ",top=" + o), l = function(d) {
                                    var e;
                                    d.origin === j && d.source === b && (null != (e = d.source) && e.close(), w = null != d.data && /[0-9a-f]{64}/.test(d.data) ? d.data : null, "function" == typeof a.removeEventListener && a.removeEventListener("message", l, !1), c("authorized", g.authorized()))
                                }, "function" == typeof a.addEventListener ? a.addEventListener("message", l, !1) : void 0
                            }();
                            break;
                        default:
                            a.location = k({
                                redirect_uri: s.href,
                                callback_method: "fragment",
                                scope: m,
                                expiration: f.expiration,
                                name: f.name
                            })
                    }
                },
                addCard: function(b, c) {
                    var e, f;
                    return e = {
                        mode: "popup",
                        source: p || a.location.host
                    }, f = function(c) {
                        var f, g, h;
                        return g = function(b) {
                            var d;
                            a.removeEventListener("message", g);
                            try {
                                return d = JSON.parse(b.data), d.success ? c(null, d.card) : c(Error(d.error))
                            } catch (e) {}
                        }, "function" == typeof a.addEventListener && a.addEventListener("message", g, !1), f = a.screenX + (a.outerWidth - 500) / 2, h = a.screenY + (a.outerHeight - 600) / 2, a.open(n + "/add-card?" + d.param(d.extend(e, b)), "trello", "width=500,height=600,left=" + f + ",top=" + h)
                    }, null != c ? f(c) : a.Promise ? new Promise(function(a, b) {
                        return f(function(c, d) {
                            return c ? b(c) : a(d)
                        })
                    }) : f(function() {})
                }
            }, q = ["GET", "PUT", "POST", "DELETE"], i = function(a) {
                return g[a.toLowerCase()] = function() {
                    return this.rest.apply(this, [a].concat(h.call(arguments)))
                }
            }, m = 0, o = q.length; o > m; m++) v = q[m], i(v);
            for (g.del = g["delete"], v = "actions cards checklists boards lists members organizations lists".split(" "), m = function(a) {
                return g[a] = {
                    get: function(b, c, d, e) {
                        return g.get(a + "/" + b, c, d, e)
                    }
                }
            }, o = 0, q = v.length; q > o; o++) i = v[o], m(i);
            a.Trello = g, k = function(a) {
                return j + "/" + x + "/authorize?" + d.param(d.extend({
                    response_type: "token",
                    key: p
                }, a))
            }, t = function(a) {
                var c, d, e;
                return d = a[0], c = a[1], e = a[2], a = a[3], b(c) && (a = e, e = c, c = {}), d = d.replace(/^\/*/, ""), [d, c, e, a]
            }, r = a.localStorage, null != r ? (u = function(a) {
                return r["trello_" + a]
            }, y = function(a, b) {
                if (null === b) return delete r["trello_" + a];
                try {
                    return r["trello_" + a] = b
                } catch (c) {}
            }) : u = y = function() {}
        }, a = {}, d = {}, e = function(b, c) {
            return null != d[b] ? c(d[b]) : (null != a[b] ? a[b] : a[b] = []).push(c)
        }, c = function(b, c) {
            var e, f, g, h;
            if (d[b] = c, a[b])
                for (f = a[b], delete a[b], g = 0, h = f.length; h > g; g++)(e = f[g])(c)
        }, b = function(a) {
            return "function" == typeof a
        }, f(window, jQuery, g)
    }(), String.prototype.score = function(a, b) {
    if (this === a) return 1;
    if ("" === a) return 0;
    var c, d, e = 0,
        f = this.toLowerCase(),
        g = this.length,
        h = a.toLowerCase(),
        i = a.length;
    c = 0;
    var j, k, l = 1;
    if (b && (j = 1 - b), b)
        for (k = 0; i > k; k += 1) d = f.indexOf(h[k], c), -1 === d ? l += j : (c === d ? c = .7 : (c = .1, " " === this[d - 1] && (c += .8)), this[d] === a[k] && (c += .1), e += c, c = d + 1);
    else
        for (k = 0; i > k; k += 1) {
            if (d = f.indexOf(h[k], c), -1 === d) return 0;
            c === d ? c = .7 : (c = .1, " " === this[d - 1] && (c += .8)), this[d] === a[k] && (c += .1), e += c, c = d + 1
        }
    return e = .5 * (e / g + e / i) / l, h[0] === f[0] && .85 > e && (e += .15), e
},
    function() {
        function a(a, b, c) {
            switch (c.length) {
                case 0:
                    return a.call(b);
                case 1:
                    return a.call(b, c[0]);
                case 2:
                    return a.call(b, c[0], c[1]);
                case 3:
                    return a.call(b, c[0], c[1], c[2])
            }
            return a.apply(b, c)
        }

        function b(a, b, c, d) {
            for (var e = -1, f = null == a ? 0 : a.length; ++e < f;) {
                var g = a[e];
                b(d, g, c(g), a)
            }
            return d
        }

        function c(a, b) {
            for (var c = -1, d = null == a ? 0 : a.length; ++c < d && !1 !== b(a[c], c, a););
            return a
        }

        function d(a, b) {
            for (var c = null == a ? 0 : a.length; c-- && !1 !== b(a[c], c, a););
            return a
        }

        function e(a, b) {
            for (var c = -1, d = null == a ? 0 : a.length; ++c < d;)
                if (!b(a[c], c, a)) return !1;
            return !0
        }

        function f(a, b) {
            for (var c = -1, d = null == a ? 0 : a.length, e = 0, f = []; ++c < d;) {
                var g = a[c];
                b(g, c, a) && (f[e++] = g)
            }
            return f
        }

        function g(a, b) {
            return !(null == a || !a.length) && -1 < p(a, b, 0)
        }

        function h(a, b, c) {
            for (var d = -1, e = null == a ? 0 : a.length; ++d < e;)
                if (c(b, a[d])) return !0;
            return !1
        }

        function i(a, b) {
            for (var c = -1, d = null == a ? 0 : a.length, e = Array(d); ++c < d;) e[c] = b(a[c], c, a);
            return e
        }

        function j(a, b) {
            for (var c = -1, d = b.length, e = a.length; ++c < d;) a[e + c] = b[c];
            return a
        }

        function k(a, b, c, d) {
            var e = -1,
                f = null == a ? 0 : a.length;
            for (d && f && (c = a[++e]); ++e < f;) c = b(c, a[e], e, a);
            return c
        }

        function l(a, b, c, d) {
            var e = null == a ? 0 : a.length;
            for (d && e && (c = a[--e]); e--;) c = b(c, a[e], e, a);
            return c
        }

        function m(a, b) {
            for (var c = -1, d = null == a ? 0 : a.length; ++c < d;)
                if (b(a[c], c, a)) return !0;
            return !1
        }

        function n(a, b, c) {
            var d;
            return c(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }

        function o(a, b, c, d) {
            var e = a.length;
            for (c += d ? 1 : -1; d ? c-- : ++c < e;)
                if (b(a[c], c, a)) return c;
            return -1
        }

        function p(a, b, c) {
            if (b === b) a: {
                --c;
                for (var d = a.length; ++c < d;)
                    if (a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            } else a = o(a, r, c);
            return a
        }

        function q(a, b, c, d) {
            --c;
            for (var e = a.length; ++c < e;)
                if (d(a[c], b)) return c;
            return -1
        }

        function r(a) {
            return a !== a
        }

        function s(a, b) {
            var c = null == a ? 0 : a.length;
            return c ? x(a, b) / c : P
        }

        function t(a) {
            return function(b) {
                return null == b ? N : b[a]
            }
        }

        function u(a) {
            return function(b) {
                return null == a ? N : a[b]
            }
        }

        function v(a, b, c, d, e) {
            return e(a, function(a, e, f) {
                c = d ? (d = !1, a) : b(c, a, e, f)
            }), c
        }

        function w(a, b) {
            var c = a.length;
            for (a.sort(b); c--;) a[c] = a[c].c;
            return a
        }

        function x(a, b) {
            for (var c, d = -1, e = a.length; ++d < e;) {
                var f = b(a[d]);
                f !== N && (c = c === N ? f : c + f)
            }
            return c
        }

        function y(a, b) {
            for (var c = -1, d = Array(a); ++c < a;) d[c] = b(c);
            return d
        }

        function z(a, b) {
            return i(b, function(b) {
                return [b, a[b]]
            })
        }

        function A(a) {
            return function(b) {
                return a(b)
            }
        }

        function B(a, b) {
            return i(b, function(b) {
                return a[b]
            })
        }

        function C(a, b) {
            return a.has(b)
        }

        function D(a, b) {
            for (var c = -1, d = a.length; ++c < d && -1 < p(b, a[c], 0););
            return c
        }

        function E(a, b) {
            for (var c = a.length; c-- && -1 < p(b, a[c], 0););
            return c
        }

        function F(a) {
            return "\\" + Ia[a]
        }

        function G(a) {
            var b = -1,
                c = Array(a.size);
            return a.forEach(function(a, d) {
                c[++b] = [d, a]
            }), c
        }

        function H(a, b) {
            return function(c) {
                return a(b(c))
            }
        }

        function I(a, b) {
            for (var c = -1, d = a.length, e = 0, f = []; ++c < d;) {
                var g = a[c];
                g !== b && "__lodash_placeholder__" !== g || (a[c] = "__lodash_placeholder__", f[e++] = c)
            }
            return f
        }

        function J(a) {
            var b = -1,
                c = Array(a.size);
            return a.forEach(function(a) {
                c[++b] = a
            }), c
        }

        function K(a) {
            var b = -1,
                c = Array(a.size);
            return a.forEach(function(a) {
                c[++b] = [a, a]
            }), c
        }

        function L(a) {
            if (Da.test(a)) {
                for (var b = Ba.lastIndex = 0; Ba.test(a);) ++b;
                a = b
            } else a = Za(a);
            return a
        }

        function M(a) {
            return Da.test(a) ? a.match(Ba) || [] : a.split("")
        }
        var N, O = 1 / 0,
            P = NaN,
            Q = [
                ["ary", 128],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", 32],
                ["partialRight", 64],
                ["rearg", 256]
            ],
            R = /\b__p\+='';/g,
            S = /\b(__p\+=)''\+/g,
            T = /(__e\(.*?\)|\b__t\))\+'';/g,
            U = /&(?:amp|lt|gt|quot|#39);/g,
            V = /[&<>"']/g,
            W = RegExp(U.source),
            X = RegExp(V.source),
            Y = /<%-([\s\S]+?)%>/g,
            Z = /<%([\s\S]+?)%>/g,
            $ = /<%=([\s\S]+?)%>/g,
            _ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            aa = /^\w*$/,
            ba = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            ca = /[\\^$.*+?()[\]{}|]/g,
            da = RegExp(ca.source),
            ea = /^\s+|\s+$/g,
            fa = /^\s+/,
            ga = /\s+$/,
            ha = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ia = /\{\n\/\* \[wrapped with (.+)\] \*/,
            ja = /,? & /,
            ka = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            la = /\\(\\)?/g,
            ma = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            na = /\w*$/,
            oa = /^[-+]0x[0-9a-f]+$/i,
            pa = /^0b[01]+$/i,
            qa = /^\[object .+?Constructor\]$/,
            ra = /^0o[0-7]+$/i,
            sa = /^(?:0|[1-9]\d*)$/,
            ta = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ua = /($^)/,
            va = /['\n\r\u2028\u2029\\]/g,
            wa = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
            xa = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + wa,
            ya = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
            za = RegExp("['’]", "g"),
            Aa = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
            Ba = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + ya + wa, "g"),
            Ca = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", xa].join("|"), "g"),
            Da = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
            Ea = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Fa = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
            Ga = {};
        Ga["[object Float32Array]"] = Ga["[object Float64Array]"] = Ga["[object Int8Array]"] = Ga["[object Int16Array]"] = Ga["[object Int32Array]"] = Ga["[object Uint8Array]"] = Ga["[object Uint8ClampedArray]"] = Ga["[object Uint16Array]"] = Ga["[object Uint32Array]"] = !0, Ga["[object Arguments]"] = Ga["[object Array]"] = Ga["[object ArrayBuffer]"] = Ga["[object Boolean]"] = Ga["[object DataView]"] = Ga["[object Date]"] = Ga["[object Error]"] = Ga["[object Function]"] = Ga["[object Map]"] = Ga["[object Number]"] = Ga["[object Object]"] = Ga["[object RegExp]"] = Ga["[object Set]"] = Ga["[object String]"] = Ga["[object WeakMap]"] = !1;
        var Ha = {};
        Ha["[object Arguments]"] = Ha["[object Array]"] = Ha["[object ArrayBuffer]"] = Ha["[object DataView]"] = Ha["[object Boolean]"] = Ha["[object Date]"] = Ha["[object Float32Array]"] = Ha["[object Float64Array]"] = Ha["[object Int8Array]"] = Ha["[object Int16Array]"] = Ha["[object Int32Array]"] = Ha["[object Map]"] = Ha["[object Number]"] = Ha["[object Object]"] = Ha["[object RegExp]"] = Ha["[object Set]"] = Ha["[object String]"] = Ha["[object Symbol]"] = Ha["[object Uint8Array]"] = Ha["[object Uint8ClampedArray]"] = Ha["[object Uint16Array]"] = Ha["[object Uint32Array]"] = !0, Ha["[object Error]"] = Ha["[object Function]"] = Ha["[object WeakMap]"] = !1;
        var Ia = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Ja = parseFloat,
            Ka = parseInt,
            La = "object" == typeof global && global && global.Object === Object && global,
            Ma = "object" == typeof self && self && self.Object === Object && self,
            Na = La || Ma || Function("return this")(),
            Oa = "object" == typeof exports && exports && !exports.nodeType && exports,
            Pa = Oa && "object" == typeof module && module && !module.nodeType && module,
            Qa = Pa && Pa.exports === Oa,
            Ra = Qa && La.process,
            Sa = function() {
                try {
                    var a = Pa && Pa.f && Pa.f("util").types;
                    return a ? a : Ra && Ra.binding && Ra.binding("util")
                } catch (a) {}
            }(),
            Ta = Sa && Sa.isArrayBuffer,
            Ua = Sa && Sa.isDate,
            Va = Sa && Sa.isMap,
            Wa = Sa && Sa.isRegExp,
            Xa = Sa && Sa.isSet,
            Ya = Sa && Sa.isTypedArray,
            Za = t("length"),
            $a = u({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }),
            _a = u({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }),
            ab = u({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }),
            bb = function cb(u) {
                function wa(a) {
                    if (qe(a) && !eh(a) && !(a instanceof Ba)) {
                        if (a instanceof ya) return a;
                        if (ef.call(a, "__wrapped__")) return Nd(a)
                    }
                    return new ya(a)
                }

                function xa() {}

                function ya(a, b) {
                    this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!b, this.__index__ = 0, this.__values__ = N
                }

                function Ba(a) {
                    this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                }

                function Ia(a) {
                    var b = -1,
                        c = null == a ? 0 : a.length;
                    for (this.clear(); ++b < c;) {
                        var d = a[b];
                        this.set(d[0], d[1])
                    }
                }

                function La(a) {
                    var b = -1,
                        c = null == a ? 0 : a.length;
                    for (this.clear(); ++b < c;) {
                        var d = a[b];
                        this.set(d[0], d[1])
                    }
                }

                function Ma(a) {
                    var b = -1,
                        c = null == a ? 0 : a.length;
                    for (this.clear(); ++b < c;) {
                        var d = a[b];
                        this.set(d[0], d[1])
                    }
                }

                function Oa(a) {
                    var b = -1,
                        c = null == a ? 0 : a.length;
                    for (this.__data__ = new Ma; ++b < c;) this.add(a[b])
                }

                function Pa(a) {
                    this.size = (this.__data__ = new La(a)).size
                }

                function Ra(a, b) {
                    var c, d = eh(a),
                        e = !d && dh(a),
                        f = !d && !e && gh(a),
                        g = !d && !e && !f && lh(a),
                        e = (d = d || e || f || g) ? y(a.length, $e) : [],
                        h = e.length;
                    for (c in a) !b && !ef.call(a, c) || d && ("length" == c || f && ("offset" == c || "parent" == c) || g && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ad(c, h)) || e.push(c);
                    return e
                }

                function Sa(a) {
                    var b = a.length;
                    return b ? a[ec(0, b - 1)] : N
                }

                function Za(a, b) {
                    return Jd(Ic(a), mb(b, 0, a.length))
                }

                function db(a) {
                    return Jd(Ic(a))
                }

                function eb(a, b, c) {
                    (c === N || ie(a[b], c)) && (c !== N || b in a) || kb(a, b, c)
                }

                function fb(a, b, c) {
                    var d = a[b];
                    ef.call(a, b) && ie(d, c) && (c !== N || b in a) || kb(a, b, c)
                }

                function gb(a, b) {
                    for (var c = a.length; c--;)
                        if (ie(a[c][0], b)) return c;
                    return -1
                }

                function hb(a, b, c, d) {
                    return dg(a, function(a, e, f) {
                        b(d, a, c(a), f)
                    }), d
                }

                function ib(a, b) {
                    return a && Jc(b, Ee(b), a)
                }

                function jb(a, b) {
                    return a && Jc(b, Fe(b), a)
                }

                function kb(a, b, c) {
                    "__proto__" == b && xf ? xf(a, b, {
                        configurable: !0,
                        enumerable: !0,
                        value: c,
                        writable: !0
                    }) : a[b] = c
                }

                function lb(a, b) {
                    for (var c = -1, d = b.length, e = Te(d), f = null == a; ++c < d;) e[c] = f ? N : Ce(a, b[c]);
                    return e
                }

                function mb(a, b, c) {
                    return a === a && (c !== N && (a = c >= a ? a : c), b !== N && (a = a >= b ? a : b)), a
                }

                function nb(a, b, d, e, f, g) {
                    var h, i = 1 & b,
                        j = 2 & b,
                        k = 4 & b;
                    if (d && (h = f ? d(a, e, f, g) : d(a)), h !== N) return h;
                    if (!pe(a)) return a;
                    if (e = eh(a)) {
                        if (h = wd(a), !i) return Ic(a, h)
                    } else {
                        var l = og(a),
                            m = "[object Function]" == l || "[object GeneratorFunction]" == l;
                        if (gh(a)) return Cc(a, i);
                        if ("[object Object]" == l || "[object Arguments]" == l || m && !f) {
                            if (h = j || m ? {} : xd(a), !i) return j ? Lc(a, jb(h, a)) : Kc(a, ib(h, a))
                        } else {
                            if (!Ha[l]) return f ? a : {};
                            h = yd(a, l, i)
                        }
                    }
                    if (g || (g = new Pa), f = g.get(a)) return f;
                    if (g.set(a, h), kh(a)) return a.forEach(function(c) {
                        h.add(nb(c, b, d, c, a, g))
                    }), h;
                    if (ih(a)) return a.forEach(function(c, e) {
                        h.set(e, nb(c, b, d, e, a, g))
                    }), h;
                    var j = k ? j ? od : nd : j ? Fe : Ee,
                        n = e ? N : j(a);
                    return c(n || a, function(c, e) {
                        n && (e = c, c = a[e]), fb(h, e, nb(c, b, d, e, a, g))
                    }), h
                }

                function ob(a) {
                    var b = Ee(a);
                    return function(c) {
                        return pb(c, a, b)
                    }
                }

                function pb(a, b, c) {
                    var d = c.length;
                    if (null == a) return !d;
                    for (a = Ye(a); d--;) {
                        var e = c[d],
                            f = b[e],
                            g = a[e];
                        if (g === N && !(e in a) || !f(g)) return !1
                    }
                    return !0
                }

                function qb(a, b, c) {
                    if ("function" != typeof a) throw new _e("Expected a function");
                    return rg(function() {
                        a.apply(N, c)
                    }, b)
                }

                function rb(a, b, c, d) {
                    var e = -1,
                        f = g,
                        j = !0,
                        k = a.length,
                        l = [],
                        m = b.length;
                    if (!k) return l;
                    c && (b = i(b, A(c))), d ? (f = h, j = !1) : 200 <= b.length && (f = C, j = !1, b = new Oa(b));
                    a: for (; ++e < k;) {
                        var n = a[e],
                            o = null == c ? n : c(n),
                            n = d || 0 !== n ? n : 0;
                        if (j && o === o) {
                            for (var p = m; p--;)
                                if (b[p] === o) continue a;
                            l.push(n)
                        } else f(b, o, d) || l.push(n)
                    }
                    return l
                }

                function sb(a, b) {
                    var c = !0;
                    return dg(a, function(a, d, e) {
                        return c = !!b(a, d, e)
                    }), c
                }

                function tb(a, b, c) {
                    for (var d = -1, e = a.length; ++d < e;) {
                        var f = a[d],
                            g = b(f);
                        if (null != g && (h === N ? g === g && !ue(g) : c(g, h))) var h = g,
                            i = f
                    }
                    return i
                }

                function ub(a, b) {
                    var c = [];
                    return dg(a, function(a, d, e) {
                        b(a, d, e) && c.push(a)
                    }), c
                }

                function vb(a, b, c, d, e) {
                    var f = -1,
                        g = a.length;
                    for (c || (c = zd), e || (e = []); ++f < g;) {
                        var h = a[f];
                        b > 0 && c(h) ? b > 1 ? vb(h, b - 1, c, d, e) : j(e, h) : d || (e[e.length] = h)
                    }
                    return e
                }

                function wb(a, b) {
                    return a && fg(a, b, Ee)
                }

                function xb(a, b) {
                    return a && gg(a, b, Ee)
                }

                function yb(a, b) {
                    return f(b, function(b) {
                        return me(a[b])
                    })
                }

                function zb(a, b) {
                    b = Ac(b, a);
                    for (var c = 0, d = b.length; null != a && d > c;) a = a[Kd(b[c++])];
                    return c && c == d ? a : N
                }

                function Ab(a, b, c) {
                    return b = b(a), eh(a) ? b : j(b, c(a))
                }

                function Bb(a) {
                    if (null == a) a = a === N ? "[object Undefined]" : "[object Null]";
                    else if (wf && wf in Ye(a)) {
                        var b = ef.call(a, wf),
                            c = a[wf];
                        try {
                            a[wf] = N;
                            var d = !0
                        } catch (a) {}
                        var e = hf.call(a);
                        d && (b ? a[wf] = c : delete a[wf]), a = e
                    } else a = hf.call(a);
                    return a
                }

                function Cb(a, b) {
                    return a > b
                }

                function Db(a, b) {
                    return null != a && ef.call(a, b)
                }

                function Eb(a, b) {
                    return null != a && b in Ye(a)
                }

                function Fb(a, b, c) {
                    for (var d = c ? h : g, e = a[0].length, f = a.length, j = f, k = Te(f), l = 1 / 0, m = []; j--;) {
                        var n = a[j];
                        j && b && (n = i(n, A(b))), l = Jf(n.length, l), k[j] = !c && (b || e >= 120 && 120 <= n.length) ? new Oa(j && n) : N
                    }
                    var n = a[0],
                        o = -1,
                        p = k[0];
                    a: for (; ++o < e && m.length < l;) {
                        var q = n[o],
                            r = b ? b(q) : q,
                            q = c || 0 !== q ? q : 0;
                        if (p ? !C(p, r) : !d(m, r, c)) {
                            for (j = f; --j;) {
                                var s = k[j];
                                if (s ? !C(s, r) : !d(a[j], r, c)) continue a
                            }
                            p && p.push(r), m.push(q)
                        }
                    }
                    return m
                }

                function Gb(a, b, c) {
                    var d = {};
                    return wb(a, function(a, e, f) {
                        b(d, c(a), e, f)
                    }), d
                }

                function Hb(b, c, d) {
                    return c = Ac(c, b), b = 2 > c.length ? b : zb(b, lc(c, 0, -1)), c = null == b ? b : b[Kd(Sd(c))], null == c ? N : a(c, b, d)
                }

                function Ib(a) {
                    return qe(a) && "[object Arguments]" == Bb(a)
                }

                function Jb(a) {
                    return qe(a) && "[object ArrayBuffer]" == Bb(a)
                }

                function Kb(a) {
                    return qe(a) && "[object Date]" == Bb(a)
                }

                function Lb(a, b, c, d, e) {
                    if (a === b) b = !0;
                    else if (null == a || null == b || !qe(a) && !qe(b)) b = a !== a && b !== b;
                    else a: {
                            var f = eh(a),
                                g = eh(b),
                                h = f ? "[object Array]" : og(a),
                                i = g ? "[object Array]" : og(b),
                                h = "[object Arguments]" == h ? "[object Object]" : h,
                                i = "[object Arguments]" == i ? "[object Object]" : i,
                                j = "[object Object]" == h,
                                g = "[object Object]" == i;
                            if ((i = h == i) && gh(a)) {
                                if (!gh(b)) {
                                    b = !1;
                                    break a
                                }
                                f = !0, j = !1
                            }
                            if (i && !j) e || (e = new Pa), b = f || lh(a) ? kd(a, b, c, d, Lb, e) : ld(a, b, h, c, d, Lb, e);
                            else {
                                if (!(1 & c) && (f = j && ef.call(a, "__wrapped__"), h = g && ef.call(b, "__wrapped__"), f || h)) {
                                    a = f ? a.value() : a, b = h ? b.value() : b, e || (e = new Pa), b = Lb(a, b, c, d, e);
                                    break a
                                }
                                if (i) b: if (e || (e = new Pa), f = 1 & c, h = nd(a), g = h.length, i = nd(b).length, g == i || f) {
                                    for (j = g; j--;) {
                                        var k = h[j];
                                        if (!(f ? k in b : ef.call(b, k))) {
                                            b = !1;
                                            break b
                                        }
                                    }
                                    if ((i = e.get(a)) && e.get(b)) b = i == b;
                                    else {
                                        i = !0, e.set(a, b), e.set(b, a);
                                        for (var l = f; ++j < g;) {
                                            var k = h[j],
                                                m = a[k],
                                                n = b[k];
                                            if (d) var o = f ? d(n, m, k, b, a, e) : d(m, n, k, a, b, e);
                                            if (o === N ? m !== n && !Lb(m, n, c, d, e) : !o) {
                                                i = !1;
                                                break
                                            }
                                            l || (l = "constructor" == k)
                                        }
                                        i && !l && (c = a.constructor, d = b.constructor, c != d && "constructor" in a && "constructor" in b && !("function" == typeof c && c instanceof c && "function" == typeof d && d instanceof d) && (i = !1)), e["delete"](a), e["delete"](b), b = i
                                    }
                                } else b = !1;
                                else b = !1
                            }
                        }
                    return b
                }

                function Mb(a) {
                    return qe(a) && "[object Map]" == og(a)
                }

                function Nb(a, b, c, d) {
                    var e = c.length,
                        f = e,
                        g = !d;
                    if (null == a) return !f;
                    for (a = Ye(a); e--;) {
                        var h = c[e];
                        if (g && h[2] ? h[1] !== a[h[0]] : !(h[0] in a)) return !1
                    }
                    for (; ++e < f;) {
                        var h = c[e],
                            i = h[0],
                            j = a[i],
                            k = h[1];
                        if (g && h[2]) {
                            if (j === N && !(i in a)) return !1
                        } else {
                            if (h = new Pa, d) var l = d(j, k, i, a, b, h);
                            if (l === N ? !Lb(k, j, 3, d, h) : !l) return !1
                        }
                    }
                    return !0
                }

                function Ob(a) {
                    return !(!pe(a) || gf && gf in a) && (me(a) ? lf : qa).test(Ld(a))
                }

                function Pb(a) {
                    return qe(a) && "[object RegExp]" == Bb(a)
                }

                function Qb(a) {
                    return qe(a) && "[object Set]" == og(a)
                }

                function Rb(a) {
                    return qe(a) && oe(a.length) && !!Ga[Bb(a)]
                }

                function Sb(a) {
                    return "function" == typeof a ? a : null == a ? Me : "object" == typeof a ? eh(a) ? Xb(a[0], a[1]) : Wb(a) : Qe(a)
                }

                function Tb(a) {
                    if (!Ed(a)) return Hf(a);
                    var b, c = [];
                    for (b in Ye(a)) ef.call(a, b) && "constructor" != b && c.push(b);
                    return c
                }

                function Ub(a, b) {
                    return b > a
                }

                function Vb(a, b) {
                    var c = -1,
                        d = je(a) ? Te(a.length) : [];
                    return dg(a, function(a, e, f) {
                        d[++c] = b(a, e, f)
                    }), d
                }

                function Wb(a) {
                    var b = td(a);
                    return 1 == b.length && b[0][2] ? Fd(b[0][0], b[0][1]) : function(c) {
                        return c === a || Nb(c, a, b)
                    }
                }

                function Xb(a, b) {
                    return Cd(a) && b === b && !pe(b) ? Fd(Kd(a), b) : function(c) {
                        var d = Ce(c, a);
                        return d === N && d === b ? De(c, a) : Lb(b, d, 3)
                    }
                }

                function Yb(a, b, c, d, e) {
                    a !== b && fg(b, function(f, g) {
                        if (pe(f)) {
                            e || (e = new Pa);
                            var h = e,
                                i = "__proto__" == g ? N : a[g],
                                j = "__proto__" == g ? N : b[g],
                                k = h.get(j);
                            if (k) eb(a, g, k);
                            else {
                                var k = d ? d(i, j, g + "", a, b, h) : N,
                                    l = k === N;
                                if (l) {
                                    var m = eh(j),
                                        n = !m && gh(j),
                                        o = !m && !n && lh(j),
                                        k = j;
                                    m || n || o ? eh(i) ? k = i : ke(i) ? k = Ic(i) : n ? (l = !1, k = Cc(j, !0)) : o ? (l = !1, k = Ec(j, !0)) : k = [] : se(j) || dh(j) ? (k = i, dh(i) ? k = Ae(i) : (!pe(i) || c && me(i)) && (k = xd(j))) : l = !1
                                }
                                l && (h.set(j, k), Yb(k, j, c, d, h), h["delete"](j)), eb(a, g, k)
                            }
                        } else h = d ? d("__proto__" == g ? N : a[g], f, g + "", a, b, e) : N, h === N && (h = f), eb(a, g, h)
                    }, Fe)
                }

                function Zb(a, b) {
                    var c = a.length;
                    return c ? (b += 0 > b ? c : 0, Ad(b, c) ? a[b] : N) : void 0
                }

                function $b(a, b, c) {
                    var d = -1;
                    return b = i(b.length ? b : [Me], A(rd())), a = Vb(a, function(a) {
                        return {
                            a: i(b, function(b) {
                                return b(a)
                            }),
                            b: ++d,
                            c: a
                        }
                    }), w(a, function(a, b) {
                        var d;
                        a: {
                            d = -1;
                            for (var e = a.a, f = b.a, g = e.length, h = c.length; ++d < g;) {
                                var i = Fc(e[d], f[d]);
                                if (i) {
                                    d = d >= h ? i : i * ("desc" == c[d] ? -1 : 1);
                                    break a
                                }
                            }
                            d = a.b - b.b
                        }
                        return d
                    })
                }

                function _b(a, b) {
                    return ac(a, b, function(b, c) {
                        return De(a, c)
                    })
                }

                function ac(a, b, c) {
                    for (var d = -1, e = b.length, f = {}; ++d < e;) {
                        var g = b[d],
                            h = zb(a, g);
                        c(h, g) && jc(f, Ac(g, a), h)
                    }
                    return f
                }

                function bc(a) {
                    return function(b) {
                        return zb(b, a)
                    }
                }

                function cc(a, b, c, d) {
                    var e = d ? q : p,
                        f = -1,
                        g = b.length,
                        h = a;
                    for (a === b && (b = Ic(b)), c && (h = i(a, A(c))); ++f < g;)
                        for (var j = 0, k = b[f], k = c ? c(k) : k; - 1 < (j = e(h, k, j, d));) h !== a && tf.call(h, j, 1), tf.call(a, j, 1);
                    return a
                }

                function dc(a, b) {
                    for (var c = a ? b.length : 0, d = c - 1; c--;) {
                        var e = b[c];
                        if (c == d || e !== f) {
                            var f = e;
                            Ad(e) ? tf.call(a, e, 1) : tc(a, e)
                        }
                    }
                }

                function ec(a, b) {
                    return a + Cf(Mf() * (b - a + 1))
                }

                function fc(a, b) {
                    var c = "";
                    if (!a || 1 > b || b > 9007199254740991) return c;
                    do b % 2 && (c += a), (b = Cf(b / 2)) && (a += a); while (b);
                    return c
                }

                function gc(a, b) {
                    return sg(Gd(a, b, Me), a + "")
                }

                function hc(a) {
                    return Sa(He(a))
                }

                function ic(a, b) {
                    var c = He(a);
                    return Jd(c, mb(b, 0, c.length))
                }

                function jc(a, b, c, d) {
                    if (!pe(a)) return a;
                    b = Ac(b, a);
                    for (var e = -1, f = b.length, g = f - 1, h = a; null != h && ++e < f;) {
                        var i = Kd(b[e]),
                            j = c;
                        if (e != g) {
                            var k = h[i],
                                j = d ? d(k, i, h) : N;
                            j === N && (j = pe(k) ? k : Ad(b[e + 1]) ? [] : {})
                        }
                        fb(h, i, j), h = h[i]
                    }
                    return a
                }

                function kc(a) {
                    return Jd(He(a))
                }

                function lc(a, b, c) {
                    var d = -1,
                        e = a.length;
                    for (0 > b && (b = -b > e ? 0 : e + b), c = c > e ? e : c, 0 > c && (c += e), e = b > c ? 0 : c - b >>> 0, b >>>= 0, c = Te(e); ++d < e;) c[d] = a[d + b];
                    return c
                }

                function mc(a, b) {
                    var c;
                    return dg(a, function(a, d, e) {
                        return c = b(a, d, e), !c
                    }), !!c
                }

                function nc(a, b, c) {
                    var d = 0,
                        e = null == a ? d : a.length;
                    if ("number" == typeof b && b === b && 2147483647 >= e) {
                        for (; e > d;) {
                            var f = d + e >>> 1,
                                g = a[f];
                            null !== g && !ue(g) && (c ? b >= g : b > g) ? d = f + 1 : e = f
                        }
                        return e
                    }
                    return oc(a, b, Me, c)
                }

                function oc(a, b, c, d) {
                    b = c(b);
                    for (var e = 0, f = null == a ? 0 : a.length, g = b !== b, h = null === b, i = ue(b), j = b === N; f > e;) {
                        var k = Cf((e + f) / 2),
                            l = c(a[k]),
                            m = l !== N,
                            n = null === l,
                            o = l === l,
                            p = ue(l);
                        (g ? d || o : j ? o && (d || m) : h ? o && m && (d || !n) : i ? o && m && !n && (d || !p) : n || p ? 0 : d ? b >= l : b > l) ? e = k + 1: f = k
                    }
                    return Jf(f, 4294967294)
                }

                function pc(a, b) {
                    for (var c = -1, d = a.length, e = 0, f = []; ++c < d;) {
                        var g = a[c],
                            h = b ? b(g) : g;
                        if (!c || !ie(h, i)) {
                            var i = h;
                            f[e++] = 0 === g ? 0 : g
                        }
                    }
                    return f
                }

                function qc(a) {
                    return "number" == typeof a ? a : ue(a) ? P : +a
                }

                function rc(a) {
                    if ("string" == typeof a) return a;
                    if (eh(a)) return i(a, rc) + "";
                    if (ue(a)) return bg ? bg.call(a) : "";
                    var b = a + "";
                    return "0" == b && 1 / a == -O ? "-0" : b
                }

                function sc(a, b, c) {
                    var d = -1,
                        e = g,
                        f = a.length,
                        i = !0,
                        j = [],
                        k = j;
                    if (c) i = !1, e = h;
                    else if (f >= 200) {
                        if (e = b ? null : kg(a)) return J(e);
                        i = !1, e = C, k = new Oa
                    } else k = b ? [] : j;
                    a: for (; ++d < f;) {
                        var l = a[d],
                            m = b ? b(l) : l,
                            l = c || 0 !== l ? l : 0;
                        if (i && m === m) {
                            for (var n = k.length; n--;)
                                if (k[n] === m) continue a;
                            b && k.push(m), j.push(l)
                        } else e(k, m, c) || (k !== j && k.push(m), j.push(l))
                    }
                    return j
                }

                function tc(a, b) {
                    return b = Ac(b, a), a = 2 > b.length ? a : zb(a, lc(b, 0, -1)), null == a || delete a[Kd(Sd(b))]
                }

                function uc(a, b, c, d) {
                    for (var e = a.length, f = d ? e : -1;
                         (d ? f-- : ++f < e) && b(a[f], f, a););
                    return c ? lc(a, d ? 0 : f, d ? f + 1 : e) : lc(a, d ? f + 1 : 0, d ? e : f)
                }

                function vc(a, b) {
                    var c = a;
                    return c instanceof Ba && (c = c.value()), k(b, function(a, b) {
                        return b.func.apply(b.thisArg, j([a], b.args))
                    }, c)
                }

                function wc(a, b, c) {
                    var d = a.length;
                    if (2 > d) return d ? sc(a[0]) : [];
                    for (var e = -1, f = Te(d); ++e < d;)
                        for (var g = a[e], h = -1; ++h < d;) h != e && (f[e] = rb(f[e] || g, a[h], b, c));
                    return sc(vb(f, 1), b, c)
                }

                function xc(a, b, c) {
                    for (var d = -1, e = a.length, f = b.length, g = {}; ++d < e;) c(g, a[d], f > d ? b[d] : N);
                    return g
                }

                function yc(a) {
                    return ke(a) ? a : []
                }

                function zc(a) {
                    return "function" == typeof a ? a : Me
                }

                function Ac(a, b) {
                    return eh(a) ? a : Cd(a, b) ? [a] : tg(Be(a))
                }

                function Bc(a, b, c) {
                    var d = a.length;
                    return c = c === N ? d : c, !b && c >= d ? a : lc(a, b, c)
                }

                function Cc(a, b) {
                    if (b) return a.slice();
                    var c = a.length,
                        c = pf ? pf(c) : new a.constructor(c);
                    return a.copy(c), c
                }

                function Dc(a) {
                    var b = new a.constructor(a.byteLength);
                    return new of(b).set(new of(a)), b
                }

                function Ec(a, b) {
                    return new a.constructor(b ? Dc(a.buffer) : a.buffer, a.byteOffset, a.length)
                }

                function Fc(a, b) {
                    if (a !== b) {
                        var c = a !== N,
                            d = null === a,
                            e = a === a,
                            f = ue(a),
                            g = b !== N,
                            h = null === b,
                            i = b === b,
                            j = ue(b);
                        if (!h && !j && !f && a > b || f && g && i && !h && !j || d && g && i || !c && i || !e) return 1;
                        if (!d && !f && !j && b > a || j && c && e && !d && !f || h && c && e || !g && e || !i) return -1
                    }
                    return 0
                }

                function Gc(a, b, c, d) {
                    var e = -1,
                        f = a.length,
                        g = c.length,
                        h = -1,
                        i = b.length,
                        j = If(f - g, 0),
                        k = Te(i + j);
                    for (d = !d; ++h < i;) k[h] = b[h];
                    for (; ++e < g;)(d || f > e) && (k[c[e]] = a[e]);
                    for (; j--;) k[h++] = a[e++];
                    return k
                }

                function Hc(a, b, c, d) {
                    var e = -1,
                        f = a.length,
                        g = -1,
                        h = c.length,
                        i = -1,
                        j = b.length,
                        k = If(f - h, 0),
                        l = Te(k + j);
                    for (d = !d; ++e < k;) l[e] = a[e];
                    for (k = e; ++i < j;) l[k + i] = b[i];
                    for (; ++g < h;)(d || f > e) && (l[k + c[g]] = a[e++]);
                    return l
                }

                function Ic(a, b) {
                    var c = -1,
                        d = a.length;
                    for (b || (b = Te(d)); ++c < d;) b[c] = a[c];
                    return b
                }

                function Jc(a, b, c, d) {
                    var e = !c;
                    c || (c = {});
                    for (var f = -1, g = b.length; ++f < g;) {
                        var h = b[f],
                            i = d ? d(c[h], a[h], h, c, a) : N;
                        i === N && (i = a[h]), e ? kb(c, h, i) : fb(c, h, i)
                    }
                    return c
                }

                function Kc(a, b) {
                    return Jc(a, mg(a), b)
                }

                function Lc(a, b) {
                    return Jc(a, ng(a), b)
                }

                function Mc(a, c) {
                    return function(d, e) {
                        var f = eh(d) ? b : hb,
                            g = c ? c() : {};
                        return f(d, a, rd(e, 2), g)
                    }
                }

                function Nc(a) {
                    return gc(function(b, c) {
                        var d = -1,
                            e = c.length,
                            f = e > 1 ? c[e - 1] : N,
                            g = e > 2 ? c[2] : N,
                            f = 3 < a.length && "function" == typeof f ? (e--, f) : N;
                        for (g && Bd(c[0], c[1], g) && (f = 3 > e ? N : f, e = 1), b = Ye(b); ++d < e;)(g = c[d]) && a(b, g, d, f);
                        return b
                    })
                }

                function Oc(a, b) {
                    return function(c, d) {
                        if (null == c) return c;
                        if (!je(c)) return a(c, d);
                        for (var e = c.length, f = b ? e : -1, g = Ye(c);
                             (b ? f-- : ++f < e) && !1 !== d(g[f], f, g););
                        return c
                    }
                }

                function Pc(a) {
                    return function(b, c, d) {
                        var e = -1,
                            f = Ye(b);
                        d = d(b);
                        for (var g = d.length; g--;) {
                            var h = d[a ? g : ++e];
                            if (!1 === c(f[h], h, f)) break
                        }
                        return b
                    }
                }

                function Qc(a, b, c) {
                    function d() {
                        return (this && this !== Na && this instanceof d ? f : a).apply(e ? c : this, arguments)
                    }
                    var e = 1 & b,
                        f = Tc(a);
                    return d
                }

                function Rc(a) {
                    return function(b) {
                        b = Be(b);
                        var c = Da.test(b) ? M(b) : N,
                            d = c ? c[0] : b.charAt(0);
                        return b = c ? Bc(c, 1).join("") : b.slice(1), d[a]() + b
                    }
                }

                function Sc(a) {
                    return function(b) {
                        return k(Ke(Je(b).replace(za, "")), a, "")
                    }
                }

                function Tc(a) {
                    return function() {
                        var b = arguments;
                        switch (b.length) {
                            case 0:
                                return new a;
                            case 1:
                                return new a(b[0]);
                            case 2:
                                return new a(b[0], b[1]);
                            case 3:
                                return new a(b[0], b[1], b[2]);
                            case 4:
                                return new a(b[0], b[1], b[2], b[3]);
                            case 5:
                                return new a(b[0], b[1], b[2], b[3], b[4]);
                            case 6:
                                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
                            case 7:
                                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6])
                        }
                        var c = cg(a.prototype),
                            b = a.apply(c, b);
                        return pe(b) ? b : c
                    }
                }

                function Uc(b, c, d) {
                    function e() {
                        for (var g = arguments.length, h = Te(g), i = g, j = qd(e); i--;) h[i] = arguments[i];
                        return i = 3 > g && h[0] !== j && h[g - 1] !== j ? [] : I(h, j), g -= i.length, d > g ? dd(b, c, Xc, e.placeholder, N, h, i, N, N, d - g) : a(this && this !== Na && this instanceof e ? f : b, this, h)
                    }
                    var f = Tc(b);
                    return e
                }

                function Vc(a) {
                    return function(b, c, d) {
                        var e = Ye(b);
                        if (!je(b)) {
                            var f = rd(c, 3);
                            b = Ee(b), c = function(a) {
                                return f(e[a], a, e)
                            }
                        }
                        return c = a(b, c, d), c > -1 ? e[f ? b[c] : c] : N
                    }
                }

                function Wc(a) {
                    return md(function(b) {
                        var c = b.length,
                            d = c,
                            e = ya.prototype.thru;
                        for (a && b.reverse(); d--;) {
                            var f = b[d];
                            if ("function" != typeof f) throw new _e("Expected a function");
                            if (e && !g && "wrapper" == pd(f)) var g = new ya([], !0)
                        }
                        for (d = g ? d : c; ++d < c;) var f = b[d],
                            e = pd(f),
                            h = "wrapper" == e ? lg(f) : N,
                            g = h && Dd(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? g[pd(h[0])].apply(g, h[3]) : 1 == f.length && Dd(f) ? g[e]() : g.thru(f);
                        return function() {
                            var a = arguments,
                                d = a[0];
                            if (g && 1 == a.length && eh(d)) return g.plant(d).value();
                            for (var e = 0, a = c ? b[e].apply(this, a) : d; ++e < c;) a = b[e].call(this, a);
                            return a
                        }
                    })
                }

                function Xc(a, b, c, d, e, f, g, h, i, j) {
                    function k() {
                        for (var r = arguments.length, s = Te(r), t = r; t--;) s[t] = arguments[t];
                        if (o) {
                            var u, v = qd(k),
                                t = s.length;
                            for (u = 0; t--;) s[t] === v && ++u
                        }
                        if (d && (s = Gc(s, d, e, o)), f && (s = Hc(s, f, g, o)), r -= u, o && j > r) return v = I(s, v), dd(a, b, Xc, k.placeholder, c, s, v, h, i, j - r);
                        if (v = m ? c : this, t = n ? v[a] : a, r = s.length, h) {
                            u = s.length;
                            for (var w = Jf(h.length, u), x = Ic(s); w--;) {
                                var y = h[w];
                                s[w] = Ad(y, u) ? x[y] : N
                            }
                        } else p && r > 1 && s.reverse();
                        return l && r > i && (s.length = i), this && this !== Na && this instanceof k && (t = q || Tc(t)), t.apply(v, s)
                    }
                    var l = 128 & b,
                        m = 1 & b,
                        n = 2 & b,
                        o = 24 & b,
                        p = 512 & b,
                        q = n ? N : Tc(a);
                    return k
                }

                function Yc(a, b) {
                    return function(c, d) {
                        return Gb(c, a, b(d))
                    }
                }

                function Zc(a, b) {
                    return function(c, d) {
                        var e;
                        if (c === N && d === N) return b;
                        if (c !== N && (e = c), d !== N) {
                            if (e === N) return d;
                            "string" == typeof c || "string" == typeof d ? (c = rc(c), d = rc(d)) : (c = qc(c), d = qc(d)), e = a(c, d)
                        }
                        return e
                    }
                }

                function $c(b) {
                    return md(function(c) {
                        return c = i(c, A(rd())), gc(function(d) {
                            var e = this;
                            return b(c, function(b) {
                                return a(b, e, d)
                            })
                        })
                    })
                }

                function _c(a, b) {
                    b = b === N ? " " : rc(b);
                    var c = b.length;
                    return 2 > c ? c ? fc(b, a) : b : (c = fc(b, Bf(a / L(b))), Da.test(b) ? Bc(M(c), 0, a).join("") : c.slice(0, a))
                }

                function ad(b, c, d, e) {
                    function f() {
                        for (var c = -1, i = arguments.length, j = -1, k = e.length, l = Te(k + i), m = this && this !== Na && this instanceof f ? h : b; ++j < k;) l[j] = e[j];
                        for (; i--;) l[j++] = arguments[++c];
                        return a(m, g ? d : this, l)
                    }
                    var g = 1 & c,
                        h = Tc(b);
                    return f
                }

                function bd(a) {
                    return function(b, c, d) {
                        d && "number" != typeof d && Bd(b, c, d) && (c = d = N), b = we(b), c === N ? (c = b, b = 0) : c = we(c), d = d === N ? c > b ? 1 : -1 : we(d);
                        var e = -1;
                        c = If(Bf((c - b) / (d || 1)), 0);
                        for (var f = Te(c); c--;) f[a ? c : ++e] = b, b += d;
                        return f
                    }
                }

                function cd(a) {
                    return function(b, c) {
                        return "string" == typeof b && "string" == typeof c || (b = ze(b), c = ze(c)), a(b, c)
                    }
                }

                function dd(a, b, c, d, e, f, g, h, i, j) {
                    var k = 8 & b,
                        l = k ? g : N;
                    g = k ? N : g;
                    var m = k ? f : N;
                    return f = k ? N : f, b = (b | (k ? 32 : 64)) & ~(k ? 64 : 32), 4 & b || (b &= -4), e = [a, b, e, m, l, f, g, h, i, j], c = c.apply(N, e), Dd(a) && qg(c, e), c.placeholder = d, Hd(c, a, b)
                }

                function ed(a) {
                    var b = Xe[a];
                    return function(a, c) {
                        if (a = ze(a), c = null == c ? 0 : Jf(xe(c), 292)) {
                            var d = (Be(a) + "e").split("e"),
                                d = b(d[0] + "e" + (+d[1] + c)),
                                d = (Be(d) + "e").split("e");
                            return +(d[0] + "e" + (+d[1] - c))
                        }
                        return b(a)
                    }
                }

                function fd(a) {
                    return function(b) {
                        var c = og(b);
                        return "[object Map]" == c ? G(b) : "[object Set]" == c ? K(b) : z(b, a(b))
                    }
                }

                function gd(a, b, c, d, e, f, g, h) {
                    var i = 2 & b;
                    if (!i && "function" != typeof a) throw new _e("Expected a function");
                    var j = d ? d.length : 0;
                    if (j || (b &= -97, d = e = N), g = g === N ? g : If(xe(g), 0), h = h === N ? h : xe(h), j -= e ? e.length : 0, 64 & b) {
                        var k = d,
                            l = e;
                        d = e = N
                    }
                    var m = i ? N : lg(a);
                    return f = [a, b, c, d, e, k, l, f, g, h], m && (c = f[1], a = m[1], b = c | a, d = 128 == a && 8 == c || 128 == a && 256 == c && f[7].length <= m[8] || 384 == a && m[7].length <= m[8] && 8 == c, 131 > b || d) && (1 & a && (f[2] = m[2], b |= 1 & c ? 0 : 4), (c = m[3]) && (d = f[3], f[3] = d ? Gc(d, c, m[4]) : c, f[4] = d ? I(f[3], "__lodash_placeholder__") : m[4]), (c = m[5]) && (d = f[5], f[5] = d ? Hc(d, c, m[6]) : c, f[6] = d ? I(f[5], "__lodash_placeholder__") : m[6]), (c = m[7]) && (f[7] = c), 128 & a && (f[8] = null == f[8] ? m[8] : Jf(f[8], m[8])), null == f[9] && (f[9] = m[9]), f[0] = m[0], f[1] = b), a = f[0], b = f[1], c = f[2], d = f[3], e = f[4], h = f[9] = f[9] === N ? i ? 0 : a.length : If(f[9] - j, 0), !h && 24 & b && (b &= -25), Hd((m ? hg : qg)(b && 1 != b ? 8 == b || 16 == b ? Uc(a, b, h) : 32 != b && 33 != b || e.length ? Xc.apply(N, f) : ad(a, b, c, d) : Qc(a, b, c), f), a, b)
                }

                function hd(a, b, c, d) {
                    return a === N || ie(a, bf[c]) && !ef.call(d, c) ? b : a
                }

                function id(a, b, c, d, e, f) {
                    return pe(a) && pe(b) && (f.set(b, a), Yb(a, b, N, id, f), f["delete"](b)), a
                }

                function jd(a) {
                    return se(a) ? N : a
                }

                function kd(a, b, c, d, e, f) {
                    var g = 1 & c,
                        h = a.length,
                        i = b.length;
                    if (h != i && !(g && i > h)) return !1;
                    if ((i = f.get(a)) && f.get(b)) return i == b;
                    var i = -1,
                        j = !0,
                        k = 2 & c ? new Oa : N;
                    for (f.set(a, b), f.set(b, a); ++i < h;) {
                        var l = a[i],
                            n = b[i];
                        if (d) var o = g ? d(n, l, i, b, a, f) : d(l, n, i, a, b, f);
                        if (o !== N) {
                            if (o) continue;
                            j = !1;
                            break
                        }
                        if (k) {
                            if (!m(b, function(a, b) {
                                return C(k, b) || l !== a && !e(l, a, c, d, f) ? void 0 : k.push(b)
                            })) {
                                j = !1;
                                break
                            }
                        } else if (l !== n && !e(l, n, c, d, f)) {
                            j = !1;
                            break
                        }
                    }
                    return f["delete"](a), f["delete"](b), j
                }

                function ld(a, b, c, d, e, f, g) {
                    switch (c) {
                        case "[object DataView]":
                            if (a.byteLength != b.byteLength || a.byteOffset != b.byteOffset) break;
                            a = a.buffer, b = b.buffer;
                        case "[object ArrayBuffer]":
                            if (a.byteLength != b.byteLength || !f(new of(a), new of(b))) break;
                            return !0;
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return ie(+a, +b);
                        case "[object Error]":
                            return a.name == b.name && a.message == b.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return a == b + "";
                        case "[object Map]":
                            var h = G;
                        case "[object Set]":
                            if (h || (h = J), a.size != b.size && !(1 & d)) break;
                            return (c = g.get(a)) ? c == b : (d |= 2, g.set(a, b), b = kd(h(a), h(b), d, e, f, g), g["delete"](a), b);
                        case "[object Symbol]":
                            if (ag) return ag.call(a) == ag.call(b)
                    }
                    return !1
                }

                function md(a) {
                    return sg(Gd(a, N, Qd), a + "")
                }

                function nd(a) {
                    return Ab(a, Ee, mg)
                }

                function od(a) {
                    return Ab(a, Fe, ng)
                }

                function pd(a) {
                    for (var b = a.name + "", c = Vf[b], d = ef.call(Vf, b) ? c.length : 0; d--;) {
                        var e = c[d],
                            f = e.func;
                        if (null == f || f == a) return e.name
                    }
                    return b
                }

                function qd(a) {
                    return (ef.call(wa, "placeholder") ? wa : a).placeholder
                }

                function rd() {
                    var a = wa.iteratee || Ne,
                        a = a === Ne ? Sb : a;
                    return arguments.length ? a(arguments[0], arguments[1]) : a
                }

                function sd(a, b) {
                    var c = a.__data__,
                        d = typeof b;
                    return ("string" == d || "number" == d || "symbol" == d || "boolean" == d ? "__proto__" !== b : null === b) ? c["string" == typeof b ? "string" : "hash"] : c.map
                }

                function td(a) {
                    for (var b = Ee(a), c = b.length; c--;) {
                        var d = b[c],
                            e = a[d];
                        b[c] = [d, e, e === e && !pe(e)]
                    }
                    return b
                }

                function ud(a, b) {
                    var c = null == a ? N : a[b];
                    return Ob(c) ? c : N
                }

                function vd(a, b, c) {
                    b = Ac(b, a);
                    for (var d = -1, e = b.length, f = !1; ++d < e;) {
                        var g = Kd(b[d]);
                        if (!(f = null != a && c(a, g))) break;
                        a = a[g]
                    }
                    return f || ++d != e ? f : (e = null == a ? 0 : a.length, !!e && oe(e) && Ad(g, e) && (eh(a) || dh(a)))
                }

                function wd(a) {
                    var b = a.length,
                        c = new a.constructor(b);
                    return b && "string" == typeof a[0] && ef.call(a, "index") && (c.index = a.index, c.input = a.input), c
                }

                function xd(a) {
                    return "function" != typeof a.constructor || Ed(a) ? {} : cg(qf(a))
                }

                function yd(a, b, c) {
                    var d = a.constructor;
                    switch (b) {
                        case "[object ArrayBuffer]":
                            return Dc(a);
                        case "[object Boolean]":
                        case "[object Date]":
                            return new d(+a);
                        case "[object DataView]":
                            return b = c ? Dc(a.buffer) : a.buffer, new a.constructor(b, a.byteOffset, a.byteLength);
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return Ec(a, c);
                        case "[object Map]":
                            return new d;
                        case "[object Number]":
                        case "[object String]":
                            return new d(a);
                        case "[object RegExp]":
                            return b = new a.constructor(a.source, na.exec(a)), b.lastIndex = a.lastIndex, b;
                        case "[object Set]":
                            return new d;
                        case "[object Symbol]":
                            return ag ? Ye(ag.call(a)) : {}
                    }
                }

                function zd(a) {
                    return eh(a) || dh(a) || !!(uf && a && a[uf])
                }

                function Ad(a, b) {
                    var c = typeof a;
                    return b = null == b ? 9007199254740991 : b, !!b && ("number" == c || "symbol" != c && sa.test(a)) && a > -1 && 0 == a % 1 && b > a
                }

                function Bd(a, b, c) {
                    if (!pe(c)) return !1;
                    var d = typeof b;
                    return !!("number" == d ? je(c) && Ad(b, c.length) : "string" == d && b in c) && ie(c[b], a)
                }

                function Cd(a, b) {
                    if (eh(a)) return !1;
                    var c = typeof a;
                    return !("number" != c && "symbol" != c && "boolean" != c && null != a && !ue(a)) || aa.test(a) || !_.test(a) || null != b && a in Ye(b)
                }

                function Dd(a) {
                    var b = pd(a),
                        c = wa[b];
                    return "function" == typeof c && b in Ba.prototype && (a === c || (b = lg(c), !!b && a === b[0]))
                }

                function Ed(a) {
                    var b = a && a.constructor;
                    return a === ("function" == typeof b && b.prototype || bf)
                }

                function Fd(a, b) {
                    return function(c) {
                        return null != c && c[a] === b && (b !== N || a in Ye(c))
                    }
                }

                function Gd(b, c, d) {
                    return c = If(c === N ? b.length - 1 : c, 0),
                        function() {
                            for (var e = arguments, f = -1, g = If(e.length - c, 0), h = Te(g); ++f < g;) h[f] = e[c + f];
                            for (f = -1, g = Te(c + 1); ++f < c;) g[f] = e[f];
                            return g[c] = d(h), a(b, this, g)
                        }
                }

                function Hd(a, b, c) {
                    var d = b + "";
                    b = sg;
                    var e, f = Md;
                    return e = (e = d.match(ia)) ? e[1].split(ja) : [], c = f(e, c), (f = c.length) && (e = f - 1, c[e] = (f > 1 ? "& " : "") + c[e], c = c.join(f > 2 ? ", " : " "), d = d.replace(ha, "{\n/* [wrapped with " + c + "] */\n")), b(a, d)
                }

                function Id(a) {
                    var b = 0,
                        c = 0;
                    return function() {
                        var d = Kf(),
                            e = 16 - (d - c);
                        if (c = d, e > 0) {
                            if (800 <= ++b) return arguments[0]
                        } else b = 0;
                        return a.apply(N, arguments)
                    }
                }

                function Jd(a, b) {
                    var c = -1,
                        d = a.length,
                        e = d - 1;
                    for (b = b === N ? d : b; ++c < b;) {
                        var d = ec(c, e),
                            f = a[d];
                        a[d] = a[c], a[c] = f
                    }
                    return a.length = b, a
                }

                function Kd(a) {
                    if ("string" == typeof a || ue(a)) return a;
                    var b = a + "";
                    return "0" == b && 1 / a == -O ? "-0" : b
                }

                function Ld(a) {
                    if (null != a) {
                        try {
                            return df.call(a)
                        } catch (a) {}
                        return a + ""
                    }
                    return ""
                }

                function Md(a, b) {
                    return c(Q, function(c) {
                        var d = "_." + c[0];
                        b & c[1] && !g(a, d) && a.push(d)
                    }), a.sort()
                }

                function Nd(a) {
                    if (a instanceof Ba) return a.clone();
                    var b = new ya(a.__wrapped__, a.__chain__);
                    return b.__actions__ = Ic(a.__actions__), b.__index__ = a.__index__, b.__values__ = a.__values__, b
                }

                function Od(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    return d ? (c = null == c ? 0 : xe(c), 0 > c && (c = If(d + c, 0)), o(a, rd(b, 3), c)) : -1
                }

                function Pd(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    if (!d) return -1;
                    var e = d - 1;
                    return c !== N && (e = xe(c), e = 0 > c ? If(d + e, 0) : Jf(e, d - 1)), o(a, rd(b, 3), e, !0)
                }

                function Qd(a) {
                    return (null == a ? 0 : a.length) ? vb(a, 1) : []
                }

                function Rd(a) {
                    return a && a.length ? a[0] : N
                }

                function Sd(a) {
                    var b = null == a ? 0 : a.length;
                    return b ? a[b - 1] : N
                }

                function Td(a, b) {
                    return a && a.length && b && b.length ? cc(a, b) : a
                }

                function Ud(a) {
                    return null == a ? a : Nf.call(a)
                }

                function Vd(a) {
                    if (!a || !a.length) return [];
                    var b = 0;
                    return a = f(a, function(a) {
                        return ke(a) ? (b = If(a.length, b), !0) : void 0
                    }), y(b, function(b) {
                        return i(a, t(b))
                    })
                }

                function Wd(b, c) {
                    if (!b || !b.length) return [];
                    var d = Vd(b);
                    return null == c ? d : i(d, function(b) {
                        return a(c, N, b)
                    })
                }

                function Xd(a) {
                    return a = wa(a), a.__chain__ = !0, a
                }

                function Yd(a, b) {
                    return b(a)
                }

                function Zd() {
                    return this
                }

                function $d(a, b) {
                    return (eh(a) ? c : dg)(a, rd(b, 3))
                }

                function _d(a, b) {
                    return (eh(a) ? d : eg)(a, rd(b, 3))
                }

                function ae(a, b) {
                    return (eh(a) ? i : Vb)(a, rd(b, 3))
                }

                function be(a, b, c) {
                    return b = c ? N : b, b = a && null == b ? a.length : b, gd(a, 128, N, N, N, N, b)
                }

                function ce(a, b) {
                    var c;
                    if ("function" != typeof b) throw new _e("Expected a function");
                    return a = xe(a),
                        function() {
                            return 0 < --a && (c = b.apply(this, arguments)), 1 >= a && (b = N), c
                        }
                }

                function de(a, b, c) {
                    return b = c ? N : b, a = gd(a, 8, N, N, N, N, N, b), a.placeholder = de.placeholder, a
                }

                function ee(a, b, c) {
                    return b = c ? N : b, a = gd(a, 16, N, N, N, N, N, b), a.placeholder = ee.placeholder, a
                }

                function fe(a, b, c) {
                    function d(b) {
                        var c = i,
                            d = j;
                        return i = j = N, o = b, l = a.apply(d, c)
                    }

                    function e(a) {
                        var c = a - n;
                        return a -= o, n === N || c >= b || 0 > c || q && a >= k
                    }

                    function f() {
                        var a = Ug();
                        if (e(a)) return g(a);
                        var c, d = rg;
                        c = a - o, a = b - (a - n), c = q ? Jf(a, k - c) : a, m = d(f, c)
                    }

                    function g(a) {
                        return m = N, r && i ? d(a) : (i = j = N, l)
                    }

                    function h() {
                        var a = Ug(),
                            c = e(a);
                        if (i = arguments, j = this, n = a, c) {
                            if (m === N) return o = a = n, m = rg(f, b), p ? d(a) : l;
                            if (q) return m = rg(f, b), d(n)
                        }
                        return m === N && (m = rg(f, b)), l
                    }
                    var i, j, k, l, m, n, o = 0,
                        p = !1,
                        q = !1,
                        r = !0;
                    if ("function" != typeof a) throw new _e("Expected a function");
                    return b = ze(b) || 0, pe(c) && (p = !!c.leading, k = (q = "maxWait" in c) ? If(ze(c.maxWait) || 0, b) : k, r = "trailing" in c ? !!c.trailing : r), h.cancel = function() {
                        m !== N && jg(m), o = 0, i = n = j = m = N
                    }, h.flush = function() {
                        return m === N ? l : g(Ug())
                    }, h
                }

                function ge(a, b) {
                    function c() {
                        var d = arguments,
                            e = b ? b.apply(this, d) : d[0],
                            f = c.cache;
                        return f.has(e) ? f.get(e) : (d = a.apply(this, d), c.cache = f.set(e, d) || f, d)
                    }
                    if ("function" != typeof a || null != b && "function" != typeof b) throw new _e("Expected a function");
                    return c.cache = new(ge.Cache || Ma), c
                }

                function he(a) {
                    if ("function" != typeof a) throw new _e("Expected a function");
                    return function() {
                        var b = arguments;
                        switch (b.length) {
                            case 0:
                                return !a.call(this);
                            case 1:
                                return !a.call(this, b[0]);
                            case 2:
                                return !a.call(this, b[0], b[1]);
                            case 3:
                                return !a.call(this, b[0], b[1], b[2])
                        }
                        return !a.apply(this, b)
                    }
                }

                function ie(a, b) {
                    return a === b || a !== a && b !== b
                }

                function je(a) {
                    return null != a && oe(a.length) && !me(a)
                }

                function ke(a) {
                    return qe(a) && je(a)
                }

                function le(a) {
                    if (!qe(a)) return !1;
                    var b = Bb(a);
                    return "[object Error]" == b || "[object DOMException]" == b || "string" == typeof a.message && "string" == typeof a.name && !se(a)
                }

                function me(a) {
                    return !!pe(a) && (a = Bb(a), "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a)
                }

                function ne(a) {
                    return "number" == typeof a && a == xe(a)
                }

                function oe(a) {
                    return "number" == typeof a && a > -1 && 0 == a % 1 && 9007199254740991 >= a
                }

                function pe(a) {
                    var b = typeof a;
                    return null != a && ("object" == b || "function" == b)
                }

                function qe(a) {
                    return null != a && "object" == typeof a
                }

                function re(a) {
                    return "number" == typeof a || qe(a) && "[object Number]" == Bb(a)
                }

                function se(a) {
                    return !(!qe(a) || "[object Object]" != Bb(a)) && (a = qf(a), null === a || (a = ef.call(a, "constructor") && a.constructor, "function" == typeof a && a instanceof a && df.call(a) == jf))
                }

                function te(a) {
                    return "string" == typeof a || !eh(a) && qe(a) && "[object String]" == Bb(a)
                }

                function ue(a) {
                    return "symbol" == typeof a || qe(a) && "[object Symbol]" == Bb(a)
                }

                function ve(a) {
                    if (!a) return [];
                    if (je(a)) return te(a) ? M(a) : Ic(a);
                    if (vf && a[vf]) {
                        a = a[vf]();
                        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                        return c
                    }
                    return b = og(a), ("[object Map]" == b ? G : "[object Set]" == b ? J : He)(a)
                }

                function we(a) {
                    return a ? (a = ze(a), a === O || a === -O ? 1.7976931348623157e308 * (0 > a ? -1 : 1) : a === a ? a : 0) : 0 === a ? a : 0
                }

                function xe(a) {
                    a = we(a);
                    var b = a % 1;
                    return a === a ? b ? a - b : a : 0
                }

                function ye(a) {
                    return a ? mb(xe(a), 0, 4294967295) : 0
                }

                function ze(a) {
                    if ("number" == typeof a) return a;
                    if (ue(a)) return P;
                    if (pe(a) && (a = "function" == typeof a.valueOf ? a.valueOf() : a, a = pe(a) ? a + "" : a), "string" != typeof a) return 0 === a ? a : +a;
                    a = a.replace(ea, "");
                    var b = pa.test(a);
                    return b || ra.test(a) ? Ka(a.slice(2), b ? 2 : 8) : oa.test(a) ? P : +a
                }

                function Ae(a) {
                    return Jc(a, Fe(a))
                }

                function Be(a) {
                    return null == a ? "" : rc(a)
                }

                function Ce(a, b, c) {
                    return a = null == a ? N : zb(a, b), a === N ? c : a
                }

                function De(a, b) {
                    return null != a && vd(a, b, Eb)
                }

                function Ee(a) {
                    return je(a) ? Ra(a) : Tb(a)
                }

                function Fe(a) {
                    if (je(a)) a = Ra(a, !0);
                    else if (pe(a)) {
                        var b, c = Ed(a),
                            d = [];
                        for (b in a)("constructor" != b || !c && ef.call(a, b)) && d.push(b);
                        a = d
                    } else {
                        if (b = [], null != a)
                            for (c in Ye(a)) b.push(c);
                        a = b
                    }
                    return a
                }

                function Ge(a, b) {
                    if (null == a) return {};
                    var c = i(od(a), function(a) {
                        return [a]
                    });
                    return b = rd(b), ac(a, c, function(a, c) {
                        return b(a, c[0])
                    })
                }

                function He(a) {
                    return null == a ? [] : B(a, Ee(a))
                }

                function Ie(a) {
                    return Lh(Be(a).toLowerCase())
                }

                function Je(a) {
                    return (a = Be(a)) && a.replace(ta, $a).replace(Aa, "")
                }

                function Ke(a, b, c) {
                    return a = Be(a), b = c ? N : b, b === N ? Ea.test(a) ? a.match(Ca) || [] : a.match(ka) || [] : a.match(b) || []
                }

                function Le(a) {
                    return function() {
                        return a
                    }
                }

                function Me(a) {
                    return a
                }

                function Ne(a) {
                    return Sb("function" == typeof a ? a : nb(a, 1))
                }

                function Oe(a, b, d) {
                    var e = Ee(b),
                        f = yb(b, e);
                    null != d || pe(b) && (f.length || !e.length) || (d = b, b = a, a = this, f = yb(b, Ee(b)));
                    var g = !(pe(d) && "chain" in d && !d.chain),
                        h = me(a);
                    return c(f, function(c) {
                        var d = b[c];
                        a[c] = d, h && (a.prototype[c] = function() {
                            var b = this.__chain__;
                            if (g || b) {
                                var c = a(this.__wrapped__);
                                return (c.__actions__ = Ic(this.__actions__)).push({
                                    func: d,
                                    args: arguments,
                                    thisArg: a
                                }), c.__chain__ = b, c
                            }
                            return d.apply(a, j([this.value()], arguments))
                        })
                    }), a
                }

                function Pe() {}

                function Qe(a) {
                    return Cd(a) ? t(Kd(a)) : bc(a)
                }

                function Re() {
                    return []
                }

                function Se() {
                    return !1
                }
                u = null == u ? Na : bb.defaults(Na.Object(), u, bb.pick(Na, Fa));
                var Te = u.Array,
                    Ue = u.Date,
                    Ve = u.Error,
                    We = u.Function,
                    Xe = u.Math,
                    Ye = u.Object,
                    Ze = u.RegExp,
                    $e = u.String,
                    _e = u.TypeError,
                    af = Te.prototype,
                    bf = Ye.prototype,
                    cf = u["__core-js_shared__"],
                    df = We.prototype.toString,
                    ef = bf.hasOwnProperty,
                    ff = 0,
                    gf = function() {
                        var a = /[^.]+$/.exec(cf && cf.keys && cf.keys.IE_PROTO || "");
                        return a ? "Symbol(src)_1." + a : ""
                    }(),
                    hf = bf.toString,
                    jf = df.call(Ye),
                    kf = Na._,
                    lf = Ze("^" + df.call(ef).replace(ca, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    mf = Qa ? u.Buffer : N,
                    nf = u.Symbol,
                    of = u.Uint8Array,
                    pf = mf ? mf.g : N,
                    qf = H(Ye.getPrototypeOf, Ye),
                    rf = Ye.create,
                    sf = bf.propertyIsEnumerable,
                    tf = af.splice,
                    uf = nf ? nf.isConcatSpreadable : N,
                    vf = nf ? nf.iterator : N,
                    wf = nf ? nf.toStringTag : N,
                    xf = function() {
                        try {
                            var a = ud(Ye, "defineProperty");
                            return a({}, "", {}), a
                        } catch (a) {}
                    }(),
                    yf = u.clearTimeout !== Na.clearTimeout && u.clearTimeout,
                    zf = Ue && Ue.now !== Na.Date.now && Ue.now,
                    Af = u.setTimeout !== Na.setTimeout && u.setTimeout,
                    Bf = Xe.ceil,
                    Cf = Xe.floor,
                    Df = Ye.getOwnPropertySymbols,
                    Ef = mf ? mf.isBuffer : N,
                    Ff = u.isFinite,
                    Gf = af.join,
                    Hf = H(Ye.keys, Ye),
                    If = Xe.max,
                    Jf = Xe.min,
                    Kf = Ue.now,
                    Lf = u.parseInt,
                    Mf = Xe.random,
                    Nf = af.reverse,
                    Of = ud(u, "DataView"),
                    Pf = ud(u, "Map"),
                    Qf = ud(u, "Promise"),
                    Rf = ud(u, "Set"),
                    Sf = ud(u, "WeakMap"),
                    Tf = ud(Ye, "create"),
                    Uf = Sf && new Sf,
                    Vf = {},
                    Wf = Ld(Of),
                    Xf = Ld(Pf),
                    Yf = Ld(Qf),
                    Zf = Ld(Rf),
                    $f = Ld(Sf),
                    _f = nf ? nf.prototype : N,
                    ag = _f ? _f.valueOf : N,
                    bg = _f ? _f.toString : N,
                    cg = function() {
                        function a() {}
                        return function(b) {
                            return pe(b) ? rf ? rf(b) : (a.prototype = b, b = new a, a.prototype = N, b) : {}
                        }
                    }();
                wa.templateSettings = {
                    escape: Y,
                    evaluate: Z,
                    interpolate: $,
                    variable: "",
                    imports: {
                        _: wa
                    }
                }, wa.prototype = xa.prototype, wa.prototype.constructor = wa, ya.prototype = cg(xa.prototype), ya.prototype.constructor = ya, Ba.prototype = cg(xa.prototype), Ba.prototype.constructor = Ba, Ia.prototype.clear = function() {
                    this.__data__ = Tf ? Tf(null) : {}, this.size = 0
                }, Ia.prototype["delete"] = function(a) {
                    return a = this.has(a) && delete this.__data__[a], this.size -= a ? 1 : 0, a
                }, Ia.prototype.get = function(a) {
                    var b = this.__data__;
                    return Tf ? (a = b[a], "__lodash_hash_undefined__" === a ? N : a) : ef.call(b, a) ? b[a] : N
                }, Ia.prototype.has = function(a) {
                    var b = this.__data__;
                    return Tf ? b[a] !== N : ef.call(b, a)
                }, Ia.prototype.set = function(a, b) {
                    var c = this.__data__;
                    return this.size += this.has(a) ? 0 : 1, c[a] = Tf && b === N ? "__lodash_hash_undefined__" : b, this
                }, La.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, La.prototype["delete"] = function(a) {
                    var b = this.__data__;
                    return a = gb(b, a), !(0 > a || (a == b.length - 1 ? b.pop() : tf.call(b, a, 1), --this.size, 0))
                }, La.prototype.get = function(a) {
                    var b = this.__data__;
                    return a = gb(b, a), 0 > a ? N : b[a][1]
                }, La.prototype.has = function(a) {
                    return -1 < gb(this.__data__, a)
                }, La.prototype.set = function(a, b) {
                    var c = this.__data__,
                        d = gb(c, a);
                    return 0 > d ? (++this.size, c.push([a, b])) : c[d][1] = b, this
                }, Ma.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Ia,
                        map: new(Pf || La),
                        string: new Ia
                    }
                }, Ma.prototype["delete"] = function(a) {
                    return a = sd(this, a)["delete"](a), this.size -= a ? 1 : 0, a
                }, Ma.prototype.get = function(a) {
                    return sd(this, a).get(a)
                }, Ma.prototype.has = function(a) {
                    return sd(this, a).has(a)
                }, Ma.prototype.set = function(a, b) {
                    var c = sd(this, a),
                        d = c.size;
                    return c.set(a, b), this.size += c.size == d ? 0 : 1, this
                }, Oa.prototype.add = Oa.prototype.push = function(a) {
                    return this.__data__.set(a, "__lodash_hash_undefined__"), this
                }, Oa.prototype.has = function(a) {
                    return this.__data__.has(a)
                }, Pa.prototype.clear = function() {
                    this.__data__ = new La, this.size = 0
                }, Pa.prototype["delete"] = function(a) {
                    var b = this.__data__;
                    return a = b["delete"](a), this.size = b.size, a
                }, Pa.prototype.get = function(a) {
                    return this.__data__.get(a)
                }, Pa.prototype.has = function(a) {
                    return this.__data__.has(a)
                }, Pa.prototype.set = function(a, b) {
                    var c = this.__data__;
                    if (c instanceof La) {
                        var d = c.__data__;
                        if (!Pf || 199 > d.length) return d.push([a, b]), this.size = ++c.size, this;
                        c = this.__data__ = new Ma(d)
                    }
                    return c.set(a, b), this.size = c.size, this
                };
                var dg = Oc(wb),
                    eg = Oc(xb, !0),
                    fg = Pc(),
                    gg = Pc(!0),
                    hg = Uf ? function(a, b) {
                        return Uf.set(a, b), a
                    } : Me,
                    ig = xf ? function(a, b) {
                        return xf(a, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Le(b),
                            writable: !0
                        })
                    } : Me,
                    jg = yf || function(a) {
                        return Na.clearTimeout(a)
                    },
                    kg = Rf && 1 / J(new Rf([, -0]))[1] == O ? function(a) {
                        return new Rf(a)
                    } : Pe,
                    lg = Uf ? function(a) {
                        return Uf.get(a)
                    } : Pe,
                    mg = Df ? function(a) {
                        return null == a ? [] : (a = Ye(a), f(Df(a), function(b) {
                            return sf.call(a, b)
                        }))
                    } : Re,
                    ng = Df ? function(a) {
                        for (var b = []; a;) j(b, mg(a)), a = qf(a);
                        return b
                    } : Re,
                    og = Bb;
                (Of && "[object DataView]" != og(new Of(new ArrayBuffer(1))) || Pf && "[object Map]" != og(new Pf) || Qf && "[object Promise]" != og(Qf.resolve()) || Rf && "[object Set]" != og(new Rf) || Sf && "[object WeakMap]" != og(new Sf)) && (og = function(a) {
                    var b = Bb(a);
                    if (a = (a = "[object Object]" == b ? a.constructor : N) ? Ld(a) : "") switch (a) {
                        case Wf:
                            return "[object DataView]";
                        case Xf:
                            return "[object Map]";
                        case Yf:
                            return "[object Promise]";
                        case Zf:
                            return "[object Set]";
                        case $f:
                            return "[object WeakMap]"
                    }
                    return b
                });
                var pg = cf ? me : Se,
                    qg = Id(hg),
                    rg = Af || function(a, b) {
                        return Na.setTimeout(a, b)
                    },
                    sg = Id(ig),
                    tg = function(a) {
                        a = ge(a, function(a) {
                            return 500 === b.size && b.clear(), a
                        });
                        var b = a.cache;
                        return a
                    }(function(a) {
                        var b = [];
                        return 46 === a.charCodeAt(0) && b.push(""), a.replace(ba, function(a, c, d, e) {
                            b.push(d ? e.replace(la, "$1") : c || a)
                        }), b
                    }),
                    ug = gc(function(a, b) {
                        return ke(a) ? rb(a, vb(b, 1, ke, !0)) : []
                    }),
                    vg = gc(function(a, b) {
                        var c = Sd(b);
                        return ke(c) && (c = N), ke(a) ? rb(a, vb(b, 1, ke, !0), rd(c, 2)) : []
                    }),
                    wg = gc(function(a, b) {
                        var c = Sd(b);
                        return ke(c) && (c = N), ke(a) ? rb(a, vb(b, 1, ke, !0), N, c) : []
                    }),
                    xg = gc(function(a) {
                        var b = i(a, yc);
                        return b.length && b[0] === a[0] ? Fb(b) : []
                    }),
                    yg = gc(function(a) {
                        var b = Sd(a),
                            c = i(a, yc);
                        return b === Sd(c) ? b = N : c.pop(), c.length && c[0] === a[0] ? Fb(c, rd(b, 2)) : []
                    }),
                    zg = gc(function(a) {
                        var b = Sd(a),
                            c = i(a, yc);
                        return (b = "function" == typeof b ? b : N) && c.pop(), c.length && c[0] === a[0] ? Fb(c, N, b) : []
                    }),
                    Ag = gc(Td),
                    Bg = md(function(a, b) {
                        var c = null == a ? 0 : a.length,
                            d = lb(a, b);
                        return dc(a, i(b, function(a) {
                            return Ad(a, c) ? +a : a
                        }).sort(Fc)), d
                    }),
                    Cg = gc(function(a) {
                        return sc(vb(a, 1, ke, !0))
                    }),
                    Dg = gc(function(a) {
                        var b = Sd(a);
                        return ke(b) && (b = N), sc(vb(a, 1, ke, !0), rd(b, 2))
                    }),
                    Eg = gc(function(a) {
                        var b = Sd(a),
                            b = "function" == typeof b ? b : N;
                        return sc(vb(a, 1, ke, !0), N, b)
                    }),
                    Fg = gc(function(a, b) {
                        return ke(a) ? rb(a, b) : []
                    }),
                    Gg = gc(function(a) {
                        return wc(f(a, ke))
                    }),
                    Hg = gc(function(a) {
                        var b = Sd(a);
                        return ke(b) && (b = N), wc(f(a, ke), rd(b, 2))
                    }),
                    Ig = gc(function(a) {
                        var b = Sd(a),
                            b = "function" == typeof b ? b : N;
                        return wc(f(a, ke), N, b)
                    }),
                    Jg = gc(Vd),
                    Kg = gc(function(a) {
                        var b = a.length,
                            b = b > 1 ? a[b - 1] : N,
                            b = "function" == typeof b ? (a.pop(), b) : N;
                        return Wd(a, b)
                    }),
                    Lg = md(function(a) {
                        function b(b) {
                            return lb(b, a)
                        }
                        var c = a.length,
                            d = c ? a[0] : 0,
                            e = this.__wrapped__;
                        return !(c > 1 || this.__actions__.length) && e instanceof Ba && Ad(d) ? (e = e.slice(d, +d + (c ? 1 : 0)), e.__actions__.push({
                            func: Yd,
                            args: [b],
                            thisArg: N
                        }), new ya(e, this.__chain__).thru(function(a) {
                            return c && !a.length && a.push(N), a
                        })) : this.thru(b)
                    }),
                    Mg = Mc(function(a, b, c) {
                        ef.call(a, c) ? ++a[c] : kb(a, c, 1)
                    }),
                    Ng = Vc(Od),
                    Og = Vc(Pd),
                    Pg = Mc(function(a, b, c) {
                        ef.call(a, c) ? a[c].push(b) : kb(a, c, [b])
                    }),
                    Qg = gc(function(b, c, d) {
                        var e = -1,
                            f = "function" == typeof c,
                            g = je(b) ? Te(b.length) : [];
                        return dg(b, function(b) {
                            g[++e] = f ? a(c, b, d) : Hb(b, c, d)
                        }), g
                    }),
                    Rg = Mc(function(a, b, c) {
                        kb(a, c, b)
                    }),
                    Sg = Mc(function(a, b, c) {
                        a[c ? 0 : 1].push(b)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    }),
                    Tg = gc(function(a, b) {
                        if (null == a) return [];
                        var c = b.length;
                        return c > 1 && Bd(a, b[0], b[1]) ? b = [] : c > 2 && Bd(b[0], b[1], b[2]) && (b = [b[0]]), $b(a, vb(b, 1), [])
                    }),
                    Ug = zf || function() {
                        return Na.Date.now()
                    },
                    Vg = gc(function(a, b, c) {
                        var d = 1;
                        if (c.length) var e = I(c, qd(Vg)),
                            d = 32 | d;
                        return gd(a, d, b, c, e)
                    }),
                    Wg = gc(function(a, b, c) {
                        var d = 3;
                        if (c.length) var e = I(c, qd(Wg)),
                            d = 32 | d;
                        return gd(b, d, a, c, e)
                    }),
                    Xg = gc(function(a, b) {
                        return qb(a, 1, b)
                    }),
                    Yg = gc(function(a, b, c) {
                        return qb(a, ze(b) || 0, c)
                    });
                ge.Cache = Ma;
                var Zg = gc(function(b, c) {
                        c = 1 == c.length && eh(c[0]) ? i(c[0], A(rd())) : i(vb(c, 1), A(rd()));
                        var d = c.length;
                        return gc(function(e) {
                            for (var f = -1, g = Jf(e.length, d); ++f < g;) e[f] = c[f].call(this, e[f]);
                            return a(b, this, e)
                        })
                    }),
                    $g = gc(function(a, b) {
                        return gd(a, 32, N, b, I(b, qd($g)))
                    }),
                    _g = gc(function(a, b) {
                        return gd(a, 64, N, b, I(b, qd(_g)));
                    }),
                    ah = md(function(a, b) {
                        return gd(a, 256, N, N, N, b)
                    }),
                    bh = cd(Cb),
                    ch = cd(function(a, b) {
                        return a >= b
                    }),
                    dh = Ib(function() {
                        return arguments
                    }()) ? Ib : function(a) {
                        return qe(a) && ef.call(a, "callee") && !sf.call(a, "callee")
                    },
                    eh = Te.isArray,
                    fh = Ta ? A(Ta) : Jb,
                    gh = Ef || Se,
                    hh = Ua ? A(Ua) : Kb,
                    ih = Va ? A(Va) : Mb,
                    jh = Wa ? A(Wa) : Pb,
                    kh = Xa ? A(Xa) : Qb,
                    lh = Ya ? A(Ya) : Rb,
                    mh = cd(Ub),
                    nh = cd(function(a, b) {
                        return b >= a
                    }),
                    oh = Nc(function(a, b) {
                        if (Ed(b) || je(b)) Jc(b, Ee(b), a);
                        else
                            for (var c in b) ef.call(b, c) && fb(a, c, b[c])
                    }),
                    ph = Nc(function(a, b) {
                        Jc(b, Fe(b), a)
                    }),
                    qh = Nc(function(a, b, c, d) {
                        Jc(b, Fe(b), a, d)
                    }),
                    rh = Nc(function(a, b, c, d) {
                        Jc(b, Ee(b), a, d)
                    }),
                    sh = md(lb),
                    th = gc(function(a, b) {
                        a = Ye(a);
                        var c = -1,
                            d = b.length,
                            e = d > 2 ? b[2] : N;
                        for (e && Bd(b[0], b[1], e) && (d = 1); ++c < d;)
                            for (var e = b[c], f = Fe(e), g = -1, h = f.length; ++g < h;) {
                                var i = f[g],
                                    j = a[i];
                                (j === N || ie(j, bf[i]) && !ef.call(a, i)) && (a[i] = e[i])
                            }
                        return a
                    }),
                    uh = gc(function(b) {
                        return b.push(N, id), a(zh, N, b)
                    }),
                    vh = Yc(function(a, b, c) {
                        null != b && "function" != typeof b.toString && (b = hf.call(b)), a[b] = c
                    }, Le(Me)),
                    wh = Yc(function(a, b, c) {
                        null != b && "function" != typeof b.toString && (b = hf.call(b)), ef.call(a, b) ? a[b].push(c) : a[b] = [c]
                    }, rd),
                    xh = gc(Hb),
                    yh = Nc(function(a, b, c) {
                        Yb(a, b, c)
                    }),
                    zh = Nc(function(a, b, c, d) {
                        Yb(a, b, c, d)
                    }),
                    Ah = md(function(a, b) {
                        var c = {};
                        if (null == a) return c;
                        var d = !1;
                        b = i(b, function(b) {
                            return b = Ac(b, a), d || (d = 1 < b.length), b
                        }), Jc(a, od(a), c), d && (c = nb(c, 7, jd));
                        for (var e = b.length; e--;) tc(c, b[e]);
                        return c
                    }),
                    Bh = md(function(a, b) {
                        return null == a ? {} : _b(a, b)
                    }),
                    Ch = fd(Ee),
                    Dh = fd(Fe),
                    Eh = Sc(function(a, b, c) {
                        return b = b.toLowerCase(), a + (c ? Ie(b) : b)
                    }),
                    Fh = Sc(function(a, b, c) {
                        return a + (c ? "-" : "") + b.toLowerCase()
                    }),
                    Gh = Sc(function(a, b, c) {
                        return a + (c ? " " : "") + b.toLowerCase()
                    }),
                    Hh = Rc("toLowerCase"),
                    Ih = Sc(function(a, b, c) {
                        return a + (c ? "_" : "") + b.toLowerCase()
                    }),
                    Jh = Sc(function(a, b, c) {
                        return a + (c ? " " : "") + Lh(b)
                    }),
                    Kh = Sc(function(a, b, c) {
                        return a + (c ? " " : "") + b.toUpperCase()
                    }),
                    Lh = Rc("toUpperCase"),
                    Mh = gc(function(a, b) {
                        try {
                            return c(a, N, b)
                        } catch (c) {
                            return le(c) ? c : new Ve(c)
                        }
                    }),
                    Nh = md(function(a, b) {
                        return c(b, function(b) {
                            b = Kd(b), kb(a, b, Vg(a[b], a))
                        }), a
                    }),
                    Oh = Wc(),
                    Ph = Wc(!0),
                    Qh = gc(function(a, b) {
                        return function(c) {
                            return Hb(c, a, b)
                        }
                    }),
                    Rh = gc(function(a, b) {
                        return function(c) {
                            return Hb(a, c, b)
                        }
                    }),
                    Sh = $c(i),
                    Th = $c(e),
                    Uh = $c(m),
                    Vh = bd(),
                    Wh = bd(!0),
                    Xh = Zc(function(a, b) {
                        return a + b
                    }, 0),
                    Yh = ed("ceil"),
                    Zh = Zc(function(a, b) {
                        return a / b
                    }, 1),
                    $h = ed("floor"),
                    _h = Zc(function(a, b) {
                        return a * b
                    }, 1),
                    ai = ed("round"),
                    bi = Zc(function(a, b) {
                        return a - b
                    }, 0);
                return wa.after = function(a, b) {
                    if ("function" != typeof b) throw new _e("Expected a function");
                    return a = xe(a),
                        function() {
                            return 1 > --a ? b.apply(this, arguments) : void 0
                        }
                }, wa.ary = be, wa.assign = oh, wa.assignIn = ph, wa.assignInWith = qh, wa.assignWith = rh, wa.at = sh, wa.before = ce, wa.bind = Vg, wa.bindAll = Nh, wa.bindKey = Wg, wa.castArray = function() {
                    if (!arguments.length) return [];
                    var a = arguments[0];
                    return eh(a) ? a : [a]
                }, wa.chain = Xd, wa.chunk = function(a, b, c) {
                    if (b = (c ? Bd(a, b, c) : b === N) ? 1 : If(xe(b), 0), c = null == a ? 0 : a.length, !c || 1 > b) return [];
                    for (var d = 0, e = 0, f = Te(Bf(c / b)); c > d;) f[e++] = lc(a, d, d += b);
                    return f
                }, wa.compact = function(a) {
                    for (var b = -1, c = null == a ? 0 : a.length, d = 0, e = []; ++b < c;) {
                        var f = a[b];
                        f && (e[d++] = f)
                    }
                    return e
                }, wa.concat = function() {
                    var a = arguments.length;
                    if (!a) return [];
                    for (var b = Te(a - 1), c = arguments[0]; a--;) b[a - 1] = arguments[a];
                    return j(eh(c) ? Ic(c) : [c], vb(b, 1))
                }, wa.cond = function(b) {
                    var c = null == b ? 0 : b.length,
                        d = rd();
                    return b = c ? i(b, function(a) {
                        if ("function" != typeof a[1]) throw new _e("Expected a function");
                        return [d(a[0]), a[1]]
                    }) : [], gc(function(d) {
                        for (var e = -1; ++e < c;) {
                            var f = b[e];
                            if (a(f[0], this, d)) return a(f[1], this, d)
                        }
                    })
                }, wa.conforms = function(a) {
                    return ob(nb(a, 1))
                }, wa.constant = Le, wa.countBy = Mg, wa.create = function(a, b) {
                    var c = cg(a);
                    return null == b ? c : ib(c, b)
                }, wa.curry = de, wa.curryRight = ee, wa.debounce = fe, wa.defaults = th, wa.defaultsDeep = uh, wa.defer = Xg, wa.delay = Yg, wa.difference = ug, wa.differenceBy = vg, wa.differenceWith = wg, wa.drop = function(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    return d ? (b = c || b === N ? 1 : xe(b), lc(a, 0 > b ? 0 : b, d)) : []
                }, wa.dropRight = function(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    return d ? (b = c || b === N ? 1 : xe(b), b = d - b, lc(a, 0, 0 > b ? 0 : b)) : []
                }, wa.dropRightWhile = function(a, b) {
                    return a && a.length ? uc(a, rd(b, 3), !0, !0) : []
                }, wa.dropWhile = function(a, b) {
                    return a && a.length ? uc(a, rd(b, 3), !0) : []
                }, wa.fill = function(a, b, c, d) {
                    var e = null == a ? 0 : a.length;
                    if (!e) return [];
                    for (c && "number" != typeof c && Bd(a, b, c) && (c = 0, d = e), e = a.length, c = xe(c), 0 > c && (c = -c > e ? 0 : e + c), d = d === N || d > e ? e : xe(d), 0 > d && (d += e), d = c > d ? 0 : ye(d); d > c;) a[c++] = b;
                    return a
                }, wa.filter = function(a, b) {
                    return (eh(a) ? f : ub)(a, rd(b, 3))
                }, wa.flatMap = function(a, b) {
                    return vb(ae(a, b), 1)
                }, wa.flatMapDeep = function(a, b) {
                    return vb(ae(a, b), O)
                }, wa.flatMapDepth = function(a, b, c) {
                    return c = c === N ? 1 : xe(c), vb(ae(a, b), c)
                }, wa.flatten = Qd, wa.flattenDeep = function(a) {
                    return (null == a ? 0 : a.length) ? vb(a, O) : []
                }, wa.flattenDepth = function(a, b) {
                    return null != a && a.length ? (b = b === N ? 1 : xe(b), vb(a, b)) : []
                }, wa.flip = function(a) {
                    return gd(a, 512)
                }, wa.flow = Oh, wa.flowRight = Ph, wa.fromPairs = function(a) {
                    for (var b = -1, c = null == a ? 0 : a.length, d = {}; ++b < c;) {
                        var e = a[b];
                        d[e[0]] = e[1]
                    }
                    return d
                }, wa.functions = function(a) {
                    return null == a ? [] : yb(a, Ee(a))
                }, wa.functionsIn = function(a) {
                    return null == a ? [] : yb(a, Fe(a))
                }, wa.groupBy = Pg, wa.initial = function(a) {
                    return (null == a ? 0 : a.length) ? lc(a, 0, -1) : []
                }, wa.intersection = xg, wa.intersectionBy = yg, wa.intersectionWith = zg, wa.invert = vh, wa.invertBy = wh, wa.invokeMap = Qg, wa.iteratee = Ne, wa.keyBy = Rg, wa.keys = Ee, wa.keysIn = Fe, wa.map = ae, wa.mapKeys = function(a, b) {
                    var c = {};
                    return b = rd(b, 3), wb(a, function(a, d, e) {
                        kb(c, b(a, d, e), a)
                    }), c
                }, wa.mapValues = function(a, b) {
                    var c = {};
                    return b = rd(b, 3), wb(a, function(a, d, e) {
                        kb(c, d, b(a, d, e))
                    }), c
                }, wa.matches = function(a) {
                    return Wb(nb(a, 1))
                }, wa.matchesProperty = function(a, b) {
                    return Xb(a, nb(b, 1))
                }, wa.memoize = ge, wa.merge = yh, wa.mergeWith = zh, wa.method = Qh, wa.methodOf = Rh, wa.mixin = Oe, wa.negate = he, wa.nthArg = function(a) {
                    return a = xe(a), gc(function(b) {
                        return Zb(b, a)
                    })
                }, wa.omit = Ah, wa.omitBy = function(a, b) {
                    return Ge(a, he(rd(b)))
                }, wa.once = function(a) {
                    return ce(2, a)
                }, wa.orderBy = function(a, b, c, d) {
                    return null == a ? [] : (eh(b) || (b = null == b ? [] : [b]), c = d ? N : c, eh(c) || (c = null == c ? [] : [c]), $b(a, b, c))
                }, wa.over = Sh, wa.overArgs = Zg, wa.overEvery = Th, wa.overSome = Uh, wa.partial = $g, wa.partialRight = _g, wa.partition = Sg, wa.pick = Bh, wa.pickBy = Ge, wa.property = Qe, wa.propertyOf = function(a) {
                    return function(b) {
                        return null == a ? N : zb(a, b)
                    }
                }, wa.pull = Ag, wa.pullAll = Td, wa.pullAllBy = function(a, b, c) {
                    return a && a.length && b && b.length ? cc(a, b, rd(c, 2)) : a
                }, wa.pullAllWith = function(a, b, c) {
                    return a && a.length && b && b.length ? cc(a, b, N, c) : a
                }, wa.pullAt = Bg, wa.range = Vh, wa.rangeRight = Wh, wa.rearg = ah, wa.reject = function(a, b) {
                    return (eh(a) ? f : ub)(a, he(rd(b, 3)))
                }, wa.remove = function(a, b) {
                    var c = [];
                    if (!a || !a.length) return c;
                    var d = -1,
                        e = [],
                        f = a.length;
                    for (b = rd(b, 3); ++d < f;) {
                        var g = a[d];
                        b(g, d, a) && (c.push(g), e.push(d))
                    }
                    return dc(a, e), c
                }, wa.rest = function(a, b) {
                    if ("function" != typeof a) throw new _e("Expected a function");
                    return b = b === N ? b : xe(b), gc(a, b)
                }, wa.reverse = Ud, wa.sampleSize = function(a, b, c) {
                    return b = (c ? Bd(a, b, c) : b === N) ? 1 : xe(b), (eh(a) ? Za : ic)(a, b)
                }, wa.set = function(a, b, c) {
                    return null == a ? a : jc(a, b, c)
                }, wa.setWith = function(a, b, c, d) {
                    return d = "function" == typeof d ? d : N, null == a ? a : jc(a, b, c, d)
                }, wa.shuffle = function(a) {
                    return (eh(a) ? db : kc)(a)
                }, wa.slice = function(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    return d ? (c && "number" != typeof c && Bd(a, b, c) ? (b = 0, c = d) : (b = null == b ? 0 : xe(b), c = c === N ? d : xe(c)), lc(a, b, c)) : []
                }, wa.sortBy = Tg, wa.sortedUniq = function(a) {
                    return a && a.length ? pc(a) : []
                }, wa.sortedUniqBy = function(a, b) {
                    return a && a.length ? pc(a, rd(b, 2)) : []
                }, wa.split = function(a, b, c) {
                    return c && "number" != typeof c && Bd(a, b, c) && (b = c = N), c = c === N ? 4294967295 : c >>> 0, c ? (a = Be(a)) && ("string" == typeof b || null != b && !jh(b)) && (b = rc(b), !b && Da.test(a)) ? Bc(M(a), 0, c) : a.split(b, c) : []
                }, wa.spread = function(b, c) {
                    if ("function" != typeof b) throw new _e("Expected a function");
                    return c = null == c ? 0 : If(xe(c), 0), gc(function(d) {
                        var e = d[c];
                        return d = Bc(d, 0, c), e && j(d, e), a(b, this, d)
                    })
                }, wa.tail = function(a) {
                    var b = null == a ? 0 : a.length;
                    return b ? lc(a, 1, b) : []
                }, wa.take = function(a, b, c) {
                    return a && a.length ? (b = c || b === N ? 1 : xe(b), lc(a, 0, 0 > b ? 0 : b)) : []
                }, wa.takeRight = function(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    return d ? (b = c || b === N ? 1 : xe(b), b = d - b, lc(a, 0 > b ? 0 : b, d)) : []
                }, wa.takeRightWhile = function(a, b) {
                    return a && a.length ? uc(a, rd(b, 3), !1, !0) : []
                }, wa.takeWhile = function(a, b) {
                    return a && a.length ? uc(a, rd(b, 3)) : []
                }, wa.tap = function(a, b) {
                    return b(a), a
                }, wa.throttle = function(a, b, c) {
                    var d = !0,
                        e = !0;
                    if ("function" != typeof a) throw new _e("Expected a function");
                    return pe(c) && (d = "leading" in c ? !!c.leading : d, e = "trailing" in c ? !!c.trailing : e), fe(a, b, {
                        leading: d,
                        maxWait: b,
                        trailing: e
                    })
                }, wa.thru = Yd, wa.toArray = ve, wa.toPairs = Ch, wa.toPairsIn = Dh, wa.toPath = function(a) {
                    return eh(a) ? i(a, Kd) : ue(a) ? [a] : Ic(tg(Be(a)))
                }, wa.toPlainObject = Ae, wa.transform = function(a, b, d) {
                    var e = eh(a),
                        f = e || gh(a) || lh(a);
                    if (b = rd(b, 4), null == d) {
                        var g = a && a.constructor;
                        d = f ? e ? new g : [] : pe(a) && me(g) ? cg(qf(a)) : {}
                    }
                    return (f ? c : wb)(a, function(a, c, e) {
                        return b(d, a, c, e)
                    }), d
                }, wa.unary = function(a) {
                    return be(a, 1)
                }, wa.union = Cg, wa.unionBy = Dg, wa.unionWith = Eg, wa.uniq = function(a) {
                    return a && a.length ? sc(a) : []
                }, wa.uniqBy = function(a, b) {
                    return a && a.length ? sc(a, rd(b, 2)) : []
                }, wa.uniqWith = function(a, b) {
                    return b = "function" == typeof b ? b : N, a && a.length ? sc(a, N, b) : []
                }, wa.unset = function(a, b) {
                    return null == a || tc(a, b)
                }, wa.unzip = Vd, wa.unzipWith = Wd, wa.update = function(a, b, c) {
                    return null == a ? a : jc(a, b, zc(c)(zb(a, b)), void 0)
                }, wa.updateWith = function(a, b, c, d) {
                    return d = "function" == typeof d ? d : N, null != a && (a = jc(a, b, zc(c)(zb(a, b)), d)), a
                }, wa.values = He, wa.valuesIn = function(a) {
                    return null == a ? [] : B(a, Fe(a))
                }, wa.without = Fg, wa.words = Ke, wa.wrap = function(a, b) {
                    return $g(zc(b), a)
                }, wa.xor = Gg, wa.xorBy = Hg, wa.xorWith = Ig, wa.zip = Jg, wa.zipObject = function(a, b) {
                    return xc(a || [], b || [], fb)
                }, wa.zipObjectDeep = function(a, b) {
                    return xc(a || [], b || [], jc)
                }, wa.zipWith = Kg, wa.entries = Ch, wa.entriesIn = Dh, wa.extend = ph, wa.extendWith = qh, Oe(wa, wa), wa.add = Xh, wa.attempt = Mh, wa.camelCase = Eh, wa.capitalize = Ie, wa.ceil = Yh, wa.clamp = function(a, b, c) {
                    return c === N && (c = b, b = N), c !== N && (c = ze(c), c = c === c ? c : 0), b !== N && (b = ze(b), b = b === b ? b : 0), mb(ze(a), b, c)
                }, wa.clone = function(a) {
                    return nb(a, 4)
                }, wa.cloneDeep = function(a) {
                    return nb(a, 5)
                }, wa.cloneDeepWith = function(a, b) {
                    return b = "function" == typeof b ? b : N, nb(a, 5, b)
                }, wa.cloneWith = function(a, b) {
                    return b = "function" == typeof b ? b : N, nb(a, 4, b)
                }, wa.conformsTo = function(a, b) {
                    return null == b || pb(a, b, Ee(b))
                }, wa.deburr = Je, wa.defaultTo = function(a, b) {
                    return null == a || a !== a ? b : a
                }, wa.divide = Zh, wa.endsWith = function(a, b, c) {
                    a = Be(a), b = rc(b);
                    var d = a.length,
                        d = c = c === N ? d : mb(xe(c), 0, d);
                    return c -= b.length, c >= 0 && a.slice(c, d) == b
                }, wa.eq = ie, wa.escape = function(a) {
                    return (a = Be(a)) && X.test(a) ? a.replace(V, _a) : a
                }, wa.escapeRegExp = function(a) {
                    return (a = Be(a)) && da.test(a) ? a.replace(ca, "\\$&") : a
                }, wa.every = function(a, b, c) {
                    var d = eh(a) ? e : sb;
                    return c && Bd(a, b, c) && (b = N), d(a, rd(b, 3))
                }, wa.find = Ng, wa.findIndex = Od, wa.findKey = function(a, b) {
                    return n(a, rd(b, 3), wb)
                }, wa.findLast = Og, wa.findLastIndex = Pd, wa.findLastKey = function(a, b) {
                    return n(a, rd(b, 3), xb)
                }, wa.floor = $h, wa.forEach = $d, wa.forEachRight = _d, wa.forIn = function(a, b) {
                    return null == a ? a : fg(a, rd(b, 3), Fe)
                }, wa.forInRight = function(a, b) {
                    return null == a ? a : gg(a, rd(b, 3), Fe)
                }, wa.forOwn = function(a, b) {
                    return a && wb(a, rd(b, 3))
                }, wa.forOwnRight = function(a, b) {
                    return a && xb(a, rd(b, 3))
                }, wa.get = Ce, wa.gt = bh, wa.gte = ch, wa.has = function(a, b) {
                    return null != a && vd(a, b, Db)
                }, wa.hasIn = De, wa.head = Rd, wa.identity = Me, wa.includes = function(a, b, c, d) {
                    return a = je(a) ? a : He(a), c = c && !d ? xe(c) : 0, d = a.length, 0 > c && (c = If(d + c, 0)), te(a) ? d >= c && -1 < a.indexOf(b, c) : !!d && -1 < p(a, b, c)
                }, wa.indexOf = function(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    return d ? (c = null == c ? 0 : xe(c), 0 > c && (c = If(d + c, 0)), p(a, b, c)) : -1
                }, wa.inRange = function(a, b, c) {
                    return b = we(b), c === N ? (c = b, b = 0) : c = we(c), a = ze(a), a >= Jf(b, c) && a < If(b, c)
                }, wa.invoke = xh, wa.isArguments = dh, wa.isArray = eh, wa.isArrayBuffer = fh, wa.isArrayLike = je, wa.isArrayLikeObject = ke, wa.isBoolean = function(a) {
                    return !0 === a || !1 === a || qe(a) && "[object Boolean]" == Bb(a)
                }, wa.isBuffer = gh, wa.isDate = hh, wa.isElement = function(a) {
                    return qe(a) && 1 === a.nodeType && !se(a)
                }, wa.isEmpty = function(a) {
                    if (null == a) return !0;
                    if (je(a) && (eh(a) || "string" == typeof a || "function" == typeof a.splice || gh(a) || lh(a) || dh(a))) return !a.length;
                    var b = og(a);
                    if ("[object Map]" == b || "[object Set]" == b) return !a.size;
                    if (Ed(a)) return !Tb(a).length;
                    for (var c in a)
                        if (ef.call(a, c)) return !1;
                    return !0
                }, wa.isEqual = function(a, b) {
                    return Lb(a, b)
                }, wa.isEqualWith = function(a, b, c) {
                    var d = (c = "function" == typeof c ? c : N) ? c(a, b) : N;
                    return d === N ? Lb(a, b, N, c) : !!d
                }, wa.isError = le, wa.isFinite = function(a) {
                    return "number" == typeof a && Ff(a)
                }, wa.isFunction = me, wa.isInteger = ne, wa.isLength = oe, wa.isMap = ih, wa.isMatch = function(a, b) {
                    return a === b || Nb(a, b, td(b))
                }, wa.isMatchWith = function(a, b, c) {
                    return c = "function" == typeof c ? c : N, Nb(a, b, td(b), c)
                }, wa.isNaN = function(a) {
                    return re(a) && a != +a
                }, wa.isNative = function(a) {
                    if (pg(a)) throw new Ve("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return Ob(a)
                }, wa.isNil = function(a) {
                    return null == a
                }, wa.isNull = function(a) {
                    return null === a
                }, wa.isNumber = re, wa.isObject = pe, wa.isObjectLike = qe, wa.isPlainObject = se, wa.isRegExp = jh, wa.isSafeInteger = function(a) {
                    return ne(a) && a >= -9007199254740991 && 9007199254740991 >= a
                }, wa.isSet = kh, wa.isString = te, wa.isSymbol = ue, wa.isTypedArray = lh, wa.isUndefined = function(a) {
                    return a === N
                }, wa.isWeakMap = function(a) {
                    return qe(a) && "[object WeakMap]" == og(a)
                }, wa.isWeakSet = function(a) {
                    return qe(a) && "[object WeakSet]" == Bb(a)
                }, wa.join = function(a, b) {
                    return null == a ? "" : Gf.call(a, b)
                }, wa.kebabCase = Fh, wa.last = Sd, wa.lastIndexOf = function(a, b, c) {
                    var d = null == a ? 0 : a.length;
                    if (!d) return -1;
                    var e = d;
                    if (c !== N && (e = xe(c), e = 0 > e ? If(d + e, 0) : Jf(e, d - 1)), b === b) {
                        for (c = e + 1; c-- && a[c] !== b;);
                        a = c
                    } else a = o(a, r, e, !0);
                    return a
                }, wa.lowerCase = Gh, wa.lowerFirst = Hh, wa.lt = mh, wa.lte = nh, wa.max = function(a) {
                    return a && a.length ? tb(a, Me, Cb) : N
                }, wa.maxBy = function(a, b) {
                    return a && a.length ? tb(a, rd(b, 2), Cb) : N
                }, wa.mean = function(a) {
                    return s(a, Me)
                }, wa.meanBy = function(a, b) {
                    return s(a, rd(b, 2))
                }, wa.min = function(a) {
                    return a && a.length ? tb(a, Me, Ub) : N
                }, wa.minBy = function(a, b) {
                    return a && a.length ? tb(a, rd(b, 2), Ub) : N
                }, wa.stubArray = Re, wa.stubFalse = Se, wa.stubObject = function() {
                    return {}
                }, wa.stubString = function() {
                    return ""
                }, wa.stubTrue = function() {
                    return !0
                }, wa.multiply = _h, wa.nth = function(a, b) {
                    return a && a.length ? Zb(a, xe(b)) : N
                }, wa.noConflict = function() {
                    return Na._ === this && (Na._ = kf), this
                }, wa.noop = Pe, wa.now = Ug, wa.pad = function(a, b, c) {
                    a = Be(a);
                    var d = (b = xe(b)) ? L(a) : 0;
                    return !b || d >= b ? a : (b = (b - d) / 2, _c(Cf(b), c) + a + _c(Bf(b), c))
                }, wa.padEnd = function(a, b, c) {
                    a = Be(a);
                    var d = (b = xe(b)) ? L(a) : 0;
                    return b && b > d ? a + _c(b - d, c) : a
                }, wa.padStart = function(a, b, c) {
                    a = Be(a);
                    var d = (b = xe(b)) ? L(a) : 0;
                    return b && b > d ? _c(b - d, c) + a : a
                }, wa.parseInt = function(a, b, c) {
                    return c || null == b ? b = 0 : b && (b = +b), Lf(Be(a).replace(fa, ""), b || 0)
                }, wa.random = function(a, b, c) {
                    if (c && "boolean" != typeof c && Bd(a, b, c) && (b = c = N), c === N && ("boolean" == typeof b ? (c = b, b = N) : "boolean" == typeof a && (c = a, a = N)), a === N && b === N ? (a = 0, b = 1) : (a = we(a), b === N ? (b = a, a = 0) : b = we(b)), a > b) {
                        var d = a;
                        a = b, b = d
                    }
                    return c || a % 1 || b % 1 ? (c = Mf(), Jf(a + c * (b - a + Ja("1e-" + ((c + "").length - 1))), b)) : ec(a, b)
                }, wa.reduce = function(a, b, c) {
                    var d = eh(a) ? k : v,
                        e = 3 > arguments.length;
                    return d(a, rd(b, 4), c, e, dg)
                }, wa.reduceRight = function(a, b, c) {
                    var d = eh(a) ? l : v,
                        e = 3 > arguments.length;
                    return d(a, rd(b, 4), c, e, eg)
                }, wa.repeat = function(a, b, c) {
                    return b = (c ? Bd(a, b, c) : b === N) ? 1 : xe(b), fc(Be(a), b)
                }, wa.replace = function() {
                    var a = arguments,
                        b = Be(a[0]);
                    return 3 > a.length ? b : b.replace(a[1], a[2])
                }, wa.result = function(a, b, c) {
                    b = Ac(b, a);
                    var d = -1,
                        e = b.length;
                    for (e || (e = 1, a = N); ++d < e;) {
                        var f = null == a ? N : a[Kd(b[d])];
                        f === N && (d = e, f = c), a = me(f) ? f.call(a) : f
                    }
                    return a
                }, wa.round = ai, wa.runInContext = cb, wa.sample = function(a) {
                    return (eh(a) ? Sa : hc)(a)
                }, wa.size = function(a) {
                    if (null == a) return 0;
                    if (je(a)) return te(a) ? L(a) : a.length;
                    var b = og(a);
                    return "[object Map]" == b || "[object Set]" == b ? a.size : Tb(a).length
                }, wa.snakeCase = Ih, wa.some = function(a, b, c) {
                    var d = eh(a) ? m : mc;
                    return c && Bd(a, b, c) && (b = N), d(a, rd(b, 3))
                }, wa.sortedIndex = function(a, b) {
                    return nc(a, b)
                }, wa.sortedIndexBy = function(a, b, c) {
                    return oc(a, b, rd(c, 2))
                }, wa.sortedIndexOf = function(a, b) {
                    var c = null == a ? 0 : a.length;
                    if (c) {
                        var d = nc(a, b);
                        if (c > d && ie(a[d], b)) return d
                    }
                    return -1
                }, wa.sortedLastIndex = function(a, b) {
                    return nc(a, b, !0)
                }, wa.sortedLastIndexBy = function(a, b, c) {
                    return oc(a, b, rd(c, 2), !0)
                }, wa.sortedLastIndexOf = function(a, b) {
                    if (null == a ? 0 : a.length) {
                        var c = nc(a, b, !0) - 1;
                        if (ie(a[c], b)) return c
                    }
                    return -1
                }, wa.startCase = Jh, wa.startsWith = function(a, b, c) {
                    return a = Be(a), c = null == c ? 0 : mb(xe(c), 0, a.length), b = rc(b), a.slice(c, c + b.length) == b
                }, wa.subtract = bi, wa.sum = function(a) {
                    return a && a.length ? x(a, Me) : 0
                }, wa.sumBy = function(a, b) {
                    return a && a.length ? x(a, rd(b, 2)) : 0
                }, wa.template = function(a, b, c) {
                    var d = wa.templateSettings;
                    c && Bd(a, b, c) && (b = N), a = Be(a), b = qh({}, b, d, hd), c = qh({}, b.imports, d.imports, hd);
                    var e, f, g = Ee(c),
                        h = B(c, g),
                        i = 0;
                    c = b.interpolate || ua;
                    var j = "__p+='";
                    c = Ze((b.escape || ua).source + "|" + c.source + "|" + (c === $ ? ma : ua).source + "|" + (b.evaluate || ua).source + "|$", "g");
                    var k = "sourceURL" in b ? "//# sourceURL=" + b.sourceURL + "\n" : "";
                    if (a.replace(c, function(b, c, d, g, h, k) {
                        return d || (d = g), j += a.slice(i, k).replace(va, F), c && (e = !0, j += "'+__e(" + c + ")+'"), h && (f = !0, j += "';" + h + ";\n__p+='"), d && (j += "'+((__t=(" + d + "))==null?'':__t)+'"), i = k + b.length, b
                    }), j += "';", (b = b.variable) || (j = "with(obj){" + j + "}"), j = (f ? j.replace(R, "") : j).replace(S, "$1").replace(T, "$1;"), j = "function(" + (b || "obj") + "){" + (b ? "" : "obj||(obj={});") + "var __t,__p=''" + (e ? ",__e=_.escape" : "") + (f ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + j + "return __p}", b = Mh(function() {
                        return We(g, k + "return " + j).apply(N, h)
                    }), b.source = j, le(b)) throw b;
                    return b
                }, wa.times = function(a, b) {
                    if (a = xe(a), 1 > a || a > 9007199254740991) return [];
                    var c = 4294967295,
                        d = Jf(a, 4294967295);
                    for (b = rd(b), a -= 4294967295, d = y(d, b); ++c < a;) b(c);
                    return d
                }, wa.toFinite = we, wa.toInteger = xe, wa.toLength = ye, wa.toLower = function(a) {
                    return Be(a).toLowerCase()
                }, wa.toNumber = ze, wa.toSafeInteger = function(a) {
                    return a ? mb(xe(a), -9007199254740991, 9007199254740991) : 0 === a ? a : 0
                }, wa.toString = Be, wa.toUpper = function(a) {
                    return Be(a).toUpperCase()
                }, wa.trim = function(a, b, c) {
                    return (a = Be(a)) && (c || b === N) ? a.replace(ea, "") : a && (b = rc(b)) ? (a = M(a), c = M(b), b = D(a, c), c = E(a, c) + 1, Bc(a, b, c).join("")) : a
                }, wa.trimEnd = function(a, b, c) {
                    return (a = Be(a)) && (c || b === N) ? a.replace(ga, "") : a && (b = rc(b)) ? (a = M(a), b = E(a, M(b)) + 1, Bc(a, 0, b).join("")) : a
                }, wa.trimStart = function(a, b, c) {
                    return (a = Be(a)) && (c || b === N) ? a.replace(fa, "") : a && (b = rc(b)) ? (a = M(a), b = D(a, M(b)), Bc(a, b).join("")) : a
                }, wa.truncate = function(a, b) {
                    var c = 30,
                        d = "...";
                    if (pe(b)) var e = "separator" in b ? b.separator : e,
                        c = "length" in b ? xe(b.length) : c,
                        d = "omission" in b ? rc(b.omission) : d;
                    a = Be(a);
                    var f = a.length;
                    if (Da.test(a)) var g = M(a),
                        f = g.length;
                    if (c >= f) return a;
                    if (f = c - L(d), 1 > f) return d;
                    if (c = g ? Bc(g, 0, f).join("") : a.slice(0, f), e === N) return c + d;
                    if (g && (f += c.length - f), jh(e)) {
                        if (a.slice(f).search(e)) {
                            var h = c;
                            for (e.global || (e = Ze(e.source, Be(na.exec(e)) + "g")), e.lastIndex = 0; g = e.exec(h);) var i = g.index;
                            c = c.slice(0, i === N ? f : i)
                        }
                    } else a.indexOf(rc(e), f) != f && (e = c.lastIndexOf(e), e > -1 && (c = c.slice(0, e)));
                    return c + d
                }, wa.unescape = function(a) {
                    return (a = Be(a)) && W.test(a) ? a.replace(U, ab) : a
                }, wa.uniqueId = function(a) {
                    var b = ++ff;
                    return Be(a) + b
                }, wa.upperCase = Kh, wa.upperFirst = Lh, wa.each = $d, wa.eachRight = _d, wa.first = Rd, Oe(wa, function() {
                    var a = {};
                    return wb(wa, function(b, c) {
                        ef.call(wa.prototype, c) || (a[c] = b)
                    }), a
                }(), {
                    chain: !1
                }), wa.VERSION = "4.17.10", c("bind bindKey curry curryRight partial partialRight".split(" "), function(a) {
                    wa[a].placeholder = wa
                }), c(["drop", "take"], function(a, b) {
                    Ba.prototype[a] = function(c) {
                        c = c === N ? 1 : If(xe(c), 0);
                        var d = this.__filtered__ && !b ? new Ba(this) : this.clone();
                        return d.__filtered__ ? d.__takeCount__ = Jf(c, d.__takeCount__) : d.__views__.push({
                            size: Jf(c, 4294967295),
                            type: a + (0 > d.__dir__ ? "Right" : "")
                        }), d
                    }, Ba.prototype[a + "Right"] = function(b) {
                        return this.reverse()[a](b).reverse()
                    }
                }), c(["filter", "map", "takeWhile"], function(a, b) {
                    var c = b + 1,
                        d = 1 == c || 3 == c;
                    Ba.prototype[a] = function(a) {
                        var b = this.clone();
                        return b.__iteratees__.push({
                            iteratee: rd(a, 3),
                            type: c
                        }), b.__filtered__ = b.__filtered__ || d, b
                    }
                }), c(["head", "last"], function(a, b) {
                    var c = "take" + (b ? "Right" : "");
                    Ba.prototype[a] = function() {
                        return this[c](1).value()[0]
                    }
                }), c(["initial", "tail"], function(a, b) {
                    var c = "drop" + (b ? "" : "Right");
                    Ba.prototype[a] = function() {
                        return this.__filtered__ ? new Ba(this) : this[c](1)
                    }
                }), Ba.prototype.compact = function() {
                    return this.filter(Me)
                }, Ba.prototype.find = function(a) {
                    return this.filter(a).head()
                }, Ba.prototype.findLast = function(a) {
                    return this.reverse().find(a)
                }, Ba.prototype.invokeMap = gc(function(a, b) {
                    return "function" == typeof a ? new Ba(this) : this.map(function(c) {
                        return Hb(c, a, b)
                    })
                }), Ba.prototype.reject = function(a) {
                    return this.filter(he(rd(a)))
                }, Ba.prototype.slice = function(a, b) {
                    a = xe(a);
                    var c = this;
                    return c.__filtered__ && (a > 0 || 0 > b) ? new Ba(c) : (0 > a ? c = c.takeRight(-a) : a && (c = c.drop(a)), b !== N && (b = xe(b), c = 0 > b ? c.dropRight(-b) : c.take(b - a)), c)
                }, Ba.prototype.takeRightWhile = function(a) {
                    return this.reverse().takeWhile(a).reverse()
                }, Ba.prototype.toArray = function() {
                    return this.take(4294967295)
                }, wb(Ba.prototype, function(a, b) {
                    var c = /^(?:filter|find|map|reject)|While$/.test(b),
                        d = /^(?:head|last)$/.test(b),
                        e = wa[d ? "take" + ("last" == b ? "Right" : "") : b],
                        f = d || /^find/.test(b);
                    e && (wa.prototype[b] = function() {
                        function b(a) {
                            return a = e.apply(wa, j([a], h)), d && m ? a[0] : a
                        }
                        var g = this.__wrapped__,
                            h = d ? [1] : arguments,
                            i = g instanceof Ba,
                            k = h[0],
                            l = i || eh(g);
                        l && c && "function" == typeof k && 1 != k.length && (i = l = !1);
                        var m = this.__chain__,
                            n = !!this.__actions__.length,
                            k = f && !m,
                            i = i && !n;
                        return !f && l ? (g = i ? g : new Ba(this), g = a.apply(g, h), g.__actions__.push({
                            func: Yd,
                            args: [b],
                            thisArg: N
                        }), new ya(g, m)) : k && i ? a.apply(this, h) : (g = this.thru(b), k ? d ? g.value()[0] : g.value() : g)
                    })
                }), c("pop push shift sort splice unshift".split(" "), function(a) {
                    var b = af[a],
                        c = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru",
                        d = /^(?:pop|shift)$/.test(a);
                    wa.prototype[a] = function() {
                        var a = arguments;
                        if (d && !this.__chain__) {
                            var e = this.value();
                            return b.apply(eh(e) ? e : [], a)
                        }
                        return this[c](function(c) {
                            return b.apply(eh(c) ? c : [], a)
                        })
                    }
                }), wb(Ba.prototype, function(a, b) {
                    var c = wa[b];
                    if (c) {
                        var d = c.name + "";
                        (Vf[d] || (Vf[d] = [])).push({
                            name: b,
                            func: c
                        })
                    }
                }), Vf[Xc(N, 2).name] = [{
                    name: "wrapper",
                    func: N
                }], Ba.prototype.clone = function() {
                    var a = new Ba(this.__wrapped__);
                    return a.__actions__ = Ic(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Ic(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Ic(this.__views__), a
                }, Ba.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var a = new Ba(this);
                        a.__dir__ = -1, a.__filtered__ = !0
                    } else a = this.clone(), a.__dir__ *= -1;
                    return a
                }, Ba.prototype.value = function() {
                    var a, b = this.__wrapped__.value(),
                        c = this.__dir__,
                        d = eh(b),
                        e = 0 > c,
                        f = d ? b.length : 0;
                    a = f;
                    for (var g = this.__views__, h = 0, i = -1, j = g.length; ++i < j;) {
                        var k = g[i],
                            l = k.size;
                        switch (k.type) {
                            case "drop":
                                h += l;
                                break;
                            case "dropRight":
                                a -= l;
                                break;
                            case "take":
                                a = Jf(a, h + l);
                                break;
                            case "takeRight":
                                h = If(h, a - l)
                        }
                    }
                    if (a = {
                        start: h,
                        end: a
                    }, g = a.start, h = a.end, a = h - g, g = e ? h : g - 1, h = this.__iteratees__, i = h.length, j = 0, k = Jf(a, this.__takeCount__), !d || !e && f == a && k == a) return vc(b, this.__actions__);
                    d = [];
                    a: for (; a-- && k > j;) {
                        for (g += c, e = -1, f = b[g]; ++e < i;) {
                            var m = h[e],
                                l = m.type,
                                m = (0, m.iteratee)(f);
                            if (2 == l) f = m;
                            else if (!m) {
                                if (1 == l) continue a;
                                break a
                            }
                        }
                        d[j++] = f
                    }
                    return d
                }, wa.prototype.at = Lg, wa.prototype.chain = function() {
                    return Xd(this)
                }, wa.prototype.commit = function() {
                    return new ya(this.value(), this.__chain__)
                }, wa.prototype.next = function() {
                    this.__values__ === N && (this.__values__ = ve(this.value()));
                    var a = this.__index__ >= this.__values__.length;
                    return {
                        done: a,
                        value: a ? N : this.__values__[this.__index__++]
                    }
                }, wa.prototype.plant = function(a) {
                    for (var b, c = this; c instanceof xa;) {
                        var d = Nd(c);
                        d.__index__ = 0, d.__values__ = N, b ? e.__wrapped__ = d : b = d;
                        var e = d,
                            c = c.__wrapped__
                    }
                    return e.__wrapped__ = a, b
                }, wa.prototype.reverse = function() {
                    var a = this.__wrapped__;
                    return a instanceof Ba ? (this.__actions__.length && (a = new Ba(this)), a = a.reverse(), a.__actions__.push({
                        func: Yd,
                        args: [Ud],
                        thisArg: N
                    }), new ya(a, this.__chain__)) : this.thru(Ud)
                }, wa.prototype.toJSON = wa.prototype.valueOf = wa.prototype.value = function() {
                    return vc(this.__wrapped__, this.__actions__)
                }, wa.prototype.first = wa.prototype.head, vf && (wa.prototype[vf] = Zd), wa
            }();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (Na._ = bb, define(function() {
            return bb
        })) : Pa ? ((Pa.exports = bb)._ = bb, Oa._ = bb) : Na._ = bb
    }.call(this),
    function(a, b) {
        if ("function" == typeof define && define.amd) define(["exports"], b);
        else if ("undefined" != typeof exports) b(exports);
        else {
            var c = {
                exports: {}
            };
            b(c.exports), a.TrelloApi = c.exports
        }
    }(this, function(a) {
        "use strict";

        function b(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            d = function() {
                function a() {
                    b(this, a), this.key = "41257716bae3f0f35422a228fbd18c97"
                }
                return c(a, [{
                    key: "setToken",
                    value: function(a) {
                        this.token = a
                    }
                }, {
                    key: "getMemberBoards",
                    value: function() {
                        return jQuery.getAsObservable("https://api.trello.com/1/members/me", {
                            boards: "open",
                            board_fields: "name,url,prefs",
                            fields: "none",
                            key: this.key,
                            token: this.token
                        })
                    }
                }, {
                    key: "getListsForBoard",
                    value: function(a) {
                        return jQuery.getAsObservable("https://api.trello.com/1/boards/" + a + "/lists", {
                            filter: "open",
                            key: this.key,
                            token: this.token
                        })
                    }
                }, {
                    key: "createCard",
                    value: function(a, b, c, d) {
                        return jQuery.postAsObservable("https://api.trello.com/1/cards", {
                            idList: a,
                            name: b,
                            desc: c,
                            pos: "bottom",
                            urlSource: d,
                            key: this.key,
                            token: this.token
                        })
                    }
                }]), a
            }();
        a["default"] = d
    }),
    function(a, b) {
        if ("function" == typeof define && define.amd) define(["exports"], b);
        else if ("undefined" != typeof exports) b(exports);
        else {
            var c = {
                exports: {}
            };
            b(c.exports), a.TrelloData = c.exports
        }
    }(this, function(a) {
        "use strict";

        function b(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            d = function() {
                function a() {
                    var c = this;
                    b(this, a), this.key = "trello-data", this.dataUpdates$ = new Rx.ReplaySubject, this.data$ = new Rx.ReplaySubject(1), this.data = this.getEmptyData(), chrome.storage.local.get(this.key, function(a) {
                        log.debug("TrelloData", "storage retrieved", a);
                        var b = a[c.key] ? a[c.key] : c.getEmptyData();
                        c.data = Object.assign(c.data, b), c.data$.onNext(c.data), c.dataUpdates$.doOnNext(function(a) {
                            return log.debug("TrelloData", "applying update", a)
                        }).scan(function(a, b) {
                            return Object.assign(a, b)
                        }, c.data).subscribe(function(a) {
                            log.debug("TrelloData", "updated", a), c.data = a, c.data$.onNext(c.data);
                            var b = {};
                            b[c.key] = c.data, chrome.storage.local.set(b, function() {
                                return log.debug("TrelloData", "storage saved", b)
                            })
                        })
                    }), chrome.storage.onChanged.addListener(function(a, b) {
                        if ("local" === b)
                            for (var d in a)
                                if (d === c.key) {
                                    var e = a[d].newValue ? a[d].newValue : c.getEmptyData();
                                    log.debug("TrelloData", "storage change", e), c.dataUpdates$.onNext(e)
                                }
                    })
                }
                return c(a, [{
                    key: "dataObservable",
                    value: function() {
                        return this.data$
                    }
                }, {
                    key: "getData",
                    value: function() {
                        return this.data
                    }
                }, {
                    key: "updateToken",
                    value: function(a) {
                        this.dataUpdates$.onNext({
                            token: a
                        })
                    }
                }, {
                    key: "updateBoards",
                    value: function(a) {
                        this.dataUpdates$.onNext({
                            boards: a
                        })
                    }
                }, {
                    key: "setLastSelection",
                    value: function(a, b) {
                        this.dataUpdates$.onNext({
                            lastSelection: {
                                boardId: a,
                                listId: b
                            }
                        })
                    }
                }, {
                    key: "getEmptyData",
                    value: function() {
                        return {
                            boards: [],
                            token: null,
                            version: 1,
                            lastSelection: {
                                boardId: null,
                                listId: null
                            }
                        }
                    }
                }]), a
            }();
        a["default"] = d
    }),
    function(a, b) {
        if ("function" == typeof define && define.amd) define(["exports", "TrelloApi", "TrelloData"], b);
        else if ("undefined" != typeof exports) b(exports, require("TrelloApi"), require("TrelloData"));
        else {
            var c = {
                exports: {}
            };
            b(c.exports, a.TrelloApi, a.TrelloData), a.TrelloChrome = c.exports
        }
    }(this, function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var f = d(b),
            g = d(c),
            h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function() {
                function a() {
                    var b = this;
                    e(this, a), this.data = new g["default"], this.api = new f["default"], this.data.dataObservable().map(function(a) {
                        return a.token
                    }).distinctUntilChanged().subscribe(function(a) {
                        return b.api.setToken(a)
                    }), this.loadBoardsRequest = new Rx.Subject, this.loadBoardsRequest.doOnNext(function() {
                        return log.debug("TrelloChrome", "load boards requested")
                    }).pausableBuffered(this.loggedInObservable()).flatMap(function() {
                        return b.api.getMemberBoards()
                    }).map(function(a) {
                        return a.data.boards = a.data.boards.map(function(a) {
                            return _.extend(a, {
                                name: _.escape(a.name)
                            })
                        }), a.data
                    }).doOnNext(function(a) {
                        return log.debug("TrelloChrome", a)
                    }).subscribe(function(a) {
                        b.data.updateBoards(a.boards)
                    })
                }
                return h(a, [{
                    key: "dataObservable",
                    value: function() {
                        return this.data.dataObservable()
                    }
                }, {
                    key: "setLastSelection",
                    value: function(a, b) {
                        this.data.setLastSelection(a, b)
                    }
                }, {
                    key: "loadBoards",
                    value: function() {
                        log.debug("TrelloChrome", "loadBoards"), this.loadBoardsRequest.onNext(!0)
                    }
                }, {
                    key: "createCard",
                    value: function(a, b, c, d) {
                        return this.api.createCard(a, b, c, d)
                    }
                }, {
                    key: "getListsForBoard",
                    value: function(a) {
                        return this.api.getListsForBoard(a).map(function(a) {
                            return a.data
                        }).map(function(a) {
                            return a.map(function(a) {
                                return _.extend(a, {
                                    name: _.escape(a.name)
                                })
                            })
                        })
                    }
                }, {
                    key: "getBoardsForQuery",
                    value: function(a) {
                        return this.data.dataObservable().map(function(a) {
                            return a.boards
                        }).map(function(b) {
                            return b.map(function(b) {
                                return b.score = b.name.score(a, .5), b
                            }).filter(function(a) {
                                return a.score > .4
                            }).sort(function(a, b) {
                                return b.score - a.score
                            })
                        })
                    }
                }, {
                    key: "updateToken",
                    value: function(a) {
                        this.data.updateToken(a)
                    }
                }, {
                    key: "isLoggedIn",
                    value: function() {
                        return null !== this.data.getData().token
                    }
                }, {
                    key: "loggedInObservable",
                    value: function() {
                        return this.data.dataObservable().map(function(a) {
                            return null !== a.token
                        }).distinctUntilChanged().doOnNext(function(a) {
                            return log.debug("TrelloChrome", "loggedInObservable", a)
                        })
                    }
                }]), a
            }();
        a["default"] = i
    }),
    function(a, b) {
        if ("function" == typeof define && define.amd) define(["exports"], b);
        else if ("undefined" != typeof exports) b(exports);
        else {
            var c = {
                exports: {}
            };
            b(c.exports), a.OmniboxManager = c.exports
        }
    }(this, function(a) {
        "use strict";

        function b(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            d = function() {
                function a(c) {
                    b(this, a), this.tchrome = c, this.defaultSuggestion = null, this.currentQuery = null
                }
                return c(a, [{
                    key: "getSanitizedName",
                    value: function(a) {
                        var b = a.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        return b
                    }
                }, {
                    key: "bind",
                    value: function() {
                        var a = this;
                        chrome.omnibox.onInputStarted.addListener(function() {
                            log.debug("onInputStarted"), a.ensureLoggedIn() && a.tchrome.loadBoards()
                        }), chrome.omnibox.onInputChanged.addListener(function(b, c) {
                            a.onTextChanged(b, c)
                        }), chrome.omnibox.onInputEntered.addListener(function(b) {
                            a.onInputEntered(b)
                        }), chrome.omnibox.onInputCancelled.addListener(function() {
                            log.debug("onInputCancelled"), a.currentQuery = null
                        })
                    }
                }, {
                    key: "ensureLoggedIn",
                    value: function() {
                        return this.tchrome.isLoggedIn() ? !0 : (chrome.omnibox.setDefaultSuggestion({
                            description: "Press enter to link your Trello account."
                        }), !1)
                    }
                }, {
                    key: "onTextChanged",
                    value: function(a, b) {
                        var c = this;
                        return log.debug("onInputChanged", a), this.defaultSuggestion = null, this.ensureLoggedIn() ? (this.currentQuery = a, void this.tchrome.getBoardsForQuery(a).subscribeOn(Rx.Scheduler.immediate).observeOn(Rx.Scheduler.immediate).subscribe(function(d) {
                            if (c.currentQuery !== a) return void log.debug("Dropping", a, "current", c.currentQuery);
                            d.length > 0 ? (c.defaultSuggestion = d[0], chrome.omnibox.setDefaultSuggestion({
                                description: c.getSanitizedName(c.defaultSuggestion, a)
                            }), d.shift()) : (c.defaultSuggestion = null, chrome.omnibox.setDefaultSuggestion({
                                description: "Search Trello for " + a
                            }));
                            var e = d.map(function(b) {
                                return c.boardToSuggestion(b, a)
                            });
                            log.debug("onTextChanged sending suggestion", a, e), b(e)
                        })) : void b([])
                    }
                }, {
                    key: "boardToSuggestion",
                    value: function(a, b) {
                        return {
                            content: a.url,
                            description: this.getSanitizedName(a, b)
                        }
                    }
                }, {
                    key: "onInputEntered",
                    value: function(a) {
                        if (console.log(["onInputEntered", a]), this.currentQuery = null, !this.tchrome.isLoggedIn()) return void chrome.tabs.create({
                            url: "login.html"
                        });
                        var b;
                        b = 0 === a.indexOf("https://") ? a : null !== this.defaultSuggestion ? this.defaultSuggestion.url : "https://trello.com/search?q=" + a, chrome.tabs.query({
                            active: !0,
                            currentWindow: !0
                        }, function(a) {
                            chrome.tabs.update(a[0].id, {
                                url: b
                            })
                        })
                    }
                }]), a
            }();
        a["default"] = d
    }),
    function(a, b) {
        if ("function" == typeof define && define.amd) define(["TrelloChrome", "OmniboxManager", "PopupViewController", "LoginViewController"], b);
        else if ("undefined" != typeof exports) b(require("TrelloChrome"), require("OmniboxManager"), require("PopupViewController"), require("LoginViewController"));
        else {
            var c = {
                exports: {}
            };
            b(a.TrelloChrome, a.OmniboxManager, a.PopupViewController, a.LoginViewController), a.app = c.exports
        }
    }(this, function(a, b, c, d) {
        "use strict";

        function e(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var f = e(a),
            g = e(b),
            h = e(c),
            i = e(d);
        log.setDefaultLevel("trace");
        var j = new f["default"];
        if (chrome.extension.getBackgroundPage() === window) {
            log.debug("Running as background");
            var k = new g["default"](j);
            k.bind(), chrome.runtime.onInstalled.addListener(function(a) {
                log.info("previousVersion", a.previousVersion), "install" === a.reason && chrome.tabs.create({
                    url: "login.html"
                })
            })
        } else if ($("#page-login").length) {
            log.debug("Running as login");
            var l = new i["default"](j);
            l.bind()
        } else if ($("#page-popup").length) {
            log.debug("Running as popup");
            var m = new i["default"](j);
            m.bind();
            var l = new h["default"](j);
            l.bind()
        }
    });