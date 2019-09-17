"use strict";
cc._RF.push(module, 'd17fdO4dGdKeZ0KncmF6wpb', 'core.min');
// SDK/bcx/core.min.js

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  var e = {};function n(r) {
    if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) {
      n.d(r, i, function (e) {
        return t[e];
      }.bind(null, i));
    }return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 64);
}([function (t, e) {
  t.exports = function (t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
  };
}, function (t, e, n) {
  t.exports = n(35);
}, function (t, e) {
  t.exports = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };
}, function (t, e) {
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }t.exports = function (t, e, r) {
    return e && n(t.prototype, e), r && n(t, r), t;
  };
}, function (t, e) {
  "function" == typeof Object.create ? t.exports = function (t, e) {
    t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } });
  } : t.exports = function (t, e) {
    t.super_ = e;var n = function n() {};n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
  };
}, function (t, e) {
  function n(t, e, n, r, i, o, s) {
    try {
      var a = t[o](s),
          u = a.value;
    } catch (t) {
      return void n(t);
    }a.done ? e(u) : Promise.resolve(u).then(r, i);
  }t.exports = function (t) {
    return function () {
      var e = this,
          r = arguments;return new Promise(function (i, o) {
        var s = t.apply(e, r);function a(t) {
          n(s, i, o, a, u, "next", t);
        }function u(t) {
          n(s, i, o, a, u, "throw", t);
        }a(void 0);
      });
    };
  };
}, function (t, e, n) {
  var r = n(16),
      i = r.Buffer;function o(t, e) {
    for (var n in t) {
      e[n] = t[n];
    }
  }function s(t, e, n) {
    return i(t, e, n);
  }i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, e), e.Buffer = s), o(i, s), s.from = function (t, e, n) {
    if ("number" == typeof t) throw new TypeError("Argument must not be a number");return i(t, e, n);
  }, s.alloc = function (t, e, n) {
    if ("number" != typeof t) throw new TypeError("Argument must be a number");var r = i(t);return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r;
  }, s.allocUnsafe = function (t) {
    if ("number" != typeof t) throw new TypeError("Argument must be a number");return i(t);
  }, s.allocUnsafeSlow = function (t) {
    if ("number" != typeof t) throw new TypeError("Argument must be a number");return r.SlowBuffer(t);
  };
}, function (t, e) {
  var n;n = function () {
    return this;
  }();try {
    n = n || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }t.exports = n;
}, function (t, e, n) {
  "use strict";
  var r = n(12),
      i = Object.keys || function (t) {
    var e = [];for (var n in t) {
      e.push(n);
    }return e;
  };t.exports = f;var o = n(10);o.inherits = n(4);var s = n(25),
      a = n(19);o.inherits(f, s);for (var u = i(a.prototype), c = 0; c < u.length; c++) {
    var h = u[c];f.prototype[h] || (f.prototype[h] = a.prototype[h]);
  }function f(t) {
    if (!(this instanceof f)) return new f(t);s.call(this, t), a.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", l);
  }function l() {
    this.allowHalfOpen || this._writableState.ended || r.nextTick(d, this);
  }function d(t) {
    t.end();
  }Object.defineProperty(f.prototype, "writableHighWaterMark", { enumerable: !1, get: function get() {
      return this._writableState.highWaterMark;
    } }), Object.defineProperty(f.prototype, "destroyed", { get: function get() {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    }, set: function set(t) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
    } }), f.prototype._destroy = function (t, e) {
    this.push(null), this.end(), r.nextTick(e, t);
  };
}, function (t, e, n) {
  var r = n(6).Buffer;function i(t, e) {
    this._block = r.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0;
  }i.prototype.update = function (t, e) {
    "string" == typeof t && (e = e || "utf8", t = r.from(t, e));for (var n = this._block, i = this._blockSize, o = t.length, s = this._len, a = 0; a < o;) {
      for (var u = s % i, c = Math.min(o - a, i - u), h = 0; h < c; h++) {
        n[u + h] = t[a + h];
      }a += c, (s += c) % i == 0 && this._update(n);
    }return this._len += o, this;
  }, i.prototype.digest = function (t) {
    var e = this._len % this._blockSize;this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));var n = 8 * this._len;if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);else {
      var r = (4294967295 & n) >>> 0,
          i = (n - r) / 4294967296;this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4);
    }this._update(this._block);var o = this._hash();return t ? o.toString(t) : o;
  }, i.prototype._update = function () {
    throw new Error("_update must be implemented by subclass");
  }, t.exports = i;
}, function (t, e, n) {
  (function (t) {
    function n(t) {
      return Object.prototype.toString.call(t);
    }e.isArray = function (t) {
      return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t);
    }, e.isBoolean = function (t) {
      return "boolean" == typeof t;
    }, e.isNull = function (t) {
      return null === t;
    }, e.isNullOrUndefined = function (t) {
      return null == t;
    }, e.isNumber = function (t) {
      return "number" == typeof t;
    }, e.isString = function (t) {
      return "string" == typeof t;
    }, e.isSymbol = function (t) {
      return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
    }, e.isUndefined = function (t) {
      return void 0 === t;
    }, e.isRegExp = function (t) {
      return "[object RegExp]" === n(t);
    }, e.isObject = function (t) {
      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
    }, e.isDate = function (t) {
      return "[object Date]" === n(t);
    }, e.isError = function (t) {
      return "[object Error]" === n(t) || t instanceof Error;
    }, e.isFunction = function (t) {
      return "function" == typeof t;
    }, e.isPrimitive = function (t) {
      return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || void 0 === t;
    }, e.isBuffer = t.isBuffer;
  }).call(this, n(16).Buffer);
}, function (t, e) {
  var n,
      r,
      i = t.exports = {};function o() {
    throw new Error("setTimeout has not been defined");
  }function s() {
    throw new Error("clearTimeout has not been defined");
  }function a(t) {
    if (n === setTimeout) return setTimeout(t, 0);if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);try {
      return n(t, 0);
    } catch (e) {
      try {
        return n.call(null, t, 0);
      } catch (e) {
        return n.call(this, t, 0);
      }
    }
  }!function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (t) {
      n = o;
    }try {
      r = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (t) {
      r = s;
    }
  }();var u,
      c = [],
      h = !1,
      f = -1;function l() {
    h && u && (h = !1, u.length ? c = u.concat(c) : f = -1, c.length && d());
  }function d() {
    if (!h) {
      var t = a(l);h = !0;for (var e = c.length; e;) {
        for (u = c, c = []; ++f < e;) {
          u && u[f].run();
        }f = -1, e = c.length;
      }u = null, h = !1, function (t) {
        if (r === clearTimeout) return clearTimeout(t);if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);try {
          r(t);
        } catch (e) {
          try {
            return r.call(null, t);
          } catch (e) {
            return r.call(this, t);
          }
        }
      }(t);
    }
  }function p(t, e) {
    this.fun = t, this.array = e;
  }function g() {}i.nextTick = function (t) {
    var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }c.push(new p(t, e)), 1 !== c.length || h || a(d);
  }, p.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (t) {
    return [];
  }, i.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function () {
    return "/";
  }, i.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  "use strict";
  (function (e) {
    void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = { nextTick: function nextTick(t, n, r, i) {
        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');var o,
            s,
            a = arguments.length;switch (a) {case 0:case 1:
            return e.nextTick(t);case 2:
            return e.nextTick(function () {
              t.call(null, n);
            });case 3:
            return e.nextTick(function () {
              t.call(null, n, r);
            });case 4:
            return e.nextTick(function () {
              t.call(null, n, r, i);
            });default:
            for (o = new Array(a - 1), s = 0; s < o.length;) {
              o[s++] = arguments[s];
            }return e.nextTick(function () {
              t.apply(null, o);
            });}
      } } : t.exports = e;
  }).call(this, n(11));
}, function (t, e, n) {
  var r = n(21),
      i = n(62);t.exports = function (t, e) {
    return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e;
  };
}, function (t, e) {
  function n(e) {
    return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, n(e);
  }t.exports = n;
}, function (t, e, n) {
  var r = n(63);t.exports = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && r(t, e);
  };
}, function (t, e, n) {
  "use strict";
  (function (t) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    var r = n(42),
        i = n(43),
        o = n(23);function s() {
      return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }function a(t, e) {
      if (s() < e) throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t;
    }function u(t, e, n) {
      if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");return f(this, t);
      }return c(this, t, e, n);
    }function c(t, e, n, r) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = l(t, e);return t;
      }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
        "string" == typeof n && "" !== n || (n = "utf8");if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');var r = 0 | p(e, n),
            i = (t = a(t, r)).write(e, n);i !== r && (t = t.slice(0, i));return t;
      }(t, e, n) : function (t, e) {
        if (u.isBuffer(e)) {
          var n = 0 | d(e.length);return 0 === (t = a(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
        }if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : l(t, e);if ("Buffer" === e.type && o(e.data)) return l(t, e.data);
        }var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(t, e);
    }function h(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');
    }function f(t, e) {
      if (h(e), t = a(t, e < 0 ? 0 : 0 | d(e)), !u.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
        t[n] = 0;
      }return t;
    }function l(t, e) {
      var n = e.length < 0 ? 0 : 0 | d(e.length);t = a(t, n);for (var r = 0; r < n; r += 1) {
        t[r] = 255 & e[r];
      }return t;
    }function d(t) {
      if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");return 0 | t;
    }function p(t, e) {
      if (u.isBuffer(t)) return t.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;"string" != typeof t && (t = "" + t);var n = t.length;if (0 === n) return 0;for (var r = !1;;) {
        switch (e) {case "ascii":case "latin1":case "binary":
            return n;case "utf8":case "utf-8":case void 0:
            return D(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return 2 * n;case "hex":
            return n >>> 1;case "base64":
            return q(t).length;default:
            if (r) return D(t).length;e = ("" + e).toLowerCase(), r = !0;}
      }
    }function g(t, e, n) {
      var r = t[e];t[e] = t[n], t[n] = r;
    }function y(t, e, n, r, i) {
      if (0 === t.length) return -1;if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
        if (i) return -1;n = t.length - 1;
      } else if (n < 0) {
        if (!i) return -1;n = 0;
      }if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, n, r, i);if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, i);throw new TypeError("val must be string, number or Buffer");
    }function v(t, e, n, r, i) {
      var o,
          s = 1,
          a = t.length,
          u = e.length;if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (t.length < 2 || e.length < 2) return -1;s = 2, a /= 2, u /= 2, n /= 2;
      }function c(t, e) {
        return 1 === s ? t[e] : t.readUInt16BE(e * s);
      }if (i) {
        var h = -1;for (o = n; o < a; o++) {
          if (c(t, o) === c(e, -1 === h ? 0 : o - h)) {
            if (-1 === h && (h = o), o - h + 1 === u) return h * s;
          } else -1 !== h && (o -= o - h), h = -1;
        }
      } else for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
        for (var f = !0, l = 0; l < u; l++) {
          if (c(t, o + l) !== c(e, l)) {
            f = !1;break;
          }
        }if (f) return o;
      }return -1;
    }function w(t, e, n, r) {
      n = Number(n) || 0;var i = t.length - n;r ? (r = Number(r)) > i && (r = i) : r = i;var o = e.length;if (o % 2 != 0) throw new TypeError("Invalid hex string");r > o / 2 && (r = o / 2);for (var s = 0; s < r; ++s) {
        var a = parseInt(e.substr(2 * s, 2), 16);if (isNaN(a)) return s;t[n + s] = a;
      }return s;
    }function _(t, e, n, r) {
      return W(D(e, t.length - n), t, n, r);
    }function b(t, e, n, r) {
      return W(function (t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          e.push(255 & t.charCodeAt(n));
        }return e;
      }(e), t, n, r);
    }function m(t, e, n, r) {
      return b(t, e, n, r);
    }function k(t, e, n, r) {
      return W(q(e), t, n, r);
    }function E(t, e, n, r) {
      return W(function (t, e) {
        for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
          n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
        }return o;
      }(e, t.length - n), t, n, r);
    }function S(t, e, n) {
      return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
    }function x(t, e, n) {
      n = Math.min(t.length, n);for (var r = [], i = e; i < n;) {
        var o,
            s,
            a,
            u,
            c = t[i],
            h = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;if (i + f <= n) switch (f) {case 1:
            c < 128 && (h = c);break;case 2:
            128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (h = u);break;case 3:
            o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (h = u);break;case 4:
            o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u);}null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), i += f;
      }return function (t) {
        var e = t.length;if (e <= A) return String.fromCharCode.apply(String, t);var n = "",
            r = 0;for (; r < e;) {
          n += String.fromCharCode.apply(String, t.slice(r, r += A));
        }return n;
      }(r);
    }e.Buffer = u, e.SlowBuffer = function (t) {
      +t != t && (t = 0);return u.alloc(+t);
    }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
      try {
        var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
            return 42;
          } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
      return t.__proto__ = u.prototype, t;
    }, u.from = function (t, e, n) {
      return c(null, t, e, n);
    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })), u.alloc = function (t, e, n) {
      return function (t, e, n, r) {
        return h(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e);
      }(null, t, e, n);
    }, u.allocUnsafe = function (t) {
      return f(null, t);
    }, u.allocUnsafeSlow = function (t) {
      return f(null, t);
    }, u.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, u.compare = function (t, e) {
      if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");if (t === e) return 0;for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) {
        if (t[i] !== e[i]) {
          n = t[i], r = e[i];break;
        }
      }return n < r ? -1 : r < n ? 1 : 0;
    }, u.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
          return !0;default:
          return !1;}
    }, u.concat = function (t, e) {
      if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === t.length) return u.alloc(0);var n;if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
        e += t[n].length;
      }var r = u.allocUnsafe(e),
          i = 0;for (n = 0; n < t.length; ++n) {
        var s = t[n];if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r, i), i += s.length;
      }return r;
    }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
      var t = this.length;if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {
        g(this, e, e + 1);
      }return this;
    }, u.prototype.swap32 = function () {
      var t = this.length;if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {
        g(this, e, e + 3), g(this, e + 1, e + 2);
      }return this;
    }, u.prototype.swap64 = function () {
      var t = this.length;if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {
        g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
      }return this;
    }, u.prototype.toString = function () {
      var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : function (t, e, n) {
        var r = !1;if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";if ((n >>>= 0) <= (e >>>= 0)) return "";for (t || (t = "utf8");;) {
          switch (t) {case "hex":
              return R(this, e, n);case "utf8":case "utf-8":
              return x(this, e, n);case "ascii":
              return T(this, e, n);case "latin1":case "binary":
              return I(this, e, n);case "base64":
              return S(this, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return O(this, e, n);default:
              if (r) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), r = !0;}
        }
      }.apply(this, arguments);
    }, u.prototype.equals = function (t) {
      if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t || 0 === u.compare(this, t);
    }, u.prototype.inspect = function () {
      var t = "",
          n = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
    }, u.prototype.compare = function (t, e, n, r, i) {
      if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");if (r >= i && e >= n) return 0;if (r >= i) return -1;if (e >= n) return 1;if (this === t) return 0;for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, i), h = t.slice(e, n), f = 0; f < a; ++f) {
        if (c[f] !== h[f]) {
          o = c[f], s = h[f];break;
        }
      }return o < s ? -1 : s < o ? 1 : 0;
    }, u.prototype.includes = function (t, e, n) {
      return -1 !== this.indexOf(t, e, n);
    }, u.prototype.indexOf = function (t, e, n) {
      return y(this, t, e, n, !0);
    }, u.prototype.lastIndexOf = function (t, e, n) {
      return y(this, t, e, n, !1);
    }, u.prototype.write = function (t, e, n, r) {
      if (void 0 === e) r = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
      }var i = this.length - e;if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var o = !1;;) {
        switch (r) {case "hex":
            return w(this, t, e, n);case "utf8":case "utf-8":
            return _(this, t, e, n);case "ascii":
            return b(this, t, e, n);case "latin1":case "binary":
            return m(this, t, e, n);case "base64":
            return k(this, t, e, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return E(this, t, e, n);default:
            if (o) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), o = !0;}
      }
    }, u.prototype.toJSON = function () {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };var A = 4096;function T(t, e, n) {
      var r = "";n = Math.min(t.length, n);for (var i = e; i < n; ++i) {
        r += String.fromCharCode(127 & t[i]);
      }return r;
    }function I(t, e, n) {
      var r = "";n = Math.min(t.length, n);for (var i = e; i < n; ++i) {
        r += String.fromCharCode(t[i]);
      }return r;
    }function R(t, e, n) {
      var r = t.length;(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);for (var i = "", o = e; o < n; ++o) {
        i += F(t[o]);
      }return i;
    }function O(t, e, n) {
      for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) {
        i += String.fromCharCode(r[o] + 256 * r[o + 1]);
      }return i;
    }function P(t, e, n) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
    }function B(t, e, n, r, i, o) {
      if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');if (n + r > t.length) throw new RangeError("Index out of range");
    }function L(t, e, n, r) {
      e < 0 && (e = 65535 + e + 1);for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) {
        t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
      }
    }function C(t, e, n, r) {
      e < 0 && (e = 4294967295 + e + 1);for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) {
        t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
      }
    }function M(t, e, n, r, i, o) {
      if (n + r > t.length) throw new RangeError("Index out of range");if (n < 0) throw new RangeError("Index out of range");
    }function j(t, e, n, r, o) {
      return o || M(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
    }function N(t, e, n, r, o) {
      return o || M(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
    }u.prototype.slice = function (t, e) {
      var n,
          r = this.length;if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = u.prototype;else {
        var i = e - t;n = new u(i, void 0);for (var o = 0; o < i; ++o) {
          n[o] = this[o + t];
        }
      }return n;
    }, u.prototype.readUIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
        r += this[t + o] * i;
      }return r;
    }, u.prototype.readUIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) {
        r += this[t + --e] * i;
      }return r;
    }, u.prototype.readUInt8 = function (t, e) {
      return e || P(t, 1, this.length), this[t];
    }, u.prototype.readUInt16LE = function (t, e) {
      return e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, u.prototype.readUInt16BE = function (t, e) {
      return e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, u.prototype.readUInt32LE = function (t, e) {
      return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, u.prototype.readUInt32BE = function (t, e) {
      return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, u.prototype.readIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
        r += this[t + o] * i;
      }return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
    }, u.prototype.readIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || P(t, e, this.length);for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) {
        o += this[t + --r] * i;
      }return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
    }, u.prototype.readInt8 = function (t, e) {
      return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, u.prototype.readInt16LE = function (t, e) {
      e || P(t, 2, this.length);var n = this[t] | this[t + 1] << 8;return 32768 & n ? 4294901760 | n : n;
    }, u.prototype.readInt16BE = function (t, e) {
      e || P(t, 2, this.length);var n = this[t + 1] | this[t] << 8;return 32768 & n ? 4294901760 | n : n;
    }, u.prototype.readInt32LE = function (t, e) {
      return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, u.prototype.readInt32BE = function (t, e) {
      return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, u.prototype.readFloatLE = function (t, e) {
      return e || P(t, 4, this.length), i.read(this, t, !0, 23, 4);
    }, u.prototype.readFloatBE = function (t, e) {
      return e || P(t, 4, this.length), i.read(this, t, !1, 23, 4);
    }, u.prototype.readDoubleLE = function (t, e) {
      return e || P(t, 8, this.length), i.read(this, t, !0, 52, 8);
    }, u.prototype.readDoubleBE = function (t, e) {
      return e || P(t, 8, this.length), i.read(this, t, !1, 52, 8);
    }, u.prototype.writeUIntLE = function (t, e, n, r) {
      (t = +t, e |= 0, n |= 0, r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);var i = 1,
          o = 0;for (this[e] = 255 & t; ++o < n && (i *= 256);) {
        this[e + o] = t / i & 255;
      }return e + n;
    }, u.prototype.writeUIntBE = function (t, e, n, r) {
      (t = +t, e |= 0, n |= 0, r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);var i = n - 1,
          o = 1;for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) {
        this[e + i] = t / o & 255;
      }return e + n;
    }, u.prototype.writeUInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, u.prototype.writeUInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2;
    }, u.prototype.writeUInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2;
    }, u.prototype.writeUInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : C(this, t, e, !0), e + 4;
    }, u.prototype.writeUInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : C(this, t, e, !1), e + 4;
    }, u.prototype.writeIntLE = function (t, e, n, r) {
      if (t = +t, e |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);B(this, t, e, n, i - 1, -i);
      }var o = 0,
          s = 1,
          a = 0;for (this[e] = 255 & t; ++o < n && (s *= 256);) {
        t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      }return e + n;
    }, u.prototype.writeIntBE = function (t, e, n, r) {
      if (t = +t, e |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);B(this, t, e, n, i - 1, -i);
      }var o = n - 1,
          s = 1,
          a = 0;for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) {
        t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      }return e + n;
    }, u.prototype.writeInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, u.prototype.writeInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2;
    }, u.prototype.writeInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2;
    }, u.prototype.writeInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : C(this, t, e, !0), e + 4;
    }, u.prototype.writeInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : C(this, t, e, !1), e + 4;
    }, u.prototype.writeFloatLE = function (t, e, n) {
      return j(this, t, e, !0, n);
    }, u.prototype.writeFloatBE = function (t, e, n) {
      return j(this, t, e, !1, n);
    }, u.prototype.writeDoubleLE = function (t, e, n) {
      return N(this, t, e, !0, n);
    }, u.prototype.writeDoubleBE = function (t, e, n) {
      return N(this, t, e, !1, n);
    }, u.prototype.copy = function (t, e, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;if (0 === t.length || 0 === this.length) return 0;if (e < 0) throw new RangeError("targetStart out of bounds");if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");if (r < 0) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);var i,
          o = r - n;if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) {
        t[i + e] = this[i + n];
      } else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
        t[i + e] = this[i + n];
      } else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);return o;
    }, u.prototype.fill = function (t, e, n, r) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
          var i = t.charCodeAt(0);i < 256 && (t = i);
        }if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      } else "number" == typeof t && (t &= 255);if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");if (n <= e) return this;var o;if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) {
        this[o] = t;
      } else {
        var s = u.isBuffer(t) ? t : D(new u(t, r).toString()),
            a = s.length;for (o = 0; o < n - e; ++o) {
          this[o + e] = s[o % a];
        }
      }return this;
    };var U = /[^+\/0-9A-Za-z-_]/g;function F(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }function D(t, e) {
      var n;e = e || 1 / 0;for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
        if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);continue;
            }if (s + 1 === r) {
              (e -= 3) > -1 && o.push(239, 191, 189);continue;
            }i = n;continue;
          }if (n < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = n;continue;
          }n = 65536 + (i - 55296 << 10 | n - 56320);
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);if (i = null, n < 128) {
          if ((e -= 1) < 0) break;o.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0) break;o.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0) break;o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }return o;
    }function q(t) {
      return r.toByteArray(function (t) {
        if ((t = function (t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }(t).replace(U, "")).length < 2) return "";for (; t.length % 4 != 0;) {
          t += "=";
        }return t;
      }(t));
    }function W(t, e, n, r) {
      for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) {
        e[i + n] = t[i];
      }return i;
    }
  }).call(this, n(7));
}, function (t, e, n) {
  "use strict";
  var r,
      i = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
      o = i && "function" == typeof i.apply ? i.apply : function (t, e, n) {
    return Function.prototype.apply.call(t, e, n);
  };r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
  } : function (t) {
    return Object.getOwnPropertyNames(t);
  };var s = Number.isNaN || function (t) {
    return t != t;
  };function a() {
    a.init.call(this);
  }t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;var u = 10;function c(t) {
    return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
  }function h(t, e, n, r) {
    var i, o, s, a;if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof n === "undefined" ? "undefined" : _typeof(n)));if (void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), s = o[e]), void 0 === s) s = o[e] = n, ++t._eventsCount;else if ("function" == typeof s ? s = o[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (i = c(t)) > 0 && s.length > i && !s.warned) {
      s.warned = !0;var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = s.length, a = u, console && console.warn && console.warn(a);
    }return t;
  }function f(t, e, n) {
    var r = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n },
        i = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t.push(arguments[e]);
      }this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, t));
    }.bind(r);return i.listener = n, r.wrapFn = i, i;
  }function l(t, e, n) {
    var r = t._events;if (void 0 === r) return [];var i = r[e];return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (t) {
      for (var e = new Array(t.length), n = 0; n < e.length; ++n) {
        e[n] = t[n].listener || t[n];
      }return e;
    }(i) : p(i, i.length);
  }function d(t) {
    var e = this._events;if (void 0 !== e) {
      var n = e[t];if ("function" == typeof n) return 1;if (void 0 !== n) return n.length;
    }return 0;
  }function p(t, e) {
    for (var n = new Array(e), r = 0; r < e; ++r) {
      n[r] = t[r];
    }return n;
  }Object.defineProperty(a, "defaultMaxListeners", { enumerable: !0, get: function get() {
      return u;
    }, set: function set(t) {
      if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");u = t;
    } }), a.init = function () {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, a.prototype.setMaxListeners = function (t) {
    if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");return this._maxListeners = t, this;
  }, a.prototype.getMaxListeners = function () {
    return c(this);
  }, a.prototype.emit = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) {
      e.push(arguments[n]);
    }var r = "error" === t,
        i = this._events;if (void 0 !== i) r = r && void 0 === i.error;else if (!r) return !1;if (r) {
      var s;if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));throw a.context = s, a;
    }var u = i[t];if (void 0 === u) return !1;if ("function" == typeof u) o(u, this, e);else {
      var c = u.length,
          h = p(u, c);for (n = 0; n < c; ++n) {
        o(h[n], this, e);
      }
    }return !0;
  }, a.prototype.addListener = function (t, e) {
    return h(this, t, e, !1);
  }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (t, e) {
    return h(this, t, e, !0);
  }, a.prototype.once = function (t, e) {
    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof e === "undefined" ? "undefined" : _typeof(e)));return this.on(t, f(this, t, e)), this;
  }, a.prototype.prependOnceListener = function (t, e) {
    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof e === "undefined" ? "undefined" : _typeof(e)));return this.prependListener(t, f(this, t, e)), this;
  }, a.prototype.removeListener = function (t, e) {
    var n, r, i, o, s;if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof e === "undefined" ? "undefined" : _typeof(e)));if (void 0 === (r = this._events)) return this;if (void 0 === (n = r[t])) return this;if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));else if ("function" != typeof n) {
      for (i = -1, o = n.length - 1; o >= 0; o--) {
        if (n[o] === e || n[o].listener === e) {
          s = n[o].listener, i = o;break;
        }
      }if (i < 0) return this;0 === i ? n.shift() : function (t, e) {
        for (; e + 1 < t.length; e++) {
          t[e] = t[e + 1];
        }t.pop();
      }(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || e);
    }return this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (t) {
    var e, n, r;if (void 0 === (n = this._events)) return this;if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;if (0 === arguments.length) {
      var i,
          o = Object.keys(n);for (r = 0; r < o.length; ++r) {
        "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
      }return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }if ("function" == typeof (e = n[t])) this.removeListener(t, e);else if (void 0 !== e) for (r = e.length - 1; r >= 0; r--) {
      this.removeListener(t, e[r]);
    }return this;
  }, a.prototype.listeners = function (t) {
    return l(this, t, !0);
  }, a.prototype.rawListeners = function (t) {
    return l(this, t, !1);
  }, a.listenerCount = function (t, e) {
    return "function" == typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e);
  }, a.prototype.listenerCount = d, a.prototype.eventNames = function () {
    return this._eventsCount > 0 ? r(this._events) : [];
  };
}, function (t, e, n) {
  (e = t.exports = n(25)).Stream = e, e.Readable = e, e.Writable = n(19), e.Duplex = n(8), e.Transform = n(28), e.PassThrough = n(50);
}, function (t, e, n) {
  "use strict";
  (function (e, r, i) {
    var o = n(12);function s(t) {
      var e = this;this.next = null, this.entry = null, this.finish = function () {
        !function (t, e, n) {
          var r = t.entry;t.entry = null;for (; r;) {
            var i = r.callback;e.pendingcb--, i(n), r = r.next;
          }e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
        }(e, t);
      };
    }t.exports = w;var a,
        u = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : o.nextTick;w.WritableState = v;var c = n(10);c.inherits = n(4);var h = { deprecate: n(49) },
        f = n(26),
        l = n(6).Buffer,
        d = i.Uint8Array || function () {};var p,
        g = n(27);function y() {}function v(t, e) {
      a = a || n(8), t = t || {};var r = e instanceof a;this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode);var i = t.highWaterMark,
          c = t.writableHighWaterMark,
          h = this.objectMode ? 16 : 16384;this.highWaterMark = i || 0 === i ? i : r && (c || 0 === c) ? c : h, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;var f = !1 === t.decodeStrings;this.decodeStrings = !f, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
        !function (t, e) {
          var n = t._writableState,
              r = n.sync,
              i = n.writecb;if (function (t) {
            t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
          }(n), e) !function (t, e, n, r, i) {
            --e.pendingcb, n ? (o.nextTick(i, r), o.nextTick(S, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), S(t, e));
          }(t, n, r, e, i);else {
            var s = k(n);s || n.corked || n.bufferProcessing || !n.bufferedRequest || m(t, n), r ? u(b, t, n, s, i) : b(t, n, s, i);
          }
        }(e, t);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this);
    }function w(t) {
      if (a = a || n(8), !(p.call(w, this) || this instanceof a)) return new w(t);this._writableState = new v(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), f.call(this);
    }function _(t, e, n, r, i, o, s) {
      e.writelen = r, e.writecb = s, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1;
    }function b(t, e, n, r) {
      n || function (t, e) {
        0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"));
      }(t, e), e.pendingcb--, r(), S(t, e);
    }function m(t, e) {
      e.bufferProcessing = !0;var n = e.bufferedRequest;if (t._writev && n && n.next) {
        var r = e.bufferedRequestCount,
            i = new Array(r),
            o = e.corkedRequestsFree;o.entry = n;for (var a = 0, u = !0; n;) {
          i[a] = n, n.isBuf || (u = !1), n = n.next, a += 1;
        }i.allBuffers = u, _(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new s(e), e.bufferedRequestCount = 0;
      } else {
        for (; n;) {
          var c = n.chunk,
              h = n.encoding,
              f = n.callback;if (_(t, e, !1, e.objectMode ? 1 : c.length, c, h, f), n = n.next, e.bufferedRequestCount--, e.writing) break;
        }null === n && (e.lastBufferedRequest = null);
      }e.bufferedRequest = n, e.bufferProcessing = !1;
    }function k(t) {
      return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
    }function E(t, e) {
      t._final(function (n) {
        e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), S(t, e);
      });
    }function S(t, e) {
      var n = k(e);return n && (!function (t, e) {
        e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, o.nextTick(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")));
      }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n;
    }c.inherits(w, f), v.prototype.getBuffer = function () {
      for (var t = this.bufferedRequest, e = []; t;) {
        e.push(t), t = t.next;
      }return e;
    }, function () {
      try {
        Object.defineProperty(v.prototype, "buffer", { get: h.deprecate(function () {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
      } catch (t) {}
    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(w, Symbol.hasInstance, { value: function value(t) {
        return !!p.call(this, t) || this === w && t && t._writableState instanceof v;
      } })) : p = function p(t) {
      return t instanceof this;
    }, w.prototype.pipe = function () {
      this.emit("error", new Error("Cannot pipe, not readable"));
    }, w.prototype.write = function (t, e, n) {
      var r,
          i = this._writableState,
          s = !1,
          a = !i.objectMode && (r = t, l.isBuffer(r) || r instanceof d);return a && !l.isBuffer(t) && (t = function (t) {
        return l.from(t);
      }(t)), "function" == typeof e && (n = e, e = null), a ? e = "buffer" : e || (e = i.defaultEncoding), "function" != typeof n && (n = y), i.ended ? function (t, e) {
        var n = new Error("write after end");t.emit("error", n), o.nextTick(e, n);
      }(this, n) : (a || function (t, e, n, r) {
        var i = !0,
            s = !1;return null === n ? s = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")), s && (t.emit("error", s), o.nextTick(r, s), i = !1), i;
      }(this, i, t, n)) && (i.pendingcb++, s = function (t, e, n, r, i, o) {
        if (!n) {
          var s = function (t, e, n) {
            t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = l.from(e, n));return e;
          }(e, r, i);r !== s && (n = !0, i = "buffer", r = s);
        }var a = e.objectMode ? 1 : r.length;e.length += a;var u = e.length < e.highWaterMark;u || (e.needDrain = !0);if (e.writing || e.corked) {
          var c = e.lastBufferedRequest;e.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: o, next: null }, c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
        } else _(t, e, !1, a, r, i, o);return u;
      }(this, i, a, t, e, n)), s;
    }, w.prototype.cork = function () {
      this._writableState.corked++;
    }, w.prototype.uncork = function () {
      var t = this._writableState;t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || m(this, t));
    }, w.prototype.setDefaultEncoding = function (t) {
      if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);return this._writableState.defaultEncoding = t, this;
    }, Object.defineProperty(w.prototype, "writableHighWaterMark", { enumerable: !1, get: function get() {
        return this._writableState.highWaterMark;
      } }), w.prototype._write = function (t, e, n) {
      n(new Error("_write() is not implemented"));
    }, w.prototype._writev = null, w.prototype.end = function (t, e, n) {
      var r = this._writableState;"function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null != t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function (t, e, n) {
        e.ending = !0, S(t, e), n && (e.finished ? o.nextTick(n) : t.once("finish", n));e.ended = !0, t.writable = !1;
      }(this, r, n);
    }, Object.defineProperty(w.prototype, "destroyed", { get: function get() {
        return void 0 !== this._writableState && this._writableState.destroyed;
      }, set: function set(t) {
        this._writableState && (this._writableState.destroyed = t);
      } }), w.prototype.destroy = g.destroy, w.prototype._undestroy = g.undestroy, w.prototype._destroy = function (t, e) {
      this.end(), e(t);
    };
  }).call(this, n(11), n(47).setImmediate, n(7));
}, function (t, e, n) {
  "use strict";
  var r = n(6).Buffer,
      i = r.isEncoding || function (t) {
    switch ((t = "" + t) && t.toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":case "raw":
        return !0;default:
        return !1;}
  };function o(t) {
    var e;switch (this.encoding = function (t) {
      var e = function (t) {
        if (!t) return "utf8";for (var e;;) {
          switch (t) {case "utf8":case "utf-8":
              return "utf8";case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return "utf16le";case "latin1":case "binary":
              return "latin1";case "base64":case "ascii":case "hex":
              return t;default:
              if (e) return;t = ("" + t).toLowerCase(), e = !0;}
        }
      }(t);if ("string" != typeof e && (r.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);return e || t;
    }(t), this.encoding) {case "utf16le":
        this.text = u, this.end = c, e = 4;break;case "utf8":
        this.fillLast = a, e = 4;break;case "base64":
        this.text = h, this.end = f, e = 3;break;default:
        return this.write = l, void (this.end = d);}this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e);
  }function s(t) {
    return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
  }function a(t) {
    var e = this.lastTotal - this.lastNeed,
        n = function (t, e, n) {
      if (128 != (192 & e[0])) return t.lastNeed = 0, "�";if (t.lastNeed > 1 && e.length > 1) {
        if (128 != (192 & e[1])) return t.lastNeed = 1, "�";if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�";
      }
    }(this, t);return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
  }function u(t, e) {
    if ((t.length - e) % 2 == 0) {
      var n = t.toString("utf16le", e);if (n) {
        var r = n.charCodeAt(n.length - 1);if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1);
      }return n;
    }return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
  }function c(t) {
    var e = t && t.length ? this.write(t) : "";if (this.lastNeed) {
      var n = this.lastTotal - this.lastNeed;return e + this.lastChar.toString("utf16le", 0, n);
    }return e;
  }function h(t, e) {
    var n = (t.length - e) % 3;return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n));
  }function f(t) {
    var e = t && t.length ? this.write(t) : "";return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }function l(t) {
    return t.toString(this.encoding);
  }function d(t) {
    return t && t.length ? this.write(t) : "";
  }e.StringDecoder = o, o.prototype.write = function (t) {
    if (0 === t.length) return "";var e, n;if (this.lastNeed) {
      if (void 0 === (e = this.fillLast(t))) return "";n = this.lastNeed, this.lastNeed = 0;
    } else n = 0;return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || "";
  }, o.prototype.end = function (t) {
    var e = t && t.length ? this.write(t) : "";return this.lastNeed ? e + "�" : e;
  }, o.prototype.text = function (t, e) {
    var n = function (t, e, n) {
      var r = e.length - 1;if (r < n) return 0;var i = s(e[r]);if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;if (--r < n || -2 === i) return 0;if ((i = s(e[r])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;if (--r < n || -2 === i) return 0;if ((i = s(e[r])) >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i;return 0;
    }(this, t, e);if (!this.lastNeed) return t.toString("utf8", e);this.lastTotal = n;var r = t.length - (n - this.lastNeed);return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
  }, o.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
  };
}, function (t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    })(t);
  }function r(e) {
    return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function r(t) {
      return n(t);
    } : t.exports = r = function r(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
    }, r(e);
  }t.exports = r;
}, function (t, e, n) {
  "use strict";
  var r = n(6).Buffer,
      i = n(24).Transform;function o(t) {
    i.call(this), this._block = r.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1;
  }n(4)(o, i), o.prototype._transform = function (t, e, n) {
    var r = null;try {
      this.update(t, e);
    } catch (t) {
      r = t;
    }n(r);
  }, o.prototype._flush = function (t) {
    var e = null;try {
      this.push(this.digest());
    } catch (t) {
      e = t;
    }t(e);
  }, o.prototype.update = function (t, e) {
    if (function (t, e) {
      if (!r.isBuffer(t) && "string" != typeof t) throw new TypeError(e + " must be a string or a buffer");
    }(t, "Data"), this._finalized) throw new Error("Digest already called");r.isBuffer(t) || (t = r.from(t, e));for (var n = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
      for (var o = this._blockOffset; o < this._blockSize;) {
        n[o++] = t[i++];
      }this._update(), this._blockOffset = 0;
    }for (; i < t.length;) {
      n[this._blockOffset++] = t[i++];
    }for (var s = 0, a = 8 * t.length; a > 0; ++s) {
      this._length[s] += a, (a = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * a);
    }return this;
  }, o.prototype._update = function () {
    throw new Error("_update is not implemented");
  }, o.prototype.digest = function (t) {
    if (this._finalized) throw new Error("Digest already called");this._finalized = !0;var e = this._digest();void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;for (var n = 0; n < 4; ++n) {
      this._length[n] = 0;
    }return e;
  }, o.prototype._digest = function () {
    throw new Error("_digest is not implemented");
  }, t.exports = o;
}, function (t, e) {
  var n = {}.toString;t.exports = Array.isArray || function (t) {
    return "[object Array]" == n.call(t);
  };
}, function (t, e, n) {
  t.exports = i;var r = n(17).EventEmitter;function i() {
    r.call(this);
  }n(4)(i, r), i.Readable = n(18), i.Writable = n(51), i.Duplex = n(52), i.Transform = n(53), i.PassThrough = n(54), i.Stream = i, i.prototype.pipe = function (t, e) {
    var n = this;function i(e) {
      t.writable && !1 === t.write(e) && n.pause && n.pause();
    }function o() {
      n.readable && n.resume && n.resume();
    }n.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (n.on("end", a), n.on("close", u));var s = !1;function a() {
      s || (s = !0, t.end());
    }function u() {
      s || (s = !0, "function" == typeof t.destroy && t.destroy());
    }function c(t) {
      if (h(), 0 === r.listenerCount(this, "error")) throw t;
    }function h() {
      n.removeListener("data", i), t.removeListener("drain", o), n.removeListener("end", a), n.removeListener("close", u), n.removeListener("error", c), t.removeListener("error", c), n.removeListener("end", h), n.removeListener("close", h), t.removeListener("close", h);
    }return n.on("error", c), t.on("error", c), n.on("end", h), n.on("close", h), t.on("close", h), t.emit("pipe", n), t;
  };
}, function (t, e, n) {
  "use strict";
  (function (e, r) {
    var i = n(12);t.exports = _;var o,
        s = n(23);_.ReadableState = w;n(17).EventEmitter;var a = function a(t, e) {
      return t.listeners(e).length;
    },
        u = n(26),
        c = n(6).Buffer,
        h = e.Uint8Array || function () {};var f = n(10);f.inherits = n(4);var l = n(44),
        d = void 0;d = l && l.debuglog ? l.debuglog("stream") : function () {};var p,
        g = n(45),
        y = n(27);f.inherits(_, u);var v = ["error", "close", "destroy", "pause", "resume"];function w(t, e) {
      t = t || {};var r = e instanceof (o = o || n(8));this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);var i = t.highWaterMark,
          s = t.readableHighWaterMark,
          a = this.objectMode ? 16 : 16384;this.highWaterMark = i || 0 === i ? i : r && (s || 0 === s) ? s : a, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new g(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (p || (p = n(20).StringDecoder), this.decoder = new p(t.encoding), this.encoding = t.encoding);
    }function _(t) {
      if (o = o || n(8), !(this instanceof _)) return new _(t);this._readableState = new w(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), u.call(this);
    }function b(t, e, n, r, i) {
      var o,
          s = t._readableState;null === e ? (s.reading = !1, function (t, e) {
        if (e.ended) return;if (e.decoder) {
          var n = e.decoder.end();n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length);
        }e.ended = !0, S(t);
      }(t, s)) : (i || (o = function (t, e) {
        var n;r = e, c.isBuffer(r) || r instanceof h || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));var r;return n;
      }(s, e)), o ? t.emit("error", o) : s.objectMode || e && e.length > 0 ? ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === c.prototype || (e = function (t) {
        return c.from(t);
      }(e)), r ? s.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : m(t, s, e, !0) : s.ended ? t.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1, s.decoder && !n ? (e = s.decoder.write(e), s.objectMode || 0 !== e.length ? m(t, s, e, !1) : A(t, s)) : m(t, s, e, !1))) : r || (s.reading = !1));return function (t) {
        return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length);
      }(s);
    }function m(t, e, n, r) {
      e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && S(t)), A(t, e);
    }Object.defineProperty(_.prototype, "destroyed", { get: function get() {
        return void 0 !== this._readableState && this._readableState.destroyed;
      }, set: function set(t) {
        this._readableState && (this._readableState.destroyed = t);
      } }), _.prototype.destroy = y.destroy, _.prototype._undestroy = y.undestroy, _.prototype._destroy = function (t, e) {
      this.push(null), e(t);
    }, _.prototype.push = function (t, e) {
      var n,
          r = this._readableState;return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = c.from(t, e), e = ""), n = !0), b(this, t, e, !1, n);
    }, _.prototype.unshift = function (t) {
      return b(this, t, null, !0, !1);
    }, _.prototype.isPaused = function () {
      return !1 === this._readableState.flowing;
    }, _.prototype.setEncoding = function (t) {
      return p || (p = n(20).StringDecoder), this._readableState.decoder = new p(t), this._readableState.encoding = t, this;
    };var k = 8388608;function E(t, e) {
      return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function (t) {
        return t >= k ? t = k : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
      }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
    }function S(t) {
      var e = t._readableState;e.needReadable = !1, e.emittedReadable || (d("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? i.nextTick(x, t) : x(t));
    }function x(t) {
      d("emit readable"), t.emit("readable"), O(t);
    }function A(t, e) {
      e.readingMore || (e.readingMore = !0, i.nextTick(T, t, e));
    }function T(t, e) {
      for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (d("maybeReadMore read 0"), t.read(0), n !== e.length);) {
        n = e.length;
      }e.readingMore = !1;
    }function I(t) {
      d("readable nexttick read 0"), t.read(0);
    }function R(t, e) {
      e.reading || (d("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), O(t), e.flowing && !e.reading && t.read(0);
    }function O(t) {
      var e = t._readableState;for (d("flow", e.flowing); e.flowing && null !== t.read();) {}
    }function P(t, e) {
      return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = function (t, e, n) {
        var r;t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function (t, e) {
          var n = e.head,
              r = 1,
              i = n.data;t -= i.length;for (; n = n.next;) {
            var o = n.data,
                s = t > o.length ? o.length : t;if (s === o.length ? i += o : i += o.slice(0, t), 0 === (t -= s)) {
              s === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s));break;
            }++r;
          }return e.length -= r, i;
        }(t, e) : function (t, e) {
          var n = c.allocUnsafe(t),
              r = e.head,
              i = 1;r.data.copy(n), t -= r.data.length;for (; r = r.next;) {
            var o = r.data,
                s = t > o.length ? o.length : t;if (o.copy(n, n.length - t, 0, s), 0 === (t -= s)) {
              s === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(s));break;
            }++i;
          }return e.length -= i, n;
        }(t, e);return r;
      }(t, e.buffer, e.decoder), n);var n;
    }function B(t) {
      var e = t._readableState;if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');e.endEmitted || (e.ended = !0, i.nextTick(L, e, t));
    }function L(t, e) {
      t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
    }function C(t, e) {
      for (var n = 0, r = t.length; n < r; n++) {
        if (t[n] === e) return n;
      }return -1;
    }_.prototype.read = function (t) {
      d("read", t), t = parseInt(t, 10);var e = this._readableState,
          n = t;if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return d("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? B(this) : S(this), null;if (0 === (t = E(t, e)) && e.ended) return 0 === e.length && B(this), null;var r,
          i = e.needReadable;return d("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && d("length less than watermark", i = !0), e.ended || e.reading ? d("reading or ended", i = !1) : i && (d("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = E(n, e))), null === (r = t > 0 ? P(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && B(this)), null !== r && this.emit("data", r), r;
    }, _.prototype._read = function (t) {
      this.emit("error", new Error("_read() is not implemented"));
    }, _.prototype.pipe = function (t, e) {
      var n = this,
          o = this._readableState;switch (o.pipesCount) {case 0:
          o.pipes = t;break;case 1:
          o.pipes = [o.pipes, t];break;default:
          o.pipes.push(t);}o.pipesCount += 1, d("pipe count=%d opts=%j", o.pipesCount, e);var u = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? h : _;function c(e, r) {
        d("onunpipe"), e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, d("cleanup"), t.removeListener("close", v), t.removeListener("finish", w), t.removeListener("drain", f), t.removeListener("error", y), t.removeListener("unpipe", c), n.removeListener("end", h), n.removeListener("end", _), n.removeListener("data", g), l = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || f());
      }function h() {
        d("onend"), t.end();
      }o.endEmitted ? i.nextTick(u) : n.once("end", u), t.on("unpipe", c);var f = function (t) {
        return function () {
          var e = t._readableState;d("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(t, "data") && (e.flowing = !0, O(t));
        };
      }(n);t.on("drain", f);var l = !1;var p = !1;function g(e) {
        d("ondata"), p = !1, !1 !== t.write(e) || p || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== C(o.pipes, t)) && !l && (d("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, p = !0), n.pause());
      }function y(e) {
        d("onerror", e), _(), t.removeListener("error", y), 0 === a(t, "error") && t.emit("error", e);
      }function v() {
        t.removeListener("finish", w), _();
      }function w() {
        d("onfinish"), t.removeListener("close", v), _();
      }function _() {
        d("unpipe"), n.unpipe(t);
      }return n.on("data", g), function (t, e, n) {
        if ("function" == typeof t.prependListener) return t.prependListener(e, n);t._events && t._events[e] ? s(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n);
      }(t, "error", y), t.once("close", v), t.once("finish", w), t.emit("pipe", n), o.flowing || (d("pipe resume"), n.resume()), t;
    }, _.prototype.unpipe = function (t) {
      var e = this._readableState,
          n = { hasUnpiped: !1 };if (0 === e.pipesCount) return this;if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);if (!t) {
        var r = e.pipes,
            i = e.pipesCount;e.pipes = null, e.pipesCount = 0, e.flowing = !1;for (var o = 0; o < i; o++) {
          r[o].emit("unpipe", this, n);
        }return this;
      }var s = C(e.pipes, t);return -1 === s ? this : (e.pipes.splice(s, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this);
    }, _.prototype.on = function (t, e) {
      var n = u.prototype.on.call(this, t, e);if ("data" === t) !1 !== this._readableState.flowing && this.resume();else if ("readable" === t) {
        var r = this._readableState;r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && S(this) : i.nextTick(I, this));
      }return n;
    }, _.prototype.addListener = _.prototype.on, _.prototype.resume = function () {
      var t = this._readableState;return t.flowing || (d("resume"), t.flowing = !0, function (t, e) {
        e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(R, t, e));
      }(this, t)), this;
    }, _.prototype.pause = function () {
      return d("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
    }, _.prototype.wrap = function (t) {
      var e = this,
          n = this._readableState,
          r = !1;for (var i in t.on("end", function () {
        if (d("wrapped end"), n.decoder && !n.ended) {
          var t = n.decoder.end();t && t.length && e.push(t);
        }e.push(null);
      }), t.on("data", function (i) {
        (d("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) || (n.objectMode || i && i.length) && (e.push(i) || (r = !0, t.pause()));
      }), t) {
        void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
          return function () {
            return t[e].apply(t, arguments);
          };
        }(i));
      }for (var o = 0; o < v.length; o++) {
        t.on(v[o], this.emit.bind(this, v[o]));
      }return this._read = function (e) {
        d("wrapped _read", e), r && (r = !1, t.resume());
      }, this;
    }, Object.defineProperty(_.prototype, "readableHighWaterMark", { enumerable: !1, get: function get() {
        return this._readableState.highWaterMark;
      } }), _._fromList = P;
  }).call(this, n(7), n(11));
}, function (t, e, n) {
  t.exports = n(17).EventEmitter;
}, function (t, e, n) {
  "use strict";
  var r = n(12);function i(t, e) {
    t.emit("error", e);
  }t.exports = { destroy: function destroy(t, e) {
      var n = this,
          o = this._readableState && this._readableState.destroyed,
          s = this._writableState && this._writableState.destroyed;return o || s ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, t), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (t) {
        !e && t ? (r.nextTick(i, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t);
      }), this);
    }, undestroy: function undestroy() {
      this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
    } };
}, function (t, e, n) {
  "use strict";
  t.exports = s;var r = n(8),
      i = n(10);function o(t, e) {
    var n = this._transformState;n.transforming = !1;var r = n.writecb;if (!r) return this.emit("error", new Error("write callback called multiple times"));n.writechunk = null, n.writecb = null, null != e && this.push(e), r(t);var i = this._readableState;i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }function s(t) {
    if (!(this instanceof s)) return new s(t);r.call(this, t), this._transformState = { afterTransform: o.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", a);
  }function a() {
    var t = this;"function" == typeof this._flush ? this._flush(function (e, n) {
      u(t, e, n);
    }) : u(this, null, null);
  }function u(t, e, n) {
    if (e) return t.emit("error", e);if (null != n && t.push(n), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");return t.push(null);
  }i.inherits = n(4), i.inherits(s, r), s.prototype.push = function (t, e) {
    return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e);
  }, s.prototype._transform = function (t, e, n) {
    throw new Error("_transform() is not implemented");
  }, s.prototype._write = function (t, e, n) {
    var r = this._transformState;if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
      var i = this._readableState;(r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
  }, s.prototype._read = function (t) {
    var e = this._transformState;null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
  }, s.prototype._destroy = function (t, e) {
    var n = this;r.prototype._destroy.call(this, t, function (t) {
      e(t), n.emit("close");
    });
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(9),
      o = n(6).Buffer,
      s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      a = new Array(64);function u() {
    this.init(), this._w = a, i.call(this, 64, 56);
  }function c(t, e, n) {
    return n ^ t & (e ^ n);
  }function h(t, e, n) {
    return t & e | n & (t | e);
  }function f(t) {
    return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
  }function l(t) {
    return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
  }function d(t) {
    return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
  }r(u, i), u.prototype.init = function () {
    return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
  }, u.prototype._update = function (t) {
    for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, u = 0 | this._e, p = 0 | this._f, g = 0 | this._g, y = 0 | this._h, v = 0; v < 16; ++v) {
      n[v] = t.readInt32BE(4 * v);
    }for (; v < 64; ++v) {
      n[v] = 0 | (((e = n[v - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + n[v - 7] + d(n[v - 15]) + n[v - 16];
    }for (var w = 0; w < 64; ++w) {
      var _ = y + l(u) + c(u, p, g) + s[w] + n[w] | 0,
          b = f(r) + h(r, i, o) | 0;y = g, g = p, p = u, u = a + _ | 0, a = o, o = i, i = r, r = _ + b | 0;
    }this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = u + this._e | 0, this._f = p + this._f | 0, this._g = g + this._g | 0, this._h = y + this._h | 0;
  }, u.prototype._hash = function () {
    var t = o.allocUnsafe(32);return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
  }, t.exports = u;
}, function (t, e, n) {
  var r = n(4),
      i = n(9),
      o = n(6).Buffer,
      s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
      a = new Array(160);function u() {
    this.init(), this._w = a, i.call(this, 128, 112);
  }function c(t, e, n) {
    return n ^ t & (e ^ n);
  }function h(t, e, n) {
    return t & e | n & (t | e);
  }function f(t, e) {
    return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25);
  }function l(t, e) {
    return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23);
  }function d(t, e) {
    return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7;
  }function p(t, e) {
    return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25);
  }function g(t, e) {
    return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6;
  }function y(t, e) {
    return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26);
  }function v(t, e) {
    return t >>> 0 < e >>> 0 ? 1 : 0;
  }r(u, i), u.prototype.init = function () {
    return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
  }, u.prototype._update = function (t) {
    for (var e = this._w, n = 0 | this._ah, r = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, a = 0 | this._eh, u = 0 | this._fh, w = 0 | this._gh, _ = 0 | this._hh, b = 0 | this._al, m = 0 | this._bl, k = 0 | this._cl, E = 0 | this._dl, S = 0 | this._el, x = 0 | this._fl, A = 0 | this._gl, T = 0 | this._hl, I = 0; I < 32; I += 2) {
      e[I] = t.readInt32BE(4 * I), e[I + 1] = t.readInt32BE(4 * I + 4);
    }for (; I < 160; I += 2) {
      var R = e[I - 30],
          O = e[I - 30 + 1],
          P = d(R, O),
          B = p(O, R),
          L = g(R = e[I - 4], O = e[I - 4 + 1]),
          C = y(O, R),
          M = e[I - 14],
          j = e[I - 14 + 1],
          N = e[I - 32],
          U = e[I - 32 + 1],
          F = B + j | 0,
          D = P + M + v(F, B) | 0;D = (D = D + L + v(F = F + C | 0, C) | 0) + N + v(F = F + U | 0, U) | 0, e[I] = D, e[I + 1] = F;
    }for (var q = 0; q < 160; q += 2) {
      D = e[q], F = e[q + 1];var W = h(n, r, i),
          Y = h(b, m, k),
          H = f(n, b),
          z = f(b, n),
          K = l(a, S),
          V = l(S, a),
          J = s[q],
          X = s[q + 1],
          G = c(a, u, w),
          $ = c(S, x, A),
          Q = T + V | 0,
          Z = _ + K + v(Q, T) | 0;Z = (Z = (Z = Z + G + v(Q = Q + $ | 0, $) | 0) + J + v(Q = Q + X | 0, X) | 0) + D + v(Q = Q + F | 0, F) | 0;var tt = z + Y | 0,
          et = H + W + v(tt, z) | 0;_ = w, T = A, w = u, A = x, u = a, x = S, a = o + Z + v(S = E + Q | 0, E) | 0, o = i, E = k, i = r, k = m, r = n, m = b, n = Z + et + v(b = Q + tt | 0, Q) | 0;
    }this._al = this._al + b | 0, this._bl = this._bl + m | 0, this._cl = this._cl + k | 0, this._dl = this._dl + E | 0, this._el = this._el + S | 0, this._fl = this._fl + x | 0, this._gl = this._gl + A | 0, this._hl = this._hl + T | 0, this._ah = this._ah + n + v(this._al, b) | 0, this._bh = this._bh + r + v(this._bl, m) | 0, this._ch = this._ch + i + v(this._cl, k) | 0, this._dh = this._dh + o + v(this._dl, E) | 0, this._eh = this._eh + a + v(this._el, S) | 0, this._fh = this._fh + u + v(this._fl, x) | 0, this._gh = this._gh + w + v(this._gl, A) | 0, this._hh = this._hh + _ + v(this._hl, T) | 0;
  }, u.prototype._hash = function () {
    var t = o.allocUnsafe(64);function e(e, n, r) {
      t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
    }return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t;
  }, t.exports = u;
}, function (t, e, n) {
  var r = n(36),
      i = n(37),
      o = n(38);t.exports = function (t, e) {
    return r(t) || i(t, e) || o();
  };
}, function (t, e, n) {
  var r = n(39),
      i = n(40);t.exports = function (t) {
    if (r.crypto && r.crypto.getRandomValues) return r.crypto.getRandomValues(t);if ("object" == _typeof(r.msCrypto) && "function" == typeof r.msCrypto.getRandomValues) return r.msCrypto.getRandomValues(t);if (i.randomBytes) {
      if (!(t instanceof Uint8Array)) throw new TypeError("expected Uint8Array");if (t.length > 65536) {
        var e = new Error();throw e.code = 22, e.message = "Failed to execute 'getRandomValues' on 'Crypto': The ArrayBufferView's byte length (" + t.length + ") exceeds the number of bytes of entropy available via this API (65536).", e.name = "QuotaExceededError", e;
      }var n = i.randomBytes(t.length);return t.set(n), t;
    }throw new Error("No secure random number generator available.");
  };
}, function (t, e, n) {
  "use strict";
  var r = n(4),
      i = n(41),
      o = n(55),
      s = n(56),
      a = n(61);function u(t) {
    a.call(this, "digest"), this._hash = t;
  }r(u, a), u.prototype._update = function (t) {
    this._hash.update(t);
  }, u.prototype._final = function () {
    return this._hash.digest();
  }, t.exports = function (t) {
    return "md5" === (t = t.toLowerCase()) ? new i() : "rmd160" === t || "ripemd160" === t ? new o() : new u(s(t));
  };
}, function (t, e, n) {
  (function (e) {
    var n = null;"undefined" != typeof WebSocket ? n = WebSocket : "undefined" != typeof MozWebSocket ? n = MozWebSocket : void 0 !== e ? n = e.WebSocket || e.MozWebSocket : "undefined" != typeof window ? n = window.WebSocket || window.MozWebSocket : "undefined" != typeof self && (n = self.WebSocket || self.MozWebSocket), t.exports = n;
  }).call(this, n(7));
}, function (t, e, n) {
  var r = function (t) {
    "use strict";
    var e,
        n = Object.prototype,
        r = n.hasOwnProperty,
        i = "function" == typeof Symbol ? Symbol : {},
        o = i.iterator || "@@iterator",
        s = i.asyncIterator || "@@asyncIterator",
        a = i.toStringTag || "@@toStringTag";function u(t, e, n, r) {
      var i = e && e.prototype instanceof g ? e : g,
          o = Object.create(i.prototype),
          s = new T(r || []);return o._invoke = function (t, e, n) {
        var r = h;return function (i, o) {
          if (r === l) throw new Error("Generator is already running");if (r === d) {
            if ("throw" === i) throw o;return R();
          }for (n.method = i, n.arg = o;;) {
            var s = n.delegate;if (s) {
              var a = S(s, n);if (a) {
                if (a === p) continue;return a;
              }
            }if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (r === h) throw r = d, n.arg;n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);r = l;var u = c(t, e, n);if ("normal" === u.type) {
              if (r = n.done ? d : f, u.arg === p) continue;return { value: u.arg, done: n.done };
            }"throw" === u.type && (r = d, n.method = "throw", n.arg = u.arg);
          }
        };
      }(t, n, s), o;
    }function c(t, e, n) {
      try {
        return { type: "normal", arg: t.call(e, n) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }t.wrap = u;var h = "suspendedStart",
        f = "suspendedYield",
        l = "executing",
        d = "completed",
        p = {};function g() {}function y() {}function v() {}var w = {};w[o] = function () {
      return this;
    };var _ = Object.getPrototypeOf,
        b = _ && _(_(I([])));b && b !== n && r.call(b, o) && (w = b);var m = v.prototype = g.prototype = Object.create(w);function k(t) {
      ["next", "throw", "return"].forEach(function (e) {
        t[e] = function (t) {
          return this._invoke(e, t);
        };
      });
    }function E(t) {
      var e;this._invoke = function (n, i) {
        function o() {
          return new Promise(function (e, o) {
            !function e(n, i, o, s) {
              var a = c(t[n], t, i);if ("throw" !== a.type) {
                var u = a.arg,
                    h = u.value;return h && "object" == (typeof h === "undefined" ? "undefined" : _typeof(h)) && r.call(h, "__await") ? Promise.resolve(h.__await).then(function (t) {
                  e("next", t, o, s);
                }, function (t) {
                  e("throw", t, o, s);
                }) : Promise.resolve(h).then(function (t) {
                  u.value = t, o(u);
                }, function (t) {
                  return e("throw", t, o, s);
                });
              }s(a.arg);
            }(n, i, e, o);
          });
        }return e = e ? e.then(o, o) : o();
      };
    }function S(t, n) {
      var r = t.iterator[n.method];if (r === e) {
        if (n.delegate = null, "throw" === n.method) {
          if (t.iterator.return && (n.method = "return", n.arg = e, S(t, n), "throw" === n.method)) return p;n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
        }return p;
      }var i = c(r, t.iterator, n.arg);if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, p;var o = i.arg;return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, p) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p);
    }function x(t) {
      var e = { tryLoc: t[0] };1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }function A(t) {
      var e = t.completion || {};e.type = "normal", delete e.arg, t.completion = e;
    }function T(t) {
      this.tryEntries = [{ tryLoc: "root" }], t.forEach(x, this), this.reset(!0);
    }function I(t) {
      if (t) {
        var n = t[o];if (n) return n.call(t);if ("function" == typeof t.next) return t;if (!isNaN(t.length)) {
          var i = -1,
              s = function n() {
            for (; ++i < t.length;) {
              if (r.call(t, i)) return n.value = t[i], n.done = !1, n;
            }return n.value = e, n.done = !0, n;
          };return s.next = s;
        }
      }return { next: R };
    }function R() {
      return { value: e, done: !0 };
    }return y.prototype = m.constructor = v, v.constructor = y, v[a] = y.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name));
    }, t.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(m), t;
    }, t.awrap = function (t) {
      return { __await: t };
    }, k(E.prototype), E.prototype[s] = function () {
      return this;
    }, t.AsyncIterator = E, t.async = function (e, n, r, i) {
      var o = new E(u(e, n, r, i));return t.isGeneratorFunction(n) ? o : o.next().then(function (t) {
        return t.done ? t.value : o.next();
      });
    }, k(m), m[a] = "Generator", m[o] = function () {
      return this;
    }, m.toString = function () {
      return "[object Generator]";
    }, t.keys = function (t) {
      var e = [];for (var n in t) {
        e.push(n);
      }return e.reverse(), function n() {
        for (; e.length;) {
          var r = e.pop();if (r in t) return n.value = r, n.done = !1, n;
        }return n.done = !0, n;
      };
    }, t.values = I, T.prototype = { constructor: T, reset: function reset(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var n in this) {
          "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        }
      }, stop: function stop() {
        this.done = !0;var t = this.tryEntries[0].completion;if ("throw" === t.type) throw t.arg;return this.rval;
      }, dispatchException: function dispatchException(t) {
        if (this.done) throw t;var n = this;function i(r, i) {
          return a.type = "throw", a.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i;
        }for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var s = this.tryEntries[o],
              a = s.completion;if ("root" === s.tryLoc) return i("end");if (s.tryLoc <= this.prev) {
            var u = r.call(s, "catchLoc"),
                c = r.call(s, "finallyLoc");if (u && c) {
              if (this.prev < s.catchLoc) return i(s.catchLoc, !0);if (this.prev < s.finallyLoc) return i(s.finallyLoc);
            } else if (u) {
              if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
            } else {
              if (!c) throw new Error("try statement without catch or finally");if (this.prev < s.finallyLoc) return i(s.finallyLoc);
            }
          }
        }
      }, abrupt: function abrupt(t, e) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var i = this.tryEntries[n];if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
            var o = i;break;
          }
        }o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);var s = o ? o.completion : {};return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(s);
      }, complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p;
      }, finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), A(n), p;
        }
      }, catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];if (n.tryLoc === t) {
            var r = n.completion;if ("throw" === r.type) {
              var i = r.arg;A(n);
            }return i;
          }
        }throw new Error("illegal catch attempt");
      }, delegateYield: function delegateYield(t, n, r) {
        return this.delegate = { iterator: I(t), resultName: n, nextLoc: r }, "next" === this.method && (this.arg = e), p;
      } }, t;
  }(t.exports);try {
    regeneratorRuntime = r;
  } catch (t) {
    Function("r", "regeneratorRuntime = r")(r);
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) return t;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    var n = [],
        r = !0,
        i = !1,
        o = void 0;try {
      for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) {}
    } catch (t) {
      i = !0, o = t;
    } finally {
      try {
        r || null == a.return || a.return();
      } finally {
        if (i) throw o;
      }
    }return n;
  };
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}, function (t, e, n) {
  (function (e) {
    var n;n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n;
  }).call(this, n(7));
}, function (t, e) {}, function (t, e, n) {
  "use strict";
  var r = n(4),
      i = n(22),
      o = n(6).Buffer,
      s = new Array(16);function a() {
    i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
  }function u(t, e) {
    return t << e | t >>> 32 - e;
  }function c(t, e, n, r, i, o, s) {
    return u(t + (e & n | ~e & r) + i + o | 0, s) + e | 0;
  }function h(t, e, n, r, i, o, s) {
    return u(t + (e & r | n & ~r) + i + o | 0, s) + e | 0;
  }function f(t, e, n, r, i, o, s) {
    return u(t + (e ^ n ^ r) + i + o | 0, s) + e | 0;
  }function l(t, e, n, r, i, o, s) {
    return u(t + (n ^ (e | ~r)) + i + o | 0, s) + e | 0;
  }r(a, i), a.prototype._update = function () {
    for (var t = s, e = 0; e < 16; ++e) {
      t[e] = this._block.readInt32LE(4 * e);
    }var n = this._a,
        r = this._b,
        i = this._c,
        o = this._d;n = c(n, r, i, o, t[0], 3614090360, 7), o = c(o, n, r, i, t[1], 3905402710, 12), i = c(i, o, n, r, t[2], 606105819, 17), r = c(r, i, o, n, t[3], 3250441966, 22), n = c(n, r, i, o, t[4], 4118548399, 7), o = c(o, n, r, i, t[5], 1200080426, 12), i = c(i, o, n, r, t[6], 2821735955, 17), r = c(r, i, o, n, t[7], 4249261313, 22), n = c(n, r, i, o, t[8], 1770035416, 7), o = c(o, n, r, i, t[9], 2336552879, 12), i = c(i, o, n, r, t[10], 4294925233, 17), r = c(r, i, o, n, t[11], 2304563134, 22), n = c(n, r, i, o, t[12], 1804603682, 7), o = c(o, n, r, i, t[13], 4254626195, 12), i = c(i, o, n, r, t[14], 2792965006, 17), n = h(n, r = c(r, i, o, n, t[15], 1236535329, 22), i, o, t[1], 4129170786, 5), o = h(o, n, r, i, t[6], 3225465664, 9), i = h(i, o, n, r, t[11], 643717713, 14), r = h(r, i, o, n, t[0], 3921069994, 20), n = h(n, r, i, o, t[5], 3593408605, 5), o = h(o, n, r, i, t[10], 38016083, 9), i = h(i, o, n, r, t[15], 3634488961, 14), r = h(r, i, o, n, t[4], 3889429448, 20), n = h(n, r, i, o, t[9], 568446438, 5), o = h(o, n, r, i, t[14], 3275163606, 9), i = h(i, o, n, r, t[3], 4107603335, 14), r = h(r, i, o, n, t[8], 1163531501, 20), n = h(n, r, i, o, t[13], 2850285829, 5), o = h(o, n, r, i, t[2], 4243563512, 9), i = h(i, o, n, r, t[7], 1735328473, 14), n = f(n, r = h(r, i, o, n, t[12], 2368359562, 20), i, o, t[5], 4294588738, 4), o = f(o, n, r, i, t[8], 2272392833, 11), i = f(i, o, n, r, t[11], 1839030562, 16), r = f(r, i, o, n, t[14], 4259657740, 23), n = f(n, r, i, o, t[1], 2763975236, 4), o = f(o, n, r, i, t[4], 1272893353, 11), i = f(i, o, n, r, t[7], 4139469664, 16), r = f(r, i, o, n, t[10], 3200236656, 23), n = f(n, r, i, o, t[13], 681279174, 4), o = f(o, n, r, i, t[0], 3936430074, 11), i = f(i, o, n, r, t[3], 3572445317, 16), r = f(r, i, o, n, t[6], 76029189, 23), n = f(n, r, i, o, t[9], 3654602809, 4), o = f(o, n, r, i, t[12], 3873151461, 11), i = f(i, o, n, r, t[15], 530742520, 16), n = l(n, r = f(r, i, o, n, t[2], 3299628645, 23), i, o, t[0], 4096336452, 6), o = l(o, n, r, i, t[7], 1126891415, 10), i = l(i, o, n, r, t[14], 2878612391, 15), r = l(r, i, o, n, t[5], 4237533241, 21), n = l(n, r, i, o, t[12], 1700485571, 6), o = l(o, n, r, i, t[3], 2399980690, 10), i = l(i, o, n, r, t[10], 4293915773, 15), r = l(r, i, o, n, t[1], 2240044497, 21), n = l(n, r, i, o, t[8], 1873313359, 6), o = l(o, n, r, i, t[15], 4264355552, 10), i = l(i, o, n, r, t[6], 2734768916, 15), r = l(r, i, o, n, t[13], 1309151649, 21), n = l(n, r, i, o, t[4], 4149444226, 6), o = l(o, n, r, i, t[11], 3174756917, 10), i = l(i, o, n, r, t[2], 718787259, 15), r = l(r, i, o, n, t[9], 3951481745, 21), this._a = this._a + n | 0, this._b = this._b + r | 0, this._c = this._c + i | 0, this._d = this._d + o | 0;
  }, a.prototype._digest = function () {
    this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();var t = o.allocUnsafe(16);return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t;
  }, t.exports = a;
}, function (t, e, n) {
  "use strict";
  e.byteLength = function (t) {
    var e = c(t),
        n = e[0],
        r = e[1];return 3 * (n + r) / 4 - r;
  }, e.toByteArray = function (t) {
    for (var e, n = c(t), r = n[0], s = n[1], a = new o(function (t, e, n) {
      return 3 * (e + n) / 4 - n;
    }(0, r, s)), u = 0, h = s > 0 ? r - 4 : r, f = 0; f < h; f += 4) {
      e = i[t.charCodeAt(f)] << 18 | i[t.charCodeAt(f + 1)] << 12 | i[t.charCodeAt(f + 2)] << 6 | i[t.charCodeAt(f + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;
    }2 === s && (e = i[t.charCodeAt(f)] << 2 | i[t.charCodeAt(f + 1)] >> 4, a[u++] = 255 & e);1 === s && (e = i[t.charCodeAt(f)] << 10 | i[t.charCodeAt(f + 1)] << 4 | i[t.charCodeAt(f + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e);return a;
  }, e.fromByteArray = function (t) {
    for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) {
      o.push(h(t, s, s + 16383 > a ? a : s + 16383));
    }1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));return o.join("");
  };for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) {
    r[a] = s[a], i[s.charCodeAt(a)] = a;
  }function c(t) {
    var e = t.length;if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");var n = t.indexOf("=");return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4];
  }function h(t, e, n) {
    for (var i, o, s = [], a = e; a < n; a += 3) {
      i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
    }return s.join("");
  }i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
}, function (t, e) {
  e.read = function (t, e, n, r, i) {
    var o,
        s,
        a = 8 * i - r - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        h = -7,
        f = n ? i - 1 : 0,
        l = n ? -1 : 1,
        d = t[e + f];for (f += l, o = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; o = 256 * o + t[e + f], f += l, h -= 8) {}for (s = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; s = 256 * s + t[e + f], f += l, h -= 8) {}if (0 === o) o = 1 - c;else {
      if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);s += Math.pow(2, r), o -= c;
    }return (d ? -1 : 1) * s * Math.pow(2, o - r);
  }, e.write = function (t, e, n, r, i, o) {
    var s,
        a,
        u,
        c = 8 * o - i - 1,
        h = (1 << c) - 1,
        f = h >> 1,
        l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        d = r ? 0 : o - 1,
        p = r ? 1 : -1,
        g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + f >= 1 ? l / u : l * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + d] = 255 & a, d += p, a /= 256, i -= 8) {}for (s = s << i | a, c += i; c > 0; t[n + d] = 255 & s, d += p, s /= 256, c -= 8) {}t[n + d - p] |= 128 * g;
  };
}, function (t, e) {}, function (t, e, n) {
  "use strict";
  var r = n(6).Buffer,
      i = n(46);t.exports = function () {
    function t() {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.head = null, this.tail = null, this.length = 0;
    }return t.prototype.push = function (t) {
      var e = { data: t, next: null };this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
    }, t.prototype.unshift = function (t) {
      var e = { data: t, next: this.head };0 === this.length && (this.tail = e), this.head = e, ++this.length;
    }, t.prototype.shift = function () {
      if (0 !== this.length) {
        var t = this.head.data;return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
      }
    }, t.prototype.clear = function () {
      this.head = this.tail = null, this.length = 0;
    }, t.prototype.join = function (t) {
      if (0 === this.length) return "";for (var e = this.head, n = "" + e.data; e = e.next;) {
        n += t + e.data;
      }return n;
    }, t.prototype.concat = function (t) {
      if (0 === this.length) return r.alloc(0);if (1 === this.length) return this.head.data;for (var e, n, i, o = r.allocUnsafe(t >>> 0), s = this.head, a = 0; s;) {
        e = s.data, n = o, i = a, e.copy(n, i), a += s.data.length, s = s.next;
      }return o;
    }, t;
  }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function () {
    var t = i.inspect({ length: this.length });return this.constructor.name + " " + t;
  });
}, function (t, e) {}, function (t, e, n) {
  (function (t) {
    var r = void 0 !== t && t || "undefined" != typeof self && self || window,
        i = Function.prototype.apply;function o(t, e) {
      this._id = t, this._clearFn = e;
    }e.setTimeout = function () {
      return new o(i.call(setTimeout, r, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new o(i.call(setInterval, r, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
      this._clearFn.call(r, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);var e = t._idleTimeout;e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, n(48), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
  }).call(this, n(7));
}, function (t, e, n) {
  (function (t, e) {
    !function (t, n) {
      "use strict";
      if (!t.setImmediate) {
        var r,
            i,
            o,
            s,
            a,
            u = 1,
            c = {},
            h = !1,
            f = t.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(t);l = l && l.setTimeout ? l : t, "[object process]" === {}.toString.call(t.process) ? r = function r(t) {
          e.nextTick(function () {
            p(t);
          });
        } : !function () {
          if (t.postMessage && !t.importScripts) {
            var e = !0,
                n = t.onmessage;return t.onmessage = function () {
              e = !1;
            }, t.postMessage("", "*"), t.onmessage = n, e;
          }
        }() ? t.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function (t) {
          p(t.data);
        }, r = function r(t) {
          o.port2.postMessage(t);
        }) : f && "onreadystatechange" in f.createElement("script") ? (i = f.documentElement, r = function r(t) {
          var e = f.createElement("script");e.onreadystatechange = function () {
            p(t), e.onreadystatechange = null, i.removeChild(e), e = null;
          }, i.appendChild(e);
        }) : r = function r(t) {
          setTimeout(p, 0, t);
        } : (s = "setImmediate$" + Math.random() + "$", a = function a(e) {
          e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && p(+e.data.slice(s.length));
        }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), r = function r(e) {
          t.postMessage(s + e, "*");
        }), l.setImmediate = function (t) {
          "function" != typeof t && (t = new Function("" + t));for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
            e[n] = arguments[n + 1];
          }var i = { callback: t, args: e };return c[u] = i, r(u), u++;
        }, l.clearImmediate = d;
      }function d(t) {
        delete c[t];
      }function p(t) {
        if (h) setTimeout(p, 0, t);else {
          var e = c[t];if (e) {
            h = !0;try {
              !function (t) {
                var e = t.callback,
                    r = t.args;switch (r.length) {case 0:
                    e();break;case 1:
                    e(r[0]);break;case 2:
                    e(r[0], r[1]);break;case 3:
                    e(r[0], r[1], r[2]);break;default:
                    e.apply(n, r);}
              }(e);
            } finally {
              d(t), h = !1;
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === t ? this : t : self);
  }).call(this, n(7), n(11));
}, function (t, e, n) {
  (function (e) {
    function n(t) {
      try {
        if (!e.localStorage) return !1;
      } catch (t) {
        return !1;
      }var n = e.localStorage[t];return null != n && "true" === String(n).toLowerCase();
    }t.exports = function (t, e) {
      if (n("noDeprecation")) return t;var r = !1;return function () {
        if (!r) {
          if (n("throwDeprecation")) throw new Error(e);n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
        }return t.apply(this, arguments);
      };
    };
  }).call(this, n(7));
}, function (t, e, n) {
  "use strict";
  t.exports = o;var r = n(28),
      i = n(10);function o(t) {
    if (!(this instanceof o)) return new o(t);r.call(this, t);
  }i.inherits = n(4), i.inherits(o, r), o.prototype._transform = function (t, e, n) {
    n(null, t);
  };
}, function (t, e, n) {
  t.exports = n(19);
}, function (t, e, n) {
  t.exports = n(8);
}, function (t, e, n) {
  t.exports = n(18).Transform;
}, function (t, e, n) {
  t.exports = n(18).PassThrough;
}, function (t, e, n) {
  "use strict";
  var r = n(16).Buffer,
      i = n(4),
      o = n(22),
      s = new Array(16),
      a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
      u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
      c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
      h = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
      f = [0, 1518500249, 1859775393, 2400959708, 2840853838],
      l = [1352829926, 1548603684, 1836072691, 2053994217, 0];function d() {
    o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
  }function p(t, e) {
    return t << e | t >>> 32 - e;
  }function g(t, e, n, r, i, o, s, a) {
    return p(t + (e ^ n ^ r) + o + s | 0, a) + i | 0;
  }function y(t, e, n, r, i, o, s, a) {
    return p(t + (e & n | ~e & r) + o + s | 0, a) + i | 0;
  }function v(t, e, n, r, i, o, s, a) {
    return p(t + ((e | ~n) ^ r) + o + s | 0, a) + i | 0;
  }function w(t, e, n, r, i, o, s, a) {
    return p(t + (e & r | n & ~r) + o + s | 0, a) + i | 0;
  }function _(t, e, n, r, i, o, s, a) {
    return p(t + (e ^ (n | ~r)) + o + s | 0, a) + i | 0;
  }i(d, o), d.prototype._update = function () {
    for (var t = s, e = 0; e < 16; ++e) {
      t[e] = this._block.readInt32LE(4 * e);
    }for (var n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, o = 0 | this._d, d = 0 | this._e, b = 0 | this._a, m = 0 | this._b, k = 0 | this._c, E = 0 | this._d, S = 0 | this._e, x = 0; x < 80; x += 1) {
      var A, T;x < 16 ? (A = g(n, r, i, o, d, t[a[x]], f[0], c[x]), T = _(b, m, k, E, S, t[u[x]], l[0], h[x])) : x < 32 ? (A = y(n, r, i, o, d, t[a[x]], f[1], c[x]), T = w(b, m, k, E, S, t[u[x]], l[1], h[x])) : x < 48 ? (A = v(n, r, i, o, d, t[a[x]], f[2], c[x]), T = v(b, m, k, E, S, t[u[x]], l[2], h[x])) : x < 64 ? (A = w(n, r, i, o, d, t[a[x]], f[3], c[x]), T = y(b, m, k, E, S, t[u[x]], l[3], h[x])) : (A = _(n, r, i, o, d, t[a[x]], f[4], c[x]), T = g(b, m, k, E, S, t[u[x]], l[4], h[x])), n = d, d = o, o = p(i, 10), i = r, r = A, b = S, S = E, E = p(k, 10), k = m, m = T;
    }var I = this._b + i + E | 0;this._b = this._c + o + S | 0, this._c = this._d + d + b | 0, this._d = this._e + n + m | 0, this._e = this._a + r + k | 0, this._a = I;
  }, d.prototype._digest = function () {
    this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();var t = r.alloc ? r.alloc(20) : new r(20);return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t;
  }, t.exports = d;
}, function (t, e, n) {
  (e = t.exports = function (t) {
    t = t.toLowerCase();var n = e[t];if (!n) throw new Error(t + " is not supported (we accept pull requests)");return new n();
  }).sha = n(57), e.sha1 = n(58), e.sha224 = n(59), e.sha256 = n(29), e.sha384 = n(60), e.sha512 = n(30);
}, function (t, e, n) {
  var r = n(4),
      i = n(9),
      o = n(6).Buffer,
      s = [1518500249, 1859775393, -1894007588, -899497514],
      a = new Array(80);function u() {
    this.init(), this._w = a, i.call(this, 64, 56);
  }function c(t) {
    return t << 30 | t >>> 2;
  }function h(t, e, n, r) {
    return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r;
  }r(u, i), u.prototype.init = function () {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
  }, u.prototype._update = function (t) {
    for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, u = 0 | this._e, f = 0; f < 16; ++f) {
      n[f] = t.readInt32BE(4 * f);
    }for (; f < 80; ++f) {
      n[f] = n[f - 3] ^ n[f - 8] ^ n[f - 14] ^ n[f - 16];
    }for (var l = 0; l < 80; ++l) {
      var d = ~~(l / 20),
          p = 0 | ((e = r) << 5 | e >>> 27) + h(d, i, o, a) + u + n[l] + s[d];u = a, a = o, o = c(i), i = r, r = p;
    }this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = u + this._e | 0;
  }, u.prototype._hash = function () {
    var t = o.allocUnsafe(20);return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t;
  }, t.exports = u;
}, function (t, e, n) {
  var r = n(4),
      i = n(9),
      o = n(6).Buffer,
      s = [1518500249, 1859775393, -1894007588, -899497514],
      a = new Array(80);function u() {
    this.init(), this._w = a, i.call(this, 64, 56);
  }function c(t) {
    return t << 5 | t >>> 27;
  }function h(t) {
    return t << 30 | t >>> 2;
  }function f(t, e, n, r) {
    return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r;
  }r(u, i), u.prototype.init = function () {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
  }, u.prototype._update = function (t) {
    for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, u = 0 | this._e, l = 0; l < 16; ++l) {
      n[l] = t.readInt32BE(4 * l);
    }for (; l < 80; ++l) {
      n[l] = (e = n[l - 3] ^ n[l - 8] ^ n[l - 14] ^ n[l - 16]) << 1 | e >>> 31;
    }for (var d = 0; d < 80; ++d) {
      var p = ~~(d / 20),
          g = c(r) + f(p, i, o, a) + u + n[d] + s[p] | 0;u = a, a = o, o = h(i), i = r, r = g;
    }this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = u + this._e | 0;
  }, u.prototype._hash = function () {
    var t = o.allocUnsafe(20);return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t;
  }, t.exports = u;
}, function (t, e, n) {
  var r = n(4),
      i = n(29),
      o = n(9),
      s = n(6).Buffer,
      a = new Array(64);function u() {
    this.init(), this._w = a, o.call(this, 64, 56);
  }r(u, i), u.prototype.init = function () {
    return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
  }, u.prototype._hash = function () {
    var t = s.allocUnsafe(28);return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t;
  }, t.exports = u;
}, function (t, e, n) {
  var r = n(4),
      i = n(30),
      o = n(9),
      s = n(6).Buffer,
      a = new Array(160);function u() {
    this.init(), this._w = a, o.call(this, 128, 112);
  }r(u, i), u.prototype.init = function () {
    return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
  }, u.prototype._hash = function () {
    var t = s.allocUnsafe(48);function e(e, n, r) {
      t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
    }return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t;
  }, t.exports = u;
}, function (t, e, n) {
  var r = n(6).Buffer,
      i = n(24).Transform,
      o = n(20).StringDecoder;function s(t) {
    i.call(this), this.hashMode = "string" == typeof t, this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
  }n(4)(s, i), s.prototype.update = function (t, e, n) {
    "string" == typeof t && (t = r.from(t, e));var i = this._update(t);return this.hashMode ? this : (n && (i = this._toString(i, n)), i);
  }, s.prototype.setAutoPadding = function () {}, s.prototype.getAuthTag = function () {
    throw new Error("trying to get auth tag in unsupported state");
  }, s.prototype.setAuthTag = function () {
    throw new Error("trying to set auth tag in unsupported state");
  }, s.prototype.setAAD = function () {
    throw new Error("trying to set aad in unsupported state");
  }, s.prototype._transform = function (t, e, n) {
    var r;try {
      this.hashMode ? this._update(t) : this.push(this._update(t));
    } catch (t) {
      r = t;
    } finally {
      n(r);
    }
  }, s.prototype._flush = function (t) {
    var e;try {
      this.push(this.__final());
    } catch (t) {
      e = t;
    }t(e);
  }, s.prototype._finalOrDigest = function (t) {
    var e = this.__final() || r.alloc(0);return t && (e = this._toString(e, t, !0)), e;
  }, s.prototype._toString = function (t, e, n) {
    if (this._decoder || (this._decoder = new o(e), this._encoding = e), this._encoding !== e) throw new Error("can't switch encodings");var r = this._decoder.write(t);return n && (r += this._decoder.end()), r;
  }, t.exports = s;
}, function (t, e) {
  t.exports = function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;
  };
}, function (t, e) {
  function n(e, r) {
    return t.exports = n = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    }, n(e, r);
  }t.exports = n;
}, function (t, e, n) {
  "use strict";
  n.r(e);var r = {};n.r(r), n.d(r, "BLOCKCHAIN_SUPPORT", function () {
    return d;
  }), n.d(r, "WALLET_SUPPORT", function () {
    return p;
  });var i,
      o = n(1),
      s = n.n(o),
      a = n(5),
      u = n.n(a),
      c = n(2),
      h = n.n(c),
      f = n(3),
      l = n.n(f),
      d = "blockchain_support",
      p = "wallet_support",
      g = new (function () {
    function t() {
      h()(this, t), this.plugins = [];
    }return l()(t, [{ key: "loadPlugin", value: function value(t) {
        this.plugin(t.name) || this.plugins.push(t);
      } }, { key: "wallets", value: function value() {
        return this.plugins.filter(function (t) {
          return t.type === p;
        });
      } }, { key: "signatureProviders", value: function value() {
        return this.plugins.filter(function (t) {
          return t.type === d;
        });
      } }, { key: "supportedBlockchains", value: function value() {
        return this.signatureProviders().map(function () {
          return name;
        });
      } }, { key: "plugin", value: function value(t) {
        return this.plugins.find(function (e) {
          return e.name === t;
        });
      } }, { key: "endorsedNetworks", value: function () {
        var t = u()(s.a.mark(function t() {
          return s.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return t.next = 2, Promise.all(this.signatureProviders().map(function () {
                    var t = u()(s.a.mark(function t(e) {
                      return s.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {case 0:
                              return t.next = 2, e.getEndorsedNetwork();case 2:
                              return t.abrupt("return", t.sent);case 3:case "end":
                              return t.stop();}
                        }
                      }, t);
                    }));return function () {
                      return t.apply(this, arguments);
                    };
                  }()));case 2:
                  return t.abrupt("return", t.sent);case 3:case "end":
                  return t.stop();}
            }
          }, t, this);
        }));return function () {
          return t.apply(this, arguments);
        };
      }() }]), t;
  }())(),
      y = n(21),
      v = n.n(y),
      w = n(31),
      _ = n.n(w),
      b = {},
      m = function m() {
    return "undefined" == typeof window ? { localStorage: { setItem: function setItem(t, e) {
          return b[t] = e;
        }, getItem: function getItem(t) {
          return b[t] || null;
        }, removeItem: function removeItem(t) {
          return delete b[t];
        } } } : window;
  },
      k = function () {
    function t() {
      h()(this, t);
    }return l()(t, null, [{ key: "setAppKey", value: function value(t) {
        m().localStorage.setItem("appkey", t);
      } }, { key: "getAppKey", value: function value() {
        return m().localStorage.getItem("appkey");
      } }, { key: "removeAppKey", value: function value() {
        return m().localStorage.removeItem("appkey");
      } }, { key: "setNonce", value: function value(t) {
        m().localStorage.setItem("nonce", t);
      } }, { key: "getNonce", value: function value() {
        return m().localStorage.getItem("nonce");
      } }, { key: "removeNonce", value: function value() {
        return m().localStorage.removeItem("nonce");
      } }]), t;
  }(),
      E = n(32),
      S = n.n(E),
      x = n(33),
      A = n.n(x),
      T = n(34),
      I = n.n(T),
      R = null,
      O = !1,
      P = !1,
      B = [],
      L = function L(t) {
    return A()("sha256").update(t).digest("hex");
  },
      C = function C() {
    var t = new Uint8Array(24);return S()(t), t.join("");
  },
      M = function M() {
    var t;return "www." === (t = "undefined" == typeof location ? i : location.hasOwnProperty("hostname") && location.hostname.length && "localhost" !== location.hostname ? location.hostname : i).substr(0, 4) && (t = t.replace("www.", "")), t;
  },
      j = k.getAppKey();j || (j = "appkey:" + C());var N,
      U = function U() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;null === t && null === e ? R.send("40/Cocos-BCX") : R.send("42/Cocos-BCX," + JSON.stringify([t, e]));
  },
      F = null,
      D = function D() {
    var t = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];return new Promise(function (e, n) {
      F = { resolve: e, reject: n }, U("pair", { data: { appkey: j, origin: M(), passthrough: t }, plugin: i });
    });
  },
      q = {},
      W = function () {
    function t() {
      h()(this, t);
    }return l()(t, null, [{ key: "init", value: function value(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 6e5;i = t, this.timeout = e;
      } }, { key: "getOrigin", value: function value() {
        return M();
      } }, { key: "addEventHandler", value: function value(t, e) {
        e || (e = "app"), q[e] = t;
      } }, { key: "removeEventHandler", value: function value(t) {
        t || (t = "app"), delete q[t];
      } }, { key: "link", value: function value() {
        var t = this;return Promise.race([new Promise(function (e) {
          return setTimeout(function () {
            O || (e(!1), R && (R.disconnect(), R = null));
          }, t.timeout);
        }), new Promise(function () {
          var t = u()(s.a.mark(function t(e) {
            var n, r;return s.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {case 0:
                    return n = function n() {
                      R.onmessage = function (i) {
                        if (-1 === i.data.indexOf("42/Cocos-BCX")) return !1;var o = JSON.parse(i.data.replace("42/Cocos-BCX,", "")),
                            s = _()(o, 2),
                            a = s[0],
                            u = s[1];return "paired" === a ? t(u) : "rekey" === a ? e() : "api" === a ? n(u) : "event" === a ? r(u) : void 0;
                      };var t = function t(_t) {
                        if (P = _t) {
                          var e = k.getAppKey(),
                              n = -1 < j.indexOf("appkey:") ? L(j) : j;e && e === n || (k.setAppKey(n), j = k.getAppKey());
                        }F.resolve(_t);
                      },
                          e = function e() {
                        j = "appkey:" + C(), U("rekeyed", { data: { appkey: j, origin: M() }, plugin: i });
                      },
                          n = function n(t) {
                        if (t) {
                          var e = B.find(function (e) {
                            return e.id === t.id;
                          });if (e) B = B.filter(function (e) {
                            return e.id !== t.id;
                          }), "object" === v()(t.result) && null !== t.result && t.result.hasOwnProperty("isError") ? e.reject(t.result) : e.resolve(t.result);
                        }
                      },
                          r = function r(t) {
                        var e = t.event,
                            n = t.payload;Object.keys(q).length && Object.keys(q).map(function (t) {
                          q[t](e, n);
                        });
                      };
                    }, r = function r() {
                      var t,
                          r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;r || (t = new Promise(function (t) {
                        return r = t;
                      }));var i = "".concat("ws://").concat("127.0.0.1:50005").concat("/socket.io/?EIO=3&transport=websocket"),
                          o = new I.a(i);return o.onerror = function () {
                        e(!1), r(!1);
                      }, o.onopen = function () {
                        R = o, U(), clearTimeout(null), O = !0, D(!0).then(function () {
                          e(!0), r(!0);
                        }), n();
                      }, t;
                    }, t.next = 4, r();case 4:case "end":
                    return t.stop();}
              }
            }, t);
          }));return function () {
            return t.apply(this, arguments);
          };
        }())]);
      } }, { key: "isConnected", value: function value() {
        return O;
      } }, { key: "isPaired", value: function value() {
        return P;
      } }, { key: "disconnect", value: function value() {
        return R && R.close(), !0;
      } }, { key: "removeAppKeys", value: function value() {
        k.removeAppKey(), k.removeNonce();
      } }, { key: "sendApiRequest", value: function value(t) {
        return new Promise(function (e, n) {
          return "identityFromPermissions" !== t.type || P ? void D().then(function () {
            if (!P) return n({ code: "not_paired", message: "The user did not allow this app to connect to their Cocos" });t.id = C(), t.appkey = j, t.nonce = k.getNonce() || 0;var r = C();t.nextNonce = L(r), k.setNonce(r), t.hasOwnProperty("payload") && !t.payload.hasOwnProperty("origin") && (t.payload.origin = M()), B.push(Object.assign(t, { resolve: e, reject: n })), U("api", { data: t, plugin: i });
          }) : e(!1);
        });
      } }]), t;
  }(),
      Y = function () {
    function t() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";h()(this, t), this.name = e, this.type = n;
    }return l()(t, [{ key: "isSignatureProvider", value: function value() {
        return this.type === d;
      } }, { key: "isValid", value: function value() {
        return Object.keys(r).map(function (t) {
          return r[t];
        }).includes(this.type);
      } }], [{ key: "placeholder", value: function value() {
        return new t();
      } }, { key: "fromJson", value: function value(e) {
        return Object.assign(t.placeholder(), e);
      } }]), t;
  }(),
      H = { EOS: "eos", ETH: "eth", TRX: "trx", COCOSBCX: "cocosBcx" },
      z = (Object.keys(H).map(function (t) {
    return { key: t, value: H[t] };
  }), function () {
    function t() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : H.EOS,
          n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
          i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
          o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;h()(this, t), this.blockchain = e, this.contract = n, this.symbol = r, this.name = i || r, this.decimals = o;
    }return l()(t, null, [{ key: "placeholder", value: function value() {
        return new t();
      } }, { key: "fromJson", value: function value(t) {
        return Object.assign(this.placeholder(), t);
      } }]), t;
  }()),
      K = function () {
    function t() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "https",
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
          i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
          o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : H.EOS,
          s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "";h()(this, t), this.name = e, this.protocol = n, this.host = r, this.port = i, this.blockchain = o, this.chainId = s.toString(), this.token = null;
    }return l()(t, [{ key: "fullhost", value: function value() {
        return "".concat(this.protocol, "://").concat(this.host).concat(this.port ? ":" : "").concat(this.port);
      } }, { key: "unique", value: function value() {
        return ("".concat(this.blockchain, ":") + (this.chainId.length ? "chain:".concat(this.chainId) : "".concat(this.host, ":").concat(this.port))).toLowerCase();
      } }], [{ key: "placeholder", value: function value() {
        return new t();
      } }, { key: "fromJson", value: function value(e) {
        var n = Object.assign(t.placeholder(), e);return n.chainId = n.chainId ? n.chainId.toString() : "", n.token = e.hasOwnProperty("token") && e.token ? z.fromJson(e.token) : null, n;
      } }]), t;
  }(),
      V = n(0),
      J = n.n(V),
      X = { disconnect: "disconnect", isConnected: "isConnected", isPaired: "isPaired", addEventHandler: "addEventHandler", removeEventHandler: "removeEventHandler", listen: "listen", getAccountInfo: "getAccountInfo", getVersion: "getVersion", getIdentity: "getIdentity", getIdentityFromPermissions: "getIdentityFromPermissions", forgetIdentity: "forgetIdentity", updateIdentity: "updateIdentity", authenticate: "authenticate", getArbitrarySignature: "getArbitrarySignature", getPublicKey: "getPublicKey", linkAccount: "linkAccount", hasAccountFor: "hasAccountFor", suggestNetwork: "suggestNetwork", requestTransfer: "requestTransfer", requestSignature: "requestSignature", createTransaction: "createTransaction", addToken: "addToken", transferAsset: "transferAsset", callContractFunction: "callContractFunction", creatNHAssetOrder: "creatNHAssetOrder", transferNHAsset: "transferNHAsset", fillNHAssetOrder: "fillNHAssetOrder", cancelNHAssetOrder: "cancelNHAssetOrder" },
      G = (N = {}, J()(N, X.getIdentity, "login"), J()(N, X.forgetIdentity, "logout"), J()(N, X.getIdentityFromPermissions, "checkLogin"), N),
      $ = function () {
    function t(e, n, r) {
      h()(this, t);var i = function i(t) {
        return function () {
          throw new Error("".concat(e, " does not support the ").concat(t, " method."));
        };
      };Object.keys(X).map(function (t) {
        return function (t, e) {
          void 0 === r[e] && (r[e] = t || i(e)), G[e] && void 0 === r[G[e]] && (r[G[e]] = r[e] ? r[e] : i(e));
        }(n[t], t);
      });
    }return l()(t, null, [{ key: "bindBasics", value: function value(t) {
        t.account = function () {
          return t.account_name ? t.account_name : void 0;
        };
      } }]), t;
  }(),
      Q = n(13),
      Z = n.n(Q),
      tt = n(14),
      et = n.n(tt),
      nt = n(15),
      rt = n.n(nt),
      it = function (t) {
    function e(t, n) {
      var r;return h()(this, e), (r = Z()(this, et()(e).call(this, H.EOS, p))).name = "CocosSockets", r.context = t, r.holderFns = n, r;
    }return rt()(e, t), l()(e, [{ key: "connect", value: function value(t) {
        var e = this,
            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return new Promise(function (r) {
          if (!t || !t.length) throw new Error("You must specify a name for this connection");n = Object.assign({ initTimeout: 1e4, linkTimeout: 3e4 }, n), W.init(t, n.linkTimeout), W.link().then(function () {
            var t = u()(s.a.mark(function t(n) {
              return s.a.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {case 0:
                      if (n) {
                        t.next = 2;break;
                      }return t.abrupt("return", !1);case 2:
                      return e.holderFns.get().isExtension = !1, e.holderFns.get().wallet || (e.holderFns.get().wallet = e.name), t.abrupt("return", r(!0));case 5:case "end":
                      return t.stop();}
                }
              }, t);
            }));return function () {
              return t.apply(this, arguments);
            };
          }());
        });
      } }, { key: "runAfterInterfacing", value: function () {
        var t = u()(s.a.mark(function t() {
          var e = this;return s.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return this.holderFns.get().addEventHandler(function (t, n) {
                    return e.eventHandler(t, n);
                  }, "internal"), t.next = 3, this.holderFns.get().getIdentityFromPermissions();case 3:
                  return this.holderFns.get().account_name = t.sent, t.abrupt("return", !0);case 5:case "end":
                  return t.stop();}
            }
          }, t, this);
        }));return function () {
          return t.apply(this, arguments);
        };
      }() }, { key: "methods", value: function value() {
        var t,
            e = this,
            n = function n(t, _n) {
          return (t || _n) && (e.holderFns.get().account_name = t), _n || t;
        };return t = {}, J()(t, X.disconnect, function () {
          return W.disconnect();
        }), J()(t, X.isConnected, function () {
          return W.isConnected();
        }), J()(t, X.isPaired, function () {
          return W.isPaired();
        }), J()(t, X.addEventHandler, function (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;return W.addEventHandler(t, e);
        }), J()(t, X.removeEventHandler, function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;return W.removeEventHandler(t);
        }), J()(t, X.listen, function (t) {
          return W.addEventHandler(t);
        }), J()(t, X.getVersion, function () {
          return W.sendApiRequest({ type: "getVersion", payload: {} });
        }), J()(t, X.getIdentity, function (t) {
          return W.sendApiRequest({ type: "getOrRequestIdentity", payload: { fields: t || { accounts: [e.holderFns.get().network] } } }).then(n);
        }), J()(t, X.getIdentityFromPermissions, function () {
          return W.sendApiRequest({ type: "identityFromPermissions", payload: {} }).then(n);
        }), J()(t, X.lockAccount, function () {
          return W.sendApiRequest({ type: "lockAccount", payload: {} }).then(n);
        }), J()(t, X.forgetIdentity, function () {
          return W.sendApiRequest({ type: "forgetIdentity", payload: {} }).then(function (t) {
            return n(null, t);
          });
        }), J()(t, X.updateIdentity, function (t) {
          var e = t.name,
              r = t.kyc;return W.sendApiRequest({ type: "updateIdentity", payload: { name: e, kyc: r } }).then(function (t) {
            return t ? n(t) : null;
          });
        }), J()(t, X.authenticate, function (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
              n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;return W.sendApiRequest({ type: "authenticate", payload: { nonce: t, data: e, publicKey: n } });
        }), J()(t, X.getArbitrarySignature, function (t, e) {
          return W.sendApiRequest({ type: "requestArbitrarySignature", payload: { publicKey: t, data: e } });
        }), J()(t, X.getPublicKey, function (t) {
          return W.sendApiRequest({ type: "getPublicKey", payload: { blockchain: t } });
        }), J()(t, X.linkAccount, function (t, n) {
          return W.sendApiRequest({ type: "linkAccount", payload: { account: t, network: n || e.holderFns.get().network } });
        }), J()(t, X.hasAccountFor, function (t) {
          return W.sendApiRequest({ type: "hasAccountFor", payload: { network: t || e.holderFns.get().network } });
        }), J()(t, X.suggestNetwork, function (t) {
          return W.sendApiRequest({ type: "requestAddNetwork", payload: { network: t || e.holderFns.get().network } });
        }), J()(t, X.requestTransfer, function (t, n, r) {
          var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};return W.sendApiRequest({ type: "requestTransfer", payload: { network: t || e.holderFns.get().network, to: n, amount: r, options: i } });
        }), J()(t, X.callContractFunction, function (t, n, r, i, o, s) {
          return W.sendApiRequest({ type: "callContractFunction", payload: { network: t || e.holderFns.get().network, nameOrId: n, functionName: r, valueList: i, runtime: o, onlyGetFee: s } });
        }), J()(t, X.creatNHAssetOrder, function (t, n, r, i, o, s, a, u) {
          return W.sendApiRequest({ type: "creatNHAssetOrder", payload: { network: t || e.holderFns.get().network, otcAccount: n, orderFee: r, NHAssetId: i, price: o, priceAssetId: s, expiration: a, memo: u } });
        }), J()(t, X.fillNHAssetOrder, function (t, n) {
          return W.sendApiRequest({ type: "fillNHAssetOrder", payload: { network: t || e.holderFns.get().network, orderId: n } });
        }), J()(t, X.cancelNHAssetOrder, function (t, n) {
          return W.sendApiRequest({ type: "cancelNHAssetOrder", payload: { network: t || e.holderFns.get().network, orderId: n } });
        }), J()(t, X.transferNHAsset, function (t, n, r) {
          return W.sendApiRequest({ type: "transferNHAsset", payload: { network: t || e.holderFns.get().network, toAccount: n, NHAssetIds: r } });
        }), J()(t, X.getAccountInfo, function (t) {
          return W.sendApiRequest({ type: "getAccountInfo", payload: { network: t || e.holderFns.get().network } });
        }), J()(t, X.requestSignature, function (t) {
          return W.sendApiRequest({ type: "requestSignature", payload: t });
        }), J()(t, X.createTransaction, function (t, n, r, i) {
          return W.sendApiRequest({ type: "createTransaction", payload: { blockchain: t, actions: n, account: r, network: i || e.holderFns.get().network } });
        }), J()(t, X.addToken, function (t, n) {
          return W.sendApiRequest({ type: "addToken", payload: { token: t, network: n || e.holderFns.get().network } });
        }), t;
      } }, { key: "eventHandler", value: function () {
        var t = u()(s.a.mark(function t(e) {
          return s.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  t.t0 = e, t.next = t.t0 === ut.Disconnected ? 3 : t.t0 === ut.LoggedOut ? 5 : 9;break;case 3:
                  return this.holderFns.get().account_name = null, t.abrupt("break", 9);case 5:
                  return t.next = 7, this.holderFns.get().getIdentityFromPermissions();case 7:
                  return this.holderFns.get().account_name = t.sent, t.abrupt("break", 9);case 9:case "end":
                  return t.stop();}
            }
          }, t, this);
        }));return function () {
          return t.apply(this, arguments);
        };
      }() }]), e;
  }(Y),
      ot = !1,
      st = function () {
    var t = u()(s.a.mark(function t() {
      var e,
          n,
          r = arguments;return s.a.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {case 0:
              return e = 0 < r.length && void 0 !== r[0] ? r[0] : null, n = 1 < r.length && void 0 !== r[1] ? r[1] : 0, t.abrupt("return", new Promise(function (t) {
                return e || (e = t), ot ? e(!0) : 5 < n ? e(!1) : void setTimeout(function () {
                  return st(e, n + 1);
                }, 100);
              }));case 3:case "end":
              return t.stop();}
        }
      }, t);
    }));return function () {
      return t.apply(this, arguments);
    };
  }(),
      at = function (t) {
    function e(t, n) {
      var r;return h()(this, e), (r = Z()(this, et()(e).call(this, H.COCOSBCX, p))).name = "CocosExtension", r.context = t, r.holderFns = n, r;
    }return rt()(e, t), l()(e, [{ key: "connect", value: function value() {
        var t = this;return "undefined" != typeof window && "undefined" != typeof document && (void 0 !== window.BcxWeb && void 0 !== window.BcxWeb.BCX || void 0 !== window.BcxWeb && void 0 !== window.BcxWeb.getAccountInfo() ? ot = !0 : document.addEventListener("cocosLoaded", function () {
          return ot = !0;
        })), new Promise(function () {
          var e = u()(s.a.mark(function e(n) {
            return s.a.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {case 0:
                    return e.next = 2, st();case 2:
                    e.sent && (!t.holderFns.get().wallet && (t.holderFns.get().wallet = t.name), n(!0));case 4:case "end":
                    return e.stop();}
              }
            }, e);
          }));return function () {
            return e.apply(this, arguments);
          };
        }());
      } }, { key: "runBeforeInterfacing", value: function () {
        var t = u()(s.a.mark(function t() {
          var e;return s.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return this.holderFns.get().wallet === this.name && (window.BcxWeb.wallet = this.name, e = this.holderFns.get(), void 0 === window.BcxWeb ? void 0 !== window.BcxWeb && void 0 !== window.BcxWeb.getAccountInfo() && (e.cocosBcx = function () {
                    return window.BcxWeb;
                  }) : e.cocosBcx = function () {
                    return window.BcxWeb;
                  }), this.holderFns.set(e), this.context = this.holderFns.get(), t.abrupt("return", !0);case 4:case "end":
                  return t.stop();}
            }
          }, t, this);
        }));return function () {
          return t.apply(this, arguments);
        };
      }() }, { key: "runAfterInterfacing", value: function () {
        var t = u()(s.a.mark(function t() {
          return s.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return this.context.isExtension = !0, t.abrupt("return", !0);case 2:case "end":
                  return t.stop();}
            }
          }, t, this);
        }));return function () {
          return t.apply(this, arguments);
        };
      }() }, { key: "methods", value: function value() {
        return J()({}, X.getIdentity, function () {
          console.log("getid");
        });
      } }]), e;
  }(Y);n.d(e, "EVENTS", function () {
    return ut;
  }), n.d(e, "Plugin", function () {
    return Y;
  }), n.d(e, "PluginTypes", function () {
    return r;
  }), n.d(e, "Blockchains", function () {
    return H;
  }), n.d(e, "Network", function () {
    return K;
  }), n.d(e, "SocketService", function () {
    return W;
  }), n.d(e, "WalletInterface", function () {
    return $;
  }), n.d(e, "WALLET_METHODS", function () {
    return X;
  });var ut = { Disconnected: "dced", LoggedOut: "logout" },
      ct = [],
      ht = {},
      ft = function () {
    function t() {
      h()(this, t), this.account_name = null, this.network = null, g.loadPlugin(new it(this, ht)), g.loadPlugin(new at(this, ht));
    }return l()(t, [{ key: "loadPlugin", value: function value(t) {
        if (!t.isValid()) throw new Error("".concat(t.name, " doesn't seem to be a valid CocosJS plugin."));g.loadPlugin(t), t.type === d && (this[t.name] = t.signatureProvider(function () {
          if (!ht.get().account_name) throw new Error("No Identity");
        }, function () {
          return ht.get().account_name;
        }), this[t.name + "Hook"] = t.hookProvider, ct.push(t.setSocketService)), t.type === p && t.init(this, ht, ct);
      } }, { key: "connect", value: function () {
        var t = u()(s.a.mark(function t(e, n) {
          var r;return s.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return n || (n = {}), this.network = n.hasOwnProperty("network") ? n.network : null, r = g.wallets(), t.next = 5, Promise.race(r.map(function (t) {
                    return t.connect(e, n).then(u()(s.a.mark(function e() {
                      return s.a.wrap(function (e) {
                        for (;;) {
                          switch (e.prev = e.next) {case 0:
                              if ("function" != typeof t.runBeforeInterfacing) {
                                e.next = 3;break;
                              }return e.next = 3, t.runBeforeInterfacing();case 3:
                              if (new $(t.name, t.methods(), ht.get()), "function" != typeof t.runAfterInterfacing) {
                                e.next = 7;break;
                              }return e.next = 7, t.runAfterInterfacing();case 7:
                              return $.bindBasics(ht.get()), e.abrupt("return", !0);case 9:case "end":
                              return e.stop();}
                        }
                      }, e);
                    })));
                  }).concat(new Promise(function (t) {
                    return setTimeout(function () {
                      return t(!1);
                    }, n.initTimeout || 5e3);
                  })));case 5:
                  return t.abrupt("return", t.sent);case 6:case "end":
                  return t.stop();}
            }
          }, t, this);
        }));return function () {
          return t.apply(this, arguments);
        };
      }() }]), t;
  }(),
      lt = new Proxy(new (function () {
    function t(e) {
      h()(this, t), this.cocos = e;
    }return l()(t, [{ key: "plugins", value: function value() {
        var t = this;if (!this.cocos.isExtension) {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) {
            n[r] = arguments[r];
          }n.map(function (e) {
            return t.cocos.loadPlugin(e);
          });
        }
      } }, { key: "connect", value: function value() {
        var t;return (t = this.cocos).connect.apply(t, arguments);
      } }, { key: "catchAll", value: function value() {} }]), t;
  }())(new ft()), { get: function get(t, e) {
      return void 0 === t[e] ? t.cocos[e] : t[e];
    } });ht.set = function (t) {
    return lt.cocos = t;
  }, ht.get = function () {
    return lt.cocos;
  }, "undefined" != typeof window && (window.Cocosjs = lt), lt.Plugin = Y, lt.PluginTypes = r, lt.Blockchains = H, lt.Network = K, lt.Token = z, lt.SocketService = W, lt.EVENTS = ut, lt.WalletInterface = $, lt.WALLET_METHODS = X, window.Cocosjs = lt;e.default = Cocosjs;
}]);

cc._RF.pop();