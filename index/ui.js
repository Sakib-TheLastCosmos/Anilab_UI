const DOM = {
   mode: document.querySelector(".mode"),
   modeIcon: document.querySelector(".mode svg use"),
   popupCont: document.querySelector(".popup__container"),
   postPopupCont: document.querySelector(".post_popup__container"),
   postPopupBox: document.querySelector(".post_big__cont"),
   createPostClick: document.querySelectorAll(".create_post_click"),
   addReviewPopup1: document.querySelector(".add-review-popup__box-1"),
   addReviewPopup1Animes: document.querySelectorAll(".add-review-popup__box-1 ul li"),
   addReviewPopup2: document.querySelector(".add-review-popup__box-2"),

   middleBottomCont: document.querySelector(".middle__bottom"),
   friendsBtn: document.querySelector("#friends__btn"),
   navBtn: document.querySelectorAll("nav ul li"),

   mainLeft: document.querySelector(".main__left"),
}

const DOMStrings = {
   lightModeSVGHref: "../icons/icons.svg#icon__sun",
   darkModeSVGHref: "../icons/icons.svg#icon__moon-stars-fill"
}


const getDOM = () => {
   return {
      viewFullPostBtn: document.querySelectorAll(".view-full-post-btn"),
      animesContAnimesLi: document.querySelectorAll(".animes-1 ul li"),
      animesCont1: document.querySelector(".animes-1"),
      animesCont2: document.querySelector(".animes-2")   
   }
}


