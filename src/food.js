let foods={
    Noodles:{name:"noodles",price:50},
    Naan:{name:"naan",price:10},
    Biriyani:{name:"biriyani",price:100},
    Thali:{name:"thali",price:100},
    
}
class Food{
    static getFoodDetails(){
        return foods;
    }
}
export default Food;