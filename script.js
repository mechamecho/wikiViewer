/*global $*/
$(document).ready(function(){
    $("#searchWikipedia").submit(function(event){
        event.preventDefault();
        var url="https://en.wikipedia.org/w/api.php";
        var format="json";
        var action="query";
        var list="search";
        var origin="*";
        var srsearch=$("#query").val();
        var data={action:action,format:format, list:list, srsearch:srsearch, origin:origin };
        $.ajax({
            url:url, 
            data:data,
            success:function(response){
                console.log(response);
                var html="<ul class='list-group'>"
                var results=response.query.search;
                $.each(results, function(index,item){
                    html+="<li class='list-group-item'><h2><a href='#'>"+item.title+"</a></h2></li><li class='list-group-item'><em>"+item.snippet+"</em></li>";    
                });
                html+="</ul>"
                $("#search-results").html(html);
            }
        })
    })    
})