const markupPage = {
   index:
   `<div class="active_panel">
      <ul>
         <li>
            <figure class="update">
               <img src="../img/profile_img.jpg" alt="">
            </figure>

            <p>Sakib</p>

         </li>

         <li>
            <figure class="update">
               <img src="../img/profile_img.jpg" alt="">
            </figure>

            <p>Sakib</p>
         </li>

         <li>
            <figure>
               <img src="../img/profile_img.jpg" alt="">
            </figure>

            <p>Sakib</p>
         </li>

         <li>
            <figure>
               <img src="../img/profile_img.jpg" alt="">
            </figure>

            <p>Sakib</p>
         </li>

         <li>
            <figure class="update">
               <img src="../img/profile_img.jpg" alt="">
            </figure>

            <p>Sakib</p>
         </li>

         <li>
            <figure>
               <img src="../img/profile_img.jpg" alt="">
            </figure>

            <p>Sakib</p>
         </li>
      </ul>
   </div>


   <div class="create_post_panel">
      <div class="create_post__cont">
         <figure>
            <img src="../img/profile_img (2).jpg" alt="">
         </figure>

         <input class="create_post_input create_post_click" type="text" name="" id="" placeholder="Add a review...">

         <button class="create_post_click">
            <svg>
               <use href="../icons/icons.svg#icon__send"></use>
            </svg>
         </button>
      </div>
   </div>


   <div class="posts">
      <ul>
         <li class="post" id="post-1">
            <div class="post__left">
               <figure>
                  <img src="../img/anime_cover (2).jpg" alt="">
               </figure>
            </div>

            
            <div class="post__right">
               <header>
                  <div class="left">
                     <div class="left">
                        <p>July</p>
                        <h2>28</h2>
                     </div>

                     <div class="right">
                        <h2>Deathnote</h2>
                        <p>I am Kira</p>
                     </div>

                     <div class="rating">9/10</div>
                  </div>
                  
                  <div class="right dropdown_cont">
                     <button>
                        <svg>
                           <use href="../icons/icons.svg#icon__three-dots-vertical"></use>
                        </svg>   
                     </button>

                     <div class="post_options_dropdown dropdown">
                        <ul>
                           <li>
                              <svg>
                                 <use href="../icons/icons.svg#icon__bookmark"></use>
                              </svg>
      
                              <a href="">Save review</a>
                           </li>
                        
                           <li>
                              <svg>
                                 <use href="../icons/icons.svg#icon__three-dots-horizontal"></use>
                              </svg>
      
                              <a href="">More reviews</a>
                           </li>

                           <li> 
                              <svg>
                                 <use href="../icons/icons.svg#icon__report"></use>
                              </svg>
      
                              <a href="">Report this post</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </header>


               <main class="view-full-post-btn">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, molestiae. Distinctio magnam natus aspernatur officia cum? <button class="see-more__btn view-full-post-btn" data-id="post-1">See more...</button></p>
               </main>

               <footer>
                  <div class="footer_top">
                     <div class="anime_info">
                        <p>Total Episodes: 37</p>
                        <p>Thriller, Mystery, Psycholgical</p>   
                     </div>

                     <div class="author">
                        <div class="author__left">
                           <figure>
                              <img src="../img/profile_img.jpg" alt="">
                           </figure>
                        </div>

                        <div class="author__right">
                           <h4>Sakib UL Hasan</h4>
                           <p>Watched 30+ animes</p>
                        </div>
                     </div>
                  </div>

                  <div class="footer__bottom">
                     <div class="left">
                        <button>
                           <svg>
                              <use href="../icons/icons.svg#icon__bookmark"></use>
                           </svg>

                           <span>Save to collection</span>
                        </button>
                     </div>

                     <div class="right">
                        <button>
                           <svg>
                              <use href="../icons/icons.svg#icon__heart"></use>
                           </svg>

                           <span><strong>4</strong></span>
                        </button> 
                     </div>
                  </div>
               </footer>
            </div>
         </li>


         <li class="post">
            <div class="post__left">
               <figure>
                  <img src="../img/anime_cover (2).jpg" alt="">
               </figure>
            </div>

            
            <div class="post__right">
               <header>
                  <div class="left">
                     <div class="left">
                        <p>July</p>
                        <h2>28</h2>
                     </div>

                     <div class="right">
                        <h2>Deathnote</h2>
                        <p>I am Kira</p>
                     </div>

                     <div class="rating">9/10</div>
                  </div>
                  
                  <div class="right">
                     <button>
                        <svg>
                           <use href="../icons/icons.svg#icon__three-dots-vertical"></use>
                        </svg>   
                     </button>
                  </div>
               </header>


               <main>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, molestiae. Distinctio magnam natus aspernatur officia cum? <button class="see-more__btn">See more...</button></p>

               </main>

               <footer>
                  <div class="footer_top">
                     <div class="anime_info">
                        <p>Total Episodes: 37</p>
                        <p>Thriller, Mystery, Psycholgical</p>   
                     </div>

                     <div class="author">
                        <div class="author__left">
                           <figure>
                              <img src="../img/profile_img.jpg" alt="">
                           </figure>
                        </div>

                        <div class="author__right">
                           <h4>Sakib UL Hasan</h4>
                           <p>Watched <strong>30+</strong> animes</p>
                        </div>
                     </div>
                  </div>

                  <div class="footer__bottom">
                     <div class="left">
                        <button>
                           <svg>
                              <use href="../icons/icons.svg#icon__bookmark"></use>
                           </svg>

                           <span>Save to collection</span>
                        </button>
                     </div>

                     <div class="right">
                        <button>
                           <svg>
                              <use href="../icons/icons.svg#icon__heart"></use>
                           </svg>

                           <span><strong>4</strong></span>
                        </button> 
                     </div>
                  </div>
               </footer>
            </div>
         </li>
      </ul>
   </div>`,


   friends: 
   `<div class="friends__cont">
      <div class="top">
         <input type="text" placeholder="Search for someone...">
         <button>
            <svg>
               <use href="../icons/icons.svg#icon__search"></use>
            </svg>

            Search
         </button>
      </div>

      <div class="bottom">
         <ul>
            <li>
               <div class="left">
                  <figure>
                     <img src="../img/profile_img.jpg" alt="">
                  </figure>

                  <div>
                     <h3>Sakib UL Hasan</h3>
                     <p>Watched over 30 animes</p>
                  </div>
               </div>

               <div class="right">
                  <svg>
                     <use href="../icons/icons.svg#icon__three-dots-vertical"></use>
                  </svg>
               </div>
            </li>

            <li>
               <div class="left">
                  <figure>
                     <img src="../img/profile_img.jpg" alt="">
                  </figure>

                  <div>
                     <h3>Sakib UL Hasan</h3>
                     <p>Watched over 30 animes</p>
                  </div>
               </div>

               <div class="right">
                  <svg>
                     <use href="../icons/icons.svg#icon__three-dots-vertical"></use>
                  </svg>
               </div>
            </li>

            <li>
               <div class="left">
                  <figure>
                     <img src="../img/profile_img.jpg" alt="">
                  </figure>

                  <div>
                     <h3>Sakib UL Hasan</h3>
                     <p>Watched over 30 animes</p>
                  </div>
               </div> 

               <div class="right">
                  <svg>
                     <use href="../icons/icons.svg#icon__three-dots-vertical"></use>
                  </svg>
               </div>
            </li>
         </ul>
      </div>
   </div>`,


   animes: 
   `<div class="add-review-popup__box-1 animes__cont">
      <input type="text" placeholder="Search for an anime">
      <main class="animes-1">    
         <ul>
            <li>
               <div class="top">
                  <figure>
                     <img src="../img/anime_cover.jpg" alt="">
                  </figure>
               </div>

               <div class="bottom">
                  <h4>Code Geass</h4>
                  <p>2012</p>
               </div>
            </li>

            <li>
               <div class="top">
                  <figure>
                     <img src="../img/anime_cover.jpg" alt="">
                  </figure>
               </div>

               <div class="bottom">
                  <h4>Code Geass</h4>
                  <p>2012</p>
               </div>
            </li>

            <li>
               <div class="top">
                  <figure>
                     <img src="../img/anime_cover.jpg" alt="">
                  </figure>
               </div>

               <div class="bottom">
                  <h4>Code Geass</h4>
                  <p>2012</p>
               </div>
            </li>
         </ul>
      </main>

      <main class="animes-2">    
         <div class="anime">
            <header>
               <div class="left">
                  <figure>
                     <img src="../img/anime_cover.jpg" alt="">
                  </figure>
               </div>

               <div class="middle">
                  <div class="top">
                     <h3>Demon Slayer: Kimetsu No Yaiba</h3>
                  </div>

                  <div class="bottom">
                     <div class="rating">
                        <div class="left">
                           <svg class="icon__star">
                              <use href="../icons/icons.svg#icon__star"></use>
                           </svg>
                           <span>9/10</span>
                           <span>(Imdb)</span>
                        </div>
                        
                        <div class="right">
                           <svg class="icon__star">
                              <use href="../icons/icons.svg#icon__star"></use>
                           </svg>
                           <span>9/10</span>
                           <span>(AniLab)</span>
                        </div>
                     </div>

                     <div class="others">
                        <p>26 eps</p>
                        <p>23 min</p>   
                     </div>
                  </div>
               </div>

               <div class="right">
                  <ul>
                     <li>
                        <span>Synonyms:</span>
                        <span>Blade of Demon Destruction</span>
                     </li>

                     <li>
                        <span>Status:</span>
                        <span>Finished</span>
                     </li>

                     <li class="genre__ul">
                        <span>Genre:</span>
                        <ul class="genres">
                           <li>Action</li>
                           <li>Demons</li>
                           <li>Historical</li>
                           <li>Shounen</li>
                           <li>Supernatural</li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </header>


            <main>
               <div class="blue-line"></div>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores quam. Architecto voluptatibus reprehenderit culpa modi, unde ad cupiditate molestiae perspiciatis delectus dolorem totam qui praesentium placeat maiores distinctio ab? <button class="see-more__btn view-full-post-btn"">See more...</button></p>
            </main>


            <footer>
               <header>
                  <h3>Reviews</h3>
               </header>

               <main>
                  <ul>
                     <li class="review">
                        <div class="top">
                           <figure>
                              <img src="../img/anime_cover.jpg" alt="">
                           </figure>

                           <div class="rating">
                              <span>9/10</span>

                              <svg>
                                 <use href="../icons/icons.svg#icon__star"></use>
                              </svg>
                           </div>
                        </div>
         
                        <div class="bottom">
                           <div class="left">
                              <figure>
                                 <img src="../img/profile_img.jpg" alt="">
                              </figure>
                           </div>

                           <div class="right">
                              <h3>Sakib UL Hasan</h3>
                              <p>Watched 30+ animes</p>
                           </div>
                        </div>
                     </li>
         
                     <li class="review">
                        <div class="top">
                           <figure>
                              <img src="../img/anime_cover.jpg" alt="">
                           </figure>

                           <div class="rating">
                              <span>9/10</span>

                              <svg>
                                 <use href="../icons/icons.svg#icon__star"></use>
                              </svg>
                           </div>
                        </div>
         
                        <div class="bottom">
                           <div class="left">
                              <figure>
                                 <img src="../img/profile_img.jpg" alt="">
                              </figure>
                           </div>

                           <div class="right">
                              <h3>Sakib UL Hasan</h3>
                              <p>Watched 30+ animes</p>
                           </div>
                        </div>
                     </li>
         
                     <li class="review">
                        <div class="top">
                           <figure>
                              <img src="../img/anime_cover.jpg" alt="">
                           </figure>

                           <div class="rating">
                              <span>9/10</span>

                              <svg>
                                 <use href="../icons/icons.svg#icon__star"></use>
                              </svg>
                           </div>
                        </div>
         
                        <div class="bottom">
                           <div class="left">
                              <figure>
                                 <img src="../img/profile_img.jpg" alt="">
                              </figure>
                           </div>

                           <div class="right">
                              <h3>Sakib UL Hasan</h3>
                              <p>Watched 30+ animes</p>
                           </div>
                        </div>
                     </li>
                  </ul>
               </main>
            </footer>
         </div>
      </main>
   </div>
   `,


   saved:
   `<div class="saved__cont">
      <div class="top">
         <input type="text" placeholder="Search with an Anime keyword">
      </div>

      <div class="bottom">
         <div class="today-review">
            <h3>Today</h3>
            <ul>
               <li class="review">
                  <div class="top">
                     <figure>
                        <img src="../img/anime_cover.jpg" alt="">
                     </figure>

                     <div class="rating">
                        <span>9/10</span>

                        <svg>
                           <use href="../icons/icons.svg#icon__star"></use>
                        </svg>
                     </div>
                  </div>

                  <div class="bottom">
                     <div class="left">
                        <figure>
                           <img src="../img/profile_img.jpg" alt="">
                        </figure>
                     </div>

                     <div class="right">
                        <h3>Sakib UL Hasan</h3>
                        <p>Watched 30+ animes</p>
                     </div>
                  </div>
               </li>
            </ul>   
         </div>
         
         <div class="this-month-review">
            <h3>This month</h3>
            <ul>
               <li class="review">
                  <div class="top">
                     <figure>
                        <img src="../img/anime_cover.jpg" alt="">
                     </figure>

                     <div class="rating">
                        <span>9/10</span>

                        <svg>
                           <use href="../icons/icons.svg#icon__star"></use>
                        </svg>
                     </div>
                  </div>

                  <div class="bottom">
                     <div class="left">
                        <figure>
                           <img src="../img/profile_img.jpg" alt="">
                        </figure>
                     </div>

                     <div class="right">
                        <h3>Sakib UL Hasan</h3>
                        <p>Watched 30+ animes</p>
                     </div>
                  </div>
               </li>

               <li class="review">
                  <div class="top">
                     <figure>
                        <img src="../img/anime_cover.jpg" alt="">
                     </figure>

                     <div class="rating">
                        <span>9/10</span>

                        <svg>
                           <use href="../icons/icons.svg#icon__star"></use>
                        </svg>
                     </div>
                  </div>

                  <div class="bottom">
                     <div class="left">
                        <figure>
                           <img src="../img/profile_img.jpg" alt="">
                        </figure>
                     </div>

                     <div class="right">
                        <h3>Sakib UL Hasan</h3>
                        <p>Watched 30+ animes</p>
                     </div>
                  </div>
               </li>
            </ul>   
         </div>

         <div class="last-year-review">
            <h3>Earlier this year</h3>
            <ul>
               <li class="review">
                  <div class="top">
                     <figure>
                        <img src="../img/anime_cover.jpg" alt="">
                     </figure>

                     <div class="rating">
                        <span>9/10</span>

                        <svg>
                           <use href="../icons/icons.svg#icon__star"></use>
                        </svg>
                     </div>
                  </div>

                  <div class="bottom">
                     <div class="left">
                        <figure>
                           <img src="../img/profile_img.jpg" alt="">
                        </figure>
                     </div>

                     <div class="right">
                        <h3>Sakib UL Hasan</h3>
                        <p>Watched 30+ animes</p>
                     </div>
                  </div>
               </li>

               <li class="review">
                  <div class="top">
                     <figure>
                        <img src="../img/anime_cover.jpg" alt="">
                     </figure>

                     <div class="rating">
                        <span>9/10</span>

                        <svg>
                           <use href="../icons/icons.svg#icon__star"></use>
                        </svg>
                     </div>
                  </div>

                  <div class="bottom">
                     <div class="left">
                        <figure>
                           <img src="../img/profile_img.jpg" alt="">
                        </figure>
                     </div>

                     <div class="right">
                        <h3>Sakib UL Hasan</h3>
                        <p>Watched 30+ animes</p>
                     </div>
                  </div>
               </li>

               <li class="review">
                  <div class="top">
                     <figure>
                        <img src="../img/anime_cover.jpg" alt="">
                     </figure>

                     <div class="rating">
                        <span>9/10</span>

                        <svg>
                           <use href="../icons/icons.svg#icon__star"></use>
                        </svg>
                     </div>
                  </div>

                  
                  

                  <div class="bottom">
                     <div class="left">
                        <figure>
                           <img src="../img/profile_img.jpg" alt="">
                        </figure>
                     </div>

                     <div class="right">
                        <h3>Sakib UL Hasan</h3>
                        <p>Watched 30+ animes</p>
                     </div>
                  </div>
               </li>
            </ul>   
         </div>
      </div>
   </div>`,


   about: 
   `<div class="about__cont">
      <header>
         <figure>
            <img src="../icons/logo_full.png" alt="">
         </figure>
      </header>

      <main>
         <div class="blue-line"></div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, assumenda. Explicabo nostrum labore, hic eveniet porro voluptate odit rem, est suscipit architecto ea sint assumenda! Eaque maxime magni veniam repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod corrupti porro, odit illo praesentium inventore repudiandae facilis earum reiciendis ipsa natus cumque alias aperiam placeat similique. Quo, incidunt! Ipsam!</p>
      </main>

      <footer>
         <div class="top">
            <table>
               <tr>
                  <td>Version</td>
                  <td>:</td>
                  <td> 2.0</td>
               </tr>

               <tr>
                  <td>For anything about the site</td>
                  <td>:</td>
                  <td> anilab.developer.sakib@gmail.com</td>
               </tr>
            </table>
         </div>

         <div class="middle">
            <div class="profile">
               <div class="left">
                  <figure>
                     <img src="../img/profile_img.jpg" alt="">
                  </figure>
               </div>

               <div class="right">
                  <h3>Sakib UL Hasan</h3>
                  <p>Admin</p>
               </div>
            </div>
         </div>

         <div class="bottom">
            <h3>Contact</h3>

            <div class="links__cont">
               <ul class="links">
                  <li>
                     <svg>
                        <use href="../icons/icons.svg#icon__facebook"></use>
                     </svg>
                  </li>

                  <li>
                     <svg>
                        <use href="../icons/icons.svg#icon__twitter"></use>
                     </svg>
                  </li>

                  <li>
                     <svg>
                        <use href="../icons/icons.svg#icon__github"></use>
                     </svg>
                  </li>

                  <li>
                     <svg>
                        <use href="../icons/icons.svg#icon__discord"></use>
                     </svg>
                  </li>

                  <li>
                     <svg>
                        <use href="../icons/icons.svg#icon__linkedin"></use>
                     </svg>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   </div>`,


   profile:
   `<div class="profile__cont">
      <div class="profile_cover">
         <div class="cover_img"></div>
      </div>


      <div class="profile-bottom__cont">
         <div class="profile__bottom">
            <div class="profile_bottom__top">
               <div class="profile">
                  <figure class="profile_img">
                     <img src="../img/profile_img.jpg" alt="">
                  </figure>

                  <main>
                     <h2>Sakib UL Hasan</h2>
                     <p>There is no need for a bio</p>
                  </main>
               </div>

               <div class="profile_edit">
                  <button>
                     <svg>
                        <use href="../icons/icons.svg#icon__edit"></use>
                     </svg>
                     <span>Edit Profile</span>
                  </button>
               </div>
            </div>
         </div>


         <div class="profile__info">
            <div class="left">
               <!-- Date of birth, favorite animes, gmail, total animes watched, lives in, dream character, sub or dub, manga? -->
               <div class="left__conts">
                  <div>
                     <span>Lives in</span>
                     <span>Chattogram, Bangladesh</span>
                  </div>
                  <div>
                     <span>Born in</span>
                     <span>27 October, 2006</span>
                  </div>
               </div>

               <div class="left__conts">
                  <div>
                     <span>Watched</span>
                     <span>30+ animes</span>
                  </div>
                  <div>
                     <span>Sub or Dub?</span> 
                     <span>Sub makes no sense, the voice is pure Hebrew</span>
                  </div>
                  <div>
                     <span>Manga?</span>
                     <span>I am not contended with mere words</span>
                  </div>
               </div>

               <div class="left__conts">
                  <div>
                     <span>Animes top picks</span>
                     <div>
                        <ul class="top-picks">
                           <li>Steins Gate</li>
                           <li>Deathnote</li>
                           <li>Code Geass</li>
                        </ul>
                     </div>
                  </div>

                  <div>
                     <span>Dream Character</span>
                     <span>Okabe Rintarou</span>
                  </div>
               </div>

               <div class="left__conts">
                  <div>
                     <span>Contact</span>
                     <span>sakibulhasan159@gmail.com</span>   
                  </div>
               </div>
            </div>


            <div class="right">
               <div class="posts">
                  <ul>
                     <li class="post" id="post-1">
                        <div class="post__left">
                           <figure>
                              <img src="../img/anime_cover (2).jpg" alt="">
                           </figure>
                        </div>
            
                        
                        <div class="post__right">
                           <header>
                              <div class="left">
                                 <div class="left">
                                    <p>July</p>
                                    <h2>28</h2>
                                 </div>
            
                                 <div class="right">
                                    <h2>Deathnote</h2>
                                    <p>I am Kira</p>
                                 </div>
            
                                 <div class="rating">9/10</div>
                              </div>
                              
                              <div class="right dropdown_cont">
                                 <button>
                                    <svg>
                                       <use href="../icons/icons.svg#icon__three-dots-vertical"></use>
                                    </svg>   
                                 </button>
            
                                 <div class="post_options_dropdown dropdown">
                                    <ul>
                                       <li>
                                          <svg>
                                             <use href="../icons/icons.svg#icon__bookmark"></use>
                                          </svg>
                  
                                          <a href="">Save review</a>
                                       </li>
                                    
                                       <li>
                                          <svg>
                                             <use href="../icons/icons.svg#icon__three-dots-horizontal"></use>
                                          </svg>
                  
                                          <a href="">More reviews</a>
                                       </li>
            
                                       <li> 
                                          <svg>
                                             <use href="../icons/icons.svg#icon__report"></use>
                                          </svg>
                  
                                          <a href="">Report this post</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </header>
            
            
                           <main class="view-full-post-btn">
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, molestiae. Distinctio magnam natus aspernatur officia cum? <button class="see-more__btn view-full-post-btn" data-id="post-1">See more...</button></p>
                           </main>
            
                           <footer>
                              <div class="footer_top">
                                 <div class="anime_info">
                                    <p>Total Episodes: 37</p>
                                    <p>Thriller, Mystery, Psycholgical</p>   
                                 </div>
            
                                 <div class="author">
                                    <div class="author__left">
                                       <figure>
                                          <img src="../img/profile_img.jpg" alt="">
                                       </figure>
                                    </div>
            
                                    <div class="author__right">
                                       <h4>Sakib UL Hasan</h4>
                                       <p>Watched 30+ animes</p>
                                    </div>
                                 </div>
                              </div>
            
                              <div class="footer__bottom">
                                 <div class="left">
                                    <button>
                                       <svg>
                                          <use href="../icons/icons.svg#icon__bookmark"></use>
                                       </svg>
            
                                       <span>Save to collection</span>
                                    </button>
                                 </div>
            
                                 <div class="right">
                                    <button>
                                       <svg>
                                          <use href="../icons/icons.svg#icon__heart"></use>
                                       </svg>
            
                                       <span><strong>4</strong></span>
                                    </button> 
                                 </div>
                              </div>
                           </footer>
                        </div>
                     </li>
            
            
                     <li class="post">
                        <div class="post__left">
                           <figure>
                              <img src="../img/anime_cover (2).jpg" alt="">
                           </figure>
                        </div>
            
                        
                        <div class="post__right">
                           <header>
                              <div class="left">
                                 <div class="left">
                                    <p>July</p>
                                    <h2>28</h2>
                                 </div>
            
                                 <div class="right">
                                    <h2>Deathnote</h2>
                                    <p>I am Kira</p>
                                 </div>
            
                                 <div class="rating">9/10</div>
                              </div>
                              
                              <div class="right">
                                 <button>
                                    <svg>
                                       <use href="../icons/icons.svg#icon__three-dots-vertical"></use>
                                    </svg>   
                                 </button>
                              </div>
                           </header>
            
            
                           <main>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, molestiae. Distinctio magnam natus aspernatur officia cum? <button class="see-more__btn">See more...</button></p>
            
                           </main>
            
                           <footer>
                              <div class="footer_top">
                                 <div class="anime_info">
                                    <p>Total Episodes: 37</p>
                                    <p>Thriller, Mystery, Psycholgical</p>   
                                 </div>
            
                                 <div class="author">
                                    <div class="author__left">
                                       <figure>
                                          <img src="../img/profile_img.jpg" alt="">
                                       </figure>
                                    </div>
            
                                    <div class="author__right">
                                       <h4>Sakib UL Hasan</h4>
                                       <p>Watched <strong>30+</strong> animes</p>
                                    </div>
                                 </div>
                              </div>
            
                              <div class="footer__bottom">
                                 <div class="left">
                                    <button>
                                       <svg>
                                          <use href="../icons/icons.svg#icon__bookmark"></use>
                                       </svg>
            
                                       <span>Save to collection</span>
                                    </button>
                                 </div>
            
                                 <div class="right">
                                    <button>
                                       <svg>
                                          <use href="../icons/icons.svg#icon__heart"></use>
                                       </svg>
            
                                       <span><strong>4</strong></span>
                                    </button> 
                                 </div>
                              </div>
                           </footer>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>`,


   login:
   `<div class="login__cont">
      <div class="top_svg_cont">
         <div class="top_svg"></div>
      </div>

      <div class="bottom_svg_cont">
         <div class="bottom_svg"></div>
      </div>



      <div class="login__cont_popup-0 login__cont_popups">
         <div class="middle">
            <div class="left">
               <figure>
                  <img src="../icons/logo_full.png" alt="">
               </figure>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum labore vel nesciunt provident, non exercitationem soluta sunt debitis velit ea error libero consectetur illum at doloribus rerum ab similique.</p>
            </div>


            <div class="right">
               <div class="top">
                  <h3>Welcome aboard!</h3>
                  <p>Please sign in first to continue...</p>   
               </div>

               <button type="button" class="login-with-google-btn" >
                  Sign in with Google
               </button>

               <div class="bottom">
                  <p>Let's venture in the world of animes!</p>
               </div>
            </div>
         </div>

      </div>



      <div class="login__cont_popup-1 login__cont_popups temp">
         <div class="container" id="container">
            <div class="form-container sign-in-container">
               <form action="#">
                  <h1>Sakib UL Hasan</h1>
                  <span>Please enter these information to proceed</span>
                  <input type="text" placeholder="Write one or two lines about yourself..." />
                  <input type="text" placeholder="Lives in... (city, country)" />

                  <div class="dropdown_cont input_dropdown_cont">
                     <input type="text" placeholder="Favorite anime 1" />

                     <div class="dropdown input_dropdown">
                        <ul>
                           <li>
                              <svg>
                                 <use href="../icons/icons.svg#icon__bookmark"></use>
                              </svg>
      
                              <a href="">Save review</a>
                           </li>
                        
                           <li>
                              <svg>
                                 <use href="../icons/icons.svg#icon__three-dots-horizontal"></use>
                              </svg>
      
                              <a href="">More reviews</a>
                           </li>

                           <li> 
                              <svg>
                                 <use href="../icons/icons.svg#icon__report"></use>
                              </svg>
      
                              <a href="">Report this post</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <input type="text" placeholder="Favorite anime 2" />
                  <input type="text" placeholder="Favorite anime 3" />
                  <input type="text" placeholder="Dream character" />
                  <button class="next-2 next">Next</button>
               </form>
            </div>
            <div class="overlay-container">
               <div class="overlay">                   
                  <div class="overlay-panel overlay-right">
                     <h1>Hello, Friend!</h1>
                     <p>Enter your personal details and start journey with us</p>
                     <button class="ghost next-2 next" id="signUp">Next</button>
                  </div>
               </div>
            </div>
         </div>
      </div>


      
      <div class="login__cont_popup-2 login_cont_popups choose-box temp">
         <h3>When it comes to watching anime, I'm a ...</h3>
         <ul>
            <li class="next-3 next">
               <h3>Beginner</h3>
               <p>I've just started and watched less than 10 animes</p>

               <span>1-10</span>
            </li>

            <li class="next-3 next">
               <h3>Moderate</h3>
               <p>I've watched around 20 animes so far</p>

               <span>11-40</span>
            </li>
         </ul>

         <ul>
            <li class="next-3 next">
               <h3>Intermediate</h3>
               <p>Animes are my profession! I've watched more than 50 animes</p>

               <span>41-80</span>
            </li>

            <li class="next-3 next">
               <h3>Die hard</h3>
               <p>Almost century! I don't watch animes, rather they watch me</p>

               <span>80+</span>
            </li>
         </ul>
      </div>



      <div class="login__cont_popup-3 login_cont_popups choose-box temp">
         <h3>In the sub vs dub debate, I belong to the...</h3>
         <ul>
            <li class="next-4 next">
               <h3>Sub Gang</h3>
               <p>I prefer the things original as original I myself and subbed animes are!</p>

               <span>40%</span>
            </li>

            <li class="next-4 next">
               <h3>Dub Gang</h3>
               <p>Why go to Hebrew when you have English! Dub for sure!</p>

               <span>30%</span>
            </li>
         </ul>

         <ul>
            <li class="next-4 next">
               <h3>Neutral</h3>
               <p>I think both are okay! I am as neutral as neutrons are inside the nucleus. There shouldn't be any debate on sub vs dub.</p>

               <span>30%</span>
            </li>
         </ul>
      </div>


      <div class="login__cont_popup-4 login_cont_popups choose-box temp">
         <h3>Our wise owl says, since the ancient age there's been another debate as well. Anime or manga?</h3>
         <ul>
            <li class="next-5 next">
               <h3>Anime</h3>
               <p>I think it's foolish how people go for pages of pictures when you have the whole video!</p>

               <span>40%</span>
            </li>

            <li class="next-5 next">
               <h3>Manga</h3>
               <p>Animes become trash comparing to the storyline we have in manga! Give manga a respect!</p>
               <span>30%</span>
            </li>
         </ul>

         <ul>
            <li class="next-5 next">
               <h3>Neutral</h3>
               <p>Some animes are better than the manga while some are no match to it comparing the storyline. So, just take the one you like which I do as well.</p>

               <span>30%</span>
            </li>
         </ul>
      </div>



      <div class="login__cont_popup-5 login_cont_popups choose-box temp">
         <h3>Please upload a photo we can use as your profile picture and we are done!</h3>
         
         <form id="file-upload-form" class="uploader">
            <input id="file-upload" type="file" name="fileUpload" accept="image/*" dropzone="true"/>
         
            <label for="file-upload" id="file-drag">
            <img id="file-image" src="#" alt="Preview" class="hidden">
            <div id="start">
               <i class="fa fa-download" aria-hidden="true"></i>
               <div>Select an image or drag here</div>
               <div id="notimage" class="hidden">Please select an image</div>
               <span id="file-upload-btn" class="btn btn-primary">Browse image</span>
            </div>
            <div id="response" class="hidden">
               <div id="messages"></div>
               <progress class="progress" id="file-progress" value="0">
                  <span>0</span>%
               </progress>
            </div>
            </label>
         </form>
      </div>
   </div>`
}


