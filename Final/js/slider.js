// Define prototypical Slider function
Element.prototype.Slider = function(){

  var slider = this;
  var wrapper = slider.children[0];
  var slides = wrapper.children;
  var position = 0;
  var index = 0;
  var width = window.innerWidth;
  var leftButton = document.createElement('div');
  var rightButton = document.createElement('div');


  var createButtons = function(){

    leftButton.classList.add('left');
    rightButton.classList.add('right');

    leftButton.addEventListener('mousedown',function(){
      if(position < 0) {
        index--;
        updateCurrentPage(index);
        position = position + width;
        wrapper.style.marginLeft = position + 'px';
      }
    });

    rightButton.addEventListener('mousedown',function(){
      if(position > (width * (slides.length - 1)) * -1) {
        index++;
        updateCurrentPage(index);
        position = position - width;
        wrapper.style.marginLeft = position + 'px';
      }
    });

      slider.appendChild(leftButton);
      slider.appendChild(rightButton);
    };

  var createPages = function(){
    var pages = document.getElementById('pages');

    for(var i = 0; i < slides.length; i++){
      var page = document.createElement('a')
      page.id = i;
      page.addEventListener('mousedown',function(){
        // goToPage(i);
      });

      page.className = 'page off';
      pages.appendChild(page);
    }

    pages.children[0].className = 'page on';
  };

  var updateCurrentPage = function(index){
    var pages = document.getElementById('pages');
    for(var i = 0; i < pages.children.length; i++){
      var page = pages.children[i];
      page.className = 'page off';
    }
    pages.children[index].className = 'page on';
  };

  var resize = function() {

    width = window.innerWidth;

    wrapper.style.width = width * slides.length + 'px';
    wrapper.style.marginLeft = '0px';

    for(var index=0; index < slides.length; index++){

       slides[index].children[0].style.width = width + 'px';
       slides[index].style.width = width + "px";
       slides[index].style.height = "500px"; //slides[index].children[0].clientHeight + "px";

       if(slides[index].children[0].clinetHeight <= slides[0].children[0].clientHeight || index===0){
         wrapper.style.height = slider.style.height = slides[index].children[0].clientHeight + "px";
         leftButton.style.marginTop = rightButton.style.marginTop = -1*(slides[index].children[0].clientHeight / 2) - 20 + 'px';
       }

     }

  };


  var init = function(){

    resize();
    createButtons();
    createPages();

    // find out how many images there are on the page
    var pages = document.getElementById('pages');

    window.addEventListener('resize',slider.resize);
  };

  init();


};
/* end Slider */
