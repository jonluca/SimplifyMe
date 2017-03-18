$(document).ready(function() {

    function showResults(data, code, jqXHR) {
        console.log(data);
        var title = $('#title');
        title.text(data.title);
        title.css({
            'font-family': 'Merriweather',
            'font-style': 'italic;'
        });

        var subtitle = $('#subtitle');
        subtitle.text(data.author);
        subtitle.css('font-family', 'Merriweather');


        $('#content').html(data.content);
        var images = document.getElementsByTagName('img');
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);
        }
    }


    $('#search').click(function() {
        console.log('search clicked');
        var url = document.getElementById('url');
        if (url.value == "") {
            alert("URL must be set!");
        } else {
            $.ajax({
                method: 'POST',
                url: "/search",
                type: 'json',
                data: {
                    url: url.value
                },
                success: showResults
            });
        }
    });

});