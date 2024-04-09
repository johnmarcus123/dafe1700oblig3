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

    public void lagreBilett(Bestille innKunde) {
        String sql = "INSERT INTO Bestille (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innKunde.getFilm(), innKunde.getAntall(), innKunde.getFornavn(), innKunde.getEtternavn(), innKunde.getTelefonnr(), innKunde.getEpost());
    }

    public List<Bestille> hentAlleBiletter() {
        String sql = "SELECT * FROM Bestille";
        List<Bestille> alleKunder = db.query(sql, new BeanPropertyRowMapper<>(Bestille.class));
        return alleKunder;
    }
    public Bestille hentBilett(int id){
        Object param[] = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROm Bestille WHERE id=?";
        Bestille enBilett = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Bestille.class));
        return enBilett;
    }
    public void oppdaterBilett(Bestille innKunde){
        String sql = "UPDATE Bestille SET film=?, antall=?, fornavn=?, etternavn=?, adresse=?, telefonnr=?, epost=? WHERE id=?";
        db.update(sql, innKunde.getFilm(), innKunde.getAntall(), innKunde.getFornavn(), innKunde.getEtternavn(), innKunde.getTelefonnr(), innKunde.getEpost());
    }
    public void slettBilett(){
        String sql = "DELETE FROM Bestille WHERE id=?";
        db.update(sql);
    }
    public void slettAlleBiletter(){
        String sql = "DELETE FROM Bestille";
        db.update(sql);
    }
}