const markupConts = {
   
}


const data = {
   hash: ''
}




// LOGIN
const loginEventsInit = () => {
   if (data.hash == 'login') {
      Array.from(document.querySelectorAll('.login__cont_popups')).forEach(cur => {
         if (!cur.classList.contains('login__cont_popup-0')) {
            cur.style.display = 'none'
         }
      })
      
      
      
      document.querySelector('.login-with-google-btn').addEventListener('click', () => {
         document.querySelector('.login__cont_popup-0').style.display = 'none'
         document.querySelector('.login__cont_popup-1').style.display = 'block'
      })
      
      Array.from(document.querySelectorAll('.next')).forEach(cur => {
         cur.addEventListener('click', e => {
            e.preventDefault()
            const nextTarget = cur.classList[0].split('-')[1]
            const currentTabTarget = (cur.classList[0].split('-')[1] - 1).toString()
      
            console.log(nextTarget)
            console.log(currentTabTarget)
      
      
            document.querySelector(`.login__cont_popup-${currentTabTarget}`).style.display = 'none'
            document.querySelector(`.login__cont_popup-${nextTarget}`).style.display = 'block'
            console.log('a')
         })
      })
   }   
}





// TOGGLING MODES
let mode = 'light'

DOM.mode.addEventListener("click", () => {
   if (mode === "light") {
      mode = "dark"
      DOM.modeIcon.setAttribute("href", DOMStrings.darkModeSVGHref)

      /* create the link element */
      var linkElement = document.createElement('link');

      /* add attributes */
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('href', 'index.dark.css');
      linkElement.setAttribute("class", "dark_mode_css")

      /* attach to the document head */
      document.getElementsByTagName('head')[0].appendChild(linkElement);

   } else if (mode === "dark") {
      mode = "light"
      DOM.modeIcon.setAttribute("href", DOMStrings.lightModeSVGHref)

      let darkModeCSS = document.querySelector(".dark_mode_css")
      document.getElementsByTagName('head')[0].removeChild(darkModeCSS)
   }
})



