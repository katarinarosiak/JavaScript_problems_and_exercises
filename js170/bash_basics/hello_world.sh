#!/bin/bash


integer=10

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
elif [[ -e ./hello_world.sh ]]
then
  echo $integer is more than 10
else 
  echo wrong
fi