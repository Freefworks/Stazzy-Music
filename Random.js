var sites = [
'music-1.html', 
'music-2.html',
'music-3.html',
'music-4.html',
'music-5.html',
'music-6.html',
'music-7.html',
'music-8.html',
'music-9.html',
'music-10.html',
'music-11.html',
'music-12.html',
'music-13.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}