const initApp = () => {
    const html = document.documentElement;
    const checkbox = document.querySelector('.mode-container__switch');

    const setLightMode = () => {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
    };

    const setDarkMode = () => {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
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
