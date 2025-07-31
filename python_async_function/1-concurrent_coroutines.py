#!/usr/bin/env python3
"""
Project Holberton -
1. Let's execute multiple coroutines at the same time with async
"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random
# on importe dynamiquement la fonction wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ function coroutine """
    delays = []
    # on déclare une liste qui va contenir les résultat de wait_random
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    # Chaque tâche est un appel à wait_random(max_delay) (qui attend un délai
    # aléatoire entre 0 et max_delay secondes).
    # asyncio.create_task(...) permet de lancer ces appels en parallèle,
    # au lieu de les faire un par un.

    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays
