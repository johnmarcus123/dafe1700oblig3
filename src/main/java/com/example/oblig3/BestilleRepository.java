package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class BestilleRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilett(Bestille kunde) {
        String sql = "INSERT INTO Bestille (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, kunde.getFilm(), kunde.getAntall(), kunde.getFornavn(), kunde.getEtternavn(), kunde.getTelefonnr(), kunde.getEpost());
    }

    public List<Bestille> hentAlleBiletter() {
        String sql = "SELECT * FROM Bestille";
        List<Bestille> alleBestillinger = db.query(sql, new BeanPropertyRowMapper<>(Bestille.class));
        return alleBestillinger;
    }

    public Bestille hentBilett(int id) {
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Bestille WHERE id=?";
        Bestille enBilett = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Bestille.class));
        return enBilett;
    }

    public void oppdaterBilett(Bestille kunde) {
        String sql = "UPDATE Bestille SET film=?, antall=?, fornavn=?, etternavn=?, telefonnr=?, epost=? WHERE id=?";
        db.update(sql, kunde.getFilm(), kunde.getAntall(), kunde.getFornavn(), kunde.getEtternavn(), kunde.getTelefonnr(), kunde.getEpost(), kunde.getId());
    }

    public void slettBilett(int id) {
        String sql = "DELETE FROM Bestille WHERE id=?";
        db.update(sql, id);
    }

    public void slettAlleBiletter() {
        String sql = "DELETE FROM Bestille";
        db.update(sql);
    }

    public List<Bestille> sorterBilletter() {
        String sql = "SELECT * FROM Bestille ORDER BY etternavn ASC";
        return db.query(sql, new BeanPropertyRowMapper<>(Bestille.class));
    }
}