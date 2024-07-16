"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [806], {
        8891: function(e) {
            var t, r = {
                DEBUG: !1,
                LIB_VERSION: "2.48.1"
            };
            if ("undefined" === typeof window) {
                var i = {
                    hostname: ""
                };
                t = {
                    navigator: {
                        userAgent: ""
                    },
                    document: {
                        location: i,
                        referrer: ""
                    },
                    screen: {
                        width: 0,
                        height: 0
                    },
                    location: i
                }
            } else t = window;
            var o = Array.prototype,
                n = Function.prototype,
                s = Object.prototype,
                a = o.slice,
                c = s.toString,
                p = s.hasOwnProperty,
                u = t.console,
                _ = t.navigator,
                h = t.document,
                l = t.opera,
                d = t.screen,
                f = _.userAgent,
                g = n.bind,
                m = o.forEach,
                y = o.indexOf,
                v = o.map,
                b = Array.isArray,
                k = {},
                x = {
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                w = {
                    log: function() {
                        if (r.DEBUG && !x.isUndefined(u) && u) try {
                            u.log.apply(u, arguments)
                        } catch (e) {
                            x.each(arguments, (function(e) {
                                u.log(e)
                            }))
                        }
                    },
                    warn: function() {
                        if (r.DEBUG && !x.isUndefined(u) && u) {
                            var e = ["Mixpanel warning:"].concat(x.toArray(arguments));
                            try {
                                u.warn.apply(u, e)
                            } catch (t) {
                                x.each(e, (function(e) {
                                    u.warn(e)
                                }))
                            }
                        }
                    },
                    error: function() {
                        if (r.DEBUG && !x.isUndefined(u) && u) {
                            var e = ["Mixpanel error:"].concat(x.toArray(arguments));
                            try {
                                u.error.apply(u, e)
                            } catch (t) {
                                x.each(e, (function(e) {
                                    u.error(e)
                                }))
                            }
                        }
                    },
                    critical: function() {
                        if (!x.isUndefined(u) && u) {
                            var e = ["Mixpanel error:"].concat(x.toArray(arguments));
                            try {
                                u.error.apply(u, e)
                            } catch (t) {
                                x.each(e, (function(e) {
                                    u.error(e)
                                }))
                            }
                        }
                    }
                },
                S = function(e, t) {
                    return function() {
                        return arguments[0] = "[" + t + "] " + arguments[0], e.apply(w, arguments)
                    }
                },
                q = function(e) {
                    return {
                        log: S(w.log, e),
                        error: S(w.error, e),
                        critical: S(w.critical, e)
                    }
                };
            x.bind = function(e, t) {
                var r, i;
                if (g && e.bind === g) return g.apply(e, a.call(arguments, 1));
                if (!x.isFunction(e)) throw new TypeError;
                return r = a.call(arguments, 2), i = function() {
                    if (!(this instanceof i)) return e.apply(t, r.concat(a.call(arguments)));
                    var o = {};
                    o.prototype = e.prototype;
                    var n = new o;
                    o.prototype = null;
                    var s = e.apply(n, r.concat(a.call(arguments)));
                    return Object(s) === s ? s : n
                }, i
            }, x.each = function(e, t, r) {
                if (null !== e && void 0 !== e)
                    if (m && e.forEach === m) e.forEach(t, r);
                    else if (e.length === +e.length) {
                    for (var i = 0, o = e.length; i < o; i++)
                        if (i in e && t.call(r, e[i], i, e) === k) return
                } else
                    for (var n in e)
                        if (p.call(e, n) && t.call(r, e[n], n, e) === k) return
            }, x.extend = function(e) {
                return x.each(a.call(arguments, 1), (function(t) {
                    for (var r in t) void 0 !== t[r] && (e[r] = t[r])
                })), e
            }, x.isArray = b || function(e) {
                return "[object Array]" === c.call(e)
            }, x.isFunction = function(e) {
                try {
                    return /^\s*\bfunction\b/.test(e)
                } catch (t) {
                    return !1
                }
            }, x.isArguments = function(e) {
                return !(!e || !p.call(e, "callee"))
            }, x.toArray = function(e) {
                return e ? e.toArray ? e.toArray() : x.isArray(e) || x.isArguments(e) ? a.call(e) : x.values(e) : []
            }, x.map = function(e, t, r) {
                if (v && e.map === v) return e.map(t, r);
                var i = [];
                return x.each(e, (function(e) {
                    i.push(t.call(r, e))
                })), i
            }, x.keys = function(e) {
                var t = [];
                return null === e || x.each(e, (function(e, r) {
                    t[t.length] = r
                })), t
            }, x.values = function(e) {
                var t = [];
                return null === e || x.each(e, (function(e) {
                    t[t.length] = e
                })), t
            }, x.include = function(e, t) {
                var r = !1;
                return null === e ? r : y && e.indexOf === y ? -1 != e.indexOf(t) : (x.each(e, (function(e) {
                    if (r || (r = e === t)) return k
                })), r)
            }, x.includes = function(e, t) {
                return -1 !== e.indexOf(t)
            }, x.inherit = function(e, t) {
                return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
            }, x.isObject = function(e) {
                return e === Object(e) && !x.isArray(e)
            }, x.isEmptyObject = function(e) {
                if (x.isObject(e)) {
                    for (var t in e)
                        if (p.call(e, t)) return !1;
                    return !0
                }
                return !1
            }, x.isUndefined = function(e) {
                return void 0 === e
            }, x.isString = function(e) {
                return "[object String]" == c.call(e)
            }, x.isDate = function(e) {
                return "[object Date]" == c.call(e)
            }, x.isNumber = function(e) {
                return "[object Number]" == c.call(e)
            }, x.isElement = function(e) {
                return !(!e || 1 !== e.nodeType)
            }, x.encodeDates = function(e) {
                return x.each(e, (function(t, r) {
                    x.isDate(t) ? e[r] = x.formatDate(t) : x.isObject(t) && (e[r] = x.encodeDates(t))
                })), e
            }, x.timestamp = function() {
                return Date.now = Date.now || function() {
                    return +new Date
                }, Date.now()
            }, x.formatDate = function(e) {
                function t(e) {
                    return e < 10 ? "0" + e : e
                }
                return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
            }, x.strip_empty_properties = function(e) {
                var t = {};
                return x.each(e, (function(e, r) {
                    x.isString(e) && e.length > 0 && (t[r] = e)
                })), t
            }, x.truncate = function(e, t) {
                var r;
                return "string" === typeof e ? r = e.slice(0, t) : x.isArray(e) ? (r = [], x.each(e, (function(e) {
                    r.push(x.truncate(e, t))
                }))) : x.isObject(e) ? (r = {}, x.each(e, (function(e, i) {
                    r[i] = x.truncate(e, t)
                }))) : r = e, r
            }, x.JSONEncode = function(e) {
                var t = function(e) {
                        var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            r = {
                                "\b": "\\b",
                                "\t": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            };
                        return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, (function(e) {
                            var t = r[e];
                            return "string" === typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })) + '"' : '"' + e + '"'
                    },
                    r = function(e, i) {
                        var o = "",
                            n = 0,
                            s = "",
                            a = "",
                            u = 0,
                            _ = o,
                            h = [],
                            l = i[e];
                        switch (l && "object" === typeof l && "function" === typeof l.toJSON && (l = l.toJSON(e)), typeof l) {
                            case "string":
                                return t(l);
                            case "number":
                                return isFinite(l) ? String(l) : "null";
                            case "boolean":
                            case "null":
                                return String(l);
                            case "object":
                                if (!l) return "null";
                                if (o += "    ", h = [], "[object Array]" === c.apply(l)) {
                                    for (u = l.length, n = 0; n < u; n += 1) h[n] = r(n, l) || "null";
                                    return a = 0 === h.length ? "[]" : o ? "[\n" + o + h.join(",\n" + o) + "\n" + _ + "]" : "[" + h.join(",") + "]", o = _, a
                                }
                                for (s in l) p.call(l, s) && (a = r(s, l)) && h.push(t(s) + (o ? ": " : ":") + a);
                                return a = 0 === h.length ? "{}" : o ? "{" + h.join(",") + _ + "}" : "{" + h.join(",") + "}", o = _, a
                        }
                    };
                return r("", {
                    "": e
                })
            }, x.JSONDecode = function() {
                var e, t, r, i, o = {
                        '"': '"',
                        "\\": "\\",
                        "/": "/",
                        b: "\b",
                        f: "\f",
                        n: "\n",
                        r: "\r",
                        t: "\t"
                    },
                    n = function(t) {
                        var i = new SyntaxError(t);
                        throw i.at = e, i.text = r, i
                    },
                    s = function(i) {
                        return i && i !== t && n("Expected '" + i + "' instead of '" + t + "'"), t = r.charAt(e), e += 1, t
                    },
                    a = function() {
                        var e, r = "";
                        for ("-" === t && (r = "-", s("-")); t >= "0" && t <= "9";) r += t, s();
                        if ("." === t)
                            for (r += "."; s() && t >= "0" && t <= "9";) r += t;
                        if ("e" === t || "E" === t)
                            for (r += t, s(), "-" !== t && "+" !== t || (r += t, s()); t >= "0" && t <= "9";) r += t, s();
                        if (e = +r, isFinite(e)) return e;
                        n("Bad number")
                    },
                    c = function() {
                        var e, r, i, a = "";
                        if ('"' === t)
                            for (; s();) {
                                if ('"' === t) return s(), a;
                                if ("\\" === t)
                                    if (s(), "u" === t) {
                                        for (i = 0, r = 0; r < 4 && (e = parseInt(s(), 16), isFinite(e)); r += 1) i = 16 * i + e;
                                        a += String.fromCharCode(i)
                                    } else {
                                        if ("string" !== typeof o[t]) break;
                                        a += o[t]
                                    }
                                else a += t
                            }
                        n("Bad string")
                    },
                    p = function() {
                        for (; t && t <= " ";) s()
                    };
                return i = function() {
                        switch (p(), t) {
                            case "{":
                                return function() {
                                    var e, r = {};
                                    if ("{" === t) {
                                        if (s("{"), p(), "}" === t) return s("}"), r;
                                        for (; t;) {
                                            if (e = c(), p(), s(":"), Object.hasOwnProperty.call(r, e) && n('Duplicate key "' + e + '"'), r[e] = i(), p(), "}" === t) return s("}"), r;
                                            s(","), p()
                                        }
                                    }
                                    n("Bad object")
                                }();
                            case "[":
                                return function() {
                                    var e = [];
                                    if ("[" === t) {
                                        if (s("["), p(), "]" === t) return s("]"), e;
                                        for (; t;) {
                                            if (e.push(i()), p(), "]" === t) return s("]"), e;
                                            s(","), p()
                                        }
                                    }
                                    n("Bad array")
                                }();
                            case '"':
                                return c();
                            case "-":
                                return a();
                            default:
                                return t >= "0" && t <= "9" ? a() : function() {
                                    switch (t) {
                                        case "t":
                                            return s("t"), s("r"), s("u"), s("e"), !0;
                                        case "f":
                                            return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
                                        case "n":
                                            return s("n"), s("u"), s("l"), s("l"), null
                                    }
                                    n('Unexpected "' + t + '"')
                                }()
                        }
                    },
                    function(o) {
                        var s;
                        return r = o, e = 0, t = " ", s = i(), p(), t && n("Syntax error"), s
                    }
            }(), x.base64Encode = function(e) {
                var t, r, i, o, n, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    a = 0,
                    c = 0,
                    p = "",
                    u = [];
                if (!e) return e;
                e = x.utf8Encode(e);
                do {
                    t = (n = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, r = n >> 12 & 63, i = n >> 6 & 63, o = 63 & n, u[c++] = s.charAt(t) + s.charAt(r) + s.charAt(i) + s.charAt(o)
                } while (a < e.length);
                switch (p = u.join(""), e.length % 3) {
                    case 1:
                        p = p.slice(0, -2) + "==";
                        break;
                    case 2:
                        p = p.slice(0, -1) + "="
                }
                return p
            }, x.utf8Encode = function(e) {
                var t, r, i, o, n = "";
                for (t = r = 0, i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, o = 0; o < i; o++) {
                    var s = e.charCodeAt(o),
                        a = null;
                    s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (r > t && (n += e.substring(t, r)), n += a, t = r = o + 1)
                }
                return r > t && (n += e.substring(t, e.length)), n
            }, x.UUID = function() {
                var e = function() {
                    var e, r = 1 * new Date;
                    if (t.performance && t.performance.now) e = t.performance.now();
                    else
                        for (e = 0; r == 1 * new Date;) e++;
                    return r.toString(16) + Math.floor(e).toString(16)
                };
                return function() {
                    var t = (d.height * d.width).toString(16);
                    return e() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
                        var e, t, r = f,
                            i = [],
                            o = 0;

                        function n(e, t) {
                            var r, o = 0;
                            for (r = 0; r < t.length; r++) o |= i[r] << 8 * r;
                            return e ^ o
                        }
                        for (e = 0; e < r.length; e++) t = r.charCodeAt(e), i.unshift(255 & t), i.length >= 4 && (o = n(o, i), i = []);
                        return i.length > 0 && (o = n(o, i)), o.toString(16)
                    }() + "-" + t + "-" + e()
                }
            }();
            var E = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
            x.isBlockedUA = function(e) {
                var t;
                for (e = e.toLowerCase(), t = 0; t < E.length; t++)
                    if (-1 !== e.indexOf(E[t])) return !0;
                return !1
            }, x.HTTPBuildQuery = function(e, t) {
                var r, i, o = [];
                return x.isUndefined(t) && (t = "&"), x.each(e, (function(e, t) {
                    r = encodeURIComponent(e.toString()), i = encodeURIComponent(t), o[o.length] = i + "=" + r
                })), o.join(t)
            }, x.getQueryParam = function(e, t) {
                t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                if (null === r || r && "string" !== typeof r[1] && r[1].length) return "";
                var i = r[1];
                try {
                    i = decodeURIComponent(i)
                } catch (o) {
                    w.error("Skipping decoding for malformed query param: " + i)
                }
                return i.replace(/\+/g, " ")
            }, x.cookie = {
                get: function(e) {
                    for (var t = e + "=", r = h.cookie.split(";"), i = 0; i < r.length; i++) {
                        for (var o = r[i];
                            " " == o.charAt(0);) o = o.substring(1, o.length);
                        if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length))
                    }
                    return null
                },
                parse: function(e) {
                    var t;
                    try {
                        t = x.JSONDecode(x.cookie.get(e)) || {}
                    } catch (r) {}
                    return t
                },
                set_seconds: function(e, t, r, i, o, n, s) {
                    var a = "",
                        c = "",
                        p = "";
                    if (s) a = "; domain=" + s;
                    else if (i) {
                        var u = P(h.location.hostname);
                        a = u ? "; domain=." + u : ""
                    }
                    if (r) {
                        var _ = new Date;
                        _.setTime(_.getTime() + 1e3 * r), c = "; expires=" + _.toGMTString()
                    }
                    n && (o = !0, p = "; SameSite=None"), o && (p += "; secure"), h.cookie = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p
                },
                set: function(e, t, r, i, o, n, s) {
                    var a = "",
                        c = "",
                        p = "";
                    if (s) a = "; domain=" + s;
                    else if (i) {
                        var u = P(h.location.hostname);
                        a = u ? "; domain=." + u : ""
                    }
                    if (r) {
                        var _ = new Date;
                        _.setTime(_.getTime() + 24 * r * 60 * 60 * 1e3), c = "; expires=" + _.toGMTString()
                    }
                    n && (o = !0, p = "; SameSite=None"), o && (p += "; secure");
                    var l = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p;
                    return h.cookie = l, l
                },
                remove: function(e, t, r) {
                    x.cookie.set(e, "", -1, t, !1, !1, r)
                }
            };
            var O = null,
                I = function(e, t) {
                    if (null !== O && !t) return O;
                    var r = !0;
                    try {
                        e = e || window.localStorage;
                        var i = "__mplss_" + $(8);
                        e.setItem(i, "xyz"), "xyz" !== e.getItem(i) && (r = !1), e.removeItem(i)
                    } catch (o) {
                        r = !1
                    }
                    return O = r, r
                };
            x.localStorage = {
                is_supported: function(e) {
                    var t = I(null, e);
                    return t || w.error("localStorage unsupported; falling back to cookie store"), t
                },
                error: function(e) {
                    w.error("localStorage error: " + e)
                },
                get: function(e) {
                    try {
                        return window.localStorage.getItem(e)
                    } catch (t) {
                        x.localStorage.error(t)
                    }
                    return null
                },
                parse: function(e) {
                    try {
                        return x.JSONDecode(x.localStorage.get(e)) || {}
                    } catch (t) {}
                    return null
                },
                set: function(e, t) {
                    try {
                        window.localStorage.setItem(e, t)
                    } catch (r) {
                        x.localStorage.error(r)
                    }
                },
                remove: function(e) {
                    try {
                        window.localStorage.removeItem(e)
                    } catch (t) {
                        x.localStorage.error(t)
                    }
                }
            }, x.register_event = function() {
                function e(t) {
                    return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
                }
                return e.preventDefault = function() {
                        this.returnValue = !1
                    }, e.stopPropagation = function() {
                        this.cancelBubble = !0
                    },
                    function(t, r, i, o, n) {
                        if (t)
                            if (t.addEventListener && !o) t.addEventListener(r, i, !!n);
                            else {
                                var s = "on" + r,
                                    a = t[s];
                                t[s] = function(t, r, i) {
                                    return function(o) {
                                        if (o = o || e(window.event)) {
                                            var n, s, a = !0;
                                            return x.isFunction(i) && (n = i(o)), s = r.call(t, o), !1 !== n && !1 !== s || (a = !1), a
                                        }
                                    }
                                }(t, i, a)
                            }
                        else w.error("No valid element provided to register_event")
                    }
            }();
            var D = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
            x.dom_query = function() {
                function e(e) {
                    return e.all ? e.all : e.getElementsByTagName("*")
                }
                var t = /[\t\r\n]/g;

                function r(e, r) {
                    var i = " " + r + " ";
                    return (" " + e.className + " ").replace(t, " ").indexOf(i) >= 0
                }

                function i(t) {
                    if (!h.getElementsByTagName) return [];
                    var i, o, n, s, a, c, p, u, _, l, d = t.split(" "),
                        f = [h];
                    for (c = 0; c < d.length; c++)
                        if ((i = d[c].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
                            n = (o = i.split("#"))[0];
                            var g = o[1],
                                m = h.getElementById(g);
                            if (!m || n && m.nodeName.toLowerCase() != n) return [];
                            f = [m]
                        } else if (i.indexOf(".") > -1) {
                        n = (o = i.split("."))[0];
                        var y = o[1];
                        for (n || (n = "*"), s = [], a = 0, p = 0; p < f.length; p++)
                            for (_ = "*" == n ? e(f[p]) : f[p].getElementsByTagName(n), u = 0; u < _.length; u++) s[a++] = _[u];
                        for (f = [], l = 0, p = 0; p < s.length; p++) s[p].className && x.isString(s[p].className) && r(s[p], y) && (f[l++] = s[p])
                    } else {
                        var v = i.match(D);
                        if (v) {
                            n = v[1];
                            var b, k = v[2],
                                w = v[3],
                                S = v[4];
                            for (n || (n = "*"), s = [], a = 0, p = 0; p < f.length; p++)
                                for (_ = "*" == n ? e(f[p]) : f[p].getElementsByTagName(n), u = 0; u < _.length; u++) s[a++] = _[u];
                            switch (f = [], l = 0, w) {
                                case "=":
                                    b = function(e) {
                                        return e.getAttribute(k) == S
                                    };
                                    break;
                                case "~":
                                    b = function(e) {
                                        return e.getAttribute(k).match(new RegExp("\\b" + S + "\\b"))
                                    };
                                    break;
                                case "|":
                                    b = function(e) {
                                        return e.getAttribute(k).match(new RegExp("^" + S + "-?"))
                                    };
                                    break;
                                case "^":
                                    b = function(e) {
                                        return 0 === e.getAttribute(k).indexOf(S)
                                    };
                                    break;
                                case "$":
                                    b = function(e) {
                                        return e.getAttribute(k).lastIndexOf(S) == e.getAttribute(k).length - S.length
                                    };
                                    break;
                                case "*":
                                    b = function(e) {
                                        return e.getAttribute(k).indexOf(S) > -1
                                    };
                                    break;
                                default:
                                    b = function(e) {
                                        return e.getAttribute(k)
                                    }
                            }
                            for (f = [], l = 0, p = 0; p < s.length; p++) b(s[p]) && (f[l++] = s[p])
                        } else {
                            for (n = i, s = [], a = 0, p = 0; p < f.length; p++)
                                for (_ = f[p].getElementsByTagName(n), u = 0; u < _.length; u++) s[a++] = _[u];
                            f = s
                        }
                    }
                    return f
                }
                return function(e) {
                    return x.isElement(e) ? [e] : x.isObject(e) && !x.isUndefined(e.length) ? e : i.call(this, e)
                }
            }();
            var A = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
                T = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "ttclid", "twclid", "wbraid"];
            x.info = {
                campaignParams: function(e) {
                    var t = "",
                        r = {};
                    return x.each(A, (function(i) {
                        (t = x.getQueryParam(h.URL, i)).length ? r[i] = t : void 0 !== e && (r[i] = e)
                    })), r
                },
                clickParams: function() {
                    var e = "",
                        t = {};
                    return x.each(T, (function(r) {
                        (e = x.getQueryParam(h.URL, r)).length && (t[r] = e)
                    })), t
                },
                marketingParams: function() {
                    return x.extend(x.info.campaignParams(), x.info.clickParams())
                },
                searchEngine: function(e) {
                    return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
                },
                searchInfo: function(e) {
                    var t = x.info.searchEngine(e),
                        r = "yahoo" != t ? "q" : "p",
                        i = {};
                    if (null !== t) {
                        i.$search_engine = t;
                        var o = x.getQueryParam(e, r);
                        o.length && (i.mp_keyword = o)
                    }
                    return i
                },
                browser: function(e, t, r) {
                    return t = t || "", r || x.includes(e, " OPR/") ? x.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : x.includes(e, "IEMobile") || x.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : x.includes(e, "SamsungBrowser/") ? "Samsung Internet" : x.includes(e, "Edge") || x.includes(e, "Edg/") ? "Microsoft Edge" : x.includes(e, "FBIOS") ? "Facebook Mobile" : x.includes(e, "Chrome") ? "Chrome" : x.includes(e, "CriOS") ? "Chrome iOS" : x.includes(e, "UCWEB") || x.includes(e, "UCBrowser") ? "UC Browser" : x.includes(e, "FxiOS") ? "Firefox iOS" : x.includes(t, "Apple") ? x.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : x.includes(e, "Android") ? "Android Mobile" : x.includes(e, "Konqueror") ? "Konqueror" : x.includes(e, "Firefox") ? "Firefox" : x.includes(e, "MSIE") || x.includes(e, "Trident/") ? "Internet Explorer" : x.includes(e, "Gecko") ? "Mozilla" : ""
                },
                browserVersion: function(e, t, r) {
                    var i = {
                        "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                        "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                        Chrome: /Chrome\/(\d+(\.\d+)?)/,
                        "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                        "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                        Safari: /Version\/(\d+(\.\d+)?)/,
                        "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                        Firefox: /Firefox\/(\d+(\.\d+)?)/,
                        "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                        "Android Mobile": /android\s(\d+(\.\d+)?)/,
                        "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                        "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                        Mozilla: /rv:(\d+(\.\d+)?)/
                    }[x.info.browser(e, t, r)];
                    if (void 0 === i) return null;
                    var o = e.match(i);
                    return o ? parseFloat(o[o.length - 2]) : null
                },
                os: function() {
                    var e = f;
                    return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
                },
                device: function(e) {
                    return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : ""
                },
                referringDomain: function(e) {
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : ""
                },
                properties: function() {
                    return x.extend(x.strip_empty_properties({
                        $os: x.info.os(),
                        $browser: x.info.browser(f, _.vendor, l),
                        $referrer: h.referrer,
                        $referring_domain: x.info.referringDomain(h.referrer),
                        $device: x.info.device(f)
                    }), {
                        $current_url: t.location.href,
                        $browser_version: x.info.browserVersion(f, _.vendor, l),
                        $screen_height: d.height,
                        $screen_width: d.width,
                        mp_lib: "web",
                        $lib_version: r.LIB_VERSION,
                        $insert_id: $(),
                        time: x.timestamp() / 1e3
                    })
                },
                people_properties: function() {
                    return x.extend(x.strip_empty_properties({
                        $os: x.info.os(),
                        $browser: x.info.browser(f, _.vendor, l)
                    }), {
                        $browser_version: x.info.browserVersion(f, _.vendor, l)
                    })
                },
                mpPageViewProperties: function() {
                    return x.strip_empty_properties({
                        current_page_title: h.title,
                        current_domain: t.location.hostname,
                        current_url_path: t.location.pathname,
                        current_url_protocol: t.location.protocol,
                        current_url_search: t.location.search
                    })
                }
            };
            var $ = function(e) {
                    var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
                    return e ? t.substring(0, e) : t
                },
                B = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
                U = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
                P = function(e) {
                    var t = U,
                        r = e.split("."),
                        i = r[r.length - 1];
                    (i.length > 4 || "com" === i || "org" === i) && (t = B);
                    var o = e.match(t);
                    return o ? o[0] : ""
                },
                C = null,
                N = null;
            "undefined" !== typeof JSON && (C = JSON.stringify, N = JSON.parse), C = C || x.JSONEncode, N = N || x.JSONDecode, x.toArray = x.toArray, x.isObject = x.isObject, x.JSONEncode = x.JSONEncode, x.JSONDecode = x.JSONDecode, x.isBlockedUA = x.isBlockedUA, x.isEmptyObject = x.isEmptyObject, x.info = x.info, x.info.device = x.info.device, x.info.browser = x.info.browser, x.info.browserVersion = x.info.browserVersion, x.info.properties = x.info.properties;
            var j = function() {};
            j.prototype.create_properties = function() {}, j.prototype.event_handler = function() {}, j.prototype.after_track_handler = function() {}, j.prototype.init = function(e) {
                return this.mp = e, this
            }, j.prototype.track = function(e, t, r, i) {
                var o = this,
                    n = x.dom_query(e);
                if (0 !== n.length) return x.each(n, (function(e) {
                    x.register_event(e, this.override_event, (function(e) {
                        var n = {},
                            s = o.create_properties(r, this),
                            a = o.mp.get_config("track_links_timeout");
                        o.event_handler(e, this, n), window.setTimeout(o.track_callback(i, s, n, !0), a), o.mp.track(t, s, o.track_callback(i, s, n))
                    }))
                }), this), !0;
                w.error("The DOM query (" + e + ") returned 0 elements")
            }, j.prototype.track_callback = function(e, t, r, i) {
                i = i || !1;
                var o = this;
                return function() {
                    r.callback_fired || (r.callback_fired = !0, e && !1 === e(i, t) || o.after_track_handler(t, r, i))
                }
            }, j.prototype.create_properties = function(e, t) {
                return "function" === typeof e ? e(t) : x.extend({}, e)
            };
            var M = function() {
                this.override_event = "click"
            };
            x.inherit(M, j), M.prototype.create_properties = function(e, t) {
                var r = M.superclass.create_properties.apply(this, arguments);
                return t.href && (r.url = t.href), r
            }, M.prototype.event_handler = function(e, t, r) {
                r.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target, r.href = t.href, r.new_tab || e.preventDefault()
            }, M.prototype.after_track_handler = function(e, t) {
                t.new_tab || setTimeout((function() {
                    window.location = t.href
                }), 0)
            };
            var F = function() {
                this.override_event = "submit"
            };
            x.inherit(F, j), F.prototype.event_handler = function(e, t, r) {
                r.element = t, e.preventDefault()
            }, F.prototype.after_track_handler = function(e, t) {
                setTimeout((function() {
                    t.element.submit()
                }), 0)
            };
            var R = q("lock"),
                z = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.pollIntervalMS = t.pollIntervalMS || 100, this.timeoutMS = t.timeoutMS || 2e3
                };
            z.prototype.withLock = function(e, t, r) {
                r || "function" === typeof t || (r = t, t = null);
                var i = r || (new Date).getTime() + "|" + Math.random(),
                    o = (new Date).getTime(),
                    n = this.storageKey,
                    s = this.pollIntervalMS,
                    a = this.timeoutMS,
                    c = this.storage,
                    p = n + ":X",
                    u = n + ":Y",
                    _ = n + ":Z",
                    h = function(e) {
                        t && t(e)
                    },
                    l = function(e) {
                        if ((new Date).getTime() - o > a) return R.error("Timeout waiting for mutex on " + n + "; clearing lock. [" + i + "]"), c.removeItem(_), c.removeItem(u), void g();
                        setTimeout((function() {
                            try {
                                e()
                            } catch (t) {
                                h(t)
                            }
                        }), s * (Math.random() + .1))
                    },
                    d = function(e, t) {
                        e() ? t() : l((function() {
                            d(e, t)
                        }))
                    },
                    f = function() {
                        var e = c.getItem(u);
                        if (e && e !== i) return !1;
                        if (c.setItem(u, i), c.getItem(u) === i) return !0;
                        if (!I(c, !0)) throw new Error("localStorage support dropped while acquiring lock");
                        return !1
                    },
                    g = function() {
                        c.setItem(p, i), d(f, (function() {
                            c.getItem(p) !== i ? l((function() {
                                c.getItem(u) === i ? d((function() {
                                    return !c.getItem(_)
                                }), m) : g()
                            })) : m()
                        }))
                    },
                    m = function() {
                        c.setItem(_, "1");
                        try {
                            e()
                        } finally {
                            c.removeItem(_), c.getItem(u) === i && c.removeItem(u), c.getItem(p) === i && c.removeItem(p)
                        }
                    };
                try {
                    if (!I(c, !0)) throw new Error("localStorage support check failed");
                    g()
                } catch (y) {
                    h(y)
                }
            };
            var L = q("batch"),
                J = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.reportError = t.errorReporter || x.bind(L.error, L), this.lock = new z(e, {
                        storage: this.storage
                    }), this.pid = t.pid || null, this.memQueue = []
                };
            J.prototype.enqueue = function(e, t, r) {
                var i = {
                    id: $(),
                    flushAfter: (new Date).getTime() + 2 * t,
                    payload: e
                };
                this.lock.withLock(x.bind((function() {
                    var t;
                    try {
                        var o = this.readFromStorage();
                        o.push(i), (t = this.saveToStorage(o)) && this.memQueue.push(i)
                    } catch (n) {
                        this.reportError("Error enqueueing item", e), t = !1
                    }
                    r && r(t)
                }), this), x.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e), r && r(!1)
                }), this), this.pid)
            }, J.prototype.fillBatch = function(e) {
                var t = this.memQueue.slice(0, e);
                if (t.length < e) {
                    var r = this.readFromStorage();
                    if (r.length) {
                        var i = {};
                        x.each(t, (function(e) {
                            i[e.id] = !0
                        }));
                        for (var o = 0; o < r.length; o++) {
                            var n = r[o];
                            if ((new Date).getTime() > n.flushAfter && !i[n.id] && (n.orphaned = !0, t.push(n), t.length >= e)) break
                        }
                    }
                }
                return t
            };
            var Q = function(e, t) {
                var r = [];
                return x.each(e, (function(e) {
                    e.id && !t[e.id] && r.push(e)
                })), r
            };
            J.prototype.removeItemsByID = function(e, t) {
                var r = {};
                x.each(e, (function(e) {
                    r[e] = !0
                })), this.memQueue = Q(this.memQueue, r);
                var i = x.bind((function() {
                    var t;
                    try {
                        var i = this.readFromStorage();
                        if (i = Q(i, r), t = this.saveToStorage(i)) {
                            i = this.readFromStorage();
                            for (var o = 0; o < i.length; o++) {
                                var n = i[o];
                                if (n.id && r[n.id]) return this.reportError("Item not removed from storage"), !1
                            }
                        }
                    } catch (s) {
                        this.reportError("Error removing items", e), t = !1
                    }
                    return t
                }), this);
                this.lock.withLock((function() {
                    var e = i();
                    t && t(e)
                }), x.bind((function(e) {
                    var r = !1;
                    if (this.reportError("Error acquiring storage lock", e), !I(this.storage, !0) && !(r = i())) try {
                        this.storage.removeItem(this.storageKey)
                    } catch (e) {
                        this.reportError("Error clearing queue", e)
                    }
                    t && t(r)
                }), this), this.pid)
            };
            var H = function(e, t) {
                var r = [];
                return x.each(e, (function(e) {
                    var i = e.id;
                    if (i in t) {
                        var o = t[i];
                        null !== o && (e.payload = o, r.push(e))
                    } else r.push(e)
                })), r
            };
            J.prototype.updatePayloads = function(e, t) {
                this.memQueue = H(this.memQueue, e), this.lock.withLock(x.bind((function() {
                    var r;
                    try {
                        var i = this.readFromStorage();
                        i = H(i, e), r = this.saveToStorage(i)
                    } catch (o) {
                        this.reportError("Error updating items", e), r = !1
                    }
                    t && t(r)
                }), this), x.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e), t && t(!1)
                }), this), this.pid)
            }, J.prototype.readFromStorage = function() {
                var e;
                try {
                    (e = this.storage.getItem(this.storageKey)) && (e = N(e), x.isArray(e) || (this.reportError("Invalid storage entry:", e), e = null))
                } catch (t) {
                    this.reportError("Error retrieving queue", t), e = null
                }
                return e || []
            }, J.prototype.saveToStorage = function(e) {
                try {
                    return this.storage.setItem(this.storageKey, C(e)), !0
                } catch (t) {
                    return this.reportError("Error saving queue", t), !1
                }
            }, J.prototype.clear = function() {
                this.memQueue = [], this.storage.removeItem(this.storageKey)
            };
            var K = q("batch"),
                G = function(e, t) {
                    this.errorReporter = t.errorReporter, this.queue = new J(e, {
                        errorReporter: x.bind(this.reportError, this),
                        storage: t.storage
                    }), this.libConfig = t.libConfig, this.sendRequest = t.sendRequestFunc, this.beforeSendHook = t.beforeSendHook, this.stopAllBatching = t.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0, this.itemIdsSentSuccessfully = {}
                };
            G.prototype.enqueue = function(e, t) {
                this.queue.enqueue(e, this.flushInterval, t)
            }, G.prototype.start = function() {
                this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
            }, G.prototype.stop = function() {
                this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
            }, G.prototype.clear = function() {
                this.queue.clear()
            }, G.prototype.resetBatchSize = function() {
                this.batchSize = this.libConfig.batch_size
            }, G.prototype.resetFlush = function() {
                this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
            }, G.prototype.scheduleFlush = function(e) {
                this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(x.bind(this.flush, this), this.flushInterval))
            }, G.prototype.flush = function(e) {
                try {
                    if (this.requestInProgress) return void K.log("Flush: Request already in progress");
                    e = e || {};
                    var t = this.libConfig.batch_request_timeout_ms,
                        i = (new Date).getTime(),
                        o = this.batchSize,
                        n = this.queue.fillBatch(o),
                        s = [],
                        a = {};
                    if (x.each(n, (function(e) {
                            var t = e.payload;
                            if (this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)), t) {
                                t.event && t.properties && (t.properties = x.extend({}, t.properties, {
                                    mp_sent_by_lib_version: r.LIB_VERSION
                                }));
                                var i = !0,
                                    o = e.id;
                                o ? (this.itemIdsSentSuccessfully[o] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
                                    item: e,
                                    batchSize: n.length,
                                    timesSent: this.itemIdsSentSuccessfully[o]
                                }), i = !1) : this.reportError("[dupe] found item with no ID", {
                                    item: e
                                }), i && s.push(t)
                            }
                            a[e.id] = t
                        }), this), s.length < 1) return void this.resetFlush();
                    this.requestInProgress = !0;
                    var c = x.bind((function(r) {
                            this.requestInProgress = !1;
                            try {
                                var s = !1;
                                if (e.unloading) this.queue.updatePayloads(a);
                                else if (x.isObject(r) && "timeout" === r.error && (new Date).getTime() - i >= t) this.reportError("Network timeout; retrying"), this.flush();
                                else if (x.isObject(r) && r.xhr_req && (r.xhr_req.status >= 500 || 429 === r.xhr_req.status || "timeout" === r.error)) {
                                    var c = 2 * this.flushInterval,
                                        p = r.xhr_req.responseHeaders;
                                    if (p) {
                                        var u = p["Retry-After"];
                                        u && (c = 1e3 * parseInt(u, 10) || c)
                                    }
                                    c = Math.min(6e5, c), this.reportError("Error; retry in " + c + " ms"), this.scheduleFlush(c)
                                } else if (x.isObject(r) && r.xhr_req && 413 === r.xhr_req.status)
                                    if (n.length > 1) {
                                        var _ = Math.max(1, Math.floor(o / 2));
                                        this.batchSize = Math.min(this.batchSize, _, n.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                                    } else this.reportError("Single-event request too large; dropping", n), this.resetBatchSize(), s = !0;
                                else s = !0;
                                s && (this.queue.removeItemsByID(x.map(n, (function(e) {
                                    return e.id
                                })), x.bind((function(e) {
                                    e ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                                }), this)), x.each(n, x.bind((function(e) {
                                    var t = e.id;
                                    t ? (this.itemIdsSentSuccessfully[t] = this.itemIdsSentSuccessfully[t] || 0, this.itemIdsSentSuccessfully[t]++, this.itemIdsSentSuccessfully[t] > 5 && this.reportError("[dupe] item ID sent too many times", {
                                        item: e,
                                        batchSize: n.length,
                                        timesSent: this.itemIdsSentSuccessfully[t]
                                    })) : this.reportError("[dupe] found item with no ID while removing", {
                                        item: e
                                    })
                                }), this)))
                            } catch (h) {
                                this.reportError("Error handling API response", h), this.resetFlush()
                            }
                        }), this),
                        p = {
                            method: "POST",
                            verbose: !0,
                            ignore_json_errors: !0,
                            timeout_ms: t
                        };
                    e.unloading && (p.transport = "sendBeacon"), K.log("MIXPANEL REQUEST:", s), this.sendRequest(s, p, c)
                } catch (u) {
                    this.reportError("Error flushing request queue", u), this.resetFlush()
                }
            }, G.prototype.reportError = function(e, t) {
                if (K.error.apply(K.error, arguments), this.errorReporter) try {
                    t instanceof Error || (t = new Error(e)), this.errorReporter(e, t)
                } catch (t) {
                    K.error(t)
                }
            };

            function V(e, t) {
                se(!0, e, t)
            }

            function W(e, t) {
                se(!1, e, t)
            }

            function X(e, t) {
                return "1" === ne(e, t)
            }

            function Y(e, r) {
                if (function(e) {
                        if (e && e.ignoreDnt) return !1;
                        var r = e && e.window || t,
                            i = r.navigator || {},
                            o = !1;
                        return x.each([i.doNotTrack, i.msDoNotTrack, r.doNotTrack], (function(e) {
                            x.includes([!0, 1, "1", "yes"], e) && (o = !0)
                        })), o
                    }(r)) return w.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
                var i = "0" === ne(e, r);
                return i && w.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), i
            }

            function Z(e) {
                return ae(e, (function(e) {
                    return this.get_config(e)
                }))
            }

            function ee(e) {
                return ae(e, (function(e) {
                    return this._get_config(e)
                }))
            }

            function te(e) {
                return ae(e, (function(e) {
                    return this._get_config(e)
                }))
            }

            function re(e, t) {
                ie(t = t || {}).remove(oe(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
            }

            function ie(e) {
                return "localStorage" === (e = e || {}).persistenceType ? x.localStorage : x.cookie
            }

            function oe(e, t) {
                return ((t = t || {}).persistencePrefix || "__mp_opt_in_out_") + e
            }

            function ne(e, t) {
                return ie(t).get(oe(e, t))
            }

            function se(e, t, r) {
                x.isString(t) && t.length ? (ie(r = r || {}).set(oe(t, r), e ? 1 : 0, x.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && e && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
                    send_immediately: !0
                })) : w.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
            }

            function ae(e, t) {
                return function() {
                    var r = !1;
                    try {
                        var i = t.call(this, "token"),
                            o = t.call(this, "ignore_dnt"),
                            n = t.call(this, "opt_out_tracking_persistence_type"),
                            s = t.call(this, "opt_out_tracking_cookie_prefix"),
                            a = t.call(this, "window");
                        i && (r = Y(i, {
                            ignoreDnt: o,
                            persistenceType: n,
                            persistencePrefix: s,
                            window: a
                        }))
                    } catch (p) {
                        w.error("Unexpected error when checking tracking opt-out status: " + p)
                    }
                    if (!r) return e.apply(this, arguments);
                    var c = arguments[arguments.length - 1];
                    "function" === typeof c && c(0)
                }
            }
            var ce = "$set",
                pe = "$set_once",
                ue = "$unset",
                _e = "$add",
                he = "$append",
                le = "$union",
                de = "$remove",
                fe = {
                    set_action: function(e, t) {
                        var r = {},
                            i = {};
                        return x.isObject(e) ? x.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r.$set = i, r
                    },
                    unset_action: function(e) {
                        var t = {},
                            r = [];
                        return x.isArray(e) || (e = [e]), x.each(e, (function(e) {
                            this._is_reserved_property(e) || r.push(e)
                        }), this), t.$unset = r, t
                    },
                    set_once_action: function(e, t) {
                        var r = {},
                            i = {};
                        return x.isObject(e) ? x.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r.$set_once = i, r
                    },
                    union_action: function(e, t) {
                        var r = {},
                            i = {};
                        return x.isObject(e) ? x.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = x.isArray(e) ? e : [e])
                        }), this) : i[e] = x.isArray(t) ? t : [t], r.$union = i, r
                    },
                    append_action: function(e, t) {
                        var r = {},
                            i = {};
                        return x.isObject(e) ? x.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r.$append = i, r
                    },
                    remove_action: function(e, t) {
                        var r = {},
                            i = {};
                        return x.isObject(e) ? x.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (i[t] = e)
                        }), this) : i[e] = t, r.$remove = i, r
                    },
                    delete_action: function() {
                        var e = {
                            $delete: ""
                        };
                        return e
                    }
                },
                ge = function() {};
            x.extend(ge.prototype, fe), ge.prototype._init = function(e, t, r) {
                this._mixpanel = e, this._group_key = t, this._group_id = r
            }, ge.prototype.set = te((function(e, t, r) {
                var i = this.set_action(e, t);
                return x.isObject(e) && (r = t), this._send_request(i, r)
            })), ge.prototype.set_once = te((function(e, t, r) {
                var i = this.set_once_action(e, t);
                return x.isObject(e) && (r = t), this._send_request(i, r)
            })), ge.prototype.unset = te((function(e, t) {
                var r = this.unset_action(e);
                return this._send_request(r, t)
            })), ge.prototype.union = te((function(e, t, r) {
                x.isObject(e) && (r = t);
                var i = this.union_action(e, t);
                return this._send_request(i, r)
            })), ge.prototype.delete = te((function(e) {
                var t = this.delete_action();
                return this._send_request(t, e)
            })), ge.prototype.remove = te((function(e, t, r) {
                var i = this.remove_action(e, t);
                return this._send_request(i, r)
            })), ge.prototype._send_request = function(e, t) {
                e.$group_key = this._group_key, e.$group_id = this._group_id, e.$token = this._get_config("token");
                var r = x.encodeDates(e);
                return this._mixpanel._track_or_batch({
                    type: "groups",
                    data: r,
                    endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").groups,
                    batcher: this._mixpanel.request_batchers.groups
                }, t)
            }, ge.prototype._is_reserved_property = function(e) {
                return "$group_key" === e || "$group_id" === e
            }, ge.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, ge.prototype.toString = function() {
                return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
            }, ge.prototype.remove = ge.prototype.remove, ge.prototype.set = ge.prototype.set, ge.prototype.set_once = ge.prototype.set_once, ge.prototype.union = ge.prototype.union, ge.prototype.unset = ge.prototype.unset, ge.prototype.toString = ge.prototype.toString;
            var me = function() {};
            x.extend(me.prototype, fe), me.prototype._init = function(e) {
                this._mixpanel = e
            }, me.prototype.set = ee((function(e, t, r) {
                var i = this.set_action(e, t);
                return x.isObject(e) && (r = t), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), i.$set = x.extend({}, x.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), i.$set), this._send_request(i, r)
            })), me.prototype.set_once = ee((function(e, t, r) {
                var i = this.set_once_action(e, t);
                return x.isObject(e) && (r = t), this._send_request(i, r)
            })), me.prototype.unset = ee((function(e, t) {
                var r = this.unset_action(e);
                return this._send_request(r, t)
            })), me.prototype.increment = ee((function(e, t, r) {
                var i = {},
                    o = {};
                return x.isObject(e) ? (x.each(e, (function(e, t) {
                    if (!this._is_reserved_property(t)) {
                        if (isNaN(parseFloat(e))) return void w.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                        o[t] = e
                    }
                }), this), r = t) : (x.isUndefined(t) && (t = 1), o[e] = t), i.$add = o, this._send_request(i, r)
            })), me.prototype.append = ee((function(e, t, r) {
                x.isObject(e) && (r = t);
                var i = this.append_action(e, t);
                return this._send_request(i, r)
            })), me.prototype.remove = ee((function(e, t, r) {
                x.isObject(e) && (r = t);
                var i = this.remove_action(e, t);
                return this._send_request(i, r)
            })), me.prototype.union = ee((function(e, t, r) {
                x.isObject(e) && (r = t);
                var i = this.union_action(e, t);
                return this._send_request(i, r)
            })), me.prototype.track_charge = ee((function(e, t, r) {
                if (x.isNumber(e) || (e = parseFloat(e), !isNaN(e))) return this.append("$transactions", x.extend({
                    $amount: e
                }, t), r);
                w.error("Invalid value passed to mixpanel.people.track_charge - must be a number")
            })), me.prototype.clear_charges = function(e) {
                return this.set("$transactions", [], e)
            }, me.prototype.delete_user = function() {
                if (this._identify_called()) {
                    var e = {
                        $delete: this._mixpanel.get_distinct_id()
                    };
                    return this._send_request(e)
                }
                w.error("mixpanel.people.delete_user() requires you to call identify() first")
            }, me.prototype.toString = function() {
                return this._mixpanel.toString() + ".people"
            }, me.prototype._send_request = function(e, t) {
                e.$token = this._get_config("token"), e.$distinct_id = this._mixpanel.get_distinct_id();
                var r = this._mixpanel.get_property("$device_id"),
                    i = this._mixpanel.get_property("$user_id"),
                    o = this._mixpanel.get_property("$had_persisted_distinct_id");
                r && (e.$device_id = r), i && (e.$user_id = i), o && (e.$had_persisted_distinct_id = o);
                var n = x.encodeDates(e);
                return this._identify_called() ? this._mixpanel._track_or_batch({
                    type: "people",
                    data: n,
                    endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").engage,
                    batcher: this._mixpanel.request_batchers.people
                }, t) : (this._enqueue(e), x.isUndefined(t) || (this._get_config("verbose") ? t({
                    status: -1,
                    error: null
                }) : t(-1)), x.truncate(n, 255))
            }, me.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, me.prototype._identify_called = function() {
                return !0 === this._mixpanel._flags.identify_called
            }, me.prototype._enqueue = function(e) {
                ce in e ? this._mixpanel.persistence._add_to_people_queue(ce, e) : pe in e ? this._mixpanel.persistence._add_to_people_queue(pe, e) : ue in e ? this._mixpanel.persistence._add_to_people_queue(ue, e) : _e in e ? this._mixpanel.persistence._add_to_people_queue(_e, e) : he in e ? this._mixpanel.persistence._add_to_people_queue(he, e) : de in e ? this._mixpanel.persistence._add_to_people_queue(de, e) : le in e ? this._mixpanel.persistence._add_to_people_queue(le, e) : w.error("Invalid call to _enqueue():", e)
            }, me.prototype._flush_one_queue = function(e, t, r, i) {
                var o = this,
                    n = x.extend({}, this._mixpanel.persistence.load_queue(e)),
                    s = n;
                x.isUndefined(n) || !x.isObject(n) || x.isEmptyObject(n) || (o._mixpanel.persistence._pop_from_people_queue(e, n), o._mixpanel.persistence.save(), i && (s = i(n)), t.call(o, s, (function(t, i) {
                    0 === t && o._mixpanel.persistence._add_to_people_queue(e, n), x.isUndefined(r) || r(t, i)
                })))
            }, me.prototype._flush = function(e, t, r, i, o, n, s) {
                var a = this;
                this._flush_one_queue(ce, this.set, e), this._flush_one_queue(pe, this.set_once, i), this._flush_one_queue(ue, this.unset, n, (function(e) {
                    return x.keys(e)
                })), this._flush_one_queue(_e, this.increment, t), this._flush_one_queue(le, this.union, o);
                var c = this._mixpanel.persistence.load_queue(he);
                if (!x.isUndefined(c) && x.isArray(c) && c.length)
                    for (var p, u = function(e, t) {
                            0 === e && a._mixpanel.persistence._add_to_people_queue(he, p), x.isUndefined(r) || r(e, t)
                        }, _ = c.length - 1; _ >= 0; _--) c = this._mixpanel.persistence.load_queue(he), p = c.pop(), a._mixpanel.persistence.save(), x.isEmptyObject(p) || a.append(p, u);
                var h = this._mixpanel.persistence.load_queue(de);
                if (!x.isUndefined(h) && x.isArray(h) && h.length)
                    for (var l, d = function(e, t) {
                            0 === e && a._mixpanel.persistence._add_to_people_queue(de, l), x.isUndefined(s) || s(e, t)
                        }, f = h.length - 1; f >= 0; f--) h = this._mixpanel.persistence.load_queue(de), l = h.pop(), a._mixpanel.persistence.save(), x.isEmptyObject(l) || a.remove(l, d)
            }, me.prototype._is_reserved_property = function(e) {
                return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
            }, me.prototype.set = me.prototype.set, me.prototype.set_once = me.prototype.set_once, me.prototype.unset = me.prototype.unset, me.prototype.increment = me.prototype.increment, me.prototype.append = me.prototype.append, me.prototype.remove = me.prototype.remove, me.prototype.union = me.prototype.union, me.prototype.track_charge = me.prototype.track_charge, me.prototype.clear_charges = me.prototype.clear_charges, me.prototype.delete_user = me.prototype.delete_user, me.prototype.toString = me.prototype.toString;
            var ye, ve, be = "__mps",
                ke = "__mpso",
                xe = "__mpus",
                we = "__mpa",
                Se = "__mpap",
                qe = "__mpr",
                Ee = "__mpu",
                Oe = "$people_distinct_id",
                Ie = "__alias",
                De = "__timers",
                Ae = [be, ke, xe, we, Se, qe, Ee, Oe, Ie, De],
                Te = function(e) {
                    this.props = {}, this.campaign_params_saved = !1, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
                    var t = e.persistence;
                    "cookie" !== t && "localStorage" !== t && (w.critical("Unknown persistence type " + t + "; falling back to cookie"), t = e.persistence = "cookie"), "localStorage" === t && x.localStorage.is_supported() ? this.storage = x.localStorage : this.storage = x.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save()
                };
            Te.prototype.properties = function() {
                var e = {};
                return this.load(), x.each(this.props, (function(t, r) {
                    x.include(Ae, r) || (e[r] = t)
                })), e
            }, Te.prototype.load = function() {
                if (!this.disabled) {
                    var e = this.storage.parse(this.name);
                    e && (this.props = x.extend({}, e))
                }
            }, Te.prototype.upgrade = function(e) {
                var t, r, i = e.upgrade;
                i && (t = "mp_super_properties", "string" === typeof i && (t = i), r = this.storage.parse(t), this.storage.remove(t), this.storage.remove(t, !0), r && (this.props = x.extend(this.props, r.all, r.events))), e.cookie_name || "mixpanel" === e.name || (t = "mp_" + e.token + "_" + e.name, (r = this.storage.parse(t)) && (this.storage.remove(t), this.storage.remove(t, !0), this.register_once(r))), this.storage === x.localStorage && (r = x.cookie.parse(this.name), x.cookie.remove(this.name), x.cookie.remove(this.name, !0), r && this.register_once(r))
            }, Te.prototype.save = function() {
                this.disabled || this.storage.set(this.name, x.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
            }, Te.prototype.load_prop = function(e) {
                return this.load(), this.props[e]
            }, Te.prototype.remove = function() {
                this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
            }, Te.prototype.clear = function() {
                this.remove(), this.props = {}
            }, Te.prototype.register_once = function(e, t, r) {
                return !!x.isObject(e) && ("undefined" === typeof t && (t = "None"), this.expire_days = "undefined" === typeof r ? this.default_expiry : r, this.load(), x.each(e, (function(e, r) {
                    this.props.hasOwnProperty(r) && this.props[r] !== t || (this.props[r] = e)
                }), this), this.save(), !0)
            }, Te.prototype.register = function(e, t) {
                return !!x.isObject(e) && (this.expire_days = "undefined" === typeof t ? this.default_expiry : t, this.load(), x.extend(this.props, e), this.save(), !0)
            }, Te.prototype.unregister = function(e) {
                this.load(), e in this.props && (delete this.props[e], this.save())
            }, Te.prototype.update_search_keyword = function(e) {
                this.register(x.info.searchInfo(e))
            }, Te.prototype.update_referrer_info = function(e) {
                this.register_once({
                    $initial_referrer: e || "$direct",
                    $initial_referring_domain: x.info.referringDomain(e) || "$direct"
                }, "")
            }, Te.prototype.get_referrer_info = function() {
                return x.strip_empty_properties({
                    $initial_referrer: this.props.$initial_referrer,
                    $initial_referring_domain: this.props.$initial_referring_domain
                })
            }, Te.prototype.update_config = function(e) {
                this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie)
            }, Te.prototype.set_disabled = function(e) {
                this.disabled = e, this.disabled ? this.remove() : this.save()
            }, Te.prototype.set_cookie_domain = function(e) {
                e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save())
            }, Te.prototype.set_cross_site = function(e) {
                e !== this.cross_site && (this.cross_site = e, this.remove(), this.save())
            }, Te.prototype.set_cross_subdomain = function(e) {
                e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
            }, Te.prototype.get_cross_subdomain = function() {
                return this.cross_subdomain
            }, Te.prototype.set_secure = function(e) {
                e !== this.secure && (this.secure = !!e, this.remove(), this.save())
            }, Te.prototype._add_to_people_queue = function(e, t) {
                var r = this._get_queue_key(e),
                    i = t[e],
                    o = this._get_or_create_queue(ce),
                    n = this._get_or_create_queue(pe),
                    s = this._get_or_create_queue(ue),
                    a = this._get_or_create_queue(_e),
                    c = this._get_or_create_queue(le),
                    p = this._get_or_create_queue(de, []),
                    u = this._get_or_create_queue(he, []);
                r === be ? (x.extend(o, i), this._pop_from_people_queue(_e, i), this._pop_from_people_queue(le, i), this._pop_from_people_queue(ue, i)) : r === ke ? (x.each(i, (function(e, t) {
                    t in n || (n[t] = e)
                })), this._pop_from_people_queue(ue, i)) : r === xe ? x.each(i, (function(e) {
                    x.each([o, n, a, c], (function(t) {
                        e in t && delete t[e]
                    })), x.each(u, (function(t) {
                        e in t && delete t[e]
                    })), s[e] = !0
                })) : r === we ? (x.each(i, (function(e, t) {
                    t in o ? o[t] += e : (t in a || (a[t] = 0), a[t] += e)
                }), this), this._pop_from_people_queue(ue, i)) : r === Ee ? (x.each(i, (function(e, t) {
                    x.isArray(e) && (t in c || (c[t] = []), c[t] = c[t].concat(e))
                })), this._pop_from_people_queue(ue, i)) : r === qe ? (p.push(i), this._pop_from_people_queue(he, i)) : r === Se && (u.push(i), this._pop_from_people_queue(ue, i)), w.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), w.log(t), this.save()
            }, Te.prototype._pop_from_people_queue = function(e, t) {
                var r = this.props[this._get_queue_key(e)];
                x.isUndefined(r) || x.each(t, (function(t, i) {
                    e === he || e === de ? x.each(r, (function(e) {
                        e[i] === t && delete e[i]
                    })) : delete r[i]
                }), this)
            }, Te.prototype.load_queue = function(e) {
                return this.load_prop(this._get_queue_key(e))
            }, Te.prototype._get_queue_key = function(e) {
                return e === ce ? be : e === pe ? ke : e === ue ? xe : e === _e ? we : e === he ? Se : e === de ? qe : e === le ? Ee : void w.error("Invalid queue:", e)
            }, Te.prototype._get_or_create_queue = function(e, t) {
                var r = this._get_queue_key(e);
                return t = x.isUndefined(t) ? {} : t, this.props[r] || (this.props[r] = t)
            }, Te.prototype.set_event_timer = function(e, t) {
                var r = this.load_prop(De) || {};
                r[e] = t, this.props.__timers = r, this.save()
            }, Te.prototype.remove_event_timer = function(e) {
                var t = (this.load_prop(De) || {})[e];
                return x.isUndefined(t) || (delete this.props.__timers[e], this.save()), t
            };
            var $e = function(e) {
                    return e
                },
                Be = function() {},
                Ue = "mixpanel",
                Pe = "base64",
                Ce = "$device:",
                Ne = t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                je = !Ne && -1 === f.indexOf("MSIE") && -1 === f.indexOf("Mozilla"),
                Me = null;
            _.sendBeacon && (Me = function() {
                return _.sendBeacon.apply(_, arguments)
            });
            var Fe = {
                    track: "track/",
                    engage: "engage/",
                    groups: "groups/"
                },
                Re = {
                    api_host: "https://api-js.mixpanel.com",
                    api_routes: Fe,
                    api_method: "POST",
                    api_transport: "XHR",
                    api_payload_format: Pe,
                    app_host: "https://mixpanel.com",
                    cdn: "https://cdn.mxpnl.com",
                    cross_site_cookie: !1,
                    cross_subdomain_cookie: !0,
                    error_reporter: Be,
                    persistence: "cookie",
                    persistence_name: "",
                    cookie_domain: "",
                    cookie_name: "",
                    loaded: Be,
                    track_marketing: !0,
                    track_pageview: !1,
                    skip_first_touch_marketing: !1,
                    store_google: !0,
                    save_referrer: !0,
                    test: !1,
                    verbose: !1,
                    img: !1,
                    debug: !1,
                    track_links_timeout: 300,
                    cookie_expiration: 365,
                    upgrade: !1,
                    disable_persistence: !1,
                    disable_cookie: !1,
                    secure_cookie: !1,
                    ip: !0,
                    opt_out_tracking_by_default: !1,
                    opt_out_persistence_by_default: !1,
                    opt_out_tracking_persistence_type: "localStorage",
                    opt_out_tracking_cookie_prefix: null,
                    property_blacklist: [],
                    xhr_headers: {},
                    ignore_dnt: !1,
                    batch_requests: !0,
                    batch_size: 50,
                    batch_flush_interval_ms: 5e3,
                    batch_request_timeout_ms: 9e4,
                    batch_autostart: !0,
                    hooks: {}
                },
                ze = !1,
                Le = function() {},
                Je = function(e, t, i) {
                    var o, n = i === Ue ? ve : ve[i];
                    if (n && 0 === ye) o = n;
                    else {
                        if (n && !x.isArray(n)) return void w.error("You have already initialized " + i);
                        o = new Le
                    }
                    if (o._cached_groups = {}, o._init(e, t, i), o.people = new me, o.people._init(o), !o.get_config("skip_first_touch_marketing")) {
                        var s = x.info.campaignParams(null),
                            a = {},
                            c = !1;
                        x.each(s, (function(e, t) {
                            a["initial_" + t] = e, e && (c = !0)
                        })), c && o.people.set_once(a)
                    }
                    return r.DEBUG = r.DEBUG || o.get_config("debug"), !x.isUndefined(n) && x.isArray(n) && (o._execute_array.call(o.people, n.people), o._execute_array(n)), o
                };
            Le.prototype.init = function(e, t, r) {
                if (x.isUndefined(r)) this.report_error("You must name your new library: init(token, config, name)");
                else {
                    if (r !== Ue) {
                        var i = Je(e, t, r);
                        return ve[r] = i, i._loaded(), i
                    }
                    this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet")
                }
            }, Le.prototype._init = function(e, r, i) {
                r = r || {}, this.__loaded = !0, this.config = {};
                var o = {};
                "api_payload_format" in r || (r.api_host || Re.api_host).match(/\.mixpanel\.com/) && (o.api_payload_format = "json");
                if (this.set_config(x.extend({}, Re, o, r, {
                        name: i,
                        token: e,
                        callback_fn: (i === Ue ? i : "mixpanel." + i) + "._jsc"
                    })), this._jsc = Be, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                        disable_all_events: !1,
                        identify_called: !1
                    }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests)
                    if (x.localStorage.is_supported(!0) && Ne) {
                        if (this.init_batchers(), Me && t.addEventListener) {
                            var n = x.bind((function() {
                                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                                    unloading: !0
                                })
                            }), this);
                            t.addEventListener("pagehide", (function(e) {
                                e.persisted && n()
                            })), t.addEventListener("visibilitychange", (function() {
                                "hidden" === h.visibilityState && n()
                            }))
                        }
                    } else this._batch_requests = !1, w.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"), x.each(this.get_batcher_configs(), (function(e) {
                        w.log("Clearing batch queue " + e.queue_key), x.localStorage.remove(e.queue_key)
                    }));
                this.persistence = this.cookie = new Te(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
                var s = x.UUID();
                this.get_distinct_id() || this.register_once({
                    distinct_id: Ce + s,
                    $device_id: s
                }, ""), this.get_config("track_pageview") && this.track_pageview()
            }, Le.prototype._loaded = function() {
                this.get_config("loaded")(this), this._set_default_superprops()
            }, Le.prototype._set_default_superprops = function() {
                this.persistence.update_search_keyword(h.referrer), this.get_config("store_google") && this.register(x.info.campaignParams()), this.get_config("save_referrer") && this.persistence.update_referrer_info(h.referrer)
            }, Le.prototype._dom_loaded = function() {
                x.each(this.__dom_loaded_queue, (function(e) {
                    this._track_dom.apply(this, e)
                }), this), this.has_opted_out_tracking() || x.each(this.__request_queue, (function(e) {
                    this._send_request.apply(this, e)
                }), this), delete this.__dom_loaded_queue, delete this.__request_queue
            }, Le.prototype._track_dom = function(e, t) {
                if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
                if (!ze) return this.__dom_loaded_queue.push([e, t]), !1;
                var r = (new e).init(this);
                return r.track.apply(r, t)
            }, Le.prototype._prepare_callback = function(e, t) {
                if (x.isUndefined(e)) return null;
                if (Ne) {
                    return function(r) {
                        e(r, t)
                    }
                }
                var r = this._jsc,
                    i = "" + Math.floor(1e8 * Math.random()),
                    o = this.get_config("callback_fn") + "[" + i + "]";
                return r[i] = function(o) {
                    delete r[i], e(o, t)
                }, o
            }, Le.prototype._send_request = function(e, t, r, i) {
                var o = !0;
                if (je) return this.__request_queue.push(arguments), o;
                var n = {
                        method: this.get_config("api_method"),
                        transport: this.get_config("api_transport"),
                        verbose: this.get_config("verbose")
                    },
                    s = null;
                i || !x.isFunction(r) && "string" !== typeof r || (i = r, r = null), r = x.extend(n, r || {}), Ne || (r.method = "GET");
                var a = "POST" === r.method,
                    c = Me && a && "sendbeacon" === r.transport.toLowerCase(),
                    p = r.verbose;
                t.verbose && (p = !0), this.get_config("test") && (t.test = 1), p && (t.verbose = 1), this.get_config("img") && (t.img = 1), Ne || (i ? t.callback = i : (p || this.get_config("test")) && (t.callback = "(function(){})")), t.ip = this.get_config("ip") ? 1 : 0, t._ = (new Date).getTime().toString(), a && (s = "data=" + encodeURIComponent(t.data), delete t.data), e += "?" + x.HTTPBuildQuery(t);
                var u = this;
                if ("img" in t) {
                    var _ = h.createElement("img");
                    _.src = e, h.body.appendChild(_)
                } else if (c) {
                    try {
                        o = Me(e, s)
                    } catch (y) {
                        u.report_error(y), o = !1
                    }
                    try {
                        i && i(o ? 1 : 0)
                    } catch (y) {
                        u.report_error(y)
                    }
                } else if (Ne) try {
                    var l = new XMLHttpRequest;
                    l.open(r.method, e, !0);
                    var d = this.get_config("xhr_headers");
                    if (a && (d["Content-Type"] = "application/x-www-form-urlencoded"), x.each(d, (function(e, t) {
                            l.setRequestHeader(t, e)
                        })), r.timeout_ms && "undefined" !== typeof l.timeout) {
                        l.timeout = r.timeout_ms;
                        var f = (new Date).getTime()
                    }
                    l.withCredentials = !0, l.onreadystatechange = function() {
                        var e;
                        if (4 === l.readyState)
                            if (200 === l.status) {
                                if (i)
                                    if (p) {
                                        var t;
                                        try {
                                            t = x.JSONDecode(l.responseText)
                                        } catch (y) {
                                            if (u.report_error(y), !r.ignore_json_errors) return;
                                            t = l.responseText
                                        }
                                        i(t)
                                    } else i(Number(l.responseText))
                            } else e = l.timeout && !l.status && (new Date).getTime() - f >= l.timeout ? "timeout" : "Bad HTTP status: " + l.status + " " + l.statusText, u.report_error(e), i && i(p ? {
                                status: 0,
                                error: e,
                                xhr_req: l
                            } : 0)
                    }, l.send(s)
                } catch (y) {
                    u.report_error(y), o = !1
                } else {
                    var g = h.createElement("script");
                    g.type = "text/javascript", g.async = !0, g.defer = !0, g.src = e;
                    var m = h.getElementsByTagName("script")[0];
                    m.parentNode.insertBefore(g, m)
                }
                return o
            }, Le.prototype._execute_array = function(e) {
                var t, r = [],
                    i = [],
                    o = [];
                x.each(e, (function(e) {
                    e && (t = e[0], x.isArray(t) ? o.push(e) : "function" === typeof e ? e.call(this) : x.isArray(e) && "alias" === t ? r.push(e) : x.isArray(e) && -1 !== t.indexOf("track") && "function" === typeof this[t] ? o.push(e) : i.push(e))
                }), this);
                var n = function(e, t) {
                    x.each(e, (function(e) {
                        if (x.isArray(e[0])) {
                            var r = t;
                            x.each(e, (function(e) {
                                r = r[e[0]].apply(r, e.slice(1))
                            }))
                        } else this[e[0]].apply(this, e.slice(1))
                    }), t)
                };
                n(r, this), n(i, this), n(o, this)
            }, Le.prototype.are_batchers_initialized = function() {
                return !!this.request_batchers.events
            }, Le.prototype.get_batcher_configs = function() {
                var e = "__mpq_" + this.get_config("token"),
                    t = this.get_config("api_routes");
                return this._batcher_configs = this._batcher_configs || {
                    events: {
                        type: "events",
                        endpoint: "/" + t.track,
                        queue_key: e + "_ev"
                    },
                    people: {
                        type: "people",
                        endpoint: "/" + t.engage,
                        queue_key: e + "_pp"
                    },
                    groups: {
                        type: "groups",
                        endpoint: "/" + t.groups,
                        queue_key: e + "_gr"
                    }
                }, this._batcher_configs
            }, Le.prototype.init_batchers = function() {
                if (!this.are_batchers_initialized()) {
                    var e = x.bind((function(e) {
                            return new G(e.queue_key, {
                                libConfig: this.config,
                                sendRequestFunc: x.bind((function(t, r, i) {
                                    this._send_request(this.get_config("api_host") + e.endpoint, this._encode_data_for_request(t), r, this._prepare_callback(i, t))
                                }), this),
                                beforeSendHook: x.bind((function(t) {
                                    return this._run_hook("before_send_" + e.type, t)
                                }), this),
                                errorReporter: this.get_config("error_reporter"),
                                stopAllBatchingFunc: x.bind(this.stop_batch_senders, this)
                            })
                        }), this),
                        t = this.get_batcher_configs();
                    this.request_batchers = {
                        events: e(t.events),
                        people: e(t.people),
                        groups: e(t.groups)
                    }
                }
                this.get_config("batch_autostart") && this.start_batch_senders()
            }, Le.prototype.start_batch_senders = function() {
                this._batchers_were_started = !0, this.are_batchers_initialized() && (this._batch_requests = !0, x.each(this.request_batchers, (function(e) {
                    e.start()
                })))
            }, Le.prototype.stop_batch_senders = function() {
                this._batch_requests = !1, x.each(this.request_batchers, (function(e) {
                    e.stop(), e.clear()
                }))
            }, Le.prototype.push = function(e) {
                this._execute_array([e])
            }, Le.prototype.disable = function(e) {
                "undefined" === typeof e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
            }, Le.prototype._encode_data_for_request = function(e) {
                var t = x.JSONEncode(e);
                return this.get_config("api_payload_format") === Pe && (t = x.base64Encode(t)), {
                    data: t
                }
            }, Le.prototype._track_or_batch = function(e, t) {
                var r = x.truncate(e.data, 255),
                    i = e.endpoint,
                    o = e.batcher,
                    n = e.should_send_immediately,
                    s = e.send_request_options || {};
                t = t || Be;
                var a = !0,
                    c = x.bind((function() {
                        return s.skip_hooks || (r = this._run_hook("before_send_" + e.type, r)), r ? (w.log("MIXPANEL REQUEST:"), w.log(r), this._send_request(i, this._encode_data_for_request(r), s, this._prepare_callback(t, r))) : null
                    }), this);
                return this._batch_requests && !n ? o.enqueue(r, (function(e) {
                    e ? t(1, r) : c()
                })) : a = c(), a && r
            }, Le.prototype.track = Z((function(e, t, r, i) {
                i || "function" !== typeof r || (i = r, r = null);
                var o = (r = r || {}).transport;
                o && (r.transport = o);
                var n = r.send_immediately;
                if ("function" !== typeof i && (i = Be), x.isUndefined(e)) this.report_error("No event name provided to mixpanel.track");
                else {
                    if (!this._event_is_disabled(e)) {
                        (t = x.extend({}, t)).token = this.get_config("token");
                        var s = this.persistence.remove_event_timer(e);
                        if (!x.isUndefined(s)) {
                            var a = (new Date).getTime() - s;
                            t.$duration = parseFloat((a / 1e3).toFixed(3))
                        }
                        this._set_default_superprops();
                        var c = this.get_config("track_marketing") ? x.info.marketingParams() : {};
                        t = x.extend({}, x.info.properties(), c, this.persistence.properties(), this.unpersisted_superprops, t);
                        var p = this.get_config("property_blacklist");
                        x.isArray(p) ? x.each(p, (function(e) {
                            delete t[e]
                        })) : this.report_error("Invalid value for property_blacklist config: " + p);
                        var u = {
                            event: e,
                            properties: t
                        };
                        return this._track_or_batch({
                            type: "events",
                            data: u,
                            endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes").track,
                            batcher: this.request_batchers.events,
                            should_send_immediately: n,
                            send_request_options: r
                        }, i)
                    }
                    i(0)
                }
            })), Le.prototype.set_group = Z((function(e, t, r) {
                x.isArray(t) || (t = [t]);
                var i = {};
                return i[e] = t, this.register(i), this.people.set(e, t, r)
            })), Le.prototype.add_group = Z((function(e, t, r) {
                var i = this.get_property(e),
                    o = {};
                return void 0 === i ? (o[e] = [t], this.register(o)) : -1 === i.indexOf(t) && (i.push(t), o[e] = i, this.register(o)), this.people.union(e, t, r)
            })), Le.prototype.remove_group = Z((function(e, t, r) {
                var i = this.get_property(e);
                if (void 0 !== i) {
                    var o = i.indexOf(t);
                    o > -1 && (i.splice(o, 1), this.register({
                        group_key: i
                    })), 0 === i.length && this.unregister(e)
                }
                return this.people.remove(e, t, r)
            })), Le.prototype.track_with_groups = Z((function(e, t, r, i) {
                var o = x.extend({}, t || {});
                return x.each(r, (function(e, t) {
                    null !== e && void 0 !== e && (o[t] = e)
                })), this.track(e, o, i)
            })), Le.prototype._create_map_key = function(e, t) {
                return e + "_" + JSON.stringify(t)
            }, Le.prototype._remove_group_from_cache = function(e, t) {
                delete this._cached_groups[this._create_map_key(e, t)]
            }, Le.prototype.get_group = function(e, t) {
                var r = this._create_map_key(e, t),
                    i = this._cached_groups[r];
                return void 0 !== i && i._group_key === e && i._group_id === t || ((i = new ge)._init(this, e, t), this._cached_groups[r] = i), i
            }, Le.prototype.track_pageview = Z((function(e, t) {
                "object" !== typeof e && (e = {});
                var r = (t = t || {}).event_name || "$mp_web_page_view",
                    i = x.extend(x.info.mpPageViewProperties(), x.info.campaignParams(), x.info.clickParams()),
                    o = x.extend({}, i, e);
                return this.track(r, o)
            })), Le.prototype.track_links = function() {
                return this._track_dom.call(this, M, arguments)
            }, Le.prototype.track_forms = function() {
                return this._track_dom.call(this, F, arguments)
            }, Le.prototype.time_event = function(e) {
                x.isUndefined(e) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e) || this.persistence.set_event_timer(e, (new Date).getTime())
            };
            var Qe = {
                    persistent: !0
                },
                He = function(e) {
                    var t;
                    return t = x.isObject(e) ? e : x.isUndefined(e) ? {} : {
                        days: e
                    }, x.extend({}, Qe, t)
                };
            Le.prototype.register = function(e, t) {
                var r = He(t);
                r.persistent ? this.persistence.register(e, r.days) : x.extend(this.unpersisted_superprops, e)
            }, Le.prototype.register_once = function(e, t, r) {
                var i = He(r);
                i.persistent ? this.persistence.register_once(e, t, i.days) : ("undefined" === typeof t && (t = "None"), x.each(e, (function(e, r) {
                    this.unpersisted_superprops.hasOwnProperty(r) && this.unpersisted_superprops[r] !== t || (this.unpersisted_superprops[r] = e)
                }), this))
            }, Le.prototype.unregister = function(e, t) {
                (t = He(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
            }, Le.prototype._register_single = function(e, t) {
                var r = {};
                r[e] = t, this.register(r)
            }, Le.prototype.identify = function(e, t, r, i, o, n, s, a) {
                var c = this.get_distinct_id();
                if (e && c !== e) {
                    if ("string" === typeof e && 0 === e.indexOf(Ce)) return this.report_error("distinct_id cannot have $device: prefix"), -1;
                    this.register({
                        $user_id: e
                    })
                }
                if (!this.get_property("$device_id")) {
                    var p = c;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: p
                    }, "")
                }
                e !== c && e !== this.get_property(Ie) && (this.unregister(Ie), this.register({
                    distinct_id: e
                })), this._flags.identify_called = !0, this.people._flush(t, r, i, o, n, s, a), e !== c && this.track("$identify", {
                    distinct_id: e,
                    $anon_distinct_id: c
                }, {
                    skip_hooks: !0
                })
            }, Le.prototype.reset = function() {
                this.persistence.clear(), this._flags.identify_called = !1;
                var e = x.UUID();
                this.register_once({
                    distinct_id: Ce + e,
                    $device_id: e
                }, "")
            }, Le.prototype.get_distinct_id = function() {
                return this.get_property("distinct_id")
            }, Le.prototype.alias = function(e, t) {
                if (e === this.get_property(Oe)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
                var r = this;
                return x.isUndefined(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(Ie, e), this.track("$create_alias", {
                    alias: e,
                    distinct_id: t
                }, {
                    skip_hooks: !0
                }, (function() {
                    r.identify(e)
                }))) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e), -1)
            }, Le.prototype.name_tag = function(e) {
                this._register_single("mp_name_tag", e)
            }, Le.prototype.set_config = function(e) {
                x.isObject(e) && (x.extend(this.config, e), e.batch_size && x.each(this.request_batchers, (function(e) {
                    e.resetBatchSize()
                })), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), r.DEBUG = r.DEBUG || this.get_config("debug"))
            }, Le.prototype.get_config = function(e) {
                return this.config[e]
            }, Le.prototype._run_hook = function(e) {
                var t = (this.config.hooks[e] || $e).apply(this, a.call(arguments, 1));
                return "undefined" === typeof t && (this.report_error(e + " hook did not return a value"), t = null), t
            }, Le.prototype.get_property = function(e) {
                return this.persistence.load_prop([e])
            }, Le.prototype.toString = function() {
                var e = this.get_config("name");
                return e !== Ue && (e = "mixpanel." + e), e
            }, Le.prototype._event_is_disabled = function(e) {
                return x.isBlockedUA(f) || this._flags.disable_all_events || x.include(this.__disabled_events, e)
            }, Le.prototype._gdpr_init = function() {
                "localStorage" === this.get_config("opt_out_tracking_persistence_type") && x.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
                    persistence_type: "cookie"
                }) && this.opt_in_tracking({
                    enable_persistence: !1
                }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
                    persistence_type: "cookie"
                }) && this.opt_out_tracking({
                    clear_persistence: !1
                }), this.clear_opt_in_out_tracking({
                    persistence_type: "cookie",
                    enable_persistence: !1
                })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
                    clear_persistence: !0
                }) : this.has_opted_in_tracking() || !this.get_config("opt_out_tracking_by_default") && !x.cookie.get("mp_optout") || (x.cookie.remove("mp_optout"), this.opt_out_tracking({
                    clear_persistence: this.get_config("opt_out_persistence_by_default")
                }))
            }, Le.prototype._gdpr_update_persistence = function(e) {
                var t;
                if (e && e.clear_persistence) t = !0;
                else {
                    if (!e || !e.enable_persistence) return;
                    t = !1
                }
                this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t), t ? this.stop_batch_senders() : this._batchers_were_started && this.start_batch_senders()
            }, Le.prototype._gdpr_call_func = function(e, t) {
                return t = x.extend({
                    track: x.bind(this.track, this),
                    persistence_type: this.get_config("opt_out_tracking_persistence_type"),
                    cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
                    cookie_expiration: this.get_config("cookie_expiration"),
                    cross_site_cookie: this.get_config("cross_site_cookie"),
                    cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                    cookie_domain: this.get_config("cookie_domain"),
                    secure_cookie: this.get_config("secure_cookie"),
                    ignore_dnt: this.get_config("ignore_dnt")
                }, t), x.localStorage.is_supported() || (t.persistence_type = "cookie"), e(this.get_config("token"), {
                    track: t.track,
                    trackEventName: t.track_event_name,
                    trackProperties: t.track_properties,
                    persistenceType: t.persistence_type,
                    persistencePrefix: t.cookie_prefix,
                    cookieDomain: t.cookie_domain,
                    cookieExpiration: t.cookie_expiration,
                    crossSiteCookie: t.cross_site_cookie,
                    crossSubdomainCookie: t.cross_subdomain_cookie,
                    secureCookie: t.secure_cookie,
                    ignoreDnt: t.ignore_dnt
                })
            }, Le.prototype.opt_in_tracking = function(e) {
                e = x.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(V, e), this._gdpr_update_persistence(e)
            }, Le.prototype.opt_out_tracking = function(e) {
                (e = x.extend({
                    clear_persistence: !0,
                    delete_user: !0
                }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(W, e), this._gdpr_update_persistence(e)
            }, Le.prototype.has_opted_in_tracking = function(e) {
                return this._gdpr_call_func(X, e)
            }, Le.prototype.has_opted_out_tracking = function(e) {
                return this._gdpr_call_func(Y, e)
            }, Le.prototype.clear_opt_in_out_tracking = function(e) {
                e = x.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(re, e), this._gdpr_update_persistence(e)
            }, Le.prototype.report_error = function(e, t) {
                w.error.apply(w.error, arguments);
                try {
                    t || e instanceof Error || (e = new Error(e)), this.get_config("error_reporter")(e, t)
                } catch (t) {
                    w.error(t)
                }
            }, Le.prototype.init = Le.prototype.init, Le.prototype.reset = Le.prototype.reset, Le.prototype.disable = Le.prototype.disable, Le.prototype.time_event = Le.prototype.time_event, Le.prototype.track = Le.prototype.track, Le.prototype.track_links = Le.prototype.track_links, Le.prototype.track_forms = Le.prototype.track_forms, Le.prototype.track_pageview = Le.prototype.track_pageview, Le.prototype.register = Le.prototype.register, Le.prototype.register_once = Le.prototype.register_once, Le.prototype.unregister = Le.prototype.unregister, Le.prototype.identify = Le.prototype.identify, Le.prototype.alias = Le.prototype.alias, Le.prototype.name_tag = Le.prototype.name_tag, Le.prototype.set_config = Le.prototype.set_config, Le.prototype.get_config = Le.prototype.get_config, Le.prototype.get_property = Le.prototype.get_property, Le.prototype.get_distinct_id = Le.prototype.get_distinct_id, Le.prototype.toString = Le.prototype.toString, Le.prototype.opt_out_tracking = Le.prototype.opt_out_tracking, Le.prototype.opt_in_tracking = Le.prototype.opt_in_tracking, Le.prototype.has_opted_out_tracking = Le.prototype.has_opted_out_tracking, Le.prototype.has_opted_in_tracking = Le.prototype.has_opted_in_tracking, Le.prototype.clear_opt_in_out_tracking = Le.prototype.clear_opt_in_out_tracking, Le.prototype.get_group = Le.prototype.get_group, Le.prototype.set_group = Le.prototype.set_group, Le.prototype.add_group = Le.prototype.add_group, Le.prototype.remove_group = Le.prototype.remove_group, Le.prototype.track_with_groups = Le.prototype.track_with_groups, Le.prototype.start_batch_senders = Le.prototype.start_batch_senders, Le.prototype.stop_batch_senders = Le.prototype.stop_batch_senders, Le.prototype.DEFAULT_API_ROUTES = Fe, Te.prototype.properties = Te.prototype.properties, Te.prototype.update_search_keyword = Te.prototype.update_search_keyword, Te.prototype.update_referrer_info = Te.prototype.update_referrer_info, Te.prototype.get_cross_subdomain = Te.prototype.get_cross_subdomain, Te.prototype.clear = Te.prototype.clear;
            var Ke = {},
                Ge = function() {
                    ve.init = function(e, r, i) {
                        if (i) return ve[i] || (ve[i] = Ke[i] = Je(e, r, i), ve[i]._loaded()), ve[i];
                        var o = ve;
                        Ke.mixpanel ? o = Ke.mixpanel : e && ((o = Je(e, r, Ue))._loaded(), Ke.mixpanel = o), ve = o, 1 === ye && (t.mixpanel = ve), x.each(Ke, (function(e, t) {
                            t !== Ue && (ve[t] = e)
                        })), ve._ = x
                    }
                };
            var Ve = (ye = 0, ve = new Le, Ge(), ve.init(), function() {
                function e() {
                    e.done || (e.done = !0, ze = !0, je = !1, x.each(Ke, (function(e) {
                        e._dom_loaded()
                    })))
                }
                if (h.addEventListener) "complete" === h.readyState ? e() : h.addEventListener("DOMContentLoaded", e, !1);
                else if (h.attachEvent) {
                    h.attachEvent("onreadystatechange", e);
                    var r = !1;
                    try {
                        r = null === t.frameElement
                    } catch (i) {}
                    h.documentElement.doScroll && r && function t() {
                        try {
                            h.documentElement.doScroll("left")
                        } catch (i) {
                            return void setTimeout(t, 1)
                        }
                        e()
                    }()
                }
                x.register_event(t, "load", e, !0)
            }(), ve);
            e.exports = Ve
        }
    }
]);