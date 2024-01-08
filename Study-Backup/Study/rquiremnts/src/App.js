import { useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  console.log("App render");
  const [videoss, setVideo] = useState(videoDB);
  const [editableVideo,setEditableVideo] = useState(null);
  
  function addVideos(video) {
    setVideo([
      ...videoss,
     {...video,id:videoss.length+1}
    ]);
  }

  function deleteVideo(id){
    setVideo(
    videoss.filter(video=>video.id!==id))
    console.log(id);
  }

  function editVideo(id){
    setEditableVideo(videoss.find(videoss=>videoss.id===id));
  }

  function updateVideo(video){
    const index = videoss.findIndex(v=>v.id===video.id);
    const newVideos = [...videoss]
    newVideos.splice(index,1,video);
    setVideo(newVideos);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList viideos = {videoss} deleteVideo={deleteVideo} editVideo={editVideo}  ></VideoList>
    </div>
  );
}
export default App;
