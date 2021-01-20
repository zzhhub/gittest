$.ajax({
    url: 'http://www.bai.com',
    dataType: 'json',
    success: function(data) {
        console.log(data)
    }
})
$.ajax({
    url: 'http://www.graph.com',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        $(".content").html(data.content);
    }
})
$.ajax({
    url: 'http://www.tu.com',
    dataType: 'json',
    success: function(data) {
        console.log(data)
    }
})