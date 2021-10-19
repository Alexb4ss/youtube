alert('Page is loadedooooo');

window.addEventListener("load", function() {
    alert('Page is loaded');
});

window.onload = function exampleFunction() {
  alert('Page is loaded 2'); 
    // Function to be executed
    
window.addEventListener("loadstart", function() {
  alert('Page is loaded3');
});
