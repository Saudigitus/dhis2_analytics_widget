function baseUrl() {
    if (process.env.NODE_ENV === 'production') {
        return `${window.location.origin}/${window.location.pathname.toString().split('/')[1]}/api/system/info`;
    } else {
        return 'https://debug.dhis2.org/2.36dev/api/system/info';
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
                'Authorization': 'Basic ' + btoa('admin:district'),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
}

export {baseUrl,requestHeaders}
