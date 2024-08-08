import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

export default withAuth(
    async function middleware(req){
        const pathname = req.nextUrl.pathname

        // Manage route protection
        const isAuth = await getToken({req})
        const isLoginPage = pathname.startsWith('/login')

        const sensitiveRoutes = ['/dashboard']
        const isAccessingSesitiveRoute = sensitiveRoutes.some((route)=> pathname.startsWith(route))
    }
)

export const config = {
    matcher: ['/','login','/dashboard/:path*']
}