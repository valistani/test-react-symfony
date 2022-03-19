<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController{

    private $hasher;
    private $managerRegistry;
    private $em;

    public function __construct(
        UserPasswordHasherInterface $hasher,
        ManagerRegistry $managerRegistry,
        EntityManagerInterface $em
    ){
        $this->hasher = $hasher;
        $this->managerRegistry = $managerRegistry;
        $this->em = $em;
    }

    public function register(Request $request){

        $data = json_decode($request->getContent(),true);

        if(
            !isset($data['firstName'])
            && !isset($data['lastName'])
            && !isset($data['email'])
            && !isset($data['password'])
        ){

            return new JsonResponse([
                "status" => Response::HTTP_FORBIDDEN,
                "message" => "Some data is missing"
            ], Response::HTTP_FORBIDDEN);
        }
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $email = $data['email'];
        $password = $data['password'];

        $manager = $this->managerRegistry->getManager();


        $user = $this->em->getRepository(User::class)->findOneBy(['email' => $email]);

        if($user){
              return new JsonResponse([
                "status" => Response::HTTP_CONFLICT,
                "message" => "User already exist!"
            ], Response::HTTP_CONFLICT);
        }

        $user = new User();
        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        $user->setEmail($email);

        $password =$this->hasher->hashPassword($user,$password);
        $user->setPassword($password);
        
        $manager->persist($user);
        $manager->flush();

         return new JsonResponse([
                "status" => Response::HTTP_OK,
                "message" => "Success",
                "data" => [
                    'firstName' => $firstName,
                    'lastName' => $lastName,
                    'email' => $email,
                ]
        ], Response::HTTP_OK);
    }

    public function logout(){

        /**
        * @var  User
        */
        $user = $this->getUser();
        $id = $user->getId();

        // clear user token
        $this->em->persist($user);
        $this->em->flush();
    
        return new JsonResponse([
            "status" => Response::HTTP_OK,
            "message" => "Success",
        ], Response::HTTP_OK);
    }


}