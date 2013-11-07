$(":button").click(function() {
    var isbn = this.id;
    alert('About to report lost on ISBN ' + isbn);
    $.ajax({
    url: "/library/v1/books/"+isbn+"?status=lost",
    type: 'PUT',
    contentType: 'application/json',
    success: function(result) {
    	var btn = document.getElementById(isbn);
    	btn.disabled = true;
    	window.location.reload();
    }
    });
});