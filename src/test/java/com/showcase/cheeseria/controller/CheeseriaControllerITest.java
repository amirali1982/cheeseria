package com.showcase.cheeseria.controller;

import com.showcase.cheeseria.entity.Cheese;
import com.showcase.cheeseria.repository.CheeseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CheeseriaControllerITest {

    @Autowired
    CheeseRepository repository;
    CheeseriaController controller;

    @BeforeEach
    void setup() throws IOException {
        controller = new CheeseriaController(repository);
        controller.resetCheeseria();
    }

    @Test
    void resetCheeseria() throws IOException {
        controller.resetCheeseria();
        List<Cheese> cheeseList = controller.getCheeseList();
        assertEquals(5, cheeseList.size());
    }

    @Test
    void getCheese() {

        List<Cheese> cheeseList = controller.getCheeseList();

        Cheese cheese1 = controller.getCheese(cheeseList.get(0).getId());
        Cheese cheese2 = controller.getCheese(cheeseList.get(1).getId());
        Cheese cheese3 = controller.getCheese(cheeseList.get(2).getId());
        Cheese cheese4 = controller.getCheese(cheeseList.get(3).getId());
        Cheese cheese5 = controller.getCheese(cheeseList.get(4).getId());

        assertEquals("Caboc", cheese1.getName());
        assertEquals("Off White", cheese1.getColor());
        assertEquals("10.15", cheese1.getPrice());

        assertEquals("Cabecou", cheese2.getName());
        assertEquals("Light White", cheese2.getColor());
        assertEquals("12.3", cheese2.getPrice());

        assertEquals("Cachaille", cheese3.getName());
        assertEquals("Yellow Orange Green", cheese3.getColor());
        assertEquals("15", cheese3.getPrice());

        assertEquals("Caciotta", cheese4.getName());
        assertEquals("Milky Yellow", cheese4.getColor());
        assertEquals("20.2", cheese4.getPrice());

        assertEquals("Caerphilly", cheese5.getName());
        assertEquals("Mild Yellow", cheese5.getColor());
        assertEquals("25", cheese5.getPrice());

    }

    @Test
    void addCheese() throws IOException, URISyntaxException {
        Cheese newCheese = new Cheese();
        newCheese.setName("New Test Cheese");
        newCheese.setPrice("20");
        newCheese.setColor("Red");
        File file = new File("init-data/cachaille.jpg");
        FileInputStream input = new FileInputStream(file);
        MultipartFile multipartFile = new MockMultipartFile("file",
                file.getName(), "text/plain", input.readAllBytes());

        controller.addCheese(newCheese, multipartFile);

        List<Cheese> cheeseList = controller.getCheeseList();

        assertEquals(6, cheeseList.size());

    }

    @Test
    void updateCheese() throws IOException {
        List<Cheese> cheeseList = controller.getCheeseList();

        Cheese cheese = cheeseList.get(0);
        cheese.setName("New Name");
        cheese.setPrice("30");
        cheese.setColor("Pink");

        controller.updateCheese(cheese.getId(), cheese, null);

        cheeseList = controller.getCheeseList();

        Cheese updatedCheese = cheeseList.get(0);

        assertEquals("New Name", updatedCheese.getName());
        assertEquals("30", updatedCheese.getPrice());
        assertEquals("Pink", updatedCheese.getColor());

    }

    @Test
    void removeCheese() {
        List<Cheese> cheeseList = controller.getCheeseList();

        controller.removeCheese(cheeseList.get(0).getId());

        cheeseList = controller.getCheeseList();

        assertEquals(4, cheeseList.size());

    }


}