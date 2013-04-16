var v_latitude;
var v_longitude;
Ext.define("Premio.view.MapView", {
    extend: "Ext.Map",
    xtype: 'mapview',
	id:'mapviewID',
    config: 
	{
        useCurrentLocation: true,
		mapOptions : 
		{
		    center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
		    zoom : 12,
		    mapTypeId : google.maps.MapTypeId.ROADMAP,
		    navigationControl: false,
		    navigationControlOptions: 
			{
		    	style: google.maps.NavigationControlStyle.DEFAULT
		    }
		},
        listeners: {
            maprender : function(comp, map){
                new google.maps.Marker({
                    //position: new google.maps.LatLng(this._geo.getLatitude(), this._geo.getLongitude()),
                   position: new google.maps.LatLng(37.381592, -122.135672),
				//	position: new google.maps.LatLng(this.v_latitude,this.v_longitude),
					map: map
                });
            }
        }
    },
	addMarkerOnMapAtPostion:function(latitude, longitude)
	{
			this.v_latitude = latitude;
			this.v_longitude = longitude;
			
			console.log('addMarkerOnMapAtPostion ' + this.v_latitude + this.v_longitude);
	}
});
//Ext.create('Premio.view.MapView');
