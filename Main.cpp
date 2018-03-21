#include <cstdlib>
#include <string>
#include <iostream>

using namespace std;

#include "Carro.h"

int main(int argc, char **argv)
{

    //Instanciando via construtor.
    Carro c1("Fiat", 2017);
    Carro c2("Toyota", 1600);

    Carro c3;
    // c3.marca = "Ferrari"; <- Não funciona devido ao atributo marca sem do tipo private.
    c3.setMarca("Ferrari"); // Isso funciona, pq eu tô utilizando um metodo que é publico mais como ele pertence a classe Carro ele consegue mudar o valor pra mim.
    c3.setAno(2014);

    cout << "---------------GET-SET--------------" << endl;
    cout << c1.getMarca() << endl;
    cout << c2.getAno() << endl;

    cout << "--------------STATIC----------------" << endl;
    //Valor do atributo "pneu" de todas os objetos(c1,c2,c3) é 4 por padrão
    cout << c3.pneus << endl;

    //Se eu mudar o valor do atributo "pneu" de qualquer objeto automaticamente todas as instancias passam a receber ese valor, pq o atributo ele é static.
    c2.pneus = 2;
    cout << c1.pneus << endl;
    cout << c3.pneus << endl;

    return 0;
}