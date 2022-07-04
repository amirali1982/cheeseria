package com.showcase.cheeseria.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "cheese")
public class Cheese {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String price;
    private String color;

}
