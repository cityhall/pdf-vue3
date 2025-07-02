var vr = Object.defineProperty;
var br = (R, c, e) => c in R ? vr(R, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : R[c] = e;
var Ie = (R, c, e) => (br(R, typeof c != "symbol" ? c + "" : c, e), e), yt = (R, c, e) => {
  if (!c.has(R))
    throw TypeError("Cannot " + e);
};
var T = (R, c, e) => (yt(R, c, "read from private field"), e ? e.call(R) : c.get(R)), te = (R, c, e) => {
  if (c.has(R))
    throw TypeError("Cannot add the same private member more than once");
  c instanceof WeakSet ? c.add(R) : c.set(R, e);
}, ue = (R, c, e, t) => (yt(R, c, "write to private field"), t ? t.call(R, e) : c.set(R, e), e), ut = (R, c, e, t) => ({
  set _(a) {
    ue(R, c, a, e);
  },
  get _() {
    return T(R, c, t);
  }
}), ne = (R, c, e) => (yt(R, c, "access private method"), e);
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R;
}
function getAugmentedNamespace(R) {
  if (R.__esModule)
    return R;
  var c = R.default;
  if (typeof c == "function") {
    var e = function t() {
      if (this instanceof t) {
        var a = [null];
        a.push.apply(a, arguments);
        var b = Function.bind.apply(c, a);
        return new b();
      }
      return c.apply(this, arguments);
    };
    e.prototype = c.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(R).forEach(function(t) {
    var a = Object.getOwnPropertyDescriptor(R, t);
    Object.defineProperty(e, t, a.get ? a : {
      enumerable: !0,
      get: function() {
        return R[t];
      }
    });
  }), e;
}
function commonjsRequire(R) {
  throw new Error('Could not dynamically require "' + R + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf_min$2 = { exports: {} };
const __viteBrowserExternal = new Proxy({}, {
  get(R, c) {
    throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${c}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
}), __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$6 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var path2dPolyfill_dev = {}, hasRequiredPath2dPolyfill_dev;
function requirePath2dPolyfill_dev() {
  return hasRequiredPath2dPolyfill_dev || (hasRequiredPath2dPolyfill_dev = 1, function() {
    function R(d, y, h) {
      if (h || arguments.length === 2)
        for (var P = 0, p = y.length, i; P < p; P++)
          (i || !(P in y)) && (i || (i = Array.prototype.slice.call(y, 0, P)), i[P] = y[P]);
      return d.concat(i || Array.prototype.slice.call(y));
    }
    var c = {
      a: 7,
      c: 6,
      h: 1,
      l: 2,
      m: 2,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      z: 0
    }, e = /([astvzqmhlc])([^astvzqmhlc]*)/gi, t = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
    function a(d) {
      var y = d.match(t);
      return y ? y.map(Number) : [];
    }
    function b(d) {
      var y = [], h = String(d).trim();
      return h[0] !== "M" && h[0] !== "m" || h.replace(e, function(P, p, i) {
        var m = a(i), n = p.toLowerCase(), s = p;
        if (n === "m" && m.length > 2 && (y.push(R([s], m.splice(0, 2), !0)), n = "l", s = s === "m" ? "l" : "L"), m.length < c[n])
          return "";
        for (y.push(R([s], m.splice(0, c[n]), !0)); m.length >= c[n] && m.length && c[n]; )
          y.push(R([s], m.splice(0, c[n]), !0));
        return "";
      }), y;
    }
    function x(d, y) {
      var h = d.x * Math.cos(y) - d.y * Math.sin(y), P = d.y * Math.cos(y) + d.x * Math.sin(y);
      d.x = h, d.y = P;
    }
    function O(d, y, h) {
      d.x += y, d.y += h;
    }
    function f(d, y) {
      d.x *= y, d.y *= y;
    }
    var l = (
      /** @class */
      function() {
        function d(y) {
          var h;
          this.commands = [], y && y instanceof d ? (h = this.commands).push.apply(h, y.commands) : y && (this.commands = b(y));
        }
        return d.prototype.addPath = function(y) {
          var h;
          y && y instanceof d && (h = this.commands).push.apply(h, y.commands);
        }, d.prototype.moveTo = function(y, h) {
          this.commands.push(["M", y, h]);
        }, d.prototype.lineTo = function(y, h) {
          this.commands.push(["L", y, h]);
        }, d.prototype.arc = function(y, h, P, p, i, m) {
          this.commands.push(["AC", y, h, P, p, i, !!m]);
        }, d.prototype.arcTo = function(y, h, P, p, i) {
          this.commands.push(["AT", y, h, P, p, i]);
        }, d.prototype.ellipse = function(y, h, P, p, i, m, n, s) {
          this.commands.push(["E", y, h, P, p, i, m, n, !!s]);
        }, d.prototype.closePath = function() {
          this.commands.push(["Z"]);
        }, d.prototype.bezierCurveTo = function(y, h, P, p, i, m) {
          this.commands.push(["C", y, h, P, p, i, m]);
        }, d.prototype.quadraticCurveTo = function(y, h, P, p) {
          this.commands.push(["Q", y, h, P, p]);
        }, d.prototype.rect = function(y, h, P, p) {
          this.commands.push(["R", y, h, P, p]);
        }, d.prototype.roundRect = function(y, h, P, p, i) {
          typeof i > "u" ? this.commands.push(["RR", y, h, P, p, 0]) : this.commands.push(["RR", y, h, P, p, i]);
        }, d;
      }()
    );
    function v(d, y) {
      var h = 0, P = 0, p, i, m, n, s, r, u, C, I, o, D, $, W, K, z, _, g, w, S, M, q, L = null, H = null, V = null, G = null, X = null, J = null;
      d.beginPath();
      for (var Q = 0; Q < y.length; ++Q) {
        w = y[Q][0], w !== "S" && w !== "s" && w !== "C" && w !== "c" && (L = null, H = null), w !== "T" && w !== "t" && w !== "Q" && w !== "q" && (V = null, G = null);
        var U = void 0;
        switch (w) {
          case "m":
          case "M":
            U = y[Q], w === "m" ? (h += U[1], P += U[2]) : (h = U[1], P = U[2]), (w === "M" || !X) && (X = { x: h, y: P }), d.moveTo(h, P);
            break;
          case "l":
            U = y[Q], h += U[1], P += U[2], d.lineTo(h, P);
            break;
          case "L":
            U = y[Q], h = U[1], P = U[2], d.lineTo(h, P);
            break;
          case "H":
            U = y[Q], h = U[1], d.lineTo(h, P);
            break;
          case "h":
            U = y[Q], h += U[1], d.lineTo(h, P);
            break;
          case "V":
            U = y[Q], P = U[1], d.lineTo(h, P);
            break;
          case "v":
            U = y[Q], P += U[1], d.lineTo(h, P);
            break;
          case "a":
          case "A":
            if (U = y[Q], J === null)
              throw new Error("This should never happen");
            w === "a" ? (h += U[6], P += U[7]) : (h = U[6], P = U[7]), K = U[1], z = U[2], u = U[3] * Math.PI / 180, m = !!U[4], n = !!U[5], s = { x: h, y: P }, r = {
              x: (J.x - s.x) / 2,
              y: (J.y - s.y) / 2
            }, x(r, -u), C = r.x * r.x / (K * K) + r.y * r.y / (z * z), C > 1 && (C = Math.sqrt(C), K *= C, z *= C), S = {
              x: K * r.y / z,
              y: -(z * r.x) / K
            }, I = K * K * z * z, o = K * K * r.y * r.y + z * z * r.x * r.x, n !== m ? f(S, Math.sqrt((I - o) / o) || 0) : f(S, -Math.sqrt((I - o) / o) || 0), i = Math.atan2((r.y - S.y) / z, (r.x - S.x) / K), p = Math.atan2(-(r.y + S.y) / z, -(r.x + S.x) / K), x(S, u), O(S, (s.x + J.x) / 2, (s.y + J.y) / 2), d.save(), d.translate(S.x, S.y), d.rotate(u), d.scale(K, z), d.arc(0, 0, 1, i, p, !n), d.restore();
            break;
          case "C":
            U = y[Q], L = U[3], H = U[4], h = U[5], P = U[6], d.bezierCurveTo(U[1], U[2], L, H, h, P);
            break;
          case "c":
            U = y[Q], d.bezierCurveTo(U[1] + h, U[2] + P, U[3] + h, U[4] + P, U[5] + h, U[6] + P), L = U[3] + h, H = U[4] + P, h += U[5], P += U[6];
            break;
          case "S":
            U = y[Q], (L === null || H === null) && (L = h, H = P), d.bezierCurveTo(2 * h - L, 2 * P - H, U[1], U[2], U[3], U[4]), L = U[1], H = U[2], h = U[3], P = U[4];
            break;
          case "s":
            U = y[Q], (L === null || H === null) && (L = h, H = P), d.bezierCurveTo(2 * h - L, 2 * P - H, U[1] + h, U[2] + P, U[3] + h, U[4] + P), L = U[1] + h, H = U[2] + P, h += U[3], P += U[4];
            break;
          case "Q":
            U = y[Q], V = U[1], G = U[2], h = U[3], P = U[4], d.quadraticCurveTo(V, G, h, P);
            break;
          case "q":
            U = y[Q], V = U[1] + h, G = U[2] + P, h += U[3], P += U[4], d.quadraticCurveTo(V, G, h, P);
            break;
          case "T":
            U = y[Q], (V === null || G === null) && (V = h, G = P), V = 2 * h - V, G = 2 * P - G, h = U[1], P = U[2], d.quadraticCurveTo(V, G, h, P);
            break;
          case "t":
            U = y[Q], (V === null || G === null) && (V = h, G = P), V = 2 * h - V, G = 2 * P - G, h += U[1], P += U[2], d.quadraticCurveTo(V, G, h, P);
            break;
          case "z":
          case "Z":
            X && (h = X.x, P = X.y), X = null, d.closePath();
            break;
          case "AC":
            U = y[Q], h = U[1], P = U[2], W = U[3], i = U[4], p = U[5], M = U[6], d.arc(h, P, W, i, p, M);
            break;
          case "AT":
            U = y[Q], D = U[1], $ = U[2], h = U[3], P = U[4], W = U[5], d.arcTo(D, $, h, P, W);
            break;
          case "E":
            U = y[Q], h = U[1], P = U[2], K = U[3], z = U[4], u = U[5], i = U[6], p = U[7], M = U[8], d.save(), d.translate(h, P), d.rotate(u), d.scale(K, z), d.arc(0, 0, 1, i, p, M), d.restore();
            break;
          case "R":
            U = y[Q], h = U[1], P = U[2], _ = U[3], g = U[4], X = { x: h, y: P }, d.rect(h, P, _, g);
            break;
          case "RR":
            U = y[Q], h = U[1], P = U[2], _ = U[3], g = U[4], q = U[5], X = { x: h, y: P }, d.roundRect(h, P, _, g, q);
            break;
        }
        J ? (J.x = h, J.y = P) : J = { x: h, y: P };
      }
    }
    function A(d) {
      if (!(!d || !d.CanvasRenderingContext2D || d.Path2D)) {
        var y = d.CanvasRenderingContext2D, h = y.prototype.fill, P = y.prototype.stroke, p = y.prototype.isPointInPath;
        y.prototype.fill = function() {
          for (var m = [], n = 0; n < arguments.length; n++)
            m[n] = arguments[n];
          if (m[0] instanceof l) {
            var s = m[0], r = m[1] || "nonzero";
            v(this, s.commands), h.apply(this, [r]);
          } else {
            var r = m[0] || "nonzero";
            return h.apply(this, [r]);
          }
        }, y.prototype.stroke = function(m) {
          m && v(this, m.commands), P.apply(this);
        }, y.prototype.isPointInPath = function() {
          for (var m = [], n = 0; n < arguments.length; n++)
            m[n] = arguments[n];
          if (m[0] instanceof l) {
            var s = m[0], r = m[1], u = m[2], C = m[3] || "nonzero";
            return v(this, s.commands), p.apply(this, [r, u, C]);
          } else
            return p.apply(this, m);
        }, d.Path2D = l;
      }
    }
    function k(d, y, h, P, p) {
      var i = this;
      if (p === void 0 && (p = 0), typeof p == "number" && (p = [p]), Array.isArray(p)) {
        if (p.length === 0 || p.length > 4)
          throw new RangeError("Failed to execute 'roundRect' on '".concat(this.constructor.name, "': ").concat(p.length, " radii provided. Between one and four radii are necessary."));
        p.forEach(function(C) {
          if (C < 0)
            throw new RangeError("Failed to execute 'roundRect' on '".concat(i.constructor.name, "': Radius value ").concat(C, " is negative."));
        });
      } else
        return;
      if (p.length === 1 && p[0] === 0)
        return this.rect(d, y, h, P);
      var m = Math.min(h, P) / 2, n, s, r, u = n = s = r = Math.min(m, p[0]);
      p.length === 2 && (n = r = Math.min(m, p[1])), p.length === 3 && (n = r = Math.min(m, p[1]), s = Math.min(m, p[2])), p.length === 4 && (n = Math.min(m, p[1]), s = Math.min(m, p[2]), r = Math.min(m, p[3])), this.moveTo(d, y + P - r), this.arcTo(d, y, d + u, y, u), this.arcTo(d + h, y, d + h, y + n, n), this.arcTo(d + h, y + P, d + h - s, y + P, s), this.arcTo(d, y + P, d, y + P - r, r), this.moveTo(d, y);
    }
    function j(d) {
      if (!(!d || !d.CanvasRenderingContext2D)) {
        var y = d.CanvasRenderingContext2D, h = d.Path2D;
        y && !y.prototype.roundRect && (y.prototype.roundRect = k), h && !h.prototype.roundRect && (h.prototype.roundRect = k);
      }
    }
    A(window), j(window);
  }()), path2dPolyfill_dev;
}
(function(module, exports) {
  (function(c, e) {
    module.exports = e();
  })(globalThis, () => (() => {
    var __webpack_modules__ = [, (R, c, e) => {
      var h, P;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.VerbosityLevel = c.Util = c.UnknownErrorException = c.UnexpectedResponseException = c.TextRenderingMode = c.RenderingIntentFlag = c.PromiseCapability = c.PermissionFlag = c.PasswordResponses = c.PasswordException = c.PageActionEventType = c.OPS = c.MissingPDFException = c.MAX_IMAGE_SIZE_TO_CACHE = c.LINE_FACTOR = c.LINE_DESCENT_FACTOR = c.InvalidPDFException = c.ImageKind = c.IDENTITY_MATRIX = c.FormatError = c.FeatureTest = c.FONT_IDENTITY_MATRIX = c.DocumentActionEventType = c.CMapCompressionType = c.BaseException = c.BASELINE_FACTOR = c.AnnotationType = c.AnnotationStateModelType = c.AnnotationReviewState = c.AnnotationReplyType = c.AnnotationMode = c.AnnotationMarkedState = c.AnnotationFlag = c.AnnotationFieldFlag = c.AnnotationEditorType = c.AnnotationEditorPrefix = c.AnnotationEditorParamsType = c.AnnotationBorderStyleType = c.AnnotationActionEventType = c.AbortException = void 0, c.assert = function(i, m) {
        i || x(m);
      }, c.bytesToString = function(i) {
        typeof i == "object" && (i == null ? void 0 : i.length) !== void 0 || x("Invalid argument for bytesToString");
        const m = i.length, n = 8192;
        if (m < n)
          return String.fromCharCode.apply(null, i);
        const s = [];
        for (let r = 0; r < m; r += n) {
          const u = Math.min(r + n, m), C = i.subarray(r, u);
          s.push(String.fromCharCode.apply(null, C));
        }
        return s.join("");
      }, c.createValidAbsoluteUrl = function(i) {
        let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!i)
          return null;
        try {
          if (n && typeof i == "string") {
            if (n.addDefaultProtocol && i.startsWith("www.")) {
              const r = i.match(/\./g);
              (r == null ? void 0 : r.length) >= 2 && (i = `http://${i}`);
            }
            if (n.tryConvertEncoding)
              try {
                i = j(i);
              } catch {
              }
          }
          const s = m ? new URL(i, m) : new URL(i);
          if (function(u) {
            switch (u == null ? void 0 : u.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "mailto:":
              case "tel:":
                return !0;
              default:
                return !1;
            }
          }(s))
            return s;
        } catch {
        }
        return null;
      }, c.getModificationDate = function() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
        return [i.getUTCFullYear().toString(), (i.getUTCMonth() + 1).toString().padStart(2, "0"), i.getUTCDate().toString().padStart(2, "0"), i.getUTCHours().toString().padStart(2, "0"), i.getUTCMinutes().toString().padStart(2, "0"), i.getUTCSeconds().toString().padStart(2, "0")].join("");
      }, c.getVerbosityLevel = function() {
        return a;
      }, c.info = function(i) {
        a >= t.INFOS && console.log(`Info: ${i}`);
      }, c.isArrayBuffer = function(i) {
        return typeof i == "object" && (i == null ? void 0 : i.byteLength) !== void 0;
      }, c.isArrayEqual = function(i, m) {
        if (i.length !== m.length)
          return !1;
        for (let n = 0, s = i.length; n < s; n++)
          if (i[n] !== m[n])
            return !1;
        return !0;
      }, c.normalizeUnicode = function(i) {
        return d || (d = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, y = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), i.replaceAll(d, (m, n, s) => n ? n.normalize("NFKC") : y.get(s));
      }, c.objectFromMap = function(i) {
        const m = /* @__PURE__ */ Object.create(null);
        for (const [n, s] of i)
          m[n] = s;
        return m;
      }, c.objectSize = function(i) {
        return Object.keys(i).length;
      }, c.setVerbosityLevel = function(i) {
        Number.isInteger(i) && (a = i);
      }, c.shadow = O, c.string32 = function(i) {
        return String.fromCharCode(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i);
      }, c.stringToBytes = l, c.stringToPDFString = function(i) {
        if (i[0] >= "ï") {
          let n;
          if (i[0] === "þ" && i[1] === "ÿ" ? n = "utf-16be" : i[0] === "ÿ" && i[1] === "þ" ? n = "utf-16le" : i[0] === "ï" && i[1] === "»" && i[2] === "¿" && (n = "utf-8"), n)
            try {
              const s = new TextDecoder(n, { fatal: !0 }), r = l(i);
              return s.decode(r);
            } catch (s) {
              b(`stringToPDFString: "${s}".`);
            }
        }
        const m = [];
        for (let n = 0, s = i.length; n < s; n++) {
          const r = k[i.charCodeAt(n)];
          m.push(r ? String.fromCharCode(r) : i.charAt(n));
        }
        return m.join("");
      }, c.stringToUTF8String = j, c.unreachable = x, c.utf8StringToString = function(i) {
        return unescape(encodeURIComponent(i));
      }, c.warn = b, globalThis._pdfjsCompatibilityChecked || (globalThis._pdfjsCompatibilityChecked = !0, e(2)), c.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0], c.FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0], c.MAX_IMAGE_SIZE_TO_CACHE = 1e7, c.LINE_FACTOR = 1.35, c.LINE_DESCENT_FACTOR = 0.35, c.BASELINE_FACTOR = 0.25925925925925924, c.RenderingIntentFlag = { ANY: 1, DISPLAY: 2, PRINT: 4, SAVE: 8, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, OPLIST: 256 }, c.AnnotationMode = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, c.AnnotationEditorPrefix = "pdfjs_internal_editor_", c.AnnotationEditorType = { DISABLE: -1, NONE: 0, FREETEXT: 3, INK: 15 }, c.AnnotationEditorParamsType = { FREETEXT_SIZE: 1, FREETEXT_COLOR: 2, FREETEXT_OPACITY: 3, INK_COLOR: 11, INK_THICKNESS: 12, INK_OPACITY: 13 }, c.PermissionFlag = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, c.TextRenderingMode = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_ADD_TO_PATH: 4, STROKE_ADD_TO_PATH: 5, FILL_STROKE_ADD_TO_PATH: 6, ADD_TO_PATH: 7, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 }, c.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, c.AnnotationType = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, c.AnnotationStateModelType = { MARKED: "Marked", REVIEW: "Review" }, c.AnnotationMarkedState = { MARKED: "Marked", UNMARKED: "Unmarked" }, c.AnnotationReviewState = { ACCEPTED: "Accepted", REJECTED: "Rejected", CANCELLED: "Cancelled", COMPLETED: "Completed", NONE: "None" }, c.AnnotationReplyType = { GROUP: "Group", REPLY: "R" }, c.AnnotationFlag = { INVISIBLE: 1, HIDDEN: 2, PRINT: 4, NOZOOM: 8, NOROTATE: 16, NOVIEW: 32, READONLY: 64, LOCKED: 128, TOGGLENOVIEW: 256, LOCKEDCONTENTS: 512 }, c.AnnotationFieldFlag = { READONLY: 1, REQUIRED: 2, NOEXPORT: 4, MULTILINE: 4096, PASSWORD: 8192, NOTOGGLETOOFF: 16384, RADIO: 32768, PUSHBUTTON: 65536, COMBO: 131072, EDIT: 262144, SORT: 524288, FILESELECT: 1048576, MULTISELECT: 2097152, DONOTSPELLCHECK: 4194304, DONOTSCROLL: 8388608, COMB: 16777216, RICHTEXT: 33554432, RADIOSINUNISON: 33554432, COMMITONSELCHANGE: 67108864 }, c.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }, c.AnnotationActionEventType = { E: "Mouse Enter", X: "Mouse Exit", D: "Mouse Down", U: "Mouse Up", Fo: "Focus", Bl: "Blur", PO: "PageOpen", PC: "PageClose", PV: "PageVisible", PI: "PageInvisible", K: "Keystroke", F: "Format", V: "Validate", C: "Calculate" }, c.DocumentActionEventType = { WC: "WillClose", WS: "WillSave", DS: "DidSave", WP: "WillPrint", DP: "DidPrint" }, c.PageActionEventType = { O: "PageOpen", C: "PageClose" };
      const t = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
      c.VerbosityLevel = t, c.CMapCompressionType = { NONE: 0, BINARY: 1 }, c.OPS = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91 }, c.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
      let a = t.WARNINGS;
      function b(p) {
        a >= t.WARNINGS && console.log(`Warning: ${p}`);
      }
      function x(p) {
        throw new Error(p);
      }
      function O(p, i, m) {
        let n = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
        return Object.defineProperty(p, i, { value: m, enumerable: !n, configurable: !0, writable: !1 }), m;
      }
      const f = function() {
        function i(m, n) {
          this.constructor === i && x("Cannot initialize BaseException."), this.message = m, this.name = n;
        }
        return i.prototype = new Error(), i.constructor = i, i;
      }();
      c.BaseException = f, c.PasswordException = class extends f {
        constructor(i, m) {
          super(i, "PasswordException"), this.code = m;
        }
      }, c.UnknownErrorException = class extends f {
        constructor(i, m) {
          super(i, "UnknownErrorException"), this.details = m;
        }
      }, c.InvalidPDFException = class extends f {
        constructor(i) {
          super(i, "InvalidPDFException");
        }
      }, c.MissingPDFException = class extends f {
        constructor(i) {
          super(i, "MissingPDFException");
        }
      }, c.UnexpectedResponseException = class extends f {
        constructor(i, m) {
          super(i, "UnexpectedResponseException"), this.status = m;
        }
      }, c.FormatError = class extends f {
        constructor(i) {
          super(i, "FormatError");
        }
      }, c.AbortException = class extends f {
        constructor(i) {
          super(i, "AbortException");
        }
      };
      function l(p) {
        typeof p != "string" && x("Invalid argument for stringToBytes");
        const i = p.length, m = new Uint8Array(i);
        for (let n = 0; n < i; ++n)
          m[n] = 255 & p.charCodeAt(n);
        return m;
      }
      c.FeatureTest = class {
        static get isLittleEndian() {
          return O(this, "isLittleEndian", function() {
            const m = new Uint8Array(4);
            return m[0] = 1, new Uint32Array(m.buffer, 0, 1)[0] === 1;
          }());
        }
        static get isEvalSupported() {
          return O(this, "isEvalSupported", function() {
            try {
              return new Function(""), !0;
            } catch {
              return !1;
            }
          }());
        }
        static get isOffscreenCanvasSupported() {
          return O(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
        }
        static get platform() {
          return typeof navigator > "u" ? O(this, "platform", { isWin: !1, isMac: !1 }) : O(this, "platform", { isWin: navigator.platform.includes("Win"), isMac: navigator.platform.includes("Mac") });
        }
      };
      const v = [...Array(256).keys()].map((p) => p.toString(16).padStart(2, "0"));
      class A {
        static makeHexColor(i, m, n) {
          return `#${v[i]}${v[m]}${v[n]}`;
        }
        static scaleMinMax(i, m) {
          let n;
          i[0] ? (i[0] < 0 && (n = m[0], m[0] = m[1], m[1] = n), m[0] *= i[0], m[1] *= i[0], i[3] < 0 && (n = m[2], m[2] = m[3], m[3] = n), m[2] *= i[3], m[3] *= i[3]) : (n = m[0], m[0] = m[2], m[2] = n, n = m[1], m[1] = m[3], m[3] = n, i[1] < 0 && (n = m[2], m[2] = m[3], m[3] = n), m[2] *= i[1], m[3] *= i[1], i[2] < 0 && (n = m[0], m[0] = m[1], m[1] = n), m[0] *= i[2], m[1] *= i[2]), m[0] += i[4], m[1] += i[4], m[2] += i[5], m[3] += i[5];
        }
        static transform(i, m) {
          return [i[0] * m[0] + i[2] * m[1], i[1] * m[0] + i[3] * m[1], i[0] * m[2] + i[2] * m[3], i[1] * m[2] + i[3] * m[3], i[0] * m[4] + i[2] * m[5] + i[4], i[1] * m[4] + i[3] * m[5] + i[5]];
        }
        static applyTransform(i, m) {
          return [i[0] * m[0] + i[1] * m[2] + m[4], i[0] * m[1] + i[1] * m[3] + m[5]];
        }
        static applyInverseTransform(i, m) {
          const n = m[0] * m[3] - m[1] * m[2];
          return [(i[0] * m[3] - i[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / n, (-i[0] * m[1] + i[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / n];
        }
        static getAxialAlignedBoundingBox(i, m) {
          const n = A.applyTransform(i, m), s = A.applyTransform(i.slice(2, 4), m), r = A.applyTransform([i[0], i[3]], m), u = A.applyTransform([i[2], i[1]], m);
          return [Math.min(n[0], s[0], r[0], u[0]), Math.min(n[1], s[1], r[1], u[1]), Math.max(n[0], s[0], r[0], u[0]), Math.max(n[1], s[1], r[1], u[1])];
        }
        static inverseTransform(i) {
          const m = i[0] * i[3] - i[1] * i[2];
          return [i[3] / m, -i[1] / m, -i[2] / m, i[0] / m, (i[2] * i[5] - i[4] * i[3]) / m, (i[4] * i[1] - i[5] * i[0]) / m];
        }
        static singularValueDecompose2dScale(i) {
          const m = [i[0], i[2], i[1], i[3]], n = i[0] * m[0] + i[1] * m[2], s = i[0] * m[1] + i[1] * m[3], r = i[2] * m[0] + i[3] * m[2], u = i[2] * m[1] + i[3] * m[3], C = (n + u) / 2, I = Math.sqrt((n + u) ** 2 - 4 * (n * u - r * s)) / 2, o = C + I || 1, D = C - I || 1;
          return [Math.sqrt(o), Math.sqrt(D)];
        }
        static normalizeRect(i) {
          const m = i.slice(0);
          return i[0] > i[2] && (m[0] = i[2], m[2] = i[0]), i[1] > i[3] && (m[1] = i[3], m[3] = i[1]), m;
        }
        static intersect(i, m) {
          const n = Math.max(Math.min(i[0], i[2]), Math.min(m[0], m[2])), s = Math.min(Math.max(i[0], i[2]), Math.max(m[0], m[2]));
          if (n > s)
            return null;
          const r = Math.max(Math.min(i[1], i[3]), Math.min(m[1], m[3])), u = Math.min(Math.max(i[1], i[3]), Math.max(m[1], m[3]));
          return r > u ? null : [n, r, s, u];
        }
        static bezierBoundingBox(i, m, n, s, r, u, C, I) {
          const o = [], D = [[], []];
          let $, W, K, z, _, g, w, S;
          for (let H = 0; H < 2; ++H)
            if (H === 0 ? (W = 6 * i - 12 * n + 6 * r, $ = -3 * i + 9 * n - 9 * r + 3 * C, K = 3 * n - 3 * i) : (W = 6 * m - 12 * s + 6 * u, $ = -3 * m + 9 * s - 9 * u + 3 * I, K = 3 * s - 3 * m), Math.abs($) < 1e-12) {
              if (Math.abs(W) < 1e-12)
                continue;
              z = -K / W, 0 < z && z < 1 && o.push(z);
            } else
              w = W * W - 4 * K * $, S = Math.sqrt(w), w < 0 || (_ = (-W + S) / (2 * $), 0 < _ && _ < 1 && o.push(_), g = (-W - S) / (2 * $), 0 < g && g < 1 && o.push(g));
          let M, q = o.length;
          const L = q;
          for (; q--; )
            z = o[q], M = 1 - z, D[0][q] = M * M * M * i + 3 * M * M * z * n + 3 * M * z * z * r + z * z * z * C, D[1][q] = M * M * M * m + 3 * M * M * z * s + 3 * M * z * z * u + z * z * z * I;
          return D[0][L] = i, D[1][L] = m, D[0][L + 1] = C, D[1][L + 1] = I, D[0].length = D[1].length = L + 2, [Math.min(...D[0]), Math.min(...D[1]), Math.max(...D[0]), Math.max(...D[1])];
        }
      }
      c.Util = A;
      const k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
      function j(p) {
        return decodeURIComponent(escape(p));
      }
      c.PromiseCapability = (P = class {
        constructor() {
          te(this, h, !1);
          this.promise = new Promise((i, m) => {
            this.resolve = (n) => {
              ue(this, h, !0), i(n);
            }, this.reject = (n) => {
              ue(this, h, !0), m(n);
            };
          });
        }
        get settled() {
          return T(this, h);
        }
      }, h = new WeakMap(), P);
      let d = null, y = null;
    }, (R, c, e) => {
      var t = e(3);
      (function() {
        !globalThis.DOMMatrix && t.isNodeJS && (globalThis.DOMMatrix = require$$6.DOMMatrix);
      })(), function() {
        if (globalThis.Path2D || !t.isNodeJS)
          return;
        const { CanvasRenderingContext2D: b } = require$$6, { polyfillPath2D: x } = requirePath2dPolyfill_dev();
        globalThis.CanvasRenderingContext2D = b, x(globalThis);
      }(), function() {
        Array.prototype.at || e(4);
      }(), function() {
        Uint8Array.prototype.at || e(78);
      }(), function() {
        globalThis.structuredClone || e(90);
      }();
    }, (R, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.isNodeJS = void 0;
      const e = !(typeof process != "object" || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && process.type !== "browser");
      c.isNodeJS = e;
    }, (R, c, e) => {
      e(5);
      var t = e(77);
      R.exports = t("Array", "at");
    }, (R, c, e) => {
      var t = e(6), a = e(43), b = e(67), x = e(65), O = e(72);
      t({ target: "Array", proto: !0 }, { at: function(l) {
        var v = a(this), A = b(v), k = x(l), j = k >= 0 ? k : A + k;
        return j < 0 || j >= A ? void 0 : v[j];
      } }), O("at");
    }, (R, c, e) => {
      var t = e(7), a = e(8).f, b = e(47), x = e(51), O = e(41), f = e(59), l = e(71);
      R.exports = function(v, A) {
        var k, j, d, y, h, P = v.target, p = v.global, i = v.stat;
        if (k = p ? t : i ? t[P] || O(P, {}) : (t[P] || {}).prototype)
          for (j in A) {
            if (y = A[j], d = v.dontCallGetSet ? (h = a(k, j)) && h.value : k[j], !l(p ? j : P + (i ? "." : "#") + j, v.forced) && d !== void 0) {
              if (typeof y == typeof d)
                continue;
              f(y, d);
            }
            (v.sham || d && d.sham) && b(y, "sham", !0), x(k, j, y, v);
          }
      };
    }, function(R) {
      var c = function(e) {
        return e && e.Math == Math && e;
      };
      R.exports = c(typeof globalThis == "object" && globalThis) || c(typeof window == "object" && window) || c(typeof self == "object" && self) || c(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
        return this;
      }() || this || Function("return this")();
    }, (R, c, e) => {
      var t = e(9), a = e(11), b = e(13), x = e(14), O = e(15), f = e(21), l = e(42), v = e(45), A = Object.getOwnPropertyDescriptor;
      c.f = t ? A : function(j, d) {
        if (j = O(j), d = f(d), v)
          try {
            return A(j, d);
          } catch {
          }
        if (l(j, d))
          return x(!a(b.f, j, d), j[d]);
      };
    }, (R, c, e) => {
      var t = e(10);
      R.exports = !t(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, (R) => {
      R.exports = function(c) {
        try {
          return !!c();
        } catch {
          return !0;
        }
      };
    }, (R, c, e) => {
      var t = e(12), a = Function.prototype.call;
      R.exports = t ? a.bind(a) : function() {
        return a.apply(a, arguments);
      };
    }, (R, c, e) => {
      var t = e(10);
      R.exports = !t(function() {
        var a = function() {
        }.bind();
        return typeof a != "function" || a.hasOwnProperty("prototype");
      });
    }, (R, c) => {
      var e = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, a = t && !e.call({ 1: 2 }, 1);
      c.f = a ? function(x) {
        var O = t(this, x);
        return !!O && O.enumerable;
      } : e;
    }, (R) => {
      R.exports = function(c, e) {
        return { enumerable: !(1 & c), configurable: !(2 & c), writable: !(4 & c), value: e };
      };
    }, (R, c, e) => {
      var t = e(16), a = e(19);
      R.exports = function(b) {
        return t(a(b));
      };
    }, (R, c, e) => {
      var t = e(17), a = e(10), b = e(18), x = Object, O = t("".split);
      R.exports = a(function() {
        return !x("z").propertyIsEnumerable(0);
      }) ? function(f) {
        return b(f) == "String" ? O(f, "") : x(f);
      } : x;
    }, (R, c, e) => {
      var t = e(12), a = Function.prototype, b = a.call, x = t && a.bind.bind(b, b);
      R.exports = t ? x : function(O) {
        return function() {
          return b.apply(O, arguments);
        };
      };
    }, (R, c, e) => {
      var t = e(17), a = t({}.toString), b = t("".slice);
      R.exports = function(x) {
        return b(a(x), 8, -1);
      };
    }, (R, c, e) => {
      var t = e(20), a = TypeError;
      R.exports = function(b) {
        if (t(b))
          throw a("Can't call method on " + b);
        return b;
      };
    }, (R) => {
      R.exports = function(c) {
        return c == null;
      };
    }, (R, c, e) => {
      var t = e(22), a = e(26);
      R.exports = function(b) {
        var x = t(b, "string");
        return a(x) ? x : x + "";
      };
    }, (R, c, e) => {
      var t = e(11), a = e(23), b = e(26), x = e(33), O = e(36), f = e(37), l = TypeError, v = f("toPrimitive");
      R.exports = function(A, k) {
        if (!a(A) || b(A))
          return A;
        var j, d = x(A, v);
        if (d) {
          if (k === void 0 && (k = "default"), j = t(d, A, k), !a(j) || b(j))
            return j;
          throw l("Can't convert object to primitive value");
        }
        return k === void 0 && (k = "number"), O(A, k);
      };
    }, (R, c, e) => {
      var t = e(24), a = e(25), b = a.all;
      R.exports = a.IS_HTMLDDA ? function(x) {
        return typeof x == "object" ? x !== null : t(x) || x === b;
      } : function(x) {
        return typeof x == "object" ? x !== null : t(x);
      };
    }, (R, c, e) => {
      var t = e(25), a = t.all;
      R.exports = t.IS_HTMLDDA ? function(b) {
        return typeof b == "function" || b === a;
      } : function(b) {
        return typeof b == "function";
      };
    }, (R) => {
      var c = typeof document == "object" && document.all, e = c === void 0 && c !== void 0;
      R.exports = { all: c, IS_HTMLDDA: e };
    }, (R, c, e) => {
      var t = e(27), a = e(24), b = e(28), x = e(29), O = Object;
      R.exports = x ? function(f) {
        return typeof f == "symbol";
      } : function(f) {
        var l = t("Symbol");
        return a(l) && b(l.prototype, O(f));
      };
    }, (R, c, e) => {
      var t = e(7), a = e(24);
      R.exports = function(b, x) {
        return arguments.length < 2 ? (O = t[b], a(O) ? O : void 0) : t[b] && t[b][x];
        var O;
      };
    }, (R, c, e) => {
      var t = e(17);
      R.exports = t({}.isPrototypeOf);
    }, (R, c, e) => {
      var t = e(30);
      R.exports = t && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }, (R, c, e) => {
      var t = e(31), a = e(10), b = e(7).String;
      R.exports = !!Object.getOwnPropertySymbols && !a(function() {
        var x = Symbol();
        return !b(x) || !(Object(x) instanceof Symbol) || !Symbol.sham && t && t < 41;
      });
    }, (R, c, e) => {
      var t, a, b = e(7), x = e(32), O = b.process, f = b.Deno, l = O && O.versions || f && f.version, v = l && l.v8;
      v && (a = (t = v.split("."))[0] > 0 && t[0] < 4 ? 1 : +(t[0] + t[1])), !a && x && (!(t = x.match(/Edge\/(\d+)/)) || t[1] >= 74) && (t = x.match(/Chrome\/(\d+)/)) && (a = +t[1]), R.exports = a;
    }, (R) => {
      R.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
    }, (R, c, e) => {
      var t = e(34), a = e(20);
      R.exports = function(b, x) {
        var O = b[x];
        return a(O) ? void 0 : t(O);
      };
    }, (R, c, e) => {
      var t = e(24), a = e(35), b = TypeError;
      R.exports = function(x) {
        if (t(x))
          return x;
        throw b(a(x) + " is not a function");
      };
    }, (R) => {
      var c = String;
      R.exports = function(e) {
        try {
          return c(e);
        } catch {
          return "Object";
        }
      };
    }, (R, c, e) => {
      var t = e(11), a = e(24), b = e(23), x = TypeError;
      R.exports = function(O, f) {
        var l, v;
        if (f === "string" && a(l = O.toString) && !b(v = t(l, O)) || a(l = O.valueOf) && !b(v = t(l, O)) || f !== "string" && a(l = O.toString) && !b(v = t(l, O)))
          return v;
        throw x("Can't convert object to primitive value");
      };
    }, (R, c, e) => {
      var t = e(7), a = e(38), b = e(42), x = e(44), O = e(30), f = e(29), l = t.Symbol, v = a("wks"), A = f ? l.for || l : l && l.withoutSetter || x;
      R.exports = function(k) {
        return b(v, k) || (v[k] = O && b(l, k) ? l[k] : A("Symbol." + k)), v[k];
      };
    }, (R, c, e) => {
      var t = e(39), a = e(40);
      (R.exports = function(b, x) {
        return a[b] || (a[b] = x !== void 0 ? x : {});
      })("versions", []).push({ version: "3.30.2", mode: t ? "pure" : "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE", source: "https://github.com/zloirock/core-js" });
    }, (R) => {
      R.exports = !1;
    }, (R, c, e) => {
      var t = e(7), a = e(41), b = "__core-js_shared__", x = t[b] || a(b, {});
      R.exports = x;
    }, (R, c, e) => {
      var t = e(7), a = Object.defineProperty;
      R.exports = function(b, x) {
        try {
          a(t, b, { value: x, configurable: !0, writable: !0 });
        } catch {
          t[b] = x;
        }
        return x;
      };
    }, (R, c, e) => {
      var t = e(17), a = e(43), b = t({}.hasOwnProperty);
      R.exports = Object.hasOwn || function(O, f) {
        return b(a(O), f);
      };
    }, (R, c, e) => {
      var t = e(19), a = Object;
      R.exports = function(b) {
        return a(t(b));
      };
    }, (R, c, e) => {
      var t = e(17), a = 0, b = Math.random(), x = t(1 .toString);
      R.exports = function(O) {
        return "Symbol(" + (O === void 0 ? "" : O) + ")_" + x(++a + b, 36);
      };
    }, (R, c, e) => {
      var t = e(9), a = e(10), b = e(46);
      R.exports = !t && !a(function() {
        return Object.defineProperty(b("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, (R, c, e) => {
      var t = e(7), a = e(23), b = t.document, x = a(b) && a(b.createElement);
      R.exports = function(O) {
        return x ? b.createElement(O) : {};
      };
    }, (R, c, e) => {
      var t = e(9), a = e(48), b = e(14);
      R.exports = t ? function(x, O, f) {
        return a.f(x, O, b(1, f));
      } : function(x, O, f) {
        return x[O] = f, x;
      };
    }, (R, c, e) => {
      var t = e(9), a = e(45), b = e(49), x = e(50), O = e(21), f = TypeError, l = Object.defineProperty, v = Object.getOwnPropertyDescriptor, A = "enumerable", k = "configurable", j = "writable";
      c.f = t ? b ? function(y, h, P) {
        if (x(y), h = O(h), x(P), typeof y == "function" && h === "prototype" && "value" in P && j in P && !P[j]) {
          var p = v(y, h);
          p && p[j] && (y[h] = P.value, P = { configurable: k in P ? P[k] : p[k], enumerable: A in P ? P[A] : p[A], writable: !1 });
        }
        return l(y, h, P);
      } : l : function(y, h, P) {
        if (x(y), h = O(h), x(P), a)
          try {
            return l(y, h, P);
          } catch {
          }
        if ("get" in P || "set" in P)
          throw f("Accessors not supported");
        return "value" in P && (y[h] = P.value), y;
      };
    }, (R, c, e) => {
      var t = e(9), a = e(10);
      R.exports = t && a(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype != 42;
      });
    }, (R, c, e) => {
      var t = e(23), a = String, b = TypeError;
      R.exports = function(x) {
        if (t(x))
          return x;
        throw b(a(x) + " is not an object");
      };
    }, (R, c, e) => {
      var t = e(24), a = e(48), b = e(52), x = e(41);
      R.exports = function(O, f, l, v) {
        v || (v = {});
        var A = v.enumerable, k = v.name !== void 0 ? v.name : f;
        if (t(l) && b(l, k, v), v.global)
          A ? O[f] = l : x(f, l);
        else {
          try {
            v.unsafe ? O[f] && (A = !0) : delete O[f];
          } catch {
          }
          A ? O[f] = l : a.f(O, f, { value: l, enumerable: !1, configurable: !v.nonConfigurable, writable: !v.nonWritable });
        }
        return O;
      };
    }, (R, c, e) => {
      var t = e(17), a = e(10), b = e(24), x = e(42), O = e(9), f = e(53).CONFIGURABLE, l = e(54), v = e(55), A = v.enforce, k = v.get, j = String, d = Object.defineProperty, y = t("".slice), h = t("".replace), P = t([].join), p = O && !a(function() {
        return d(function() {
        }, "length", { value: 8 }).length !== 8;
      }), i = String(String).split("String"), m = R.exports = function(n, s, r) {
        y(j(s), 0, 7) === "Symbol(" && (s = "[" + h(j(s), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (s = "get " + s), r && r.setter && (s = "set " + s), (!x(n, "name") || f && n.name !== s) && (O ? d(n, "name", { value: s, configurable: !0 }) : n.name = s), p && r && x(r, "arity") && n.length !== r.arity && d(n, "length", { value: r.arity });
        try {
          r && x(r, "constructor") && r.constructor ? O && d(n, "prototype", { writable: !1 }) : n.prototype && (n.prototype = void 0);
        } catch {
        }
        var u = A(n);
        return x(u, "source") || (u.source = P(i, typeof s == "string" ? s : "")), n;
      };
      Function.prototype.toString = m(function() {
        return b(this) && k(this).source || l(this);
      }, "toString");
    }, (R, c, e) => {
      var t = e(9), a = e(42), b = Function.prototype, x = t && Object.getOwnPropertyDescriptor, O = a(b, "name"), f = O && function() {
      }.name === "something", l = O && (!t || t && x(b, "name").configurable);
      R.exports = { EXISTS: O, PROPER: f, CONFIGURABLE: l };
    }, (R, c, e) => {
      var t = e(17), a = e(24), b = e(40), x = t(Function.toString);
      a(b.inspectSource) || (b.inspectSource = function(O) {
        return x(O);
      }), R.exports = b.inspectSource;
    }, (R, c, e) => {
      var t, a, b, x = e(56), O = e(7), f = e(23), l = e(47), v = e(42), A = e(40), k = e(57), j = e(58), d = "Object already initialized", y = O.TypeError, h = O.WeakMap;
      if (x || A.state) {
        var P = A.state || (A.state = new h());
        P.get = P.get, P.has = P.has, P.set = P.set, t = function(i, m) {
          if (P.has(i))
            throw y(d);
          return m.facade = i, P.set(i, m), m;
        }, a = function(i) {
          return P.get(i) || {};
        }, b = function(i) {
          return P.has(i);
        };
      } else {
        var p = k("state");
        j[p] = !0, t = function(i, m) {
          if (v(i, p))
            throw y(d);
          return m.facade = i, l(i, p, m), m;
        }, a = function(i) {
          return v(i, p) ? i[p] : {};
        }, b = function(i) {
          return v(i, p);
        };
      }
      R.exports = { set: t, get: a, has: b, enforce: function(i) {
        return b(i) ? a(i) : t(i, {});
      }, getterFor: function(i) {
        return function(m) {
          var n;
          if (!f(m) || (n = a(m)).type !== i)
            throw y("Incompatible receiver, " + i + " required");
          return n;
        };
      } };
    }, (R, c, e) => {
      var t = e(7), a = e(24), b = t.WeakMap;
      R.exports = a(b) && /native code/.test(String(b));
    }, (R, c, e) => {
      var t = e(38), a = e(44), b = t("keys");
      R.exports = function(x) {
        return b[x] || (b[x] = a(x));
      };
    }, (R) => {
      R.exports = {};
    }, (R, c, e) => {
      var t = e(42), a = e(60), b = e(8), x = e(48);
      R.exports = function(O, f, l) {
        for (var v = a(f), A = x.f, k = b.f, j = 0; j < v.length; j++) {
          var d = v[j];
          t(O, d) || l && t(l, d) || A(O, d, k(f, d));
        }
      };
    }, (R, c, e) => {
      var t = e(27), a = e(17), b = e(61), x = e(70), O = e(50), f = a([].concat);
      R.exports = t("Reflect", "ownKeys") || function(v) {
        var A = b.f(O(v)), k = x.f;
        return k ? f(A, k(v)) : A;
      };
    }, (R, c, e) => {
      var t = e(62), a = e(69).concat("length", "prototype");
      c.f = Object.getOwnPropertyNames || function(x) {
        return t(x, a);
      };
    }, (R, c, e) => {
      var t = e(17), a = e(42), b = e(15), x = e(63).indexOf, O = e(58), f = t([].push);
      R.exports = function(l, v) {
        var A, k = b(l), j = 0, d = [];
        for (A in k)
          !a(O, A) && a(k, A) && f(d, A);
        for (; v.length > j; )
          a(k, A = v[j++]) && (~x(d, A) || f(d, A));
        return d;
      };
    }, (R, c, e) => {
      var t = e(15), a = e(64), b = e(67), x = function(O) {
        return function(f, l, v) {
          var A, k = t(f), j = b(k), d = a(v, j);
          if (O && l != l) {
            for (; j > d; )
              if ((A = k[d++]) != A)
                return !0;
          } else
            for (; j > d; d++)
              if ((O || d in k) && k[d] === l)
                return O || d || 0;
          return !O && -1;
        };
      };
      R.exports = { includes: x(!0), indexOf: x(!1) };
    }, (R, c, e) => {
      var t = e(65), a = Math.max, b = Math.min;
      R.exports = function(x, O) {
        var f = t(x);
        return f < 0 ? a(f + O, 0) : b(f, O);
      };
    }, (R, c, e) => {
      var t = e(66);
      R.exports = function(a) {
        var b = +a;
        return b != b || b === 0 ? 0 : t(b);
      };
    }, (R) => {
      var c = Math.ceil, e = Math.floor;
      R.exports = Math.trunc || function(a) {
        var b = +a;
        return (b > 0 ? e : c)(b);
      };
    }, (R, c, e) => {
      var t = e(68);
      R.exports = function(a) {
        return t(a.length);
      };
    }, (R, c, e) => {
      var t = e(65), a = Math.min;
      R.exports = function(b) {
        return b > 0 ? a(t(b), 9007199254740991) : 0;
      };
    }, (R) => {
      R.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, (R, c) => {
      c.f = Object.getOwnPropertySymbols;
    }, (R, c, e) => {
      var t = e(10), a = e(24), b = /#|\.prototype\./, x = function(A, k) {
        var j = f[O(A)];
        return j == v || j != l && (a(k) ? t(k) : !!k);
      }, O = x.normalize = function(A) {
        return String(A).replace(b, ".").toLowerCase();
      }, f = x.data = {}, l = x.NATIVE = "N", v = x.POLYFILL = "P";
      R.exports = x;
    }, (R, c, e) => {
      var t = e(37), a = e(73), b = e(48).f, x = t("unscopables"), O = Array.prototype;
      O[x] == null && b(O, x, { configurable: !0, value: a(null) }), R.exports = function(f) {
        O[x][f] = !0;
      };
    }, (R, c, e) => {
      var t, a = e(50), b = e(74), x = e(69), O = e(58), f = e(76), l = e(46), v = e(57), A = "prototype", k = "script", j = v("IE_PROTO"), d = function() {
      }, y = function(p) {
        return "<" + k + ">" + p + "</" + k + ">";
      }, h = function(p) {
        p.write(y("")), p.close();
        var i = p.parentWindow.Object;
        return p = null, i;
      }, P = function() {
        try {
          t = new ActiveXObject("htmlfile");
        } catch {
        }
        P = typeof document < "u" ? document.domain && t ? h(t) : function() {
          var i, m = l("iframe"), n = "java" + k + ":";
          return m.style.display = "none", f.appendChild(m), m.src = String(n), (i = m.contentWindow.document).open(), i.write(y("document.F=Object")), i.close(), i.F;
        }() : h(t);
        for (var p = x.length; p--; )
          delete P[A][x[p]];
        return P();
      };
      O[j] = !0, R.exports = Object.create || function(i, m) {
        var n;
        return i !== null ? (d[A] = a(i), n = new d(), d[A] = null, n[j] = i) : n = P(), m === void 0 ? n : b.f(n, m);
      };
    }, (R, c, e) => {
      var t = e(9), a = e(49), b = e(48), x = e(50), O = e(15), f = e(75);
      c.f = t && !a ? Object.defineProperties : function(v, A) {
        x(v);
        for (var k, j = O(A), d = f(A), y = d.length, h = 0; y > h; )
          b.f(v, k = d[h++], j[k]);
        return v;
      };
    }, (R, c, e) => {
      var t = e(62), a = e(69);
      R.exports = Object.keys || function(x) {
        return t(x, a);
      };
    }, (R, c, e) => {
      var t = e(27);
      R.exports = t("document", "documentElement");
    }, (R, c, e) => {
      var t = e(7), a = e(17);
      R.exports = function(b, x) {
        return a(t[b].prototype[x]);
      };
    }, (R, c, e) => {
      e(79);
    }, (R, c, e) => {
      var t = e(80), a = e(67), b = e(65), x = t.aTypedArray;
      (0, t.exportTypedArrayMethod)("at", function(f) {
        var l = x(this), v = a(l), A = b(f), k = A >= 0 ? A : v + A;
        return k < 0 || k >= v ? void 0 : l[k];
      });
    }, (R, c, e) => {
      var t, a, b, x = e(81), O = e(9), f = e(7), l = e(24), v = e(23), A = e(42), k = e(82), j = e(35), d = e(47), y = e(51), h = e(84), P = e(28), p = e(85), i = e(87), m = e(37), n = e(44), s = e(55), r = s.enforce, u = s.get, C = f.Int8Array, I = C && C.prototype, o = f.Uint8ClampedArray, D = o && o.prototype, $ = C && p(C), W = I && p(I), K = Object.prototype, z = f.TypeError, _ = m("toStringTag"), g = n("TYPED_ARRAY_TAG"), w = "TypedArrayConstructor", S = x && !!i && k(f.opera) !== "Opera", M = !1, q = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, L = { BigInt64Array: 8, BigUint64Array: 8 }, H = function(G) {
        var X = p(G);
        if (v(X)) {
          var J = u(X);
          return J && A(J, w) ? J[w] : H(X);
        }
      }, V = function(G) {
        if (!v(G))
          return !1;
        var X = k(G);
        return A(q, X) || A(L, X);
      };
      for (t in q)
        (b = (a = f[t]) && a.prototype) ? r(b)[w] = a : S = !1;
      for (t in L)
        (b = (a = f[t]) && a.prototype) && (r(b)[w] = a);
      if ((!S || !l($) || $ === Function.prototype) && ($ = function() {
        throw z("Incorrect invocation");
      }, S))
        for (t in q)
          f[t] && i(f[t], $);
      if ((!S || !W || W === K) && (W = $.prototype, S))
        for (t in q)
          f[t] && i(f[t].prototype, W);
      if (S && p(D) !== W && i(D, W), O && !A(W, _)) {
        M = !0, h(W, _, { configurable: !0, get: function() {
          return v(this) ? this[g] : void 0;
        } });
        for (t in q)
          f[t] && d(f[t], g, t);
      }
      R.exports = { NATIVE_ARRAY_BUFFER_VIEWS: S, TYPED_ARRAY_TAG: M && g, aTypedArray: function(G) {
        if (V(G))
          return G;
        throw z("Target is not a typed array");
      }, aTypedArrayConstructor: function(G) {
        if (l(G) && (!i || P($, G)))
          return G;
        throw z(j(G) + " is not a typed array constructor");
      }, exportTypedArrayMethod: function(G, X, J, Q) {
        if (O) {
          if (J)
            for (var U in q) {
              var de = f[U];
              if (de && A(de.prototype, G))
                try {
                  delete de.prototype[G];
                } catch {
                  try {
                    de.prototype[G] = X;
                  } catch {
                  }
                }
            }
          W[G] && !J || y(W, G, J ? X : S && I[G] || X, Q);
        }
      }, exportTypedArrayStaticMethod: function(G, X, J) {
        var Q, U;
        if (O) {
          if (i) {
            if (J) {
              for (Q in q)
                if ((U = f[Q]) && A(U, G))
                  try {
                    delete U[G];
                  } catch {
                  }
            }
            if ($[G] && !J)
              return;
            try {
              return y($, G, J ? X : S && $[G] || X);
            } catch {
            }
          }
          for (Q in q)
            !(U = f[Q]) || U[G] && !J || y(U, G, X);
        }
      }, getTypedArrayConstructor: H, isView: function(X) {
        if (!v(X))
          return !1;
        var J = k(X);
        return J === "DataView" || A(q, J) || A(L, J);
      }, isTypedArray: V, TypedArray: $, TypedArrayPrototype: W };
    }, (R) => {
      R.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
    }, (R, c, e) => {
      var t = e(83), a = e(24), b = e(18), x = e(37)("toStringTag"), O = Object, f = b(function() {
        return arguments;
      }()) == "Arguments";
      R.exports = t ? b : function(l) {
        var v, A, k;
        return l === void 0 ? "Undefined" : l === null ? "Null" : typeof (A = function(j, d) {
          try {
            return j[d];
          } catch {
          }
        }(v = O(l), x)) == "string" ? A : f ? b(v) : (k = b(v)) == "Object" && a(v.callee) ? "Arguments" : k;
      };
    }, (R, c, e) => {
      var t = {};
      t[e(37)("toStringTag")] = "z", R.exports = String(t) === "[object z]";
    }, (R, c, e) => {
      var t = e(52), a = e(48);
      R.exports = function(b, x, O) {
        return O.get && t(O.get, x, { getter: !0 }), O.set && t(O.set, x, { setter: !0 }), a.f(b, x, O);
      };
    }, (R, c, e) => {
      var t = e(42), a = e(24), b = e(43), x = e(57), O = e(86), f = x("IE_PROTO"), l = Object, v = l.prototype;
      R.exports = O ? l.getPrototypeOf : function(A) {
        var k = b(A);
        if (t(k, f))
          return k[f];
        var j = k.constructor;
        return a(j) && k instanceof j ? j.prototype : k instanceof l ? v : null;
      };
    }, (R, c, e) => {
      var t = e(10);
      R.exports = !t(function() {
        function a() {
        }
        return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
      });
    }, (R, c, e) => {
      var t = e(88), a = e(50), b = e(89);
      R.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var x, O = !1, f = {};
        try {
          (x = t(Object.prototype, "__proto__", "set"))(f, []), O = f instanceof Array;
        } catch {
        }
        return function(v, A) {
          return a(v), b(A), O ? x(v, A) : v.__proto__ = A, v;
        };
      }() : void 0);
    }, (R, c, e) => {
      var t = e(17), a = e(34);
      R.exports = function(b, x, O) {
        try {
          return t(a(Object.getOwnPropertyDescriptor(b, x)[O]));
        } catch {
        }
      };
    }, (R, c, e) => {
      var t = e(24), a = String, b = TypeError;
      R.exports = function(x) {
        if (typeof x == "object" || t(x))
          return x;
        throw b("Can't set " + a(x) + " as a prototype");
      };
    }, (R, c, e) => {
      e(91), e(98), e(100), e(123), e(125);
      var t = e(137);
      R.exports = t.structuredClone;
    }, (R, c, e) => {
      var t = e(15), a = e(72), b = e(92), x = e(55), O = e(48).f, f = e(93), l = e(97), v = e(39), A = e(9), k = "Array Iterator", j = x.set, d = x.getterFor(k);
      R.exports = f(Array, "Array", function(h, P) {
        j(this, { type: k, target: t(h), index: 0, kind: P });
      }, function() {
        var h = d(this), P = h.target, p = h.kind, i = h.index++;
        return !P || i >= P.length ? (h.target = void 0, l(void 0, !0)) : l(p == "keys" ? i : p == "values" ? P[i] : [i, P[i]], !1);
      }, "values");
      var y = b.Arguments = b.Array;
      if (a("keys"), a("values"), a("entries"), !v && A && y.name !== "values")
        try {
          O(y, "name", { value: "values" });
        } catch {
        }
    }, (R) => {
      R.exports = {};
    }, (R, c, e) => {
      var t = e(6), a = e(11), b = e(39), x = e(53), O = e(24), f = e(94), l = e(85), v = e(87), A = e(96), k = e(47), j = e(51), d = e(37), y = e(92), h = e(95), P = x.PROPER, p = x.CONFIGURABLE, i = h.IteratorPrototype, m = h.BUGGY_SAFARI_ITERATORS, n = d("iterator"), s = "keys", r = "values", u = "entries", C = function() {
        return this;
      };
      R.exports = function(I, o, D, $, W, K, z) {
        f(D, o, $);
        var _, g, w, S = function(X) {
          if (X === W && V)
            return V;
          if (!m && X in L)
            return L[X];
          switch (X) {
            case s:
              return function() {
                return new D(this, X);
              };
            case r:
              return function() {
                return new D(this, X);
              };
            case u:
              return function() {
                return new D(this, X);
              };
          }
          return function() {
            return new D(this);
          };
        }, M = o + " Iterator", q = !1, L = I.prototype, H = L[n] || L["@@iterator"] || W && L[W], V = !m && H || S(W), G = o == "Array" && L.entries || H;
        if (G && (_ = l(G.call(new I()))) !== Object.prototype && _.next && (b || l(_) === i || (v ? v(_, i) : O(_[n]) || j(_, n, C)), A(_, M, !0, !0), b && (y[M] = C)), P && W == r && H && H.name !== r && (!b && p ? k(L, "name", r) : (q = !0, V = function() {
          return a(H, this);
        })), W)
          if (g = { values: S(r), keys: K ? V : S(s), entries: S(u) }, z)
            for (w in g)
              (m || q || !(w in L)) && j(L, w, g[w]);
          else
            t({ target: o, proto: !0, forced: m || q }, g);
        return b && !z || L[n] === V || j(L, n, V, { name: W }), y[o] = V, g;
      };
    }, (R, c, e) => {
      var t = e(95).IteratorPrototype, a = e(73), b = e(14), x = e(96), O = e(92), f = function() {
        return this;
      };
      R.exports = function(l, v, A, k) {
        var j = v + " Iterator";
        return l.prototype = a(t, { next: b(+!k, A) }), x(l, j, !1, !0), O[j] = f, l;
      };
    }, (R, c, e) => {
      var t, a, b, x = e(10), O = e(24), f = e(23), l = e(73), v = e(85), A = e(51), k = e(37), j = e(39), d = k("iterator"), y = !1;
      [].keys && ("next" in (b = [].keys()) ? (a = v(v(b))) !== Object.prototype && (t = a) : y = !0), !f(t) || x(function() {
        var h = {};
        return t[d].call(h) !== h;
      }) ? t = {} : j && (t = l(t)), O(t[d]) || A(t, d, function() {
        return this;
      }), R.exports = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: y };
    }, (R, c, e) => {
      var t = e(48).f, a = e(42), b = e(37)("toStringTag");
      R.exports = function(x, O, f) {
        x && !f && (x = x.prototype), x && !a(x, b) && t(x, b, { configurable: !0, value: O });
      };
    }, (R) => {
      R.exports = function(c, e) {
        return { value: c, done: e };
      };
    }, (R, c, e) => {
      var t = e(83), a = e(51), b = e(99);
      t || a(Object.prototype, "toString", b, { unsafe: !0 });
    }, (R, c, e) => {
      var t = e(83), a = e(82);
      R.exports = t ? {}.toString : function() {
        return "[object " + a(this) + "]";
      };
    }, (R, c, e) => {
      e(101);
    }, (R, c, e) => {
      e(102)("Map", function(t) {
        return function() {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      }, e(120));
    }, (R, c, e) => {
      var t = e(6), a = e(7), b = e(17), x = e(71), O = e(51), f = e(103), l = e(110), v = e(117), A = e(24), k = e(20), j = e(23), d = e(10), y = e(118), h = e(96), P = e(119);
      R.exports = function(p, i, m) {
        var n = p.indexOf("Map") !== -1, s = p.indexOf("Weak") !== -1, r = n ? "set" : "add", u = a[p], C = u && u.prototype, I = u, o = {}, D = function(g) {
          var w = b(C[g]);
          O(C, g, g == "add" ? function(M) {
            return w(this, M === 0 ? 0 : M), this;
          } : g == "delete" ? function(S) {
            return !(s && !j(S)) && w(this, S === 0 ? 0 : S);
          } : g == "get" ? function(M) {
            return s && !j(M) ? void 0 : w(this, M === 0 ? 0 : M);
          } : g == "has" ? function(M) {
            return !(s && !j(M)) && w(this, M === 0 ? 0 : M);
          } : function(M, q) {
            return w(this, M === 0 ? 0 : M, q), this;
          });
        };
        if (x(p, !A(u) || !(s || C.forEach && !d(function() {
          new u().entries().next();
        }))))
          I = m.getConstructor(i, p, n, r), f.enable();
        else if (x(p, !0)) {
          var $ = new I(), W = $[r](s ? {} : -0, 1) != $, K = d(function() {
            $.has(1);
          }), z = y(function(g) {
            new u(g);
          }), _ = !s && d(function() {
            for (var g = new u(), w = 5; w--; )
              g[r](w, w);
            return !g.has(-0);
          });
          z || ((I = i(function(g, w) {
            v(g, C);
            var S = P(new u(), g, I);
            return k(w) || l(w, S[r], { that: S, AS_ENTRIES: n }), S;
          })).prototype = C, C.constructor = I), (K || _) && (D("delete"), D("has"), n && D("get")), (_ || W) && D(r), s && C.clear && delete C.clear;
        }
        return o[p] = I, t({ global: !0, constructor: !0, forced: I != u }, o), h(I, p), s || m.setStrong(I, p, n), I;
      };
    }, (R, c, e) => {
      var t = e(6), a = e(17), b = e(58), x = e(23), O = e(42), f = e(48).f, l = e(61), v = e(104), A = e(107), k = e(44), j = e(109), d = !1, y = k("meta"), h = 0, P = function(i) {
        f(i, y, { value: { objectID: "O" + h++, weakData: {} } });
      }, p = R.exports = { enable: function() {
        p.enable = function() {
        }, d = !0;
        var i = l.f, m = a([].splice), n = {};
        n[y] = 1, i(n).length && (l.f = function(s) {
          for (var r = i(s), u = 0, C = r.length; u < C; u++)
            if (r[u] === y) {
              m(r, u, 1);
              break;
            }
          return r;
        }, t({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: v.f }));
      }, fastKey: function(i, m) {
        if (!x(i))
          return typeof i == "symbol" ? i : (typeof i == "string" ? "S" : "P") + i;
        if (!O(i, y)) {
          if (!A(i))
            return "F";
          if (!m)
            return "E";
          P(i);
        }
        return i[y].objectID;
      }, getWeakData: function(i, m) {
        if (!O(i, y)) {
          if (!A(i))
            return !0;
          if (!m)
            return !1;
          P(i);
        }
        return i[y].weakData;
      }, onFreeze: function(i) {
        return j && d && A(i) && !O(i, y) && P(i), i;
      } };
      b[y] = !0;
    }, (R, c, e) => {
      var t = e(18), a = e(15), b = e(61).f, x = e(105), O = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      R.exports.f = function(l) {
        return O && t(l) == "Window" ? function(v) {
          try {
            return b(v);
          } catch {
            return x(O);
          }
        }(l) : b(a(l));
      };
    }, (R, c, e) => {
      var t = e(64), a = e(67), b = e(106), x = Array, O = Math.max;
      R.exports = function(f, l, v) {
        for (var A = a(f), k = t(l, A), j = t(v === void 0 ? A : v, A), d = x(O(j - k, 0)), y = 0; k < j; k++, y++)
          b(d, y, f[k]);
        return d.length = y, d;
      };
    }, (R, c, e) => {
      var t = e(21), a = e(48), b = e(14);
      R.exports = function(x, O, f) {
        var l = t(O);
        l in x ? a.f(x, l, b(0, f)) : x[l] = f;
      };
    }, (R, c, e) => {
      var t = e(10), a = e(23), b = e(18), x = e(108), O = Object.isExtensible, f = t(function() {
      });
      R.exports = f || x ? function(v) {
        return !!a(v) && (!x || b(v) != "ArrayBuffer") && (!O || O(v));
      } : O;
    }, (R, c, e) => {
      var t = e(10);
      R.exports = t(function() {
        if (typeof ArrayBuffer == "function") {
          var a = new ArrayBuffer(8);
          Object.isExtensible(a) && Object.defineProperty(a, "a", { value: 8 });
        }
      });
    }, (R, c, e) => {
      var t = e(10);
      R.exports = !t(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }, (R, c, e) => {
      var t = e(111), a = e(11), b = e(50), x = e(35), O = e(113), f = e(67), l = e(28), v = e(114), A = e(115), k = e(116), j = TypeError, d = function(h, P) {
        this.stopped = h, this.result = P;
      }, y = d.prototype;
      R.exports = function(h, P, p) {
        var i, m, n, s, r, u, C, I = p && p.that, o = !(!p || !p.AS_ENTRIES), D = !(!p || !p.IS_RECORD), $ = !(!p || !p.IS_ITERATOR), W = !(!p || !p.INTERRUPTED), K = t(P, I), z = function(g) {
          return i && k(i, "normal", g), new d(!0, g);
        }, _ = function(g) {
          return o ? (b(g), W ? K(g[0], g[1], z) : K(g[0], g[1])) : W ? K(g, z) : K(g);
        };
        if (D)
          i = h.iterator;
        else if ($)
          i = h;
        else {
          if (!(m = A(h)))
            throw j(x(h) + " is not iterable");
          if (O(m)) {
            for (n = 0, s = f(h); s > n; n++)
              if ((r = _(h[n])) && l(y, r))
                return r;
            return new d(!1);
          }
          i = v(h, m);
        }
        for (u = D ? h.next : i.next; !(C = a(u, i)).done; ) {
          try {
            r = _(C.value);
          } catch (g) {
            k(i, "throw", g);
          }
          if (typeof r == "object" && r && l(y, r))
            return r;
        }
        return new d(!1);
      };
    }, (R, c, e) => {
      var t = e(112), a = e(34), b = e(12), x = t(t.bind);
      R.exports = function(O, f) {
        return a(O), f === void 0 ? O : b ? x(O, f) : function() {
          return O.apply(f, arguments);
        };
      };
    }, (R, c, e) => {
      var t = e(18), a = e(17);
      R.exports = function(b) {
        if (t(b) === "Function")
          return a(b);
      };
    }, (R, c, e) => {
      var t = e(37), a = e(92), b = t("iterator"), x = Array.prototype;
      R.exports = function(O) {
        return O !== void 0 && (a.Array === O || x[b] === O);
      };
    }, (R, c, e) => {
      var t = e(11), a = e(34), b = e(50), x = e(35), O = e(115), f = TypeError;
      R.exports = function(l, v) {
        var A = arguments.length < 2 ? O(l) : v;
        if (a(A))
          return b(t(A, l));
        throw f(x(l) + " is not iterable");
      };
    }, (R, c, e) => {
      var t = e(82), a = e(33), b = e(20), x = e(92), O = e(37)("iterator");
      R.exports = function(f) {
        if (!b(f))
          return a(f, O) || a(f, "@@iterator") || x[t(f)];
      };
    }, (R, c, e) => {
      var t = e(11), a = e(50), b = e(33);
      R.exports = function(x, O, f) {
        var l, v;
        a(x);
        try {
          if (!(l = b(x, "return"))) {
            if (O === "throw")
              throw f;
            return f;
          }
          l = t(l, x);
        } catch (A) {
          v = !0, l = A;
        }
        if (O === "throw")
          throw f;
        if (v)
          throw l;
        return a(l), f;
      };
    }, (R, c, e) => {
      var t = e(28), a = TypeError;
      R.exports = function(b, x) {
        if (t(x, b))
          return b;
        throw a("Incorrect invocation");
      };
    }, (R, c, e) => {
      var t = e(37)("iterator"), a = !1;
      try {
        var b = 0, x = { next: function() {
          return { done: !!b++ };
        }, return: function() {
          a = !0;
        } };
        x[t] = function() {
          return this;
        }, Array.from(x, function() {
          throw 2;
        });
      } catch {
      }
      R.exports = function(O, f) {
        if (!f && !a)
          return !1;
        var l = !1;
        try {
          var v = {};
          v[t] = function() {
            return { next: function() {
              return { done: l = !0 };
            } };
          }, O(v);
        } catch {
        }
        return l;
      };
    }, (R, c, e) => {
      var t = e(24), a = e(23), b = e(87);
      R.exports = function(x, O, f) {
        var l, v;
        return b && t(l = O.constructor) && l !== f && a(v = l.prototype) && v !== f.prototype && b(x, v), x;
      };
    }, (R, c, e) => {
      var t = e(73), a = e(84), b = e(121), x = e(111), O = e(117), f = e(20), l = e(110), v = e(93), A = e(97), k = e(122), j = e(9), d = e(103).fastKey, y = e(55), h = y.set, P = y.getterFor;
      R.exports = { getConstructor: function(p, i, m, n) {
        var s = p(function(o, D) {
          O(o, r), h(o, { type: i, index: t(null), first: void 0, last: void 0, size: 0 }), j || (o.size = 0), f(D) || l(D, o[n], { that: o, AS_ENTRIES: m });
        }), r = s.prototype, u = P(i), C = function(o, D, $) {
          var W, K, z = u(o), _ = I(o, D);
          return _ ? _.value = $ : (z.last = _ = { index: K = d(D, !0), key: D, value: $, previous: W = z.last, next: void 0, removed: !1 }, z.first || (z.first = _), W && (W.next = _), j ? z.size++ : o.size++, K !== "F" && (z.index[K] = _)), o;
        }, I = function(o, D) {
          var $, W = u(o), K = d(D);
          if (K !== "F")
            return W.index[K];
          for ($ = W.first; $; $ = $.next)
            if ($.key == D)
              return $;
        };
        return b(r, { clear: function() {
          for (var D = u(this), $ = D.index, W = D.first; W; )
            W.removed = !0, W.previous && (W.previous = W.previous.next = void 0), delete $[W.index], W = W.next;
          D.first = D.last = void 0, j ? D.size = 0 : this.size = 0;
        }, delete: function(o) {
          var D = this, $ = u(D), W = I(D, o);
          if (W) {
            var K = W.next, z = W.previous;
            delete $.index[W.index], W.removed = !0, z && (z.next = K), K && (K.previous = z), $.first == W && ($.first = K), $.last == W && ($.last = z), j ? $.size-- : D.size--;
          }
          return !!W;
        }, forEach: function(D) {
          for (var $, W = u(this), K = x(D, arguments.length > 1 ? arguments[1] : void 0); $ = $ ? $.next : W.first; )
            for (K($.value, $.key, this); $ && $.removed; )
              $ = $.previous;
        }, has: function(D) {
          return !!I(this, D);
        } }), b(r, m ? { get: function(D) {
          var $ = I(this, D);
          return $ && $.value;
        }, set: function(D, $) {
          return C(this, D === 0 ? 0 : D, $);
        } } : { add: function(D) {
          return C(this, D = D === 0 ? 0 : D, D);
        } }), j && a(r, "size", { configurable: !0, get: function() {
          return u(this).size;
        } }), s;
      }, setStrong: function(p, i, m) {
        var n = i + " Iterator", s = P(i), r = P(n);
        v(p, i, function(u, C) {
          h(this, { type: n, target: u, state: s(u), kind: C, last: void 0 });
        }, function() {
          for (var u = r(this), C = u.kind, I = u.last; I && I.removed; )
            I = I.previous;
          return !u.target || !(u.last = I = I ? I.next : u.state.first) ? (u.target = void 0, A(void 0, !0)) : A(C == "keys" ? I.key : C == "values" ? I.value : [I.key, I.value], !1);
        }, m ? "entries" : "values", !m, !0), k(i);
      } };
    }, (R, c, e) => {
      var t = e(51);
      R.exports = function(a, b, x) {
        for (var O in b)
          t(a, O, b[O], x);
        return a;
      };
    }, (R, c, e) => {
      var t = e(27), a = e(84), b = e(37), x = e(9), O = b("species");
      R.exports = function(f) {
        var l = t(f);
        x && l && !l[O] && a(l, O, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, (R, c, e) => {
      e(124);
    }, (R, c, e) => {
      e(102)("Set", function(t) {
        return function() {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      }, e(120));
    }, (R, c, e) => {
      var t, a = e(39), b = e(6), x = e(7), O = e(27), f = e(17), l = e(10), v = e(44), A = e(24), k = e(126), j = e(20), d = e(23), y = e(26), h = e(110), P = e(50), p = e(82), i = e(42), m = e(106), n = e(47), s = e(67), r = e(127), u = e(128), C = e(130), I = e(131), o = e(132), D = e(133), $ = x.Object, W = x.Array, K = x.Date, z = x.Error, _ = x.EvalError, g = x.RangeError, w = x.ReferenceError, S = x.SyntaxError, M = x.TypeError, q = x.URIError, L = x.PerformanceMark, H = x.WebAssembly, V = H && H.CompileError || z, G = H && H.LinkError || z, X = H && H.RuntimeError || z, J = O("DOMException"), Q = C.Map, U = C.has, de = C.get, le = C.set, E = I.Set, F = I.add, N = O("Object", "keys"), B = f([].push), Y = f((!0).valueOf), ee = f(1 .valueOf), re = f("".valueOf), ie = f(K.prototype.getTime), Ae = v("structuredClone"), ce = "DataCloneError", ve = "Transferring", he = function(ae) {
        return !l(function() {
          var Pe = new x.Set([7]), Ee = ae(Pe), Ue = ae($(7));
          return Ee == Pe || !Ee.has(7) || typeof Ue != "object" || Ue != 7;
        }) && ae;
      }, me = function(ae, Pe) {
        return !l(function() {
          var Ee = new Pe(), Ue = ae({ a: Ee, b: Ee });
          return !(Ue && Ue.a === Ue.b && Ue.a instanceof Pe && Ue.a.stack === Ee.stack);
        });
      }, ye = x.structuredClone, _e = a || !me(ye, z) || !me(ye, J) || (t = ye, !!l(function() {
        var ae = t(new x.AggregateError([1], Ae, { cause: 3 }));
        return ae.name != "AggregateError" || ae.errors[0] != 1 || ae.message != Ae || ae.cause != 3;
      })), Ce = !ye && he(function(ae) {
        return new L(Ae, { detail: ae }).detail;
      }), Z = he(ye) || Ce, pe = function(ae) {
        throw new J("Uncloneable type: " + ae, ce);
      }, xe = function(ae, Pe) {
        throw new J((Pe || "Cloning") + " of " + ae + " cannot be properly polyfilled in this engine", ce);
      }, Fe = function(ae, Pe) {
        return Z || xe(Pe), Z(ae);
      }, Me = function(ae, Pe) {
        if (y(ae) && pe("Symbol"), !d(ae))
          return ae;
        if (Pe) {
          if (U(Pe, ae))
            return de(Pe, ae);
        } else
          Pe = new Q();
        var Ee, Ue, Se, et, Ne, He, Re, Xe, Qe, se, oe, fe = p(ae), ge = !1;
        switch (fe) {
          case "Array":
            Se = W(s(ae)), ge = !0;
            break;
          case "Object":
            Se = {}, ge = !0;
            break;
          case "Map":
            Se = new Q(), ge = !0;
            break;
          case "Set":
            Se = new E(), ge = !0;
            break;
          case "RegExp":
            Se = new RegExp(ae.source, u(ae));
            break;
          case "Error":
            switch (Ue = ae.name) {
              case "AggregateError":
                Se = O("AggregateError")([]);
                break;
              case "EvalError":
                Se = _();
                break;
              case "RangeError":
                Se = g();
                break;
              case "ReferenceError":
                Se = w();
                break;
              case "SyntaxError":
                Se = S();
                break;
              case "TypeError":
                Se = M();
                break;
              case "URIError":
                Se = q();
                break;
              case "CompileError":
                Se = V();
                break;
              case "LinkError":
                Se = G();
                break;
              case "RuntimeError":
                Se = X();
                break;
              default:
                Se = z();
            }
            ge = !0;
            break;
          case "DOMException":
            Se = new J(ae.message, ae.name), ge = !0;
            break;
          case "DataView":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            Ee = x[fe], d(Ee) || xe(fe), Se = new Ee(Me(ae.buffer, Pe), ae.byteOffset, fe === "DataView" ? ae.byteLength : ae.length);
            break;
          case "DOMQuad":
            try {
              Se = new DOMQuad(Me(ae.p1, Pe), Me(ae.p2, Pe), Me(ae.p3, Pe), Me(ae.p4, Pe));
            } catch {
              Se = Fe(ae, fe);
            }
            break;
          case "File":
            if (Z)
              try {
                Se = Z(ae), p(Se) !== fe && (Se = void 0);
              } catch {
              }
            if (!Se)
              try {
                Se = new File([ae], ae.name, ae);
              } catch {
              }
            Se || xe(fe);
            break;
          case "FileList":
            if (et = function() {
              var be;
              try {
                be = new x.DataTransfer();
              } catch {
                try {
                  be = new x.ClipboardEvent("").clipboardData;
                } catch {
                }
              }
              return be && be.items && be.files ? be : null;
            }()) {
              for (Ne = 0, He = s(ae); Ne < He; Ne++)
                et.items.add(Me(ae[Ne], Pe));
              Se = et.files;
            } else
              Se = Fe(ae, fe);
            break;
          case "ImageData":
            try {
              Se = new ImageData(Me(ae.data, Pe), ae.width, ae.height, { colorSpace: ae.colorSpace });
            } catch {
              Se = Fe(ae, fe);
            }
            break;
          default:
            if (Z)
              Se = Z(ae);
            else
              switch (fe) {
                case "BigInt":
                  Se = $(ae.valueOf());
                  break;
                case "Boolean":
                  Se = $(Y(ae));
                  break;
                case "Number":
                  Se = $(ee(ae));
                  break;
                case "String":
                  Se = $(re(ae));
                  break;
                case "Date":
                  Se = new K(ie(ae));
                  break;
                case "ArrayBuffer":
                  (Ee = x.DataView) || typeof ae.slice == "function" || xe(fe);
                  try {
                    if (typeof ae.slice != "function" || ae.resizable)
                      for (He = ae.byteLength, oe = ("maxByteLength" in ae) ? { maxByteLength: ae.maxByteLength } : void 0, Se = new ArrayBuffer(He, oe), Qe = new Ee(ae), se = new Ee(Se), Ne = 0; Ne < He; Ne++)
                        se.setUint8(Ne, Qe.getUint8(Ne));
                    else
                      Se = ae.slice(0);
                  } catch {
                    throw new J("ArrayBuffer is detached", ce);
                  }
                  break;
                case "SharedArrayBuffer":
                  Se = ae;
                  break;
                case "Blob":
                  try {
                    Se = ae.slice(0, ae.size, ae.type);
                  } catch {
                    xe(fe);
                  }
                  break;
                case "DOMPoint":
                case "DOMPointReadOnly":
                  Ee = x[fe];
                  try {
                    Se = Ee.fromPoint ? Ee.fromPoint(ae) : new Ee(ae.x, ae.y, ae.z, ae.w);
                  } catch {
                    xe(fe);
                  }
                  break;
                case "DOMRect":
                case "DOMRectReadOnly":
                  Ee = x[fe];
                  try {
                    Se = Ee.fromRect ? Ee.fromRect(ae) : new Ee(ae.x, ae.y, ae.width, ae.height);
                  } catch {
                    xe(fe);
                  }
                  break;
                case "DOMMatrix":
                case "DOMMatrixReadOnly":
                  Ee = x[fe];
                  try {
                    Se = Ee.fromMatrix ? Ee.fromMatrix(ae) : new Ee(ae);
                  } catch {
                    xe(fe);
                  }
                  break;
                case "AudioData":
                case "VideoFrame":
                  A(ae.clone) || xe(fe);
                  try {
                    Se = ae.clone();
                  } catch {
                    pe(fe);
                  }
                  break;
                case "CropTarget":
                case "CryptoKey":
                case "FileSystemDirectoryHandle":
                case "FileSystemFileHandle":
                case "FileSystemHandle":
                case "GPUCompilationInfo":
                case "GPUCompilationMessage":
                case "ImageBitmap":
                case "RTCCertificate":
                case "WebAssembly.Module":
                  xe(fe);
                default:
                  pe(fe);
              }
        }
        if (le(Pe, ae, Se), ge)
          switch (fe) {
            case "Array":
            case "Object":
              for (Re = N(ae), Ne = 0, He = s(Re); Ne < He; Ne++)
                Xe = Re[Ne], m(Se, Xe, Me(ae[Xe], Pe));
              break;
            case "Map":
              ae.forEach(function(be, we) {
                le(Se, Me(we, Pe), Me(be, Pe));
              });
              break;
            case "Set":
              ae.forEach(function(be) {
                F(Se, Me(be, Pe));
              });
              break;
            case "Error":
              n(Se, "message", Me(ae.message, Pe)), i(ae, "cause") && n(Se, "cause", Me(ae.cause, Pe)), Ue == "AggregateError" && (Se.errors = Me(ae.errors, Pe));
            case "DOMException":
              o && n(Se, "stack", Me(ae.stack, Pe));
          }
        return Se;
      };
      b({ global: !0, enumerable: !0, sham: !D, forced: _e }, { structuredClone: function(Pe) {
        var Ee, Ue = r(arguments.length, 1) > 1 && !j(arguments[1]) ? P(arguments[1]) : void 0, Se = Ue ? Ue.transfer : void 0;
        return Se !== void 0 && function(et, Ne) {
          if (!d(et))
            throw M("Transfer option cannot be converted to a sequence");
          var He = [];
          h(et, function(we) {
            B(He, P(we));
          });
          var Re, Xe, Qe, se, oe, fe, ge = 0, be = s(He);
          if (D)
            for (se = ye(He, { transfer: He }); ge < be; )
              le(Ne, He[ge], se[ge++]);
          else
            for (; ge < be; ) {
              if (Re = He[ge++], U(Ne, Re))
                throw new J("Duplicate transferable", ce);
              switch (Xe = p(Re)) {
                case "ImageBitmap":
                  Qe = x.OffscreenCanvas, k(Qe) || xe(Xe, ve);
                  try {
                    (fe = new Qe(Re.width, Re.height)).getContext("bitmaprenderer").transferFromImageBitmap(Re), oe = fe.transferToImageBitmap();
                  } catch {
                  }
                  break;
                case "AudioData":
                case "VideoFrame":
                  A(Re.clone) && A(Re.close) || xe(Xe, ve);
                  try {
                    oe = Re.clone(), Re.close();
                  } catch {
                  }
                  break;
                case "ArrayBuffer":
                  A(Re.transfer) || xe(Xe, ve), oe = Re.transfer();
                  break;
                case "MediaSourceHandle":
                case "MessagePort":
                case "OffscreenCanvas":
                case "ReadableStream":
                case "TransformStream":
                case "WritableStream":
                  xe(Xe, ve);
              }
              if (oe === void 0)
                throw new J("This object cannot be transferred: " + Xe, ce);
              le(Ne, Re, oe);
            }
        }(Se, Ee = new Q()), Me(Pe, Ee);
      } });
    }, (R, c, e) => {
      var t = e(17), a = e(10), b = e(24), x = e(82), O = e(27), f = e(54), l = function() {
      }, v = [], A = O("Reflect", "construct"), k = /^\s*(?:class|function)\b/, j = t(k.exec), d = !k.exec(l), y = function(p) {
        if (!b(p))
          return !1;
        try {
          return A(l, v, p), !0;
        } catch {
          return !1;
        }
      }, h = function(p) {
        if (!b(p))
          return !1;
        switch (x(p)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return d || !!j(k, f(p));
        } catch {
          return !0;
        }
      };
      h.sham = !0, R.exports = !A || a(function() {
        var P;
        return y(y.call) || !y(Object) || !y(function() {
          P = !0;
        }) || P;
      }) ? h : y;
    }, (R) => {
      var c = TypeError;
      R.exports = function(e, t) {
        if (e < t)
          throw c("Not enough arguments");
        return e;
      };
    }, (R, c, e) => {
      var t = e(11), a = e(42), b = e(28), x = e(129), O = RegExp.prototype;
      R.exports = function(f) {
        var l = f.flags;
        return l !== void 0 || "flags" in O || a(f, "flags") || !b(O, f) ? l : t(x, f);
      };
    }, (R, c, e) => {
      var t = e(50);
      R.exports = function() {
        var a = t(this), b = "";
        return a.hasIndices && (b += "d"), a.global && (b += "g"), a.ignoreCase && (b += "i"), a.multiline && (b += "m"), a.dotAll && (b += "s"), a.unicode && (b += "u"), a.unicodeSets && (b += "v"), a.sticky && (b += "y"), b;
      };
    }, (R, c, e) => {
      var t = e(17), a = Map.prototype;
      R.exports = { Map, set: t(a.set), get: t(a.get), has: t(a.has), remove: t(a.delete), proto: a };
    }, (R, c, e) => {
      var t = e(17), a = Set.prototype;
      R.exports = { Set, add: t(a.add), has: t(a.has), remove: t(a.delete), proto: a };
    }, (R, c, e) => {
      var t = e(10), a = e(14);
      R.exports = !t(function() {
        var b = Error("a");
        return "stack" in b ? (Object.defineProperty(b, "stack", a(1, 7)), b.stack !== 7) : !0;
      });
    }, (R, c, e) => {
      var t = e(7), a = e(10), b = e(31), x = e(134), O = e(135), f = e(136), l = t.structuredClone;
      R.exports = !!l && !a(function() {
        if (O && b > 92 || f && b > 94 || x && b > 97)
          return !1;
        var v = new ArrayBuffer(8), A = l(v, { transfer: [v] });
        return v.byteLength != 0 || A.byteLength != 8;
      });
    }, (R, c, e) => {
      var t = e(135), a = e(136);
      R.exports = !t && !a && typeof window == "object" && typeof document == "object";
    }, (R) => {
      R.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
    }, (R, c, e) => {
      var t = e(18);
      R.exports = typeof process < "u" && t(process) == "process";
    }, (R, c, e) => {
      var t = e(7);
      R.exports = t;
    }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
      var R, e, t, a, rt, x, pt, f, l, v, A, k, j, d, At, h, P, _t, i, m;
      Object.defineProperty(exports, "__esModule", { value: !0 }), exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, exports.getDocument = getDocument, exports.version = void 0;
      var _util = __w_pdfjs_require__(1), _annotation_storage = __w_pdfjs_require__(139), _display_utils = __w_pdfjs_require__(142), _font_loader = __w_pdfjs_require__(145), _canvas = __w_pdfjs_require__(146), _worker_options = __w_pdfjs_require__(149), _is_node = __w_pdfjs_require__(3), _message_handler = __w_pdfjs_require__(150), _metadata = __w_pdfjs_require__(151), _optional_content_config = __w_pdfjs_require__(152), _transport_stream = __w_pdfjs_require__(153), _xfa_text = __w_pdfjs_require__(154);
      const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DELAYED_CLEANUP_TIMEOUT = 5e3;
      let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
      exports.DefaultCanvasFactory = DefaultCanvasFactory;
      let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
      exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
      let DefaultFilterFactory = _display_utils.DOMFilterFactory;
      exports.DefaultFilterFactory = DefaultFilterFactory;
      let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory, createPDFNetworkStream;
      if (exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory, _is_node.isNodeJS) {
        const { NodeCanvasFactory: s, NodeCMapReaderFactory: r, NodeFilterFactory: u, NodeStandardFontDataFactory: C } = __w_pdfjs_require__(155);
        exports.DefaultCanvasFactory = DefaultCanvasFactory = s, exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = r, exports.DefaultFilterFactory = DefaultFilterFactory = u, exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = C;
      }
      if (_is_node.isNodeJS) {
        const { PDFNodeStream: s } = __w_pdfjs_require__(156);
        createPDFNetworkStream = (r) => new s(r);
      } else {
        const { PDFNetworkStream: s } = __w_pdfjs_require__(159), { PDFFetchStream: r } = __w_pdfjs_require__(160);
        createPDFNetworkStream = (u) => (0, _display_utils.isValidFetchUrl)(u.url) ? new r(u) : new s(u);
      }
      function getDocument(s) {
        if (typeof s == "string" || s instanceof URL ? s = { url: s } : (0, _util.isArrayBuffer)(s) && (s = { data: s }), typeof s != "object")
          throw new Error("Invalid parameter in getDocument, need parameter object.");
        if (!s.url && !s.data && !s.range)
          throw new Error("Invalid parameter object: need either .data, .range or .url");
        const r = new PDFDocumentLoadingTask(), { docId: u } = r, C = s.url ? getUrlProp(s.url) : null, I = s.data ? getDataProp(s.data) : null, o = s.httpHeaders || null, D = s.withCredentials === !0, $ = s.password ?? null, W = s.range instanceof PDFDataRangeTransport ? s.range : null, K = Number.isInteger(s.rangeChunkSize) && s.rangeChunkSize > 0 ? s.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
        let z = s.worker instanceof PDFWorker ? s.worker : null;
        const _ = s.verbosity, g = typeof s.docBaseUrl != "string" || (0, _display_utils.isDataScheme)(s.docBaseUrl) ? null : s.docBaseUrl, w = typeof s.cMapUrl == "string" ? s.cMapUrl : null, S = s.cMapPacked !== !1, M = s.CMapReaderFactory || DefaultCMapReaderFactory, q = typeof s.standardFontDataUrl == "string" ? s.standardFontDataUrl : null, L = s.StandardFontDataFactory || DefaultStandardFontDataFactory, H = s.stopAtErrors !== !0, V = Number.isInteger(s.maxImageSize) && s.maxImageSize > -1 ? s.maxImageSize : -1, G = s.isEvalSupported !== !1, X = typeof s.isOffscreenCanvasSupported == "boolean" ? s.isOffscreenCanvasSupported : !_is_node.isNodeJS, J = Number.isInteger(s.canvasMaxAreaInBytes) ? s.canvasMaxAreaInBytes : -1, Q = typeof s.disableFontFace == "boolean" ? s.disableFontFace : _is_node.isNodeJS, U = s.fontExtraProperties === !0, de = s.enableXfa === !0, le = s.ownerDocument || globalThis.document, E = s.disableRange === !0, F = s.disableStream === !0, N = s.disableAutoFetch === !0, B = s.pdfBug === !0, Y = W ? W.length : s.length ?? NaN, ee = typeof s.useSystemFonts == "boolean" ? s.useSystemFonts : !_is_node.isNodeJS && !Q, re = typeof s.useWorkerFetch == "boolean" ? s.useWorkerFetch : M === _display_utils.DOMCMapReaderFactory && L === _display_utils.DOMStandardFontDataFactory && (0, _display_utils.isValidFetchUrl)(w, document.baseURI) && (0, _display_utils.isValidFetchUrl)(q, document.baseURI), ie = s.canvasFactory || new DefaultCanvasFactory({ ownerDocument: le }), Ae = s.filterFactory || new DefaultFilterFactory({ docId: u, ownerDocument: le });
        (0, _util.setVerbosityLevel)(_);
        const ce = { canvasFactory: ie, filterFactory: Ae };
        if (re || (ce.cMapReaderFactory = new M({ baseUrl: w, isCompressed: S }), ce.standardFontDataFactory = new L({ baseUrl: q })), !z) {
          const me = { verbosity: _, port: _worker_options.GlobalWorkerOptions.workerPort };
          z = me.port ? PDFWorker.fromPort(me) : new PDFWorker(me), r._worker = z;
        }
        const ve = { docId: u, apiVersion: "3.7.107", data: I, password: $, disableAutoFetch: N, rangeChunkSize: K, length: Y, docBaseUrl: g, enableXfa: de, evaluatorOptions: { maxImageSize: V, disableFontFace: Q, ignoreErrors: H, isEvalSupported: G, isOffscreenCanvasSupported: X, canvasMaxAreaInBytes: J, fontExtraProperties: U, useSystemFonts: ee, cMapUrl: re ? w : null, standardFontDataUrl: re ? q : null } }, he = { ignoreErrors: H, isEvalSupported: G, disableFontFace: Q, fontExtraProperties: U, enableXfa: de, ownerDocument: le, disableAutoFetch: N, pdfBug: B, styleElement: null };
        return z.promise.then(function() {
          if (r.destroyed)
            throw new Error("Loading aborted");
          const me = _fetchDocument(z, ve), ye = new Promise(function(_e) {
            let Ce;
            W ? Ce = new _transport_stream.PDFDataTransportStream({ length: Y, initialData: W.initialData, progressiveDone: W.progressiveDone, contentDispositionFilename: W.contentDispositionFilename, disableRange: E, disableStream: F }, W) : I || (Ce = createPDFNetworkStream({ url: C, length: Y, httpHeaders: o, withCredentials: D, rangeChunkSize: K, disableRange: E, disableStream: F })), _e(Ce);
          });
          return Promise.all([me, ye]).then(function(_e) {
            let [Ce, Z] = _e;
            if (r.destroyed)
              throw new Error("Loading aborted");
            const pe = new _message_handler.MessageHandler(u, Ce, z.port), xe = new WorkerTransport(pe, r, Z, he, ce);
            r._transport = xe, pe.send("Ready", null);
          });
        }).catch(r._capability.reject), r;
      }
      async function _fetchDocument(s, r) {
        if (s.destroyed)
          throw new Error("Worker was destroyed");
        const u = await s.messageHandler.sendWithPromise("GetDocRequest", r, r.data ? [r.data.buffer] : null);
        if (s.destroyed)
          throw new Error("Worker was destroyed");
        return u;
      }
      function getUrlProp(s) {
        if (s instanceof URL)
          return s.href;
        try {
          return new URL(s, window.location).href;
        } catch {
          if (_is_node.isNodeJS && typeof s == "string")
            return s;
        }
        throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
      }
      function getDataProp(s) {
        if (_is_node.isNodeJS && typeof Buffer < "u" && s instanceof Buffer)
          return (0, _display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`."), new Uint8Array(s);
        if (s instanceof Uint8Array && s.byteLength === s.buffer.byteLength)
          return s;
        if (typeof s == "string")
          return (0, _util.stringToBytes)(s);
        if (typeof s == "object" && !isNaN(s == null ? void 0 : s.length) || (0, _util.isArrayBuffer)(s))
          return new Uint8Array(s);
        throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
      }
      const c = class {
        constructor() {
          this._capability = new _util.PromiseCapability(), this._transport = null, this._worker = null, this.docId = "d" + ut(c, R)._++, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
        }
        get promise() {
          return this._capability.promise;
        }
        async destroy() {
          var r;
          this.destroyed = !0, await ((r = this._transport) === null || r === void 0 ? void 0 : r.destroy()), this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
        }
      };
      let PDFDocumentLoadingTask = c;
      R = new WeakMap(), te(PDFDocumentLoadingTask, R, 0), exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
      class PDFDataRangeTransport {
        constructor(r, u) {
          let C = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], I = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          this.length = r, this.initialData = u, this.progressiveDone = C, this.contentDispositionFilename = I, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
        }
        addRangeListener(r) {
          this._rangeListeners.push(r);
        }
        addProgressListener(r) {
          this._progressListeners.push(r);
        }
        addProgressiveReadListener(r) {
          this._progressiveReadListeners.push(r);
        }
        addProgressiveDoneListener(r) {
          this._progressiveDoneListeners.push(r);
        }
        onDataRange(r, u) {
          for (const C of this._rangeListeners)
            C(r, u);
        }
        onDataProgress(r, u) {
          this._readyCapability.promise.then(() => {
            for (const C of this._progressListeners)
              C(r, u);
          });
        }
        onDataProgressiveRead(r) {
          this._readyCapability.promise.then(() => {
            for (const u of this._progressiveReadListeners)
              u(r);
          });
        }
        onDataProgressiveDone() {
          this._readyCapability.promise.then(() => {
            for (const r of this._progressiveDoneListeners)
              r();
          });
        }
        transportReady() {
          this._readyCapability.resolve();
        }
        requestDataRange(r, u) {
          (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
        }
        abort() {
        }
      }
      exports.PDFDataRangeTransport = PDFDataRangeTransport;
      class PDFDocumentProxy {
        constructor(r, u) {
          this._pdfInfo = r, this._transport = u;
        }
        get annotationStorage() {
          return this._transport.annotationStorage;
        }
        get filterFactory() {
          return this._transport.filterFactory;
        }
        get numPages() {
          return this._pdfInfo.numPages;
        }
        get fingerprints() {
          return this._pdfInfo.fingerprints;
        }
        get isPureXfa() {
          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        get allXfaHtml() {
          return this._transport._htmlForXfa;
        }
        getPage(r) {
          return this._transport.getPage(r);
        }
        getPageIndex(r) {
          return this._transport.getPageIndex(r);
        }
        getDestinations() {
          return this._transport.getDestinations();
        }
        getDestination(r) {
          return this._transport.getDestination(r);
        }
        getPageLabels() {
          return this._transport.getPageLabels();
        }
        getPageLayout() {
          return this._transport.getPageLayout();
        }
        getPageMode() {
          return this._transport.getPageMode();
        }
        getViewerPreferences() {
          return this._transport.getViewerPreferences();
        }
        getOpenAction() {
          return this._transport.getOpenAction();
        }
        getAttachments() {
          return this._transport.getAttachments();
        }
        getJavaScript() {
          return this._transport.getJavaScript();
        }
        getJSActions() {
          return this._transport.getDocJSActions();
        }
        getOutline() {
          return this._transport.getOutline();
        }
        getOptionalContentConfig() {
          return this._transport.getOptionalContentConfig();
        }
        getPermissions() {
          return this._transport.getPermissions();
        }
        getMetadata() {
          return this._transport.getMetadata();
        }
        getMarkInfo() {
          return this._transport.getMarkInfo();
        }
        getData() {
          return this._transport.getData();
        }
        saveDocument() {
          return this._transport.saveDocument();
        }
        getDownloadInfo() {
          return this._transport.downloadInfoCapability.promise;
        }
        cleanup() {
          let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          return this._transport.startCleanup(r || this.isPureXfa);
        }
        destroy() {
          return this.loadingTask.destroy();
        }
        get loadingParams() {
          return this._transport.loadingParams;
        }
        get loadingTask() {
          return this._transport.loadingTask;
        }
        getFieldObjects() {
          return this._transport.getFieldObjects();
        }
        hasJSActions() {
          return this._transport.hasJSActions();
        }
        getCalculationOrderIds() {
          return this._transport.getCalculationOrderIds();
        }
      }
      exports.PDFDocumentProxy = PDFDocumentProxy;
      class PDFPageProxy {
        constructor(r, u, C) {
          te(this, a);
          te(this, x);
          te(this, e, null);
          te(this, t, !1);
          let I = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
          this._pageIndex = r, this._pageInfo = u, this._transport = C, this._stats = I ? new _display_utils.StatTimer() : null, this._pdfBug = I, this.commonObjs = C.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
        }
        get pageNumber() {
          return this._pageIndex + 1;
        }
        get rotate() {
          return this._pageInfo.rotate;
        }
        get ref() {
          return this._pageInfo.ref;
        }
        get userUnit() {
          return this._pageInfo.userUnit;
        }
        get view() {
          return this._pageInfo.view;
        }
        getViewport() {
          let { scale: r, rotation: u = this.rotate, offsetX: C = 0, offsetY: I = 0, dontFlip: o = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new _display_utils.PageViewport({ viewBox: this.view, scale: r, rotation: u, offsetX: C, offsetY: I, dontFlip: o });
        }
        getAnnotations() {
          let { intent: r = "display" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const u = this._transport.getRenderingIntent(r);
          return this._transport.getAnnotations(this._pageIndex, u.renderingIntent);
        }
        getJSActions() {
          return this._transport.getPageJSActions(this._pageIndex);
        }
        get isPureXfa() {
          return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
        }
        async getXfa() {
          var r;
          return ((r = this._transport._htmlForXfa) === null || r === void 0 ? void 0 : r.children[this._pageIndex]) || null;
        }
        render(r) {
          var u, C;
          let { canvasContext: I, viewport: o, intent: D = "display", annotationMode: $ = _util.AnnotationMode.ENABLE, transform: W = null, background: K = null, optionalContentConfigPromise: z = null, annotationCanvasMap: _ = null, pageColors: g = null, printAnnotationStorage: w = null } = r;
          if ((u = arguments[0]) !== null && u !== void 0 && u.canvasFactory)
            throw new Error("render no longer accepts the `canvasFactory`-option, please pass it to the `getDocument`-function instead.");
          (C = this._stats) === null || C === void 0 || C.time("Overall");
          const S = this._transport.getRenderingIntent(D, $, w);
          ue(this, t, !1), ne(this, x, pt).call(this), z || (z = this._transport.getOptionalContentConfig());
          let M = this._intentStates.get(S.cacheKey);
          M || (M = /* @__PURE__ */ Object.create(null), this._intentStates.set(S.cacheKey, M)), M.streamReaderCancelTimeout && (clearTimeout(M.streamReaderCancelTimeout), M.streamReaderCancelTimeout = null);
          const q = !!(S.renderingIntent & _util.RenderingIntentFlag.PRINT);
          if (!M.displayReadyCapability) {
            var L;
            M.displayReadyCapability = new _util.PromiseCapability(), M.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (L = this._stats) === null || L === void 0 || L.time("Page Request"), this._pumpOperatorList(S);
          }
          const H = (X) => {
            var J, Q;
            M.renderTasks.delete(V), (this._maybeCleanupAfterRender || q) && ue(this, t, !0), ne(this, a, rt).call(this, !q), X ? (V.capability.reject(X), this._abortOperatorList({ intentState: M, reason: X instanceof Error ? X : new Error(X) })) : V.capability.resolve(), (J = this._stats) === null || J === void 0 || J.timeEnd("Rendering"), (Q = this._stats) === null || Q === void 0 || Q.timeEnd("Overall");
          }, V = new InternalRenderTask({ callback: H, params: { canvasContext: I, viewport: o, transform: W, background: K }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: _, operatorList: M.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !q, pdfBug: this._pdfBug, pageColors: g });
          (M.renderTasks || (M.renderTasks = /* @__PURE__ */ new Set())).add(V);
          const G = V.task;
          return Promise.all([M.displayReadyCapability.promise, z]).then((X) => {
            var J;
            let [Q, U] = X;
            T(this, t) ? H() : ((J = this._stats) === null || J === void 0 || J.time("Rendering"), V.initializeGraphics({ transparency: Q, optionalContentConfig: U }), V.operatorListChanged());
          }).catch(H), G;
        }
        getOperatorList() {
          let { intent: r = "display", annotationMode: u = _util.AnnotationMode.ENABLE, printAnnotationStorage: C = null } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const I = this._transport.getRenderingIntent(r, u, C, !0);
          let o, D = this._intentStates.get(I.cacheKey);
          if (D || (D = /* @__PURE__ */ Object.create(null), this._intentStates.set(I.cacheKey, D)), !D.opListReadCapability) {
            var $;
            o = /* @__PURE__ */ Object.create(null), o.operatorListChanged = function() {
              D.operatorList.lastChunk && (D.opListReadCapability.resolve(D.operatorList), D.renderTasks.delete(o));
            }, D.opListReadCapability = new _util.PromiseCapability(), (D.renderTasks || (D.renderTasks = /* @__PURE__ */ new Set())).add(o), D.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, ($ = this._stats) === null || $ === void 0 || $.time("Page Request"), this._pumpOperatorList(I);
          }
          return D.opListReadCapability.promise;
        }
        streamTextContent() {
          let { includeMarkedContent: r = !1, disableNormalization: u = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: r === !0, disableNormalization: u === !0 }, { highWaterMark: 100, size: (C) => C.items.length });
        }
        getTextContent() {
          let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (this._transport._htmlForXfa)
            return this.getXfa().then((C) => _xfa_text.XfaText.textContent(C));
          const u = this.streamTextContent(r);
          return new Promise(function(C, I) {
            const o = u.getReader(), D = { items: [], styles: /* @__PURE__ */ Object.create(null) };
            (function $() {
              o.read().then(function(W) {
                let { value: K, done: z } = W;
                z ? C(D) : (Object.assign(D.styles, K.styles), D.items.push(...K.items), $());
              }, I);
            })();
          });
        }
        getStructTree() {
          return this._transport.getStructTree(this._pageIndex);
        }
        _destroy() {
          this.destroyed = !0;
          const r = [];
          for (const u of this._intentStates.values())
            if (this._abortOperatorList({ intentState: u, reason: new Error("Page was destroyed."), force: !0 }), !u.opListReadCapability)
              for (const C of u.renderTasks)
                r.push(C.completed), C.cancel();
          return this.objs.clear(), ue(this, t, !1), ne(this, x, pt).call(this), Promise.all(r);
        }
        cleanup() {
          let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          ue(this, t, !0);
          const u = ne(this, a, rt).call(this, !1);
          return r && u && this._stats && (this._stats = new _display_utils.StatTimer()), u;
        }
        _startRenderPage(r, u) {
          var C, I;
          const o = this._intentStates.get(u);
          o && ((C = this._stats) === null || C === void 0 || C.timeEnd("Page Request"), (I = o.displayReadyCapability) === null || I === void 0 || I.resolve(r));
        }
        _renderPageChunk(r, u) {
          for (let C = 0, I = r.length; C < I; C++)
            u.operatorList.fnArray.push(r.fnArray[C]), u.operatorList.argsArray.push(r.argsArray[C]);
          u.operatorList.lastChunk = r.lastChunk, u.operatorList.separateAnnots = r.separateAnnots;
          for (const C of u.renderTasks)
            C.operatorListChanged();
          r.lastChunk && ne(this, a, rt).call(this, !0);
        }
        _pumpOperatorList(r) {
          let { renderingIntent: u, cacheKey: C, annotationStorageMap: I } = r;
          const o = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: u, cacheKey: C, annotationStorage: I }).getReader(), D = this._intentStates.get(C);
          D.streamReader = o;
          const $ = () => {
            o.read().then((W) => {
              let { value: K, done: z } = W;
              z ? D.streamReader = null : this._transport.destroyed || (this._renderPageChunk(K, D), $());
            }, (W) => {
              if (D.streamReader = null, !this._transport.destroyed) {
                if (D.operatorList) {
                  D.operatorList.lastChunk = !0;
                  for (const K of D.renderTasks)
                    K.operatorListChanged();
                  ne(this, a, rt).call(this, !0);
                }
                if (D.displayReadyCapability)
                  D.displayReadyCapability.reject(W);
                else {
                  if (!D.opListReadCapability)
                    throw W;
                  D.opListReadCapability.reject(W);
                }
              }
            });
          };
          $();
        }
        _abortOperatorList(r) {
          let { intentState: u, reason: C, force: I = !1 } = r;
          if (u.streamReader) {
            if (u.streamReaderCancelTimeout && (clearTimeout(u.streamReaderCancelTimeout), u.streamReaderCancelTimeout = null), !I) {
              if (u.renderTasks.size > 0)
                return;
              if (C instanceof _display_utils.RenderingCancelledException) {
                let o = RENDERING_CANCELLED_TIMEOUT;
                C.extraDelay > 0 && C.extraDelay < 1e3 && (o += C.extraDelay), u.streamReaderCancelTimeout = setTimeout(() => {
                  u.streamReaderCancelTimeout = null, this._abortOperatorList({ intentState: u, reason: C, force: !0 });
                }, o);
                return;
              }
            }
            if (u.streamReader.cancel(new _util.AbortException(C.message)).catch(() => {
            }), u.streamReader = null, !this._transport.destroyed) {
              for (const [o, D] of this._intentStates)
                if (D === u) {
                  this._intentStates.delete(o);
                  break;
                }
              this.cleanup();
            }
          }
        }
        get stats() {
          return this._stats;
        }
      }
      e = new WeakMap(), t = new WeakMap(), a = new WeakSet(), rt = function() {
        let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (ne(this, x, pt).call(this), !T(this, t))
          return !1;
        if (r)
          return ue(this, e, setTimeout(() => {
            ue(this, e, null), ne(this, a, rt).call(this, !1);
          }, DELAYED_CLEANUP_TIMEOUT)), !1;
        for (const { renderTasks: u, operatorList: C } of this._intentStates.values())
          if (u.size > 0 || !C.lastChunk)
            return !1;
        return this._intentStates.clear(), this.objs.clear(), ue(this, t, !1), !0;
      }, x = new WeakSet(), pt = function() {
        T(this, e) && (clearTimeout(T(this, e)), ue(this, e, null));
      }, exports.PDFPageProxy = PDFPageProxy;
      class LoopbackPort {
        constructor() {
          te(this, f, /* @__PURE__ */ new Set());
          te(this, l, Promise.resolve());
        }
        postMessage(r, u) {
          const C = { data: structuredClone(r, null) };
          T(this, l).then(() => {
            for (const I of T(this, f))
              I.call(this, C);
          });
        }
        addEventListener(r, u) {
          T(this, f).add(u);
        }
        removeEventListener(r, u) {
          T(this, f).delete(u);
        }
        terminate() {
          T(this, f).clear();
        }
      }
      f = new WeakMap(), l = new WeakMap(), exports.LoopbackPort = LoopbackPort;
      const PDFWorkerUtil = { isWorkerDisabled: !1, fallbackWorkerSrc: null, fakeWorkerId: 0 };
      if (exports.PDFWorkerUtil = PDFWorkerUtil, _is_node.isNodeJS && typeof commonjsRequire == "function")
        PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
      else if (typeof document == "object") {
        var _document, _document$currentScri;
        const s = (_document = document) === null || _document === void 0 || (_document$currentScri = _document.currentScript) === null || _document$currentScri === void 0 ? void 0 : _document$currentScri.src;
        s && (PDFWorkerUtil.fallbackWorkerSrc = s.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
      }
      PDFWorkerUtil.isSameOrigin = function(s, r) {
        let u;
        try {
          if (u = new URL(s), !u.origin || u.origin === "null")
            return !1;
        } catch {
          return !1;
        }
        const C = new URL(r, u);
        return u.origin === C.origin;
      }, PDFWorkerUtil.createCDNWrapper = function(s) {
        const r = `importScripts("${s}");`;
        return URL.createObjectURL(new Blob([r]));
      };
      const _PDFWorker = class {
        constructor() {
          let { name: s = null, port: r = null, verbosity: u = (0, _util.getVerbosityLevel)() } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (r && T(_PDFWorker, v).has(r))
            throw new Error("Cannot use more than one PDFWorker per port.");
          this.name = s, this.destroyed = !1, this.verbosity = u, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, r ? (T(_PDFWorker, v).set(r, this), this._initializeFromPort(r)) : this._initialize();
        }
        get promise() {
          return this._readyCapability.promise;
        }
        get port() {
          return this._port;
        }
        get messageHandler() {
          return this._messageHandler;
        }
        _initializeFromPort(s) {
          this._port = s, this._messageHandler = new _message_handler.MessageHandler("main", "worker", s), this._messageHandler.on("ready", function() {
          }), this._readyCapability.resolve(), this._messageHandler.send("configure", { verbosity: this.verbosity });
        }
        _initialize() {
          if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
            let { workerSrc: s } = _PDFWorker;
            try {
              PDFWorkerUtil.isSameOrigin(window.location.href, s) || (s = PDFWorkerUtil.createCDNWrapper(new URL(s, window.location).href));
              const r = new Worker(s), u = new _message_handler.MessageHandler("main", "worker", r), C = () => {
                r.removeEventListener("error", I), u.destroy(), r.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
              }, I = () => {
                this._webWorker || C();
              };
              r.addEventListener("error", I), u.on("test", (D) => {
                r.removeEventListener("error", I), this.destroyed ? C() : D ? (this._messageHandler = u, this._port = r, this._webWorker = r, this._readyCapability.resolve(), u.send("configure", { verbosity: this.verbosity })) : (this._setupFakeWorker(), u.destroy(), r.terminate());
              }), u.on("ready", (D) => {
                if (r.removeEventListener("error", I), this.destroyed)
                  C();
                else
                  try {
                    o();
                  } catch {
                    this._setupFakeWorker();
                  }
              });
              const o = () => {
                const D = new Uint8Array();
                u.send("test", D, [D.buffer]);
              };
              o();
              return;
            } catch {
              (0, _util.info)("The worker has been disabled.");
            }
          }
          this._setupFakeWorker();
        }
        _setupFakeWorker() {
          PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((s) => {
            if (this.destroyed) {
              this._readyCapability.reject(new Error("Worker was destroyed"));
              return;
            }
            const r = new LoopbackPort();
            this._port = r;
            const u = "fake" + PDFWorkerUtil.fakeWorkerId++, C = new _message_handler.MessageHandler(u + "_worker", u, r);
            s.setup(C, r);
            const I = new _message_handler.MessageHandler(u, u + "_worker", r);
            this._messageHandler = I, this._readyCapability.resolve(), I.send("configure", { verbosity: this.verbosity });
          }).catch((s) => {
            this._readyCapability.reject(new Error(`Setting up fake worker failed: "${s.message}".`));
          });
        }
        destroy() {
          this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), T(_PDFWorker, v).delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
        }
        static fromPort(s) {
          if (s == null || !s.port)
            throw new Error("PDFWorker.fromPort - invalid method signature.");
          return T(this, v).has(s.port) ? T(this, v).get(s.port) : new _PDFWorker(s);
        }
        static get workerSrc() {
          if (_worker_options.GlobalWorkerOptions.workerSrc)
            return _worker_options.GlobalWorkerOptions.workerSrc;
          if (PDFWorkerUtil.fallbackWorkerSrc !== null)
            return _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }
        static get _mainThreadWorkerMessageHandler() {
          try {
            var s;
            return ((s = globalThis.pdfjsWorker) === null || s === void 0 ? void 0 : s.WorkerMessageHandler) || null;
          } catch {
            return null;
          }
        }
        static get _setupFakeWorkerGlobal() {
          const loader = async () => {
            const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
            if (mainWorkerMessageHandler)
              return mainWorkerMessageHandler;
            if (_is_node.isNodeJS && typeof commonjsRequire == "function") {
              const worker = eval("require")(this.workerSrc);
              return worker.WorkerMessageHandler;
            }
            return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler;
          };
          return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
        }
      };
      let PDFWorker = _PDFWorker;
      v = new WeakMap(), te(PDFWorker, v, /* @__PURE__ */ new WeakMap()), exports.PDFWorker = PDFWorker;
      class WorkerTransport {
        constructor(r, u, C, I, o) {
          te(this, d);
          te(this, A, /* @__PURE__ */ new Map());
          te(this, k, /* @__PURE__ */ new Map());
          te(this, j, /* @__PURE__ */ new Map());
          this.messageHandler = r, this.loadingTask = u, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({ ownerDocument: I.ownerDocument, styleElement: I.styleElement }), this._params = I, this.canvasFactory = o.canvasFactory, this.filterFactory = o.filterFactory, this.cMapReaderFactory = o.cMapReaderFactory, this.standardFontDataFactory = o.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this._networkStream = C, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
        }
        get annotationStorage() {
          return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
        }
        getRenderingIntent(r) {
          let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _util.AnnotationMode.ENABLE, C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, I = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], o = _util.RenderingIntentFlag.DISPLAY, D = null;
          switch (r) {
            case "any":
              o = _util.RenderingIntentFlag.ANY;
              break;
            case "display":
              break;
            case "print":
              o = _util.RenderingIntentFlag.PRINT;
              break;
            default:
              (0, _util.warn)(`getRenderingIntent - invalid intent: ${r}`);
          }
          switch (u) {
            case _util.AnnotationMode.DISABLE:
              o += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
              break;
            case _util.AnnotationMode.ENABLE:
              break;
            case _util.AnnotationMode.ENABLE_FORMS:
              o += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
              break;
            case _util.AnnotationMode.ENABLE_STORAGE:
              o += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, D = (o & _util.RenderingIntentFlag.PRINT && C instanceof _annotation_storage.PrintAnnotationStorage ? C : this.annotationStorage).serializable;
              break;
            default:
              (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${u}`);
          }
          return I && (o += _util.RenderingIntentFlag.OPLIST), { renderingIntent: o, cacheKey: `${o}_${_annotation_storage.AnnotationStorage.getHash(D)}`, annotationStorageMap: D };
        }
        destroy() {
          if (this.destroyCapability)
            return this.destroyCapability.promise;
          this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
          const r = [];
          for (const C of T(this, k).values())
            r.push(C._destroy());
          T(this, k).clear(), T(this, j).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
          const u = this.messageHandler.sendWithPromise("Terminate", null);
          return r.push(u), Promise.all(r).then(() => {
            this.commonObjs.clear(), this.fontLoader.clear(), T(this, A).clear(), this.filterFactory.destroy(), this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
          }, this.destroyCapability.reject), this.destroyCapability.promise;
        }
        setupMessageHandler() {
          const { messageHandler: r, loadingTask: u } = this;
          r.on("GetReader", (C, I) => {
            (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (o) => {
              this._lastProgress = { loaded: o.loaded, total: o.total };
            }, I.onPull = () => {
              this._fullReader.read().then(function(o) {
                let { value: D, done: $ } = o;
                $ ? I.close() : ((0, _util.assert)(D instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), I.enqueue(new Uint8Array(D), 1, [D]));
              }).catch((o) => {
                I.error(o);
              });
            }, I.onCancel = (o) => {
              this._fullReader.cancel(o), I.ready.catch((D) => {
                if (!this.destroyed)
                  throw D;
              });
            };
          }), r.on("ReaderHeadersReady", (C) => {
            const I = new _util.PromiseCapability(), o = this._fullReader;
            return o.headersReady.then(() => {
              if (!o.isStreamingSupported || !o.isRangeSupported) {
                if (this._lastProgress) {
                  var D;
                  (D = u.onProgress) === null || D === void 0 || D.call(u, this._lastProgress);
                }
                o.onProgress = ($) => {
                  var W;
                  (W = u.onProgress) === null || W === void 0 || W.call(u, { loaded: $.loaded, total: $.total });
                };
              }
              I.resolve({ isStreamingSupported: o.isStreamingSupported, isRangeSupported: o.isRangeSupported, contentLength: o.contentLength });
            }, I.reject), I.promise;
          }), r.on("GetRangeReader", (C, I) => {
            (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
            const o = this._networkStream.getRangeReader(C.begin, C.end);
            o ? (I.onPull = () => {
              o.read().then(function(D) {
                let { value: $, done: W } = D;
                W ? I.close() : ((0, _util.assert)($ instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), I.enqueue(new Uint8Array($), 1, [$]));
              }).catch((D) => {
                I.error(D);
              });
            }, I.onCancel = (D) => {
              o.cancel(D), I.ready.catch(($) => {
                if (!this.destroyed)
                  throw $;
              });
            }) : I.close();
          }), r.on("GetDoc", (C) => {
            let { pdfInfo: I } = C;
            this._numPages = I.numPages, this._htmlForXfa = I.htmlForXfa, delete I.htmlForXfa, u._capability.resolve(new PDFDocumentProxy(I, this));
          }), r.on("DocException", function(C) {
            let I;
            switch (C.name) {
              case "PasswordException":
                I = new _util.PasswordException(C.message, C.code);
                break;
              case "InvalidPDFException":
                I = new _util.InvalidPDFException(C.message);
                break;
              case "MissingPDFException":
                I = new _util.MissingPDFException(C.message);
                break;
              case "UnexpectedResponseException":
                I = new _util.UnexpectedResponseException(C.message, C.status);
                break;
              case "UnknownErrorException":
                I = new _util.UnknownErrorException(C.message, C.details);
                break;
              default:
                (0, _util.unreachable)("DocException - expected a valid Error.");
            }
            u._capability.reject(I);
          }), r.on("PasswordRequest", (C) => {
            if (this._passwordCapability = new _util.PromiseCapability(), u.onPassword) {
              const I = (o) => {
                o instanceof Error ? this._passwordCapability.reject(o) : this._passwordCapability.resolve({ password: o });
              };
              try {
                u.onPassword(I, C.code);
              } catch (o) {
                this._passwordCapability.reject(o);
              }
            } else
              this._passwordCapability.reject(new _util.PasswordException(C.message, C.code));
            return this._passwordCapability.promise;
          }), r.on("DataLoaded", (C) => {
            var I;
            (I = u.onProgress) === null || I === void 0 || I.call(u, { loaded: C.length, total: C.length }), this.downloadInfoCapability.resolve(C);
          }), r.on("StartRenderPage", (C) => {
            this.destroyed || T(this, k).get(C.pageIndex)._startRenderPage(C.transparency, C.cacheKey);
          }), r.on("commonobj", (C) => {
            var I;
            let [o, D, $] = C;
            if (!this.destroyed && !this.commonObjs.has(o))
              switch (D) {
                case "Font":
                  const W = this._params;
                  if ("error" in $) {
                    const _ = $.error;
                    (0, _util.warn)(`Error during font loading: ${_}`), this.commonObjs.resolve(o, _);
                    break;
                  }
                  const K = W.pdfBug && (I = globalThis.FontInspector) !== null && I !== void 0 && I.enabled ? (_, g) => globalThis.FontInspector.fontAdded(_, g) : null, z = new _font_loader.FontFaceObject($, { isEvalSupported: W.isEvalSupported, disableFontFace: W.disableFontFace, ignoreErrors: W.ignoreErrors, inspectFont: K });
                  this.fontLoader.bind(z).catch((_) => r.sendWithPromise("FontFallback", { id: o })).finally(() => {
                    !W.fontExtraProperties && z.data && (z.data = null), this.commonObjs.resolve(o, z);
                  });
                  break;
                case "FontPath":
                case "Image":
                case "Pattern":
                  this.commonObjs.resolve(o, $);
                  break;
                default:
                  throw new Error(`Got unknown common object type ${D}`);
              }
          }), r.on("obj", (C) => {
            let [I, o, D, $] = C;
            if (this.destroyed)
              return;
            const W = T(this, k).get(o);
            if (!W.objs.has(I))
              switch (D) {
                case "Image":
                  if (W.objs.resolve(I, $), $) {
                    let z;
                    if ($.bitmap) {
                      const { width: _, height: g } = $;
                      z = _ * g * 4;
                    } else {
                      var K;
                      z = ((K = $.data) === null || K === void 0 ? void 0 : K.length) || 0;
                    }
                    z > _util.MAX_IMAGE_SIZE_TO_CACHE && (W._maybeCleanupAfterRender = !0);
                  }
                  break;
                case "Pattern":
                  W.objs.resolve(I, $);
                  break;
                default:
                  throw new Error(`Got unknown object type ${D}`);
              }
          }), r.on("DocProgress", (C) => {
            var I;
            this.destroyed || (I = u.onProgress) === null || I === void 0 || I.call(u, { loaded: C.loaded, total: C.total });
          }), r.on("FetchBuiltInCMap", (C) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(C) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), r.on("FetchStandardFontData", (C) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(C) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
        }
        getData() {
          return this.messageHandler.sendWithPromise("GetData", null);
        }
        saveDocument() {
          var r;
          return this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."), this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: this.annotationStorage.serializable, filename: ((r = this._fullReader) === null || r === void 0 ? void 0 : r.filename) ?? null }).finally(() => {
            this.annotationStorage.resetModified();
          });
        }
        getPage(r) {
          if (!Number.isInteger(r) || r <= 0 || r > this._numPages)
            return Promise.reject(new Error("Invalid page request."));
          const u = r - 1, C = T(this, j).get(u);
          if (C)
            return C;
          const I = this.messageHandler.sendWithPromise("GetPage", { pageIndex: u }).then((o) => {
            if (this.destroyed)
              throw new Error("Transport destroyed");
            const D = new PDFPageProxy(u, o, this, this._params.pdfBug);
            return T(this, k).set(u, D), D;
          });
          return T(this, j).set(u, I), I;
        }
        getPageIndex(r) {
          return typeof r != "object" || r === null || !Number.isInteger(r.num) || r.num < 0 || !Number.isInteger(r.gen) || r.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", { num: r.num, gen: r.gen });
        }
        getAnnotations(r, u) {
          return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: r, intent: u });
        }
        getFieldObjects() {
          return ne(this, d, At).call(this, "GetFieldObjects");
        }
        hasJSActions() {
          return ne(this, d, At).call(this, "HasJSActions");
        }
        getCalculationOrderIds() {
          return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        }
        getDestinations() {
          return this.messageHandler.sendWithPromise("GetDestinations", null);
        }
        getDestination(r) {
          return typeof r != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: r });
        }
        getPageLabels() {
          return this.messageHandler.sendWithPromise("GetPageLabels", null);
        }
        getPageLayout() {
          return this.messageHandler.sendWithPromise("GetPageLayout", null);
        }
        getPageMode() {
          return this.messageHandler.sendWithPromise("GetPageMode", null);
        }
        getViewerPreferences() {
          return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
        }
        getOpenAction() {
          return this.messageHandler.sendWithPromise("GetOpenAction", null);
        }
        getAttachments() {
          return this.messageHandler.sendWithPromise("GetAttachments", null);
        }
        getJavaScript() {
          return this.messageHandler.sendWithPromise("GetJavaScript", null);
        }
        getDocJSActions() {
          return this.messageHandler.sendWithPromise("GetDocJSActions", null);
        }
        getPageJSActions(r) {
          return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: r });
        }
        getStructTree(r) {
          return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: r });
        }
        getOutline() {
          return this.messageHandler.sendWithPromise("GetOutline", null);
        }
        getOptionalContentConfig() {
          return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((r) => new _optional_content_config.OptionalContentConfig(r));
        }
        getPermissions() {
          return this.messageHandler.sendWithPromise("GetPermissions", null);
        }
        getMetadata() {
          const r = "GetMetadata", u = T(this, A).get(r);
          if (u)
            return u;
          const C = this.messageHandler.sendWithPromise(r, null).then((I) => {
            var o, D;
            return { info: I[0], metadata: I[1] ? new _metadata.Metadata(I[1]) : null, contentDispositionFilename: ((o = this._fullReader) === null || o === void 0 ? void 0 : o.filename) ?? null, contentLength: ((D = this._fullReader) === null || D === void 0 ? void 0 : D.contentLength) ?? null };
          });
          return T(this, A).set(r, C), C;
        }
        getMarkInfo() {
          return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        }
        async startCleanup() {
          let r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (!this.destroyed) {
            await this.messageHandler.sendWithPromise("Cleanup", null);
            for (const u of T(this, k).values())
              if (!u.cleanup())
                throw new Error(`startCleanup: Page ${u.pageNumber} is currently rendering.`);
            this.commonObjs.clear(), r || this.fontLoader.clear(), T(this, A).clear(), this.filterFactory.destroy(!0);
          }
        }
        get loadingParams() {
          const { disableAutoFetch: r, enableXfa: u } = this._params;
          return (0, _util.shadow)(this, "loadingParams", { disableAutoFetch: r, enableXfa: u });
        }
      }
      A = new WeakMap(), k = new WeakMap(), j = new WeakMap(), d = new WeakSet(), At = function(r) {
        let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const C = T(this, A).get(r);
        if (C)
          return C;
        const I = this.messageHandler.sendWithPromise(r, u);
        return T(this, A).set(r, I), I;
      };
      class PDFObjects {
        constructor() {
          te(this, P);
          te(this, h, /* @__PURE__ */ Object.create(null));
        }
        get(r) {
          let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (u) {
            const I = ne(this, P, _t).call(this, r);
            return I.capability.promise.then(() => u(I.data)), null;
          }
          const C = T(this, h)[r];
          if (C == null || !C.capability.settled)
            throw new Error(`Requesting object that isn't resolved yet ${r}.`);
          return C.data;
        }
        has(r) {
          const u = T(this, h)[r];
          return (u == null ? void 0 : u.capability.settled) || !1;
        }
        resolve(r) {
          let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const C = ne(this, P, _t).call(this, r);
          C.data = u, C.capability.resolve();
        }
        clear() {
          for (const u in T(this, h)) {
            var r;
            const { data: C } = T(this, h)[u];
            C == null || (r = C.bitmap) === null || r === void 0 || r.close();
          }
          ue(this, h, /* @__PURE__ */ Object.create(null));
        }
      }
      h = new WeakMap(), P = new WeakSet(), _t = function(r) {
        return T(this, h)[r] || (T(this, h)[r] = { capability: new _util.PromiseCapability(), data: null });
      };
      class RenderTask {
        constructor(r) {
          te(this, i, null);
          ue(this, i, r), this.onContinue = null;
        }
        get promise() {
          return T(this, i).capability.promise;
        }
        cancel() {
          let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          T(this, i).cancel(null, r);
        }
        get separateAnnots() {
          const { separateAnnots: r } = T(this, i).operatorList;
          if (!r)
            return !1;
          const { annotationCanvasMap: u } = T(this, i);
          return r.form || r.canvas && (u == null ? void 0 : u.size) > 0;
        }
      }
      i = new WeakMap(), exports.RenderTask = RenderTask;
      const n = class {
        constructor(r) {
          let { callback: u, params: C, objs: I, commonObjs: o, annotationCanvasMap: D, operatorList: $, pageIndex: W, canvasFactory: K, filterFactory: z, useRequestAnimationFrame: _ = !1, pdfBug: g = !1, pageColors: w = null } = r;
          this.callback = u, this.params = C, this.objs = I, this.commonObjs = o, this.annotationCanvasMap = D, this.operatorListIdx = null, this.operatorList = $, this._pageIndex = W, this.canvasFactory = K, this.filterFactory = z, this._pdfBug = g, this.pageColors = w, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = _ === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = C.canvasContext.canvas;
        }
        get completed() {
          return this.capability.promise.catch(function() {
          });
        }
        initializeGraphics(r) {
          var u, C;
          let { transparency: I = !1, optionalContentConfig: o } = r;
          if (this.cancelled)
            return;
          if (this._canvas) {
            if (T(n, m).has(this._canvas))
              throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
            T(n, m).add(this._canvas);
          }
          this._pdfBug && (u = globalThis.StepperManager) !== null && u !== void 0 && u.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
          const { canvasContext: D, viewport: $, transform: W, background: K } = this.params;
          this.gfx = new _canvas.CanvasGraphics(D, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: o }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({ transform: W, viewport: $, transparency: I, background: K }), this.operatorListIdx = 0, this.graphicsReady = !0, (C = this.graphicsReadyCallback) === null || C === void 0 || C.call(this);
        }
        cancel() {
          var r;
          let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          this.running = !1, this.cancelled = !0, (r = this.gfx) === null || r === void 0 || r.endDrawing(), this._canvas && T(n, m).delete(this._canvas), this.callback(u || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas", C));
        }
        operatorListChanged() {
          var r;
          this.graphicsReady ? ((r = this.stepper) === null || r === void 0 || r.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
        }
        _continue() {
          this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
        }
        _scheduleNext() {
          this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
            this._nextBound().catch(this._cancelBound);
          }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
        }
        async _next() {
          this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(this.pageColors), this._canvas && T(n, m).delete(this._canvas), this.callback())));
        }
      };
      let InternalRenderTask = n;
      m = new WeakMap(), te(InternalRenderTask, m, /* @__PURE__ */ new WeakSet());
      const version = "3.7.107";
      exports.version = version;
      const build = "036f855dc";
      exports.build = build;
    }, (R, c, e) => {
      var f, l, v, Wt, k;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PrintAnnotationStorage = c.AnnotationStorage = void 0;
      var t = e(1), a = e(140), b = e(144);
      class x {
        constructor() {
          te(this, v);
          te(this, f, !1);
          te(this, l, /* @__PURE__ */ new Map());
          this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
        }
        getValue(d, y) {
          const h = T(this, l).get(d);
          return h === void 0 ? y : Object.assign(y, h);
        }
        getRawValue(d) {
          return T(this, l).get(d);
        }
        remove(d) {
          if (T(this, l).delete(d), T(this, l).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
            for (const y of T(this, l).values())
              if (y instanceof a.AnnotationEditor)
                return;
            this.onAnnotationEditor(null);
          }
        }
        setValue(d, y) {
          const h = T(this, l).get(d);
          let P = !1;
          if (h !== void 0)
            for (const [p, i] of Object.entries(y))
              h[p] !== i && (P = !0, h[p] = i);
          else
            P = !0, T(this, l).set(d, y);
          P && ne(this, v, Wt).call(this), y instanceof a.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(y.constructor._type);
        }
        has(d) {
          return T(this, l).has(d);
        }
        getAll() {
          return T(this, l).size > 0 ? (0, t.objectFromMap)(T(this, l)) : null;
        }
        setAll(d) {
          for (const [y, h] of Object.entries(d))
            this.setValue(y, h);
        }
        get size() {
          return T(this, l).size;
        }
        resetModified() {
          T(this, f) && (ue(this, f, !1), typeof this.onResetModified == "function" && this.onResetModified());
        }
        get print() {
          return new O(this);
        }
        get serializable() {
          if (T(this, l).size === 0)
            return null;
          const d = /* @__PURE__ */ new Map();
          for (const [y, h] of T(this, l)) {
            const P = h instanceof a.AnnotationEditor ? h.serialize() : h;
            P && d.set(y, P);
          }
          return d;
        }
        static getHash(d) {
          if (!d)
            return "";
          const y = new b.MurmurHash3_64();
          for (const [h, P] of d)
            y.update(`${h}:${JSON.stringify(P)}`);
          return y.hexdigest();
        }
      }
      f = new WeakMap(), l = new WeakMap(), v = new WeakSet(), Wt = function() {
        T(this, f) || (ue(this, f, !0), typeof this.onSetModified == "function" && this.onSetModified());
      }, c.AnnotationStorage = x;
      class O extends x {
        constructor(y) {
          super();
          te(this, k, null);
          ue(this, k, structuredClone(y.serializable));
        }
        get print() {
          (0, t.unreachable)("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
          return T(this, k);
        }
      }
      k = new WeakMap(), c.PrintAnnotationStorage = O;
    }, (R, c, e) => {
      var x, O, f, l, v, A;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.AnnotationEditor = void 0;
      var t = e(141), a = e(1);
      const k = class {
        constructor(d) {
          te(this, x, this.focusin.bind(this));
          te(this, O, this.focusout.bind(this));
          te(this, f, !1);
          te(this, l, !1);
          te(this, v, !1);
          Ie(this, "_uiManager", null);
          te(this, A, k._zIndex++);
          this.constructor === k && (0, a.unreachable)("Cannot initialize AnnotationEditor."), this.parent = d.parent, this.id = d.id, this.width = this.height = null, this.pageIndex = d.parent.pageIndex, this.name = d.name, this.div = null, this._uiManager = d.uiManager;
          const { rotation: y, rawDims: { pageWidth: h, pageHeight: P, pageX: p, pageY: i } } = this.parent.viewport;
          this.rotation = y, this.pageRotation = (360 + y - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [h, P], this.pageTranslation = [p, i];
          const [m, n] = this.parentDimensions;
          this.x = d.x / m, this.y = d.y / n, this.isAttachedToDOM = !1;
        }
        static get _defaultLineColor() {
          return (0, a.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
        }
        addCommands(d) {
          this._uiManager.addCommands(d);
        }
        get currentLayer() {
          return this._uiManager.currentLayer;
        }
        setInBackground() {
          this.div.style.zIndex = 0;
        }
        setInForeground() {
          this.div.style.zIndex = T(this, A);
        }
        setParent(d) {
          d !== null && (this.pageIndex = d.pageIndex, this.pageDimensions = d.pageDimensions), this.parent = d;
        }
        focusin(d) {
          T(this, f) ? ue(this, f, !1) : this.parent.setSelected(this);
        }
        focusout(d) {
          var y;
          if (!this.isAttachedToDOM)
            return;
          const h = d.relatedTarget;
          (h == null || !h.closest(`#${this.id}`)) && (d.preventDefault(), (y = this.parent) !== null && y !== void 0 && y.isMultipleSelection || this.commitOrRemove());
        }
        commitOrRemove() {
          this.isEmpty() ? this.remove() : this.commit();
        }
        commit() {
          this.addToAnnotationStorage();
        }
        addToAnnotationStorage() {
          this._uiManager.addToAnnotationStorage(this);
        }
        dragstart(d) {
          const y = this.parent.div.getBoundingClientRect();
          this.startX = d.clientX - y.x, this.startY = d.clientY - y.y, d.dataTransfer.setData("text/plain", this.id), d.dataTransfer.effectAllowed = "move";
        }
        setAt(d, y, h, P) {
          const [p, i] = this.parentDimensions;
          [h, P] = this.screenToPageTranslation(h, P), this.x = (d + h) / p, this.y = (y + P) / i, this.div.style.left = 100 * this.x + "%", this.div.style.top = 100 * this.y + "%";
        }
        translate(d, y) {
          const [h, P] = this.parentDimensions;
          [d, y] = this.screenToPageTranslation(d, y), this.x += d / h, this.y += y / P, this.div.style.left = 100 * this.x + "%", this.div.style.top = 100 * this.y + "%";
        }
        screenToPageTranslation(d, y) {
          switch (this.parentRotation) {
            case 90:
              return [y, -d];
            case 180:
              return [-d, -y];
            case 270:
              return [-y, d];
            default:
              return [d, y];
          }
        }
        get parentScale() {
          return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
          const { realScale: d } = this._uiManager.viewParameters, [y, h] = this.pageDimensions;
          return [y * d, h * d];
        }
        setDims(d, y) {
          const [h, P] = this.parentDimensions;
          this.div.style.width = 100 * d / h + "%", this.div.style.height = 100 * y / P + "%";
        }
        fixDims() {
          const { style: d } = this.div, { height: y, width: h } = d, P = h.endsWith("%"), p = y.endsWith("%");
          if (P && p)
            return;
          const [i, m] = this.parentDimensions;
          P || (d.width = 100 * parseFloat(h) / i + "%"), p || (d.height = 100 * parseFloat(y) / m + "%");
        }
        getInitialTranslation() {
          return [0, 0];
        }
        render() {
          this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", T(this, x)), this.div.addEventListener("focusout", T(this, O));
          const [d, y] = this.getInitialTranslation();
          return this.translate(d, y), (0, t.bindEvents)(this, this.div, ["dragstart", "pointerdown"]), this.div;
        }
        pointerdown(d) {
          const { isMac: y } = a.FeatureTest.platform;
          d.button !== 0 || d.ctrlKey && y ? d.preventDefault() : (d.ctrlKey && !y || d.shiftKey || d.metaKey && y ? this.parent.toggleSelected(this) : this.parent.setSelected(this), ue(this, f, !0));
        }
        getRect(d, y) {
          const h = this.parentScale, [P, p] = this.pageDimensions, [i, m] = this.pageTranslation, n = d / h, s = y / h, r = this.x * P, u = this.y * p, C = this.width * P, I = this.height * p;
          switch (this.rotation) {
            case 0:
              return [r + n + i, p - u - s - I + m, r + n + C + i, p - u - s + m];
            case 90:
              return [r + s + i, p - u + n + m, r + s + I + i, p - u + n + C + m];
            case 180:
              return [r - n - C + i, p - u + s + m, r - n + i, p - u + s + I + m];
            case 270:
              return [r - s - I + i, p - u - n - C + m, r - s + i, p - u - n + m];
            default:
              throw new Error("Invalid rotation");
          }
        }
        getRectInCurrentCoords(d, y) {
          const [h, P, p, i] = d, m = p - h, n = i - P;
          switch (this.rotation) {
            case 0:
              return [h, y - i, m, n];
            case 90:
              return [h, y - P, n, m];
            case 180:
              return [p, y - P, m, n];
            case 270:
              return [p, y - i, n, m];
            default:
              throw new Error("Invalid rotation");
          }
        }
        onceAdded() {
        }
        isEmpty() {
          return !1;
        }
        enableEditMode() {
          ue(this, v, !0);
        }
        disableEditMode() {
          ue(this, v, !1);
        }
        isInEditMode() {
          return T(this, v);
        }
        shouldGetKeyboardEvents() {
          return !1;
        }
        needsToBeRebuilt() {
          return this.div && !this.isAttachedToDOM;
        }
        rebuild() {
          var d;
          (d = this.div) === null || d === void 0 || d.addEventListener("focusin", T(this, x));
        }
        serialize() {
          (0, a.unreachable)("An editor must be serializable");
        }
        static deserialize(d, y, h) {
          const P = new this.prototype.constructor({ parent: y, id: y.getNextId(), uiManager: h });
          P.rotation = d.rotation;
          const [p, i] = P.pageDimensions, [m, n, s, r] = P.getRectInCurrentCoords(d.rect, i);
          return P.x = m / p, P.y = n / i, P.width = s / p, P.height = r / i, P;
        }
        remove() {
          this.div.removeEventListener("focusin", T(this, x)), this.div.removeEventListener("focusout", T(this, O)), this.isEmpty() || this.commit(), this.parent.remove(this);
        }
        select() {
          var d;
          (d = this.div) === null || d === void 0 || d.classList.add("selectedEditor");
        }
        unselect() {
          var d;
          (d = this.div) === null || d === void 0 || d.classList.remove("selectedEditor");
        }
        updateParams(d, y) {
        }
        disableEditing() {
        }
        enableEditing() {
        }
        get propertiesToUpdate() {
          return {};
        }
        get contentDiv() {
          return this.div;
        }
        get isEditing() {
          return T(this, l);
        }
        set isEditing(d) {
          ue(this, l, d), d ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null);
        }
      };
      let b = k;
      x = new WeakMap(), O = new WeakMap(), f = new WeakMap(), l = new WeakMap(), v = new WeakMap(), A = new WeakMap(), Ie(b, "_colorManager", new t.ColorManager()), Ie(b, "_zIndex", 1), c.AnnotationEditor = b;
    }, (R, c, e) => {
      var v, A, k, j, d, y, Gt, p, i, m, n, s, r, u, C, I, o, D, $, W, K, z, _, g, w, S, M, q, L, H, V, Ht, X, St, Q, zt, de, Vt, E, $e, N, at, Y, $t, re, Xt, Ae, xt, ve, ot, me, Ct;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.KeyboardManager = c.CommandManager = c.ColorManager = c.AnnotationEditorUIManager = void 0, c.bindEvents = function(Z, pe, xe) {
        for (const Fe of xe)
          pe.addEventListener(Fe, Z[Fe].bind(Z));
      }, c.opacityToHex = function(Z) {
        return Math.round(Math.min(255, Math.max(1, 255 * Z))).toString(16).padStart(2, "0");
      };
      var t = e(1), a = e(142);
      class b {
        constructor() {
          te(this, v, 0);
        }
        getId() {
          return `${t.AnnotationEditorPrefix}${ut(this, v)._++}`;
        }
      }
      v = new WeakMap();
      class x {
        constructor() {
          te(this, A, []);
          te(this, k, !1);
          te(this, j, void 0);
          te(this, d, -1);
          let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 128;
          ue(this, j, Z);
        }
        add(Z) {
          let { cmd: pe, undo: xe, mustExec: Fe, type: Me = NaN, overwriteIfSameType: ae = !1, keepUndo: Pe = !1 } = Z;
          if (Fe && pe(), T(this, k))
            return;
          const Ee = { cmd: pe, undo: xe, type: Me };
          if (T(this, d) === -1) {
            T(this, A).length > 0 && (T(this, A).length = 0), ue(this, d, 0), T(this, A).push(Ee);
            return;
          }
          if (ae && T(this, A)[T(this, d)].type === Me) {
            Pe && (Ee.undo = T(this, A)[T(this, d)].undo), T(this, A)[T(this, d)] = Ee;
            return;
          }
          const Ue = T(this, d) + 1;
          Ue === T(this, j) ? T(this, A).splice(0, 1) : (ue(this, d, Ue), Ue < T(this, A).length && T(this, A).splice(Ue)), T(this, A).push(Ee);
        }
        undo() {
          T(this, d) !== -1 && (ue(this, k, !0), T(this, A)[T(this, d)].undo(), ue(this, k, !1), ue(this, d, T(this, d) - 1));
        }
        redo() {
          T(this, d) < T(this, A).length - 1 && (ue(this, d, T(this, d) + 1), ue(this, k, !0), T(this, A)[T(this, d)].cmd(), ue(this, k, !1));
        }
        hasSomethingToUndo() {
          return T(this, d) !== -1;
        }
        hasSomethingToRedo() {
          return T(this, d) < T(this, A).length - 1;
        }
        destroy() {
          ue(this, A, null);
        }
      }
      A = new WeakMap(), k = new WeakMap(), j = new WeakMap(), d = new WeakMap(), c.CommandManager = x;
      class O {
        constructor(Z) {
          te(this, y);
          this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
          const { isMac: pe } = t.FeatureTest.platform;
          for (const [xe, Fe] of Z)
            for (const Me of xe) {
              const ae = Me.startsWith("mac+");
              pe && ae ? (this.callbacks.set(Me.slice(4), Fe), this.allKeys.add(Me.split("+").at(-1))) : !pe && !ae && (this.callbacks.set(Me, Fe), this.allKeys.add(Me.split("+").at(-1)));
            }
        }
        exec(Z, pe) {
          if (!this.allKeys.has(pe.key))
            return;
          const xe = this.callbacks.get(ne(this, y, Gt).call(this, pe));
          xe && (xe.bind(Z)(), pe.stopPropagation(), pe.preventDefault());
        }
      }
      y = new WeakSet(), Gt = function(Z) {
        Z.altKey && this.buffer.push("alt"), Z.ctrlKey && this.buffer.push("ctrl"), Z.metaKey && this.buffer.push("meta"), Z.shiftKey && this.buffer.push("shift"), this.buffer.push(Z.key);
        const pe = this.buffer.join("+");
        return this.buffer.length = 0, pe;
      }, c.KeyboardManager = O;
      const P = class {
        get _colors() {
          const Z = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
          return (0, a.getColorValues)(Z), (0, t.shadow)(this, "_colors", Z);
        }
        convert(Z) {
          const pe = (0, a.getRGB)(Z);
          if (!window.matchMedia("(forced-colors: active)").matches)
            return pe;
          for (const [xe, Fe] of this._colors)
            if (Fe.every((Me, ae) => Me === pe[ae]))
              return P._colorsMapping.get(xe);
          return pe;
        }
        getHexCode(Z) {
          const pe = this._colors.get(Z);
          return pe ? t.Util.makeHexColor(...pe) : Z;
        }
      };
      let f = P;
      Ie(f, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]])), c.ColorManager = f;
      const _e = class {
        constructor(Z, pe, xe) {
          te(this, V);
          te(this, X);
          te(this, Q);
          te(this, de);
          te(this, E);
          te(this, N);
          te(this, Y);
          te(this, re);
          te(this, Ae);
          te(this, ve);
          te(this, me);
          te(this, p, null);
          te(this, i, /* @__PURE__ */ new Map());
          te(this, m, /* @__PURE__ */ new Map());
          te(this, n, null);
          te(this, s, new x());
          te(this, r, 0);
          te(this, u, null);
          te(this, C, /* @__PURE__ */ new Set());
          te(this, I, null);
          te(this, o, new b());
          te(this, D, !1);
          te(this, $, t.AnnotationEditorType.NONE);
          te(this, W, /* @__PURE__ */ new Set());
          te(this, K, this.copy.bind(this));
          te(this, z, this.cut.bind(this));
          te(this, _, this.paste.bind(this));
          te(this, g, this.keydown.bind(this));
          te(this, w, this.onEditingAction.bind(this));
          te(this, S, this.onPageChanging.bind(this));
          te(this, M, this.onScaleChanging.bind(this));
          te(this, q, this.onRotationChanging.bind(this));
          te(this, L, { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1 });
          te(this, H, null);
          ue(this, H, Z), ue(this, I, pe), T(this, I)._on("editingaction", T(this, w)), T(this, I)._on("pagechanging", T(this, S)), T(this, I)._on("scalechanging", T(this, M)), T(this, I)._on("rotationchanging", T(this, q)), ue(this, n, xe), this.viewParameters = { realScale: a.PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
        }
        destroy() {
          ne(this, X, St).call(this), T(this, I)._off("editingaction", T(this, w)), T(this, I)._off("pagechanging", T(this, S)), T(this, I)._off("scalechanging", T(this, M)), T(this, I)._off("rotationchanging", T(this, q));
          for (const Z of T(this, m).values())
            Z.destroy();
          T(this, m).clear(), T(this, i).clear(), T(this, C).clear(), ue(this, p, null), T(this, W).clear(), T(this, s).destroy();
        }
        onPageChanging(Z) {
          let { pageNumber: pe } = Z;
          ue(this, r, pe - 1);
        }
        focusMainContainer() {
          T(this, H).focus();
        }
        addShouldRescale(Z) {
          T(this, C).add(Z);
        }
        removeShouldRescale(Z) {
          T(this, C).delete(Z);
        }
        onScaleChanging(Z) {
          let { scale: pe } = Z;
          this.commitOrRemove(), this.viewParameters.realScale = pe * a.PixelsPerInch.PDF_TO_CSS_UNITS;
          for (const xe of T(this, C))
            xe.onScaleChanging();
        }
        onRotationChanging(Z) {
          let { pagesRotation: pe } = Z;
          this.commitOrRemove(), this.viewParameters.rotation = pe;
        }
        addToAnnotationStorage(Z) {
          Z.isEmpty() || !T(this, n) || T(this, n).has(Z.id) || T(this, n).setValue(Z.id, Z);
        }
        copy(Z) {
          if (Z.preventDefault(), T(this, p) && T(this, p).commitOrRemove(), !this.hasSelection)
            return;
          const pe = [];
          for (const xe of T(this, W))
            xe.isEmpty() || pe.push(xe.serialize());
          pe.length !== 0 && Z.clipboardData.setData("application/pdfjs", JSON.stringify(pe));
        }
        cut(Z) {
          this.copy(Z), this.delete();
        }
        paste(Z) {
          Z.preventDefault();
          let pe = Z.clipboardData.getData("application/pdfjs");
          if (!pe)
            return;
          try {
            pe = JSON.parse(pe);
          } catch (Fe) {
            (0, t.warn)(`paste: "${Fe.message}".`);
            return;
          }
          if (!Array.isArray(pe))
            return;
          this.unselectAll();
          const xe = T(this, m).get(T(this, r));
          try {
            const Fe = [];
            for (const Pe of pe) {
              const Ee = xe.deserialize(Pe);
              if (!Ee)
                return;
              Fe.push(Ee);
            }
            const Me = () => {
              for (const Pe of Fe)
                ne(this, Ae, xt).call(this, Pe);
              ne(this, me, Ct).call(this, Fe);
            }, ae = () => {
              for (const Pe of Fe)
                Pe.remove();
            };
            this.addCommands({ cmd: Me, undo: ae, mustExec: !0 });
          } catch (Fe) {
            (0, t.warn)(`paste: "${Fe.message}".`);
          }
        }
        keydown(Z) {
          var pe;
          (pe = this.getActive()) !== null && pe !== void 0 && pe.shouldGetKeyboardEvents() || _e._keyboardManager.exec(this, Z);
        }
        onEditingAction(Z) {
          ["undo", "redo", "delete", "selectAll"].includes(Z.name) && this[Z.name]();
        }
        setEditingState(Z) {
          Z ? (ne(this, V, Ht).call(this), ne(this, Q, zt).call(this), ne(this, E, $e).call(this, { isEditing: T(this, $) !== t.AnnotationEditorType.NONE, isEmpty: ne(this, ve, ot).call(this), hasSomethingToUndo: T(this, s).hasSomethingToUndo(), hasSomethingToRedo: T(this, s).hasSomethingToRedo(), hasSelectedEditor: !1 })) : (ne(this, X, St).call(this), ne(this, de, Vt).call(this), ne(this, E, $e).call(this, { isEditing: !1 }));
        }
        registerEditorTypes(Z) {
          if (!T(this, u)) {
            ue(this, u, Z);
            for (const pe of T(this, u))
              ne(this, N, at).call(this, pe.defaultPropertiesToUpdate);
          }
        }
        getId() {
          return T(this, o).getId();
        }
        get currentLayer() {
          return T(this, m).get(T(this, r));
        }
        get currentPageIndex() {
          return T(this, r);
        }
        addLayer(Z) {
          T(this, m).set(Z.pageIndex, Z), T(this, D) ? Z.enable() : Z.disable();
        }
        removeLayer(Z) {
          T(this, m).delete(Z.pageIndex);
        }
        updateMode(Z) {
          if (ue(this, $, Z), Z === t.AnnotationEditorType.NONE)
            this.setEditingState(!1), ne(this, re, Xt).call(this);
          else {
            this.setEditingState(!0), ne(this, Y, $t).call(this);
            for (const pe of T(this, m).values())
              pe.updateMode(Z);
          }
        }
        updateToolbar(Z) {
          Z !== T(this, $) && T(this, I).dispatch("switchannotationeditormode", { source: this, mode: Z });
        }
        updateParams(Z, pe) {
          if (T(this, u)) {
            for (const xe of T(this, W))
              xe.updateParams(Z, pe);
            for (const xe of T(this, u))
              xe.updateDefaultParams(Z, pe);
          }
        }
        getEditors(Z) {
          const pe = [];
          for (const xe of T(this, i).values())
            xe.pageIndex === Z && pe.push(xe);
          return pe;
        }
        getEditor(Z) {
          return T(this, i).get(Z);
        }
        addEditor(Z) {
          T(this, i).set(Z.id, Z);
        }
        removeEditor(Z) {
          var pe;
          T(this, i).delete(Z.id), this.unselect(Z), (pe = T(this, n)) === null || pe === void 0 || pe.remove(Z.id);
        }
        setActiveEditor(Z) {
          T(this, p) !== Z && (ue(this, p, Z), Z && ne(this, N, at).call(this, Z.propertiesToUpdate));
        }
        toggleSelected(Z) {
          T(this, W).has(Z) ? (T(this, W).delete(Z), Z.unselect(), ne(this, E, $e).call(this, { hasSelectedEditor: this.hasSelection })) : (T(this, W).add(Z), Z.select(), ne(this, N, at).call(this, Z.propertiesToUpdate), ne(this, E, $e).call(this, { hasSelectedEditor: !0 }));
        }
        setSelected(Z) {
          for (const pe of T(this, W))
            pe !== Z && pe.unselect();
          T(this, W).clear(), T(this, W).add(Z), Z.select(), ne(this, N, at).call(this, Z.propertiesToUpdate), ne(this, E, $e).call(this, { hasSelectedEditor: !0 });
        }
        isSelected(Z) {
          return T(this, W).has(Z);
        }
        unselect(Z) {
          Z.unselect(), T(this, W).delete(Z), ne(this, E, $e).call(this, { hasSelectedEditor: this.hasSelection });
        }
        get hasSelection() {
          return T(this, W).size !== 0;
        }
        undo() {
          T(this, s).undo(), ne(this, E, $e).call(this, { hasSomethingToUndo: T(this, s).hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: ne(this, ve, ot).call(this) });
        }
        redo() {
          T(this, s).redo(), ne(this, E, $e).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: T(this, s).hasSomethingToRedo(), isEmpty: ne(this, ve, ot).call(this) });
        }
        addCommands(Z) {
          T(this, s).add(Z), ne(this, E, $e).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: ne(this, ve, ot).call(this) });
        }
        delete() {
          if (this.commitOrRemove(), !this.hasSelection)
            return;
          const Z = [...T(this, W)];
          this.addCommands({ cmd: () => {
            for (const pe of Z)
              pe.remove();
          }, undo: () => {
            for (const pe of Z)
              ne(this, Ae, xt).call(this, pe);
          }, mustExec: !0 });
        }
        commitOrRemove() {
          var Z;
          (Z = T(this, p)) === null || Z === void 0 || Z.commitOrRemove();
        }
        selectAll() {
          for (const Z of T(this, W))
            Z.commit();
          ne(this, me, Ct).call(this, T(this, i).values());
        }
        unselectAll() {
          if (T(this, p))
            T(this, p).commitOrRemove();
          else if (T(this, W).size !== 0) {
            for (const Z of T(this, W))
              Z.unselect();
            T(this, W).clear(), ne(this, E, $e).call(this, { hasSelectedEditor: !1 });
          }
        }
        isActive(Z) {
          return T(this, p) === Z;
        }
        getActive() {
          return T(this, p);
        }
        getMode() {
          return T(this, $);
        }
      };
      let l = _e;
      p = new WeakMap(), i = new WeakMap(), m = new WeakMap(), n = new WeakMap(), s = new WeakMap(), r = new WeakMap(), u = new WeakMap(), C = new WeakMap(), I = new WeakMap(), o = new WeakMap(), D = new WeakMap(), $ = new WeakMap(), W = new WeakMap(), K = new WeakMap(), z = new WeakMap(), _ = new WeakMap(), g = new WeakMap(), w = new WeakMap(), S = new WeakMap(), M = new WeakMap(), q = new WeakMap(), L = new WeakMap(), H = new WeakMap(), V = new WeakSet(), Ht = function() {
        T(this, H).addEventListener("keydown", T(this, g));
      }, X = new WeakSet(), St = function() {
        T(this, H).removeEventListener("keydown", T(this, g));
      }, Q = new WeakSet(), zt = function() {
        document.addEventListener("copy", T(this, K)), document.addEventListener("cut", T(this, z)), document.addEventListener("paste", T(this, _));
      }, de = new WeakSet(), Vt = function() {
        document.removeEventListener("copy", T(this, K)), document.removeEventListener("cut", T(this, z)), document.removeEventListener("paste", T(this, _));
      }, E = new WeakSet(), $e = function(Z) {
        Object.entries(Z).some((pe) => {
          let [xe, Fe] = pe;
          return T(this, L)[xe] !== Fe;
        }) && T(this, I).dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(T(this, L), Z) });
      }, N = new WeakSet(), at = function(Z) {
        T(this, I).dispatch("annotationeditorparamschanged", { source: this, details: Z });
      }, Y = new WeakSet(), $t = function() {
        if (!T(this, D)) {
          ue(this, D, !0);
          for (const Z of T(this, m).values())
            Z.enable();
        }
      }, re = new WeakSet(), Xt = function() {
        if (this.unselectAll(), T(this, D)) {
          ue(this, D, !1);
          for (const Z of T(this, m).values())
            Z.disable();
        }
      }, Ae = new WeakSet(), xt = function(Z) {
        const pe = T(this, m).get(Z.pageIndex);
        pe ? pe.addOrRebuild(Z) : this.addEditor(Z);
      }, ve = new WeakSet(), ot = function() {
        if (T(this, i).size === 0)
          return !0;
        if (T(this, i).size === 1)
          for (const Z of T(this, i).values())
            return Z.isEmpty();
        return !1;
      }, me = new WeakSet(), Ct = function(Z) {
        T(this, W).clear();
        for (const pe of Z)
          pe.isEmpty() || (T(this, W).add(pe), pe.select());
        ne(this, E, $e).call(this, { hasSelectedEditor: !0 });
      }, Ie(l, "_keyboardManager", new O([[["ctrl+a", "mac+meta+a"], _e.prototype.selectAll], [["ctrl+z", "mac+meta+z"], _e.prototype.undo], [["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"], _e.prototype.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete"], _e.prototype.delete], [["Escape", "mac+Escape"], _e.prototype.unselectAll]])), c.AnnotationEditorUIManager = l;
    }, (R, c, e) => {
      var m, n, s, r, u, C, I, o, D, st, W, Je, z, Ye;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.StatTimer = c.RenderingCancelledException = c.PixelsPerInch = c.PageViewport = c.PDFDateString = c.DOMStandardFontDataFactory = c.DOMSVGFactory = c.DOMFilterFactory = c.DOMCanvasFactory = c.DOMCMapReaderFactory = c.AnnotationPrefix = void 0, c.deprecated = function(w) {
        console.log("Deprecated API usage: " + w);
      }, c.getColorValues = function(w) {
        const S = document.createElement("span");
        S.style.visibility = "hidden", document.body.append(S);
        for (const M of w.keys()) {
          S.style.color = M;
          const q = window.getComputedStyle(S).color;
          w.set(M, p(q));
        }
        S.remove();
      }, c.getCurrentTransform = function(w) {
        const { a: S, b: M, c: q, d: L, e: H, f: V } = w.getTransform();
        return [S, M, q, L, H, V];
      }, c.getCurrentTransformInverse = function(w) {
        const { a: S, b: M, c: q, d: L, e: H, f: V } = w.getTransform().invertSelf();
        return [S, M, q, L, H, V];
      }, c.getFilenameFromUrl = function(w) {
        return arguments.length > 1 && arguments[1] !== void 0 && arguments[1] || ([w] = w.split(/[#?]/, 1)), w.substring(w.lastIndexOf("/") + 1);
      }, c.getPdfFilenameFromUrl = function(w) {
        let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "document.pdf";
        if (typeof w != "string")
          return S;
        if (y(w))
          return (0, a.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), S;
        const M = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, q = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(w);
        let L = M.exec(q[1]) || M.exec(q[2]) || M.exec(q[3]);
        if (L && (L = L[0], L.includes("%")))
          try {
            L = M.exec(decodeURIComponent(L))[0];
          } catch {
          }
        return L || S;
      }, c.getRGB = p, c.getXfaPageViewport = function(w, S) {
        let { scale: M = 1, rotation: q = 0 } = S;
        const { width: L, height: H } = w.attributes.style, V = [0, 0, parseInt(L), parseInt(H)];
        return new j({ viewBox: V, scale: M, rotation: q });
      }, c.isDataScheme = y, c.isPdfFile = function(w) {
        return typeof w == "string" && /\.pdf$/i.test(w);
      }, c.isValidFetchUrl = h, c.loadScript = function(w) {
        let S = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return new Promise((M, q) => {
          const L = document.createElement("script");
          L.src = w, L.onload = function(H) {
            S && L.remove(), M(H);
          }, L.onerror = function() {
            q(new Error(`Cannot load script at: ${L.src}`));
          }, (document.head || document.documentElement).append(L);
        });
      }, c.setLayerDimensions = function(w, S) {
        let M = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], q = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
        if (S instanceof j) {
          const { pageWidth: L, pageHeight: H } = S.rawDims, { style: V } = w, G = `calc(var(--scale-factor) * ${L}px)`, X = `calc(var(--scale-factor) * ${H}px)`;
          M && S.rotation % 180 != 0 ? (V.width = X, V.height = G) : (V.width = G, V.height = X);
        }
        q && w.setAttribute("data-main-rotation", S.rotation);
      };
      var t = e(143), a = e(1);
      const b = "http://www.w3.org/2000/svg";
      c.AnnotationPrefix = "pdfjs_internal_id_";
      const i = class {
      };
      let x = i;
      Ie(x, "CSS", 96), Ie(x, "PDF", 72), Ie(x, "PDF_TO_CSS_UNITS", i.CSS / i.PDF), c.PixelsPerInch = x;
      class O extends t.BaseFilterFactory {
        constructor() {
          let { docId: S, ownerDocument: M = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super();
          te(this, D);
          te(this, W);
          te(this, z);
          te(this, m, void 0);
          te(this, n, void 0);
          te(this, s, void 0);
          te(this, r, void 0);
          te(this, u, void 0);
          te(this, C, void 0);
          te(this, I, void 0);
          te(this, o, 0);
          ue(this, s, S), ue(this, r, M);
        }
        addFilter(S) {
          if (!S)
            return "none";
          let M, q, L, H, V = T(this, D, st).get(S);
          if (V)
            return V;
          if (S.length === 1) {
            const U = S[0], de = new Array(256);
            for (let le = 0; le < 256; le++)
              de[le] = U[le] / 255;
            H = M = q = L = de.join(",");
          } else {
            const [U, de, le] = S, E = new Array(256), F = new Array(256), N = new Array(256);
            for (let B = 0; B < 256; B++)
              E[B] = U[B] / 255, F[B] = de[B] / 255, N[B] = le[B] / 255;
            M = E.join(","), q = F.join(","), L = N.join(","), H = `${M}${q}${L}`;
          }
          if (V = T(this, D, st).get(H), V)
            return T(this, D, st).set(S, V), V;
          const G = `g_${T(this, s)}_transfer_map_${ut(this, o)._++}`, X = `url(#${G})`;
          T(this, D, st).set(S, X), T(this, D, st).set(H, X);
          const J = T(this, r).createElementNS(b, "filter", b);
          J.setAttribute("id", G), J.setAttribute("color-interpolation-filters", "sRGB");
          const Q = T(this, r).createElementNS(b, "feComponentTransfer");
          return J.append(Q), ne(this, z, Ye).call(this, Q, "feFuncR", M), ne(this, z, Ye).call(this, Q, "feFuncG", q), ne(this, z, Ye).call(this, Q, "feFuncB", L), T(this, W, Je).append(J), X;
        }
        addHCMFilter(S, M) {
          var q;
          const L = `${S}-${M}`;
          if (T(this, C) === L)
            return T(this, I);
          if (ue(this, C, L), ue(this, I, "none"), (q = T(this, u)) === null || q === void 0 || q.remove(), !S || !M)
            return T(this, I);
          T(this, W, Je).style.color = S;
          const H = p(S = getComputedStyle(T(this, W, Je)).getPropertyValue("color"));
          S = a.Util.makeHexColor(...H), T(this, W, Je).style.color = M;
          const V = p(M = getComputedStyle(T(this, W, Je)).getPropertyValue("color"));
          if (M = a.Util.makeHexColor(...V), T(this, W, Je).style.color = "", S === "#000000" && M === "#ffffff" || S === M)
            return T(this, I);
          const G = new Array(256);
          for (let E = 0; E <= 255; E++) {
            const F = E / 255;
            G[E] = F <= 0.03928 ? F / 12.92 : ((F + 0.055) / 1.055) ** 2.4;
          }
          const X = G.join(","), J = `g_${T(this, s)}_hcm_filter`, Q = ue(this, u, T(this, r).createElementNS(b, "filter", b));
          Q.setAttribute("id", J), Q.setAttribute("color-interpolation-filters", "sRGB");
          let U = T(this, r).createElementNS(b, "feComponentTransfer");
          Q.append(U), ne(this, z, Ye).call(this, U, "feFuncR", X), ne(this, z, Ye).call(this, U, "feFuncG", X), ne(this, z, Ye).call(this, U, "feFuncB", X);
          const de = T(this, r).createElementNS(b, "feColorMatrix");
          de.setAttribute("type", "matrix"), de.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), Q.append(de), U = T(this, r).createElementNS(b, "feComponentTransfer"), Q.append(U);
          const le = (E, F) => {
            const N = H[E] / 255, B = V[E] / 255, Y = new Array(F + 1);
            for (let ee = 0; ee <= F; ee++)
              Y[ee] = N + ee / F * (B - N);
            return Y.join(",");
          };
          return ne(this, z, Ye).call(this, U, "feFuncR", le(0, 5)), ne(this, z, Ye).call(this, U, "feFuncG", le(1, 5)), ne(this, z, Ye).call(this, U, "feFuncB", le(2, 5)), T(this, W, Je).append(Q), ue(this, I, `url(#${J})`), T(this, I);
        }
        destroy() {
          (!(arguments.length > 0 && arguments[0] !== void 0 && arguments[0]) || !T(this, I)) && (T(this, n) && (T(this, n).parentNode.parentNode.remove(), ue(this, n, null)), T(this, m) && (T(this, m).clear(), ue(this, m, null)), ue(this, o, 0));
        }
      }
      m = new WeakMap(), n = new WeakMap(), s = new WeakMap(), r = new WeakMap(), u = new WeakMap(), C = new WeakMap(), I = new WeakMap(), o = new WeakMap(), D = new WeakSet(), st = function() {
        return T(this, m) || ue(this, m, /* @__PURE__ */ new Map());
      }, W = new WeakSet(), Je = function() {
        if (!T(this, n)) {
          const S = T(this, r).createElement("div"), { style: M } = S;
          M.visibility = "hidden", M.contain = "strict", M.width = M.height = 0, M.position = "absolute", M.top = M.left = 0, M.zIndex = -1;
          const q = T(this, r).createElementNS(b, "svg");
          q.setAttribute("width", 0), q.setAttribute("height", 0), ue(this, n, T(this, r).createElementNS(b, "defs")), S.append(q), q.append(T(this, n)), T(this, r).body.append(S);
        }
        return T(this, n);
      }, z = new WeakSet(), Ye = function(S, M, q) {
        const L = T(this, r).createElementNS(b, M);
        L.setAttribute("type", "discrete"), L.setAttribute("tableValues", q), S.append(L);
      }, c.DOMFilterFactory = O;
      class f extends t.BaseCanvasFactory {
        constructor() {
          let { ownerDocument: w = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super(), this._document = w;
        }
        _createCanvas(w, S) {
          const M = this._document.createElement("canvas");
          return M.width = w, M.height = S, M;
        }
      }
      c.DOMCanvasFactory = f;
      async function l(g) {
        let w = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        if (h(g, document.baseURI)) {
          const S = await fetch(g);
          if (!S.ok)
            throw new Error(S.statusText);
          return w ? new Uint8Array(await S.arrayBuffer()) : (0, a.stringToBytes)(await S.text());
        }
        return new Promise((S, M) => {
          const q = new XMLHttpRequest();
          q.open("GET", g, !0), w && (q.responseType = "arraybuffer"), q.onreadystatechange = () => {
            if (q.readyState === XMLHttpRequest.DONE) {
              if (q.status === 200 || q.status === 0) {
                let L;
                if (w && q.response ? L = new Uint8Array(q.response) : !w && q.responseText && (L = (0, a.stringToBytes)(q.responseText)), L) {
                  S(L);
                  return;
                }
              }
              M(new Error(q.statusText));
            }
          }, q.send(null);
        });
      }
      class v extends t.BaseCMapReaderFactory {
        _fetchData(w, S) {
          return l(w, this.isCompressed).then((M) => ({ cMapData: M, compressionType: S }));
        }
      }
      c.DOMCMapReaderFactory = v;
      class A extends t.BaseStandardFontDataFactory {
        _fetchData(w) {
          return l(w, !0);
        }
      }
      c.DOMStandardFontDataFactory = A;
      class k extends t.BaseSVGFactory {
        _createSVG(w) {
          return document.createElementNS(b, w);
        }
      }
      c.DOMSVGFactory = k;
      class j {
        constructor(w) {
          let { viewBox: S, scale: M, rotation: q, offsetX: L = 0, offsetY: H = 0, dontFlip: V = !1 } = w;
          this.viewBox = S, this.scale = M, this.rotation = q, this.offsetX = L, this.offsetY = H;
          const G = (S[2] + S[0]) / 2, X = (S[3] + S[1]) / 2;
          let J, Q, U, de, le, E, F, N;
          switch (q %= 360, q < 0 && (q += 360), q) {
            case 180:
              J = -1, Q = 0, U = 0, de = 1;
              break;
            case 90:
              J = 0, Q = 1, U = 1, de = 0;
              break;
            case 270:
              J = 0, Q = -1, U = -1, de = 0;
              break;
            case 0:
              J = 1, Q = 0, U = 0, de = -1;
              break;
            default:
              throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }
          V && (U = -U, de = -de), J === 0 ? (le = Math.abs(X - S[1]) * M + L, E = Math.abs(G - S[0]) * M + H, F = (S[3] - S[1]) * M, N = (S[2] - S[0]) * M) : (le = Math.abs(G - S[0]) * M + L, E = Math.abs(X - S[1]) * M + H, F = (S[2] - S[0]) * M, N = (S[3] - S[1]) * M), this.transform = [J * M, Q * M, U * M, de * M, le - J * M * G - U * M * X, E - Q * M * G - de * M * X], this.width = F, this.height = N;
        }
        get rawDims() {
          const { viewBox: w } = this;
          return (0, a.shadow)(this, "rawDims", { pageWidth: w[2] - w[0], pageHeight: w[3] - w[1], pageX: w[0], pageY: w[1] });
        }
        clone() {
          let { scale: w = this.scale, rotation: S = this.rotation, offsetX: M = this.offsetX, offsetY: q = this.offsetY, dontFlip: L = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new j({ viewBox: this.viewBox.slice(), scale: w, rotation: S, offsetX: M, offsetY: q, dontFlip: L });
        }
        convertToViewportPoint(w, S) {
          return a.Util.applyTransform([w, S], this.transform);
        }
        convertToViewportRectangle(w) {
          const S = a.Util.applyTransform([w[0], w[1]], this.transform), M = a.Util.applyTransform([w[2], w[3]], this.transform);
          return [S[0], S[1], M[0], M[1]];
        }
        convertToPdfPoint(w, S) {
          return a.Util.applyInverseTransform([w, S], this.transform);
        }
      }
      c.PageViewport = j;
      class d extends a.BaseException {
        constructor(w, S) {
          let M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          super(w, "RenderingCancelledException"), this.type = S, this.extraDelay = M;
        }
      }
      c.RenderingCancelledException = d;
      function y(g) {
        const w = g.length;
        let S = 0;
        for (; S < w && g[S].trim() === ""; )
          S++;
        return g.substring(S, S + 5).toLowerCase() === "data:";
      }
      c.StatTimer = class {
        constructor() {
          Ie(this, "started", /* @__PURE__ */ Object.create(null));
          Ie(this, "times", []);
        }
        time(w) {
          w in this.started && (0, a.warn)(`Timer is already running for ${w}`), this.started[w] = Date.now();
        }
        timeEnd(w) {
          w in this.started || (0, a.warn)(`Timer has not been started for ${w}`), this.times.push({ name: w, start: this.started[w], end: Date.now() }), delete this.started[w];
        }
        toString() {
          const w = [];
          let S = 0;
          for (const { name: M } of this.times)
            S = Math.max(M.length, S);
          for (const { name: M, start: q, end: L } of this.times)
            w.push(`${M.padEnd(S)} ${L - q}ms
`);
          return w.join("");
        }
      };
      function h(g, w) {
        try {
          const { protocol: S } = w ? new URL(g, w) : new URL(g);
          return S === "http:" || S === "https:";
        } catch {
          return !1;
        }
      }
      let P;
      c.PDFDateString = class {
        static toDateObject(w) {
          if (!w || typeof w != "string")
            return null;
          P || (P = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
          const S = P.exec(w);
          if (!S)
            return null;
          const M = parseInt(S[1], 10);
          let q = parseInt(S[2], 10);
          q = q >= 1 && q <= 12 ? q - 1 : 0;
          let L = parseInt(S[3], 10);
          L = L >= 1 && L <= 31 ? L : 1;
          let H = parseInt(S[4], 10);
          H = H >= 0 && H <= 23 ? H : 0;
          let V = parseInt(S[5], 10);
          V = V >= 0 && V <= 59 ? V : 0;
          let G = parseInt(S[6], 10);
          G = G >= 0 && G <= 59 ? G : 0;
          const X = S[7] || "Z";
          let J = parseInt(S[8], 10);
          J = J >= 0 && J <= 23 ? J : 0;
          let Q = parseInt(S[9], 10) || 0;
          return Q = Q >= 0 && Q <= 59 ? Q : 0, X === "-" ? (H += J, V += Q) : X === "+" && (H -= J, V -= Q), new Date(Date.UTC(M, q, L, H, V, G));
        }
      };
      function p(g) {
        if (g.startsWith("#")) {
          const w = parseInt(g.slice(1), 16);
          return [(16711680 & w) >> 16, (65280 & w) >> 8, 255 & w];
        }
        return g.startsWith("rgb(") ? g.slice(4, -1).split(",").map((w) => parseInt(w)) : g.startsWith("rgba(") ? g.slice(5, -1).split(",").map((w) => parseInt(w)).slice(0, 3) : ((0, a.warn)(`Not a valid color format: "${g}"`), [0, 0, 0]);
      }
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.BaseStandardFontDataFactory = c.BaseSVGFactory = c.BaseFilterFactory = c.BaseCanvasFactory = c.BaseCMapReaderFactory = void 0;
      var t = e(1);
      class a {
        constructor() {
          this.constructor === a && (0, t.unreachable)("Cannot initialize BaseFilterFactory.");
        }
        addFilter(v) {
          return "none";
        }
        addHCMFilter(v, A) {
          return "none";
        }
        destroy() {
        }
      }
      c.BaseFilterFactory = a;
      class b {
        constructor() {
          this.constructor === b && (0, t.unreachable)("Cannot initialize BaseCanvasFactory.");
        }
        create(v, A) {
          if (v <= 0 || A <= 0)
            throw new Error("Invalid canvas size");
          const k = this._createCanvas(v, A);
          return { canvas: k, context: k.getContext("2d") };
        }
        reset(v, A, k) {
          if (!v.canvas)
            throw new Error("Canvas is not specified");
          if (A <= 0 || k <= 0)
            throw new Error("Invalid canvas size");
          v.canvas.width = A, v.canvas.height = k;
        }
        destroy(v) {
          if (!v.canvas)
            throw new Error("Canvas is not specified");
          v.canvas.width = 0, v.canvas.height = 0, v.canvas = null, v.context = null;
        }
        _createCanvas(v, A) {
          (0, t.unreachable)("Abstract method `_createCanvas` called.");
        }
      }
      c.BaseCanvasFactory = b;
      class x {
        constructor(v) {
          let { baseUrl: A = null, isCompressed: k = !0 } = v;
          this.constructor === x && (0, t.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = A, this.isCompressed = k;
        }
        async fetch(v) {
          let { name: A } = v;
          if (!this.baseUrl)
            throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
          if (!A)
            throw new Error("CMap name must be specified.");
          const k = this.baseUrl + A + (this.isCompressed ? ".bcmap" : ""), j = this.isCompressed ? t.CMapCompressionType.BINARY : t.CMapCompressionType.NONE;
          return this._fetchData(k, j).catch((d) => {
            throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${k}`);
          });
        }
        _fetchData(v, A) {
          (0, t.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      c.BaseCMapReaderFactory = x;
      class O {
        constructor(v) {
          let { baseUrl: A = null } = v;
          this.constructor === O && (0, t.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = A;
        }
        async fetch(v) {
          let { filename: A } = v;
          if (!this.baseUrl)
            throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
          if (!A)
            throw new Error("Font filename must be specified.");
          const k = `${this.baseUrl}${A}`;
          return this._fetchData(k).catch((j) => {
            throw new Error(`Unable to load font data at: ${k}`);
          });
        }
        _fetchData(v) {
          (0, t.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      c.BaseStandardFontDataFactory = O;
      class f {
        constructor() {
          this.constructor === f && (0, t.unreachable)("Cannot initialize BaseSVGFactory.");
        }
        create(v, A) {
          let k = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          if (v <= 0 || A <= 0)
            throw new Error("Invalid SVG dimensions");
          const j = this._createSVG("svg:svg");
          return j.setAttribute("version", "1.1"), k || (j.setAttribute("width", `${v}px`), j.setAttribute("height", `${A}px`)), j.setAttribute("preserveAspectRatio", "none"), j.setAttribute("viewBox", `0 0 ${v} ${A}`), j;
        }
        createElement(v) {
          if (typeof v != "string")
            throw new Error("Invalid SVG element type");
          return this._createSVG(v);
        }
        _createSVG(v) {
          (0, t.unreachable)("Abstract method `_createSVG` called.");
        }
      }
      c.BaseSVGFactory = f;
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.MurmurHash3_64 = void 0;
      var t = e(1);
      const a = 3285377520, b = 4294901760, x = 65535;
      c.MurmurHash3_64 = class {
        constructor(f) {
          this.h1 = f ? 4294967295 & f : a, this.h2 = f ? 4294967295 & f : a;
        }
        update(f) {
          let l, v;
          if (typeof f == "string") {
            l = new Uint8Array(2 * f.length), v = 0;
            for (let s = 0, r = f.length; s < r; s++) {
              const u = f.charCodeAt(s);
              u <= 255 ? l[v++] = u : (l[v++] = u >>> 8, l[v++] = 255 & u);
            }
          } else {
            if (!(0, t.isArrayBuffer)(f))
              throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
            l = f.slice(), v = l.byteLength;
          }
          const A = v >> 2, k = v - 4 * A, j = new Uint32Array(l.buffer, 0, A);
          let d = 0, y = 0, h = this.h1, P = this.h2;
          const p = 3432918353, i = 461845907, m = 11601, n = 13715;
          for (let s = 0; s < A; s++)
            1 & s ? (d = j[s], d = d * p & b | d * m & x, d = d << 15 | d >>> 17, d = d * i & b | d * n & x, h ^= d, h = h << 13 | h >>> 19, h = 5 * h + 3864292196) : (y = j[s], y = y * p & b | y * m & x, y = y << 15 | y >>> 17, y = y * i & b | y * n & x, P ^= y, P = P << 13 | P >>> 19, P = 5 * P + 3864292196);
          switch (d = 0, k) {
            case 3:
              d ^= l[4 * A + 2] << 16;
            case 2:
              d ^= l[4 * A + 1] << 8;
            case 1:
              d ^= l[4 * A], d = d * p & b | d * m & x, d = d << 15 | d >>> 17, d = d * i & b | d * n & x, 1 & A ? h ^= d : P ^= d;
          }
          this.h1 = h, this.h2 = P;
        }
        hexdigest() {
          let f = this.h1, l = this.h2;
          return f ^= l >>> 1, f = 3981806797 * f & b | 36045 * f & x, l = 4283543511 * l & b | (2950163797 * (l << 16 | f >>> 16) & b) >>> 16, f ^= l >>> 1, f = 444984403 * f & b | 60499 * f & x, l = 3301882366 * l & b | (3120437893 * (l << 16 | f >>> 16) & b) >>> 16, f ^= l >>> 1, (f >>> 0).toString(16).padStart(8, "0") + (l >>> 0).toString(16).padStart(8, "0");
        }
      };
    }, (R, c, e) => {
      var b, x;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.FontLoader = c.FontFaceObject = void 0;
      var t = e(1), a = e(3);
      c.FontLoader = (x = class {
        constructor(f) {
          te(this, b, /* @__PURE__ */ new Set());
          let { ownerDocument: l = globalThis.document, styleElement: v = null } = f;
          this._document = l, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
        }
        addNativeFontFace(f) {
          this.nativeFontFaces.add(f), this._document.fonts.add(f);
        }
        removeNativeFontFace(f) {
          this.nativeFontFaces.delete(f), this._document.fonts.delete(f);
        }
        insertRule(f) {
          this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
          const l = this.styleElement.sheet;
          l.insertRule(f, l.cssRules.length);
        }
        clear() {
          for (const f of this.nativeFontFaces)
            this._document.fonts.delete(f);
          this.nativeFontFaces.clear(), T(this, b).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
        }
        async loadSystemFont(f) {
          if (f && !T(this, b).has(f.loadedName))
            if ((0, t.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
              const { loadedName: l, src: v, style: A } = f, k = new FontFace(l, v, A);
              this.addNativeFontFace(k);
              try {
                await k.load(), T(this, b).add(l);
              } catch {
                (0, t.warn)(`Cannot load system font: ${f.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(k);
              }
            } else
              (0, t.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
        }
        async bind(f) {
          if (f.attached || f.missingFile && !f.systemFontInfo)
            return;
          if (f.attached = !0, f.systemFontInfo) {
            await this.loadSystemFont(f.systemFontInfo);
            return;
          }
          if (this.isFontLoadingAPISupported) {
            const v = f.createNativeFontFace();
            if (v) {
              this.addNativeFontFace(v);
              try {
                await v.loaded;
              } catch (A) {
                throw (0, t.warn)(`Failed to load font '${v.family}': '${A}'.`), f.disableFontFace = !0, A;
              }
            }
            return;
          }
          const l = f.createFontFaceRule();
          if (l) {
            if (this.insertRule(l), this.isSyncFontLoadingSupported)
              return;
            await new Promise((v) => {
              const A = this._queueLoadingCallback(v);
              this._prepareFontLoadEvent(f, A);
            });
          }
        }
        get isFontLoadingAPISupported() {
          var f;
          const l = !((f = this._document) === null || f === void 0 || !f.fonts);
          return (0, t.shadow)(this, "isFontLoadingAPISupported", l);
        }
        get isSyncFontLoadingSupported() {
          let f = !1;
          return (a.isNodeJS || typeof navigator < "u" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (f = !0), (0, t.shadow)(this, "isSyncFontLoadingSupported", f);
        }
        _queueLoadingCallback(f) {
          const { loadingRequests: l } = this, v = { done: !1, complete: function() {
            for ((0, t.assert)(!v.done, "completeRequest() cannot be called twice."), v.done = !0; l.length > 0 && l[0].done; ) {
              const k = l.shift();
              setTimeout(k.callback, 0);
            }
          }, callback: f };
          return l.push(v), v;
        }
        get _loadTestFont() {
          const f = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
          return (0, t.shadow)(this, "_loadTestFont", f);
        }
        _prepareFontLoadEvent(f, l) {
          function v(r, u) {
            return r.charCodeAt(u) << 24 | r.charCodeAt(u + 1) << 16 | r.charCodeAt(u + 2) << 8 | 255 & r.charCodeAt(u + 3);
          }
          function A(r, u, C, I) {
            return r.substring(0, u) + I + r.substring(u + C);
          }
          let k, j;
          const d = this._document.createElement("canvas");
          d.width = 1, d.height = 1;
          const y = d.getContext("2d");
          let h = 0;
          const P = `lt${Date.now()}${this.loadTestFontId++}`;
          let p = this._loadTestFont;
          p = A(p, 976, P.length, P);
          const i = 1482184792;
          let m = v(p, 16);
          for (k = 0, j = P.length - 3; k < j; k += 4)
            m = m - i + v(P, k) | 0;
          k < P.length && (m = m - i + v(P + "XXX", k) | 0), p = A(p, 16, 4, (0, t.string32)(m));
          const n = `@font-face {font-family:"${P}";src:${`url(data:font/opentype;base64,${btoa(p)});`}}`;
          this.insertRule(n);
          const s = this._document.createElement("div");
          s.style.visibility = "hidden", s.style.width = s.style.height = "10px", s.style.position = "absolute", s.style.top = s.style.left = "0px";
          for (const r of [f.loadedName, P]) {
            const u = this._document.createElement("span");
            u.textContent = "Hi", u.style.fontFamily = r, s.append(u);
          }
          this._document.body.append(s), function r(u, C) {
            if (++h > 30) {
              (0, t.warn)("Load test font never loaded."), C();
              return;
            }
            y.font = "30px " + u, y.fillText(".", 0, 20), y.getImageData(0, 0, 1, 1).data[3] > 0 ? C() : setTimeout(r.bind(null, u, C));
          }(P, () => {
            s.remove(), l.complete();
          });
        }
      }, b = new WeakMap(), x), c.FontFaceObject = class {
        constructor(f, l) {
          let { isEvalSupported: v = !0, disableFontFace: A = !1, ignoreErrors: k = !1, inspectFont: j = null } = l;
          this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
          for (const d in f)
            this[d] = f[d];
          this.isEvalSupported = v !== !1, this.disableFontFace = A === !0, this.ignoreErrors = k === !0, this._inspectFont = j;
        }
        createNativeFontFace() {
          var f;
          if (!this.data || this.disableFontFace)
            return null;
          let l;
          if (this.cssFontInfo) {
            const v = { weight: this.cssFontInfo.fontWeight };
            this.cssFontInfo.italicAngle && (v.style = `oblique ${this.cssFontInfo.italicAngle}deg`), l = new FontFace(this.cssFontInfo.fontFamily, this.data, v);
          } else
            l = new FontFace(this.loadedName, this.data, {});
          return (f = this._inspectFont) === null || f === void 0 || f.call(this, this), l;
        }
        createFontFaceRule() {
          var f;
          if (!this.data || this.disableFontFace)
            return null;
          const l = (0, t.bytesToString)(this.data), v = `url(data:${this.mimetype};base64,${btoa(l)});`;
          let A;
          if (this.cssFontInfo) {
            let k = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (k += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), A = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${k}src:${v}}`;
          } else
            A = `@font-face {font-family:"${this.loadedName}";src:${v}}`;
          return (f = this._inspectFont) === null || f === void 0 || f.call(this, this, v), A;
        }
        getPathGenerator(f, l) {
          if (this.compiledGlyphs[l] !== void 0)
            return this.compiledGlyphs[l];
          let v;
          try {
            v = f.get(this.loadedName + "_path_" + l);
          } catch (A) {
            if (!this.ignoreErrors)
              throw A;
            return (0, t.warn)(`getPathGenerator - ignoring character: "${A}".`), this.compiledGlyphs[l] = function(k, j) {
            };
          }
          if (this.isEvalSupported && t.FeatureTest.isEvalSupported) {
            const A = [];
            for (const k of v) {
              const j = k.args !== void 0 ? k.args.join(",") : "";
              A.push("c.", k.cmd, "(", j, `);
`);
            }
            return this.compiledGlyphs[l] = new Function("c", "size", A.join(""));
          }
          return this.compiledGlyphs[l] = function(A, k) {
            for (const j of v)
              j.cmd === "scale" && (j.args = [k, -k]), A[j.cmd].apply(A, j.args);
          };
        }
      };
    }, (R, c, e) => {
      var o, wt, $, Et;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.CanvasGraphics = void 0;
      var t = e(1), a = e(142), b = e(147), x = e(148), O = e(3);
      const f = 4096, l = 16;
      class v {
        constructor(_) {
          this.canvasFactory = _, this.cache = /* @__PURE__ */ Object.create(null);
        }
        getCanvas(_, g, w) {
          let S;
          return this.cache[_] !== void 0 ? (S = this.cache[_], this.canvasFactory.reset(S, g, w)) : (S = this.canvasFactory.create(g, w), this.cache[_] = S), S;
        }
        delete(_) {
          delete this.cache[_];
        }
        clear() {
          for (const _ in this.cache) {
            const g = this.cache[_];
            this.canvasFactory.destroy(g), delete this.cache[_];
          }
        }
      }
      function A(z, _, g, w, S, M, q, L, H, V) {
        const [G, X, J, Q, U, de] = (0, a.getCurrentTransform)(z);
        if (X === 0 && J === 0) {
          const le = q * G + U, E = Math.round(le), F = L * Q + de, N = Math.round(F), B = (q + H) * G + U, Y = Math.abs(Math.round(B) - E) || 1, ee = (L + V) * Q + de, re = Math.abs(Math.round(ee) - N) || 1;
          return z.setTransform(Math.sign(G), 0, 0, Math.sign(Q), E, N), z.drawImage(_, g, w, S, M, 0, 0, Y, re), z.setTransform(G, X, J, Q, U, de), [Y, re];
        }
        if (G === 0 && Q === 0) {
          const le = L * J + U, E = Math.round(le), F = q * X + de, N = Math.round(F), B = (L + V) * J + U, Y = Math.abs(Math.round(B) - E) || 1, ee = (q + H) * X + de, re = Math.abs(Math.round(ee) - N) || 1;
          return z.setTransform(0, Math.sign(X), Math.sign(J), 0, E, N), z.drawImage(_, g, w, S, M, 0, 0, re, Y), z.setTransform(G, X, J, Q, U, de), [re, Y];
        }
        return z.drawImage(_, g, w, S, M, q, L, H, V), [Math.hypot(G, X) * H, Math.hypot(J, Q) * V];
      }
      class k {
        constructor(_, g) {
          this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = t.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = t.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = t.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, _, g]);
        }
        clone() {
          const _ = Object.create(this);
          return _.clipBox = this.clipBox.slice(), _;
        }
        setCurrentPoint(_, g) {
          this.x = _, this.y = g;
        }
        updatePathMinMax(_, g, w) {
          [g, w] = t.Util.applyTransform([g, w], _), this.minX = Math.min(this.minX, g), this.minY = Math.min(this.minY, w), this.maxX = Math.max(this.maxX, g), this.maxY = Math.max(this.maxY, w);
        }
        updateRectMinMax(_, g) {
          const w = t.Util.applyTransform(g, _), S = t.Util.applyTransform(g.slice(2), _);
          this.minX = Math.min(this.minX, w[0], S[0]), this.minY = Math.min(this.minY, w[1], S[1]), this.maxX = Math.max(this.maxX, w[0], S[0]), this.maxY = Math.max(this.maxY, w[1], S[1]);
        }
        updateScalingPathMinMax(_, g) {
          t.Util.scaleMinMax(_, g), this.minX = Math.min(this.minX, g[0]), this.maxX = Math.max(this.maxX, g[1]), this.minY = Math.min(this.minY, g[2]), this.maxY = Math.max(this.maxY, g[3]);
        }
        updateCurvePathMinMax(_, g, w, S, M, q, L, H, V, G) {
          const X = t.Util.bezierBoundingBox(g, w, S, M, q, L, H, V);
          G ? (G[0] = Math.min(G[0], X[0], X[2]), G[1] = Math.max(G[1], X[0], X[2]), G[2] = Math.min(G[2], X[1], X[3]), G[3] = Math.max(G[3], X[1], X[3])) : this.updateRectMinMax(_, X);
        }
        getPathBoundingBox() {
          let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b.PathType.FILL, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const w = [this.minX, this.minY, this.maxX, this.maxY];
          if (_ === b.PathType.STROKE) {
            g || (0, t.unreachable)("Stroke bounding box must include transform.");
            const S = t.Util.singularValueDecompose2dScale(g), M = S[0] * this.lineWidth / 2, q = S[1] * this.lineWidth / 2;
            w[0] -= M, w[1] -= q, w[2] += M, w[3] += q;
          }
          return w;
        }
        updateClipFromPath() {
          const _ = t.Util.intersect(this.clipBox, this.getPathBoundingBox());
          this.startNewPathAndClipBox(_ || [0, 0, 0, 0]);
        }
        isEmptyClip() {
          return this.minX === 1 / 0;
        }
        startNewPathAndClipBox(_) {
          this.clipBox = _, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
        }
        getClippedPathBoundingBox() {
          let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b.PathType.FILL, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return t.Util.intersect(this.clipBox, this.getPathBoundingBox(_, g));
        }
      }
      function j(z, _) {
        if (typeof ImageData < "u" && _ instanceof ImageData) {
          z.putImageData(_, 0, 0);
          return;
        }
        const g = _.height, w = _.width, S = g % l, M = (g - S) / l, q = S === 0 ? M : M + 1, L = z.createImageData(w, l);
        let H, V = 0;
        const G = _.data, X = L.data;
        let J, Q, U, de;
        if (_.kind === t.ImageKind.GRAYSCALE_1BPP) {
          const le = G.byteLength, E = new Uint32Array(X.buffer, 0, X.byteLength >> 2), F = E.length, N = w + 7 >> 3, B = 4294967295, Y = t.FeatureTest.isLittleEndian ? 4278190080 : 255;
          for (J = 0; J < q; J++) {
            for (U = J < M ? l : S, H = 0, Q = 0; Q < U; Q++) {
              const ee = le - V;
              let re = 0;
              const ie = ee > N ? w : 8 * ee - 7, Ae = -8 & ie;
              let ce = 0, ve = 0;
              for (; re < Ae; re += 8)
                ve = G[V++], E[H++] = 128 & ve ? B : Y, E[H++] = 64 & ve ? B : Y, E[H++] = 32 & ve ? B : Y, E[H++] = 16 & ve ? B : Y, E[H++] = 8 & ve ? B : Y, E[H++] = 4 & ve ? B : Y, E[H++] = 2 & ve ? B : Y, E[H++] = 1 & ve ? B : Y;
              for (; re < ie; re++)
                ce === 0 && (ve = G[V++], ce = 128), E[H++] = ve & ce ? B : Y, ce >>= 1;
            }
            for (; H < F; )
              E[H++] = 0;
            z.putImageData(L, 0, J * l);
          }
        } else if (_.kind === t.ImageKind.RGBA_32BPP) {
          for (Q = 0, de = w * l * 4, J = 0; J < M; J++)
            X.set(G.subarray(V, V + de)), V += de, z.putImageData(L, 0, Q), Q += l;
          J < q && (de = w * S * 4, X.set(G.subarray(V, V + de)), z.putImageData(L, 0, Q));
        } else {
          if (_.kind !== t.ImageKind.RGB_24BPP)
            throw new Error(`bad image kind: ${_.kind}`);
          for (U = l, de = w * U, J = 0; J < q; J++) {
            for (J >= M && (U = S, de = w * U), H = 0, Q = de; Q--; )
              X[H++] = G[V++], X[H++] = G[V++], X[H++] = G[V++], X[H++] = 255;
            z.putImageData(L, 0, J * l);
          }
        }
      }
      function d(z, _) {
        if (_.bitmap) {
          z.drawImage(_.bitmap, 0, 0);
          return;
        }
        const g = _.height, w = _.width, S = g % l, M = (g - S) / l, q = S === 0 ? M : M + 1, L = z.createImageData(w, l);
        let H = 0;
        const V = _.data, G = L.data;
        for (let X = 0; X < q; X++) {
          const J = X < M ? l : S;
          ({ srcPos: H } = (0, x.convertBlackAndWhiteToRGBA)({ src: V, srcPos: H, dest: G, width: w, height: J, nonBlackColor: 0 })), z.putImageData(L, 0, X * l);
        }
      }
      function y(z, _) {
        const g = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
        for (const w of g)
          z[w] !== void 0 && (_[w] = z[w]);
        z.setLineDash !== void 0 && (_.setLineDash(z.getLineDash()), _.lineDashOffset = z.lineDashOffset);
      }
      function h(z) {
        z.strokeStyle = z.fillStyle = "#000000", z.fillRule = "nonzero", z.globalAlpha = 1, z.lineWidth = 1, z.lineCap = "butt", z.lineJoin = "miter", z.miterLimit = 10, z.globalCompositeOperation = "source-over", z.font = "10px sans-serif", z.setLineDash !== void 0 && (z.setLineDash([]), z.lineDashOffset = 0), O.isNodeJS || (z.filter = "none");
      }
      function P(z, _, g, w) {
        const S = z.length;
        for (let M = 3; M < S; M += 4) {
          const q = z[M];
          if (q === 0)
            z[M - 3] = _, z[M - 2] = g, z[M - 1] = w;
          else if (q < 255) {
            const L = 255 - q;
            z[M - 3] = z[M - 3] * q + _ * L >> 8, z[M - 2] = z[M - 2] * q + g * L >> 8, z[M - 1] = z[M - 1] * q + w * L >> 8;
          }
        }
      }
      function p(z, _, g) {
        const w = z.length;
        for (let S = 3; S < w; S += 4) {
          const M = g ? g[z[S]] : z[S];
          _[S] = _[S] * M * 0.00392156862745098 | 0;
        }
      }
      function i(z, _, g) {
        const w = z.length;
        for (let S = 3; S < w; S += 4) {
          const M = 77 * z[S - 3] + 152 * z[S - 2] + 28 * z[S - 1];
          _[S] = g ? _[S] * g[M >> 8] >> 8 : _[S] * M >> 16;
        }
      }
      function m(z, _, g, w) {
        const S = w[0], M = w[1], q = w[2] - S, L = w[3] - M;
        q !== 0 && L !== 0 && (function(V, G, X, J, Q, U, de, le, E, F, N) {
          const B = !!U, Y = B ? U[0] : 0, ee = B ? U[1] : 0, re = B ? U[2] : 0;
          let ie;
          ie = Q === "Luminosity" ? i : p;
          const Ae = Math.min(J, Math.ceil(1048576 / X));
          for (let ce = 0; ce < J; ce += Ae) {
            const ve = Math.min(Ae, J - ce), he = V.getImageData(le - F, ce + (E - N), X, ve), me = G.getImageData(le, ce + E, X, ve);
            B && P(he.data, Y, ee, re), ie(he.data, me.data, de), G.putImageData(me, le, ce + E);
          }
        }(_.context, g, q, L, _.subtype, _.backdrop, _.transferMap, S, M, _.offsetX, _.offsetY), z.save(), z.globalAlpha = 1, z.globalCompositeOperation = "source-over", z.setTransform(1, 0, 0, 1, 0, 0), z.drawImage(g.canvas, 0, 0), z.restore());
      }
      function n(z, _) {
        const g = t.Util.singularValueDecompose2dScale(z);
        g[0] = Math.fround(g[0]), g[1] = Math.fround(g[1]);
        const w = Math.fround((globalThis.devicePixelRatio || 1) * a.PixelsPerInch.PDF_TO_CSS_UNITS);
        return _ !== void 0 ? _ : g[0] <= w || g[1] <= w;
      }
      const s = ["butt", "round", "square"], r = ["miter", "round", "bevel"], u = {}, C = {}, K = class {
        constructor(_, g, w, S, M, q, L, H) {
          te(this, o);
          te(this, $);
          let { optionalContentConfig: V, markedContentStack: G = null } = q;
          this.ctx = _, this.current = new k(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = g, this.objs = w, this.canvasFactory = S, this.filterFactory = M, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = G || [], this.optionalContentConfig = V, this.cachedCanvases = new v(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = L, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = H, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
        }
        getObject(_) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return typeof _ == "string" ? _.startsWith("g_") ? this.commonObjs.get(_) : this.objs.get(_) : g;
        }
        beginDrawing(_) {
          let { transform: g, viewport: w, transparency: S = !1, background: M = null } = _;
          const q = this.ctx.canvas.width, L = this.ctx.canvas.height, H = this.ctx.fillStyle;
          if (this.ctx.fillStyle = M || "#ffffff", this.ctx.fillRect(0, 0, q, L), this.ctx.fillStyle = H, S) {
            const V = this.cachedCanvases.getCanvas("transparent", q, L);
            this.compositeCtx = this.ctx, this.transparentCanvas = V.canvas, this.ctx = V.context, this.ctx.save(), this.ctx.transform(...(0, a.getCurrentTransform)(this.compositeCtx));
          }
          this.ctx.save(), h(this.ctx), g && (this.ctx.transform(...g), this.outputScaleX = g[0], this.outputScaleY = g[0]), this.ctx.transform(...w.transform), this.viewportScale = w.scale, this.baseTransform = (0, a.getCurrentTransform)(this.ctx);
        }
        executeOperatorList(_, g, w, S) {
          const M = _.argsArray, q = _.fnArray;
          let L = g || 0;
          const H = M.length;
          if (H === L)
            return L;
          const V = H - L > 10 && typeof w == "function", G = V ? Date.now() + 15 : 0;
          let X = 0;
          const J = this.commonObjs, Q = this.objs;
          let U;
          for (; ; ) {
            if (S !== void 0 && L === S.nextBreakPoint)
              return S.breakIt(L, w), L;
            if (U = q[L], U !== t.OPS.dependency)
              this[U].apply(this, M[L]);
            else
              for (const de of M[L]) {
                const le = de.startsWith("g_") ? J : Q;
                if (!le.has(de))
                  return le.get(de, w), L;
              }
            if (L++, L === H)
              return L;
            if (V && ++X > 10) {
              if (Date.now() > G)
                return w(), L;
              X = 0;
            }
          }
        }
        endDrawing() {
          ne(this, o, wt).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
          for (const _ of this._cachedBitmapsMap.values()) {
            for (const g of _.values())
              typeof HTMLCanvasElement < "u" && g instanceof HTMLCanvasElement && (g.width = g.height = 0);
            _.clear();
          }
          this._cachedBitmapsMap.clear(), ne(this, $, Et).call(this);
        }
        _scaleImage(_, g) {
          const w = _.width, S = _.height;
          let M, q, L = Math.max(Math.hypot(g[0], g[1]), 1), H = Math.max(Math.hypot(g[2], g[3]), 1), V = w, G = S, X = "prescale1";
          for (; L > 2 && V > 1 || H > 2 && G > 1; ) {
            let J = V, Q = G;
            L > 2 && V > 1 && (J = V >= 16384 ? Math.floor(V / 2) - 1 || 1 : Math.ceil(V / 2), L /= V / J), H > 2 && G > 1 && (Q = G >= 16384 ? Math.floor(G / 2) - 1 || 1 : Math.ceil(G) / 2, H /= G / Q), M = this.cachedCanvases.getCanvas(X, J, Q), q = M.context, q.clearRect(0, 0, J, Q), q.drawImage(_, 0, 0, V, G, 0, 0, J, Q), _ = M.canvas, V = J, G = Q, X = X === "prescale1" ? "prescale2" : "prescale1";
          }
          return { img: _, paintWidth: V, paintHeight: G };
        }
        _createMaskCanvas(_) {
          const g = this.ctx, { width: w, height: S } = _, M = this.current.fillColor, q = this.current.patternFill, L = (0, a.getCurrentTransform)(g);
          let H, V, G, X;
          if ((_.bitmap || _.data) && _.count > 1) {
            const re = _.bitmap || _.data.buffer;
            V = JSON.stringify(q ? L : [L.slice(0, 4), M]), H = this._cachedBitmapsMap.get(re), H || (H = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(re, H));
            const ie = H.get(V);
            if (ie && !q)
              return { canvas: ie, offsetX: Math.round(Math.min(L[0], L[2]) + L[4]), offsetY: Math.round(Math.min(L[1], L[3]) + L[5]) };
            G = ie;
          }
          G || (X = this.cachedCanvases.getCanvas("maskCanvas", w, S), d(X.context, _));
          let J = t.Util.transform(L, [1 / w, 0, 0, -1 / S, 0, 0]);
          J = t.Util.transform(J, [1, 0, 0, 1, 0, -S]);
          const Q = t.Util.applyTransform([0, 0], J), U = t.Util.applyTransform([w, S], J), de = t.Util.normalizeRect([Q[0], Q[1], U[0], U[1]]), le = Math.round(de[2] - de[0]) || 1, E = Math.round(de[3] - de[1]) || 1, F = this.cachedCanvases.getCanvas("fillCanvas", le, E), N = F.context, B = Math.min(Q[0], U[0]), Y = Math.min(Q[1], U[1]);
          N.translate(-B, -Y), N.transform(...J), G || (G = this._scaleImage(X.canvas, (0, a.getCurrentTransformInverse)(N)), G = G.img, H && q && H.set(V, G)), N.imageSmoothingEnabled = n((0, a.getCurrentTransform)(N), _.interpolate), A(N, G, 0, 0, G.width, G.height, 0, 0, w, S), N.globalCompositeOperation = "source-in";
          const ee = t.Util.transform((0, a.getCurrentTransformInverse)(N), [1, 0, 0, 1, -B, -Y]);
          return N.fillStyle = q ? M.getPattern(g, this, ee, b.PathType.FILL) : M, N.fillRect(0, 0, w, S), H && !q && (this.cachedCanvases.delete("fillCanvas"), H.set(V, F.canvas)), { canvas: F.canvas, offsetX: Math.round(B), offsetY: Math.round(Y) };
        }
        setLineWidth(_) {
          _ !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = _, this.ctx.lineWidth = _;
        }
        setLineCap(_) {
          this.ctx.lineCap = s[_];
        }
        setLineJoin(_) {
          this.ctx.lineJoin = r[_];
        }
        setMiterLimit(_) {
          this.ctx.miterLimit = _;
        }
        setDash(_, g) {
          const w = this.ctx;
          w.setLineDash !== void 0 && (w.setLineDash(_), w.lineDashOffset = g);
        }
        setRenderingIntent(_) {
        }
        setFlatness(_) {
        }
        setGState(_) {
          for (const [g, w] of _)
            switch (g) {
              case "LW":
                this.setLineWidth(w);
                break;
              case "LC":
                this.setLineCap(w);
                break;
              case "LJ":
                this.setLineJoin(w);
                break;
              case "ML":
                this.setMiterLimit(w);
                break;
              case "D":
                this.setDash(w[0], w[1]);
                break;
              case "RI":
                this.setRenderingIntent(w);
                break;
              case "FL":
                this.setFlatness(w);
                break;
              case "Font":
                this.setFont(w[0], w[1]);
                break;
              case "CA":
                this.current.strokeAlpha = w;
                break;
              case "ca":
                this.current.fillAlpha = w, this.ctx.globalAlpha = w;
                break;
              case "BM":
                this.ctx.globalCompositeOperation = w;
                break;
              case "SMask":
                this.current.activeSMask = w ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                break;
              case "TR":
                this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(w);
            }
        }
        get inSMaskMode() {
          return !!this.suspendedCtx;
        }
        checkSMaskState() {
          const _ = this.inSMaskMode;
          this.current.activeSMask && !_ ? this.beginSMaskMode() : !this.current.activeSMask && _ && this.endSMaskMode();
        }
        beginSMaskMode() {
          if (this.inSMaskMode)
            throw new Error("beginSMaskMode called while already in smask mode");
          const _ = this.ctx.canvas.width, g = this.ctx.canvas.height, w = "smaskGroupAt" + this.groupLevel, S = this.cachedCanvases.getCanvas(w, _, g);
          this.suspendedCtx = this.ctx, this.ctx = S.context;
          const M = this.ctx;
          M.setTransform(...(0, a.getCurrentTransform)(this.suspendedCtx)), y(this.suspendedCtx, M), function(L, H) {
            if (L._removeMirroring)
              throw new Error("Context is already forwarding operations.");
            L.__originalSave = L.save, L.__originalRestore = L.restore, L.__originalRotate = L.rotate, L.__originalScale = L.scale, L.__originalTranslate = L.translate, L.__originalTransform = L.transform, L.__originalSetTransform = L.setTransform, L.__originalResetTransform = L.resetTransform, L.__originalClip = L.clip, L.__originalMoveTo = L.moveTo, L.__originalLineTo = L.lineTo, L.__originalBezierCurveTo = L.bezierCurveTo, L.__originalRect = L.rect, L.__originalClosePath = L.closePath, L.__originalBeginPath = L.beginPath, L._removeMirroring = () => {
              L.save = L.__originalSave, L.restore = L.__originalRestore, L.rotate = L.__originalRotate, L.scale = L.__originalScale, L.translate = L.__originalTranslate, L.transform = L.__originalTransform, L.setTransform = L.__originalSetTransform, L.resetTransform = L.__originalResetTransform, L.clip = L.__originalClip, L.moveTo = L.__originalMoveTo, L.lineTo = L.__originalLineTo, L.bezierCurveTo = L.__originalBezierCurveTo, L.rect = L.__originalRect, L.closePath = L.__originalClosePath, L.beginPath = L.__originalBeginPath, delete L._removeMirroring;
            }, L.save = function() {
              H.save(), this.__originalSave();
            }, L.restore = function() {
              H.restore(), this.__originalRestore();
            }, L.translate = function(G, X) {
              H.translate(G, X), this.__originalTranslate(G, X);
            }, L.scale = function(G, X) {
              H.scale(G, X), this.__originalScale(G, X);
            }, L.transform = function(G, X, J, Q, U, de) {
              H.transform(G, X, J, Q, U, de), this.__originalTransform(G, X, J, Q, U, de);
            }, L.setTransform = function(G, X, J, Q, U, de) {
              H.setTransform(G, X, J, Q, U, de), this.__originalSetTransform(G, X, J, Q, U, de);
            }, L.resetTransform = function() {
              H.resetTransform(), this.__originalResetTransform();
            }, L.rotate = function(G) {
              H.rotate(G), this.__originalRotate(G);
            }, L.clip = function(G) {
              H.clip(G), this.__originalClip(G);
            }, L.moveTo = function(V, G) {
              H.moveTo(V, G), this.__originalMoveTo(V, G);
            }, L.lineTo = function(V, G) {
              H.lineTo(V, G), this.__originalLineTo(V, G);
            }, L.bezierCurveTo = function(V, G, X, J, Q, U) {
              H.bezierCurveTo(V, G, X, J, Q, U), this.__originalBezierCurveTo(V, G, X, J, Q, U);
            }, L.rect = function(V, G, X, J) {
              H.rect(V, G, X, J), this.__originalRect(V, G, X, J);
            }, L.closePath = function() {
              H.closePath(), this.__originalClosePath();
            }, L.beginPath = function() {
              H.beginPath(), this.__originalBeginPath();
            };
          }(M, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        }
        endSMaskMode() {
          if (!this.inSMaskMode)
            throw new Error("endSMaskMode called while not in smask mode");
          this.ctx._removeMirroring(), y(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
        }
        compose(_) {
          if (!this.current.activeSMask)
            return;
          _ ? (_[0] = Math.floor(_[0]), _[1] = Math.floor(_[1]), _[2] = Math.ceil(_[2]), _[3] = Math.ceil(_[3])) : _ = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
          const g = this.current.activeSMask;
          m(this.suspendedCtx, g, this.ctx, _), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
        }
        save() {
          this.inSMaskMode ? (y(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
          const _ = this.current;
          this.stateStack.push(_), this.current = _.clone();
        }
        restore() {
          this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), y(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
        }
        transform(_, g, w, S, M, q) {
          this.ctx.transform(_, g, w, S, M, q), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
        }
        constructPath(_, g, w) {
          const S = this.ctx, M = this.current;
          let q, L, H = M.x, V = M.y;
          const G = (0, a.getCurrentTransform)(S), X = G[0] === 0 && G[3] === 0 || G[1] === 0 && G[2] === 0, J = X ? w.slice(0) : null;
          for (let Q = 0, U = 0, de = _.length; Q < de; Q++)
            switch (0 | _[Q]) {
              case t.OPS.rectangle:
                H = g[U++], V = g[U++];
                const le = g[U++], E = g[U++], F = H + le, N = V + E;
                S.moveTo(H, V), le === 0 || E === 0 ? S.lineTo(F, N) : (S.lineTo(F, V), S.lineTo(F, N), S.lineTo(H, N)), X || M.updateRectMinMax(G, [H, V, F, N]), S.closePath();
                break;
              case t.OPS.moveTo:
                H = g[U++], V = g[U++], S.moveTo(H, V), X || M.updatePathMinMax(G, H, V);
                break;
              case t.OPS.lineTo:
                H = g[U++], V = g[U++], S.lineTo(H, V), X || M.updatePathMinMax(G, H, V);
                break;
              case t.OPS.curveTo:
                q = H, L = V, H = g[U + 4], V = g[U + 5], S.bezierCurveTo(g[U], g[U + 1], g[U + 2], g[U + 3], H, V), M.updateCurvePathMinMax(G, q, L, g[U], g[U + 1], g[U + 2], g[U + 3], H, V, J), U += 6;
                break;
              case t.OPS.curveTo2:
                q = H, L = V, S.bezierCurveTo(H, V, g[U], g[U + 1], g[U + 2], g[U + 3]), M.updateCurvePathMinMax(G, q, L, H, V, g[U], g[U + 1], g[U + 2], g[U + 3], J), H = g[U + 2], V = g[U + 3], U += 4;
                break;
              case t.OPS.curveTo3:
                q = H, L = V, H = g[U + 2], V = g[U + 3], S.bezierCurveTo(g[U], g[U + 1], H, V, H, V), M.updateCurvePathMinMax(G, q, L, g[U], g[U + 1], H, V, H, V, J), U += 4;
                break;
              case t.OPS.closePath:
                S.closePath();
            }
          X && M.updateScalingPathMinMax(G, J), M.setCurrentPoint(H, V);
        }
        closePath() {
          this.ctx.closePath();
        }
        stroke() {
          let _ = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          const g = this.ctx, w = this.current.strokeColor;
          g.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof w == "object" && w != null && w.getPattern ? (g.save(), g.strokeStyle = w.getPattern(g, this, (0, a.getCurrentTransformInverse)(g), b.PathType.STROKE), this.rescaleAndStroke(!1), g.restore()) : this.rescaleAndStroke(!0)), _ && this.consumePath(this.current.getClippedPathBoundingBox()), g.globalAlpha = this.current.fillAlpha;
        }
        closeStroke() {
          this.closePath(), this.stroke();
        }
        fill() {
          let _ = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          const g = this.ctx, w = this.current.fillColor;
          let S = !1;
          this.current.patternFill && (g.save(), g.fillStyle = w.getPattern(g, this, (0, a.getCurrentTransformInverse)(g), b.PathType.FILL), S = !0);
          const M = this.current.getClippedPathBoundingBox();
          this.contentVisible && M !== null && (this.pendingEOFill ? (g.fill("evenodd"), this.pendingEOFill = !1) : g.fill()), S && g.restore(), _ && this.consumePath(M);
        }
        eoFill() {
          this.pendingEOFill = !0, this.fill();
        }
        fillStroke() {
          this.fill(!1), this.stroke(!1), this.consumePath();
        }
        eoFillStroke() {
          this.pendingEOFill = !0, this.fillStroke();
        }
        closeFillStroke() {
          this.closePath(), this.fillStroke();
        }
        closeEOFillStroke() {
          this.pendingEOFill = !0, this.closePath(), this.fillStroke();
        }
        endPath() {
          this.consumePath();
        }
        clip() {
          this.pendingClip = u;
        }
        eoClip() {
          this.pendingClip = C;
        }
        beginText() {
          this.current.textMatrix = t.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        endText() {
          const _ = this.pendingTextPaths, g = this.ctx;
          if (_ !== void 0) {
            g.save(), g.beginPath();
            for (const w of _)
              g.setTransform(...w.transform), g.translate(w.x, w.y), w.addToPath(g, w.fontSize);
            g.restore(), g.clip(), g.beginPath(), delete this.pendingTextPaths;
          } else
            g.beginPath();
        }
        setCharSpacing(_) {
          this.current.charSpacing = _;
        }
        setWordSpacing(_) {
          this.current.wordSpacing = _;
        }
        setHScale(_) {
          this.current.textHScale = _ / 100;
        }
        setLeading(_) {
          this.current.leading = -_;
        }
        setFont(_, g) {
          var w;
          const S = this.commonObjs.get(_), M = this.current;
          if (!S)
            throw new Error(`Can't find font for ${_}`);
          if (M.fontMatrix = S.fontMatrix || t.FONT_IDENTITY_MATRIX, M.fontMatrix[0] !== 0 && M.fontMatrix[3] !== 0 || (0, t.warn)("Invalid font matrix for font " + _), g < 0 ? (g = -g, M.fontDirection = -1) : M.fontDirection = 1, this.current.font = S, this.current.fontSize = g, S.isType3Font)
            return;
          const q = S.loadedName || "sans-serif", L = ((w = S.systemFontInfo) === null || w === void 0 ? void 0 : w.css) || `"${q}", ${S.fallbackName}`;
          let H = "normal";
          S.black ? H = "900" : S.bold && (H = "bold");
          const V = S.italic ? "italic" : "normal";
          let G = g;
          g < 16 ? G = 16 : g > 100 && (G = 100), this.current.fontSizeScale = g / G, this.ctx.font = `${V} ${H} ${G}px ${L}`;
        }
        setTextRenderingMode(_) {
          this.current.textRenderingMode = _;
        }
        setTextRise(_) {
          this.current.textRise = _;
        }
        moveText(_, g) {
          this.current.x = this.current.lineX += _, this.current.y = this.current.lineY += g;
        }
        setLeadingMoveText(_, g) {
          this.setLeading(-g), this.moveText(_, g);
        }
        setTextMatrix(_, g, w, S, M, q) {
          this.current.textMatrix = [_, g, w, S, M, q], this.current.textMatrixScale = Math.hypot(_, g), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        paintChar(_, g, w, S) {
          const M = this.ctx, q = this.current, L = q.font, H = q.textRenderingMode, V = q.fontSize / q.fontSizeScale, G = H & t.TextRenderingMode.FILL_STROKE_MASK, X = !!(H & t.TextRenderingMode.ADD_TO_PATH_FLAG), J = q.patternFill && !L.missingFile;
          let Q;
          (L.disableFontFace || X || J) && (Q = L.getPathGenerator(this.commonObjs, _)), L.disableFontFace || J ? (M.save(), M.translate(g, w), M.beginPath(), Q(M, V), S && M.setTransform(...S), G !== t.TextRenderingMode.FILL && G !== t.TextRenderingMode.FILL_STROKE || M.fill(), G !== t.TextRenderingMode.STROKE && G !== t.TextRenderingMode.FILL_STROKE || M.stroke(), M.restore()) : (G !== t.TextRenderingMode.FILL && G !== t.TextRenderingMode.FILL_STROKE || M.fillText(_, g, w), G !== t.TextRenderingMode.STROKE && G !== t.TextRenderingMode.FILL_STROKE || M.strokeText(_, g, w)), X && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: (0, a.getCurrentTransform)(M), x: g, y: w, fontSize: V, addToPath: Q });
        }
        get isFontSubpixelAAEnabled() {
          const { context: _ } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
          _.scale(1.5, 1), _.fillText("I", 0, 10);
          const g = _.getImageData(0, 0, 10, 10).data;
          let w = !1;
          for (let S = 3; S < g.length; S += 4)
            if (g[S] > 0 && g[S] < 255) {
              w = !0;
              break;
            }
          return (0, t.shadow)(this, "isFontSubpixelAAEnabled", w);
        }
        showText(_) {
          const g = this.current, w = g.font;
          if (w.isType3Font)
            return this.showType3Text(_);
          const S = g.fontSize;
          if (S === 0)
            return;
          const M = this.ctx, q = g.fontSizeScale, L = g.charSpacing, H = g.wordSpacing, V = g.fontDirection, G = g.textHScale * V, X = _.length, J = w.vertical, Q = J ? 1 : -1, U = w.defaultVMetrics, de = S * g.fontMatrix[0], le = g.textRenderingMode === t.TextRenderingMode.FILL && !w.disableFontFace && !g.patternFill;
          M.save(), M.transform(...g.textMatrix), M.translate(g.x, g.y + g.textRise), V > 0 ? M.scale(G, -1) : M.scale(G, 1);
          let E;
          if (g.patternFill) {
            M.save();
            const ee = g.fillColor.getPattern(M, this, (0, a.getCurrentTransformInverse)(M), b.PathType.FILL);
            E = (0, a.getCurrentTransform)(M), M.restore(), M.fillStyle = ee;
          }
          let F = g.lineWidth;
          const N = g.textMatrixScale;
          if (N === 0 || F === 0) {
            const ee = g.textRenderingMode & t.TextRenderingMode.FILL_STROKE_MASK;
            ee !== t.TextRenderingMode.STROKE && ee !== t.TextRenderingMode.FILL_STROKE || (F = this.getSinglePixelWidth());
          } else
            F /= N;
          if (q !== 1 && (M.scale(q, q), F /= q), M.lineWidth = F, w.isInvalidPDFjsFont) {
            const ee = [];
            let re = 0;
            for (const ie of _)
              ee.push(ie.unicode), re += ie.width;
            M.fillText(ee.join(""), 0, 0), g.x += re * de * G, M.restore(), this.compose();
            return;
          }
          let B, Y = 0;
          for (B = 0; B < X; ++B) {
            const ee = _[B];
            if (typeof ee == "number") {
              Y += Q * ee * S / 1e3;
              continue;
            }
            let re = !1;
            const ie = (ee.isSpace ? H : 0) + L, Ae = ee.fontChar, ce = ee.accent;
            let ve, he, me, ye = ee.width;
            if (J) {
              const _e = ee.vmetric || U, Ce = -(ee.vmetric ? _e[1] : 0.5 * ye) * de, Z = _e[2] * de;
              ye = _e ? -_e[0] : ye, ve = Ce / q, he = (Y + Z) / q;
            } else
              ve = Y / q, he = 0;
            if (w.remeasure && ye > 0) {
              const _e = 1e3 * M.measureText(Ae).width / S * q;
              if (ye < _e && this.isFontSubpixelAAEnabled) {
                const Ce = ye / _e;
                re = !0, M.save(), M.scale(Ce, 1), ve /= Ce;
              } else
                ye !== _e && (ve += (ye - _e) / 2e3 * S / q);
            }
            if (this.contentVisible && (ee.isInFont || w.missingFile)) {
              if (le && !ce)
                M.fillText(Ae, ve, he);
              else if (this.paintChar(Ae, ve, he, E), ce) {
                const _e = ve + S * ce.offset.x / q, Ce = he - S * ce.offset.y / q;
                this.paintChar(ce.fontChar, _e, Ce, E);
              }
            }
            me = J ? ye * de - ie * V : ye * de + ie * V, Y += me, re && M.restore();
          }
          J ? g.y -= Y : g.x += Y * G, M.restore(), this.compose();
        }
        showType3Text(_) {
          const g = this.ctx, w = this.current, S = w.font, M = w.fontSize, q = w.fontDirection, L = S.vertical ? 1 : -1, H = w.charSpacing, V = w.wordSpacing, G = w.textHScale * q, X = w.fontMatrix || t.FONT_IDENTITY_MATRIX, J = _.length;
          let Q, U, de, le;
          if (w.textRenderingMode !== t.TextRenderingMode.INVISIBLE && M !== 0) {
            for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, g.save(), g.transform(...w.textMatrix), g.translate(w.x, w.y), g.scale(G, q), Q = 0; Q < J; ++Q) {
              if (U = _[Q], typeof U == "number") {
                le = L * U * M / 1e3, this.ctx.translate(le, 0), w.x += le * G;
                continue;
              }
              const E = (U.isSpace ? V : 0) + H, F = S.charProcOperatorList[U.operatorListId];
              if (!F) {
                (0, t.warn)(`Type3 character "${U.operatorListId}" is not available.`);
                continue;
              }
              this.contentVisible && (this.processingType3 = U, this.save(), g.scale(M, M), g.transform(...X), this.executeOperatorList(F), this.restore()), de = t.Util.applyTransform([U.width, 0], X)[0] * M + E, g.translate(de, 0), w.x += de * G;
            }
            g.restore(), this.processingType3 = null;
          }
        }
        setCharWidth(_, g) {
        }
        setCharWidthAndBounds(_, g, w, S, M, q) {
          this.ctx.rect(w, S, M - w, q - S), this.ctx.clip(), this.endPath();
        }
        getColorN_Pattern(_) {
          let g;
          if (_[0] === "TilingPattern") {
            const w = _[1], S = this.baseTransform || (0, a.getCurrentTransform)(this.ctx), M = { createCanvasGraphics: (q) => new K(q, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }) };
            g = new b.TilingPattern(_, w, this.ctx, M, S);
          } else
            g = this._getPattern(_[1], _[2]);
          return g;
        }
        setStrokeColorN() {
          this.current.strokeColor = this.getColorN_Pattern(arguments);
        }
        setFillColorN() {
          this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
        }
        setStrokeRGBColor(_, g, w) {
          const S = t.Util.makeHexColor(_, g, w);
          this.ctx.strokeStyle = S, this.current.strokeColor = S;
        }
        setFillRGBColor(_, g, w) {
          const S = t.Util.makeHexColor(_, g, w);
          this.ctx.fillStyle = S, this.current.fillColor = S, this.current.patternFill = !1;
        }
        _getPattern(_) {
          let g, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return this.cachedPatterns.has(_) ? g = this.cachedPatterns.get(_) : (g = (0, b.getShadingPattern)(this.getObject(_)), this.cachedPatterns.set(_, g)), w && (g.matrix = w), g;
        }
        shadingFill(_) {
          if (!this.contentVisible)
            return;
          const g = this.ctx;
          this.save();
          const w = this._getPattern(_);
          g.fillStyle = w.getPattern(g, this, (0, a.getCurrentTransformInverse)(g), b.PathType.SHADING);
          const S = (0, a.getCurrentTransformInverse)(g);
          if (S) {
            const M = g.canvas, q = M.width, L = M.height, H = t.Util.applyTransform([0, 0], S), V = t.Util.applyTransform([0, L], S), G = t.Util.applyTransform([q, 0], S), X = t.Util.applyTransform([q, L], S), J = Math.min(H[0], V[0], G[0], X[0]), Q = Math.min(H[1], V[1], G[1], X[1]), U = Math.max(H[0], V[0], G[0], X[0]), de = Math.max(H[1], V[1], G[1], X[1]);
            this.ctx.fillRect(J, Q, U - J, de - Q);
          } else
            this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
          this.compose(this.current.getClippedPathBoundingBox()), this.restore();
        }
        beginInlineImage() {
          (0, t.unreachable)("Should not call beginInlineImage");
        }
        beginImageData() {
          (0, t.unreachable)("Should not call beginImageData");
        }
        paintFormXObjectBegin(_, g) {
          if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(_) && _.length === 6 && this.transform(..._), this.baseTransform = (0, a.getCurrentTransform)(this.ctx), g)) {
            const w = g[2] - g[0], S = g[3] - g[1];
            this.ctx.rect(g[0], g[1], w, S), this.current.updateRectMinMax((0, a.getCurrentTransform)(this.ctx), g), this.clip(), this.endPath();
          }
        }
        paintFormXObjectEnd() {
          this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
        }
        beginGroup(_) {
          if (!this.contentVisible)
            return;
          this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
          const g = this.ctx;
          _.isolated || (0, t.info)("TODO: Support non-isolated groups."), _.knockout && (0, t.warn)("Knockout groups not supported.");
          const w = (0, a.getCurrentTransform)(g);
          if (_.matrix && g.transform(..._.matrix), !_.bbox)
            throw new Error("Bounding box is required.");
          let S = t.Util.getAxialAlignedBoundingBox(_.bbox, (0, a.getCurrentTransform)(g));
          const M = [0, 0, g.canvas.width, g.canvas.height];
          S = t.Util.intersect(S, M) || [0, 0, 0, 0];
          const q = Math.floor(S[0]), L = Math.floor(S[1]);
          let H = Math.max(Math.ceil(S[2]) - q, 1), V = Math.max(Math.ceil(S[3]) - L, 1), G = 1, X = 1;
          H > f && (G = H / f, H = f), V > f && (X = V / f, V = f), this.current.startNewPathAndClipBox([0, 0, H, V]);
          let J = "groupAt" + this.groupLevel;
          _.smask && (J += "_smask_" + this.smaskCounter++ % 2);
          const Q = this.cachedCanvases.getCanvas(J, H, V), U = Q.context;
          U.scale(1 / G, 1 / X), U.translate(-q, -L), U.transform(...w), _.smask ? this.smaskStack.push({ canvas: Q.canvas, context: U, offsetX: q, offsetY: L, scaleX: G, scaleY: X, subtype: _.smask.subtype, backdrop: _.smask.backdrop, transferMap: _.smask.transferMap || null, startTransformInverse: null }) : (g.setTransform(1, 0, 0, 1, 0, 0), g.translate(q, L), g.scale(G, X), g.save()), y(g, U), this.ctx = U, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(g), this.groupLevel++;
        }
        endGroup(_) {
          if (!this.contentVisible)
            return;
          this.groupLevel--;
          const g = this.ctx, w = this.groupStack.pop();
          if (this.ctx = w, this.ctx.imageSmoothingEnabled = !1, _.smask)
            this.tempSMask = this.smaskStack.pop(), this.restore();
          else {
            this.ctx.restore();
            const S = (0, a.getCurrentTransform)(this.ctx);
            this.restore(), this.ctx.save(), this.ctx.setTransform(...S);
            const M = t.Util.getAxialAlignedBoundingBox([0, 0, g.canvas.width, g.canvas.height], S);
            this.ctx.drawImage(g.canvas, 0, 0), this.ctx.restore(), this.compose(M);
          }
        }
        beginAnnotation(_, g, w, S, M) {
          if (ne(this, o, wt).call(this), h(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(g) && g.length === 4) {
            const q = g[2] - g[0], L = g[3] - g[1];
            if (M && this.annotationCanvasMap) {
              (w = w.slice())[4] -= g[0], w[5] -= g[1], (g = g.slice())[0] = g[1] = 0, g[2] = q, g[3] = L;
              const [H, V] = t.Util.singularValueDecompose2dScale((0, a.getCurrentTransform)(this.ctx)), { viewportScale: G } = this, X = Math.ceil(q * this.outputScaleX * G), J = Math.ceil(L * this.outputScaleY * G);
              this.annotationCanvas = this.canvasFactory.create(X, J);
              const { canvas: Q, context: U } = this.annotationCanvas;
              this.annotationCanvasMap.set(_, Q), this.annotationCanvas.savedCtx = this.ctx, this.ctx = U, this.ctx.save(), this.ctx.setTransform(H, 0, 0, -V, 0, L * V), h(this.ctx);
            } else
              h(this.ctx), this.ctx.rect(g[0], g[1], q, L), this.ctx.clip(), this.endPath();
          }
          this.current = new k(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...w), this.transform(...S);
        }
        endAnnotation() {
          this.annotationCanvas && (this.ctx.restore(), ne(this, $, Et).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
        }
        paintImageMaskXObject(_) {
          if (!this.contentVisible)
            return;
          const g = _.count;
          (_ = this.getObject(_.data, _)).count = g;
          const w = this.ctx, S = this.processingType3;
          if (S && (S.compiled === void 0 && (S.compiled = function(H) {
            const { width: V, height: G } = H;
            if (V > 1e3 || G > 1e3)
              return null;
            const X = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), J = V + 1;
            let Q, U, de, le = new Uint8Array(J * (G + 1));
            const E = V + 7 & -8;
            let F = new Uint8Array(E * G), N = 0;
            for (const re of H.data) {
              let ie = 128;
              for (; ie > 0; )
                F[N++] = re & ie ? 0 : 255, ie >>= 1;
            }
            let B = 0;
            for (N = 0, F[N] !== 0 && (le[0] = 1, ++B), U = 1; U < V; U++)
              F[N] !== F[N + 1] && (le[U] = F[N] ? 2 : 1, ++B), N++;
            for (F[N] !== 0 && (le[U] = 2, ++B), Q = 1; Q < G; Q++) {
              N = Q * E, de = Q * J, F[N - E] !== F[N] && (le[de] = F[N] ? 1 : 8, ++B);
              let re = (F[N] ? 4 : 0) + (F[N - E] ? 8 : 0);
              for (U = 1; U < V; U++)
                re = (re >> 2) + (F[N + 1] ? 4 : 0) + (F[N - E + 1] ? 8 : 0), X[re] && (le[de + U] = X[re], ++B), N++;
              if (F[N - E] !== F[N] && (le[de + U] = F[N] ? 2 : 4, ++B), B > 1e3)
                return null;
            }
            for (N = E * (G - 1), de = Q * J, F[N] !== 0 && (le[de] = 8, ++B), U = 1; U < V; U++)
              F[N] !== F[N + 1] && (le[de + U] = F[N] ? 4 : 8, ++B), N++;
            if (F[N] !== 0 && (le[de + U] = 4, ++B), B > 1e3)
              return null;
            const Y = new Int32Array([0, J, -1, 0, -J, 0, 0, 0, 1]), ee = new Path2D();
            for (Q = 0; B && Q <= G; Q++) {
              let re = Q * J;
              const ie = re + V;
              for (; re < ie && !le[re]; )
                re++;
              if (re === ie)
                continue;
              ee.moveTo(re % J, Q);
              const Ae = re;
              let ce = le[re];
              do {
                const ve = Y[ce];
                do
                  re += ve;
                while (!le[re]);
                const he = le[re];
                he !== 5 && he !== 10 ? (ce = he, le[re] = 0) : (ce = he & 51 * ce >> 4, le[re] &= ce >> 2 | ce << 2), ee.lineTo(re % J, re / J | 0), le[re] || --B;
              } while (Ae !== re);
              --Q;
            }
            return F = null, le = null, function(re) {
              re.save(), re.scale(1 / V, -1 / G), re.translate(0, -G), re.fill(ee), re.beginPath(), re.restore();
            };
          }(_)), S.compiled)) {
            S.compiled(w);
            return;
          }
          const M = this._createMaskCanvas(_), q = M.canvas;
          w.save(), w.setTransform(1, 0, 0, 1, 0, 0), w.drawImage(q, M.offsetX, M.offsetY), w.restore(), this.compose();
        }
        paintImageMaskXObjectRepeat(_, g) {
          let w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, M = arguments.length > 4 ? arguments[4] : void 0, q = arguments.length > 5 ? arguments[5] : void 0;
          if (!this.contentVisible)
            return;
          _ = this.getObject(_.data, _);
          const L = this.ctx;
          L.save();
          const H = (0, a.getCurrentTransform)(L);
          L.transform(g, w, S, M, 0, 0);
          const V = this._createMaskCanvas(_);
          L.setTransform(1, 0, 0, 1, V.offsetX - H[4], V.offsetY - H[5]);
          for (let G = 0, X = q.length; G < X; G += 2) {
            const J = t.Util.transform(H, [g, w, S, M, q[G], q[G + 1]]), [Q, U] = t.Util.applyTransform([0, 0], J);
            L.drawImage(V.canvas, Q, U);
          }
          L.restore(), this.compose();
        }
        paintImageMaskXObjectGroup(_) {
          if (!this.contentVisible)
            return;
          const g = this.ctx, w = this.current.fillColor, S = this.current.patternFill;
          for (const M of _) {
            const { data: q, width: L, height: H, transform: V } = M, G = this.cachedCanvases.getCanvas("maskCanvas", L, H), X = G.context;
            X.save(), d(X, this.getObject(q, M)), X.globalCompositeOperation = "source-in", X.fillStyle = S ? w.getPattern(X, this, (0, a.getCurrentTransformInverse)(g), b.PathType.FILL) : w, X.fillRect(0, 0, L, H), X.restore(), g.save(), g.transform(...V), g.scale(1, -1), A(g, G.canvas, 0, 0, L, H, 0, -1, 1, 1), g.restore();
          }
          this.compose();
        }
        paintImageXObject(_) {
          if (!this.contentVisible)
            return;
          const g = this.getObject(_);
          g ? this.paintInlineImageXObject(g) : (0, t.warn)("Dependent image isn't ready yet");
        }
        paintImageXObjectRepeat(_, g, w, S) {
          if (!this.contentVisible)
            return;
          const M = this.getObject(_);
          if (!M) {
            (0, t.warn)("Dependent image isn't ready yet");
            return;
          }
          const q = M.width, L = M.height, H = [];
          for (let V = 0, G = S.length; V < G; V += 2)
            H.push({ transform: [g, 0, 0, w, S[V], S[V + 1]], x: 0, y: 0, w: q, h: L });
          this.paintInlineImageXObjectGroup(M, H);
        }
        applyTransferMapsToCanvas(_) {
          return this.current.transferMaps !== "none" && (_.filter = this.current.transferMaps, _.drawImage(_.canvas, 0, 0), _.filter = "none"), _.canvas;
        }
        applyTransferMapsToBitmap(_) {
          if (this.current.transferMaps === "none")
            return _.bitmap;
          const { bitmap: g, width: w, height: S } = _, M = this.cachedCanvases.getCanvas("inlineImage", w, S), q = M.context;
          return q.filter = this.current.transferMaps, q.drawImage(g, 0, 0), q.filter = "none", M.canvas;
        }
        paintInlineImageXObject(_) {
          if (!this.contentVisible)
            return;
          const g = _.width, w = _.height, S = this.ctx;
          this.save(), O.isNodeJS || (S.filter = "none"), S.scale(1 / g, -1 / w);
          let M;
          if (_.bitmap)
            M = this.applyTransferMapsToBitmap(_);
          else if (typeof HTMLElement == "function" && _ instanceof HTMLElement || !_.data)
            M = _;
          else {
            const L = this.cachedCanvases.getCanvas("inlineImage", g, w).context;
            j(L, _), M = this.applyTransferMapsToCanvas(L);
          }
          const q = this._scaleImage(M, (0, a.getCurrentTransformInverse)(S));
          S.imageSmoothingEnabled = n((0, a.getCurrentTransform)(S), _.interpolate), A(S, q.img, 0, 0, q.paintWidth, q.paintHeight, 0, -w, g, w), this.compose(), this.restore();
        }
        paintInlineImageXObjectGroup(_, g) {
          if (!this.contentVisible)
            return;
          const w = this.ctx;
          let S;
          if (_.bitmap)
            S = _.bitmap;
          else {
            const M = _.width, q = _.height, L = this.cachedCanvases.getCanvas("inlineImage", M, q).context;
            j(L, _), S = this.applyTransferMapsToCanvas(L);
          }
          for (const M of g)
            w.save(), w.transform(...M.transform), w.scale(1, -1), A(w, S, M.x, M.y, M.w, M.h, 0, -1, 1, 1), w.restore();
          this.compose();
        }
        paintSolidColorImageMask() {
          this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
        }
        markPoint(_) {
        }
        markPointProps(_, g) {
        }
        beginMarkedContent(_) {
          this.markedContentStack.push({ visible: !0 });
        }
        beginMarkedContentProps(_, g) {
          _ === "OC" ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(g) }) : this.markedContentStack.push({ visible: !0 }), this.contentVisible = this.isContentVisible();
        }
        endMarkedContent() {
          this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
        }
        beginCompat() {
        }
        endCompat() {
        }
        consumePath(_) {
          const g = this.current.isEmptyClip();
          this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(_);
          const w = this.ctx;
          this.pendingClip && (g || (this.pendingClip === C ? w.clip("evenodd") : w.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), w.beginPath();
        }
        getSinglePixelWidth() {
          if (!this._cachedGetSinglePixelWidth) {
            const _ = (0, a.getCurrentTransform)(this.ctx);
            if (_[1] === 0 && _[2] === 0)
              this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(_[0]), Math.abs(_[3]));
            else {
              const g = Math.abs(_[0] * _[3] - _[2] * _[1]), w = Math.hypot(_[0], _[2]), S = Math.hypot(_[1], _[3]);
              this._cachedGetSinglePixelWidth = Math.max(w, S) / g;
            }
          }
          return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
          if (this._cachedScaleForStroking[0] === -1) {
            const { lineWidth: _ } = this.current, { a: g, b: w, c: S, d: M } = this.ctx.getTransform();
            let q, L;
            if (w === 0 && S === 0) {
              const H = Math.abs(g), V = Math.abs(M);
              if (H === V)
                if (_ === 0)
                  q = L = 1 / H;
                else {
                  const G = H * _;
                  q = L = G < 1 ? 1 / G : 1;
                }
              else if (_ === 0)
                q = 1 / H, L = 1 / V;
              else {
                const G = H * _, X = V * _;
                q = G < 1 ? 1 / G : 1, L = X < 1 ? 1 / X : 1;
              }
            } else {
              const H = Math.abs(g * M - w * S), V = Math.hypot(g, w), G = Math.hypot(S, M);
              if (_ === 0)
                q = G / H, L = V / H;
              else {
                const X = _ * H;
                q = G > X ? G / X : 1, L = V > X ? V / X : 1;
              }
            }
            this._cachedScaleForStroking[0] = q, this._cachedScaleForStroking[1] = L;
          }
          return this._cachedScaleForStroking;
        }
        rescaleAndStroke(_) {
          const { ctx: g } = this, { lineWidth: w } = this.current, [S, M] = this.getScaleForStroking();
          if (g.lineWidth = w || 1, S === 1 && M === 1) {
            g.stroke();
            return;
          }
          const q = g.getLineDash();
          if (_ && g.save(), g.scale(S, M), q.length > 0) {
            const L = Math.max(S, M);
            g.setLineDash(q.map((H) => H / L)), g.lineDashOffset /= L;
          }
          g.stroke(), _ && g.restore();
        }
        isContentVisible() {
          for (let _ = this.markedContentStack.length - 1; _ >= 0; _--)
            if (!this.markedContentStack[_].visible)
              return !1;
          return !0;
        }
      };
      let I = K;
      o = new WeakSet(), wt = function() {
        for (; this.stateStack.length || this.inSMaskMode; )
          this.restore();
        this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
      }, $ = new WeakSet(), Et = function() {
        if (this.pageColors) {
          const _ = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
          if (_ !== "none") {
            const g = this.ctx.filter;
            this.ctx.filter = _, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = g;
          }
        }
      }, c.CanvasGraphics = I;
      for (const z in t.OPS)
        I.prototype[z] !== void 0 && (I.prototype[t.OPS[z]] = I.prototype[z]);
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.TilingPattern = c.PathType = void 0, c.getShadingPattern = function(p) {
        switch (p[0]) {
          case "RadialAxial":
            return new f(p);
          case "Mesh":
            return new A(p);
          case "Dummy":
            return new k();
        }
        throw new Error(`Unknown IR type: ${p[0]}`);
      };
      var t = e(1), a = e(142);
      const b = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
      c.PathType = b;
      function x(P, p) {
        if (!p)
          return;
        const i = p[2] - p[0], m = p[3] - p[1], n = new Path2D();
        n.rect(p[0], p[1], i, m), P.clip(n);
      }
      class O {
        constructor() {
          this.constructor === O && (0, t.unreachable)("Cannot initialize BaseShadingPattern.");
        }
        getPattern() {
          (0, t.unreachable)("Abstract method `getPattern` called.");
        }
      }
      class f extends O {
        constructor(p) {
          super(), this._type = p[1], this._bbox = p[2], this._colorStops = p[3], this._p0 = p[4], this._p1 = p[5], this._r0 = p[6], this._r1 = p[7], this.matrix = null;
        }
        _createGradient(p) {
          let i;
          this._type === "axial" ? i = p.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (i = p.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
          for (const m of this._colorStops)
            i.addColorStop(m[0], m[1]);
          return i;
        }
        getPattern(p, i, m, n) {
          let s;
          if (n === b.STROKE || n === b.FILL) {
            const r = i.current.getClippedPathBoundingBox(n, (0, a.getCurrentTransform)(p)) || [0, 0, 0, 0], u = Math.ceil(r[2] - r[0]) || 1, C = Math.ceil(r[3] - r[1]) || 1, I = i.cachedCanvases.getCanvas("pattern", u, C, !0), o = I.context;
            o.clearRect(0, 0, o.canvas.width, o.canvas.height), o.beginPath(), o.rect(0, 0, o.canvas.width, o.canvas.height), o.translate(-r[0], -r[1]), m = t.Util.transform(m, [1, 0, 0, 1, r[0], r[1]]), o.transform(...i.baseTransform), this.matrix && o.transform(...this.matrix), x(o, this._bbox), o.fillStyle = this._createGradient(o), o.fill(), s = p.createPattern(I.canvas, "no-repeat");
            const D = new DOMMatrix(m);
            s.setTransform(D);
          } else
            x(p, this._bbox), s = this._createGradient(p);
          return s;
        }
      }
      function l(P, p, i, m, n, s, r, u) {
        const C = p.coords, I = p.colors, o = P.data, D = 4 * P.width;
        let $;
        C[i + 1] > C[m + 1] && ($ = i, i = m, m = $, $ = s, s = r, r = $), C[m + 1] > C[n + 1] && ($ = m, m = n, n = $, $ = r, r = u, u = $), C[i + 1] > C[m + 1] && ($ = i, i = m, m = $, $ = s, s = r, r = $);
        const W = (C[i] + p.offsetX) * p.scaleX, K = (C[i + 1] + p.offsetY) * p.scaleY, z = (C[m] + p.offsetX) * p.scaleX, _ = (C[m + 1] + p.offsetY) * p.scaleY, g = (C[n] + p.offsetX) * p.scaleX, w = (C[n + 1] + p.offsetY) * p.scaleY;
        if (K >= w)
          return;
        const S = I[s], M = I[s + 1], q = I[s + 2], L = I[r], H = I[r + 1], V = I[r + 2], G = I[u], X = I[u + 1], J = I[u + 2], Q = Math.round(K), U = Math.round(w);
        let de, le, E, F, N, B, Y, ee;
        for (let re = Q; re <= U; re++) {
          if (re < _) {
            let he;
            he = re < K ? 0 : (K - re) / (K - _), de = W - (W - z) * he, le = S - (S - L) * he, E = M - (M - H) * he, F = q - (q - V) * he;
          } else {
            let he;
            he = re > w ? 1 : _ === w ? 0 : (_ - re) / (_ - w), de = z - (z - g) * he, le = L - (L - G) * he, E = H - (H - X) * he, F = V - (V - J) * he;
          }
          let ie;
          ie = re < K ? 0 : re > w ? 1 : (K - re) / (K - w), N = W - (W - g) * ie, B = S - (S - G) * ie, Y = M - (M - X) * ie, ee = q - (q - J) * ie;
          const Ae = Math.round(Math.min(de, N)), ce = Math.round(Math.max(de, N));
          let ve = D * re + 4 * Ae;
          for (let he = Ae; he <= ce; he++)
            ie = (de - he) / (de - N), ie < 0 ? ie = 0 : ie > 1 && (ie = 1), o[ve++] = le - (le - B) * ie | 0, o[ve++] = E - (E - Y) * ie | 0, o[ve++] = F - (F - ee) * ie | 0, o[ve++] = 255;
        }
      }
      function v(P, p, i) {
        const m = p.coords, n = p.colors;
        let s, r;
        switch (p.type) {
          case "lattice":
            const u = p.verticesPerRow, C = Math.floor(m.length / u) - 1, I = u - 1;
            for (s = 0; s < C; s++) {
              let o = s * u;
              for (let D = 0; D < I; D++, o++)
                l(P, i, m[o], m[o + 1], m[o + u], n[o], n[o + 1], n[o + u]), l(P, i, m[o + u + 1], m[o + 1], m[o + u], n[o + u + 1], n[o + 1], n[o + u]);
            }
            break;
          case "triangles":
            for (s = 0, r = m.length; s < r; s += 3)
              l(P, i, m[s], m[s + 1], m[s + 2], n[s], n[s + 1], n[s + 2]);
            break;
          default:
            throw new Error("illegal figure");
        }
      }
      class A extends O {
        constructor(p) {
          super(), this._coords = p[2], this._colors = p[3], this._figures = p[4], this._bounds = p[5], this._bbox = p[7], this._background = p[8], this.matrix = null;
        }
        _createMeshCanvas(p, i, m) {
          const n = Math.floor(this._bounds[0]), s = Math.floor(this._bounds[1]), r = Math.ceil(this._bounds[2]) - n, u = Math.ceil(this._bounds[3]) - s, C = Math.min(Math.ceil(Math.abs(r * p[0] * 1.1)), 3e3), I = Math.min(Math.ceil(Math.abs(u * p[1] * 1.1)), 3e3), o = r / C, D = u / I, $ = { coords: this._coords, colors: this._colors, offsetX: -n, offsetY: -s, scaleX: 1 / o, scaleY: 1 / D }, W = C + 4, K = I + 4, z = m.getCanvas("mesh", W, K, !1), _ = z.context, g = _.createImageData(C, I);
          if (i) {
            const w = g.data;
            for (let S = 0, M = w.length; S < M; S += 4)
              w[S] = i[0], w[S + 1] = i[1], w[S + 2] = i[2], w[S + 3] = 255;
          }
          for (const w of this._figures)
            v(g, w, $);
          return _.putImageData(g, 2, 2), { canvas: z.canvas, offsetX: n - 2 * o, offsetY: s - 2 * D, scaleX: o, scaleY: D };
        }
        getPattern(p, i, m, n) {
          x(p, this._bbox);
          let s;
          if (n === b.SHADING)
            s = t.Util.singularValueDecompose2dScale((0, a.getCurrentTransform)(p));
          else if (s = t.Util.singularValueDecompose2dScale(i.baseTransform), this.matrix) {
            const u = t.Util.singularValueDecompose2dScale(this.matrix);
            s = [s[0] * u[0], s[1] * u[1]];
          }
          const r = this._createMeshCanvas(s, n === b.SHADING ? null : this._background, i.cachedCanvases);
          return n !== b.SHADING && (p.setTransform(...i.baseTransform), this.matrix && p.transform(...this.matrix)), p.translate(r.offsetX, r.offsetY), p.scale(r.scaleX, r.scaleY), p.createPattern(r.canvas, "no-repeat");
        }
      }
      class k extends O {
        getPattern() {
          return "hotpink";
        }
      }
      const j = 1, d = 2, h = class {
        constructor(p, i, m, n, s) {
          this.operatorList = p[2], this.matrix = p[3] || [1, 0, 0, 1, 0, 0], this.bbox = p[4], this.xstep = p[5], this.ystep = p[6], this.paintType = p[7], this.tilingType = p[8], this.color = i, this.ctx = m, this.canvasGraphicsFactory = n, this.baseTransform = s;
        }
        createPatternCanvas(p) {
          const i = this.operatorList, m = this.bbox, n = this.xstep, s = this.ystep, r = this.paintType, u = this.tilingType, C = this.color, I = this.canvasGraphicsFactory;
          (0, t.info)("TilingType: " + u);
          const o = m[0], D = m[1], $ = m[2], W = m[3], K = t.Util.singularValueDecompose2dScale(this.matrix), z = t.Util.singularValueDecompose2dScale(this.baseTransform), _ = [K[0] * z[0], K[1] * z[1]], g = this.getSizeAndScale(n, this.ctx.canvas.width, _[0]), w = this.getSizeAndScale(s, this.ctx.canvas.height, _[1]), S = p.cachedCanvases.getCanvas("pattern", g.size, w.size, !0), M = S.context, q = I.createCanvasGraphics(M);
          q.groupLevel = p.groupLevel, this.setFillAndStrokeStyleToContext(q, r, C);
          let L = o, H = D, V = $, G = W;
          return o < 0 && (L = 0, V += Math.abs(o)), D < 0 && (H = 0, G += Math.abs(D)), M.translate(-g.scale * L, -w.scale * H), q.transform(g.scale, 0, 0, w.scale, 0, 0), M.save(), this.clipBbox(q, L, H, V, G), q.baseTransform = (0, a.getCurrentTransform)(q.ctx), q.executeOperatorList(i), q.endDrawing(), { canvas: S.canvas, scaleX: g.scale, scaleY: w.scale, offsetX: L, offsetY: H };
        }
        getSizeAndScale(p, i, m) {
          p = Math.abs(p);
          const n = Math.max(h.MAX_PATTERN_SIZE, i);
          let s = Math.ceil(p * m);
          return s >= n ? s = n : m = s / p, { scale: m, size: s };
        }
        clipBbox(p, i, m, n, s) {
          const r = n - i, u = s - m;
          p.ctx.rect(i, m, r, u), p.current.updateRectMinMax((0, a.getCurrentTransform)(p.ctx), [i, m, n, s]), p.clip(), p.endPath();
        }
        setFillAndStrokeStyleToContext(p, i, m) {
          const n = p.ctx, s = p.current;
          switch (i) {
            case j:
              const r = this.ctx;
              n.fillStyle = r.fillStyle, n.strokeStyle = r.strokeStyle, s.fillColor = r.fillStyle, s.strokeColor = r.strokeStyle;
              break;
            case d:
              const u = t.Util.makeHexColor(m[0], m[1], m[2]);
              n.fillStyle = u, n.strokeStyle = u, s.fillColor = u, s.strokeColor = u;
              break;
            default:
              throw new t.FormatError(`Unsupported paint type: ${i}`);
          }
        }
        getPattern(p, i, m, n) {
          let s = m;
          n !== b.SHADING && (s = t.Util.transform(s, i.baseTransform), this.matrix && (s = t.Util.transform(s, this.matrix)));
          const r = this.createPatternCanvas(i);
          let u = new DOMMatrix(s);
          u = u.translate(r.offsetX, r.offsetY), u = u.scale(1 / r.scaleX, 1 / r.scaleY);
          const C = p.createPattern(r.canvas, "repeat");
          return C.setTransform(u), C;
        }
      };
      let y = h;
      Ie(y, "MAX_PATTERN_SIZE", 3e3), c.TilingPattern = y;
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.convertBlackAndWhiteToRGBA = a, c.convertToRGBA = function(x) {
        switch (x.kind) {
          case t.ImageKind.GRAYSCALE_1BPP:
            return a(x);
          case t.ImageKind.RGB_24BPP:
            return function(f) {
              let { src: l, srcPos: v = 0, dest: A, destPos: k = 0, width: j, height: d } = f, y = 0;
              const h = l.length >> 2, P = new Uint32Array(l.buffer, v, h);
              if (t.FeatureTest.isLittleEndian) {
                for (; y < h - 2; y += 3, k += 4) {
                  const p = P[y], i = P[y + 1], m = P[y + 2];
                  A[k] = 4278190080 | p, A[k + 1] = p >>> 24 | i << 8 | 4278190080, A[k + 2] = i >>> 16 | m << 16 | 4278190080, A[k + 3] = m >>> 8 | 4278190080;
                }
                for (let p = 4 * y, i = l.length; p < i; p += 3)
                  A[k++] = l[p] | l[p + 1] << 8 | l[p + 2] << 16 | 4278190080;
              } else {
                for (; y < h - 2; y += 3, k += 4) {
                  const p = P[y], i = P[y + 1], m = P[y + 2];
                  A[k] = 255 | p, A[k + 1] = p << 24 | i >>> 8 | 255, A[k + 2] = i << 16 | m >>> 16 | 255, A[k + 3] = m << 8 | 255;
                }
                for (let p = 4 * y, i = l.length; p < i; p += 3)
                  A[k++] = l[p] << 24 | l[p + 1] << 16 | l[p + 2] << 8 | 255;
              }
              return { srcPos: v, destPos: k };
            }(x);
        }
        return null;
      }, c.grayToRGBA = function(x, O) {
        if (t.FeatureTest.isLittleEndian)
          for (let f = 0, l = x.length; f < l; f++)
            O[f] = 65793 * x[f] | 4278190080;
        else
          for (let f = 0, l = x.length; f < l; f++)
            O[f] = 16843008 * x[f] | 255;
      };
      var t = e(1);
      function a(b) {
        let { src: x, srcPos: O = 0, dest: f, width: l, height: v, nonBlackColor: A = 4294967295, inverseDecode: k = !1 } = b;
        const j = t.FeatureTest.isLittleEndian ? 4278190080 : 255, [d, y] = k ? [A, j] : [j, A], h = l >> 3, P = 7 & l, p = x.length;
        f = new Uint32Array(f.buffer);
        let i = 0;
        for (let m = 0; m < v; m++) {
          for (const s = O + h; O < s; O++) {
            const r = O < p ? x[O] : 255;
            f[i++] = 128 & r ? y : d, f[i++] = 64 & r ? y : d, f[i++] = 32 & r ? y : d, f[i++] = 16 & r ? y : d, f[i++] = 8 & r ? y : d, f[i++] = 4 & r ? y : d, f[i++] = 2 & r ? y : d, f[i++] = 1 & r ? y : d;
          }
          if (P === 0)
            continue;
          const n = O < p ? x[O++] : 255;
          for (let s = 0; s < P; s++)
            f[i++] = n & 1 << 7 - s ? y : d;
        }
        return { srcPos: O, destPos: i };
      }
    }, (R, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.GlobalWorkerOptions = void 0;
      const e = /* @__PURE__ */ Object.create(null);
      c.GlobalWorkerOptions = e, e.workerPort = null, e.workerSrc = "";
    }, (R, c, e) => {
      var y, Yt, P, Kt, i, ft, n;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.MessageHandler = void 0;
      var t = e(1);
      const a = 1, b = 2, x = 1, O = 2, f = 3, l = 4, v = 5, A = 6, k = 7, j = 8;
      function d(s) {
        switch (s instanceof Error || typeof s == "object" && s !== null || (0, t.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), s.name) {
          case "AbortException":
            return new t.AbortException(s.message);
          case "MissingPDFException":
            return new t.MissingPDFException(s.message);
          case "PasswordException":
            return new t.PasswordException(s.message, s.code);
          case "UnexpectedResponseException":
            return new t.UnexpectedResponseException(s.message, s.status);
          case "UnknownErrorException":
            return new t.UnknownErrorException(s.message, s.details);
          default:
            return new t.UnknownErrorException(s.message, s.toString());
        }
      }
      c.MessageHandler = (n = class {
        constructor(r, u, C) {
          te(this, y);
          te(this, P);
          te(this, i);
          this.sourceName = r, this.targetName = u, this.comObj = C, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (I) => {
            const o = I.data;
            if (o.targetName !== this.sourceName)
              return;
            if (o.stream) {
              ne(this, P, Kt).call(this, o);
              return;
            }
            if (o.callback) {
              const $ = o.callbackId, W = this.callbackCapabilities[$];
              if (!W)
                throw new Error(`Cannot resolve callback ${$}`);
              if (delete this.callbackCapabilities[$], o.callback === a)
                W.resolve(o.data);
              else {
                if (o.callback !== b)
                  throw new Error("Unexpected callback case");
                W.reject(d(o.reason));
              }
              return;
            }
            const D = this.actionHandler[o.action];
            if (!D)
              throw new Error(`Unknown action from worker: ${o.action}`);
            if (o.callbackId) {
              const $ = this.sourceName, W = o.sourceName;
              new Promise(function(K) {
                K(D(o.data));
              }).then(function(K) {
                C.postMessage({ sourceName: $, targetName: W, callback: a, callbackId: o.callbackId, data: K });
              }, function(K) {
                C.postMessage({ sourceName: $, targetName: W, callback: b, callbackId: o.callbackId, reason: d(K) });
              });
            } else
              o.streamId ? ne(this, y, Yt).call(this, o) : D(o.data);
          }, C.addEventListener("message", this._onComObjOnMessage);
        }
        on(r, u) {
          const C = this.actionHandler;
          if (C[r])
            throw new Error(`There is already an actionName called "${r}"`);
          C[r] = u;
        }
        send(r, u, C) {
          this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: r, data: u }, C);
        }
        sendWithPromise(r, u, C) {
          const I = this.callbackId++, o = new t.PromiseCapability();
          this.callbackCapabilities[I] = o;
          try {
            this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: r, callbackId: I, data: u }, C);
          } catch (D) {
            o.reject(D);
          }
          return o.promise;
        }
        sendWithStream(r, u, C, I) {
          const o = this.streamId++, D = this.sourceName, $ = this.targetName, W = this.comObj;
          return new ReadableStream({ start: (K) => {
            const z = new t.PromiseCapability();
            return this.streamControllers[o] = { controller: K, startCall: z, pullCall: null, cancelCall: null, isClosed: !1 }, W.postMessage({ sourceName: D, targetName: $, action: r, streamId: o, data: u, desiredSize: K.desiredSize }, I), z.promise;
          }, pull: (K) => {
            const z = new t.PromiseCapability();
            return this.streamControllers[o].pullCall = z, W.postMessage({ sourceName: D, targetName: $, stream: A, streamId: o, desiredSize: K.desiredSize }), z.promise;
          }, cancel: (K) => {
            (0, t.assert)(K instanceof Error, "cancel must have a valid reason");
            const z = new t.PromiseCapability();
            return this.streamControllers[o].cancelCall = z, this.streamControllers[o].isClosed = !0, W.postMessage({ sourceName: D, targetName: $, stream: x, streamId: o, reason: d(K) }), z.promise;
          } }, C);
        }
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      }, y = new WeakSet(), Yt = function(r) {
        const u = r.streamId, C = this.sourceName, I = r.sourceName, o = this.comObj, D = this, $ = this.actionHandler[r.action], W = { enqueue(K) {
          let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, _ = arguments.length > 2 ? arguments[2] : void 0;
          if (this.isCancelled)
            return;
          const g = this.desiredSize;
          this.desiredSize -= z, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = new t.PromiseCapability(), this.ready = this.sinkCapability.promise), o.postMessage({ sourceName: C, targetName: I, stream: l, streamId: u, chunk: K }, _);
        }, close() {
          this.isCancelled || (this.isCancelled = !0, o.postMessage({ sourceName: C, targetName: I, stream: f, streamId: u }), delete D.streamSinks[u]);
        }, error(K) {
          (0, t.assert)(K instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, o.postMessage({ sourceName: C, targetName: I, stream: v, streamId: u, reason: d(K) }));
        }, sinkCapability: new t.PromiseCapability(), onPull: null, onCancel: null, isCancelled: !1, desiredSize: r.desiredSize, ready: null };
        W.sinkCapability.resolve(), W.ready = W.sinkCapability.promise, this.streamSinks[u] = W, new Promise(function(K) {
          K($(r.data, W));
        }).then(function() {
          o.postMessage({ sourceName: C, targetName: I, stream: j, streamId: u, success: !0 });
        }, function(K) {
          o.postMessage({ sourceName: C, targetName: I, stream: j, streamId: u, reason: d(K) });
        });
      }, P = new WeakSet(), Kt = function(r) {
        const u = r.streamId, C = this.sourceName, I = r.sourceName, o = this.comObj, D = this.streamControllers[u], $ = this.streamSinks[u];
        switch (r.stream) {
          case j:
            r.success ? D.startCall.resolve() : D.startCall.reject(d(r.reason));
            break;
          case k:
            r.success ? D.pullCall.resolve() : D.pullCall.reject(d(r.reason));
            break;
          case A:
            if (!$) {
              o.postMessage({ sourceName: C, targetName: I, stream: k, streamId: u, success: !0 });
              break;
            }
            $.desiredSize <= 0 && r.desiredSize > 0 && $.sinkCapability.resolve(), $.desiredSize = r.desiredSize, new Promise(function(W) {
              var K;
              W((K = $.onPull) === null || K === void 0 ? void 0 : K.call($));
            }).then(function() {
              o.postMessage({ sourceName: C, targetName: I, stream: k, streamId: u, success: !0 });
            }, function(W) {
              o.postMessage({ sourceName: C, targetName: I, stream: k, streamId: u, reason: d(W) });
            });
            break;
          case l:
            if ((0, t.assert)(D, "enqueue should have stream controller"), D.isClosed)
              break;
            D.controller.enqueue(r.chunk);
            break;
          case f:
            if ((0, t.assert)(D, "close should have stream controller"), D.isClosed)
              break;
            D.isClosed = !0, D.controller.close(), ne(this, i, ft).call(this, D, u);
            break;
          case v:
            (0, t.assert)(D, "error should have stream controller"), D.controller.error(d(r.reason)), ne(this, i, ft).call(this, D, u);
            break;
          case O:
            r.success ? D.cancelCall.resolve() : D.cancelCall.reject(d(r.reason)), ne(this, i, ft).call(this, D, u);
            break;
          case x:
            if (!$)
              break;
            new Promise(function(W) {
              var K;
              W((K = $.onCancel) === null || K === void 0 ? void 0 : K.call($, d(r.reason)));
            }).then(function() {
              o.postMessage({ sourceName: C, targetName: I, stream: O, streamId: u, success: !0 });
            }, function(W) {
              o.postMessage({ sourceName: C, targetName: I, stream: O, streamId: u, reason: d(W) });
            }), $.sinkCapability.reject(d(r.reason)), $.isCancelled = !0, delete this.streamSinks[u];
            break;
          default:
            throw new Error("Unexpected stream case");
        }
      }, i = new WeakSet(), ft = async function(r, u) {
        var C, I, o;
        await Promise.allSettled([(C = r.startCall) === null || C === void 0 ? void 0 : C.promise, (I = r.pullCall) === null || I === void 0 ? void 0 : I.promise, (o = r.cancelCall) === null || o === void 0 ? void 0 : o.promise]), delete this.streamControllers[u];
      }, n);
    }, (R, c, e) => {
      var a, b, x;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.Metadata = void 0;
      var t = e(1);
      c.Metadata = (x = class {
        constructor(f) {
          te(this, a, void 0);
          te(this, b, void 0);
          let { parsedData: l, rawData: v } = f;
          ue(this, a, l), ue(this, b, v);
        }
        getRaw() {
          return T(this, b);
        }
        get(f) {
          return T(this, a).get(f) ?? null;
        }
        getAll() {
          return (0, t.objectFromMap)(T(this, a));
        }
        has(f) {
          return T(this, a).has(f);
        }
      }, a = new WeakMap(), b = new WeakMap(), x);
    }, (R, c, e) => {
      var O, f, l, v, A, k, Tt, d;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.OptionalContentConfig = void 0;
      var t = e(1), a = e(144);
      const b = Symbol("INTERNAL");
      class x {
        constructor(h, P) {
          te(this, O, !0);
          this.name = h, this.intent = P;
        }
        get visible() {
          return T(this, O);
        }
        _setVisible(h, P) {
          h !== b && (0, t.unreachable)("Internal method `_setVisible` called."), ue(this, O, P);
        }
      }
      O = new WeakMap(), c.OptionalContentConfig = (d = class {
        constructor(h) {
          te(this, k);
          te(this, f, null);
          te(this, l, /* @__PURE__ */ new Map());
          te(this, v, null);
          te(this, A, null);
          if (this.name = null, this.creator = null, h !== null) {
            this.name = h.name, this.creator = h.creator, ue(this, A, h.order);
            for (const P of h.groups)
              T(this, l).set(P.id, new x(P.name, P.intent));
            if (h.baseState === "OFF")
              for (const P of T(this, l).values())
                P._setVisible(b, !1);
            for (const P of h.on)
              T(this, l).get(P)._setVisible(b, !0);
            for (const P of h.off)
              T(this, l).get(P)._setVisible(b, !1);
            ue(this, v, this.getHash());
          }
        }
        isVisible(h) {
          if (T(this, l).size === 0)
            return !0;
          if (!h)
            return (0, t.warn)("Optional content group not defined."), !0;
          if (h.type === "OCG")
            return T(this, l).has(h.id) ? T(this, l).get(h.id).visible : ((0, t.warn)(`Optional content group not found: ${h.id}`), !0);
          if (h.type === "OCMD") {
            if (h.expression)
              return ne(this, k, Tt).call(this, h.expression);
            if (!h.policy || h.policy === "AnyOn") {
              for (const P of h.ids) {
                if (!T(this, l).has(P))
                  return (0, t.warn)(`Optional content group not found: ${P}`), !0;
                if (T(this, l).get(P).visible)
                  return !0;
              }
              return !1;
            }
            if (h.policy === "AllOn") {
              for (const P of h.ids) {
                if (!T(this, l).has(P))
                  return (0, t.warn)(`Optional content group not found: ${P}`), !0;
                if (!T(this, l).get(P).visible)
                  return !1;
              }
              return !0;
            }
            if (h.policy === "AnyOff") {
              for (const P of h.ids) {
                if (!T(this, l).has(P))
                  return (0, t.warn)(`Optional content group not found: ${P}`), !0;
                if (!T(this, l).get(P).visible)
                  return !0;
              }
              return !1;
            }
            if (h.policy === "AllOff") {
              for (const P of h.ids) {
                if (!T(this, l).has(P))
                  return (0, t.warn)(`Optional content group not found: ${P}`), !0;
                if (T(this, l).get(P).visible)
                  return !1;
              }
              return !0;
            }
            return (0, t.warn)(`Unknown optional content policy ${h.policy}.`), !0;
          }
          return (0, t.warn)(`Unknown group type ${h.type}.`), !0;
        }
        setVisibility(h) {
          let P = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          T(this, l).has(h) ? (T(this, l).get(h)._setVisible(b, !!P), ue(this, f, null)) : (0, t.warn)(`Optional content group not found: ${h}`);
        }
        get hasInitialVisibility() {
          return this.getHash() === T(this, v);
        }
        getOrder() {
          return T(this, l).size ? T(this, A) ? T(this, A).slice() : [...T(this, l).keys()] : null;
        }
        getGroups() {
          return T(this, l).size > 0 ? (0, t.objectFromMap)(T(this, l)) : null;
        }
        getGroup(h) {
          return T(this, l).get(h) || null;
        }
        getHash() {
          if (T(this, f) !== null)
            return T(this, f);
          const h = new a.MurmurHash3_64();
          for (const [P, p] of T(this, l))
            h.update(`${P}:${p.visible}`);
          return ue(this, f, h.hexdigest());
        }
      }, f = new WeakMap(), l = new WeakMap(), v = new WeakMap(), A = new WeakMap(), k = new WeakSet(), Tt = function(h) {
        const P = h.length;
        if (P < 2)
          return !0;
        const p = h[0];
        for (let i = 1; i < P; i++) {
          const m = h[i];
          let n;
          if (Array.isArray(m))
            n = ne(this, k, Tt).call(this, m);
          else {
            if (!T(this, l).has(m))
              return (0, t.warn)(`Optional content group not found: ${m}`), !0;
            n = T(this, l).get(m).visible;
          }
          switch (p) {
            case "And":
              if (!n)
                return !1;
              break;
            case "Or":
              if (n)
                return !0;
              break;
            case "Not":
              return !n;
            default:
              return !0;
          }
        }
        return p === "And";
      }, d);
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFDataTransportStream = void 0;
      var t = e(1), a = e(142);
      c.PDFDataTransportStream = class {
        constructor(f, l) {
          let { length: v, initialData: A, progressiveDone: k = !1, contentDispositionFilename: j = null, disableRange: d = !1, disableStream: y = !1 } = f;
          if ((0, t.assert)(l, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = k, this._contentDispositionFilename = j, (A == null ? void 0 : A.length) > 0) {
            const h = A instanceof Uint8Array && A.byteLength === A.buffer.byteLength ? A.buffer : new Uint8Array(A).buffer;
            this._queuedChunks.push(h);
          }
          this._pdfDataRangeTransport = l, this._isStreamingSupported = !y, this._isRangeSupported = !d, this._contentLength = v, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((h, P) => {
            this._onReceiveData({ begin: h, chunk: P });
          }), this._pdfDataRangeTransport.addProgressListener((h, P) => {
            this._onProgress({ loaded: h, total: P });
          }), this._pdfDataRangeTransport.addProgressiveReadListener((h) => {
            this._onReceiveData({ chunk: h });
          }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          }), this._pdfDataRangeTransport.transportReady();
        }
        _onReceiveData(f) {
          let { begin: l, chunk: v } = f;
          const A = v instanceof Uint8Array && v.byteLength === v.buffer.byteLength ? v.buffer : new Uint8Array(v).buffer;
          if (l === void 0)
            this._fullRequestReader ? this._fullRequestReader._enqueue(A) : this._queuedChunks.push(A);
          else {
            const k = this._rangeReaders.some(function(j) {
              return j._begin !== l ? !1 : (j._enqueue(A), !0);
            });
            (0, t.assert)(k, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }
        get _progressiveDataLength() {
          var f;
          return ((f = this._fullRequestReader) === null || f === void 0 ? void 0 : f._loaded) ?? 0;
        }
        _onProgress(f) {
          if (f.total === void 0) {
            var l, v;
            (l = this._rangeReaders[0]) === null || l === void 0 || (v = l.onProgress) === null || v === void 0 || v.call(l, { loaded: f.loaded });
          } else {
            var A, k;
            (A = this._fullRequestReader) === null || A === void 0 || (k = A.onProgress) === null || k === void 0 || k.call(A, { loaded: f.loaded, total: f.total });
          }
        }
        _onProgressiveDone() {
          var f;
          (f = this._fullRequestReader) === null || f === void 0 || f.progressiveDone(), this._progressiveDone = !0;
        }
        _removeRangeReader(f) {
          const l = this._rangeReaders.indexOf(f);
          l >= 0 && this._rangeReaders.splice(l, 1);
        }
        getFullReader() {
          (0, t.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
          const f = this._queuedChunks;
          return this._queuedChunks = null, new b(this, f, this._progressiveDone, this._contentDispositionFilename);
        }
        getRangeReader(f, l) {
          if (l <= this._progressiveDataLength)
            return null;
          const v = new x(this, f, l);
          return this._pdfDataRangeTransport.requestDataRange(f, l), this._rangeReaders.push(v), v;
        }
        cancelAllRequests(f) {
          var l;
          (l = this._fullRequestReader) === null || l === void 0 || l.cancel(f);
          for (const v of this._rangeReaders.slice(0))
            v.cancel(f);
          this._pdfDataRangeTransport.abort();
        }
      };
      class b {
        constructor(f, l) {
          let v = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], A = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          this._stream = f, this._done = v || !1, this._filename = (0, a.isPdfFile)(A) ? A : null, this._queuedChunks = l || [], this._loaded = 0;
          for (const k of this._queuedChunks)
            this._loaded += k.byteLength;
          this._requests = [], this._headersReady = Promise.resolve(), f._fullRequestReader = this, this.onProgress = null;
        }
        _enqueue(f) {
          this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: f, done: !1 }) : this._queuedChunks.push(f), this._loaded += f.byteLength);
        }
        get headersReady() {
          return this._headersReady;
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }
        get contentLength() {
          return this._stream._contentLength;
        }
        async read() {
          if (this._queuedChunks.length > 0)
            return { value: this._queuedChunks.shift(), done: !1 };
          if (this._done)
            return { value: void 0, done: !0 };
          const f = new t.PromiseCapability();
          return this._requests.push(f), f.promise;
        }
        cancel(f) {
          this._done = !0;
          for (const l of this._requests)
            l.resolve({ value: void 0, done: !0 });
          this._requests.length = 0;
        }
        progressiveDone() {
          this._done || (this._done = !0);
        }
      }
      class x {
        constructor(f, l, v) {
          this._stream = f, this._begin = l, this._end = v, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
        }
        _enqueue(f) {
          if (!this._done) {
            if (this._requests.length === 0)
              this._queuedChunk = f;
            else {
              this._requests.shift().resolve({ value: f, done: !1 });
              for (const l of this._requests)
                l.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
            }
            this._done = !0, this._stream._removeRangeReader(this);
          }
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._queuedChunk) {
            const l = this._queuedChunk;
            return this._queuedChunk = null, { value: l, done: !1 };
          }
          if (this._done)
            return { value: void 0, done: !0 };
          const f = new t.PromiseCapability();
          return this._requests.push(f), f.promise;
        }
        cancel(f) {
          this._done = !0;
          for (const l of this._requests)
            l.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._stream._removeRangeReader(this);
        }
      }
    }, (R, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.XfaText = void 0;
      class e {
        static textContent(a) {
          const b = [], x = { items: b, styles: /* @__PURE__ */ Object.create(null) };
          return function O(f) {
            var l;
            if (!f)
              return;
            let v = null;
            const A = f.name;
            if (A === "#text")
              v = f.value;
            else {
              if (!e.shouldBuildText(A))
                return;
              f != null && (l = f.attributes) !== null && l !== void 0 && l.textContent ? v = f.attributes.textContent : f.value && (v = f.value);
            }
            if (v !== null && b.push({ str: v }), f.children)
              for (const k of f.children)
                O(k);
          }(a), x;
        }
        static shouldBuildText(a) {
          return !(a === "textarea" || a === "input" || a === "option" || a === "select");
        }
      }
      c.XfaText = e;
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.NodeStandardFontDataFactory = c.NodeFilterFactory = c.NodeCanvasFactory = c.NodeCMapReaderFactory = void 0;
      var t = e(143);
      const a = function(l) {
        return new Promise((v, A) => {
          require$$6.readFile(l, (k, j) => {
            !k && j ? v(new Uint8Array(j)) : A(new Error(k));
          });
        });
      };
      class b extends t.BaseFilterFactory {
      }
      c.NodeFilterFactory = b;
      class x extends t.BaseCanvasFactory {
        _createCanvas(v, A) {
          return require$$6.createCanvas(v, A);
        }
      }
      c.NodeCanvasFactory = x;
      class O extends t.BaseCMapReaderFactory {
        _fetchData(v, A) {
          return a(v).then((k) => ({ cMapData: k, compressionType: A }));
        }
      }
      c.NodeCMapReaderFactory = O;
      class f extends t.BaseStandardFontDataFactory {
        _fetchData(v) {
          return a(v);
        }
      }
      c.NodeStandardFontDataFactory = f;
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFNodeStream = void 0;
      var t = e(1), a = e(157);
      const b = require$$6, x = require$$6, O = require$$6, f = require$$6, l = /^file:\/\/\/[a-zA-Z]:\//;
      c.PDFNodeStream = class {
        constructor(p) {
          this.source = p, this.url = function(m) {
            const n = f.parse(m);
            return n.protocol === "file:" || n.host ? n : /^[a-z]:[/\\]/i.test(m) ? f.parse(`file:///${m}`) : (n.host || (n.protocol = "file:"), n);
          }(p.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && p.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          var p;
          return ((p = this._fullRequestReader) === null || p === void 0 ? void 0 : p._loaded) ?? 0;
        }
        getFullReader() {
          return (0, t.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new y(this) : new j(this), this._fullRequestReader;
        }
        getRangeReader(p, i) {
          if (i <= this._progressiveDataLength)
            return null;
          const m = this.isFsUrl ? new h(this, p, i) : new d(this, p, i);
          return this._rangeRequestReaders.push(m), m;
        }
        cancelAllRequests(p) {
          var i;
          (i = this._fullRequestReader) === null || i === void 0 || i.cancel(p);
          for (const m of this._rangeRequestReaders.slice(0))
            m.cancel(p);
        }
      };
      class v {
        constructor(p) {
          this._url = p.url, this._done = !1, this._storedError = null, this.onProgress = null;
          const i = p.source;
          this._contentLength = i.length, this._loaded = 0, this._filename = null, this._disableRange = i.disableRange || !1, this._rangeChunkSize = i.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !i.disableStream, this._isRangeSupported = !i.disableRange, this._readableStream = null, this._readCapability = new t.PromiseCapability(), this._headersCapability = new t.PromiseCapability();
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var p;
          if (await this._readCapability.promise, this._done)
            return { value: void 0, done: !0 };
          if (this._storedError)
            throw this._storedError;
          const i = this._readableStream.read();
          return i === null ? (this._readCapability = new t.PromiseCapability(), this.read()) : (this._loaded += i.length, (p = this.onProgress) === null || p === void 0 || p.call(this, { loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(i).buffer, done: !1 });
        }
        cancel(p) {
          this._readableStream ? this._readableStream.destroy(p) : this._error(p);
        }
        _error(p) {
          this._storedError = p, this._readCapability.resolve();
        }
        _setReadableStream(p) {
          this._readableStream = p, p.on("readable", () => {
            this._readCapability.resolve();
          }), p.on("end", () => {
            p.destroy(), this._done = !0, this._readCapability.resolve();
          }), p.on("error", (i) => {
            this._error(i);
          }), !this._isStreamingSupported && this._isRangeSupported && this._error(new t.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      class A {
        constructor(p) {
          this._url = p.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new t.PromiseCapability();
          const i = p.source;
          this._isStreamingSupported = !i.disableStream;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var p;
          if (await this._readCapability.promise, this._done)
            return { value: void 0, done: !0 };
          if (this._storedError)
            throw this._storedError;
          const i = this._readableStream.read();
          return i === null ? (this._readCapability = new t.PromiseCapability(), this.read()) : (this._loaded += i.length, (p = this.onProgress) === null || p === void 0 || p.call(this, { loaded: this._loaded }), { value: new Uint8Array(i).buffer, done: !1 });
        }
        cancel(p) {
          this._readableStream ? this._readableStream.destroy(p) : this._error(p);
        }
        _error(p) {
          this._storedError = p, this._readCapability.resolve();
        }
        _setReadableStream(p) {
          this._readableStream = p, p.on("readable", () => {
            this._readCapability.resolve();
          }), p.on("end", () => {
            p.destroy(), this._done = !0, this._readCapability.resolve();
          }), p.on("error", (i) => {
            this._error(i);
          }), this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      function k(P, p) {
        return { protocol: P.protocol, auth: P.auth, host: P.hostname, port: P.port, path: P.path, method: "GET", headers: p };
      }
      class j extends v {
        constructor(p) {
          super(p);
          const i = (m) => {
            if (m.statusCode === 404) {
              const u = new t.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = u, this._headersCapability.reject(u);
              return;
            }
            this._headersCapability.resolve(), this._setReadableStream(m);
            const n = (u) => this._readableStream.headers[u.toLowerCase()], { allowRangeRequests: s, suggestedLength: r } = (0, a.validateRangeRequestCapabilities)({ getResponseHeader: n, isHttp: p.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
            this._isRangeSupported = s, this._contentLength = r || this._contentLength, this._filename = (0, a.extractFilenameFromHeader)(n);
          };
          this._request = null, this._url.protocol === "http:" ? this._request = x.request(k(this._url, p.httpHeaders), i) : this._request = O.request(k(this._url, p.httpHeaders), i), this._request.on("error", (m) => {
            this._storedError = m, this._headersCapability.reject(m);
          }), this._request.end();
        }
      }
      class d extends A {
        constructor(p, i, m) {
          super(p), this._httpHeaders = {};
          for (const s in p.httpHeaders) {
            const r = p.httpHeaders[s];
            r !== void 0 && (this._httpHeaders[s] = r);
          }
          this._httpHeaders.Range = `bytes=${i}-${m - 1}`;
          const n = (s) => {
            if (s.statusCode !== 404)
              this._setReadableStream(s);
            else {
              const r = new t.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = r;
            }
          };
          this._request = null, this._url.protocol === "http:" ? this._request = x.request(k(this._url, this._httpHeaders), n) : this._request = O.request(k(this._url, this._httpHeaders), n), this._request.on("error", (s) => {
            this._storedError = s;
          }), this._request.end();
        }
      }
      class y extends v {
        constructor(p) {
          super(p);
          let i = decodeURIComponent(this._url.path);
          l.test(this._url.href) && (i = i.replace(/^\//, "")), b.lstat(i, (m, n) => {
            m ? (m.code === "ENOENT" && (m = new t.MissingPDFException(`Missing PDF "${i}".`)), this._storedError = m, this._headersCapability.reject(m)) : (this._contentLength = n.size, this._setReadableStream(b.createReadStream(i)), this._headersCapability.resolve());
          });
        }
      }
      class h extends A {
        constructor(p, i, m) {
          super(p);
          let n = decodeURIComponent(this._url.path);
          l.test(this._url.href) && (n = n.replace(/^\//, "")), this._setReadableStream(b.createReadStream(n, { start: i, end: m - 1 }));
        }
      }
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.createResponseStatusError = function(O, f) {
        return O === 404 || O === 0 && f.startsWith("file:") ? new t.MissingPDFException('Missing PDF "' + f + '".') : new t.UnexpectedResponseException(`Unexpected server response (${O}) while retrieving PDF "${f}".`, O);
      }, c.extractFilenameFromHeader = function(O) {
        const f = O("Content-Disposition");
        if (f) {
          let l = (0, a.getFilenameFromContentDispositionHeader)(f);
          if (l.includes("%"))
            try {
              l = decodeURIComponent(l);
            } catch {
            }
          if ((0, b.isPdfFile)(l))
            return l;
        }
        return null;
      }, c.validateRangeRequestCapabilities = function(O) {
        let { getResponseHeader: f, isHttp: l, rangeChunkSize: v, disableRange: A } = O;
        const k = { allowRangeRequests: !1, suggestedLength: void 0 }, j = parseInt(f("Content-Length"), 10);
        return !Number.isInteger(j) || (k.suggestedLength = j, j <= 2 * v) || A || !l || f("Accept-Ranges") !== "bytes" || (f("Content-Encoding") || "identity") !== "identity" || (k.allowRangeRequests = !0), k;
      }, c.validateResponseStatus = function(O) {
        return O === 200 || O === 206;
      };
      var t = e(1), a = e(158), b = e(142);
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.getFilenameFromContentDispositionHeader = function(b) {
        let x = !0, O = f("filename\\*", "i").exec(b);
        if (O) {
          O = O[1];
          let d = A(O);
          return d = unescape(d), d = k(d), d = j(d), v(d);
        }
        if (O = function(y) {
          const h = [];
          let P;
          const p = f("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; (P = p.exec(y)) !== null; ) {
            let [, m, n, s] = P;
            if (m = parseInt(m, 10), m in h) {
              if (m === 0)
                break;
            } else
              h[m] = [n, s];
          }
          const i = [];
          for (let m = 0; m < h.length && m in h; ++m) {
            let [n, s] = h[m];
            s = A(s), n && (s = unescape(s), m === 0 && (s = k(s))), i.push(s);
          }
          return i.join("");
        }(b), O)
          return v(j(O));
        if (O = f("filename", "i").exec(b), O) {
          O = O[1];
          let d = A(O);
          return d = j(d), v(d);
        }
        function f(d, y) {
          return new RegExp("(?:^|;)\\s*" + d + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', y);
        }
        function l(d, y) {
          if (d) {
            if (!/^[\x00-\xFF]+$/.test(y))
              return y;
            try {
              const h = new TextDecoder(d, { fatal: !0 }), P = (0, t.stringToBytes)(y);
              y = h.decode(P), x = !1;
            } catch {
            }
          }
          return y;
        }
        function v(d) {
          return x && /[\x80-\xff]/.test(d) && (d = l("utf-8", d), x && (d = l("iso-8859-1", d))), d;
        }
        function A(d) {
          if (d.startsWith('"')) {
            const y = d.slice(1).split('\\"');
            for (let h = 0; h < y.length; ++h) {
              const P = y[h].indexOf('"');
              P !== -1 && (y[h] = y[h].slice(0, P), y.length = h + 1), y[h] = y[h].replaceAll(/\\(.)/g, "$1");
            }
            d = y.join('"');
          }
          return d;
        }
        function k(d) {
          const y = d.indexOf("'");
          return y === -1 ? d : l(d.slice(0, y), d.slice(y + 1).replace(/^[^']*'/, ""));
        }
        function j(d) {
          return !d.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(y, h, P, p) {
            if (P === "q" || P === "Q")
              return l(h, p = (p = p.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(i, m) {
                return String.fromCharCode(parseInt(m, 16));
              }));
            try {
              p = atob(p);
            } catch {
            }
            return l(h, p);
          });
        }
        return "";
      };
      var t = e(1);
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFNetworkStream = void 0;
      var t = e(1), a = e(157);
      class b {
        constructor(l) {
          let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.url = l, this.isHttp = /^https?:/i.test(l), this.httpHeaders = this.isHttp && v.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = v.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
        }
        requestRange(l, v, A) {
          const k = { begin: l, end: v };
          for (const j in A)
            k[j] = A[j];
          return this.request(k);
        }
        requestFull(l) {
          return this.request(l);
        }
        request(l) {
          const v = new XMLHttpRequest(), A = this.currXhrId++, k = this.pendingRequests[A] = { xhr: v };
          v.open("GET", this.url), v.withCredentials = this.withCredentials;
          for (const j in this.httpHeaders) {
            const d = this.httpHeaders[j];
            d !== void 0 && v.setRequestHeader(j, d);
          }
          return this.isHttp && "begin" in l && "end" in l ? (v.setRequestHeader("Range", `bytes=${l.begin}-${l.end - 1}`), k.expectedStatus = 206) : k.expectedStatus = 200, v.responseType = "arraybuffer", l.onError && (v.onerror = function(j) {
            l.onError(v.status);
          }), v.onreadystatechange = this.onStateChange.bind(this, A), v.onprogress = this.onProgress.bind(this, A), k.onHeadersReceived = l.onHeadersReceived, k.onDone = l.onDone, k.onError = l.onError, k.onProgress = l.onProgress, v.send(null), A;
        }
        onProgress(l, v) {
          var A;
          const k = this.pendingRequests[l];
          k && ((A = k.onProgress) === null || A === void 0 || A.call(k, v));
        }
        onStateChange(l, v) {
          const A = this.pendingRequests[l];
          if (!A)
            return;
          const k = A.xhr;
          if (k.readyState >= 2 && A.onHeadersReceived && (A.onHeadersReceived(), delete A.onHeadersReceived), k.readyState !== 4 || !(l in this.pendingRequests))
            return;
          if (delete this.pendingRequests[l], k.status === 0 && this.isHttp) {
            var j;
            (j = A.onError) === null || j === void 0 || j.call(A, k.status);
            return;
          }
          const d = k.status || 200;
          if (!(d === 200 && A.expectedStatus === 206) && d !== A.expectedStatus) {
            var y;
            (y = A.onError) === null || y === void 0 || y.call(A, k.status);
            return;
          }
          const h = function(i) {
            const m = i.response;
            return typeof m != "string" ? m : (0, t.stringToBytes)(m).buffer;
          }(k);
          if (d === 206) {
            const p = k.getResponseHeader("Content-Range"), i = /bytes (\d+)-(\d+)\/(\d+)/.exec(p);
            A.onDone({ begin: parseInt(i[1], 10), chunk: h });
          } else if (h)
            A.onDone({ begin: 0, chunk: h });
          else {
            var P;
            (P = A.onError) === null || P === void 0 || P.call(A, k.status);
          }
        }
        getRequestXhr(l) {
          return this.pendingRequests[l].xhr;
        }
        isPendingRequest(l) {
          return l in this.pendingRequests;
        }
        abortRequest(l) {
          const v = this.pendingRequests[l].xhr;
          delete this.pendingRequests[l], v.abort();
        }
      }
      c.PDFNetworkStream = class {
        constructor(l) {
          this._source = l, this._manager = new b(l.url, { httpHeaders: l.httpHeaders, withCredentials: l.withCredentials }), this._rangeChunkSize = l.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(l) {
          const v = this._rangeRequestReaders.indexOf(l);
          v >= 0 && this._rangeRequestReaders.splice(v, 1);
        }
        getFullReader() {
          return (0, t.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new x(this._manager, this._source), this._fullRequestReader;
        }
        getRangeReader(l, v) {
          const A = new O(this._manager, l, v);
          return A.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(A), A;
        }
        cancelAllRequests(l) {
          var v;
          (v = this._fullRequestReader) === null || v === void 0 || v.cancel(l);
          for (const A of this._rangeRequestReaders.slice(0))
            A.cancel(l);
        }
      };
      class x {
        constructor(l, v) {
          this._manager = l;
          const A = { onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
          this._url = v.url, this._fullRequestId = l.requestFull(A), this._headersReceivedCapability = new t.PromiseCapability(), this._disableRange = v.disableRange || !1, this._contentLength = v.length, this._rangeChunkSize = v.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
        }
        _onHeadersReceived() {
          const l = this._fullRequestId, v = this._manager.getRequestXhr(l), A = (d) => v.getResponseHeader(d), { allowRangeRequests: k, suggestedLength: j } = (0, a.validateRangeRequestCapabilities)({ getResponseHeader: A, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
          k && (this._isRangeSupported = !0), this._contentLength = j || this._contentLength, this._filename = (0, a.extractFilenameFromHeader)(A), this._isRangeSupported && this._manager.abortRequest(l), this._headersReceivedCapability.resolve();
        }
        _onDone(l) {
          if (l && (this._requests.length > 0 ? this._requests.shift().resolve({ value: l.chunk, done: !1 }) : this._cachedChunks.push(l.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
            for (const v of this._requests)
              v.resolve({ value: void 0, done: !0 });
            this._requests.length = 0;
          }
        }
        _onError(l) {
          this._storedError = (0, a.createResponseStatusError)(l, this._url), this._headersReceivedCapability.reject(this._storedError);
          for (const v of this._requests)
            v.reject(this._storedError);
          this._requests.length = 0, this._cachedChunks.length = 0;
        }
        _onProgress(l) {
          var v;
          (v = this.onProgress) === null || v === void 0 || v.call(this, { loaded: l.loaded, total: l.lengthComputable ? l.total : this._contentLength });
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        get contentLength() {
          return this._contentLength;
        }
        get headersReady() {
          return this._headersReceivedCapability.promise;
        }
        async read() {
          if (this._storedError)
            throw this._storedError;
          if (this._cachedChunks.length > 0)
            return { value: this._cachedChunks.shift(), done: !1 };
          if (this._done)
            return { value: void 0, done: !0 };
          const l = new t.PromiseCapability();
          return this._requests.push(l), l.promise;
        }
        cancel(l) {
          this._done = !0, this._headersReceivedCapability.reject(l);
          for (const v of this._requests)
            v.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
        }
      }
      class O {
        constructor(l, v, A) {
          this._manager = l;
          const k = { onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
          this._url = l.url, this._requestId = l.requestRange(v, A, k), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
        }
        _close() {
          var l;
          (l = this.onClosed) === null || l === void 0 || l.call(this, this);
        }
        _onDone(l) {
          const v = l.chunk;
          this._requests.length > 0 ? this._requests.shift().resolve({ value: v, done: !1 }) : this._queuedChunk = v, this._done = !0;
          for (const A of this._requests)
            A.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._close();
        }
        _onError(l) {
          this._storedError = (0, a.createResponseStatusError)(l, this._url);
          for (const v of this._requests)
            v.reject(this._storedError);
          this._requests.length = 0, this._queuedChunk = null;
        }
        _onProgress(l) {
          if (!this.isStreamingSupported) {
            var v;
            (v = this.onProgress) === null || v === void 0 || v.call(this, { loaded: l.loaded });
          }
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._storedError)
            throw this._storedError;
          if (this._queuedChunk !== null) {
            const v = this._queuedChunk;
            return this._queuedChunk = null, { value: v, done: !1 };
          }
          if (this._done)
            return { value: void 0, done: !0 };
          const l = new t.PromiseCapability();
          return this._requests.push(l), l.promise;
        }
        cancel(l) {
          this._done = !0;
          for (const v of this._requests)
            v.resolve({ value: void 0, done: !0 });
          this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
        }
      }
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.PDFFetchStream = void 0;
      var t = e(1), a = e(157);
      function b(v, A, k) {
        return { method: "GET", headers: v, signal: k.signal, mode: "cors", credentials: A ? "include" : "same-origin", redirect: "follow" };
      }
      function x(v) {
        const A = new Headers();
        for (const k in v) {
          const j = v[k];
          j !== void 0 && A.append(k, j);
        }
        return A;
      }
      function O(v) {
        return v instanceof Uint8Array ? v.buffer : v instanceof ArrayBuffer ? v : ((0, t.warn)(`getArrayBuffer - unexpected data format: ${v}`), new Uint8Array(v).buffer);
      }
      c.PDFFetchStream = class {
        constructor(A) {
          this.source = A, this.isHttp = /^https?:/i.test(A.url), this.httpHeaders = this.isHttp && A.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          var A;
          return ((A = this._fullRequestReader) === null || A === void 0 ? void 0 : A._loaded) ?? 0;
        }
        getFullReader() {
          return (0, t.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new f(this), this._fullRequestReader;
        }
        getRangeReader(A, k) {
          if (k <= this._progressiveDataLength)
            return null;
          const j = new l(this, A, k);
          return this._rangeRequestReaders.push(j), j;
        }
        cancelAllRequests(A) {
          var k;
          (k = this._fullRequestReader) === null || k === void 0 || k.cancel(A);
          for (const j of this._rangeRequestReaders.slice(0))
            j.cancel(A);
        }
      };
      class f {
        constructor(A) {
          this._stream = A, this._reader = null, this._loaded = 0, this._filename = null;
          const k = A.source;
          this._withCredentials = k.withCredentials || !1, this._contentLength = k.length, this._headersCapability = new t.PromiseCapability(), this._disableRange = k.disableRange || !1, this._rangeChunkSize = k.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !k.disableStream, this._isRangeSupported = !k.disableRange, this._headers = x(this._stream.httpHeaders);
          const j = k.url;
          fetch(j, b(this._headers, this._withCredentials, this._abortController)).then((d) => {
            if (!(0, a.validateResponseStatus)(d.status))
              throw (0, a.createResponseStatusError)(d.status, j);
            this._reader = d.body.getReader(), this._headersCapability.resolve();
            const y = (p) => d.headers.get(p), { allowRangeRequests: h, suggestedLength: P } = (0, a.validateRangeRequestCapabilities)({ getResponseHeader: y, isHttp: this._stream.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
            this._isRangeSupported = h, this._contentLength = P || this._contentLength, this._filename = (0, a.extractFilenameFromHeader)(y), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new t.AbortException("Streaming is disabled."));
          }).catch(this._headersCapability.reject), this.onProgress = null;
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var A;
          await this._headersCapability.promise;
          const { value: k, done: j } = await this._reader.read();
          return j ? { value: k, done: j } : (this._loaded += k.byteLength, (A = this.onProgress) === null || A === void 0 || A.call(this, { loaded: this._loaded, total: this._contentLength }), { value: O(k), done: !1 });
        }
        cancel(A) {
          var k;
          (k = this._reader) === null || k === void 0 || k.cancel(A), this._abortController.abort();
        }
      }
      class l {
        constructor(A, k, j) {
          this._stream = A, this._reader = null, this._loaded = 0;
          const d = A.source;
          this._withCredentials = d.withCredentials || !1, this._readCapability = new t.PromiseCapability(), this._isStreamingSupported = !d.disableStream, this._abortController = new AbortController(), this._headers = x(this._stream.httpHeaders), this._headers.append("Range", `bytes=${k}-${j - 1}`);
          const y = d.url;
          fetch(y, b(this._headers, this._withCredentials, this._abortController)).then((h) => {
            if (!(0, a.validateResponseStatus)(h.status))
              throw (0, a.createResponseStatusError)(h.status, y);
            this._readCapability.resolve(), this._reader = h.body.getReader();
          }).catch(this._readCapability.reject), this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          var A;
          await this._readCapability.promise;
          const { value: k, done: j } = await this._reader.read();
          return j ? { value: k, done: j } : (this._loaded += k.byteLength, (A = this.onProgress) === null || A === void 0 || A.call(this, { loaded: this._loaded }), { value: O(k), done: !1 });
        }
        cancel(A) {
          var k;
          (k = this._reader) === null || k === void 0 || k.cancel(A), this._abortController.abort();
        }
      }
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.TextLayerRenderTask = void 0, c.renderTextLayer = function(j) {
        !j.textContentSource && (j.textContent || j.textContentStream) && ((0, a.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), j.textContentSource = j.textContent || j.textContentStream);
        const { container: d, viewport: y } = j, h = getComputedStyle(d), P = h.getPropertyValue("visibility"), p = parseFloat(h.getPropertyValue("--scale-factor"));
        P === "visible" && (!p || Math.abs(p - y.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
        const i = new A(j);
        return i._render(), i;
      }, c.updateTextLayer = function(j) {
        let { container: d, viewport: y, textDivs: h, textDivProperties: P, isOffscreenCanvasSupported: p, mustRotate: i = !0, mustRescale: m = !0 } = j;
        if (i && (0, a.setLayerDimensions)(d, { rotation: y.rotation }), m) {
          const n = f(0, p), s = { prevFontSize: null, prevFontFamily: null, div: null, scale: y.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: n };
          for (const r of h)
            s.properties = P.get(r), s.div = r, v(s);
        }
      };
      var t = e(1), a = e(142);
      const b = 30, x = 0.8, O = /* @__PURE__ */ new Map();
      function f(k, j) {
        let d;
        if (j && t.FeatureTest.isOffscreenCanvasSupported)
          d = new OffscreenCanvas(k, k).getContext("2d", { alpha: !1 });
        else {
          const y = document.createElement("canvas");
          y.width = y.height = k, d = y.getContext("2d", { alpha: !1 });
        }
        return d;
      }
      function l(k, j, d) {
        const y = document.createElement("span"), h = { angle: 0, canvasWidth: 0, hasText: j.str !== "", hasEOL: j.hasEOL, fontSize: 0 };
        k._textDivs.push(y);
        const P = t.Util.transform(k._transform, j.transform);
        let p = Math.atan2(P[1], P[0]);
        const i = d[j.fontName];
        i.vertical && (p += Math.PI / 2);
        const m = Math.hypot(P[2], P[3]), n = m * function(D, $) {
          const W = O.get(D);
          if (W)
            return W;
          const K = f(b, $);
          K.font = `${b}px ${D}`;
          const z = K.measureText("");
          let _ = z.fontBoundingBoxAscent, g = Math.abs(z.fontBoundingBoxDescent);
          if (_) {
            const S = _ / (_ + g);
            return O.set(D, S), K.canvas.width = K.canvas.height = 0, S;
          }
          K.strokeStyle = "red", K.clearRect(0, 0, b, b), K.strokeText("g", 0, 0);
          let w = K.getImageData(0, 0, b, b).data;
          g = 0;
          for (let S = w.length - 1 - 3; S >= 0; S -= 4)
            if (w[S] > 0) {
              g = Math.ceil(S / 4 / b);
              break;
            }
          K.clearRect(0, 0, b, b), K.strokeText("A", 0, b), w = K.getImageData(0, 0, b, b).data, _ = 0;
          for (let S = 0, M = w.length; S < M; S += 4)
            if (w[S] > 0) {
              _ = b - Math.floor(S / 4 / b);
              break;
            }
          if (K.canvas.width = K.canvas.height = 0, _) {
            const S = _ / (_ + g);
            return O.set(D, S), S;
          }
          return O.set(D, x), x;
        }(i.fontFamily, k._isOffscreenCanvasSupported);
        let s, r;
        p === 0 ? (s = P[4], r = P[5] - n) : (s = P[4] + n * Math.sin(p), r = P[5] - n * Math.cos(p));
        const u = "calc(var(--scale-factor)*", C = y.style;
        k._container === k._rootContainer ? (C.left = `${(100 * s / k._pageWidth).toFixed(2)}%`, C.top = `${(100 * r / k._pageHeight).toFixed(2)}%`) : (C.left = `${u}${s.toFixed(2)}px)`, C.top = `${u}${r.toFixed(2)}px)`), C.fontSize = `${u}${m.toFixed(2)}px)`, C.fontFamily = i.fontFamily, h.fontSize = m, y.setAttribute("role", "presentation"), y.textContent = j.str, y.dir = j.dir, k._fontInspectorEnabled && (y.dataset.fontName = j.fontName), p !== 0 && (h.angle = p * (180 / Math.PI));
        let I = !1;
        if (j.str.length > 1)
          I = !0;
        else if (j.str !== " " && j.transform[0] !== j.transform[3]) {
          const o = Math.abs(j.transform[0]), D = Math.abs(j.transform[3]);
          o !== D && Math.max(o, D) / Math.min(o, D) > 1.5 && (I = !0);
        }
        I && (h.canvasWidth = i.vertical ? j.height : j.width), k._textDivProperties.set(y, h), k._isReadableStream && k._layoutText(y);
      }
      function v(k) {
        const { div: j, scale: d, properties: y, ctx: h, prevFontSize: P, prevFontFamily: p } = k, { style: i } = j;
        let m = "";
        if (y.canvasWidth !== 0 && y.hasText) {
          const { fontFamily: n } = i, { canvasWidth: s, fontSize: r } = y;
          (P !== r || p !== n) && (h.font = `${r * d}px ${n}`, k.prevFontSize = r, k.prevFontFamily = n);
          const { width: u } = h.measureText(j.textContent);
          u > 0 && (m = `scaleX(${s * d / u})`);
        }
        y.angle !== 0 && (m = `rotate(${y.angle}deg) ${m}`), m.length > 0 && (i.transform = m);
      }
      class A {
        constructor(j) {
          var d;
          let { textContentSource: y, container: h, viewport: P, textDivs: p, textDivProperties: i, textContentItemsStr: m, isOffscreenCanvasSupported: n } = j;
          this._textContentSource = y, this._isReadableStream = y instanceof ReadableStream, this._container = this._rootContainer = h, this._textDivs = p || [], this._textContentItemsStr = m || [], this._isOffscreenCanvasSupported = n, this._fontInspectorEnabled = !((d = globalThis.FontInspector) === null || d === void 0 || !d.enabled), this._reader = null, this._textDivProperties = i || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new t.PromiseCapability(), this._layoutTextParams = { prevFontSize: null, prevFontFamily: null, div: null, scale: P.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: f(0, n) };
          const { pageWidth: s, pageHeight: r, pageX: u, pageY: C } = P.rawDims;
          this._transform = [1, 0, 0, -1, -u, C + r], this._pageWidth = s, this._pageHeight = r, (0, a.setLayerDimensions)(h, P), this._capability.promise.finally(() => {
            this._layoutTextParams = null;
          }).catch(() => {
          });
        }
        get promise() {
          return this._capability.promise;
        }
        cancel() {
          this._canceled = !0, this._reader && (this._reader.cancel(new t.AbortException("TextLayer task cancelled.")).catch(() => {
          }), this._reader = null), this._capability.reject(new t.AbortException("TextLayer task cancelled."));
        }
        _processItems(j, d) {
          for (const y of j)
            if (y.str !== void 0)
              this._textContentItemsStr.push(y.str), l(this, y, d);
            else if (y.type === "beginMarkedContentProps" || y.type === "beginMarkedContent") {
              const h = this._container;
              this._container = document.createElement("span"), this._container.classList.add("markedContent"), y.id !== null && this._container.setAttribute("id", `${y.id}`), h.append(this._container);
            } else
              y.type === "endMarkedContent" && (this._container = this._container.parentNode);
        }
        _layoutText(j) {
          const d = this._layoutTextParams.properties = this._textDivProperties.get(j);
          if (this._layoutTextParams.div = j, v(this._layoutTextParams), d.hasText && this._container.append(j), d.hasEOL) {
            const y = document.createElement("br");
            y.setAttribute("role", "presentation"), this._container.append(y);
          }
        }
        _render() {
          const j = new t.PromiseCapability();
          let d = /* @__PURE__ */ Object.create(null);
          if (this._isReadableStream) {
            const y = () => {
              this._reader.read().then((h) => {
                let { value: P, done: p } = h;
                p ? j.resolve() : (Object.assign(d, P.styles), this._processItems(P.items, d), y());
              }, j.reject);
            };
            this._reader = this._textContentSource.getReader(), y();
          } else {
            if (!this._textContentSource)
              throw new Error('No "textContentSource" parameter specified.');
            {
              const { items: y, styles: h } = this._textContentSource;
              this._processItems(y, h), j.resolve();
            }
          }
          j.promise.then(() => {
            d = null, function(h) {
              if (h._canceled)
                return;
              const P = h._textDivs, p = h._capability;
              if (P.length > 1e5)
                p.resolve();
              else {
                if (!h._isReadableStream)
                  for (const i of P)
                    h._layoutText(i);
                p.resolve();
              }
            }(this);
          }, this._capability.reject);
        }
      }
      c.TextLayerRenderTask = A;
    }, (R, c, e) => {
      var l, v, A, k, j, d, y, h, P, Pt, i, Jt, n, kt, r, Rt;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.AnnotationEditorLayer = void 0;
      var t = e(1), a = e(141), b = e(163), x = e(164), O = e(142);
      const C = class {
        constructor(o) {
          te(this, P);
          te(this, i);
          te(this, n);
          te(this, r);
          te(this, l, void 0);
          te(this, v, !1);
          te(this, A, this.pointerup.bind(this));
          te(this, k, this.pointerdown.bind(this));
          te(this, j, /* @__PURE__ */ new Map());
          te(this, d, !1);
          te(this, y, !1);
          te(this, h, void 0);
          C._initialized || (C._initialized = !0, b.FreeTextEditor.initialize(o.l10n), x.InkEditor.initialize(o.l10n)), o.uiManager.registerEditorTypes([b.FreeTextEditor, x.InkEditor]), ue(this, h, o.uiManager), this.pageIndex = o.pageIndex, this.div = o.div, ue(this, l, o.accessibilityManager), T(this, h).addLayer(this);
        }
        get isEmpty() {
          return T(this, j).size === 0;
        }
        updateToolbar(o) {
          T(this, h).updateToolbar(o);
        }
        updateMode() {
          let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T(this, h).getMode();
          ne(this, r, Rt).call(this), o === t.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), T(this, h).unselectAll(), o !== t.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", o === t.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", o === t.AnnotationEditorType.INK), this.div.hidden = !1);
        }
        addInkEditorIfNeeded(o) {
          if (!(!o && T(this, h).getMode() !== t.AnnotationEditorType.INK)) {
            if (!o) {
              for (const D of T(this, j).values())
                if (D.isEmpty()) {
                  D.setInBackground();
                  return;
                }
            }
            ne(this, n, kt).call(this, { offsetX: 0, offsetY: 0 }).setInBackground();
          }
        }
        setEditingState(o) {
          T(this, h).setEditingState(o);
        }
        addCommands(o) {
          T(this, h).addCommands(o);
        }
        enable() {
          this.div.style.pointerEvents = "auto";
          for (const o of T(this, j).values())
            o.enableEditing();
        }
        disable() {
          this.div.style.pointerEvents = "none";
          for (const o of T(this, j).values())
            o.disableEditing();
          ne(this, r, Rt).call(this), this.isEmpty && (this.div.hidden = !0);
        }
        setActiveEditor(o) {
          T(this, h).getActive() !== o && T(this, h).setActiveEditor(o);
        }
        enableClick() {
          this.div.addEventListener("pointerdown", T(this, k)), this.div.addEventListener("pointerup", T(this, A));
        }
        disableClick() {
          this.div.removeEventListener("pointerdown", T(this, k)), this.div.removeEventListener("pointerup", T(this, A));
        }
        attach(o) {
          T(this, j).set(o.id, o);
        }
        detach(o) {
          var D;
          T(this, j).delete(o.id), (D = T(this, l)) === null || D === void 0 || D.removePointerInTextLayer(o.contentDiv);
        }
        remove(o) {
          T(this, h).removeEditor(o), this.detach(o), o.div.style.display = "none", setTimeout(() => {
            o.div.style.display = "", o.div.remove(), o.isAttachedToDOM = !1, document.activeElement === document.body && T(this, h).focusMainContainer();
          }, 0), T(this, y) || this.addInkEditorIfNeeded(!1);
        }
        add(o) {
          if (ne(this, P, Pt).call(this, o), T(this, h).addEditor(o), this.attach(o), !o.isAttachedToDOM) {
            const D = o.render();
            this.div.append(D), o.isAttachedToDOM = !0;
          }
          this.moveEditorInDOM(o), o.onceAdded(), T(this, h).addToAnnotationStorage(o);
        }
        moveEditorInDOM(o) {
          var D;
          (D = T(this, l)) === null || D === void 0 || D.moveElementInDOM(this.div, o.div, o.contentDiv, !0);
        }
        addOrRebuild(o) {
          o.needsToBeRebuilt() ? o.rebuild() : this.add(o);
        }
        addANewEditor(o) {
          this.addCommands({ cmd: () => {
            this.addOrRebuild(o);
          }, undo: () => {
            o.remove();
          }, mustExec: !0 });
        }
        addUndoableEditor(o) {
          this.addCommands({ cmd: () => {
            this.addOrRebuild(o);
          }, undo: () => {
            o.remove();
          }, mustExec: !1 });
        }
        getNextId() {
          return T(this, h).getId();
        }
        deserialize(o) {
          switch (o.annotationType) {
            case t.AnnotationEditorType.FREETEXT:
              return b.FreeTextEditor.deserialize(o, this, T(this, h));
            case t.AnnotationEditorType.INK:
              return x.InkEditor.deserialize(o, this, T(this, h));
          }
          return null;
        }
        setSelected(o) {
          T(this, h).setSelected(o);
        }
        toggleSelected(o) {
          T(this, h).toggleSelected(o);
        }
        isSelected(o) {
          return T(this, h).isSelected(o);
        }
        unselect(o) {
          T(this, h).unselect(o);
        }
        pointerup(o) {
          const { isMac: D } = t.FeatureTest.platform;
          !(o.button !== 0 || o.ctrlKey && D) && o.target === this.div && T(this, d) && (ue(this, d, !1), T(this, v) ? ne(this, n, kt).call(this, o) : ue(this, v, !0));
        }
        pointerdown(o) {
          const { isMac: D } = t.FeatureTest.platform;
          if (o.button !== 0 || o.ctrlKey && D || o.target !== this.div)
            return;
          ue(this, d, !0);
          const $ = T(this, h).getActive();
          ue(this, v, !$ || $.isEmpty());
        }
        drop(o) {
          const D = o.dataTransfer.getData("text/plain"), $ = T(this, h).getEditor(D);
          if (!$)
            return;
          o.preventDefault(), o.dataTransfer.dropEffect = "move", ne(this, P, Pt).call(this, $);
          const W = this.div.getBoundingClientRect(), K = o.clientX - W.x, z = o.clientY - W.y;
          $.translate(K - $.startX, z - $.startY), this.moveEditorInDOM($), $.div.focus();
        }
        dragover(o) {
          o.preventDefault();
        }
        destroy() {
          var o;
          ((o = T(this, h).getActive()) === null || o === void 0 ? void 0 : o.parent) === this && T(this, h).setActiveEditor(null);
          for (const $ of T(this, j).values()) {
            var D;
            (D = T(this, l)) === null || D === void 0 || D.removePointerInTextLayer($.contentDiv), $.setParent(null), $.isAttachedToDOM = !1, $.div.remove();
          }
          this.div = null, T(this, j).clear(), T(this, h).removeLayer(this);
        }
        render(o) {
          let { viewport: D } = o;
          this.viewport = D, (0, O.setLayerDimensions)(this.div, D), (0, a.bindEvents)(this, this.div, ["dragover", "drop"]);
          for (const $ of T(this, h).getEditors(this.pageIndex))
            this.add($);
          this.updateMode();
        }
        update(o) {
          let { viewport: D } = o;
          T(this, h).commitOrRemove(), this.viewport = D, (0, O.setLayerDimensions)(this.div, { rotation: D.rotation }), this.updateMode();
        }
        get pageDimensions() {
          const { pageWidth: o, pageHeight: D } = this.viewport.rawDims;
          return [o, D];
        }
      };
      let f = C;
      l = new WeakMap(), v = new WeakMap(), A = new WeakMap(), k = new WeakMap(), j = new WeakMap(), d = new WeakMap(), y = new WeakMap(), h = new WeakMap(), P = new WeakSet(), Pt = function(o) {
        var D;
        o.parent !== this && (this.attach(o), (D = o.parent) === null || D === void 0 || D.detach(o), o.setParent(this), o.div && o.isAttachedToDOM && (o.div.remove(), this.div.append(o.div)));
      }, i = new WeakSet(), Jt = function(o) {
        switch (T(this, h).getMode()) {
          case t.AnnotationEditorType.FREETEXT:
            return new b.FreeTextEditor(o);
          case t.AnnotationEditorType.INK:
            return new x.InkEditor(o);
        }
        return null;
      }, n = new WeakSet(), kt = function(o) {
        const D = this.getNextId(), $ = ne(this, i, Jt).call(this, { parent: this, id: D, x: o.offsetX, y: o.offsetY, uiManager: T(this, h) });
        return $ && this.add($), $;
      }, r = new WeakSet(), Rt = function() {
        ue(this, y, !0);
        for (const o of T(this, j).values())
          o.isEmpty() && o.remove();
        ue(this, y, !1);
      }, Ie(f, "_initialized", !1), c.AnnotationEditorLayer = f;
    }, (R, c, e) => {
      var O, f, l, v, A, k, j, d, y, h, Qt, p, Zt, m, er, s, Ft;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.FreeTextEditor = void 0;
      var t = e(1), a = e(141), b = e(140);
      const u = class extends b.AnnotationEditor {
        constructor(o) {
          super({ ...o, name: "freeTextEditor" });
          te(this, h);
          te(this, p);
          te(this, m);
          te(this, s);
          te(this, O, this.editorDivBlur.bind(this));
          te(this, f, this.editorDivFocus.bind(this));
          te(this, l, this.editorDivInput.bind(this));
          te(this, v, this.editorDivKeydown.bind(this));
          te(this, A, void 0);
          te(this, k, "");
          te(this, j, `${this.id}-editor`);
          te(this, d, !1);
          te(this, y, void 0);
          ue(this, A, o.color || u._defaultColor || b.AnnotationEditor._defaultLineColor), ue(this, y, o.fontSize || u._defaultFontSize);
        }
        static initialize(o) {
          this._l10nPromise = new Map(["free_text2_default_content", "editor_free_text2_aria_label"].map(($) => [$, o.get($)]));
          const D = getComputedStyle(document.documentElement);
          this._internalPadding = parseFloat(D.getPropertyValue("--freetext-padding"));
        }
        static updateDefaultParams(o, D) {
          switch (o) {
            case t.AnnotationEditorParamsType.FREETEXT_SIZE:
              u._defaultFontSize = D;
              break;
            case t.AnnotationEditorParamsType.FREETEXT_COLOR:
              u._defaultColor = D;
          }
        }
        updateParams(o, D) {
          switch (o) {
            case t.AnnotationEditorParamsType.FREETEXT_SIZE:
              ne(this, h, Qt).call(this, D);
              break;
            case t.AnnotationEditorParamsType.FREETEXT_COLOR:
              ne(this, p, Zt).call(this, D);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[t.AnnotationEditorParamsType.FREETEXT_SIZE, u._defaultFontSize], [t.AnnotationEditorParamsType.FREETEXT_COLOR, u._defaultColor || b.AnnotationEditor._defaultLineColor]];
        }
        get propertiesToUpdate() {
          return [[t.AnnotationEditorParamsType.FREETEXT_SIZE, T(this, y)], [t.AnnotationEditorParamsType.FREETEXT_COLOR, T(this, A)]];
        }
        getInitialTranslation() {
          const o = this.parentScale;
          return [-u._internalPadding * o, -(u._internalPadding + T(this, y)) * o];
        }
        rebuild() {
          super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this));
        }
        enableEditMode() {
          this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(t.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this.div.draggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", T(this, v)), this.editorDiv.addEventListener("focus", T(this, f)), this.editorDiv.addEventListener("blur", T(this, O)), this.editorDiv.addEventListener("input", T(this, l)));
        }
        disableEditMode() {
          this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", T(this, j)), this.div.draggable = !0, this.editorDiv.removeEventListener("keydown", T(this, v)), this.editorDiv.removeEventListener("focus", T(this, f)), this.editorDiv.removeEventListener("blur", T(this, O)), this.editorDiv.removeEventListener("input", T(this, l)), this.div.focus({ preventScroll: !0 }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
        }
        focusin(o) {
          super.focusin(o), o.target !== this.editorDiv && this.editorDiv.focus();
        }
        onceAdded() {
          this.width || (this.enableEditMode(), this.editorDiv.focus());
        }
        isEmpty() {
          return !this.editorDiv || this.editorDiv.innerText.trim() === "";
        }
        remove() {
          this.isEditing = !1, this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing"), super.remove();
        }
        commit() {
          this.isInEditMode() && (super.commit(), T(this, d) || (ue(this, d, !0), this.parent.addUndoableEditor(this)), this.disableEditMode(), ue(this, k, ne(this, m, er).call(this).trimEnd()), ne(this, s, Ft).call(this));
        }
        shouldGetKeyboardEvents() {
          return this.isInEditMode();
        }
        dblclick(o) {
          this.enableEditMode(), this.editorDiv.focus();
        }
        keydown(o) {
          o.target === this.div && o.key === "Enter" && (this.enableEditMode(), this.editorDiv.focus());
        }
        editorDivKeydown(o) {
          u._keyboardManager.exec(this, o);
        }
        editorDivFocus(o) {
          this.isEditing = !0;
        }
        editorDivBlur(o) {
          this.isEditing = !1;
        }
        editorDivInput(o) {
          this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
        }
        disableEditing() {
          this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
        }
        enableEditing() {
          this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
        }
        render() {
          if (this.div)
            return this.div;
          let o, D;
          this.width && (o = this.x, D = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", T(this, j)), this.enableEditing(), u._l10nPromise.get("editor_free_text2_aria_label").then((W) => {
            var K;
            return (K = this.editorDiv) === null || K === void 0 ? void 0 : K.setAttribute("aria-label", W);
          }), u._l10nPromise.get("free_text2_default_content").then((W) => {
            var K;
            return (K = this.editorDiv) === null || K === void 0 ? void 0 : K.setAttribute("default-content", W);
          }), this.editorDiv.contentEditable = !0;
          const { style: $ } = this.editorDiv;
          if ($.fontSize = `calc(${T(this, y)}px * var(--scale-factor))`, $.color = T(this, A), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, a.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
            const [W, K] = this.parentDimensions;
            this.setAt(o * W, D * K, this.width * W, this.height * K);
            for (const z of T(this, k).split(`
`)) {
              const _ = document.createElement("div");
              _.append(z ? document.createTextNode(z) : document.createElement("br")), this.editorDiv.append(_);
            }
            this.div.draggable = !0, this.editorDiv.contentEditable = !1;
          } else
            this.div.draggable = !1, this.editorDiv.contentEditable = !0;
          return this.div;
        }
        get contentDiv() {
          return this.editorDiv;
        }
        static deserialize(o, D, $) {
          const W = super.deserialize(o, D, $);
          return ue(W, y, o.fontSize), ue(W, A, t.Util.makeHexColor(...o.color)), ue(W, k, o.value), W;
        }
        serialize() {
          if (this.isEmpty())
            return null;
          const o = u._internalPadding * this.parentScale, D = this.getRect(o, o), $ = b.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : T(this, A));
          return { annotationType: t.AnnotationEditorType.FREETEXT, color: $, fontSize: T(this, y), value: T(this, k), pageIndex: this.pageIndex, rect: D, rotation: this.rotation };
        }
      };
      let x = u;
      O = new WeakMap(), f = new WeakMap(), l = new WeakMap(), v = new WeakMap(), A = new WeakMap(), k = new WeakMap(), j = new WeakMap(), d = new WeakMap(), y = new WeakMap(), h = new WeakSet(), Qt = function(o) {
        const D = (W) => {
          this.editorDiv.style.fontSize = `calc(${W}px * var(--scale-factor))`, this.translate(0, -(W - T(this, y)) * this.parentScale), ue(this, y, W), ne(this, s, Ft).call(this);
        }, $ = T(this, y);
        this.addCommands({ cmd: () => {
          D(o);
        }, undo: () => {
          D($);
        }, mustExec: !0, type: t.AnnotationEditorParamsType.FREETEXT_SIZE, overwriteIfSameType: !0, keepUndo: !0 });
      }, p = new WeakSet(), Zt = function(o) {
        const D = T(this, A);
        this.addCommands({ cmd: () => {
          ue(this, A, this.editorDiv.style.color = o);
        }, undo: () => {
          ue(this, A, this.editorDiv.style.color = D);
        }, mustExec: !0, type: t.AnnotationEditorParamsType.FREETEXT_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
      }, m = new WeakSet(), er = function() {
        const o = this.editorDiv.getElementsByTagName("div");
        if (o.length === 0)
          return this.editorDiv.innerText;
        const D = [];
        for (const $ of o)
          D.push($.innerText.replace(/\r\n?|\n/, ""));
        return D.join(`
`);
      }, s = new WeakSet(), Ft = function() {
        const [o, D] = this.parentDimensions;
        let $;
        if (this.isAttachedToDOM)
          $ = this.div.getBoundingClientRect();
        else {
          const { currentLayer: W, div: K } = this, z = K.style.display;
          K.style.display = "hidden", W.div.append(this.div), $ = K.getBoundingClientRect(), K.remove(), K.style.display = z;
        }
        this.width = $.width / o, this.height = $.height / D;
      }, Ie(x, "_freeTextDefaultContent", ""), Ie(x, "_l10nPromise"), Ie(x, "_internalPadding", 0), Ie(x, "_defaultColor", null), Ie(x, "_defaultFontSize", 10), Ie(x, "_keyboardManager", new a.KeyboardManager([[["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], u.prototype.commitOrRemove]])), Ie(x, "_type", "freetext"), c.FreeTextEditor = x;
    }, (R, c, e) => {
      var f, l, v, A, k, j, d, y, h, P, p, i, m, n, s, r, u, tr, I, rr, D, sr, W, nr, z, Mt, g, ir, S, Dt, q, ar, H, or, G, lr, J, cr, U, hr, le, Ke, F, Ot, B, gt, ee, mt, ie, nt, ce, It, he, vt, ye, dr, Ce, ur, pe, pr, Fe, fr, ae, Lt, Ee, bt, Se, it, Ne, Nt;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.InkEditor = void 0;
      var t = e(1), a = e(140), b = e(141);
      const x = 16, Re = class extends a.AnnotationEditor {
        constructor(se) {
          super({ ...se, name: "inkEditor" });
          te(this, u);
          te(this, I);
          te(this, D);
          te(this, W);
          te(this, z);
          te(this, g);
          te(this, S);
          te(this, q);
          te(this, H);
          te(this, G);
          te(this, J);
          te(this, U);
          te(this, le);
          te(this, F);
          te(this, B);
          te(this, ee);
          te(this, ie);
          te(this, ce);
          te(this, he);
          te(this, Ce);
          te(this, pe);
          te(this, Fe);
          te(this, ae);
          te(this, Ee);
          te(this, Se);
          te(this, Ne);
          te(this, f, 0);
          te(this, l, 0);
          te(this, v, 0);
          te(this, A, this.canvasContextMenu.bind(this));
          te(this, k, this.canvasPointermove.bind(this));
          te(this, j, this.canvasPointerleave.bind(this));
          te(this, d, this.canvasPointerup.bind(this));
          te(this, y, this.canvasPointerdown.bind(this));
          te(this, h, new Path2D());
          te(this, P, !1);
          te(this, p, !1);
          te(this, i, !1);
          te(this, m, null);
          te(this, n, 0);
          te(this, s, 0);
          te(this, r, null);
          this.color = se.color || null, this.thickness = se.thickness || null, this.opacity = se.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0;
        }
        static initialize(se) {
          this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map((oe) => [oe, se.get(oe)]));
        }
        static updateDefaultParams(se, oe) {
          switch (se) {
            case t.AnnotationEditorParamsType.INK_THICKNESS:
              Re._defaultThickness = oe;
              break;
            case t.AnnotationEditorParamsType.INK_COLOR:
              Re._defaultColor = oe;
              break;
            case t.AnnotationEditorParamsType.INK_OPACITY:
              Re._defaultOpacity = oe / 100;
          }
        }
        updateParams(se, oe) {
          switch (se) {
            case t.AnnotationEditorParamsType.INK_THICKNESS:
              ne(this, u, tr).call(this, oe);
              break;
            case t.AnnotationEditorParamsType.INK_COLOR:
              ne(this, I, rr).call(this, oe);
              break;
            case t.AnnotationEditorParamsType.INK_OPACITY:
              ne(this, D, sr).call(this, oe);
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[t.AnnotationEditorParamsType.INK_THICKNESS, Re._defaultThickness], [t.AnnotationEditorParamsType.INK_COLOR, Re._defaultColor || a.AnnotationEditor._defaultLineColor], [t.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * Re._defaultOpacity)]];
        }
        get propertiesToUpdate() {
          return [[t.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || Re._defaultThickness], [t.AnnotationEditorParamsType.INK_COLOR, this.color || Re._defaultColor || a.AnnotationEditor._defaultLineColor], [t.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? Re._defaultOpacity))]];
        }
        rebuild() {
          super.rebuild(), this.div !== null && (this.canvas || (ne(this, B, gt).call(this), ne(this, ee, mt).call(this)), this.isAttachedToDOM || (this.parent.add(this), ne(this, ie, nt).call(this)), ne(this, Se, it).call(this));
        }
        remove() {
          this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, T(this, m).disconnect(), ue(this, m, null), super.remove());
        }
        setParent(se) {
          !this.parent && se ? this._uiManager.removeShouldRescale(this) : this.parent && se === null && this._uiManager.addShouldRescale(this), super.setParent(se);
        }
        onScaleChanging() {
          const [se, oe] = this.parentDimensions, fe = this.width * se, ge = this.height * oe;
          this.setDimensions(fe, ge);
        }
        enableEditMode() {
          !T(this, P) && this.canvas !== null && (super.enableEditMode(), this.div.draggable = !1, this.canvas.addEventListener("pointerdown", T(this, y)));
        }
        disableEditMode() {
          this.isInEditMode() && this.canvas !== null && (super.disableEditMode(), this.div.draggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", T(this, y)));
        }
        onceAdded() {
          this.div.draggable = !this.isEmpty();
        }
        isEmpty() {
          return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
        }
        commit() {
          T(this, P) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), ue(this, P, !0), this.div.classList.add("disabled"), ne(this, Se, it).call(this, !0), this.parent.addInkEditorIfNeeded(!0), this.parent.moveEditorInDOM(this), this.div.focus({ preventScroll: !0 }));
        }
        focusin(se) {
          super.focusin(se), this.enableEditMode();
        }
        canvasPointerdown(se) {
          se.button === 0 && this.isInEditMode() && !T(this, P) && (this.setInForeground(), se.preventDefault(), se.type !== "mouse" && this.div.focus(), ne(this, g, ir).call(this, se.offsetX, se.offsetY));
        }
        canvasContextMenu(se) {
          se.preventDefault();
        }
        canvasPointermove(se) {
          se.preventDefault(), ne(this, S, Dt).call(this, se.offsetX, se.offsetY);
        }
        canvasPointerup(se) {
          se.preventDefault(), ne(this, F, Ot).call(this, se);
        }
        canvasPointerleave(se) {
          ne(this, F, Ot).call(this, se);
        }
        render() {
          if (this.div)
            return this.div;
          let se, oe;
          this.width && (se = this.x, oe = this.y), super.render(), Re._l10nPromise.get("editor_ink2_aria_label").then((ke) => {
            var Te;
            return (Te = this.div) === null || Te === void 0 ? void 0 : Te.setAttribute("aria-label", ke);
          });
          const [fe, ge, be, we] = ne(this, W, nr).call(this);
          if (this.setAt(fe, ge, 0, 0), this.setDims(be, we), ne(this, B, gt).call(this), this.width) {
            const [ke, Te] = this.parentDimensions;
            this.setAt(se * ke, oe * Te, this.width * ke, this.height * Te), ue(this, i, !0), ne(this, ie, nt).call(this), this.setDims(this.width * ke, this.height * Te), ne(this, le, Ke).call(this), ne(this, Ne, Nt).call(this), this.div.classList.add("disabled");
          } else
            this.div.classList.add("editing"), this.enableEditMode();
          return ne(this, ee, mt).call(this), this.div;
        }
        setDimensions(se, oe) {
          const fe = Math.round(se), ge = Math.round(oe);
          if (T(this, n) === fe && T(this, s) === ge)
            return;
          ue(this, n, fe), ue(this, s, ge), this.canvas.style.visibility = "hidden", T(this, f) && Math.abs(T(this, f) - se / oe) > 0.01 && (oe = Math.ceil(se / T(this, f)), this.setDims(se, oe));
          const [be, we] = this.parentDimensions;
          this.width = se / be, this.height = oe / we, T(this, P) && ne(this, ce, It).call(this, se, oe), ne(this, ie, nt).call(this), ne(this, le, Ke).call(this), this.canvas.style.visibility = "visible", this.fixDims();
        }
        static deserialize(se, oe, fe) {
          var Le, je;
          const ge = super.deserialize(se, oe, fe);
          ge.thickness = se.thickness, ge.color = t.Util.makeHexColor(...se.color), ge.opacity = se.opacity;
          const [be, we] = ge.pageDimensions, ke = ge.width * be, Te = ge.height * we, Oe = ge.parentScale, De = se.thickness / 2;
          ue(ge, f, ke / Te), ue(ge, P, !0), ue(ge, n, Math.round(ke)), ue(ge, s, Math.round(Te));
          for (const { bezier: Be } of se.paths) {
            const ze = [];
            ge.paths.push(ze);
            let We = Oe * (Be[0] - De), Ge = Oe * (Te - Be[1] - De);
            for (let Ve = 2, lt = Be.length; Ve < lt; Ve += 6) {
              const ct = Oe * (Be[Ve] - De), ht = Oe * (Te - Be[Ve + 1] - De), dt = Oe * (Be[Ve + 2] - De), mr = Oe * (Te - Be[Ve + 3] - De), Ut = Oe * (Be[Ve + 4] - De), qt = Oe * (Te - Be[Ve + 5] - De);
              ze.push([[We, Ge], [ct, ht], [dt, mr], [Ut, qt]]), We = Ut, Ge = qt;
            }
            const tt = ne(this, ye, dr).call(this, ze);
            ge.bezierPath2D.push(tt);
          }
          const qe = ne(Le = ge, ae, Lt).call(Le);
          return ue(ge, v, Math.max(x, qe[2] - qe[0])), ue(ge, l, Math.max(x, qe[3] - qe[1])), ne(je = ge, ce, It).call(je, ke, Te), ge;
        }
        serialize() {
          if (this.isEmpty())
            return null;
          const se = this.getRect(0, 0), oe = this.rotation % 180 == 0 ? se[3] - se[1] : se[2] - se[0], fe = a.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
          return { annotationType: t.AnnotationEditorType.INK, color: fe, thickness: this.thickness, opacity: this.opacity, paths: ne(this, Ce, ur).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, oe), pageIndex: this.pageIndex, rect: se, rotation: this.rotation };
        }
      };
      let O = Re;
      f = new WeakMap(), l = new WeakMap(), v = new WeakMap(), A = new WeakMap(), k = new WeakMap(), j = new WeakMap(), d = new WeakMap(), y = new WeakMap(), h = new WeakMap(), P = new WeakMap(), p = new WeakMap(), i = new WeakMap(), m = new WeakMap(), n = new WeakMap(), s = new WeakMap(), r = new WeakMap(), u = new WeakSet(), tr = function(se) {
        const oe = this.thickness;
        this.addCommands({ cmd: () => {
          this.thickness = se, ne(this, Se, it).call(this);
        }, undo: () => {
          this.thickness = oe, ne(this, Se, it).call(this);
        }, mustExec: !0, type: t.AnnotationEditorParamsType.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 });
      }, I = new WeakSet(), rr = function(se) {
        const oe = this.color;
        this.addCommands({ cmd: () => {
          this.color = se, ne(this, le, Ke).call(this);
        }, undo: () => {
          this.color = oe, ne(this, le, Ke).call(this);
        }, mustExec: !0, type: t.AnnotationEditorParamsType.INK_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
      }, D = new WeakSet(), sr = function(se) {
        se /= 100;
        const oe = this.opacity;
        this.addCommands({ cmd: () => {
          this.opacity = se, ne(this, le, Ke).call(this);
        }, undo: () => {
          this.opacity = oe, ne(this, le, Ke).call(this);
        }, mustExec: !0, type: t.AnnotationEditorParamsType.INK_OPACITY, overwriteIfSameType: !0, keepUndo: !0 });
      }, W = new WeakSet(), nr = function() {
        const { parentRotation: se, parentDimensions: [oe, fe] } = this;
        switch (se) {
          case 90:
            return [0, fe, fe, oe];
          case 180:
            return [oe, fe, oe, fe];
          case 270:
            return [oe, 0, fe, oe];
          default:
            return [0, 0, oe, fe];
        }
      }, z = new WeakSet(), Mt = function() {
        const { ctx: se, color: oe, opacity: fe, thickness: ge, parentScale: be, scaleFactor: we } = this;
        se.lineWidth = ge * be / we, se.lineCap = "round", se.lineJoin = "round", se.miterLimit = 10, se.strokeStyle = `${oe}${(0, b.opacityToHex)(fe)}`;
      }, g = new WeakSet(), ir = function(se, oe) {
        this.canvas.addEventListener("contextmenu", T(this, A)), this.canvas.addEventListener("pointerleave", T(this, j)), this.canvas.addEventListener("pointermove", T(this, k)), this.canvas.addEventListener("pointerup", T(this, d)), this.canvas.removeEventListener("pointerdown", T(this, y)), this.isEditing = !0, T(this, i) || (ue(this, i, !0), ne(this, ie, nt).call(this), this.thickness || (this.thickness = Re._defaultThickness), this.color || (this.color = Re._defaultColor || a.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = Re._defaultOpacity)), this.currentPath.push([se, oe]), ue(this, p, !1), ne(this, z, Mt).call(this), ue(this, r, () => {
          ne(this, G, lr).call(this), T(this, r) && window.requestAnimationFrame(T(this, r));
        }), window.requestAnimationFrame(T(this, r));
      }, S = new WeakSet(), Dt = function(se, oe) {
        const [fe, ge] = this.currentPath.at(-1);
        if (this.currentPath.length > 1 && se === fe && oe === ge)
          return;
        const be = this.currentPath;
        let we = T(this, h);
        be.push([se, oe]), ue(this, p, !0), be.length <= 2 ? (we.moveTo(...be[0]), we.lineTo(se, oe)) : (be.length === 3 && (ue(this, h, we = new Path2D()), we.moveTo(...be[0])), ne(this, J, cr).call(this, we, ...be.at(-3), ...be.at(-2), se, oe));
      }, q = new WeakSet(), ar = function() {
        if (this.currentPath.length === 0)
          return;
        const se = this.currentPath.at(-1);
        T(this, h).lineTo(...se);
      }, H = new WeakSet(), or = function(se, oe) {
        ue(this, r, null), se = Math.min(Math.max(se, 0), this.canvas.width), oe = Math.min(Math.max(oe, 0), this.canvas.height), ne(this, S, Dt).call(this, se, oe), ne(this, q, ar).call(this);
        let fe;
        if (this.currentPath.length !== 1)
          fe = ne(this, U, hr).call(this);
        else {
          const we = [se, oe];
          fe = [[we, we.slice(), we.slice(), we]];
        }
        const ge = T(this, h), be = this.currentPath;
        this.currentPath = [], ue(this, h, new Path2D()), this.addCommands({ cmd: () => {
          this.allRawPaths.push(be), this.paths.push(fe), this.bezierPath2D.push(ge), this.rebuild();
        }, undo: () => {
          this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (ne(this, B, gt).call(this), ne(this, ee, mt).call(this)), ne(this, Se, it).call(this));
        }, mustExec: !0 });
      }, G = new WeakSet(), lr = function() {
        if (!T(this, p))
          return;
        ue(this, p, !1), Math.ceil(this.thickness * this.parentScale);
        const se = this.currentPath.slice(-3), oe = se.map((be) => be[0]), fe = se.map((be) => be[1]), { ctx: ge } = (Math.min(...oe), Math.max(...oe), Math.min(...fe), Math.max(...fe), this);
        ge.save(), ge.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const be of this.bezierPath2D)
          ge.stroke(be);
        ge.stroke(T(this, h)), ge.restore();
      }, J = new WeakSet(), cr = function(se, oe, fe, ge, be, we, ke) {
        const Te = (oe + ge) / 2, Oe = (fe + be) / 2, De = (ge + we) / 2, qe = (be + ke) / 2;
        se.bezierCurveTo(Te + 2 * (ge - Te) / 3, Oe + 2 * (be - Oe) / 3, De + 2 * (ge - De) / 3, qe + 2 * (be - qe) / 3, De, qe);
      }, U = new WeakSet(), hr = function() {
        const se = this.currentPath;
        if (se.length <= 2)
          return [[se[0], se[0], se.at(-1), se.at(-1)]];
        const oe = [];
        let fe, [ge, be] = se[0];
        for (fe = 1; fe < se.length - 2; fe++) {
          const [Le, je] = se[fe], [Be, ze] = se[fe + 1], We = (Le + Be) / 2, Ge = (je + ze) / 2, tt = [ge + 2 * (Le - ge) / 3, be + 2 * (je - be) / 3], Ve = [We + 2 * (Le - We) / 3, Ge + 2 * (je - Ge) / 3];
          oe.push([[ge, be], tt, Ve, [We, Ge]]), [ge, be] = [We, Ge];
        }
        const [we, ke] = se[fe], [Te, Oe] = se[fe + 1], De = [ge + 2 * (we - ge) / 3, be + 2 * (ke - be) / 3], qe = [Te + 2 * (we - Te) / 3, Oe + 2 * (ke - Oe) / 3];
        return oe.push([[ge, be], De, qe, [Te, Oe]]), oe;
      }, le = new WeakSet(), Ke = function() {
        if (this.isEmpty()) {
          ne(this, he, vt).call(this);
          return;
        }
        ne(this, z, Mt).call(this);
        const { canvas: se, ctx: oe } = this;
        oe.setTransform(1, 0, 0, 1, 0, 0), oe.clearRect(0, 0, se.width, se.height), ne(this, he, vt).call(this);
        for (const fe of this.bezierPath2D)
          oe.stroke(fe);
      }, F = new WeakSet(), Ot = function(se) {
        this.canvas.removeEventListener("pointerleave", T(this, j)), this.canvas.removeEventListener("pointermove", T(this, k)), this.canvas.removeEventListener("pointerup", T(this, d)), this.canvas.addEventListener("pointerdown", T(this, y)), setTimeout(() => {
          this.canvas.removeEventListener("contextmenu", T(this, A));
        }, 10), ne(this, H, or).call(this, se.offsetX, se.offsetY), this.addToAnnotationStorage(), this.setInBackground();
      }, B = new WeakSet(), gt = function() {
        this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", Re._l10nPromise.get("editor_ink_canvas_aria_label").then((se) => {
          var oe;
          return (oe = this.canvas) === null || oe === void 0 ? void 0 : oe.setAttribute("aria-label", se);
        }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
      }, ee = new WeakSet(), mt = function() {
        ue(this, m, new ResizeObserver((se) => {
          const oe = se[0].contentRect;
          oe.width && oe.height && this.setDimensions(oe.width, oe.height);
        })), T(this, m).observe(this.div);
      }, ie = new WeakSet(), nt = function() {
        if (!T(this, i))
          return;
        const [se, oe] = this.parentDimensions;
        this.canvas.width = Math.ceil(this.width * se), this.canvas.height = Math.ceil(this.height * oe), ne(this, he, vt).call(this);
      }, ce = new WeakSet(), It = function(se, oe) {
        const fe = ne(this, Ee, bt).call(this), ge = (se - fe) / T(this, v), be = (oe - fe) / T(this, l);
        this.scaleFactor = Math.min(ge, be);
      }, he = new WeakSet(), vt = function() {
        const se = ne(this, Ee, bt).call(this) / 2;
        this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + se, this.translationY * this.scaleFactor + se);
      }, ye = new WeakSet(), dr = function(se) {
        const oe = new Path2D();
        for (let fe = 0, ge = se.length; fe < ge; fe++) {
          const [be, we, ke, Te] = se[fe];
          fe === 0 && oe.moveTo(...be), oe.bezierCurveTo(we[0], we[1], ke[0], ke[1], Te[0], Te[1]);
        }
        return oe;
      }, Ce = new WeakSet(), ur = function(se, oe, fe, ge) {
        const be = [], we = this.thickness / 2;
        let ke, Te;
        for (const Oe of this.paths) {
          ke = [], Te = [];
          for (let De = 0, qe = Oe.length; De < qe; De++) {
            const [Le, je, Be, ze] = Oe[De], We = se * (Le[0] + oe) + we, Ge = ge - se * (Le[1] + fe) - we, tt = se * (je[0] + oe) + we, Ve = ge - se * (je[1] + fe) - we, lt = se * (Be[0] + oe) + we, ct = ge - se * (Be[1] + fe) - we, ht = se * (ze[0] + oe) + we, dt = ge - se * (ze[1] + fe) - we;
            De === 0 && (ke.push(We, Ge), Te.push(We, Ge)), ke.push(tt, Ve, lt, ct, ht, dt), ne(this, pe, pr).call(this, We, Ge, tt, Ve, lt, ct, ht, dt, 4, Te);
          }
          be.push({ bezier: ke, points: Te });
        }
        return be;
      }, pe = new WeakSet(), pr = function(se, oe, fe, ge, be, we, ke, Te, Oe, De) {
        if (ne(this, Fe, fr).call(this, se, oe, fe, ge, be, we, ke, Te))
          De.push(ke, Te);
        else {
          for (let qe = 1; qe < Oe - 1; qe++) {
            const Le = qe / Oe, je = 1 - Le;
            let Be = Le * se + je * fe, ze = Le * oe + je * ge, We = Le * fe + je * be, Ge = Le * ge + je * we;
            Be = Le * Be + je * We, ze = Le * ze + je * Ge, We = Le * We + je * (Le * be + je * ke), Ge = Le * Ge + je * (Le * we + je * Te), Be = Le * Be + je * We, ze = Le * ze + je * Ge, De.push(Be, ze);
          }
          De.push(ke, Te);
        }
      }, Fe = new WeakSet(), fr = function(se, oe, fe, ge, be, we, ke, Te) {
        const Oe = (3 * fe - 2 * se - ke) ** 2, De = (3 * ge - 2 * oe - Te) ** 2, qe = (3 * be - se - 2 * ke) ** 2, Le = (3 * we - oe - 2 * Te) ** 2;
        return Math.max(Oe, qe) + Math.max(De, Le) <= 10;
      }, ae = new WeakSet(), Lt = function() {
        let se = 1 / 0, oe = -1 / 0, fe = 1 / 0, ge = -1 / 0;
        for (const be of this.paths)
          for (const [we, ke, Te, Oe] of be) {
            const De = t.Util.bezierBoundingBox(...we, ...ke, ...Te, ...Oe);
            se = Math.min(se, De[0]), fe = Math.min(fe, De[1]), oe = Math.max(oe, De[2]), ge = Math.max(ge, De[3]);
          }
        return [se, fe, oe, ge];
      }, Ee = new WeakSet(), bt = function() {
        return T(this, P) ? Math.ceil(this.thickness * this.parentScale) : 0;
      }, Se = new WeakSet(), it = function() {
        let se = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (this.isEmpty())
          return;
        if (!T(this, P)) {
          ne(this, le, Ke).call(this);
          return;
        }
        const oe = ne(this, ae, Lt).call(this), fe = ne(this, Ee, bt).call(this);
        ue(this, v, Math.max(x, oe[2] - oe[0])), ue(this, l, Math.max(x, oe[3] - oe[1]));
        const ge = Math.ceil(fe + T(this, v) * this.scaleFactor), be = Math.ceil(fe + T(this, l) * this.scaleFactor), [we, ke] = this.parentDimensions;
        this.width = ge / we, this.height = be / ke, ue(this, f, ge / be), ne(this, Ne, Nt).call(this);
        const Te = this.translationX, Oe = this.translationY;
        this.translationX = -oe[0], this.translationY = -oe[1], ne(this, ie, nt).call(this), ne(this, le, Ke).call(this), ue(this, n, ge), ue(this, s, be), this.setDims(ge, be);
        const De = se ? fe / this.scaleFactor / 2 : 0;
        this.translate(Te - this.translationX - De, Oe - this.translationY - De);
      }, Ne = new WeakSet(), Nt = function() {
        const { style: se } = this.div;
        T(this, f) >= 1 ? (se.minHeight = "16px", se.minWidth = `${Math.round(T(this, f) * x)}px`) : (se.minWidth = "16px", se.minHeight = `${Math.round(x / T(this, f))}px`);
      }, te(O, ye), Ie(O, "_defaultColor", null), Ie(O, "_defaultOpacity", 1), Ie(O, "_defaultThickness", 1), Ie(O, "_l10nPromise"), Ie(O, "_type", "ink"), c.InkEditor = O;
    }, (R, c, e) => {
      var q, Ze, H, gr, X, jt, Q, Bt;
      Object.defineProperty(c, "__esModule", { value: !0 }), c.AnnotationLayer = void 0;
      var t = e(1), a = e(142), b = e(139), x = e(166), O = e(167);
      const f = 1e3, l = /* @__PURE__ */ new WeakSet();
      function v(le) {
        return { width: le[2] - le[0], height: le[3] - le[1] };
      }
      class A {
        static create(E) {
          switch (E.data.annotationType) {
            case t.AnnotationType.LINK:
              return new j(E);
            case t.AnnotationType.TEXT:
              return new d(E);
            case t.AnnotationType.WIDGET:
              switch (E.data.fieldType) {
                case "Tx":
                  return new h(E);
                case "Btn":
                  return E.data.radioButton ? new p(E) : E.data.checkBox ? new P(E) : new i(E);
                case "Ch":
                  return new m(E);
              }
              return new y(E);
            case t.AnnotationType.POPUP:
              return new n(E);
            case t.AnnotationType.FREETEXT:
              return new r(E);
            case t.AnnotationType.LINE:
              return new u(E);
            case t.AnnotationType.SQUARE:
              return new C(E);
            case t.AnnotationType.CIRCLE:
              return new I(E);
            case t.AnnotationType.POLYLINE:
              return new o(E);
            case t.AnnotationType.CARET:
              return new $(E);
            case t.AnnotationType.INK:
              return new W(E);
            case t.AnnotationType.POLYGON:
              return new D(E);
            case t.AnnotationType.HIGHLIGHT:
              return new K(E);
            case t.AnnotationType.UNDERLINE:
              return new z(E);
            case t.AnnotationType.SQUIGGLY:
              return new _(E);
            case t.AnnotationType.STRIKEOUT:
              return new g(E);
            case t.AnnotationType.STAMP:
              return new w(E);
            case t.AnnotationType.FILEATTACHMENT:
              return new S(E);
            default:
              return new k(E);
          }
        }
      }
      class k {
        constructor(E) {
          let { isRenderable: F = !1, ignoreBorder: N = !1, createQuadrilaterals: B = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.isRenderable = F, this.data = E.data, this.layer = E.layer, this.page = E.page, this.viewport = E.viewport, this.linkService = E.linkService, this.downloadManager = E.downloadManager, this.imageResourcesPath = E.imageResourcesPath, this.renderForms = E.renderForms, this.svgFactory = E.svgFactory, this.annotationStorage = E.annotationStorage, this.enableScripting = E.enableScripting, this.hasJSActions = E.hasJSActions, this._fieldObjects = E.fieldObjects, F && (this.container = this._createContainer(N)), B && (this.quadrilaterals = this._createQuadrilaterals(N));
        }
        _createContainer() {
          let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          const { data: F, page: N, viewport: B } = this, Y = document.createElement("section");
          Y.setAttribute("data-annotation-id", F.id), F.noRotate && Y.classList.add("norotate");
          const { pageWidth: ee, pageHeight: re, pageX: ie, pageY: Ae } = B.rawDims, { width: ce, height: ve } = v(F.rect), he = t.Util.normalizeRect([F.rect[0], N.view[3] - F.rect[1] + N.view[1], F.rect[2], N.view[3] - F.rect[3] + N.view[1]]);
          if (!E && F.borderStyle.width > 0) {
            Y.style.borderWidth = `${F.borderStyle.width}px`;
            const ye = F.borderStyle.horizontalCornerRadius, _e = F.borderStyle.verticalCornerRadius;
            if (ye > 0 || _e > 0) {
              const Z = `calc(${ye}px * var(--scale-factor)) / calc(${_e}px * var(--scale-factor))`;
              Y.style.borderRadius = Z;
            } else if (this instanceof p) {
              const Z = `calc(${ce}px * var(--scale-factor)) / calc(${ve}px * var(--scale-factor))`;
              Y.style.borderRadius = Z;
            }
            switch (F.borderStyle.style) {
              case t.AnnotationBorderStyleType.SOLID:
                Y.style.borderStyle = "solid";
                break;
              case t.AnnotationBorderStyleType.DASHED:
                Y.style.borderStyle = "dashed";
                break;
              case t.AnnotationBorderStyleType.BEVELED:
                (0, t.warn)("Unimplemented border style: beveled");
                break;
              case t.AnnotationBorderStyleType.INSET:
                (0, t.warn)("Unimplemented border style: inset");
                break;
              case t.AnnotationBorderStyleType.UNDERLINE:
                Y.style.borderBottomStyle = "solid";
            }
            const Ce = F.borderColor || null;
            Ce ? Y.style.borderColor = t.Util.makeHexColor(0 | Ce[0], 0 | Ce[1], 0 | Ce[2]) : Y.style.borderWidth = 0;
          }
          Y.style.left = 100 * (he[0] - ie) / ee + "%", Y.style.top = 100 * (he[1] - Ae) / re + "%";
          const { rotation: me } = F;
          return F.hasOwnCanvas || me === 0 ? (Y.style.width = 100 * ce / ee + "%", Y.style.height = 100 * ve / re + "%") : this.setRotation(me, Y), Y;
        }
        setRotation(E) {
          let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.container;
          const { pageWidth: N, pageHeight: B } = this.viewport.rawDims, { width: Y, height: ee } = v(this.data.rect);
          let re, ie;
          E % 180 == 0 ? (re = 100 * Y / N, ie = 100 * ee / B) : (re = 100 * ee / N, ie = 100 * Y / B), F.style.width = `${re}%`, F.style.height = `${ie}%`, F.setAttribute("data-main-rotation", (360 - E) % 360);
        }
        get _commonActions() {
          const E = (F, N, B) => {
            const Y = B.detail[F];
            B.target.style[N] = x.ColorConverters[`${Y[0]}_HTML`](Y.slice(1));
          };
          return (0, t.shadow)(this, "_commonActions", { display: (F) => {
            const N = F.detail.display % 2 == 1;
            this.container.style.visibility = N ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { hidden: N, print: F.detail.display === 0 || F.detail.display === 3 });
          }, print: (F) => {
            this.annotationStorage.setValue(this.data.id, { print: F.detail.print });
          }, hidden: (F) => {
            this.container.style.visibility = F.detail.hidden ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { hidden: F.detail.hidden });
          }, focus: (F) => {
            setTimeout(() => F.target.focus({ preventScroll: !1 }), 0);
          }, userName: (F) => {
            F.target.title = F.detail.userName;
          }, readonly: (F) => {
            F.detail.readonly ? F.target.setAttribute("readonly", "") : F.target.removeAttribute("readonly");
          }, required: (F) => {
            this._setRequired(F.target, F.detail.required);
          }, bgColor: (F) => {
            E("bgColor", "backgroundColor", F);
          }, fillColor: (F) => {
            E("fillColor", "backgroundColor", F);
          }, fgColor: (F) => {
            E("fgColor", "color", F);
          }, textColor: (F) => {
            E("textColor", "color", F);
          }, borderColor: (F) => {
            E("borderColor", "borderColor", F);
          }, strokeColor: (F) => {
            E("strokeColor", "borderColor", F);
          }, rotation: (F) => {
            const N = F.detail.rotation;
            this.setRotation(N), this.annotationStorage.setValue(this.data.id, { rotation: N });
          } });
        }
        _dispatchEventFromSandbox(E, F) {
          const N = this._commonActions;
          for (const B of Object.keys(F.detail)) {
            const Y = E[B] || N[B];
            Y == null || Y(F);
          }
        }
        _setDefaultPropertiesFromJS(E) {
          if (!this.enableScripting)
            return;
          const F = this.annotationStorage.getRawValue(this.data.id);
          if (!F)
            return;
          const N = this._commonActions;
          for (const [B, Y] of Object.entries(F)) {
            const ee = N[B];
            ee && (ee({ detail: { [B]: Y }, target: E }), delete F[B]);
          }
        }
        _createQuadrilaterals() {
          let E = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (!this.data.quadPoints)
            return null;
          const F = [], N = this.data.rect;
          for (const B of this.data.quadPoints)
            this.data.rect = [B[2].x, B[2].y, B[1].x, B[1].y], F.push(this._createContainer(E));
          return this.data.rect = N, F;
        }
        _createPopup(E, F) {
          let N = this.container;
          this.quadrilaterals && (E || (E = this.quadrilaterals), N = this.quadrilaterals[0]), E || ((E = document.createElement("div")).classList.add("popupTriggerArea"), N.append(E));
          const B = new s({ container: N, trigger: E, color: F.color, titleObj: F.titleObj, modificationDate: F.modificationDate, contentsObj: F.contentsObj, richText: F.richText, hideWrapper: !0 }).render();
          B.style.left = "100%", N.append(B);
        }
        _renderQuadrilaterals(E) {
          for (const F of this.quadrilaterals)
            F.classList.add(E);
          return this.quadrilaterals;
        }
        render() {
          (0, t.unreachable)("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(E) {
          let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const N = [];
          if (this._fieldObjects) {
            const B = this._fieldObjects[E];
            if (B)
              for (const { page: Y, id: ee, exportValues: re } of B) {
                if (Y === -1 || ee === F)
                  continue;
                const ie = typeof re == "string" ? re : null, Ae = document.querySelector(`[data-element-id="${ee}"]`);
                !Ae || l.has(Ae) ? N.push({ id: ee, exportValue: ie, domElement: Ae }) : (0, t.warn)(`_getElementsByName - element not allowed: ${ee}`);
              }
            return N;
          }
          for (const B of document.getElementsByName(E)) {
            const { exportValue: Y } = B, ee = B.getAttribute("data-element-id");
            ee !== F && l.has(B) && N.push({ id: ee, exportValue: Y, domElement: B });
          }
          return N;
        }
      }
      class j extends k {
        constructor(F) {
          let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          super(F, { isRenderable: !0, ignoreBorder: !(N == null || !N.ignoreBorder), createQuadrilaterals: !0 });
          te(this, q);
          te(this, H);
          this.isTooltipOnly = F.data.isTooltipOnly;
        }
        render() {
          const { data: F, linkService: N } = this, B = document.createElement("a");
          B.setAttribute("data-element-id", F.id);
          let Y = !1;
          return F.url ? (N.addLinkAttributes(B, F.url, F.newWindow), Y = !0) : F.action ? (this._bindNamedAction(B, F.action), Y = !0) : F.attachment ? (this._bindAttachment(B, F.attachment), Y = !0) : F.setOCGState ? (ne(this, H, gr).call(this, B, F.setOCGState), Y = !0) : F.dest ? (this._bindLink(B, F.dest), Y = !0) : (F.actions && (F.actions.Action || F.actions["Mouse Up"] || F.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(B, F), Y = !0), F.resetForm ? (this._bindResetFormAction(B, F.resetForm), Y = !0) : this.isTooltipOnly && !Y && (this._bindLink(B, ""), Y = !0)), this.quadrilaterals ? this._renderQuadrilaterals("linkAnnotation").map((ee, re) => {
            const ie = re === 0 ? B : B.cloneNode();
            return ee.append(ie), ee;
          }) : (this.container.classList.add("linkAnnotation"), Y && this.container.append(B), this.container);
        }
        _bindLink(F, N) {
          F.href = this.linkService.getDestinationHash(N), F.onclick = () => (N && this.linkService.goToDestination(N), !1), (N || N === "") && ne(this, q, Ze).call(this);
        }
        _bindNamedAction(F, N) {
          F.href = this.linkService.getAnchorUrl(""), F.onclick = () => (this.linkService.executeNamedAction(N), !1), ne(this, q, Ze).call(this);
        }
        _bindAttachment(F, N) {
          F.href = this.linkService.getAnchorUrl(""), F.onclick = () => {
            var B;
            return (B = this.downloadManager) === null || B === void 0 || B.openOrDownloadData(this.container, N.content, N.filename), !1;
          }, ne(this, q, Ze).call(this);
        }
        _bindJSAction(F, N) {
          F.href = this.linkService.getAnchorUrl("");
          const B = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
          for (const Y of Object.keys(N.actions)) {
            const ee = B.get(Y);
            ee && (F[ee] = () => {
              var re;
              return (re = this.linkService.eventBus) === null || re === void 0 || re.dispatch("dispatcheventinsandbox", { source: this, detail: { id: N.id, name: Y } }), !1;
            });
          }
          F.onclick || (F.onclick = () => !1), ne(this, q, Ze).call(this);
        }
        _bindResetFormAction(F, N) {
          const B = F.onclick;
          B || (F.href = this.linkService.getAnchorUrl("")), ne(this, q, Ze).call(this), this._fieldObjects ? F.onclick = () => {
            B == null || B();
            const { fields: Y, refs: ee, include: re } = N, ie = [];
            if (Y.length !== 0 || ee.length !== 0) {
              const he = new Set(ee);
              for (const me of Y) {
                const ye = this._fieldObjects[me] || [];
                for (const { id: _e } of ye)
                  he.add(_e);
              }
              for (const me of Object.values(this._fieldObjects))
                for (const ye of me)
                  he.has(ye.id) === re && ie.push(ye);
            } else
              for (const he of Object.values(this._fieldObjects))
                ie.push(...he);
            const Ae = this.annotationStorage, ce = [];
            for (const he of ie) {
              const { id: me } = he;
              switch (ce.push(me), he.type) {
                case "text": {
                  const _e = he.defaultValue || "";
                  Ae.setValue(me, { value: _e });
                  break;
                }
                case "checkbox":
                case "radiobutton": {
                  const _e = he.defaultValue === he.exportValues;
                  Ae.setValue(me, { value: _e });
                  break;
                }
                case "combobox":
                case "listbox": {
                  const _e = he.defaultValue || "";
                  Ae.setValue(me, { value: _e });
                  break;
                }
                default:
                  continue;
              }
              const ye = document.querySelector(`[data-element-id="${me}"]`);
              ye && (l.has(ye) ? ye.dispatchEvent(new Event("resetform")) : (0, t.warn)(`_bindResetFormAction - element not allowed: ${me}`));
            }
            if (this.enableScripting) {
              var ve;
              (ve = this.linkService.eventBus) === null || ve === void 0 || ve.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: ce, name: "ResetForm" } });
            }
            return !1;
          } : ((0, t.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), B || (F.onclick = () => !1));
        }
      }
      q = new WeakSet(), Ze = function() {
        this.container.setAttribute("data-internal-link", "");
      }, H = new WeakSet(), gr = function(F, N) {
        F.href = this.linkService.getAnchorUrl(""), F.onclick = () => (this.linkService.executeSetOCGState(N), !1), ne(this, q, Ze).call(this);
      };
      class d extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str) });
        }
        render() {
          this.container.classList.add("textAnnotation");
          const E = document.createElement("img");
          return E.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", E.alt = "[{{type}} Annotation]", E.dataset.l10nId = "text_annotation_type", E.dataset.l10nArgs = JSON.stringify({ type: this.data.name }), this.data.hasPopup || this._createPopup(E, this.data), this.container.append(E), this.container;
        }
      }
      class y extends k {
        render() {
          return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
        }
        showElementAndHideCanvas(E) {
          if (this.data.hasOwnCanvas) {
            var F;
            ((F = E.previousSibling) === null || F === void 0 ? void 0 : F.nodeName) === "CANVAS" && (E.previousSibling.hidden = !0), E.hidden = !1;
          }
        }
        _getKeyModifier(E) {
          const { isWin: F, isMac: N } = t.FeatureTest.platform;
          return F && E.ctrlKey || N && E.metaKey;
        }
        _setEventListener(E, F, N, B) {
          F.includes("mouse") ? E.addEventListener(F, (Y) => {
            var ee;
            (ee = this.linkService.eventBus) === null || ee === void 0 || ee.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: N, value: B(Y), shift: Y.shiftKey, modifier: this._getKeyModifier(Y) } });
          }) : E.addEventListener(F, (Y) => {
            var ee;
            (ee = this.linkService.eventBus) === null || ee === void 0 || ee.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: N, value: B(Y) } });
          });
        }
        _setEventListeners(E, F, N) {
          for (const [Y, ee] of F) {
            var B;
            (ee === "Action" || (B = this.data.actions) !== null && B !== void 0 && B[ee]) && this._setEventListener(E, Y, ee, N);
          }
        }
        _setBackgroundColor(E) {
          const F = this.data.backgroundColor || null;
          E.style.backgroundColor = F === null ? "transparent" : t.Util.makeHexColor(F[0], F[1], F[2]);
        }
        _setTextStyle(E) {
          const F = ["left", "center", "right"], { fontColor: N } = this.data.defaultAppearanceData, B = this.data.defaultAppearanceData.fontSize || 9, Y = E.style;
          let ee;
          const re = (ie) => Math.round(10 * ie) / 10;
          if (this.data.multiLine) {
            const ie = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), Ae = ie / (Math.round(ie / (t.LINE_FACTOR * B)) || 1);
            ee = Math.min(B, re(Ae / t.LINE_FACTOR));
          } else {
            const ie = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
            ee = Math.min(B, re(ie / t.LINE_FACTOR));
          }
          Y.fontSize = `calc(${ee}px * var(--scale-factor))`, Y.color = t.Util.makeHexColor(N[0], N[1], N[2]), this.data.textAlignment !== null && (Y.textAlign = F[this.data.textAlignment]);
        }
        _setRequired(E, F) {
          F ? E.setAttribute("required", !0) : E.removeAttribute("required"), E.setAttribute("aria-required", F);
        }
      }
      class h extends y {
        constructor(E) {
          super(E, { isRenderable: E.renderForms || !E.data.hasAppearance && !!E.data.fieldValue });
        }
        setPropertyOnSiblings(E, F, N, B) {
          const Y = this.annotationStorage;
          for (const ee of this._getElementsByName(E.name, E.id))
            ee.domElement && (ee.domElement[F] = N), Y.setValue(ee.id, { [B]: N });
        }
        render() {
          const E = this.annotationStorage, F = this.data.id;
          this.container.classList.add("textWidgetAnnotation");
          let N = null;
          if (this.renderForms) {
            var B;
            const ee = E.getValue(F, { value: this.data.fieldValue });
            let re = ee.value || "";
            const ie = E.getValue(F, { charLimit: this.data.maxLen }).charLimit;
            ie && re.length > ie && (re = re.slice(0, ie));
            let Ae = ee.formattedValue || ((B = this.data.textContent) === null || B === void 0 ? void 0 : B.join(`
`)) || null;
            Ae && this.data.comb && (Ae = Ae.replaceAll(/\s+/g, ""));
            const ce = { userValue: re, formattedValue: Ae, lastCommittedValue: null, commitKey: 1 };
            this.data.multiLine ? (N = document.createElement("textarea"), N.textContent = Ae ?? re, this.data.doNotScroll && (N.style.overflowY = "hidden")) : (N = document.createElement("input"), N.type = "text", N.setAttribute("value", Ae ?? re), this.data.doNotScroll && (N.style.overflowX = "hidden")), this.data.hasOwnCanvas && (N.hidden = !0), l.add(N), N.setAttribute("data-element-id", F), N.disabled = this.data.readOnly, N.name = this.data.fieldName, N.tabIndex = f, this._setRequired(N, this.data.required), ie && (N.maxLength = ie), N.addEventListener("input", (he) => {
              E.setValue(F, { value: he.target.value }), this.setPropertyOnSiblings(N, "value", he.target.value, "value"), ce.formattedValue = null;
            }), N.addEventListener("resetform", (he) => {
              const me = this.data.defaultFieldValue ?? "";
              N.value = ce.userValue = me, ce.formattedValue = null;
            });
            let ve = (he) => {
              const { formattedValue: me } = ce;
              me != null && (he.target.value = me), he.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
              var Y;
              N.addEventListener("focus", (me) => {
                const { target: ye } = me;
                ce.userValue && (ye.value = ce.userValue), ce.lastCommittedValue = ye.value, ce.commitKey = 1;
              }), N.addEventListener("updatefromsandbox", (me) => {
                this.showElementAndHideCanvas(me.target);
                const ye = { value(_e) {
                  ce.userValue = _e.detail.value ?? "", E.setValue(F, { value: ce.userValue.toString() }), _e.target.value = ce.userValue;
                }, formattedValue(_e) {
                  const { formattedValue: Ce } = _e.detail;
                  ce.formattedValue = Ce, Ce != null && _e.target !== document.activeElement && (_e.target.value = Ce), E.setValue(F, { formattedValue: Ce });
                }, selRange(_e) {
                  _e.target.setSelectionRange(..._e.detail.selRange);
                }, charLimit: (_e) => {
                  var Ce;
                  const { charLimit: Z } = _e.detail, { target: pe } = _e;
                  if (Z === 0) {
                    pe.removeAttribute("maxLength");
                    return;
                  }
                  pe.setAttribute("maxLength", Z);
                  let xe = ce.userValue;
                  xe && !(xe.length <= Z) && (xe = xe.slice(0, Z), pe.value = ce.userValue = xe, E.setValue(F, { value: xe }), (Ce = this.linkService.eventBus) === null || Ce === void 0 || Ce.dispatch("dispatcheventinsandbox", { source: this, detail: { id: F, name: "Keystroke", value: xe, willCommit: !0, commitKey: 1, selStart: pe.selectionStart, selEnd: pe.selectionEnd } }));
                } };
                this._dispatchEventFromSandbox(ye, me);
              }), N.addEventListener("keydown", (me) => {
                var ye;
                ce.commitKey = 1;
                let _e = -1;
                if (me.key === "Escape" ? _e = 0 : me.key !== "Enter" || this.data.multiLine ? me.key === "Tab" && (ce.commitKey = 3) : _e = 2, _e === -1)
                  return;
                const { value: Ce } = me.target;
                ce.lastCommittedValue !== Ce && (ce.lastCommittedValue = Ce, ce.userValue = Ce, (ye = this.linkService.eventBus) === null || ye === void 0 || ye.dispatch("dispatcheventinsandbox", { source: this, detail: { id: F, name: "Keystroke", value: Ce, willCommit: !0, commitKey: _e, selStart: me.target.selectionStart, selEnd: me.target.selectionEnd } }));
              });
              const he = ve;
              ve = null, N.addEventListener("blur", (me) => {
                if (!me.relatedTarget)
                  return;
                const { value: ye } = me.target;
                if (ce.userValue = ye, ce.lastCommittedValue !== ye) {
                  var _e;
                  (_e = this.linkService.eventBus) === null || _e === void 0 || _e.dispatch("dispatcheventinsandbox", { source: this, detail: { id: F, name: "Keystroke", value: ye, willCommit: !0, commitKey: ce.commitKey, selStart: me.target.selectionStart, selEnd: me.target.selectionEnd } });
                }
                he(me);
              }), (Y = this.data.actions) !== null && Y !== void 0 && Y.Keystroke && N.addEventListener("beforeinput", (me) => {
                var ye;
                ce.lastCommittedValue = null;
                const { data: _e, target: Ce } = me, { value: Z, selectionStart: pe, selectionEnd: xe } = Ce;
                let Fe = pe, Me = xe;
                switch (me.inputType) {
                  case "deleteWordBackward": {
                    const ae = Z.substring(0, pe).match(/\w*[^\w]*$/);
                    ae && (Fe -= ae[0].length);
                    break;
                  }
                  case "deleteWordForward": {
                    const ae = Z.substring(pe).match(/^[^\w]*\w*/);
                    ae && (Me += ae[0].length);
                    break;
                  }
                  case "deleteContentBackward":
                    pe === xe && (Fe -= 1);
                    break;
                  case "deleteContentForward":
                    pe === xe && (Me += 1);
                }
                me.preventDefault(), (ye = this.linkService.eventBus) === null || ye === void 0 || ye.dispatch("dispatcheventinsandbox", { source: this, detail: { id: F, name: "Keystroke", value: Z, change: _e || "", willCommit: !1, selStart: Fe, selEnd: Me } });
              }), this._setEventListeners(N, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (me) => me.target.value);
            }
            if (ve && N.addEventListener("blur", ve), this.data.comb) {
              const he = (this.data.rect[2] - this.data.rect[0]) / ie;
              N.classList.add("comb"), N.style.letterSpacing = `calc(${he}px * var(--scale-factor) - 1ch)`;
            }
          } else
            N = document.createElement("div"), N.textContent = this.data.fieldValue, N.style.verticalAlign = "middle", N.style.display = "table-cell";
          return this._setTextStyle(N), this._setBackgroundColor(N), this._setDefaultPropertiesFromJS(N), this.container.append(N), this.container;
        }
      }
      class P extends y {
        constructor(E) {
          super(E, { isRenderable: E.renderForms });
        }
        render() {
          const E = this.annotationStorage, F = this.data, N = F.id;
          let B = E.getValue(N, { value: F.exportValue === F.fieldValue }).value;
          typeof B == "string" && (B = B !== "Off", E.setValue(N, { value: B })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
          const Y = document.createElement("input");
          return l.add(Y), Y.setAttribute("data-element-id", N), Y.disabled = F.readOnly, this._setRequired(Y, this.data.required), Y.type = "checkbox", Y.name = F.fieldName, B && Y.setAttribute("checked", !0), Y.setAttribute("exportValue", F.exportValue), Y.tabIndex = f, Y.addEventListener("change", (ee) => {
            const { name: re, checked: ie } = ee.target;
            for (const Ae of this._getElementsByName(re, N)) {
              const ce = ie && Ae.exportValue === F.exportValue;
              Ae.domElement && (Ae.domElement.checked = ce), E.setValue(Ae.id, { value: ce });
            }
            E.setValue(N, { value: ie });
          }), Y.addEventListener("resetform", (ee) => {
            const re = F.defaultFieldValue || "Off";
            ee.target.checked = re === F.exportValue;
          }), this.enableScripting && this.hasJSActions && (Y.addEventListener("updatefromsandbox", (ee) => {
            const re = { value(ie) {
              ie.target.checked = ie.detail.value !== "Off", E.setValue(N, { value: ie.target.checked });
            } };
            this._dispatchEventFromSandbox(re, ee);
          }), this._setEventListeners(Y, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (ee) => ee.target.checked)), this._setBackgroundColor(Y), this._setDefaultPropertiesFromJS(Y), this.container.append(Y), this.container;
        }
      }
      class p extends y {
        constructor(E) {
          super(E, { isRenderable: E.renderForms });
        }
        render() {
          this.container.classList.add("buttonWidgetAnnotation", "radioButton");
          const E = this.annotationStorage, F = this.data, N = F.id;
          let B = E.getValue(N, { value: F.fieldValue === F.buttonValue }).value;
          typeof B == "string" && (B = B !== F.buttonValue, E.setValue(N, { value: B }));
          const Y = document.createElement("input");
          if (l.add(Y), Y.setAttribute("data-element-id", N), Y.disabled = F.readOnly, this._setRequired(Y, this.data.required), Y.type = "radio", Y.name = F.fieldName, B && Y.setAttribute("checked", !0), Y.tabIndex = f, Y.addEventListener("change", (ee) => {
            const { name: re, checked: ie } = ee.target;
            for (const Ae of this._getElementsByName(re, N))
              E.setValue(Ae.id, { value: !1 });
            E.setValue(N, { value: ie });
          }), Y.addEventListener("resetform", (ee) => {
            const re = F.defaultFieldValue;
            ee.target.checked = re != null && re === F.buttonValue;
          }), this.enableScripting && this.hasJSActions) {
            const ee = F.buttonValue;
            Y.addEventListener("updatefromsandbox", (re) => {
              const ie = { value: (Ae) => {
                const ce = ee === Ae.detail.value;
                for (const ve of this._getElementsByName(Ae.target.name)) {
                  const he = ce && ve.id === N;
                  ve.domElement && (ve.domElement.checked = he), E.setValue(ve.id, { value: he });
                }
              } };
              this._dispatchEventFromSandbox(ie, re);
            }), this._setEventListeners(Y, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (re) => re.target.checked);
          }
          return this._setBackgroundColor(Y), this._setDefaultPropertiesFromJS(Y), this.container.append(Y), this.container;
        }
      }
      class i extends j {
        constructor(E) {
          super(E, { ignoreBorder: E.data.hasAppearance });
        }
        render() {
          const E = super.render();
          E.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (E.title = this.data.alternativeText);
          const F = E.lastChild;
          return this.enableScripting && this.hasJSActions && F && (this._setDefaultPropertiesFromJS(F), F.addEventListener("updatefromsandbox", (N) => {
            this._dispatchEventFromSandbox({}, N);
          })), E;
        }
      }
      class m extends y {
        constructor(E) {
          super(E, { isRenderable: E.renderForms });
        }
        render() {
          this.container.classList.add("choiceWidgetAnnotation");
          const E = this.annotationStorage, F = this.data.id, N = E.getValue(F, { value: this.data.fieldValue }), B = document.createElement("select");
          l.add(B), B.setAttribute("data-element-id", F), B.disabled = this.data.readOnly, this._setRequired(B, this.data.required), B.name = this.data.fieldName, B.tabIndex = f;
          let Y = this.data.combo && this.data.options.length > 0;
          this.data.combo || (B.size = this.data.options.length, this.data.multiSelect && (B.multiple = !0)), B.addEventListener("resetform", (ce) => {
            const ve = this.data.defaultFieldValue;
            for (const he of B.options)
              he.selected = he.value === ve;
          });
          for (const ce of this.data.options) {
            const ve = document.createElement("option");
            ve.textContent = ce.displayValue, ve.value = ce.exportValue, N.value.includes(ce.exportValue) && (ve.setAttribute("selected", !0), Y = !1), B.append(ve);
          }
          let ee = null;
          if (Y) {
            const ce = document.createElement("option");
            ce.value = " ", ce.setAttribute("hidden", !0), ce.setAttribute("selected", !0), B.prepend(ce), ee = () => {
              ce.remove(), B.removeEventListener("input", ee), ee = null;
            }, B.addEventListener("input", ee);
          }
          const re = (ce) => {
            const ve = ce ? "value" : "textContent", { options: he, multiple: me } = B;
            return me ? Array.prototype.filter.call(he, (ye) => ye.selected).map((ye) => ye[ve]) : he.selectedIndex === -1 ? null : he[he.selectedIndex][ve];
          };
          let ie = re(!1);
          const Ae = (ce) => {
            const ve = ce.target.options;
            return Array.prototype.map.call(ve, (he) => ({ displayValue: he.textContent, exportValue: he.value }));
          };
          return this.enableScripting && this.hasJSActions ? (B.addEventListener("updatefromsandbox", (ce) => {
            const ve = { value(he) {
              var me;
              (me = ee) === null || me === void 0 || me();
              const ye = he.detail.value, _e = new Set(Array.isArray(ye) ? ye : [ye]);
              for (const Ce of B.options)
                Ce.selected = _e.has(Ce.value);
              E.setValue(F, { value: re(!0) }), ie = re(!1);
            }, multipleSelection(he) {
              B.multiple = !0;
            }, remove(he) {
              const me = B.options, ye = he.detail.remove;
              me[ye].selected = !1, B.remove(ye), me.length > 0 && Array.prototype.findIndex.call(me, (_e) => _e.selected) === -1 && (me[0].selected = !0), E.setValue(F, { value: re(!0), items: Ae(he) }), ie = re(!1);
            }, clear(he) {
              for (; B.length !== 0; )
                B.remove(0);
              E.setValue(F, { value: null, items: [] }), ie = re(!1);
            }, insert(he) {
              const { index: me, displayValue: ye, exportValue: _e } = he.detail.insert, Ce = B.children[me], Z = document.createElement("option");
              Z.textContent = ye, Z.value = _e, Ce ? Ce.before(Z) : B.append(Z), E.setValue(F, { value: re(!0), items: Ae(he) }), ie = re(!1);
            }, items(he) {
              const { items: me } = he.detail;
              for (; B.length !== 0; )
                B.remove(0);
              for (const ye of me) {
                const { displayValue: _e, exportValue: Ce } = ye, Z = document.createElement("option");
                Z.textContent = _e, Z.value = Ce, B.append(Z);
              }
              B.options.length > 0 && (B.options[0].selected = !0), E.setValue(F, { value: re(!0), items: Ae(he) }), ie = re(!1);
            }, indices(he) {
              const me = new Set(he.detail.indices);
              for (const ye of he.target.options)
                ye.selected = me.has(ye.index);
              E.setValue(F, { value: re(!0) }), ie = re(!1);
            }, editable(he) {
              he.target.disabled = !he.detail.editable;
            } };
            this._dispatchEventFromSandbox(ve, ce);
          }), B.addEventListener("input", (ce) => {
            var ve;
            const he = re(!0);
            E.setValue(F, { value: he }), ce.preventDefault(), (ve = this.linkService.eventBus) === null || ve === void 0 || ve.dispatch("dispatcheventinsandbox", { source: this, detail: { id: F, name: "Keystroke", value: ie, changeEx: he, willCommit: !1, commitKey: 1, keyDown: !1 } });
          }), this._setEventListeners(B, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (ce) => ce.target.value)) : B.addEventListener("input", function(ce) {
            E.setValue(F, { value: re(!0) });
          }), this.data.combo && this._setTextStyle(B), this._setBackgroundColor(B), this._setDefaultPropertiesFromJS(B), this.container.append(B), this.container;
        }
      }
      const G = class extends k {
        constructor(E) {
          var F, N, B;
          const { data: Y } = E;
          super(E, { isRenderable: !G.IGNORE_TYPES.has(Y.parentType) && !!((F = Y.titleObj) !== null && F !== void 0 && F.str || (N = Y.contentsObj) !== null && N !== void 0 && N.str || (B = Y.richText) !== null && B !== void 0 && B.str) });
        }
        render() {
          this.container.classList.add("popupAnnotation");
          const E = this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);
          if (E.length === 0)
            return this.container;
          const F = new s({ container: this.container, trigger: Array.from(E), color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate, contentsObj: this.data.contentsObj, richText: this.data.richText }), N = this.page, B = t.Util.normalizeRect([this.data.parentRect[0], N.view[3] - this.data.parentRect[1] + N.view[1], this.data.parentRect[2], N.view[3] - this.data.parentRect[3] + N.view[1]]), Y = B[0] + this.data.parentRect[2] - this.data.parentRect[0], ee = B[1], { pageWidth: re, pageHeight: ie, pageX: Ae, pageY: ce } = this.viewport.rawDims;
          return this.container.style.left = 100 * (Y - Ae) / re + "%", this.container.style.top = 100 * (ee - ce) / ie + "%", this.container.append(F.render()), this.container;
        }
      };
      let n = G;
      Ie(n, "IGNORE_TYPES", /* @__PURE__ */ new Set(["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"]));
      class s {
        constructor(E) {
          this.container = E.container, this.trigger = E.trigger, this.color = E.color, this.titleObj = E.titleObj, this.modificationDate = E.modificationDate, this.contentsObj = E.contentsObj, this.richText = E.richText, this.hideWrapper = E.hideWrapper || !1, this.pinned = !1;
        }
        render() {
          var E, F;
          const N = document.createElement("div");
          N.classList.add("popupWrapper"), this.hideElement = this.hideWrapper ? N : this.container, this.hideElement.hidden = !0;
          const B = document.createElement("div");
          B.classList.add("popup");
          const Y = this.color;
          if (Y) {
            const ie = 0.7 * (255 - Y[0]) + Y[0], Ae = 0.7 * (255 - Y[1]) + Y[1], ce = 0.7 * (255 - Y[2]) + Y[2];
            B.style.backgroundColor = t.Util.makeHexColor(0 | ie, 0 | Ae, 0 | ce);
          }
          const ee = document.createElement("h1");
          ee.dir = this.titleObj.dir, ee.textContent = this.titleObj.str, B.append(ee);
          const re = a.PDFDateString.toDateObject(this.modificationDate);
          if (re) {
            const ie = document.createElement("span");
            ie.classList.add("popupDate"), ie.textContent = "{{date}}, {{time}}", ie.dataset.l10nId = "annotation_date_string", ie.dataset.l10nArgs = JSON.stringify({ date: re.toLocaleDateString(), time: re.toLocaleTimeString() }), B.append(ie);
          }
          if ((E = this.richText) === null || E === void 0 || !E.str || (F = this.contentsObj) !== null && F !== void 0 && F.str && this.contentsObj.str !== this.richText.str) {
            const ie = this._formatContents(this.contentsObj);
            B.append(ie);
          } else
            O.XfaLayer.render({ xfaHtml: this.richText.html, intent: "richText", div: B }), B.lastChild.classList.add("richText", "popupContent");
          Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
          for (const ie of this.trigger)
            ie.addEventListener("click", this._toggle.bind(this)), ie.addEventListener("mouseover", this._show.bind(this, !1)), ie.addEventListener("mouseout", this._hide.bind(this, !1));
          return B.addEventListener("click", this._hide.bind(this, !0)), N.append(B), N;
        }
        _formatContents(E) {
          let { str: F, dir: N } = E;
          const B = document.createElement("p");
          B.classList.add("popupContent"), B.dir = N;
          const Y = F.split(/(?:\r\n?|\n)/);
          for (let ee = 0, re = Y.length; ee < re; ++ee) {
            const ie = Y[ee];
            B.append(document.createTextNode(ie)), ee < re - 1 && B.append(document.createElement("br"));
          }
          return B;
        }
        _toggle() {
          this.pinned ? this._hide(!0) : this._show(!0);
        }
        _show() {
          arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && (this.pinned = !0), this.hideElement.hidden && (this.hideElement.hidden = !1, this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1e3);
        }
        _hide() {
          (!(arguments.length > 0 && arguments[0] !== void 0) || arguments[0]) && (this.pinned = !1), !this.hideElement.hidden && !this.pinned && (this.hideElement.hidden = !0, this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1e3);
        }
      }
      class r extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 }), this.textContent = E.data.textContent;
        }
        render() {
          if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
            const E = document.createElement("div");
            E.classList.add("annotationTextContent"), E.setAttribute("role", "comment");
            for (const F of this.textContent) {
              const N = document.createElement("span");
              N.textContent = F, E.append(N);
            }
            this.container.append(E);
          }
          return this.data.hasPopup || this._createPopup(null, this.data), this.container;
        }
      }
      class u extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          this.container.classList.add("lineAnnotation");
          const E = this.data, { width: F, height: N } = v(E.rect), B = this.svgFactory.create(F, N, !0), Y = this.svgFactory.createElement("svg:line");
          return Y.setAttribute("x1", E.rect[2] - E.lineCoordinates[0]), Y.setAttribute("y1", E.rect[3] - E.lineCoordinates[1]), Y.setAttribute("x2", E.rect[2] - E.lineCoordinates[2]), Y.setAttribute("y2", E.rect[3] - E.lineCoordinates[3]), Y.setAttribute("stroke-width", E.borderStyle.width || 1), Y.setAttribute("stroke", "transparent"), Y.setAttribute("fill", "transparent"), B.append(Y), this.container.append(B), this._createPopup(Y, E), this.container;
        }
      }
      class C extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          this.container.classList.add("squareAnnotation");
          const E = this.data, { width: F, height: N } = v(E.rect), B = this.svgFactory.create(F, N, !0), Y = E.borderStyle.width, ee = this.svgFactory.createElement("svg:rect");
          return ee.setAttribute("x", Y / 2), ee.setAttribute("y", Y / 2), ee.setAttribute("width", F - Y), ee.setAttribute("height", N - Y), ee.setAttribute("stroke-width", Y || 1), ee.setAttribute("stroke", "transparent"), ee.setAttribute("fill", "transparent"), B.append(ee), this.container.append(B), this._createPopup(ee, E), this.container;
        }
      }
      class I extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          this.container.classList.add("circleAnnotation");
          const E = this.data, { width: F, height: N } = v(E.rect), B = this.svgFactory.create(F, N, !0), Y = E.borderStyle.width, ee = this.svgFactory.createElement("svg:ellipse");
          return ee.setAttribute("cx", F / 2), ee.setAttribute("cy", N / 2), ee.setAttribute("rx", F / 2 - Y / 2), ee.setAttribute("ry", N / 2 - Y / 2), ee.setAttribute("stroke-width", Y || 1), ee.setAttribute("stroke", "transparent"), ee.setAttribute("fill", "transparent"), B.append(ee), this.container.append(B), this._createPopup(ee, E), this.container;
        }
      }
      class o extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const E = this.data, { width: F, height: N } = v(E.rect), B = this.svgFactory.create(F, N, !0);
          let Y = [];
          for (const re of E.vertices) {
            const ie = re.x - E.rect[0], Ae = E.rect[3] - re.y;
            Y.push(ie + "," + Ae);
          }
          Y = Y.join(" ");
          const ee = this.svgFactory.createElement(this.svgElementName);
          return ee.setAttribute("points", Y), ee.setAttribute("stroke-width", E.borderStyle.width || 1), ee.setAttribute("stroke", "transparent"), ee.setAttribute("fill", "transparent"), B.append(ee), this.container.append(B), this._createPopup(ee, E), this.container;
        }
      }
      class D extends o {
        constructor(E) {
          super(E), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
        }
      }
      class $ extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          return this.container.classList.add("caretAnnotation"), this.data.hasPopup || this._createPopup(null, this.data), this.container;
        }
      }
      class W extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const E = this.data, { width: F, height: N } = v(E.rect), B = this.svgFactory.create(F, N, !0);
          for (const Y of E.inkLists) {
            let ee = [];
            for (const ie of Y) {
              const Ae = ie.x - E.rect[0], ce = E.rect[3] - ie.y;
              ee.push(`${Ae},${ce}`);
            }
            ee = ee.join(" ");
            const re = this.svgFactory.createElement(this.svgElementName);
            re.setAttribute("points", ee), re.setAttribute("stroke-width", E.borderStyle.width || 1), re.setAttribute("stroke", "transparent"), re.setAttribute("fill", "transparent"), this._createPopup(re, E), B.append(re);
          }
          return this.container.append(B), this.container;
        }
      }
      class K extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.classList.add("highlightAnnotation"), this.container);
        }
      }
      class z extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.classList.add("underlineAnnotation"), this.container);
        }
      }
      class _ extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.classList.add("squigglyAnnotation"), this.container);
        }
      }
      class g extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0, createQuadrilaterals: !0 });
        }
        render() {
          return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.classList.add("strikeoutAnnotation"), this.container);
        }
      }
      class w extends k {
        constructor(E) {
          var F, N, B;
          super(E, { isRenderable: !!(E.data.hasPopup || (F = E.data.titleObj) !== null && F !== void 0 && F.str || (N = E.data.contentsObj) !== null && N !== void 0 && N.str || (B = E.data.richText) !== null && B !== void 0 && B.str), ignoreBorder: !0 });
        }
        render() {
          return this.container.classList.add("stampAnnotation"), this.data.hasPopup || this._createPopup(null, this.data), this.container;
        }
      }
      class S extends k {
        constructor(E) {
          var F;
          super(E, { isRenderable: !0 });
          const { filename: N, content: B } = this.data.file;
          this.filename = (0, a.getFilenameFromUrl)(N, !0), this.content = B, (F = this.linkService.eventBus) === null || F === void 0 || F.dispatch("fileattachmentannotation", { source: this, filename: N, content: B });
        }
        render() {
          var E, F;
          this.container.classList.add("fileAttachmentAnnotation");
          let N;
          return this.data.hasAppearance ? N = document.createElement("div") : (N = document.createElement("img"), N.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(this.data.name) ? "paperclip" : "pushpin"}.svg`), N.classList.add("popupTriggerArea"), N.addEventListener("dblclick", this._download.bind(this)), !this.data.hasPopup && ((E = this.data.titleObj) !== null && E !== void 0 && E.str || (F = this.data.contentsObj) !== null && F !== void 0 && F.str || this.data.richText) && this._createPopup(N, this.data), this.container.append(N), this.container;
        }
        _download() {
          var E;
          (E = this.downloadManager) === null || E === void 0 || E.openOrDownloadData(this.container, this.content, this.filename);
        }
      }
      const de = class {
        static render(E) {
          var ie, Ae;
          const { annotations: F, div: N, viewport: B, accessibilityManager: Y } = E;
          (0, a.setLayerDimensions)(N, B);
          const ee = { data: null, layer: N, page: E.page, viewport: B, linkService: E.linkService, downloadManager: E.downloadManager, imageResourcesPath: E.imageResourcesPath || "", renderForms: E.renderForms !== !1, svgFactory: new a.DOMSVGFactory(), annotationStorage: E.annotationStorage || new b.AnnotationStorage(), enableScripting: E.enableScripting === !0, hasJSActions: E.hasJSActions, fieldObjects: E.fieldObjects };
          let re = 0;
          for (const ce of F) {
            if (ce.noHTML)
              continue;
            if (ce.annotationType !== t.AnnotationType.POPUP) {
              const { width: me, height: ye } = v(ce.rect);
              if (me <= 0 || ye <= 0)
                continue;
            }
            ee.data = ce;
            const ve = A.create(ee);
            if (!ve.isRenderable)
              continue;
            const he = ve.render();
            if (ce.hidden && (he.style.visibility = "hidden"), Array.isArray(he))
              for (const me of he)
                me.style.zIndex = re++, ne(ie = de, X, jt).call(ie, me, ce.id, N, Y);
            else
              he.style.zIndex = re++, ve instanceof n ? N.prepend(he) : ne(Ae = de, X, jt).call(Ae, he, ce.id, N, Y);
          }
          ne(this, Q, Bt).call(this, N, E.annotationCanvasMap);
        }
        static update(E) {
          const { annotationCanvasMap: F, div: N, viewport: B } = E;
          (0, a.setLayerDimensions)(N, { rotation: B.rotation }), ne(this, Q, Bt).call(this, N, F), N.hidden = !1;
        }
      };
      let M = de;
      X = new WeakSet(), jt = function(E, F, N, B) {
        const Y = E.firstChild || E;
        Y.id = `${a.AnnotationPrefix}${F}`, N.append(E), B == null || B.moveElementInDOM(N, E, Y, !1);
      }, Q = new WeakSet(), Bt = function(E, F) {
        if (F) {
          for (const [N, B] of F) {
            const Y = E.querySelector(`[data-annotation-id="${N}"]`);
            if (!Y)
              continue;
            const { firstChild: ee } = Y;
            ee ? ee.nodeName === "CANVAS" ? ee.replaceWith(B) : ee.before(B) : Y.append(B);
          }
          F.clear();
        }
      }, te(M, X), te(M, Q), c.AnnotationLayer = M;
    }, (R, c) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.ColorConverters = void 0;
      function e(t) {
        return Math.floor(255 * Math.max(0, Math.min(1, t))).toString(16).padStart(2, "0");
      }
      c.ColorConverters = class {
        static CMYK_G(a) {
          let [b, x, O, f] = a;
          return ["G", 1 - Math.min(1, 0.3 * b + 0.59 * O + 0.11 * x + f)];
        }
        static G_CMYK(a) {
          let [b] = a;
          return ["CMYK", 0, 0, 0, 1 - b];
        }
        static G_RGB(a) {
          let [b] = a;
          return ["RGB", b, b, b];
        }
        static G_HTML(a) {
          let [b] = a;
          const x = e(b);
          return `#${x}${x}${x}`;
        }
        static RGB_G(a) {
          let [b, x, O] = a;
          return ["G", 0.3 * b + 0.59 * x + 0.11 * O];
        }
        static RGB_HTML(a) {
          let [b, x, O] = a;
          return `#${e(b)}${e(x)}${e(O)}`;
        }
        static T_HTML() {
          return "#00000000";
        }
        static CMYK_RGB(a) {
          let [b, x, O, f] = a;
          return ["RGB", 1 - Math.min(1, b + f), 1 - Math.min(1, O + f), 1 - Math.min(1, x + f)];
        }
        static CMYK_HTML(a) {
          const b = this.CMYK_RGB(a).slice(1);
          return this.RGB_HTML(b);
        }
        static RGB_CMYK(a) {
          let [b, x, O] = a;
          const f = 1 - b, l = 1 - x, v = 1 - O;
          return ["CMYK", f, l, v, Math.min(f, l, v)];
        }
      };
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.XfaLayer = void 0;
      var t = e(154);
      c.XfaLayer = class {
        static setupStorage(b, x, O, f, l) {
          const v = f.getValue(x, { value: null });
          switch (O.name) {
            case "textarea":
              if (v.value !== null && (b.textContent = v.value), l === "print")
                break;
              b.addEventListener("input", (A) => {
                f.setValue(x, { value: A.target.value });
              });
              break;
            case "input":
              if (O.attributes.type === "radio" || O.attributes.type === "checkbox") {
                if (v.value === O.attributes.xfaOn ? b.setAttribute("checked", !0) : v.value === O.attributes.xfaOff && b.removeAttribute("checked"), l === "print")
                  break;
                b.addEventListener("change", (A) => {
                  f.setValue(x, { value: A.target.checked ? A.target.getAttribute("xfaOn") : A.target.getAttribute("xfaOff") });
                });
              } else {
                if (v.value !== null && b.setAttribute("value", v.value), l === "print")
                  break;
                b.addEventListener("input", (A) => {
                  f.setValue(x, { value: A.target.value });
                });
              }
              break;
            case "select":
              if (v.value !== null)
                for (const A of O.children)
                  A.attributes.value === v.value && (A.attributes.selected = !0);
              b.addEventListener("input", (A) => {
                const k = A.target.options, j = k.selectedIndex === -1 ? "" : k[k.selectedIndex].value;
                f.setValue(x, { value: j });
              });
          }
        }
        static setAttributes(b) {
          let { html: x, element: O, storage: f = null, intent: l, linkService: v } = b;
          const { attributes: A } = O, k = x instanceof HTMLAnchorElement;
          A.type === "radio" && (A.name = `${A.name}-${l}`);
          for (const [j, d] of Object.entries(A))
            if (d != null)
              switch (j) {
                case "class":
                  d.length && x.setAttribute(j, d.join(" "));
                  break;
                case "dataId":
                  break;
                case "id":
                  x.setAttribute("data-element-id", d);
                  break;
                case "style":
                  Object.assign(x.style, d);
                  break;
                case "textContent":
                  x.textContent = d;
                  break;
                default:
                  (!k || j !== "href" && j !== "newWindow") && x.setAttribute(j, d);
              }
          k && v.addLinkAttributes(x, A.href, A.newWindow), f && A.dataId && this.setupStorage(x, A.dataId, O, f);
        }
        static render(b) {
          const x = b.annotationStorage, O = b.linkService, f = b.xfaHtml, l = b.intent || "display", v = document.createElement(f.name);
          f.attributes && this.setAttributes({ html: v, element: f, intent: l, linkService: O });
          const A = [[f, -1, v]], k = b.div;
          if (k.append(v), b.viewport) {
            const y = `matrix(${b.viewport.transform.join(",")})`;
            k.style.transform = y;
          }
          l !== "richText" && k.setAttribute("class", "xfaLayer xfaFont");
          const j = [];
          for (; A.length > 0; ) {
            var d;
            const [y, h, P] = A.at(-1);
            if (h + 1 === y.children.length) {
              A.pop();
              continue;
            }
            const p = y.children[++A.at(-1)[1]];
            if (p === null)
              continue;
            const { name: i } = p;
            if (i === "#text") {
              const n = document.createTextNode(p.value);
              j.push(n), P.append(n);
              continue;
            }
            let m;
            if (m = p != null && (d = p.attributes) !== null && d !== void 0 && d.xmlns ? document.createElementNS(p.attributes.xmlns, i) : document.createElement(i), P.append(m), p.attributes && this.setAttributes({ html: m, element: p, storage: x, intent: l, linkService: O }), p.children && p.children.length > 0)
              A.push([p, -1, m]);
            else if (p.value) {
              const n = document.createTextNode(p.value);
              t.XfaText.shouldBuildText(i) && j.push(n), m.append(n);
            }
          }
          for (const y of k.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
            y.setAttribute("readOnly", !0);
          return { textDivs: j };
        }
        static update(b) {
          const x = `matrix(${b.viewport.transform.join(",")})`;
          b.div.style.transform = x, b.div.hidden = !1;
        }
      };
    }, (R, c, e) => {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.SVGGraphics = void 0;
      var t = e(142), a = e(1), b = e(3);
      let x = class {
        constructor() {
          (0, a.unreachable)("Not implemented: SVGGraphics");
        }
      };
      c.SVGGraphics = x;
      {
        let y = function(n) {
          let s = [];
          const r = [];
          for (const u of n)
            u.fn !== "save" ? u.fn === "restore" ? s = r.pop() : s.push(u) : (s.push({ fnId: 92, fn: "group", items: [] }), r.push(s), s = s.at(-1).items);
          return s;
        }, h = function(n) {
          if (Number.isInteger(n))
            return n.toString();
          const s = n.toFixed(10);
          let r = s.length - 1;
          if (s[r] !== "0")
            return s;
          do
            r--;
          while (s[r] === "0");
          return s.substring(0, s[r] === "." ? r : r + 1);
        }, P = function(n) {
          if (n[4] === 0 && n[5] === 0) {
            if (n[1] === 0 && n[2] === 0)
              return n[0] === 1 && n[3] === 1 ? "" : `scale(${h(n[0])} ${h(n[3])})`;
            if (n[0] === n[3] && n[1] === -n[2])
              return `rotate(${h(180 * Math.acos(n[0]) / Math.PI)})`;
          } else if (n[0] === 1 && n[1] === 0 && n[2] === 0 && n[3] === 1)
            return `translate(${h(n[4])} ${h(n[5])})`;
          return `matrix(${h(n[0])} ${h(n[1])} ${h(n[2])} ${h(n[3])} ${h(n[4])} ${h(n[5])})`;
        };
        const O = { fontStyle: "normal", fontWeight: "normal", fillColor: "#000000" }, f = "http://www.w3.org/XML/1998/namespace", l = "http://www.w3.org/1999/xlink", v = ["butt", "round", "square"], A = ["miter", "round", "bevel"], k = function(n) {
          let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          if (URL.createObjectURL && typeof Blob < "u" && !r)
            return URL.createObjectURL(new Blob([n], { type: s }));
          const u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let C = `data:${s};base64,`;
          for (let I = 0, o = n.length; I < o; I += 3) {
            const D = 255 & n[I], $ = 255 & n[I + 1], W = 255 & n[I + 2];
            C += u[D >> 2] + u[(3 & D) << 4 | $ >> 4] + u[I + 1 < o ? (15 & $) << 2 | W >> 6 : 64] + u[I + 2 < o ? 63 & W : 64];
          }
          return C;
        }, j = function() {
          const n = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = new Int32Array(256);
          for (let I = 0; I < 256; I++) {
            let o = I;
            for (let D = 0; D < 8; D++)
              o = 1 & o ? 3988292384 ^ o >> 1 & 2147483647 : o >> 1 & 2147483647;
            s[I] = o;
          }
          function r(I, o, D, $) {
            let W = $;
            const K = o.length;
            D[W] = K >> 24 & 255, D[W + 1] = K >> 16 & 255, D[W + 2] = K >> 8 & 255, D[W + 3] = 255 & K, W += 4, D[W] = 255 & I.charCodeAt(0), D[W + 1] = 255 & I.charCodeAt(1), D[W + 2] = 255 & I.charCodeAt(2), D[W + 3] = 255 & I.charCodeAt(3), W += 4, D.set(o, W), W += o.length;
            const z = function(g, w, S) {
              let M = -1;
              for (let q = w; q < S; q++) {
                const L = 255 & (M ^ g[q]);
                M = M >>> 8 ^ s[L];
              }
              return -1 ^ M;
            }(D, $ + 4, W);
            D[W] = z >> 24 & 255, D[W + 1] = z >> 16 & 255, D[W + 2] = z >> 8 & 255, D[W + 3] = 255 & z;
          }
          function u(I) {
            let o = I.length;
            const D = 65535, $ = Math.ceil(o / D), W = new Uint8Array(2 + o + 5 * $ + 4);
            let K = 0;
            W[K++] = 120, W[K++] = 156;
            let z = 0;
            for (; o > D; )
              W[K++] = 0, W[K++] = 255, W[K++] = 255, W[K++] = 0, W[K++] = 0, W.set(I.subarray(z, z + D), K), K += D, z += D, o -= D;
            W[K++] = 1, W[K++] = 255 & o, W[K++] = o >> 8 & 255, W[K++] = 255 & ~o, W[K++] = (65535 & ~o) >> 8 & 255, W.set(I.subarray(z), K), K += I.length - z;
            const _ = function(w, S, M) {
              let q = 1, L = 0;
              for (let H = S; H < M; ++H)
                q = (q + (255 & w[H])) % 65521, L = (L + q) % 65521;
              return L << 16 | q;
            }(I, 0, I.length);
            return W[K++] = _ >> 24 & 255, W[K++] = _ >> 16 & 255, W[K++] = _ >> 8 & 255, W[K++] = 255 & _, W;
          }
          function C(I, o, D, $) {
            const W = I.width, K = I.height;
            let z, _, g;
            const w = I.data;
            switch (o) {
              case a.ImageKind.GRAYSCALE_1BPP:
                _ = 0, z = 1, g = W + 7 >> 3;
                break;
              case a.ImageKind.RGB_24BPP:
                _ = 2, z = 8, g = 3 * W;
                break;
              case a.ImageKind.RGBA_32BPP:
                _ = 6, z = 8, g = 4 * W;
                break;
              default:
                throw new Error("invalid format");
            }
            const S = new Uint8Array((1 + g) * K);
            let M = 0, q = 0;
            for (let J = 0; J < K; ++J)
              S[M++] = 0, S.set(w.subarray(q, q + g), M), q += g, M += g;
            if (o === a.ImageKind.GRAYSCALE_1BPP && $) {
              M = 0;
              for (let J = 0; J < K; J++) {
                M++;
                for (let Q = 0; Q < g; Q++)
                  S[M++] ^= 255;
              }
            }
            const L = new Uint8Array([W >> 24 & 255, W >> 16 & 255, W >> 8 & 255, 255 & W, K >> 24 & 255, K >> 16 & 255, K >> 8 & 255, 255 & K, z, _, 0, 0, 0]), H = function(Q) {
              if (!b.isNodeJS)
                return u(Q);
              try {
                let U;
                U = parseInt(process.versions.node) >= 8 ? Q : Buffer.from(Q);
                const de = require$$6.deflateSync(U, { level: 9 });
                return de instanceof Uint8Array ? de : new Uint8Array(de);
              } catch (U) {
                (0, a.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + U);
              }
              return u(Q);
            }(S), V = n.length + 36 + L.length + H.length, G = new Uint8Array(V);
            let X = 0;
            return G.set(n, X), X += n.length, r("IHDR", L, G, X), X += 12 + L.length, r("IDATA", H, G, X), X += 12 + H.length, r("IEND", new Uint8Array(0), G, X), k(G, "image/png", D);
          }
          return function(o, D, $) {
            return C(o, o.kind === void 0 ? a.ImageKind.GRAYSCALE_1BPP : o.kind, D, $);
          };
        }();
        class d {
          constructor() {
            this.fontSizeScale = 1, this.fontWeight = O.fontWeight, this.fontSize = 0, this.textMatrix = a.IDENTITY_MATRIX, this.fontMatrix = a.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = a.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = O.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
          }
          clone() {
            return Object.create(this);
          }
          setCurrentPoint(s, r) {
            this.x = s, this.y = r;
          }
        }
        let p = 0, i = 0, m = 0;
        c.SVGGraphics = x = class {
          constructor(n, s) {
            let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
            (0, t.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new t.DOMSVGFactory(), this.current = new d(), this.transformMatrix = a.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = n, this.objs = s, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!r, this._operatorIdMapping = [];
            for (const u in a.OPS)
              this._operatorIdMapping[a.OPS[u]] = u;
          }
          getObject(n) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            return typeof n == "string" ? n.startsWith("g_") ? this.commonObjs.get(n) : this.objs.get(n) : s;
          }
          save() {
            this.transformStack.push(this.transformMatrix);
            const n = this.current;
            this.extraStack.push(n), this.current = n.clone();
          }
          restore() {
            this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
          }
          group(n) {
            this.save(), this.executeOpTree(n), this.restore();
          }
          loadDependencies(n) {
            const s = n.fnArray, r = n.argsArray;
            for (let u = 0, C = s.length; u < C; u++)
              if (s[u] === a.OPS.dependency)
                for (const I of r[u]) {
                  const o = I.startsWith("g_") ? this.commonObjs : this.objs, D = new Promise(($) => {
                    o.get(I, $);
                  });
                  this.current.dependencies.push(D);
                }
            return Promise.all(this.current.dependencies);
          }
          transform(n, s, r, u, C, I) {
            const o = [n, s, r, u, C, I];
            this.transformMatrix = a.Util.transform(this.transformMatrix, o), this.tgrp = null;
          }
          getSVG(n, s) {
            this.viewport = s;
            const r = this._initialize(s);
            return this.loadDependencies(n).then(() => (this.transformMatrix = a.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(n)), r));
          }
          convertOpList(n) {
            const s = this._operatorIdMapping, r = n.argsArray, u = n.fnArray, C = [];
            for (let I = 0, o = u.length; I < o; I++) {
              const D = u[I];
              C.push({ fnId: D, fn: s[D], args: r[I] });
            }
            return y(C);
          }
          executeOpTree(n) {
            for (const s of n) {
              const r = s.fn, u = s.fnId, C = s.args;
              switch (0 | u) {
                case a.OPS.beginText:
                  this.beginText();
                  break;
                case a.OPS.dependency:
                  break;
                case a.OPS.setLeading:
                  this.setLeading(C);
                  break;
                case a.OPS.setLeadingMoveText:
                  this.setLeadingMoveText(C[0], C[1]);
                  break;
                case a.OPS.setFont:
                  this.setFont(C);
                  break;
                case a.OPS.showText:
                case a.OPS.showSpacedText:
                  this.showText(C[0]);
                  break;
                case a.OPS.endText:
                  this.endText();
                  break;
                case a.OPS.moveText:
                  this.moveText(C[0], C[1]);
                  break;
                case a.OPS.setCharSpacing:
                  this.setCharSpacing(C[0]);
                  break;
                case a.OPS.setWordSpacing:
                  this.setWordSpacing(C[0]);
                  break;
                case a.OPS.setHScale:
                  this.setHScale(C[0]);
                  break;
                case a.OPS.setTextMatrix:
                  this.setTextMatrix(C[0], C[1], C[2], C[3], C[4], C[5]);
                  break;
                case a.OPS.setTextRise:
                  this.setTextRise(C[0]);
                  break;
                case a.OPS.setTextRenderingMode:
                  this.setTextRenderingMode(C[0]);
                  break;
                case a.OPS.setLineWidth:
                  this.setLineWidth(C[0]);
                  break;
                case a.OPS.setLineJoin:
                  this.setLineJoin(C[0]);
                  break;
                case a.OPS.setLineCap:
                  this.setLineCap(C[0]);
                  break;
                case a.OPS.setMiterLimit:
                  this.setMiterLimit(C[0]);
                  break;
                case a.OPS.setFillRGBColor:
                  this.setFillRGBColor(C[0], C[1], C[2]);
                  break;
                case a.OPS.setStrokeRGBColor:
                  this.setStrokeRGBColor(C[0], C[1], C[2]);
                  break;
                case a.OPS.setStrokeColorN:
                  this.setStrokeColorN(C);
                  break;
                case a.OPS.setFillColorN:
                  this.setFillColorN(C);
                  break;
                case a.OPS.shadingFill:
                  this.shadingFill(C[0]);
                  break;
                case a.OPS.setDash:
                  this.setDash(C[0], C[1]);
                  break;
                case a.OPS.setRenderingIntent:
                  this.setRenderingIntent(C[0]);
                  break;
                case a.OPS.setFlatness:
                  this.setFlatness(C[0]);
                  break;
                case a.OPS.setGState:
                  this.setGState(C[0]);
                  break;
                case a.OPS.fill:
                  this.fill();
                  break;
                case a.OPS.eoFill:
                  this.eoFill();
                  break;
                case a.OPS.stroke:
                  this.stroke();
                  break;
                case a.OPS.fillStroke:
                  this.fillStroke();
                  break;
                case a.OPS.eoFillStroke:
                  this.eoFillStroke();
                  break;
                case a.OPS.clip:
                  this.clip("nonzero");
                  break;
                case a.OPS.eoClip:
                  this.clip("evenodd");
                  break;
                case a.OPS.paintSolidColorImageMask:
                  this.paintSolidColorImageMask();
                  break;
                case a.OPS.paintImageXObject:
                  this.paintImageXObject(C[0]);
                  break;
                case a.OPS.paintInlineImageXObject:
                  this.paintInlineImageXObject(C[0]);
                  break;
                case a.OPS.paintImageMaskXObject:
                  this.paintImageMaskXObject(C[0]);
                  break;
                case a.OPS.paintFormXObjectBegin:
                  this.paintFormXObjectBegin(C[0], C[1]);
                  break;
                case a.OPS.paintFormXObjectEnd:
                  this.paintFormXObjectEnd();
                  break;
                case a.OPS.closePath:
                  this.closePath();
                  break;
                case a.OPS.closeStroke:
                  this.closeStroke();
                  break;
                case a.OPS.closeFillStroke:
                  this.closeFillStroke();
                  break;
                case a.OPS.closeEOFillStroke:
                  this.closeEOFillStroke();
                  break;
                case a.OPS.nextLine:
                  this.nextLine();
                  break;
                case a.OPS.transform:
                  this.transform(C[0], C[1], C[2], C[3], C[4], C[5]);
                  break;
                case a.OPS.constructPath:
                  this.constructPath(C[0], C[1]);
                  break;
                case a.OPS.endPath:
                  this.endPath();
                  break;
                case 92:
                  this.group(s.items);
                  break;
                default:
                  (0, a.warn)(`Unimplemented operator ${r}`);
              }
            }
          }
          setWordSpacing(n) {
            this.current.wordSpacing = n;
          }
          setCharSpacing(n) {
            this.current.charSpacing = n;
          }
          nextLine() {
            this.moveText(0, this.current.leading);
          }
          setTextMatrix(n, s, r, u, C, I) {
            const o = this.current;
            o.textMatrix = o.lineMatrix = [n, s, r, u, C, I], o.textMatrixScale = Math.hypot(n, s), o.x = o.lineX = 0, o.y = o.lineY = 0, o.xcoords = [], o.ycoords = [], o.tspan = this.svgFactory.createElement("svg:tspan"), o.tspan.setAttributeNS(null, "font-family", o.fontFamily), o.tspan.setAttributeNS(null, "font-size", `${h(o.fontSize)}px`), o.tspan.setAttributeNS(null, "y", h(-o.y)), o.txtElement = this.svgFactory.createElement("svg:text"), o.txtElement.append(o.tspan);
          }
          beginText() {
            const n = this.current;
            n.x = n.lineX = 0, n.y = n.lineY = 0, n.textMatrix = a.IDENTITY_MATRIX, n.lineMatrix = a.IDENTITY_MATRIX, n.textMatrixScale = 1, n.tspan = this.svgFactory.createElement("svg:tspan"), n.txtElement = this.svgFactory.createElement("svg:text"), n.txtgrp = this.svgFactory.createElement("svg:g"), n.xcoords = [], n.ycoords = [];
          }
          moveText(n, s) {
            const r = this.current;
            r.x = r.lineX += n, r.y = r.lineY += s, r.xcoords = [], r.ycoords = [], r.tspan = this.svgFactory.createElement("svg:tspan"), r.tspan.setAttributeNS(null, "font-family", r.fontFamily), r.tspan.setAttributeNS(null, "font-size", `${h(r.fontSize)}px`), r.tspan.setAttributeNS(null, "y", h(-r.y));
          }
          showText(n) {
            const s = this.current, r = s.font, u = s.fontSize;
            if (u === 0)
              return;
            const C = s.fontSizeScale, I = s.charSpacing, o = s.wordSpacing, D = s.fontDirection, $ = s.textHScale * D, W = r.vertical, K = W ? 1 : -1, z = r.defaultVMetrics, _ = u * s.fontMatrix[0];
            let g = 0;
            for (const M of n) {
              if (M === null) {
                g += D * o;
                continue;
              }
              if (typeof M == "number") {
                g += K * M * u / 1e3;
                continue;
              }
              const q = (M.isSpace ? o : 0) + I, L = M.fontChar;
              let H, V, G, X = M.width;
              if (W) {
                let J;
                const Q = M.vmetric || z;
                J = M.vmetric ? Q[1] : 0.5 * X, J = -J * _;
                const U = Q[2] * _;
                X = Q ? -Q[0] : X, H = J / C, V = (g + U) / C;
              } else
                H = g / C, V = 0;
              (M.isInFont || r.missingFile) && (s.xcoords.push(s.x + H), W && s.ycoords.push(-s.y + V), s.tspan.textContent += L), G = W ? X * _ - q * D : X * _ + q * D, g += G;
            }
            s.tspan.setAttributeNS(null, "x", s.xcoords.map(h).join(" ")), W ? s.tspan.setAttributeNS(null, "y", s.ycoords.map(h).join(" ")) : s.tspan.setAttributeNS(null, "y", h(-s.y)), W ? s.y -= g : s.x += g * $, s.tspan.setAttributeNS(null, "font-family", s.fontFamily), s.tspan.setAttributeNS(null, "font-size", `${h(s.fontSize)}px`), s.fontStyle !== O.fontStyle && s.tspan.setAttributeNS(null, "font-style", s.fontStyle), s.fontWeight !== O.fontWeight && s.tspan.setAttributeNS(null, "font-weight", s.fontWeight);
            const w = s.textRenderingMode & a.TextRenderingMode.FILL_STROKE_MASK;
            if (w === a.TextRenderingMode.FILL || w === a.TextRenderingMode.FILL_STROKE ? (s.fillColor !== O.fillColor && s.tspan.setAttributeNS(null, "fill", s.fillColor), s.fillAlpha < 1 && s.tspan.setAttributeNS(null, "fill-opacity", s.fillAlpha)) : s.textRenderingMode === a.TextRenderingMode.ADD_TO_PATH ? s.tspan.setAttributeNS(null, "fill", "transparent") : s.tspan.setAttributeNS(null, "fill", "none"), w === a.TextRenderingMode.STROKE || w === a.TextRenderingMode.FILL_STROKE) {
              const M = 1 / (s.textMatrixScale || 1);
              this._setStrokeAttributes(s.tspan, M);
            }
            let S = s.textMatrix;
            s.textRise !== 0 && (S = S.slice(), S[5] += s.textRise), s.txtElement.setAttributeNS(null, "transform", `${P(S)} scale(${h($)}, -1)`), s.txtElement.setAttributeNS(f, "xml:space", "preserve"), s.txtElement.append(s.tspan), s.txtgrp.append(s.txtElement), this._ensureTransformGroup().append(s.txtElement);
          }
          setLeadingMoveText(n, s) {
            this.setLeading(-s), this.moveText(n, s);
          }
          addFontStyle(n) {
            if (!n.data)
              throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
            this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
            const s = k(n.data, n.mimetype, this.forceDataSchema);
            this.cssStyle.textContent += `@font-face { font-family: "${n.loadedName}"; src: url(${s}); }
`;
          }
          setFont(n) {
            const s = this.current, r = this.commonObjs.get(n[0]);
            let u = n[1];
            s.font = r, this.embedFonts && !r.missingFile && !this.embeddedFonts[r.loadedName] && (this.addFontStyle(r), this.embeddedFonts[r.loadedName] = r), s.fontMatrix = r.fontMatrix || a.FONT_IDENTITY_MATRIX;
            let C = "normal";
            r.black ? C = "900" : r.bold && (C = "bold");
            const I = r.italic ? "italic" : "normal";
            u < 0 ? (u = -u, s.fontDirection = -1) : s.fontDirection = 1, s.fontSize = u, s.fontFamily = r.loadedName, s.fontWeight = C, s.fontStyle = I, s.tspan = this.svgFactory.createElement("svg:tspan"), s.tspan.setAttributeNS(null, "y", h(-s.y)), s.xcoords = [], s.ycoords = [];
          }
          endText() {
            var n;
            const s = this.current;
            s.textRenderingMode & a.TextRenderingMode.ADD_TO_PATH_FLAG && (n = s.txtElement) !== null && n !== void 0 && n.hasChildNodes() && (s.element = s.txtElement, this.clip("nonzero"), this.endPath());
          }
          setLineWidth(n) {
            n > 0 && (this.current.lineWidth = n);
          }
          setLineCap(n) {
            this.current.lineCap = v[n];
          }
          setLineJoin(n) {
            this.current.lineJoin = A[n];
          }
          setMiterLimit(n) {
            this.current.miterLimit = n;
          }
          setStrokeAlpha(n) {
            this.current.strokeAlpha = n;
          }
          setStrokeRGBColor(n, s, r) {
            this.current.strokeColor = a.Util.makeHexColor(n, s, r);
          }
          setFillAlpha(n) {
            this.current.fillAlpha = n;
          }
          setFillRGBColor(n, s, r) {
            this.current.fillColor = a.Util.makeHexColor(n, s, r), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
          }
          setStrokeColorN(n) {
            this.current.strokeColor = this._makeColorN_Pattern(n);
          }
          setFillColorN(n) {
            this.current.fillColor = this._makeColorN_Pattern(n);
          }
          shadingFill(n) {
            const s = this.viewport.width, r = this.viewport.height, u = a.Util.inverseTransform(this.transformMatrix), C = a.Util.applyTransform([0, 0], u), I = a.Util.applyTransform([0, r], u), o = a.Util.applyTransform([s, 0], u), D = a.Util.applyTransform([s, r], u), $ = Math.min(C[0], I[0], o[0], D[0]), W = Math.min(C[1], I[1], o[1], D[1]), K = Math.max(C[0], I[0], o[0], D[0]), z = Math.max(C[1], I[1], o[1], D[1]), _ = this.svgFactory.createElement("svg:rect");
            _.setAttributeNS(null, "x", $), _.setAttributeNS(null, "y", W), _.setAttributeNS(null, "width", K - $), _.setAttributeNS(null, "height", z - W), _.setAttributeNS(null, "fill", this._makeShadingPattern(n)), this.current.fillAlpha < 1 && _.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(_);
          }
          _makeColorN_Pattern(n) {
            return n[0] === "TilingPattern" ? this._makeTilingPattern(n) : this._makeShadingPattern(n);
          }
          _makeTilingPattern(n) {
            const s = n[1], r = n[2], u = n[3] || a.IDENTITY_MATRIX, [C, I, o, D] = n[4], $ = n[5], W = n[6], K = n[7], z = "shading" + m++, [_, g, w, S] = a.Util.normalizeRect([...a.Util.applyTransform([C, I], u), ...a.Util.applyTransform([o, D], u)]), [M, q] = a.Util.singularValueDecompose2dScale(u), L = $ * M, H = W * q, V = this.svgFactory.createElement("svg:pattern");
            V.setAttributeNS(null, "id", z), V.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), V.setAttributeNS(null, "width", L), V.setAttributeNS(null, "height", H), V.setAttributeNS(null, "x", `${_}`), V.setAttributeNS(null, "y", `${g}`);
            const G = this.svg, X = this.transformMatrix, J = this.current.fillColor, Q = this.current.strokeColor, U = this.svgFactory.create(w - _, S - g);
            if (this.svg = U, this.transformMatrix = u, K === 2) {
              const de = a.Util.makeHexColor(...s);
              this.current.fillColor = de, this.current.strokeColor = de;
            }
            return this.executeOpTree(this.convertOpList(r)), this.svg = G, this.transformMatrix = X, this.current.fillColor = J, this.current.strokeColor = Q, V.append(U.childNodes[0]), this.defs.append(V), `url(#${z})`;
          }
          _makeShadingPattern(n) {
            switch (typeof n == "string" && (n = this.objs.get(n)), n[0]) {
              case "RadialAxial":
                const s = "shading" + m++, r = n[3];
                let u;
                switch (n[1]) {
                  case "axial":
                    const C = n[4], I = n[5];
                    u = this.svgFactory.createElement("svg:linearGradient"), u.setAttributeNS(null, "id", s), u.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), u.setAttributeNS(null, "x1", C[0]), u.setAttributeNS(null, "y1", C[1]), u.setAttributeNS(null, "x2", I[0]), u.setAttributeNS(null, "y2", I[1]);
                    break;
                  case "radial":
                    const o = n[4], D = n[5], $ = n[6], W = n[7];
                    u = this.svgFactory.createElement("svg:radialGradient"), u.setAttributeNS(null, "id", s), u.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), u.setAttributeNS(null, "cx", D[0]), u.setAttributeNS(null, "cy", D[1]), u.setAttributeNS(null, "r", W), u.setAttributeNS(null, "fx", o[0]), u.setAttributeNS(null, "fy", o[1]), u.setAttributeNS(null, "fr", $);
                    break;
                  default:
                    throw new Error(`Unknown RadialAxial type: ${n[1]}`);
                }
                for (const C of r) {
                  const I = this.svgFactory.createElement("svg:stop");
                  I.setAttributeNS(null, "offset", C[0]), I.setAttributeNS(null, "stop-color", C[1]), u.append(I);
                }
                return this.defs.append(u), `url(#${s})`;
              case "Mesh":
                return (0, a.warn)("Unimplemented pattern Mesh"), null;
              case "Dummy":
                return "hotpink";
              default:
                throw new Error(`Unknown IR type: ${n[0]}`);
            }
          }
          setDash(n, s) {
            this.current.dashArray = n, this.current.dashPhase = s;
          }
          constructPath(n, s) {
            const r = this.current;
            let u = r.x, C = r.y, I = [], o = 0;
            for (const D of n)
              switch (0 | D) {
                case a.OPS.rectangle:
                  u = s[o++], C = s[o++];
                  const $ = u + s[o++], W = C + s[o++];
                  I.push("M", h(u), h(C), "L", h($), h(C), "L", h($), h(W), "L", h(u), h(W), "Z");
                  break;
                case a.OPS.moveTo:
                  u = s[o++], C = s[o++], I.push("M", h(u), h(C));
                  break;
                case a.OPS.lineTo:
                  u = s[o++], C = s[o++], I.push("L", h(u), h(C));
                  break;
                case a.OPS.curveTo:
                  u = s[o + 4], C = s[o + 5], I.push("C", h(s[o]), h(s[o + 1]), h(s[o + 2]), h(s[o + 3]), h(u), h(C)), o += 6;
                  break;
                case a.OPS.curveTo2:
                  I.push("C", h(u), h(C), h(s[o]), h(s[o + 1]), h(s[o + 2]), h(s[o + 3])), u = s[o + 2], C = s[o + 3], o += 4;
                  break;
                case a.OPS.curveTo3:
                  u = s[o + 2], C = s[o + 3], I.push("C", h(s[o]), h(s[o + 1]), h(u), h(C), h(u), h(C)), o += 4;
                  break;
                case a.OPS.closePath:
                  I.push("Z");
              }
            I = I.join(" "), r.path && n.length > 0 && n[0] !== a.OPS.rectangle && n[0] !== a.OPS.moveTo ? I = r.path.getAttributeNS(null, "d") + I : (r.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(r.path)), r.path.setAttributeNS(null, "d", I), r.path.setAttributeNS(null, "fill", "none"), r.element = r.path, r.setCurrentPoint(u, C);
          }
          endPath() {
            const n = this.current;
            if (n.path = null, !this.pendingClip)
              return;
            if (!n.element) {
              this.pendingClip = null;
              return;
            }
            const s = "clippath" + p++, r = this.svgFactory.createElement("svg:clipPath");
            r.setAttributeNS(null, "id", s), r.setAttributeNS(null, "transform", P(this.transformMatrix));
            const u = n.element.cloneNode(!0);
            if (this.pendingClip === "evenodd" ? u.setAttributeNS(null, "clip-rule", "evenodd") : u.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, r.append(u), this.defs.append(r), n.activeClipUrl) {
              n.clipGroup = null;
              for (const C of this.extraStack)
                C.clipGroup = null;
              r.setAttributeNS(null, "clip-path", n.activeClipUrl);
            }
            n.activeClipUrl = `url(#${s})`, this.tgrp = null;
          }
          clip(n) {
            this.pendingClip = n;
          }
          closePath() {
            const n = this.current;
            if (n.path) {
              const s = `${n.path.getAttributeNS(null, "d")}Z`;
              n.path.setAttributeNS(null, "d", s);
            }
          }
          setLeading(n) {
            this.current.leading = -n;
          }
          setTextRise(n) {
            this.current.textRise = n;
          }
          setTextRenderingMode(n) {
            this.current.textRenderingMode = n;
          }
          setHScale(n) {
            this.current.textHScale = n / 100;
          }
          setRenderingIntent(n) {
          }
          setFlatness(n) {
          }
          setGState(n) {
            for (const [s, r] of n)
              switch (s) {
                case "LW":
                  this.setLineWidth(r);
                  break;
                case "LC":
                  this.setLineCap(r);
                  break;
                case "LJ":
                  this.setLineJoin(r);
                  break;
                case "ML":
                  this.setMiterLimit(r);
                  break;
                case "D":
                  this.setDash(r[0], r[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(r);
                  break;
                case "FL":
                  this.setFlatness(r);
                  break;
                case "Font":
                  this.setFont(r);
                  break;
                case "CA":
                  this.setStrokeAlpha(r);
                  break;
                case "ca":
                  this.setFillAlpha(r);
                  break;
                default:
                  (0, a.warn)(`Unimplemented graphic state operator ${s}`);
              }
          }
          fill() {
            const n = this.current;
            n.element && (n.element.setAttributeNS(null, "fill", n.fillColor), n.element.setAttributeNS(null, "fill-opacity", n.fillAlpha), this.endPath());
          }
          stroke() {
            const n = this.current;
            n.element && (this._setStrokeAttributes(n.element), n.element.setAttributeNS(null, "fill", "none"), this.endPath());
          }
          _setStrokeAttributes(n) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            const r = this.current;
            let u = r.dashArray;
            s !== 1 && u.length > 0 && (u = u.map(function(C) {
              return s * C;
            })), n.setAttributeNS(null, "stroke", r.strokeColor), n.setAttributeNS(null, "stroke-opacity", r.strokeAlpha), n.setAttributeNS(null, "stroke-miterlimit", h(r.miterLimit)), n.setAttributeNS(null, "stroke-linecap", r.lineCap), n.setAttributeNS(null, "stroke-linejoin", r.lineJoin), n.setAttributeNS(null, "stroke-width", h(s * r.lineWidth) + "px"), n.setAttributeNS(null, "stroke-dasharray", u.map(h).join(" ")), n.setAttributeNS(null, "stroke-dashoffset", h(s * r.dashPhase) + "px");
          }
          eoFill() {
            var n;
            (n = this.current.element) === null || n === void 0 || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
          }
          fillStroke() {
            this.stroke(), this.fill();
          }
          eoFillStroke() {
            var n;
            (n = this.current.element) === null || n === void 0 || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
          }
          closeStroke() {
            this.closePath(), this.stroke();
          }
          closeFillStroke() {
            this.closePath(), this.fillStroke();
          }
          closeEOFillStroke() {
            this.closePath(), this.eoFillStroke();
          }
          paintSolidColorImageMask() {
            const n = this.svgFactory.createElement("svg:rect");
            n.setAttributeNS(null, "x", "0"), n.setAttributeNS(null, "y", "0"), n.setAttributeNS(null, "width", "1px"), n.setAttributeNS(null, "height", "1px"), n.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(n);
          }
          paintImageXObject(n) {
            const s = this.getObject(n);
            s ? this.paintInlineImageXObject(s) : (0, a.warn)(`Dependent image with object ID ${n} is not ready yet`);
          }
          paintInlineImageXObject(n, s) {
            const r = n.width, u = n.height, C = j(n, this.forceDataSchema, !!s), I = this.svgFactory.createElement("svg:rect");
            I.setAttributeNS(null, "x", "0"), I.setAttributeNS(null, "y", "0"), I.setAttributeNS(null, "width", h(r)), I.setAttributeNS(null, "height", h(u)), this.current.element = I, this.clip("nonzero");
            const o = this.svgFactory.createElement("svg:image");
            o.setAttributeNS(l, "xlink:href", C), o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", h(-u)), o.setAttributeNS(null, "width", h(r) + "px"), o.setAttributeNS(null, "height", h(u) + "px"), o.setAttributeNS(null, "transform", `scale(${h(1 / r)} ${h(-1 / u)})`), s ? s.append(o) : this._ensureTransformGroup().append(o);
          }
          paintImageMaskXObject(n) {
            const s = this.getObject(n.data, n);
            if (s.bitmap) {
              (0, a.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
              return;
            }
            const r = this.current, u = s.width, C = s.height, I = r.fillColor;
            r.maskId = "mask" + i++;
            const o = this.svgFactory.createElement("svg:mask");
            o.setAttributeNS(null, "id", r.maskId);
            const D = this.svgFactory.createElement("svg:rect");
            D.setAttributeNS(null, "x", "0"), D.setAttributeNS(null, "y", "0"), D.setAttributeNS(null, "width", h(u)), D.setAttributeNS(null, "height", h(C)), D.setAttributeNS(null, "fill", I), D.setAttributeNS(null, "mask", `url(#${r.maskId})`), this.defs.append(o), this._ensureTransformGroup().append(D), this.paintInlineImageXObject(s, o);
          }
          paintFormXObjectBegin(n, s) {
            if (Array.isArray(n) && n.length === 6 && this.transform(n[0], n[1], n[2], n[3], n[4], n[5]), s) {
              const r = s[2] - s[0], u = s[3] - s[1], C = this.svgFactory.createElement("svg:rect");
              C.setAttributeNS(null, "x", s[0]), C.setAttributeNS(null, "y", s[1]), C.setAttributeNS(null, "width", h(r)), C.setAttributeNS(null, "height", h(u)), this.current.element = C, this.clip("nonzero"), this.endPath();
            }
          }
          paintFormXObjectEnd() {
          }
          _initialize(n) {
            const s = this.svgFactory.create(n.width, n.height), r = this.svgFactory.createElement("svg:defs");
            s.append(r), this.defs = r;
            const u = this.svgFactory.createElement("svg:g");
            return u.setAttributeNS(null, "transform", P(n.transform)), s.append(u), this.svg = u, s;
          }
          _ensureClipGroup() {
            if (!this.current.clipGroup) {
              const n = this.svgFactory.createElement("svg:g");
              n.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(n), this.current.clipGroup = n;
            }
            return this.current.clipGroup;
          }
          _ensureTransformGroup() {
            return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", P(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
          }
        };
      }
    }], __webpack_module_cache__ = {};
    function __w_pdfjs_require__(R) {
      var c = __webpack_module_cache__[R];
      if (c !== void 0)
        return c.exports;
      var e = __webpack_module_cache__[R] = { exports: {} };
      return __webpack_modules__[R].call(e.exports, e, e.exports, __w_pdfjs_require__), e.exports;
    }
    var __webpack_exports__ = {};
    return (() => {
      var R = __webpack_exports__;
      Object.defineProperty(R, "__esModule", { value: !0 }), Object.defineProperty(R, "AbortException", { enumerable: !0, get: function() {
        return c.AbortException;
      } }), Object.defineProperty(R, "AnnotationEditorLayer", { enumerable: !0, get: function() {
        return b.AnnotationEditorLayer;
      } }), Object.defineProperty(R, "AnnotationEditorParamsType", { enumerable: !0, get: function() {
        return c.AnnotationEditorParamsType;
      } }), Object.defineProperty(R, "AnnotationEditorType", { enumerable: !0, get: function() {
        return c.AnnotationEditorType;
      } }), Object.defineProperty(R, "AnnotationEditorUIManager", { enumerable: !0, get: function() {
        return x.AnnotationEditorUIManager;
      } }), Object.defineProperty(R, "AnnotationLayer", { enumerable: !0, get: function() {
        return O.AnnotationLayer;
      } }), Object.defineProperty(R, "AnnotationMode", { enumerable: !0, get: function() {
        return c.AnnotationMode;
      } }), Object.defineProperty(R, "CMapCompressionType", { enumerable: !0, get: function() {
        return c.CMapCompressionType;
      } }), Object.defineProperty(R, "FeatureTest", { enumerable: !0, get: function() {
        return c.FeatureTest;
      } }), Object.defineProperty(R, "GlobalWorkerOptions", { enumerable: !0, get: function() {
        return f.GlobalWorkerOptions;
      } }), Object.defineProperty(R, "InvalidPDFException", { enumerable: !0, get: function() {
        return c.InvalidPDFException;
      } }), Object.defineProperty(R, "MissingPDFException", { enumerable: !0, get: function() {
        return c.MissingPDFException;
      } }), Object.defineProperty(R, "OPS", { enumerable: !0, get: function() {
        return c.OPS;
      } }), Object.defineProperty(R, "PDFDataRangeTransport", { enumerable: !0, get: function() {
        return e.PDFDataRangeTransport;
      } }), Object.defineProperty(R, "PDFDateString", { enumerable: !0, get: function() {
        return t.PDFDateString;
      } }), Object.defineProperty(R, "PDFWorker", { enumerable: !0, get: function() {
        return e.PDFWorker;
      } }), Object.defineProperty(R, "PasswordResponses", { enumerable: !0, get: function() {
        return c.PasswordResponses;
      } }), Object.defineProperty(R, "PermissionFlag", { enumerable: !0, get: function() {
        return c.PermissionFlag;
      } }), Object.defineProperty(R, "PixelsPerInch", { enumerable: !0, get: function() {
        return t.PixelsPerInch;
      } }), Object.defineProperty(R, "PromiseCapability", { enumerable: !0, get: function() {
        return c.PromiseCapability;
      } }), Object.defineProperty(R, "RenderingCancelledException", { enumerable: !0, get: function() {
        return t.RenderingCancelledException;
      } }), Object.defineProperty(R, "SVGGraphics", { enumerable: !0, get: function() {
        return l.SVGGraphics;
      } }), Object.defineProperty(R, "UnexpectedResponseException", { enumerable: !0, get: function() {
        return c.UnexpectedResponseException;
      } }), Object.defineProperty(R, "Util", { enumerable: !0, get: function() {
        return c.Util;
      } }), Object.defineProperty(R, "VerbosityLevel", { enumerable: !0, get: function() {
        return c.VerbosityLevel;
      } }), Object.defineProperty(R, "XfaLayer", { enumerable: !0, get: function() {
        return v.XfaLayer;
      } }), Object.defineProperty(R, "build", { enumerable: !0, get: function() {
        return e.build;
      } }), Object.defineProperty(R, "createValidAbsoluteUrl", { enumerable: !0, get: function() {
        return c.createValidAbsoluteUrl;
      } }), Object.defineProperty(R, "getDocument", { enumerable: !0, get: function() {
        return e.getDocument;
      } }), Object.defineProperty(R, "getFilenameFromUrl", { enumerable: !0, get: function() {
        return t.getFilenameFromUrl;
      } }), Object.defineProperty(R, "getPdfFilenameFromUrl", { enumerable: !0, get: function() {
        return t.getPdfFilenameFromUrl;
      } }), Object.defineProperty(R, "getXfaPageViewport", { enumerable: !0, get: function() {
        return t.getXfaPageViewport;
      } }), Object.defineProperty(R, "isDataScheme", { enumerable: !0, get: function() {
        return t.isDataScheme;
      } }), Object.defineProperty(R, "isPdfFile", { enumerable: !0, get: function() {
        return t.isPdfFile;
      } }), Object.defineProperty(R, "loadScript", { enumerable: !0, get: function() {
        return t.loadScript;
      } }), Object.defineProperty(R, "normalizeUnicode", { enumerable: !0, get: function() {
        return c.normalizeUnicode;
      } }), Object.defineProperty(R, "renderTextLayer", { enumerable: !0, get: function() {
        return a.renderTextLayer;
      } }), Object.defineProperty(R, "setLayerDimensions", { enumerable: !0, get: function() {
        return t.setLayerDimensions;
      } }), Object.defineProperty(R, "shadow", { enumerable: !0, get: function() {
        return c.shadow;
      } }), Object.defineProperty(R, "updateTextLayer", { enumerable: !0, get: function() {
        return a.updateTextLayer;
      } }), Object.defineProperty(R, "version", { enumerable: !0, get: function() {
        return e.version;
      } });
      var c = __w_pdfjs_require__(1), e = __w_pdfjs_require__(138), t = __w_pdfjs_require__(142), a = __w_pdfjs_require__(161), b = __w_pdfjs_require__(162), x = __w_pdfjs_require__(141), O = __w_pdfjs_require__(165), f = __w_pdfjs_require__(149), l = __w_pdfjs_require__(168), v = __w_pdfjs_require__(167);
    })(), __webpack_exports__;
  })());
})(pdf_min$2);
var pdf_minExports = pdf_min$2.exports;
const pdf_min = /* @__PURE__ */ getDefaultExportFromCjs(pdf_minExports), pdf_min$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pdf_min
}, Symbol.toStringTag, { value: "Module" }));
export {
  pdf_min$1 as p
};
