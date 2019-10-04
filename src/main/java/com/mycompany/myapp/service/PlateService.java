package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Plate;
import com.mycompany.myapp.domain.dto.PlateDto;
import com.mycompany.myapp.repository.PlateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.constraints.NotNull;
import java.util.*;

@Service
@Transactional
public class PlateService {
    @Autowired
    private PlateRepository plateRepository;


    public void addPlate(PlateDto plate) throws Exception{
        Optional<Plate> plateDto=plateRepository.findPlateByAssayBarcode(plate.getAssayBarcode());

        if(plateDto.isPresent()){
            throw new Exception("plate is existed");
        }

        Plate plateBeingSaved=Plate.builder()
            .assayBarcode(plate.getAssayBarcode())
            .inventoryBarcode(plate.getInventoryBarcode())
            .chipLayout(plate.getChipLayout())
            .plateName(plate.getPlateName())
            .plateType(plate.getPlateType())
            .build();

        try{
            plateRepository.saveAndFlush(plateBeingSaved);
        }catch (Exception e){
            System.out.println("this is the error: "+e.getMessage());
            throw new Exception(e.getMessage());
        }
    }
}
