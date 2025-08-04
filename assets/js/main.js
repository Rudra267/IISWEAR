/*=== Javascript function indexing hear===========

01.swiperActivation();
02.counterUp();
03.searchOption();
04.cartBarshow();
05.cartNumberIncDec();
06.niceSelect();
07.backToTopInit();
08.mesonaryTab();
09.vedioActivation();
10.stickyHeader();
11.progressAvtivation();
12.wowActive();
13.stickySidebar();
14.rtslessonToggle();
15.filterClickButton();
16.datePicker();
17.fileUpload();
18.countDownTimer();
19.modalOver();
20.sideMenu();
21.metismenu();
22.autoCompleate();
23.fitRows();
24.tabToggle();
25.shapeMove();


==================================================*/

(function ($) {
  'use strict';
  let device_width = window.innerWidth;

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      rtsJs.swiperActivation();
      rtsJs.counterUp();
      rtsJs.searchOption();
      rtsJs.cartBarshow();
      rtsJs.cartNumberIncDec();
      rtsJs.niceSelect();
      rtsJs.backToTopInit();
      rtsJs.mesonaryTab();
      rtsJs.vedioActivation();
      rtsJs.videoActive();
      rtsJs.stickyHeader();
      rtsJs.progressAvtivation();
      rtsJs.wowActive();
      rtsJs.stickySidebar();
      rtsJs.rtslessonToggle();
      rtsJs.filterClickButton();
      rtsJs.datePicker();
      rtsJs.fileUpload();
      rtsJs.modalOver();
      rtsJs.sideMenu();
      rtsJs.metismenu();
      rtsJs.autoCompleate();
      rtsJs.fitRows();
      rtsJs.tabToggle();
      rtsJs.shapeMove();
      rtsJs.countDown();
    },

    swiperActivation: function () {

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-category-1", {
          slidesPerView: 6,
          spaceBetween: 24,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          breakpoints: {
            1700: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 6,
            },
            1324: {
              slidesPerView: 5,
            },
            1100: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            440: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            }
          }
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-testimonials-1", {
          slidesPerView: 1,
          spaceBetween: 24,
          speed: 1000,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-container-h1", {
          direction: "horizontal",
          effect: "slide",
          autoplay: false,
          parallax: true,
          speed: 1600,
          rtl: true,
          loop: true,
          loopFillGroupWithBlank: !0,
          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true"
          }
        });
      });

      $(document).ready(function () {
        let defaults = {
          spaceBetween: 30,
          slidesPerView: 2
        };
        // call init function
        initSwipers(defaults);

        function initSwipers(defaults = {}, selector = ".swiper-data") {
          let swipers = document.querySelectorAll(selector);
          swipers.forEach((swiper) => {
            // get options
            let optionsData = swiper.dataset.swiper
              ? JSON.parse(swiper.dataset.swiper)
              : {};
            // combine defaults and custom options
            let options = {
              ...defaults,
              ...optionsData
            };

            //console.log(options);
            // init
            new Swiper(swiper, options);
          });
        }

      })

    },

    counterUp: function () {
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');
    },

    // search popup
    searchOption: function () {
      $(document).on('click', '#search', function () {
        $(".search-input-area").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '#close', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },

    // cart bar show
    cartBarshow: function () {
      // Cart Bar show & hide
      $(document).on('click', '.cart-icon', function () {
        $(".cart-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-cart', function () {
        $(".cart-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".cart-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },

    cartNumberIncDec: function () {
      $(document).ready(function () {

        $(function () {
          $(".button").on("click", function () {
            var $button = $(this);
            var $parent = $button.parent();
            var oldValue = $parent.find('.input').val();

            if ($button.text() == "+") {
              var newVal = parseFloat(oldValue) + 1;
            } else {
              // Don't allow decrementing below zero
              if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
              } else {
                newVal = 1;
              }
            }
            $parent.find('a.add-to-cart').attr('data-quantity', newVal);
            $parent.find('.input').val(newVal);
          });
        });
      });
    },

    niceSelect: function () {
      $('.nice-select').each(function () {

        var select = $(this),
          name = select.attr('name');

        select.hide();

        select.wrap('<div class="nice-select-wrap"></div>');

        var parent = select.parent('.nice-select-wrap');

        parent.append('<ul id=' + name + ' style="display:none"></ul>');

        select.find('option').each(function () {

          var option = $(this),
            value = option.attr('value'),
            label = option.text();

          if (option.is(":first-child")) {

            $('<a href="#" class="drop">' + label + '</a>').insertBefore(parent.find('ul'));

          } else {

            parent.find('ul').append('<li><a href="#" id="' + value + '">' + label + '</a></li>');

          }

        });

        parent.find('a').on('click', function (e) {

          parent.toggleClass('down').find('ul').slideToggle(300);

          e.preventDefault();

        });

        parent.find('ul a').on('click', function (e) {

          var niceOption = $(this),
            value = niceOption.attr('id'),
            text = niceOption.text();

          select.val(value);

          parent.find('.drop').text(text);

          e.preventDefault();

        });

      });
    },

    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
          }
        });
        jQuery('.progress-wrap').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        })


      });

    },

    mesonaryTab: function () {
      $(window).on("load", function () {

        var isotope = $(".main-isotop");

        if (isotope.length) {
          var iso = new Isotope('.filter', {
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
            fitRows: {
              equalheight: true
            }
          });

          // filter functions
          var filterFns = {
            // show if name ends with -ium
            ium: function (itemElem) {
              var name = itemElem.querySelector('.name').textContent;
              return name.match(/ium$/);
            }
          };

          // bind filter button click
          var filtersElem = document.querySelector('.filters-button-group');
          filtersElem.addEventListener('click', function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, 'button')) {
              return;
            }
            var filterValue = event.target.getAttribute('data-filter');
            // use matching filter function
            filterValue = filterFns[filterValue] || filterValue;
            iso.arrange({ filter: filterValue });
          });

          // change is-checked class on buttons
          var buttonGroups = document.querySelectorAll('.button-group');
          for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
          }
          function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener('click', function (event) {
              // only work with buttons
              if (!matchesSelector(event.target, 'button')) {
                return;
              }
              buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
              event.target.classList.add('is-checked');
            });
          }
        }

        if ($('.grid-masonary').length) {

          // image loaded portfolio init
          $('.grid-masonary').imagesLoaded(function () {
            $('.portfolio-filter').on('click', 'button', function () {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({
                filter: filterValue
              });
            });
            var $grid = $('.grid-masonary').isotope({
              itemSelector: '.grid-item-p',
              percentPosition: true,
              masonry: {
                columnWidth: '.grid-item-p',
              }
            });
          });
        }

        // portfolio Filter
        $('.portfolio-filter button').on('click', function (event) {
          $(this).siblings('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
          event.preventDefault();
        });

      });

    },

    vedioActivation: function () {
      $(document).ready(function () {
        $('.popup-youtube, .popup-video').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
    },
    videoActive: function () {
      $(document).on('click', '#myBtn', function () {
        $("#myVideo").toggleClass("show");

        const $btn = $(this);
        const isFullSize = $btn.data("fullSize"); // Check if it's currently full size

        if (isFullSize) {
          $btn.css({
            opacity: "1",
            width: $btn.data("originalWidth"), // Restore original width
            height: $btn.data("originalHeight") // Restore original height
          }).data("fullSize", false);
        } else {
          // Store the original width and height before changing
          $btn.data("originalWidth", $btn.css("width"));
          $btn.data("originalHeight", $btn.css("height"));

          $btn.css({
            opacity: "0",
            width: "100%", // Set to 100% width
            height: "100%" // Set to 100% height
          }).data("fullSize", true);
        }
      });
      $(document).ready(function () {
        var $video = $("#myVideo");
        var $btn = $("#myBtn");

        if ($video.length && $btn.length) {
          $btn.on("click", function () {
            if ($video[0].paused) {
              $video[0].play();
            } else {
              $video[0].pause();
            }
          });
        }
      });

    },
    // sticky header activation

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('.header--sticky').addClass('sticky')
        } else {
          $('.header--sticky').removeClass('sticky')
        }
      })
    },

    progressAvtivation: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          var bars = document.querySelectorAll('.meter > span');
          setInterval(function () {
            bars.forEach(function (bar) {
              var getWidth = parseFloat(bar.dataset.progress);
              for (var i = 0; i < getWidth; i++) {
                bar.style.width = i + '%';
              }
            });
          }, 100);
        }
      })
    },

    wowActive: function () {
      new WOW().init();
    },

    stickySidebar: function () {
      if (typeof $.fn.theiaStickySidebar !== "undefined") {
        $(".rts-sticky-column-item").theiaStickySidebar({
          additionalMarginTop: 130,
        });
      }
    },

    rtslessonToggle: function () {
      $('#toggle-left-back').on('click', function () {
        $(this).toggleClass('sidebar-hide')
        $('.rts-lession-left').toggleClass('sibebar-none');
      })
    },

    filterClickButton: function () {

      $('.discover-filter-activation').on('click', function () {
        $(this).toggleClass('open');
        $('.default-exp-expand').slideToggle('400');
      })

      function slider() {
        $('#slider-range').slider({
          range: true,
          min: 10,
          max: 500,
          values: [100, 300],
          slide: function (event, ui) {
            $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
          }
        });
        $('#amount').val('$' + $('#slider-range').slider('values', 0) +
          " - $" + $('#slider-range').slider('values', 1));
      }


    },

    datePicker: function () {
      jQuery(document).ready(function () {
        jQuery('#datepicker').datepicker({
          format: 'dd-mm-yyyy',
          startDate: '+1d'
        });
      });
    },

    fileUpload: function () {
      var input = document.querySelectorAll("#custom-button");
      if (input.length) {
        const realFileBtn = document.getElementById("real-file");
        const customBtn = document.getElementById("custom-button");
        const customTxt = document.getElementById("custom-text");

        customBtn.addEventListener("click", function () {
          realFileBtn.click();
        });

        realFileBtn.addEventListener("change", function () {
          if (realFileBtn.value) {
            customTxt.innerHTML = realFileBtn.value.match(
              /[\/\\]([\w\d\s\.\-\(\)]+)$/
            )[1];
          } else {
            customTxt.innerHTML = "No file chosen, yet.";
          }
        });

      }

    },
    countDown: function () {
      $(function () {
        countDown.init();
        updateCountdowns();
        setInterval(updateCountdowns, 1000);

        function updateCountdowns() {
          countDown.validElements.forEach((element, i) => {
            countDown.changeTime(element, countDown.endDate[i], i);
          });
        }
      });

      const countDown = {
        endDate: [],
        validElements: [],
        display: [],
        initialHeight: undefined,
        initialInnerDivMarginTop: undefined,
        originalBorderTopStyle: undefined,

        init: function () {
          $('.countDown').each(function () {
            const regex_match = $(this).text().match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/);
            if (!regex_match) return;

            const end = new Date(regex_match[3], regex_match[2] - 1, regex_match[1], regex_match[4], regex_match[5], regex_match[6]);

            if (end > new Date()) {
              countDown.validElements.push($(this));
              countDown.endDate.push(end);
              countDown.changeTime($(this), end, countDown.validElements.length - 1);
              $(this).html(countDown.display.next.map(item => `<div class='container'><div class='a'><div>${item}</div></div></div>`).join(''));
            } else {
              // Display your message when the countdown expires
              $(this).html("<p class='end'>Sorry, your session has expired.</p>");
            }
          });
        },

        reset: function (element) {
          // This function appears to be incomplete, as it currently doesn't do anything.
        },

        changeTime: function (element, endTime) {
          if (!endTime) return;

          const today = new Date();
          if (today.getTime() <= endTime.getTime()) {
            countDown.display = {
              'last': this.calcTime(endTime.getTime() - today.getTime() + 1000),
              'next': this.calcTime(endTime.getTime() - today.getTime())
            };
            countDown.display.next = countDown.display.next.map(item => item.toString().padStart(2, '0'));
            countDown.display.last = countDown.display.last.map(item => item.toString().padStart(2, '0'));

            element.find('div.container div.a div').each((index, div) => {
              $(div).text(countDown.display.last[index]);
            });

            this.reset(element.find('div.container'));
          } else {
            element.html("<p class='end'>Sorry, your session has expired.</p>");
          }
        },

        calcTime: function (milliseconds) {
          const secondsTotal = Math.floor(milliseconds / 1000);
          const days = Math.floor(secondsTotal / 86400);
          const hours = Math.floor((secondsTotal % 86400) / 3600);
          const minutes = Math.floor((secondsTotal % 3600) / 60);
          const seconds = secondsTotal % 60;
          return [days, hours, minutes, seconds];
        }
      };

    },
    modalOver: function () {
      $(document).ready(function () {
        // Check if 'popState' is not set in localStorage
        if (!localStorage.getItem('popState')) {
          // Show the modal after a delay
          setTimeout(function () {
            $("#myModal-1").modal('show');
          }, 2000);
          // Set the 'popState' to 'shown' when the modal is closed
          $('#myModal-1').on('hidden.bs.modal', function () {
            localStorage.setItem('popState', 'shown');
          });
        }

      });

    },

    sideMenu: function () {
      $(document).on('click', '#menu-btn', function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '.onepage .mainmenu li a', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },

    metismenu: function () {
      $('#mobile-menu-active').metisMenu();
    },

    autoCompleate: function () {
      $(function () {
        var availableTags = [
          "Mobile Phone Repair",
          "How to Write the Ultimate 1 Page",
          "What to Write the Ultimate 1 Page",
          "Sunglasses Trading",
          "Spectacles & Contact Lenses Trading",
          "Beauty & Personal Care Equipment Trading",
          "Parties & Entertainments Services",
          "Art Production Services",
          "ColdFusion",
          "Marketing",
          "Fortran",
          "Groovy",
          "Haskell",
          "Main to Write the Ultimate 1 Page Strategic Business Plan",
          "JavaScript",
          "Lisp",
          "Perl",
          "How to Write the Ultimate 1 Page",
          "Python",
          "Ruby",
          "Scala",
          "Scheme",
          "How to Write the Ultimate 1 Page",
          "How to Write the Ultimate 1 Page Strategic Business Plan",
          "The Complete Web Developer in 2023: Zero to Mastery",
          "How to Write the Ultimate 1 Page Strategic Business Plan",
          "100 Days Of Code - 2023 Web Development Bootcamp",
          "User Experience The Ultimate Guide to Usability and UX",
          "Complete Guitar Lessons System Beginner to Advanced",
          "How to Market Yourself as Coach or Consultant Market",
          "How to Run truly Productive in Meetings – and add value",
          ">Pole Dancing Video Course with Noelle Wood",
          "free",
        ];
        $(".autocomplete").autocomplete({
          source: availableTags
        });
      });
    },

    fitRows: function () {
      //fit rows
      function fitRowsDefinition(LayoutMode) {
        var FitRows = LayoutMode.create('fitRows');
        FitRows.prototype._resetLayout = function () {
          this.x = 0;
          this.y = 0;
          this.maxY = 0;
          this.row = 0;
          this.rows = [];
          this._getMeasurement('gutter', 'outerWidth');
          if (this.options.equalheight) {
            for (var i = 0; i < this.isotope.items.length; i++) {
              this.isotope.items[i].css({
                height: 'auto'
              });
            }
          }
        };
        /**
         * Working but glicthy with newly appended element via ajax
         * must reinvoke isotope('layout') to properly realign the horizontal position
         * after isotope('appended), not sure why?
         */
        FitRows.prototype._getItemLayoutPosition = function (item) {

          item.getSize();

          var itemWidth = item.size.outerWidth;

          // if this element cannot fit in the current row
          // need to add extra pixel to avoid layout dropping in some edge
          // bootstrap grid in firefox
          var containerWidth = Math.ceil(this.isotope.size.innerWidth + 1);
          if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
          }

          // New row?
          if (this.x == 0 && this.y != 0) {
            this.row++;
          }
          var position = {
            x: this.x,
            y: this.y
          };
          this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
          this.x += itemWidth;


          // Compare Y from this row and previous row
          if (typeof this.rows[this.row] == 'undefined') {
            this.rows[this.row] = [];
            this.rows[this.row].start = this.y;
            this.rows[this.row].end = this.maxY;
          }
          else {
            this.rows[this.row].end = Math.max(this.rows[this.row].end, this.maxY);
          }
          // Record row number to item
          item.row = this.row;
          return position;
        };
        FitRows.prototype._equalHeight = function () {

          // Should we use this.isotope.filteredItems or this.isotope.items?

          for (var i = 0; i < this.isotope.items.length; i++) {
            var row = this.isotope.items[i].row,
              data = this.rows[row];

            if (data) {
              var height = data.end - data.start;
              height -= this.isotope.items[i].size.borderTopWidth + this.isotope.items[i].size.borderBottomWidth;
              height -= this.isotope.items[i].size.marginTop + this.isotope.items[i].size.marginBottom;
              height -= this.gutter.height || 0;

              if (this.isotope.items[i].size.isBorderBox == false) {
                height -= this.isotope.items[i].size.paddingTop + this.isotope.items[i].size.paddingBottom;
              }

              this.isotope.items[i].size.height = height;

              this.isotope.items[i].css({
                height: height.toString() + 'px',
              });
            }
          }
        }
        FitRows.prototype._getContainerSize = function () {
          if (this.options.equalheight) {
            this._equalHeight();
          }
          return { height: this.maxY };
        };
        return FitRows;
      }
      if (typeof define === 'function' && define.amd) {
        // AMD
        define([
          '../layout-mode'
        ],
          fitRowsDefinition);
      } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = fitRowsDefinition(
          require('../layout-mode')
        );
      } else {
        // browser global
        fitRowsDefinition(
          window.Isotope.LayoutMode
        );
      }
    },

    tabToggle: function () {
      $('#rts-toggle').click(function (event) {
        $('.plan-toggle-wrap').toggleClass('active');
      });

      $('#rts-toggle').change(function () {
        if ($(this).is(':checked')) {
          $('.tab-content #yearly').show();
          $('.tab-content #monthly').hide();
        }
        else {
          $('.tab-content #yearly').hide();
          $('.tab-content #monthly').show();
        }

      });
    },

    shapeMove: function () {
      $('.shape-move').mousemove(function (e) {

        var wx = $(window).width();
        var wy = $(window).height();

        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        var newx = x - wx / 2;
        var newy = y - wy / 2;

        $('.shape-image .shape').each(function () {
          var speed = $(this).attr('data-speed');
          if ($(this).attr('data-revert')) speed *= -1;
          TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });

        });

      });
    },

  }

  rtsJs.m();

  document.querySelectorAll('[data-bg-src]').forEach(el => {
    const bg = el.getAttribute('data-bg-src');
    if (bg) {
      el.style.backgroundImage = `url('%24%7bbg%7d.html')`;
    }
  });
