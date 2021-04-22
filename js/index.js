const initApp = () => {
    const html = document.documentElement;
    const checkbox = document.querySelector('.mode-container__switch');

    const setDarkMode = () => {
        html.classList.replace('light-mode', 'dark-mode');
    };

    const setLightMode = () => {
        html.classList.replace('dark-mode', 'light-mode');
    };

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            setDarkMode();
            return;
        }

        setLightMode();
    });

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.checked = true;
        setDarkMode();
        return;
    }

    checkbox.checked = false;
    setLightMode();
};

window.addEventListener('DOMContentLoaded', initApp);
