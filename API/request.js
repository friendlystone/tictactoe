export const requestPost  = (path, opts = {}) => {
    const method  = { method: 'POST' };
    const contentType = { 'Content-Type': 'application/json' };
    const headers     = {...opts.headers, ...contentType};
    return fetch( path, {...method,   ...opts, headers});
};

export const requestGet  = (path, opts = {}) => {
    const method  = { method: 'GET' };
    const contentType = { 'Content-Type': 'application/json' };
    const headers     = {...opts.headers, ...contentType};
    return fetch( path, {...method,   ...opts, headers});
};

export const postUserLocal = (payload) => { 
    return request(ENDPOINTS.LOCAL_ROOT + ENDPOINTS.LOGIN_PHP, {body:JSON.stringify( payload )}) };