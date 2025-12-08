module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        'query',
        'error',
        'warn'
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/utils/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/utils/api-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkAdminAccess",
    ()=>checkAdminAccess,
    "checkAdminManagementAccess",
    ()=>checkAdminManagementAccess,
    "checkChatAccess",
    ()=>checkChatAccess,
    "checkFullAdminAccess",
    ()=>checkFullAdminAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/jwt/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/auth.ts [app-route] (ecmascript)");
;
;
async function checkAdminAccess(request) {
    try {
        // Получаем токен из сессии
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getToken"])({
            req: request,
            secret: process.env.NEXTAUTH_SECRET
        });
        // Проверяем наличие токена и ID пользователя
        if (!token || !token.id) {
            return {
                isAdmin: false,
                error: "Не авторизован"
            };
        }
        // Проверяем роль пользователя
        const userRole = token.role;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasAdminAccess"])(userRole)) {
            return {
                isAdmin: false,
                error: "Нет прав доступа"
            };
        }
        return {
            isAdmin: true,
            userId: parseInt(token.id),
            role: userRole,
            hasFullAccess: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasFullAdminAccess"])(userRole),
            canManageAdmins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canManageAdmins"])(userRole)
        };
    } catch (error) {
        return {
            isAdmin: false,
            error: "Ошибка при проверке прав доступа"
        };
    }
}
async function checkFullAdminAccess(request) {
    const result = await checkAdminAccess(request);
    if (!result.isAdmin) {
        return result;
    }
    if (!result.hasFullAccess) {
        return {
            isAdmin: false,
            error: "Недостаточно прав доступа"
        };
    }
    return result;
}
async function checkChatAccess(request) {
    // Для чата достаточно базового админского доступа (включая операторов)
    return checkAdminAccess(request);
}
async function checkAdminManagementAccess(request) {
    const result = await checkAdminAccess(request);
    if (!result.isAdmin) {
        return result;
    }
    if (!result.canManageAdmins) {
        return {
            isAdmin: false,
            error: "Доступ только для главного врача"
        };
    }
    return result;
}
}),
"[project]/src/app/api/admin/users/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
;
async function GET(request) {
    try {
        const adminCheck = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkFullAdminAccess"])(request);
        if (!adminCheck.isAdmin) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: adminCheck.error
            }, {
                status: 403
            });
        }
        // Получаем параметры пагинации и поиска
        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');
        const search = searchParams.get('search') || '';
        const roleFilter = searchParams.get('role') || 'all';
        // Формируем условия поиска
        const whereCondition = {
            role: {
                not: "CHIEF_DOCTOR"
            }
        };
        if (search) {
            whereCondition.OR = [
                {
                    name: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    email: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    login: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    phone: {
                        contains: search,
                        mode: 'insensitive'
                    }
                }
            ];
        }
        // Фильтр по роли
        if (roleFilter === 'admin') {
            whereCondition.role = 'ADMIN';
        } else if (roleFilter === 'operator') {
            whereCondition.role = 'OPERATOR';
        }
        // Подсчитываем общее количество
        const totalCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.count({
            where: whereCondition
        });
        // Получаем пользователей для текущей страницы
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.findMany({
            where: whereCondition,
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                login: true,
                role: true,
                avatar_url: true,
                registration_date: true,
                is_messages_blocked: true
            },
            orderBy: {
                registration_date: 'desc'
            },
            skip: (page - 1) * limit,
            take: limit
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: users,
            totalCount,
            page,
            limit,
            totalPages: Math.ceil(totalCount / limit)
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Ошибка при получении пользователей"
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const adminCheck = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkFullAdminAccess"])(request);
        if (!adminCheck.isAdmin) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: adminCheck.error
            }, {
                status: 403
            });
        }
        const currentUserId = adminCheck.userId;
        const currentUserRole = adminCheck.role;
        // Получаем пароль текущего пользователя для проверки при назначении ADMIN
        const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.findUnique({
            where: {
                id: currentUserId
            },
            select: {
                password: true
            }
        });
        const { userId, newRole, adminPassword } = await request.json();
        // Валидация данных
        if (!userId || !newRole) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Не указан пользователь или роль"
            }, {
                status: 400
            });
        }
        // Проверяем что роль допустимая
        if (![
            "USER",
            "OPERATOR",
            "ADMIN"
        ].includes(newRole)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Недопустимая роль"
            }, {
                status: 400
            });
        }
        // ADMIN может назначать только OPERATOR (не ADMIN)
        if (currentUserRole === "ADMIN" && newRole === "ADMIN") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Администратор не может назначать других администраторов"
            }, {
                status: 403
            });
        }
        // Если назначаем ADMIN - требуем подтверждение пароля (только CHIEF_DOCTOR может)
        if (newRole === "ADMIN") {
            if (!adminCheck.canManageAdmins) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Только главный врач может назначать администраторов"
                }, {
                    status: 403
                });
            }
            if (!adminPassword) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Для назначения администратора требуется подтверждение пароля"
                }, {
                    status: 400
                });
            }
            // Проверяем пароль главного врача
            if (!currentUser) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Ошибка проверки пароля"
                }, {
                    status: 500
                });
            }
            const isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(adminPassword, currentUser.password);
            if (!isPasswordValid) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Неверный пароль"
                }, {
                    status: 401
                });
            }
        }
        // Получаем целевого пользователя
        const targetUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.findUnique({
            where: {
                id: parseInt(userId)
            },
            select: {
                role: true
            }
        });
        if (!targetUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Пользователь не найден"
            }, {
                status: 404
            });
        }
        // Нельзя менять роль главному врачу
        if (targetUser.role === "CHIEF_DOCTOR") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Нельзя изменить роль главного врача"
            }, {
                status: 403
            });
        }
        // ADMIN не может снимать права с ADMIN (только CHIEF_DOCTOR)
        if (currentUserRole === "ADMIN" && targetUser.role === "ADMIN") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Администратор не может изменять роль другого администратора"
            }, {
                status: 403
            });
        }
        // Обновляем роль
        const updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.update({
            where: {
                id: parseInt(userId)
            },
            data: {
                role: newRole
            },
            select: {
                id: true,
                name: true,
                role: true
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(updatedUser);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Ошибка при изменении роли"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__daa3c46b._.js.map