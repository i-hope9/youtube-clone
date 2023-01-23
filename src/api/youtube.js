export default class Youtube {
  constructor(apiClient) {
    // 외부로부터 주입 받은 client 
    this.apiClient = apiClient;
  }

  async search(q) {
    return q ? this.#searchByKeyword(q) : this.#mostPopular(); // 함수 앞에 #이 있으면 private function
  }

  async relatedTo(videoId) {
    return this.#relatedTo(videoId);
  }

  async channelImageUrl(channelId) {
    return this.#channelImageUrl(channelId);
  }

  async #searchByKeyword(q) {
    return this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: q,
      }})
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient.videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async #relatedTo(videoId) {
    return this.apiClient.search({
        params: {
          part: "snippet",
          relatedToVideoId: videoId,
          maxResults: 25,
          type: "video"
        }
    })
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({...item, id: item.id.videoId})));
  }

  async #channelImageUrl(channelId) {
    return this.apiClient.channels({
      params: {
        part: "snippet",
        id: channelId
      }
    })
    .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}