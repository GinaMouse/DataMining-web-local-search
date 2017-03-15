/*
    This code was necessary to:
    1. Create the initial index from the json data
    2. Write the index (stringified) to a .json file
 */

// require(['../node_modules/lunr/lunr.js'], function(lunr) {
//        createIndex();

// Create the index with desired fields
//        function createIndex() {
//            lyricsIndex = lunr(function () {
//                this.ref('Rank');
//
//                this.field('Song', { boost: 10 });
//                this.field('Artist', { boost: 10 });
//                this.field('Year');
//                this.field('Lyrics', { boost: 5 });
//            });
//        }

//        $.getJSON('../json/lyrics.json', function (data) {
//
//            for (var i = 1; i < data.length; i++) {
//
//                var doc = {
//                'Rank': data[i].FIELD1,
//                'Song': data[i].FIELD2,
//                'Artist': data[i].FIELD3,
//                'Year': data[i].FIELD4,
//                'Lyrics': data[i].FIELD5
//                };
//
//                store[doc.Rank] = {
//                    'Rank': doc.Rank
//                };
//
//                lyricsIndex.add(doc, true);
//            }
//            console.log(lyricsIndex);
//            console.log(typeof lyricsIndex);
//
//            var arr = JSON.stringify(lyricsIndex);
//            console.log(typeof arr);
//
//            var blob = new Blob([arr], {type: "json"});
//            saveAs(blob, "lyricsIndex.json");
//
//            var results = lyricsIndex.search("love is a battlefield");
//
//            console.log(results);
//
//            if (results.length == 0) {
//                console.log("No results found.");
//            } else {
//                for (var j = 0; j < results.length; j++) {
//                    document.getElementById("output").innerHTML += "<br>" +
//                        "<b> Rank: " + results[j].ref +
//                        store[results[j].ref].Song +
//                    "</b><br>" +
//                        "<br><br>";
//
//
//                }
//            }
//
//        });