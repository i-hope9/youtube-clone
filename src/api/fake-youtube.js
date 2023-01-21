import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(q) {
    return q ? this.#searchByKeyword(q) : this.#mostPopular(); // 함수 앞에 #이 있으면 private function
  }

  async #searchByKeyword(q) {
    return axios
      .get(`/data/searchKey.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/data/mostPopular.json`).then((res) => res.data.items);
  }
}
