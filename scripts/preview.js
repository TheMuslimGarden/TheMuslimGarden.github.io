var d=document;
    var Content=d.getElementById("content");
    var previewBox=function(ImgURL,Title,Description,URL){
        return "<a target='_blank' href='"+URL+"'><div class='videoBox'>    <img src='"+ImgURL+"' class='image'>    <h4>"+ Title+"</h4><p> "+Description+"</p></div></a>";
    };
    function drawBoxes(array){
    for(var i=0; i<array.length; i++){
    Content.innerHTML+=previewBox(array.imgSrc,array.name,array.description,array.URL);
    }
    }
