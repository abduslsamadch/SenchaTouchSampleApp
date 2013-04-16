Ext.define('Premio.controller.Application', {
    extend: 'Ext.app.Controller',

    config: 
	{
		refs: 
		{
		    nav: '#mainNav'
		},
        control: 
		{
            'kittenslistitem slider': {
                                       change: 'onCutenessChange'
                                   },
			'button[action=openDetailRestaurantView]': {
			            tap: 'displayRestaurantDetailView'
			        }
        }
    },
	
	displayRestaurantDetailView: function() 
	{
		var detailView = Ext.getCmp('RestaurantDetailViewID');
		if(!detailView)
		{
		   detailView = new Premio.view.RestaurantDetailVC;
		}
   		Ext.Viewport.setActiveItem(detailView);
	}
});





/*

Ext.define("Hoodere.controller.Hoodere", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
    },
    routes:{
      'hoodere':'showHoodere'
    }
  },
  init: function() {
    this.control({
      '#mutualFriendsId':{
        itemtap:'onMutualFriendItemTap'
      },
      'button[action=hoodereFriendsAround]':{
        tap:'onHoodereFriendsAround'
      },
      'button[action=hooderePlansAround]':{
        tap:'onHooderePlansAround'
      }
    });
  },
  showHoodere:function(id)
  {
//    loadMask(1);
//    Ext.Ajax.request({
//      url: PROXY.URL+'feeds/plan_detail/id/'+id+'/user_id/'+sessionStorage.getItem('FBCRED.UID')+'/',
//      method: 'get',
//      success: function(response){
//        var responseObj = Ext.JSON.decode(response.responseText);
        var hoodere = Ext.getCmp('hoodereId');
        if(!hoodere)
        {
          hoodere = new Hoodere.view.Hoodere_Views.Hoodere;
        }
        hoodere.initializeView('');
        Ext.Viewport.animateActiveItem(hoodere,getAnimation(sessionStorage.getItem('animation_for_view')));
//      },
//      failure: function(response){
//        loadMask(0);
//        Ext.Msg.alert('service request failed');
//        console.log(response);
//      }
//    });
  },
  onHoodereFriendsAround:function(id)
  {
      Ext.getStore('peopleAroundStoreId').getProxy().setUrl(PROXY.URL+'feeds/friends/id/'+sessionStorage.getItem('FBCRED.UID'));
      Ext.getStore('peopleAroundStoreId').loadPage(1);
      Ext.getCmp('hoodereInnerViewportId').animateActiveItem('peopleAround',getAnimation('left'));
  },
  onHooderePlansAround:function(id)
  {
      Ext.getStore('planAroundStoreId').getProxy().setUrl(PROXY.URL+'feeds/friends_plans/id/'+sessionStorage.getItem('FBCRED.UID')+'?arnd_me='+1+'&p_type=friends&order=start_time');
      Ext.getStore('planAroundStoreId').loadPage(1);
      Ext.getCmp('hoodereInnerViewportId').animateActiveItem('planAround',getAnimation('left'));
  }
});
*/