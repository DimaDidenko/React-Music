import axios from 'axios'

export function fetchData(url) {
    return axios.get(url)
        .then(({status, data}) => {
            if (status === 200) {
                return data;
            }
        })
}

export function getLocal(key) {
    return JSON.parse(localStorage.getItem(key)) !== null ? JSON.parse(localStorage.getItem(key)) : [];
}

export function youtubeFetch (query) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8`)
        .then(({data, status}) => {
            if (status === 200) {
                return data.items[0].id.videoId || data.items[0].id.channelId
            }
        })
}

