package com.mscompte.mscompte;

import java.util.Date;

import com.mscompte.mscompte.entities.Compte;
import com.mscompte.mscompte.enums.TypeCompte;
import com.mscompte.mscompte.repositories.CompteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class MscompteApplication implements CommandLineRunner{
	@Autowired
	private CompteRepository compteRepository;
    
	@Autowired
	private RepositoryRestConfiguration restConfiguration;

	public static void main(String[] args) {
		SpringApplication.run(MscompteApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		restConfiguration.exposeIdsFor(Compte.class);
		compteRepository.save(new Compte(null, 98000, new Date(), TypeCompte.COURANT));
		compteRepository.save(new Compte(null, 5000, new Date(), TypeCompte.EPARGNE));
		compteRepository.save(new Compte(null, 8000, new Date(), TypeCompte.COURANT));
		
		compteRepository.findAll().forEach(cp->{
			System.out.println(cp.toString());
			
		});
		
	}

}
