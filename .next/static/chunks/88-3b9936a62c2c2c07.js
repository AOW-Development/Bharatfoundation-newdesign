"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [88],
  {
    83746: (e, s, a) => {
      a.d(s, { default: () => i });
      var r = a(95155),
        t = a(12115),
        l = a(5565),
        d = a(48173),
        c = a.n(d);
      function i(e) {
        let s,
          a,
          {
            mediaUrl: d,
            imageUrl: i,
            videoUrl: n,
            heading: o,
            paragraph: h,
            buttons: x,
            activeButton: m,
          } = e,
          [b, g] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            d &&
              g(
                [".mp4", ".webm", ".ogg"].some((e) =>
                  d.toLowerCase().endsWith(e)
                )
              );
          }, [d]),
          (0, r.jsxs)("section", {
            className: "relative w-full overflow-hidden",
            children: [
              (0, r.jsxs)("div", {
                className: "relative w-full h-[40vh] md:h-[calc(100vh-80px)]",
                children: [
                  (n || (d && b)) &&
                    ((s = n || d || ""),
                    (0, r.jsx)("video", {
                      src: s,
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: "w-full h-full object-cover",
                    })),
                  (i || (d && !b)) &&
                    (0, r.jsx)("div", {
                      className: "absolute inset-0",
                      children:
                        ((a = i || d || ""),
                        (0, r.jsx)(l.default, {
                          src: a || "/placeholder.svg",
                          alt: "Banner background",
                          fill: !0,
                          className: "object-cover",
                          priority: !0,
                        })),
                    }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-r from-black/50 to-transparent",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "relative z-10 container mx-auto px-4 py-8 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center",
                children: (0, r.jsxs)("div", {
                  className: "text-center md:text-white space-y-6",
                  children: [
                    (0, r.jsx)("h1", {
                      className: "text-2xl md:text-3xl font-bold",
                      children: (o || "")
                        .split("\n")
                        .map((e, s) =>
                          (0, r.jsx)(
                            "span",
                            {
                              className: s > 0 ? "block mt-2" : "",
                              children: e,
                            },
                            s
                          )
                        ),
                    }),
                    (0, r.jsx)("p", {
                      className: "text-lg md:text-xl opacity-90",
                      children: h,
                    }),
                    x &&
                      x.length > 0 &&
                      (0, r.jsx)("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: x.map((e, s) =>
                          (0, r.jsx)(
                            c(),
                            {
                              href: e.link,
                              className:
                                "inline-block px-6 py-2 md:px-8 md:py-3 font-bold rounded-md transition-colors ".concat(
                                  m === e.text
                                    ? "bg-[#a5d695] text-black"
                                    : "bg-[#16A34A] text-black hover:bg-[#a5d695]"
                                ),
                              children: e.text,
                            },
                            s
                          )
                        ),
                      }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    52845: (e, s, a) => {
      a.d(s, { default: () => b });
      var r = a(95155),
        t = a(48173),
        l = a.n(t),
        d = a(96799),
        c = a(2345),
        i = a(34318),
        n = a(60252),
        o = a(51085),
        h = a(15713),
        x = a(73998),
        m = a(76046);
      function b() {
        let e = (0, m.useRouter)();
        return (0, r.jsx)("footer", {
          className: "bg-gray-700 px-6 md:px-28 text-sm text-white",
          children: (0, r.jsxs)("div", {
            className: "container mx-auto px-4 pt-12 pb-6",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", {
                        className:
                          "text-lg font-bold mb-4 border-b border-gray-500 pb-2",
                        children: "OUR WORK",
                      }),
                      (0, r.jsxs)("ul", {
                        className: "space-y-2",
                        children: [
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/our-work#impact",
                              className: "hover:text-gray-300",
                              children: "Impact",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/our-work#womens-report",
                              className: "hover:text-gray-300",
                              children: "Women's Report",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/our-work#grants",
                              className: "hover:text-gray-300",
                              children: "Grant",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/our-work#initiatives",
                              className: "hover:text-gray-300",
                              children: "Simply Periods, Roots, Smiles",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", {
                        className:
                          "text-lg font-bold mb-4 border-b border-gray-500 pb-2",
                        children: "GET INVOLVED",
                      }),
                      (0, r.jsxs)("ul", {
                        className: "space-y-2",
                        children: [
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/get-involved#volunteer",
                              className: "hover:text-gray-300",
                              children: "Volunteer",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/get-involved#donate",
                              className: "hover:text-gray-300",
                              children: "Donate",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/get-involved#partner",
                              className: "hover:text-gray-300",
                              children: "Partner with us",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/get-involved#careers",
                              className: "hover:text-gray-300",
                              children: "Careers",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", {
                        className:
                          "text-lg font-bold mb-4 border-b border-gray-500 pb-2",
                        children: "ABOUT US",
                      }),
                      (0, r.jsxs)("ul", {
                        className: "space-y-2",
                        children: [
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/about#tutorials",
                              className: "hover:text-gray-300",
                              children: "In-Depth Tutorials",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/about#insights",
                              className: "hover:text-gray-300",
                              children: "Expert Insights",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/about#events",
                              className: "hover:text-gray-300",
                              children: "Live Events and Coverage",
                            }),
                          }),
                          (0, r.jsx)("li", {
                            children: (0, r.jsx)(l(), {
                              href: "/about#fitness",
                              className: "hover:text-gray-300",
                              children: "Fitness and Wellness",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", {
                        className:
                          "text-lg font-bold mb-4 border-b border-gray-500 pb-2",
                        children: "MAIN OFFICE",
                      }),
                      (0, r.jsxs)("address", {
                        className: "not-italic",
                        children: [
                          "Bharat Sports Foundation",
                          (0, r.jsx)("br", {}),
                          "18th Cross, 5th Main,",
                          (0, r.jsx)("br", {}),
                          "Bengaluru, Karnataka 560055",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "border-t border-gray-600 pt-6 pb-4",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "space-y-2 mb-4 lg:mb-0",
                      children: [
                        (0, r.jsx)("p", {
                          children:
                            "Bharat Foundation161 B/ 4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre",
                        }),
                        (0, r.jsx)("p", {
                          children: "New Delhi- 110049 Delhi, India",
                        }),
                        (0, r.jsx)("p", {
                          children:
                            "Contact Us: Tel:+ 91-11-43123700| E- mail: info@bharatfoundation.org",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex space-x-4",
                      children: [
                        (0, r.jsx)(l(), {
                          href: "#",
                          className: "hover:text-gray-300",
                          children: (0, r.jsx)(d.A, { className: "h-6 w-6" }),
                        }),
                        (0, r.jsx)(l(), {
                          href: "#",
                          className: "hover:text-gray-300",
                          children: (0, r.jsx)(c.A, { className: "h-6 w-6" }),
                        }),
                        (0, r.jsx)(l(), {
                          href: "#",
                          className: "hover:text-gray-300",
                          children: (0, r.jsx)(i.A, { className: "h-6 w-6" }),
                        }),
                        (0, r.jsx)(l(), {
                          href: "#",
                          className: "hover:text-gray-300",
                          children: (0, r.jsx)(n.A, { className: "h-6 w-6" }),
                        }),
                        (0, r.jsx)(l(), {
                          href: "#",
                          className: "hover:text-gray-300",
                          children: (0, r.jsx)(o.A, { className: "h-6 w-6" }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: "fixed bottom-8 right-8 flex flex gap-4",
                children: [
                  (0, r.jsxs)("button", {
                    onClick: () => e.push("/contact"),
                    className:
                      "bg-white text-green-500 px-6 py-2 rounded-md font-semibold flex items-center gap-2",
                    children: [
                      (0, r.jsx)(h.A, { className: "h-5 w-5" }),
                      "Help?",
                    ],
                  }),
                  (0, r.jsx)("button", {
                    onClick: () => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    },
                    className:
                      "bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition-colors",
                    children: (0, r.jsx)(x.A, {
                      className: "h-6 w-6 text-white",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "border-t border-gray-600 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm",
                children: [
                  (0, r.jsx)("p", { children: "Powered By:- aow.co.in" }),
                  (0, r.jsx)("p", {
                    children:
                      "\xa9 Copyright 2025 Bharat Sports Foundation. All rights Reserved",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    14223: (e, s, a) => {
      a.d(s, { default: () => h });
      var r = a(95155),
        t = a(12115),
        l = a(48173),
        d = a.n(l),
        c = a(5565),
        i = a(76046),
        n = a(689),
        o = a(87936);
      function h() {
        let e = (0, i.usePathname)(),
          [s, a] = (0, t.useState)(!1),
          [l, h] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          let e = window.matchMedia("(prefers-color-scheme: dark)");
          h(e.matches);
          let s = (e) => h(e.matches);
          return (
            e.addEventListener("change", s),
            () => e.removeEventListener("change", s)
          );
        }, []);
        let x = [
            { href: "/", label: "Home" },
            { href: "/what-we-do", label: "What We Do" },
            { href: "/blog", label: "Our Blog" },
            { href: "/resources", label: "Resources" },
            { href: "/contact", label: "Contact Us" },
          ],
          m = () => a(!s);
        return (0, r.jsx)("header", {
          className:
            "fixed top-0 left-0 right-0 w-full z-50 dark:bg-gray-900 shadow-sm md:pt-4 py-4 md:pt-8 ".concat(
              l ? "dark" : ""
            ),
          children: (0, r.jsxs)("div", {
            className: "container mx-auto px-4 md:px-12",
            children: [
              (0, r.jsxs)("nav", {
                className:
                  "flex items-center justify-between h-16 md:h-20 relative",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gray-100 dark:bg-gray-800 h-12 top-1/2 mx-6 -translate-y-1/2 hidden md:block",
                  }),
                  (0, r.jsx)("div", {
                    className: "flex items-center z-10",
                    children: (0, r.jsx)(d(), {
                      href: "/",
                      children: (0, r.jsx)(c.default, {
                        src: "/images/revisedlogo_bsf.svg",
                        alt: "Bharat Sports Foundation Logo",
                        width: 150,
                        height: 150,
                        className: "h-16 w-16 md:h-28 md:w-28",
                      }),
                    }),
                  }),
                  (0, r.jsx)("h1", {
                    className:
                      "text-lg font-bold text-[#a5d695] dark:text-[#a5d695] text-center absolute left-1/2 transform -translate-x-1/2 md:hidden",
                    children: "Bharat Sports Foundation",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "hidden md:flex items-center justify-center absolute left-0 right-0 mx-16 h-8 z-0",
                    children: x.map((s) =>
                      (0, r.jsx)(
                        d(),
                        {
                          href: s.href,
                          className:
                            "mx-12 py-1 px-6 text-sm mx-2 font-bold ".concat(
                              e === s.href
                                ? "bg-[#16A34A] text-black dark:text-white"
                                : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                            ),
                          children: s.label,
                        },
                        s.href
                      )
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "hidden md:block z-10",
                    children: (0, r.jsx)(d(), {
                      href: "/donate",
                      className:
                        "px-6 py-6 bg-[#16A34A] text-black dark:text-white font-bold text-sm hover:bg-[#a5d695] transition-colors",
                      children: "DONATE NOW",
                    }),
                  }),
                  (0, r.jsxs)("button", {
                    className:
                      "md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#16A34A] z-10",
                    onClick: m,
                    children: [
                      (0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Open main menu",
                      }),
                      s
                        ? (0, r.jsx)(n.A, {
                            className: "block h-6 w-6",
                            "aria-hidden": "true",
                          })
                        : (0, r.jsx)(o.A, {
                            className: "block h-6 w-6",
                            "aria-hidden": "true",
                          }),
                    ],
                  }),
                ],
              }),
              s &&
                (0, r.jsx)("div", {
                  className:
                    "md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 z-50",
                  children: (0, r.jsxs)("div", {
                    className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                    children: [
                      x.map((s) =>
                        (0, r.jsx)(
                          d(),
                          {
                            href: s.href,
                            className:
                              "block px-3 py-2 rounded-md text-base font-medium ".concat(
                                e === s.href
                                  ? "bg-[#16A34A] text-black dark:text-white"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                              ),
                            onClick: m,
                            children: s.label,
                          },
                          s.href
                        )
                      ),
                      (0, r.jsx)(d(), {
                        href: "/donate",
                        className:
                          "block px-3 py-2 rounded-md text-base font-medium bg-[#16A34A] text-black dark:text-white hover:bg-[#a5d695]",
                        onClick: m,
                        children: "DONATE NOW",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      }
    },
  },
]);
