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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

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
"[project]/src/utils/validation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validation utilities for forms
 */ __turbopack_context__.s([
    "PASSWORD_RULES",
    ()=>PASSWORD_RULES,
    "capitalizeName",
    ()=>capitalizeName,
    "validateEmail",
    ()=>validateEmail,
    "validateFeedback",
    ()=>validateFeedback,
    "validateLetter",
    ()=>validateLetter,
    "validateLogin",
    ()=>validateLogin,
    "validateNamePart",
    ()=>validateNamePart,
    "validatePassword",
    ()=>validatePassword,
    "validatePhone",
    ()=>validatePhone,
    "validateTextField",
    ()=>validateTextField
]);
const PASSWORD_RULES = {
    minLength: 4,
    requireUppercase: true,
    requireSymbol: true
};
function validatePassword(password) {
    if (!password) {
        return {
            isValid: false,
            error: 'Пароль обязателен'
        };
    }
    if (password.length < PASSWORD_RULES.minLength) {
        return {
            isValid: false,
            error: `Пароль должен содержать минимум ${PASSWORD_RULES.minLength} символа`
        };
    }
    if (PASSWORD_RULES.requireUppercase && !/[A-ZА-ЯЁ]/.test(password)) {
        return {
            isValid: false,
            error: 'Пароль должен содержать хотя бы одну заглавную букву'
        };
    }
    if (PASSWORD_RULES.requireSymbol && !/[!@#$%^&*()_+\-=\[\]{}|;':",.<>?\/\\`~]/.test(password)) {
        return {
            isValid: false,
            error: 'Пароль должен содержать хотя бы один специальный символ (!@#$%^&* и т.д.)'
        };
    }
    return {
        isValid: true
    };
}
function validateNamePart(name, fieldName = 'Имя') {
    if (!name) {
        return {
            isValid: false,
            error: `${fieldName} обязательно`
        };
    }
    const trimmed = name.trim();
    if (trimmed.length < 2) {
        return {
            isValid: false,
            error: `${fieldName} должно содержать минимум 2 символа`
        };
    }
    if (/\s/.test(trimmed)) {
        return {
            isValid: false,
            error: `${fieldName} не должно содержать пробелов`
        };
    }
    if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(trimmed)) {
        return {
            isValid: false,
            error: `${fieldName} должно содержать только буквы`
        };
    }
    return {
        isValid: true
    };
}
function capitalizeName(name) {
    if (!name) return '';
    const trimmed = name.trim().toLowerCase();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}
