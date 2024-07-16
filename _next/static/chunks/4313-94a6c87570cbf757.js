"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4313], {
        22785: function(n, e, t) {
            var o = t(10253),
                i = t(7297),
                r = t(85893),
                l = t(67294),
                d = t(11752),
                a = t.n(d),
                u = t(52015),
                s = t(43281),
                c = t(86427),
                m = t(50319),
                h = t(68956),
                f = t(74054),
                b = t(30452),
                p = t(38332),
                v = t(28052),
                g = t(56630),
                y = t(97398);

            function x() {
                var n = (0, i.Z)(["\n  &[data-tooltip]:before {\n    margin-left: ", ";\n    width: ", ";\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &[data-tooltip]:before,\n  &[data-tooltip]:after {\n    left: calc(50% + ", ");\n  }\n\n  &[data-tooltip]:after {\n    border-top-color: ", ";\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }
            var _ = u.ZP.div.withConfig({
                    componentId: "sc-a8835801-0"
                })(x(), (0, s.hO)("-66px"), (0, s.hO)("120px"), p.O9.black, p.O9.white, (0, s.hO)("5px"), p.O9.black),
                w = a()().publicRuntimeConfig;
            e.Z = function(n) {
                var e = n.ref,
                    t = n.id,
                    i = n.name,
                    d = n.value,
                    a = n.onError,
                    u = n.onChange,
                    s = (0, v.VY)(),
                    p = (0, g.$G)("alert-messages").t,
                    x = (0, l.useRef)(),
                    I = (0, o.Z)((0, m.D)(h.U), 2),
                    O = I[0],
                    q = I[1].loading,
                    T = function(n) {
                        null === u || void 0 === u || u(i, n.data.upload)
                    },
                    k = function(n) {
                        var e;
                        (0, y.y)(n, {
                            t: p,
                            alert: s
                        }).isApolloError || s.error(p("alert-messages:an_error_happened")), null === a || void 0 === a || a(n), f.Z.send({
                            eventIndex: b.Z.GENERAL_LOG,
                            url: null === window || void 0 === window || null === (e = window.location) || void 0 === e ? void 0 : e.href,
                            error: n
                        })
                    };
                return (0, r.jsxs)(_, {
                    "data-tooltip": ".jpg, .png, .gif, .pdf",
                    children: [(0, r.jsx)(c.zx, {
                        icon: "add",
                        value: d,
                        type: "button",
                        color: "grey400",
                        variant: "outline",
                        loading: q,
                        style: {
                            minWidth: "24px"
                        },
                        action: function() {
                            return function() {
                                var n;
                                null === (n = x.current) || void 0 === n || n.click()
                            }()
                        },
                        rounded: !d
                    }), (0, r.jsx)("input", {
                        id: t,
                        type: "file",
                        name: i,
                        ref: function(n) {
                            x.current = n, null === e || void 0 === e || e(n)
                        },
                        style: {
                            display: "none"
                        },
                        onChange: function(n) {
                            return function(n) {
                                var e = n.target,
                                    t = e.validity,
                                    o = e.files[0];
                                if (t.valid && o) {
                                    if (o.size > w.uploadMaxFileSizeBytes) return void(null === a || void 0 === a || a({
                                        errorKey: "file_upload_error_too_large"
                                    }));
                                    O({
                                        variables: {
                                            file: o
                                        }
                                    }).then(T).catch(k)
                                }
                            }(n)
                        },
                        "aria-label": "File browser example",
                        accept: ".jpg, .jpeg, .png, .gif, .pdf"
                    })]
                })
            }
        },
        10963: function(n, e, t) {
            var o = t(4111),
                i = t(51438),
                r = t(52951),
                l = t(14924),
                d = t(88029),
                a = t(26042),
                u = t(69396),
                s = t(7297),
                c = t(26626),
                m = t(85893),
                h = t(67294),
                f = t(45697),
                b = t.n(f),
                p = t(52015),
                v = t(41313);

            function g() {
                var n = (0, s.Z)(["\n  &.inline {\n    display: flex;\n    > * {\n      flex-basis: 0;\n      flex-grow: 1;\n      max-width: 100%;\n      margin-bottom: 0;\n      &:not(:last-child) {\n        margin-right: 2rem;\n      }\n    }\n  }\n  &.disabled [type='submit'] {\n    pointer-events: none;\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n  ", "\n"]);
                return g = function() {
                    return n
                }, n
            }
            var y = {
                    inline: !1,
                    style: {},
                    mutation: {}
                },
                x = (0, p.ZP)((function(n) {
                    return (0, m.jsx)("form", (0, a.Z)({}, (0, v.Pi)(n, y)))
                })).withConfig({
                    componentId: "sc-e6ed4482-0"
                })(g(), (function(n) {
                    var e = n.style;
                    return (0, v.jW)(e)
                })),
                _ = function(n) {
                    (0, d.Z)(t, n);
                    var e = (0, c.Z)(t);

                    function t() {
                        var n;
                        return (0, i.Z)(this, t), n = e.apply(this, arguments), (0, l.Z)((0, o.Z)(n), "state", {
                            disabled: !0
                        }), (0, l.Z)((0, o.Z)(n), "timeout", void 0), (0, l.Z)((0, o.Z)(n), "submit", (function(e) {
                            e.preventDefault();
                            var t, o = n.props,
                                i = o.noValidate,
                                r = o.onSubmit,
                                l = o.mutation,
                                d = o.apolloclient,
                                a = void 0 === d ? null : d,
                                u = {};
                            i && ((u = (0, v.G$)(null !== (t = e.target) && void 0 !== t ? t : {})).isValid = !Object.keys(u).filter((function(n) {
                                return "danger" === u[n].color
                            })).length);
                            r && (n.timeout && clearTimeout(n.timeout), n.timeout = setTimeout((function() {
                                r(u, l, a)
                            }), 100))
                        })), n
                    }
                    return (0, r.Z)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                disabled: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var n = this.props.className;
                            return (0, m.jsx)(x, (0, u.Z)((0, a.Z)({}, this.props), {
                                className: (0, v.cn)(n, "inline disabled", (0, a.Z)({}, this.props, this.state)),
                                onSubmit: this.submit
                            }))
                        }
                    }]), t
                }(h.PureComponent);
            _.propTypes = {
                inline: b().bool,
                style: b().object,
                onSubmit: b().func,
                noValidate: b().bool,
                className: b().string,
                mutation: b().any,
                apolloclient: b().any
            }, e.Z = _
        },
        75900: function(n, e, t) {
            var o = t(7297),
                i = t(85893),
                r = (t(67294), t(45697)),
                l = t.n(r),
                d = t(52015),
                a = t(43281),
                u = t(38332);

            function s() {
                var n = (0, o.Z)(["\n  color: ", ";\n\n  .html-editor-body {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    margin: 0;\n    line-height: 1.5;\n    word-wrap: break-word;\n  }\n\n  .html-editor-body details,\n  .html-editor-body figcaption,\n  .html-editor-body figure {\n    display: block;\n  }\n\n  .html-editor-body summary {\n    display: list-item;\n  }\n\n  .html-editor-body [hidden] {\n    display: none !important;\n  }\n\n  .html-editor-body a {\n    background-color: transparent;\n    color: ", ";\n    text-decoration: underline;\n  }\n\n  .html-editor-body abbr[title] {\n    border-bottom: none;\n    text-decoration: underline dotted;\n  }\n\n  .html-editor-body b,\n  .html-editor-body strong {\n    font-weight: ", ";\n  }\n\n  .html-editor-body dfn {\n    font-style: italic;\n  }\n\n  .html-editor-body h1 {\n    margin: 0.67rem 0;\n    font-weight: ", ";\n    padding-bottom: 0.3rem;\n    font-size: ", ";\n  }\n\n  .html-editor-body mark {\n    background-color: #fff8c5;\n    color: #24292f;\n  }\n\n  .html-editor-body small {\n    font-size: 90%;\n  }\n\n  .html-editor-body sub,\n  .html-editor-body sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  .html-editor-body sub {\n    bottom: -0.25rem;\n  }\n\n  .html-editor-body sup {\n    top: -0.5rem;\n  }\n\n  .html-editor-body img {\n    border-style: none;\n    max-width: 100%;\n    box-sizing: content-box;\n    background-color: #ffffff;\n  }\n\n  .html-editor-body code,\n  .html-editor-body kbd,\n  .html-editor-body pre,\n  .html-editor-body samp {\n    font-family: monospace;\n    font-size: ", ";\n  }\n\n  .html-editor-body figure {\n    margin: ", " ", ";\n  }\n\n  .html-editor-body hr {\n    box-sizing: content-box;\n    overflow: hidden;\n    background: transparent;\n    border-bottom: 1px solid hsla(210, 18%, 87%, 1);\n    height: 0.25rem;\n    padding: 0;\n    margin: ", " 0;\n    background-color: #d0d7de;\n    border: 0;\n  }\n\n  .html-editor-body a:hover {\n    text-decoration: underline;\n  }\n\n  .html-editor-body hr::before {\n    display: table;\n    content: '';\n  }\n\n  .html-editor-body hr::after {\n    display: table;\n    clear: both;\n    content: '';\n  }\n\n  .html-editor-body table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    display: block;\n    width: max-content;\n    max-width: 100%;\n    overflow: auto;\n  }\n\n  .html-editor-body td,\n  .html-editor-body th {\n    padding: 0;\n  }\n\n  .html-editor-body details summary {\n    cursor: pointer;\n  }\n\n  .html-editor-body details:not([open]) > *:not(summary) {\n    display: none !important;\n  }\n\n  .html-editor-body a:focus {\n    outline: ", " solid #0969da;\n    outline-offset: ", ";\n    box-shadow: none;\n  }\n\n  .html-editor-body a:focus:not(:focus-visible) {\n    outline: solid 1px transparent;\n  }\n\n  .html-editor-body a:focus-visible {\n    outline: ", " solid #0969da;\n    outline-offset: ", ";\n    box-shadow: none;\n  }\n\n  .html-editor-body a:not([class]):focus,\n  .html-editor-body a:not([class]):focus-visible {\n    outline-offset: 0;\n  }\n\n  .html-editor-body kbd {\n    display: inline-block;\n    padding: ", " ", ";\n    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n    line-height: ", ";\n    color: #24292f;\n    vertical-align: middle;\n    background-color: #f6f8fa;\n    border: ", " solid rgba(175, 184, 193, 0.2);\n    border-bottom-color: rgba(175, 184, 193, 0.2);\n    border-radius: ", ";\n    box-shadow: inset 0 ", " 0 rgba(175, 184, 193, 0.2);\n  }\n\n  .html-editor-body h1,\n  .html-editor-body h2,\n  .html-editor-body h3,\n  .html-editor-body h4,\n  .html-editor-body h5,\n  .html-editor-body h6 {\n    margin-top: ", ";\n    margin-bottom: ", ";\n    font-weight: ", ";\n    line-height: 1.25;\n  }\n\n  .html-editor-body h2 {\n    padding-bottom: 0.3rem;\n    font-size: 1.5rem;\n    font-weight: ", ";\n    letter-spacing: normal;\n  }\n\n  .html-editor-body h3 {\n    font-weight: 600;\n    font-size: 1.25rem;\n  }\n\n  .html-editor-body h4 {\n    font-weight: ", ";\n    font-size: 1rem;\n  }\n\n  .html-editor-body h5 {\n    font-weight: ", ";\n    font-size: 0.875rem;\n  }\n\n  .html-editor-body h6 {\n    font-weight: ", ";\n    font-size: 0.85rem;\n    color: #57606a;\n  }\n\n  .html-editor-body p {\n    margin-top: 0;\n    margin-bottom: ", ";\n  }\n\n  .html-editor-body blockquote {\n    margin: 0;\n    padding: 0 1rem;\n    color: #57606a;\n    border-left: 0.25rem solid #d0d7de;\n  }\n\n  .html-editor-body ul,\n  .html-editor-body ol {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-left: 2rem;\n  }\n\n  .html-editor-body ol ol,\n  .html-editor-body ul ol {\n    list-style-type: lower-roman;\n  }\n\n  .html-editor-body ul ul ol,\n  .html-editor-body ul ol ol,\n  .html-editor-body ol ul ol,\n  .html-editor-body ol ol ol {\n    list-style-type: lower-alpha;\n  }\n\n  .html-editor-body dd {\n    margin-left: 0;\n  }\n\n  .html-editor-body tt,\n  .html-editor-body code,\n  .html-editor-body samp {\n    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n    font-size: ", ";\n  }\n\n  .html-editor-body pre {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n    font-size: ", ";\n    word-wrap: normal;\n  }\n\n  .html-editor-body::before {\n    display: table;\n    content: '';\n  }\n\n  .html-editor-body::after {\n    display: table;\n    clear: both;\n    content: '';\n  }\n\n  .html-editor-body .fr-view > div > *:first-child {\n    margin-top: 0 !important;\n  }\n\n  .html-editor-body .fr-view > div > *:last-child {\n    margin-bottom: 0 !important;\n  }\n\n  .html-editor-body a:not([href]) {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .html-editor-body p,\n  .html-editor-body blockquote,\n  .html-editor-body ul,\n  .html-editor-body ol,\n  .html-editor-body dl,\n  .html-editor-body table,\n  .html-editor-body pre,\n  .html-editor-body details {\n    margin-top: 0;\n    margin-bottom: ", ";\n  }\n\n  .html-editor-body blockquote > :first-child {\n    margin-top: 0;\n  }\n\n  .html-editor-body blockquote > :last-child {\n    margin-bottom: 0;\n  }\n\n  .html-editor-body h1 tt,\n  .html-editor-body h1 code,\n  .html-editor-body h2 tt,\n  .html-editor-body h2 code,\n  .html-editor-body h3 tt,\n  .html-editor-body h3 code,\n  .html-editor-body h4 tt,\n  .html-editor-body h4 code,\n  .html-editor-body h5 tt,\n  .html-editor-body h5 code,\n  .html-editor-body h6 tt,\n  .html-editor-body h6 code {\n    padding: 0 0.2rem;\n    font-size: inherit;\n  }\n\n  .html-editor-body summary h1,\n  .html-editor-body summary h2,\n  .html-editor-body summary h3,\n  .html-editor-body summary h4,\n  .html-editor-body summary h5,\n  .html-editor-body summary h6 {\n    display: inline-block;\n  }\n\n  .html-editor-body summary h1,\n  .html-editor-body summary h2 {\n    padding-bottom: 0;\n    border-bottom: 0;\n  }\n\n  .html-editor-body ol[type='a'] {\n    list-style-type: lower-alpha;\n  }\n\n  .html-editor-body ol[type='A'] {\n    list-style-type: upper-alpha;\n  }\n\n  .html-editor-body ol[type='i'] {\n    list-style-type: lower-roman;\n  }\n\n  .html-editor-body ol[type='I'] {\n    list-style-type: upper-roman;\n  }\n\n  .html-editor-body ol[type='1'] {\n    list-style-type: decimal;\n  }\n\n  .html-editor-body div > ol:not([type]) {\n    list-style-type: decimal;\n  }\n\n  .html-editor-body ul ul,\n  .html-editor-body ul ol,\n  .html-editor-body ol ol,\n  .html-editor-body ol ul {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .html-editor-body li {\n    list-style: initial;\n  }\n\n  .html-editor-body li > p {\n    margin-top: 16px;\n  }\n\n  .html-editor-body li + li {\n    margin-top: 0.25rem;\n  }\n\n  .html-editor-body dl {\n    padding: 0;\n  }\n\n  .html-editor-body dl dt {\n    padding: 0;\n    margin-top: ", ";\n    font-size: 1rem;\n    font-style: italic;\n    font-weight: ", ";\n  }\n\n  .html-editor-body dl dd {\n    padding: 0 ", ";\n    margin-bottom: ", ";\n  }\n\n  .html-editor-body table th {\n    font-weight: ", ";\n  }\n\n  .html-editor-body table th,\n  .html-editor-body table td {\n    padding: ", " ", ";\n    border: ", " solid #d0d7de;\n  }\n\n  .html-editor-body table tr {\n    background-color: #ffffff;\n    border-top: ", " solid hsla(210, 18%, 87%, 1);\n  }\n\n  .html-editor-body table tr:nth-child(2n) {\n    background-color: #f6f8fa;\n  }\n\n  .html-editor-body table img {\n    background-color: transparent;\n  }\n\n  .html-editor-body img[align='right'] {\n    padding-left: ", ";\n  }\n\n  .html-editor-body img[align='left'] {\n    padding-right: ", ";\n  }\n\n  .html-editor-body .emoji {\n    max-width: none;\n    vertical-align: text-top;\n    background-color: transparent;\n  }\n\n  .html-editor-body code,\n  .html-editor-body tt {\n    padding: 0.2rem 0.4rem;\n    margin: 0;\n    font-size: 85%;\n    white-space: break-spaces;\n    background-color: rgba(175, 184, 193, 0.2);\n    border-radius: ", ";\n  }\n\n  .html-editor-body code br,\n  .html-editor-body tt br {\n    display: none;\n  }\n\n  .html-editor-body del code {\n    text-decoration: inherit;\n  }\n\n  .html-editor-body samp {\n    font-size: 85%;\n  }\n\n  .html-editor-body pre code {\n    font-size: 100%;\n  }\n\n  .html-editor-body pre > code {\n    padding: 0;\n    margin: 0;\n    word-break: normal;\n    white-space: pre;\n    background: transparent;\n    border: 0;\n  }\n\n  .html-editor-body pre {\n    padding: ", ";\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: #f6f8fa;\n    border-radius: ", ";\n  }\n\n  .html-editor-body pre code,\n  .html-editor-body pre tt {\n    display: inline;\n    max-width: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    line-height: inherit;\n    word-wrap: normal;\n    background-color: transparent;\n    border: 0;\n  }\n\n  .html-editor-body g-emoji {\n    display: inline-block;\n    min-width: 1ch;\n    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n    font-size: 1rem;\n    font-style: normal !important;\n    font-weight: ", ";\n    line-height: 1;\n    vertical-align: -0.075rem;\n  }\n\n  .html-editor-body g-emoji img {\n    width: 1rem;\n    height: 1rem;\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }

            function c() {
                var n = (0, o.Z)(["\n  .fr-wrapper {\n    border-radius: 0 0 ", " ", ";\n    overflow: inherit;\n  }\n\n  .fr-box.fr-basic .fr-element {\n    padding: ", ";\n    font-family: inherit;\n    font-size: ", ";\n    color: inherit;\n    line-height: inherit;\n  }\n"]);
                return c = function() {
                    return n
                }, n
            }
            var m = d.ZP.div.withConfig({
                    componentId: "sc-c5da080a-0"
                })(s(), (function(n) {
                    return n.props.color
                }), u.O9.purple500, u.cp.fontWeigthSemiBold, u.cp.fontWeigthSemiBold, (0, a.hO)("32px"), u.cp.fontSizeRegular, (0, a.hO)("16px"), (0, a.hO)("40px"), (0, a.hO)("24px"), (0, a.hO)("2px"), (0, a.hO)("-2px"), (0, a.hO)("2px"), (0, a.hO)("-2px"), (0, a.hO)("3px"), (0, a.hO)("5px"), (0, a.hO)("10px"), (0, a.hO)("1px"), (0, a.hO)("6px"), (0, a.hO)("-1px"), (0, a.hO)("24px"), (0, a.hO)("16px"), u.cp.fontWeigthSemiBold, u.cp.fontWeigthSemiBold, u.cp.fontWeigthSemiBold, u.cp.fontWeigthSemiBold, u.cp.fontWeigthSemiBold, (0, a.hO)("10px"), (0, a.hO)("12px"), (0, a.hO)("12px"), (0, a.hO)("16px"), (0, a.hO)("16px"), u.cp.fontWeigthSemiBold, (0, a.hO)("16px"), (0, a.hO)("16px"), u.cp.fontWeigthSemiBold, (0, a.hO)("6px"), (0, a.hO)("13px"), (0, a.hO)("1px"), (0, a.hO)("1px"), (0, a.hO)("20px"), (0, a.hO)("20px"), (0, a.hO)("6px"), (0, a.hO)("16px"), (0, a.hO)("6px"), u.cp.fontWeigthRegular),
                h = d.ZP.div.withConfig({
                    componentId: "sc-c5da080a-1"
                })(c(), (0, a.hO)("6px"), (0, a.hO)("6px"), (0, a.hO)("24px"), u.cp.fontSizeRegular),
                f = function(n) {
                    var e = n.value,
                        t = n.color;
                    return (0, i.jsx)(m, {
                        props: {
                            color: t
                        },
                        children: (0, i.jsx)("div", {
                            className: "html-editor-body",
                            children: (0, i.jsx)("div", {
                                className: "fr-view",
                                children: (0, i.jsx)(h, {
                                    dangerouslySetInnerHTML: {
                                        __html: e
                                    }
                                })
                            })
                        })
                    })
                };
            f.propTypes = {
                value: l().string.isRequired,
                color: l().string
            }, e.Z = f
        },
        91662: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return W
                }
            });
            var o = t(47568),
                i = t(14924),
                r = t(26042),
                l = t(69396),
                d = t(10253),
                a = t(7297),
                u = t(29815),
                s = t(97582),
                c = t(85893),
                m = t(67294),
                h = t(45697),
                f = t.n(h),
                b = t(52015),
                p = t(43281),
                v = t(38332),
                g = t(48966),
                y = t.n(g),
                x = t(28155),
                _ = t(86427),
                w = t(75900),
                I = t(22785),
                O = t(56630),
                q = t(37887),
                T = t(29309),
                k = t(69718),
                Z = t(50319),
                C = t(31230);

            function j() {
                var n = (0, a.Z)(["\n  mutation SUBMIT_INTERNAL_FORM_MUTATION(\n    $id: ID!\n    $data: FormSubmissionInputData!\n    $token: String\n  ) {\n    submitForm(id: $id, data: $data, token: $token) {\n      id\n      user {\n        id\n        username\n      }\n    }\n  }\n"]);
                return j = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, a.Z)(["\n  mutation UPDATE_INTERNAL_FORM_MUTATION($id: ID!, $data: FormSubmissionInputData!) {\n    updateFormSubmission(id: $id, data: $data) {\n      id\n      user {\n        id\n        username\n      }\n    }\n  }\n"]);
                return S = function() {
                    return n
                }, n
            }
            var E = (0, C.Ps)(j()),
                R = (0, C.Ps)(S()),
                N = t(41313),
                M = t(90103),
                F = t(28052),
                P = t(97398);

            function U() {
                var n = (0, a.Z)(["\n  > div {\n    width: 100%;\n\n    input,\n    select {\n      width: 100%;\n    }\n\n    .select-interactive {\n      z-index: 3;\n    }\n\n    .radio-group {\n      position: relative;\n      z-index: 0;\n    }\n  }\n"]);
                return U = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, a.Z)(["\n  .upload-error {\n    display: inline-block;\n    margin-top: ", ";\n    color: ", ";\n  }\n\n  .file-name {\n    display: inline-block;\n    margin-bottom: ", ";\n  }\n"]);
                return L = function() {
                    return n
                }, n
            }
            var $ = b.ZP.div.withConfig({
                    componentId: "sc-e9b93d40-0"
                })(U()),
                z = b.ZP.div.withConfig({
                    componentId: "sc-e9b93d40-1"
                })(L(), (0, p.hO)("5px"), v.O9.red500, (0, p.hO)("5px")),
                D = t(30381),
                A = D().subtract(10, "years").format("YYYY-MM-DD"),
                B = function(n) {
                    var e, t, a, h, f, b, p, v, g, C = (0, O.$G)(["challenges", "form-messages", "common", "countries", "job-titles"]).t,
                        j = n.id,
                        S = n.userData,
                        U = n.formSubmission,
                        L = void 0 === U ? [] : U,
                        B = n.onSubmitForm,
                        W = n.onCancel,
                        Y = null === (e = L[0]) || void 0 === e ? void 0 : e.id,
                        V = null === (t = L[0]) || void 0 === t ? void 0 : t.answers,
                        G = null !== S && void 0 !== S ? S : {},
                        H = G.fullName,
                        J = G.city,
                        X = G.country,
                        K = G.gender,
                        Q = G.birthDate,
                        nn = G.email,
                        en = G.phoneNumber,
                        tn = G.jobTitle,
                        on = G.twitterUrl,
                        rn = G.githubUrl,
                        ln = G.linkedInUrl,
                        dn = G.facebookUrl,
                        an = G.instagramUrl,
                        un = G.homepage,
                        sn = (0, F.VY)(),
                        cn = (0, O.$G)(["form-messages"]).i18n.lang,
                        mn = void 0 === cn ? "en" : cn,
                        hn = (0, m.useState)([]),
                        fn = hn[0],
                        bn = hn[1],
                        pn = (0, m.useState)({}),
                        vn = pn[0],
                        gn = pn[1],
                        yn = (0, m.useState)(!1),
                        xn = yn[0],
                        _n = yn[1],
                        wn = (0, x.Z)(360, {
                            formId: j
                        }).data,
                        In = null !== (a = null === V || void 0 === V ? void 0 : V.find((function(n) {
                            return "user_country" === n.question.reference
                        }))) && void 0 !== a ? a : {},
                        On = (0, m.useState)(null !== (h = In.shortText) && void 0 !== h ? h : X),
                        qn = On[0],
                        Tn = On[1],
                        kn = null !== (f = null === V || void 0 === V ? void 0 : V.find((function(n) {
                            return "user_gender" === n.question.reference
                        }))) && void 0 !== f ? f : {},
                        Zn = (0, m.useState)(null !== (b = null === kn || void 0 === kn ? void 0 : kn.singleChoice) && void 0 !== b ? b : K),
                        Cn = (Zn[0], Zn[1]),
                        jn = null !== (p = null === V || void 0 === V ? void 0 : V.find((function(n) {
                            return "user_birthDate" === n.question.reference
                        }))) && void 0 !== p ? p : {},
                        Sn = (0, m.useState)(D(null !== (v = jn.date) && void 0 !== v ? v : Q).format("YYYY-MM-DD")),
                        En = Sn[0],
                        Rn = Sn[1],
                        Nn = null !== (g = null === V || void 0 === V ? void 0 : V.find((function(n) {
                            return "user_jobTitle" === n.question.reference
                        }))) && void 0 !== g ? g : {},
                        Mn = function(n) {
                            var e, t, o, i, r = n.id,
                                l = (0, q.a)(T.o, {
                                    variables: {
                                        id: r
                                    }
                                }),
                                d = l.data,
                                a = l.loading,
                                s = l.error,
                                c = (0, u.Z)(null !== (o = null === d || void 0 === d || null === (e = d.form) || void 0 === e ? void 0 : e.questions) && void 0 !== o ? o : []);
                            return {
                                isPublic: null !== (i = null === d || void 0 === d || null === (t = d.form) || void 0 === t ? void 0 : t.isPublic) && void 0 !== i && i,
                                questions: null === c || void 0 === c ? void 0 : c.sort((function(n, e) {
                                    return n.order > e.order ? 1 : -1
                                })),
                                loading: a,
                                error: s
                            }
                        }({
                            id: j,
                            userData: S
                        }),
                        Fn = Mn.isPublic,
                        Pn = Mn.questions,
                        Un = Mn.loading,
                        Ln = Mn.error,
                        $n = function() {
                            var n = (0, o.Z)((function(n) {
                                return (0, s.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, B(n)];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                }))
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        zn = function() {
                            var n = (0, o.Z)((function(n) {
                                var e, t, o, a, u, c, m;
                                return (0, s.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return sn.error(C("error_registration")), e = (0, P.y)(n, {
                                                t: C,
                                                alert: sn,
                                                excludedErrorCodes: ["E17", "E485"]
                                            }), e.errorCodes, t = e.extensions, o = e.errors, a = null === t || void 0 === t ? void 0 : t.$answer, u = null === t || void 0 === t ? void 0 : t.questionId, a && u && (c = (0, d.Z)(o.filter((function(n) {
                                                return n.code === a
                                            })), 1), m = c[0], gn((function(n) {
                                                return (0, l.Z)((0, r.Z)({}, n), (0, i.Z)({}, u, m.translatedMessage))
                                            }))), [4, null === B || void 0 === B ? void 0 : B(n)];
                                        case 1:
                                            return s.sent(), [2]
                                    }
                                }))
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        Dn = (0, d.Z)(function(n, e, t, i) {
                            var r = t.onSubmit,
                                l = t.onError,
                                a = t.extraParams,
                                u = (0, d.Z)((0, Z.D)(E, {
                                    variables: {
                                        id: n,
                                        token: i,
                                        data: {
                                            extraParams: a,
                                            answers: e
                                        }
                                    },
                                    onCompleted: function(n) {
                                        n && n.submitForm && ((n.submitForm || {}).id ? r(n.submitForm) : l(new Error("Failed")))
                                    },
                                    onError: function() {
                                        var n = (0, o.Z)((function(n) {
                                            return (0, s.__generator)(this, (function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return [4, l(n)];
                                                    case 1:
                                                        return e.sent(), [2]
                                                }
                                            }))
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments)
                                        }
                                    }()
                                }), 2);
                            return [u[0], u[1].loading]
                        }(j, fn, {
                            onSubmit: $n,
                            onError: zn,
                            extraParams: n.extraParams
                        }, Fn ? wn : null), 2),
                        An = Dn[0],
                        Bn = Dn[1],
                        Wn = (0, d.Z)(function(n, e, t) {
                            var o = t.onSubmit,
                                i = t.onError,
                                r = (0, d.Z)((0, Z.D)(R, {
                                    variables: {
                                        id: n,
                                        data: {
                                            answers: e
                                        }
                                    },
                                    onCompleted: function(n) {
                                        n && n.updateFormSubmission && ((n.updateFormSubmission || {}).id ? o(n.updateFormSubmission) : i(new Error("Failed")))
                                    },
                                    onError: function(n) {
                                        i(n)
                                    }
                                }), 2);
                            return [r[0], r[1].loading]
                        }(Y, fn, {
                            onSubmit: $n,
                            onError: zn
                        }), 2),
                        Yn = Wn[0],
                        Vn = Wn[1];
                    if ((0, m.useEffect)((function() {
                            if (Pn.length > 0 && 0 == fn.length) {
                                var n, e, t, o, d, a, u, s, c, m, h = Pn.map((function(n) {
                                        return {
                                            questionId: n.id,
                                            shortText: "user_fullName" === n.reference ? H : "user_city" === n.reference ? J : "user_jobTitle" === n.reference ? "en" === mn ? null === tn || void 0 === tn ? void 0 : tn.title : null === tn || void 0 === tn ? void 0 : tn.title_br : "user_country" === n.reference ? X : "",
                                            longText: "",
                                            email: "EMAIL" === n.type && "user_email" === n.reference ? nn : "",
                                            phoneNumber: "PHONE_NUMBER" === n.type ? en : "",
                                            multipleChoice: [],
                                            singleChoice: "user_gender" === n.reference ? K : "",
                                            date: "user_birthDate" === n.reference ? Q : null,
                                            number: null,
                                            url: "user_twitterUrl" === n.reference ? on : "user_githubUrl" === n.reference ? rn : "user_linkedInUrl" === n.reference ? ln : "user_facebookUrl" === n.reference ? dn : "user_instagramUrl" === n.reference ? an : "user_homepage" === n.reference ? un : "",
                                            fileId: ""
                                        }
                                    })),
                                    f = Pn.map((function(i) {
                                        var r, l, h, f, b, p, v, g, y, x, _;
                                        return {
                                            questionId: i.id,
                                            shortText: null !== (n = null === (r = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === r ? void 0 : r.shortText) && void 0 !== n ? n : "",
                                            longText: null !== (e = null === (l = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === l ? void 0 : l.longText) && void 0 !== e ? e : "",
                                            email: null !== (t = null === (h = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === h ? void 0 : h.email) && void 0 !== t ? t : "",
                                            phoneNumber: null !== (o = null === (f = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === f ? void 0 : f.phoneNumber) && void 0 !== o ? o : "",
                                            multipleChoice: null !== (d = null === (b = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === b ? void 0 : b.multipleChoice) && void 0 !== d ? d : [],
                                            singleChoice: null !== (a = null === (p = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === p ? void 0 : p.singleChoice) && void 0 !== a ? a : "",
                                            date: null !== (u = null === (v = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === v ? void 0 : v.date) && void 0 !== u ? u : null,
                                            number: null !== (s = null === (g = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === g ? void 0 : g.number) && void 0 !== s ? s : null,
                                            url: null !== (c = null === (y = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === y ? void 0 : y.url) && void 0 !== c ? c : "",
                                            fileId: null !== (m = null === (x = null === V || void 0 === V ? void 0 : V.find((function(n) {
                                                return n.question.id === i.id
                                            }))) || void 0 === x || null === (_ = x.file) || void 0 === _ ? void 0 : _.id) && void 0 !== m ? m : ""
                                        }
                                    }));
                                bn(V ? f : h), gn(V ? Pn.reduce((function(n, e, t) {
                                    var o = Xn(e, f[t]);
                                    return (0, l.Z)((0, r.Z)({}, n), (0, i.Z)({}, e.id, o))
                                }), {}) : Pn.reduce((function(n, e, t) {
                                    var o = Xn(e, h[t]);
                                    return (0, l.Z)((0, r.Z)({}, n), (0, i.Z)({}, e.id, o))
                                }), {}))
                            }
                        }), [fn.length, Pn, H, Q, K, nn, J, X, tn, en, on, rn, ln, dn, an, un, V]), Un) return (0, c.jsx)(_.Gu, {
                        lines: 10
                    });
                    if (Ln || !Pn) return console.error("INTERNAL_FORM_QUERY error: ", Ln), (0, c.jsx)(_.jj, {
                        variant: "minimal",
                        value: C("challenges:ops_error")
                    });
                    var Gn, Hn = (0, k.L)(C),
                        Jn = (0, d.Z)(Hn.filter((function(n) {
                            return n.value === qn
                        })), 1)[0],
                        Xn = function(n, e) {
                            var t = "",
                                o = C("form-messages:error.required");
                            switch (n.type) {
                                case "SHORT_TEXT":
                                    t = n.isRequired && !e.shortText ? o : "";
                                    break;
                                case "LONG_TEXT":
                                    t = n.isRequired && !e.longText ? o : "";
                                    break;
                                case "EMAIL":
                                    t = !n.isRequired || e.email && y().isEmail(e.email) ? "" : C("form-messages:error.invalid_email");
                                    break;
                                case "PHONE_NUMBER":
                                    t = n.isRequired && !e.phoneNumber ? o : "";
                                    break;
                                case "MULTIPLE_CHOICE":
                                    t = !n.isRequired || e.multipleChoice && 0 != e.multipleChoice.length ? "" : o;
                                    break;
                                case "SINGLE_CHOICE":
                                    t = !n.isRequired || e.singleChoice && 0 != e.singleChoice.length ? "" : o;
                                    break;
                                case "FILE_UPLOAD":
                                    t = n.isRequired && !e.fileId ? o : "";
                                    break;
                                case "DATE":
                                    t = n.isRequired && !e.date ? o : "";
                                    break;
                                case "NUMBER":
                                    t = n.isRequired && !e.number ? o : "";
                                    break;
                                case "URL":
                                    t = n.isRequired && !(0, N._r)(e.url) ? C("form-messages:error.invalid_url") : ""
                            }
                            return t
                        },
                        Kn = function(n, e) {
                            var t = (0, u.Z)(fn);
                            t[e] = n, bn(t);
                            var o = Pn[e],
                                i = (0, r.Z)({}, vn);
                            i[n.questionId] = Xn(o, n), gn(i)
                        };
                    return (0, c.jsxs)($, {
                        children: [Array.isArray(fn) && fn.length > 0 && Pn.map((function(n, e) {
                            switch (n.type) {
                                case "SHORT_TEXT":
                                    var t, o, i, r;
                                    Gn = "user_country" === n.reference ? (0, c.jsx)(_.vz, {
                                        multi: !1,
                                        search: !0,
                                        error: xn && vn[n.id],
                                        placeholder: "Country",
                                        value: Jn,
                                        options: Hn,
                                        onChange: function(t) {
                                            var o;
                                            Tn(t), Kn({
                                                questionId: n.id,
                                                shortText: null !== (o = null === t || void 0 === t ? void 0 : t.value) && void 0 !== o ? o : ""
                                            }, e)
                                        }
                                    }) : "user_jobTitle" === n.reference ? (0, c.jsx)(M.Z, {
                                        error: xn && vn[n.id],
                                        jobTitle: null !== (t = null === Nn || void 0 === Nn ? void 0 : Nn.shortText) && void 0 !== t ? t : tn,
                                        onChange: function(t) {
                                            return Kn({
                                                questionId: n.id,
                                                shortText: null !== (o = null === t || void 0 === t ? void 0 : t.label) && void 0 !== o ? o : ""
                                            }, e)
                                        }
                                    }) : (0, c.jsx)(_.nv, {
                                        type: "text",
                                        name: n.id,
                                        error: xn && vn[n.id],
                                        defaultValue: "user_fullName" === n.reference || "user_city" === n.reference ? fn[e].shortText : null !== (r = null !== (i = null === V || void 0 === V ? void 0 : V.find((function(e) {
                                            return e.question.id === n.id
                                        })).shortText) && void 0 !== i ? i : "") && void 0 !== r ? r : "",
                                        onChange: function(t) {
                                            var o, i, r = null !== (i = null === t || void 0 === t || null === (o = t.target) || void 0 === o ? void 0 : o.value.trim()) && void 0 !== i ? i : "";
                                            Kn({
                                                questionId: n.id,
                                                shortText: r
                                            }, e)
                                        },
                                        required: n.isRequired
                                    });
                                    break;
                                case "LONG_TEXT":
                                    var l, d, a;
                                    Gn = (0, c.jsx)(_.Kx, {
                                        name: n.id,
                                        defaultValue: null !== (a = null === (l = null === V || void 0 === V ? void 0 : V.find((function(e) {
                                            return e.question.id === n.id
                                        }))) || void 0 === l ? void 0 : l.longText) && void 0 !== a ? a : "",
                                        maxlength: 200,
                                        charactersCount: 200 - (null === (d = fn.find((function(e) {
                                            return e.questionId === n.id
                                        }))) || void 0 === d ? void 0 : d.longText.length),
                                        error: xn && vn[n.id],
                                        onChange: function(t) {
                                            Kn({
                                                questionId: n.id,
                                                longText: t.target.value.trim()
                                            }, e)
                                        },
                                        required: n.isRequired
                                    });
                                    break;
                                case "SINGLE_CHOICE":
                                    Gn = "user_gender" === n.reference ? (0, c.jsx)(_.Ph, {
                                        error: xn && vn[n.id],
                                        placeholder: "-----",
                                        defaultValue: fn[e].singleChoice,
                                        options: n.choices.map((function(n) {
                                            return {
                                                value: n,
                                                name: n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
                                            }
                                        })),
                                        onChange: function(t) {
                                            Cn(t.target.value), Kn({
                                                questionId: n.id,
                                                singleChoice: t.target.value
                                            }, e)
                                        }
                                    }) : (0, c.jsx)(_.Ph, {
                                        error: xn && vn[n.id],
                                        placeholder: "-----",
                                        defaultValue: fn[e].singleChoice,
                                        options: n.choices.map((function(n) {
                                            return {
                                                value: n,
                                                name: n
                                            }
                                        })),
                                        onChange: function(t) {
                                            Kn({
                                                questionId: n.id,
                                                singleChoice: t.target.value
                                            }, e)
                                        }
                                    });
                                    break;
                                case "MULTIPLE_CHOICE":
                                    Gn = (0, c.jsx)(_.cO, {
                                        type: "column",
                                        children: n.choices.map((function(t, o) {
                                            return (0, c.jsx)("li", {
                                                children: (0, c.jsx)(_.XZ, {
                                                    error: xn && vn[n.id],
                                                    label: t,
                                                    value: t,
                                                    checked: fn[e].multipleChoice.includes(t),
                                                    onChange: function(t) {
                                                        var o = fn[e].multipleChoice,
                                                            i = t.target;
                                                        if (!i.checked || o.includes(i.name)) {
                                                            if (!i.checked && o.includes(i.name)) {
                                                                var r = o.filter((function(n) {
                                                                    return n !== i.name
                                                                }));
                                                                Kn({
                                                                    questionId: n.id,
                                                                    multipleChoice: r
                                                                }, e)
                                                            }
                                                        } else Kn({
                                                            questionId: n.id,
                                                            multipleChoice: o.concat(i.name)
                                                        }, e)
                                                    }
                                                })
                                            }, o)
                                        }))
                                    });
                                    break;
                                case "EMAIL":
                                    Gn = (0, c.jsx)(_.nv, {
                                        type: "email",
                                        name: n.id,
                                        error: xn && vn[n.id],
                                        defaultValue: "EMAIL" === n.type ? fn[e].email : "",
                                        onChange: function(t) {
                                            Kn({
                                                questionId: n.id,
                                                email: t.target.value.trim()
                                            }, e)
                                        },
                                        required: n.isRequired
                                    });
                                    break;
                                case "NUMBER":
                                    Gn = (0, c.jsx)(_.nv, {
                                        type: "number",
                                        name: n.id,
                                        error: xn && vn[n.id],
                                        defaultValue: "NUMBER" === n.type ? fn[e].number : "",
                                        onChange: function(t) {
                                            Kn({
                                                questionId: n.id,
                                                number: parseFloat(t.target.value.trim())
                                            }, e)
                                        },
                                        required: n.isRequired
                                    });
                                    break;
                                case "URL":
                                    var u;
                                    Gn = (0, c.jsx)(_.nv, {
                                        type: "url",
                                        error: xn && vn[n.id],
                                        name: n.id,
                                        defaultValue: "user_twitter" === n.reference || "user_github" === n.reference || "user_linkedIn" === n.reference || "user_facebook" === n.reference || "user_instagram" === n.reference || "user_homePage" === n.reference ? fn[e].url : null !== (u = fn[e].url) && void 0 !== u ? u : "",
                                        onChange: function(t) {
                                            Kn({
                                                questionId: n.id,
                                                url: t.target.value.trim()
                                            }, e)
                                        },
                                        required: n.isRequired
                                    });
                                    break;
                                case "PHONE_NUMBER":
                                    Gn = (0, c.jsx)(_.nv, {
                                        type: "text",
                                        name: n.id,
                                        error: xn && vn[n.id],
                                        defaultValue: "PHONE_NUMBER" === n.type ? fn[e].phoneNumber : "",
                                        onChange: function(t) {
                                            Kn({
                                                questionId: n.id,
                                                phoneNumber: t.target.value.trim()
                                            }, e)
                                        },
                                        required: n.isRequired
                                    });
                                    break;
                                case "DATE":
                                    var s;
                                    Gn = (0, c.jsx)(_.nv, {
                                        max: A,
                                        type: "date",
                                        name: n.id,
                                        error: xn && vn[n.id],
                                        defaultValue: "user_birthDate" === n.reference ? En : null !== (s = D(fn[e].date).format("YYYY-MM-DD")) && void 0 !== s ? s : "",
                                        onChange: function(t) {
                                            "user_birthDate" === n.reference && Rn(D.utc(t.target.value.trim()).toISOString(!0)), Kn({
                                                questionId: n.id,
                                                date: D.utc(t.target.value.trim()).toISOString(!0)
                                            }, e)
                                        },
                                        required: n.isRequired
                                    });
                                    break;
                                case "FILE_UPLOAD":
                                    var m, h, f;
                                    Gn = (0, c.jsx)(z, {
                                        children: fn[e].fileId && "" !== fn[e].fileId ? (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)("span", {
                                                className: "file-name",
                                                children: null !== (f = null === (m = null === V || void 0 === V ? void 0 : V.find((function(e) {
                                                    return e.question.id === n.id
                                                }))) || void 0 === m || null === (h = m.file) || void 0 === h ? void 0 : h.originalFileName) && void 0 !== f ? f : fn[e].shortText
                                            }), (0, c.jsx)(_.zx, {
                                                variant: "outline",
                                                color: "red500",
                                                icon: "delete",
                                                value: "Delete",
                                                action: function() {
                                                    Kn({
                                                        questionId: n.id,
                                                        fileId: ""
                                                    }, e)
                                                }
                                            })]
                                        }) : (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)(I.Z, {
                                                name: "upload-file",
                                                value: "Select File",
                                                onChange: function(t, o) {
                                                    Kn({
                                                        questionId: n.id,
                                                        shortText: o.originalFileName,
                                                        fileId: o.id
                                                    }, e)
                                                },
                                                onError: function() {
                                                    Kn({
                                                        questionId: n.id,
                                                        shortText: C("challenges:ops_error")
                                                    }, e)
                                                }
                                            }), fn[e].shortText && (0, c.jsx)("span", {
                                                className: "upload-error",
                                                children: fn[e].shortText
                                            })]
                                        })
                                    });
                                    break;
                                case "STATEMENT":
                                    Gn = (0, c.jsx)(w.Z, {
                                        value: n.description
                                    });
                                    break;
                                default:
                                    Gn = (0, c.jsx)(_.nv, {
                                        type: "text",
                                        error: xn && vn[n.id],
                                        name: n.id,
                                        onChange: function(t) {
                                            Kn({
                                                questionId: n.id,
                                                shortText: t.target.value.trim()
                                            }, e)
                                        },
                                        required: n.isRequired
                                    })
                            }
                            return (0, c.jsx)(_.cw, {
                                error: xn && vn[n.id],
                                label: "".concat(n.title).concat(n.isRequired ? "*" : ""),
                                children: Gn
                            }, n.id)
                        })), (0, c.jsx)(_.mz, {
                            closeValue: C("common:cancel"),
                            closeAction: W,
                            children: (0, c.jsx)(_.zx, {
                                type: "button",
                                loading: Bn || Vn,
                                disabled: xn && Object.values(vn).some((function(n) {
                                    return n.length > 0
                                })) || Bn || Vn,
                                value: C(V ? "common:update" : "common:submit"),
                                action: function() {
                                    xn || _n(!0), Object.values(vn).every((function(n) {
                                        return "" === n
                                    })) && (V ? Yn() : An())
                                }
                            })
                        })]
                    })
                };
            B.propTypes = {
                id: f().string,
                userData: f().object,
                formSubmission: f().array,
                onCancel: f().func,
                onSubmitForm: f().func,
                extraParams: f().object
            };
            var W = B
        },
        90103: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return x
                }
            });
            var o = t(26042),
                i = t(69396),
                r = t(99534),
                l = t(10253),
                d = t(85893),
                a = t(67294),
                u = t(56630),
                s = t(37887),
                c = t(91296),
                m = t.n(c),
                h = t(74054),
                f = t(30452),
                b = t(7297);

            function p() {
                var n = (0, b.Z)(["\n  query JOB_TITLES(\n    $page: Int\n    $perPage: Int\n    $where: JobTitleWhereInput\n    $orderBy: JobTitleOrderByWithRelationInput\n  ) {\n    jobTitles(where: $where, page: $page, orderBy: $orderBy, perPage: $perPage) {\n      id\n      title\n      title_br\n      description\n      description_br\n      createdAt\n      updatedAt\n    }\n  }\n"]);
                return p = function() {
                    return n
                }, n
            }
            var v = (0, t(31230).Ps)(p()),
                g = t(86427),
                y = t(64572),
                x = function(n) {
                    var e, t, c = n.jobTitle,
                        b = n.onChange,
                        p = (0, r.Z)(n, ["jobTitle", "onChange"]),
                        x = (0, u.$G)("user"),
                        _ = x.t,
                        w = x.i18n.language,
                        I = void 0 === w ? "en" : w,
                        O = (0, a.useRef)(0),
                        q = (0, a.useState)(null),
                        T = q[0],
                        k = q[1],
                        Z = (0, a.useState)(void 0),
                        C = Z[0],
                        j = Z[1],
                        S = m()((function(n, e) {
                            e(n)
                        }), 350),
                        E = (0, s.a)(v, {
                            variables: {
                                page: 0,
                                perPage: 300,
                                where: (0, o.Z)({}, T && {
                                    OR: [{
                                        title: {
                                            contains: T,
                                            mode: y.nJO.insensitive
                                        }
                                    }, {
                                        title_br: {
                                            contains: T,
                                            mode: y.nJO.insensitive
                                        }
                                    }]
                                })
                            },
                            onCompleted: function() {
                                O.current = O.current + 1
                            }
                        }),
                        R = E.data,
                        N = E.error;
                    return (0, a.useEffect)((function() {
                        if (c)
                            if ("string" === typeof c) {
                                if (O.current <= 1 && (null === R || void 0 === R ? void 0 : R.jobTitles)) {
                                    var n = (0, l.Z)(null === R || void 0 === R ? void 0 : R.jobTitles.filter((function(n) {
                                        if (c === n.title || c === n.title_br) return n
                                    })), 1)[0];
                                    j(n ? {
                                        value: n.id,
                                        label: "en" === I ? n.title : n.title_br ? n.title_br : n.title
                                    } : void 0)
                                }
                            } else j({
                                value: c.id,
                                label: "en" === I ? c.title : c.title_br ? c.title_br : c.title
                            })
                    }), [R, c, I]), N ? (h.Z.send({
                        eventIndex: f.Z.GENERAL_LOG,
                        url: null === window || void 0 === window || null === (e = window.location) || void 0 === e ? void 0 : e.href,
                        error: N
                    }), (0, d.jsx)(d.Fragment, {})) : (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(g.vz, (0, i.Z)((0, o.Z)({}, p), {
                            multi: !1,
                            search: !0,
                            placeholder: _("job_title_label"),
                            onChange: function(n) {
                                j(n), b(n)
                            },
                            onInputChange: function(n) {
                                return S(n, k)
                            },
                            value: C,
                            options: (null !== (t = null === R || void 0 === R ? void 0 : R.jobTitles) && void 0 !== t ? t : []).map((function(n) {
                                return {
                                    value: n.id,
                                    label: "en" === I ? n.title : n.title_br ? n.title_br : n.title
                                }
                            }))
                        }))
                    })
                }
        },
        68956: function(n, e, t) {
            t.d(e, {
                U: function() {
                    return r
                }
            });
            var o = t(7297);

            function i() {
                var n = (0, o.Z)(["\n  mutation UPLOAD_FILE_MUTATION($file: Upload!) {\n    upload(file: $file) {\n      id\n      url\n      originalFileName\n      name\n      mimetype\n      encoding\n      metadata\n    }\n  }\n"]);
                return i = function() {
                    return n
                }, n
            }
            var r = (0, t(31230).Ps)(i())
        },
        29309: function(n, e, t) {
            t.d(e, {
                l: function() {
                    return a
                },
                o: function() {
                    return d
                }
            });
            var o = t(7297),
                i = t(31230);

            function r() {
                var n = (0, o.Z)(["\n  query INTERNAL_FORM_QUERY($id: ID!) {\n    form(id: $id) {\n      id\n      isPublic\n      questions {\n        id\n        title\n        description\n        type\n        choices\n        reference\n        order\n        isRequired\n      }\n    }\n  }\n"]);
                return r = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, o.Z)(["\n  query INTERNAL_FORM_SUBMISSIONS($form: FormWhereInput, $user: UserWhereInput) {\n    formSubmissions(where: { form: $form, user: $user }, orderBy: { createdAt: desc }) {\n      id\n      answers {\n        id\n        question {\n          id\n          title\n          reference\n        }\n        shortText\n        longText\n        email\n        phoneNumber\n        singleChoice\n        multipleChoice\n        url\n        file {\n          id\n          url\n          originalFileName\n          name\n        }\n        date\n        number\n      }\n      user {\n        id\n        username\n      }\n    }\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }
            var d = (0, i.Ps)(r()),
                a = (0, i.Ps)(l())
        },
        28155: function(n, e, t) {
            var o = t(10253),
                i = t(7297),
                r = t(31230),
                l = t(50319),
                d = t(67294);

            function a() {
                var n = (0, i.Z)(["\n  mutation createSignedToken($expiresInSec: Int, $data: Json) {\n    createSignedToken(expiresInSec: $expiresInSec, data: $data)\n  }\n"]);
                return a = function() {
                    return n
                }, n
            }
            var u = (0, r.Ps)(a());
            e.Z = function(n, e) {
                var t, i = (0, o.Z)((0, l.D)(u, {}), 2),
                    r = i[0],
                    a = i[1],
                    s = a.data,
                    c = a.loading,
                    m = a.error;
                return (0, d.useEffect)((function() {
                    r({
                        variables: {
                            expiresInSec: n,
                            data: e
                        }
                    })
                }), []), {
                    data: null !== (t = null === s || void 0 === s ? void 0 : s.createSignedToken) && void 0 !== t ? t : null,
                    loading: c,
                    error: m
                }
            }
        }
    }
]);