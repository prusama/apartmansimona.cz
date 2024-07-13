import Negotiator from 'negotiator';
import {match} from "@formatjs/intl-localematcher";
import {NextRequest, NextResponse} from "next/server";

const LOCALES = ['en-US', 'cs-CZ', 'it-IT'];
const DEFAULT_LOCALE = 'cs-CZ';

const getLocale = (request: NextRequest): string => {
    const extractedHeaders = { 'accept-language': request.headers.get('accept-language') }
    const negotiator = new Negotiator({ headers: extractedHeaders });
    const requestLangs = negotiator.languages();

    try {
        return match(requestLangs, LOCALES, DEFAULT_LOCALE);
    } catch (err) {
        return DEFAULT_LOCALE;
    }
};

export const middleware = (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = LOCALES.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return;
    }

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    console.log('locale', locale);
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}
