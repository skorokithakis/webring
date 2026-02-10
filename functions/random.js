import { redirect, getRandom } from "./utils.js"

export function onRequest(context) {
    const referer = context.request.headers.get("referer")
    const site = getRandom(referer)
    return redirect(site)
}
