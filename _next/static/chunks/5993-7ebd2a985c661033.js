"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5993], {
        42469: function(e, t, n) {
            var i = n(7297),
                a = n(85893),
                o = n(67294),
                s = n(45697),
                l = n.n(s),
                r = n(52015),
                c = n(11752),
                p = n.n(c),
                u = n(61149),
                d = n(67270),
                g = n(56630),
                m = n(53903);

            function v() {
                var e = (0, i.Z)(["\n      max-height: 100vh;\n      overflow: hidden;\n    "]);
                return v = function() {
                    return e
                }, e
            }

            function _() {
                var e = (0, i.Z)(["\n  ", "\n"]);
                return _ = function() {
                    return e
                }, e
            }
            var h = r.ZP.div.withConfig({
                    componentId: "sc-f665c30b-0"
                })(_(), (function(e) {
                    return e.disableScroll && (0, r.iv)(v())
                })),
                y = p()().publicRuntimeConfig,
                f = function(e) {
                    var t = e.disableScroll,
                        n = void 0 !== t && t,
                        i = e.disableAnalytics,
                        s = void 0 !== i && i,
                        l = (0, o.useContext)(d.v),
                        r = (0, g.$G)().i18n,
                        c = (0, u.o)(),
                        p = (c.boot, c.update),
                        v = r.language,
                        _ = (null !== l && void 0 !== l ? l : {}).isLoggedIn,
                        f = void 0 !== _ && _;
                    s ? m.Z.disable(!0) : m.Z.init(f ? l.me : null, {
                        debug: y.debug
                    });
                    var b = window.location.pathname;
                    return (0, o.useEffect)((function() {
                        m.Z.pageview(window.location.pathname),
                            function(e, t, n) {
                                if (y.intercomEnabled) {
                                    var i = t.isLoggedIn,
                                        a = void 0 !== i && i,
                                        o = t.me,
                                        s = void 0 === o ? {} : o,
                                        l = {
                                            language_override: n
                                        };
                                    a && (window.intercomSettings = {
                                        user: s.username,
                                        name: s.fullName,
                                        email: s.email,
                                        created_at: s.createdAt,
                                        frontendUrl: y.frontendUrl
                                    }), e(l)
                                }
                            }(p, l, v)
                    }), [b, p, l, v]), (0, a.jsx)(h, {
                        disableScroll: n,
                        children: e.children
                    })
                };
            f.propTypes = {
                children: l().node,
                userData: l().object,
                disableAnalytics: l().bool
            }, t.Z = f
        },
        57151: function(e, t, n) {
            var i = n(85893),
                a = (n(67294), n(9008)),
                o = n.n(a),
                s = n(45697),
                l = n.n(s),
                r = n(11752),
                c = n.n(r),
                p = n(31838),
                u = n(56630),
                d = c()().publicRuntimeConfig,
                g = function(e) {
                    var t = e.noindex,
                        n = e.title,
                        a = e.fullTitle,
                        s = e.pageUrl,
                        l = e.canonicalUrl,
                        r = e.canonicalPath,
                        c = (e.disableAnalytics, e.description),
                        g = e.keywords,
                        m = e.twitterSite,
                        v = e.twitterDescription,
                        _ = e.twitterCard,
                        h = e.twitterImage,
                        y = e.openGraphDescription,
                        f = e.openGraphImage,
                        b = e.openGraphLocale,
                        w = e.openGraphType,
                        k = e.author,
                        x = (0, u.$G)("common").t,
                        j = a || n && "".concat(n, " @ ").concat(x("site_title")) || x("site_title");
                    return (0, i.jsxs)(o(), {
                        children: [(0, i.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "ie=edge"
                        }), "true" === d.analyticsEnabled && (0, i.jsx)("meta", {
                            name: "google-site-verification",
                            content: p.site.googleVerification
                        }), (0, i.jsx)("title", {
                            children: j
                        }), (0, i.jsx)("meta", {
                            name: "author",
                            content: k || p.seo.author
                        }), t && (0, i.jsx)("meta", {
                            name: "robots",
                            content: "noindex, nofollow"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: c || x("description")
                        }, "description"), (0, i.jsx)("meta", {
                            name: "keywords",
                            content: g || p.seo.keywords
                        }, "keywords"), (0, i.jsx)("meta", {
                            name: "twitter:card",
                            content: _ || p.seo.twitter.cardType
                        }, "twitter:card"), (0, i.jsx)("meta", {
                            name: "twitter:site",
                            content: m || p.seo.twitter.handle
                        }, "twitter:site"), (0, i.jsx)("meta", {
                            name: "twitter:description",
                            content: v || c || x("description")
                        }, "twitter:description"), (0, i.jsx)("meta", {
                            name: "twitter:title",
                            content: j || p.site.title
                        }, "twitter:title"), (0, i.jsx)("meta", {
                            name: "twitter:image",
                            content: h || p.seo.openGraph.image
                        }, "twitter:image"), (0, i.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(d.frontendUrl).concat(s)
                        }, "og:url"), (0, i.jsx)("meta", {
                            property: "og:type",
                            content: w || p.seo.openGraph.type
                        }, "og:type"), (0, i.jsx)("meta", {
                            property: "og:title",
                            content: j || p.seo.openGraph.title
                        }, "og:title"), (0, i.jsx)("meta", {
                            property: "og:description",
                            content: y || c || x("description")
                        }, "og:description"), (0, i.jsx)("meta", {
                            property: "og:image",
                            content: f || p.seo.openGraph.image
                        }, "og:image"), (0, i.jsx)("meta", {
                            property: "og:locale",
                            content: b || p.seo.openGraph.locale
                        }, "og:locale"), (0, i.jsx)("link", {
                            rel: "manifest",
                            href: "/static/manifest.json"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico",
                            sizes: "any"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/icon.svg",
                            type: "image/svg+xml"
                        }), (0, i.jsx)("link", {
                            rel: "apple-touch-icon",
                            href: "/apple-touch-icon.png"
                        }), (0, i.jsx)("link", {
                            rel: "manifest",
                            href: "/manifest.webmanifest"
                        }), l && !r && (0, i.jsx)("link", {
                            rel: "canonical",
                            href: l
                        }), r && (0, i.jsx)("link", {
                            rel: "canonical",
                            href: "".concat(d.frontendUrl).concat(r)
                        }), (0, i.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(p.seo.organizationLDATA)
                            }
                        })]
                    })
                };
            g.defaultProps = {
                noindex: !1
            }, g.propTypes = {
                noindex: l().bool,
                title: l().string,
                fullTitle: l().string,
                pageUrl: l().string,
                canonicalUrl: l().string,
                canonicalPath: l().string,
                disableAnalytics: l().bool,
                description: l().string,
                keywords: l().string,
                twitterSite: l().string,
                twitterDescription: l().string,
                twitterCard: l().string,
                twitterImage: l().string,
                openGraphDescription: l().string,
                openGraphImage: l().string,
                openGraphLocale: l().string,
                openGraphType: l().string,
                author: l().string
            }, t.Z = g
        },
        53903: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var i = n(51438),
                a = n(52951),
                o = n(14924),
                s = n(26042),
                l = n(1785),
                r = n.n(l),
                c = n(11752),
                p = n.n(c),
                u = n(31838),
                d = {
                    events: {
                        confirm_account: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "confirm_account"
                                }
                            }]
                        },
                        login_with_email: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "login_with_email"
                                }
                            }]
                        },
                        signup_with_email: {
                            destinations: [{
                                type: "gtm",
                                value: {
                                    event: "signup_with_email"
                                }
                            }, {
                                type: "ga4",
                                value: {
                                    eventName: "signup_with_email"
                                }
                            }]
                        },
                        create_project: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "create_project"
                                }
                            }, {
                                type: "gtm",
                                value: {
                                    event: "create_project"
                                }
                            }]
                        },
                        join_challenge_click: {
                            destinations: [{
                                type: "gtm",
                                value: {
                                    event: "join_challenge_click"
                                }
                            }]
                        },
                        file_download: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "file_download"
                                }
                            }]
                        },
                        login_to_join_challenge_click: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "login_to_join_challenge_click"
                                }
                            }, {
                                type: "gtm",
                                value: {
                                    event: "login_to_join_challenge_click"
                                }
                            }, {
                                type: "mixpanel"
                            }]
                        },
                        join_challenge_submission: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "join_challenge_submission"
                                }
                            }, {
                                type: "gtm",
                                value: {
                                    event: "join_challenge_submission"
                                }
                            }]
                        },
                        launch_challenge_click: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "launch_challenge_click"
                                }
                            }, {
                                type: "mixpanel"
                            }]
                        },
                        request_demo_click: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "request_demo_click"
                                }
                            }, {
                                type: "mixpanel"
                            }]
                        },
                        launch_challenge_submission: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "launch_challenge_submission"
                                }
                            }, {
                                type: "gtm",
                                value: {
                                    event: "launch_challenge_submission"
                                }
                            }, {
                                type: "mixpanel"
                            }]
                        },
                        request_demo_submission: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "request_demo_submission"
                                }
                            }, {
                                type: "gtm",
                                value: {
                                    event: "request_demo_submission"
                                }
                            }, {
                                type: "mixpanel"
                            }]
                        },
                        contact_mentor: {
                            destinations: [{
                                type: "mixpanel"
                            }]
                        },
                        updated_notification_settings: {
                            destinations: [{
                                type: "mixpanel"
                            }]
                        },
                        updated_privacy_settings: {
                            destinations: [{
                                type: "mixpanel"
                            }]
                        },
                        updated_user_locale: {
                            destinations: [{
                                type: "mixpanel"
                            }]
                        },
                        login_click: {
                            destinations: [{
                                type: "mixpanel"
                            }]
                        },
                        subscribe_newsletter: {
                            destinations: [{
                                type: "mixpanel"
                            }, {
                                type: "ga4",
                                value: {
                                    eventName: "subscribe_newsletter"
                                }
                            }]
                        },
                        share_user_profile: {
                            destinations: [{
                                type: "mixpanel"
                            }, {
                                type: "ga4",
                                value: {
                                    eventName: "share_user_profile"
                                }
                            }]
                        },
                        share_project: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "share_project"
                                }
                            }, {
                                type: "mixpanel"
                            }]
                        },
                        share_story: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "share_story"
                                }
                            }]
                        },
                        hackathon_platform_benchmark_request: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "hackathon_platform_benchmark_request"
                                }
                            }, {
                                type: "gtm",
                                value: {
                                    event: "hackathon_platform_benchmark_request"
                                }
                            }]
                        },
                        update_challenge_submission: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "update_challenge_submission"
                                }
                            }]
                        },
                        request_custom_solution_click: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "request_custom_solution_click"
                                }
                            }]
                        },
                        request_sponsorship_click: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "request_sponsorship_click"
                                }
                            }]
                        },
                        feedback_program_submited: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "feedback_program_submited"
                                }
                            }]
                        },
                        feedback_program_skipped: {
                            destinations: [{
                                type: "ga4",
                                value: {
                                    eventName: "feedback_program_skipped"
                                }
                            }]
                        }
                    }
                },
                g = n(8891),
                m = n.n(g),
                v = n(44304),
                _ = n(74054),
                h = n(30452),
                y = p()().publicRuntimeConfig,
                f = new(function() {
                    function e() {
                        (0, i.Z)(this, e), (0, o.Z)(this, "disabled", !1)
                    }
                    return (0, a.Z)(e, [{
                        key: "init",
                        value: function(e, t) {
                            this.user = {
                                id: null === e || void 0 === e ? void 0 : e.id,
                                city: null === e || void 0 === e ? void 0 : e.city,
                                gender: null === e || void 0 === e ? void 0 : e.gender,
                                country: null === e || void 0 === e ? void 0 : e.country
                            }, y.analyticsEnabled && !window.GA_INITIALIZED && (window.GA_INITIALIZED = !0, r().initialize({
                                gtmId: u.analytics.TagManagerProperty,
                                dataLayer: {
                                    userId: e && e.id
                                }
                            }), m().init(y.mixPanelToken, {
                                api_host: "https://api-eu.mixpanel.com",
                                batch_requests: !0
                            }), e && e.id && m().identify(e.id), window.MIX_PANEL_INITIALIZED = !0), this.debug = t.debug
                        }
                    }, {
                        key: "pushEvent",
                        value: function(e, t) {
                            var n = d.events;
                            if (this.disabled) console.error("Analytics disabled");
                            else if (e in n) {
                                var i = n[e],
                                    a = !0,
                                    o = !1,
                                    s = void 0;
                                try {
                                    for (var l, r = i.destinations[Symbol.iterator](); !(a = (l = r.next()).done); a = !0) {
                                        var c = l.value;
                                        switch (c.type) {
                                            case "gtm":
                                                this.pushGTMEvent(c.value);
                                                break;
                                            case "ga4":
                                                this.pushGA4Event(c.value.eventName, t);
                                                break;
                                            default:
                                                this.pushMixPanelEvent(e, t)
                                        }
                                    }
                                } catch (p) {
                                    o = !0, s = p
                                } finally {
                                    try {
                                        a || null == r.return || r.return()
                                    } finally {
                                        if (o) throw s
                                    }
                                }
                            } else console.error("Unrecognized event", e)
                        }
                    }, {
                        key: "pushGA4Event",
                        value: function(e, t) {
                            y.analyticsEnabled && !this.disabled && (0, v.B)(e, (0, s.Z)({}, t, (null === this || void 0 === this ? void 0 : this.user) && {
                                userId: this.user.id,
                                gender: this.user.gender
                            }), y.googleAnalytics4Id)
                        }
                    }, {
                        key: "getMixpanelId",
                        value: function() {
                            return y.analyticsEnabled && window.MIX_PANEL_INITIALIZED ? m().get_distinct_id() : ""
                        }
                    }, {
                        key: "pushMixPanelEvent",
                        value: function(e, t) {
                            y.analyticsEnabled && window.MIX_PANEL_INITIALIZED && (m().track(e, t), this.debug && console.log("Pushing Event to Mixpanel ".concat(e, " ").concat(JSON.stringify(t))))
                        }
                    }, {
                        key: "pushGTMEvent",
                        value: function(e) {
                            y.analyticsEnabled && window && window.dataLayer && (this.debug && console.log("Pushing Event to Gogle Tag Manager ".concat(JSON.stringify(e))), window.dataLayer.push(e))
                        }
                    }, {
                        key: "pageview",
                        value: function(e) {
                            if (y.analyticsEnabled && !this.disabled) {
                                this.debug && console.log("Tracking a page View ".concat(e));
                                var t = {
                                    url: e
                                };
                                m().track("Page View", t), _.Z.send({
                                    url: e,
                                    error: " ",
                                    level: "info",
                                    eventName: h.V["PAGE-VIEW"],
                                    eventIndex: h.Z.BUSINESS_LOG
                                })
                            }
                        }
                    }, {
                        key: "disable",
                        value: function(e) {
                            this.disabled = e
                        }
                    }]), e
                }())
        }
    }
]);