<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentRepository")
 * @ORM\Table(name="app_comment", options={"comment":""})
 */
class Comment{


     /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @var string
     * @ORM\Column(type="string", length="255")
     */
    private $content;
     /**
     * @var Car
     * @ORM\ManyToOne(targetEntity="App\Entity\Car", inversedBy="comments", cascade={"persist"})
     * @ORM\JoinColumn(name="car_id", referencedColumnName="id")
     */
    private $car;
     /**
     * @var User
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="comments", cascade={"persist"})
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;
    /**
     * @var DateTime 
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    public function __construct()
    {
        $this->createdAt = new DateTime();
    }

    /**
     * Get the value of id
     *
     * @return  int
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param  int  $id
     *
     * @return  self
     */ 
    public function setId(int $id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of content
     *
     * @return  string
     */ 
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set the value of content
     *
     * @param  string  $content
     *
     * @return  self
     */ 
    public function setContent(string $content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get the value of car
     *
     * @return  Car
     */ 
    public function getCar()
    {
        return $this->car;
    }

    /**
     * Set the value of car
     *
     * @param  Car  $car
     *
     * @return  self
     */ 
    public function setCar(Car $car)
    {
        $this->car = $car;

        return $this;
    }

    /**
     * Get the value of user
     *
     * @return  User
     */ 
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set the value of user
     *
     * @param  User  $user
     *
     * @return  self
     */ 
    public function setUser(User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get the value of createdAt
     *
     * @return  DateTime
     */ 
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set the value of createdAt
     *
     * @param  DateTime  $createdAt
     *
     * @return  self
     */ 
    public function setCreatedAt(DateTime $createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}