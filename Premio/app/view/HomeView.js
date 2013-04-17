Ext.define('Premio.view.HomeView', {
	extend: 'Ext.navigation.View',
    fullscreen: true,
	require:[
		'Premio.store.HomeStore','Ext.Img','Premio.view.RestaurantDetailVC'
	],
	xtype:'MainView',
	id:'MainViewID',
	title:'Premio',
    config:
	{
		//layout:'vbox',
		navigationBar: 
		{
			//hidden:'yes',
		},
    	items: 
		[
			// {
			// 			   xtype: 'panel',
			// 			   html: 'Restaurants',
			// 			   cls:'topBarForTutorial',
			// 			   id:'HomeView_titleBar',
			// 			   flex:1
			// 			},
        	{
				xtype:'list',
				flex:3,
				id:'wishList',
				store:'getWishList',
			    
				itemTpl: new Ext.XTemplate(
					'<div id="CompleteCell" style="width:100%;float:left; height:160px;">',
					     '<div style"float:left; display:inline; width:80px; height:80px;"><img src="{business_img_url}" width="80"/></div>',
					     '<div style ="float:left; display:inline; height:80px; width:100%">',
					            '<div style="">{business_title}</div>',
					            '<div style="">{business_city}</div>',
								'<div style=""><input type="button" text="wishlist" width="50" img="{business_img_url}"></div>',
								'<div style="display:none;">{business_id}</div>',
					     '</div>',
					'</div>'),
					
			    listeners: 
			    {
			    	select: function(view, record) 
			    	{	
						/*	
						var detailView = Ext.getCmp('RestaurantDetailViewID');
						    if(!detailView)
						    {
						      detailView = new Premio.view.RestaurantDetailVC;
						    }
						    var data = record.get('business_id');
						    detailView.initializeView(data);
							Ext.getCmp('MainViewID').push(detailView);
							*/
						
						
							var detailView=Ext.ComponentQuery.query('#RestaurantDetailViewID')[0] || {
							            title:record.get('business_title'),
							            xtype:'RestaurantDetailView'
							        };
							Ext.getCmp('MainViewID').push(detailView);
							var data = record.get('business_id');
							Ext.getCmp('RestaurantDetailViewID').initializeView(data);
			    	}
			    }
        	}
    	]
  	},
	listeners: {
	        painted: function() {
	            console.log('I was painted to the screen');
	        }
	    }
});



//custom TPL

/*
itemTpl: new Ext.XTemplate(
      '<div class="row-wrap">',
      '<div class="pic">',//image div
      '<img class="img-userpic-invitelist" height=50 width=50 src="{[getProfileImage(values.fb_id)]}"/>',
      '</div> ',//end image div
      '<div class="img-plusone">',//+1 div
      '<tpl if="plus_one==1"><img src="resources/icons/img-plusone.png"></img></tpl>',
      '</div>',//end +1 div
      '<div class="name">',//name div
      '{name}',
      '</div>',//name div
      '</div>'//end main div
      ),
*/