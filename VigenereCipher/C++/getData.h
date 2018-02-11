#ifndef VIGENERECIPHER_GETMESSAGEANDKEY_H
#define VIGENERECIPHER_GETMESSAGEANDKEY_H
#include <string>
#include <iostream>
using namespace std;

void notification(int type)
{
    string arrOfMessage[3] = {"Your message: ", "Your cipher: ", "Your key: "};
    cout << arrOfMessage[type];
}

string getData(int type)
{
    notification(type);

    string data;
    getline(cin, data);

    return data;
}
#endif //VIGENERECIPHER_GETMESSAGEANDKEY_H
