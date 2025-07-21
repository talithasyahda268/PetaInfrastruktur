var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Infrastruktur_1 = new ol.format.GeoJSON();
var features_Infrastruktur_1 = format_Infrastruktur_1.readFeatures(json_Infrastruktur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_1.addFeatures(features_Infrastruktur_1);
var lyr_Infrastruktur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_1, 
                style: style_Infrastruktur_1,
                popuplayertitle: "Infrastruktur",
                interactive: true,
                    title: '<img src="styles/legend/Infrastruktur_1.png" /> Infrastruktur'
                });

lyr_OSMStandard_0.setVisible(true);lyr_Infrastruktur_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Infrastruktur_1];
lyr_Infrastruktur_1.set('fieldAliases', {'No': 'No', 'Nama': 'Nama', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'X': 'X', 'Y': 'Y', 'Path_Foto': 'Path_Foto', 'Nama_Foto': 'Nama_Foto', });
lyr_Infrastruktur_1.set('fieldImages', {'No': 'Range', 'Nama': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Path_Foto': 'TextEdit', 'Nama_Foto': 'TextEdit', });
lyr_Infrastruktur_1.set('fieldLabels', {'No': 'hidden field', 'Nama': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Path_Foto': 'hidden field', 'Nama_Foto': 'no label', });
lyr_Infrastruktur_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});