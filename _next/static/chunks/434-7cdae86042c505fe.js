(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [434], {
        31146: function(n, e, r) {
            var t = {
                "./br/emails/common": 65142,
                "./en/emails/common": 77286,
                "./es/emails/common": 3889,
                "./fr/emails/common": 87981
            };

            function i(n) {
                var e = o(n);
                return r(e)
            }

            function o(n) {
                if (!r.o(t, n)) {
                    var e = new Error("Cannot find module '" + n + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return t[n]
            }
            i.keys = function() {
                return Object.keys(t)
            }, i.resolve = o, n.exports = i, i.id = 31146
        },
        7001: function(n, e, r) {
            var t = {
                "./br/emails/index": 37358,
                "./en/emails/index": 13751,
                "./es/emails/index": 84832,
                "./fr/emails/index": 76713
            };

            function i(n) {
                var e = o(n);
                return r(e)
            }

            function o(n) {
                if (!r.o(t, n)) {
                    var e = new Error("Cannot find module '" + n + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return t[n]
            }
            i.keys = function() {
                return Object.keys(t)
            }, i.resolve = o, n.exports = i, i.id = 7001
        },
        90892: function(n, e, r) {
            var t = {
                "./br/notifications/index": 62430,
                "./en/notifications/index": 73667,
                "./es/notifications/index": 752,
                "./fr/notifications/index": 45425
            };

            function i(n) {
                var e = o(n);
                return r(e)
            }

            function o(n) {
                if (!r.o(t, n)) {
                    var e = new Error("Cannot find module '" + n + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return t[n]
            }
            i.keys = function() {
                return Object.keys(t)
            }, i.resolve = o, n.exports = i, i.id = 90892
        },
        97886: function(n, e, r) {
            "use strict";
            r.d(e, {
                G: function() {
                    return s
                },
                X: function() {
                    return c
                }
            });
            var t = r(85893),
                i = r(90512),
                o = r(70880),
                a = r(34457),
                l = r.n(a);

            function s(n) {
                var e = n.points,
                    r = void 0 === e ? 0 : e,
                    a = n.boost,
                    s = void 0 !== a && a,
                    c = n.soon,
                    u = void 0 !== c && c,
                    d = n.soonLabel;
                return (0, t.jsx)("div", {
                    className: (0, i.Z)(l().points, s && l().boost),
                    children: (0, t.jsx)("div", {
                        children: u ? (0, t.jsx)("span", {
                            children: d
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("span", {
                                children: r
                            }), (0, t.jsx)(o.a, {})]
                        })
                    })
                })
            }

            function c(n) {
                var e = n.label,
                    r = n.boost;
                return (0, t.jsx)("div", {
                    className: l().booster,
                    children: (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("span", {
                            children: e
                        }), (0, t.jsx)("span", {
                            children: r
                        })]
                    })
                })
            }
        },
        70880: function(n, e, r) {
            "use strict";
            r.d(e, {
                a: function() {
                    return a
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(85893),
                a = function(n) {
                    return (0, o.jsxs)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 22 22",
                        width: 22,
                        height: 22,
                        fill: "none"
                    }, n), {
                        children: [(0, o.jsxs)("g", {
                            clipPath: "url(#a)",
                            children: [(0, o.jsx)("rect", {
                                width: 21.333,
                                height: 21.333,
                                x: 21.333,
                                y: 21.667,
                                fill: "#fff",
                                rx: 10.667,
                                transform: "rotate(-180 21.333 21.667)"
                            }), (0, o.jsx)("g", {
                                filter: "url(#b)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 1.888,
                                    cy: 23.765,
                                    fill: "#F1FECB",
                                    rx: 14.071,
                                    ry: 5.282,
                                    transform: "rotate(109.445 1.888 23.765)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#c)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 26.552,
                                    cy: 15.749,
                                    fill: "#CBFBFE",
                                    rx: 14.071,
                                    ry: 5.282,
                                    transform: "rotate(-155.825 26.552 15.749)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#d)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 13.922,
                                    cy: 27.786,
                                    fill: "#CBECFE",
                                    rx: 14.071,
                                    ry: 5.282,
                                    transform: "rotate(-105.328 13.922 27.786)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#e)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 1.077,
                                    cy: 23.15,
                                    fill: "#E6CEFD",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(109.445 1.077 23.15)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#f)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 27.231,
                                    cy: 14.991,
                                    fill: "#E6CEFD",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(-155.825 27.231 14.99)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#g)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 17.598,
                                    cy: -.12,
                                    fill: "#8AFFFF",
                                    rx: 15.206,
                                    ry: 5.282,
                                    transform: "rotate(-180 17.598 -.12)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#h)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 18.135,
                                    cy: -1.09,
                                    fill: "#A891F0",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(-180 18.135 -1.09)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#i)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: -1.49,
                                    cy: 4.207,
                                    fill: "#8AFFFF",
                                    rx: 15.206,
                                    ry: 5.282,
                                    transform: "rotate(120 -1.49 4.207)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#j)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: -2.062,
                                    cy: 3.257,
                                    fill: "#A891F0",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(120 -2.062 3.257)"
                                })
                            })]
                        }), (0, o.jsxs)("g", {
                            clipPath: "url(#k)",
                            style: {
                                mixBlendMode: "plus-darker"
                            },
                            children: [(0, o.jsx)("rect", {
                                width: 21.333,
                                height: 21.333,
                                x: 21.333,
                                y: 21.667,
                                fill: "#fff",
                                rx: 10.667,
                                transform: "rotate(-180 21.333 21.667)"
                            }), (0, o.jsx)("g", {
                                filter: "url(#l)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 1.888,
                                    cy: 23.765,
                                    fill: "#F1FECB",
                                    rx: 14.071,
                                    ry: 5.282,
                                    transform: "rotate(109.445 1.888 23.765)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#m)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 26.552,
                                    cy: 15.749,
                                    fill: "#CBFBFE",
                                    rx: 14.071,
                                    ry: 5.282,
                                    transform: "rotate(-155.825 26.552 15.749)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#n)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 13.922,
                                    cy: 27.786,
                                    fill: "#CBECFE",
                                    rx: 14.071,
                                    ry: 5.282,
                                    transform: "rotate(-105.328 13.922 27.786)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#o)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 1.077,
                                    cy: 23.15,
                                    fill: "#E6CEFD",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(109.445 1.077 23.15)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#p)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 27.231,
                                    cy: 14.991,
                                    fill: "#E6CEFD",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(-155.825 27.231 14.99)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#q)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 17.598,
                                    cy: -.12,
                                    fill: "#8AFFFF",
                                    rx: 15.206,
                                    ry: 5.282,
                                    transform: "rotate(-180 17.598 -.12)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#r)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 18.135,
                                    cy: -1.09,
                                    fill: "#A891F0",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(-180 18.135 -1.09)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#s)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: -1.49,
                                    cy: 4.207,
                                    fill: "#fff",
                                    rx: 15.206,
                                    ry: 5.282,
                                    transform: "rotate(120 -1.49 4.207)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#t)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: -2.062,
                                    cy: 3.257,
                                    fill: "#A891F0",
                                    rx: 10.419,
                                    ry: 4.312,
                                    transform: "rotate(120 -2.062 3.257)"
                                })
                            })]
                        }), (0, o.jsxs)("g", {
                            filter: "url(#u)",
                            style: {
                                mixBlendMode: "hard-light"
                            },
                            children: [(0, o.jsxs)("g", {
                                clipPath: "url(#v)",
                                children: [(0, o.jsx)("g", {
                                    filter: "url(#w)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: 18.83,
                                        cy: -.87,
                                        fill: "#F1FECB",
                                        rx: 13.085,
                                        ry: 4.912,
                                        transform: "rotate(-70.555 18.83 -.87)"
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#x)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: -4.106,
                                        cy: 6.584,
                                        fill: "#CBFBFE",
                                        rx: 13.085,
                                        ry: 4.912,
                                        transform: "rotate(24.175 -4.106 6.584)"
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#y)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: 7.639,
                                        cy: -4.61,
                                        fill: "#CBECFE",
                                        rx: 13.085,
                                        ry: 4.912,
                                        transform: "rotate(74.672 7.639 -4.61)"
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#z)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: 19.584,
                                        cy: -.299,
                                        fill: "#E6CEFD",
                                        rx: 9.689,
                                        ry: 4.01,
                                        transform: "rotate(-70.555 19.584 -.299)"
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#A)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: -4.738,
                                        cy: 7.289,
                                        fill: "#E6CEFD",
                                        rx: 9.689,
                                        ry: 4.01,
                                        transform: "rotate(24.175 -4.738 7.289)"
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#B)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: 4.221,
                                        cy: 21.342,
                                        fill: "#8AFFFF",
                                        rx: 14.141,
                                        ry: 4.912
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#C)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: 3.722,
                                        cy: 22.244,
                                        fill: "#A891F0",
                                        rx: 9.689,
                                        ry: 4.01
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#D)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: 21.971,
                                        cy: 17.317,
                                        fill: "#8AFFFF",
                                        rx: 14.141,
                                        ry: 4.912,
                                        transform: "rotate(-60 21.971 17.317)"
                                    })
                                }), (0, o.jsx)("g", {
                                    filter: "url(#E)",
                                    children: (0, o.jsx)("ellipse", {
                                        cx: 22.503,
                                        cy: 18.201,
                                        fill: "#A891F0",
                                        rx: 9.689,
                                        ry: 4.01,
                                        transform: "rotate(-60 22.503 18.2)"
                                    })
                                })]
                            }), (0, o.jsx)("rect", {
                                width: 19.682,
                                height: 19.682,
                                x: .826,
                                y: 1.159,
                                stroke: "url(#F)",
                                strokeOpacity: .31,
                                strokeWidth: .157,
                                rx: 9.841,
                                style: {
                                    mixBlendMode: "luminosity"
                                }
                            })]
                        }), (0, o.jsxs)("g", {
                            clipPath: "url(#G)",
                            style: {
                                mixBlendMode: "color-burn"
                            },
                            children: [(0, o.jsx)("g", {
                                filter: "url(#H)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 18.829,
                                    cy: -.869,
                                    fill: "#F1FECB",
                                    rx: 13.085,
                                    ry: 4.911,
                                    transform: "rotate(-70.555 18.829 -.87)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#I)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: -4.106,
                                    cy: 6.584,
                                    fill: "#CBFBFE",
                                    rx: 13.085,
                                    ry: 4.911,
                                    transform: "rotate(24.175 -4.106 6.584)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#J)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 7.639,
                                    cy: -4.609,
                                    fill: "#CBECFE",
                                    rx: 13.085,
                                    ry: 4.911,
                                    transform: "rotate(74.672 7.64 -4.609)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#K)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 19.584,
                                    cy: -.298,
                                    fill: "#E6CEFD",
                                    rx: 9.689,
                                    ry: 4.01,
                                    transform: "rotate(-70.555 19.584 -.298)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#L)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: -4.737,
                                    cy: 7.289,
                                    fill: "#E6CEFD",
                                    rx: 9.689,
                                    ry: 4.01,
                                    transform: "rotate(24.175 -4.737 7.29)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#M)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 4.221,
                                    cy: 21.341,
                                    fill: "#8AFFFF",
                                    rx: 14.14,
                                    ry: 4.911
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#N)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 3.722,
                                    cy: 22.243,
                                    fill: "#A891F0",
                                    rx: 9.689,
                                    ry: 4.01
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#O)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 21.971,
                                    cy: 17.317,
                                    fill: "#8AFFFF",
                                    rx: 14.14,
                                    ry: 4.911,
                                    transform: "rotate(-60 21.97 17.317)"
                                })
                            }), (0, o.jsx)("g", {
                                filter: "url(#P)",
                                children: (0, o.jsx)("ellipse", {
                                    cx: 22.502,
                                    cy: 18.2,
                                    fill: "#A891F0",
                                    rx: 9.689,
                                    ry: 4.01,
                                    transform: "rotate(-60 22.502 18.2)"
                                })
                            })]
                        }), (0, o.jsx)("path", {
                            fill: "#000",
                            d: "m3.334 11.02 2.13-.378a5.93 5.93 0 0 0 4.805-4.805l.378-2.13.377 2.13a5.93 5.93 0 0 0 4.806 4.805l2.13.378-2.13.377a5.93 5.93 0 0 0-4.806 4.806l-.377 2.13-.378-2.13a5.93 5.93 0 0 0-4.805-4.806z",
                            style: {
                                mixBlendMode: "luminosity"
                            }
                        }), (0, o.jsxs)("defs", {
                            children: [(0, o.jsxs)("filter", {
                                id: "b",
                                width: 21.936,
                                height: 35.033,
                                x: -9.08,
                                y: 6.248,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "c",
                                width: 34.301,
                                height: 23.284,
                                x: 9.401,
                                y: 4.107,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "d",
                                width: 20.876,
                                height: 35.547,
                                x: 3.484,
                                y: 10.012,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "e",
                                width: 18.95,
                                height: 28.122,
                                x: -8.398,
                                y: 9.089,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "f",
                                width: 27.601,
                                height: 19.868,
                                x: 13.431,
                                y: 5.057,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "g",
                                width: 38.672,
                                height: 18.825,
                                x: -1.738,
                                y: -9.533,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "h",
                                width: 29.099,
                                height: 16.885,
                                x: 3.585,
                                y: -9.533,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "i",
                                width: 26.009,
                                height: 35.128,
                                x: -14.495,
                                y: -13.357,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "j",
                                width: 21.082,
                                height: 26.82,
                                x: -12.603,
                                y: -10.152,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "l",
                                width: 21.936,
                                height: 35.033,
                                x: -9.08,
                                y: 6.248,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "m",
                                width: 34.301,
                                height: 23.284,
                                x: 9.401,
                                y: 4.107,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "n",
                                width: 20.876,
                                height: 35.547,
                                x: 3.484,
                                y: 10.012,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "o",
                                width: 18.95,
                                height: 28.122,
                                x: -8.398,
                                y: 9.089,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "p",
                                width: 27.601,
                                height: 19.868,
                                x: 13.431,
                                y: 5.057,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "q",
                                width: 38.672,
                                height: 18.825,
                                x: -1.738,
                                y: -9.533,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "r",
                                width: 29.099,
                                height: 16.885,
                                x: 3.585,
                                y: -9.533,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "s",
                                width: 26.009,
                                height: 35.128,
                                x: -14.495,
                                y: -13.357,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "t",
                                width: 21.082,
                                height: 26.82,
                                x: -12.603,
                                y: -10.152,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 2.065
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "u",
                                width: 19.862,
                                height: 19.863,
                                x: .735,
                                y: 1.069,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: .006
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "w",
                                width: 20.398,
                                height: 32.579,
                                x: 8.63,
                                y: -17.16,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "x",
                                width: 31.898,
                                height: 21.653,
                                x: -20.055,
                                y: -4.243,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "y",
                                width: 19.414,
                                height: 33.057,
                                x: -2.068,
                                y: -21.139,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "z",
                                width: 17.624,
                                height: 26.152,
                                x: 10.772,
                                y: -13.375,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "A",
                                width: 25.667,
                                height: 18.477,
                                x: -17.572,
                                y: -1.949,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "B",
                                width: 35.964,
                                height: 17.506,
                                x: -13.761,
                                y: 12.589,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "C",
                                width: 27.061,
                                height: 15.702,
                                x: -9.809,
                                y: 14.392,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "D",
                                width: 24.187,
                                height: 32.667,
                                x: 9.878,
                                y: .984,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "E",
                                width: 19.604,
                                height: 24.941,
                                x: 12.701,
                                y: 5.73,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.921
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "H",
                                width: 20.398,
                                height: 32.577,
                                x: 8.63,
                                y: -17.158,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "I",
                                width: 31.897,
                                height: 21.652,
                                x: -20.054,
                                y: -4.242,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "J",
                                width: 19.413,
                                height: 33.055,
                                x: -2.067,
                                y: -21.137,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "K",
                                width: 17.622,
                                height: 26.15,
                                x: 10.772,
                                y: -13.373,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "L",
                                width: 25.665,
                                height: 18.475,
                                x: -17.569,
                                y: -1.948,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "M",
                                width: 35.961,
                                height: 17.505,
                                x: -13.76,
                                y: 12.589,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "N",
                                width: 27.059,
                                height: 15.701,
                                x: -9.808,
                                y: 14.392,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "O",
                                width: 24.186,
                                height: 32.665,
                                x: 9.878,
                                y: .985,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsxs)("filter", {
                                id: "P",
                                width: 19.603,
                                height: 24.939,
                                x: 12.701,
                                y: 5.73,
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("feFlood", {
                                    floodOpacity: 0,
                                    result: "BackgroundImageFix"
                                }), (0, o.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, o.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_1273_5112",
                                    stdDeviation: 1.92
                                })]
                            }), (0, o.jsx)("clipPath", {
                                id: "a",
                                children: (0, o.jsx)("rect", {
                                    width: 21.333,
                                    height: 21.333,
                                    x: 21.333,
                                    y: 21.667,
                                    fill: "#fff",
                                    rx: 10.667,
                                    transform: "rotate(-180 21.333 21.667)"
                                })
                            }), (0, o.jsx)("clipPath", {
                                id: "k",
                                children: (0, o.jsx)("rect", {
                                    width: 21.333,
                                    height: 21.333,
                                    x: 21.333,
                                    y: 21.667,
                                    fill: "#fff",
                                    rx: 10.667,
                                    transform: "rotate(-180 21.333 21.667)"
                                })
                            }), (0, o.jsx)("clipPath", {
                                id: "v",
                                children: (0, o.jsx)("rect", {
                                    width: 19.839,
                                    height: 19.839,
                                    x: .747,
                                    y: 1.081,
                                    fill: "#fff",
                                    rx: 9.92
                                })
                            }), (0, o.jsx)("clipPath", {
                                id: "G",
                                children: (0, o.jsx)("rect", {
                                    width: 19.838,
                                    height: 19.838,
                                    x: .748,
                                    y: 1.081,
                                    fill: "#fff",
                                    rx: 9.919
                                })
                            }), (0, o.jsxs)("linearGradient", {
                                id: "F",
                                x1: 10.667,
                                x2: 10.667,
                                y1: 1.081,
                                y2: 20.92,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {}), (0, o.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#070513"
                                })]
                            })]
                        })]
                    }))
                }
        },
        41754: function(n, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return Br
                }
            });
            var t = r(47568),
                i = r(26042),
                o = r(10253),
                a = r(7297),
                l = r(97582),
                s = r(85893),
                c = r(67294),
                u = r(45697),
                d = r.n(u),
                f = r(52015),
                h = r(43281),
                g = r(11752),
                p = r.n(g),
                x = r(41664),
                v = r.n(x),
                m = r(57151),
                j = r(36957),
                I = r(86427),
                y = r(56539),
                b = r(69396),
                _ = r(56630),
                O = r(97886),
                w = r(93096),
                B = r.n(w),
                C = r(38332);

            function F() {
                var n = (0, a.Z)(["\n  --spaceAvailable: ", ";\n\n  position: absolute;\n  float: right;\n  top: calc(", " + ", ");\n  right: ", ";\n  border: ", " solid ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  margin: 0;\n  width: ", ";\n  max-height: var(--spaceAvailable);\n  padding: ", " 0;\n  -moz-box-shadow: 0 0 ", " 0 ", ";\n  -webkit-box-shadow: 0 0 ", " 0 ", ";\n  box-shadow: 0 0 ", " 0 ", ";\n  z-index: 1;\n\n  @media ", " {\n    --spaceAvailable: ", ";\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    top: ", ";\n    right: ", ";\n    border-left: ", " solid transparent;\n    border-right: ", " solid transparent;\n  }\n\n  &:before {\n    border-bottom: ", " solid ", ";\n    margin-top: ", ";\n  }\n\n  &:after {\n    border-bottom: ", " solid ", ";\n    margin-top: ", ";\n  }\n"]);
                return F = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, a.Z)(["\n  margin: 0;\n  max-height: calc(var(--spaceAvailable) - ", ");\n  display: inherit;\n  padding: 0;\n  overflow-y: auto;\n  scrollbar-width: inherit;\n  -ms-overflow-style: auto;\n\n  li {\n    list-style: none;\n    padding: ", " ", ";\n    font-size: ", ";\n    transition-duration: 0.3s;\n\n    &:hover {\n      background-color: ", ";\n      cursor: pointer;\n    }\n\n    &.user,\n    &.points {\n      border-bottom: ", " solid ", ";\n      height: 100%;\n      padding: ", ";\n\n      &:hover {\n        background-color: transparent;\n      }\n    }\n\n    &.user {\n      padding-top: 0;\n\n      a {\n        display: flex;\n        justify-content: flex-start;\n        flex-direction: row;\n\n        .avatar-img {\n          margin: ", " ", " 0 0;\n          width: ", ";\n          height: ", ";\n          border-color: ", ";\n        }\n\n        > div > span {\n          font-weight: ", ";\n        }\n      }\n    }\n\n    &.points {\n      border-radius: 0;\n      margin-bottom: ", ";\n\n      a {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n\n        span {\n          font-size: ", ";\n        }\n      }\n\n      div > div > div {\n        background-color: ", ";\n      }\n    }\n\n    &:last-child {\n      margin-top: ", ";\n      border-radius: 0 0 ", " ", ";\n      border-top: ", " solid ", ";\n      padding-bottom: 0;\n\n      &:hover {\n        background-color: transparent;\n        cursor: initial;\n      }\n\n      button {\n        margin-top: ", ";\n        border: 0;\n        background-color: transparent;\n        display: flex;\n        align-items: center;\n        padding: 0;\n        font-size: ", ";\n        color: ", ";\n        white-space: nowrap;\n        cursor: pointer;\n      }\n    }\n\n    > a,\n    > div {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      width: 100%;\n      height: 100%;\n      color: ", ";\n      text-decoration: none;\n\n      span {\n        font-size: ", ";\n      }\n    }\n  }\n"]);
                return S = function() {
                    return n
                }, n
            }
            var k = f.ZP.div.withConfig({
                    componentId: "sc-99cba1c3-0"
                })(F(), (function(n) {
                    return n.windowHeight ? "calc(" + Math.floor(n.windowHeight - 60 - 20) + " * 1px)" : "100%"
                }), C.lI.height, (0, h.hO)("2px"), (0, h.hO)("-10px"), (0, h.hO)("1px"), C.lI.borderColor, (0, h.hO)("6px"), C.lI.backgroundColor, C.lI.userMenuWidth, (0, h.hO)("16px"), (0, h.hO)("30px"), (0, h.m4)(C.O9.black, .15), (0, h.hO)("30px"), (0, h.m4)(C.O9.black, .15), (0, h.hO)("30px"), (0, h.m4)(C.O9.black, .15), C.Uh.s, (function(n) {
                    return n.windowHeight ? "calc(" + Math.floor(n.windowHeight - 100 - 10) + " * 1px)" : "100%"
                }), (0, h.hO)("-5px"), (0, h.hO)("19px"), (0, h.hO)("10px"), (0, h.hO)("10px"), (0, h.hO)("10px"), C.lI.borderColor, (0, h.hO)("-5px"), (0, h.hO)("10px"), C.lI.backgroundColor, (0, h.hO)("-3px")),
                E = f.ZP.ul.withConfig({
                    componentId: "sc-99cba1c3-1"
                })(S(), (0, h.hO)("2px"), (0, h.hO)("8px"), (0, h.hO)("16px"), C.cp.fontSizeSm, C.lI.borderColor, (0, h.hO)("1px"), C.lI.userMenuDividerColor, (0, h.hO)("16px"), (0, h.hO)("2px"), (0, h.hO)("12px"), (0, h.hO)("38px"), (0, h.hO)("38px"), C.lI.borderColor, C.cp.fontWeigthSemiBold, (0, h.hO)("8px"), C.cp.fontSizeSm, C.O9.purple200, (0, h.hO)("8px"), (0, h.hO)("4px"), (0, h.hO)("4px"), (0, h.hO)("1px"), C.lI.userMenuDividerColor, (0, h.hO)("8px"), C.cp.fontSizeSm, C.O9.orange600, C.lI.color, C.cp.fontSizeSm),
                G = function(n) {
                    var e = n.user,
                        r = n.points,
                        t = n.children,
                        o = n.logout,
                        a = n.logoutAction,
                        l = (0, c.useState)(null),
                        u = l[0],
                        d = l[1];
                    return (0, c.useEffect)((function() {
                        d(window.innerHeight);
                        var n = B()((function() {
                            d(window.innerHeight)
                        }), 200);
                        return window.addEventListener("resize", n),
                            function() {
                                return window.removeEventListener("resize", n)
                            }
                    }), []), (0, s.jsx)(k, (0, b.Z)((0, i.Z)({
                        className: "user-menu",
                        windowHeight: u
                    }, n), {
                        children: (0, s.jsxs)(E, {
                            windowHeight: u,
                            children: [(0, s.jsx)("li", {
                                className: "user",
                                children: e
                            }), r && (0, s.jsx)("li", {
                                className: "points",
                                children: r
                            }), t, (0, s.jsx)("li", {
                                children: (0, s.jsx)("button", {
                                    onClick: a,
                                    children: o
                                })
                            })]
                        })
                    }))
                };
            G.defaultProps = {
                logoutAction: function() {}
            }, G.propTypes = {
                user: d().node,
                points: d().node,
                children: d().node.isRequired,
                logout: d().string.isRequired,
                logoutAction: d().func
            };
            var Z = G;

            function T() {
                var n = (0, a.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-weight: ", ";\n\n  span {\n    &.wallet {\n      margin-right: ", ";\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n\n  svg {\n    margin-left: ", ";\n    min-width: ", ";\n    height: ", ";\n  }\n"]);
                return T = function() {
                    return n
                }, n
            }
            var A = f.ZP.div.withConfig({
                    componentId: "sc-623a5c81-0"
                })(T(), C.cp.fontWeigthRegular, (0, h.hO)("5px"), (0, h.hO)("2px"), (0, h.hO)("21px"), (0, h.hO)("21px")),
                U = r(30349),
                D = r(63058),
                R = function(n) {
                    var e = n.wallet,
                        r = n.balance,
                        t = void 0 === r ? 0 : r,
                        i = n.currency,
                        o = void 0 === i ? "VKAI" : i,
                        a = (0, U.Z)();
                    return (0, s.jsxs)(A, {
                        children: [(0, s.jsxs)("span", {
                            className: "wallet",
                            children: [e, ":"]
                        }), (0, s.jsx)("span", {
                            children: " " + (0, D.ME)(t).value.toLocaleString(a)
                        }), "TKAI" === o ? (0, s.jsx)(I.JO, {
                            icon: "tkai",
                            fill: C.lI.color
                        }) : (0, s.jsx)(I.JO, {
                            icon: "vkai",
                            fill: C.lI.color
                        })]
                    })
                };
            R.defaultProps = {
                balance: 0
            }, R.propTypes = {
                wallet: d().string,
                balance: d().number,
                currency: d().string
            };
            var N = R,
                P = r(62610),
                M = r(81770),
                V = r(73466),
                L = r(98373),
                $ = r(84603),
                z = r(43514),
                J = r(11409),
                H = r(38195),
                q = r(74054),
                W = r(30452),
                Y = r(70434),
                Q = r(96346),
                K = r(64572),
                X = r(77056),
                nn = p()().publicRuntimeConfig,
                en = function(n) {
                    var e, r, a, c, u, d = (0, U.Z)(),
                        f = n.user,
                        h = n.enableGuestView,
                        g = (0, X.q)().activeFeatures,
                        p = (0, Q.v)().disconnect,
                        x = (0, _.$G)(["navigation", "challenge", "common"]).t,
                        v = (0, J.w)(),
                        m = v.wallets,
                        j = v.loading,
                        y = (0, H.y)(),
                        w = y.isAccountVerified,
                        B = y.loading,
                        C = (0, V.dV)(m),
                        F = null !== (c = f.me.points) && void 0 !== c ? c : 0,
                        S = (0, o.Z)((0, Y.H)(), 1)[0],
                        k = ([K.aYQ.DEPOSIT, K.aYQ.WITHDRAW].every((function(n) {
                            return null === g || void 0 === g ? void 0 : g.includes(n)
                        })), function() {
                            var n = (0, t.Z)((function() {
                                var n, e;
                                return (0, l.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 3, , 4]), [4, S()];
                                        case 1:
                                            return r.sent(), [4, p()];
                                        case 2:
                                            return r.sent(), (0, L.Z)({}, "/"), [3, 4];
                                        case 3:
                                            return n = r.sent(), q.Z.send({
                                                eventIndex: W.Z.GENERAL_LOG,
                                                url: null === window || void 0 === window || null === (e = window.location) || void 0 === e ? void 0 : e.href,
                                                error: n
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }()),
                        E = ((null === f || void 0 === f || null === (e = f.me) || void 0 === e || null === (r = e.juries) || void 0 === r ? void 0 : r[0]) || {}).challenge,
                        G = {
                            challengeSlug: null === E || void 0 === E ? void 0 : E.slug,
                            organizationSlug: null === E || void 0 === E ? void 0 : E.organization.slug
                        };
                    return h ? (0, s.jsxs)(Z, {
                        user: (0, s.jsxs)("div", {
                            "data-testid": "user-menu-username",
                            children: [(0, s.jsx)("span", {
                                children: (0, s.jsxs)("strong", {
                                    children: [null === f || void 0 === f || null === (a = f.me) || void 0 === a ? void 0 : a.nickname, " (", x("navigation:guest_user"), ")"]
                                })
                            }), C && j ? (0, s.jsx)("div", {
                                style: {
                                    marginTop: "5px"
                                },
                                children: (0, s.jsx)(I.$j, {
                                    fill: "hsl(0, 0%, 85%)"
                                })
                            }) : C.map((function(n) {
                                return (0, s.jsx)(N, {
                                    wallet: n.challenge ? n.challenge.name.slice(0, 22) : x("navigation:user_menu_balance"),
                                    balance: n.balance,
                                    currency: n.currency
                                }, n.id)
                            }))]
                        }),
                        logout: x("navigation:user_menu_log_out"),
                        logoutAction: (0, t.Z)((function() {
                            return (0, l.__generator)(this, (function(n) {
                                return [2, k()]
                            }))
                        })),
                        children: [(0, s.jsx)("li", {
                            children: (0, s.jsx)(P.Z, {
                                href: "".concat((0, M.x)("overview", G.challengeSlug, G.organizationSlug)),
                                children: x("challenges:hackathon_overview")
                            })
                        }), (0, s.jsx)("li", {
                            children: (0, s.jsx)(P.Z, {
                                href: "".concat((0, M.x)("projects", G.challengeSlug, G.organizationSlug)),
                                children: x("challenges:hackathon_projects")
                            })
                        }), (0, s.jsx)("li", {
                            children: (0, s.jsx)(P.Z, {
                                href: "".concat((0, M.x)("updates", G.challengeSlug, G.organizationSlug)),
                                children: x("challenges:hackathon_updates")
                            })
                        })]
                    }) : (0, s.jsxs)(Z, {
                        user: (0, s.jsxs)(P.Z, (0, b.Z)((0, i.Z)({}, (0, M.vp)(f.me.username)), {
                            "data-testid": "user-menu-username",
                            children: [(0, s.jsx)(I.F$, {
                                url: (0, z.un)((0, $.Dm)(null !== (u = null === f || void 0 === f ? void 0 : f.me) && void 0 !== u ? u : "")),
                                alt: f.me.fullName || f.me.username
                            }), (0, s.jsxs)("div", {
                                children: [(0, s.jsx)("span", {
                                    children: f.me.fullName || f.me.username
                                }), C && j ? (0, s.jsx)("div", {
                                    style: {
                                        marginTop: "5px"
                                    },
                                    children: (0, s.jsx)(I.$j, {
                                        fill: "hsl(0, 0%, 85%)"
                                    })
                                }) : C.map((function(n) {
                                    return (0, s.jsx)(N, {
                                        wallet: n.challenge ? n.challenge.name.slice(0, 22) : x("navigation:user_menu_balance"),
                                        balance: n.balance,
                                        currency: n.currency
                                    }, n.id)
                                }))]
                            })]
                        })),
                        points: (0, s.jsxs)(P.Z, {
                            href: "/points",
                            children: [(0, s.jsx)("span", {
                                children: x("common:your_points")
                            }), (0, s.jsx)(O.G, {
                                points: F.toLocaleString(d)
                            })]
                        }),
                        logout: x("navigation:user_menu_log_out"),
                        logoutAction: (0, t.Z)((function() {
                            return (0, l.__generator)(this, (function(n) {
                                return [2, k()]
                            }))
                        })),
                        children: [(0, s.jsx)("li", {
                            "data-testid": "user-menu-dashboard",
                            children: (0, s.jsx)(P.Z, {
                                href: "/dashboard",
                                children: x("navigation:user_menu_dashboard")
                            })
                        }), (0, s.jsx)("li", {
                            "data-testid": "user-menu-transactions",
                            children: (0, s.jsx)(P.Z, (0, b.Z)((0, i.Z)({}, (0, M.vp)(f.me.username, "transactions")), {
                                children: x("navigation:user_menu_activity")
                            }))
                        }), (0, s.jsx)("li", {
                            "data-testid": "user-menu-deposit-withdraw",
                            children: (0, s.jsx)(P.Z, (0, b.Z)((0, i.Z)({}, (0, M.CR)("deposit-and-withdrawal")), {
                                children: x("navigation:user_menu_deposit_withdraw")
                            }))
                        }), (0, s.jsx)("li", {
                            "data-testid": "user-menu-settings",
                            children: (0, s.jsx)(P.Z, (0, b.Z)((0, i.Z)({}, (0, M.CR)()), {
                                children: x("navigation:user_menu_settings")
                            }))
                        }), "true" === nn.referralsEnabled && (0, s.jsx)("li", {
                            "data-testid": "user-menu-referrals",
                            children: (0, s.jsx)(P.Z, (0, b.Z)((0, i.Z)({}, (0, M.CR)("referrals")), {
                                children: x("navigation:user_menu_invites")
                            }))
                        }), !w && !B && (0, s.jsx)("li", {
                            "data-testid": "user-menu-validate-account",
                            children: (0, s.jsx)(P.Z, (0, b.Z)((0, i.Z)({}, (0, M.CR)("account")), {
                                children: (0, s.jsx)("span", {
                                    style: {
                                        color: "#CC5523"
                                    },
                                    children: x("navigation:user_menu_validate_account")
                                })
                            }))
                        })]
                    })
                },
                rn = r(37887),
                tn = r(31718);

            function on() {
                var n = (0, a.Z)(["\n      &:after {\n        content: '';\n        position: absolute;\n        border-radius: 999px;\n        background-color: ", ";\n        width: ", ";\n        height: ", ";\n        top: 0;\n        right: ", ";\n      }\n    "]);
                return on = function() {
                    return n
                }, n
            }

            function an() {
                var n = (0, a.Z)(["\n  display: none;\n  position: relative;\n\n  ", "\n\n  svg {\n    width: auto;\n  }\n\n  @media ", " {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);
                return an = function() {
                    return n
                }, n
            }
            var ln = f.ZP.div.withConfig({
                    componentId: "sc-79ed4b29-0"
                })(an(), (function(n) {
                    return n.unread && (0, f.iv)(on(), C.O9.red500, (0, h.hO)("10px"), (0, h.hO)("10px"), (0, h.hO)("-2px"))
                }), C.Uh.s),
                sn = function(n) {
                    var e = n.userId,
                        r = (0, rn.a)(tn.yk, {
                            variables: {
                                page: 0,
                                filter: "UNREAD"
                            },
                            fetchPolicy: "no-cache"
                        }),
                        t = r.subscribeToMore,
                        i = r.data,
                        o = r.refetch;
                    (0, c.useEffect)((function() {
                        var n = t({
                            document: tn.iD,
                            variables: {
                                userId: e
                            },
                            updateQuery: function(n, e) {
                                if (!e.subscriptionData.data) return n;
                                o()
                            }
                        });
                        return function() {
                            n()
                        }
                    }), []);
                    var a = i && i.mailThreads ? i.mailThreads.length : 0;
                    return (0, s.jsx)(ln, {
                        unread: a,
                        children: (0, s.jsx)(v(), {
                            href: "/messages",
                            children: (0, s.jsx)("a", {
                                "data-testid": "nav-messages-button",
                                children: a > 0 ? (0, s.jsx)(I.JO, {
                                    icon: "mail",
                                    fill: C.lI.color
                                }) : (0, s.jsx)(I.JO, {
                                    icon: "mailOutline",
                                    fill: C.lI.color
                                })
                            })
                        })
                    })
                };
            sn.propTypes = {
                userId: d().string
            };
            var cn = sn,
                un = r(29815),
                dn = r(50319),
                fn = r(90512),
                hn = r(58533),
                gn = r(7320),
                pn = r(51438),
                xn = r(52951),
                vn = r(88029),
                mn = r(26626),
                jn = r(31838),
                In = function(n) {
                    switch (n.notificationType) {
                        case jn.notificationTypes.ALLOCATE_RECEIVED:
                        case jn.notificationTypes.TRANSFER_RECEIVED:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferReceived",
                                fill: "var(--purple500)"
                            });
                        case jn.notificationTypes.TRANSFER_SENT:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferSent",
                                fill: "var(--grey400)"
                            });
                        case jn.notificationTypes.TRANSFER_SENT_FAILED:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferFailed",
                                fill: "var(--red500)"
                            });
                        case jn.notificationTypes.CHALLENGE_TRANSFER_SENT:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferSent",
                                fill: "var(--grey400)"
                            });
                        case jn.notificationTypes.CHALLENGE_TRANSFER_SENT_FAILED:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferFailed",
                                fill: "var(--red500)"
                            });
                        case jn.notificationTypes.CHALLENGE_TRANSFER_RECEIVED:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferReceived",
                                fill: "var(--purple500)"
                            });
                        case jn.notificationTypes.CHALLENGE_GOT_PUBLISHED:
                            return (0, s.jsx)(I.JO, {
                                icon: "challenge",
                                fill: "var(--purple500)"
                            });
                        case jn.notificationTypes.BACK_SUCCESS:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferSent",
                                fill: "var(--grey400)"
                            });
                        case jn.notificationTypes.BACK_FAILED:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferFailed",
                                fill: "var(--red500)"
                            });
                        case jn.notificationTypes.REGISTERED_AS_BACKER:
                            return (0, s.jsx)(I.JO, {
                                icon: "jury",
                                fill: "var(--grey400)"
                            });
                        case jn.notificationTypes.ADDED_AS_PROJECT_MEMBER:
                        case jn.notificationTypes.REGISTERED_AS_INNOVATOR:
                            return (0, s.jsx)(I.JO, {
                                icon: "addMember",
                                fill: "var(--grey400)"
                            });
                        case jn.notificationTypes.CHALLENGE_ANNOUNCEMENT:
                            return (0, s.jsx)(I.JO, {
                                icon: "warning",
                                fill: "var(--orange400)"
                            });
                        case jn.notificationTypes.RECEIVED_DIVIDEND:
                            return (0, s.jsx)(I.JO, {
                                icon: "transferReceived",
                                fill: "var(--purple500)"
                            });
                        case jn.notificationTypes.VALIDATE_ACCOUNT:
                            return (0, s.jsx)(I.JO, {
                                icon: "check",
                                fill: "var(--red500)"
                            });
                        default:
                            return (0, s.jsx)(I.JO, {
                                icon: "warning",
                                fill: "var(--red500)"
                            })
                    }
                };
            In.propTypes = {
                notificationType: d().string
            };
            var yn = In;

            function bn() {
                var n = (0, a.Z)(["\n  list-style: none;\n  position: relative;\n  background-color: ", ";\n  transition-duration: 0.3s;\n\n  &.validateAccount {\n    border-bottom: ", " solid ", ";\n\n    a {\n      span:first-child {\n        color: ", " !important;\n      }\n    }\n\n    &:before {\n      background-color: ", ";\n    }\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    background-color: ", ";\n    width: ", ";\n    height: 100%;\n  }\n\n  &:not(:last-child) {\n    border-bottom: ", " solid ", ";\n  }\n\n  span {\n    display: block;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]);
                return bn = function() {
                    return n
                }, n
            }

            function _n() {
                var n = (0, a.Z)(["\n  display: flex;\n  flex-direction: row;\n  color: ", ";\n  pointer-events: ", ";\n"]);
                return _n = function() {
                    return n
                }, n
            }

            function On() {
                var n = (0, a.Z)(["\n  min-width: ", ";\n  height: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: ", ";\n\n  svg {\n    width: ", ";\n    height: ", ";\n  }\n"]);
                return On = function() {
                    return n
                }, n
            }

            function wn() {
                var n = (0, a.Z)(["\n  padding: ", " ", " ", " 0;\n"]);
                return wn = function() {
                    return n
                }, n
            }

            function Bn() {
                var n = (0, a.Z)(["\n  font-size: ", ";\n  line-height: 1.4;\n  color: ", ";\n"]);
                return Bn = function() {
                    return n
                }, n
            }

            function Cn() {
                var n = (0, a.Z)(["\n  margin-top: ", ";\n  font-size: ", ";\n  color: ", ";\n"]);
                return Cn = function() {
                    return n
                }, n
            }
            var Fn = r(30381),
                Sn = f.ZP.li.withConfig({
                    componentId: "sc-e7334c0c-0"
                })(bn(), C.lI.backgroundColor, (0, h.hO)("1px"), C.lI.borderColor, C.O9.red500, C.O9.red500, C.O9.purple500, (function(n) {
                    return n.read ? 0 : (0, h.hO)("4px")
                }), (0, h.hO)("1px"), C.lI.borderColor),
                kn = f.ZP.a.withConfig({
                    componentId: "sc-e7334c0c-1"
                })(_n(), C.O9.black, (function(n) {
                    return n.href ? "all" : "none"
                })),
                En = f.ZP.div.withConfig({
                    componentId: "sc-e7334c0c-2"
                })(On(), (0, h.hO)("60px"), (0, h.hO)("40px"), (0, h.hO)("10px"), (0, h.hO)("30px"), (0, h.hO)("30px")),
                Gn = f.ZP.div.withConfig({
                    componentId: "sc-e7334c0c-3"
                })(wn(), (0, h.hO)("10px"), (0, h.hO)("10px"), (0, h.hO)("10px")),
                Zn = f.ZP.span.withConfig({
                    componentId: "sc-e7334c0c-4"
                })(Bn(), (0, h.hO)("14px"), C.lI.color),
                Tn = f.ZP.span.withConfig({
                    componentId: "sc-e7334c0c-5"
                })(Cn(), (0, h.hO)("5px"), (0, h.hO)("12px"), C.O9.grey400),
                An = function(n) {
                    (0, vn.Z)(r, n);
                    var e = (0, mn.Z)(r);

                    function r() {
                        return (0, pn.Z)(this, r), e.apply(this, arguments)
                    }
                    return (0, xn.Z)(r, [{
                        key: "render",
                        value: function() {
                            var n = this.props,
                                e = n.className,
                                r = n.notification,
                                t = n.href,
                                o = void 0 === t ? null : t,
                                a = r.isRead,
                                l = void 0 !== a && a;
                            return (0, s.jsx)(Sn, (0, b.Z)((0, i.Z)({
                                className: e,
                                notificationType: r.type
                            }, l && {
                                read: l
                            }), {
                                children: (0, s.jsxs)(kn, {
                                    href: o,
                                    children: [(0, s.jsx)(En, {
                                        children: (0, s.jsx)(yn, {
                                            notificationType: r.type
                                        })
                                    }), (0, s.jsxs)(Gn, {
                                        children: [(0, s.jsx)(Zn, {
                                            children: r.message
                                        }), (0, s.jsx)(Tn, {
                                            children: Fn(r.createdAt).fromNow()
                                        })]
                                    })]
                                })
                            }))
                        }
                    }]), r
                }(c.Component);
            An.propTypes = {
                className: d().string,
                notificationType: d().string,
                notification: d().object,
                href: d().string
            };
            var Un = An;

            function Dn() {
                var n = (0, a.Z)(["\n  color: ", ";\n  position: relative;\n  margin: 0 0.5rem;\n  animation-delay: 0.15s;\n  &,\n  &:before,\n  &:after {\n    background: ", ";\n    border-radius: 50%;\n    width: 0.25rem;\n    height: 0.25rem;\n    animation: loader 2s infinite linear;\n    animation-fill-mode: both;\n  }\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n  }\n  &:before {\n    left: -0.5rem;\n    animation-delay: -0.15s;\n  }\n  &:after {\n    right: -0.5rem;\n    animation-delay: 0.3s;\n  }\n  @keyframes loader {\n    0% {\n      background: ", ";\n    }\n    50% {\n      background: ", ";\n    }\n    100% {\n      background: ", ";\n    }\n  }\n"]);
                return Dn = function() {
                    return n
                }, n
            }
            var Rn = f.ZP.span.withConfig({
                    componentId: "sc-d1b694aa-0"
                })(Dn(), jn.colors.light, (0, h.m4)(jn.colors.light, 0), (function(n) {
                    return n.blackTheme ? (0, h.m4)(jn.colors.grey900, 1) : (0, h.m4)(jn.colors.light, 0)
                }), (function(n) {
                    return n.blackTheme ? (0, h.m4)(jn.colors.grey300, .2) : (0, h.m4)(jn.colors.light, 1)
                }), (function(n) {
                    return n.blackTheme ? (0, h.m4)(jn.colors.grey100, .5) : (0, h.m4)(jn.colors.light, 0)
                })),
                Nn = r(19255),
                Pn = r.n(Nn);

            function Mn(n) {
                var e = n.notifications,
                    r = void 0 === e ? [] : e,
                    t = n.hasUnread,
                    i = void 0 !== t && t,
                    o = n.onFetchMoreData,
                    a = n.hasMore,
                    l = void 0 === a || a,
                    u = n.onClose,
                    d = void 0 === u ? function() {} : u,
                    f = n.subscribeToMoreNotifications,
                    h = (0, _.$G)("navigation").t,
                    g = (0, gn.Z)({
                        initialValue: !1,
                        onClose: d
                    }),
                    p = g.ref,
                    x = g.isVisible,
                    v = g.setIsVisible;
                return (0, c.useEffect)((function() {
                    f()
                }), []), (0, s.jsxs)("div", {
                    className: Pn().wrapper,
                    ref: p,
                    children: [(0, s.jsx)("button", {
                        className: (0, fn.Z)(i && Pn().unread),
                        "aria-label": h("notifications_button"),
                        onClick: function() {
                            return v(!0)
                        },
                        "data-testid": "nav-notifications-button",
                        children: i ? (0, s.jsx)(I.JO, {
                            icon: "notifications",
                            fill: C.lI.color
                        }) : (0, s.jsx)(I.JO, {
                            icon: "notificationsOutline",
                            fill: C.lI.color
                        })
                    }), x ? (0, s.jsx)(hn.Z, {
                        dataLength: r.length,
                        next: function() {
                            o()
                        },
                        hasMore: l,
                        loader: r.length ? (0, s.jsx)("div", {
                            className: Pn().loader_container,
                            children: (0, s.jsx)(Rn, {})
                        }) : (0, s.jsx)(s.Fragment, {}),
                        endMessage: r.length ? (0, s.jsx)("div", {
                            className: Pn().no_more_notifications,
                            children: h("notifications_no_more")
                        }) : null,
                        children: r.length ? (0, s.jsx)("ul", {
                            children: r.map((function(n) {
                                return (0, s.jsx)(Un, {
                                    notification: n
                                }, n.id)
                            }))
                        }) : (0, s.jsx)("div", {
                            className: Pn().no_notifications,
                            children: h("notifications_empty")
                        })
                    }) : null]
                })
            }
            var Vn = r(31230);

            function Ln() {
                var n = (0, a.Z)(["\n  subscription NOTIFICATIONS_SUBSCRIPTION($userId: ID!) {\n    notificationsSub(userId: $userId) {\n      id\n      message\n      isRead\n      type\n      image {\n        id\n        url\n      }\n      challenge {\n        id\n        name\n      }\n      link\n      createdAt\n      user {\n        id\n      }\n    }\n  }\n"]);
                return Ln = function() {
                    return n
                }, n
            }
            var $n = (0, Vn.Ps)(Ln());

            function zn() {
                var n = (0, a.Z)(["\n  mutation MARK_NOTIFICATION_AS_READ_MUTATION($notificationId: ID!) {\n    markNotificationAsRead(id: $notificationId) {\n      id\n      isRead\n    }\n  }\n"]);
                return zn = function() {
                    return n
                }, n
            }

            function Jn() {
                var n = (0, a.Z)(["\n  mutation MARK_ALL_NOTIFICATIONS_AS_READ_MUTATION($userId: ID!) {\n    markAllNotificationAsRead(userId: $userId) {\n      message\n      code\n      errors\n    }\n  }\n"]);
                return Jn = function() {
                    return n
                }, n
            }(0, Vn.Ps)(zn());
            var Hn = (0, Vn.Ps)(Jn());

            function qn() {
                var n = (0, a.Z)(["\n  query USER_NOTIFICATIONS_QUERY($page: Int, $where: NotificationWhereInput!) {\n    notifications(where: $where, page: $page, orderBy: { createdAt: desc }) {\n      id\n      context\n      templateName\n      message\n      isRead\n      scope\n      type\n      image {\n        id\n        url\n      }\n      challenge {\n        id\n        name\n      }\n      link\n      createdAt\n      user {\n        id\n      }\n    }\n  }\n"]);
                return qn = function() {
                    return n
                }, n
            }

            function Wn() {
                var n = (0, a.Z)(["\n  query USER_NOTIFICATIONS_PAGE_INFO_QUERY($where: NotificationWhereInput!) {\n    notificationsPageInfo(where: $where) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return Wn = function() {
                    return n
                }, n
            }
            var Yn = (0, Vn.Ps)(qn()),
                Qn = (0, Vn.Ps)(Wn()),
                Kn = r(30381),
                Xn = r.n(Kn),
                ne = r(9394),
                ee = Xn()(Date.now()).subtract(15, "days").toDate().toISOString(),
                re = function(n, e) {
                    var r = e.subscriptionData;
                    if (!r.data) return n;
                    var t = r.data.notificationsSub;
                    if (t) {
                        var o, a = !1,
                            l = (null !== (o = null === n || void 0 === n ? void 0 : n.notifications) && void 0 !== o ? o : []).map((function(n) {
                                return t.id === n.id ? (a = !0, (0, b.Z)((0, i.Z)({}, n), {
                                    isRead: t.isRead
                                })) : n
                            }));
                        if (a) return l
                    }
                    return Object.assign({}, n, {
                        notifications: [t].concat((0, un.Z)(n.notifications))
                    })
                },
                te = function(n, e) {
                    var r = e.fetchMoreResult;
                    return r || r.notifications ? 0 === r.notifications.length ? (n.hasMoreNotifications = !1, n) : Object.assign({}, n, {
                        notifications: (0, un.Z)(n.notifications).concat((0, un.Z)(r.notifications))
                    }) : n
                },
                ie = function(n) {
                    var e = n.userId,
                        r = void 0 === e ? "" : e,
                        a = (0, o.Z)((0, dn.D)(Hn, {
                            variables: {
                                userId: r
                            }
                        }), 1)[0],
                        c = function(n) {
                            var e, r, t = n.userId,
                                o = n.page,
                                a = void 0 === o ? 0 : o,
                                l = (0, _.$G)().i18n.language,
                                s = void 0 === l ? "en" : l,
                                c = {
                                    OR: [{
                                        userId: {
                                            equals: t
                                        }
                                    }, {
                                        scope: {
                                            equals: K.Bm0.GLOBAL
                                        },
                                        createdAt: {
                                            gte: ee
                                        }
                                    }]
                                },
                                u = (0, rn.a)(Yn, {
                                    variables: {
                                        where: c,
                                        page: a
                                    }
                                }),
                                d = u.data,
                                f = u.subscribeToMore,
                                h = u.fetchMore,
                                g = u.loading,
                                p = u.error,
                                x = null === d || void 0 === d ? void 0 : d.notifications.flatMap((function(n) {
                                    return (null === n || void 0 === n ? void 0 : n.scope) === K.Bm0.GLOBAL ? [(0, b.Z)((0, i.Z)({}, n), {
                                        message: (0, ne.compileNotificationTemplate)({
                                            locale: s,
                                            context: n.context,
                                            templateName: n.templateName
                                        })
                                    })] : []
                                }));
                            return {
                                notifications: null !== (r = (null !== (e = null === d || void 0 === d ? void 0 : d.notifications.filter((function(n) {
                                    return (null === n || void 0 === n ? void 0 : n.scope) === K.Bm0.USER
                                }))) && void 0 !== e ? e : []).concat(null !== x && void 0 !== x ? x : []).sort((function(n, e) {
                                    var r = Xn()(null === n || void 0 === n ? void 0 : n.createdAt);
                                    return Xn()(null === e || void 0 === e ? void 0 : e.createdAt).diff(r)
                                }))) && void 0 !== r ? r : [],
                                subscribeToMore: f,
                                fetchMore: h,
                                loading: g,
                                error: p,
                                whereVariables: c
                            }
                        }({
                            userId: r,
                            page: 0
                        }),
                        u = c.notifications,
                        d = c.subscribeToMore,
                        f = c.fetchMore,
                        h = c.whereVariables,
                        g = function(n) {
                            var e, r, t, i, o, a, l = (0, rn.a)(Qn, {
                                    variables: {
                                        where: n
                                    }
                                }),
                                s = l.data,
                                c = l.loading,
                                u = l.error,
                                d = l.refetch;
                            return {
                                perPage: null !== (i = null === s || void 0 === s || null === (e = s.notificationsPageInfo) || void 0 === e ? void 0 : e.perPage) && void 0 !== i ? i : 0,
                                pageCount: null !== (o = null === s || void 0 === s || null === (r = s.notificationsPageInfo) || void 0 === r ? void 0 : r.pageCount) && void 0 !== o ? o : 0,
                                recordCount: null !== (a = null === s || void 0 === s || null === (t = s.notificationsPageInfo) || void 0 === t ? void 0 : t.recordCount) && void 0 !== a ? a : 0,
                                refetch: d,
                                loading: c,
                                error: u
                            }
                        }((0, i.Z)({}, h)),
                        p = g.recordCount,
                        x = g.perPage,
                        v = g.pageCount,
                        m = u.length,
                        j = p > m,
                        I = u ? u.filter((function(n) {
                            var e = n.isRead;
                            return !Boolean(e)
                        })).length : 0;
                    return (0, s.jsx)(Mn, {
                        onClose: (0, t.Z)((function() {
                            var n;
                            return (0, l.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return 0 === I ? [2] : [4, a()];
                                    case 1:
                                        return (n = e.sent()) && n.data && n.data.markAllNotificationAsRead && 200 === n.data.markAllNotificationAsRead.code || console.error("Error marking notifications as read: ", n), [2]
                                }
                            }))
                        })),
                        subscribeToMoreNotifications: function() {
                            ! function(n, e) {
                                e({
                                    document: $n,
                                    variables: {
                                        userId: n
                                    },
                                    updateQuery: re
                                })
                            }(r, d)
                        },
                        notifications: u,
                        hasUnread: I > 0,
                        hasMore: j,
                        onFetchMoreData: (0, t.Z)((function() {
                            var n;
                            return (0, l.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return (n = Math.ceil(m / x)) < v ? [4, f({
                                            variables: {
                                                userId: r,
                                                page: n
                                            },
                                            updateQuery: te
                                        })] : [3, 2];
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    })
                };
            ie.propTypes = {
                userId: d().string
            };
            var oe = ie,
                ae = r(76992),
                le = (r(11163), r(42469)),
                se = r(76602),
                ce = r(28052);

            function ue() {
                var n = (0, a.Z)(["\n  --shadow: 0 0 ", " 0 rgba(40, 40, 40, 0.2);\n\n  position: absolute;\n  float: right;\n  top: calc(", " + ", ");\n  right: ", ";\n  border: ", " solid ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  margin: 0 ", " 0 0;\n  height: initial !important;\n  -moz-box-shadow: var(--shadow);\n  -webkit-box-shadow: var(--shadow);\n  box-shadow: var(--shadow);\n  z-index: 1;\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    top: ", ";\n    right: ", ";\n    border-left: ", " solid transparent;\n    border-right: ", " solid transparent;\n  }\n\n  &:before {\n    border-bottom: ", " solid ", ";\n    margin-top: ", ";\n  }\n\n  &:after {\n    border-bottom: ", " solid ", ";\n    margin-top: ", ";\n  }\n\n  > div {\n    max-height: ", ";\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  @media ", " {\n    right: ", ";\n  }\n"]);
                return ue = function() {
                    return n
                }, n
            }

            function de() {
                var n = (0, a.Z)(["\n  width: 100%;\n  height: 100%;\n  min-width: ", ";\n  padding: 0;\n\n  li {\n    list-style: none;\n    height: ", ";\n    transition-duration: 0.3s;\n\n    &:hover {\n      background-color: ", ";\n      cursor: pointer;\n    }\n\n    &:not(:last-child) {\n      border-bottom: ", " solid ", ";\n    }\n\n    > button {\n      border: 0;\n      background-color: transparent;\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      height: 100%;\n      padding: 0 ", ";\n      font-size: 1rem;\n      color: ", ";\n      white-space: nowrap;\n      cursor: pointer;\n\n      svg {\n        margin-left: ", ";\n        width: auto;\n        height: ", ";\n      }\n    }\n  }\n"]);
                return de = function() {
                    return n
                }, n
            }
            var fe = f.ZP.div.withConfig({
                    componentId: "sc-d5bd961f-0"
                })(ue(), (0, h.hO)("15px"), C.lI.height, (0, h.hO)("2px"), (0, h.hO)("120px"), (0, h.hO)("1px"), C.lI.borderColor, (0, h.hO)("4px"), C.lI.backgroundColor, (0, h.hO)("3px"), (0, h.hO)("-5px"), (0, h.hO)("19px"), (0, h.hO)("10px"), (0, h.hO)("10px"), (0, h.hO)("10px"), C.lI.borderColor, (0, h.hO)("-5px"), (0, h.hO)("10px"), C.lI.backgroundColor, (0, h.hO)("-3px"), (0, h.hO)("400px"), C.Uh.s, (0, h.hO)("105px")),
                he = f.ZP.ul.withConfig({
                    componentId: "sc-d5bd961f-1"
                })(de(), (0, h.hO)("200px"), (0, h.hO)("45px"), C.lI.borderColor, (0, h.hO)("1px"), C.lI.borderColor, (0, h.hO)("20px"), C.O9.black, (0, h.hO)("20px"), (0, h.hO)("20px")),
                ge = function(n) {
                    var e = n.votingCarts,
                        r = void 0 === e ? [] : e,
                        t = n.onCartChange,
                        i = void 0 === t ? function() {} : t,
                        o = n.onCloseDropDown,
                        a = void 0 === o ? function() {} : o,
                        l = (0, gn.Z)({
                            useCapture: !0,
                            onClose: a
                        }).ref;
                    return (0, s.jsx)(fe, {
                        children: (0, s.jsx)("div", {
                            children: (0, s.jsx)(he, {
                                ref: l,
                                children: r.map((function(n) {
                                    var e, r, t, o, a, l, c = null !== (a = null === n || void 0 === n || null === (e = n.jury) || void 0 === e || null === (r = e.challenge) || void 0 === r || null === (t = r.wallets) || void 0 === t ? void 0 : t.reduce((function(n, e) {
                                            return n + (0, D.ME)(e.balance).value
                                        }), 0)) && void 0 !== a ? a : 0,
                                        u = n.items.reduce((function(n, e) {
                                            return Number(n) + (0, D.ME)(null !== (l = null === e || void 0 === e ? void 0 : e.amount) && void 0 !== l ? l : 0).value
                                        }), 0) > c;
                                    return (0, s.jsx)("li", {
                                        children: (0, s.jsxs)("button", {
                                            onClick: function(e) {
                                                e.preventDefault(), i(n)
                                            },
                                            children: [(0, s.jsx)("span", {
                                                children: null === n || void 0 === n || null === (o = n.votingTrack) || void 0 === o ? void 0 : o.name
                                            }), u && n.votingTrack.votingType === K.nIg.TOKEN && (0, s.jsx)(I.JO, {
                                                icon: "warning",
                                                fill: C.O9.yellow500
                                            })]
                                        })
                                    }, n.id)
                                }))
                            })
                        })
                    })
                };
            ge.propTypes = {
                votingCarts: d().array,
                onCartChange: d().func
            };
            var pe = ge,
                xe = r(99534);

            function ve() {
                var n = (0, a.Z)(["\n  @media ", " {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n"]);
                return ve = function() {
                    return n
                }, n
            }
            var me = f.ZP.div.withConfig({
                    componentId: "sc-c515ca2-0"
                })(ve(), C.Uh.s),
                je = function(n) {
                    var e = n.children;
                    return (0, s.jsx)(me, {
                        children: e
                    })
                };
            je.propTypes = {
                children: d().node.isRequired
            };
            var Ie = je,
                ye = r(62680);

            function be() {
                var n = (0, a.Z)(["\n  margin-bottom: 20px;\n"]);
                return be = function() {
                    return n
                }, n
            }

            function _e() {
                var n = (0, a.Z)(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n\n  > div {\n    display: flex;\n\n    .avatar-img {\n      min-width: 30px;\n      min-height: 30px;\n    }\n\n    span {\n      margin: 2px 0 0 5px;\n      font-weight: ", ";\n    }\n  }\n\n  button {\n    margin: -3px -8px 0 0;\n  }\n"]);
                return _e = function() {
                    return n
                }, n
            }

            function Oe() {
                var n = (0, a.Z)(["\n  > div:not(.tag-number) {\n    width: 100%;\n\n    input.text-field {\n      width: 100%;\n    }\n  }\n\n  div.tag-number {\n    margin: 0 5px 5px 0;\n  }\n"]);
                return Oe = function() {
                    return n
                }, n
            }
            var we = f.ZP.div.withConfig({
                    componentId: "sc-6b4a5e2a-0"
                })(be()),
                Be = f.ZP.div.withConfig({
                    componentId: "sc-6b4a5e2a-1"
                })(_e(), C.cp.fontWeigthSemiBold),
                Ce = f.ZP.div.withConfig({
                    componentId: "sc-6b4a5e2a-2"
                })(Oe()),
                Fe = function(n) {
                    var e = n.id,
                        r = n.name,
                        i = n.avatarUrl,
                        a = n.deleteAction,
                        c = n.projectId,
                        u = n.challengeSlug,
                        d = n.orgSlug,
                        f = n.children,
                        h = n.criteriaVoting,
                        g = void 0 !== h && h,
                        p = (0, ce.VY)(),
                        x = (0, X.q)().refetchCurrentVotingCarts,
                        v = (0, _.$G)("alert-messages").t,
                        m = function() {
                            var n = (0, o.Z)((0, dn.D)(ye.bD), 2),
                                e = n[0],
                                r = n[1];
                            return {
                                deleteVotingCartItem: e,
                                loading: r.loading,
                                error: r.error,
                                data: r.data
                            }
                        }(),
                        j = m.deleteVotingCartItem,
                        y = m.loading,
                        b = function() {
                            var n = (0, t.Z)((function() {
                                var n, r;
                                return (0, l.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, , 4]), [4, j({
                                                variables: {
                                                    votingCartItemId: e
                                                }
                                            })];
                                        case 1:
                                            return t.sent(), a(), [4, x()];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return n = t.sent(), p.error(v("alert-messages:an_error_happened")), q.Z.send({
                                                url: null === window || void 0 === window || null === (r = window.location) || void 0 === r ? void 0 : r.href,
                                                error: n
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, s.jsxs)(we, {
                        children: [(0, s.jsxs)(Be, {
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)(I.F$, {
                                    url: i,
                                    alt: r
                                }), (0, s.jsx)("span", {
                                    children: r
                                })]
                            }), (0, s.jsxs)("div", {
                                children: [g && (0, s.jsx)(I.zx, {
                                    loading: y,
                                    variant: "text",
                                    color: "grey400",
                                    icon: "edit",
                                    action: function() {
                                        return window.location.href = "".concat((0, M.fU)(c, u, d), "?votingCartOpen=true")
                                    }
                                }), (0, s.jsx)(I.zx, {
                                    loading: y,
                                    variant: "text",
                                    color: "grey400",
                                    icon: "delete",
                                    action: (0, t.Z)((function() {
                                        return (0, l.__generator)(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, b()];
                                                case 1:
                                                    return [2, n.sent()]
                                            }
                                        }))
                                    }))
                                })]
                            })]
                        }), (0, s.jsx)(Ce, {
                            children: f
                        })]
                    })
                },
                Se = function(n) {
                    var e, r, t, i = n.votingCartItem,
                        o = (n.username, n.challengeId),
                        a = n.onDelete,
                        l = i.project,
                        c = null !== (r = i.criteriaAppraisals) && void 0 !== r ? r : [];
                    return (0, s.jsx)(Fe, {
                        name: l.name,
                        id: i.id,
                        projectId: l.id,
                        challengeId: o,
                        challengeSlug: l.challenge.slug,
                        orgSlug: l.challenge.organization.slug,
                        avatarUrl: (0, z.V6)(null !== (t = null === (e = l.logoImageFile) || void 0 === e ? void 0 : e.url) && void 0 !== t ? t : ""),
                        deleteAction: function() {
                            return a(i.id)
                        },
                        criteriaVoting: !0,
                        children: (0, s.jsx)("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap"
                            },
                            children: c.map((function(n) {
                                return (0, s.jsx)(I.yM, {
                                    label: n.criteria.name,
                                    value: n.score
                                }, n.id)
                            }))
                        })
                    })
                };
            Se.propTypes = {
                votingCartItem: d().object,
                username: d().string,
                challengeId: d().string,
                onDelete: d().func
            };
            var ke = Se,
                Ee = function(n) {
                    var e = n.votingCartItems,
                        r = void 0 === e ? [] : e,
                        t = n.onClose,
                        i = void 0 === t ? function() {} : t,
                        o = (n.onSubmit, n.balance, n.username),
                        a = n.challengeId,
                        l = (0, _.$G)("common").t,
                        u = (0, c.useState)(r),
                        d = u[0],
                        f = u[1];
                    return (0, s.jsxs)(Ie, {
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(I.Fg, {
                                style: {
                                    margin: "0 0 30px 0"
                                },
                                color: "danger",
                                value: l("checkout_explained")
                            }), d.map((function(n) {
                                return (0, s.jsx)(ke, {
                                    votingCartItem: n,
                                    username: o,
                                    challengeId: a,
                                    onDelete: function(n) {
                                        var e = d.filter((function(e) {
                                            return e.id !== n
                                        }));
                                        0 === e.length ? i() : f(e)
                                    }
                                }, n.id)
                            }))]
                        }), (0, s.jsx)(I.mz, {
                            closeValue: l("close"),
                            closeAction: i
                        })]
                    })
                };
            Ee.propTypes = {
                votingCartItems: d().array,
                onClose: d().func,
                onSubmit: d().func,
                username: d().string,
                challengeId: d().string,
                balance: d().number
            };
            var Ge = Ee,
                Ze = r(30819),
                Te = r(16222),
                Ae = function(n) {
                    var e = n.votingCartId,
                        r = n.challengeId,
                        t = n.username,
                        i = (0, o.Z)((0, dn.D)(ye.LW, {
                            variables: {
                                votingCartIds: [e]
                            },
                            refetchQueries: [{
                                query: Te.l,
                                variables: {
                                    username: t,
                                    challengeId: r
                                }
                            }, {
                                query: Ze.qG,
                                variables: {
                                    challengeId: r
                                }
                            }]
                        }), 2),
                        a = i[0],
                        l = i[1];
                    return [a, {
                        loading: l.loading,
                        error: l.error,
                        data: l.data
                    }]
                },
                Ue = function(n) {
                    var e = n.votingCartId,
                        r = void 0 === e ? "" : e,
                        i = n.challengeId,
                        a = n.username,
                        c = n.onClose,
                        u = void 0 === c ? function() {} : c,
                        d = n.onSubmit,
                        f = n.onError,
                        h = (0, _.$G)("common").t,
                        g = (0, o.Z)(Ae({
                            votingCartId: r,
                            challengeId: i,
                            username: a
                        }), 2),
                        p = g[0],
                        x = g[1].loading;
                    return (0, s.jsxs)(Ie, {
                        children: [(0, s.jsxs)("div", {
                            className: "main-content",
                            children: [(0, s.jsx)("p", {
                                style: {
                                    marginBottom: "15px"
                                },
                                children: (0, s.jsx)("strong", {
                                    children: h("are_you_sure_to_proceed_voting")
                                })
                            }), (0, s.jsx)("p", {
                                style: {
                                    marginBottom: "30px"
                                },
                                children: h("vote_action_is_irreversible")
                            })]
                        }), (0, s.jsx)(I.mz, {
                            closeValue: h("close"),
                            closeAction: u,
                            children: (0, s.jsx)(I.zx, {
                                disabled: x,
                                action: (0, t.Z)((function() {
                                    var n, e;
                                    return (0, l.__generator)(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 2, , 3]), [4, p()];
                                            case 1:
                                                return r.sent(), d(), [3, 3];
                                            case 2:
                                                return n = r.sent(), f(n), q.Z.send({
                                                    eventIndex: W.Z.GENERAL_LOG,
                                                    url: null === window || void 0 === window || null === (e = window.location) || void 0 === e ? void 0 : e.href,
                                                    error: n
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                })),
                                value: h("checkout")
                            }, "checkout-cart-button-step2")
                        })]
                    })
                };
            Ue.propTypes = {
                votingCartId: d().string,
                challengeId: d().string,
                username: d().string,
                onClose: d().func,
                onSubmit: d().func,
                onError: d().func
            };
            var De = Ue,
                Re = function(n) {
                    var e = n.votingCart,
                        r = n.isShowing,
                        t = void 0 !== r && r,
                        i = n.balance,
                        o = n.username,
                        a = n.challengeId,
                        l = n.onClose,
                        u = void 0 === l ? function() {} : l,
                        d = n.onCheckout,
                        f = n.onCheckoutError,
                        h = (0, _.$G)("common").t,
                        g = (0, c.useState)(1),
                        p = g[0],
                        x = g[1],
                        v = h(1 === p ? "voting_cart" : "checkout_votes");
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)(I.VF, {
                            isShowing: t,
                            hide: u,
                            title: v,
                            footerHidden: !0,
                            children: [1 === p && (0, s.jsx)(Ge, {
                                votingCartItems: e.items,
                                onClose: u,
                                username: o,
                                balance: i,
                                challengeId: a,
                                onSubmit: function() {
                                    x(p + 1)
                                }
                            }), 2 === p && (0, s.jsx)(De, {
                                votingCartItems: e.items,
                                votingCartId: e.id,
                                balance: i,
                                onClose: u,
                                username: o,
                                challengeId: a,
                                onError: function(n) {
                                    f(n)
                                },
                                onSubmit: function() {
                                    d()
                                }
                            })]
                        })
                    })
                },
                Ne = Re;

            function Pe() {
                var n = (0, a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: ", " 0;\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-left: ", ";\n      width: auto;\n      height: ", ";\n    }\n  }\n\n  &:not(:last-child) {\n    border-bottom: ", " solid ", ";\n  }\n\n  &:first-child {\n    font-weight: ", ";\n  }\n"]);
                return Pe = function() {
                    return n
                }, n
            }
            Re.propTypes = {
                votingCart: d().object,
                isShowing: d().bool,
                balance: d().number,
                username: d().string,
                challengeId: d().string,
                onClose: d().func,
                onCheckout: d().func,
                onCheckoutError: d().func
            };
            var Me = f.ZP.div.withConfig({
                    componentId: "sc-ffd37637-0"
                })(Pe(), (0, h.hO)("5px"), (0, h.hO)("5px"), (0, h.hO)("20px"), (0, h.hO)("1px"), C.O9.grey400, C.cp.fontWeigthSemiBold),
                Ve = function(n) {
                    var e = n.items;
                    return (0, s.jsx)("div", {
                        children: e.map((function(n, e) {
                            return (0, s.jsxs)(Me, {
                                children: [(0, s.jsx)("div", {
                                    children: (0, s.jsx)("span", {
                                        style: {
                                            color: n.value < 0 ? C.O9.red500 : C.O9.black
                                        },
                                        children: n.label
                                    })
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("span", {
                                        style: {
                                            color: n.value < 0 ? C.O9.red500 : C.O9.black
                                        },
                                        children: n.value
                                    }), " ", (0, s.jsx)(I.JO, {
                                        icon: "vkai",
                                        fill: n.value < 0 ? C.O9.red500 : C.O9.black
                                    })]
                                })]
                            }, e)
                        }))
                    })
                };
            Ve.propTypes = {
                items: d().array.isRequired
            };
            var Le = Ve,
                $e = 1e9,
                ze = function(n) {
                    var e, r, t = n.votingCartItem,
                        i = (n.username, n.userBalance),
                        o = n.onDeleted,
                        a = n.challengeId,
                        l = n.onChangeAmount,
                        u = (n.guestUserId, t.project),
                        d = (0, _.$G)("common").t,
                        f = (0, c.useState)((0, D.ME)(t.amount || 0).value),
                        h = f[0],
                        g = f[1];
                    return (0, s.jsx)(Fe, {
                        name: u.name,
                        id: t.id,
                        challengeId: a,
                        deleteAction: function() {
                            return o(t.id)
                        },
                        avatarUrl: (0, z.V6)(null !== (r = null === (e = u.logoImageFile) || void 0 === e ? void 0 : e.url) && void 0 !== r ? r : ""),
                        children: (0, s.jsx)(I.cw, {
                            label: d("amount"),
                            currency: "vkai",
                            children: (0, s.jsx)(I.nv, {
                                type: "number",
                                name: "amount",
                                max: i,
                                value: h,
                                onChange: function(n) {
                                    var e = function(n) {
                                        var e = n.event,
                                            r = parseInt(e.target.value);
                                        return Number.isInteger(r) && r >= 1 ? {
                                            result: r,
                                            error: !1
                                        } : {
                                            result: 0,
                                            error: !0
                                        }
                                    }({
                                        event: n
                                    }).result;
                                    if (e > $e) return g($e), void l(t.id, $e);
                                    g(e || ""), l(t.id, e)
                                }
                            })
                        })
                    })
                };
            ze.propTypes = {
                votingCartItem: d().object,
                username: d().string,
                onDeleted: d().func,
                challengeId: d().string,
                onChangeAmount: d().func
            };
            var Je = ze,
                He = function(n) {
                    var e = n.onSaved,
                        r = n.onError,
                        t = n.username,
                        i = n.challengeId,
                        a = n.guestUserId,
                        l = (0, o.Z)((0, dn.D)(ye.Bc, {
                            onCompleted: function(n) {
                                n.updateVotingCartItems ? e(n.updateVotingCartItems) : r("Failed to Save Voting Cart Items ... ")
                            },
                            onError: function(n) {
                                console.error("Error updating webhook config! error: ", n), r(n)
                            },
                            refetchQueries: [{
                                query: Te.l,
                                variables: {
                                    username: t,
                                    challengeId: i,
                                    guestUserId: a
                                }
                            }]
                        }), 2),
                        s = l[0],
                        c = l[1];
                    return [s, {
                        loading: c.loading,
                        error: c.error,
                        data: c.data
                    }]
                },
                qe = function(n) {
                    var e = n.checkoutIsAutomatic,
                        r = n.votingCartItems,
                        i = void 0 === r ? [] : r,
                        a = n.onClose,
                        u = void 0 === a ? function() {} : a,
                        d = n.onSubmit,
                        f = void 0 === d ? function() {} : d,
                        h = n.balance,
                        g = void 0 === h ? 0 : h,
                        p = n.username,
                        x = n.challengeId,
                        v = n.guestUserId,
                        m = n.onVotingCartItemsChange,
                        j = void 0 === m ? function() {} : m,
                        y = (0, U.Z)(),
                        b = (0, _.$G)("common").t,
                        O = (0, un.Z)(i).sort((function(n, e) {
                            return e.amount - n.amount
                        })),
                        w = (0, c.useState)(!1),
                        B = w[0],
                        C = w[1],
                        F = (0, c.useState)(O),
                        S = F[0],
                        k = F[1],
                        E = S.reduce((function(n, e) {
                            return n + (0, D.ME)(e.amount).value
                        }), 0),
                        G = g - E,
                        Z = (0, o.Z)(He({
                            onSaved: function() {},
                            onError: function() {},
                            username: p,
                            guestUserId: v,
                            challengeId: x
                        }), 2),
                        T = Z[0];
                    Z[1].loading;
                    return (0, s.jsxs)(Ie, {
                        children: [(0, s.jsxs)("div", {
                            children: [e && (0, s.jsx)(I.Fg, {
                                style: {
                                    margin: "0 0 30px 0"
                                },
                                color: "danger",
                                value: b("token_automatically_checkout_explained")
                            }), S.map((function(n) {
                                return (0, s.jsx)(Je, {
                                    votingCartItem: n,
                                    guestUserId: v,
                                    username: p,
                                    userBalance: g,
                                    challengeId: x,
                                    onDeleted: function(n) {
                                        var e = S.filter((function(e) {
                                            return e.id !== n
                                        }));
                                        k(e), C(!0), 0 === e.length && u()
                                    },
                                    onChangeAmount: function(n, e) {
                                        var r = S.findIndex((function(e) {
                                                return e.id === n
                                            })),
                                            t = (0, un.Z)(S);
                                        t[r].amount = (0, D.yY)(e).valueBigInt.toNumber(), k(t), j(t), C(!0)
                                    }
                                }, n.id)
                            }))]
                        }), (0, s.jsxs)("div", {
                            children: [G < 0 && (0, s.jsx)(I.Fg, {
                                style: {
                                    margin: "15px 0"
                                },
                                color: "red",
                                value: b(e ? "not_enough_balance_automatic_vote" : "not_enough_balance_to_vote")
                            }), (0, s.jsx)(Le, {
                                items: [{
                                    label: b("total"),
                                    value: E.toLocaleString(y)
                                }, {
                                    label: b("balance"),
                                    value: g.toLocaleString(y)
                                }, {
                                    label: b("after_checkout"),
                                    value: G.toLocaleString(y)
                                }]
                            }), (0, s.jsx)(I.mz, {
                                closeValue: b("close"),
                                closeAction: (0, t.Z)((function() {
                                    return (0, l.__generator)(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return B ? [4, We(S, T)] : [3, 2];
                                            case 1:
                                                n.sent(), n.label = 2;
                                            case 2:
                                                return u(), [2]
                                        }
                                    }))
                                })),
                                children: !e && (0, s.jsx)(I.zx, {
                                    disabled: G < 0,
                                    value: b("proceed_to_checkout"),
                                    action: (0, t.Z)((function() {
                                        return (0, l.__generator)(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return B ? [4, We(S, T)] : [3, 2];
                                                case 1:
                                                    n.sent(), n.label = 2;
                                                case 2:
                                                    return f(), [2]
                                            }
                                        }))
                                    }))
                                }, "checkout-cart-button-step1")
                            })]
                        })]
                    })
                };

            function We(n, e) {
                return Ye.apply(this, arguments)
            }

            function Ye() {
                return (Ye = (0, t.Z)((function(n, e) {
                    var r, t;
                    return (0, l.__generator)(this, (function(i) {
                        return r = n.map((function(n) {
                            return n.id
                        })), t = n.map((function(n) {
                            return {
                                amount: n.amount
                            }
                        })), [2, e({
                            variables: {
                                ids: r,
                                data: t
                            }
                        })]
                    }))
                }))).apply(this, arguments)
            }
            qe.propTypes = {
                checkoutIsAutomatic: d().bool,
                votingCartItems: d().array,
                onClose: d().func,
                onSubmit: d().func,
                balance: d().number,
                guestUserId: d().string,
                username: d().string,
                challengeId: d().string
            };
            var Qe = qe;

            function Ke() {
                var n = (0, a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: ", " 0;\n\n  > div {\n    display: flex;\n\n    &:last-child {\n      margin-top: ", ";\n      height: max-content;\n      align-items: center;\n    }\n\n    svg.kai-icon {\n      margin-left: ", ";\n      width: auto;\n      height: ", ";\n    }\n  }\n\n  &:not(:last-child) {\n    border-bottom: ", " solid ", ";\n  }\n"]);
                return Ke = function() {
                    return n
                }, n
            }
            var Xe = f.ZP.div.withConfig({
                    componentId: "sc-8e048a5b-0"
                })(Ke(), (0, h.hO)("10px"), (0, h.hO)("2px"), (0, h.hO)("5px"), (0, h.hO)("20px"), (0, h.hO)("1px"), C.O9.grey400),
                nr = function(n) {
                    var e, r, t = n.votingCartItem,
                        i = t.project,
                        o = t.amount,
                        a = t.assess,
                        l = (0, U.Z)();
                    return (0, s.jsxs)(Xe, {
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(I.F$, {
                                url: (0, z.V6)(null !== (r = null === (e = i.logoImageFile) || void 0 === e ? void 0 : e.url) && void 0 !== r ? r : ""),
                                alt: i.name
                            }), (0, s.jsx)("span", {
                                style: {
                                    margin: "2px 0 0 5px"
                                },
                                children: i.name
                            })]
                        }), (0, s.jsxs)("div", {
                            children: [o && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("span", {
                                    children: (0, D.ME)(null !== o && void 0 !== o ? o : 0).value.toLocaleString(l)
                                }), (0, s.jsx)(I.JO, {
                                    icon: "vkai",
                                    className: "kai-icon"
                                })]
                            }), a && (0, s.jsx)(I.JO, {
                                icon: "GO" === a ? "thumb-up" : "thumb-down",
                                fill: "GO" === a ? "hsl(186, 62%, 59%)" : "hsl(354, 83%, 64%)",
                                className: "kai-icon"
                            })]
                        })]
                    })
                };
            nr.propTypes = {
                votingCartItem: d().object
            };
            var er = nr,
                rr = r(97398);

            function tr() {
                var n = (0, a.Z)(["\n  border-top: ", " solid ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: ", " 0;\n  font-weight: ", ";\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-left: ", ";\n      width: auto;\n      height: ", ";\n    }\n  }\n"]);
                return tr = function() {
                    return n
                }, n
            }

            function ir() {
                var n = (0, a.Z)(["\n  border: 2px solid ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  padding: ", ";\n\n  .checkbox {\n    margin-top: ", ";\n\n    span {\n      border-color: ", ";\n    }\n\n    input {\n      &:checked:not(:disabled) ~ span {\n        border-color: ", ";\n        background-color: ", ";\n      }\n\n      + span:after {\n        border-color: ", ";\n      }\n    }\n  }\n"]);
                return ir = function() {
                    return n
                }, n
            }
            var or = f.ZP.div.withConfig({
                    componentId: "sc-cf57051a-0"
                })(tr(), (0, h.hO)("1px"), C.O9.grey400, (0, h.hO)("12px"), C.cp.fontWeigthSemiBold, (0, h.hO)("5px"), (0, h.hO)("20px")),
                ar = f.ZP.div.withConfig({
                    componentId: "sc-cf57051a-1"
                })(ir(), C.O9.red500, (0, h.hO)("6px"), C.O9.red200, (0, h.hO)("15px"), (0, h.hO)("15px"), C.O9.grey600, C.O9.green500, C.O9.white, C.O9.green500),
                lr = function(n) {
                    var e = n.votingCartItems,
                        r = void 0 === e ? [] : e,
                        i = n.votingCartId,
                        a = void 0 === i ? "" : i,
                        u = n.challengeId,
                        d = n.username,
                        f = n.balance,
                        h = n.onClose,
                        g = void 0 === h ? function() {} : h,
                        p = n.onSubmit,
                        x = n.onError,
                        v = (0, U.Z)(),
                        m = (0, ce.VY)(),
                        j = (0, _.$G)("common").t,
                        y = (0, c.useState)(!1),
                        b = y[0],
                        O = y[1],
                        w = (0, o.Z)(Ae({
                            votingCartId: a,
                            challengeId: u,
                            username: d
                        }), 2),
                        B = w[0],
                        C = w[1].loading,
                        F = function(n) {
                            for (var e = 0, r = 0; r < n.length; r++) e = (0, D.yY)(n[r].amount).value + (0, D.yY)(e).value;
                            return (0, D.ME)(e).value
                        },
                        S = (0, un.Z)(r).sort((function(n, e) {
                            return e.amount - n.amount
                        })),
                        k = 1 === r.length && F(r) >= f;
                    return (0, s.jsxs)(Ie, {
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)("p", {
                                style: {
                                    marginBottom: "15px"
                                },
                                children: (0, s.jsx)("strong", {
                                    children: j("are_you_sure_to_proceed_voting")
                                })
                            }), (0, s.jsx)("p", {
                                style: {
                                    marginBottom: "30px"
                                },
                                children: j("vote_token_action_is_irreversible")
                            }), (0, s.jsx)("div", {
                                children: S.map((function(n) {
                                    return (0, s.jsx)(er, {
                                        votingCartItem: n
                                    }, n.id)
                                }))
                            }), (0, s.jsxs)(or, {
                                children: [(0, s.jsx)("div", {
                                    children: (0, s.jsx)("span", {
                                        children: j("total")
                                    })
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("span", {
                                        children: F(r).toLocaleString(v)
                                    }), " ", (0, s.jsx)(I.JO, {
                                        icon: "vkai"
                                    })]
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            children: [k && (0, s.jsxs)(ar, {
                                children: [(0, s.jsxs)("p", {
                                    children: [(0, s.jsx)("strong", {
                                        children: j("all_available_balance")
                                    }), " ", j("no_going_back")]
                                }), (0, s.jsx)(I.XZ, {
                                    label: j("i_am_aware"),
                                    value: "isAware",
                                    checked: b,
                                    onChange: function(n) {
                                        O(!b)
                                    }
                                })]
                            }), (0, s.jsx)(I.mz, {
                                closeValue: j("cancel"),
                                closeAction: g,
                                children: (0, s.jsx)(I.zx, {
                                    disabled: k && !b || C,
                                    action: (0, t.Z)((function() {
                                        var n, e;
                                        return (0, l.__generator)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return r.trys.push([0, 3, , 4]), [4, B()];
                                                case 1:
                                                    return r.sent(), [4, p()];
                                                case 2:
                                                    return r.sent(), [3, 4];
                                                case 3:
                                                    return n = r.sent(), x(n), (0, rr.y)(n, {
                                                        t: j,
                                                        alert: m
                                                    }), q.Z.send({
                                                        eventIndex: W.Z.GENERAL_LOG,
                                                        url: null === window || void 0 === window || null === (e = window.location) || void 0 === e ? void 0 : e.href,
                                                        error: n
                                                    }), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    value: j("checkout")
                                }, "checkout-cart-button-step2")
                            })]
                        })]
                    })
                };
            lr.propTypes = {
                votingCartItems: d().array,
                votingCartId: d().string,
                challengeId: d().string,
                username: d().string,
                onClose: d().func,
                onSubmit: d().func,
                onError: d().func
            };
            var sr = lr,
                cr = function(n) {
                    var e, r = n.votingCart,
                        i = n.isShowing,
                        o = void 0 !== i && i,
                        a = n.balance,
                        u = n.username,
                        d = n.challengeId,
                        f = n.checkoutIsAutomatic,
                        h = void 0 !== f && f,
                        g = n.onClose,
                        p = void 0 === g ? function() {} : g,
                        x = n.onCheckout,
                        v = n.onCheckoutError,
                        m = n.guestUserId,
                        j = (0, _.$G)("common").t,
                        y = (0, c.useState)(null !== (e = null === r || void 0 === r ? void 0 : r.items) && void 0 !== e ? e : []),
                        b = y[0],
                        O = y[1],
                        w = (0, c.useState)(1),
                        B = w[0],
                        C = w[1],
                        F = j(1 === B ? "voting_cart" : "checkout_votes");
                    return (0, c.useEffect)((function() {
                        var n;
                        O(null !== (n = null === r || void 0 === r ? void 0 : r.items) && void 0 !== n ? n : [])
                    }), [r]), (0, s.jsxs)(I.VF, {
                        isShowing: o,
                        hide: p,
                        title: F,
                        footerHidden: !0,
                        children: [1 === B && (0, s.jsx)(Qe, {
                            votingCartItems: b,
                            balance: a,
                            onClose: p,
                            username: u,
                            guestUserId: m,
                            checkoutIsAutomatic: h,
                            challengeId: d,
                            onVotingCartItemsChange: function(n) {
                                return O(n)
                            },
                            onSubmit: function() {
                                C(B + 1)
                            }
                        }), 2 === B && (0, s.jsx)(sr, {
                            votingCartItems: b,
                            votingCartId: r.id,
                            username: u,
                            challengeId: d,
                            balance: a,
                            onClose: p,
                            onError: function(n) {
                                v(n)
                            },
                            onSubmit: (0, t.Z)((function() {
                                return (0, l.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, x()];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                }))
                            }))
                        })]
                    })
                },
                ur = cr;
            cr.propTypes = {
                votingCart: d().object,
                isShowing: d().bool,
                balance: d().number,
                username: d().string,
                guestUserId: d().string,
                challengeId: d().string,
                checkoutIsAutomatic: d().bool,
                onClose: d().func,
                onCheckout: d().func,
                onCheckoutError: d().func
            };
            r(61256);
            var dr = function(n) {
                    var e, r, t, o, a, l, c, u = n.votingCart,
                        d = (n.challengeId, (0, xe.Z)(n, ["votingCart", "challengeId"])),
                        f = null !== (l = null === (e = u.votingTrack) || void 0 === e ? void 0 : e.votingType) && void 0 !== l ? l : "",
                        h = "AUTOMATIC" === (null === (r = u.step) || void 0 === r || null === (t = r.challenge) || void 0 === t || null === (o = t.privateConfiguration) || void 0 === o ? void 0 : o.votingCheckoutType),
                        g = null !== (c = null === (a = u.votingTrack.wallets) || void 0 === a ? void 0 : a.reduce((function(n, e) {
                            return n + (0, D.ME)(e.balance).value
                        }), 0)) && void 0 !== c ? c : 0;
                    switch (f) {
                        case "CRITERIA":
                            return (0, s.jsx)(Ne, (0, b.Z)((0, i.Z)({}, d), {
                                votingCart: u,
                                balance: g
                            }));
                        case "TOKEN":
                            return (0, s.jsx)(ur, (0, b.Z)((0, i.Z)({}, d), {
                                votingCart: u,
                                balance: g,
                                checkoutIsAutomatic: h
                            }));
                        default:
                            return console.error("CheckoutDrawer votingType is null"), (0, s.jsx)(s.Fragment, {})
                    }
                },
                fr = dr;
            dr.propTypes = {
                votingCart: d().object,
                isShowing: d().bool,
                username: d().string,
                challengeId: d().string,
                onClose: d().func
            };
            r(72055);

            function hr() {
                var n = (0, a.Z)(["\n  subscription VOTING_CARTS_SUBSCRIPTION($userId: ID!) {\n    votingCartsSub(userId: $userId) {\n      ...VotingCartsFragment\n    }\n  }\n  ", "\n"]);
                return hr = function() {
                    return n
                }, n
            }(0, Vn.Ps)(hr(), Te.X);

            function gr() {
                var n = (0, a.Z)(["\n  --size: rem('30px');\n  position: relative;\n  width: auto;\n  height: var(--size);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    width: var(--size);\n    height: var(--size);\n\n    &:after {\n      content: '';\n      position: absolute;\n      border-radius: 999px;\n      top: 0;\n      right: 0;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n    }\n  }\n\n  > svg {\n    display: ", ";\n    position: absolute;\n    top: ", ";\n    right: ", ";\n    width: auto;\n    height: ", " !important;\n  }\n"]);
                return gr = function() {
                    return n
                }, n
            }
            var pr = f.ZP.div.withConfig({
                    componentId: "sc-b5534240-0"
                })(gr(), (function(n) {
                    return n.warning ? "transparent" : C.O9.red500
                }), (0, h.hO)("10px"), (0, h.hO)("10px"), (function(n) {
                    return n.warning ? "inherit" : "none"
                }), (0, h.hO)("-1px"), (0, h.hO)("-5px"), (0, h.hO)("20px")),
                xr = function() {
                    var n, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (!e) return [];
                    var r = null !== (n = e.items) && void 0 !== n ? n : [];
                    return r.filter((function(n) {
                        return "ACTIVE" === n.status
                    }))
                },
                vr = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return !!n && xr(n).length > 0
                },
                mr = function(n) {
                    var e, r, i, a = n.user,
                        u = (0, _.$G)("common").t,
                        d = (0, ce.VY)(),
                        f = (0, X.q)(),
                        h = f.currentVotingCarts,
                        g = f.refetchCurrentVotingCarts,
                        p = null === (e = a.me) || void 0 === e ? void 0 : e.username,
                        x = (0, c.useState)(!1),
                        v = x[0],
                        m = x[1],
                        j = (0, c.useState)(null),
                        y = j[0],
                        b = j[1],
                        O = function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).filter((function(n) {
                                return vr(n)
                            }))
                        }(h),
                        w = O.length > 0,
                        B = (0, o.Z)(O, 1)[0],
                        F = 1 === O.length,
                        S = O.length > 1,
                        k = function() {
                            var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((function(n) {
                                var e, r, t, i, o = null !== (t = null === n || void 0 === n || null === (e = n.votingTrack) || void 0 === e || null === (r = e.wallets) || void 0 === r ? void 0 : r.reduce((function(n, e) {
                                    return n + (0, D.ME)(e.balance).value
                                }), 0)) && void 0 !== t ? t : 0;
                                return n.items.reduce((function(n, e) {
                                    return Number(n) + (0, D.ME)(null !== (i = null === e || void 0 === e ? void 0 : e.amount) && void 0 !== i ? i : 0).value
                                }), 0) > o
                            }));
                            return -1 !== n.indexOf(!0)
                        }(O),
                        E = null;
                    if (S) E = (null === y || void 0 === y ? void 0 : y.step) ? null === y || void 0 === y || null === (r = y.step) || void 0 === r || null === (i = r.challenge) || void 0 === i ? void 0 : i.id : (null === y || void 0 === y ? void 0 : y.items) ? null === y || void 0 === y ? void 0 : y.items[0].project.challenge.id : null;
                    else if (F) {
                        var G, Z, T;
                        E = null !== (T = null === (G = O[0].step) || void 0 === G || null === (Z = G.challenge) || void 0 === Z ? void 0 : Z.id) && void 0 !== T ? T : O[0].items[0].project.challenge.id
                    }
                    return (0, s.jsxs)(s.Fragment, {
                        children: [w && (0, s.jsxs)(pr, {
                            warning: k,
                            children: [(0, s.jsx)(I.zx, {
                                icon: "transferReceived",
                                color: "purple850",
                                variant: "text",
                                disabled: !w,
                                action: function() {
                                    m(!v)
                                }
                            }), (0, s.jsx)(I.JO, {
                                icon: "warning",
                                fill: C.O9.yellow500
                            })]
                        }), v && (F || y) && (0, s.jsx)(fr, {
                            isShowing: v,
                            onClose: function() {
                                m(!1), b(null)
                            },
                            votingCart: y || B,
                            username: p,
                            guestUserId: a.me.id,
                            challengeId: E,
                            onCheckout: (0, t.Z)((function() {
                                return (0, l.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, g()];
                                        case 1:
                                            return n.sent(), d.success(u("votes_submitted_with_success")), m(!1), b(null), [2]
                                    }
                                }))
                            })),
                            onCheckoutError: function() {
                                d.error(u("failed_to_checkout_voting_cart")), m(!1), b(null)
                            }
                        }), v && S && !y && (0, s.jsx)(pe, {
                            votingCarts: O,
                            onCartChange: function(n) {
                                b(n)
                            },
                            onCloseDropDown: function() {
                                v && m(!1)
                            }
                        })]
                    })
                };
            mr.propTypes = {
                user: d().object
            };
            var jr = mr,
                Ir = r(53903),
                yr = r(10903),
                br = function() {
                    var n = (0, X.q)().handleTopBarAlert,
                        e = (0, _.$G)().i18n.language,
                        r = function(n) {
                            var e = "Complete Quests, Earn Points!",
                                r = "Learn more";
                            return "br" === n && (e = "Complete a\xe7\xf5es, ganhe pontos!", r = "Saiba mais"), "es" === n && (e = "\xa1Completa misiones, gana puntos!", r = "Aprende m\xe1s"), "fr" === n && (e = "Compl\xe9tez des qu\xeates, gagnez des points!", r = "En savoir plus"), {
                                warning: e,
                                cta: r
                            }
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(v(), {
                            href: "/point-system",
                            children: (0, s.jsxs)("a", {
                                children: [(0, s.jsx)("span", {
                                    children: r(e).warning
                                }), (0, s.jsxs)("span", {
                                    className: "cta",
                                    children: [r(e).cta, " \u2192"]
                                })]
                            })
                        }), (0, s.jsx)(I.zx, {
                            variant: "text",
                            color: "grey700",
                            icon: "cross",
                            action: function() {
                                return n("close")
                            }
                        })]
                    })
                };

            function _r() {
                var n = (0, a.Z)(["\n  display: inherit !important;\n  border: 0;\n  background-color: transparent;\n  min-width: ", ";\n  height: ", " !important;\n  padding: 0 !important;\n\n  .avatar-img {\n    width: ", ";\n    height: ", ";\n    border-width: ", ";\n    border-color: ", ";\n  }\n"]);
                return _r = function() {
                    return n
                }, n
            }
            var Or = f.ZP.button.withConfig({
                    componentId: "sc-da89d7f5-0"
                })(_r(), (0, h.hO)("40px"), (0, h.hO)("40px"), (0, h.hO)("40px"), (0, h.hO)("40px"), (0, h.hO)("2px"), C.lI.borderColor),
                wr = (p()().publicRuntimeConfig, function(n) {
                    var e, r, t, i = n.noindex,
                        a = n.title,
                        l = n.fullTitle,
                        u = (n.topbarBg, n.children),
                        d = n.user,
                        f = n.pageUrl,
                        h = n.asPath,
                        g = n.description,
                        p = n.keywords,
                        x = n.author,
                        b = n.twitterCard,
                        O = n.twitterSite,
                        w = n.twitterDescription,
                        B = n.twitterImage,
                        F = n.openGraphType,
                        S = n.openGraphImage,
                        k = n.openGraphDescription,
                        E = n.openGraphLocale,
                        G = n.nav,
                        Z = void 0 === G || G,
                        T = n.footer,
                        A = void 0 === T || T,
                        U = n.canonicalUrl,
                        D = n.canonicalPath,
                        R = n.disableAnalytics,
                        N = (0, X.q)().isTopBarAlertOpened,
                        P = (0, gn.Z)({
                            initialValue: !1
                        }),
                        M = P.ref,
                        V = P.isVisible,
                        L = P.setIsVisible,
                        J = (0, c.useState)(!1),
                        H = J[0],
                        q = J[1],
                        W = (0, c.useState)(!1),
                        Q = W[0],
                        K = W[1],
                        nn = (0, c.useState)([]),
                        rn = nn[0],
                        tn = (nn[1], (0, _.$G)(["navigation"])),
                        on = tn.t,
                        an = tn.i18n.language,
                        ln = jn.locales.available.find((function(n) {
                            return n.locale === an
                        })),
                        sn = (d || {}).isLoggedIn,
                        un = void 0 !== sn && sn,
                        dn = null !== (e = "User" === (null === d || void 0 === d ? void 0 : d.type)) && void 0 !== e && e,
                        fn = (0, yr.s)(d),
                        hn = ((0, o.Z)((0, Y.H)(), 1)[0], rn.length > 0 || Q);
                    return (0, s.jsxs)(le.Z, {
                        disableScroll: hn,
                        disableAnalytics: R,
                        children: [(0, s.jsx)(m.Z, {
                            noindex: i,
                            fullTitle: l,
                            title: a,
                            pageUrl: f,
                            description: g,
                            keywords: p,
                            author: x,
                            twitterCard: b,
                            twitterSite: O,
                            twitterDescription: w,
                            twitterImage: B,
                            openGraphType: F,
                            openGraphImage: S,
                            openGraphDescription: k,
                            openGraphLocale: E,
                            canonicalUrl: U,
                            canonicalPath: D,
                            disableAnalytics: R
                        }), Z && (0, s.jsx)(j.Z, {
                            alert: !0 === N ? (0, s.jsx)(br, {}) : void 0,
                            isLoggedIn: un,
                            isGuestUser: fn,
                            drawerOpened: Q,
                            drawerOnClick: function() {
                                K(!Q)
                            },
                            logo: (0, s.jsx)(v(), {
                                href: "/",
                                prefetch: !1,
                                children: (0, s.jsx)("a", {
                                    children: (0, s.jsx)(se.$l, {
                                        fill: C.lI.color
                                    })
                                })
                            }),
                            actionButtons: (null === d || void 0 === d ? void 0 : d.isLoggedIn) ? (0, s.jsxs)(s.Fragment, {
                                children: [V && (0, s.jsx)(en, {
                                    enableGuestView: fn,
                                    user: d
                                }), (0, s.jsx)(jr, {
                                    user: d
                                }), dn && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(cn, {
                                        userId: d.me.id
                                    }), (0, s.jsx)(oe, {
                                        userId: d.isLoggedIn && d.me ? d.me.id : ""
                                    }), (0, s.jsx)(Or, {
                                        ref: M,
                                        className: "user-avatar",
                                        onClick: function() {
                                            L(!V)
                                        },
                                        children: (0, s.jsx)(I.F$, {
                                            url: (0, z.un)((0, $.Dm)(null !== (r = null === d || void 0 === d ? void 0 : d.me) && void 0 !== r ? r : "")),
                                            alt: d.me.fullName || d.me.username
                                        })
                                    })]
                                }), !dn && (0, s.jsx)(Or, {
                                    ref: M,
                                    className: "user-avatar",
                                    onClick: function() {
                                        L(!V)
                                    },
                                    children: (0, s.jsx)(I.F$, {
                                        boringType: "beam",
                                        alt: d.me.nickname
                                    })
                                })]
                            }) : (0, s.jsx)(I.ZP, {
                                className: "login-button",
                                color: "purple500",
                                txtColor: "white",
                                value: on("log_in_button"),
                                url: h ? "/".concat(an, "/login?referer=").concat(h) : "/".concat(an, "/login"),
                                dataTestId: "login-button",
                                action: function() {
                                    Ir.Z.pushEvent("login_click")
                                }
                            })
                        }), u, A && (0, s.jsx)(y.Z, {
                            isGuestUser: fn,
                            languageValue: null !== (t = null === ln || void 0 === ln ? void 0 : ln.label) && void 0 !== t ? t : "en",
                            languageAction: function() {
                                q(!H)
                            }
                        }), H && (0, s.jsx)(ae.Z, {
                            isShowing: H,
                            hide: function() {
                                q(!H)
                            }
                        })]
                    })
                });
            wr.getInitialProps = function() {
                var n = (0, t.Z)((function(n) {
                    var e;
                    return (0, l.__generator)(this, (function(r) {
                        return e = n.renderPage, n.renderPage = function() {
                            return e({
                                enhanceApp: function(n) {
                                    return function(e) {
                                        sheet.collectStyles((0, s.jsx)(n, (0, i.Z)({}, e)))
                                    }
                                }
                            })
                        }, [2]
                    }))
                }));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }(), wr.defaultProps = {
                topbarBg: "",
                noindex: !1,
                nav: !0,
                footer: !0,
                asPath: void 0,
                disableAnalytics: !1
            }, wr.propTypes = {
                noindex: d().bool,
                title: d().string,
                pageUrl: d().string,
                fullTitle: d().string,
                topbarBg: d().string,
                description: d().string,
                keywords: d().string,
                author: d().string,
                nav: d().bool,
                footer: d().bool,
                twitterCard: d().string,
                twitterSite: d().string,
                twitterDescription: d().string,
                twitterImage: d().string,
                openGraphType: d().string,
                openGraphImage: d().string,
                openGraphDescription: d().string,
                openGraphLocale: d().string,
                children: d().any,
                user: d().object.isRequired,
                asPath: d().string,
                canonicalUrl: d().string,
                canonicalPath: d().string,
                disableAnalytics: d().bool
            };
            var Br = wr
        },
        31718: function(n, e, r) {
            "use strict";
            r.d(e, {
                Wd: function() {
                    return u
                },
                iD: function() {
                    return f
                },
                nV: function() {
                    return d
                },
                yk: function() {
                    return c
                }
            });
            var t = r(7297),
                i = r(31230);

            function o() {
                var n = (0, t.Z)(["\n  query MY_ACTIVE_THREADS_QUERY($page: Int, $filter: MailFilter) {\n    mailThreads(page: $page, filter: $filter) {\n      id\n      subject\n      type\n      lastMailAt\n      mailCount\n      unreadMailsCount\n      recipients {\n        user {\n          id\n          username\n          fullName\n          photoImageFile {\n            url\n          }\n          jobTitle {\n            id\n            title\n            title_br\n            description\n            description_br\n          }\n        }\n      }\n      mails(orderBy: { sentAt: desc }, first: 1) {\n        content\n        sentAt\n      }\n    }\n  }\n"]);
                return o = function() {
                    return n
                }, n
            }

            function a() {
                var n = (0, t.Z)(["\n  query THREAD_QUERY($mailThreadId: ID!) {\n    mailThread(mailThreadId: $mailThreadId) {\n      id\n      subject\n      type\n      lastMailAt\n      mailCount\n      unreadMailsCount\n      recipients {\n        user {\n          id\n          username\n          fullName\n          photoImageFile {\n            url\n          }\n        }\n      }\n      mails(orderBy: { sentAt: asc }) {\n        id\n        from {\n          id\n          username\n          fullName\n          photoImageFile {\n            url\n          }\n          jobTitle {\n            id\n            title\n          }\n        }\n        content\n        sentAt\n      }\n    }\n  }\n"]);
                return a = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, t.Z)(["\n  query MY_ACTIVE_THREADS_PAGE_INFO_QUERY {\n    mailThreadsPageInfo {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, t.Z)(["\n  subscription ON_NEW_MAIL_SUBSCRIPTION($userId: ID!) {\n    mailBoxSub(userId: $userId) {\n      action\n      mailId\n      threadId\n    }\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }
            var c = (0, i.Ps)(o()),
                u = (0, i.Ps)(a()),
                d = (0, i.Ps)(l()),
                f = (0, i.Ps)(s())
        },
        62680: function(n, e, r) {
            "use strict";
            r.d(e, {
                Bc: function() {
                    return f
                },
                LQ: function() {
                    return c
                },
                LW: function() {
                    return d
                },
                bD: function() {
                    return u
                }
            });
            var t = r(7297),
                i = r(31230);

            function o() {
                var n = (0, t.Z)(["\n  mutation ADD_VOTING_CART_ITEM_MUTATION($data: VotingCartItemCreateInputData!) {\n    createVotingCartItems(data: $data) {\n      id\n      cart {\n        id\n        items {\n          id\n          status\n          amount\n          assess\n          criteriaAppraisals {\n            id\n            score\n            criteria {\n              id\n              name\n              weight\n            }\n          }\n        }\n      }\n    }\n  }\n"]);
                return o = function() {
                    return n
                }, n
            }

            function a() {
                var n = (0, t.Z)(["\n  mutation DELETE_VOTING_CART_ITEM_MUTATION($votingCartItemId: ID!) {\n    deleteVotingCartItem(id: $votingCartItemId) {\n      id\n    }\n  }\n"]);
                return a = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, t.Z)(["\n  mutation CHECKOUT_VOTING_CART_MUTATION($votingCartIds: [ID!]!) {\n    checkoutVotingCarts(ids: $votingCartIds) {\n      message\n      code\n      errors\n    }\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, t.Z)(["\n  mutation UPDATE_VOTING_CART_ITEMS_MUTATION($ids: [ID]!, $data: [VotingCartItemUpdateInputData]!) {\n    updateVotingCartItems(ids: $ids, data: $data)\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }
            var c = (0, i.Ps)(o()),
                u = (0, i.Ps)(a()),
                d = (0, i.Ps)(l()),
                f = (0, i.Ps)(s())
        },
        10903: function(n, e, r) {
            "use strict";
            r.d(e, {
                s: function() {
                    return t
                }
            });
            var t = function(n) {
                var e, r, t, i;
                return "User" !== (null === n || void 0 === n || null === (e = n.me) || void 0 === e ? void 0 : e.__typename) && 0 !== (null === n || void 0 === n || null === (r = n.me) || void 0 === r || null === (t = r.juries) || void 0 === t ? void 0 : t.length) && "GuestUser" === (null === n || void 0 === n || null === (i = n.me) || void 0 === i ? void 0 : i.__typename)
            }
        },
        77056: function(n, e, r) {
            "use strict";
            r.d(e, {
                q: function() {
                    return o
                }
            });
            var t = r(31635),
                i = r(67294),
                o = function() {
                    return (0, i.useContext)(t.Z)
                }
        },
        7320: function(n, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            var t = r(67294);

            function i(n) {
                var e = n.initialValue,
                    r = void 0 !== e && e,
                    i = n.onClose,
                    o = void 0 === i ? function() {} : i,
                    a = n.useCapture,
                    l = void 0 !== a && a,
                    s = (0, t.useState)(r),
                    c = s[0],
                    u = s[1],
                    d = (0, t.useRef)(null),
                    f = function(n) {
                        d.current && !d.current.contains(n.target) && (u(!1), o())
                    };
                return (0, t.useEffect)((function() {
                    return document.addEventListener("click", f, l),
                        function() {
                            document.removeEventListener("click", f, l)
                        }
                }), []), {
                    ref: d,
                    isVisible: c,
                    setIsVisible: u,
                    onClose: o
                }
            }
        },
        30349: function(n, e, r) {
            "use strict";
            var t = r(67294),
                i = r(56630);
            e.Z = function() {
                var n = (0, i.$G)().i18n.language,
                    e = (0, t.useState)(null),
                    r = e[0],
                    o = e[1],
                    a = (0, t.useState)("en-US"),
                    l = a[0],
                    s = a[1];
                return (0, t.useEffect)((function() {
                    var e = (null === navigator || void 0 === navigator ? void 0 : navigator.languages) && (null === navigator || void 0 === navigator ? void 0 : navigator.languages.length) > 0 ? null === navigator || void 0 === navigator ? void 0 : navigator.languages[0] : null === navigator || void 0 === navigator ? void 0 : navigator.language;
                    o(e), r && s(r), !r && n && s(n)
                }), [r, n]), l
            }
        },
        72055: function(n, e, r) {
            "use strict";
            r.d(e, {
                u: function() {
                    return o
                }
            });
            var t = r(37887),
                i = r(16222),
                o = function(n) {
                    var e, r = n.perPage,
                        o = void 0 === r ? 30 : r,
                        a = n.challengeId,
                        l = n.username,
                        s = n.guestUserId,
                        c = (0, t.a)(i.l, {
                            variables: {
                                perPage: o,
                                challengeId: a,
                                username: l,
                                guestUserId: s
                            },
                            pollInterval: 3e4,
                            fetchPolicy: "no-cache"
                        }),
                        u = c.loading,
                        d = c.error,
                        f = c.data,
                        h = c.subscribeToMore,
                        g = c.refetch;
                    return {
                        votingCarts: null !== (e = null === f || void 0 === f ? void 0 : f.votingCarts) && void 0 !== e ? e : [],
                        loading: u,
                        error: d,
                        subscribeToMore: h,
                        refetch: g
                    }
                }
        },
        38195: function(n, e, r) {
            "use strict";
            r.d(e, {
                y: function() {
                    return o
                }
            });
            var t = r(37887),
                i = r(61256),
                o = function() {
                    var n = (0, t.a)(i.TF, {
                            fetchPolicy: "no-cache",
                            notifyOnNetworkStatusChange: !0
                        }),
                        e = n.data,
                        r = n.loading,
                        o = n.error,
                        a = n.refetch,
                        l = e ? e.me : {};
                    return {
                        isAccountVerified: !!l && l.isAccountVerified,
                        error: o,
                        loading: r,
                        refetch: a
                    }
                }
        },
        63058: function(n, e, r) {
            "use strict";
            r.d(e, {
                ME: function() {
                    return a
                },
                yY: function() {
                    return l
                }
            });
            var t = r(29815),
                i = r(70794),
                o = i.Z.clone({
                    DECIMAL_PLACES: 6
                }),
                a = function(n) {
                    var e = n.toString().split("");
                    if (e.length >= 6) {
                        var r = e.slice(-6),
                            t = n.toString().split("").slice(0, e.length - 6),
                            i = Number(t.join("")),
                            a = r ? o(Number(r.join(""))).toNumber() : 0;
                        return {
                            value: Number(t.join("")),
                            decimals: a,
                            valueWithDecimals: Number("".concat(i, ".").concat(String(a).padStart(6, "0")))
                        }
                    }
                    return {
                        value: 0,
                        decimals: n,
                        valueWithDecimals: Number("0.".concat(String(n).padStart(6, "0")))
                    }
                },
                l = function(n) {
                    var e, r = [0, 0, 0, 0, 0, 0],
                        i = n.toString().split(""),
                        a = i.includes(".") ? i.indexOf(".") : void 0,
                        l = a ? i.splice(-(i.length - a)) : void 0,
                        s = i.join(""),
                        c = null !== (e = null === l || void 0 === l ? void 0 : l.join("").replace(".", "")) && void 0 !== e ? e : "0";
                    r.splice(-c.split("").length);
                    var u = [c].concat((0, t.Z)(r)).join("");
                    return {
                        value: Number(s),
                        decimals: Number(u),
                        valueWithDecimals: "".concat(s).concat(u),
                        valueWithDecimalsDotNotation: "".concat(s, ".").concat(u),
                        valueBigInt: o("".concat(s).concat(u))
                    }
                }
        },
        98373: function(n, e, r) {
            "use strict";
            var t = r(11163),
                i = r.n(t);
            e.Z = function(n, e) {
                n.res ? (n.res.writeHead(303, {
                    Location: e
                }), n.res.end()) : i().replace(e)
            }
        },
        84603: function(n, e, r) {
            "use strict";
            r.d(e, {
                Dm: function() {
                    return l
                },
                nR: function() {
                    return s
                }
            });
            var t = r(11752),
                i = r.n(t),
                o = r(81770),
                a = i()().publicRuntimeConfig,
                l = function(n) {
                    var e, r;
                    return null !== (r = null === n || void 0 === n || null === (e = n.photoImageFile) || void 0 === e ? void 0 : e.url) && void 0 !== r ? r : ""
                },
                s = function(n) {
                    var e = n.t,
                        r = n.username;
                    return console.assert(e, "missing translations in getUserSocialData"), console.assert(r, "missing username in getUserSocialData"), {
                        url: c({
                            username: r
                        }),
                        text: "".concat(e("check"), " ").concat(r, " ").concat(e("profile"), " @taikainetwork")
                    }
                },
                c = function(n) {
                    var e = n.username;
                    return console.assert(e, "missing username in getUserSocialData"), "".concat(a.frontendUrl).concat((0, o.NV)(e))
                }
        },
        11409: function(n, e, r) {
            "use strict";
            r.d(e, {
                w: function() {
                    return s
                }
            });
            var t = r(10253),
                i = r(73359),
                o = r(64572),
                a = r(67294),
                l = r(61256),
                s = function(n) {
                    var e, r, s, c, u, d, f = (0, t.Z)((0, i.t)(l.yA, {
                            fetchPolicy: "network-only",
                            notifyOnNetworkStatusChange: !0
                        }), 2),
                        h = f[0],
                        g = f[1],
                        p = g.data,
                        x = g.loading,
                        v = g.error,
                        m = g.refetch,
                        j = p || n,
                        I = (0, t.Z)((null !== (c = null === j || void 0 === j || null === (e = j.me) || void 0 === e ? void 0 : e.wallets) && void 0 !== c ? c : []).filter((function(n) {
                            return n.type === o.Sqi.EXTERNAL && n.currency === o.Fa6.ETHEREUM
                        })), 1)[0],
                        y = (0, t.Z)((null !== (u = null === j || void 0 === j || null === (r = j.me) || void 0 === r ? void 0 : r.wallets) && void 0 !== u ? u : []).filter((function(n) {
                            return n.currency === o.Fa6.ETHEREUM && n.type === o.Sqi.USER
                        })), 1)[0];
                    return (0, a.useEffect)((function() {
                        n || h()
                    }), []), {
                        wallets: null !== (d = null === j || void 0 === j || null === (s = j.me) || void 0 === s ? void 0 : s.wallets) && void 0 !== d ? d : null,
                        polygonWalletAddress: I,
                        ethereumWallet: y,
                        error: v,
                        loading: x,
                        refetch: m
                    }
                }
        },
        34457: function(n) {
            n.exports = {
                points: "styles_points__xDiU7",
                booster: "styles_booster__IT_uH",
                boost: "styles_boost__rb6vr"
            }
        },
        19255: function(n) {
            n.exports = {
                wrapper: "styles_wrapper__qbTkg",
                unread: "styles_unread__xnmUl",
                loader_container: "styles_loader_container__MXrJc",
                no_more_notifications: "styles_no_more_notifications__mdEzl",
                no_notifications: "styles_no_notifications__ReSN9"
            }
        },
        16915: function() {}
    }
]);