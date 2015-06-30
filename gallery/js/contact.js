Element.prototype.Contact = function() {

  var contact = this,
    form = document.getElementById('c_form'),
    submit = document.getElementById('contact-submit'),
    wrapper = document.getElementById('form-wrapper');

  this.send = function() {
    // collect all the forms information
    var link = 'mailto:jaqtann@gmail.com?subject=Message from '+
                form.children[0].value+
                '&body='+
                form.children[3].value;

    window.location.href = link;
    // send the content via email
    // leave some feedback that the form has been submitted
    wrapper.innerHTML = '<div class="center"><h2>Thanks!</h2></div>';
  };

  console.log('contact!');

  this.init = function() {
    // add an eventlistener on the button which sends the form!
    submit.addEventListener('click',function(ev){
      ev.preventDefault();
      contact.send();
    });
  };

  this.init();

};
