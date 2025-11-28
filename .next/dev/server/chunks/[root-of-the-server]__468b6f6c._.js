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
"[project]/src/data/SMClinicData/SMClinicData.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clinicMenuData",
    ()=>clinicMenuData,
    "clinicReviews",
    ()=>clinicReviews,
    "getClinicItemById",
    ()=>getClinicItemById,
    "getPartnerById",
    ()=>getPartnerById,
    "getPartnersByCategory",
    ()=>getPartnersByCategory,
    "getVacancyById",
    ()=>getVacancyById,
    "partnersData",
    ()=>partnersData,
    "vacanciesData",
    ()=>vacanciesData
]);
const partnersData = [
    {
        id: 'rnpc-oncology',
        name: 'РНПЦ онкологии',
        description: 'Республиканский научно-практический центр онкологии и медицинской радиологии им. Н.Н. Александрова - ведущее медицинское учреждение Беларуси в области онкологии.',
        phone: '+375 17 389-99-00',
        website: 'https://oncology.by',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
        category: 'medical'
    },
    {
        id: 'rnpc-sport',
        name: 'РНПЦ спорта',
        description: 'Республиканский научно-практический центр спорта - специализированное медицинское учреждение, занимающееся спортивной медициной и реабилитацией.',
        phone: '+375 17 200-52-00',
        website: 'https://rcsport.by',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
        category: 'medical'
    },
    {
        id: 'helix',
        name: 'Helix',
        description: 'Helix - современная лабораторная служба, предоставляющая широкий спектр лабораторных исследований с использованием передовых технологий.',
        phone: '+375 17 334-22-44',
        website: 'https://helix.by',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
        category: 'medical'
    },
    {
        id: 'beleksimgarant',
        name: 'БЕЛЭКСИМГАРАНТ',
        description: 'Ведущая страховая компания Беларуси, предоставляющая полный спектр страховых услуг, включая медицинское страхование.',
        phone: '+375 17 229-15-55',
        website: 'https://beg.by',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'asoba',
        name: 'АСОБА',
        description: 'Республиканское унитарное предприятие "Белорусская ассоциация страховщиков" - надежный партнер в области страхования.',
        phone: '+375 17 200-47-47',
        website: 'https://asoba.by',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'kupala',
        name: 'Купала',
        description: 'Страховая компания "Купала" предоставляет качественные страховые услуги физическим и юридическим лицам.',
        phone: '+375 17 306-11-11',
        website: 'https://kupala.by',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'belrosstrakh',
        name: 'Белросстрах',
        description: 'Белорусско-Российское совместное предприятие "Белросстрах" - крупная страховая компания на рынке Беларуси.',
        phone: '+375 17 200-33-33',
        website: 'https://belrosstrakh.by',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'task',
        name: 'ТАСК',
        description: 'Закрытое акционерное общество "ТАСК" - динамично развивающаяся страховая компания с широкой сетью филиалов.',
        phone: '+375 17 200-44-44',
        website: 'https://task.by',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'kentavr',
        name: 'КЕНТАВР',
        description: 'Страховая компания "КЕНТАВР" специализируется на предоставлении страховых услуг высокого качества.',
        phone: '+375 17 284-22-22',
        website: 'https://kentavr.by',
        image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'belgosstrakh',
        name: 'Белгосстрах',
        description: 'Белорусское республиканское унитарное страховое предприятие "Белгосстрах" - крупнейшая страховая компания страны.',
        phone: '+375 17 227-16-16',
        website: 'https://belgosstrakh.by',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'ingosstrakh',
        name: 'ИНГОССТРАХ',
        description: 'ИНГОССТРАХ-Жизнь в Беларуси предоставляет услуги по страхованию жизни и медицинскому страхованию.',
        phone: '+375 17 200-55-55',
        website: 'https://ingos.by',
        image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=300&fit=crop',
        category: 'insurance'
    },
    {
        id: 'tekhden',
        name: 'Техден и Ко',
        description: 'Зуботехническая лаборатория "Техден и Ко" специализируется на изготовлении высококачественных зубных протезов и ортодонтических конструкций.',
        phone: '+375 17 298-77-88',
        website: 'https://tekhden.by',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
        category: 'dental'
    },
    {
        id: 'dentacad',
        name: 'DentaCad',
        description: 'Современная зуботехническая лаборатория DentaCad использует передовые CAD/CAM технологии для создания точных и эстетичных зубных конструкций.',
        phone: '+375 29 123-45-67',
        website: 'https://dentacad.by',
        image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=400&h=300&fit=crop',
        category: 'dental'
    }
];
const clinicReviews = [
    {
        id: '1',
        patientName: 'Анна Петрова',
        rating: 5,
        date: '15 января 2025',
        text: 'Замечательная клиника! Современное оборудование, профессиональные врачи. Особенно хочу отметить детского стоматолога - ребенок впервые не боялся лечить зубы.',
        verified: true
    },
    {
        id: '2',
        patientName: 'Дмитрий Сидоров',
        rating: 5,
        date: '12 января 2025',
        text: 'Прошел полное обследование в клинике. Очень доволен качеством услуг и отношением персонала. Все процедуры выполнены на высшем уровне.',
        verified: true
    },
    {
        id: '3',
        patientName: 'Елена Козлова',
        rating: 4,
        date: '10 января 2025',
        text: 'Хорошая клиника с современным оборудованием. Врачи профессиональные, но иногда приходится долго ждать приема.',
        verified: true
    },
    {
        id: '4',
        patientName: 'Максим Иванов',
        rating: 5,
        date: '8 января 2025',
        text: 'Делал имплантацию зубов. Результат превзошел все ожидания! Врач объяснил каждый этап, процедура прошла безболезненно.',
        verified: true
    },
    {
        id: '5',
        patientName: 'Ольга Николаева',
        rating: 5,
        date: '5 января 2025',
        text: 'Отличная гинекология! Врач очень внимательная и деликатная. Современное УЗИ оборудование дало точные результаты.',
        verified: true
    },
    {
        id: '6',
        patientName: 'Андрей Михайлов',
        rating: 4,
        date: '3 января 2025',
        text: 'Качественное лечение, но цены немного выше среднего. В целом рекомендую клинику.',
        verified: true
    },
    {
        id: '7',
        patientName: 'Светлана Федорова',
        rating: 5,
        date: '1 января 2025',
        text: 'Прекрасная детская урология! Врач нашел подход к ребенку, все прошло спокойно и профессионально.',
        verified: true
    },
    {
        id: '8',
        patientName: 'Валерий Смирнов',
        rating: 5,
        date: '29 декабря 2024',
        text: 'Современная диагностика, точные анализы. Персонал вежливый и профессиональный. Рекомендую!',
        verified: true
    },
    {
        id: '9',
        patientName: 'Татьяна Белова',
        rating: 4,
        date: '27 декабря 2024',
        text: 'Хорошая клиника, но запись только по телефону. Хотелось бы онлайн-запись.',
        verified: true
    },
    {
        id: '10',
        patientName: 'Роман Тихонов',
        rating: 5,
        date: '25 декабря 2024',
        text: 'Отличные условия в дневном стационаре. Все процедуры выполнены качественно, персонал заботливый.',
        verified: true
    },
    {
        id: '11',
        patientName: 'Мария Орлова',
        rating: 5,
        date: '22 ноября 2024',
        text: 'Эндокринолог в клинике - настоящий профессионал! Подобрал эффективное лечение, регулярно контролирует состояние.',
        verified: true
    },
    {
        id: '12',
        patientName: 'Игорь Павлов',
        rating: 4,
        date: '20 ноября 2024',
        text: 'Качественная стоматология, но хотелось бы больше парковочных мест возле клиники.',
        verified: true
    }
];
const vacanciesData = [
    {
        id: 'dentist',
        title: 'Врач-стоматолог',
        department: 'Стоматологическое отделение',
        requirements: [
            'Высшее медицинское образование по специальности "Стоматология"',
            'Действующий сертификат специалиста',
            'Опыт работы от 2 лет',
            'Знание современных методов лечения'
        ],
        responsibilities: [
            'Проведение стоматологического лечения',
            'Диагностика заболеваний полости рта',
            'Консультирование пациентов',
            'Ведение медицинской документации'
        ],
        salary: 'от 2000 BYN',
        type: 'full-time',
        experience: 'от 2 лет',
        description: 'В нашу команду требуется опытный врач-стоматолог для работы в современной клинике с новейшим оборудованием.'
    },
    {
        id: 'gynecologist',
        title: 'Врач-гинеколог',
        department: 'Гинекологическое отделение',
        requirements: [
            'Высшее медицинское образование по специальности "Акушерство и гинекология"',
            'Действующая категория',
            'Опыт работы от 3 лет',
            'Владение современными методами диагностики'
        ],
        responsibilities: [
            'Прием и консультирование пациенток',
            'Проведение гинекологических осмотров',
            'Малые хирургические вмешательства',
            'Интерпретация результатов исследований'
        ],
        salary: 'от 2200 BYN',
        type: 'full-time',
        experience: 'от 3 лет',
        description: 'Приглашаем квалифицированного гинеколога в нашу команду для работы с современным оборудованием.'
    },
    {
        id: 'nurse',
        title: 'Медицинская сестра',
        department: 'Сестринское отделение',
        requirements: [
            'Среднее специальное медицинское образование',
            'Действующий сертификат',
            'Опыт работы приветствуется',
            'Ответственность и внимательность'
        ],
        responsibilities: [
            'Выполнение назначений врача',
            'Подготовка пациентов к процедурам',
            'Ведение медицинской документации',
            'Обеспечение санитарно-эпидемиологического режима'
        ],
        salary: 'от 1200 BYN',
        type: 'full-time',
        experience: 'приветствуется',
        description: 'Ищем ответственную медицинскую сестру для работы в дружном коллективе.'
    }
];
const clinicMenuData = [
    {
        id: 'licenses',
        title: 'Лицензии',
        description: 'Официальные разрешения на осуществление медицинской деятельности',
        content: `Лицензия
  Министерство здравоохранения Республики Беларусь
  Специальное разрешение (Лицензия) №02040/8440
  На право осуществления: медицинская деятельность.
  Выдано: Общество с ограниченной ответственностью "Доктор Фемели"
  Специальное разрешение (лицензия) выдано на основе решения от
  24 февраля 2021года № 4.3`,
        gallery: [
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop'
        ]
    },
    {
        id: 'partners',
        title: 'Партнёры',
        description: 'Наши надежные партнеры в области медицины и страхования',
        children: [
            {
                id: 'medical-labs',
                title: 'Медицинские лаборатории',
                description: 'Партнеры в области лабораторной диагностики',
                fullDescription: 'Мы сотрудничаем с ведущими медицинскими лабораториями Беларуси для обеспечения наших пациентов качественными диагностическими услугами.'
            },
            {
                id: 'insurance',
                title: 'Страховые компании',
                description: 'Партнеры в области медицинского страхования',
                fullDescription: 'Сотрудничество с ведущими страховыми компаниями позволяет нашим пациентам получать качественную медицинскую помощь по программам добровольного медицинского страхования.'
            },
            {
                id: 'dental-labs',
                title: 'Зуботехнические лаборатории',
                description: 'Партнеры в области зубопротезирования',
                fullDescription: 'Наши партнеры-зуботехнические лаборатории используют современные технологии для изготовления качественных зубных протезов и ортодонтических конструкций.'
            }
        ]
    },
    {
        id: 'reviews',
        title: 'Отзывы',
        description: 'Отзывы наших пациентов о качестве медицинских услуг',
        fullDescription: 'Мы ценим мнение каждого пациента и стремимся постоянно улучшать качество наших услуг на основе вашей обратной связи.'
    },
    {
        id: 'requisites',
        title: 'Реквизиты',
        description: 'Юридическая информация и банковские реквизиты клиники',
        content: `Полное наименование: Общество с ограниченной ответственностью «Смарт Медикал»
  Сокращенное наименование: ООО «Смарт Медикал»
  УНП: 193215226
  ОРГН: -----
  Юридический адрес: г. Минск, пр-т Победителей, д. 119, пом. 504
  Фактический адрес: г. Минск, пр-т Победителей, д. 119, пом. 504
  Телефон: +375-29-161-01-01
  Электронная почта: smartmedical.by@gmail.com
  Официальный сайт: smartmedical.by
  Банковские реквизиты: Р/с BY36 UNBS 3012 0412 8900 0000 9933 в ЗАО «БСБ Банк»
  Код банка UNBSBY2X`
    },
    {
        id: 'faq',
        title: 'Вопрос ответ',
        description: 'Часто задаваемые вопросы и ответы специалистов',
        children: [
            {
                id: 'children-teeth',
                title: 'Детские зубы',
                faq: [
                    {
                        question: 'Нужны ли лечить молочные зубы?',
                        answer: 'Да, молочные зубы обязательно нужно лечить. Они служат "держателями места" для постоянных зубов и влияют на правильное формирование прикуса и развитие речи. Кариес молочных зубов может привести к повреждению зачатков постоянных зубов.'
                    },
                    {
                        question: 'Чем отличается наркоз от седации?',
                        answer: 'Наркоз - это полное отключение сознания пациента, при котором он не чувствует боли и не помнит процедуру. Седация - это состояние расслабления и спокойствия, при котором пациент остается в сознании, но чувствует себя комфортно. Седация безопаснее для детей и часто достаточна для стоматологических процедур.'
                    },
                    {
                        question: 'Какие рекомендации после наркоза?',
                        answer: 'После наркоза необходимо: наблюдать за ребенком в течение суток, обеспечить покой, давать легкую пищу, избегать горячих напитков в первые часы, контролировать температуру тела. При любых необычных симптомах следует немедленно обратиться к врачу.'
                    }
                ]
            },
            {
                id: 'girls-hygiene',
                title: 'Гигиена девочек',
                faq: [
                    {
                        question: 'Половое созревание девочек. Первые месячные.',
                        answer: 'Половое созревание девочек обычно начинается в 8-13 лет. Первые месячные (менархе) появляются в среднем в 12-13 лет. Важно заранее подготовить девочку к этим изменениям, объяснить, что это нормальный процесс взросления.'
                    },
                    {
                        question: 'Как подмывать новорожденную девочку?',
                        answer: 'Подмывать девочку нужно спереди назад, чтобы избежать попадания бактерий из анальной области во влагалище. Использовать теплую воду и специальные детские средства без ароматизаторов. После подмывания аккуратно промокнуть мягким полотенцем.'
                    },
                    {
                        question: 'Белая специальная смазка у новорождённых девочек. Что с ней делать?',
                        answer: 'Первородная смазка (vernix caseosa) - это естественное защитное покрытие кожи новорожденного. Ее не нужно активно удалять, она впитается сама в течение первых дней жизни. При необходимости можно аккуратно протереть влажной салфеткой.'
                    },
                    {
                        question: 'Подгузники. Как часто менять? Вредны подгузники или нет?',
                        answer: 'Подгузники нужно менять каждые 2-3 часа или сразу после дефекации. Современные качественные подгузники не вредны при правильном использовании. Важно выбирать подгузники по размеру, обеспечивать коже "дыхание" и регулярно проводить воздушные ванны.'
                    },
                    {
                        question: 'Ванночки для новорождённых. Какие лучше?',
                        answer: 'Лучше использовать специальные детские ванночки из безопасных материалов. Можно добавлять отвары трав (ромашка, череда) после заживления пупочной ранки. Температура воды должна быть 36-37°C. Первые купания должны быть короткими - 5-10 минут.'
                    },
                    {
                        question: 'Что такое синехии. Нужно ли лечить?',
                        answer: 'Синехии - это сращение малых половых губ у девочек. Встречается довольно часто в возрасте до 6 лет. Лечение назначается только при нарушении мочеиспускания или воспалительных процессах. В большинстве случаев синехии разрешаются самостоятельно.'
                    },
                    {
                        question: 'Изолированное телархе у девочек, что это?',
                        answer: 'Изолированное телархе - это раннее увеличение молочных желез у девочек (обычно до 8 лет) без других признаков полового созревания. Чаще всего это доброкачественное состояние, которое не требует лечения, но требует наблюдения эндокринолога.'
                    }
                ]
            },
            {
                id: 'boys-hygiene',
                title: 'Гигиена мальчиков',
                faq: [
                    {
                        question: 'Фимоз у детей, как вылечить?',
                        answer: 'Фимоз у детей до 3-5 лет считается физиологическим и не требует лечения. При патологическом фимозе применяют консервативное лечение (мази с кортикостероидами) или хирургическое (обрезание, пластика крайней плоти). Лечение назначает только уролог.'
                    },
                    {
                        question: 'Когда нужно обратиться к врачу урологу?',
                        answer: 'К урологу нужно обратиться при: болезненном мочеиспускании, изменении цвета мочи, отеках, болях в животе или пояснице, нарушениях мочеиспускания, воспалительных процессах в области половых органов, подозрении на крипторхизм или фимоз.'
                    },
                    {
                        question: 'Гигиена мальчиков. Уход за пенисом.',
                        answer: 'Ежедневно промывать теплой водой с детским мылом, не оттягивать крайнюю плоть насильно, менять белье ежедневно, следить за чистотой рук ребенка. При появлении покраснений, выделений или неприятного запаха обратиться к врачу.'
                    }
                ]
            },
            {
                id: 'girls-puberty',
                title: 'Половое созревание девочек',
                faq: [
                    {
                        question: 'Первые месячные.',
                        answer: 'Первые месячные обычно начинаются в 11-15 лет. Важно заранее подготовить девочку: объяснить, что это нормально, научить пользоваться средствами гигиены, обеспечить психологическую поддержку. В первые годы цикл может быть нерегулярным - это нормально.'
                    },
                    {
                        question: 'Детская мастурбация. Что делать родителям?',
                        answer: 'Детская мастурбация - нормальное явление в процессе развития. Не нужно ругать или стыдить ребенка. Важно переключить внимание на другие занятия, обеспечить достаточную физическую активность, при необходимости деликатно объяснить вопросы приватности.'
                    }
                ]
            },
            {
                id: 'culdocentesis',
                title: 'Кульдоцентез',
                faq: [
                    {
                        question: 'Что ожидать после процедуры кульдоцентеза?',
                        answer: 'После кульдоцентеза возможны незначительные мажущие выделения в течение 1-2 дней, слабые боли внизу живота. Необходимо соблюдать покой в день процедуры, избегать физических нагрузок 2-3 дня, не принимать ванну 3-5 дней.'
                    },
                    {
                        question: 'Подготовка к кульдоцентезу.',
                        answer: 'Перед процедурой необходимо: сдать анализы крови, мочи, мазок на флору, не есть за 4-6 часов до процедуры, опорожнить мочевой пузырь, снять украшения и контактные линзы. Процедура проводится на гинекологическом кресле под местной анестезией.'
                    },
                    {
                        question: 'Противопоказания к кульдоцентезу.',
                        answer: 'Противопоказания: острые воспалительные заболевания органов малого таза, нарушения свертываемости крови, тяжелое общее состояние пациентки, отсутствие жидкости в малом тазу по данным УЗИ, некоторые анатомические особенности.'
                    }
                ]
            },
            {
                id: 'stomatology',
                title: 'Стоматология',
                faq: [
                    {
                        question: 'Металлические брекеты эффективнее других ортопедических систем.',
                        answer: 'Металлические брекеты действительно являются одними из самых эффективных ортодонтических систем. Они обеспечивают точное перемещение зубов, подходят для лечения сложных патологий прикуса, имеют доступную стоимость и высокую прочность.'
                    },
                    {
                        question: 'Вредны ли металлические брекеты?',
                        answer: 'Металлические брекеты изготавливаются из медицинской стали и титана, которые биосовместимы и безопасны. Аллергические реакции крайне редки. Основные неудобства - это необходимость тщательной гигиены и возможные первоначальные дискомфорт и натирание.'
                    },
                    {
                        question: 'Почему брекеты так важны?',
                        answer: 'Брекеты исправляют неправильный прикус, что важно для: правильного пережевывания пищи, профилактики заболеваний ЖКТ, предотвращения развития кариеса и пародонтита, улучшения дикции, повышения самооценки и качества жизни.'
                    },
                    {
                        question: 'Виды обесцвечивания зубов?',
                        answer: 'Различают внешнее (от кофе, чая, курения, красящих продуктов) и внутреннее (от лекарств, травм, возрастных изменений) окрашивание зубов. Также выделяют врожденные нарушения цвета эмали и приобретенные изменения.'
                    },
                    {
                        question: 'Методы профессионального отбеливания зубов?',
                        answer: 'Основные методы: лазерное отбеливание, фотоотбеливание (ZOOM), химическое отбеливание в кабинете врача, домашнее отбеливание под контролем врача с использованием индивидуальных капп и профессиональных гелей.'
                    },
                    {
                        question: 'Профессиональное офисное отбеливание зубов.',
                        answer: 'Офисное отбеливание проводится в стоматологическом кабинете с использованием высококонцентрированных отбеливающих гелей и активирующих устройств. Процедура длится 1-2 часа, результат виден сразу, эффект сохраняется 1-3 года при правильном уходе.'
                    }
                ]
            },
            {
                id: 'polyp-removal',
                title: 'Удаления полипов | Полипэктомия',
                faq: [
                    {
                        question: 'Что мне нужно будет делать после возвращения домой?',
                        answer: 'После полипэктомии: соблюдать покой первые 24 часа, избегать физических нагрузок 1-2 недели, не принимать ванну 3-5 дней, использовать прокладки вместо тампонов, принимать назначенные препараты, явиться на контрольный осмотр.'
                    },
                    {
                        question: 'Восстановление после полипэктомии и профилактика.',
                        answer: 'Полное восстановление занимает 2-4 недели. Для профилактики рецидивов: регулярные гинекологические осмотры, своевременное лечение воспалительных заболеваний, контроль гормонального фона, здоровый образ жизни, отказ от курения.'
                    },
                    {
                        question: 'Можно ли предотвратить полипы шейки матки?',
                        answer: 'Специфической профилактики нет, но риск можно снизить: регулярные осмотры у гинеколога, своевременное лечение инфекций, использование барьерных контрацептивов, поддержание иммунитета, отказ от курения, контроль веса.'
                    }
                ]
            },
            {
                id: 'ultrasound',
                title: 'УЗИ',
                faq: [
                    {
                        question: 'На каком сроке можно узнать пол будущего ребёнка?',
                        answer: 'Пол ребенка можно определить с 15-16 недель беременности, но наиболее достоверно - с 18-20 недель. Точность определения зависит от положения плода, опыта специалиста и качества оборудования.'
                    },
                    {
                        question: 'УЗИ во время беременности: безопасно и как часто можно делать?',
                        answer: 'УЗИ безопасно для матери и плода при соблюдении медицинских показаний. Стандартно проводят 3 плановых УЗИ: в 11-14, 18-22 и 30-34 недели. Дополнительные исследования назначаются только по медицинским показаниям.'
                    },
                    {
                        question: 'Что входит в органы женского таза?',
                        answer: 'К органам малого таза у женщин относятся: матка, яичники, маточные трубы, шейка матки, влагалище, мочевой пузырь, прямая кишка. При УЗИ оценивают их размеры, структуру, положение и патологические изменения.'
                    },
                    {
                        question: 'УЗИ органов малого таза в DOCTOR FAMILY.',
                        answer: 'В нашей клинике УЗИ проводится на современном оборудовании экспертного класса. Исследование включает оценку матки, яичников, определение толщины эндометрия, выявление патологических образований. Результаты выдаются сразу после процедуры.'
                    },
                    {
                        question: 'Как работает ультразвуковой аппарат?',
                        answer: 'УЗИ-аппарат излучает высокочастотные звуковые волны, которые отражаются от тканей организма и возвращаются к датчику. Компьютер обрабатывает эти сигналы и создает изображение внутренних органов в режиме реального времени.'
                    },
                    {
                        question: 'Что происходит во время детского абдоминального УЗИ?',
                        answer: 'Ребенок лежит на кушетке, на живот наносится специальный гель, врач водит датчиком по коже. Процедура безболезненна и длится 15-20 минут. Исследуются печень, желчный пузырь, поджелудочная железа, селезенка, почки.'
                    },
                    {
                        question: 'Есть ли какие-либо последствия детского УЗИ брюшной полости?',
                        answer: 'УЗИ абсолютно безопасно для детей любого возраста, включая новорожденных. Ультразвуковые волны не оказывают вредного воздействия на организм. Процедура не имеет противопоказаний и побочных эффектов.'
                    }
                ]
            },
            {
                id: 'womens-health',
                title: 'Женское здоровье',
                faq: [
                    {
                        question: 'Цитология обычная и жидкостная, в чём разница?',
                        answer: 'Обычная цитология - традиционный мазок на стекле. Жидкостная цитология - более современный метод, при котором материал помещается в специальную жидкость. Жидкостная цитология дает более четкие результаты, позволяет дополнительно проводить ВПЧ-тестирование и снижает количество неинформативных результатов.'
                    }
                ]
            },
            {
                id: 'curettage',
                title: 'Раздельное диагностическое выскабливание',
                faq: [
                    {
                        question: 'Противопоказания к проведению раздельного диагностического выскабливания.',
                        answer: 'Противопоказания: острые воспалительные заболевания половых органов, подозрение на беременность, тяжелые заболевания сердечно-сосудистой системы, нарушения свертываемости крови, общие инфекционные заболевания в острой стадии.'
                    },
                    {
                        question: 'Подготовка к раздельному диагностическому выскабливанию.',
                        answer: 'Подготовка включает: анализы крови, мочи, мазок на флору, ЭКГ, консультацию анестезиолога, воздержание от пищи за 8-12 часов до процедуры, гигиенические процедуры, отказ от половой жизни за 3 дня до процедуры.'
                    },
                    {
                        question: 'Восстановление после раздельного диагностического выскабливания.',
                        answer: 'После процедуры: постельный режим в день операции, исключение физических нагрузок 2 недели, запрет на половую жизнь 3-4 недели, использование прокладок вместо тампонов, прием назначенных препаратов, контрольный осмотр через 2 недели.'
                    }
                ]
            }
        ]
    },
    {
        id: 'vacancies',
        title: 'Вакансии',
        description: 'Открытые вакансии в нашей клинике',
        fullDescription: 'Присоединяйтесь к нашей команде профессионалов! Мы предлагаем достойную заработную плату, социальный пакет и возможности для профессионального развития.'
    }
];
function getClinicItemById(itemId) {
    const findItem = (items)=>{
        for (const item of items){
            if (item.id === itemId) return item;
            if (item.children) {
                const found = findItem(item.children);
                if (found) return found;
            }
        }
        return null;
    };
    return findItem(clinicMenuData);
}
function getPartnersByCategory(category) {
    return partnersData.filter((partner)=>partner.category === category);
}
function getPartnerById(partnerId) {
    return partnersData.find((partner)=>partner.id === partnerId) || null;
}
function getVacancyById(vacancyId) {
    return vacanciesData.find((vacancy)=>vacancy.id === vacancyId) || null;
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$SMClinicData$2f$SMClinicData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/SMClinicData/SMClinicData.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("q");
        if (!query || query.trim().length < 3) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                results: []
            }, {
                status: 200
            });
        }
        // Проверяем авторизацию пользователя
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        const isAuthenticated = !!session?.user;
        const searchTerm = query.trim();
        // Проверка на кириллицу (русский текст)
        const hasCyrillic = /[а-яёА-ЯЁ]/.test(searchTerm);
        const hasLatin = /[a-zA-Z]/.test(searchTerm);
        // Если есть латиница, но нет кириллицы - отклоняем поиск
        if (hasLatin && !hasCyrillic) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                results: [],
                error: "Пожалуйста, используйте русский язык для поиска"
            }, {
                status: 200
            });
        }
        // Нормализация поискового запроса
        // Убираем лишние пробелы, приводим к нижнему регистру для внутренних сравнений
        const normalizedTerm = searchTerm.replace(/\s+/g, ' ').trim();
        // Search across all entities
        const [services, specialists, vacancies, faqs, materials, partners, contacts] = await Promise.all([
            // Search Services
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].service.findMany({
                where: {
                    OR: [
                        {
                            title: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            subtitle: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            description: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                include: {
                    category: true,
                    serviceCategory: true
                },
                take: 10
            }),
            // Search Specialists
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].specialist.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            specialization: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            qualification: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            bio: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                include: {
                    category: true
                },
                take: 10
            }),
            // Search Vacancies
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].vacancy.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            category: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            description: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            requirements: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                take: 10
            }),
            // Search FAQs
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].question.findMany({
                where: {
                    OR: [
                        {
                            question: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            answer: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            category: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                take: 10
            }),
            // Search Materials (только для авторизованных пользователей)
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
                                        contains: normalizedTerm,
                                        mode: "insensitive"
                                    }
                                },
                                {
                                    content: {
                                        contains: normalizedTerm,
                                        mode: "insensitive"
                                    }
                                }
                            ]
                        }
                    ]
                },
                take: 10
            }) : Promise.resolve([]),
            // Search Partners
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].partner.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            description: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                include: {
                    category: true
                },
                take: 10
            }),
            // Search Contacts
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].contacts.findMany({
                where: {
                    OR: [
                        {
                            address: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            phone_number: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            phone_number_sec: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        },
                        {
                            email: {
                                contains: normalizedTerm,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                take: 1
            })
        ]);
        const results = [
            ...services.map((service)=>{
                // Формируем URL используя serviceCategory вместо category
                const categorySlug = service.serviceCategory?.slug || service.category.slug;
                const url = `/services/${categorySlug}/${service.id}`;
                return {
                    id: `service-${service.id}`,
                    title: service.title,
                    description: service.description,
                    category: service.serviceCategory?.name || service.category.name,
                    url,
                    type: "service"
                };
            }),
            ...specialists.map((specialist)=>{
                const url = `/doctors/${specialist.category.slug}/${specialist.id}`;
                return {
                    id: `specialist-${specialist.id}`,
                    title: specialist.name,
                    description: `${specialist.specialization} • Стаж: ${specialist.experience} лет • ${specialist.qualification}`,
                    category: specialist.category.name,
                    url,
                    type: "specialist"
                };
            }),
            ...vacancies.map((vacancy)=>{
                const url = `/clinic/vacancies#vacancy-${vacancy.id}`;
                return {
                    id: `vacancy-${vacancy.id}`,
                    title: vacancy.name,
                    description: vacancy.description,
                    category: vacancy.category,
                    url,
                    type: "vacancy"
                };
            }),
            ...faqs.map((faq)=>{
                // Формируем правильный URL с категорией FAQ
                const faqCategory = faq.category || 'faq';
                const url = `/clinic/faq/${faqCategory}#faq-${faq.id}`;
                return {
                    id: `faq-${faq.id}`,
                    title: faq.question,
                    description: faq.answer || "Ответ скоро будет добавлен",
                    category: faq.category || "Общие вопросы",
                    url,
                    type: "faq"
                };
            }),
            ...materials.map((material)=>({
                    id: `material-${material.id}`,
                    title: material.title,
                    description: material.content,
                    category: `Материалы ${material.year}`,
                    url: `/account#material-${material.id}`,
                    type: "material"
                })),
            ...partners.map((partner)=>{
                // Маппинг категории партнера на страницу клиники
                const categoryPageMap = {
                    'diagnostics': 'medical-labs',
                    'gynecology': 'insurance',
                    'ultrasound': 'dental-labs'
                };
                const clinicPage = categoryPageMap[partner.category.slug] || 'partners';
                const url = `/clinic/${clinicPage}#partner-${partner.id}`;
                return {
                    id: `partner-${partner.id}`,
                    title: partner.name,
                    description: partner.description,
                    category: partner.category.name,
                    url,
                    type: "partner"
                };
            }),
            ...contacts.map((contact)=>({
                    id: `contact-${contact.id}`,
                    title: "Контакты клиники",
                    description: `${contact.address} • Тел: ${contact.phone_number} • Email: ${contact.email}`,
                    category: "Контактная информация",
                    url: "/contacts",
                    type: "contact"
                }))
        ];
        // Add static search results for Patient Information page
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
        const patientPageResults = patientPageKeywords.filter((item)=>item.keywords.some((keyword)=>keyword.includes(normalizedTerm.toLowerCase()) || normalizedTerm.toLowerCase().includes(keyword))).map((item, index)=>({
                id: `patient-info-${index}`,
                title: item.title,
                description: item.description,
                category: "Информация для пациентов",
                url: "/patient",
                type: "patient-info"
            }));
        results.push(...patientPageResults);
        // Добавляем поиск по статическим данным клиники (для FAQ, вакансий и т.д.)
        const staticClinicResults = [];
        // Поиск по статическим FAQ из clinicMenuData
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$SMClinicData$2f$SMClinicData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clinicMenuData"].forEach((section)=>{
            // Обрабатываем основные разделы и их детей
            const processSection = (item, parentSlug)=>{
                // Поиск по FAQ в этом разделе
                if (item.faq && Array.isArray(item.faq)) {
                    item.faq.forEach((faqItem, index)=>{
                        const matchesQuestion = faqItem.question.toLowerCase().includes(normalizedTerm.toLowerCase());
                        const matchesAnswer = faqItem.answer && faqItem.answer.toLowerCase().includes(normalizedTerm.toLowerCase());
                        if (matchesQuestion || matchesAnswer) {
                            const url = `/clinic/faq/${item.id}#faq-${index}`;
                            staticClinicResults.push({
                                id: `static-faq-${item.id}-${index}`,
                                title: faqItem.question,
                                description: faqItem.answer || "Ответ скоро будет добавлен",
                                category: item.title,
                                url,
                                type: "faq"
                            });
                        }
                    });
                }
                // Рекурсивно обрабатываем детей
                if (item.children && Array.isArray(item.children)) {
                    item.children.forEach((child)=>processSection(child, item.id));
                }
            };
            processSection(section);
        });
        // Добавляем статические результаты только если их нет в результатах из БД
        staticClinicResults.forEach((staticResult)=>{
            const isDuplicate = results.some((r)=>r.type === staticResult.type && r.title === staticResult.title);
            if (!isDuplicate) {
                results.push(staticResult);
            }
        });
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

//# sourceMappingURL=%5Broot-of-the-server%5D__468b6f6c._.js.map