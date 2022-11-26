window.addEventListener("load", ()=>{
    
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => console.log("yoo, Service worker registered"))
      .catch((error) => console.log("Service worker not registered", error));
  }


})