import axios from 'axios';

export async function search(q) {
    return axios.get(`/data/${q ? 'searchKey' : 'mostPopular'}.json`)
        .then((res) => res.data.items);
}