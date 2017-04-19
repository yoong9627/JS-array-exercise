const left = function(){
  let min=0;
  let pos=document.getElementsByTagName("div")[0];
  let tmp=parseInt(pos.style.left);
  if(!tmp){
    tmp=10;
  }
  tmp-=10;
  if(tmp>=min){
  pos.style.left=tmp+'px';
  console.log(pos.style.left);
  }
};
const down = function(){
  let pos=document.getElementsByTagName("div")[0];
  let tmp=parseInt(pos.style.top);
  if(!tmp){
    tmp=10;
  }
  tmp+=10;
  pos.style.top=tmp+'px';
  console.log(pos.style.left);

};
const right = function(){
  let max=document.body.offsetWidth;
  let pos=document.getElementsByTagName("div")[0];
  let tmp=parseInt(pos.style.left);
  if(!tmp){
    tmp=10;
  }
  tmp+=tmp;
  if(tmp+pos.offsetWidth<=max){
  pos.style.left=tmp+'px';
  console.log(pos.style.left);
  }
};
const up = function(){
  let min=0;
  let pos=document.getElementsByTagName("div")[0];
  let tmp=parseInt(pos.style.top);
  if(!tmp){
    tmp=10;
  }
  tmp-=10;
  if(tmp>=min){
  pos.style.top=tmp+'px';
  console.log(pos.style.top);
  }
};
