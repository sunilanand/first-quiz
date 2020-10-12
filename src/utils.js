export const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
}

export const htmlDecode = (input) => {
    var doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
}