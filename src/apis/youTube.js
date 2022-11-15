
const key = 'AIzaSyCpto-SSAggaLgzNqK_Q_HRiuib0T7q8AY'
//data to be sent as params in fetch request
const data = {
    part: 'snippet',
    maxResults: 5,
    key: key,
}
//building the URL 
let url = 'https://www.googleapis.com/youtube/v3/search';
url += '?';
for(let param in data) {
    url += param + '=' + data[param] + '&'
}
export default url;