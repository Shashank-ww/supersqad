/**
 * Route arrays accessible to public in general
 * Does not Require Authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/"
]

/**
 * Route arrays used for Authentication / Access
 * Redirtects loggedin user to User Dashboard or Protected Pages 
 * @type {string[]}
 */

export const authRoutes = [
    "/authentication/login",
    "/authentication/register",
]

/**
 * Prefix for API authentication routes
 * Routes with this as Prefix are used for API Authentication Purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path if user is logged in or after they are logged in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard/client"