import { imageUrl } from "~/utils/constants"

export const getFullImagePath = (image: string) => {
    return `${imageUrl}/${image}?timestamp=${Date.now()}`
}