import { redirect, getNext, getRandom } from "./utils.js"

export function onRequest(context) {
    const referer = context.request.headers.get("referer")
    const site = getNext(referer) || getRandom()
    return redirect(site)
}
