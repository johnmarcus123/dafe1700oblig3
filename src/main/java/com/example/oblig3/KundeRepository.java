package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KundeRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreKunde(Bestille innKunde) {
        String sql = "INSERT INTO Bestille (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innKunde.getFilm(), innKunde.getAntall(), innKunde.getFornavn(), innKunde.getEtternavn(), innKunde.getTelefonnr(), innKunde.getEpost());
    }

    public List<Bestille> hentAlleKunder() {
        String sql = "SELECT * FROM Bestille";
        List<Bestille> alleKunder = db.query(sql, new BeanPropertyRowMapper<>(Bestille.class));
        return alleKunder;
    }
    public void slettAlleKunder(){
        String sql = "DELETE FROM Bestille";
        db.update(sql);
    }
}