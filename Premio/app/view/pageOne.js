
Ext.define('Premio.view.pageOne', {
	extend: 'Ext.Panel',
    fullscreen: true,
	xtype: ['tutorialPageOne'],
	
	config: 
	{
	    fullscreen: false,
		layout: 'vbox',
	    items:
		[
				{
					xtype: 'panel',
				    html: 'Premio',
					cls:'topBarForTutorial'
				},
				{
					xtype: 'panel',
				    html: '<div style="text-align:center;"><h1>About.</h1></div>'
				},
				{
					xtype: 'panel',
				    html: '<div style="text-align:center; font-size:12px; ">asidhjaklsdj dklsjas dlkjas ldkja ldkjasldk jaldk jalksdj aklsdj alkdjlaksdjl aksdj alskdjalskdj alsdkjalsk djalskdjas ldkjaklsdjaklsdjaklsdjakfhdsajklfh adklsfhdlsj fh</div>',
				},
				{
					xtype: 'image',
					id : 'navigation',
					src:'resources/images/navigationIcon.png',
				//	height:100
					cls:'newClass'	
				}						
		]
	}
});
Ext.create('Premio.view.pageOne');