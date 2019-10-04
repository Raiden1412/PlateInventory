package com.mycompany.myapp.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pillar_plate_info")
@Data
public class Plate {

    @Column(name="pillar_plate_name",nullable=false,length=100,columnDefinition = "nvarchar(100)")
    private String assayBarcode;

    @Column(name = "inventory_barcode",nullable=false,length=100,columnDefinition = "nvarchar(100")
    private String inventoryBarcode;

    @Column(name = "plate_type",nullable = false,length = 100,columnDefinition = "nvarchar(100)")
    private String plateType;

    @Column(name = "chip_layout_type", nullable = false,length = 100,columnDefinition = "nvarchar(100)")
    private String chipLayout;

    @Column(name = "test_name",nullable = false,length = 100,columnDefinition = "nvarchar(100)")
    private String plateName;

}
