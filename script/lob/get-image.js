var images = util.executeReturnList('select filename, data from lob_example',{});

images.forEach(function(image) {

   print( image.FILENAME);

   var blobStream =  image.DATA.getBinaryStream(0);
   var path = java.nio.file.FileSystems.getDefault().getPath(image.FILENAME);

   java.nio.file.Files.copy(blobStream, path);

});
