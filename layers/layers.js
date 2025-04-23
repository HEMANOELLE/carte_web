var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_SudOuest_1 = new ol.format.GeoJSON();
var features_SudOuest_1 = format_SudOuest_1.readFeatures(json_SudOuest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SudOuest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SudOuest_1.addFeatures(features_SudOuest_1);
var lyr_SudOuest_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SudOuest_1, 
                style: style_SudOuest_1,
                popuplayertitle: 'Sud-Ouest',
                interactive: true,
    title: 'Sud-Ouest<br />\
    <img src="styles/legend/SudOuest_1_0.png" /> BOUGOURIBA<br />\
    <img src="styles/legend/SudOuest_1_1.png" /> IOBA<br />\
    <img src="styles/legend/SudOuest_1_2.png" /> NOUMBIEL<br />\
    <img src="styles/legend/SudOuest_1_3.png" /> PONI<br />\
    <img src="styles/legend/SudOuest_1_4.png" /> <br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_SudOuest_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_SudOuest_1];
lyr_SudOuest_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Code': 'Code', });
lyr_SudOuest_1.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Code': 'TextEdit', });
lyr_SudOuest_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Nom': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Code': 'no label', });
lyr_SudOuest_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});