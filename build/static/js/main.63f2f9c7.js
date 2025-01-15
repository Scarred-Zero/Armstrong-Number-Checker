/*! For license information please see main.63f2f9c7.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      4: (e, t, n) => {
        var r = n(853),
          a = n(43),
          l = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        var u = Symbol.for("react.element"),
          s = Symbol.for("react.transitional.element"),
          c = Symbol.for("react.portal"),
          f = Symbol.for("react.fragment"),
          d = Symbol.for("react.strict_mode"),
          p = Symbol.for("react.profiler"),
          m = Symbol.for("react.provider"),
          h = Symbol.for("react.consumer"),
          g = Symbol.for("react.context"),
          v = Symbol.for("react.forward_ref"),
          y = Symbol.for("react.suspense"),
          b = Symbol.for("react.suspense_list"),
          w = Symbol.for("react.memo"),
          k = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var S = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var x = Symbol.for("react.memo_cache_sentinel"),
          _ = Symbol.iterator;
        function E(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (_ && e[_]) || e["@@iterator"])
            ? e
            : null;
        }
        var C = Symbol.for("react.client.reference");
        function N(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === C ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case f:
              return "Fragment";
            case c:
              return "Portal";
            case p:
              return "Profiler";
            case d:
              return "StrictMode";
            case y:
              return "Suspense";
            case b:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return (e.displayName || "Context") + ".Provider";
              case h:
                return (e._context.displayName || "Context") + ".Consumer";
              case v:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case w:
                return null !== (t = e.displayName || null)
                  ? t
                  : N(e.type) || "Memo";
              case k:
                (t = e._payload), (e = e._init);
                try {
                  return N(e(t));
                } catch (n) {}
            }
          return null;
        }
        var P,
          z,
          T = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          j = Object.assign;
        function L(e) {
          if (void 0 === P)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (P = (t && t[1]) || ""),
                (z =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + P + e + z;
        }
        var R = !1;
        function O(e, t) {
          if (!e || R) return "";
          R = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (l) {
                        r = l;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (o) {
                      r = o;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (i) {
                  if (i && r && "string" === typeof i.stack)
                    return [i.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var l = r.DetermineComponentFrameRoot(),
              o = l[0],
              i = l[1];
            if (o && i) {
              var u = o.split("\n"),
                s = i.split("\n");
              for (
                a = r = 0;
                r < u.length && !u[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                a < s.length && !s[a].includes("DetermineComponentFrameRoot");

              )
                a++;
              if (r === u.length || a === s.length)
                for (
                  r = u.length - 1, a = s.length - 1;
                  1 <= r && 0 <= a && u[r] !== s[a];

                )
                  a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (u[r] !== s[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || u[r] !== s[a])) {
                        var c = "\n" + u[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            (R = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? L(n) : "";
        }
        function A(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return L(e.type);
            case 16:
              return L("Lazy");
            case 13:
              return L("Suspense");
            case 19:
              return L("SuspenseList");
            case 0:
            case 15:
              return (e = O(e.type, !1));
            case 11:
              return (e = O(e.type.render, !1));
            case 1:
              return (e = O(e.type, !0));
            default:
              return "";
          }
        }
        function F(e) {
          try {
            var t = "";
            do {
              (t += A(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function D(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function M(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function I(e) {
          if (D(e) !== e) throw Error(o(188));
        }
        function U(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = U(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var H = Array.isArray,
          $ = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          B = { pending: !1, data: null, method: null, action: null },
          V = [],
          W = -1;
        function q(e) {
          return { current: e };
        }
        function Q(e) {
          0 > W || ((e.current = V[W]), (V[W] = null), W--);
        }
        function K(e, t) {
          W++, (V[W] = e.current), (e.current = t);
        }
        var Y = q(null),
          X = q(null),
          G = q(null),
          J = q(null);
        function Z(e, t) {
          switch ((K(G, t), K(X, e), K(Y, null), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) && (t = t.namespaceURI) ? Xc(t) : 0;
              break;
            default:
              if (
                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                (e = e.namespaceURI))
              )
                t = Gc((e = Xc(e)), t);
              else
                switch (t) {
                  case "svg":
                    t = 1;
                    break;
                  case "math":
                    t = 2;
                    break;
                  default:
                    t = 0;
                }
          }
          Q(Y), K(Y, t);
        }
        function ee() {
          Q(Y), Q(X), Q(G);
        }
        function te(e) {
          null !== e.memoizedState && K(J, e);
          var t = Y.current,
            n = Gc(t, e.type);
          t !== n && (K(X, e), K(Y, n));
        }
        function ne(e) {
          X.current === e && (Q(Y), Q(X)),
            J.current === e && (Q(J), (Df._currentValue = B));
        }
        var re = Object.prototype.hasOwnProperty,
          ae = r.unstable_scheduleCallback,
          le = r.unstable_cancelCallback,
          oe = r.unstable_shouldYield,
          ie = r.unstable_requestPaint,
          ue = r.unstable_now,
          se = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          fe = r.unstable_UserBlockingPriority,
          de = r.unstable_NormalPriority,
          pe = r.unstable_LowPriority,
          me = r.unstable_IdlePriority,
          he = r.log,
          ge = r.unstable_setDisableYieldValue,
          ve = null,
          ye = null;
        function be(e) {
          if (
            ("function" === typeof he && ge(e),
            ye && "function" === typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ve, e);
            } catch (t) {}
        }
        var we = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ke(e) / Se) | 0)) | 0;
              },
          ke = Math.log,
          Se = Math.LN2;
        var xe = 128,
          _e = 4194304;
        function Ee(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Ce(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = e.warmLanes;
          e = 0 !== e.finishedLanes;
          var i = 134217727 & n;
          return (
            0 !== i
              ? 0 !== (n = i & ~a)
                ? (r = Ee(n))
                : 0 !== (l &= i)
                ? (r = Ee(l))
                : e || (0 !== (o = i & ~o) && (r = Ee(o)))
              : 0 !== (i = n & ~a)
              ? (r = Ee(i))
              : 0 !== l
              ? (r = Ee(l))
              : e || (0 !== (o = n & ~o) && (r = Ee(o))),
            0 === r
              ? 0
              : 0 !== t &&
                t !== r &&
                0 === (t & a) &&
                ((a = r & -r) >= (o = t & -t) ||
                  (32 === a && 0 !== (4194176 & o)))
              ? t
              : r
          );
        }
        function Ne(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Pe(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
              return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ze() {
          var e = xe;
          return 0 === (4194176 & (xe <<= 1)) && (xe = 128), e;
        }
        function Te() {
          var e = _e;
          return 0 === (62914560 & (_e <<= 1)) && (_e = 4194304), e;
        }
        function je(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Le(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function Re(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - we(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194218 & n));
        }
        function Oe(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - we(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        function Ae(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function Fe() {
          var e = $.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Jf(e.type);
        }
        var De = Math.random().toString(36).slice(2),
          Me = "__reactFiber$" + De,
          Ie = "__reactProps$" + De,
          Ue = "__reactContainer$" + De,
          He = "__reactEvents$" + De,
          $e = "__reactListeners$" + De,
          Be = "__reactHandles$" + De,
          Ve = "__reactResources$" + De,
          We = "__reactMarker$" + De;
        function qe(e) {
          delete e[Me], delete e[Ie], delete e[He], delete e[$e], delete e[Be];
        }
        function Qe(e) {
          var t = e[Me];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Ue] || n[Me])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sf(e); null !== e; ) {
                  if ((n = e[Me])) return n;
                  e = sf(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ke(e) {
          if ((e = e[Me] || e[Ue])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Ye(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(o(33));
        }
        function Xe(e) {
          var t = e[Ve];
          return (
            t ||
              (t = e[Ve] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function Ge(e) {
          e[We] = !0;
        }
        var Je = new Set(),
          Ze = {};
        function et(e, t) {
          tt(e, t), tt(e + "Capture", t);
        }
        function tt(e, t) {
          for (Ze[e] = t, e = 0; e < t.length; e++) Je.add(t[e]);
        }
        var nt = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          rt = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          at = {},
          lt = {};
        function ot(e, t, n) {
          if (
            ((a = t),
            re.call(lt, a) ||
              (!re.call(at, a) &&
                (rt.test(a) ? (lt[a] = !0) : ((at[a] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var a;
        }
        function it(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function ut(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function st(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function ft(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function dt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function pt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var mt = /[\n"\\]/g;
        function ht(e) {
          return e.replace(mt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, a, l, o, i) {
          (e.name = ""),
            null != o &&
            "function" !== typeof o &&
            "symbol" !== typeof o &&
            "boolean" !== typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != t
              ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + st(t))
                : e.value !== "" + st(t) && (e.value = "" + st(t))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != t
              ? yt(e, o, st(t))
              : null != n
              ? yt(e, o, st(n))
              : null != r && e.removeAttribute("value"),
            null == a && null != l && (e.defaultChecked = !!l),
            null != a &&
              (e.checked =
                a && "function" !== typeof a && "symbol" !== typeof a),
            null != i &&
            "function" !== typeof i &&
            "symbol" !== typeof i &&
            "boolean" !== typeof i
              ? (e.name = "" + st(i))
              : e.removeAttribute("name");
        }
        function vt(e, t, n, r, a, l, o, i) {
          if (
            (null != l &&
              "function" !== typeof l &&
              "symbol" !== typeof l &&
              "boolean" !== typeof l &&
              (e.type = l),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== l && "reset" !== l) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + st(n) : ""),
              (t = null != t ? "" + st(t) : n),
              i || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : a) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = i ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.name = o);
        }
        function yt(e, t, n) {
          ("number" === t && pt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + st(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function wt(e, t, n) {
          null == t ||
          ((t = "" + st(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + st(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function kt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(o(92));
              if (H(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = st(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var xt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function _t(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || xt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Et(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(o(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var a in t)
              (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && _t(e, a, r);
          } else for (var l in t) t.hasOwnProperty(l) && _t(e, l, t[l]);
        }
        function Ct(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Nt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Pt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function zt(e) {
          return Pt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Tt = null;
        function jt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Lt = null,
          Rt = null;
        function Ot(e) {
          var t = Ke(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ie] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + ht("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[Ie] || null;
                      if (!a) throw Error(o(90));
                      gt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && dt(r);
                }
                break e;
              case "textarea":
                wt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var At = !1;
        function Ft(e, t, n) {
          if (At) return e(t, n);
          At = !0;
          try {
            return e(t);
          } finally {
            if (
              ((At = !1),
              (null !== Lt || null !== Rt) &&
                (Ms(), Lt && ((t = Lt), (e = Rt), (Rt = Lt = null), Ot(t), e)))
            )
              for (t = 0; t < e.length; t++) Ot(e[t]);
          }
        }
        function Dt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ie] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Mt = !1;
        if (nt)
          try {
            var It = {};
            Object.defineProperty(It, "passive", {
              get: function () {
                Mt = !0;
              },
            }),
              window.addEventListener("test", It, It),
              window.removeEventListener("test", It, It);
          } catch (Sd) {
            Mt = !1;
          }
        var Ut = null,
          Ht = null,
          $t = null;
        function Bt() {
          if ($t) return $t;
          var e,
            t,
            n = Ht,
            r = n.length,
            a = "value" in Ut ? Ut.value : Ut.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Vt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Wt() {
          return !0;
        }
        function qt() {
          return !1;
        }
        function Qt(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? Wt
                : qt),
              (this.isPropagationStopped = qt),
              this
            );
          }
          return (
            j(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Wt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Wt));
              },
              persist: function () {},
              isPersistent: Wt,
            }),
            t
          );
        }
        var Kt,
          Yt,
          Xt,
          Gt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Jt = Qt(Gt),
          Zt = j({}, Gt, { view: 0, detail: 0 }),
          en = Qt(Zt),
          tn = j({}, Zt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: pn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Xt &&
                    (Xt && "mousemove" === e.type
                      ? ((Kt = e.screenX - Xt.screenX),
                        (Yt = e.screenY - Xt.screenY))
                      : (Yt = Kt = 0),
                    (Xt = e)),
                  Kt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Yt;
            },
          }),
          nn = Qt(tn),
          rn = Qt(j({}, tn, { dataTransfer: 0 })),
          an = Qt(j({}, Zt, { relatedTarget: 0 })),
          ln = Qt(
            j({}, Gt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          on = Qt(
            j({}, Gt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          un = Qt(j({}, Gt, { data: 0 })),
          sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          fn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function dn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = fn[e]) && !!t[e];
        }
        function pn() {
          return dn;
        }
        var mn = Qt(
            j({}, Zt, {
              key: function (e) {
                if (e.key) {
                  var t = sn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Vt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? cn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: pn,
              charCode: function (e) {
                return "keypress" === e.type ? Vt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Vt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          hn = Qt(
            j({}, tn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          gn = Qt(
            j({}, Zt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: pn,
            })
          ),
          vn = Qt(
            j({}, Gt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = Qt(
            j({}, tn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          bn = Qt(j({}, Gt, { newState: 0, oldState: 0 })),
          wn = [9, 13, 27, 32],
          kn = nt && "CompositionEvent" in window,
          Sn = null;
        nt && "documentMode" in document && (Sn = document.documentMode);
        var xn = nt && "TextEvent" in window && !Sn,
          _n = nt && (!kn || (Sn && 8 < Sn && 11 >= Sn)),
          En = String.fromCharCode(32),
          Cn = !1;
        function Nn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== wn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Pn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var zn = !1;
        var Tn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function jn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Tn[e.type] : "textarea" === t;
        }
        function Ln(e, t, n, r) {
          Lt ? (Rt ? Rt.push(r) : (Rt = [r])) : (Lt = r),
            0 < (t = Fc(t, "onChange")).length &&
              ((n = new Jt("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Rn = null,
          On = null;
        function An(e) {
          Pc(e, 0);
        }
        function Fn(e) {
          if (dt(Ye(e))) return e;
        }
        function Dn(e, t) {
          if ("change" === e) return t;
        }
        var Mn = !1;
        if (nt) {
          var In;
          if (nt) {
            var Un = "oninput" in document;
            if (!Un) {
              var Hn = document.createElement("div");
              Hn.setAttribute("oninput", "return;"),
                (Un = "function" === typeof Hn.oninput);
            }
            In = Un;
          } else In = !1;
          Mn = In && (!document.documentMode || 9 < document.documentMode);
        }
        function $n() {
          Rn && (Rn.detachEvent("onpropertychange", Bn), (On = Rn = null));
        }
        function Bn(e) {
          if ("value" === e.propertyName && Fn(On)) {
            var t = [];
            Ln(t, On, e, jt(e)), Ft(An, t);
          }
        }
        function Vn(e, t, n) {
          "focusin" === e
            ? ($n(), (On = n), (Rn = t).attachEvent("onpropertychange", Bn))
            : "focusout" === e && $n();
        }
        function Wn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Fn(On);
        }
        function qn(e, t) {
          if ("click" === e) return Fn(t);
        }
        function Qn(e, t) {
          if ("input" === e || "change" === e) return Fn(t);
        }
        var Kn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Yn(e, t) {
          if (Kn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!re.call(t, a) || !Kn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function Xn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Gn(e, t) {
          var n,
            r = Xn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Xn(r);
          }
        }
        function Jn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Jn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function Zn(e) {
          for (
            var t = pt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function er(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function tr(e, t) {
          var n = Zn(t);
          t = e.focusedElem;
          var r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            Jn(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && er(t))
              if (
                ((e = r.start),
                void 0 === (n = r.end) && (n = e),
                "selectionStart" in t)
              )
                (t.selectionStart = e),
                  (t.selectionEnd = Math.min(n, t.value.length));
              else if (
                (n =
                  ((e = t.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var a = t.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !n.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = Gn(t, l));
                var o = Gn(t, r);
                a &&
                  o &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== a.node ||
                    n.anchorOffset !== a.offset ||
                    n.focusNode !== o.node ||
                    n.focusOffset !== o.offset) &&
                  ((e = e.createRange()).setStart(a.node, a.offset),
                  n.removeAllRanges(),
                  l > r
                    ? (n.addRange(e), n.extend(o.node, o.offset))
                    : (e.setEnd(o.node, o.offset), n.addRange(e)));
              }
            for (e = [], n = t; (n = n.parentNode); )
              1 === n.nodeType &&
                e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < e.length;
              t++
            )
              ((n = e[t]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var nr =
            nt && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ar = null,
          lr = null,
          or = !1;
        function ir(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          or ||
            null == rr ||
            rr !== pt(r) ||
            ("selectionStart" in (r = rr) && er(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (lr && Yn(lr, r)) ||
              ((lr = r),
              0 < (r = Fc(ar, "onSelect")).length &&
                ((t = new Jt("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = rr))));
        }
        function ur(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var sr = {
            animationend: ur("Animation", "AnimationEnd"),
            animationiteration: ur("Animation", "AnimationIteration"),
            animationstart: ur("Animation", "AnimationStart"),
            transitionrun: ur("Transition", "TransitionRun"),
            transitionstart: ur("Transition", "TransitionStart"),
            transitioncancel: ur("Transition", "TransitionCancel"),
            transitionend: ur("Transition", "TransitionEnd"),
          },
          cr = {},
          fr = {};
        function dr(e) {
          if (cr[e]) return cr[e];
          if (!sr[e]) return e;
          var t,
            n = sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in fr) return (cr[e] = n[t]);
          return e;
        }
        nt &&
          ((fr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete sr.animationend.animation,
            delete sr.animationiteration.animation,
            delete sr.animationstart.animation),
          "TransitionEvent" in window || delete sr.transitionend.transition);
        var pr = dr("animationend"),
          mr = dr("animationiteration"),
          hr = dr("animationstart"),
          gr = dr("transitionrun"),
          vr = dr("transitionstart"),
          yr = dr("transitioncancel"),
          br = dr("transitionend"),
          wr = new Map(),
          kr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
              " "
            );
        function Sr(e, t) {
          wr.set(e, t), et(t, [e]);
        }
        var xr = [],
          _r = 0,
          Er = 0;
        function Cr() {
          for (var e = _r, t = (Er = _r = 0); t < e; ) {
            var n = xr[t];
            xr[t++] = null;
            var r = xr[t];
            xr[t++] = null;
            var a = xr[t];
            xr[t++] = null;
            var l = xr[t];
            if (((xr[t++] = null), null !== r && null !== a)) {
              var o = r.pending;
              null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
                (r.pending = a);
            }
            0 !== l && Tr(n, a, l);
          }
        }
        function Nr(e, t, n, r) {
          (xr[_r++] = e),
            (xr[_r++] = t),
            (xr[_r++] = n),
            (xr[_r++] = r),
            (Er |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Pr(e, t, n, r) {
          return Nr(e, t, n, r), jr(e);
        }
        function zr(e, t) {
          return Nr(e, null, null, t), jr(e);
        }
        function Tr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, l = e.return; null !== l; )
            (l.childLanes |= n),
              null !== (r = l.alternate) && (r.childLanes |= n),
              22 === l.tag &&
                (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)),
              (e = l),
              (l = l.return);
          a &&
            null !== t &&
            3 === e.tag &&
            ((l = e.stateNode),
            (a = 31 - we(n)),
            null === (e = (l = l.hiddenUpdates)[a]) ? (l[a] = [t]) : e.push(t),
            (t.lane = 536870912 | n));
        }
        function jr(e) {
          if (50 < Ps) throw ((Ps = 0), (zs = null), Error(o(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Lr = {},
          Rr = new WeakMap();
        function Or(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = Rr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: F(t) }), Rr.set(e, t), t);
          }
          return { value: e, source: t, stack: F(t) };
        }
        var Ar = [],
          Fr = 0,
          Dr = null,
          Mr = 0,
          Ir = [],
          Ur = 0,
          Hr = null,
          $r = 1,
          Br = "";
        function Vr(e, t) {
          (Ar[Fr++] = Mr), (Ar[Fr++] = Dr), (Dr = e), (Mr = t);
        }
        function Wr(e, t, n) {
          (Ir[Ur++] = $r), (Ir[Ur++] = Br), (Ir[Ur++] = Hr), (Hr = e);
          var r = $r;
          e = Br;
          var a = 32 - we(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - we(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              ($r = (1 << (32 - we(t) + a)) | (n << a) | r),
              (Br = l + e);
          } else ($r = (1 << l) | (n << a) | r), (Br = e);
        }
        function qr(e) {
          null !== e.return && (Vr(e, 1), Wr(e, 1, 0));
        }
        function Qr(e) {
          for (; e === Dr; )
            (Dr = Ar[--Fr]), (Ar[Fr] = null), (Mr = Ar[--Fr]), (Ar[Fr] = null);
          for (; e === Hr; )
            (Hr = Ir[--Ur]),
              (Ir[Ur] = null),
              (Br = Ir[--Ur]),
              (Ir[Ur] = null),
              ($r = Ir[--Ur]),
              (Ir[Ur] = null);
        }
        var Kr = null,
          Yr = null,
          Xr = !1,
          Gr = null,
          Jr = !1,
          Zr = Error(o(519));
        function ea(e) {
          throw (la(Or(Error(o(418, "")), e)), Zr);
        }
        function ta(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Me] = e), (t[Ie] = r), n)) {
            case "dialog":
              zc("cancel", t), zc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              zc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Cc.length; n++) zc(Cc[n], t);
              break;
            case "source":
              zc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              zc("error", t), zc("load", t);
              break;
            case "details":
              zc("toggle", t);
              break;
            case "input":
              zc("invalid", t),
                vt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                ft(t);
              break;
            case "select":
              zc("invalid", t);
              break;
            case "textarea":
              zc("invalid", t),
                kt(t, r.value, r.defaultValue, r.children),
                ft(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          $c(t.textContent, n)
            ? (null != r.popover && (zc("beforetoggle", t), zc("toggle", t)),
              null != r.onScroll && zc("scroll", t),
              null != r.onScrollEnd && zc("scrollend", t),
              null != r.onClick && (t.onclick = Bc),
              (t = !0))
            : (t = !1),
            t || ea(e);
        }
        function na(e) {
          for (Kr = e.return; Kr; )
            switch (Kr.tag) {
              case 3:
              case 27:
                return void (Jr = !0);
              case 5:
              case 13:
                return void (Jr = !1);
              default:
                Kr = Kr.return;
            }
        }
        function ra(e) {
          if (e !== Kr) return !1;
          if (!Xr) return na(e), (Xr = !0), !1;
          var t,
            n = !1;
          if (
            ((t = 3 !== e.tag && 27 !== e.tag) &&
              ((t = 5 === e.tag) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  Jc(e.type, e.memoizedProps)),
              (t = !t)),
            t && (n = !0),
            n && Yr && ea(e),
            na(e),
            13 === e.tag)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      Yr = uf(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              Yr = null;
            }
          } else Yr = Kr ? uf(e.stateNode.nextSibling) : null;
          return !0;
        }
        function aa() {
          (Yr = Kr = null), (Xr = !1);
        }
        function la(e) {
          null === Gr ? (Gr = [e]) : Gr.push(e);
        }
        var oa = Error(o(460)),
          ia = Error(o(474)),
          ua = { then: function () {} };
        function sa(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ca() {}
        function fa(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(ca, ca), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              if ((e = t.reason) === oa) throw Error(o(483));
              throw e;
            default:
              if ("string" === typeof t.status) t.then(ca, ca);
              else {
                if (null !== (e = ts) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  if ((e = t.reason) === oa) throw Error(o(483));
                  throw e;
              }
              throw ((da = t), oa);
          }
        }
        var da = null;
        function pa() {
          if (null === da) throw Error(o(459));
          var e = da;
          return (da = null), e;
        }
        var ma = null,
          ha = 0;
        function ga(e) {
          var t = ha;
          return (ha += 1), null === ma && (ma = []), fa(ma, e, t);
        }
        function va(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function ya(e, t) {
          if (t.$$typeof === u) throw Error(o(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ba(e) {
          return (0, e._init)(e._payload);
        }
        function wa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function a(e, t) {
            return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 33554434), n)
                    : r
                  : ((t.flags |= 33554434), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 33554434), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = $u(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n, r) {
            var l = n.type;
            return l === f
              ? m(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === k &&
                    ba(l) === t.type))
              ? (va((t = a(t, n.props)), n), (t.return = e), t)
              : (va((t = Iu(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function p(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function m(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Uu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = $u("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case s:
                  return (
                    va((n = Iu(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
                case k:
                  return h(e, (t = (0, t._init)(t._payload)), n);
              }
              if (H(t) || E(t))
                return ((t = Uu(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return h(e, ga(t), n);
              if (t.$$typeof === g) return h(e, Ci(e, t), n);
              ya(e, t);
            }
            return null;
          }
          function v(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case s:
                  return n.key === a ? d(e, t, n, r) : null;
                case c:
                  return n.key === a ? p(e, t, n, r) : null;
                case k:
                  return v(e, t, (n = (a = n._init)(n._payload)), r);
              }
              if (H(n) || E(n)) return null !== a ? null : m(e, t, n, r, null);
              if ("function" === typeof n.then) return v(e, t, ga(n), r);
              if (n.$$typeof === g) return v(e, t, Ci(e, n), r);
              ya(e, n);
            }
            return null;
          }
          function y(e, t, n, r, a) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case s:
                  return d(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case c:
                  return p(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), a);
              }
              if (H(r) || E(r)) return m(t, (e = e.get(n) || null), r, a, null);
              if ("function" === typeof r.then) return y(e, t, n, ga(r), a);
              if (r.$$typeof === g) return y(e, t, n, Ci(t, r), a);
              ya(t, r);
            }
            return null;
          }
          function b(u, d, p, m) {
            if (
              ("object" === typeof p &&
                null !== p &&
                p.type === f &&
                null === p.key &&
                (p = p.props.children),
              "object" === typeof p && null !== p)
            ) {
              switch (p.$$typeof) {
                case s:
                  e: {
                    for (var w = p.key; null !== d; ) {
                      if (d.key === w) {
                        if ((w = p.type) === f) {
                          if (7 === d.tag) {
                            n(u, d.sibling),
                              ((m = a(d, p.props.children)).return = u),
                              (u = m);
                            break e;
                          }
                        } else if (
                          d.elementType === w ||
                          ("object" === typeof w &&
                            null !== w &&
                            w.$$typeof === k &&
                            ba(w) === d.type)
                        ) {
                          n(u, d.sibling),
                            va((m = a(d, p.props)), p),
                            (m.return = u),
                            (u = m);
                          break e;
                        }
                        n(u, d);
                        break;
                      }
                      t(u, d), (d = d.sibling);
                    }
                    p.type === f
                      ? (((m = Uu(p.props.children, u.mode, m, p.key)).return =
                          u),
                        (u = m))
                      : (va(
                          (m = Iu(p.type, p.key, p.props, null, u.mode, m)),
                          p
                        ),
                        (m.return = u),
                        (u = m));
                  }
                  return i(u);
                case c:
                  e: {
                    for (w = p.key; null !== d; ) {
                      if (d.key === w) {
                        if (
                          4 === d.tag &&
                          d.stateNode.containerInfo === p.containerInfo &&
                          d.stateNode.implementation === p.implementation
                        ) {
                          n(u, d.sibling),
                            ((m = a(d, p.children || [])).return = u),
                            (u = m);
                          break e;
                        }
                        n(u, d);
                        break;
                      }
                      t(u, d), (d = d.sibling);
                    }
                    ((m = Bu(p, u.mode, m)).return = u), (u = m);
                  }
                  return i(u);
                case k:
                  return b(u, d, (p = (w = p._init)(p._payload)), m);
              }
              if (H(p))
                return (function (a, o, i, u) {
                  for (
                    var s = null, c = null, f = o, d = (o = 0), p = null;
                    null !== f && d < i.length;
                    d++
                  ) {
                    f.index > d ? ((p = f), (f = null)) : (p = f.sibling);
                    var m = v(a, f, i[d], u);
                    if (null === m) {
                      null === f && (f = p);
                      break;
                    }
                    e && f && null === m.alternate && t(a, f),
                      (o = l(m, o, d)),
                      null === c ? (s = m) : (c.sibling = m),
                      (c = m),
                      (f = p);
                  }
                  if (d === i.length) return n(a, f), Xr && Vr(a, d), s;
                  if (null === f) {
                    for (; d < i.length; d++)
                      null !== (f = h(a, i[d], u)) &&
                        ((o = l(f, o, d)),
                        null === c ? (s = f) : (c.sibling = f),
                        (c = f));
                    return Xr && Vr(a, d), s;
                  }
                  for (f = r(f); d < i.length; d++)
                    null !== (p = y(f, a, d, i[d], u)) &&
                      (e &&
                        null !== p.alternate &&
                        f.delete(null === p.key ? d : p.key),
                      (o = l(p, o, d)),
                      null === c ? (s = p) : (c.sibling = p),
                      (c = p));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(a, e);
                      }),
                    Xr && Vr(a, d),
                    s
                  );
                })(u, d, p, m);
              if (E(p)) {
                if ("function" !== typeof (w = E(p))) throw Error(o(150));
                return (function (a, i, u, s) {
                  if (null == u) throw Error(o(151));
                  for (
                    var c = null,
                      f = null,
                      d = i,
                      p = (i = 0),
                      m = null,
                      g = u.next();
                    null !== d && !g.done;
                    p++, g = u.next()
                  ) {
                    d.index > p ? ((m = d), (d = null)) : (m = d.sibling);
                    var b = v(a, d, g.value, s);
                    if (null === b) {
                      null === d && (d = m);
                      break;
                    }
                    e && d && null === b.alternate && t(a, d),
                      (i = l(b, i, p)),
                      null === f ? (c = b) : (f.sibling = b),
                      (f = b),
                      (d = m);
                  }
                  if (g.done) return n(a, d), Xr && Vr(a, p), c;
                  if (null === d) {
                    for (; !g.done; p++, g = u.next())
                      null !== (g = h(a, g.value, s)) &&
                        ((i = l(g, i, p)),
                        null === f ? (c = g) : (f.sibling = g),
                        (f = g));
                    return Xr && Vr(a, p), c;
                  }
                  for (d = r(d); !g.done; p++, g = u.next())
                    null !== (g = y(d, a, p, g.value, s)) &&
                      (e &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? p : g.key),
                      (i = l(g, i, p)),
                      null === f ? (c = g) : (f.sibling = g),
                      (f = g));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    Xr && Vr(a, p),
                    c
                  );
                })(u, d, (p = w.call(p)), m);
              }
              if ("function" === typeof p.then) return b(u, d, ga(p), m);
              if (p.$$typeof === g) return b(u, d, Ci(u, p), m);
              ya(u, p);
            }
            return ("string" === typeof p && "" !== p) ||
              "number" === typeof p ||
              "bigint" === typeof p
              ? ((p = "" + p),
                null !== d && 6 === d.tag
                  ? (n(u, d.sibling), ((m = a(d, p)).return = u), (u = m))
                  : (n(u, d), ((m = $u(p, u.mode, m)).return = u), (u = m)),
                i(u))
              : n(u, d);
          }
          return function (e, t, n, r) {
            try {
              ha = 0;
              var a = b(e, t, n, r);
              return (ma = null), a;
            } catch (o) {
              if (o === oa) throw o;
              var l = Au(29, o, null, e.mode);
              return (l.lanes = r), (l.return = e), l;
            }
          };
        }
        var ka = wa(!0),
          Sa = wa(!1),
          xa = q(null),
          _a = q(0);
        function Ea(e, t) {
          K(_a, (e = ss)), K(xa, t), (ss = e | t.baseLanes);
        }
        function Ca() {
          K(_a, ss), K(xa, xa.current);
        }
        function Na() {
          (ss = _a.current), Q(xa), Q(_a);
        }
        var Pa = q(null),
          za = null;
        function Ta(e) {
          var t = e.alternate;
          K(Oa, 1 & Oa.current),
            K(Pa, e),
            null === za &&
              (null === t || null !== xa.current || null !== t.memoizedState) &&
              (za = e);
        }
        function ja(e) {
          if (22 === e.tag) {
            if ((K(Oa, Oa.current), K(Pa, e), null === za)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (za = e);
            }
          } else La();
        }
        function La() {
          K(Oa, Oa.current), K(Pa, Pa.current);
        }
        function Ra(e) {
          Q(Pa), za === e && (za = null), Q(Oa);
        }
        var Oa = q(0);
        function Aa(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Fa =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          Da = r.unstable_scheduleCallback,
          Ma = r.unstable_NormalPriority,
          Ia = {
            $$typeof: g,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ua() {
          return { controller: new Fa(), data: new Map(), refCount: 0 };
        }
        function Ha(e) {
          e.refCount--,
            0 === e.refCount &&
              Da(Ma, function () {
                e.controller.abort();
              });
        }
        var $a = null,
          Ba = 0,
          Va = 0,
          Wa = null;
        function qa() {
          if (0 === --Ba && null !== $a) {
            null !== Wa && (Wa.status = "fulfilled");
            var e = $a;
            ($a = null), (Va = 0), (Wa = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Qa = T.S;
        T.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === $a) {
                var n = ($a = []);
                (Ba = 0),
                  (Va = kc()),
                  (Wa = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              Ba++, t.then(qa, qa);
            })(0, t),
            null !== Qa && Qa(e, t);
        };
        var Ka = q(null);
        function Ya() {
          var e = Ka.current;
          return null !== e ? e : ts.pooledCache;
        }
        function Xa(e, t) {
          K(Ka, null === t ? Ka.current : t.pool);
        }
        function Ga() {
          var e = Ya();
          return null === e ? null : { parent: Ia._currentValue, pool: e };
        }
        var Ja = 0,
          Za = null,
          el = null,
          tl = null,
          nl = !1,
          rl = !1,
          al = !1,
          ll = 0,
          ol = 0,
          il = null,
          ul = 0;
        function sl() {
          throw Error(o(321));
        }
        function cl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Kn(e[n], t[n])) return !1;
          return !0;
        }
        function fl(e, t, n, r, a, l) {
          return (
            (Ja = l),
            (Za = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (T.H = null === e || null === e.memoizedState ? Co : No),
            (al = !1),
            (l = n(r, a)),
            (al = !1),
            rl && (l = pl(t, n, r, a)),
            dl(e),
            l
          );
        }
        function dl(e) {
          T.H = Eo;
          var t = null !== el && null !== el.next;
          if (
            ((Ja = 0),
            (tl = el = Za = null),
            (nl = !1),
            (ol = 0),
            (il = null),
            t)
          )
            throw Error(o(300));
          null === e ||
            Vo ||
            (null !== (e = e.dependencies) && xi(e) && (Vo = !0));
        }
        function pl(e, t, n, r) {
          Za = e;
          var a = 0;
          do {
            if ((rl && (il = null), (ol = 0), (rl = !1), 25 <= a))
              throw Error(o(301));
            if (((a += 1), (tl = el = null), null != e.updateQueue)) {
              var l = e.updateQueue;
              (l.lastEffect = null),
                (l.events = null),
                (l.stores = null),
                null != l.memoCache && (l.memoCache.index = 0);
            }
            (T.H = Po), (l = t(n, r));
          } while (rl);
          return l;
        }
        function ml() {
          var e = T.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? wl(t) : t),
            (e = e.useState()[0]),
            (null !== el ? el.memoizedState : null) !== e && (Za.flags |= 1024),
            t
          );
        }
        function hl() {
          var e = 0 !== ll;
          return (ll = 0), e;
        }
        function gl(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function vl(e) {
          if (nl) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            nl = !1;
          }
          (Ja = 0),
            (tl = el = Za = null),
            (rl = !1),
            (ol = ll = 0),
            (il = null);
        }
        function yl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e), tl
          );
        }
        function bl() {
          if (null === el) {
            var e = Za.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = el.next;
          var t = null === tl ? Za.memoizedState : tl.next;
          if (null !== t) (tl = t), (el = e);
          else {
            if (null === e) {
              if (null === Za.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            (e = {
              memoizedState: (el = e).memoizedState,
              baseState: el.baseState,
              baseQueue: el.baseQueue,
              queue: el.queue,
              next: null,
            }),
              null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e);
          }
          return tl;
        }
        function wl(e) {
          var t = ol;
          return (
            (ol += 1),
            null === il && (il = []),
            (e = fa(il, e, t)),
            (t = Za),
            null === (null === tl ? t.memoizedState : tl.next) &&
              ((t = t.alternate),
              (T.H = null === t || null === t.memoizedState ? Co : No)),
            e
          );
        }
        function kl(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return wl(e);
            if (e.$$typeof === g) return Ei(e);
          }
          throw Error(o(438, String(e)));
        }
        function Sl(e) {
          var t = null,
            n = Za.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Za.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Za.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = x;
          return t.index++, n;
        }
        function xl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _l(e) {
          return El(bl(), el, e);
        }
        function El(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            l = r.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (t.baseQueue = a = l), (r.pending = null);
          }
          if (((l = e.baseState), null === a)) e.memoizedState = l;
          else {
            var u = (i = null),
              s = null,
              c = (t = a.next),
              f = !1;
            do {
              var d = -536870913 & c.lane;
              if (d !== c.lane ? (rs & d) === d : (Ja & d) === d) {
                var p = c.revertLane;
                if (0 === p)
                  null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    d === Va && (f = !0);
                else {
                  if ((Ja & p) === p) {
                    (c = c.next), p === Va && (f = !0);
                    continue;
                  }
                  (d = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === s ? ((u = s = d), (i = l)) : (s = s.next = d),
                    (Za.lanes |= p),
                    (fs |= p);
                }
                (d = c.action),
                  al && n(l, d),
                  (l = c.hasEagerState ? c.eagerState : n(l, d));
              } else
                (p = {
                  lane: d,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = p), (i = l)) : (s = s.next = p),
                  (Za.lanes |= d),
                  (fs |= d);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === s ? (i = l) : (s.next = u),
              !Kn(l, e.memoizedState) && ((Vo = !0), f && null !== (n = Wa)))
            )
              throw n;
            (e.memoizedState = l),
              (e.baseState = i),
              (e.baseQueue = s),
              (r.lastRenderedState = l);
          }
          return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function Cl(e) {
          var t = bl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            Kn(l, t.memoizedState) || (Vo = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Nl(e, t, n) {
          var r = Za,
            a = bl(),
            l = Xr;
          if (l) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else n = t();
          var i = !Kn((el || a).memoizedState, n);
          if (
            (i && ((a.memoizedState = n), (Vo = !0)),
            (a = a.queue),
            Jl(Tl.bind(null, r, a, e), [e]),
            a.getSnapshot !== t ||
              i ||
              (null !== tl && 1 & tl.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Ql(9, zl.bind(null, r, a, n, t), { destroy: void 0 }, null),
              null === ts)
            )
              throw Error(o(349));
            l || 0 !== (60 & Ja) || Pl(r, t, n);
          }
          return n;
        }
        function Pl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Za.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Za.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function zl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), jl(t) && Ll(e);
        }
        function Tl(e, t, n) {
          return n(function () {
            jl(t) && Ll(e);
          });
        }
        function jl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Kn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ll(e) {
          var t = zr(e, 2);
          null !== t && Ls(t, e, 2);
        }
        function Rl(e) {
          var t = yl();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), al)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xl,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Ol(e, t, n, r) {
          return (e.baseState = n), El(e, el, "function" === typeof r ? r : xl);
        }
        function Al(e, t, n, r, a) {
          if (So(e)) throw Error(o(485));
          if (null !== (e = t.action)) {
            var l = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                l.listeners.push(e);
              },
            };
            null !== T.T ? n(!0) : (l.isTransition = !1),
              r(l),
              null === (n = t.pending)
                ? ((l.next = t.pending = l), Fl(t, l))
                : ((l.next = n.next), (t.pending = n.next = l));
          }
        }
        function Fl(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var l = T.T,
              o = {};
            T.T = o;
            try {
              var i = n(a, r),
                u = T.S;
              null !== u && u(o, i), Dl(e, t, i);
            } catch (s) {
              Il(e, t, s);
            } finally {
              T.T = l;
            }
          } else
            try {
              Dl(e, t, (l = n(a, r)));
            } catch (c) {
              Il(e, t, c);
            }
        }
        function Dl(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  Ml(e, t, n);
                },
                function (n) {
                  return Il(e, t, n);
                }
              )
            : Ml(e, t, n);
        }
        function Ml(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            Ul(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Fl(e, n)));
        }
        function Il(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), Ul(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function Ul(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Hl(e, t) {
          return t;
        }
        function $l(e, t) {
          if (Xr) {
            var n = ts.formState;
            if (null !== n) {
              e: {
                var r = Za;
                if (Xr) {
                  if (Yr) {
                    t: {
                      for (var a = Yr, l = Jr; 8 !== a.nodeType; ) {
                        if (!l) {
                          a = null;
                          break t;
                        }
                        if (null === (a = uf(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (l = a.data) || "F" === l ? a : null;
                    }
                    if (a) {
                      (Yr = uf(a.nextSibling)), (r = "F!" === a.data);
                      break e;
                    }
                  }
                  ea(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = yl()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Hl,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = bo.bind(null, Za, r)),
            (r.dispatch = n),
            (r = Rl(!1)),
            (l = ko.bind(null, Za, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = yl()).queue = a),
            (n = Al.bind(null, Za, a, l, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Bl(e) {
          return Vl(bl(), el, e);
        }
        function Vl(e, t, n) {
          (t = El(e, t, Hl)[0]),
            (e = _l(xl)[0]),
            (t =
              "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then
                ? wl(t)
                : t);
          var r = bl(),
            a = r.queue,
            l = a.dispatch;
          return (
            n !== r.memoizedState &&
              ((Za.flags |= 2048),
              Ql(9, Wl.bind(null, a, n), { destroy: void 0 }, null)),
            [t, l, e]
          );
        }
        function Wl(e, t) {
          e.action = t;
        }
        function ql(e) {
          var t = bl(),
            n = el;
          if (null !== n) return Vl(t, n, e);
          bl(), (t = t.memoizedState);
          var r = (n = bl()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function Ql(e, t, n, r) {
          return (
            (e = { tag: e, create: t, inst: n, deps: r, next: null }),
            null === (t = Za.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Za.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Kl() {
          return bl().memoizedState;
        }
        function Yl(e, t, n, r) {
          var a = yl();
          (Za.flags |= e),
            (a.memoizedState = Ql(
              1 | t,
              n,
              { destroy: void 0 },
              void 0 === r ? null : r
            ));
        }
        function Xl(e, t, n, r) {
          var a = bl();
          r = void 0 === r ? null : r;
          var l = a.memoizedState.inst;
          null !== el && null !== r && cl(r, el.memoizedState.deps)
            ? (a.memoizedState = Ql(t, n, l, r))
            : ((Za.flags |= e), (a.memoizedState = Ql(1 | t, n, l, r)));
        }
        function Gl(e, t) {
          Yl(8390656, 8, e, t);
        }
        function Jl(e, t) {
          Xl(2048, 8, e, t);
        }
        function Zl(e, t) {
          return Xl(4, 2, e, t);
        }
        function eo(e, t) {
          return Xl(4, 4, e, t);
        }
        function to(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function no(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Xl(4, 4, to.bind(null, t, e), n);
        }
        function ro() {}
        function ao(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && cl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function lo(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && cl(t, r[1])) return r[0];
          if (((r = e()), al)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function oo(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & Ja)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = js()),
              (Za.lanes |= e),
              (fs |= e),
              n);
        }
        function io(e, t, n, r) {
          return Kn(n, t)
            ? n
            : null !== xa.current
            ? ((e = oo(e, n, r)), Kn(e, t) || (Vo = !0), e)
            : 0 === (42 & Ja)
            ? ((Vo = !0), (e.memoizedState = n))
            : ((e = js()), (Za.lanes |= e), (fs |= e), t);
        }
        function uo(e, t, n, r, a) {
          var l = $.p;
          $.p = 0 !== l && 8 > l ? l : 8;
          var o = T.T,
            i = {};
          (T.T = i), ko(e, !1, t, n);
          try {
            var u = a(),
              s = T.S;
            if (
              (null !== s && s(i, u),
              null !== u &&
                "object" === typeof u &&
                "function" === typeof u.then)
            )
              wo(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(u, r),
                Ts()
              );
            else wo(e, t, r, Ts());
          } catch (c) {
            wo(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              Ts()
            );
          } finally {
            ($.p = l), (T.T = o);
          }
        }
        function so() {}
        function co(e, t, n, r) {
          if (5 !== e.tag) throw Error(o(476));
          var a = fo(e).queue;
          uo(
            e,
            a,
            t,
            B,
            null === n
              ? so
              : function () {
                  return po(e), n(r);
                }
          );
        }
        function fo(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: B,
              baseState: B,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: xl,
                lastRenderedState: B,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: xl,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function po(e) {
          wo(e, fo(e).next.queue, {}, Ts());
        }
        function mo() {
          return Ei(Df);
        }
        function ho() {
          return bl().memoizedState;
        }
        function go() {
          return bl().memoizedState;
        }
        function vo(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Ts(),
                  r = Li(t, (e = ji(n)), n);
                return (
                  null !== r && (Ls(r, t, n), Ri(r, t, n)),
                  (t = { cache: Ua() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function yo(e, t, n) {
          var r = Ts();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            So(e)
              ? xo(t, n)
              : null !== (n = Pr(e, t, n, r)) && (Ls(n, e, r), _o(n, t, r));
        }
        function bo(e, t, n) {
          wo(e, t, n, Ts());
        }
        function wo(e, t, n, r) {
          var a = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (So(e)) xo(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), Kn(i, o)))
                  return Nr(e, t, a, 0), null === ts && Cr(), !1;
              } catch (u) {}
            if (null !== (n = Pr(e, t, a, r)))
              return Ls(n, e, r), _o(n, t, r), !0;
          }
          return !1;
        }
        function ko(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: kc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            So(e))
          ) {
            if (t) throw Error(o(479));
          } else null !== (t = Pr(e, n, r, 2)) && Ls(t, e, 2);
        }
        function So(e) {
          var t = e.alternate;
          return e === Za || (null !== t && t === Za);
        }
        function xo(e, t) {
          rl = nl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function _o(e, t, n) {
          if (0 !== (4194176 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Oe(e, n);
          }
        }
        var Eo = {
          readContext: Ei,
          use: kl,
          useCallback: sl,
          useContext: sl,
          useEffect: sl,
          useImperativeHandle: sl,
          useLayoutEffect: sl,
          useInsertionEffect: sl,
          useMemo: sl,
          useReducer: sl,
          useRef: sl,
          useState: sl,
          useDebugValue: sl,
          useDeferredValue: sl,
          useTransition: sl,
          useSyncExternalStore: sl,
          useId: sl,
        };
        (Eo.useCacheRefresh = sl),
          (Eo.useMemoCache = sl),
          (Eo.useHostTransitionStatus = sl),
          (Eo.useFormState = sl),
          (Eo.useActionState = sl),
          (Eo.useOptimistic = sl);
        var Co = {
          readContext: Ei,
          use: kl,
          useCallback: function (e, t) {
            return (yl().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Ei,
          useEffect: Gl,
          useImperativeHandle: function (e, t, n) {
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Yl(4194308, 4, to.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Yl(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Yl(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = yl();
            t = void 0 === t ? null : t;
            var r = e();
            if (al) {
              be(!0);
              try {
                e();
              } finally {
                be(!1);
              }
            }
            return (n.memoizedState = [r, t]), r;
          },
          useReducer: function (e, t, n) {
            var r = yl();
            if (void 0 !== n) {
              var a = n(t);
              if (al) {
                be(!0);
                try {
                  n(t);
                } finally {
                  be(!1);
                }
              }
            } else a = t;
            return (
              (r.memoizedState = r.baseState = a),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: a,
              }),
              (r.queue = e),
              (e = e.dispatch = yo.bind(null, Za, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (yl().memoizedState = e);
          },
          useState: function (e) {
            var t = (e = Rl(e)).queue,
              n = bo.bind(null, Za, t);
            return (t.dispatch = n), [e.memoizedState, n];
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return oo(yl(), e, t);
          },
          useTransition: function () {
            var e = Rl(!1);
            return (
              (e = uo.bind(null, Za, e.queue, !0, !1)),
              (yl().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = Za,
              a = yl();
            if (Xr) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), null === ts)) throw Error(o(349));
              0 !== (60 & rs) || Pl(r, t, n);
            }
            a.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (
              (a.queue = l),
              Gl(Tl.bind(null, r, l, e), [e]),
              (r.flags |= 2048),
              Ql(9, zl.bind(null, r, l, n, t), { destroy: void 0 }, null),
              n
            );
          },
          useId: function () {
            var e = yl(),
              t = ts.identifierPrefix;
            if (Xr) {
              var n = Br;
              (t =
                ":" +
                t +
                "R" +
                (n = ($r & ~(1 << (32 - we($r) - 1))).toString(32) + n)),
                0 < (n = ll++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = ul++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          useCacheRefresh: function () {
            return (yl().memoizedState = vo.bind(null, Za));
          },
        };
        (Co.useMemoCache = Sl),
          (Co.useHostTransitionStatus = mo),
          (Co.useFormState = $l),
          (Co.useActionState = $l),
          (Co.useOptimistic = function (e) {
            var t = yl();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = ko.bind(null, Za, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          });
        var No = {
          readContext: Ei,
          use: kl,
          useCallback: ao,
          useContext: Ei,
          useEffect: Jl,
          useImperativeHandle: no,
          useInsertionEffect: Zl,
          useLayoutEffect: eo,
          useMemo: lo,
          useReducer: _l,
          useRef: Kl,
          useState: function () {
            return _l(xl);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return io(bl(), el.memoizedState, e, t);
          },
          useTransition: function () {
            var e = _l(xl)[0],
              t = bl().memoizedState;
            return ["boolean" === typeof e ? e : wl(e), t];
          },
          useSyncExternalStore: Nl,
          useId: ho,
        };
        (No.useCacheRefresh = go),
          (No.useMemoCache = Sl),
          (No.useHostTransitionStatus = mo),
          (No.useFormState = Bl),
          (No.useActionState = Bl),
          (No.useOptimistic = function (e, t) {
            return Ol(bl(), 0, e, t);
          });
        var Po = {
          readContext: Ei,
          use: kl,
          useCallback: ao,
          useContext: Ei,
          useEffect: Jl,
          useImperativeHandle: no,
          useInsertionEffect: Zl,
          useLayoutEffect: eo,
          useMemo: lo,
          useReducer: Cl,
          useRef: Kl,
          useState: function () {
            return Cl(xl);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            var n = bl();
            return null === el ? oo(n, e, t) : io(n, el.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Cl(xl)[0],
              t = bl().memoizedState;
            return ["boolean" === typeof e ? e : wl(e), t];
          },
          useSyncExternalStore: Nl,
          useId: ho,
        };
        function zo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : j({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        (Po.useCacheRefresh = go),
          (Po.useMemoCache = Sl),
          (Po.useHostTransitionStatus = mo),
          (Po.useFormState = ql),
          (Po.useActionState = ql),
          (Po.useOptimistic = function (e, t) {
            var n = bl();
            return null !== el
              ? Ol(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          });
        var To = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && D(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ts(),
              a = ji(r);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Li(e, a, r)) && (Ls(t, e, r), Ri(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ts(),
              a = ji(r);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Li(e, a, r)) && (Ls(t, e, r), Ri(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Ts(),
              r = ji(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = Li(e, r, n)) && (Ls(t, e, n), Ri(t, e, n));
          },
        };
        function jo(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Yn(n, r) ||
                !Yn(a, l);
        }
        function Lo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && To.enqueueReplaceState(t, t.state, null);
        }
        function Ro(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var a in (n === t && (n = j({}, n)), e))
              void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        var Oo =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function Ao(e) {
          Oo(e);
        }
        function Fo(e) {
          console.error(e);
        }
        function Do(e) {
          Oo(e);
        }
        function Mo(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Io(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Uo(e, t, n) {
          return (
            ((n = ji(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Mo(e, t);
            }),
            n
          );
        }
        function Ho(e) {
          return ((e = ji(e)).tag = 3), e;
        }
        function $o(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var l = r.value;
            (e.payload = function () {
              return a(l);
            }),
              (e.callback = function () {
                Io(t, n, r);
              });
          }
          var o = n.stateNode;
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (e.callback = function () {
              Io(t, n, r),
                "function" !== typeof a &&
                  (null === Ss ? (Ss = new Set([this])) : Ss.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Bo = Error(o(461)),
          Vo = !1;
        function Wo(e, t, n, r) {
          t.child = null === e ? Sa(t, null, n, r) : ka(t, e.child, n, r);
        }
        function qo(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          if ("ref" in r) {
            var o = {};
            for (var i in r) "ref" !== i && (o[i] = r[i]);
          } else o = r;
          return (
            _i(t),
            (r = fl(e, t, n, o, l, a)),
            (i = hl()),
            null === e || Vo
              ? (Xr && i && qr(t), (t.flags |= 1), Wo(e, t, r, a), t.child)
              : (gl(e, t, a), di(e, t, a))
          );
        }
        function Qo(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Fu(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare
              ? (((e = Iu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Ko(e, t, l, r, a));
          }
          if (((l = e.child), !pi(e, a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Yn)(o, r) &&
              e.ref === t.ref
            )
              return di(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Du(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ko(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (Yn(l, r) && e.ref === t.ref) {
              if (((Vo = !1), (t.pendingProps = r = l), !pi(e, a)))
                return (t.lanes = e.lanes), di(e, t, a);
              0 !== (131072 & e.flags) && (Vo = !0);
            }
          }
          return Jo(e, t, n, r, a);
        }
        function Yo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = 0 !== (2 & t.stateNode._pendingVisibility),
            o = null !== e ? e.memoizedState : null;
          if ((Go(e, t), "hidden" === r.mode || l)) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (a = t.child = e.child, l = 0; null !== a; )
                  (l = l | a.lanes | a.childLanes), (a = a.sibling);
                t.childLanes = l & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Xo(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Xo(e, t, null !== o ? o.baseLanes | n : n, n)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Xa(0, null !== o ? o.cachePool : null),
              null !== o ? Ea(t, o) : Ca(),
              ja(t);
          } else
            null !== o
              ? (Xa(0, o.cachePool), Ea(t, o), La(), (t.memoizedState = null))
              : (null !== e && Xa(0, null), Ca(), La());
          return Wo(e, t, a, n), t.child;
        }
        function Xo(e, t, n, r) {
          var a = Ya();
          return (
            (a = null === a ? null : { parent: Ia._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Xa(0, null),
            Ca(),
            ja(t),
            null !== e && Si(e, t, r, !0),
            null
          );
        }
        function Go(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(o(284));
            (null !== e && e.ref === n) || (t.flags |= 2097664);
          }
        }
        function Jo(e, t, n, r, a) {
          return (
            _i(t),
            (n = fl(e, t, n, r, void 0, a)),
            (r = hl()),
            null === e || Vo
              ? (Xr && r && qr(t), (t.flags |= 1), Wo(e, t, n, a), t.child)
              : (gl(e, t, a), di(e, t, a))
          );
        }
        function Zo(e, t, n, r, a, l) {
          return (
            _i(t),
            (t.updateQueue = null),
            (n = pl(t, r, n, a)),
            dl(e),
            (r = hl()),
            null === e || Vo
              ? (Xr && r && qr(t), (t.flags |= 1), Wo(e, t, n, l), t.child)
              : (gl(e, t, l), di(e, t, l))
          );
        }
        function ei(e, t, n, r, a) {
          if ((_i(t), null === t.stateNode)) {
            var l = Lr,
              o = n.contextType;
            "object" === typeof o && null !== o && (l = Ei(o)),
              (l = new n(r, l)),
              (t.memoizedState =
                null !== l.state && void 0 !== l.state ? l.state : null),
              (l.updater = To),
              (t.stateNode = l),
              (l._reactInternals = t),
              ((l = t.stateNode).props = r),
              (l.state = t.memoizedState),
              (l.refs = {}),
              zi(t),
              (o = n.contextType),
              (l.context = "object" === typeof o && null !== o ? Ei(o) : Lr),
              (l.state = t.memoizedState),
              "function" === typeof (o = n.getDerivedStateFromProps) &&
                (zo(t, n, o, r), (l.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof l.getSnapshotBeforeUpdate ||
                ("function" !== typeof l.UNSAFE_componentWillMount &&
                  "function" !== typeof l.componentWillMount) ||
                ((o = l.state),
                "function" === typeof l.componentWillMount &&
                  l.componentWillMount(),
                "function" === typeof l.UNSAFE_componentWillMount &&
                  l.UNSAFE_componentWillMount(),
                o !== l.state && To.enqueueReplaceState(l, l.state, null),
                Di(t, r, l, a),
                Fi(),
                (l.state = t.memoizedState)),
              "function" === typeof l.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            l = t.stateNode;
            var i = t.memoizedProps,
              u = Ro(n, i);
            l.props = u;
            var s = l.context,
              c = n.contextType;
            (o = Lr), "object" === typeof c && null !== c && (o = Ei(c));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof l.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              c ||
                ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof l.componentWillReceiveProps) ||
                ((i || s !== o) && Lo(t, l, r, o)),
              (Pi = !1);
            var d = t.memoizedState;
            (l.state = d),
              Di(t, r, l, a),
              Fi(),
              (s = t.memoizedState),
              i || d !== s || Pi
                ? ("function" === typeof f &&
                    (zo(t, n, f, r), (s = t.memoizedState)),
                  (u = Pi || jo(t, n, u, r, d, s, o))
                    ? (c ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = o),
                  (r = u))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Ti(e, t),
              (c = Ro(n, (o = t.memoizedProps))),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              (s = n.contextType),
              (u = Lr),
              "object" === typeof s && null !== s && (u = Ei(s)),
              (s =
                "function" === typeof (i = n.getDerivedStateFromProps) ||
                "function" === typeof l.getSnapshotBeforeUpdate) ||
                ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof l.componentWillReceiveProps) ||
                ((o !== f || d !== u) && Lo(t, l, r, u)),
              (Pi = !1),
              (d = t.memoizedState),
              (l.state = d),
              Di(t, r, l, a),
              Fi();
            var p = t.memoizedState;
            o !== f ||
            d !== p ||
            Pi ||
            (null !== e && null !== e.dependencies && xi(e.dependencies))
              ? ("function" === typeof i &&
                  (zo(t, n, i, r), (p = t.memoizedState)),
                (c =
                  Pi ||
                  jo(t, n, c, r, d, p, u) ||
                  (null !== e && null !== e.dependencies && xi(e.dependencies)))
                  ? (s ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, p, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (l.props = r),
                (l.state = p),
                (l.context = u),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (l = r),
            Go(e, t),
            (r = 0 !== (128 & t.flags)),
            l || r
              ? ((l = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : l.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = ka(t, e.child, null, a)),
                    (t.child = ka(t, null, n, a)))
                  : Wo(e, t, n, a),
                (t.memoizedState = l.state),
                (e = t.child))
              : (e = di(e, t, a)),
            e
          );
        }
        function ti(e, t, n, r) {
          return aa(), (t.flags |= 256), Wo(e, t, n, r), t.child;
        }
        var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
        function ri(e) {
          return { baseLanes: e, cachePool: Ga() };
        }
        function ai(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= ms), e;
        }
        function li(e, t, n) {
          var r,
            a = t.pendingProps,
            l = !1,
            i = 0 !== (128 & t.flags);
          if (
            ((r = i) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & Oa.current)),
            r && ((l = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (Xr) {
              if ((l ? Ta(t) : La(), Xr)) {
                var u,
                  s = Yr;
                if ((u = s)) {
                  e: {
                    for (u = s, s = Jr; 8 !== u.nodeType; ) {
                      if (!s) {
                        s = null;
                        break e;
                      }
                      if (null === (u = uf(u.nextSibling))) {
                        s = null;
                        break e;
                      }
                    }
                    s = u;
                  }
                  null !== s
                    ? ((t.memoizedState = {
                        dehydrated: s,
                        treeContext:
                          null !== Hr ? { id: $r, overflow: Br } : null,
                        retryLane: 536870912,
                      }),
                      ((u = Au(18, null, null, 0)).stateNode = s),
                      (u.return = t),
                      (t.child = u),
                      (Kr = t),
                      (Yr = null),
                      (u = !0))
                    : (u = !1);
                }
                u || ea(t);
              }
              if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated))
                return (
                  "$!" === s.data ? (t.lanes = 16) : (t.lanes = 536870912), null
                );
              Ra(t);
            }
            return (
              (s = a.children),
              (a = a.fallback),
              l
                ? (La(),
                  (s = ii({ mode: "hidden", children: s }, (l = t.mode))),
                  (a = Uu(a, l, n, null)),
                  (s.return = t),
                  (a.return = t),
                  (s.sibling = a),
                  (t.child = s),
                  ((l = t.child).memoizedState = ri(n)),
                  (l.childLanes = ai(e, r, n)),
                  (t.memoizedState = ni),
                  a)
                : (Ta(t), oi(t, s))
            );
          }
          if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
            if (i)
              256 & t.flags
                ? (Ta(t), (t.flags &= -257), (t = ui(e, t, n)))
                : null !== t.memoizedState
                ? (La(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (La(),
                  (l = a.fallback),
                  (s = t.mode),
                  (a = ii({ mode: "visible", children: a.children }, s)),
                  ((l = Uu(l, s, n, null)).flags |= 2),
                  (a.return = t),
                  (l.return = t),
                  (a.sibling = l),
                  (t.child = a),
                  ka(t, e.child, null, n),
                  ((a = t.child).memoizedState = ri(n)),
                  (a.childLanes = ai(e, r, n)),
                  (t.memoizedState = ni),
                  (t = l));
            else if ((Ta(t), "$!" === s.data)) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((a = Error(o(419))).stack = ""),
                (a.digest = r),
                la({ value: a, source: null, stack: null }),
                (t = ui(e, t, n));
            } else if (
              (Vo || Si(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Vo || r)
            ) {
              if (null !== (r = ts)) {
                if (0 !== (42 & (a = n & -n))) a = 1;
                else
                  switch (a) {
                    case 2:
                      a = 1;
                      break;
                    case 8:
                      a = 4;
                      break;
                    case 32:
                      a = 16;
                      break;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                      a = 64;
                      break;
                    case 268435456:
                      a = 134217728;
                      break;
                    default:
                      a = 0;
                  }
                if (
                  0 !== (a = 0 !== (a & (r.suspendedLanes | n)) ? 0 : a) &&
                  a !== u.retryLane
                )
                  throw ((u.retryLane = a), zr(e, a), Ls(r, e, a), Bo);
              }
              "$?" === s.data || Vs(), (t = ui(e, t, n));
            } else
              "$?" === s.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ic.bind(null, e)),
                  (s._reactRetry = t),
                  (t = null))
                : ((e = u.treeContext),
                  (Yr = uf(s.nextSibling)),
                  (Kr = t),
                  (Xr = !0),
                  (Gr = null),
                  (Jr = !1),
                  null !== e &&
                    ((Ir[Ur++] = $r),
                    (Ir[Ur++] = Br),
                    (Ir[Ur++] = Hr),
                    ($r = e.id),
                    (Br = e.overflow),
                    (Hr = t)),
                  ((t = oi(t, a.children)).flags |= 4096));
            return t;
          }
          return l
            ? (La(),
              (l = a.fallback),
              (s = t.mode),
              (c = (u = e.child).sibling),
              ((a = Du(u, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 31457280 & u.subtreeFlags),
              null !== c
                ? (l = Du(c, l))
                : ((l = Uu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              null === (s = e.child.memoizedState)
                ? (s = ri(n))
                : (null !== (u = s.cachePool)
                    ? ((c = Ia._currentValue),
                      (u = u.parent !== c ? { parent: c, pool: c } : u))
                    : (u = Ga()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: u })),
              (l.memoizedState = s),
              (l.childLanes = ai(e, r, n)),
              (t.memoizedState = ni),
              a)
            : (Ta(t),
              (e = (n = e.child).sibling),
              ((n = Du(n, { mode: "visible", children: a.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function oi(e, t) {
          return (
            ((t = ii({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function ii(e, t) {
          return Hu(e, t, 0, null);
        }
        function ui(e, t, n) {
          return (
            ka(t, e.child, null, n),
            ((e = oi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function si(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), wi(e.return, t, n);
        }
        function ci(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function fi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((Wo(e, t, r.children, n), 0 !== (2 & (r = Oa.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && si(e, n, t);
                else if (19 === e.tag) si(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((K(Oa, r), a)) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Aa(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                ci(t, !1, a, n, l);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Aa(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              ci(t, !0, n, null, l);
              break;
            case "together":
              ci(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function di(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (fs |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Si(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Du(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function pi(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !xi(e))
          );
        }
        function mi(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Vo = !0;
            else {
              if (!pi(e, n) && 0 === (128 & t.flags))
                return (
                  (Vo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Z(t, t.stateNode.containerInfo),
                          yi(t, Ia, e.memoizedState.cache),
                          aa();
                        break;
                      case 27:
                      case 5:
                        te(t);
                        break;
                      case 4:
                        Z(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        yi(t, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Ta(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? li(e, t, n)
                            : (Ta(t),
                              null !== (e = di(e, t, n)) ? e.sibling : null);
                        Ta(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Si(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return fi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          K(Oa, Oa.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Yo(e, t, n);
                      case 24:
                        yi(t, Ia, e.memoizedState.cache);
                    }
                    return di(e, t, n);
                  })(e, t, n)
                );
              Vo = 0 !== (131072 & e.flags);
            }
          else (Vo = !1), Xr && 0 !== (1048576 & t.flags) && Wr(t, Mr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  a = r._init;
                if (
                  ((r = a(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((a = r.$$typeof) === v) {
                      (t.tag = 11), (t = qo(null, t, r, e, n));
                      break e;
                    }
                    if (a === w) {
                      (t.tag = 14), (t = Qo(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = N(r) || r), Error(o(306, t, "")));
                }
                Fu(r)
                  ? ((e = Ro(r, e)), (t.tag = 1), (t = ei(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Jo(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Jo(e, t, t.type, t.pendingProps, n);
            case 1:
              return ei(e, t, (r = t.type), (a = Ro(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((Z(t, t.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                var l = t.pendingProps;
                (r = (a = t.memoizedState).element),
                  Ti(e, t),
                  Di(t, l, null, n);
                var i = t.memoizedState;
                if (
                  ((l = i.cache),
                  yi(t, Ia, l),
                  l !== a.cache && ki(t, [Ia], n, !0),
                  Fi(),
                  (l = i.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = { element: l, isDehydrated: !1, cache: i.cache }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = ti(e, t, l, n);
                    break e;
                  }
                  if (l !== r) {
                    la((r = Or(Error(o(424)), t))), (t = ti(e, t, l, n));
                    break e;
                  }
                  for (
                    Yr = uf(t.stateNode.containerInfo.firstChild),
                      Kr = t,
                      Xr = !0,
                      Gr = null,
                      Jr = !0,
                      n = Sa(t, null, l, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((aa(), l === r)) {
                    t = di(e, t, n);
                    break e;
                  }
                  Wo(e, t, l, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Go(e, t),
                null === e
                  ? (n = vf(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : Xr ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = Yc(G.current).createElement(n))[Me] = t),
                      (r[Ie] = e),
                      qc(r, n, e),
                      Ge(r),
                      (t.stateNode = r))
                  : (t.memoizedState = vf(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                te(t),
                null === e &&
                  Xr &&
                  ((r = t.stateNode = cf(t.type, t.pendingProps, G.current)),
                  (Kr = t),
                  (Jr = !0),
                  (Yr = uf(r.firstChild))),
                (r = t.pendingProps.children),
                null !== e || Xr
                  ? Wo(e, t, r, n)
                  : (t.child = ka(t, null, r, n)),
                Go(e, t),
                t.child
              );
            case 5:
              return (
                null === e &&
                  Xr &&
                  ((a = r = Yr) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[We])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (l = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  l !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href ? null : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin
                                      ? null
                                      : a.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((l = e.getAttribute("src")) !==
                                    (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !==
                                      (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin
                                        ? null
                                        : a.crossOrigin)) &&
                                  l &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var l = null == a.name ? null : "" + a.name;
                          if (
                            "hidden" === a.type &&
                            e.getAttribute("name") === l
                          )
                            return e;
                        }
                        if (null === (e = uf(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, Jr))
                      ? ((t.stateNode = r),
                        (Kr = t),
                        (Yr = uf(r.firstChild)),
                        (Jr = !1),
                        (a = !0))
                      : (a = !1)),
                  a || ea(t)),
                te(t),
                (a = t.type),
                (l = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = l.children),
                Jc(a, l)
                  ? (r = null)
                  : null !== i && Jc(a, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = fl(e, t, ml, null, null, n)), (Df._currentValue = a)),
                Go(e, t),
                Wo(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  Xr &&
                  ((e = n = Yr) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = uf(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, Jr))
                      ? ((t.stateNode = n), (Kr = t), (Yr = null), (e = !0))
                      : (e = !1)),
                  e || ea(t)),
                null
              );
            case 13:
              return li(e, t, n);
            case 4:
              return (
                Z(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ka(t, null, r, n)) : Wo(e, t, r, n),
                t.child
              );
            case 11:
              return qo(e, t, t.type, t.pendingProps, n);
            case 7:
              return Wo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Wo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                yi(t, t.type, r.value),
                Wo(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                _i(t),
                (r = r((a = Ei(a)))),
                (t.flags |= 1),
                Wo(e, t, r, n),
                t.child
              );
            case 14:
              return Qo(e, t, t.type, t.pendingProps, n);
            case 15:
              return Ko(e, t, t.type, t.pendingProps, n);
            case 19:
              return fi(e, t, n);
            case 22:
              return Yo(e, t, n);
            case 24:
              return (
                _i(t),
                (r = Ei(Ia)),
                null === e
                  ? (null === (a = Ya()) &&
                      ((a = ts),
                      (l = Ua()),
                      (a.pooledCache = l),
                      l.refCount++,
                      null !== l && (a.pooledCacheLanes |= n),
                      (a = l)),
                    (t.memoizedState = { parent: r, cache: a }),
                    zi(t),
                    yi(t, Ia, a))
                  : (0 !== (e.lanes & n) &&
                      (Ti(e, t), Di(t, null, null, n), Fi()),
                    (a = e.memoizedState),
                    (l = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        yi(t, Ia, r))
                      : ((r = l.cache),
                        yi(t, Ia, r),
                        r !== a.cache && ki(t, [Ia], n, !0))),
                Wo(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        var hi = q(null),
          gi = null,
          vi = null;
        function yi(e, t, n) {
          K(hi, t._currentValue), (t._currentValue = n);
        }
        function bi(e) {
          (e._currentValue = hi.current), Q(hi);
        }
        function wi(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ki(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var l = a.dependencies;
            if (null !== l) {
              var i = a.child;
              l = l.firstContext;
              e: for (; null !== l; ) {
                var u = l;
                l = a;
                for (var s = 0; s < t.length; s++)
                  if (u.context === t[s]) {
                    (l.lanes |= n),
                      null !== (u = l.alternate) && (u.lanes |= n),
                      wi(l.return, n, e),
                      r || (i = null);
                    break e;
                  }
                l = u.next;
              }
            } else if (18 === a.tag) {
              if (null === (i = a.return)) throw Error(o(341));
              (i.lanes |= n),
                null !== (l = i.alternate) && (l.lanes |= n),
                wi(i, n, e),
                (i = null);
            } else i = a.child;
            if (null !== i) i.return = a;
            else
              for (i = a; null !== i; ) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (a = i.sibling)) {
                  (a.return = i.return), (i = a);
                  break;
                }
                i = i.return;
              }
            a = i;
          }
        }
        function Si(e, t, n, r) {
          e = null;
          for (var a = t, l = !1; null !== a; ) {
            if (!l)
              if (0 !== (524288 & a.flags)) l = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var i = a.alternate;
              if (null === i) throw Error(o(387));
              if (null !== (i = i.memoizedProps)) {
                var u = a.type;
                Kn(a.pendingProps.value, i.value) ||
                  (null !== e ? e.push(u) : (e = [u]));
              }
            } else if (a === J.current) {
              if (null === (i = a.alternate)) throw Error(o(387));
              i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(Df) : (e = [Df]));
            }
            a = a.return;
          }
          null !== e && ki(t, e, n, r), (t.flags |= 262144);
        }
        function xi(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Kn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function _i(e) {
          (gi = e),
            (vi = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function Ei(e) {
          return Ni(gi, e);
        }
        function Ci(e, t) {
          return null === gi && _i(e), Ni(e, t);
        }
        function Ni(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === vi)
          ) {
            if (null === e) throw Error(o(308));
            (vi = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else vi = vi.next = t;
          return n;
        }
        var Pi = !1;
        function zi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function Ti(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function ji(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Li(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & es))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = jr(e)),
              Tr(e, null, n),
              t
            );
          }
          return Nr(e, r, t, n), jr(e);
        }
        function Ri(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194176 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Oe(e, n);
          }
        }
        function Oi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var Ai = !1;
        function Fi() {
          if (Ai) {
            if (null !== Wa) throw Wa;
          }
        }
        function Di(e, t, n, r) {
          Ai = !1;
          var a = e.updateQueue;
          Pi = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = -536870913 & i.lane,
                p = d !== i.lane;
              if (p ? (rs & d) === d : (r & d) === d) {
                0 !== d && d === Va && (Ai = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var m = e,
                    h = i;
                  d = t;
                  var g = n;
                  switch (h.tag) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        f = m.call(g, f, d);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (m = h.payload)
                              ? m.call(g, f, d)
                              : m) ||
                        void 0 === d
                      )
                        break e;
                      f = j({}, f, d);
                      break e;
                    case 2:
                      Pi = !0;
                  }
                }
                null !== (d = i.callback) &&
                  ((e.flags |= 64),
                  p && (e.flags |= 8192),
                  null === (p = a.callbacks) ? (a.callbacks = [d]) : p.push(d));
              } else
                (p = {
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (p = i).next),
                  (p.next = null),
                  (a.lastBaseUpdate = p),
                  (a.shared.pending = null);
              }
            }
            null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null === l && (a.shared.lanes = 0),
              (fs |= o),
              (e.lanes = o),
              (e.memoizedState = f);
          }
        }
        function Mi(e, t) {
          if ("function" !== typeof e) throw Error(o(191, e));
          e.call(t);
        }
        function Ii(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Mi(n[e], t);
        }
        function Ui(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var l = n.create,
                    o = n.inst;
                  (r = l()), (o.destroy = r);
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (i) {
            rc(t, t.return, i);
          }
        }
        function Hi(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var l = a.next;
              r = l;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    i = o.destroy;
                  if (void 0 !== i) {
                    (o.destroy = void 0), (a = t);
                    var u = n;
                    try {
                      i();
                    } catch (s) {
                      rc(a, u, s);
                    }
                  }
                }
                r = r.next;
              } while (r !== l);
            }
          } catch (s) {
            rc(t, t.return, s);
          }
        }
        function $i(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Ii(t, n);
            } catch (r) {
              rc(e, e.return, r);
            }
          }
        }
        function Bi(e, t, n) {
          (n.props = Ro(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            rc(e, t, r);
          }
        }
        function Vi(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              var r = e.stateNode;
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var a = r;
                  break;
                default:
                  a = r;
              }
              "function" === typeof n ? (e.refCleanup = n(a)) : (n.current = a);
            }
          } catch (l) {
            rc(e, t, l);
          }
        }
        function Wi(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (a) {
                rc(e, t, a);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (l) {
                rc(e, t, l);
              }
            else n.current = null;
        }
        function qi(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function Qi(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    l = null,
                    i = null,
                    u = null,
                    s = null,
                    c = null,
                    f = null;
                  for (m in n) {
                    var d = n[m];
                    if (n.hasOwnProperty(m) && null != d)
                      switch (m) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          s = d;
                        default:
                          r.hasOwnProperty(m) || Vc(e, t, m, null, r, d);
                      }
                  }
                  for (var p in r) {
                    var m = r[p];
                    if (
                      ((d = n[p]),
                      r.hasOwnProperty(p) && (null != m || null != d))
                    )
                      switch (p) {
                        case "type":
                          l = m;
                          break;
                        case "name":
                          a = m;
                          break;
                        case "checked":
                          c = m;
                          break;
                        case "defaultChecked":
                          f = m;
                          break;
                        case "value":
                          i = m;
                          break;
                        case "defaultValue":
                          u = m;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != m) throw Error(o(137, t));
                          break;
                        default:
                          m !== d && Vc(e, t, p, m, r, d);
                      }
                  }
                  return void gt(e, i, u, s, c, f, l, a);
                case "select":
                  for (l in ((m = i = u = p = null), n))
                    if (((s = n[l]), n.hasOwnProperty(l) && null != s))
                      switch (l) {
                        case "value":
                          break;
                        case "multiple":
                          m = s;
                        default:
                          r.hasOwnProperty(l) || Vc(e, t, l, null, r, s);
                      }
                  for (a in r)
                    if (
                      ((l = r[a]),
                      (s = n[a]),
                      r.hasOwnProperty(a) && (null != l || null != s))
                    )
                      switch (a) {
                        case "value":
                          p = l;
                          break;
                        case "defaultValue":
                          u = l;
                          break;
                        case "multiple":
                          i = l;
                        default:
                          l !== s && Vc(e, t, a, l, r, s);
                      }
                  return (
                    (t = u),
                    (n = i),
                    (r = m),
                    void (null != p
                      ? bt(e, !!n, p, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (u in ((m = p = null), n))
                    if (
                      ((a = n[u]),
                      n.hasOwnProperty(u) && null != a && !r.hasOwnProperty(u))
                    )
                      switch (u) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Vc(e, t, u, null, r, a);
                      }
                  for (i in r)
                    if (
                      ((a = r[i]),
                      (l = n[i]),
                      r.hasOwnProperty(i) && (null != a || null != l))
                    )
                      switch (i) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          m = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(o(91));
                          break;
                        default:
                          a !== l && Vc(e, t, i, a, r, l);
                      }
                  return void wt(e, p, m);
                case "option":
                  for (var h in n)
                    if (
                      ((p = n[h]),
                      n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h))
                    )
                      if ("selected" === h) e.selected = !1;
                      else Vc(e, t, h, null, r, p);
                  for (s in r)
                    if (
                      ((p = r[s]),
                      (m = n[s]),
                      r.hasOwnProperty(s) &&
                        p !== m &&
                        (null != p || null != m))
                    )
                      if ("selected" === s)
                        e.selected =
                          p && "function" !== typeof p && "symbol" !== typeof p;
                      else Vc(e, t, s, p, r, m);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        Vc(e, t, g, null, r, p);
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (m = n[c]),
                      r.hasOwnProperty(c) &&
                        p !== m &&
                        (null != p || null != m))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, t));
                          break;
                        default:
                          Vc(e, t, c, p, r, m);
                      }
                  return;
                default:
                  if (Ct(t)) {
                    for (var v in n)
                      (p = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(v) &&
                          Wc(e, t, v, void 0, r, p);
                    for (f in r)
                      (p = r[f]),
                        (m = n[f]),
                        !r.hasOwnProperty(f) ||
                          p === m ||
                          (void 0 === p && void 0 === m) ||
                          Wc(e, t, f, p, r, m);
                    return;
                  }
              }
              for (var y in n)
                (p = n[y]),
                  n.hasOwnProperty(y) &&
                    null != p &&
                    !r.hasOwnProperty(y) &&
                    Vc(e, t, y, null, r, p);
              for (d in r)
                (p = r[d]),
                  (m = n[d]),
                  !r.hasOwnProperty(d) ||
                    p === m ||
                    (null == p && null == m) ||
                    Vc(e, t, d, p, r, m);
            })(r, e.type, n, t),
              (r[Ie] = t);
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function Ki(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            27 === e.tag ||
            4 === e.tag
          );
        }
        function Yi(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Ki(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Xi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Bc));
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Xi(e, t, n), e = e.sibling; null !== e; )
              Xi(e, t, n), (e = e.sibling);
        }
        function Gi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Gi(e, t, n), e = e.sibling; null !== e; )
              Gi(e, t, n), (e = e.sibling);
        }
        var Ji = !1,
          Zi = !1,
          eu = !1,
          tu = "function" === typeof WeakSet ? WeakSet : Set,
          nu = null,
          ru = !1;
        function au(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              vu(e, n), 4 & r && Ui(5, n);
              break;
            case 1:
              if ((vu(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (i) {
                    rc(n, n.return, i);
                  }
                else {
                  var a = Ro(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      a,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (u) {
                    rc(n, n.return, u);
                  }
                }
              64 & r && $i(n), 512 & r && Vi(n, n.return);
              break;
            case 3:
              if ((vu(e, n), 64 & r && null !== (r = n.updateQueue))) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                try {
                  Ii(r, e);
                } catch (i) {
                  rc(n, n.return, i);
                }
              }
              break;
            case 26:
              vu(e, n), 512 & r && Vi(n, n.return);
              break;
            case 27:
            case 5:
              vu(e, n),
                null === t && 4 & r && qi(n),
                512 & r && Vi(n, n.return);
              break;
            case 12:
            default:
              vu(e, n);
              break;
            case 13:
              vu(e, n), 4 & r && cu(e, n);
              break;
            case 22:
              if (!(a = null !== n.memoizedState || Ji)) {
                t = (null !== t && null !== t.memoizedState) || Zi;
                var l = Ji,
                  o = Zi;
                (Ji = a),
                  (Zi = t) && !o
                    ? bu(e, n, 0 !== (8772 & n.subtreeFlags))
                    : vu(e, n),
                  (Ji = l),
                  (Zi = o);
              }
              512 & r &&
                ("manual" === n.memoizedProps.mode
                  ? Vi(n, n.return)
                  : Wi(n, n.return));
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && qe(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var ou = null,
          iu = !1;
        function uu(e, t, n) {
          for (n = n.child; null !== n; ) su(e, t, n), (n = n.sibling);
        }
        function su(e, t, n) {
          if (ye && "function" === typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ve, n);
            } catch (o) {}
          switch (n.tag) {
            case 26:
              Zi || Wi(n, t),
                uu(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              Zi || Wi(n, t);
              var r = ou,
                a = iu;
              for (
                ou = n.stateNode, uu(e, t, n), t = (n = n.stateNode).attributes;
                t.length;

              )
                n.removeAttributeNode(t[0]);
              qe(n), (ou = r), (iu = a);
              break;
            case 5:
              Zi || Wi(n, t);
            case 6:
              a = ou;
              var l = iu;
              if (((ou = null), uu(e, t, n), (iu = l), null !== (ou = a)))
                if (iu)
                  try {
                    (e = ou),
                      (r = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r);
                  } catch (i) {
                    rc(n, t, i);
                  }
                else
                  try {
                    ou.removeChild(n.stateNode);
                  } catch (i) {
                    rc(n, t, i);
                  }
              break;
            case 18:
              null !== ou &&
                (iu
                  ? ((t = ou),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? lf(t.parentNode, n)
                      : 1 === t.nodeType && lf(t, n),
                    gd(t))
                  : lf(ou, n.stateNode));
              break;
            case 4:
              (r = ou),
                (a = iu),
                (ou = n.stateNode.containerInfo),
                (iu = !0),
                uu(e, t, n),
                (ou = r),
                (iu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Zi || Hi(2, n, t), Zi || Hi(4, n, t), uu(e, t, n);
              break;
            case 1:
              Zi ||
                (Wi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  Bi(n, t, r)),
                uu(e, t, n);
              break;
            case 21:
              uu(e, t, n);
              break;
            case 22:
              Zi || Wi(n, t),
                (Zi = (r = Zi) || null !== n.memoizedState),
                uu(e, t, n),
                (Zi = r);
              break;
            default:
              uu(e, t, n);
          }
        }
        function cu(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              gd(e);
            } catch (n) {
              rc(t, t.return, n);
            }
        }
        function fu(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new tu()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new tu()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = uc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function du(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                l = e,
                i = t,
                u = i;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 27:
                  case 5:
                    (ou = u.stateNode), (iu = !1);
                    break e;
                  case 3:
                  case 4:
                    (ou = u.stateNode.containerInfo), (iu = !0);
                    break e;
                }
                u = u.return;
              }
              if (null === ou) throw Error(o(160));
              su(l, i, a),
                (ou = null),
                (iu = !1),
                null !== (l = a.alternate) && (l.return = null),
                (a.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        var pu = null;
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              du(t, e),
                hu(e),
                4 & r && (Hi(3, e, e.return), Ui(3, e), Hi(5, e, e.return));
              break;
            case 1:
              du(t, e),
                hu(e),
                512 & r && (Zi || null === n || Wi(n, n.return)),
                64 & r &&
                  Ji &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var a = pu;
              if (
                (du(t, e),
                hu(e),
                512 & r && (Zi || null === n || Wi(n, n.return)),
                4 & r)
              ) {
                var l = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a);
                        t: switch (r) {
                          case "title":
                            (!(l = a.getElementsByTagName("title")[0]) ||
                              l[We] ||
                              l[Me] ||
                              "http://www.w3.org/2000/svg" === l.namespaceURI ||
                              l.hasAttribute("itemprop")) &&
                              ((l = a.createElement(r)),
                              a.head.insertBefore(
                                l,
                                a.querySelector("head > title")
                              )),
                              qc(l, r, n),
                              (l[Me] = e),
                              Ge(l),
                              (r = l);
                            break e;
                          case "link":
                            var i = Pf("link", "href", a).get(
                              r + (n.href || "")
                            );
                            if (i)
                              for (var u = 0; u < i.length; u++)
                                if (
                                  (l = i[u]).getAttribute("href") ===
                                    (null == n.href ? null : n.href) &&
                                  l.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  l.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  l.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            qc((l = a.createElement(r)), r, n),
                              a.head.appendChild(l);
                            break;
                          case "meta":
                            if (
                              (i = Pf("meta", "content", a).get(
                                r + (n.content || "")
                              ))
                            )
                              for (u = 0; u < i.length; u++)
                                if (
                                  (l = i[u]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  l.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  l.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  l.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  l.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            qc((l = a.createElement(r)), r, n),
                              a.head.appendChild(l);
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        (l[Me] = e), Ge(l), (r = l);
                      }
                      e.stateNode = r;
                    } else zf(a, e.type, e.stateNode);
                  else e.stateNode = xf(a, r, e.memoizedProps);
                else
                  l !== r
                    ? (null === l
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : l.count--,
                      null === r
                        ? zf(a, e.type, e.stateNode)
                        : xf(a, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      Qi(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              if (4 & r && null === e.alternate) {
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  for (var s = a.firstChild; s; ) {
                    var c = s.nextSibling,
                      f = s.nodeName;
                    s[We] ||
                      "HEAD" === f ||
                      "BODY" === f ||
                      "SCRIPT" === f ||
                      "STYLE" === f ||
                      ("LINK" === f && "stylesheet" === s.rel.toLowerCase()) ||
                      a.removeChild(s),
                      (s = c);
                  }
                  for (var d = e.type, p = a.attributes; p.length; )
                    a.removeAttributeNode(p[0]);
                  qc(a, d, l), (a[Me] = e), (a[Ie] = l);
                } catch (h) {
                  rc(e, e.return, h);
                }
              }
            case 5:
              if (
                (du(t, e),
                hu(e),
                512 & r && (Zi || null === n || Wi(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  St(a, "");
                } catch (h) {
                  rc(e, e.return, h);
                }
              }
              4 & r &&
                null != e.stateNode &&
                Qi(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (eu = !0);
              break;
            case 6:
              if ((du(t, e), hu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (h) {
                  rc(e, e.return, h);
                }
              }
              break;
            case 3:
              if (
                ((Nf = null),
                (a = pu),
                (pu = pf(t.containerInfo)),
                du(t, e),
                (pu = a),
                hu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  gd(t.containerInfo);
                } catch (h) {
                  rc(e, e.return, h);
                }
              eu && ((eu = !1), gu(e));
              break;
            case 4:
              (r = pu),
                (pu = pf(e.stateNode.containerInfo)),
                du(t, e),
                hu(e),
                (pu = r);
              break;
            case 12:
              du(t, e), hu(e);
              break;
            case 13:
              du(t, e),
                hu(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (bs = ue()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), fu(e, r));
              break;
            case 22:
              if (
                (512 & r && (Zi || null === n || Wi(n, n.return)),
                (s = null !== e.memoizedState),
                (c = null !== n && null !== n.memoizedState),
                (Ji = (f = Ji) || s),
                (Zi = (d = Zi) || c),
                du(t, e),
                (Zi = d),
                (Ji = f),
                hu(e),
                ((t = e.stateNode)._current = e),
                (t._visibility &= -3),
                (t._visibility |= 2 & t._pendingVisibility),
                8192 & r &&
                  ((t._visibility = s ? -2 & t._visibility : 1 | t._visibility),
                  s && ((t = Ji || Zi), null === n || c || t || yu(e)),
                  null === e.memoizedProps ||
                    "manual" !== e.memoizedProps.mode))
              )
                e: for (n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((a = c.stateNode), s))
                          "function" === typeof (l = a.style).setProperty
                            ? l.setProperty("display", "none", "important")
                            : (l.display = "none");
                        else {
                          i = c.stateNode;
                          var m =
                            void 0 !== (u = c.memoizedProps.style) &&
                            null !== u &&
                            u.hasOwnProperty("display")
                              ? u.display
                              : null;
                          i.style.display =
                            null == m || "boolean" === typeof m
                              ? ""
                              : ("" + m).trim();
                        }
                      } catch (h) {
                        rc(c, c.return, h);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = s ? "" : c.memoizedProps;
                      } catch (h) {
                        rc(c, c.return, h);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), fu(e, n));
              break;
            case 19:
              du(t, e),
                hu(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), fu(e, r));
              break;
            case 21:
              break;
            default:
              du(t, e), hu(e);
          }
        }
        function hu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              if (27 !== e.tag) {
                e: {
                  for (var n = e.return; null !== n; ) {
                    if (Ki(n)) {
                      var r = n;
                      break e;
                    }
                    n = n.return;
                  }
                  throw Error(o(160));
                }
                switch (r.tag) {
                  case 27:
                    var a = r.stateNode;
                    Gi(e, Yi(e), a);
                    break;
                  case 5:
                    var l = r.stateNode;
                    32 & r.flags && (St(l, ""), (r.flags &= -33)),
                      Gi(e, Yi(e), l);
                    break;
                  case 3:
                  case 4:
                    var i = r.stateNode.containerInfo;
                    Xi(e, Yi(e), i);
                    break;
                  default:
                    throw Error(o(161));
                }
              }
            } catch (u) {
              rc(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              gu(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function vu(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              au(e, t.alternate, t), (t = t.sibling);
        }
        function yu(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Hi(4, t, t.return), yu(t);
                break;
              case 1:
                Wi(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  Bi(t, t.return, n),
                  yu(t);
                break;
              case 26:
              case 27:
              case 5:
                Wi(t, t.return), yu(t);
                break;
              case 22:
                Wi(t, t.return), null === t.memoizedState && yu(t);
                break;
              default:
                yu(t);
            }
            e = e.sibling;
          }
        }
        function bu(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              a = e,
              l = t,
              o = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                bu(a, l, n), Ui(4, l);
                break;
              case 1:
                if (
                  (bu(a, l, n),
                  "function" ===
                    typeof (a = (r = l).stateNode).componentDidMount)
                )
                  try {
                    a.componentDidMount();
                  } catch (s) {
                    rc(r, r.return, s);
                  }
                if (null !== (a = (r = l).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var u = a.shared.hiddenCallbacks;
                    if (null !== u)
                      for (
                        a.shared.hiddenCallbacks = null, a = 0;
                        a < u.length;
                        a++
                      )
                        Mi(u[a], i);
                  } catch (s) {
                    rc(r, r.return, s);
                  }
                }
                n && 64 & o && $i(l), Vi(l, l.return);
                break;
              case 26:
              case 27:
              case 5:
                bu(a, l, n), n && null === r && 4 & o && qi(l), Vi(l, l.return);
                break;
              case 12:
              default:
                bu(a, l, n);
                break;
              case 13:
                bu(a, l, n), n && 4 & o && cu(a, l);
                break;
              case 22:
                null === l.memoizedState && bu(a, l, n), Vi(l, l.return);
            }
            t = t.sibling;
          }
        }
        function wu(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ha(n));
        }
        function ku(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ha(e));
        }
        function Su(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) xu(e, t, n, r), (t = t.sibling);
        }
        function xu(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Su(e, t, n, r), 2048 & a && Ui(9, t);
              break;
            case 3:
              Su(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ha(e)));
              break;
            case 12:
              if (2048 & a) {
                Su(e, t, n, r), (e = t.stateNode);
                try {
                  var l = t.memoizedProps,
                    o = l.id,
                    i = l.onPostCommit;
                  "function" === typeof i &&
                    i(
                      o,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (u) {
                  rc(t, t.return, u);
                }
              } else Su(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (l = t.stateNode),
                null !== t.memoizedState
                  ? 4 & l._visibility
                    ? Su(e, t, n, r)
                    : Eu(e, t)
                  : 4 & l._visibility
                  ? Su(e, t, n, r)
                  : ((l._visibility |= 4),
                    _u(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & a && wu(t.alternate, t);
              break;
            case 24:
              Su(e, t, n, r), 2048 & a && ku(t.alternate, t);
              break;
            default:
              Su(e, t, n, r);
          }
        }
        function _u(e, t, n, r, a) {
          for (
            a = a && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var l = e,
              o = t,
              i = n,
              u = r,
              s = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                _u(l, o, i, u, a), Ui(8, o);
                break;
              case 23:
                break;
              case 22:
                var c = o.stateNode;
                null !== o.memoizedState
                  ? 4 & c._visibility
                    ? _u(l, o, i, u, a)
                    : Eu(l, o)
                  : ((c._visibility |= 4), _u(l, o, i, u, a)),
                  a && 2048 & s && wu(o.alternate, o);
                break;
              case 24:
                _u(l, o, i, u, a), a && 2048 & s && ku(o.alternate, o);
                break;
              default:
                _u(l, o, i, u, a);
            }
            t = t.sibling;
          }
        }
        function Eu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  Eu(n, r), 2048 & a && wu(r.alternate, r);
                  break;
                case 24:
                  Eu(n, r), 2048 & a && ku(r.alternate, r);
                  break;
                default:
                  Eu(n, r);
              }
              t = t.sibling;
            }
        }
        var Cu = 8192;
        function Nu(e) {
          if (e.subtreeFlags & Cu)
            for (e = e.child; null !== e; ) Pu(e), (e = e.sibling);
        }
        function Pu(e) {
          switch (e.tag) {
            case 26:
              Nu(e),
                e.flags & Cu &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === jf) throw Error(o(475));
                    var r = jf;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var a = yf(n.href),
                          l = e.querySelector(bf(a));
                        if (l)
                          return (
                            null !== (e = l._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = Rf.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = l),
                            void Ge(l)
                          );
                        (l = e.ownerDocument || e),
                          (n = wf(n)),
                          (a = ff.get(a)) && Ef(n, a),
                          Ge((l = l.createElement("link")));
                        var i = l;
                        (i._p = new Promise(function (e, t) {
                          (i.onload = e), (i.onerror = t);
                        })),
                          qc(l, "link", n),
                          (t.instance = l);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = Rf.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(pu, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              Nu(e);
              break;
            case 3:
            case 4:
              var t = pu;
              (pu = pf(e.stateNode.containerInfo)), Nu(e), (pu = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = Cu), (Cu = 16777216), Nu(e), (Cu = t))
                  : Nu(e));
          }
        }
        function zu(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Tu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nu = r), Ru(r, e);
              }
            zu(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) ju(e), (e = e.sibling);
        }
        function ju(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Tu(e), 2048 & e.flags && Hi(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Tu(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              4 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -5), Lu(e))
                : Tu(e);
          }
        }
        function Lu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nu = r), Ru(r, e);
              }
            zu(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                Hi(8, t, t.return), Lu(t);
                break;
              case 22:
                4 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -5), Lu(t));
                break;
              default:
                Lu(t);
            }
            e = e.sibling;
          }
        }
        function Ru(e, t) {
          for (; null !== nu; ) {
            var n = nu;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Hi(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ha(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (nu = r);
            else
              e: for (n = e; null !== nu; ) {
                var a = (r = nu).sibling,
                  l = r.return;
                if ((lu(r), r === n)) {
                  nu = null;
                  break e;
                }
                if (null !== a) {
                  (a.return = l), (nu = a);
                  break e;
                }
                nu = l;
              }
          }
        }
        function Ou(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Au(e, t, n, r) {
          return new Ou(e, t, n, r);
        }
        function Fu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Du(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Au(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 31457280 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Mu(e, t) {
          e.flags &= 31457282;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Iu(e, t, n, r, a, l) {
          var i = 0;
          if (((r = e), "function" === typeof e)) Fu(e) && (i = 1);
          else if ("string" === typeof e)
            i = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, Y.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case f:
                return Uu(n.children, a, l, t);
              case d:
                (i = 8), (a |= 24);
                break;
              case p:
                return (
                  ((e = Au(12, n, t, 2 | a)).elementType = p), (e.lanes = l), e
                );
              case y:
                return (
                  ((e = Au(13, n, t, a)).elementType = y), (e.lanes = l), e
                );
              case b:
                return (
                  ((e = Au(19, n, t, a)).elementType = b), (e.lanes = l), e
                );
              case S:
                return Hu(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case m:
                    case g:
                      i = 10;
                      break e;
                    case h:
                      i = 9;
                      break e;
                    case v:
                      i = 11;
                      break e;
                    case w:
                      i = 14;
                      break e;
                    case k:
                      (i = 16), (r = null);
                      break e;
                  }
                (i = 29),
                  (n = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Au(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Uu(e, t, n, r) {
          return ((e = Au(7, e, r, t)).lanes = n), e;
        }
        function Hu(e, t, n, r) {
          ((e = Au(22, e, r, t)).elementType = S), (e.lanes = n);
          var a = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 === (2 & a._pendingVisibility)) {
                var t = zr(e, 2);
                null !== t && ((a._pendingVisibility |= 2), Ls(t, e, 2));
              }
            },
            attach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 !== (2 & a._pendingVisibility)) {
                var t = zr(e, 2);
                null !== t && ((a._pendingVisibility &= -3), Ls(t, e, 2));
              }
            },
          };
          return (e.stateNode = a), e;
        }
        function $u(e, t, n) {
          return ((e = Au(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = Au(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Vu(e) {
          e.flags |= 4;
        }
        function Wu(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Tf(t))) {
            if (
              null !== (t = Pa.current) &&
              ((4194176 & rs) === rs
                ? null !== za
                : ((62914560 & rs) !== rs && 0 === (536870912 & rs)) ||
                  t !== za)
            )
              throw ((da = ua), ia);
            e.flags |= 8192;
          }
        }
        function qu(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Te() : 536870912),
              (e.lanes |= t),
              (hs |= t));
        }
        function Qu(e, t) {
          if (!Xr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ku(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 31457280 & a.subtreeFlags),
                (r |= 31457280 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yu(e, t, n) {
          var r = t.pendingProps;
          switch ((Qr(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return Ku(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                bi(Ia),
                ee(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ra(t)
                    ? Vu(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Gr && (Os(Gr), (Gr = null)))),
                Ku(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Vu(t),
                    null !== n
                      ? (Ku(t), Wu(t, n))
                      : (Ku(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Vu(t), Ku(t), Wu(t, n))
                    : (Ku(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Vu(t),
                    Ku(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              ne(t), (n = G.current);
              var a = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Vu(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ku(t), null;
                }
                (e = Y.current),
                  ra(t) ? ta(t) : ((e = cf(a, r, n)), (t.stateNode = e), Vu(t));
              }
              return Ku(t), null;
            case 5:
              if ((ne(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Vu(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ku(t), null;
                }
                if (((e = Y.current), ra(t))) ta(t);
                else {
                  switch (((a = Yc(G.current)), e)) {
                    case 1:
                      e = a.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = a.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = a.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = a.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = a.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? a.createElement("select", { is: r.is })
                              : a.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? a.createElement(n, { is: r.is })
                              : a.createElement(n);
                      }
                  }
                  (e[Me] = t), (e[Ie] = r);
                  e: for (a = t.child; null !== a; ) {
                    if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                    else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                      (a.child.return = a), (a = a.child);
                      continue;
                    }
                    if (a === t) break e;
                    for (; null === a.sibling; ) {
                      if (null === a.return || a.return === t) break e;
                      a = a.return;
                    }
                    (a.sibling.return = a.return), (a = a.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((qc(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Vu(t);
                }
              }
              return Ku(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Vu(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((e = G.current), ra(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (a = Kr))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  (e[Me] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      $c(e.nodeValue, n)
                    )) || ea(t);
                } else
                  ((e = Yc(e).createTextNode(r))[Me] = t), (t.stateNode = e);
              }
              return Ku(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = ra(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[Me] = t;
                  } else
                    aa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ku(t), (a = !1);
                } else null !== Gr && (Os(Gr), (Gr = null)), (a = !0);
                if (!a) return 256 & t.flags ? (Ra(t), t) : (Ra(t), null);
              }
              if ((Ra(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (a = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (a = r.alternate.memoizedState.cachePool.pool);
                var l = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (l = r.memoizedState.cachePool.pool),
                  l !== a && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                qu(t, t.updateQueue),
                Ku(t),
                null
              );
            case 4:
              return (
                ee(), null === e && Lc(t.stateNode.containerInfo), Ku(t), null
              );
            case 10:
              return bi(t.type), Ku(t), null;
            case 19:
              if ((Q(Oa), null === (a = t.memoizedState))) return Ku(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = a.rendering)))
                if (r) Qu(a, !1);
                else {
                  if (0 !== cs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = Aa(e))) {
                        for (
                          t.flags |= 128,
                            Qu(a, !1),
                            e = l.updateQueue,
                            t.updateQueue = e,
                            qu(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Mu(n, e), (n = n.sibling);
                        return K(Oa, (1 & Oa.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    ue() > ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qu(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = Aa(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      qu(t, e),
                      Qu(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !l.alternate &&
                        !Xr)
                    )
                      return Ku(t), null;
                  } else
                    2 * ue() - a.renderingStartTime > ws &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qu(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (e = a.last) ? (e.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = ue()),
                  (t.sibling = null),
                  (e = Oa.current),
                  K(Oa, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Ku(t), null);
            case 22:
            case 23:
              return (
                Ra(t),
                Na(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (Ku(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ku(t),
                null !== (n = t.updateQueue) && qu(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && Q(Ka),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                bi(Ia),
                Ku(t),
                null
              );
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Xu(e, t) {
          switch ((Qr(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                bi(Ia),
                ee(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return ne(t), null;
            case 13:
              if (
                (Ra(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                aa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Q(Oa), null;
            case 4:
              return ee(), null;
            case 10:
              return bi(t.type), null;
            case 22:
            case 23:
              return (
                Ra(t),
                Na(),
                null !== e && Q(Ka),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return bi(Ia), null;
            default:
              return null;
          }
        }
        function Gu(e, t) {
          switch ((Qr(t), t.tag)) {
            case 3:
              bi(Ia), ee();
              break;
            case 26:
            case 27:
            case 5:
              ne(t);
              break;
            case 4:
              ee();
              break;
            case 13:
              Ra(t);
              break;
            case 19:
              Q(Oa);
              break;
            case 10:
              bi(t.type);
              break;
            case 22:
            case 23:
              Ra(t), Na(), null !== e && Q(Ka);
              break;
            case 24:
              bi(Ia);
          }
        }
        var Ju = {
            getCacheForType: function (e) {
              var t = Ei(Ia),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          Zu = "function" === typeof WeakMap ? WeakMap : Map,
          es = 0,
          ts = null,
          ns = null,
          rs = 0,
          as = 0,
          ls = null,
          os = !1,
          is = !1,
          us = !1,
          ss = 0,
          cs = 0,
          fs = 0,
          ds = 0,
          ps = 0,
          ms = 0,
          hs = 0,
          gs = null,
          vs = null,
          ys = !1,
          bs = 0,
          ws = 1 / 0,
          ks = null,
          Ss = null,
          xs = !1,
          _s = null,
          Es = 0,
          Cs = 0,
          Ns = null,
          Ps = 0,
          zs = null;
        function Ts() {
          if (0 !== (2 & es) && 0 !== rs) return rs & -rs;
          if (null !== T.T) {
            return 0 !== Va ? Va : kc();
          }
          return Fe();
        }
        function js() {
          0 === ms && (ms = 0 === (536870912 & rs) || Xr ? ze() : 536870912);
          var e = Pa.current;
          return null !== e && (e.flags |= 32), ms;
        }
        function Ls(e, t, n) {
          ((e === ts && 2 === as) || null !== e.cancelPendingCommit) &&
            (Us(e, 0), Ds(e, rs, ms, !1)),
            Le(e, n),
            (0 !== (2 & es) && e === ts) ||
              (e === ts &&
                (0 === (2 & es) && (ds |= n), 4 === cs && Ds(e, rs, ms, !1)),
              hc(e));
        }
        function Rs(e, t, n) {
          if (0 !== (6 & es)) throw Error(o(327));
          for (
            var r =
                (!n && 0 === (60 & t) && 0 === (t & e.expiredLanes)) ||
                Ne(e, t),
              a = r
                ? (function (e, t) {
                    var n = es;
                    es |= 2;
                    var r = $s(),
                      a = Bs();
                    ts !== e || rs !== t
                      ? ((ks = null), (ws = ue() + 500), Us(e, t))
                      : (is = Ne(e, t));
                    e: for (;;)
                      try {
                        if (0 !== as && null !== ns) {
                          t = ns;
                          var l = ls;
                          t: switch (as) {
                            case 1:
                              (as = 0), (ls = null), Xs(e, t, l, 1);
                              break;
                            case 2:
                              if (sa(l)) {
                                (as = 0), (ls = null), Ys(t);
                                break;
                              }
                              (t = function () {
                                2 === as && ts === e && (as = 7), hc(e);
                              }),
                                l.then(t, t);
                              break e;
                            case 3:
                              as = 7;
                              break e;
                            case 4:
                              as = 5;
                              break e;
                            case 7:
                              sa(l)
                                ? ((as = 0), (ls = null), Ys(t))
                                : ((as = 0), (ls = null), Xs(e, t, l, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (ns.tag) {
                                case 26:
                                  i = ns.memoizedState;
                                case 5:
                                case 27:
                                  var u = ns;
                                  if (!i || Tf(i)) {
                                    (as = 0), (ls = null);
                                    var s = u.sibling;
                                    if (null !== s) ns = s;
                                    else {
                                      var c = u.return;
                                      null !== c
                                        ? ((ns = c), Gs(c))
                                        : (ns = null);
                                    }
                                    break t;
                                  }
                              }
                              (as = 0), (ls = null), Xs(e, t, l, 5);
                              break;
                            case 6:
                              (as = 0), (ls = null), Xs(e, t, l, 6);
                              break;
                            case 8:
                              Is(), (cs = 6);
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        Qs();
                        break;
                      } catch (f) {
                        Hs(e, f);
                      }
                    return (
                      (vi = gi = null),
                      (T.H = r),
                      (T.A = a),
                      (es = n),
                      null !== ns ? 0 : ((ts = null), (rs = 0), Cr(), cs)
                    );
                  })(e, t)
                : Ws(e, t, !0),
              l = r;
            ;

          ) {
            if (0 === a) {
              is && !r && Ds(e, t, 0, !1);
              break;
            }
            if (6 === a) Ds(e, t, 0, !os);
            else {
              if (((n = e.current.alternate), l && !Fs(n))) {
                (a = Ws(e, t, !1)), (l = !1);
                continue;
              }
              if (2 === a) {
                if (((l = t), e.errorRecoveryDisabledLanes & l)) var i = 0;
                else
                  i =
                    0 !== (i = -536870913 & e.pendingLanes)
                      ? i
                      : 536870912 & i
                      ? 536870912
                      : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var u = e;
                    a = gs;
                    var s = u.current.memoizedState.isDehydrated;
                    if (
                      (s && (Us(u, i).flags |= 256), 2 !== (i = Ws(u, i, !1)))
                    ) {
                      if (us && !s) {
                        (u.errorRecoveryDisabledLanes |= l), (ds |= l), (a = 4);
                        break e;
                      }
                      (l = vs), (vs = a), null !== l && Os(l);
                    }
                    a = i;
                  }
                  if (((l = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                Us(e, 0), Ds(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), a)) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194176 & t) === t) {
                      Ds(r, t, ms, !os);
                      break e;
                    }
                    break;
                  case 2:
                    vs = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if (
                  ((r.finishedWork = n),
                  (r.finishedLanes = t),
                  (62914560 & t) === t && 10 < (l = bs + 300 - ue()))
                ) {
                  if ((Ds(r, t, ms, !os), 0 !== Ce(r, 0))) break e;
                  r.timeoutHandle = ef(
                    As.bind(
                      null,
                      r,
                      n,
                      vs,
                      ks,
                      ys,
                      t,
                      ms,
                      ds,
                      hs,
                      os,
                      2,
                      -0,
                      0
                    ),
                    l
                  );
                } else As(r, n, vs, ks, ys, t, ms, ds, hs, os, 0, -0, 0);
              }
            }
            break;
          }
          hc(e);
        }
        function Os(e) {
          null === vs ? (vs = e) : vs.push.apply(vs, e);
        }
        function As(e, t, n, r, a, l, i, u, s, c, f, d, p) {
          var m = t.subtreeFlags;
          if (
            (8192 & m || 16785408 === (16785408 & m)) &&
            ((jf = { stylesheets: null, count: 0, unsuspend: Lf }),
            Pu(t),
            null !==
              (t = (function () {
                if (null === jf) throw Error(o(475));
                var e = jf;
                return (
                  e.stylesheets && 0 === e.count && Af(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var n = setTimeout(function () {
                          if (
                            (e.stylesheets && Af(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(n);
                          }
                        );
                      }
                    : null
                );
              })()))
          )
            return (
              (e.cancelPendingCommit = t(
                Zs.bind(null, e, n, r, a, i, u, s, 1, d, p)
              )),
              void Ds(e, l, i, !c)
            );
          Zs(e, n, r, a, i, u, s, f, d, p);
        }
        function Fs(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  l = a.getSnapshot;
                a = a.value;
                try {
                  if (!Kn(l(), a)) return !1;
                } catch (o) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Ds(e, t, n, r) {
          (t &= ~ps),
            (t &= ~ds),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var a = t; 0 < a; ) {
            var l = 31 - we(a),
              o = 1 << l;
            (r[l] = -1), (a &= ~o);
          }
          0 !== n && Re(e, n, t);
        }
        function Ms() {
          return 0 !== (6 & es) || (gc(0, !1), !1);
        }
        function Is() {
          if (null !== ns) {
            if (0 === as) var e = ns.return;
            else
              (vi = gi = null), vl((e = ns)), (ma = null), (ha = 0), (e = ns);
            for (; null !== e; ) Gu(e.alternate, e), (e = e.return);
            ns = null;
          }
        }
        function Us(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), tf(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Is(),
            (ts = e),
            (ns = n = Du(e.current, null)),
            (rs = t),
            (as = 0),
            (ls = null),
            (os = !1),
            (is = Ne(e, t)),
            (us = !1),
            (hs = ms = ps = ds = fs = cs = 0),
            (vs = gs = null),
            (ys = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - we(r),
                l = 1 << a;
              (t |= e[a]), (r &= ~l);
            }
          return (ss = t), Cr(), n;
        }
        function Hs(e, t) {
          (Za = null),
            (T.H = Eo),
            t === oa
              ? ((t = pa()), (as = 3))
              : t === ia
              ? ((t = pa()), (as = 4))
              : (as =
                  t === Bo
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (ls = t),
            null === ns && ((cs = 1), Mo(e, Or(t, e.current)));
        }
        function $s() {
          var e = T.H;
          return (T.H = Eo), null === e ? Eo : e;
        }
        function Bs() {
          var e = T.A;
          return (T.A = Ju), e;
        }
        function Vs() {
          (cs = 4),
            os || ((4194176 & rs) !== rs && null !== Pa.current) || (is = !0),
            (0 === (134217727 & fs) && 0 === (134217727 & ds)) ||
              null === ts ||
              Ds(ts, rs, ms, !1);
        }
        function Ws(e, t, n) {
          var r = es;
          es |= 2;
          var a = $s(),
            l = Bs();
          (ts === e && rs === t) || ((ks = null), Us(e, t)), (t = !1);
          var o = cs;
          e: for (;;)
            try {
              if (0 !== as && null !== ns) {
                var i = ns,
                  u = ls;
                switch (as) {
                  case 8:
                    Is(), (o = 6);
                    break e;
                  case 3:
                  case 2:
                  case 6:
                    null === Pa.current && (t = !0);
                    var s = as;
                    if (((as = 0), (ls = null), Xs(e, i, u, s), n && is)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    (s = as), (as = 0), (ls = null), Xs(e, i, u, s);
                }
              }
              qs(), (o = cs);
              break;
            } catch (c) {
              Hs(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (vi = gi = null),
            (es = r),
            (T.H = a),
            (T.A = l),
            null === ns && ((ts = null), (rs = 0), Cr()),
            o
          );
        }
        function qs() {
          for (; null !== ns; ) Ks(ns);
        }
        function Qs() {
          for (; null !== ns && !oe(); ) Ks(ns);
        }
        function Ks(e) {
          var t = mi(e.alternate, e, ss);
          (e.memoizedProps = e.pendingProps), null === t ? Gs(e) : (ns = t);
        }
        function Ys(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Zo(n, t, t.pendingProps, t.type, void 0, rs);
              break;
            case 11:
              t = Zo(n, t, t.pendingProps, t.type.render, t.ref, rs);
              break;
            case 5:
              vl(t);
            default:
              Gu(n, t), (t = mi(n, (t = ns = Mu(t, ss)), ss));
          }
          (e.memoizedProps = e.pendingProps), null === t ? Gs(e) : (ns = t);
        }
        function Xs(e, t, n, r) {
          (vi = gi = null), vl(t), (ma = null), (ha = 0);
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Si(t, n, a, !0),
                    null !== (n = Pa.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === za
                            ? Vs()
                            : null === n.alternate && 0 === cs && (cs = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === ua
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              ac(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === ua
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              ac(e, r, a)),
                          !1
                        );
                    }
                    throw Error(o(435, n.tag));
                  }
                  return ac(e, r, a), Vs(), !1;
                }
                if (Xr)
                  return (
                    null !== (t = Pa.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== Zr &&
                          la(Or((e = Error(o(422), { cause: r })), n)))
                      : (r !== Zr &&
                          la(Or((t = Error(o(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = Or(r, n)),
                        Oi(e, (a = Uo(e.stateNode, r, a))),
                        4 !== cs && (cs = 2)),
                    !1
                  );
                var l = Error(o(520), { cause: r });
                if (
                  ((l = Or(l, n)),
                  null === gs ? (gs = [l]) : gs.push(l),
                  4 !== cs && (cs = 2),
                  null === t)
                )
                  return !0;
                (r = Or(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        Oi(n, (e = Uo(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (l = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== l &&
                              "function" === typeof l.componentDidCatch &&
                              (null === Ss || !Ss.has(l)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          $o((a = Ho(a)), e, n, r),
                          Oi(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, rs)
            )
              return (cs = 1), Mo(e, Or(n, e.current)), void (ns = null);
          } catch (l) {
            if (null !== a) throw ((ns = a), l);
            return (cs = 1), Mo(e, Or(n, e.current)), void (ns = null);
          }
          32768 & t.flags
            ? (Xr || 1 === r
                ? (e = !0)
                : is || 0 !== (536870912 & rs)
                ? (e = !1)
                : ((os = e = !0),
                  (2 === r || 3 === r || 6 === r) &&
                    null !== (r = Pa.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              Js(t, e))
            : Gs(t);
        }
        function Gs(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void Js(t, os);
            e = t.return;
            var n = Yu(t.alternate, t, ss);
            if (null !== n) return void (ns = n);
            if (null !== (t = t.sibling)) return void (ns = t);
            ns = t = e;
          } while (null !== t);
          0 === cs && (cs = 5);
        }
        function Js(e, t) {
          do {
            var n = Xu(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (ns = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (ns = e);
            ns = e = n;
          } while (null !== e);
          (cs = 6), (ns = null);
        }
        function Zs(e, t, n, r, a, l, i, u, s, c) {
          var f = T.T,
            d = $.p;
          try {
            ($.p = 2),
              (T.T = null),
              (function (e, t, n, r, a, l, i, u) {
                do {
                  tc();
                } while (null !== _s);
                if (0 !== (6 & es)) throw Error(o(327));
                var s = e.finishedWork;
                if (((r = e.finishedLanes), null === s)) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  s === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (e.cancelPendingCommit = null);
                var c = s.lanes | s.childLanes;
                if (
                  ((function (e, t, n, r, a, l) {
                    var o = e.pendingLanes;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.warmLanes = 0),
                      (e.expiredLanes &= n),
                      (e.entangledLanes &= n),
                      (e.errorRecoveryDisabledLanes &= n),
                      (e.shellSuspendCounter = 0);
                    var i = e.entanglements,
                      u = e.expirationTimes,
                      s = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n; ) {
                      var c = 31 - we(n),
                        f = 1 << c;
                      (i[c] = 0), (u[c] = -1);
                      var d = s[c];
                      if (null !== d)
                        for (s[c] = null, c = 0; c < d.length; c++) {
                          var p = d[c];
                          null !== p && (p.lane &= -536870913);
                        }
                      n &= ~f;
                    }
                    0 !== r && Re(e, r, 0),
                      0 !== l &&
                        0 === a &&
                        0 !== e.tag &&
                        (e.suspendedLanes |= l & ~(o & ~t));
                  })(e, r, (c |= Er), l, i, u),
                  e === ts && ((ns = ts = null), (rs = 0)),
                  (0 === (10256 & s.subtreeFlags) && 0 === (10256 & s.flags)) ||
                    xs ||
                    ((xs = !0),
                    (Cs = c),
                    (Ns = n),
                    (function (e, t) {
                      ae(e, t);
                    })(de, function () {
                      return tc(), null;
                    })),
                  (n = 0 !== (15990 & s.flags)),
                  0 !== (15990 & s.subtreeFlags) || n
                    ? ((n = T.T),
                      (T.T = null),
                      (l = $.p),
                      ($.p = 2),
                      (i = es),
                      (es |= 4),
                      (function (e, t) {
                        if (
                          ((e = e.containerInfo), (Qc = Wf), er((e = Zn(e))))
                        ) {
                          if ("selectionStart" in e)
                            var n = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (n =
                                  ((n = e.ownerDocument) && n.defaultView) ||
                                  window).getSelection && n.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset,
                                  l = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  n.nodeType, l.nodeType;
                                } catch (g) {
                                  n = null;
                                  break e;
                                }
                                var i = 0,
                                  u = -1,
                                  s = -1,
                                  c = 0,
                                  f = 0,
                                  d = e,
                                  p = null;
                                t: for (;;) {
                                  for (
                                    var m;
                                    d !== n ||
                                      (0 !== a && 3 !== d.nodeType) ||
                                      (u = i + a),
                                      d !== l ||
                                        (0 !== r && 3 !== d.nodeType) ||
                                        (s = i + r),
                                      3 === d.nodeType &&
                                        (i += d.nodeValue.length),
                                      null !== (m = d.firstChild);

                                  )
                                    (p = d), (d = m);
                                  for (;;) {
                                    if (d === e) break t;
                                    if (
                                      (p === n && ++c === a && (u = i),
                                      p === l && ++f === r && (s = i),
                                      null !== (m = d.nextSibling))
                                    )
                                      break;
                                    p = (d = p).parentNode;
                                  }
                                  d = m;
                                }
                                n =
                                  -1 === u || -1 === s
                                    ? null
                                    : { start: u, end: s };
                              } else n = null;
                            }
                          n = n || { start: 0, end: 0 };
                        } else n = null;
                        for (
                          Kc = { focusedElem: e, selectionRange: n },
                            Wf = !1,
                            nu = t;
                          null !== nu;

                        )
                          if (
                            ((e = (t = nu).child),
                            0 !== (1028 & t.subtreeFlags) && null !== e)
                          )
                            (e.return = t), (nu = e);
                          else
                            for (; null !== nu; ) {
                              switch (
                                ((l = (t = nu).alternate), (e = t.flags), t.tag)
                              ) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 26:
                                case 27:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (0 !== (1024 & e) && null !== l) {
                                    (e = void 0),
                                      (n = t),
                                      (a = l.memoizedProps),
                                      (l = l.memoizedState),
                                      (r = n.stateNode);
                                    try {
                                      var h = Ro(
                                        n.type,
                                        a,
                                        (n.elementType, n.type)
                                      );
                                      (e = r.getSnapshotBeforeUpdate(h, l)),
                                        (r.__reactInternalSnapshotBeforeUpdate =
                                          e);
                                    } catch (v) {
                                      rc(n, n.return, v);
                                    }
                                  }
                                  break;
                                case 3:
                                  if (0 !== (1024 & e))
                                    if (
                                      9 ===
                                      (n = (e = t.stateNode.containerInfo)
                                        .nodeType)
                                    )
                                      of(e);
                                    else if (1 === n)
                                      switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                          of(e);
                                          break;
                                        default:
                                          e.textContent = "";
                                      }
                                  break;
                                default:
                                  if (0 !== (1024 & e)) throw Error(o(163));
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (nu = e);
                                break;
                              }
                              nu = t.return;
                            }
                        (h = ru), (ru = !1);
                      })(e, s),
                      mu(s, e),
                      tr(Kc, e.containerInfo),
                      (Wf = !!Qc),
                      (Kc = Qc = null),
                      (e.current = s),
                      au(e, s.alternate, s),
                      ie(),
                      (es = i),
                      ($.p = l),
                      (T.T = n))
                    : (e.current = s),
                  xs ? ((xs = !1), (_s = e), (Es = r)) : ec(e, c),
                  (c = e.pendingLanes),
                  0 === c && (Ss = null),
                  (function (e) {
                    if (ye && "function" === typeof ye.onCommitFiberRoot)
                      try {
                        ye.onCommitFiberRoot(
                          ve,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(s.stateNode),
                  hc(e),
                  null !== t)
                )
                  for (a = e.onRecoverableError, s = 0; s < t.length; s++)
                    (c = t[s]), a(c.value, { componentStack: c.stack });
                0 !== (3 & Es) && tc(),
                  (c = e.pendingLanes),
                  0 !== (4194218 & r) && 0 !== (42 & c)
                    ? e === zs
                      ? Ps++
                      : ((Ps = 0), (zs = e))
                    : (Ps = 0),
                  gc(0, !1);
              })(e, t, n, r, d, a, l, i);
          } finally {
            (T.T = f), ($.p = d);
          }
        }
        function ec(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ha(t));
        }
        function tc() {
          if (null !== _s) {
            var e = _s,
              t = Cs;
            Cs = 0;
            var n = Ae(Es),
              r = T.T,
              a = $.p;
            try {
              if ((($.p = 32 > n ? 32 : n), (T.T = null), null === _s))
                var l = !1;
              else {
                (n = Ns), (Ns = null);
                var i = _s,
                  u = Es;
                if (((_s = null), (Es = 0), 0 !== (6 & es)))
                  throw Error(o(331));
                var s = es;
                if (
                  ((es |= 4),
                  ju(i.current),
                  xu(i, i.current, u, n),
                  (es = s),
                  gc(0, !1),
                  ye && "function" === typeof ye.onPostCommitFiberRoot)
                )
                  try {
                    ye.onPostCommitFiberRoot(ve, i);
                  } catch (c) {}
                l = !0;
              }
              return l;
            } finally {
              ($.p = a), (T.T = r), ec(e, t);
            }
          }
          return !1;
        }
        function nc(e, t, n) {
          (t = Or(n, t)),
            null !== (e = Li(e, (t = Uo(e.stateNode, t, 2)), 2)) &&
              (Le(e, 2), hc(e));
        }
        function rc(e, t, n) {
          if (3 === e.tag) nc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                nc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ss || !Ss.has(r)))
                ) {
                  (e = Or(n, e)),
                    null !== (r = Li(t, (n = Ho(2)), 2)) &&
                      ($o(n, r, t, e), Le(r, 2), hc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ac(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new Zu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) ||
            ((us = !0), a.add(n), (e = lc.bind(null, e, t, n)), t.then(e, e));
        }
        function lc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            ts === e &&
              (rs & n) === n &&
              (4 === cs ||
              (3 === cs && (62914560 & rs) === rs && 300 > ue() - bs)
                ? 0 === (2 & es) && Us(e, 0)
                : (ps |= n),
              hs === rs && (hs = 0)),
            hc(e);
        }
        function oc(e, t) {
          0 === t && (t = Te()), null !== (e = zr(e, t)) && (Le(e, t), hc(e));
        }
        function ic(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), oc(e, n);
        }
        function uc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), oc(e, n);
        }
        var sc = null,
          cc = null,
          fc = !1,
          dc = !1,
          pc = !1,
          mc = 0;
        function hc(e) {
          var t;
          e !== cc &&
            null === e.next &&
            (null === cc ? (sc = cc = e) : (cc = cc.next = e)),
            (dc = !0),
            fc ||
              ((fc = !0),
              (t = vc),
              rf(function () {
                0 !== (6 & es) ? ae(ce, t) : t();
              }));
        }
        function gc(e, t) {
          if (!pc && dc) {
            pc = !0;
            do {
              for (var n = !1, r = sc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var l = 0;
                    else {
                      var o = r.suspendedLanes,
                        i = r.pingedLanes;
                      (l = (1 << (31 - we(42 | e) + 1)) - 1),
                        (l =
                          201326677 & (l &= a & ~(o & ~i))
                            ? (201326677 & l) | 1
                            : l
                            ? 2 | l
                            : 0);
                    }
                    0 !== l && ((n = !0), wc(r, l));
                  } else
                    (l = rs),
                      0 === (3 & (l = Ce(r, r === ts ? l : 0))) ||
                        Ne(r, l) ||
                        ((n = !0), wc(r, l));
                r = r.next;
              }
            } while (n);
            pc = !1;
          }
        }
        function vc() {
          dc = fc = !1;
          var e = 0;
          0 !== mc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== Zc && ((Zc = e), !0);
              return (Zc = null), !1;
            })() && (e = mc),
            (mc = 0));
          for (var t = ue(), n = null, r = sc; null !== r; ) {
            var a = r.next,
              l = yc(r, t);
            0 === l
              ? ((r.next = null),
                null === n ? (sc = a) : (n.next = a),
                null === a && (cc = n))
              : ((n = r), (0 !== e || 0 !== (3 & l)) && (dc = !0)),
              (r = a);
          }
          gc(e, !1);
        }
        function yc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              l = -62914561 & e.pendingLanes;
            0 < l;

          ) {
            var o = 31 - we(l),
              i = 1 << o,
              u = a[o];
            -1 === u
              ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = Pe(i, t))
              : u <= t && (e.expiredLanes |= i),
              (l &= ~i);
          }
          if (
            ((n = rs),
            (n = Ce(e, e === (t = ts) ? n : 0)),
            (r = e.callbackNode),
            0 === n || (e === t && 2 === as) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && le(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || Ne(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && le(r), Ae(n))) {
              case 2:
              case 8:
                n = fe;
                break;
              case 32:
              default:
                n = de;
                break;
              case 268435456:
                n = me;
            }
            return (
              (r = bc.bind(null, e)),
              (n = ae(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && le(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function bc(e, t) {
          var n = e.callbackNode;
          if (tc() && e.callbackNode !== n) return null;
          var r = rs;
          return 0 === (r = Ce(e, e === ts ? r : 0))
            ? null
            : (Rs(e, r, t),
              yc(e, ue()),
              null != e.callbackNode && e.callbackNode === n
                ? bc.bind(null, e)
                : null);
        }
        function wc(e, t) {
          if (tc()) return null;
          Rs(e, t, !0);
        }
        function kc() {
          return 0 === mc && (mc = ze()), mc;
        }
        function Sc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : zt("" + e);
        }
        function xc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var _c = 0; _c < kr.length; _c++) {
          var Ec = kr[_c];
          Sr(Ec.toLowerCase(), "on" + (Ec[0].toUpperCase() + Ec.slice(1)));
        }
        Sr(pr, "onAnimationEnd"),
          Sr(mr, "onAnimationIteration"),
          Sr(hr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(gr, "onTransitionRun"),
          Sr(vr, "onTransitionStart"),
          Sr(yr, "onTransitionCancel"),
          Sr(br, "onTransitionEnd"),
          tt("onMouseEnter", ["mouseout", "mouseover"]),
          tt("onMouseLeave", ["mouseout", "mouseover"]),
          tt("onPointerEnter", ["pointerout", "pointerover"]),
          tt("onPointerLeave", ["pointerout", "pointerover"]),
          et(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          et(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          et("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          et(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Cc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Nc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Cc)
          );
        function Pc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  (l = i), (a.currentTarget = s);
                  try {
                    l(a);
                  } catch (c) {
                    Oo(c);
                  }
                  (a.currentTarget = null), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  (l = i), (a.currentTarget = s);
                  try {
                    l(a);
                  } catch (c) {
                    Oo(c);
                  }
                  (a.currentTarget = null), (l = u);
                }
            }
          }
        }
        function zc(e, t) {
          var n = t[He];
          void 0 === n && (n = t[He] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Rc(t, e, 2, !1), n.add(r));
        }
        function Tc(e, t, n) {
          var r = 0;
          t && (r |= 4), Rc(n, e, r, t);
        }
        var jc = "_reactListening" + Math.random().toString(36).slice(2);
        function Lc(e) {
          if (!e[jc]) {
            (e[jc] = !0),
              Je.forEach(function (t) {
                "selectionchange" !== t &&
                  (Nc.has(t) || Tc(t, !1, e), Tc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[jc] || ((t[jc] = !0), Tc("selectionchange", !1, t));
          }
        }
        function Rc(e, t, n, r) {
          switch (Jf(t)) {
            case 2:
              var a = qf;
              break;
            case 8:
              a = Qf;
              break;
            default:
              a = Kf;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Mt ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Oc(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = Qe(i))) return;
                  if (5 === (u = o.tag) || 6 === u || 26 === u || 27 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Ft(function () {
            var r = l,
              a = jt(n),
              o = [];
            e: {
              var i = wr.get(e);
              if (void 0 !== i) {
                var u = Jt,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === Vt(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = mn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = an);
                    break;
                  case "focusout":
                    (s = "blur"), (u = an);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = an;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = nn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = rn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = gn;
                    break;
                  case pr:
                  case mr:
                  case hr:
                    u = ln;
                    break;
                  case br:
                    u = vn;
                    break;
                  case "scroll":
                  case "scrollend":
                    u = en;
                    break;
                  case "wheel":
                    u = yn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = on;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = hn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    u = bn;
                }
                var c = 0 !== (4 & t),
                  f = !c && ("scroll" === e || "scrollend" === e),
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, m = r; null !== m; ) {
                  var h = m;
                  if (
                    ((p = h.stateNode),
                    (5 !== (h = h.tag) && 26 !== h && 27 !== h) ||
                      null === p ||
                      null === d ||
                      (null != (h = Dt(m, d)) && c.push(Ac(m, h, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === Tt ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!Qe(s) && !s[Ue])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? Qe(s)
                          : null) &&
                        ((f = D(s)),
                        (c = s.tag),
                        s !== f || (5 !== c && 27 !== c && 6 !== c)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = nn),
                  (h = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = hn),
                    (h = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == u ? i : Ye(u)),
                  (p = null == s ? i : Ye(s)),
                  ((i = new c(h, m + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (h = null),
                  Qe(a) === r &&
                    (((c = new c(d, m + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (h = c)),
                  (f = h),
                  u && s)
                )
                  e: {
                    for (d = s, m = 0, p = c = u; p; p = Dc(p)) m++;
                    for (p = 0, h = d; h; h = Dc(h)) p++;
                    for (; 0 < m - p; ) (c = Dc(c)), m--;
                    for (; 0 < p - m; ) (d = Dc(d)), p--;
                    for (; m--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Dc(c)), (d = Dc(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Mc(o, i, u, c, !1),
                  null !== s && null !== f && Mc(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? Ye(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Dn;
              else if (jn(i))
                if (Mn) g = Qn;
                else {
                  g = Wn;
                  var v = Vn;
                }
              else
                !(u = i.nodeName) ||
                "input" !== u.toLowerCase() ||
                ("checkbox" !== i.type && "radio" !== i.type)
                  ? r && Ct(r.elementType) && (g = Dn)
                  : (g = qn);
              switch (
                (g && (g = g(e, r))
                  ? Ln(o, g, n, a)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      r &&
                      "number" === i.type &&
                      null != r.memoizedProps.value &&
                      yt(i, "number", i.value)),
                (v = r ? Ye(r) : window),
                e)
              ) {
                case "focusin":
                  (jn(v) || "true" === v.contentEditable) &&
                    ((rr = v), (ar = r), (lr = null));
                  break;
                case "focusout":
                  lr = ar = rr = null;
                  break;
                case "mousedown":
                  or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (or = !1), ir(o, n, a);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  ir(o, n, a);
              }
              var y;
              if (kn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                zn
                  ? Nn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (_n &&
                  "ko" !== n.locale &&
                  (zn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && zn && (y = Bt())
                    : ((Ht = "value" in (Ut = a) ? Ut.value : Ut.textContent),
                      (zn = !0))),
                0 < (v = Fc(r, b)).length &&
                  ((b = new un(b, e, null, n, a)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Pn(n)) && (b.data = y))),
                (y = xn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Pn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Cn = !0), En);
                        case "textInput":
                          return (e = t.data) === En && Cn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (zn)
                        return "compositionend" === e || (!kn && Nn(e, t))
                          ? ((e = Bt()), ($t = Ht = Ut = null), (zn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return _n && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (b = Fc(r, "onBeforeInput")).length &&
                  ((v = new un("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: v, listeners: b }),
                  (v.data = y)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var l = Sc((a[Ie] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (t = (t = o[Ie] || null)
                          ? Sc(t.formAction)
                          : o.getAttribute("formAction")) &&
                      ((l = t), (o = null));
                    var i = new Jt("action", "action", null, r, a);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== mc) {
                                var e = o ? xc(a, o) : new FormData(a);
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: l,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof l &&
                                (i.preventDefault(),
                                (e = o ? xc(a, o) : new FormData(a)),
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: l,
                                  },
                                  l,
                                  e
                                ));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(o, e, r, n, a);
            }
            Pc(o, t);
          });
        }
        function Ac(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Fc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            (5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
              null === l ||
              (null != (a = Dt(e, n)) && r.unshift(Ac(e, a, l)),
              null != (a = Dt(e, t)) && r.push(Ac(e, a, l))),
              (e = e.return);
          }
          return r;
        }
        function Dc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Mc(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (((i = i.tag), null !== u && u === r)) break;
            (5 !== i && 26 !== i && 27 !== i) ||
              null === s ||
              ((u = s),
              a
                ? null != (s = Dt(n, l)) && o.unshift(Ac(n, s, u))
                : a || (null != (s = Dt(n, l)) && o.push(Ac(n, s, u)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Ic = /\r\n?/g,
          Uc = /\u0000|\uFFFD/g;
        function Hc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Ic, "\n")
            .replace(Uc, "");
        }
        function $c(e, t) {
          return (t = Hc(t)), Hc(e) === t;
        }
        function Bc() {}
        function Vc(e, t, n, r, a, l) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  St(e, "" + r);
              break;
            case "className":
              it(e, "class", r);
              break;
            case "tabIndex":
              it(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              it(e, n, r);
              break;
            case "style":
              Et(e, r, l);
              break;
            case "data":
              if ("object" !== t) {
                it(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = zt("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof l &&
                  ("formAction" === n
                    ? ("input" !== t && Vc(e, t, "name", a.name, a, null),
                      Vc(e, t, "formEncType", a.formEncType, a, null),
                      Vc(e, t, "formMethod", a.formMethod, a, null),
                      Vc(e, t, "formTarget", a.formTarget, a, null))
                    : (Vc(e, t, "encType", a.encType, a, null),
                      Vc(e, t, "method", a.method, a, null),
                      Vc(e, t, "target", a.target, a, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = zt("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = Bc);
              break;
            case "onScroll":
              null != r && zc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && zc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = zt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              zc("beforetoggle", e), zc("toggle", e), ot(e, "popover", r);
              break;
            case "xlinkActuate":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              ot(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                ot(e, (n = Nt.get(n) || n), r);
          }
        }
        function Wc(e, t, n, r, a, l) {
          switch (n) {
            case "style":
              Et(e, r, l);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  St(e, "" + r);
              break;
            case "onScroll":
              null != r && zc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && zc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Bc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              Ze.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ===
                  typeof (l = null != (l = e[Ie] || null) ? l[n] : null) &&
                  e.removeEventListener(t, l, a),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : ot(e, n, r)
                  : ("function" !== typeof l &&
                      null !== l &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
          }
        }
        function qc(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              zc("error", e), zc("load", e);
              var r,
                a = !1,
                l = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        l = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                      default:
                        Vc(e, t, r, i, n, null);
                    }
                }
              return (
                l && Vc(e, t, "srcSet", n.srcSet, n, null),
                void (a && Vc(e, t, "src", n.src, n, null))
              );
            case "input":
              zc("invalid", e);
              var u = (r = i = l = null),
                s = null,
                c = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var f = n[a];
                  if (null != f)
                    switch (a) {
                      case "name":
                        l = f;
                        break;
                      case "type":
                        i = f;
                        break;
                      case "checked":
                        s = f;
                        break;
                      case "defaultChecked":
                        c = f;
                        break;
                      case "value":
                        r = f;
                        break;
                      case "defaultValue":
                        u = f;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != f) throw Error(o(137, t));
                        break;
                      default:
                        Vc(e, t, a, f, n, null);
                    }
                }
              return vt(e, r, u, s, c, i, l, !1), void ft(e);
            case "select":
              for (l in (zc("invalid", e), (a = i = r = null), n))
                if (n.hasOwnProperty(l) && null != (u = n[l]))
                  switch (l) {
                    case "value":
                      r = u;
                      break;
                    case "defaultValue":
                      i = u;
                      break;
                    case "multiple":
                      a = u;
                    default:
                      Vc(e, t, l, u, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!a),
                void (null != t
                  ? bt(e, !!a, t, !1)
                  : null != n && bt(e, !!a, n, !0))
              );
            case "textarea":
              for (i in (zc("invalid", e), (r = l = a = null), n))
                if (n.hasOwnProperty(i) && null != (u = n[i]))
                  switch (i) {
                    case "value":
                      a = u;
                      break;
                    case "defaultValue":
                      l = u;
                      break;
                    case "children":
                      r = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != u) throw Error(o(91));
                      break;
                    default:
                      Vc(e, t, i, u, n, null);
                  }
              return kt(e, a, l, r), void ft(e);
            case "option":
              for (s in n)
                if (n.hasOwnProperty(s) && null != (a = n[s]))
                  if ("selected" === s)
                    e.selected =
                      a && "function" !== typeof a && "symbol" !== typeof a;
                  else Vc(e, t, s, a, n, null);
              return;
            case "dialog":
              zc("cancel", e), zc("close", e);
              break;
            case "iframe":
            case "object":
              zc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Cc.length; a++) zc(Cc[a], e);
              break;
            case "image":
              zc("error", e), zc("load", e);
              break;
            case "details":
              zc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              zc("error", e), zc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      Vc(e, t, c, a, n, null);
                  }
              return;
            default:
              if (Ct(t)) {
                for (f in n)
                  n.hasOwnProperty(f) &&
                    void 0 !== (a = n[f]) &&
                    Wc(e, t, f, a, n, void 0);
                return;
              }
          }
          for (u in n)
            n.hasOwnProperty(u) &&
              null != (a = n[u]) &&
              Vc(e, t, u, a, n, null);
        }
        var Qc = null,
          Kc = null;
        function Yc(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function Xc(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Gc(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function Jc(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Zc = null;
        var ef = "function" === typeof setTimeout ? setTimeout : void 0,
          tf = "function" === typeof clearTimeout ? clearTimeout : void 0,
          nf = "function" === typeof Promise ? Promise : void 0,
          rf =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof nf
              ? function (e) {
                  return nf.resolve(null).then(e).catch(af);
                }
              : ef;
        function af(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lf(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void gd(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          gd(t);
        }
        function of(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                of(n), qe(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function uf(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sf(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function cf(e, t, n) {
          switch (((t = Yc(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        var ff = new Map(),
          df = new Set();
        function pf(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : e.ownerDocument;
        }
        var mf = $.d;
        $.d = {
          f: function () {
            var e = mf.f(),
              t = Ms();
            return e || t;
          },
          r: function (e) {
            var t = Ke(e);
            null !== t && 5 === t.tag && "form" === t.type ? po(t) : mf.r(e);
          },
          D: function (e) {
            mf.D(e), gf("dns-prefetch", e, null);
          },
          C: function (e, t) {
            mf.C(e, t), gf("preconnect", e, t);
          },
          L: function (e, t, n) {
            mf.L(e, t, n);
            var r = hf;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + ht(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + ht(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (a += '[imagesizes="' + ht(n.imageSizes) + '"]'))
                : (a += '[href="' + ht(e) + '"]');
              var l = a;
              switch (t) {
                case "style":
                  l = yf(e);
                  break;
                case "script":
                  l = kf(e);
              }
              ff.has(l) ||
                ((e = j(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                ff.set(l, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(bf(l))) ||
                  ("script" === t && r.querySelector(Sf(l))) ||
                  (qc((t = r.createElement("link")), "link", e),
                  Ge(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            mf.m(e, t);
            var n = hf;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                a =
                  'link[rel="modulepreload"][as="' +
                  ht(r) +
                  '"][href="' +
                  ht(e) +
                  '"]',
                l = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  l = kf(e);
              }
              if (
                !ff.has(l) &&
                ((e = j({ rel: "modulepreload", href: e }, t)),
                ff.set(l, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Sf(l))) return;
                }
                qc((r = n.createElement("link")), "link", e),
                  Ge(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            mf.X(e, t);
            var n = hf;
            if (n && e) {
              var r = Xe(n).hoistableScripts,
                a = kf(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(Sf(a))) ||
                  ((e = j({ src: e, async: !0 }, t)),
                  (t = ff.get(a)) && Cf(e, t),
                  Ge((l = n.createElement("script"))),
                  qc(l, "link", e),
                  n.head.appendChild(l)),
                (l = { type: "script", instance: l, count: 1, state: null }),
                r.set(a, l));
            }
          },
          S: function (e, t, n) {
            mf.S(e, t, n);
            var r = hf;
            if (r && e) {
              var a = Xe(r).hoistableStyles,
                l = yf(e);
              t = t || "default";
              var o = a.get(l);
              if (!o) {
                var i = { loading: 0, preload: null };
                if ((o = r.querySelector(bf(l)))) i.loading = 5;
                else {
                  (e = j(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = ff.get(l)) && Ef(e, n);
                  var u = (o = r.createElement("link"));
                  Ge(u),
                    qc(u, "link", e),
                    (u._p = new Promise(function (e, t) {
                      (u.onload = e), (u.onerror = t);
                    })),
                    u.addEventListener("load", function () {
                      i.loading |= 1;
                    }),
                    u.addEventListener("error", function () {
                      i.loading |= 2;
                    }),
                    (i.loading |= 4),
                    _f(o, t, r);
                }
                (o = { type: "stylesheet", instance: o, count: 1, state: i }),
                  a.set(l, o);
              }
            }
          },
          M: function (e, t) {
            mf.M(e, t);
            var n = hf;
            if (n && e) {
              var r = Xe(n).hoistableScripts,
                a = kf(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(Sf(a))) ||
                  ((e = j({ src: e, async: !0, type: "module" }, t)),
                  (t = ff.get(a)) && Cf(e, t),
                  Ge((l = n.createElement("script"))),
                  qc(l, "link", e),
                  n.head.appendChild(l)),
                (l = { type: "script", instance: l, count: 1, state: null }),
                r.set(a, l));
            }
          },
        };
        var hf = "undefined" === typeof document ? null : document;
        function gf(e, t, n) {
          var r = hf;
          if (r && "string" === typeof t && t) {
            var a = ht(t);
            (a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
              df.has(a) ||
                (df.add(a),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(a) &&
                  (qc((t = r.createElement("link")), "link", e),
                  Ge(t),
                  r.head.appendChild(t)));
          }
        }
        function vf(e, t, n, r) {
          var a,
            l,
            i,
            u,
            s = (s = G.current) ? pf(s) : null;
          if (!s) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = yf(n.href)),
                  (r = (n = Xe(s).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = yf(n.href);
                var c = Xe(s).hoistableStyles,
                  f = c.get(e);
                if (
                  (f ||
                    ((s = s.ownerDocument || s),
                    (f = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, f),
                    (c = s.querySelector(bf(e))) &&
                      !c._p &&
                      ((f.instance = c), (f.state.loading = 5)),
                    ff.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      ff.set(e, n),
                      c ||
                        ((a = s),
                        (l = e),
                        (i = n),
                        (u = f.state),
                        a.querySelector(
                          'link[rel="preload"][as="style"][' + l + "]"
                        )
                          ? (u.loading = 1)
                          : ((l = a.createElement("link")),
                            (u.preload = l),
                            l.addEventListener("load", function () {
                              return (u.loading |= 1);
                            }),
                            l.addEventListener("error", function () {
                              return (u.loading |= 2);
                            }),
                            qc(l, "link", i),
                            Ge(l),
                            a.head.appendChild(l))))),
                  t && null === r)
                )
                  throw Error(o(528, ""));
                return f;
              }
              if (t && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = kf(n)),
                    (r = (n = Xe(s).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function yf(e) {
          return 'href="' + ht(e) + '"';
        }
        function bf(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function wf(e) {
          return j({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function kf(e) {
          return '[src="' + ht(e) + '"]';
        }
        function Sf(e) {
          return "script[async]" + e;
        }
        function xf(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + ht(n.href) + '"]'
                );
                if (r) return (t.instance = r), Ge(r), r;
                var a = j({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Ge((r = (e.ownerDocument || e).createElement("style"))),
                  qc(r, "style", a),
                  _f(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = yf(n.href);
                var l = e.querySelector(bf(a));
                if (l)
                  return (t.state.loading |= 4), (t.instance = l), Ge(l), l;
                (r = wf(n)),
                  (a = ff.get(a)) && Ef(r, a),
                  Ge((l = (e.ownerDocument || e).createElement("link")));
                var i = l;
                return (
                  (i._p = new Promise(function (e, t) {
                    (i.onload = e), (i.onerror = t);
                  })),
                  qc(l, "link", r),
                  (t.state.loading |= 4),
                  _f(l, n.precedence, e),
                  (t.instance = l)
                );
              case "script":
                return (
                  (l = kf(n.src)),
                  (a = e.querySelector(Sf(l)))
                    ? ((t.instance = a), Ge(a), a)
                    : ((r = n),
                      (a = ff.get(l)) && Cf((r = j({}, n)), a),
                      Ge(
                        (a = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      qc(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              _f(r, n.precedence, e));
          return t.instance;
        }
        function _f(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              a = r.length ? r[r.length - 1] : null,
              l = a,
              o = 0;
            o < r.length;
            o++
          ) {
            var i = r[o];
            if (i.dataset.precedence === t) l = i;
            else if (l !== a) break;
          }
          l
            ? l.parentNode.insertBefore(e, l.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Ef(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function Cf(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Nf = null;
        function Pf(e, t, n) {
          if (null === Nf) {
            var r = new Map(),
              a = (Nf = new Map());
            a.set(n, r);
          } else (r = (a = Nf).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), a = 0;
            a < n.length;
            a++
          ) {
            var l = n[a];
            if (
              !(
                l[We] ||
                l[Me] ||
                ("link" === e && "stylesheet" === l.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== l.namespaceURI
            ) {
              var o = l.getAttribute(t) || "";
              o = e + o;
              var i = r.get(o);
              i ? i.push(l) : r.set(o, [l]);
            }
          }
          return r;
        }
        function zf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Tf(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var jf = null;
        function Lf() {}
        function Rf() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) Af(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Of = null;
        function Af(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Of = new Map()),
              t.forEach(Ff, e),
              (Of = null),
              Rf.call(e));
        }
        function Ff(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Of.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Of.set(e, n);
              for (
                var a = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  l = 0;
                l < a.length;
                l++
              ) {
                var o = a[l];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (n.set(o.dataset.precedence, o), (r = o));
              }
              r && n.set(null, r);
            }
            (o = (a = t.instance).getAttribute("data-precedence")),
              (l = n.get(o) || r) === r && n.set(null, a),
              n.set(o, a),
              this.count++,
              (r = Rf.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              l
                ? l.parentNode.insertBefore(a, l.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    a,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Df = {
          $$typeof: g,
          Provider: null,
          Consumer: null,
          _currentValue: B,
          _currentValue2: B,
          _threadCount: 0,
        };
        function Mf(e, t, n, r, a, l, o, i) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = je(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = je(0)),
            (this.hiddenUpdates = je(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = l),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = i),
            (this.incompleteTransitions = new Map());
        }
        function If(e, t, n, r, a, l, o, i, u, s, c, f) {
          return (
            (e = new Mf(e, t, n, o, i, u, s, f)),
            (t = 1),
            !0 === l && (t |= 24),
            (l = Au(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (t = Ua()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (l.memoizedState = { element: r, isDehydrated: n, cache: t }),
            zi(l),
            e
          );
        }
        function Uf(e) {
          return e ? (e = Lr) : Lr;
        }
        function Hf(e, t, n, r, a, l) {
          (a = Uf(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = ji(t)).payload = { element: n }),
            null !== (l = void 0 === l ? null : l) && (r.callback = l),
            null !== (n = Li(e, r, t)) && (Ls(n, 0, t), Ri(n, e, t));
        }
        function $f(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Bf(e, t) {
          $f(e, t), (e = e.alternate) && $f(e, t);
        }
        function Vf(e) {
          if (13 === e.tag) {
            var t = zr(e, 67108864);
            null !== t && Ls(t, 0, 67108864), Bf(e, 67108864);
          }
        }
        var Wf = !0;
        function qf(e, t, n, r) {
          var a = T.T;
          T.T = null;
          var l = $.p;
          try {
            ($.p = 2), Kf(e, t, n, r);
          } finally {
            ($.p = l), (T.T = a);
          }
        }
        function Qf(e, t, n, r) {
          var a = T.T;
          T.T = null;
          var l = $.p;
          try {
            ($.p = 8), Kf(e, t, n, r);
          } finally {
            ($.p = l), (T.T = a);
          }
        }
        function Kf(e, t, n, r) {
          if (Wf) {
            var a = Yf(r);
            if (null === a) Oc(e, t, r, Xf, n), id(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (ed = ud(ed, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (td = ud(td, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (nd = ud(nd, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return rd.set(l, ud(rd.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      ad.set(l, ud(ad.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((id(e, r), 4 & t && -1 < od.indexOf(e))) {
              for (; null !== a; ) {
                var l = Ke(a);
                if (null !== l)
                  switch (l.tag) {
                    case 3:
                      if (
                        (l = l.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = Ee(l.pendingLanes);
                        if (0 !== o) {
                          var i = l;
                          for (
                            i.pendingLanes |= 2, i.entangledLanes |= 2;
                            o;

                          ) {
                            var u = 1 << (31 - we(o));
                            (i.entanglements[1] |= u), (o &= ~u);
                          }
                          hc(l),
                            0 === (6 & es) && ((ws = ue() + 500), gc(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (i = zr(l, 2)) && Ls(i, 0, 2), Ms(), Bf(l, 2);
                  }
                if ((null === (l = Yf(r)) && Oc(e, t, r, Xf, n), l === a))
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Oc(e, t, r, null, n);
          }
        }
        function Yf(e) {
          return Gf((e = jt(e)));
        }
        var Xf = null;
        function Gf(e) {
          if (((Xf = null), null !== (e = Qe(e)))) {
            var t = D(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = M(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Xf = e), null;
        }
        function Jf(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (se()) {
                case ce:
                  return 2;
                case fe:
                  return 8;
                case de:
                case pe:
                  return 32;
                case me:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Zf = !1,
          ed = null,
          td = null,
          nd = null,
          rd = new Map(),
          ad = new Map(),
          ld = [],
          od =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function id(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ed = null;
              break;
            case "dragenter":
            case "dragleave":
              td = null;
              break;
            case "mouseover":
            case "mouseout":
              nd = null;
              break;
            case "pointerover":
            case "pointerout":
              rd.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ad.delete(t.pointerId);
          }
        }
        function ud(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ke(t)) && Vf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function sd(e) {
          var t = Qe(e.target);
          if (null !== t) {
            var n = D(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = M(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = $.p;
                      try {
                        return ($.p = e), t();
                      } finally {
                        $.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Ts(),
                          t = zr(n, e);
                        null !== t && Ls(t, 0, e), Bf(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function cd(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yf(e.nativeEvent);
            if (null !== n)
              return null !== (t = Ke(n)) && Vf(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Tt = r), n.target.dispatchEvent(r), (Tt = null), t.shift();
          }
          return !0;
        }
        function fd(e, t, n) {
          cd(e) && n.delete(t);
        }
        function dd() {
          (Zf = !1),
            null !== ed && cd(ed) && (ed = null),
            null !== td && cd(td) && (td = null),
            null !== nd && cd(nd) && (nd = null),
            rd.forEach(fd),
            ad.forEach(fd);
        }
        function pd(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Zf ||
              ((Zf = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, dd)));
        }
        var md = null;
        function hd(e) {
          md !== e &&
            ((md = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              md === e && (md = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Gf(r || n)) continue;
                  break;
                }
                var l = Ke(n);
                null !== l &&
                  (e.splice(t, 3),
                  (t -= 3),
                  co(
                    l,
                    { pending: !0, data: a, method: n.method, action: r },
                    r,
                    a
                  ));
              }
            }));
        }
        function gd(e) {
          function t(t) {
            return pd(t, e);
          }
          null !== ed && pd(ed, e),
            null !== td && pd(td, e),
            null !== nd && pd(nd, e),
            rd.forEach(t),
            ad.forEach(t);
          for (var n = 0; n < ld.length; n++) {
            var r = ld[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < ld.length && null === (n = ld[0]).blockedOn; )
            sd(n), null === n.blockedOn && ld.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                l = n[r + 1],
                o = a[Ie] || null;
              if ("function" === typeof l) o || hd(n);
              else if (o) {
                var i = null;
                if (l && l.hasAttribute("formAction")) {
                  if (((a = l), (o = l[Ie] || null))) i = o.formAction;
                  else if (null !== Gf(a)) continue;
                } else i = o.action;
                "function" === typeof i
                  ? (n[r + 1] = i)
                  : (n.splice(r, 3), (r -= 3)),
                  hd(n);
              }
            }
        }
        function vd(e) {
          this._internalRoot = e;
        }
        function yd(e) {
          this._internalRoot = e;
        }
        (yd.prototype.render = vd.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hf(t.current, Ts(), e, t, null, null);
          }),
          (yd.prototype.unmount = vd.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                0 === e.tag && tc(),
                  Hf(e.current, 2, null, e, null, null),
                  Ms(),
                  (t[Ue] = null);
              }
            }),
          (yd.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Fe();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < ld.length && 0 !== t && t < ld[n].priority;
                n++
              );
              ld.splice(n, 0, e), 0 === n && sd(e);
            }
          });
        var bd = a.version;
        if ("19.0.0" !== bd) throw Error(o(527, bd, "19.0.0"));
        $.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = D(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return I(a), e;
                    if (l === r) return I(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? U(e) : null) ? null : e.stateNode)
          );
        };
        var wd = {
          bundleType: 0,
          version: "19.0.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: T,
          findFiberByHostInstance: Qe,
          reconcilerVersion: "19.0.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var kd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!kd.isDisabled && kd.supportsFiber)
            try {
              (ve = kd.inject(wd)), (ye = kd);
            } catch (xd) {}
        }
        (t.createRoot = function (e, t) {
          if (!i(e)) throw Error(o(299));
          var n = !1,
            r = "",
            a = Ao,
            l = Fo,
            u = Do;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (l = t.onCaughtError),
              void 0 !== t.onRecoverableError && (u = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = If(e, 1, !1, null, 0, n, r, a, l, u, 0, null)),
            (e[Ue] = t.current),
            Lc(8 === e.nodeType ? e.parentNode : e),
            new vd(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!i(e)) throw Error(o(299));
            var r = !1,
              a = "",
              l = Ao,
              u = Fo,
              s = Do,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (l = n.onUncaughtError),
                void 0 !== n.onCaughtError && (u = n.onCaughtError),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
              ((t = If(e, 1, !0, t, 0, r, a, l, u, s, 0, c)).context =
                Uf(null)),
              (n = t.current),
              ((a = ji((r = Ts()))).callback = null),
              Li(n, a, r),
              (t.current.lanes = r),
              Le(t, r),
              hc(t),
              (e[Ue] = t.current),
              Lc(e),
              new yd(t)
            );
          }),
          (t.version = "19.0.0");
      },
      672: (e, t, n) => {
        var r = n(43);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function l() {}
        var o = {
            d: {
              f: l,
              r: function () {
                throw Error(a(522));
              },
              D: l,
              C: l,
              L: l,
              m: l,
              X: l,
              S: l,
              M: l,
            },
            p: 0,
            findDOMNode: null,
          },
          i = Symbol.for("react.portal");
        var u =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function s(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(a(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: i,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = u.T,
              n = o.p;
            try {
              if (((u.T = null), (o.p = 2), e)) return e();
            } finally {
              (u.T = t), (o.p = n), o.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              o.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && o.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = s(n, t.crossOrigin),
                a = "string" === typeof t.integrity ? t.integrity : void 0,
                l =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? o.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: a, fetchPriority: l }
                  )
                : "script" === n &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: l,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = s(t.as, t.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && o.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = s(n, t.crossOrigin);
              o.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = s(t.as, t.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return u.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return u.H.useHostTransitionStatus();
          }),
          (t.version = "19.0.0");
      },
      391: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
      358: (e, t) => {
        const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
          r = /^[\u0021-\u003A\u003C-\u007E]*$/,
          a =
            /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
          l = /^[\u0020-\u003A\u003D-\u007E]*$/,
          o = Object.prototype.toString,
          i = (() => {
            const e = function () {};
            return (e.prototype = Object.create(null)), e;
          })();
        function u(e, t, n) {
          do {
            const n = e.charCodeAt(t);
            if (32 !== n && 9 !== n) return t;
          } while (++t < n);
          return n;
        }
        function s(e, t, n) {
          for (; t > n; ) {
            const n = e.charCodeAt(--t);
            if (32 !== n && 9 !== n) return t + 1;
          }
          return n;
        }
        function c(e) {
          if (-1 === e.indexOf("%")) return e;
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        }
      },
      799: (e, t) => {
        var n = Symbol.for("react.transitional.element");
        function r(e, t, r) {
          var a = null;
          if (
            (void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            "key" in t)
          )
            for (var l in ((r = {}), t)) "key" !== l && (r[l] = t[l]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: a,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        Symbol.for("react.fragment"), (t.jsx = r), (t.jsxs = r);
      },
      288: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.consumer"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), h(w, v.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          S = { H: null, A: null, T: null, S: null },
          x = Object.prototype.hasOwnProperty;
        function _(e, t, r, a, l, o) {
          return (
            (r = o.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: o,
            }
          );
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P() {}
        function z(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u,
            s,
            c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case d:
                    return z((c = e._init)(e._payload), t, a, l, o);
                }
            }
          if (c)
            return (
              (o = o(e)),
              (c = "" === l ? "." + N(e, 0) : l),
              k(o)
                ? ((a = ""),
                  null != c && (a = c.replace(C, "$&/") + "/"),
                  z(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    ((u = o),
                    (s =
                      a +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(C, "$&/") + "/") +
                      c),
                    (o = _(u.type, s, void 0, 0, 0, u.props))),
                  t.push(o)),
              1
            );
          c = 0;
          var f,
            m = "" === l ? "." : l + ":";
          if (k(e))
            for (var h = 0; h < e.length; h++)
              c += z((l = e[h]), t, a, (i = m + N(l, h)), o);
          else if (
            "function" ===
            typeof (h =
              null === (f = e) || "object" !== typeof f
                ? null
                : "function" === typeof (f = (p && f[p]) || f["@@iterator"])
                ? f
                : null)
          )
            for (e = h.call(e), h = 0; !(l = e.next()).done; )
              c += z((l = l.value), t, a, (i = m + N(l, h++)), o);
          else if ("object" === i) {
            if ("function" === typeof e.then)
              return z(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(P, P)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                l,
                o
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            z(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function R() {}
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = h({}, e.props),
              a = e.key;
            if (null != t)
              for (l in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (a = "" + t.key),
              t))
                !x.call(t, l) ||
                  "key" === l ||
                  "__self" === l ||
                  "__source" === l ||
                  ("ref" === l && void 0 === t.ref) ||
                  (r[l] = t[l]);
            var l = arguments.length - 2;
            if (1 === l) r.children = n;
            else if (1 < l) {
              for (var o = Array(l), i = 0; i < l; i++) o[i] = arguments[i + 2];
              r.children = o;
            }
            return _(e.type, a, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: i, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              l = null;
            if (null != t)
              for (r in (void 0 !== t.key && (l = "" + t.key), t))
                x.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (a[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) a.children = n;
            else if (1 < o) {
              for (var i = Array(o), u = 0; u < o; u++) i[u] = arguments[u + 2];
              a.children = i;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === a[r] && (a[r] = o[r]);
            return _(e, l, void 0, 0, 0, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                a = S.S;
              null !== a && a(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(R, L);
            } catch (l) {
              L(l);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.0.0");
      },
      43: (e, t, n) => {
        e.exports = n(288);
      },
      579: (e, t, n) => {
        e.exports = n(799);
      },
      896: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !h))
            if (null !== r(s)) (h = !0), j();
            else {
              var t = r(c);
              null !== t && L(k, t.startTime - e);
            }
        }
        var S,
          x = !1,
          _ = -1,
          E = 5,
          C = -1;
        function N() {
          return !(t.unstable_now() - C < E);
        }
        function P() {
          if (x) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              e: {
                (h = !1), g && ((g = !1), y(_), (_ = -1)), (m = !0);
                var l = p;
                try {
                  t: {
                    for (
                      w(e), d = r(s);
                      null !== d && !(d.expirationTime > e && N());

                    ) {
                      var o = d.callback;
                      if ("function" === typeof o) {
                        (d.callback = null), (p = d.priorityLevel);
                        var i = o(d.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof i)) {
                          (d.callback = i), w(e), (n = !0);
                          break t;
                        }
                        d === r(s) && a(s), w(e);
                      } else a(s);
                      d = r(s);
                    }
                    if (null !== d) n = !0;
                    else {
                      var u = r(c);
                      null !== u && L(k, u.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (d = null), (p = l), (m = !1);
                }
                n = void 0;
              }
            } finally {
              n ? S() : (x = !1);
            }
          }
        }
        if ("function" === typeof b)
          S = function () {
            b(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            T = z.port2;
          (z.port1.onmessage = P),
            (S = function () {
              T.postMessage(null);
            });
        } else
          S = function () {
            v(P, 0);
          };
        function j() {
          x || ((x = !0), S());
        }
        function L(e, n) {
          _ = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), j());
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (y(_), (_ = -1)) : (g = !0), L(k, l - o)))
                : ((e.sortIndex = i), n(s, e), h || m || ((h = !0), j())),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(896);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  n.p = "/";
  var r = n(43),
    a = n(391);
  function l(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]),
          t.includes(n) ||
            ({}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
  }
  function o(e) {
    return (
      (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      o(e)
    );
  }
  function i(e) {
    var t = (function (e, t) {
      if ("object" != o(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != o(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == o(t) ? t : t + "";
  }
  function u(e, t, n) {
    return (
      (t = i(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? s(Object(n), !0).forEach(function (t) {
            u(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : s(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  n(358);
  const f = ["page"],
    d = ["page", "matches"],
    p = [
      "onClick",
      "discover",
      "prefetch",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
      "viewTransition",
    ],
    m = [
      "aria-current",
      "caseSensitive",
      "className",
      "end",
      "style",
      "to",
      "viewTransition",
      "children",
    ],
    h = [
      "discover",
      "fetcherKey",
      "navigate",
      "reloadDocument",
      "replace",
      "state",
      "method",
      "action",
      "onSubmit",
      "relative",
      "preventScrollReset",
      "viewTransition",
    ];
  var g = "popstate";
  function v() {
    return _(
      function (e, t) {
        let { pathname: n, search: r, hash: a } = e.location;
        return k(
          "",
          { pathname: n, search: r, hash: a },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default"
        );
      },
      function (e, t) {
        return "string" === typeof t ? t : S(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
    );
  }
  function y(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function b(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function w(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function k(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0;
    return c(
      c(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? x(t) : t
      ),
      {},
      {
        state: n,
        key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
      }
    );
  }
  function S(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function x(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function _(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: a = document.defaultView, v5Compat: l = !1 } = r,
      o = a.history,
      i = "POP",
      u = null,
      s = f();
    function f() {
      return (o.state || { idx: null }).idx;
    }
    function d() {
      i = "POP";
      let e = f(),
        t = null == e ? null : e - s;
      (s = e), u && u({ action: i, location: m.location, delta: t });
    }
    function p(e) {
      let t =
          "null" !== a.location.origin ? a.location.origin : a.location.href,
        n = "string" === typeof e ? e : S(e);
      return (
        (n = n.replace(/ $/, "%20")),
        y(
          t,
          "No window.location.(origin|href) available to create URL for href: ".concat(
            n
          )
        ),
        new URL(n, t)
      );
    }
    null == s &&
      ((s = 0), o.replaceState(c(c({}, o.state), {}, { idx: s }), ""));
    let m = {
      get action() {
        return i;
      },
      get location() {
        return e(a, o);
      },
      listen(e) {
        if (u) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(g, d),
          (u = e),
          () => {
            a.removeEventListener(g, d), (u = null);
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: p,
      encodeLocation(e) {
        let t = p(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        i = "PUSH";
        let r = k(m.location, e, t);
        n && n(r, e), (s = f() + 1);
        let c = w(r, s),
          d = m.createHref(r);
        try {
          o.pushState(c, "", d);
        } catch (p) {
          if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
          a.location.assign(d);
        }
        l && u && u({ action: i, location: m.location, delta: 1 });
      },
      replace: function (e, t) {
        i = "REPLACE";
        let r = k(m.location, e, t);
        n && n(r, e), (s = f());
        let a = w(r, s),
          c = m.createHref(r);
        o.replaceState(a, "", c),
          l && u && u({ action: i, location: m.location, delta: 0 });
      },
      go: (e) => o.go(e),
    };
    return m;
  }
  function E(e, t) {
    return C(
      e,
      t,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
      !1
    );
  }
  function C(e, t, n, r) {
    let a = U(("string" === typeof t ? x(t) : t).pathname || "/", n);
    if (null == a) return null;
    let l = N(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(l);
    let o = null;
    for (let i = 0; null == o && i < l.length; ++i) {
      let e = I(a);
      o = D(l[i], e, r);
    }
    return o;
  }
  function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      a = (e, a, l) => {
        let o = {
          relativePath: void 0 === l ? e.path || "" : l,
          caseSensitive: !0 === e.caseSensitive,
          childrenIndex: a,
          route: e,
        };
        o.relativePath.startsWith("/") &&
          (y(
            o.relativePath.startsWith(r),
            'Absolute route path "'
              .concat(o.relativePath, '" nested under path "')
              .concat(
                r,
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              )
          ),
          (o.relativePath = o.relativePath.slice(r.length)));
        let i = W([r, o.relativePath]),
          u = n.concat(o);
        e.children &&
          e.children.length > 0 &&
          (y(
            !0 !== e.index,
            'Index routes must not have child routes. Please remove all child routes from route path "'.concat(
              i,
              '".'
            )
          ),
          N(e.children, t, u, i)),
          (null != e.path || e.index) &&
            t.push({ path: i, score: F(i, e.index), routesMeta: u });
      };
    return (
      e.forEach((e, t) => {
        var n;
        if (
          "" !== e.path &&
          null !== (n = e.path) &&
          void 0 !== n &&
          n.includes("?")
        )
          for (let r of P(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function P(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      l = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [l, ""] : [l];
    let o = P(r.join("/")),
      i = [];
    return (
      i.push(...o.map((e) => ("" === e ? l : [l, e].join("/")))),
      a && i.push(...o),
      i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  var z = /^:[\w-]+$/,
    T = 3,
    j = 2,
    L = 1,
    R = 10,
    O = -2,
    A = (e) => "*" === e;
  function F(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(A) && (r += O),
      t && (r += j),
      n
        .filter((e) => !A(e))
        .reduce((e, t) => e + (z.test(t) ? T : "" === t ? L : R), r)
    );
  }
  function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      a = {},
      l = "/",
      o = [];
    for (let i = 0; i < r.length; ++i) {
      let e = r[i],
        u = i === r.length - 1,
        s = "/" === l ? t : t.slice(l.length) || "/",
        c = M(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: u },
          s
        ),
        f = e.route;
      if (
        (!c &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (c = M(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            s
          )),
        !c)
      )
        return null;
      Object.assign(a, c.params),
        o.push({
          params: a,
          pathname: W([l, c.pathname]),
          pathnameBase: q(W([l, c.pathnameBase])),
          route: f,
        }),
        "/" !== c.pathnameBase && (l = W([l, c.pathnameBase]));
    }
    return o;
  }
  function M(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        b(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "'
            .concat(e, '" will be treated as if it were "')
            .concat(
              e.replace(/\*$/, "/*"),
              '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'
            )
            .concat(e.replace(/\*$/, "/*"), '".')
        );
        let r = [],
          a =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
        let l = new RegExp(a, t ? void 0 : "i");
        return [l, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let l = a[0],
      o = l.replace(/(.)\/+$/, "$1"),
      i = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = i[n] || "";
          o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const u = i[n];
        return (e[r] = a && !u ? void 0 : (u || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: l,
      pathnameBase: o,
      pattern: e,
    };
  }
  function I(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        b(
          !1,
          'The URL path "'
            .concat(
              e,
              '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('
            )
            .concat(t, ").")
        ),
        e
      );
    }
  }
  function U(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function H(e, t, n, r) {
    return "Cannot include a '"
      .concat(e, "' character in a manually specified `to.")
      .concat(t, "` field [")
      .concat(JSON.stringify(r), "].  Please separate it out to the `to.")
      .concat(
        n,
        '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      );
  }
  function $(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function B(e) {
    let t = $(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function V(e, t, n) {
    let r,
      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    "string" === typeof e
      ? (r = x(e))
      : ((r = c({}, e)),
        y(
          !r.pathname || !r.pathname.includes("?"),
          H("?", "pathname", "search", r)
        ),
        y(
          !r.pathname || !r.pathname.includes("#"),
          H("#", "pathname", "hash", r)
        ),
        y(!r.search || !r.search.includes("#"), H("#", "search", "hash", r)));
    let l,
      o = "" === e || "" === r.pathname,
      i = o ? "/" : r.pathname;
    if (null == i) l = n;
    else {
      let e = t.length - 1;
      if (!a && i.startsWith("..")) {
        let t = i.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        r.pathname = t.join("/");
      }
      l = e >= 0 ? t[e] : "/";
    }
    let u = (function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "/",
          {
            pathname: n,
            search: r = "",
            hash: a = "",
          } = "string" === typeof e ? x(e) : e,
          l = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: l, search: Q(r), hash: K(a) };
      })(r, l),
      s = i && "/" !== i && i.endsWith("/"),
      f = (o || "." === i) && n.endsWith("/");
    return u.pathname.endsWith("/") || (!s && !f) || (u.pathname += "/"), u;
  }
  var W = (e) => e.join("/").replace(/\/\/+/g, "/"),
    q = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Q = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    K = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  function Y(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  var X = ["POST", "PUT", "PATCH", "DELETE"],
    G = (new Set(X), ["GET", ...X]);
  new Set(G), Symbol("ResetLoaderData");
  var J = r.createContext(null);
  J.displayName = "DataRouter";
  var Z = r.createContext(null);
  Z.displayName = "DataRouterState";
  var ee = r.createContext({ isTransitioning: !1 });
  ee.displayName = "ViewTransition";
  var te = r.createContext(new Map());
  te.displayName = "Fetchers";
  var ne = r.createContext(null);
  ne.displayName = "Await";
  var re = r.createContext(null);
  re.displayName = "Navigation";
  var ae = r.createContext(null);
  ae.displayName = "Location";
  var le = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  le.displayName = "Route";
  var oe = r.createContext(null);
  oe.displayName = "RouteError";
  function ie() {
    return null != r.useContext(ae);
  }
  function ue() {
    return (
      y(
        ie(),
        "useLocation() may be used only in the context of a <Router> component."
      ),
      r.useContext(ae).location
    );
  }
  var se =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function ce(e) {
    r.useContext(re).static || r.useLayoutEffect(e);
  }
  function fe() {
    let { isDataRoute: e } = r.useContext(le);
    return e
      ? (function () {
          let { router: e } = we("useNavigate"),
            t = Se("useNavigate"),
            n = r.useRef(!1);
          ce(() => {
            n.current = !0;
          });
          let a = r.useCallback(
            async function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              b(n.current, se),
                n.current &&
                  ("number" === typeof r
                    ? e.navigate(r)
                    : await e.navigate(r, c({ fromRouteId: t }, a)));
            },
            [e, t]
          );
          return a;
        })()
      : (function () {
          y(
            ie(),
            "useNavigate() may be used only in the context of a <Router> component."
          );
          let e = r.useContext(J),
            { basename: t, navigator: n } = r.useContext(re),
            { matches: a } = r.useContext(le),
            { pathname: l } = ue(),
            o = JSON.stringify(B(a)),
            i = r.useRef(!1);
          ce(() => {
            i.current = !0;
          });
          let u = r.useCallback(
            function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((b(i.current, se), !i.current)) return;
              if ("number" === typeof r) return void n.go(r);
              let u = V(r, JSON.parse(o), l, "path" === a.relative);
              null == e &&
                "/" !== t &&
                (u.pathname = "/" === u.pathname ? t : W([t, u.pathname])),
                (a.replace ? n.replace : n.push)(u, a.state, a);
            },
            [t, n, o, l, e]
          );
          return u;
        })();
  }
  r.createContext(null);
  function de(e) {
    let { relative: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = r.useContext(le),
      { pathname: a } = ue(),
      l = JSON.stringify(B(n));
    return r.useMemo(() => V(e, JSON.parse(l), a, "path" === t), [e, l, a, t]);
  }
  function pe(e, t, n, a) {
    y(
      ie(),
      "useRoutes() may be used only in the context of a <Router> component."
    );
    let { navigator: l } = r.useContext(re),
      { matches: o } = r.useContext(le),
      i = o[o.length - 1],
      u = i ? i.params : {},
      s = i ? i.pathname : "/",
      f = i ? i.pathnameBase : "/",
      d = i && i.route;
    {
      let e = (d && d.path) || "";
      Ee(
        s,
        !d || e.endsWith("*") || e.endsWith("*?"),
        'You rendered descendant <Routes> (or called `useRoutes()`) at "'
          .concat(s, '" (under <Route path="')
          .concat(
            e,
            '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="'
          )
          .concat(e, '"> to <Route path="')
          .concat("/" === e ? "*" : "".concat(e, "/*"), '">.')
      );
    }
    let p,
      m = ue();
    if (t) {
      var h;
      let e = "string" === typeof t ? x(t) : t;
      y(
        "/" === f ||
          (null === (h = e.pathname) || void 0 === h
            ? void 0
            : h.startsWith(f)),
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'
          .concat(f, '" but pathname "')
          .concat(e.pathname, '" was given in the `location` prop.')
      ),
        (p = e);
    } else p = m;
    let g = p.pathname || "/",
      v = g;
    if ("/" !== f) {
      let e = f.replace(/^\//, "").split("/");
      v = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let w = E(e, { pathname: v });
    b(
      d || null != w,
      'No routes matched location "'
        .concat(p.pathname)
        .concat(p.search)
        .concat(p.hash, '" ')
    ),
      b(
        null == w ||
          void 0 !== w[w.length - 1].route.element ||
          void 0 !== w[w.length - 1].route.Component ||
          void 0 !== w[w.length - 1].route.lazy,
        'Matched leaf route at location "'
          .concat(p.pathname)
          .concat(p.search)
          .concat(
            p.hash,
            '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
          )
      );
    let k = ye(
      w &&
        w.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: W([
              f,
              l.encodeLocation
                ? l.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? f
                : W([
                    f,
                    l.encodeLocation
                      ? l.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      a
    );
    return t && k
      ? r.createElement(
          ae.Provider,
          {
            value: {
              location: c(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                p
              ),
              navigationType: "POP",
            },
          },
          k
        )
      : k;
  }
  function me() {
    let e = xe(),
      t = Y(e)
        ? "".concat(e.status, " ").concat(e.statusText)
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      a = "rgba(200,200,200, 0.5)",
      l = { padding: "0.5rem", backgroundColor: a },
      o = { padding: "2px 4px", backgroundColor: a },
      i = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (i = r.createElement(
        r.Fragment,
        null,
        r.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
        r.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          r.createElement("code", { style: o }, "ErrorBoundary"),
          " or",
          " ",
          r.createElement("code", { style: o }, "errorElement"),
          " prop on your route."
        )
      )),
      r.createElement(
        r.Fragment,
        null,
        r.createElement("h2", null, "Unexpected Application Error!"),
        r.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? r.createElement("pre", { style: l }, n) : null,
        i
      )
    );
  }
  var he = r.createElement(me, null),
    ge = class extends r.Component {
      constructor(e) {
        super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          });
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        console.error(
          "React Router caught the following error during render",
          e,
          t
        );
      }
      render() {
        return void 0 !== this.state.error
          ? r.createElement(
              le.Provider,
              { value: this.props.routeContext },
              r.createElement(oe.Provider, {
                value: this.state.error,
                children: this.props.component,
              })
            )
          : this.props.children;
      }
    };
  function ve(e) {
    let { routeContext: t, match: n, children: a } = e,
      l = r.useContext(J);
    return (
      l &&
        l.static &&
        l.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = n.route.id),
      r.createElement(le.Provider, { value: t }, a)
    );
  }
  function ye(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (0 !== t.length || n.initialized || !(n.matches.length > 0))
          return null;
        e = n.matches;
      }
    }
    let a = e,
      l = null === n || void 0 === n ? void 0 : n.errors;
    if (null != l) {
      let e = a.findIndex(
        (e) =>
          e.route.id &&
          void 0 !== (null === l || void 0 === l ? void 0 : l[e.route.id])
      );
      y(
        e >= 0,
        "Could not find a matching route for errors on route IDs: ".concat(
          Object.keys(l).join(",")
        )
      ),
        (a = a.slice(0, Math.min(a.length, e + 1)));
    }
    let o = !1,
      i = -1;
    if (n)
      for (let r = 0; r < a.length; r++) {
        let e = a[r];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (i = r),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            l =
              e.route.loader &&
              !t.hasOwnProperty(e.route.id) &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || l) {
            (o = !0), (a = i >= 0 ? a.slice(0, i + 1) : [a[0]]);
            break;
          }
        }
      }
    return a.reduceRight((e, u, s) => {
      let c,
        f = !1,
        d = null,
        p = null;
      n &&
        ((c = l && u.route.id ? l[u.route.id] : void 0),
        (d = u.route.errorElement || he),
        o &&
          (i < 0 && 0 === s
            ? (Ee(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration"
              ),
              (f = !0),
              (p = null))
            : i === s &&
              ((f = !0), (p = u.route.hydrateFallbackElement || null))));
      let m = t.concat(a.slice(0, s + 1)),
        h = () => {
          let t;
          return (
            (t = c
              ? d
              : f
              ? p
              : u.route.Component
              ? r.createElement(u.route.Component, null)
              : u.route.element
              ? u.route.element
              : e),
            r.createElement(ve, {
              match: u,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (u.route.ErrorBoundary || u.route.errorElement || 0 === s)
        ? r.createElement(ge, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: c,
            children: h(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : h();
    }, null);
  }
  function be(e) {
    return "".concat(
      e,
      " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."
    );
  }
  function we(e) {
    let t = r.useContext(J);
    return y(t, be(e)), t;
  }
  function ke(e) {
    let t = r.useContext(Z);
    return y(t, be(e)), t;
  }
  function Se(e) {
    let t = (function (e) {
        let t = r.useContext(le);
        return y(t, be(e)), t;
      })(e),
      n = t.matches[t.matches.length - 1];
    return (
      y(
        n.route.id,
        "".concat(e, ' can only be used on routes that contain a unique "id"')
      ),
      n.route.id
    );
  }
  function xe() {
    var e;
    let t = r.useContext(oe),
      n = ke("useRouteError"),
      a = Se("useRouteError");
    return void 0 !== t
      ? t
      : null === (e = n.errors) || void 0 === e
      ? void 0
      : e[a];
  }
  var _e = {};
  function Ee(e, t, n) {
    t || _e[e] || ((_e[e] = !0), b(!1, n));
  }
  r.memo(function (e) {
    let { routes: t, future: n, state: r } = e;
    return pe(t, void 0, r, n);
  });
  function Ce(e) {
    y(
      !1,
      "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
    );
  }
  function Ne(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: a,
      navigationType: l = "POP",
      navigator: o,
      static: i = !1,
    } = e;
    y(
      !ie(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
    );
    let u = t.replace(/^\/*/, "/"),
      s = r.useMemo(
        () => ({ basename: u, navigator: o, static: i, future: {} }),
        [u, o, i]
      );
    "string" === typeof a && (a = x(a));
    let {
        pathname: c = "/",
        search: f = "",
        hash: d = "",
        state: p = null,
        key: m = "default",
      } = a,
      h = r.useMemo(() => {
        let e = U(c, u);
        return null == e
          ? null
          : {
              location: { pathname: e, search: f, hash: d, state: p, key: m },
              navigationType: l,
            };
      }, [u, c, f, d, p, m, l]);
    return (
      b(
        null != h,
        '<Router basename="'
          .concat(u, '"> is not able to match the URL "')
          .concat(c)
          .concat(f)
          .concat(
            d,
            "\" because it does not start with the basename, so the <Router> won't render anything."
          )
      ),
      null == h
        ? null
        : r.createElement(
            re.Provider,
            { value: s },
            r.createElement(ae.Provider, { children: n, value: h })
          )
    );
  }
  function Pe(e) {
    let { children: t, location: n } = e;
    return pe(ze(t), n);
  }
  r.Component;
  function ze(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    return (
      r.Children.forEach(e, (e, a) => {
        if (!r.isValidElement(e)) return;
        let l = [...t, a];
        if (e.type === r.Fragment)
          return void n.push.apply(n, ze(e.props.children, l));
        y(
          e.type === Ce,
          "[".concat(
            "string" === typeof e.type ? e.type : e.type.name,
            "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"
          )
        ),
          y(
            !e.props.index || !e.props.children,
            "An index route cannot have child routes."
          );
        let o = {
          id: e.props.id || l.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            !0 === e.props.hasErrorBoundary ||
            null != e.props.ErrorBoundary ||
            null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (o.children = ze(e.props.children, l)), n.push(o);
      }),
      n
    );
  }
  var Te = "get",
    je = "application/x-www-form-urlencoded";
  function Le(e) {
    return null != e && "string" === typeof e.tagName;
  }
  var Re = null;
  var Oe = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function Ae(e) {
    return null == e || Oe.has(e)
      ? e
      : (b(
          !1,
          '"'
            .concat(
              e,
              '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "'
            )
            .concat(je, '"')
        ),
        null);
  }
  function Fe(e, t) {
    let n, r, a, l, o;
    if (Le((i = e)) && "form" === i.tagName.toLowerCase()) {
      let o = e.getAttribute("action");
      (r = o ? U(o, t) : null),
        (n = e.getAttribute("method") || Te),
        (a = Ae(e.getAttribute("enctype")) || je),
        (l = new FormData(e));
    } else if (
      (function (e) {
        return Le(e) && "button" === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return Le(e) && "input" === e.tagName.toLowerCase();
      })(e) &&
        ("submit" === e.type || "image" === e.type))
    ) {
      let o = e.form;
      if (null == o)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let i = e.getAttribute("formaction") || o.getAttribute("action");
      if (
        ((r = i ? U(i, t) : null),
        (n = e.getAttribute("formmethod") || o.getAttribute("method") || Te),
        (a =
          Ae(e.getAttribute("formenctype")) ||
          Ae(o.getAttribute("enctype")) ||
          je),
        (l = new FormData(o, e)),
        !(function () {
          if (null === Re)
            try {
              new FormData(document.createElement("form"), 0), (Re = !1);
            } catch (e) {
              Re = !0;
            }
          return Re;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ("image" === n) {
          let e = t ? "".concat(t, ".") : "";
          l.append("".concat(e, "x"), "0"), l.append("".concat(e, "y"), "0");
        } else t && l.append(t, r);
      }
    } else {
      if (Le(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      (n = Te), (r = null), (a = je), (o = e);
    }
    var i;
    return (
      l && "text/plain" === a && ((o = l), (l = void 0)),
      { action: r, method: n.toLowerCase(), encType: a, formData: l, body: o }
    );
  }
  function De(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  async function Me(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return (t[e.id] = n), n;
    } catch (n) {
      return (
        console.error(
          "Error loading route module `".concat(
            e.module,
            "`, reloading page..."
          )
        ),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Ie(e) {
    return null != e && "string" === typeof e.page;
  }
  function Ue(e) {
    return (
      null != e &&
      (null == e.href
        ? "preload" === e.rel &&
          "string" === typeof e.imageSrcSet &&
          "string" === typeof e.imageSizes
        : "string" === typeof e.rel && "string" === typeof e.href)
    );
  }
  function He(e, t, n, r, a, l) {
    let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      i = (e, t) => {
        var r;
        return (
          n[t].pathname !== e.pathname ||
          ((null === (r = n[t].route.path) || void 0 === r
            ? void 0
            : r.endsWith("*")) &&
            n[t].params["*"] !== e.params["*"])
        );
      };
    return "assets" === l
      ? t.filter((e, t) => o(e, t) || i(e, t))
      : "data" === l
      ? t.filter((t, l) => {
          let u = r.routes[t.route.id];
          if (!u || !u.hasLoader) return !1;
          if (o(t, l) || i(t, l)) return !0;
          if (t.route.shouldRevalidate) {
            var s;
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin
              ),
              currentParams:
                (null === (s = n[0]) || void 0 === s ? void 0 : s.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if ("boolean" === typeof r) return r;
          }
          return !0;
        })
      : [];
  }
  function $e(e) {
    return [...new Set(e)];
  }
  function Be(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, a) => {
      if (t && !Ie(a) && "script" === a.as && a.href && r.has(a.href)) return e;
      let l = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(a)
      );
      return n.has(l) || (n.add(l), e.push({ key: l, link: a })), e;
    }, []);
  }
  function Ve(e) {
    return { __html: e };
  }
  Symbol("SingleFetchRedirect");
  function We(e) {
    let t =
      "string" === typeof e
        ? new URL(
            e,
            "undefined" === typeof window
              ? "server://singlefetch/"
              : window.location.origin
          )
        : e;
    return (
      "/" === t.pathname
        ? (t.pathname = "_root.data")
        : (t.pathname = "".concat(t.pathname.replace(/\/$/, ""), ".data")),
      t
    );
  }
  r.Component;
  function qe(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let a,
      l = r.createElement("script", {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      ',
        },
      });
    if (Y(t))
      return r.createElement(
        Qe,
        { title: "Unhandled Thrown Response!" },
        r.createElement(
          "h1",
          { style: { fontSize: "24px" } },
          t.status,
          " ",
          t.statusText
        ),
        l
      );
    if (t instanceof Error) a = t;
    else {
      let e =
        null == t
          ? "Unknown Error"
          : "object" === typeof t && "toString" in t
          ? t.toString()
          : JSON.stringify(t);
      a = new Error(e);
    }
    return r.createElement(
      Qe,
      { title: "Application Error!", isOutsideRemixApp: n },
      r.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        "Application Error"
      ),
      r.createElement(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
          },
        },
        a.stack
      ),
      l
    );
  }
  function Qe(e) {
    var t;
    let { title: n, renderScripts: a, isOutsideRemixApp: l, children: o } = e,
      { routeModules: i } = Je();
    return null !== (t = i.root) && void 0 !== t && t.Layout && !l
      ? o
      : r.createElement(
          "html",
          { lang: "en" },
          r.createElement(
            "head",
            null,
            r.createElement("meta", { charSet: "utf-8" }),
            r.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            r.createElement("title", null, n)
          ),
          r.createElement(
            "body",
            null,
            r.createElement(
              "main",
              {
                style: { fontFamily: "system-ui, sans-serif", padding: "2rem" },
              },
              o,
              a ? r.createElement(lt, null) : null
            )
          )
        );
  }
  function Ke(e) {
    return !e;
  }
  function Ye() {
    let e = r.useContext(J);
    return (
      De(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element"
      ),
      e
    );
  }
  function Xe() {
    let e = r.useContext(Z);
    return (
      De(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
      ),
      e
    );
  }
  var Ge = r.createContext(void 0);
  function Je() {
    let e = r.useContext(Ge);
    return (
      De(e, "You must render this element inside a <HydratedRouter> element"), e
    );
  }
  function Ze(e, t) {
    return (n) => {
      e && e(n), n.defaultPrevented || t(n);
    };
  }
  function et(e, t, n) {
    if (n && !at) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  function tt(e) {
    let { page: t } = e,
      n = l(e, f),
      { router: a } = Ye(),
      o = r.useMemo(
        () => E(a.routes, t, a.basename),
        [a.routes, t, a.basename]
      );
    return o
      ? r.createElement(rt, c({ page: t, matches: o }, n))
      : (console.warn(
          "Tried to prefetch ".concat(t, " but no routes matched.")
        ),
        null);
  }
  function nt(e) {
    let { manifest: t, routeModules: n } = Je(),
      [a, l] = r.useState([]);
    return (
      r.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return Be(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await Me(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  })
                )
              )
                .flat(1)
                .filter(Ue)
                .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
                .map((e) =>
                  "stylesheet" === e.rel
                    ? c(c({}, e), {}, { rel: "prefetch", as: "style" })
                    : c(c({}, e), {}, { rel: "prefetch" })
                )
            );
          })(e, t, n).then((e) => {
            r || l(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      a
    );
  }
  function rt(e) {
    let { page: t, matches: n } = e,
      a = l(e, d),
      o = ue(),
      { manifest: i, routeModules: u } = Je(),
      { loaderData: s, matches: f } = Xe(),
      p = r.useMemo(() => He(t, n, f, i, o, "data"), [t, n, f, i, o]),
      m = r.useMemo(() => He(t, n, f, i, o, "assets"), [t, n, f, i, o]),
      h = r.useMemo(() => {
        if (t === o.pathname + o.search + o.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            var n;
            let a = i.routes[t.route.id];
            a &&
              a.hasLoader &&
              ((!p.some((e) => e.route.id === t.route.id) &&
                t.route.id in s &&
                null !== (n = u[t.route.id]) &&
                void 0 !== n &&
                n.shouldRevalidate) ||
              a.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let a = We(t);
        return (
          r &&
            e.size > 0 &&
            a.searchParams.set(
              "_routes",
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(",")
            ),
          [a.pathname + a.search]
        );
      }, [s, o, i, p, n, t, u]),
      g = r.useMemo(
        () =>
          (function (e, t) {
            return $e(
              e
                .map((e) => {
                  let n = t.routes[e.route.id];
                  if (!n) return [];
                  let r = [n.module];
                  return n.imports && (r = r.concat(n.imports)), r;
                })
                .flat(1)
            );
          })(m, i),
        [m, i]
      ),
      v = nt(m);
    return r.createElement(
      r.Fragment,
      null,
      h.map((e) =>
        r.createElement(
          "link",
          c({ key: e, rel: "prefetch", as: "fetch", href: e }, a)
        )
      ),
      g.map((e) =>
        r.createElement("link", c({ key: e, rel: "modulepreload", href: e }, a))
      ),
      v.map((e) => {
        let { key: t, link: n } = e;
        return r.createElement("link", c({ key: t }, n));
      })
    );
  }
  Ge.displayName = "FrameworkContext";
  var at = !1;
  function lt(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        isSpaMode: a,
        renderMeta: l,
      } = Je(),
      { router: o, static: i, staticContext: u } = Ye(),
      { matches: s } = Xe(),
      f = Ke(a);
    l && (l.didRenderScripts = !0);
    let d = et(s, null, a);
    r.useEffect(() => {
      at = !0;
    }, []);
    let p = r.useMemo(() => {
        var a;
        let l = u
            ? "window.__reactRouterContext = "
                .concat(n, ";")
                .concat(
                  "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());"
                )
            : " ",
          s = i
            ? ""
                .concat(
                  null !== (a = t.hmr) && void 0 !== a && a.runtime
                    ? "import ".concat(JSON.stringify(t.hmr.runtime), ";")
                    : ""
                )
                .concat(f ? "" : "import ".concat(JSON.stringify(t.url)), ";\n")
                .concat(
                  d
                    .map((e, n) =>
                      "import * as route"
                        .concat(n, " from ")
                        .concat(
                          JSON.stringify(t.routes[e.route.id].module),
                          ";"
                        )
                    )
                    .join("\n"),
                  "\n  "
                )
                .concat(
                  f
                    ? "window.__reactRouterManifest = ".concat(
                        JSON.stringify(
                          (function (e, t) {
                            let n = new Set(
                                t.state.matches.map((e) => e.route.id)
                              ),
                              r = t.state.location.pathname
                                .split("/")
                                .filter(Boolean),
                              a = ["/"];
                            for (r.pop(); r.length > 0; )
                              a.push("/".concat(r.join("/"))), r.pop();
                            a.forEach((e) => {
                              let r = E(t.routes, e, t.basename);
                              r && r.forEach((e) => n.add(e.route.id));
                            });
                            let l = [...n].reduce(
                              (t, n) => Object.assign(t, { [n]: e.routes[n] }),
                              {}
                            );
                            return c(c({}, e), {}, { routes: l });
                          })(t, o),
                          null,
                          2
                        ),
                        ";"
                      )
                    : "",
                  "\n  window.__reactRouterRouteModules = {"
                )
                .concat(
                  d
                    .map((e, t) =>
                      "".concat(JSON.stringify(e.route.id), ":route").concat(t)
                    )
                    .join(","),
                  "};\n\nimport("
                )
                .concat(JSON.stringify(t.entry.module), ");")
            : " ";
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "script",
            c(
              c({}, e),
              {},
              {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: Ve(l),
                type: void 0,
              }
            )
          ),
          r.createElement(
            "script",
            c(
              c({}, e),
              {},
              {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: Ve(s),
                type: "module",
                async: !0,
              }
            )
          )
        );
      }, []),
      m = d
        .map((e) => {
          let n = t.routes[e.route.id];
          return n ? (n.imports || []).concat([n.module]) : [];
        })
        .flat(1),
      h = at ? [] : t.entry.imports.concat(m);
    return at
      ? null
      : r.createElement(
          r.Fragment,
          null,
          f
            ? null
            : r.createElement("link", {
                rel: "modulepreload",
                href: t.url,
                crossOrigin: e.crossOrigin,
              }),
          r.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
          }),
          ((g = h), [...new Set(g)]).map((t) =>
            r.createElement("link", {
              key: t,
              rel: "modulepreload",
              href: t,
              crossOrigin: e.crossOrigin,
            })
          ),
          p
        );
    var g;
  }
  function ot() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        "function" === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  var it =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  try {
    it && (window.__reactRouterVersion = "7.0.2");
  } catch (zt) {}
  function ut(e) {
    let { basename: t, children: n, window: a } = e,
      l = r.useRef();
    null == l.current && (l.current = v({ window: a, v5Compat: !0 }));
    let o = l.current,
      [i, u] = r.useState({ action: o.action, location: o.location }),
      s = r.useCallback(
        (e) => {
          r.startTransition(() => u(e));
        },
        [u]
      );
    return (
      r.useLayoutEffect(() => o.listen(s), [o, s]),
      r.createElement(Ne, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: o,
      })
    );
  }
  var st = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ct = r.forwardRef(function (e, t) {
      let n,
        {
          onClick: a,
          discover: o = "render",
          prefetch: i = "none",
          relative: u,
          reloadDocument: s,
          replace: f,
          state: d,
          target: m,
          to: h,
          preventScrollReset: g,
          viewTransition: v,
        } = e,
        w = l(e, p),
        { basename: k } = r.useContext(re),
        x = "string" === typeof h && st.test(h),
        _ = !1;
      if ("string" === typeof h && x && ((n = h), it))
        try {
          let e = new URL(window.location.href),
            t = h.startsWith("//") ? new URL(e.protocol + h) : new URL(h),
            n = U(t.pathname, k);
          t.origin === e.origin && null != n
            ? (h = n + t.search + t.hash)
            : (_ = !0);
        } catch (zt) {
          b(
            !1,
            '<Link to="'.concat(
              h,
              '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'
            )
          );
        }
      let E = (function (e) {
          let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          y(
            ie(),
            "useHref() may be used only in the context of a <Router> component."
          );
          let { basename: n, navigator: a } = r.useContext(re),
            { hash: l, pathname: o, search: i } = de(e, { relative: t }),
            u = o;
          return (
            "/" !== n && (u = "/" === o ? n : W([n, o])),
            a.createHref({ pathname: u, search: i, hash: l })
          );
        })(h, { relative: u }),
        [C, N, P] = (function (e, t) {
          let n = r.useContext(Ge),
            [a, l] = r.useState(!1),
            [o, i] = r.useState(!1),
            {
              onFocus: u,
              onBlur: s,
              onMouseEnter: c,
              onMouseLeave: f,
              onTouchStart: d,
            } = t,
            p = r.useRef(null);
          r.useEffect(() => {
            if (("render" === e && i(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    i(e.isIntersecting);
                  });
                },
                { threshold: 0.5 }
              );
              return (
                p.current && e.observe(p.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            r.useEffect(() => {
              if (a) {
                let e = setTimeout(() => {
                  i(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [a]);
          let m = () => {
              l(!0);
            },
            h = () => {
              l(!1), i(!1);
            };
          return n
            ? "intent" !== e
              ? [o, p, {}]
              : [
                  o,
                  p,
                  {
                    onFocus: Ze(u, m),
                    onBlur: Ze(s, h),
                    onMouseEnter: Ze(c, m),
                    onMouseLeave: Ze(f, h),
                    onTouchStart: Ze(d, m),
                  },
                ]
            : [!1, p, {}];
        })(i, w),
        z = (function (e) {
          let {
              target: t,
              replace: n,
              state: a,
              preventScrollReset: l,
              relative: o,
              viewTransition: i,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            u = fe(),
            s = ue(),
            c = de(e, { relative: o });
          return r.useCallback(
            (r) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(r, t)
              ) {
                r.preventDefault();
                let t = void 0 !== n ? n : S(s) === S(c);
                u(e, {
                  replace: t,
                  state: a,
                  preventScrollReset: l,
                  relative: o,
                  viewTransition: i,
                });
              }
            },
            [s, u, c, n, a, t, e, l, o, i]
          );
        })(h, {
          replace: f,
          state: d,
          target: m,
          preventScrollReset: g,
          relative: u,
          viewTransition: v,
        });
      let T = r.createElement(
        "a",
        c(
          c(c({}, w), P),
          {},
          {
            href: n || E,
            onClick:
              _ || s
                ? a
                : function (e) {
                    a && a(e), e.defaultPrevented || z(e);
                  },
            ref: ot(t, N),
            target: m,
            "data-discover": x || "render" !== o ? void 0 : "true",
          }
        )
      );
      return C && !x
        ? r.createElement(r.Fragment, null, T, r.createElement(tt, { page: E }))
        : T;
    });
  (ct.displayName = "Link"),
    (r.forwardRef(function (e, t) {
      let {
          "aria-current": n = "page",
          caseSensitive: a = !1,
          className: o = "",
          end: i = !1,
          style: u,
          to: s,
          viewTransition: f,
          children: d,
        } = e,
        p = l(e, m),
        h = de(s, { relative: p.relative }),
        g = ue(),
        v = r.useContext(Z),
        { navigator: b, basename: w } = r.useContext(re),
        k =
          null != v &&
          (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = r.useContext(ee);
            y(
              null != n,
              "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
            );
            let { basename: a } = pt("useViewTransitionState"),
              l = de(e, { relative: t.relative });
            if (!n.isTransitioning) return !1;
            let o =
                U(n.currentLocation.pathname, a) || n.currentLocation.pathname,
              i = U(n.nextLocation.pathname, a) || n.nextLocation.pathname;
            return null != M(l.pathname, i) || null != M(l.pathname, o);
          })(h) &&
          !0 === f,
        S = b.encodeLocation ? b.encodeLocation(h).pathname : h.pathname,
        x = g.pathname,
        _ =
          v && v.navigation && v.navigation.location
            ? v.navigation.location.pathname
            : null;
      a ||
        ((x = x.toLowerCase()),
        (_ = _ ? _.toLowerCase() : null),
        (S = S.toLowerCase())),
        _ && w && (_ = U(_, w) || _);
      const E = "/" !== S && S.endsWith("/") ? S.length - 1 : S.length;
      let C,
        N = x === S || (!i && x.startsWith(S) && "/" === x.charAt(E)),
        P =
          null != _ &&
          (_ === S || (!i && _.startsWith(S) && "/" === _.charAt(S.length))),
        z = { isActive: N, isPending: P, isTransitioning: k },
        T = N ? n : void 0;
      C =
        "function" === typeof o
          ? o(z)
          : [
              o,
              N ? "active" : null,
              P ? "pending" : null,
              k ? "transitioning" : null,
            ]
              .filter(Boolean)
              .join(" ");
      let j = "function" === typeof u ? u(z) : u;
      return r.createElement(
        ct,
        c(
          c({}, p),
          {},
          {
            "aria-current": T,
            className: C,
            ref: t,
            style: j,
            to: s,
            viewTransition: f,
          }
        ),
        "function" === typeof d ? d(z) : d
      );
    }).displayName = "NavLink");
  var ft = r.forwardRef((e, t) => {
    let {
        discover: n = "render",
        fetcherKey: a,
        navigate: o,
        reloadDocument: i,
        replace: u,
        state: s,
        method: f = Te,
        action: d,
        onSubmit: p,
        relative: m,
        preventScrollReset: g,
        viewTransition: v,
      } = e,
      b = l(e, h),
      w = gt(),
      k = (function (e) {
        let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = r.useContext(re),
          a = r.useContext(le);
        y(a, "useFormAction must be used inside a RouteContext");
        let [l] = a.matches.slice(-1),
          o = c({}, de(e || ".", { relative: t })),
          i = ue();
        if (null == e) {
          o.search = i.search;
          let e = new URLSearchParams(o.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let n = e.toString();
            o.search = n ? "?".concat(n) : "";
          }
        }
        (e && "." !== e) ||
          !l.route.index ||
          (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index");
        "/" !== n && (o.pathname = "/" === o.pathname ? n : W([n, o.pathname]));
        return S(o);
      })(d, { relative: m }),
      x = "get" === f.toLowerCase() ? "get" : "post",
      _ = "string" === typeof d && st.test(d);
    return r.createElement(
      "form",
      c(
        c(
          {
            ref: t,
            method: x,
            action: k,
            onSubmit: i
              ? p
              : (e) => {
                  if ((p && p(e), e.defaultPrevented)) return;
                  e.preventDefault();
                  let t = e.nativeEvent.submitter,
                    n =
                      (null === t || void 0 === t
                        ? void 0
                        : t.getAttribute("formmethod")) || f;
                  w(t || e.currentTarget, {
                    fetcherKey: a,
                    method: n,
                    navigate: o,
                    replace: u,
                    state: s,
                    relative: m,
                    preventScrollReset: g,
                    viewTransition: v,
                  });
                },
          },
          b
        ),
        {},
        { "data-discover": _ || "render" !== n ? void 0 : "true" }
      )
    );
  });
  function dt(e) {
    return "".concat(
      e,
      " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."
    );
  }
  function pt(e) {
    let t = r.useContext(J);
    return y(t, dt(e)), t;
  }
  ft.displayName = "Form";
  var mt = 0,
    ht = () => "__".concat(String(++mt), "__");
  function gt() {
    let { router: e } = pt("useSubmit"),
      { basename: t } = r.useContext(re),
      n = Se("useRouteId");
    return r.useCallback(
      async function (r) {
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: l, method: o, encType: i, formData: u, body: s } = Fe(r, t);
        if (!1 === a.navigate) {
          let t = a.fetcherKey || ht();
          await e.fetch(t, n, a.action || l, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: s,
            formMethod: a.method || o,
            formEncType: a.encType || i,
            flushSync: a.flushSync,
          });
        } else
          await e.navigate(a.action || l, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: s,
            formMethod: a.method || o,
            formEncType: a.encType || i,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [e, t, n]
    );
  }
  new TextEncoder();
  const vt = n.p + "static/media/app_name.136595d25291155dc0aa.png";
  var yt = n(579);
  const bt = () => {
      (0, r.useEffect)(() => {
        const e = () => {
          const e = document.querySelector(".header");
          window.scrollY >= 10
            ? e.classList.add("scroll-header")
            : e.classList.remove("scroll-header");
        };
        return (
          window.addEventListener("scroll", e),
          () => {
            window.removeEventListener("scroll", e);
          }
        );
      }, []);
      const [e, t] = (0, r.useState)(!1),
        [n, a] = (0, r.useState)("#home");
      return (0, yt.jsxs)("header", {
        className: "header",
        children: [
          (0, yt.jsx)("div", {
            className: "header__top",
            children: (0, yt.jsx)("div", {
              className: "container",
              children: (0, yt.jsxs)("div", {
                className: "header__top-content",
                children: [
                  (0, yt.jsx)("div", {
                    className: "header__top-content-item",
                    children: (0, yt.jsx)("ul", {
                      className: "header__contact",
                      children: (0, yt.jsxs)("li", {
                        children: [
                          (0, yt.jsx)("i", { className: "fa fa-envelope" }),
                          (0, yt.jsx)("span", { children: " Email:" }),
                          (0, yt.jsx)("a", {
                            href: "mailto:#",
                            children: " example@example.com",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, yt.jsxs)("div", {
                    className: "header__top-content-item",
                    children: [
                      (0, yt.jsx)("div", {
                        children: (0, yt.jsx)("div", {
                          className: "header__btn",
                          children: (0, yt.jsxs)("a", {
                            href: "",
                            className: "btn",
                            children: [
                              (0, yt.jsx)("i", { className: "fa fa-user" }),
                              " View Profile",
                            ],
                          }),
                        }),
                      }),
                      (0, yt.jsx)("div", {
                        children: (0, yt.jsx)("div", {
                          className: "header__btn",
                          children: (0, yt.jsxs)("a", {
                            href: "",
                            className: "btn",
                            id: "logout",
                            children: [
                              (0, yt.jsx)("i", {
                                className: "fa fa-sign-out-alt",
                              }),
                              "Logout",
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          (0, yt.jsxs)("nav", {
            className: "nav",
            children: [
              (0, yt.jsx)("a", {
                className: "nav__logo",
                href: "index.html",
                children: (0, yt.jsx)("img", {
                  src: vt,
                  alt: "Armstrong Number Checker",
                  className: "appName__img",
                }),
              }),
              (0, yt.jsxs)("div", {
                className: e ? "nav__menu show_menu" : "nav__menu",
                children: [
                  (0, yt.jsx)("i", {
                    className: "fa fa-xmark nav__close",
                    onClick: () => {
                      t(!e);
                    },
                  }),
                  (0, yt.jsxs)("ul", {
                    className: "nav__list",
                    children: [
                      (0, yt.jsx)("li", {
                        className: "nav__item",
                        children: (0, yt.jsxs)(ct, {
                          to: "/",
                          onClick: () => a("#home"),
                          className:
                            "#home" === n ? "nav__link active" : "nav__link",
                          children: [
                            (0, yt.jsx)("i", {
                              className: "fa fa-house nav__icon",
                            }),
                            "Home",
                          ],
                        }),
                      }),
                      (0, yt.jsx)("li", {
                        className: "nav__item",
                        children: (0, yt.jsxs)(ct, {
                          to: "/contact",
                          onClick: () => a("#contact"),
                          className:
                            "#contact" === n ? "nav__link active" : "nav__link",
                          children: [
                            (0, yt.jsx)("i", {
                              className: "fa fa-phone nav__icon",
                            }),
                            "Contact",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, yt.jsx)("div", {
                className: "nav__toggle",
                onClick: () => {
                  t(!e);
                },
                children: (0, yt.jsx)("i", {
                  className: "fa fa-bars-progress",
                }),
              }),
            ],
          }),
        ],
      });
    },
    wt = (0, r.createContext)(),
    kt = (e) => {
      let { children: t } = e;
      const [n, a] = (0, r.useState)(null);
      return (0, yt.jsx)(wt.Provider, {
        value: {
          alert: n,
          showAlert: (e, t) => {
            a({ type: e, message: t });
          },
          closeAlert: () => {
            a(null);
          },
        },
        children: t,
      });
    },
    St = (e) => {
      let { text: t, children: n } = e;
      const [a, l] = (0, r.useState)(!1);
      return (0, yt.jsxs)("div", {
        className: "tooltip-container",
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
          n,
          a && (0, yt.jsx)("div", { className: "tooltip", children: t }),
        ],
      });
    },
    xt = () => {
      const { alert: e, showAlert: t, closeAlert: n } = (0, r.useContext)(wt);
      return (0, yt.jsx)("section", {
        className: "armstrong__section section__padding",
        children: (0, yt.jsx)("div", {
          className: "container",
          children: (0, yt.jsxs)("div", {
            className: "armstrong__container",
            children: [
              (0, yt.jsx)("form", {
                id: "armstrong-form",
                className: "armstrong__form form__row",
                method: "POST",
                action: "",
                children: (0, yt.jsxs)("div", {
                  className: "armstrong__content",
                  children: [
                    (0, yt.jsx)("div", {
                      className: "armstrong__content-item",
                      children: (0, yt.jsxs)("div", {
                        className: "form__group",
                        children: [
                          (0, yt.jsx)("label", {
                            htmlFor: "min_num",
                            children: "Minimum Number:",
                          }),
                          (0, yt.jsx)("input", {
                            type: "number",
                            name: "min_num",
                            className: "form__input",
                            id: "min_num",
                            placeholder: "Enter Min Value",
                          }),
                          (0, yt.jsx)("div", {
                            className: "clear__input-container",
                            children: (0, yt.jsx)(St, {
                              text: "Clear Input",
                              children: (0, yt.jsx)("button", {
                                className:
                                  "btn btn__small btn__danger btn__clear",
                                id: "reset_min_num",
                                children: (0, yt.jsx)("i", {
                                  className: "fa fa-trash",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, yt.jsx)("div", {
                      className: "armstrong__content-item",
                      children: (0, yt.jsxs)("div", {
                        className: "form__group",
                        children: [
                          (0, yt.jsx)("label", {
                            htmlFor: "max_num",
                            children: "Maximum Number:",
                          }),
                          (0, yt.jsx)("input", {
                            type: "number",
                            name: "max_num",
                            className: "form__input",
                            id: "max_num",
                            placeholder: "Enter Max Value",
                          }),
                          (0, yt.jsx)("div", {
                            className: "clear__input-container",
                            children: (0, yt.jsx)(St, {
                              text: "Clear Input",
                              children: (0, yt.jsx)("button", {
                                className:
                                  "btn btn__small btn__danger btn__clear",
                                id: "reset_max_num",
                                children: (0, yt.jsx)("i", {
                                  className: "fa fa-trash",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, yt.jsx)("div", {
                      className: "armstrong__content-item",
                      children: (0, yt.jsxs)("div", {
                        className: "btn__container",
                        children: [
                          (0, yt.jsx)("div", {
                            className: "clear__allInputs-container",
                            children: (0, yt.jsxs)("button", {
                              className: "btn btn__danger btn__clear",
                              type: "reset",
                              children: [
                                "Clear All ",
                                (0, yt.jsx)("i", { className: "fa fa-trash" }),
                              ],
                            }),
                          }),
                          (0, yt.jsx)("div", {
                            className: "find_armstg_num__container",
                            children: (0, yt.jsx)(St, {
                              text: "Find Armstrong Numbers",
                              children: (0, yt.jsx)("button", {
                                type: "submit",
                                className: "btn",
                                id: "find_armstrong_nums",
                                children: (0, yt.jsx)("i", {
                                  className: "fa fa-search",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, yt.jsx)("form", {
                className: "armstrong__form form__row",
                action: "",
                method: "POST",
                id: "check-number-form",
                children: (0, yt.jsx)("div", {
                  className: "check__num-content",
                  children: (0, yt.jsxs)("div", {
                    className: "form__group",
                    children: [
                      (0, yt.jsx)("label", {
                        htmlFor: "check_particular_num",
                        children: "Enter a Number:",
                      }),
                      (0, yt.jsx)("input", {
                        type: "number",
                        name: "check_particular_num",
                        className: "form__input",
                        id: "check_particular_num",
                        placeholder: "Enter a Number",
                      }),
                      (0, yt.jsxs)("div", {
                        className: "btn__container",
                        children: [
                          (0, yt.jsx)("div", {
                            className: "clear__allInputs-container",
                            children: (0, yt.jsx)(St, {
                              text: "Clear Input",
                              children: (0, yt.jsx)("button", {
                                className:
                                  "btn btn__small btn__danger btn__clear",
                                id: "reset_check_particular_num",
                                type: "reset",
                                children: (0, yt.jsx)("i", {
                                  className: "fa fa-trash",
                                }),
                              }),
                            }),
                          }),
                          (0, yt.jsx)("div", {
                            className: "find_armstg_num__container",
                            children: (0, yt.jsx)(St, {
                              text: "Check Number",
                              children: (0, yt.jsx)("button", {
                                type: "submit",
                                className: "btn btn__small",
                                id: "find_armstrong_num",
                                children: (0, yt.jsx)("i", {
                                  className: "fa fa-search",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      });
    },
    _t = () => (
      window.scrollTo({ top: 0, behavior: "smooth" }),
      (0, yt.jsxs)("section", {
        id: "home",
        children: [
          (0, yt.jsx)("div", {
            className: "banner",
            children: (0, yt.jsx)("div", {
              className: "container",
              children: (0, yt.jsxs)("div", {
                className: "banner__content center__heading",
                children: [
                  (0, yt.jsx)("h1", { children: "Armstrong Number Checker " }),
                  (0, yt.jsx)("p", {
                    children:
                      "This web application provides a user-friendly interface to input a range and find all Armstrong numbers within that range or a number to check for Armstrong Number.",
                  }),
                ],
              }),
            }),
          }),
          (0, yt.jsx)(xt, {}),
          (0, yt.jsx)("div", {
            className: "about__section",
            children: (0, yt.jsx)("div", {
              className: "container",
              children: (0, yt.jsxs)("div", {
                className: "about__section-content grid",
                children: [
                  (0, yt.jsx)("div", {
                    className: "about__section-content-item",
                    children: (0, yt.jsx)("div", { className: "about__img" }),
                  }),
                  (0, yt.jsxs)("div", {
                    className: "about__section-content-item",
                    children: [
                      (0, yt.jsxs)("div", {
                        className: "about__section-title",
                        children: [
                          (0, yt.jsx)("span", {
                            className: "subheading",
                            children: "Welcome",
                          }),
                          (0, yt.jsx)("h3", {
                            children: "The Armstrong Number Checker",
                          }),
                        ],
                      }),
                      (0, yt.jsxs)("p", {
                        children: [
                          "The Armstrong Number Checker is a simple web application designed to determine whether a given positive integer is an Armstrong number. An Armstrong number (also known as a narcissistic number or a pluperfect digital invariant) is a number that is equal to the sum of its own digits raised to the power of the number of digits. For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153. ",
                          (0, yt.jsx)("br", {}),
                          (0, yt.jsx)("br", {}),
                          "This web application provides a user-friendly interface to input a range and find all Armstrong numbers within that range or a number to check for Armstrong Number.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      })
    ),
    Et = () =>
      (0, yt.jsxs)("section", {
        id: "contact",
        children: [
          (0, yt.jsx)("div", {
            className: "page__header",
            children: (0, yt.jsx)("div", {
              className: "container",
              children: (0, yt.jsxs)("div", {
                className: "page__header-content",
                children: [
                  (0, yt.jsxs)("ul", {
                    children: [
                      (0, yt.jsx)("li", {
                        children: (0, yt.jsx)(ct, {
                          to: "/",
                          id: "breadcrumps",
                          children: "Home",
                        }),
                      }),
                      (0, yt.jsx)("li", { children: "/" }),
                      (0, yt.jsx)("li", { children: "Contact Us" }),
                    ],
                  }),
                  (0, yt.jsx)("h1", { children: "Feel free to Contact Us" }),
                ],
              }),
            }),
          }),
          (0, yt.jsx)("div", {
            className: "contact__info section__padding",
            children: (0, yt.jsxs)("div", {
              className: "container",
              children: [
                (0, yt.jsx)("div", {
                  className: "contact__info-content",
                  children: (0, yt.jsx)("div", {
                    className: "col-lg-6",
                    children: (0, yt.jsxs)("div", {
                      className: "section__heading center__heading",
                      children: [
                        (0, yt.jsx)("span", {
                          className: "subheading",
                          children: "Contact Us",
                        }),
                        (0, yt.jsx)("h3", { children: "Have any query?" }),
                        (0, yt.jsx)("p", {
                          children:
                            "Feel free to drop your concerns, suggestions and questions here, and we will get back to you with a positive response.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, yt.jsxs)("div", {
                  className: "contact__info-content",
                  children: [
                    (0, yt.jsxs)("div", {
                      className: "contact__info-content-item",
                      children: [
                        (0, yt.jsx)("div", {
                          className: "contact__info-content-item",
                          children: (0, yt.jsxs)("div", {
                            className: "contact__item",
                            children: [
                              (0, yt.jsx)("span", {
                                className: "subheading",
                                children: "Email Us",
                              }),
                              (0, yt.jsx)("h4", {
                                children: (0, yt.jsx)("a", {
                                  href: "mailto:#",
                                  children: "*example@example.com*",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, yt.jsx)("div", {
                          className: "contact__info-content-item",
                          children: (0, yt.jsxs)("div", {
                            className: "contact__item",
                            children: [
                              (0, yt.jsx)("span", {
                                className: "subheading",
                                children: "Make a Call",
                              }),
                              (0, yt.jsx)("h4", {
                                children: (0, yt.jsx)("a", {
                                  href: "tel:+",
                                  children: "*+phone number*",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, yt.jsx)("div", {
                          className: "contact__info-content-item",
                          children: (0, yt.jsxs)("div", {
                            className: "contact__item",
                            children: [
                              (0, yt.jsx)("span", {
                                className: "subheading",
                                children: "Corporate Office",
                              }),
                              (0, yt.jsx)("h4", {
                                children: "*Address goes here*",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, yt.jsx)("div", {
                      className: "contact__info-content-item",
                      children: (0, yt.jsxs)("form", {
                        className: "contact__form form__row ",
                        method: "POST",
                        action: "",
                        id: "contactForm",
                        children: [
                          (0, yt.jsxs)("div", {
                            className: "contact__form-container",
                            children: [
                              (0, yt.jsxs)("div", {
                                className: "form__group",
                                children: [
                                  (0, yt.jsx)("label", {
                                    htmlFor: "name",
                                    children: "Full Name:",
                                  }),
                                  (0, yt.jsx)("input", {
                                    type: "text",
                                    name: "name",
                                    size: "32",
                                    className: "form__input",
                                    id: "name",
                                    required: !0,
                                    placeholder: "John Doe",
                                  }),
                                ],
                              }),
                              (0, yt.jsxs)("div", {
                                className: "form__group",
                                children: [
                                  (0, yt.jsx)("label", {
                                    htmlFor: "email",
                                    children: "Email:",
                                  }),
                                  (0, yt.jsx)("input", {
                                    type: "email",
                                    name: "email",
                                    size: "32",
                                    className: "form__input",
                                    id: "email",
                                    required: !0,
                                    placeholder: "example@example.com",
                                  }),
                                ],
                              }),
                              (0, yt.jsxs)("div", {
                                className: "form__group",
                                children: [
                                  (0, yt.jsx)("label", {
                                    htmlFor: "subject",
                                    children: "Subject:",
                                  }),
                                  (0, yt.jsx)("input", {
                                    type: "text",
                                    name: "subject",
                                    size: "32",
                                    className: "form__input",
                                    id: "subject",
                                    required: !0,
                                    placeholder: "Suggestion",
                                  }),
                                ],
                              }),
                              (0, yt.jsxs)("div", {
                                className: "form__group",
                                children: [
                                  (0, yt.jsx)("label", {
                                    htmlFor: "message",
                                    children: "Message:",
                                  }),
                                  (0, yt.jsx)("textarea", {
                                    class: "form__input",
                                    cols: "50",
                                    id: "message",
                                    name: "message",
                                    placeholder: "Message",
                                    required: "",
                                    rows: "6",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, yt.jsx)("div", {
                            className: "contact__form-content",
                            children: (0, yt.jsxs)("button", {
                              type: "submit",
                              className: "btn submit__btn",
                              children: [
                                "Send ",
                                (0, yt.jsx)("i", { className: "fa fa-check" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    Ct = () => {
      const e = new Date().getFullYear();
      return (0, yt.jsxs)("section", {
        className: "footer",
        children: [
          (0, yt.jsxs)("div", {
            className: "footer__container",
            children: [
              (0, yt.jsxs)("div", {
                className: "footer__widget",
                children: [
                  (0, yt.jsx)("h5", {
                    className: "footer__widget-title",
                    children: "About Us",
                  }),
                  (0, yt.jsx)("p", {
                    className: "footer__section-description",
                    children:
                      "The Armstrong Number Checker is a simple web application designed to determine whether a given positive integer is an Armstrong number (also known as a narcissistic number).",
                  }),
                ],
              }),
              (0, yt.jsxs)("div", {
                className: "footer__widget footer__contact",
                children: [
                  (0, yt.jsx)("h5", {
                    className: "footer__widget-title",
                    children: "Contact Us",
                  }),
                  (0, yt.jsx)("ul", {
                    children: (0, yt.jsxs)("li", {
                      children: [
                        (0, yt.jsx)("i", { className: "fa fa-envelope" }),
                        (0, yt.jsxs)("div", {
                          children: [
                            (0, yt.jsx)("strong", {
                              children: "Email Address",
                            }),
                            (0, yt.jsx)("a", {
                              href: "mailto:#",
                              children: "example@example.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, yt.jsx)("div", {
            className: "footer__btm",
            children: (0, yt.jsxs)("div", {
              className: "footer__btm-content",
              children: [
                (0, yt.jsx)("div", {
                  className: "footer__btm-content-item",
                  children: (0, yt.jsx)("div", {
                    className: "footer__logo",
                    children: (0, yt.jsx)("img", {
                      src: vt,
                      alt: "Armstrong Number Checker",
                      className: "appName__img",
                    }),
                  }),
                }),
                (0, yt.jsx)("div", {
                  className: "footer__btm-content-item",
                  children: (0, yt.jsxs)("span", {
                    className: "footer__copy",
                    children: [
                      e,
                      " \xa9 Armstrong Number Checker - Crafted by ",
                      (0, yt.jsx)("a", {
                        href: "https://xerodev.vercel.app/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "xeroDev",
                        children: "XeroDev",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    },
    Nt = () => {
      (0, r.useEffect)(() => {
        const e = () => {
          const e = document.querySelector(".scrollup");
          window.scrollY >= 30
            ? e.classList.add("show-scroll")
            : e.classList.remove("show-scroll");
        };
        return (
          window.addEventListener("scroll", e),
          () => {
            window.removeEventListener("scroll", e);
          }
        );
      }, []);
      return (0, yt.jsx)("a", {
        href: "#",
        className: "scrollup",
        "aria-label": "Scroll to top",
        onClick: (e) => {
          e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
        },
        children: (0, yt.jsx)("i", {
          className: "fa fa-arrow-up scrollup__icon",
        }),
      });
    };
  const Pt = function () {
    return (0, yt.jsxs)(ut, {
      children: [
        (0, yt.jsx)(bt, {}),
        (0, yt.jsxs)(Pe, {
          children: [
            (0, yt.jsx)(Ce, { path: "/", element: (0, yt.jsx)(_t, {}) }),
            (0, yt.jsx)(Ce, { path: "/contact", element: (0, yt.jsx)(Et, {}) }),
          ],
        }),
        (0, yt.jsx)(Ct, {}),
        (0, yt.jsx)(Nt, {}),
      ],
    });
  };
  a.createRoot(document.getElementById("root")).render(
    (0, yt.jsx)(r.StrictMode, {
      children: (0, yt.jsx)(kt, { children: (0, yt.jsx)(Pt, {}) }),
    })
  );
})();
//# sourceMappingURL=main.63f2f9c7.js.map
