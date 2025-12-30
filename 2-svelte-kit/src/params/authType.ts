import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param): param is 'sigin' | 'register' => { // 'param is ...' indica el tipo específico que estamos validando.
    return param == 'sigin' || param == 'register';
} ;