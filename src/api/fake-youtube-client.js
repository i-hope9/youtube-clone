import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get(`/data/related.json`)
      : axios.get(`/data/searchKey.json`);
  }

  async videos() {
    return axios.get(`/data/mostPopular.json`);
  }

  async channels() {
    return axios.get(`/data/channel.json`);
  }
}
