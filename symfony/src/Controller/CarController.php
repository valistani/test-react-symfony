<?php

namespace App\Controller;

use App\Entity\Car;
use App\Entity\Comment;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CarController extends AbstractController{

    private $managerRegistry;
    private $em;

    public function __construct(
        ManagerRegistry $managerRegistry,
        EntityManagerInterface $em
    ){
        $this->managerRegistry = $managerRegistry;
        $this->em = $em;
    }

    public function add(Request $request){

        $data = json_decode($request->getContent(),true);

        if(
            !isset($data['photo'])
            && !isset($data['mark'])
            && !isset($data['description'])
        ){

            return new JsonResponse([
                "status" => Response::HTTP_FORBIDDEN,
                "message" => "Some data is missing"
            ], Response::HTTP_FORBIDDEN);
        }
        $photo = $data['photo'];
        $mark = $data['mark'];
        $description = $data['description'];

        $manager = $this->managerRegistry->getManager();

        /**
        * @var  User
        */
        $user = $this->getUser();

        $car = new Car();
        $car->setPhoto($photo);
        $car->setMark($mark);
        $car->setDescription($description);
        $car->setCreator($user);

        $manager->persist($car);
        $manager->flush();

         return new JsonResponse([
                "status" => Response::HTTP_OK,
                "message" => "Success",
                "data" => [
                    'photo' => $photo,
                    'mark' => $mark,
                    'description' => $description,
                ]
        ], Response::HTTP_OK);
    }

    public function list(){

    
        $cars = $this->em->createQueryBuilder()
                                    ->select('c1')
                                    ->from('App:Car','c1')
                                    ->orderBy('c1.id','DESC')
                                    ->getQuery()->getResult()
                                    ;

        $data = [];

        foreach($cars as $car){
            if($car instanceof Car){

                $aCar = [
                    'id' => $car->getId(),
                    'photo' => $car->getPhoto(),
                    'mark' => $car->getMark(),
                    'description' => $car->getDescription(),
                    'createdAt' => $car->getCreatedAt()->format('Y-m-d H:i:s'),
                    'owner' => [
                        'firstName' => $car->getCreator()->getFirstName(),
                        'lastName' => $car->getCreator()->getLastName(),
                    ],
                ];
                $aCar['comments'] = []; 
                foreach($car->getComments() as $comment){
                    if($comment instanceof Comment){
                        $aCar['comments'][] = [
                            'content' => $comment->getContent(),
                            'user' => [
                                'firstName' => $comment->getUser()->getFirstName(),
                                'lastName' => $comment->getUser()->getLastName(),
                            ],
                            'createdAt' => $comment->getCreatedAt()->format('Y-m-d H:i:s'),
                        ];
                    }
                }

                $data[] = $aCar;
            }
        }
        return new JsonResponse([
            "status" => Response::HTTP_OK,
            "message" => "Success",
            "data" => $data
        ], Response::HTTP_OK);
    }


    public function addComment(Request $request, int $id){
        $car = $this->em->getRepository(Car::class)->find($id);

        if(!$car){
             return new JsonResponse([
                "status" => Response::HTTP_NOT_FOUND,
                "message" => "Car not found!",
            ], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

         /**
        * @var  User
        */
        $user = $this->getUser();

        $comment= new Comment();
        $comment->setContent($data['content']);
        $comment->setCar($car);
        $car->getComments()->add($comment);
        $comment->setUser($user);

         $this->em->persist($comment);
        $this->em->flush();

        return new JsonResponse([
            "status" => Response::HTTP_OK,
            "message" => "Success",
        ], Response::HTTP_OK);

    }
}