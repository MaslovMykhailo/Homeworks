#ifndef VIGENERECIPHER_GETCIPHER_H
#define VIGENERECIPHER_GETCIPHER_H
#include "stringInKey.h"
#include <stdlib.h> 
using namespace std;

int getIndex(int typeOfAction, int mindex, int kindex)
{
   if (typeOfAction == 0) {
       return mindex + kindex > 25 ?
              mindex + kindex - 26 : mindex + kindex;
   } else {
       if (mindex - kindex > 25) {
           return mindex - kindex - 26;
       } else {
           if (mindex - kindex < 0) {
               return 26 - abs(mindex - kindex);
           } else {
               return mindex - kindex;
           }
       }
   }
}

void getCipher(int typeOfAction, char* message, char* mesInKey, char* cipher)
{
    int mindex = 0, kindex = 0;

    int alphabet[26];

    for (int i = 0 ; i < 26 ; i++) {
        alphabet[i] = 97 + i;
    }

    for (int i = 0 ; i < sizeof(mesInKey) * 4 ; i++) {
        if(!isLetter(message[i])) {
            cipher[i] = message[i];
        } else {
            bool mesIsUpper = false;

            if (int(message[i]) < 97) {
                message[i] = char(int(message[i]) + 32);
                mesIsUpper = true;
            }

            if (int(mesInKey[i]) < 97) {
                mesInKey[i] = char(int(mesInKey[i]) + 32);
            }

            for (int j = 0 ; j < 26 ; j++) {
                if (int(message[i]) == alphabet[j]) mindex = j;
                if (int(mesInKey[i]) == alphabet[j]) kindex = j;
            }

            int d = mesIsUpper ? 32 : 0;

            int index = getIndex(typeOfAction, mindex, kindex);

            cipher[i] = char(alphabet[index] - d);
        }
    }
}

#endif //VIGENERECIPHER_GETCIPHER_H
