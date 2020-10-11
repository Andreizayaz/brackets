module.exports = function check(str, bracketsConfig) {
    let bracketPair = '';
   for(let i = 0; i<bracketsConfig.length;){
      bracketPair = bracketsConfig[i].join('');
     if(str.includes(bracketPair)){
       str = str.replace(bracketPair,'');
       i=0;
     }else{
       i++;
     }
   }
  
  return str.length===0;
}
