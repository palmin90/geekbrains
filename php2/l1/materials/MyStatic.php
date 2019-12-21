<?php
/*
class MyStatic{
    static $x;
    
    static function demo($y){
        //MyStatic::$x = $y;
        self::$x = $y;
        //this использовать в static свойствах запрещено!
    }
    
    static function test(){
        $obj = new MyStatic;
        $obj->usually();
    }
    
    function usually(){
        echo MyStatic::$x;
    }
}

MyStatic::demo(10);
MyStatic::test();

/*$obj = new MyStatic;
$obj->usually();*/

class A {
    public function foo() {
        static $x = 0;
        echo ++$x;
    }
}
$a1 = new A();
$a2 = new A();
$a1->foo();
$a2->foo();
$a1->foo();
$a2->foo();
