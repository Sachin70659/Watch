const currenttime = () => {
   
    let curtime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = curtime; // Corrected 'innertext' to 'innerText'
};
currenttime();
setInterval(() => {
    currenttime();
}, 1000);