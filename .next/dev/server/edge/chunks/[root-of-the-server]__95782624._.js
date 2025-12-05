(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__95782624._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/utils/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Утилиты для работы с ролями и правами доступа
__turbopack_context__.s([
    "ADMIN_ROLES",
    ()=>ADMIN_ROLES,
    "canManageAdmins",
    ()=>canManageAdmins,
    "getRoleName",
    ()=>getRoleName,
    "hasAdminAccess",
    ()=>hasAdminAccess,
    "hasFullAdminAccess",
    ()=>hasFullAdminAccess,
    "isAdmin",
    ()=>isAdmin,
    "isChatOnlyAccess",
    ()=>isChatOnlyAccess,
    "isChiefDoctor",
    ()=>isChiefDoctor,
    "isOperator",
    ()=>isOperator
]);
const ADMIN_ROLES = [
    "ADMIN",
    "CHIEF_DOCTOR",
    "OPERATOR"
];
function hasAdminAccess(role) {
    if (!role) return false;
    return ADMIN_ROLES.includes(role);
}
function hasFullAdminAccess(role) {
    if (!role) return false;
    return role === "ADMIN" || role === "CHIEF_DOCTOR";
}
function canManageAdmins(role) {
    return role === "CHIEF_DOCTOR";
}
function isChatOnlyAccess(role) {
    return role === "OPERATOR";
}
function isAdmin(role) {
    return role === "ADMIN";
}
function isChiefDoctor(role) {
    return role === "CHIEF_DOCTOR";
}
function isOperator(role) {
    return role === "OPERATOR";
}
function getRoleName(role) {
    switch(role){
        case "ADMIN":
            return "Администратор";
        case "CHIEF_DOCTOR":
            return "Главный врач";
        case "OPERATOR":
            return "Оператор";
        case "USER":
            return "Пользователь";
        default:
            return "Неизвестная роль";
    }
}
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/jwt/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/auth.ts [middleware-edge] (ecmascript)");
;
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // Защищаем роуты /admin
    if (pathname.startsWith("/admin")) {
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getToken"])({
            req: request,
            secret: process.env.NEXTAUTH_SECRET
        });
        // Если пользователь не авторизован или не имеет нужной роли - редирект на главную
        if (!token || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasAdminAccess"])(token.role)) {
            const url = request.nextUrl.clone();
            url.pathname = "/";
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
        }
        // Если пользователь - оператор (только доступ к чату)
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isChatOnlyAccess"])(token.role)) {
            // Разрешаем доступ только к /admin и /admin/chat
            if (pathname === "/admin" || pathname.startsWith("/admin/chat")) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
            }
            // Для всех остальных роутов - редирект на чат
            const url = request.nextUrl.clone();
            url.pathname = "/admin/chat";
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
        }
        // Для администраторов и главного врача - полный доступ
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hasFullAdminAccess"])(token.role)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        // Применяем middleware к роутам админ-панели
        "/admin/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__95782624._.js.map