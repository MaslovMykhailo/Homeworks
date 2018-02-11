#ifndef VIGENERECIPHER_STRINGINKEY_H
#define VIGENERECIPHER_STRINGINKEY_H
using namespace std;

bool isLetter(char symbol)
{
    int charCode = int(symbol);

    return (charCode > 96 && charCode < 123) ||
           (charCode > 64 && charCode < 91);
}

void stringInKey(char* str, int strLength, char* key, int keyLength, char* outArr)
{
    int j = 0;

    for (int i = 0 ; i < strLength ; i++) {
        if (isLetter(str[i])) {
            outArr[i] = key[j];
            j++;
        } else {
            outArr[i] = str[i];
        }

        if (j == keyLength) {
            j = 0;
        }
    }
}

#endif //VIGENERECIPHER_STRINGINKEY_H
