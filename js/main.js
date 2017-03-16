
//    var lyricsIndex;
//    var storage = {};
//
//    require(["../node_modules/lunr/lunr.js"], function(lunr) {
//        createIndex();
//
//        //Create the index with desired fields
//        function createIndex() {
//            lyricsIndex = lunr(function () {
//                this.field('Song');
//                this.field('Artist');
//                this.field('Rank', { boost: 10 });
//                this.field('Year');
//                this.ref('Lyrics');
//            });
//        }
//
//        $.getJSON('../json/lyrics.json', function (data) {
//
//            for (var i = 1; i < data.length; i++) {
//
//                var doc = {
//                    'Rank': data[i].FIELD1,
//                    'Song': data[i].FIELD2,
//                    'Artist': data[i].FIELD3,
//                    'Year': data[i].FIELD4,
//                    'Lyrics': data[i].FIELD5
//                };
//
//                storage[doc.Lyrics] = {
//                    'Rank': doc.Rank,
//                    'Song': doc.Song,
//                    'Artist': doc.Artist,
//                    'Year': doc.Year
//                };
//
//                lyricsIndex.add(doc, true);
//            }
//            console.log(lyricsIndex);
//
//            var arr = JSON.stringify({
//                index: lyricsIndex,
//                store: storage
//            });
//
//            var blob = new Blob([arr], {type: "json"});
////            saveAs(blob, "lyricsIndex.json");
//
//            var results = lyricsIndex.search("battlefield");
//
//            console.log(results);
//
//            if (results.length == 0) {
//                console.log("No results found.");
//            } else {
//                for (var j = 0; j < results.length; j++) {
//                    document.getElementById("output").innerHTML += "<br>" +
//                        "<b> Song Title: " + storage[results[j].ref].Song +
//                        " Rank: " +
//                        [results[j].ref].Rank + " Year: " +
//                        storage[results[j].ref].Year + " Artist: " +
//                        storage[results[j].ref].Artist +
//                        "</b><br>" +
//                        "<br><br>";
//
//
//                }
//            }
//
//        });
//
//    });