//  POP UPS
const popupContOpen = child => {
   child.parentElement.style.display = 'flex'
}

const popupContClose = child => {
   child.parentElement.style.display = 'none'
}





// POST: SEE MORE
const seeMoreEventsInit = () => {
   console.log('started')
   if (data.hash == 'index' || data.hash == 'animes' || data.hash == 'profile') {
      console.log('matched')
      document.querySelectorAll('.view-full-post-btn')[0].addEventListener('click', () => {console.log('a')})

      Array.from(getDOM().viewFullPostBtn).forEach(cur => {
         console.log(cur)
         cur.addEventListener("click", () => {
            console.log('clicked see more')
            popupContOpen(DOM.postPopupBox)
            DOM.postPopupBox.style.display = "flex"
         })
      })
      
      DOM.postPopupBox.parentElement.addEventListener("click", e => {
         if (e.target.matches(".post_popup__container")) {
            DOM.postPopupBox.style.display = "none"
            popupContClose(DOM.postPopupBox)
         }
      })      
   }
}




// ADD REVIEW 1
DOM.createPostClick.forEach(cur => {
   cur.addEventListener("click", () => {
      popupContOpen(DOM.addReviewPopup1)
      DOM.addReviewPopup1.style.display = "block"
      console.log("clicked")
      console.log(cur)
   })
})
console.log(DOM.createPostClick)

