package com.mscompte.mscompte.service;

public interface CompteService {
    void virement(Long codeSource, Long codeDestination, double montant);
    
}
