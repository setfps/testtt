const event = new CustomEvent("setCustomConfig");
window.currency = '₽';
window.defaultPaymentAmount = 0xa;
window.zeroToFree = true;
hideServerSelector = true;
sidebarStoreToRight = true;
window.dispatchEvent(event);

function main() {
    window.dispatchEvent(new CustomEvent('initState'));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));
    window.componentsManager.addListener("HEADER", "DID_MOUNT", () => {
        const {
            player: _0x4301aa
        } = window.getState().player;
        if (!_0x4301aa) {
            return;
        }
        const _0x46982f = "\n    <a href=\"/profile\" style=\"text-decoration: none;\" class=\"user-avatar-link\">\n        <div class=\"user-avatar-container\" style=\"border-radius: 50%; border: 1px dashed var(--accent-color-800); width: 38px; height: 38px\">\n            <img class=\"user-avatar-image\" style=\"width: 100%; height: 100%; object-fit: cover; border-radius: 50%;\" src=\"" + _0x4301aa.avatar + "\"></img>\n        </div>\n    </a>\n";
        const _0x403a69 = _0x4301aa.username;
        const _0xbd32ad = "<a href=\"/profile\" style=\"text-decoration: none;\"><div class=\"ProfileNav-module__name\">" + _0x403a69 + "</div></a>";
        const _0x1b5d5f = document.querySelector(".PlayerMenu-module__profileLink");
        _0x1b5d5f.insertAdjacentHTML("beforebegin", _0x46982f);
        _0x1b5d5f.insertAdjacentHTML("beforebegin", _0xbd32ad);
    });
    window.componentsManager.load();
}
if (window.isAppReady) {
    main();
} else {
    window.addEventListener('appReady', () => {
        main();
    });
}
const interval = setInterval(() => {
    const _0x21fdeb = document.querySelector(".ProfileContent-module__wrapper");
    if (_0x21fdeb) {
        clearInterval(interval);
        _0x21fdeb.insertAdjacentHTML('beforeend', "\n            <div class=\"animated\">\n                <div class=\"xbox xbox_vk-widget\" id=\"vk_groups\"></div>\n                <div class=\"animated\">\n                    <div class=\"xbox xbox_vk-member-reward\">\n                        <div class=\"xbox__body\">\n                            <div style=\"text-align: center;\">Хочешь еженедельно&nbsp;</div>\n                            <div style=\"text-align: center;\">получать 30 <u>рублей?</u></div>\n                            <div style=\"text-align: center;\">(Бустерам 80р.)</div>\n                            <div style=\"text-align: center;\">\n                                Вступай в <a href=\"https://discord.com/invite/grandrust\" target=\"_blank\" rel=\"noopener noreferrer\">наш Discord!</a><br>\n                            </div>\n                            <div class=\"xbox__discord\" style=\"position: relative; width: calc(100% + 39px); left: -19px; bottom: -21px;\">\n                                <a class=\"checkBalance\" href=\"https://discord.com/oauth2/authorize?client_id=1264067224109580299&response_type=code&redirect_uri=https%3A%2F%2Fwartunerust.ru&scope=identify\">Получить бонус</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>");
    }
}, 0x3e8);
const targetNode = document.body;
const config = {
    'childList': true,
    'subtree': true
};
const addCustomContent = () => {
    const _0x5b071b = document.querySelector(".PlayerBalanceModal-module__footer");
    if (_0x5b071b) {
        if (!_0x5b071b.previousElementSibling?.['classList']["contains"]("_navbar__input__container_17ko5_100")) {
            _0x5b071b.insertAdjacentHTML("beforebegin", "\n        <div class=\"_navbar__input__container_17ko5_100\">\n            <div class=\"_navbar__input__label_17ko5_109\">Скинами из Steam \n                <a class=\"steam_faq\" href=\"/page/faq\">FAQ</a>\n            </div>\n            <a class=\"full\" href=\"https://steamcommunity.com/tradeoffer/new/?partner=1563791307&token=pPln6B-z\" target=\"_blank\" rel=\"noopener noreferrer\">\n                <button class=\"button full button-primary\">Пополнить</button>\n            </a>\n        </div>");
        }
    }
};
const callback = (_0x579200, _0x38f8c0) => {
    for (const _0x3edeeb of _0x579200) {
        if (_0x3edeeb.type === "childList") {
            addCustomContent();
        }
    }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
const headerInterval = setInterval(() => {
    const _0x23f3b9 = document.querySelector(".container.headerContainer");
    if (_0x23f3b9) {
        clearInterval(headerInterval);
        _0x23f3b9.insertAdjacentHTML("beforeend", "<div class=\"notice-container\">\n                <span class=\"notice-icon\"><i class=\"fa--xf far fa-info\" aria-hidden=\"true\"></i></span>\n                <div class=\"notice-content\">\n                    <p align=\"center\"><big><big>В магазине действует бонус от 10% при пополнении! Скидка дня <red7>10%</red7></big></big></p>\n                    <p align=\"center\">Если вы наблюдаете проблемы с пополнением баланса - обратитесь через Discord к администратору KirillRND в личные сообщения <a href=\"https://discord.gg/EpDjswKYHW\"><red7>ссылка на наш канал</red7>\n</a></p>\n                </div>\n            </div>");
    }
}, 0x3e8);
document.addEventListener("DOMContentLoaded", function() {
    const _0x11adfa = document.createElement("div");
    _0x11adfa.id = "promoCodeContainer";
    _0x11adfa.style.position = 'fixed';
    _0x11adfa.style.bottom = '20px';
    _0x11adfa.style.right = "20px";
    _0x11adfa.style.backgroundColor = "#2e3740";
    _0x11adfa.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 2px 10px";
    _0x11adfa.style.borderRadius = '10px';
    _0x11adfa.style.padding = "20px";
    _0x11adfa.style.zIndex = "1000";
    _0x11adfa.style.display = "flex";
    _0x11adfa.style.flexDirection = 'column';
    _0x11adfa.innerHTML = "\n        <button style=\"cursor: pointer; align-self: flex-end;\" onclick=\"this.parentElement.style.display='none'\">×</button>\n        <p>Стартовый промокод для тебя!</p>\n        <p>Получи на баланс <span>30₽</span> в магазине</p>\n        <div style=\"display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: rgb(255 255 255 / 10%); border-radius: 10px; will-change: transform; backface-visibility: hidden; margin: 10px; font-weight: 600;\">\n            <p id=\"promo\" style=\"margin-right: 10px; color: #fff;\">WARTUNE-START</p>\n            <button id=\"copyButton\" style=\"background: #2E3740; box-shadow: inset 0 0 51pt 0 rgba(255, 255, 255, .05); backdrop-filter: blur(48px); color: #ffffff; padding: 6px 10px; transition: all 0.2s; border-radius: 10px; cursor: pointer;\">Скопировать</button>\n        </div>\n        <div class=\"d-flex promos mt-4\" style=\"display: none;\">\n            <p>Промокод скопирован!</p>\n        </div>\n    ";
    document.body.appendChild(_0x11adfa);

    function _0xc273ef(_0x4b8ab0, _0x58d57c = false) {
        const _0xcb9cc5 = document.createElement("div");
        _0xcb9cc5.className = "Toasts-module__wrapper";
        const _0x41d4d2 = document.createElement("div");
        _0x41d4d2.className = "Toast-module__toast " + (_0x58d57c ? "Toast-module__error" : "Toast-module__success");
        const _0x3db36b = _0x58d57c ? "\n            <svg class=\"Toast-module__icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ff365a\" viewBox=\"0 0 20 20\">\n                <path d=\"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z\"></path>\n            </svg>\n        " : "\n            <svg class=\"Toast-module__icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#49d663\" viewBox=\"0 0 20 20\">\n                <path d=\"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z\"></path>\n            </svg>\n        ";
        const _0x5ad8da = "\n            <div class=\"Toast-module__messageWrapper\">\n                <p class=\"Toast-module__title\">" + (_0x58d57c ? "Ошибка" : "Успешно") + "</p>\n                <span class=\"Toast-module__message\">" + (_0x58d57c ? "Недопустимый промокод" : _0x4b8ab0) + "</span>\n            </div>\n        ";
        _0x41d4d2.innerHTML = '' + _0x3db36b + _0x5ad8da;
        _0xcb9cc5.appendChild(_0x41d4d2);
        document.body.appendChild(_0xcb9cc5);
        setTimeout(() => {
            document.body.removeChild(_0xcb9cc5);
        }, 0xbb8);
    }
    document.getElementById("copyButton").addEventListener("click", function() {
        const _0x43bbfa = document.getElementById('promo').innerText;
        navigator.clipboard.writeText(_0x43bbfa).then(() => {
            _0x11adfa.querySelector("div").style.display = "none";
            document.querySelector(".promos").style.display = "flex";
            _0xc273ef("Промокод успешно скопирован!");
        })["catch"](_0x1bc3ef => {
            console.error("Ошибка при копировании текста: ", _0x1bc3ef);
            _0xc273ef("Ошибка при копировании текста.", true);
        });
    });
});