window.onload = function (e) {
    liff.init((data)=>{
		var urlParams = new URLSearchParams(window.location.search);
		alert(urlParams.get('flex'));
		alert(JSON.parse(urlParams.get('flex')));
		liff.sendMessages([
			{
				type:'flex',
				altText:'flex message',
				contents: JSON.parse(urlParams.get('flex'))
			}
		]);
    liff.closeWindow();
	});
};