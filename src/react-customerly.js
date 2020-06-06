module.exports = function (app_id, mWidget = true, attachments = false, screenshot = false, lang = 'en') {
    window.customerlySettings = {
        app_id: app_id,
        widget_hide_mobile: mWidget,
        attachments_available: attachments,
        screenshot_available: screenshot,
        language: lang,
    };
    !(function() {
        function e() {
            let e = t.createElement("script");
            (e.type = "text/javascript"),
                (e.async = !0),
                (e.src =
                    "https://widget.customerly.io/widget/"+app_id);
            let r = t.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(e, r);
        }
        let r = window,
            t = document,
            n = function() {
                n.c(arguments);
            };
        (r.customerly_queue = []),
            (n.c = function(e) {
                r.customerly_queue.push(e);
            }),
            (r.customerly = n),
            r.attachEvent
                ? r.attachEvent("onload", e)
                : r.addEventListener("load", e, !1);
    })();
};
