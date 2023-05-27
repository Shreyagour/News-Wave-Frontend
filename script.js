    window.onload=function(){
	const myImages = [
        "https://s3.envato.com/files/9a1db196-e079-4e50-b4cd-0150575d5b4d/inline_image_preview.jpg",
        "https://static.dw.com/image/47219195_605.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4fa64632869027.5696ac24e087f.jpg",
        "https://thumbs.dreamstime.com/b/hand-holding-global-network-using-modern-medical-health-care-interface-100859410.jpg",
        "https://www.ripplesnigeria.com/wp-content/uploads/2020/03/Latest-tech-news3.jpg",
        "https://thumbs.dreamstime.com/b/sports-news-broadcast-graphics-title-graphic-main-hd-seamless-looping-video-animation-see-all-other-elements-series-to-43669416.jpg"
    ];
    const readersImages = [
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "https://wallpapercave.com/wp/wp11131044.jpg",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ];

    let counter = 0;
    const imageCount = myImages.length;
   
    const imgCount = readersImages.length;
    let i = 0;

    const headerElement = document.getElementById("header");
    const imageElements = document.getElementById("humanImg");

    // Header background image rotator
    headerElement.style.backgroundImage = `url(${myImages[0]})`;
    setInterval(slider, 3000);

    function slider() {
        counter++;
        if (counter === imageCount) {
            headerElement.style.backgroundImage = `url(${myImages[0]})`;
            counter = 0;
        } else {
            headerElement.style.backgroundImage = `url(${myImages[counter]})`;
        }
    }
	let count = 1;
$(`#readers div p:nth-child(${count})`).show(); //to show first para

setInterval(contentRotator, 7000);


    function contentRotator() {
        count++;
        if (count >= imgCount) {
			$(`#readers div p`).hide();
        $(`#readers div p:nth-child(${count})`).show();
            count = 0;	
        }
		else{
			$(`#readers div p`).hide();
			$(`#readers div p:nth-child(${count})`).show();
		}
        
    }

    // Image changer
    changer(); // Call changer() initially to set the first image immediately
    setInterval(changer, 7000); // Call changer() every 7 seconds to change the image

    function changer() {
        imageElements.src = readersImages[i];
        i++;
        if (i === imgCount) {
            i = 0;
        }
    }
// });
}
