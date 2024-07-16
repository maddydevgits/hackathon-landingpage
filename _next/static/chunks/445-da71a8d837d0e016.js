(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [445], {
        91296: function(e, t, n) {
            var r = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                s = parseInt,
                c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                u = "object" == typeof self && self && self.Object === Object && self,
                d = c || u || Function("return this")(),
                l = Object.prototype.toString,
                p = Math.max,
                f = Math.min,
                h = function() {
                    return d.Date.now()
                };

            function m(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function g(e) {
                if ("number" == typeof e) return e;
                if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e
                        }(e) && "[object Symbol]" == l.call(e)
                    }(e)) return NaN;
                if (m(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = m(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(r, "");
                var n = i.test(e);
                return n || a.test(e) ? s(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
            }
            e.exports = function(e, t, n) {
                var r, o, i, a, s, c, u = 0,
                    d = !1,
                    l = !1,
                    y = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function v(t) {
                    var n = r,
                        i = o;
                    return r = o = void 0, u = t, a = e.apply(i, n)
                }

                function b(e) {
                    return u = e, s = setTimeout(x, t), d ? v(e) : a
                }

                function w(e) {
                    var n = e - c;
                    return void 0 === c || n >= t || n < 0 || l && e - u >= i
                }

                function x() {
                    var e = h();
                    if (w(e)) return C(e);
                    s = setTimeout(x, function(e) {
                        var n = t - (e - c);
                        return l ? f(n, i - (e - u)) : n
                    }(e))
                }

                function C(e) {
                    return s = void 0, y && r ? v(e) : (r = o = void 0, a)
                }

                function O() {
                    var e = h(),
                        n = w(e);
                    if (r = arguments, o = this, c = e, n) {
                        if (void 0 === s) return b(c);
                        if (l) return s = setTimeout(x, t), v(c)
                    }
                    return void 0 === s && (s = setTimeout(x, t)), a
                }
                return t = g(t) || 0, m(n) && (d = !!n.leading, i = (l = "maxWait" in n) ? p(g(n.maxWait) || 0, t) : i, y = "trailing" in n ? !!n.trailing : y), O.cancel = function() {
                    void 0 !== s && clearTimeout(s), u = 0, r = c = o = s = void 0
                }, O.flush = function() {
                    return void 0 === s ? a : C(h())
                }, O
            }
        },
        34853: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return v
                }
            });
            var r = n(67294),
                o = n(45697),
                i = n.n(o);

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var c = function(e) {
                var t, n;

                function o() {
                    var t;
                    return (t = e.call(this) || this).handleExpired = t.handleExpired.bind(s(t)), t.handleErrored = t.handleErrored.bind(s(t)), t.handleChange = t.handleChange.bind(s(t)), t.handleRecaptchaRef = t.handleRecaptchaRef.bind(s(t)), t
                }
                n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var i = o.prototype;
                return i.getValue = function() {
                    return this.props.grecaptcha && void 0 !== this._widgetId ? this.props.grecaptcha.getResponse(this._widgetId) : null
                }, i.getWidgetId = function() {
                    return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null
                }, i.execute = function() {
                    var e = this.props.grecaptcha;
                    if (e && void 0 !== this._widgetId) return e.execute(this._widgetId);
                    this._executeRequested = !0
                }, i.executeAsync = function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e.executionResolve = t, e.executionReject = n, e.execute()
                    }))
                }, i.reset = function() {
                    this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId)
                }, i.handleExpired = function() {
                    this.props.onExpired ? this.props.onExpired() : this.handleChange(null)
                }, i.handleErrored = function() {
                    this.props.onErrored && this.props.onErrored(), this.executionReject && (this.executionReject(), delete this.executionResolve, delete this.executionReject)
                }, i.handleChange = function(e) {
                    this.props.onChange && this.props.onChange(e), this.executionResolve && (this.executionResolve(e), delete this.executionReject, delete this.executionResolve)
                }, i.explicitRender = function() {
                    if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
                        var e = document.createElement("div");
                        this._widgetId = this.props.grecaptcha.render(e, {
                            sitekey: this.props.sitekey,
                            callback: this.handleChange,
                            theme: this.props.theme,
                            type: this.props.type,
                            tabindex: this.props.tabindex,
                            "expired-callback": this.handleExpired,
                            "error-callback": this.handleErrored,
                            size: this.props.size,
                            stoken: this.props.stoken,
                            hl: this.props.hl,
                            badge: this.props.badge
                        }), this.captcha.appendChild(e)
                    }
                    this._executeRequested && this.props.grecaptcha && void 0 !== this._widgetId && (this._executeRequested = !1, this.execute())
                }, i.componentDidMount = function() {
                    this.explicitRender()
                }, i.componentDidUpdate = function() {
                    this.explicitRender()
                }, i.componentWillUnmount = function() {
                    void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset())
                }, i.delayOfCaptchaIframeRemoving = function() {
                    var e = document.createElement("div");
                    for (document.body.appendChild(e), e.style.display = "none"; this.captcha.firstChild;) e.appendChild(this.captcha.firstChild);
                    setTimeout((function() {
                        document.body.removeChild(e)
                    }), 5e3)
                }, i.handleRecaptchaRef = function(e) {
                    this.captcha = e
                }, i.render = function() {
                    var e = this.props,
                        t = (e.sitekey, e.onChange, e.theme, e.type, e.tabindex, e.onExpired, e.onErrored, e.size, e.stoken, e.grecaptcha, e.badge, e.hl, function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]));
                    return r.createElement("div", a({}, t, {
                        ref: this.handleRecaptchaRef
                    }))
                }, o
            }(r.Component);
            c.displayName = "ReCAPTCHA", c.propTypes = {
                sitekey: i().string.isRequired,
                onChange: i().func,
                grecaptcha: i().object,
                theme: i().oneOf(["dark", "light"]),
                type: i().oneOf(["image", "audio"]),
                tabindex: i().number,
                onExpired: i().func,
                onErrored: i().func,
                size: i().oneOf(["compact", "normal", "invisible"]),
                stoken: i().string,
                hl: i().string,
                badge: i().oneOf(["bottomright", "bottomleft", "inline"])
            }, c.defaultProps = {
                onChange: function() {},
                theme: "light",
                type: "image",
                tabindex: 0,
                size: "normal",
                badge: "bottomright"
            };
            var u = n(8679),
                d = n.n(u);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var p = {},
                f = 0;
            var h = "onloadcallback";
            var m, g, y = (m = function() {
                    return "https://" + (("undefined" !== typeof window && window.recaptchaOptions || {}).useRecaptchaNet ? "recaptcha.net" : "www.google.com") + "/recaptcha/api.js?onload=" + h + "&render=explicit"
                }, g = (g = {
                    callbackName: h,
                    globalName: "grecaptcha"
                }) || {}, function(e) {
                    var t = e.displayName || e.name || "Component",
                        n = function(t) {
                            var n, o;

                            function i(e, n) {
                                var r;
                                return (r = t.call(this, e, n) || this).state = {}, r.__scriptURL = "", r
                            }
                            o = t, (n = i).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
                            var a = i.prototype;
                            return a.asyncScriptLoaderGetScriptLoaderID = function() {
                                return this.__scriptLoaderID || (this.__scriptLoaderID = "async-script-loader-" + f++), this.__scriptLoaderID
                            }, a.setupScriptURL = function() {
                                return this.__scriptURL = "function" === typeof m ? m() : m, this.__scriptURL
                            }, a.asyncScriptLoaderHandleLoad = function(e) {
                                var t = this;
                                this.setState(e, (function() {
                                    return t.props.asyncScriptOnLoad && t.props.asyncScriptOnLoad(t.state)
                                }))
                            }, a.asyncScriptLoaderTriggerOnScriptLoaded = function() {
                                var e = p[this.__scriptURL];
                                if (!e || !e.loaded) throw new Error("Script is not loaded.");
                                for (var t in e.observers) e.observers[t](e);
                                delete window[g.callbackName]
                            }, a.componentDidMount = function() {
                                var e = this,
                                    t = this.setupScriptURL(),
                                    n = this.asyncScriptLoaderGetScriptLoaderID(),
                                    r = g,
                                    o = r.globalName,
                                    i = r.callbackName,
                                    a = r.scriptId;
                                if (o && "undefined" !== typeof window[o] && (p[t] = {
                                        loaded: !0,
                                        observers: {}
                                    }), p[t]) {
                                    var s = p[t];
                                    return s && (s.loaded || s.errored) ? void this.asyncScriptLoaderHandleLoad(s) : void(s.observers[n] = function(t) {
                                        return e.asyncScriptLoaderHandleLoad(t)
                                    })
                                }
                                var c = {};
                                c[n] = function(t) {
                                    return e.asyncScriptLoaderHandleLoad(t)
                                }, p[t] = {
                                    loaded: !1,
                                    observers: c
                                };
                                var u = document.createElement("script");
                                for (var d in u.src = t, u.async = !0, g.attributes) u.setAttribute(d, g.attributes[d]);
                                a && (u.id = a);
                                var l = function(e) {
                                    if (p[t]) {
                                        var n = p[t].observers;
                                        for (var r in n) e(n[r]) && delete n[r]
                                    }
                                };
                                i && "undefined" !== typeof window && (window[i] = function() {
                                    return e.asyncScriptLoaderTriggerOnScriptLoaded()
                                }), u.onload = function() {
                                    var e = p[t];
                                    e && (e.loaded = !0, l((function(t) {
                                        return !i && (t(e), !0)
                                    })))
                                }, u.onerror = function() {
                                    var e = p[t];
                                    e && (e.errored = !0, l((function(t) {
                                        return t(e), !0
                                    })))
                                }, document.body.appendChild(u)
                            }, a.componentWillUnmount = function() {
                                var e = this.__scriptURL;
                                if (!0 === g.removeOnUnmount)
                                    for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n += 1) t[n].src.indexOf(e) > -1 && t[n].parentNode && t[n].parentNode.removeChild(t[n]);
                                var r = p[e];
                                r && (delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()], !0 === g.removeOnUnmount && delete p[e])
                            }, a.render = function() {
                                var t = g.globalName,
                                    n = this.props,
                                    o = (n.asyncScriptOnLoad, n.forwardedRef),
                                    i = function(e, t) {
                                        if (null == e) return {};
                                        var n, r, o = {},
                                            i = Object.keys(e);
                                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                        return o
                                    }(n, ["asyncScriptOnLoad", "forwardedRef"]);
                                return t && "undefined" !== typeof window && (i[t] = "undefined" !== typeof window[t] ? window[t] : void 0), i.ref = o, (0, r.createElement)(e, i)
                            }, i
                        }(r.Component),
                        o = (0, r.forwardRef)((function(e, t) {
                            return (0, r.createElement)(n, l({}, e, {
                                forwardedRef: t
                            }))
                        }));
                    return o.displayName = "AsyncScriptLoader(" + t + ")", o.propTypes = {
                        asyncScriptOnLoad: i().func
                    }, d()(o, e)
                })(c),
                v = y
        },
        37856: function(e, t, n) {
            "use strict";
            var r, o, i;
            o = [t, n(67294), n(45697)], r = function(t, n, r) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var o = a(n),
                    i = a(r);

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function s(e) {
                    return s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, s(e)
                }

                function c(e, t) {
                    if (null == e) return {};
                    var n, r, o = u(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                }

                function u(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }

                function d(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function l(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function p(e, t, n) {
                    return t && l(e.prototype, t), n && l(e, n), e
                }

                function f(e, t) {
                    return !t || "object" !== s(t) && "function" !== typeof t ? m(e) : t
                }

                function h(e) {
                    return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, h(e)
                }

                function m(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function g(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }

                function y(e, t) {
                    return y = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, y(e, t)
                }

                function v(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var b = 1e-4,
                    w = function(e, t) {
                        return Math.abs(e - t) < b
                    },
                    x = function(e) {
                        function t() {
                            var e, n;
                            d(this, t);
                            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                            return v(m(n = f(this, (e = h(t)).call.apply(e, [this].concat(o)))), "onResize", (function() {
                                n.rafId && window.cancelAnimationFrame(n.rafId), n.rafId = window.requestAnimationFrame(n.update.bind(m(n)))
                            })), v(m(n), "onToggled", (function(e) {
                                "function" === typeof n.props.onToggled && setTimeout((function() {
                                    return n.props.onToggled(e)
                                }), 0)
                            })), v(m(n), "onTruncated", (function() {
                                "function" === typeof n.props.onTruncated && setTimeout((function() {
                                    return n.props.onTruncated()
                                }), 0)
                            })), v(m(n), "onCalculated", (function() {
                                "function" === typeof n.props.onCalculated && setTimeout((function() {
                                    return n.props.onCalculated()
                                }), 0)
                            })), v(m(n), "update", (function() {
                                var e = window.getComputedStyle(n.scope),
                                    t = [e["font-weight"], e["font-style"], e["font-size"], e["font-family"], e["letter-spacing"]].join(" ");
                                n.canvas.font = t, n.forceUpdate()
                            })), n
                        }
                        return g(t, e), p(t, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = document.createElement("canvas"),
                                    t = document.createDocumentFragment(),
                                    n = window.getComputedStyle(this.scope),
                                    r = [n["font-weight"], n["font-style"], n["font-size"], n["font-family"]].join(" ");
                                t.appendChild(e), this.canvas = e.getContext("2d"), this.canvas.font = r, this.forceUpdate(), window.addEventListener("resize", this.onResize)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener("resize", this.onResize), this.rafId && window.cancelAnimationFrame(this.rafId)
                            }
                        }, {
                            key: "measureWidth",
                            value: function(e) {
                                return this.canvas.measureText(e).width
                            }
                        }, {
                            key: "getRenderText",
                            value: function() {
                                var e = this.props,
                                    t = (e.containerClassName, e.element, e.line),
                                    r = (e.onCalculated, e.onTruncated, e.onToggled, e.text),
                                    i = e.textElement,
                                    a = e.textTruncateChild,
                                    s = e.truncateText,
                                    u = e.maxCalculateTimes,
                                    d = c(e, ["containerClassName", "element", "line", "onCalculated", "onTruncated", "onToggled", "text", "textElement", "textTruncateChild", "truncateText", "maxCalculateTimes"]),
                                    l = this.scope.getBoundingClientRect().width;
                                if (0 === l) return null;
                                var p = this.measureWidth(r);
                                if (l > p || w(l, p)) return this.onToggled(!1), (0, n.createElement)(i, d, r);
                                var f = "";
                                if (a && "string" === typeof a.type) {
                                    var h = a.type;
                                    (h.indexOf("span") >= 0 || h.indexOf("a") >= 0) && (f = a.props.children)
                                }
                                for (var m = 1, g = r.length, y = "", v = 0, b = 0, x = t, C = 0, O = !1, T = !1, _ = 0, R = -1, E = "", k = 0; x-- > 0;) {
                                    for (E = x ? "" : s + (f ? " " + f : ""); m <= g;) {
                                        if (y = r.substr(b, m), !((C = this.measureWidth(y + E)) < l)) {
                                            do {
                                                if (k++ >= u) break;
                                                y = r.substr(b, m), x || m--, " " === y[y.length - 1] && (y = r.substr(b, m - 1)), O && (R = y.lastIndexOf(" ")) > -1 ? (m = R, x && m++, y = r.substr(b, m)) : (m--, y = r.substr(b, m)), C = this.measureWidth(y + E)
                                            } while ((C > l || w(C, l)) && y.length > 0);
                                            b += m;
                                            break
                                        } - 1 === (v = r.indexOf(" ", m + 1)) ? (m += 1, O = !1) : (O = !0, m = v)
                                    }
                                    if (m >= g) {
                                        b = g;
                                        break
                                    }
                                    O && !T && -1 === r.substr(_, m).indexOf(" ") && (T = -1 === r.substr(_, m).indexOf(" "), x--), _ = m + 1
                                }
                                return b === g ? (this.onToggled(!1), (0, n.createElement)(i, d, r)) : (this.onTruncated(), this.onToggled(!0), o.default.createElement("span", d, (0, n.createElement)(i, d, r.substr(0, b) + s + " "), a))
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    r = t.element,
                                    o = t.text,
                                    i = t.style,
                                    a = void 0 === i ? {} : i,
                                    s = t.containerClassName,
                                    u = t.line,
                                    d = (t.onCalculated, t.onTruncated, t.onToggled, t.textElement),
                                    l = (t.textTruncateChild, t.truncateText, t.maxCalculateTimes, c(t, ["element", "text", "style", "containerClassName", "line", "onCalculated", "onTruncated", "onToggled", "textElement", "textTruncateChild", "truncateText", "maxCalculateTimes"])),
                                    p = a.fontWeight,
                                    f = a.fontStyle,
                                    h = a.fontSize,
                                    m = a.fontFamily,
                                    g = this.scope && u ? this.getRenderText() : (0, n.createElement)(d, l, o),
                                    y = {
                                        ref: function(t) {
                                            e.scope = t
                                        },
                                        className: s,
                                        style: {
                                            overflow: "hidden",
                                            fontWeight: p,
                                            fontStyle: f,
                                            fontSize: h,
                                            fontFamily: m
                                        }
                                    };
                                return this.scope && this.onCalculated(), (0, n.createElement)(r, y, g)
                            }
                        }]), t
                    }(n.Component);
                v(x, "propTypes", {
                    containerClassName: i.default.string,
                    element: i.default.string,
                    line: i.default.oneOfType([i.default.number, i.default.bool]),
                    onCalculated: i.default.func,
                    onTruncated: i.default.func,
                    onToggled: i.default.func,
                    text: i.default.string,
                    textElement: i.default.elementType,
                    textTruncateChild: i.default.node,
                    truncateText: i.default.string,
                    maxCalculateTimes: i.default.number
                }), v(x, "defaultProps", {
                    element: "div",
                    line: 1,
                    text: "",
                    textElement: "span",
                    truncateText: "\u2026",
                    maxCalculateTimes: 10
                }), t.default = x, e.exports = t.default
            }, void 0 === (i = "function" === typeof r ? r.apply(t, o) : r) || (e.exports = i)
        },
        42708: function(e, t, n) {
            "use strict";
            n.d(t, {
                df: function() {
                    return p
                }
            });
            var r = n(67294),
                o = Object.defineProperty,
                i = (e, t, n) => (((e, t, n) => {
                    t in e ? o(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                a = new Map,
                s = new WeakMap,
                c = 0,
                u = void 0;

            function d(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(s.has(n)||(c+=1,s.set(n,c.toString())),s.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function l(e, t, n = {}, r = u) {
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== r) {
                    const o = e.getBoundingClientRect();
                    return t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: o,
                        intersectionRect: o,
                        rootBounds: o
                    }), () => {}
                }
                const {
                    id: o,
                    observer: i,
                    elements: s
                } = function(e) {
                    let t = d(e),
                        n = a.get(t);
                    if (!n) {
                        const r = new Map;
                        let o;
                        const i = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const i = t.isIntersecting && o.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = i), null == (n = r.get(t.target)) || n.forEach((e => {
                                    e(i, t)
                                }))
                            }))
                        }), e);
                        o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: i,
                            elements: r
                        }, a.set(t, n)
                    }
                    return n
                }(n);
                let c = s.get(e) || [];
                return s.has(e) || s.set(e, c), c.push(t), i.observe(e),
                    function() {
                        c.splice(c.indexOf(t), 1), 0 === c.length && (s.delete(e), i.unobserve(e)), 0 === s.size && (i.disconnect(), a.delete(o))
                    }
            }
            var p = class extends r.Component {
                constructor(e) {
                    super(e), i(this, "node", null), i(this, "_unobserveCb", null), i(this, "handleNode", (e => {
                        this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
                            inView: !!this.props.initialInView,
                            entry: void 0
                        })), this.node = e || null, this.observeNode()
                    })), i(this, "handleChange", ((e, t) => {
                        e && this.props.triggerOnce && this.unobserve(),
                            function(e) {
                                return "function" !== typeof e.children
                            }(this.props) || this.setState({
                                inView: e,
                                entry: t
                            }), this.props.onChange && this.props.onChange(e, t)
                    })), this.state = {
                        inView: !!e.initialInView,
                        entry: void 0
                    }
                }
                componentDidMount() {
                    this.unobserve(), this.observeNode()
                }
                componentDidUpdate(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }
                componentWillUnmount() {
                    this.unobserve()
                }
                observeNode() {
                    if (!this.node || this.props.skip) return;
                    const {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: r,
                        delay: o,
                        fallbackInView: i
                    } = this.props;
                    this._unobserveCb = l(this.node, this.handleChange, {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: r,
                        delay: o
                    }, i)
                }
                unobserve() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }
                render() {
                    const {
                        children: e
                    } = this.props;
                    if ("function" === typeof e) {
                        const {
                            inView: t,
                            entry: n
                        } = this.state;
                        return e({
                            inView: t,
                            entry: n,
                            ref: this.handleNode
                        })
                    }
                    const {
                        as: t,
                        triggerOnce: n,
                        threshold: o,
                        root: i,
                        rootMargin: a,
                        onChange: s,
                        skip: c,
                        trackVisibility: u,
                        delay: d,
                        initialInView: l,
                        fallbackInView: p,
                        ...f
                    } = this.props;
                    return r.createElement(t || "div", {
                        ref: this.handleNode,
                        ...f
                    }, e)
                }
            }
        }
    }
]);