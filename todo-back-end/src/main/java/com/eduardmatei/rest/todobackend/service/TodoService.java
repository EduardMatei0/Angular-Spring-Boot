package com.eduardmatei.rest.todobackend.service;

import com.eduardmatei.rest.todobackend.model.Todo;
import com.eduardmatei.rest.todobackend.repository.TodoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    @Autowired
    private TodoJpaRepository repository;

    static  {
        todos.add(new Todo(++idCounter, "Eduard Matei", "Learn to Preach", new Date(), false));
        todos.add(new Todo(++idCounter, "Eduard Matei", "Learn about Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "Eduard Matei", "Learn about Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "Eduard Matei", "Learn about Medicina Veterinara", new Date(), false));
        todos.add(new Todo(++idCounter, "Eduard Matei", "Learn to code properly", new Date(), false));
    }

    public List<Todo> findAll() {
        return repository.findAll();
    }

    public Todo save(Todo todo) {
        return repository.save(todo);
    }

    public void deleteById(int id) {
        repository.deleteById(id);
    }

    public Todo findById(int id) {
        return repository.findById(id).get();
    }
}
