function putImage(filename) {

   var blob   = conn.createBlob();
   var stream = blob.setBinaryStream(0);
   var path   = java.nio.file.FileSystems.getDefault().getPath(filename);
   java.nio.file.Files.copy(path, stream);
   stream.flush();

   var ret=util.execute(
      'insert into lob_example(filename, data) values (:filename , :data)',
      { filename: filename,
        data    :  blob }
   );

   if (!ret) {
      print('Something unintended happened.');
   }

}

putImage('1000x650.png');
conn.commit();
