// Your OnesThreesNines class here!
class OnesThreesNines{
  constructor(x){
    this.x = x;
  };
  
  get ones(){
    return this.x
  };
  get threes(){
    return Math.floor(this.x/3)
  };
  get nines(){
    return Math.floor(this.x/9)
  };
};
