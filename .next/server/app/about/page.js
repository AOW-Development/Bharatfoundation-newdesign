<<<<<<< HEAD
(() => {
  var e = {};
  (e.id = 220),
    (e.ids = [220]),
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
      84820: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => a.a,
            __next_app__: () => m,
            pages: () => c,
            routeModule: () => h,
            tree: () => d,
          });
        var n = t(70260),
          r = t(28203),
          i = t(25155),
          a = t.n(i),
          o = t(67292),
          l = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => o[e]);
        t.d(s, l);
        let d = [
            "",
            {
              children: [
                "about",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 7678)),
                        "D:\\Development\\bsf-sureshdesign\\app\\about\\page.tsx",
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
          c = ["D:\\Development\\bsf-sureshdesign\\app\\about\\page.tsx"],
          m = { require: t, loadChunk: () => Promise.resolve() },
          h = new n.AppPageRouteModule({
            definition: {
              kind: r.RouteKind.APP_PAGE,
              page: "/about/page",
              pathname: "/about",
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
      7678: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => l });
        var n = t(62740),
          r = t(51929),
          i = t(9879),
          a = t(35635),
          o = t(99580);
        function l() {
          return (0, n.jsxs)("main", {
            className: "min-h-screen flex flex-col",
            children: [
              (0, n.jsx)(r.default, {}),
              (0, n.jsx)(o.default, {
                mediaUrl: "/images/aboutusbanner.jpg",
                heading: " Welcome to Bharat Sports Foundation",
                paragraph:
                  " Your ultimate destination for everything related to physical   education and sports",
                buttons: [
                  { text: "Monthly Donation", link: "/monthly-donation" },
                  { text: "Onetime Donation", link: "/one-time-donation" },
                ],
              }),
              (0, n.jsx)("section", {
                id: "tutorials",
                className: "py-16",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className: "text-3xl font-bold mb-8",
                      children: "In-Depth Tutorials",
                    }),
                    (0, n.jsx)("div", {
                      className: "grid md:grid-cols-3 gap-6",
                      children: [
                        {
                          image: "/images/8deb2f7f40c999bf95e59c8d627037d7.png",
                          title: "Basketball Techniques",
                          description:
                            "Learn advanced basketball dribbling techniques with our expert coaches",
                        },
                        {
                          image: "/images/d2338b5fe7ec6b767a6f106bbcee1227.png",
                          title: "Yoga & Stretching",
                          description:
                            "Explore the benefits of yoga with our guided sessions for all levels",
                        },
                        {
                          image: "/images/e353b2fb29a64134a25fec74dc42d9ea.png",
                          title: "Weightlifting Mastery",
                          description:
                            "Master weightlifting techniques with our step-by-step tutorials",
                        },
                      ].map((e, s) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className:
                              "bg-[#16A34A] rounded-lg overflow-hidden",
                            children: [
                              (0, n.jsx)("div", {
                                className: "relative h-48",
                                children: (0, n.jsx)(a.default, {
                                  src: e.image || "/placeholder.svg",
                                  alt: e.title,
                                  fill: !0,
                                  className: "object-cover",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "p-4",
                                children: [
                                  (0, n.jsx)("h3", {
                                    className: "font-bold mb-2",
                                    children: e.title,
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "text-sm text-gray-700",
                                    children: e.description,
                                  }),
                                  (0, n.jsx)("button", {
                                    className:
                                      "mt-4 text-sm font-semibold hover:underline",
                                    children: "Learn More →",
                                  }),
                                ],
                              }),
                            ],
                          },
                          s
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                id: "insights",
                className: "py-16 bg-gray-50",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className: "text-3xl font-bold mb-8",
                      children: "Expert Insights",
                    }),
                    (0, n.jsxs)("div", {
                      className: "grid md:grid-cols-2 gap-8",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "bg-white p-6 rounded-lg shadow-sm",
                          children: [
                            (0, n.jsx)("div", {
                              className: "relative h-48 mb-4",
                              children: (0, n.jsx)(a.default, {
                                src: "/images/7f81588e93aba3fd3d23776442e41776.png",
                                alt: "Sports Psychology Session",
                                fill: !0,
                                className: "object-cover rounded-lg",
                              }),
                            }),
                            (0, n.jsx)("h3", {
                              className: "text-xl font-bold mb-2",
                              children: "Mental Toughness Training",
                            }),
                            (0, n.jsx)("p", {
                              className: "text-gray-600",
                              children:
                                "Gain mental toughness with insights from leading sports psychologists. Learn techniques to improve focus, handle pressure, and achieve peak performance.",
                            }),
                            (0, n.jsx)("button", {
                              className:
                                "mt-4 text-primary font-semibold hover:underline",
                              children: "Read More →",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "bg-white p-6 rounded-lg shadow-sm",
                          children: [
                            (0, n.jsx)("div", {
                              className: "relative h-48 mb-4",
                              children: (0, n.jsx)(a.default, {
                                src: "/images/2c007fc3bca4b03ab8ef4cda5c0afe43.png",
                                alt: "Nutrition Consultation",
                                fill: !0,
                                className: "object-cover rounded-lg",
                              }),
                            }),
                            (0, n.jsx)("h3", {
                              className: "text-xl font-bold mb-2",
                              children: "Sports Nutrition",
                            }),
                            (0, n.jsx)("p", {
                              className: "text-gray-600",
                              children:
                                "Optimize your performance with nutrition tips from top experts. Learn about meal planning, supplements, and hydration strategies.",
                            }),
                            (0, n.jsx)("button", {
                              className:
                                "mt-4 text-primary font-semibold hover:underline",
                              children: "Read More →",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                id: "events",
                className: "py-16",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className: "text-3xl font-bold mb-8",
                      children: "Live Events and Coverage",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "relative h-[400px] rounded-lg overflow-hidden",
                      children: [
                        (0, n.jsx)(a.default, {
                          src: "/images/03054f09bd5ab9ccfc33ab5051292b4a.png",
                          alt: "Live sports event",
                          fill: !0,
                          className: "object-cover",
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end",
                          children: (0, n.jsxs)("div", {
                            className: "p-8 text-white",
                            children: [
                              (0, n.jsx)("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: "Stay Connected with Live Sports",
                              }),
                              (0, n.jsx)("p", {
                                className: "text-lg mb-6",
                                children:
                                  "Stay updated with live coverage of our exciting sports events and competitions.",
                              }),
                              (0, n.jsx)("button", {
                                className:
                                  "bg-[#16A34A] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#98c889] transition-colors",
                                children: "View Events",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                id: "fitness",
                className: "py-16 bg-gray-50",
                children: (0, n.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, n.jsx)("h2", {
                      className: "text-3xl font-bold mb-8",
                      children: "Fitness and Wellness",
                    }),
                    (0, n.jsxs)("div", {
                      className: "grid md:grid-cols-2 gap-8",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "bg-gray-700 text-white rounded-lg overflow-hidden",
                          children: [
                            (0, n.jsx)("div", {
                              className: "relative h-64",
                              children: (0, n.jsx)(a.default, {
                                src: "/images/cc18f816d084b229fcdaba137ffc133d.png",
                                alt: "Outdoor fitness",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              className: "p-6",
                              children: [
                                (0, n.jsx)("h3", {
                                  className: "text-xl font-bold mb-4",
                                  children: "Outdoor Activities",
                                }),
                                (0, n.jsx)("p", {
                                  className: "mb-4",
                                  children:
                                    "Discover the best fitness trails and outdoor activities to stay fit and healthy.",
                                }),
                                (0, n.jsx)("button", {
                                  className:
                                    "text-[#16A34A] font-semibold hover:underline",
                                  children: "Find Trails →",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "bg-gray-700 text-white rounded-lg overflow-hidden",
                          children: [
                            (0, n.jsx)("div", {
                              className: "relative h-64",
                              children: (0, n.jsx)(a.default, {
                                src: "/images/9d57ec65f82d82559b352a3f1444c250.png",
                                alt: "Group fitness",
                                fill: !0,
                                className: "object-cover",
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              className: "p-6",
                              children: [
                                (0, n.jsx)("h3", {
                                  className: "text-xl font-bold mb-4",
                                  children: "Community Classes",
                                }),
                                (0, n.jsx)("p", {
                                  className: "mb-4",
                                  children:
                                    "Join our community fitness classes designed for all skill levels.",
                                }),
                                (0, n.jsx)("button", {
                                  className:
                                    "text-[#16A34A] font-semibold hover:underline",
                                  children: "Join Classes →",
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
              (0, n.jsx)(i.default, {}),
            ],
          });
        }
      },
      99580: (e, s, t) => {
        "use strict";
        t.d(s, { default: () => n });
        let n = (0, t(46760).registerClientReference)(
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
        t.d(s, { default: () => n });
        let n = (0, t(46760).registerClientReference)(
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
        t.d(s, { default: () => n });
        let n = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"D:\\\\Development\\\\bsf-sureshdesign\\\\components\\\\header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "D:\\Development\\bsf-sureshdesign\\components\\header.tsx",
          "default"
        );
      },
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    n = s.X(0, [638, 776, 392, 635, 746], () => t(84820));
  module.exports = n;
})();
=======
const CHUNK_PUBLIC_PATH = "server/app/about/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_97f32f._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__592060._.js");
runtime.loadChunk("server/chunks/ssr/app_db13a2._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__b7ebd6._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__0f700d._.css");
runtime.loadChunk("server/chunks/ssr/node_modules_ce97a5._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_client_components_forbidden-error_b4e556.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_client_components_unauthorized-error_d758e6.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_9e657d._.js");
runtime.loadChunk("server/chunks/ssr/_127f12._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/about/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/about/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/about/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
>>>>>>> 300a0e3efcacdf75cfa6c7d0da43e94fff22ea15
