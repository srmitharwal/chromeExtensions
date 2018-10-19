chrome.browserAction.onClicked.addListener(function(tab){

	 chrome.bookmarks.create({ 'parentId':'1',
                               'title': tab.title,
                           		'url':tab.url},
                              function(newFolder) {
        console.log("added folder: " + newFolder.title);
      });

});


chrome.commands.onCommand.addListener(function (command){
	if(command=="tab-change"){
		chrome.windows.getCurrent({populate:true},function(currWindow){
			var index=currWindow.id;
			console.log(currWindow);
				//console.log(windows);
			chrome.windows.getAll({populate:true}, function (windows){
				var size=windows.length;
				console.log(windows);
				for(var i=0;i<size;i++){
					if(windows[i].id==currWindow.id){
						chrome.windows.update(currWindow.id,{focused:false},function(updatedWindow){
							console.log(updatedWindow);
							console.log("window changed");
						});
							
						chrome.windows.update(windows[(i+1)%size].id,{focused:true},function(updatedWindow){
							console.log(updatedWindow);
							console.log("window changed");
						});
						return;
					}
				}
			});
		});
	}
});

  

