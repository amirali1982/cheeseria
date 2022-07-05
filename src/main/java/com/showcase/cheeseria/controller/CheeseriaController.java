package com.showcase.cheeseria.controller;

import com.showcase.cheeseria.entity.Cheese;
import com.showcase.cheeseria.repository.CheeseRepository;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/cheeseria")
public class CheeseriaController {

    private final CheeseRepository cheeseRepository;


    public CheeseriaController(CheeseRepository cheeseRepository) {
        this.cheeseRepository = cheeseRepository;
    }

    @GetMapping
    public List<Cheese> getCheese() {
        return cheeseRepository.findAll();
    }

    @GetMapping("/{id}")
    public Cheese getCheese(@PathVariable Long id) {
        return cheeseRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Cheese> addCheese(@RequestPart("cheese") Cheese cheese, @RequestPart(value = "file", required = false) MultipartFile file) throws URISyntaxException, IOException {
        if(file != null && !file.isEmpty()) {
            cheese.setImage(file.getBytes());
        }
        Cheese addedCheese = cheeseRepository.save(cheese);
        return ResponseEntity.created(new URI("/cheese/" + addedCheese.getId())).body(cheese);
    }

    @PutMapping(path = "/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Cheese> updateCheese(@PathVariable Long id, @RequestPart("cheese") Cheese cheese, @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        Cheese currentCheese = cheeseRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCheese.setName(cheese.getName());
        currentCheese.setColor(cheese.getColor());
        currentCheese.setPrice(cheese.getPrice());
        if(file != null && !file.isEmpty()) {
            currentCheese.setImage(file.getBytes());
        }
        currentCheese = cheeseRepository.save(currentCheese);

        return ResponseEntity.ok(currentCheese);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeCheese(@PathVariable Long id) {
        cheeseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
