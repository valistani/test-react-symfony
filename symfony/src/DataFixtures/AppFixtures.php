<?php

namespace App\DataFixtures;

use App\Entity\Car;
use App\Entity\Comment;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture{

    private $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;    
    }

    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create();

        for($i=0 ; $i < 5 ; $i++){
            $email = "test-user15$i"."@yopmail.com";
            $password = "123456789";
            
            $user = new User();
            $user->setFirstName($faker->firstName);
            $user->setLastName($faker->lastName);
            $user->setEmail($email);

            $password = $this->hasher->hashPassword($user,$password);
            $user->setPassword($password);

            for($j=0; $j < 10; $j++){

                $car = new Car();
                $marks =["Toyota","Nissan","Mutsibushi","Ferrari", "Lamborghini","Mercedes"];
                $car->setPhoto("https://via.placeholder.com/350x150");
                $car->setMark(ucwords($marks[array_rand($marks)])." ".$faker->text(5));
                $car->setDescription($faker->text(1000));
                $car->setCreator($user);

                for($k=0; $k < 5;$k++){
                    $comment= new Comment();
                    $comment->setContent($faker->text(100));
                    $comment->setCar($car);
                    $car->getComments()->add($comment);
                    $comment->setUser($user);

                    $manager->persist($comment);
                }
           
                
                $manager->persist($car);

            }

            $manager->persist($user);


            $manager->flush();

        }
    }
}