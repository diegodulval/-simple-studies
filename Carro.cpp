using namespace std;

#include <iostream>
#include "Carro.h"

Carro::Carro(){ this->marca = "VW"; this->ano = 1995; }
Carro::Carro(string marca, int ano){ this->marca = marca; this->ano = ano; }

Carro::~Carro(){ cout << "Carro foi destruido!" << endl; }

void Carro::setMarca(string marca) { this->marca = marca; }
void Carro::setAno(int ano)
{
    if (ano > 1930)
        this->ano = ano;
    else
        this->ano = 1930;
}

int Carro::getAno() { return ano; }
string Carro::getMarca() { return marca; }

int Carro::pneus = 4;