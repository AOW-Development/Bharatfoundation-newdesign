(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [386],
  {
    51060: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 29951));
    },
    29951: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => h });
      var i = s(95155),
        o = s(14223),
        a = s(52845),
        n = s(5565),
        r = s(14057);
      let l = (0, r.A)("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]),
        c = (0, r.A)("Plus", [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "M12 5v14", key: "s699le" }],
        ]);
      var d = s(12115),
        p = s(83746),
        m = s(76046);
      function h() {
        let [e, t] = (0, d.useState)({}),
          s = (0, m.useRouter)(),
          r = [
            {
              title: "Equipment& Gear Sponsorship",
              description:
                "Donations for purchasing sports kits, shoes, balls, and other essentials",
              image: "/images/md-10.jpg",
              cost: 5e3,
              id: "equipment",
            },
            {
              title: "Coaching& Training Programs",
              description: "Fund coaching fees and skill development programs",
              image: "/images/md-9.jpg",
              cost: 8e3,
              id: "coaching",
            },
            {
              title: "Facility Development",
              description:
                "Contribution to build or improve sports fields, courts, and training centers",
              image: "/images/md-8.jpg",
              cost: 15e3,
              id: "facility",
            },
            {
              title: "Event Sponsorship",
              description:
                "Support for organizing tournaments, leagues, and sports events",
              image: "/images/md-7.jpg",
              cost: 1e4,
              id: "event",
            },
            {
              title: "Scholarship& Athlete Support",
              description:
                "Funding for young and talented athletes in need of financial assistance",
              image: "/images/md-6.jpg",
              cost: 1e4,
              id: "scholarship",
            },
            {
              title: "Travel& Accommodation",
              description:
                "Assistance to help athletes participate in competitions outside their locality",
              image: "/images/md-5.jpg",
              cost: 12e3,
              id: "travel",
            },
            {
              title: "Health& Nutrition Support",
              description:
                "Funds for medical checkups, nutrition programs, and sports psychology",
              image: "/images/md-4.jpg",
              cost: 7500,
              id: "health",
            },
            {
              title: "Women in Sports Fund",
              description:
                "Specific contributions to promote female participation in sports",
              image: "/images/md-3.jpg",
              cost: 8e3,
              id: "women",
            },
            {
              title: "Special Needs Sports Programs",
              description:
                "Support for inclusive athletics and adaptive sports initiatives",
              image: "/images/md-2.jpg",
              cost: 6e3,
              id: "special",
            },
            {
              title: "Corporate Sponsorship& CSR Contributions",
              description:
                "Encouraging businesses to contribute to large-scale sports programs",
              image: "/images/md-1.jpg",
              cost: 1e4,
              id: "corporate",
            },
          ],
          h = (e, s) => {
            t((t) => ({ ...t, [e]: Math.max(0, (t[e] || 0) + s) }));
          },
          g = () => r.reduce((t, s) => t + s.cost * (e[s.id] || 0), 0);
        return (0, i.jsxs)("main", {
          className: "min-h-screen flex flex-col",
          children: [
            (0, i.jsx)(o.default, {}),
            (0, i.jsx)(p.default, {
              mediaUrl: "/images/donationbanner.png",
              heading:
                "Want to be a Volunteer ? Select Your Donation Choice& Amount",
              paragraph:
                "Feel free to go ahead and join us in celebrating the achievement of success all-together forming a dynamic team",
              buttons: [
                { text: "Monthly Donation", link: "/monthly-donation" },
                { text: "Onetime Donation", link: "/one-time-donation" },
              ],
            }),
            (0, i.jsx)("section", {
              className: "flex-grow bg-gray-50 py-12",
              children: (0, i.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, i.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-8",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, i.jsx)("h2", {
                            className: "text-2xl font-bold mb-6",
                            children: "Donation Categories",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "bg-white rounded-lg shadow-sm overflow-hidden",
                            children: [
                              r.map((s) =>
                                (0, i.jsx)(
                                  "div",
                                  {
                                    className: "border-b last:border-b-0 p-4",
                                    children: (0, i.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className:
                                            "relative w-20 h-20 flex-shrink-0",
                                          children: (0, i.jsx)(n.default, {
                                            src: s.image || "/placeholder.svg",
                                            alt: s.title,
                                            fill: !0,
                                            className: "object-cover rounded",
                                          }),
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: "flex-grow",
                                          children: [
                                            (0, i.jsx)("h3", {
                                              className: "font-bold",
                                              children: s.title,
                                            }),
                                            (0, i.jsx)("p", {
                                              className:
                                                "text-sm text-gray-600",
                                              children: s.description,
                                            }),
                                            (0, i.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between mt-2",
                                              children: [
                                                (0, i.jsxs)("div", {
                                                  className: "text-sm",
                                                  children: [
                                                    "Cost: ₹",
                                                    s.cost.toLocaleString(),
                                                  ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, i.jsx)("button", {
                                                      onClick: () =>
                                                        h(s.id, -1),
                                                      className:
                                                        "p-1 rounded border hover:bg-gray-50",
                                                      children: (0, i.jsx)(l, {
                                                        className: "h-4 w-4",
                                                      }),
                                                    }),
                                                    (0, i.jsx)("input", {
                                                      type: "number",
                                                      value: e[s.id] || 0,
                                                      onChange: (e) => {
                                                        let i =
                                                          Number.parseInt(
                                                            e.target.value
                                                          ) || 0;
                                                        t((e) => ({
                                                          ...e,
                                                          [s.id]: Math.max(
                                                            0,
                                                            i
                                                          ),
                                                        }));
                                                      },
                                                      className:
                                                        "w-12 text-center border rounded p-1",
                                                      min: "0",
                                                    }),
                                                    (0, i.jsx)("button", {
                                                      onClick: () => h(s.id, 1),
                                                      className:
                                                        "p-1 rounded border hover:bg-gray-50",
                                                      children: (0, i.jsx)(c, {
                                                        className: "h-4 w-4",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                  className:
                                                    "text-sm font-semibold",
                                                  children: [
                                                    "Amount: ₹",
                                                    (
                                                      (e[s.id] || 0) * s.cost
                                                    ).toLocaleString(),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  s.id
                                )
                              ),
                              (0, i.jsxs)("div", {
                                className:
                                  "p-4 bg-gray-50 flex justify-between items-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "font-bold",
                                    children: "Total Amount",
                                  }),
                                  (0, i.jsxs)("span", {
                                    className: "font-bold",
                                    children: ["₹", g().toLocaleString()],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, i.jsx)("h2", {
                            className: "text-xl font-bold",
                            children: "You May Support to",
                          }),
                          [
                            {
                              title: "Youth Sports Development",
                              description:
                                "Organize training camps, coaching programs, and competitions for underprivileged children.",
                            },
                            {
                              title: "School Sports Integration",
                              description:
                                "Provide sports equipment and coaching to schools that lack resources.",
                            },
                            {
                              title: "Sports for Women Empowerment",
                              description:
                                "Promote female participation in sports through mentorship, training, and tournaments.",
                            },
                            {
                              title: "Paralympic& Adaptive Sports",
                              description:
                                "Support athletes with disabilities by offering specialized training and facilities.",
                            },
                            {
                              title: "Community Sports Centres",
                              description:
                                "Build or refurbish local playgrounds, fields, and courts to encourage sports participation.",
                            },
                            {
                              title: "Health& Fitness through Sports",
                              description:
                                "Conduct awareness campaigns on physical fitness and mental health benefits of sports.",
                            },
                            {
                              title:
                                "Anti- Drug& Rehabilitation through Sports",
                              description:
                                "Use sports as a tool for rehabilitation and preventing substance abuse.",
                            },
                            {
                              title: "Scholarship Programs",
                              description:
                                "Provide scholarships to talented young athletes who lack financial support.",
                            },
                            {
                              title: "Sports for Social Inclusion",
                              description:
                                "Promote sports programs for marginalized communities, including refugees and orphans.",
                            },
                            {
                              title: "Senior Citizen Wellness Sports Programs",
                              description:
                                "Organize light sports activities for elderly individuals to promote healthy aging.",
                            },
                          ].map((e, t) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                className: "bg-white p-4 rounded-lg shadow-sm",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className: "font-bold mb-2",
                                    children: e.title,
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-gray-600 text-sm",
                                    children: e.description,
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "mt-8 flex justify-center",
                    children: (0, i.jsx)("button", {
                      onClick: () => {
                        let e = g();
                        e > 0
                          ? s.push("/donate?amount=".concat(e))
                          : alert(
                              "Please select at least one donation category to proceed."
                            );
                      },
                      className:
                        "bg-[#16A34A] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#a5d695] transition-colors",
                      children: "Proceed to Donate",
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(a.default, {}),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [111, 88, 441, 517, 358], () => t(51060)), (_N_E = e.O());
  },
]);
