Ext.create('Premio.view.MapView');

Ext.define('Premio.view.RestaurantDetailVC', {
	extend: 'Ext.Container',
	xtype:'RestaurantDetailView',
	id:'RestaurantDetailViewID',
	
	config: 
	{
		layout: 'vbox',
		navigationBar: 
		{
			hidden:'yes',
		},
	    items:
		[/*
			{
				xtype: 'panel',
				cls:'topBarForTutorial',
				flex:1,
				layout:'hbox',
				//id:'titleBarContainer',
				id:'RestaurantDetailView_titleBar',
				items:
				[
					{
						xtype: 'button',
						ui:'back',
					    text: 'back',
						width:90,
						height:30,
						listeners: 
						{
						   tap: function() 
						   {
						      	Ext.getCmp('MainViewID').pop();
						   }
						}
					}// ,
					// 					{
					// 						xtype: 'panel',
					// 					    html: '-',
					// 						id:'RestaurantDetailView_titleBars',
					// 						flex:8,
					// 					}	
				]
			},*/
			{
				layout:'hbox',
				flex:2,
				items:
				[
					{
						xtype:'image',
						id:'RestaurantDetailView_businessImage',
						src:'',
						width:'100%',
						height:'100%',
						flex:1
					},
					{
						layout:'vbox',
						flex:4,
						items:
						[
							{
								xtype: 'panel',
							    html: '-',
								id:'RestaurantDetailView_businessTitle',
								flex:1
							},
							{
								xtype: 'panel',
							    html: '-',
								id:'RestaurantDetailView_BusinessDetail',
								flex:1
							}
						]
					},
					{
						xtype:'button',
						title:'wishList',
						width:20,
						height:20,
						cls:'wishListBtnClass',
					}
				]
			},
			{
				xtype:'mapview',
	//			useCurrentLocation:true,
				flex:7
			}
		]
	},
	initializeView:function(bus_id)
	{
		console.log("business_id = "+bus_id);
		this.intiateRequestForBussinessDetailsForID(bus_id);
		//window.onload = this.loadGM;
		// 
		
		var panel = Ext.getCmp('RestaurantDetailViewID');
		panel.getParent().setMasked
		({
			xtype:'loadmask',
			message:'Loading...',
			//	indicator: true
		});		
	},
	intiateRequestForBussinessDetailsForID:function(bus_id)
	{
				console.log("intiateRequestForBussinessDetailsForID = "+bus_id);
				
				var obj = this;
				Ext.Ajax.request
				({
					url:'http://54.235.108.246/cb2/api/business?id='+bus_id+'&user_id=7&latitude=37.785835&longitude=-122.406418',
					withCredentials: false,
					useDefaultXhrHeader: false,
					headers: 
					{
						"Accept": "application/json"
					},
					success: function(response) 
					{
						obj.populateUserInterfaceItemsFromResonseObject(response);
					},
					failure: function(response) 
					{
						console.log("ERROR");
					}
				});
	},
	populateUserInterfaceItemsFromResonseObject:function(response)
	{
		var panel = Ext.getCmp('RestaurantDetailViewID');
		panel.getParent().unmask();
		
		var result = Ext.JSON.decode(response.responseText);
	//	Ext.getCmp('RestaurantDetailView_titleBar').setHtml(result.businesses.business_title);
		Ext.getCmp('RestaurantDetailView_businessImage').setSrc(result.businesses.business_img_url);
		Ext.getCmp('RestaurantDetailView_businessTitle').setHtml(result.businesses.business_title);
		Ext.getCmp('RestaurantDetailView_BusinessDetail').setHtml(result.businesses.business_address);
		Ext.getCmp('mapviewID').addMarkerOnMapAtPostion(result.businesses.business_latitude,result.businesses.business_longitude);
	//	Ext.getCmp('HomeView_titleBar').setHidden=true;
	}
	
});
Ext.create('Premio.view.RestaurantDetailVC');