(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [490], {
        31050: function(t, e, r) {
            "use strict";
            e.Xx = e._w = e.aP = e.KS = e.jQ = void 0;
            const i = r(31416),
                n = r(93350),
                s = r(17309);

            function o(t) {
                const e = new Float64Array(16);
                if (t)
                    for (let r = 0; r < t.length; r++) e[r] = t[r];
                return e
            }
            e.jQ = 64, e.KS = 64, e.aP = 32;
            new Uint8Array(32)[0] = 9;
            const a = o(),
                c = o([1]),
                u = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                h = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(t, e) {
                for (let r = 0; r < 16; r++) t[r] = 0 | e[r]
            }

            function g(t) {
                let e = 1;
                for (let r = 0; r < 16; r++) {
                    let i = t[r] + e + 65535;
                    e = Math.floor(i / 65536), t[r] = i - 65536 * e
                }
                t[0] += e - 1 + 37 * (e - 1)
            }

            function y(t, e, r) {
                const i = ~(r - 1);
                for (let n = 0; n < 16; n++) {
                    const r = i & (t[n] ^ e[n]);
                    t[n] ^= r, e[n] ^= r
                }
            }

            function v(t, e) {
                const r = o(),
                    i = o();
                for (let n = 0; n < 16; n++) i[n] = e[n];
                g(i), g(i), g(i);
                for (let n = 0; n < 2; n++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    const t = r[15] >> 16 & 1;
                    r[14] &= 65535, y(i, r, 1 - t)
                }
                for (let n = 0; n < 16; n++) t[2 * n] = 255 & i[n], t[2 * n + 1] = i[n] >> 8
            }

            function m(t, e) {
                let r = 0;
                for (let i = 0; i < 32; i++) r |= t[i] ^ e[i];
                return (1 & r - 1 >>> 8) - 1
            }

            function w(t, e) {
                const r = new Uint8Array(32),
                    i = new Uint8Array(32);
                return v(r, t), v(i, e), m(r, i)
            }

            function _(t) {
                const e = new Uint8Array(32);
                return v(e, t), 1 & e[0]
            }

            function b(t, e, r) {
                for (let i = 0; i < 16; i++) t[i] = e[i] + r[i]
            }

            function I(t, e, r) {
                for (let i = 0; i < 16; i++) t[i] = e[i] - r[i]
            }

            function E(t, e, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    h = 0,
                    l = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    w = 0,
                    _ = 0,
                    b = 0,
                    I = 0,
                    E = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    R = 0,
                    x = 0,
                    C = 0,
                    A = 0,
                    N = 0,
                    j = 0,
                    T = 0,
                    q = 0,
                    D = 0,
                    z = r[0],
                    L = r[1],
                    M = r[2],
                    k = r[3],
                    $ = r[4],
                    U = r[5],
                    H = r[6],
                    V = r[7],
                    K = r[8],
                    B = r[9],
                    F = r[10],
                    Z = r[11],
                    W = r[12],
                    J = r[13],
                    G = r[14],
                    Q = r[15];
                i = e[0], s += i * z, o += i * L, a += i * M, c += i * k, u += i * $, h += i * U, l += i * H, p += i * V, f += i * K, d += i * B, g += i * F, y += i * Z, v += i * W, m += i * J, w += i * G, _ += i * Q, i = e[1], o += i * z, a += i * L, c += i * M, u += i * k, h += i * $, l += i * U, p += i * H, f += i * V, d += i * K, g += i * B, y += i * F, v += i * Z, m += i * W, w += i * J, _ += i * G, b += i * Q, i = e[2], a += i * z, c += i * L, u += i * M, h += i * k, l += i * $, p += i * U, f += i * H, d += i * V, g += i * K, y += i * B, v += i * F, m += i * Z, w += i * W, _ += i * J, b += i * G, I += i * Q, i = e[3], c += i * z, u += i * L, h += i * M, l += i * k, p += i * $, f += i * U, d += i * H, g += i * V, y += i * K, v += i * B, m += i * F, w += i * Z, _ += i * W, b += i * J, I += i * G, E += i * Q, i = e[4], u += i * z, h += i * L, l += i * M, p += i * k, f += i * $, d += i * U, g += i * H, y += i * V, v += i * K, m += i * B, w += i * F, _ += i * Z, b += i * W, I += i * J, E += i * G, P += i * Q, i = e[5], h += i * z, l += i * L, p += i * M, f += i * k, d += i * $, g += i * U, y += i * H, v += i * V, m += i * K, w += i * B, _ += i * F, b += i * Z, I += i * W, E += i * J, P += i * G, S += i * Q, i = e[6], l += i * z, p += i * L, f += i * M, d += i * k, g += i * $, y += i * U, v += i * H, m += i * V, w += i * K, _ += i * B, b += i * F, I += i * Z, E += i * W, P += i * J, S += i * G, O += i * Q, i = e[7], p += i * z, f += i * L, d += i * M, g += i * k, y += i * $, v += i * U, m += i * H, w += i * V, _ += i * K, b += i * B, I += i * F, E += i * Z, P += i * W, S += i * J, O += i * G, R += i * Q, i = e[8], f += i * z, d += i * L, g += i * M, y += i * k, v += i * $, m += i * U, w += i * H, _ += i * V, b += i * K, I += i * B, E += i * F, P += i * Z, S += i * W, O += i * J, R += i * G, x += i * Q, i = e[9], d += i * z, g += i * L, y += i * M, v += i * k, m += i * $, w += i * U, _ += i * H, b += i * V, I += i * K, E += i * B, P += i * F, S += i * Z, O += i * W, R += i * J, x += i * G, C += i * Q, i = e[10], g += i * z, y += i * L, v += i * M, m += i * k, w += i * $, _ += i * U, b += i * H, I += i * V, E += i * K, P += i * B, S += i * F, O += i * Z, R += i * W, x += i * J, C += i * G, A += i * Q, i = e[11], y += i * z, v += i * L, m += i * M, w += i * k, _ += i * $, b += i * U, I += i * H, E += i * V, P += i * K, S += i * B, O += i * F, R += i * Z, x += i * W, C += i * J, A += i * G, N += i * Q, i = e[12], v += i * z, m += i * L, w += i * M, _ += i * k, b += i * $, I += i * U, E += i * H, P += i * V, S += i * K, O += i * B, R += i * F, x += i * Z, C += i * W, A += i * J, N += i * G, j += i * Q, i = e[13], m += i * z, w += i * L, _ += i * M, b += i * k, I += i * $, E += i * U, P += i * H, S += i * V, O += i * K, R += i * B, x += i * F, C += i * Z, A += i * W, N += i * J, j += i * G, T += i * Q, i = e[14], w += i * z, _ += i * L, b += i * M, I += i * k, E += i * $, P += i * U, S += i * H, O += i * V, R += i * K, x += i * B, C += i * F, A += i * Z, N += i * W, j += i * J, T += i * G, q += i * Q, i = e[15], _ += i * z, b += i * L, I += i * M, E += i * k, P += i * $, S += i * U, O += i * H, R += i * V, x += i * K, C += i * B, A += i * F, N += i * Z, j += i * W, T += i * J, q += i * G, D += i * Q, s += 38 * b, o += 38 * I, a += 38 * E, c += 38 * P, u += 38 * S, h += 38 * O, l += 38 * R, p += 38 * x, f += 38 * C, d += 38 * A, g += 38 * N, y += 38 * j, v += 38 * T, m += 38 * q, w += 38 * D, n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), c = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), u = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), w = i - 65536 * n, i = _ + n + 65535, n = Math.floor(i / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), c = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), u = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), w = i - 65536 * n, i = _ + n + 65535, n = Math.floor(i / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), t[0] = s, t[1] = o, t[2] = a, t[3] = c, t[4] = u, t[5] = h, t[6] = l, t[7] = p, t[8] = f, t[9] = d, t[10] = g, t[11] = y, t[12] = v, t[13] = m, t[14] = w, t[15] = _
            }

            function P(t, e) {
                E(t, e, e)
            }

            function S(t, e) {
                const r = o();
                let i;
                for (i = 0; i < 16; i++) r[i] = e[i];
                for (i = 253; i >= 0; i--) P(r, r), 2 !== i && 4 !== i && E(r, r, e);
                for (i = 0; i < 16; i++) t[i] = r[i]
            }

            function O(t, e) {
                const r = o(),
                    i = o(),
                    n = o(),
                    s = o(),
                    a = o(),
                    c = o(),
                    u = o(),
                    l = o(),
                    p = o();
                I(r, t[1], t[0]), I(p, e[1], e[0]), E(r, r, p), b(i, t[0], t[1]), b(p, e[0], e[1]), E(i, i, p), E(n, t[3], e[3]), E(n, n, h), E(s, t[2], e[2]), b(s, s, s), I(a, i, r), I(c, s, n), b(u, s, n), b(l, i, r), E(t[0], a, c), E(t[1], l, u), E(t[2], u, c), E(t[3], a, l)
            }

            function R(t, e, r) {
                for (let i = 0; i < 4; i++) y(t[i], e[i], r)
            }

            function x(t, e) {
                const r = o(),
                    i = o(),
                    n = o();
                S(n, e[2]), E(r, e[0], n), E(i, e[1], n), v(t, i), t[31] ^= _(r) << 7
            }

            function C(t, e, r) {
                d(t[0], a), d(t[1], c), d(t[2], c), d(t[3], a);
                for (let i = 255; i >= 0; --i) {
                    const n = r[i / 8 | 0] >> (7 & i) & 1;
                    R(t, e, n), O(e, t), O(t, t), R(t, e, n)
                }
            }

            function A(t, e) {
                const r = [o(), o(), o(), o()];
                d(r[0], l), d(r[1], p), d(r[2], c), E(r[3], l, p), C(t, r, e)
            }

            function N(t) {
                if (t.length !== e.aP) throw new Error(`ed25519: seed must be ${e.aP} bytes`);
                const r = (0, n.hash)(t);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                const i = new Uint8Array(32),
                    s = [o(), o(), o(), o()];
                A(s, r), x(i, s);
                const a = new Uint8Array(64);
                return a.set(t), a.set(i, 32), {
                    publicKey: i,
                    secretKey: a
                }
            }
            e._w = N;
            const j = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function T(t, e) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) e[n] += r - 16 * e[i] * j[n - (i - 32)], r = Math.floor((e[n] + 128) / 256), e[n] -= 256 * r;
                    e[n] += r, e[i] = 0
                }
                for (r = 0, n = 0; n < 32; n++) e[n] += r - (e[31] >> 4) * j[n], r = e[n] >> 8, e[n] &= 255;
                for (n = 0; n < 32; n++) e[n] -= r * j[n];
                for (i = 0; i < 32; i++) e[i + 1] += e[i] >> 8, t[i] = 255 & e[i]
            }

            function q(t) {
                const e = new Float64Array(64);
                for (let r = 0; r < 64; r++) e[r] = t[r];
                for (let r = 0; r < 64; r++) t[r] = 0;
                T(t, e)
            }

            function D(t, e) {
                const r = o(),
                    i = o(),
                    n = o(),
                    s = o(),
                    h = o(),
                    l = o(),
                    p = o();
                return d(t[2], c),
                    function(t, e) {
                        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                        t[15] &= 32767
                    }(t[1], e), P(n, t[1]), E(s, n, u), I(n, n, t[2]), b(s, t[2], s), P(h, s), P(l, h), E(p, l, h), E(r, p, n), E(r, r, s),
                    function(t, e) {
                        const r = o();
                        let i;
                        for (i = 0; i < 16; i++) r[i] = e[i];
                        for (i = 250; i >= 0; i--) P(r, r), 1 !== i && E(r, r, e);
                        for (i = 0; i < 16; i++) t[i] = r[i]
                    }(r, r), E(r, r, n), E(r, r, s), E(r, r, s), E(t[0], r, s), P(i, t[0]), E(i, i, s), w(i, n) && E(t[0], t[0], f), P(i, t[0]), E(i, i, s), w(i, n) ? -1 : (_(t[0]) === e[31] >> 7 && I(t[0], a, t[0]), E(t[3], t[0], t[1]), 0)
            }
            e.Xx = function(t, e) {
                const r = new Float64Array(64),
                    i = [o(), o(), o(), o()],
                    s = (0, n.hash)(t.subarray(0, 32));
                s[0] &= 248, s[31] &= 127, s[31] |= 64;
                const a = new Uint8Array(64);
                a.set(s.subarray(32), 32);
                const c = new n.SHA512;
                c.update(a.subarray(32)), c.update(e);
                const u = c.digest();
                c.clean(), q(u), A(i, u), x(a, i), c.reset(), c.update(a.subarray(0, 32)), c.update(t.subarray(32)), c.update(e);
                const h = c.digest();
                q(h);
                for (let n = 0; n < 32; n++) r[n] = u[n];
                for (let n = 0; n < 32; n++)
                    for (let t = 0; t < 32; t++) r[n + t] += h[n] * s[t];
                return T(a.subarray(32), r), a
            }
        },
        93350: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(98099),
                n = r(17309);
            e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
            var s = function() {
                function t() {
                    this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return t.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, t.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, t.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, t.prototype.update = function(t, r) {
                    if (void 0 === r && (r = t.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < e.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = t[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = t[i++], r--;
                    return this
                }, t.prototype.finish = function(t) {
                    if (!this._finished) {
                        var e = this._bytesHashed,
                            r = this._bufferLength,
                            n = e / 536870912 | 0,
                            s = e << 3,
                            o = e % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
                        i.writeUint32BE(n, this._buffer, o - 8), i.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 8; c++) i.writeUint32BE(this._stateHi[c], t, 8 * c), i.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
                    return this
                }, t.prototype.digest = function() {
                    var t = new Uint8Array(this.digestLength);
                    return this.finish(t), t
                }, t.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, t.prototype.restoreState = function(t) {
                    return this._stateHi.set(t.stateHi), this._stateLo.set(t.stateLo), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
                }, t.prototype.cleanSavedState = function(t) {
                    n.wipe(t.stateHi), n.wipe(t.stateLo), t.buffer && n.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
                }, t
            }();
            e.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(t, e, r, n, s, a, c) {
                for (var u, h, l, p, f, d, g, y, v = r[0], m = r[1], w = r[2], _ = r[3], b = r[4], I = r[5], E = r[6], P = r[7], S = n[0], O = n[1], R = n[2], x = n[3], C = n[4], A = n[5], N = n[6], j = n[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var q = 8 * T + a;
                        t[T] = i.readUint32BE(s, q), e[T] = i.readUint32BE(s, q + 4)
                    }
                    for (T = 0; T < 80; T++) {
                        var D, z, L = v,
                            M = m,
                            k = w,
                            $ = _,
                            U = b,
                            H = I,
                            V = E,
                            K = S,
                            B = O,
                            F = R,
                            Z = x,
                            W = C,
                            J = A,
                            G = N;
                        if (f = 65535 & (h = j), d = h >>> 16, g = 65535 & (u = P), y = u >>> 16, f += 65535 & (h = (C >>> 14 | b << 18) ^ (C >>> 18 | b << 14) ^ (b >>> 9 | C << 23)), d += h >>> 16, g += 65535 & (u = (b >>> 14 | C << 18) ^ (b >>> 18 | C << 14) ^ (C >>> 9 | b << 23)), y += u >>> 16, f += 65535 & (h = C & A ^ ~C & N), d += h >>> 16, g += 65535 & (u = b & I ^ ~b & E), y += u >>> 16, u = o[2 * T], f += 65535 & (h = o[2 * T + 1]), d += h >>> 16, g += 65535 & u, y += u >>> 16, u = t[T % 16], d += (h = e[T % 16]) >>> 16, g += 65535 & u, y += u >>> 16, g += (d += (f += 65535 & h) >>> 16) >>> 16, f = 65535 & (h = p = 65535 & f | d << 16), d = h >>> 16, g = 65535 & (u = l = 65535 & g | (y += g >>> 16) << 16), y = u >>> 16, f += 65535 & (h = (S >>> 28 | v << 4) ^ (v >>> 2 | S << 30) ^ (v >>> 7 | S << 25)), d += h >>> 16, g += 65535 & (u = (v >>> 28 | S << 4) ^ (S >>> 2 | v << 30) ^ (S >>> 7 | v << 25)), y += u >>> 16, d += (h = S & O ^ S & R ^ O & R) >>> 16, g += 65535 & (u = v & m ^ v & w ^ m & w), y += u >>> 16, D = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (y += g >>> 16) << 16, z = 65535 & f | d << 16, f = 65535 & (h = Z), d = h >>> 16, g = 65535 & (u = $), y = u >>> 16, d += (h = p) >>> 16, g += 65535 & (u = l), y += u >>> 16, m = L, w = M, _ = k, b = $ = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (y += g >>> 16) << 16, I = U, E = H, P = V, v = D, O = K, R = B, x = F, C = Z = 65535 & f | d << 16, A = W, N = J, j = G, S = z, T % 16 === 15)
                            for (q = 0; q < 16; q++) u = t[q], f = 65535 & (h = e[q]), d = h >>> 16, g = 65535 & u, y = u >>> 16, u = t[(q + 9) % 16], f += 65535 & (h = e[(q + 9) % 16]), d += h >>> 16, g += 65535 & u, y += u >>> 16, l = t[(q + 1) % 16], f += 65535 & (h = ((p = e[(q + 1) % 16]) >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)), d += h >>> 16, g += 65535 & (u = (l >>> 1 | p << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7), y += u >>> 16, l = t[(q + 14) % 16], d += (h = ((p = e[(q + 14) % 16]) >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)) >>> 16, g += 65535 & (u = (l >>> 19 | p << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6), y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, t[q] = 65535 & g | y << 16, e[q] = 65535 & f | d << 16
                    }
                    f = 65535 & (h = S), d = h >>> 16, g = 65535 & (u = v), y = u >>> 16, u = r[0], d += (h = n[0]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = S = 65535 & f | d << 16, f = 65535 & (h = O), d = h >>> 16, g = 65535 & (u = m), y = u >>> 16, u = r[1], d += (h = n[1]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = O = 65535 & f | d << 16, f = 65535 & (h = R), d = h >>> 16, g = 65535 & (u = w), y = u >>> 16, u = r[2], d += (h = n[2]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[2] = w = 65535 & g | y << 16, n[2] = R = 65535 & f | d << 16, f = 65535 & (h = x), d = h >>> 16, g = 65535 & (u = _), y = u >>> 16, u = r[3], d += (h = n[3]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[3] = _ = 65535 & g | y << 16, n[3] = x = 65535 & f | d << 16, f = 65535 & (h = C), d = h >>> 16, g = 65535 & (u = b), y = u >>> 16, u = r[4], d += (h = n[4]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[4] = b = 65535 & g | y << 16, n[4] = C = 65535 & f | d << 16, f = 65535 & (h = A), d = h >>> 16, g = 65535 & (u = I), y = u >>> 16, u = r[5], d += (h = n[5]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[5] = I = 65535 & g | y << 16, n[5] = A = 65535 & f | d << 16, f = 65535 & (h = N), d = h >>> 16, g = 65535 & (u = E), y = u >>> 16, u = r[6], d += (h = n[6]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[6] = E = 65535 & g | y << 16, n[6] = N = 65535 & f | d << 16, f = 65535 & (h = j), d = h >>> 16, g = 65535 & (u = P), y = u >>> 16, u = r[7], d += (h = n[7]) >>> 16, g += 65535 & u, y += u >>> 16, y += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16, r[7] = P = 65535 & g | y << 16, n[7] = j = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            e.hash = function(t) {
                var e = new s;
                e.update(t);
                var r = e.digest();
                return e.clean(), r
            }
        },
        70490: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                EthereumProvider: function() {
                    return Qn
                },
                OPTIONAL_EVENTS: function() {
                    return Mn
                },
                OPTIONAL_METHODS: function() {
                    return zn
                },
                REQUIRED_EVENTS: function() {
                    return Ln
                },
                REQUIRED_METHODS: function() {
                    return Dn
                },
                default: function() {
                    return Gn
                }
            });
            var i = r(17187),
                n = r.n(i),
                s = r(50778);
            const o = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                a = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                c = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function u(t, e) {
                if (!("__proto__" === t || "constructor" === t && e && "object" === typeof e && "prototype" in e)) return e;
                ! function(t) {
                    console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
                }(t)
            }

            function h(t, e = {}) {
                if ("string" !== typeof t) return t;
                const r = t.trim();
                if ('"' === t[0] && '"' === t.at(-1) && !t.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    const t = r.toLowerCase();
                    if ("true" === t) return !0;
                    if ("false" === t) return !1;
                    if ("undefined" === t) return;
                    if ("null" === t) return null;
                    if ("nan" === t) return Number.NaN;
                    if ("infinity" === t) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === t) return Number.NEGATIVE_INFINITY
                }
                if (!c.test(t)) {
                    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return t
                }
                try {
                    if (o.test(t) || a.test(t)) {
                        if (e.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(t, u)
                    }
                    return JSON.parse(t)
                } catch (i) {
                    if (e.strict) throw i;
                    return t
                }
            }
            var l = r(48764).Buffer;

            function p(t, ...e) {
                try {
                    return (r = t(...e)) && "function" === typeof r.then ? r : Promise.resolve(r)
                } catch (i) {
                    return Promise.reject(i)
                }
                var r
            }

            function f(t) {
                if (function(t) {
                        const e = typeof t;
                        return null === t || "object" !== e && "function" !== e
                    }(t)) return String(t);
                if (function(t) {
                        const e = Object.getPrototypeOf(t);
                        return !e || e.isPrototypeOf(Object)
                    }(t) || Array.isArray(t)) return JSON.stringify(t);
                if ("function" === typeof t.toJSON) return f(t.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function d() {
                if (void 0 === typeof l) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const g = "base64:";

            function y(t) {
                return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function v(...t) {
                return y(t.join(":"))
            }

            function m(t) {
                return (t = y(t)) ? t + ":" : ""
            }
            const w = () => {
                const t = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: e => t.has(e),
                    getItem: e => t.get(e) ? ? null,
                    getItemRaw: e => t.get(e) ? ? null,
                    setItem(e, r) {
                        t.set(e, r)
                    },
                    setItemRaw(e, r) {
                        t.set(e, r)
                    },
                    removeItem(e) {
                        t.delete(e)
                    },
                    getKeys: () => Array.from(t.keys()),
                    clear() {
                        t.clear()
                    },
                    dispose() {
                        t.clear()
                    }
                }
            };

            function _(t = {}) {
                const e = {
                        mounts: {
                            "": t.driver || w()
                        },
                        mountpoints: [""],
                        watching: !1,
                        watchListeners: [],
                        unwatch: {}
                    },
                    r = t => {
                        for (const r of e.mountpoints)
                            if (t.startsWith(r)) return {
                                base: r,
                                relativeKey: t.slice(r.length),
                                driver: e.mounts[r]
                            };
                        return {
                            base: "",
                            relativeKey: t,
                            driver: e.mounts[""]
                        }
                    },
                    i = (t, r) => e.mountpoints.filter((e => e.startsWith(t) || r && t.startsWith(e))).map((r => ({
                        relativeBase: t.length > r.length ? t.slice(r.length) : void 0,
                        mountpoint: r,
                        driver: e.mounts[r]
                    }))),
                    n = (t, r) => {
                        if (e.watching) {
                            r = y(r);
                            for (const i of e.watchListeners) i(t, r)
                        }
                    },
                    s = async () => {
                        if (e.watching) {
                            for (const t in e.unwatch) await e.unwatch[t]();
                            e.unwatch = {}, e.watching = !1
                        }
                    },
                    o = (t, e, i) => {
                        const n = new Map,
                            s = t => {
                                let e = n.get(t.base);
                                return e || (e = {
                                    driver: t.driver,
                                    base: t.base,
                                    items: []
                                }, n.set(t.base, e)), e
                            };
                        for (const o of t) {
                            const t = "string" === typeof o,
                                i = y(t ? o : o.key),
                                n = t ? void 0 : o.value,
                                a = t || !o.options ? e : { ...e,
                                    ...o.options
                                },
                                c = r(i);
                            s(c).items.push({
                                key: i,
                                value: n,
                                relativeKey: c.relativeKey,
                                options: a
                            })
                        }
                        return Promise.all([...n.values()].map((t => i(t)))).then((t => t.flat()))
                    },
                    a = {
                        hasItem(t, e = {}) {
                            t = y(t);
                            const {
                                relativeKey: i,
                                driver: n
                            } = r(t);
                            return p(n.hasItem, i, e)
                        },
                        getItem(t, e = {}) {
                            t = y(t);
                            const {
                                relativeKey: i,
                                driver: n
                            } = r(t);
                            return p(n.getItem, i, e).then((t => h(t)))
                        },
                        getItems: (t, e) => o(t, e, (t => t.driver.getItems ? p(t.driver.getItems, t.items.map((t => ({
                            key: t.relativeKey,
                            options: t.options
                        }))), e).then((e => e.map((e => ({
                            key: v(t.base, e.key),
                            value: h(e.value)
                        }))))) : Promise.all(t.items.map((e => p(t.driver.getItem, e.relativeKey, e.options).then((t => ({
                            key: e.key,
                            value: h(t)
                        })))))))),
                        getItemRaw(t, e = {}) {
                            t = y(t);
                            const {
                                relativeKey: i,
                                driver: n
                            } = r(t);
                            return n.getItemRaw ? p(n.getItemRaw, i, e) : p(n.getItem, i, e).then((t => function(t) {
                                return "string" !== typeof t ? t : t.startsWith(g) ? (d(), l.from(t.slice(g.length), "base64")) : t
                            }(t)))
                        },
                        async setItem(t, e, i = {}) {
                            if (void 0 === e) return a.removeItem(t);
                            t = y(t);
                            const {
                                relativeKey: s,
                                driver: o
                            } = r(t);
                            o.setItem && (await p(o.setItem, s, f(e), i), o.watch || n("update", t))
                        },
                        async setItems(t, e) {
                            await o(t, e, (async t => {
                                t.driver.setItems && await p(t.driver.setItems, t.items.map((t => ({
                                    key: t.relativeKey,
                                    value: f(t.value),
                                    options: t.options
                                }))), e), t.driver.setItem && await Promise.all(t.items.map((e => p(t.driver.setItem, e.relativeKey, f(e.value), e.options))))
                            }))
                        },
                        async setItemRaw(t, e, i = {}) {
                            if (void 0 === e) return a.removeItem(t, i);
                            t = y(t);
                            const {
                                relativeKey: s,
                                driver: o
                            } = r(t);
                            if (o.setItemRaw) await p(o.setItemRaw, s, e, i);
                            else {
                                if (!o.setItem) return;
                                await p(o.setItem, s, function(t) {
                                    if ("string" === typeof t) return t;
                                    d();
                                    const e = l.from(t).toString("base64");
                                    return g + e
                                }(e), i)
                            }
                            o.watch || n("update", t)
                        },
                        async removeItem(t, e = {}) {
                            "boolean" === typeof e && (e = {
                                removeMeta: e
                            }), t = y(t);
                            const {
                                relativeKey: i,
                                driver: s
                            } = r(t);
                            s.removeItem && (await p(s.removeItem, i, e), (e.removeMeta || e.removeMata) && await p(s.removeItem, i + "$", e), s.watch || n("remove", t))
                        },
                        async getMeta(t, e = {}) {
                            "boolean" === typeof e && (e = {
                                nativeOnly: e
                            }), t = y(t);
                            const {
                                relativeKey: i,
                                driver: n
                            } = r(t), s = Object.create(null);
                            if (n.getMeta && Object.assign(s, await p(n.getMeta, i, e)), !e.nativeOnly) {
                                const t = await p(n.getItem, i + "$", e).then((t => h(t)));
                                t && "object" === typeof t && ("string" === typeof t.atime && (t.atime = new Date(t.atime)), "string" === typeof t.mtime && (t.mtime = new Date(t.mtime)), Object.assign(s, t))
                            }
                            return s
                        },
                        setMeta(t, e, r = {}) {
                            return this.setItem(t + "$", e, r)
                        },
                        removeMeta(t, e = {}) {
                            return this.removeItem(t + "$", e)
                        },
                        async getKeys(t, e = {}) {
                            t = m(t);
                            const r = i(t, !0);
                            let n = [];
                            const s = [];
                            for (const i of r) {
                                const t = (await p(i.driver.getKeys, i.relativeBase, e)).map((t => i.mountpoint + y(t))).filter((t => !n.some((e => t.startsWith(e)))));
                                s.push(...t), n = [i.mountpoint, ...n.filter((t => !t.startsWith(i.mountpoint)))]
                            }
                            return t ? s.filter((e => e.startsWith(t) && !e.endsWith("$"))) : s.filter((t => !t.endsWith("$")))
                        },
                        async clear(t, e = {}) {
                            t = m(t), await Promise.all(i(t, !1).map((async t => {
                                if (t.driver.clear) return p(t.driver.clear, t.relativeBase, e);
                                if (t.driver.removeItem) {
                                    const r = await t.driver.getKeys(t.relativeBase || "", e);
                                    return Promise.all(r.map((r => t.driver.removeItem(r, e))))
                                }
                            })))
                        },
                        async dispose() {
                            await Promise.all(Object.values(e.mounts).map((t => I(t))))
                        },
                        watch: async t => (await (async () => {
                            if (!e.watching) {
                                e.watching = !0;
                                for (const t in e.mounts) e.unwatch[t] = await b(e.mounts[t], n, t)
                            }
                        })(), e.watchListeners.push(t), async () => {
                            e.watchListeners = e.watchListeners.filter((e => e !== t)), 0 === e.watchListeners.length && await s()
                        }),
                        async unwatch() {
                            e.watchListeners = [], await s()
                        },
                        mount(t, r) {
                            if ((t = m(t)) && e.mounts[t]) throw new Error(`already mounted at ${t}`);
                            return t && (e.mountpoints.push(t), e.mountpoints.sort(((t, e) => e.length - t.length))), e.mounts[t] = r, e.watching && Promise.resolve(b(r, n, t)).then((r => {
                                e.unwatch[t] = r
                            })).catch(console.error), a
                        },
                        async unmount(t, r = !0) {
                            (t = m(t)) && e.mounts[t] && (e.watching && t in e.unwatch && (e.unwatch[t](), delete e.unwatch[t]), r && await I(e.mounts[t]), e.mountpoints = e.mountpoints.filter((e => e !== t)), delete e.mounts[t])
                        },
                        getMount(t = "") {
                            t = y(t) + ":";
                            const e = r(t);
                            return {
                                driver: e.driver,
                                base: e.base
                            }
                        },
                        getMounts(t = "", e = {}) {
                            t = y(t);
                            return i(t, e.parents).map((t => ({
                                driver: t.driver,
                                base: t.mountpoint
                            })))
                        }
                    };
                return a
            }

            function b(t, e, r) {
                return t.watch ? t.watch(((t, i) => e(t, r + i))) : () => {}
            }
            async function I(t) {
                "function" === typeof t.dispose && await p(t.dispose)
            }

            function E(t) {
                return new Promise(((e, r) => {
                    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error)
                }))
            }

            function P(t, e) {
                const r = indexedDB.open(t);
                r.onupgradeneeded = () => r.result.createObjectStore(e);
                const i = E(r);
                return (t, r) => i.then((i => r(i.transaction(e, t).objectStore(e))))
            }
            let S;

            function O() {
                return S || (S = P("keyval-store", "keyval")), S
            }

            function R(t, e = O()) {
                return e("readonly", (e => E(e.get(t))))
            }

            function x(t, e) {
                return t.openCursor().onsuccess = function() {
                    this.result && (e(this.result), this.result.continue())
                }, E(t.transaction)
            }
            var C = r(85094);
            var A = (t = {}) => {
                const e = t.base && t.base.length > 0 ? `${t.base}:` : "",
                    r = t => e + t;
                let i;
                return t.dbName && t.storeName && (i = P(t.dbName, t.storeName)), {
                    name: "idb-keyval",
                    options: t,
                    hasItem: async t => !(typeof(await R(r(t), i)) > "u"),
                    getItem: async t => await R(r(t), i) ? ? null,
                    setItem: (t, e) => function(t, e, r = O()) {
                        return r("readwrite", (r => (r.put(e, t), E(r.transaction))))
                    }(r(t), e, i),
                    removeItem: t => function(t, e = O()) {
                        return e("readwrite", (e => (e.delete(t), E(e.transaction))))
                    }(r(t), i),
                    getKeys: () => function(t = O()) {
                        return t("readonly", (t => {
                            if (t.getAllKeys) return E(t.getAllKeys());
                            const e = [];
                            return x(t, (t => e.push(t.key))).then((() => e))
                        }))
                    }(i),
                    clear: () => function(t = O()) {
                        return t("readwrite", (t => (t.clear(), E(t.transaction))))
                    }(i)
                }
            };
            class N {
                constructor() {
                    this.indexedDb = _({
                        driver: A({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t => [t.key, t.value]))
                }
                async getItem(t) {
                    const e = await this.indexedDb.getItem(t);
                    if (null !== e) return e
                }
                async setItem(t, e) {
                    await this.indexedDb.setItem(t, (0, C.u)(e))
                }
                async removeItem(t) {
                    await this.indexedDb.removeItem(t)
                }
            }
            var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                T = {
                    exports: {}
                };

            function q(t) {
                var e;
                return [t[0], (0, C.D)(null != (e = t[1]) ? e : "")]
            }! function() {
                let t;

                function e() {}
                t = e, t.prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, t.prototype.setItem = function(t, e) {
                    this[t] = String(e)
                }, t.prototype.removeItem = function(t) {
                    delete this[t]
                }, t.prototype.clear = function() {
                    const t = this;
                    Object.keys(t).forEach((function(e) {
                        t[e] = void 0, delete t[e]
                    }))
                }, t.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, t.prototype.__defineGetter__("length", (function() {
                    return Object.keys(this).length
                })), typeof j < "u" && j.localStorage ? T.exports = j.localStorage : typeof window < "u" && window.localStorage ? T.exports = window.localStorage : T.exports = new e
            }();
            class D {
                constructor() {
                    this.localStorage = T.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(q)
                }
                async getItem(t) {
                    const e = this.localStorage.getItem(t);
                    if (null !== e) return (0, C.D)(e)
                }
                async setItem(t, e) {
                    this.localStorage.setItem(t, (0, C.u)(e))
                }
                async removeItem(t) {
                    this.localStorage.removeItem(t)
                }
            }
            const z = async (t, e) => {
                e.length && e.forEach((async e => {
                    await t.removeItem(e)
                }))
            };
            class L {
                constructor() {
                    this.initialized = !1, this.setInitialized = t => {
                        this.storage = t, this.initialized = !0
                    };
                    const t = new D;
                    this.storage = t;
                    try {
                        (async (t, e, r) => {
                            const i = "wc_storage_version",
                                n = await e.getItem(i);
                            if (n && n >= 1) return void r(e);
                            const s = await t.getKeys();
                            if (!s.length) return void r(e);
                            const o = [];
                            for (; s.length;) {
                                const r = s.shift();
                                if (!r) continue;
                                const i = r.toLowerCase();
                                if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                                    const i = await t.getItem(r);
                                    await e.setItem(r, i), o.push(r)
                                }
                            }
                            await e.setItem(i, 1), r(e), z(t, o)
                        })(t, new N, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(t) {
                    return await this.initialize(), this.storage.getItem(t)
                }
                async setItem(t, e) {
                    return await this.initialize(), this.storage.setItem(t, e)
                }
                async removeItem(t) {
                    return await this.initialize(), this.storage.removeItem(t)
                }
                async initialize() {
                    this.initialized || await new Promise((t => {
                        const e = setInterval((() => {
                            this.initialized && (clearInterval(e), t())
                        }), 20)
                    }))
                }
            }
            var M = r(90772),
                k = r(9107),
                $ = r(38200);
            class U extends $.q {
                constructor(t) {
                    super(), this.opts = t, this.protocol = "wc", this.version = 2
                }
            }
            class H extends $.q {
                constructor(t, e) {
                    super(), this.core = t, this.logger = e, this.records = new Map
                }
            }
            class V extends $.q {
                constructor(t, e) {
                    super(), this.relayer = t, this.logger = e
                }
            }
            class K extends $.q {
                constructor(t) {
                    super()
                }
            }
            class B extends $.q {
                constructor(t, e) {
                    super(), this.relayer = t, this.logger = e
                }
            }
            class F extends $.q {
                constructor(t, e) {
                    super(), this.core = t, this.logger = e
                }
            }
            var Z = r(31050),
                W = r(31416),
                J = r(66736);
            const G = "base64url",
                Q = "did",
                Y = "key",
                X = "base58btc";
            var tt = r(20605),
                et = r(92263),
                rt = r(52217);

            function it(t) {
                return (0, et.toString)((0, rt.fromString)((0, C.u)(t), "utf8"), G)
            }

            function nt(t) {
                const e = (0, rt.fromString)("K36", X),
                    r = "z" + (0, et.toString)((0, tt.concat)([e, t]), X);
                return [Q, Y, r].join(":")
            }

            function st(t = (0, W.randomBytes)(32)) {
                return Z._w(t)
            }
            async function ot(t, e, r, i, n = (0, J.fromMiliseconds)(Date.now())) {
                const s = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    o = {
                        iss: nt(i.publicKey),
                        sub: t,
                        aud: e,
                        iat: n,
                        exp: n + r
                    },
                    a = (c = {
                        header: s,
                        payload: o
                    }, (0, rt.fromString)([it(c.header), it(c.payload)].join("."), "utf8"));
                var c;
                return function(t) {
                    return [it(t.header), it(t.payload), (e = t.signature, (0, et.toString)(e, G))].join(".");
                    var e
                }({
                    header: s,
                    payload: o,
                    signature: Z.Xx(i.secretKey, a)
                })
            }
            r(43014);
            var at = r(37466),
                ct = r(46160),
                ut = r(56186);
            const ht = t => t.split("?")[0],
                lt = typeof WebSocket < "u" ? WebSocket : typeof r.g < "u" && typeof r.g.WebSocket < "u" ? r.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : r(57026);
            class pt {
                constructor(t) {
                    if (this.url = t, this.events = new i.EventEmitter, this.registering = !1, !(0, ut.isWsUrl)(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                    this.url = t
                }
                get connected() {
                    return typeof this.socket < "u"
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t = this.url) {
                    await this.register(t)
                }
                async close() {
                    return new Promise(((t, e) => {
                        typeof this.socket > "u" ? e(new Error("Connection already closed")) : (this.socket.onclose = e => {
                            this.onClose(e), t()
                        }, this.socket.close())
                    }))
                }
                async send(t) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send((0, C.u)(t))
                    } catch (e) {
                        this.onError(t.id, e)
                    }
                }
                register(t = this.url) {
                    if (!(0, ut.isWsUrl)(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                            this.events.once("register_error", (t => {
                                this.resetMaxListeners(), e(t)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return e(new Error("WebSocket connection is missing or invalid"));
                                t(this.socket)
                            }))
                        }))
                    }
                    return this.url = t, this.registering = !0, new Promise(((e, i) => {
                        const n = new URLSearchParams(t).get("origin"),
                            s = (0, ut.isReactNative)() ? {
                                headers: {
                                    origin: n
                                }
                            } : {
                                rejectUnauthorized: !(0, ut.isLocalhostUrl)(t)
                            },
                            o = new lt(t, [], s);
                        typeof WebSocket < "u" || typeof r.g < "u" && typeof r.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? o.onerror = t => {
                            const e = t;
                            i(this.emitError(e.error))
                        } : o.on("error", (t => {
                            i(this.emitError(t))
                        })), o.onopen = () => {
                            this.onOpen(o), e(o)
                        }
                    }))
                }
                onOpen(t) {
                    t.onmessage = t => this.onPayload(t), t.onclose = t => this.onClose(t), this.socket = t, this.registering = !1, this.events.emit("open")
                }
                onClose(t) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", t)
                }
                onPayload(t) {
                    if (typeof t.data > "u") return;
                    const e = "string" == typeof t.data ? (0, C.D)(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    const r = this.parseError(e),
                        i = r.message || r.toString(),
                        n = (0, ut.formatJsonRpcError)(t, i);
                    this.events.emit("payload", n)
                }
                parseError(t, e = this.url) {
                    return (0, ut.parseConnectionError)(t, ht(e), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(t) {
                    const e = this.parseError(new Error(t ? .message || `WebSocket connection failed for host: ${ht(this.url)}`));
                    return this.events.emit("register_error", e), e
                }
            }
            var ft = r(72307),
                dt = r.n(ft),
                gt = r(63144),
                yt = r.n(gt),
                vt = r(34155);
            var mt = function(t, e) {
                    if (t.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < t.length; n++) {
                        var s = t.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = t.length,
                        c = t.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        h = Math.log(256) / Math.log(a);

                    function l(t) {
                        if ("string" != typeof t) throw new TypeError("Expected String");
                        if (0 === t.length) return new Uint8Array;
                        var e = 0;
                        if (" " !== t[e]) {
                            for (var i = 0, n = 0; t[e] === c;) i++, e++;
                            for (var s = (t.length - e) * u + 1 >>> 0, o = new Uint8Array(s); t[e];) {
                                var h = r[t.charCodeAt(e)];
                                if (255 === h) return;
                                for (var l = 0, p = s - 1;
                                    (0 !== h || l < n) && -1 !== p; p--, l++) h += a * o[p] >>> 0, o[p] = h % 256 >>> 0, h = h / 256 >>> 0;
                                if (0 !== h) throw new Error("Non-zero carry");
                                n = l, e++
                            }
                            if (" " !== t[e]) {
                                for (var f = s - n; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(e) {
                            if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === e.length) return "";
                            for (var r = 0, i = 0, n = 0, s = e.length; n !== s && 0 === e[n];) n++, r++;
                            for (var o = (s - n) * h + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                                for (var l = e[n], p = 0, f = o - 1;
                                    (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * u[f] >>> 0, u[f] = l % a >>> 0, l = l / a >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                i = p, n++
                            }
                            for (var d = o - i; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += t.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: l,
                        decode: function(t) {
                            var r = l(t);
                            if (r) return r;
                            throw new Error(`Non-${e} character`)
                        }
                    }
                },
                wt = mt;
            const _t = t => {
                if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                if (t instanceof ArrayBuffer) return new Uint8Array(t);
                if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class bt {
                constructor(t, e, r) {
                    this.name = t, this.prefix = e, this.baseEncode = r
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class It {
                constructor(t, e, r) {
                    if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
                }
                decode(t) {
                    if ("string" == typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return Pt(this, t)
                }
            }
            class Et {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return Pt(this, t)
                }
                decode(t) {
                    const e = t[0],
                        r = this.decoders[e];
                    if (r) return r.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const Pt = (t, e) => new Et({ ...t.decoders || {
                    [t.prefix]: t
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class St {
                constructor(t, e, r, i) {
                    this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = i, this.encoder = new bt(t, e, r), this.decoder = new It(t, e, i)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const Ot = ({
                    name: t,
                    prefix: e,
                    encode: r,
                    decode: i
                }) => new St(t, e, r, i),
                Rt = ({
                    prefix: t,
                    name: e,
                    alphabet: r
                }) => {
                    const {
                        encode: i,
                        decode: n
                    } = wt(r, e);
                    return Ot({
                        prefix: t,
                        name: e,
                        encode: i,
                        decode: t => _t(n(t))
                    })
                },
                xt = ({
                    name: t,
                    prefix: e,
                    bitsPerChar: r,
                    alphabet: i
                }) => Ot({
                    prefix: e,
                    name: t,
                    encode: t => ((t, e, r) => {
                        const i = "=" === e[e.length - 1],
                            n = (1 << r) - 1;
                        let s = "",
                            o = 0,
                            a = 0;
                        for (let c = 0; c < t.length; ++c)
                            for (a = a << 8 | t[c], o += 8; o > r;) o -= r, s += e[n & a >> o];
                        if (o && (s += e[n & a << r - o]), i)
                            for (; s.length * r & 7;) s += "=";
                        return s
                    })(t, i, r),
                    decode: e => ((t, e, r, i) => {
                        const n = {};
                        for (let h = 0; h < e.length; ++h) n[e[h]] = h;
                        let s = t.length;
                        for (;
                            "=" === t[s - 1];) --s;
                        const o = new Uint8Array(s * r / 8 | 0);
                        let a = 0,
                            c = 0,
                            u = 0;
                        for (let h = 0; h < s; ++h) {
                            const e = n[t[h]];
                            if (void 0 === e) throw new SyntaxError(`Non-${i} character`);
                            c = c << r | e, a += r, a >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                        }
                        if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                        return o
                    })(e, i, r, t)
                }),
                Ct = Ot({
                    prefix: "\0",
                    name: "identity",
                    encode: t => (t => (new TextDecoder).decode(t))(t),
                    decode: t => (t => (new TextEncoder).encode(t))(t)
                });
            var At = Object.freeze({
                __proto__: null,
                identity: Ct
            });
            const Nt = xt({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var jt = Object.freeze({
                __proto__: null,
                base2: Nt
            });
            const Tt = xt({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var qt = Object.freeze({
                __proto__: null,
                base8: Tt
            });
            const Dt = Rt({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var zt = Object.freeze({
                __proto__: null,
                base10: Dt
            });
            const Lt = xt({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                Mt = xt({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var kt = Object.freeze({
                __proto__: null,
                base16: Lt,
                base16upper: Mt
            });
            const $t = xt({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                Ut = xt({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Ht = xt({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Vt = xt({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Kt = xt({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                Bt = xt({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Ft = xt({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                Zt = xt({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Wt = xt({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var Jt = Object.freeze({
                __proto__: null,
                base32: $t,
                base32upper: Ut,
                base32pad: Ht,
                base32padupper: Vt,
                base32hex: Kt,
                base32hexupper: Bt,
                base32hexpad: Ft,
                base32hexpadupper: Zt,
                base32z: Wt
            });
            const Gt = Rt({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                Qt = Rt({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var Yt = Object.freeze({
                __proto__: null,
                base36: Gt,
                base36upper: Qt
            });
            const Xt = Rt({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                te = Rt({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var ee = Object.freeze({
                __proto__: null,
                base58btc: Xt,
                base58flickr: te
            });
            const re = xt({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                ie = xt({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                ne = xt({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                se = xt({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var oe = Object.freeze({
                __proto__: null,
                base64: re,
                base64pad: ie,
                base64url: ne,
                base64urlpad: se
            });
            const ae = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                ce = ae.reduce(((t, e, r) => (t[r] = e, t)), []),
                ue = ae.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
            const he = Ot({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(t) {
                    return t.reduce(((t, e) => t += ce[e]), "")
                },
                decode: function(t) {
                    const e = [];
                    for (const r of t) {
                        const t = ue[r.codePointAt(0)];
                        if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
                        e.push(t)
                    }
                    return new Uint8Array(e)
                }
            });
            var le = Object.freeze({
                    __proto__: null,
                    base256emoji: he
                }),
                pe = function t(e, r, i) {
                    r = r || [];
                    for (var n = i = i || 0; e >= fe;) r[i++] = 255 & e | 128, e /= 128;
                    for (; - 128 & e;) r[i++] = 255 & e | 128, e >>>= 7;
                    return r[i] = 0 | e, t.bytes = i - n + 1, r
                },
                fe = Math.pow(2, 31);
            var de = function t(e, r) {
                var i, n = 0,
                    s = 0,
                    o = r = r || 0,
                    a = e.length;
                do {
                    if (o >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
                    i = e[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                } while (i >= 128);
                return t.bytes = o - r, n
            };
            var ge = Math.pow(2, 7),
                ye = Math.pow(2, 14),
                ve = Math.pow(2, 21),
                me = Math.pow(2, 28),
                we = Math.pow(2, 35),
                _e = Math.pow(2, 42),
                be = Math.pow(2, 49),
                Ie = Math.pow(2, 56),
                Ee = Math.pow(2, 63),
                Pe = {
                    encode: pe,
                    decode: de,
                    encodingLength: function(t) {
                        return t < ge ? 1 : t < ye ? 2 : t < ve ? 3 : t < me ? 4 : t < we ? 5 : t < _e ? 6 : t < be ? 7 : t < Ie ? 8 : t < Ee ? 9 : 10
                    }
                };
            const Se = (t, e, r = 0) => (Pe.encode(t, e, r), e),
                Oe = t => Pe.encodingLength(t),
                Re = (t, e) => {
                    const r = e.byteLength,
                        i = Oe(t),
                        n = i + Oe(r),
                        s = new Uint8Array(n + r);
                    return Se(t, s, 0), Se(r, s, i), s.set(e, n), new xe(t, r, e, s)
                };
            class xe {
                constructor(t, e, r, i) {
                    this.code = t, this.size = e, this.digest = r, this.bytes = i
                }
            }
            const Ce = ({
                name: t,
                code: e,
                encode: r
            }) => new Ae(t, e, r);
            class Ae {
                constructor(t, e, r) {
                    this.name = t, this.code = e, this.encode = r
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const e = this.encode(t);
                        return e instanceof Uint8Array ? Re(this.code, e) : e.then((t => Re(this.code, t)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const Ne = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
                je = Ce({
                    name: "sha2-256",
                    code: 18,
                    encode: Ne("SHA-256")
                }),
                Te = Ce({
                    name: "sha2-512",
                    code: 19,
                    encode: Ne("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: je,
                sha512: Te
            });
            const qe = _t,
                De = {
                    code: 0,
                    name: "identity",
                    encode: qe,
                    digest: t => Re(0, qe(t))
                };
            Object.freeze({
                __proto__: null,
                identity: De
            });
            new TextEncoder, new TextDecoder;
            const ze = { ...At,
                ...jt,
                ...qt,
                ...zt,
                ...kt,
                ...Jt,
                ...Yt,
                ...ee,
                ...oe,
                ...le
            };

            function Le(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }

            function Me(t, e, r, i) {
                return {
                    name: t,
                    prefix: e,
                    encoder: {
                        name: t,
                        prefix: e,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            const ke = Me("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
                $e = Me("ascii", "a", (t => {
                    let e = "a";
                    for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                    return e
                }), (t => {
                    const e = function(t = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Le(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
                    }((t = t.substring(1)).length);
                    for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                    return e
                })),
                Ue = {
                    utf8: ke,
                    "utf-8": ke,
                    hex: ze.base16,
                    latin1: $e,
                    ascii: $e,
                    binary: $e,
                    ...ze
                };
            const He = "core",
                Ve = "wc@2:core:",
                Ke = "error",
                Be = {
                    database: ":memory:"
                },
                Fe = "client_ed25519_seed",
                Ze = J.ONE_DAY,
                We = J.SIX_HOURS,
                Je = "wss://relay.walletconnect.com",
                Ge = "wss://relay.walletconnect.org",
                Qe = "relayer_message",
                Ye = "relayer_message_ack",
                Xe = "relayer_connect",
                tr = "relayer_disconnect",
                er = "relayer_error",
                rr = "relayer_connection_stalled",
                ir = "relayer_publish",
                nr = "payload",
                sr = "connect",
                or = "disconnect",
                ar = "error",
                cr = J.ONE_SECOND,
                ur = "subscription_created",
                hr = "subscription_deleted",
                lr = "subscription_sync",
                pr = "subscription_resubscribed",
                fr = 1e3 * J.FIVE_SECONDS,
                dr = {
                    wc_pairingDelete: {
                        req: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: J.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: J.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                gr = "pairing_create",
                yr = "pairing_expire",
                vr = "pairing_delete",
                mr = "pairing_ping",
                wr = "history_created",
                _r = "history_updated",
                br = "history_deleted",
                Ir = "history_sync",
                Er = "expirer_created",
                Pr = "expirer_deleted",
                Sr = "expirer_expired",
                Or = "expirer_sync",
                Rr = "verify-api",
                xr = "https://verify.walletconnect.com",
                Cr = "https://verify.walletconnect.org",
                Ar = [xr, Cr];
            class Nr {
                constructor(t, e) {
                    this.core = t, this.logger = e, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Ve, this.init = async () => {
                        if (!this.initialized) {
                            const t = await this.getKeyChain();
                            typeof t < "u" && (this.keychain = t), this.initialized = !0
                        }
                    }, this.has = t => (this.isInitialized(), this.keychain.has(t)), this.set = async (t, e) => {
                        this.isInitialized(), this.keychain.set(t, e), await this.persist()
                    }, this.get = t => {
                        this.isInitialized();
                        const e = this.keychain.get(t);
                        if (typeof e > "u") {
                            const {
                                message: e
                            } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                            throw new Error(e)
                        }
                        return e
                    }, this.del = async t => {
                        this.isInitialized(), this.keychain.delete(t), await this.persist()
                    }, this.core = t, this.logger = (0, k.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(t) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(t))
                }
                async getKeyChain() {
                    const t = await this.core.storage.getItem(this.storageKey);
                    return typeof t < "u" ? (0, s.IP)(t) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class jr {
                constructor(t, e, r) {
                    this.core = t, this.logger = e, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = t => (this.isInitialized(), this.keychain.has(t)), this.getClientId = async () => {
                        this.isInitialized();
                        return nt(st(await this.getClientSeed()).publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        const t = (0, s.Au)();
                        return this.setPrivateKey(t.publicKey, t.privateKey)
                    }, this.signJWT = async t => {
                        this.isInitialized();
                        const e = st(await this.getClientSeed()),
                            r = (0, s.jd)(),
                            i = Ze;
                        return await ot(r, t, i, e)
                    }, this.generateSharedKey = (t, e, r) => {
                        this.isInitialized();
                        const i = this.getPrivateKey(t),
                            n = (0, s.m$)(i, e);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (t, e) => {
                        this.isInitialized();
                        const r = e || (0, s.Ym)(t);
                        return await this.keychain.set(r, t), r
                    }, this.deleteKeyPair = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.deleteSymKey = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.encode = async (t, e, r) => {
                        this.isInitialized();
                        const i = (0, s.EN)(r),
                            n = (0, C.u)(e);
                        if ((0, s.Q8)(i)) {
                            const e = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            t = await this.generateSharedKey(e, r)
                        }
                        const o = this.getSymKey(t),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, s.HI)({
                            type: a,
                            symKey: o,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (t, e, r) => {
                        this.isInitialized();
                        const i = (0, s.Ll)(e, r);
                        if ((0, s.Q8)(i)) {
                            const e = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            t = await this.generateSharedKey(e, r)
                        }
                        try {
                            const r = this.getSymKey(t),
                                i = (0, s.pe)({
                                    symKey: r,
                                    encoded: e
                                });
                            return (0, C.D)(i)
                        } catch (L) {
                            this.logger.error(`Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`), this.logger.error(L)
                        }
                    }, this.getPayloadType = t => {
                        const e = (0, s.vB)(t);
                        return (0, s.WG)(e.type)
                    }, this.getPayloadSenderPublicKey = t => {
                        const e = (0, s.vB)(t);
                        return e.senderPublicKey ? (0, at.BB)(e.senderPublicKey, s.AW) : void 0
                    }, this.core = t, this.logger = (0, k.generateChildLogger)(e, this.name), this.keychain = r || new Nr(this.core, this.logger)
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                async setPrivateKey(t, e) {
                    return await this.keychain.set(t, e), t
                }
                getPrivateKey(t) {
                    return this.keychain.get(t)
                }
                async getClientSeed() {
                    let t = "";
                    try {
                        t = this.keychain.get(Fe)
                    } catch {
                        t = (0, s.jd)(), await this.keychain.set(Fe, t)
                    }
                    return function(t, e = "utf8") {
                        const r = Ue[e];
                        if (!r) throw new Error(`Unsupported encoding "${e}"`);
                        return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : Le(globalThis.Buffer.from(t, "utf-8"))
                    }(t, "base16")
                }
                getSymKey(t) {
                    return this.keychain.get(t)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Tr extends class {
                constructor(t, e) {
                    this.logger = t, this.core = e
                }
            } {
                constructor(t, e) {
                    super(t, e), this.logger = t, this.core = e, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Ve, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                const t = await this.getRelayerMessages();
                                typeof t < "u" && (this.messages = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (t) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (t, e) => {
                        this.isInitialized();
                        const r = (0, s.rj)(e);
                        let i = this.messages.get(t);
                        return typeof i > "u" && (i = {}), typeof i[r] < "u" || (i[r] = e, this.messages.set(t, i), await this.persist()), r
                    }, this.get = t => {
                        this.isInitialized();
                        let e = this.messages.get(t);
                        return typeof e > "u" && (e = {}), e
                    }, this.has = (t, e) => {
                        this.isInitialized();
                        return typeof this.get(t)[(0, s.rj)(e)] < "u"
                    }, this.del = async t => {
                        this.isInitialized(), this.messages.delete(t), await this.persist()
                    }, this.logger = (0, k.generateChildLogger)(t, this.name), this.core = e
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(t) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(t))
                }
                async getRelayerMessages() {
                    const t = await this.core.storage.getItem(this.storageKey);
                    return typeof t < "u" ? (0, s.IP)(t) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class qr extends V {
                constructor(t, e) {
                    super(t, e), this.relayer = t, this.logger = e, this.events = new i.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, J.toMiliseconds)(J.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (t, e, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: t,
                                message: e,
                                opts: r
                            }
                        });
                        try {
                            const n = r ? .ttl || We,
                                o = (0, s._H)(r),
                                a = r ? .prompt || !1,
                                c = r ? .tag || 0,
                                u = r ? .id || (0, ut.getBigIntRpcId)().toString(),
                                h = {
                                    topic: t,
                                    message: e,
                                    opts: {
                                        ttl: n,
                                        relay: o,
                                        prompt: a,
                                        tag: c,
                                        id: u
                                    }
                                },
                                l = setTimeout((() => this.queue.set(u, h)), this.publishTimeout);
                            try {
                                await await (0, s.hF)(this.rpcPublish(t, e, n, o, a, c, u), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(u), this.relayer.events.emit(ir, h)
                            } catch (V) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = r ? .internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(u), V;
                                return
                            } finally {
                                clearTimeout(l)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: t,
                                    message: e,
                                    opts: r
                                }
                            })
                        } catch (n) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(n), n
                        }
                    }, this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.relayer = t, this.logger = (0, k.generateChildLogger)(e, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                rpcPublish(t, e, r, i, n, o, a) {
                    var c, u, h, l;
                    const p = {
                        method: (0, s.cO)(i.protocol).publish,
                        params: {
                            topic: t,
                            message: e,
                            ttl: r,
                            prompt: n,
                            tag: o
                        },
                        id: a
                    };
                    return (0, s.o8)(null == (c = p.params) ? void 0 : c.prompt) && (null == (u = p.params) || delete u.prompt), (0, s.o8)(null == (h = p.params) ? void 0 : h.tag) && (null == (l = p.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: p
                    }), this.relayer.request(p)
                }
                removeRequestFromQueue(t) {
                    this.queue.delete(t)
                }
                checkQueue() {
                    this.queue.forEach((async t => {
                        const {
                            topic: e,
                            message: r,
                            opts: i
                        } = t;
                        await this.publish(e, r, i)
                    }))
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, (() => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(rr);
                        this.checkQueue()
                    })), this.relayer.on(Ye, (t => {
                        this.removeRequestFromQueue(t.id.toString())
                    }))
                }
            }
            class Dr {
                constructor() {
                    this.map = new Map, this.set = (t, e) => {
                        const r = this.get(t);
                        this.exists(t, e) || this.map.set(t, [...r, e])
                    }, this.get = t => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
                        if (typeof e > "u") return void this.map.delete(t);
                        if (!this.map.has(t)) return;
                        const r = this.get(t);
                        if (!this.exists(t, e)) return;
                        const i = r.filter((t => t !== e));
                        i.length ? this.map.set(t, i) : this.map.delete(t)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var zr = Object.defineProperty,
                Lr = Object.defineProperties,
                Mr = Object.getOwnPropertyDescriptors,
                kr = Object.getOwnPropertySymbols,
                $r = Object.prototype.hasOwnProperty,
                Ur = Object.prototype.propertyIsEnumerable,
                Hr = (t, e, r) => e in t ? zr(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Vr = (t, e) => {
                    for (var r in e || (e = {})) $r.call(e, r) && Hr(t, r, e[r]);
                    if (kr)
                        for (var r of kr(e)) Ur.call(e, r) && Hr(t, r, e[r]);
                    return t
                },
                Kr = (t, e) => Lr(t, Mr(e));
            class Br extends B {
                constructor(t, e) {
                    super(t, e), this.relayer = t, this.logger = e, this.subscriptions = new Map, this.topicMap = new Dr, this.events = new i.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ve, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (t, e) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: t,
                                opts: e
                            }
                        });
                        try {
                            const r = (0, s._H)(e),
                                i = {
                                    topic: t,
                                    relay: r
                                };
                            this.pending.set(t, i);
                            const n = await this.rpcSubscribe(t, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: t,
                                    opts: e
                                }
                            }), n
                        } catch (U) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(U), U
                        }
                    }, this.unsubscribe = async (t, e) => {
                        await this.restartToComplete(), this.isInitialized(), typeof e ? .id < "u" ? await this.unsubscribeById(t, e.id, e) : await this.unsubscribeByTopic(t, e)
                    }, this.isSubscribed = async t => !!this.topics.includes(t) || await new Promise(((e, r) => {
                        const i = new J.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        const n = setInterval((() => {
                            !this.pending.has(t) && this.topics.includes(t) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), e(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= fr && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(new Error("Subscription resolution timeout")))
                        }), this.pollingInterval)
                    })).catch((() => !1)), this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = t, this.logger = (0, k.generateChildLogger)(e, this.name), this.clientId = ""
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(t, e) {
                    let r = !1;
                    try {
                        r = this.getSubscription(t).topic === e
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(t, e) {
                    const r = this.topicMap.get(t);
                    await Promise.all(r.map((async r => await this.unsubscribeById(t, r, e))))
                }
                async unsubscribeById(t, e, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: t,
                            id: e,
                            opts: r
                        }
                    });
                    try {
                        const i = (0, s._H)(r);
                        await this.rpcUnsubscribe(t, e, i);
                        const n = (0, s.D6)("USER_DISCONNECTED", `${this.name}, ${t}`);
                        await this.onUnsubscribe(t, e, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: t,
                                id: e,
                                opts: r
                            }
                        })
                    } catch (i) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i
                    }
                }
                async rpcSubscribe(t, e) {
                    const r = {
                        method: (0, s.cO)(e.protocol).subscribe,
                        params: {
                            topic: t
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(rr)
                    }
                    return (0, s.rj)(t + this.clientId)
                }
                async rpcBatchSubscribe(t) {
                    if (!t.length) return;
                    const e = t[0].relay,
                        r = {
                            method: (0, s.cO)(e.protocol).batchSubscribe,
                            params: {
                                topics: t.map((t => t.topic))
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(rr)
                    }
                }
                rpcUnsubscribe(t, e, r) {
                    const i = {
                        method: (0, s.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: t,
                            id: e
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(t, e) {
                    this.setSubscription(t, Kr(Vr({}, e), {
                        id: t
                    })), this.pending.delete(e.topic)
                }
                onBatchSubscribe(t) {
                    t.length && t.forEach((t => {
                        this.setSubscription(t.id, Vr({}, t)), this.pending.delete(t.topic)
                    }))
                }
                async onUnsubscribe(t, e, r) {
                    this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, r), await this.relayer.messages.del(t)
                }
                async setRelayerSubscriptions(t) {
                    await this.relayer.core.storage.setItem(this.storageKey, t)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(t, e) {
                    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: t,
                        subscription: e
                    }), this.addSubscription(t, e))
                }
                addSubscription(t, e) {
                    this.subscriptions.set(t, Vr({}, e)), this.topicMap.set(e.topic, t), this.events.emit(ur, e)
                }
                getSubscription(t) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: t
                    });
                    const e = this.subscriptions.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(e)
                    }
                    return e
                }
                deleteSubscription(t, e) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: t,
                        reason: e
                    });
                    const r = this.getSubscription(t);
                    this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(hr, Kr(Vr({}, r), {
                        reason: e
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(lr)
                }
                async reset() {
                    if (this.cached.length) {
                        const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let e = 0; e < t; e++) {
                            const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(t)
                        }
                    }
                    this.events.emit(pr)
                }
                async restore() {
                    try {
                        const t = await this.getRelayerSubscriptions();
                        if (typeof t > "u" || !t.length) return;
                        if (this.subscriptions.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
                    }
                }
                async batchSubscribe(t) {
                    if (!t.length) return;
                    const e = await this.rpcBatchSubscribe(t);
                    (0, s.qt)(e) && this.onBatchSubscribe(e.map(((e, r) => Kr(Vr({}, t[r]), {
                        id: e
                    }))))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    const t = [];
                    this.pending.forEach((e => {
                        t.push(e)
                    })), await this.batchSubscribe(t)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, (async () => {
                        await this.checkPending()
                    })), this.relayer.on(Xe, (async () => {
                        await this.onConnect()
                    })), this.relayer.on(tr, (() => {
                        this.onDisconnect()
                    })), this.events.on(ur, (async t => {
                        const e = ur;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), await this.persist()
                    })), this.events.on(hr, (async t => {
                        const e = hr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), await this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise((t => {
                        const e = setInterval((() => {
                            this.restartInProgress || (clearInterval(e), t())
                        }), this.pollingInterval)
                    }))
                }
            }
            var Fr = Object.defineProperty,
                Zr = Object.getOwnPropertySymbols,
                Wr = Object.prototype.hasOwnProperty,
                Jr = Object.prototype.propertyIsEnumerable,
                Gr = (t, e, r) => e in t ? Fr(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r;
            class Qr extends K {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.events = new i.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async t => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(t)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.onPayloadHandler = t => {
                        this.onProviderPayload(t)
                    }, this.onConnectHandler = () => {
                        this.events.emit(Xe)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = t => {
                        this.logger.error(t), this.events.emit(er, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(nr, this.onPayloadHandler), this.provider.on(sr, this.onConnectHandler), this.provider.on(or, this.onDisconnectHandler), this.provider.on(ar, this.onProviderErrorHandler)
                    }, this.core = t.core, this.logger = typeof t.logger < "u" && "string" != typeof t.logger ? (0, k.generateChildLogger)(t.logger, this.name) : (0, k.pino)((0, k.getDefaultLoggerOptions)({
                        level: t.logger || "error"
                    })), this.messages = new Tr(this.logger, t.core), this.subscriber = new Br(this, this.logger), this.publisher = new qr(this, this.logger), this.relayUrl = t ? .relayUrl || Je, this.projectId = t.projectId, this.bundleId = (0, s.X_)(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ge}...`), await this.restartTransport(Ge)
                    }
                    this.initialized = !0, setTimeout((async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }), 1e4)
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(t, e, r) {
                    this.isInitialized(), await this.publisher.publish(t, e, r), await this.recordMessageEvent({
                        topic: t,
                        message: e,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(t, e) {
                    var r;
                    this.isInitialized();
                    let i, n = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "";
                    if (n) return n;
                    const s = e => {
                        e.topic === t && (this.subscriber.off(ur, s), i())
                    };
                    return await Promise.all([new Promise((t => {
                        i = t, this.subscriber.on(ur, s)
                    })), new Promise((async r => {
                        n = await this.subscriber.subscribe(t, e), r()
                    }))]), n
                }
                async unsubscribe(t, e) {
                    this.isInitialized(), await this.subscriber.unsubscribe(t, e)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, s.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((() => this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(t) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise((t => {
                                if (!this.initialized) return t();
                                this.subscriber.once(pr, (() => {
                                    t()
                                }))
                            })), new Promise((async (t, e) => {
                                try {
                                    await (0, s.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (r) {
                                    return void e(r)
                                }
                                t()
                            }))])
                        } catch (e) {
                            this.logger.error(e);
                            const t = e;
                            if (!this.isConnectionStalled(t.message)) throw e;
                            this.provider.events.emit(or)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(t) {
                    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!(await (0, s.Gg)())) throw new Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(t) {
                    return this.staleConnectionErrors.some((e => t.includes(e)))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    const t = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new ct.r(new pt((0, s.$0)({
                        sdkVersion: "2.11.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: t,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(t) {
                    const {
                        topic: e,
                        message: r
                    } = t;
                    await this.messages.set(e, r)
                }
                async shouldIgnoreMessageEvent(t) {
                    const {
                        topic: e,
                        message: r
                    } = t;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!(await this.subscriber.isSubscribed(e))) return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), !0;
                    const i = this.messages.has(e, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(t) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: t
                        }), (0, ut.isJsonRpcRequest)(t)) {
                        if (!t.method.endsWith("_subscription")) return;
                        const e = t.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = e.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((t, e) => {
                            for (var r in e || (e = {})) Wr.call(e, r) && Gr(t, r, e[r]);
                            if (Zr)
                                for (var r of Zr(e)) Jr.call(e, r) && Gr(t, r, e[r]);
                            return t
                        })({
                            type: "event",
                            event: e.id
                        }, s)), this.events.emit(e.id, s), await this.acknowledgePayload(t), await this.onMessageEvent(s)
                    } else(0, ut.isJsonRpcResponse)(t) && this.events.emit(Ye, t)
                }
                async onMessageEvent(t) {
                    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Qe, t), await this.recordMessageEvent(t))
                }
                async acknowledgePayload(t) {
                    const e = (0, ut.formatJsonRpcResult)(t.id, !0);
                    await this.provider.connection.send(e)
                }
                unregisterProviderListeners() {
                    this.provider.off(nr, this.onPayloadHandler), this.provider.off(sr, this.onConnectHandler), this.provider.off(or, this.onDisconnectHandler), this.provider.off(ar, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(rr, (() => {
                        this.restartTransport().catch((t => this.logger.error(t)))
                    }));
                    let t = await (0, s.Gg)();
                    (0, s.uw)((async e => {
                        this.initialized && t !== e && (t = e, e ? await this.restartTransport().catch((t => this.logger.error(t))) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((t => this.logger.error(t)))))
                    }))
                }
                onProviderDisconnect() {
                    this.events.emit(tr), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((async () => {
                        await this.restartTransport().catch((t => this.logger.error(t)))
                    }), (0, J.toMiliseconds)(cr)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise((t => {
                            const e = setInterval((() => {
                                this.connected && (clearInterval(e), t())
                            }), this.connectionStatusPollingInterval)
                        }));
                        await this.restartTransport()
                    }
                }
            }
            var Yr = Object.defineProperty,
                Xr = Object.getOwnPropertySymbols,
                ti = Object.prototype.hasOwnProperty,
                ei = Object.prototype.propertyIsEnumerable,
                ri = (t, e, r) => e in t ? Yr(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                ii = (t, e) => {
                    for (var r in e || (e = {})) ti.call(e, r) && ri(t, r, e[r]);
                    if (Xr)
                        for (var r of Xr(e)) ei.call(e, r) && ri(t, r, e[r]);
                    return t
                };
            class ni extends class {
                constructor(t, e, r, i) {
                    this.core = t, this.logger = e, this.name = r
                }
            } {
                constructor(t, e, r, i = Ve, n) {
                    super(t, e, r, i), this.core = t, this.logger = e, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ve, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => {
                            this.getKey && null !== t && !(0, s.o8)(t) ? this.map.set(this.getKey(t), t) : (0, s.xW)(t) ? this.map.set(t.id, t) : (0, s.h1)(t) && this.map.set(t.topic, t)
                        })), this.cached = [], this.initialized = !0)
                    }, this.set = async (t, e) => {
                        this.isInitialized(), this.map.has(t) ? await this.update(t, e) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: t,
                            value: e
                        }), this.map.set(t, e), await this.persist())
                    }, this.get = t => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: t
                    }), this.getData(t)), this.getAll = t => (this.isInitialized(), t ? this.values.filter((e => Object.keys(t).every((r => dt()(e[r], t[r]))))) : this.values), this.update = async (t, e) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: t,
                            update: e
                        });
                        const r = ii(ii({}, this.getData(t)), e);
                        this.map.set(t, r), await this.persist()
                    }, this.delete = async (t, e) => {
                        this.isInitialized(), this.map.has(t) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: t,
                            reason: e
                        }), this.map.delete(t), await this.persist())
                    }, this.logger = (0, k.generateChildLogger)(e, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(t) {
                    const e = this.map.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(e), new Error(e)
                    }
                    return e
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        const t = await this.getDataStore();
                        if (typeof t > "u" || !t.length) return;
                        if (this.map.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class si {
                constructor(t, e) {
                    this.core = t, this.logger = e, this.name = "pairing", this.version = "0.3", this.events = new(n()), this.initialized = !1, this.storagePrefix = Ve, this.ignoredPayloadTypes = [s.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: t
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
                    }, this.create = async () => {
                        this.isInitialized();
                        const t = (0, s.jd)(),
                            e = await this.core.crypto.setSymKey(t),
                            r = (0, s.gn)(J.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            n = {
                                topic: e,
                                expiry: r,
                                relay: i,
                                active: !1
                            },
                            o = (0, s.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: e,
                                symKey: t,
                                relay: i
                            });
                        return await this.pairings.set(e, n), await this.core.relayer.subscribe(e), this.core.expirer.set(e, r), {
                            topic: e,
                            uri: o
                        }
                    }, this.pair = async t => {
                        this.isInitialized(), this.isValidPair(t);
                        const {
                            topic: e,
                            symKey: r,
                            relay: i
                        } = (0, s.he)(t.uri);
                        let n;
                        if (this.pairings.keys.includes(e) && (n = this.pairings.get(e), n.active)) throw new Error(`Pairing already exists: ${e}. Please try again with a new connection URI.`);
                        const o = (0, s.gn)(J.FIVE_MINUTES),
                            a = {
                                topic: e,
                                relay: i,
                                expiry: o,
                                active: !1
                            };
                        return await this.pairings.set(e, a), this.core.expirer.set(e, o), t.activatePairing && await this.activate({
                            topic: e
                        }), this.events.emit(gr, a), this.core.crypto.keychain.has(e) || (await this.core.crypto.setSymKey(r, e), await this.core.relayer.subscribe(e, {
                            relay: i
                        })), a
                    }, this.activate = async ({
                        topic: t
                    }) => {
                        this.isInitialized();
                        const e = (0, s.gn)(J.THIRTY_DAYS);
                        await this.pairings.update(t, {
                            active: !0,
                            expiry: e
                        }), this.core.expirer.set(t, e)
                    }, this.ping = async t => {
                        this.isInitialized(), await this.isValidPing(t);
                        const {
                            topic: e
                        } = t;
                        if (this.pairings.keys.includes(e)) {
                            const t = await this.sendRequest(e, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("pairing_ping", t), (({
                                error: t
                            }) => {
                                t ? n(t) : i()
                            })), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: t,
                        expiry: e
                    }) => {
                        this.isInitialized(), await this.pairings.update(t, {
                            expiry: e
                        })
                    }, this.updateMetadata = async ({
                        topic: t,
                        metadata: e
                    }) => {
                        this.isInitialized(), await this.pairings.update(t, {
                            peerMetadata: e
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async t => {
                        this.isInitialized(), await this.isValidDisconnect(t);
                        const {
                            topic: e
                        } = t;
                        this.pairings.keys.includes(e) && (await this.sendRequest(e, "wc_pairingDelete", (0, s.D6)("USER_DISCONNECTED")), await this.deletePairing(e))
                    }, this.sendRequest = async (t, e, r) => {
                        const i = (0, ut.formatJsonRpcRequest)(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = dr[e].req;
                        return this.core.history.set(t, i), this.core.relayer.publish(t, n, s), i.id
                    }, this.sendResult = async (t, e, r) => {
                        const i = (0, ut.formatJsonRpcResult)(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = await this.core.history.get(e, t),
                            o = dr[s.request.method].res;
                        await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
                    }, this.sendError = async (t, e, r) => {
                        const i = (0, ut.formatJsonRpcError)(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = await this.core.history.get(e, t),
                            o = dr[s.request.method] ? dr[s.request.method].res : dr.unregistered_method.res;
                        await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (t, e) => {
                        await this.core.relayer.unsubscribe(t), await Promise.all([this.pairings.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), e ? Promise.resolve() : this.core.expirer.del(t)])
                    }, this.cleanup = async () => {
                        const t = this.pairings.getAll().filter((t => (0, s.Bw)(t.expiry)));
                        await Promise.all(t.map((t => this.deletePairing(t.topic))))
                    }, this.onRelayEventRequest = t => {
                        const {
                            topic: e,
                            payload: r
                        } = t;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(e, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(e, r);
                            default:
                                return this.onUnknownRpcMethodRequest(e, r)
                        }
                    }, this.onRelayEventResponse = async t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = (await this.core.history.get(e, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult(r, t, !0), this.events.emit(mr, {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.logger.error(i)
                        }
                    }, this.onPairingPingResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        setTimeout((() => {
                            (0, ut.isJsonRpcResult)(e) ? this.events.emit((0, s.E0)("pairing_ping", r), {}): (0, ut.isJsonRpcError)(e) && this.events.emit((0, s.E0)("pairing_ping", r), {
                                error: e.error
                            })
                        }), 500)
                    }, this.onPairingDeleteRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidDisconnect({
                                topic: t
                            }), await this.deletePairing(t), this.events.emit(vr, {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.logger.error(i)
                        }
                    }, this.onUnknownRpcMethodRequest = async (t, e) => {
                        const {
                            id: r,
                            method: i
                        } = e;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            const e = (0, s.D6)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, t, e), this.logger.error(e)
                        } catch (n) {
                            await this.sendError(r, t, n), this.logger.error(n)
                        }
                    }, this.onUnknownRpcMethodResponse = t => {
                        this.registeredMethods.includes(t) || this.logger.error((0, s.D6)("WC_METHOD_UNSUPPORTED", t))
                    }, this.isValidPair = t => {
                        var e;
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() params: ${t}`);
                            throw new Error(e)
                        }
                        if (!(0, s.jv)(t.uri)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() uri: ${t.uri}`);
                            throw new Error(e)
                        }
                        const r = (0, s.he)(t.uri);
                        if (null == (e = r ? .relay) || !e.protocol) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(t)
                        }
                        if (null == r || !r.symKey) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(t)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidPairingTopic(e)
                    }, this.isValidDisconnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidPairingTopic(e)
                    }, this.isValidPairingTopic = async t => {
                        if (!(0, s.M_)(t, !1)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                            throw new Error(e)
                        }
                        if (!this.pairings.keys.includes(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                            throw new Error(e)
                        }
                        if ((0, s.Bw)(this.pairings.get(t).expiry)) {
                            await this.deletePairing(t);
                            const {
                                message: e
                            } = (0, s.Z7)("EXPIRED", `pairing topic: ${t}`);
                            throw new Error(e)
                        }
                    }, this.core = t, this.logger = (0, k.generateChildLogger)(e, this.name), this.pairings = new ni(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(Qe, (async t => {
                        const {
                            topic: e,
                            message: r
                        } = t;
                        if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        const i = await this.core.crypto.decode(e, r);
                        try {
                            (0, ut.isJsonRpcRequest)(i) ? (this.core.history.set(e, i), this.onRelayEventRequest({
                                topic: e,
                                payload: i
                            })) : (0, ut.isJsonRpcResponse)(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: e,
                                payload: i
                            }), this.core.history.delete(e, i.id))
                        } catch (U) {
                            this.logger.error(U)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.core.expirer.on(Sr, (async t => {
                        const {
                            topic: e
                        } = (0, s.iP)(t.target);
                        e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit(yr, {
                            topic: e
                        }))
                    }))
                }
            }
            class oi extends H {
                constructor(t, e) {
                    super(t, e), this.core = t, this.logger = e, this.records = new Map, this.events = new i.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ve, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.records.set(t.id, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (t, e, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: t,
                                request: e,
                                chainId: r
                            }), this.records.has(e.id)) return;
                        const i = {
                            id: e.id,
                            topic: t,
                            request: {
                                method: e.method,
                                params: e.params || null
                            },
                            chainId: r,
                            expiry: (0, s.gn)(J.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(wr, i)
                    }, this.resolve = async t => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: t
                            }), !this.records.has(t.id)) return;
                        const e = await this.getRecord(t.id);
                        typeof e.response > "u" && (e.response = (0, ut.isJsonRpcError)(t) ? {
                            error: t.error
                        } : {
                            result: t.result
                        }, this.records.set(e.id, e), this.events.emit(_r, e))
                    }, this.get = async (t, e) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: t,
                        id: e
                    }), await this.getRecord(e)), this.delete = (t, e) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: e
                        }), this.values.forEach((r => {
                            if (r.topic === t) {
                                if (typeof e < "u" && r.id !== e) return;
                                this.records.delete(r.id), this.events.emit(br, r)
                            }
                        }))
                    }, this.exists = async (t, e) => (this.isInitialized(), !!this.records.has(e) && (await this.getRecord(e)).topic === t), this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.logger = (0, k.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const t = [];
                    return this.values.forEach((e => {
                        if (typeof e.response < "u") return;
                        const r = {
                            topic: e.topic,
                            request: (0, ut.formatJsonRpcRequest)(e.request.method, e.request.params, e.id),
                            chainId: e.chainId
                        };
                        return t.push(r)
                    })), t
                }
                async setJsonRpcRecords(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(t) {
                    this.isInitialized();
                    const e = this.records.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(e)
                    }
                    return e
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(Ir)
                }
                async restore() {
                    try {
                        const t = await this.getJsonRpcRecords();
                        if (typeof t > "u" || !t.length) return;
                        if (this.records.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                    }
                }
                registerEventListeners() {
                    this.events.on(wr, (t => {
                        const e = wr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.events.on(_r, (t => {
                        const e = _r;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.events.on(br, (t => {
                        const e = br;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, (() => {
                        this.cleanup()
                    }))
                }
                cleanup() {
                    try {
                        this.records.forEach((t => {
                            (0, J.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id))
                        }))
                    } catch (t) {
                        this.logger.warn(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class ai extends F {
                constructor(t, e) {
                    super(t, e), this.core = t, this.logger = e, this.expirations = new Map, this.events = new i.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ve, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.expirations.set(t.target, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = t => {
                        try {
                            const e = this.formatTarget(t);
                            return typeof this.getExpiration(e) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (t, e) => {
                        this.isInitialized();
                        const r = this.formatTarget(t),
                            i = {
                                target: r,
                                expiry: e
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(Er, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = t => {
                        this.isInitialized();
                        const e = this.formatTarget(t);
                        return this.getExpiration(e)
                    }, this.del = t => {
                        if (this.isInitialized(), this.has(t)) {
                            const e = this.formatTarget(t),
                                r = this.getExpiration(e);
                            this.expirations.delete(e), this.events.emit(Pr, {
                                target: e,
                                expiration: r
                            })
                        }
                    }, this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.logger = (0, k.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(t) {
                    if ("string" == typeof t) return (0, s.Z4)(t);
                    if ("number" == typeof t) return (0, s.Gq)(t);
                    const {
                        message: e
                    } = (0, s.Z7)("UNKNOWN_TYPE", "Target type: " + typeof t);
                    throw new Error(e)
                }
                async setExpirations(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(Or)
                }
                async restore() {
                    try {
                        const t = await this.getExpirations();
                        if (typeof t > "u" || !t.length) return;
                        if (this.expirations.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
                    }
                }
                getExpiration(t) {
                    const e = this.expirations.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(e), new Error(e)
                    }
                    return e
                }
                checkExpiry(t, e) {
                    const {
                        expiry: r
                    } = e;
                    (0, J.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e)
                }
                expire(t, e) {
                    this.expirations.delete(t), this.events.emit(Sr, {
                        target: t,
                        expiration: e
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach(((t, e) => this.checkExpiry(e, t)))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(Er, (t => {
                        const e = Er;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    })), this.events.on(Sr, (t => {
                        const e = Sr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    })), this.events.on(Pr, (t => {
                        const e = Pr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class ci extends class {
                constructor(t, e) {
                    this.projectId = t, this.logger = e
                }
            } {
                constructor(t, e) {
                    super(t, e), this.projectId = t, this.logger = e, this.name = Rr, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async t => {
                        if (this.verifyDisabled || (0, s.b$)() || !(0, s.jU)()) return;
                        const e = this.getVerifyUrl(t ? .verifyUrl);
                        this.verifyUrl !== e && this.removeIframe(), this.verifyUrl = e;
                        try {
                            await this.createIframe()
                        } catch (U) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(U)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = Cr;
                            try {
                                await this.createIframe()
                            } catch (U) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(U), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async t => {
                        this.initialized ? this.sendPost(t.attestationId) : (this.addToQueue(t.attestationId), await this.init())
                    }, this.resolve = async t => {
                        if (this.isDevEnv) return "";
                        const e = this.getVerifyUrl(t ? .verifyUrl);
                        let r;
                        try {
                            r = await this.fetchAttestation(t.attestationId, e)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${t.attestationId} from url: ${e}`), this.logger.info(i), r = await this.fetchAttestation(t.attestationId, Cr)
                        }
                        return r
                    }, this.fetchAttestation = async (t, e) => {
                        this.logger.info(`resolving attestation: ${t} from url: ${e}`);
                        const r = this.startAbortTimer(2 * J.ONE_SECOND),
                            i = await fetch(`${e}/attestation/${t}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = t => {
                        this.queue.push(t)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach((t => this.sendPost(t))), this.queue = [])
                    }, this.sendPost = t => {
                        var e;
                        try {
                            if (!this.iframe) return;
                            null == (e = this.iframe.contentWindow) || e.postMessage(t, "*"), this.logger.info(`postMessage sent: ${t} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let t;
                        const e = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", e), t())
                        };
                        await Promise.race([new Promise((r => {
                            if (document.getElementById(Rr)) return r();
                            window.addEventListener("message", e);
                            const i = document.createElement("iframe");
                            i.id = Rr, i.src = `${this.verifyUrl}/${this.projectId}`, i.style.display = "none", document.body.append(i), this.iframe = i, t = r
                        })), new Promise(((t, r) => setTimeout((() => {
                            window.removeEventListener("message", e), r("verify iframe load timeout")
                        }), (0, J.toMiliseconds)(J.FIVE_SECONDS))))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = t => {
                        let e = t || xr;
                        return Ar.includes(e) || (this.logger.info(`verify url: ${e}, not included in trusted list, assigning default: ${xr}`), e = xr), e
                    }, this.logger = (0, k.generateChildLogger)(e, this.name), this.verifyUrl = xr, this.abortController = new AbortController, this.isDevEnv = (0, s.UG)() && vt.env.IS_VITEST
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                startAbortTimer(t) {
                    return this.abortController = new AbortController, setTimeout((() => this.abortController.abort()), (0, J.toMiliseconds)(t))
                }
            }
            class ui extends class {
                constructor(t, e) {
                    this.projectId = t, this.logger = e
                }
            } {
                constructor(t, e) {
                    super(t, e), this.projectId = t, this.logger = e, this.context = "echo", this.registerDeviceToken = async t => {
                        const {
                            clientId: e,
                            token: r,
                            notificationType: i,
                            enableEncrypted: n = !1
                        } = t, s = `https://echo.walletconnect.com/${this.projectId}/clients`;
                        await yt()(s, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                client_id: e,
                                type: i,
                                token: r,
                                always_raw: n
                            })
                        })
                    }, this.logger = (0, k.generateChildLogger)(e, this.context)
                }
            }
            var hi = Object.defineProperty,
                li = Object.getOwnPropertySymbols,
                pi = Object.prototype.hasOwnProperty,
                fi = Object.prototype.propertyIsEnumerable,
                di = (t, e, r) => e in t ? hi(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                gi = (t, e) => {
                    for (var r in e || (e = {})) pi.call(e, r) && di(t, r, e[r]);
                    if (li)
                        for (var r of li(e)) fi.call(e, r) && di(t, r, e[r]);
                    return t
                };
            class yi extends U {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = He, this.events = new i.EventEmitter, this.initialized = !1, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.projectId = t ? .projectId, this.relayUrl = t ? .relayUrl || Je, this.customStoragePrefix = null != t && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
                    const e = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : (0, k.pino)((0, k.getDefaultLoggerOptions)({
                        level: t ? .logger || Ke
                    }));
                    this.logger = (0, k.generateChildLogger)(e, this.name), this.heartbeat = new M.HeartBeat, this.crypto = new jr(this, this.logger, t ? .keychain), this.history = new oi(this, this.logger), this.expirer = new ai(this, this.logger), this.storage = null != t && t.storage ? t.storage : new L(gi(gi({}, Be), t ? .storageOptions)), this.relayer = new Qr({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new si(this, this.logger), this.verify = new ci(this.projectId || "", this.logger), this.echoClient = new ui(this.projectId || "", this.logger)
                }
                static async init(t) {
                    const e = new yi(t);
                    await e.initialize();
                    const r = await e.crypto.getClientId();
                    return await e.storage.setItem("WALLETCONNECT_CLIENT_ID", r), e
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (t) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
                    }
                }
            }
            const vi = yi,
                mi = "client",
                wi = `wc@2:${mi}:`,
                _i = mi,
                bi = "error",
                Ii = "WALLETCONNECT_DEEPLINK_CHOICE",
                Ei = "Proposal expired",
                Pi = J.SEVEN_DAYS,
                Si = {
                    wc_sessionPropose: {
                        req: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: J.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: J.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: J.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: J.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                Oi = {
                    min: J.FIVE_MINUTES,
                    max: J.SEVEN_DAYS
                },
                Ri = "IDLE",
                xi = "ACTIVE",
                Ci = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var Ai = Object.defineProperty,
                Ni = Object.defineProperties,
                ji = Object.getOwnPropertyDescriptors,
                Ti = Object.getOwnPropertySymbols,
                qi = Object.prototype.hasOwnProperty,
                Di = Object.prototype.propertyIsEnumerable,
                zi = (t, e, r) => e in t ? Ai(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Li = (t, e) => {
                    for (var r in e || (e = {})) qi.call(e, r) && zi(t, r, e[r]);
                    if (Ti)
                        for (var r of Ti(e)) Di.call(e, r) && zi(t, r, e[r]);
                    return t
                },
                Mi = (t, e) => Ni(t, ji(e));
            class ki extends class {
                constructor(t) {
                    this.client = t
                }
            } {
                constructor(t) {
                    super(t), this.name = "engine", this.events = new(n()), this.initialized = !1, this.ignoredPayloadTypes = [s.rV], this.requestQueue = {
                        state: Ri,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: Ri,
                        queue: []
                    }, this.requestQueueDelay = J.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(Si)
                        }), this.initialized = !0, setTimeout((() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }), (0, J.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async t => {
                        await this.isInitialized();
                        const e = Mi(Li({}, t), {
                            requiredNamespaces: t.requiredNamespaces || {},
                            optionalNamespaces: t.optionalNamespaces || {}
                        });
                        await this.isValidConnect(e);
                        const {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: o,
                            relays: a
                        } = e;
                        let c, u = r,
                            h = !1;
                        if (u && (h = this.client.core.pairing.pairings.get(u).active), !u || !h) {
                            const {
                                topic: t,
                                uri: e
                            } = await this.client.core.pairing.create();
                            u = t, c = e
                        }
                        const l = await this.client.core.crypto.generateKeyPair(),
                            p = Li({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: a ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, o && {
                                sessionProperties: o
                            }),
                            {
                                reject: f,
                                resolve: d,
                                done: g
                            } = (0, s.H1)(J.FIVE_MINUTES, Ei);
                        if (this.events.once((0, s.E0)("session_connect"), (async ({
                                error: t,
                                session: e
                            }) => {
                                if (t) f(t);
                                else if (e) {
                                    e.self.publicKey = l;
                                    const t = Mi(Li({}, e), {
                                        requiredNamespaces: e.requiredNamespaces,
                                        optionalNamespaces: e.optionalNamespaces
                                    });
                                    await this.client.session.set(e.topic, t), await this.setExpiry(e.topic, e.expiry), u && await this.client.core.pairing.updateMetadata({
                                        topic: u,
                                        metadata: e.peer.metadata
                                    }), d(t)
                                }
                            })), !u) {
                            const {
                                message: t
                            } = (0, s.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
                            throw new Error(t)
                        }
                        const y = await this.sendRequest({
                                topic: u,
                                method: "wc_sessionPropose",
                                params: p
                            }),
                            v = (0, s.gn)(J.FIVE_MINUTES);
                        return await this.setProposal(y, Li({
                            id: y,
                            expiry: v
                        }, p)), {
                            uri: c,
                            approval: g
                        }
                    }, this.pair = async t => (await this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async t => {
                        await this.isInitialized(), await this.isValidApprove(t);
                        const {
                            id: e,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = t, o = this.client.proposal.get(e);
                        let {
                            pairingTopic: a,
                            proposer: c,
                            requiredNamespaces: u,
                            optionalNamespaces: h
                        } = o;
                        a = a || "", (0, s.L5)(u) || (u = (0, s.fc)(i, "approve()"));
                        const l = await this.client.core.crypto.generateKeyPair(),
                            p = c.publicKey,
                            f = await this.client.core.crypto.generateSharedKey(l, p);
                        a && e && (await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: c.metadata
                        }), await this.sendResult({
                            id: e,
                            topic: a,
                            result: {
                                relay: {
                                    protocol: r ? ? "irn"
                                },
                                responderPublicKey: l
                            }
                        }), await this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: a
                        }));
                        const d = Li({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: u,
                            optionalNamespaces: h,
                            pairingTopic: a,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: (0, s.gn)(Pi)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(f), await this.sendRequest({
                            topic: f,
                            method: "wc_sessionSettle",
                            params: d,
                            throwOnFailedPublish: !0
                        });
                        const g = Mi(Li({}, d), {
                            topic: f,
                            pairingTopic: a,
                            acknowledged: !1,
                            self: d.controller,
                            peer: {
                                publicKey: c.publicKey,
                                metadata: c.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(f, g), await this.setExpiry(f, (0, s.gn)(Pi)), {
                            topic: f,
                            acknowledged: () => new Promise((t => setTimeout((() => t(this.client.session.get(f))), 500)))
                        }
                    }, this.reject = async t => {
                        await this.isInitialized(), await this.isValidReject(t);
                        const {
                            id: e,
                            reason: r
                        } = t, {
                            pairingTopic: i
                        } = this.client.proposal.get(e);
                        i && (await this.sendError(e, i, r), await this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")))
                    }, this.update = async t => {
                        await this.isInitialized(), await this.isValidUpdate(t);
                        const {
                            topic: e,
                            namespaces: r
                        } = t, i = await this.sendRequest({
                            topic: e,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: n,
                            resolve: o,
                            reject: a
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_update", i), (({
                            error: t
                        }) => {
                            t ? a(t) : o()
                        })), await this.client.session.update(e, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async t => {
                        await this.isInitialized(), await this.isValidExtend(t);
                        const {
                            topic: e
                        } = t, r = await this.sendRequest({
                            topic: e,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: n,
                            reject: o
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_extend", r), (({
                            error: t
                        }) => {
                            t ? o(t) : n()
                        })), await this.setExpiry(e, (0, s.gn)(Pi)), {
                            acknowledged: i
                        }
                    }, this.request = async t => {
                        await this.isInitialized(), await this.isValidRequest(t);
                        const {
                            chainId: e,
                            request: r,
                            topic: i,
                            expiry: n
                        } = t, o = (0, ut.payloadId)(), {
                            done: a,
                            resolve: c,
                            reject: u
                        } = (0, s.H1)(n, "Request expired. Please try again.");
                        return this.events.once((0, s.E0)("session_request", o), (({
                            error: t,
                            result: e
                        }) => {
                            t ? u(t) : c(e)
                        })), await Promise.all([new Promise((async t => {
                            await this.sendRequest({
                                clientRpcId: o,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: e
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch((t => u(t))), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: e,
                                id: o
                            }), t()
                        })), new Promise((async t => {
                            const e = await (0, s.bW)(this.client.core.storage, Ii);
                            (0, s.Hh)({
                                id: o,
                                topic: i,
                                wcDeepLink: e
                            }), t()
                        })), a()]).then((t => t[2]))
                    }, this.respond = async t => {
                        await this.isInitialized(), await this.isValidRespond(t);
                        const {
                            topic: e,
                            response: r
                        } = t, {
                            id: i
                        } = r;
                        (0, ut.isJsonRpcResult)(r) ? await this.sendResult({
                            id: i,
                            topic: e,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }): (0, ut.isJsonRpcError)(r) && await this.sendError(i, e, r.error), this.cleanupAfterResponse(t)
                    }, this.ping = async t => {
                        await this.isInitialized(), await this.isValidPing(t);
                        const {
                            topic: e
                        } = t;
                        if (this.client.session.keys.includes(e)) {
                            const t = await this.sendRequest({
                                    topic: e,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("session_ping", t), (({
                                error: t
                            }) => {
                                t ? n(t) : i()
                            })), await r()
                        } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
                            topic: e
                        })
                    }, this.emit = async t => {
                        await this.isInitialized(), await this.isValidEmit(t);
                        const {
                            topic: e,
                            event: r,
                            chainId: i
                        } = t;
                        await this.sendRequest({
                            topic: e,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async t => {
                        await this.isInitialized(), await this.isValidDisconnect(t);
                        const {
                            topic: e
                        } = t;
                        this.client.session.keys.includes(e) ? (await this.sendRequest({
                            topic: e,
                            method: "wc_sessionDelete",
                            params: (0, s.D6)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(e)) : await this.client.core.pairing.disconnect({
                            topic: e
                        })
                    }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter((e => (0, s.Ih)(e, t)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async t => {
                        if (t.pairingTopic) try {
                            const e = this.client.core.pairing.pairings.get(t.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter((r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === t.peer.metadata.url && r.topic && r.topic !== e.topic
                                }));
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((t => this.client.core.pairing.disconnect({
                                topic: t.topic
                            })))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (t, e) => {
                        const {
                            self: r
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), this.client.session.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), e || this.client.core.expirer.del(t), this.client.core.storage.removeItem(Ii).catch((t => this.client.logger.warn(t))), this.getPendingSessionRequests().forEach((e => {
                            e.topic === t && this.deletePendingSessionRequest(e.id, (0, s.D6)("USER_DISCONNECTED"))
                        }))
                    }, this.deleteProposal = async (t, e) => {
                        await Promise.all([this.client.proposal.delete(t, (0, s.D6)("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t)])
                    }, this.deletePendingSessionRequest = async (t, e, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(t, e), r ? Promise.resolve() : this.client.core.expirer.del(t)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((e => e.id !== t)), r && (this.sessionRequestQueue.state = Ri)
                    }, this.setExpiry = async (t, e) => {
                        this.client.session.keys.includes(t) && await this.client.session.update(t, {
                            expiry: e
                        }), this.client.core.expirer.set(t, e)
                    }, this.setProposal = async (t, e) => {
                        await this.client.proposal.set(t, e), this.client.core.expirer.set(t, e.expiry)
                    }, this.setPendingSessionRequest = async t => {
                        const e = Si.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n,
                                verifyContext: o
                            } = t;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n,
                            verifyContext: o
                        }), e && this.client.core.expirer.set(r, (0, s.gn)(e))
                    }, this.sendRequest = async t => {
                        const {
                            topic: e,
                            method: r,
                            params: i,
                            expiry: n,
                            relayRpcId: o,
                            clientRpcId: a,
                            throwOnFailedPublish: c
                        } = t, u = (0, ut.formatJsonRpcRequest)(r, i, a);
                        if ((0, s.jU)() && Ci.includes(r)) {
                            const t = (0, s.rj)(JSON.stringify(u));
                            this.client.core.verify.register({
                                attestationId: t
                            })
                        }
                        const h = await this.client.core.crypto.encode(e, u),
                            l = Si[r].req;
                        return n && (l.ttl = n), o && (l.id = o), this.client.core.history.set(e, u), c ? (l.internal = Mi(Li({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(e, h, l)) : this.client.core.relayer.publish(e, h, l).catch((t => this.client.logger.error(t))), u.id
                    }, this.sendResult = async t => {
                        const {
                            id: e,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: n
                        } = t, s = (0, ut.formatJsonRpcResult)(e, i), o = await this.client.core.crypto.encode(r, s), a = await this.client.core.history.get(r, e), c = Si[a.request.method].res;
                        n ? (c.internal = Mi(Li({}, c.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch((t => this.client.logger.error(t))), await this.client.core.history.resolve(s)
                    }, this.sendError = async (t, e, r) => {
                        const i = (0, ut.formatJsonRpcError)(t, r),
                            n = await this.client.core.crypto.encode(e, i),
                            s = await this.client.core.history.get(e, t),
                            o = Si[s.request.method].res;
                        this.client.core.relayer.publish(e, n, o), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        const t = [],
                            e = [];
                        this.client.session.getAll().forEach((e => {
                            (0, s.Bw)(e.expiry) && t.push(e.topic)
                        })), this.client.proposal.getAll().forEach((t => {
                            (0, s.Bw)(t.expiry) && e.push(t.id)
                        })), await Promise.all([...t.map((t => this.deleteSession(t))), ...e.map((t => this.deleteProposal(t)))])
                    }, this.onRelayEventRequest = async t => {
                        this.requestQueue.queue.push(t), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state !== xi) {
                            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                                this.requestQueue.state = xi;
                                const e = this.requestQueue.queue.shift();
                                if (e) try {
                                    this.processRequest(e), await new Promise((t => setTimeout(t, 300)))
                                } catch (t) {
                                    this.client.logger.warn(t)
                                }
                            }
                            this.requestQueue.state = Ri
                        } else this.client.logger.info("Request queue already active, skipping...")
                    }, this.processRequest = t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(e, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(e, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(e, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(e, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(e, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(e, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(e, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(e, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = (await this.client.core.history.get(e, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(e, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(e, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(e, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(e, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(e, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(e, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = t => {
                        const {
                            topic: e
                        } = t, {
                            message: r
                        } = (0, s.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(r)
                    }, this.onSessionProposeRequest = async (t, e) => {
                        const {
                            params: r,
                            id: i
                        } = e;
                        try {
                            this.isValidConnect(Li({}, e.params));
                            const n = (0, s.gn)(J.FIVE_MINUTES),
                                o = Li({
                                    id: i,
                                    pairingTopic: t,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, o);
                            const a = (0, s.rj)(JSON.stringify(e)),
                                c = await this.getVerifyContext(a, o.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: o,
                                verifyContext: c
                            })
                        } catch (U) {
                            await this.sendError(i, t, U), this.client.logger.error(U)
                        }
                    }, this.onSessionProposeResponse = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        if ((0, ut.isJsonRpcResult)(e)) {
                            const {
                                result: i
                            } = e;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            const n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            const s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            const o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            const a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            const c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: t
                            })
                        } else(0, ut.isJsonRpcError)(e) && (await this.client.proposal.delete(r, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_connect"), {
                            error: e.error
                        }))
                    }, this.onSessionSettleRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            this.isValidSessionSettleRequest(i);
                            const {
                                relay: r,
                                controller: n,
                                expiry: o,
                                namespaces: a,
                                requiredNamespaces: c,
                                optionalNamespaces: u,
                                sessionProperties: h,
                                pairingTopic: l
                            } = e.params, p = Li({
                                topic: t,
                                relay: r,
                                expiry: o,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: c,
                                optionalNamespaces: u,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, h && {
                                sessionProperties: h
                            });
                            await this.sendResult({
                                id: e.id,
                                topic: t,
                                result: !0
                            }), this.events.emit((0, s.E0)("session_connect"), {
                                session: p
                            }), this.cleanupDuplicatePairings(p)
                        } catch (U) {
                            await this.sendError(r, t, U), this.client.logger.error(U)
                        }
                    }, this.onSessionSettleResponse = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        (0, ut.isJsonRpcResult)(e) ? (await this.client.session.update(t, {
                            acknowledged: !0
                        }), this.events.emit((0, s.E0)("session_approve", r), {})) : (0, ut.isJsonRpcError)(e) && (await this.client.session.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_approve", r), {
                            error: e.error
                        }))
                    }, this.onSessionUpdateRequest = async (t, e) => {
                        const {
                            params: r,
                            id: i
                        } = e;
                        try {
                            const e = `${t}_session_update`,
                                n = s.O6.get(e);
                            if (n && this.isRequestOutOfSync(n, i)) return void this.client.logger.info(`Discarding out of sync request - ${i}`);
                            this.isValidUpdate(Li({
                                topic: t
                            }, r)), await this.client.session.update(t, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: t,
                                params: r
                            }), s.O6.set(e, i)
                        } catch (U) {
                            await this.sendError(i, t, U), this.client.logger.error(U)
                        }
                    }, this.isRequestOutOfSync = (t, e) => parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        (0, ut.isJsonRpcResult)(e) ? this.events.emit((0, s.E0)("session_update", r), {}): (0, ut.isJsonRpcError)(e) && this.events.emit((0, s.E0)("session_update", r), {
                            error: e.error
                        })
                    }, this.onSessionExtendRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidExtend({
                                topic: t
                            }), await this.setExpiry(t, (0, s.gn)(Pi)), await this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionExtendResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        (0, ut.isJsonRpcResult)(e) ? this.events.emit((0, s.E0)("session_extend", r), {}): (0, ut.isJsonRpcError)(e) && this.events.emit((0, s.E0)("session_extend", r), {
                            error: e.error
                        })
                    }, this.onSessionPingRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionPingResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        setTimeout((() => {
                            (0, ut.isJsonRpcResult)(e) ? this.events.emit((0, s.E0)("session_ping", r), {}): (0, ut.isJsonRpcError)(e) && this.events.emit((0, s.E0)("session_ping", r), {
                                error: e.error
                            })
                        }), 500)
                    }, this.onSessionDeleteRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidDisconnect({
                                topic: t,
                                reason: e.params
                            }), await Promise.all([new Promise((e => {
                                this.client.core.relayer.once(ir, (async () => {
                                    e(await this.deleteSession(t))
                                }))
                            })), this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    }, this.onSessionRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            this.isValidRequest(Li({
                                topic: t
                            }, i));
                            const e = (0, s.rj)(JSON.stringify((0, ut.formatJsonRpcRequest)("wc_sessionRequest", i, r))),
                                n = this.client.session.get(t),
                                o = {
                                    id: r,
                                    topic: t,
                                    params: i,
                                    verifyContext: await this.getVerifyContext(e, n.peer.metadata)
                                };
                            await this.setPendingSessionRequest(o), this.addSessionRequestToSessionRequestQueue(o), this.processSessionRequestQueue()
                        } catch (U) {
                            await this.sendError(r, t, U), this.client.logger.error(U)
                        }
                    }, this.onSessionRequestResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        (0, ut.isJsonRpcResult)(e) ? this.events.emit((0, s.E0)("session_request", r), {
                            result: e.result
                        }): (0, ut.isJsonRpcError)(e) && this.events.emit((0, s.E0)("session_request", r), {
                            error: e.error
                        })
                    }, this.onSessionEventRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            const e = `${t}_session_event_${i.event.name}`,
                                n = s.O6.get(e);
                            if (n && this.isRequestOutOfSync(n, r)) return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                            this.isValidEmit(Li({
                                topic: t
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: t,
                                params: i
                            }), s.O6.set(e, r)
                        } catch (U) {
                            await this.sendError(r, t, U), this.client.logger.error(U)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = t => {
                        this.sessionRequestQueue.queue.push(t)
                    }, this.cleanupAfterResponse = t => {
                        this.deletePendingSessionRequest(t.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout((() => {
                            this.sessionRequestQueue.state = Ri, this.processSessionRequestQueue()
                        }), (0, J.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === xi) return void this.client.logger.info("session request queue is already active.");
                        const t = this.sessionRequestQueue.queue[0];
                        if (t) try {
                            this.sessionRequestQueue.state = xi, this.client.events.emit("session_request", t)
                        } catch (e) {
                            this.client.logger.error(e)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = t => {
                        if (t.active) return;
                        const e = this.client.proposal.getAll().find((e => e.pairingTopic === t.topic));
                        e && this.onSessionProposeRequest(t.topic, (0, ut.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: e.requiredNamespaces,
                            optionalNamespaces: e.optionalNamespaces,
                            relays: e.relays,
                            proposer: e.proposer,
                            sessionProperties: e.sessionProperties
                        }, e.id))
                    }, this.isValidConnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                            throw new Error(e)
                        }
                        const {
                            pairingTopic: e,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: o
                        } = t;
                        if ((0, s.o8)(e) || await this.isValidPairingTopic(e), !(0, s.PM)(o, !0)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw new Error(t)
                        }!(0, s.o8)(r) && 0 !== (0, s.L5)(r) && this.validateNamespaces(r, "requiredNamespaces"), !(0, s.o8)(i) && 0 !== (0, s.L5)(i) && this.validateNamespaces(i, "optionalNamespaces"), (0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (t, e) => {
                        const r = (0, s.n)(t, "connect()", e);
                        if (r) throw new Error(r.message)
                    }, this.isValidApprove = async t => {
                        if (!(0, s.EJ)(t)) throw new Error((0, s.Z7)("MISSING_OR_INVALID", `approve() params: ${t}`).message);
                        const {
                            id: e,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = t;
                        await this.isValidProposalId(e);
                        const o = this.client.proposal.get(e),
                            a = (0, s.in)(r, "approve()");
                        if (a) throw new Error(a.message);
                        const c = (0, s.rF)(o.requiredNamespaces, r, "approve()");
                        if (c) throw new Error(c.message);
                        if (!(0, s.M_)(i, !0)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw new Error(t)
                        }(0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            id: e,
                            reason: r
                        } = t;
                        if (await this.isValidProposalId(e), !(0, s.$t)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidSessionSettleRequest = t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            relay: e,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = t;
                        if (!(0, s.Z2)(e)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(t)
                        }
                        const o = (0, s.Dd)(r, "onSessionSettleRequest()");
                        if (o) throw new Error(o.message);
                        const a = (0, s.in)(i, "onSessionSettleRequest()");
                        if (a) throw new Error(a.message);
                        if ((0, s.Bw)(n)) {
                            const {
                                message: t
                            } = (0, s.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(t)
                        }
                    }, this.isValidUpdate = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `update() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            namespaces: r
                        } = t;
                        await this.isValidSessionTopic(e);
                        const i = this.client.session.get(e),
                            n = (0, s.in)(r, "update()");
                        if (n) throw new Error(n.message);
                        const o = (0, s.rF)(i.requiredNamespaces, r, "update()");
                        if (o) throw new Error(o.message)
                    }, this.isValidExtend = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `extend() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionTopic(e)
                    }, this.isValidRequest = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = t;
                        await this.isValidSessionTopic(e);
                        const {
                            namespaces: o
                        } = this.client.session.get(e);
                        if (!(0, s.p8)(o, i)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw new Error(t)
                        }
                        if (!(0, s.hH)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                        if (!(0, s.al)(o, i, r.method)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw new Error(t)
                        }
                        if (n && !(0, s.ON)(n, Oi)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${Oi.min} and ${Oi.max}`);
                            throw new Error(t)
                        }
                    }, this.isValidRespond = async t => {
                        var e;
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: r,
                            response: i
                        } = t;
                        try {
                            await this.isValidSessionTopic(r)
                        } catch (U) {
                            throw null != (e = t ? .response) && e.id && this.cleanupAfterResponse(t), U
                        }
                        if (!(0, s.JT)(i)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                            throw new Error(t)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionOrPairingTopic(e)
                    }, this.isValidEmit = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            event: r,
                            chainId: i
                        } = t;
                        await this.isValidSessionTopic(e);
                        const {
                            namespaces: n
                        } = this.client.session.get(e);
                        if (!(0, s.p8)(n, i)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw new Error(t)
                        }
                        if (!(0, s.nf)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                        if (!(0, s.sI)(n, i, r.name)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidDisconnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionOrPairingTopic(e)
                    }, this.getVerifyContext = async (t, e) => {
                        const r = {
                            verified: {
                                verifyUrl: e.verifyUrl || xr,
                                validation: "UNKNOWN",
                                origin: e.url || ""
                            }
                        };
                        try {
                            const i = await this.client.core.verify.resolve({
                                attestationId: t,
                                verifyUrl: e.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(e.url).origin ? "VALID" : "INVALID")
                        } catch (i) {
                            this.client.logger.info(i)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (t, e) => {
                        Object.values(t).forEach((t => {
                            if (!(0, s.M_)(t, !1)) {
                                const {
                                    message: r
                                } = (0, s.Z7)("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
                                throw new Error(r)
                            }
                        }))
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(Qe, (async t => {
                        const {
                            topic: e,
                            message: r
                        } = t;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        const i = await this.client.core.crypto.decode(e, r);
                        try {
                            (0, ut.isJsonRpcRequest)(i) ? (this.client.core.history.set(e, i), this.onRelayEventRequest({
                                topic: e,
                                payload: i
                            })) : (0, ut.isJsonRpcResponse)(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: e,
                                payload: i
                            }), this.client.core.history.delete(e, i.id)) : this.onRelayEventUnknownPayload({
                                topic: e,
                                payload: i
                            })
                        } catch (n) {
                            this.client.logger.error(n)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(Sr, (async t => {
                        const {
                            topic: e,
                            id: r
                        } = (0, s.iP)(t.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, s.Z7)("EXPIRED"), !0);
                        e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, !0), this.client.events.emit("session_expire", {
                            topic: e
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    }))
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(gr, (t => this.onPairingCreated(t)))
                }
                isValidPairingTopic(t) {
                    if (!(0, s.M_)(t, !1)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.core.pairing.pairings.get(t).expiry)) {
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `pairing topic: ${t}`);
                        throw new Error(e)
                    }
                }
                async isValidSessionTopic(t) {
                    if (!(0, s.M_)(t, !1)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.session.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.session.get(t).expiry)) {
                        await this.deleteSession(t);
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `session topic: ${t}`);
                        throw new Error(e)
                    }
                }
                async isValidSessionOrPairingTopic(t) {
                    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(t)) {
                            if ((0, s.M_)(t, !1)) {
                                const {
                                    message: e
                                } = (0, s.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
                                throw new Error(e)
                            } {
                                const {
                                    message: e
                                } = (0, s.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
                                throw new Error(e)
                            }
                        }
                        this.isValidPairingTopic(t)
                    }
                }
                async isValidProposalId(t) {
                    if (!(0, s.Q0)(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.proposal.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.proposal.get(t).expiry)) {
                        await this.deleteProposal(t);
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `proposal id: ${t}`);
                        throw new Error(e)
                    }
                }
            }
            class $i extends ni {
                constructor(t, e) {
                    super(t, e, "proposal", wi), this.core = t, this.logger = e
                }
            }
            class Ui extends ni {
                constructor(t, e) {
                    super(t, e, "session", wi), this.core = t, this.logger = e
                }
            }
            class Hi extends ni {
                constructor(t, e) {
                    super(t, e, "request", wi, (t => t.id)), this.core = t, this.logger = e
                }
            }
            class Vi extends class {
                constructor(t) {
                    this.opts = t, this.protocol = "wc", this.version = 2
                }
            } {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = _i, this.events = new i.EventEmitter, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.removeAllListeners = t => this.events.removeAllListeners(t), this.connect = async t => {
                        try {
                            return await this.engine.connect(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async t => {
                        try {
                            return await this.engine.pair(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async t => {
                        try {
                            return await this.engine.approve(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async t => {
                        try {
                            return await this.engine.reject(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async t => {
                        try {
                            return await this.engine.update(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async t => {
                        try {
                            return await this.engine.extend(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async t => {
                        try {
                            return await this.engine.request(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async t => {
                        try {
                            return await this.engine.respond(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async t => {
                        try {
                            return await this.engine.ping(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async t => {
                        try {
                            return await this.engine.emit(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async t => {
                        try {
                            return await this.engine.disconnect(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = t => {
                        try {
                            return this.engine.find(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.name = t ? .name || _i, this.metadata = t ? .metadata || (0, s.D)();
                    const e = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : (0, k.pino)((0, k.getDefaultLoggerOptions)({
                        level: t ? .logger || bi
                    }));
                    this.core = t ? .core || new vi(t), this.logger = (0, k.generateChildLogger)(e, this.name), this.session = new Ui(this.core, this.logger), this.proposal = new $i(this.core, this.logger), this.pendingRequest = new Hi(this.core, this.logger), this.engine = new ki(this)
                }
                static async init(t) {
                    const e = new Vi(t);
                    return await e.initialize(), e
                }
                get context() {
                    return (0, k.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (t) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
                    }
                }
            }
            var Ki = r(96641);
            const Bi = "error",
                Fi = "wc@2:universal_provider:",
                Zi = "default_chain_changed";
            var Wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                Ji = {
                    exports: {}
                };
            ! function(t, e) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 16,
                        a = 32,
                        c = 64,
                        u = 128,
                        h = 256,
                        l = 1 / 0,
                        p = 9007199254740991,
                        f = NaN,
                        d = 4294967295,
                        g = [
                            ["ary", u],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", o],
                            ["flip", 512],
                            ["partial", a],
                            ["partialRight", c],
                            ["rearg", h]
                        ],
                        y = "[object Arguments]",
                        v = "[object Array]",
                        m = "[object Boolean]",
                        w = "[object Date]",
                        _ = "[object Error]",
                        b = "[object Function]",
                        I = "[object GeneratorFunction]",
                        E = "[object Map]",
                        P = "[object Number]",
                        S = "[object Object]",
                        O = "[object Promise]",
                        R = "[object RegExp]",
                        x = "[object Set]",
                        C = "[object String]",
                        A = "[object Symbol]",
                        N = "[object WeakMap]",
                        j = "[object ArrayBuffer]",
                        T = "[object DataView]",
                        q = "[object Float32Array]",
                        D = "[object Float64Array]",
                        z = "[object Int8Array]",
                        L = "[object Int16Array]",
                        M = "[object Int32Array]",
                        k = "[object Uint8Array]",
                        $ = "[object Uint8ClampedArray]",
                        U = "[object Uint16Array]",
                        H = "[object Uint32Array]",
                        V = /\b__p \+= '';/g,
                        K = /\b(__p \+=) '' \+/g,
                        B = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        F = /&(?:amp|lt|gt|quot|#39);/g,
                        Z = /[&<>"']/g,
                        W = RegExp(F.source),
                        J = RegExp(Z.source),
                        G = /<%-([\s\S]+?)%>/g,
                        Q = /<%([\s\S]+?)%>/g,
                        Y = /<%=([\s\S]+?)%>/g,
                        X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        tt = /^\w*$/,
                        et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        rt = /[\\^$.*+?()[\]{}|]/g,
                        it = RegExp(rt.source),
                        nt = /^\s+/,
                        st = /\s/,
                        ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        at = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ct = /,? & /,
                        ut = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ht = /[()=,{}\[\]\/\s]/,
                        lt = /\\(\\)?/g,
                        pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        ft = /\w*$/,
                        dt = /^[-+]0x[0-9a-f]+$/i,
                        gt = /^0b[01]+$/i,
                        yt = /^\[object .+?Constructor\]$/,
                        vt = /^0o[0-7]+$/i,
                        mt = /^(?:0|[1-9]\d*)$/,
                        wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        _t = /($^)/,
                        bt = /['\n\r\u2028\u2029\\]/g,
                        It = "\\ud800-\\udfff",
                        Et = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Pt = "\\u2700-\\u27bf",
                        St = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        Ot = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        Rt = "\\ufe0e\\ufe0f",
                        xt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Ct = "['\u2019]",
                        At = "[" + It + "]",
                        Nt = "[" + xt + "]",
                        jt = "[" + Et + "]",
                        Tt = "\\d+",
                        qt = "[" + Pt + "]",
                        Dt = "[" + St + "]",
                        zt = "[^" + It + xt + Tt + Pt + St + Ot + "]",
                        Lt = "\\ud83c[\\udffb-\\udfff]",
                        Mt = "[^" + It + "]",
                        kt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        $t = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Ut = "[" + Ot + "]",
                        Ht = "\\u200d",
                        Vt = "(?:" + Dt + "|" + zt + ")",
                        Kt = "(?:" + Ut + "|" + zt + ")",
                        Bt = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        Ft = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        Zt = "(?:" + jt + "|" + Lt + ")" + "?",
                        Wt = "[" + Rt + "]?",
                        Jt = Wt + Zt + ("(?:\\u200d(?:" + [Mt, kt, $t].join("|") + ")" + Wt + Zt + ")*"),
                        Gt = "(?:" + [qt, kt, $t].join("|") + ")" + Jt,
                        Qt = "(?:" + [Mt + jt + "?", jt, kt, $t, At].join("|") + ")",
                        Yt = RegExp(Ct, "g"),
                        Xt = RegExp(jt, "g"),
                        te = RegExp(Lt + "(?=" + Lt + ")|" + Qt + Jt, "g"),
                        ee = RegExp([Ut + "?" + Dt + "+" + Bt + "(?=" + [Nt, Ut, "$"].join("|") + ")", Kt + "+" + Ft + "(?=" + [Nt, Ut + Vt, "$"].join("|") + ")", Ut + "?" + Vt + "+" + Bt, Ut + "+" + Ft, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Tt, Gt].join("|"), "g"),
                        re = RegExp("[" + Ht + It + Et + Rt + "]"),
                        ie = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        ne = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        se = -1,
                        oe = {};
                    oe[q] = oe[D] = oe[z] = oe[L] = oe[M] = oe[k] = oe[$] = oe[U] = oe[H] = !0, oe[y] = oe[v] = oe[j] = oe[m] = oe[T] = oe[w] = oe[_] = oe[b] = oe[E] = oe[P] = oe[S] = oe[R] = oe[x] = oe[C] = oe[N] = !1;
                    var ae = {};
                    ae[y] = ae[v] = ae[j] = ae[T] = ae[m] = ae[w] = ae[q] = ae[D] = ae[z] = ae[L] = ae[M] = ae[E] = ae[P] = ae[S] = ae[R] = ae[x] = ae[C] = ae[A] = ae[k] = ae[$] = ae[U] = ae[H] = !0, ae[_] = ae[b] = ae[N] = !1;
                    var ce = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        ue = parseFloat,
                        he = parseInt,
                        le = "object" == typeof Wi && Wi && Wi.Object === Object && Wi,
                        pe = "object" == typeof self && self && self.Object === Object && self,
                        fe = le || pe || Function("return this")(),
                        de = e && !e.nodeType && e,
                        ge = de && t && !t.nodeType && t,
                        ye = ge && ge.exports === de,
                        ve = ye && le.process,
                        me = function() {
                            try {
                                return ge && ge.require && ge.require("util").types || ve && ve.binding && ve.binding("util")
                            } catch {}
                        }(),
                        we = me && me.isArrayBuffer,
                        _e = me && me.isDate,
                        be = me && me.isMap,
                        Ie = me && me.isRegExp,
                        Ee = me && me.isSet,
                        Pe = me && me.isTypedArray;

                    function Se(t, e, r) {
                        switch (r.length) {
                            case 0:
                                return t.call(e);
                            case 1:
                                return t.call(e, r[0]);
                            case 2:
                                return t.call(e, r[0], r[1]);
                            case 3:
                                return t.call(e, r[0], r[1], r[2])
                        }
                        return t.apply(e, r)
                    }

                    function Oe(t, e, r, i) {
                        for (var n = -1, s = null == t ? 0 : t.length; ++n < s;) {
                            var o = t[n];
                            e(i, o, r(o), t)
                        }
                        return i
                    }

                    function Re(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i && !1 !== e(t[r], r, t););
                        return t
                    }

                    function xe(t, e) {
                        for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
                        return t
                    }

                    function Ce(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                            if (!e(t[r], r, t)) return !1;
                        return !0
                    }

                    function Ae(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                            var o = t[r];
                            e(o, r, t) && (s[n++] = o)
                        }
                        return s
                    }

                    function Ne(t, e) {
                        return !!(null == t ? 0 : t.length) && Ue(t, e, 0) > -1
                    }

                    function je(t, e, r) {
                        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
                            if (r(e, t[i])) return !0;
                        return !1
                    }

                    function Te(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = Array(i); ++r < i;) n[r] = e(t[r], r, t);
                        return n
                    }

                    function qe(t, e) {
                        for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
                        return t
                    }

                    function De(t, e, r, i) {
                        var n = -1,
                            s = null == t ? 0 : t.length;
                        for (i && s && (r = t[++n]); ++n < s;) r = e(r, t[n], n, t);
                        return r
                    }

                    function ze(t, e, r, i) {
                        var n = null == t ? 0 : t.length;
                        for (i && n && (r = t[--n]); n--;) r = e(r, t[n], n, t);
                        return r
                    }

                    function Le(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                            if (e(t[r], r, t)) return !0;
                        return !1
                    }
                    var Me = Be("length");

                    function ke(t, e, r) {
                        var i;
                        return r(t, (function(t, r, n) {
                            if (e(t, r, n)) return i = r, !1
                        })), i
                    }

                    function $e(t, e, r, i) {
                        for (var n = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (e(t[s], s, t)) return s;
                        return -1
                    }

                    function Ue(t, e, r) {
                        return e === e ? function(t, e, r) {
                            for (var i = r - 1, n = t.length; ++i < n;)
                                if (t[i] === e) return i;
                            return -1
                        }(t, e, r) : $e(t, Ve, r)
                    }

                    function He(t, e, r, i) {
                        for (var n = r - 1, s = t.length; ++n < s;)
                            if (i(t[n], e)) return n;
                        return -1
                    }

                    function Ve(t) {
                        return t !== t
                    }

                    function Ke(t, e) {
                        var r = null == t ? 0 : t.length;
                        return r ? We(t, e) / r : f
                    }

                    function Be(t) {
                        return function(e) {
                            return null == e ? r : e[t]
                        }
                    }

                    function Fe(t) {
                        return function(e) {
                            return null == t ? r : t[e]
                        }
                    }

                    function Ze(t, e, r, i, n) {
                        return n(t, (function(t, n, s) {
                            r = i ? (i = !1, t) : e(r, t, n, s)
                        })), r
                    }

                    function We(t, e) {
                        for (var i, n = -1, s = t.length; ++n < s;) {
                            var o = e(t[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function Je(t, e) {
                        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
                        return i
                    }

                    function Ge(t) {
                        return t && t.slice(0, fr(t) + 1).replace(nt, "")
                    }

                    function Qe(t) {
                        return function(e) {
                            return t(e)
                        }
                    }

                    function Ye(t, e) {
                        return Te(e, (function(e) {
                            return t[e]
                        }))
                    }

                    function Xe(t, e) {
                        return t.has(e)
                    }

                    function tr(t, e) {
                        for (var r = -1, i = t.length; ++r < i && Ue(e, t[r], 0) > -1;);
                        return r
                    }

                    function er(t, e) {
                        for (var r = t.length; r-- && Ue(e, t[r], 0) > -1;);
                        return r
                    }

                    function rr(t, e) {
                        for (var r = t.length, i = 0; r--;) t[r] === e && ++i;
                        return i
                    }
                    var ir = Fe({
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\xc3": "A",
                            "\xc4": "A",
                            "\xc5": "A",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\xe3": "a",
                            "\xe4": "a",
                            "\xe5": "a",
                            "\xc7": "C",
                            "\xe7": "c",
                            "\xd0": "D",
                            "\xf0": "d",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\xcb": "E",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\xeb": "e",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\xcf": "I",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\xef": "i",
                            "\xd1": "N",
                            "\xf1": "n",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\xd5": "O",
                            "\xd6": "O",
                            "\xd8": "O",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\xf5": "o",
                            "\xf6": "o",
                            "\xf8": "o",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\xdc": "U",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\xfc": "u",
                            "\xdd": "Y",
                            "\xfd": "y",
                            "\xff": "y",
                            "\xc6": "Ae",
                            "\xe6": "ae",
                            "\xde": "Th",
                            "\xfe": "th",
                            "\xdf": "ss",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u0104": "A",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u0105": "a",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\u010e": "D",
                            "\u0110": "D",
                            "\u010f": "d",
                            "\u0111": "d",
                            "\u0112": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\u0118": "E",
                            "\u011a": "E",
                            "\u0113": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\u0119": "e",
                            "\u011b": "e",
                            "\u011c": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u0122": "G",
                            "\u011d": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u0123": "g",
                            "\u0124": "H",
                            "\u0126": "H",
                            "\u0125": "h",
                            "\u0127": "h",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u012e": "I",
                            "\u0130": "I",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\u012f": "i",
                            "\u0131": "i",
                            "\u0134": "J",
                            "\u0135": "j",
                            "\u0136": "K",
                            "\u0137": "k",
                            "\u0138": "k",
                            "\u0139": "L",
                            "\u013b": "L",
                            "\u013d": "L",
                            "\u013f": "L",
                            "\u0141": "L",
                            "\u013a": "l",
                            "\u013c": "l",
                            "\u013e": "l",
                            "\u0140": "l",
                            "\u0142": "l",
                            "\u0143": "N",
                            "\u0145": "N",
                            "\u0147": "N",
                            "\u014a": "N",
                            "\u0144": "n",
                            "\u0146": "n",
                            "\u0148": "n",
                            "\u014b": "n",
                            "\u014c": "O",
                            "\u014e": "O",
                            "\u0150": "O",
                            "\u014d": "o",
                            "\u014f": "o",
                            "\u0151": "o",
                            "\u0154": "R",
                            "\u0156": "R",
                            "\u0158": "R",
                            "\u0155": "r",
                            "\u0157": "r",
                            "\u0159": "r",
                            "\u015a": "S",
                            "\u015c": "S",
                            "\u015e": "S",
                            "\u0160": "S",
                            "\u015b": "s",
                            "\u015d": "s",
                            "\u015f": "s",
                            "\u0161": "s",
                            "\u0162": "T",
                            "\u0164": "T",
                            "\u0166": "T",
                            "\u0163": "t",
                            "\u0165": "t",
                            "\u0167": "t",
                            "\u0168": "U",
                            "\u016a": "U",
                            "\u016c": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u0172": "U",
                            "\u0169": "u",
                            "\u016b": "u",
                            "\u016d": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u0173": "u",
                            "\u0174": "W",
                            "\u0175": "w",
                            "\u0176": "Y",
                            "\u0177": "y",
                            "\u0178": "Y",
                            "\u0179": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u017a": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u0132": "IJ",
                            "\u0133": "ij",
                            "\u0152": "Oe",
                            "\u0153": "oe",
                            "\u0149": "'n",
                            "\u017f": "s"
                        }),
                        nr = Fe({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function sr(t) {
                        return "\\" + ce[t]
                    }

                    function or(t) {
                        return re.test(t)
                    }

                    function ar(t) {
                        var e = -1,
                            r = Array(t.size);
                        return t.forEach((function(t, i) {
                            r[++e] = [i, t]
                        })), r
                    }

                    function cr(t, e) {
                        return function(r) {
                            return t(e(r))
                        }
                    }

                    function ur(t, e) {
                        for (var r = -1, i = t.length, n = 0, o = []; ++r < i;) {
                            var a = t[r];
                            (a === e || a === s) && (t[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function hr(t) {
                        var e = -1,
                            r = Array(t.size);
                        return t.forEach((function(t) {
                            r[++e] = t
                        })), r
                    }

                    function lr(t) {
                        return or(t) ? function(t) {
                            for (var e = te.lastIndex = 0; te.test(t);) ++e;
                            return e
                        }(t) : Me(t)
                    }

                    function pr(t) {
                        return or(t) ? function(t) {
                            return t.match(te) || []
                        }(t) : function(t) {
                            return t.split("")
                        }(t)
                    }

                    function fr(t) {
                        for (var e = t.length; e-- && st.test(t.charAt(e)););
                        return e
                    }
                    var dr = Fe({
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    });
                    var gr = function t(e) {
                        var st = (e = null == e ? fe : gr.defaults(fe.Object(), e, gr.pick(fe, ne))).Array,
                            It = e.Date,
                            Et = e.Error,
                            Pt = e.Function,
                            St = e.Math,
                            Ot = e.Object,
                            Rt = e.RegExp,
                            xt = e.String,
                            Ct = e.TypeError,
                            At = st.prototype,
                            Nt = Pt.prototype,
                            jt = Ot.prototype,
                            Tt = e["__core-js_shared__"],
                            qt = Nt.toString,
                            Dt = jt.hasOwnProperty,
                            zt = 0,
                            Lt = function() {
                                var t = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
                                return t ? "Symbol(src)_1." + t : ""
                            }(),
                            Mt = jt.toString,
                            kt = qt.call(Ot),
                            $t = fe._,
                            Ut = Rt("^" + qt.call(Dt).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Ht = ye ? e.Buffer : r,
                            Vt = e.Symbol,
                            Kt = e.Uint8Array,
                            Bt = Ht ? Ht.allocUnsafe : r,
                            Ft = cr(Ot.getPrototypeOf, Ot),
                            Zt = Ot.create,
                            Wt = jt.propertyIsEnumerable,
                            Jt = At.splice,
                            Gt = Vt ? Vt.isConcatSpreadable : r,
                            Qt = Vt ? Vt.iterator : r,
                            te = Vt ? Vt.toStringTag : r,
                            re = function() {
                                try {
                                    var t = ls(Ot, "defineProperty");
                                    return t({}, "", {}), t
                                } catch {}
                            }(),
                            ce = e.clearTimeout !== fe.clearTimeout && e.clearTimeout,
                            le = It && It.now !== fe.Date.now && It.now,
                            pe = e.setTimeout !== fe.setTimeout && e.setTimeout,
                            de = St.ceil,
                            ge = St.floor,
                            ve = Ot.getOwnPropertySymbols,
                            me = Ht ? Ht.isBuffer : r,
                            Me = e.isFinite,
                            Fe = At.join,
                            yr = cr(Ot.keys, Ot),
                            vr = St.max,
                            mr = St.min,
                            wr = It.now,
                            _r = e.parseInt,
                            br = St.random,
                            Ir = At.reverse,
                            Er = ls(e, "DataView"),
                            Pr = ls(e, "Map"),
                            Sr = ls(e, "Promise"),
                            Or = ls(e, "Set"),
                            Rr = ls(e, "WeakMap"),
                            xr = ls(Ot, "create"),
                            Cr = Rr && new Rr,
                            Ar = {},
                            Nr = Ms(Er),
                            jr = Ms(Pr),
                            Tr = Ms(Sr),
                            qr = Ms(Or),
                            Dr = Ms(Rr),
                            zr = Vt ? Vt.prototype : r,
                            Lr = zr ? zr.valueOf : r,
                            Mr = zr ? zr.toString : r;

                        function kr(t) {
                            if (ra(t) && !Bo(t) && !(t instanceof Vr)) {
                                if (t instanceof Hr) return t;
                                if (Dt.call(t, "__wrapped__")) return ks(t)
                            }
                            return new Hr(t)
                        }
                        var $r = function() {
                            function t() {}
                            return function(e) {
                                if (!ea(e)) return {};
                                if (Zt) return Zt(e);
                                t.prototype = e;
                                var i = new t;
                                return t.prototype = r, i
                            }
                        }();

                        function Ur() {}

                        function Hr(t, e) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = r
                        }

                        function Vr(t) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = d, this.__views__ = []
                        }

                        function Kr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Br(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Fr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Zr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.__data__ = new Fr; ++e < r;) this.add(t[e])
                        }

                        function Wr(t) {
                            var e = this.__data__ = new Br(t);
                            this.size = e.size
                        }

                        function Jr(t, e) {
                            var r = Bo(t),
                                i = !r && Ko(t),
                                n = !r && !i && Jo(t),
                                s = !r && !i && !n && ha(t),
                                o = r || i || n || s,
                                a = o ? Je(t.length, xt) : [],
                                c = a.length;
                            for (var u in t)(e || Dt.call(t, u)) && (!o || !("length" == u || n && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ms(u, c))) && a.push(u);
                            return a
                        }

                        function Gr(t) {
                            var e = t.length;
                            return e ? t[Zi(0, e - 1)] : r
                        }

                        function Qr(t, e) {
                            return Ds(Cn(t), oi(e, 0, t.length))
                        }

                        function Yr(t) {
                            return Ds(Cn(t))
                        }

                        function Xr(t, e, i) {
                            (i !== r && !Uo(t[e], i) || i === r && !(e in t)) && ni(t, e, i)
                        }

                        function ti(t, e, i) {
                            var n = t[e];
                            (!Dt.call(t, e) || !Uo(n, i) || i === r && !(e in t)) && ni(t, e, i)
                        }

                        function ei(t, e) {
                            for (var r = t.length; r--;)
                                if (Uo(t[r][0], e)) return r;
                            return -1
                        }

                        function ri(t, e, r, i) {
                            return li(t, (function(t, n, s) {
                                e(i, t, r(t), s)
                            })), i
                        }

                        function ii(t, e) {
                            return t && An(e, ja(e), t)
                        }

                        function ni(t, e, r) {
                            "__proto__" == e && re ? re(t, e, {
                                configurable: !0,
                                enumerable: !0,
                                value: r,
                                writable: !0
                            }) : t[e] = r
                        }

                        function si(t, e) {
                            for (var i = -1, n = e.length, s = st(n), o = null == t; ++i < n;) s[i] = o ? r : Ra(t, e[i]);
                            return s
                        }

                        function oi(t, e, i) {
                            return t === t && (i !== r && (t = t <= i ? t : i), e !== r && (t = t >= e ? t : e)), t
                        }

                        function ai(t, e, i, n, s, o) {
                            var a, c = 1 & e,
                                u = 2 & e,
                                h = 4 & e;
                            if (i && (a = s ? i(t, n, s, o) : i(t)), a !== r) return a;
                            if (!ea(t)) return t;
                            var l = Bo(t);
                            if (l) {
                                if (a = function(t) {
                                        var e = t.length,
                                            r = new t.constructor(e);
                                        return e && "string" == typeof t[0] && Dt.call(t, "index") && (r.index = t.index, r.input = t.input), r
                                    }(t), !c) return Cn(t, a)
                            } else {
                                var p = ds(t),
                                    f = p == b || p == I;
                                if (Jo(t)) return En(t, c);
                                if (p == S || p == y || f && !s) {
                                    if (a = u || f ? {} : ys(t), !c) return u ? function(t, e) {
                                        return An(t, fs(t), e)
                                    }(t, function(t, e) {
                                        return t && An(e, Ta(e), t)
                                    }(a, t)) : function(t, e) {
                                        return An(t, ps(t), e)
                                    }(t, ii(a, t))
                                } else {
                                    if (!ae[p]) return s ? t : {};
                                    a = function(t, e, r) {
                                        var i = t.constructor;
                                        switch (e) {
                                            case j:
                                                return Pn(t);
                                            case m:
                                            case w:
                                                return new i(+t);
                                            case T:
                                                return function(t, e) {
                                                    var r = e ? Pn(t.buffer) : t.buffer;
                                                    return new t.constructor(r, t.byteOffset, t.byteLength)
                                                }(t, r);
                                            case q:
                                            case D:
                                            case z:
                                            case L:
                                            case M:
                                            case k:
                                            case $:
                                            case U:
                                            case H:
                                                return Sn(t, r);
                                            case E:
                                                return new i;
                                            case P:
                                            case C:
                                                return new i(t);
                                            case R:
                                                return function(t) {
                                                    var e = new t.constructor(t.source, ft.exec(t));
                                                    return e.lastIndex = t.lastIndex, e
                                                }(t);
                                            case x:
                                                return new i;
                                            case A:
                                                return function(t) {
                                                    return Lr ? Ot(Lr.call(t)) : {}
                                                }(t)
                                        }
                                    }(t, p, c)
                                }
                            }
                            o || (o = new Wr);
                            var d = o.get(t);
                            if (d) return d;
                            o.set(t, a), aa(t) ? t.forEach((function(r) {
                                a.add(ai(r, e, i, r, t, o))
                            })) : ia(t) && t.forEach((function(r, n) {
                                a.set(n, ai(r, e, i, n, t, o))
                            }));
                            var g = l ? r : (h ? u ? ns : is : u ? Ta : ja)(t);
                            return Re(g || t, (function(r, n) {
                                g && (r = t[n = r]), ti(a, n, ai(r, e, i, n, t, o))
                            })), a
                        }

                        function ci(t, e, i) {
                            var n = i.length;
                            if (null == t) return !n;
                            for (t = Ot(t); n--;) {
                                var s = i[n],
                                    o = e[s],
                                    a = t[s];
                                if (a === r && !(s in t) || !o(a)) return !1
                            }
                            return !0
                        }

                        function ui(t, e, n) {
                            if ("function" != typeof t) throw new Ct(i);
                            return Ns((function() {
                                t.apply(r, n)
                            }), e)
                        }

                        function hi(t, e, r, i) {
                            var n = -1,
                                s = Ne,
                                o = !0,
                                a = t.length,
                                c = [],
                                u = e.length;
                            if (!a) return c;
                            r && (e = Te(e, Qe(r))), i ? (s = je, o = !1) : e.length >= 200 && (s = Xe, o = !1, e = new Zr(e));
                            t: for (; ++n < a;) {
                                var h = t[n],
                                    l = null == r ? h : r(h);
                                if (h = i || 0 !== h ? h : 0, o && l === l) {
                                    for (var p = u; p--;)
                                        if (e[p] === l) continue t;
                                    c.push(h)
                                } else s(e, l, i) || c.push(h)
                            }
                            return c
                        }
                        kr.templateSettings = {
                            escape: G,
                            evaluate: Q,
                            interpolate: Y,
                            variable: "",
                            imports: {
                                _: kr
                            }
                        }, kr.prototype = Ur.prototype, kr.prototype.constructor = kr, Hr.prototype = $r(Ur.prototype), Hr.prototype.constructor = Hr, Vr.prototype = $r(Ur.prototype), Vr.prototype.constructor = Vr, Kr.prototype.clear = function() {
                            this.__data__ = xr ? xr(null) : {}, this.size = 0
                        }, Kr.prototype.delete = function(t) {
                            var e = this.has(t) && delete this.__data__[t];
                            return this.size -= e ? 1 : 0, e
                        }, Kr.prototype.get = function(t) {
                            var e = this.__data__;
                            if (xr) {
                                var i = e[t];
                                return i === n ? r : i
                            }
                            return Dt.call(e, t) ? e[t] : r
                        }, Kr.prototype.has = function(t) {
                            var e = this.__data__;
                            return xr ? e[t] !== r : Dt.call(e, t)
                        }, Kr.prototype.set = function(t, e) {
                            var i = this.__data__;
                            return this.size += this.has(t) ? 0 : 1, i[t] = xr && e === r ? n : e, this
                        }, Br.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, Br.prototype.delete = function(t) {
                            var e = this.__data__,
                                r = ei(e, t);
                            return !(r < 0) && (r == e.length - 1 ? e.pop() : Jt.call(e, r, 1), --this.size, !0)
                        }, Br.prototype.get = function(t) {
                            var e = this.__data__,
                                i = ei(e, t);
                            return i < 0 ? r : e[i][1]
                        }, Br.prototype.has = function(t) {
                            return ei(this.__data__, t) > -1
                        }, Br.prototype.set = function(t, e) {
                            var r = this.__data__,
                                i = ei(r, t);
                            return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
                        }, Fr.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new Kr,
                                map: new(Pr || Br),
                                string: new Kr
                            }
                        }, Fr.prototype.delete = function(t) {
                            var e = us(this, t).delete(t);
                            return this.size -= e ? 1 : 0, e
                        }, Fr.prototype.get = function(t) {
                            return us(this, t).get(t)
                        }, Fr.prototype.has = function(t) {
                            return us(this, t).has(t)
                        }, Fr.prototype.set = function(t, e) {
                            var r = us(this, t),
                                i = r.size;
                            return r.set(t, e), this.size += r.size == i ? 0 : 1, this
                        }, Zr.prototype.add = Zr.prototype.push = function(t) {
                            return this.__data__.set(t, n), this
                        }, Zr.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Wr.prototype.clear = function() {
                            this.__data__ = new Br, this.size = 0
                        }, Wr.prototype.delete = function(t) {
                            var e = this.__data__,
                                r = e.delete(t);
                            return this.size = e.size, r
                        }, Wr.prototype.get = function(t) {
                            return this.__data__.get(t)
                        }, Wr.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Wr.prototype.set = function(t, e) {
                            var r = this.__data__;
                            if (r instanceof Br) {
                                var i = r.__data__;
                                if (!Pr || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                                r = this.__data__ = new Fr(i)
                            }
                            return r.set(t, e), this.size = r.size, this
                        };
                        var li = Tn(wi),
                            pi = Tn(_i, !0);

                        function fi(t, e) {
                            var r = !0;
                            return li(t, (function(t, i, n) {
                                return r = !!e(t, i, n)
                            })), r
                        }

                        function di(t, e, i) {
                            for (var n = -1, s = t.length; ++n < s;) {
                                var o = t[n],
                                    a = e(o);
                                if (null != a && (c === r ? a === a && !ua(a) : i(a, c))) var c = a,
                                    u = o
                            }
                            return u
                        }

                        function gi(t, e) {
                            var r = [];
                            return li(t, (function(t, i, n) {
                                e(t, i, n) && r.push(t)
                            })), r
                        }

                        function yi(t, e, r, i, n) {
                            var s = -1,
                                o = t.length;
                            for (r || (r = vs), n || (n = []); ++s < o;) {
                                var a = t[s];
                                e > 0 && r(a) ? e > 1 ? yi(a, e - 1, r, i, n) : qe(n, a) : i || (n[n.length] = a)
                            }
                            return n
                        }
                        var vi = qn(),
                            mi = qn(!0);

                        function wi(t, e) {
                            return t && vi(t, e, ja)
                        }

                        function _i(t, e) {
                            return t && mi(t, e, ja)
                        }

                        function bi(t, e) {
                            return Ae(e, (function(e) {
                                return Yo(t[e])
                            }))
                        }

                        function Ii(t, e) {
                            for (var i = 0, n = (e = wn(e, t)).length; null != t && i < n;) t = t[Ls(e[i++])];
                            return i && i == n ? t : r
                        }

                        function Ei(t, e, r) {
                            var i = e(t);
                            return Bo(t) ? i : qe(i, r(t))
                        }

                        function Pi(t) {
                            return null == t ? t === r ? "[object Undefined]" : "[object Null]" : te && te in Ot(t) ? function(t) {
                                var e = Dt.call(t, te),
                                    i = t[te];
                                try {
                                    t[te] = r;
                                    var n = !0
                                } catch {}
                                var s = Mt.call(t);
                                return n && (e ? t[te] = i : delete t[te]), s
                            }(t) : function(t) {
                                return Mt.call(t)
                            }(t)
                        }

                        function Si(t, e) {
                            return t > e
                        }

                        function Oi(t, e) {
                            return null != t && Dt.call(t, e)
                        }

                        function Ri(t, e) {
                            return null != t && e in Ot(t)
                        }

                        function xi(t, e, i) {
                            for (var n = i ? je : Ne, s = t[0].length, o = t.length, a = o, c = st(o), u = 1 / 0, h = []; a--;) {
                                var l = t[a];
                                a && e && (l = Te(l, Qe(e))), u = mr(l.length, u), c[a] = !i && (e || s >= 120 && l.length >= 120) ? new Zr(a && l) : r
                            }
                            l = t[0];
                            var p = -1,
                                f = c[0];
                            t: for (; ++p < s && h.length < u;) {
                                var d = l[p],
                                    g = e ? e(d) : d;
                                if (d = i || 0 !== d ? d : 0, !(f ? Xe(f, g) : n(h, g, i))) {
                                    for (a = o; --a;) {
                                        var y = c[a];
                                        if (!(y ? Xe(y, g) : n(t[a], g, i))) continue t
                                    }
                                    f && f.push(g), h.push(d)
                                }
                            }
                            return h
                        }

                        function Ci(t, e, i) {
                            var n = null == (t = Rs(t, e = wn(e, t))) ? t : t[Ls(Gs(e))];
                            return null == n ? r : Se(n, t, i)
                        }

                        function Ai(t) {
                            return ra(t) && Pi(t) == y
                        }

                        function Ni(t, e, i, n, s) {
                            return t === e || (null == t || null == e || !ra(t) && !ra(e) ? t !== t && e !== e : function(t, e, i, n, s, o) {
                                var a = Bo(t),
                                    c = Bo(e),
                                    u = a ? v : ds(t),
                                    h = c ? v : ds(e),
                                    l = (u = u == y ? S : u) == S,
                                    p = (h = h == y ? S : h) == S,
                                    f = u == h;
                                if (f && Jo(t)) {
                                    if (!Jo(e)) return !1;
                                    a = !0, l = !1
                                }
                                if (f && !l) return o || (o = new Wr), a || ha(t) ? es(t, e, i, n, s, o) : function(t, e, r, i, n, s, o) {
                                    switch (r) {
                                        case T:
                                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                            t = t.buffer, e = e.buffer;
                                        case j:
                                            return !(t.byteLength != e.byteLength || !s(new Kt(t), new Kt(e)));
                                        case m:
                                        case w:
                                        case P:
                                            return Uo(+t, +e);
                                        case _:
                                            return t.name == e.name && t.message == e.message;
                                        case R:
                                        case C:
                                            return t == e + "";
                                        case E:
                                            var a = ar;
                                        case x:
                                            var c = 1 & i;
                                            if (a || (a = hr), t.size != e.size && !c) return !1;
                                            var u = o.get(t);
                                            if (u) return u == e;
                                            i |= 2, o.set(t, e);
                                            var h = es(a(t), a(e), i, n, s, o);
                                            return o.delete(t), h;
                                        case A:
                                            if (Lr) return Lr.call(t) == Lr.call(e)
                                    }
                                    return !1
                                }(t, e, u, i, n, s, o);
                                if (!(1 & i)) {
                                    var d = l && Dt.call(t, "__wrapped__"),
                                        g = p && Dt.call(e, "__wrapped__");
                                    if (d || g) {
                                        var b = d ? t.value() : t,
                                            I = g ? e.value() : e;
                                        return o || (o = new Wr), s(b, I, i, n, o)
                                    }
                                }
                                return !!f && (o || (o = new Wr), function(t, e, i, n, s, o) {
                                    var a = 1 & i,
                                        c = is(t),
                                        u = c.length,
                                        h = is(e).length;
                                    if (u != h && !a) return !1;
                                    for (var l = u; l--;) {
                                        var p = c[l];
                                        if (!(a ? p in e : Dt.call(e, p))) return !1
                                    }
                                    var f = o.get(t),
                                        d = o.get(e);
                                    if (f && d) return f == e && d == t;
                                    var g = !0;
                                    o.set(t, e), o.set(e, t);
                                    for (var y = a; ++l < u;) {
                                        var v = t[p = c[l]],
                                            m = e[p];
                                        if (n) var w = a ? n(m, v, p, e, t, o) : n(v, m, p, t, e, o);
                                        if (!(w === r ? v === m || s(v, m, i, n, o) : w)) {
                                            g = !1;
                                            break
                                        }
                                        y || (y = "constructor" == p)
                                    }
                                    if (g && !y) {
                                        var _ = t.constructor,
                                            b = e.constructor;
                                        _ != b && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b) && (g = !1)
                                    }
                                    return o.delete(t), o.delete(e), g
                                }(t, e, i, n, s, o))
                            }(t, e, i, n, Ni, s))
                        }

                        function ji(t, e, i, n) {
                            var s = i.length,
                                o = s,
                                a = !n;
                            if (null == t) return !o;
                            for (t = Ot(t); s--;) {
                                var c = i[s];
                                if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                            }
                            for (; ++s < o;) {
                                var u = (c = i[s])[0],
                                    h = t[u],
                                    l = c[1];
                                if (a && c[2]) {
                                    if (h === r && !(u in t)) return !1
                                } else {
                                    var p = new Wr;
                                    if (n) var f = n(h, l, u, t, e, p);
                                    if (!(f === r ? Ni(l, h, 3, n, p) : f)) return !1
                                }
                            }
                            return !0
                        }

                        function Ti(t) {
                            return !(!ea(t) || function(t) {
                                return !!Lt && Lt in t
                            }(t)) && (Yo(t) ? Ut : yt).test(Ms(t))
                        }

                        function qi(t) {
                            return "function" == typeof t ? t : null == t ? nc : "object" == typeof t ? Bo(t) ? $i(t[0], t[1]) : ki(t) : fc(t)
                        }

                        function Di(t) {
                            if (!Es(t)) return yr(t);
                            var e = [];
                            for (var r in Ot(t)) Dt.call(t, r) && "constructor" != r && e.push(r);
                            return e
                        }

                        function zi(t) {
                            if (!ea(t)) return function(t) {
                                var e = [];
                                if (null != t)
                                    for (var r in Ot(t)) e.push(r);
                                return e
                            }(t);
                            var e = Es(t),
                                r = [];
                            for (var i in t) "constructor" == i && (e || !Dt.call(t, i)) || r.push(i);
                            return r
                        }

                        function Li(t, e) {
                            return t < e
                        }

                        function Mi(t, e) {
                            var r = -1,
                                i = Zo(t) ? st(t.length) : [];
                            return li(t, (function(t, n, s) {
                                i[++r] = e(t, n, s)
                            })), i
                        }

                        function ki(t) {
                            var e = hs(t);
                            return 1 == e.length && e[0][2] ? Ss(e[0][0], e[0][1]) : function(r) {
                                return r === t || ji(r, t, e)
                            }
                        }

                        function $i(t, e) {
                            return _s(t) && Ps(e) ? Ss(Ls(t), e) : function(i) {
                                var n = Ra(i, t);
                                return n === r && n === e ? xa(i, t) : Ni(e, n, 3)
                            }
                        }

                        function Ui(t, e, i, n, s) {
                            t !== e && vi(e, (function(o, a) {
                                if (s || (s = new Wr), ea(o)) ! function(t, e, i, n, s, o, a) {
                                    var c = Cs(t, i),
                                        u = Cs(e, i),
                                        h = a.get(u);
                                    if (h) return void Xr(t, i, h);
                                    var l = o ? o(c, u, i + "", t, e, a) : r,
                                        p = l === r;
                                    if (p) {
                                        var f = Bo(u),
                                            d = !f && Jo(u),
                                            g = !f && !d && ha(u);
                                        l = u, f || d || g ? Bo(c) ? l = c : Wo(c) ? l = Cn(c) : d ? (p = !1, l = En(u, !0)) : g ? (p = !1, l = Sn(u, !0)) : l = [] : sa(u) || Ko(u) ? (l = c, Ko(c) ? l = ma(c) : (!ea(c) || Yo(c)) && (l = ys(u))) : p = !1
                                    }
                                    p && (a.set(u, l), s(l, u, n, o, a), a.delete(u)), Xr(t, i, l)
                                }(t, e, a, i, Ui, n, s);
                                else {
                                    var c = n ? n(Cs(t, a), o, a + "", t, e, s) : r;
                                    c === r && (c = o), Xr(t, a, c)
                                }
                            }), Ta)
                        }

                        function Hi(t, e) {
                            var i = t.length;
                            if (i) return ms(e += e < 0 ? i : 0, i) ? t[e] : r
                        }

                        function Vi(t, e, r) {
                            e = e.length ? Te(e, (function(t) {
                                return Bo(t) ? function(e) {
                                    return Ii(e, 1 === t.length ? t[0] : t)
                                } : t
                            })) : [nc];
                            var i = -1;
                            e = Te(e, Qe(cs()));
                            var n = Mi(t, (function(t, r, n) {
                                var s = Te(e, (function(e) {
                                    return e(t)
                                }));
                                return {
                                    criteria: s,
                                    index: ++i,
                                    value: t
                                }
                            }));
                            return function(t, e) {
                                var r = t.length;
                                for (t.sort(e); r--;) t[r] = t[r].value;
                                return t
                            }(n, (function(t, e) {
                                return function(t, e, r) {
                                    for (var i = -1, n = t.criteria, s = e.criteria, o = n.length, a = r.length; ++i < o;) {
                                        var c = On(n[i], s[i]);
                                        if (c) return i >= a ? c : c * ("desc" == r[i] ? -1 : 1)
                                    }
                                    return t.index - e.index
                                }(t, e, r)
                            }))
                        }

                        function Ki(t, e, r) {
                            for (var i = -1, n = e.length, s = {}; ++i < n;) {
                                var o = e[i],
                                    a = Ii(t, o);
                                r(a, o) && Yi(s, wn(o, t), a)
                            }
                            return s
                        }

                        function Bi(t, e, r, i) {
                            var n = i ? He : Ue,
                                s = -1,
                                o = e.length,
                                a = t;
                            for (t === e && (e = Cn(e)), r && (a = Te(t, Qe(r))); ++s < o;)
                                for (var c = 0, u = e[s], h = r ? r(u) : u;
                                    (c = n(a, h, c, i)) > -1;) a !== t && Jt.call(a, c, 1), Jt.call(t, c, 1);
                            return t
                        }

                        function Fi(t, e) {
                            for (var r = t ? e.length : 0, i = r - 1; r--;) {
                                var n = e[r];
                                if (r == i || n !== s) {
                                    var s = n;
                                    ms(n) ? Jt.call(t, n, 1) : ln(t, n)
                                }
                            }
                            return t
                        }

                        function Zi(t, e) {
                            return t + ge(br() * (e - t + 1))
                        }

                        function Wi(t, e) {
                            var r = "";
                            if (!t || e < 1 || e > p) return r;
                            do {
                                e % 2 && (r += t), (e = ge(e / 2)) && (t += t)
                            } while (e);
                            return r
                        }

                        function Ji(t, e) {
                            return js(Os(t, e, nc), t + "")
                        }

                        function Gi(t) {
                            return Gr(Ua(t))
                        }

                        function Qi(t, e) {
                            var r = Ua(t);
                            return Ds(r, oi(e, 0, r.length))
                        }

                        function Yi(t, e, i, n) {
                            if (!ea(t)) return t;
                            for (var s = -1, o = (e = wn(e, t)).length, a = o - 1, c = t; null != c && ++s < o;) {
                                var u = Ls(e[s]),
                                    h = i;
                                if ("__proto__" === u || "constructor" === u || "prototype" === u) return t;
                                if (s != a) {
                                    var l = c[u];
                                    (h = n ? n(l, u, c) : r) === r && (h = ea(l) ? l : ms(e[s + 1]) ? [] : {})
                                }
                                ti(c, u, h), c = c[u]
                            }
                            return t
                        }
                        var Xi = Cr ? function(t, e) {
                                return Cr.set(t, e), t
                            } : nc,
                            tn = re ? function(t, e) {
                                return re(t, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: ec(e),
                                    writable: !0
                                })
                            } : nc;

                        function en(t) {
                            return Ds(Ua(t))
                        }

                        function rn(t, e, r) {
                            var i = -1,
                                n = t.length;
                            e < 0 && (e = -e > n ? 0 : n + e), (r = r > n ? n : r) < 0 && (r += n), n = e > r ? 0 : r - e >>> 0, e >>>= 0;
                            for (var s = st(n); ++i < n;) s[i] = t[i + e];
                            return s
                        }

                        function nn(t, e) {
                            var r;
                            return li(t, (function(t, i, n) {
                                return !(r = e(t, i, n))
                            })), !!r
                        }

                        function sn(t, e, r) {
                            var i = 0,
                                n = null == t ? i : t.length;
                            if ("number" == typeof e && e === e && n <= 2147483647) {
                                for (; i < n;) {
                                    var s = i + n >>> 1,
                                        o = t[s];
                                    null !== o && !ua(o) && (r ? o <= e : o < e) ? i = s + 1 : n = s
                                }
                                return n
                            }
                            return on(t, e, nc, r)
                        }

                        function on(t, e, i, n) {
                            var s = 0,
                                o = null == t ? 0 : t.length;
                            if (0 === o) return 0;
                            for (var a = (e = i(e)) !== e, c = null === e, u = ua(e), h = e === r; s < o;) {
                                var l = ge((s + o) / 2),
                                    p = i(t[l]),
                                    f = p !== r,
                                    d = null === p,
                                    g = p === p,
                                    y = ua(p);
                                if (a) var v = n || g;
                                else v = h ? g && (n || f) : c ? g && f && (n || !d) : u ? g && f && !d && (n || !y) : !d && !y && (n ? p <= e : p < e);
                                v ? s = l + 1 : o = l
                            }
                            return mr(o, 4294967294)
                        }

                        function an(t, e) {
                            for (var r = -1, i = t.length, n = 0, s = []; ++r < i;) {
                                var o = t[r],
                                    a = e ? e(o) : o;
                                if (!r || !Uo(a, c)) {
                                    var c = a;
                                    s[n++] = 0 === o ? 0 : o
                                }
                            }
                            return s
                        }

                        function cn(t) {
                            return "number" == typeof t ? t : ua(t) ? f : +t
                        }

                        function un(t) {
                            if ("string" == typeof t) return t;
                            if (Bo(t)) return Te(t, un) + "";
                            if (ua(t)) return Mr ? Mr.call(t) : "";
                            var e = t + "";
                            return "0" == e && 1 / t == -l ? "-0" : e
                        }

                        function hn(t, e, r) {
                            var i = -1,
                                n = Ne,
                                s = t.length,
                                o = !0,
                                a = [],
                                c = a;
                            if (r) o = !1, n = je;
                            else if (s >= 200) {
                                var u = e ? null : Jn(t);
                                if (u) return hr(u);
                                o = !1, n = Xe, c = new Zr
                            } else c = e ? [] : a;
                            t: for (; ++i < s;) {
                                var h = t[i],
                                    l = e ? e(h) : h;
                                if (h = r || 0 !== h ? h : 0, o && l === l) {
                                    for (var p = c.length; p--;)
                                        if (c[p] === l) continue t;
                                    e && c.push(l), a.push(h)
                                } else n(c, l, r) || (c !== a && c.push(l), a.push(h))
                            }
                            return a
                        }

                        function ln(t, e) {
                            return null == (t = Rs(t, e = wn(e, t))) || delete t[Ls(Gs(e))]
                        }

                        function pn(t, e, r, i) {
                            return Yi(t, e, r(Ii(t, e)), i)
                        }

                        function fn(t, e, r, i) {
                            for (var n = t.length, s = i ? n : -1;
                                (i ? s-- : ++s < n) && e(t[s], s, t););
                            return r ? rn(t, i ? 0 : s, i ? s + 1 : n) : rn(t, i ? s + 1 : 0, i ? n : s)
                        }

                        function dn(t, e) {
                            var r = t;
                            return r instanceof Vr && (r = r.value()), De(e, (function(t, e) {
                                return e.func.apply(e.thisArg, qe([t], e.args))
                            }), r)
                        }

                        function gn(t, e, r) {
                            var i = t.length;
                            if (i < 2) return i ? hn(t[0]) : [];
                            for (var n = -1, s = st(i); ++n < i;)
                                for (var o = t[n], a = -1; ++a < i;) a != n && (s[n] = hi(s[n] || o, t[a], e, r));
                            return hn(yi(s, 1), e, r)
                        }

                        function yn(t, e, i) {
                            for (var n = -1, s = t.length, o = e.length, a = {}; ++n < s;) {
                                var c = n < o ? e[n] : r;
                                i(a, t[n], c)
                            }
                            return a
                        }

                        function vn(t) {
                            return Wo(t) ? t : []
                        }

                        function mn(t) {
                            return "function" == typeof t ? t : nc
                        }

                        function wn(t, e) {
                            return Bo(t) ? t : _s(t, e) ? [t] : zs(wa(t))
                        }
                        var _n = Ji;

                        function bn(t, e, i) {
                            var n = t.length;
                            return i = i === r ? n : i, !e && i >= n ? t : rn(t, e, i)
                        }
                        var In = ce || function(t) {
                            return fe.clearTimeout(t)
                        };

                        function En(t, e) {
                            if (e) return t.slice();
                            var r = t.length,
                                i = Bt ? Bt(r) : new t.constructor(r);
                            return t.copy(i), i
                        }

                        function Pn(t) {
                            var e = new t.constructor(t.byteLength);
                            return new Kt(e).set(new Kt(t)), e
                        }

                        function Sn(t, e) {
                            var r = e ? Pn(t.buffer) : t.buffer;
                            return new t.constructor(r, t.byteOffset, t.length)
                        }

                        function On(t, e) {
                            if (t !== e) {
                                var i = t !== r,
                                    n = null === t,
                                    s = t === t,
                                    o = ua(t),
                                    a = e !== r,
                                    c = null === e,
                                    u = e === e,
                                    h = ua(e);
                                if (!c && !h && !o && t > e || o && a && u && !c && !h || n && a && u || !i && u || !s) return 1;
                                if (!n && !o && !h && t < e || h && i && s && !n && !o || c && i && s || !a && s || !u) return -1
                            }
                            return 0
                        }

                        function Rn(t, e, r, i) {
                            for (var n = -1, s = t.length, o = r.length, a = -1, c = e.length, u = vr(s - o, 0), h = st(c + u), l = !i; ++a < c;) h[a] = e[a];
                            for (; ++n < o;)(l || n < s) && (h[r[n]] = t[n]);
                            for (; u--;) h[a++] = t[n++];
                            return h
                        }

                        function xn(t, e, r, i) {
                            for (var n = -1, s = t.length, o = -1, a = r.length, c = -1, u = e.length, h = vr(s - a, 0), l = st(h + u), p = !i; ++n < h;) l[n] = t[n];
                            for (var f = n; ++c < u;) l[f + c] = e[c];
                            for (; ++o < a;)(p || n < s) && (l[f + r[o]] = t[n++]);
                            return l
                        }

                        function Cn(t, e) {
                            var r = -1,
                                i = t.length;
                            for (e || (e = st(i)); ++r < i;) e[r] = t[r];
                            return e
                        }

                        function An(t, e, i, n) {
                            var s = !i;
                            i || (i = {});
                            for (var o = -1, a = e.length; ++o < a;) {
                                var c = e[o],
                                    u = n ? n(i[c], t[c], c, i, t) : r;
                                u === r && (u = t[c]), s ? ni(i, c, u) : ti(i, c, u)
                            }
                            return i
                        }

                        function Nn(t, e) {
                            return function(r, i) {
                                var n = Bo(r) ? Oe : ri,
                                    s = e ? e() : {};
                                return n(r, t, cs(i, 2), s)
                            }
                        }

                        function jn(t) {
                            return Ji((function(e, i) {
                                var n = -1,
                                    s = i.length,
                                    o = s > 1 ? i[s - 1] : r,
                                    a = s > 2 ? i[2] : r;
                                for (o = t.length > 3 && "function" == typeof o ? (s--, o) : r, a && ws(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), e = Ot(e); ++n < s;) {
                                    var c = i[n];
                                    c && t(e, c, n, o)
                                }
                                return e
                            }))
                        }

                        function Tn(t, e) {
                            return function(r, i) {
                                if (null == r) return r;
                                if (!Zo(r)) return t(r, i);
                                for (var n = r.length, s = e ? n : -1, o = Ot(r);
                                    (e ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                return r
                            }
                        }

                        function qn(t) {
                            return function(e, r, i) {
                                for (var n = -1, s = Ot(e), o = i(e), a = o.length; a--;) {
                                    var c = o[t ? a : ++n];
                                    if (!1 === r(s[c], c, s)) break
                                }
                                return e
                            }
                        }

                        function Dn(t) {
                            return function(e) {
                                var i = or(e = wa(e)) ? pr(e) : r,
                                    n = i ? i[0] : e.charAt(0),
                                    s = i ? bn(i, 1).join("") : e.slice(1);
                                return n[t]() + s
                            }
                        }

                        function zn(t) {
                            return function(e) {
                                return De(Ya(Ka(e).replace(Yt, "")), t, "")
                            }
                        }

                        function Ln(t) {
                            return function() {
                                var e = arguments;
                                switch (e.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e[0]);
                                    case 2:
                                        return new t(e[0], e[1]);
                                    case 3:
                                        return new t(e[0], e[1], e[2]);
                                    case 4:
                                        return new t(e[0], e[1], e[2], e[3]);
                                    case 5:
                                        return new t(e[0], e[1], e[2], e[3], e[4]);
                                    case 6:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                    case 7:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                                }
                                var r = $r(t.prototype),
                                    i = t.apply(r, e);
                                return ea(i) ? i : r
                            }
                        }

                        function Mn(t) {
                            return function(e, i, n) {
                                var s = Ot(e);
                                if (!Zo(e)) {
                                    var o = cs(i, 3);
                                    e = ja(e), i = function(t) {
                                        return o(s[t], t, s)
                                    }
                                }
                                var a = t(e, i, n);
                                return a > -1 ? s[o ? e[a] : a] : r
                            }
                        }

                        function kn(t) {
                            return rs((function(e) {
                                var n = e.length,
                                    s = n,
                                    o = Hr.prototype.thru;
                                for (t && e.reverse(); s--;) {
                                    var a = e[s];
                                    if ("function" != typeof a) throw new Ct(i);
                                    if (o && !c && "wrapper" == os(a)) var c = new Hr([], !0)
                                }
                                for (s = c ? s : n; ++s < n;) {
                                    var u = os(a = e[s]),
                                        h = "wrapper" == u ? ss(a) : r;
                                    c = h && bs(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[os(h[0])].apply(c, h[3]) : 1 == a.length && bs(a) ? c[u]() : c.thru(a)
                                }
                                return function() {
                                    var t = arguments,
                                        r = t[0];
                                    if (c && 1 == t.length && Bo(r)) return c.plant(r).value();
                                    for (var i = 0, s = n ? e[i].apply(this, t) : r; ++i < n;) s = e[i].call(this, s);
                                    return s
                                }
                            }))
                        }

                        function $n(t, e, i, n, s, o, a, c, h, l) {
                            var p = e & u,
                                f = 1 & e,
                                d = 2 & e,
                                g = 24 & e,
                                y = 512 & e,
                                v = d ? r : Ln(t);
                            return function r() {
                                for (var u = arguments.length, m = st(u), w = u; w--;) m[w] = arguments[w];
                                if (g) var _ = as(r),
                                    b = rr(m, _);
                                if (n && (m = Rn(m, n, s, g)), o && (m = xn(m, o, a, g)), u -= b, g && u < l) {
                                    var I = ur(m, _);
                                    return Zn(t, e, $n, r.placeholder, i, m, I, c, h, l - u)
                                }
                                var E = f ? i : this,
                                    P = d ? E[t] : t;
                                return u = m.length, c ? m = xs(m, c) : y && u > 1 && m.reverse(), p && h < u && (m.length = h), this && this !== fe && this instanceof r && (P = v || Ln(P)), P.apply(E, m)
                            }
                        }

                        function Un(t, e) {
                            return function(r, i) {
                                return function(t, e, r, i) {
                                    return wi(t, (function(t, n, s) {
                                        e(i, r(t), n, s)
                                    })), i
                                }(r, t, e(i), {})
                            }
                        }

                        function Hn(t, e) {
                            return function(i, n) {
                                var s;
                                if (i === r && n === r) return e;
                                if (i !== r && (s = i), n !== r) {
                                    if (s === r) return n;
                                    "string" == typeof i || "string" == typeof n ? (i = un(i), n = un(n)) : (i = cn(i), n = cn(n)), s = t(i, n)
                                }
                                return s
                            }
                        }

                        function Vn(t) {
                            return rs((function(e) {
                                return e = Te(e, Qe(cs())), Ji((function(r) {
                                    var i = this;
                                    return t(e, (function(t) {
                                        return Se(t, i, r)
                                    }))
                                }))
                            }))
                        }

                        function Kn(t, e) {
                            var i = (e = e === r ? " " : un(e)).length;
                            if (i < 2) return i ? Wi(e, t) : e;
                            var n = Wi(e, de(t / lr(e)));
                            return or(e) ? bn(pr(n), 0, t).join("") : n.slice(0, t)
                        }

                        function Bn(t) {
                            return function(e, i, n) {
                                return n && "number" != typeof n && ws(e, i, n) && (i = n = r), e = da(e), i === r ? (i = e, e = 0) : i = da(i),
                                    function(t, e, r, i) {
                                        for (var n = -1, s = vr(de((e - t) / (r || 1)), 0), o = st(s); s--;) o[i ? s : ++n] = t, t += r;
                                        return o
                                    }(e, i, n = n === r ? e < i ? 1 : -1 : da(n), t)
                            }
                        }

                        function Fn(t) {
                            return function(e, r) {
                                return "string" == typeof e && "string" == typeof r || (e = va(e), r = va(r)), t(e, r)
                            }
                        }

                        function Zn(t, e, i, n, s, o, u, h, l, p) {
                            var f = 8 & e;
                            e |= f ? a : c, 4 & (e &= ~(f ? c : a)) || (e &= -4);
                            var d = [t, e, s, f ? o : r, f ? u : r, f ? r : o, f ? r : u, h, l, p],
                                g = i.apply(r, d);
                            return bs(t) && As(g, d), g.placeholder = n, Ts(g, t, e)
                        }

                        function Wn(t) {
                            var e = St[t];
                            return function(t, r) {
                                if (t = va(t), (r = null == r ? 0 : mr(ga(r), 292)) && Me(t)) {
                                    var i = (wa(t) + "e").split("e");
                                    return +((i = (wa(e(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                }
                                return e(t)
                            }
                        }
                        var Jn = Or && 1 / hr(new Or([, -0]))[1] == l ? function(t) {
                            return new Or(t)
                        } : uc;

                        function Gn(t) {
                            return function(e) {
                                var r = ds(e);
                                return r == E ? ar(e) : r == x ? function(t) {
                                    var e = -1,
                                        r = Array(t.size);
                                    return t.forEach((function(t) {
                                        r[++e] = [t, t]
                                    })), r
                                }(e) : function(t, e) {
                                    return Te(e, (function(e) {
                                        return [e, t[e]]
                                    }))
                                }(e, t(e))
                            }
                        }

                        function Qn(t, e, n, l, p, f, d, g) {
                            var y = 2 & e;
                            if (!y && "function" != typeof t) throw new Ct(i);
                            var v = l ? l.length : 0;
                            if (v || (e &= -97, l = p = r), d = d === r ? d : vr(ga(d), 0), g = g === r ? g : ga(g), v -= p ? p.length : 0, e & c) {
                                var m = l,
                                    w = p;
                                l = p = r
                            }
                            var _ = y ? r : ss(t),
                                b = [t, e, n, l, p, m, w, f, d, g];
                            if (_ && function(t, e) {
                                    var r = t[1],
                                        i = e[1],
                                        n = r | i,
                                        o = n < 131,
                                        a = i == u && 8 == r || i == u && r == h && t[7].length <= e[8] || 384 == i && e[7].length <= e[8] && 8 == r;
                                    if (!o && !a) return t;
                                    1 & i && (t[2] = e[2], n |= 1 & r ? 0 : 4);
                                    var c = e[3];
                                    if (c) {
                                        var l = t[3];
                                        t[3] = l ? Rn(l, c, e[4]) : c, t[4] = l ? ur(t[3], s) : e[4]
                                    }(c = e[5]) && (l = t[5], t[5] = l ? xn(l, c, e[6]) : c, t[6] = l ? ur(t[5], s) : e[6]), (c = e[7]) && (t[7] = c), i & u && (t[8] = null == t[8] ? e[8] : mr(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = n
                                }(b, _), t = b[0], e = b[1], n = b[2], l = b[3], p = b[4], !(g = b[9] = b[9] === r ? y ? 0 : t.length : vr(b[9] - v, 0)) && 24 & e && (e &= -25), e && 1 != e) I = 8 == e || e == o ? function(t, e, i) {
                                var n = Ln(t);
                                return function s() {
                                    for (var o = arguments.length, a = st(o), c = o, u = as(s); c--;) a[c] = arguments[c];
                                    var h = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : ur(a, u);
                                    return (o -= h.length) < i ? Zn(t, e, $n, s.placeholder, r, a, h, r, r, i - o) : Se(this && this !== fe && this instanceof s ? n : t, this, a)
                                }
                            }(t, e, g) : e != a && 33 != e || p.length ? $n.apply(r, b) : function(t, e, r, i) {
                                var n = 1 & e,
                                    s = Ln(t);
                                return function e() {
                                    for (var o = -1, a = arguments.length, c = -1, u = i.length, h = st(u + a), l = this && this !== fe && this instanceof e ? s : t; ++c < u;) h[c] = i[c];
                                    for (; a--;) h[c++] = arguments[++o];
                                    return Se(l, n ? r : this, h)
                                }
                            }(t, e, n, l);
                            else var I = function(t, e, r) {
                                var i = 1 & e,
                                    n = Ln(t);
                                return function e() {
                                    return (this && this !== fe && this instanceof e ? n : t).apply(i ? r : this, arguments)
                                }
                            }(t, e, n);
                            return Ts((_ ? Xi : As)(I, b), t, e)
                        }

                        function Yn(t, e, i, n) {
                            return t === r || Uo(t, jt[i]) && !Dt.call(n, i) ? e : t
                        }

                        function Xn(t, e, i, n, s, o) {
                            return ea(t) && ea(e) && (o.set(e, t), Ui(t, e, r, Xn, o), o.delete(e)), t
                        }

                        function ts(t) {
                            return sa(t) ? r : t
                        }

                        function es(t, e, i, n, s, o) {
                            var a = 1 & i,
                                c = t.length,
                                u = e.length;
                            if (c != u && !(a && u > c)) return !1;
                            var h = o.get(t),
                                l = o.get(e);
                            if (h && l) return h == e && l == t;
                            var p = -1,
                                f = !0,
                                d = 2 & i ? new Zr : r;
                            for (o.set(t, e), o.set(e, t); ++p < c;) {
                                var g = t[p],
                                    y = e[p];
                                if (n) var v = a ? n(y, g, p, e, t, o) : n(g, y, p, t, e, o);
                                if (v !== r) {
                                    if (v) continue;
                                    f = !1;
                                    break
                                }
                                if (d) {
                                    if (!Le(e, (function(t, e) {
                                            if (!Xe(d, e) && (g === t || s(g, t, i, n, o))) return d.push(e)
                                        }))) {
                                        f = !1;
                                        break
                                    }
                                } else if (g !== y && !s(g, y, i, n, o)) {
                                    f = !1;
                                    break
                                }
                            }
                            return o.delete(t), o.delete(e), f
                        }

                        function rs(t) {
                            return js(Os(t, r, Bs), t + "")
                        }

                        function is(t) {
                            return Ei(t, ja, ps)
                        }

                        function ns(t) {
                            return Ei(t, Ta, fs)
                        }
                        var ss = Cr ? function(t) {
                            return Cr.get(t)
                        } : uc;

                        function os(t) {
                            for (var e = t.name + "", r = Ar[e], i = Dt.call(Ar, e) ? r.length : 0; i--;) {
                                var n = r[i],
                                    s = n.func;
                                if (null == s || s == t) return n.name
                            }
                            return e
                        }

                        function as(t) {
                            return (Dt.call(kr, "placeholder") ? kr : t).placeholder
                        }

                        function cs() {
                            var t = kr.iteratee || sc;
                            return t = t === sc ? qi : t, arguments.length ? t(arguments[0], arguments[1]) : t
                        }

                        function us(t, e) {
                            var r = t.__data__;
                            return function(t) {
                                var e = typeof t;
                                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                            }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                        }

                        function hs(t) {
                            for (var e = ja(t), r = e.length; r--;) {
                                var i = e[r],
                                    n = t[i];
                                e[r] = [i, n, Ps(n)]
                            }
                            return e
                        }

                        function ls(t, e) {
                            var i = function(t, e) {
                                return null == t ? r : t[e]
                            }(t, e);
                            return Ti(i) ? i : r
                        }
                        var ps = ve ? function(t) {
                                return null == t ? [] : (t = Ot(t), Ae(ve(t), (function(e) {
                                    return Wt.call(t, e)
                                })))
                            } : yc,
                            fs = ve ? function(t) {
                                for (var e = []; t;) qe(e, ps(t)), t = Ft(t);
                                return e
                            } : yc,
                            ds = Pi;

                        function gs(t, e, r) {
                            for (var i = -1, n = (e = wn(e, t)).length, s = !1; ++i < n;) {
                                var o = Ls(e[i]);
                                if (!(s = null != t && r(t, o))) break;
                                t = t[o]
                            }
                            return s || ++i != n ? s : !!(n = null == t ? 0 : t.length) && ta(n) && ms(o, n) && (Bo(t) || Ko(t))
                        }

                        function ys(t) {
                            return "function" != typeof t.constructor || Es(t) ? {} : $r(Ft(t))
                        }

                        function vs(t) {
                            return Bo(t) || Ko(t) || !!(Gt && t && t[Gt])
                        }

                        function ms(t, e) {
                            var r = typeof t;
                            return !!(e = e ? ? p) && ("number" == r || "symbol" != r && mt.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }

                        function ws(t, e, r) {
                            if (!ea(r)) return !1;
                            var i = typeof e;
                            return !!("number" == i ? Zo(r) && ms(e, r.length) : "string" == i && e in r) && Uo(r[e], t)
                        }

                        function _s(t, e) {
                            if (Bo(t)) return !1;
                            var r = typeof t;
                            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !ua(t)) || (tt.test(t) || !X.test(t) || null != e && t in Ot(e))
                        }

                        function bs(t) {
                            var e = os(t),
                                r = kr[e];
                            if ("function" != typeof r || !(e in Vr.prototype)) return !1;
                            if (t === r) return !0;
                            var i = ss(r);
                            return !!i && t === i[0]
                        }(Er && ds(new Er(new ArrayBuffer(1))) != T || Pr && ds(new Pr) != E || Sr && ds(Sr.resolve()) != O || Or && ds(new Or) != x || Rr && ds(new Rr) != N) && (ds = function(t) {
                            var e = Pi(t),
                                i = e == S ? t.constructor : r,
                                n = i ? Ms(i) : "";
                            if (n) switch (n) {
                                case Nr:
                                    return T;
                                case jr:
                                    return E;
                                case Tr:
                                    return O;
                                case qr:
                                    return x;
                                case Dr:
                                    return N
                            }
                            return e
                        });
                        var Is = Tt ? Yo : vc;

                        function Es(t) {
                            var e = t && t.constructor;
                            return t === ("function" == typeof e && e.prototype || jt)
                        }

                        function Ps(t) {
                            return t === t && !ea(t)
                        }

                        function Ss(t, e) {
                            return function(i) {
                                return null != i && (i[t] === e && (e !== r || t in Ot(i)))
                            }
                        }

                        function Os(t, e, i) {
                            return e = vr(e === r ? t.length - 1 : e, 0),
                                function() {
                                    for (var r = arguments, n = -1, s = vr(r.length - e, 0), o = st(s); ++n < s;) o[n] = r[e + n];
                                    n = -1;
                                    for (var a = st(e + 1); ++n < e;) a[n] = r[n];
                                    return a[e] = i(o), Se(t, this, a)
                                }
                        }

                        function Rs(t, e) {
                            return e.length < 2 ? t : Ii(t, rn(e, 0, -1))
                        }

                        function xs(t, e) {
                            for (var i = t.length, n = mr(e.length, i), s = Cn(t); n--;) {
                                var o = e[n];
                                t[n] = ms(o, i) ? s[o] : r
                            }
                            return t
                        }

                        function Cs(t, e) {
                            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                        }
                        var As = qs(Xi),
                            Ns = pe || function(t, e) {
                                return fe.setTimeout(t, e)
                            },
                            js = qs(tn);

                        function Ts(t, e, r) {
                            var i = e + "";
                            return js(t, function(t, e) {
                                var r = e.length;
                                if (!r) return t;
                                var i = r - 1;
                                return e[i] = (r > 1 ? "& " : "") + e[i], e = e.join(r > 2 ? ", " : " "), t.replace(ot, "{\n/* [wrapped with " + e + "] */\n")
                            }(i, function(t, e) {
                                return Re(g, (function(r) {
                                    var i = "_." + r[0];
                                    e & r[1] && !Ne(t, i) && t.push(i)
                                })), t.sort()
                            }(function(t) {
                                var e = t.match(at);
                                return e ? e[1].split(ct) : []
                            }(i), r)))
                        }

                        function qs(t) {
                            var e = 0,
                                i = 0;
                            return function() {
                                var n = wr(),
                                    s = 16 - (n - i);
                                if (i = n, s > 0) {
                                    if (++e >= 800) return arguments[0]
                                } else e = 0;
                                return t.apply(r, arguments)
                            }
                        }

                        function Ds(t, e) {
                            var i = -1,
                                n = t.length,
                                s = n - 1;
                            for (e = e === r ? n : e; ++i < e;) {
                                var o = Zi(i, s),
                                    a = t[o];
                                t[o] = t[i], t[i] = a
                            }
                            return t.length = e, t
                        }
                        var zs = function(t) {
                            var e = Do(t, (function(t) {
                                    return 500 === r.size && r.clear(), t
                                })),
                                r = e.cache;
                            return e
                        }((function(t) {
                            var e = [];
                            return 46 === t.charCodeAt(0) && e.push(""), t.replace(et, (function(t, r, i, n) {
                                e.push(i ? n.replace(lt, "$1") : r || t)
                            })), e
                        }));

                        function Ls(t) {
                            if ("string" == typeof t || ua(t)) return t;
                            var e = t + "";
                            return "0" == e && 1 / t == -l ? "-0" : e
                        }

                        function Ms(t) {
                            if (null != t) {
                                try {
                                    return qt.call(t)
                                } catch {}
                                try {
                                    return t + ""
                                } catch {}
                            }
                            return ""
                        }

                        function ks(t) {
                            if (t instanceof Vr) return t.clone();
                            var e = new Hr(t.__wrapped__, t.__chain__);
                            return e.__actions__ = Cn(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                        }
                        var $s = Ji((function(t, e) {
                                return Wo(t) ? hi(t, yi(e, 1, Wo, !0)) : []
                            })),
                            Us = Ji((function(t, e) {
                                var i = Gs(e);
                                return Wo(i) && (i = r), Wo(t) ? hi(t, yi(e, 1, Wo, !0), cs(i, 2)) : []
                            })),
                            Hs = Ji((function(t, e) {
                                var i = Gs(e);
                                return Wo(i) && (i = r), Wo(t) ? hi(t, yi(e, 1, Wo, !0), r, i) : []
                            }));

                        function Vs(t, e, r) {
                            var i = null == t ? 0 : t.length;
                            if (!i) return -1;
                            var n = null == r ? 0 : ga(r);
                            return n < 0 && (n = vr(i + n, 0)), $e(t, cs(e, 3), n)
                        }

                        function Ks(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            if (!n) return -1;
                            var s = n - 1;
                            return i !== r && (s = ga(i), s = i < 0 ? vr(n + s, 0) : mr(s, n - 1)), $e(t, cs(e, 3), s, !0)
                        }

                        function Bs(t) {
                            return (null == t ? 0 : t.length) ? yi(t, 1) : []
                        }

                        function Fs(t) {
                            return t && t.length ? t[0] : r
                        }
                        var Zs = Ji((function(t) {
                                var e = Te(t, vn);
                                return e.length && e[0] === t[0] ? xi(e) : []
                            })),
                            Ws = Ji((function(t) {
                                var e = Gs(t),
                                    i = Te(t, vn);
                                return e === Gs(i) ? e = r : i.pop(), i.length && i[0] === t[0] ? xi(i, cs(e, 2)) : []
                            })),
                            Js = Ji((function(t) {
                                var e = Gs(t),
                                    i = Te(t, vn);
                                return (e = "function" == typeof e ? e : r) && i.pop(), i.length && i[0] === t[0] ? xi(i, r, e) : []
                            }));

                        function Gs(t) {
                            var e = null == t ? 0 : t.length;
                            return e ? t[e - 1] : r
                        }
                        var Qs = Ji(Ys);

                        function Ys(t, e) {
                            return t && t.length && e && e.length ? Bi(t, e) : t
                        }
                        var Xs = rs((function(t, e) {
                            var r = null == t ? 0 : t.length,
                                i = si(t, e);
                            return Fi(t, Te(e, (function(t) {
                                return ms(t, r) ? +t : t
                            })).sort(On)), i
                        }));

                        function to(t) {
                            return null == t ? t : Ir.call(t)
                        }
                        var eo = Ji((function(t) {
                                return hn(yi(t, 1, Wo, !0))
                            })),
                            ro = Ji((function(t) {
                                var e = Gs(t);
                                return Wo(e) && (e = r), hn(yi(t, 1, Wo, !0), cs(e, 2))
                            })),
                            io = Ji((function(t) {
                                var e = Gs(t);
                                return e = "function" == typeof e ? e : r, hn(yi(t, 1, Wo, !0), r, e)
                            }));

                        function no(t) {
                            if (!t || !t.length) return [];
                            var e = 0;
                            return t = Ae(t, (function(t) {
                                if (Wo(t)) return e = vr(t.length, e), !0
                            })), Je(e, (function(e) {
                                return Te(t, Be(e))
                            }))
                        }

                        function so(t, e) {
                            if (!t || !t.length) return [];
                            var i = no(t);
                            return null == e ? i : Te(i, (function(t) {
                                return Se(e, r, t)
                            }))
                        }
                        var oo = Ji((function(t, e) {
                                return Wo(t) ? hi(t, e) : []
                            })),
                            ao = Ji((function(t) {
                                return gn(Ae(t, Wo))
                            })),
                            co = Ji((function(t) {
                                var e = Gs(t);
                                return Wo(e) && (e = r), gn(Ae(t, Wo), cs(e, 2))
                            })),
                            uo = Ji((function(t) {
                                var e = Gs(t);
                                return e = "function" == typeof e ? e : r, gn(Ae(t, Wo), r, e)
                            })),
                            ho = Ji(no);
                        var lo = Ji((function(t) {
                            var e = t.length,
                                i = e > 1 ? t[e - 1] : r;
                            return i = "function" == typeof i ? (t.pop(), i) : r, so(t, i)
                        }));

                        function po(t) {
                            var e = kr(t);
                            return e.__chain__ = !0, e
                        }

                        function fo(t, e) {
                            return e(t)
                        }
                        var go = rs((function(t) {
                            var e = t.length,
                                i = e ? t[0] : 0,
                                n = this.__wrapped__,
                                s = function(e) {
                                    return si(e, t)
                                };
                            return !(e > 1 || this.__actions__.length) && n instanceof Vr && ms(i) ? ((n = n.slice(i, +i + (e ? 1 : 0))).__actions__.push({
                                func: fo,
                                args: [s],
                                thisArg: r
                            }), new Hr(n, this.__chain__).thru((function(t) {
                                return e && !t.length && t.push(r), t
                            }))) : this.thru(s)
                        }));
                        var yo = Nn((function(t, e, r) {
                            Dt.call(t, r) ? ++t[r] : ni(t, r, 1)
                        }));
                        var vo = Mn(Vs),
                            mo = Mn(Ks);

                        function wo(t, e) {
                            return (Bo(t) ? Re : li)(t, cs(e, 3))
                        }

                        function _o(t, e) {
                            return (Bo(t) ? xe : pi)(t, cs(e, 3))
                        }
                        var bo = Nn((function(t, e, r) {
                            Dt.call(t, r) ? t[r].push(e) : ni(t, r, [e])
                        }));
                        var Io = Ji((function(t, e, r) {
                                var i = -1,
                                    n = "function" == typeof e,
                                    s = Zo(t) ? st(t.length) : [];
                                return li(t, (function(t) {
                                    s[++i] = n ? Se(e, t, r) : Ci(t, e, r)
                                })), s
                            })),
                            Eo = Nn((function(t, e, r) {
                                ni(t, r, e)
                            }));

                        function Po(t, e) {
                            return (Bo(t) ? Te : Mi)(t, cs(e, 3))
                        }
                        var So = Nn((function(t, e, r) {
                            t[r ? 0 : 1].push(e)
                        }), (function() {
                            return [
                                [],
                                []
                            ]
                        }));
                        var Oo = Ji((function(t, e) {
                                if (null == t) return [];
                                var r = e.length;
                                return r > 1 && ws(t, e[0], e[1]) ? e = [] : r > 2 && ws(e[0], e[1], e[2]) && (e = [e[0]]), Vi(t, yi(e, 1), [])
                            })),
                            Ro = le || function() {
                                return fe.Date.now()
                            };

                        function xo(t, e, i) {
                            return e = i ? r : e, e = t && null == e ? t.length : e, Qn(t, u, r, r, r, r, e)
                        }

                        function Co(t, e) {
                            var n;
                            if ("function" != typeof e) throw new Ct(i);
                            return t = ga(t),
                                function() {
                                    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = r), n
                                }
                        }
                        var Ao = Ji((function(t, e, r) {
                                var i = 1;
                                if (r.length) {
                                    var n = ur(r, as(Ao));
                                    i |= a
                                }
                                return Qn(t, i, e, r, n)
                            })),
                            No = Ji((function(t, e, r) {
                                var i = 3;
                                if (r.length) {
                                    var n = ur(r, as(No));
                                    i |= a
                                }
                                return Qn(e, i, t, r, n)
                            }));

                        function jo(t, e, n) {
                            var s, o, a, c, u, h, l = 0,
                                p = !1,
                                f = !1,
                                d = !0;
                            if ("function" != typeof t) throw new Ct(i);

                            function g(e) {
                                var i = s,
                                    n = o;
                                return s = o = r, l = e, c = t.apply(n, i)
                            }

                            function y(t) {
                                return l = t, u = Ns(m, e), p ? g(t) : c
                            }

                            function v(t) {
                                var i = t - h;
                                return h === r || i >= e || i < 0 || f && t - l >= a
                            }

                            function m() {
                                var t = Ro();
                                if (v(t)) return w(t);
                                u = Ns(m, function(t) {
                                    var r = e - (t - h);
                                    return f ? mr(r, a - (t - l)) : r
                                }(t))
                            }

                            function w(t) {
                                return u = r, d && s ? g(t) : (s = o = r, c)
                            }

                            function _() {
                                var t = Ro(),
                                    i = v(t);
                                if (s = arguments, o = this, h = t, i) {
                                    if (u === r) return y(h);
                                    if (f) return In(u), u = Ns(m, e), g(h)
                                }
                                return u === r && (u = Ns(m, e)), c
                            }
                            return e = va(e) || 0, ea(n) && (p = !!n.leading, a = (f = "maxWait" in n) ? vr(va(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d), _.cancel = function() {
                                u !== r && In(u), l = 0, s = h = o = u = r
                            }, _.flush = function() {
                                return u === r ? c : w(Ro())
                            }, _
                        }
                        var To = Ji((function(t, e) {
                                return ui(t, 1, e)
                            })),
                            qo = Ji((function(t, e, r) {
                                return ui(t, va(e) || 0, r)
                            }));

                        function Do(t, e) {
                            if ("function" != typeof t || null != e && "function" != typeof e) throw new Ct(i);
                            var r = function() {
                                var i = arguments,
                                    n = e ? e.apply(this, i) : i[0],
                                    s = r.cache;
                                if (s.has(n)) return s.get(n);
                                var o = t.apply(this, i);
                                return r.cache = s.set(n, o) || s, o
                            };
                            return r.cache = new(Do.Cache || Fr), r
                        }

                        function zo(t) {
                            if ("function" != typeof t) throw new Ct(i);
                            return function() {
                                var e = arguments;
                                switch (e.length) {
                                    case 0:
                                        return !t.call(this);
                                    case 1:
                                        return !t.call(this, e[0]);
                                    case 2:
                                        return !t.call(this, e[0], e[1]);
                                    case 3:
                                        return !t.call(this, e[0], e[1], e[2])
                                }
                                return !t.apply(this, e)
                            }
                        }
                        Do.Cache = Fr;
                        var Lo = _n((function(t, e) {
                                var r = (e = 1 == e.length && Bo(e[0]) ? Te(e[0], Qe(cs())) : Te(yi(e, 1), Qe(cs()))).length;
                                return Ji((function(i) {
                                    for (var n = -1, s = mr(i.length, r); ++n < s;) i[n] = e[n].call(this, i[n]);
                                    return Se(t, this, i)
                                }))
                            })),
                            Mo = Ji((function(t, e) {
                                var i = ur(e, as(Mo));
                                return Qn(t, a, r, e, i)
                            })),
                            ko = Ji((function(t, e) {
                                var i = ur(e, as(ko));
                                return Qn(t, c, r, e, i)
                            })),
                            $o = rs((function(t, e) {
                                return Qn(t, h, r, r, r, e)
                            }));

                        function Uo(t, e) {
                            return t === e || t !== t && e !== e
                        }
                        var Ho = Fn(Si),
                            Vo = Fn((function(t, e) {
                                return t >= e
                            })),
                            Ko = Ai(function() {
                                return arguments
                            }()) ? Ai : function(t) {
                                return ra(t) && Dt.call(t, "callee") && !Wt.call(t, "callee")
                            },
                            Bo = st.isArray,
                            Fo = we ? Qe(we) : function(t) {
                                return ra(t) && Pi(t) == j
                            };

                        function Zo(t) {
                            return null != t && ta(t.length) && !Yo(t)
                        }

                        function Wo(t) {
                            return ra(t) && Zo(t)
                        }
                        var Jo = me || vc,
                            Go = _e ? Qe(_e) : function(t) {
                                return ra(t) && Pi(t) == w
                            };

                        function Qo(t) {
                            if (!ra(t)) return !1;
                            var e = Pi(t);
                            return e == _ || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !sa(t)
                        }

                        function Yo(t) {
                            if (!ea(t)) return !1;
                            var e = Pi(t);
                            return e == b || e == I || "[object AsyncFunction]" == e || "[object Proxy]" == e
                        }

                        function Xo(t) {
                            return "number" == typeof t && t == ga(t)
                        }

                        function ta(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= p
                        }

                        function ea(t) {
                            var e = typeof t;
                            return null != t && ("object" == e || "function" == e)
                        }

                        function ra(t) {
                            return null != t && "object" == typeof t
                        }
                        var ia = be ? Qe(be) : function(t) {
                            return ra(t) && ds(t) == E
                        };

                        function na(t) {
                            return "number" == typeof t || ra(t) && Pi(t) == P
                        }

                        function sa(t) {
                            if (!ra(t) || Pi(t) != S) return !1;
                            var e = Ft(t);
                            if (null === e) return !0;
                            var r = Dt.call(e, "constructor") && e.constructor;
                            return "function" == typeof r && r instanceof r && qt.call(r) == kt
                        }
                        var oa = Ie ? Qe(Ie) : function(t) {
                            return ra(t) && Pi(t) == R
                        };
                        var aa = Ee ? Qe(Ee) : function(t) {
                            return ra(t) && ds(t) == x
                        };

                        function ca(t) {
                            return "string" == typeof t || !Bo(t) && ra(t) && Pi(t) == C
                        }

                        function ua(t) {
                            return "symbol" == typeof t || ra(t) && Pi(t) == A
                        }
                        var ha = Pe ? Qe(Pe) : function(t) {
                            return ra(t) && ta(t.length) && !!oe[Pi(t)]
                        };
                        var la = Fn(Li),
                            pa = Fn((function(t, e) {
                                return t <= e
                            }));

                        function fa(t) {
                            if (!t) return [];
                            if (Zo(t)) return ca(t) ? pr(t) : Cn(t);
                            if (Qt && t[Qt]) return function(t) {
                                for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                                return r
                            }(t[Qt]());
                            var e = ds(t);
                            return (e == E ? ar : e == x ? hr : Ua)(t)
                        }

                        function da(t) {
                            return t ? (t = va(t)) === l || t === -l ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t === t ? t : 0 : 0 === t ? t : 0
                        }

                        function ga(t) {
                            var e = da(t),
                                r = e % 1;
                            return e === e ? r ? e - r : e : 0
                        }

                        function ya(t) {
                            return t ? oi(ga(t), 0, d) : 0
                        }

                        function va(t) {
                            if ("number" == typeof t) return t;
                            if (ua(t)) return f;
                            if (ea(t)) {
                                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                                t = ea(e) ? e + "" : e
                            }
                            if ("string" != typeof t) return 0 === t ? t : +t;
                            t = Ge(t);
                            var r = gt.test(t);
                            return r || vt.test(t) ? he(t.slice(2), r ? 2 : 8) : dt.test(t) ? f : +t
                        }

                        function ma(t) {
                            return An(t, Ta(t))
                        }

                        function wa(t) {
                            return null == t ? "" : un(t)
                        }
                        var _a = jn((function(t, e) {
                                if (Es(e) || Zo(e)) An(e, ja(e), t);
                                else
                                    for (var r in e) Dt.call(e, r) && ti(t, r, e[r])
                            })),
                            ba = jn((function(t, e) {
                                An(e, Ta(e), t)
                            })),
                            Ia = jn((function(t, e, r, i) {
                                An(e, Ta(e), t, i)
                            })),
                            Ea = jn((function(t, e, r, i) {
                                An(e, ja(e), t, i)
                            })),
                            Pa = rs(si);
                        var Sa = Ji((function(t, e) {
                                t = Ot(t);
                                var i = -1,
                                    n = e.length,
                                    s = n > 2 ? e[2] : r;
                                for (s && ws(e[0], e[1], s) && (n = 1); ++i < n;)
                                    for (var o = e[i], a = Ta(o), c = -1, u = a.length; ++c < u;) {
                                        var h = a[c],
                                            l = t[h];
                                        (l === r || Uo(l, jt[h]) && !Dt.call(t, h)) && (t[h] = o[h])
                                    }
                                return t
                            })),
                            Oa = Ji((function(t) {
                                return t.push(r, Xn), Se(Da, r, t)
                            }));

                        function Ra(t, e, i) {
                            var n = null == t ? r : Ii(t, e);
                            return n === r ? i : n
                        }

                        function xa(t, e) {
                            return null != t && gs(t, e, Ri)
                        }
                        var Ca = Un((function(t, e, r) {
                                null != e && "function" != typeof e.toString && (e = Mt.call(e)), t[e] = r
                            }), ec(nc)),
                            Aa = Un((function(t, e, r) {
                                null != e && "function" != typeof e.toString && (e = Mt.call(e)), Dt.call(t, e) ? t[e].push(r) : t[e] = [r]
                            }), cs),
                            Na = Ji(Ci);

                        function ja(t) {
                            return Zo(t) ? Jr(t) : Di(t)
                        }

                        function Ta(t) {
                            return Zo(t) ? Jr(t, !0) : zi(t)
                        }
                        var qa = jn((function(t, e, r) {
                                Ui(t, e, r)
                            })),
                            Da = jn((function(t, e, r, i) {
                                Ui(t, e, r, i)
                            })),
                            za = rs((function(t, e) {
                                var r = {};
                                if (null == t) return r;
                                var i = !1;
                                e = Te(e, (function(e) {
                                    return e = wn(e, t), i || (i = e.length > 1), e
                                })), An(t, ns(t), r), i && (r = ai(r, 7, ts));
                                for (var n = e.length; n--;) ln(r, e[n]);
                                return r
                            }));
                        var La = rs((function(t, e) {
                            return null == t ? {} : function(t, e) {
                                return Ki(t, e, (function(e, r) {
                                    return xa(t, r)
                                }))
                            }(t, e)
                        }));

                        function Ma(t, e) {
                            if (null == t) return {};
                            var r = Te(ns(t), (function(t) {
                                return [t]
                            }));
                            return e = cs(e), Ki(t, r, (function(t, r) {
                                return e(t, r[0])
                            }))
                        }
                        var ka = Gn(ja),
                            $a = Gn(Ta);

                        function Ua(t) {
                            return null == t ? [] : Ye(t, ja(t))
                        }
                        var Ha = zn((function(t, e, r) {
                            return e = e.toLowerCase(), t + (r ? Va(e) : e)
                        }));

                        function Va(t) {
                            return Qa(wa(t).toLowerCase())
                        }

                        function Ka(t) {
                            return (t = wa(t)) && t.replace(wt, ir).replace(Xt, "")
                        }
                        var Ba = zn((function(t, e, r) {
                                return t + (r ? "-" : "") + e.toLowerCase()
                            })),
                            Fa = zn((function(t, e, r) {
                                return t + (r ? " " : "") + e.toLowerCase()
                            })),
                            Za = Dn("toLowerCase");
                        var Wa = zn((function(t, e, r) {
                            return t + (r ? "_" : "") + e.toLowerCase()
                        }));
                        var Ja = zn((function(t, e, r) {
                            return t + (r ? " " : "") + Qa(e)
                        }));
                        var Ga = zn((function(t, e, r) {
                                return t + (r ? " " : "") + e.toUpperCase()
                            })),
                            Qa = Dn("toUpperCase");

                        function Ya(t, e, i) {
                            return t = wa(t), (e = i ? r : e) === r ? function(t) {
                                return ie.test(t)
                            }(t) ? function(t) {
                                return t.match(ee) || []
                            }(t) : function(t) {
                                return t.match(ut) || []
                            }(t) : t.match(e) || []
                        }
                        var Xa = Ji((function(t, e) {
                                try {
                                    return Se(t, r, e)
                                } catch (i) {
                                    return Qo(i) ? i : new Et(i)
                                }
                            })),
                            tc = rs((function(t, e) {
                                return Re(e, (function(e) {
                                    e = Ls(e), ni(t, e, Ao(t[e], t))
                                })), t
                            }));

                        function ec(t) {
                            return function() {
                                return t
                            }
                        }
                        var rc = kn(),
                            ic = kn(!0);

                        function nc(t) {
                            return t
                        }

                        function sc(t) {
                            return qi("function" == typeof t ? t : ai(t, 1))
                        }
                        var oc = Ji((function(t, e) {
                                return function(r) {
                                    return Ci(r, t, e)
                                }
                            })),
                            ac = Ji((function(t, e) {
                                return function(r) {
                                    return Ci(t, r, e)
                                }
                            }));

                        function cc(t, e, r) {
                            var i = ja(e),
                                n = bi(e, i);
                            null == r && (!ea(e) || !n.length && i.length) && (r = e, e = t, t = this, n = bi(e, ja(e)));
                            var s = !(ea(r) && "chain" in r) || !!r.chain,
                                o = Yo(t);
                            return Re(n, (function(r) {
                                var i = e[r];
                                t[r] = i, o && (t.prototype[r] = function() {
                                    var e = this.__chain__;
                                    if (s || e) {
                                        var r = t(this.__wrapped__),
                                            n = r.__actions__ = Cn(this.__actions__);
                                        return n.push({
                                            func: i,
                                            args: arguments,
                                            thisArg: t
                                        }), r.__chain__ = e, r
                                    }
                                    return i.apply(t, qe([this.value()], arguments))
                                })
                            })), t
                        }

                        function uc() {}
                        var hc = Vn(Te),
                            lc = Vn(Ce),
                            pc = Vn(Le);

                        function fc(t) {
                            return _s(t) ? Be(Ls(t)) : function(t) {
                                return function(e) {
                                    return Ii(e, t)
                                }
                            }(t)
                        }
                        var dc = Bn(),
                            gc = Bn(!0);

                        function yc() {
                            return []
                        }

                        function vc() {
                            return !1
                        }
                        var mc = Hn((function(t, e) {
                                return t + e
                            }), 0),
                            wc = Wn("ceil"),
                            _c = Hn((function(t, e) {
                                return t / e
                            }), 1),
                            bc = Wn("floor");
                        var Ic = Hn((function(t, e) {
                                return t * e
                            }), 1),
                            Ec = Wn("round"),
                            Pc = Hn((function(t, e) {
                                return t - e
                            }), 0);
                        return kr.after = function(t, e) {
                            if ("function" != typeof e) throw new Ct(i);
                            return t = ga(t),
                                function() {
                                    if (--t < 1) return e.apply(this, arguments)
                                }
                        }, kr.ary = xo, kr.assign = _a, kr.assignIn = ba, kr.assignInWith = Ia, kr.assignWith = Ea, kr.at = Pa, kr.before = Co, kr.bind = Ao, kr.bindAll = tc, kr.bindKey = No, kr.castArray = function() {
                            if (!arguments.length) return [];
                            var t = arguments[0];
                            return Bo(t) ? t : [t]
                        }, kr.chain = po, kr.chunk = function(t, e, i) {
                            e = (i ? ws(t, e, i) : e === r) ? 1 : vr(ga(e), 0);
                            var n = null == t ? 0 : t.length;
                            if (!n || e < 1) return [];
                            for (var s = 0, o = 0, a = st(de(n / e)); s < n;) a[o++] = rn(t, s, s += e);
                            return a
                        }, kr.compact = function(t) {
                            for (var e = -1, r = null == t ? 0 : t.length, i = 0, n = []; ++e < r;) {
                                var s = t[e];
                                s && (n[i++] = s)
                            }
                            return n
                        }, kr.concat = function() {
                            var t = arguments.length;
                            if (!t) return [];
                            for (var e = st(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                            return qe(Bo(r) ? Cn(r) : [r], yi(e, 1))
                        }, kr.cond = function(t) {
                            var e = null == t ? 0 : t.length,
                                r = cs();
                            return t = e ? Te(t, (function(t) {
                                if ("function" != typeof t[1]) throw new Ct(i);
                                return [r(t[0]), t[1]]
                            })) : [], Ji((function(r) {
                                for (var i = -1; ++i < e;) {
                                    var n = t[i];
                                    if (Se(n[0], this, r)) return Se(n[1], this, r)
                                }
                            }))
                        }, kr.conforms = function(t) {
                            return function(t) {
                                var e = ja(t);
                                return function(r) {
                                    return ci(r, t, e)
                                }
                            }(ai(t, 1))
                        }, kr.constant = ec, kr.countBy = yo, kr.create = function(t, e) {
                            var r = $r(t);
                            return null == e ? r : ii(r, e)
                        }, kr.curry = function t(e, i, n) {
                            var s = Qn(e, 8, r, r, r, r, r, i = n ? r : i);
                            return s.placeholder = t.placeholder, s
                        }, kr.curryRight = function t(e, i, n) {
                            var s = Qn(e, o, r, r, r, r, r, i = n ? r : i);
                            return s.placeholder = t.placeholder, s
                        }, kr.debounce = jo, kr.defaults = Sa, kr.defaultsDeep = Oa, kr.defer = To, kr.delay = qo, kr.difference = $s, kr.differenceBy = Us, kr.differenceWith = Hs, kr.drop = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? rn(t, (e = i || e === r ? 1 : ga(e)) < 0 ? 0 : e, n) : []
                        }, kr.dropRight = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? rn(t, 0, (e = n - (e = i || e === r ? 1 : ga(e))) < 0 ? 0 : e) : []
                        }, kr.dropRightWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3), !0, !0) : []
                        }, kr.dropWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3), !0) : []
                        }, kr.fill = function(t, e, i, n) {
                            var s = null == t ? 0 : t.length;
                            return s ? (i && "number" != typeof i && ws(t, e, i) && (i = 0, n = s), function(t, e, i, n) {
                                var s = t.length;
                                for ((i = ga(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : ga(n)) < 0 && (n += s), n = i > n ? 0 : ya(n); i < n;) t[i++] = e;
                                return t
                            }(t, e, i, n)) : []
                        }, kr.filter = function(t, e) {
                            return (Bo(t) ? Ae : gi)(t, cs(e, 3))
                        }, kr.flatMap = function(t, e) {
                            return yi(Po(t, e), 1)
                        }, kr.flatMapDeep = function(t, e) {
                            return yi(Po(t, e), l)
                        }, kr.flatMapDepth = function(t, e, i) {
                            return i = i === r ? 1 : ga(i), yi(Po(t, e), i)
                        }, kr.flatten = Bs, kr.flattenDeep = function(t) {
                            return (null == t ? 0 : t.length) ? yi(t, l) : []
                        }, kr.flattenDepth = function(t, e) {
                            return (null == t ? 0 : t.length) ? yi(t, e = e === r ? 1 : ga(e)) : []
                        }, kr.flip = function(t) {
                            return Qn(t, 512)
                        }, kr.flow = rc, kr.flowRight = ic, kr.fromPairs = function(t) {
                            for (var e = -1, r = null == t ? 0 : t.length, i = {}; ++e < r;) {
                                var n = t[e];
                                i[n[0]] = n[1]
                            }
                            return i
                        }, kr.functions = function(t) {
                            return null == t ? [] : bi(t, ja(t))
                        }, kr.functionsIn = function(t) {
                            return null == t ? [] : bi(t, Ta(t))
                        }, kr.groupBy = bo, kr.initial = function(t) {
                            return (null == t ? 0 : t.length) ? rn(t, 0, -1) : []
                        }, kr.intersection = Zs, kr.intersectionBy = Ws, kr.intersectionWith = Js, kr.invert = Ca, kr.invertBy = Aa, kr.invokeMap = Io, kr.iteratee = sc, kr.keyBy = Eo, kr.keys = ja, kr.keysIn = Ta, kr.map = Po, kr.mapKeys = function(t, e) {
                            var r = {};
                            return e = cs(e, 3), wi(t, (function(t, i, n) {
                                ni(r, e(t, i, n), t)
                            })), r
                        }, kr.mapValues = function(t, e) {
                            var r = {};
                            return e = cs(e, 3), wi(t, (function(t, i, n) {
                                ni(r, i, e(t, i, n))
                            })), r
                        }, kr.matches = function(t) {
                            return ki(ai(t, 1))
                        }, kr.matchesProperty = function(t, e) {
                            return $i(t, ai(e, 1))
                        }, kr.memoize = Do, kr.merge = qa, kr.mergeWith = Da, kr.method = oc, kr.methodOf = ac, kr.mixin = cc, kr.negate = zo, kr.nthArg = function(t) {
                            return t = ga(t), Ji((function(e) {
                                return Hi(e, t)
                            }))
                        }, kr.omit = za, kr.omitBy = function(t, e) {
                            return Ma(t, zo(cs(e)))
                        }, kr.once = function(t) {
                            return Co(2, t)
                        }, kr.orderBy = function(t, e, i, n) {
                            return null == t ? [] : (Bo(e) || (e = null == e ? [] : [e]), Bo(i = n ? r : i) || (i = null == i ? [] : [i]), Vi(t, e, i))
                        }, kr.over = hc, kr.overArgs = Lo, kr.overEvery = lc, kr.overSome = pc, kr.partial = Mo, kr.partialRight = ko, kr.partition = So, kr.pick = La, kr.pickBy = Ma, kr.property = fc, kr.propertyOf = function(t) {
                            return function(e) {
                                return null == t ? r : Ii(t, e)
                            }
                        }, kr.pull = Qs, kr.pullAll = Ys, kr.pullAllBy = function(t, e, r) {
                            return t && t.length && e && e.length ? Bi(t, e, cs(r, 2)) : t
                        }, kr.pullAllWith = function(t, e, i) {
                            return t && t.length && e && e.length ? Bi(t, e, r, i) : t
                        }, kr.pullAt = Xs, kr.range = dc, kr.rangeRight = gc, kr.rearg = $o, kr.reject = function(t, e) {
                            return (Bo(t) ? Ae : gi)(t, zo(cs(e, 3)))
                        }, kr.remove = function(t, e) {
                            var r = [];
                            if (!t || !t.length) return r;
                            var i = -1,
                                n = [],
                                s = t.length;
                            for (e = cs(e, 3); ++i < s;) {
                                var o = t[i];
                                e(o, i, t) && (r.push(o), n.push(i))
                            }
                            return Fi(t, n), r
                        }, kr.rest = function(t, e) {
                            if ("function" != typeof t) throw new Ct(i);
                            return Ji(t, e = e === r ? e : ga(e))
                        }, kr.reverse = to, kr.sampleSize = function(t, e, i) {
                            return e = (i ? ws(t, e, i) : e === r) ? 1 : ga(e), (Bo(t) ? Qr : Qi)(t, e)
                        }, kr.set = function(t, e, r) {
                            return null == t ? t : Yi(t, e, r)
                        }, kr.setWith = function(t, e, i, n) {
                            return n = "function" == typeof n ? n : r, null == t ? t : Yi(t, e, i, n)
                        }, kr.shuffle = function(t) {
                            return (Bo(t) ? Yr : en)(t)
                        }, kr.slice = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? (i && "number" != typeof i && ws(t, e, i) ? (e = 0, i = n) : (e = null == e ? 0 : ga(e), i = i === r ? n : ga(i)), rn(t, e, i)) : []
                        }, kr.sortBy = Oo, kr.sortedUniq = function(t) {
                            return t && t.length ? an(t) : []
                        }, kr.sortedUniqBy = function(t, e) {
                            return t && t.length ? an(t, cs(e, 2)) : []
                        }, kr.split = function(t, e, i) {
                            return i && "number" != typeof i && ws(t, e, i) && (e = i = r), (i = i === r ? d : i >>> 0) ? (t = wa(t)) && ("string" == typeof e || null != e && !oa(e)) && (!(e = un(e)) && or(t)) ? bn(pr(t), 0, i) : t.split(e, i) : []
                        }, kr.spread = function(t, e) {
                            if ("function" != typeof t) throw new Ct(i);
                            return e = null == e ? 0 : vr(ga(e), 0), Ji((function(r) {
                                var i = r[e],
                                    n = bn(r, 0, e);
                                return i && qe(n, i), Se(t, this, n)
                            }))
                        }, kr.tail = function(t) {
                            var e = null == t ? 0 : t.length;
                            return e ? rn(t, 1, e) : []
                        }, kr.take = function(t, e, i) {
                            return t && t.length ? rn(t, 0, (e = i || e === r ? 1 : ga(e)) < 0 ? 0 : e) : []
                        }, kr.takeRight = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? rn(t, (e = n - (e = i || e === r ? 1 : ga(e))) < 0 ? 0 : e, n) : []
                        }, kr.takeRightWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3), !1, !0) : []
                        }, kr.takeWhile = function(t, e) {
                            return t && t.length ? fn(t, cs(e, 3)) : []
                        }, kr.tap = function(t, e) {
                            return e(t), t
                        }, kr.throttle = function(t, e, r) {
                            var n = !0,
                                s = !0;
                            if ("function" != typeof t) throw new Ct(i);
                            return ea(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), jo(t, e, {
                                leading: n,
                                maxWait: e,
                                trailing: s
                            })
                        }, kr.thru = fo, kr.toArray = fa, kr.toPairs = ka, kr.toPairsIn = $a, kr.toPath = function(t) {
                            return Bo(t) ? Te(t, Ls) : ua(t) ? [t] : Cn(zs(wa(t)))
                        }, kr.toPlainObject = ma, kr.transform = function(t, e, r) {
                            var i = Bo(t),
                                n = i || Jo(t) || ha(t);
                            if (e = cs(e, 4), null == r) {
                                var s = t && t.constructor;
                                r = n ? i ? new s : [] : ea(t) && Yo(s) ? $r(Ft(t)) : {}
                            }
                            return (n ? Re : wi)(t, (function(t, i, n) {
                                return e(r, t, i, n)
                            })), r
                        }, kr.unary = function(t) {
                            return xo(t, 1)
                        }, kr.union = eo, kr.unionBy = ro, kr.unionWith = io, kr.uniq = function(t) {
                            return t && t.length ? hn(t) : []
                        }, kr.uniqBy = function(t, e) {
                            return t && t.length ? hn(t, cs(e, 2)) : []
                        }, kr.uniqWith = function(t, e) {
                            return e = "function" == typeof e ? e : r, t && t.length ? hn(t, r, e) : []
                        }, kr.unset = function(t, e) {
                            return null == t || ln(t, e)
                        }, kr.unzip = no, kr.unzipWith = so, kr.update = function(t, e, r) {
                            return null == t ? t : pn(t, e, mn(r))
                        }, kr.updateWith = function(t, e, i, n) {
                            return n = "function" == typeof n ? n : r, null == t ? t : pn(t, e, mn(i), n)
                        }, kr.values = Ua, kr.valuesIn = function(t) {
                            return null == t ? [] : Ye(t, Ta(t))
                        }, kr.without = oo, kr.words = Ya, kr.wrap = function(t, e) {
                            return Mo(mn(e), t)
                        }, kr.xor = ao, kr.xorBy = co, kr.xorWith = uo, kr.zip = ho, kr.zipObject = function(t, e) {
                            return yn(t || [], e || [], ti)
                        }, kr.zipObjectDeep = function(t, e) {
                            return yn(t || [], e || [], Yi)
                        }, kr.zipWith = lo, kr.entries = ka, kr.entriesIn = $a, kr.extend = ba, kr.extendWith = Ia, cc(kr, kr), kr.add = mc, kr.attempt = Xa, kr.camelCase = Ha, kr.capitalize = Va, kr.ceil = wc, kr.clamp = function(t, e, i) {
                            return i === r && (i = e, e = r), i !== r && (i = (i = va(i)) === i ? i : 0), e !== r && (e = (e = va(e)) === e ? e : 0), oi(va(t), e, i)
                        }, kr.clone = function(t) {
                            return ai(t, 4)
                        }, kr.cloneDeep = function(t) {
                            return ai(t, 5)
                        }, kr.cloneDeepWith = function(t, e) {
                            return ai(t, 5, e = "function" == typeof e ? e : r)
                        }, kr.cloneWith = function(t, e) {
                            return ai(t, 4, e = "function" == typeof e ? e : r)
                        }, kr.conformsTo = function(t, e) {
                            return null == e || ci(t, e, ja(e))
                        }, kr.deburr = Ka, kr.defaultTo = function(t, e) {
                            return null == t || t !== t ? e : t
                        }, kr.divide = _c, kr.endsWith = function(t, e, i) {
                            t = wa(t), e = un(e);
                            var n = t.length,
                                s = i = i === r ? n : oi(ga(i), 0, n);
                            return (i -= e.length) >= 0 && t.slice(i, s) == e
                        }, kr.eq = Uo, kr.escape = function(t) {
                            return (t = wa(t)) && J.test(t) ? t.replace(Z, nr) : t
                        }, kr.escapeRegExp = function(t) {
                            return (t = wa(t)) && it.test(t) ? t.replace(rt, "\\$&") : t
                        }, kr.every = function(t, e, i) {
                            var n = Bo(t) ? Ce : fi;
                            return i && ws(t, e, i) && (e = r), n(t, cs(e, 3))
                        }, kr.find = vo, kr.findIndex = Vs, kr.findKey = function(t, e) {
                            return ke(t, cs(e, 3), wi)
                        }, kr.findLast = mo, kr.findLastIndex = Ks, kr.findLastKey = function(t, e) {
                            return ke(t, cs(e, 3), _i)
                        }, kr.floor = bc, kr.forEach = wo, kr.forEachRight = _o, kr.forIn = function(t, e) {
                            return null == t ? t : vi(t, cs(e, 3), Ta)
                        }, kr.forInRight = function(t, e) {
                            return null == t ? t : mi(t, cs(e, 3), Ta)
                        }, kr.forOwn = function(t, e) {
                            return t && wi(t, cs(e, 3))
                        }, kr.forOwnRight = function(t, e) {
                            return t && _i(t, cs(e, 3))
                        }, kr.get = Ra, kr.gt = Ho, kr.gte = Vo, kr.has = function(t, e) {
                            return null != t && gs(t, e, Oi)
                        }, kr.hasIn = xa, kr.head = Fs, kr.identity = nc, kr.includes = function(t, e, r, i) {
                            t = Zo(t) ? t : Ua(t), r = r && !i ? ga(r) : 0;
                            var n = t.length;
                            return r < 0 && (r = vr(n + r, 0)), ca(t) ? r <= n && t.indexOf(e, r) > -1 : !!n && Ue(t, e, r) > -1
                        }, kr.indexOf = function(t, e, r) {
                            var i = null == t ? 0 : t.length;
                            if (!i) return -1;
                            var n = null == r ? 0 : ga(r);
                            return n < 0 && (n = vr(i + n, 0)), Ue(t, e, n)
                        }, kr.inRange = function(t, e, i) {
                            return e = da(e), i === r ? (i = e, e = 0) : i = da(i),
                                function(t, e, r) {
                                    return t >= mr(e, r) && t < vr(e, r)
                                }(t = va(t), e, i)
                        }, kr.invoke = Na, kr.isArguments = Ko, kr.isArray = Bo, kr.isArrayBuffer = Fo, kr.isArrayLike = Zo, kr.isArrayLikeObject = Wo, kr.isBoolean = function(t) {
                            return !0 === t || !1 === t || ra(t) && Pi(t) == m
                        }, kr.isBuffer = Jo, kr.isDate = Go, kr.isElement = function(t) {
                            return ra(t) && 1 === t.nodeType && !sa(t)
                        }, kr.isEmpty = function(t) {
                            if (null == t) return !0;
                            if (Zo(t) && (Bo(t) || "string" == typeof t || "function" == typeof t.splice || Jo(t) || ha(t) || Ko(t))) return !t.length;
                            var e = ds(t);
                            if (e == E || e == x) return !t.size;
                            if (Es(t)) return !Di(t).length;
                            for (var r in t)
                                if (Dt.call(t, r)) return !1;
                            return !0
                        }, kr.isEqual = function(t, e) {
                            return Ni(t, e)
                        }, kr.isEqualWith = function(t, e, i) {
                            var n = (i = "function" == typeof i ? i : r) ? i(t, e) : r;
                            return n === r ? Ni(t, e, r, i) : !!n
                        }, kr.isError = Qo, kr.isFinite = function(t) {
                            return "number" == typeof t && Me(t)
                        }, kr.isFunction = Yo, kr.isInteger = Xo, kr.isLength = ta, kr.isMap = ia, kr.isMatch = function(t, e) {
                            return t === e || ji(t, e, hs(e))
                        }, kr.isMatchWith = function(t, e, i) {
                            return i = "function" == typeof i ? i : r, ji(t, e, hs(e), i)
                        }, kr.isNaN = function(t) {
                            return na(t) && t != +t
                        }, kr.isNative = function(t) {
                            if (Is(t)) throw new Et("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                            return Ti(t)
                        }, kr.isNil = function(t) {
                            return null == t
                        }, kr.isNull = function(t) {
                            return null === t
                        }, kr.isNumber = na, kr.isObject = ea, kr.isObjectLike = ra, kr.isPlainObject = sa, kr.isRegExp = oa, kr.isSafeInteger = function(t) {
                            return Xo(t) && t >= -p && t <= p
                        }, kr.isSet = aa, kr.isString = ca, kr.isSymbol = ua, kr.isTypedArray = ha, kr.isUndefined = function(t) {
                            return t === r
                        }, kr.isWeakMap = function(t) {
                            return ra(t) && ds(t) == N
                        }, kr.isWeakSet = function(t) {
                            return ra(t) && "[object WeakSet]" == Pi(t)
                        }, kr.join = function(t, e) {
                            return null == t ? "" : Fe.call(t, e)
                        }, kr.kebabCase = Ba, kr.last = Gs, kr.lastIndexOf = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            if (!n) return -1;
                            var s = n;
                            return i !== r && (s = (s = ga(i)) < 0 ? vr(n + s, 0) : mr(s, n - 1)), e === e ? function(t, e, r) {
                                for (var i = r + 1; i--;)
                                    if (t[i] === e) return i;
                                return i
                            }(t, e, s) : $e(t, Ve, s, !0)
                        }, kr.lowerCase = Fa, kr.lowerFirst = Za, kr.lt = la, kr.lte = pa, kr.max = function(t) {
                            return t && t.length ? di(t, nc, Si) : r
                        }, kr.maxBy = function(t, e) {
                            return t && t.length ? di(t, cs(e, 2), Si) : r
                        }, kr.mean = function(t) {
                            return Ke(t, nc)
                        }, kr.meanBy = function(t, e) {
                            return Ke(t, cs(e, 2))
                        }, kr.min = function(t) {
                            return t && t.length ? di(t, nc, Li) : r
                        }, kr.minBy = function(t, e) {
                            return t && t.length ? di(t, cs(e, 2), Li) : r
                        }, kr.stubArray = yc, kr.stubFalse = vc, kr.stubObject = function() {
                            return {}
                        }, kr.stubString = function() {
                            return ""
                        }, kr.stubTrue = function() {
                            return !0
                        }, kr.multiply = Ic, kr.nth = function(t, e) {
                            return t && t.length ? Hi(t, ga(e)) : r
                        }, kr.noConflict = function() {
                            return fe._ === this && (fe._ = $t), this
                        }, kr.noop = uc, kr.now = Ro, kr.pad = function(t, e, r) {
                            t = wa(t);
                            var i = (e = ga(e)) ? lr(t) : 0;
                            if (!e || i >= e) return t;
                            var n = (e - i) / 2;
                            return Kn(ge(n), r) + t + Kn(de(n), r)
                        }, kr.padEnd = function(t, e, r) {
                            t = wa(t);
                            var i = (e = ga(e)) ? lr(t) : 0;
                            return e && i < e ? t + Kn(e - i, r) : t
                        }, kr.padStart = function(t, e, r) {
                            t = wa(t);
                            var i = (e = ga(e)) ? lr(t) : 0;
                            return e && i < e ? Kn(e - i, r) + t : t
                        }, kr.parseInt = function(t, e, r) {
                            return r || null == e ? e = 0 : e && (e = +e), _r(wa(t).replace(nt, ""), e || 0)
                        }, kr.random = function(t, e, i) {
                            if (i && "boolean" != typeof i && ws(t, e, i) && (e = i = r), i === r && ("boolean" == typeof e ? (i = e, e = r) : "boolean" == typeof t && (i = t, t = r)), t === r && e === r ? (t = 0, e = 1) : (t = da(t), e === r ? (e = t, t = 0) : e = da(e)), t > e) {
                                var n = t;
                                t = e, e = n
                            }
                            if (i || t % 1 || e % 1) {
                                var s = br();
                                return mr(t + s * (e - t + ue("1e-" + ((s + "").length - 1))), e)
                            }
                            return Zi(t, e)
                        }, kr.reduce = function(t, e, r) {
                            var i = Bo(t) ? De : Ze,
                                n = arguments.length < 3;
                            return i(t, cs(e, 4), r, n, li)
                        }, kr.reduceRight = function(t, e, r) {
                            var i = Bo(t) ? ze : Ze,
                                n = arguments.length < 3;
                            return i(t, cs(e, 4), r, n, pi)
                        }, kr.repeat = function(t, e, i) {
                            return e = (i ? ws(t, e, i) : e === r) ? 1 : ga(e), Wi(wa(t), e)
                        }, kr.replace = function() {
                            var t = arguments,
                                e = wa(t[0]);
                            return t.length < 3 ? e : e.replace(t[1], t[2])
                        }, kr.result = function(t, e, i) {
                            var n = -1,
                                s = (e = wn(e, t)).length;
                            for (s || (s = 1, t = r); ++n < s;) {
                                var o = null == t ? r : t[Ls(e[n])];
                                o === r && (n = s, o = i), t = Yo(o) ? o.call(t) : o
                            }
                            return t
                        }, kr.round = Ec, kr.runInContext = t, kr.sample = function(t) {
                            return (Bo(t) ? Gr : Gi)(t)
                        }, kr.size = function(t) {
                            if (null == t) return 0;
                            if (Zo(t)) return ca(t) ? lr(t) : t.length;
                            var e = ds(t);
                            return e == E || e == x ? t.size : Di(t).length
                        }, kr.snakeCase = Wa, kr.some = function(t, e, i) {
                            var n = Bo(t) ? Le : nn;
                            return i && ws(t, e, i) && (e = r), n(t, cs(e, 3))
                        }, kr.sortedIndex = function(t, e) {
                            return sn(t, e)
                        }, kr.sortedIndexBy = function(t, e, r) {
                            return on(t, e, cs(r, 2))
                        }, kr.sortedIndexOf = function(t, e) {
                            var r = null == t ? 0 : t.length;
                            if (r) {
                                var i = sn(t, e);
                                if (i < r && Uo(t[i], e)) return i
                            }
                            return -1
                        }, kr.sortedLastIndex = function(t, e) {
                            return sn(t, e, !0)
                        }, kr.sortedLastIndexBy = function(t, e, r) {
                            return on(t, e, cs(r, 2), !0)
                        }, kr.sortedLastIndexOf = function(t, e) {
                            if (null == t ? 0 : t.length) {
                                var r = sn(t, e, !0) - 1;
                                if (Uo(t[r], e)) return r
                            }
                            return -1
                        }, kr.startCase = Ja, kr.startsWith = function(t, e, r) {
                            return t = wa(t), r = null == r ? 0 : oi(ga(r), 0, t.length), e = un(e), t.slice(r, r + e.length) == e
                        }, kr.subtract = Pc, kr.sum = function(t) {
                            return t && t.length ? We(t, nc) : 0
                        }, kr.sumBy = function(t, e) {
                            return t && t.length ? We(t, cs(e, 2)) : 0
                        }, kr.template = function(t, e, i) {
                            var n = kr.templateSettings;
                            i && ws(t, e, i) && (e = r), t = wa(t), e = Ia({}, e, n, Yn);
                            var s, o, a = Ia({}, e.imports, n.imports, Yn),
                                c = ja(a),
                                u = Ye(a, c),
                                h = 0,
                                l = e.interpolate || _t,
                                p = "__p += '",
                                f = Rt((e.escape || _t).source + "|" + l.source + "|" + (l === Y ? pt : _t).source + "|" + (e.evaluate || _t).source + "|$", "g"),
                                d = "//# sourceURL=" + (Dt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++se + "]") + "\n";
                            t.replace(f, (function(e, r, i, n, a, c) {
                                return i || (i = n), p += t.slice(h, c).replace(bt, sr), r && (s = !0, p += "' +\n__e(" + r + ") +\n'"), a && (o = !0, p += "';\n" + a + ";\n__p += '"), i && (p += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), h = c + e.length, e
                            })), p += "';\n";
                            var g = Dt.call(e, "variable") && e.variable;
                            if (g) {
                                if (ht.test(g)) throw new Et("Invalid `variable` option passed into `_.template`")
                            } else p = "with (obj) {\n" + p + "\n}\n";
                            p = (o ? p.replace(V, "") : p).replace(K, "$1").replace(B, "$1;"), p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                            var y = Xa((function() {
                                return Pt(c, d + "return " + p).apply(r, u)
                            }));
                            if (y.source = p, Qo(y)) throw y;
                            return y
                        }, kr.times = function(t, e) {
                            if ((t = ga(t)) < 1 || t > p) return [];
                            var r = d,
                                i = mr(t, d);
                            e = cs(e), t -= d;
                            for (var n = Je(i, e); ++r < t;) e(r);
                            return n
                        }, kr.toFinite = da, kr.toInteger = ga, kr.toLength = ya, kr.toLower = function(t) {
                            return wa(t).toLowerCase()
                        }, kr.toNumber = va, kr.toSafeInteger = function(t) {
                            return t ? oi(ga(t), -p, p) : 0 === t ? t : 0
                        }, kr.toString = wa, kr.toUpper = function(t) {
                            return wa(t).toUpperCase()
                        }, kr.trim = function(t, e, i) {
                            if ((t = wa(t)) && (i || e === r)) return Ge(t);
                            if (!t || !(e = un(e))) return t;
                            var n = pr(t),
                                s = pr(e);
                            return bn(n, tr(n, s), er(n, s) + 1).join("")
                        }, kr.trimEnd = function(t, e, i) {
                            if ((t = wa(t)) && (i || e === r)) return t.slice(0, fr(t) + 1);
                            if (!t || !(e = un(e))) return t;
                            var n = pr(t);
                            return bn(n, 0, er(n, pr(e)) + 1).join("")
                        }, kr.trimStart = function(t, e, i) {
                            if ((t = wa(t)) && (i || e === r)) return t.replace(nt, "");
                            if (!t || !(e = un(e))) return t;
                            var n = pr(t);
                            return bn(n, tr(n, pr(e))).join("")
                        }, kr.truncate = function(t, e) {
                            var i = 30,
                                n = "...";
                            if (ea(e)) {
                                var s = "separator" in e ? e.separator : s;
                                i = "length" in e ? ga(e.length) : i, n = "omission" in e ? un(e.omission) : n
                            }
                            var o = (t = wa(t)).length;
                            if (or(t)) {
                                var a = pr(t);
                                o = a.length
                            }
                            if (i >= o) return t;
                            var c = i - lr(n);
                            if (c < 1) return n;
                            var u = a ? bn(a, 0, c).join("") : t.slice(0, c);
                            if (s === r) return u + n;
                            if (a && (c += u.length - c), oa(s)) {
                                if (t.slice(c).search(s)) {
                                    var h, l = u;
                                    for (s.global || (s = Rt(s.source, wa(ft.exec(s)) + "g")), s.lastIndex = 0; h = s.exec(l);) var p = h.index;
                                    u = u.slice(0, p === r ? c : p)
                                }
                            } else if (t.indexOf(un(s), c) != c) {
                                var f = u.lastIndexOf(s);
                                f > -1 && (u = u.slice(0, f))
                            }
                            return u + n
                        }, kr.unescape = function(t) {
                            return (t = wa(t)) && W.test(t) ? t.replace(F, dr) : t
                        }, kr.uniqueId = function(t) {
                            var e = ++zt;
                            return wa(t) + e
                        }, kr.upperCase = Ga, kr.upperFirst = Qa, kr.each = wo, kr.eachRight = _o, kr.first = Fs, cc(kr, function() {
                            var t = {};
                            return wi(kr, (function(e, r) {
                                Dt.call(kr.prototype, r) || (t[r] = e)
                            })), t
                        }(), {
                            chain: !1
                        }), kr.VERSION = "4.17.21", Re(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                            kr[t].placeholder = kr
                        })), Re(["drop", "take"], (function(t, e) {
                            Vr.prototype[t] = function(i) {
                                i = i === r ? 1 : vr(ga(i), 0);
                                var n = this.__filtered__ && !e ? new Vr(this) : this.clone();
                                return n.__filtered__ ? n.__takeCount__ = mr(i, n.__takeCount__) : n.__views__.push({
                                    size: mr(i, d),
                                    type: t + (n.__dir__ < 0 ? "Right" : "")
                                }), n
                            }, Vr.prototype[t + "Right"] = function(e) {
                                return this.reverse()[t](e).reverse()
                            }
                        })), Re(["filter", "map", "takeWhile"], (function(t, e) {
                            var r = e + 1,
                                i = 1 == r || 3 == r;
                            Vr.prototype[t] = function(t) {
                                var e = this.clone();
                                return e.__iteratees__.push({
                                    iteratee: cs(t, 3),
                                    type: r
                                }), e.__filtered__ = e.__filtered__ || i, e
                            }
                        })), Re(["head", "last"], (function(t, e) {
                            var r = "take" + (e ? "Right" : "");
                            Vr.prototype[t] = function() {
                                return this[r](1).value()[0]
                            }
                        })), Re(["initial", "tail"], (function(t, e) {
                            var r = "drop" + (e ? "" : "Right");
                            Vr.prototype[t] = function() {
                                return this.__filtered__ ? new Vr(this) : this[r](1)
                            }
                        })), Vr.prototype.compact = function() {
                            return this.filter(nc)
                        }, Vr.prototype.find = function(t) {
                            return this.filter(t).head()
                        }, Vr.prototype.findLast = function(t) {
                            return this.reverse().find(t)
                        }, Vr.prototype.invokeMap = Ji((function(t, e) {
                            return "function" == typeof t ? new Vr(this) : this.map((function(r) {
                                return Ci(r, t, e)
                            }))
                        })), Vr.prototype.reject = function(t) {
                            return this.filter(zo(cs(t)))
                        }, Vr.prototype.slice = function(t, e) {
                            t = ga(t);
                            var i = this;
                            return i.__filtered__ && (t > 0 || e < 0) ? new Vr(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), e !== r && (i = (e = ga(e)) < 0 ? i.dropRight(-e) : i.take(e - t)), i)
                        }, Vr.prototype.takeRightWhile = function(t) {
                            return this.reverse().takeWhile(t).reverse()
                        }, Vr.prototype.toArray = function() {
                            return this.take(d)
                        }, wi(Vr.prototype, (function(t, e) {
                            var i = /^(?:filter|find|map|reject)|While$/.test(e),
                                n = /^(?:head|last)$/.test(e),
                                s = kr[n ? "take" + ("last" == e ? "Right" : "") : e],
                                o = n || /^find/.test(e);
                            s && (kr.prototype[e] = function() {
                                var e = this.__wrapped__,
                                    a = n ? [1] : arguments,
                                    c = e instanceof Vr,
                                    u = a[0],
                                    h = c || Bo(e),
                                    l = function(t) {
                                        var e = s.apply(kr, qe([t], a));
                                        return n && p ? e[0] : e
                                    };
                                h && i && "function" == typeof u && 1 != u.length && (c = h = !1);
                                var p = this.__chain__,
                                    f = !!this.__actions__.length,
                                    d = o && !p,
                                    g = c && !f;
                                if (!o && h) {
                                    e = g ? e : new Vr(this);
                                    var y = t.apply(e, a);
                                    return y.__actions__.push({
                                        func: fo,
                                        args: [l],
                                        thisArg: r
                                    }), new Hr(y, p)
                                }
                                return d && g ? t.apply(this, a) : (y = this.thru(l), d ? n ? y.value()[0] : y.value() : y)
                            })
                        })), Re(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                            var e = At[t],
                                r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                                i = /^(?:pop|shift)$/.test(t);
                            kr.prototype[t] = function() {
                                var t = arguments;
                                if (i && !this.__chain__) {
                                    var n = this.value();
                                    return e.apply(Bo(n) ? n : [], t)
                                }
                                return this[r]((function(r) {
                                    return e.apply(Bo(r) ? r : [], t)
                                }))
                            }
                        })), wi(Vr.prototype, (function(t, e) {
                            var r = kr[e];
                            if (r) {
                                var i = r.name + "";
                                Dt.call(Ar, i) || (Ar[i] = []), Ar[i].push({
                                    name: e,
                                    func: r
                                })
                            }
                        })), Ar[$n(r, 2).name] = [{
                            name: "wrapper",
                            func: r
                        }], Vr.prototype.clone = function() {
                            var t = new Vr(this.__wrapped__);
                            return t.__actions__ = Cn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Cn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Cn(this.__views__), t
                        }, Vr.prototype.reverse = function() {
                            if (this.__filtered__) {
                                var t = new Vr(this);
                                t.__dir__ = -1, t.__filtered__ = !0
                            } else(t = this.clone()).__dir__ *= -1;
                            return t
                        }, Vr.prototype.value = function() {
                            var t = this.__wrapped__.value(),
                                e = this.__dir__,
                                r = Bo(t),
                                i = e < 0,
                                n = r ? t.length : 0,
                                s = function(t, e, r) {
                                    for (var i = -1, n = r.length; ++i < n;) {
                                        var s = r[i],
                                            o = s.size;
                                        switch (s.type) {
                                            case "drop":
                                                t += o;
                                                break;
                                            case "dropRight":
                                                e -= o;
                                                break;
                                            case "take":
                                                e = mr(e, t + o);
                                                break;
                                            case "takeRight":
                                                t = vr(t, e - o)
                                        }
                                    }
                                    return {
                                        start: t,
                                        end: e
                                    }
                                }(0, n, this.__views__),
                                o = s.start,
                                a = s.end,
                                c = a - o,
                                u = i ? a : o - 1,
                                h = this.__iteratees__,
                                l = h.length,
                                p = 0,
                                f = mr(c, this.__takeCount__);
                            if (!r || !i && n == c && f == c) return dn(t, this.__actions__);
                            var d = [];
                            t: for (; c-- && p < f;) {
                                for (var g = -1, y = t[u += e]; ++g < l;) {
                                    var v = h[g],
                                        m = v.iteratee,
                                        w = v.type,
                                        _ = m(y);
                                    if (2 == w) y = _;
                                    else if (!_) {
                                        if (1 == w) continue t;
                                        break t
                                    }
                                }
                                d[p++] = y
                            }
                            return d
                        }, kr.prototype.at = go, kr.prototype.chain = function() {
                            return po(this)
                        }, kr.prototype.commit = function() {
                            return new Hr(this.value(), this.__chain__)
                        }, kr.prototype.next = function() {
                            this.__values__ === r && (this.__values__ = fa(this.value()));
                            var t = this.__index__ >= this.__values__.length;
                            return {
                                done: t,
                                value: t ? r : this.__values__[this.__index__++]
                            }
                        }, kr.prototype.plant = function(t) {
                            for (var e, i = this; i instanceof Ur;) {
                                var n = ks(i);
                                n.__index__ = 0, n.__values__ = r, e ? s.__wrapped__ = n : e = n;
                                var s = n;
                                i = i.__wrapped__
                            }
                            return s.__wrapped__ = t, e
                        }, kr.prototype.reverse = function() {
                            var t = this.__wrapped__;
                            if (t instanceof Vr) {
                                var e = t;
                                return this.__actions__.length && (e = new Vr(this)), (e = e.reverse()).__actions__.push({
                                    func: fo,
                                    args: [to],
                                    thisArg: r
                                }), new Hr(e, this.__chain__)
                            }
                            return this.thru(to)
                        }, kr.prototype.toJSON = kr.prototype.valueOf = kr.prototype.value = function() {
                            return dn(this.__wrapped__, this.__actions__)
                        }, kr.prototype.first = kr.prototype.head, Qt && (kr.prototype[Qt] = function() {
                            return this
                        }), kr
                    }();
                    ge ? ((ge.exports = gr)._ = gr, de._ = gr) : fe._ = gr
                }).call(Wi)
            }(Ji, Ji.exports);
            var Gi = Object.defineProperty,
                Qi = Object.defineProperties,
                Yi = Object.getOwnPropertyDescriptors,
                Xi = Object.getOwnPropertySymbols,
                tn = Object.prototype.hasOwnProperty,
                en = Object.prototype.propertyIsEnumerable,
                rn = (t, e, r) => e in t ? Gi(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                nn = (t, e) => {
                    for (var r in e || (e = {})) tn.call(e, r) && rn(t, r, e[r]);
                    if (Xi)
                        for (var r of Xi(e)) en.call(e, r) && rn(t, r, e[r]);
                    return t
                },
                sn = (t, e) => Qi(t, Yi(e));

            function on(t, e, r) {
                var i;
                const n = (0, s.DQ)(t);
                return (null == (i = e.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function an(t) {
                return t.includes(":") ? t.split(":")[1] : t
            }

            function cn(t) {
                return t.map((t => `${t.split(":")[0]}:${t.split(":")[1]}`))
            }

            function un(t) {
                var e, r, i, n;
                const o = {};
                if (!(0, s.L5)(t)) return o;
                for (const [a, c] of Object.entries(t)) {
                    const t = (0, s.gp)(a) ? [a] : c.chains,
                        u = c.methods || [],
                        h = c.events || [],
                        l = c.rpcMap || {},
                        p = (0, s.M)(a);
                    o[p] = sn(nn(nn({}, o[p]), c), {
                        chains: (0, s.eG)(t, null == (e = o[p]) ? void 0 : e.chains),
                        methods: (0, s.eG)(u, null == (r = o[p]) ? void 0 : r.methods),
                        events: (0, s.eG)(h, null == (i = o[p]) ? void 0 : i.events),
                        rpcMap: nn(nn({}, l), null == (n = o[p]) ? void 0 : n.rpcMap)
                    })
                }
                return o
            }

            function hn(t) {
                return t.includes(":") ? t.split(":")[2] : t
            }

            function ln(t) {
                const e = {};
                for (const [r, i] of Object.entries(t)) {
                    const t = i.methods || [],
                        n = i.events || [],
                        o = i.accounts || [],
                        a = (0, s.gp)(r) ? [r] : i.chains ? i.chains : cn(i.accounts);
                    e[r] = {
                        chains: a,
                        methods: t,
                        events: n,
                        accounts: o
                    }
                }
                return e
            }

            function pn(t) {
                return "number" == typeof t ? t : t.includes("0x") ? parseInt(t, 16) : t.includes(":") ? Number(t.split(":")[1]) : Number(t)
            }
            const fn = {},
                dn = t => fn[t],
                gn = (t, e) => {
                    fn[t] = e
                };
            class yn {
                constructor(t) {
                    this.name = "polkadot", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Zi, `${this.name}:${t}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = an(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || on(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new ct.r(new Ki.Z(r, dn("disableProviderPing")))
                }
            }
            class vn {
                constructor(t) {
                    this.name = "eip155", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(t) {
                    switch (t.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(t);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(Zi, `${this.name}:${t}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                createHttpProvider(t, e) {
                    const r = e || on(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new ct.r(new Ki.k(r, dn("disableProviderPing")))
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = parseInt(an(e));
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                getHttpProvider() {
                    const t = this.chainId,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                async handleSwitchChain(t) {
                    var e, r;
                    let i = t.request.params ? null == (e = t.request.params[0]) ? void 0 : e.chainId : "0x0";
                    i = i.startsWith("0x") ? i : `0x${i}`;
                    const n = parseInt(i, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else {
                        if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                        await this.client.request({
                            topic: t.topic,
                            request: {
                                method: t.request.method,
                                params: [{
                                    chainId: i
                                }]
                            },
                            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                        }), this.setDefaultChain(`${n}`)
                    }
                    return null
                }
                isChainApproved(t) {
                    return this.namespace.chains.includes(`${this.name}:${t}`)
                }
            }
            class mn {
                constructor(t) {
                    this.name = "solana", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Zi, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = an(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || on(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new ct.r(new Ki.Z(r, dn("disableProviderPing")))
                }
            }
            class wn {
                constructor(t) {
                    this.name = "cosmos", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Zi, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = an(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || on(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new ct.r(new Ki.Z(r, dn("disableProviderPing")))
                }
            }
            class _n {
                constructor(t) {
                    this.name = "cip34", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Zi, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        const r = this.getCardanoRPCUrl(e),
                            i = an(e);
                        t[i] = this.createHttpProvider(i, r)
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                getCardanoRPCUrl(t) {
                    const e = this.namespace.rpcMap;
                    if (e) return e[t]
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || this.getCardanoRPCUrl(t);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new ct.r(new Ki.Z(r, dn("disableProviderPing")))
                }
            }
            class bn {
                constructor(t) {
                    this.name = "elrond", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Zi, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = an(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || on(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new ct.r(new Ki.Z(r, dn("disableProviderPing")))
                }
            }
            class In {
                constructor(t) {
                    this.name = "multiversx", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Zi, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = an(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || on(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new ct.r(new Ki.Z(r, dn("disableProviderPing")))
                }
            }
            class En {
                constructor(t) {
                    this.name = "near", this.namespace = t.namespace, this.events = dn("events"), this.client = dn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (this.chainId = t, !this.httpProviders[t]) {
                        const r = e || on(`${this.name}:${t}`, this.namespace);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.events.emit(Zi, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || on(t, this.namespace);
                    return typeof r > "u" ? void 0 : new ct.r(new Ki.Z(r, dn("disableProviderPing")))
                }
            }
            var Pn = Object.defineProperty,
                Sn = Object.defineProperties,
                On = Object.getOwnPropertyDescriptors,
                Rn = Object.getOwnPropertySymbols,
                xn = Object.prototype.hasOwnProperty,
                Cn = Object.prototype.propertyIsEnumerable,
                An = (t, e, r) => e in t ? Pn(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Nn = (t, e) => {
                    for (var r in e || (e = {})) xn.call(e, r) && An(t, r, e[r]);
                    if (Rn)
                        for (var r of Rn(e)) Cn.call(e, r) && An(t, r, e[r]);
                    return t
                },
                jn = (t, e) => Sn(t, On(e));
            class Tn {
                constructor(t) {
                    this.events = new(n()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : (0, k.pino)((0, k.getDefaultLoggerOptions)({
                        level: t ? .logger || Bi
                    })), this.disableProviderPing = t ? .disableProviderPing || !1
                }
                static async init(t) {
                    const e = new Tn(t);
                    return await e.initialize(), e
                }
                async request(t, e) {
                    const [r, i] = this.validateChain(e);
                    if (!this.session) throw new Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: Nn({}, t),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(t, e, r) {
                    const i = (new Date).getTime();
                    this.request(t, r).then((t => e(null, (0, ut.formatJsonRpcResult)(i, t)))).catch((t => e(t, void 0)))
                }
                async enable() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var t;
                    if (!this.session) throw new Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (t = this.session) ? void 0 : t.topic,
                        reason: (0, s.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(t) {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(t) {
                    this.shouldAbortPairingAttempt = !1;
                    let e = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                        if (e >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                        const {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: t,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then((t => {
                            this.session = t, this.namespaces || (this.namespaces = ln(t.namespaces), this.persist("namespaces", this.namespaces))
                        })).catch((t => {
                            if (t.message !== Ei) throw t;
                            e++
                        }))
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(t, e) {
                    try {
                        if (!this.session) return;
                        const [r, i] = this.validateChain(t);
                        this.getProvider(r).setDefaultChain(i, e)
                    } catch (B) {
                        if (!/Please call connect/.test(B.message)) throw B
                    }
                }
                async cleanupPendingPairings(t = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    const e = this.client.pairing.getAll();
                    if ((0, s.qt)(e)) {
                        for (const r of e) t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${e.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        const t = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await Vi.init({
                        logger: this.providerOpts.logger || Bi,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const t = [...new Set(Object.keys(this.session.namespaces).map((t => (0, s.M)(t))))];
                    gn("client", this.client), gn("events", this.events), gn("disableProviderPing", this.disableProviderPing), t.forEach((t => {
                        if (!this.session) return;
                        const e = function(t, e) {
                                const r = Object.keys(e.namespaces).filter((e => e.includes(t)));
                                if (!r.length) return [];
                                const i = [];
                                return r.forEach((t => {
                                    const r = e.namespaces[t].accounts;
                                    i.push(...r)
                                })), i
                            }(t, this.session),
                            r = cn(e),
                            i = function(t = {}, e = {}) {
                                const r = un(t),
                                    i = un(e);
                                return Ji.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces),
                            n = jn(Nn({}, i[t]), {
                                accounts: e,
                                chains: r
                            });
                        switch (t) {
                            case "eip155":
                                this.rpcProviders[t] = new vn({
                                    namespace: n
                                });
                                break;
                            case "solana":
                                this.rpcProviders[t] = new mn({
                                    namespace: n
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[t] = new wn({
                                    namespace: n
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[t] = new yn({
                                    namespace: n
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[t] = new _n({
                                    namespace: n
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[t] = new bn({
                                    namespace: n
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[t] = new In({
                                    namespace: n
                                });
                                break;
                            case "near":
                                this.rpcProviders[t] = new En({
                                    namespace: n
                                })
                        }
                    }))
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", (t => {
                        this.events.emit("session_ping", t)
                    })), this.client.on("session_event", (t => {
                        const {
                            params: e
                        } = t, {
                            event: r
                        } = e;
                        if ("accountsChanged" === r.name) {
                            const t = r.data;
                            t && (0, s.qt)(t) && this.events.emit("accountsChanged", t.map(hn))
                        } else if ("chainChanged" === r.name) {
                            const t = e.chainId,
                                r = e.event.data,
                                i = (0, s.M)(t),
                                n = pn(t) !== pn(r) ? `${i}:${pn(r)}` : t;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", t)
                    })), this.client.on("session_update", (({
                        topic: t,
                        params: e
                    }) => {
                        var r;
                        const {
                            namespaces: i
                        } = e, n = null == (r = this.client) ? void 0 : r.session.get(t);
                        this.session = jn(Nn({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: e
                        })
                    })), this.client.on("session_delete", (async t => {
                        await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", jn(Nn({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: t.topic
                        }))
                    })), this.on(Zi, (t => {
                        this.onChainChanged(t, !0)
                    }))
                }
                getProvider(t) {
                    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
                    return this.rpcProviders[t]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach((t => {
                        var e;
                        this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t])
                    }))
                }
                setNamespaces(t) {
                    const {
                        namespaces: e,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = t;
                    e && Object.keys(e).length && (this.namespaces = e), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", e), this.persist("optionalNamespaces", r)
                }
                validateChain(t) {
                    const [e, r] = t ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, r];
                    if (e && !Object.keys(this.namespaces || {}).map((t => (0, s.M)(t))).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
                    if (e && r) return [e, r];
                    const i = (0, s.M)(Object.keys(this.namespaces)[0]);
                    return [i, this.rpcProviders[i].getDefaultChain()]
                }
                async requestAccounts() {
                    const [t] = this.validateChain();
                    return await this.getProvider(t).requestAccounts()
                }
                onChainChanged(t, e = !1) {
                    var r;
                    if (!this.namespaces) return;
                    const [i, n] = this.validateChain(t);
                    e || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(t, e) {
                    this.client.core.storage.setItem(`${Fi}/${t}`, e)
                }
                async getFromStore(t) {
                    return await this.client.core.storage.getItem(`${Fi}/${t}`)
                }
            }
            const qn = Tn,
                Dn = ["eth_sendTransaction", "personal_sign"],
                zn = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Ln = ["chainChanged", "accountsChanged"],
                Mn = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var kn = Object.defineProperty,
                $n = Object.defineProperties,
                Un = Object.getOwnPropertyDescriptors,
                Hn = Object.getOwnPropertySymbols,
                Vn = Object.prototype.hasOwnProperty,
                Kn = Object.prototype.propertyIsEnumerable,
                Bn = (t, e, r) => e in t ? kn(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Fn = (t, e) => {
                    for (var r in e || (e = {})) Vn.call(e, r) && Bn(t, r, e[r]);
                    if (Hn)
                        for (var r of Hn(e)) Kn.call(e, r) && Bn(t, r, e[r]);
                    return t
                },
                Zn = (t, e) => $n(t, Un(e));

            function Wn(t) {
                return Number(t[0].split(":")[1])
            }

            function Jn(t) {
                return `0x${t.toString(16)}`
            }
            class Gn {
                constructor() {
                    this.events = new i.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (t, e) => (this.events.on(t, e), this), this.once = (t, e) => (this.events.once(t, e), this), this.removeListener = (t, e) => (this.events.removeListener(t, e), this), this.off = (t, e) => (this.events.off(t, e), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
                }
                static async init(t) {
                    const e = new Gn;
                    return await e.initialize(t), e
                }
                async request(t) {
                    return await this.signer.request(t, this.formatChainId(this.chainId))
                }
                sendAsync(t, e) {
                    this.signer.sendAsync(t, e, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(t) {
                    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(t);
                    const {
                        required: e,
                        optional: r
                    } = function(t) {
                        const {
                            chains: e,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: o,
                            optionalEvents: a,
                            rpcMap: c
                        } = t;
                        if (!(0, s.qt)(e)) throw new Error("Invalid chains");
                        const u = {
                                chains: e,
                                methods: i || Dn,
                                events: o || Ln,
                                rpcMap: Fn({}, e.length ? {
                                    [Wn(e)]: c[Wn(e)]
                                } : {})
                            },
                            h = o ? .filter((t => !Ln.includes(t))),
                            l = i ? .filter((t => !Dn.includes(t)));
                        if (!r && !a && !n && (null == h || !h.length) && (null == l || !l.length)) return {
                            required: e.length ? u : void 0
                        };
                        const p = {
                            chains: [...new Set(h ? .length && l ? .length || !r ? u.chains.concat(r || []) : r)],
                            methods: [...new Set(u.methods.concat(null != n && n.length ? n : zn))],
                            events: [...new Set(u.events.concat(null != a && a.length ? a : Mn))],
                            rpcMap: c
                        };
                        return {
                            required: e.length ? u : void 0,
                            optional: r.length ? p : void 0
                        }
                    }(this.rpc);
                    try {
                        const i = await new Promise((async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((t => {
                                !t.open && !this.signer.session && (this.signer.abortPairingAttempt(), n(new Error("Connection request reset. Please try again.")))
                            }))), await this.signer.connect(Zn(Fn({
                                namespaces: Fn({}, e && {
                                    [this.namespace]: e
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: t ? .pairingTopic
                            })).then((t => {
                                i(t)
                            })).catch((t => {
                                n(new Error(t.message))
                            }))
                        }));
                        if (!i) return;
                        const n = (0, s.gu)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: Jn(this.chainId)
                        })
                    } catch (U) {
                        throw this.signer.logger.error(U), U
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", (t => {
                        const {
                            params: e
                        } = t, {
                            event: r
                        } = e;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", t)
                    })), this.signer.on("chainChanged", (t => {
                        const e = parseInt(t);
                        this.chainId = e, this.events.emit("chainChanged", Jn(this.chainId)), this.persist()
                    })), this.signer.on("session_update", (t => {
                        this.events.emit("session_update", t)
                    })), this.signer.on("session_delete", (t => {
                        this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", Zn(Fn({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: t.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    })), this.signer.on("display_uri", (t => {
                        var e, r;
                        this.rpc.showQrModal && (null == (e = this.modal) || e.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: t
                        })), this.events.emit("display_uri", t)
                    }))
                }
                switchEthereumChain(t) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: t.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(t) {
                    return "string" == typeof t && t.startsWith(`${this.namespace}:`)
                }
                formatChainId(t) {
                    return `${this.namespace}:${t}`
                }
                parseChainId(t) {
                    return Number(t.split(":")[1])
                }
                setChainIds(t) {
                    const e = t.filter((t => this.isCompatibleChainId(t))).map((t => this.parseChainId(t)));
                    e.length && (this.chainId = e[0], this.events.emit("chainChanged", Jn(this.chainId)), this.persist())
                }
                setChainId(t) {
                    if (this.isCompatibleChainId(t)) {
                        const e = this.parseChainId(t);
                        this.chainId = e, this.switchEthereumChain(e)
                    }
                }
                parseAccountId(t) {
                    const [e, r, i] = t.split(":");
                    return {
                        chainId: `${e}:${r}`,
                        address: i
                    }
                }
                setAccounts(t) {
                    this.accounts = t.filter((t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId)).map((t => this.parseAccountId(t).address)), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(t) {
                    var e, r;
                    const i = null != (e = t ? .chains) ? e : [],
                        n = null != (r = t ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const o = i.length ? t ? .methods || Dn : [],
                        a = i.length ? t ? .events || Ln : [],
                        c = t ? .optionalMethods || [],
                        u = t ? .optionalEvents || [],
                        h = t ? .rpcMap || this.buildRpcMap(s, t.projectId),
                        l = t ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map((t => this.formatChainId(t))),
                        optionalChains: n.map((t => this.formatChainId(t))),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: h,
                        showQrModal: !(null == t || !t.showQrModal),
                        qrModalOptions: l,
                        projectId: t.projectId,
                        metadata: t.metadata
                    }
                }
                buildRpcMap(t, e) {
                    const r = {};
                    return t.forEach((t => {
                        r[t] = this.getRpcUrl(t, e)
                    })), r
                }
                async initialize(t) {
                    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? Wn(this.rpc.chains) : Wn(this.rpc.optionalChains), this.signer = await qn.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: t.disableProviderPing,
                            relayUrl: t.relayUrl,
                            storageOptions: t.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let t;
                        try {
                            const {
                                WalletConnectModal: e
                            } = await r.e(9343).then(r.bind(r, 59343));
                            t = e
                        } catch {
                            throw new Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (t) try {
                            this.modal = new t(Fn({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), new Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(t) {
                    if (!t) return;
                    const {
                        chains: e,
                        optionalChains: r,
                        rpcMap: i
                    } = t;
                    e && (0, s.qt)(e) && (this.rpc.chains = e.map((t => this.formatChainId(t))), e.forEach((t => {
                        this.rpc.rpcMap[t] = i ? .[t] || this.getRpcUrl(t)
                    }))), r && (0, s.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map((t => this.formatChainId(t))), r.forEach((t => {
                        this.rpc.rpcMap[t] = i ? .[t] || this.getRpcUrl(t)
                    })))
                }
                getRpcUrl(t, e) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(t ? [this.formatChainId(t)] : e ? .accounts), this.setAccounts(e ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(t) {
                    return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map((t => this.parseAccount(t)))
                }
            }
            const Qn = Gn
        },
        38200: function(t, e, r) {
            "use strict";
            r.d(e, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        30997: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(38200)
        },
        32568: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0;
            const i = r(66736);
            e.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, e.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        20426: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            r(39653).__exportStar(r(32568), e)
        },
        38969: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HeartBeat = void 0;
            const i = r(39653),
                n = r(17187),
                s = r(66736),
                o = r(1614),
                a = r(20426);
            class c extends o.IHeartBeat {
                constructor(t) {
                    super(t), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null === t || void 0 === t ? void 0 : t.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(t) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        const e = new c(t);
                        return yield e.init(), e
                    }))
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        yield this.initialize()
                    }))
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        this.intervalRef = setInterval((() => this.pulse()), s.toMiliseconds(this.interval))
                    }))
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            e.HeartBeat = c
        },
        90772: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(39653);
            i.__exportStar(r(38969), e), i.__exportStar(r(1614), e), i.__exportStar(r(20426), e)
        },
        44174: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IHeartBeat = void 0;
            const i = r(30997);
            class n extends i.IEvents {
                constructor(t) {
                    super()
                }
            }
            e.IHeartBeat = n
        },
        1614: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            r(39653).__exportStar(r(44174), e)
        },
        39653: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return _
                },
                __asyncGenerator: function() {
                    return w
                },
                __asyncValues: function() {
                    return b
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return h
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return I
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            var i = function(t, e) {
                return i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                }, i(t, e)
            };

            function n(t, e) {
                function r() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var s = function() {
                return s = Object.assign || function(t) {
                    for (var e, r = 1, i = arguments.length; r < i; r++)
                        for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }, s.apply(this, arguments)
            };

            function o(t, e) {
                var r = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var n = 0;
                    for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]])
                }
                return r
            }

            function a(t, e, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) o = Reflect.decorate(t, e, r, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(e, r, o) : n(e, r)) || o);
                return s > 3 && o && Object.defineProperty(e, r, o), o
            }

            function c(t, e) {
                return function(r, i) {
                    e(r, i, t)
                }
            }

            function u(t, e) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function h(t, e, r, i) {
                return new(r || (r = Promise))((function(n, s) {
                    function o(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, a)
                    }
                    c((i = i.apply(t, e || [])).next())
                }))
            }

            function l(t, e) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = e.call(t, o)
                            } catch (a) {
                                s = [6, a], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(t, e, r, i) {
                void 0 === i && (i = r), t[i] = e[r]
            }

            function f(t, e) {
                for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }

            function d(t) {
                var e = "function" === typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    i = 0;
                if (r) return r.call(t);
                if (t && "number" === typeof t.length) return {
                    next: function() {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(t, e) {
                var r = "function" === typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var i, n, s = r.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (a) {
                    n = {
                        error: a
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
                return t
            }

            function v() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                var i = Array(t),
                    n = 0;
                for (e = 0; e < r; e++)
                    for (var s = arguments[e], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(t) {
                return this instanceof m ? (this.v = t, this) : new m(t)
            }

            function w(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(t, e || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(t) {
                    n[t] && (i[t] = function(e) {
                        return new Promise((function(r, i) {
                            s.push([t, e, r, i]) > 1 || a(t, e)
                        }))
                    })
                }

                function a(t, e) {
                    try {
                        (r = n[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (i) {
                        h(s[0][3], i)
                    }
                    var r
                }

                function c(t) {
                    a("next", t)
                }

                function u(t) {
                    a("throw", t)
                }

                function h(t, e) {
                    t(e), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function _(t) {
                var e, r;
                return e = {}, i("next"), i("throw", (function(t) {
                    throw t
                })), i("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function i(i, n) {
                    e[i] = t[i] ? function(e) {
                        return (r = !r) ? {
                            value: m(t[i](e)),
                            done: "return" === i
                        } : n ? n(e) : e
                    } : n
                }
            }

            function b(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = d(t), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function i(r) {
                    e[r] = t[r] && function(e) {
                        return new Promise((function(i, n) {
                            (function(t, e, r, i) {
                                Promise.resolve(i).then((function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }), e)
                            })(i, n, (e = t[r](e)).done, e.value)
                        }))
                    }
                }
            }

            function I(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }

            function E(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }

            function P(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function S(t, e) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }

            function O(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                return e.set(t, r), r
            }
        },
        65727: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PINO_CUSTOM_CONTEXT_KEY = e.PINO_LOGGER_DEFAULTS = void 0, e.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, e.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        9107: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pino = void 0;
            const i = r(57121),
                n = i.__importDefault(r(36559));
            Object.defineProperty(e, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(65727), e), i.__exportStar(r(58048), e)
        },
        58048: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.generateChildLogger = e.formatChildLoggerContext = e.getLoggerContext = e.setBrowserLoggerContext = e.getBrowserLoggerContext = e.getDefaultLoggerOptions = void 0;
            const i = r(65727);

            function n(t, e = i.PINO_CUSTOM_CONTEXT_KEY) {
                return t[e] || ""
            }

            function s(t, e, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                return t[r] = e, t
            }

            function o(t, e = i.PINO_CUSTOM_CONTEXT_KEY) {
                let r = "";
                return r = "undefined" === typeof t.bindings ? n(t, e) : t.bindings().context || "", r
            }

            function a(t, e, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                const n = o(t, r);
                return n.trim() ? `${n}/${e}` : e
            }
            e.getDefaultLoggerOptions = function(t) {
                return Object.assign(Object.assign({}, t), {
                    level: (null === t || void 0 === t ? void 0 : t.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, e.getBrowserLoggerContext = n, e.setBrowserLoggerContext = s, e.getLoggerContext = o, e.formatChildLoggerContext = a, e.generateChildLogger = function(t, e, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                const n = a(t, e, r);
                return s(t.child({
                    context: n
                }), n, r)
            }
        },
        57121: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return _
                },
                __asyncGenerator: function() {
                    return w
                },
                __asyncValues: function() {
                    return b
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return h
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return I
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            var i = function(t, e) {
                return i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                }, i(t, e)
            };

            function n(t, e) {
                function r() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var s = function() {
                return s = Object.assign || function(t) {
                    for (var e, r = 1, i = arguments.length; r < i; r++)
                        for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }, s.apply(this, arguments)
            };

            function o(t, e) {
                var r = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var n = 0;
                    for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]])
                }
                return r
            }

            function a(t, e, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) o = Reflect.decorate(t, e, r, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(e, r, o) : n(e, r)) || o);
                return s > 3 && o && Object.defineProperty(e, r, o), o
            }

            function c(t, e) {
                return function(r, i) {
                    e(r, i, t)
                }
            }

            function u(t, e) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function h(t, e, r, i) {
                return new(r || (r = Promise))((function(n, s) {
                    function o(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, a)
                    }
                    c((i = i.apply(t, e || [])).next())
                }))
            }

            function l(t, e) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = e.call(t, o)
                            } catch (a) {
                                s = [6, a], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(t, e, r, i) {
                void 0 === i && (i = r), t[i] = e[r]
            }

            function f(t, e) {
                for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }

            function d(t) {
                var e = "function" === typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    i = 0;
                if (r) return r.call(t);
                if (t && "number" === typeof t.length) return {
                    next: function() {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(t, e) {
                var r = "function" === typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var i, n, s = r.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (a) {
                    n = {
                        error: a
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
                return t
            }

            function v() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                var i = Array(t),
                    n = 0;
                for (e = 0; e < r; e++)
                    for (var s = arguments[e], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(t) {
                return this instanceof m ? (this.v = t, this) : new m(t)
            }

            function w(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(t, e || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(t) {
                    n[t] && (i[t] = function(e) {
                        return new Promise((function(r, i) {
                            s.push([t, e, r, i]) > 1 || a(t, e)
                        }))
                    })
                }

                function a(t, e) {
                    try {
                        (r = n[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (i) {
                        h(s[0][3], i)
                    }
                    var r
                }

                function c(t) {
                    a("next", t)
                }

                function u(t) {
                    a("throw", t)
                }

                function h(t, e) {
                    t(e), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function _(t) {
                var e, r;
                return e = {}, i("next"), i("throw", (function(t) {
                    throw t
                })), i("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function i(i, n) {
                    e[i] = t[i] ? function(e) {
                        return (r = !r) ? {
                            value: m(t[i](e)),
                            done: "return" === i
                        } : n ? n(e) : e
                    } : n
                }
            }

            function b(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = d(t), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function i(r) {
                    e[r] = t[r] && function(e) {
                        return new Promise((function(i, n) {
                            (function(t, e, r, i) {
                                Promise.resolve(i).then((function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }), e)
                            })(i, n, (e = t[r](e)).done, e.value)
                        }))
                    }
                }
            }

            function I(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }

            function E(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }

            function P(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function S(t, e) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }

            function O(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                return e.set(t, r), r
            }
        },
        43014: function() {},
        72307: function(t, e, r) {
            t = r.nmd(t);
            var i = "__lodash_hash_undefined__",
                n = 9007199254740991,
                s = "[object Arguments]",
                o = "[object Array]",
                a = "[object Boolean]",
                c = "[object Date]",
                u = "[object Error]",
                h = "[object Function]",
                l = "[object Map]",
                p = "[object Number]",
                f = "[object Object]",
                d = "[object Promise]",
                g = "[object RegExp]",
                y = "[object Set]",
                v = "[object String]",
                m = "[object Symbol]",
                w = "[object WeakMap]",
                _ = "[object ArrayBuffer]",
                b = "[object DataView]",
                I = /^\[object .+?Constructor\]$/,
                E = /^(?:0|[1-9]\d*)$/,
                P = {};
            P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, P[s] = P[o] = P[_] = P[a] = P[b] = P[c] = P[u] = P[h] = P[l] = P[p] = P[f] = P[g] = P[y] = P[v] = P[w] = !1;
            var S = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                O = "object" == typeof self && self && self.Object === Object && self,
                R = S || O || Function("return this")(),
                x = e && !e.nodeType && e,
                C = x && t && !t.nodeType && t,
                A = C && C.exports === x,
                N = A && S.process,
                j = function() {
                    try {
                        return N && N.binding && N.binding("util")
                    } catch (t) {}
                }(),
                T = j && j.isTypedArray;

            function q(t, e) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                    if (e(t[r], r, t)) return !0;
                return !1
            }

            function D(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t, i) {
                    r[++e] = [i, t]
                })), r
            }

            function z(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t) {
                    r[++e] = t
                })), r
            }
            var L, M, k = Array.prototype,
                $ = Function.prototype,
                U = Object.prototype,
                H = R["__core-js_shared__"],
                V = $.toString,
                K = U.hasOwnProperty,
                B = function() {
                    var t = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
                    return t ? "Symbol(src)_1." + t : ""
                }(),
                F = U.toString,
                Z = RegExp("^" + V.call(K).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                W = A ? R.Buffer : void 0,
                J = R.Symbol,
                G = R.Uint8Array,
                Q = U.propertyIsEnumerable,
                Y = k.splice,
                X = J ? J.toStringTag : void 0,
                tt = Object.getOwnPropertySymbols,
                et = W ? W.isBuffer : void 0,
                rt = (L = Object.keys, M = Object, function(t) {
                    return L(M(t))
                }),
                it = Nt(R, "DataView"),
                nt = Nt(R, "Map"),
                st = Nt(R, "Promise"),
                ot = Nt(R, "Set"),
                at = Nt(R, "WeakMap"),
                ct = Nt(Object, "create"),
                ut = Dt(it),
                ht = Dt(nt),
                lt = Dt(st),
                pt = Dt(ot),
                ft = Dt(at),
                dt = J ? J.prototype : void 0,
                gt = dt ? dt.valueOf : void 0;

            function yt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function vt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function mt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function wt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new mt; ++e < r;) this.add(t[e])
            }

            function _t(t) {
                var e = this.__data__ = new vt(t);
                this.size = e.size
            }

            function bt(t, e) {
                var r = Mt(t),
                    i = !r && Lt(t),
                    n = !r && !i && kt(t),
                    s = !r && !i && !n && Kt(t),
                    o = r || i || n || s,
                    a = o ? function(t, e) {
                        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
                        return i
                    }(t.length, String) : [],
                    c = a.length;
                for (var u in t) !e && !K.call(t, u) || o && ("length" == u || n && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || qt(u, c)) || a.push(u);
                return a
            }

            function It(t, e) {
                for (var r = t.length; r--;)
                    if (zt(t[r][0], e)) return r;
                return -1
            }

            function Et(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : X && X in Object(t) ? function(t) {
                    var e = K.call(t, X),
                        r = t[X];
                    try {
                        t[X] = void 0;
                        var i = !0
                    } catch (s) {}
                    var n = F.call(t);
                    i && (e ? t[X] = r : delete t[X]);
                    return n
                }(t) : function(t) {
                    return F.call(t)
                }(t)
            }

            function Pt(t) {
                return Vt(t) && Et(t) == s
            }

            function St(t, e, r, i, n) {
                return t === e || (null == t || null == e || !Vt(t) && !Vt(e) ? t !== t && e !== e : function(t, e, r, i, n, h) {
                    var d = Mt(t),
                        w = Mt(e),
                        I = d ? o : Tt(t),
                        E = w ? o : Tt(e),
                        P = (I = I == s ? f : I) == f,
                        S = (E = E == s ? f : E) == f,
                        O = I == E;
                    if (O && kt(t)) {
                        if (!kt(e)) return !1;
                        d = !0, P = !1
                    }
                    if (O && !P) return h || (h = new _t), d || Kt(t) ? xt(t, e, r, i, n, h) : function(t, e, r, i, n, s, o) {
                        switch (r) {
                            case b:
                                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                t = t.buffer, e = e.buffer;
                            case _:
                                return !(t.byteLength != e.byteLength || !s(new G(t), new G(e)));
                            case a:
                            case c:
                            case p:
                                return zt(+t, +e);
                            case u:
                                return t.name == e.name && t.message == e.message;
                            case g:
                            case v:
                                return t == e + "";
                            case l:
                                var h = D;
                            case y:
                                var f = 1 & i;
                                if (h || (h = z), t.size != e.size && !f) return !1;
                                var d = o.get(t);
                                if (d) return d == e;
                                i |= 2, o.set(t, e);
                                var w = xt(h(t), h(e), i, n, s, o);
                                return o.delete(t), w;
                            case m:
                                if (gt) return gt.call(t) == gt.call(e)
                        }
                        return !1
                    }(t, e, I, r, i, n, h);
                    if (!(1 & r)) {
                        var R = P && K.call(t, "__wrapped__"),
                            x = S && K.call(e, "__wrapped__");
                        if (R || x) {
                            var C = R ? t.value() : t,
                                A = x ? e.value() : e;
                            return h || (h = new _t), n(C, A, r, i, h)
                        }
                    }
                    if (!O) return !1;
                    return h || (h = new _t),
                        function(t, e, r, i, n, s) {
                            var o = 1 & r,
                                a = Ct(t),
                                c = a.length,
                                u = Ct(e).length;
                            if (c != u && !o) return !1;
                            var h = c;
                            for (; h--;) {
                                var l = a[h];
                                if (!(o ? l in e : K.call(e, l))) return !1
                            }
                            var p = s.get(t);
                            if (p && s.get(e)) return p == e;
                            var f = !0;
                            s.set(t, e), s.set(e, t);
                            var d = o;
                            for (; ++h < c;) {
                                var g = t[l = a[h]],
                                    y = e[l];
                                if (i) var v = o ? i(y, g, l, e, t, s) : i(g, y, l, t, e, s);
                                if (!(void 0 === v ? g === y || n(g, y, r, i, s) : v)) {
                                    f = !1;
                                    break
                                }
                                d || (d = "constructor" == l)
                            }
                            if (f && !d) {
                                var m = t.constructor,
                                    w = e.constructor;
                                m == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof m && m instanceof m && "function" == typeof w && w instanceof w || (f = !1)
                            }
                            return s.delete(t), s.delete(e), f
                        }(t, e, r, i, n, h)
                }(t, e, r, i, St, n))
            }

            function Ot(t) {
                return !(!Ht(t) || function(t) {
                    return !!B && B in t
                }(t)) && ($t(t) ? Z : I).test(Dt(t))
            }

            function Rt(t) {
                if (! function(t) {
                        var e = t && t.constructor,
                            r = "function" == typeof e && e.prototype || U;
                        return t === r
                    }(t)) return rt(t);
                var e = [];
                for (var r in Object(t)) K.call(t, r) && "constructor" != r && e.push(r);
                return e
            }

            function xt(t, e, r, i, n, s) {
                var o = 1 & r,
                    a = t.length,
                    c = e.length;
                if (a != c && !(o && c > a)) return !1;
                var u = s.get(t);
                if (u && s.get(e)) return u == e;
                var h = -1,
                    l = !0,
                    p = 2 & r ? new wt : void 0;
                for (s.set(t, e), s.set(e, t); ++h < a;) {
                    var f = t[h],
                        d = e[h];
                    if (i) var g = o ? i(d, f, h, e, t, s) : i(f, d, h, t, e, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        l = !1;
                        break
                    }
                    if (p) {
                        if (!q(e, (function(t, e) {
                                if (o = e, !p.has(o) && (f === t || n(f, t, r, i, s))) return p.push(e);
                                var o
                            }))) {
                            l = !1;
                            break
                        }
                    } else if (f !== d && !n(f, d, r, i, s)) {
                        l = !1;
                        break
                    }
                }
                return s.delete(t), s.delete(e), l
            }

            function Ct(t) {
                return function(t, e, r) {
                    var i = e(t);
                    return Mt(t) ? i : function(t, e) {
                        for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
                        return t
                    }(i, r(t))
                }(t, Bt, jt)
            }

            function At(t, e) {
                var r = t.__data__;
                return function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }

            function Nt(t, e) {
                var r = function(t, e) {
                    return null == t ? void 0 : t[e]
                }(t, e);
                return Ot(r) ? r : void 0
            }
            yt.prototype.clear = function() {
                this.__data__ = ct ? ct(null) : {}, this.size = 0
            }, yt.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, yt.prototype.get = function(t) {
                var e = this.__data__;
                if (ct) {
                    var r = e[t];
                    return r === i ? void 0 : r
                }
                return K.call(e, t) ? e[t] : void 0
            }, yt.prototype.has = function(t) {
                var e = this.__data__;
                return ct ? void 0 !== e[t] : K.call(e, t)
            }, yt.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = ct && void 0 === e ? i : e, this
            }, vt.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, vt.prototype.delete = function(t) {
                var e = this.__data__,
                    r = It(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : Y.call(e, r, 1), --this.size, !0)
            }, vt.prototype.get = function(t) {
                var e = this.__data__,
                    r = It(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, vt.prototype.has = function(t) {
                return It(this.__data__, t) > -1
            }, vt.prototype.set = function(t, e) {
                var r = this.__data__,
                    i = It(r, t);
                return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
            }, mt.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new yt,
                    map: new(nt || vt),
                    string: new yt
                }
            }, mt.prototype.delete = function(t) {
                var e = At(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, mt.prototype.get = function(t) {
                return At(this, t).get(t)
            }, mt.prototype.has = function(t) {
                return At(this, t).has(t)
            }, mt.prototype.set = function(t, e) {
                var r = At(this, t),
                    i = r.size;
                return r.set(t, e), this.size += r.size == i ? 0 : 1, this
            }, wt.prototype.add = wt.prototype.push = function(t) {
                return this.__data__.set(t, i), this
            }, wt.prototype.has = function(t) {
                return this.__data__.has(t)
            }, _t.prototype.clear = function() {
                this.__data__ = new vt, this.size = 0
            }, _t.prototype.delete = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }, _t.prototype.get = function(t) {
                return this.__data__.get(t)
            }, _t.prototype.has = function(t) {
                return this.__data__.has(t)
            }, _t.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof vt) {
                    var i = r.__data__;
                    if (!nt || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new mt(i)
                }
                return r.set(t, e), this.size = r.size, this
            };
            var jt = tt ? function(t) {
                    return null == t ? [] : (t = Object(t), function(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                            var o = t[r];
                            e(o, r, t) && (s[n++] = o)
                        }
                        return s
                    }(tt(t), (function(e) {
                        return Q.call(t, e)
                    })))
                } : function() {
                    return []
                },
                Tt = Et;

            function qt(t, e) {
                return !!(e = null == e ? n : e) && ("number" == typeof t || E.test(t)) && t > -1 && t % 1 == 0 && t < e
            }

            function Dt(t) {
                if (null != t) {
                    try {
                        return V.call(t)
                    } catch (e) {}
                    try {
                        return t + ""
                    } catch (e) {}
                }
                return ""
            }

            function zt(t, e) {
                return t === e || t !== t && e !== e
            }(it && Tt(new it(new ArrayBuffer(1))) != b || nt && Tt(new nt) != l || st && Tt(st.resolve()) != d || ot && Tt(new ot) != y || at && Tt(new at) != w) && (Tt = function(t) {
                var e = Et(t),
                    r = e == f ? t.constructor : void 0,
                    i = r ? Dt(r) : "";
                if (i) switch (i) {
                    case ut:
                        return b;
                    case ht:
                        return l;
                    case lt:
                        return d;
                    case pt:
                        return y;
                    case ft:
                        return w
                }
                return e
            });
            var Lt = Pt(function() {
                    return arguments
                }()) ? Pt : function(t) {
                    return Vt(t) && K.call(t, "callee") && !Q.call(t, "callee")
                },
                Mt = Array.isArray;
            var kt = et || function() {
                return !1
            };

            function $t(t) {
                if (!Ht(t)) return !1;
                var e = Et(t);
                return e == h || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }

            function Ut(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
            }

            function Ht(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }

            function Vt(t) {
                return null != t && "object" == typeof t
            }
            var Kt = T ? function(t) {
                return function(e) {
                    return t(e)
                }
            }(T) : function(t) {
                return Vt(t) && Ut(t.length) && !!P[Et(t)]
            };

            function Bt(t) {
                return null != (e = t) && Ut(e.length) && !$t(e) ? bt(t) : Rt(t);
                var e
            }
            t.exports = function(t, e) {
                return St(t, e)
            }
        },
        85346: function(t) {
            "use strict";

            function e(t) {
                try {
                    return JSON.stringify(t)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            t.exports = function(t, r, i) {
                var n = i && i.stringify || e;
                if ("object" === typeof t && null !== t) {
                    var s = r.length + 1;
                    if (1 === s) return t;
                    var o = new Array(s);
                    o[0] = n(t);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" !== typeof t) return t;
                var c = r.length;
                if (0 === c) return t;
                for (var u = "", h = 0, l = -1, p = t && t.length || 0, f = 0; f < p;) {
                    if (37 === t.charCodeAt(f) && f + 1 < p) {
                        switch (l = l > -1 ? l : 0, t.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (h >= c) break;
                                if (null == r[h]) break;
                                l < f && (u += t.slice(l, f)), u += Number(r[h]), l = f + 2, f++;
                                break;
                            case 105:
                                if (h >= c) break;
                                if (null == r[h]) break;
                                l < f && (u += t.slice(l, f)), u += Math.floor(Number(r[h])), l = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (h >= c) break;
                                if (void 0 === r[h]) break;
                                l < f && (u += t.slice(l, f));
                                var d = typeof r[h];
                                if ("string" === d) {
                                    u += "'" + r[h] + "'", l = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[h].name || "<anonymous>", l = f + 2, f++;
                                    break
                                }
                                u += n(r[h]), l = f + 2, f++;
                                break;
                            case 115:
                                if (h >= c) break;
                                l < f && (u += t.slice(l, f)), u += String(r[h]), l = f + 2, f++;
                                break;
                            case 37:
                                l < f && (u += t.slice(l, f)), u += "%", l = f + 2, f++, h--
                        }++h
                    }++f
                }
                if (-1 === l) return t;
                l < p && (u += t.slice(l));
                return u
            }
        },
        36559: function(t, e, r) {
            "use strict";
            const i = r(85346);
            t.exports = o;
            const n = function() {
                    function t(t) {
                        return "undefined" !== typeof t && t
                    }
                    try {
                        return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch (e) {
                        return t(self) || t(window) || t(this) || {}
                    }
                }().console || {},
                s = {
                    mapHttpRequest: d,
                    mapHttpResponse: d,
                    wrapRequestSerializer: g,
                    wrapResponseSerializer: g,
                    wrapErrorSerializer: g,
                    req: d,
                    res: d,
                    err: function(t) {
                        const e = {
                            type: t.constructor.name,
                            msg: t.message,
                            stack: t.stack
                        };
                        for (const r in t) void 0 === e[r] && (e[r] = t[r]);
                        return e
                    }
                };

            function o(t) {
                (t = t || {}).browser = t.browser || {};
                const e = t.browser.transmit;
                if (e && "function" !== typeof e.send) throw Error("pino: transmit option must have a send function");
                const r = t.browser.write || n;
                t.browser.write && (t.browser.asObject = !0);
                const i = t.serializers || {},
                    s = function(t, e) {
                        if (Array.isArray(t)) return t.filter((function(t) {
                            return "!stdSerializers.err" !== t
                        }));
                        return !0 === t && Object.keys(e)
                    }(t.browser.serialize, i);
                let c = t.browser.serialize;
                Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (c = !1);
                "function" === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === t.enabled && (t.level = "silent");
                const l = t.level || "info",
                    d = Object.create(r);
                d.log || (d.log = y), Object.defineProperty(d, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(d, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(t) {
                        if ("silent" !== t && !this.levels.values[t]) throw Error("unknown level " + t);
                        this._level = t, a(g, d, "error", "log"), a(g, d, "fatal", "error"), a(g, d, "warn", "error"), a(g, d, "info", "log"), a(g, d, "debug", "log"), a(g, d, "trace", "log")
                    }
                });
                const g = {
                    transmit: e,
                    serialize: s,
                    asObject: t.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: f(t)
                };
                return d.levels = o.levels, d.level = l, d.setMaxListeners = d.getMaxListeners = d.emit = d.addListener = d.on = d.prependListener = d.once = d.prependOnceListener = d.removeListener = d.removeAllListeners = d.listeners = d.listenerCount = d.eventNames = d.write = d.flush = y, d.serializers = i, d._serialize = s, d._stdErrSerialize = c, d.child = function(r, n) {
                    if (!r) throw new Error("missing bindings for child Pino");
                    n = n || {}, s && r.serializers && (n.serializers = r.serializers);
                    const o = n.serializers;
                    if (s && o) {
                        var a = Object.assign({}, i, o),
                            c = !0 === t.browser.serialize ? Object.keys(a) : s;
                        delete r.serializers, u([r], c, a, this._stdErrSerialize)
                    }

                    function l(t) {
                        this._childLevel = 1 + (0 | t._childLevel), this.error = h(t, r, "error"), this.fatal = h(t, r, "fatal"), this.warn = h(t, r, "warn"), this.info = h(t, r, "info"), this.debug = h(t, r, "debug"), this.trace = h(t, r, "trace"), a && (this.serializers = a, this._serialize = c), e && (this._logEvent = p([].concat(t._logEvent.bindings, r)))
                    }
                    return l.prototype = this, new l(this)
                }, e && (d._logEvent = p()), d
            }

            function a(t, e, r, i) {
                const s = Object.getPrototypeOf(e);
                e[r] = e.levelVal > e.levels.values[r] ? y : s[r] ? s[r] : n[r] || n[i] || y,
                    function(t, e, r) {
                        if (!t.transmit && e[r] === y) return;
                        e[r] = (i = e[r], function() {
                            const s = t.timestamp(),
                                a = new Array(arguments.length),
                                h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                            for (var p = 0; p < a.length; p++) a[p] = arguments[p];
                            if (t.serialize && !t.asObject && u(a, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? i.call(h, c(this, r, a, s)) : i.apply(h, a), t.transmit) {
                                const i = t.transmit.level || e.level,
                                    n = o.levels.values[i],
                                    c = o.levels.values[r];
                                if (c < n) return;
                                l(this, {
                                    ts: s,
                                    methodLevel: r,
                                    methodValue: c,
                                    transmitLevel: i,
                                    transmitValue: o.levels.values[t.transmit.level || e.level],
                                    send: t.transmit.send,
                                    val: e.levelVal
                                }, a)
                            }
                        });
                        var i
                    }(t, e, r)
            }

            function c(t, e, r, n) {
                t._serialize && u(r, t._serialize, t.serializers, t._stdErrSerialize);
                const s = r.slice();
                let a = s[0];
                const c = {};
                n && (c.time = n), c.level = o.levels.values[e];
                let h = 1 + (0 | t._childLevel);
                if (h < 1 && (h = 1), null !== a && "object" === typeof a) {
                    for (; h-- && "object" === typeof s[0];) Object.assign(c, s.shift());
                    a = s.length ? i(s.shift(), s) : void 0
                } else "string" === typeof a && (a = i(s.shift(), s));
                return void 0 !== a && (c.msg = a), c
            }

            function u(t, e, r, i) {
                for (const n in t)
                    if (i && t[n] instanceof Error) t[n] = o.stdSerializers.err(t[n]);
                    else if ("object" === typeof t[n] && !Array.isArray(t[n]))
                    for (const i in t[n]) e && e.indexOf(i) > -1 && i in r && (t[n][i] = r[i](t[n][i]))
            }

            function h(t, e, r) {
                return function() {
                    const i = new Array(1 + arguments.length);
                    i[0] = e;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return t[r].apply(this, i)
                }
            }

            function l(t, e, r) {
                const i = e.send,
                    n = e.ts,
                    s = e.methodLevel,
                    o = e.methodValue,
                    a = e.val,
                    c = t._logEvent.bindings;
                u(r, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize), t._logEvent.ts = n, t._logEvent.messages = r.filter((function(t) {
                    return -1 === c.indexOf(t)
                })), t._logEvent.level.label = s, t._logEvent.level.value = o, i(s, t._logEvent, a), t._logEvent = p(c)
            }

            function p(t) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: t || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function f(t) {
                return "function" === typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? v : m
            }

            function d() {
                return {}
            }

            function g(t) {
                return t
            }

            function y() {}

            function v() {
                return !1
            }

            function m() {
                return Date.now()
            }
            o.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
                nullTime: v,
                epochTime: m,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);