#include <iostream>
#include <string>
#include "Aluno.h"
#include "AlunoPesquisador.h"

using namespace std;

int main()
{

	Aluno *joao = new Aluno("João");
	cout << joao->getCodigo() << " ";
	cout << joao->getNome() << endl;

	Aluno maria("Maria");
	cout << maria.getCodigo() << " ";
	cout << maria.getNome() << endl;

	Aluno::getProxCodigo(); //3
	Aluno::getProxCodigo(); //4
	Aluno::getProxCodigo(); //5

	Aluno pedro("Pedro"); //6
	cout << pedro.getCodigo() << " ";
	cout << pedro.getNome() << endl;

	AlunoPesquisador jose("José"); //7
	cout << jose.getCodigo() << " ";
	cout << jose.getNome() << endl;

    float notas[2] = {20.0, 30.0};
	jose.setNotas( notas );
	cout << "Media das notas: " << jose.calculaMedia() << endl;

	return 0;
}
