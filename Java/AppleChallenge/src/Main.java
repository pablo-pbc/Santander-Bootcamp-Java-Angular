import Equipamento.iPhone;
import Equipamento.Safari;
import Equipamento.iPod;

public class Main {
    public static void main(String[] args) {
        // Criando uma instância de iPhone
        iPhone iphone = new iPhone();

        // Testando as funcionalidades do iPhone
        iphone.ligar("123-456-789");
        iphone.atender();
        iphone.iniciarCorreioVoz();

        iphone.tocar();
        iphone.selecionarMusica("Música 1");
        iphone.pausar();

        iphone.exibirPagina("https://www.example.com");
        iphone.adicionarNovaAba("https://www.example2.com");
        iphone.atualizarPagina();

        // Criando uma instância de iPod
        iPod ipod = new iPod();

        // Testando as funcionalidades do iPod
        ipod.tocar();
        ipod.selecionarMusica("Música 2");
        ipod.pausar();

        // Criando uma instância de Safari
        Safari safari = new Safari();

        // Testando as funcionalidades do Safari
        safari.exibirPagina("https://www.example3.com");
        safari.adicionarNovaAba("https://www.example4.com");
        safari.atualizarPagina();
    }
}
