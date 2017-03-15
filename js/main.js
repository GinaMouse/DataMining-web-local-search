// /*
//     This code was necessary to:
//     1. Create the initial index from the json data
//     2. Write the index (stringified) to a .json file
//  */
// CREATE INDEX
// var lyricsIndex;
// var store = {};
//
// require(['../node_modules/lunr/lunr.js'], function(lunr) {
//     createIndex();
//
//     //Create the index with desired fields
//     function createIndex() {
//         lyricsIndex = lunr(function () {
//             this.field('Song');
//             this.field('Artist');
//             this.field('Rank');
//             this.field('Year');
//             this.ref('Lyrics');
//         });
//     }
//
//     $.getJSON('../json/lyrics.json', function (data) {
//
//         for (var i = 1; i < data.length; i++) {
//
//             var doc = {
//                 'Rank': data[i].FIELD1,
//                 'Song': data[i].FIELD2,
//                 'Artist': data[i].FIELD3,
//                 'Year': data[i].FIELD4,
//                 'Lyrics': data[i].FIELD5
//             };
//
//             store[doc.Lyrics] = {
//                 'Rank': doc.Rank,
//                 'Song': doc.Song,
//                 'Artist': doc.Artist,
//                 'Year': doc.Year
//             };
//
//             lyricsIndex.add(doc, true);
//         }
//         console.log(lyricsIndex);
//
//         var arr = JSON.stringify({
//             index: lyricsIndex,
//             store: store
//         });
//
//         var blob = new Blob([arr], {type: "json"});
//         saveAs(blob, "lyricsIndex.json");
//
//         var results = lyricsIndex.search("battlefield");
//
//         console.log(results);
//
//         if (results.length == 0) {
//             console.log("No results found.");
//         } else {
//             for (var j = 0; j < results.length; j++) {
//                 document.getElementById("output").innerHTML += "<br>" +
//                     "<b> Song Title: " + store[results[j].ref].Song +
//                     " Rank: " +
//                     store[results[j].ref].Rank + " Year: " +
//                     store[results[j].ref].Year + " Artist: " +
//                     store[results[j].ref].Artist +
//                     "</b><br>" +
//                     "<br><br>";
//
//
//             }
//         }
//
//     });
//
// });