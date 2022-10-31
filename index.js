var TxtType = function (t, e, i) {
    (this.toRotate = e), (this.el = t), (this.loopNum = 0), (this.period = parseInt(i, 10) || 2e3), (this.txt = ""), this.tick(), (this.isDeleting = !1);
};
(TxtType.prototype.tick = function () {
    var t = this.loopNum % this.toRotate.length,
        t = this.toRotate[t],
        e = (this.isDeleting ? (this.txt = t.substring(0, this.txt.length - 1)) : (this.txt = t.substring(0, this.txt.length + 1)), (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>"), this),
        i = 150 - 100 * Math.random();
    this.isDeleting && (i /= 2),
        this.isDeleting || this.txt !== t ? this.isDeleting && "" === this.txt && ((this.isDeleting = !1), this.loopNum++, (i = 500)) : ((i = this.period), (this.isDeleting = !0)),
        setTimeout(function () {
            e.tick();
        }, i);
}),
(window.onload = function () {
    for (var t = document.getElementsByClassName("typewriter"), e = 0; e < t.length; e++) {
        var i = t[e].getAttribute("data-type"),
            s = t[e].getAttribute("data-period");
        i && new TxtType(t[e], JSON.parse(i), s);
    }
    var n = document.createElement("style");
    (n.type = "text/css"), (n.innerHTML = ".typewriter > .wrap { border-right: 0.1em solid #1688f0}"), document.body.appendChild(n);
}),
(function (i) {
    i("html").removeClass("no-js"),
        i("header a").click(function (t) {
            var e;
            i(this).hasClass("no-scroll") ||
                (t.preventDefault(),
                (t = i(this).attr("href")),
                (e = i(t).offset().top),
                i("html, body").animate({ scrollTop: e + "px" }, +Math.abs(window.pageYOffset - i(t).offset().top)),
                i("header").hasClass("active") && i("header, body").removeClass("active"));
        }),
        i("#to-top").click(function () {
            i("html, body").animate({ scrollTop: 0 }, 500);
        }),
        i("#lead-down span").click(function () {
            var t = i("#lead").next().offset().top;
            i("html, body").animate({ scrollTop: t + "px" }, 500);
        }),
        i("#experience-timeline").each(function () {
            ($this = i(this)),
                ($userContent = $this.children("div")).each(function () {
                    i(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
                }),
                $this.find(".vtimeline-point").each(function () {
                    i(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
                }),
                $this.find(".vtimeline-content").each(function () {
                    var t = i(this).data("date");
                    t &&
                        i(this)
                            .parent()
                            .prepend('<span class="vtimeline-date">' + t + "</span>");
                });
        }),
        i("#mobile-menu-open").click(function () {
            i("header, body").addClass("active");
        }),
        i("#mobile-menu-close").click(function () {
            i("header, body").removeClass("active");
        });
})(jQuery);