function validateEmail(email) {
    if (!email) {
        return {
            isValid: false,
            error: 'Email обязателен'
        };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            error: 'Некорректный формат email'
        };
    }
    return {
        isValid: true
    };
}
function validatePhone(phone) {
    if (!phone) {
        return {
            isValid: false,
            error: 'Телефон обязателен'
        };
    }
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    // Belarus phone: 375 + 9 digits = 12 digits total
    if (digits.length !== 12) {
        return {
            isValid: false,
            error: 'Телефон должен быть в формате +375 (XX) XXX-XX-XX'
        };
    }
    if (!digits.startsWith('375')) {
        return {
            isValid: false,
            error: 'Телефон должен начинаться с +375'
        };
    }
    return {
        isValid: true
    };
}
function validateLogin(login) {
    if (!login) {
        return {
            isValid: false,
            error: 'Логин обязателен'
        };
    }
    const trimmed = login.trim();
    if (trimmed.length < 3) {
        return {
            isValid: false,
            error: 'Логин должен содержать минимум 3 символа'
        };
    }
    if (/\s/.test(trimmed)) {
        return {
            isValid: false,
            error: 'Логин не должен содержать пробелов'
        };
    }
    if (!/^[a-zA-Z0-9_]+$/.test(trimmed)) {
        return {
            isValid: false,
            error: 'Логин может содержать только латинские буквы, цифры и _'
        };
    }
    return {
        isValid: true
    };
}
function validateTextField(text, fieldName, minLength = 3, maxLength = 1000) {
    if (!text) {
        return {
            isValid: false,
            error: `${fieldName} обязательно`
        };
    }
    const trimmed = text.trim();
    if (trimmed.length < minLength) {
        return {
            isValid: false,
            error: `${fieldName} должно содержать минимум ${minLength} символа`
        };
    }
    if (trimmed.length > maxLength) {
        return {
            isValid: false,
            error: `${fieldName} не должно превышать ${maxLength} символов`
        };
    }
    return {
        isValid: true
    };
}
function validateFeedback(data) {
    // Validate name
    const nameResult = validateTextField(data.name, 'Имя', 2, 100);
    if (!nameResult.isValid) return nameResult;
    // Check name doesn't have numbers
    if (/\d/.test(data.name)) {
        return {
            isValid: false,
            error: 'Имя не должно содержать цифры'
        };
    }
    // Validate text
    const textResult = validateTextField(data.text, 'Текст отзыва', 10, 2000);
    if (!textResult.isValid) return textResult;
    // Validate grade
    if (data.grade < 1 || data.grade > 5) {
        return {
            isValid: false,
            error: 'Оценка должна быть от 1 до 5'
        };
    }
    return {
        isValid: true
    };
}
function validateLetter(data) {
    // Validate subject
    const subjectResult = validateTextField(data.subject, 'Тема письма', 3, 200);
    if (!subjectResult.isValid) return subjectResult;
    // Validate content
    const contentResult = validateTextField(data.content, 'Сообщение', 10, 5000);
    if (!contentResult.isValid) return contentResult;
    return {
        isValid: true
    };
}
}),
"[project]/src/app/api/auth/register/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/validation.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { lastName, firstName, middleName, email, phone, password, confirmPassword, login } = body;
        // Валидация обязательных полей
        if (!login || !email || !password || !firstName || !lastName || !phone) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Все обязательные поля должны быть заполнены"
            }, {
                status: 400
            });
        }
        // Валидация логина
        const loginValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateLogin"])(login);
        if (!loginValidation.isValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: loginValidation.error
            }, {
                status: 400
            });
        }
        // Валидация имени
        const firstNameValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateNamePart"])(firstName, 'Имя');
        if (!firstNameValidation.isValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: firstNameValidation.error
            }, {
                status: 400
            });
        }
        // Валидация фамилии
        const lastNameValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateNamePart"])(lastName, 'Фамилия');
        if (!lastNameValidation.isValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: lastNameValidation.error
            }, {
                status: 400
            });
        }
        // Валидация отчества (если указано)
        if (middleName && middleName.trim()) {
            const middleNameValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateNamePart"])(middleName, 'Отчество');
            if (!middleNameValidation.isValid) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: middleNameValidation.error
                }, {
                    status: 400
                });
            }
        }
        // Проверка совпадения паролей
        if (password !== confirmPassword) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Пароли не совпадают"
            }, {
                status: 400
            });
        }
        // Валидация пароля (мин. 4 символа, заглавная буква, спецсимвол)
        const passwordValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePassword"])(password);
        if (!passwordValidation.isValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: passwordValidation.error
            }, {
                status: 400
            });
        }
        // Валидация формата email
        const emailValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateEmail"])(email);
        if (!emailValidation.isValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: emailValidation.error
            }, {
                status: 400
            });
        }
        // Валидация формата телефона
        const phoneValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePhone"])(phone);
        if (!phoneValidation.isValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: phoneValidation.error
            }, {
                status: 400
            });
        }
        // Проверка уникальности email
        const existingUserByEmail = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.findFirst({
            where: {
                email
            }
        });
        if (existingUserByEmail) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Пользователь с таким email уже существует"
            }, {
                status: 409
            });
        }
        // Проверка уникальности логина
        const existingUserByLogin = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.findFirst({
            where: {
                login
            }
        });
        if (existingUserByLogin) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Пользователь с таким логином уже существует"
            }, {
                status: 409
            });
        }
        // Нормализуем телефон - оставляем только цифры
        const normalizedPhone = phone.replace(/\D/g, '');
        const last9Digits = normalizedPhone.slice(-9);
        // Проверка уникальности телефона (проверяем после нормализации для совместимости)
        const allPatients = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.findMany({
            select: {
                id: true,
                phone: true
            }
        });
        const existingUserByPhone = allPatients.find((patient)=>{
            const patientNormalized = patient.phone.replace(/\D/g, '');
            return patientNormalized === normalizedPhone || patientNormalized.slice(-9) === last9Digits;
        });
        if (existingUserByPhone) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Пользователь с таким телефоном уже существует"
            }, {
                status: 409
            });
        }
        // Хеширование пароля
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        // Формирование полного имени с капитализацией
        const capitalizedLastName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["capitalizeName"])(lastName);
        const capitalizedFirstName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["capitalizeName"])(firstName);
        const capitalizedMiddleName = middleName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["capitalizeName"])(middleName) : "";
        const fullName = `${capitalizedLastName} ${capitalizedFirstName}${capitalizedMiddleName ? ` ${capitalizedMiddleName}` : ""}`.trim();
        // Создание пользователя
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].patient.create({
            data: {
                login,
                email,
                password: hashedPassword,
                name: fullName,
                phone: normalizedPhone,
                registration_date: new Date()
            }
        });
        // Возвращаем успешный ответ без пароля
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Регистрация успешна",
            user: {
                id: user.id,
                login: user.login,
                email: user.email,
                name: user.name,
                phone: user.phone
            }
        }, {
            status: 201
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Ошибка при регистрации. Попробуйте позже."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d7f5b47b._.js.map