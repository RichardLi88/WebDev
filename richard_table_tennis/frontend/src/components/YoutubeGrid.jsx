import { Flex, SimpleGrid, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getYoutubeVideos } from "../utility/fetchYoutube";
import YoutubeCard from "./YoutubeCard";
import SkeletonCard from "./SkeletonCard";

function YoutubeGrid() {
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function getVideos() {
      const result = await getYoutubeVideos("Table tennis");
      const filteredVideos = result.map((video) => {
        return {
          channel: video.snippet.channelTitle,
          desc: video.snippet.description,
          thumbnail: video.snippet.thumbnails.high.url,
          title: video.snippet.title,
          videoId: video.id.videoId,
        };
      });
      setVideos(filteredVideos);
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }
    getVideos();
  }, []);
  return (
    <Flex direction="column" gap={20} p={20} align="center" w="100%">
      <Title>Other videos to watch!</Title>
      <SimpleGrid
        cols={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing="sm"
        w={loaded ? "" : "90%"}
      >
        {loaded &&
          videos.map((video) => {
            return <YoutubeCard key={video.videoId} data={video} />;
          })}
        {!loaded &&
          Array.from({ length: 12 }).map((_, index) => {
            return <SkeletonCard key={index} buttonText="Watch now" />;
          })}
      </SimpleGrid>
    </Flex>
  );
}

export default YoutubeGrid;
