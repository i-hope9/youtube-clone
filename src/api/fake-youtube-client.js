import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get(`/data/searchKey.json`);
  }

  async videos() {
    return axios.get(`/data/mostPopular.json`);
  }
}
