class Food{
    constructor(){
        this.image = loadImage("Images/Milk.png");
        this.foodstock = 1;
        this.yAdd = 0;
        this.x = 180;
    }

    getFoodStock(){
        return this.foodstock;
    }

    deductFood(){
        this.foodstock--;
    }

    updateFoodStock(n){
        this.foodStock = n;
    }

    display(){
        imageMode(CENTER);

        if(this.foodStock !== 0){
            for (var i = 0; i < this.foodstock; i++){
                if(i % 10 == 0 && i !== 0){
                    this.yAdd++;
                    this.x = 180;
                }

                image(this.image,this.x+20,200-(20*this.yAdd),60,70);
            }
        }
    }
}