<?php


namespace App\Repository;

use App\Entity\Car;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class CarRepository extends EntityRepository{


    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct($em, new ClassMetadata(Car::class));
    }

}