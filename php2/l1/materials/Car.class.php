<?php
include "Outer.php";

class Car{
    private $name;
    private $price;
    
    public function getName(){
        return $this->name;
    }
    public function getPrice(){
        return $this->price;
    }
    
    function __construct($name,$price){
        $this->name = $name;
        $this->price = $price;
        //$this->drive();
    }
    
    /*function setter($name,$price){
        $this->name = $name;
        $this->price = $price;
    }*/
    
    protected function drive(){
        echo "Автомобиль ".$this->name." стоит ".$this->price."<br>";
        $object = new Outer;
        $object->test();
    }
}

//$car1 = new Car("Audi",1000);
//$car1->setter("Audi",1000);
/*$car1->name = "Audi";
$car1->price = 1000;*/
//$car1->drive();

//$car2 = new Car("BMW",2000);
//$car2->setter("BMW",2000);

//$car3 = new Car("VW",900);
//$car3->setter("VW",900);
/*$car2->name = "BMW";
$car2->price = 1200;*/
//$car2->drive();
/*
$cars = [$car1,$car2,$car3];

foreach($cars as $car){
    $car->drive();
}
*/







