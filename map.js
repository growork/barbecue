ymaps.ready(init);
var myMap, 
    myPlacemark;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [59.858265, 30.149173],
        zoom: 13
    }); 
    
    myPlacemark = new ymaps.Placemark([59.858265, 30.149173], {
        hintContent: 'Финский залив!',
        balloonContent: 'Хорошее место для отдыха'
    });
    
    myMap.geoObjects.add(myPlacemark);
}