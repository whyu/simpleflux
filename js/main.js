(function(aboutContent, workContent, contactContent, resumeContent){

// Making a state tracker for the menu

  var menuController = function menuController() {

    var menuItems = document.getElementsByClassName('menu-cont__item');

    this.getItems = function () {
      menuItems = Array.prototype.slice.call(menuItems);
      return menuItems;
    }

    return {
      getItems: this.getItems,
      getActiveItem: this.getActiveItem
    }

  }

  menuController.prototype.getActiveItem = function() {
    var activeItem = document.getElementsByClassName('active')[0];
    return activeItem;
  }

// State Tracker Instantiated here:

  var controller = new menuController();
  init();
//   particlesJS("particles-js", {
//   "particles": {
//     "number": {
//       "value": 200,
//       "density": {
//         "enable": true,
//         "value_area": 1000
//       }
//     },
//     "color": {
//       "value": "random"
//     },
//     "shape": {
//       "type": ['circle'],
//       "stroke": {
//         "width": 0,
//         "color": "random"
//       },
//       "polygon": {
//         "nb_sides": 5
//       }
//       // "image": {
//       //   "src": "img/github.svg",
//       //   "width": 100,
//       //   "height": 100
//       // }
//     },
//     "opacity": {
//       "value": 1,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 1,
//         "opacity_min": 0,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": false,
//       "distance": 150,
//       "color": "#000000",
//       "opacity": 0.1,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 1,
//       "direction": "top",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": true,
//         "rotateX": 6000,
//         "rotateY": 2500
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "repulse"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 75,
//       },
//       "push": {
//         "particles_nb": 6
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });


// Initialize Function.....:

  function init() {

    var menuItems = controller.getItems();
    menuItems[0].classList.add('active');


//  Event Listener.......

    window.addEventListener("keydown", function(e){
      var code = e.keyCode;

      switch (code) {
        case 37:
          break;
        case 38:
          var activeItem = controller.getActiveItem();
          var selector = document.getElementsByClassName('menu-cont__bullet')[0];
          var newState = selectPrev( menuItems, activeItem, selector, 7 );
          // updateWindowHash(newState.activeItemPosition);
          break;
        case 39:
          break;
        case 40:
          var activeItem = controller.getActiveItem();
          var selector = document.getElementsByClassName('menu-cont__bullet')[0];
          var newState = selectNext( menuItems, activeItem, selector, 7 );
          // updateWindowHash(newState.activeItemPosition);
          break;
      }
    })
    // First we check if you support touch, otherwise it's click:
    var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
    window.addEventListener(touchEvent, selectItem);


    updateWindowHash(0);

  }


  function selectItem( e ) {
    // arr, activeItem, target, bullet, lineHeight, con
    if (e.target.classList.contains("menu-cont__item")) {
      var target = e.target;
      var activeItem = document.getElementsByClassName("active")[0];
      var arr = controller.getItems();
      var state = arr.indexOf(activeItem);
      var lineHeight = 7;
      var bullet = document.getElementsByClassName('menu-cont__bullet')[0];
      activeItem.classList.remove('active');
      target.classList.add('active');
      activeItem = document.getElementsByClassName('active')[0];
      state = arr.indexOf(activeItem);
      updateWindowHash(state);
      bullet.style.marginTop = arr.indexOf(activeItem) * lineHeight + "rem";
      return {
        activeItem: activeItem,
        activeItemPosition: state
      }

    };
  }


  function selectPrev( arr, activeItem, bullet, lineHeight, con ) { // container optional
    con = con ? con : null;
    var state = arr.indexOf(activeItem);
    if ( state === 0 ) {
      return {
        activeItem: activeItem,
        activeItemPosition: state
      };
    } else {
      arr[state].classList.remove('active');
      arr[state-1].classList.add('active');
      activeItem = document.getElementsByClassName('active')[0];
      state = arr.indexOf(activeItem);
      // Adjust bullet
      bullet.style.marginTop = arr.indexOf(activeItem) * lineHeight + "rem";
      updateWindowHash(state);
      return {
        activeItem: activeItem,
        activeItemPosition: state
      }
    }
  }

  function selectNext( arr, activeItem, bullet, lineHeight, con ) { // container optional

    con = con ? con : null;
    var state = arr.indexOf(activeItem);
    var arrLength = arr.length
    if ( state === arrLength - 1 ) {
      return {
        activeItem: activeItem,
        activeItemPosition: state
      };
    } else {
      arr[state].classList.remove('active');
      arr[state+1].classList.add('active');
      activeItem = document.getElementsByClassName('active')[0];
      state = arr.indexOf(activeItem);
      bullet.style.marginTop = arr.indexOf(activeItem) * lineHeight + "rem";
      updateWindowHash(state);
      return {
        activeItem: activeItem,
        activeItemPosition: state
      };
    }
  }

  function updateWindowHash(activeItemPosition) {
    switch (activeItemPosition) {
      case 0:
        window.location.hash = '';
        onHashChange('');
        break;
      case 1:
        window.location.hash = 1;
        break;
      case 2:
        window.location.hash = 2;
        break;
      case 3:
        window.location.hash = 3;
        break;
    }
  }

  window.addEventListener("hashchange", onHashChange);

  function onHashChange(e){

    if (typeof e === 'string') {
      var newHashValue = e;
    } else {
      var oldHashValue = e.oldURL.split('#')[1];
      var newHashValue = e.newURL.split('#')[1];
    }
    var bullet = document.getElementsByClassName('menu-cont__bullet')[0];
    var arr = Array.prototype.slice.call(
      document.getElementsByClassName('menu-cont__item')
    );
    var lineHeight = 7;
    var activeItem = controller.getActiveItem();

    if (newHashValue === '' ) {
      var contentContainer = document.getElementsByClassName('content-cont')[0];
      renderContent(contentContainer, aboutContent);
    } else if (newHashValue === '1' ) {
      var contentContainer = document.getElementsByClassName('content-cont')[0];
      renderContent(contentContainer, workContent);
    } else if (newHashValue === '2' ) {
      var contentContainer = document.getElementsByClassName('content-cont')[0];
      renderContent(contentContainer, contactContent);
    } else if (newHashValue === '3' ) {
      var contentContainer = document.getElementsByClassName('content-cont')[0];
      renderContent(contentContainer, resumeContent);
    }

    bullet.style.marginTop = arr.indexOf(activeItem) * lineHeight + "rem";

  }

  function renderContent(container, content) {
    container.innerHTML = content;
  }

})( aboutContent, workContent, contactContent, resumeContent )
