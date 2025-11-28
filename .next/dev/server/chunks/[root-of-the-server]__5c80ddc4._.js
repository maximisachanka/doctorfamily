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
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

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
"[project]/src/app/api/auth/[...nextauth]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>handler,
    "POST",
    ()=>handler,
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
;
;
const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: "Credentials",
            credentials: {
                login: {
                    label: "Логин",
                    type: "text"
                },
                password: {
                    label: "Пароль",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.login || !credentials?.password) {
                    return null;
                }
                try {
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.findFirst({
                        where: {
                            login: credentials.login
                        }
                    });
                    if (!user) {
                        return null;
                    }
                    const isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                    if (!isPasswordValid) {
                        return null;
                    }
                    return {
                        id: user.id.toString(),
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        image: user.avatar_url
                    };
                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.picture = user.image;
            }
            return token;
        },
        async session ({ session, token }) {
            if (session.user && token.id) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.image = token.picture;
            }
            return session;
        }
    }
};
const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(authOptions);
;
}),
"[project]/src/data/SMServicesData/SMServicesMenuData.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"menuData":[{"id":"pediatric-dentistry","title":"Детская стоматология","icon":"Baby","children":[{"id":"pediatric-surgeon","title":"Детский хирург-стоматолог"},{"id":"milk-teeth-treatment","title":"Лечение молочных зубов"},{"id":"pediatric-orthodontist","title":"Детский ортодонт"},{"id":"milk-teeth-anesthesia","title":"Лечение молочных зубов под наркозом в Минске"}]},{"id":"dentistry","title":"Стоматология","icon":"Smile","children":[{"id":"therapeutic-dentistry","title":"Терапевтическая стоматология","children":[{"id":"teeth-whitening","title":"Отбеливание зубов Beyond Polus"},{"id":"professional-cleaning","title":"Профессиональная чистка зубов Air Flow"},{"id":"ultrasonic-cleaning","title":"Чистка зубов в Минске — ультразвуковая и профессиональная"},{"id":"pulpitis-treatment","title":"Лечение пульпита в Минске — стоимость"},{"id":"oral-hygiene","title":"Профессиональная гигиена полости рта"},{"id":"caries-treatment","title":"Лечение кариеса в Минске"}]},{"id":"implantation","title":"Имплантация","children":[{"id":"straumann-implants","title":"Имплантация зубов Straumann в Минске"},{"id":"total-implantation","title":"Тотальная (полная) имплантация зубов в Минске"},{"id":"immediate-implantation","title":"Одномоментная имплантация зубов в Минске"},{"id":"osstem-implants","title":"Имплантация зубов Osstem в Минске"},{"id":"all-on-4-6","title":"Имплантация зубов All-on-4 и All-on-6 в Минске"},{"id":"two-stage-implantation","title":"Двухэтапная имплантация зубов в Минске"},{"id":"implantation-prices","title":"Имплантация зубов в Минске — цены и виды"}]},{"id":"orthopedics","title":"Ортопедия","children":[{"id":"veneers","title":"Виниры в Минске — цены и установка"},{"id":"crowns","title":"Коронки на зубы в Минске — цены и виды"}]},{"id":"orthodontics","title":"Ортодонтия","children":[{"id":"braces-installation","title":"Установка брекетов в Минске"},{"id":"orthodontist-consultation","title":"Ортодонт в Минске — консультация врача и лечение прикуса"},{"id":"aligners","title":"Элайнеры в Минске — цены на выравнивание зубов без брекетов"}]},{"id":"surgery","title":"Хирургия","children":[{"id":"tooth-extraction","title":"Удаление зубов в Минске — удаление зуба мудрости и другие сложные случаи"},{"id":"sinus-lift","title":"Синус-лифтинг в Минске — цены и виды операции"}]},{"id":"anesthesia-treatment","title":"Лечение зубов под наркозом в Минске"},{"id":"microscope-treatment","title":"Лечение зубов под микроскопом в Минске"}]},{"id":"gynecology","title":"Гинекология","icon":"Heart","children":[{"id":"gynecologist-appointment","title":"Приём гинеколога"},{"id":"diagnostic-studies","title":"Диагностические исследования"},{"id":"intrauterine-device","title":"Внутриматочная спираль"},{"id":"cervical-conization","title":"Конизация шейки матки"},{"id":"colposcopy","title":"Кольпоскопия шейки матки"},{"id":"tube-patency-check","title":"Проверка проходимости маточных труб (соногистероскопия) с помощью ExEm-геля"},{"id":"polyp-removal","title":"Удаление полипов | Полипэктомия"},{"id":"diagnostic-curettage","title":"Раздельное диагностическое выскабливание"},{"id":"culdocentesis","title":"Кульдоцентез"}]},{"id":"pediatric-gynecology","title":"Детская гинекология","icon":"Baby","children":[{"id":"pelvic-ultrasound-girls","title":"УЗИ органов малого таза для девочек"},{"id":"adolescent-gynecologist","title":"Подростковый гинеколог"},{"id":"pediatric-gynecologist","title":"Детский гинеколог"}]},{"id":"pediatric-urology","title":"Детская урология","icon":"Stethoscope","children":[{"id":"varicocele-treatment","title":"Лечение варикоцеле"},{"id":"pediatric-urologist-appointment","title":"Приём детского уролога"}]},{"id":"endocrinology","title":"Эндокринология","icon":"Activity","children":[{"id":"endocrinologist-consultation","title":"Консультация врача-эндокринолога"}]},{"id":"oncology","title":"Онкология","icon":"Stethoscope","children":[{"id":"oncologist-appointment","title":"Приём врача онколога"}]},{"id":"ultrasound","title":"УЗИ","icon":"Eye","children":[{"id":"pelvic-ultrasound","title":"УЗИ органов малого таза"},{"id":"breast-ultrasound","title":"УЗИ молочных желез"},{"id":"thyroid-ultrasound","title":"УЗИ щитовидной железы"},{"id":"abdominal-ultrasound","title":"УЗИ брюшной полости"},{"id":"fetal-ultrasound","title":"УЗИ плода"},{"id":"gender-party","title":"Гендер пати"}]},{"id":"cardiology","title":"Кардиология","icon":"Heart","children":[{"id":"echo-kg","title":"ЭХО-КГ (УЗИ сердца)"},{"id":"ecg","title":"ЭКГ (электрокардиография)"},{"id":"holter-monitoring","title":"Холтеровское мониторирование"},{"id":"cardiologist-appointment","title":"Приём кардиолога"}]},{"id":"diagnostics","title":"Диагностика","icon":"Search","children":[{"id":"expert-ultrasound","title":"Экспертное УЗИ"},{"id":"analyses","title":"Анализы"},{"id":"tooth-xray","title":"Снимок зуба"},{"id":"3d-dental-scan","title":"3D снимок зубов"},{"id":"panoramic-dental-scan","title":"Панорамный снимок зубок"}]},{"id":"day-hospital","title":"Дневной стационар","icon":"Building2","children":[{"id":"procedure-room","title":"Процедурный кабинет"}]}]});}),
"[project]/src/app/api/search/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/auth/[...nextauth]/route.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$SMServicesData$2f$SMServicesMenuData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/SMServicesData/SMServicesMenuData.json (json)");
;
;
;
;
;
// Функция для рекурсивного поиска в меню услуг
function searchInServiceMenu(items, searchTerm, categoryPath = []) {
    const results = [];
    const lowerSearchTerm = searchTerm.toLowerCase();
    for (const item of items){
        const titleMatch = item.title.toLowerCase().includes(lowerSearchTerm);
        const descriptionMatch = item.description?.toLowerCase().includes(lowerSearchTerm);
        if (titleMatch || descriptionMatch) {
            // Формируем категорию - используем путь категорий или первый элемент
            const displayCategory = categoryPath.length > 0 ? categoryPath[0] // Показываем только корневую категорию
             : 'Услуги';
            results.push({
                id: `service-menu-${item.id}`,
                title: item.title,
                description: item.description || `Раздел услуг: ${item.title}`,
                category: displayCategory,
                url: `/services/${item.id}`,
                type: "service"
            });
        }
        // Рекурсивный поиск в подкатегориях
        if (item.children && item.children.length > 0) {
            // Если путь пустой - начинаем новый путь с текущего элемента
            // Если путь уже есть - продолжаем его
            const newPath = categoryPath.length === 0 ? [
                item.title
            ] : categoryPath;
            const childResults = searchInServiceMenu(item.children, searchTerm, newPath);
            results.push(...childResults);
        }
    }
    return results;
}
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("q");
        // Минимум 3 символа
        if (!query || query.trim().length < 3) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                results: []
            }, {
                status: 200
            });
        }
        const searchTerm = query.trim();
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        const isAuthenticated = !!session?.user;
        // Поиск по всем таблицам БД параллельно
        const [services, specialists, vacancies, faqs, materials, partners, contacts] = await Promise.all([
            // 1. Услуги
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].service.findMany({
                where: {
                    OR: [
                        {
                            title: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            subtitle: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            description: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                include: {
                    category: true,
                    serviceCategory: true
                },
                take: 50
            }),
            // 2. Специалисты
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].specialist.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            specialization: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            qualification: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                include: {
                    category: true
                },
                take: 50
            }),
            // 3. Вакансии (клиника)
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].vacancy.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            category: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            description: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            requirements: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                take: 50
            }),
            // 4. FAQ (клиника)
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].question.findMany({
                where: {
                    OR: [
                        {
                            question: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            answer: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                take: 50
            }),
            // 5. Материалы (только для авторизованных)
            isAuthenticated ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].material.findMany({
                where: {
                    AND: [
                        {
                            is_active: true
                        },
                        {
                            OR: [
                                {
                                    title: {
                                        contains: searchTerm,
                                        mode: "insensitive"
                                    }
                                },
                                {
                                    content: {
                                        contains: searchTerm,
                                        mode: "insensitive"
                                    }
                                }
                            ]
                        }
                    ]
                },
                take: 50
            }) : Promise.resolve([]),
            // 6. Партнёры (клиника)
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].partner.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            description: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                include: {
                    category: true
                },
                take: 50
            }),
            // 7. Контакты
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].contacts.findMany({
                where: {
                    OR: [
                        {
                            address: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            phone_number: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            phone_number_sec: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            email: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                take: 10
            })
        ]);
        const results = [];
        // Форматируем услуги
        services.forEach((service)=>{
            const categorySlug = service.serviceCategory?.slug || service.category?.slug || 'services';
            const categoryName = service.serviceCategory?.name || service.category?.name || 'Услуги';
            results.push({
                id: `service-${service.id}`,
                title: service.title,
                description: service.description,
                category: categoryName,
                url: `/services/${categorySlug}/${service.id}`,
                type: "service"
            });
        });
        // Форматируем специалистов
        specialists.forEach((specialist)=>{
            const categorySlug = specialist.category?.slug || 'doctors';
            const categoryName = specialist.category?.name || 'Специалисты';
            results.push({
                id: `specialist-${specialist.id}`,
                title: specialist.name,
                description: `${specialist.specialization} • Стаж: ${specialist.experience} лет • ${specialist.qualification}`,
                category: categoryName,
                url: `/doctors/${categorySlug}/${specialist.id}`,
                type: "specialist"
            });
        });
        // Форматируем вакансии
        vacancies.forEach((vacancy)=>{
            results.push({
                id: `vacancy-${vacancy.id}`,
                title: vacancy.name,
                description: vacancy.description,
                category: vacancy.category,
                url: `/clinic/vacancies`,
                type: "vacancy"
            });
        });
        // Форматируем FAQ
        faqs.forEach((faq)=>{
            const faqCategory = faq.category || 'general';
            results.push({
                id: `faq-${faq.id}`,
                title: faq.question,
                description: faq.answer || "Ответ скоро будет добавлен",
                category: faq.category || "Общие вопросы",
                url: `/clinic/faq/${faqCategory}#faq-${faq.id}`,
                type: "faq"
            });
        });
        // Форматируем материалы
        materials.forEach((material)=>{
            results.push({
                id: `material-${material.id}`,
                title: material.title,
                description: material.content,
                category: `Материалы ${material.year}`,
                url: `/account`,
                type: "material"
            });
        });
        // Форматируем партнёров
        partners.forEach((partner)=>{
            results.push({
                id: `partner-${partner.id}`,
                title: partner.name,
                description: partner.description,
                category: partner.category?.name || 'Партнёры',
                url: `/clinic/partners`,
                type: "partner"
            });
        });
        // Форматируем контакты
        contacts.forEach((contact)=>{
            results.push({
                id: `contact-${contact.id}`,
                title: "Контакты клиники",
                description: `${contact.address} • Тел: ${contact.phone_number} • Email: ${contact.email}`,
                category: "Контактная информация",
                url: "/contacts",
                type: "contact"
            });
        });
        // Добавляем статические результаты для страницы "Пациенту"
        const patientPageKeywords = [
            {
                keywords: [
                    "запись",
                    "приём",
                    "прием",
                    "записаться",
                    "визит"
                ],
                title: "Запись на приём",
                description: "Узнайте, как записаться на приём к специалисту, что взять с собой и правила посещения клиники"
            },
            {
                keywords: [
                    "подготовка",
                    "анализ",
                    "кровь",
                    "моча",
                    "экг",
                    "узи",
                    "обследование",
                    "сдать"
                ],
                title: "Подготовка к анализам и обследованиям",
                description: "Рекомендации по подготовке к анализам крови, мочи, ЭКГ, УЗИ и другим обследованиям"
            },
            {
                keywords: [
                    "документ",
                    "договор",
                    "согласие",
                    "политика",
                    "конфиденциальность",
                    "защита данных"
                ],
                title: "Документы и согласия",
                description: "Договор оказания услуг, политика конфиденциальности, защита персональных данных и информированное согласие"
            },
            {
                keywords: [
                    "оплата",
                    "цена",
                    "стоимость",
                    "тариф",
                    "страховка",
                    "страхование",
                    "оплатить"
                ],
                title: "Способы оплаты",
                description: "Информация о способах оплаты услуг: наличные, банковские карты, рассрочка и медицинское страхование"
            }
        ];
        patientPageKeywords.forEach((item, index)=>{
            const matches = item.keywords.some((keyword)=>keyword.includes(searchTerm.toLowerCase()) || searchTerm.toLowerCase().includes(keyword));
            if (matches) {
                results.push({
                    id: `patient-info-${index}`,
                    title: item.title,
                    description: item.description,
                    category: "Информация для пациентов",
                    url: "/patient",
                    type: "patient-info"
                });
            }
        });
        // Поиск по моковому меню услуг (категории и разделы)
        const serviceMenuResults = searchInServiceMenu(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$SMServicesData$2f$SMServicesMenuData$2e$json__$28$json$29$__["default"].menuData, searchTerm);
        // Добавляем все результаты из моков
        // Моки содержат категории и разделы, БД содержит конкретные услуги
        // Это разные типы результатов, поэтому показываем оба
        results.push(...serviceMenuResults);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            results
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Search error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Ошибка при поиске",
            results: []
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c80ddc4._.js.map