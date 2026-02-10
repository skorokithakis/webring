import { redirect, getPrevious, getRandom } from "./utils.js"

export function onRequest(context) {
    const referer = context.request.headers.get("referer")
    const site = getPrevious(referer) || getRandom()
    return redirect(site)
}
