require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
    const webmap = new WebMap({
     portalItem: {
      id: "6813c70f4146498db3891e37543ba0ec"
     }
    });
   
    const view = new MapView({
     map: webmap,
     container: "viewDiv"
    });
   
    const clickButton = document.getElementById('clickButton');
    clickButton.addEventListener('click', () => {
     const currentZoom = view.zoom;
     const newZoom = currentZoom + 1;
     view.zoom = newZoom;
    });
   });