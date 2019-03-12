export default {
    template: `
    <div class="category">
            <ul>
                <li class="dropdown">
                    <a href="#MainContainer1" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Movies</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Comedy</a></li>
                        <li><a href="#">Crime</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Histroical</a></li>
                    </ul>
                </li>                        
                <li><a href="#TVContent1">TV</a></li>
                <li><a href="#MusicContent1">Music</a></li>
                <li><form class="navbar-form navbar-left">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-info">Search</button>
                            </span>
                        </div>
                </form></li>
            </ul> 
        </div>

        <div id="mainContainer1">
            <h2>Movies  ---- <img src="../images/skidmark.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/smoove-move.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/turbo.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/whiplash.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/white-shadow.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/burn.png" alt="womiu" class="img-fluid" width="30"></h2>
            <div class="left">
                   <img src="../images/turbo.png" alt="kids" class="img-fluid">
                    <div class="video">
                        <video controls>
                                <source src="../video/avengers.mp4" type="video/mp4">
                        </video>
                        <p>The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill&rsquo;s true parentage.</p>
                    </div>

            </div>

            <div class="right row">
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><img src="../images/video/arrival.jpg"  class="img-fluid" alt="video img">
                    <p>Arrival --- James Gunn</p></a>
                </div>
            </div>
            
            <div class="row bottom-movie">
                <div class="left">
                    <div class="col-xs-6 col-md-4 col-lg-2">
                        <a href="#"><img src="../images/video/arrival.jpg"  class="img-fluid" alt="video img">
                        <p>Arrival --- James Gunn</p></a>
                    </div>
                </div>
                <div class="right">
                    <img src="../images/burn.png" alt="kids" class="img-fluid">
                    <img src="../images/skidmark.png" alt="kids" class="img-fluid tabletonly">
                    <img src="../images/white-shadow.png" alt="kids" class="img-fluid tabletonly">
                </div>
            </div>
        </div>

        <div id="TVContent1">
            <h2 class="tvshow">TV Shows  ---- <img src="../images/skidmark.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/smoove-move.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/turbo.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/whiplash.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/white-shadow.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/burn.png" alt="womiu" class="img-fluid" width="30"></h2>
            <div class="bottomtvshow row">
                
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><img src="../images/tvshow.jpg"  class="img-fluid" alt="video img">
                    <p>Midsomer Murders</p></a>
                </div>

                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><img src="../images/tvshow1.jpg"  class="img-fluid" alt="video img">
                    <p>Arrival --- James Gunn</p></a>
                </div>

            </div>
        </div>

        <div id="MusicContent1">
            <h2>Music  ---- <img src="../images/skidmark.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/smoove-move.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/turbo.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/whiplash.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/white-shadow.png" alt="womiu" class="img-fluid" width="30">
                <img src="../images/burn.png" alt="womiu" class="img-fluid" width="30"></h2>
            <div class="musicChannel">
                <h3>Music Channel  ---- <img src="../images/skidmark.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/smoove-move.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/turbo.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/whiplash.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/white-shadow.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/burn.png" alt="womiu" class="img-fluid" width="30"></h3>
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><img src="../images/music.png"  class="img-fluid" alt="video img">
                    <p>Midsomer Murders</p></a>
                </div>
                
            </div>

            <div class="musics">
                <h3>Music  ---- <img src="../images/skidmark.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/smoove-move.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/turbo.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/whiplash.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/white-shadow.png" alt="womiu" class="img-fluid" width="30">
                    <img src="../images/burn.png" alt="womiu" class="img-fluid" width="30"></h3>
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><img src="../images/audio/AWOL.jpg"  class="img-fluid" alt="video img">
                    <p>Midsomer Murders</p></a>
                </div>       
            </div>
            
        </div>`,
}