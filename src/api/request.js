function baseUrl() {
    if (process.env.NODE_ENV === 'production') {
        return `${window.location.origin}/${window.location.pathname.toString().split('/')[1]}/api/system/info`;
    } else {
        return `${process.env.REACT_APP_BASE_URL}/api/system/info`;
    }
}

function requestHeaders() {
    if (process.env.NODE_ENV === 'production') {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    } else {
        return {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ' + btoa(process.env.REACT_APP_CREDENTIALS),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
}

export { baseUrl, requestHeaders }
