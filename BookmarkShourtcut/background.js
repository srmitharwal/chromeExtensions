chrome.commands.onCommand.addListener(function (command){
	

	if(command=="tab-change"){

		chrome.windows.getCurrent({populate:true},function(currWindow){
			
			currWindow.tabs.filter(function(tab){

				if(tab.active==true){
					chrome.bookmarks.create({ 'parentId':'1',
                        'title': tab.title,
                        'url':tab.url},
                         function(newFolder) {
      				});

				}
				
			});
			
		});
	
	}
});

  

