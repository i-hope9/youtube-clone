import { useContext } from "react";
import { createContext } from "react";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const youtube = new Youtube();
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