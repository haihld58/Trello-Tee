!function (a, b) {
    if ("function" == typeof define && define.amd) define(["exports"], b); else if ("undefined" != typeof exports) b(exports); else {
        var c = {exports: {}};
        b(c.exports), a.TrelloApi = c.exports
    }
}(this, function (a) {
    "use strict";

    function b(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var c = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), d = function () {
        function a() {
            b(this, a), this.key = "41257716bae3f0f35422a228fbd18c97"
        }

        return c(a, [{
            key: "setToken", value: function (a) {
                this.token = a
            }
        }, {
            key: "getMemberBoards", value: function () {
                return jQuery.getAsObservable("https://api.trello.com/1/members/me", {
                    boards: "open",
                    board_fields: "name,url,prefs",
                    fields: "none",
                    key: this.key,
                    token: this.token
                })
            }
        }, {
            key: "getListsForBoard", value: function (a) {
                return jQuery.getAsObservable("https://api.trello.com/1/boards/" + a + "/lists", {
                    filter: "open",
                    key: this.key,
                    token: this.token
                })
            }
        }, {
            key: "createCard", value: function (a, b, c, d, e, f) {
                var card = jQuery.postAsObservable("https://api.trello.com/1/cards", {
                    idList: a,
                    name: b,
                    desc: c,
                    pos: "bottom",
                    urlSource: d,
                    key: this.key,
                    token: this.token
                });

                var key = this.key,
                    token = this.token;

                if (typeof e !== "undefined" && e.length) {
                    card.subscribe(function (card) {
                        if (!card.hasError) {

                            var cardId = card.data.id;

                            for (var j = 0; j < e.length; j++) {
                                jQuery.postAsObservable("https://api.trello.com/1/cards/" + cardId + "/attachments", {
                                    url: e[j],
                                    key: key,
                                    token: token
                                });
                            }

                            if (f) {
                                jQuery.postAsObservable("https://api.trello.com/1/cards/" + cardId + "/actions/comments", {
                                    text: f,
                                    key: key,
                                    token: token
                                });
                            }
                        }
                    })
                }

                return card;
            }
        }]), a
    }();
    a["default"] = d
}), function (a, b) {
    if ("function" == typeof define && define.amd) define(["exports"], b); else if ("undefined" != typeof exports) b(exports); else {
        var c = {exports: {}};
        b(c.exports), a.TrelloData = c.exports
    }
}(this, function (a) {
    "use strict";

    function b(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var c = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), d = function () {
        function a() {
            var c = this;
            b(this, a), this.key = "trello-data", this.dataUpdates$ = new Rx.ReplaySubject, this.data$ = new Rx.ReplaySubject(1), this.data = this.getEmptyData(), chrome.storage.local.get(this.key, function (a) {
                log.debug("TrelloData", "storage retrieved", a);
                var b = a[c.key] ? a[c.key] : c.getEmptyData();
                c.data = Object.assign(c.data, b), c.data$.onNext(c.data), c.dataUpdates$.doOnNext(function (a) {
                    return log.debug("TrelloData", "applying update", a)
                }).scan(function (a, b) {
                    return Object.assign(a, b)
                }, c.data).subscribe(function (a) {
                    log.debug("TrelloData", "updated", a), c.data = a, c.data$.onNext(c.data);
                    var b = {};
                    b[c.key] = c.data, chrome.storage.local.set(b, function () {
                        return log.debug("TrelloData", "storage saved", b)
                    })
                })
            }), chrome.storage.onChanged.addListener(function (a, b) {
                if ("local" === b) for (var d in a) if (d === c.key) {
                    var e = a[d].newValue ? a[d].newValue : c.getEmptyData();
                    log.debug("TrelloData", "storage change", e), c.dataUpdates$.onNext(e)
                }
            })
        }

        return c(a, [{
            key: "dataObservable", value: function () {
                return this.data$
            }
        }, {
            key: "getData", value: function () {
                return this.data
            }
        }, {
            key: "updateToken", value: function (a) {
                this.dataUpdates$.onNext({token: a})
            }
        }, {
            key: "updateBoards", value: function (a) {
                this.dataUpdates$.onNext({boards: a})
            }
        }, {
            key: "setLastSelection", value: function (a, b) {
                this.dataUpdates$.onNext({lastSelection: {boardId: a, listId: b}})
            }
        }, {
            key: "getEmptyData", value: function () {
                return {boards: [], token: null, version: 1, lastSelection: {boardId: null, listId: null}}
            }
        }]), a
    }();
    a["default"] = d
}), function (a, b) {
    if ("function" == typeof define && define.amd) define(["exports", "TrelloApi", "TrelloData"], b); else if ("undefined" != typeof exports) b(exports, require("TrelloApi"), require("TrelloData")); else {
        var c = {exports: {}};
        b(c.exports, a.TrelloApi, a.TrelloData), a.TrelloChrome = c.exports
    }
}(this, function (a, b, c) {
    "use strict";

    function d(a) {
        return a && a.__esModule ? a : {"default": a}
    }

    function e(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var f = d(b), g = d(c), h = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), i = function () {
        function a() {
            var b = this;
            e(this, a), this.data = new g["default"], this.api = new f["default"], this.data.dataObservable().map(function (a) {
                return a.token
            }).distinctUntilChanged().subscribe(function (a) {
                return b.api.setToken(a)
            }), this.loadBoardsRequest = new Rx.Subject, this.loadBoardsRequest.doOnNext(function () {
                return log.debug("TrelloChrome", "load boards requested")
            }).pausableBuffered(this.loggedInObservable()).flatMap(function () {
                return b.api.getMemberBoards()
            }).map(function (a) {
                return a.data.boards = a.data.boards.map(function (a) {
                    return _.extend(a, {name: _.escape(a.name)})
                }), a.data
            }).doOnNext(function (a) {
                return log.debug("TrelloChrome", a)
            }).subscribe(function (a) {
                b.data.updateBoards(a.boards)
            })
        }

        return h(a, [{
            key: "dataObservable", value: function () {
                return this.data.dataObservable()
            }
        }, {
            key: "setLastSelection", value: function (a, b) {
                this.data.setLastSelection(a, b)
            }
        }, {
            key: "loadBoards", value: function () {
                log.debug("TrelloChrome", "loadBoards"), this.loadBoardsRequest.onNext(!0)
            }
        }, {
            key: "createCard", value: function (a, b, c, d, e, f) {
                return this.api.createCard(a, b, c, d, e, f)
            }
        }, {
            key: "getListsForBoard", value: function (a) {
                return this.api.getListsForBoard(a).map(function (a) {
                    return a.data
                }).map(function (a) {
                    return a.map(function (a) {
                        return _.extend(a, {name: _.escape(a.name)})
                    })
                })
            }
        }, {
            key: "getBoardsForQuery", value: function (a) {
                return this.data.dataObservable().map(function (a) {
                    return a.boards
                }).map(function (b) {
                    return b.map(function (b) {
                        return b.score = b.name.score(a, .5), b
                    }).filter(function (a) {
                        return a.score > .4
                    }).sort(function (a, b) {
                        return b.score - a.score
                    })
                })
            }
        }, {
            key: "updateToken", value: function (a) {
                this.data.updateToken(a)
            }
        }, {
            key: "isLoggedIn", value: function () {
                return null !== this.data.getData().token
            }
        }, {
            key: "loggedInObservable", value: function () {
                return this.data.dataObservable().map(function (a) {
                    return null !== a.token
                }).distinctUntilChanged().doOnNext(function (a) {
                    return log.debug("TrelloChrome", "loggedInObservable", a)
                })
            }
        }]), a
    }();
    a["default"] = i
}), function (a, b) {
    if ("function" == typeof define && define.amd) define(["exports"], b); else if ("undefined" != typeof exports) b(exports); else {
        var c = {exports: {}};
        b(c.exports), a.SelectorViewController = c.exports
    }
}(this, function (a) {
    "use strict";

    function b(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var c = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), d = function () {
        function a() {
            b(this, a), this.selectedValue$ = new Rx.ReplaySubject(1)
        }

        return c(a, [{
            key: "bind", value: function (a, b) {
                var c = this;
                this.selectorData = {
                    results: [], text: function (a) {
                        return a.name
                    }
                }, this.element = $(a).select2({
                    width: "100%", formatSelection: function (a) {
                        return a.name
                    }, formatResult: function (a) {
                        return a.name
                    }, data: function () {
                        return c.selectorData
                    }, placeholder: b
                }), this.element.on("change", function (a) {
                    var b = c.element.val();
                    log.debug("SelectorViewController value", a, b), c.selectedValue$.onNext(b)
                })
            }
        }, {
            key: "selectedValueObservable", value: function () {
                return this.selectedValue$.distinctUntilChanged()
            }
        }, {
            key: "getSelectedValue", value: function () {
                return this.element.val()
            }
        }, {
            key: "setPlaceholder", value: function (a) {
                this.element.attr("data-placeholder", a), this.element.data("select2").setPlaceholder()
            }
        }, {
            key: "setOptions", value: function (a, b) {
                this.selectorData = Object.assign(this.selectorData, {results: a});
                var c = null;
                this.selectorData.results.find(function (a) {
                    return a.id === b
                }) && (c = b), null === c && this.selectorData.results.length > 0 && (c = this.selectorData.results[0].id), c !== this.element.val() && (this.element.val(c), this.element.trigger("change"))
            }
        }]), a
    }();
    a["default"] = d
}), function (a, b) {
    if ("function" == typeof define && define.amd) define(["exports"], b); else if ("undefined" != typeof exports) b(exports); else {
        var c = {exports: {}};
        b(c.exports), a.LoginViewController = c.exports
    }
}(this, function (a) {
    "use strict";

    function b(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var c = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), d = function () {
        function a(c) {
            b(this, a), this.tchrome = c
        }

        return c(a, [{
            key: "bind", value: function () {
                var a = this;
                log.debug("LoginViewController", "bind");
                var b = window.location.href.split("#token=");
                b.length > 1 && this.tchrome.updateToken(b[1]), $("#connect-link").click(function (b) {
                    b.preventDefault();
                    var c = chrome.extension.getURL("login.html"),
                        d = "https://trello.com/1/authorize?response_type=token&key=41257716bae3f0f35422a228fbd18c97&response_type=token&return_url=" + encodeURI(c) + "&scope=read,write,account&expiration=never&name=Trello for Chrome";
                    a.isRunningAsPopup() ? chrome.tabs.create({url: d}) : location.href = d
                }), this.tchrome.loggedInObservable().subscribe(function (a) {
                    log.debug("LoginViewController", "logged in?", a), a ? ($(".logged-in-content").removeClass("u-hidden"), $(".logged-out-content").addClass("u-hidden")) : ($(".logged-in-content").addClass("u-hidden"), $(".logged-out-content").removeClass("u-hidden"))
                })
            }
        }, {
            key: "isRunningAsPopup", value: function () {
                return chrome.extension.getViews({type: "popup"}).length > 0
            }
        }]), a
    }();
    a["default"] = d
}), function (a, b) {
    if ("function" == typeof define && define.amd) define(["exports", "SelectorViewController"], b); else if ("undefined" != typeof exports) b(exports, require("SelectorViewController")); else {
        var c = {exports: {}};
        b(c.exports, a.SelectorViewController), a.PopupViewController = c.exports
    }
}(this, function (a, b) {
    "use strict";

    function c(a) {
        return a && a.__esModule ? a : {"default": a}
    }

    function d(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function getDom() {
        //You can play with your DOM here or check URL against your regex
        var desc = document.getElementById('AdContentMessage'),
            listPlatforms = [],
            platforms = document.getElementsByClassName('platform-element'),
            imageUrl = document.getElementById('adImage'),
            poupAd = document.getElementsByClassName('modal-dialog AdDetailModal'),
            title = '',
            link = '';

        // get desc
        desc = desc ? desc.innerText : ''

        // get platforms
        if (platforms.length) {
            for (var i = 0; i < platforms.length; i++) {
                listPlatforms.push(platforms[i].innerText)
            }

            if (listPlatforms) {
                listPlatforms = listPlatforms.join(', ')
            }
        }

        // get imageUrl
        imageUrl = imageUrl ? imageUrl.src : '';

        if (poupAd.length) {
            var titleElement = document.getElementsByClassName('page-name'),
                linkElement = document.getElementsByClassName('post-link');
            if (titleElement.length) {
                title = titleElement[0].innerText + ' - Posts - SpyBadass';
            }

            if (linkElement.length) {
                link = linkElement[0].href;
            }
        }

        return {title, link, desc, listPlatforms, imageUrl}
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var e = c(b), f = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), g = function () {
        function a(b) {
            d(this, a), this.tchrome = b, this.boardSelectorVC = new e["default"], this.listSelectorVC = new e["default"], this.currentTab = null
        }

        return f(a, [{
            key: "bind", value: function () {
                var a = this;
                this.boardSelectorVC.bind($("#create-card-board"), "Select board"),
                    this.listSelectorVC.bind($("#create-card-list"), "Select list"),
                    this.form = $("#create-card-form"),
                    this.nameTextArea = $("#create-card-text"),
                    this.descriptionTextArea = $("#create-card-description"),
                    this.confirmButton = $("#confirm-add-card"),
                    this.createdCardsList = $("#created-cards"),
                    this.attachCurrentTabContainer = $("#attach-current-tab-container"),
                    this.attachCurrentTabCheckbox = $("#attach-current-tab"),
                    this.attachCurrentTabUrlSpan = $("#attach-current-tab-url"),
                    this.headerView = $("#header"),
                    this.imageUrl = '',
                    this.linkAd = '',
                    this.descriptionAd = '',
                    this.attachments = [],
                    chrome.tabs.getSelected(null, function (b) {
                        /^(f|ht)tps?:\/\//i.test(b.url) ? (a.currentTab = b, a.attachCurrentTabUrlSpan.text(a.currentTab.title)) : a.attachCurrentTabContainer.hide();
                        console.log(b)
                    }), this.tchrome.loadBoards(), this.tchrome.dataObservable().subscribe(function (b) {
                    log.debug("PopupViewController", "setting data", b), a.boardSelectorVC.setOptions(b.boards, b.lastSelection.boardId)
                }),

                    document.addEventListener("DOMContentLoaded", function () {

                        a.attachCurrentTabCheckbox[0].checked = true;
                        a.confirmButton.prop("disabled", false)

                        chrome.tabs.executeScript({
                            code: '(' + getDom + ')();'
                        }, (results) => {

                            var desc = results[0].desc,
                                listPlatforms = results[0].listPlatforms,
                                imageUrl = results[0].imageUrl,
                                titleAds = results[0].title,
                                link = results[0].link;

                            //Here we have just the innerHTML and not DOM structure
                            // a.attachCurrentTabCheckbox.is(":checked") ? (0 === a.descriptionTextArea.val().length ? a.descriptionTextArea.val(desc) : a.descriptionTextArea.val()) : a.descriptionTextArea.val('')

                            var title = (titleAds ? titleAds : a.currentTab.title) + (listPlatforms.length ? ' [' + listPlatforms + ']' : '');

                            a.nameTextArea.val(title);
                            // a.descriptionTextArea.val(desc);

                            a.attachCurrentTabCheckbox.is(":checked") ? (a.descriptionAd = desc) : a.descriptionAd = ''

                            imageUrl ? a.attachments.push(imageUrl) : (a.attachments = [])
                            a.linkAd = link;
                        });
                    }),

                    this.boardSelectorVC.selectedValueObservable().distinctUntilChanged().doOnNext(function (b) {
                        a.listSelectorVC.setPlaceholder(0 === b.length ? "Select board first" : "Loading...")
                    }).flatMap(function (b) {
                        return 0 === b.length ? Rx.Observable.just([]) : Rx.Observable.just([]).concat(a.tchrome.getListsForBoard(b))
                    }).withLatestFrom(this.tchrome.dataObservable(), function (a, b) {
                        return {lists: a, selectedListId: b.lastSelection.listId}
                    }).subscribe(function (b) {
                        log.debug("PopupViewController", "got lists", b), a.listSelectorVC.setOptions(b.lists, b.selectedListId)
                    });
                var b = new Rx.Subject;
                this.nameTextArea.on("keyup keypress", function (c) {
                    autosize(a.nameTextArea);
                    var d = c.keyCode || c.which;
                    return 13 !== d || c.shiftKey ? (b.onNext(c), !0) : (c.preventDefault(), a.form.prop("disabled") || a.form.submit(), !1)
                }), this.descriptionTextArea.on("keyup keypress", function () {
                    autosize(a.descriptionTextArea)
                }), this.attachCurrentTabCheckbox.change(function (c) {
                    var currentTabUrl = a.currentTab.url;
                    if (currentTabUrl.indexOf('https://app.spybadass.com/') !== -1 || currentTabUrl.indexOf('https://localhost:4000/') !== -1) {
                        chrome.tabs.executeScript({
                            code: '(' + getDom + ')();'
                        }, (results) => {

                            var desc = results[0].desc,
                                listPlatforms = results[0].listPlatforms,
                                imageUrl = results[0].imageUrl,
                                titleAds = results[0].title,
                                link = results[0].link;

                            a.linkAd = link;

                            imageUrl ? a.attachments.push(imageUrl) : (a.attachments = [])

                            //Here we have just the innerHTML and not DOM structure
                            a.attachCurrentTabCheckbox.is(":checked") ? (a.descriptionAd = desc) : a.descriptionAd = ''
                            // a.attachCurrentTabCheckbox.is(":checked") ? (0 === a.descriptionTextArea.val().length ? a.descriptionTextArea.val(desc) : a.descriptionTextArea.val()) : a.descriptionTextArea.val('')

                            var nameTextArea = a.nameTextArea.val(),
                                title = (titleAds ? titleAds : nameTextArea) + ' [' + listPlatforms + ']';

                            a.attachCurrentTabCheckbox.is(":checked") ? (0 === a.nameTextArea.val().length ? a.nameTextArea.val('') : a.nameTextArea.val(title)) : a.nameTextArea.val('')
                        });
                    }

                    var d = a.nameTextArea.val();
                    a.attachCurrentTabCheckbox.is(":checked") ? 0 === a.nameTextArea.val().length && null !== a.currentTab && (d = a.currentTab.title) : a.nameTextArea.val() === a.currentTab.title && (d = ""), d !== a.nameTextArea.val() && (a.nameTextArea.val(d), b.onNext(c))

                }), Rx.Observable.combineLatest(this.boardSelectorVC.selectedValueObservable(), this.listSelectorVC.selectedValueObservable(), b.map(function () {
                    return a.nameTextArea.val()
                }), function (a, b, c) {
                    return null !== a && null !== b && c && c.length > 0
                }).distinctUntilChanged().startWith(!1).subscribe(function (b) {
                    log.debug("confirm-add-card", b), a.confirmButton.prop("disabled", !b), a.form.prop("disabled", !b)
                }), this.form.submit(function (b) {
                    b.preventDefault(), a.confirmCardCreate()
                }), this.bindHeaderBackground()
            }
        }, {
            key: "bindHeaderBackground", value: function () {
                var a = this;
                Rx.Observable.combineLatest(this.boardSelectorVC.selectedValueObservable().distinctUntilChanged(), this.tchrome.dataObservable().map(function (a) {
                    return a.boards
                }), function (a, b) {
                    return b.find(function (b) {
                        return b.id === a
                    })
                }).subscribe(function (b) {
                    log.debug("PopupViewController board", b), b && b.prefs.backgroundImage ? (a.headerView.css("background-color", "#959DA1"), a.headerView.css("background-image", "url(" + b.prefs.backgroundImage + ")")) : b && b.prefs.backgroundColor ? a.headerView.css("background-color", b.prefs.backgroundColor) : a.headerView.css("background-color", "#E2E4E6")
                })
            }
        }, {
            key: "confirmCardCreate", value: function () {

                var a = this, b = this.nameTextArea.val(), c = this.descriptionTextArea.val(),
                    d = this.attachCurrentTabCheckbox.is(":checked") ? (a.linkAd ? a.linkAd : this.currentTab.url) : null,
                    g = this.attachCurrentTabCheckbox.is(":checked") ? a.attachments : [],
                    h = this.attachCurrentTabCheckbox.is(":checked") ? a.descriptionAd : '';

                if (h) {
                    var urls = h.match(/\bhttps?:\/\/\S+/gi);

                    var uniqueUrls = urls.filter(function (item, pos, self) {
                        return self.indexOf(item) === pos;
                    })
                }

                if (uniqueUrls.length) {
                    g = g.concat(uniqueUrls);
                }

                this.nameTextArea.val(""), this.descriptionTextArea.val(""), this.confirmButton.text("Creating..."), this.confirmButton.prop("disabled", !0), this.form.prop("disabled", !0), this.attachCurrentTabCheckbox.prop("checked", !1);
                var e = this.listSelectorVC.getSelectedValue();

                this.tchrome.createCard(e, b, c, d, g, h).subscribe(function (b) {
                    log.info("create card", b), a.confirmButton.text("Add");

                    var c = $("<li></li>").append($("<a></a>").attr("href", b.data.url).attr("target", "_blank").text(b.data.name));
                    a.createdCardsList.prepend(c)

                }, function (a) {
                    log.info("unable to create card", a)
                });

                var f = this.boardSelectorVC.getSelectedValue();
                this.tchrome.setLastSelection(f, e)
            }
        }]), a
    }();
    a["default"] = g
}), function (a, b) {
    if ("function" == typeof define && define.amd) define(["TrelloChrome", "OmniboxManager", "PopupViewController", "LoginViewController"], b); else if ("undefined" != typeof exports) b(require("TrelloChrome"), require("OmniboxManager"), require("PopupViewController"), require("LoginViewController")); else {
        var c = {exports: {}};
        b(a.TrelloChrome, a.OmniboxManager, a.PopupViewController, a.LoginViewController), a.app = c.exports
    }
}(this, function (a, b, c, d) {
    "use strict";

    function e(a) {
        return a && a.__esModule ? a : {"default": a}
    }

    var f = e(a), g = e(b), h = e(c), i = e(d);
    log.setDefaultLevel("trace");
    var j = new f["default"];
    if (chrome.extension.getBackgroundPage() === window) {
        log.debug("Running as background");
        var k = new g["default"](j);
        k.bind(), chrome.runtime.onInstalled.addListener(function (a) {
            log.info("previousVersion", a.previousVersion), "install" === a.reason && chrome.tabs.create({url: "login.html"})
        })
    } else if ($("#page-login").length) {
        log.debug("Running as login");
        var l = new i["default"](j);
        l.bind()
    } else if ($("#page-popup").length) {
        log.debug("Running as popup");
        var m = new i["default"](j);
        m.bind();
        var l = new h["default"](j);
        l.bind()
    }
});