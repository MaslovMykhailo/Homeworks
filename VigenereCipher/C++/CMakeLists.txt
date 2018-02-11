cmake_minimum_required(VERSION 3.9)
project(VigenereCipher)

set(CMAKE_CXX_STANDARD 11)

add_executable(VigenereCipher getData.h createLetterMatrix.h stringInKey.h getCipher.h main.cpp cipher.h)