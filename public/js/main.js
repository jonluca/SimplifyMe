$(document).ready(function() {

    function showResults(data, code, jqXHR) {
        console.log(data);

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