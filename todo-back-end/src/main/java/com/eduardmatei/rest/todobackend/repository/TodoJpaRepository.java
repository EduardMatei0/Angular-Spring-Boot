package com.eduardmatei.rest.todobackend.repository;

import com.eduardmatei.rest.todobackend.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Integer> {

    List<Todo> findByUsername(String username);
}
