import "./post.css"
import {MoreVert} from "@mui/icons-material"
export default function Post({Post}) {
  console.log(Post)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLedt">
                <img className="postProfileImg" src="/assets/person/image.jpg" alt="" />
                <span className="postUsername">Safak Kocaoglu</span>
                <span className="postDate">{Post.date}</span>
            </div>
            <div className="postTopRight">
            
            </div>
    
        </div>
        <div className="postCenter">
            <span className="postText">{Post?.desc}</span>
            <img className="postImg" src="assets/post/1.image.jpg.webp" alt="" />
          
           
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png.webp" alt=""/>
            <img className="heartIcon" src="assets/heart.png.webp" alt=""/>
            <span className="postLikeCounter"> {Post.like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{Post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
