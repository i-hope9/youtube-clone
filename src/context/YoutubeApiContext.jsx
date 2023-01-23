import { useContext } from "react";
import { createContext } from "react";
// import FakeYoutubeClient from "../api/fake-youtube-client";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtube-client";

export const YoutubeApiContext = createContext();
// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);
export function YoutubeApiProvider({ children }) {
  return (
    // 자식 컴포넌트와 공유하고 싶은 prop을 value로 공유한다.
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
