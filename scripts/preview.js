var d = document;
var Content = d.getElementById("content");
var previewBox = function(ImgURL, Title, Description, URL) {
    return "<a target='_blank' href='" + URL + "'><div class='previewBox'>    <img src='" + ImgURL + "' class='image'>    <h4 class='title-previewBox'>" + Title + "</h4><p class='description-previewBox'> " + Description + "</p></div></a>";
};
function drawBoxes(array) {
    for (var i = 0; i < array.length; i++) {
        Content.innerHTML += previewBox(array[i].imgSrc, array[i].name, array[i].description, array[i].URL);
    }
}
