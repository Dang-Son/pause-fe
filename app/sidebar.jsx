function Sidebar() {
  return (
    <div className="right-side">
      <div className="NewTracks">
        <div className="fs-5">New tracks</div>
        <div className="section-nt scrollbar-nt" id="style-1">
          <ul>
            <li>
              <div className="avatar">
                <div className="avatar-nt">
                  <span class="position-absolute translate-middle badge border border-light rounded-circle bg-danger p-2">
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </div>
                <i></i>
              </div>
              <div className="title">Title</div>
            </li>
            <li>
              <div className="avatar">
                <div className="avatar-nt">
                  <span class="position-absolute translate-middle badge border border-light rounded-circle bg-danger p-2">
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </div>
                <i></i>
              </div>
              <div className="title">Title</div>
            </li>
            <li>
              <div className="avatar">
                <div className="avatar-nt"></div>
                <i></i>
              </div>
              <div className="title">Title</div>
            </li>
            <li>
              <div className="avatar">
                <div className="avatar-nt"></div>
                <i></i>
              </div>
              <div className="title">Title</div>
            </li>
            <li>
              <div className="avatar">
                <div className="avatar-nt"></div>
                <i></i>
              </div>
              <div className="title">Title</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="ArtistYouShouldFollow">
        <div className="fs-5">Artist you should follow</div>
        <div className="section-at scrollbar-at" id="style-1">
          <ul>
            <li>
              <div className="listArtist">
                <div className="avatar">
                  <div className="avatar-at"></div>
                  <i></i>
                </div>
                <div className="artist">
                  <div className="name">Name</div>
                  <div className="followed">Followed</div>
                </div>
                <button className="follow">Follow</button>
              </div>
            </li>
            <li>
              <div className="listArtist">
                <div className="avatar">
                  <div className="avatar-at"></div>
                  <i></i>
                </div>
                <div className="artist">
                  <div className="name">Name</div>
                  <div className="followed">Followed</div>
                </div>
                <button className="follow">Follow</button>
              </div>
            </li>
            <li>
              <div className="listArtist">
                <div className="avatar">
                  <div className="avatar-at"></div>
                  <i></i>
                </div>
                <div className="artist">
                  <div className="name">Name</div>
                  <div className="followed">Followed</div>
                </div>
                <button className="follow">Follow</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="like">
        <div className="fs-5">9999 likes</div>
        <div className="section-l scrollbar-l" id="style-1">
          <ul>
            <li>
              <div className="listSong">
                <div className="avatar">
                  <div className="avatar-l"></div>
                  <i></i>
                </div>
                <div className="song">
                  <div className="artist">Artist</div>
                  <div className="name">Name</div>
                  <div className="followed">Followed</div>
                </div>
              </div>
            </li>
            <li>
              <div className="listSong">
                <div className="avatar">
                  <div className="avatar-l"></div>
                  <i></i>
                </div>
                <div className="song">
                  <div className="artist">Artist</div>
                  <div className="name">Name</div>
                  <div className="followed">Followed</div>
                </div>
              </div>
            </li>
            <li>
              <div className="listSong">
                <div className="avatar">
                  <div className="avatar-l"></div>
                  <i></i>
                </div>
                <div className="song">
                  <div className="artist">Artist</div>
                  <div className="name">Name</div>
                  <div className="followed">Followed</div>
                </div>
              </div>
            </li>
            <li>
              <div className="listSong">
                <div className="avatar">
                  <div className="avatar-l"></div>
                  <i></i>
                </div>
                <div className="song">
                  <div className="artist">Artist</div>
                  <div className="name">Name</div>
                  <div className="followed">Followed</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
