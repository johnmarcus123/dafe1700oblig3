package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class BestilleKontroller {

    @Autowired
    KundeRepository rep;



    @PostMapping("/lagre")
    public void lagreKunde(Bestille innKunde){
        rep.lagreKunde(innKunde);
    }
    @GetMapping("/hentAlle")
    public List<Bestille> hentAlle(){
        return rep.hentAlleKunder();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleKunder();
    }
}