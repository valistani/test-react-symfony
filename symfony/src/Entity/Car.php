<?php

namespace App\Entity;

use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CarRepository")
 * @ORM\Table(name="app_car", options={"comment":""})
 */
class Car{

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
    private $photo;
    /**
     * @var string
     * @ORM\Column(type="string", length="255")
     */
    private $mark;
    /**
     * @var string
     * @ORM\Column(type="string", length="10000")
     */
    private $description;
    
     /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="car")
     */
    private $comments;
    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="cars", cascade={"persist"})
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $creator;
    /**
     * @var DateTime 
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
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
     * Get the value of photo
     *
     * @return  string
     */ 
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * Set the value of photo
     *
     * @param  string  $photo
     *
     * @return  self
     */ 
    public function setPhoto(string $photo)
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * Get the value of mark
     *
     * @return  string
     */ 
    public function getMark()
    {
        return $this->mark;
    }

    /**
     * Set the value of mark
     *
     * @param  string  $mark
     *
     * @return  self
     */ 
    public function setMark(string $mark)
    {
        $this->mark = $mark;

        return $this;
    }

    /**
     * Get the value of description
     *
     * @return  string
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @param  string  $description
     *
     * @return  self
     */ 
    public function setDescription(string $description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of comments
     *
     * @return  ArrayCollection
     */ 
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Set the value of comments
     *
     * @param  ArrayCollection  $comments
     *
     * @return  self
     */ 
    public function setComments(ArrayCollection $comments)
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * Get the value of creator
     *
     * @return  User
     */ 
    public function getCreator()
    {
        return $this->creator;
    }

    /**
     * Set the value of creator
     *
     * @param  User  $creator
     *
     * @return  self
     */ 
    public function setCreator(User $creator)
    {
        $this->creator = $creator;

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