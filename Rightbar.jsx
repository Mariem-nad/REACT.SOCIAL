import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="brithdayContainer">
          <img className="birthdayImg" src="assets/gift.png.webp" alt="" />
          <span className="birthdayText">  <b>  Pola Foster</b> and <b>3 other friends</b> hav a birthday today</span>
        </div>
        <img className="rightbarAd" src="assets/ad.png.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
