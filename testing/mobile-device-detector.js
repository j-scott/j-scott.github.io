
// detect if site is being viewed on mobile device
if( /Android|webOS|iPhone|iPad|iPod
	|BlackBerry|IEMobile|Opera Mini
	/i.test(navigator.userAgent) ) 

// display page content normally if mobile device 
	{	}

// forward to main site if mobile device not detected  
else {
	window.location = "insert-main-site-url-here";
}













