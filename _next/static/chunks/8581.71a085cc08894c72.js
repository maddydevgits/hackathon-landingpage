(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8581], {
        40926: function(t, e, n) {
            "use strict";

            function r() {
                return (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) || (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) || {}
            }

            function o() {
                const t = r();
                return t.subtle || t.webkitSubtle
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = r, e.getSubtleCrypto = o, e.isBrowserCryptoAvailable = function() {
                return !!r() && !!o()
            }
        },
        88618: function(t, e, n) {
            "use strict";
            var r = n(34155);

            function o() {
                return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
            }

            function i() {
                return "undefined" !== typeof r && "undefined" !== typeof r.versions && "undefined" !== typeof r.versions.node
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = o, e.isNode = i, e.isBrowser = function() {
                return !o() && !i()
            }
        },
        1468: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const r = n(34308);
            r.__exportStar(n(40926), e), r.__exportStar(n(88618), e)
        },
        34308: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __assign: function() {
                    return i
                },
                __asyncDelegator: function() {
                    return g
                },
                __asyncGenerator: function() {
                    return R
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return f
                },
                __classPrivateFieldGet: function() {
                    return x
                },
                __classPrivateFieldSet: function() {
                    return P
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return c
                },
                __exportStar: function() {
                    return d
                },
                __extends: function() {
                    return o
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return O
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return _
                },
                __metadata: function() {
                    return a
                },
                __param: function() {
                    return u
                },
                __read: function() {
                    return y
                },
                __rest: function() {
                    return s
                },
                __spread: function() {
                    return v
                },
                __spreadArrays: function() {
                    return b
                },
                __values: function() {
                    return h
                }
            });
            var r = function(t, e) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                }, r(t, e)
            };

            function o(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, i.apply(this, arguments)
            };

            function s(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            }

            function c(t, e, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
                return i > 3 && s && Object.defineProperty(e, n, s), s
            }

            function u(t, e) {
                return function(n, r) {
                    e(n, r, t)
                }
            }

            function a(t, e) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function f(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(t) {
                        try {
                            u(r.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            u(r.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, c)
                    }
                    u((r = r.apply(t, e || [])).next())
                }))
            }

            function l(t, e) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = e.call(t, s)
                            } catch (c) {
                                i = [6, c], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            }

            function p(t, e, n, r) {
                void 0 === r && (r = n), t[r] = e[n]
            }

            function d(t, e) {
                for (var n in t) "default" === n || e.hasOwnProperty(n) || (e[n] = t[n])
            }

            function h(t) {
                var e = "function" === typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" === typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function y(t, e) {
                var n = "function" === typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function v() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(y(arguments[e]));
                return t
            }

            function b() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    o = 0;
                for (e = 0; e < n; e++)
                    for (var i = arguments[e], s = 0, c = i.length; s < c; s++, o++) r[o] = i[s];
                return r
            }

            function m(t) {
                return this instanceof m ? (this.v = t, this) : new m(t)
            }

            function R(t, e, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(t, e || []),
                    i = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(t) {
                    o[t] && (r[t] = function(e) {
                        return new Promise((function(n, r) {
                            i.push([t, e, n, r]) > 1 || c(t, e)
                        }))
                    })
                }

                function c(t, e) {
                    try {
                        (n = o[t](e)).value instanceof m ? Promise.resolve(n.value.v).then(u, a) : f(i[0][2], n)
                    } catch (r) {
                        f(i[0][3], r)
                    }
                    var n
                }

                function u(t) {
                    c("next", t)
                }

                function a(t) {
                    c("throw", t)
                }

                function f(t, e) {
                    t(e), i.shift(), i.length && c(i[0][0], i[0][1])
                }
            }

            function g(t) {
                var e, n;
                return e = {}, r("next"), r("throw", (function(t) {
                    throw t
                })), r("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function r(r, o) {
                    e[r] = t[r] ? function(e) {
                        return (n = !n) ? {
                            value: m(t[r](e)),
                            done: "return" === r
                        } : o ? o(e) : e
                    } : o
                }
            }

            function w(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, n = t[Symbol.asyncIterator];
                return n ? n.call(t) : (t = h(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function r(n) {
                    e[n] = t[n] && function(e) {
                        return new Promise((function(r, o) {
                            (function(t, e, n, r) {
                                Promise.resolve(r).then((function(e) {
                                    t({
                                        value: e,
                                        done: n
                                    })
                                }), e)
                            })(r, o, (e = t[n](e)).done, e.value)
                        }))
                    }
                }
            }

            function _(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }

            function E(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }

            function O(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function x(t, e) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }

            function P(t, e, n) {
                if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                return e.set(t, n), n
            }
        },
        96641: function(t, e, n) {
            "use strict";
            n.d(e, {
                k: function() {
                    return a
                },
                Z: function() {
                    return f
                }
            });
            var r = n(17187),
                o = n(54098),
                i = n.n(o),
                s = n(85094),
                c = n(56186);
            const u = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class a {
                constructor(t, e = !1) {
                    if (this.url = t, this.disableProviderPing = e, this.events = new r.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, c.isHttpUrl)(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    this.url = t, this.disableProviderPing = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t = this.url) {
                    await this.register(t)
                }
                async close() {
                    if (!this.isAvailable) throw new Error("Connection already closed");
                    this.onClose()
                }
                async send(t, e) {
                    this.isAvailable || await this.register();
                    try {
                        const e = (0, s.u)(t),
                            n = await i()(this.url, Object.assign(Object.assign({}, u), {
                                body: e
                            })),
                            r = await n.json();
                        this.onPayload({
                            data: r
                        })
                    } catch (n) {
                        this.onError(t.id, n)
                    }
                }
                async register(t = this.url) {
                    if (!(0, c.isHttpUrl)(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                            this.events.once("register_error", (t => {
                                this.resetMaxListeners(), e(t)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), "undefined" === typeof this.isAvailable) return e(new Error("HTTP connection is missing or invalid"));
                                t()
                            }))
                        }))
                    }
                    this.url = t, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            const e = (0, s.u)({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await i()(t, Object.assign(Object.assign({}, u), {
                                body: e
                            }))
                        }
                        this.onOpen()
                    } catch (e) {
                        const t = this.parseError(e);
                        throw this.events.emit("register_error", t), this.onClose(), t
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(t) {
                    if ("undefined" === typeof t.data) return;
                    const e = "string" === typeof t.data ? (0, s.D)(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    const n = this.parseError(e),
                        r = n.message || n.toString(),
                        o = (0, c.formatJsonRpcError)(t, r);
                    this.events.emit("payload", o)
                }
                parseError(t, e = this.url) {
                    return (0, c.parseConnectionError)(t, e, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            var f = a
        },
        46160: function(t, e, n) {
            "use strict";
            n.d(e, {
                r: function() {
                    return i
                }
            });
            var r = n(17187),
                o = n(56186);
            class i extends o.IJsonRpcProvider {
                constructor(t) {
                    super(t), this.events = new r.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                async connect(t = this.connection) {
                    await this.open(t)
                }
                async disconnect() {
                    await this.close()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async request(t, e) {
                    return this.requestStrict((0, o.formatJsonRpcRequest)(t.method, t.params || [], t.id || (0, o.getBigIntRpcId)().toString()), e)
                }
                async requestStrict(t, e) {
                    return new Promise((async (n, r) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (i) {
                            r(i)
                        }
                        this.events.on(`${t.id}`, (t => {
                            (0, o.isJsonRpcError)(t) ? r(t.error): n(t.result)
                        }));
                        try {
                            await this.connection.send(t, e)
                        } catch (i) {
                            r(i)
                        }
                    }))
                }
                setConnection(t = this.connection) {
                    return t
                }
                onPayload(t) {
                    this.events.emit("payload", t), (0, o.isJsonRpcResponse)(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(t = this.connection) {
                    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" === typeof t && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (t => this.onPayload(t))), this.connection.on("close", (t => this.onClose(t))), this.connection.on("error", (t => this.events.emit("error", t))), this.connection.on("register_error", (t => this.onClose())), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        73416: function(t, e, n) {
            "use strict";
            n.d(e, {
                XR: function() {
                    return o
                },
                x0: function() {
                    return s
                }
            });
            class r {}
            class o extends r {
                constructor(t) {
                    super()
                }
            }
            class i extends r {
                constructor() {
                    super()
                }
            }
            class s extends i {
                constructor(t) {
                    super()
                }
            }
        },
        79806: function(t, e, n) {
            "use strict";
            n.d(e, {
                CA: function() {
                    return o
                },
                JV: function() {
                    return c
                },
                O4: function() {
                    return r
                },
                dQ: function() {
                    return i
                },
                xK: function() {
                    return s
                }
            });
            const r = "INTERNAL_ERROR",
                o = "SERVER_ERROR",
                i = [-32700, -32600, -32601, -32602, -32603],
                s = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [r]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [o]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                c = o
        },
        9698: function(t, e, n) {
            "use strict";
            var r = n(1468);
            n.o(r, "IJsonRpcProvider") && n.d(e, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            }), n.o(r, "formatJsonRpcError") && n.d(e, {
                formatJsonRpcError: function() {
                    return r.formatJsonRpcError
                }
            }), n.o(r, "formatJsonRpcRequest") && n.d(e, {
                formatJsonRpcRequest: function() {
                    return r.formatJsonRpcRequest
                }
            }), n.o(r, "formatJsonRpcResult") && n.d(e, {
                formatJsonRpcResult: function() {
                    return r.formatJsonRpcResult
                }
            }), n.o(r, "getBigIntRpcId") && n.d(e, {
                getBigIntRpcId: function() {
                    return r.getBigIntRpcId
                }
            }), n.o(r, "isHttpUrl") && n.d(e, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(e, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcRequest") && n.d(e, {
                isJsonRpcRequest: function() {
                    return r.isJsonRpcRequest
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(e, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            }), n.o(r, "isJsonRpcResult") && n.d(e, {
                isJsonRpcResult: function() {
                    return r.isJsonRpcResult
                }
            }), n.o(r, "isLocalhostUrl") && n.d(e, {
                isLocalhostUrl: function() {
                    return r.isLocalhostUrl
                }
            }), n.o(r, "isReactNative") && n.d(e, {
                isReactNative: function() {
                    return r.isReactNative
                }
            }), n.o(r, "isWsUrl") && n.d(e, {
                isWsUrl: function() {
                    return r.isWsUrl
                }
            }), n.o(r, "payloadId") && n.d(e, {
                payloadId: function() {
                    return r.payloadId
                }
            })
        },
        90110: function(t, e, n) {
            "use strict";
            n.d(e, {
                CX: function() {
                    return c
                },
                L2: function() {
                    return s
                },
                by: function() {
                    return i
                },
                i5: function() {
                    return o
                }
            });
            var r = n(79806);

            function o(t) {
                return r.dQ.includes(t)
            }

            function i(t) {
                return Object.keys(r.xK).includes(t) ? r.xK[t] : r.xK[r.JV]
            }

            function s(t) {
                const e = Object.values(r.xK).find((e => e.code === t));
                return e || r.xK[r.JV]
            }

            function c(t, e, n) {
                return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${n} RPC url at ${e}`) : t
            }
        },
        71937: function(t, e, n) {
            "use strict";
            n.d(e, {
                CS: function() {
                    return s
                },
                RI: function() {
                    return a
                },
                o0: function() {
                    return i
                },
                sT: function() {
                    return c
                },
                tm: function() {
                    return u
                }
            });
            var r = n(90110),
                o = n(79806);

            function i(t = 3) {
                return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t))
            }

            function s(t = 6) {
                return BigInt(i(t))
            }

            function c(t, e, n) {
                return {
                    id: n || i(),
                    jsonrpc: "2.0",
                    method: t,
                    params: e
                }
            }

            function u(t, e) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    result: e
                }
            }

            function a(t, e, n) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    error: f(e, n)
                }
            }

            function f(t, e) {
                return "undefined" === typeof t ? (0, r.by)(o.O4) : ("string" === typeof t && (t = Object.assign(Object.assign({}, (0, r.by)(o.CA)), {
                    message: t
                })), "undefined" !== typeof e && (t.data = e), (0, r.i5)(t.code) && (t = (0, r.L2)(t.code)), t)
            }
        },
        56186: function(t, e, n) {
            "use strict";
            n.d(e, {
                IJsonRpcProvider: function() {
                    return s.x0
                },
                formatJsonRpcError: function() {
                    return i.RI
                },
                formatJsonRpcRequest: function() {
                    return i.sT
                },
                formatJsonRpcResult: function() {
                    return i.tm
                },
                getBigIntRpcId: function() {
                    return i.CS
                },
                isHttpUrl: function() {
                    return c.jK
                },
                isJsonRpcError: function() {
                    return u.jg
                },
                isJsonRpcRequest: function() {
                    return u.DW
                },
                isJsonRpcResponse: function() {
                    return u.u
                },
                isJsonRpcResult: function() {
                    return u.k4
                },
                isLocalhostUrl: function() {
                    return c.JF
                },
                isWsUrl: function() {
                    return c.UZ
                },
                parseConnectionError: function() {
                    return r.CX
                },
                payloadId: function() {
                    return i.o0
                }
            });
            n(79806);
            var r = n(90110),
                o = n(9698);
            n.o(o, "IJsonRpcProvider") && n.d(e, {
                IJsonRpcProvider: function() {
                    return o.IJsonRpcProvider
                }
            }), n.o(o, "formatJsonRpcError") && n.d(e, {
                formatJsonRpcError: function() {
                    return o.formatJsonRpcError
                }
            }), n.o(o, "formatJsonRpcRequest") && n.d(e, {
                formatJsonRpcRequest: function() {
                    return o.formatJsonRpcRequest
                }
            }), n.o(o, "formatJsonRpcResult") && n.d(e, {
                formatJsonRpcResult: function() {
                    return o.formatJsonRpcResult
                }
            }), n.o(o, "getBigIntRpcId") && n.d(e, {
                getBigIntRpcId: function() {
                    return o.getBigIntRpcId
                }
            }), n.o(o, "isHttpUrl") && n.d(e, {
                isHttpUrl: function() {
                    return o.isHttpUrl
                }
            }), n.o(o, "isJsonRpcError") && n.d(e, {
                isJsonRpcError: function() {
                    return o.isJsonRpcError
                }
            }), n.o(o, "isJsonRpcRequest") && n.d(e, {
                isJsonRpcRequest: function() {
                    return o.isJsonRpcRequest
                }
            }), n.o(o, "isJsonRpcResponse") && n.d(e, {
                isJsonRpcResponse: function() {
                    return o.isJsonRpcResponse
                }
            }), n.o(o, "isJsonRpcResult") && n.d(e, {
                isJsonRpcResult: function() {
                    return o.isJsonRpcResult
                }
            }), n.o(o, "isLocalhostUrl") && n.d(e, {
                isLocalhostUrl: function() {
                    return o.isLocalhostUrl
                }
            }), n.o(o, "isReactNative") && n.d(e, {
                isReactNative: function() {
                    return o.isReactNative
                }
            }), n.o(o, "isWsUrl") && n.d(e, {
                isWsUrl: function() {
                    return o.isWsUrl
                }
            }), n.o(o, "payloadId") && n.d(e, {
                payloadId: function() {
                    return o.payloadId
                }
            });
            var i = n(71937),
                s = n(43659),
                c = n(46119),
                u = n(84733)
        },
        43659: function(t, e, n) {
            "use strict";
            n.d(e, {
                x0: function() {
                    return r.x0
                }
            });
            var r = n(73416)
        },
        46119: function(t, e, n) {
            "use strict";
            n.d(e, {
                JF: function() {
                    return s
                },
                UZ: function() {
                    return i
                },
                jK: function() {
                    return o
                }
            });

            function r(t, e) {
                const n = function(t) {
                    const e = t.match(new RegExp(/^\w+:/, "gi"));
                    if (e && e.length) return e[0]
                }(t);
                return "undefined" !== typeof n && new RegExp(e).test(n)
            }

            function o(t) {
                return r(t, "^https?:")
            }

            function i(t) {
                return r(t, "^wss?:")
            }

            function s(t) {
                return new RegExp("wss?://localhost(:d{2,5})?").test(t)
            }
        },
        84733: function(t, e, n) {
            "use strict";

            function r(t) {
                return "object" === typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc
            }

            function o(t) {
                return r(t) && "method" in t
            }

            function i(t) {
                return r(t) && (s(t) || c(t))
            }

            function s(t) {
                return "result" in t
            }

            function c(t) {
                return "error" in t
            }
            n.d(e, {
                DW: function() {
                    return o
                },
                jg: function() {
                    return c
                },
                k4: function() {
                    return s
                },
                u: function() {
                    return i
                }
            })
        },
        85094: function(t, e, n) {
            "use strict";
            n.d(e, {
                D: function() {
                    return r
                },
                u: function() {
                    return o
                }
            });

            function r(t) {
                if ("string" !== typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
                try {
                    return (t => {
                        const e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                        return JSON.parse(e, ((t, e) => "string" === typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e))
                    })(t)
                } catch (e) {
                    return t
                }
            }

            function o(t) {
                return "string" === typeof t ? t : (e = t, JSON.stringify(e, ((t, e) => "bigint" === typeof e ? e.toString() + "n" : e)) || "");
                var e
            }
        },
        54098: function(t, e) {
            var n = "undefined" !== typeof self ? self : this,
                r = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = n.DOMException
                    }
                    return t.prototype = n, new t
                }();
            ! function(t) {
                ! function(e) {
                    var n = "URLSearchParams" in t,
                        r = "Symbol" in t && "iterator" in Symbol,
                        o = "FileReader" in t && "Blob" in t && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        i = "FormData" in t,
                        s = "ArrayBuffer" in t;
                    if (s) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        u = ArrayBuffer.isView || function(t) {
                            return t && c.indexOf(Object.prototype.toString.call(t)) > -1
                        };

                    function a(t) {
                        if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                        return t.toLowerCase()
                    }

                    function f(t) {
                        return "string" !== typeof t && (t = String(t)), t
                    }

                    function l(t) {
                        var e = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return r && (e[Symbol.iterator] = function() {
                            return e
                        }), e
                    }

                    function p(t) {
                        this.map = {}, t instanceof p ? t.forEach((function(t, e) {
                            this.append(e, t)
                        }), this) : Array.isArray(t) ? t.forEach((function(t) {
                            this.append(t[0], t[1])
                        }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                            this.append(e, t[e])
                        }), this)
                    }

                    function d(t) {
                        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        t.bodyUsed = !0
                    }

                    function h(t) {
                        return new Promise((function(e, n) {
                            t.onload = function() {
                                e(t.result)
                            }, t.onerror = function() {
                                n(t.error)
                            }
                        }))
                    }

                    function y(t) {
                        var e = new FileReader,
                            n = h(e);
                        return e.readAsArrayBuffer(t), n
                    }

                    function v(t) {
                        if (t.slice) return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)), e.buffer
                    }

                    function b() {
                        return this.bodyUsed = !1, this._initBody = function(t) {
                            var e;
                            this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : o && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && o && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = v(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t)) ? this._bodyArrayBuffer = v(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, o && (this.blob = function() {
                            var t = d(this);
                            if (t) return t;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y)
                        }), this.text = function() {
                            var t = d(this);
                            if (t) return t;
                            if (this._bodyBlob) return function(t) {
                                var e = new FileReader,
                                    n = h(e);
                                return e.readAsText(t), n
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, i && (this.formData = function() {
                            return this.text().then(g)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    p.prototype.append = function(t, e) {
                        t = a(t), e = f(e);
                        var n = this.map[t];
                        this.map[t] = n ? n + ", " + e : e
                    }, p.prototype.delete = function(t) {
                        delete this.map[a(t)]
                    }, p.prototype.get = function(t) {
                        return t = a(t), this.has(t) ? this.map[t] : null
                    }, p.prototype.has = function(t) {
                        return this.map.hasOwnProperty(a(t))
                    }, p.prototype.set = function(t, e) {
                        this.map[a(t)] = f(e)
                    }, p.prototype.forEach = function(t, e) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                    }, p.prototype.keys = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push(n)
                        })), l(t)
                    }, p.prototype.values = function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        })), l(t)
                    }, p.prototype.entries = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push([n, e])
                        })), l(t)
                    }, r && (p.prototype[Symbol.iterator] = p.prototype.entries);
                    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function R(t, e) {
                        var n = (e = e || {}).body;
                        if (t instanceof R) {
                            if (t.bodyUsed) throw new TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
                        } else this.url = String(t);
                        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = function(t) {
                                var e = t.toUpperCase();
                                return m.indexOf(e) > -1 ? e : t
                            }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(n)
                    }

                    function g(t) {
                        var e = new FormData;
                        return t.trim().split("&").forEach((function(t) {
                            if (t) {
                                var n = t.split("="),
                                    r = n.shift().replace(/\+/g, " "),
                                    o = n.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(r), decodeURIComponent(o))
                            }
                        })), e
                    }

                    function w(t) {
                        var e = new p;
                        return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                            var n = t.split(":"),
                                r = n.shift().trim();
                            if (r) {
                                var o = n.join(":").trim();
                                e.append(r, o)
                            }
                        })), e
                    }

                    function _(t, e) {
                        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t)
                    }
                    R.prototype.clone = function() {
                        return new R(this, {
                            body: this._bodyInit
                        })
                    }, b.call(R.prototype), b.call(_.prototype), _.prototype.clone = function() {
                        return new _(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new p(this.headers),
                            url: this.url
                        })
                    }, _.error = function() {
                        var t = new _(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var E = [301, 302, 303, 307, 308];
                    _.redirect = function(t, e) {
                        if (-1 === E.indexOf(e)) throw new RangeError("Invalid status code");
                        return new _(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }, e.DOMException = t.DOMException;
                    try {
                        new e.DOMException
                    } catch (x) {
                        e.DOMException = function(t, e) {
                            this.message = t, this.name = e;
                            var n = Error(t);
                            this.stack = n.stack
                        }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                    }

                    function O(t, n) {
                        return new Promise((function(r, i) {
                            var s = new R(t, n);
                            if (s.signal && s.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
                            var c = new XMLHttpRequest;

                            function u() {
                                c.abort()
                            }
                            c.onload = function() {
                                var t = {
                                    status: c.status,
                                    statusText: c.statusText,
                                    headers: w(c.getAllResponseHeaders() || "")
                                };
                                t.url = "responseURL" in c ? c.responseURL : t.headers.get("X-Request-URL");
                                var e = "response" in c ? c.response : c.responseText;
                                r(new _(e, t))
                            }, c.onerror = function() {
                                i(new TypeError("Network request failed"))
                            }, c.ontimeout = function() {
                                i(new TypeError("Network request failed"))
                            }, c.onabort = function() {
                                i(new e.DOMException("Aborted", "AbortError"))
                            }, c.open(s.method, s.url, !0), "include" === s.credentials ? c.withCredentials = !0 : "omit" === s.credentials && (c.withCredentials = !1), "responseType" in c && o && (c.responseType = "blob"), s.headers.forEach((function(t, e) {
                                c.setRequestHeader(e, t)
                            })), s.signal && (s.signal.addEventListener("abort", u), c.onreadystatechange = function() {
                                4 === c.readyState && s.signal.removeEventListener("abort", u)
                            }), c.send("undefined" === typeof s._bodyInit ? null : s._bodyInit)
                        }))
                    }
                    O.polyfill = !0, t.fetch || (t.fetch = O, t.Headers = p, t.Request = R, t.Response = _), e.Headers = p, e.Request = R, e.Response = _, e.fetch = O, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }({})
            }(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
            var o = r;
            (e = o.fetch).default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, t.exports = e
        },
        57026: function(t) {
            "use strict";
            t.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        }
    }
]);