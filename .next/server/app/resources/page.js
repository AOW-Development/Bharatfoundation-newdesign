(() => {
  var e = {};
  (e.id = 752),
    (e.ids = [752]),
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
      20664: (e, r, t) => {
        "use strict";
        t.r(r),
          t.d(r, {
            GlobalError: () => l.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => p,
            tree: () => d,
          });
        var n = t(70260),
          o = t(28203),
          s = t(25155),
          l = t.n(s),
          a = t(67292),
          i = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (i[e] = () => a[e]);
        t.d(r, i);
        let d = [
            "",
            {
              children: [
                "resources",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 78086)),
                        "D:\\Development\\bsf-sureshdesign\\app\\resources\\page.tsx",
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
          c = ["D:\\Development\\bsf-sureshdesign\\app\\resources\\page.tsx"],
          u = { require: t, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: "/resources/page",
              pathname: "/resources",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      19391: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 99580)),
          Promise.resolve().then(t.bind(t, 9879)),
          Promise.resolve().then(t.bind(t, 51929)),
          Promise.resolve().then(t.bind(t, 32830)),
          Promise.resolve().then(t.t.bind(t, 59607, 23)),
          Promise.resolve().then(t.t.bind(t, 71066, 23));
      },
      56343: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 23320)),
          Promise.resolve().then(t.bind(t, 26283)),
          Promise.resolve().then(t.bind(t, 39701)),
          Promise.resolve().then(t.bind(t, 59301)),
          Promise.resolve().then(t.t.bind(t, 28531, 23)),
          Promise.resolve().then(t.t.bind(t, 41902, 23));
      },
      59301: (e, r, t) => {
        "use strict";
        t.d(r, { Checkbox: () => eG });
        var n = t(45512),
          o = t(58009);
        function s(e, r) {
          if ("function" == typeof e) return e(r);
          null != e && (e.current = r);
        }
        function l(...e) {
          return (r) => {
            let t = !1,
              n = e.map((e) => {
                let n = s(e, r);
                return t || "function" != typeof n || (t = !0), n;
              });
            if (t)
              return () => {
                for (let r = 0; r < n.length; r++) {
                  let t = n[r];
                  "function" == typeof t ? t() : s(e[r], null);
                }
              };
          };
        }
        function a(...e) {
          return o.useCallback(l(...e), e);
        }
        function i(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
          return function (n) {
            if ((e?.(n), !1 === t || !n.defaultPrevented)) return r?.(n);
          };
        }
        function d(e) {
          let r = o.useRef(e);
          return (
            o.useEffect(() => {
              r.current = e;
            }),
            o.useMemo(
              () =>
                (...e) =>
                  r.current?.(...e),
              []
            )
          );
        }
        var c = globalThis?.document ? o.useLayoutEffect : () => {},
          u = (e) => {
            let { present: r, children: t } = e,
              n = (function (e) {
                var r, t;
                let [n, s] = o.useState(),
                  l = o.useRef({}),
                  a = o.useRef(e),
                  i = o.useRef("none"),
                  [d, u] =
                    ((r = e ? "mounted" : "unmounted"),
                    (t = {
                      mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended",
                      },
                      unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted",
                      },
                      unmounted: { MOUNT: "mounted" },
                    }),
                    o.useReducer((e, r) => t[e][r] ?? e, r));
                return (
                  o.useEffect(() => {
                    let e = p(l.current);
                    i.current = "mounted" === d ? e : "none";
                  }, [d]),
                  c(() => {
                    let r = l.current,
                      t = a.current;
                    if (t !== e) {
                      let n = i.current,
                        o = p(r);
                      e
                        ? u("MOUNT")
                        : "none" === o || r?.display === "none"
                        ? u("UNMOUNT")
                        : t && n !== o
                        ? u("ANIMATION_OUT")
                        : u("UNMOUNT"),
                        (a.current = e);
                    }
                  }, [e, u]),
                  c(() => {
                    if (n) {
                      let e;
                      let r = n.ownerDocument.defaultView ?? window,
                        t = (t) => {
                          let o = p(l.current).includes(t.animationName);
                          if (
                            t.target === n &&
                            o &&
                            (u("ANIMATION_END"), !a.current)
                          ) {
                            let t = n.style.animationFillMode;
                            (n.style.animationFillMode = "forwards"),
                              (e = r.setTimeout(() => {
                                "forwards" === n.style.animationFillMode &&
                                  (n.style.animationFillMode = t);
                              }));
                          }
                        },
                        o = (e) => {
                          e.target === n && (i.current = p(l.current));
                        };
                      return (
                        n.addEventListener("animationstart", o),
                        n.addEventListener("animationcancel", t),
                        n.addEventListener("animationend", t),
                        () => {
                          r.clearTimeout(e),
                            n.removeEventListener("animationstart", o),
                            n.removeEventListener("animationcancel", t),
                            n.removeEventListener("animationend", t);
                        }
                      );
                    }
                    u("ANIMATION_END");
                  }, [n, u]),
                  {
                    isPresent: ["mounted", "unmountSuspended"].includes(d),
                    ref: o.useCallback((e) => {
                      e && (l.current = getComputedStyle(e)), s(e);
                    }, []),
                  }
                );
              })(r),
              s =
                "function" == typeof t
                  ? t({ present: n.isPresent })
                  : o.Children.only(t),
              l = a(
                n.ref,
                (function (e) {
                  let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                    t = r && "isReactWarning" in r && r.isReactWarning;
                  return t
                    ? e.ref
                    : (t =
                        (r = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                        "isReactWarning" in r &&
                        r.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
                })(s)
              );
            return "function" == typeof t || n.isPresent
              ? o.cloneElement(s, { ref: l })
              : null;
          };
        function p(e) {
          return e?.animationName || "none";
        }
        (u.displayName = "Presence"), t(55740);
        var f = o.forwardRef((e, r) => {
          let { children: t, ...s } = e,
            l = o.Children.toArray(t),
            a = l.find(b);
          if (a) {
            let e = a.props.children,
              t = l.map((r) =>
                r !== a
                  ? r
                  : o.Children.count(e) > 1
                  ? o.Children.only(null)
                  : o.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, n.jsx)(m, {
              ...s,
              ref: r,
              children: o.isValidElement(e)
                ? o.cloneElement(e, void 0, t)
                : null,
            });
          }
          return (0, n.jsx)(m, { ...s, ref: r, children: t });
        });
        f.displayName = "Slot";
        var m = o.forwardRef((e, r) => {
          let { children: t, ...n } = e;
          if (o.isValidElement(t)) {
            let e = (function (e) {
                let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = r && "isReactWarning" in r && r.isReactWarning;
                return t
                  ? e.ref
                  : (t =
                      (r = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                      "isReactWarning" in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(t),
              s = (function (e, r) {
                let t = { ...r };
                for (let n in r) {
                  let o = e[n],
                    s = r[n];
                  /^on[A-Z]/.test(n)
                    ? o && s
                      ? (t[n] = (...e) => {
                          s(...e), o(...e);
                        })
                      : o && (t[n] = o)
                    : "style" === n
                    ? (t[n] = { ...o, ...s })
                    : "className" === n &&
                      (t[n] = [o, s].filter(Boolean).join(" "));
                }
                return { ...e, ...t };
              })(n, t.props);
            return (
              t.type !== o.Fragment && (s.ref = r ? l(r, e) : e),
              o.cloneElement(t, s)
            );
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null;
        });
        m.displayName = "SlotClone";
        var h = ({ children: e }) => (0, n.jsx)(n.Fragment, { children: e });
        function b(e) {
          return o.isValidElement(e) && e.type === h;
        }
        var g = [
            "a",
            "button",
            "div",
            "form",
            "h2",
            "h3",
            "img",
            "input",
            "label",
            "li",
            "nav",
            "ol",
            "p",
            "span",
            "svg",
            "ul",
          ].reduce((e, r) => {
            let t = o.forwardRef((e, t) => {
              let { asChild: o, ...s } = e,
                l = o ? f : r;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, n.jsx)(l, { ...s, ref: t })
              );
            });
            return (t.displayName = `Primitive.${r}`), { ...e, [r]: t };
          }, {}),
          x = "Checkbox",
          [v, y] = (function (e, r = []) {
            let t = [],
              s = () => {
                let r = t.map((e) => o.createContext(e));
                return function (t) {
                  let n = t?.[e] || r;
                  return o.useMemo(
                    () => ({ [`__scope${e}`]: { ...t, [e]: n } }),
                    [t, n]
                  );
                };
              };
            return (
              (s.scopeName = e),
              [
                function (r, s) {
                  let l = o.createContext(s),
                    a = t.length;
                  t = [...t, s];
                  let i = (r) => {
                    let { scope: t, children: s, ...i } = r,
                      d = t?.[e]?.[a] || l,
                      c = o.useMemo(() => i, Object.values(i));
                    return (0, n.jsx)(d.Provider, { value: c, children: s });
                  };
                  return (
                    (i.displayName = r + "Provider"),
                    [
                      i,
                      function (t, n) {
                        let i = n?.[e]?.[a] || l,
                          d = o.useContext(i);
                        if (d) return d;
                        if (void 0 !== s) return s;
                        throw Error(`\`${t}\` must be used within \`${r}\``);
                      },
                    ]
                  );
                },
                (function (...e) {
                  let r = e[0];
                  if (1 === e.length) return r;
                  let t = () => {
                    let t = e.map((e) => ({
                      useScope: e(),
                      scopeName: e.scopeName,
                    }));
                    return function (e) {
                      let n = t.reduce((r, { useScope: t, scopeName: n }) => {
                        let o = t(e)[`__scope${n}`];
                        return { ...r, ...o };
                      }, {});
                      return o.useMemo(
                        () => ({ [`__scope${r.scopeName}`]: n }),
                        [n]
                      );
                    };
                  };
                  return (t.scopeName = r.scopeName), t;
                })(s, ...r),
              ]
            );
          })(x),
          [w, k] = v(x),
          j = o.forwardRef((e, r) => {
            let {
                __scopeCheckbox: t,
                name: s,
                checked: l,
                defaultChecked: c,
                required: u,
                disabled: p,
                value: f = "on",
                onCheckedChange: m,
                form: h,
                ...b
              } = e,
              [x, v] = o.useState(null),
              y = a(r, (e) => v(e)),
              k = o.useRef(!1),
              j = !x || h || !!x.closest("form"),
              [N = !1, C] = (function ({
                prop: e,
                defaultProp: r,
                onChange: t = () => {},
              }) {
                let [n, s] = (function ({ defaultProp: e, onChange: r }) {
                    let t = o.useState(e),
                      [n] = t,
                      s = o.useRef(n),
                      l = d(r);
                    return (
                      o.useEffect(() => {
                        s.current !== n && (l(n), (s.current = n));
                      }, [n, s, l]),
                      t
                    );
                  })({ defaultProp: r, onChange: t }),
                  l = void 0 !== e,
                  a = l ? e : n,
                  i = d(t);
                return [
                  a,
                  o.useCallback(
                    (r) => {
                      if (l) {
                        let t = "function" == typeof r ? r(e) : r;
                        t !== e && i(t);
                      } else s(r);
                    },
                    [l, e, s, i]
                  ),
                ];
              })({ prop: l, defaultProp: c, onChange: m }),
              M = o.useRef(N);
            return (
              o.useEffect(() => {
                let e = x?.form;
                if (e) {
                  let r = () => C(M.current);
                  return (
                    e.addEventListener("reset", r),
                    () => e.removeEventListener("reset", r)
                  );
                }
              }, [x, C]),
              (0, n.jsxs)(w, {
                scope: t,
                state: N,
                disabled: p,
                children: [
                  (0, n.jsx)(g.button, {
                    type: "button",
                    role: "checkbox",
                    "aria-checked": E(N) ? "mixed" : N,
                    "aria-required": u,
                    "data-state": P(N),
                    "data-disabled": p ? "" : void 0,
                    disabled: p,
                    value: f,
                    ...b,
                    ref: y,
                    onKeyDown: i(e.onKeyDown, (e) => {
                      "Enter" === e.key && e.preventDefault();
                    }),
                    onClick: i(e.onClick, (e) => {
                      C((e) => !!E(e) || !e),
                        j &&
                          ((k.current = e.isPropagationStopped()),
                          k.current || e.stopPropagation());
                    }),
                  }),
                  j &&
                    (0, n.jsx)(z, {
                      control: x,
                      bubbles: !k.current,
                      name: s,
                      value: f,
                      checked: N,
                      required: u,
                      disabled: p,
                      form: h,
                      style: { transform: "translateX(-100%)" },
                      defaultChecked: !E(c) && c,
                    }),
                ],
              })
            );
          });
        j.displayName = x;
        var N = "CheckboxIndicator",
          C = o.forwardRef((e, r) => {
            let { __scopeCheckbox: t, forceMount: o, ...s } = e,
              l = k(N, t);
            return (0, n.jsx)(u, {
              present: o || E(l.state) || !0 === l.state,
              children: (0, n.jsx)(g.span, {
                "data-state": P(l.state),
                "data-disabled": l.disabled ? "" : void 0,
                ...s,
                ref: r,
                style: { pointerEvents: "none", ...e.style },
              }),
            });
          });
        C.displayName = N;
        var z = (e) => {
          let {
              control: r,
              checked: t,
              bubbles: s = !0,
              defaultChecked: l,
              ...a
            } = e,
            i = o.useRef(null),
            d = (function (e) {
              let r = o.useRef({ value: e, previous: e });
              return o.useMemo(
                () => (
                  r.current.value !== e &&
                    ((r.current.previous = r.current.value),
                    (r.current.value = e)),
                  r.current.previous
                ),
                [e]
              );
            })(t),
            u = (function (e) {
              let [r, t] = o.useState(void 0);
              return (
                c(() => {
                  if (e) {
                    t({ width: e.offsetWidth, height: e.offsetHeight });
                    let r = new ResizeObserver((r) => {
                      let n, o;
                      if (!Array.isArray(r) || !r.length) return;
                      let s = r[0];
                      if ("borderBoxSize" in s) {
                        let e = s.borderBoxSize,
                          r = Array.isArray(e) ? e[0] : e;
                        (n = r.inlineSize), (o = r.blockSize);
                      } else (n = e.offsetWidth), (o = e.offsetHeight);
                      t({ width: n, height: o });
                    });
                    return (
                      r.observe(e, { box: "border-box" }), () => r.unobserve(e)
                    );
                  }
                  t(void 0);
                }, [e]),
                r
              );
            })(r);
          o.useEffect(() => {
            let e = i.current,
              r = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set;
            if (d !== t && r) {
              let n = new Event("click", { bubbles: s });
              (e.indeterminate = E(t)),
                r.call(e, !E(t) && t),
                e.dispatchEvent(n);
            }
          }, [d, t, s]);
          let p = o.useRef(!E(t) && t);
          return (0, n.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: l ?? p.current,
            ...a,
            tabIndex: -1,
            ref: i,
            style: {
              ...e.style,
              ...u,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          });
        };
        function E(e) {
          return "indeterminate" === e;
        }
        function P(e) {
          return E(e) ? "indeterminate" : e ? "checked" : "unchecked";
        }
        var M = ["color"],
          R = (0, o.forwardRef)(function (e, r) {
            var t = e.color,
              n = (function (e, r) {
                if (null == e) return {};
                var t,
                  n,
                  o = {},
                  s = Object.keys(e);
                for (n = 0; n < s.length; n++)
                  (t = s[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
              })(e, M);
            return (0,
            o.createElement)("svg", Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, n, { ref: r }), (0, o.createElement)("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: void 0 === t ? "currentColor" : t, fillRule: "evenodd", clipRule: "evenodd" }));
          });
        let A = (e) => {
            let r = _(e),
              { conflictingClassGroups: t, conflictingClassGroupModifiers: n } =
                e;
            return {
              getClassGroupId: (e) => {
                let t = e.split("-");
                return (
                  "" === t[0] && 1 !== t.length && t.shift(), D(t, r) || S(e)
                );
              },
              getConflictingClassGroupIds: (e, r) => {
                let o = t[e] || [];
                return r && n[e] ? [...o, ...n[e]] : o;
              },
            };
          },
          D = (e, r) => {
            if (0 === e.length) return r.classGroupId;
            let t = e[0],
              n = r.nextPart.get(t),
              o = n ? D(e.slice(1), n) : void 0;
            if (o) return o;
            if (0 === r.validators.length) return;
            let s = e.join("-");
            return r.validators.find(({ validator: e }) => e(s))?.classGroupId;
          },
          O = /^\[(.+)\]$/,
          S = (e) => {
            if (O.test(e)) {
              let r = O.exec(e)[1],
                t = r?.substring(0, r.indexOf(":"));
              if (t) return "arbitrary.." + t;
            }
          },
          _ = (e) => {
            let { theme: r, classGroups: t } = e,
              n = { nextPart: new Map(), validators: [] };
            for (let e in t) T(t[e], n, e, r);
            return n;
          },
          T = (e, r, t, n) => {
            e.forEach((e) => {
              if ("string" == typeof e) {
                ("" === e ? r : I(r, e)).classGroupId = t;
                return;
              }
              if ("function" == typeof e) {
                if ($(e)) {
                  T(e(n), r, t, n);
                  return;
                }
                r.validators.push({ validator: e, classGroupId: t });
                return;
              }
              Object.entries(e).forEach(([e, o]) => {
                T(o, I(r, e), t, n);
              });
            });
          },
          I = (e, r) => {
            let t = e;
            return (
              r.split("-").forEach((e) => {
                t.nextPart.has(e) ||
                  t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                  (t = t.nextPart.get(e));
              }),
              t
            );
          },
          $ = (e) => e.isThemeGetter,
          L = (e) => {
            if (e < 1) return { get: () => void 0, set: () => {} };
            let r = 0,
              t = new Map(),
              n = new Map(),
              o = (o, s) => {
                t.set(o, s), ++r > e && ((r = 0), (n = t), (t = new Map()));
              };
            return {
              get(e) {
                let r = t.get(e);
                return void 0 !== r
                  ? r
                  : void 0 !== (r = n.get(e))
                  ? (o(e, r), r)
                  : void 0;
              },
              set(e, r) {
                t.has(e) ? t.set(e, r) : o(e, r);
              },
            };
          },
          W = (e) => {
            let { prefix: r, experimentalParseClassName: t } = e,
              n = (e) => {
                let r;
                let t = [],
                  n = 0,
                  o = 0,
                  s = 0;
                for (let l = 0; l < e.length; l++) {
                  let a = e[l];
                  if (0 === n && 0 === o) {
                    if (":" === a) {
                      t.push(e.slice(s, l)), (s = l + 1);
                      continue;
                    }
                    if ("/" === a) {
                      r = l;
                      continue;
                    }
                  }
                  "[" === a
                    ? n++
                    : "]" === a
                    ? n--
                    : "(" === a
                    ? o++
                    : ")" === a && o--;
                }
                let l = 0 === t.length ? e : e.substring(s),
                  a = G(l);
                return {
                  modifiers: t,
                  hasImportantModifier: a !== l,
                  baseClassName: a,
                  maybePostfixModifierPosition: r && r > s ? r - s : void 0,
                };
              };
            if (r) {
              let e = r + ":",
                t = n;
              n = (r) =>
                r.startsWith(e)
                  ? t(r.substring(e.length))
                  : {
                      isExternal: !0,
                      modifiers: [],
                      hasImportantModifier: !1,
                      baseClassName: r,
                      maybePostfixModifierPosition: void 0,
                    };
            }
            if (t) {
              let e = n;
              n = (r) => t({ className: r, parseClassName: e });
            }
            return n;
          },
          G = (e) =>
            e.endsWith("!")
              ? e.substring(0, e.length - 1)
              : e.startsWith("!")
              ? e.substring(1)
              : e,
          q = (e) => {
            let r = Object.fromEntries(
              e.orderSensitiveModifiers.map((e) => [e, !0])
            );
            return (e) => {
              if (e.length <= 1) return e;
              let t = [],
                n = [];
              return (
                e.forEach((e) => {
                  "[" === e[0] || r[e]
                    ? (t.push(...n.sort(), e), (n = []))
                    : n.push(e);
                }),
                t.push(...n.sort()),
                t
              );
            };
          },
          U = (e) => ({
            cache: L(e.cacheSize),
            parseClassName: W(e),
            sortModifiers: q(e),
            ...A(e),
          }),
          F = /\s+/,
          V = (e, r) => {
            let {
                parseClassName: t,
                getClassGroupId: n,
                getConflictingClassGroupIds: o,
                sortModifiers: s,
              } = r,
              l = [],
              a = e.trim().split(F),
              i = "";
            for (let e = a.length - 1; e >= 0; e -= 1) {
              let r = a[e],
                {
                  isExternal: d,
                  modifiers: c,
                  hasImportantModifier: u,
                  baseClassName: p,
                  maybePostfixModifierPosition: f,
                } = t(r);
              if (d) {
                i = r + (i.length > 0 ? " " + i : i);
                continue;
              }
              let m = !!f,
                h = n(m ? p.substring(0, f) : p);
              if (!h) {
                if (!m || !(h = n(p))) {
                  i = r + (i.length > 0 ? " " + i : i);
                  continue;
                }
                m = !1;
              }
              let b = s(c).join(":"),
                g = u ? b + "!" : b,
                x = g + h;
              if (l.includes(x)) continue;
              l.push(x);
              let v = o(h, m);
              for (let e = 0; e < v.length; ++e) {
                let r = v[e];
                l.push(g + r);
              }
              i = r + (i.length > 0 ? " " + i : i);
            }
            return i;
          };
        function B() {
          let e,
            r,
            t = 0,
            n = "";
          for (; t < arguments.length; )
            (e = arguments[t++]) && (r = Z(e)) && (n && (n += " "), (n += r));
          return n;
        }
        let Z = (e) => {
            let r;
            if ("string" == typeof e) return e;
            let t = "";
            for (let n = 0; n < e.length; n++)
              e[n] && (r = Z(e[n])) && (t && (t += " "), (t += r));
            return t;
          },
          H = (e) => {
            let r = (r) => r[e] || [];
            return (r.isThemeGetter = !0), r;
          },
          K = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
          X = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
          Q = /^\d+\/\d+$/,
          J = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          Y =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          ee = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
          er =
            /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
          et =
            /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
          en = (e) => Q.test(e),
          eo = (e) => !!e && !Number.isNaN(Number(e)),
          es = (e) => !!e && Number.isInteger(Number(e)),
          el = (e) => e.endsWith("%") && eo(e.slice(0, -1)),
          ea = (e) => J.test(e),
          ei = () => !0,
          ed = (e) => Y.test(e) && !ee.test(e),
          ec = () => !1,
          eu = (e) => er.test(e),
          ep = (e) => et.test(e),
          ef = (e) => !eh(e) && !ew(e),
          em = (e) => eP(e, eS, ec),
          eh = (e) => K.test(e),
          eb = (e) => eP(e, e_, ed),
          eg = (e) => eP(e, eT, eo),
          ex = (e) => eP(e, eR, ec),
          ev = (e) => eP(e, eD, ep),
          ey = (e) => eP(e, ec, eu),
          ew = (e) => X.test(e),
          ek = (e) => eM(e, e_),
          ej = (e) => eM(e, eI),
          eN = (e) => eM(e, eR),
          eC = (e) => eM(e, eS),
          ez = (e) => eM(e, eD),
          eE = (e) => eM(e, e$, !0),
          eP = (e, r, t) => {
            let n = K.exec(e);
            return !!n && (n[1] ? r(n[1]) : t(n[2]));
          },
          eM = (e, r, t = !1) => {
            let n = X.exec(e);
            return !!n && (n[1] ? r(n[1]) : t);
          },
          eR = (e) => "position" === e,
          eA = new Set(["image", "url"]),
          eD = (e) => eA.has(e),
          eO = new Set(["length", "size", "percentage"]),
          eS = (e) => eO.has(e),
          e_ = (e) => "length" === e,
          eT = (e) => "number" === e,
          eI = (e) => "family-name" === e,
          e$ = (e) => "shadow" === e;
        Symbol.toStringTag;
        let eL = (function (e, ...r) {
          let t, n, o;
          let s = function (a) {
            return (
              (n = (t = U(r.reduce((e, r) => r(e), e()))).cache.get),
              (o = t.cache.set),
              (s = l),
              l(a)
            );
          };
          function l(e) {
            let r = n(e);
            if (r) return r;
            let s = V(e, t);
            return o(e, s), s;
          }
          return function () {
            return s(B.apply(null, arguments));
          };
        })(() => {
          let e = H("color"),
            r = H("font"),
            t = H("text"),
            n = H("font-weight"),
            o = H("tracking"),
            s = H("leading"),
            l = H("breakpoint"),
            a = H("container"),
            i = H("spacing"),
            d = H("radius"),
            c = H("shadow"),
            u = H("inset-shadow"),
            p = H("drop-shadow"),
            f = H("blur"),
            m = H("perspective"),
            h = H("aspect"),
            b = H("ease"),
            g = H("animate"),
            x = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            v = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            y = () => ["auto", "hidden", "clip", "visible", "scroll"],
            w = () => ["auto", "contain", "none"],
            k = () => [ew, eh, i],
            j = () => [en, "full", "auto", ...k()],
            N = () => [es, "none", "subgrid", ew, eh],
            C = () => ["auto", { span: ["full", es, ew, eh] }, ew, eh],
            z = () => [es, "auto", ew, eh],
            E = () => ["auto", "min", "max", "fr", ew, eh],
            P = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
            ],
            M = () => ["start", "end", "center", "stretch"],
            R = () => ["auto", ...k()],
            A = () => [
              en,
              "auto",
              "full",
              "dvw",
              "dvh",
              "lvw",
              "lvh",
              "svw",
              "svh",
              "min",
              "max",
              "fit",
              ...k(),
            ],
            D = () => [e, ew, eh],
            O = () => [el, eb],
            S = () => ["", "none", "full", d, ew, eh],
            _ = () => ["", eo, ek, eb],
            T = () => ["solid", "dashed", "dotted", "double"],
            I = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            $ = () => ["", "none", f, ew, eh],
            L = () => [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ew,
              eh,
            ],
            W = () => ["none", eo, ew, eh],
            G = () => ["none", eo, ew, eh],
            q = () => [eo, ew, eh],
            U = () => [en, "full", ...k()];
          return {
            cacheSize: 500,
            theme: {
              animate: ["spin", "ping", "pulse", "bounce"],
              aspect: ["video"],
              blur: [ea],
              breakpoint: [ea],
              color: [ei],
              container: [ea],
              "drop-shadow": [ea],
              ease: ["in", "out", "in-out"],
              font: [ef],
              "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
              ],
              "inset-shadow": [ea],
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
              perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none",
              ],
              radius: [ea],
              shadow: [ea],
              spacing: ["px", eo],
              text: [ea],
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
              ],
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", en, eh, ew, h] }],
              container: ["container"],
              columns: [{ columns: [eo, eh, ew, a] }],
              "break-after": [{ "break-after": x() }],
              "break-before": [{ "break-before": x() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              sr: ["sr-only", "not-sr-only"],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...v(), eh, ew] }],
              overflow: [{ overflow: y() }],
              "overflow-x": [{ "overflow-x": y() }],
              "overflow-y": [{ "overflow-y": y() }],
              overscroll: [{ overscroll: w() }],
              "overscroll-x": [{ "overscroll-x": w() }],
              "overscroll-y": [{ "overscroll-y": w() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: j() }],
              "inset-x": [{ "inset-x": j() }],
              "inset-y": [{ "inset-y": j() }],
              start: [{ start: j() }],
              end: [{ end: j() }],
              top: [{ top: j() }],
              right: [{ right: j() }],
              bottom: [{ bottom: j() }],
              left: [{ left: j() }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: [es, "auto", ew, eh] }],
              basis: [{ basis: [en, "full", "auto", a, ...k()] }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
              flex: [{ flex: [eo, en, "auto", "initial", "none", eh] }],
              grow: [{ grow: ["", eo, ew, eh] }],
              shrink: [{ shrink: ["", eo, ew, eh] }],
              order: [{ order: [es, "first", "last", "none", ew, eh] }],
              "grid-cols": [{ "grid-cols": N() }],
              "col-start-end": [{ col: C() }],
              "col-start": [{ "col-start": z() }],
              "col-end": [{ "col-end": z() }],
              "grid-rows": [{ "grid-rows": N() }],
              "row-start-end": [{ row: C() }],
              "row-start": [{ "row-start": z() }],
              "row-end": [{ "row-end": z() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": E() }],
              "auto-rows": [{ "auto-rows": E() }],
              gap: [{ gap: k() }],
              "gap-x": [{ "gap-x": k() }],
              "gap-y": [{ "gap-y": k() }],
              "justify-content": [{ justify: [...P(), "normal"] }],
              "justify-items": [{ "justify-items": [...M(), "normal"] }],
              "justify-self": [{ "justify-self": ["auto", ...M()] }],
              "align-content": [{ content: ["normal", ...P()] }],
              "align-items": [{ items: [...M(), "baseline"] }],
              "align-self": [{ self: ["auto", ...M(), "baseline"] }],
              "place-content": [{ "place-content": P() }],
              "place-items": [{ "place-items": [...M(), "baseline"] }],
              "place-self": [{ "place-self": ["auto", ...M()] }],
              p: [{ p: k() }],
              px: [{ px: k() }],
              py: [{ py: k() }],
              ps: [{ ps: k() }],
              pe: [{ pe: k() }],
              pt: [{ pt: k() }],
              pr: [{ pr: k() }],
              pb: [{ pb: k() }],
              pl: [{ pl: k() }],
              m: [{ m: R() }],
              mx: [{ mx: R() }],
              my: [{ my: R() }],
              ms: [{ ms: R() }],
              me: [{ me: R() }],
              mt: [{ mt: R() }],
              mr: [{ mr: R() }],
              mb: [{ mb: R() }],
              ml: [{ ml: R() }],
              "space-x": [{ "space-x": k() }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": k() }],
              "space-y-reverse": ["space-y-reverse"],
              size: [{ size: A() }],
              w: [{ w: [a, "screen", ...A()] }],
              "min-w": [{ "min-w": [a, "screen", "none", ...A()] }],
              "max-w": [
                {
                  "max-w": [
                    a,
                    "screen",
                    "none",
                    "prose",
                    { screen: [l] },
                    ...A(),
                  ],
                },
              ],
              h: [{ h: ["screen", ...A()] }],
              "min-h": [{ "min-h": ["screen", "none", ...A()] }],
              "max-h": [{ "max-h": ["screen", ...A()] }],
              "font-size": [{ text: ["base", t, ek, eb] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [{ font: [n, ew, eg] }],
              "font-stretch": [
                {
                  "font-stretch": [
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "normal",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    el,
                    eh,
                  ],
                },
              ],
              "font-family": [{ font: [ej, eh, r] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [{ tracking: [o, ew, eh] }],
              "line-clamp": [{ "line-clamp": [eo, "none", ew, eg] }],
              leading: [{ leading: [s, ...k()] }],
              "list-image": [{ "list-image": ["none", ew, eh] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "list-style-type": [
                { list: ["disc", "decimal", "none", ew, eh] },
              ],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "placeholder-color": [{ placeholder: D() }],
              "text-color": [{ text: D() }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...T(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: [eo, "from-font", "auto", ew, eb] },
              ],
              "text-decoration-color": [{ decoration: D() }],
              "underline-offset": [
                { "underline-offset": [eo, "auto", ew, eh] },
              ],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: k() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    ew,
                    eh,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", ew, eh] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...v(), eN, ex] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "space", "round"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", eC, em] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      linear: [
                        { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                        es,
                        ew,
                        eh,
                      ],
                      radial: ["", ew, eh],
                      conic: [es, ew, eh],
                    },
                    ez,
                    ev,
                  ],
                },
              ],
              "bg-color": [{ bg: D() }],
              "gradient-from-pos": [{ from: O() }],
              "gradient-via-pos": [{ via: O() }],
              "gradient-to-pos": [{ to: O() }],
              "gradient-from": [{ from: D() }],
              "gradient-via": [{ via: D() }],
              "gradient-to": [{ to: D() }],
              rounded: [{ rounded: S() }],
              "rounded-s": [{ "rounded-s": S() }],
              "rounded-e": [{ "rounded-e": S() }],
              "rounded-t": [{ "rounded-t": S() }],
              "rounded-r": [{ "rounded-r": S() }],
              "rounded-b": [{ "rounded-b": S() }],
              "rounded-l": [{ "rounded-l": S() }],
              "rounded-ss": [{ "rounded-ss": S() }],
              "rounded-se": [{ "rounded-se": S() }],
              "rounded-ee": [{ "rounded-ee": S() }],
              "rounded-es": [{ "rounded-es": S() }],
              "rounded-tl": [{ "rounded-tl": S() }],
              "rounded-tr": [{ "rounded-tr": S() }],
              "rounded-br": [{ "rounded-br": S() }],
              "rounded-bl": [{ "rounded-bl": S() }],
              "border-w": [{ border: _() }],
              "border-w-x": [{ "border-x": _() }],
              "border-w-y": [{ "border-y": _() }],
              "border-w-s": [{ "border-s": _() }],
              "border-w-e": [{ "border-e": _() }],
              "border-w-t": [{ "border-t": _() }],
              "border-w-r": [{ "border-r": _() }],
              "border-w-b": [{ "border-b": _() }],
              "border-w-l": [{ "border-l": _() }],
              "divide-x": [{ "divide-x": _() }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": _() }],
              "divide-y-reverse": ["divide-y-reverse"],
              "border-style": [{ border: [...T(), "hidden", "none"] }],
              "divide-style": [{ divide: [...T(), "hidden", "none"] }],
              "border-color": [{ border: D() }],
              "border-color-x": [{ "border-x": D() }],
              "border-color-y": [{ "border-y": D() }],
              "border-color-s": [{ "border-s": D() }],
              "border-color-e": [{ "border-e": D() }],
              "border-color-t": [{ "border-t": D() }],
              "border-color-r": [{ "border-r": D() }],
              "border-color-b": [{ "border-b": D() }],
              "border-color-l": [{ "border-l": D() }],
              "divide-color": [{ divide: D() }],
              "outline-style": [{ outline: [...T(), "none", "hidden"] }],
              "outline-offset": [{ "outline-offset": [eo, ew, eh] }],
              "outline-w": [{ outline: ["", eo, ek, eb] }],
              "outline-color": [{ outline: [e] }],
              shadow: [{ shadow: ["", "none", c, eE, ey] }],
              "shadow-color": [{ shadow: D() }],
              "inset-shadow": [{ "inset-shadow": ["none", ew, eh, u] }],
              "inset-shadow-color": [{ "inset-shadow": D() }],
              "ring-w": [{ ring: _() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: D() }],
              "ring-offset-w": [{ "ring-offset": [eo, eb] }],
              "ring-offset-color": [{ "ring-offset": D() }],
              "inset-ring-w": [{ "inset-ring": _() }],
              "inset-ring-color": [{ "inset-ring": D() }],
              opacity: [{ opacity: [eo, ew, eh] }],
              "mix-blend": [
                { "mix-blend": [...I(), "plus-darker", "plus-lighter"] },
              ],
              "bg-blend": [{ "bg-blend": I() }],
              filter: [{ filter: ["", "none", ew, eh] }],
              blur: [{ blur: $() }],
              brightness: [{ brightness: [eo, ew, eh] }],
              contrast: [{ contrast: [eo, ew, eh] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", p, ew, eh] }],
              grayscale: [{ grayscale: ["", eo, ew, eh] }],
              "hue-rotate": [{ "hue-rotate": [eo, ew, eh] }],
              invert: [{ invert: ["", eo, ew, eh] }],
              saturate: [{ saturate: [eo, ew, eh] }],
              sepia: [{ sepia: ["", eo, ew, eh] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none", ew, eh] }],
              "backdrop-blur": [{ "backdrop-blur": $() }],
              "backdrop-brightness": [{ "backdrop-brightness": [eo, ew, eh] }],
              "backdrop-contrast": [{ "backdrop-contrast": [eo, ew, eh] }],
              "backdrop-grayscale": [
                { "backdrop-grayscale": ["", eo, ew, eh] },
              ],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [eo, ew, eh] }],
              "backdrop-invert": [{ "backdrop-invert": ["", eo, ew, eh] }],
              "backdrop-opacity": [{ "backdrop-opacity": [eo, ew, eh] }],
              "backdrop-saturate": [{ "backdrop-saturate": [eo, ew, eh] }],
              "backdrop-sepia": [{ "backdrop-sepia": ["", eo, ew, eh] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": k() }],
              "border-spacing-x": [{ "border-spacing-x": k() }],
              "border-spacing-y": [{ "border-spacing-y": k() }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "",
                    "all",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    "none",
                    ew,
                    eh,
                  ],
                },
              ],
              "transition-behavior": [{ transition: ["normal", "discrete"] }],
              duration: [{ duration: [eo, "initial", ew, eh] }],
              ease: [{ ease: ["linear", "initial", b, ew, eh] }],
              delay: [{ delay: [eo, ew, eh] }],
              animate: [{ animate: ["none", g, ew, eh] }],
              backface: [{ backface: ["hidden", "visible"] }],
              perspective: [{ perspective: [m, ew, eh] }],
              "perspective-origin": [{ "perspective-origin": L() }],
              rotate: [{ rotate: W() }],
              "rotate-x": [{ "rotate-x": W() }],
              "rotate-y": [{ "rotate-y": W() }],
              "rotate-z": [{ "rotate-z": W() }],
              scale: [{ scale: G() }],
              "scale-x": [{ "scale-x": G() }],
              "scale-y": [{ "scale-y": G() }],
              "scale-z": [{ "scale-z": G() }],
              "scale-3d": ["scale-3d"],
              skew: [{ skew: q() }],
              "skew-x": [{ "skew-x": q() }],
              "skew-y": [{ "skew-y": q() }],
              transform: [{ transform: [ew, eh, "", "none", "gpu", "cpu"] }],
              "transform-origin": [{ origin: L() }],
              "transform-style": [{ transform: ["3d", "flat"] }],
              translate: [{ translate: U() }],
              "translate-x": [{ "translate-x": U() }],
              "translate-y": [{ "translate-y": U() }],
              "translate-z": [{ "translate-z": U() }],
              "translate-none": ["translate-none"],
              accent: [{ accent: D() }],
              appearance: [{ appearance: ["none", "auto"] }],
              "caret-color": [{ caret: D() }],
              "color-scheme": [
                {
                  scheme: [
                    "normal",
                    "dark",
                    "light",
                    "light-dark",
                    "only-dark",
                    "only-light",
                  ],
                },
              ],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    ew,
                    eh,
                  ],
                },
              ],
              "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
              "pointer-events": [{ "pointer-events": ["auto", "none"] }],
              resize: [{ resize: ["none", "", "y", "x"] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": k() }],
              "scroll-mx": [{ "scroll-mx": k() }],
              "scroll-my": [{ "scroll-my": k() }],
              "scroll-ms": [{ "scroll-ms": k() }],
              "scroll-me": [{ "scroll-me": k() }],
              "scroll-mt": [{ "scroll-mt": k() }],
              "scroll-mr": [{ "scroll-mr": k() }],
              "scroll-mb": [{ "scroll-mb": k() }],
              "scroll-ml": [{ "scroll-ml": k() }],
              "scroll-p": [{ "scroll-p": k() }],
              "scroll-px": [{ "scroll-px": k() }],
              "scroll-py": [{ "scroll-py": k() }],
              "scroll-ps": [{ "scroll-ps": k() }],
              "scroll-pe": [{ "scroll-pe": k() }],
              "scroll-pt": [{ "scroll-pt": k() }],
              "scroll-pr": [{ "scroll-pr": k() }],
              "scroll-pb": [{ "scroll-pb": k() }],
              "scroll-pl": [{ "scroll-pl": k() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": [
                    "auto",
                    "scroll",
                    "contents",
                    "transform",
                    ew,
                    eh,
                  ],
                },
              ],
              fill: [{ fill: ["none", ...D()] }],
              "stroke-w": [{ stroke: [eo, ek, eb, eg] }],
              stroke: [{ stroke: ["none", ...D()] }],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              translate: ["translate-x", "translate-y", "translate-none"],
              "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z",
              ],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            orderSensitiveModifiers: [
              "before",
              "after",
              "placeholder",
              "file",
              "marker",
              "selection",
              "first-line",
              "first-letter",
              "backdrop",
              "*",
              "**",
            ],
          };
        });
        function eW(...e) {
          return eL(
            (function () {
              for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++)
                (e = arguments[t]) &&
                  (r = (function e(r) {
                    var t,
                      n,
                      o = "";
                    if ("string" == typeof r || "number" == typeof r) o += r;
                    else if ("object" == typeof r) {
                      if (Array.isArray(r)) {
                        var s = r.length;
                        for (t = 0; t < s; t++)
                          r[t] && (n = e(r[t])) && (o && (o += " "), (o += n));
                      } else for (n in r) r[n] && (o && (o += " "), (o += n));
                    }
                    return o;
                  })(e)) &&
                  (n && (n += " "), (n += r));
              return n;
            })(e)
          );
        }
        let eG = o.forwardRef(({ className: e, ...r }, t) =>
          (0, n.jsx)(j, {
            ref: t,
            className: eW(
              "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
              e
            ),
            ...r,
            children: (0, n.jsx)(C, {
              className: eW("flex items-center justify-center text-current"),
              children: (0, n.jsx)(R, { className: "h-4 w-4" }),
            }),
          })
        );
        eG.displayName = j.displayName;
      },
      78086: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => v });
        var n = t(62740),
          o = t(51929),
          s = t(9879),
          l = t(35635),
          a = t(59607),
          i = t.n(a),
          d = t(38537),
          c = t(19935),
          u = t(32830),
          p = t(56976);
        let f = (0, p.A)("ChevronRight", [
            ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
          ]),
          m = (0, p.A)("ScrollText", [
            ["path", { d: "M15 12h-5", key: "r7krc0" }],
            ["path", { d: "M15 8h-5", key: "1khuty" }],
            ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
            [
              "path",
              {
                d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
                key: "1ph1d7",
              },
            ],
          ]),
          h = (0, p.A)("Waves", [
            [
              "path",
              {
                d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
                key: "knzxuh",
              },
            ],
            [
              "path",
              {
                d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
                key: "2jd2cc",
              },
            ],
            [
              "path",
              {
                d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
                key: "rd2r6e",
              },
            ],
          ]),
          b = (0, p.A)("Award", [
            [
              "path",
              {
                d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
                key: "1yiouv",
              },
            ],
            ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
          ]),
          g = (0, p.A)("Settings", [
            [
              "path",
              {
                d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
                key: "1qme2f",
              },
            ],
            ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ]);
        var x = t(99580);
        function v() {
          return (0, n.jsxs)("main", {
            className: "min-h-screen flex flex-col",
            children: [
              (0, n.jsx)(o.default, {}),
              (0, n.jsx)(x.default, {
                imageUrl: "/images/resourcesbanner.webp",
                videoUrl: "/images/resources-banner.mp4",
                heading: "",
                paragraph: "",
              }),
              (0, n.jsx)("section", {
                className: "py-16 md:px-16 px-8",
                children: (0, n.jsx)("div", {
                  className: "container mx-auto px-4",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col md:flex-row gap-8",
                    children: [
                      (0, n.jsx)("div", {
                        className: "w-full md:w-64 flex-shrink-0",
                        children: (0, n.jsxs)("div", {
                          className: "bg-[#16A34A] p-6 rounded-lg",
                          children: [
                            (0, n.jsx)("h2", {
                              className: "font-bold text-lg mb-4",
                              children: "Categories",
                            }),
                            (0, n.jsx)("ul", {
                              className: "space-y-2",
                              children: [
                                "Athlete Support",
                                "Community Engagement",
                                "Physical Education",
                                "Sports Events",
                              ].map((e, r) =>
                                (0, n.jsx)(
                                  "li",
                                  {
                                    children: (0, n.jsx)(i(), {
                                      href: "#",
                                      className: "hover:underline",
                                      children: e,
                                    }),
                                  },
                                  r
                                )
                              ),
                            }),
                            (0, n.jsx)("h2", {
                              className: "font-bold text-lg mt-8 mb-4",
                              children: "Filters",
                            }),
                            (0, n.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, n.jsxs)("label", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, n.jsx)(u.Checkbox, { id: "recent" }),
                                    (0, n.jsx)("span", { children: "Recent" }),
                                  ],
                                }),
                                (0, n.jsxs)("label", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, n.jsx)(u.Checkbox, { id: "popular" }),
                                    (0, n.jsx)("span", { children: "Popular" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                              (0, n.jsxs)(c.Zp, {
                                className: "overflow-hidden",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "relative h-48",
                                    children: (0, n.jsx)(l.default, {
                                      src: "/images/4243ea019ae45c91edd4fc7bc74bae3c.png",
                                      alt: "Runner at sunset",
                                      fill: !0,
                                      className: "object-cover",
                                    }),
                                  }),
                                  (0, n.jsxs)(c.Wu, {
                                    className: "p-6",
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children:
                                          "Training & Fitness Resources",
                                      }),
                                      (0, n.jsx)("p", {
                                        className: "text-gray-600 mb-4",
                                        children:
                                          "Explore a variety of training programs designed to enhance athletic performance and wellness.",
                                      }),
                                      (0, n.jsxs)(d.$, {
                                        variant: "link",
                                        className: "p-0",
                                        children: [
                                          "Learn More ",
                                          (0, n.jsx)(f, {
                                            className: "h-4 w-4 ml-1",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(c.Zp, {
                                className: "overflow-hidden",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "relative h-48",
                                    children: (0, n.jsx)(l.default, {
                                      src: "/images/46f59acc05e30e01d3b90c82d79adcf1.png",
                                      alt: "Gym equipment",
                                      fill: !0,
                                      className: "object-cover",
                                    }),
                                  }),
                                  (0, n.jsxs)(c.Wu, {
                                    className: "p-6",
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children:
                                          "Equipment & Sponsorship Assistance",
                                      }),
                                      (0, n.jsx)("p", {
                                        className: "text-gray-600 mb-4",
                                        children:
                                          "Get help with acquiring equipment and securing sponsorship for your sports activities.",
                                      }),
                                      (0, n.jsxs)(d.$, {
                                        variant: "link",
                                        className: "p-0",
                                        children: [
                                          "Learn More ",
                                          (0, n.jsx)(f, {
                                            className: "h-4 w-4 ml-1",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(c.Zp, {
                                className: "overflow-hidden",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "relative h-48",
                                    children: (0, n.jsx)(l.default, {
                                      src: "/images/9dc6bed21dc874070eea4c2bf77c3f01.png",
                                      alt: "Nutritionist consultation",
                                      fill: !0,
                                      className: "object-cover",
                                    }),
                                  }),
                                  (0, n.jsxs)(c.Wu, {
                                    className: "p-6",
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children: "Health & Wellness Support",
                                      }),
                                      (0, n.jsx)("p", {
                                        className: "text-gray-600 mb-4",
                                        children:
                                          "Find resources and support for maintaining optimal health and wellness as an athlete.",
                                      }),
                                      (0, n.jsxs)(d.$, {
                                        variant: "link",
                                        className: "p-0",
                                        children: [
                                          "Learn More ",
                                          (0, n.jsx)(f, {
                                            className: "h-4 w-4 ml-1",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(c.Zp, {
                                className: "overflow-hidden",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "relative h-48",
                                    children: (0, n.jsx)(l.default, {
                                      src: "/images/c0df94c2b54808754c37c83123efb985.png",
                                      alt: "Group of diverse people with certificates",
                                      fill: !0,
                                      className: "object-cover",
                                    }),
                                  }),
                                  (0, n.jsxs)(c.Wu, {
                                    className: "p-6",
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children:
                                          "Scholarships & Funding Opportunities",
                                      }),
                                      (0, n.jsx)("p", {
                                        className: "text-gray-600 mb-4",
                                        children:
                                          "Access information on available scholarships to support your sports education journey.",
                                      }),
                                      (0, n.jsxs)(d.$, {
                                        variant: "link",
                                        className: "p-0",
                                        children: [
                                          "Learn More ",
                                          (0, n.jsx)(f, {
                                            className: "h-4 w-4 ml-1",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex flex-col md:flex-row",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "md:mt-12",
                                children: [
                                  (0, n.jsx)("h2", {
                                    className: "text-2xl font-bold mb-6",
                                    children: "Reading",
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "flex md:gap-6",
                                    children: [
                                      { icon: m, label: "Lorem ipsum" },
                                      { icon: h, label: "Listening to" },
                                      { icon: b, label: "Sports" },
                                      { icon: g, label: "Skill" },
                                    ].map((e, r) =>
                                      (0, n.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "flex flex-col items-center justify-center bg-[#16A34A] rounded-full w-24 h-24 p-4",
                                          children: [
                                            (0, n.jsx)(e.icon, {
                                              className: "h-8 w-8 mb-2",
                                            }),
                                            (0, n.jsx)("span", {
                                              className: "text-sm text-center",
                                              children: e.label,
                                            }),
                                          ],
                                        },
                                        r
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: "mt-12 md:ml-12",
                                children: [
                                  (0, n.jsx)("h2", {
                                    className: "text-2xl font-bold mb-6",
                                    children: "Training Programs",
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "flex gap-4",
                                    children: [
                                      "/images/training-1.png",
                                      "/images/training-2.png",
                                      "/images/training-3.png",
                                      "/images/training-4.png",
                                    ].map((e, r) =>
                                      (0, n.jsx)(
                                        "div",
                                        {
                                          className:
                                            "relative w-24 h-24 rounded-lg overflow-hidden",
                                          children: (0, n.jsx)(l.default, {
                                            src: e || "/placeholder.svg",
                                            alt: `Training ${r + 1}`,
                                            fill: !0,
                                            className: "object-cover",
                                          }),
                                        },
                                        r
                                      )
                                    ),
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
              }),
              (0, n.jsx)(s.default, {}),
            ],
          });
        }
      },
      99580: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => n });
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
      9879: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => n });
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
      51929: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => n });
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
      38537: (e, r, t) => {
        "use strict";
        t.d(r, { $: () => d });
        var n = t(62740),
          o = t(76301),
          s = t(15225),
          l = t(67699),
          a = t(55946);
        let i = (0, l.F)(
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
          d = o.forwardRef(
            (
              { className: e, variant: r, size: t, asChild: o = !1, ...l },
              d
            ) => {
              let c = o ? s.DX : "button";
              return (0, n.jsx)(c, {
                className: (0, a.cn)(i({ variant: r, size: t, className: e })),
                ref: d,
                ...l,
              });
            }
          );
        d.displayName = "Button";
      },
      19935: (e, r, t) => {
        "use strict";
        t.d(r, { Wu: () => a, Zp: () => l });
        var n = t(62740),
          o = t(76301),
          s = t(55946);
        let l = o.forwardRef(({ className: e, ...r }, t) =>
          (0, n.jsx)("div", {
            ref: t,
            className: (0, s.cn)(
              "rounded-xl border bg-card text-card-foreground shadow",
              e
            ),
            ...r,
          })
        );
        (l.displayName = "Card"),
          (o.forwardRef(({ className: e, ...r }, t) =>
            (0, n.jsx)("div", {
              ref: t,
              className: (0, s.cn)("flex flex-col space-y-1.5 p-6", e),
              ...r,
            })
          ).displayName = "CardHeader"),
          (o.forwardRef(({ className: e, ...r }, t) =>
            (0, n.jsx)("h3", {
              ref: t,
              className: (0, s.cn)(
                "font-semibold leading-none tracking-tight",
                e
              ),
              ...r,
            })
          ).displayName = "CardTitle"),
          (o.forwardRef(({ className: e, ...r }, t) =>
            (0, n.jsx)("p", {
              ref: t,
              className: (0, s.cn)("text-sm text-muted-foreground", e),
              ...r,
            })
          ).displayName = "CardDescription");
        let a = o.forwardRef(({ className: e, ...r }, t) =>
          (0, n.jsx)("div", {
            ref: t,
            className: (0, s.cn)("p-6 pt-0", e),
            ...r,
          })
        );
        (a.displayName = "CardContent"),
          (o.forwardRef(({ className: e, ...r }, t) =>
            (0, n.jsx)("div", {
              ref: t,
              className: (0, s.cn)("flex items-center p-6 pt-0", e),
              ...r,
            })
          ).displayName = "CardFooter");
      },
      32830: (e, r, t) => {
        "use strict";
        t.d(r, { Checkbox: () => n });
        let n = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call Checkbox() from the server but Checkbox is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "D:\\Development\\bsf-sureshdesign\\components\\ui\\checkbox.tsx",
          "Checkbox"
        );
      },
      55946: (e, r, t) => {
        "use strict";
        t.d(r, { cn: () => s });
        var n = t(13673),
          o = t(47317);
        function s(...e) {
          return (0, o.QP)((0, n.$)(e));
        }
      },
      59607: (e, r, t) => {
        let { createProxy: n } = t(73439);
        e.exports = n(
          "D:\\Development\\bsf-sureshdesign\\node_modules\\next\\dist\\client\\app-dir\\link.js"
        );
      },
      56976: (e, r, t) => {
        "use strict";
        t.d(r, { A: () => i });
        var n = t(76301);
        let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
          s = (...e) =>
            e
              .filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r)
              .join(" ")
              .trim();
        var l = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
        let a = (0, n.forwardRef)(
            (
              {
                color: e = "currentColor",
                size: r = 24,
                strokeWidth: t = 2,
                absoluteStrokeWidth: o,
                className: a = "",
                children: i,
                iconNode: d,
                ...c
              },
              u
            ) =>
              (0, n.createElement)(
                "svg",
                {
                  ref: u,
                  ...l,
                  width: r,
                  height: r,
                  stroke: e,
                  strokeWidth: o ? (24 * Number(t)) / Number(r) : t,
                  className: s("lucide", a),
                  ...c,
                },
                [
                  ...d.map(([e, r]) => (0, n.createElement)(e, r)),
                  ...(Array.isArray(i) ? i : [i]),
                ]
              )
          ),
          i = (e, r) => {
            let t = (0, n.forwardRef)(({ className: t, ...l }, i) =>
              (0, n.createElement)(a, {
                ref: i,
                iconNode: r,
                className: s(`lucide-${o(e)}`, t),
                ...l,
              })
            );
            return (t.displayName = `${e}`), t;
          };
      },
    });
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    n = r.X(0, [638, 776, 392, 635, 391, 746], () => t(20664));
  module.exports = n;
})();
