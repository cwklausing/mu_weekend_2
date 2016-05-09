$(document).ready(function(){
    var muArray = [];
    var position = 0;

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        muArray = data.mu;
        makeIndex(muArray);
        changePosition();
        displayPerson(muArray[position]);
      }
    });

    $('.next').on('click', function() {
        position++;
        changePosition();
        displayPerson(muArray[position]);
    });

    $('.prev').on('click', function() {
        position--;
        changePosition();
        displayPerson(muArray[position]);
    });

    function makeIndex(array) {
        for(var i = 0; i <array.length; i++){
            $('.index').append('<span class="mu' + i + '">&bull;</span>');
        }
    }

    function changePosition() {
        if(position < 0) {
            position = muArray.length - 1;
        } else if (position > muArray.length - 1) {
            position = 0;
        }
        adjustIndex(position);
    }

    function displayPerson(person) {
        var $container = $('.container');
        $container.children().remove();
        $container.append('<div>' + person.name + '</div>' + '<div>' + person.git_username
                + '</div>' + '<div>' + person.shoutout + '</div>');
    }

    function adjustIndex(index) {
        $('.index').children().removeClass('active');
        $('.mu' + index).addClass('active');
    }
});
