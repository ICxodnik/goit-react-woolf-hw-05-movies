const smallImage = "https://media.themoviedb.org/t/p/w220_and_h330_face";
const bigImage = "https://media.themoviedb.org/t/p/w440_and_h660_face";
const defaultImage = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";


export function getImageSrc(path) {
    return `${smallImage}${path}`;
}

export function getImageSrcSet(path) {
    return `${smallImage}${path} 1x, ${bigImage}${path} 2x`;
}

export function getDefaultImage() {
    return defaultImage;
}