var cnt = util.executeReturnOneCol('select count(*) from user_tables where table_name = :t', {t: 'LOB_EXAMPLE'});

function execStmt(stmt) {
   sqlcl.setStmt(stmt);
   sqlcl.run();
}

if (cnt > 0) {
   print('Table lob_example exists, dropping it.');
   execStmt('drop table lob_example');
}

execStmt(
  'create table lob_example('            +
  '  filename varchar2(50) primary key,' +
  '  data     blob'                      +
  ')'
);
