using namespace std;

#include <iostream>
#include "Carro.h"

//Contrutores
Carro::Carro()
{
    this->marca = "VW";
    this->ano = 1995;
}
Carro::Carro(string marca, int ano)
{
    this->marca = marca;
    this->ano = ano;
}

//Destrutor
Carro::~Carro() { cout << "Carro foi destruido!" << endl; }

//Metodos de acesso aos atributos da classe Carro.
//SET
void Carro::setMarca(string marca) { this->marca = marca; }
void Carro::setAno(int ano)
{
    //Regra de negócio: Nenhum carro pode ser instanciado com o ano inferior a 1930
    if (ano > 1930)
        this->ano = ano;
    else
        this->ano = 1930;
}

//GET
int Carro::getAno() { return ano; }
string Carro::getMarca() { return marca; }

//STATIC
int Carro::pneus = 4;