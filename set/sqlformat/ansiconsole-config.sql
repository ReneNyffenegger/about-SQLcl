set sqlformat ansiconsole -config=highlight.json

select * from (values
  (  1, 'one'          , 'abc'         ),
  (800, 'eight hundred', '17 25'       ),
  ( 98, 'ninety-eight' , 'ghi'         ),
  ( 55, 'fifty-five'   , 'theblink'    ),
  ( 22, 'twenty-two'   , 'defneedleghi'),
  ( 61, 'sixty-one'    , 'noo moo doo' ),
  ( 73, 'seventy-three', 'w x y z'     ),
  (800, 'eight hundred', '17 25'       ),
  ( 99, 'ninety-nine'  , 'ghilmn'      )
)
tmp (id, num, txt);
