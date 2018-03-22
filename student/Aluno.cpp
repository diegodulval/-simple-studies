#include "Aluno.h"

int Aluno::proxCodigo = 1;

//Construtor parametrizado
Aluno::Aluno(string nome)
{
	this->codigo = getProxCodigo();
	this->setNome(nome);

	//cout << "objeto criado" << endl;
}

//Construtor de cópia
Aluno::Aluno(const Aluno &a)
{
	this->codigo = a.codigo;
	this->nome = a.nome;

	//cout << "objeto copiado" << endl;
}

//Destrutor da classe
Aluno::~Aluno()
{
	//cout << "objeto destruído" << endl;
}

//GETTERS 
int Aluno::getCodigo()
{
	return codigo;
}

string Aluno::getNome()
{
	return nome;
}

float *Aluno::getNotas()
{
	return notas;
}

//SETTERS - mutator methods
void Aluno::setCodigo(int codigo)
{
	if (codigo < 0)
	{								  //Se o valor de código for negativo
		this->codigo = (-1) * codigo; //O valor é convertido para positivo
	}
	else
	{
		this->codigo = codigo;
	}
}

void Aluno::setNome(string nome)
{
	this->nome = nome;
}

void Aluno::setNotas(float notas[])
{
	this->notas[0] = notas[0];
	this->notas[1] = notas[1];
}

/*************************************************/

float Aluno::calculaMedia()
{
	float soma = 0.0f;
	int i = 0;

	for (i = 0; i <= 1; i++)
	{
		soma = soma + notas[i];
	}

	return soma / i;
}

/*************************************************/

int Aluno::getProxCodigo()
{
	return proxCodigo++;
}