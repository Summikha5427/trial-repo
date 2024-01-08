import { useState , useEffect } from "react";
import "./AddVideo.css";

const initailState = {
    time: "1 year ago",
    verified: true,
    title: '',
    views : ''
};

function AddVideo({addVideos,updateVideo,editableVideo}) {
  const [video, setVideo] = useState(initailState);

  function handleSubmit(e) {
    e.preventDefault(); //stop form default reloadings
    if(editableVideo){
      updateVideo(video);
    }else{
      addVideos(video);
    }
    setVideo(initailState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value }); 
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
    }
  },[editableVideo]);
  
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value = {video.title}
      ></input>
      <input
        type="text"
        name="views"
        placeholder="views"
        onChange={handleChange}
        value = {video.views}
      ></input>
      <button className="dynamic-button" onClick={handleSubmit}>
        {editableVideo?'Edit':'Add'} video
      </button>
    </form>
  );
}

export default AddVideo;