DOM.addReviewPopup1.parentElement.addEventListener("click", e => {
   if (e.target.matches(".add_reveiew_popup__container")) {
      DOM.addReviewPopup1.style.display = "none"
      DOM.addReviewPopup2.style.display = "none"
      popupContClose(DOM.addReviewPopup1)   
   }
})




// ADD REVIEW 2  
DOM.addReviewPopup1Animes.forEach(cur => {
   cur.addEventListener("click", () => {
      DOM.addReviewPopup1.style.display = "none"
      DOM.addReviewPopup2.style.display = "block"
   })
})




// ANIME PANEL
const setupEventListeners = page => {
   switch (page) {
      case "animes":
         Array.from(getDOM().animesContAnimesLi).forEach(cur => {
            cur.addEventListener("click", () => {
               console.log("clicked");
               getDOM().animesCont1.style.display = 'none'
               getDOM().animesCont2.style.display = 'block'
            })
         })
   }
}










// SHOW PROFILE   
const showProfile = () => {
   data.hash = 'profile'
}









// SWITCH PAGES
DOM.navBtn.forEach(cur => {
   cur.addEventListener('click', () => {
      location.hash = cur.getAttribute("href")
   })
})


const changeWindow = (oldHash, name) => {
   // All the windows
   const windows = ['index', 'friends', 'animes', 'bookmarks', 'about']


   // Change the NAV
   DOM.navBtn.forEach(cur => {
      if (cur.getAttribute("href") !== name) {
         cur.setAttribute("class", '')
      } else {
         cur.setAttribute("class", "active")
      }
   })


   // Remove the old HTML
   DOM.mainLeft.style.display = 'none'

   // Remove the old CSS
   const prevCSS = document.querySelector(`.${oldHash}_css`)
   if (prevCSS) {
      document.getElementsByTagName('head')[0].removeChild(prevCSS)   
   }

   // Add the CSS
   var linkElement = document.createElement('link');

   linkElement.setAttribute('rel', 'stylesheet');
   linkElement.setAttribute('href', `${name}.css`);
   linkElement.setAttribute("class", `${name}_css`)

   document.getElementsByTagName('head')[0].insertBefore(linkElement, document.querySelector(".dark_mode_css"));   


   // Add the HTML
   DOM.middleBottomCont.innerHTML = markupPage[`${name}`]
   if (name === 'index') DOM.mainLeft.style.display = 'block'


   // Change Hash Data
   data.hash = name
   setupEventListeners(name)
}




const getNewWindowName = () => {
   const windowName = location.hash.slice(1, location.hash.length)

   return windowName !== '' ? windowName :'index';
}

window.addEventListener("hashchange", () => {
   changeWindow(data.hash, getNewWindowName())
   loginEventsInit()
   seeMoreEventsInit()
})


const init = () => {
   changeWindow(data.hash, getNewWindowName())
   setupEventListeners(getNewWindowName())
   loginEventsInit()
   seeMoreEventsInit()
}

init()







console.log(getDOM().animesContAnimesLi)

// ANIME PANEL











// DEBUGGING
window.data = {
   DOM: DOM,
   data,
}
console.log(getNewWindowName())






