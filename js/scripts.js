async function activateModal(){
	await new Promise(r => setTimeout(r,1000));
	document.querySelector("a[href='https://www.monsters-are-real.com/#termsAndConditionsModal']").addEventListener("click",function(e){
		e.preventDefault();
		document.querySelector("[data-bs-target='#termsAndConditionsModal']").click();
	})
}
if (window.location.hash) {
	var modalId = window.location.hash.substring(1);
	var modalElement = document.getElementById(modalId);
	if (modalElement) {
		var modal = new bootstrap.Modal(modalElement);
		modal.show();
	}
}
function handleShare(platform) {
	const shareData = {
		title: 'Enter for a Chance to Win!',
		url: 'https://monsters-are-real.com/',
	};

	if (navigator.share) {
		navigator.share(shareData).catch((error) => console.error('Error sharing:', error));
	} else {
		navigator.clipboard.writeText(shareData.url)
			.then(() => alert('Link copied to clipboard'))
			.catch((error) => console.error('Error copying to clipboard:', error));
	}
}

document.getElementById('shareButton').addEventListener('click', () => handleShare('default'));
// document.getElementById('shareFacebook').addEventListener('click', () => handleShare('facebook'));
// document.getElementById('shareTwitter').addEventListener('click', () => handleShare('twitter'));
document.getElementById('shareInstagram').addEventListener('click', () => handleShare('instagram'));


