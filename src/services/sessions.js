export const hasTokens = _ => sessionStorage.getItem('authToken');

export const setSession = session => {
    Object.keys(session).forEach(key => sessionStorage.setItem('authToken', session[key]));
};

export const signOut = _ => sessionStorage.clear();