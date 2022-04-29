// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader')
const hidePreloader = ()=> preloader.classList.add('hide-preloader')

window.addEventListener('load', ()=> {  
    setInterval(hidePreloader,0950) 
})

btn.addEventListener('click', ()=> {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause()
    } else {
        btn.classList.remove('slide')
        video.play()
    }
})