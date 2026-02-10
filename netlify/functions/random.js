import { redirect, getRandom } from "./utils.js"

export default async (request) => {
    const referer = request.headers.get("referer")
    const site = getRandom(referer)
    return redirect(site)
}
