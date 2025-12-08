module.exports = [
"[project]/src/hooks/useUnreadCounts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUnreadCounts",
    ()=>useUnreadCounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useUnreadCounts(refreshInterval = 30000) {
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        feedbacks: 0,
        letters: 0,
        chats: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchCounts = async ()=>{
        try {
            const res = await fetch('/api/admin/unread-counts');
            if (res.ok) {
                const data = await res.json();
                setCounts(data);
            }
        } catch (error) {} finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchCounts();
        // Периодически обновляем счетчики
        const interval = setInterval(fetchCounts, refreshInterval);
        return ()=>clearInterval(interval);
    }, [
        refreshInterval
    ]);
    return {
        counts,
        loading,
        refetch: fetchCounts
    };
}
}),
"[project]/src/contexts/UnreadCountsContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnreadCountsProvider",
    ()=>UnreadCountsProvider,
    "useUnreadCountsContext",
    ()=>useUnreadCountsContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUnreadCounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUnreadCounts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const UnreadCountsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function UnreadCountsProvider({ children }) {
    const { counts, loading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUnreadCounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUnreadCounts"])(30000);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnreadCountsContext.Provider, {
        value: {
            counts,
            loading,
            refetch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/UnreadCountsContext.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function useUnreadCountsContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(UnreadCountsContext);
    if (!context) {
        // Возвращаем дефолтные значения если контекст не доступен
        return {
            counts: {
                feedbacks: 0,
                letters: 0,
                chats: 0
            },
            loading: false,
            refetch: async ()=>{}
        };
    }
    return context;
}
}),
"[project]/src/hooks/useOperatorChatNotifications.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOperatorChatNotifications",
    ()=>useOperatorChatNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/SMAlert/AlertProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const NOTIFICATION_CHECK_INTERVAL = 15000; // 15 seconds (more frequent for chat)
const NOTIFIED_CHATS_KEY = 'chat-notifications-notified';
function useOperatorChatNotifications() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const alert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAlert"])();
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAdminRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Track if user is in admin panel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isAdminRef.current = pathname?.startsWith('/admin') || false;
    }, [
        pathname
    ]);
    // Initialize audio element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const playNotificationSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(()=>{
            // Audio play failed - browser may block autoplay
            });
        }
    }, []);
    const checkForUnreadChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Only check if authenticated and in admin panel
        if (status !== 'authenticated' || !session || !isAdminRef.current) {
            return;
        }
        try {
            const response = await fetch('/api/operator-chat?unread_only=true');
            if (!response.ok) return;
            const data = await response.json();
            const unreadChats = data.chats || [];
            if (unreadChats.length === 0) return;
            // Get previously notified chats
            const notifiedChats = JSON.parse(localStorage.getItem(NOTIFIED_CHATS_KEY) || '[]');
            // Find new unread chats (not yet notified)
            const newChats = unreadChats.filter((chat)=>!notifiedChats.includes(chat.id));
            if (newChats.length > 0) {
                // Play notification sound
                playNotificationSound();
                // Show alert for new chats
                if (newChats.length === 1) {
                    const chat = newChats[0];
                    const lastMessage = chat.messages[0]?.content || '';
                    const preview = lastMessage.length > 50 ? lastMessage.substring(0, 50) + '...' : lastMessage;
                    alert.info(`Новое сообщение от ${chat.patient.name}: "${preview}"`, 'Новое сообщение в чате');
                } else {
                    alert.info(`У вас ${newChats.length} новых сообщений в чате. Проверьте раздел "Чат".`, 'Новые сообщения');
                }
                // Mark these chats as notified
                const updatedNotified = [
                    ...notifiedChats,
                    ...newChats.map((c)=>c.id)
                ];
                localStorage.setItem(NOTIFIED_CHATS_KEY, JSON.stringify(updatedNotified));
            }
        } catch (error) {}
    }, [
        session,
        status,
        alert,
        playNotificationSound
    ]);
    // Check on first login when in admin panel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status !== 'authenticated' || !isAdminRef.current) return;
        // Small delay to let the page load first
        const initialCheckTimeout = setTimeout(()=>{
            checkForUnreadChats();
        }, 2000);
        return ()=>clearTimeout(initialCheckTimeout);
    }, [
        status,
        pathname,
        checkForUnreadChats
    ]);
    // Set up periodic checking (only when in admin panel)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status !== 'authenticated' || !isAdminRef.current) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }
        // Start periodic checks
        intervalRef.current = setInterval(checkForUnreadChats, NOTIFICATION_CHECK_INTERVAL);
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [
        status,
        pathname,
        checkForUnreadChats
    ]);
    return {
        checkForUnreadChats
    };
}
}),
"[project]/src/app/admin/AdminProviders.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminProviders",
    ()=>AdminProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/SMAlert/AlertProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UnreadCountsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/UnreadCountsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOperatorChatNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useOperatorChatNotifications.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AdminNotifications({ children }) {
    // Initialize operator chat notifications
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOperatorChatNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOperatorChatNotifications"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
function AdminProviders({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$SMAlert$2f$AlertProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UnreadCountsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnreadCountsProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminNotifications, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-screen bg-gray-50",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminProviders.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/AdminProviders.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminProviders.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/AdminProviders.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/AdminProviders.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_c4c049ac._.js.map