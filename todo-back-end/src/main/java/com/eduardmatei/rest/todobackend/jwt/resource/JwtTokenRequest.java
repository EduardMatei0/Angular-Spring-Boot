package com.eduardmatei.rest.todobackend.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

    // {
    //"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU1MTg3Mzg1NSwiaWF0IjoxNTUxMjY5MDU1fQ.2xkZ-ECXg_4AjqviWR82H2a07_CN3TfCXOkgKZrCTr0mgryBAom5yBpchnZy-ZFJQRvHaMdkA9YfDLEHYTISaw"
    //}

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
