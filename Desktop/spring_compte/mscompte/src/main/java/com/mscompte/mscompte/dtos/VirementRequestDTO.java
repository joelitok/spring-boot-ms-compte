package com.mscompte.mscompte.dtos;
import lombok.Data;
@Data
public class VirementRequestDTO {
    private Long codeSource;
    private Long codeDestination;
    private double montant;
}

