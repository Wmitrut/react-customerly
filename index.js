module.exports = {
    customerly: {
        initialize: function (appId, options) {
            window.customerlySettings = {
                app_id: appId,
                ...options,
            };

            function loadCustomerly() {
                let e = t.createElement("script");
                (e.type = "text/javascript"),
                    (e.async = !0),
                    (e.src = "https://widget.customerly.io/widget/" + appId);
                let r = t.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(e, r);
            }

            let r = window,
                t = document,
                n = function () {
                    n.c(arguments);
                };

            (r.customerly_queue = []),
                (n.c = function (e) {
                    r.customerly_queue.push(e);
                }),
                (r.customerly = n),
                r.attachEvent
                    ? r.attachEvent("onload", loadCustomerly)
                    : r.addEventListener("load", loadCustomerly, !1);
        },
    },
};
