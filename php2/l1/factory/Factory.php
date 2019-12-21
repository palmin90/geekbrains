<?php

include "Car.php";

class Factory{
    function createCar($name){
        return new Car($name,rand(1000,5000));
    }

}