import 'server-only';

const dictionaries = {
    'cs-CZ': () => import('./dictionaries/cs.json').then((module) => module.default),
    'en-US': () => import('./dictionaries/en.json').then((module) => module.default),
    'it-IT': () => import('./dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]();