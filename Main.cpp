#include <cstdlib>
#include <string>
#include <iostream>

using namespace std;

#include "Carro.h"

int main(int argc, char** argv)
{

    Carro c1("Fiat", 2017);
    Carro c2("Toyota", 1600);

    cout << c1.getMarca() << endl;
    cout << c2.getAno() << endl;

    return 0;
}