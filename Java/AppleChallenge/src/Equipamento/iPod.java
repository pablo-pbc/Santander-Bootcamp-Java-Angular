package Equipamento;

import Interfaces.ReprodutorMusical;

public class iPod implements ReprodutorMusical {

    @Override
    public void tocar() {
        System.out.println("Reproduzindo música no iPod.");
    }

    @Override
    public void pausar() {
        System.out.println("Pausando música no iPod.");
    }

    @Override
    public void selecionarMusica(String musica) {
        System.out.println("Selecionando a música '" + musica + "' no iPod.");
    }
}

