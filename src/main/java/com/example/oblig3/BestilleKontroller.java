package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class BestilleKontroller {

    @Autowired
    KundeRepository rep;



    @PostMapping("/lagre")
    public void lagreBilett(Bestille innKunde){
        rep.lagreBilett(innKunde);
    }
    @GetMapping("/hentAlle")
    public List<Bestille> hentAlle(){
        return rep.hentAlleBiletter();
    }

    @GetMapping("/hentBilett")
    public Bestille hentBilett(int id){
        return rep.hentBilett(id);
    }

    @PostMapping ("/oppdater")
    public void oppdaterKunde(Bestille innKunde){
        rep.oppdaterBilett(innKunde);
    }
    @DeleteMapping("/slettEn")
    public void SlettEn(){
        rep.slettBilett();
    }

    @DeleteMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBiletter();
    }
}
