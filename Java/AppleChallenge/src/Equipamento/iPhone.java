package Equipamento;

import Interfaces.AparelhoTelefonico;
import Interfaces.NavegadorInternet;
import Interfaces.ReprodutorMusical;

public class iPhone implements ReprodutorMusical, AparelhoTelefonico, NavegadorInternet {

    @Override
    public void tocar() {
        System.out.println("Reproduzindo música no iPhone.");
    }

    @Override
    public void pausar() {
        System.out.println("Pausando música no iPhone.");
    }

    @Override
    public void selecionarMusica(String musica) {
        System.out.println("Selecionando a música '" + musica + "' no iPhone.");
    }

    @Override
    public void ligar(String numero) {
        System.out.println("Ligando para " + numero + " no iPhone.");
    }

    @Override
    public void atender() {
        System.out.println("Atendendo chamada no iPhone.");
    }

    @Override
    public void iniciarCorreioVoz() {
        System.out.println("Iniciando correio de voz no iPhone.");
    }

    @Override
    public void exibirPagina(String url) {
        System.out.println("Exibindo página da web: " + url + " no Safari do iPhone.");
    }

    @Override
    public void adicionarNovaAba(String url) {
        System.out.println("Adicionando nova aba com a página da web: " + url + " no Safari do iPhone.");
    }

    @Override
    public void atualizarPagina() {
        System.out.println("Atualizando página no Safari do iPhone.");
    }
}
