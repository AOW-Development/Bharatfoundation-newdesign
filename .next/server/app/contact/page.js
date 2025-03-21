<<<<<<< HEAD
(() => {
  var e = {};
  (e.id = 977),
    (e.ids = [977]),
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
      86576: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => l.a,
            __next_app__: () => m,
            pages: () => c,
            routeModule: () => h,
            tree: () => d,
          });
        var r = t(70260),
          a = t(28203),
          n = t(25155),
          l = t.n(n),
          i = t(67292),
          o = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => i[e]);
        t.d(s, o);
        let d = [
            "",
            {
              children: [
                "contact",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 6531)),
                        "D:\\Development\\bsf-sureshdesign\\app\\contact\\page.tsx",
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
          c = ["D:\\Development\\bsf-sureshdesign\\app\\contact\\page.tsx"],
          m = { require: t, loadChunk: () => Promise.resolve() },
          h = new r.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/contact/page",
              pathname: "/contact",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      73745: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 6531));
      },
      64017: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 10583));
      },
      10583: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => x });
        var r = t(45512),
          a = t(39701),
          n = t(26283),
          l = t(89995),
          i = t(9472),
          o = t(25391),
          d = t(16639),
          c = t(34467),
          m = t(73456),
          h = t(58009),
          p = t(23320);
        function x() {
          let [e, s] = (0, h.useState)({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          return (0, r.jsxs)("main", {
            className: "min-h-screen flex flex-col",
            children: [
              (0, r.jsx)(a.default, {}),
              (0, r.jsx)(p.default, {
                imageUrl: "/images/contactusbanner.jpg",
                videoUrl: "/images/contactus-banner.mp4",
              }),
              (0, r.jsx)("section", {
                className: "md:px-64 md:py-32",
                children: (0, r.jsxs)("div", {
                  className: "container mx-auto px-4",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "grid md:grid-cols-2 gap-8",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "bg-white p-8 rounded-lg shadow-sm",
                          children: [
                            (0, r.jsx)("h2", {
                              className: "text-2xl font-bold mb-8",
                              children: "Contact Information",
                            }),
                            (0, r.jsxs)("div", {
                              className: "space-y-6",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex items-start gap-4",
                                  children: [
                                    (0, r.jsx)(l.A, {
                                      className: "w-6 h-6 mt-1",
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("h3", {
                                          className: "font-semibold mb-2",
                                          children: "Phone",
                                        }),
                                        (0, r.jsx)("p", {
                                          className: "text-gray-600",
                                          children: "+123 456 789 101",
                                        }),
                                        (0, r.jsx)("p", {
                                          className: "text-gray-600",
                                          children: "+321 101 987 654",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex items-start gap-4",
                                  children: [
                                    (0, r.jsx)(i.A, {
                                      className: "w-6 h-6 mt-1",
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("h3", {
                                          className: "font-semibold mb-2",
                                          children: "E-mail",
                                        }),
                                        (0, r.jsx)("p", {
                                          className: "text-gray-600",
                                          children: "sportsfoundation@ui",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex items-start gap-4",
                                  children: [
                                    (0, r.jsx)(o.A, {
                                      className: "w-6 h-6 mt-1",
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("h3", {
                                          className: "font-semibold mb-2",
                                          children: "Address",
                                        }),
                                        (0, r.jsx)("p", {
                                          className: "text-gray-600",
                                          children: "123 Sports Avenue",
                                        }),
                                        (0, r.jsx)("p", {
                                          className: "text-gray-600",
                                          children: "City, State, Zip Code",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex items-start gap-4",
                                  children: [
                                    (0, r.jsx)(d.A, {
                                      className: "w-6 h-6 mt-1",
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("h3", {
                                          className: "font-semibold mb-2",
                                          children: "Social Media",
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "flex gap-4",
                                          children: [
                                            (0, r.jsx)("a", {
                                              href: "#",
                                              className: "hover:text-gray-600",
                                              children: (0, r.jsx)(c.A, {
                                                className: "w-6 h-6",
                                              }),
                                            }),
                                            (0, r.jsx)("a", {
                                              href: "#",
                                              className: "hover:text-gray-600",
                                              children: (0, r.jsx)(m.A, {
                                                className: "w-6 h-6",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "bg-black text-white p-8 rounded-lg",
                          children: [
                            (0, r.jsx)("h2", {
                              className: "text-2xl font-bold mb-8",
                              children: "Send Us a Message",
                            }),
                            (0, r.jsxs)("form", {
                              onSubmit: (s) => {
                                s.preventDefault(), console.log(e);
                              },
                              className: "space-y-6",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "grid md:grid-cols-2 gap-6",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("label", {
                                          className: "block mb-2 text-sm",
                                          children: "First Name",
                                        }),
                                        (0, r.jsx)("input", {
                                          type: "text",
                                          value: e.firstName,
                                          onChange: (t) =>
                                            s({
                                              ...e,
                                              firstName: t.target.value,
                                            }),
                                          className:
                                            "w-full p-2 bg-transparent border-b border-white/30 focus:border-white outline-none",
                                          placeholder: "John",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("label", {
                                          className: "block mb-2 text-sm",
                                          children: "Last Name",
                                        }),
                                        (0, r.jsx)("input", {
                                          type: "text",
                                          value: e.lastName,
                                          onChange: (t) =>
                                            s({
                                              ...e,
                                              lastName: t.target.value,
                                            }),
                                          className:
                                            "w-full p-2 bg-transparent border-b border-white/30 focus:border-white outline-none",
                                          placeholder: "Doe",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "block mb-2 text-sm",
                                      children: "E-mail",
                                    }),
                                    (0, r.jsx)("input", {
                                      type: "email",
                                      value: e.email,
                                      onChange: (t) =>
                                        s({ ...e, email: t.target.value }),
                                      className:
                                        "w-full p-2 bg-transparent border-b border-white/30 focus:border-white outline-none",
                                      placeholder:
                                        "contact@sportsfoundation.com",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "block mb-2 text-sm",
                                      children: "Message",
                                    }),
                                    (0, r.jsx)("textarea", {
                                      value: e.message,
                                      onChange: (t) =>
                                        s({ ...e, message: t.target.value }),
                                      className:
                                        "w-full h-32 p-2 bg-transparent border-b border-white/30 focus:border-white outline-none resize-none",
                                      placeholder: "Enter your message here...",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("button", {
                                  type: "submit",
                                  className:
                                    "w-full bg-[#16A34A] text-black font-semibold py-3 rounded hover:bg-[#98c889] transition-colors",
                                  children: "Send >",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "mt-12 h-[400px] rounded-lg overflow-hidden",
                      children: (0, r.jsx)("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.1813836710974!2d12.568337776916292!3d55.67584097309432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen%2C%20Denmark!5e0!3m2!1sen!2sus!4v1708532943635!5m2!1sen!2sus",
                        width: "100%",
                        height: "100%",
                        style: { border: 0 },
                        allowFullScreen: !0,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(n.default, {}),
            ],
          });
        }
      },
      6531: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => r });
        let r = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"D:\\\\Development\\\\bsf-sureshdesign\\\\app\\\\contact\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "D:\\Development\\bsf-sureshdesign\\app\\contact\\page.tsx",
          "default"
        );
      },
      9472: (e, s, t) => {
        "use strict";
        t.d(s, { A: () => r });
        let r = (0, t(94825).A)("Mail", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
        ]);
      },
      25391: (e, s, t) => {
        "use strict";
        t.d(s, { A: () => r });
        let r = (0, t(94825).A)("MapPin", [
          [
            "path",
            {
              d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
              key: "1r0f0z",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
        ]);
      },
      89995: (e, s, t) => {
        "use strict";
        t.d(s, { A: () => r });
        let r = (0, t(94825).A)("Phone", [
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
        ]);
      },
      16639: (e, s, t) => {
        "use strict";
        t.d(s, { A: () => r });
        let r = (0, t(94825).A)("Share2", [
          ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
          ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
          ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
          [
            "line",
            {
              x1: "8.59",
              x2: "15.42",
              y1: "13.51",
              y2: "17.49",
              key: "47mynk",
            },
          ],
          [
            "line",
            { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
          ],
        ]);
      },
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [638, 776, 392, 746], () => t(86576));
  module.exports = r;
})();
=======
const CHUNK_PUBLIC_PATH = "server/app/contact/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_97f32f._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__592060._.js");
runtime.loadChunk("server/chunks/ssr/app_db13a2._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__b7ebd6._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__0f700d._.css");
runtime.loadChunk("server/chunks/ssr/node_modules_ce97a5._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_client_components_forbidden-error_b4e556.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_client_components_unauthorized-error_d758e6.js");
runtime.loadChunk("server/chunks/ssr/_8c0dcb._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/contact/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/contact/page { METADATA_0 => \"[project]/app/favicon.ico.mjs { IMAGE => \\\"[project]/app/favicon.ico [app-rsc] (static)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/app/contact/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
>>>>>>> 300a0e3efcacdf75cfa6c7d0da43e94fff22ea15
