function hello() {
  var BotStar = {
    appId: "s4f323620-c0ca-4358-9da6-605dbfdcacb5",
    mode: "livechat",
  };
  !(function (t, a) {
    var e = function () {
      (e.q = e.q || []).push(arguments);
    };
    (e.q = e.q || []), (t.BotStarApi = e);
    !(function () {
      var t = a.createElement("script");
      (t.type = "text/javascript"),
        (t.async = 1),
        (t.src = "https://widget.botstar.com/static/js/widget.js");
      var e = a.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(t, e);
    })();
  })(window, document);
}
