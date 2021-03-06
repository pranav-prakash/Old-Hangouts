"use strict";
this.default_datachannel = this.default_datachannel || {};
(function(_) {
    var window = this;
    try {
        var aa, ba, ca, da;
        for (_.h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
                a != Array.prototype && a != Object.prototype && (a[b] = c.value)
            }, ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global ? window.global : this, ca = ["String", "prototype", "repeat"], da = 0; da < ca.length - 1; da++) {
            var ea = ca[da];
            ea in ba || (ba[ea] = {});
            ba = ba[ea]
        }
        var fa = ca[ca.length - 1],
            ga = ba[fa],
            ha = ga ? ga : function(a) {
                var b;
                if (null == this) throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");
                b = this + "";
                if (0 > a || 1342177279 < a) throw new window.RangeError("Invalid count value");
                a |= 0;
                for (var c = ""; a;)
                    if (a & 1 && (c += b), a >>>= 1) b += b;
                return c
            };
        ha != ga && null != ha && aa(ba, fa, {
            configurable: !0,
            writable: !0,
            value: ha
        });
        _.ia = _.ia || {};
        _.l = this;
        _.ja = "closure_uid_" + (1E9 * Math.random() >>> 0);
        _.m = Date.now || function() {
            return +new Date
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var ka, la, ma;
        _.n = function(a) {
            return void 0 !== a
        };
        ka = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        };
        la = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        };
        ma = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        };
        _.q = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.B = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.nc = function(a, c, f) {
                for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                return b.prototype[c].apply(a, g)
            }
        };
        _.na = function(a, b) {
            var c = a.split("."),
                d = _.l;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && _.n(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
        };
        _.oa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        };
        _.r = function(a, b, c) {
            _.r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ka;
            return _.r.apply(null, arguments)
        };
        _.pa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        };
        _.t = function(a) {
            return "function" == ma(a)
        };
        _.qa = function(a) {
            return "number" == typeof a
        };
        _.u = function(a) {
            return "string" == typeof a
        };
        _.ra = function(a) {
            var b = ma(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        };
        _.sa = function(a) {
            return "array" == ma(a)
        };
        _.ta = function() {};
        _.ua = function(a, b) {
            for (var c = a.split("."), d = b || _.l, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else return null;
            return d
        };
        _.va = function(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, _.va);
            else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        };
        _.q(_.va, Error);
        _.va.prototype.name = "CustomError";
        var wa = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
            },
            xa = function(a, b) {
                return a < b ? -1 : a > b ? 1 : 0
            };
        _.ya = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (_.u(a)) return _.u(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        };
        _.za = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = _.u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };
        _.Aa = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = _.u(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var p = g[k];
                    b.call(c, p, k, a) && (e[f++] = p)
                }
            return e
        };
        _.Ba = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = _.u(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        };
        _.Ca = Array.prototype.some ? function(a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = _.u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        };
        _.Da = function(a, b) {
            var c = (0, _.ya)(a, b),
                d;
            (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
            return d
        };
        a: {
            var Fa = _.l.navigator;
            if (Fa) {
                var Ga = Fa.userAgent;
                if (Ga) {
                    _.Ea = Ga;
                    break a
                }
            }
            _.Ea = ""
        }
        _.v = function(a) {
            return -1 != _.Ea.indexOf(a)
        };
        var Ia;
        _.Ha = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        };
        Ia = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        };
        _.Ja = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        };
        var Ka = function() {
            return (_.v("Chrome") || _.v("CriOS")) && !_.v("Edge")
        };
        _.La = function() {
            return _.v("iPhone") && !_.v("iPod") && !_.v("iPad")
        };
        var Ma = function(a) {
                Ma[" "](a);
                return a
            },
            Pa;
        Ma[" "] = _.ta;
        _.Na = function(a, b) {
            try {
                return Ma(a[b]), !0
            } catch (c) {}
            return !1
        };
        Pa = function(a, b) {
            var c = Oa;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
        var Wa, Ya, Za, Oa, eb, fb;
        _.Qa = _.v("Opera");
        _.w = _.v("Trident") || _.v("MSIE");
        _.Ta = _.v("Edge");
        _.Ua = _.v("Gecko") && !(-1 != _.Ea.toLowerCase().indexOf("webkit") && !_.v("Edge")) && !(_.v("Trident") || _.v("MSIE")) && !_.v("Edge");
        _.Va = -1 != _.Ea.toLowerCase().indexOf("webkit") && !_.v("Edge");
        Wa = _.l.navigator || null;
        _.Xa = Wa && Wa.platform || "";
        Ya = function() {
            var a = _.l.document;
            return a ? a.documentMode : void 0
        };
        a: {
            var $a = "",
                ab = function() {
                    var a = _.Ea;
                    if (_.Ua) return /rv\:([^\);]+)(\)|;)/.exec(a);
                    if (_.Ta) return /Edge\/([\d\.]+)/.exec(a);
                    if (_.w) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (_.Va) return /WebKit\/(\S+)/.exec(a);
                    if (_.Qa) return /(?:Version)[ \/]?(\S+)/.exec(a)
                }();ab && ($a = ab ? ab[1] : "");
            if (_.w) {
                var bb = Ya();
                if (null != bb && bb > (0, window.parseFloat)($a)) {
                    Za = String(bb);
                    break a
                }
            }
            Za = $a
        }
        _.cb = Za;
        Oa = {};
        _.db = function(a) {
            return Pa(a, function() {
                for (var b = 0, c = wa(String(_.cb)).split("."), d = wa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        k = d[f] || "";
                    do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                        if (0 == g[0].length && 0 == k[0].length) break;
                        b = xa(0 == g[1].length ? 0 : (0, window.parseInt)(g[1], 10), 0 == k[1].length ? 0 : (0, window.parseInt)(k[1], 10)) || xa(0 == g[2].length, 0 == k[2].length) || xa(g[2], k[2]);
                        g = g[3];
                        k = k[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        };
        eb = _.l.document;
        fb = eb && _.w ? Ya() || ("CSS1Compat" == eb.compatMode ? (0, window.parseInt)(_.cb, 10) : 5) : void 0;
        _.hb = _.v("Firefox");
        _.ib = _.La() || _.v("iPod");
        _.jb = _.v("iPad");
        _.kb = _.v("Android") && !(Ka() || _.v("Firefox") || _.v("Opera") || _.v("Silk"));
        _.lb = Ka();
        _.mb = _.v("Safari") && !(Ka() || _.v("Coast") || _.v("Opera") || _.v("Edge") || _.v("Silk") || _.v("Android")) && !(_.La() || _.v("iPad") || _.v("iPod"));
        _.nb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
        var ob, rb, sb;
        _.x = function() {};
        ob = "function" == typeof window.Uint8Array;
        _.y = function(a, b, c, d) {
            a.a = null;
            b || (b = c ? [c] : []);
            a.D = c ? String(c) : void 0;
            a.f = 0 === c ? -1 : 0;
            a.b = b;
            a: {
                if (a.b.length && (b = a.b.length - 1, (c = a.b[b]) && "object" == typeof c && !_.sa(c) && !(ob && c instanceof window.Uint8Array))) {
                    a.u = b - a.f;
                    a.c = c;
                    break a
                }
                a.u = Number.MAX_VALUE
            }
            a.C = {};
            if (d)
                for (b = 0; b < d.length; b++) c = d[b], c < a.u ? (c += a.f, a.b[c] = a.b[c] || _.pb) : a.c[c] = a.c[c] || _.pb
        };
        _.pb = [];
        _.z = function(a, b) {
            if (b < a.u) {
                var c = b + a.f,
                    d = a.b[c];
                return d === _.pb ? a.b[c] = [] : d
            }
            d = a.c[b];
            return d === _.pb ? a.c[b] = [] : d
        };
        rb = function(a) {
            if (a.a)
                for (var b in a.a) {
                    var c = a.a[b];
                    if (_.sa(c))
                        for (var d = 0; d < c.length; d++) c[d] && _.qb(c[d]);
                    else c && _.qb(c)
                }
        };
        _.qb = function(a) {
            rb(a);
            return a.b
        };
        _.x.prototype.toString = function() {
            rb(this);
            return this.b.toString()
        };
        _.A = function(a, b) {
            sb[a] = b;
            b.messageId = a
        };
        sb = {};
        _.tb = function(a) {
            return function() {
                return a
            }
        }(!0);
        _.ub = "StopIteration" in _.l ? _.l.StopIteration : {
            message: "StopIteration",
            stack: ""
        };
        _.vb = function() {};
        _.vb.prototype.next = function() {
            throw _.ub;
        };
        _.vb.prototype.Y = function() {
            return this
        };
        _.C = function(a, b) {
            this.b = {};
            this.a = [];
            this.f = this.c = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("e");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof _.C ? (c = a.M(), d = a.G()) : (c = _.Ja(a), d = Ia(a));
                for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
            }
        };
        _.h = _.C.prototype;
        _.h.ba = function() {
            return this.c
        };
        _.h.G = function() {
            wb(this);
            for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
            return a
        };
        _.h.M = function() {
            wb(this);
            return this.a.concat()
        };
        _.h.clear = function() {
            this.b = {};
            this.f = this.c = this.a.length = 0
        };
        _.h.remove = function(a) {
            return _.xb(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && wb(this), !0) : !1
        };
        var wb = function(a) {
            if (a.c != a.a.length) {
                for (var b = 0, c = 0; b < a.a.length;) {
                    var d = a.a[b];
                    _.xb(a.b, d) && (a.a[c++] = d);
                    b++
                }
                a.a.length = c
            }
            if (a.c != a.a.length) {
                for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], _.xb(e, d) || (a.a[c++] = d, e[d] = 1), b++;
                a.a.length = c
            }
        };
        _.C.prototype.get = function(a, b) {
            return _.xb(this.b, a) ? this.b[a] : b
        };
        _.C.prototype.set = function(a, b) {
            _.xb(this.b, a) || (this.c++, this.a.push(a), this.f++);
            this.b[a] = b
        };
        _.C.prototype.forEach = function(a, b) {
            for (var c = this.M(), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = this.get(e);
                a.call(b, f, e, this)
            }
        };
        _.C.prototype.Y = function(a) {
            wb(this);
            var b = 0,
                c = this.f,
                d = this,
                e = new _.vb;
            e.next = function() {
                if (c != d.f) throw Error("f");
                if (b >= d.a.length) throw _.ub;
                var e = d.a[b++];
                return a ? e : d.b[e]
            };
            return e
        };
        _.xb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        _.yb = function(a) {
            if (a.G && "function" == typeof a.G) return a.G();
            if (_.u(a)) return a.split("");
            if (_.ra(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Ia(a)
        };
        _.D = function() {
            this.K = this.K;
            this.u = this.u
        };
        _.D.prototype.K = !1;
        _.D.prototype.N = function() {
            this.K || (this.K = !0, this.v())
        };
        _.F = function(a, b) {
            _.zb(a, _.oa(_.E, b))
        };
        _.zb = function(a, b) {
            a.K ? _.n(void 0) ? b.call(void 0) : b() : (a.u || (a.u = []), a.u.push(_.n(void 0) ? (0, _.r)(b, void 0) : b))
        };
        _.D.prototype.v = function() {
            if (this.u)
                for (; this.u.length;) this.u.shift()()
        };
        _.E = function(a) {
            a && "function" == typeof a.N && a.N()
        };
        _.Ab = !_.w || 9 <= Number(fb);
        !_.Ua && !_.w || _.w && 9 <= Number(fb) || _.Ua && _.db("1.9.1");
        _.w && _.db("9");
        var Bb = !_.w || 9 <= Number(fb),
            Cb = _.w && !_.db("9");
        !_.Va || _.db("528");
        _.Ua && _.db("1.9b") || _.w && _.db("8") || _.Qa && _.db("9.5") || _.Va && _.db("528");
        _.Ua && !_.db("8") || _.w && _.db("9");
        _.Db = function(a, b) {
            this.type = a;
            this.a = this.b = b;
            this.eb = !0
        };
        _.Db.prototype.c = function() {
            this.eb = !1
        };
        var Eb = function(a, b) {
            _.Db.call(this, a ? a.type : "");
            this.f = this.state = this.a = this.b = null;
            a && this.T(a, b)
        };
        _.q(Eb, _.Db);
        Eb.prototype.T = function(a, b) {
            this.type = a.type;
            this.b = a.target || a.srcElement;
            this.a = b;
            var c = a.relatedTarget;
            c && _.Ua && _.Na(c, "nodeName");
            this.state = a.state;
            this.f = a;
            a.defaultPrevented && this.c()
        };
        Eb.prototype.c = function() {
            Eb.B.c.call(this);
            var a = this.f;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = !1, Cb) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {}
        };
        var Fb, Hb;
        Fb = "closure_listenable_" + (1E6 * Math.random() | 0);
        _.Gb = function(a) {
            return !(!a || !a[Fb])
        };
        Hb = 0;
        var Ib = function(a, b, c, d, e) {
                this.listener = a;
                this.proxy = null;
                this.src = b;
                this.type = c;
                this.ma = !!d;
                this.oa = e;
                this.key = ++Hb;
                this.removed = this.la = !1
            },
            Jb = function(a) {
                a.removed = !0;
                a.listener = null;
                a.proxy = null;
                a.src = null;
                a.oa = null
            };
        var Kb;
        Kb = function(a) {
            this.src = a;
            this.a = {};
            this.b = 0
        };
        _.Mb = function(a, b, c, d, e, f) {
            var g = b.toString();
            b = a.a[g];
            b || (b = a.a[g] = [], a.b++);
            var k = Lb(b, c, e, f); - 1 < k ? (a = b[k], d || (a.la = !1)) : (a = new Ib(c, a.src, g, !!e, f), a.la = d, b.push(a));
            return a
        };
        Kb.prototype.remove = function(a, b, c, d) {
            a = a.toString();
            if (!(a in this.a)) return !1;
            var e = this.a[a];
            b = Lb(e, b, c, d);
            return -1 < b ? (Jb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
        };
        var Nb = function(a, b) {
            var c = b.type;
            c in a.a && _.Da(a.a[c], b) && (Jb(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
        };
        Kb.prototype.removeAll = function(a) {
            a = a && a.toString();
            var b = 0,
                c;
            for (c in this.a)
                if (!a || c == a) {
                    for (var d = this.a[c], e = 0; e < d.length; e++) ++b, Jb(d[e]);
                    delete this.a[c];
                    this.b--
                }
            return b
        };
        var Ob = function(a, b, c, d, e) {
                a = a.a[b.toString()];
                b = -1;
                a && (b = Lb(a, c, d, e));
                return -1 < b ? a[b] : null
            },
            Lb = function(a, b, c, d) {
                for (var e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (!f.removed && f.listener == b && f.ma == !!c && f.oa == d) return e
                }
                return -1
            };
        var Pb, Qb, Rb, Wb, Zb, $b, Xb, bc, ac, Yb, Vb, cc;
        Pb = "closure_lm_" + (1E6 * Math.random() | 0);
        Qb = {};
        Rb = 0;
        _.Sb = function(a, b, c, d, e) {
            if (_.sa(b)) {
                for (var f = 0; f < b.length; f++) _.Sb(a, b[f], c, d, e);
                return null
            }
            c = _.Tb(c);
            return _.Gb(a) ? a.listen(b, c, d, e) : _.Ub(a, b, c, !1, d, e)
        };
        _.Ub = function(a, b, c, d, e, f) {
            if (!b) throw Error("i");
            var g = !!e,
                k = Vb(a);
            k || (a[Pb] = k = new Kb(a));
            c = _.Mb(k, b, c, d, e, f);
            if (c.proxy) return c;
            d = Wb();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, g);
            else if (a.attachEvent) a.attachEvent(Xb(b.toString()), d);
            else throw Error("j");
            Rb++;
            return c
        };
        Wb = function() {
            var a = Yb,
                b = Bb ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        };
        Zb = function(a, b, c, d, e) {
            if (_.sa(b))
                for (var f = 0; f < b.length; f++) Zb(a, b[f], c, d, e);
            else c = _.Tb(c), _.Gb(a) ? a.Ca(b, c, d, e) : a && (a = Vb(a)) && (b = Ob(a, b, c, !!d, e)) && $b(b)
        };
        $b = function(a) {
            if (_.qa(a) || !a || a.removed) return;
            var b = a.src;
            if (_.Gb(b)) {
                Nb(b.c, a);
                return
            }
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.ma) : b.detachEvent && b.detachEvent(Xb(c), d);
            Rb--;
            (c = Vb(b)) ? (Nb(c, a), 0 == c.b && (c.src = null, b[Pb] = null)) : Jb(a)
        };
        Xb = function(a) {
            return a in Qb ? Qb[a] : Qb[a] = "on" + a
        };
        bc = function(a, b, c, d) {
            var e = !0;
            if (a = Vb(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.ma == c && !f.removed && (f = ac(f, d), e = e && !1 !== f)
                    }
                return e
        };
        ac = function(a, b) {
            var c = a.listener,
                d = a.oa || a.src;
            a.la && $b(a);
            return c.call(d, b)
        };
        Yb = function(a, b) {
            if (a.removed) return !0;
            if (!Bb) {
                var c = b || _.ua("window.event"),
                    d = new Eb(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var f = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (p) {
                            f = !0
                        }
                        if (f || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (f = d.a; f; f = f.parentNode) c.push(f);
                    for (var f = a.type, g = c.length - 1; 0 <= g; g--) {
                        d.a = c[g];
                        var k = bc(c[g], f, !0, d),
                            e = e && k
                    }
                    for (g = 0; g < c.length; g++) d.a = c[g],
                    k = bc(c[g], f, !1, d),
                    e = e && k
                }
                return e
            }
            return ac(a, new Eb(b, this))
        };
        Vb = function(a) {
            a = a[Pb];
            return a instanceof Kb ? a : null
        };
        cc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
        _.Tb = function(a) {
            if (_.t(a)) return a;
            a[cc] || (a[cc] = function(b) {
                return a.handleEvent(b)
            });
            return a[cc]
        };
        _.dc = function(a) {
            _.y(this, a, "h_cc", null)
        };
        _.q(_.dc, _.x);
        _.A("h_cc", _.dc);
        _.dc.prototype.S = function() {
            return _.z(this, 19)
        };
        _.G = function(a) {
            this.a = a
        };
        _.G.prototype.toString = function() {
            return this.a
        };
        _.H = function(a) {
            _.D.call(this);
            this.I = a;
            this.f = {}
        };
        _.q(_.H, _.D);
        var ec = [];
        _.H.prototype.listen = function(a, b, c, d) {
            return _.fc(this, a, b, c, d)
        };
        _.fc = function(a, b, c, d, e, f) {
            _.sa(c) || (c && (ec[0] = c.toString()), c = ec);
            for (var g = 0; g < c.length; g++) {
                var k = _.Sb(b, c[g], d || a.handleEvent, e || !1, f || a.I || a);
                if (!k) break;
                a.f[k.key] = k
            }
            return a
        };
        _.H.prototype.Ca = function(a, b, c, d, e) {
            if (_.sa(b))
                for (var f = 0; f < b.length; f++) this.Ca(a, b[f], c, d, e);
            else c = c || this.handleEvent, e = e || this.I || this, c = _.Tb(c), d = !!d, b = _.Gb(a) ? Ob(a.c, String(b), c, d, e) : a ? (a = Vb(a)) ? Ob(a, b, c, d, e) : null : null, b && ($b(b), delete this.f[b.key]);
            return this
        };
        _.H.prototype.removeAll = function() {
            _.Ha(this.f, function(a, b) {
                this.f.hasOwnProperty(b) && $b(a)
            }, this);
            this.f = {}
        };
        _.H.prototype.v = function() {
            _.H.B.v.call(this);
            this.removeAll()
        };
        _.H.prototype.handleEvent = function() {
            throw Error("m");
        };
        var gc = function(a, b, c) {
            this.f = c;
            this.c = a;
            this.u = b;
            this.b = 0;
            this.a = null
        };
        gc.prototype.get = function() {
            var a;
            0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
            return a
        };
        var hc = function(a, b) {
            a.u(b);
            a.b < a.f && (a.b++, b.next = a.a, a.a = b)
        };
        var ic, jc, kc;
        ic = function(a) {
            _.l.setTimeout(function() {
                throw a;
            }, 0)
        };
        _.lc = function(a, b) {
            var c = a;
            b && (c = (0, _.r)(a, b));
            !_.t(_.l.setImmediate) || _.l.Window && _.l.Window.prototype && !_.v("Edge") && _.l.Window.prototype.setImmediate == _.l.setImmediate ? (jc || (jc = kc()), jc(c)) : _.l.setImmediate(c)
        };
        kc = function() {
            var a = _.l.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.v("Presto") && (a = function() {
                var a = window.document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                window.document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = (0, _.r)(function(a) {
                        if (("*" ==
                                d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !_.v("Trident") && !_.v("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (_.n(c.next)) {
                        c = c.next;
                        var a = c.Va;
                        c.Va = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        Va: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
                var b = window.document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                window.document.documentElement.appendChild(b)
            } : function(a) {
                _.l.setTimeout(a, 0)
            }
        };
        var mc = function() {
                this.b = this.a = null
            },
            oc = new gc(function() {
                return new nc
            }, function(a) {
                a.reset()
            }, 100);
        mc.prototype.remove = function() {
            var a = null;
            this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
            return a
        };
        var nc = function() {
            this.next = this.b = this.a = null
        };
        nc.prototype.set = function(a, b) {
            this.a = a;
            this.b = b;
            this.next = null
        };
        nc.prototype.reset = function() {
            this.next = this.b = this.a = null
        };
        var tc = function(a, b) {
                pc || qc();
                rc || (pc(), rc = !0);
                var c = sc,
                    d = oc.get();
                d.set(a, b);
                c.b ? c.b.next = d : c.a = d;
                c.b = d
            },
            pc, qc = function() {
                if (_.l.Promise && _.l.Promise.resolve) {
                    var a = _.l.Promise.resolve(void 0);
                    pc = function() {
                        a.then(uc)
                    }
                } else pc = function() {
                    _.lc(uc)
                }
            },
            rc = !1,
            sc = new mc,
            uc = function() {
                for (var a; a = sc.remove();) {
                    try {
                        a.a.call(a.b)
                    } catch (b) {
                        ic(b)
                    }
                    hc(oc, a)
                }
                rc = !1
            };
        _.I = function() {
            _.D.call(this);
            this.c = new Kb(this);
            this.O = this;
            this.D = null
        };
        _.q(_.I, _.D);
        _.I.prototype[Fb] = !0;
        _.h = _.I.prototype;
        _.h.removeEventListener = function(a, b, c, d) {
            Zb(this, a, b, c, d)
        };
        _.h.v = function() {
            _.I.B.v.call(this);
            this.c && this.c.removeAll(void 0);
            this.D = null
        };
        _.h.listen = function(a, b, c, d) {
            return _.Mb(this.c, String(a), b, !1, c, d)
        };
        _.h.Ca = function(a, b, c, d) {
            return this.c.remove(String(a), b, c, d)
        };
        _.h.X = function(a, b, c) {
            a = this.c.a[String(a)];
            if (!a) return !0;
            a = a.concat();
            for (var d = !0, e = 0; e < a.length; ++e) {
                var f = a[e];
                if (f && !f.removed && f.ma == b) {
                    var g = f.listener,
                        k = f.oa || f.src;
                    f.la && Nb(this.c, f);
                    d = !1 !== g.call(k, c) && d
                }
            }
            return d && 0 != c.eb
        };
        var vc = function(a) {
                a.prototype.then = a.prototype.then;
                a.prototype.$goog_Thenable = !0
            },
            wc = function(a) {
                if (!a) return !1;
                try {
                    return !!a.$goog_Thenable
                } catch (b) {
                    return !1
                }
            };
        var yc = function(a, b) {
                this.a = 0;
                this.h = void 0;
                this.c = this.b = this.f = null;
                this.u = this.g = !1;
                if (a != _.ta) try {
                    var c = this;
                    a.call(b, function(a) {
                        xc(c, 2, a)
                    }, function(a) {
                        xc(c, 3, a)
                    })
                } catch (d) {
                    xc(this, 3, d)
                }
            },
            zc = function() {
                this.next = this.c = this.b = this.f = this.a = null;
                this.u = !1
            },
            Ac, Bc;
        zc.prototype.reset = function() {
            this.c = this.b = this.f = this.a = null;
            this.u = !1
        };
        Ac = new gc(function() {
            return new zc
        }, function(a) {
            a.reset()
        }, 100);
        Bc = function(a, b, c) {
            var d = Ac.get();
            d.f = a;
            d.b = b;
            d.c = c;
            return d
        };
        _.Dc = function() {
            var a, b = new yc(function(b) {
                a = b
            });
            return new Cc(b, a)
        };
        yc.prototype.then = function(a, b, c) {
            return Ec(this, _.t(a) ? a : null, _.t(b) ? b : null, c)
        };
        vc(yc);
        var Gc = function(a, b) {
                a.b || 2 != a.a && 3 != a.a || Fc(a);
                a.c ? a.c.next = b : a.b = b;
                a.c = b
            },
            Ec = function(a, b, c, d) {
                var e = Bc(null, null, null);
                e.a = new yc(function(a, g) {
                    e.f = b ? function(c) {
                        try {
                            var e = b.call(d, c);
                            a(e)
                        } catch (B) {
                            g(B)
                        }
                    } : a;
                    e.b = c ? function(b) {
                        try {
                            var e = c.call(d, b);
                            !_.n(e) && "undefined" != typeof Hc && b instanceof Hc ? g(b) : a(e)
                        } catch (B) {
                            g(B)
                        }
                    } : g
                });
                e.a.f = a;
                Gc(a, e);
                return e.a
            };
        yc.prototype.l = function(a) {
            this.a = 0;
            xc(this, 2, a)
        };
        yc.prototype.w = function(a) {
            this.a = 0;
            xc(this, 3, a)
        };
        var xc = function(a, b, c) {
                if (0 == a.a) {
                    a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                    a.a = 1;
                    var d;
                    a: {
                        var e = c,
                            f = a.l,
                            g = a.w;
                        if (e instanceof yc) Gc(e, Bc(f || _.ta, g || null, a)),
                        d = !0;
                        else if (wc(e)) e.then(f, g, a),
                        d = !0;
                        else {
                            if (_.pa(e)) try {
                                var k = e.then;
                                if (_.t(k)) {
                                    Ic(e, k, f, g, a);
                                    d = !0;
                                    break a
                                }
                            } catch (p) {
                                g.call(a, p);
                                d = !0;
                                break a
                            }
                            d = !1
                        }
                    }
                    d || (a.h = c, a.a = b, a.f = null, Fc(a), 3 != b || "undefined" != typeof Hc && c instanceof Hc || Jc(a, c))
                }
            },
            Ic = function(a, b, c, d, e) {
                var f = !1,
                    g = function(a) {
                        f || (f = !0, c.call(e, a))
                    },
                    k = function(a) {
                        f ||
                            (f = !0, d.call(e, a))
                    };
                try {
                    b.call(a, g, k)
                } catch (p) {
                    k(p)
                }
            },
            Fc = function(a) {
                a.g || (a.g = !0, tc(a.j, a))
            },
            Kc = function(a) {
                var b = null;
                a.b && (b = a.b, a.b = b.next, b.next = null);
                a.b || (a.c = null);
                return b
            };
        yc.prototype.j = function() {
            for (var a; a = Kc(this);) {
                var b = this.a,
                    c = this.h;
                if (3 == b && a.b && !a.u) {
                    var d;
                    for (d = this; d && d.u; d = d.f) d.u = !1
                }
                if (a.a) a.a.f = null, Lc(a, b, c);
                else try {
                    a.u ? a.f.call(a.c) : Lc(a, b, c)
                } catch (e) {
                    Mc.call(null, e)
                }
                hc(Ac, a)
            }
            this.g = !1
        };
        var Lc = function(a, b, c) {
                2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
            },
            Jc = function(a, b) {
                a.u = !0;
                tc(function() {
                    a.u && Mc.call(null, b)
                })
            },
            Mc = ic,
            Hc = function(a) {
                _.va.call(this, a)
            };
        _.q(Hc, _.va);
        Hc.prototype.name = "cancel";
        var Cc = function(a, b) {
            this.b = a;
            this.a = b
        };
        _.Nc = function(a, b) {
            for (var c = [], d = 0; d < arguments.length; d++) c.push(arguments[d] || "");
            return c.join("_;_")
        };
        _.Oc = function() {
            return 0 <= window.navigator.userAgent.indexOf("CrOS")
        };
        _.J = function(a, b) {
            this.g = a || "e";
            this.u = null != a && "p" == a ? "e" : "p";
            this.a = this.f = null;
            this.j = b || "u";
            this.c = this.h = null;
            this.b = []
        };
        _.J.prototype.message = function() {
            var a = {};
            a.i = this.c;
            a.m = this.b;
            a.r = this.j;
            a.o = this.h;
            a.s = this.a;
            a.st = this.u;
            a.d = this.f;
            a.dt = this.g;
            return a
        };
        _.J.prototype.message = _.J.prototype.message;
        _.Pc = function(a, b) {
            for (var c in b) switch (c) {
                case "r":
                    a.j = b[c];
                    break;
                case "i":
                    a.c = b[c];
                    break;
                case "m":
                    a.b = b[c];
                    break;
                case "o":
                    a.h = b[c];
                    break;
                case "s":
                    a.a = b[c];
                    break;
                case "d":
                    a.f = b[c];
                    break;
                case "st":
                    a.u = b[c];
                    break;
                case "dt":
                    a.g = b[c]
            }
            return a
        };
        _.Qc = function(a, b, c) {
            null != b && (a.a = b, null != c && (a.u = c))
        };
        _.Rc = function(a, b) {
            null != b && (a.c = b)
        };
        _.Sc = function(a, b) {
            "object" == typeof b ? a.b = b : a.b = [b]
        };
        _.Tc = function(a, b, c, d, e) {
            _.D.call(this);
            this.b = a;
            this.ja = b;
            this.a = typeof b;
            this.za = c ? c : !1;
            this.W = !0;
            this.ya = d ? d : !1;
            this.ua = e ? e : !1
        };
        _.q(_.Tc, _.D);
        _.h = _.Tc.prototype;
        _.h.v = function() {
            _.Tc.B.v.call(this);
            this.b = "";
            this.ja = null;
            this.a = ""
        };
        _.h.id = function() {
            return this.b
        };
        _.h.type = function() {
            return this.a
        };
        _.h.F = function() {
            return this.ja
        };
        _.h.setEnabled = function(a) {
            this.W = a
        };
        _.Vc = function(a) {
            _.D.call(this);
            this.a = new _.C;
            this.b = ["https://hangouts.google.com", "", "https://autopush.hangouts.sandbox.google.com?jsmode=du"];
            a && _.Uc(this, a)
        };
        _.q(_.Vc, _.D);
        _.Wc = !_.Oc();
        _.Vc.prototype.v = function() {
            _.Vc.B.v.call(this);
            for (var a = this.a.M(), b = 0; b < a.length; ++b) _.E(this.a.get(a[b]));
            delete this.a
        };
        _.Vc.prototype.getItem = function(a) {
            return _.xb(this.a.b, a) ? this.a.get(a) : null
        };
        _.Vc.prototype.setItem = function(a) {
            this.a.set(a.id(), a)
        };
        _.Uc = function(a, b) {
            for (var c in b) {
                var d = b[c],
                    e;
                _.xb(a.a.b, c) ? (e = a.a.get(c), e.ja = d.value, d.changed && (e.ua = d.changed)) : (e = new _.Tc(c, d.value, d.multiple, d.inverse, d.changed), e.setEnabled(!d.disabled));
                a.a.set(c, e)
            }
        };
        _.Yc = function() {
            this.b = new _.C;
            this.a = null;
            this.c = !1;
            window.chrome.storage || (this.a = new Xc, this.c = !0);
            this.T()
        };
        _.Yc.ca = function() {
            return _.Yc.a ? _.Yc.a : _.Yc.a = new _.Yc
        };
        _.h = _.Yc.prototype;
        _.h.T = function(a) {
            var b = a || _.ta;
            this.c ? b() : window.chrome.storage.local.get((0, _.r)(function(a) {
                if (!this.c) {
                    for (var d in a) this.b.set(d, a[d]);
                    this.c = !0
                }
                b()
            }, this))
        };
        _.h.get = function(a) {
            return window.chrome.storage ? this.b.get(a, null) : this.a.get(a)
        };
        _.h.has = function(a) {
            return window.chrome.storage ? _.xb(this.b.b, a) : this.a.has(a)
        };
        _.h.set = function(a, b) {
            var c = _.Dc();
            if (window.chrome.storage) {
                this.b.set(a, b);
                var d = {};
                d[a] = b;
                window.chrome.storage.local.set(d, function() {
                    c.a(void 0)
                })
            } else this.a.set(a, b), c.a(void 0);
            return c.b
        };
        _.h.remove = function(a) {
            window.chrome.storage ? (this.b.remove(a), window.chrome.storage.local.remove(a, function() {})) : this.a.remove(a)
        };
        _.h.clear = function() {
            window.chrome.storage ? (this.b.clear(), window.chrome.storage.local.clear(function() {})) : this.a.clear()
        };
        var Xc = function() {
            this.a = window.localStorage
        };
        _.h = Xc.prototype;
        _.h.clear = function() {
            this.a.clear()
        };
        _.h.get = function(a) {
            a = this.a.getItem(a);
            if (a) {
                var b = JSON.parse(a);
                a = b.data;
                if ("jspb" == b.type) {
                    b = sb[a[0]];
                    if (!b) throw Error("c`" + a[0]);
                    a = new b(a)
                }
            } else a = null;
            return a
        };
        _.h.has = function(a) {
            return null != this.get(a)
        };
        _.h.set = function(a, b) {
            var c = null;
            b instanceof _.x && (b = _.qb(b), c = "jspb");
            var d = {};
            d.data = b;
            d.timestamp = (0, _.m)();
            c && (d.type = c);
            c = JSON.stringify(d);
            try {
                this.a.setItem(a, c)
            } catch (e) {}
        };
        _.h.remove = function(a) {
            try {
                this.a.removeItem(a)
            } catch (b) {}
        };
        /*
         Portions of this code are from MochiKit, received by
         The Closure Authors under the MIT license. All other code is Copyright
         2005-2009 The Closure Authors. All Rights Reserved.
        */
        var Zc = function(a, b) {
            this.f = [];
            this.D = b || null;
            this.a = this.b = !1;
            this.c = void 0;
            this.l = this.w = this.g = !1;
            this.u = 0;
            this.h = null;
            this.A = 0
        };
        Zc.prototype.j = function(a, b) {
            this.g = !1;
            this.b = !0;
            this.c = b;
            this.a = !a;
            $c(this)
        };
        Zc.prototype.C = function(a) {
            if (this.b) {
                if (!this.l) throw new ad;
                this.l = !1
            }
            this.b = !0;
            this.c = a;
            this.a = !1;
            $c(this)
        };
        var bd = function(a, b, c) {
            a.f.push([b, c, void 0]);
            a.b && $c(a)
        };
        Zc.prototype.then = function(a, b, c) {
            var d, e, f = new yc(function(a, b) {
                d = a;
                e = b
            });
            bd(this, d, function(a) {
                e(a)
            });
            return f.then(a, b, c)
        };
        vc(Zc);
        var cd = function(a) {
                return (0, _.Ca)(a.f, function(a) {
                    return _.t(a[1])
                })
            },
            $c = function(a) {
                if (a.u && a.b && cd(a)) {
                    var b = a.u,
                        c = dd[b];
                    c && (_.l.clearTimeout(c.a), delete dd[b]);
                    a.u = 0
                }
                a.h && (a.h.A--, delete a.h);
                for (var b = a.c, d = c = !1; a.f.length && !a.g;) {
                    var e = a.f.shift(),
                        f = e[0],
                        g = e[1],
                        e = e[2];
                    if (f = a.a ? g : f) try {
                        var k = f.call(e || a.D, b);
                        _.n(k) && (a.a = a.a && (k == b || k instanceof Error), a.c = b = k);
                        if (wc(b) || "function" === typeof _.l.Promise && b instanceof _.l.Promise) d = !0, a.g = !0
                    } catch (p) {
                        b = p, a.a = !0, cd(a) || (c = !0)
                    }
                }
                a.c = b;
                d && (k = (0, _.r)(a.j,
                    a, !0), d = (0, _.r)(a.j, a, !1), b instanceof Zc ? (bd(b, k, d), b.w = !0) : b.then(k, d));
                c && (b = new ed(b), dd[b.a] = b, a.u = b.a)
            },
            ad = function() {
                _.va.call(this)
            };
        _.q(ad, _.va);
        ad.prototype.message = "Deferred has already fired";
        ad.prototype.name = "AlreadyCalledError";
        var ed = function(a) {
            this.a = _.l.setTimeout((0, _.r)(this.c, this), 0);
            this.b = a
        };
        ed.prototype.c = function() {
            delete dd[this.a];
            throw this.b;
        };
        var dd = {};

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var hd;
        _.fd = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (_.ra(a) || _.u(a))(0, _.za)(a, b, void 0);
            else {
                var c;
                if (a.M && "function" == typeof a.M) c = a.M();
                else if (a.G && "function" == typeof a.G) c = void 0;
                else if (_.ra(a) || _.u(a)) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c = _.Ja(a);
                for (var d = _.yb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
        _.gd = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        hd = function(a, b) {
            for (var c = _.u(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
        };
        var id = function(a, b) {
            this.c = a;
            this.b = b;
            this.constructor.Ua || (this.constructor.Ua = {});
            this.constructor.Ua[this.toString()] = this
        };
        id.prototype.toString = function() {
            this.a || (this.a = this.c.a + ":" + this.b);
            return this.a
        };
        var jd = function(a, b) {
            id.call(this, a, b)
        };
        _.q(jd, id);
        var kd = function(a) {
            this.a = a
        };
        new kd("lib");
        _.md = function(a) {
            _.D.call(this);
            this.b = {};
            this.l = {};
            this.w = {};
            this.f = {};
            this.A = {};
            this.D = {};
            this.C = a ? a.g() : new _.I;
            this.J = !a;
            this.h = null;
            a ? (this.h = a, this.w = a.w, this.f = a.f, this.l = a.l, this.A = a.A) : (0, _.m)();
            a = ld(this);
            this != a && (a.j ? a.j.push(this) : a.j = [this])
        };
        _.q(_.md, _.D);
        var ld = function(a) {
            for (; a.h;) a = a.h;
            return a
        };
        _.md.prototype.get = function(a) {
            var b = this.c(a);
            if (null == b) throw new nd(a);
            return b
        };
        _.md.prototype.c = function(a) {
            for (var b = this; b; b = b.h) {
                if (b.K) throw Error("o");
                if (b.b[a]) return b.b[a][0];
                if (b.D[a]) break
            }
            if (b = this.w[a]) {
                b = b(this);
                if (null == b) throw Error("p`" + a);
                this.a(a, b);
                return b
            }
            return null
        };
        _.md.prototype.a = function(a, b, c) {
            if (this.K) c || _.E(b);
            else {
                this.b[a] = [b, !c];
                b = od(this, this, a);
                for (c = 0; c < b.length; c++) b[c].C(null);
                delete this.l[a]
            }
        };
        _.md.prototype.I = function() {
            var a = _.pd;
            if (!this.b[a]) throw Error("q`" + a);
            var b = this.b[a];
            delete this.b[a];
            b[1] && _.E(b[0])
        };
        var od = function(a, b, c) {
                var d = [],
                    e = a.f[c];
                e && (hd(e, function(a) {
                    var c;
                    a: {
                        for (c = a.qb; c;) {
                            if (c == b) {
                                c = !0;
                                break a
                            }
                            c = c.h
                        }
                        c = !1
                    }
                    c && (d.push(a.d), _.Da(e, a))
                }), 0 == e.length && delete a.f[c]);
                return d
            },
            qd = function(a, b) {
                a.f && _.fd(a.f, function(a, d, e) {
                    hd(a, function(d) {
                        d.qb == b && _.Da(a, d)
                    });
                    0 == a.length && delete e[d]
                })
            };
        _.md.prototype.v = function() {
            if (ld(this) == this) {
                var a = this.j;
                if (a)
                    for (; a.length;) a[0].N()
            } else
                for (var a = ld(this).j, b = 0; b < a.length; b++)
                    if (a[b] == this) {
                        a.splice(b, 1);
                        break
                    } for (var c in this.b) a = this.b[c], a[1] && a[0].N && a[0].N();
            this.b = null;
            this.J && this.C.N();
            qd(this, this);
            this.f = null;
            _.E(this.H);
            this.D = this.H = null;
            _.md.B.v.call(this)
        };
        _.md.prototype.g = function() {
            return this.C
        };
        var nd = function(a) {
            _.va.call(this);
            this.id = a;
            this.message = 'Service for "' + a + '" is not registered'
        };
        _.q(nd, _.va);
        var rd = new kd("fva");
        new jd(rd, 1);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var sd, td, ud, Ad, Bd, Cd, Gd, Hd, Id, Ld, Md, Nd, Od, Pd, Qd, Rd, Td, Ud, Vd;
        sd = function(a, b, c, d, e) {
            if (_.sa(b)) {
                for (var f = 0; f < b.length; f++) sd(a, b[f], c, d, e);
                return null
            }
            c = _.Tb(c);
            return _.Gb(a) ? _.Mb(a.c, String(b), c, !0, d, e) : _.Ub(a, b, c, !0, d, e)
        };
        td = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        ud = function(a, b, c, d, e, f) {
            if (_.sa(c))
                for (var g = 0; g < c.length; g++) ud(a, b, c[g], d, e, f);
            else {
                b = sd(b, c, d || a.handleEvent, e, f || a.I || a);
                if (!b) return a;
                a.f[b.key] = b
            }
            return a
        };
        _.L = function(a, b, c) {
            b < a.u ? a.b[b + a.f] = c : a.c[b] = c
        };
        _.vd = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < td.length; f++) c = td[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
        _.wd = function(a, b, c) {
            null != b && (a.f = b, null != c && (a.g = c))
        };
        _.M = function(a, b) {
            var c, d = a.D;
            if (d)
                for (c = []; d; d = d.D) c.push(d);
            var d = a.O,
                e = b,
                f = e.type || e;
            if (_.u(e)) e = new _.Db(e, d);
            else if (e instanceof _.Db) e.b = e.b || d;
            else {
                var g = e,
                    e = new _.Db(f, d);
                _.vd(e, g)
            }
            var g = !0,
                k;
            if (c)
                for (var p = c.length - 1; 0 <= p; p--) k = e.a = c[p], g = k.X(f, !0, e) && g;
            k = e.a = d;
            g = k.X(f, !0, e) && g;
            g = k.X(f, !1, e) && g;
            if (c)
                for (p = 0; p < c.length; p++) k = e.a = c[p], g = k.X(f, !1, e) && g
        };
        _.xd = function(a, b, c, d) {
            return ud(a, b, c, d, void 0)
        };
        _.yd = function(a, b, c) {
            a.a || (a.a = {});
            var d = c ? _.qb(c) : c;
            a.a[b] = c;
            _.L(a, b, d)
        };
        _.zd = function(a, b, c) {
            a.a || (a.a = {});
            if (!a.a[c]) {
                var d = _.z(a, c);
                d && (a.a[c] = new b(d))
            }
            return a.a[c]
        };
        Ad = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        };
        Bd = function(a, b) {
            return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
        };
        Cd = function(a, b) {
            if (a)
                for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        f, g = null;
                    0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                    b(f, g ? (0, window.decodeURIComponent)(g.replace(/\+/g, " ")) : "")
                }
        };
        _.Dd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        _.Ed = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
        _.Fd = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        };
        Gd = function(a, b, c) {
            this.b = this.a = null;
            this.c = a || null;
            this.f = !!c
        };
        Hd = function(a) {
            a.a || (a.a = new _.C, a.b = 0, a.c && Cd(a.c, function(b, c) {
                var d = (0, window.decodeURIComponent)(b.replace(/\+/g, " "));
                Hd(a);
                a.c = null;
                var d = Id(a, d),
                    e = a.a.get(d);
                e || a.a.set(d, e = []);
                e.push(c);
                a.b += 1
            }))
        };
        Gd.prototype.ba = function() {
            Hd(this);
            return this.b
        };
        Gd.prototype.remove = function(a) {
            Hd(this);
            a = Id(this, a);
            return _.xb(this.a.b, a) ? (this.c = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1
        };
        Gd.prototype.clear = function() {
            this.a = this.c = null;
            this.b = 0
        };
        var Jd = function(a, b) {
            Hd(a);
            b = Id(a, b);
            return _.xb(a.a.b, b)
        };
        Gd.prototype.M = function() {
            Hd(this);
            for (var a = this.a.G(), b = this.a.M(), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        Gd.prototype.G = function(a) {
            Hd(this);
            var b = [];
            if (_.u(a)) Jd(this, a) && (b = _.Fd(b, this.a.get(Id(this, a))));
            else {
                a = this.a.G();
                for (var c = 0; c < a.length; c++) b = _.Fd(b, a[c])
            }
            return b
        };
        Gd.prototype.set = function(a, b) {
            Hd(this);
            this.c = null;
            a = Id(this, a);
            Jd(this, a) && (this.b -= this.a.get(a).length);
            this.a.set(a, [b]);
            this.b += 1;
            return this
        };
        Gd.prototype.get = function(a, b) {
            var c = a ? this.G(a) : [];
            return 0 < c.length ? String(c[0]) : b
        };
        _.Kd = function(a, b, c) {
            a.remove(b);
            0 < c.length && (a.c = null, a.a.set(Id(a, b), _.Ed(c)), a.b += c.length)
        };
        Gd.prototype.toString = function() {
            if (this.c) return this.c;
            if (!this.a) return "";
            for (var a = [], b = this.a.M(), c = 0; c < b.length; c++)
                for (var d = b[c], e = (0, window.encodeURIComponent)(String(d)), d = this.G(d), f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + (0, window.encodeURIComponent)(String(d[f])));
                    a.push(g)
                }
            return this.c = a.join("&")
        };
        Id = function(a, b) {
            var c = String(b);
            a.f && (c = c.toLowerCase());
            return c
        };
        Ld = function(a, b) {
            b && !a.f && (Hd(a), a.c = null, a.a.forEach(function(a, b) {
                var e = b.toLowerCase();
                b != e && (this.remove(b), _.Kd(this, e, a))
            }, a));
            a.f = b
        };
        Md = /#/g;
        Nd = /[\#\?@]/g;
        Od = /[\#\?]/g;
        Pd = /[\#\?:]/g;
        Qd = /[#\/\?@]/g;
        Rd = function(a, b, c) {
            return _.u(a) ? (a = (0, window.encodeURI)(a).replace(b, Ad), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        };
        _.Sd = function(a, b) {
            this.c = this.j = this.u = "";
            this.f = null;
            this.g = this.a = "";
            this.h = !1;
            var c;
            if ("undefined" != typeof _.Sd && a instanceof _.Sd) {
                this.h = _.n(b) ? b : a.h;
                Td(this, a.u);
                this.j = a.j;
                this.c = a.c;
                Ud(this, a.f);
                this.a = a.a;
                c = a.b;
                var d = new Gd;
                d.c = c.c;
                c.a && (d.a = new _.C(c.a), d.b = c.b);
                Vd(this, d);
                this.g = a.g
            } else a && (c = String(a).match(_.Dd)) ? (this.h = !!b, Td(this, c[1] || "", !0), this.j = Bd(c[2] || ""), this.c = Bd(c[3] || "", !0), Ud(this, c[4]), this.a = Bd(c[5] || "", !0), Vd(this, c[6] || "", !0), this.g = Bd(c[7] || "")) : (this.h = !!b, this.b =
                new Gd(null, 0, this.h))
        };
        _.Sd.prototype.toString = function() {
            var a = [],
                b = this.u;
            b && a.push(Rd(b, Qd, !0), ":");
            var c = this.c;
            if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Rd(b, Qd, !0), "@"), a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.f, null != c && a.push(":", String(c));
            if (c = this.a) this.c && "/" != c.charAt(0) && a.push("/"), a.push(Rd(c, "/" == c.charAt(0) ? Od : Pd, !0));
            (c = this.b.toString()) && a.push("?", c);
            (c = this.g) && a.push("#", Rd(c, Md));
            return a.join("")
        };
        Td = function(a, b, c) {
            a.u = c ? Bd(b, !0) : b;
            a.u && (a.u = a.u.replace(/:$/, ""))
        };
        Ud = function(a, b) {
            if (b) {
                b = Number(b);
                if ((0, window.isNaN)(b) || 0 > b) throw Error("g`" + b);
                a.f = b
            } else a.f = null
        };
        Vd = function(a, b, c) {
            b instanceof Gd ? (a.b = b, Ld(a.b, a.h)) : (c || (b = Rd(b, Nd)), a.b = new Gd(b, 0, a.h))
        };
        _.N = function(a, b, c) {
            a.b.set(b, c)
        };
        _.Wd = function(a) {
            return a instanceof _.Sd ? new _.Sd(a) : new _.Sd(a, void 0)
        };
        _.O = function(a, b, c) {
            if (_.t(a)) c && (a = (0, _.r)(a, c));
            else if (a && "function" == typeof a.handleEvent) a = (0, _.r)(a.handleEvent, a);
            else throw Error("n");
            return 2147483647 < Number(b) ? -1 : _.l.setTimeout(a, b || 0)
        };
        _.Xd = function(a, b) {
            a instanceof _.Sd || (a = _.Wd(a));
            b instanceof _.Sd || (b = _.Wd(b));
            var c = a,
                d = b,
                e = new _.Sd(c),
                f = !!d.u;
            f ? Td(e, d.u) : f = !!d.j;
            f ? e.j = d.j : f = !!d.c;
            f ? e.c = d.c : f = null != d.f;
            var g = d.a;
            if (f) Ud(e, d.f);
            else if (f = !!d.a)
                if ("/" != g.charAt(0) && (c.c && !c.a ? g = "/" + g : (c = e.a.lastIndexOf("/"), -1 != c && (g = e.a.substr(0, c + 1) + g))), c = g, ".." == c || "." == c) g = "";
                else if (-1 != c.indexOf("./") || -1 != c.indexOf("/.")) {
                for (var g = 0 == c.lastIndexOf("/", 0), c = c.split("/"), k = [], p = 0; p < c.length;) {
                    var B = c[p++];
                    "." == B ? g && p == c.length && k.push("") :
                        ".." == B ? ((1 < k.length || 1 == k.length && "" != k[0]) && k.pop(), g && p == c.length && k.push("")) : (k.push(B), g = !0)
                }
                g = k.join("/")
            } else g = c;
            f ? e.a = g : f = "" !== d.b.toString();
            f ? Vd(e, Bd(d.b.toString())) : f = !!d.g;
            f && (e.g = d.g);
            return e
        };
        _.Yd = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        };
        var Zd = function() {};
        Zd.prototype.a = null;
        var ae;
        ae = function() {};
        _.q(ae, Zd);
        _.$d = new ae;
        _.be = function(a) {
            _.y(this, a, "h_icr", null)
        };
        _.q(_.be, _.x);
        _.A("h_icr", _.be);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ce = function() {
            return window.chrome.runtime.getURL("feedbackdialog.html")
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var de = function(a) {
                try {
                    return 2 < (a.a ? a.a.readyState : 0) ? a.a.status : -1
                } catch (b) {
                    return -1
                }
            },
            ee = function(a) {
                a.a && a.H && (a.a.ontimeout = null);
                _.qa(a.h) && (_.l.clearTimeout(a.h), a.h = null)
            },
            fe = /^https?$/i,
            ge = {
                '"': '\\"',
                "\\": "\\\\",
                "/": "\\/",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\x0B": "\\u000b"
            },
            he = function(a) {
                var b = de(a),
                    c;
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        c = !0;
                        break a;
                    default:
                        c = !1
                }
                if (!c) {
                    if (b = 0 === b) a = String(a.C).match(_.Dd)[1] || null, !a && _.l.self &&
                        _.l.self.location && (a = _.l.self.location.protocol, a = a.substr(0, a.length - 1)), b = !fe.test(a ? a.toLowerCase() : "");
                    c = b
                }
                return c
            },
            ie = function(a, b) {
                if (a.a) {
                    ee(a);
                    var c = a.a,
                        d = a.j[0] ? _.ta : null;
                    a.a = null;
                    a.j = null;
                    b || _.M(a, "ready");
                    try {
                        c.onreadystatechange = d
                    } catch (e) {}
                }
            },
            je = function(a) {
                a.w || (a.w = !0, _.M(a, "complete"), _.M(a, "error"))
            },
            ke = function(a) {
                return "content-type" == a.toLowerCase()
            },
            le = function(a) {
                if (!a.b && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
                    for (var b = ["MSXML2.XMLHTTP.6.0",
                            "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"
                        ], c = 0; c < b.length; c++) {
                        var d = b[c];
                        try {
                            return new window.ActiveXObject(d), a.b = d
                        } catch (e) {}
                    }
                    throw Error("r");
                }
                return a.b
            },
            me = function(a, b) {
                b.push('"', a.replace(_.nb, function(a) {
                    var b = ge[a];
                    b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), ge[a] = b);
                    return b
                }), '"')
            },
            ne = function(a) {
                if (a.b && "undefined" != typeof _.ia && (!a.j[1] || 4 != (a.a ? a.a.readyState : 0) || 2 != de(a)))
                    if (a.g && 4 == (a.a ? a.a.readyState : 0)) _.O(a.bb, 0, a);
                    else if (_.M(a, "readystatechange"),
                    4 == (a.a ? a.a.readyState : 0)) {
                    a.b = !1;
                    try {
                        he(a) ? (_.M(a, "complete"), _.M(a, "success")) : je(a)
                    } finally {
                        ie(a)
                    }
                }
            },
            oe = function(a) {
                a.b = !1;
                a.a && (a.f = !0, a.a.abort(), a.f = !1);
                je(a);
                ie(a)
            },
            pe = function(a) {
                return _.w && _.db(9) && _.qa(a.timeout) && _.n(a.ontimeout)
            },
            qe = [],
            re = ["POST", "PUT"],
            se = function(a) {
                return (a = le(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
            },
            te = function(a) {
                var b;
                (b = a.a) || (b = {}, le(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
                return b
            },
            ue = function(a) {
                var b;
                a: {
                    b = ke;
                    for (var c = a.length, d = _.u(a) ? a.split("") :
                            a, e = 0; e < c; e++)
                        if (e in d && b.call(void 0, d[e], e, a)) {
                            b = e;
                            break a
                        }
                    b = -1
                }
                return 0 > b ? null : _.u(a) ? a.charAt(b) : a[b]
            },
            ve = function(a, b, c) {
                if (null == b) c.push("null");
                else {
                    if ("object" == typeof b) {
                        if (_.sa(b)) {
                            var d = b;
                            b = d.length;
                            c.push("[");
                            for (var e = "", f = 0; f < b; f++) c.push(e), ve(a, d[f], c), e = ",";
                            c.push("]");
                            return
                        }
                        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                        else {
                            c.push("{");
                            e = "";
                            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), me(d, c),
                                c.push(":"), ve(a, f, c), e = ","));
                            c.push("}");
                            return
                        }
                    }
                    switch (typeof b) {
                        case "string":
                            me(b, c);
                            break;
                        case "number":
                            c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? String(b) : "null");
                            break;
                        case "boolean":
                            c.push(String(b));
                            break;
                        case "function":
                            c.push("null");
                            break;
                        default:
                            throw Error("b`" + typeof b);
                    }
                }
            },
            we = function() {},
            xe = function(a) {
                _.I.call(this);
                this.P = new _.C;
                this.l = a || null;
                this.b = !1;
                this.j = this.a = null;
                this.C = "";
                this.f = this.A = this.g = this.w = !1;
                this.I = 0;
                this.h = null;
                this.J = "";
                this.H = this.L = !1
            };
        _.q(xe, _.I);
        _.h = xe.prototype;
        _.h.xb = function() {
            this.N();
            _.Da(qe, this)
        };
        _.h.send = function(a, b, c, d) {
            if (this.a) throw Error("s`" + this.C + "`" + a);
            b = b ? b.toUpperCase() : "GET";
            this.C = a;
            this.w = !1;
            this.b = !0;
            this.a = this.l ? se(this.l) : se(_.$d);
            this.j = this.l ? te(this.l) : te(_.$d);
            this.a.onreadystatechange = (0, _.r)(this.bb, this);
            try {
                this.A = !0, this.a.open(b, String(a), !0), this.A = !1
            } catch (f) {
                oe(this);
                return
            }
            a = c || "";
            var e = new _.C(this.P);
            d && _.fd(d, function(a, b) {
                e.set(b, a)
            });
            d = ue(e.M());
            c = _.l.FormData && a instanceof _.l.FormData;
            !(0 <= (0, _.ya)(re, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            e.forEach(function(a, b) {
                this.a.setRequestHeader(b, a)
            }, this);
            this.J && (this.a.responseType = this.J);
            "withCredentials" in this.a && this.a.withCredentials !== this.L && (this.a.withCredentials = this.L);
            try {
                ee(this), 0 < this.I && ((this.H = pe(this.a)) ? (this.a.timeout = this.I, this.a.ontimeout = (0, _.r)(this.gb, this)) : this.h = _.O(this.gb, this.I, this)), this.g = !0, this.a.send(a), this.g = !1
            } catch (f) {
                oe(this)
            }
        };
        _.h.gb = function() {
            "undefined" != typeof _.ia && this.a && (_.M(this, "timeout"), this.a && this.b && (this.b = !1, this.f = !0, this.a.abort(), this.f = !1, _.M(this, "complete"), _.M(this, "abort"), ie(this)))
        };
        _.h.v = function() {
            this.a && (this.b && (this.b = !1, this.f = !0, this.a.abort(), this.f = !1), ie(this, !0));
            xe.B.v.call(this)
        };
        _.h.bb = function() {
            this.K || (this.A || this.g || this.f ? ne(this) : this.Sb())
        };
        _.h.Sb = function() {
            ne(this)
        };
        var ye = function(a) {
                var b = [];
                ve(new we, a, b);
                return b.join("")
            },
            ze = function(a, b) {
                return a.b.get(b)
            },
            Ae = function() {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, _.m)()).toString(36)
            },
            Be = function(a) {
                _.y(this, a, 0, null)
            };
        _.q(Be, _.x);
        var Ce = function(a) {
            _.y(this, a, 0, null)
        };
        _.q(Ce, _.x);
        var De = function(a) {
            _.y(this, a, 0, null)
        };
        _.q(De, _.x);
        var Ee = function(a) {
            _.y(this, a, 0, null)
        };
        _.q(Ee, _.x);
        var Fe = function(a) {
                return null != _.z(a, 8) ? _.z(a, 8) : "0"
            },
            Ge = /[?&]($|#)/,
            He = /#|$/,
            Ie = function(a, b, c, d) {
                for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
                    var f = a.charCodeAt(b - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
                    b += e + 1
                }
                return -1
            },
            Je = function(a) {
                if (a && "number" == typeof a.length) {
                    if (_.pa(a)) return "function" == typeof a.item || "string" == typeof a.item;
                    if (_.t(a)) return "function" == typeof a.item
                }
                return !1
            },
            Ke = {
                cellpadding: "cellPadding",
                cellspacing: "cellSpacing",
                colspan: "colSpan",
                frameborder: "frameBorder",
                height: "height",
                maxlength: "maxLength",
                nonce: "nonce",
                role: "role",
                rowspan: "rowSpan",
                type: "type",
                usemap: "useMap",
                valign: "vAlign",
                width: "width"
            },
            Le = /[\x00&<>"']/,
            Me = /\x00/g,
            Ne = /'/g,
            Oe = /"/g,
            Pe = />/g,
            Qe = /</g,
            Re = /&/g,
            Se = function(a, b, c) {
                function d(c) {
                    c && b.appendChild(_.u(c) ? a.createTextNode(c) : c)
                }
                for (var e = 2; e < c.length; e++) {
                    var f = c[e];
                    !_.ra(f) || _.pa(f) && 0 < f.nodeType ? d(f) : (0, _.za)(Je(f) ? _.Ed(f) : f, d)
                }
            },
            Te = function(a, b) {
                _.Ha(b, function(b, d) {
                    "style" == d ? a.style.cssText = b : "class" == d ? a.className =
                        b : "for" == d ? a.htmlFor = b : Ke.hasOwnProperty(d) ? a.setAttribute(Ke[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
                })
            },
            Ue = function(a) {
                if (!Le.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Re, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Qe, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Pe, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oe, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ne, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Me, "&#0;"));
                return a
            },
            Ve = function(a, b, c) {
                for (var d =
                        a.search(He), e = 0, f, g = []; 0 <= (f = Ie(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
                g.push(a.substr(e));
                a = [g.join("").replace(Ge, "$1"), "&", b];
                null != c && a.push("=", (0, window.encodeURIComponent)(String(c)));
                a[1] && (c = a[0], b = c.indexOf("#"), 0 <= b && (a.push(c.substr(b)), a[0] = c = c.substr(0, b)), b = c.indexOf("?"), 0 > b ? a[1] = "?" : b == c.length - 1 && (a[1] = void 0));
                return a.join("")
            },
            We = function(a) {
                for (var b; b = a.firstChild;) a.removeChild(b)
            },
            Xe = function(a, b) {
                var c, d, e, f;
                c = window.document;
                c = b || c;
                if (c.querySelectorAll &&
                    c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
                if (a && c.getElementsByClassName) {
                    var g = c.getElementsByClassName(a);
                    return g
                }
                g = c.getElementsByTagName("*");
                if (a) {
                    f = {};
                    for (d = e = 0; c = g[d]; d++) {
                        var k = c.className,
                            p;
                        if (p = "function" == typeof k.split) p = 0 <= (0, _.ya)(k.split(/\s+/), a);
                        p && (f[e++] = c)
                    }
                    f.length = e;
                    return f
                }
                return g
            },
            Ye = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
            Ze = function(a, b, c) {
                var d = arguments,
                    e = window.document,
                    f = String(d[0]),
                    g = d[1];
                if (!_.Ab && g && (g.name || g.type)) {
                    f = ["<", f];
                    g.name && f.push(' name="', Ue(g.name), '"');
                    if (g.type) {
                        f.push(' type="', Ue(g.type), '"');
                        var k = {};
                        _.vd(k, g);
                        delete k.type;
                        g = k
                    }
                    f.push(">");
                    f = f.join("")
                }
                f = e.createElement(f);
                g && (_.u(g) ? f.className = g : _.sa(g) ? f.className = g.join(" ") : Te(f, g));
                2 < d.length && Se(e, f, d);
                return f
            },
            $e = function(a, b) {
                var c = b || window.document,
                    d = null;
                c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Xe(a, b)[0];
                return d ||
                    null
            },
            af = function(a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (_.ra(d)) {
                        var e = a.length || 0,
                            f = d.length || 0;
                        a.length = e + f;
                        for (var g = 0; g < f; g++) a[e + g] = d[g]
                    } else a.push(d)
                }
            },
            bf = function(a) {
                var b = _.u(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
                return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                    return b + e.toUpperCase()
                })
            },
            cf = function(a) {
                return String(a).replace(/\-([a-z])/g, function(a, c) {
                    return c.toUpperCase()
                })
            };
        var df = function(a) {
                this.a = a;
                _.w || (delete this.a.lpu, delete this.a.ppu)
            },
            ef = ["cn", "tp"],
            ff = function(a, b) {
                var c;
                if (_.t(window.document.postMessage) || _.t(window.postMessage) || _.w && window.postMessage) c = 1;
                else if (_.Ua) c = 2;
                else {
                    var d;
                    if (d = _.w) {
                        d = !1;
                        try {
                            c = window.opener, window.opener = {}, d = _.Na(window, "opener"), window.opener = c
                        } catch (e) {}
                    }
                    c = d ? 6 : 4
                }
                d = {};
                d.cn = Math.floor(2147483648 * Math.random()).toString(36);
                d.tp = c;
                d.ifrid = b;
                d.pu = a;
                return new df(d)
            };
        _.na("GTalk_IFrameChannelConfig.build", ff);
        var gf = function() {
                if ($e("talk_loading_msg")) {
                    var a = $e("talk_loading_msg_error");
                    a && _.gd(a)
                }
            },
            hf = function(a) {
                var b = $e("talk_loading_msg");
                if (b) {
                    gf();
                    var c = window.document.createElement("DIV");
                    Te(c, {
                        "class": "talk_loading_msg_error",
                        style: "margin: 12px 8px; font-size: 10px"
                    });
                    var d = window.document.createElement("DIV");
                    a = "Errors: " + a.join(", ");
                    if ("textContent" in d) d.textContent = a;
                    else if (3 == d.nodeType) d.data = a;
                    else if (d.firstChild && 3 == d.firstChild.nodeType) {
                        for (; d.lastChild != d.firstChild;) d.removeChild(d.lastChild);
                        d.firstChild.data = a
                    } else We(d), d.appendChild((9 == d.nodeType ? d : d.ownerDocument || d.document).createTextNode(String(a)));
                    c.appendChild(d);
                    b.appendChild(c)
                }
            };
        var jf = function() {},
            mf = function(a) {
                var b = a.aa,
                    c = function(a) {
                        c.B.constructor.call(this, a);
                        var b = this.R.length;
                        this.a = [];
                        for (var d = 0; d < b; ++d) this.R[d].oc || (this.a[d] = new this.R[d](a))
                    };
                _.q(c, b);
                for (var d = []; a;) {
                    if (b = a.aa) {
                        b.R && af(d, b.R);
                        var e = b.prototype,
                            f;
                        for (f in e)
                            if (e.hasOwnProperty(f) && _.t(e[f]) && e[f] !== b) {
                                var g = !!e[f].tb,
                                    k = kf(f, e, d, g);
                                (g = lf(f, e, k, g)) && (c.prototype[f] = g)
                            }
                    }
                    a = a.B && a.B.constructor
                }
                c.prototype.R = d;
                return c
            },
            kf = function(a, b, c, d) {
                for (var e = [], f = 0; f < c.length && (c[f].prototype[a] === b[a] ||
                        (e.push(f), !d)); ++f);
                return e
            },
            lf = function(a, b, c, d) {
                var e;
                c.length ? d ? e = function(b) {
                    var d = this.a[c[0]];
                    return d ? d[a].apply(this.a[c[0]], arguments) : this.R[c[0]].prototype[a].apply(this, arguments)
                } : b[a].vb ? e = function(b) {
                    var d;
                    a: {
                        d = Array.prototype.slice.call(arguments, 0);
                        for (var e = 0; e < c.length; ++e) {
                            var p = this.a[c[e]];
                            if (p = p ? p[a].apply(p, d) : this.R[c[e]].prototype[a].apply(this, d)) {
                                d = p;
                                break a
                            }
                        }
                        d = !1
                    }
                    return d
                } : b[a].ub ? e = function(b) {
                    var d;
                    a: {
                        d = Array.prototype.slice.call(arguments, 0);
                        for (var e = 0; e < c.length; ++e) {
                            var p =
                                this.a[c[e]],
                                p = p ? p[a].apply(p, d) : this.R[c[e]].prototype[a].apply(this, d);
                            if (null != p) {
                                d = p;
                                break a
                            }
                        }
                        d = void 0
                    }
                    return d
                } : b[a].Ib ? e = function(b) {
                    for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < c.length; ++e) {
                        var p = this.a[c[e]];
                        p ? p[a].apply(p, d) : this.R[c[e]].prototype[a].apply(this, d)
                    }
                } : e = function(b) {
                    for (var d = Array.prototype.slice.call(arguments, 0), e = [], p = 0; p < c.length; ++p) {
                        var B = this.a[c[p]];
                        e.push(B ? B[a].apply(B, d) : this.R[c[p]].prototype[a].apply(this, d))
                    }
                    return e
                } : d || b[a].vb || b[a].ub || b[a].Ib ? e = null : e = nf;
                return e
            },
            nf = function() {
                return []
            };
        jf.prototype.u = function(a) {
            if (this.a)
                for (var b = 0; b < this.a.length; ++b)
                    if (this.a[b] instanceof a) return this.a[b];
            return null
        };
        var of = function(a) {
            (a ? a : function() {}).tb = !0
        };
        var pf = function() {};
        _.q(pf, jf);
        pf.prototype.b = function(a) {
            return a
        };
        of(pf.prototype.b);
        pf.prototype.c = function() {
            return !0
        };
        of(pf.prototype.c);
        var qf = function(a) {
            _.y(this, a, 0, null)
        };
        _.q(qf, _.x);
        var rf = function(a, b) {
                var c = new qf;
                _.L(c, 1, b);
                _.L(c, 2, a);
                return c
            },
            sf = rf("?", 0),
            tf = rf("q", 1),
            uf = rf("<", 2),
            vf = rf(">", 3),
            wf = rf("~", 4),
            xf = rf("s", 5),
            yf = {
                g: sf,
                w: tf,
                j: uf,
                l: vf,
                h: wf,
                A: xf
            };
        var zf = function(a) {
            _.y(this, a, "ci:dc", null)
        };
        _.q(zf, _.x);
        _.A("ci:dc", zf);
        var Af = function(a) {
            _.y(this, a, "ci:ec", null)
        };
        _.q(Af, _.x);
        _.A("ci:ec", Af);
        var Bf = function(a) {
            return null != _.z(a, 2) ? _.z(a, 2) : !1
        };
        var Cf = function(a) {
            return this.xa.u(a)
        };
        var Df = function(a) {
                this.a = a || {
                    cookie: ""
                }
            },
            Ef = /\s*;\s*/;
        _.h = Df.prototype;
        _.h.set = function(a, b, c, d, e, f) {
            if (/[;=\s]/.test(a)) throw Error("t`" + a);
            if (/[;\r\n]/.test(b)) throw Error("u`" + b);
            _.n(c) || (c = -1);
            e = e ? ";domain=" + e : "";
            d = d ? ";path=" + d : "";
            f = f ? ";secure" : "";
            c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.m)() + 1E3 * c)).toUTCString();
            this.a.cookie = a + "=" + b + e + d + c + f
        };
        _.h.get = function(a, b) {
            for (var c = a + "=", d = (this.a.cookie || "").split(Ef), e = 0, f; f = d[e]; e++) {
                if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
                if (f == a) return ""
            }
            return b
        };
        _.h.remove = function(a, b, c) {
            var d = _.n(this.get(a));
            this.set(a, "", 0, b, c);
            return d
        };
        _.h.M = function() {
            return Ff(this).keys
        };
        _.h.G = function() {
            return Ff(this).values
        };
        _.h.ba = function() {
            return this.a.cookie ? (this.a.cookie || "").split(Ef).length : 0
        };
        _.h.clear = function() {
            for (var a = Ff(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
        };
        var Ff = function(a) {
            a = (a.a.cookie || "").split(Ef);
            for (var b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return {
                keys: b,
                values: c
            }
        };
        var Gf = function(a, b, c) {
            if (!this.xa) {
                for (var d = this.constructor; d && !d.aa;) d = d.B && d.B.constructor;
                d.aa.Xa || (d.aa.Xa = mf(d));
                this.xa = new d.aa.Xa(this);
                this.u || (this.u = Cf)
            }
            var e = this.xa.b(a.clientBaseUrl || "https://talkgadget.google.com/talkgadget/");
            if (0 == e.lastIndexOf("https://talkgadget.google.com/talkgadget/", 0)) {
                var d = (new Df(window.document)).get("WCSDBG", ""),
                    d = d.split(";")[0],
                    d = d.split("|")[0],
                    f = ["plus.google.com"],
                    g = /^[-_a-zA-Z0-9\.]+\.talkgadget\.google\.com$/;
                0 < d.length && !(0 <= (0, _.ya)(f, d)) &&
                    g.test(d) && (e = _.Wd(e), e = _.Wd("https://" + d + e.a).toString())
            }
            this.V = e;
            this.c = c || new Af;
            a.notificationsOnly && _.L(this.c, 1, !0);
            this.b = "0";
            null != a.authUser ? this.b = a.authUser : (c = ze(new _.Sd(window.location.href), "authuser"), null != c && (this.b = c));
            this.f = a.clientUrl || "notifierclient";
            c = ze(_.Wd(this.f), "authuser");
            null != c && (this.b = c);
            this.l = a.propertyName || "Google Talk";
            this.C = a.cssUrl;
            this.locale = a.locale;
            this.h = a.debug;
            this.Da = a.userJid;
            this.Pa = a.uiVersion;
            this.Fb = null != a.rosterExpanded ? a.rosterExpanded :
                !0;
            this.Ea = a.hostLogMinValue;
            this.Ma = a.hideChat;
            this.Ab = a.refresh;
            this.O = a.hideProfileCard;
            this.ka = a.hideStatusMsgs;
            this.U = a.hideRosterOptions;
            this.P = a.hideRecentConversations;
            this.L = a.hideOTR;
            this.rb = a.hostServerMessageCallback || !1;
            this.Ga = a.isCentralRoster;
            this.zb = a.isFullFrame || !1;
            this.Eb = a.rosterClass || "talk_roster";
            this.La = a.rosterId || "talk_roster";
            this.a = "gtn-roster-iframe-id";
            a.rosterFrameId && a.rosterFrameId.match(/[\w-]/) && (this.a = a.rosterFrameId);
            a.rosterIframeIdB && a.rosterIframeIdB.match(/[\w-]/);
            this.g = a.parentToken;
            this.Db = b || !1;
            _.n(a.isRtl) || Ye.test(this.locale);
            this.j = a.position || "l";
            if (!a.keyboardShortcuts) {
                b = [];
                for (var k in yf) b.push(_.qb(yf[k]))
            }
            this.I = a.entityId;
            this.Qa = a.useQuasarPanels || !1;
            this.Na = a.silent || !1;
            this.sb = a.ignoreCentralRoster || !1;
            this.Bb = a.lazy || !1;
            this.jb = a.handleProfileLinks || !1;
            this.Fa = a.hostSettings;
            this.w = a.screen;
            this.D = a.docsConfig;
            this.Ha = a.jsmode;
            this.Ka = a.moleWidth;
            this.Ja = a.moleHeight;
            this.Ia = a.minimizedMoleHeight || 36;
            this.Gb = a.derp;
            this.Oa = window.location.protocol +
                "//" + window.location.host;
            this.J = a.optOutAllowed;
            this.H = a.legacyTalkSignedIn;
            this.Ra = a.useSpareMole;
            this.A = a.conversationId
        };
        pf.B || _.q(pf, jf);
        Gf.aa = pf;
        var Hf = function(a) {
            switch (a) {
                case 1:
                    return "homepage";
                case 4:
                    return "Google Translator Toolkit";
                case 5:
                    return "Google Sites";
                case 6:
                    return "customersupport";
                case 9:
                    return "present";
                case 15:
                    return "hangout";
                case 18:
                    return "gmail";
                case 20:
                    return "docs";
                case 24:
                    return "docs_hangout";
                case 22:
                    return "hangout_lite";
                case 23:
                    return "ChromeApp";
                case 25:
                    return "bigtop";
                case 27:
                    return "ChromeApp";
                case 36:
                    return "StartPage"
            }
        };
        var If = function(a, b, c, d, e) {
            _.D.call(this);
            this.a = a;
            this.b = d || window.document;
            this.c = new _.H(this);
            _.F(this, this.c);
            var f = _.Ea;
            d = new _.Sd(a.V + a.f);
            Bf(a.c) || (_.N(d, "ts", "0"), _.N(d, "re", a.Fb), _.N(d, "ref", a.Ab));
            _.N(d, "client", "sm");
            _.N(d, "prop", a.l);
            _.N(d, "nav", "true");
            _.N(d, "fid", a.a);
            a.h && _.N(d, "debug", a.h);
            _.N(d, "os", _.Xa);
            _.N(d, "stime", c);
            a.Ma && _.N(d, "hc", a.Ma);
            for (c = 0; c < ef.length; ++c);
            b = ye(b.a);
            _.N(d, "xpc", b);
            _.N(d, "ec", ye(_.qb(a.c)));
            a.w && _.N(d, "screen", a.w); - 1 != f.indexOf("MSIE") && _.N(d, "ua", f);
            a.g && _.N(d, "pvt", a.g);
            a.rb && _.N(d, "hsmc", "true");
            _.n(a.Ea) && _.N(d, "logl", a.Ea);
            b = window.location.href;
            0 > b.indexOf("?rel=1") && (b = b.split("?"), b[1] = 1 == b.length ? "rel=1" : ["rel=1&", b[1]].join(""), _.N(d, "href", b.join("?")));
            b = new _.Sd(window.location.href);
            "false" == ze(b, "uacheck") && _.N(d, "uacheck", !1);
            (f = a.Ha) && _.N(d, "jsmode", f);
            (f = ze(b, "cssmode")) && _.N(d, "cssmode", f);
            (f = ze(b, "convid")) && _.N(d, "convid", f);
            if (f = b.b.G("convp")) _.sa(f) || (f = [String(f)]), _.Kd(d.b, "convp", f);
            (f = ze(b, "smexp")) && _.N(d, "smexp",
                f);
            f = b.b.G("mods");
            a.Bb && f.push("lazy");
            e && (f = _.Fd(f, e));
            0 < f.length && _.N(d, "mods", f.join(","));
            if (!a.V || 0 > a.V.indexOf("/u/"))(e = ze(b, "authuser")) ? _.N(d, "authuser", e) : null != a.b && _.N(d, "authuser", a.b);
            e = ze(b, "eid");
            /^[\s\xa0]*$/.test(null == e ? "" : String(e)) || _.N(d, "eid", e);
            e = this.a.I;
            /^[\s\xa0]*$/.test(null == e ? "" : String(e)) || _.N(d, "eid", this.a.I);
            null != this.a.j && _.N(d, "pos", this.a.j);
            _.n(a.Pa) && _.N(d, "uiv", this.a.Pa);
            a.C && _.N(d, "css", a.C);
            e = a.locale || ze(b, "hl");
            null != e && _.N(d, "hl", e);
            _.n(a.Da) && _.N(d,
                "uj", a.Da);
            null != a.O && _.N(d, "hpc", a.O);
            null != a.ka && _.N(d, "hsm", a.ka);
            null != a.U && _.N(d, "hro", a.U);
            null != a.P && _.N(d, "hrc", a.P);
            null != a.L && _.N(d, "hotr", a.L);
            null != a.Ga && _.N(d, "pop", a.Ga);
            a.Db && _.N(d, "pal", "1");
            null != a.Qa && _.N(d, "uqp", a.Qa);
            null != a.J && _.N(d, "gooa", a.J);
            null != a.H && _.N(d, "gltsi", a.H);
            null != a.Ra && _.N(d, "gusm", a.Ra);
            null != a.Na && _.N(d, "sl", a.Na);
            a.sb && _.N(d, "icr", "1");
            a.jb && _.N(d, "hpl", "1");
            a.Fa && _.N(d, "hs", a.Fa);
            a.D && _.N(d, "dc", ye(_.qb(a.D)));
            null != a.Ka && _.N(d, "molew", a.Ka);
            null != a.Ja && _.N(d,
                "moleh", a.Ja);
            null != a.Ia && _.N(d, "mmoleh", a.Ia);
            a.Gb && _.N(d, "derp", "1");
            null != a.Oa && _.N(d, "two", a.Oa);
            null != a.A && _.N(d, "convid", a.A);
            _.N(d, "host", "1");
            _.N(d, "zx", Ae());
            this.f = d.toString()
        };
        _.q(If, _.D);
        var Jf = function(a, b, c, d) {
            var e = a.b.getElementById(b);
            e || (e = a.b.createElement("div"), e.id = b, e.className = a.a.Eb, a.b.body.appendChild(e));
            a = (0, _.r)(function() {
                var a = "";
                this.a.zb || (a = "height:400px");
                var b = this.b.createElement("iframe");
                Te(b, {
                    id: this.a.a,
                    name: this.a.a,
                    "class": "talk_iframe",
                    frameborder: "0",
                    style: a,
                    "aria-hidden": "true"
                });
                $e("talk_loading_msg", e) || We(e);
                e.appendChild(b);
                var k = this.b.getElementById(this.a.a);
                _.xd(this.c, k, ["load", "error"], function(a) {
                    k.contentWindow.postMessage("AllowFrame: Chat", "*");
                    d(a)
                });
                k.src = this.f.toString();
                c()
            }, a);
            window.setTimeout(a, 0)
        };
        var Kf = function(a) {
            _.Db.call(this, a[0]);
            this.qa = a
        };
        _.q(Kf, _.Db);
        var Lf = function(a) {
            _.y(this, a, "h_ccf", null)
        };
        _.q(Lf, _.x);
        _.A("h_ccf", Lf);
        var Mf = function(a) {
            _.y(this, a, "h_rtp", null)
        };
        _.q(Mf, _.x);
        _.A("h_rtp", Mf);
        var Of = function(a, b, c) {
                var d = Nf[c];
                if (!d) {
                    var e = cf(c),
                        d = e;
                    void 0 === a.style[e] && (e = (_.Va ? "Webkit" : _.Ua ? "Moz" : _.w ? "ms" : _.Qa ? "O" : null) + bf(e), void 0 !== a.style[e] && (d = e));
                    Nf[c] = d
                }(c = d) && (a.style[c] = b)
            },
            Nf = {},
            Pf = function(a) {
                "number" == typeof a && (a = Math.round(a) + "px");
                return a
            };
        var P = function(a, b) {
            _.D.call(this);
            this.P = (0, _.m)();
            this.O = a;
            this.b = b || window.document;
            this.a = new Gf(a, !0, a.endpointConfig);
            this.l = [];
            this.I = new _.I;
            this.j = null
        };
        _.q(P, _.D);
        P.prototype.v = function() {
            P.B.v.call(this);
            _.l.clearTimeout(this.j);
            this.c && this.C && this.c.parentNode.removeEventListener("DOMAttrModified", this.C, !0)
        };
        P.prototype.h = function(a, b) {
            this.f ? this.f[a] && this.f[a].apply(this.f, Array.prototype.slice.call(arguments, 1)) : this.l.push(arguments)
        };
        P.prototype.w = function() {
            var a = (this.b.parentWindow || this.b.defaultView).GTalkNotifier;
            if (a) {
                var b = this.O,
                    c = {},
                    d;
                for (d in b) c[d] = b[d];
                c.endpointConfig = _.qb(this.a.c);
                this.f = new a(c, !0);
                for (a = 0; a < this.l.length; a++) this.h.apply(this, this.l[a]);
                this.l = [];
                a = (0, _.r)(this.onMessage, this);
                this.h("_addClientMessageCallback", a);
                this.h("_addHostBundleMessageCallback", a)
            }
        };
        P.prototype.onMessage = function(a) {
            switch (a[0]) {
                case "h_ccf":
                    var b = new Lf(a);
                    _.z(b, 1)
            }
            _.M(this.I, new Kf(a))
        };
        var Qf = function(a, b) {
            a.h("_h", _.qb(b))
        };
        P.prototype.sendMessage = function(a) {
            Qf(this, a)
        };
        P.prototype.g = function() {
            return this.I
        };
        P.prototype.U = function(a, b) {
            if (b.target == a && ("style" == b.attrName || "class" == b.attrName)) {
                var c = new Mf;
                Qf(this, c)
            }
        };
        P.prototype.ka = function() {
            if ($e("talk_loading_msg", this.b.getElementById(this.a.La))) {
                var a = this.b.getElementById(this.a.a),
                    b = 0,
                    c;
                "undefined" != typeof _.Rf && b instanceof _.Rf ? (c = b.height, b = b.width) : c = 0;
                a.style.width = Pf(b);
                a.style.height = Pf(c);
                if (_.u("overflow")) Of(a, "hidden", "overflow");
                else
                    for (var d in "overflow") Of(a, "overflow" [d], d);
                a.style.display = ""
            }
        };
        var Sf = function(a) {
            var b = a.a.V + "host-js",
                b = Ve(b, "prop", a.a.l),
                c = a.a.Ha;
            c && (b = Ve(b, "jsmode", c));
            Bf(a.a.c) && (b = Ve(b, "b", "1"));
            var b = Ve(b, "zx", Ae()),
                d = (0, _.r)(a.w, a),
                e = Ze("SCRIPT", {
                    type: "text/javascript",
                    src: b
                }),
                f = !1;
            e.onload = e.onreadystatechange = function() {
                f || e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (f = !0, d())
            };
            e.onerror = (0, _.r)(a.H, a, e);
            a.j && (_.l.clearTimeout(a.j), a.j = null);
            a.j = _.O((0, _.r)(function() {
                null != this.f || this.J(e)
            }, a), 25E3);
            a.b.body.appendChild(e)
        };
        P.prototype.H = function() {};
        P.prototype.J = function() {};
        var Tf = function(a) {
                if (a.classList) return a.classList;
                a = a.className;
                return _.u(a) && a.match(/\S+/g) || []
            },
            Uf = function(a) {
                a.classList ? a = a.classList.contains("talk_network_warning") : (a = Tf(a), a = 0 <= (0, _.ya)(a, "talk_network_warning"));
                return a
            },
            Vf = function(a) {
                a.classList ? a.classList.remove("talk_network_warning") : Uf(a) && (a.className = (0, _.Aa)(Tf(a), function(a) {
                    return "talk_network_warning" != a
                }).join(" "))
            };
        var Wf = function(a, b, c, d) {
            this.c = a;
            this.f = b;
            this.a = this.b = a;
            this.u = c || 0;
            this.g = d || 2
        };
        Wf.prototype.reset = function() {
            this.a = this.b = this.c
        };
        Wf.prototype.F = function() {
            return this.b
        };
        var Xf = function(a) {
            a.a = Math.min(a.f, a.a * a.g);
            a.b = Math.min(a.f, a.a + (a.u ? Math.round(a.u * (Math.random() - .5) * 2 * a.a) : 0))
        };
        var Yf = function(a, b, c) {
            var d = {},
                e;
            e = null != _.z(a, 1) ? _.z(a, 1) : "hangouts.google.com";
            var f = "";
            0 > e.indexOf("://") && (f = "https://", 0 <= e.indexOf(":") && 23 != _.z(a, 2) && 27 != _.z(a, 2) && (f = "http://")); - 1 != e.indexOf("talkgadget.") ? (d.clientBaseUrl = f + e + "/talkgadget/_/", d.clientUrl = "chat") : (d.clientBaseUrl = f + e + "/webchat/u/" + Fe(a) + "/", d.clientUrl = "load");
            d.authUser = Fe(a);
            d.propertyName = Hf(_.z(a, 2));
            d.locale = _.z(a, 4);
            d.hideProfileCard = !0;
            d.parentToken = _.z(a, 3);
            e = null != _.z(a, 6) ? _.z(a, 6) : !1;
            d.isRtl = e;
            e = null != _.z(a, 7) ?
                _.z(a, 7) : !1;
            d.lazy = e;
            d.entityId = _.z(a, 9);
            d.hostSettings = _.z(a, 5);
            d.jsmode = _.z(a, 11);
            e = null != _.z(a, 13) ? _.z(a, 13) : !1;
            d.isFullFrame = e;
            e = null != _.z(a, 12) ? _.z(a, 12) : "talk_roster";
            d.rosterId = e;
            e = null != _.z(a, 15) ? _.z(a, 15) : "gtn-roster-iframe-id-b";
            d.rosterIframeIdB = e;
            e = null != _.z(a, 16) ? _.z(a, 16) : !1;
            d.derp = !!e;
            e = _.zd(a, Be, 14);
            null != e && (f = null != _.z(e, 1) ? _.z(e, 1) : !1, d.isCentralRoster = f, e = null != _.z(e, 2) ? _.z(e, 2) : !1, d.useQuasarPanels = e);
            e = _.zd(a, Ee, 10);
            null != e && (d.moleManagerLeftMargin = _.z(e, 1), d.moleManagerMiddleMargin =
                _.z(e, 2), d.moleManagerRightMargin = _.z(e, 3), d.moleManagerNoMoleAreaMargin = _.z(e, 4), d.moleManagerBoundingElementId = _.z(e, 5), d.moleWidth = _.z(e, 6), d.moleHeight = _.z(e, 7), d.minimizedMoleHeight = _.z(e, 8));
            e = _.zd(a, De, 18);
            null != e && (f = null != _.z(e, 1) ? _.z(e, 1) : !0, d.optOutAllowed = f, f = _.zd(e, Ce, 3), null != f && (f = null != _.z(f, 1) ? _.z(f, 1) : !0, d.legacyTalkSignedIn = f), e = _.z(e, 4), null != e && (d.useSpareMole = e));
            d.uiVersion = 2;
            d.hideStatusMsgs = !0;
            d.hideRecentConversations = !0;
            e = new Af;
            _.L(e, 2, !0);
            _.L(e, 1, !0);
            _.L(e, 3, !1);
            d.endpointConfig =
                e;
            e = null != _.z(a, 17) ? _.z(a, 17) : !1;
            d.ignoreAutomatedRoster = e;
            d.conversationId = a.S();
            d.hostCallback = c;
            P.call(this, d, b);
            this.D = new Wf(5E3, 3E5);
            this.L = null
        };
        _.q(Yf, P);
        var Zf = function(a, b) {
            var c = 1 + .5 * Math.random();
            a.L = _.O(function() {
                null == this.f && (_.Yd(this.b.body, b) && this.b.body.removeChild(b), Sf(this))
            }, a.D.F() * c, a);
            Xf(a.D)
        };
        Yf.prototype.J = function(a) {
            hf(["301"]);
            Zf(this, a)
        };
        Yf.prototype.H = function(a) {
            var b = $e("talk_loading_msg", this.b.body);
            b && (b.classList ? b.classList.add("talk_network_warning") : Uf(b) || (b.className += 0 < b.className.length ? " talk_network_warning" : "talk_network_warning"));
            hf(["302"]);
            Zf(this, a)
        };
        Yf.prototype.w = function() {
            Yf.B.w.call(this);
            var a = $e("talk_loading_msg", this.b.body);
            a && Vf(a);
            gf()
        };
        Yf.prototype.v = function() {
            Yf.B.v.call(this);
            _.l.clearTimeout(this.L)
        };
        var $f = function(a) {
            _.I.call(this);
            this.f = a ? a : null;
            this.a = null;
            this.g = !1;
            this.b = [];
            this.h = (0, _.r)(this.kb, this);
            this.j = (0, _.r)(this.Sa, this);
            this.l = null
        };
        _.q($f, _.I);
        var ag = function(a) {
            _.Db.call(this, "message");
            this.message = a
        };
        _.q(ag, _.Db);
        _.h = $f.prototype;
        _.h.v = function() {
            $f.B.v.call(this);
            _.l.clearTimeout(this.l);
            this.Sa(!0);
            for (var a = 0; a < this.b.length; ++a) _.E(this.b[a]);
            delete this.b;
            delete this.h;
            delete this.j
        };
        _.h.sendMessage = function(a) {
            if (null == a || null == a.message) return !1;
            _.Qc(a, this.f, "p");
            this.a && this.g ? this.a.postMessage(a.message()) : this.b.push(a);
            return !0
        };
        _.h.connect = function() {
            if (null == this.f) return !1;
            try {
                if (this.a = window.chrome.runtime.connect({
                        name: this.f
                    }), null == this.a) return !1
            } catch (b) {
                return !1
            }
            this.g = !0;
            this.a.onMessage.addListener(this.h);
            this.a.onDisconnect.addListener(this.j);
            for (var a = this.b.shift(); null != a;) _.Qc(a, this.f, "p"), this.a.postMessage(a.message()), a = this.b.shift();
            return !0
        };
        _.h.kb = function(a) {
            _.M(this, new ag(_.Pc(new _.J, a)))
        };
        _.h.Sa = function(a) {
            this.a && (this.a.onMessage.removeListener(this.h), this.a.onDisconnect.removeListener(this.j), this.a.disconnect(), delete this.a);
            this.g = !1;
            a || (this.l = _.O(this.Yb, 5E3, this))
        };
        _.h.Yb = function() {
            this.connect() ? _.M(this, {
                type: "reconnected"
            }) : _.M(this, {
                type: "disconnected"
            })
        };
        var cg = function(a) {
            _.y(this, a, "h_exts", bg)
        };
        _.q(cg, _.x);
        var bg = [2];
        _.A("h_exts", cg);
        var dg = function() {
            _.D.call(this);
            this.b = " "
        };
        _.q(dg, _.D);
        var eg = function(a, b, c) {
            a.a = c;
            b = _.Xd(b, "/webchat/extension-start");
            a = (0, _.r)(a.c, a);
            c = new xe;
            qe.push(c);
            a && c.listen("complete", a);
            _.Mb(c.c, "ready", c.xb, !0, void 0, void 0);
            c.send(b, void 0, void 0, void 0)
        };
        dg.prototype.c = function(a) {
            if (!this.K) {
                this.b = "";
                if (he(a.b)) try {
                    var b;
                    var c = a.b;
                    try {
                        b = c.a ? c.a.responseText : ""
                    } catch (e) {
                        b = ""
                    }
                    var d = JSON.parse(b);
                    this.b = _.z(new cg(d), 1) || ""
                } catch (e) {}
                this.a && (this.a(), this.a = null)
            }
        };
        var fg = function(a) {
            _.y(this, a, "h_cp", null)
        };
        _.q(fg, _.x);
        _.A("h_cp", fg);
        var gg = function(a) {
            _.y(this, a, "rbc_d", null)
        };
        _.q(gg, _.x);
        _.A("rbc_d", gg);
        gg.prototype.setTitle = function(a) {
            _.L(this, 1, a)
        };
        var ig = function(a) {
            _.y(this, a, "h_cd", hg)
        };
        _.q(ig, _.x);
        var hg = [1, 4, 5];
        _.A("h_cd", ig);
        ig.prototype.S = function() {
            return _.z(this, 2)
        };
        var jg = function(a) {
            _.y(this, a, "h_hn", null)
        };
        _.q(jg, _.x);
        _.A("h_hn", jg);
        var kg = function(a) {
            _.y(this, a, "h_hs", null)
        };
        _.q(kg, _.x);
        _.A("h_hs", kg);
        var mg = function(a) {
            _.y(this, a, "h_jm", lg)
        };
        _.q(mg, _.x);
        var lg = [2];
        _.A("h_jm", mg);
        var ng = function(a) {
            _.y(this, a, "h_oc", null)
        };
        _.q(ng, _.x);
        _.A("h_oc", ng);
        var og = function(a) {
            _.y(this, a, "h_opc", null)
        };
        _.q(og, _.x);
        _.A("h_opc", og);
        var pg = function(a) {
            _.y(this, a, "h_ogc", null)
        };
        _.q(pg, _.x);
        _.A("h_ogc", pg);
        var qg = function(a) {
            _.y(this, a, "h_sc", null)
        };
        _.q(qg, _.x);
        _.A("h_sc", qg);
        var sg = function(a) {
            _.y(this, a, "h_ssc", rg)
        };
        _.q(sg, _.x);
        var rg = [5];
        _.A("h_ssc", sg);
        var ug = function(a) {
            _.y(this, a, "h_sm", tg)
        };
        _.q(ug, _.x);
        var tg = [1, 3];
        _.A("h_sm", ug);
        var vg = function(a) {
            _.y(this, a, "h_po", null)
        };
        _.q(vg, _.x);
        _.A("h_po", vg);
        var wg = function(a) {
            _.I.call(this);
            this.a = a
        };
        _.q(wg, _.I);
        var xg = new _.G("O9EQob");
        var yg = function(a) {
            _.y(this, a, "h_cs", null)
        };
        _.q(yg, _.x);
        _.A("h_cs", yg);
        yg.prototype.getState = function() {
            return _.z(this, 1)
        };
        var Ag = function(a) {
            _.I.call(this);
            this.j = a;
            this.b = zg.LOADING;
            this.a = !1;
            this.g = !0;
            this.f = new _.H(this);
            _.F(this, this.f);
            this.f.listen(this.j.g(), "h_cs", this.l)
        };
        _.q(Ag, _.I);
        var zg = {
                LOADING: 0,
                ib: 1,
                lc: 2,
                mc: 3,
                ERROR: 4,
                LOADED: 5,
                hb: 6
            },
            Bg = new _.G("HwdKC");
        Ag.prototype.getState = function() {
            return this.b
        };
        Ag.prototype.h = function() {
            return this.a
        };
        Ag.prototype.l = function(a) {
            a = new yg(a.qa);
            var b = a.getState();
            null != b && this.b != b && (this.b = b, _.M(this, "f"));
            b = _.z(a, 2);
            null != b && this.a != b && (this.a = b, _.M(this, "e"));
            a = _.z(a, 3);
            null != a && this.g != a && (this.g = a, _.M(this, "d"))
        };
        var Cg = function(a) {
            _.y(this, a, "capii_c_cel", null)
        };
        _.q(Cg, _.x);
        _.A("capii_c_cel", Cg);
        var Dg = function(a) {
            _.y(this, a, "capi:rfc", null)
        };
        _.q(Dg, _.x);
        _.A("capi:rfc", Dg);
        var Eg = function(a) {
            _.y(this, a, "capii_c_ucmc", null)
        };
        _.q(Eg, _.x);
        _.A("capii_c_ucmc", Eg);
        var Fg = function(a) {
            _.y(this, a, "capii_c_rc", null)
        };
        _.q(Fg, _.x);
        _.A("capii_c_rc", Fg);
        Fg.prototype.S = function() {
            return _.z(this, 1)
        };
        var Gg = new _.G("nED8Yb"),
            Hg = new _.G("xclgJb");
        var Ig = function(a) {
            _.I.call(this);
            this.f = a.get(Gg);
            this.a = this.h = 0;
            this.g = this.b = !1;
            a = new _.H(this);
            _.F(this, a);
            a.listen(this.f.g(), "capii_c_ucmc", this.j);
            this.f.sendMessage(new Eg)
        };
        _.q(Ig, _.I);
        Ig.prototype.j = function(a) {
            a = new Eg(a.qa);
            this.b || (this.b = !0, this.g && (_.L(a, 5, !0), this.g = !1));
            var b = this.h != _.z(a, 1);
            this.h = Number(_.z(a, 1));
            var c = this.a != _.z(a, 2);
            this.a = Number(_.z(a, 2));
            _.z(a, 5) ? _.M(this, "g") : (b && _.M(this, "i"), c && _.M(this, "h"))
        };
        var Jg = function(a) {
            _.y(this, a, "h_rha", null)
        };
        _.q(Jg, _.x);
        _.A("h_rha", Jg);
        var Kg = function(a) {
            _.y(this, a, "h_ssf", null)
        };
        _.q(Kg, _.x);
        _.A("h_ssf", Kg);
        var Lg = function(a, b) {
            _.D.call(this);
            this.a = new _.H(this);
            _.F(this, this.a);
            this.a.listen(a.g(), "h_ssf", function(a) {
                a = _.z(new Kg(a.qa), 1);
                var c;
                if (null != a && JSON && JSON.parse) try {
                    c = JSON.parse(a)
                } catch (f) {}
                b(c)
            });
            var c = new Jg;
            _.L(c, 1, 1);
            Qf(a, c)
        };
        _.q(Lg, _.D);
        var Mg = function(a) {
            _.y(this, a, "h_ext", null)
        };
        _.q(Mg, _.x);
        _.A("h_ext", Mg);
        var Ng = function(a) {
            _.y(this, a, "h_sru", null)
        };
        _.q(Ng, _.x);
        _.A("h_sru", Ng);
        var Qg = function() {
                _.H.call(this);
                this.b = new _.md;
                _.F(this, this.b);
                this.l = this.h = this.j = this.a = null;
                this.C = _.Nc("quasar", "" + (new Date).getTime());
                this.c = [];
                this.g = new $f(this.C);
                _.F(this, this.g);
                this.w = null;
                this.g.connect();
                _.fc(this, this.g, "message", this.O, !0, this);
                this.A = new dg;
                _.F(this, this.A);
                this.listen(window, "unload", this.N);
                this.listen(window, "load", this.H);
                Og(this, (0, _.r)(function() {
                    Pg(this, ["onHostReady"], "extensionLibrary")
                }, this))
            },
            Rg;
        _.q(Qg, _.H);
        var Og = function(a, b) {
            null == a.c ? b() : a.c.push(b)
        };
        Qg.prototype.H = function() {
            var a = new _.Vc(_.Yc.ca().get("settings"));
            this.w = a.b[0];
            _.E(a);
            eg(this.A, this.w, (0, _.r)(function() {
                if (!this.K) {
                    _.L(new Af, 2, !0);
                    var a = new _.dc,
                        c = this.A.b;
                    if (c) {
                        _.L(a, 3, c);
                        var c = _.Wd(this.w),
                            d = c.c;
                        null != c.f && (d += ":" + c.f);
                        _.L(a, 1, d);
                        _.L(a, 2, 23);
                        d = window.chrome.i18n.getMessage("@@ui_locale");
                        _.L(a, 4, d);
                        _.L(a, 13, !0);
                        _.L(a, 17, !0);
                        c = ze(c, "jsmode");
                        null != c && _.L(a, 11, c);
                        c = new Be;
                        _.L(c, 2, !0);
                        _.L(c, 1, !0);
                        _.yd(a, 14, c);
                        a = new Yf(a, void 0, (0, _.r)(this.L, this));
                        _.u(void 0) && (a.a.g = void 0);
                        c = a.a;
                        var e = a.a.V,
                            d = a.a.b;
                        if (-1 != e.indexOf("talkgadget.")) {
                            var f = _.Wd(e),
                                g = f.a;
                            if (0 <= g.indexOf("/u/")) d = e;
                            else {
                                e = g.lastIndexOf("_/");
                                if (0 > e || e != g.length - 2) g += "_/";
                                f.a = "/u/" + d + g;
                                d = f.toString()
                            }
                        } else d = e;
                        c.V = d;
                        a.a.f = a.a.f.replace("notifierclient", "chat");
                        a.A || (c = ff(a.a.V, a.a.a), a.A = new If(a.a, c, a.P, a.b, void 0), _.F(a, a.A));
                        Jf(a.A, a.a.La, (0, _.r)(a.ka, a), (0, _.r)(a.h, a, "_rosterIframeLoaded"));
                        _.hb && (a.c = a.b.createElement("IFRAME"), a.c.id = "gth-talk-plugin-frame-id", a.c.name = "gth-talk-plugin-frame-id", a.c.src =
                            a.a.V + "blank", a.c.style.cssText = "width: 0px; height: 0px; position: absolute; top: 0px; left: 0px; visibility:hidden;", a.b.documentElement.appendChild(a.c), a.C = (0, _.r)(a.U, a, a.c.parentNode), a.c.parentNode.addEventListener("DOMAttrModified", a.C, !0));
                        Sf(a);
                        this.a = a;
                        this.b.a(Gg, this.a);
                        this.j = new Ag(this.a);
                        this.b.a(Bg, this.j);
                        this.listen(this.j, "f", this.J);
                        this.h = new wg(this.a);
                        this.b.a(xg, this.h);
                        this.l = new Ig(this.b);
                        this.b.a(Hg, this.l);
                        this.listen(this.l, "h", this.D);
                        this.D();
                        a = new Lg(this.a, (0, _.r)(this.P,
                            this));
                        _.F(this, a);
                        this.listen(this.a.g(), "h_sru", this.U)
                    } else Pg(this, ["changeDesktop", 3], "desktopManager")
                }
                for (; this.c.length;) this.c.shift()();
                this.c = null
            }, this))
        };
        Qg.prototype.L = function(a, b) {
            if ("extensionMessage" == a)
                if ("__reload__" == b) window.chrome.runtime.reload();
                else {
                    var c = new _.J,
                        d = {};
                    try {
                        d = JSON.parse(b) || {}
                    } catch (e) {}
                    _.Pc(c, d);
                    this.g.sendMessage(c)
                }
        };
        Qg.prototype.J = function() {
            var a;
            switch (this.j.getState()) {
                case zg.LOADING:
                    a = 2;
                    break;
                case zg.ib:
                    a = 4;
                    break;
                case zg.hb:
                    a = 3;
                    break;
                default:
                    return
            }
            Pg(this, ["changeDesktop", a], "desktopManager")
        };
        Qg.prototype.O = function(a) {
            Og(this, (0, _.r)(function() {
                var b = a.message;
                switch (b.c) {
                    case "onSendHostMessage":
                        var c = new Mg;
                        _.L(c, 1, b.b.toString());
                        this.a && this.a.sendMessage(c);
                        break;
                    case "onOpenConversation":
                        var c = this.h,
                            b = b.b[0],
                            d = new ng;
                        _.L(d, 1, b);
                        Qf(c.a, d);
                        d = new ig;
                        _.L(d, 1, [b]);
                        b = new og;
                        _.yd(b, 1, d);
                        Qf(c.a, b);
                        break;
                    case "h_icr":
                        c = b.b[0], this.h && (b = this.h, d = new _.be, _.L(d, 1, c), Qf(b.a, d))
                }
            }, this))
        };
        var Pg = function(a, b, c) {
            var d = new _.J;
            _.Qc(d, a.C, "p");
            _.wd(d, "", "e");
            _.Sc(d, b);
            null != c && (d.h = c);
            _.Rc(d, "" + (0, _.m)());
            a.g.sendMessage(d)
        };
        Qg.prototype.P = function() {
            var a = _.ce();
            window.open(a)
        };
        Qg.prototype.U = function(a) {
            a = new Ng(a.qa);
            Pg(this, ["setRosterUrl", _.z(a, 2)], "dataChannelManager")
        };
        Qg.prototype.D = function() {
            Pg(this, ["setUnreadIndicator", !!this.l.a], "desktopManager")
        };
        if (!_.n(Rg) || null == Rg || Rg.K) Rg = new Qg;
    } catch (e) {
        _._DumpException(e)
    }
}).call(this, this.default_datachannel);
// Google Inc.