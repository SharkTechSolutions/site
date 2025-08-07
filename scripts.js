(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        r(c);
    new MutationObserver(c => {
        for (const m of c)
            if (m.type === "childList")
                for (const d of m.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function o(c) {
        const m = {};
        return c.integrity && (m.integrity = c.integrity),
        c.referrerPolicy && (m.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? m.credentials = "include" : c.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin",
        m
    }
    function r(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const m = o(c);
        fetch(c.href, m)
    }
}
)();
var bu = {
    exports: {}
}
  , ls = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bm;
function m1() {
    if (Bm)
        return ls;
    Bm = 1;
    var i = Symbol.for("react.transitional.element")
      , s = Symbol.for("react.fragment");
    function o(r, c, m) {
        var d = null;
        if (m !== void 0 && (d = "" + m),
        c.key !== void 0 && (d = "" + c.key),
        "key"in c) {
            m = {};
            for (var y in c)
                y !== "key" && (m[y] = c[y])
        } else
            m = c;
        return c = m.ref,
        {
            $$typeof: i,
            type: r,
            key: d,
            ref: c !== void 0 ? c : null,
            props: m
        }
    }
    return ls.Fragment = s,
    ls.jsx = o,
    ls.jsxs = o,
    ls
}
var Lm;
function p1() {
    return Lm || (Lm = 1,
    bu.exports = m1()),
    bu.exports
}
var f = p1()
  , xu = {
    exports: {}
}
  , st = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hm;
function y1() {
    if (Hm)
        return st;
    Hm = 1;
    var i = Symbol.for("react.transitional.element")
      , s = Symbol.for("react.portal")
      , o = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , m = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , y = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , S = Symbol.for("react.lazy")
      , b = Symbol.iterator;
    function A(T) {
        return T === null || typeof T != "object" ? null : (T = b && T[b] || T["@@iterator"],
        typeof T == "function" ? T : null)
    }
    var N = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , _ = Object.assign
      , H = {};
    function X(T, U, Q) {
        this.props = T,
        this.context = U,
        this.refs = H,
        this.updater = Q || N
    }
    X.prototype.isReactComponent = {},
    X.prototype.setState = function(T, U) {
        if (typeof T != "object" && typeof T != "function" && T != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, U, "setState")
    }
    ,
    X.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    }
    ;
    function G() {}
    G.prototype = X.prototype;
    function P(T, U, Q) {
        this.props = T,
        this.context = U,
        this.refs = H,
        this.updater = Q || N
    }
    var Y = P.prototype = new G;
    Y.constructor = P,
    _(Y, X.prototype),
    Y.isPureReactComponent = !0;
    var it = Array.isArray
      , B = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , F = Object.prototype.hasOwnProperty;
    function lt(T, U, Q, k, $, ht) {
        return Q = ht.ref,
        {
            $$typeof: i,
            type: T,
            key: U,
            ref: Q !== void 0 ? Q : null,
            props: ht
        }
    }
    function W(T, U) {
        return lt(T.type, U, void 0, void 0, void 0, T.props)
    }
    function St(T) {
        return typeof T == "object" && T !== null && T.$$typeof === i
    }
    function Vt(T) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function(Q) {
            return U[Q]
        })
    }
    var It = /\/+/g;
    function Yt(T, U) {
        return typeof T == "object" && T !== null && T.key != null ? Vt("" + T.key) : U.toString(36)
    }
    function Pe() {}
    function Le(T) {
        switch (T.status) {
        case "fulfilled":
            return T.value;
        case "rejected":
            throw T.reason;
        default:
            switch (typeof T.status == "string" ? T.then(Pe, Pe) : (T.status = "pending",
            T.then(function(U) {
                T.status === "pending" && (T.status = "fulfilled",
                T.value = U)
            }, function(U) {
                T.status === "pending" && (T.status = "rejected",
                T.reason = U)
            })),
            T.status) {
            case "fulfilled":
                return T.value;
            case "rejected":
                throw T.reason
            }
        }
        throw T
    }
    function Pt(T, U, Q, k, $) {
        var ht = typeof T;
        (ht === "undefined" || ht === "boolean") && (T = null);
        var at = !1;
        if (T === null)
            at = !0;
        else
            switch (ht) {
            case "bigint":
            case "string":
            case "number":
                at = !0;
                break;
            case "object":
                switch (T.$$typeof) {
                case i:
                case s:
                    at = !0;
                    break;
                case S:
                    return at = T._init,
                    Pt(at(T._payload), U, Q, k, $)
                }
            }
        if (at)
            return $ = $(T),
            at = k === "" ? "." + Yt(T, 0) : k,
            it($) ? (Q = "",
            at != null && (Q = at.replace(It, "$&/") + "/"),
            Pt($, U, Q, "", function(hn) {
                return hn
            })) : $ != null && (St($) && ($ = W($, Q + ($.key == null || T && T.key === $.key ? "" : ("" + $.key).replace(It, "$&/") + "/") + at)),
            U.push($)),
            1;
        at = 0;
        var de = k === "" ? "." : k + ":";
        if (it(T))
            for (var Et = 0; Et < T.length; Et++)
                k = T[Et],
                ht = de + Yt(k, Et),
                at += Pt(k, U, Q, ht, $);
        else if (Et = A(T),
        typeof Et == "function")
            for (T = Et.call(T),
            Et = 0; !(k = T.next()).done; )
                k = k.value,
                ht = de + Yt(k, Et++),
                at += Pt(k, U, Q, ht, $);
        else if (ht === "object") {
            if (typeof T.then == "function")
                return Pt(Le(T), U, Q, k, $);
            throw U = String(T),
            Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.")
        }
        return at
    }
    function w(T, U, Q) {
        if (T == null)
            return T;
        var k = []
          , $ = 0;
        return Pt(T, k, "", "", function(ht) {
            return U.call(Q, ht, $++)
        }),
        k
    }
    function q(T) {
        if (T._status === -1) {
            var U = T._result;
            U = U(),
            U.then(function(Q) {
                (T._status === 0 || T._status === -1) && (T._status = 1,
                T._result = Q)
            }, function(Q) {
                (T._status === 0 || T._status === -1) && (T._status = 2,
                T._result = Q)
            }),
            T._status === -1 && (T._status = 0,
            T._result = U)
        }
        if (T._status === 1)
            return T._result.default;
        throw T._result
    }
    var K = typeof reportError == "function" ? reportError : function(T) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var U = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                error: T
            });
            if (!window.dispatchEvent(U))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return
        }
        console.error(T)
    }
    ;
    function pt() {}
    return st.Children = {
        map: w,
        forEach: function(T, U, Q) {
            w(T, function() {
                U.apply(this, arguments)
            }, Q)
        },
        count: function(T) {
            var U = 0;
            return w(T, function() {
                U++
            }),
            U
        },
        toArray: function(T) {
            return w(T, function(U) {
                return U
            }) || []
        },
        only: function(T) {
            if (!St(T))
                throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    },
    st.Component = X,
    st.Fragment = o,
    st.Profiler = c,
    st.PureComponent = P,
    st.StrictMode = r,
    st.Suspense = g,
    st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B,
    st.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(T) {
            return B.H.useMemoCache(T)
        }
    },
    st.cache = function(T) {
        return function() {
            return T.apply(null, arguments)
        }
    }
    ,
    st.cloneElement = function(T, U, Q) {
        if (T == null)
            throw Error("The argument must be a React element, but you passed " + T + ".");
        var k = _({}, T.props)
          , $ = T.key
          , ht = void 0;
        if (U != null)
            for (at in U.ref !== void 0 && (ht = void 0),
            U.key !== void 0 && ($ = "" + U.key),
            U)
                !F.call(U, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && U.ref === void 0 || (k[at] = U[at]);
        var at = arguments.length - 2;
        if (at === 1)
            k.children = Q;
        else if (1 < at) {
            for (var de = Array(at), Et = 0; Et < at; Et++)
                de[Et] = arguments[Et + 2];
            k.children = de
        }
        return lt(T.type, $, void 0, void 0, ht, k)
    }
    ,
    st.createContext = function(T) {
        return T = {
            $$typeof: d,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        T.Provider = T,
        T.Consumer = {
            $$typeof: m,
            _context: T
        },
        T
    }
    ,
    st.createElement = function(T, U, Q) {
        var k, $ = {}, ht = null;
        if (U != null)
            for (k in U.key !== void 0 && (ht = "" + U.key),
            U)
                F.call(U, k) && k !== "key" && k !== "__self" && k !== "__source" && ($[k] = U[k]);
        var at = arguments.length - 2;
        if (at === 1)
            $.children = Q;
        else if (1 < at) {
            for (var de = Array(at), Et = 0; Et < at; Et++)
                de[Et] = arguments[Et + 2];
            $.children = de
        }
        if (T && T.defaultProps)
            for (k in at = T.defaultProps,
            at)
                $[k] === void 0 && ($[k] = at[k]);
        return lt(T, ht, void 0, void 0, null, $)
    }
    ,
    st.createRef = function() {
        return {
            current: null
        }
    }
    ,
    st.forwardRef = function(T) {
        return {
            $$typeof: y,
            render: T
        }
    }
    ,
    st.isValidElement = St,
    st.lazy = function(T) {
        return {
            $$typeof: S,
            _payload: {
                _status: -1,
                _result: T
            },
            _init: q
        }
    }
    ,
    st.memo = function(T, U) {
        return {
            $$typeof: p,
            type: T,
            compare: U === void 0 ? null : U
        }
    }
    ,
    st.startTransition = function(T) {
        var U = B.T
          , Q = {};
        B.T = Q;
        try {
            var k = T()
              , $ = B.S;
            $ !== null && $(Q, k),
            typeof k == "object" && k !== null && typeof k.then == "function" && k.then(pt, K)
        } catch (ht) {
            K(ht)
        } finally {
            B.T = U
        }
    }
    ,
    st.unstable_useCacheRefresh = function() {
        return B.H.useCacheRefresh()
    }
    ,
    st.use = function(T) {
        return B.H.use(T)
    }
    ,
    st.useActionState = function(T, U, Q) {
        return B.H.useActionState(T, U, Q)
    }
    ,
    st.useCallback = function(T, U) {
        return B.H.useCallback(T, U)
    }
    ,
    st.useContext = function(T) {
        return B.H.useContext(T)
    }
    ,
    st.useDebugValue = function() {}
    ,
    st.useDeferredValue = function(T, U) {
        return B.H.useDeferredValue(T, U)
    }
    ,
    st.useEffect = function(T, U, Q) {
        var k = B.H;
        if (typeof Q == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return k.useEffect(T, U)
    }
    ,
    st.useId = function() {
        return B.H.useId()
    }
    ,
    st.useImperativeHandle = function(T, U, Q) {
        return B.H.useImperativeHandle(T, U, Q)
    }
    ,
    st.useInsertionEffect = function(T, U) {
        return B.H.useInsertionEffect(T, U)
    }
    ,
    st.useLayoutEffect = function(T, U) {
        return B.H.useLayoutEffect(T, U)
    }
    ,
    st.useMemo = function(T, U) {
        return B.H.useMemo(T, U)
    }
    ,
    st.useOptimistic = function(T, U) {
        return B.H.useOptimistic(T, U)
    }
    ,
    st.useReducer = function(T, U, Q) {
        return B.H.useReducer(T, U, Q)
    }
    ,
    st.useRef = function(T) {
        return B.H.useRef(T)
    }
    ,
    st.useState = function(T) {
        return B.H.useState(T)
    }
    ,
    st.useSyncExternalStore = function(T, U, Q) {
        return B.H.useSyncExternalStore(T, U, Q)
    }
    ,
    st.useTransition = function() {
        return B.H.useTransition()
    }
    ,
    st.version = "19.1.0",
    st
}
var qm;
function lc() {
    return qm || (qm = 1,
    xu.exports = y1()),
    xu.exports
}
var L = lc()
  , Tu = {
    exports: {}
}
  , os = {}
  , Au = {
    exports: {}
}
  , ju = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ym;
function g1() {
    return Ym || (Ym = 1,
    function(i) {
        function s(w, q) {
            var K = w.length;
            w.push(q);
            t: for (; 0 < K; ) {
                var pt = K - 1 >>> 1
                  , T = w[pt];
                if (0 < c(T, q))
                    w[pt] = q,
                    w[K] = T,
                    K = pt;
                else
                    break t
            }
        }
        function o(w) {
            return w.length === 0 ? null : w[0]
        }
        function r(w) {
            if (w.length === 0)
                return null;
            var q = w[0]
              , K = w.pop();
            if (K !== q) {
                w[0] = K;
                t: for (var pt = 0, T = w.length, U = T >>> 1; pt < U; ) {
                    var Q = 2 * (pt + 1) - 1
                      , k = w[Q]
                      , $ = Q + 1
                      , ht = w[$];
                    if (0 > c(k, K))
                        $ < T && 0 > c(ht, k) ? (w[pt] = ht,
                        w[$] = K,
                        pt = $) : (w[pt] = k,
                        w[Q] = K,
                        pt = Q);
                    else if ($ < T && 0 > c(ht, K))
                        w[pt] = ht,
                        w[$] = K,
                        pt = $;
                    else
                        break t
                }
            }
            return q
        }
        function c(w, q) {
            var K = w.sortIndex - q.sortIndex;
            return K !== 0 ? K : w.id - q.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var m = performance;
            i.unstable_now = function() {
                return m.now()
            }
        } else {
            var d = Date
              , y = d.now();
            i.unstable_now = function() {
                return d.now() - y
            }
        }
        var g = []
          , p = []
          , S = 1
          , b = null
          , A = 3
          , N = !1
          , _ = !1
          , H = !1
          , X = !1
          , G = typeof setTimeout == "function" ? setTimeout : null
          , P = typeof clearTimeout == "function" ? clearTimeout : null
          , Y = typeof setImmediate < "u" ? setImmediate : null;
        function it(w) {
            for (var q = o(p); q !== null; ) {
                if (q.callback === null)
                    r(p);
                else if (q.startTime <= w)
                    r(p),
                    q.sortIndex = q.expirationTime,
                    s(g, q);
                else
                    break;
                q = o(p)
            }
        }
        function B(w) {
            if (H = !1,
            it(w),
            !_)
                if (o(g) !== null)
                    _ = !0,
                    F || (F = !0,
                    Yt());
                else {
                    var q = o(p);
                    q !== null && Pt(B, q.startTime - w)
                }
        }
        var F = !1
          , lt = -1
          , W = 5
          , St = -1;
        function Vt() {
            return X ? !0 : !(i.unstable_now() - St < W)
        }
        function It() {
            if (X = !1,
            F) {
                var w = i.unstable_now();
                St = w;
                var q = !0;
                try {
                    t: {
                        _ = !1,
                        H && (H = !1,
                        P(lt),
                        lt = -1),
                        N = !0;
                        var K = A;
                        try {
                            e: {
                                for (it(w),
                                b = o(g); b !== null && !(b.expirationTime > w && Vt()); ) {
                                    var pt = b.callback;
                                    if (typeof pt == "function") {
                                        b.callback = null,
                                        A = b.priorityLevel;
                                        var T = pt(b.expirationTime <= w);
                                        if (w = i.unstable_now(),
                                        typeof T == "function") {
                                            b.callback = T,
                                            it(w),
                                            q = !0;
                                            break e
                                        }
                                        b === o(g) && r(g),
                                        it(w)
                                    } else
                                        r(g);
                                    b = o(g)
                                }
                                if (b !== null)
                                    q = !0;
                                else {
                                    var U = o(p);
                                    U !== null && Pt(B, U.startTime - w),
                                    q = !1
                                }
                            }
                            break t
                        } finally {
                            b = null,
                            A = K,
                            N = !1
                        }
                        q = void 0
                    }
                } finally {
                    q ? Yt() : F = !1
                }
            }
        }
        var Yt;
        if (typeof Y == "function")
            Yt = function() {
                Y(It)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Pe = new MessageChannel
              , Le = Pe.port2;
            Pe.port1.onmessage = It,
            Yt = function() {
                Le.postMessage(null)
            }
        } else
            Yt = function() {
                G(It, 0)
            }
            ;
        function Pt(w, q) {
            lt = G(function() {
                w(i.unstable_now())
            }, q)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(w) {
            w.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(w) {
            0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < w ? Math.floor(1e3 / w) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return A
        }
        ,
        i.unstable_next = function(w) {
            switch (A) {
            case 1:
            case 2:
            case 3:
                var q = 3;
                break;
            default:
                q = A
            }
            var K = A;
            A = q;
            try {
                return w()
            } finally {
                A = K
            }
        }
        ,
        i.unstable_requestPaint = function() {
            X = !0
        }
        ,
        i.unstable_runWithPriority = function(w, q) {
            switch (w) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                w = 3
            }
            var K = A;
            A = w;
            try {
                return q()
            } finally {
                A = K
            }
        }
        ,
        i.unstable_scheduleCallback = function(w, q, K) {
            var pt = i.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay,
            K = typeof K == "number" && 0 < K ? pt + K : pt) : K = pt,
            w) {
            case 1:
                var T = -1;
                break;
            case 2:
                T = 250;
                break;
            case 5:
                T = 1073741823;
                break;
            case 4:
                T = 1e4;
                break;
            default:
                T = 5e3
            }
            return T = K + T,
            w = {
                id: S++,
                callback: q,
                priorityLevel: w,
                startTime: K,
                expirationTime: T,
                sortIndex: -1
            },
            K > pt ? (w.sortIndex = K,
            s(p, w),
            o(g) === null && w === o(p) && (H ? (P(lt),
            lt = -1) : H = !0,
            Pt(B, K - pt))) : (w.sortIndex = T,
            s(g, w),
            _ || N || (_ = !0,
            F || (F = !0,
            Yt()))),
            w
        }
        ,
        i.unstable_shouldYield = Vt,
        i.unstable_wrapCallback = function(w) {
            var q = A;
            return function() {
                var K = A;
                A = q;
                try {
                    return w.apply(this, arguments)
                } finally {
                    A = K
                }
            }
        }
    }(ju)),
    ju
}
var Gm;
function v1() {
    return Gm || (Gm = 1,
    Au.exports = g1()),
    Au.exports
}
var Mu = {
    exports: {}
}
  , ne = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xm;
function S1() {
    if (Xm)
        return ne;
    Xm = 1;
    var i = lc();
    function s(g) {
        var p = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var S = 2; S < arguments.length; S++)
                p += "&args[]=" + encodeURIComponent(arguments[S])
        }
        return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o() {}
    var r = {
        d: {
            f: o,
            r: function() {
                throw Error(s(522))
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function m(g, p, S) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: b == null ? null : "" + b,
            children: g,
            containerInfo: p,
            implementation: S
        }
    }
    var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function y(g, p) {
        if (g === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    ne.createPortal = function(g, p) {
        var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(s(299));
        return m(g, p, null, S)
    }
    ,
    ne.flushSync = function(g) {
        var p = d.T
          , S = r.p;
        try {
            if (d.T = null,
            r.p = 2,
            g)
                return g()
        } finally {
            d.T = p,
            r.p = S,
            r.d.f()
        }
    }
    ,
    ne.preconnect = function(g, p) {
        typeof g == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        r.d.C(g, p))
    }
    ,
    ne.prefetchDNS = function(g) {
        typeof g == "string" && r.d.D(g)
    }
    ,
    ne.preinit = function(g, p) {
        if (typeof g == "string" && p && typeof p.as == "string") {
            var S = p.as
              , b = y(S, p.crossOrigin)
              , A = typeof p.integrity == "string" ? p.integrity : void 0
              , N = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            S === "style" ? r.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: b,
                integrity: A,
                fetchPriority: N
            }) : S === "script" && r.d.X(g, {
                crossOrigin: b,
                integrity: A,
                fetchPriority: N,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    ne.preinitModule = function(g, p) {
        if (typeof g == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var S = y(p.as, p.crossOrigin);
                    r.d.M(g, {
                        crossOrigin: S,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && r.d.M(g)
    }
    ,
    ne.preload = function(g, p) {
        if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var S = p.as
              , b = y(S, p.crossOrigin);
            r.d.L(g, S, {
                crossOrigin: b,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    ne.preloadModule = function(g, p) {
        if (typeof g == "string")
            if (p) {
                var S = y(p.as, p.crossOrigin);
                r.d.m(g, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: S,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                r.d.m(g)
    }
    ,
    ne.requestFormReset = function(g) {
        r.d.r(g)
    }
    ,
    ne.unstable_batchedUpdates = function(g, p) {
        return g(p)
    }
    ,
    ne.useFormState = function(g, p, S) {
        return d.H.useFormState(g, p, S)
    }
    ,
    ne.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    ne.version = "19.1.0",
    ne
}
var km;
function b1() {
    if (km)
        return Mu.exports;
    km = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (s) {
                console.error(s)
            }
    }
    return i(),
    Mu.exports = S1(),
    Mu.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qm;
function x1() {
    if (Qm)
        return os;
    Qm = 1;
    var i = v1()
      , s = lc()
      , o = b1();
    function r(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function m(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function d(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function y(t) {
        if (m(t) !== t)
            throw Error(r(188))
    }
    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = m(t),
            e === null)
                throw Error(r(188));
            return e !== t ? null : t
        }
        for (var n = t, a = e; ; ) {
            var l = n.return;
            if (l === null)
                break;
            var u = l.alternate;
            if (u === null) {
                if (a = l.return,
                a !== null) {
                    n = a;
                    continue
                }
                break
            }
            if (l.child === u.child) {
                for (u = l.child; u; ) {
                    if (u === n)
                        return y(l),
                        t;
                    if (u === a)
                        return y(l),
                        e;
                    u = u.sibling
                }
                throw Error(r(188))
            }
            if (n.return !== a.return)
                n = l,
                a = u;
            else {
                for (var h = !1, v = l.child; v; ) {
                    if (v === n) {
                        h = !0,
                        n = l,
                        a = u;
                        break
                    }
                    if (v === a) {
                        h = !0,
                        a = l,
                        n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!h) {
                    for (v = u.child; v; ) {
                        if (v === n) {
                            h = !0,
                            n = u,
                            a = l;
                            break
                        }
                        if (v === a) {
                            h = !0,
                            a = u,
                            n = l;
                            break
                        }
                        v = v.sibling
                    }
                    if (!h)
                        throw Error(r(189))
                }
            }
            if (n.alternate !== a)
                throw Error(r(190))
        }
        if (n.tag !== 3)
            throw Error(r(188));
        return n.stateNode.current === n ? t : e
    }
    function p(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = p(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var S = Object.assign
      , b = Symbol.for("react.element")
      , A = Symbol.for("react.transitional.element")
      , N = Symbol.for("react.portal")
      , _ = Symbol.for("react.fragment")
      , H = Symbol.for("react.strict_mode")
      , X = Symbol.for("react.profiler")
      , G = Symbol.for("react.provider")
      , P = Symbol.for("react.consumer")
      , Y = Symbol.for("react.context")
      , it = Symbol.for("react.forward_ref")
      , B = Symbol.for("react.suspense")
      , F = Symbol.for("react.suspense_list")
      , lt = Symbol.for("react.memo")
      , W = Symbol.for("react.lazy")
      , St = Symbol.for("react.activity")
      , Vt = Symbol.for("react.memo_cache_sentinel")
      , It = Symbol.iterator;
    function Yt(t) {
        return t === null || typeof t != "object" ? null : (t = It && t[It] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Pe = Symbol.for("react.client.reference");
    function Le(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Pe ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case _:
            return "Fragment";
        case X:
            return "Profiler";
        case H:
            return "StrictMode";
        case B:
            return "Suspense";
        case F:
            return "SuspenseList";
        case St:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case N:
                return "Portal";
            case Y:
                return (t.displayName || "Context") + ".Provider";
            case P:
                return (t._context.displayName || "Context") + ".Consumer";
            case it:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case lt:
                return e = t.displayName || null,
                e !== null ? e : Le(t.type) || "Memo";
            case W:
                e = t._payload,
                t = t._init;
                try {
                    return Le(t(e))
                } catch {}
            }
        return null
    }
    var Pt = Array.isArray
      , w = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , K = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , pt = []
      , T = -1;
    function U(t) {
        return {
            current: t
        }
    }
    function Q(t) {
        0 > T || (t.current = pt[T],
        pt[T] = null,
        T--)
    }
    function k(t, e) {
        T++,
        pt[T] = t.current,
        t.current = e
    }
    var $ = U(null)
      , ht = U(null)
      , at = U(null)
      , de = U(null);
    function Et(t, e) {
        switch (k(at, e),
        k(ht, t),
        k($, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? fm(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = fm(e),
                t = dm(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        Q($),
        k($, t)
    }
    function hn() {
        Q($),
        Q(ht),
        Q(at)
    }
    function ao(t) {
        t.memoizedState !== null && k(de, t);
        var e = $.current
          , n = dm(e, t.type);
        e !== n && (k(ht, t),
        k($, n))
    }
    function Es(t) {
        ht.current === t && (Q($),
        Q(ht)),
        de.current === t && (Q(de),
        es._currentValue = K)
    }
    var so = Object.prototype.hasOwnProperty
      , lo = i.unstable_scheduleCallback
      , oo = i.unstable_cancelCallback
      , Z0 = i.unstable_shouldYield
      , K0 = i.unstable_requestPaint
      , He = i.unstable_now
      , P0 = i.unstable_getCurrentPriorityLevel
      , kc = i.unstable_ImmediatePriority
      , Qc = i.unstable_UserBlockingPriority
      , Ds = i.unstable_NormalPriority
      , J0 = i.unstable_LowPriority
      , Zc = i.unstable_IdlePriority
      , F0 = i.log
      , W0 = i.unstable_setDisableYieldValue
      , ua = null
      , he = null;
    function mn(t) {
        if (typeof F0 == "function" && W0(t),
        he && typeof he.setStrictMode == "function")
            try {
                he.setStrictMode(ua, t)
            } catch {}
    }
    var me = Math.clz32 ? Math.clz32 : tg
      , $0 = Math.log
      , I0 = Math.LN2;
    function tg(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - ($0(t) / I0 | 0) | 0
    }
    var Ns = 256
      , Cs = 4194304;
    function kn(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
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
            return 128;
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
            return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
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
            return t
        }
    }
    function Rs(t, e, n) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var l = 0
          , u = t.suspendedLanes
          , h = t.pingedLanes;
        t = t.warmLanes;
        var v = a & 134217727;
        return v !== 0 ? (a = v & ~u,
        a !== 0 ? l = kn(a) : (h &= v,
        h !== 0 ? l = kn(h) : n || (n = v & ~t,
        n !== 0 && (l = kn(n))))) : (v = a & ~u,
        v !== 0 ? l = kn(v) : h !== 0 ? l = kn(h) : n || (n = a & ~t,
        n !== 0 && (l = kn(n)))),
        l === 0 ? 0 : e !== 0 && e !== l && (e & u) === 0 && (u = l & -l,
        n = e & -e,
        u >= n || u === 32 && (n & 4194048) !== 0) ? e : l
    }
    function ca(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function eg(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
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
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Kc() {
        var t = Ns;
        return Ns <<= 1,
        (Ns & 4194048) === 0 && (Ns = 256),
        t
    }
    function Pc() {
        var t = Cs;
        return Cs <<= 1,
        (Cs & 62914560) === 0 && (Cs = 4194304),
        t
    }
    function ro(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function fa(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function ng(t, e, n, a, l, u) {
        var h = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , x = t.expirationTimes
          , D = t.hiddenUpdates;
        for (n = h & ~n; 0 < n; ) {
            var O = 31 - me(n)
              , V = 1 << O;
            v[O] = 0,
            x[O] = -1;
            var C = D[O];
            if (C !== null)
                for (D[O] = null,
                O = 0; O < C.length; O++) {
                    var R = C[O];
                    R !== null && (R.lane &= -536870913)
                }
            n &= ~V
        }
        a !== 0 && Jc(t, a, 0),
        u !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e))
    }
    function Jc(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var a = 31 - me(e);
        t.entangledLanes |= e,
        t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 4194090
    }
    function Fc(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var a = 31 - me(n)
              , l = 1 << a;
            l & e | t[a] & e && (t[a] |= e),
            n &= ~l
        }
    }
    function uo(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
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
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function co(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Wc() {
        var t = q.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Om(t.type))
    }
    function ig(t, e) {
        var n = q.p;
        try {
            return q.p = t,
            e()
        } finally {
            q.p = n
        }
    }
    var pn = Math.random().toString(36).slice(2)
      , te = "__reactFiber$" + pn
      , le = "__reactProps$" + pn
      , mi = "__reactContainer$" + pn
      , fo = "__reactEvents$" + pn
      , ag = "__reactListeners$" + pn
      , sg = "__reactHandles$" + pn
      , $c = "__reactResources$" + pn
      , da = "__reactMarker$" + pn;
    function ho(t) {
        delete t[te],
        delete t[le],
        delete t[fo],
        delete t[ag],
        delete t[sg]
    }
    function pi(t) {
        var e = t[te];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[mi] || n[te]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = ym(t); t !== null; ) {
                        if (n = t[te])
                            return n;
                        t = ym(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function yi(t) {
        if (t = t[te] || t[mi]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function ha(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(r(33))
    }
    function gi(t) {
        var e = t[$c];
        return e || (e = t[$c] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function kt(t) {
        t[da] = !0
    }
    var Ic = new Set
      , tf = {};
    function Qn(t, e) {
        vi(t, e),
        vi(t + "Capture", e)
    }
    function vi(t, e) {
        for (tf[t] = e,
        t = 0; t < e.length; t++)
            Ic.add(e[t])
    }
    var lg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , ef = {}
      , nf = {};
    function og(t) {
        return so.call(nf, t) ? !0 : so.call(ef, t) ? !1 : lg.test(t) ? nf[t] = !0 : (ef[t] = !0,
        !1)
    }
    function Os(t, e, n) {
        if (og(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var a = e.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function ws(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function Je(t, e, n, a) {
        if (a === null)
            t.removeAttribute(n);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + a)
        }
    }
    var mo, af;
    function Si(t) {
        if (mo === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                mo = e && e[1] || "",
                af = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + mo + t + af
    }
    var po = !1;
    function yo(t, e) {
        if (!t || po)
            return "";
        po = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var V = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(V.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(V, [])
                                } catch (R) {
                                    var C = R
                                }
                                Reflect.construct(t, [], V)
                            } else {
                                try {
                                    V.call()
                                } catch (R) {
                                    C = R
                                }
                                t.call(V.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (R) {
                                C = R
                            }
                            (V = t()) && typeof V.catch == "function" && V.catch(function() {})
                        }
                    } catch (R) {
                        if (R && C && typeof R.stack == "string")
                            return [R.stack, C.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            l && l.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , h = u[0]
              , v = u[1];
            if (h && v) {
                var x = h.split(`
`)
                  , D = v.split(`
`);
                for (l = a = 0; a < x.length && !x[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; l < D.length && !D[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                if (a === x.length || l === D.length)
                    for (a = x.length - 1,
                    l = D.length - 1; 1 <= a && 0 <= l && x[a] !== D[l]; )
                        l--;
                for (; 1 <= a && 0 <= l; a--,
                l--)
                    if (x[a] !== D[l]) {
                        if (a !== 1 || l !== 1)
                            do
                                if (a--,
                                l--,
                                0 > l || x[a] !== D[l]) {
                                    var O = `
` + x[a].replace(" at new ", " at ");
                                    return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)),
                                    O
                                }
                            while (1 <= a && 0 <= l);
                        break
                    }
            }
        } finally {
            po = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Si(n) : ""
    }
    function rg(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Si(t.type);
        case 16:
            return Si("Lazy");
        case 13:
            return Si("Suspense");
        case 19:
            return Si("SuspenseList");
        case 0:
        case 15:
            return yo(t.type, !1);
        case 11:
            return yo(t.type.render, !1);
        case 1:
            return yo(t.type, !0);
        case 31:
            return Si("Activity");
        default:
            return ""
        }
    }
    function sf(t) {
        try {
            var e = "";
            do
                e += rg(t),
                t = t.return;
            while (t);
            return e
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }
    function Te(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function lf(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function ug(t) {
        var e = lf(t) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
          , a = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get
              , u = n.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(h) {
                    a = "" + h,
                    u.call(this, h)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(h) {
                    a = "" + h
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function zs(t) {
        t._valueTracker || (t._valueTracker = ug(t))
    }
    function of(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , a = "";
        return t && (a = lf(t) ? t.checked ? "true" : "false" : t.value),
        t = a,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function Vs(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var cg = /[\n"\\]/g;
    function Ae(t) {
        return t.replace(cg, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function go(t, e, n, a, l, u, h, v) {
        t.name = "",
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"),
        e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"),
        e != null ? vo(t, h, Te(e)) : n != null ? vo(t, h, Te(n)) : a != null && t.removeAttribute("value"),
        l == null && u != null && (t.defaultChecked = !!u),
        l != null && (t.checked = l && typeof l != "function" && typeof l != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Te(v) : t.removeAttribute("name")
    }
    function rf(t, e, n, a, l, u, h, v) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        e != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || e != null))
                return;
            n = n != null ? "" + Te(n) : "",
            e = e != null ? "" + Te(e) : n,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        a = a ?? l,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        t.checked = v ? t.checked : !!a,
        t.defaultChecked = !!a,
        h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h)
    }
    function vo(t, e, n) {
        e === "number" && Vs(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function bi(t, e, n, a) {
        if (t = t.options,
        e) {
            e = {};
            for (var l = 0; l < n.length; l++)
                e["$" + n[l]] = !0;
            for (n = 0; n < t.length; n++)
                l = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== l && (t[n].selected = l),
                l && a && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + Te(n),
            e = null,
            l = 0; l < t.length; l++) {
                if (t[l].value === n) {
                    t[l].selected = !0,
                    a && (t[l].defaultSelected = !0);
                    return
                }
                e !== null || t[l].disabled || (e = t[l])
            }
            e !== null && (e.selected = !0)
        }
    }
    function uf(t, e, n) {
        if (e != null && (e = "" + Te(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + Te(n) : ""
    }
    function cf(t, e, n, a) {
        if (e == null) {
            if (a != null) {
                if (n != null)
                    throw Error(r(92));
                if (Pt(a)) {
                    if (1 < a.length)
                        throw Error(r(93));
                    a = a[0]
                }
                n = a
            }
            n == null && (n = ""),
            e = n
        }
        n = Te(e),
        t.defaultValue = n,
        a = t.textContent,
        a === n && a !== "" && a !== null && (t.value = a)
    }
    function xi(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var fg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function ff(t, e, n) {
        var a = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || fg.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function df(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(r(62));
        if (t = t.style,
        n != null) {
            for (var a in n)
                !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var l in e)
                a = e[l],
                e.hasOwnProperty(l) && n[l] !== a && ff(t, l, a)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && ff(t, u, e[u])
    }
    function So(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
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
            return !0
        }
    }
    var dg = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , hg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Us(t) {
        return hg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var bo = null;
    function xo(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Ti = null
      , Ai = null;
    function hf(t) {
        var e = yi(t);
        if (e && (t = e.stateNode)) {
            var n = t[le] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (go(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Ae("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var a = n[e];
                        if (a !== t && a.form === t.form) {
                            var l = a[le] || null;
                            if (!l)
                                throw Error(r(90));
                            go(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        a = n[e],
                        a.form === t.form && of(a)
                }
                break t;
            case "textarea":
                uf(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && bi(t, !!n.multiple, e, !1)
            }
        }
    }
    var To = !1;
    function mf(t, e, n) {
        if (To)
            return t(e, n);
        To = !0;
        try {
            var a = t(e);
            return a
        } finally {
            if (To = !1,
            (Ti !== null || Ai !== null) && (bl(),
            Ti && (e = Ti,
            t = Ai,
            Ai = Ti = null,
            hf(e),
            t)))
                for (e = 0; e < t.length; e++)
                    hf(t[e])
        }
    }
    function ma(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var a = n[le] || null;
        if (a === null)
            return null;
        n = a[e];
        t: switch (e) {
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
            (a = !a.disabled) || (t = t.type,
            a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !a;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(r(231, e, typeof n));
        return n
    }
    var Fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Ao = !1;
    if (Fe)
        try {
            var pa = {};
            Object.defineProperty(pa, "passive", {
                get: function() {
                    Ao = !0
                }
            }),
            window.addEventListener("test", pa, pa),
            window.removeEventListener("test", pa, pa)
        } catch {
            Ao = !1
        }
    var yn = null
      , jo = null
      , _s = null;
    function pf() {
        if (_s)
            return _s;
        var t, e = jo, n = e.length, a, l = "value"in yn ? yn.value : yn.textContent, u = l.length;
        for (t = 0; t < n && e[t] === l[t]; t++)
            ;
        var h = n - t;
        for (a = 1; a <= h && e[n - a] === l[u - a]; a++)
            ;
        return _s = l.slice(t, 1 < a ? 1 - a : void 0)
    }
    function Bs(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Ls() {
        return !0
    }
    function yf() {
        return !1
    }
    function oe(t) {
        function e(n, a, l, u, h) {
            this._reactName = n,
            this._targetInst = l,
            this.type = a,
            this.nativeEvent = u,
            this.target = h,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (n = t[v],
                this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ls : yf,
            this.isPropagationStopped = yf,
            this
        }
        return S(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Ls)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Ls)
            },
            persist: function() {},
            isPersistent: Ls
        }),
        e
    }
    var Zn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Hs = oe(Zn), ya = S({}, Zn, {
        view: 0,
        detail: 0
    }), mg = oe(ya), Mo, Eo, ga, qs = S({}, ya, {
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
        getModifierState: No,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== ga && (ga && t.type === "mousemove" ? (Mo = t.screenX - ga.screenX,
            Eo = t.screenY - ga.screenY) : Eo = Mo = 0,
            ga = t),
            Mo)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Eo
        }
    }), gf = oe(qs), pg = S({}, qs, {
        dataTransfer: 0
    }), yg = oe(pg), gg = S({}, ya, {
        relatedTarget: 0
    }), Do = oe(gg), vg = S({}, Zn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Sg = oe(vg), bg = S({}, Zn, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), xg = oe(bg), Tg = S({}, Zn, {
        data: 0
    }), vf = oe(Tg), Ag = {
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
        MozPrintableKey: "Unidentified"
    }, jg = {
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
        224: "Meta"
    }, Mg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Eg(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = Mg[t]) ? !!e[t] : !1
    }
    function No() {
        return Eg
    }
    var Dg = S({}, ya, {
        key: function(t) {
            if (t.key) {
                var e = Ag[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = Bs(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? jg[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: No,
        charCode: function(t) {
            return t.type === "keypress" ? Bs(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Bs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Ng = oe(Dg)
      , Cg = S({}, qs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Sf = oe(Cg)
      , Rg = S({}, ya, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: No
    })
      , Og = oe(Rg)
      , wg = S({}, Zn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , zg = oe(wg)
      , Vg = S({}, qs, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Ug = oe(Vg)
      , _g = S({}, Zn, {
        newState: 0,
        oldState: 0
    })
      , Bg = oe(_g)
      , Lg = [9, 13, 27, 32]
      , Co = Fe && "CompositionEvent"in window
      , va = null;
    Fe && "documentMode"in document && (va = document.documentMode);
    var Hg = Fe && "TextEvent"in window && !va
      , bf = Fe && (!Co || va && 8 < va && 11 >= va)
      , xf = " "
      , Tf = !1;
    function Af(t, e) {
        switch (t) {
        case "keyup":
            return Lg.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function jf(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var ji = !1;
    function qg(t, e) {
        switch (t) {
        case "compositionend":
            return jf(e);
        case "keypress":
            return e.which !== 32 ? null : (Tf = !0,
            xf);
        case "textInput":
            return t = e.data,
            t === xf && Tf ? null : t;
        default:
            return null
        }
    }
    function Yg(t, e) {
        if (ji)
            return t === "compositionend" || !Co && Af(t, e) ? (t = pf(),
            _s = jo = yn = null,
            ji = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return bf && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var Gg = {
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
        week: !0
    };
    function Mf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Gg[t.type] : e === "textarea"
    }
    function Ef(t, e, n, a) {
        Ti ? Ai ? Ai.push(a) : Ai = [a] : Ti = a,
        e = El(e, "onChange"),
        0 < e.length && (n = new Hs("onChange","change",null,n,a),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var Sa = null
      , ba = null;
    function Xg(t) {
        lm(t, 0)
    }
    function Ys(t) {
        var e = ha(t);
        if (of(e))
            return t
    }
    function Df(t, e) {
        if (t === "change")
            return e
    }
    var Nf = !1;
    if (Fe) {
        var Ro;
        if (Fe) {
            var Oo = "oninput"in document;
            if (!Oo) {
                var Cf = document.createElement("div");
                Cf.setAttribute("oninput", "return;"),
                Oo = typeof Cf.oninput == "function"
            }
            Ro = Oo
        } else
            Ro = !1;
        Nf = Ro && (!document.documentMode || 9 < document.documentMode)
    }
    function Rf() {
        Sa && (Sa.detachEvent("onpropertychange", Of),
        ba = Sa = null)
    }
    function Of(t) {
        if (t.propertyName === "value" && Ys(ba)) {
            var e = [];
            Ef(e, ba, t, xo(t)),
            mf(Xg, e)
        }
    }
    function kg(t, e, n) {
        t === "focusin" ? (Rf(),
        Sa = e,
        ba = n,
        Sa.attachEvent("onpropertychange", Of)) : t === "focusout" && Rf()
    }
    function Qg(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Ys(ba)
    }
    function Zg(t, e) {
        if (t === "click")
            return Ys(e)
    }
    function Kg(t, e) {
        if (t === "input" || t === "change")
            return Ys(e)
    }
    function Pg(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var pe = typeof Object.is == "function" ? Object.is : Pg;
    function xa(t, e) {
        if (pe(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , a = Object.keys(e);
        if (n.length !== a.length)
            return !1;
        for (a = 0; a < n.length; a++) {
            var l = n[a];
            if (!so.call(e, l) || !pe(t[l], e[l]))
                return !1
        }
        return !0
    }
    function wf(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function zf(t, e) {
        var n = wf(t);
        t = 0;
        for (var a; n; ) {
            if (n.nodeType === 3) {
                if (a = t + n.textContent.length,
                t <= e && a >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = a
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = wf(n)
        }
    }
    function Vf(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Vf(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Uf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Vs(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = Vs(t.document)
        }
        return e
    }
    function wo(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var Jg = Fe && "documentMode"in document && 11 >= document.documentMode
      , Mi = null
      , zo = null
      , Ta = null
      , Vo = !1;
    function _f(t, e, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Vo || Mi == null || Mi !== Vs(a) || (a = Mi,
        "selectionStart"in a && wo(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Ta && xa(Ta, a) || (Ta = a,
        a = El(zo, "onSelect"),
        0 < a.length && (e = new Hs("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: a
        }),
        e.target = Mi)))
    }
    function Kn(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var Ei = {
        animationend: Kn("Animation", "AnimationEnd"),
        animationiteration: Kn("Animation", "AnimationIteration"),
        animationstart: Kn("Animation", "AnimationStart"),
        transitionrun: Kn("Transition", "TransitionRun"),
        transitionstart: Kn("Transition", "TransitionStart"),
        transitioncancel: Kn("Transition", "TransitionCancel"),
        transitionend: Kn("Transition", "TransitionEnd")
    }
      , Uo = {}
      , Bf = {};
    Fe && (Bf = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ei.animationend.animation,
    delete Ei.animationiteration.animation,
    delete Ei.animationstart.animation),
    "TransitionEvent"in window || delete Ei.transitionend.transition);
    function Pn(t) {
        if (Uo[t])
            return Uo[t];
        if (!Ei[t])
            return t;
        var e = Ei[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in Bf)
                return Uo[t] = e[n];
        return t
    }
    var Lf = Pn("animationend")
      , Hf = Pn("animationiteration")
      , qf = Pn("animationstart")
      , Fg = Pn("transitionrun")
      , Wg = Pn("transitionstart")
      , $g = Pn("transitioncancel")
      , Yf = Pn("transitionend")
      , Gf = new Map
      , _o = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    _o.push("scrollEnd");
    function Ve(t, e) {
        Gf.set(t, e),
        Qn(e, [t])
    }
    var Xf = new WeakMap;
    function je(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = Xf.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: sf(e)
            },
            Xf.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: sf(e)
        }
    }
    var Me = []
      , Di = 0
      , Bo = 0;
    function Gs() {
        for (var t = Di, e = Bo = Di = 0; e < t; ) {
            var n = Me[e];
            Me[e++] = null;
            var a = Me[e];
            Me[e++] = null;
            var l = Me[e];
            Me[e++] = null;
            var u = Me[e];
            if (Me[e++] = null,
            a !== null && l !== null) {
                var h = a.pending;
                h === null ? l.next = l : (l.next = h.next,
                h.next = l),
                a.pending = l
            }
            u !== 0 && kf(n, l, u)
        }
    }
    function Xs(t, e, n, a) {
        Me[Di++] = t,
        Me[Di++] = e,
        Me[Di++] = n,
        Me[Di++] = a,
        Bo |= a,
        t.lanes |= a,
        t = t.alternate,
        t !== null && (t.lanes |= a)
    }
    function Lo(t, e, n, a) {
        return Xs(t, e, n, a),
        ks(t)
    }
    function Ni(t, e) {
        return Xs(t, null, null, e),
        ks(t)
    }
    function kf(t, e, n) {
        t.lanes |= n;
        var a = t.alternate;
        a !== null && (a.lanes |= n);
        for (var l = !1, u = t.return; u !== null; )
            u.childLanes |= n,
            a = u.alternate,
            a !== null && (a.childLanes |= n),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (l = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        l && e !== null && (l = 31 - me(n),
        t = u.hiddenUpdates,
        a = t[l],
        a === null ? t[l] = [e] : a.push(e),
        e.lane = n | 536870912),
        u) : null
    }
    function ks(t) {
        if (50 < Ka)
            throw Ka = 0,
            kr = null,
            Error(r(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Ci = {};
    function Ig(t, e, n, a) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function ye(t, e, n, a) {
        return new Ig(t,e,n,a)
    }
    function Ho(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function We(t, e) {
        var n = t.alternate;
        return n === null ? (n = ye(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function Qf(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Qs(t, e, n, a, l, u) {
        var h = 0;
        if (a = t,
        typeof t == "function")
            Ho(t) && (h = 1);
        else if (typeof t == "string")
            h = e1(t, n, $.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case St:
                return t = ye(31, n, e, l),
                t.elementType = St,
                t.lanes = u,
                t;
            case _:
                return Jn(n.children, l, u, e);
            case H:
                h = 8,
                l |= 24;
                break;
            case X:
                return t = ye(12, n, e, l | 2),
                t.elementType = X,
                t.lanes = u,
                t;
            case B:
                return t = ye(13, n, e, l),
                t.elementType = B,
                t.lanes = u,
                t;
            case F:
                return t = ye(19, n, e, l),
                t.elementType = F,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case G:
                    case Y:
                        h = 10;
                        break t;
                    case P:
                        h = 9;
                        break t;
                    case it:
                        h = 11;
                        break t;
                    case lt:
                        h = 14;
                        break t;
                    case W:
                        h = 16,
                        a = null;
                        break t
                    }
                h = 29,
                n = Error(r(130, t === null ? "null" : typeof t, "")),
                a = null
            }
        return e = ye(h, n, e, l),
        e.elementType = t,
        e.type = a,
        e.lanes = u,
        e
    }
    function Jn(t, e, n, a) {
        return t = ye(7, t, a, e),
        t.lanes = n,
        t
    }
    function qo(t, e, n) {
        return t = ye(6, t, null, e),
        t.lanes = n,
        t
    }
    function Yo(t, e, n) {
        return e = ye(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var Ri = []
      , Oi = 0
      , Zs = null
      , Ks = 0
      , Ee = []
      , De = 0
      , Fn = null
      , $e = 1
      , Ie = "";
    function Wn(t, e) {
        Ri[Oi++] = Ks,
        Ri[Oi++] = Zs,
        Zs = t,
        Ks = e
    }
    function Zf(t, e, n) {
        Ee[De++] = $e,
        Ee[De++] = Ie,
        Ee[De++] = Fn,
        Fn = t;
        var a = $e;
        t = Ie;
        var l = 32 - me(a) - 1;
        a &= ~(1 << l),
        n += 1;
        var u = 32 - me(e) + l;
        if (30 < u) {
            var h = l - l % 5;
            u = (a & (1 << h) - 1).toString(32),
            a >>= h,
            l -= h,
            $e = 1 << 32 - me(e) + l | n << l | a,
            Ie = u + t
        } else
            $e = 1 << u | n << l | a,
            Ie = t
    }
    function Go(t) {
        t.return !== null && (Wn(t, 1),
        Zf(t, 1, 0))
    }
    function Xo(t) {
        for (; t === Zs; )
            Zs = Ri[--Oi],
            Ri[Oi] = null,
            Ks = Ri[--Oi],
            Ri[Oi] = null;
        for (; t === Fn; )
            Fn = Ee[--De],
            Ee[De] = null,
            Ie = Ee[--De],
            Ee[De] = null,
            $e = Ee[--De],
            Ee[De] = null
    }
    var ae = null
      , Ot = null
      , yt = !1
      , $n = null
      , qe = !1
      , ko = Error(r(519));
    function In(t) {
        var e = Error(r(418, ""));
        throw Ma(je(e, t)),
        ko
    }
    function Kf(t) {
        var e = t.stateNode
          , n = t.type
          , a = t.memoizedProps;
        switch (e[te] = t,
        e[le] = a,
        n) {
        case "dialog":
            ct("cancel", e),
            ct("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            ct("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Ja.length; n++)
                ct(Ja[n], e);
            break;
        case "source":
            ct("error", e);
            break;
        case "img":
        case "image":
        case "link":
            ct("error", e),
            ct("load", e);
            break;
        case "details":
            ct("toggle", e);
            break;
        case "input":
            ct("invalid", e),
            rf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
            zs(e);
            break;
        case "select":
            ct("invalid", e);
            break;
        case "textarea":
            ct("invalid", e),
            cf(e, a.value, a.defaultValue, a.children),
            zs(e)
        }
        n = a.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || cm(e.textContent, n) ? (a.popover != null && (ct("beforetoggle", e),
        ct("toggle", e)),
        a.onScroll != null && ct("scroll", e),
        a.onScrollEnd != null && ct("scrollend", e),
        a.onClick != null && (e.onclick = Dl),
        e = !0) : e = !1,
        e || In(t)
    }
    function Pf(t) {
        for (ae = t.return; ae; )
            switch (ae.tag) {
            case 5:
            case 13:
                qe = !1;
                return;
            case 27:
            case 3:
                qe = !0;
                return;
            default:
                ae = ae.return
            }
    }
    function Aa(t) {
        if (t !== ae)
            return !1;
        if (!yt)
            return Pf(t),
            yt = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || lu(t.type, t.memoizedProps)),
        n = !n),
        n && Ot && In(t),
        Pf(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(r(317));
            t: {
                for (t = t.nextSibling,
                e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (n = t.data,
                        n === "/$") {
                            if (e === 0) {
                                Ot = _e(t.nextSibling);
                                break t
                            }
                            e--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || e++;
                    t = t.nextSibling
                }
                Ot = null
            }
        } else
            e === 27 ? (e = Ot,
            wn(t.type) ? (t = cu,
            cu = null,
            Ot = t) : Ot = e) : Ot = ae ? _e(t.stateNode.nextSibling) : null;
        return !0
    }
    function ja() {
        Ot = ae = null,
        yt = !1
    }
    function Jf() {
        var t = $n;
        return t !== null && (ce === null ? ce = t : ce.push.apply(ce, t),
        $n = null),
        t
    }
    function Ma(t) {
        $n === null ? $n = [t] : $n.push(t)
    }
    var Qo = U(null)
      , ti = null
      , tn = null;
    function gn(t, e, n) {
        k(Qo, e._currentValue),
        e._currentValue = n
    }
    function en(t) {
        t._currentValue = Qo.current,
        Q(Qo)
    }
    function Zo(t, e, n) {
        for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function Ko(t, e, n, a) {
        var l = t.child;
        for (l !== null && (l.return = t); l !== null; ) {
            var u = l.dependencies;
            if (u !== null) {
                var h = l.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var v = u;
                    u = l;
                    for (var x = 0; x < e.length; x++)
                        if (v.context === e[x]) {
                            u.lanes |= n,
                            v = u.alternate,
                            v !== null && (v.lanes |= n),
                            Zo(u.return, n, t),
                            a || (h = null);
                            break t
                        }
                    u = v.next
                }
            } else if (l.tag === 18) {
                if (h = l.return,
                h === null)
                    throw Error(r(341));
                h.lanes |= n,
                u = h.alternate,
                u !== null && (u.lanes |= n),
                Zo(h, n, t),
                h = null
            } else
                h = l.child;
            if (h !== null)
                h.return = l;
            else
                for (h = l; h !== null; ) {
                    if (h === t) {
                        h = null;
                        break
                    }
                    if (l = h.sibling,
                    l !== null) {
                        l.return = h.return,
                        h = l;
                        break
                    }
                    h = h.return
                }
            l = h
        }
    }
    function Ea(t, e, n, a) {
        t = null;
        for (var l = e, u = !1; l !== null; ) {
            if (!u) {
                if ((l.flags & 524288) !== 0)
                    u = !0;
                else if ((l.flags & 262144) !== 0)
                    break
            }
            if (l.tag === 10) {
                var h = l.alternate;
                if (h === null)
                    throw Error(r(387));
                if (h = h.memoizedProps,
                h !== null) {
                    var v = l.type;
                    pe(l.pendingProps.value, h.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (l === de.current) {
                if (h = l.alternate,
                h === null)
                    throw Error(r(387));
                h.memoizedState.memoizedState !== l.memoizedState.memoizedState && (t !== null ? t.push(es) : t = [es])
            }
            l = l.return
        }
        t !== null && Ko(e, t, n, a),
        e.flags |= 262144
    }
    function Ps(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!pe(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function ei(t) {
        ti = t,
        tn = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function ee(t) {
        return Ff(ti, t)
    }
    function Js(t, e) {
        return ti === null && ei(t),
        Ff(t, e)
    }
    function Ff(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        tn === null) {
            if (t === null)
                throw Error(r(308));
            tn = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            tn = tn.next = e;
        return n
    }
    var tv = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, a) {
                t.push(a)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , ev = i.unstable_scheduleCallback
      , nv = i.unstable_NormalPriority
      , Gt = {
        $$typeof: Y,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Po() {
        return {
            controller: new tv,
            data: new Map,
            refCount: 0
        }
    }
    function Da(t) {
        t.refCount--,
        t.refCount === 0 && ev(nv, function() {
            t.controller.abort()
        })
    }
    var Na = null
      , Jo = 0
      , wi = 0
      , zi = null;
    function iv(t, e) {
        if (Na === null) {
            var n = Na = [];
            Jo = 0,
            wi = Wr(),
            zi = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    n.push(a)
                }
            }
        }
        return Jo++,
        e.then(Wf, Wf),
        e
    }
    function Wf() {
        if (--Jo === 0 && Na !== null) {
            zi !== null && (zi.status = "fulfilled");
            var t = Na;
            Na = null,
            wi = 0,
            zi = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function av(t, e) {
        var n = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(l) {
                n.push(l)
            }
        };
        return t.then(function() {
            a.status = "fulfilled",
            a.value = e;
            for (var l = 0; l < n.length; l++)
                (0,
                n[l])(e)
        }, function(l) {
            for (a.status = "rejected",
            a.reason = l,
            l = 0; l < n.length; l++)
                (0,
                n[l])(void 0)
        }),
        a
    }
    var $f = w.S;
    w.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && iv(t, e),
        $f !== null && $f(t, e)
    }
    ;
    var ni = U(null);
    function Fo() {
        var t = ni.current;
        return t !== null ? t : jt.pooledCache
    }
    function Fs(t, e) {
        e === null ? k(ni, ni.current) : k(ni, e.pool)
    }
    function If() {
        var t = Fo();
        return t === null ? null : {
            parent: Gt._currentValue,
            pool: t
        }
    }
    var Ca = Error(r(460))
      , td = Error(r(474))
      , Ws = Error(r(542))
      , Wo = {
        then: function() {}
    };
    function ed(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function $s() {}
    function nd(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then($s, $s),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            ad(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then($s, $s);
            else {
                if (t = jt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(r(482));
                t = e,
                t.status = "pending",
                t.then(function(a) {
                    if (e.status === "pending") {
                        var l = e;
                        l.status = "fulfilled",
                        l.value = a
                    }
                }, function(a) {
                    if (e.status === "pending") {
                        var l = e;
                        l.status = "rejected",
                        l.reason = a
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                ad(t),
                t
            }
            throw Ra = e,
            Ca
        }
    }
    var Ra = null;
    function id() {
        if (Ra === null)
            throw Error(r(459));
        var t = Ra;
        return Ra = null,
        t
    }
    function ad(t) {
        if (t === Ca || t === Ws)
            throw Error(r(483))
    }
    var vn = !1;
    function $o(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Io(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Sn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function bn(t, e, n) {
        var a = t.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (gt & 2) !== 0) {
            var l = a.pending;
            return l === null ? e.next = e : (e.next = l.next,
            l.next = e),
            a.pending = e,
            e = ks(t),
            kf(t, null, n),
            e
        }
        return Xs(t, a, e, n),
        ks(t)
    }
    function Oa(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes,
            n |= a,
            e.lanes = n,
            Fc(t, n)
        }
    }
    function tr(t, e) {
        var n = t.updateQueue
          , a = t.alternate;
        if (a !== null && (a = a.updateQueue,
        n === a)) {
            var l = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var h = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? l = u = h : u = u.next = h,
                    n = n.next
                } while (n !== null);
                u === null ? l = u = e : u = u.next = e
            } else
                l = u = e;
            n = {
                baseState: a.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var er = !1;
    function wa() {
        if (er) {
            var t = zi;
            if (t !== null)
                throw t
        }
    }
    function za(t, e, n, a) {
        er = !1;
        var l = t.updateQueue;
        vn = !1;
        var u = l.firstBaseUpdate
          , h = l.lastBaseUpdate
          , v = l.shared.pending;
        if (v !== null) {
            l.shared.pending = null;
            var x = v
              , D = x.next;
            x.next = null,
            h === null ? u = D : h.next = D,
            h = x;
            var O = t.alternate;
            O !== null && (O = O.updateQueue,
            v = O.lastBaseUpdate,
            v !== h && (v === null ? O.firstBaseUpdate = D : v.next = D,
            O.lastBaseUpdate = x))
        }
        if (u !== null) {
            var V = l.baseState;
            h = 0,
            O = D = x = null,
            v = u;
            do {
                var C = v.lane & -536870913
                  , R = C !== v.lane;
                if (R ? (dt & C) === C : (a & C) === C) {
                    C !== 0 && C === wi && (er = !0),
                    O !== null && (O = O.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var et = t
                          , I = v;
                        C = e;
                        var Tt = n;
                        switch (I.tag) {
                        case 1:
                            if (et = I.payload,
                            typeof et == "function") {
                                V = et.call(Tt, V, C);
                                break t
                            }
                            V = et;
                            break t;
                        case 3:
                            et.flags = et.flags & -65537 | 128;
                        case 0:
                            if (et = I.payload,
                            C = typeof et == "function" ? et.call(Tt, V, C) : et,
                            C == null)
                                break t;
                            V = S({}, V, C);
                            break t;
                        case 2:
                            vn = !0
                        }
                    }
                    C = v.callback,
                    C !== null && (t.flags |= 64,
                    R && (t.flags |= 8192),
                    R = l.callbacks,
                    R === null ? l.callbacks = [C] : R.push(C))
                } else
                    R = {
                        lane: C,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    O === null ? (D = O = R,
                    x = V) : O = O.next = R,
                    h |= C;
                if (v = v.next,
                v === null) {
                    if (v = l.shared.pending,
                    v === null)
                        break;
                    R = v,
                    v = R.next,
                    R.next = null,
                    l.lastBaseUpdate = R,
                    l.shared.pending = null
                }
            } while (!0);
            O === null && (x = V),
            l.baseState = x,
            l.firstBaseUpdate = D,
            l.lastBaseUpdate = O,
            u === null && (l.shared.lanes = 0),
            Nn |= h,
            t.lanes = h,
            t.memoizedState = V
        }
    }
    function sd(t, e) {
        if (typeof t != "function")
            throw Error(r(191, t));
        t.call(e)
    }
    function ld(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                sd(n[t], e)
    }
    var Vi = U(null)
      , Is = U(0);
    function od(t, e) {
        t = un,
        k(Is, t),
        k(Vi, e),
        un = t | e.baseLanes
    }
    function nr() {
        k(Is, un),
        k(Vi, Vi.current)
    }
    function ir() {
        un = Is.current,
        Q(Vi),
        Q(Is)
    }
    var xn = 0
      , ot = null
      , bt = null
      , Lt = null
      , tl = !1
      , Ui = !1
      , ii = !1
      , el = 0
      , Va = 0
      , _i = null
      , sv = 0;
    function Ut() {
        throw Error(r(321))
    }
    function ar(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!pe(t[n], e[n]))
                return !1;
        return !0
    }
    function sr(t, e, n, a, l, u) {
        return xn = u,
        ot = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        w.H = t === null || t.memoizedState === null ? kd : Qd,
        ii = !1,
        u = n(a, l),
        ii = !1,
        Ui && (u = ud(e, n, a, l)),
        rd(t),
        u
    }
    function rd(t) {
        w.H = ol;
        var e = bt !== null && bt.next !== null;
        if (xn = 0,
        Lt = bt = ot = null,
        tl = !1,
        Va = 0,
        _i = null,
        e)
            throw Error(r(300));
        t === null || Qt || (t = t.dependencies,
        t !== null && Ps(t) && (Qt = !0))
    }
    function ud(t, e, n, a) {
        ot = t;
        var l = 0;
        do {
            if (Ui && (_i = null),
            Va = 0,
            Ui = !1,
            25 <= l)
                throw Error(r(301));
            if (l += 1,
            Lt = bt = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            w.H = dv,
            u = e(n, a)
        } while (Ui);
        return u
    }
    function lv() {
        var t = w.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? Ua(e) : e,
        t = t.useState()[0],
        (bt !== null ? bt.memoizedState : null) !== t && (ot.flags |= 1024),
        e
    }
    function lr() {
        var t = el !== 0;
        return el = 0,
        t
    }
    function or(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function rr(t) {
        if (tl) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            tl = !1
        }
        xn = 0,
        Lt = bt = ot = null,
        Ui = !1,
        Va = el = 0,
        _i = null
    }
    function re() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Lt === null ? ot.memoizedState = Lt = t : Lt = Lt.next = t,
        Lt
    }
    function Ht() {
        if (bt === null) {
            var t = ot.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = bt.next;
        var e = Lt === null ? ot.memoizedState : Lt.next;
        if (e !== null)
            Lt = e,
            bt = t;
        else {
            if (t === null)
                throw ot.alternate === null ? Error(r(467)) : Error(r(310));
            bt = t,
            t = {
                memoizedState: bt.memoizedState,
                baseState: bt.baseState,
                baseQueue: bt.baseQueue,
                queue: bt.queue,
                next: null
            },
            Lt === null ? ot.memoizedState = Lt = t : Lt = Lt.next = t
        }
        return Lt
    }
    function ur() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ua(t) {
        var e = Va;
        return Va += 1,
        _i === null && (_i = []),
        t = nd(_i, t, e),
        e = ot,
        (Lt === null ? e.memoizedState : Lt.next) === null && (e = e.alternate,
        w.H = e === null || e.memoizedState === null ? kd : Qd),
        t
    }
    function nl(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return Ua(t);
            if (t.$$typeof === Y)
                return ee(t)
        }
        throw Error(r(438, String(t)))
    }
    function cr(t) {
        var e = null
          , n = ot.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var a = ot.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (e = {
                data: a.data.map(function(l) {
                    return l.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = ur(),
        ot.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            a = 0; a < t; a++)
                n[a] = Vt;
        return e.index++,
        n
    }
    function nn(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function il(t) {
        var e = Ht();
        return fr(e, bt, t)
    }
    function fr(t, e, n) {
        var a = t.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = n;
        var l = t.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (l !== null) {
                var h = l.next;
                l.next = u.next,
                u.next = h
            }
            e.baseQueue = l = u,
            a.pending = null
        }
        if (u = t.baseState,
        l === null)
            t.memoizedState = u;
        else {
            e = l.next;
            var v = h = null
              , x = null
              , D = e
              , O = !1;
            do {
                var V = D.lane & -536870913;
                if (V !== D.lane ? (dt & V) === V : (xn & V) === V) {
                    var C = D.revertLane;
                    if (C === 0)
                        x !== null && (x = x.next = {
                            lane: 0,
                            revertLane: 0,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        }),
                        V === wi && (O = !0);
                    else if ((xn & C) === C) {
                        D = D.next,
                        C === wi && (O = !0);
                        continue
                    } else
                        V = {
                            lane: 0,
                            revertLane: D.revertLane,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        },
                        x === null ? (v = x = V,
                        h = u) : x = x.next = V,
                        ot.lanes |= C,
                        Nn |= C;
                    V = D.action,
                    ii && n(u, V),
                    u = D.hasEagerState ? D.eagerState : n(u, V)
                } else
                    C = {
                        lane: V,
                        revertLane: D.revertLane,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    },
                    x === null ? (v = x = C,
                    h = u) : x = x.next = C,
                    ot.lanes |= V,
                    Nn |= V;
                D = D.next
            } while (D !== null && D !== e);
            if (x === null ? h = u : x.next = v,
            !pe(u, t.memoizedState) && (Qt = !0,
            O && (n = zi,
            n !== null)))
                throw n;
            t.memoizedState = u,
            t.baseState = h,
            t.baseQueue = x,
            a.lastRenderedState = u
        }
        return l === null && (a.lanes = 0),
        [t.memoizedState, a.dispatch]
    }
    function dr(t) {
        var e = Ht()
          , n = e.queue;
        if (n === null)
            throw Error(r(311));
        n.lastRenderedReducer = t;
        var a = n.dispatch
          , l = n.pending
          , u = e.memoizedState;
        if (l !== null) {
            n.pending = null;
            var h = l = l.next;
            do
                u = t(u, h.action),
                h = h.next;
            while (h !== l);
            pe(u, e.memoizedState) || (Qt = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            n.lastRenderedState = u
        }
        return [u, a]
    }
    function cd(t, e, n) {
        var a = ot
          , l = Ht()
          , u = yt;
        if (u) {
            if (n === void 0)
                throw Error(r(407));
            n = n()
        } else
            n = e();
        var h = !pe((bt || l).memoizedState, n);
        h && (l.memoizedState = n,
        Qt = !0),
        l = l.queue;
        var v = hd.bind(null, a, l, t);
        if (_a(2048, 8, v, [t]),
        l.getSnapshot !== e || h || Lt !== null && Lt.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Bi(9, al(), dd.bind(null, a, l, n, e), null),
            jt === null)
                throw Error(r(349));
            u || (xn & 124) !== 0 || fd(a, e, n)
        }
        return n
    }
    function fd(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = ot.updateQueue,
        e === null ? (e = ur(),
        ot.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function dd(t, e, n, a) {
        e.value = n,
        e.getSnapshot = a,
        md(e) && pd(t)
    }
    function hd(t, e, n) {
        return n(function() {
            md(e) && pd(t)
        })
    }
    function md(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !pe(t, n)
        } catch {
            return !0
        }
    }
    function pd(t) {
        var e = Ni(t, 2);
        e !== null && xe(e, t, 2)
    }
    function hr(t) {
        var e = re();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            ii) {
                mn(!0);
                try {
                    n()
                } finally {
                    mn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: nn,
            lastRenderedState: t
        },
        e
    }
    function yd(t, e, n, a) {
        return t.baseState = n,
        fr(t, bt, typeof a == "function" ? a : nn)
    }
    function ov(t, e, n, a, l) {
        if (ll(t))
            throw Error(r(485));
        if (t = e.action,
        t !== null) {
            var u = {
                payload: l,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    u.listeners.push(h)
                }
            };
            w.T !== null ? n(!0) : u.isTransition = !1,
            a(u),
            n = e.pending,
            n === null ? (u.next = e.pending = u,
            gd(e, u)) : (u.next = n.next,
            e.pending = n.next = u)
        }
    }
    function gd(t, e) {
        var n = e.action
          , a = e.payload
          , l = t.state;
        if (e.isTransition) {
            var u = w.T
              , h = {};
            w.T = h;
            try {
                var v = n(l, a)
                  , x = w.S;
                x !== null && x(h, v),
                vd(t, e, v)
            } catch (D) {
                mr(t, e, D)
            } finally {
                w.T = u
            }
        } else
            try {
                u = n(l, a),
                vd(t, e, u)
            } catch (D) {
                mr(t, e, D)
            }
    }
    function vd(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            Sd(t, e, a)
        }, function(a) {
            return mr(t, e, a)
        }) : Sd(t, e, n)
    }
    function Sd(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        bd(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        gd(t, n)))
    }
    function mr(t, e, n) {
        var a = t.pending;
        if (t.pending = null,
        a !== null) {
            a = a.next;
            do
                e.status = "rejected",
                e.reason = n,
                bd(e),
                e = e.next;
            while (e !== a)
        }
        t.action = null
    }
    function bd(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function xd(t, e) {
        return e
    }
    function Td(t, e) {
        if (yt) {
            var n = jt.formState;
            if (n !== null) {
                t: {
                    var a = ot;
                    if (yt) {
                        if (Ot) {
                            e: {
                                for (var l = Ot, u = qe; l.nodeType !== 8; ) {
                                    if (!u) {
                                        l = null;
                                        break e
                                    }
                                    if (l = _e(l.nextSibling),
                                    l === null) {
                                        l = null;
                                        break e
                                    }
                                }
                                u = l.data,
                                l = u === "F!" || u === "F" ? l : null
                            }
                            if (l) {
                                Ot = _e(l.nextSibling),
                                a = l.data === "F!";
                                break t
                            }
                        }
                        In(a)
                    }
                    a = !1
                }
                a && (e = n[0])
            }
        }
        return n = re(),
        n.memoizedState = n.baseState = e,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: xd,
            lastRenderedState: e
        },
        n.queue = a,
        n = Yd.bind(null, ot, a),
        a.dispatch = n,
        a = hr(!1),
        u = Sr.bind(null, ot, !1, a.queue),
        a = re(),
        l = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        a.queue = l,
        n = ov.bind(null, ot, l, u, n),
        l.dispatch = n,
        a.memoizedState = t,
        [e, n, !1]
    }
    function Ad(t) {
        var e = Ht();
        return jd(e, bt, t)
    }
    function jd(t, e, n) {
        if (e = fr(t, e, xd)[0],
        t = il(nn)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var a = Ua(e)
            } catch (h) {
                throw h === Ca ? Ws : h
            }
        else
            a = e;
        e = Ht();
        var l = e.queue
          , u = l.dispatch;
        return n !== e.memoizedState && (ot.flags |= 2048,
        Bi(9, al(), rv.bind(null, l, n), null)),
        [a, u, t]
    }
    function rv(t, e) {
        t.action = e
    }
    function Md(t) {
        var e = Ht()
          , n = bt;
        if (n !== null)
            return jd(e, n, t);
        Ht(),
        e = e.memoizedState,
        n = Ht();
        var a = n.queue.dispatch;
        return n.memoizedState = t,
        [e, a, !1]
    }
    function Bi(t, e, n, a) {
        return t = {
            tag: t,
            create: n,
            deps: a,
            inst: e,
            next: null
        },
        e = ot.updateQueue,
        e === null && (e = ur(),
        ot.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (a = n.next,
        n.next = t,
        t.next = a,
        e.lastEffect = t),
        t
    }
    function al() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Ed() {
        return Ht().memoizedState
    }
    function sl(t, e, n, a) {
        var l = re();
        a = a === void 0 ? null : a,
        ot.flags |= t,
        l.memoizedState = Bi(1 | e, al(), n, a)
    }
    function _a(t, e, n, a) {
        var l = Ht();
        a = a === void 0 ? null : a;
        var u = l.memoizedState.inst;
        bt !== null && a !== null && ar(a, bt.memoizedState.deps) ? l.memoizedState = Bi(e, u, n, a) : (ot.flags |= t,
        l.memoizedState = Bi(1 | e, u, n, a))
    }
    function Dd(t, e) {
        sl(8390656, 8, t, e)
    }
    function Nd(t, e) {
        _a(2048, 8, t, e)
    }
    function Cd(t, e) {
        return _a(4, 2, t, e)
    }
    function Rd(t, e) {
        return _a(4, 4, t, e)
    }
    function Od(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function wd(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        _a(4, 4, Od.bind(null, e, t), n)
    }
    function pr() {}
    function zd(t, e) {
        var n = Ht();
        e = e === void 0 ? null : e;
        var a = n.memoizedState;
        return e !== null && ar(e, a[1]) ? a[0] : (n.memoizedState = [t, e],
        t)
    }
    function Vd(t, e) {
        var n = Ht();
        e = e === void 0 ? null : e;
        var a = n.memoizedState;
        if (e !== null && ar(e, a[1]))
            return a[0];
        if (a = t(),
        ii) {
            mn(!0);
            try {
                t()
            } finally {
                mn(!1)
            }
        }
        return n.memoizedState = [a, e],
        a
    }
    function yr(t, e, n) {
        return n === void 0 || (xn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Bh(),
        ot.lanes |= t,
        Nn |= t,
        n)
    }
    function Ud(t, e, n, a) {
        return pe(n, e) ? n : Vi.current !== null ? (t = yr(t, n, a),
        pe(t, e) || (Qt = !0),
        t) : (xn & 42) === 0 ? (Qt = !0,
        t.memoizedState = n) : (t = Bh(),
        ot.lanes |= t,
        Nn |= t,
        e)
    }
    function _d(t, e, n, a, l) {
        var u = q.p;
        q.p = u !== 0 && 8 > u ? u : 8;
        var h = w.T
          , v = {};
        w.T = v,
        Sr(t, !1, e, n);
        try {
            var x = l()
              , D = w.S;
            if (D !== null && D(v, x),
            x !== null && typeof x == "object" && typeof x.then == "function") {
                var O = av(x, a);
                Ba(t, e, O, be(t))
            } else
                Ba(t, e, a, be(t))
        } catch (V) {
            Ba(t, e, {
                then: function() {},
                status: "rejected",
                reason: V
            }, be())
        } finally {
            q.p = u,
            w.T = h
        }
    }
    function uv() {}
    function gr(t, e, n, a) {
        if (t.tag !== 5)
            throw Error(r(476));
        var l = Bd(t).queue;
        _d(t, l, e, K, n === null ? uv : function() {
            return Ld(t),
            n(a)
        }
        )
    }
    function Bd(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: K,
            baseState: K,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: nn,
                lastRenderedState: K
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: nn,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Ld(t) {
        var e = Bd(t).next.queue;
        Ba(t, e, {}, be())
    }
    function vr() {
        return ee(es)
    }
    function Hd() {
        return Ht().memoizedState
    }
    function qd() {
        return Ht().memoizedState
    }
    function cv(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = be();
                t = Sn(n);
                var a = bn(e, t, n);
                a !== null && (xe(a, e, n),
                Oa(a, e, n)),
                e = {
                    cache: Po()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function fv(t, e, n) {
        var a = be();
        n = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ll(t) ? Gd(e, n) : (n = Lo(t, e, n, a),
        n !== null && (xe(n, t, a),
        Xd(n, e, a)))
    }
    function Yd(t, e, n) {
        var a = be();
        Ba(t, e, n, a)
    }
    function Ba(t, e, n, a) {
        var l = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ll(t))
            Gd(e, l);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var h = e.lastRenderedState
                      , v = u(h, n);
                    if (l.hasEagerState = !0,
                    l.eagerState = v,
                    pe(v, h))
                        return Xs(t, e, l, 0),
                        jt === null && Gs(),
                        !1
                } catch {} finally {}
            if (n = Lo(t, e, l, a),
            n !== null)
                return xe(n, t, a),
                Xd(n, e, a),
                !0
        }
        return !1
    }
    function Sr(t, e, n, a) {
        if (a = {
            lane: 2,
            revertLane: Wr(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ll(t)) {
            if (e)
                throw Error(r(479))
        } else
            e = Lo(t, n, a, 2),
            e !== null && xe(e, t, 2)
    }
    function ll(t) {
        var e = t.alternate;
        return t === ot || e !== null && e === ot
    }
    function Gd(t, e) {
        Ui = tl = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function Xd(t, e, n) {
        if ((n & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes,
            n |= a,
            e.lanes = n,
            Fc(t, n)
        }
    }
    var ol = {
        readContext: ee,
        use: nl,
        useCallback: Ut,
        useContext: Ut,
        useEffect: Ut,
        useImperativeHandle: Ut,
        useLayoutEffect: Ut,
        useInsertionEffect: Ut,
        useMemo: Ut,
        useReducer: Ut,
        useRef: Ut,
        useState: Ut,
        useDebugValue: Ut,
        useDeferredValue: Ut,
        useTransition: Ut,
        useSyncExternalStore: Ut,
        useId: Ut,
        useHostTransitionStatus: Ut,
        useFormState: Ut,
        useActionState: Ut,
        useOptimistic: Ut,
        useMemoCache: Ut,
        useCacheRefresh: Ut
    }
      , kd = {
        readContext: ee,
        use: nl,
        useCallback: function(t, e) {
            return re().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: ee,
        useEffect: Dd,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            sl(4194308, 4, Od.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return sl(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            sl(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = re();
            e = e === void 0 ? null : e;
            var a = t();
            if (ii) {
                mn(!0);
                try {
                    t()
                } finally {
                    mn(!1)
                }
            }
            return n.memoizedState = [a, e],
            a
        },
        useReducer: function(t, e, n) {
            var a = re();
            if (n !== void 0) {
                var l = n(e);
                if (ii) {
                    mn(!0);
                    try {
                        n(e)
                    } finally {
                        mn(!1)
                    }
                }
            } else
                l = e;
            return a.memoizedState = a.baseState = l,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: l
            },
            a.queue = t,
            t = t.dispatch = fv.bind(null, ot, t),
            [a.memoizedState, t]
        },
        useRef: function(t) {
            var e = re();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = hr(t);
            var e = t.queue
              , n = Yd.bind(null, ot, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: pr,
        useDeferredValue: function(t, e) {
            var n = re();
            return yr(n, t, e)
        },
        useTransition: function() {
            var t = hr(!1);
            return t = _d.bind(null, ot, t.queue, !0, !1),
            re().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var a = ot
              , l = re();
            if (yt) {
                if (n === void 0)
                    throw Error(r(407));
                n = n()
            } else {
                if (n = e(),
                jt === null)
                    throw Error(r(349));
                (dt & 124) !== 0 || fd(a, e, n)
            }
            l.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: e
            };
            return l.queue = u,
            Dd(hd.bind(null, a, u, t), [t]),
            a.flags |= 2048,
            Bi(9, al(), dd.bind(null, a, u, n, e), null),
            n
        },
        useId: function() {
            var t = re()
              , e = jt.identifierPrefix;
            if (yt) {
                var n = Ie
                  , a = $e;
                n = (a & ~(1 << 32 - me(a) - 1)).toString(32) + n,
                e = "«" + e + "R" + n,
                n = el++,
                0 < n && (e += "H" + n.toString(32)),
                e += "»"
            } else
                n = sv++,
                e = "«" + e + "r" + n.toString(32) + "»";
            return t.memoizedState = e
        },
        useHostTransitionStatus: vr,
        useFormState: Td,
        useActionState: Td,
        useOptimistic: function(t) {
            var e = re();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = Sr.bind(null, ot, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: cr,
        useCacheRefresh: function() {
            return re().memoizedState = cv.bind(null, ot)
        }
    }
      , Qd = {
        readContext: ee,
        use: nl,
        useCallback: zd,
        useContext: ee,
        useEffect: Nd,
        useImperativeHandle: wd,
        useInsertionEffect: Cd,
        useLayoutEffect: Rd,
        useMemo: Vd,
        useReducer: il,
        useRef: Ed,
        useState: function() {
            return il(nn)
        },
        useDebugValue: pr,
        useDeferredValue: function(t, e) {
            var n = Ht();
            return Ud(n, bt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = il(nn)[0]
              , e = Ht().memoizedState;
            return [typeof t == "boolean" ? t : Ua(t), e]
        },
        useSyncExternalStore: cd,
        useId: Hd,
        useHostTransitionStatus: vr,
        useFormState: Ad,
        useActionState: Ad,
        useOptimistic: function(t, e) {
            var n = Ht();
            return yd(n, bt, t, e)
        },
        useMemoCache: cr,
        useCacheRefresh: qd
    }
      , dv = {
        readContext: ee,
        use: nl,
        useCallback: zd,
        useContext: ee,
        useEffect: Nd,
        useImperativeHandle: wd,
        useInsertionEffect: Cd,
        useLayoutEffect: Rd,
        useMemo: Vd,
        useReducer: dr,
        useRef: Ed,
        useState: function() {
            return dr(nn)
        },
        useDebugValue: pr,
        useDeferredValue: function(t, e) {
            var n = Ht();
            return bt === null ? yr(n, t, e) : Ud(n, bt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = dr(nn)[0]
              , e = Ht().memoizedState;
            return [typeof t == "boolean" ? t : Ua(t), e]
        },
        useSyncExternalStore: cd,
        useId: Hd,
        useHostTransitionStatus: vr,
        useFormState: Md,
        useActionState: Md,
        useOptimistic: function(t, e) {
            var n = Ht();
            return bt !== null ? yd(n, bt, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: cr,
        useCacheRefresh: qd
    }
      , Li = null
      , La = 0;
    function rl(t) {
        var e = La;
        return La += 1,
        Li === null && (Li = []),
        nd(Li, t, e)
    }
    function Ha(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function ul(t, e) {
        throw e.$$typeof === b ? Error(r(525)) : (t = Object.prototype.toString.call(e),
        Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function Zd(t) {
        var e = t._init;
        return e(t._payload)
    }
    function Kd(t) {
        function e(M, j) {
            if (t) {
                var E = M.deletions;
                E === null ? (M.deletions = [j],
                M.flags |= 16) : E.push(j)
            }
        }
        function n(M, j) {
            if (!t)
                return null;
            for (; j !== null; )
                e(M, j),
                j = j.sibling;
            return null
        }
        function a(M) {
            for (var j = new Map; M !== null; )
                M.key !== null ? j.set(M.key, M) : j.set(M.index, M),
                M = M.sibling;
            return j
        }
        function l(M, j) {
            return M = We(M, j),
            M.index = 0,
            M.sibling = null,
            M
        }
        function u(M, j, E) {
            return M.index = E,
            t ? (E = M.alternate,
            E !== null ? (E = E.index,
            E < j ? (M.flags |= 67108866,
            j) : E) : (M.flags |= 67108866,
            j)) : (M.flags |= 1048576,
            j)
        }
        function h(M) {
            return t && M.alternate === null && (M.flags |= 67108866),
            M
        }
        function v(M, j, E, z) {
            return j === null || j.tag !== 6 ? (j = qo(E, M.mode, z),
            j.return = M,
            j) : (j = l(j, E),
            j.return = M,
            j)
        }
        function x(M, j, E, z) {
            var Z = E.type;
            return Z === _ ? O(M, j, E.props.children, z, E.key) : j !== null && (j.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === W && Zd(Z) === j.type) ? (j = l(j, E.props),
            Ha(j, E),
            j.return = M,
            j) : (j = Qs(E.type, E.key, E.props, null, M.mode, z),
            Ha(j, E),
            j.return = M,
            j)
        }
        function D(M, j, E, z) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== E.containerInfo || j.stateNode.implementation !== E.implementation ? (j = Yo(E, M.mode, z),
            j.return = M,
            j) : (j = l(j, E.children || []),
            j.return = M,
            j)
        }
        function O(M, j, E, z, Z) {
            return j === null || j.tag !== 7 ? (j = Jn(E, M.mode, z, Z),
            j.return = M,
            j) : (j = l(j, E),
            j.return = M,
            j)
        }
        function V(M, j, E) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return j = qo("" + j, M.mode, E),
                j.return = M,
                j;
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case A:
                    return E = Qs(j.type, j.key, j.props, null, M.mode, E),
                    Ha(E, j),
                    E.return = M,
                    E;
                case N:
                    return j = Yo(j, M.mode, E),
                    j.return = M,
                    j;
                case W:
                    var z = j._init;
                    return j = z(j._payload),
                    V(M, j, E)
                }
                if (Pt(j) || Yt(j))
                    return j = Jn(j, M.mode, E, null),
                    j.return = M,
                    j;
                if (typeof j.then == "function")
                    return V(M, rl(j), E);
                if (j.$$typeof === Y)
                    return V(M, Js(M, j), E);
                ul(M, j)
            }
            return null
        }
        function C(M, j, E, z) {
            var Z = j !== null ? j.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return Z !== null ? null : v(M, j, "" + E, z);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case A:
                    return E.key === Z ? x(M, j, E, z) : null;
                case N:
                    return E.key === Z ? D(M, j, E, z) : null;
                case W:
                    return Z = E._init,
                    E = Z(E._payload),
                    C(M, j, E, z)
                }
                if (Pt(E) || Yt(E))
                    return Z !== null ? null : O(M, j, E, z, null);
                if (typeof E.then == "function")
                    return C(M, j, rl(E), z);
                if (E.$$typeof === Y)
                    return C(M, j, Js(M, E), z);
                ul(M, E)
            }
            return null
        }
        function R(M, j, E, z, Z) {
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return M = M.get(E) || null,
                v(j, M, "" + z, Z);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case A:
                    return M = M.get(z.key === null ? E : z.key) || null,
                    x(j, M, z, Z);
                case N:
                    return M = M.get(z.key === null ? E : z.key) || null,
                    D(j, M, z, Z);
                case W:
                    var rt = z._init;
                    return z = rt(z._payload),
                    R(M, j, E, z, Z)
                }
                if (Pt(z) || Yt(z))
                    return M = M.get(E) || null,
                    O(j, M, z, Z, null);
                if (typeof z.then == "function")
                    return R(M, j, E, rl(z), Z);
                if (z.$$typeof === Y)
                    return R(M, j, E, Js(j, z), Z);
                ul(j, z)
            }
            return null
        }
        function et(M, j, E, z) {
            for (var Z = null, rt = null, J = j, tt = j = 0, Kt = null; J !== null && tt < E.length; tt++) {
                J.index > tt ? (Kt = J,
                J = null) : Kt = J.sibling;
                var mt = C(M, J, E[tt], z);
                if (mt === null) {
                    J === null && (J = Kt);
                    break
                }
                t && J && mt.alternate === null && e(M, J),
                j = u(mt, j, tt),
                rt === null ? Z = mt : rt.sibling = mt,
                rt = mt,
                J = Kt
            }
            if (tt === E.length)
                return n(M, J),
                yt && Wn(M, tt),
                Z;
            if (J === null) {
                for (; tt < E.length; tt++)
                    J = V(M, E[tt], z),
                    J !== null && (j = u(J, j, tt),
                    rt === null ? Z = J : rt.sibling = J,
                    rt = J);
                return yt && Wn(M, tt),
                Z
            }
            for (J = a(J); tt < E.length; tt++)
                Kt = R(J, M, tt, E[tt], z),
                Kt !== null && (t && Kt.alternate !== null && J.delete(Kt.key === null ? tt : Kt.key),
                j = u(Kt, j, tt),
                rt === null ? Z = Kt : rt.sibling = Kt,
                rt = Kt);
            return t && J.forEach(function(Bn) {
                return e(M, Bn)
            }),
            yt && Wn(M, tt),
            Z
        }
        function I(M, j, E, z) {
            if (E == null)
                throw Error(r(151));
            for (var Z = null, rt = null, J = j, tt = j = 0, Kt = null, mt = E.next(); J !== null && !mt.done; tt++,
            mt = E.next()) {
                J.index > tt ? (Kt = J,
                J = null) : Kt = J.sibling;
                var Bn = C(M, J, mt.value, z);
                if (Bn === null) {
                    J === null && (J = Kt);
                    break
                }
                t && J && Bn.alternate === null && e(M, J),
                j = u(Bn, j, tt),
                rt === null ? Z = Bn : rt.sibling = Bn,
                rt = Bn,
                J = Kt
            }
            if (mt.done)
                return n(M, J),
                yt && Wn(M, tt),
                Z;
            if (J === null) {
                for (; !mt.done; tt++,
                mt = E.next())
                    mt = V(M, mt.value, z),
                    mt !== null && (j = u(mt, j, tt),
                    rt === null ? Z = mt : rt.sibling = mt,
                    rt = mt);
                return yt && Wn(M, tt),
                Z
            }
            for (J = a(J); !mt.done; tt++,
            mt = E.next())
                mt = R(J, M, tt, mt.value, z),
                mt !== null && (t && mt.alternate !== null && J.delete(mt.key === null ? tt : mt.key),
                j = u(mt, j, tt),
                rt === null ? Z = mt : rt.sibling = mt,
                rt = mt);
            return t && J.forEach(function(h1) {
                return e(M, h1)
            }),
            yt && Wn(M, tt),
            Z
        }
        function Tt(M, j, E, z) {
            if (typeof E == "object" && E !== null && E.type === _ && E.key === null && (E = E.props.children),
            typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case A:
                    t: {
                        for (var Z = E.key; j !== null; ) {
                            if (j.key === Z) {
                                if (Z = E.type,
                                Z === _) {
                                    if (j.tag === 7) {
                                        n(M, j.sibling),
                                        z = l(j, E.props.children),
                                        z.return = M,
                                        M = z;
                                        break t
                                    }
                                } else if (j.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === W && Zd(Z) === j.type) {
                                    n(M, j.sibling),
                                    z = l(j, E.props),
                                    Ha(z, E),
                                    z.return = M,
                                    M = z;
                                    break t
                                }
                                n(M, j);
                                break
                            } else
                                e(M, j);
                            j = j.sibling
                        }
                        E.type === _ ? (z = Jn(E.props.children, M.mode, z, E.key),
                        z.return = M,
                        M = z) : (z = Qs(E.type, E.key, E.props, null, M.mode, z),
                        Ha(z, E),
                        z.return = M,
                        M = z)
                    }
                    return h(M);
                case N:
                    t: {
                        for (Z = E.key; j !== null; ) {
                            if (j.key === Z)
                                if (j.tag === 4 && j.stateNode.containerInfo === E.containerInfo && j.stateNode.implementation === E.implementation) {
                                    n(M, j.sibling),
                                    z = l(j, E.children || []),
                                    z.return = M,
                                    M = z;
                                    break t
                                } else {
                                    n(M, j);
                                    break
                                }
                            else
                                e(M, j);
                            j = j.sibling
                        }
                        z = Yo(E, M.mode, z),
                        z.return = M,
                        M = z
                    }
                    return h(M);
                case W:
                    return Z = E._init,
                    E = Z(E._payload),
                    Tt(M, j, E, z)
                }
                if (Pt(E))
                    return et(M, j, E, z);
                if (Yt(E)) {
                    if (Z = Yt(E),
                    typeof Z != "function")
                        throw Error(r(150));
                    return E = Z.call(E),
                    I(M, j, E, z)
                }
                if (typeof E.then == "function")
                    return Tt(M, j, rl(E), z);
                if (E.$$typeof === Y)
                    return Tt(M, j, Js(M, E), z);
                ul(M, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E,
            j !== null && j.tag === 6 ? (n(M, j.sibling),
            z = l(j, E),
            z.return = M,
            M = z) : (n(M, j),
            z = qo(E, M.mode, z),
            z.return = M,
            M = z),
            h(M)) : n(M, j)
        }
        return function(M, j, E, z) {
            try {
                La = 0;
                var Z = Tt(M, j, E, z);
                return Li = null,
                Z
            } catch (J) {
                if (J === Ca || J === Ws)
                    throw J;
                var rt = ye(29, J, null, M.mode);
                return rt.lanes = z,
                rt.return = M,
                rt
            } finally {}
        }
    }
    var Hi = Kd(!0)
      , Pd = Kd(!1)
      , Ne = U(null)
      , Ye = null;
    function Tn(t) {
        var e = t.alternate;
        k(Xt, Xt.current & 1),
        k(Ne, t),
        Ye === null && (e === null || Vi.current !== null || e.memoizedState !== null) && (Ye = t)
    }
    function Jd(t) {
        if (t.tag === 22) {
            if (k(Xt, Xt.current),
            k(Ne, t),
            Ye === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (Ye = t)
            }
        } else
            An()
    }
    function An() {
        k(Xt, Xt.current),
        k(Ne, Ne.current)
    }
    function an(t) {
        Q(Ne),
        Ye === t && (Ye = null),
        Q(Xt)
    }
    var Xt = U(0);
    function cl(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || uu(n)))
                    return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    function br(t, e, n, a) {
        e = t.memoizedState,
        n = n(a, e),
        n = n == null ? e : S({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var xr = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var a = be()
              , l = Sn(a);
            l.payload = e,
            n != null && (l.callback = n),
            e = bn(t, l, a),
            e !== null && (xe(e, t, a),
            Oa(e, t, a))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var a = be()
              , l = Sn(a);
            l.tag = 1,
            l.payload = e,
            n != null && (l.callback = n),
            e = bn(t, l, a),
            e !== null && (xe(e, t, a),
            Oa(e, t, a))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = be()
              , a = Sn(n);
            a.tag = 2,
            e != null && (a.callback = e),
            e = bn(t, a, n),
            e !== null && (xe(e, t, n),
            Oa(e, t, n))
        }
    };
    function Fd(t, e, n, a, l, u, h) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, h) : e.prototype && e.prototype.isPureReactComponent ? !xa(n, a) || !xa(l, u) : !0
    }
    function Wd(t, e, n, a) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a),
        e.state !== t && xr.enqueueReplaceState(e, e.state, null)
    }
    function ai(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var a in e)
                a !== "ref" && (n[a] = e[a])
        }
        if (t = t.defaultProps) {
            n === e && (n = S({}, n));
            for (var l in t)
                n[l] === void 0 && (n[l] = t[l])
        }
        return n
    }
    var fl = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
    ;
    function $d(t) {
        fl(t)
    }
    function Id(t) {
        console.error(t)
    }
    function th(t) {
        fl(t)
    }
    function dl(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function eh(t, e, n) {
        try {
            var a = t.onCaughtError;
            a(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function Tr(t, e, n) {
        return n = Sn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            dl(t, e)
        }
        ,
        n
    }
    function nh(t) {
        return t = Sn(t),
        t.tag = 3,
        t
    }
    function ih(t, e, n, a) {
        var l = n.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var u = a.value;
            t.payload = function() {
                return l(u)
            }
            ,
            t.callback = function() {
                eh(e, n, a)
            }
        }
        var h = n.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
            eh(e, n, a),
            typeof l != "function" && (Cn === null ? Cn = new Set([this]) : Cn.add(this));
            var v = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function hv(t, e, n, a, l) {
        if (n.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = n.alternate,
            e !== null && Ea(e, n, l, !0),
            n = Ne.current,
            n !== null) {
                switch (n.tag) {
                case 13:
                    return Ye === null ? Zr() : n.alternate === null && wt === 0 && (wt = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = l,
                    a === Wo ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([a]) : e.add(a),
                    Pr(t, a, l)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    a === Wo ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([a]) : n.add(a)),
                    Pr(t, a, l)),
                    !1
                }
                throw Error(r(435, n.tag))
            }
            return Pr(t, a, l),
            Zr(),
            !1
        }
        if (yt)
            return e = Ne.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = l,
            a !== ko && (t = Error(r(422), {
                cause: a
            }),
            Ma(je(t, n)))) : (a !== ko && (e = Error(r(423), {
                cause: a
            }),
            Ma(je(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            l &= -l,
            t.lanes |= l,
            a = je(a, n),
            l = Tr(t.stateNode, a, l),
            tr(t, l),
            wt !== 4 && (wt = 2)),
            !1;
        var u = Error(r(520), {
            cause: a
        });
        if (u = je(u, n),
        Za === null ? Za = [u] : Za.push(u),
        wt !== 4 && (wt = 2),
        e === null)
            return !0;
        a = je(a, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = l & -l,
                n.lanes |= t,
                t = Tr(n.stateNode, a, t),
                tr(n, t),
                !1;
            case 1:
                if (e = n.type,
                u = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Cn === null || !Cn.has(u))))
                    return n.flags |= 65536,
                    l &= -l,
                    n.lanes |= l,
                    l = nh(l),
                    ih(l, t, n, a),
                    tr(n, l),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var ah = Error(r(461))
      , Qt = !1;
    function Jt(t, e, n, a) {
        e.child = t === null ? Pd(e, null, n, a) : Hi(e, t.child, n, a)
    }
    function sh(t, e, n, a, l) {
        n = n.render;
        var u = e.ref;
        if ("ref"in a) {
            var h = {};
            for (var v in a)
                v !== "ref" && (h[v] = a[v])
        } else
            h = a;
        return ei(e),
        a = sr(t, e, n, h, u, l),
        v = lr(),
        t !== null && !Qt ? (or(t, e, l),
        sn(t, e, l)) : (yt && v && Go(e),
        e.flags |= 1,
        Jt(t, e, a, l),
        e.child)
    }
    function lh(t, e, n, a, l) {
        if (t === null) {
            var u = n.type;
            return typeof u == "function" && !Ho(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = u,
            oh(t, e, u, a, l)) : (t = Qs(n.type, null, a, e, e.mode, l),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (u = t.child,
        !Rr(t, l)) {
            var h = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : xa,
            n(h, a) && t.ref === e.ref)
                return sn(t, e, l)
        }
        return e.flags |= 1,
        t = We(u, a),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function oh(t, e, n, a, l) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (xa(u, a) && t.ref === e.ref)
                if (Qt = !1,
                e.pendingProps = a = u,
                Rr(t, l))
                    (t.flags & 131072) !== 0 && (Qt = !0);
                else
                    return e.lanes = t.lanes,
                    sn(t, e, l)
        }
        return Ar(t, e, n, a, l)
    }
    function rh(t, e, n) {
        var a = e.pendingProps
          , l = a.children
          , u = t !== null ? t.memoizedState : null;
        if (a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (a = u !== null ? u.baseLanes | n : n,
                t !== null) {
                    for (l = e.child = t.child,
                    u = 0; l !== null; )
                        u = u | l.lanes | l.childLanes,
                        l = l.sibling;
                    e.childLanes = u & ~a
                } else
                    e.childLanes = 0,
                    e.child = null;
                return uh(t, e, a, n)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Fs(e, u !== null ? u.cachePool : null),
                u !== null ? od(e, u) : nr(),
                Jd(e);
            else
                return e.lanes = e.childLanes = 536870912,
                uh(t, e, u !== null ? u.baseLanes | n : n, n)
        } else
            u !== null ? (Fs(e, u.cachePool),
            od(e, u),
            An(),
            e.memoizedState = null) : (t !== null && Fs(e, null),
            nr(),
            An());
        return Jt(t, e, l, n),
        e.child
    }
    function uh(t, e, n, a) {
        var l = Fo();
        return l = l === null ? null : {
            parent: Gt._currentValue,
            pool: l
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: l
        },
        t !== null && Fs(e, null),
        nr(),
        Jd(e),
        t !== null && Ea(t, e, a, !0),
        null
    }
    function hl(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(r(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function Ar(t, e, n, a, l) {
        return ei(e),
        n = sr(t, e, n, a, void 0, l),
        a = lr(),
        t !== null && !Qt ? (or(t, e, l),
        sn(t, e, l)) : (yt && a && Go(e),
        e.flags |= 1,
        Jt(t, e, n, l),
        e.child)
    }
    function ch(t, e, n, a, l, u) {
        return ei(e),
        e.updateQueue = null,
        n = ud(e, a, n, l),
        rd(t),
        a = lr(),
        t !== null && !Qt ? (or(t, e, u),
        sn(t, e, u)) : (yt && a && Go(e),
        e.flags |= 1,
        Jt(t, e, n, u),
        e.child)
    }
    function fh(t, e, n, a, l) {
        if (ei(e),
        e.stateNode === null) {
            var u = Ci
              , h = n.contextType;
            typeof h == "object" && h !== null && (u = ee(h)),
            u = new n(a,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = xr,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = a,
            u.state = e.memoizedState,
            u.refs = {},
            $o(e),
            h = n.contextType,
            u.context = typeof h == "object" && h !== null ? ee(h) : Ci,
            u.state = e.memoizedState,
            h = n.getDerivedStateFromProps,
            typeof h == "function" && (br(e, n, h, a),
            u.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            h !== u.state && xr.enqueueReplaceState(u, u.state, null),
            za(e, a, u, l),
            wa(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !0
        } else if (t === null) {
            u = e.stateNode;
            var v = e.memoizedProps
              , x = ai(n, v);
            u.props = x;
            var D = u.context
              , O = n.contextType;
            h = Ci,
            typeof O == "object" && O !== null && (h = ee(O));
            var V = n.getDerivedStateFromProps;
            O = typeof V == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || D !== h) && Wd(e, u, a, h),
            vn = !1;
            var C = e.memoizedState;
            u.state = C,
            za(e, a, u, l),
            wa(),
            D = e.memoizedState,
            v || C !== D || vn ? (typeof V == "function" && (br(e, n, V, a),
            D = e.memoizedState),
            (x = vn || Fd(e, n, x, a, C, D, h)) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = a,
            e.memoizedState = D),
            u.props = a,
            u.state = D,
            u.context = h,
            a = x) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !1)
        } else {
            u = e.stateNode,
            Io(t, e),
            h = e.memoizedProps,
            O = ai(n, h),
            u.props = O,
            V = e.pendingProps,
            C = u.context,
            D = n.contextType,
            x = Ci,
            typeof D == "object" && D !== null && (x = ee(D)),
            v = n.getDerivedStateFromProps,
            (D = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== V || C !== x) && Wd(e, u, a, x),
            vn = !1,
            C = e.memoizedState,
            u.state = C,
            za(e, a, u, l),
            wa();
            var R = e.memoizedState;
            h !== V || C !== R || vn || t !== null && t.dependencies !== null && Ps(t.dependencies) ? (typeof v == "function" && (br(e, n, v, a),
            R = e.memoizedState),
            (O = vn || Fd(e, n, O, a, C, R, x) || t !== null && t.dependencies !== null && Ps(t.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, R, x),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, R, x)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && C === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = a,
            e.memoizedState = R),
            u.props = a,
            u.state = R,
            u.context = x,
            a = O) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && C === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024),
            a = !1)
        }
        return u = a,
        hl(t, e),
        a = (e.flags & 128) !== 0,
        u || a ? (u = e.stateNode,
        n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        t !== null && a ? (e.child = Hi(e, t.child, null, l),
        e.child = Hi(e, null, n, l)) : Jt(t, e, n, l),
        e.memoizedState = u.state,
        t = e.child) : t = sn(t, e, l),
        t
    }
    function dh(t, e, n, a) {
        return ja(),
        e.flags |= 256,
        Jt(t, e, n, a),
        e.child
    }
    var jr = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Mr(t) {
        return {
            baseLanes: t,
            cachePool: If()
        }
    }
    function Er(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= Ce),
        t
    }
    function hh(t, e, n) {
        var a = e.pendingProps, l = !1, u = (e.flags & 128) !== 0, h;
        if ((h = u) || (h = t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
        h && (l = !0,
        e.flags &= -129),
        h = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (yt) {
                if (l ? Tn(e) : An(),
                yt) {
                    var v = Ot, x;
                    if (x = v) {
                        t: {
                            for (x = v,
                            v = qe; x.nodeType !== 8; ) {
                                if (!v) {
                                    v = null;
                                    break t
                                }
                                if (x = _e(x.nextSibling),
                                x === null) {
                                    v = null;
                                    break t
                                }
                            }
                            v = x
                        }
                        v !== null ? (e.memoizedState = {
                            dehydrated: v,
                            treeContext: Fn !== null ? {
                                id: $e,
                                overflow: Ie
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        x = ye(18, null, null, 0),
                        x.stateNode = v,
                        x.return = e,
                        e.child = x,
                        ae = e,
                        Ot = null,
                        x = !0) : x = !1
                    }
                    x || In(e)
                }
                if (v = e.memoizedState,
                v !== null && (v = v.dehydrated,
                v !== null))
                    return uu(v) ? e.lanes = 32 : e.lanes = 536870912,
                    null;
                an(e)
            }
            return v = a.children,
            a = a.fallback,
            l ? (An(),
            l = e.mode,
            v = ml({
                mode: "hidden",
                children: v
            }, l),
            a = Jn(a, l, n, null),
            v.return = e,
            a.return = e,
            v.sibling = a,
            e.child = v,
            l = e.child,
            l.memoizedState = Mr(n),
            l.childLanes = Er(t, h, n),
            e.memoizedState = jr,
            a) : (Tn(e),
            Dr(e, v))
        }
        if (x = t.memoizedState,
        x !== null && (v = x.dehydrated,
        v !== null)) {
            if (u)
                e.flags & 256 ? (Tn(e),
                e.flags &= -257,
                e = Nr(t, e, n)) : e.memoizedState !== null ? (An(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (An(),
                l = a.fallback,
                v = e.mode,
                a = ml({
                    mode: "visible",
                    children: a.children
                }, v),
                l = Jn(l, v, n, null),
                l.flags |= 2,
                a.return = e,
                l.return = e,
                a.sibling = l,
                e.child = a,
                Hi(e, t.child, null, n),
                a = e.child,
                a.memoizedState = Mr(n),
                a.childLanes = Er(t, h, n),
                e.memoizedState = jr,
                e = l);
            else if (Tn(e),
            uu(v)) {
                if (h = v.nextSibling && v.nextSibling.dataset,
                h)
                    var D = h.dgst;
                h = D,
                a = Error(r(419)),
                a.stack = "",
                a.digest = h,
                Ma({
                    value: a,
                    source: null,
                    stack: null
                }),
                e = Nr(t, e, n)
            } else if (Qt || Ea(t, e, n, !1),
            h = (n & t.childLanes) !== 0,
            Qt || h) {
                if (h = jt,
                h !== null && (a = n & -n,
                a = (a & 42) !== 0 ? 1 : uo(a),
                a = (a & (h.suspendedLanes | n)) !== 0 ? 0 : a,
                a !== 0 && a !== x.retryLane))
                    throw x.retryLane = a,
                    Ni(t, a),
                    xe(h, t, a),
                    ah;
                v.data === "$?" || Zr(),
                e = Nr(t, e, n)
            } else
                v.data === "$?" ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = x.treeContext,
                Ot = _e(v.nextSibling),
                ae = e,
                yt = !0,
                $n = null,
                qe = !1,
                t !== null && (Ee[De++] = $e,
                Ee[De++] = Ie,
                Ee[De++] = Fn,
                $e = t.id,
                Ie = t.overflow,
                Fn = e),
                e = Dr(e, a.children),
                e.flags |= 4096);
            return e
        }
        return l ? (An(),
        l = a.fallback,
        v = e.mode,
        x = t.child,
        D = x.sibling,
        a = We(x, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = x.subtreeFlags & 65011712,
        D !== null ? l = We(D, l) : (l = Jn(l, v, n, null),
        l.flags |= 2),
        l.return = e,
        a.return = e,
        a.sibling = l,
        e.child = a,
        a = l,
        l = e.child,
        v = t.child.memoizedState,
        v === null ? v = Mr(n) : (x = v.cachePool,
        x !== null ? (D = Gt._currentValue,
        x = x.parent !== D ? {
            parent: D,
            pool: D
        } : x) : x = If(),
        v = {
            baseLanes: v.baseLanes | n,
            cachePool: x
        }),
        l.memoizedState = v,
        l.childLanes = Er(t, h, n),
        e.memoizedState = jr,
        a) : (Tn(e),
        n = t.child,
        t = n.sibling,
        n = We(n, {
            mode: "visible",
            children: a.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (h = e.deletions,
        h === null ? (e.deletions = [t],
        e.flags |= 16) : h.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function Dr(t, e) {
        return e = ml({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function ml(t, e) {
        return t = ye(22, t, null, e),
        t.lanes = 0,
        t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        t
    }
    function Nr(t, e, n) {
        return Hi(e, t.child, null, n),
        t = Dr(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function mh(t, e, n) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e),
        Zo(t.return, e, n)
    }
    function Cr(t, e, n, a, l) {
        var u = t.memoizedState;
        u === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: l
        } : (u.isBackwards = e,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = a,
        u.tail = n,
        u.tailMode = l)
    }
    function ph(t, e, n) {
        var a = e.pendingProps
          , l = a.revealOrder
          , u = a.tail;
        if (Jt(t, e, a.children, n),
        a = Xt.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && mh(t, n, e);
                    else if (t.tag === 19)
                        mh(t, n, e);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break t;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a &= 1
        }
        switch (k(Xt, a),
        l) {
        case "forwards":
            for (n = e.child,
            l = null; n !== null; )
                t = n.alternate,
                t !== null && cl(t) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = e.child,
            e.child = null) : (l = n.sibling,
            n.sibling = null),
            Cr(e, !1, l, n, u);
            break;
        case "backwards":
            for (n = null,
            l = e.child,
            e.child = null; l !== null; ) {
                if (t = l.alternate,
                t !== null && cl(t) === null) {
                    e.child = l;
                    break
                }
                t = l.sibling,
                l.sibling = n,
                n = l,
                l = t
            }
            Cr(e, !0, n, null, u);
            break;
        case "together":
            Cr(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function sn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        Nn |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (Ea(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(r(153));
        if (e.child !== null) {
            for (t = e.child,
            n = We(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = We(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function Rr(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Ps(t)))
    }
    function mv(t, e, n) {
        switch (e.tag) {
        case 3:
            Et(e, e.stateNode.containerInfo),
            gn(e, Gt, t.memoizedState.cache),
            ja();
            break;
        case 27:
        case 5:
            ao(e);
            break;
        case 4:
            Et(e, e.stateNode.containerInfo);
            break;
        case 10:
            gn(e, e.type, e.memoizedProps.value);
            break;
        case 13:
            var a = e.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (Tn(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? hh(t, e, n) : (Tn(e),
                t = sn(t, e, n),
                t !== null ? t.sibling : null);
            Tn(e);
            break;
        case 19:
            var l = (t.flags & 128) !== 0;
            if (a = (n & e.childLanes) !== 0,
            a || (Ea(t, e, n, !1),
            a = (n & e.childLanes) !== 0),
            l) {
                if (a)
                    return ph(t, e, n);
                e.flags |= 128
            }
            if (l = e.memoizedState,
            l !== null && (l.rendering = null,
            l.tail = null,
            l.lastEffect = null),
            k(Xt, Xt.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0,
            rh(t, e, n);
        case 24:
            gn(e, Gt, t.memoizedState.cache)
        }
        return sn(t, e, n)
    }
    function yh(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Qt = !0;
            else {
                if (!Rr(t, n) && (e.flags & 128) === 0)
                    return Qt = !1,
                    mv(t, e, n);
                Qt = (t.flags & 131072) !== 0
            }
        else
            Qt = !1,
            yt && (e.flags & 1048576) !== 0 && Zf(e, Ks, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                t = e.pendingProps;
                var a = e.elementType
                  , l = a._init;
                if (a = l(a._payload),
                e.type = a,
                typeof a == "function")
                    Ho(a) ? (t = ai(a, t),
                    e.tag = 1,
                    e = fh(null, e, a, t, n)) : (e.tag = 0,
                    e = Ar(null, e, a, t, n));
                else {
                    if (a != null) {
                        if (l = a.$$typeof,
                        l === it) {
                            e.tag = 11,
                            e = sh(null, e, a, t, n);
                            break t
                        } else if (l === lt) {
                            e.tag = 14,
                            e = lh(null, e, a, t, n);
                            break t
                        }
                    }
                    throw e = Le(a) || a,
                    Error(r(306, e, ""))
                }
            }
            return e;
        case 0:
            return Ar(t, e, e.type, e.pendingProps, n);
        case 1:
            return a = e.type,
            l = ai(a, e.pendingProps),
            fh(t, e, a, l, n);
        case 3:
            t: {
                if (Et(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(r(387));
                a = e.pendingProps;
                var u = e.memoizedState;
                l = u.element,
                Io(t, e),
                za(e, a, null, n);
                var h = e.memoizedState;
                if (a = h.cache,
                gn(e, Gt, a),
                a !== u.cache && Ko(e, [Gt], n, !0),
                wa(),
                a = h.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: h.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = dh(t, e, a, n);
                        break t
                    } else if (a !== l) {
                        l = je(Error(r(424)), e),
                        Ma(l),
                        e = dh(t, e, a, n);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Ot = _e(t.firstChild),
                        ae = e,
                        yt = !0,
                        $n = null,
                        qe = !0,
                        n = Pd(e, null, a, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (ja(),
                    a === l) {
                        e = sn(t, e, n);
                        break t
                    }
                    Jt(t, e, a, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return hl(t, e),
            t === null ? (n = bm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : yt || (n = e.type,
            t = e.pendingProps,
            a = Nl(at.current).createElement(n),
            a[te] = e,
            a[le] = t,
            Wt(a, n, t),
            kt(a),
            e.stateNode = a) : e.memoizedState = bm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return ao(e),
            t === null && yt && (a = e.stateNode = gm(e.type, e.pendingProps, at.current),
            ae = e,
            qe = !0,
            l = Ot,
            wn(e.type) ? (cu = l,
            Ot = _e(a.firstChild)) : Ot = l),
            Jt(t, e, e.pendingProps.children, n),
            hl(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && yt && ((l = a = Ot) && (a = Gv(a, e.type, e.pendingProps, qe),
            a !== null ? (e.stateNode = a,
            ae = e,
            Ot = _e(a.firstChild),
            qe = !1,
            l = !0) : l = !1),
            l || In(e)),
            ao(e),
            l = e.type,
            u = e.pendingProps,
            h = t !== null ? t.memoizedProps : null,
            a = u.children,
            lu(l, u) ? a = null : h !== null && lu(l, h) && (e.flags |= 32),
            e.memoizedState !== null && (l = sr(t, e, lv, null, null, n),
            es._currentValue = l),
            hl(t, e),
            Jt(t, e, a, n),
            e.child;
        case 6:
            return t === null && yt && ((t = n = Ot) && (n = Xv(n, e.pendingProps, qe),
            n !== null ? (e.stateNode = n,
            ae = e,
            Ot = null,
            t = !0) : t = !1),
            t || In(e)),
            null;
        case 13:
            return hh(t, e, n);
        case 4:
            return Et(e, e.stateNode.containerInfo),
            a = e.pendingProps,
            t === null ? e.child = Hi(e, null, a, n) : Jt(t, e, a, n),
            e.child;
        case 11:
            return sh(t, e, e.type, e.pendingProps, n);
        case 7:
            return Jt(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return Jt(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return Jt(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return a = e.pendingProps,
            gn(e, e.type, a.value),
            Jt(t, e, a.children, n),
            e.child;
        case 9:
            return l = e.type._context,
            a = e.pendingProps.children,
            ei(e),
            l = ee(l),
            a = a(l),
            e.flags |= 1,
            Jt(t, e, a, n),
            e.child;
        case 14:
            return lh(t, e, e.type, e.pendingProps, n);
        case 15:
            return oh(t, e, e.type, e.pendingProps, n);
        case 19:
            return ph(t, e, n);
        case 31:
            return a = e.pendingProps,
            n = e.mode,
            a = {
                mode: a.mode,
                children: a.children
            },
            t === null ? (n = ml(a, n),
            n.ref = e.ref,
            e.child = n,
            n.return = e,
            e = n) : (n = We(t.child, a),
            n.ref = e.ref,
            e.child = n,
            n.return = e,
            e = n),
            e;
        case 22:
            return rh(t, e, n);
        case 24:
            return ei(e),
            a = ee(Gt),
            t === null ? (l = Fo(),
            l === null && (l = jt,
            u = Po(),
            l.pooledCache = u,
            u.refCount++,
            u !== null && (l.pooledCacheLanes |= n),
            l = u),
            e.memoizedState = {
                parent: a,
                cache: l
            },
            $o(e),
            gn(e, Gt, l)) : ((t.lanes & n) !== 0 && (Io(t, e),
            za(e, null, null, n),
            wa()),
            l = t.memoizedState,
            u = e.memoizedState,
            l.parent !== a ? (l = {
                parent: a,
                cache: a
            },
            e.memoizedState = l,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = l),
            gn(e, Gt, a)) : (a = u.cache,
            gn(e, Gt, a),
            a !== l.cache && Ko(e, [Gt], n, !0))),
            Jt(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(r(156, e.tag))
    }
    function ln(t) {
        t.flags |= 4
    }
    function gh(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Mm(e)) {
            if (e = Ne.current,
            e !== null && ((dt & 4194048) === dt ? Ye !== null : (dt & 62914560) !== dt && (dt & 536870912) === 0 || e !== Ye))
                throw Ra = Wo,
                td;
            t.flags |= 8192
        }
    }
    function pl(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? Pc() : 536870912,
        t.lanes |= e,
        Xi |= e)
    }
    function qa(t, e) {
        if (!yt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var a = null; n !== null; )
                    n.alternate !== null && (a = n),
                    n = n.sibling;
                a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
    }
    function Nt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , a = 0;
        if (e)
            for (var l = t.child; l !== null; )
                n |= l.lanes | l.childLanes,
                a |= l.subtreeFlags & 65011712,
                a |= l.flags & 65011712,
                l.return = t,
                l = l.sibling;
        else
            for (l = t.child; l !== null; )
                n |= l.lanes | l.childLanes,
                a |= l.subtreeFlags,
                a |= l.flags,
                l.return = t,
                l = l.sibling;
        return t.subtreeFlags |= a,
        t.childLanes = n,
        e
    }
    function pv(t, e, n) {
        var a = e.pendingProps;
        switch (Xo(e),
        e.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Nt(e),
            null;
        case 1:
            return Nt(e),
            null;
        case 3:
            return n = e.stateNode,
            a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            en(Gt),
            hn(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (Aa(e) ? ln(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Jf())),
            Nt(e),
            null;
        case 26:
            return n = e.memoizedState,
            t === null ? (ln(e),
            n !== null ? (Nt(e),
            gh(e, n)) : (Nt(e),
            e.flags &= -16777217)) : n ? n !== t.memoizedState ? (ln(e),
            Nt(e),
            gh(e, n)) : (Nt(e),
            e.flags &= -16777217) : (t.memoizedProps !== a && ln(e),
            Nt(e),
            e.flags &= -16777217),
            null;
        case 27:
            Es(e),
            n = at.current;
            var l = e.type;
            if (t !== null && e.stateNode != null)
                t.memoizedProps !== a && ln(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(r(166));
                    return Nt(e),
                    null
                }
                t = $.current,
                Aa(e) ? Kf(e) : (t = gm(l, a, n),
                e.stateNode = t,
                ln(e))
            }
            return Nt(e),
            null;
        case 5:
            if (Es(e),
            n = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== a && ln(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(r(166));
                    return Nt(e),
                    null
                }
                if (t = $.current,
                Aa(e))
                    Kf(e);
                else {
                    switch (l = Nl(at.current),
                    t) {
                    case 1:
                        t = l.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        t = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            t = l.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            t = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            t = l.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof a.is == "string" ? l.createElement("select", {
                                is: a.is
                            }) : l.createElement("select"),
                            a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                            break;
                        default:
                            t = typeof a.is == "string" ? l.createElement(n, {
                                is: a.is
                            }) : l.createElement(n)
                        }
                    }
                    t[te] = e,
                    t[le] = a;
                    t: for (l = e.child; l !== null; ) {
                        if (l.tag === 5 || l.tag === 6)
                            t.appendChild(l.stateNode);
                        else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                            l.child.return = l,
                            l = l.child;
                            continue
                        }
                        if (l === e)
                            break t;
                        for (; l.sibling === null; ) {
                            if (l.return === null || l.return === e)
                                break t;
                            l = l.return
                        }
                        l.sibling.return = l.return,
                        l = l.sibling
                    }
                    e.stateNode = t;
                    t: switch (Wt(t, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!a.autoFocus;
                        break t;
                    case "img":
                        t = !0;
                        break t;
                    default:
                        t = !1
                    }
                    t && ln(e)
                }
            }
            return Nt(e),
            e.flags &= -16777217,
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== a && ln(e);
            else {
                if (typeof a != "string" && e.stateNode === null)
                    throw Error(r(166));
                if (t = at.current,
                Aa(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    a = null,
                    l = ae,
                    l !== null)
                        switch (l.tag) {
                        case 27:
                        case 5:
                            a = l.memoizedProps
                        }
                    t[te] = e,
                    t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || cm(t.nodeValue, n)),
                    t || In(e)
                } else
                    t = Nl(t).createTextNode(a),
                    t[te] = e,
                    e.stateNode = t
            }
            return Nt(e),
            null;
        case 13:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (l = Aa(e),
                a !== null && a.dehydrated !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(r(318));
                        if (l = e.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(r(317));
                        l[te] = e
                    } else
                        ja(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Nt(e),
                    l = !1
                } else
                    l = Jf(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l),
                    l = !0;
                if (!l)
                    return e.flags & 256 ? (an(e),
                    e) : (an(e),
                    null)
            }
            if (an(e),
            (e.flags & 128) !== 0)
                return e.lanes = n,
                e;
            if (n = a !== null,
            t = t !== null && t.memoizedState !== null,
            n) {
                a = e.child,
                l = null,
                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool);
                var u = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
                u !== l && (a.flags |= 2048)
            }
            return n !== t && n && (e.child.flags |= 8192),
            pl(e, e.updateQueue),
            Nt(e),
            null;
        case 4:
            return hn(),
            t === null && eu(e.stateNode.containerInfo),
            Nt(e),
            null;
        case 10:
            return en(e.type),
            Nt(e),
            null;
        case 19:
            if (Q(Xt),
            l = e.memoizedState,
            l === null)
                return Nt(e),
                null;
            if (a = (e.flags & 128) !== 0,
            u = l.rendering,
            u === null)
                if (a)
                    qa(l, !1);
                else {
                    if (wt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (u = cl(t),
                            u !== null) {
                                for (e.flags |= 128,
                                qa(l, !1),
                                t = u.updateQueue,
                                e.updateQueue = t,
                                pl(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    Qf(n, t),
                                    n = n.sibling;
                                return k(Xt, Xt.current & 1 | 2),
                                e.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && He() > vl && (e.flags |= 128,
                    a = !0,
                    qa(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!a)
                    if (t = cl(u),
                    t !== null) {
                        if (e.flags |= 128,
                        a = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        pl(e, t),
                        qa(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !u.alternate && !yt)
                            return Nt(e),
                            null
                    } else
                        2 * He() - l.renderingStartTime > vl && n !== 536870912 && (e.flags |= 128,
                        a = !0,
                        qa(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (u.sibling = e.child,
                e.child = u) : (t = l.last,
                t !== null ? t.sibling = u : e.child = u,
                l.last = u)
            }
            return l.tail !== null ? (e = l.tail,
            l.rendering = e,
            l.tail = e.sibling,
            l.renderingStartTime = He(),
            e.sibling = null,
            t = Xt.current,
            k(Xt, a ? t & 1 | 2 : t & 1),
            e) : (Nt(e),
            null);
        case 22:
        case 23:
            return an(e),
            ir(),
            a = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192),
            a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Nt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Nt(e),
            n = e.updateQueue,
            n !== null && pl(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            a = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            a !== n && (e.flags |= 2048),
            t !== null && Q(ni),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            en(Gt),
            Nt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, e.tag))
    }
    function yv(t, e) {
        switch (Xo(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return en(Gt),
            hn(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Es(e),
            null;
        case 13:
            if (an(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(r(340));
                ja()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return Q(Xt),
            null;
        case 4:
            return hn(),
            null;
        case 10:
            return en(e.type),
            null;
        case 22:
        case 23:
            return an(e),
            ir(),
            t !== null && Q(ni),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return en(Gt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function vh(t, e) {
        switch (Xo(e),
        e.tag) {
        case 3:
            en(Gt),
            hn();
            break;
        case 26:
        case 27:
        case 5:
            Es(e);
            break;
        case 4:
            hn();
            break;
        case 13:
            an(e);
            break;
        case 19:
            Q(Xt);
            break;
        case 10:
            en(e.type);
            break;
        case 22:
        case 23:
            an(e),
            ir(),
            t !== null && Q(ni);
            break;
        case 24:
            en(Gt)
        }
    }
    function Ya(t, e) {
        try {
            var n = e.updateQueue
              , a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var l = a.next;
                n = l;
                do {
                    if ((n.tag & t) === t) {
                        a = void 0;
                        var u = n.create
                          , h = n.inst;
                        a = u(),
                        h.destroy = a
                    }
                    n = n.next
                } while (n !== l)
            }
        } catch (v) {
            At(e, e.return, v)
        }
    }
    function jn(t, e, n) {
        try {
            var a = e.updateQueue
              , l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var u = l.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        var h = a.inst
                          , v = h.destroy;
                        if (v !== void 0) {
                            h.destroy = void 0,
                            l = e;
                            var x = n
                              , D = v;
                            try {
                                D()
                            } catch (O) {
                                At(l, x, O)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (O) {
            At(e, e.return, O)
        }
    }
    function Sh(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                ld(e, n)
            } catch (a) {
                At(t, t.return, a)
            }
        }
    }
    function bh(t, e, n) {
        n.props = ai(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (a) {
            At(t, e, a)
        }
    }
    function Ga(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var a = t.stateNode;
                    break;
                case 30:
                    a = t.stateNode;
                    break;
                default:
                    a = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(a) : n.current = a
            }
        } catch (l) {
            At(t, e, l)
        }
    }
    function Ge(t, e) {
        var n = t.ref
          , a = t.refCleanup;
        if (n !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (l) {
                    At(t, e, l)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (l) {
                    At(t, e, l)
                }
            else
                n.current = null
    }
    function xh(t) {
        var e = t.type
          , n = t.memoizedProps
          , a = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && a.focus();
                break t;
            case "img":
                n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
            }
        } catch (l) {
            At(t, t.return, l)
        }
    }
    function Or(t, e, n) {
        try {
            var a = t.stateNode;
            Bv(a, t.type, n, e),
            a[le] = e
        } catch (l) {
            At(t, t.return, l)
        }
    }
    function Th(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && wn(t.type) || t.tag === 4
    }
    function wr(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Th(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && wn(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function zr(t, e, n) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = Dl));
        else if (a !== 4 && (a === 27 && wn(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (zr(t, e, n),
            t = t.sibling; t !== null; )
                zr(t, e, n),
                t = t.sibling
    }
    function yl(t, e, n) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (a !== 4 && (a === 27 && wn(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (yl(t, e, n),
            t = t.sibling; t !== null; )
                yl(t, e, n),
                t = t.sibling
    }
    function Ah(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var a = t.type, l = e.attributes; l.length; )
                e.removeAttributeNode(l[0]);
            Wt(e, a, n),
            e[te] = t,
            e[le] = n
        } catch (u) {
            At(t, t.return, u)
        }
    }
    var on = !1
      , _t = !1
      , Vr = !1
      , jh = typeof WeakSet == "function" ? WeakSet : Set
      , Zt = null;
    function gv(t, e) {
        if (t = t.containerInfo,
        au = Vl,
        t = Uf(t),
        wo(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var l = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var h = 0
                          , v = -1
                          , x = -1
                          , D = 0
                          , O = 0
                          , V = t
                          , C = null;
                        e: for (; ; ) {
                            for (var R; V !== n || l !== 0 && V.nodeType !== 3 || (v = h + l),
                            V !== u || a !== 0 && V.nodeType !== 3 || (x = h + a),
                            V.nodeType === 3 && (h += V.nodeValue.length),
                            (R = V.firstChild) !== null; )
                                C = V,
                                V = R;
                            for (; ; ) {
                                if (V === t)
                                    break e;
                                if (C === n && ++D === l && (v = h),
                                C === u && ++O === a && (x = h),
                                (R = V.nextSibling) !== null)
                                    break;
                                V = C,
                                C = V.parentNode
                            }
                            V = R
                        }
                        n = v === -1 || x === -1 ? null : {
                            start: v,
                            end: x
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (su = {
            focusedElem: t,
            selectionRange: n
        },
        Vl = !1,
        Zt = e; Zt !== null; )
            if (e = Zt,
            t = e.child,
            (e.subtreeFlags & 1024) !== 0 && t !== null)
                t.return = e,
                Zt = t;
            else
                for (; Zt !== null; ) {
                    switch (e = Zt,
                    u = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            n = e,
                            l = u.memoizedProps,
                            u = u.memoizedState,
                            a = n.stateNode;
                            try {
                                var et = ai(n.type, l, n.elementType === n.type);
                                t = a.getSnapshotBeforeUpdate(et, u),
                                a.__reactInternalSnapshotBeforeUpdate = t
                            } catch (I) {
                                At(n, n.return, I)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                ru(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    ru(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Zt = t;
                        break
                    }
                    Zt = e.return
                }
    }
    function Mh(t, e, n) {
        var a = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            Mn(t, n),
            a & 4 && Ya(5, n);
            break;
        case 1:
            if (Mn(t, n),
            a & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (h) {
                        At(n, n.return, h)
                    }
                else {
                    var l = ai(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (h) {
                        At(n, n.return, h)
                    }
                }
            a & 64 && Sh(n),
            a & 512 && Ga(n, n.return);
            break;
        case 3:
            if (Mn(t, n),
            a & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    ld(t, e)
                } catch (h) {
                    At(n, n.return, h)
                }
            }
            break;
        case 27:
            e === null && a & 4 && Ah(n);
        case 26:
        case 5:
            Mn(t, n),
            e === null && a & 4 && xh(n),
            a & 512 && Ga(n, n.return);
            break;
        case 12:
            Mn(t, n);
            break;
        case 13:
            Mn(t, n),
            a & 4 && Nh(t, n),
            a & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = Ev.bind(null, n),
            kv(t, n))));
            break;
        case 22:
            if (a = n.memoizedState !== null || on,
            !a) {
                e = e !== null && e.memoizedState !== null || _t,
                l = on;
                var u = _t;
                on = a,
                (_t = e) && !u ? En(t, n, (n.subtreeFlags & 8772) !== 0) : Mn(t, n),
                on = l,
                _t = u
            }
            break;
        case 30:
            break;
        default:
            Mn(t, n)
        }
    }
    function Eh(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Eh(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && ho(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Dt = null
      , ue = !1;
    function rn(t, e, n) {
        for (n = n.child; n !== null; )
            Dh(t, e, n),
            n = n.sibling
    }
    function Dh(t, e, n) {
        if (he && typeof he.onCommitFiberUnmount == "function")
            try {
                he.onCommitFiberUnmount(ua, n)
            } catch {}
        switch (n.tag) {
        case 26:
            _t || Ge(n, e),
            rn(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            _t || Ge(n, e);
            var a = Dt
              , l = ue;
            wn(n.type) && (Dt = n.stateNode,
            ue = !1),
            rn(t, e, n),
            Wa(n.stateNode),
            Dt = a,
            ue = l;
            break;
        case 5:
            _t || Ge(n, e);
        case 6:
            if (a = Dt,
            l = ue,
            Dt = null,
            rn(t, e, n),
            Dt = a,
            ue = l,
            Dt !== null)
                if (ue)
                    try {
                        (Dt.nodeType === 9 ? Dt.body : Dt.nodeName === "HTML" ? Dt.ownerDocument.body : Dt).removeChild(n.stateNode)
                    } catch (u) {
                        At(n, e, u)
                    }
                else
                    try {
                        Dt.removeChild(n.stateNode)
                    } catch (u) {
                        At(n, e, u)
                    }
            break;
        case 18:
            Dt !== null && (ue ? (t = Dt,
            pm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            ss(t)) : pm(Dt, n.stateNode));
            break;
        case 4:
            a = Dt,
            l = ue,
            Dt = n.stateNode.containerInfo,
            ue = !0,
            rn(t, e, n),
            Dt = a,
            ue = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            _t || jn(2, n, e),
            _t || jn(4, n, e),
            rn(t, e, n);
            break;
        case 1:
            _t || (Ge(n, e),
            a = n.stateNode,
            typeof a.componentWillUnmount == "function" && bh(n, e, a)),
            rn(t, e, n);
            break;
        case 21:
            rn(t, e, n);
            break;
        case 22:
            _t = (a = _t) || n.memoizedState !== null,
            rn(t, e, n),
            _t = a;
            break;
        default:
            rn(t, e, n)
        }
    }
    function Nh(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                ss(t)
            } catch (n) {
                At(e, e.return, n)
            }
    }
    function vv(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new jh),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new jh),
            e;
        default:
            throw Error(r(435, t.tag))
        }
    }
    function Ur(t, e) {
        var n = vv(t);
        e.forEach(function(a) {
            var l = Dv.bind(null, t, a);
            n.has(a) || (n.add(a),
            a.then(l, l))
        })
    }
    function ge(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var a = 0; a < n.length; a++) {
                var l = n[a]
                  , u = t
                  , h = e
                  , v = h;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (wn(v.type)) {
                            Dt = v.stateNode,
                            ue = !1;
                            break t
                        }
                        break;
                    case 5:
                        Dt = v.stateNode,
                        ue = !1;
                        break t;
                    case 3:
                    case 4:
                        Dt = v.stateNode.containerInfo,
                        ue = !0;
                        break t
                    }
                    v = v.return
                }
                if (Dt === null)
                    throw Error(r(160));
                Dh(u, h, l),
                Dt = null,
                ue = !1,
                u = l.alternate,
                u !== null && (u.return = null),
                l.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null; )
                Ch(e, t),
                e = e.sibling
    }
    var Ue = null;
    function Ch(t, e) {
        var n = t.alternate
          , a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ge(e, t),
            ve(t),
            a & 4 && (jn(3, t, t.return),
            Ya(3, t),
            jn(5, t, t.return));
            break;
        case 1:
            ge(e, t),
            ve(t),
            a & 512 && (_t || n === null || Ge(n, n.return)),
            a & 64 && on && (t = t.updateQueue,
            t !== null && (a = t.callbacks,
            a !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
            break;
        case 26:
            var l = Ue;
            if (ge(e, t),
            ve(t),
            a & 512 && (_t || n === null || Ge(n, n.return)),
            a & 4) {
                var u = n !== null ? n.memoizedState : null;
                if (a = t.memoizedState,
                n === null)
                    if (a === null)
                        if (t.stateNode === null) {
                            t: {
                                a = t.type,
                                n = t.memoizedProps,
                                l = l.ownerDocument || l;
                                e: switch (a) {
                                case "title":
                                    u = l.getElementsByTagName("title")[0],
                                    (!u || u[da] || u[te] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = l.createElement(a),
                                    l.head.insertBefore(u, l.querySelector("head > title"))),
                                    Wt(u, a, n),
                                    u[te] = t,
                                    kt(u),
                                    a = u;
                                    break t;
                                case "link":
                                    var h = Am("link", "href", l).get(a + (n.href || ""));
                                    if (h) {
                                        for (var v = 0; v < h.length; v++)
                                            if (u = h[v],
                                            u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                h.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = l.createElement(a),
                                    Wt(u, a, n),
                                    l.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (h = Am("meta", "content", l).get(a + (n.content || ""))) {
                                        for (v = 0; v < h.length; v++)
                                            if (u = h[v],
                                            u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                h.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = l.createElement(a),
                                    Wt(u, a, n),
                                    l.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(r(468, a))
                                }
                                u[te] = t,
                                kt(u),
                                a = u
                            }
                            t.stateNode = a
                        } else
                            jm(l, t.type, t.stateNode);
                    else
                        t.stateNode = Tm(l, a, t.memoizedProps);
                else
                    u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : u.count--,
                    a === null ? jm(l, t.type, t.stateNode) : Tm(l, a, t.memoizedProps)) : a === null && t.stateNode !== null && Or(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            ge(e, t),
            ve(t),
            a & 512 && (_t || n === null || Ge(n, n.return)),
            n !== null && a & 4 && Or(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (ge(e, t),
            ve(t),
            a & 512 && (_t || n === null || Ge(n, n.return)),
            t.flags & 32) {
                l = t.stateNode;
                try {
                    xi(l, "")
                } catch (R) {
                    At(t, t.return, R)
                }
            }
            a & 4 && t.stateNode != null && (l = t.memoizedProps,
            Or(t, l, n !== null ? n.memoizedProps : l)),
            a & 1024 && (Vr = !0);
            break;
        case 6:
            if (ge(e, t),
            ve(t),
            a & 4) {
                if (t.stateNode === null)
                    throw Error(r(162));
                a = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = a
                } catch (R) {
                    At(t, t.return, R)
                }
            }
            break;
        case 3:
            if (Ol = null,
            l = Ue,
            Ue = Cl(e.containerInfo),
            ge(e, t),
            Ue = l,
            ve(t),
            a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    ss(e.containerInfo)
                } catch (R) {
                    At(t, t.return, R)
                }
            Vr && (Vr = !1,
            Rh(t));
            break;
        case 4:
            a = Ue,
            Ue = Cl(t.stateNode.containerInfo),
            ge(e, t),
            ve(t),
            Ue = a;
            break;
        case 12:
            ge(e, t),
            ve(t);
            break;
        case 13:
            ge(e, t),
            ve(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Yr = He()),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Ur(t, a)));
            break;
        case 22:
            l = t.memoizedState !== null;
            var x = n !== null && n.memoizedState !== null
              , D = on
              , O = _t;
            if (on = D || l,
            _t = O || x,
            ge(e, t),
            _t = O,
            on = D,
            ve(t),
            a & 8192)
                t: for (e = t.stateNode,
                e._visibility = l ? e._visibility & -2 : e._visibility | 1,
                l && (n === null || x || on || _t || si(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            x = n = e;
                            try {
                                if (u = x.stateNode,
                                l)
                                    h = u.style,
                                    typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    v = x.stateNode;
                                    var V = x.memoizedProps.style
                                      , C = V != null && V.hasOwnProperty("display") ? V.display : null;
                                    v.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim()
                                }
                            } catch (R) {
                                At(x, x.return, R)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            x = e;
                            try {
                                x.stateNode.nodeValue = l ? "" : x.memoizedProps
                            } catch (R) {
                                At(x, x.return, R)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a & 4 && (a = t.updateQueue,
            a !== null && (n = a.retryQueue,
            n !== null && (a.retryQueue = null,
            Ur(t, n))));
            break;
        case 19:
            ge(e, t),
            ve(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Ur(t, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ge(e, t),
            ve(t)
        }
    }
    function ve(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, a = t.return; a !== null; ) {
                    if (Th(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (n == null)
                    throw Error(r(160));
                switch (n.tag) {
                case 27:
                    var l = n.stateNode
                      , u = wr(t);
                    yl(t, u, l);
                    break;
                case 5:
                    var h = n.stateNode;
                    n.flags & 32 && (xi(h, ""),
                    n.flags &= -33);
                    var v = wr(t);
                    yl(t, v, h);
                    break;
                case 3:
                case 4:
                    var x = n.stateNode.containerInfo
                      , D = wr(t);
                    zr(t, D, x);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (O) {
                At(t, t.return, O)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function Rh(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                Rh(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function Mn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Mh(t, e.alternate, e),
                e = e.sibling
    }
    function si(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                jn(4, e, e.return),
                si(e);
                break;
            case 1:
                Ge(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && bh(e, e.return, n),
                si(e);
                break;
            case 27:
                Wa(e.stateNode);
            case 26:
            case 5:
                Ge(e, e.return),
                si(e);
                break;
            case 22:
                e.memoizedState === null && si(e);
                break;
            case 30:
                si(e);
                break;
            default:
                si(e)
            }
            t = t.sibling
        }
    }
    function En(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var a = e.alternate
              , l = t
              , u = e
              , h = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                En(l, u, n),
                Ya(4, u);
                break;
            case 1:
                if (En(l, u, n),
                a = u,
                l = a.stateNode,
                typeof l.componentDidMount == "function")
                    try {
                        l.componentDidMount()
                    } catch (D) {
                        At(a, a.return, D)
                    }
                if (a = u,
                l = a.updateQueue,
                l !== null) {
                    var v = a.stateNode;
                    try {
                        var x = l.shared.hiddenCallbacks;
                        if (x !== null)
                            for (l.shared.hiddenCallbacks = null,
                            l = 0; l < x.length; l++)
                                sd(x[l], v)
                    } catch (D) {
                        At(a, a.return, D)
                    }
                }
                n && h & 64 && Sh(u),
                Ga(u, u.return);
                break;
            case 27:
                Ah(u);
            case 26:
            case 5:
                En(l, u, n),
                n && a === null && h & 4 && xh(u),
                Ga(u, u.return);
                break;
            case 12:
                En(l, u, n);
                break;
            case 13:
                En(l, u, n),
                n && h & 4 && Nh(l, u);
                break;
            case 22:
                u.memoizedState === null && En(l, u, n),
                Ga(u, u.return);
                break;
            case 30:
                break;
            default:
                En(l, u, n)
            }
            e = e.sibling
        }
    }
    function _r(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && Da(n))
    }
    function Br(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && Da(t))
    }
    function Xe(t, e, n, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Oh(t, e, n, a),
                e = e.sibling
    }
    function Oh(t, e, n, a) {
        var l = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Xe(t, e, n, a),
            l & 2048 && Ya(9, e);
            break;
        case 1:
            Xe(t, e, n, a);
            break;
        case 3:
            Xe(t, e, n, a),
            l & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && Da(t)));
            break;
        case 12:
            if (l & 2048) {
                Xe(t, e, n, a),
                t = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , h = u.id
                      , v = u.onPostCommit;
                    typeof v == "function" && v(h, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (x) {
                    At(e, e.return, x)
                }
            } else
                Xe(t, e, n, a);
            break;
        case 13:
            Xe(t, e, n, a);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            h = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? Xe(t, e, n, a) : Xa(t, e) : u._visibility & 2 ? Xe(t, e, n, a) : (u._visibility |= 2,
            qi(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
            l & 2048 && _r(h, e);
            break;
        case 24:
            Xe(t, e, n, a),
            l & 2048 && Br(e.alternate, e);
            break;
        default:
            Xe(t, e, n, a)
        }
    }
    function qi(t, e, n, a, l) {
        for (l = l && (e.subtreeFlags & 10256) !== 0,
        e = e.child; e !== null; ) {
            var u = t
              , h = e
              , v = n
              , x = a
              , D = h.flags;
            switch (h.tag) {
            case 0:
            case 11:
            case 15:
                qi(u, h, v, x, l),
                Ya(8, h);
                break;
            case 23:
                break;
            case 22:
                var O = h.stateNode;
                h.memoizedState !== null ? O._visibility & 2 ? qi(u, h, v, x, l) : Xa(u, h) : (O._visibility |= 2,
                qi(u, h, v, x, l)),
                l && D & 2048 && _r(h.alternate, h);
                break;
            case 24:
                qi(u, h, v, x, l),
                l && D & 2048 && Br(h.alternate, h);
                break;
            default:
                qi(u, h, v, x, l)
            }
            e = e.sibling
        }
    }
    function Xa(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , a = e
                  , l = a.flags;
                switch (a.tag) {
                case 22:
                    Xa(n, a),
                    l & 2048 && _r(a.alternate, a);
                    break;
                case 24:
                    Xa(n, a),
                    l & 2048 && Br(a.alternate, a);
                    break;
                default:
                    Xa(n, a)
                }
                e = e.sibling
            }
    }
    var ka = 8192;
    function Yi(t) {
        if (t.subtreeFlags & ka)
            for (t = t.child; t !== null; )
                wh(t),
                t = t.sibling
    }
    function wh(t) {
        switch (t.tag) {
        case 26:
            Yi(t),
            t.flags & ka && t.memoizedState !== null && i1(Ue, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Yi(t);
            break;
        case 3:
        case 4:
            var e = Ue;
            Ue = Cl(t.stateNode.containerInfo),
            Yi(t),
            Ue = e;
            break;
        case 22:
            t.memoizedState === null && (e = t.alternate,
            e !== null && e.memoizedState !== null ? (e = ka,
            ka = 16777216,
            Yi(t),
            ka = e) : Yi(t));
            break;
        default:
            Yi(t)
        }
    }
    function zh(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Qa(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    Zt = a,
                    Uh(a, t)
                }
            zh(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Vh(t),
                t = t.sibling
    }
    function Vh(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Qa(t),
            t.flags & 2048 && jn(9, t, t.return);
            break;
        case 3:
            Qa(t);
            break;
        case 12:
            Qa(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            gl(t)) : Qa(t);
            break;
        default:
            Qa(t)
        }
    }
    function gl(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    Zt = a,
                    Uh(a, t)
                }
            zh(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                jn(8, e, e.return),
                gl(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                gl(e));
                break;
            default:
                gl(e)
            }
            t = t.sibling
        }
    }
    function Uh(t, e) {
        for (; Zt !== null; ) {
            var n = Zt;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                jn(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var a = n.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Da(n.memoizedState.cache)
            }
            if (a = n.child,
            a !== null)
                a.return = n,
                Zt = a;
            else
                t: for (n = t; Zt !== null; ) {
                    a = Zt;
                    var l = a.sibling
                      , u = a.return;
                    if (Eh(a),
                    a === n) {
                        Zt = null;
                        break t
                    }
                    if (l !== null) {
                        l.return = u,
                        Zt = l;
                        break t
                    }
                    Zt = u
                }
        }
    }
    var Sv = {
        getCacheForType: function(t) {
            var e = ee(Gt)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        }
    }
      , bv = typeof WeakMap == "function" ? WeakMap : Map
      , gt = 0
      , jt = null
      , ut = null
      , dt = 0
      , vt = 0
      , Se = null
      , Dn = !1
      , Gi = !1
      , Lr = !1
      , un = 0
      , wt = 0
      , Nn = 0
      , li = 0
      , Hr = 0
      , Ce = 0
      , Xi = 0
      , Za = null
      , ce = null
      , qr = !1
      , Yr = 0
      , vl = 1 / 0
      , Sl = null
      , Cn = null
      , Ft = 0
      , Rn = null
      , ki = null
      , Qi = 0
      , Gr = 0
      , Xr = null
      , _h = null
      , Ka = 0
      , kr = null;
    function be() {
        if ((gt & 2) !== 0 && dt !== 0)
            return dt & -dt;
        if (w.T !== null) {
            var t = wi;
            return t !== 0 ? t : Wr()
        }
        return Wc()
    }
    function Bh() {
        Ce === 0 && (Ce = (dt & 536870912) === 0 || yt ? Kc() : 536870912);
        var t = Ne.current;
        return t !== null && (t.flags |= 32),
        Ce
    }
    function xe(t, e, n) {
        (t === jt && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null) && (Zi(t, 0),
        On(t, dt, Ce, !1)),
        fa(t, n),
        ((gt & 2) === 0 || t !== jt) && (t === jt && ((gt & 2) === 0 && (li |= n),
        wt === 4 && On(t, dt, Ce, !1)),
        ke(t))
    }
    function Lh(t, e, n) {
        if ((gt & 6) !== 0)
            throw Error(r(327));
        var a = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || ca(t, e)
          , l = a ? Av(t, e) : Kr(t, e, !0)
          , u = a;
        do {
            if (l === 0) {
                Gi && !a && On(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                u && !xv(n)) {
                    l = Kr(t, e, !1),
                    u = !1;
                    continue
                }
                if (l === 2) {
                    if (u = e,
                    t.errorRecoveryDisabledLanes & u)
                        var h = 0;
                    else
                        h = t.pendingLanes & -536870913,
                        h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        e = h;
                        t: {
                            var v = t;
                            l = Za;
                            var x = v.current.memoizedState.isDehydrated;
                            if (x && (Zi(v, h).flags |= 256),
                            h = Kr(v, h, !1),
                            h !== 2) {
                                if (Lr && !x) {
                                    v.errorRecoveryDisabledLanes |= u,
                                    li |= u,
                                    l = 4;
                                    break t
                                }
                                u = ce,
                                ce = l,
                                u !== null && (ce === null ? ce = u : ce.push.apply(ce, u))
                            }
                            l = h
                        }
                        if (u = !1,
                        l !== 2)
                            continue
                    }
                }
                if (l === 1) {
                    Zi(t, 0),
                    On(t, e, 0, !0);
                    break
                }
                t: {
                    switch (a = t,
                    u = l,
                    u) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        On(a, e, Ce, !Dn);
                        break t;
                    case 2:
                        ce = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((e & 62914560) === e && (l = Yr + 300 - He(),
                    10 < l)) {
                        if (On(a, e, Ce, !Dn),
                        Rs(a, 0, !0) !== 0)
                            break t;
                        a.timeoutHandle = hm(Hh.bind(null, a, n, ce, Sl, qr, e, Ce, li, Xi, Dn, u, 2, -0, 0), l);
                        break t
                    }
                    Hh(a, n, ce, Sl, qr, e, Ce, li, Xi, Dn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        ke(t)
    }
    function Hh(t, e, n, a, l, u, h, v, x, D, O, V, C, R) {
        if (t.timeoutHandle = -1,
        V = e.subtreeFlags,
        (V & 8192 || (V & 16785408) === 16785408) && (ts = {
            stylesheets: null,
            count: 0,
            unsuspend: n1
        },
        wh(e),
        V = a1(),
        V !== null)) {
            t.cancelPendingCommit = V(Zh.bind(null, t, e, u, n, a, l, h, v, x, O, 1, C, R)),
            On(t, u, h, !D);
            return
        }
        Zh(t, e, u, n, a, l, h, v, x)
    }
    function xv(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var a = 0; a < n.length; a++) {
                    var l = n[a]
                      , u = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!pe(u(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function On(t, e, n, a) {
        e &= ~Hr,
        e &= ~li,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        a && (t.warmLanes |= e),
        a = t.expirationTimes;
        for (var l = e; 0 < l; ) {
            var u = 31 - me(l)
              , h = 1 << u;
            a[u] = -1,
            l &= ~h
        }
        n !== 0 && Jc(t, n, e)
    }
    function bl() {
        return (gt & 6) === 0 ? (Pa(0),
        !1) : !0
    }
    function Qr() {
        if (ut !== null) {
            if (vt === 0)
                var t = ut.return;
            else
                t = ut,
                tn = ti = null,
                rr(t),
                Li = null,
                La = 0,
                t = ut;
            for (; t !== null; )
                vh(t.alternate, t),
                t = t.return;
            ut = null
        }
    }
    function Zi(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        Hv(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        Qr(),
        jt = t,
        ut = n = We(t.current, null),
        dt = e,
        vt = 0,
        Se = null,
        Dn = !1,
        Gi = ca(t, e),
        Lr = !1,
        Xi = Ce = Hr = li = Nn = wt = 0,
        ce = Za = null,
        qr = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements,
            a &= e; 0 < a; ) {
                var l = 31 - me(a)
                  , u = 1 << l;
                e |= t[l],
                a &= ~u
            }
        return un = e,
        Gs(),
        n
    }
    function qh(t, e) {
        ot = null,
        w.H = ol,
        e === Ca || e === Ws ? (e = id(),
        vt = 3) : e === td ? (e = id(),
        vt = 4) : vt = e === ah ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Se = e,
        ut === null && (wt = 1,
        dl(t, je(e, t.current)))
    }
    function Yh() {
        var t = w.H;
        return w.H = ol,
        t === null ? ol : t
    }
    function Gh() {
        var t = w.A;
        return w.A = Sv,
        t
    }
    function Zr() {
        wt = 4,
        Dn || (dt & 4194048) !== dt && Ne.current !== null || (Gi = !0),
        (Nn & 134217727) === 0 && (li & 134217727) === 0 || jt === null || On(jt, dt, Ce, !1)
    }
    function Kr(t, e, n) {
        var a = gt;
        gt |= 2;
        var l = Yh()
          , u = Gh();
        (jt !== t || dt !== e) && (Sl = null,
        Zi(t, e)),
        e = !1;
        var h = wt;
        t: do
            try {
                if (vt !== 0 && ut !== null) {
                    var v = ut
                      , x = Se;
                    switch (vt) {
                    case 8:
                        Qr(),
                        h = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Ne.current === null && (e = !0);
                        var D = vt;
                        if (vt = 0,
                        Se = null,
                        Ki(t, v, x, D),
                        n && Gi) {
                            h = 0;
                            break t
                        }
                        break;
                    default:
                        D = vt,
                        vt = 0,
                        Se = null,
                        Ki(t, v, x, D)
                    }
                }
                Tv(),
                h = wt;
                break
            } catch (O) {
                qh(t, O)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        tn = ti = null,
        gt = a,
        w.H = l,
        w.A = u,
        ut === null && (jt = null,
        dt = 0,
        Gs()),
        h
    }
    function Tv() {
        for (; ut !== null; )
            Xh(ut)
    }
    function Av(t, e) {
        var n = gt;
        gt |= 2;
        var a = Yh()
          , l = Gh();
        jt !== t || dt !== e ? (Sl = null,
        vl = He() + 500,
        Zi(t, e)) : Gi = ca(t, e);
        t: do
            try {
                if (vt !== 0 && ut !== null) {
                    e = ut;
                    var u = Se;
                    e: switch (vt) {
                    case 1:
                        vt = 0,
                        Se = null,
                        Ki(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (ed(u)) {
                            vt = 0,
                            Se = null,
                            kh(e);
                            break
                        }
                        e = function() {
                            vt !== 2 && vt !== 9 || jt !== t || (vt = 7),
                            ke(t)
                        }
                        ,
                        u.then(e, e);
                        break t;
                    case 3:
                        vt = 7;
                        break t;
                    case 4:
                        vt = 5;
                        break t;
                    case 7:
                        ed(u) ? (vt = 0,
                        Se = null,
                        kh(e)) : (vt = 0,
                        Se = null,
                        Ki(t, e, u, 7));
                        break;
                    case 5:
                        var h = null;
                        switch (ut.tag) {
                        case 26:
                            h = ut.memoizedState;
                        case 5:
                        case 27:
                            var v = ut;
                            if (!h || Mm(h)) {
                                vt = 0,
                                Se = null;
                                var x = v.sibling;
                                if (x !== null)
                                    ut = x;
                                else {
                                    var D = v.return;
                                    D !== null ? (ut = D,
                                    xl(D)) : ut = null
                                }
                                break e
                            }
                        }
                        vt = 0,
                        Se = null,
                        Ki(t, e, u, 5);
                        break;
                    case 6:
                        vt = 0,
                        Se = null,
                        Ki(t, e, u, 6);
                        break;
                    case 8:
                        Qr(),
                        wt = 6;
                        break t;
                    default:
                        throw Error(r(462))
                    }
                }
                jv();
                break
            } catch (O) {
                qh(t, O)
            }
        while (!0);
        return tn = ti = null,
        w.H = a,
        w.A = l,
        gt = n,
        ut !== null ? 0 : (jt = null,
        dt = 0,
        Gs(),
        wt)
    }
    function jv() {
        for (; ut !== null && !Z0(); )
            Xh(ut)
    }
    function Xh(t) {
        var e = yh(t.alternate, t, un);
        t.memoizedProps = t.pendingProps,
        e === null ? xl(t) : ut = e
    }
    function kh(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = ch(n, e, e.pendingProps, e.type, void 0, dt);
            break;
        case 11:
            e = ch(n, e, e.pendingProps, e.type.render, e.ref, dt);
            break;
        case 5:
            rr(e);
        default:
            vh(n, e),
            e = ut = Qf(e, un),
            e = yh(n, e, un)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? xl(t) : ut = e
    }
    function Ki(t, e, n, a) {
        tn = ti = null,
        rr(e),
        Li = null,
        La = 0;
        var l = e.return;
        try {
            if (hv(t, l, e, n, dt)) {
                wt = 1,
                dl(t, je(n, t.current)),
                ut = null;
                return
            }
        } catch (u) {
            if (l !== null)
                throw ut = l,
                u;
            wt = 1,
            dl(t, je(n, t.current)),
            ut = null;
            return
        }
        e.flags & 32768 ? (yt || a === 1 ? t = !0 : Gi || (dt & 536870912) !== 0 ? t = !1 : (Dn = t = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ne.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Qh(e, t)) : xl(e)
    }
    function xl(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Qh(e, Dn);
                return
            }
            t = e.return;
            var n = pv(e.alternate, e, un);
            if (n !== null) {
                ut = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                ut = e;
                return
            }
            ut = e = t
        } while (e !== null);
        wt === 0 && (wt = 5)
    }
    function Qh(t, e) {
        do {
            var n = yv(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                ut = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                ut = t;
                return
            }
            ut = t = n
        } while (t !== null);
        wt = 6,
        ut = null
    }
    function Zh(t, e, n, a, l, u, h, v, x) {
        t.cancelPendingCommit = null;
        do
            Tl();
        while (Ft !== 0);
        if ((gt & 6) !== 0)
            throw Error(r(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(r(177));
            if (u = e.lanes | e.childLanes,
            u |= Bo,
            ng(t, n, u, h, v, x),
            t === jt && (ut = jt = null,
            dt = 0),
            ki = e,
            Rn = t,
            Qi = n,
            Gr = u,
            Xr = l,
            _h = a,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            Nv(Ds, function() {
                return Wh(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            a = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || a) {
                a = w.T,
                w.T = null,
                l = q.p,
                q.p = 2,
                h = gt,
                gt |= 4;
                try {
                    gv(t, e, n)
                } finally {
                    gt = h,
                    q.p = l,
                    w.T = a
                }
            }
            Ft = 1,
            Kh(),
            Ph(),
            Jh()
        }
    }
    function Kh() {
        if (Ft === 1) {
            Ft = 0;
            var t = Rn
              , e = ki
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = w.T,
                w.T = null;
                var a = q.p;
                q.p = 2;
                var l = gt;
                gt |= 4;
                try {
                    Ch(e, t);
                    var u = su
                      , h = Uf(t.containerInfo)
                      , v = u.focusedElem
                      , x = u.selectionRange;
                    if (h !== v && v && v.ownerDocument && Vf(v.ownerDocument.documentElement, v)) {
                        if (x !== null && wo(v)) {
                            var D = x.start
                              , O = x.end;
                            if (O === void 0 && (O = D),
                            "selectionStart"in v)
                                v.selectionStart = D,
                                v.selectionEnd = Math.min(O, v.value.length);
                            else {
                                var V = v.ownerDocument || document
                                  , C = V && V.defaultView || window;
                                if (C.getSelection) {
                                    var R = C.getSelection()
                                      , et = v.textContent.length
                                      , I = Math.min(x.start, et)
                                      , Tt = x.end === void 0 ? I : Math.min(x.end, et);
                                    !R.extend && I > Tt && (h = Tt,
                                    Tt = I,
                                    I = h);
                                    var M = zf(v, I)
                                      , j = zf(v, Tt);
                                    if (M && j && (R.rangeCount !== 1 || R.anchorNode !== M.node || R.anchorOffset !== M.offset || R.focusNode !== j.node || R.focusOffset !== j.offset)) {
                                        var E = V.createRange();
                                        E.setStart(M.node, M.offset),
                                        R.removeAllRanges(),
                                        I > Tt ? (R.addRange(E),
                                        R.extend(j.node, j.offset)) : (E.setEnd(j.node, j.offset),
                                        R.addRange(E))
                                    }
                                }
                            }
                        }
                        for (V = [],
                        R = v; R = R.parentNode; )
                            R.nodeType === 1 && V.push({
                                element: R,
                                left: R.scrollLeft,
                                top: R.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < V.length; v++) {
                            var z = V[v];
                            z.element.scrollLeft = z.left,
                            z.element.scrollTop = z.top
                        }
                    }
                    Vl = !!au,
                    su = au = null
                } finally {
                    gt = l,
                    q.p = a,
                    w.T = n
                }
            }
            t.current = e,
            Ft = 2
        }
    }
    function Ph() {
        if (Ft === 2) {
            Ft = 0;
            var t = Rn
              , e = ki
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = w.T,
                w.T = null;
                var a = q.p;
                q.p = 2;
                var l = gt;
                gt |= 4;
                try {
                    Mh(t, e.alternate, e)
                } finally {
                    gt = l,
                    q.p = a,
                    w.T = n
                }
            }
            Ft = 3
        }
    }
    function Jh() {
        if (Ft === 4 || Ft === 3) {
            Ft = 0,
            K0();
            var t = Rn
              , e = ki
              , n = Qi
              , a = _h;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ft = 5 : (Ft = 0,
            ki = Rn = null,
            Fh(t, t.pendingLanes));
            var l = t.pendingLanes;
            if (l === 0 && (Cn = null),
            co(n),
            e = e.stateNode,
            he && typeof he.onCommitFiberRoot == "function")
                try {
                    he.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                e = w.T,
                l = q.p,
                q.p = 2,
                w.T = null;
                try {
                    for (var u = t.onRecoverableError, h = 0; h < a.length; h++) {
                        var v = a[h];
                        u(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    w.T = e,
                    q.p = l
                }
            }
            (Qi & 3) !== 0 && Tl(),
            ke(t),
            l = t.pendingLanes,
            (n & 4194090) !== 0 && (l & 42) !== 0 ? t === kr ? Ka++ : (Ka = 0,
            kr = t) : Ka = 0,
            Pa(0)
        }
    }
    function Fh(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        Da(e)))
    }
    function Tl(t) {
        return Kh(),
        Ph(),
        Jh(),
        Wh()
    }
    function Wh() {
        if (Ft !== 5)
            return !1;
        var t = Rn
          , e = Gr;
        Gr = 0;
        var n = co(Qi)
          , a = w.T
          , l = q.p;
        try {
            q.p = 32 > n ? 32 : n,
            w.T = null,
            n = Xr,
            Xr = null;
            var u = Rn
              , h = Qi;
            if (Ft = 0,
            ki = Rn = null,
            Qi = 0,
            (gt & 6) !== 0)
                throw Error(r(331));
            var v = gt;
            if (gt |= 4,
            Vh(u.current),
            Oh(u, u.current, h, n),
            gt = v,
            Pa(0, !1),
            he && typeof he.onPostCommitFiberRoot == "function")
                try {
                    he.onPostCommitFiberRoot(ua, u)
                } catch {}
            return !0
        } finally {
            q.p = l,
            w.T = a,
            Fh(t, e)
        }
    }
    function $h(t, e, n) {
        e = je(n, e),
        e = Tr(t.stateNode, e, 2),
        t = bn(t, e, 2),
        t !== null && (fa(t, 2),
        ke(t))
    }
    function At(t, e, n) {
        if (t.tag === 3)
            $h(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    $h(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Cn === null || !Cn.has(a))) {
                        t = je(n, t),
                        n = nh(2),
                        a = bn(e, n, 2),
                        a !== null && (ih(n, a, e, t),
                        fa(a, 2),
                        ke(a));
                        break
                    }
                }
                e = e.return
            }
    }
    function Pr(t, e, n) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new bv;
            var l = new Set;
            a.set(e, l)
        } else
            l = a.get(e),
            l === void 0 && (l = new Set,
            a.set(e, l));
        l.has(n) || (Lr = !0,
        l.add(n),
        t = Mv.bind(null, t, e, n),
        e.then(t, t))
    }
    function Mv(t, e, n) {
        var a = t.pingCache;
        a !== null && a.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        jt === t && (dt & n) === n && (wt === 4 || wt === 3 && (dt & 62914560) === dt && 300 > He() - Yr ? (gt & 2) === 0 && Zi(t, 0) : Hr |= n,
        Xi === dt && (Xi = 0)),
        ke(t)
    }
    function Ih(t, e) {
        e === 0 && (e = Pc()),
        t = Ni(t, e),
        t !== null && (fa(t, e),
        ke(t))
    }
    function Ev(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        Ih(t, n)
    }
    function Dv(t, e) {
        var n = 0;
        switch (t.tag) {
        case 13:
            var a = t.stateNode
              , l = t.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            a = t.stateNode;
            break;
        case 22:
            a = t.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        a !== null && a.delete(e),
        Ih(t, n)
    }
    function Nv(t, e) {
        return lo(t, e)
    }
    var Al = null
      , Pi = null
      , Jr = !1
      , jl = !1
      , Fr = !1
      , oi = 0;
    function ke(t) {
        t !== Pi && t.next === null && (Pi === null ? Al = Pi = t : Pi = Pi.next = t),
        jl = !0,
        Jr || (Jr = !0,
        Rv())
    }
    function Pa(t, e) {
        if (!Fr && jl) {
            Fr = !0;
            do
                for (var n = !1, a = Al; a !== null; ) {
                    if (t !== 0) {
                        var l = a.pendingLanes;
                        if (l === 0)
                            var u = 0;
                        else {
                            var h = a.suspendedLanes
                              , v = a.pingedLanes;
                            u = (1 << 31 - me(42 | t) + 1) - 1,
                            u &= l & ~(h & ~v),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0,
                        im(a, u))
                    } else
                        u = dt,
                        u = Rs(a, a === jt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || ca(a, u) || (n = !0,
                        im(a, u));
                    a = a.next
                }
            while (n);
            Fr = !1
        }
    }
    function Cv() {
        tm()
    }
    function tm() {
        jl = Jr = !1;
        var t = 0;
        oi !== 0 && (Lv() && (t = oi),
        oi = 0);
        for (var e = He(), n = null, a = Al; a !== null; ) {
            var l = a.next
              , u = em(a, e);
            u === 0 ? (a.next = null,
            n === null ? Al = l : n.next = l,
            l === null && (Pi = n)) : (n = a,
            (t !== 0 || (u & 3) !== 0) && (jl = !0)),
            a = l
        }
        Pa(t)
    }
    function em(t, e) {
        for (var n = t.suspendedLanes, a = t.pingedLanes, l = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var h = 31 - me(u)
              , v = 1 << h
              , x = l[h];
            x === -1 ? ((v & n) === 0 || (v & a) !== 0) && (l[h] = eg(v, e)) : x <= e && (t.expiredLanes |= v),
            u &= ~v
        }
        if (e = jt,
        n = dt,
        n = Rs(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a = t.callbackNode,
        n === 0 || t === e && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null)
            return a !== null && a !== null && oo(a),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || ca(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (a !== null && oo(a),
            co(n)) {
            case 2:
            case 8:
                n = Qc;
                break;
            case 32:
                n = Ds;
                break;
            case 268435456:
                n = Zc;
                break;
            default:
                n = Ds
            }
            return a = nm.bind(null, t),
            n = lo(n, a),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return a !== null && a !== null && oo(a),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function nm(t, e) {
        if (Ft !== 0 && Ft !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (Tl() && t.callbackNode !== n)
            return null;
        var a = dt;
        return a = Rs(t, t === jt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a === 0 ? null : (Lh(t, a, e),
        em(t, He()),
        t.callbackNode != null && t.callbackNode === n ? nm.bind(null, t) : null)
    }
    function im(t, e) {
        if (Tl())
            return null;
        Lh(t, e, !0)
    }
    function Rv() {
        qv(function() {
            (gt & 6) !== 0 ? lo(kc, Cv) : tm()
        })
    }
    function Wr() {
        return oi === 0 && (oi = Kc()),
        oi
    }
    function am(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Us("" + t)
    }
    function sm(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function Ov(t, e, n, a, l) {
        if (e === "submit" && n && n.stateNode === l) {
            var u = am((l[le] || null).action)
              , h = a.submitter;
            h && (e = (e = h[le] || null) ? am(e.formAction) : h.getAttribute("formAction"),
            e !== null && (u = e,
            h = null));
            var v = new Hs("action","action",null,a,l);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (oi !== 0) {
                                var x = h ? sm(l, h) : new FormData(l);
                                gr(n, {
                                    pending: !0,
                                    data: x,
                                    method: l.method,
                                    action: u
                                }, null, x)
                            }
                        } else
                            typeof u == "function" && (v.preventDefault(),
                            x = h ? sm(l, h) : new FormData(l),
                            gr(n, {
                                pending: !0,
                                data: x,
                                method: l.method,
                                action: u
                            }, u, x))
                    },
                    currentTarget: l
                }]
            })
        }
    }
    for (var $r = 0; $r < _o.length; $r++) {
        var Ir = _o[$r]
          , wv = Ir.toLowerCase()
          , zv = Ir[0].toUpperCase() + Ir.slice(1);
        Ve(wv, "on" + zv)
    }
    Ve(Lf, "onAnimationEnd"),
    Ve(Hf, "onAnimationIteration"),
    Ve(qf, "onAnimationStart"),
    Ve("dblclick", "onDoubleClick"),
    Ve("focusin", "onFocus"),
    Ve("focusout", "onBlur"),
    Ve(Fg, "onTransitionRun"),
    Ve(Wg, "onTransitionStart"),
    Ve($g, "onTransitionCancel"),
    Ve(Yf, "onTransitionEnd"),
    vi("onMouseEnter", ["mouseout", "mouseover"]),
    vi("onMouseLeave", ["mouseout", "mouseover"]),
    vi("onPointerEnter", ["pointerout", "pointerover"]),
    vi("onPointerLeave", ["pointerout", "pointerover"]),
    Qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ja = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Vv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));
    function lm(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var a = t[n]
              , l = a.event;
            a = a.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var h = a.length - 1; 0 <= h; h--) {
                        var v = a[h]
                          , x = v.instance
                          , D = v.currentTarget;
                        if (v = v.listener,
                        x !== u && l.isPropagationStopped())
                            break t;
                        u = v,
                        l.currentTarget = D;
                        try {
                            u(l)
                        } catch (O) {
                            fl(O)
                        }
                        l.currentTarget = null,
                        u = x
                    }
                else
                    for (h = 0; h < a.length; h++) {
                        if (v = a[h],
                        x = v.instance,
                        D = v.currentTarget,
                        v = v.listener,
                        x !== u && l.isPropagationStopped())
                            break t;
                        u = v,
                        l.currentTarget = D;
                        try {
                            u(l)
                        } catch (O) {
                            fl(O)
                        }
                        l.currentTarget = null,
                        u = x
                    }
            }
        }
    }
    function ct(t, e) {
        var n = e[fo];
        n === void 0 && (n = e[fo] = new Set);
        var a = t + "__bubble";
        n.has(a) || (om(e, t, 2, !1),
        n.add(a))
    }
    function tu(t, e, n) {
        var a = 0;
        e && (a |= 4),
        om(n, t, a, e)
    }
    var Ml = "_reactListening" + Math.random().toString(36).slice(2);
    function eu(t) {
        if (!t[Ml]) {
            t[Ml] = !0,
            Ic.forEach(function(n) {
                n !== "selectionchange" && (Vv.has(n) || tu(n, !1, t),
                tu(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Ml] || (e[Ml] = !0,
            tu("selectionchange", !1, e))
        }
    }
    function om(t, e, n, a) {
        switch (Om(e)) {
        case 2:
            var l = o1;
            break;
        case 8:
            l = r1;
            break;
        default:
            l = pu
        }
        n = l.bind(null, e, n, t),
        l = void 0,
        !Ao || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (l = !0),
        a ? l !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: l
        }) : t.addEventListener(e, n, !0) : l !== void 0 ? t.addEventListener(e, n, {
            passive: l
        }) : t.addEventListener(e, n, !1)
    }
    function nu(t, e, n, a, l) {
        var u = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
            t: for (; ; ) {
                if (a === null)
                    return;
                var h = a.tag;
                if (h === 3 || h === 4) {
                    var v = a.stateNode.containerInfo;
                    if (v === l)
                        break;
                    if (h === 4)
                        for (h = a.return; h !== null; ) {
                            var x = h.tag;
                            if ((x === 3 || x === 4) && h.stateNode.containerInfo === l)
                                return;
                            h = h.return
                        }
                    for (; v !== null; ) {
                        if (h = pi(v),
                        h === null)
                            return;
                        if (x = h.tag,
                        x === 5 || x === 6 || x === 26 || x === 27) {
                            a = u = h;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                a = a.return
            }
        mf(function() {
            var D = u
              , O = xo(n)
              , V = [];
            t: {
                var C = Gf.get(t);
                if (C !== void 0) {
                    var R = Hs
                      , et = t;
                    switch (t) {
                    case "keypress":
                        if (Bs(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        R = Ng;
                        break;
                    case "focusin":
                        et = "focus",
                        R = Do;
                        break;
                    case "focusout":
                        et = "blur",
                        R = Do;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        R = Do;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        R = gf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        R = yg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        R = Og;
                        break;
                    case Lf:
                    case Hf:
                    case qf:
                        R = Sg;
                        break;
                    case Yf:
                        R = zg;
                        break;
                    case "scroll":
                    case "scrollend":
                        R = mg;
                        break;
                    case "wheel":
                        R = Ug;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        R = xg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        R = Sf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        R = Bg
                    }
                    var I = (e & 4) !== 0
                      , Tt = !I && (t === "scroll" || t === "scrollend")
                      , M = I ? C !== null ? C + "Capture" : null : C;
                    I = [];
                    for (var j = D, E; j !== null; ) {
                        var z = j;
                        if (E = z.stateNode,
                        z = z.tag,
                        z !== 5 && z !== 26 && z !== 27 || E === null || M === null || (z = ma(j, M),
                        z != null && I.push(Fa(j, z, E))),
                        Tt)
                            break;
                        j = j.return
                    }
                    0 < I.length && (C = new R(C,et,null,n,O),
                    V.push({
                        event: C,
                        listeners: I
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (C = t === "mouseover" || t === "pointerover",
                    R = t === "mouseout" || t === "pointerout",
                    C && n !== bo && (et = n.relatedTarget || n.fromElement) && (pi(et) || et[mi]))
                        break t;
                    if ((R || C) && (C = O.window === O ? O : (C = O.ownerDocument) ? C.defaultView || C.parentWindow : window,
                    R ? (et = n.relatedTarget || n.toElement,
                    R = D,
                    et = et ? pi(et) : null,
                    et !== null && (Tt = m(et),
                    I = et.tag,
                    et !== Tt || I !== 5 && I !== 27 && I !== 6) && (et = null)) : (R = null,
                    et = D),
                    R !== et)) {
                        if (I = gf,
                        z = "onMouseLeave",
                        M = "onMouseEnter",
                        j = "mouse",
                        (t === "pointerout" || t === "pointerover") && (I = Sf,
                        z = "onPointerLeave",
                        M = "onPointerEnter",
                        j = "pointer"),
                        Tt = R == null ? C : ha(R),
                        E = et == null ? C : ha(et),
                        C = new I(z,j + "leave",R,n,O),
                        C.target = Tt,
                        C.relatedTarget = E,
                        z = null,
                        pi(O) === D && (I = new I(M,j + "enter",et,n,O),
                        I.target = E,
                        I.relatedTarget = Tt,
                        z = I),
                        Tt = z,
                        R && et)
                            e: {
                                for (I = R,
                                M = et,
                                j = 0,
                                E = I; E; E = Ji(E))
                                    j++;
                                for (E = 0,
                                z = M; z; z = Ji(z))
                                    E++;
                                for (; 0 < j - E; )
                                    I = Ji(I),
                                    j--;
                                for (; 0 < E - j; )
                                    M = Ji(M),
                                    E--;
                                for (; j--; ) {
                                    if (I === M || M !== null && I === M.alternate)
                                        break e;
                                    I = Ji(I),
                                    M = Ji(M)
                                }
                                I = null
                            }
                        else
                            I = null;
                        R !== null && rm(V, C, R, I, !1),
                        et !== null && Tt !== null && rm(V, Tt, et, I, !0)
                    }
                }
                t: {
                    if (C = D ? ha(D) : window,
                    R = C.nodeName && C.nodeName.toLowerCase(),
                    R === "select" || R === "input" && C.type === "file")
                        var Z = Df;
                    else if (Mf(C))
                        if (Nf)
                            Z = Kg;
                        else {
                            Z = Qg;
                            var rt = kg
                        }
                    else
                        R = C.nodeName,
                        !R || R.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? D && So(D.elementType) && (Z = Df) : Z = Zg;
                    if (Z && (Z = Z(t, D))) {
                        Ef(V, Z, n, O);
                        break t
                    }
                    rt && rt(t, C, D),
                    t === "focusout" && D && C.type === "number" && D.memoizedProps.value != null && vo(C, "number", C.value)
                }
                switch (rt = D ? ha(D) : window,
                t) {
                case "focusin":
                    (Mf(rt) || rt.contentEditable === "true") && (Mi = rt,
                    zo = D,
                    Ta = null);
                    break;
                case "focusout":
                    Ta = zo = Mi = null;
                    break;
                case "mousedown":
                    Vo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Vo = !1,
                    _f(V, n, O);
                    break;
                case "selectionchange":
                    if (Jg)
                        break;
                case "keydown":
                case "keyup":
                    _f(V, n, O)
                }
                var J;
                if (Co)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var tt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            tt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            tt = "onCompositionUpdate";
                            break t
                        }
                        tt = void 0
                    }
                else
                    ji ? Af(t, n) && (tt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (tt = "onCompositionStart");
                tt && (bf && n.locale !== "ko" && (ji || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && ji && (J = pf()) : (yn = O,
                jo = "value"in yn ? yn.value : yn.textContent,
                ji = !0)),
                rt = El(D, tt),
                0 < rt.length && (tt = new vf(tt,t,null,n,O),
                V.push({
                    event: tt,
                    listeners: rt
                }),
                J ? tt.data = J : (J = jf(n),
                J !== null && (tt.data = J)))),
                (J = Hg ? qg(t, n) : Yg(t, n)) && (tt = El(D, "onBeforeInput"),
                0 < tt.length && (rt = new vf("onBeforeInput","beforeinput",null,n,O),
                V.push({
                    event: rt,
                    listeners: tt
                }),
                rt.data = J)),
                Ov(V, t, D, n, O)
            }
            lm(V, e)
        })
    }
    function Fa(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function El(t, e) {
        for (var n = e + "Capture", a = []; t !== null; ) {
            var l = t
              , u = l.stateNode;
            if (l = l.tag,
            l !== 5 && l !== 26 && l !== 27 || u === null || (l = ma(t, n),
            l != null && a.unshift(Fa(t, l, u)),
            l = ma(t, e),
            l != null && a.push(Fa(t, l, u))),
            t.tag === 3)
                return a;
            t = t.return
        }
        return []
    }
    function Ji(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function rm(t, e, n, a, l) {
        for (var u = e._reactName, h = []; n !== null && n !== a; ) {
            var v = n
              , x = v.alternate
              , D = v.stateNode;
            if (v = v.tag,
            x !== null && x === a)
                break;
            v !== 5 && v !== 26 && v !== 27 || D === null || (x = D,
            l ? (D = ma(n, u),
            D != null && h.unshift(Fa(n, D, x))) : l || (D = ma(n, u),
            D != null && h.push(Fa(n, D, x)))),
            n = n.return
        }
        h.length !== 0 && t.push({
            event: e,
            listeners: h
        })
    }
    var Uv = /\r\n?/g
      , _v = /\u0000|\uFFFD/g;
    function um(t) {
        return (typeof t == "string" ? t : "" + t).replace(Uv, `
`).replace(_v, "")
    }
    function cm(t, e) {
        return e = um(e),
        um(t) === e
    }
    function Dl() {}
    function xt(t, e, n, a, l, u) {
        switch (n) {
        case "children":
            typeof a == "string" ? e === "body" || e === "textarea" && a === "" || xi(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && xi(t, "" + a);
            break;
        case "className":
            ws(t, "class", a);
            break;
        case "tabIndex":
            ws(t, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            ws(t, n, a);
            break;
        case "style":
            df(t, a, u);
            break;
        case "data":
            if (e !== "object") {
                ws(t, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(n);
                break
            }
            a = Us("" + a),
            t.setAttribute(n, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (n === "formAction" ? (e !== "input" && xt(t, e, "name", l.name, l, null),
                xt(t, e, "formEncType", l.formEncType, l, null),
                xt(t, e, "formMethod", l.formMethod, l, null),
                xt(t, e, "formTarget", l.formTarget, l, null)) : (xt(t, e, "encType", l.encType, l, null),
                xt(t, e, "method", l.method, l, null),
                xt(t, e, "target", l.target, l, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(n);
                break
            }
            a = Us("" + a),
            t.setAttribute(n, a);
            break;
        case "onClick":
            a != null && (t.onclick = Dl);
            break;
        case "onScroll":
            a != null && ct("scroll", t);
            break;
        case "onScrollEnd":
            a != null && ct("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (n = a.__html,
                n != null) {
                    if (l.children != null)
                        throw Error(r(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = Us("" + a),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
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
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
            break;
        case "popover":
            ct("beforetoggle", t),
            ct("toggle", t),
            Os(t, "popover", a);
            break;
        case "xlinkActuate":
            Je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Os(t, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = dg.get(n) || n,
            Os(t, n, a))
        }
    }
    function iu(t, e, n, a, l, u) {
        switch (n) {
        case "style":
            df(t, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(r(61));
                if (n = a.__html,
                n != null) {
                    if (l.children != null)
                        throw Error(r(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof a == "string" ? xi(t, a) : (typeof a == "number" || typeof a == "bigint") && xi(t, "" + a);
            break;
        case "onScroll":
            a != null && ct("scroll", t);
            break;
        case "onScrollEnd":
            a != null && ct("scrollend", t);
            break;
        case "onClick":
            a != null && (t.onclick = Dl);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!tf.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"),
                    e = n.slice(2, l ? n.length - 7 : void 0),
                    u = t[le] || null,
                    u = u != null ? u[n] : null,
                    typeof u == "function" && t.removeEventListener(e, u, l),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, a, l);
                        break t
                    }
                    n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Os(t, n, a)
                }
        }
    }
    function Wt(t, e, n) {
        switch (e) {
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
            ct("error", t),
            ct("load", t);
            var a = !1, l = !1, u;
            for (u in n)
                if (n.hasOwnProperty(u)) {
                    var h = n[u];
                    if (h != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            l = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, e));
                        default:
                            xt(t, e, u, h, n, null)
                        }
                }
            l && xt(t, e, "srcSet", n.srcSet, n, null),
            a && xt(t, e, "src", n.src, n, null);
            return;
        case "input":
            ct("invalid", t);
            var v = u = h = l = null
              , x = null
              , D = null;
            for (a in n)
                if (n.hasOwnProperty(a)) {
                    var O = n[a];
                    if (O != null)
                        switch (a) {
                        case "name":
                            l = O;
                            break;
                        case "type":
                            h = O;
                            break;
                        case "checked":
                            x = O;
                            break;
                        case "defaultChecked":
                            D = O;
                            break;
                        case "value":
                            u = O;
                            break;
                        case "defaultValue":
                            v = O;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (O != null)
                                throw Error(r(137, e));
                            break;
                        default:
                            xt(t, e, a, O, n, null)
                        }
                }
            rf(t, u, v, x, D, h, l, !1),
            zs(t);
            return;
        case "select":
            ct("invalid", t),
            a = h = u = null;
            for (l in n)
                if (n.hasOwnProperty(l) && (v = n[l],
                v != null))
                    switch (l) {
                    case "value":
                        u = v;
                        break;
                    case "defaultValue":
                        h = v;
                        break;
                    case "multiple":
                        a = v;
                    default:
                        xt(t, e, l, v, n, null)
                    }
            e = u,
            n = h,
            t.multiple = !!a,
            e != null ? bi(t, !!a, e, !1) : n != null && bi(t, !!a, n, !0);
            return;
        case "textarea":
            ct("invalid", t),
            u = l = a = null;
            for (h in n)
                if (n.hasOwnProperty(h) && (v = n[h],
                v != null))
                    switch (h) {
                    case "value":
                        a = v;
                        break;
                    case "defaultValue":
                        l = v;
                        break;
                    case "children":
                        u = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(r(91));
                        break;
                    default:
                        xt(t, e, h, v, n, null)
                    }
            cf(t, a, l, u),
            zs(t);
            return;
        case "option":
            for (x in n)
                if (n.hasOwnProperty(x) && (a = n[x],
                a != null))
                    switch (x) {
                    case "selected":
                        t.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        xt(t, e, x, a, n, null)
                    }
            return;
        case "dialog":
            ct("beforetoggle", t),
            ct("toggle", t),
            ct("cancel", t),
            ct("close", t);
            break;
        case "iframe":
        case "object":
            ct("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Ja.length; a++)
                ct(Ja[a], t);
            break;
        case "image":
            ct("error", t),
            ct("load", t);
            break;
        case "details":
            ct("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            ct("error", t),
            ct("load", t);
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
            for (D in n)
                if (n.hasOwnProperty(D) && (a = n[D],
                a != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, e));
                    default:
                        xt(t, e, D, a, n, null)
                    }
            return;
        default:
            if (So(e)) {
                for (O in n)
                    n.hasOwnProperty(O) && (a = n[O],
                    a !== void 0 && iu(t, e, O, a, n, void 0));
                return
            }
        }
        for (v in n)
            n.hasOwnProperty(v) && (a = n[v],
            a != null && xt(t, e, v, a, n, null))
    }
    function Bv(t, e, n, a) {
        switch (e) {
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
            var l = null
              , u = null
              , h = null
              , v = null
              , x = null
              , D = null
              , O = null;
            for (R in n) {
                var V = n[R];
                if (n.hasOwnProperty(R) && V != null)
                    switch (R) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        x = V;
                    default:
                        a.hasOwnProperty(R) || xt(t, e, R, null, a, V)
                    }
            }
            for (var C in a) {
                var R = a[C];
                if (V = n[C],
                a.hasOwnProperty(C) && (R != null || V != null))
                    switch (C) {
                    case "type":
                        u = R;
                        break;
                    case "name":
                        l = R;
                        break;
                    case "checked":
                        D = R;
                        break;
                    case "defaultChecked":
                        O = R;
                        break;
                    case "value":
                        h = R;
                        break;
                    case "defaultValue":
                        v = R;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (R != null)
                            throw Error(r(137, e));
                        break;
                    default:
                        R !== V && xt(t, e, C, R, a, V)
                    }
            }
            go(t, h, v, x, D, O, u, l);
            return;
        case "select":
            R = h = v = C = null;
            for (u in n)
                if (x = n[u],
                n.hasOwnProperty(u) && x != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        R = x;
                    default:
                        a.hasOwnProperty(u) || xt(t, e, u, null, a, x)
                    }
            for (l in a)
                if (u = a[l],
                x = n[l],
                a.hasOwnProperty(l) && (u != null || x != null))
                    switch (l) {
                    case "value":
                        C = u;
                        break;
                    case "defaultValue":
                        v = u;
                        break;
                    case "multiple":
                        h = u;
                    default:
                        u !== x && xt(t, e, l, u, a, x)
                    }
            e = v,
            n = h,
            a = R,
            C != null ? bi(t, !!n, C, !1) : !!a != !!n && (e != null ? bi(t, !!n, e, !0) : bi(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            R = C = null;
            for (v in n)
                if (l = n[v],
                n.hasOwnProperty(v) && l != null && !a.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        xt(t, e, v, null, a, l)
                    }
            for (h in a)
                if (l = a[h],
                u = n[h],
                a.hasOwnProperty(h) && (l != null || u != null))
                    switch (h) {
                    case "value":
                        C = l;
                        break;
                    case "defaultValue":
                        R = l;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (l != null)
                            throw Error(r(91));
                        break;
                    default:
                        l !== u && xt(t, e, h, l, a, u)
                    }
            uf(t, C, R);
            return;
        case "option":
            for (var et in n)
                if (C = n[et],
                n.hasOwnProperty(et) && C != null && !a.hasOwnProperty(et))
                    switch (et) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        xt(t, e, et, null, a, C)
                    }
            for (x in a)
                if (C = a[x],
                R = n[x],
                a.hasOwnProperty(x) && C !== R && (C != null || R != null))
                    switch (x) {
                    case "selected":
                        t.selected = C && typeof C != "function" && typeof C != "symbol";
                        break;
                    default:
                        xt(t, e, x, C, a, R)
                    }
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
            for (var I in n)
                C = n[I],
                n.hasOwnProperty(I) && C != null && !a.hasOwnProperty(I) && xt(t, e, I, null, a, C);
            for (D in a)
                if (C = a[D],
                R = n[D],
                a.hasOwnProperty(D) && C !== R && (C != null || R != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (C != null)
                            throw Error(r(137, e));
                        break;
                    default:
                        xt(t, e, D, C, a, R)
                    }
            return;
        default:
            if (So(e)) {
                for (var Tt in n)
                    C = n[Tt],
                    n.hasOwnProperty(Tt) && C !== void 0 && !a.hasOwnProperty(Tt) && iu(t, e, Tt, void 0, a, C);
                for (O in a)
                    C = a[O],
                    R = n[O],
                    !a.hasOwnProperty(O) || C === R || C === void 0 && R === void 0 || iu(t, e, O, C, a, R);
                return
            }
        }
        for (var M in n)
            C = n[M],
            n.hasOwnProperty(M) && C != null && !a.hasOwnProperty(M) && xt(t, e, M, null, a, C);
        for (V in a)
            C = a[V],
            R = n[V],
            !a.hasOwnProperty(V) || C === R || C == null && R == null || xt(t, e, V, C, a, R)
    }
    var au = null
      , su = null;
    function Nl(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function fm(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function dm(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function lu(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var ou = null;
    function Lv() {
        var t = window.event;
        return t && t.type === "popstate" ? t === ou ? !1 : (ou = t,
        !0) : (ou = null,
        !1)
    }
    var hm = typeof setTimeout == "function" ? setTimeout : void 0
      , Hv = typeof clearTimeout == "function" ? clearTimeout : void 0
      , mm = typeof Promise == "function" ? Promise : void 0
      , qv = typeof queueMicrotask == "function" ? queueMicrotask : typeof mm < "u" ? function(t) {
        return mm.resolve(null).then(t).catch(Yv)
    }
    : hm;
    function Yv(t) {
        setTimeout(function() {
            throw t
        })
    }
    function wn(t) {
        return t === "head"
    }
    function pm(t, e) {
        var n = e
          , a = 0
          , l = 0;
        do {
            var u = n.nextSibling;
            if (t.removeChild(n),
            u && u.nodeType === 8)
                if (n = u.data,
                n === "/$") {
                    if (0 < a && 8 > a) {
                        n = a;
                        var h = t.ownerDocument;
                        if (n & 1 && Wa(h.documentElement),
                        n & 2 && Wa(h.body),
                        n & 4)
                            for (n = h.head,
                            Wa(n),
                            h = n.firstChild; h; ) {
                                var v = h.nextSibling
                                  , x = h.nodeName;
                                h[da] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && h.rel.toLowerCase() === "stylesheet" || n.removeChild(h),
                                h = v
                            }
                    }
                    if (l === 0) {
                        t.removeChild(u),
                        ss(e);
                        return
                    }
                    l--
                } else
                    n === "$" || n === "$?" || n === "$!" ? l++ : a = n.charCodeAt(0) - 48;
            else
                a = 0;
            n = u
        } while (n);
        ss(e)
    }
    function ru(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                ru(n),
                ho(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function Gv(t, e, n, a) {
        for (; t.nodeType === 1; ) {
            var l = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (a) {
                if (!t[da])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== l.rel || t.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || t.getAttribute("title") !== (l.title == null ? null : l.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (l.src == null ? null : l.src) || t.getAttribute("type") !== (l.type == null ? null : l.type) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var u = l.name == null ? null : "" + l.name;
                if (l.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = _e(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function Xv(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = _e(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function uu(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }
    function kv(t, e) {
        var n = t.ownerDocument;
        if (t.data !== "$?" || n.readyState === "complete")
            e();
        else {
            var a = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", a)
            };
            n.addEventListener("DOMContentLoaded", a),
            t._reactRetry = a
        }
    }
    function _e(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
                    break;
                if (e === "/$")
                    return null
            }
        }
        return t
    }
    var cu = null;
    function ym(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }
    function gm(t, e, n) {
        switch (e = Nl(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(r(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(r(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(r(454));
            return t;
        default:
            throw Error(r(451))
        }
    }
    function Wa(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        ho(t)
    }
    var Re = new Map
      , vm = new Set;
    function Cl(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var cn = q.d;
    q.d = {
        f: Qv,
        r: Zv,
        D: Kv,
        C: Pv,
        L: Jv,
        m: Fv,
        X: $v,
        S: Wv,
        M: Iv
    };
    function Qv() {
        var t = cn.f()
          , e = bl();
        return t || e
    }
    function Zv(t) {
        var e = yi(t);
        e !== null && e.tag === 5 && e.type === "form" ? Ld(e) : cn.r(t)
    }
    var Fi = typeof document > "u" ? null : document;
    function Sm(t, e, n) {
        var a = Fi;
        if (a && typeof e == "string" && e) {
            var l = Ae(e);
            l = 'link[rel="' + t + '"][href="' + l + '"]',
            typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
            vm.has(l) || (vm.add(l),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            a.querySelector(l) === null && (e = a.createElement("link"),
            Wt(e, "link", t),
            kt(e),
            a.head.appendChild(e)))
        }
    }
    function Kv(t) {
        cn.D(t),
        Sm("dns-prefetch", t, null)
    }
    function Pv(t, e) {
        cn.C(t, e),
        Sm("preconnect", t, e)
    }
    function Jv(t, e, n) {
        cn.L(t, e, n);
        var a = Fi;
        if (a && t && e) {
            var l = 'link[rel="preload"][as="' + Ae(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Ae(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (l += '[imagesizes="' + Ae(n.imageSizes) + '"]')) : l += '[href="' + Ae(t) + '"]';
            var u = l;
            switch (e) {
            case "style":
                u = Wi(t);
                break;
            case "script":
                u = $i(t)
            }
            Re.has(u) || (t = S({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Re.set(u, t),
            a.querySelector(l) !== null || e === "style" && a.querySelector($a(u)) || e === "script" && a.querySelector(Ia(u)) || (e = a.createElement("link"),
            Wt(e, "link", t),
            kt(e),
            a.head.appendChild(e)))
        }
    }
    function Fv(t, e) {
        cn.m(t, e);
        var n = Fi;
        if (n && t) {
            var a = e && typeof e.as == "string" ? e.as : "script"
              , l = 'link[rel="modulepreload"][as="' + Ae(a) + '"][href="' + Ae(t) + '"]'
              , u = l;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = $i(t)
            }
            if (!Re.has(u) && (t = S({
                rel: "modulepreload",
                href: t
            }, e),
            Re.set(u, t),
            n.querySelector(l) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Ia(u)))
                        return
                }
                a = n.createElement("link"),
                Wt(a, "link", t),
                kt(a),
                n.head.appendChild(a)
            }
        }
    }
    function Wv(t, e, n) {
        cn.S(t, e, n);
        var a = Fi;
        if (a && t) {
            var l = gi(a).hoistableStyles
              , u = Wi(t);
            e = e || "default";
            var h = l.get(u);
            if (!h) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (h = a.querySelector($a(u)))
                    v.loading = 5;
                else {
                    t = S({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Re.get(u)) && fu(t, n);
                    var x = h = a.createElement("link");
                    kt(x),
                    Wt(x, "link", t),
                    x._p = new Promise(function(D, O) {
                        x.onload = D,
                        x.onerror = O
                    }
                    ),
                    x.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    x.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    Rl(h, e, a)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: v
                },
                l.set(u, h)
            }
        }
    }
    function $v(t, e) {
        cn.X(t, e);
        var n = Fi;
        if (n && t) {
            var a = gi(n).hoistableScripts
              , l = $i(t)
              , u = a.get(l);
            u || (u = n.querySelector(Ia(l)),
            u || (t = S({
                src: t,
                async: !0
            }, e),
            (e = Re.get(l)) && du(t, e),
            u = n.createElement("script"),
            kt(u),
            Wt(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(l, u))
        }
    }
    function Iv(t, e) {
        cn.M(t, e);
        var n = Fi;
        if (n && t) {
            var a = gi(n).hoistableScripts
              , l = $i(t)
              , u = a.get(l);
            u || (u = n.querySelector(Ia(l)),
            u || (t = S({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Re.get(l)) && du(t, e),
            u = n.createElement("script"),
            kt(u),
            Wt(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(l, u))
        }
    }
    function bm(t, e, n, a) {
        var l = (l = at.current) ? Cl(l) : null;
        if (!l)
            throw Error(r(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Wi(n.href),
            n = gi(l).hoistableStyles,
            a = n.get(e),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = Wi(n.href);
                var u = gi(l).hoistableStyles
                  , h = u.get(t);
                if (h || (l = l.ownerDocument || l,
                h = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, h),
                (u = l.querySelector($a(t))) && !u._p && (h.instance = u,
                h.state.loading = 5),
                Re.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Re.set(t, n),
                u || t1(l, t, n, h.state))),
                e && a === null)
                    throw Error(r(528, ""));
                return h
            }
            if (e && a !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = $i(n),
            n = gi(l).hoistableScripts,
            a = n.get(e),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, t))
        }
    }
    function Wi(t) {
        return 'href="' + Ae(t) + '"'
    }
    function $a(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function xm(t) {
        return S({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function t1(t, e, n, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"),
        a.preload = e,
        e.addEventListener("load", function() {
            return a.loading |= 1
        }),
        e.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Wt(e, "link", n),
        kt(e),
        t.head.appendChild(e))
    }
    function $i(t) {
        return '[src="' + Ae(t) + '"]'
    }
    function Ia(t) {
        return "script[async]" + t
    }
    function Tm(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + Ae(n.href) + '"]');
                if (a)
                    return e.instance = a,
                    kt(a),
                    a;
                var l = S({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"),
                kt(a),
                Wt(a, "style", l),
                Rl(a, n.precedence, t),
                e.instance = a;
            case "stylesheet":
                l = Wi(n.href);
                var u = t.querySelector($a(l));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    kt(u),
                    u;
                a = xm(n),
                (l = Re.get(l)) && fu(a, l),
                u = (t.ownerDocument || t).createElement("link"),
                kt(u);
                var h = u;
                return h._p = new Promise(function(v, x) {
                    h.onload = v,
                    h.onerror = x
                }
                ),
                Wt(u, "link", a),
                e.state.loading |= 4,
                Rl(u, n.precedence, t),
                e.instance = u;
            case "script":
                return u = $i(n.src),
                (l = t.querySelector(Ia(u))) ? (e.instance = l,
                kt(l),
                l) : (a = n,
                (l = Re.get(u)) && (a = S({}, n),
                du(a, l)),
                t = t.ownerDocument || t,
                l = t.createElement("script"),
                kt(l),
                Wt(l, "link", a),
                t.head.appendChild(l),
                e.instance = l);
            case "void":
                return null;
            default:
                throw Error(r(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance,
            e.state.loading |= 4,
            Rl(a, n.precedence, t));
        return e.instance
    }
    function Rl(t, e, n) {
        for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = a.length ? a[a.length - 1] : null, u = l, h = 0; h < a.length; h++) {
            var v = a[h];
            if (v.dataset.precedence === e)
                u = v;
            else if (u !== l)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function fu(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function du(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Ol = null;
    function Am(t, e, n) {
        if (Ol === null) {
            var a = new Map
              , l = Ol = new Map;
            l.set(n, a)
        } else
            l = Ol,
            a = l.get(n),
            a || (a = new Map,
            l.set(n, a));
        if (a.has(t))
            return a;
        for (a.set(t, null),
        n = n.getElementsByTagName(t),
        l = 0; l < n.length; l++) {
            var u = n[l];
            if (!(u[da] || u[te] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = u.getAttribute(e) || "";
                h = t + h;
                var v = a.get(h);
                v ? v.push(u) : a.set(h, [u])
            }
        }
        return a
    }
    function jm(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function e1(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Mm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var ts = null;
    function n1() {}
    function i1(t, e, n) {
        if (ts === null)
            throw Error(r(475));
        var a = ts;
        if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var l = Wi(n.href)
                  , u = t.querySelector($a(l));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++,
                    a = wl.bind(a),
                    t.then(a, a)),
                    e.state.loading |= 4,
                    e.instance = u,
                    kt(u);
                    return
                }
                u = t.ownerDocument || t,
                n = xm(n),
                (l = Re.get(l)) && fu(n, l),
                u = u.createElement("link"),
                kt(u);
                var h = u;
                h._p = new Promise(function(v, x) {
                    h.onload = v,
                    h.onerror = x
                }
                ),
                Wt(u, "link", n),
                e.instance = u
            }
            a.stylesheets === null && (a.stylesheets = new Map),
            a.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++,
            e = wl.bind(a),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    function a1() {
        if (ts === null)
            throw Error(r(475));
        var t = ts;
        return t.stylesheets && t.count === 0 && hu(t, t.stylesheets),
        0 < t.count ? function(e) {
            var n = setTimeout(function() {
                if (t.stylesheets && hu(t, t.stylesheets),
                t.unsuspend) {
                    var a = t.unsuspend;
                    t.unsuspend = null,
                    a()
                }
            }, 6e4);
            return t.unsuspend = e,
            function() {
                t.unsuspend = null,
                clearTimeout(n)
            }
        }
        : null
    }
    function wl() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                hu(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var zl = null;
    function hu(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        zl = new Map,
        e.forEach(s1, t),
        zl = null,
        wl.call(t))
    }
    function s1(t, e) {
        if (!(e.state.loading & 4)) {
            var n = zl.get(t);
            if (n)
                var a = n.get(null);
            else {
                n = new Map,
                zl.set(t, n);
                for (var l = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < l.length; u++) {
                    var h = l[u];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h),
                    a = h)
                }
                a && n.set(null, a)
            }
            l = e.instance,
            h = l.getAttribute("data-precedence"),
            u = n.get(h) || a,
            u === a && n.set(null, l),
            n.set(h, l),
            this.count++,
            a = wl.bind(this),
            l.addEventListener("load", a),
            l.addEventListener("error", a),
            u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(l, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var es = {
        $$typeof: Y,
        Provider: null,
        Consumer: null,
        _currentValue: K,
        _currentValue2: K,
        _threadCount: 0
    };
    function l1(t, e, n, a, l, u, h, v) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = ro(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ro(0),
        this.hiddenUpdates = ro(null),
        this.identifierPrefix = a,
        this.onUncaughtError = l,
        this.onCaughtError = u,
        this.onRecoverableError = h,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = v,
        this.incompleteTransitions = new Map
    }
    function Em(t, e, n, a, l, u, h, v, x, D, O, V) {
        return t = new l1(t,e,n,h,v,x,D,V),
        e = 1,
        u === !0 && (e |= 24),
        u = ye(3, null, null, e),
        t.current = u,
        u.stateNode = t,
        e = Po(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: n,
            cache: e
        },
        $o(u),
        t
    }
    function Dm(t) {
        return t ? (t = Ci,
        t) : Ci
    }
    function Nm(t, e, n, a, l, u) {
        l = Dm(l),
        a.context === null ? a.context = l : a.pendingContext = l,
        a = Sn(e),
        a.payload = {
            element: n
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        n = bn(t, a, e),
        n !== null && (xe(n, t, e),
        Oa(n, t, e))
    }
    function Cm(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function mu(t, e) {
        Cm(t, e),
        (t = t.alternate) && Cm(t, e)
    }
    function Rm(t) {
        if (t.tag === 13) {
            var e = Ni(t, 67108864);
            e !== null && xe(e, t, 67108864),
            mu(t, 67108864)
        }
    }
    var Vl = !0;
    function o1(t, e, n, a) {
        var l = w.T;
        w.T = null;
        var u = q.p;
        try {
            q.p = 2,
            pu(t, e, n, a)
        } finally {
            q.p = u,
            w.T = l
        }
    }
    function r1(t, e, n, a) {
        var l = w.T;
        w.T = null;
        var u = q.p;
        try {
            q.p = 8,
            pu(t, e, n, a)
        } finally {
            q.p = u,
            w.T = l
        }
    }
    function pu(t, e, n, a) {
        if (Vl) {
            var l = yu(a);
            if (l === null)
                nu(t, e, a, Ul, n),
                wm(t, a);
            else if (c1(l, t, e, n, a))
                a.stopPropagation();
            else if (wm(t, a),
            e & 4 && -1 < u1.indexOf(t)) {
                for (; l !== null; ) {
                    var u = yi(l);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var h = kn(u.pendingLanes);
                                if (h !== 0) {
                                    var v = u;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; h; ) {
                                        var x = 1 << 31 - me(h);
                                        v.entanglements[1] |= x,
                                        h &= ~x
                                    }
                                    ke(u),
                                    (gt & 6) === 0 && (vl = He() + 500,
                                    Pa(0))
                                }
                            }
                            break;
                        case 13:
                            v = Ni(u, 2),
                            v !== null && xe(v, u, 2),
                            bl(),
                            mu(u, 2)
                        }
                    if (u = yu(a),
                    u === null && nu(t, e, a, Ul, n),
                    u === l)
                        break;
                    l = u
                }
                l !== null && a.stopPropagation()
            } else
                nu(t, e, a, null, n)
        }
    }
    function yu(t) {
        return t = xo(t),
        gu(t)
    }
    var Ul = null;
    function gu(t) {
        if (Ul = null,
        t = pi(t),
        t !== null) {
            var e = m(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = d(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return Ul = t,
        null
    }
    function Om(t) {
        switch (t) {
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
            switch (P0()) {
            case kc:
                return 2;
            case Qc:
                return 8;
            case Ds:
            case J0:
                return 32;
            case Zc:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var vu = !1
      , zn = null
      , Vn = null
      , Un = null
      , ns = new Map
      , is = new Map
      , _n = []
      , u1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function wm(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            zn = null;
            break;
        case "dragenter":
        case "dragleave":
            Vn = null;
            break;
        case "mouseover":
        case "mouseout":
            Un = null;
            break;
        case "pointerover":
        case "pointerout":
            ns.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            is.delete(e.pointerId)
        }
    }
    function as(t, e, n, a, l, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [l]
        },
        e !== null && (e = yi(e),
        e !== null && Rm(e)),
        t) : (t.eventSystemFlags |= a,
        e = t.targetContainers,
        l !== null && e.indexOf(l) === -1 && e.push(l),
        t)
    }
    function c1(t, e, n, a, l) {
        switch (e) {
        case "focusin":
            return zn = as(zn, t, e, n, a, l),
            !0;
        case "dragenter":
            return Vn = as(Vn, t, e, n, a, l),
            !0;
        case "mouseover":
            return Un = as(Un, t, e, n, a, l),
            !0;
        case "pointerover":
            var u = l.pointerId;
            return ns.set(u, as(ns.get(u) || null, t, e, n, a, l)),
            !0;
        case "gotpointercapture":
            return u = l.pointerId,
            is.set(u, as(is.get(u) || null, t, e, n, a, l)),
            !0
        }
        return !1
    }
    function zm(t) {
        var e = pi(t.target);
        if (e !== null) {
            var n = m(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = d(n),
                    e !== null) {
                        t.blockedOn = e,
                        ig(t.priority, function() {
                            if (n.tag === 13) {
                                var a = be();
                                a = uo(a);
                                var l = Ni(n, a);
                                l !== null && xe(l, n, a),
                                mu(n, a)
                            }
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function _l(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = yu(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var a = new n.constructor(n.type,n);
                bo = a,
                n.target.dispatchEvent(a),
                bo = null
            } else
                return e = yi(n),
                e !== null && Rm(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function Vm(t, e, n) {
        _l(t) && n.delete(e)
    }
    function f1() {
        vu = !1,
        zn !== null && _l(zn) && (zn = null),
        Vn !== null && _l(Vn) && (Vn = null),
        Un !== null && _l(Un) && (Un = null),
        ns.forEach(Vm),
        is.forEach(Vm)
    }
    function Bl(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        vu || (vu = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, f1)))
    }
    var Ll = null;
    function Um(t) {
        Ll !== t && (Ll = t,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            Ll === t && (Ll = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , a = t[e + 1]
                  , l = t[e + 2];
                if (typeof a != "function") {
                    if (gu(a || n) === null)
                        continue;
                    break
                }
                var u = yi(n);
                u !== null && (t.splice(e, 3),
                e -= 3,
                gr(u, {
                    pending: !0,
                    data: l,
                    method: n.method,
                    action: a
                }, a, l))
            }
        }))
    }
    function ss(t) {
        function e(x) {
            return Bl(x, t)
        }
        zn !== null && Bl(zn, t),
        Vn !== null && Bl(Vn, t),
        Un !== null && Bl(Un, t),
        ns.forEach(e),
        is.forEach(e);
        for (var n = 0; n < _n.length; n++) {
            var a = _n[n];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < _n.length && (n = _n[0],
        n.blockedOn === null); )
            zm(n),
            n.blockedOn === null && _n.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (a = 0; a < n.length; a += 3) {
                var l = n[a]
                  , u = n[a + 1]
                  , h = l[le] || null;
                if (typeof u == "function")
                    h || Um(n);
                else if (h) {
                    var v = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (l = u,
                        h = u[le] || null)
                            v = h.formAction;
                        else if (gu(l) !== null)
                            continue
                    } else
                        v = h.action;
                    typeof v == "function" ? n[a + 1] = v : (n.splice(a, 3),
                    a -= 3),
                    Um(n)
                }
            }
    }
    function Su(t) {
        this._internalRoot = t
    }
    Hl.prototype.render = Su.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(r(409));
        var n = e.current
          , a = be();
        Nm(n, a, t, e, null, null)
    }
    ,
    Hl.prototype.unmount = Su.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Nm(t.current, 2, null, t, null, null),
            bl(),
            e[mi] = null
        }
    }
    ;
    function Hl(t) {
        this._internalRoot = t
    }
    Hl.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Wc();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < _n.length && e !== 0 && e < _n[n].priority; n++)
                ;
            _n.splice(n, 0, t),
            n === 0 && zm(t)
        }
    }
    ;
    var _m = s.version;
    if (_m !== "19.1.0")
        throw Error(r(527, _m, "19.1.0"));
    q.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","),
            Error(r(268, t)));
        return t = g(e),
        t = t !== null ? p(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var d1 = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: w,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ql.isDisabled && ql.supportsFiber)
            try {
                ua = ql.inject(d1),
                he = ql
            } catch {}
    }
    return os.createRoot = function(t, e) {
        if (!c(t))
            throw Error(r(299));
        var n = !1
          , a = ""
          , l = $d
          , u = Id
          , h = th
          , v = null;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (h = e.onRecoverableError),
        e.unstable_transitionCallbacks !== void 0 && (v = e.unstable_transitionCallbacks)),
        e = Em(t, 1, !1, null, null, n, a, l, u, h, v, null),
        t[mi] = e.current,
        eu(t),
        new Su(e)
    }
    ,
    os.hydrateRoot = function(t, e, n) {
        if (!c(t))
            throw Error(r(299));
        var a = !1
          , l = ""
          , u = $d
          , h = Id
          , v = th
          , x = null
          , D = null;
        return n != null && (n.unstable_strictMode === !0 && (a = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
        n.onCaughtError !== void 0 && (h = n.onCaughtError),
        n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
        n.unstable_transitionCallbacks !== void 0 && (x = n.unstable_transitionCallbacks),
        n.formState !== void 0 && (D = n.formState)),
        e = Em(t, 1, !0, e, n ?? null, a, l, u, h, v, x, D),
        e.context = Dm(null),
        n = e.current,
        a = be(),
        a = uo(a),
        l = Sn(a),
        l.callback = null,
        bn(n, l, a),
        n = a,
        e.current.lanes = n,
        fa(e, n),
        ke(e),
        t[mi] = e.current,
        eu(t),
        new Hl(e)
    }
    ,
    os.version = "19.1.0",
    os
}
var Zm;
function T1() {
    if (Zm)
        return Tu.exports;
    Zm = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (s) {
                console.error(s)
            }
    }
    return i(),
    Tu.exports = x1(),
    Tu.exports
}
var A1 = T1();
const oc = L.createContext({});
function rc(i) {
    const s = L.useRef(null);
    return s.current === null && (s.current = i()),
    s.current
}
const uc = typeof window < "u"
  , ry = uc ? L.useLayoutEffect : L.useEffect
  , to = L.createContext(null);
function cc(i, s) {
    i.indexOf(s) === -1 && i.push(s)
}
function fc(i, s) {
    const o = i.indexOf(s);
    o > -1 && i.splice(o, 1)
}
const fn = (i, s, o) => o > s ? s : o < i ? i : o;
let dc = () => {}
;
const dn = {}
  , uy = i => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function cy(i) {
    return typeof i == "object" && i !== null
}
const fy = i => /^0[^.\s]+$/u.test(i);
function hc(i) {
    let s;
    return () => (s === void 0 && (s = i()),
    s)
}
const ze = i => i
  , j1 = (i, s) => o => s(i(o))
  , Ts = (...i) => i.reduce(j1)
  , ps = (i, s, o) => {
    const r = s - i;
    return r === 0 ? 1 : (o - i) / r
}
;
class mc {
    constructor() {
        this.subscriptions = []
    }
    add(s) {
        return cc(this.subscriptions, s),
        () => fc(this.subscriptions, s)
    }
    notify(s, o, r) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](s, o, r);
            else
                for (let m = 0; m < c; m++) {
                    const d = this.subscriptions[m];
                    d && d(s, o, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Qe = i => i * 1e3
  , Ze = i => i / 1e3;
function dy(i, s) {
    return s ? i * (1e3 / s) : 0
}
const hy = (i, s, o) => (((1 - 3 * o + 3 * s) * i + (3 * o - 6 * s)) * i + 3 * s) * i
  , M1 = 1e-7
  , E1 = 12;
function D1(i, s, o, r, c) {
    let m, d, y = 0;
    do
        d = s + (o - s) / 2,
        m = hy(d, r, c) - i,
        m > 0 ? o = d : s = d;
    while (Math.abs(m) > M1 && ++y < E1);
    return d
}
function As(i, s, o, r) {
    if (i === s && o === r)
        return ze;
    const c = m => D1(m, 0, 1, i, o);
    return m => m === 0 || m === 1 ? m : hy(c(m), s, r)
}
const my = i => s => s <= .5 ? i(2 * s) / 2 : (2 - i(2 * (1 - s))) / 2
  , py = i => s => 1 - i(1 - s)
  , yy = As(.33, 1.53, .69, .99)
  , pc = py(yy)
  , gy = my(pc)
  , vy = i => (i *= 2) < 1 ? .5 * pc(i) : .5 * (2 - Math.pow(2, -10 * (i - 1)))
  , yc = i => 1 - Math.sin(Math.acos(i))
  , Sy = py(yc)
  , by = my(yc)
  , N1 = As(.42, 0, 1, 1)
  , C1 = As(0, 0, .58, 1)
  , xy = As(.42, 0, .58, 1)
  , R1 = i => Array.isArray(i) && typeof i[0] != "number"
  , Ty = i => Array.isArray(i) && typeof i[0] == "number"
  , O1 = {
    linear: ze,
    easeIn: N1,
    easeInOut: xy,
    easeOut: C1,
    circIn: yc,
    circInOut: by,
    circOut: Sy,
    backIn: pc,
    backInOut: gy,
    backOut: yy,
    anticipate: vy
}
  , w1 = i => typeof i == "string"
  , Km = i => {
    if (Ty(i)) {
        dc(i.length === 4);
        const [s,o,r,c] = i;
        return As(s, o, r, c)
    } else if (w1(i))
        return O1[i];
    return i
}
  , Yl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Pm = {
    value: null
};
function z1(i, s) {
    let o = new Set
      , r = new Set
      , c = !1
      , m = !1;
    const d = new WeakSet;
    let y = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , g = 0;
    function p(b) {
        d.has(b) && (S.schedule(b),
        i()),
        g++,
        b(y)
    }
    const S = {
        schedule: (b, A=!1, N=!1) => {
            const H = N && c ? o : r;
            return A && d.add(b),
            H.has(b) || H.add(b),
            b
        }
        ,
        cancel: b => {
            r.delete(b),
            d.delete(b)
        }
        ,
        process: b => {
            if (y = b,
            c) {
                m = !0;
                return
            }
            c = !0,
            [o,r] = [r, o],
            o.forEach(p),
            s && Pm.value && Pm.value.frameloop[s].push(g),
            g = 0,
            o.clear(),
            c = !1,
            m && (m = !1,
            S.process(b))
        }
    };
    return S
}
const V1 = 40;
function Ay(i, s) {
    let o = !1
      , r = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , m = () => o = !0
      , d = Yl.reduce( (Y, it) => (Y[it] = z1(m, s ? it : void 0),
    Y), {})
      , {setup: y, read: g, resolveKeyframes: p, preUpdate: S, update: b, preRender: A, render: N, postRender: _} = d
      , H = () => {
        const Y = dn.useManualTiming ? c.timestamp : performance.now();
        o = !1,
        dn.useManualTiming || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(Y - c.timestamp, V1), 1)),
        c.timestamp = Y,
        c.isProcessing = !0,
        y.process(c),
        g.process(c),
        p.process(c),
        S.process(c),
        b.process(c),
        A.process(c),
        N.process(c),
        _.process(c),
        c.isProcessing = !1,
        o && s && (r = !1,
        i(H))
    }
      , X = () => {
        o = !0,
        r = !0,
        c.isProcessing || i(H)
    }
    ;
    return {
        schedule: Yl.reduce( (Y, it) => {
            const B = d[it];
            return Y[it] = (F, lt=!1, W=!1) => (o || X(),
            B.schedule(F, lt, W)),
            Y
        }
        , {}),
        cancel: Y => {
            for (let it = 0; it < Yl.length; it++)
                d[Yl[it]].cancel(Y)
        }
        ,
        state: c,
        steps: d
    }
}
const {schedule: Rt, cancel: qn, state: $t, steps: Eu} = Ay(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ze, !0);
let Ql;
function U1() {
    Ql = void 0
}
const fe = {
    now: () => (Ql === void 0 && fe.set($t.isProcessing || dn.useManualTiming ? $t.timestamp : performance.now()),
    Ql),
    set: i => {
        Ql = i,
        queueMicrotask(U1)
    }
}
  , jy = i => s => typeof s == "string" && s.startsWith(i)
  , gc = jy("--")
  , _1 = jy("var(--")
  , vc = i => _1(i) ? B1.test(i.split("/*")[0].trim()) : !1
  , B1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , la = {
    test: i => typeof i == "number",
    parse: parseFloat,
    transform: i => i
}
  , ys = {
    ...la,
    transform: i => fn(0, 1, i)
}
  , Gl = {
    ...la,
    default: 1
}
  , cs = i => Math.round(i * 1e5) / 1e5
  , Sc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function L1(i) {
    return i == null
}
const H1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , bc = (i, s) => o => !!(typeof o == "string" && H1.test(o) && o.startsWith(i) || s && !L1(o) && Object.prototype.hasOwnProperty.call(o, s))
  , My = (i, s, o) => r => {
    if (typeof r != "string")
        return r;
    const [c,m,d,y] = r.match(Sc);
    return {
        [i]: parseFloat(c),
        [s]: parseFloat(m),
        [o]: parseFloat(d),
        alpha: y !== void 0 ? parseFloat(y) : 1
    }
}
  , q1 = i => fn(0, 255, i)
  , Du = {
    ...la,
    transform: i => Math.round(q1(i))
}
  , ci = {
    test: bc("rgb", "red"),
    parse: My("red", "green", "blue"),
    transform: ({red: i, green: s, blue: o, alpha: r=1}) => "rgba(" + Du.transform(i) + ", " + Du.transform(s) + ", " + Du.transform(o) + ", " + cs(ys.transform(r)) + ")"
};
function Y1(i) {
    let s = ""
      , o = ""
      , r = ""
      , c = "";
    return i.length > 5 ? (s = i.substring(1, 3),
    o = i.substring(3, 5),
    r = i.substring(5, 7),
    c = i.substring(7, 9)) : (s = i.substring(1, 2),
    o = i.substring(2, 3),
    r = i.substring(3, 4),
    c = i.substring(4, 5),
    s += s,
    o += o,
    r += r,
    c += c),
    {
        red: parseInt(s, 16),
        green: parseInt(o, 16),
        blue: parseInt(r, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Hu = {
    test: bc("#"),
    parse: Y1,
    transform: ci.transform
}
  , js = i => ({
    test: s => typeof s == "string" && s.endsWith(i) && s.split(" ").length === 1,
    parse: parseFloat,
    transform: s => `${s}${i}`
})
  , Ln = js("deg")
  , Ke = js("%")
  , nt = js("px")
  , G1 = js("vh")
  , X1 = js("vw")
  , Jm = {
    ...Ke,
    parse: i => Ke.parse(i) / 100,
    transform: i => Ke.transform(i * 100)
}
  , Ii = {
    test: bc("hsl", "hue"),
    parse: My("hue", "saturation", "lightness"),
    transform: ({hue: i, saturation: s, lightness: o, alpha: r=1}) => "hsla(" + Math.round(i) + ", " + Ke.transform(cs(s)) + ", " + Ke.transform(cs(o)) + ", " + cs(ys.transform(r)) + ")"
}
  , qt = {
    test: i => ci.test(i) || Hu.test(i) || Ii.test(i),
    parse: i => ci.test(i) ? ci.parse(i) : Ii.test(i) ? Ii.parse(i) : Hu.parse(i),
    transform: i => typeof i == "string" ? i : i.hasOwnProperty("red") ? ci.transform(i) : Ii.transform(i),
    getAnimatableNone: i => {
        const s = qt.parse(i);
        return s.alpha = 0,
        qt.transform(s)
    }
}
  , k1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Q1(i) {
    var s, o;
    return isNaN(i) && typeof i == "string" && (((s = i.match(Sc)) == null ? void 0 : s.length) || 0) + (((o = i.match(k1)) == null ? void 0 : o.length) || 0) > 0
}
const Ey = "number"
  , Dy = "color"
  , Z1 = "var"
  , K1 = "var("
  , Fm = "${}"
  , P1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gs(i) {
    const s = i.toString()
      , o = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let m = 0;
    const y = s.replace(P1, g => (qt.test(g) ? (r.color.push(m),
    c.push(Dy),
    o.push(qt.parse(g))) : g.startsWith(K1) ? (r.var.push(m),
    c.push(Z1),
    o.push(g)) : (r.number.push(m),
    c.push(Ey),
    o.push(parseFloat(g))),
    ++m,
    Fm)).split(Fm);
    return {
        values: o,
        split: y,
        indexes: r,
        types: c
    }
}
function Ny(i) {
    return gs(i).values
}
function Cy(i) {
    const {split: s, types: o} = gs(i)
      , r = s.length;
    return c => {
        let m = "";
        for (let d = 0; d < r; d++)
            if (m += s[d],
            c[d] !== void 0) {
                const y = o[d];
                y === Ey ? m += cs(c[d]) : y === Dy ? m += qt.transform(c[d]) : m += c[d]
            }
        return m
    }
}
const J1 = i => typeof i == "number" ? 0 : qt.test(i) ? qt.getAnimatableNone(i) : i;
function F1(i) {
    const s = Ny(i);
    return Cy(i)(s.map(J1))
}
const Yn = {
    test: Q1,
    parse: Ny,
    createTransformer: Cy,
    getAnimatableNone: F1
};
function Nu(i, s, o) {
    return o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? i + (s - i) * 6 * o : o < 1 / 2 ? s : o < 2 / 3 ? i + (s - i) * (2 / 3 - o) * 6 : i
}
function W1({hue: i, saturation: s, lightness: o, alpha: r}) {
    i /= 360,
    s /= 100,
    o /= 100;
    let c = 0
      , m = 0
      , d = 0;
    if (!s)
        c = m = d = o;
    else {
        const y = o < .5 ? o * (1 + s) : o + s - o * s
          , g = 2 * o - y;
        c = Nu(g, y, i + 1 / 3),
        m = Nu(g, y, i),
        d = Nu(g, y, i - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(m * 255),
        blue: Math.round(d * 255),
        alpha: r
    }
}
function Jl(i, s) {
    return o => o > 0 ? s : i
}
const Ct = (i, s, o) => i + (s - i) * o
  , Cu = (i, s, o) => {
    const r = i * i
      , c = o * (s * s - r) + r;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , $1 = [Hu, ci, Ii]
  , I1 = i => $1.find(s => s.test(i));
function Wm(i) {
    const s = I1(i);
    if (!s)
        return !1;
    let o = s.parse(i);
    return s === Ii && (o = W1(o)),
    o
}
const $m = (i, s) => {
    const o = Wm(i)
      , r = Wm(s);
    if (!o || !r)
        return Jl(i, s);
    const c = {
        ...o
    };
    return m => (c.red = Cu(o.red, r.red, m),
    c.green = Cu(o.green, r.green, m),
    c.blue = Cu(o.blue, r.blue, m),
    c.alpha = Ct(o.alpha, r.alpha, m),
    ci.transform(c))
}
  , qu = new Set(["none", "hidden"]);
function tS(i, s) {
    return qu.has(i) ? o => o <= 0 ? i : s : o => o >= 1 ? s : i
}
function eS(i, s) {
    return o => Ct(i, s, o)
}
function xc(i) {
    return typeof i == "number" ? eS : typeof i == "string" ? vc(i) ? Jl : qt.test(i) ? $m : aS : Array.isArray(i) ? Ry : typeof i == "object" ? qt.test(i) ? $m : nS : Jl
}
function Ry(i, s) {
    const o = [...i]
      , r = o.length
      , c = i.map( (m, d) => xc(m)(m, s[d]));
    return m => {
        for (let d = 0; d < r; d++)
            o[d] = c[d](m);
        return o
    }
}
function nS(i, s) {
    const o = {
        ...i,
        ...s
    }
      , r = {};
    for (const c in o)
        i[c] !== void 0 && s[c] !== void 0 && (r[c] = xc(i[c])(i[c], s[c]));
    return c => {
        for (const m in r)
            o[m] = r[m](c);
        return o
    }
}
function iS(i, s) {
    const o = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < s.values.length; c++) {
        const m = s.types[c]
          , d = i.indexes[m][r[m]]
          , y = i.values[d] ?? 0;
        o[c] = y,
        r[m]++
    }
    return o
}
const aS = (i, s) => {
    const o = Yn.createTransformer(s)
      , r = gs(i)
      , c = gs(s);
    return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? qu.has(i) && !c.values.length || qu.has(s) && !r.values.length ? tS(i, s) : Ts(Ry(iS(r, c), c.values), o) : Jl(i, s)
}
;
function Oy(i, s, o) {
    return typeof i == "number" && typeof s == "number" && typeof o == "number" ? Ct(i, s, o) : xc(i)(i, s)
}
const sS = i => {
    const s = ({timestamp: o}) => i(o);
    return {
        start: (o=!0) => Rt.update(s, o),
        stop: () => qn(s),
        now: () => $t.isProcessing ? $t.timestamp : fe.now()
    }
}
  , wy = (i, s, o=10) => {
    let r = "";
    const c = Math.max(Math.round(s / o), 2);
    for (let m = 0; m < c; m++)
        r += Math.round(i(m / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Fl = 2e4;
function Tc(i) {
    let s = 0;
    const o = 50;
    let r = i.next(s);
    for (; !r.done && s < Fl; )
        s += o,
        r = i.next(s);
    return s >= Fl ? 1 / 0 : s
}
function lS(i, s=100, o) {
    const r = o({
        ...i,
        keyframes: [0, s]
    })
      , c = Math.min(Tc(r), Fl);
    return {
        type: "keyframes",
        ease: m => r.next(c * m).value / s,
        duration: Ze(c)
    }
}
const oS = 5;
function zy(i, s, o) {
    const r = Math.max(s - oS, 0);
    return dy(o - i(r), s - r)
}
const zt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Ru = .001;
function rS({duration: i=zt.duration, bounce: s=zt.bounce, velocity: o=zt.velocity, mass: r=zt.mass}) {
    let c, m, d = 1 - s;
    d = fn(zt.minDamping, zt.maxDamping, d),
    i = fn(zt.minDuration, zt.maxDuration, Ze(i)),
    d < 1 ? (c = p => {
        const S = p * d
          , b = S * i
          , A = S - o
          , N = Yu(p, d)
          , _ = Math.exp(-b);
        return Ru - A / N * _
    }
    ,
    m = p => {
        const b = p * d * i
          , A = b * o + o
          , N = Math.pow(d, 2) * Math.pow(p, 2) * i
          , _ = Math.exp(-b)
          , H = Yu(Math.pow(p, 2), d);
        return (-c(p) + Ru > 0 ? -1 : 1) * ((A - N) * _) / H
    }
    ) : (c = p => {
        const S = Math.exp(-p * i)
          , b = (p - o) * i + 1;
        return -Ru + S * b
    }
    ,
    m = p => {
        const S = Math.exp(-p * i)
          , b = (o - p) * (i * i);
        return S * b
    }
    );
    const y = 5 / i
      , g = cS(c, m, y);
    if (i = Qe(i),
    isNaN(g))
        return {
            stiffness: zt.stiffness,
            damping: zt.damping,
            duration: i
        };
    {
        const p = Math.pow(g, 2) * r;
        return {
            stiffness: p,
            damping: d * 2 * Math.sqrt(r * p),
            duration: i
        }
    }
}
const uS = 12;
function cS(i, s, o) {
    let r = o;
    for (let c = 1; c < uS; c++)
        r = r - i(r) / s(r);
    return r
}
function Yu(i, s) {
    return i * Math.sqrt(1 - s * s)
}
const fS = ["duration", "bounce"]
  , dS = ["stiffness", "damping", "mass"];
function Im(i, s) {
    return s.some(o => i[o] !== void 0)
}
function hS(i) {
    let s = {
        velocity: zt.velocity,
        stiffness: zt.stiffness,
        damping: zt.damping,
        mass: zt.mass,
        isResolvedFromDuration: !1,
        ...i
    };
    if (!Im(i, dS) && Im(i, fS))
        if (i.visualDuration) {
            const o = i.visualDuration
              , r = 2 * Math.PI / (o * 1.2)
              , c = r * r
              , m = 2 * fn(.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
            s = {
                ...s,
                mass: zt.mass,
                stiffness: c,
                damping: m
            }
        } else {
            const o = rS(i);
            s = {
                ...s,
                ...o,
                mass: zt.mass
            },
            s.isResolvedFromDuration = !0
        }
    return s
}
function Wl(i=zt.visualDuration, s=zt.bounce) {
    const o = typeof i != "object" ? {
        visualDuration: i,
        keyframes: [0, 1],
        bounce: s
    } : i;
    let {restSpeed: r, restDelta: c} = o;
    const m = o.keyframes[0]
      , d = o.keyframes[o.keyframes.length - 1]
      , y = {
        done: !1,
        value: m
    }
      , {stiffness: g, damping: p, mass: S, duration: b, velocity: A, isResolvedFromDuration: N} = hS({
        ...o,
        velocity: -Ze(o.velocity || 0)
    })
      , _ = A || 0
      , H = p / (2 * Math.sqrt(g * S))
      , X = d - m
      , G = Ze(Math.sqrt(g / S))
      , P = Math.abs(X) < 5;
    r || (r = P ? zt.restSpeed.granular : zt.restSpeed.default),
    c || (c = P ? zt.restDelta.granular : zt.restDelta.default);
    let Y;
    if (H < 1) {
        const B = Yu(G, H);
        Y = F => {
            const lt = Math.exp(-H * G * F);
            return d - lt * ((_ + H * G * X) / B * Math.sin(B * F) + X * Math.cos(B * F))
        }
    } else if (H === 1)
        Y = B => d - Math.exp(-G * B) * (X + (_ + G * X) * B);
    else {
        const B = G * Math.sqrt(H * H - 1);
        Y = F => {
            const lt = Math.exp(-H * G * F)
              , W = Math.min(B * F, 300);
            return d - lt * ((_ + H * G * X) * Math.sinh(W) + B * X * Math.cosh(W)) / B
        }
    }
    const it = {
        calculatedDuration: N && b || null,
        next: B => {
            const F = Y(B);
            if (N)
                y.done = B >= b;
            else {
                let lt = B === 0 ? _ : 0;
                H < 1 && (lt = B === 0 ? Qe(_) : zy(Y, B, F));
                const W = Math.abs(lt) <= r
                  , St = Math.abs(d - F) <= c;
                y.done = W && St
            }
            return y.value = y.done ? d : F,
            y
        }
        ,
        toString: () => {
            const B = Math.min(Tc(it), Fl)
              , F = wy(lt => it.next(B * lt).value, B, 30);
            return B + "ms " + F
        }
        ,
        toTransition: () => {}
    };
    return it
}
Wl.applyToOptions = i => {
    const s = lS(i, 100, Wl);
    return i.ease = s.ease,
    i.duration = Qe(s.duration),
    i.type = "keyframes",
    i
}
;
function Gu({keyframes: i, velocity: s=0, power: o=.8, timeConstant: r=325, bounceDamping: c=10, bounceStiffness: m=500, modifyTarget: d, min: y, max: g, restDelta: p=.5, restSpeed: S}) {
    const b = i[0]
      , A = {
        done: !1,
        value: b
    }
      , N = W => y !== void 0 && W < y || g !== void 0 && W > g
      , _ = W => y === void 0 ? g : g === void 0 || Math.abs(y - W) < Math.abs(g - W) ? y : g;
    let H = o * s;
    const X = b + H
      , G = d === void 0 ? X : d(X);
    G !== X && (H = G - b);
    const P = W => -H * Math.exp(-W / r)
      , Y = W => G + P(W)
      , it = W => {
        const St = P(W)
          , Vt = Y(W);
        A.done = Math.abs(St) <= p,
        A.value = A.done ? G : Vt
    }
    ;
    let B, F;
    const lt = W => {
        N(A.value) && (B = W,
        F = Wl({
            keyframes: [A.value, _(A.value)],
            velocity: zy(Y, W, A.value),
            damping: c,
            stiffness: m,
            restDelta: p,
            restSpeed: S
        }))
    }
    ;
    return lt(0),
    {
        calculatedDuration: null,
        next: W => {
            let St = !1;
            return !F && B === void 0 && (St = !0,
            it(W),
            lt(W)),
            B !== void 0 && W >= B ? F.next(W - B) : (!St && it(W),
            A)
        }
    }
}
function mS(i, s, o) {
    const r = []
      , c = o || dn.mix || Oy
      , m = i.length - 1;
    for (let d = 0; d < m; d++) {
        let y = c(i[d], i[d + 1]);
        if (s) {
            const g = Array.isArray(s) ? s[d] || ze : s;
            y = Ts(g, y)
        }
        r.push(y)
    }
    return r
}
function pS(i, s, {clamp: o=!0, ease: r, mixer: c}={}) {
    const m = i.length;
    if (dc(m === s.length),
    m === 1)
        return () => s[0];
    if (m === 2 && s[0] === s[1])
        return () => s[1];
    const d = i[0] === i[1];
    i[0] > i[m - 1] && (i = [...i].reverse(),
    s = [...s].reverse());
    const y = mS(s, r, c)
      , g = y.length
      , p = S => {
        if (d && S < i[0])
            return s[0];
        let b = 0;
        if (g > 1)
            for (; b < i.length - 2 && !(S < i[b + 1]); b++)
                ;
        const A = ps(i[b], i[b + 1], S);
        return y[b](A)
    }
    ;
    return o ? S => p(fn(i[0], i[m - 1], S)) : p
}
function yS(i, s) {
    const o = i[i.length - 1];
    for (let r = 1; r <= s; r++) {
        const c = ps(0, s, r);
        i.push(Ct(o, 1, c))
    }
}
function gS(i) {
    const s = [0];
    return yS(s, i.length - 1),
    s
}
function vS(i, s) {
    return i.map(o => o * s)
}
function SS(i, s) {
    return i.map( () => s || xy).splice(0, i.length - 1)
}
function fs({duration: i=300, keyframes: s, times: o, ease: r="easeInOut"}) {
    const c = R1(r) ? r.map(Km) : Km(r)
      , m = {
        done: !1,
        value: s[0]
    }
      , d = vS(o && o.length === s.length ? o : gS(s), i)
      , y = pS(d, s, {
        ease: Array.isArray(c) ? c : SS(s, c)
    });
    return {
        calculatedDuration: i,
        next: g => (m.value = y(g),
        m.done = g >= i,
        m)
    }
}
const bS = i => i !== null;
function Ac(i, {repeat: s, repeatType: o="loop"}, r, c=1) {
    const m = i.filter(bS)
      , y = c < 0 || s && o !== "loop" && s % 2 === 1 ? 0 : m.length - 1;
    return !y || r === void 0 ? m[y] : r
}
const xS = {
    decay: Gu,
    inertia: Gu,
    tween: fs,
    keyframes: fs,
    spring: Wl
};
function Vy(i) {
    typeof i.type == "string" && (i.type = xS[i.type])
}
class jc {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(s => {
            this.resolve = s
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(s, o) {
        return this.finished.then(s, o)
    }
}
const TS = i => i / 100;
class Mc extends jc {
    constructor(s) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, c;
            const {motionValue: o} = this.options;
            o && o.updatedAt !== fe.now() && this.tick(fe.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (c = (r = this.options).onStop) == null || c.call(r))
        }
        ,
        this.options = s,
        this.initAnimation(),
        this.play(),
        s.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: s} = this;
        Vy(s);
        const {type: o=fs, repeat: r=0, repeatDelay: c=0, repeatType: m, velocity: d=0} = s;
        let {keyframes: y} = s;
        const g = o || fs;
        g !== fs && typeof y[0] != "number" && (this.mixKeyframes = Ts(TS, Oy(y[0], y[1])),
        y = [0, 100]);
        const p = g({
            ...s,
            keyframes: y
        });
        m === "mirror" && (this.mirroredGenerator = g({
            ...s,
            keyframes: [...y].reverse(),
            velocity: -d
        })),
        p.calculatedDuration === null && (p.calculatedDuration = Tc(p));
        const {calculatedDuration: S} = p;
        this.calculatedDuration = S,
        this.resolvedDuration = S + c,
        this.totalDuration = this.resolvedDuration * (r + 1) - c,
        this.generator = p
    }
    updateTime(s) {
        const o = Math.round(s - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o
    }
    tick(s, o=!1) {
        const {generator: r, totalDuration: c, mixKeyframes: m, mirroredGenerator: d, resolvedDuration: y, calculatedDuration: g} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: p=0, keyframes: S, repeat: b, repeatType: A, repeatDelay: N, type: _, onUpdate: H, finalKeyframe: X} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, s) : this.speed < 0 && (this.startTime = Math.min(s - c / this.speed, this.startTime)),
        o ? this.currentTime = s : this.updateTime(s);
        const G = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1)
          , P = this.playbackSpeed >= 0 ? G < 0 : G > c;
        this.currentTime = Math.max(G, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let Y = this.currentTime
          , it = r;
        if (b) {
            const W = Math.min(this.currentTime, c) / y;
            let St = Math.floor(W)
              , Vt = W % 1;
            !Vt && W >= 1 && (Vt = 1),
            Vt === 1 && St--,
            St = Math.min(St, b + 1),
            !!(St % 2) && (A === "reverse" ? (Vt = 1 - Vt,
            N && (Vt -= N / y)) : A === "mirror" && (it = d)),
            Y = fn(0, 1, Vt) * y
        }
        const B = P ? {
            done: !1,
            value: S[0]
        } : it.next(Y);
        m && (B.value = m(B.value));
        let {done: F} = B;
        !P && g !== null && (F = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const lt = this.holdTime === null && (this.state === "finished" || this.state === "running" && F);
        return lt && _ !== Gu && (B.value = Ac(S, this.options, X, this.speed)),
        H && H(B.value),
        lt && this.finish(),
        B
    }
    then(s, o) {
        return this.finished.then(s, o)
    }
    get duration() {
        return Ze(this.calculatedDuration)
    }
    get time() {
        return Ze(this.currentTime)
    }
    set time(s) {
        var o;
        s = Qe(s),
        this.currentTime = s,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = s : this.driver && (this.startTime = this.driver.now() - s / this.playbackSpeed),
        (o = this.driver) == null || o.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(s) {
        this.updateTime(fe.now());
        const o = this.playbackSpeed !== s;
        this.playbackSpeed = s,
        o && (this.time = Ze(this.currentTime))
    }
    play() {
        var c, m;
        if (this.isStopped)
            return;
        const {driver: s=sS, startTime: o} = this.options;
        this.driver || (this.driver = s(d => this.tick(d))),
        (m = (c = this.options).onPlay) == null || m.call(c);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(fe.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var s, o;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (o = (s = this.options).onComplete) == null || o.call(s)
    }
    cancel() {
        var s, o;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (o = (s = this.options).onCancel) == null || o.call(s)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(s) {
        return this.startTime = 0,
        this.tick(s, !0)
    }
    attachTimeline(s) {
        var o;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (o = this.driver) == null || o.stop(),
        s.observe(this)
    }
}
function AS(i) {
    for (let s = 1; s < i.length; s++)
        i[s] ?? (i[s] = i[s - 1])
}
const fi = i => i * 180 / Math.PI
  , Xu = i => {
    const s = fi(Math.atan2(i[1], i[0]));
    return ku(s)
}
  , jS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: i => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: Xu,
    rotateZ: Xu,
    skewX: i => fi(Math.atan(i[1])),
    skewY: i => fi(Math.atan(i[2])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}
  , ku = i => (i = i % 360,
i < 0 && (i += 360),
i)
  , tp = Xu
  , ep = i => Math.sqrt(i[0] * i[0] + i[1] * i[1])
  , np = i => Math.sqrt(i[4] * i[4] + i[5] * i[5])
  , MS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: ep,
    scaleY: np,
    scale: i => (ep(i) + np(i)) / 2,
    rotateX: i => ku(fi(Math.atan2(i[6], i[5]))),
    rotateY: i => ku(fi(Math.atan2(-i[2], i[0]))),
    rotateZ: tp,
    rotate: tp,
    skewX: i => fi(Math.atan(i[4])),
    skewY: i => fi(Math.atan(i[1])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Qu(i) {
    return i.includes("scale") ? 1 : 0
}
function Zu(i, s) {
    if (!i || i === "none")
        return Qu(s);
    const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, c;
    if (o)
        r = MS,
        c = o;
    else {
        const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = jS,
        c = y
    }
    if (!c)
        return Qu(s);
    const m = r[s]
      , d = c[1].split(",").map(DS);
    return typeof m == "function" ? m(d) : d[m]
}
const ES = (i, s) => {
    const {transform: o="none"} = getComputedStyle(i);
    return Zu(o, s)
}
;
function DS(i) {
    return parseFloat(i.trim())
}
const oa = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ra = new Set(oa)
  , ip = i => i === la || i === nt
  , NS = new Set(["x", "y", "z"])
  , CS = oa.filter(i => !NS.has(i));
function RS(i) {
    const s = [];
    return CS.forEach(o => {
        const r = i.getValue(o);
        r !== void 0 && (s.push([o, r.get()]),
        r.set(o.startsWith("scale") ? 1 : 0))
    }
    ),
    s
}
const di = {
    width: ({x: i}, {paddingLeft: s="0", paddingRight: o="0"}) => i.max - i.min - parseFloat(s) - parseFloat(o),
    height: ({y: i}, {paddingTop: s="0", paddingBottom: o="0"}) => i.max - i.min - parseFloat(s) - parseFloat(o),
    top: (i, {top: s}) => parseFloat(s),
    left: (i, {left: s}) => parseFloat(s),
    bottom: ({y: i}, {top: s}) => parseFloat(s) + (i.max - i.min),
    right: ({x: i}, {left: s}) => parseFloat(s) + (i.max - i.min),
    x: (i, {transform: s}) => Zu(s, "x"),
    y: (i, {transform: s}) => Zu(s, "y")
};
di.translateX = di.x;
di.translateY = di.y;
const hi = new Set;
let Ku = !1
  , Pu = !1
  , Ju = !1;
function Uy() {
    if (Pu) {
        const i = Array.from(hi).filter(r => r.needsMeasurement)
          , s = new Set(i.map(r => r.element))
          , o = new Map;
        s.forEach(r => {
            const c = RS(r);
            c.length && (o.set(r, c),
            r.render())
        }
        ),
        i.forEach(r => r.measureInitialState()),
        s.forEach(r => {
            r.render();
            const c = o.get(r);
            c && c.forEach( ([m,d]) => {
                var y;
                (y = r.getValue(m)) == null || y.set(d)
            }
            )
        }
        ),
        i.forEach(r => r.measureEndState()),
        i.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Pu = !1,
    Ku = !1,
    hi.forEach(i => i.complete(Ju)),
    hi.clear()
}
function _y() {
    hi.forEach(i => {
        i.readKeyframes(),
        i.needsMeasurement && (Pu = !0)
    }
    )
}
function OS() {
    Ju = !0,
    _y(),
    Uy(),
    Ju = !1
}
class Ec {
    constructor(s, o, r, c, m, d=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...s],
        this.onComplete = o,
        this.name = r,
        this.motionValue = c,
        this.element = m,
        this.isAsync = d
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (hi.add(this),
        Ku || (Ku = !0,
        Rt.read(_y),
        Rt.resolveKeyframes(Uy))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: s, name: o, element: r, motionValue: c} = this;
        if (s[0] === null) {
            const m = c == null ? void 0 : c.get()
              , d = s[s.length - 1];
            if (m !== void 0)
                s[0] = m;
            else if (r && o) {
                const y = r.readValue(o, d);
                y != null && (s[0] = y)
            }
            s[0] === void 0 && (s[0] = d),
            c && m === void 0 && c.set(s[0])
        }
        AS(s)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(s=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, s),
        hi.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (hi.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const wS = i => i.startsWith("--");
function zS(i, s, o) {
    wS(s) ? i.style.setProperty(s, o) : i.style[s] = o
}
const VS = hc( () => window.ScrollTimeline !== void 0)
  , US = {};
function _S(i, s) {
    const o = hc(i);
    return () => US[s] ?? o()
}
const By = _S( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , us = ([i,s,o,r]) => `cubic-bezier(${i}, ${s}, ${o}, ${r})`
  , ap = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: us([0, .65, .55, 1]),
    circOut: us([.55, 0, 1, .45]),
    backIn: us([.31, .01, .66, -.59]),
    backOut: us([.33, 1.53, .69, .99])
};
function Ly(i, s) {
    if (i)
        return typeof i == "function" ? By() ? wy(i, s) : "ease-out" : Ty(i) ? us(i) : Array.isArray(i) ? i.map(o => Ly(o, s) || ap.easeOut) : ap[i]
}
function BS(i, s, o, {delay: r=0, duration: c=300, repeat: m=0, repeatType: d="loop", ease: y="easeOut", times: g}={}, p=void 0) {
    const S = {
        [s]: o
    };
    g && (S.offset = g);
    const b = Ly(y, c);
    Array.isArray(b) && (S.easing = b);
    const A = {
        delay: r,
        duration: c,
        easing: Array.isArray(b) ? "linear" : b,
        fill: "both",
        iterations: m + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return p && (A.pseudoElement = p),
    i.animate(S, A)
}
function Hy(i) {
    return typeof i == "function" && "applyToOptions"in i
}
function LS({type: i, ...s}) {
    return Hy(i) && By() ? i.applyToOptions(s) : (s.duration ?? (s.duration = 300),
    s.ease ?? (s.ease = "easeOut"),
    s)
}
class HS extends jc {
    constructor(s) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !s)
            return;
        const {element: o, name: r, keyframes: c, pseudoElement: m, allowFlatten: d=!1, finalKeyframe: y, onComplete: g} = s;
        this.isPseudoElement = !!m,
        this.allowFlatten = d,
        this.options = s,
        dc(typeof s.type != "string");
        const p = LS(s);
        this.animation = BS(o, r, c, p, m),
        p.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !m) {
                const S = Ac(c, this.options, y, this.speed);
                this.updateMotionValue ? this.updateMotionValue(S) : zS(o, r, S),
                this.animation.cancel()
            }
            g == null || g(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var s, o;
        (o = (s = this.animation).finish) == null || o.call(s)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: s} = this;
        s === "idle" || s === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var s, o;
        this.isPseudoElement || (o = (s = this.animation).commitStyles) == null || o.call(s)
    }
    get duration() {
        var o, r;
        const s = ((r = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null ? void 0 : r.call(o).duration) || 0;
        return Ze(Number(s))
    }
    get time() {
        return Ze(Number(this.animation.currentTime) || 0)
    }
    set time(s) {
        this.finishedTime = null,
        this.animation.currentTime = Qe(s)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(s) {
        s < 0 && (this.finishedTime = null),
        this.animation.playbackRate = s
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(s) {
        this.animation.startTime = s
    }
    attachTimeline({timeline: s, observe: o}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        s && VS() ? (this.animation.timeline = s,
        ze) : o(this)
    }
}
const qy = {
    anticipate: vy,
    backInOut: gy,
    circInOut: by
};
function qS(i) {
    return i in qy
}
function YS(i) {
    typeof i.ease == "string" && qS(i.ease) && (i.ease = qy[i.ease])
}
const sp = 10;
class GS extends HS {
    constructor(s) {
        YS(s),
        Vy(s),
        super(s),
        s.startTime && (this.startTime = s.startTime),
        this.options = s
    }
    updateMotionValue(s) {
        const {motionValue: o, onUpdate: r, onComplete: c, element: m, ...d} = this.options;
        if (!o)
            return;
        if (s !== void 0) {
            o.set(s);
            return
        }
        const y = new Mc({
            ...d,
            autoplay: !1
        })
          , g = Qe(this.finishedTime ?? this.time);
        o.setWithVelocity(y.sample(g - sp).value, y.sample(g).value, sp),
        y.stop()
    }
}
const lp = (i, s) => s === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (Yn.test(i) || i === "0") && !i.startsWith("url("));
function XS(i) {
    const s = i[0];
    if (i.length === 1)
        return !0;
    for (let o = 0; o < i.length; o++)
        if (i[o] !== s)
            return !0
}
function kS(i, s, o, r) {
    const c = i[0];
    if (c === null)
        return !1;
    if (s === "display" || s === "visibility")
        return !0;
    const m = i[i.length - 1]
      , d = lp(c, s)
      , y = lp(m, s);
    return !d || !y ? !1 : XS(i) || (o === "spring" || Hy(o)) && r
}
function Dc(i) {
    return cy(i) && "offsetHeight"in i
}
const QS = new Set(["opacity", "clipPath", "filter", "transform"])
  , ZS = hc( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function KS(i) {
    var p;
    const {motionValue: s, name: o, repeatDelay: r, repeatType: c, damping: m, type: d} = i;
    if (!Dc((p = s == null ? void 0 : s.owner) == null ? void 0 : p.current))
        return !1;
    const {onUpdate: y, transformTemplate: g} = s.owner.getProps();
    return ZS() && o && QS.has(o) && (o !== "transform" || !g) && !y && !r && c !== "mirror" && m !== 0 && d !== "inertia"
}
const PS = 40;
class JS extends jc {
    constructor({autoplay: s=!0, delay: o=0, type: r="keyframes", repeat: c=0, repeatDelay: m=0, repeatType: d="loop", keyframes: y, name: g, motionValue: p, element: S, ...b}) {
        var _;
        super(),
        this.stop = () => {
            var H, X;
            this._animation && (this._animation.stop(),
            (H = this.stopTimeline) == null || H.call(this)),
            (X = this.keyframeResolver) == null || X.cancel()
        }
        ,
        this.createdAt = fe.now();
        const A = {
            autoplay: s,
            delay: o,
            type: r,
            repeat: c,
            repeatDelay: m,
            repeatType: d,
            name: g,
            motionValue: p,
            element: S,
            ...b
        }
          , N = (S == null ? void 0 : S.KeyframeResolver) || Ec;
        this.keyframeResolver = new N(y, (H, X, G) => this.onKeyframesResolved(H, X, A, !G),g,p,S),
        (_ = this.keyframeResolver) == null || _.scheduleResolve()
    }
    onKeyframesResolved(s, o, r, c) {
        this.keyframeResolver = void 0;
        const {name: m, type: d, velocity: y, delay: g, isHandoff: p, onUpdate: S} = r;
        this.resolvedAt = fe.now(),
        kS(s, m, d, y) || ((dn.instantAnimations || !g) && (S == null || S(Ac(s, r, o))),
        s[0] = s[s.length - 1],
        r.duration = 0,
        r.repeat = 0);
        const A = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > PS ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: o,
            ...r,
            keyframes: s
        }
          , N = !p && KS(A) ? new GS({
            ...A,
            element: A.motionValue.owner.current
        }) : new Mc(A);
        N.finished.then( () => this.notifyFinished()).catch(ze),
        this.pendingTimeline && (this.stopTimeline = N.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = N
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(s, o) {
        return this.finished.finally(s).then( () => {}
        )
    }
    get animation() {
        var s;
        return this._animation || ((s = this.keyframeResolver) == null || s.resume(),
        OS()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(s) {
        this.animation.time = s
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(s) {
        this.animation.speed = s
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(s) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(s) : this.pendingTimeline = s,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var s;
        this._animation && this.animation.cancel(),
        (s = this.keyframeResolver) == null || s.cancel()
    }
}
const FS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function WS(i) {
    const s = FS.exec(i);
    if (!s)
        return [, ];
    const [,o,r,c] = s;
    return [`--${o ?? r}`, c]
}
function Yy(i, s, o=1) {
    const [r,c] = WS(i);
    if (!r)
        return;
    const m = window.getComputedStyle(s).getPropertyValue(r);
    if (m) {
        const d = m.trim();
        return uy(d) ? parseFloat(d) : d
    }
    return vc(c) ? Yy(c, s, o + 1) : c
}
function Nc(i, s) {
    return (i == null ? void 0 : i[s]) ?? (i == null ? void 0 : i.default) ?? i
}
const Gy = new Set(["width", "height", "top", "left", "right", "bottom", ...oa])
  , $S = {
    test: i => i === "auto",
    parse: i => i
}
  , Xy = i => s => s.test(i)
  , ky = [la, nt, Ke, Ln, X1, G1, $S]
  , op = i => ky.find(Xy(i));
function IS(i) {
    return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || fy(i) : !0
}
const tb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function eb(i) {
    const [s,o] = i.slice(0, -1).split("(");
    if (s === "drop-shadow")
        return i;
    const [r] = o.match(Sc) || [];
    if (!r)
        return i;
    const c = o.replace(r, "");
    let m = tb.has(s) ? 1 : 0;
    return r !== o && (m *= 100),
    s + "(" + m + c + ")"
}
const nb = /\b([a-z-]*)\(.*?\)/gu
  , Fu = {
    ...Yn,
    getAnimatableNone: i => {
        const s = i.match(nb);
        return s ? s.map(eb).join(" ") : i
    }
}
  , rp = {
    ...la,
    transform: Math.round
}
  , ib = {
    rotate: Ln,
    rotateX: Ln,
    rotateY: Ln,
    rotateZ: Ln,
    scale: Gl,
    scaleX: Gl,
    scaleY: Gl,
    scaleZ: Gl,
    skew: Ln,
    skewX: Ln,
    skewY: Ln,
    distance: nt,
    translateX: nt,
    translateY: nt,
    translateZ: nt,
    x: nt,
    y: nt,
    z: nt,
    perspective: nt,
    transformPerspective: nt,
    opacity: ys,
    originX: Jm,
    originY: Jm,
    originZ: nt
}
  , Cc = {
    borderWidth: nt,
    borderTopWidth: nt,
    borderRightWidth: nt,
    borderBottomWidth: nt,
    borderLeftWidth: nt,
    borderRadius: nt,
    radius: nt,
    borderTopLeftRadius: nt,
    borderTopRightRadius: nt,
    borderBottomRightRadius: nt,
    borderBottomLeftRadius: nt,
    width: nt,
    maxWidth: nt,
    height: nt,
    maxHeight: nt,
    top: nt,
    right: nt,
    bottom: nt,
    left: nt,
    padding: nt,
    paddingTop: nt,
    paddingRight: nt,
    paddingBottom: nt,
    paddingLeft: nt,
    margin: nt,
    marginTop: nt,
    marginRight: nt,
    marginBottom: nt,
    marginLeft: nt,
    backgroundPositionX: nt,
    backgroundPositionY: nt,
    ...ib,
    zIndex: rp,
    fillOpacity: ys,
    strokeOpacity: ys,
    numOctaves: rp
}
  , ab = {
    ...Cc,
    color: qt,
    backgroundColor: qt,
    outlineColor: qt,
    fill: qt,
    stroke: qt,
    borderColor: qt,
    borderTopColor: qt,
    borderRightColor: qt,
    borderBottomColor: qt,
    borderLeftColor: qt,
    filter: Fu,
    WebkitFilter: Fu
}
  , Qy = i => ab[i];
function Zy(i, s) {
    let o = Qy(i);
    return o !== Fu && (o = Yn),
    o.getAnimatableNone ? o.getAnimatableNone(s) : void 0
}
const sb = new Set(["auto", "none", "0"]);
function lb(i, s, o) {
    let r = 0, c;
    for (; r < i.length && !c; ) {
        const m = i[r];
        typeof m == "string" && !sb.has(m) && gs(m).values.length && (c = i[r]),
        r++
    }
    if (c && o)
        for (const m of s)
            i[m] = Zy(o, c)
}
class ob extends Ec {
    constructor(s, o, r, c, m) {
        super(s, o, r, c, m, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: s, element: o, name: r} = this;
        if (!o || !o.current)
            return;
        super.readKeyframes();
        for (let g = 0; g < s.length; g++) {
            let p = s[g];
            if (typeof p == "string" && (p = p.trim(),
            vc(p))) {
                const S = Yy(p, o.current);
                S !== void 0 && (s[g] = S),
                g === s.length - 1 && (this.finalKeyframe = p)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Gy.has(r) || s.length !== 2)
            return;
        const [c,m] = s
          , d = op(c)
          , y = op(m);
        if (d !== y)
            if (ip(d) && ip(y))
                for (let g = 0; g < s.length; g++) {
                    const p = s[g];
                    typeof p == "string" && (s[g] = parseFloat(p))
                }
            else
                di[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: s, name: o} = this
          , r = [];
        for (let c = 0; c < s.length; c++)
            (s[c] === null || IS(s[c])) && r.push(c);
        r.length && lb(s, r, o)
    }
    measureInitialState() {
        const {element: s, unresolvedKeyframes: o, name: r} = this;
        if (!s || !s.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = di[r](s.measureViewportBox(), window.getComputedStyle(s.current)),
        o[0] = this.measuredOrigin;
        const c = o[o.length - 1];
        c !== void 0 && s.getValue(r, c).jump(c, !1)
    }
    measureEndState() {
        var y;
        const {element: s, name: o, unresolvedKeyframes: r} = this;
        if (!s || !s.current)
            return;
        const c = s.getValue(o);
        c && c.jump(this.measuredOrigin, !1);
        const m = r.length - 1
          , d = r[m];
        r[m] = di[o](s.measureViewportBox(), window.getComputedStyle(s.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        (y = this.removedTransforms) != null && y.length && this.removedTransforms.forEach( ([g,p]) => {
            s.getValue(g).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function rb(i, s, o) {
    if (i instanceof EventTarget)
        return [i];
    if (typeof i == "string") {
        let r = document;
        const c = (o == null ? void 0 : o[i]) ?? r.querySelectorAll(i);
        return c ? Array.from(c) : []
    }
    return Array.from(i)
}
const Ky = (i, s) => s && typeof i == "number" ? s.transform(i) : i
  , up = 30
  , ub = i => !isNaN(parseFloat(i));
class cb {
    constructor(s, o={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, c=!0) => {
            var d, y;
            const m = fe.now();
            if (this.updatedAt !== m && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
                for (const g of this.dependents)
                    g.dirty();
            c && ((y = this.events.renderRequest) == null || y.notify(this.current))
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(s),
        this.owner = o.owner
    }
    setCurrent(s) {
        this.current = s,
        this.updatedAt = fe.now(),
        this.canTrackVelocity === null && s !== void 0 && (this.canTrackVelocity = ub(this.current))
    }
    setPrevFrameValue(s=this.current) {
        this.prevFrameValue = s,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(s) {
        return this.on("change", s)
    }
    on(s, o) {
        this.events[s] || (this.events[s] = new mc);
        const r = this.events[s].add(o);
        return s === "change" ? () => {
            r(),
            Rt.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const s in this.events)
            this.events[s].clear()
    }
    attach(s, o) {
        this.passiveEffect = s,
        this.stopPassiveEffect = o
    }
    set(s, o=!0) {
        !o || !this.passiveEffect ? this.updateAndNotify(s, o) : this.passiveEffect(s, this.updateAndNotify)
    }
    setWithVelocity(s, o, r) {
        this.set(o),
        this.prev = void 0,
        this.prevFrameValue = s,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(s, o=!0) {
        this.updateAndNotify(s),
        this.prev = s,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        o && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var s;
        (s = this.events.change) == null || s.notify(this.current)
    }
    addDependent(s) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(s)
    }
    removeDependent(s) {
        this.dependents && this.dependents.delete(s)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const s = fe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || s - this.updatedAt > up)
            return 0;
        const o = Math.min(this.updatedAt - this.prevUpdatedAt, up);
        return dy(parseFloat(this.current) - parseFloat(this.prevFrameValue), o)
    }
    start(s) {
        return this.stop(),
        new Promise(o => {
            this.hasAnimated = !0,
            this.animation = s(o),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var s, o;
        (s = this.dependents) == null || s.clear(),
        (o = this.events.destroy) == null || o.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function aa(i, s) {
    return new cb(i,s)
}
const {schedule: Rc} = Ay(queueMicrotask, !1)
  , Be = {
    x: !1,
    y: !1
};
function Py() {
    return Be.x || Be.y
}
function fb(i) {
    return i === "x" || i === "y" ? Be[i] ? null : (Be[i] = !0,
    () => {
        Be[i] = !1
    }
    ) : Be.x || Be.y ? null : (Be.x = Be.y = !0,
    () => {
        Be.x = Be.y = !1
    }
    )
}
function Jy(i, s) {
    const o = rb(i)
      , r = new AbortController
      , c = {
        passive: !0,
        ...s,
        signal: r.signal
    };
    return [o, c, () => r.abort()]
}
function cp(i) {
    return !(i.pointerType === "touch" || Py())
}
function db(i, s, o={}) {
    const [r,c,m] = Jy(i, o)
      , d = y => {
        if (!cp(y))
            return;
        const {target: g} = y
          , p = s(g, y);
        if (typeof p != "function" || !g)
            return;
        const S = b => {
            cp(b) && (p(b),
            g.removeEventListener("pointerleave", S))
        }
        ;
        g.addEventListener("pointerleave", S, c)
    }
    ;
    return r.forEach(y => {
        y.addEventListener("pointerenter", d, c)
    }
    ),
    m
}
const Fy = (i, s) => s ? i === s ? !0 : Fy(i, s.parentElement) : !1
  , Oc = i => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1
  , hb = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function mb(i) {
    return hb.has(i.tagName) || i.tabIndex !== -1
}
const Zl = new WeakSet;
function fp(i) {
    return s => {
        s.key === "Enter" && i(s)
    }
}
function Ou(i, s) {
    i.dispatchEvent(new PointerEvent("pointer" + s,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const pb = (i, s) => {
    const o = i.currentTarget;
    if (!o)
        return;
    const r = fp( () => {
        if (Zl.has(o))
            return;
        Ou(o, "down");
        const c = fp( () => {
            Ou(o, "up")
        }
        )
          , m = () => Ou(o, "cancel");
        o.addEventListener("keyup", c, s),
        o.addEventListener("blur", m, s)
    }
    );
    o.addEventListener("keydown", r, s),
    o.addEventListener("blur", () => o.removeEventListener("keydown", r), s)
}
;
function dp(i) {
    return Oc(i) && !Py()
}
function yb(i, s, o={}) {
    const [r,c,m] = Jy(i, o)
      , d = y => {
        const g = y.currentTarget;
        if (!dp(y))
            return;
        Zl.add(g);
        const p = s(g, y)
          , S = (N, _) => {
            window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", A),
            Zl.has(g) && Zl.delete(g),
            dp(N) && typeof p == "function" && p(N, {
                success: _
            })
        }
          , b = N => {
            S(N, g === window || g === document || o.useGlobalTarget || Fy(g, N.target))
        }
          , A = N => {
            S(N, !1)
        }
        ;
        window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", A, c)
    }
    ;
    return r.forEach(y => {
        (o.useGlobalTarget ? window : y).addEventListener("pointerdown", d, c),
        Dc(y) && (y.addEventListener("focus", p => pb(p, c)),
        !mb(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0))
    }
    ),
    m
}
function Wy(i) {
    return cy(i) && "ownerSVGElement"in i
}
function gb(i) {
    return Wy(i) && i.tagName === "svg"
}
const ie = i => !!(i && i.getVelocity)
  , vb = [...ky, qt, Yn]
  , Sb = i => vb.find(Xy(i))
  , wc = L.createContext({
    transformPagePoint: i => i,
    isStatic: !1,
    reducedMotion: "never"
});
class bb extends L.Component {
    getSnapshotBeforeUpdate(s) {
        const o = this.props.childRef.current;
        if (o && s.isPresent && !this.props.isPresent) {
            const r = o.offsetParent
              , c = Dc(r) && r.offsetWidth || 0
              , m = this.props.sizeRef.current;
            m.height = o.offsetHeight || 0,
            m.width = o.offsetWidth || 0,
            m.top = o.offsetTop,
            m.left = o.offsetLeft,
            m.right = c - m.width - m.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function xb({children: i, isPresent: s, anchorX: o}) {
    const r = L.useId()
      , c = L.useRef(null)
      , m = L.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: d} = L.useContext(wc);
    return L.useInsertionEffect( () => {
        const {width: y, height: g, top: p, left: S, right: b} = m.current;
        if (s || !c.current || !y || !g)
            return;
        const A = o === "left" ? `left: ${S}` : `right: ${b}`;
        c.current.dataset.motionPopId = r;
        const N = document.createElement("style");
        return d && (N.nonce = d),
        document.head.appendChild(N),
        N.sheet && N.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${g}px !important;
            ${A}px !important;
            top: ${p}px !important;
          }
        `),
        () => {
            document.head.contains(N) && document.head.removeChild(N)
        }
    }
    , [s]),
    f.jsx(bb, {
        isPresent: s,
        childRef: c,
        sizeRef: m,
        children: L.cloneElement(i, {
            ref: c
        })
    })
}
const Tb = ({children: i, initial: s, isPresent: o, onExitComplete: r, custom: c, presenceAffectsLayout: m, mode: d, anchorX: y}) => {
    const g = rc(Ab)
      , p = L.useId();
    let S = !0
      , b = L.useMemo( () => (S = !1,
    {
        id: p,
        initial: s,
        isPresent: o,
        custom: c,
        onExitComplete: A => {
            g.set(A, !0);
            for (const N of g.values())
                if (!N)
                    return;
            r && r()
        }
        ,
        register: A => (g.set(A, !1),
        () => g.delete(A))
    }), [o, g, r]);
    return m && S && (b = {
        ...b
    }),
    L.useMemo( () => {
        g.forEach( (A, N) => g.set(N, !1))
    }
    , [o]),
    L.useEffect( () => {
        !o && !g.size && r && r()
    }
    , [o]),
    d === "popLayout" && (i = f.jsx(xb, {
        isPresent: o,
        anchorX: y,
        children: i
    })),
    f.jsx(to.Provider, {
        value: b,
        children: i
    })
}
;
function Ab() {
    return new Map
}
function $y(i=!0) {
    const s = L.useContext(to);
    if (s === null)
        return [!0, null];
    const {isPresent: o, onExitComplete: r, register: c} = s
      , m = L.useId();
    L.useEffect( () => {
        if (i)
            return c(m)
    }
    , [i]);
    const d = L.useCallback( () => i && r && r(m), [m, r, i]);
    return !o && r ? [!1, d] : [!0]
}
const Xl = i => i.key || "";
function hp(i) {
    const s = [];
    return L.Children.forEach(i, o => {
        L.isValidElement(o) && s.push(o)
    }
    ),
    s
}
const Gn = ({children: i, custom: s, initial: o=!0, onExitComplete: r, presenceAffectsLayout: c=!0, mode: m="sync", propagate: d=!1, anchorX: y="left"}) => {
    const [g,p] = $y(d)
      , S = L.useMemo( () => hp(i), [i])
      , b = d && !g ? [] : S.map(Xl)
      , A = L.useRef(!0)
      , N = L.useRef(S)
      , _ = rc( () => new Map)
      , [H,X] = L.useState(S)
      , [G,P] = L.useState(S);
    ry( () => {
        A.current = !1,
        N.current = S;
        for (let B = 0; B < G.length; B++) {
            const F = Xl(G[B]);
            b.includes(F) ? _.delete(F) : _.get(F) !== !0 && _.set(F, !1)
        }
    }
    , [G, b.length, b.join("-")]);
    const Y = [];
    if (S !== H) {
        let B = [...S];
        for (let F = 0; F < G.length; F++) {
            const lt = G[F]
              , W = Xl(lt);
            b.includes(W) || (B.splice(F, 0, lt),
            Y.push(lt))
        }
        return m === "wait" && Y.length && (B = Y),
        P(hp(B)),
        X(S),
        null
    }
    const {forceRender: it} = L.useContext(oc);
    return f.jsx(f.Fragment, {
        children: G.map(B => {
            const F = Xl(B)
              , lt = d && !g ? !1 : S === G || b.includes(F)
              , W = () => {
                if (_.has(F))
                    _.set(F, !0);
                else
                    return;
                let St = !0;
                _.forEach(Vt => {
                    Vt || (St = !1)
                }
                ),
                St && (it == null || it(),
                P(N.current),
                d && (p == null || p()),
                r && r())
            }
            ;
            return f.jsx(Tb, {
                isPresent: lt,
                initial: !A.current || o ? void 0 : !1,
                custom: s,
                presenceAffectsLayout: c,
                mode: m,
                onExitComplete: lt ? void 0 : W,
                anchorX: y,
                children: B
            }, F)
        }
        )
    })
}
  , Iy = L.createContext({
    strict: !1
})
  , mp = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , sa = {};
for (const i in mp)
    sa[i] = {
        isEnabled: s => mp[i].some(o => !!s[o])
    };
function jb(i) {
    for (const s in i)
        sa[s] = {
            ...sa[s],
            ...i[s]
        }
}
const Mb = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function $l(i) {
    return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || Mb.has(i)
}
let t0 = i => !$l(i);
function Eb(i) {
    typeof i == "function" && (t0 = s => s.startsWith("on") ? !$l(s) : i(s))
}
try {
    Eb(require("@emotion/is-prop-valid").default)
} catch {}
function Db(i, s, o) {
    const r = {};
    for (const c in i)
        c === "values" && typeof i.values == "object" || (t0(c) || o === !0 && $l(c) || !s && !$l(c) || i.draggable && c.startsWith("onDrag")) && (r[c] = i[c]);
    return r
}
function Nb(i) {
    if (typeof Proxy > "u")
        return i;
    const s = new Map
      , o = (...r) => i(...r);
    return new Proxy(o,{
        get: (r, c) => c === "create" ? i : (s.has(c) || s.set(c, i(c)),
        s.get(c))
    })
}
const eo = L.createContext({});
function no(i) {
    return i !== null && typeof i == "object" && typeof i.start == "function"
}
function vs(i) {
    return typeof i == "string" || Array.isArray(i)
}
const zc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Vc = ["initial", ...zc];
function io(i) {
    return no(i.animate) || Vc.some(s => vs(i[s]))
}
function e0(i) {
    return !!(io(i) || i.variants)
}
function Cb(i, s) {
    if (io(i)) {
        const {initial: o, animate: r} = i;
        return {
            initial: o === !1 || vs(o) ? o : void 0,
            animate: vs(r) ? r : void 0
        }
    }
    return i.inherit !== !1 ? s : {}
}
function Rb(i) {
    const {initial: s, animate: o} = Cb(i, L.useContext(eo));
    return L.useMemo( () => ({
        initial: s,
        animate: o
    }), [pp(s), pp(o)])
}
function pp(i) {
    return Array.isArray(i) ? i.join(" ") : i
}
const Ob = Symbol.for("motionComponentSymbol");
function ta(i) {
    return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current")
}
function wb(i, s, o) {
    return L.useCallback(r => {
        r && i.onMount && i.onMount(r),
        s && (r ? s.mount(r) : s.unmount()),
        o && (typeof o == "function" ? o(r) : ta(o) && (o.current = r))
    }
    , [s])
}
const Uc = i => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , zb = "framerAppearId"
  , n0 = "data-" + Uc(zb)
  , i0 = L.createContext({});
function Vb(i, s, o, r, c) {
    var H, X;
    const {visualElement: m} = L.useContext(eo)
      , d = L.useContext(Iy)
      , y = L.useContext(to)
      , g = L.useContext(wc).reducedMotion
      , p = L.useRef(null);
    r = r || d.renderer,
    !p.current && r && (p.current = r(i, {
        visualState: s,
        parent: m,
        props: o,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const S = p.current
      , b = L.useContext(i0);
    S && !S.projection && c && (S.type === "html" || S.type === "svg") && Ub(p.current, o, c, b);
    const A = L.useRef(!1);
    L.useInsertionEffect( () => {
        S && A.current && S.update(o, y)
    }
    );
    const N = o[n0]
      , _ = L.useRef(!!N && !((H = window.MotionHandoffIsComplete) != null && H.call(window, N)) && ((X = window.MotionHasOptimisedAnimation) == null ? void 0 : X.call(window, N)));
    return ry( () => {
        S && (A.current = !0,
        window.MotionIsMounted = !0,
        S.updateFeatures(),
        Rc.render(S.render),
        _.current && S.animationState && S.animationState.animateChanges())
    }
    ),
    L.useEffect( () => {
        S && (!_.current && S.animationState && S.animationState.animateChanges(),
        _.current && (queueMicrotask( () => {
            var G;
            (G = window.MotionHandoffMarkAsComplete) == null || G.call(window, N)
        }
        ),
        _.current = !1))
    }
    ),
    S
}
function Ub(i, s, o, r) {
    const {layoutId: c, layout: m, drag: d, dragConstraints: y, layoutScroll: g, layoutRoot: p, layoutCrossfade: S} = s;
    i.projection = new o(i.latestValues,s["data-framer-portal-id"] ? void 0 : a0(i.parent)),
    i.projection.setOptions({
        layoutId: c,
        layout: m,
        alwaysMeasureLayout: !!d || y && ta(y),
        visualElement: i,
        animationType: typeof m == "string" ? m : "both",
        initialPromotionConfig: r,
        crossfade: S,
        layoutScroll: g,
        layoutRoot: p
    })
}
function a0(i) {
    if (i)
        return i.options.allowProjection !== !1 ? i.projection : a0(i.parent)
}
function _b({preloadedFeatures: i, createVisualElement: s, useRender: o, useVisualState: r, Component: c}) {
    i && jb(i);
    function m(y, g) {
        let p;
        const S = {
            ...L.useContext(wc),
            ...y,
            layoutId: Bb(y)
        }
          , {isStatic: b} = S
          , A = Rb(y)
          , N = r(y, b);
        if (!b && uc) {
            Lb();
            const _ = Hb(S);
            p = _.MeasureLayout,
            A.visualElement = Vb(c, N, S, s, _.ProjectionNode)
        }
        return f.jsxs(eo.Provider, {
            value: A,
            children: [p && A.visualElement ? f.jsx(p, {
                visualElement: A.visualElement,
                ...S
            }) : null, o(c, y, wb(N, A.visualElement, g), N, b, A.visualElement)]
        })
    }
    m.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
    const d = L.forwardRef(m);
    return d[Ob] = c,
    d
}
function Bb({layoutId: i}) {
    const s = L.useContext(oc).id;
    return s && i !== void 0 ? s + "-" + i : i
}
function Lb(i, s) {
    L.useContext(Iy).strict
}
function Hb(i) {
    const {drag: s, layout: o} = sa;
    if (!s && !o)
        return {};
    const r = {
        ...s,
        ...o
    };
    return {
        MeasureLayout: s != null && s.isEnabled(i) || o != null && o.isEnabled(i) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const Ss = {};
function qb(i) {
    for (const s in i)
        Ss[s] = i[s],
        gc(s) && (Ss[s].isCSSVariable = !0)
}
function s0(i, {layout: s, layoutId: o}) {
    return ra.has(i) || i.startsWith("origin") || (s || o !== void 0) && (!!Ss[i] || i === "opacity")
}
const Yb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Gb = oa.length;
function Xb(i, s, o) {
    let r = ""
      , c = !0;
    for (let m = 0; m < Gb; m++) {
        const d = oa[m]
          , y = i[d];
        if (y === void 0)
            continue;
        let g = !0;
        if (typeof y == "number" ? g = y === (d.startsWith("scale") ? 1 : 0) : g = parseFloat(y) === 0,
        !g || o) {
            const p = Ky(y, Cc[d]);
            if (!g) {
                c = !1;
                const S = Yb[d] || d;
                r += `${S}(${p}) `
            }
            o && (s[d] = p)
        }
    }
    return r = r.trim(),
    o ? r = o(s, c ? "" : r) : c && (r = "none"),
    r
}
function _c(i, s, o) {
    const {style: r, vars: c, transformOrigin: m} = i;
    let d = !1
      , y = !1;
    for (const g in s) {
        const p = s[g];
        if (ra.has(g)) {
            d = !0;
            continue
        } else if (gc(g)) {
            c[g] = p;
            continue
        } else {
            const S = Ky(p, Cc[g]);
            g.startsWith("origin") ? (y = !0,
            m[g] = S) : r[g] = S
        }
    }
    if (s.transform || (d || o ? r.transform = Xb(s, i.transform, o) : r.transform && (r.transform = "none")),
    y) {
        const {originX: g="50%", originY: p="50%", originZ: S=0} = m;
        r.transformOrigin = `${g} ${p} ${S}`
    }
}
const Bc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function l0(i, s, o) {
    for (const r in s)
        !ie(s[r]) && !s0(r, o) && (i[r] = s[r])
}
function kb({transformTemplate: i}, s) {
    return L.useMemo( () => {
        const o = Bc();
        return _c(o, s, i),
        Object.assign({}, o.vars, o.style)
    }
    , [s])
}
function Qb(i, s) {
    const o = i.style || {}
      , r = {};
    return l0(r, o, i),
    Object.assign(r, kb(i, s)),
    r
}
function Zb(i, s) {
    const o = {}
      , r = Qb(i, s);
    return i.drag && i.dragListener !== !1 && (o.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`),
    i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0),
    o.style = r,
    o
}
const Kb = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Pb = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Jb(i, s, o=1, r=0, c=!0) {
    i.pathLength = 1;
    const m = c ? Kb : Pb;
    i[m.offset] = nt.transform(-r);
    const d = nt.transform(s)
      , y = nt.transform(o);
    i[m.array] = `${d} ${y}`
}
function o0(i, {attrX: s, attrY: o, attrScale: r, pathLength: c, pathSpacing: m=1, pathOffset: d=0, ...y}, g, p, S) {
    if (_c(i, y, p),
    g) {
        i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
        return
    }
    i.attrs = i.style,
    i.style = {};
    const {attrs: b, style: A} = i;
    b.transform && (A.transform = b.transform,
    delete b.transform),
    (A.transform || b.transformOrigin) && (A.transformOrigin = b.transformOrigin ?? "50% 50%",
    delete b.transformOrigin),
    A.transform && (A.transformBox = (S == null ? void 0 : S.transformBox) ?? "fill-box",
    delete b.transformBox),
    s !== void 0 && (b.x = s),
    o !== void 0 && (b.y = o),
    r !== void 0 && (b.scale = r),
    c !== void 0 && Jb(b, c, m, d, !1)
}
const r0 = () => ({
    ...Bc(),
    attrs: {}
})
  , u0 = i => typeof i == "string" && i.toLowerCase() === "svg";
function Fb(i, s, o, r) {
    const c = L.useMemo( () => {
        const m = r0();
        return o0(m, s, u0(r), i.transformTemplate, i.style),
        {
            ...m.attrs,
            style: {
                ...m.style
            }
        }
    }
    , [s]);
    if (i.style) {
        const m = {};
        l0(m, i.style, i),
        c.style = {
            ...m,
            ...c.style
        }
    }
    return c
}
const Wb = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Lc(i) {
    return typeof i != "string" || i.includes("-") ? !1 : !!(Wb.indexOf(i) > -1 || /[A-Z]/u.test(i))
}
function $b(i=!1) {
    return (o, r, c, {latestValues: m}, d) => {
        const g = (Lc(o) ? Fb : Zb)(r, m, d, o)
          , p = Db(r, typeof o == "string", i)
          , S = o !== L.Fragment ? {
            ...p,
            ...g,
            ref: c
        } : {}
          , {children: b} = r
          , A = L.useMemo( () => ie(b) ? b.get() : b, [b]);
        return L.createElement(o, {
            ...S,
            children: A
        })
    }
}
function yp(i) {
    const s = [{}, {}];
    return i == null || i.values.forEach( (o, r) => {
        s[0][r] = o.get(),
        s[1][r] = o.getVelocity()
    }
    ),
    s
}
function Hc(i, s, o, r) {
    if (typeof s == "function") {
        const [c,m] = yp(r);
        s = s(o !== void 0 ? o : i.custom, c, m)
    }
    if (typeof s == "string" && (s = i.variants && i.variants[s]),
    typeof s == "function") {
        const [c,m] = yp(r);
        s = s(o !== void 0 ? o : i.custom, c, m)
    }
    return s
}
function Kl(i) {
    return ie(i) ? i.get() : i
}
function Ib({scrapeMotionValuesFromProps: i, createRenderState: s}, o, r, c) {
    return {
        latestValues: tx(o, r, c, i),
        renderState: s()
    }
}
const c0 = i => (s, o) => {
    const r = L.useContext(eo)
      , c = L.useContext(to)
      , m = () => Ib(i, s, r, c);
    return o ? m() : rc(m)
}
;
function tx(i, s, o, r) {
    const c = {}
      , m = r(i, {});
    for (const A in m)
        c[A] = Kl(m[A]);
    let {initial: d, animate: y} = i;
    const g = io(i)
      , p = e0(i);
    s && p && !g && i.inherit !== !1 && (d === void 0 && (d = s.initial),
    y === void 0 && (y = s.animate));
    let S = o ? o.initial === !1 : !1;
    S = S || d === !1;
    const b = S ? y : d;
    if (b && typeof b != "boolean" && !no(b)) {
        const A = Array.isArray(b) ? b : [b];
        for (let N = 0; N < A.length; N++) {
            const _ = Hc(i, A[N]);
            if (_) {
                const {transitionEnd: H, transition: X, ...G} = _;
                for (const P in G) {
                    let Y = G[P];
                    if (Array.isArray(Y)) {
                        const it = S ? Y.length - 1 : 0;
                        Y = Y[it]
                    }
                    Y !== null && (c[P] = Y)
                }
                for (const P in H)
                    c[P] = H[P]
            }
        }
    }
    return c
}
function qc(i, s, o) {
    var m;
    const {style: r} = i
      , c = {};
    for (const d in r)
        (ie(r[d]) || s.style && ie(s.style[d]) || s0(d, i) || ((m = o == null ? void 0 : o.getValue(d)) == null ? void 0 : m.liveStyle) !== void 0) && (c[d] = r[d]);
    return c
}
const ex = {
    useVisualState: c0({
        scrapeMotionValuesFromProps: qc,
        createRenderState: Bc
    })
};
function f0(i, s, o) {
    const r = qc(i, s, o);
    for (const c in i)
        if (ie(i[c]) || ie(s[c])) {
            const m = oa.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            r[m] = i[c]
        }
    return r
}
const nx = {
    useVisualState: c0({
        scrapeMotionValuesFromProps: f0,
        createRenderState: r0
    })
};
function ix(i, s) {
    return function(r, {forwardMotionProps: c}={
        forwardMotionProps: !1
    }) {
        const d = {
            ...Lc(r) ? nx : ex,
            preloadedFeatures: i,
            useRender: $b(c),
            createVisualElement: s,
            Component: r
        };
        return _b(d)
    }
}
function bs(i, s, o) {
    const r = i.getProps();
    return Hc(r, s, o !== void 0 ? o : r.custom, i)
}
const Wu = i => Array.isArray(i);
function ax(i, s, o) {
    i.hasValue(s) ? i.getValue(s).set(o) : i.addValue(s, aa(o))
}
function sx(i) {
    return Wu(i) ? i[i.length - 1] || 0 : i
}
function lx(i, s) {
    const o = bs(i, s);
    let {transitionEnd: r={}, transition: c={}, ...m} = o || {};
    m = {
        ...m,
        ...r
    };
    for (const d in m) {
        const y = sx(m[d]);
        ax(i, d, y)
    }
}
function ox(i) {
    return !!(ie(i) && i.add)
}
function $u(i, s) {
    const o = i.getValue("willChange");
    if (ox(o))
        return o.add(s);
    if (!o && dn.WillChange) {
        const r = new dn.WillChange("auto");
        i.addValue("willChange", r),
        r.add(s)
    }
}
function d0(i) {
    return i.props[n0]
}
const rx = i => i !== null;
function ux(i, {repeat: s, repeatType: o="loop"}, r) {
    const c = i.filter(rx)
      , m = s && o !== "loop" && s % 2 === 1 ? 0 : c.length - 1;
    return c[m]
}
const cx = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , fx = i => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , dx = {
    type: "keyframes",
    duration: .8
}
  , hx = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , mx = (i, {keyframes: s}) => s.length > 2 ? dx : ra.has(i) ? i.startsWith("scale") ? fx(s[1]) : cx : hx;
function px({when: i, delay: s, delayChildren: o, staggerChildren: r, staggerDirection: c, repeat: m, repeatType: d, repeatDelay: y, from: g, elapsed: p, ...S}) {
    return !!Object.keys(S).length
}
const Yc = (i, s, o, r={}, c, m) => d => {
    const y = Nc(r, i) || {}
      , g = y.delay || r.delay || 0;
    let {elapsed: p=0} = r;
    p = p - Qe(g);
    const S = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: s.getVelocity(),
        ...y,
        delay: -p,
        onUpdate: A => {
            s.set(A),
            y.onUpdate && y.onUpdate(A)
        }
        ,
        onComplete: () => {
            d(),
            y.onComplete && y.onComplete()
        }
        ,
        name: i,
        motionValue: s,
        element: m ? void 0 : c
    };
    px(y) || Object.assign(S, mx(i, S)),
    S.duration && (S.duration = Qe(S.duration)),
    S.repeatDelay && (S.repeatDelay = Qe(S.repeatDelay)),
    S.from !== void 0 && (S.keyframes[0] = S.from);
    let b = !1;
    if ((S.type === !1 || S.duration === 0 && !S.repeatDelay) && (S.duration = 0,
    S.delay === 0 && (b = !0)),
    (dn.instantAnimations || dn.skipAnimations) && (b = !0,
    S.duration = 0,
    S.delay = 0),
    S.allowFlatten = !y.type && !y.ease,
    b && !m && s.get() !== void 0) {
        const A = ux(S.keyframes, y);
        if (A !== void 0) {
            Rt.update( () => {
                S.onUpdate(A),
                S.onComplete()
            }
            );
            return
        }
    }
    return y.isSync ? new Mc(S) : new JS(S)
}
;
function yx({protectedKeys: i, needsAnimating: s}, o) {
    const r = i.hasOwnProperty(o) && s[o] !== !0;
    return s[o] = !1,
    r
}
function h0(i, s, {delay: o=0, transitionOverride: r, type: c}={}) {
    let {transition: m=i.getDefaultTransition(), transitionEnd: d, ...y} = s;
    r && (m = r);
    const g = []
      , p = c && i.animationState && i.animationState.getState()[c];
    for (const S in y) {
        const b = i.getValue(S, i.latestValues[S] ?? null)
          , A = y[S];
        if (A === void 0 || p && yx(p, S))
            continue;
        const N = {
            delay: o,
            ...Nc(m || {}, S)
        }
          , _ = b.get();
        if (_ !== void 0 && !b.isAnimating && !Array.isArray(A) && A === _ && !N.velocity)
            continue;
        let H = !1;
        if (window.MotionHandoffAnimation) {
            const G = d0(i);
            if (G) {
                const P = window.MotionHandoffAnimation(G, S, Rt);
                P !== null && (N.startTime = P,
                H = !0)
            }
        }
        $u(i, S),
        b.start(Yc(S, b, A, i.shouldReduceMotion && Gy.has(S) ? {
            type: !1
        } : N, i, H));
        const X = b.animation;
        X && g.push(X)
    }
    return d && Promise.all(g).then( () => {
        Rt.update( () => {
            d && lx(i, d)
        }
        )
    }
    ),
    g
}
function Iu(i, s, o={}) {
    var g;
    const r = bs(i, s, o.type === "exit" ? (g = i.presenceContext) == null ? void 0 : g.custom : void 0);
    let {transition: c=i.getDefaultTransition() || {}} = r || {};
    o.transitionOverride && (c = o.transitionOverride);
    const m = r ? () => Promise.all(h0(i, r, o)) : () => Promise.resolve()
      , d = i.variantChildren && i.variantChildren.size ? (p=0) => {
        const {delayChildren: S=0, staggerChildren: b, staggerDirection: A} = c;
        return gx(i, s, S + p, b, A, o)
    }
    : () => Promise.resolve()
      , {when: y} = c;
    if (y) {
        const [p,S] = y === "beforeChildren" ? [m, d] : [d, m];
        return p().then( () => S())
    } else
        return Promise.all([m(), d(o.delay)])
}
function gx(i, s, o=0, r=0, c=1, m) {
    const d = []
      , y = (i.variantChildren.size - 1) * r
      , g = c === 1 ? (p=0) => p * r : (p=0) => y - p * r;
    return Array.from(i.variantChildren).sort(vx).forEach( (p, S) => {
        p.notify("AnimationStart", s),
        d.push(Iu(p, s, {
            ...m,
            delay: o + g(S)
        }).then( () => p.notify("AnimationComplete", s)))
    }
    ),
    Promise.all(d)
}
function vx(i, s) {
    return i.sortNodePosition(s)
}
function Sx(i, s, o={}) {
    i.notify("AnimationStart", s);
    let r;
    if (Array.isArray(s)) {
        const c = s.map(m => Iu(i, m, o));
        r = Promise.all(c)
    } else if (typeof s == "string")
        r = Iu(i, s, o);
    else {
        const c = typeof s == "function" ? bs(i, s, o.custom) : s;
        r = Promise.all(h0(i, c, o))
    }
    return r.then( () => {
        i.notify("AnimationComplete", s)
    }
    )
}
function m0(i, s) {
    if (!Array.isArray(s))
        return !1;
    const o = s.length;
    if (o !== i.length)
        return !1;
    for (let r = 0; r < o; r++)
        if (s[r] !== i[r])
            return !1;
    return !0
}
const bx = Vc.length;
function p0(i) {
    if (!i)
        return;
    if (!i.isControllingVariants) {
        const o = i.parent ? p0(i.parent) || {} : {};
        return i.props.initial !== void 0 && (o.initial = i.props.initial),
        o
    }
    const s = {};
    for (let o = 0; o < bx; o++) {
        const r = Vc[o]
          , c = i.props[r];
        (vs(c) || c === !1) && (s[r] = c)
    }
    return s
}
const xx = [...zc].reverse()
  , Tx = zc.length;
function Ax(i) {
    return s => Promise.all(s.map( ({animation: o, options: r}) => Sx(i, o, r)))
}
function jx(i) {
    let s = Ax(i)
      , o = gp()
      , r = !0;
    const c = g => (p, S) => {
        var A;
        const b = bs(i, S, g === "exit" ? (A = i.presenceContext) == null ? void 0 : A.custom : void 0);
        if (b) {
            const {transition: N, transitionEnd: _, ...H} = b;
            p = {
                ...p,
                ...H,
                ..._
            }
        }
        return p
    }
    ;
    function m(g) {
        s = g(i)
    }
    function d(g) {
        const {props: p} = i
          , S = p0(i.parent) || {}
          , b = []
          , A = new Set;
        let N = {}
          , _ = 1 / 0;
        for (let X = 0; X < Tx; X++) {
            const G = xx[X]
              , P = o[G]
              , Y = p[G] !== void 0 ? p[G] : S[G]
              , it = vs(Y)
              , B = G === g ? P.isActive : null;
            B === !1 && (_ = X);
            let F = Y === S[G] && Y !== p[G] && it;
            if (F && r && i.manuallyAnimateOnMount && (F = !1),
            P.protectedKeys = {
                ...N
            },
            !P.isActive && B === null || !Y && !P.prevProp || no(Y) || typeof Y == "boolean")
                continue;
            const lt = Mx(P.prevProp, Y);
            let W = lt || G === g && P.isActive && !F && it || X > _ && it
              , St = !1;
            const Vt = Array.isArray(Y) ? Y : [Y];
            let It = Vt.reduce(c(G), {});
            B === !1 && (It = {});
            const {prevResolvedValues: Yt={}} = P
              , Pe = {
                ...Yt,
                ...It
            }
              , Le = q => {
                W = !0,
                A.has(q) && (St = !0,
                A.delete(q)),
                P.needsAnimating[q] = !0;
                const K = i.getValue(q);
                K && (K.liveStyle = !1)
            }
            ;
            for (const q in Pe) {
                const K = It[q]
                  , pt = Yt[q];
                if (N.hasOwnProperty(q))
                    continue;
                let T = !1;
                Wu(K) && Wu(pt) ? T = !m0(K, pt) : T = K !== pt,
                T ? K != null ? Le(q) : A.add(q) : K !== void 0 && A.has(q) ? Le(q) : P.protectedKeys[q] = !0
            }
            P.prevProp = Y,
            P.prevResolvedValues = It,
            P.isActive && (N = {
                ...N,
                ...It
            }),
            r && i.blockInitialAnimation && (W = !1),
            W && (!(F && lt) || St) && b.push(...Vt.map(q => ({
                animation: q,
                options: {
                    type: G
                }
            })))
        }
        if (A.size) {
            const X = {};
            if (typeof p.initial != "boolean") {
                const G = bs(i, Array.isArray(p.initial) ? p.initial[0] : p.initial);
                G && G.transition && (X.transition = G.transition)
            }
            A.forEach(G => {
                const P = i.getBaseTarget(G)
                  , Y = i.getValue(G);
                Y && (Y.liveStyle = !0),
                X[G] = P ?? null
            }
            ),
            b.push({
                animation: X
            })
        }
        let H = !!b.length;
        return r && (p.initial === !1 || p.initial === p.animate) && !i.manuallyAnimateOnMount && (H = !1),
        r = !1,
        H ? s(b) : Promise.resolve()
    }
    function y(g, p) {
        var b;
        if (o[g].isActive === p)
            return Promise.resolve();
        (b = i.variantChildren) == null || b.forEach(A => {
            var N;
            return (N = A.animationState) == null ? void 0 : N.setActive(g, p)
        }
        ),
        o[g].isActive = p;
        const S = d(g);
        for (const A in o)
            o[A].protectedKeys = {};
        return S
    }
    return {
        animateChanges: d,
        setActive: y,
        setAnimateFunction: m,
        getState: () => o,
        reset: () => {
            o = gp(),
            r = !0
        }
    }
}
function Mx(i, s) {
    return typeof s == "string" ? s !== i : Array.isArray(s) ? !m0(s, i) : !1
}
function ri(i=!1) {
    return {
        isActive: i,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function gp() {
    return {
        animate: ri(!0),
        whileInView: ri(),
        whileHover: ri(),
        whileTap: ri(),
        whileDrag: ri(),
        whileFocus: ri(),
        exit: ri()
    }
}
class Xn {
    constructor(s) {
        this.isMounted = !1,
        this.node = s
    }
    update() {}
}
class Ex extends Xn {
    constructor(s) {
        super(s),
        s.animationState || (s.animationState = jx(s))
    }
    updateAnimationControlsSubscription() {
        const {animate: s} = this.node.getProps();
        no(s) && (this.unmountControls = s.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: s} = this.node.getProps()
          , {animate: o} = this.node.prevProps || {};
        s !== o && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var s;
        this.node.animationState.reset(),
        (s = this.unmountControls) == null || s.call(this)
    }
}
let Dx = 0;
class Nx extends Xn {
    constructor() {
        super(...arguments),
        this.id = Dx++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: s, onExitComplete: o} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || s === r)
            return;
        const c = this.node.animationState.setActive("exit", !s);
        o && !s && c.then( () => {
            o(this.id)
        }
        )
    }
    mount() {
        const {register: s, onExitComplete: o} = this.node.presenceContext || {};
        o && o(this.id),
        s && (this.unmount = s(this.id))
    }
    unmount() {}
}
const Cx = {
    animation: {
        Feature: Ex
    },
    exit: {
        Feature: Nx
    }
};
function xs(i, s, o, r={
    passive: !0
}) {
    return i.addEventListener(s, o, r),
    () => i.removeEventListener(s, o)
}
function Ms(i) {
    return {
        point: {
            x: i.pageX,
            y: i.pageY
        }
    }
}
const Rx = i => s => Oc(s) && i(s, Ms(s));
function ds(i, s, o, r) {
    return xs(i, s, Rx(o), r)
}
function y0({top: i, left: s, right: o, bottom: r}) {
    return {
        x: {
            min: s,
            max: o
        },
        y: {
            min: i,
            max: r
        }
    }
}
function Ox({x: i, y: s}) {
    return {
        top: s.min,
        right: i.max,
        bottom: s.max,
        left: i.min
    }
}
function wx(i, s) {
    if (!s)
        return i;
    const o = s({
        x: i.left,
        y: i.top
    })
      , r = s({
        x: i.right,
        y: i.bottom
    });
    return {
        top: o.y,
        left: o.x,
        bottom: r.y,
        right: r.x
    }
}
const g0 = 1e-4
  , zx = 1 - g0
  , Vx = 1 + g0
  , v0 = .01
  , Ux = 0 - v0
  , _x = 0 + v0;
function se(i) {
    return i.max - i.min
}
function Bx(i, s, o) {
    return Math.abs(i - s) <= o
}
function vp(i, s, o, r=.5) {
    i.origin = r,
    i.originPoint = Ct(s.min, s.max, i.origin),
    i.scale = se(o) / se(s),
    i.translate = Ct(o.min, o.max, i.origin) - i.originPoint,
    (i.scale >= zx && i.scale <= Vx || isNaN(i.scale)) && (i.scale = 1),
    (i.translate >= Ux && i.translate <= _x || isNaN(i.translate)) && (i.translate = 0)
}
function hs(i, s, o, r) {
    vp(i.x, s.x, o.x, r ? r.originX : void 0),
    vp(i.y, s.y, o.y, r ? r.originY : void 0)
}
function Sp(i, s, o) {
    i.min = o.min + s.min,
    i.max = i.min + se(s)
}
function Lx(i, s, o) {
    Sp(i.x, s.x, o.x),
    Sp(i.y, s.y, o.y)
}
function bp(i, s, o) {
    i.min = s.min - o.min,
    i.max = i.min + se(s)
}
function ms(i, s, o) {
    bp(i.x, s.x, o.x),
    bp(i.y, s.y, o.y)
}
const xp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ea = () => ({
    x: xp(),
    y: xp()
})
  , Tp = () => ({
    min: 0,
    max: 0
})
  , Bt = () => ({
    x: Tp(),
    y: Tp()
});
function we(i) {
    return [i("x"), i("y")]
}
function wu(i) {
    return i === void 0 || i === 1
}
function tc({scale: i, scaleX: s, scaleY: o}) {
    return !wu(i) || !wu(s) || !wu(o)
}
function ui(i) {
    return tc(i) || S0(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY
}
function S0(i) {
    return Ap(i.x) || Ap(i.y)
}
function Ap(i) {
    return i && i !== "0%"
}
function Il(i, s, o) {
    const r = i - o
      , c = s * r;
    return o + c
}
function jp(i, s, o, r, c) {
    return c !== void 0 && (i = Il(i, c, r)),
    Il(i, o, r) + s
}
function ec(i, s=0, o=1, r, c) {
    i.min = jp(i.min, s, o, r, c),
    i.max = jp(i.max, s, o, r, c)
}
function b0(i, {x: s, y: o}) {
    ec(i.x, s.translate, s.scale, s.originPoint),
    ec(i.y, o.translate, o.scale, o.originPoint)
}
const Mp = .999999999999
  , Ep = 1.0000000000001;
function Hx(i, s, o, r=!1) {
    const c = o.length;
    if (!c)
        return;
    s.x = s.y = 1;
    let m, d;
    for (let y = 0; y < c; y++) {
        m = o[y],
        d = m.projectionDelta;
        const {visualElement: g} = m.options;
        g && g.props.style && g.props.style.display === "contents" || (r && m.options.layoutScroll && m.scroll && m !== m.root && ia(i, {
            x: -m.scroll.offset.x,
            y: -m.scroll.offset.y
        }),
        d && (s.x *= d.x.scale,
        s.y *= d.y.scale,
        b0(i, d)),
        r && ui(m.latestValues) && ia(i, m.latestValues))
    }
    s.x < Ep && s.x > Mp && (s.x = 1),
    s.y < Ep && s.y > Mp && (s.y = 1)
}
function na(i, s) {
    i.min = i.min + s,
    i.max = i.max + s
}
function Dp(i, s, o, r, c=.5) {
    const m = Ct(i.min, i.max, c);
    ec(i, s, o, m, r)
}
function ia(i, s) {
    Dp(i.x, s.x, s.scaleX, s.scale, s.originX),
    Dp(i.y, s.y, s.scaleY, s.scale, s.originY)
}
function x0(i, s) {
    return y0(wx(i.getBoundingClientRect(), s))
}
function qx(i, s, o) {
    const r = x0(i, o)
      , {scroll: c} = s;
    return c && (na(r.x, c.offset.x),
    na(r.y, c.offset.y)),
    r
}
const T0 = ({current: i}) => i ? i.ownerDocument.defaultView : null
  , Np = (i, s) => Math.abs(i - s);
function Yx(i, s) {
    const o = Np(i.x, s.x)
      , r = Np(i.y, s.y);
    return Math.sqrt(o ** 2 + r ** 2)
}
class A0 {
    constructor(s, o, {transformPagePoint: r, contextWindow: c, dragSnapToOrigin: m=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const b = Vu(this.lastMoveEventInfo, this.history)
              , A = this.startEvent !== null
              , N = Yx(b.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!A && !N)
                return;
            const {point: _} = b
              , {timestamp: H} = $t;
            this.history.push({
                ..._,
                timestamp: H
            });
            const {onStart: X, onMove: G} = this.handlers;
            A || (X && X(this.lastMoveEvent, b),
            this.startEvent = this.lastMoveEvent),
            G && G(this.lastMoveEvent, b)
        }
        ,
        this.handlePointerMove = (b, A) => {
            this.lastMoveEvent = b,
            this.lastMoveEventInfo = zu(A, this.transformPagePoint),
            Rt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (b, A) => {
            this.end();
            const {onEnd: N, onSessionEnd: _, resumeAnimation: H} = this.handlers;
            if (this.dragSnapToOrigin && H && H(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const X = Vu(b.type === "pointercancel" ? this.lastMoveEventInfo : zu(A, this.transformPagePoint), this.history);
            this.startEvent && N && N(b, X),
            _ && _(b, X)
        }
        ,
        !Oc(s))
            return;
        this.dragSnapToOrigin = m,
        this.handlers = o,
        this.transformPagePoint = r,
        this.contextWindow = c || window;
        const d = Ms(s)
          , y = zu(d, this.transformPagePoint)
          , {point: g} = y
          , {timestamp: p} = $t;
        this.history = [{
            ...g,
            timestamp: p
        }];
        const {onSessionStart: S} = o;
        S && S(s, Vu(y, this.history)),
        this.removeListeners = Ts(ds(this.contextWindow, "pointermove", this.handlePointerMove), ds(this.contextWindow, "pointerup", this.handlePointerUp), ds(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(s) {
        this.handlers = s
    }
    end() {
        this.removeListeners && this.removeListeners(),
        qn(this.updatePoint)
    }
}
function zu(i, s) {
    return s ? {
        point: s(i.point)
    } : i
}
function Cp(i, s) {
    return {
        x: i.x - s.x,
        y: i.y - s.y
    }
}
function Vu({point: i}, s) {
    return {
        point: i,
        delta: Cp(i, j0(s)),
        offset: Cp(i, Gx(s)),
        velocity: Xx(s, .1)
    }
}
function Gx(i) {
    return i[0]
}
function j0(i) {
    return i[i.length - 1]
}
function Xx(i, s) {
    if (i.length < 2)
        return {
            x: 0,
            y: 0
        };
    let o = i.length - 1
      , r = null;
    const c = j0(i);
    for (; o >= 0 && (r = i[o],
    !(c.timestamp - r.timestamp > Qe(s))); )
        o--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const m = Ze(c.timestamp - r.timestamp);
    if (m === 0)
        return {
            x: 0,
            y: 0
        };
    const d = {
        x: (c.x - r.x) / m,
        y: (c.y - r.y) / m
    };
    return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
function kx(i, {min: s, max: o}, r) {
    return s !== void 0 && i < s ? i = r ? Ct(s, i, r.min) : Math.max(i, s) : o !== void 0 && i > o && (i = r ? Ct(o, i, r.max) : Math.min(i, o)),
    i
}
function Rp(i, s, o) {
    return {
        min: s !== void 0 ? i.min + s : void 0,
        max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
    }
}
function Qx(i, {top: s, left: o, bottom: r, right: c}) {
    return {
        x: Rp(i.x, o, c),
        y: Rp(i.y, s, r)
    }
}
function Op(i, s) {
    let o = s.min - i.min
      , r = s.max - i.max;
    return s.max - s.min < i.max - i.min && ([o,r] = [r, o]),
    {
        min: o,
        max: r
    }
}
function Zx(i, s) {
    return {
        x: Op(i.x, s.x),
        y: Op(i.y, s.y)
    }
}
function Kx(i, s) {
    let o = .5;
    const r = se(i)
      , c = se(s);
    return c > r ? o = ps(s.min, s.max - r, i.min) : r > c && (o = ps(i.min, i.max - c, s.min)),
    fn(0, 1, o)
}
function Px(i, s) {
    const o = {};
    return s.min !== void 0 && (o.min = s.min - i.min),
    s.max !== void 0 && (o.max = s.max - i.min),
    o
}
const nc = .35;
function Jx(i=nc) {
    return i === !1 ? i = 0 : i === !0 && (i = nc),
    {
        x: wp(i, "left", "right"),
        y: wp(i, "top", "bottom")
    }
}
function wp(i, s, o) {
    return {
        min: zp(i, s),
        max: zp(i, o)
    }
}
function zp(i, s) {
    return typeof i == "number" ? i : i[s] || 0
}
const Fx = new WeakMap;
class Wx {
    constructor(s) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Bt(),
        this.visualElement = s
    }
    start(s, {snapToCursor: o=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const c = S => {
            const {dragSnapToOrigin: b} = this.getProps();
            b ? this.pauseAnimation() : this.stopAnimation(),
            o && this.snapToCursor(Ms(S).point)
        }
          , m = (S, b) => {
            const {drag: A, dragPropagation: N, onDragStart: _} = this.getProps();
            if (A && !N && (this.openDragLock && this.openDragLock(),
            this.openDragLock = fb(A),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            we(X => {
                let G = this.getAxisMotionValue(X).get() || 0;
                if (Ke.test(G)) {
                    const {projection: P} = this.visualElement;
                    if (P && P.layout) {
                        const Y = P.layout.layoutBox[X];
                        Y && (G = se(Y) * (parseFloat(G) / 100))
                    }
                }
                this.originPoint[X] = G
            }
            ),
            _ && Rt.postRender( () => _(S, b)),
            $u(this.visualElement, "transform");
            const {animationState: H} = this.visualElement;
            H && H.setActive("whileDrag", !0)
        }
          , d = (S, b) => {
            const {dragPropagation: A, dragDirectionLock: N, onDirectionLock: _, onDrag: H} = this.getProps();
            if (!A && !this.openDragLock)
                return;
            const {offset: X} = b;
            if (N && this.currentDirection === null) {
                this.currentDirection = $x(X),
                this.currentDirection !== null && _ && _(this.currentDirection);
                return
            }
            this.updateAxis("x", b.point, X),
            this.updateAxis("y", b.point, X),
            this.visualElement.render(),
            H && H(S, b)
        }
          , y = (S, b) => this.stop(S, b)
          , g = () => we(S => {
            var b;
            return this.getAnimationState(S) === "paused" && ((b = this.getAxisMotionValue(S).animation) == null ? void 0 : b.play())
        }
        )
          , {dragSnapToOrigin: p} = this.getProps();
        this.panSession = new A0(s,{
            onSessionStart: c,
            onStart: m,
            onMove: d,
            onSessionEnd: y,
            resumeAnimation: g
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: p,
            contextWindow: T0(this.visualElement)
        })
    }
    stop(s, o) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: c} = o;
        this.startAnimation(c);
        const {onDragEnd: m} = this.getProps();
        m && Rt.postRender( () => m(s, o))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: s, animationState: o} = this.visualElement;
        s && (s.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        o && o.setActive("whileDrag", !1)
    }
    updateAxis(s, o, r) {
        const {drag: c} = this.getProps();
        if (!r || !kl(s, c, this.currentDirection))
            return;
        const m = this.getAxisMotionValue(s);
        let d = this.originPoint[s] + r[s];
        this.constraints && this.constraints[s] && (d = kx(d, this.constraints[s], this.elastic[s])),
        m.set(d)
    }
    resolveConstraints() {
        var m;
        const {dragConstraints: s, dragElastic: o} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (m = this.visualElement.projection) == null ? void 0 : m.layout
          , c = this.constraints;
        s && ta(s) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : s && r ? this.constraints = Qx(r.layoutBox, s) : this.constraints = !1,
        this.elastic = Jx(o),
        c !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && we(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = Px(r.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: s, onMeasureDragConstraints: o} = this.getProps();
        if (!s || !ta(s))
            return !1;
        const r = s.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const m = qx(r, c.root, this.visualElement.getTransformPagePoint());
        let d = Zx(c.layout.layoutBox, m);
        if (o) {
            const y = o(Ox(d));
            this.hasMutatedConstraints = !!y,
            y && (d = y0(y))
        }
        return d
    }
    startAnimation(s) {
        const {drag: o, dragMomentum: r, dragElastic: c, dragTransition: m, dragSnapToOrigin: d, onDragTransitionEnd: y} = this.getProps()
          , g = this.constraints || {}
          , p = we(S => {
            if (!kl(S, o, this.currentDirection))
                return;
            let b = g && g[S] || {};
            d && (b = {
                min: 0,
                max: 0
            });
            const A = c ? 200 : 1e6
              , N = c ? 40 : 1e7
              , _ = {
                type: "inertia",
                velocity: r ? s[S] : 0,
                bounceStiffness: A,
                bounceDamping: N,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...m,
                ...b
            };
            return this.startAxisValueAnimation(S, _)
        }
        );
        return Promise.all(p).then(y)
    }
    startAxisValueAnimation(s, o) {
        const r = this.getAxisMotionValue(s);
        return $u(this.visualElement, s),
        r.start(Yc(s, r, 0, o, this.visualElement, !1))
    }
    stopAnimation() {
        we(s => this.getAxisMotionValue(s).stop())
    }
    pauseAnimation() {
        we(s => {
            var o;
            return (o = this.getAxisMotionValue(s).animation) == null ? void 0 : o.pause()
        }
        )
    }
    getAnimationState(s) {
        var o;
        return (o = this.getAxisMotionValue(s).animation) == null ? void 0 : o.state
    }
    getAxisMotionValue(s) {
        const o = `_drag${s.toUpperCase()}`
          , r = this.visualElement.getProps()
          , c = r[o];
        return c || this.visualElement.getValue(s, (r.initial ? r.initial[s] : void 0) || 0)
    }
    snapToCursor(s) {
        we(o => {
            const {drag: r} = this.getProps();
            if (!kl(o, r, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , m = this.getAxisMotionValue(o);
            if (c && c.layout) {
                const {min: d, max: y} = c.layout.layoutBox[o];
                m.set(s[o] - Ct(d, y, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: s, dragConstraints: o} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!ta(o) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        we(d => {
            const y = this.getAxisMotionValue(d);
            if (y && this.constraints !== !1) {
                const g = y.get();
                c[d] = Kx({
                    min: g,
                    max: g
                }, this.constraints[d])
            }
        }
        );
        const {transformTemplate: m} = this.visualElement.getProps();
        this.visualElement.current.style.transform = m ? m({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        we(d => {
            if (!kl(d, s, null))
                return;
            const y = this.getAxisMotionValue(d)
              , {min: g, max: p} = this.constraints[d];
            y.set(Ct(g, p, c[d]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Fx.set(this.visualElement, this);
        const s = this.visualElement.current
          , o = ds(s, "pointerdown", g => {
            const {drag: p, dragListener: S=!0} = this.getProps();
            p && S && this.start(g)
        }
        )
          , r = () => {
            const {dragConstraints: g} = this.getProps();
            ta(g) && g.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , m = c.addEventListener("measure", r);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        Rt.read(r);
        const d = xs(window, "resize", () => this.scalePositionWithinConstraints())
          , y = c.addEventListener("didUpdate", ({delta: g, hasLayoutChanged: p}) => {
            this.isDragging && p && (we(S => {
                const b = this.getAxisMotionValue(S);
                b && (this.originPoint[S] += g[S].translate,
                b.set(b.get() + g[S].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            d(),
            o(),
            m(),
            y && y()
        }
    }
    getProps() {
        const s = this.visualElement.getProps()
          , {drag: o=!1, dragDirectionLock: r=!1, dragPropagation: c=!1, dragConstraints: m=!1, dragElastic: d=nc, dragMomentum: y=!0} = s;
        return {
            ...s,
            drag: o,
            dragDirectionLock: r,
            dragPropagation: c,
            dragConstraints: m,
            dragElastic: d,
            dragMomentum: y
        }
    }
}
function kl(i, s, o) {
    return (s === !0 || s === i) && (o === null || o === i)
}
function $x(i, s=10) {
    let o = null;
    return Math.abs(i.y) > s ? o = "y" : Math.abs(i.x) > s && (o = "x"),
    o
}
class Ix extends Xn {
    constructor(s) {
        super(s),
        this.removeGroupControls = ze,
        this.removeListeners = ze,
        this.controls = new Wx(s)
    }
    mount() {
        const {dragControls: s} = this.node.getProps();
        s && (this.removeGroupControls = s.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ze
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Vp = i => (s, o) => {
    i && Rt.postRender( () => i(s, o))
}
;
class t2 extends Xn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ze
    }
    onPointerDown(s) {
        this.session = new A0(s,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: T0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: s, onPanStart: o, onPan: r, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: Vp(s),
            onStart: Vp(o),
            onMove: r,
            onEnd: (m, d) => {
                delete this.session,
                c && Rt.postRender( () => c(m, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ds(this.node.current, "pointerdown", s => this.onPointerDown(s))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Pl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Up(i, s) {
    return s.max === s.min ? 0 : i / (s.max - s.min) * 100
}
const rs = {
    correct: (i, s) => {
        if (!s.target)
            return i;
        if (typeof i == "string")
            if (nt.test(i))
                i = parseFloat(i);
            else
                return i;
        const o = Up(i, s.target.x)
          , r = Up(i, s.target.y);
        return `${o}% ${r}%`
    }
}
  , e2 = {
    correct: (i, {treeScale: s, projectionDelta: o}) => {
        const r = i
          , c = Yn.parse(i);
        if (c.length > 5)
            return r;
        const m = Yn.createTransformer(i)
          , d = typeof c[0] != "number" ? 1 : 0
          , y = o.x.scale * s.x
          , g = o.y.scale * s.y;
        c[0 + d] /= y,
        c[1 + d] /= g;
        const p = Ct(y, g, .5);
        return typeof c[2 + d] == "number" && (c[2 + d] /= p),
        typeof c[3 + d] == "number" && (c[3 + d] /= p),
        m(c)
    }
};
class n2 extends L.Component {
    componentDidMount() {
        const {visualElement: s, layoutGroup: o, switchLayoutGroup: r, layoutId: c} = this.props
          , {projection: m} = s;
        qb(i2),
        m && (o.group && o.group.add(m),
        r && r.register && c && r.register(m),
        m.root.didUpdate(),
        m.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        m.setOptions({
            ...m.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Pl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(s) {
        const {layoutDependency: o, visualElement: r, drag: c, isPresent: m} = this.props
          , {projection: d} = r;
        return d && (d.isPresent = m,
        c || s.layoutDependency !== o || o === void 0 || s.isPresent !== m ? d.willUpdate() : this.safeToRemove(),
        s.isPresent !== m && (m ? d.promote() : d.relegate() || Rt.postRender( () => {
            const y = d.getStack();
            (!y || !y.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: s} = this.props.visualElement;
        s && (s.root.didUpdate(),
        Rc.postRender( () => {
            !s.currentAnimation && s.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: s, layoutGroup: o, switchLayoutGroup: r} = this.props
          , {projection: c} = s;
        c && (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        r && r.deregister && r.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: s} = this.props;
        s && s()
    }
    render() {
        return null
    }
}
function M0(i) {
    const [s,o] = $y()
      , r = L.useContext(oc);
    return f.jsx(n2, {
        ...i,
        layoutGroup: r,
        switchLayoutGroup: L.useContext(i0),
        isPresent: s,
        safeToRemove: o
    })
}
const i2 = {
    borderRadius: {
        ...rs,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: rs,
    borderTopRightRadius: rs,
    borderBottomLeftRadius: rs,
    borderBottomRightRadius: rs,
    boxShadow: e2
};
function a2(i, s, o) {
    const r = ie(i) ? i : aa(i);
    return r.start(Yc("", r, s, o)),
    r.animation
}
const s2 = (i, s) => i.depth - s.depth;
class l2 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(s) {
        cc(this.children, s),
        this.isDirty = !0
    }
    remove(s) {
        fc(this.children, s),
        this.isDirty = !0
    }
    forEach(s) {
        this.isDirty && this.children.sort(s2),
        this.isDirty = !1,
        this.children.forEach(s)
    }
}
function o2(i, s) {
    const o = fe.now()
      , r = ({timestamp: c}) => {
        const m = c - o;
        m >= s && (qn(r),
        i(m - s))
    }
    ;
    return Rt.setup(r, !0),
    () => qn(r)
}
const E0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , r2 = E0.length
  , _p = i => typeof i == "string" ? parseFloat(i) : i
  , Bp = i => typeof i == "number" || nt.test(i);
function u2(i, s, o, r, c, m) {
    c ? (i.opacity = Ct(0, o.opacity ?? 1, c2(r)),
    i.opacityExit = Ct(s.opacity ?? 1, 0, f2(r))) : m && (i.opacity = Ct(s.opacity ?? 1, o.opacity ?? 1, r));
    for (let d = 0; d < r2; d++) {
        const y = `border${E0[d]}Radius`;
        let g = Lp(s, y)
          , p = Lp(o, y);
        if (g === void 0 && p === void 0)
            continue;
        g || (g = 0),
        p || (p = 0),
        g === 0 || p === 0 || Bp(g) === Bp(p) ? (i[y] = Math.max(Ct(_p(g), _p(p), r), 0),
        (Ke.test(p) || Ke.test(g)) && (i[y] += "%")) : i[y] = p
    }
    (s.rotate || o.rotate) && (i.rotate = Ct(s.rotate || 0, o.rotate || 0, r))
}
function Lp(i, s) {
    return i[s] !== void 0 ? i[s] : i.borderRadius
}
const c2 = D0(0, .5, Sy)
  , f2 = D0(.5, .95, ze);
function D0(i, s, o) {
    return r => r < i ? 0 : r > s ? 1 : o(ps(i, s, r))
}
function Hp(i, s) {
    i.min = s.min,
    i.max = s.max
}
function Oe(i, s) {
    Hp(i.x, s.x),
    Hp(i.y, s.y)
}
function qp(i, s) {
    i.translate = s.translate,
    i.scale = s.scale,
    i.originPoint = s.originPoint,
    i.origin = s.origin
}
function Yp(i, s, o, r, c) {
    return i -= s,
    i = Il(i, 1 / o, r),
    c !== void 0 && (i = Il(i, 1 / c, r)),
    i
}
function d2(i, s=0, o=1, r=.5, c, m=i, d=i) {
    if (Ke.test(s) && (s = parseFloat(s),
    s = Ct(d.min, d.max, s / 100) - d.min),
    typeof s != "number")
        return;
    let y = Ct(m.min, m.max, r);
    i === m && (y -= s),
    i.min = Yp(i.min, s, o, y, c),
    i.max = Yp(i.max, s, o, y, c)
}
function Gp(i, s, [o,r,c], m, d) {
    d2(i, s[o], s[r], s[c], s.scale, m, d)
}
const h2 = ["x", "scaleX", "originX"]
  , m2 = ["y", "scaleY", "originY"];
function Xp(i, s, o, r) {
    Gp(i.x, s, h2, o ? o.x : void 0, r ? r.x : void 0),
    Gp(i.y, s, m2, o ? o.y : void 0, r ? r.y : void 0)
}
function kp(i) {
    return i.translate === 0 && i.scale === 1
}
function N0(i) {
    return kp(i.x) && kp(i.y)
}
function Qp(i, s) {
    return i.min === s.min && i.max === s.max
}
function p2(i, s) {
    return Qp(i.x, s.x) && Qp(i.y, s.y)
}
function Zp(i, s) {
    return Math.round(i.min) === Math.round(s.min) && Math.round(i.max) === Math.round(s.max)
}
function C0(i, s) {
    return Zp(i.x, s.x) && Zp(i.y, s.y)
}
function Kp(i) {
    return se(i.x) / se(i.y)
}
function Pp(i, s) {
    return i.translate === s.translate && i.scale === s.scale && i.originPoint === s.originPoint
}
class y2 {
    constructor() {
        this.members = []
    }
    add(s) {
        cc(this.members, s),
        s.scheduleRender()
    }
    remove(s) {
        if (fc(this.members, s),
        s === this.prevLead && (this.prevLead = void 0),
        s === this.lead) {
            const o = this.members[this.members.length - 1];
            o && this.promote(o)
        }
    }
    relegate(s) {
        const o = this.members.findIndex(c => s === c);
        if (o === 0)
            return !1;
        let r;
        for (let c = o; c >= 0; c--) {
            const m = this.members[c];
            if (m.isPresent !== !1) {
                r = m;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(s, o) {
        const r = this.lead;
        if (s !== r && (this.prevLead = r,
        this.lead = s,
        s.show(),
        r)) {
            r.instance && r.scheduleRender(),
            s.scheduleRender(),
            s.resumeFrom = r,
            o && (s.resumeFrom.preserveOpacity = !0),
            r.snapshot && (s.snapshot = r.snapshot,
            s.snapshot.latestValues = r.animationValues || r.latestValues),
            s.root && s.root.isUpdating && (s.isLayoutDirty = !0);
            const {crossfade: c} = s.options;
            c === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(s => {
            const {options: o, resumingFrom: r} = s;
            o.onExitComplete && o.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(s => {
            s.instance && s.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function g2(i, s, o) {
    let r = "";
    const c = i.x.translate / s.x
      , m = i.y.translate / s.y
      , d = (o == null ? void 0 : o.z) || 0;
    if ((c || m || d) && (r = `translate3d(${c}px, ${m}px, ${d}px) `),
    (s.x !== 1 || s.y !== 1) && (r += `scale(${1 / s.x}, ${1 / s.y}) `),
    o) {
        const {transformPerspective: p, rotate: S, rotateX: b, rotateY: A, skewX: N, skewY: _} = o;
        p && (r = `perspective(${p}px) ${r}`),
        S && (r += `rotate(${S}deg) `),
        b && (r += `rotateX(${b}deg) `),
        A && (r += `rotateY(${A}deg) `),
        N && (r += `skewX(${N}deg) `),
        _ && (r += `skewY(${_}deg) `)
    }
    const y = i.x.scale * s.x
      , g = i.y.scale * s.y;
    return (y !== 1 || g !== 1) && (r += `scale(${y}, ${g})`),
    r || "none"
}
const Uu = ["", "X", "Y", "Z"]
  , v2 = {
    visibility: "hidden"
}
  , S2 = 1e3;
let b2 = 0;
function _u(i, s, o, r) {
    const {latestValues: c} = s;
    c[i] && (o[i] = c[i],
    s.setStaticValue(i, 0),
    r && (r[i] = 0))
}
function R0(i) {
    if (i.hasCheckedOptimisedAppear = !0,
    i.root === i)
        return;
    const {visualElement: s} = i.options;
    if (!s)
        return;
    const o = d0(s);
    if (window.MotionHasOptimisedAnimation(o, "transform")) {
        const {layout: c, layoutId: m} = i.options;
        window.MotionCancelOptimisedAnimation(o, "transform", Rt, !(c || m))
    }
    const {parent: r} = i;
    r && !r.hasCheckedOptimisedAppear && R0(r)
}
function O0({attachResizeListener: i, defaultParent: s, measureScroll: o, checkIsScrollRoot: r, resetTransform: c}) {
    return class {
        constructor(d={}, y=s == null ? void 0 : s()) {
            this.id = b2++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(A2),
                this.nodes.forEach(N2),
                this.nodes.forEach(C2),
                this.nodes.forEach(j2)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = d,
            this.root = y ? y.root || y : this,
            this.path = y ? [...y.path, y] : [],
            this.parent = y,
            this.depth = y ? y.depth + 1 : 0;
            for (let g = 0; g < this.path.length; g++)
                this.path[g].shouldResetTransform = !0;
            this.root === this && (this.nodes = new l2)
        }
        addEventListener(d, y) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new mc),
            this.eventHandlers.get(d).add(y)
        }
        notifyListeners(d, ...y) {
            const g = this.eventHandlers.get(d);
            g && g.notify(...y)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d) {
            if (this.instance)
                return;
            this.isSVG = Wy(d) && !gb(d),
            this.instance = d;
            const {layoutId: y, layout: g, visualElement: p} = this.options;
            if (p && !p.current && p.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0),
            i) {
                let S;
                const b = () => this.root.updateBlockedByResize = !1;
                i(d, () => {
                    this.root.updateBlockedByResize = !0,
                    S && S(),
                    S = o2(b, 250),
                    Pl.hasAnimatedSinceResize && (Pl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Fp))
                }
                )
            }
            y && this.root.registerSharedNode(y, this),
            this.options.animate !== !1 && p && (y || g) && this.addEventListener("didUpdate", ({delta: S, hasLayoutChanged: b, hasRelativeLayoutChanged: A, layout: N}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const _ = this.options.transition || p.getDefaultTransition() || V2
                  , {onLayoutAnimationStart: H, onLayoutAnimationComplete: X} = p.getProps()
                  , G = !this.targetLayout || !C0(this.targetLayout, N)
                  , P = !b && A;
                if (this.options.layoutRoot || this.resumeFrom || P || b && (G || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const Y = {
                        ...Nc(_, "layout"),
                        onPlay: H,
                        onComplete: X
                    };
                    (p.shouldReduceMotion || this.options.layoutRoot) && (Y.delay = 0,
                    Y.type = !1),
                    this.startAnimation(Y),
                    this.setAnimationOrigin(S, P)
                } else
                    b || Fp(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = N
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            qn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(R2),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: d} = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && R0(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let S = 0; S < this.path.length; S++) {
                const b = this.path[S];
                b.shouldResetTransform = !0,
                b.updateScroll("snapshot"),
                b.options.layoutRoot && b.willUpdate(!1)
            }
            const {layoutId: y, layout: g} = this.options;
            if (y === void 0 && !g)
                return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Jp);
                return
            }
            this.isUpdating || this.nodes.forEach(E2),
            this.isUpdating = !1,
            this.nodes.forEach(D2),
            this.nodes.forEach(x2),
            this.nodes.forEach(T2),
            this.clearAllSnapshots();
            const y = fe.now();
            $t.delta = fn(0, 1e3 / 60, y - $t.timestamp),
            $t.timestamp = y,
            $t.isProcessing = !0,
            Eu.update.process($t),
            Eu.preRender.process($t),
            Eu.render.process($t),
            $t.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Rc.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(M2),
            this.sharedNodes.forEach(O2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Rt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Rt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !se(this.snapshot.measuredBox.x) && !se(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let g = 0; g < this.path.length; g++)
                    this.path[g].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Bt(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: y} = this.options;
            y && y.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d="measure") {
            let y = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (y = !1),
            y && this.instance) {
                const g = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: g,
                    offset: o(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : g
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , y = this.projectionDelta && !N0(this.projectionDelta)
              , g = this.getTransformTemplate()
              , p = g ? g(this.latestValues, "") : void 0
              , S = p !== this.prevTransformTemplateValue;
            d && this.instance && (y || ui(this.latestValues) || S) && (c(this.instance, p),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const y = this.measurePageBox();
            let g = this.removeElementScroll(y);
            return d && (g = this.removeTransform(g)),
            U2(g),
            {
                animationId: this.root.animationId,
                measuredBox: y,
                layoutBox: g,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var p;
            const {visualElement: d} = this.options;
            if (!d)
                return Bt();
            const y = d.measureViewportBox();
            if (!(((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(_2))) {
                const {scroll: S} = this.root;
                S && (na(y.x, S.offset.x),
                na(y.y, S.offset.y))
            }
            return y
        }
        removeElementScroll(d) {
            var g;
            const y = Bt();
            if (Oe(y, d),
            (g = this.scroll) != null && g.wasRoot)
                return y;
            for (let p = 0; p < this.path.length; p++) {
                const S = this.path[p]
                  , {scroll: b, options: A} = S;
                S !== this.root && b && A.layoutScroll && (b.wasRoot && Oe(y, d),
                na(y.x, b.offset.x),
                na(y.y, b.offset.y))
            }
            return y
        }
        applyTransform(d, y=!1) {
            const g = Bt();
            Oe(g, d);
            for (let p = 0; p < this.path.length; p++) {
                const S = this.path[p];
                !y && S.options.layoutScroll && S.scroll && S !== S.root && ia(g, {
                    x: -S.scroll.offset.x,
                    y: -S.scroll.offset.y
                }),
                ui(S.latestValues) && ia(g, S.latestValues)
            }
            return ui(this.latestValues) && ia(g, this.latestValues),
            g
        }
        removeTransform(d) {
            const y = Bt();
            Oe(y, d);
            for (let g = 0; g < this.path.length; g++) {
                const p = this.path[g];
                if (!p.instance || !ui(p.latestValues))
                    continue;
                tc(p.latestValues) && p.updateSnapshot();
                const S = Bt()
                  , b = p.measurePageBox();
                Oe(S, b),
                Xp(y, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, S)
            }
            return ui(this.latestValues) && Xp(y, this.latestValues),
            y
        }
        setTargetDelta(d) {
            this.targetDelta = d,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $t.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d=!1) {
            var A;
            const y = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== y;
            if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || (A = this.parent) != null && A.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: S, layoutId: b} = this.options;
            if (!(!this.layout || !(S || b))) {
                if (this.resolvedRelativeTargetAt = $t.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const N = this.getClosestProjectingParent();
                    N && N.layout && this.animationProgress !== 1 ? (this.relativeParent = N,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Bt(),
                    this.relativeTargetOrigin = Bt(),
                    ms(this.relativeTargetOrigin, this.layout.layoutBox, N.layout.layoutBox),
                    Oe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Bt(),
                this.targetWithTransforms = Bt()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                Lx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Oe(this.target, this.layout.layoutBox),
                b0(this.target, this.targetDelta)) : Oe(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const N = this.getClosestProjectingParent();
                    N && !!N.resumingFrom == !!this.resumingFrom && !N.options.layoutScroll && N.target && this.animationProgress !== 1 ? (this.relativeParent = N,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Bt(),
                    this.relativeTargetOrigin = Bt(),
                    ms(this.relativeTargetOrigin, this.target, N.target),
                    Oe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || tc(this.parent.latestValues) || S0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var _;
            const d = this.getLead()
              , y = !!this.resumingFrom || this !== d;
            let g = !0;
            if ((this.isProjectionDirty || (_ = this.parent) != null && _.isProjectionDirty) && (g = !1),
            y && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1),
            this.resolvedRelativeTargetAt === $t.timestamp && (g = !1),
            g)
                return;
            const {layout: p, layoutId: S} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(p || S))
                return;
            Oe(this.layoutCorrected, this.layout.layoutBox);
            const b = this.treeScale.x
              , A = this.treeScale.y;
            Hx(this.layoutCorrected, this.treeScale, this.path, y),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = Bt());
            const {target: N} = d;
            if (!N) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (qp(this.prevProjectionDelta.x, this.projectionDelta.x),
            qp(this.prevProjectionDelta.y, this.projectionDelta.y)),
            hs(this.projectionDelta, this.layoutCorrected, N, this.latestValues),
            (this.treeScale.x !== b || this.treeScale.y !== A || !Pp(this.projectionDelta.x, this.prevProjectionDelta.x) || !Pp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", N))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d=!0) {
            var y;
            if ((y = this.options.visualElement) == null || y.scheduleRender(),
            d) {
                const g = this.getStack();
                g && g.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ea(),
            this.projectionDelta = ea(),
            this.projectionDeltaWithTransform = ea()
        }
        setAnimationOrigin(d, y=!1) {
            const g = this.snapshot
              , p = g ? g.latestValues : {}
              , S = {
                ...this.latestValues
            }
              , b = ea();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !y;
            const A = Bt()
              , N = g ? g.source : void 0
              , _ = this.layout ? this.layout.source : void 0
              , H = N !== _
              , X = this.getStack()
              , G = !X || X.members.length <= 1
              , P = !!(H && !G && this.options.crossfade === !0 && !this.path.some(z2));
            this.animationProgress = 0;
            let Y;
            this.mixTargetDelta = it => {
                const B = it / 1e3;
                Wp(b.x, d.x, B),
                Wp(b.y, d.y, B),
                this.setTargetDelta(b),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ms(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                w2(this.relativeTarget, this.relativeTargetOrigin, A, B),
                Y && p2(this.relativeTarget, Y) && (this.isProjectionDirty = !1),
                Y || (Y = Bt()),
                Oe(Y, this.relativeTarget)),
                H && (this.animationValues = S,
                u2(S, p, this.latestValues, B, P, G)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = B
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            var y, g, p;
            this.notifyListeners("animationStart"),
            (y = this.currentAnimation) == null || y.stop(),
            (p = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) == null || p.stop(),
            this.pendingAnimation && (qn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Rt.update( () => {
                Pl.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = aa(0)),
                this.currentAnimation = a2(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: S => {
                        this.mixTargetDelta(S),
                        d.onUpdate && d.onUpdate(S)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        d.onComplete && d.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(S2),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: y, target: g, layout: p, latestValues: S} = d;
            if (!(!y || !g || !p)) {
                if (this !== d && this.layout && p && w0(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    g = this.target || Bt();
                    const b = se(this.layout.layoutBox.x);
                    g.x.min = d.target.x.min,
                    g.x.max = g.x.min + b;
                    const A = se(this.layout.layoutBox.y);
                    g.y.min = d.target.y.min,
                    g.y.max = g.y.min + A
                }
                Oe(y, g),
                ia(y, S),
                hs(this.projectionDeltaWithTransform, this.layoutCorrected, y, S)
            }
        }
        registerSharedNode(d, y) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new y2),
            this.sharedNodes.get(d).add(y);
            const p = y.options.initialPromotionConfig;
            y.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(y) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var y;
            const {layoutId: d} = this.options;
            return d ? ((y = this.getStack()) == null ? void 0 : y.lead) || this : this
        }
        getPrevLead() {
            var y;
            const {layoutId: d} = this.options;
            return d ? (y = this.getStack()) == null ? void 0 : y.prevLead : void 0
        }
        getStack() {
            const {layoutId: d} = this.options;
            if (d)
                return this.root.sharedNodes.get(d)
        }
        promote({needsReset: d, transition: y, preserveFollowOpacity: g}={}) {
            const p = this.getStack();
            p && p.promote(this, g),
            d && (this.projectionDelta = void 0,
            this.needsReset = !0),
            y && this.setOptions({
                transition: y
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: d} = this.options;
            if (!d)
                return;
            let y = !1;
            const {latestValues: g} = d;
            if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (y = !0),
            !y)
                return;
            const p = {};
            g.z && _u("z", d, p, this.animationValues);
            for (let S = 0; S < Uu.length; S++)
                _u(`rotate${Uu[S]}`, d, p, this.animationValues),
                _u(`skew${Uu[S]}`, d, p, this.animationValues);
            d.render();
            for (const S in p)
                d.setStaticValue(S, p[S]),
                this.animationValues && (this.animationValues[S] = p[S]);
            d.scheduleRender()
        }
        getProjectionStyles(d) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return v2;
            const y = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                y.opacity = "",
                y.pointerEvents = Kl(d == null ? void 0 : d.pointerEvents) || "",
                y.transform = g ? g(this.latestValues, "") : "none",
                y;
            const p = this.getLead();
            if (!this.projectionDelta || !this.layout || !p.target) {
                const N = {};
                return this.options.layoutId && (N.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                N.pointerEvents = Kl(d == null ? void 0 : d.pointerEvents) || ""),
                this.hasProjected && !ui(this.latestValues) && (N.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                N
            }
            const S = p.animationValues || p.latestValues;
            this.applyTransformsToTarget(),
            y.transform = g2(this.projectionDeltaWithTransform, this.treeScale, S),
            g && (y.transform = g(S, y.transform));
            const {x: b, y: A} = this.projectionDelta;
            y.transformOrigin = `${b.origin * 100}% ${A.origin * 100}% 0`,
            p.animationValues ? y.opacity = p === this ? S.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : S.opacityExit : y.opacity = p === this ? S.opacity !== void 0 ? S.opacity : "" : S.opacityExit !== void 0 ? S.opacityExit : 0;
            for (const N in Ss) {
                if (S[N] === void 0)
                    continue;
                const {correct: _, applyTo: H, isCSSVariable: X} = Ss[N]
                  , G = y.transform === "none" ? S[N] : _(S[N], p);
                if (H) {
                    const P = H.length;
                    for (let Y = 0; Y < P; Y++)
                        y[H[Y]] = G
                } else
                    X ? this.options.visualElement.renderState.vars[N] = G : y[N] = G
            }
            return this.options.layoutId && (y.pointerEvents = p === this ? Kl(d == null ? void 0 : d.pointerEvents) || "" : "none"),
            y
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var y;
                return (y = d.currentAnimation) == null ? void 0 : y.stop()
            }
            ),
            this.root.nodes.forEach(Jp),
            this.root.sharedNodes.clear()
        }
    }
}
function x2(i) {
    i.updateLayout()
}
function T2(i) {
    var o;
    const s = ((o = i.resumeFrom) == null ? void 0 : o.snapshot) || i.snapshot;
    if (i.isLead() && i.layout && s && i.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: c} = i.layout
          , {animationType: m} = i.options
          , d = s.source !== i.layout.source;
        m === "size" ? we(b => {
            const A = d ? s.measuredBox[b] : s.layoutBox[b]
              , N = se(A);
            A.min = r[b].min,
            A.max = A.min + N
        }
        ) : w0(m, s.layoutBox, r) && we(b => {
            const A = d ? s.measuredBox[b] : s.layoutBox[b]
              , N = se(r[b]);
            A.max = A.min + N,
            i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0,
            i.relativeTarget[b].max = i.relativeTarget[b].min + N)
        }
        );
        const y = ea();
        hs(y, r, s.layoutBox);
        const g = ea();
        d ? hs(g, i.applyTransform(c, !0), s.measuredBox) : hs(g, r, s.layoutBox);
        const p = !N0(y);
        let S = !1;
        if (!i.resumeFrom) {
            const b = i.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
                const {snapshot: A, layout: N} = b;
                if (A && N) {
                    const _ = Bt();
                    ms(_, s.layoutBox, A.layoutBox);
                    const H = Bt();
                    ms(H, r, N.layoutBox),
                    C0(_, H) || (S = !0),
                    b.options.layoutRoot && (i.relativeTarget = H,
                    i.relativeTargetOrigin = _,
                    i.relativeParent = b)
                }
            }
        }
        i.notifyListeners("didUpdate", {
            layout: r,
            snapshot: s,
            delta: g,
            layoutDelta: y,
            hasLayoutChanged: p,
            hasRelativeLayoutChanged: S
        })
    } else if (i.isLead()) {
        const {onExitComplete: r} = i.options;
        r && r()
    }
    i.options.transition = void 0
}
function A2(i) {
    i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty))
}
function j2(i) {
    i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1
}
function M2(i) {
    i.clearSnapshot()
}
function Jp(i) {
    i.clearMeasurements()
}
function E2(i) {
    i.isLayoutDirty = !1
}
function D2(i) {
    const {visualElement: s} = i.options;
    s && s.getProps().onBeforeLayoutMeasure && s.notify("BeforeLayoutMeasure"),
    i.resetTransform()
}
function Fp(i) {
    i.finishAnimation(),
    i.targetDelta = i.relativeTarget = i.target = void 0,
    i.isProjectionDirty = !0
}
function N2(i) {
    i.resolveTargetDelta()
}
function C2(i) {
    i.calcProjection()
}
function R2(i) {
    i.resetSkewAndRotation()
}
function O2(i) {
    i.removeLeadSnapshot()
}
function Wp(i, s, o) {
    i.translate = Ct(s.translate, 0, o),
    i.scale = Ct(s.scale, 1, o),
    i.origin = s.origin,
    i.originPoint = s.originPoint
}
function $p(i, s, o, r) {
    i.min = Ct(s.min, o.min, r),
    i.max = Ct(s.max, o.max, r)
}
function w2(i, s, o, r) {
    $p(i.x, s.x, o.x, r),
    $p(i.y, s.y, o.y, r)
}
function z2(i) {
    return i.animationValues && i.animationValues.opacityExit !== void 0
}
const V2 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ip = i => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i)
  , ty = Ip("applewebkit/") && !Ip("chrome/") ? Math.round : ze;
function ey(i) {
    i.min = ty(i.min),
    i.max = ty(i.max)
}
function U2(i) {
    ey(i.x),
    ey(i.y)
}
function w0(i, s, o) {
    return i === "position" || i === "preserve-aspect" && !Bx(Kp(s), Kp(o), .2)
}
function _2(i) {
    var s;
    return i !== i.root && ((s = i.scroll) == null ? void 0 : s.wasRoot)
}
const B2 = O0({
    attachResizeListener: (i, s) => xs(i, "resize", s),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Bu = {
    current: void 0
}
  , z0 = O0({
    measureScroll: i => ({
        x: i.scrollLeft,
        y: i.scrollTop
    }),
    defaultParent: () => {
        if (!Bu.current) {
            const i = new B2({});
            i.mount(window),
            i.setOptions({
                layoutScroll: !0
            }),
            Bu.current = i
        }
        return Bu.current
    }
    ,
    resetTransform: (i, s) => {
        i.style.transform = s !== void 0 ? s : "none"
    }
    ,
    checkIsScrollRoot: i => window.getComputedStyle(i).position === "fixed"
})
  , L2 = {
    pan: {
        Feature: t2
    },
    drag: {
        Feature: Ix,
        ProjectionNode: z0,
        MeasureLayout: M0
    }
};
function ny(i, s, o) {
    const {props: r} = i;
    i.animationState && r.whileHover && i.animationState.setActive("whileHover", o === "Start");
    const c = "onHover" + o
      , m = r[c];
    m && Rt.postRender( () => m(s, Ms(s)))
}
class H2 extends Xn {
    mount() {
        const {current: s} = this.node;
        s && (this.unmount = db(s, (o, r) => (ny(this.node, r, "Start"),
        c => ny(this.node, c, "End"))))
    }
    unmount() {}
}
class q2 extends Xn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let s = !1;
        try {
            s = this.node.current.matches(":focus-visible")
        } catch {
            s = !0
        }
        !s || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ts(xs(this.node.current, "focus", () => this.onFocus()), xs(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function iy(i, s, o) {
    const {props: r} = i;
    if (i.current instanceof HTMLButtonElement && i.current.disabled)
        return;
    i.animationState && r.whileTap && i.animationState.setActive("whileTap", o === "Start");
    const c = "onTap" + (o === "End" ? "" : o)
      , m = r[c];
    m && Rt.postRender( () => m(s, Ms(s)))
}
class Y2 extends Xn {
    mount() {
        const {current: s} = this.node;
        s && (this.unmount = yb(s, (o, r) => (iy(this.node, r, "Start"),
        (c, {success: m}) => iy(this.node, c, m ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const ic = new WeakMap
  , Lu = new WeakMap
  , G2 = i => {
    const s = ic.get(i.target);
    s && s(i)
}
  , X2 = i => {
    i.forEach(G2)
}
;
function k2({root: i, ...s}) {
    const o = i || document;
    Lu.has(o) || Lu.set(o, {});
    const r = Lu.get(o)
      , c = JSON.stringify(s);
    return r[c] || (r[c] = new IntersectionObserver(X2,{
        root: i,
        ...s
    })),
    r[c]
}
function Q2(i, s, o) {
    const r = k2(s);
    return ic.set(i, o),
    r.observe(i),
    () => {
        ic.delete(i),
        r.unobserve(i)
    }
}
const Z2 = {
    some: 0,
    all: 1
};
class K2 extends Xn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: s={}} = this.node.getProps()
          , {root: o, margin: r, amount: c="some", once: m} = s
          , d = {
            root: o ? o.current : void 0,
            rootMargin: r,
            threshold: typeof c == "number" ? c : Z2[c]
        }
          , y = g => {
            const {isIntersecting: p} = g;
            if (this.isInView === p || (this.isInView = p,
            m && !p && this.hasEnteredView))
                return;
            p && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {onViewportEnter: S, onViewportLeave: b} = this.node.getProps()
              , A = p ? S : b;
            A && A(g)
        }
        ;
        return Q2(this.node.current, d, y)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: s, prevProps: o} = this.node;
        ["amount", "margin", "root"].some(P2(s, o)) && this.startObserver()
    }
    unmount() {}
}
function P2({viewport: i={}}, {viewport: s={}}={}) {
    return o => i[o] !== s[o]
}
const J2 = {
    inView: {
        Feature: K2
    },
    tap: {
        Feature: Y2
    },
    focus: {
        Feature: q2
    },
    hover: {
        Feature: H2
    }
}
  , F2 = {
    layout: {
        ProjectionNode: z0,
        MeasureLayout: M0
    }
}
  , ac = {
    current: null
}
  , V0 = {
    current: !1
};
function W2() {
    if (V0.current = !0,
    !!uc)
        if (window.matchMedia) {
            const i = window.matchMedia("(prefers-reduced-motion)")
              , s = () => ac.current = i.matches;
            i.addListener(s),
            s()
        } else
            ac.current = !1
}
const $2 = new WeakMap;
function I2(i, s, o) {
    for (const r in s) {
        const c = s[r]
          , m = o[r];
        if (ie(c))
            i.addValue(r, c);
        else if (ie(m))
            i.addValue(r, aa(c, {
                owner: i
            }));
        else if (m !== c)
            if (i.hasValue(r)) {
                const d = i.getValue(r);
                d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c)
            } else {
                const d = i.getStaticValue(r);
                i.addValue(r, aa(d !== void 0 ? d : c, {
                    owner: i
                }))
            }
    }
    for (const r in o)
        s[r] === void 0 && i.removeValue(r);
    return s
}
const ay = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class tT {
    scrapeMotionValuesFromProps(s, o, r) {
        return {}
    }
    constructor({parent: s, props: o, presenceContext: r, reducedMotionConfig: c, blockInitialAnimation: m, visualState: d}, y={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Ec,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const A = fe.now();
            this.renderScheduledAt < A && (this.renderScheduledAt = A,
            Rt.render(this.render, !1, !0))
        }
        ;
        const {latestValues: g, renderState: p} = d;
        this.latestValues = g,
        this.baseTarget = {
            ...g
        },
        this.initialValues = o.initial ? {
            ...g
        } : {},
        this.renderState = p,
        this.parent = s,
        this.props = o,
        this.presenceContext = r,
        this.depth = s ? s.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = y,
        this.blockInitialAnimation = !!m,
        this.isControllingVariants = io(o),
        this.isVariantNode = e0(o),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(s && s.current);
        const {willChange: S, ...b} = this.scrapeMotionValuesFromProps(o, {}, this);
        for (const A in b) {
            const N = b[A];
            g[A] !== void 0 && ie(N) && N.set(g[A], !1)
        }
    }
    mount(s) {
        this.current = s,
        $2.set(s, this),
        this.projection && !this.projection.instance && this.projection.mount(s),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (o, r) => this.bindToMotionValue(r, o)),
        V0.current || W2(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ac.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        qn(this.notifyUpdate),
        qn(this.render),
        this.valueSubscriptions.forEach(s => s()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const s in this.events)
            this.events[s].clear();
        for (const s in this.features) {
            const o = this.features[s];
            o && (o.unmount(),
            o.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(s, o) {
        this.valueSubscriptions.has(s) && this.valueSubscriptions.get(s)();
        const r = ra.has(s);
        r && this.onBindTransform && this.onBindTransform();
        const c = o.on("change", y => {
            this.latestValues[s] = y,
            this.props.onUpdate && Rt.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , m = o.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, s, o)),
        this.valueSubscriptions.set(s, () => {
            c(),
            m(),
            d && d(),
            o.owner && o.stop()
        }
        )
    }
    sortNodePosition(s) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== s.type ? 0 : this.sortInstanceNodePosition(this.current, s.current)
    }
    updateFeatures() {
        let s = "animation";
        for (s in sa) {
            const o = sa[s];
            if (!o)
                continue;
            const {isEnabled: r, Feature: c} = o;
            if (!this.features[s] && c && r(this.props) && (this.features[s] = new c(this)),
            this.features[s]) {
                const m = this.features[s];
                m.isMounted ? m.update() : (m.mount(),
                m.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Bt()
    }
    getStaticValue(s) {
        return this.latestValues[s]
    }
    setStaticValue(s, o) {
        this.latestValues[s] = o
    }
    update(s, o) {
        (s.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = s,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = o;
        for (let r = 0; r < ay.length; r++) {
            const c = ay[r];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const m = "on" + c
              , d = s[m];
            d && (this.propEventSubscriptions[c] = this.on(c, d))
        }
        this.prevMotionValues = I2(this, this.scrapeMotionValuesFromProps(s, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(s) {
        return this.props.variants ? this.props.variants[s] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(s) {
        const o = this.getClosestVariantNode();
        if (o)
            return o.variantChildren && o.variantChildren.add(s),
            () => o.variantChildren.delete(s)
    }
    addValue(s, o) {
        const r = this.values.get(s);
        o !== r && (r && this.removeValue(s),
        this.bindToMotionValue(s, o),
        this.values.set(s, o),
        this.latestValues[s] = o.get())
    }
    removeValue(s) {
        this.values.delete(s);
        const o = this.valueSubscriptions.get(s);
        o && (o(),
        this.valueSubscriptions.delete(s)),
        delete this.latestValues[s],
        this.removeValueFromRenderState(s, this.renderState)
    }
    hasValue(s) {
        return this.values.has(s)
    }
    getValue(s, o) {
        if (this.props.values && this.props.values[s])
            return this.props.values[s];
        let r = this.values.get(s);
        return r === void 0 && o !== void 0 && (r = aa(o === null ? void 0 : o, {
            owner: this
        }),
        this.addValue(s, r)),
        r
    }
    readValue(s, o) {
        let r = this.latestValues[s] !== void 0 || !this.current ? this.latestValues[s] : this.getBaseTargetFromProps(this.props, s) ?? this.readValueFromInstance(this.current, s, this.options);
        return r != null && (typeof r == "string" && (uy(r) || fy(r)) ? r = parseFloat(r) : !Sb(r) && Yn.test(o) && (r = Zy(s, o)),
        this.setBaseTarget(s, ie(r) ? r.get() : r)),
        ie(r) ? r.get() : r
    }
    setBaseTarget(s, o) {
        this.baseTarget[s] = o
    }
    getBaseTarget(s) {
        var m;
        const {initial: o} = this.props;
        let r;
        if (typeof o == "string" || typeof o == "object") {
            const d = Hc(this.props, o, (m = this.presenceContext) == null ? void 0 : m.custom);
            d && (r = d[s])
        }
        if (o && r !== void 0)
            return r;
        const c = this.getBaseTargetFromProps(this.props, s);
        return c !== void 0 && !ie(c) ? c : this.initialValues[s] !== void 0 && r === void 0 ? void 0 : this.baseTarget[s]
    }
    on(s, o) {
        return this.events[s] || (this.events[s] = new mc),
        this.events[s].add(o)
    }
    notify(s, ...o) {
        this.events[s] && this.events[s].notify(...o)
    }
}
class U0 extends tT {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = ob
    }
    sortInstanceNodePosition(s, o) {
        return s.compareDocumentPosition(o) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(s, o) {
        return s.style ? s.style[o] : void 0
    }
    removeValueFromRenderState(s, {vars: o, style: r}) {
        delete o[s],
        delete r[s]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: s} = this.props;
        ie(s) && (this.childSubscription = s.on("change", o => {
            this.current && (this.current.textContent = `${o}`)
        }
        ))
    }
}
function _0(i, {style: s, vars: o}, r, c) {
    Object.assign(i.style, s, c && c.getProjectionStyles(r));
    for (const m in o)
        i.style.setProperty(m, o[m])
}
function eT(i) {
    return window.getComputedStyle(i)
}
class nT extends U0 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = _0
    }
    readValueFromInstance(s, o) {
        var r;
        if (ra.has(o))
            return (r = this.projection) != null && r.isProjecting ? Qu(o) : ES(s, o);
        {
            const c = eT(s)
              , m = (gc(o) ? c.getPropertyValue(o) : c[o]) || 0;
            return typeof m == "string" ? m.trim() : m
        }
    }
    measureInstanceViewportBox(s, {transformPagePoint: o}) {
        return x0(s, o)
    }
    build(s, o, r) {
        _c(s, o, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(s, o, r) {
        return qc(s, o, r)
    }
}
const B0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function iT(i, s, o, r) {
    _0(i, s, void 0, r);
    for (const c in s.attrs)
        i.setAttribute(B0.has(c) ? c : Uc(c), s.attrs[c])
}
class aT extends U0 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Bt
    }
    getBaseTargetFromProps(s, o) {
        return s[o]
    }
    readValueFromInstance(s, o) {
        if (ra.has(o)) {
            const r = Qy(o);
            return r && r.default || 0
        }
        return o = B0.has(o) ? o : Uc(o),
        s.getAttribute(o)
    }
    scrapeMotionValuesFromProps(s, o, r) {
        return f0(s, o, r)
    }
    build(s, o, r) {
        o0(s, o, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(s, o, r, c) {
        iT(s, o, r, c)
    }
    mount(s) {
        this.isSVGTag = u0(s.tagName),
        super.mount(s)
    }
}
const sT = (i, s) => Lc(i) ? new aT(s) : new nT(s,{
    allowProjection: i !== L.Fragment
})
  , lT = ix({
    ...Cx,
    ...J2,
    ...L2,
    ...F2
}, sT)
  , ft = Nb(lT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , rT = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, o, r) => r ? r.toUpperCase() : o.toLowerCase())
  , sy = i => {
    const s = rT(i);
    return s.charAt(0).toUpperCase() + s.slice(1)
}
  , L0 = (...i) => i.filter( (s, o, r) => !!s && s.trim() !== "" && r.indexOf(s) === o).join(" ").trim()
  , uT = i => {
    for (const s in i)
        if (s.startsWith("aria-") || s === "role" || s === "title")
            return !0
}
;
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cT = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = L.forwardRef( ({color: i="currentColor", size: s=24, strokeWidth: o=2, absoluteStrokeWidth: r, className: c="", children: m, iconNode: d, ...y}, g) => L.createElement("svg", {
    ref: g,
    ...cT,
    width: s,
    height: s,
    stroke: i,
    strokeWidth: r ? Number(o) * 24 / Number(s) : o,
    className: L0("lucide", c),
    ...!m && !uT(y) && {
        "aria-hidden": "true"
    },
    ...y
}, [...d.map( ([p,S]) => L.createElement(p, S)), ...Array.isArray(m) ? m : [m]]));
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = (i, s) => {
    const o = L.forwardRef( ({className: r, ...c}, m) => L.createElement(fT, {
        ref: m,
        iconNode: s,
        className: L0(`lucide-${oT(sy(i))}`, `lucide-${i}`, r),
        ...c
    }));
    return o.displayName = sy(i),
    o
}
;
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dT = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , Gc = Mt("arrow-right", dT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hT = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , H0 = Mt("award", hT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mT = [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]
  , pT = Mt("chart-column", mT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , q0 = Mt("chevron-right", yT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gT = [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]
  , Hn = Mt("circle-check-big", gT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]
  , ST = Mt("cloud", vT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bT = [["path", {
    d: "m16 18 6-6-6-6",
    key: "eg8j8"
}], ["path", {
    d: "m8 6-6 6 6 6",
    key: "ppft3o"
}]]
  , sc = Mt("code", bT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
}], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
}]]
  , TT = Mt("database", xT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AT = [["path", {
    d: "M12 15V3",
    key: "m9g1x1"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["path", {
    d: "m7 10 5 5 5-5",
    key: "brsn70"
}]]
  , jT = Mt("download", AT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MT = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , ET = Mt("external-link", MT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DT = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , NT = Mt("globe", DT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CT = [["path", {
    d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
    key: "zw3jo"
}], ["path", {
    d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
    key: "1wduqc"
}], ["path", {
    d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
    key: "kqbvx6"
}]]
  , RT = Mt("layers", CT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OT = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , Xc = Mt("mail", OT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wT = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , Y0 = Mt("map-pin", wT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zT = [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "3",
    rx: "2",
    key: "48i651"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "21",
    y2: "21",
    key: "1svkeh"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "17",
    y2: "21",
    key: "vw1qmm"
}]]
  , VT = Mt("monitor", zT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UT = [["polygon", {
    points: "6 3 20 12 6 21 6 3",
    key: "1oa8hb"
}]]
  , _T = Mt("play", UT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BT = [["path", {
    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "rib7q0"
}], ["path", {
    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "1ymkrd"
}]]
  , LT = Mt("quote", BT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HT = [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]
  , ly = Mt("rocket", HT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qT = [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]
  , G0 = Mt("settings", qT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YT = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , GT = Mt("shield", YT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XT = [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]
  , kT = Mt("smartphone", XT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QT = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , X0 = Mt("star", QT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZT = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]
  , oy = Mt("target", ZT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KT = [["path", {
    d: "M16 7h6v6",
    key: "box55l"
}], ["path", {
    d: "m22 7-8.5 8.5-5-5L2 17",
    key: "1t1m79"
}]]
  , k0 = Mt("trending-up", KT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PT = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["path", {
    d: "M16 3.128a4 4 0 0 1 0 7.744",
    key: "16gr8j"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , Q0 = Mt("users", PT);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JT = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , FT = Mt("zap", JT)
  , WT = () => {
    const [i,s] = L.useState(!1)
      , [o,r] = L.useState(!1);
    L.useEffect( () => {
        const d = () => {
            r(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", d),
        () => window.removeEventListener("scroll", d)
    }
    , []),
    L.useEffect( () => {
        const d = y => {
            i && !y.target.closest(".nav-content") && s(!1)
        }
        ;
        return document.addEventListener("click", d),
        () => document.removeEventListener("click", d)
    }
    , [i]),
    L.useEffect( () => (i ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset",
    () => {
        document.body.style.overflow = "unset"
    }
    ), [i]);
    const c = d => {
        const y = document.getElementById(d);
        y && (y.scrollIntoView({
            behavior: "smooth"
        }),
        s(!1))
    }
      , m = () => {
        c("contact"),
        s(!1)
    }
    ;
    return f.jsx("header", {
        className: `header ${o ? "scrolled" : ""}`,
        children: f.jsx("nav", {
            className: "nav",
            children: f.jsx("div", {
                className: "container",
                children: f.jsxs("div", {
                    className: "nav-content",
                    children: [f.jsx("div", {
                        className: "logo",
                        onClick: () => c("home"),
                        children: f.jsx("span", {
                            className: "logo-text",
                            children: "SharkTechSolutions"
                        })
                    }), f.jsxs("div", {
                        className: `nav-links ${i ? "open" : ""}`,
                        children: [f.jsx("a", {
                            href: "#home",
                            onClick: d => {
                                d.preventDefault(),
                                c("home")
                            }
                            ,
                            children: "Home"
                        }), f.jsx("a", {
                            href: "#services",
                            onClick: d => {
                                d.preventDefault(),
                                c("services")
                            }
                            ,
                            children: "Services"
                        }), f.jsx("a", {
                            href: "#solutions",
                            onClick: d => {
                                d.preventDefault(),
                                c("solutions")
                            }
                            ,
                            children: "Solutions"
                        }), f.jsx("a", {
                            href: "#about",
                            onClick: d => {
                                d.preventDefault(),
                                c("about")
                            }
                            ,
                            children: "About"
                        }), f.jsx("a", {
                            href: "#contact",
                            onClick: d => {
                                d.preventDefault(),
                                c("contact")
                            }
                            ,
                            children: "Contact"
                        })]
                    }), f.jsx("button", {
                        className: "btn btn-primary",
                        onClick: m,
                        children: "Get Started"
                    }), f.jsxs("button", {
                        className: "mobile-menu-btn",
                        onClick: () => s(!i),
                        "aria-label": "Toggle mobile menu",
                        children: [f.jsx("span", {}), f.jsx("span", {}), f.jsx("span", {})]
                    })]
                })
            })
        })
    })
}
  , $T = () => {
    const [i,s] = L.useState(0)
      , [o,r] = L.useState(!1)
      , c = [{
        icon: sc,
        number: "200+",
        label: "Projects Delivered"
    }, {
        icon: Q0,
        number: "50+",
        label: "Happy Clients"
    }, {
        icon: H0,
        number: "5+",
        label: "Years Experience"
    }, {
        icon: k0,
        number: "99%",
        label: "Success Rate"
    }];
    L.useEffect( () => {
        const d = setInterval( () => {
            s(y => (y + 1) % c.length)
        }
        , 3e3);
        return () => clearInterval(d)
    }
    , []);
    const m = () => {
        const d = document.getElementById("contact");
        d && d.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return f.jsxs("section", {
        id: "home",
        className: "hero",
        children: [f.jsx("div", {
            className: "hero-background",
            children: f.jsxs("div", {
                className: "hero-shapes",
                children: [f.jsx("div", {
                    className: "shape shape-1"
                }), f.jsx("div", {
                    className: "shape shape-2"
                }), f.jsx("div", {
                    className: "shape shape-3"
                })]
            })
        }), f.jsx("div", {
            className: "container",
            children: f.jsxs("div", {
                className: "hero-content",
                children: [f.jsxs(ft.div, {
                    className: "hero-text",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    children: [f.jsxs(ft.div, {
                        className: "hero-badge",
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        children: [f.jsx(X0, {
                            size: 16,
                            fill: "currentColor"
                        }), f.jsx("span", {
                            children: "Trusted by 50+ Companies"
                        })]
                    }), f.jsxs("h1", {
                        className: "hero-title",
                        children: [f.jsx(ft.span, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .3
                            },
                            children: "Transform Your Business with"
                        }), f.jsx("br", {}), f.jsx(ft.span, {
                            className: "gradient-text",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .5
                            },
                            children: "Custom Software Solutions"
                        })]
                    }), f.jsx(ft.p, {
                        className: "hero-subtitle",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .7
                        },
                        children: "We build scalable web applications, mobile apps, and enterprise software that drive growth and innovation. From MVP to enterprise-grade solutions, we deliver excellence with cutting-edge technology."
                    }), f.jsxs(ft.div, {
                        className: "hero-features",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .9
                        },
                        children: [f.jsxs("div", {
                            className: "feature-item",
                            children: [f.jsx(Hn, {
                                size: 16
                            }), f.jsx("span", {
                                children: "Free Consultation"
                            })]
                        }), f.jsxs("div", {
                            className: "feature-item",
                            children: [f.jsx(Hn, {
                                size: 16
                            }), f.jsx("span", {
                                children: "24/7 Support"
                            })]
                        }), f.jsxs("div", {
                            className: "feature-item",
                            children: [f.jsx(Hn, {
                                size: 16
                            }), f.jsx("span", {
                                children: "Money Back Guarantee"
                            })]
                        })]
                    }), f.jsxs(ft.div, {
                        className: "hero-buttons",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: 1.1
                        },
                        children: [f.jsxs("button", {
                            className: "btn btn-primary btn-large",
                            onClick: m,
                            children: [f.jsx(ly, {
                                size: 20
                            }), "Start Your Project", f.jsx(Gc, {
                                size: 20
                            })]
                        }), f.jsxs("button", {
                            className: "btn btn-secondary btn-large",
                            onClick: () => r(!0),
                            children: [f.jsx(_T, {
                                size: 20
                            }), "Watch Demo"]
                        })]
                    }), f.jsx(ft.div, {
                        className: "hero-stats",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: 1.3
                        },
                        children: c.map( (d, y) => {
                            const g = d.icon;
                            return f.jsxs(ft.div, {
                                className: `stat ${i === y ? "active" : ""}`,
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: .2
                                },
                                children: [f.jsx("div", {
                                    className: "stat-icon",
                                    children: f.jsx(g, {
                                        size: 24
                                    })
                                }), f.jsx("span", {
                                    className: "stat-number",
                                    children: d.number
                                }), f.jsx("span", {
                                    className: "stat-label",
                                    children: d.label
                                })]
                            }, y)
                        }
                        )
                    })]
                }), f.jsx(ft.div, {
                    className: "hero-visual",
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    children: f.jsxs("div", {
                        className: "hero-dashboard",
                        children: [f.jsxs("div", {
                            className: "dashboard-header",
                            children: [f.jsxs("div", {
                                className: "dashboard-controls",
                                children: [f.jsx("div", {
                                    className: "control red"
                                }), f.jsx("div", {
                                    className: "control yellow"
                                }), f.jsx("div", {
                                    className: "control green"
                                })]
                            }), f.jsx("div", {
                                className: "dashboard-title",
                                children: "SharkTechSolutions Dashboard"
                            })]
                        }), f.jsxs("div", {
                            className: "dashboard-content",
                            children: [f.jsxs(ft.div, {
                                className: "floating-card card-1",
                                animate: {
                                    y: [0, -10, 0]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: 1 / 0,
                                    ease: "easeInOut"
                                },
                                children: [f.jsx("div", {
                                    className: "card-icon",
                                    children: f.jsx(sc, {
                                        size: 24
                                    })
                                }), f.jsxs("div", {
                                    className: "card-content",
                                    children: [f.jsx("span", {
                                        className: "card-title",
                                        children: "Clean Code"
                                    }), f.jsx("span", {
                                        className: "card-subtitle",
                                        children: "Best Practices"
                                    })]
                                })]
                            }), f.jsxs(ft.div, {
                                className: "floating-card card-2",
                                animate: {
                                    y: [0, -15, 0]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: 1
                                },
                                children: [f.jsx("div", {
                                    className: "card-icon",
                                    children: f.jsx(ly, {
                                        size: 24
                                    })
                                }), f.jsxs("div", {
                                    className: "card-content",
                                    children: [f.jsx("span", {
                                        className: "card-title",
                                        children: "Fast Delivery"
                                    }), f.jsx("span", {
                                        className: "card-subtitle",
                                        children: "On Time"
                                    })]
                                })]
                            }), f.jsxs(ft.div, {
                                className: "floating-card card-3",
                                animate: {
                                    y: [0, -12, 0]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: 2
                                },
                                children: [f.jsx("div", {
                                    className: "card-icon",
                                    children: f.jsx(GT, {
                                        size: 24
                                    })
                                }), f.jsxs("div", {
                                    className: "card-content",
                                    children: [f.jsx("span", {
                                        className: "card-title",
                                        children: "Secure"
                                    }), f.jsx("span", {
                                        className: "card-subtitle",
                                        children: "Enterprise Grade"
                                    })]
                                })]
                            }), f.jsxs(ft.div, {
                                className: "floating-card card-4",
                                animate: {
                                    y: [0, -8, 0]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: .5
                                },
                                children: [f.jsx("div", {
                                    className: "card-icon",
                                    children: f.jsx(FT, {
                                        size: 24
                                    })
                                }), f.jsxs("div", {
                                    className: "card-content",
                                    children: [f.jsx("span", {
                                        className: "card-title",
                                        children: "Performance"
                                    }), f.jsx("span", {
                                        className: "card-subtitle",
                                        children: "Optimized"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        }), f.jsx(Gn, {
            children: o && f.jsx(ft.div, {
                className: "modal-overlay",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: () => r(!1),
                children: f.jsxs(ft.div, {
                    className: "modal-content demo-modal",
                    initial: {
                        scale: .8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .8,
                        opacity: 0
                    },
                    onClick: d => d.stopPropagation(),
                    children: [f.jsxs("div", {
                        className: "modal-header",
                        children: [f.jsx("h3", {
                            children: "SharkTechSolutions Demo Showcase"
                        }), f.jsx("button", {
                            className: "modal-close",
                            onClick: () => r(!1),
                            children: "×"
                        })]
                    }), f.jsx("div", {
                        className: "modal-body",
                        children: f.jsxs("div", {
                            className: "demo-content",
                            children: [f.jsxs("div", {
                                className: "demo-section",
                                children: [f.jsx("h4", {
                                    children: "🚀 Our Development Process"
                                }), f.jsxs("ul", {
                                    children: [f.jsx("li", {
                                        children: "Discovery & Planning"
                                    }), f.jsx("li", {
                                        children: "Design & Prototyping"
                                    }), f.jsx("li", {
                                        children: "Development & Testing"
                                    }), f.jsx("li", {
                                        children: "Deployment & Support"
                                    })]
                                })]
                            }), f.jsxs("div", {
                                className: "demo-section",
                                children: [f.jsx("h4", {
                                    children: "💼 Recent Success Stories"
                                }), f.jsxs("ul", {
                                    children: [f.jsx("li", {
                                        children: "E-commerce platform: 300% increase in sales"
                                    }), f.jsx("li", {
                                        children: "Healthcare app: 50,000+ active users"
                                    }), f.jsx("li", {
                                        children: "Financial dashboard: Real-time analytics"
                                    })]
                                })]
                            }), f.jsxs("div", {
                                className: "demo-actions",
                                children: [f.jsx("button", {
                                    className: "btn btn-primary",
                                    onClick: () => {
                                        r(!1),
                                        m()
                                    }
                                    ,
                                    children: "Schedule Live Demo"
                                }), f.jsx("button", {
                                    className: "btn btn-secondary",
                                    onClick: () => {
                                        r(!1),
                                        document.getElementById("contact").scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    }
                                    ,
                                    children: "Contact Us"
                                })]
                            })]
                        })
                    })]
                })
            })
        })]
    })
}
  , IT = () => {
    const [i,s] = L.useState("all")
      , [o,r] = L.useState(null)
      , [c,m] = L.useState(null)
      , d = [{
        icon: f.jsx(NT, {
            size: 40
        }),
        title: "Web Development",
        description: "Full-stack web applications using React, Node.js, Python, and modern frameworks for scalable solutions.",
        technologies: ["React", "Node.js", "Python", "Next.js"],
        category: "development",
        price: "Starting from $5,000",
        details: {
            overview: "We create modern, responsive web applications that deliver exceptional user experiences and drive business growth.",
            features: ["Custom web application development", "Responsive design for all devices", "Performance optimization", "SEO-friendly architecture", "Third-party integrations", "Ongoing maintenance and support"],
            process: ["Requirements analysis and planning", "UI/UX design and prototyping", "Frontend and backend development", "Testing and quality assurance", "Deployment and launch", "Post-launch support and maintenance"],
            timeline: "4-12 weeks depending on complexity",
            deliverables: ["Source code", "Documentation", "Deployment guide", "Training materials"]
        }
    }, {
        icon: f.jsx(kT, {
            size: 40
        }),
        title: "Mobile Development",
        description: "Native iOS/Android apps and cross-platform solutions using React Native and Flutter.",
        technologies: ["React Native", "Flutter", "iOS", "Android"],
        category: "development",
        price: "Starting from $8,000",
        details: {
            overview: "We develop high-performance mobile applications for iOS and Android platforms using cutting-edge technologies.",
            features: ["Native iOS and Android development", "Cross-platform solutions with React Native/Flutter", "App Store optimization and submission", "Push notifications and real-time features", "Offline functionality", "App analytics and performance monitoring"],
            process: ["Market research and competitor analysis", "Wireframing and UI/UX design", "Development and testing", "App store submission", "Launch and marketing support", "Ongoing updates and maintenance"],
            timeline: "6-16 weeks depending on features",
            deliverables: ["Mobile app", "App store listings", "Analytics setup", "User documentation"]
        }
    }, {
        icon: f.jsx(ST, {
            size: 40
        }),
        title: "Cloud Solutions",
        description: "AWS, Azure, and GCP deployment with DevOps, CI/CD pipelines, and infrastructure automation.",
        technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        category: "infrastructure",
        price: "Starting from $3,000",
        details: {
            overview: "We provide comprehensive cloud infrastructure solutions to scale your applications efficiently and securely.",
            features: ["Cloud architecture design", "Auto-scaling infrastructure", "CI/CD pipeline setup", "Container orchestration", "Monitoring and logging", "Security and compliance"],
            process: ["Infrastructure assessment", "Cloud strategy development", "Migration planning", "Implementation and testing", "Go-live and monitoring", "Optimization and support"],
            timeline: "2-8 weeks depending on complexity",
            deliverables: ["Cloud infrastructure", "CI/CD pipelines", "Monitoring setup", "Documentation"]
        }
    }, {
        icon: f.jsx(TT, {
            size: 40
        }),
        title: "Backend & APIs",
        description: "Robust backend systems, RESTful APIs, GraphQL, and database design for enterprise applications.",
        technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
        category: "development",
        price: "Starting from $4,000",
        details: {
            overview: "We build scalable backend systems and APIs that power your applications with reliability and performance.",
            features: ["RESTful and GraphQL APIs", "Database design and optimization", "Authentication and authorization", "Real-time data processing", "Third-party integrations", "API documentation and testing"],
            process: ["Requirements gathering", "Database and API design", "Development and testing", "Performance optimization", "Documentation and deployment", "Monitoring and maintenance"],
            timeline: "3-10 weeks depending on scope",
            deliverables: ["Backend system", "API documentation", "Database schema", "Testing suite"]
        }
    }, {
        icon: f.jsx(VT, {
            size: 40
        }),
        title: "UI/UX Design",
        description: "User-centered design with modern interfaces, prototyping, and design systems.",
        technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        category: "design",
        price: "Starting from $2,000",
        details: {
            overview: "We create intuitive and engaging user experiences that delight users and drive business results.",
            features: ["User research and personas", "Wireframing and prototyping", "Visual design and branding", "Design system creation", "Usability testing", "Responsive design"],
            process: ["Discovery and research", "Information architecture", "Wireframing and prototyping", "Visual design", "User testing and iteration", "Design handoff and support"],
            timeline: "2-6 weeks depending on scope",
            deliverables: ["Design files", "Prototypes", "Design system", "Style guide"]
        }
    }, {
        icon: f.jsx(G0, {
            size: 40
        }),
        title: "Custom Software",
        description: "Tailored enterprise solutions, CRM systems, and business process automation.",
        technologies: ["Custom Solutions", "Integration", "Automation", "CRM"],
        category: "enterprise",
        price: "Custom Quote",
        details: {
            overview: "We develop custom software solutions tailored to your specific business needs and processes.",
            features: ["Business process automation", "Custom CRM and ERP systems", "Legacy system modernization", "System integrations", "Workflow optimization", "Custom reporting and analytics"],
            process: ["Business analysis", "Solution architecture", "Custom development", "Integration and testing", "Training and deployment", "Ongoing support"],
            timeline: "8-24 weeks depending on complexity",
            deliverables: ["Custom software", "Integration setup", "Training materials", "Support documentation"]
        }
    }]
      , y = [{
        id: "all",
        label: "All Services"
    }, {
        id: "development",
        label: "Development"
    }, {
        id: "design",
        label: "Design"
    }, {
        id: "infrastructure",
        label: "Infrastructure"
    }, {
        id: "enterprise",
        label: "Enterprise"
    }]
      , g = i === "all" ? d : d.filter(p => p.category === i);
    return f.jsx("section", {
        id: "services",
        className: "section",
        children: f.jsxs("div", {
            className: "container",
            children: [f.jsx("h2", {
                className: "section-title",
                children: "Our Software Development Services"
            }), f.jsx("p", {
                className: "section-subtitle",
                children: "End-to-end software development services to transform your business ideas into powerful digital solutions"
            }), f.jsx("div", {
                className: "service-filters",
                children: y.map(p => f.jsx("button", {
                    className: `filter-btn ${i === p.id ? "active" : ""}`,
                    onClick: () => s(p.id),
                    children: p.label
                }, p.id))
            }), f.jsx(ft.div, {
                className: "grid grid-3",
                layout: !0,
                children: f.jsx(Gn, {
                    children: g.map( (p, S) => f.jsxs(ft.div, {
                        className: "card service-card",
                        layout: !0,
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: .8
                        },
                        whileHover: {
                            y: -10
                        },
                        transition: {
                            duration: .3
                        },
                        onHoverStart: () => r(S),
                        onHoverEnd: () => r(null),
                        children: [f.jsx("div", {
                            className: "service-icon",
                            children: p.icon
                        }), f.jsx("h3", {
                            className: "service-title",
                            children: p.title
                        }), f.jsx("p", {
                            className: "service-description",
                            children: p.description
                        }), f.jsx("div", {
                            className: "service-technologies",
                            children: p.technologies.map( (b, A) => f.jsx("span", {
                                className: "tech-tag",
                                children: b
                            }, A))
                        }), f.jsxs("div", {
                            className: "service-footer",
                            children: [f.jsx("span", {
                                className: "service-price",
                                children: p.price
                            }), f.jsxs("button", {
                                className: "btn btn-secondary btn-small",
                                onClick: () => m(p),
                                children: ["Learn More ", f.jsx(Gc, {
                                    size: 16
                                })]
                            })]
                        })]
                    }, p.title))
                })
            }), f.jsx(Gn, {
                children: c && f.jsx(ft.div, {
                    className: "modal-overlay",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: () => m(null),
                    children: f.jsxs(ft.div, {
                        className: "modal-content service-detail-modal",
                        initial: {
                            scale: .8,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: .8,
                            opacity: 0
                        },
                        onClick: p => p.stopPropagation(),
                        children: [f.jsxs("div", {
                            className: "modal-header",
                            children: [f.jsxs("div", {
                                className: "service-modal-title",
                                children: [c.icon, f.jsx("h3", {
                                    children: c.title
                                })]
                            }), f.jsx("button", {
                                className: "modal-close",
                                onClick: () => m(null),
                                children: "×"
                            })]
                        }), f.jsx("div", {
                            className: "modal-body",
                            children: f.jsxs("div", {
                                className: "service-detail-content",
                                children: [f.jsxs("div", {
                                    className: "service-overview",
                                    children: [f.jsx("h4", {
                                        children: "Overview"
                                    }), f.jsx("p", {
                                        children: c.details.overview
                                    })]
                                }), f.jsxs("div", {
                                    className: "service-features",
                                    children: [f.jsx("h4", {
                                        children: "What's Included"
                                    }), f.jsx("ul", {
                                        children: c.details.features.map( (p, S) => f.jsxs("li", {
                                            children: [f.jsx(Hn, {
                                                size: 16
                                            }), f.jsx("span", {
                                                children: p
                                            })]
                                        }, S))
                                    })]
                                }), f.jsxs("div", {
                                    className: "service-process",
                                    children: [f.jsx("h4", {
                                        children: "Our Process"
                                    }), f.jsx("ol", {
                                        children: c.details.process.map( (p, S) => f.jsx("li", {
                                            children: p
                                        }, S))
                                    })]
                                }), f.jsxs("div", {
                                    className: "service-info",
                                    children: [f.jsxs("div", {
                                        className: "info-item",
                                        children: [f.jsx("strong", {
                                            children: "Timeline:"
                                        }), " ", c.details.timeline]
                                    }), f.jsxs("div", {
                                        className: "info-item",
                                        children: [f.jsx("strong", {
                                            children: "Starting Price:"
                                        }), " ", c.price]
                                    })]
                                }), f.jsxs("div", {
                                    className: "service-deliverables",
                                    children: [f.jsx("h4", {
                                        children: "Deliverables"
                                    }), f.jsx("div", {
                                        className: "deliverables-list",
                                        children: c.details.deliverables.map( (p, S) => f.jsx("span", {
                                            className: "deliverable-tag",
                                            children: p
                                        }, S))
                                    })]
                                }), f.jsxs("div", {
                                    className: "service-actions",
                                    children: [f.jsx("button", {
                                        className: "btn btn-primary",
                                        onClick: () => {
                                            m(null),
                                            document.getElementById("contact").scrollIntoView({
                                                behavior: "smooth"
                                            })
                                        }
                                        ,
                                        children: "Get Quote"
                                    }), f.jsx("button", {
                                        className: "btn btn-secondary",
                                        onClick: () => {
                                            m(null),
                                            alert("Consultation booking feature coming soon! Please contact us directly.")
                                        }
                                        ,
                                        children: "Schedule Consultation"
                                    })]
                                })]
                            })
                        })]
                    })
                })
            })]
        })
    })
}
  , tA = () => {
    const [i,s] = L.useState(null)
      , o = [{
        icon: f.jsx(pT, {
            size: 48
        }),
        title: "Enterprise Software",
        description: "Scalable enterprise applications with advanced analytics, reporting, and business intelligence.",
        features: ["Custom Dashboards", "Real-time Analytics", "Multi-user Access", "API Integration"],
        details: {
            overview: "Transform your business operations with custom enterprise software solutions designed to streamline processes, improve efficiency, and drive growth.",
            benefits: ["Increased operational efficiency by 40-60%", "Real-time business insights and analytics", "Seamless integration with existing systems", "Scalable architecture for future growth", "Enhanced security and compliance", "Custom workflows and automation"],
            useCases: ["Customer Relationship Management (CRM)", "Enterprise Resource Planning (ERP)", "Business Intelligence Dashboards", "Workflow Management Systems", "Document Management Systems", "Supply Chain Management"],
            technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
            timeline: "12-24 weeks",
            investment: "$50,000 - $200,000+"
        }
    }, {
        icon: f.jsx(RT, {
            size: 48
        }),
        title: "SaaS Platforms",
        description: "Multi-tenant SaaS applications with subscription management and automated billing.",
        features: ["Multi-tenancy", "Subscription Billing", "User Management", "Scalable Architecture"],
        details: {
            overview: "Launch your SaaS business with a robust, scalable platform that handles everything from user management to billing automation.",
            benefits: ["Recurring revenue model implementation", "Automated billing and subscription management", "Multi-tenant architecture for cost efficiency", "Built-in analytics and reporting", "API-first architecture for integrations", "White-label customization options"],
            useCases: ["Project Management Tools", "Marketing Automation Platforms", "HR Management Systems", "Financial Planning Software", "Learning Management Systems", "Communication Platforms"],
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
            timeline: "16-28 weeks",
            investment: "$75,000 - $300,000+"
        }
    }, {
        icon: f.jsx(oy, {
            size: 48
        }),
        title: "E-commerce Solutions",
        description: "Complete e-commerce platforms with payment integration and inventory management.",
        features: ["Payment Gateway", "Inventory System", "Order Management", "Mobile Responsive"],
        details: {
            overview: "Build a powerful e-commerce platform that drives sales, manages inventory, and provides exceptional customer experiences across all devices.",
            benefits: ["Increased online sales by 200-400%", "Automated inventory and order management", "Multi-channel selling capabilities", "Advanced analytics and reporting", "Mobile-first responsive design", "SEO optimization for better visibility"],
            useCases: ["B2C Online Stores", "B2B Marketplaces", "Multi-vendor Platforms", "Subscription Commerce", "Digital Product Sales", "Omnichannel Retail"],
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
            timeline: "8-20 weeks",
            investment: "$25,000 - $150,000+"
        }
    }];
    return f.jsx("section", {
        id: "solutions",
        className: "section bg-secondary",
        children: f.jsxs("div", {
            className: "container",
            children: [f.jsx("h2", {
                className: "section-title",
                children: "Industry Solutions"
            }), f.jsx("p", {
                className: "section-subtitle",
                children: "Specialized software solutions tailored for different industries and business needs"
            }), f.jsx("div", {
                className: "grid grid-3",
                children: o.map( (r, c) => f.jsxs(ft.div, {
                    className: "card solution-card",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: c * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [f.jsx("div", {
                        className: "solution-icon",
                        children: r.icon
                    }), f.jsx("h3", {
                        className: "solution-title",
                        children: r.title
                    }), f.jsx("p", {
                        className: "solution-description",
                        children: r.description
                    }), f.jsx("ul", {
                        className: "solution-features",
                        children: r.features.map( (m, d) => f.jsxs("li", {
                            children: [f.jsx(Hn, {
                                size: 16
                            }), f.jsx("span", {
                                children: m
                            })]
                        }, d))
                    }), f.jsxs("button", {
                        className: "btn btn-primary solution-btn",
                        onClick: () => s(r),
                        children: ["Learn More ", f.jsx(q0, {
                            size: 16
                        })]
                    })]
                }, c))
            }), f.jsx(Gn, {
                children: i && f.jsx(ft.div, {
                    className: "modal-overlay",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: () => s(null),
                    children: f.jsxs(ft.div, {
                        className: "modal-content solution-detail-modal",
                        initial: {
                            scale: .8,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: .8,
                            opacity: 0
                        },
                        onClick: r => r.stopPropagation(),
                        children: [f.jsxs("div", {
                            className: "modal-header",
                            children: [f.jsxs("div", {
                                className: "solution-modal-title",
                                children: [i.icon, f.jsx("h3", {
                                    children: i.title
                                })]
                            }), f.jsx("button", {
                                className: "modal-close",
                                onClick: () => s(null),
                                children: "×"
                            })]
                        }), f.jsx("div", {
                            className: "modal-body",
                            children: f.jsxs("div", {
                                className: "solution-detail-content",
                                children: [f.jsxs("div", {
                                    className: "solution-overview",
                                    children: [f.jsx("h4", {
                                        children: "Solution Overview"
                                    }), f.jsx("p", {
                                        children: i.details.overview
                                    })]
                                }), f.jsxs("div", {
                                    className: "solution-benefits",
                                    children: [f.jsx("h4", {
                                        children: "Key Benefits"
                                    }), f.jsx("ul", {
                                        children: i.details.benefits.map( (r, c) => f.jsxs("li", {
                                            children: [f.jsx(Hn, {
                                                size: 16
                                            }), f.jsx("span", {
                                                children: r
                                            })]
                                        }, c))
                                    })]
                                }), f.jsxs("div", {
                                    className: "solution-use-cases",
                                    children: [f.jsx("h4", {
                                        children: "Use Cases"
                                    }), f.jsx("div", {
                                        className: "use-cases-grid",
                                        children: i.details.useCases.map( (r, c) => f.jsxs("div", {
                                            className: "use-case-item",
                                            children: [f.jsx(oy, {
                                                size: 16
                                            }), f.jsx("span", {
                                                children: r
                                            })]
                                        }, c))
                                    })]
                                }), f.jsxs("div", {
                                    className: "solution-tech-stack",
                                    children: [f.jsx("h4", {
                                        children: "Technology Stack"
                                    }), f.jsx("div", {
                                        className: "tech-stack-list",
                                        children: i.details.technologies.map( (r, c) => f.jsx("span", {
                                            className: "tech-tag",
                                            children: r
                                        }, c))
                                    })]
                                }), f.jsxs("div", {
                                    className: "solution-investment",
                                    children: [f.jsxs("div", {
                                        className: "investment-item",
                                        children: [f.jsx("strong", {
                                            children: "Timeline:"
                                        }), " ", i.details.timeline]
                                    }), f.jsxs("div", {
                                        className: "investment-item",
                                        children: [f.jsx("strong", {
                                            children: "Investment Range:"
                                        }), " ", i.details.investment]
                                    })]
                                }), f.jsxs("div", {
                                    className: "solution-actions",
                                    children: [f.jsx("button", {
                                        className: "btn btn-primary",
                                        onClick: () => {
                                            s(null),
                                            document.getElementById("contact").scrollIntoView({
                                                behavior: "smooth"
                                            })
                                        }
                                        ,
                                        children: "Get Custom Quote"
                                    }), f.jsx("button", {
                                        className: "btn btn-secondary",
                                        onClick: () => {
                                            s(null),
                                            document.getElementById("contact").scrollIntoView({
                                                behavior: "smooth"
                                            })
                                        }
                                        ,
                                        children: "Contact Us"
                                    })]
                                })]
                            })
                        })]
                    })
                })
            })]
        })
    })
}
  , eA = () => {
    const i = [{
        name: "Sarah Johnson",
        position: "CTO, TechCorp",
        content: "SharkTechSolutions delivered an exceptional e-commerce platform that exceeded our expectations. Their technical expertise and attention to detail is outstanding.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4&clothesColor=262e33"
    }, {
        name: "Michael Chen",
        position: "Founder, StartupXYZ",
        content: "The team at SharkTechSolutions transformed our idea into a scalable SaaS platform. Their agile approach and communication throughout the project was excellent.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=c0aede&clothesColor=3c4f5c"
    }, {
        name: "Emily Rodriguez",
        position: "Product Manager, InnovateCo",
        content: "Working with SharkTechSolutions was a game-changer for our business. They delivered a robust mobile app that our users love.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=ffd5dc&clothesColor=929598"
    }];
    return f.jsx("section", {
        className: "section bg-secondary",
        children: f.jsxs("div", {
            className: "container",
            children: [f.jsx("h2", {
                className: "section-title",
                children: "What Our Clients Say"
            }), f.jsx("p", {
                className: "section-subtitle",
                children: "Don't just take our word for it - hear from our satisfied clients"
            }), f.jsx("div", {
                className: "grid grid-3",
                children: i.map( (s, o) => f.jsxs(ft.div, {
                    className: "card testimonial-card",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: o * .1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [f.jsx("div", {
                        className: "testimonial-quote",
                        children: f.jsx(LT, {
                            size: 24
                        })
                    }), f.jsx("p", {
                        className: "testimonial-content",
                        children: s.content
                    }), f.jsx("div", {
                        className: "testimonial-rating",
                        children: [...Array(s.rating)].map( (r, c) => f.jsx(X0, {
                            size: 16,
                            fill: "currentColor"
                        }, c))
                    }), f.jsx("div", {
                        className: "testimonial-author",
                        children: f.jsxs("div", {
                            children: [f.jsx("h4", {
                                children: s.name
                            }), f.jsx("p", {
                                children: s.position
                            })]
                        })
                    })]
                }, o))
            })]
        })
    })
}
  , nA = () => {
    const i = ["5+ Years of Software Development Excellence", "200+ Successful Projects Delivered", "Agile Development Methodology", "24/7 Technical Support & Maintenance", "ISO 27001 Security Standards", "99.9% Uptime Guarantee"]
      , s = [{
        name: "Frontend",
        techs: ["React", "Vue.js", "Angular", "Next.js"]
    }, {
        name: "Backend",
        techs: ["Node.js", "Python", "Java", "PHP"]
    }, {
        name: "Mobile",
        techs: ["React Native", "Flutter", "iOS", "Android"]
    }, {
        name: "Cloud",
        techs: ["AWS", "Azure", "GCP", "Docker"]
    }, {
        name: "Database",
        techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    }, {
        name: "DevOps",
        techs: ["CI/CD", "Kubernetes", "Jenkins", "Terraform"]
    }];
    return f.jsx("section", {
        id: "about",
        className: "section",
        children: f.jsxs("div", {
            className: "container",
            children: [f.jsxs("div", {
                className: "grid grid-2 about-content",
                children: [f.jsxs(ft.div, {
                    className: "about-text",
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    children: [f.jsx("h2", {
                        className: "section-title",
                        children: "About SharkTechSolutions"
                    }), f.jsx("p", {
                        className: "about-description",
                        children: "We are a leading software development company specializing in custom web applications, mobile apps, and enterprise solutions. Our team of expert developers and designers transforms your business ideas into powerful, scalable software solutions."
                    }), f.jsx("div", {
                        className: "features-list",
                        children: i.map( (o, r) => f.jsxs("div", {
                            className: "feature-item",
                            children: [f.jsx(Hn, {
                                size: 20,
                                className: "feature-icon"
                            }), f.jsx("span", {
                                children: o
                            })]
                        }, r))
                    })]
                }), f.jsxs(ft.div, {
                    className: "about-technologies",
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    children: [f.jsx("h3", {
                        className: "tech-stack-title",
                        children: "Our Technology Stack"
                    }), f.jsx("div", {
                        className: "tech-stack",
                        children: s.map( (o, r) => f.jsxs("div", {
                            className: "tech-category",
                            children: [f.jsx("h4", {
                                children: o.name
                            }), f.jsx("div", {
                                className: "tech-list",
                                children: o.techs.map( (c, m) => f.jsx("span", {
                                    className: "tech-tag",
                                    children: c
                                }, m))
                            })]
                        }, r))
                    })]
                })]
            }), f.jsxs("div", {
                className: "about-stats",
                children: [f.jsxs("div", {
                    className: "stat-item",
                    children: [f.jsx("div", {
                        className: "stat-icon",
                        children: f.jsx(sc, {
                            size: 32
                        })
                    }), f.jsx("h3", {
                        children: "200+"
                    }), f.jsx("p", {
                        children: "Projects Completed"
                    })]
                }), f.jsxs("div", {
                    className: "stat-item",
                    children: [f.jsx("div", {
                        className: "stat-icon",
                        children: f.jsx(Q0, {
                            size: 32
                        })
                    }), f.jsx("h3", {
                        children: "50+"
                    }), f.jsx("p", {
                        children: "Happy Clients"
                    })]
                }), f.jsxs("div", {
                    className: "stat-item",
                    children: [f.jsx("div", {
                        className: "stat-icon",
                        children: f.jsx(H0, {
                            size: 32
                        })
                    }), f.jsx("h3", {
                        children: "15+"
                    }), f.jsx("p", {
                        children: "Industry Awards"
                    })]
                }), f.jsxs("div", {
                    className: "stat-item",
                    children: [f.jsx("div", {
                        className: "stat-icon",
                        children: f.jsx(k0, {
                            size: 32
                        })
                    }), f.jsx("h3", {
                        children: "99.9%"
                    }), f.jsx("p", {
                        children: "Client Satisfaction"
                    })]
                })]
            })]
        })
    })
}
  , iA = () => {
    const [i,s] = L.useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    })
      , [o,r] = L.useState({})
      , [c,m] = L.useState(!1)
      , [d,y] = L.useState(null)
      , g = ["Web Development", "Mobile Development", "Cloud Solutions", "Backend & APIs", "UI/UX Design", "Custom Software"]
      , p = () => {
        const A = {};
        return i.name.trim() ? i.name.trim().length < 2 ? A.name = "Name must be at least 2 characters" : /^[a-zA-Z\s]+$/.test(i.name.trim()) || (A.name = "Name can only contain letters and spaces") : A.name = "Name is required",
        i.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email) || (A.email = "Please enter a valid email address") : A.email = "Email is required",
        i.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(i.phone.replace(/[\s\-\(\)]/g, "")) && (A.phone = "Please enter a valid phone number"),
        i.message.trim() ? i.message.trim().length < 10 ? A.message = "Message must be at least 10 characters" : i.message.trim().length > 1e3 && (A.message = "Message must be less than 1000 characters") : A.message = "Message is required",
        r(A),
        Object.keys(A).length === 0
    }
      , S = A => {
        const {name: N, value: _} = A.target;
        s(H => ({
            ...H,
            [N]: _
        })),
        o[N] && r(H => ({
            ...H,
            [N]: ""
        }))
    }
      , b = async A => {
        if (A.preventDefault(),
        !p()) {
            const N = Object.keys(o)[0];
            if (N) {
                const _ = document.querySelector(`[name="${N}"]`);
                _ && (_.focus(),
                _.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                }))
            }
            return
        }
        m(!0);
        try {
            const N = {
                ...i,
                timestamp: new Date().toISOString(),
                source: "landing-page-contact-form",
                userAgent: navigator.userAgent,
                referrer: document.referrer || "direct"
            };
            await new Promise( (_, H) => {
                setTimeout( () => {
                    Math.random() > .9 ? H(new Error("Network error")) : _()
                }
                , 1500 + Math.random() * 1e3)
            }
            ),
            y("success"),
            s({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            }),
            setTimeout( () => y(null), 7e3),
            console.log("Form submitted successfully:", N)
        } catch (N) {
            console.error("Form submission error:", N),
            y("error"),
            setTimeout( () => y(null), 7e3)
        } finally {
            m(!1)
        }
    }
    ;
    return f.jsx("section", {
        id: "contact",
        className: "section bg-secondary",
        children: f.jsxs("div", {
            className: "container",
            children: [f.jsx("h2", {
                className: "section-title",
                children: "Get In Touch"
            }), f.jsx("p", {
                className: "section-subtitle",
                children: "Ready to start your project? Contact us today for a free consultation"
            }), f.jsxs("div", {
                className: "grid grid-2 contact-content",
                children: [f.jsxs(ft.div, {
                    className: "contact-info",
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    children: [f.jsxs("div", {
                        className: "contact-item",
                        children: [f.jsx(Xc, {
                            size: 24
                        }), f.jsxs("div", {
                            children: [f.jsx("h4", {
                                children: "Email"
                            }), f.jsx("p", {
                                children: "contact@sharktechsolutions.in"
                            })]
                        })]
                    }), f.jsxs("div", {
                        className: "contact-item",
                        children: [f.jsx(Y0, {
                            size: 24
                        }), f.jsxs("div", {
                            children: [f.jsx("h4", {
                                children: "Address"
                            }), f.jsx("p", {
                                children: " Noida, Uttar Pradesh 201301, India"
                            })]
                        })]
                    }), f.jsxs("div", {
                        className: "contact-hours",
                        children: [f.jsx("h4", {
                            children: "Business Hours"
                        }), f.jsx("p", {
                            children: "Monday - Friday: 9:00 AM - 6:00 PM"
                        })]
                    })]
                }), f.jsxs(ft.form, {
                    className: "contact-form card",
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    onSubmit: b,
                    children: [f.jsxs("div", {
                        className: "form-group",
                        children: [f.jsx("input", {
                            type: "text",
                            name: "name",
                            placeholder: "Your Name *",
                            value: i.name,
                            onChange: S,
                            className: o.name ? "error" : "",
                            required: !0
                        }), o.name && f.jsx("span", {
                            className: "error-message",
                            children: o.name
                        })]
                    }), f.jsxs("div", {
                        className: "form-group",
                        children: [f.jsx("input", {
                            type: "email",
                            name: "email",
                            placeholder: "Your Email *",
                            value: i.email,
                            onChange: S,
                            className: o.email ? "error" : "",
                            required: !0
                        }), o.email && f.jsx("span", {
                            className: "error-message",
                            children: o.email
                        })]
                    }), f.jsxs("div", {
                        className: "form-group",
                        children: [f.jsx("input", {
                            type: "tel",
                            name: "phone",
                            placeholder: "Your Phone (Optional)",
                            value: i.phone,
                            onChange: S,
                            className: o.phone ? "error" : ""
                        }), o.phone && f.jsx("span", {
                            className: "error-message",
                            children: o.phone
                        })]
                    }), f.jsx("div", {
                        className: "form-group",
                        children: f.jsxs("select", {
                            name: "service",
                            value: i.service,
                            onChange: S,
                            children: [f.jsx("option", {
                                value: "",
                                children: "Select a Service (Optional)"
                            }), g.map( (A, N) => f.jsx("option", {
                                value: A,
                                children: A
                            }, N))]
                        })
                    }), f.jsxs("div", {
                        className: "form-group",
                        children: [f.jsx("textarea", {
                            name: "message",
                            placeholder: "Your Message *",
                            rows: "5",
                            value: i.message,
                            onChange: S,
                            className: o.message ? "error" : "",
                            required: !0
                        }), o.message && f.jsx("span", {
                            className: "error-message",
                            children: o.message
                        })]
                    }), f.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        disabled: c,
                        children: c ? f.jsxs(f.Fragment, {
                            children: [f.jsx("div", {
                                className: "spinner"
                            }), "Sending..."]
                        }) : f.jsxs(f.Fragment, {
                            children: ["Send Message ", f.jsx(Gc, {
                                size: 20
                            })]
                        })
                    }), d && f.jsx(ft.div, {
                        className: `submit-status ${d}`,
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        children: d === "success" ? f.jsxs(f.Fragment, {
                            children: [f.jsx(Hn, {
                                size: 20
                            }), "Message sent successfully! We'll get back to you soon."]
                        }) : f.jsxs(f.Fragment, {
                            children: [f.jsx(ET, {
                                size: 20
                            }), "Something went wrong. Please try again."]
                        })
                    })]
                })]
            })]
        })
    })
}
  , aA = ({isOpen: i, onClose: s}) => i ? f.jsx(Gn, {
    children: f.jsx(ft.div, {
        className: "modal-overlay",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: s,
        children: f.jsxs(ft.div, {
            className: "modal-content terms-modal",
            initial: {
                scale: .8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: .8,
                opacity: 0
            },
            onClick: o => o.stopPropagation(),
            children: [f.jsxs("div", {
                className: "modal-header",
                children: [f.jsx("h3", {
                    children: "Terms of Service"
                }), f.jsx("button", {
                    className: "modal-close",
                    onClick: s,
                    children: "×"
                })]
            }), f.jsx("div", {
                className: "modal-body",
                children: f.jsxs("div", {
                    className: "terms-content",
                    children: [f.jsxs("p", {
                        children: [f.jsx("strong", {
                            children: "Last updated:"
                        }), " April 2025"]
                    }), f.jsx("h4", {
                        children: "1. Acceptance of Terms"
                    }), f.jsx("p", {
                        children: "By accessing and using SharkTechSolutions services, you accept and agree to be bound by the terms and provision of this agreement."
                    }), f.jsx("h4", {
                        children: "2. Services Description"
                    }), f.jsx("p", {
                        children: "SharkTechSolutions provides custom software development services including:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Web application development"
                        }), f.jsx("li", {
                            children: "Mobile application development"
                        }), f.jsx("li", {
                            children: "UI/UX design services"
                        }), f.jsx("li", {
                            children: "Cloud solutions and deployment"
                        }), f.jsx("li", {
                            children: "Custom software solutions"
                        }), f.jsx("li", {
                            children: "Technical consulting"
                        })]
                    }), f.jsx("h4", {
                        children: "3. Project Terms"
                    }), f.jsx("p", {
                        children: "All projects are subject to individual contracts that will specify:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Project scope and deliverables"
                        }), f.jsx("li", {
                            children: "Timeline and milestones"
                        }), f.jsx("li", {
                            children: "Payment terms and schedule"
                        }), f.jsx("li", {
                            children: "Intellectual property rights"
                        }), f.jsx("li", {
                            children: "Support and maintenance terms"
                        })]
                    }), f.jsx("h4", {
                        children: "4. Payment Terms"
                    }), f.jsx("p", {
                        children: "Payment terms will be specified in individual project contracts. Generally:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Projects require an initial deposit before work begins"
                        }), f.jsx("li", {
                            children: "Payments are due according to agreed milestones"
                        }), f.jsx("li", {
                            children: "Late payments may incur additional fees"
                        }), f.jsx("li", {
                            children: "All prices are in USD unless otherwise specified"
                        })]
                    }), f.jsx("h4", {
                        children: "5. Intellectual Property"
                    }), f.jsx("p", {
                        children: "Upon full payment, clients receive full ownership of custom-developed code and designs, excluding any third-party components or our proprietary tools and frameworks."
                    }), f.jsx("h4", {
                        children: "6. Confidentiality"
                    }), f.jsx("p", {
                        children: "We maintain strict confidentiality of all client information and project details. Non-disclosure agreements are available upon request."
                    }), f.jsx("h4", {
                        children: "7. Limitation of Liability"
                    }), f.jsx("p", {
                        children: "Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages."
                    }), f.jsx("h4", {
                        children: "8. Support and Maintenance"
                    }), f.jsx("p", {
                        children: "Post-launch support terms are defined in individual contracts. We offer various support packages for ongoing maintenance and updates."
                    }), f.jsx("h4", {
                        children: "9. Termination"
                    }), f.jsx("p", {
                        children: "Either party may terminate services with written notice. Termination terms and any applicable fees will be specified in project contracts."
                    }), f.jsx("h4", {
                        children: "10. Contact Information"
                    }), f.jsx("p", {
                        children: "For questions about these terms, please contact us at contact@sharktechsolutions.in"
                    })]
                })
            })]
        })
    })
}) : null
  , sA = ({isOpen: i, onClose: s}) => i ? f.jsx(Gn, {
    children: f.jsx(ft.div, {
        className: "modal-overlay",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: s,
        children: f.jsxs(ft.div, {
            className: "modal-content privacy-modal",
            initial: {
                scale: .8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: .8,
                opacity: 0
            },
            onClick: o => o.stopPropagation(),
            children: [f.jsxs("div", {
                className: "modal-header",
                children: [f.jsx("h3", {
                    children: "Privacy Policy"
                }), f.jsx("button", {
                    className: "modal-close",
                    onClick: s,
                    children: "×"
                })]
            }), f.jsx("div", {
                className: "modal-body",
                children: f.jsxs("div", {
                    className: "privacy-content",
                    children: [f.jsxs("p", {
                        children: [f.jsx("strong", {
                            children: "Last updated:"
                        }), " April 2025"]
                    }), f.jsx("h4", {
                        children: "1. Information We Collect"
                    }), f.jsx("p", {
                        children: "We collect information you provide directly to us, such as:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Contact information (name, email, phone number)"
                        }), f.jsx("li", {
                            children: "Project requirements and specifications"
                        }), f.jsx("li", {
                            children: "Communication preferences"
                        }), f.jsx("li", {
                            children: "Payment and billing information"
                        })]
                    }), f.jsx("h4", {
                        children: "2. How We Use Your Information"
                    }), f.jsx("p", {
                        children: "We use the information we collect to:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Provide and deliver our services"
                        }), f.jsx("li", {
                            children: "Communicate with you about projects"
                        }), f.jsx("li", {
                            children: "Process payments and billing"
                        }), f.jsx("li", {
                            children: "Send newsletters and updates (with your consent)"
                        }), f.jsx("li", {
                            children: "Improve our services and website"
                        })]
                    }), f.jsx("h4", {
                        children: "3. Information Sharing"
                    }), f.jsx("p", {
                        children: "We do not sell, trade, or otherwise transfer your personal information to third parties except:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "With your explicit consent"
                        }), f.jsx("li", {
                            children: "To trusted service providers who assist in our operations"
                        }), f.jsx("li", {
                            children: "When required by law or to protect our rights"
                        })]
                    }), f.jsx("h4", {
                        children: "4. Data Security"
                    }), f.jsx("p", {
                        children: "We implement appropriate security measures to protect your personal information:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Encrypted data transmission (SSL/TLS)"
                        }), f.jsx("li", {
                            children: "Secure data storage and access controls"
                        }), f.jsx("li", {
                            children: "Regular security audits and updates"
                        }), f.jsx("li", {
                            children: "Employee training on data protection"
                        })]
                    }), f.jsx("h4", {
                        children: "5. Cookies and Tracking"
                    }), f.jsx("p", {
                        children: "Our website may use cookies to:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Remember your preferences"
                        }), f.jsx("li", {
                            children: "Analyze website traffic and usage"
                        }), f.jsx("li", {
                            children: "Improve user experience"
                        })]
                    }), f.jsx("p", {
                        children: "You can disable cookies in your browser settings."
                    }), f.jsx("h4", {
                        children: "6. Data Retention"
                    }), f.jsx("p", {
                        children: "We retain your information for as long as necessary to provide services and comply with legal obligations. Project-related data is typically retained for 7 years."
                    }), f.jsx("h4", {
                        children: "7. Your Rights"
                    }), f.jsx("p", {
                        children: "You have the right to:"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: "Access your personal information"
                        }), f.jsx("li", {
                            children: "Correct inaccurate information"
                        }), f.jsx("li", {
                            children: "Request deletion of your data"
                        }), f.jsx("li", {
                            children: "Opt-out of marketing communications"
                        }), f.jsx("li", {
                            children: "Data portability (where applicable)"
                        })]
                    }), f.jsx("h4", {
                        children: "8. Third-Party Services"
                    }), f.jsx("p", {
                        children: "Our website may contain links to third-party services. We are not responsible for their privacy practices."
                    }), f.jsx("h4", {
                        children: "9. Children's Privacy"
                    }), f.jsx("p", {
                        children: "Our services are not intended for children under 13. We do not knowingly collect personal information from children."
                    }), f.jsx("h4", {
                        children: "10. Changes to This Policy"
                    }), f.jsx("p", {
                        children: "We may update this privacy policy periodically. We will notify you of any material changes via email or website notice."
                    }), f.jsx("h4", {
                        children: "11. Contact Us"
                    }), f.jsx("p", {
                        children: "For privacy-related questions or requests, please contact us at contact@sharktechsolutions.in"
                    })]
                })
            })]
        })
    })
}) : null
  , lA = () => {
    const [i,s] = L.useState("")
      , [o,r] = L.useState(null)
      , [c,m] = L.useState(!1)
      , [d,y] = L.useState(!1)
      , g = async S => {
        if (S.preventDefault(),
        !i.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)) {
            r("error"),
            setTimeout( () => r(null), 3e3);
            return
        }
        r("loading");
        try {
            await new Promise(b => setTimeout(b, 1e3)),
            r("success"),
            s(""),
            setTimeout( () => r(null), 5e3)
        } catch {
            r("error"),
            setTimeout( () => r(null), 3e3)
        }
    }
      , p = S => {
        const b = document.getElementById(S);
        b && b.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return f.jsx("footer", {
        className: "footer",
        children: f.jsxs("div", {
            className: "container",
            children: [f.jsxs("div", {
                className: "footer-content",
                children: [f.jsxs("div", {
                    className: "footer-section",
                    children: [f.jsx("h3", {
                        children: "SharkTechSolutions"
                    }), f.jsx("p", {
                        children: "Creating amazing digital experiences for businesses worldwide with innovative web solutions."
                    }), f.jsxs("div", {
                        className: "newsletter-signup",
                        children: [f.jsx("h4", {
                            children: "Stay Updated"
                        }), f.jsxs("form", {
                            onSubmit: g,
                            className: "newsletter-form",
                            children: [f.jsx("input", {
                                type: "email",
                                placeholder: "Enter your email",
                                value: i,
                                onChange: S => s(S.target.value),
                                disabled: o === "loading"
                            }), f.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary btn-small",
                                disabled: o === "loading",
                                children: o === "loading" ? "Subscribing..." : "Subscribe"
                            })]
                        }), o === "success" && f.jsx("p", {
                            className: "newsletter-message success",
                            children: "Thanks for subscribing!"
                        }), o === "error" && f.jsx("p", {
                            className: "newsletter-message error",
                            children: "Please enter a valid email address."
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "footer-section",
                    children: [f.jsx("h4", {
                        children: "Services"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => p("services"),
                                children: "Web Development"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => p("services"),
                                children: "Mobile Apps"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => p("services"),
                                children: "UI/UX Design"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => p("services"),
                                children: "Cloud Solutions"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => p("services"),
                                children: "Custom Software"
                            })
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "footer-section",
                    children: [f.jsx("h4", {
                        children: "Company"
                    }), f.jsxs("ul", {
                        children: [f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => p("about"),
                                children: "About Us"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => p("contact"),
                                children: "Contact"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => y(!0),
                                children: "Privacy Policy"
                            })
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "footer-section",
                    children: [f.jsx("h4", {
                        children: "Contact Info"
                    }), f.jsxs("div", {
                        className: "footer-contact",
                        children: [f.jsxs("p", {
                            children: [f.jsx(Xc, {
                                size: 16
                            }), " contact@sharktechsolutions.in"]
                        }), f.jsxs("p", {
                            children: [f.jsx(Y0, {
                                size: 16
                            }), "B-54, B-Block, sector 63A, Noida, UP, 201301, India"]
                        })]
                    })]
                })]
            }), f.jsxs("div", {
                className: "footer-bottom",
                children: [f.jsx("p", {
                    children: "© 2025 SharkTechSolutions. All rights reserved."
                }), f.jsxs("div", {
                    className: "footer-links",
                    children: [f.jsx("button", {
                        onClick: () => m(!0),
                        children: "Terms of Service"
                    }), f.jsx("button", {
                        onClick: () => y(!0),
                        children: "Privacy Policy"
                    }), f.jsx("button", {
                        onClick: () => p("contact"),
                        children: "Support"
                    })]
                })]
            }), f.jsx(aA, {
                isOpen: c,
                onClose: () => m(!1)
            }), f.jsx(sA, {
                isOpen: d,
                onClose: () => y(!1)
            })]
        })
    })
}
  , oA = () => {
    const [i,s] = L.useState(!1)
      , [o,r] = L.useState(!1);
    L.useEffect( () => {
        const d = () => {
            r(window.scrollY > 300)
        }
        ;
        return window.addEventListener("scroll", d),
        () => window.removeEventListener("scroll", d)
    }
    , []);
    const c = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
      , m = [{
        icon: f.jsx(Xc, {
            size: 20
        }),
        label: "Email Us",
        action: () => window.open("mailto:contact@sharktechsolutions.in")
    }, {
        icon: f.jsx(jT, {
            size: 20
        }),
        label: "Get Brochure",
        action: () => {
            const d = `SharkTechSolutions`
              , y = document.createElement("a");
            y.href = "data:text/plain;charset=utf-8," + encodeURIComponent(d),
            y.download = "wecodes-services-brochure.txt",
            y.click()
        }
    }];
    return f.jsxs("div", {
        className: "floating-actions",
        children: [f.jsx(Gn, {
            children: i && f.jsx(ft.div, {
                className: "quick-actions",
                initial: {
                    opacity: 0,
                    scale: .8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .8
                },
                transition: {
                    duration: .2
                },
                children: m.map( (d, y) => f.jsxs(ft.button, {
                    className: "quick-action-btn",
                    onClick: () => {
                        d.action(),
                        s(!1)
                    }
                    ,
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: y * .1
                    },
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .9
                    },
                    children: [d.icon, f.jsx("span", {
                        children: d.label
                    })]
                }, y))
            })
        }), f.jsx(ft.button, {
            className: "fab-main",
            onClick: () => s(!i),
            whileHover: {
                scale: 1.1
            },
            whileTap: {
                scale: .9
            },
            animate: {
                rotate: i ? 45 : 0
            },
            children: f.jsx(G0, {
                size: 24
            })
        }), f.jsx(Gn, {
            children: o && f.jsx(ft.button, {
                className: "scroll-top-btn",
                onClick: c,
                initial: {
                    opacity: 0,
                    scale: .8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .8
                },
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: .9
                },
                children: f.jsx(q0, {
                    size: 20,
                    style: {
                        transform: "rotate(-90deg)"
                    }
                })
            })
        })]
    })
}
;
function rA() {
    return f.jsxs("div", {
        className: "App",
        children: [f.jsx(WT, {}), f.jsx($T, {}), f.jsx(IT, {}), f.jsx(tA, {}), f.jsx(nA, {}), f.jsx(eA, {}), f.jsx(iA, {}), f.jsx(lA, {}), f.jsx(oA, {})]
    })
}
A1.createRoot(document.getElementById("root")).render(f.jsx(L.StrictMode, {
    children: f.jsx(rA, {})
}));

