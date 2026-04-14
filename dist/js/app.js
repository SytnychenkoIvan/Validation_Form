(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP(function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        });
    }
    let addWindowScrollEvent = false;
    setTimeout(() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", function(e) {
                document.dispatchEvent(windowScroll);
            });
        }
    }, 0);
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        document.querySelectorAll(".error-text").forEach(el => el.remove());
        const errorForm = (message, input) => {
            let errorEl = document.createElement("div");
            errorEl.className = "error-text";
            errorEl.textContent = message;
            errorEl.style.color = "red";
            errorEl.style.fontSize = "15px";
            isValid = false;
            input.parentElement.appendChild(errorEl);
            isValid = false;
        };
        if (!name.value.trim()) errorForm("Введіть ім`я", name);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errorForm("Введіть вірний Email", email);
        if (password.value.trim().length < 6) errorForm("Недостатньо символів", password);
        if (isValid) {
            alert("Форма успішно відправлена");
            document.getElementById("form").reset();
        }
    });
    window["FLS"] = true;
    isWebp();
})();