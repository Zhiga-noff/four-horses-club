export const scrollToElement = (elementId, offset) => {
    const element = document.getElementById(elementId.slice(1));
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}