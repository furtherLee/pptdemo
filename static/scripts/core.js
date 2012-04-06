(function($){

    $.mustache = function (template, view, partials) {
	return Mustache.render(template, view, partials);
    };
    
    $.fn.mustache = function (view, partials) {
	return $(this).map(function (i, elm) {
	    var template = $(elm).html().trim();
	    var output = $.mustache(template, view, partials);
	    return $(output).get();
	});
    };
    
})(jQuery);

/**
 * About-Us Setting
 */
$(function(){

    $("#about-modal").dialog({
	modal:true,
	autoOpen:false
    });
    
    $("#about-us").click(function(e) {
	$("#about-modal").dialog("open")
    });

});

/**
 * Tell Jokes
 */
$(function(){
    $("#joke-post").click(function(e) {
	var $box = $(Mustache.to_html(widgets.post,{},{}));
	$box.find('#cancel').click(function(e) {
	    $box.modal('hide');
	});
	$box.find("section").autoResize();
	$box.bind("posted", function(e) {
	    $box.modal('hide');
	});
	$box.draggable({handle: '.modal-header'}).modal('show').bind('hidden', function(e) {
	    $box.remove();
	});

	$box.find("#submit").click(function(e) {	    
	    $.ajax({
		type: 'POST',
		url: '/ppt/jokes',
		data: $box.find("#tell-jokes").serialize(),
		dataType: 'json',
		success: function(data, textStatus, jqXHR){
		},
		error: function(data, textStatus, jqXHR){
		},
		complete: function(data, textStatus, jqXHR){
		}
	    });
	    $box.modal("hide");
	});
    });
});

/**
 * up and down
 */
$(function(){

    $('.up').click(function(e){
	var that=$(this);
	$.ajax({
	    type: 'POST',
	    url: '/ppt/joke/'+that.attr('data')+'/up',
	    dataType: 'json',
	    success: function(data, textStatus, jqXHR){
		that.find('a').text(data.up);
	    },
	    error: function(data, textStatus, jqXHR){
		
	    }
	});
    });

    $('.down').click(function(e){
	var that=$(this);
	$.ajax({
	    type: 'POST',
	    url: '/ppt/joke/'+that.attr('data')+'/down',
	    dataType: 'json',
	    success: function(data, textStatus, jqXHR){
		that.find('a').text(data.down);
	    },
	    error: function(data, textStatus, jqXHR){
		
	    }
	});
	
    });
    
});