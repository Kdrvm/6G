Vue.component('sidebar-component', {
  template: `
    <nav id="tmSidebar" class="tm-bg-black-transparent tm-sidebar animate__animated animate__fadeInLeft">
      <div id="particles-js" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
      <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="tm-sidebar-sticky">
        <div class="tm-brand-box">
          <div class="tm-double-border-1">
            <div class="tm-double-border-2">
              <h1 class="tm-brand text-uppercase animate__animated animate__bounceIn">6G</h1>
            </div>
          </div>
        </div>
        <ul id="tmMainNav" class="nav flex-column text-uppercase text-right tm-main-nav">
          <li class="nav-item">
            <a href="#intro" class="nav-link active" @click="$root.showParticles('intro')">
              <span class="d-inline-block mr-3">Главное</span>
              <span class="d-inline-block tm-white-rect"></span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link" @click="$root.showParticles('about')">
              <span class="d-inline-block mr-3">Информация о 6G</span>
              <span class="d-inline-block tm-white-rect"></span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#work" class="nav-link" @click="$root.showParticles('work')">
              <span class="d-inline-block mr-3">Технологии</span>
              <span class="d-inline-block tm-white-rect"></span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#vid" class="nav-link" @click="$root.showParticles('vid')">
              <span class="d-inline-block mr-3">Видео</span>
              <span class="d-inline-block tm-white-rect"></span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#clients" class="nav-link" @click="$root.showParticles('clients')">
              <span class="d-inline-block mr-3">О Нас</span>
              <span class="d-inline-block tm-white-rect"></span>
            </a>
          </li>
        </ul>
        <ul class="nav flex-row tm-social-links">
          <li class="nav-item">
            <a href="https://facebook.com" class="nav-link tm-social-link">
              <i class="fab fa-vk"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://twitter.com" class="nav-link tm-social-link">
              <i class="fab fa-google"></i>
            </a>
          </li>
        </ul>
        <footer class="text-center text-white small">
          <p class="mb--0 mb-2">Технологии будущего</p>
          <p class="mb-0">Дизайн:
            <a rel="nofollow" href="https://vk.com/k0d1r0v_m" class="tm-footer-link">Кодиров М.</a>
          </p>
        </footer>
      </div>
    </nav>
  `,
  mounted() {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
});

Vue.component('main-component', {
  template: `
    <main role="main" class="ml-sm-auto col-12">
      <transition name="fade" mode="out-in">
        <intro-section></intro-section>
      </transition>
      <transition name="fade" mode="out-in">
        <about-section></about-section>
      </transition>
      <transition name="fade" mode="out-in">
        <technologies-section></technologies-section>
      </transition>
      <transition name="fade" mode="out-in">
        <video-section></video-section>
      </transition>
      <transition name="fade" mode="out-in">
        <about-us-section></about-us-section>
      </transition>
    </main>
  `
});

Vue.component('intro-section', {
  template: `
    <div class="parallax-window" data-parallax="scroll" data-image-src="img/orig.jpg">
      <div class="tm-section-wrap">
        <section id="intro" class="tm-section animate__animated animate__fadeInUp">
          <div class="tm-bg-white-transparent tm-intro">
            <h2 class="tm-section-title mb-5 text-uppercase tm-color-primary animate__animated animate__bounceIn">Технология 6G, что известно на сегодняшний день?</h2>
            <p class="tm-color-gray animate__animated animate__fadeIn">
              В приложении представлено краткое описание технологии 6G.
              6G — шестое поколение мобильной связи, внедрение которого предполагается в 2028—2030 годах,
              на основе стандартов телекоммуникаций, следующих за стандартами 5G/IMT-2020.
            </p>
            <p class="mb-0 tm-color-gray animate__animated animate__fadeIn">
              В ряде случаев их обозначают как NET-2030 или 6G/NET-2030.
            </p>
          </div>
        </section>
      </div>
    </div>
  `
});

Vue.component('about-section', {
  template: `
    <div class="tm-section-wrap bg-white">
      <section id="about" class="row tm-section animate__animated animate__fadeInUp">
        <div class="col-xl-6">
          <div class="tm-section-half">
            <div><i class="fas fa-6x fa-rss mb-5 tm-section-icon animate__animated animate__bounceIn"></i></div>
            <h2 class="tm-section-title tm-color-primary mb-5 animate__animated animate__bounceIn">О технологии 6G</h2>
            <p class="mb-5 animate__animated animate__fadeIn">
              6G — это технология мобильной связи нового, шестого поколения,
              находящаяся в процессе активной разработки.
              Предполагается, что сети 6G обеспечат скорости передачи данных,
              превышающие показатели 5G в сотни раз, достигая потенциала в один терабит в секунду.
            </p>
            <p class="animate__animated animate__fadeIn">
              Ключевой особенностью 6G будет использование терагерцового спектра,
              что значительно расширит зоны покрытия,
              включая подводные пространства, высотные объекты и космические зоны.
            </p>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="tm-section-half">
            <div><i class="fa-6x fa fa-history mb-5 tm-section-icon animate__animated animate__bounceIn"></i></div>
            <h2 class="tm-section-title tm-color-primary mb-5 animate__animated animate__bounceIn">Основные характеристики и возможности</h2>
            <p class="mb-5 animate__animated animate__fadeIn">
              Характеристики:
              Максимальная скорость передачи данных: до 1 терабита в секунду.
              Использование терагерцового спектра для расширения зоны покрытия.
              Повышенная энергоэффективность по сравнению с предыдущими поколениями.
            </p>
            <p class="animate__animated animate__fadeIn">
              Перспективные возможности 6G:
              Высочайшая пропускная способность для сверхбыстрой передачи данных.
              Применение в телемедицине, например, для дистанционных операций и оптимизации рабочих процессов.
              Эффективное соединение при движении на высоких скоростях (до 1000 км/ч).
            </p>
          </div>
        </div>
      </section>
    </div>
  `
});

Vue.component('technologies-section', {
  template: `
    <div class="tm-section-wrap bg-white">
      <section id="work" class="row tm-section animate__animated animate__fadeInUp">
        <div class="col-12">
          <div class="w-100 tm-double-border-1 tm-border-gray">
            <div class="tm-double-border-2 tm-border-gray tm-box-pad">
              <div class="tm-gallery-wrap">
                <h2 class="tm-color-primary tm-section-title mb-4 ml-2 animate__animated animate__bounceIn">Технологии</h2>
                <div class="tm-gallery">
                  <div class="tm-gallery-item animate__animated animate__fadeInUp">
                    <figure class="effect-bubba">
                      <img src="img/gallery/01.png" alt="Our Work Image" class="img-fluid">
                      <figcaption>
                        <h2> AI <span>  </span></h2>
                        <p>Ускорит и оптимизирует обработку информации.</p>
                        <a href="img/gallery/large/01.png">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="tm-gallery-item animate__animated animate__fadeInUp">
                    <figure class="effect-bubba">
                      <img src="img/gallery/02.jpg" alt="Our Work Image" class="img-fluid">
                      <figcaption>
                        <h2>AR<span></span></h2>
                        <p>6G обеспечит высокую скорость и практически мгновенную реакцию.</p>
                        <a href="img/gallery/large/02.jpg">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="tm-gallery-item animate__animated animate__fadeInUp">
                    <figure class="effect-bubba">
                      <img src="img/gallery/03.jpg" alt="Our Work Image" class="img-fluid">
                      <figcaption>
                        <h2>VR <span></span></h2>
                        <p>Создание VR-приложений, требующих высокой скорости передачи.</p>
                        <a href="img/gallery/large/03.jpg">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="tm-gallery-item animate__animated animate__fadeInUp">
                    <figure class="effect-bubba">
                      <img src="img/gallery/04.jpg" alt="Our Work Image" class="img-fluid">
                      <figcaption>
                        <h2>Новые антенны <span></span></h2>
                        <p>Антенна с фотопроводящей линзой.</p>
                        <a href="img/gallery/large/04.jpg">View more</a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
});

Vue.component('video-section', {
  template: `
    <div class="tm-section-wrap bg-white">
      <section id="vid" class="row tm-section animate__animated animate__fadeInUp">
        <div class="col-12 tm-section-pad">
          <div class="tm-flex-item-left">
            <div class="tm-w-80">
              <h2 class="tm-color-primary tm-section-title mb-4 animate__animated animate__bounceIn">Видео 6G</h2>
              <div class="video-container">
                <iframe width="850" height="450" src="https://www.youtube.com/embed/kpWk3X7YYj8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
});

Vue.component('about-us-section', {
  template: `
    <div class="tm-section-wrap bg-white">
      <section id="clients" class="row tm-section animate__animated animate__fadeInUp">
        <div class="col-12 tm-section-pad">
          <div class="tm-flex-item-left">
            <div class="tm-w-80">
              <h2 class="tm-color-primary tm-section-title mb-4 animate__animated animate__bounceIn">О нас</h2>
              <p class="mb-5 animate__animated animate__fadeIn">
                Разработали и создали сайт студенты группы 2бИТС2.
                С помощью этого сайта мы хотели бы кратко описать тему технологии 6G,
                какими характеристиками и перспективными возможностями она обладает,
                а также с помощью каких и в каких технологиях она применяется.
                Наша команда: Кодиров М.Б., Каримов Д.Н, Тарасов М.К, Элмуродов Б.Ю.
              </p>
            </div>
            <div>
              <div class="row tm-clients-images">
                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap animate__animated animate__fadeInUp">
                  <a href="https://vk.com/k0d1r0v_m">
                    <img src="img/11.jpg" alt="Client Image" class="img-fluid tm-client-img" />
                  </a>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap animate__animated animate__fadeInUp">
                  <a>
                    <img src="img/22.jpg" alt="Client Image" class="img-fluid tm-client-img" />
                  </a>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap animate__animated animate__fadeInUp">
                  <a href="https://vk.com/elmurodov_19">
                    <img src="img/33.jpg" alt="Client Image" class="img-fluid tm-client-img" />
                  </a>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap animate__animated animate__fadeInUp">
                  <a href="https://vk.com/privkrchcto">
                    <img src="img/44.jpg" alt="Client Image" class="img-fluid tm-client-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
});

new Vue({
  el: '#app',
  data() {
    return {
      showParticlesEffect: false
    };
  },
  methods: {
    showParticles(section) {
      this.showParticlesEffect = section === 'intro';
      if (this.showParticlesEffect) {
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }
    }
  },
  mounted() {
    this.showParticles('intro');
  }
});
