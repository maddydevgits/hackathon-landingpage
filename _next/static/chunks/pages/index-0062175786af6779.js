(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        48312: function(n, A, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return e(1451)
            }])
        },
        30406: function(n, A, e) {
            "use strict";
            e.d(A, {
                Z: function() {
                    return C
                }
            });
            var i = e(85893),
                t = e(86427),
                o = e(7297),
                g = e(52015),
                r = e(38332);

            function a() {
                var n = (0, o.Z)(["\n  position: absolute;\n  top: 0;\n  margin-top: calc(", " / 2 * -1);\n  background-color: ", ";\n  border: ", " solid ", ";\n  border-radius: 999px;\n  width: ", ";\n  height: ", ";\n  padding: ", ";\n  transition-duration: ", ";\n  z-index: 1;\n\n  .avatar-img {\n    border: 0;\n    width: 100%;\n    height: 100%;\n\n    img {\n      object-fit: cover;\n    }\n  }\n"]);
                return a = function() {
                    return n
                }, n
            }
            var s = g.ZP.div.withConfig({
                componentId: "sc-b40ea992-0"
            })(a(), r.In.avatarSize, r.O9.white, r.In.avatarBorderWidth, r.In.borderColor, r.In.avatarSize, r.In.avatarSize, r.In.avatarPadding, r.CO.hoverTransitionDuration);

            function C(n) {
                var A = n.url,
                    e = n.alt;
                return (0, i.jsx)(s, {
                    className: "card-avatar",
                    children: (0, i.jsx)(t.F$, {
                        url: A,
                        alt: e
                    })
                })
            }
        },
        2258: function(n, A, e) {
            "use strict";
            e.d(A, {
                Z: function() {
                    return F
                }
            });
            var i = e(85893),
                t = e(37856),
                o = e.n(t),
                g = e(30406),
                r = e(86427),
                a = e(38332),
                s = e(7297),
                C = e(52015),
                B = e(43281);

            function c() {
                var n = (0, s.Z)(["\n  background-color: ", ";\n  overflow: hidden;\n  pointer-events: ", ";\n\n  a {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    color: ", ";\n    text-decoration: none;\n  }\n\n  &:hover {\n    > a > div,\n    .card-avatar {\n      border-color: ", ";\n    }\n  }\n"]);
                return c = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, s.Z)(["\n  position: relative;\n  width: 100%;\n  border: ", " solid ", ";\n  border-radius: ", " ", " 0 0;\n  padding-top: ", ";\n  overflow: hidden;\n  transition-duration: ", ";\n"]);
                return l = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, s.Z)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);
                return E = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, s.Z)(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  max-width: calc(70% - ", " * 2);\n  border: ", " solid ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  padding: ", " ", ";\n  font-size: ", ";\n  color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function Q() {
                var n = (0, s.Z)(["\n  position: absolute;\n  top: 0;\n  top: ", ";\n  right: ", ";\n\n  ul {\n    display: flex;\n\n    li {\n      display: flex;\n      align-items: center;\n      font-size: ", ";\n      font-weight: ", ";\n      color: ", ";\n\n      &:not(:last-child) {\n        margin-right: ", ";\n      }\n\n      &.projects-value {\n        svg {\n          margin-top: ", ";\n        }\n      }\n\n      svg {\n        margin-right: ", ";\n        width: auto;\n        height: ", ";\n      }\n    }\n  }\n"]);
                return Q = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, s.Z)(["\n  flex: 1;\n  position: relative;\n  margin-top: calc(", " * -1);\n  border: ", " solid ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  padding: calc(", " / 2 + ", ") ", " ", "\n    // prettier-ignore\n    ", ";\n  transition-duration: ", ";\n"]);
                return h = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, s.Z)(["\n  margin-top: calc(\n    (", " / 2) * -1 + ", " + ", " + ", "\n  );\n  flex: 1;\n\n  h3 {\n    margin-bottom: ", ";\n    font-size: ", ";\n\n    + div span {\n      font-size: ", ";\n      color: ", ";\n    }\n  }\n"]);
                return I = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, s.Z)(["\n  margin-top: calc(", " * 2);\n  width: 100%;\n\n  > div:not(:last-child) {\n    margin-bottom: ", ";\n  }\n"]);
                return p = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, s.Z)(["\n  margin: calc(", " + ", ") ", " ", ";\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n\n  span {\n    position: relative;\n    margin: ", ";\n    border: ", " solid ", ";\n    border-radius: 999px;\n    padding: ", " ", " ", " ", ";\n    font-size: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    &:before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: ", ";\n      margin-top: ", ";\n      background-color: ", ";\n      border-radius: 999px;\n      width: ", ";\n      height: ", ";\n    }\n  }\n"]);
                return u = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, s.Z)(["\n  > div {\n    width: 100%;\n\n    > div {\n      &:first-child {\n        border: ", " solid ", ";\n        background-color: ", ";\n\n        > div {\n          background-color: ", ";\n        }\n      }\n\n      &:last-child {\n        margin-left: ", ";\n        font-weight: ", ";\n        color: ", ";\n        letter-spacing: ", ";\n        text-transform: uppercase;\n      }\n    }\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, s.Z)(["\n  border-top: ", " solid ", ";\n  margin: 0 calc(", " * -1);\n  padding: ", " ", " 0 ", ";\n  font-weight: ", ";\n  letter-spacing: ", ";\n  color: ", ";\n\n  span {\n    color: ", ";\n    line-height: 1;\n  }\n\n  > div {\n    margin-top: ", ";\n    display: flex;\n    align-items: center;\n\n    span {\n      color: ", ";\n\n      &:last-child {\n        margin-left: ", ";\n      }\n    }\n\n    svg {\n      width: auto;\n      height: ", ";\n      fill: ", ";\n    }\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }
            var f = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-0"
                })(c(), a.In.backgroundColor, (function(n) {
                    return n.isPublic ? "auto" : "none"
                }), a.In.color, a.In.borderColorHover),
                m = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-1"
                })(l(), a.In.borderWidth, a.In.borderColor, a.In.borderRadius, a.In.borderRadius, a.In.coverRatio, a.CO.hoverTransitionDuration),
                v = C.ZP.img.withConfig({
                    componentId: "sc-d8382d2-2"
                })(E()),
                j = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-3"
                })(d(), a.In.padding, a.In.padding, a.In.padding, (0, B.hO)("1px"), (function(n) {
                    return n.isEnded ? a.O9.purple300 : a.O9.purple700
                }), (0, B.hO)("6px"), (function(n) {
                    return n.isEnded ? a.O9.white : a.O9.purple500
                }), (0, B.hO)("8px"), (0, B.hO)("12px"), a.cp.fontSizeSm, (function(n) {
                    return n.isEnded ? a.O9.purple800 : a.O9.white
                })),
                D = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-4"
                })(Q(), a.In.padding, a.In.padding, a.cp.fontSizeXs, a.cp.fontWeigthMedium, a.O9.purple600, (0, B.hO)("8px"), (0, B.hO)("-2px"), (0, B.hO)("4px"), (0, B.hO)("16px")),
                K = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-5"
                })(h(), a.In.borderRadius, a.In.borderWidth, a.In.borderColor, a.In.borderRadius, a.In.backgroundColor, a.In.avatarSize, (0, B.hO)("20px"), a.In.padding, a.In.padding, a.In.padding, a.CO.hoverTransitionDuration),
                R = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-6"
                })(I(), a.In.avatarSize, a.In.avatarBorderWidth, a.In.padding, (0, B.hO)("18px"), (0, B.hO)("10px"), (0, B.hO)("20px"), a.cp.fontSizeSm, a.In.descriptionColor),
                O = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-7"
                })(p(), a.In.padding, a.In.padding),
                U = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-8"
                })(u(), (0, B.hO)("-4px"), a.In.padding, (0, B.hO)("-4px"), (0, B.hO)("-4px"), (0, B.hO)("4px"), (0, B.hO)("1px"), a.O9.purple50, (0, B.hO)("2px"), (0, B.hO)("8px"), (0, B.hO)("2px"), (0, B.hO)("18px"), a.cp.fontSizeXs, (0, B.hO)("8px"), (0, B.hO)("-3px"), a.O9.blue500, (0, B.hO)("6px"), (0, B.hO)("6px")),
                S = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-9"
                })(x(), (0, B.hO)("1px"), a.O9.purple100, a.In.backgroundColor, a.O9.purple500, a.In.padding, a.cp.fontWeigthRegular, a.O9.purple400, (0, B.hO)("1px")),
                k = C.ZP.div.withConfig({
                    componentId: "sc-d8382d2-10"
                })(w(), (0, B.hO)("1px"), a.O9.purple100, a.In.padding, a.In.padding, a.In.padding, a.In.padding, a.cp.fontWeigthSemiBold, (0, B.hO)("1px"), a.In.prizeColor, a.In.descriptionColor, (0, B.hO)("4px"), a.O9.black, (0, B.hO)("8px"), (0, B.hO)("20px"), a.O9.black);

            function F(n) {
                var A, e = n.url,
                    t = n.coverUrl,
                    s = n.avatarUrl,
                    C = n.headerTag,
                    B = n.participants,
                    c = n.projects,
                    l = n.name,
                    E = n.description,
                    d = n.tags,
                    Q = n.progress,
                    h = n.progressValue,
                    I = n.prizeTitle,
                    p = n.prize,
                    u = n.prizeCurrency,
                    x = n.isPublic,
                    w = void 0 === x || x,
                    F = n.isEnded,
                    G = void 0 !== F && F,
                    b = n.privateValue;
                switch (null === u || void 0 === u ? void 0 : u.name) {
                    case "EUR":
                        A = "\u20ac";
                        break;
                    case "USD":
                        A = "$";
                        break;
                    case "BRL":
                        A = "R$";
                        break;
                    case "BTC":
                        A = (0, i.jsx)(r.JO, {
                            icon: "bitcoin"
                        });
                        break;
                    case "ETH":
                        A = (0, i.jsx)(r.JO, {
                            icon: "ether"
                        });
                        break;
                    case "TLOS":
                        A = " TLOS";
                        break;
                    case "EOS":
                        A = (0, i.jsx)(r.JO, {
                            icon: "eos"
                        });
                        break;
                    case "KAI":
                        A = (0, i.jsx)(r.JO, {
                            icon: "kai"
                        });
                        break;
                    case "TKAI":
                        A = (0, i.jsx)(r.JO, {
                            icon: "tkai"
                        });
                        break;
                    case "VKAI":
                        A = (0, i.jsx)(r.JO, {
                            icon: "vkai"
                        });
                        break;
                    default:
                        A = null === u || void 0 === u ? void 0 : u.name
                }
                return (0, i.jsx)(f, {
                    isPublic: w,
                    children: (0, i.jsxs)("a", {
                        href: e,
                        children: [(0, i.jsxs)(m, {
                            children: [(0, i.jsx)(v, {
                                src: t,
                                alt: l
                            }), C && (0, i.jsx)(j, {
                                isEnded: G,
                                children: C
                            })]
                        }), (0, i.jsxs)(K, {
                            children: [(0, i.jsx)(g.Z, {
                                url: s,
                                alt: l
                            }), (0, i.jsx)(D, {
                                children: (0, i.jsx)("ul", {
                                    children: w ? (0, i.jsxs)(i.Fragment, {
                                        children: [B && B > 0 && (0, i.jsxs)("li", {
                                            children: [(0, i.jsx)(r.JO, {
                                                icon: "users",
                                                fill: a.O9.purple300
                                            }), B]
                                        }), c && c > 0 && (0, i.jsxs)("li", {
                                            className: "projects-value",
                                            children: [(0, i.jsx)(r.JO, {
                                                icon: "projects",
                                                fill: a.O9.purple300
                                            }), c]
                                        })]
                                    }) : (0, i.jsxs)("li", {
                                        children: [(0, i.jsx)(r.JO, {
                                            icon: "lock",
                                            fill: a.O9.purple300
                                        }), b]
                                    })
                                })
                            }), (0, i.jsxs)(R, {
                                children: [(0, i.jsx)("h3", {
                                    children: l
                                }), (0, i.jsx)(o(), {
                                    line: 3,
                                    truncateText: "\u2026",
                                    text: E
                                }), d && (0, i.jsx)(U, {
                                    children: d.map((function(n) {
                                        return n
                                    }))
                                })]
                            }), (Q || p) && (0, i.jsxs)(O, {
                                children: [Q && (0, i.jsx)(S, {
                                    children: (0, i.jsx)(r.ko, {
                                        progress: Q,
                                        value: h
                                    })
                                }), p && (0, i.jsxs)(k, {
                                    children: [(0, i.jsx)("span", {
                                        children: I
                                    }), (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("span", {
                                            children: p
                                        }), (0, i.jsx)("span", {
                                            children: A
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        49798: function(n, A, e) {
            "use strict";
            e.d(A, {
                CS: function() {
                    return x
                },
                T4: function() {
                    return h
                },
                TY: function() {
                    return I
                },
                pc: function() {
                    return w
                }
            });
            var i = e(51438),
                t = e(52951),
                o = e(88029),
                g = e(26626),
                r = e(85893),
                a = e(67294),
                s = e(45697),
                C = e.n(s),
                B = e(31838),
                c = e(11752),
                l = e.n(c),
                E = e(43514),
                d = l()().publicRuntimeConfig,
                Q = function(n) {
                    var A = {
                        "@context": "https://schema.org",
                        name: n.title,
                        "@type": "ItemList",
                        itemListElement: n.items
                    };
                    return (0, r.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(A)
                        }
                    })
                };
            Q.propTypes = {
                items: C().array,
                title: C().string
            }, Q.defaultProps = {
                items: []
            };
            var h = function(n) {
                var A = n.language,
                    e = void 0 === A ? en : A,
                    i = n.challenges,
                    t = n.title,
                    o = i.map((function(n, A) {
                        var i = n.organization.slug,
                            t = n.slug;
                        return {
                            "@type": "ListItem",
                            position: A,
                            url: "".concat(d.frontendUrl, "/").concat(e, "/").concat(i, "/hackathons/").concat(t)
                        }
                    }));
                return (0, r.jsx)(Q, {
                    title: t,
                    items: o
                })
            };
            h.propTypes = {
                language: C().string,
                challenges: C().array,
                title: C().string
            };
            var I = function(n) {
                var A = n.language,
                    e = void 0 === A ? en : A,
                    i = n.stories,
                    t = n.title,
                    o = i.map((function(n, A) {
                        return {
                            "@type": "ListItem",
                            position: A,
                            url: "".concat(d.frontendUrl, "/").concat(e, "/blog/").concat(n.slug)
                        }
                    }));
                return (0, r.jsx)(Q, {
                    title: t,
                    items: o
                })
            };
            I.propTypes = {
                language: C().string,
                stories: C().array,
                title: C().string
            };
            var p = function(n) {
                (0, o.Z)(e, n);
                var A = (0, g.Z)(e);

                function e() {
                    return (0, i.Z)(this, e), A.apply(this, arguments)
                }
                return (0, t.Z)(e, [{
                    key: "render",
                    value: function() {
                        return (0, r.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(this.props.content)
                            }
                        })
                    }
                }]), e
            }(a.PureComponent);
            p.propTypes = {
                content: C().object
            };
            var u = function(n) {
                (0, o.Z)(e, n);
                var A = (0, g.Z)(e);

                function e() {
                    return (0, i.Z)(this, e), A.apply(this, arguments)
                }
                return (0, t.Z)(e, [{
                    key: "render",
                    value: function() {
                        var n = this.props.post,
                            A = {
                                "@context": "https://schema.org/",
                                "@type": "JobPosting",
                                name: n.title,
                                datePosted: n.datePosted,
                                description: n.shortDescription,
                                hiringOrganization: B.seo.organizationLDATA,
                                skills: n.skills,
                                employmentType: n.employmentType,
                                jobLocation: n.jobLocation,
                                title: n.title,
                                jobLocationType: n.jobLocationType,
                                validThrough: n.validThrough,
                                applicantLocationRequirements: n.applicantLocationRequirements
                            };
                        return (0, r.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(A)
                            }
                        })
                    }
                }]), e
            }(a.PureComponent);
            u.propTypes = {
                post: C().object
            };
            var x = function(n) {
                (0, o.Z)(e, n);
                var A = (0, g.Z)(e);

                function e() {
                    return (0, i.Z)(this, e), A.apply(this, arguments)
                }
                return (0, t.Z)(e, [{
                    key: "render",
                    value: function() {
                        var n = this.props.post,
                            A = !0,
                            e = !1,
                            i = void 0;
                        try {
                            for (var t, o = n.tags[Symbol.iterator](); !(A = (t = o.next()).done); A = !0) {
                                var g = t.value;
                                "".padEnd("".concat(g, " "))
                            }
                        } catch (c) {
                            e = !0, i = c
                        } finally {
                            try {
                                A || null == o.return || o.return()
                            } finally {
                                if (e) throw i
                            }
                        }
                        var a = "".concat(d.frontendUrl, "/blog/").concat(n.slug),
                            s = n && n.featuredImage ? n.featuredImage.url : "".concat(d.frontendUrl).concat("/static/images/default-cover.png"),
                            C = {
                                "@context": "https://schema.org",
                                "@type": "BlogPosting",
                                headline: n.seoTitle,
                                alternativeHeadline: n.title,
                                image: (0, E.Zj)(s),
                                editor: n.author.fullName && n.author.username,
                                keywords: "",
                                publisher: B.seo.organizationLDATA,
                                url: a,
                                datePublished: n.publishedAt,
                                dateCreated: n.createdAt,
                                dateModified: n.updatedAt,
                                description: n.shortDescription,
                                articleBody: n.shortDescription,
                                mainEntityOfPage: {
                                    "@type": "WebPage",
                                    "@id": "https://taikai.network"
                                },
                                author: {
                                    "@type": "Person",
                                    name: n.author.fullName && n.author.username
                                }
                            };
                        return (0, r.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(C)
                            }
                        })
                    }
                }]), e
            }(a.PureComponent);
            x.propTypes = {
                post: C().object
            };
            var w = function(n) {
                var A, e = n.challenge,
                    i = n.url,
                    t = n.imageUrl,
                    o = n.organizerUrl,
                    g = null !== (A = null === e || void 0 === e ? void 0 : e.steps) && void 0 !== A ? A : [],
                    a = {
                        "@context": "https://schema.org",
                        "@type": "Event",
                        name: "".concat(e.name, " Hackathon"),
                        startDate: g && g.length > 0 ? g[0].startDate : null,
                        endDate: g && g.length > 0 ? g[g.length - 1].startDate : null,
                        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
                        eventStatus: "https://schema.org/EventScheduled",
                        image: t,
                        description: e.shortDescription,
                        location: {
                            "@type": "VirtualLocation",
                            url: i
                        },
                        offers: {
                            "@type": "Offer",
                            url: i,
                            price: "0",
                            priceCurrency: "USD",
                            availability: "https://schema.org/InStock",
                            validFrom: g && g.length > 0 ? g[0].startDate : null
                        },
                        performer: {
                            "@type": "Organization",
                            name: e.organization.name,
                            url: o
                        },
                        organizer: {
                            "@type": "Organization",
                            name: e.organization.name,
                            url: o
                        }
                    };
                return (0, r.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(a)
                    }
                })
            };
            w.propTypes = {
                challenge: C().object,
                imageUrl: C().string,
                url: C().string,
                organizerUrl: C().string
            }
        },
        12379: function(n, A, e) {
            "use strict";
            e.d(A, {
                DE: function() {
                    return i
                },
                TF: function() {
                    return o
                },
                Y7: function() {
                    return g
                },
                ws: function() {
                    return t
                }
            });
            var i = function(n) {
                    var A, e;
                    return !(!n || !n.currentStep || 0 === (null !== (e = null === n || void 0 === n ? void 0 : n.steps) && void 0 !== e ? e : []).length) && (null === (A = n.steps) || void 0 === A ? void 0 : A.slice(-1)[0]).id === n.currentStep.id
                },
                t = function(n) {
                    return n && n.currentStep && n.isClosed
                };

            function o(n) {
                var A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                if (!n) return !1;
                var e = n.startParticipantRegistrationDate,
                    i = n.endParticipantRegistrationDate,
                    t = n.isClosed;
                if (t) return !1;
                if (!e) return !1;
                var o = new Date(e),
                    g = new Date(i);
                return A >= o && A <= g
            }
            var g = function(n) {
                if (!n) return !1;
                var A = (n || {}).currentStep,
                    e = void 0 === A ? null : A;
                return !!e && "NONE" !== e.votingScheme
            }
        },
        1451: function(n, A, e) {
            "use strict";
            e.r(A), e.d(A, {
                __N_SSP: function() {
                    return cA
                },
                default: function() {
                    return lA
                }
            });
            var i = e(85893),
                t = e(67294),
                o = e(56630),
                g = e(41754),
                r = e(25675),
                a = e.n(r),
                s = e(86427),
                C = e(41664),
                B = e.n(C),
                c = e(90512),
                l = e(37581),
                E = e(82081),
                d = e.n(E);

            function Q(n) {
                var A = n.price,
                    e = void 0 === A ? 0 : A,
                    t = n.change,
                    o = Number((void 0 === t ? 0 : t).toFixed(1));
                return (0, i.jsx)("div", {
                    className: d().wrapper,
                    children: (0, i.jsx)(B(), {
                        href: "https://coingecko.com/coins/taikai",
                        prefetch: !1,
                        children: (0, i.jsxs)("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [(0, i.jsx)(l.Z, {}), (0, i.jsx)("span", {
                                children: "TKAI"
                            }), (0, i.jsxs)("span", {
                                className: d().price,
                                children: ["$", Number(e).toFixed(5)]
                            }), (0, i.jsxs)("div", {
                                className: (0, c.Z)(d().ticker_tag, o < 0 && d().negative),
                                children: [(0, i.jsx)(s.JO, {
                                    icon: "arrowRight"
                                }), (0, i.jsxs)("span", {
                                    children: [o, "%"]
                                })]
                            })]
                        })
                    })
                })
            }
            var h = e(38905),
                I = e(26042),
                p = e(69396);

            function u(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    viewBox: "0 0 358 296",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M83.56 1.501h-.25l-.15.201L2.412 109.928l-.598.801 1-.002 238.766-.654v184.86H357.466l-.001-.501-.658-293.092-.001-.5h-.5l-272.747.661z",
                        stroke: "url(#prefix__paint0_linear_6_3636)"
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: "prefix__paint0_linear_6_3636",
                            x1: 356.965,
                            y1: 294.433,
                            x2: 303.027,
                            y2: 226.971,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#4329A6",
                                stopOpacity: .8
                            }), (0, i.jsx)("stop", {
                                offset: 1,
                                stopColor: "#4329A6",
                                stopOpacity: 0
                            })]
                        })
                    })]
                }))
            }

            function x(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    viewBox: "0 0 430 1062",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M.976 2.507v-.499h.499l427.159-.96h.501V1060.95H315.425l.001-.5 1.613-953.246-315.564-.638-.5-.001V2.507z",
                        stroke: "url(#prefix__paint0_linear_6_3639)"
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: "prefix__paint0_linear_6_3639",
                            x1: 308.331,
                            y1: 92.898,
                            x2: 1.476,
                            y2: 92.898,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#4329A6",
                                stopOpacity: 0
                            }), (0, i.jsx)("stop", {
                                offset: 1,
                                stopColor: "#4329A6",
                                stopOpacity: .8
                            })]
                        })
                    })]
                }))
            }

            function w(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    viewBox: "0 0 673 841",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M559.194 494.554v.5H672.436l-.002-.502-1.285-493.17-.001-.5H560.403l-.15.21L1.303 779.046l-.094.131v60.381H96.841l.15-.211 461.564-651.139.639 306.025v.32z",
                        stroke: "url(#prefix__paint0_linear_6_3635)"
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: "prefix__paint0_linear_6_3635",
                            x1: 671.934,
                            y1: 4.374,
                            x2: 474.141,
                            y2: 251.013,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#4329A6",
                                stopOpacity: .8
                            }), (0, i.jsx)("stop", {
                                offset: 1,
                                stopColor: "#4329A6",
                                stopOpacity: 0
                            })]
                        })
                    })]
                }))
            }

            function f(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    viewBox: "0 0 513 566",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M511.699 502.099l.146.146v62.922h-97.064l-.146-.143L1.205 159.423l-.15-.147V1.696l.85.833 508.506 498.284.003.003 1.285 1.283z",
                        stroke: "url(#prefix__paint0_linear_6_3633)"
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: "prefix__paint0_linear_6_3633",
                            x1: 75.032,
                            y1: 139.404,
                            x2: -5.682,
                            y2: 2.886,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#4329A6",
                                stopOpacity: 0
                            }), (0, i.jsx)("stop", {
                                offset: 1,
                                stopColor: "#4329A6",
                                stopOpacity: .8
                            })]
                        })
                    })]
                }))
            }

            function m(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    viewBox: "0 0 349 481",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M347.208 480.461H348.013l-.357-.722-.1-.202v-.076h-.038L110.783 1.338l-.138-.278H27.454l-.132.295L1.544 58.73l-.097.217.106.212 211.095 421.025.139.276h134.421z",
                        stroke: "url(#prefix__paint0_linear_6_3631)"
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: "prefix__paint0_linear_6_3631",
                            x1: 174.778,
                            y1: 1.56,
                            x2: 174.778,
                            y2: 479.961,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#4329A6",
                                stopOpacity: 0
                            }), (0, i.jsx)("stop", {
                                offset: 1,
                                stopColor: "#4329A6",
                                stopOpacity: .8
                            })]
                        })
                    })]
                }))
            }

            function v(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    viewBox: "0 0 431 968",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M430.479 1.038V.537l-.501.001-428.147.957-.5.001.001.5 1.936 964.356.001.499h113.71l-.001-.501-1.613-858.462 314.615-.636.499-.001V1.038z",
                        stroke: "url(#prefix__paint0_linear_6_3638)"
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: "prefix__paint0_linear_6_3638",
                            x1: 215.906,
                            y1: 1.038,
                            x2: 215.906,
                            y2: 966.351,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                offset: .61,
                                stopColor: "#4329A6",
                                stopOpacity: 0
                            }), (0, i.jsx)("stop", {
                                offset: 1,
                                stopColor: "#4329A6",
                                stopOpacity: .8
                            })]
                        })
                    })]
                }))
            }

            function j(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    viewBox: "0 0 341 319",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M257.59 317.681h.25l.149-.2 80.816-108.226.599-.802-1.001.003-221.062.654V.613H.892l.001.501.66 316.729.002.5.5-.001 255.535-.661z",
                        stroke: "url(#prefix__paint0_linear_6_3637)"
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsxs)("linearGradient", {
                            id: "prefix__paint0_linear_6_3637",
                            x1: 169.899,
                            y1: 317.842,
                            x2: 169.899,
                            y2: 1.113,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, i.jsx)("stop", {
                                stopColor: "#4329A6",
                                stopOpacity: 0
                            }), (0, i.jsx)("stop", {
                                offset: 1,
                                stopColor: "#4329A6",
                                stopOpacity: .8
                            })]
                        })
                    })]
                }))
            }
            var D = e(38332),
                K = e(7297),
                R = e(52015),
                O = e(43281);

            function U() {
                var n = (0, K.Z)(["\n  position: relative;\n  margin-top: ", ";\n  z-index: 2;\n\n  > a {\n    width: 100%;\n\n    &:first-child {\n      margin: 0 0 ", ";\n    }\n\n    &:last-child {\n      background-color: ", ";\n    }\n  }\n\n  @media ", " {\n    display: flex;\n    justify-content: center;\n\n    > a {\n      width: inherit;\n\n      &:first-child {\n        margin: 0 ", " 0;\n      }\n    }\n  }\n"]);
                return U = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, K.Z)(["\n  .product-shot {\n    position: relative;\n    margin: 0 auto;\n    max-width: ", ";\n    display: flex;\n    justify-content: center;\n  }\n\n  .image {\n    position: relative;\n    width: 100%;\n    height: 100%;\n\n    img {\n      width: 100%;\n      height: auto;\n      z-index: 2;\n    }\n  }\n"]);
                return S = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, K.Z)(["\n  position: absolute;\n  margin-top: -5%;\n  border-radius: 999px;\n  width: 500px;\n  height: 500px;\n  background: radial-gradient(#dfd6ff 70%, ", " 100%);\n  filter: blur(", ");\n  z-index: 1;\n\n  &.top-right {\n    top: -5%;\n    right: -10%;\n  }\n\n  &.bottom-left {\n    bottom: -10%;\n    left: -5%;\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function F() {
                var n = (0, K.Z)(["\n  position: relative;\n  margin: calc(", " - ", ") 0 ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 3;\n\n  button {\n    margin: ", ";\n    background-color: transparent;\n    padding: ", " ", ";\n    border: ", " solid transparent;\n    border-radius: 999px;\n    color: ", ";\n    cursor: pointer;\n\n    &.active {\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n\n  @media ", " {\n    flex-direction: row;\n    justify-content: center;\n  }\n"]);
                return F = function() {
                    return n
                }, n
            }

            function G() {
                var n = (0, K.Z)(["\n  display: none;\n\n  @media ", " {\n    display: inherit;\n    position: absolute;\n    top: 0;\n    margin: 0 auto;\n    max-width: ", ";\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      position: absolute;\n      height: auto;\n\n      &.form-1 {\n        top: ", ";\n        left: ", ";\n        width: ", ";\n      }\n\n      &.form-2 {\n        top: ", ";\n        right: ", ";\n        width: ", ";\n      }\n\n      &.form-3 {\n        left: ", ";\n        margin-top: ", ";\n        width: ", ";\n      }\n\n      &.form-4 {\n        right: ", ";\n        margin-top: ", ";\n        width: ", ";\n      }\n\n      &.form-5 {\n        left: ", ";\n        bottom: 0;\n        margin-bottom: ", ";\n        width: ", ";\n      }\n\n      &.form-6 {\n        bottom: ", ";\n        width: ", ";\n      }\n\n      &.form-7 {\n        right: ", ";\n        bottom: ", ";\n        width: ", ";\n      }\n    }\n  }\n"]);
                return G = function() {
                    return n
                }, n
            }
            var b = R.ZP.div.withConfig({
                    componentId: "sc-e84a7754-0"
                })(U(), (0, O.hO)("32px"), (0, O.hO)("5px"), D.lI.backgroundColor, D.Uh.s, (0, O.hO)("20px")),
                y = R.ZP.div.withConfig({
                    componentId: "sc-e84a7754-1"
                })(S(), D.O7.imageMaxWidth),
                P = R.ZP.div.withConfig({
                    componentId: "sc-e84a7754-2"
                })(k(), D.O9.purple500, (0, O.hO)("150px")),
                L = R.ZP.div.withConfig({
                    componentId: "sc-e84a7754-3"
                })(F(), D.bK.sectionSpaceBetweenHeadingContent, (0, O.hO)("4px"), (0, O.hO)("16px"), (0, O.hO)("4px"), (0, O.hO)("6px"), (0, O.hO)("12px"), (0, O.hO)("1px"), D.O9.purple400, D.O9.purple100, D.O9.purple700, D.Uh.s),
                H = R.ZP.div.withConfig({
                    componentId: "sc-e84a7754-4"
                })(G(), D.Uh.l, D.bK.contentMaxWidth, (0, O.hO)("-160px"), (0, O.hO)("-50px"), (0, O.hO)("350px"), (0, O.hO)("40px"), (0, O.hO)("-40px"), (0, O.hO)("400px"), (0, O.hO)("-430px"), (0, O.hO)("-100px"), (0, O.hO)("600px"), (0, O.hO)("-300px"), (0, O.hO)("100px"), (0, O.hO)("600px"), (0, O.hO)("16px"), (0, O.hO)("-90px"), (0, O.hO)("350px"), (0, O.hO)("-220px"), (0, O.hO)("400px"), (0, O.hO)("130px"), (0, O.hO)("20px"), (0, O.hO)("400px"));

            function Z(n) {
                var A = n.tkaiPrice,
                    e = (0, o.$G)("homepage").t,
                    g = (0, t.useState)(0),
                    r = g[0],
                    C = g[1],
                    B = [{
                        title: e("hero_tab_disovery_page"),
                        img: "https://taikai.azureedge.net/0pyTr82gf7QG1kRxNe_I1KtJro-iOG50IHARhj5HUE8/rs:fit:2220:1417:0/g:no/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2xhbmRpbmcvaG9tZXBhZ2UvZGlzY292ZXJ5LXBhZ2UucG5n.png"
                    }, {
                        title: e("hero_tab_hackathon_page"),
                        img: "https://taikai.azureedge.net/Vaamqi9Rlsdr89QmcpPmthRzjm4wWXDyKXnwBXbSKHk/rs:fit:2220:1417:0/g:no/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2xhbmRpbmcvaG9tZXBhZ2UvaGFja2F0aG9ucy1wYWdlLnBuZw.png"
                    }, {
                        title: e("hero_tab_hackathon_cms"),
                        img: "https://taikai.azureedge.net/nBc8pK37P3fOgqowShOBtvLUW4iNmr1bMzJAsauafeU/rs:fit:2220:1417:0/g:no/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2xhbmRpbmcvaG9tZXBhZ2UvY21zLnBuZw.png"
                    }],
                    c = B[r];
                return (0, i.jsxs)(h.Z, {
                    backgroundColor: D.lI.backgroundColor,
                    title: (0, i.jsxs)(i.Fragment, {
                        children: [(null === A || void 0 === A ? void 0 : A.usd) > 0 && (0, i.jsx)(Q, {
                            price: A.usd,
                            change: A.usd_24h_change
                        }), (0, i.jsx)("h1", {
                            children: (0, i.jsx)(o.cC, {
                                i18nKey: "hero_title",
                                components: {
                                    1: (0, i.jsx)("span", {})
                                },
                                children: e("hero_title")
                            })
                        })]
                    }),
                    description: e("hero_description"),
                    children: [(0, i.jsxs)(b, {
                        children: [(0, i.jsx)(s.ZP, {
                            variant: "solid",
                            color: "purple500",
                            url: "/hackathons",
                            value: e("hero_cta_for_participants"),
                            icon: "caret-right",
                            iconPosition: "right",
                            dataTestId: "hero-cta-for-participants"
                        }), (0, i.jsx)(s.ZP, {
                            variant: "outline",
                            color: "purple200",
                            txtColor: "purple850",
                            url: "/organizations",
                            value: e("hero_cta_for_organizations"),
                            icon: "caret-right",
                            iconPosition: "right",
                            dataTestId: "hero-cta-for-organizations"
                        })]
                    }), (0, i.jsxs)(y, {
                        children: [(0, i.jsx)(L, {
                            children: B.map((function(n, A) {
                                return (0, i.jsx)("button", {
                                    className: A === r ? "active" : void 0,
                                    onClick: function() {
                                        return C(A)
                                    },
                                    children: n.title
                                }, A)
                            }))
                        }), (0, i.jsxs)("div", {
                            className: "product-shot",
                            children: [(0, i.jsx)(P, {
                                className: "top-right"
                            }), (0, i.jsx)(P, {
                                className: "bottom-left"
                            }), (0, i.jsx)("div", {
                                className: "image",
                                children: (0, i.jsx)(a(), {
                                    width: 2220,
                                    height: 1417,
                                    src: c.img,
                                    alt: c.title,
                                    layout: "responsive"
                                })
                            })]
                        })]
                    }), (0, i.jsxs)(H, {
                        children: [(0, i.jsx)(u, {
                            className: "form-1"
                        }), (0, i.jsx)(x, {
                            className: "form-2"
                        }), (0, i.jsx)(w, {
                            className: "form-3"
                        }), (0, i.jsx)(f, {
                            className: "form-4"
                        }), (0, i.jsx)(m, {
                            className: "form-5"
                        }), (0, i.jsx)(v, {
                            className: "form-6"
                        }), (0, i.jsx)(j, {
                            className: "form-7"
                        })]
                    })]
                })
            }
            var _ = e(61029),
                M = e(59789);

            function N() {
                var n = (0, o.$G)("homepage").t;
                return (0, i.jsx)(h.Z, {
                    title: (0, i.jsx)("h2", {
                        children: n("start_hacking_title")
                    }),
                    subtitle: n("start_hacking_subtitle"),
                    description: n("start_hacking_description"),
                    children: (0, i.jsxs)(M.r, {
                        children: [(0, i.jsxs)("div", {
                            className: "card",
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h3", {
                                    children: n("start_hacking_showcase_title")
                                }), (0, i.jsx)("p", {
                                    children: n("start_hacking_showcase_description")
                                })]
                            }), (0, i.jsx)("div", {
                                className: "image",
                                children: (0, i.jsx)(a(), {
                                    width: 1100,
                                    height: 1423,
                                    src: "https://taikai.azureedge.net/yHQn5bkU87QJHswRbarLigbQWlhO9mwaqNdtcvTBtFc/rs:fit:1100:1423:0/g:no/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2xhbmRpbmcvaG9tZXBhZ2UvcHJvamVjdHMtcGFnZS5wbmc.png",
                                    alt: n("start_hacking_showcase_title"),
                                    layout: "responsive"
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsxs)("div", {
                                className: "card",
                                children: [(0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("h3", {
                                        children: n("start_hacking_prizes_title")
                                    }), (0, i.jsx)("p", {
                                        children: n("start_hacking_prizes_description")
                                    })]
                                }), (0, i.jsx)("img", {
                                    src: "/product-shots/prizes.svg",
                                    alt: n("start_hacking_prizes_title")
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "card",
                                children: [(0, i.jsx)("h3", {
                                    children: n("start_hacking_ui_title")
                                }), (0, i.jsx)("p", {
                                    children: n("start_hacking_ui_description")
                                }), (0, i.jsx)("div", {
                                    className: "gradient-divider"
                                }), (0, i.jsx)("div", {
                                    className: "squares-wrapper",
                                    children: (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("div", {
                                            className: "anchor top-left",
                                            children: (0, i.jsx)("div", {})
                                        }), (0, i.jsx)("div", {
                                            className: "anchor bottom-left",
                                            children: (0, i.jsx)("div", {})
                                        }), (0, i.jsx)("div", {
                                            className: "anchor middle-left",
                                            children: (0, i.jsx)("div", {})
                                        }), (0, i.jsx)(B(), {
                                            href: "/hackathons",
                                            children: (0, i.jsx)("a", {
                                                children: n("start_hacking_ui_button")
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "anchor middle-right",
                                            children: (0, i.jsx)("div", {})
                                        }), (0, i.jsx)("div", {
                                            className: "anchor top-right",
                                            children: (0, i.jsx)("div", {})
                                        }), (0, i.jsx)("div", {
                                            className: "anchor bottom-right",
                                            children: (0, i.jsx)("div", {})
                                        }), (0, i.jsx)("svg", {
                                            width: 30,
                                            height: 30,
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, i.jsx)("path", {
                                                d: "M16.757 1.5l11.44 25.455c.586 1.305-.777 2.665-2.08 2.075l-9.908-4.478a2.548 2.548 0 00-2.063-.01L3.6 29.112c-1.322.573-2.623-.783-1.996-2.081L13.94 1.5c.578-1.197 2.28-1.197 2.818 0z",
                                                fill: D._4.cursorFill,
                                                stroke: D._4.cursorStroke,
                                                strokeWidth: 1
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "card",
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h3", {
                                    children: n("start_hacking_pop_title")
                                }), (0, i.jsx)("p", {
                                    children: n("start_hacking_pop_description")
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "image",
                                children: [(0, i.jsx)("div", {
                                    className: "bg"
                                }), (0, i.jsx)(_.Z, {
                                    title: "ETH Lisbon - 1st Place"
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "card",
                            children: [(0, i.jsx)("h3", {
                                children: n("start_hacking_sign-in-eth_title")
                            }), (0, i.jsx)("p", {
                                children: n("start_hacking_sign-in-eth_description")
                            }), (0, i.jsx)("div", {
                                className: "image",
                                children: (0, i.jsx)("img", {
                                    src: "/product-shots/ethereum-sign-in.svg",
                                    alt: n("start_hacking_prizes_title")
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "card",
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h3", {
                                    children: n("start_hacking_team_title")
                                }), (0, i.jsx)("p", {
                                    children: n("start_hacking_team_description")
                                })]
                            }), (0, i.jsx)("div", {
                                children: (0, i.jsx)("div", {
                                    className: "image",
                                    children: (0, i.jsx)(a(), {
                                        width: 1036,
                                        height: 328,
                                        src: "https://taikai.azureedge.net/LNx4JZkWYQ1v7ifWoOErinW1lTDfvBci018X4OskP6w/rs:fit:1036:328:0/g:no/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2xhbmRpbmcvaG9tZXBhZ2UvZmluZC10ZWFtbWF0ZXMucG5n.png",
                                        alt: n("start_hacking_team_title"),
                                        layout: "responsive"
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            var Y = e(29815),
                J = e(42708);

            function T() {
                var n = (0, K.Z)(["\n  position: relative;\n  background-color: ", ";\n  padding: ", " 0;\n  overflow: hidden;\n"]);
                return T = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, K.Z)(["\n  margin: 0 auto;\n  padding: 0 ", ";\n  text-align: center;\n\n  > span {\n    display: inline-block;\n    margin-bottom: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    letter-spacing: ", ";\n    text-transform: uppercase;\n  }\n"]);
                return z = function() {
                    return n
                }, n
            }

            function X() {
                var n = (0, K.Z)(["\n  margin: ", " auto 0 auto;\n  max-width: calc(", " + calc(var(--sidePadding) * 2));\n  display: flex;\n  justify-content: space-between;\n  overflow-x: auto;\n  scrollbar-width: none;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  > div {\n    width: 100%;\n    min-width: 300px;\n    max-width: 300px;\n    margin: 0 calc(var(--sidePadding) / 2);\n\n    > div {\n      height: 100%;\n    }\n\n    &:first-child {\n      margin-left: calc(var(--sidePadding));\n    }\n\n    &:last-child {\n      margin-right: calc(var(--sidePadding));\n    }\n  }\n"]);
                return X = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, K.Z)(["\n  margin-top: calc(", " / 2);\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  a {\n    margin-left: ", ";\n    background-color: ", ";\n  }\n\n  button {\n    display: inherit;\n    background-color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n\n    &:first-child {\n      margin-right: ", ";\n    }\n  }\n\n  @media (min-width: 1400px) {\n    a {\n      margin-left: 0;\n    }\n\n    button {\n      display: none;\n    }\n  }\n"]);
                return W = function() {
                    return n
                }, n
            }
            var q = R.ZP.div.withConfig({
                    componentId: "sc-6702cb4f-0"
                })(T(), D.H5.backgroundColor, D.bK.sectionTopBottomPadding),
                V = R.ZP.div.withConfig({
                    componentId: "sc-6702cb4f-1"
                })(z(), D.bK.sidePadding, (0, O.hO)("8px"), D.cp.fontSizeSm, D.cp.fontWeigthMedium, D.O9.purple400, (0, O.hO)("1px")),
                $ = R.ZP.div.withConfig({
                    componentId: "sc-6702cb4f-2"
                })(X(), D.bK.sectionSpaceBetweenHeadingContent, D.bK.contentMaxWidth),
                nn = R.ZP.div.withConfig({
                    componentId: "sc-6702cb4f-3"
                })(W(), D.bK.sectionSpaceBetweenHeadingContent, D.CO.buttonsSpacing, D.O9.white, D.O9.white, D.O9.purple850, D.CO.buttonsSpacing);

            function An(n, A, e, i, t) {
                var o = 0,
                    g = setInterval((function() {
                        n && "left" === A ? n.scrollLeft -= t : n && (n.scrollLeft += t), (o += t) >= i && window.clearInterval(g)
                    }), e)
            }

            function en(n) {
                var A = n.title,
                    e = n.subtitle,
                    t = n.cta,
                    o = n.children,
                    g = n.disabledBack,
                    r = n.disabledForward;
                return (0, i.jsxs)(q, {
                    children: [(0, i.jsxs)(V, {
                        children: [(0, i.jsx)("span", {
                            children: e
                        }), (0, i.jsx)("h2", {
                            children: A
                        })]
                    }), (0, i.jsx)($, {
                        id: "cards-container",
                        children: o
                    }), (0, i.jsxs)(nn, {
                        children: [(0, i.jsx)(s.zx, {
                            variant: "outline",
                            color: "purple200",
                            icon: "arrowBack",
                            action: function() {
                                An(document.getElementById("cards-container"), "left", 10, 340, 10)
                            },
                            disabled: g
                        }), (0, i.jsx)(s.zx, {
                            variant: "outline",
                            color: "purple200",
                            icon: "arrowForward",
                            action: function() {
                                An(document.getElementById("cards-container"), "right", 10, 340, 10)
                            },
                            disabled: r
                        }), (0, i.jsx)(s.ZP, {
                            variant: "outline",
                            color: "purple200",
                            txtColor: "purple850",
                            url: "/hackathons",
                            value: t,
                            icon: "caret-right",
                            iconPosition: "right"
                        })]
                    })]
                })
            }
            var tn = e(2258),
                on = e(12379),
                gn = e(43514),
                rn = e(49798),
                an = e(30381),
                sn = e.n(an),
                Cn = e(30349);

            function Bn(n) {
                var A = n.challenges,
                    e = void 0 === A ? [] : A,
                    g = (0, Cn.Z)(),
                    r = (0, o.$G)(["homepage", "challenges"]),
                    a = r.t,
                    s = r.i18n.language,
                    C = void 0 === s ? "en" : s,
                    B = (0, t.useState)(!1),
                    c = B[0],
                    l = B[1],
                    E = (0, t.useState)(!1),
                    d = E[0],
                    Q = E[1];
                return Array.isArray(e) && 0 !== e.length ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(rn.T4, {
                        title: a("homepage:hackathons_title"),
                        challenges: e,
                        language: C
                    }), (0, i.jsx)(en, {
                        title: a("homepage:hackathons_title"),
                        subtitle: a("homepage:hackathons_subtitle"),
                        cta: a("homepage:hackathons_button"),
                        disabledBack: c,
                        disabledForward: d,
                        children: e.map((function(n, A) {
                            var e, t, o, r, s = n.cardImageFile && n.cardImageFile.url ? (0, gn.pi)(n.cardImageFile.url) : "/static/images/default-cover.svg",
                                B = (0, gn.Ef)(null !== (r = null === (o = n.logoImageFile) || void 0 === o ? void 0 : o.url) && void 0 !== r ? r : ""),
                                c = !(0, on.ws)(n) && n.currentStep ? n.currentStep.name : null,
                                E = new Date((e = Math).min.apply(e, (0, Y.Z)(n.steps.map((function(n) {
                                    return new Date(n.startDate)
                                }))))),
                                d = new Date((t = Math).max.apply(t, (0, Y.Z)(n.steps.map((function(n) {
                                    return new Date(n.startDate)
                                }))))),
                                h = sn()(d).diff(sn()(E), "days"),
                                I = Number((sn()().diff(sn()(E), "days") / h * 100).toFixed()),
                                p = sn()(d).diff(sn()(), "days"),
                                u = sn()(d).diff(sn()(), "hours");
                            return (0, i.jsx)(J.df, {
                                as: "div",
                                threshold: .75,
                                onChange: function(n) {
                                    0 === A && n && l(!0), 0 !== A || n || l(!1), 3 === A && n && Q(!0), 3 !== A || n || Q(!1)
                                },
                                children: (0, i.jsx)(tn.Z, {
                                    url: "/".concat(C, "/") + n.organization.slug + "/hackathons/" + n.slug + "/overview",
                                    coverUrl: s,
                                    avatarUrl: B,
                                    headerTag: c,
                                    participants: n.participantsCount.toLocaleString(g),
                                    projects: n.projectsCount.toLocaleString(g),
                                    name: n.name,
                                    description: n.shortDescription,
                                    progress: sn()().isSameOrBefore(d) ? 0 === I ? 2 : I : void 0,
                                    progressValue: u > 0 ? p > 2 ? "".concat(p, " ").concat(a("challenges:days_left")) : "".concat(u, " ").concat(a("challenges:hours_left")) : void 0,
                                    prizeTitle: a("homepage:hackathons_prize"),
                                    prize: n.prize > 0 ? n.prize.toLocaleString(g) : null,
                                    prizeCurrency: n.prizeCurrency.name
                                })
                            }, A)
                        }))
                    })]
                }) : (0, i.jsx)(i.Fragment, {})
            }

            function cn() {
                var n = (0, K.Z)(["\n  margin-top: ", ";\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: ", ";\n\n  .card {\n    background-color: ", ";\n    border: ", " solid ", ";\n    border-radius: ", ";\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: ", ";\n    text-align: center;\n    overflow: hidden;\n\n    h3 {\n      margin-bottom: ", ";\n      font-size: ", ";\n      color: ", ";\n    }\n\n    p {\n      font-size: ", ";\n      color: ", ";\n      line-height: 1.75;\n    }\n\n    &:last-child {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    > div:last-child {\n      margin-top: ", ";\n      position: relative;\n\n      &.easy-hackathon-setup {\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        > svg {\n          margin-left: ", ";\n          width: auto;\n          height: ", ";\n          z-index: 3;\n        }\n\n        .free-transform-selection {\n          --size: calc(", " * 5);\n\n          position: absolute;\n          border: 1px ", " dashed;\n          width: var(--size);\n          height: var(--size);\n          z-index: 2;\n\n          div {\n            position: absolute;\n            border: ", " solid ", ";\n            background-color: ", ";\n            width: ", ";\n            height: ", ";\n\n            &:nth-child(1) {\n              top: ", ";\n              left: ", ";\n            }\n\n            &:nth-child(2) {\n              top: ", ";\n              right: ", ";\n            }\n\n            &:nth-child(3) {\n              bottom: ", ";\n              left: ", ";\n            }\n\n            &:nth-child(4) {\n              bottom: ", ";\n              right: ", ";\n            }\n          }\n\n          svg {\n            position: absolute;\n            bottom: ", ";\n            right: ", ";\n            transform: rotate(-45deg);\n          }\n        }\n\n        .gradient {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          background-image: radial-gradient(\n            circle,\n            rgba(255, 255, 255, 0%) 0%,\n            ", " 75%\n          );\n          z-index: 1;\n        }\n\n        .squares-wrapper {\n          position: absolute;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          background: linear-gradient(\n              transparent calc(", " - ", "),\n              #6a55b8 ", ",\n              transparent ", "\n            ),\n            linear-gradient(\n              90deg,\n              transparent calc(", " - ", "),\n              #6a55b8 ", ",\n              transparent ", "\n            );\n          background-size: 100% ", ",\n            ", " 100%;\n          background-position: center;\n        }\n      }\n\n      &.custom-hackathon-page {\n        margin: ", " calc(", " * -1)\n          calc(", " * -1) 0;\n      }\n    }\n  }\n\n  + a {\n    margin: ", " auto 0 auto;\n  }\n\n  @media ", " {\n    grid-template-columns: repeat(2, 1fr);\n\n    .card {\n      text-align: left;\n    }\n  }\n"]);
                return cn = function() {
                    return n
                }, n
            }
            var ln = R.ZP.div.withConfig({
                    componentId: "sc-68aa1f7-0"
                })(cn(), D.bK.sectionSpaceBetweenHeadingContent, D._4.gap, D._4.backgroundColor, (0, O.hO)("1px"), D._4.borderColor, D._4.borderRadius, D._4.padding, D._4.gap, (0, O.hO)("30px"), D.O9.purple800, (0, O.hO)("18px"), D.O9.grey500, D._4.padding, (0, O.hO)("80px"), (0, O.hO)("220px"), D._4.backgroundSquareSizeL, D.O9.purple200, (0, O.hO)("1px"), D.O9.purple200, D.O9.purple100, (0, O.hO)("8px"), (0, O.hO)("8px"), (0, O.hO)("-5px"), (0, O.hO)("-5px"), (0, O.hO)("-5px"), (0, O.hO)("-5px"), (0, O.hO)("-5px"), (0, O.hO)("-5px"), (0, O.hO)("-5px"), (0, O.hO)("-5px"), (0, O.hO)("-15px"), (0, O.hO)("-45px"), (0, O.m4)(D._4.backgroundColor, 1), D._4.backgroundSquareSizeL, (0, O.hO)("1px"), D._4.backgroundSquareSizeL, D._4.backgroundSquareSizeL, D._4.backgroundSquareSizeL, (0, O.hO)("1px"), D._4.backgroundSquareSizeL, D._4.backgroundSquareSizeL, D._4.backgroundSquareSizeL, D._4.backgroundSquareSizeL, D._4.padding, D._4.padding, D._4.padding, D._4.gap, D.Uh.m),
                En = e(94741);

            function dn() {
                var n = (0, o.$G)("homepage").t;
                return (0, i.jsxs)(h.Z, {
                    title: (0, i.jsx)("h2", {
                        children: n("for_organizations_title")
                    }),
                    subtitle: n("for_organizations_subtitle"),
                    description: n("for_organizations_description"),
                    children: [(0, i.jsxs)(ln, {
                        children: [(0, i.jsxs)("div", {
                            className: "card",
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h3", {
                                    children: n("for_organizations_setup_title")
                                }), (0, i.jsx)("p", {
                                    children: n("for_organizations_setup_description")
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "easy-hackathon-setup",
                                children: [(0, i.jsx)(En.Z, {}), (0, i.jsxs)("div", {
                                    className: "free-transform-selection",
                                    children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("svg", {
                                        width: 30,
                                        height: 30,
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, i.jsx)("path", {
                                            d: "M16.757 1.5l11.44 25.455c.586 1.305-.777 2.665-2.08 2.075l-9.908-4.478a2.548 2.548 0 00-2.063-.01L3.6 29.112c-1.322.573-2.623-.783-1.996-2.081L13.94 1.5c.578-1.197 2.28-1.197 2.818 0z",
                                            fill: D._4.cursorFill,
                                            stroke: D._4.cursorStroke,
                                            strokeWidth: 1
                                        })
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "gradient"
                                }), (0, i.jsx)("div", {
                                    className: "squares-wrapper"
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "card",
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h3", {
                                    children: n("for_organizations_custom_page_title")
                                }), (0, i.jsx)("p", {
                                    children: n("for_organizations_custom_page_description")
                                })]
                            }), (0, i.jsx)("div", {
                                className: "custom-hackathon-page",
                                children: (0, i.jsx)(a(), {
                                    width: 1100,
                                    height: 649,
                                    src: "https://taikai.azureedge.net/QQNKAUtdTextmMKUhBxrEbPrnmF7VfPADeL-G8KTy-g/rs:fit:1100:650:0/g:no/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2xhbmRpbmcvaG9tZXBhZ2UvY3VzdG9tLWhhY2thdGhvbi1wYWdlLnBuZw.png",
                                    alt: n("for_organizations_custom_page_title"),
                                    layout: "responsive"
                                })
                            })]
                        })]
                    }), (0, i.jsx)(s.ZP, {
                        color: "purple500",
                        value: n("for_organizations_button"),
                        icon: "caret-right",
                        iconPosition: "right",
                        url: "/organizations"
                    })]
                })
            }
            var Qn = e(37860),
                hn = e(63682);

            function In() {
                var n = (0, K.Z)(["\n  margin-top: ", ";\n\n  > div {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: ", ";\n\n    @media ", " {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @media ", " {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n\n  + a {\n    margin: ", " auto 0 auto;\n  }\n"]);
                return In = function() {
                    return n
                }, n
            }
            var pn = R.ZP.div.withConfig({
                    componentId: "sc-3eb41061-0"
                })(In(), D.bK.sectionSpaceBetweenHeadingContent, D._4.gap, D.Uh.s, D.Uh.m, (0, O.hO)("40px")),
                un = e(37856),
                xn = e.n(un);

            function wn() {
                var n = (0, K.Z)(["\n  width: 100%;\n\n  a {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    color: ", ";\n    text-decoration: none;\n  }\n"]);
                return wn = function() {
                    return n
                }, n
            }

            function fn() {
                var n = (0, K.Z)(["\n  position: relative;\n  border-radius: ", ";\n  width: 100%;\n  overflow: hidden;\n  padding-top: 56.25%;\n"]);
                return fn = function() {
                    return n
                }, n
            }

            function mn() {
                var n = (0, K.Z)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);
                return mn = function() {
                    return n
                }, n
            }

            function vn() {
                var n = (0, K.Z)(["\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n"]);
                return vn = function() {
                    return n
                }, n
            }

            function jn() {
                var n = (0, K.Z)(["\n  flex: 1;\n\n  ul {\n    margin: ", " ", " ", " ", ";\n    padding: 0;\n    display: flex;\n    flex-wrap: wrap;\n\n    li {\n      list-style: none;\n      margin: calc(", " / 2) ", ";\n\n      .tag {\n        max-width: calc(100vw - calc(", " * 2));\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n\n        @media ", " {\n          max-width: calc((100vw - var(--sidePadding) * 3) / 2);\n        }\n\n        @media ", " {\n          max-width: calc(\n            (100vw - ", " * 3) / 4 - var(--sidePadding) * 2\n          );\n        }\n\n        @media (min-width: ", ") {\n          max-width: calc(\n            (", " - ", " * 2) / 4 -\n              var(--sidePadding) * 2\n          );\n        }\n      }\n    }\n  }\n\n  h3 {\n    margin-bottom: ", ";\n    color: ", ";\n\n    & + div {\n      position: relative;\n\n      &:after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: ", ";\n        background-image: linear-gradient(\n          to bottom,\n          transparent,\n          ", " 90%\n        );\n      }\n\n      span {\n        line-height: 1.5;\n      }\n    }\n  }\n\n  @media ", " {\n    h3 {\n      font-size: ", ";\n    }\n  }\n"]);
                return jn = function() {
                    return n
                }, n
            }
            var Dn = R.ZP.div.withConfig({
                    componentId: "sc-7ae35c8-0"
                })(wn(), D.Xh.storyColor),
                Kn = R.ZP.div.withConfig({
                    componentId: "sc-7ae35c8-1"
                })(fn(), D.In.borderRadius),
                Rn = R.ZP.img.withConfig({
                    componentId: "sc-7ae35c8-2"
                })(mn()),
                On = R.ZP.div.withConfig({
                    componentId: "sc-7ae35c8-3"
                })(vn()),
                Un = R.ZP.div.withConfig({
                    componentId: "sc-7ae35c8-4"
                })(jn(), (0, O.hO)("15px"), (0, O.hO)("-5px"), (0, O.hO)("5px"), (0, O.hO)("-5px"), (0, O.hO)("5px"), (0, O.hO)("5px"), D.bK.sidePadding, D.Uh.s, D.Uh.l, D.bK.sectionTopBottomPadding, D.bK.contentMaxWidth, D.bK.contentMaxWidth, D.bK.sectionTopBottomPadding, (0, O.hO)("10px"), D.Xh.storyTitleColor, (0, O.hO)("30px"), D.sM.backgroundColor, D.Uh.m, (0, O.hO)("21px"));

            function Sn(n) {
                var A = n.url,
                    e = n.coverUrl,
                    t = n.tags,
                    o = n.title,
                    g = n.description;
                return (0, i.jsx)(Dn, {
                    children: (0, i.jsxs)("a", {
                        href: A,
                        children: [(0, i.jsx)(Kn, {
                            children: (0, i.jsx)(Rn, {
                                src: e,
                                alt: o
                            })
                        }), (0, i.jsx)(On, {
                            children: (0, i.jsxs)(Un, {
                                children: [(0, i.jsx)("ul", {
                                    children: t.map((function(n, A) {
                                        return (0, i.jsx)("li", {
                                            children: (0, i.jsx)(s.Vp, {
                                                color: "purple100",
                                                txtColor: "purple500",
                                                value: n
                                            })
                                        }, A)
                                    }))
                                }), (0, i.jsx)("h3", {
                                    children: o
                                }), (0, i.jsx)(xn(), {
                                    line: 4,
                                    truncateText: "\u2026",
                                    text: g
                                })]
                            })
                        })]
                    })
                })
            }
            var kn = e(11752),
                Fn = e.n(kn),
                Gn = Fn()().publicRuntimeConfig,
                bn = function(n) {
                    var A, e, g = n.story,
                        r = (0, o.$G)("homepage").i18n.language,
                        a = void 0 === r ? "en" : r,
                        s = (0, t.useMemo)((function() {
                            return "en" === a ? {
                                tags: null === g || void 0 === g ? void 0 : g.tags,
                                title: null === g || void 0 === g ? void 0 : g.title,
                                description: null === g || void 0 === g ? void 0 : g.shortDescription,
                                url: "".concat(Gn.frontendUrl, "/blog/").concat(g.slug)
                            } : {
                                tags: null !== (n = null === g || void 0 === g ? void 0 : g.tags_br) && void 0 !== n ? n : null === g || void 0 === g ? void 0 : g.tags,
                                title: null !== (A = null === g || void 0 === g ? void 0 : g.title_br) && void 0 !== A ? A : null === g || void 0 === g ? void 0 : g.title,
                                description: null !== (e = null === g || void 0 === g ? void 0 : g.shortDescription_br) && void 0 !== e ? e : g.shortDescription,
                                url: "".concat(Gn.frontendUrl, "/blog/").concat(null !== (i = null === g || void 0 === g ? void 0 : g.slug_br) && void 0 !== i ? i : null === g || void 0 === g ? void 0 : g.slug)
                            };
                            var n, A, e, i
                        }), [g]);
                    return (0, i.jsx)(Sn, {
                        url: s.url,
                        tags: s.tags,
                        title: s.title,
                        description: s.description,
                        coverUrl: (0, gn.Zj)(null !== (e = null === g || void 0 === g || null === (A = g.featuredImage) || void 0 === A ? void 0 : A.url) && void 0 !== e ? e : "/static/images/default-cover.svg")
                    })
                };

            function yn(n) {
                var A = n.stories,
                    e = void 0 === A ? [] : A,
                    t = (0, o.$G)("homepage"),
                    g = t.i18n,
                    r = t.t,
                    a = g.language,
                    C = void 0 === a ? "en" : a;
                return Array.isArray(e) && 0 !== e.length ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(rn.TY, {
                        title: r("blog_title"),
                        stories: e,
                        language: C
                    }), (0, i.jsxs)(h.Z, {
                        title: (0, i.jsx)("h2", {
                            children: r("blog_title")
                        }),
                        subtitle: "Blog",
                        backgroundColor: D.sM.backgroundColor,
                        children: [(0, i.jsx)(pn, {
                            children: (0, i.jsx)("div", {
                                children: e.slice(0, 4).map((function(n) {
                                    return (0, i.jsx)(bn, {
                                        story: n
                                    }, n.id)
                                }))
                            })
                        }), (0, i.jsx)(s.ZP, {
                            variant: "outline",
                            color: "purple200",
                            txtColor: "purple850",
                            value: r("blog_button"),
                            icon: "caret-right",
                            iconPosition: "right",
                            url: "/blog"
                        })]
                    })]
                }) : (0, i.jsx)(i.Fragment, {})
            }

            function Pn() {
                var n = (0, K.Z)(["\n  > div {\n    &:first-child {\n      text-align: center;\n    }\n\n    &:last-child {\n      display: flex;\n      justify-content: center;\n    }\n\n    p {\n      margin: ", " 0 0 0;\n      font-size: ", ";\n      color: ", ";\n    }\n\n    a {\n      margin: ", " auto 0 auto;\n    }\n  }\n\n  @media ", " {\n    > div {\n      &:first-child {\n        margin: 0 0 ", ";\n      }\n    }\n  }\n\n  @media ", " {\n    display: flex;\n    align-items: center;\n\n    > div {\n      &:first-child {\n        margin: 0 ", " 0 0;\n        width: 38%;\n        text-align: left;\n\n        a {\n          margin: ", " 0 0 0;\n        }\n      }\n\n      &:last-child {\n        width: 62%;\n        justify-content: flex-end;\n      }\n    }\n  }\n\n  @media ", " {\n    > div {\n      flex: 1;\n\n      &:first-child {\n        width: 50%;\n      }\n\n      &:last-child {\n        width: 50%;\n      }\n    }\n  }\n"]);
                return Pn = function() {
                    return n
                }, n
            }

            function Ln() {
                var n = (0, K.Z)(["\n  display: none;\n  margin-left: ", ";\n  width: 100%;\n  max-width: ", ";\n\n  @media ", " {\n    display: flex;\n  }\n\n  @media ", " {\n    margin-left: 0;\n  }\n\n  .sidebar {\n    position: relative;\n    border-width: ", " 0 ", " ", ";\n    border-style: solid;\n    border-color: ", ";\n    border-radius: ", " 0 0 ", ";\n    background-color: ", ";\n    width: ", ";\n\n    a {\n      position: absolute;\n      right: ", ";\n      min-width: ", ";\n      height: ", ";\n      border: ", " solid ", ";\n      border-radius: ", ";\n      background-color: ", ";\n      display: flex;\n      align-items: center;\n      text-decoration: none;\n      transition-duration: ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      svg {\n        margin: 0 ", ";\n      }\n\n      span {\n        font-size: ", ";\n        text-transform: uppercase;\n        letter-spacing: ", ";\n        color: ", ";\n      }\n\n      &:nth-child(1) {\n        top: ", ";\n      }\n\n      &:nth-child(2) {\n        top: calc(", " + ", ");\n        min-width: ", ";\n        background-color: ", ";\n\n        span {\n          font-size: ", ";\n          font-weight: ", ";\n          color: ", ";\n        }\n\n        &:hover {\n          background-color: ", ";\n        }\n      }\n\n      &:nth-child(3) {\n        top: calc(", " + ", " + ", " * 2);\n      }\n\n      &:nth-child(4) {\n        top: calc(", " + ", " * 2 + ", " * 3);\n      }\n    }\n\n    @media (min-width: 960px) {\n      a {\n        min-width: ", ";\n\n        span {\n          font-size: ", ";\n        }\n\n        &:nth-child(2) {\n          span {\n            font-size: ", ";\n          }\n        }\n      }\n    }\n  }\n\n  .chat {\n    flex: 1;\n    border-width: ", " ", " ", " 0;\n    border-style: solid;\n    border-color: ", ";\n    border-radius: 0 ", " ", " 0;\n    background-color: ", ";\n    padding: ", ";\n\n    .heading {\n      margin-bottom: ", ";\n      display: flex;\n      align-items: center;\n\n      svg {\n        margin-right: ", ";\n      }\n\n      span {\n        font-size: ", ";\n        font-weight: ", ";\n        text-transform: uppercase;\n        letter-spacing: ", ";\n        color: ", ";\n      }\n    }\n  }\n"]);
                return Ln = function() {
                    return n
                }, n
            }

            function Hn() {
                var n = (0, K.Z)(["\n  display: flex;\n\n  &:not(:last-child) {\n    margin-bottom: ", ";\n  }\n\n  .avatar {\n    margin-right: ", ";\n    border: ", " solid ", ";\n    border-radius: 999px;\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n\n    svg {\n      width: 100%;\n      height: auto;\n    }\n  }\n\n  .content {\n    flex: 1;\n\n    div {\n      display: flex;\n      align-items: center;\n\n      .user {\n        font-size: ", ";\n        font-weight: ", ";\n        color: ", ";\n      }\n\n      .date {\n        margin-left: ", ";\n        font-size: ", ";\n        color: ", ";\n      }\n    }\n\n    .message {\n      margin-top: ", ";\n      font-size: ", ";\n      color: ", ";\n    }\n  }\n"]);
                return Hn = function() {
                    return n
                }, n
            }
            var Zn = R.ZP.div.withConfig({
                    componentId: "sc-7edbc872-0"
                })(Pn(), (0, O.hO)("12px"), (0, O.hO)("18px"), D.O9.grey500, (0, O.hO)("40px"), D.Uh.s, (0, O.hO)("40px"), D.Uh.m, D._4.gap, (0, O.hO)("40px"), D.Uh.l),
                _n = R.ZP.div.withConfig({
                    componentId: "sc-7edbc872-1"
                })(Ln(), (0, O.hO)("80px"), (0, O.hO)("400px"), D.Uh.s, D.Uh.m, (0, O.hO)("1px"), (0, O.hO)("1px"), (0, O.hO)("1px"), D.O9.purple150, (0, O.hO)("8px"), (0, O.hO)("8px"), D.O9.purple100, (0, O.hO)("80px"), (0, O.hO)("24px"), (0, O.hO)("185px"), (0, O.hO)("44px"), (0, O.hO)("1px"), D.O9.purple150, (0, O.hO)("8px"), D.O9.purple50, D.CO.hoverTransitionDuration, D.O9.purple100, (0, O.hO)("12px"), D.cp.fontSizeXs, (0, O.hO)("1px"), D.O9.purple400, (0, O.hO)("-20px"), (0, O.hO)("24px"), (0, O.hO)("16px"), (0, O.hO)("185px"), D.O9.white, D.cp.fontSizeSm, D.cp.fontWeigthSemiBold, D.O9.purple500, D.O9.purple100, (0, O.hO)("24px"), (0, O.hO)("44px"), (0, O.hO)("16px"), (0, O.hO)("24px"), (0, O.hO)("44px"), (0, O.hO)("16px"), (0, O.hO)("210px"), D.cp.fontSizeSm, D.cp.fontSizeRegular, (0, O.hO)("1px"), (0, O.hO)("1px"), (0, O.hO)("1px"), D.O9.purple100, (0, O.hO)("8px"), (0, O.hO)("8px"), D.bJ.chatBackgroundColor, (0, O.hO)("40px"), (0, O.hO)("24px"), (0, O.hO)("12px"), D.cp.fontSizeRegular, D.cp.fontWeigthSemiBold, (0, O.hO)("1px"), D.O9.purple500),
                Mn = R.ZP.div.withConfig({
                    componentId: "sc-7edbc872-2"
                })(Hn(), (0, O.hO)("20px"), (0, O.hO)("20px"), (0, O.hO)("1px"), D.O9.purple100, (0, O.hO)("28px"), (0, O.hO)("28px"), (0, O.hO)("2px"), D.cp.fontSizeSm, D.cp.fontWeigthSemiBold, (function(n) {
                    return n.color
                }), (0, O.hO)("8px"), D.cp.fontSizeXs, D.O9.purple300, (0, O.hO)("4px"), D.cp.fontSizeXs, D.O9.purple800);

            function Nn(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, n), {
                    children: [(0, i.jsx)("rect", {
                        y: .51,
                        width: 24,
                        height: 24,
                        rx: 12,
                        fill: "url(#prefix__pattern0)"
                    }), (0, i.jsxs)("defs", {
                        children: [(0, i.jsx)("pattern", {
                            id: "prefix__pattern0",
                            patternContentUnits: "objectBoundingBox",
                            width: 1,
                            height: 1,
                            children: (0, i.jsx)("use", {
                                xlinkHref: "#prefix__image0_655_20273",
                                transform: "scale(.00202)"
                            })
                        }), (0, i.jsx)("image", {
                            id: "prefix__image0_655_20273",
                            width: 496,
                            height: 496,
                            xlinkHref: "data:image/png;base64,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"
                        })]
                    })]
                }))
            }

            function Yn(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, n), {
                    children: [(0, i.jsx)("rect", {
                        y: .51,
                        width: 24,
                        height: 24,
                        rx: 12,
                        fill: "url(#prefix__pattern0)"
                    }), (0, i.jsxs)("defs", {
                        children: [(0, i.jsx)("pattern", {
                            id: "prefix__pattern0",
                            patternContentUnits: "objectBoundingBox",
                            width: 1,
                            height: 1,
                            children: (0, i.jsx)("use", {
                                xlinkHref: "#prefix__image0_655_20282",
                                transform: "scale(.00202)"
                            })
                        }), (0, i.jsx)("image", {
                            id: "prefix__image0_655_20282",
                            width: 496,
                            height: 496,
                            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfAAAAHwCAIAAADWzqqxAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAB8KADAAQAAAABAAAB8AAAAADx5k+PAAAUAklEQVR4Ae3WMY4dORIE0NVCNxLkyWxAZp+1fd1Al9odq5g2pwhG5pNFGlWV+eIr0N9+/Pr9H/8IECBAIF/gv/kr2IAAAQIE/hFQ6H4HBAgQaCKg0JsEaQ0CBAgodL8BAgQINBFQ6E2CtAYBAgQUut8AAQIEmggo9CZBWoMAAQIK3W+AAAECTQQUepMgrUGAAAGF7jdAgACBJgIKvUmQ1iBAgIBC9xsgQIBAEwGF3iRIaxAgQECh+w0QIECgiYBCbxKkNQgQIKDQ/QYIECDQREChNwnSGgQIEFDofgMECBBoIqDQmwRpDQIECCh0vwECBAg0EVDoTYK0BgECBBS63wABAgSaCCj0JkFagwABAgrdb4AAAQJNBBR6kyCtQYAAAYXuN0CAAIEmAgq9SZDWIECAgEL3GyBAgEATAYXeJEhrECBAQKH7DRAgQKCJgEJvEqQ1CBAgoND9BggQINBEQKE3CdIaBAgQUOh+AwQIEGgioNCbBGkNAgQIKHS/AQIECDQRUOhNgrQGAQIEFLrfAAECBJoIKPQmQVqDAAECCt1vgAABAk0EFHqTIK1BgAABhe43QIAAgSYCCr1JkNYgQICAQvcbIECAQBMBhd4kSGsQIEBAofsNECBAoImAQm8SpDUIECCg0P0GCBAg0ETg+88/n7et8vfj67aRzEOAAIFV4MLm/P94/kJfM3ImQIBAsIBCDw7P6AQIEFgFFPqq4UyAAIFgAYUeHJ7RCRAgsAoo9FXDmQABAsECCj04PKMTIEBgFVDoq4YzAQIEggUUenB4RidAgMAqoNBXDWcCBAgECyj04PCMToAAgVVAoa8azgQIEAgWUOjB4RmdAAECq4BCXzWcCRAgECyg0IPDMzoBAgRWAYW+ajgTIEAgWEChB4dndAIECKwCCn3VcCZAgECwgEIPDs/oBAgQWAUU+qrhTIAAgWABhR4cntEJECCwCij0VcOZAAECwQIKPTg8oxMgQGAVUOirhjMBAgSCBRR6cHhGJ0CAwCqg0FcNZwIECAQLKPTg8IxOgACBVUChrxrOBAgQCBZQ6MHhGZ0AAQKrgEJfNZwJECAQLKDQg8MzOgECBFYBhb5qOBMgQCBYQKEHh2d0AgQIrAIKfdVwJkCAQLCAQg8Oz+gECBBYBRT6quFMgACBYAGFHhye0QkQILAKKPRVw5kAAQLBAgo9ODyjEyBAYBVQ6KuGMwECBIIFFHpweEYnQIDAKqDQVw1nAgQIBAso9ODwjE6AAIFVQKGvGs4ECBAIFlDoweEZnQABAquAQl81nAkQIBAsoNCDwzM6AQIEVgGFvmo4EyBAIFhAoQeHZ3QCBAisAgp91XAmQIBAsMC3H79+B48/e/Sffz5nA9j+3xf4+/H177/UG08J+Av9lLTvECBA4GUBhf4ysNcTIEDglIBCPyXtOwQIEHhZQKG/DOz1BAgQOCWg0E9J+w4BAgReFlDoLwN7PQECBE4JKPRT0r5DgACBlwUU+svAXk+AAIFTAgr9lLTvECBA4GUBhf4ysNcTIEDglIBCPyXtOwQIEHhZQKG/DOz1BAgQOCWg0E9J+w4BAgReFlDoLwN7PQECBE4JKPRT0r5DgACBlwUU+svAXk+AAIFTAgr9lLTvECBA4GUBhf4ysNcTIEDglIBCPyXtOwQIEHhZQKG/DOz1BAgQOCWg0E9J+w4BAgReFlDoLwN7PQECBE4JKPRT0r5DgACBlwUU+svAXk+AAIFTAgr9lLTvECBA4GUBhf4ysNcTIEDglIBCPyXtOwQIEHhZQKG/DOz1BAgQOCWg0E9J+w4BAgReFlDoLwN7PQECBE4JKPRT0r5DgACBlwUU+svAXk+AAIFTAgr9lLTvECBA4GUBhf4ysNcTIEDglIBCPyXtOwQIEHhZQKG/DOz1BAgQOCWg0E9J+w4BAgReFlDoLwN7PQECBE4JKPRT0r5DgACBlwUU+svAXk+AAIFTAgr9lLTvECBA4GUBhf4ysNcTIEDglIBCPyXtOwQIEHhZQKG/DOz1BAgQOCWg0E9J+w4BAgReFlDoLwN7PQECBE4JKPRT0r5DgACBlwUU+svAXk+AAIFTAt9+/Pp96lu+M0Lg55/PEXtuL/n342v7HV5AoAj4C71wuBAgQCBXQKHnZmdyAgQIFAGFXjhcCBAgkCug0HOzMzkBAgSKgEIvHC4ECBDIFVDoudmZnAABAkVAoRcOFwIECOQKKPTc7ExOgACBIqDQC4cLAQIEcgUUem52JidAgEARUOiFw4UAAQK5Ago9NzuTEyBAoAgo9MLhQoAAgVwBhZ6bnckJECBQBBR64XAhQIBAroBCz83O5AQIECgCCr1wuBAgQCBXQKHnZmdyAgQIFAGFXjhcCBAgkCug0HOzMzkBAgSKgEIvHC4ECBDIFVDoudmZnAABAkVAoRcOFwIECOQKKPTc7ExOgACBIqDQC4cLAQIEcgUUem52JidAgEARUOiFw4UAAQK5Ago9NzuTEyBAoAgo9MLhQoAAgVwBhZ6bnckJECBQBBR64XAhQIBAroBCz83O5AQIECgCCr1wuBAgQCBXQKHnZmdyAgQIFAGFXjhcCBAgkCug0HOzMzkBAgSKgEIvHC4ECBDIFVDoudmZnAABAkVAoRcOFwIECOQKKPTc7ExOgACBIqDQC4cLAQIEcgUUem52JidAgEARUOiFw4UAAQK5Ago9NzuTEyBAoAgo9MLhQoAAgVwBhZ6bnckJECBQBBR64XAhQIBAroBCz83O5AQIECgCCr1wuBAgQCBXQKHnZmdyAgQIFAGFXjhcCBAgkCug0HOzMzkBAgSKgEIvHC4ECBDIFVDoudmZnAABAkVAoRcOFwIECOQKKPTc7ExOgACBIqDQC4cLAQIEcgUUem52JidAgEARUOiFw4UAAQK5Ago9NzuTEyBAoAgo9MLhQoAAgVwBhZ6bnckJECBQBBR64XAhQIBAroBCz83O5AQIECgCCr1wuBAgQCBXQKHnZmdyAgQIFAGFXjhcCBAgkCug0HOzMzkBAgSKgEIvHC4ECBDIFVDoudmZnAABAkVAoRcOFwIECOQKKPTc7ExOgACBIqDQC4cLAQIEcgUUem52JidAgEARUOiFw4UAAQK5Ago9NzuTEyBAoAgo9MLhQoAAgVwBhZ6bnckJECBQBBR64XAhQIBAroBCz83O5AQIECgCCr1wuBAgQCBXQKHnZmdyAgQIFAGFXjhcCBAgkCug0HOzMzkBAgSKgEIvHC4ECBDIFVDoudmZnAABAkVAoRcOFwIECOQKKPTc7ExOgACBIqDQC4cLAQIEcgUUem52JidAgEARUOiFw4UAAQK5Ago9NzuTEyBAoAgo9MLhQoAAgVwBhZ6bnckJECBQBBR64XAhQIBAroBCz83O5AQIECgCCr1wuBAgQCBXQKHnZmdyAgQIFAGFXjhcCBAgkCvw7cev37dN//PP520jmYcAAQKrwN+Pr/V6ydlf6JcEYQwCBAjsCij0XUHPEyBA4BIBhX5JEMYgQIDAroBC3xX0PAECBC4RUOiXBGEMAgQI7Aoo9F1BzxMgQOASAYV+SRDGIECAwK6AQt8V9DwBAgQuEVDolwRhDAIECOwKKPRdQc8TIEDgEgGFfkkQxiBAgMCugELfFfQ8AQIELhFQ6JcEYQwCBAjsCij0XUHPEyBA4BIBhX5JEMYgQIDAroBC3xX0PAECBC4RUOiXBGEMAgQI7Aoo9F1BzxMgQOASAYV+SRDGIECAwK6AQt8V9DwBAgQuEVDolwRhDAIECOwKKPRdQc8TIEDgEgGFfkkQxiBAgMCugELfFfQ8AQIELhFQ6JcEYQwCBAjsCij0XUHPEyBA4BIBhX5JEMYgQIDAroBC3xX0PAECBC4RUOiXBGEMAgQI7Aoo9F1BzxMgQOASAYV+SRDGIECAwK6AQt8V9DwBAgQuEVDolwRhDAIECOwKKPRdQc8TIEDgEgGFfkkQxiBAgMCugELfFfQ8AQIELhFQ6JcEYQwCBAjsCij0XUHPEyBA4BIBhX5JEMYgQIDAroBC3xX0PAECBC4RUOiXBGEMAgQI7Aoo9F1BzxMgQOASAYV+SRDGIECAwK6AQt8V9DwBAgQuEVDolwRhDAIECOwKKPRdQc8TIEDgEgGFfkkQxiBAgMCugELfFfQ8AQIELhH4fskcxmgj8Pfjq80ury7y88/nq+/38oEC/kIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgoo9IGhW5kAgZ4CCr1nrrYiQGCggEIfGLqVCRDoKaDQe+ZqKwIEBgp8v3Dnvx9fF0514Ug//3xeOJWRogX874uOz1/o0fEZngABAo+AQn8snAgQIBAtoNCj4zM8AQIEHgGF/lg4ESBAIFpAoUfHZ3gCBAg8Agr9sXAiQIBAtIBCj47P8AQIEHgEFPpj4USAAIFoAYUeHZ/hCRAg8Ago9MfCiQABAtECCj06PsMTIEDgEVDoj4UTAQIEogUUenR8hidAgMAjoNAfCycCBAhECyj06PgMT4AAgUdAoT8WTgQIEIgWUOjR8RmeAAECj4BCfyycCBAgEC2g0KPjMzwBAgQeAYX+WDgRIEAgWkChR8dneAIECDwCCv2xcCJAgEC0gEKPjs/wBAgQeAQU+mPhRIAAgWgBhR4dn+EJECDwCCj0x8KJAAEC0QIKPTo+wxMgQOARUOiPhRMBAgSiBRR6dHyGJ0CAwCOg0B8LJwIECEQLKPTo+AxPgACBR0ChPxZOBAgQiBZQ6NHxGZ4AAQKPgEJ/LJwIECAQLaDQo+MzPAECBB4Bhf5YOBEgQCBaQKFHx2d4AgQIPAIK/bFwIkCAQLSAQo+Oz/AECBB4BBT6Y+FEgACBaAGFHh2f4QkQIPAIKPTHwokAAQLRAgo9Oj7DEyBA4BFQ6I+FEwECBKIFFHp0fIYnQIDAI6DQHwsnAgQIRAso9Oj4DE+AAIFHQKE/Fk4ECBCIFlDo0fEZngABAo/Atx+/fj83JwIECBCIFfAXemx0BidAgEAVUOjVw40AAQKxAgo9NjqDEyBAoAoo9OrhRoAAgVgBhR4bncEJECBQBRR69XAjQIBArIBCj43O4AQIEKgCCr16uBEgQCBWQKHHRmdwAgQIVAGFXj3cCBAgECug0GOjMzgBAgSqgEKvHm4ECBCIFVDosdEZnAABAlVAoVcPNwIECMQKKPTY6AxOgACBKqDQq4cbAQIEYgUUemx0BidAgEAVUOjVw40AAQKxAgo9NjqDEyBAoAoo9OrhRoAAgVgBhR4bncEJECBQBRR69XAjQIBArIBCj43O4AQIEKgCCr16uBEgQCBWQKHHRmdwAgQIVAGFXj3cCBAgECug0GOjMzgBAgSqgEKvHm4ECBCIFVDosdEZnAABAlVAoVcPNwIECMQKKPTY6AxOgACBKqDQq4cbAQIEYgUUemx0BidAgEAVUOjVw40AAQKxAgo9NjqDEyBAoAoo9OrhRoAAgVgBhR4bncEJECBQBRR69XAjQIBArIBCj43O4AQIEKgCCr16uBEgQCBWQKHHRmdwAgQIVAGFXj3cCBAgECug0GOjMzgBAgSqgEKvHm4ECBCIFVDosdEZnAABAlVAoVcPNwIECMQKKPTY6AxOgACBKqDQq4cbAQIEYgUUemx0BidAgEAV+B8E5BxwHSVBnAAAAABJRU5ErkJggg=="
                        })]
                    })]
                }))
            }

            function Jn(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, n), {
                    children: [(0, i.jsx)("rect", {
                        y: .51,
                        width: 24,
                        height: 24,
                        rx: 12,
                        fill: "url(#prefix__pattern0)"
                    }), (0, i.jsxs)("defs", {
                        children: [(0, i.jsx)("pattern", {
                            id: "prefix__pattern0",
                            patternContentUnits: "objectBoundingBox",
                            width: 1,
                            height: 1,
                            children: (0, i.jsx)("use", {
                                xlinkHref: "#prefix__image0_655_20291",
                                transform: "scale(.00202)"
                            })
                        }), (0, i.jsx)("image", {
                            id: "prefix__image0_655_20291",
                            width: 496,
                            height: 496,
                            xlinkHref: "data:image/png;base64,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"
                        })]
                    })]
                }))
            }

            function Tn(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, n), {
                    children: [(0, i.jsx)("rect", {
                        y: .51,
                        width: 24,
                        height: 24,
                        rx: 12,
                        fill: "url(#prefix__pattern0)"
                    }), (0, i.jsxs)("defs", {
                        children: [(0, i.jsx)("pattern", {
                            id: "prefix__pattern0",
                            patternContentUnits: "objectBoundingBox",
                            width: 1,
                            height: 1,
                            children: (0, i.jsx)("use", {
                                xlinkHref: "#prefix__image0_655_20300",
                                transform: "scale(.00202)"
                            })
                        }), (0, i.jsx)("image", {
                            id: "prefix__image0_655_20300",
                            width: 496,
                            height: 496,
                            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfAAAAHwCAIAAADWzqqxAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAB8KADAAQAAAABAAAB8AAAAADx5k+PAAAUZ0lEQVR4Ae3W0Y2eNw6G0TjwjdtwHa5m7t3DVOLSXEt2CwhABiLxWjp7mVX0UYd/HsyXHz+//eV/BAgQIPDnC/z95z/BCwgQIEDg/wKC7ndAgACBSwQE/ZJFegYBAgQE3W+AAAEClwgI+iWL9AwCBAgIut8AAQIELhEQ9EsW6RkECBAQdL8BAgQIXCIg6Jcs0jMIECAg6H4DBAgQuERA0C9ZpGcQIEBA0P0GCBAgcImAoF+ySM8gQICAoPsNECBA4BIBQb9kkZ5BgAABQfcbIECAwCUCgn7JIj2DAAECgu43QIAAgUsEBP2SRXoGAQIEBN1vgAABApcICPoli/QMAgQICLrfAAECBC4REPRLFukZBAgQEHS/AQIECFwiIOiXLNIzCBAgIOh+AwQIELhEQNAvWaRnECBAQND9BggQIHCJgKBfskjPIECAgKD7DRAgQOASAUG/ZJGeQYAAAUH3GyBAgMAlAoJ+ySI9gwABAoLuN0CAAIFLBAT9kkV6BgECBATdb4AAAQKXCAj6JYv0DAIECAi63wABAgQuERD0SxbpGQQIEBB0vwECBAhcIiDolyzSMwgQICDofgMECBC4REDQL1mkZxAgQEDQ/QYIECBwiYCgX7JIzyBAgICg+w0QIEDgEgFBv2SRnkGAAAFB9xsgQIDAJQJfA9/x6/N74FQfn78DpwocKXN9gVB+UcWlZP6iMtfnL/Tij8oxAgQIpAsIevqGzEeAAIGigKAXoRwjQIBAuoCgp2/IfAQIECgKCHoRyjECBAikCwh6+obMR4AAgaKAoBehHCNAgEC6gKCnb8h8BAgQKAoIehHKMQIECKQLCHr6hsxHgACBooCgF6EcI0CAQLqAoKdvyHwECBAoCgh6EcoxAgQIpAsIevqGzEeAAIGigKAXoRwjQIBAuoCgp2/IfAQIECgKCHoRyjECBAikCwh6+obMR4AAgaKAoBehHCNAgEC6gKCnb8h8BAgQKAoIehHKMQIECKQLCHr6hsxHgACBooCgF6EcI0CAQLqAoKdvyHwECBAoCgh6EcoxAgQIpAsIevqGzEeAAIGigKAXoRwjQIBAuoCgp2/IfAQIECgKCHoRyjECBAikCwh6+obMR4AAgaKAoBehHCNAgEC6gKCnb8h8BAgQKAoIehHKMQIECKQLCHr6hsxHgACBooCgF6EcI0CAQLqAoKdvyHwECBAoCgh6EcoxAgQIpAsIevqGzEeAAIGigKAXoRwjQIBAuoCgp2/IfAQIECgKCHoRyjECBAikCwh6+obMR4AAgaKAoBehHCNAgEC6gKCnb8h8BAgQKAoIehHKMQIECKQLCHr6hsxHgACBooCgF6EcI0CAQLqAoKdvyHwECBAoCgh6EcoxAgQIpAt8+fHzW/qM5vsXgV+f3//l//GPCfxHgY/P3//x3/SvBQj4Cz1gCUYgQIDACQFBP6HoDgIECAQICHrAEoxAgACBEwKCfkLRHQQIEAgQEPSAJRiBAAECJwQE/YSiOwgQIBAgIOgBSzACAQIETggI+glFdxAgQCBAQNADlmAEAgQInBAQ9BOK7iBAgECAgKAHLMEIBAgQOCEg6CcU3UGAAIEAAUEPWIIRCBAgcEJA0E8ouoMAAQIBAoIesAQjECBA4ISAoJ9QdAcBAgQCBAQ9YAlGIECAwAkBQT+h6A4CBAgECAh6wBKMQIAAgRMCgn5C0R0ECBAIEBD0gCUYgQABAicEBP2EojsIECAQICDoAUswAgECBE4ICPoJRXcQIEAgQEDQA5ZgBAIECJwQEPQTiu4gQIBAgICgByzBCAQIEDghIOgnFN1BgACBAAFBD1iCEQgQIHBCQNBPKLqDAAECAQKCHrAEIxAgQOCEgKCfUHQHAQIEAgQEPWAJRiBAgMAJAUE/oegOAgQIBAgIesASjECAAIETAoJ+QtEdBAgQCBAQ9IAlGIEAAQInBAT9hKI7CBAgECAg6AFLMAIBAgROCAj6CUV3ECBAIEBA0AOWYAQCBAicEBD0E4ruIECAQICAoAcswQgECBA4ISDoJxTdQYAAgQABQQ9YghEIECBwQkDQTyi6gwABAgECgh6wBCMQIEDghICgn1B0BwECBAIEBD1gCUYgQIDACQFBP6HoDgIECAQICHrAEoxAgACBEwKCfkLRHQQIEAgQEPSAJRiBAAECJwQE/YSiOwgQIBAgIOgBSzACAQIETggI+glFdxAgQCBAQNADlmAEAgQInBAQ9BOK7iBAgECAgKAHLMEIBAgQOCEg6CcU3UGAAIEAAUEPWIIRCBAgcEJA0E8ouoMAAQIBAoIesAQjECBA4ISAoJ9QdAcBAgQCBAQ9YAlGIECAwAkBQT+h6A4CBAgECAh6wBKMQIAAgRMCgn5C0R0ECBAIEBD0gCUYgQABAicEBP2EojsIECAQICDoAUswAgECBE4ICPoJRXcQIEAgQEDQA5ZgBAIECJwQEPQTiu4gQIBAgICgByzBCAQIEDghIOgnFN1BgACBAAFBD1iCEQgQIHBCQNBPKLqDAAECAQKCHrAEIxAgQOCEgKCfUHQHAQIEAgQEPWAJRiBAgMAJAUE/oegOAgQIBAgIesASjECAAIETAoJ+QtEdBAgQCBAQ9IAlGIEAAQInBAT9hKI7CBAgECAg6AFLMAIBAgROCAj6CUV3ECBAIEBA0AOWYAQCBAicEBD0E4ruIECAQICAoAcswQgECBA4ISDoJxTdQYAAgQABQQ9YghEIECBwQkDQTyi6gwABAgECgh6wBCMQIEDghICgn1B0BwECBAIEBD1gCUYgQIDACQFBP6HoDgIECAQIfA2YwQhXCXx8/r7qPWOP+fX5fexuFz8q4C/0Rxfv2QQI3Ccg6Pft1IsIEHhUQNAfXbxnEyBwn4Cg37dTLyJA4FEBQX908Z5NgMB9AoJ+3069iACBRwUE/dHFezYBAvcJCPp9O/UiAgQeFRD0Rxfv2QQI3Ccg6Pft1IsIEHhUQNAfXbxnEyBwn4Cg37dTLyJA4FEBQX908Z5NgMB9AoJ+3069iACBRwUE/dHFezYBAvcJCPp9O/UiAgQeFRD0Rxfv2QQI3Ccg6Pft1IsIEHhUQNAfXbxnEyBwn4Cg37dTLyJA4FEBQX908Z5NgMB9AoJ+3069iACBRwUE/dHFezYBAvcJCPp9O/UiAgQeFRD0Rxfv2QQI3Ccg6Pft1IsIEHhUQNAfXbxnEyBwn4Cg37dTLyJA4FEBQX908Z5NgMB9AoJ+3069iACBRwUE/dHFezYBAvcJCPp9O/UiAgQeFRD0Rxfv2QQI3Ccg6Pft1IsIEHhUQNAfXbxnEyBwn4Cg37dTLyJA4FEBQX908Z5NgMB9AoJ+3069iACBRwUE/dHFezYBAvcJCPp9O/UiAgQeFRD0Rxfv2QQI3Ccg6Pft1IsIEHhUQNAfXbxnEyBwn4Cg37dTLyJA4FEBQX908Z5NgMB9AoJ+3069iACBRwUE/dHFezYBAvcJCPp9O/UiAgQeFRD0Rxfv2QQI3CfwNfBJvz6/B05lJAIvCPivr7jlj8/fxZObx/yFvqntWwQIEBgUEPRBXFcTIEBgU0DQN7V9iwABAoMCgj6I62oCBAhsCgj6prZvESBAYFBA0AdxXU2AAIFNAUHf1PYtAgQIDAoI+iCuqwkQILApIOib2r5FgACBQQFBH8R1NQECBDYFBH1T27cIECAwKCDog7iuJkCAwKaAoG9q+xYBAgQGBQR9ENfVBAgQ2BQQ9E1t3yJAgMCggKAP4rqaAAECmwKCvqntWwQIEBgUEPRBXFcTIEBgU0DQN7V9iwABAoMCgj6I62oCBAhsCgj6prZvESBAYFBA0AdxXU2AAIFNAUHf1PYtAgQIDAoI+iCuqwkQILApIOib2r5FgACBQQFBH8R1NQECBDYFBH1T27cIECAwKCDog7iuJkCAwKaAoG9q+xYBAgQGBQR9ENfVBAgQ2BQQ9E1t3yJAgMCggKAP4rqaAAECmwKCvqntWwQIEBgUEPRBXFcTIEBgU0DQN7V9iwABAoMCgj6I62oCBAhsCgj6prZvESBAYFBA0AdxXU2AAIFNAUHf1PYtAgQIDAoI+iCuqwkQILApIOib2r5FgACBQQFBH8R1NQECBDYFBH1T27cIECAwKCDog7iuJkCAwKaAoG9q+xYBAgQGBQR9ENfVBAgQ2BQQ9E1t3yJAgMCggKAP4rqaAAECmwKCvqntWwQIEBgUEPRBXFcTIEBgU0DQN7V9iwABAoMCgj6I62oCBAhsCgj6prZvESBAYFBA0AdxXU2AAIFNAUHf1PYtAgQIDAoI+iCuqwkQILApIOib2r5FgACBQQFBH8R1NQECBDYFBH1T27cIECAwKCDog7iuJkCAwKaAoG9q+xYBAgQGBQR9ENfVBAgQ2BQQ9E1t3yJAgMCggKAP4rqaAAECmwKCvqntWwQIEBgUEPRBXFcTIEBgU0DQN7V9iwABAoMCgj6I62oCBAhsCgj6prZvESBAYFBA0AdxXU2AAIFNAUHf1PYtAgQIDAoI+iCuqwkQILApIOib2r5FgACBQQFBH8R1NQECBDYFBH1T27cIECAwKCDog7iuJkCAwKaAoG9q+xYBAgQGBQR9ENfVBAgQ2BQQ9E1t3yJAgMCggKAP4rqaAAECmwKCvqntWwQIEBgUEPRBXFcTIEBgU0DQN7V9iwABAoMCgj6I62oCBAhsCgj6prZvESBAYFBA0AdxXU2AAIFNAUHf1PYtAgQIDAoI+iCuqwkQILApIOib2r5FgACBQQFBH8R1NQECBDYFBH1T27cIECAwKCDog7iuJkCAwKaAoG9q+xYBAgQGBQR9ENfVBAgQ2BQQ9E1t3yJAgMCggKAP4rqaAAECmwKCvqntWwQIEBgUEPRBXFcTIEBgU+Dr5sf+6G99fP7+o+dfG/7X5/e1b/3RH/KLKq7PL6oI9b9j/kKvWzlJgACBaAFBj16P4QgQIFAXEPS6lZMECBCIFhD06PUYjgABAnUBQa9bOUmAAIFoAUGPXo/hCBAgUBcQ9LqVkwQIEIgWEPTo9RiOAAECdQFBr1s5SYAAgWgBQY9ej+EIECBQFxD0upWTBAgQiBYQ9Oj1GI4AAQJ1AUGvWzlJgACBaAFBj16P4QgQIFAXEPS6lZMECBCIFhD06PUYjgABAnUBQa9bOUmAAIFoAUGPXo/hCBAgUBcQ9LqVkwQIEIgWEPTo9RiOAAECdQFBr1s5SYAAgWgBQY9ej+EIECBQFxD0upWTBAgQiBYQ9Oj1GI4AAQJ1AUGvWzlJgACBaAFBj16P4QgQIFAXEPS6lZMECBCIFhD06PUYjgABAnUBQa9bOUmAAIFoAUGPXo/hCBAgUBcQ9LqVkwQIEIgWEPTo9RiOAAECdQFBr1s5SYAAgWgBQY9ej+EIECBQFxD0upWTBAgQiBYQ9Oj1GI4AAQJ1AUGvWzlJgACBaAFBj16P4QgQIFAXEPS6lZMECBCIFhD06PUYjgABAnUBQa9bOUmAAIFoAUGPXo/hCBAgUBcQ9LqVkwQIEIgWEPTo9RiOAAECdQFBr1s5SYAAgWgBQY9ej+EIECBQFxD0upWTBAgQiBYQ9Oj1GI4AAQJ1gS8/fn6rn3aSAAECBGIF/IUeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegKC3vNymgABArECgh67GoMRIECgJyDoPS+nCRAgECsg6LGrMRgBAgR6AoLe83KaAAECsQKCHrsagxEgQKAnIOg9L6cJECAQKyDosasxGAECBHoCgt7zcpoAAQKxAoIeuxqDESBAoCcg6D0vpwkQIBArIOixqzEYAQIEegL/AOA0HzyxH7A9AAAAAElFTkSuQmCC"
                        })]
                    })]
                }))
            }

            function zn(n) {
                return (0, i.jsx)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 19 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: (0, i.jsx)("path", {
                        d: "M13.8 6.61h.8a3.2 3.2 0 110 6.4h-.8M1 6.61h12.8v7.2a3.2 3.2 0 01-3.2 3.2H4.2a3.2 3.2 0 01-3.2-3.2v-7.2zM4.2 1.01v2.4M7.4 1.01v2.4M10.6 1.01v2.4",
                        stroke: "#6954B8",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }

            function Xn(n) {
                return (0, i.jsx)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: (0, i.jsx)("path", {
                        d: "M1 6.844h14.222M1 12.177h14.222M6.333 1.51l-1.777 16M11.667 1.51l-1.778 16",
                        stroke: "#6954B8",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }

            function Wn(n) {
                return (0, i.jsx)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 17 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: (0, i.jsx)("path", {
                        d: "M13.8 2.61H2.6A1.6 1.6 0 001 4.21v11.2a1.6 1.6 0 001.6 1.6h11.2a1.6 1.6 0 001.6-1.6V4.21a1.6 1.6 0 00-1.6-1.6zM11.4 1.01v3.2M5 1.01v3.2M1 7.41h14.4",
                        stroke: "#6954B8",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }

            function qn(n) {
                return (0, i.jsxs)("svg", (0, p.Z)((0, I.Z)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), {
                    children: [(0, i.jsx)("path", {
                        d: "M9 17.01a8 8 0 100-16 8 8 0 000 16z",
                        stroke: "#6954B8",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, i.jsx)("path", {
                        d: "M6.672 6.61a2.4 2.4 0 014.664.8c0 1.6-2.4 2.4-2.4 2.4M9 13.01h.008",
                        stroke: "#6954B8",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }))
            }
            var Vn = Fn()().publicRuntimeConfig;

            function $n() {
                var n = (0, o.$G)("homepage").t,
                    A = [{
                        icon: (0, i.jsx)(zn, {}),
                        title: n("community_announcements"),
                        url: "https://x.com/taikainetwork",
                        external: !0
                    }, {
                        icon: (0, i.jsx)(Xn, {}),
                        title: n("community_hackers_chat"),
                        url: Vn.discordUrl,
                        external: !0
                    }, {
                        icon: (0, i.jsx)(Wn, {}),
                        title: n("community_events"),
                        url: "/hackathons"
                    }, {
                        icon: (0, i.jsx)(qn, {}),
                        title: n("community_support"),
                        url: "/support"
                    }],
                    e = [{
                        avatar: (0, i.jsx)(Nn, {}),
                        user: "Steve",
                        date: "9:18 AM",
                        message: "Hey oh! \ud83d\udc4b",
                        color: D.O9.orange700
                    }, {
                        avatar: (0, i.jsx)(Yn, {}),
                        user: "Jane",
                        date: "9:19 AM",
                        message: "What is the best way to create an ERC-20 Token?",
                        color: D.O9.paleBlue600
                    }, {
                        avatar: (0, i.jsx)(Jn, {}),
                        user: "Louis",
                        date: "9:22 AM",
                        message: "Have you tried dappKit yet?",
                        color: D.O9.oracle600
                    }, {
                        avatar: (0, i.jsx)(Tn, {}),
                        user: "Diana",
                        date: "9:30 AM",
                        message: "I\u2019ve used it, and it\u2019s the best \ud83d\udd25",
                        color: D.O9.green600
                    }];
                return (0, i.jsx)(h.Z, {
                    children: (0, i.jsxs)(Zn, {
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)("h2", {
                                children: n("community_title")
                            }), (0, i.jsx)("p", {
                                children: n("community_description")
                            }), (0, i.jsx)(s.ZP, {
                                variant: "solid",
                                color: "purple500",
                                icon: "caret-right",
                                iconPosition: "right",
                                url: Vn.discordUrl,
                                value: n("community_button"),
                                blank: !0
                            })]
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsxs)(_n, {
                                children: [(0, i.jsx)("div", {
                                    className: "sidebar",
                                    children: A.map((function(n, A) {
                                        return (0, i.jsx)(B(), {
                                            href: n.url,
                                            children: n.external ? (0, i.jsxs)("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [n.icon, (0, i.jsx)("span", {
                                                    children: n.title
                                                })]
                                            }) : (0, i.jsxs)("a", {
                                                children: [n.icon, (0, i.jsx)("span", {
                                                    children: n.title
                                                })]
                                            })
                                        }, A)
                                    }))
                                }), (0, i.jsxs)("div", {
                                    className: "chat",
                                    children: [(0, i.jsxs)("div", {
                                        className: "heading",
                                        children: [(0, i.jsx)("svg", {
                                            width: "1em",
                                            height: "1em",
                                            viewBox: "0 0 16 19",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, i.jsx)("path", {
                                                d: "M1 6.844h14.222M1 12.177h14.222M6.333 1.51l-1.777 16M11.667 1.51l-1.778 16",
                                                stroke: D.O9.purple300,
                                                strokeWidth: 1.5,
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        }), (0, i.jsx)("span", {
                                            children: "Developer Chat"
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "messages",
                                        children: e.map((function(A, e) {
                                            return (0, i.jsxs)(Mn, {
                                                color: A.color,
                                                children: [(0, i.jsx)("div", {
                                                    className: "avatar",
                                                    children: A.avatar
                                                }), (0, i.jsxs)("div", {
                                                    className: "content",
                                                    children: [(0, i.jsxs)("div", {
                                                        children: [(0, i.jsx)("span", {
                                                            className: "user",
                                                            children: A.user
                                                        }), (0, i.jsx)("span", {
                                                            className: "date",
                                                            children: "".concat(n("community_chat_today_at"), " ").concat(A.date)
                                                        })]
                                                    }), (0, i.jsx)("span", {
                                                        className: "message",
                                                        children: A.message
                                                    })]
                                                })]
                                            }, e)
                                        }))
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
            var nA = e(90739),
                AA = e(93647),
                eA = e(76602),
                iA = e(28052),
                tA = e(91662),
                oA = e(88986),
                gA = e(53903),
                rA = Fn()().publicRuntimeConfig;

            function aA(n) {
                var A = n.isActive,
                    e = n.onClose,
                    t = (0, oA.Z)(),
                    g = (0, iA.VY)(),
                    r = (0, o.$G)(["homepage", "alert-messages"]),
                    a = r.t,
                    C = r.i18n.language,
                    B = void 0 === C ? "en" : C,
                    c = rA.internalForms[B].gardenWaitlistFormId;
                return (0, i.jsx)(s.VF, {
                    isShowing: A,
                    hide: function() {
                        e()
                    },
                    title: a("homepage:taikai_garden_waitlist_form_title"),
                    footerHidden: !0,
                    children: (0, i.jsx)(tA.Z, {
                        id: c,
                        userData: t,
                        onSubmitForm: function(n) {
                            n && n.id ? (g.success(a("homepage:taikai_garden_waitlist_form_success")), gA.Z.pushEvent("homepage:garden_waitlist_submission"), e()) : g.error(a("alert-messages:an_error_happened"))
                        },
                        onCancel: function() {
                            e()
                        }
                    })
                })
            }
            var sA = e(46765),
                CA = e.n(sA);

            function BA() {
                var n = (0, t.useState)(!1),
                    A = n[0],
                    e = n[1],
                    g = (0, o.$G)("homepage").t;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        id: "garden-whitepaper",
                        className: CA().wrapper,
                        children: (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(eA.r0, {}), (0, i.jsx)("h2", {
                                children: g("taikai_garden_title")
                            }), (0, i.jsx)("p", {
                                children: g("taikai_garden_description_1")
                            }), (0, i.jsx)("p", {
                                children: g("taikai_garden_description_2")
                            }), (0, i.jsxs)("div", {
                                className: CA().cta,
                                children: [(0, i.jsx)(s.zx, {
                                    variant: "solid",
                                    color: "purple500",
                                    value: g("taikai_garden_button_waitlist"),
                                    icon: "caret-right",
                                    iconPosition: "right",
                                    action: function() {
                                        gA.Z.pushEvent("garden_waitlist_click", {
                                            origin: "home-garden-section"
                                        }), e(!0)
                                    }
                                }), (0, i.jsx)(s.ZP, {
                                    variant: "outline",
                                    color: "white",
                                    url: "/garden-whitepaper",
                                    value: g("taikai_garden_button_whitepaper"),
                                    icon: "caret-right",
                                    iconPosition: "right",
                                    action: function() {
                                        gA.Z.pushEvent("garden_whitepaper_click", {
                                            origin: "home-garden-section"
                                        })
                                    },
                                    blank: !0
                                })]
                            })]
                        })
                    }), A && (0, i.jsx)(aA, {
                        isActive: A,
                        onClose: function() {
                            e(!1)
                        }
                    })]
                })
            }
            var cA = !0,
                lA = (0, o.Zh)("homepage")((function(n) {
                    var A = n.userData,
                        e = n.challenges,
                        t = void 0 === e ? [] : e,
                        r = n.stories,
                        a = void 0 === r ? [] : r,
                        s = n.tkaiPrice,
                        C = (0, o.$G)(["homepage", "alert-messages"]).t;
                    return (0, i.jsxs)(g.Z, {
                        pageUrl: "",
                        fullTitle: C("page_title"),
                        description: C("page_description"),
                        user: A,
                        children: [(0, i.jsx)(Z, {
                            tkaiPrice: s
                        }), (0, i.jsx)(BA, {}), (0, i.jsx)(N, {}), (0, i.jsx)(Bn, {
                            challenges: t
                        }), (0, i.jsx)(dn, {}), (0, i.jsx)(Qn.Z, {}), (0, i.jsx)(hn.Z, {}), (0, i.jsx)(yn, {
                            stories: a
                        }), (0, i.jsx)($n, {}), (0, i.jsx)(nA.Z, {
                            button: C("request_demo_get_started_button")
                        }), (0, i.jsx)(AA.Z, {})]
                    })
                }))
        },
        46765: function(n) {
            n.exports = {
                wrapper: "styles_wrapper__9AY5g",
                cta: "styles_cta__sy2Do"
            }
        },
        82081: function(n) {
            n.exports = {
                wrapper: "styles_wrapper__lIEtH",
                price: "styles_price__mFznI",
                ticker_tag: "styles_ticker_tag__9XY2M",
                negative: "styles_negative__q_rlq"
            }
        }
    },
    function(n) {
        n.O(0, [806, 3714, 7409, 707, 2835, 8383, 8764, 8019, 4179, 3319, 4979, 6652, 8966, 5675, 445, 5993, 4572, 1645, 4737, 434, 9718, 4313, 1712, 792, 9774, 2888, 179], (function() {
            return A = 48312, n(n.s = A);
            var A
        }));
        var A = n.O();
        _N_E = A
    }
]);