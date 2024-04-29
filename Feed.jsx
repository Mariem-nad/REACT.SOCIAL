import Share from "../share/Share" 
import Post from "../post/Post"
import "./feed.css"
import {Posts} from "../../dummyData"
export default function Feed() {
  return (
    <div className="feedWrapper">
      <Share/>
      {Posts.map(P=>(
       <Post key={P.id} post={P}/>
      ))}
      
      
      




    </div>
  )
}
