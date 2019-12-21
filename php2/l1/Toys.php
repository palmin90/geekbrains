<?php

class Toys extends Tovar {
    public $old;
    public $material;

    function __construct($name, $price, $old, $material = "не задан") {
        parent::__construct($name, $price);
        $this->old = $old;
        $this->material = $material;
    }

    function addToy() {
        echo "<hr> Игрушка добавлен " . $this->getName() . " по цене " . $this->getPrice() . " для возраста " . $this->old . " из материала " . $this->material."<hr>";
        parent::addTovar();
    }
}