//   document.addEventListener("DOMContentLoaded", function () {
//   const toggle = document.querySelector(".toggle-password");
//   const passwordInput = document.getElementById("password");
//   const icon = toggle.querySelector("i");

//   toggle.addEventListener("click", function () {
//     const isPassword = passwordInput.type === "password";

//     // Toggle input type
//     passwordInput.type = isPassword ? "text" : "password";

//     // Toggle Font Awesome icon
//     icon.classList.toggle("fa-eye");
//     icon.classList.toggle("fa-eye-slash");
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  // Find the toggle button only if it exists
  const toggle = document.querySelector(".toggle-password");

  // Proceed only if the toggle element is found
  if (toggle) {
    const passwordInput = document.getElementById("password");

    // Also check if password input exists
    if (passwordInput) {
      const icon = toggle.querySelector("i");

      toggle.addEventListener("click", function () {
        const isPassword = passwordInput.type === "password";

        // Toggle password visibility
        passwordInput.type = isPassword ? "text" : "password";

        // Toggle eye icons
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
      });
    }
  }
});

})(jQuery, window)


// faq

 const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Close all other answers
    faqQuestions.forEach(q => {
      if (q !== question) {
        q.classList.remove('active');
        q.nextElementSibling.style.maxHeight = 0;
      }
    });

    // Toggle the clicked one
    question.classList.toggle('active');
    const answer = question.nextElementSibling;

    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  });
});