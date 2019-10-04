package com.mycompany.myapp.web.rest;


import com.mycompany.myapp.domain.dto.PlateDto;
import com.mycompany.myapp.service.PlateService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping
@Api(value="Plate Service Controller", description = "Controller for plates information")
public class PlateController {
    @Autowired
    private PlateService plateService;

    @PostMapping(path="/api/plate/addPlate",produces = "application/json")
    public HttpStatus addPlate(@RequestBody @NotNull PlateDto plateDto){
        System.out.println("here");
        try {
            plateService.addPlate(plateDto);
            return HttpStatus.OK;
        } catch (Exception e) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}

