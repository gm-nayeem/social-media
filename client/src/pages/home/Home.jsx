import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
// import LeftBar from "../../components/leftBar/LeftBar"
// import RightBar from "../../components/rightBar/RightBar"
import "./home.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react"


const Home = () => {

  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
    </div>
  )

  // return (
  //   <div className="home">
  //     <div className="container">
  //       <LeftBar />
  //       <div className="feed">
  //         <Stories />
  //         <Share />
  //         <Posts />
  //       </div>
  //       <RightBar />
  //     </div>
  //   </div>
  // )
  
}

export default Home;