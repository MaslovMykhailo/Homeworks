#ifndef VIGENERECIPHER_ENCRYPT_H
#define VIGENERECIPHER_ENCRYPT_H
#include <iostream>
#include <cstring>
#include "getData.h"
#include "stringInKey.h"
#include "getCipher.h"
using namespace std;

void cipher(int typeOfAction)
{
    string str = getData(typeOfAction);
    string key = getData(2);

    char strCharArr[str.size()];
    strcpy(strCharArr, str.c_str());

    char keyCharArr[key.size()];
    strcpy(keyCharArr, key.c_str());

    char strInKey[str.size()];

    stringInKey(strCharArr, int(str.size()), keyCharArr, int(key.size()), strInKey);

    char cipher[str.size()];

    getCipher(typeOfAction, strCharArr, strInKey, cipher);

    notification(typeOfAction == 1 ? 0 : 1);
    cout << cipher << endl;
}

#endif //VIGENERECIPHER_ENCRYPT_H
