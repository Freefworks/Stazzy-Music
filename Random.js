var sites = [
'music-1.html', 
'music-2.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}