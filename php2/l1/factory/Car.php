<?php


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
    }
}