<?php


namespace App\Repository;

use App\Entity\Comment;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class CommentRepository extends EntityRepository{


    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct($em, new ClassMetadata(Comment::class));
    }

}