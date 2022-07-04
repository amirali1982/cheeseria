package com.showcase.cheeseria.repository;

import com.showcase.cheeseria.entity.Cheese;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheeseRepository extends JpaRepository<Cheese, Long> {
}
