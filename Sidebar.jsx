import "./sidebar.css"
import {RssFeed,Group,Help,Work, Event,School,Chat} from "@mui/icons-material";

export default function Siedbar() {
  return (
   <div className="sidebar">
    <div className="sidebarWrappe">
      <ul className="sidebarList">
        <li className="sidebarListItem">
        
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          
          <span className="sidebarListItemText">Group</span>
        </li>
        <li className="sidebarListItem">
          <span className="sidebarListItemText">Bookmark</span>
        </li>
        <li className="sidebarListItem">
          <span className="sidebarListItemText">HelpOutine</span>
        </li>
        <li className="sidebarListItem">
          <span className="sidebarListItemText">WorkOutline</span>
        </li>
        <li className="sidebarListItem">
          <span className="sidebarListItemText">Event</span>
        </li>
        
        <li className="sidebarListItem">
          <span className="sidebarListItemText">Video</span>
        </li>
        <li className="sidebarListItem">
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
          <span className="sidebarListItemText">courses</span>
        </li>
      </ul>
      <boutton className="sidebarButton">Show More</boutton>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg.jpg" alt=""/>
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg.jpg" alt=""/>
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg.jpg" alt=""/>
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg.jpg" alt=""/>
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg.jpg" alt=""/>
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg.jpg" alt=""/>
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg.jpg" alt=""/>
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
      </ul>
    </div>
   </div>
  )
}
