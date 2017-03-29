// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:3857",wgs84Center:{lat:-31.5478489083,lon:-64.0869422436},proj:"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",title:"q2",baseExtent:[-7188165.46057,-3747445.4878,-7080086.09354,-3660762.54368],rotation:0,zShift:0.0,width:100.0,zExaggeration:9.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"srtm_24_19"}));
