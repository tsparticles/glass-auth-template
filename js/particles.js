let themeableContainer;

tsParticles.loadJSON("tsparticles", "json/particles.json")
    .then((container) => (themeableContainer = container));

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";

        themeableContainer.loadTheme(newColorScheme);
    });

