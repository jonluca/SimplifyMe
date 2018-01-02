$(document).ready(function() {


    $("#url").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#simplify").click();
        }
    });
    function showResults(data, code, jqXHR) {
        console.log(data);
        var dateObject = new Date(Date.parse(data.date_published));


        var title = $('#title');
        title.text(data.title);
        title.css({
            'font-family': 'Merriweather',
            'font-style': 'italic;'
        });

        var subtitle = $('#subtitle');
        subtitle.text(data.author + ' | ' + dateObject.toDateString());
        subtitle.css('font-family', 'Merriweather');


        $('#content').html(data.content);
        var images = document.getElementsByTagName('img');
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);
        }

        $('#wordcount').html(data.word_count + ' words | &copy; <a href="https://mercury.postlight.com/">Postlight Labs</a>');
    }


    $('#simplify').click(function() {
        console.log('search clicked');
        var url = document.getElementById('url');
        if (url.value == "") {
            alert("URL must be set!");
        } else {
            $.ajax({
                method: 'POST',
                url: "search",
                type: 'json',
                data: {
                    url: url.value
                },
                success: showResults
            });
        }
    });

});