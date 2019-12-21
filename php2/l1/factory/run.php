<?php

include "Factory.php";

$carName = ["Audi","BMW","VW","Skoda"];
$carCount = rand(5,20);

$cars = [];
$factory = new Factory;

$sum = 0;
for($i=0;$i<$carCount;$i++){
    $cars[$i] = $factory->createCar($carName[rand(0,count($carName)-1)]);
    $priceCar = $cars[$i]->getPrice();
    echo "Автомобиль ".$cars[$i]->getName()." стоит ".$priceCar."<hr>";
    $sum += $priceCar;
}
echo "Общая стоимость всех автомобилей составляет $sum";