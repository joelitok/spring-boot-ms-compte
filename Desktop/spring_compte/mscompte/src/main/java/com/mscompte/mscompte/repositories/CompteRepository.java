package com.mscompte.mscompte.repositories;

import java.util.List;

import com.mscompte.mscompte.entities.Compte;
import com.mscompte.mscompte.enums.TypeCompte;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource
public interface CompteRepository extends JpaRepository <Compte,Long>{
    @RestResource(path="/byType")
    List<Compte> findByType(@Param(value="type") TypeCompte typeCompte); 
}


