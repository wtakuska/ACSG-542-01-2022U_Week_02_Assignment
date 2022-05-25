function getReptileImg() {
    $(document).ready(function () {
        $("placeholder").replaceWith("<img src='https://loremflickr.com/320/240/snakes' alt='random snake image'>");
        $("placeholder2").replaceWith("<img src='https://loremflickr.com/320/240/lizard' alt='random lizard image'>");
        $("placeholder3").replaceWith("<img src='https://loremflickr.com/320/240/turtle' alt='random turtle image'>");
    })
}

getReptileImg();