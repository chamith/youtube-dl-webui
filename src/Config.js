export function getApiHost(){
    return window.location.protocol + '//' + window.location.host.replace('3000', '5000')
}