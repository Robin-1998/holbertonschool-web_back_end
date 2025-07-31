#!/usr/bin/env python3
"""
Project Holberton -
2. Measure the runtime
"""


import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Function measure the runtime of the function wait_n
    n en argument correpond au nombre de fois que wait_n doit être exécutés
    max_delay comme son nom l'indique est le délais maximum à utiliser
    dans wait_n
    """
    start_time = time.time()
    # à l'aide de l'import time on peut retourner le temps en secondes
    # time.time va retourne l'heure actuelle sous forme à virgules et d'une
    # manière très précise (jusqu'à la microseconde)
    asyncio.run(wait_n(n, max_delay))
    # on exécute wait_n, asyncio.run permet d'exécuter une coroutine
    # car une fonction async (qui est une coroutine // fonction asynchrone)
    # ne peut pas être exécuter comme une fonction
    # normale. c'est là qu'asyncio.run permet de lancer une coroutine depuis
    # un code synchrone
    end_time = time.time()
    # On calcule le temps écoulé puis on le divise par n pour obtenir
    # le temps moyen
    return (end_time - start_time) / n
