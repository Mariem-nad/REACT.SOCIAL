import "./topbar.css";
import {Search,Person,Chat,} from '@mui/icons-material/Search';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="serarchbar">
          <search className="searchIcon"/>
          <input placeholder="Search for friend, post or video " className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
         <span className="topbarLink">Homepage</span>
         <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <person/>
          <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <chat/>
              <span className="topbarIconBadge">2</span>
            </div>
          </div>
          <img src="/assets/person/image.jpg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}

    


    
