export default {
    template: `
    <div class="category">
            <ul>
                <li class="dropdown">
                    <a href="#MainContainer" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Movies</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Comedy</a></li>
                        <li><a href="#">Crime</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Histroical</a></li>
                    </ul>
                </li>                        
                <li><a href="#TVContent">TV</a></li>
                <li><a href="#MusicContent">Music</a></li>
                <li><form class="navbar-form navbar-left">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-info">Search</button>
                            </span>
                        </div>
                </form></li>
            </ul>

            <div id="myCarousel" class="carousel slide">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"><li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>   
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="../images/rokubanner1.jpg" alt="First slide">
                    </div>
                    <div class="item">
                        <img src="../images/rokubanner.jpg" alt="Second slide">
                    </div>
                    <div class="item">
                        <img src="../images/rokubanner2.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" role="button"data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button"data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>    
        </div>

        <div id="mainContainer">
            <div class="left">
                    <ul>
                        <li><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="https://www.roku.com/en-ca/products/roku-tv">Meet the newest addition to our family</a></li>
                        <li><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="https://www.roku.com/en-ca/mobile-app">Get the free Roku mobile app</a></li>
                        <li><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="https://www.roku.com/en-ca/products">Brilliant HD & 4K picture quality</a></li>
                        <li><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="https://www.roku.com/en-ca/whats-on">Endless entertainment choices.</a></li>
                        <li><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="https://www.roku.com/en-ca/products/streaming-stick-plus">Roku ® Streaming Stick™+</a></li>
                        <li class="aboutroku"><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="https://www.roku.com/en-ca/about/company">About Roku</a></li>
                        <li><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="#">Guardians of the Galaxy</a></li>
                        <li><i class="fas fa-arrow-alt-circle-right"></i>
                            <a href="#">Eddie the Eagle</a></li>
                    </ul>
                    <div class="video">
                        <video controls>
                                <source src="../video/avengers.mp4" type="video/mp4">
                        </video>
                        <p>The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill&rsquo;s true parentage.</p>
                    </div>

            </div>

            <div class="right row">
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><span style="margin-left: 80%;">&#x271A;</span> <span style="margin-left: 5%;">&#x2716;</span><img src="../images/video/arrival.jpg"  class="img-fluid" alt="video img">
                    <p>Arrival --- 	Denis Villeneuve</p></a>
                </div>

            </div>
            
            <div class="row bottom-movie">
                    <div class="videopconly">
                            <video controls width="800">
                                    <source src="../video/avengers.mp4" type="video/mp4">
                            </video>
                            <!-- <p>The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill&rsquo;s true parentage.</p> -->
                    </div>
                    <div class="col-xs-6 col-md-4 col-lg-2">
                        <a href="#" class="a"><span style="margin-left: 80%;">&#x271A;</span> <span style="margin-left: 5%;">&#x2716;</span><img src="../images/video/eddie.jpg"  class="img-fluid" alt="video img">
                        <p>Eddie the Eagle --- Dexter Fletcher</p></a>
                    </div>
    
                </div>
        </div>

        <div id="TVContent">
            <h2><span class="span1">TV</span> ------ <span class="span2">What You Like?</span></h2>
            <ul>
                <li><a href="https://www.roku.com/en-ca/products/finder/roku-tv/results"></a><button type="button" class="btn btn-info">TCL</button></a></li>
                <li><a href="https://www.roku.com/en-ca/products/finder/roku-tv/results"><button type="button" class="btn btn-info">SHARP</button></a></li>
                <li><a href="https://www.roku.com/en-ca/products/finder/roku-tv/results"><button type="button" class="btn btn-info">RCA</button></a></li>
                <li class="li3"><a href="https://www.roku.com/en-ca/products/finder/roku-tv/results"><button type="button" class="btn btn-info">Hisense</button></a></li>
                <li><a href="https://www.roku.com/en-ca/products/finder/roku-tv/results"><button type="button" class="btn btn-info">SANYO</button></a></li>
            </ul>
            <div class="row nextTv">
                <div class="col-xs-12 col-md-6 col-lg-8 left">
                    <a href="https://www.roku.com/en-ca/products/finder/roku-tv"><img src="../images/rokutv.png" alt="rokutv" class="img-fluid"></a>
                    <a href="https://www.roku.com/en-ca/products/roku-tv/ease-of-use"><img src="../images/rokutv1.png" alt="rokutv" class="img-fluid tblonly"></a>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 right">
                    <div class="col-xs-6 col-md-6 col-lg-6">
                        <a href="https://www.bestbuy.ca/en-ca/product/sharp-32-720p-hd-lcd-roku-os-smart-tv-lc-32lb601c-black-glossy-with-hairline/12661465.aspx?ref=affiliate&utm_content=8961723&utm_source=cj&acmp=Neuintel,+LLC&utm_term=12780142&cjevent=59f9ea74412511e9835e010a0a240612"><img src="../images/tv1.png" alt="TV"  class="img-fluid"></a>
                        <p>Sharp 32" 720p HD LED Roku OS Smart TV</p>

                    </div>
                    <div class="col-xs-6 col-md-6 col-lg-6">
                        <a href="https://www.visions.ca/catalogue/category/Details.aspx?productId=43013"><img src="../images/tv2.png" alt="TV"  class="img-fluid"></a>
                        <p>Hisense 50" R6107 Series 4K UHD Roku Smart TV</p>
                    </div>
                    <div class="col-xs-6 col-md-6 col-lg-6">
                        <a href="https://www.thesource.ca/en-ca/tvs--and--home-theatre/televisions/all-tvs/rca-rtr3261-32%E2%80%9D-roku-smart-tv/p/108075967?URL=https%3A%2F%2Fwww.thesource.ca%2Fen-ca%2Ftvs--and--home-theatre%2Ftelevisions%2Fall-tvs%2Frca-rtr3261-32%25E2%2580%259D-roku-smart-tv%2Fp%2F108075967&aff=cj&utm_campaign=cj_affiliate_sale&utm_medium=affiliate&utm_source=cj&utm_content=8961749&utm_term=11552516&cjevent=ca95a912412511e9835e010b0a240612"> <img src="../images/tv3.png" alt="TV"  class="img-fluid"></a>
                        <p>Sanyo, 32" Roku TV (FW32R19FC)</p>
                    </div>  
                    <div class="col-xs-6 col-md-6 col-lg-6 lastTV">
                       <a href="https://www.walmart.ca/en/ip/sanyo-32-roku-tv-fw32r19fc/6000198904582?cmpid=affiliate_rakuten_en_none_none&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliate_rakuten_en_none_none&utm_content=10&siteID=jo_pTdthTuc-6fIioSGdVuSpOIuOa91kcA&wmlspartner=jo%2FpTdthTuc"><img src="../images/tv4.png" alt="TV"  class="img-fluid"></a>
                       <p>RCA RTR3261 32” Roku Smart TV</p>
                    </div>               
                </div>
            </div>
            <h2 class="tvshow">TV Shows</h2>
            <div class="bottomtvshow row">
                
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><span style="margin-left: 80%;">&#x271A;</span> <span style="margin-left: 5%;">&#x2716;</span><img src="../images/tvshow.jpg"  class="img-fluid" alt="video img">
                    <p>Midsomer Murders</p></a>
                </div>

            </div>
        </div>

        <div id="MusicContent">
            <h2>Music</h2>
            <div class="musicChannel"><span style="margin-left: 80%;">
                <h3>Music Channel</h3>
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><img src="../images/music.png"  class="img-fluid" alt="video img">
                    <p>Spoyify</p></a>
                </div>
            
            </div>

            <div class="musics">
                <h3>Music</h3>
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <a href="#"><span style="margin-left: 80%;">&#x271A;</span> <span style="margin-left: 5%;">&#x2716;</span><img src="../images/audio/AWOL.jpg"  class="img-fluid" alt="video img">
                    <p>Awolnation</p></a>
                </div>

            </div>
            
        </div>

    </div>
    `,
}