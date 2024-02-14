// @param {Object|Array} obj
// * @return {boolean}
// */
var isEmpty = function(obj) {
   const res= JSON.stringify(obj);;
   return res.length>2;
};


const examName=["cds" , "jeemain" , "cat" ,"cgl","jam" , "mat" , "neet" , "nimcet" , "nift" ,"neet" ,"jam" ];
const search_button=document.getElementById("search-logo");

search_button.addEventListener('click' , () =>{
   const key=document.getElementById("search-val").value;
   
   if(search(examName ,key)){
     try{
       window.location.href = './Exams/'+key;
     } 
     catch (e){console.log("Hi")}
   }
})
function search (arr ,key ){
   console.log("Search is called")
   for(let i=0;i<arr.length;i++){
      if(arr[i]==key){return true;}
   }
   return false;
}
