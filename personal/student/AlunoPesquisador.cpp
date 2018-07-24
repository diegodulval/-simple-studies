#include "Aluno.h"

#include "AlunoPesquisador.h"

//Construtor
AlunoPesquisador::AlunoPesquisador(string nome) : Aluno(nome){}

//Destrutor
AlunoPesquisador::~AlunoPesquisador(){}

//Getters
double AlunoPesquisador::getBolsa()
{
	return bolsa;
}

string AlunoPesquisador::getLinha()
{
	return linha;
}

string AlunoPesquisador::getOrientador()
{
	return orientador;
}

//Setters
void AlunoPesquisador::setBolsa(double bolsa)
{
	this->bolsa = bolsa;
}

void AlunoPesquisador::setLinha(string linha)
{
	this->linha = linha;
}

void AlunoPesquisador::setOrientador(string orientador)
{
	this->orientador = orientador;
}
