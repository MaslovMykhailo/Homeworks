#ifndef VIGENERECIPHER_CREATELETTERMATRIX_H
#define VIGENERECIPHER_CREATELETTERMATRIX_H

void createLetterMatrix(int matrix[26][26])
{
    int k = 97;

    for(int i = 0 ; i < 26 ; i++)
    {
        for(int j = 0 ; j < 26 ; j++)
        {
            matrix[i][j] = k + i + j > 122 ? char(k + i + j - 26) : char(k + i + j);
        }
    }
}

#endif //VIGENERECIPHER_CREATELETTERMATRIX_H
