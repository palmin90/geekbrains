<?php
include "Car.class.php";

class RaceCar extends Car{
   private $speed;
    
    function __construct($name,$price,$speed){
        parent::__construct($name,$price);
        $this->speed = $speed;
    }
    
    function drive() {
        echo "Автомобиль ".$this->getName()." разгоняется до скорости ".$this->speed."<br>";
        parent::drive();
    }
}
    
$obj = new RaceCar("Ferrari",5000,500);
$obj->drive();





