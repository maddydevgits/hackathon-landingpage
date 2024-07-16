(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4979], {
        96080: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            t.__esModule = !0;
            var o = r(n(34078)),
                i = n(67422),
                a = function() {
                    function e(e) {
                        this.options = {}, this.config = e
                    }
                    return e.prototype.resize = function(e, t, n, r) {
                        return this.setOption("rs", [e, t, n, r ? 1 : 0].join(":")), this
                    }, e.prototype.size = function(e, t, n) {
                        return this.setOption("s", [e, t, n ? 1 : 0].join(":")), this
                    }, e.prototype.resizingType = function(e) {
                        return this.setOption("rs", e), this
                    }, e.prototype.width = function(e) {
                        return this.setOption("w", "" + e), this
                    }, e.prototype.height = function(e) {
                        return this.setOption("h", "" + e), this
                    }, e.prototype.dpr = function(e) {
                        return e > 0 && this.setOption("dpr", "" + e), this
                    }, e.prototype.enlarge = function(e) {
                        return this.setOption("el", "" + e), this
                    }, e.prototype.gravity = function(e) {
                        return i.isFocusPoint(e) ? this.setOption("g", "fp:" + e.x + ":" + e.y) : this.setOption("g", e), this
                    }, e.prototype.quality = function(e) {
                        return this.setOption("q", "" + e), this
                    }, e.prototype.background = function(e) {
                        return i.isRGBColor(e) ? this.setOption("bg", e.r + ":" + e.g + ":" + e.b) : this.setOption("bg", e), this
                    }, e.prototype.blur = function(e) {
                        return this.setOption("bl", "" + e), this
                    }, e.prototype.sharpen = function(e) {
                        return this.setOption("sh", "" + e), this
                    }, e.prototype.watermark = function(e, t, n, r) {
                        return this.setOption("wm", e + ":" + t + ":" + (n ? n.x + ":" + n.y : "") + ":" + r), this
                    }, e.prototype.preset = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return this.setOption("pr", e.join(":")), this
                    }, e.prototype.cacheBuster = function(e) {
                        return this.setOption("cb", e), this
                    }, e.prototype.format = function(e) {
                        return this.setOption("f", e), this
                    }, e.prototype.setOption = function(e, t) {
                        this.options[e] = t
                    }, e.prototype.clearOption = function(e) {
                        this.options[e] = void 0
                    }, e.prototype.generateUrl = function(e, t) {
                        var n = this.serializeOptions(),
                            r = this.config,
                            a = !1 !== r.encode;
                        e = a ? i.urlSafeEncode(e) : "plain/" + e, e = "/" + (n ? n + "/" : "") + (e = t ? e + (a ? "." : "@") + t : e);
                        var u = i.isSecureConfig(r) ? i.sign(r.key, r.salt, e, r.signatureSize || 32) : "string" === typeof r.insecure ? r.insecure : "insecure";
                        return o.default(r.baseUrl, "" + u + e)
                    }, e.prototype.serializeOptions = function() {
                        var e = this;
                        return Object.keys(this.options).filter((function(t) {
                            return !!e.options[t]
                        })).map((function(t) {
                            return t + ":" + e.options[t]
                        })).join("/")
                    }, e
                }();
            t.ImgproxyBuilder = a
        },
        23470: function(e, t, n) {
            "use strict";
            var r = n(96080),
                o = n(67513);
            o.Gravity, o.WatermarkPosition;
            var i = n(67422),
                a = function() {
                    function e(e) {
                        if (i.isSecureConfig(e) && "undefined" !== typeof e.signatureSize && (e.signatureSize < 1 || e.signatureSize > 32)) throw new Error("`signatureSize` must be greater than or equal to 1, and less than or equal to 32");
                        this.config = e
                    }
                    return e.prototype.builder = function() {
                        return new r.ImgproxyBuilder(this.config)
                    }, e
                }();
            t.ZP = a
        },
        67513: function(e, t) {
            "use strict";
            t.__esModule = !0,
                function(e) {
                    e.center = "ce", e.north = "no", e.south = "so", e.east = "ea", e.west = "we", e.north_east = "noea", e.north_west = "nowe", e.south_east = "soea", e.south_west = "sowe", e.smart = "sm"
                }(t.Gravity || (t.Gravity = {})),
                function(e) {
                    e.center = "ce", e.north = "no", e.south = "so", e.east = "ea", e.west = "we", e.north_east = "noea", e.north_west = "nowe", e.south_east = "soea", e.south_west = "sowe", e.replicate = "re"
                }(t.WatermarkPosition || (t.WatermarkPosition = {}))
        },
        67422: function(e, t, n) {
            "use strict";
            var r = n(48764).Buffer,
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            t.__esModule = !0;
            var i = o(n(42474));
            t.isRGBColor = function(e) {
                return "object" === typeof e && "r" in e && "g" in e && "b" in e
            }, t.isFocusPoint = function(e) {
                return "object" === typeof e && "x" in e && "y" in e
            }, t.isSecureConfig = function(e) {
                return "key" in e && "salt" in e
            };
            var a = function(e) {
                return r.from(e, "hex")
            };
            t.urlSafeEncode = function(e) {
                return r.from(e, "utf8").toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }, t.sign = function(e, n, r, o) {
                void 0 === o && (o = 32);
                var u = i.default.createHmac("sha256", a(e));
                return u.update(a(n)), u.update(r), t.urlSafeEncode(u.digest().slice(0, o))
            }
        },
        51951: function(module) {
            var __dirname = "/";
            (function() {
                var __webpack_modules__ = {
                    950: function(__unused_webpack_module, exports) {
                        var indexOf = function(e, t) {
                                if (e.indexOf) return e.indexOf(t);
                                for (var n = 0; n < e.length; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            Object_keys = function(e) {
                                if (Object.keys) return Object.keys(e);
                                var t = [];
                                for (var n in e) t.push(n);
                                return t
                            },
                            forEach = function(e, t) {
                                if (e.forEach) return e.forEach(t);
                                for (var n = 0; n < e.length; n++) t(e[n], n, e)
                            },
                            defineProp = function() {
                                try {
                                    return Object.defineProperty({}, "_", {}),
                                        function(e, t, n) {
                                            Object.defineProperty(e, t, {
                                                writable: !0,
                                                enumerable: !1,
                                                configurable: !0,
                                                value: n
                                            })
                                        }
                                } catch (e) {
                                    return function(e, t, n) {
                                        e[t] = n
                                    }
                                }
                            }(),
                            globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];

                        function Context() {}
                        Context.prototype = {};
                        var Script = exports.Script = function(e) {
                            if (!(this instanceof Script)) return new Script(e);
                            this.code = e
                        };
                        Script.prototype.runInContext = function(e) {
                            if (!(e instanceof Context)) throw new TypeError("needs a 'context' argument.");
                            var t = document.createElement("iframe");
                            t.style || (t.style = {}), t.style.display = "none", document.body.appendChild(t);
                            var n = t.contentWindow,
                                r = n.eval,
                                o = n.execScript;
                            !r && o && (o.call(n, "null"), r = n.eval), forEach(Object_keys(e), (function(t) {
                                n[t] = e[t]
                            })), forEach(globals, (function(t) {
                                e[t] && (n[t] = e[t])
                            }));
                            var i = Object_keys(n),
                                a = r.call(n, this.code);
                            return forEach(Object_keys(n), (function(t) {
                                (t in e || -1 === indexOf(i, t)) && (e[t] = n[t])
                            })), forEach(globals, (function(t) {
                                t in e || defineProp(e, t, n[t])
                            })), document.body.removeChild(t), a
                        }, Script.prototype.runInThisContext = function() {
                            return eval(this.code)
                        }, Script.prototype.runInNewContext = function(e) {
                            var t = Script.createContext(e),
                                n = this.runInContext(t);
                            return e && forEach(Object_keys(t), (function(n) {
                                e[n] = t[n]
                            })), n
                        }, forEach(Object_keys(Script.prototype), (function(e) {
                            exports[e] = Script[e] = function(t) {
                                var n = Script(t);
                                return n[e].apply(n, [].slice.call(arguments, 1))
                            }
                        })), exports.isContext = function(e) {
                            return e instanceof Context
                        }, exports.createScript = function(e) {
                            return exports.Script(e)
                        }, exports.createContext = Script.createContext = function(e) {
                            var t = new Context;
                            return "object" === typeof e && forEach(Object_keys(e), (function(n) {
                                t[n] = e[n]
                            })), t
                        }
                    }
                };
                "undefined" !== typeof __nccwpck_require__ && (__nccwpck_require__.ab = __dirname + "/");
                var __webpack_exports__ = {};
                __webpack_modules__[950](0, __webpack_exports__), module.exports = __webpack_exports__
            })()
        },
        56421: function(e, t, n) {
            "use strict";
            var r, o = n(96425),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            var a = {
                tags: function(e) {
                    var t = e.id,
                        n = e.events,
                        r = e.dataLayer,
                        o = e.dataLayerName,
                        a = e.preview,
                        u = "&gtm_auth=" + e.auth,
                        s = "&gtm_preview=" + a;
                    return t || (0, i.default)("GTM Id is required"), {
                        iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + u + s + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                        script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(n).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + u + s + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + o + "','" + t + "');",
                        dataLayerVar: this.dataLayer(r, o)
                    }
                },
                dataLayer: function(e, t) {
                    return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
                }
            };
            e.exports = a
        },
        58676: function(e, t, n) {
            "use strict";
            var r, o = n(56421),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            var a = {
                dataScript: function(e) {
                    var t = document.createElement("script");
                    return t.innerHTML = e, t
                },
                gtm: function(e) {
                    var t = i.default.tags(e);
                    return {
                        noScript: function() {
                            var e = document.createElement("noscript");
                            return e.innerHTML = t.iframe, e
                        },
                        script: function() {
                            var e = document.createElement("script");
                            return e.innerHTML = t.script, e
                        },
                        dataScript: this.dataScript(t.dataLayerVar)
                    }
                },
                initialize: function(e) {
                    var t = e.gtmId,
                        n = e.events,
                        r = void 0 === n ? {} : n,
                        o = e.dataLayer,
                        i = e.dataLayerName,
                        a = void 0 === i ? "dataLayer" : i,
                        u = e.auth,
                        s = void 0 === u ? "" : u,
                        c = e.preview,
                        l = void 0 === c ? "" : c,
                        d = this.gtm({
                            id: t,
                            events: r,
                            dataLayer: o || void 0,
                            dataLayerName: a,
                            auth: s,
                            preview: l
                        });
                    o && document.head.appendChild(d.dataScript), document.head.insertBefore(d.script(), document.head.childNodes[0]), document.body.insertBefore(d.noScript(), document.body.childNodes[0])
                },
                dataLayer: function(e) {
                    var t = e.dataLayer,
                        n = e.dataLayerName,
                        r = void 0 === n ? "dataLayer" : n;
                    if (window[r]) return window[r].push(t);
                    var o = i.default.dataLayer(t, r),
                        a = this.dataScript(o);
                    document.head.insertBefore(a, document.head.childNodes[0])
                }
            };
            e.exports = a
        },
        1785: function(e, t, n) {
            "use strict";
            var r, o = n(58676),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            e.exports = i.default
        },
        96425: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                console.warn("[react-gtm]", e)
            }
        },
        34078: function(e, t, n) {
            var r, o, i;
            i = function() {
                function e(e) {
                    var t = [];
                    if (0 === e.length) return "";
                    if ("string" !== typeof e[0]) throw new TypeError("Url must be a string. Received " + e[0]);
                    if (e[0].match(/^[^/:]+:\/*$/) && e.length > 1) {
                        var n = e.shift();
                        e[0] = n + e[0]
                    }
                    e[0].match(/^file:\/\/\//) ? e[0] = e[0].replace(/^([^/:]+):\/*/, "$1:///") : e[0] = e[0].replace(/^([^/:]+):\/*/, "$1://");
                    for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        if ("string" !== typeof o) throw new TypeError("Url must be a string. Received " + o);
                        "" !== o && (r > 0 && (o = o.replace(/^[\/]+/, "")), o = r < e.length - 1 ? o.replace(/[\/]+$/, "") : o.replace(/[\/]+$/, "/"), t.push(o))
                    }
                    var i = t.join("/"),
                        a = (i = i.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                    return i = a.shift() + (a.length > 0 ? "?" : "") + a.join("&")
                }
                return function() {
                    return e("object" === typeof arguments[0] ? arguments[0] : [].slice.call(arguments))
                }
            }, e.exports ? e.exports = i() : void 0 === (o = "function" === typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o)
        },
        53212: function(e, t, n) {
            "use strict";
            n.d(t, {
                VY: function() {
                    return je
                },
                z$: function() {
                    return Fe
                },
                ck: function() {
                    return Ie
                },
                rU: function() {
                    return Ae
                },
                aV: function() {
                    return ke
                },
                fC: function() {
                    return Le
                },
                xz: function() {
                    return De
                },
                l_: function() {
                    return Ue
                }
            });
            var r = n(87462),
                o = n(67294),
                i = n.t(o, 2),
                a = n(73935);

            function u(e, t = []) {
                let n = [];
                const r = () => {
                    const t = n.map((e => (0, o.createContext)(e)));
                    return function(n) {
                        const r = (null === n || void 0 === n ? void 0 : n[e]) || t;
                        return (0, o.useMemo)((() => ({
                            [`__scope${e}`]: { ...n,
                                [e]: r
                            }
                        })), [n, r])
                    }
                };
                return r.scopeName = e, [function(t, r) {
                    const i = (0, o.createContext)(r),
                        a = n.length;

                    function u(t) {
                        const {
                            scope: n,
                            children: r,
                            ...u
                        } = t, s = (null === n || void 0 === n ? void 0 : n[e][a]) || i, c = (0, o.useMemo)((() => u), Object.values(u));
                        return (0, o.createElement)(s.Provider, {
                            value: c
                        }, r)
                    }
                    return n = [...n, r], u.displayName = t + "Provider", [u, function(n, u) {
                        const s = (null === u || void 0 === u ? void 0 : u[e][a]) || i,
                            c = (0, o.useContext)(s);
                        if (c) return c;
                        if (void 0 !== r) return r;
                        throw new Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, s(r, ...t)]
            }

            function s(...e) {
                const t = e[0];
                if (1 === e.length) return t;
                const n = () => {
                    const n = e.map((e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    })));
                    return function(e) {
                        const r = n.reduce(((t, {
                            useScope: n,
                            scopeName: r
                        }) => ({ ...t,
                            ...n(e)[`__scope${r}`]
                        })), {});
                        return (0, o.useMemo)((() => ({
                            [`__scope${t.scopeName}`]: r
                        })), [r])
                    }
                };
                return n.scopeName = t.scopeName, n
            }

            function c(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (null === e || void 0 === e || e(r), !1 === n || !r.defaultPrevented) return null === t || void 0 === t ? void 0 : t(r)
                }
            }

            function l(...e) {
                return t => e.forEach((e => function(e, t) {
                    "function" === typeof e ? e(t) : null !== e && void 0 !== e && (e.current = t)
                }(e, t)))
            }

            function d(...e) {
                return (0, o.useCallback)(l(...e), e)
            }
            const f = (0, o.forwardRef)(((e, t) => {
                const {
                    children: n,
                    ...i
                } = e, a = o.Children.toArray(n), u = a.find(m);
                if (u) {
                    const e = u.props.children,
                        n = a.map((t => t === u ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : t));
                    return (0, o.createElement)(p, (0, r.Z)({}, i, {
                        ref: t
                    }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null)
                }
                return (0, o.createElement)(p, (0, r.Z)({}, i, {
                    ref: t
                }), n)
            }));
            f.displayName = "Slot";
            const p = (0, o.forwardRef)(((e, t) => {
                const {
                    children: n,
                    ...r
                } = e;
                return (0, o.isValidElement)(n) ? (0, o.cloneElement)(n, { ...h(r, n.props),
                    ref: t ? l(t, n.ref) : n.ref
                }) : o.Children.count(n) > 1 ? o.Children.only(null) : null
            }));
            p.displayName = "SlotClone";
            const v = ({
                children: e
            }) => (0, o.createElement)(o.Fragment, null, e);

            function m(e) {
                return (0, o.isValidElement)(e) && e.type === v
            }

            function h(e, t) {
                const n = { ...t
                };
                for (const r in t) {
                    const o = e[r],
                        i = t[r];
                    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                        i(...e), o(...e)
                    } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                        ...i
                    } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return { ...e,
                    ...n
                }
            }
            const g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
                const n = (0, o.forwardRef)(((e, n) => {
                    const {
                        asChild: i,
                        ...a
                    } = e, u = i ? f : t;
                    return (0, o.useEffect)((() => {
                        window[Symbol.for("radix-ui")] = !0
                    }), []), (0, o.createElement)(u, (0, r.Z)({}, a, {
                        ref: n
                    }))
                }));
                return n.displayName = `Primitive.${t}`, { ...e,
                    [t]: n
                }
            }), {});

            function w(e, t) {
                e && (0, a.flushSync)((() => e.dispatchEvent(t)))
            }

            function E(e) {
                const t = (0, o.useRef)(e);
                return (0, o.useEffect)((() => {
                    t.current = e
                })), (0, o.useMemo)((() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }), [])
            }

            function y({
                prop: e,
                defaultProp: t,
                onChange: n = (() => {})
            }) {
                const [r, i] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    const n = (0, o.useState)(e),
                        [r] = n,
                        i = (0, o.useRef)(r),
                        a = E(t);
                    return (0, o.useEffect)((() => {
                        i.current !== r && (a(r), i.current = r)
                    }), [r, i, a]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), a = void 0 !== e, u = a ? e : r, s = E(n);
                return [u, (0, o.useCallback)((t => {
                    if (a) {
                        const n = t,
                            r = "function" === typeof t ? n(e) : t;
                        r !== e && s(r)
                    } else i(t)
                }), [a, e, i, s])]
            }
            const b = (0, o.createContext)(void 0);
            const _ = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? o.useLayoutEffect : () => {};
            const C = e => {
                const {
                    present: t,
                    children: n
                } = e, r = function(e) {
                    const [t, n] = (0, o.useState)(), r = (0, o.useRef)({}), i = (0, o.useRef)(e), u = (0, o.useRef)("none"), s = e ? "mounted" : "unmounted", [c, l] = function(e, t) {
                        return (0, o.useReducer)(((e, n) => {
                            const r = t[e][n];
                            return null !== r && void 0 !== r ? r : e
                        }), e)
                    }(s, {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    });
                    return (0, o.useEffect)((() => {
                        const e = R(r.current);
                        u.current = "mounted" === c ? e : "none"
                    }), [c]), _((() => {
                        const t = r.current,
                            n = i.current;
                        if (n !== e) {
                            const r = u.current,
                                o = R(t);
                            if (e) l("MOUNT");
                            else if ("none" === o || "none" === (null === t || void 0 === t ? void 0 : t.display)) l("UNMOUNT");
                            else {
                                const e = r !== o;
                                l(n && e ? "ANIMATION_OUT" : "UNMOUNT")
                            }
                            i.current = e
                        }
                    }), [e, l]), _((() => {
                        if (t) {
                            const e = e => {
                                    const n = R(r.current).includes(e.animationName);
                                    e.target === t && n && (0, a.flushSync)((() => l("ANIMATION_END")))
                                },
                                n = e => {
                                    e.target === t && (u.current = R(r.current))
                                };
                            return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
                            }
                        }
                        l("ANIMATION_END")
                    }), [t, l]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(c),
                        ref: (0, o.useCallback)((e => {
                            e && (r.current = getComputedStyle(e)), n(e)
                        }), [])
                    }
                }(t), i = "function" === typeof n ? n({
                    present: r.isPresent
                }) : o.Children.only(n), u = d(r.ref, i.ref);
                return "function" === typeof n || r.isPresent ? (0, o.cloneElement)(i, {
                    ref: u
                }) : null
            };

            function R(e) {
                return (null === e || void 0 === e ? void 0 : e.animationName) || "none"
            }
            C.displayName = "Presence";
            const N = i["useId".toString()] || (() => {});
            let M = 0;

            function x(e) {
                const [t, n] = o.useState(N());
                return _((() => {
                    e || n((e => null !== e && void 0 !== e ? e : String(M++)))
                }), [e]), e || (t ? `radix-${t}` : "")
            }

            function O(e) {
                const t = e + "CollectionProvider",
                    [n, r] = u(t),
                    [i, a] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    s = e => {
                        const {
                            scope: t,
                            children: n
                        } = e, r = o.useRef(null), a = o.useRef(new Map).current;
                        return o.createElement(i, {
                            scope: t,
                            itemMap: a,
                            collectionRef: r
                        }, n)
                    },
                    c = e + "CollectionSlot",
                    l = o.forwardRef(((e, t) => {
                        const {
                            scope: n,
                            children: r
                        } = e, i = d(t, a(c, n).collectionRef);
                        return o.createElement(f, {
                            ref: i
                        }, r)
                    })),
                    p = e + "CollectionItemSlot",
                    v = "data-radix-collection-item",
                    m = o.forwardRef(((e, t) => {
                        const {
                            scope: n,
                            children: r,
                            ...i
                        } = e, u = o.useRef(null), s = d(t, u), c = a(p, n);
                        return o.useEffect((() => (c.itemMap.set(u, {
                            ref: u,
                            ...i
                        }), () => {
                            c.itemMap.delete(u)
                        }))), o.createElement(f, {
                            [v]: "",
                            ref: s
                        }, r)
                    }));
                return [{
                    Provider: s,
                    Slot: l,
                    ItemSlot: m
                }, function(t) {
                    const n = a(e + "CollectionConsumer", t);
                    return o.useCallback((() => {
                        const e = n.collectionRef.current;
                        if (!e) return [];
                        const t = Array.from(e.querySelectorAll(`[${v}]`));
                        return Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)))
                    }), [n.collectionRef, n.itemMap])
                }, r]
            }
            const T = "dismissableLayer.update",
                S = "dismissableLayer.pointerDownOutside",
                P = "dismissableLayer.focusOutside";
            let L;
            const k = (0, o.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                I = (0, o.forwardRef)(((e, t) => {
                    var n;
                    const {
                        disableOutsidePointerEvents: i = !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: u,
                        onFocusOutside: s,
                        onInteractOutside: l,
                        onDismiss: f,
                        ...p
                    } = e, v = (0, o.useContext)(k), [m, h] = (0, o.useState)(null), w = null !== (n = null === m || void 0 === m ? void 0 : m.ownerDocument) && void 0 !== n ? n : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document, [, y] = (0, o.useState)({}), b = d(t, (e => h(e))), _ = Array.from(v.layers), [C] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1), R = _.indexOf(C), N = m ? _.indexOf(m) : -1, M = v.layersWithOutsidePointerEventsDisabled.size > 0, x = N >= R, O = function(e, t = (null === globalThis || void 0 === globalThis ? void 0 : globalThis.document)) {
                        const n = E(e),
                            r = (0, o.useRef)(!1),
                            i = (0, o.useRef)((() => {}));
                        return (0, o.useEffect)((() => {
                            const e = e => {
                                    if (e.target && !r.current) {
                                        const o = {
                                            originalEvent: e
                                        };

                                        function a() {
                                            A(S, n, o, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = a, t.addEventListener("click", i.current, {
                                            once: !0
                                        })) : a()
                                    } else t.removeEventListener("click", i.current);
                                    r.current = !1
                                },
                                o = window.setTimeout((() => {
                                    t.addEventListener("pointerdown", e)
                                }), 0);
                            return () => {
                                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
                            }
                        }), [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }((e => {
                        const t = e.target,
                            n = [...v.branches].some((e => e.contains(t)));
                        x && !n && (null === u || void 0 === u || u(e), null === l || void 0 === l || l(e), e.defaultPrevented || null === f || void 0 === f || f())
                    }), w), I = function(e, t = (null === globalThis || void 0 === globalThis ? void 0 : globalThis.document)) {
                        const n = E(e),
                            r = (0, o.useRef)(!1);
                        return (0, o.useEffect)((() => {
                            const e = e => {
                                if (e.target && !r.current) {
                                    A(P, n, {
                                        originalEvent: e
                                    }, {
                                        discrete: !1
                                    })
                                }
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }), [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }((e => {
                        const t = e.target;
                        [...v.branches].some((e => e.contains(t))) || (null === s || void 0 === s || s(e), null === l || void 0 === l || l(e), e.defaultPrevented || null === f || void 0 === f || f())
                    }), w);
                    return function(e, t = (null === globalThis || void 0 === globalThis ? void 0 : globalThis.document)) {
                        const n = E(e);
                        (0, o.useEffect)((() => {
                            const e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                        }), [n, t])
                    }((e => {
                        N === v.layers.size - 1 && (null === a || void 0 === a || a(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
                    }), w), (0, o.useEffect)((() => {
                        if (m) return i && (0 === v.layersWithOutsidePointerEventsDisabled.size && (L = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(m)), v.layers.add(m), D(), () => {
                            i && 1 === v.layersWithOutsidePointerEventsDisabled.size && (w.body.style.pointerEvents = L)
                        }
                    }), [m, w, i, v]), (0, o.useEffect)((() => () => {
                        m && (v.layers.delete(m), v.layersWithOutsidePointerEventsDisabled.delete(m), D())
                    }), [m, v]), (0, o.useEffect)((() => {
                        const e = () => y({});
                        return document.addEventListener(T, e), () => document.removeEventListener(T, e)
                    }), []), (0, o.createElement)(g.div, (0, r.Z)({}, p, {
                        ref: b,
                        style: {
                            pointerEvents: M ? x ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: c(e.onFocusCapture, I.onFocusCapture),
                        onBlurCapture: c(e.onBlurCapture, I.onBlurCapture),
                        onPointerDownCapture: c(e.onPointerDownCapture, O.onPointerDownCapture)
                    }))
                }));

            function D() {
                const e = new CustomEvent(T);
                document.dispatchEvent(e)
            }

            function A(e, t, n, {
                discrete: r
            }) {
                const o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? w(o, i) : o.dispatchEvent(i)
            }

            function F(e) {
                const t = (0, o.useRef)({
                    value: e,
                    previous: e
                });
                return (0, o.useMemo)((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
            }
            const j = (0, o.forwardRef)(((e, t) => (0, o.createElement)(g.span, (0, r.Z)({}, e, {
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                })))),
                U = j,
                z = "NavigationMenu",
                [B, V, Z] = O(z),
                [$, K, W] = O(z),
                [q, G] = u(z, [Z, W]),
                [H, J] = q(z),
                [Y, X] = q(z),
                Q = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        value: i,
                        onValueChange: a,
                        defaultValue: u,
                        delayDuration: s = 200,
                        skipDelayDuration: c = 300,
                        orientation: l = "horizontal",
                        dir: f,
                        ...p
                    } = e, [v, m] = (0, o.useState)(null), h = d(t, (e => m(e))), w = function(e) {
                        const t = (0, o.useContext)(b);
                        return e || t || "ltr"
                    }(f), E = (0, o.useRef)(0), _ = (0, o.useRef)(0), C = (0, o.useRef)(0), [R, N] = (0, o.useState)(!0), [M = "", x] = y({
                        prop: i,
                        onChange: e => {
                            const t = c > 0;
                            "" !== e ? (window.clearTimeout(C.current), t && N(!1)) : (window.clearTimeout(C.current), C.current = window.setTimeout((() => N(!0)), c)), null === a || void 0 === a || a(e)
                        },
                        defaultProp: u
                    }), O = (0, o.useCallback)((() => {
                        window.clearTimeout(_.current), _.current = window.setTimeout((() => x("")), 150)
                    }), [x]), T = (0, o.useCallback)((e => {
                        window.clearTimeout(_.current), x(e)
                    }), [x]), S = (0, o.useCallback)((e => {
                        M === e ? window.clearTimeout(_.current) : E.current = window.setTimeout((() => {
                            window.clearTimeout(_.current), x(e)
                        }), s)
                    }), [M, x, s]);
                    return (0, o.useEffect)((() => () => {
                        window.clearTimeout(E.current), window.clearTimeout(_.current), window.clearTimeout(C.current)
                    }), []), (0, o.createElement)(ee, {
                        scope: n,
                        isRootMenu: !0,
                        value: M,
                        dir: w,
                        orientation: l,
                        rootNavigationMenu: v,
                        onTriggerEnter: e => {
                            window.clearTimeout(E.current), R ? S(e) : T(e)
                        },
                        onTriggerLeave: () => {
                            window.clearTimeout(E.current), O()
                        },
                        onContentEnter: () => window.clearTimeout(_.current),
                        onContentLeave: O,
                        onItemSelect: e => {
                            x((t => t === e ? "" : e))
                        },
                        onItemDismiss: () => x("")
                    }, (0, o.createElement)(g.nav, (0, r.Z)({
                        "aria-label": "Main",
                        "data-orientation": l,
                        dir: w
                    }, p, {
                        ref: h
                    })))
                })),
                ee = e => {
                    const {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: r,
                        dir: i,
                        orientation: a,
                        children: u,
                        value: s,
                        onItemSelect: c,
                        onItemDismiss: l,
                        onTriggerEnter: d,
                        onTriggerLeave: f,
                        onContentEnter: p,
                        onContentLeave: v
                    } = e, [m, h] = (0, o.useState)(null), [g, w] = (0, o.useState)(new Map), [y, b] = (0, o.useState)(null);
                    return (0, o.createElement)(H, {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: r,
                        value: s,
                        previousValue: F(s),
                        baseId: x(),
                        dir: i,
                        orientation: a,
                        viewport: m,
                        onViewportChange: h,
                        indicatorTrack: y,
                        onIndicatorTrackChange: b,
                        onTriggerEnter: E(d),
                        onTriggerLeave: E(f),
                        onContentEnter: E(p),
                        onContentLeave: E(v),
                        onItemSelect: E(c),
                        onItemDismiss: E(l),
                        onViewportContentChange: (0, o.useCallback)(((e, t) => {
                            w((n => (n.set(e, t), new Map(n))))
                        }), []),
                        onViewportContentRemove: (0, o.useCallback)((e => {
                            w((t => t.has(e) ? (t.delete(e), new Map(t)) : t))
                        }), [])
                    }, (0, o.createElement)(B.Provider, {
                        scope: t
                    }, (0, o.createElement)(Y, {
                        scope: t,
                        items: g
                    }, u)))
                },
                te = "NavigationMenuList",
                ne = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        ...i
                    } = e, a = J(te, n), u = (0, o.createElement)(g.ul, (0, r.Z)({
                        "data-orientation": a.orientation
                    }, i, {
                        ref: t
                    }));
                    return (0, o.createElement)(g.div, {
                        style: {
                            position: "relative"
                        },
                        ref: a.onIndicatorTrackChange
                    }, (0, o.createElement)(B.Slot, {
                        scope: n
                    }, a.isRootMenu ? (0, o.createElement)(_e, {
                        asChild: !0
                    }, u) : u))
                })),
                re = "NavigationMenuItem",
                [oe, ie] = q(re),
                ae = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        value: i,
                        ...a
                    } = e, u = x(), s = i || u || "LEGACY_REACT_AUTO_VALUE", c = (0, o.useRef)(null), l = (0, o.useRef)(null), d = (0, o.useRef)(null), f = (0, o.useRef)((() => {})), p = (0, o.useRef)(!1), v = (0, o.useCallback)(((e = "start") => {
                        if (c.current) {
                            f.current();
                            const t = Ne(c.current);
                            t.length && Me("start" === e ? t : t.reverse())
                        }
                    }), []), m = (0, o.useCallback)((() => {
                        if (c.current) {
                            const e = Ne(c.current);
                            e.length && (f.current = function(e) {
                                return e.forEach((e => {
                                    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                                })), () => {
                                    e.forEach((e => {
                                        const t = e.dataset.tabindex;
                                        e.setAttribute("tabindex", t)
                                    }))
                                }
                            }(e))
                        }
                    }), []);
                    return (0, o.createElement)(oe, {
                        scope: n,
                        value: s,
                        triggerRef: l,
                        contentRef: c,
                        focusProxyRef: d,
                        wasEscapeCloseRef: p,
                        onEntryKeyDown: v,
                        onFocusProxyEnter: v,
                        onRootContentClose: m,
                        onContentFocusOutside: m
                    }, (0, o.createElement)(g.li, (0, r.Z)({}, a, {
                        ref: t
                    })))
                })),
                ue = "NavigationMenuTrigger",
                se = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        disabled: i,
                        ...a
                    } = e, u = J(ue, e.__scopeNavigationMenu), s = ie(ue, e.__scopeNavigationMenu), l = (0, o.useRef)(null), f = d(l, s.triggerRef, t), p = Te(u.baseId, s.value), v = Se(u.baseId, s.value), m = (0, o.useRef)(!1), h = (0, o.useRef)(!1), w = s.value === u.value;
                    return (0, o.createElement)(o.Fragment, null, (0, o.createElement)(B.ItemSlot, {
                        scope: n,
                        value: s.value
                    }, (0, o.createElement)(Re, {
                        asChild: !0
                    }, (0, o.createElement)(g.button, (0, r.Z)({
                        id: p,
                        disabled: i,
                        "data-disabled": i ? "" : void 0,
                        "data-state": Oe(w),
                        "aria-expanded": w,
                        "aria-controls": v
                    }, a, {
                        ref: f,
                        onPointerEnter: c(e.onPointerEnter, (() => {
                            h.current = !1, s.wasEscapeCloseRef.current = !1
                        })),
                        onPointerMove: c(e.onPointerMove, Pe((() => {
                            i || h.current || s.wasEscapeCloseRef.current || m.current || (u.onTriggerEnter(s.value), m.current = !0)
                        }))),
                        onPointerLeave: c(e.onPointerLeave, Pe((() => {
                            i || (u.onTriggerLeave(), m.current = !1)
                        }))),
                        onClick: c(e.onClick, (() => {
                            u.onItemSelect(s.value), h.current = w
                        })),
                        onKeyDown: c(e.onKeyDown, (e => {
                            const t = {
                                horizontal: "ArrowDown",
                                vertical: "rtl" === u.dir ? "ArrowLeft" : "ArrowRight"
                            }[u.orientation];
                            w && e.key === t && (s.onEntryKeyDown(), e.preventDefault())
                        }))
                    })))), w && (0, o.createElement)(o.Fragment, null, (0, o.createElement)(U, {
                        "aria-hidden": !0,
                        tabIndex: 0,
                        ref: s.focusProxyRef,
                        onFocus: e => {
                            const t = s.contentRef.current,
                                n = e.relatedTarget,
                                r = n === l.current,
                                o = null === t || void 0 === t ? void 0 : t.contains(n);
                            !r && o || s.onFocusProxyEnter(r ? "start" : "end")
                        }
                    }), u.viewport && (0, o.createElement)("span", {
                        "aria-owns": v
                    })))
                })),
                ce = "navigationMenu.linkSelect",
                le = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        active: i,
                        onSelect: a,
                        ...u
                    } = e;
                    return (0, o.createElement)(Re, {
                        asChild: !0
                    }, (0, o.createElement)(g.a, (0, r.Z)({
                        "data-active": i ? "" : void 0,
                        "aria-current": i ? "page" : void 0
                    }, u, {
                        ref: t,
                        onClick: c(e.onClick, (e => {
                            const t = e.target,
                                n = new CustomEvent(ce, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                            if (t.addEventListener(ce, (e => null === a || void 0 === a ? void 0 : a(e)), {
                                    once: !0
                                }), w(t, n), !n.defaultPrevented && !e.metaKey) {
                                w(t, new CustomEvent(ge, {
                                    bubbles: !0,
                                    cancelable: !0
                                }))
                            }
                        }), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                })),
                de = "NavigationMenuIndicator",
                fe = (0, o.forwardRef)(((e, t) => {
                    const {
                        forceMount: n,
                        ...i
                    } = e, u = J(de, e.__scopeNavigationMenu), s = Boolean(u.value);
                    return u.indicatorTrack ? a.createPortal((0, o.createElement)(C, {
                        present: n || s
                    }, (0, o.createElement)(pe, (0, r.Z)({}, i, {
                        ref: t
                    }))), u.indicatorTrack) : null
                })),
                pe = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        ...i
                    } = e, a = J(de, n), u = V(n), [s, c] = (0, o.useState)(null), [l, d] = (0, o.useState)(null), f = "horizontal" === a.orientation, p = Boolean(a.value);
                    (0, o.useEffect)((() => {
                        var e;
                        const t = null === (e = u().find((e => e.value === a.value))) || void 0 === e ? void 0 : e.ref.current;
                        t && c(t)
                    }), [u, a.value]);
                    const v = () => {
                        s && d({
                            size: f ? s.offsetWidth : s.offsetHeight,
                            offset: f ? s.offsetLeft : s.offsetTop
                        })
                    };
                    return xe(s, v), xe(a.indicatorTrack, v), l ? (0, o.createElement)(g.div, (0, r.Z)({
                        "aria-hidden": !0,
                        "data-state": p ? "visible" : "hidden",
                        "data-orientation": a.orientation
                    }, i, {
                        ref: t,
                        style: {
                            position: "absolute",
                            ...f ? {
                                left: 0,
                                width: l.size + "px",
                                transform: `translateX(${l.offset}px)`
                            } : {
                                top: 0,
                                height: l.size + "px",
                                transform: `translateY(${l.offset}px)`
                            },
                            ...i.style
                        }
                    })) : null
                })),
                ve = "NavigationMenuContent",
                me = (0, o.forwardRef)(((e, t) => {
                    const {
                        forceMount: n,
                        ...i
                    } = e, a = J(ve, e.__scopeNavigationMenu), u = ie(ve, e.__scopeNavigationMenu), s = d(u.contentRef, t), l = u.value === a.value, f = {
                        value: u.value,
                        triggerRef: u.triggerRef,
                        focusProxyRef: u.focusProxyRef,
                        wasEscapeCloseRef: u.wasEscapeCloseRef,
                        onContentFocusOutside: u.onContentFocusOutside,
                        onRootContentClose: u.onRootContentClose,
                        ...i
                    };
                    return a.viewport ? (0, o.createElement)(he, (0, r.Z)({
                        forceMount: n
                    }, f, {
                        ref: s
                    })) : (0, o.createElement)(C, {
                        present: n || l
                    }, (0, o.createElement)(we, (0, r.Z)({
                        "data-state": Oe(l)
                    }, f, {
                        ref: s,
                        onPointerEnter: c(e.onPointerEnter, a.onContentEnter),
                        onPointerLeave: c(e.onPointerLeave, Pe(a.onContentLeave)),
                        style: {
                            pointerEvents: !l && a.isRootMenu ? "none" : void 0,
                            ...f.style
                        }
                    })))
                })),
                he = (0, o.forwardRef)(((e, t) => {
                    const n = J(ve, e.__scopeNavigationMenu),
                        {
                            onViewportContentChange: r,
                            onViewportContentRemove: o
                        } = n;
                    return _((() => {
                        r(e.value, {
                            ref: t,
                            ...e
                        })
                    }), [e, t, r]), _((() => () => o(e.value)), [e.value, o]), null
                })),
                ge = "navigationMenu.rootContentDismiss",
                we = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        value: i,
                        triggerRef: a,
                        focusProxyRef: u,
                        wasEscapeCloseRef: s,
                        onRootContentClose: l,
                        onContentFocusOutside: f,
                        ...p
                    } = e, v = J(ve, n), m = (0, o.useRef)(null), h = d(m, t), g = Te(v.baseId, i), w = Se(v.baseId, i), E = V(n), y = (0, o.useRef)(null), {
                        onItemDismiss: b
                    } = v;
                    (0, o.useEffect)((() => {
                        const e = m.current;
                        if (v.isRootMenu && e) {
                            const t = () => {
                                var t;
                                b(), l(), e.contains(document.activeElement) && (null === (t = a.current) || void 0 === t || t.focus())
                            };
                            return e.addEventListener(ge, t), () => e.removeEventListener(ge, t)
                        }
                    }), [v.isRootMenu, e.value, a, b, l]);
                    const _ = (0, o.useMemo)((() => {
                        const e = E().map((e => e.value));
                        "rtl" === v.dir && e.reverse();
                        const t = e.indexOf(v.value),
                            n = e.indexOf(v.previousValue),
                            r = i === v.value,
                            o = n === e.indexOf(i);
                        if (!r && !o) return y.current;
                        const a = (() => {
                            if (t !== n) {
                                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                                if (o && -1 !== t) return t > n ? "to-start" : "to-end"
                            }
                            return null
                        })();
                        return y.current = a, a
                    }), [v.previousValue, v.value, v.dir, E, i]);
                    return (0, o.createElement)(_e, {
                        asChild: !0
                    }, (0, o.createElement)(I, (0, r.Z)({
                        id: w,
                        "aria-labelledby": g,
                        "data-motion": _,
                        "data-orientation": v.orientation
                    }, p, {
                        ref: h,
                        onDismiss: () => {
                            var e;
                            const t = new Event(ge, {
                                bubbles: !0,
                                cancelable: !0
                            });
                            null === (e = m.current) || void 0 === e || e.dispatchEvent(t)
                        },
                        onFocusOutside: c(e.onFocusOutside, (e => {
                            var t;
                            f();
                            const n = e.target;
                            null !== (t = v.rootNavigationMenu) && void 0 !== t && t.contains(n) && e.preventDefault()
                        })),
                        onPointerDownOutside: c(e.onPointerDownOutside, (e => {
                            var t;
                            const n = e.target,
                                r = E().some((e => {
                                    var t;
                                    return null === (t = e.ref.current) || void 0 === t ? void 0 : t.contains(n)
                                })),
                                o = v.isRootMenu && (null === (t = v.viewport) || void 0 === t ? void 0 : t.contains(n));
                            (r || o || !v.isRootMenu) && e.preventDefault()
                        })),
                        onKeyDown: c(e.onKeyDown, (e => {
                            const t = e.altKey || e.ctrlKey || e.metaKey;
                            if ("Tab" === e.key && !t) {
                                const t = Ne(e.currentTarget),
                                    r = document.activeElement,
                                    o = t.findIndex((e => e === r));
                                var n;
                                if (Me(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length))) e.preventDefault();
                                else null === (n = u.current) || void 0 === n || n.focus()
                            }
                        })),
                        onEscapeKeyDown: c(e.onEscapeKeyDown, (e => {
                            s.current = !0
                        }))
                    })))
                })),
                Ee = "NavigationMenuViewport",
                ye = (0, o.forwardRef)(((e, t) => {
                    const {
                        forceMount: n,
                        ...i
                    } = e, a = J(Ee, e.__scopeNavigationMenu), u = Boolean(a.value);
                    return (0, o.createElement)(C, {
                        present: n || u
                    }, (0, o.createElement)(be, (0, r.Z)({}, i, {
                        ref: t
                    })))
                })),
                be = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        children: i,
                        ...a
                    } = e, u = J(Ee, n), s = d(t, u.onViewportChange), f = X(ve, e.__scopeNavigationMenu), [p, v] = (0, o.useState)(null), [m, h] = (0, o.useState)(null), w = p ? (null === p || void 0 === p ? void 0 : p.width) + "px" : void 0, E = p ? (null === p || void 0 === p ? void 0 : p.height) + "px" : void 0, y = Boolean(u.value), b = y ? u.value : u.previousValue;
                    return xe(m, (() => {
                        m && v({
                            width: m.offsetWidth,
                            height: m.offsetHeight
                        })
                    })), (0, o.createElement)(g.div, (0, r.Z)({
                        "data-state": Oe(y),
                        "data-orientation": u.orientation
                    }, a, {
                        ref: s,
                        style: {
                            pointerEvents: !y && u.isRootMenu ? "none" : void 0,
                            "--radix-navigation-menu-viewport-width": w,
                            "--radix-navigation-menu-viewport-height": E,
                            ...a.style
                        },
                        onPointerEnter: c(e.onPointerEnter, u.onContentEnter),
                        onPointerLeave: c(e.onPointerLeave, Pe(u.onContentLeave))
                    }), Array.from(f.items).map((([e, {
                        ref: t,
                        forceMount: n,
                        ...i
                    }]) => {
                        const a = b === e;
                        return (0, o.createElement)(C, {
                            key: e,
                            present: n || a
                        }, (0, o.createElement)(we, (0, r.Z)({}, i, {
                            ref: l(t, (e => {
                                a && e && h(e)
                            }))
                        })))
                    })))
                })),
                _e = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        ...i
                    } = e, a = J("FocusGroup", n);
                    return (0, o.createElement)($.Provider, {
                        scope: n
                    }, (0, o.createElement)($.Slot, {
                        scope: n
                    }, (0, o.createElement)(g.div, (0, r.Z)({
                        dir: a.dir
                    }, i, {
                        ref: t
                    }))))
                })),
                Ce = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
                Re = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeNavigationMenu: n,
                        ...i
                    } = e, a = K(n), u = J("FocusGroupItem", n);
                    return (0, o.createElement)($.ItemSlot, {
                        scope: n
                    }, (0, o.createElement)(g.button, (0, r.Z)({}, i, {
                        ref: t,
                        onKeyDown: c(e.onKeyDown, (e => {
                            if (["Home", "End", ...Ce].includes(e.key)) {
                                let t = a().map((e => e.ref.current));
                                if (["rtl" === u.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), Ce.includes(e.key)) {
                                    const n = t.indexOf(e.currentTarget);
                                    t = t.slice(n + 1)
                                }
                                setTimeout((() => Me(t))), e.preventDefault()
                            }
                        }))
                    })))
                }));

            function Ne(e) {
                const t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            const t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function Me(e) {
                const t = document.activeElement;
                return e.some((e => e === t || (e.focus(), document.activeElement !== t)))
            }

            function xe(e, t) {
                const n = E(t);
                _((() => {
                    let t = 0;
                    if (e) {
                        const r = new ResizeObserver((() => {
                            cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
                        }));
                        return r.observe(e), () => {
                            window.cancelAnimationFrame(t), r.unobserve(e)
                        }
                    }
                }), [e, n])
            }

            function Oe(e) {
                return e ? "open" : "closed"
            }

            function Te(e, t) {
                return `${e}-trigger-${t}`
            }

            function Se(e, t) {
                return `${e}-content-${t}`
            }

            function Pe(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            const Le = Q,
                ke = ne,
                Ie = ae,
                De = se,
                Ae = le,
                Fe = fe,
                je = me,
                Ue = ye
        }
    }
]);