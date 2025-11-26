(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/letterNotifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Утилиты для управления уведомлениями о письмах в localStorage
__turbopack_context__.s([
    "clearLetterNotification",
    ()=>clearLetterNotification,
    "wasLetterNotified",
    ()=>wasLetterNotified
]);
const NOTIFIED_LETTERS_KEY = 'letter-notifications-notified';
function clearLetterNotification(letterId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const notifiedLetters = JSON.parse(localStorage.getItem(NOTIFIED_LETTERS_KEY) || '[]');
        // Удаляем ID письма и ID+10000 (для thread messages)
        const updated = notifiedLetters.filter((id)=>id !== letterId && id !== letterId + 10000);
        localStorage.setItem(NOTIFIED_LETTERS_KEY, JSON.stringify(updated));
    } catch (error) {
        console.error('Error clearing letter notification:', error);
    }
}
function wasLetterNotified(letterId, isThreadMessage = false) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const notifiedLetters = JSON.parse(localStorage.getItem(NOTIFIED_LETTERS_KEY) || '[]');
        const checkId = isThreadMessage ? letterId + 10000 : letterId;
        return notifiedLetters.includes(checkId);
    } catch (error) {
        console.error('Error checking letter notification:', error);
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_utils_letterNotifications_ts_e9f224de._.js.map