"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1391], {
        41391: function(t, e, r) {
            r.r(e), r.d(e, {
                WcmModal: function() {
                    return Ro
                },
                WcmQrCode: function() {
                    return Or
                }
            });
            const o = window,
                i = o.ShadowRoot && (void 0 === o.ShadyCSS || o.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                a = Symbol(),
                n = new WeakMap;
            class l {
                constructor(t, e, r) {
                    if (this._$cssResult$ = !0, r !== a) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = t, this.t = e
                }
                get styleSheet() {
                    let t = this.o;
                    const e = this.t;
                    if (i && void 0 === t) {
                        const r = void 0 !== e && 1 === e.length;
                        r && (t = n.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), r && n.set(e, t))
                    }
                    return t
                }
                toString() {
                    return this.cssText
                }
            }
            const s = (t, ...e) => {
                    const r = 1 === t.length ? t[0] : e.reduce(((e, r, o) => e + (t => {
                        if (!0 === t._$cssResult$) return t.cssText;
                        if ("number" == typeof t) return t;
                        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                    })(r) + t[o + 1]), t[0]);
                    return new l(r, t, a)
                },
                c = i ? t => t : t => t instanceof CSSStyleSheet ? (t => {
                    let e = "";
                    for (const r of t.cssRules) e += r.cssText;
                    return (t => new l("string" == typeof t ? t : t + "", void 0, a))(e)
                })(t) : t;
            var d;
            const h = window,
                m = h.trustedTypes,
                p = m ? m.emptyScript : "",
                u = h.reactiveElementPolyfillSupport,
                w = {
                    toAttribute(t, e) {
                        switch (e) {
                            case Boolean:
                                t = t ? p : null;
                                break;
                            case Object:
                            case Array:
                                t = null == t ? t : JSON.stringify(t)
                        }
                        return t
                    },
                    fromAttribute(t, e) {
                        let r = t;
                        switch (e) {
                            case Boolean:
                                r = null !== t;
                                break;
                            case Number:
                                r = null === t ? null : Number(t);
                                break;
                            case Object:
                            case Array:
                                try {
                                    r = JSON.parse(t)
                                } catch (t) {
                                    r = null
                                }
                        }
                        return r
                    }
                },
                g = (t, e) => e !== t && (e == e || t == t),
                v = {
                    attribute: !0,
                    type: String,
                    converter: w,
                    reflect: !1,
                    hasChanged: g
                },
                f = "finalized";
            class b extends HTMLElement {
                constructor() {
                    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
                }
                static addInitializer(t) {
                    var e;
                    this.finalize(), (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
                }
                static get observedAttributes() {
                    this.finalize();
                    const t = [];
                    return this.elementProperties.forEach(((e, r) => {
                        const o = this._$Ep(r, e);
                        void 0 !== o && (this._$Ev.set(o, r), t.push(o))
                    })), t
                }
                static createProperty(t, e = v) {
                    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                        const r = "symbol" == typeof t ? Symbol() : "__" + t,
                            o = this.getPropertyDescriptor(t, r, e);
                        void 0 !== o && Object.defineProperty(this.prototype, t, o)
                    }
                }
                static getPropertyDescriptor(t, e, r) {
                    return {
                        get() {
                            return this[e]
                        },
                        set(o) {
                            const i = this[t];
                            this[e] = o, this.requestUpdate(t, i, r)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(t) {
                    return this.elementProperties.get(t) || v
                }
                static finalize() {
                    if (this.hasOwnProperty(f)) return !1;
                    this[f] = !0;
                    const t = Object.getPrototypeOf(this);
                    if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                        const t = this.properties,
                            e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
                        for (const r of e) this.createProperty(r, t[r])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }
                static finalizeStyles(t) {
                    const e = [];
                    if (Array.isArray(t)) {
                        const r = new Set(t.flat(1 / 0).reverse());
                        for (const t of r) e.unshift(c(t))
                    } else void 0 !== t && e.push(c(t));
                    return e
                }
                static _$Ep(t, e) {
                    const r = e.attribute;
                    return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof t ? t.toLowerCase() : void 0
                }
                _$Eu() {
                    var t;
                    this._$E_ = new Promise((t => this.enableUpdating = t)), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t => t(this)))
                }
                addController(t) {
                    var e, r;
                    (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (r = t.hostConnected) || void 0 === r || r.call(t))
                }
                removeController(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
                }
                _$Eg() {
                    this.constructor.elementProperties.forEach(((t, e) => {
                        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e])
                    }))
                }
                createRenderRoot() {
                    var t;
                    const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                    return ((t, e) => {
                        i ? t.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e => {
                            const r = document.createElement("style"),
                                i = o.litNonce;
                            void 0 !== i && r.setAttribute("nonce", i), r.textContent = e.cssText, t.appendChild(r)
                        }))
                    })(e, this.constructor.elementStyles), e
                }
                connectedCallback() {
                    var t;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                    }))
                }
                enableUpdating(t) {}
                disconnectedCallback() {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                    }))
                }
                attributeChangedCallback(t, e, r) {
                    this._$AK(t, r)
                }
                _$EO(t, e, r = v) {
                    var o;
                    const i = this.constructor._$Ep(t, r);
                    if (void 0 !== i && !0 === r.reflect) {
                        const a = (void 0 !== (null === (o = r.converter) || void 0 === o ? void 0 : o.toAttribute) ? r.converter : w).toAttribute(e, r.type);
                        this._$El = t, null == a ? this.removeAttribute(i) : this.setAttribute(i, a), this._$El = null
                    }
                }
                _$AK(t, e) {
                    var r;
                    const o = this.constructor,
                        i = o._$Ev.get(t);
                    if (void 0 !== i && this._$El !== i) {
                        const t = o.getPropertyOptions(i),
                            a = "function" == typeof t.converter ? {
                                fromAttribute: t.converter
                            } : void 0 !== (null === (r = t.converter) || void 0 === r ? void 0 : r.fromAttribute) ? t.converter : w;
                        this._$El = i, this[i] = a.fromAttribute(e, t.type), this._$El = null
                    }
                }
                requestUpdate(t, e, r) {
                    let o = !0;
                    void 0 !== t && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || g)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === r.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, r))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej())
                }
                async _$Ej() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$E_
                    } catch (t) {
                        Promise.reject(t)
                    }
                    const t = this.scheduleUpdate();
                    return null != t && await t, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    var t;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this._$Ei && (this._$Ei.forEach(((t, e) => this[e] = t)), this._$Ei = void 0);
                    let e = !1;
                    const r = this._$AL;
                    try {
                        e = this.shouldUpdate(r), e ? (this.willUpdate(r), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                            var e;
                            return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                        })), this.update(r)) : this._$Ek()
                    } catch (t) {
                        throw e = !1, this._$Ek(), t
                    }
                    e && this._$AE(r)
                }
                willUpdate(t) {}
                _$AE(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach((t => {
                        var e;
                        return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
                }
                _$Ek() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$E_
                }
                shouldUpdate(t) {
                    return !0
                }
                update(t) {
                    void 0 !== this._$EC && (this._$EC.forEach(((t, e) => this._$EO(e, this[e], t))), this._$EC = void 0), this._$Ek()
                }
                updated(t) {}
                firstUpdated(t) {}
            }
            var y;
            b[f] = !0, b.elementProperties = new Map, b.elementStyles = [], b.shadowRootOptions = {
                mode: "open"
            }, null == u || u({
                ReactiveElement: b
            }), (null !== (d = h.reactiveElementVersions) && void 0 !== d ? d : h.reactiveElementVersions = []).push("1.6.3");
            const x = window,
                $ = x.trustedTypes,
                C = $ ? $.createPolicy("lit-html", {
                    createHTML: t => t
                }) : void 0,
                A = "$lit$",
                _ = `lit$${(Math.random()+"").slice(9)}$`,
                k = "?" + _,
                O = `<${k}>`,
                E = document,
                I = () => E.createComment(""),
                P = t => null === t || "object" != typeof t && "function" != typeof t,
                M = Array.isArray,
                S = t => M(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator]),
                R = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                T = /-->/g,
                W = />/g,
                L = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
                j = /'/g,
                D = /"/g,
                z = /^(?:script|style|textarea|title)$/i,
                N = t => (e, ...r) => ({
                    _$litType$: t,
                    strings: e,
                    values: r
                }),
                U = N(1),
                H = N(2),
                B = Symbol.for("lit-noChange"),
                Z = Symbol.for("lit-nothing"),
                V = new WeakMap,
                F = E.createTreeWalker(E, 129, null, !1);

            function q(t, e) {
                if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== C ? C.createHTML(e) : e
            }
            const K = (t, e) => {
                const r = t.length - 1,
                    o = [];
                let i, a = 2 === e ? "<svg>" : "",
                    n = R;
                for (let l = 0; l < r; l++) {
                    const e = t[l];
                    let r, s, c = -1,
                        d = 0;
                    for (; d < e.length && (n.lastIndex = d, s = n.exec(e), null !== s);) d = n.lastIndex, n === R ? "!--" === s[1] ? n = T : void 0 !== s[1] ? n = W : void 0 !== s[2] ? (z.test(s[2]) && (i = RegExp("</" + s[2], "g")), n = L) : void 0 !== s[3] && (n = L) : n === L ? ">" === s[0] ? (n = null != i ? i : R, c = -1) : void 0 === s[1] ? c = -2 : (c = n.lastIndex - s[2].length, r = s[1], n = void 0 === s[3] ? L : '"' === s[3] ? D : j) : n === D || n === j ? n = L : n === T || n === W ? n = R : (n = L, i = void 0);
                    const h = n === L && t[l + 1].startsWith("/>") ? " " : "";
                    a += n === R ? e + O : c >= 0 ? (o.push(r), e.slice(0, c) + A + e.slice(c) + _ + h) : e + _ + (-2 === c ? (o.push(void 0), l) : h)
                }
                return [q(t, a + (t[r] || "<?>") + (2 === e ? "</svg>" : "")), o]
            };
            class Q {
                constructor({
                    strings: t,
                    _$litType$: e
                }, r) {
                    let o;
                    this.parts = [];
                    let i = 0,
                        a = 0;
                    const n = t.length - 1,
                        l = this.parts,
                        [s, c] = K(t, e);
                    if (this.el = Q.createElement(s, r), F.currentNode = this.el.content, 2 === e) {
                        const t = this.el.content,
                            e = t.firstChild;
                        e.remove(), t.append(...e.childNodes)
                    }
                    for (; null !== (o = F.nextNode()) && l.length < n;) {
                        if (1 === o.nodeType) {
                            if (o.hasAttributes()) {
                                const t = [];
                                for (const e of o.getAttributeNames())
                                    if (e.endsWith(A) || e.startsWith(_)) {
                                        const r = c[a++];
                                        if (t.push(e), void 0 !== r) {
                                            const t = o.getAttribute(r.toLowerCase() + A).split(_),
                                                e = /([.?@])?(.*)/.exec(r);
                                            l.push({
                                                type: 1,
                                                index: i,
                                                name: e[2],
                                                strings: t,
                                                ctor: "." === e[1] ? tt : "?" === e[1] ? rt : "@" === e[1] ? ot : J
                                            })
                                        } else l.push({
                                            type: 6,
                                            index: i
                                        })
                                    }
                                for (const e of t) o.removeAttribute(e)
                            }
                            if (z.test(o.tagName)) {
                                const t = o.textContent.split(_),
                                    e = t.length - 1;
                                if (e > 0) {
                                    o.textContent = $ ? $.emptyScript : "";
                                    for (let r = 0; r < e; r++) o.append(t[r], I()), F.nextNode(), l.push({
                                        type: 2,
                                        index: ++i
                                    });
                                    o.append(t[e], I())
                                }
                            }
                        } else if (8 === o.nodeType)
                            if (o.data === k) l.push({
                                type: 2,
                                index: i
                            });
                            else {
                                let t = -1;
                                for (; - 1 !== (t = o.data.indexOf(_, t + 1));) l.push({
                                    type: 7,
                                    index: i
                                }), t += _.length - 1
                            }
                        i++
                    }
                }
                static createElement(t, e) {
                    const r = E.createElement("template");
                    return r.innerHTML = t, r
                }
            }

            function Y(t, e, r = t, o) {
                var i, a, n, l;
                if (e === B) return e;
                let s = void 0 !== o ? null === (i = r._$Co) || void 0 === i ? void 0 : i[o] : r._$Cl;
                const c = P(e) ? void 0 : e._$litDirective$;
                return (null == s ? void 0 : s.constructor) !== c && (null === (a = null == s ? void 0 : s._$AO) || void 0 === a || a.call(s, !1), void 0 === c ? s = void 0 : (s = new c(t), s._$AT(t, r, o)), void 0 !== o ? (null !== (n = (l = r)._$Co) && void 0 !== n ? n : l._$Co = [])[o] = s : r._$Cl = s), void 0 !== s && (e = Y(t, s._$AS(t, e.values), s, o)), e
            }
            class G {
                constructor(t, e) {
                    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(t) {
                    var e;
                    const {
                        el: {
                            content: r
                        },
                        parts: o
                    } = this._$AD, i = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : E).importNode(r, !0);
                    F.currentNode = i;
                    let a = F.nextNode(),
                        n = 0,
                        l = 0,
                        s = o[0];
                    for (; void 0 !== s;) {
                        if (n === s.index) {
                            let e;
                            2 === s.type ? e = new X(a, a.nextSibling, this, t) : 1 === s.type ? e = new s.ctor(a, s.name, s.strings, this, t) : 6 === s.type && (e = new it(a, this, t)), this._$AV.push(e), s = o[++l]
                        }
                        n !== (null == s ? void 0 : s.index) && (a = F.nextNode(), n++)
                    }
                    return F.currentNode = E, i
                }
                v(t) {
                    let e = 0;
                    for (const r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++
                }
            }
            class X {
                constructor(t, e, r, o) {
                    var i;
                    this.type = 2, this._$AH = Z, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cp = null === (i = null == o ? void 0 : o.isConnected) || void 0 === i || i
                }
                get _$AU() {
                    var t, e;
                    return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
                }
                get parentNode() {
                    let t = this._$AA.parentNode;
                    const e = this._$AM;
                    return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(t, e = this) {
                    t = Y(this, t, e), P(t) ? t === Z || null == t || "" === t ? (this._$AH !== Z && this._$AR(), this._$AH = Z) : t !== this._$AH && t !== B && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : S(t) ? this.T(t) : this._(t)
                }
                k(t) {
                    return this._$AA.parentNode.insertBefore(t, this._$AB)
                }
                $(t) {
                    this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
                }
                _(t) {
                    this._$AH !== Z && P(this._$AH) ? this._$AA.nextSibling.data = t : this.$(E.createTextNode(t)), this._$AH = t
                }
                g(t) {
                    var e;
                    const {
                        values: r,
                        _$litType$: o
                    } = t, i = "number" == typeof o ? this._$AC(t) : (void 0 === o.el && (o.el = Q.createElement(q(o.h, o.h[0]), this.options)), o);
                    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i) this._$AH.v(r);
                    else {
                        const t = new G(i, this),
                            e = t.u(this.options);
                        t.v(r), this.$(e), this._$AH = t
                    }
                }
                _$AC(t) {
                    let e = V.get(t.strings);
                    return void 0 === e && V.set(t.strings, e = new Q(t)), e
                }
                T(t) {
                    M(this._$AH) || (this._$AH = [], this._$AR());
                    const e = this._$AH;
                    let r, o = 0;
                    for (const i of t) o === e.length ? e.push(r = new X(this.k(I()), this.k(I()), this, this.options)) : r = e[o], r._$AI(i), o++;
                    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o)
                }
                _$AR(t = this._$AA.nextSibling, e) {
                    var r;
                    for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, e); t && t !== this._$AB;) {
                        const e = t.nextSibling;
                        t.remove(), t = e
                    }
                }
                setConnected(t) {
                    var e;
                    void 0 === this._$AM && (this._$Cp = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
                }
            }
            class J {
                constructor(t, e, r, o, i) {
                    this.type = 1, this._$AH = Z, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = i, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = Z
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t, e = this, r, o) {
                    const i = this.strings;
                    let a = !1;
                    if (void 0 === i) t = Y(this, t, e, 0), a = !P(t) || t !== this._$AH && t !== B, a && (this._$AH = t);
                    else {
                        const o = t;
                        let n, l;
                        for (t = i[0], n = 0; n < i.length - 1; n++) l = Y(this, o[r + n], e, n), l === B && (l = this._$AH[n]), a || (a = !P(l) || l !== this._$AH[n]), l === Z ? t = Z : t !== Z && (t += (null != l ? l : "") + i[n + 1]), this._$AH[n] = l
                    }
                    a && !o && this.j(t)
                }
                j(t) {
                    t === Z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
                }
            }
            class tt extends J {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(t) {
                    this.element[this.name] = t === Z ? void 0 : t
                }
            }
            const et = $ ? $.emptyScript : "";
            class rt extends J {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(t) {
                    t && t !== Z ? this.element.setAttribute(this.name, et) : this.element.removeAttribute(this.name)
                }
            }
            class ot extends J {
                constructor(t, e, r, o, i) {
                    super(t, e, r, o, i), this.type = 5
                }
                _$AI(t, e = this) {
                    var r;
                    if ((t = null !== (r = Y(this, t, e, 0)) && void 0 !== r ? r : Z) === B) return;
                    const o = this._$AH,
                        i = t === Z && o !== Z || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive,
                        a = t !== Z && (o === Z || i);
                    i && this.element.removeEventListener(this.name, this, o), a && this.element.addEventListener(this.name, this, t), this._$AH = t
                }
                handleEvent(t) {
                    var e, r;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== r ? r : this.element, t) : this._$AH.handleEvent(t)
                }
            }
            class it {
                constructor(t, e, r) {
                    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t) {
                    Y(this, t)
                }
            }
            const at = x.litHtmlPolyfillSupport;
            null == at || at(Q, X), (null !== (y = x.litHtmlVersions) && void 0 !== y ? y : x.litHtmlVersions = []).push("2.8.0");
            var nt, lt;
            class st extends b {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    var t, e;
                    const r = super.createRenderRoot();
                    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild), r
                }
                update(t) {
                    const e = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ((t, e, r) => {
                        var o, i;
                        const a = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : e;
                        let n = a._$litPart$;
                        if (void 0 === n) {
                            const t = null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i ? i : null;
                            a._$litPart$ = n = new X(e.insertBefore(I(), t), t, void 0, null != r ? r : {})
                        }
                        return n._$AI(t), n
                    })(e, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    var t;
                    super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
                }
                disconnectedCallback() {
                    var t;
                    super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
                }
                render() {
                    return B
                }
            }
            st.finalized = !0, st._$litElement$ = !0, null === (nt = globalThis.litElementHydrateSupport) || void 0 === nt || nt.call(globalThis, {
                LitElement: st
            });
            const ct = globalThis.litElementPolyfillSupport;
            null == ct || ct({
                LitElement: st
            });
            (null !== (lt = globalThis.litElementVersions) && void 0 !== lt ? lt : globalThis.litElementVersions = []).push("3.3.3");
            const dt = t => e => "function" == typeof e ? ((t, e) => (customElements.define(t, e), e))(t, e) : ((t, e) => {
                    const {
                        kind: r,
                        elements: o
                    } = e;
                    return {
                        kind: r,
                        elements: o,
                        finisher(e) {
                            customElements.define(t, e)
                        }
                    }
                })(t, e),
                ht = (t, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? { ...e,
                    finisher(r) {
                        r.createProperty(e.key, t)
                    }
                } : {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: e.key,
                    initializer() {
                        "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
                    },
                    finisher(r) {
                        r.createProperty(e.key, t)
                    }
                };

            function mt(t) {
                return (e, r) => void 0 !== r ? ((t, e, r) => {
                    e.constructor.createProperty(r, t)
                })(t, e, r) : ht(t, e)
            }

            function pt(t) {
                return mt({ ...t,
                    state: !0
                })
            }
            var ut;
            null === (ut = window.HTMLSlotElement) || void 0 === ut || ut.prototype.assignedElements;
            const wt = 1;
            const gt = (t => (...e) => ({
                _$litDirective$: t,
                values: e
            }))(class extends class {
                constructor(t) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(t, e, r) {
                    this._$Ct = t, this._$AM = e, this._$Ci = r
                }
                _$AS(t, e) {
                    return this.update(t, e)
                }
                update(t, e) {
                    return this.render(...e)
                }
            } {
                constructor(t) {
                    var e;
                    if (super(t), t.type !== wt || "class" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(t) {
                    return " " + Object.keys(t).filter((e => t[e])).join(" ") + " "
                }
                update(t, [e]) {
                    var r, o;
                    if (void 0 === this.it) {
                        this.it = new Set, void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((t => "" !== t))));
                        for (const t in e) e[t] && !(null === (r = this.nt) || void 0 === r ? void 0 : r.has(t)) && this.it.add(t);
                        return this.render(e)
                    }
                    const i = t.element.classList;
                    this.it.forEach((t => {
                        t in e || (i.remove(t), this.it.delete(t))
                    }));
                    for (const a in e) {
                        const t = !!e[a];
                        t === this.it.has(a) || (null === (o = this.nt) || void 0 === o ? void 0 : o.has(a)) || (t ? (i.add(a), this.it.add(a)) : (i.remove(a), this.it.delete(a)))
                    }
                    return B
                }
            });
            var vt = r(75740);
            const ft = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                bt = t => 1e3 * t,
                yt = t => t / 1e3,
                xt = () => {},
                $t = t => t;

            function Ct(t, e = !0) {
                if (t && "finished" !== t.playState) try {
                    t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
                } catch (r) {}
            }
            const At = t => t(),
                _t = (t, e, r = ft.duration) => new Proxy({
                    animations: t.map(At).filter(Boolean),
                    duration: r,
                    options: e
                }, kt),
                kt = {
                    get: (t, e) => {
                        const r = t.animations[0];
                        switch (e) {
                            case "duration":
                                return t.duration;
                            case "currentTime":
                                return yt((null === r || void 0 === r ? void 0 : r[e]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null === r || void 0 === r ? void 0 : r[e];
                            case "finished":
                                return t.finished || (t.finished = Promise.all(t.animations.map(Ot)).catch(xt)), t.finished;
                            case "stop":
                                return () => {
                                    t.animations.forEach((t => Ct(t)))
                                };
                            case "forEachNative":
                                return e => {
                                    t.animations.forEach((r => e(r, t)))
                                };
                            default:
                                return "undefined" === typeof(null === r || void 0 === r ? void 0 : r[e]) ? void 0 : () => t.animations.forEach((t => t[e]()))
                        }
                    },
                    set: (t, e, r) => {
                        switch (e) {
                            case "currentTime":
                                r = bt(r);
                            case "playbackRate":
                                for (let o = 0; o < t.animations.length; o++) t.animations[o][e] = r;
                                return !0
                        }
                        return !1
                    }
                },
                Ot = t => t.finished,
                Et = t => "object" === typeof t && Boolean(t.createAnimation),
                It = t => "number" === typeof t,
                Pt = t => Array.isArray(t) && !It(t[0]),
                Mt = (t, e, r) => -r * t + r * e + t,
                St = (t, e, r) => e - t === 0 ? 1 : (r - t) / (e - t);

            function Rt(t, e) {
                const r = t[t.length - 1];
                for (let o = 1; o <= e; o++) {
                    const i = St(0, e, o);
                    t.push(Mt(r, 1, i))
                }
            }
            const Tt = (t, e, r) => Math.min(Math.max(r, t), e);

            function Wt(t, e = function(t) {
                const e = [0];
                return Rt(e, t - 1), e
            }(t.length), r = $t) {
                const o = t.length,
                    i = o - e.length;
                return i > 0 && Rt(e, i), i => {
                    let a = 0;
                    for (; a < o - 2 && !(i < e[a + 1]); a++);
                    let n = Tt(0, 1, St(e[a], e[a + 1], i));
                    const l = function(t, e) {
                        return Pt(t) ? t[((t, e, r) => {
                            const o = e - t;
                            return ((r - t) % o + o) % o + t
                        })(0, t.length, e)] : t
                    }(r, a);
                    return n = l(n), Mt(t[a], t[a + 1], n)
                }
            }
            const Lt = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function jt(t, e, r, o) {
                if (t === e && r === o) return $t;
                const i = e => function(t, e, r, o, i) {
                    let a, n, l = 0;
                    do {
                        n = e + (r - e) / 2, a = Lt(n, o, i) - t, a > 0 ? r = n : e = n
                    } while (Math.abs(a) > 1e-7 && ++l < 12);
                    return n
                }(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : Lt(i(t), e, o)
            }
            const Dt = t => "function" === typeof t,
                zt = t => Array.isArray(t) && It(t[0]),
                Nt = {
                    ease: jt(.25, .1, .25, 1),
                    "ease-in": jt(.42, 0, 1, 1),
                    "ease-in-out": jt(.42, 0, .58, 1),
                    "ease-out": jt(0, 0, .58, 1)
                },
                Ut = /\((.*?)\)/;

            function Ht(t) {
                if (Dt(t)) return t;
                if (zt(t)) return jt(...t);
                if (Nt[t]) return Nt[t];
                if (t.startsWith("steps")) {
                    const e = Ut.exec(t);
                    if (e) {
                        const t = e[1].split(",");
                        return ((t, e = "end") => r => {
                            const o = (r = "end" === e ? Math.min(r, .999) : Math.max(r, .001)) * t,
                                i = "end" === e ? Math.floor(o) : Math.ceil(o);
                            return Tt(0, 1, i / t)
                        })(parseFloat(t[0]), t[1].trim())
                    }
                }
                return $t
            }
            class Bt {
                constructor(t, e = [0, 1], {
                    easing: r,
                    duration: o = ft.duration,
                    delay: i = ft.delay,
                    endDelay: a = ft.endDelay,
                    repeat: n = ft.repeat,
                    offset: l,
                    direction: s = "normal",
                    autoplay: c = !0
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = $t, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise(((t, e) => {
                            this.resolve = t, this.reject = e
                        })), r = r || ft.easing, Et(r)) {
                        const t = r.createAnimation(e);
                        r = t.easing, e = t.keyframes || e, o = t.duration || o
                    }
                    this.repeat = n, this.easing = Pt(r) ? $t : Ht(r), this.updateDuration(o);
                    const d = Wt(e, l, Pt(r) ? r.map(Ht) : $t);
                    this.tick = e => {
                        var r;
                        let o = 0;
                        o = void 0 !== this.pauseTime ? this.pauseTime : (e - this.startTime) * this.rate, this.t = o, o /= 1e3, o = Math.max(o - i, 0), "finished" === this.playState && void 0 === this.pauseTime && (o = this.totalDuration);
                        const n = o / this.duration;
                        let l = Math.floor(n),
                            c = n % 1;
                        !c && n >= 1 && (c = 1), 1 === c && l--;
                        const h = l % 2;
                        ("reverse" === s || "alternate" === s && h || "alternate-reverse" === s && !h) && (c = 1 - c);
                        const m = o >= this.totalDuration ? 1 : Math.min(c, 1),
                            p = d(this.easing(m));
                        t(p);
                        void 0 === this.pauseTime && ("finished" === this.playState || o >= this.totalDuration + a) ? (this.playState = "finished", null === (r = this.resolve) || void 0 === r || r.call(this, p)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, c && this.play()
                }
                play() {
                    const t = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var t;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (t = this.reject) || void 0 === t || t.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(t) {
                    this.duration = t, this.totalDuration = t * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(t) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(t) {
                    this.rate = t
                }
            }
            class Zt {
                setAnimation(t) {
                    this.animation = t, null === t || void 0 === t || t.finished.then((() => this.clearAnimation())).catch((() => {}))
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            const Vt = new WeakMap;

            function Ft(t) {
                return Vt.has(t) || Vt.set(t, {
                    transforms: [],
                    values: new Map
                }), Vt.get(t)
            }
            const qt = ["", "X", "Y", "Z"],
                Kt = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                Qt = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: t => t + "deg"
                },
                Yt = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: t => t + "px"
                    },
                    rotate: Qt,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: $t
                    },
                    skew: Qt
                },
                Gt = new Map,
                Xt = t => `--motion-${t}`,
                Jt = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach((t => {
                qt.forEach((e => {
                    Jt.push(t + e), Gt.set(Xt(t + e), Yt[t])
                }))
            }));
            const te = (t, e) => Jt.indexOf(t) - Jt.indexOf(e),
                ee = new Set(Jt),
                re = t => ee.has(t),
                oe = t => t.sort(te).reduce(ie, "").trim(),
                ie = (t, e) => `${t} ${e}(var(${Xt(e)}))`,
                ae = t => t.startsWith("--"),
                ne = new Set;
            const le = (t, e) => document.createElement("div").animate(t, e),
                se = {
                    cssRegisterProperty: () => "undefined" !== typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            le({
                                opacity: [1]
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => Boolean(le({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished),
                    linearEasing: () => {
                        try {
                            le({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }
                },
                ce = {},
                de = {};
            for (const Ei in se) de[Ei] = () => (void 0 === ce[Ei] && (ce[Ei] = se[Ei]()), ce[Ei]);
            const he = (t, e) => Dt(t) ? de.linearEasing() ? `linear(${((t,e)=>{let r="";const o=Math.round(e/.015);for(let i=0;i<o;i++)r+=t(St(0,o-1,i))+", ";return r.substring(0,r.length-2)})(t,e)})` : ft.easing : zt(t) ? me(t) : t,
                me = ([t, e, r, o]) => `cubic-bezier(${t}, ${e}, ${r}, ${o})`;

            function pe(t) {
                return Kt[t] && (t = Kt[t]), re(t) ? Xt(t) : t
            }
            const ue = (t, e) => {
                    e = pe(e);
                    let r = ae(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
                    if (!r && 0 !== r) {
                        const t = Gt.get(e);
                        t && (r = t.initialValue)
                    }
                    return r
                },
                we = (t, e, r) => {
                    e = pe(e), ae(e) ? t.style.setProperty(e, r) : t.style[e] = r
                };

            function ge(t, e, r, o = {}, i) {
                const a = window.__MOTION_DEV_TOOLS_RECORD,
                    n = !1 !== o.record && a;
                let l, {
                    duration: s = ft.duration,
                    delay: c = ft.delay,
                    endDelay: d = ft.endDelay,
                    repeat: h = ft.repeat,
                    easing: m = ft.easing,
                    persist: p = !1,
                    direction: u,
                    offset: w,
                    allowWebkitAcceleration: g = !1,
                    autoplay: v = !0
                } = o;
                const f = Ft(t),
                    b = re(e);
                let y = de.waapi();
                b && ((t, e) => {
                    Kt[e] && (e = Kt[e]);
                    const {
                        transforms: r
                    } = Ft(t);
                    var o, i;
                    i = e, -1 === (o = r).indexOf(i) && o.push(i), t.style.transform = oe(r)
                })(t, e);
                const x = pe(e),
                    $ = function(t, e) {
                        return t.has(e) || t.set(e, new Zt), t.get(e)
                    }(f.values, x),
                    C = Gt.get(x);
                return Ct($.animation, !(Et(m) && $.generator) && !1 !== o.record), () => {
                    const f = () => {
                        var e, r;
                        return null !== (r = null !== (e = ue(t, x)) && void 0 !== e ? e : null === C || void 0 === C ? void 0 : C.initialValue) && void 0 !== r ? r : 0
                    };
                    let A = function(t, e) {
                        for (let r = 0; r < t.length; r++) null === t[r] && (t[r] = r ? t[r - 1] : e());
                        return t
                    }((t => Array.isArray(t) ? t : [t])(r), f);
                    const _ = function(t, e) {
                        var r;
                        let o = (null === e || void 0 === e ? void 0 : e.toDefaultUnit) || $t;
                        const i = t[t.length - 1];
                        if ("string" === typeof i) {
                            const t = (null === (r = i.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === r ? void 0 : r[2]) || "";
                            t && (o = e => e + t)
                        }
                        return o
                    }(A, C);
                    if (Et(m)) {
                        const t = m.createAnimation(A, "opacity" !== e, f, x, $);
                        m = t.easing, A = t.keyframes || A, s = t.duration || s
                    }
                    if (ae(x) && (de.cssRegisterProperty() ? function(t) {
                            if (!ne.has(t)) {
                                ne.add(t);
                                try {
                                    const {
                                        syntax: e,
                                        initialValue: r
                                    } = Gt.has(t) ? Gt.get(t) : {};
                                    CSS.registerProperty({
                                        name: t,
                                        inherits: !1,
                                        syntax: e,
                                        initialValue: r
                                    })
                                } catch (e) {}
                            }
                        }(x) : y = !1), b && !de.linearEasing() && (Dt(m) || Pt(m) && m.some(Dt)) && (y = !1), y) {
                        C && (A = A.map((t => It(t) ? C.toDefaultUnit(t) : t))), 1 !== A.length || de.partialKeyframes() && !n || A.unshift(f());
                        const e = {
                            delay: bt(c),
                            duration: bt(s),
                            endDelay: bt(d),
                            easing: Pt(m) ? void 0 : he(m, s),
                            direction: u,
                            iterations: h + 1,
                            fill: "both"
                        };
                        l = t.animate({
                            [x]: A,
                            offset: w,
                            easing: Pt(m) ? m.map((t => he(t, s))) : void 0
                        }, e), l.finished || (l.finished = new Promise(((t, e) => {
                            l.onfinish = t, l.oncancel = e
                        })));
                        const r = A[A.length - 1];
                        l.finished.then((() => {
                            p || (we(t, x, r), l.cancel())
                        })).catch(xt), g || (l.playbackRate = 1.000001)
                    } else if (i && b) A = A.map((t => "string" === typeof t ? parseFloat(t) : t)), 1 === A.length && A.unshift(parseFloat(f())), l = new i((e => {
                        we(t, x, _ ? _(e) : e)
                    }), A, Object.assign(Object.assign({}, o), {
                        duration: s,
                        easing: m
                    }));
                    else {
                        const e = A[A.length - 1];
                        we(t, x, C && It(e) ? C.toDefaultUnit(e) : e)
                    }
                    return n && a(t, e, A, {
                        duration: s,
                        delay: c,
                        easing: m,
                        repeat: h,
                        offset: w
                    }, "motion-one"), $.setAnimation(l), l && !v && l.pause(), l
                }
            }
            const ve = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);

            function fe(t, e, r) {
                return Dt(t) ? t(e, r) : t
            }
            const be = (ye = Bt, function(t, e, r = {}) {
                const o = (t = function(t, e) {
                    var r;
                    return "string" === typeof t ? e ? (null !== (r = e[t]) && void 0 !== r || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
                }(t)).length;
                Boolean(o), Boolean(e);
                const i = [];
                for (let a = 0; a < o; a++) {
                    const n = t[a];
                    for (const t in e) {
                        const l = ve(r, t);
                        l.delay = fe(l.delay, a, o);
                        const s = ge(n, t, e[t], l, ye);
                        i.push(s)
                    }
                }
                return _t(i, r, r.duration)
            });
            var ye;

            function xe(t, e = {}) {
                return _t([() => {
                    const r = new Bt(t, [0, 1], e);
                    return r.finished.catch((() => {})), r
                }], e, e.duration)
            }

            function $e(t, e, r) {
                return (Dt(t) ? xe : be)(t, e, r)
            }
            const Ce = t => null != t ? t : Z;
            var Ae = r(92592),
                _e = Object.defineProperty,
                ke = Object.getOwnPropertySymbols,
                Oe = Object.prototype.hasOwnProperty,
                Ee = Object.prototype.propertyIsEnumerable,
                Ie = (t, e, r) => e in t ? _e(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Pe = (t, e) => {
                    for (var r in e || (e = {})) Oe.call(e, r) && Ie(t, r, e[r]);
                    if (ke)
                        for (var r of ke(e)) Ee.call(e, r) && Ie(t, r, e[r]);
                    return t
                };
            const Me = {
                    getPreset: t => ({
                        "--wcm-accent-color": "#3396FF",
                        "--wcm-accent-fill-color": "#FFFFFF",
                        "--wcm-z-index": "89",
                        "--wcm-background-color": "#3396FF",
                        "--wcm-background-border-radius": "8px",
                        "--wcm-container-border-radius": "30px",
                        "--wcm-wallet-icon-border-radius": "15px",
                        "--wcm-wallet-icon-large-border-radius": "30px",
                        "--wcm-wallet-icon-small-border-radius": "7px",
                        "--wcm-input-border-radius": "28px",
                        "--wcm-button-border-radius": "10px",
                        "--wcm-notification-border-radius": "36px",
                        "--wcm-secondary-button-border-radius": "28px",
                        "--wcm-icon-button-border-radius": "50%",
                        "--wcm-button-hover-highlight-border-radius": "10px",
                        "--wcm-text-big-bold-size": "20px",
                        "--wcm-text-big-bold-weight": "600",
                        "--wcm-text-big-bold-line-height": "24px",
                        "--wcm-text-big-bold-letter-spacing": "-0.03em",
                        "--wcm-text-big-bold-text-transform": "none",
                        "--wcm-text-xsmall-bold-size": "10px",
                        "--wcm-text-xsmall-bold-weight": "700",
                        "--wcm-text-xsmall-bold-line-height": "12px",
                        "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                        "--wcm-text-xsmall-bold-text-transform": "uppercase",
                        "--wcm-text-xsmall-regular-size": "12px",
                        "--wcm-text-xsmall-regular-weight": "600",
                        "--wcm-text-xsmall-regular-line-height": "14px",
                        "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                        "--wcm-text-xsmall-regular-text-transform": "none",
                        "--wcm-text-small-thin-size": "14px",
                        "--wcm-text-small-thin-weight": "500",
                        "--wcm-text-small-thin-line-height": "16px",
                        "--wcm-text-small-thin-letter-spacing": "-0.03em",
                        "--wcm-text-small-thin-text-transform": "none",
                        "--wcm-text-small-regular-size": "14px",
                        "--wcm-text-small-regular-weight": "600",
                        "--wcm-text-small-regular-line-height": "16px",
                        "--wcm-text-small-regular-letter-spacing": "-0.03em",
                        "--wcm-text-small-regular-text-transform": "none",
                        "--wcm-text-medium-regular-size": "16px",
                        "--wcm-text-medium-regular-weight": "600",
                        "--wcm-text-medium-regular-line-height": "20px",
                        "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                        "--wcm-text-medium-regular-text-transform": "none",
                        "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                        "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                        "--wcm-success-color": "rgb(38,181,98)",
                        "--wcm-error-color": "rgb(242, 90, 103)",
                        "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                        "--wcm-overlay-backdrop-filter": "none"
                    }[t]),
                    setTheme() {
                        const t = document.querySelector(":root"),
                            {
                                themeVariables: e
                            } = vt.Ic.state;
                        if (t) {
                            const r = Pe(Pe(Pe({}, function() {
                                var t;
                                const e = {
                                    light: {
                                        foreground: {
                                            1: "rgb(20,20,20)",
                                            2: "rgb(121,134,134)",
                                            3: "rgb(158,169,169)"
                                        },
                                        background: {
                                            1: "rgb(255,255,255)",
                                            2: "rgb(241,243,243)",
                                            3: "rgb(228,231,231)"
                                        },
                                        overlay: "rgba(0,0,0,0.1)"
                                    },
                                    dark: {
                                        foreground: {
                                            1: "rgb(228,231,231)",
                                            2: "rgb(148,158,158)",
                                            3: "rgb(110,119,119)"
                                        },
                                        background: {
                                            1: "rgb(20,20,20)",
                                            2: "rgb(39,42,42)",
                                            3: "rgb(59,64,64)"
                                        },
                                        overlay: "rgba(255,255,255,0.1)"
                                    }
                                }[null != (t = vt.Ic.state.themeMode) ? t : "dark"];
                                return {
                                    "--wcm-color-fg-1": e.foreground[1],
                                    "--wcm-color-fg-2": e.foreground[2],
                                    "--wcm-color-fg-3": e.foreground[3],
                                    "--wcm-color-bg-1": e.background[1],
                                    "--wcm-color-bg-2": e.background[2],
                                    "--wcm-color-bg-3": e.background[3],
                                    "--wcm-color-overlay": e.overlay
                                }
                            }()), {
                                "--wcm-accent-color": "#3396FF",
                                "--wcm-accent-fill-color": "#FFFFFF",
                                "--wcm-z-index": "89",
                                "--wcm-background-color": "#3396FF",
                                "--wcm-background-border-radius": "8px",
                                "--wcm-container-border-radius": "30px",
                                "--wcm-wallet-icon-border-radius": "15px",
                                "--wcm-wallet-icon-large-border-radius": "30px",
                                "--wcm-wallet-icon-small-border-radius": "7px",
                                "--wcm-input-border-radius": "28px",
                                "--wcm-button-border-radius": "10px",
                                "--wcm-notification-border-radius": "36px",
                                "--wcm-secondary-button-border-radius": "28px",
                                "--wcm-icon-button-border-radius": "50%",
                                "--wcm-button-hover-highlight-border-radius": "10px",
                                "--wcm-text-big-bold-size": "20px",
                                "--wcm-text-big-bold-weight": "600",
                                "--wcm-text-big-bold-line-height": "24px",
                                "--wcm-text-big-bold-letter-spacing": "-0.03em",
                                "--wcm-text-big-bold-text-transform": "none",
                                "--wcm-text-xsmall-bold-size": "10px",
                                "--wcm-text-xsmall-bold-weight": "700",
                                "--wcm-text-xsmall-bold-line-height": "12px",
                                "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                                "--wcm-text-xsmall-bold-text-transform": "uppercase",
                                "--wcm-text-xsmall-regular-size": "12px",
                                "--wcm-text-xsmall-regular-weight": "600",
                                "--wcm-text-xsmall-regular-line-height": "14px",
                                "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                                "--wcm-text-xsmall-regular-text-transform": "none",
                                "--wcm-text-small-thin-size": "14px",
                                "--wcm-text-small-thin-weight": "500",
                                "--wcm-text-small-thin-line-height": "16px",
                                "--wcm-text-small-thin-letter-spacing": "-0.03em",
                                "--wcm-text-small-thin-text-transform": "none",
                                "--wcm-text-small-regular-size": "14px",
                                "--wcm-text-small-regular-weight": "600",
                                "--wcm-text-small-regular-line-height": "16px",
                                "--wcm-text-small-regular-letter-spacing": "-0.03em",
                                "--wcm-text-small-regular-text-transform": "none",
                                "--wcm-text-medium-regular-size": "16px",
                                "--wcm-text-medium-regular-weight": "600",
                                "--wcm-text-medium-regular-line-height": "20px",
                                "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                                "--wcm-text-medium-regular-text-transform": "none",
                                "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                                "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                                "--wcm-success-color": "rgb(38,181,98)",
                                "--wcm-error-color": "rgb(242, 90, 103)",
                                "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                                "--wcm-overlay-backdrop-filter": "none"
                            }), e);
                            Object.entries(r).forEach((([e, r]) => t.style.setProperty(e, r)))
                        }
                    },
                    globalCss: s `*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
                },
                Se = s `button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
            var Re = Object.defineProperty,
                Te = Object.getOwnPropertyDescriptor,
                We = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Te(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Re(e, r, a), a
                };
            let Le = class extends st {
                constructor() {
                    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
                }
                render() {
                    const t = {
                        "wcm-icon-left": void 0 !== this.iconLeft,
                        "wcm-icon-right": void 0 !== this.iconRight,
                        "wcm-ghost": "ghost" === this.variant,
                        "wcm-outline": "outline" === this.variant
                    };
                    let e = "inverse";
                    return "ghost" === this.variant && (e = "secondary"), "outline" === this.variant && (e = "accent"), U `<button class="${gt(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${this.iconRight}</button>`
                }
            };
            Le.styles = [Me.globalCss, Se], We([mt({
                type: Boolean
            })], Le.prototype, "disabled", 2), We([mt()], Le.prototype, "iconLeft", 2), We([mt()], Le.prototype, "iconRight", 2), We([mt()], Le.prototype, "onClick", 2), We([mt()], Le.prototype, "variant", 2), Le = We([dt("wcm-button")], Le);
            const je = s `:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
            var De = Object.defineProperty,
                ze = Object.getOwnPropertyDescriptor,
                Ne = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? ze(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && De(e, r, a), a
                };
            let Ue = class extends st {
                constructor() {
                    super(...arguments), this.disabled = !1, this.variant = "primary"
                }
                render() {
                    const t = {
                        "wcm-secondary": "secondary" === this.variant
                    };
                    return U `<button ?disabled="${this.disabled}" class="${gt(t)}"><slot></slot></button>`
                }
            };
            Ue.styles = [Me.globalCss, je], Ne([mt({
                type: Boolean
            })], Ue.prototype, "disabled", 2), Ne([mt()], Ue.prototype, "variant", 2), Ue = Ne([dt("wcm-button-big")], Ue);
            const He = s `:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
            var Be = Object.defineProperty,
                Ze = Object.getOwnPropertyDescriptor;
            let Ve = class extends st {
                render() {
                    return U `<div><slot></slot></div>`
                }
            };
            Ve.styles = [Me.globalCss, He], Ve = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Ze(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && Be(e, r, a), a
            })([dt("wcm-info-footer")], Ve);
            const Fe = {
                    CROSS_ICON: H `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_LOGO: H `<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_ICON: H `<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
                    WALLET_CONNECT_ICON_COLORED: H `<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
                    BACK_ICON: H `<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
                    COPY_ICON: H `<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
                    RETRY_ICON: H `<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
                    DESKTOP_ICON: H `<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    MOBILE_ICON: H `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
                    ARROW_DOWN_ICON: H `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
                    ARROW_UP_RIGHT_ICON: H `<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    ARROW_RIGHT_ICON: H `<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
                    QRCODE_ICON: H `<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
                    SCAN_ICON: H `<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
                    CHECKMARK_ICON: H `<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
                    SEARCH_ICON: H `<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
                    WALLET_PLACEHOLDER: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    GLOBE_ICON: H `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
                },
                qe = s `.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
            var Ke = Object.defineProperty,
                Qe = Object.getOwnPropertyDescriptor;
            let Ye = class extends st {
                render() {
                    return U `<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${Fe.WALLET_CONNECT_LOGO} <button @click="${vt.jb.close}">${Fe.CROSS_ICON}</button></div>`
                }
            };
            Ye.styles = [Me.globalCss, qe], Ye = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Qe(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && Ke(e, r, a), a
            })([dt("wcm-modal-backcard")], Ye);
            const Ge = s `main{padding:20px;padding-top:0;width:100%}`;
            var Xe = Object.defineProperty,
                Je = Object.getOwnPropertyDescriptor;
            let tr = class extends st {
                render() {
                    return U `<main><slot></slot></main>`
                }
            };
            tr.styles = [Me.globalCss, Ge], tr = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Je(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && Xe(e, r, a), a
            })([dt("wcm-modal-content")], tr);
            const er = s `footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
            var rr = Object.defineProperty,
                or = Object.getOwnPropertyDescriptor;
            let ir = class extends st {
                render() {
                    return U `<footer><slot></slot></footer>`
                }
            };
            ir.styles = [Me.globalCss, er], ir = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? or(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && rr(e, r, a), a
            })([dt("wcm-modal-footer")], ir);
            const ar = s `header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
            var nr = Object.defineProperty,
                lr = Object.getOwnPropertyDescriptor,
                sr = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? lr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && nr(e, r, a), a
                };
            let cr = class extends st {
                constructor() {
                    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
                }
                backBtnTemplate() {
                    return U `<button class="wcm-back-btn" @click="${vt.AV.goBack}">${Fe.BACK_ICON}</button>`
                }
                actionBtnTemplate() {
                    return U `<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
                }
                render() {
                    const t = {
                            "wcm-border": this.border
                        },
                        e = vt.AV.state.history.length > 1,
                        r = this.title ? U `<wcm-text variant="big-bold">${this.title}</wcm-text>` : U `<slot></slot>`;
                    return U `<header class="${gt(t)}">${e?this.backBtnTemplate():null} ${r} ${this.onAction?this.actionBtnTemplate():null}</header>`
                }
            };
            cr.styles = [Me.globalCss, ar], sr([mt()], cr.prototype, "title", 2), sr([mt()], cr.prototype, "onAction", 2), sr([mt()], cr.prototype, "actionIcon", 2), sr([mt({
                type: Boolean
            })], cr.prototype, "border", 2), cr = sr([dt("wcm-modal-header")], cr);
            const dr = {
                    MOBILE_BREAKPOINT: 600,
                    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
                    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
                    getShadowRootElement(t, e) {
                        const r = t.renderRoot.querySelector(e);
                        if (!r) throw new Error(`${e} not found`);
                        return r
                    },
                    getWalletIcon({
                        id: t,
                        image_id: e
                    }) {
                        const {
                            walletImages: r
                        } = vt.t0.state;
                        return null != r && r[t] ? r[t] : e ? vt.uc.getWalletImageUrl(e) : ""
                    },
                    getWalletName: (t, e = !1) => e && t.length > 8 ? `${t.substring(0,8)}..` : t,
                    isMobileAnimation: () => window.innerWidth <= dr.MOBILE_BREAKPOINT,
                    async preloadImage(t) {
                        const e = new Promise(((e, r) => {
                            const o = new Image;
                            o.onload = e, o.onerror = r, o.crossOrigin = "anonymous", o.src = t
                        }));
                        return Promise.race([e, vt.zv.wait(3e3)])
                    },
                    getErrorMessage: t => t instanceof Error ? t.message : "Unknown Error",
                    debounce(t, e = 500) {
                        let r;
                        return (...o) => {
                            r && clearTimeout(r), r = setTimeout((function() {
                                t(...o)
                            }), e)
                        }
                    },
                    handleMobileLinking(t) {
                        const {
                            walletConnectUri: e
                        } = vt.zb.state, {
                            mobile: r,
                            name: o
                        } = t, i = r ? .native, a = r ? .universal;
                        dr.setRecentWallet(t), e && function(t) {
                            let e = "";
                            i ? e = vt.zv.formatUniversalUrl(i, t, o) : a && (e = vt.zv.formatNativeUrl(a, t, o)), vt.zv.openHref(e, "_self")
                        }(e)
                    },
                    handleAndroidLinking() {
                        const {
                            walletConnectUri: t
                        } = vt.zb.state;
                        t && (vt.zv.setWalletConnectAndroidDeepLink(t), vt.zv.openHref(t, "_self"))
                    },
                    async handleUriCopy() {
                        const {
                            walletConnectUri: t
                        } = vt.zb.state;
                        if (t) try {
                            await navigator.clipboard.writeText(t), vt.Vs.openToast("Link copied", "success")
                        } catch {
                            vt.Vs.openToast("Failed to copy", "error")
                        }
                    },
                    getCustomImageUrls() {
                        const {
                            walletImages: t
                        } = vt.t0.state, e = Object.values(t ? ? {});
                        return Object.values(e)
                    },
                    truncate: (t, e = 8) => t.length <= e ? t : `${t.substring(0,4)}...${t.substring(t.length-4)}`,
                    setRecentWallet(t) {
                        try {
                            localStorage.setItem(dr.WCM_RECENT_WALLET_DATA, JSON.stringify(t))
                        } catch {
                            console.info("Unable to set recent wallet")
                        }
                    },
                    getRecentWallet() {
                        try {
                            const t = localStorage.getItem(dr.WCM_RECENT_WALLET_DATA);
                            return t ? JSON.parse(t) : void 0
                        } catch {
                            console.info("Unable to get recent wallet")
                        }
                    },
                    caseSafeIncludes: (t, e) => t.toUpperCase().includes(e.toUpperCase()),
                    openWalletExplorerUrl() {
                        vt.zv.openHref(dr.EXPLORER_WALLET_URL, "_blank")
                    },
                    getCachedRouterWalletPlatforms() {
                        const {
                            desktop: t,
                            mobile: e
                        } = vt.zv.getWalletRouterData(), r = Boolean(t ? .native), o = Boolean(t ? .universal);
                        return {
                            isDesktop: r,
                            isMobile: Boolean(e ? .native) || Boolean(e ? .universal),
                            isWeb: o
                        }
                    },
                    goToConnectingView(t) {
                        vt.AV.setData({
                            Wallet: t
                        });
                        const e = vt.zv.isMobile(),
                            {
                                isDesktop: r,
                                isWeb: o,
                                isMobile: i
                            } = dr.getCachedRouterWalletPlatforms();
                        e ? i ? vt.AV.push("MobileConnecting") : o ? vt.AV.push("WebConnecting") : vt.AV.push("InstallWallet") : r ? vt.AV.push("DesktopConnecting") : o ? vt.AV.push("WebConnecting") : i ? vt.AV.push("MobileQrcodeConnecting") : vt.AV.push("InstallWallet")
                    }
                },
                hr = s `.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
            var mr = Object.defineProperty,
                pr = Object.getOwnPropertyDescriptor,
                ur = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? pr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && mr(e, r, a), a
                };
            let wr = class extends st {
                constructor() {
                    super(), this.view = vt.AV.state.view, this.prevView = vt.AV.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = vt.AV.subscribe((t => {
                        this.view !== t.view && this.onChangeRoute()
                    }))
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver((([t]) => {
                        const e = `${t.contentRect.height}px`;
                        "0px" !== this.oldHeight && $e(this.routerEl, {
                            height: [this.oldHeight, e]
                        }, {
                            duration: .2
                        }), this.oldHeight = e
                    })), this.resizeObserver.observe(this.contentEl)
                }
                disconnectedCallback() {
                    var t, e;
                    null == (t = this.unsubscribe) || t.call(this), null == (e = this.resizeObserver) || e.disconnect()
                }
                get routerEl() {
                    return dr.getShadowRootElement(this, ".wcm-router")
                }
                get contentEl() {
                    return dr.getShadowRootElement(this, ".wcm-content")
                }
                viewTemplate() {
                    switch (this.view) {
                        case "ConnectWallet":
                            return U `<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
                        case "DesktopConnecting":
                            return U `<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
                        case "MobileConnecting":
                            return U `<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
                        case "WebConnecting":
                            return U `<wcm-web-connecting-view></wcm-web-connecting-view>`;
                        case "MobileQrcodeConnecting":
                            return U `<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
                        case "WalletExplorer":
                            return U `<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
                        case "Qrcode":
                            return U `<wcm-qrcode-view></wcm-qrcode-view>`;
                        case "InstallWallet":
                            return U `<wcm-install-wallet-view></wcm-install-wallet-view>`;
                        default:
                            return U `<div>Not Found</div>`
                    }
                }
                async onChangeRoute() {
                    await $e(this.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished, this.view = vt.AV.state.view, $e(this.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                }
                render() {
                    return U `<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`
                }
            };
            wr.styles = [Me.globalCss, hr], ur([pt()], wr.prototype, "view", 2), ur([pt()], wr.prototype, "prevView", 2), wr = ur([dt("wcm-modal-router")], wr);
            const gr = s `div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
            var vr = Object.defineProperty,
                fr = Object.getOwnPropertyDescriptor,
                br = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? fr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && vr(e, r, a), a
                };
            let yr = class extends st {
                constructor() {
                    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = vt.Vs.subscribe((t => {
                        t.open ? (this.open = !0, this.timeout = setTimeout((() => vt.Vs.closeToast()), 2200)) : (this.open = !1, clearTimeout(this.timeout))
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribe) || t.call(this), clearTimeout(this.timeout), vt.Vs.closeToast()
                }
                render() {
                    const {
                        message: t,
                        variant: e
                    } = vt.Vs.state, r = {
                        "wcm-success": "success" === e,
                        "wcm-error": "error" === e
                    };
                    return this.open ? U `<div class="${gt(r)}">${"success"===e?Fe.CHECKMARK_ICON:null} ${"error"===e?Fe.CROSS_ICON:null}<wcm-text variant="small-regular">${t}</wcm-text></div>` : null
                }
            };
            yr.styles = [Me.globalCss, gr], br([pt()], yr.prototype, "open", 2), yr = br([dt("wcm-modal-toast")], yr);

            function xr(t, e, r) {
                return t !== e && (t - e < 0 ? e - t : t - e) <= r + .1
            }
            const $r = {
                    generate(t, e, r) {
                        const o = "#141414",
                            i = [],
                            a = function(t, e) {
                                const r = Array.prototype.slice.call(Ae.create(t, {
                                        errorCorrectionLevel: e
                                    }).modules.data, 0),
                                    o = Math.sqrt(r.length);
                                return r.reduce(((t, e, r) => (r % o === 0 ? t.push([e]) : t[t.length - 1].push(e)) && t), [])
                            }(t, "Q"),
                            n = e / a.length,
                            l = [{
                                x: 0,
                                y: 0
                            }, {
                                x: 1,
                                y: 0
                            }, {
                                x: 0,
                                y: 1
                            }];
                        l.forEach((({
                            x: t,
                            y: e
                        }) => {
                            const r = (a.length - 7) * n * t,
                                s = (a.length - 7) * n * e;
                            for (let a = 0; a < l.length; a += 1) {
                                const t = n * (7 - 2 * a);
                                i.push(H `<rect fill="${a%2===0?o:"#ffffff"}" height="${t}" rx="${.45*t}" ry="${.45*t}" width="${t}" x="${r+n*a}" y="${s+n*a}">`)
                            }
                        }));
                        const s = Math.floor((r + 25) / n),
                            c = a.length / 2 - s / 2,
                            d = a.length / 2 + s / 2 - 1,
                            h = [];
                        a.forEach(((t, e) => {
                            t.forEach(((t, r) => {
                                if (a[e][r] && !(e < 7 && r < 7 || e > a.length - 8 && r < 7 || e < 7 && r > a.length - 8) && !(e > c && e < d && r > c && r < d)) {
                                    const t = e * n + n / 2,
                                        o = r * n + n / 2;
                                    h.push([t, o])
                                }
                            }))
                        }));
                        const m = {};
                        return h.forEach((([t, e]) => {
                            m[t] ? m[t].push(e) : m[t] = [e]
                        })), Object.entries(m).map((([t, e]) => {
                            const r = e.filter((t => e.every((e => !xr(t, e, n)))));
                            return [Number(t), r]
                        })).forEach((([t, e]) => {
                            e.forEach((e => {
                                i.push(H `<circle cx="${t}" cy="${e}" fill="${o}" r="${n/2.5}">`)
                            }))
                        })), Object.entries(m).filter((([t, e]) => e.length > 1)).map((([t, e]) => {
                            const r = e.filter((t => e.some((e => xr(t, e, n)))));
                            return [Number(t), r]
                        })).map((([t, e]) => {
                            e.sort(((t, e) => t < e ? -1 : 1));
                            const r = [];
                            for (const o of e) {
                                const t = r.find((t => t.some((t => xr(o, t, n)))));
                                t ? t.push(o) : r.push([o])
                            }
                            return [t, r.map((t => [t[0], t[t.length - 1]]))]
                        })).forEach((([t, e]) => {
                            e.forEach((([e, r]) => {
                                i.push(H `<line x1="${t}" x2="${t}" y1="${e}" y2="${r}" stroke="${o}" stroke-width="${n/1.25}" stroke-linecap="round">`)
                            }))
                        })), i
                    }
                },
                Cr = s `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
            var Ar = Object.defineProperty,
                _r = Object.getOwnPropertyDescriptor,
                kr = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? _r(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Ar(e, r, a), a
                };
            let Or = class extends st {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
                }
                svgTemplate() {
                    const t = "light" === vt.Ic.state.themeMode ? this.size : this.size - 36;
                    return H `<svg height="${t}" width="${t}">${$r.generate(this.uri,t,t/4)}</svg>`
                }
                render() {
                    const t = {
                        "wcm-dark": "dark" === vt.Ic.state.themeMode
                    };
                    return U `<div style="${`width: ${this.size}px`}" class="${gt(t)}">${this.walletId||this.imageUrl?U`<wcm-wallet-image walletId="${Ce(this.walletId)}" imageId="${Ce(this.imageId)}" imageUrl="${Ce(this.imageUrl)}"></wcm-wallet-image>`:Fe.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
                }
            };
            Or.styles = [Me.globalCss, Cr], kr([mt()], Or.prototype, "uri", 2), kr([mt({
                type: Number
            })], Or.prototype, "size", 2), kr([mt()], Or.prototype, "imageId", 2), kr([mt()], Or.prototype, "walletId", 2), kr([mt()], Or.prototype, "imageUrl", 2), Or = kr([dt("wcm-qrcode")], Or);
            const Er = s `:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
            var Ir = Object.defineProperty,
                Pr = Object.getOwnPropertyDescriptor,
                Mr = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Pr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Ir(e, r, a), a
                };
            let Sr = class extends st {
                constructor() {
                    super(...arguments), this.onChange = () => null
                }
                render() {
                    return U `<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${Fe.SEARCH_ICON}`
                }
            };
            Sr.styles = [Me.globalCss, Er], Mr([mt()], Sr.prototype, "onChange", 2), Sr = Mr([dt("wcm-search-input")], Sr);
            const Rr = s `@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
            var Tr = Object.defineProperty,
                Wr = Object.getOwnPropertyDescriptor;
            let Lr = class extends st {
                render() {
                    return U `<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
                }
            };
            Lr.styles = [Me.globalCss, Rr], Lr = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Wr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && Tr(e, r, a), a
            })([dt("wcm-spinner")], Lr);
            const jr = s `span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
            var Dr = Object.defineProperty,
                zr = Object.getOwnPropertyDescriptor,
                Nr = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? zr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Dr(e, r, a), a
                };
            let Ur = class extends st {
                constructor() {
                    super(...arguments), this.variant = "medium-regular", this.color = "primary"
                }
                render() {
                    const t = {
                        "wcm-big-bold": "big-bold" === this.variant,
                        "wcm-medium-regular": "medium-regular" === this.variant,
                        "wcm-small-regular": "small-regular" === this.variant,
                        "wcm-small-thin": "small-thin" === this.variant,
                        "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                        "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                        "wcm-color-primary": "primary" === this.color,
                        "wcm-color-secondary": "secondary" === this.color,
                        "wcm-color-tertiary": "tertiary" === this.color,
                        "wcm-color-inverse": "inverse" === this.color,
                        "wcm-color-accnt": "accent" === this.color,
                        "wcm-color-error": "error" === this.color
                    };
                    return U `<span><slot class="${gt(t)}"></slot></span>`
                }
            };
            Ur.styles = [Me.globalCss, jr], Nr([mt()], Ur.prototype, "variant", 2), Nr([mt()], Ur.prototype, "color", 2), Ur = Nr([dt("wcm-text")], Ur);
            const Hr = s `button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
            var Br = Object.defineProperty,
                Zr = Object.getOwnPropertyDescriptor,
                Vr = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Zr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Br(e, r, a), a
                };
            let Fr = class extends st {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
                }
                sublabelTemplate() {
                    return this.recent ? U `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? U `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null
                }
                handleClick() {
                    vt.uA.click({
                        name: "WALLET_BUTTON",
                        walletId: this.walletId
                    }), this.onClick()
                }
                render() {
                    var t;
                    return U `<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${Ce(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${null!=(t=this.label)?t:dr.getWalletName(this.name,!0)}</wcm-text>${this.sublabelTemplate()}</div></button>`
                }
            };
            Fr.styles = [Me.globalCss, Hr], Vr([mt()], Fr.prototype, "onClick", 2), Vr([mt()], Fr.prototype, "name", 2), Vr([mt()], Fr.prototype, "walletId", 2), Vr([mt()], Fr.prototype, "label", 2), Vr([mt()], Fr.prototype, "imageId", 2), Vr([mt({
                type: Boolean
            })], Fr.prototype, "installed", 2), Vr([mt({
                type: Boolean
            })], Fr.prototype, "recent", 2), Fr = Vr([dt("wcm-wallet-button")], Fr);
            const qr = s `:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var Kr = Object.defineProperty,
                Qr = Object.getOwnPropertyDescriptor,
                Yr = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Qr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Kr(e, r, a), a
                };
            let Gr = class extends st {
                constructor() {
                    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
                }
                render() {
                    var t;
                    const e = null != (t = this.imageUrl) && t.length ? this.imageUrl : dr.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return U `${e.length?U`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>`:Fe.WALLET_PLACEHOLDER}`
                }
            };
            Gr.styles = [Me.globalCss, qr], Yr([mt()], Gr.prototype, "walletId", 2), Yr([mt()], Gr.prototype, "imageId", 2), Yr([mt()], Gr.prototype, "imageUrl", 2), Gr = Yr([dt("wcm-wallet-image")], Gr);
            var Xr = Object.defineProperty,
                Jr = Object.getOwnPropertyDescriptor,
                to = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Jr(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Xr(e, r, a), a
                };
            let eo = class extends st {
                constructor() {
                    super(), this.preload = !0, this.preloadData()
                }
                async loadImages(t) {
                    try {
                        null != t && t.length && await Promise.all(t.map((async t => dr.preloadImage(t))))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images", t)
                    }
                }
                async preloadListings() {
                    if (vt.t0.state.enableExplorer) {
                        await vt.uc.getRecomendedWallets(), vt.zb.setIsDataLoaded(!0);
                        const {
                            recomendedWallets: t
                        } = vt.uc.state, e = t.map((t => dr.getWalletIcon(t)));
                        await this.loadImages(e)
                    } else vt.zb.setIsDataLoaded(!0)
                }
                async preloadCustomImages() {
                    const t = dr.getCustomImageUrls();
                    await this.loadImages(t)
                }
                async preloadData() {
                    try {
                        this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                    } catch (t) {
                        console.error(t), vt.Vs.openToast("Failed preloading", "error")
                    }
                }
            };
            to([pt()], eo.prototype, "preload", 2), eo = to([dt("wcm-explorer-context")], eo);
            var ro = Object.defineProperty,
                oo = Object.getOwnPropertyDescriptor;
            let io = class extends st {
                constructor() {
                    super(), this.unsubscribeTheme = void 0, Me.setTheme(), this.unsubscribeTheme = vt.Ic.subscribe(Me.setTheme)
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeTheme) || t.call(this)
                }
            };
            io = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? oo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && ro(e, r, a), a
            })([dt("wcm-theme-context")], io);
            const ao = s `@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var no = Object.defineProperty,
                lo = Object.getOwnPropertyDescriptor;
            let so = class extends st {
                onGoToQrcode() {
                    vt.AV.push("Qrcode")
                }
                render() {
                    const {
                        recomendedWallets: t
                    } = vt.uc.state, e = [...t, ...t], r = 2 * vt.zv.RECOMMENDED_WALLET_AMOUNT;
                    return U `<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${Fe.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${Fe.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map(((t,r)=>{const o=e[r%e.length];return o?U`<wcm-wallet-image walletId="${o.id}" imageId="${o.image_id}"></wcm-wallet-image>`:Fe.WALLET_PLACEHOLDER}))}</div><wcm-button-big @click="${dr.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`
                }
            };
            so.styles = [Me.globalCss, ao], so = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? lo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && no(e, r, a), a
            })([dt("wcm-android-wallet-selection")], so);
            const co = s `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
            var ho = Object.defineProperty,
                mo = Object.getOwnPropertyDescriptor,
                po = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? mo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && ho(e, r, a), a
                };
            let uo = class extends st {
                constructor() {
                    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    var t, e;
                    const r = null != (e = null == (t = vt.Ic.state.themeVariables) ? void 0 : t["--wcm-wallet-icon-large-border-radius"]) ? e : Me.getPreset("--wcm-wallet-icon-large-border-radius");
                    let o = 0;
                    o = r.includes("%") ? .88 * parseInt(r, 10) : parseInt(r, 10), o *= 1.17;
                    return U `<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${o}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${317-1.57*o}" stroke-dashoffset="${425-1.8*o}"></use></svg>`
                }
                render() {
                    const t = {
                        "wcm-error": this.isError,
                        "wcm-stale": this.isStale
                    };
                    return U `<div class="${gt(t)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${Ce(this.walletId)}" imageId="${Ce(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</wcm-text>`
                }
            };
            uo.styles = [Me.globalCss, co], po([mt()], uo.prototype, "walletId", 2), po([mt()], uo.prototype, "imageId", 2), po([mt({
                type: Boolean
            })], uo.prototype, "isError", 2), po([mt({
                type: Boolean
            })], uo.prototype, "isStale", 2), po([mt()], uo.prototype, "label", 2), uo = po([dt("wcm-connector-waiting")], uo);
            const wo = {
                    manualWallets() {
                        var t, e;
                        const {
                            mobileWallets: r,
                            desktopWallets: o
                        } = vt.t0.state, i = null == (t = wo.recentWallet()) ? void 0 : t.id, a = (vt.zv.isMobile() ? r : o) ? .filter((t => i !== t.id));
                        return null != (e = vt.zv.isMobile() ? a ? .map((({
                            id: t,
                            name: e,
                            links: r
                        }) => ({
                            id: t,
                            name: e,
                            mobile: r,
                            links: r
                        }))) : a ? .map((({
                            id: t,
                            name: e,
                            links: r
                        }) => ({
                            id: t,
                            name: e,
                            desktop: r,
                            links: r
                        })))) ? e : []
                    },
                    recentWallet: () => dr.getRecentWallet(),
                    recomendedWallets(t = !1) {
                        var e;
                        const r = t || null == (e = wo.recentWallet()) ? void 0 : e.id,
                            {
                                recomendedWallets: o
                            } = vt.uc.state;
                        return o.filter((t => r !== t.id))
                    }
                },
                go = {
                    onConnecting(t) {
                        dr.goToConnectingView(t)
                    },
                    manualWalletsTemplate() {
                        return wo.manualWallets().map((t => U `<wcm-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`))
                    },
                    recomendedWalletsTemplate(t = !1) {
                        return wo.recomendedWallets(t).map((t => U `<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`))
                    },
                    recentWalletTemplate() {
                        const t = wo.recentWallet();
                        if (t) return U `<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${Ce(t.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`
                    }
                },
                vo = s `.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
            var fo = Object.defineProperty,
                bo = Object.getOwnPropertyDescriptor;
            let yo = class extends st {
                render() {
                    const {
                        explorerExcludedWalletIds: t,
                        enableExplorer: e
                    } = vt.t0.state, r = "ALL" !== t && e, o = go.manualWalletsTemplate(), i = go.recomendedWalletsTemplate();
                    let a = [go.recentWalletTemplate(), ...o, ...i];
                    a = a.filter(Boolean);
                    const n = a.length > 4 || r;
                    let l = [];
                    l = n ? a.slice(0, 3) : a;
                    const s = Boolean(l.length);
                    return U `<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${dr.handleUriCopy}" .actionIcon="${Fe.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${Fe.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${Fe.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${s?U`<wcm-modal-footer><div class="wcm-desktop-title">${Fe.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${l} ${n?U`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-footer>`:null}`
                }
            };
            yo.styles = [Me.globalCss, vo], yo = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? bo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && fo(e, r, a), a
            })([dt("wcm-desktop-wallet-selection")], yo);
            const xo = s `div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
            var $o = Object.defineProperty,
                Co = Object.getOwnPropertyDescriptor;
            let Ao = class extends st {
                render() {
                    const {
                        termsOfServiceUrl: t,
                        privacyPolicyUrl: e
                    } = vt.t0.state;
                    return t ? ? e ? U `<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t?U`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${t&&e?"and":null} ${e?U`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</wcm-text></div>` : null
                }
            };
            Ao.styles = [Me.globalCss, xo], Ao = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Co(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && $o(e, r, a), a
            })([dt("wcm-legal-notice")], Ao);
            const _o = s `div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
            var ko = Object.defineProperty,
                Oo = Object.getOwnPropertyDescriptor;
            let Eo = class extends st {
                onQrcode() {
                    vt.AV.push("Qrcode")
                }
                render() {
                    const {
                        explorerExcludedWalletIds: t,
                        enableExplorer: e
                    } = vt.t0.state, r = "ALL" !== t && e, o = go.manualWalletsTemplate(), i = go.recomendedWalletsTemplate();
                    let a = [go.recentWalletTemplate(), ...o, ...i];
                    a = a.filter(Boolean);
                    const n = a.length > 8 || r;
                    let l = [];
                    l = n ? a.slice(0, 7) : a;
                    const s = Boolean(l.length);
                    return U `<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${Fe.QRCODE_ICON}"></wcm-modal-header>${s?U`<wcm-modal-content><div>${l} ${n?U`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-content>`:null}`
                }
            };
            Eo.styles = [Me.globalCss, _o], Eo = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Oo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && ko(e, r, a), a
            })([dt("wcm-mobile-wallet-selection")], Eo);
            const Io = s `:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
            var Po = Object.defineProperty,
                Mo = Object.getOwnPropertyDescriptor,
                So = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Mo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Po(e, r, a), a
                };
            let Ro = class extends st {
                constructor() {
                    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = vt.jb.subscribe((t => {
                        t.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeModal) || t.call(this)
                }
                get overlayEl() {
                    return dr.getShadowRootElement(this, ".wcm-overlay")
                }
                get containerEl() {
                    return dr.getShadowRootElement(this, ".wcm-container")
                }
                toggleBodyScroll(t) {
                    if (document.querySelector("body"))
                        if (t) {
                            document.getElementById("wcm-styles") ? .remove()
                        } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                }
                onCloseModal(t) {
                    t.target === t.currentTarget && vt.jb.close()
                }
                onOpenModalEvent() {
                    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout((async () => {
                        const t = dr.isMobileAnimation() ? {
                            y: ["50vh", "0vh"]
                        } : {
                            scale: [.98, 1]
                        };
                        await Promise.all([$e(this.overlayEl, {
                            opacity: [0, 1]
                        }, {
                            delay: .1,
                            duration: .2
                        }).finished, $e(this.containerEl, t, {
                            delay: .1,
                            duration: .2
                        }).finished]), this.active = !0
                    }), 0)
                }
                async onCloseModalEvent() {
                    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
                    const t = dr.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    };
                    await Promise.all([$e(this.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished, $e(this.containerEl, t, {
                        duration: .2
                    }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
                }
                addKeyboardEvents() {
                    this.abortController = new AbortController, window.addEventListener("keydown", (t => {
                        var e;
                        "Escape" === t.key ? vt.jb.close() : "Tab" === t.key && (null != (e = t.target) && e.tagName.includes("wcm-") || this.containerEl.focus())
                    }), this.abortController), this.containerEl.focus()
                }
                removeKeyboardEvents() {
                    var t;
                    null == (t = this.abortController) || t.abort(), this.abortController = void 0
                }
                render() {
                    const t = {
                        "wcm-overlay": !0,
                        "wcm-active": this.active
                    };
                    return U `<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${gt(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open?U`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`:null}</div></div>`
                }
            };
            Ro.styles = [Me.globalCss, Io], So([pt()], Ro.prototype, "open", 2), So([pt()], Ro.prototype, "active", 2), Ro = So([dt("wcm-modal")], Ro);
            const To = s `div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
            var Wo = Object.defineProperty,
                Lo = Object.getOwnPropertyDescriptor,
                jo = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Lo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Wo(e, r, a), a
                };
            let Do = class extends st {
                constructor() {
                    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
                }
                onMobile() {
                    vt.zv.isMobile() ? vt.AV.replace("MobileConnecting") : vt.AV.replace("MobileQrcodeConnecting")
                }
                onDesktop() {
                    vt.AV.replace("DesktopConnecting")
                }
                onWeb() {
                    vt.AV.replace("WebConnecting")
                }
                render() {
                    return U `<div>${this.isRetry?U`<slot></slot>`:null} ${this.isMobile?U`<wcm-button .onClick="${this.onMobile}" .iconLeft="${Fe.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`:null} ${this.isDesktop?U`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${Fe.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`:null} ${this.isWeb?U`<wcm-button .onClick="${this.onWeb}" .iconLeft="${Fe.GLOBE_ICON}" variant="outline">Web</wcm-button>`:null}</div>`
                }
            };
            Do.styles = [Me.globalCss, To], jo([mt({
                type: Boolean
            })], Do.prototype, "isMobile", 2), jo([mt({
                type: Boolean
            })], Do.prototype, "isDesktop", 2), jo([mt({
                type: Boolean
            })], Do.prototype, "isWeb", 2), jo([mt({
                type: Boolean
            })], Do.prototype, "isRetry", 2), Do = jo([dt("wcm-platform-selection")], Do);
            const zo = s `button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var No = Object.defineProperty,
                Uo = Object.getOwnPropertyDescriptor;
            let Ho = class extends st {
                onClick() {
                    vt.AV.push("WalletExplorer")
                }
                render() {
                    const {
                        recomendedWallets: t
                    } = vt.uc.state, e = [...t, ...wo.manualWallets()].reverse().slice(0, 4);
                    return U `<button @click="${this.onClick}"><div class="wcm-icons">${e.map((t=>{const e=dr.getWalletIcon(t);if(e)return U`<img crossorigin="anonymous" src="${e}">`;const r=dr.getWalletIcon({id:t.id});return r?U` < img crossorigin = "anonymous"
                    src = "${r}" > `:Fe.WALLET_PLACEHOLDER}))} ${[...Array(4-e.length)].map((()=>Fe.WALLET_PLACEHOLDER))}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`
                }
            };
            Ho.styles = [Me.globalCss, zo], Ho = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Uo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && No(e, r, a), a
            })([dt("wcm-view-all-wallets-button")], Ho);
            const Bo = s `.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
            var Zo = Object.defineProperty,
                Vo = Object.getOwnPropertyDescriptor,
                Fo = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Vo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Zo(e, r, a), a
                };
            let qo = class extends st {
                constructor() {
                    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout((() => {
                        const {
                            walletConnectUri: t
                        } = vt.zb.state;
                        this.uri = t
                    }), 0)
                }
                get overlayEl() {
                    return dr.getShadowRootElement(this, ".wcm-qr-container")
                }
                render() {
                    return U `<div class="wcm-qr-container">${this.uri?U`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${Ce(this.walletId)}" imageId="${Ce(this.imageId)}"></wcm-qrcode>`:U`<wcm-spinner></wcm-spinner>`}</div>`
                }
            };
            qo.styles = [Me.globalCss, Bo], Fo([mt()], qo.prototype, "walletId", 2), Fo([mt()], qo.prototype, "imageId", 2), Fo([pt()], qo.prototype, "uri", 2), qo = Fo([dt("wcm-walletconnect-qr")], qo);
            var Ko = Object.defineProperty,
                Qo = Object.getOwnPropertyDescriptor;
            let Yo = class extends st {
                viewTemplate() {
                    return vt.zv.isAndroid() ? U `<wcm-android-wallet-selection></wcm-android-wallet-selection>` : vt.zv.isMobile() ? U `<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : U `<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`
                }
                render() {
                    return U `${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`
                }
            };
            Yo.styles = [Me.globalCss], Yo = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? Qo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && Ko(e, r, a), a
            })([dt("wcm-connect-wallet-view")], Yo);
            const Go = s `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var Xo = Object.defineProperty,
                Jo = Object.getOwnPropertyDescriptor,
                ti = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? Jo(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Xo(e, r, a), a
                };
            let ei = class extends st {
                constructor() {
                    super(), this.isError = !1, this.openDesktopApp()
                }
                onFormatAndRedirect(t) {
                    const {
                        desktop: e,
                        name: r
                    } = vt.zv.getWalletRouterData(), o = e ? .native;
                    if (o) {
                        const e = vt.zv.formatNativeUrl(o, t, r);
                        vt.zv.openHref(e, "_self")
                    }
                }
                openDesktopApp() {
                    const {
                        walletConnectUri: t
                    } = vt.zb.state, e = vt.zv.getWalletRouterData();
                    dr.setRecentWallet(e), t && this.onFormatAndRedirect(t)
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: r
                    } = vt.zv.getWalletRouterData(), {
                        isMobile: o,
                        isWeb: i
                    } = dr.getCachedRouterWalletPlatforms();
                    return U `<wcm-modal-header title="${t}" .onAction="${dr.handleUriCopy}" .actionIcon="${Fe.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${Ce(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${Fe.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            ei.styles = [Me.globalCss, Go], ti([pt()], ei.prototype, "isError", 2), ei = ti([dt("wcm-desktop-connecting-view")], ei);
            const ri = s `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
            var oi = Object.defineProperty,
                ii = Object.getOwnPropertyDescriptor;
            let ai = class extends st {
                onInstall(t) {
                    t && vt.zv.openHref(t, "_blank")
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: r,
                        homepage: o
                    } = vt.zv.getWalletRouterData();
                    return U `<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${Ce(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(o)}" .iconLeft="${Fe.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`
                }
            };
            ai.styles = [Me.globalCss, ri], ai = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? ii(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && oi(e, r, a), a
            })([dt("wcm-install-wallet-view")], ai);
            const ni = s `wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
            var li = Object.defineProperty,
                si = Object.getOwnPropertyDescriptor,
                ci = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? si(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && li(e, r, a), a
                };
            let di = class extends st {
                constructor() {
                    super(), this.isError = !1, this.openMobileApp()
                }
                onFormatAndRedirect(t, e = !1) {
                    const {
                        mobile: r,
                        name: o
                    } = vt.zv.getWalletRouterData(), i = r ? .native, a = r ? .universal;
                    if (i && !e) {
                        const e = vt.zv.formatNativeUrl(i, t, o);
                        vt.zv.openHref(e, "_self")
                    } else if (a) {
                        const e = vt.zv.formatUniversalUrl(a, t, o);
                        vt.zv.openHref(e, "_self")
                    }
                }
                openMobileApp(t = !1) {
                    const {
                        walletConnectUri: e
                    } = vt.zb.state, r = vt.zv.getWalletRouterData();
                    dr.setRecentWallet(r), e && this.onFormatAndRedirect(e, t)
                }
                onGoToAppStore(t) {
                    t && vt.zv.openHref(t, "_blank")
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: r,
                        app: o,
                        mobile: i
                    } = vt.zv.getWalletRouterData(), {
                        isWeb: a
                    } = dr.getCachedRouterWalletPlatforms(), n = o ? .ios, l = i ? .universal;
                    return U `<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${Ce(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${a}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${Fe.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${l?U`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>`:null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${Ce(r)}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${Fe.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(n)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`
                }
            };
            di.styles = [Me.globalCss, ni], ci([pt()], di.prototype, "isError", 2), di = ci([dt("wcm-mobile-connecting-view")], di);
            const hi = s `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var mi = Object.defineProperty,
                pi = Object.getOwnPropertyDescriptor;
            let ui = class extends st {
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: r
                    } = vt.zv.getWalletRouterData(), {
                        isDesktop: o,
                        isWeb: i
                    } = dr.getCachedRouterWalletPlatforms();
                    return U `<wcm-modal-header title="${t}" .onAction="${dr.handleUriCopy}" .actionIcon="${Fe.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${Ce(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${o}" .isWeb="${i}"></wcm-platform-selection></wcm-info-footer>`
                }
            };
            ui.styles = [Me.globalCss, hi], ui = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? pi(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && mi(e, r, a), a
            })([dt("wcm-mobile-qr-connecting-view")], ui);
            var wi = Object.defineProperty,
                gi = Object.getOwnPropertyDescriptor;
            let vi = class extends st {
                render() {
                    return U `<wcm-modal-header title="Scan the code" .onAction="${dr.handleUriCopy}" .actionIcon="${Fe.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`
                }
            };
            vi.styles = [Me.globalCss], vi = ((t, e, r, o) => {
                for (var i, a = o > 1 ? void 0 : o ? gi(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                return o && a && wi(e, r, a), a
            })([dt("wcm-qrcode-view")], vi);
            const fi = s `wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
            var bi = Object.defineProperty,
                yi = Object.getOwnPropertyDescriptor,
                xi = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? yi(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && bi(e, r, a), a
                };
            let $i = class extends st {
                constructor() {
                    super(...arguments), this.loading = !vt.uc.state.wallets.listings.length, this.firstFetch = !vt.uc.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = dr.debounce((t => {
                        t.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = t, vt.uc.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), vt.uc.resetSearch())
                    }))
                }
                firstUpdated() {
                    this.createPaginationObserver()
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.intersectionObserver) || t.disconnect()
                }
                get placeholderEl() {
                    return dr.getShadowRootElement(this, ".wcm-placeholder-block")
                }
                createPaginationObserver() {
                    this.intersectionObserver = new IntersectionObserver((([t]) => {
                        t.isIntersecting && (!this.search || !this.firstFetch) && this.fetchWallets()
                    })), this.intersectionObserver.observe(this.placeholderEl)
                }
                isLastPage() {
                    const {
                        wallets: t,
                        search: e
                    } = vt.uc.state, {
                        listings: r,
                        total: o
                    } = this.search ? e : t;
                    return o <= 40 || r.length >= o
                }
                async fetchWallets() {
                    var t;
                    const {
                        wallets: e,
                        search: r
                    } = vt.uc.state, {
                        listings: o,
                        total: i,
                        page: a
                    } = this.search ? r : e;
                    if (!this.endReached && (this.firstFetch || i > 40 && o.length < i)) try {
                        this.loading = !0;
                        const e = null == (t = vt.zb.state.chains) ? void 0 : t.join(","),
                            {
                                listings: r
                            } = await vt.uc.getWallets({
                                page: this.firstFetch ? 1 : a + 1,
                                entries: 40,
                                search: this.search,
                                version: 2,
                                chains: e
                            }),
                            o = r.map((t => dr.getWalletIcon(t)));
                        await Promise.all([...o.map((async t => dr.preloadImage(t))), vt.zv.wait(300)]), this.endReached = this.isLastPage()
                    } catch (s) {
                        console.error(s), vt.Vs.openToast(dr.getErrorMessage(s), "error")
                    } finally {
                        this.loading = !1, this.firstFetch = !1
                    }
                }
                onConnect(t) {
                    vt.zv.isAndroid() ? dr.handleMobileLinking(t) : dr.goToConnectingView(t)
                }
                onSearchChange(t) {
                    const {
                        value: e
                    } = t.target;
                    this.searchDebounce(e)
                }
                render() {
                    const {
                        wallets: t,
                        search: e
                    } = vt.uc.state, {
                        listings: r
                    } = this.search ? e : t, o = this.loading && !r.length, i = this.search.length >= 3;
                    let a = go.manualWalletsTemplate(),
                        n = go.recomendedWalletsTemplate(!0);
                    i && (a = a.filter((({
                        values: t
                    }) => dr.caseSafeIncludes(t[0], this.search))), n = n.filter((({
                        values: t
                    }) => dr.caseSafeIncludes(t[0], this.search))));
                    const l = !this.loading && !r.length && !n.length,
                        s = {
                            "wcm-loading": o,
                            "wcm-end-reached": this.endReached || !this.loading,
                            "wcm-empty": l
                        };
                    return U `<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${gt(s)}"><div class="wcm-grid">${o?null:a} ${o?null:n} ${o?null:r.map((t=>U`${t?U`<wcm-wallet-button imageId="${t.image_id}" name="${t.name}" walletId="${t.id}" .onClick="${()=>this.onConnect(t)}"></wcm-wallet-button>`:null}`))}</div><div class="wcm-placeholder-block">${l?U`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`:null} ${!l&&this.loading?U`<wcm-spinner></wcm-spinner>`:null}</div></wcm-modal-content>`
                }
            };
            $i.styles = [Me.globalCss, fi], xi([pt()], $i.prototype, "loading", 2), xi([pt()], $i.prototype, "firstFetch", 2), xi([pt()], $i.prototype, "search", 2), xi([pt()], $i.prototype, "endReached", 2), $i = xi([dt("wcm-wallet-explorer-view")], $i);
            const Ci = s `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var Ai = Object.defineProperty,
                _i = Object.getOwnPropertyDescriptor,
                ki = (t, e, r, o) => {
                    for (var i, a = o > 1 ? void 0 : o ? _i(e, r) : e, n = t.length - 1; n >= 0; n--)(i = t[n]) && (a = (o ? i(e, r, a) : i(a)) || a);
                    return o && a && Ai(e, r, a), a
                };
            let Oi = class extends st {
                constructor() {
                    super(), this.isError = !1, this.openWebWallet()
                }
                onFormatAndRedirect(t) {
                    const {
                        desktop: e,
                        name: r
                    } = vt.zv.getWalletRouterData(), o = e ? .universal;
                    if (o) {
                        const e = vt.zv.formatUniversalUrl(o, t, r);
                        vt.zv.openHref(e, "_blank")
                    }
                }
                openWebWallet() {
                    const {
                        walletConnectUri: t
                    } = vt.zb.state, e = vt.zv.getWalletRouterData();
                    dr.setRecentWallet(e), t && this.onFormatAndRedirect(t)
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: r
                    } = vt.zv.getWalletRouterData(), {
                        isMobile: o,
                        isDesktop: i
                    } = dr.getCachedRouterWalletPlatforms(), a = vt.zv.isMobile();
                    return U `<wcm-modal-header title="${t}" .onAction="${dr.handleUriCopy}" .actionIcon="${Fe.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${Ce(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isDesktop="${!a&&i}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${Fe.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            Oi.styles = [Me.globalCss, Ci], ki([pt()], Oi.prototype, "isError", 2), Oi = ki([dt("wcm-web-connecting-view")], Oi)
        }
    }
]);