export function getBasePath(){
    return process.env.NODE_ENV === 'production' ? '/ridehub' : '';
}