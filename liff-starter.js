window.onload = function (e) {
    liff.init((data)=>{
		var urlParams = new URLSearchParams(window.location.search);
		liff.sendMessages([
			{
				type:'flex',
				altText:'flex message',
				contents: urlParams.get('flex')
			}
		]);
    liff.closeWindow();
	});
};