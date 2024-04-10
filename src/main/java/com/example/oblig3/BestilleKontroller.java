package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BestilleKontroller {

    @Autowired
    BestilleRepository rep;

    @PostMapping("/lagre")
    public void lagreBilett(@RequestBody Bestille kunde){
        rep.lagreBilett(kunde);
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
    public void oppdaterBilett(@RequestBody Bestille kunde){
        rep.oppdaterBilett(kunde);
    }
    @DeleteMapping("/slettBilett")
    public void slettEn(@RequestParam("id") int id){
        rep.slettBilett(id);
    }
    @DeleteMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBiletter();
    }
}
