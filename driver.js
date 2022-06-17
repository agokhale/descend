/* test driver for some val_help gak */
/* eslint-disable */
_=require("lodash"); 
v= require("./index"); 
[assert,assertf, desc] = [v.assert, v.assertf, v.descend];
t = assert.bind( v); 
f = assertf.bind( v); 
log = console.log; 
d= desc.bind( v); 
fo=
  {
    g:{h:["i"]},
    j:{k:{l:"m"}}
  };
t( true);
f( false);
f( d( "","") ); 
t( d ( fo, '') == fo) ;
t( d ( fo, 'g') === fo.g) ;
f( d ( fo, 'g.h') === fo.g) ;
t( d ( fo, 'g.h') === fo.g.h) ;
f( d ( fo, 'g.h.i') === fo.g.h) ;
t( _.isEqual ( d( fo, 'g.h') , ['i']) ) ;
f ( d (fo , "r.r.r")) ; 
t( d ( fo, 'j.k.l') === "m") ;
f( undefined );
f( d(undefined) );
f( d(undefined,"e.e.e.e") );
