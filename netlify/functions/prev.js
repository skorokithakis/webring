import { redirect, getPrevious, getRandom } from "./utils.js"

export default async (request) => {
    const referer = request.headers.get("referer")
    const site = getPrevious(referer) || getRandom()
    return redirect(site)
}
