(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useChiefDoctorNotifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChiefDoctorNotifications",
    ()=>useChiefDoctorNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/SMAlert/AlertProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const NOTIFICATION_CHECK_INTERVAL = 30000; // 30 секунд
const NOTIFIED_LETTERS_KEY = 'chief-doctor-notifications-notified';
function useChiefDoctorNotifications() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const alert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"])();
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Инициализация аудио элемента
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChiefDoctorNotifications.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                audioRef.current = new Audio('/sounds/notification.mp3');
                audioRef.current.volume = 0.5;
            }
        }
    }["useChiefDoctorNotifications.useEffect"], []);
    const playNotificationSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChiefDoctorNotifications.useCallback[playNotificationSound]": ()=>{
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch({
                    "useChiefDoctorNotifications.useCallback[playNotificationSound]": ()=>{
                    // Audio play failed - browser may block autoplay
                    }
                }["useChiefDoctorNotifications.useCallback[playNotificationSound]"]);
            }
        }
    }["useChiefDoctorNotifications.useCallback[playNotificationSound]"], []);
    const checkForUnreadLetters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChiefDoctorNotifications.useCallback[checkForUnreadLetters]": async ()=>{
            // Проверяем только если пользователь - главный врач
            if (status !== 'authenticated' || !session) return;
            // @ts-expect-error - role может быть undefined
            const userRole = session?.user?.role;
            if (userRole !== 'CHIEF_DOCTOR') return;
            try {
                const response = await fetch('/api/admin/letters/unread');
                if (!response.ok) return;
                const data = await response.json();
                const unreadLetters = data.letters || [];
                if (unreadLetters.length === 0) return;
                // Получаем список уже уведомленных писем
                const notifiedLetters = JSON.parse(localStorage.getItem(NOTIFIED_LETTERS_KEY) || '[]');
                // Находим новые непрочитанные письма (ещё не уведомляли)
                const newLetters = unreadLetters.filter({
                    "useChiefDoctorNotifications.useCallback[checkForUnreadLetters].newLetters": (letter)=>!notifiedLetters.includes(letter.id)
                }["useChiefDoctorNotifications.useCallback[checkForUnreadLetters].newLetters"]);
                // Письма с новыми сообщениями от пациентов
                const lettersWithNewMessages = unreadLetters.filter({
                    "useChiefDoctorNotifications.useCallback[checkForUnreadLetters].lettersWithNewMessages": (letter)=>letter.has_new_patient_message && !notifiedLetters.includes(letter.id + 10000) // +10000 чтобы различать новые письма от новых сообщений
                }["useChiefDoctorNotifications.useCallback[checkForUnreadLetters].lettersWithNewMessages"]);
                const hasNewNotifications = newLetters.length > 0 || lettersWithNewMessages.length > 0;
                if (hasNewNotifications) {
                    // Воспроизводим звук уведомления
                    playNotificationSound();
                    // Показываем уведомление
                    const newLettersCount = newLetters.filter({
                        "useChiefDoctorNotifications.useCallback[checkForUnreadLetters]": (l)=>!l.is_read && !l.has_new_patient_message
                    }["useChiefDoctorNotifications.useCallback[checkForUnreadLetters]"]).length;
                    const newMessagesCount = lettersWithNewMessages.length;
                    if (newLettersCount > 0 && newMessagesCount > 0) {
                        alert.info(`У вас ${newLettersCount} новых писем и ${newMessagesCount} новых ответов от пациентов. Просмотрите админ-панель.`, 'Новые сообщения');
                    } else if (newLettersCount > 0) {
                        alert.info(newLettersCount === 1 ? `Новое письмо от пациента "${newLetters[0].patient.name}". Просмотрите админ-панель.` : `У вас ${newLettersCount} новых писем от пациентов. Просмотрите админ-панель.`, 'Новые письма');
                    } else if (newMessagesCount > 0) {
                        alert.info(newMessagesCount === 1 ? `Новый ответ от пациента "${lettersWithNewMessages[0].patient.name}" в переписке. Просмотрите админ-панель.` : `У вас ${newMessagesCount} новых ответов от пациентов. Просмотрите админ-панель.`, 'Новые ответы');
                    }
                    // Отмечаем письма как уведомленные
                    const updatedNotified = [
                        ...notifiedLetters,
                        ...newLetters.map({
                            "useChiefDoctorNotifications.useCallback[checkForUnreadLetters]": (l)=>l.id
                        }["useChiefDoctorNotifications.useCallback[checkForUnreadLetters]"]),
                        ...lettersWithNewMessages.map({
                            "useChiefDoctorNotifications.useCallback[checkForUnreadLetters]": (l)=>l.id + 10000
                        }["useChiefDoctorNotifications.useCallback[checkForUnreadLetters]"])
                    ];
                    localStorage.setItem(NOTIFIED_LETTERS_KEY, JSON.stringify(updatedNotified));
                }
            } catch (error) {
                console.error('Error checking for chief doctor notifications:', error);
            }
        }
    }["useChiefDoctorNotifications.useCallback[checkForUnreadLetters]"], [
        session,
        status,
        alert,
        playNotificationSound
    ]);
    // Проверка при первом входе или возврате на сайт
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChiefDoctorNotifications.useEffect": ()=>{
            if (status !== 'authenticated') return;
            // @ts-expect-error - role может быть undefined
            const userRole = session?.user?.role;
            if (userRole !== 'CHIEF_DOCTOR') return;
            // Небольшая задержка для загрузки страницы
            const initialCheckTimeout = setTimeout({
                "useChiefDoctorNotifications.useEffect.initialCheckTimeout": ()=>{
                    checkForUnreadLetters();
                }
            }["useChiefDoctorNotifications.useEffect.initialCheckTimeout"], 2000);
            return ({
                "useChiefDoctorNotifications.useEffect": ()=>clearTimeout(initialCheckTimeout)
            })["useChiefDoctorNotifications.useEffect"];
        }
    }["useChiefDoctorNotifications.useEffect"], [
        status,
        session,
        checkForUnreadLetters
    ]);
    // Периодическая проверка
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChiefDoctorNotifications.useEffect": ()=>{
            if (status !== 'authenticated') {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                return;
            }
            // @ts-expect-error - role может быть undefined
            const userRole = session?.user?.role;
            if (userRole !== 'CHIEF_DOCTOR') return;
            // Запускаем периодическую проверку
            intervalRef.current = setInterval(checkForUnreadLetters, NOTIFICATION_CHECK_INTERVAL);
            return ({
                "useChiefDoctorNotifications.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                }
            })["useChiefDoctorNotifications.useEffect"];
        }
    }["useChiefDoctorNotifications.useEffect"], [
        status,
        session,
        checkForUnreadLetters
    ]);
    // Очистка уведомления при прочтении письма
    const clearNotifiedLetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChiefDoctorNotifications.useCallback[clearNotifiedLetter]": (letterId)=>{
            const notifiedLetters = JSON.parse(localStorage.getItem(NOTIFIED_LETTERS_KEY) || '[]');
            const updated = notifiedLetters.filter({
                "useChiefDoctorNotifications.useCallback[clearNotifiedLetter].updated": (id)=>id !== letterId && id !== letterId + 10000
            }["useChiefDoctorNotifications.useCallback[clearNotifiedLetter].updated"]);
            localStorage.setItem(NOTIFIED_LETTERS_KEY, JSON.stringify(updated));
        }
    }["useChiefDoctorNotifications.useCallback[clearNotifiedLetter]"], []);
    return {
        checkForUnreadLetters,
        clearNotifiedLetter
    };
}
_s(useChiefDoctorNotifications, "N3ETE2x/OQ/gJBmyyvg0tEZIYYE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChiefDoctorNotifications/ChiefDoctorNotifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChiefDoctorNotifications",
    ()=>ChiefDoctorNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChiefDoctorNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChiefDoctorNotifications.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ChiefDoctorNotifications() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChiefDoctorNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChiefDoctorNotifications"])();
    return null;
}
_s(ChiefDoctorNotifications, "GlcquIs4gMJWVXuJcjdFujfVPKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChiefDoctorNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChiefDoctorNotifications"]
    ];
});
_c = ChiefDoctorNotifications;
var _c;
__turbopack_context__.k.register(_c, "ChiefDoctorNotifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/SMAlert/AlertProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChiefDoctorNotifications$2f$ChiefDoctorNotifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChiefDoctorNotifications/ChiefDoctorNotifications.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function AdminLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChiefDoctorNotifications$2f$ChiefDoctorNotifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChiefDoctorNotifications"], {}, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/layout.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/layout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = AdminLayout;
var _c;
__turbopack_context__.k.register(_c, "AdminLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2584f4b5._.js.map