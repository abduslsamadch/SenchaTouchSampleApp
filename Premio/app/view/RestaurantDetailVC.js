var restaurantMap = Ext.create('Premio.view.MapView');

Ext.define('Premio.view.RestaurantDetailVC', {
	extend: 'Ext.Container',
	xtype:'RestaurantDetailView',
	id:'RestaurantDetailViewID',
	
	config: 
	{
		layout: 'vbox',
	    items:
		[
			{
				xtype: 'panel',
			    html: '-',
				cls:'topBarForTutorial',
				id:'RestaurantDetailView_titleBar',
				flex:1
			},
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
						title:'wishList'
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
		var result = Ext.JSON.decode(response.responseText);
		console.log(result.status + result.businesses.business_title);
		
		Ext.getCmp('RestaurantDetailView_titleBar').setHtml(result.businesses.business_title);
		Ext.getCmp('RestaurantDetailView_businessImage').setSrc(result.businesses.business_img_url);
		Ext.getCmp('RestaurantDetailView_businessTitle').setHtml(result.businesses.business_title);
		Ext.getCmp('RestaurantDetailView_BusinessDetail').setHtml(result.businesses.business_address);
		Ext.getCmp('mapviewID').addMarkerOnMapAtPostion(result.businesses.business_latitude,result.businesses.business_longitude);
	}
	
});
Ext.create('Premio.view.RestaurantDetailVC');