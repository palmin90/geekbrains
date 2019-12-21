<?
include "createTov.php";
include "ToysFactory.php";
include "Toys.php";


class Tovar {
    private $name;
    private $price;

    public function getName() {
        return $this->name;
    }

    public function getPrice() {
        return $this->price;
    }

    function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
    }

    function addTovar() {
        echo "<hr>добавлен товар ".$this->name." цена ".$this->price."<hr>";
    }
}


$tovar1 = new Tovar("aaaa", "132");
print_r($tovar1);
$tovar1->addTovar();
echo $tovar1->getName();
$factory = new TovFactory();
$factory->createGood("New super Good", "999")->addTovar();
$factoryT = new ToysFactory();
$factoryT->createToy("Toy for Boy", "950", "2-5", "Пластик")->addToy();

echo "<hr><p>Что выведет</p><br>";
class A {
    public function foo() {
        static $x = 0;
        echo ++$x;
    }
}
$a1 = new A();
$a2 = new A();
$a1->foo(); //1 тк инкремент перед выводом
$a2->foo(); // 2 тк инкремент перед выводом и переменная статик, а оно хранит инфо в рамках класса
$a1->foo(); //3 тк инкремент перед выводом и переменная статик, а оно хранит инфо в рамках класса
$a2->foo(); //4 тк инкремент перед выводом и переменная статик, а оно хранит инфо в рамках класса
echo "<hr><p>Что выведет</p><br>";
class A1 {
    public function foo() {
        static $x = 0;
        echo ++$x;
    }
}
class B extends A1 {
}
$a1 = new A1();
$b1 = new B();
$a1->foo();//1 тк инкремент
$b1->foo();//1 тк инкремент и новый класс,а статик ведет счет в рамках класса
$a1->foo();//2 тк инкремент и вызов во второй раз класса,а статик ведет счет в рамках класса
$b1->foo();//2 тк инкремент и вызов во второй раз класса,а статик ведет счет в рамках класса

echo "<hr><p>Что выведет</p><br>";
class A2 {
    public function foo() {
        static $x = 0;
        echo ++$x;
    }
}
class B2 extends A2 {
}
$a1 = new A2;
$b1 = new B2;
$a1->foo();//не понял чем отличается от предыдущего
$b1->foo();//не понял чем отличается от предыдущего
$a1->foo();//не понял чем отличается от предыдущего
$b1->foo();//не понял чем отличается от предыдущего





//Tovar::addTovar("aaaa", "132");