import { imageUrl } from "~/utils/constants"

export const getFullImagePath = (image: string) => {
    return `${imageUrl}/${image}?timestamp=${Date.now()}`
}

export const getBase64 = (img: Blob, callback: (base64Url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}