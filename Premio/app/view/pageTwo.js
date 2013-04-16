
Ext.define('Premio.view.pageTwo', {
	extend: 'Ext.Panel',
    fullscreen: true,
	xtype: ['tutorialPageTwo'],
	require:[
		'Ext.field.Toggle'
	],
	config: 
	{
	    fullscreen: false,
		layout: 'vbox',
		scrollable : true,
		
	    items:
		[
				{
					cls:'containerClass',
					layout:
					{
						type:'hbox',
						align:'center'
					}
					,
				    items:
					[
						{
							xtype: 'panel',
						    html: 'Premio',
							cls:'topBarForTutorial',
							flex:6
						}
						,
						{
							xtype: 'button',
							width:20,
							text:'Done',
							flex:1,
							listeners: 
							{
							    tap: function() 
								{
							       alert("You tapped me");
							    }
							}
						}
					]
				},
				{
					xtype: 'panel',
				    html: '<div style="text-align:center;"><h1>Claim Offers.</h1></div>'
				}
				,
				{
					xtype: 'panel',
				    html: '<div style="text-align:center; font-size:12px; ">Search nearby restaurants and claim offers like free appetizers and drinks</div>',
					bodyPadding:15
				}
				,
				{
					style:{marginTop:'10px'},
					xtype: 'image',
					id : 'apetizer',
					src:'resources/images/freeApetizer.png',
					height:100
				}
				,
				{
					cls:'containerClass',
					defaults:
					{
						flex:1
					},
					layout:
					{
						type:'hbox',
						align:'center'
					}
					,
				    items:
					[
							{
								layout:
								{
									type:'vbox',
									align:'center'
								},
								xtype: 'panel',
								html:'<div style="text-align:center; font-size:12px; ">Offer Radar</div>'
							}
							,
							{
								layout:
								{
									type:'vbox',
									align:'center'
								},
								xtype: 'togglefield'
							}
					]
				}
				,
				{
				//		style:{marginTop:'10px'},
						xtype: 'panel',
						//	bodyMargin: '10 5 5 5',
							bodyPadding: 15,
					    html: '<div style="text-align:center; font-size:12px; ">Premio will automatically send you offers that are nearby so that you won\'t have to do anything.</div>',
				}				
		]
	}
});
Ext.create('Premio.view.pageTwo');