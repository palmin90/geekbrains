<?php

class TovFactory {
    function createGood($name, $price) {
        return new Tovar($name,$price);
    }
}