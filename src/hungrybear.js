export class HungryBear {
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
  }
  setHunger(){
    setInterval(()=>{
      this.foodLevel--;
    }, 100);
  }
  didYouGetEaten(){
    if (this.foodLevel>0){
      return false;
    } else {
      return true;
    }
  }
  feed(){
    this.foodLevel=10;
  }

}
