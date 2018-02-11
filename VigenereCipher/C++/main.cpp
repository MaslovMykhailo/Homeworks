#include <iostream>
#include "cipher.h"
using namespace std;

int main()
{
    string type;
    cout << "Vigenere cipher\n" << endl;
    cout << "Enter '0' if you want encrypt message\nor '1' if you want decode cipher': ";

    getline(cin, type);
    char typeOfAction[1];
    strcpy(typeOfAction, type.c_str());

    if (int(typeOfAction[0]) == 48) {
        cipher(0);
    } else if(int(typeOfAction[0]) == 49) {
        cipher(1);
    } else {
        cout << "Invalid input" << endl;
    }

    return 0;

//
//    string str;
//    getline(cin, str);
//
//    char c[str.size()];
//    strcpy(c, str.c_str());
//
//    auto n = int(c[0]);
//    cout << n;
//
//    return 0;


//    string surname;
//    cout << "Enter your surname: ";
//    getline(cin, surname);
//
//    char surnameChar[surname.size()];
//    strcpy(surnameChar, surname.c_str());
}