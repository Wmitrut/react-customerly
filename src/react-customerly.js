module.exports = function (
  app_id,
  mobile = true,
  attachments = false,
  screenshot = false,
  lang = "en",
  visible = true,
  color = "2AA5F8",
  position = "right"
) {
  window.customerlySettings = {
    app_id: app_id,
    widget_hide_mobile: mobile,
    attachments_available: attachments,
    screenshot_available: screenshot,
    language: lang,
    widget_visible: visible,
    widget_color: color,
    widget_position: position,
  };
  !(function () {
    function e() {
      let e = t.createElement("script");
      (e.type = "text/javascript"),
        (e.async = !0),
        (e.src = "https://widget.customerly.io/widget/" + app_id);
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
        ? r.attachEvent("onload", e)
        : r.addEventListener("load", e, !1);
  })();
};
