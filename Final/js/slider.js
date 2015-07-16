// Define prototypical Slider function
Element.prototype.slider = function(){

  var slider = this;
  var wrapper = slider.children[0];
  var slides = wrapper.children;
  var position = 0;
  var width = window.innerWidth;
  var leftButton = document.createElement('div');
  var rightButton = document.createElement('div');


  this.createButtons = function(){

    leftButton.classList.add('left');
    rightButton.classList.add('right');


    leftButton.addEventListener('mousedown',function(){
      if(position > (width * (slides.length - 1)) * -1) {
        position = position - width;
        wrapper.style.marginLeft = position + 'px';
      }
    });

    rightButton.addEventListener('mousedown',function(){
      if(position < 0) {
        position = position + width;
        wrapper.style.marginLeft = position + 'px';
      }
    });

      slider.appendChild(leftButton);
      slider.appendChild(rightButton);
    };

  this.resize = function() {

    width = window.innerWidth;

    wrapper.style.width = width * slides.length + 'px';
    wrapper.style.marginLeft = '0px';

    for(var index=0; index < slides.length; index++){

       slides[index].children[0].style.width = width + 'px';
       slides[index].style.width = width + "px";
       slides[index].style.height = slides[index].children[0].clientHeight + "px";

       if(slides[index].children[0].clinetHeight <= slides[0].children[0].clientHeight || index===0){
         wrapper.style.height = slider.style.height = slides[index].children[0].clientHeight + "px";
         leftButton.style.marginTop = rightButton.style.marginTop = -1*(slides[index].children[0].clientHeight / 2) - 20 + 'px';
       }

     }

  };


  this.init = function(){

    slider.resize();
    slider.createButtons();

    window.addEventListener('resize',slider.resize);
  };

  this.init();


};
/* end Slider */
