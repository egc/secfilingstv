$(function() {
	var ytapiurl_featuredvideos = 'https://gdata.youtube.com/feeds/api/playlists/PLDVTUrLPjtm65as2MNdCjUNRoGQ0Ou50G?alt=json&max-results=1';
	var ytapiurl_executiveinterviews = 'https://gdata.youtube.com/feeds/api/playlists/PLDVTUrLPjtm4d76yJ4-oDEOqBkBTsFW3Z?alt=json&max-results=2';
	var htmlStringFeature = '';
	var htmlStringExecutive = '';
	
	$.getJSON(ytapiurl_featuredvideos, function(data) {
		$.each(data.feed.entry, function(i, item) {
			var title = item['title']['$t'];
			var link = item['link'][0]['href'];
			var thumbnail = item['media$group']['media$thumbnail'][0]['url'];
			var description = item['content']['$t'];
			var views = item['yt$statistics']['viewCount'];
			
			htmlStringFeature += '<div class="three-fourth"><div style="width:700px; min-height:300px;"><a class="fancybox-media" href="'+link+'"><img src="'+thumbnail+'" style="width:700px; height:300px;"></a></div></div>';
			htmlStringFeature += '<div class="one-fourth last"><h4>'+title+'</h4><ul class="post-meta"><li><i class="icon-user"></i>'+views+' Views</li></ul><p>'+description.substr(0,200)+'...</p></div>';
		
		});
		$('#feature-video').html(htmlStringFeature);
	});
	
	$.getJSON(ytapiurl_executiveinterviews, function(data) {
		$.each(data.feed.entry, function(i, item) {
			var title = item['title']['$t'];
			var link = item['link'][0]['href'];
			var thumbnail = item['media$group']['media$thumbnail'][0]['url'];
			var description = item['content']['$t'];
			var views = item['yt$statistics']['viewCount'];
			var last = '';
			
			if (i == 1) { last = 'last'; };
			
			htmlStringExecutive += '<div class="blog-post layout-3 '+last+'"><div class="media-holder"></div><span class="media-holder"><div style="width:340px; min-height:200px;"><a class="fancybox-media" href="'+link+'"><img src="'+thumbnail+'" style="width:340px; height:200px;"></a></div></span>';
			htmlStringExecutive += '<div class="permalink"><h4><a class="fancybox-media" href="'+link+'">'+title+'</a></h4></div>';
			htmlStringExecutive += '<ul class="post-meta"><li><i class="icon-user"></i>'+views+' Views</li></ul>';
			htmlStringExecutive += '<div class="post-intro"><p>'+description.substr(0,200)+'...</p></div></div>';
		});
		$('#executive-videos').html(htmlStringExecutive);
	});
	
	$('.fancybox-media').fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		helpers : {
			media: {}
		}
	});
});