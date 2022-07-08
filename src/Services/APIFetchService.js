export const getData = async (url) => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': '*/*',
            'x-api-key': 'ef0b8b33-7d53-4f79-adeb-f215176a5f84'
        }
    });
    return response.json();
};