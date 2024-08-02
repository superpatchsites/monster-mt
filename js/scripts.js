function handleShare(platform) {
	const shareData = {
		title: 'Check out this contest!',
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


