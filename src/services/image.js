const smallImage = "https://media.themoviedb.org/t/p/w220_and_h330_face";
const bigImage = "https://media.themoviedb.org/t/p/w440_and_h660_face";
const defaultImage = "https://placehold.co/220x330?text=Secret+Poster";


export function getImageSrc(path) {
    return `${smallImage}${path}`;
}

export function getImageSrcSet(path) {
    return `${smallImage}${path} 1x, ${bigImage}${path} 2x`;
}

export function getDefaultImage() {
    return defaultImage;
}