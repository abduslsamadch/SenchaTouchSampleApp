
Ext.define('Premio.view.Tutorial', {
	extend: 'Ext.Carousel',
    fullscreen: true,
	require:[
		'Premio.view.pageOne', 'Premio.view.pageTwo'
	],
	
    config:
	{
    	items: 
		[
        	{
				xtype:'tutorialPageOne',      
				style: 'background-image:url(\'resources/images/ViewBg.png\');'
        	}
			,
        	{
            	xtype:'tutorialPageTwo',
                style: 'background-image:url(\'resources/images/ViewBg.png\');'
        	}
    	]
  }
});
