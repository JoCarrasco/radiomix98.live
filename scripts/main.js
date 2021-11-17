function BootstrapMainFunction() {

  class SiriWaves {
    instance = null;
    video = null;
    static init() {
        if(Hls.isSupported()) {
          var hls = new Hls();
          hls.attachMedia(video);
          hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            console.log('video and hls.js are now bound together !');
            hls.loadSource('http://66.29.151.177:3000/livestream/bbb.m3u8');
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
              this.video = video;
              console.log(
                'manifest loaded, found ' + data.levels.length + ' quality level'
              );
            });
          });
        }
      
      this.instance = new SiriWave({
        container: document.getElementById("siri-wave"),
          height: 120,
          amplitude: 3,
        style: 'ios9',
        speed: 0.09,
          // frequency: 2,
          cover: true
        });
      this.instance.stop();
    }

    static start() {
      this.instance.setAmplitude(3);
      this.instance.start();
      video.play();
    }
    static stop() {
      this.instance.setAmplitude(0);
      setTimeout(() => {
        video.pause();
        this.instance.stop();
      },600)
    }
  }

  class AudioPlay {
    static init() {
       var video = document.getElementById('video');
      
    
    }
  }
  
  class MixPlayer {
    static isPlaying = false;
    static init() {
      const playerBtn = document.querySelector('#play-icon');
      this.setIcon();
      playerBtn.addEventListener('click', () => {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
          SiriWaves.start();
        } else {
           SiriWaves.stop();
        }
        this.setIcon();
      })
    }

    static setIcon() {
      const playerBtn = document.querySelector('#play-icon');
      playerBtn.className = !this.isPlaying ? 'fas fa-play-circle' : 'fas fa-pause-circle';
    }
  }
  class CustomCarousel {
    carousel = null;
    carouselHTML = null
    interval = null;
    init() {
      this.carouselHTML = document.querySelector('#primaryCarousel');
      this.carousel = new bootstrap.Carousel(primaryCarousel, {
        wrap: true
      });

      this.interval = setInterval(() => {
        this.carousel.next();
      }, 2500);

      this.carouselHTML.addEventListener('slid.bs.carousel', (res) => {
        this.setMiniFeaturedImg();
      });
    }

    setMiniFeaturedImg() {
      const activeItem = document.querySelector('.carousel-item.active');
      if (activeItem !== undefined) {
        const targetSrc = activeItem.getAttribute('data-img');
        const targetId = activeItem.getAttribute('data-id');
        const miniFeaturedImg = document.getElementById('mini-featured-img');
        if (miniFeaturedImg !== null) {
          miniFeaturedImg.src = targetSrc;
        }
        const targetIndex = customSlides.findIndex((slide) => slide.id === parseInt(targetId, 10));
        const targetSlide = customSlides[targetIndex];
        const title = document.querySelector('.description-section-title');
        const date = document.querySelector('.description-section-date');
        const hours = document.querySelector('.description-section-hours');
        hours.innerHTML = targetSlide.hourDate;
        date.innerHTML = targetSlide.dateDescription;
        title.innerHTML = targetSlide.actionDescription;
      }
    }
  }

  const carousel = new CustomCarousel();
  AudioPlay.init();
  carousel.init();
  SiriWaves.init();
  MixPlayer.init();
}

BootstrapMainFunction();