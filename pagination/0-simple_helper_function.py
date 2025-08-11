#!/usr/bin/env python3
""" Simple helper function """
from typing import List

def index_range (page:int, page_size:int) -> List[int]:
    debut = (page - 1) * page_size
    fin = debut + page_size
    return (debut, fin)

# On doit retourner un tuple de taille 3 contenant un idece de début et un indice de fin
# correspondant à la plage d'indices à renvoyer dans une liste pour ces paramètres
# de pagniation particuliers
