package Equipamento;

import Interfaces.NavegadorInternet;

public class Safari implements NavegadorInternet {

    @Override
    public void exibirPagina(String url) {
        System.out.println("Exibindo página da web: " + url + " no Safari.");
    }

    @Override
    public void adicionarNovaAba(String url) {
        System.out.println("Adicionando nova aba com a página da web: " + url + " no Safari.");
    }

    @Override
    public void atualizarPagina() {
        System.out.println("Atualizando página no Safari.");
    }
}
