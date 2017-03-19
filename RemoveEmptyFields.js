var sjonObj = {
     "first_name": "Jane",
     "last_name": "Smith",
     "email": "jane.smith@wyng.com",
     "gender": null,
     "invitations": [
         {
             "from": "",
             "code": null
         }
     ],
     "company": {
         "name": "",
         "industries": []
     },
     "address": {
         "city": "New York",
         "state": "NY",
         "zip": "10011",
         "street": "   "
     }
}
console.log(this.RemoveEmptyFields(sjonObj, this));
function RemoveEmptyFields(obj,that) {
  if( typeof obj === 'string'|| obj === ""){
      return;
  }
  //check in the arrays for empty feilds
  var isArray = obj instanceof Array;
  for (var k in obj){
    if (obj[k]===null) isArray ? obj.splice(k,1) : delete obj[k];
    else if (typeof obj[k]=="object") RemoveEmptyFields(obj[k]);
    else if (isArray && obj.length == k) RemoveEmptyFields(obj);
  }
  //iterate through nested elements
  $.each(obj, function(key, value){
    if (value === "" || value === null){
      delete obj[key];
    }else if( typeof value === 'string' && value.trim().length < 1) {       
        delete obj[key];
    }else if (typeof value === 'object') {
      if( Object.keys(value).length === 0){
        delete obj[key];
        return;
      }
      that.RemoveEmptyFields(value);
    }
  });
  return obj;
 }
 console.log(JSON.stringify(sjonObj));