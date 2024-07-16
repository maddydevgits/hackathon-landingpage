"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4572], {
        64572: function(E, A, I) {
            var _, t, e, T, d, L, N, R, i, a, n, C, r, O, o, S, c, D, s, u, G, K, P, l, p, U, H, M, m, F, f, V, g, B, h, b, J, y, k, v, W, j, Y, w, Z, x, X, z, q, Q, $, EE, AE, IE, _E, tE, eE, TE, dE, LE, NE, RE, iE, aE, nE, CE, rE, OE, oE, SE, cE, DE, sE, uE, GE, KE, PE, lE, pE, UE, HE, ME, mE, FE, fE, VE, gE, BE, hE, bE, JE, yE, kE, vE, WE, jE, YE, wE, ZE, xE, XE, zE, qE, QE, $E, EA, AA, IA, _A, tA, eA, TA, dA, LA, NA, RA, iA, aA, nA, CA, rA, OA, oA, SA, cA, DA, sA, uA, GA, KA, PA, lA, pA, UA, HA, MA, mA, FA, fA, VA, gA, BA, hA, bA, JA, yA, kA, vA, WA, jA, YA, wA, ZA, xA, XA, zA, qA, QA, $A, EI, AI, II, _I, tI, eI, TI, dI, LI, NI, RI, iI, aI, nI, CI, rI, OI, oI, SI, cI, DI, sI, uI, GI, KI, PI, lI, pI, UI, HI, MI, mI, FI, fI, VI, gI, BI, hI, bI, JI, yI, kI, vI;
            I.d(A, {
                    Asd: function() {
                        return _
                    },
                    Bm0: function() {
                        return AE
                    },
                    C2Q: function() {
                        return W
                    },
                    Fa6: function() {
                        return D
                    },
                    FnD: function() {
                        return oE
                    },
                    GmF: function() {
                        return EE
                    },
                    N$N: function() {
                        return eE
                    },
                    NQx: function() {
                        return r
                    },
                    P80: function() {
                        return L
                    },
                    Sqi: function() {
                        return P
                    },
                    a4y: function() {
                        return O
                    },
                    aYQ: function() {
                        return UI
                    },
                    b1t: function() {
                        return z
                    },
                    i4Y: function() {
                        return TE
                    },
                    nIg: function() {
                        return c
                    },
                    nJO: function() {
                        return t
                    },
                    nJu: function() {
                        return CE
                    },
                    wN$: function() {
                        return y
                    },
                    wqr: function() {
                        return S
                    },
                    ymO: function() {
                        return o
                    },
                    zGj: function() {
                        return YE
                    }
                }),
                function(E) {
                    E.asc = "asc", E.desc = "desc"
                }(_ || (_ = {})),
                function(E) {
                    E.default = "default", E.insensitive = "insensitive"
                }(t || (t = {})),
                function(E) {
                    E.EXPIRED = "EXPIRED", E.FAILED = "FAILED", E.FINISHED = "FINISHED", E.INVALIDATED = "INVALIDATED", E.PENDING = "PENDING"
                }(e || (e = {})),
                function(E) {
                    E.GO = "GO", E.NO_GO = "NO_GO"
                }(T || (T = {})),
                function(E) {
                    E.CREATE_PROJECT = "CREATE_PROJECT", E.DELETE_PROJECT = "DELETE_PROJECT", E.UPDATE_PROJECT = "UPDATE_PROJECT"
                }(d || (d = {})),
                function(E) {
                    E.JURY = "JURY", E.MENTOR = "MENTOR", E.ORGANIZATION = "ORGANIZATION", E.PARTICIPANT = "PARTICIPANT", E.PUBLIC = "PUBLIC", E.REGULAR_USER = "REGULAR_USER"
                }(L || (L = {})),
                function(E) {
                    E.CROWD = "CROWD", E.CROWD_AND_SELECTED = "CROWD_AND_SELECTED", E.NONE = "NONE", E.ORGANIZATION_AND_SELECTED = "ORGANIZATION_AND_SELECTED", E.SELECTED = "SELECTED"
                }(N || (N = {})),
                function(E) {
                    E.DELETED = "DELETED", E.REDEEMED = "REDEEMED"
                }(R || (R = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.DELETED = "DELETED", E.EXPIRED = "EXPIRED", E.INACTIVE = "INACTIVE"
                }(i || (i = {})),
                function(E) {
                    E.BACKER = "BACKER", E.GLOBAL_BALANCE = "GLOBAL_BALANCE"
                }(a || (a = {})),
                function(E) {
                    E.INPERSON = "INPERSON", E.MIXED = "MIXED", E.ONLINE = "ONLINE", E.VIRTUAL = "VIRTUAL"
                }(n || (n = {})),
                function(E) {
                    E.INNOVATOR = "INNOVATOR", E.JURY = "JURY", E.MENTOR = "MENTOR"
                }(C || (C = {})),
                function(E) {
                    E.MINTED = "MINTED", E.MINTING = "MINTING", E.NOT_MINTED = "NOT_MINTED"
                }(r || (r = {})),
                function(E) {
                    E.CHALLENGE_FEEDBACK = "CHALLENGE_FEEDBACK", E.CHALLENGE_PARTICIPATION = "CHALLENGE_PARTICIPATION"
                }(O || (O = {})),
                function(E) {
                    E.CATEGORY = "CATEGORY", E.GLOBAL = "GLOBAL"
                }(o || (o = {})),
                function(E) {
                    E.CUMULATIVE = "CUMULATIVE", E.INDEPENDENT = "INDEPENDENT"
                }(S || (S = {})),
                function(E) {
                    E.CRITERIA = "CRITERIA", E.NONE = "NONE", E.TOKEN = "TOKEN"
                }(c || (c = {})),
                function(E) {
                    E.BITCOIN = "BITCOIN", E.BRL = "BRL", E.DOLLAR = "DOLLAR", E.EOS = "EOS", E.ETHER = "ETHER", E.ETHEREUM = "ETHEREUM", E.EURO = "EURO", E.KAI = "KAI", E.TKAI = "TKAI", E.TLOS = "TLOS", E.VKAI = "VKAI"
                }(D || (D = {})),
                function(E) {
                    E.CONFIRMED = "CONFIRMED", E.FAILED = "FAILED", E.PENDING = "PENDING"
                }(s || (s = {})),
                function(E) {
                    E.BLOCKCHAIN_INTERACTION = "BLOCKCHAIN_INTERACTION", E.CREATE_PENDING_EXTERNAL_TX = "CREATE_PENDING_EXTERNAL_TX", E.PUBLISH_NOTIFICATION = "PUBLISH_NOTIFICATION", E.SET_TX_AS_CONFIRMED = "SET_TX_AS_CONFIRMED", E.TOKEN_COLLECTED = "TOKEN_COLLECTED", E.UPDATE_BALANCES = "UPDATE_BALANCES"
                }(u || (u = {})),
                function(E) {
                    E.COMPLETED = "COMPLETED", E.FAILED = "FAILED", E.NOT_STARTED = "NOT_STARTED", E.STARTED = "STARTED"
                }(G || (G = {})),
                function(E) {
                    E.OTHER = "OTHER", E.PROJECT_BLACKLISTED = "PROJECT_BLACKLISTED", E.PROJECT_CREATED = "PROJECT_CREATED", E.PROJECT_REMOVED_FROM_BLACKLIST = "PROJECT_REMOVED_FROM_BLACKLIST", E.PROJECT_STATE_CHANGE = "PROJECT_STATE_CHANGE", E.PROJECT_UPDATE_CREATED = "PROJECT_UPDATE_CREATED", E.PROJECT_UPDATE_UPDATED = "PROJECT_UPDATE_UPDATED", E.REWARDS = "REWARDS", E.USER_BLACKLISTED = "USER_BLACKLISTED", E.USER_REMOVED_FROM_BLACKLIST = "USER_REMOVED_FROM_BLACKLIST", E.WALLET_BLACKLISTED = "WALLET_BLACKLISTED", E.WALLET_REMOVED_FROM_BLACKLIST = "WALLET_REMOVED_FROM_BLACKLIST"
                }(K || (K = {})),
                function(E) {
                    E.ACCOUNT = "ACCOUNT", E.CHALLENGE = "CHALLENGE", E.CHALLENGE_AWARD = "CHALLENGE_AWARD", E.CHALLENGE_USER = "CHALLENGE_USER", E.EXTERNAL = "EXTERNAL", E.JURY = "JURY", E.PROJECT = "PROJECT", E.USER = "USER"
                }(P || (P = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.FAILED = "FAILED", E.SUBMITTED = "SUBMITTED"
                }(l || (l = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.EXPIRED = "EXPIRED", E.SUBMITTED = "SUBMITTED"
                }(p || (p = {})),
                function(E) {
                    E.CROWD = "CROWD", E.GUEST = "GUEST", E.ORGANIZATION = "ORGANIZATION", E.SELECTED = "SELECTED"
                }(U || (U = {})),
                function(E) {
                    E.BOT = "BOT", E.CHROME = "CHROME", E.CURL = "CURL", E.EDGE = "EDGE", E.FIREFOX = "FIREFOX", E.IE = "IE", E.OPERA = "OPERA", E.SAFARI = "SAFARI", E.UNKNOWN = "UNKNOWN"
                }(H || (H = {})),
                function(E) {
                    E.DESKTOP = "DESKTOP", E.MOBILE = "MOBILE", E.TABLET = "TABLET", E.UNKNOWN = "UNKNOWN"
                }(M || (M = {})),
                function(E) {
                    E.ANDROID = "ANDROID", E.CHROME_OS = "CHROME_OS", E.IOS = "IOS", E.LINUX = "LINUX", E.MAC = "MAC", E.UNKNOWN = "UNKNOWN", E.WINDOWS = "WINDOWS"
                }(m || (m = {})),
                function(E) {
                    E.JURY = "JURY"
                }(F || (F = {})),
                function(E) {
                    E.PROJECT = "PROJECT", E.USER = "USER", E.WALLET = "WALLET"
                }(f || (f = {})),
                function(E) {
                    E.REGISTER_BACKER = "REGISTER_BACKER", E.REGISTER_PARTICIPANT = "REGISTER_PARTICIPANT", E.WEBHOOK = "WEBHOOK"
                }(V || (V = {})),
                function(E) {
                    E.CHALLENGE_WEBHOOKS = "CHALLENGE_WEBHOOKS", E.CUSTOM_CHALLENGE_TAB = "CUSTOM_CHALLENGE_TAB", E.PRIVATE_CHALLENGE = "PRIVATE_CHALLENGE", E.VIDEO_LIVE_STREAM = "VIDEO_LIVE_STREAM"
                }(g || (g = {})),
                function(E) {
                    E.ORG_ADMIN_USER = "ORG_ADMIN_USER", E.ORG_REGULAR_USER = "ORG_REGULAR_USER"
                }(B || (B = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.DELETED = "DELETED", E.EXPIRED = "EXPIRED", E.REDEEMED = "REDEEMED"
                }(h || (h = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.BANNED = "BANNED", E.DRAFT = "DRAFT", E.IN_REVIEW = "IN_REVIEW"
                }(b || (b = {})),
                function(E) {
                    E.CHALLENGE = "CHALLENGE", E.ORGANIZATION = "ORGANIZATION"
                }(J || (J = {})),
                function(E) {
                    E.COPYRIGHT_INFRINGEMENT_OR_PRIVACY_VIOLATION = "COPYRIGHT_INFRINGEMENT_OR_PRIVACY_VIOLATION", E.INAPPROPRIATE_OFFENSIVE_OR_DISCRIMINATORY_CONTENT = "INAPPROPRIATE_OFFENSIVE_OR_DISCRIMINATORY_CONTENT", E.OTHER = "OTHER", E.UNWANTED_CONTENT_OR_SUSPICIOUS_LINKS = "UNWANTED_CONTENT_OR_SUSPICIOUS_LINKS"
                }(y || (y = {})),
                function(E) {
                    E.GARDEN = "GARDEN", E.HACKATHON = "HACKATHON", E.OTHER = "OTHER"
                }(k || (k = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.DISMISSED = "DISMISSED", E.REVIEWED = "REVIEWED"
                }(v || (v = {})),
                function(E) {
                    E.PROJECT_REPORT = "PROJECT_REPORT"
                }(W || (W = {})),
                function(E) {
                    E.BUSINNESS = "BUSINNESS", E.EDUCATION = "EDUCATION", E.EVENT = "EVENT", E.GOVERNMENT = "GOVERNMENT"
                }(j || (j = {})),
                function(E) {
                    E.GLOBAL = "GLOBAL", E.ORGANIZATION = "ORGANIZATION"
                }(Y || (Y = {})),
                function(E) {
                    E.CHALLENGE_CLOSED = "CHALLENGE_CLOSED", E.CHALLENGE_PUBLISHED = "CHALLENGE_PUBLISHED", E.CHALLENGE_STEP_CHANGED = "CHALLENGE_STEP_CHANGED", E.CHALLENGE_UPDATE_PUBLISHED = "CHALLENGE_UPDATE_PUBLISHED", E.INVITE_TO_JURY_PARTICIPANT_REDEEMED = "INVITE_TO_JURY_PARTICIPANT_REDEEMED", E.INVITE_TO_JURY_REDEEMED = "INVITE_TO_JURY_REDEEMED", E.INVITE_TO_PARTICIPANT_REDEEMED = "INVITE_TO_PARTICIPANT_REDEEMED", E.NEW_FORM_SUBMISSION = "NEW_FORM_SUBMISSION", E.NEW_JURY = "NEW_JURY", E.NEW_PARTICIPANT = "NEW_PARTICIPANT", E.ORGANIZATION_PUBLISHED = "ORGANIZATION_PUBLISHED", E.PROJECT_BACKED = "PROJECT_BACKED", E.PROJECT_PUBLISHED = "PROJECT_PUBLISHED", E.STORY_PUBLISHED = "STORY_PUBLISHED", E.UPDATE_FORM_SUBMISSION = "UPDATE_FORM_SUBMISSION"
                }(w || (w = {})),
                function(E) {
                    E.ORGANIZATION = "ORGANIZATION", E.SYSTEM = "SYSTEM", E.USER = "USER"
                }(Z || (Z = {})),
                function(E) {
                    E.DATE = "DATE", E.EMAIL = "EMAIL", E.FILE_UPLOAD = "FILE_UPLOAD", E.LONG_TEXT = "LONG_TEXT", E.MULTIPLE_CHOICE = "MULTIPLE_CHOICE", E.NUMBER = "NUMBER", E.PHONE_NUMBER = "PHONE_NUMBER", E.SHORT_TEXT = "SHORT_TEXT", E.SINGLE_CHOICE = "SINGLE_CHOICE", E.STATEMENT = "STATEMENT", E.URL = "URL"
                }(x || (x = {})),
                function(E) {
                    E.ACCEPTED = "ACCEPTED", E.ACTIVE = "ACTIVE", E.DELETED = "DELETED", E.EXPIRED = "EXPIRED", E.REJECTED = "REJECTED"
                }(X || (X = {})),
                function(E) {
                    E.APPROVED = "APPROVED", E.BANNED = "BANNED", E.WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL"
                }(z || (z = {})),
                function(E) {
                    E.COMPLETED = "COMPLETED", E.TO_BE_STARTED = "TO_BE_STARTED", E.WAITING_TO_BE_PROCESSED = "WAITING_TO_BE_PROCESSED"
                }(q || (q = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.FINISHED = "FINISHED", E.PREPARING = "PREPARING"
                }(Q || (Q = {})),
                function(E) {
                    E.BROADCASTING = "BROADCASTING", E.CONNECTED = "CONNECTED", E.DISCONNECTED = "DISCONNECTED", E.FINISHED = "FINISHED", E.IDLE = "IDLE"
                }($ || ($ = {})),
                function(E) {
                    E.JURY = "JURY", E.PARTICIPANTS = "PARTICIPANTS", E.PARTICIPANTS_AND_JURY = "PARTICIPANTS_AND_JURY", E.PUBLIC = "PUBLIC", E.REGULAR_USER = "REGULAR_USER"
                }(EE || (EE = {})),
                function(E) {
                    E.GLOBAL = "GLOBAL", E.USER = "USER"
                }(AE || (AE = {})),
                function(E) {
                    E.ADDED_AS_PROJECT_MEMBER = "ADDED_AS_PROJECT_MEMBER", E.ALLOCATE_RECEIVED = "ALLOCATE_RECEIVED", E.BACK_FAILED = "BACK_FAILED", E.BACK_SUCCESS = "BACK_SUCCESS", E.CHALLENGE_ANNOUNCEMENT = "CHALLENGE_ANNOUNCEMENT", E.CHALLENGE_GOT_PUBLISHED = "CHALLENGE_GOT_PUBLISHED", E.CHALLENGE_IN_REVIEW = "CHALLENGE_IN_REVIEW", E.CHALLENGE_TRANSFER_RECEIVED = "CHALLENGE_TRANSFER_RECEIVED", E.CHALLENGE_TRANSFER_SENT = "CHALLENGE_TRANSFER_SENT", E.CHALLENGE_TRANSFER_SENT_FAILED = "CHALLENGE_TRANSFER_SENT_FAILED", E.DEPOSIT_FAILED = "DEPOSIT_FAILED", E.DEPOSIT_RECEIVED = "DEPOSIT_RECEIVED", E.GENERAL_NOTIFICATION = "GENERAL_NOTIFICATION", E.INVITE_TO_PROJECT = "INVITE_TO_PROJECT", E.MAIL = "MAIL", E.ORGANIZATION = "ORGANIZATION", E.ORGANIZATION_GOT_PUBLISHED = "ORGANIZATION_GOT_PUBLISHED", E.ORGANIZATION_IN_REVIEW = "ORGANIZATION_IN_REVIEW", E.PROJECT_APPLICATION_ACCEPTED = "PROJECT_APPLICATION_ACCEPTED", E.PROJECT_APPLICATION_REJECTED = "PROJECT_APPLICATION_REJECTED", E.PROJECT_POSITION_APPLIED_SUCCESS = "PROJECT_POSITION_APPLIED_SUCCESS", E.PROJECT_UPDATE_PUBLISHED = "PROJECT_UPDATE_PUBLISHED", E.RECEIVED_DIVIDEND = "RECEIVED_DIVIDEND", E.REFERRAL_CONFIRMED = "REFERRAL_CONFIRMED", E.REFERRED_CONFIRMED = "REFERRED_CONFIRMED", E.REGISTERED_AS_BACKER = "REGISTERED_AS_BACKER", E.REGISTERED_AS_BACKER_AND_INNOVATOR = "REGISTERED_AS_BACKER_AND_INNOVATOR", E.REGISTERED_AS_INNOVATOR = "REGISTERED_AS_INNOVATOR", E.REGISTERED_AS_MENTOR = "REGISTERED_AS_MENTOR", E.TRANSFER_RECEIVED = "TRANSFER_RECEIVED", E.TRANSFER_SENT = "TRANSFER_SENT", E.TRANSFER_SENT_FAILED = "TRANSFER_SENT_FAILED", E.WITHDRAW_FAILED = "WITHDRAW_FAILED", E.WITHDRAW_SUCCESS = "WITHDRAW_SUCCESS"
                }(IE || (IE = {})),
                function(E) {
                    E.ACADEMY = "ACADEMY", E.BEPRO = "BEPRO", E.LAYERX = "LAYERX", E.TAIKAI = "TAIKAI"
                }(_E || (_E = {})),
                function(E) {
                    E.DRAFT = "DRAFT", E.PUBLISHED = "PUBLISHED"
                }(tE || (tE = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.DELETED = "DELETED"
                }(eE || (eE = {})),
                function(E) {
                    E.PROJECT_COMMENT = "PROJECT_COMMENT"
                }(TE || (TE = {})),
                function(E) {
                    E.CHALLENGE_BACKER = "CHALLENGE_BACKER", E.CHALLENGE_BACKER_PROJECT = "CHALLENGE_BACKER_PROJECT", E.CHALLENGE_INNOVATOR = "CHALLENGE_INNOVATOR", E.CHALLENGE_PROJECT = "CHALLENGE_PROJECT", E.GLOBAL_BACKER = "GLOBAL_BACKER", E.GLOBAL_HIRING = "GLOBAL_HIRING", E.GLOBAL_INNOVATOR = "GLOBAL_INNOVATOR", E.GLOBAL_USER = "GLOBAL_USER"
                }(dE || (dE = {})),
                function(E) {
                    E.FARMING = "FARMING", E.GRADUATED = "GRADUATED", E.SEED = "SEED", E.SPROUT = "SPROUT", E.UNINITIALIZED = "UNINITIALIZED"
                }(LE || (LE = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.ARCHIVED = "ARCHIVED", E.DELETED = "DELETED", E.SPAM = "SPAM"
                }(NE || (NE = {})),
                function(E) {
                    E.CHALLENGE = "CHALLENGE", E.ONE_TO_ONE = "ONE_TO_ONE", E.PROJECT = "PROJECT"
                }(RE || (RE = {})),
                function(E) {
                    E.ACCEPTED = "ACCEPTED", E.IN_REVIEW = "IN_REVIEW", E.REJECTED = "REJECTED"
                }(iE || (iE = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.ASSIGNED = "ASSIGNED", E.DELETED = "DELETED"
                }(aE || (aE = {})),
                function(E) {
                    E.ADMIN = "ADMIN", E.REGULAR_MEMBER = "REGULAR_MEMBER"
                }(nE || (nE = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.DELETED = "DELETED", E.DRAFT = "DRAFT", E.NOT_ELIGIBLE = "NOT_ELIGIBLE", E.NOT_ELIGIBLE_DRAFT = "NOT_ELIGIBLE_DRAFT"
                }(CE || (CE = {})),
                function(E) {
                    E.FUNDING = "FUNDING", E.MILESTONE = "MILESTONE", E.PROJECT = "PROJECT", E.TEAM = "TEAM"
                }(rE || (rE = {})),
                function(E) {
                    E.PROJECT = "PROJECT", E.USER = "USER"
                }(OE || (OE = {})),
                function(E) {
                    E.EMAIL = "EMAIL", E.ETHEREUM = "ETHEREUM", E.FACEBOOK = "FACEBOOK", E.GITHUB = "GITHUB", E.GOOGLE = "GOOGLE", E.LINKEDIN = "LINKEDIN"
                }(oE || (oE = {})),
                function(E) {
                    E.LIMITED = "LIMITED", E.PUBLIC = "PUBLIC"
                }(SE || (SE = {})),
                function(E) {
                    E.FEMALE = "FEMALE", E.MALE = "MALE", E.OTHER = "OTHER"
                }(cE || (cE = {})),
                function(E) {
                    E.EMAIL = "EMAIL", E.EXTERNAL = "EXTERNAL", E.USER = "USER"
                }(DE || (DE = {})),
                function(E) {
                    E.PROFILE_COMPLETION_ACADEMIC_EXPERIENCE = "PROFILE_COMPLETION_ACADEMIC_EXPERIENCE", E.PROFILE_COMPLETION_AVATAR = "PROFILE_COMPLETION_AVATAR", E.PROFILE_COMPLETION_BIO = "PROFILE_COMPLETION_BIO", E.PROFILE_COMPLETION_CITY = "PROFILE_COMPLETION_CITY", E.PROFILE_COMPLETION_COUNTRY = "PROFILE_COMPLETION_COUNTRY", E.PROFILE_COMPLETION_COVER = "PROFILE_COMPLETION_COVER", E.PROFILE_COMPLETION_FULL_NAME = "PROFILE_COMPLETION_FULL_NAME", E.PROFILE_COMPLETION_GITHUB = "PROFILE_COMPLETION_GITHUB", E.PROFILE_COMPLETION_JOB_TITLE = "PROFILE_COMPLETION_JOB_TITLE", E.PROFILE_COMPLETION_LINKEDIN = "PROFILE_COMPLETION_LINKEDIN", E.PROFILE_COMPLETION_SKILLS = "PROFILE_COMPLETION_SKILLS", E.PROFILE_COMPLETION_TWITTER = "PROFILE_COMPLETION_TWITTER", E.PROFILE_COMPLETION_WALLET = "PROFILE_COMPLETION_WALLET", E.PROFILE_COMPLETION_WORK_EXPERIENCE = "PROFILE_COMPLETION_WORK_EXPERIENCE", E.PROJECT_REWARD = "PROJECT_REWARD"
                }(sE || (sE = {})),
                function(E) {
                    E.COMPLETED = "COMPLETED", E.EMAIL_SENT = "EMAIL_SENT", E.WAITING_ACCOUNT_VALIDATION = "WAITING_ACCOUNT_VALIDATION"
                }(uE || (uE = {})),
                function(E) {
                    E.BLOCKED = "BLOCKED", E.CONFIRMED = "CONFIRMED", E.DELETED = "DELETED", E.PASSWORD_RESET = "PASSWORD_RESET", E.UNCONFIRMED = "UNCONFIRMED"
                }(GE || (GE = {})),
                function(E) {
                    E.ACCEPT_INVITE_TO_PROJECT = "ACCEPT_INVITE_TO_PROJECT", E.COMMENT_ON_PROJECT = "COMMENT_ON_PROJECT", E.CREATE_INVITE_TO_PROJECT = "CREATE_INVITE_TO_PROJECT", E.CREATE_PROJECT = "CREATE_PROJECT", E.DELETE_INVITE_TO_PROJECT = "DELETE_INVITE_TO_PROJECT", E.FAVORITE_PROJECT = "FAVORITE_PROJECT", E.FOLLOW = "FOLLOW", E.REJECT_INVITE_TO_PROJECT = "REJECT_INVITE_TO_PROJECT", E.REPORT_PROJECT = "REPORT_PROJECT", E.UNCOMMENT_ON_PROJECT = "UNCOMMENT_ON_PROJECT", E.UNFAVORITE_PROJECT = "UNFAVORITE_PROJECT", E.UNFOLLOW = "UNFOLLOW", E.UPDATE_PROJECT = "UPDATE_PROJECT"
                }(KE || (KE = {})),
                function(E) {
                    E.CROWD = "CROWD", E.SELECTED = "SELECTED"
                }(PE || (PE = {})),
                function(E) {
                    E.CHALLENGE = "CHALLENGE", E.PUBLIC = "PUBLIC", E.REGULAR_USER = "REGULAR_USER"
                }(lE || (lE = {})),
                function(E) {
                    E.CANDIDATE_ACCEPTED = "CANDIDATE_ACCEPTED", E.CANDIDATE_REJECTED = "CANDIDATE_REJECTED"
                }(pE || (pE = {})),
                function(E) {
                    E.CHALLENGE_PARTICIPANTS = "CHALLENGE_PARTICIPANTS", E.PUBLIC = "PUBLIC"
                }(UE || (UE = {})),
                function(E) {
                    E.AUTOMATIC = "AUTOMATIC", E.MANUAL = "MANUAL"
                }(HE || (HE = {})),
                function(E) {
                    E.DYNAMIC_HTML = "DYNAMIC_HTML", E.STATIC = "STATIC"
                }(ME || (ME = {})),
                function(E) {
                    E.VIMEO = "VIMEO", E.YOUTUBE = "YOUTUBE"
                }(mE || (mE = {})),
                function(E) {
                    E.DELIVERED = "DELIVERED", E.DROPPED = "DROPPED", E.PROCESSED = "PROCESSED", E.UNPROCESSED = "UNPROCESSED"
                }(FE || (FE = {})),
                function(E) {
                    E.INVITE_TO_JURY = "INVITE_TO_JURY", E.INVITE_TO_JURY_PARTICIPANT = "INVITE_TO_JURY_PARTICIPANT", E.INVITE_TO_MENTOR = "INVITE_TO_MENTOR", E.INVITE_TO_ORGANIZATION = "INVITE_TO_ORGANIZATION", E.INVITE_TO_PARTICIPANT = "INVITE_TO_PARTICIPANT", E.RESET_PASSWORD = "RESET_PASSWORD", E.USER_CONFIRMATION = "USER_CONFIRMATION"
                }(fE || (fE = {})),
                function(E) {
                    E.EMAIL_ADDRESS = "EMAIL_ADDRESS"
                }(VE || (VE = {})),
                function(E) {
                    E.API_ACCESS_TOKEN = "API_ACCESS_TOKEN", E.CONFIRMATION_TOKEN = "CONFIRMATION_TOKEN", E.FACEBOOK_ACCESS_TOKEN = "FACEBOOK_ACCESS_TOKEN", E.GOOGLE_ACCESS_TOKEN = "GOOGLE_ACCESS_TOKEN", E.RESET_PASSWORD_TOKEN = "RESET_PASSWORD_TOKEN"
                }(gE || (gE = {})),
                function(E) {
                    E.DISCORD = "DISCORD", E.NONE = "NONE", E.OTHER = "OTHER", E.SLACK = "SLACK", E.TEAMS = "TEAMS", E.TELEGRAM = "TELEGRAM", E.WHATSAPP = "WHATSAPP"
                }(BE || (BE = {})),
                function(E) {
                    E.DAY = "DAY", E.HOUR = "HOUR", E.MINUTE = "MINUTE", E.MONTH = "MONTH", E.WEEK = "WEEK", E.YEAR = "YEAR"
                }(hE || (hE = {})),
                function(E) {
                    E.Project = "Project", E.User = "User"
                }(bE || (bE = {})),
                function(E) {
                    E.debug = "debug", E.error = "error", E.info = "info", E.warn = "warn"
                }(JE || (JE = {})),
                function(E) {
                    E.demo = "demo", E.development = "development", E.production = "production", E.qa = "qa", E.staging = "staging"
                }(yE || (yE = {})),
                function(E) {
                    E.ALL = "ALL", E.UNREAD = "UNREAD"
                }(kE || (kE = {})),
                function(E) {
                    E.PUBLISH_HACKATHON = "PUBLISH_HACKATHON", E.PUBLISH_ORGANIZATION = "PUBLISH_ORGANIZATION", E.PUBLISH_STORY = "PUBLISH_STORY"
                }(vE || (vE = {})),
                function(E) {
                    E.HACKATHON = "HACKATHON", E.ORGANIZATIONS = "ORGANIZATIONS", E.STORIES = "STORIES"
                }(WE || (WE = {})),
                function(E) {
                    E.DELIVERED = "DELIVERED", E.DROPPED = "DROPPED", E.PENDING = "PENDING"
                }(jE || (jE = {})),
                function(E) {
                    E.AUTHENTICATED = "AUTHENTICATED", E.CHALLENGE_INITIATED = "CHALLENGE_INITIATED", E.NOT_AUTHENTICATED = "NOT_AUTHENTICATED"
                }(YE || (YE = {})),
                function(E) {
                    E.EVENT_CREATED = "EVENT_CREATED", E.EVENT_DELETED = "EVENT_DELETED", E.EVENT_UPDATED = "EVENT_UPDATED", E.LIVESTREAM_STATUS_UPDATE = "LIVESTREAM_STATUS_UPDATE"
                }(wE || (wE = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.name = "name", E.updatedAt = "updatedAt"
                }(ZE || (ZE = {})),
                function(E) {
                    E.count = "count", E.createdAt = "createdAt", E.expiresAt = "expiresAt", E.finishedAt = "finishedAt", E.id = "id", E.invalidatedAt = "invalidatedAt", E.phoneNumber = "phoneNumber", E.sentAt = "sentAt", E.status = "status", E.updatedAt = "updatedAt", E.userId = "userId"
                }(xE || (xE = {})),
                function(E) {
                    E.action = "action", E.createdAt = "createdAt", E.group = "group", E.id = "id", E.isEnabled = "isEnabled", E.updatedAt = "updatedAt", E.webhookId = "webhookId"
                }(XE || (XE = {})),
                function(E) {
                    E.actorId = "actorId", E.context = "context", E.createdAt = "createdAt", E.i18nCode = "i18nCode", E.id = "id", E.targetProjectId = "targetProjectId", E.targetType = "targetType", E.targetUserId = "targetUserId", E.updatedAt = "updatedAt"
                }(zE || (zE = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.logging = "logging", E.updatedAt = "updatedAt"
                }(qE || (qE = {})),
                function(E) {
                    E.amount = "amount", E.createdAt = "createdAt", E.guestUserId = "guestUserId", E.id = "id", E.nrTransactions = "nrTransactions", E.projectId = "projectId", E.updatedAt = "updatedAt", E.userId = "userId"
                }(QE || (QE = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.observation = "observation", E.projectId = "projectId", E.reason = "reason", E.type = "type", E.updatedAt = "updatedAt", E.userId = "userId", E.walletAddress = "walletAddress"
                }($E || ($E = {})),
                function(E) {
                    E.blockNumber = "blockNumber", E.createdAt = "createdAt", E.id = "id", E.txIndex = "txIndex", E.updatedAt = "updatedAt"
                }(EA || (EA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.description = "description", E.id = "id", E.performedById = "performedById", E.projectId = "projectId", E.type = "type", E.updatedAt = "updatedAt"
                }(AA || (AA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.finalBalance = "finalBalance", E.id = "id", E.position = "position", E.projectId = "projectId", E.updatedAt = "updatedAt", E.votingTrackId = "votingTrackId"
                }(IA || (IA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.description = "description", E.id = "id", E.name = "name", E.shortDescription = "shortDescription", E.updatedAt = "updatedAt"
                }(_A || (_A = {})),
                function(E) {
                    E.allowedParticipants = "allowedParticipants", E.attachmentsDescription = "attachmentsDescription", E.attachmentsVisibility = "attachmentsVisibility", E.backerFormId = "backerFormId", E.cardImageFileId = "cardImageFileId", E.chatInviteUrl = "chatInviteUrl", E.coverImageFileId = "coverImageFileId", E.createdAt = "createdAt", E.currentStepId = "currentStepId", E.customLinks = "customLinks", E.disableAnalytics = "disableAnalytics", E.endBackerRegistrationDate = "endBackerRegistrationDate", E.endParticipantRegistrationDate = "endParticipantRegistrationDate", E.eventAttendanceMode = "eventAttendanceMode", E.faq = "faq", E.id = "id", E.isAutoDistributed = "isAutoDistributed", E.isClosed = "isClosed", E.isFeatured = "isFeatured", E.isParticipantFormUpdatable = "isParticipantFormUpdatable", E.isPublic = "isPublic", E.keywords = "keywords", E.logoImageFileId = "logoImageFileId", E.matchMakingEnabled = "matchMakingEnabled", E.maxMembersPerProject = "maxMembersPerProject", E.maxProjectsPerMember = "maxProjectsPerMember", E.metadata = "metadata", E.minMembersPerProject = "minMembersPerProject", E.moderateProjects = "moderateProjects", E.momentTimeZoneId = "momentTimeZoneId", E.name = "name", E.order = "order", E.organizationId = "organizationId", E.participantFormId = "participantFormId", E.participantsCount = "participantsCount", E.prize = "prize", E.prizeCurrency_old = "prizeCurrency_old", E.prizeCurrencyId = "prizeCurrencyId", E.prizeDecimals = "prizeDecimals", E.projectMembersCount = "projectMembersCount", E.projectRequiredFields = "projectRequiredFields", E.projectsCount = "projectsCount", E.projectTemplate = "projectTemplate", E.registrationDomainsWhiteList = "registrationDomainsWhiteList", E.rules = "rules", E.shortDescription = "shortDescription", E.slug = "slug", E.startBackerRegistrationDate = "startBackerRegistrationDate", E.startParticipantRegistrationDate = "startParticipantRegistrationDate", E.statsId = "statsId", E.totalFunding = "totalFunding", E.updatedAt = "updatedAt"
                }(tA || (tA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.openPositions = "openPositions", E.totalAllocated = "totalAllocated", E.totalBacked = "totalBacked", E.totalBackerDividends = "totalBackerDividends", E.totalCollected = "totalCollected", E.totalDividends = "totalDividends", E.totalFunded = "totalFunded", E.totalProjectDividends = "totalProjectDividends", E.updatedAt = "updatedAt"
                }(eA || (eA = {})),
                function(E) {
                    E.allocatedPercentage = "allocatedPercentage", E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.isCurrent = "isCurrent", E.isSecretVoting = "isSecretVoting", E.leaderboardEnabled = "leaderboardEnabled", E.name = "name", E.numQualifiedProjects = "numQualifiedProjects", E.projectAuthorizations = "projectAuthorizations", E.projectVisibility = "projectVisibility", E.startDate = "startDate", E.updatedAt = "updatedAt", E.votingCriteriaGroupId = "votingCriteriaGroupId", E.votingScheme = "votingScheme", E.votingType = "votingType"
                }(TA || (TA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.content = "content", E.createdAt = "createdAt", E.icon = "icon", E.id = "id", E.isDefault = "isDefault", E.isEnabled = "isEnabled", E.order = "order", E.title = "title", E.type = "type", E.updatedAt = "updatedAt"
                }(dA || (dA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.content = "content", E.createdAt = "createdAt", E.id = "id", E.isPublished = "isPublished", E.publishedAt = "publishedAt", E.tags = "tags", E.title = "title", E.updatedAt = "updatedAt"
                }(LA || (LA = {})),
                function(E) {
                    E.comment = "comment", E.commentedById = "commentedById", E.createdAt = "createdAt", E.id = "id", E.projectId = "projectId", E.replyToId = "replyToId", E.state = "state", E.type = "type", E.updatedAt = "updatedAt"
                }(NA || (NA = {})),
                function(E) {
                    E.content = "content", E.createdAt = "createdAt", E.id = "id", E.locale = "locale", E.metadata = "metadata", E.mimeType = "mimeType", E.name = "name", E.publishDate = "publishDate", E.updatedAt = "updatedAt"
                }(RA || (RA = {})),
                function(E) {
                    E.accountingBalance = "accountingBalance", E.balance = "balance", E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.projectId = "projectId", E.type = "type", E.updatedAt = "updatedAt", E.userId = "userId"
                }(iA || (iA = {})),
                function(E) {
                    E.clickCount = "clickCount", E.createdAt = "createdAt", E.deliveredAt = "deliveredAt", E.droppedAt = "droppedAt", E.dropReason = "dropReason", E.from = "from", E.id = "id", E.inviteId = "inviteId", E.inviteToJuryId = "inviteToJuryId", E.inviteToMentorId = "inviteToMentorId", E.inviteToOrganizationId = "inviteToOrganizationId", E.inviteToParticipantId = "inviteToParticipantId", E.isMarkedAsSpam = "isMarkedAsSpam", E.openCount = "openCount", E.processedAt = "processedAt", E.status = "status", E.to = "to", E.tokenId = "tokenId", E.type = "type", E.updatedAt = "updatedAt"
                }(aA || (aA = {})),
                function(E) {
                    E.action = "action", E.amount = "amount", E.blockNumber = "blockNumber", E.createdAt = "createdAt", E.currency = "currency", E.from = "from", E.id = "id", E.internalTxHash = "internalTxHash", E.internalWalletId = "internalWalletId", E.status = "status", E.to = "to", E.transactionHash = "transactionHash", E.updatedAt = "updatedAt"
                }(nA || (nA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.encoding = "encoding", E.id = "id", E.metadata = "metadata", E.mimetype = "mimetype", E.name = "name", E.originalFileName = "originalFileName", E.participantId = "participantId", E.thumbUrl = "thumbUrl", E.updatedAt = "updatedAt", E.url = "url"
                }(CA || (CA = {})),
                function(E) {
                    E.date = "date", E.email = "email", E.fileId = "fileId", E.formSubmissionId = "formSubmissionId", E.id = "id", E.longText = "longText", E.multipleChoice = "multipleChoice", E.number = "number", E.phoneNumber = "phoneNumber", E.questionID = "questionID", E.shortText = "shortText", E.singleChoice = "singleChoice", E.url = "url"
                }(rA || (rA = {})),
                function(E) {
                    E.context = "context", E.formId = "formId", E.id = "id", E.type = "type"
                }(OA || (OA = {})),
                function(E) {
                    E.id = "id", E.organizationId = "organizationId", E.type = "type", E.userId = "userId"
                }(oA || (oA = {})),
                function(E) {
                    E.choices = "choices", E.createdAt = "createdAt", E.description = "description", E.formId = "formId", E.id = "id", E.isRequired = "isRequired", E.maxCharacters = "maxCharacters", E.order = "order", E.reference = "reference", E.title = "title", E.type = "type", E.updatedAt = "updatedAt"
                }(SA || (SA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.isPublic = "isPublic", E.name = "name", E.ownerId = "ownerId", E.updatedAt = "updatedAt"
                }(cA || (cA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.formId = "formId", E.id = "id", E.metadata = "metadata", E.updatedAt = "updatedAt", E.userId = "userId"
                }(DA || (DA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.id = "id", E.projectId = "projectId", E.sprintId = "sprintId", E.type = "type", E.updatedAt = "updatedAt", E.userId = "userId", E.walletId = "walletId", E.whoId = "whoId"
                }(sA || (sA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.endsAt = "endsAt", E.id = "id", E.number = "number", E.startsAt = "startsAt", E.updatedAt = "updatedAt"
                }(uA || (uA = {})),
                function(E) {
                    E.authToken = "authToken", E.createdAt = "createdAt", E.firstSignInAt = "firstSignInAt", E.id = "id", E.isActive = "isActive", E.nickname = "nickname", E.type = "type", E.updatedAt = "updatedAt"
                }(GA || (GA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.idBackImageId = "idBackImageId", E.idFrontImageId = "idFrontImageId", E.proofOfAddressId = "proofOfAddressId", E.selfieImageId = "selfieImageId", E.status = "status", E.updatedAt = "updatedAt"
                }(KA || (KA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.description_br = "description_br", E.description_es = "description_es", E.description_fr = "description_fr", E.id = "id", E.title = "title", E.title_br = "title_br", E.title_es = "title_es", E.title_fr = "title_fr", E.updatedAt = "updatedAt"
                }(PA || (PA = {})),
                function(E) {
                    E.balanceToAllocate = "balanceToAllocate", E.challengeId = "challengeId", E.challengeStepId = "challengeStepId", E.createdAt = "createdAt", E.expiresAt = "expiresAt", E.fromId = "fromId", E.id = "id", E.kind = "kind", E.redeemedAt = "redeemedAt", E.state = "state", E.toEmail = "toEmail", E.toId = "toId", E.token = "token", E.type = "type", E.updatedAt = "updatedAt", E.url = "url", E.votingTrackId = "votingTrackId"
                }(lA || (lA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.expiresAt = "expiresAt", E.fromId = "fromId", E.id = "id", E.kind = "kind", E.redeemedAt = "redeemedAt", E.state = "state", E.toEmail = "toEmail", E.toId = "toId", E.token = "token", E.updatedAt = "updatedAt", E.url = "url"
                }(pA || (pA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.expiresAt = "expiresAt", E.fromId = "fromId", E.id = "id", E.organizationId = "organizationId", E.redeemedAt = "redeemedAt", E.role = "role", E.state = "state", E.toEmail = "toEmail", E.toId = "toId", E.token = "token", E.updatedAt = "updatedAt"
                }(UA || (UA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.expiresAt = "expiresAt", E.fromId = "fromId", E.id = "id", E.kind = "kind", E.redeemedAt = "redeemedAt", E.state = "state", E.toEmail = "toEmail", E.toId = "toId", E.token = "token", E.updatedAt = "updatedAt", E.url = "url"
                }(HA || (HA = {})),
                function(E) {
                    E.acceptedAt = "acceptedAt", E.createdAt = "createdAt", E.expiresAt = "expiresAt", E.fromId = "fromId", E.id = "id", E.message = "message", E.projectId = "projectId", E.rejectedAt = "rejectedAt", E.state = "state", E.toEmail = "toEmail", E.toId = "toId", E.token = "token", E.toUserId = "toUserId", E.updatedAt = "updatedAt"
                }(MA || (MA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.datePosted = "datePosted", E.description = "description", E.formId = "formId", E.id = "id", E.shortDescription = "shortDescription", E.slug = "slug", E.title = "title", E.updatedAt = "updatedAt", E.validThrough = "validThrough"
                }(mA || (mA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.description_br = "description_br", E.id = "id", E.title = "title", E.title_br = "title_br", E.updatedAt = "updatedAt"
                }(FA || (FA = {})),
                function(E) {
                    E.AnyNull = "AnyNull", E.DbNull = "DbNull", E.JsonNull = "JsonNull"
                }(fA || (fA = {})),
                function(E) {
                    E.JsonNull = "JsonNull"
                }(VA || (VA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.challengeStepId = "challengeStepId", E.createdAt = "createdAt", E.guestUserId = "guestUserId", E.hasSubmittedFeedback = "hasSubmittedFeedback", E.id = "id", E.registrationInfo = "registrationInfo", E.type = "type", E.updatedAt = "updatedAt", E.userId = "userId", E.votingTrackId = "votingTrackId", E.weight = "weight"
                }(gA || (gA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.coverImageId = "coverImageId", E.createdAt = "createdAt", E.description = "description", E.endsAt = "endsAt", E.id = "id", E.stageId = "stageId", E.startsAt = "startsAt", E.title = "title", E.updatedAt = "updatedAt"
                }(BA || (BA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.description = "description", E.id = "id", E.isVisible = "isVisible", E.muxLiveStreamId = "muxLiveStreamId", E.permissions = "permissions", E.title = "title", E.updatedAt = "updatedAt"
                }(hA || (hA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.isRead = "isRead", E.mailId = "mailId", E.readAt = "readAt", E.updatedAt = "updatedAt", E.userId = "userId"
                }(bA || (bA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.state = "state", E.threadId = "threadId", E.updatedAt = "updatedAt", E.userId = "userId"
                }(JA || (JA = {})),
                function(E) {
                    E.content = "content", E.createdAt = "createdAt", E.fromId = "fromId", E.id = "id", E.sentAt = "sentAt", E.threadId = "threadId", E.updatedAt = "updatedAt"
                }(yA || (yA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.lastMailAt = "lastMailAt", E.mailCount = "mailCount", E.projectId = "projectId", E.subject = "subject", E.type = "type", E.updatedAt = "updatedAt"
                }(kA || (kA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.description = "description", E.hasSubmittedFeedback = "hasSubmittedFeedback", E.id = "id", E.updatedAt = "updatedAt", E.userId = "userId"
                }(vA || (vA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.name = "name", E.updatedAt = "updatedAt"
                }(WA || (WA = {})),
                function(E) {
                    E.aspectRatio = "aspectRatio", E.createdAt = "createdAt", E.duration = "duration", E.id = "id", E.muxID = "muxID", E.muxLiveStreamId = "muxLiveStreamId", E.playbackId = "playbackId", E.playbackUrl = "playbackUrl", E.status = "status", E.thumbnailUrl = "thumbnailUrl", E.tracks = "tracks", E.updatedAt = "updatedAt"
                }(jA || (jA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.muxID = "muxID", E.playbackId = "playbackId", E.playbackUrl = "playbackUrl", E.status = "status", E.streamKey = "streamKey", E.streamUrl = "streamUrl", E.thumbnailUrl = "thumbnailUrl", E.totalRecordTime = "totalRecordTime", E.updatedAt = "updatedAt"
                }(YA || (YA = {})),
                function(E) {
                    E.CREATED = "CREATED", E.DELETED = "DELETED", E.UPDATE = "UPDATE"
                }(wA || (wA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.context = "context", E.createdAt = "createdAt", E.id = "id", E.imageId = "imageId", E.isRead = "isRead", E.link = "link", E.message = "message", E.scope = "scope", E.templateName = "templateName", E.type = "type", E.updatedAt = "updatedAt", E.userId = "userId"
                }(ZA || (ZA = {})),
                function(E) {
                    E.DbNull = "DbNull", E.JsonNull = "JsonNull"
                }(xA || (xA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.features = "features", E.id = "id", E.name = "name", E.updatedAt = "updatedAt"
                }(XA || (XA = {})),
                function(E) {
                    E.billingPlanId = "billingPlanId", E.cardImageFileId = "cardImageFileId", E.challengesActiveCount = "challengesActiveCount", E.challengesCount = "challengesCount", E.challengesDescription = "challengesDescription", E.city = "city", E.country = "country", E.coverImageFileId = "coverImageFileId", E.createdAt = "createdAt", E.description = "description", E.email = "email", E.homepage = "homepage", E.id = "id", E.isFeatured = "isFeatured", E.keywords = "keywords", E.linkedInUrl = "linkedInUrl", E.logoImageFileId = "logoImageFileId", E.metadata = "metadata", E.name = "name", E.order = "order", E.phoneNumber = "phoneNumber", E.postalCode = "postalCode", E.shortDescription = "shortDescription", E.slug = "slug", E.streetAddress = "streetAddress", E.totalPrizes = "totalPrizes", E.twitterUrl = "twitterUrl", E.type = "type", E.updatedAt = "updatedAt", E.youtubeUrl = "youtubeUrl"
                }(zA || (zA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.organizationId = "organizationId", E.updatedAt = "updatedAt", E.userId = "userId"
                }(qA || (qA = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.endProjectAt = "endProjectAt", E.formSubmissionId = "formSubmissionId", E.hasSubmittedFeedback = "hasSubmittedFeedback", E.id = "id", E.isAvailableToHire = "isAvailableToHire", E.registrationInfo = "registrationInfo", E.startedProjectAt = "startedProjectAt", E.state = "state", E.tags = "tags", E.updatedAt = "updatedAt", E.userId = "userId"
                }(QA || (QA = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.groupName = "groupName", E.id = "id", E.name = "name", E.scope = "scope", E.updatedAt = "updatedAt"
                }($A || ($A = {})),
                function(E) {
                    E.action = "action", E.createdAt = "createdAt", E.id = "id", E.isRedeemed = "isRedeemed", E.multiRedeemId = "multiRedeemId", E.points = "points", E.updatedAt = "updatedAt", E.userId = "userId"
                }(EI || (EI = {})),
                function(E) {
                    E.acceptanceEmailTemplate = "acceptanceEmailTemplate", E.allowSelfBack = "allowSelfBack", E.canUnregister = "canUnregister", E.challengeId = "challengeId", E.challengeUpdatesVisibility = "challengeUpdatesVisibility", E.createdAt = "createdAt", E.distributeBackerRewards = "distributeBackerRewards", E.enableParticipantTags = "enableParticipantTags", E.enableProjectTags = "enableProjectTags", E.enableProofOfParticipation = "enableProofOfParticipation", E.id = "id", E.isStepChangeAutomatic = "isStepChangeAutomatic", E.notifyOnStepChallenge = "notifyOnStepChallenge", E.participantTagsLimit = "participantTagsLimit", E.participantTagsOptions = "participantTagsOptions", E.projectTagsLimit = "projectTagsLimit", E.projectTagsOptions = "projectTagsOptions", E.rejectionEmailTemplate = "rejectionEmailTemplate", E.sendEmailOnChallengeUpdates = "sendEmailOnChallengeUpdates", E.updatedAt = "updatedAt", E.votingCheckoutType = "votingCheckoutType", E.webhookAuthorizationKey = "webhookAuthorizationKey", E.webhookUrl = "webhookUrl"
                }(AI || (AI = {})),
                function(E) {
                    E.alexaRanking = "alexaRanking", E.angellistUrl = "angellistUrl", E.blogUrl = "blogUrl", E.crunchbaseUrl = "crunchbaseUrl", E.facebookUrl = "facebookUrl", E.id = "id", E.linkedinUrl = "linkedinUrl", E.logoUrl = "logoUrl", E.name = "name", E.phone = "phone", E.primaryDomain = "primaryDomain", E.publiclyTradedExchange = "publiclyTradedExchange", E.publiclyTradedSymbol = "publiclyTradedSymbol", E.twitterUrl = "twitterUrl", E.websiteUrl = "websiteUrl"
                }(II || (II = {})),
                function(E) {
                    E.city = "city", E.country = "country", E.firstName = "firstName", E.githubUrl = "githubUrl", E.headline = "headline", E.id = "id", E.lastName = "lastName", E.linkedinUrl = "linkedinUrl", E.photoUrl = "photoUrl", E.privateOrganizationId = "privateOrganizationId", E.state = "state", E.title = "title", E.twitterUrl = "twitterUrl", E.userId = "userId"
                }(_I || (_I = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.name = "name", E.updatedAt = "updatedAt"
                }(tI || (tI = {})),
                function(E) {
                    E.answer = "answer", E.createdAt = "createdAt", E.id = "id", E.message = "message", E.projectPositionId = "projectPositionId", E.state = "state", E.updatedAt = "updatedAt", E.userId = "userId"
                }(eI || (eI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.projectId = "projectId", E.role = "role", E.updatedAt = "updatedAt", E.userId = "userId"
                }(TI || (TI = {})),
                function(E) {
                    E.acceptedMemberId = "acceptedMemberId", E.createdAt = "createdAt", E.description = "description", E.id = "id", E.projectId = "projectId", E.state = "state", E.title = "title", E.updatedAt = "updatedAt"
                }(dI || (dI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.confirmUntil = "confirmUntil", E.createdAt = "createdAt", E.id = "id", E.token = "token", E.updatedAt = "updatedAt", E.userId = "userId"
                }(LI || (LI = {})),
                function(E) {
                    E.authorId = "authorId", E.backersCount = "backersCount", E.cardImageFileId = "cardImageFileId", E.challengeId = "challengeId", E.codeUrl = "codeUrl", E.commentsCount = "commentsCount", E.coverImageFileId = "coverImageFileId", E.createdAt = "createdAt", E.demoUrl = "demoUrl", E.description = "description", E.favoritesCount = "favoritesCount", E.followersCount = "followersCount", E.forkFromId = "forkFromId", E.gardenState = "gardenState", E.id = "id", E.logoImageFileId = "logoImageFileId", E.metadata = "metadata", E.name = "name", E.positionsOpenCount = "positionsOpenCount", E.randomOrder = "randomOrder", E.score = "score", E.state = "state", E.tags = "tags", E.teaser = "teaser", E.totalBacked = "totalBacked", E.updatedAt = "updatedAt", E.videoUrl = "videoUrl", E.viewsCount = "viewsCount"
                }(NI || (NI = {})),
                function(E) {
                    E.content = "content", E.createdAt = "createdAt", E.dislikesCount = "dislikesCount", E.id = "id", E.likesCount = "likesCount", E.projectId = "projectId", E.tags = "tags", E.title = "title", E.type = "type", E.updatedAt = "updatedAt"
                }(RI || (RI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.eventAttendanceMode = "eventAttendanceMode", E.id = "id", E.imageUrl = "imageUrl", E.ownerId = "ownerId", E.participationMode = "participationMode", E.projectId = "projectId", E.status = "status", E.tokenId = "tokenId", E.transactionHash = "transactionHash", E.type = "type", E.updatedAt = "updatedAt", E.url = "url", E.votingTrackId = "votingTrackId", E.walletAddress = "walletAddress"
                }(iI || (iI = {})),
                function(E) {
                    E.acceptedAt = "acceptedAt", E.acceptedById = "acceptedById", E.challengeId = "challengeId", E.createdAt = "createdAt", E.draftToken = "draftToken", E.id = "id", E.organizationId = "organizationId", E.privateToken = "privateToken", E.state = "state", E.submittedAt = "submittedAt", E.submittedById = "submittedById", E.type = "type", E.updatedAt = "updatedAt"
                }(aI || (aI = {})),
                function(E) {
                    E.acccountCreatedAt = "acccountCreatedAt", E.completedAt = "completedAt", E.createdAt = "createdAt", E.fromId = "fromId", E.id = "id", E.lastEmailSentAt = "lastEmailSentAt", E.sentEmailsCount = "sentEmailsCount", E.state = "state", E.toEmail = "toEmail", E.toId = "toId", E.updatedAt = "updatedAt"
                }(nI || (nI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.id = "id", E.organizationId = "organizationId", E.projectId = "projectId", E.reason = "reason", E.reporterId = "reporterId", E.reviewedById = "reviewedById", E.source = "source", E.status = "status", E.type = "type", E.updatedAt = "updatedAt"
                }(CI || (CI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.id = "id", E.isDefault = "isDefault", E.name = "name", E.scope = "scope", E.totalOrgUsers = "totalOrgUsers", E.totalUsers = "totalUsers", E.updatedAt = "updatedAt"
                }(rI || (rI = {})),
                function(E) {
                    E.browser = "browser", E.browserType = "browserType", E.createdAt = "createdAt", E.deviceType = "deviceType", E.guestUserId = "guestUserId", E.id = "id", E.ipAddress = "ipAddress", E.isActive = "isActive", E.lastAccessedAt = "lastAccessedAt", E.os = "os", E.osType = "osType", E.platform = "platform", E.source = "source", E.updatedAt = "updatedAt", E.userId = "userId", E.version = "version"
                }(OI || (OI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.livestreamId = "livestreamId", E.muxID = "muxID", E.name = "name", E.passthrough = "passthrough", E.streamKey = "streamKey", E.streamUrl = "streamUrl", E.updatedAt = "updatedAt"
                }(oI || (oI = {})),
                function(E) {
                    E.base = "base", E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.maxSupply = "maxSupply", E.skewness = "skewness", E.supply = "supply", E.type = "type", E.updatedAt = "updatedAt"
                }(SI || (SI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.order = "order", E.organizationId = "organizationId", E.updatedAt = "updatedAt"
                }(cI || (cI = {})),
                function(E) {
                    E.authorId = "authorId", E.blogSource = "blogSource", E.canonicalUrl = "canonicalUrl", E.content = "content", E.content_br = "content_br", E.createdAt = "createdAt", E.draftToken = "draftToken", E.featuredImageId = "featuredImageId", E.id = "id", E.publishedAt = "publishedAt", E.seoDescription = "seoDescription", E.seoDescription_br = "seoDescription_br", E.seoTitle = "seoTitle", E.seoTitle_br = "seoTitle_br", E.shortDescription = "shortDescription", E.shortDescription_br = "shortDescription_br", E.slug = "slug", E.slug_br = "slug_br", E.state = "state", E.tags = "tags", E.tags_br = "tags_br", E.title = "title", E.title_br = "title_br", E.updatedAt = "updatedAt"
                }(DI || (DI = {})),
                function(E) {
                    E.TAIKAI__GARDEN_ACTIVITY__LOGS_MANAGE = "TAIKAI__GARDEN_ACTIVITY__LOGS_MANAGE", E.TAIKAI__GARDEN_ACTIVITY__LOGS_READ = "TAIKAI__GARDEN_ACTIVITY__LOGS_READ", E.TAIKAI__GARDEN_BLACKLIST_MANAGE = "TAIKAI__GARDEN_BLACKLIST_MANAGE", E.TAIKAI__GARDEN_BLACKLIST_READ = "TAIKAI__GARDEN_BLACKLIST_READ", E.TAIKAI_BILLING__PLAN_CHALLENGE__WEBHOOKS = "TAIKAI_BILLING__PLAN_CHALLENGE__WEBHOOKS", E.TAIKAI_BILLING__PLAN_VIDEO__LIVE__STREAM = "TAIKAI_BILLING__PLAN_VIDEO__LIVE__STREAM", E.TAIKAI_CHALLENGE_ACTIVITY__LOGS_DELETE = "TAIKAI_CHALLENGE_ACTIVITY__LOGS_DELETE", E.TAIKAI_CHALLENGE_ACTIVITY__LOGS_DELETE__SELF = "TAIKAI_CHALLENGE_ACTIVITY__LOGS_DELETE__SELF", E.TAIKAI_CHALLENGE_ACTIVITY__LOGS_MANAGE = "TAIKAI_CHALLENGE_ACTIVITY__LOGS_MANAGE", E.TAIKAI_CHALLENGE_ACTIVITY__LOGS_READ = "TAIKAI_CHALLENGE_ACTIVITY__LOGS_READ", E.TAIKAI_CHALLENGE_ACTIVITY__LOGS_READ__SELF = "TAIKAI_CHALLENGE_ACTIVITY__LOGS_READ__SELF", E.TAIKAI_CHALLENGE_ACTIVITY_LOGS_MANAGE__SELF = "TAIKAI_CHALLENGE_ACTIVITY_LOGS_MANAGE__SELF", E.TAIKAI_CHALLENGE_CATEGORIES_CREATE = "TAIKAI_CHALLENGE_CATEGORIES_CREATE", E.TAIKAI_CHALLENGE_CATEGORIES_DELETE = "TAIKAI_CHALLENGE_CATEGORIES_DELETE", E.TAIKAI_CHALLENGE_CATEGORIES_MANAGE = "TAIKAI_CHALLENGE_CATEGORIES_MANAGE", E.TAIKAI_CHALLENGE_CATEGORIES_MANAGE__SELF = "TAIKAI_CHALLENGE_CATEGORIES_MANAGE__SELF", E.TAIKAI_CHALLENGE_CATEGORIES_READ = "TAIKAI_CHALLENGE_CATEGORIES_READ", E.TAIKAI_CHALLENGE_CATEGORIES_UPDATE = "TAIKAI_CHALLENGE_CATEGORIES_UPDATE", E.TAIKAI_CHALLENGE_CHANGE__STEP = "TAIKAI_CHALLENGE_CHANGE__STEP", E.TAIKAI_CHALLENGE_CREATE = "TAIKAI_CHALLENGE_CREATE", E.TAIKAI_CHALLENGE_CREATE__SELF = "TAIKAI_CHALLENGE_CREATE__SELF", E.TAIKAI_CHALLENGE_DELETE = "TAIKAI_CHALLENGE_DELETE", E.TAIKAI_CHALLENGE_EXPORT = "TAIKAI_CHALLENGE_EXPORT", E.TAIKAI_CHALLENGE_FORM__HOOKS_READ = "TAIKAI_CHALLENGE_FORM__HOOKS_READ", E.TAIKAI_CHALLENGE_FORM__HOOKS_UPDATE = "TAIKAI_CHALLENGE_FORM__HOOKS_UPDATE", E.TAIKAI_CHALLENGE_FORM__REGISTRATION_EXPORT = "TAIKAI_CHALLENGE_FORM__REGISTRATION_EXPORT", E.TAIKAI_CHALLENGE_FORM__REGISTRATION_EXPORT__SELF = "TAIKAI_CHALLENGE_FORM__REGISTRATION_EXPORT__SELF", E.TAIKAI_CHALLENGE_FORM__SUBMISSION_DELETE = "TAIKAI_CHALLENGE_FORM__SUBMISSION_DELETE", E.TAIKAI_CHALLENGE_FORM__SUBMISSION_DELETE__SELF = "TAIKAI_CHALLENGE_FORM__SUBMISSION_DELETE__SELF", E.TAIKAI_CHALLENGE_FORM__SUBMISSION_READ = "TAIKAI_CHALLENGE_FORM__SUBMISSION_READ", E.TAIKAI_CHALLENGE_FORM__SUBMISSION_READ__SELF = "TAIKAI_CHALLENGE_FORM__SUBMISSION_READ__SELF", E.TAIKAI_CHALLENGE_FORM_CREATE = "TAIKAI_CHALLENGE_FORM_CREATE", E.TAIKAI_CHALLENGE_FORM_CREATE__SELF = "TAIKAI_CHALLENGE_FORM_CREATE__SELF", E.TAIKAI_CHALLENGE_FORM_DELETE = "TAIKAI_CHALLENGE_FORM_DELETE", E.TAIKAI_CHALLENGE_FORM_DELETE__SELF = "TAIKAI_CHALLENGE_FORM_DELETE__SELF", E.TAIKAI_CHALLENGE_FORM_MANAGE = "TAIKAI_CHALLENGE_FORM_MANAGE", E.TAIKAI_CHALLENGE_FORM_READ = "TAIKAI_CHALLENGE_FORM_READ", E.TAIKAI_CHALLENGE_FORM_READ__SELF = "TAIKAI_CHALLENGE_FORM_READ__SELF", E.TAIKAI_CHALLENGE_FORM_UPDATE = "TAIKAI_CHALLENGE_FORM_UPDATE", E.TAIKAI_CHALLENGE_FORM_UPDATE__SELF = "TAIKAI_CHALLENGE_FORM_UPDATE__SELF", E.TAIKAI_CHALLENGE_INVITE_STAT = "TAIKAI_CHALLENGE_INVITE_STAT", E.TAIKAI_CHALLENGE_INVITE_STAT__SELF = "TAIKAI_CHALLENGE_INVITE_STAT__SELF", E.TAIKAI_CHALLENGE_JURIES_ALLOCATE__KAI = "TAIKAI_CHALLENGE_JURIES_ALLOCATE__KAI", E.TAIKAI_CHALLENGE_JURIES_ALLOCATE__KAI__SELF = "TAIKAI_CHALLENGE_JURIES_ALLOCATE__KAI__SELF", E.TAIKAI_CHALLENGE_JURIES_CREATE = "TAIKAI_CHALLENGE_JURIES_CREATE", E.TAIKAI_CHALLENGE_JURIES_DELETE = "TAIKAI_CHALLENGE_JURIES_DELETE", E.TAIKAI_CHALLENGE_JURIES_EXPORT = "TAIKAI_CHALLENGE_JURIES_EXPORT", E.TAIKAI_CHALLENGE_JURIES_EXPORT__SELF = "TAIKAI_CHALLENGE_JURIES_EXPORT__SELF", E.TAIKAI_CHALLENGE_JURIES_INVITE_CREATE = "TAIKAI_CHALLENGE_JURIES_INVITE_CREATE", E.TAIKAI_CHALLENGE_JURIES_INVITE_CREATE__SELF = "TAIKAI_CHALLENGE_JURIES_INVITE_CREATE__SELF", E.TAIKAI_CHALLENGE_JURIES_INVITE_DELETE = "TAIKAI_CHALLENGE_JURIES_INVITE_DELETE", E.TAIKAI_CHALLENGE_JURIES_INVITE_DELETE__SELF = "TAIKAI_CHALLENGE_JURIES_INVITE_DELETE__SELF", E.TAIKAI_CHALLENGE_JURIES_INVITE_READ = "TAIKAI_CHALLENGE_JURIES_INVITE_READ", E.TAIKAI_CHALLENGE_JURIES_INVITE_READ__SELF = "TAIKAI_CHALLENGE_JURIES_INVITE_READ__SELF", E.TAIKAI_CHALLENGE_JURIES_MANAGE = "TAIKAI_CHALLENGE_JURIES_MANAGE", E.TAIKAI_CHALLENGE_JURIES_MANAGE__SELF = "TAIKAI_CHALLENGE_JURIES_MANAGE__SELF", E.TAIKAI_CHALLENGE_JURIES_READ = "TAIKAI_CHALLENGE_JURIES_READ", E.TAIKAI_CHALLENGE_JURIES_READ__SELF = "TAIKAI_CHALLENGE_JURIES_READ__SELF", E.TAIKAI_CHALLENGE_LIVE_READ__SELF = "TAIKAI_CHALLENGE_LIVE_READ__SELF", E.TAIKAI_CHALLENGE_MANAGE = "TAIKAI_CHALLENGE_MANAGE", E.TAIKAI_CHALLENGE_MENTORS_CREATE = "TAIKAI_CHALLENGE_MENTORS_CREATE", E.TAIKAI_CHALLENGE_MENTORS_DELETE = "TAIKAI_CHALLENGE_MENTORS_DELETE", E.TAIKAI_CHALLENGE_MENTORS_INVITE_CREATE = "TAIKAI_CHALLENGE_MENTORS_INVITE_CREATE", E.TAIKAI_CHALLENGE_MENTORS_INVITE_CREATE__SELF = "TAIKAI_CHALLENGE_MENTORS_INVITE_CREATE__SELF", E.TAIKAI_CHALLENGE_MENTORS_INVITE_DELETE = "TAIKAI_CHALLENGE_MENTORS_INVITE_DELETE", E.TAIKAI_CHALLENGE_MENTORS_INVITE_DELETE__SELF = "TAIKAI_CHALLENGE_MENTORS_INVITE_DELETE__SELF", E.TAIKAI_CHALLENGE_MENTORS_INVITE_READ = "TAIKAI_CHALLENGE_MENTORS_INVITE_READ", E.TAIKAI_CHALLENGE_MENTORS_INVITE_READ__SELF = "TAIKAI_CHALLENGE_MENTORS_INVITE_READ__SELF", E.TAIKAI_CHALLENGE_MENTORS_MANAGE = "TAIKAI_CHALLENGE_MENTORS_MANAGE", E.TAIKAI_CHALLENGE_MENTORS_MANAGE__SELF = "TAIKAI_CHALLENGE_MENTORS_MANAGE__SELF", E.TAIKAI_CHALLENGE_MENTORS_READ = "TAIKAI_CHALLENGE_MENTORS_READ", E.TAIKAI_CHALLENGE_MENTORS_READ__SELF = "TAIKAI_CHALLENGE_MENTORS_READ__SELF", E.TAIKAI_CHALLENGE_MENTORS_UPDATE = "TAIKAI_CHALLENGE_MENTORS_UPDATE", E.TAIKAI_CHALLENGE_PARTICIPANTS_ACCEPT = "TAIKAI_CHALLENGE_PARTICIPANTS_ACCEPT", E.TAIKAI_CHALLENGE_PARTICIPANTS_ACCEPT__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_ACCEPT__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_ALLOCATE__KAI__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_ALLOCATE__KAI__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_CREATE = "TAIKAI_CHALLENGE_PARTICIPANTS_CREATE", E.TAIKAI_CHALLENGE_PARTICIPANTS_DELETE = "TAIKAI_CHALLENGE_PARTICIPANTS_DELETE", E.TAIKAI_CHALLENGE_PARTICIPANTS_EXPORT = "TAIKAI_CHALLENGE_PARTICIPANTS_EXPORT", E.TAIKAI_CHALLENGE_PARTICIPANTS_EXPORT__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_EXPORT__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_CREATE = "TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_CREATE", E.TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_CREATE__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_CREATE__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_DELETE = "TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_DELETE", E.TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_DELETE__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_DELETE__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_READ = "TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_READ", E.TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_READ__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_INVITE_READ__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_MANAGE = "TAIKAI_CHALLENGE_PARTICIPANTS_MANAGE", E.TAIKAI_CHALLENGE_PARTICIPANTS_MANAGE__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_MANAGE__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_READ = "TAIKAI_CHALLENGE_PARTICIPANTS_READ", E.TAIKAI_CHALLENGE_PARTICIPANTS_READ__SELF = "TAIKAI_CHALLENGE_PARTICIPANTS_READ__SELF", E.TAIKAI_CHALLENGE_PARTICIPANTS_UPDATE = "TAIKAI_CHALLENGE_PARTICIPANTS_UPDATE", E.TAIKAI_CHALLENGE_PRIVATE__CONFIGURATION_UPDATE = "TAIKAI_CHALLENGE_PRIVATE__CONFIGURATION_UPDATE", E.TAIKAI_CHALLENGE_PRIVATE__CONFIGURATION_UPDATE__SELF = "TAIKAI_CHALLENGE_PRIVATE__CONFIGURATION_UPDATE__SELF", E.TAIKAI_CHALLENGE_PROJECTS_DELETE = "TAIKAI_CHALLENGE_PROJECTS_DELETE", E.TAIKAI_CHALLENGE_PROJECTS_EXPORT = "TAIKAI_CHALLENGE_PROJECTS_EXPORT", E.TAIKAI_CHALLENGE_PROJECTS_EXPORT__SELF = "TAIKAI_CHALLENGE_PROJECTS_EXPORT__SELF", E.TAIKAI_CHALLENGE_PROJECTS_LEADERBOARD_READ = "TAIKAI_CHALLENGE_PROJECTS_LEADERBOARD_READ", E.TAIKAI_CHALLENGE_PROJECTS_LEADERBOARD_READ__SELF = "TAIKAI_CHALLENGE_PROJECTS_LEADERBOARD_READ__SELF", E.TAIKAI_CHALLENGE_PROJECTS_MANAGE = "TAIKAI_CHALLENGE_PROJECTS_MANAGE", E.TAIKAI_CHALLENGE_PROJECTS_MANAGE__SELF = "TAIKAI_CHALLENGE_PROJECTS_MANAGE__SELF", E.TAIKAI_CHALLENGE_PROJECTS_MEMBER_ACCEPT = "TAIKAI_CHALLENGE_PROJECTS_MEMBER_ACCEPT", E.TAIKAI_CHALLENGE_PROJECTS_MEMBER_REJECT = "TAIKAI_CHALLENGE_PROJECTS_MEMBER_REJECT", E.TAIKAI_CHALLENGE_PROJECTS_OWNERSHIP_UPDATE = "TAIKAI_CHALLENGE_PROJECTS_OWNERSHIP_UPDATE", E.TAIKAI_CHALLENGE_PROJECTS_OWNERSHIP_UPDATE__SELF = "TAIKAI_CHALLENGE_PROJECTS_OWNERSHIP_UPDATE__SELF", E.TAIKAI_CHALLENGE_PROJECTS_READ = "TAIKAI_CHALLENGE_PROJECTS_READ", E.TAIKAI_CHALLENGE_PROJECTS_READ__SELF = "TAIKAI_CHALLENGE_PROJECTS_READ__SELF", E.TAIKAI_CHALLENGE_PROJECTS_UPDATE = "TAIKAI_CHALLENGE_PROJECTS_UPDATE", E.TAIKAI_CHALLENGE_READ = "TAIKAI_CHALLENGE_READ", E.TAIKAI_CHALLENGE_READ__SELF = "TAIKAI_CHALLENGE_READ__SELF", E.TAIKAI_CHALLENGE_STAT_REPORT = "TAIKAI_CHALLENGE_STAT_REPORT", E.TAIKAI_CHALLENGE_STAT_REPORT__SELF = "TAIKAI_CHALLENGE_STAT_REPORT__SELF", E.TAIKAI_CHALLENGE_STEPS_CREATE = "TAIKAI_CHALLENGE_STEPS_CREATE", E.TAIKAI_CHALLENGE_STEPS_DELETE = "TAIKAI_CHALLENGE_STEPS_DELETE", E.TAIKAI_CHALLENGE_STEPS_MANAGE = "TAIKAI_CHALLENGE_STEPS_MANAGE", E.TAIKAI_CHALLENGE_STEPS_MANAGE__SELF = "TAIKAI_CHALLENGE_STEPS_MANAGE__SELF", E.TAIKAI_CHALLENGE_STEPS_READ = "TAIKAI_CHALLENGE_STEPS_READ", E.TAIKAI_CHALLENGE_STEPS_READ__SELF = "TAIKAI_CHALLENGE_STEPS_READ__SELF", E.TAIKAI_CHALLENGE_STEPS_UPDATE = "TAIKAI_CHALLENGE_STEPS_UPDATE", E.TAIKAI_CHALLENGE_SUBMIT__SELF = "TAIKAI_CHALLENGE_SUBMIT__SELF", E.TAIKAI_CHALLENGE_TABS_CREATE = "TAIKAI_CHALLENGE_TABS_CREATE", E.TAIKAI_CHALLENGE_TABS_DELETE = "TAIKAI_CHALLENGE_TABS_DELETE", E.TAIKAI_CHALLENGE_TABS_MANAGE = "TAIKAI_CHALLENGE_TABS_MANAGE", E.TAIKAI_CHALLENGE_TABS_MANAGE__SELF = "TAIKAI_CHALLENGE_TABS_MANAGE__SELF", E.TAIKAI_CHALLENGE_TABS_UPDATE = "TAIKAI_CHALLENGE_TABS_UPDATE", E.TAIKAI_CHALLENGE_UPDATE = "TAIKAI_CHALLENGE_UPDATE", E.TAIKAI_CHALLENGE_UPDATE__SELF = "TAIKAI_CHALLENGE_UPDATE__SELF", E.TAIKAI_CHALLENGE_UPDATES_CREATE = "TAIKAI_CHALLENGE_UPDATES_CREATE", E.TAIKAI_CHALLENGE_UPDATES_DELETE = "TAIKAI_CHALLENGE_UPDATES_DELETE", E.TAIKAI_CHALLENGE_UPDATES_MANAGE = "TAIKAI_CHALLENGE_UPDATES_MANAGE", E.TAIKAI_CHALLENGE_UPDATES_MANAGE__SELF = "TAIKAI_CHALLENGE_UPDATES_MANAGE__SELF", E.TAIKAI_CHALLENGE_UPDATES_READ = "TAIKAI_CHALLENGE_UPDATES_READ", E.TAIKAI_CHALLENGE_UPDATES_UPDATE = "TAIKAI_CHALLENGE_UPDATES_UPDATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_CREATE = "TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_CREATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_DELETE = "TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_DELETE", E.TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_MANAGE = "TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_MANAGE", E.TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_READ = "TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_READ", E.TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_READ__SELF = "TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_READ__SELF", E.TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_UPDATE = "TAIKAI_CHALLENGE_VIDEOSTREAM__ON__DEMAND_UPDATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_CREATE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_CREATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_DELETE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_DELETE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_CREATE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_CREATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_DELETE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_DELETE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_MANAGE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_MANAGE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_UPDATE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_EVENT_UPDATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_MANAGE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_MANAGE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_READ = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_READ", E.TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_UPDATE = "TAIKAI_CHALLENGE_VIDEOSTREAM_LIVE__STAGE_UPDATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_SIMULCAST__TARGET_CREATE = "TAIKAI_CHALLENGE_VIDEOSTREAM_SIMULCAST__TARGET_CREATE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_SIMULCAST__TARGET_DELETE = "TAIKAI_CHALLENGE_VIDEOSTREAM_SIMULCAST__TARGET_DELETE", E.TAIKAI_CHALLENGE_VIDEOSTREAM_SIMULCAST__TARGET_MANAGE = "TAIKAI_CHALLENGE_VIDEOSTREAM_SIMULCAST__TARGET_MANAGE", E.TAIKAI_CHALLENGE_VOTING_CARTS_READ = "TAIKAI_CHALLENGE_VOTING_CARTS_READ", E.TAIKAI_CHALLENGE_VOTING_CARTS_READ__SELF = "TAIKAI_CHALLENGE_VOTING_CARTS_READ__SELF", E.TAIKAI_CHALLENGE_VOTING_CRITERIA_CREATE = "TAIKAI_CHALLENGE_VOTING_CRITERIA_CREATE", E.TAIKAI_CHALLENGE_VOTING_CRITERIA_DELETE = "TAIKAI_CHALLENGE_VOTING_CRITERIA_DELETE", E.TAIKAI_CHALLENGE_VOTING_CRITERIA_MANAGE = "TAIKAI_CHALLENGE_VOTING_CRITERIA_MANAGE", E.TAIKAI_CHALLENGE_VOTING_CRITERIA_MANAGE__SELF = "TAIKAI_CHALLENGE_VOTING_CRITERIA_MANAGE__SELF", E.TAIKAI_CHALLENGE_VOTING_CRITERIA_READ = "TAIKAI_CHALLENGE_VOTING_CRITERIA_READ", E.TAIKAI_CHALLENGE_VOTING_CRITERIA_READ__SELF = "TAIKAI_CHALLENGE_VOTING_CRITERIA_READ__SELF", E.TAIKAI_CHALLENGE_VOTING_CRITERIA_UPDATE = "TAIKAI_CHALLENGE_VOTING_CRITERIA_UPDATE", E.TAIKAI_CHALLENGE_VOTING_TRACK_CREATE = "TAIKAI_CHALLENGE_VOTING_TRACK_CREATE", E.TAIKAI_CHALLENGE_VOTING_TRACK_DELETE = "TAIKAI_CHALLENGE_VOTING_TRACK_DELETE", E.TAIKAI_CHALLENGE_VOTING_TRACK_MANAGE = "TAIKAI_CHALLENGE_VOTING_TRACK_MANAGE", E.TAIKAI_CHALLENGE_VOTING_TRACK_MANAGE__SELF = "TAIKAI_CHALLENGE_VOTING_TRACK_MANAGE__SELF", E.TAIKAI_CHALLENGE_VOTING_TRACK_READ = "TAIKAI_CHALLENGE_VOTING_TRACK_READ", E.TAIKAI_CHALLENGE_VOTING_TRACK_READ__SELF = "TAIKAI_CHALLENGE_VOTING_TRACK_READ__SELF", E.TAIKAI_CHALLENGE_VOTING_TRACK_UPDATE = "TAIKAI_CHALLENGE_VOTING_TRACK_UPDATE", E.TAIKAI_CHALLENGE_WEBHOOK_CALLS_READ = "TAIKAI_CHALLENGE_WEBHOOK_CALLS_READ", E.TAIKAI_CHALLENGE_WEBHOOK_CALLS_READ__SELF = "TAIKAI_CHALLENGE_WEBHOOK_CALLS_READ__SELF", E.TAIKAI_COMMUNITY__DATA_EXPORT = "TAIKAI_COMMUNITY__DATA_EXPORT", E.TAIKAI_CONTENT__PAGE_CREATE = "TAIKAI_CONTENT__PAGE_CREATE", E.TAIKAI_CONTENT__PAGE_UPDATE = "TAIKAI_CONTENT__PAGE_UPDATE", E.TAIKAI_CURRENCIES_CREATE = "TAIKAI_CURRENCIES_CREATE", E.TAIKAI_CURRENCIES_DELETE = "TAIKAI_CURRENCIES_DELETE", E.TAIKAI_CURRENCIES_MANAGE = "TAIKAI_CURRENCIES_MANAGE", E.TAIKAI_CURRENCIES_UPDATE = "TAIKAI_CURRENCIES_UPDATE", E.TAIKAI_ECONOMY_CALCULATE__DIVIDENDS = "TAIKAI_ECONOMY_CALCULATE__DIVIDENDS", E.TAIKAI_ECONOMY_COLLECT__AWARDS = "TAIKAI_ECONOMY_COLLECT__AWARDS", E.TAIKAI_ECONOMY_COLLECT__LEFTS = "TAIKAI_ECONOMY_COLLECT__LEFTS", E.TAIKAI_ECONOMY_DISTRIBUTE__DIVIDENDS = "TAIKAI_ECONOMY_DISTRIBUTE__DIVIDENDS", E.TAIKAI_ECONOMY_FUND = "TAIKAI_ECONOMY_FUND", E.TAIKAI_ECONOMY_ISSUE = "TAIKAI_ECONOMY_ISSUE", E.TAIKAI_ECONOMY_MINT = "TAIKAI_ECONOMY_MINT", E.TAIKAI_GLOBAL_DASHBOARD_READ = "TAIKAI_GLOBAL_DASHBOARD_READ", E.TAIKAI_INDUSTRIES_CREATE = "TAIKAI_INDUSTRIES_CREATE", E.TAIKAI_INDUSTRIES_DELETE = "TAIKAI_INDUSTRIES_DELETE", E.TAIKAI_INDUSTRIES_MANAGE = "TAIKAI_INDUSTRIES_MANAGE", E.TAIKAI_INDUSTRIES_UPDATE = "TAIKAI_INDUSTRIES_UPDATE", E.TAIKAI_INVITES_TO_PROJECT_ACCEPT = "TAIKAI_INVITES_TO_PROJECT_ACCEPT", E.TAIKAI_INVITES_TO_PROJECT_CREATE = "TAIKAI_INVITES_TO_PROJECT_CREATE", E.TAIKAI_INVITES_TO_PROJECT_DELETE = "TAIKAI_INVITES_TO_PROJECT_DELETE", E.TAIKAI_INVITES_TO_PROJECT_READ = "TAIKAI_INVITES_TO_PROJECT_READ", E.TAIKAI_INVITES_TO_PROJECT_REJECT = "TAIKAI_INVITES_TO_PROJECT_REJECT", E.TAIKAI_JOBS_CREATE = "TAIKAI_JOBS_CREATE", E.TAIKAI_JOBS_DELETE = "TAIKAI_JOBS_DELETE", E.TAIKAI_JOBS_MANAGE = "TAIKAI_JOBS_MANAGE", E.TAIKAI_JOBS_READ = "TAIKAI_JOBS_READ", E.TAIKAI_JOBS_UPDATE = "TAIKAI_JOBS_UPDATE", E.TAIKAI_MAIL__THREAD_READ = "TAIKAI_MAIL__THREAD_READ", E.TAIKAI_MAIL_STATUS_READ = "TAIKAI_MAIL_STATUS_READ", E.TAIKAI_NOTIFICATIONS_MARK_AS_READ = "TAIKAI_NOTIFICATIONS_MARK_AS_READ", E.TAIKAI_NOTIFICATIONS_READ = "TAIKAI_NOTIFICATIONS_READ", E.TAIKAI_ORGANIZATION_CREATE = "TAIKAI_ORGANIZATION_CREATE", E.TAIKAI_ORGANIZATION_DASHBOARD_READ = "TAIKAI_ORGANIZATION_DASHBOARD_READ", E.TAIKAI_ORGANIZATION_DELETE = "TAIKAI_ORGANIZATION_DELETE", E.TAIKAI_ORGANIZATION_DELETE__SELF = "TAIKAI_ORGANIZATION_DELETE__SELF", E.TAIKAI_ORGANIZATION_INVITES_CREATE = "TAIKAI_ORGANIZATION_INVITES_CREATE", E.TAIKAI_ORGANIZATION_INVITES_CREATE__SELF = "TAIKAI_ORGANIZATION_INVITES_CREATE__SELF", E.TAIKAI_ORGANIZATION_INVITES_DELETE = "TAIKAI_ORGANIZATION_INVITES_DELETE", E.TAIKAI_ORGANIZATION_INVITES_DELETE__SELF = "TAIKAI_ORGANIZATION_INVITES_DELETE__SELF", E.TAIKAI_ORGANIZATION_INVITES_MANAGE = "TAIKAI_ORGANIZATION_INVITES_MANAGE", E.TAIKAI_ORGANIZATION_INVITES_READ = "TAIKAI_ORGANIZATION_INVITES_READ", E.TAIKAI_ORGANIZATION_INVITES_READ__SELF = "TAIKAI_ORGANIZATION_INVITES_READ__SELF", E.TAIKAI_ORGANIZATION_MANAGE = "TAIKAI_ORGANIZATION_MANAGE", E.TAIKAI_ORGANIZATION_MEMBERS_CREATE = "TAIKAI_ORGANIZATION_MEMBERS_CREATE", E.TAIKAI_ORGANIZATION_MEMBERS_DELETE = "TAIKAI_ORGANIZATION_MEMBERS_DELETE", E.TAIKAI_ORGANIZATION_MEMBERS_MANAGE = "TAIKAI_ORGANIZATION_MEMBERS_MANAGE", E.TAIKAI_ORGANIZATION_MEMBERS_MANAGE__SELF = "TAIKAI_ORGANIZATION_MEMBERS_MANAGE__SELF", E.TAIKAI_ORGANIZATION_MEMBERS_PERMISSION_UPDATE__SELF = "TAIKAI_ORGANIZATION_MEMBERS_PERMISSION_UPDATE__SELF", E.TAIKAI_ORGANIZATION_MEMBERS_READ = "TAIKAI_ORGANIZATION_MEMBERS_READ", E.TAIKAI_ORGANIZATION_MEMBERS_READ__SELF = "TAIKAI_ORGANIZATION_MEMBERS_READ__SELF", E.TAIKAI_ORGANIZATION_MEMBERS_UPDATE = "TAIKAI_ORGANIZATION_MEMBERS_UPDATE", E.TAIKAI_ORGANIZATION_READ = "TAIKAI_ORGANIZATION_READ", E.TAIKAI_ORGANIZATION_READ__SELF = "TAIKAI_ORGANIZATION_READ__SELF", E.TAIKAI_ORGANIZATION_UPDATE = "TAIKAI_ORGANIZATION_UPDATE", E.TAIKAI_ORGANIZATION_UPDATE__SELF = "TAIKAI_ORGANIZATION_UPDATE__SELF", E.TAIKAI_PERMISSIONS_READ = "TAIKAI_PERMISSIONS_READ", E.TAIKAI_PERMISSIONS_READ__SELF = "TAIKAI_PERMISSIONS_READ__SELF", E.TAIKAI_PROJECTS_BACKER_READ__SELF = "TAIKAI_PROJECTS_BACKER_READ__SELF", E.TAIKAI_PROJECTS_POSITION_CREATE = "TAIKAI_PROJECTS_POSITION_CREATE", E.TAIKAI_PROJECTS_POSITION_DELETE = "TAIKAI_PROJECTS_POSITION_DELETE", E.TAIKAI_PROJECTS_POSITION_UPDATE = "TAIKAI_PROJECTS_POSITION_UPDATE", E.TAIKAI_PUBLICATION_UPDATE = "TAIKAI_PUBLICATION_UPDATE", E.TAIKAI_REDEEM__VOUCHER_DELETE = "TAIKAI_REDEEM__VOUCHER_DELETE", E.TAIKAI_REDEEM__VOUCHER_READ = "TAIKAI_REDEEM__VOUCHER_READ", E.TAIKAI_REPORT_MANAGE = "TAIKAI_REPORT_MANAGE", E.TAIKAI_REPORT_MANAGE__SELF = "TAIKAI_REPORT_MANAGE__SELF", E.TAIKAI_ROLE_CREATE = "TAIKAI_ROLE_CREATE", E.TAIKAI_ROLE_DELETE = "TAIKAI_ROLE_DELETE", E.TAIKAI_ROLE_MANAGE = "TAIKAI_ROLE_MANAGE", E.TAIKAI_ROLE_READ = "TAIKAI_ROLE_READ", E.TAIKAI_ROLE_READ__SELF = "TAIKAI_ROLE_READ__SELF", E.TAIKAI_ROLE_UPDATE = "TAIKAI_ROLE_UPDATE", E.TAIKAI_SETTINGS_SET__CONFIGURATION = "TAIKAI_SETTINGS_SET__CONFIGURATION", E.TAIKAI_STORIES_CREATE = "TAIKAI_STORIES_CREATE", E.TAIKAI_STORIES_DELETE = "TAIKAI_STORIES_DELETE", E.TAIKAI_STORIES_MANAGE = "TAIKAI_STORIES_MANAGE", E.TAIKAI_STORIES_PUBLISH = "TAIKAI_STORIES_PUBLISH", E.TAIKAI_STORIES_READ = "TAIKAI_STORIES_READ", E.TAIKAI_STORIES_UPDATE = "TAIKAI_STORIES_UPDATE", E.TAIKAI_SUBSCRIPTION_MAIL__BOX = "TAIKAI_SUBSCRIPTION_MAIL__BOX", E.TAIKAI_SUBSCRIPTION_NOTIFICATIONS = "TAIKAI_SUBSCRIPTION_NOTIFICATIONS", E.TAIKAI_SUBSCRIPTION_VOTING__CART = "TAIKAI_SUBSCRIPTION_VOTING__CART", E.TAIKAI_TECH__SKILLS_CREATE = "TAIKAI_TECH__SKILLS_CREATE", E.TAIKAI_TECH__SKILLS_DELETE = "TAIKAI_TECH__SKILLS_DELETE", E.TAIKAI_TECH__SKILLS_MANAGE = "TAIKAI_TECH__SKILLS_MANAGE", E.TAIKAI_TECH__SKILLS_UPDATE = "TAIKAI_TECH__SKILLS_UPDATE", E.TAIKAI_TRANSACTIONS_EXPORT = "TAIKAI_TRANSACTIONS_EXPORT", E.TAIKAI_TRANSACTIONS_READ = "TAIKAI_TRANSACTIONS_READ", E.TAIKAI_TRANSACTIONS_SUBSCRIBE = "TAIKAI_TRANSACTIONS_SUBSCRIBE", E.TAIKAI_USER_ACCESS__TOKENS_CREATE = "TAIKAI_USER_ACCESS__TOKENS_CREATE", E.TAIKAI_USER_ACCESS__TOKENS_DELETE = "TAIKAI_USER_ACCESS__TOKENS_DELETE", E.TAIKAI_USER_ACCESS__TOKENS_MANAGE = "TAIKAI_USER_ACCESS__TOKENS_MANAGE", E.TAIKAI_USER_ACCESS__TOKENS_READ = "TAIKAI_USER_ACCESS__TOKENS_READ", E.TAIKAI_USER_ACCESS__TOKENS_UPDATE = "TAIKAI_USER_ACCESS__TOKENS_UPDATE", E.TAIKAI_USER_ACCOUNT__VERIFICATIONS_INVALIDATE = "TAIKAI_USER_ACCOUNT__VERIFICATIONS_INVALIDATE", E.TAIKAI_USER_ACCOUNT__VERIFICATIONS_READ = "TAIKAI_USER_ACCOUNT__VERIFICATIONS_READ", E.TAIKAI_USER_DELETE = "TAIKAI_USER_DELETE", E.TAIKAI_USER_LEADERBOARD_READ = "TAIKAI_USER_LEADERBOARD_READ", E.TAIKAI_USER_LEADERBOARD_READ__SELF = "TAIKAI_USER_LEADERBOARD_READ__SELF", E.TAIKAI_USER_MANAGE = "TAIKAI_USER_MANAGE", E.TAIKAI_USER_PERMISSION_UPDATE = "TAIKAI_USER_PERMISSION_UPDATE", E.TAIKAI_USER_READ = "TAIKAI_USER_READ", E.TAIKAI_USER_REFERRALS_READ = "TAIKAI_USER_REFERRALS_READ", E.TAIKAI_USER_REFERRALS_SEND = "TAIKAI_USER_REFERRALS_SEND", E.TAIKAI_USER_SEARCH = "TAIKAI_USER_SEARCH", E.TAIKAI_USER_SEARCH__SELF = "TAIKAI_USER_SEARCH__SELF", E.TAIKAI_USER_SESSIONS_READ = "TAIKAI_USER_SESSIONS_READ", E.TAIKAI_USER_SESSIONS_REVOKE = "TAIKAI_USER_SESSIONS_REVOKE", E.TAIKAI_USER_TRANSFER__KAI = "TAIKAI_USER_TRANSFER__KAI", E.TAIKAI_USER_UPDATE = "TAIKAI_USER_UPDATE", E.TAIKAI_VOUCHER_CREATE = "TAIKAI_VOUCHER_CREATE", E.TAIKAI_VOUCHER_DELETE = "TAIKAI_VOUCHER_DELETE", E.TAIKAI_VOUCHER_MANAGE = "TAIKAI_VOUCHER_MANAGE", E.TAIKAI_VOUCHER_READ = "TAIKAI_VOUCHER_READ", E.TAIKAI_VOUCHER_UPDATE = "TAIKAI_VOUCHER_UPDATE", E.TAIKAI_WEBHOOKS_CREATE = "TAIKAI_WEBHOOKS_CREATE", E.TAIKAI_WEBHOOKS_DELETE = "TAIKAI_WEBHOOKS_DELETE", E.TAIKAI_WEBHOOKS_MANAGE = "TAIKAI_WEBHOOKS_MANAGE", E.TAIKAI_WEBHOOKS_READ = "TAIKAI_WEBHOOKS_READ", E.TAIKAI_WEBHOOKS_UPDATE = "TAIKAI_WEBHOOKS_UPDATE"
                }(sI || (sI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.description_br = "description_br", E.description_es = "description_es", E.description_fr = "description_fr", E.id = "id", E.title = "title", E.title_br = "title_br", E.title_es = "title_es", E.title_fr = "title_fr", E.updatedAt = "updatedAt"
                }(uI || (uI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.expiresAt = "expiresAt", E.id = "id", E.informationToConfirm = "informationToConfirm", E.informationToConfirmType = "informationToConfirmType", E.tokenType = "tokenType", E.updatedAt = "updatedAt", E.userId = "userId", E.value = "value"
                }(GI || (GI = {})),
                function(E) {
                    E.ReadCommitted = "ReadCommitted", E.ReadUncommitted = "ReadUncommitted", E.RepeatableRead = "RepeatableRead", E.Serializable = "Serializable"
                }(KI || (KI = {})),
                function(E) {
                    E.blockNumber = "blockNumber", E.createdAt = "createdAt", E.effectiveGasPrice = "effectiveGasPrice", E.from = "from", E.gasUsed = "gasUsed", E.id = "id", E.returnValues = "returnValues", E.to = "to", E.transactionHash = "transactionHash", E.transactionIndex = "transactionIndex", E.updatedAt = "updatedAt"
                }(PI || (PI = {})),
                function(E) {
                    E.action = "action", E.amount = "amount", E.attempts = "attempts", E.completedPhases = "completedPhases", E.createdAt = "createdAt", E.currency = "currency", E.error = "error", E.fee = "fee", E.fromEOA = "fromEOA", E.fromId = "fromId", E.hash = "hash", E.id = "id", E.memo = "memo", E.metadata = "metadata", E.nonce = "nonce", E.status = "status", E.timestamp = "timestamp", E.toEOA = "toEOA", E.toId = "toId", E.tokensCollectingStatus = "tokensCollectingStatus", E.transactionHash = "transactionHash", E.updatedAt = "updatedAt", E.uri = "uri"
                }(lI || (lI = {})),
                function(E) {
                    E.backupCode = "backupCode", E.createdAt = "createdAt", E.failedAttempts = "failedAttempts", E.id = "id", E.isLocked = "isLocked", E.lastAttempt = "lastAttempt", E.salt = "salt", E.secret = "secret", E.updatedAt = "updatedAt", E.userId = "userId"
                }(pI || (pI = {})),
                function(E) {
                    E.DEPOSIT = "DEPOSIT", E.WITHDRAW = "WITHDRAW"
                }(UI || (UI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.description = "description", E.id = "id", E.name = "name", E.state = "state", E.updatedAt = "updatedAt"
                }(HI || (HI = {})),
                function(E) {
                    E.academicExperience = "academicExperience", E.authType = "authType", E.bio = "bio", E.birthDate = "birthDate", E.city = "city", E.company = "company", E.confirmedAt = "confirmedAt", E.country = "country", E.coverImageFileId = "coverImageFileId", E.createdAt = "createdAt", E.discordUsername = "discordUsername", E.email = "email", E.facebookUrl = "facebookUrl", E.followersCount = "followersCount", E.fullName = "fullName", E.gender = "gender", E.githubUrl = "githubUrl", E.githubUsername = "githubUsername", E.homepage = "homepage", E.id = "id", E.identityVerificationId = "identityVerificationId", E.incId = "incId", E.indexScore = "indexScore", E.instagramUrl = "instagramUrl", E.isNewsletterSubscriber = "isNewsletterSubscriber", E.isReferralAllowed = "isReferralAllowed", E.jobTitle_old = "jobTitle_old", E.jobTitleId = "jobTitleId", E.linkedInUrl = "linkedInUrl", E.locale = "locale", E.metadata = "metadata", E.participantsCount = "participantsCount", E.password = "password", E.phoneNumber = "phoneNumber", E.photoImageFileId = "photoImageFileId", E.points = "points", E.postalCode = "postalCode", E.projectsCount = "projectsCount", E.referralCount = "referralCount", E.referrerId = "referrerId", E.settings = "settings", E.state = "state", E.streetName = "streetName", E.streetNumber = "streetNumber", E.twitterUrl = "twitterUrl", E.updatedAt = "updatedAt", E.username = "username", E.viewsCount = "viewsCount", E.workExperience = "workExperience"
                }(MI || (MI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.description = "description", E.duration = "duration", E.id = "id", E.permissions = "permissions", E.source = "source", E.thumbUrl = "thumbUrl", E.title = "title", E.updatedAt = "updatedAt", E.url = "url"
                }(mI || (mI = {})),
                function(E) {
                    E.amount = "amount", E.assess = "assess", E.cartId = "cartId", E.createdAt = "createdAt", E.id = "id", E.projectId = "projectId", E.status = "status", E.transactionId = "transactionId", E.updatedAt = "updatedAt"
                }(FI || (FI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.juryId = "juryId", E.status = "status", E.stepId = "stepId", E.submittedAt = "submittedAt", E.updatedAt = "updatedAt", E.votingTrackId = "votingTrackId"
                }(fI || (fI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.criteriaId = "criteriaId", E.id = "id", E.score = "score", E.updatedAt = "updatedAt", E.votingCartItemId = "votingCartItemId"
                }(VI || (VI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.name = "name", E.updatedAt = "updatedAt"
                }(gI || (gI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.criteriaGroupId = "criteriaGroupId", E.description = "description", E.id = "id", E.name = "name", E.updatedAt = "updatedAt", E.weight = "weight"
                }(BI || (BI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.id = "id", E.name = "name", E.numQualifiedProjects = "numQualifiedProjects", E.scope = "scope", E.type = "type", E.updatedAt = "updatedAt", E.votingCriteriaGroupId = "votingCriteriaGroupId", E.votingScheme = "votingScheme", E.votingType = "votingType"
                }(hI || (hI = {})),
                function(E) {
                    E.createdAt = "createdAt", E.id = "id", E.quantity = "quantity", E.redemptionAt = "redemptionAt", E.status = "status", E.updatedAt = "updatedAt", E.userId = "userId", E.voucherId = "voucherId"
                }(bI || (bI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.challengeStepId = "challengeStepId", E.code = "code", E.count = "count", E.createdAt = "createdAt", E.description = "description", E.expiresAt = "expiresAt", E.id = "id", E.maxCount = "maxCount", E.name = "name", E.quantityPerReedem = "quantityPerReedem", E.status = "status", E.type = "type", E.updatedAt = "updatedAt", E.validFrom = "validFrom", E.votingTrackId = "votingTrackId"
                }(JI || (JI = {})),
                function(E) {
                    E.accountId = "accountId", E.address = "address", E.balance = "balance", E.challengeId = "challengeId", E.createdAt = "createdAt", E.currency = "currency", E.guestUserId = "guestUserId", E.id = "id", E.projectId = "projectId", E.type = "type", E.updatedAt = "updatedAt", E.userId = "userId", E.votingTrackId = "votingTrackId"
                }(yI || (yI = {})),
                function(E) {
                    E.challengeId = "challengeId", E.createdAt = "createdAt", E.formId = "formId", E.id = "id", E.inviteToJuryId = "inviteToJuryId", E.inviteToParticipantId = "inviteToParticipantId", E.organizationId = "organizationId", E.state = "state", E.status = "status", E.statusText = "statusText", E.storyId = "storyId", E.type = "type", E.updatedAt = "updatedAt", E.url = "url"
                }(kI || (kI = {})),
                function(E) {
                    E.appConfigurationId = "appConfigurationId", E.createdAt = "createdAt", E.id = "id", E.isEnabled = "isEnabled", E.title = "title", E.updatedAt = "updatedAt", E.webhookKey = "webhookKey", E.webhookUrl = "webhookUrl"
                }(vI || (vI = {}))
        }
    }
]);