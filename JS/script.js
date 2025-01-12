function deepCount(a){
let count = a.length;
for(i=0; i< a; i ++) if( Array.isArray( a[i]) ) {count += deepCount(a[i])};
return count;
};