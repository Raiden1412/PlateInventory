package com.mycompany.myapp.domain.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlateDto {

    private String assayBarcode;

    private String inventoryBarcode;

    private String chipLayout;

    private String plateName;

    private String plateType;

    private String waferId;
}
