// @param {Object|Array} obj
// * @return {boolean}
// */
var isEmpty = function(obj) {
   const res= JSON.stringify(obj);;
   return res.length>2;
};



const search_button=document.getElementById("search-logo");
const search_val=document.getElementById("search-val");


function showSearchResult(arr ){

   const searchResult=document.getElementById('searchResult');
   let str=""
   for(let i=0;i<arr.length;i++){
      const link='./Exams/'+arr[i] ;
      str +=`<p><a href=${link}>${arr[i]}</p>`
   }
   searchResult.innerHTML=str;
}
// const examName=["cds" , "jeemain" , "cat" ,"cgl","jam" , "mat" , "neet" , "nimcet" , "nift" ,"neet" ,"jam","neetpg","jeeadvance" ];
const examName=["cds" , "jeemain" , "cat" ,"cgl","jam" , "mat" , "neet" , "nimcet" , "nift" ,"neet" ,"jam","neetpg","jeeadvance" ];

search_val.addEventListener('keydown' , (e) =>{
   const key=document.getElementById("search-val").value+e.key;
   const output=search(key ,examName);
   showSearchResult(output);
})

function search(query , database){
   let result =[];
   for(let i=0;i<database.length;i++){
      if(isSubstring(query , database[i])){
         result.push(database[i]);}
   }
   return result;
}

function isSubstring(query , key){// i will optimize it later 
   const n=key.length;
   for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
         if(query==key.substring(i,j+1)){return true;}
      }
   }
   return false;
}