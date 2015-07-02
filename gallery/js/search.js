Element.prototype.Search = function() {
  var gallery = document.getElementById('gallery');
  var search = this;
  var input = this.children[0];


  //gallery.filterPhotos(query);


  // gallery.getFilteredList();
  // li.dataset.description = photo.description; in gallery.js
  // set the tags as data attributes called "datatags" in each <li> in the JSON (in gallery.js line 53-58)
  // when the user focuses on the input, clear its contents
  // after the user presses 'Enter/Return', filter the gallery <li> using tags from the JSON model.

this.init = function(){

  input.addEventListener('focus',function(){
    this.value = '';
  });
  
  input.addEventListener('keydown',function(ev){

    if(ev.keyCode === 13){
      var query = input.value;
      gallery.filterPhotos(query);
      }
    });
};

this.init();

};
