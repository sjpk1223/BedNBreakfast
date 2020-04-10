// the way we make our request to the back end
// we need to make our ajax request to get info from the database
export const postSession = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const postUser = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);
