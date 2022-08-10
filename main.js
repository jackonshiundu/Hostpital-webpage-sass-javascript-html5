
/*===================code to nabbar icon toggle  starts here here ===============*/

const navItems=document.querySelector('#nav-items')
const openNavBtn=document.querySelector('#open-nav-btn')
const closeNavbtn=document.querySelector('#close-nav-btn')

const closeNavBar=()=>{
  navItems.style.display='none';
  closeNavbtn.style.display='none';
  openNavBtn.style.display='inline-block';
}
openNavBtn.addEventListener('click', ()=>{
    navItems.style.display='flex';
    closeNavbtn.style.display='block';
    openNavBtn.style.display='none';
})
closeNavbtn.addEventListener('click', closeNavBar)


/*===================code to nabbar icon toggle  end here ===============*/
/*===================Clossing Nav bar when a  user clicks in medium and small devices starts here ===============*/
if(window.innerWidth < 1024 ){
  document.querySelectorAll('#nav-items li a').forEach(navItem=>{
    navItem.addEventListener('click',()=>{
      closeNavBar()
    })
  }) 
}
/*===================Clossing Nav bar when a  user clicks in medium and small devices starts here ===============*/

/*===================code to increase the progress bar ===============*/
const progressBar=document.querySelector('.progress-bar')
const updateProgressBar=()=>{
  progressBar.style.width=`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`;
  requestAnimationFrame(updateProgressBar);
/*     let value=progressBar.style.width;
        console.log(Math.floor(value))
        console.log(window.scrollY)
        console.log(document.body.scrollHeight)
        console.log(window.innerHeight)
 */    }
    updateProgressBar();
    /*===================code to increase the progress bar end here ===============*/
    /*===================code for swiper js Testimonial Section  ===============*/

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            //when window is grater than  600px
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }
      });