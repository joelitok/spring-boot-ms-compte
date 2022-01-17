package com.mscompte.mscompte.web;

import java.util.List;

import com.mscompte.mscompte.entities.Compte;
import com.mscompte.mscompte.repositories.CompteRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class CompteRestController {
    private CompteRepository compteRepository;
    public CompteRestController(CompteRepository compteRepository){
        this.compteRepository=compteRepository;
    }


    @GetMapping(path="/comptes")
    public List<Compte> listComptes(){
        return compteRepository.findAll();
    }

    @GetMapping(path="/comptes/{id}")
    public Compte geCompte(@PathVariable(name="id") Long code){
        return compteRepository.findById(code).get();

    }

    @PostMapping(path="/comptes")
    public Compte save(@RequestBody Compte compte){
        return compteRepository.save(compte);
    }

    @PutMapping(path="/comptes/{code}")
    public Compte update(@PathVariable Long code, @RequestBody Compte compte){
        compte.setCode(code);
        return compteRepository.save(compte);
    }

    @DeleteMapping(path="/comptes/{code}")
    public void delete(@PathVariable Long code){
         compteRepository.deleteById(code);
    }



    
}
