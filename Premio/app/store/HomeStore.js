Ext.define('Premio.store.HomeStore', {
    extend: 'Ext.data.Store',
    requires: ['Premio.model.HomeModel','Premio.view.HomeView'],

    config: 
	{
        model: 'Premio.model.HomeModel',
		autoLoad: true,
		storeId:'getWishList',
 		proxy: 
		{
		       type: "ajax",
		       url : "http://54.235.108.246/cb2/api/wishlist?id=7&my_id=7&latitude=37.785835&longitude=-122.406418",
		       	withCredentials: false,
				useDefaultXhrHeader: false,
				headers: 
				{
				  "Accept": "application/json"
				},
		    	reader: 
				{
		           type: "json",
		           rootProperty:"list_items"
		        }
		},
    },
	listeners : 
	{
	      beforeload: function()
		  {
			//creating a global variable Pannel
			var panel = Ext.getCmp('wishList');
			if (panel) 
			{
			 	panel.getParent().setMasked({
					xtype:'loadmask',
					message:'Loading...'
			 	});
			}
			else
			{
				console.log("Panel Not Found");
			}
			console.log("before Load");
	      },
	      load: function() 
	      {
			var panel = Ext.getCmp('wishList');
			panel.getParent().unmask();
			console.log("after Load");
	      }
	    },
});