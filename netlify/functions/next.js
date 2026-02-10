import { redirect, getNext, getRandom } from "./utils.js"

export default async (request) => {
    const referer = request.headers.get("referer")
    const site = getNext(referer) || getRandom()
    return redirect(site)
}
