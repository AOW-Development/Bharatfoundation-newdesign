<<<<<<< HEAD
(() => {
  var e = {};
  (e.id = 687),
    (e.ids = [687]),
    (e.modules = {
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      19121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      33873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      79551: (e) => {
        "use strict";
        e.exports = require("url");
      },
      2798: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => o.a,
            __next_app__: () => m,
            pages: () => c,
            routeModule: () => p,
            tree: () => d,
          });
        var r = t(70260),
          a = t(28203),
          n = t(25155),
          o = t.n(n),
          i = t(67292),
          l = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => i[e]);
        t.d(s, l);
        let d = [
            "",
            {
              children: [
                "our-work",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 60007)),
                        "D:\\Development\\bsf-sureshdesign\\app\\our-work\\page.tsx",
                      ],
                    },
                  ],
                },
                {
                  metadata: {
                    icon: [
                      async (e) =>
                        (
                          await Promise.resolve().then(t.bind(t, 46055))
                        ).default(e),
                    ],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 19611)),
                "D:\\Development\\bsf-sureshdesign\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.t.bind(t, 19937, 23)),
                "next/dist/client/components/not-found-error",
              ],
              forbidden: [
                () => Promise.resolve().then(t.t.bind(t, 69116, 23)),
                "next/dist/client/components/forbidden-error",
              ],
              unauthorized: [
                () => Promise.resolve().then(t.t.bind(t, 41485, 23)),
                "next/dist/client/components/unauthorized-error",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(t.bind(t, 46055))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          c = ["D:\\Development\\bsf-sureshdesign\\app\\our-work\\page.tsx"],
          m = { require: t, loadChunk: () => Promise.resolve() },
          p = new r.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/our-work/page",
              pathname: "/our-work",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      81407: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 99580)),
          Promise.resolve().then(t.bind(t, 9879)),
          Promise.resolve().then(t.bind(t, 51929)),
          Promise.resolve().then(t.t.bind(t, 71066, 23));
      },
      75831: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 23320)),
          Promise.resolve().then(t.bind(t, 26283)),
          Promise.resolve().then(t.bind(t, 39701)),
          Promise.resolve().then(t.t.bind(t, 41902, 23));
      },
      60007: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => c });
        var r = t(62740),
          a = t(51929),
          n = t(9879),
          o = t(35635),
          i = t(38537),
          l = t(19935),
          d = t(99580);
        function c() {
          return (0, r.jsxs)("main", {
            className: "min-h-screen flex flex-col",
            children: [
              (0, r.jsx)(a.default, {}),
              (0, r.jsx)(d.default, {
                mediaUrl: "/images/ourworkbanner.webp",
                heading: " Welcome to Bharat Sports Foundation",
                paragraph:
                  " Your ultimate destination for everything related to physical   education and sports",
              }),
              (0, r.jsx)("section", {
                id: "grants",
                className: "py-16 bg-gray-50 scroll-mt-20",
                children: (0, r.jsx)("div", {
                  className: "container mx-auto px-4",
                  children: (0, r.jsxs)("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                      (0, r.jsx)("h2", {
                        className: "text-3xl font-bold mb-6",
                        children: "Grants",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-lg text-gray-600 mb-8",
                        children:
                          "We offer several grants to support talented athletes in their journey. Apply today to get the support you need.",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: [
                          (0, r.jsx)(i.$, {
                            className:
                              "bg-[#16A34A] text-black hover:bg-[#98c889]",
                            children: "Apply Now",
                          }),
                          (0, r.jsx)(i.$, {
                            variant: "outline",
                            children: "Learn More",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("section", {
                id: "initiatives",
                className: "py-16 scroll-mt-20",
                children: (0, r.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "text-3xl font-bold text-center mb-12",
                      children: "Simply Periods, Roots, Smiles",
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid md:grid-cols-3 gap-8",
                      children: [
                        (0, r.jsxs)(l.Zp, {
                          className: "overflow-hidden",
                          children: [
                            (0, r.jsx)("div", {
                              className: "relative h-48",
                              children: (0, r.jsx)(o.default, {
                                src: "/images/a352d9d50f6ec0297ab6b9ff466f1ae7.png",
                                alt: "Girls in classroom learning about menstrual health",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, r.jsxs)(l.Wu, {
                              className: "p-6",
                              children: [
                                (0, r.jsx)("h3", {
                                  className: "text-xl font-bold mb-2",
                                  children: "Simply Periods",
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-gray-600",
                                  children:
                                    "Educating young girls about menstrual health and hygiene.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)(l.Zp, {
                          className: "overflow-hidden",
                          children: [
                            (0, r.jsx)("div", {
                              className: "relative h-48",
                              children: (0, r.jsx)(o.default, {
                                src: "/images/881fd11f4e32051541024d1f749b9348.png",
                                alt: "People planting trees",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, r.jsxs)(l.Wu, {
                              className: "p-6",
                              children: [
                                (0, r.jsx)("h3", {
                                  className: "text-xl font-bold mb-2",
                                  children: "Roots",
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-gray-600",
                                  children:
                                    "Cultivating environmental awareness through tree planting drives.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)(l.Zp, {
                          className: "overflow-hidden",
                          children: [
                            (0, r.jsx)("div", {
                              className: "relative h-48",
                              children: (0, r.jsx)(o.default, {
                                src: "/images/c04c63db05ff0b2d71821c65cbb33397.png",
                                alt: "Happy children participating in sports",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, r.jsxs)(l.Wu, {
                              className: "p-6",
                              children: [
                                (0, r.jsx)("h3", {
                                  className: "text-xl font-bold mb-2",
                                  children: "Smiles",
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-gray-600",
                                  children:
                                    "Bringing joy to underprivileged children through sports and fun activities.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("section", {
                id: "impact",
                className: "py-16 bg-[#16A34A] scroll-mt-20",
                children: (0, r.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "text-3xl font-bold text-center mb-12",
                      children: "Impact",
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid md:grid-cols-3 gap-8",
                      children: [
                        (0, r.jsxs)(l.Zp, {
                          children: [
                            (0, r.jsx)("div", {
                              className: "relative h-48",
                              children: (0, r.jsx)(o.default, {
                                src: "/images/5344c1f894031da92a2f60f9086a33601.png",
                                alt: "Athletes running",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, r.jsx)(l.Wu, {
                              className: "p-6",
                              children: (0, r.jsx)("p", {
                                className: "font-bold",
                                children:
                                  "Our athletes have won over 100 medals in national competitions.",
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(l.Zp, {
                          children: [
                            (0, r.jsx)("div", {
                              className: "relative h-48",
                              children: (0, r.jsx)(o.default, {
                                src: "/images/ddceedefb3e6d9cf35fee9a3e57db879.png",
                                alt: "Youth sports program",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, r.jsx)(l.Wu, {
                              className: "p-6",
                              children: (0, r.jsx)("p", {
                                className: "font-bold",
                                children:
                                  "We have impacted over 10,000 youth through our community programs.",
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(l.Zp, {
                          children: [
                            (0, r.jsx)("div", {
                              className: "relative h-48",
                              children: (0, r.jsx)(o.default, {
                                src: "/images/b03b7c43e5128f277e02711417f55502.png",
                                alt: "Women athletes training",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, r.jsx)(l.Wu, {
                              className: "p-6",
                              children: (0, r.jsx)("p", {
                                className: "font-bold",
                                children:
                                  "Empowering women athletes with specialized training sessions.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("section", {
                id: "womens-report",
                className: "py-16 scroll-mt-20",
                children: (0, r.jsx)("div", {
                  className: "container mx-auto px-4",
                  children: (0, r.jsxs)("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                      (0, r.jsx)("h2", {
                        className: "text-3xl font-bold text-center mb-12",
                        children: "Women's Report",
                      }),
                      (0, r.jsxs)("div", {
                        className: "bg-gray-50 p-8 rounded-lg",
                        children: [
                          (0, r.jsx)("div", {
                            className: "relative h-[300px] mb-6",
                            children: (0, r.jsx)("div", {
                              className: "flex items-end justify-around h-full",
                              children: [60, 40, 80, 70, 50, 90].map((e, s) =>
                                (0, r.jsxs)(
                                  "div",
                                  {
                                    className: "flex flex-col items-center",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "w-16 bg-[#16A34A] rounded-t",
                                        style: { height: `${e}%` },
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "w-16 bg-[#98c889] rounded-t",
                                        style: {
                                          height: `${0.7 * e}%`,
                                          marginTop: "-4px",
                                        },
                                      }),
                                    ],
                                  },
                                  s
                                )
                              ),
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-center text-gray-600",
                            children:
                              "The report showcases the strides made in women's sports, highlighting key areas of growth and future goals.",
                          }),
                          (0, r.jsx)("div", {
                            className: "flex justify-center mt-8",
                            children: (0, r.jsx)(i.$, {
                              className:
                                "bg-[#16A34A] text-black hover:bg-[#98c889]",
                              children: "Download Full Report",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(n.default, {}),
            ],
          });
        }
      },
      99580: (e, s, t) => {
        "use strict";
        t.d(s, { default: () => r });
        let r = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"D:\\\\Development\\\\bsf-sureshdesign\\\\components\\\\banner.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "D:\\Development\\bsf-sureshdesign\\components\\banner.tsx",
          "default"
        );
      },
      9879: (e, s, t) => {
        "use strict";
        t.d(s, { default: () => r });
        let r = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"D:\\\\Development\\\\bsf-sureshdesign\\\\components\\\\footer.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "D:\\Development\\bsf-sureshdesign\\components\\footer.tsx",
          "default"
        );
      },
      51929: (e, s, t) => {
        "use strict";
        t.d(s, { default: () => r });
        let r = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"D:\\\\Development\\\\bsf-sureshdesign\\\\components\\\\header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "D:\\Development\\bsf-sureshdesign\\components\\header.tsx",
          "default"
        );
      },
      38537: (e, s, t) => {
        "use strict";
        t.d(s, { $: () => d });
        var r = t(62740),
          a = t(76301),
          n = t(15225),
          o = t(67699),
          i = t(55946);
        let l = (0, o.F)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            {
              variants: {
                variant: {
                  default:
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                  destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                  outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                  secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                  ghost: "hover:bg-accent hover:text-accent-foreground",
                  link: "text-primary underline-offset-4 hover:underline",
                },
                size: {
                  default: "h-9 px-4 py-2",
                  sm: "h-8 rounded-md px-3 text-xs",
                  lg: "h-10 rounded-md px-8",
                  icon: "h-9 w-9",
                },
              },
              defaultVariants: { variant: "default", size: "default" },
            }
          ),
          d = a.forwardRef(
            (
              { className: e, variant: s, size: t, asChild: a = !1, ...o },
              d
            ) => {
              let c = a ? n.DX : "button";
              return (0, r.jsx)(c, {
                className: (0, i.cn)(l({ variant: s, size: t, className: e })),
                ref: d,
                ...o,
              });
            }
          );
        d.displayName = "Button";
      },
      19935: (e, s, t) => {
        "use strict";
        t.d(s, { Wu: () => i, Zp: () => o });
        var r = t(62740),
          a = t(76301),
          n = t(55946);
        let o = a.forwardRef(({ className: e, ...s }, t) =>
          (0, r.jsx)("div", {
            ref: t,
            className: (0, n.cn)(
              "rounded-xl border bg-card text-card-foreground shadow",
              e
            ),
            ...s,
          })
        );
        (o.displayName = "Card"),
          (a.forwardRef(({ className: e, ...s }, t) =>
            (0, r.jsx)("div", {
              ref: t,
              className: (0, n.cn)("flex flex-col space-y-1.5 p-6", e),
              ...s,
            })
          ).displayName = "CardHeader"),
          (a.forwardRef(({ className: e, ...s }, t) =>
            (0, r.jsx)("h3", {
              ref: t,
              className: (0, n.cn)(
                "font-semibold leading-none tracking-tight",
                e
              ),
              ...s,
            })
          ).displayName = "CardTitle"),
          (a.forwardRef(({ className: e, ...s }, t) =>
            (0, r.jsx)("p", {
              ref: t,
              className: (0, n.cn)("text-sm text-muted-foreground", e),
              ...s,
            })
          ).displayName = "CardDescription");
        let i = a.forwardRef(({ className: e, ...s }, t) =>
          (0, r.jsx)("div", {
            ref: t,
            className: (0, n.cn)("p-6 pt-0", e),
            ...s,
          })
        );
        (i.displayName = "CardContent"),
          (a.forwardRef(({ className: e, ...s }, t) =>
            (0, r.jsx)("div", {
              ref: t,
              className: (0, n.cn)("flex items-center p-6 pt-0", e),
              ...s,
            })
          ).displayName = "CardFooter");
      },
      55946: (e, s, t) => {
        "use strict";
        t.d(s, { cn: () => n });
        var r = t(13673),
          a = t(47317);
        function n(...e) {
          return (0, a.QP)((0, r.$)(e));
        }
      },
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [638, 776, 392, 635, 391, 746], () => t(2798));
  module.exports = r;
})();
=======
const CHUNK_PUBLIC_PATH = "server/app/our-work/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_97f32f._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__592060._.js");
runtime.loadChunk("server/chunks/ssr/app_db13a2._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__b7ebd6._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__0f700d._.css");
runtime.loadChunk("server/chunks/ssr/node_modules_ce97a5._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_client_components_forbidden-error_b4e556.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_client_components_unauthorized-error_d758e6.js");
runtime.loadChunk("server/chunks/ssr/node_modules_58c203._.js");
runtime.loadChunk("server/chunks/ssr/_53df09._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/our-work/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/our-work/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/our-work/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
>>>>>>> 300a0e3efcacdf75cfa6c7d0da43e94fff22ea15
