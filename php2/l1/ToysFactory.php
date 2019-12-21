<?php


class ToysFactory {
    function createToy($name, $price, $old, $material = "не задан") {
        return new Toys($name, $price, $old, $material);
    }
}

