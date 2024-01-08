import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({viideos,deleteVideo,editVideo}){
  return(
    <>
    {viideos.map((video) => (
      <Video
        key={video.id}
        title={video.title}
        views={video.views}
        time={video.time}
        channel={video.channel}
        verified={video.verified}
        id={video.id}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      >
        <PlayButton
          onPlay={() => console.log("Playying..", video.title)}
          onPause={() => console.log("Pausing..", video.title)}
        >
          {video.title}
        </PlayButton>
      </Video>
    ))}
    </>
  );
};

export default VideoList;