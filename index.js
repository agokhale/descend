/* 
Provide  opional chaining for node <13
XXXX this is a terrible idea; don't use it
*/
module.exports = {
  assert ( truthy , errtxt ){
    var canary_stack =  "";
    if ( !truthy ) {
      /* eslint-disable */
      try {  canary_died;
      } catch ( canary ) {
        canary_stack = canary.stack;
      }
      /* eslint-enable */
      throw new Error( errtxt || "vh.assert@"+canary_stack);
    }
  },
  assertf ( falsy, errtxt) { this.assert ( !falsy, errtxt); },

  /* descend ( oo,  "any.object.path");  => oo?.any?.object?.path
  also see optional chaining
  don't pass in arrays
  don't use eval () kids, stay in skool
  */
  descend ( o, path="", depth=0 )  {
    var parts = path.split (".");
    var next = parts.shift();
    //const log = console.log;
    //const log = () => {};
    if (!o) {return false;}
    //log ( " ".padStart(depth), "tast",depth,o, typeof(o),  next, typeof(o[next]));
    if ( next )  {
      if ( typeof ( o[next] )  != "undefined"  && typeof(o[next]) == "object"  ) {
        //log (" ".padStart(depth),"descending object", o[next]);
        return this.descend( o[next] ,  parts.join("."), depth+1); //first learn recursion
      } else if ( typeof ( o[next]) != "undefined" ){
        //log (" ".padStart(depth),"leaf", o[next], typeof( o[next])  );
        return o[next];  // leaf object, send it
      } else { return false; }
    } else   {
      //log (" ".padStart(depth),"no_path", o );
      return o ;
    } // out of paths, arrived at a destination
  }
};

